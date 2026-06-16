import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { TopBar } from '../components/TopBar';
import { Modal } from '../components/Modal';
import { Glyph } from '../assets/icons';
import { MicroPythonRepl } from '../serial/micropythonRepl';
import { BUNDLED_MICROPYTHON, installBundledMicroPythonUf2, supportsBundledMicroPythonInstall } from '../serial/microPythonUf2';
import { PicoFilesystem, type PicoFileEntry } from '../serial/picoFilesystem';
import { REQUIRED_RUNTIME_FILES, type RuntimeFileCheck } from '../serial/runtimeFiles';
import { developerModeStatus, SerialTransport, type SerialLogLevel } from '../serial/serialTransport';
import { loadIdeDrafts, saveIdeDrafts, type IdeDraft } from '../lib/storage';
import { useStore } from '../store/store';

interface TerminalLine {
  level: SerialLogLevel;
  text: string;
}

interface TaskProgress {
  value: number;
  label: string;
}

interface IdeFileRow {
  name: string;
  path: string;
  type: 'file' | 'dir' | 'unknown';
  size?: number;
  source: 'local' | 'pico' | 'both';
  uploaded: boolean;
}

const DEFAULT_CODE_PATH = '/min_kode.py';
const DEFAULT_CODE = "print('Hej fra Pico Kontrol Panel')\n";

export function PicoIdeScreen() {
  const toggleSideMenu = useStore((s) => s.toggleSideMenu);
  const askConfirm = useStore((s) => s.askConfirm);
  const picoIdeOrigin = useStore((s) => s.picoIdeOrigin);
  const active = useStore((s) => s.active);
  const isBleConnected = useStore((s) => s.isBleConnected);
  const bleListFiles = useStore((s) => s.bleListFiles);
  const bleReadText = useStore((s) => s.bleReadText);
  const bleWriteText = useStore((s) => s.bleWriteText);
  const bleDeleteFile = useStore((s) => s.bleDeleteFile);
  const bleRestart = useStore((s) => s.bleRestart);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [busy, setBusy] = useState(false);
  const [files, setFiles] = useState<PicoFileEntry[]>([]);
  const [localFiles, setLocalFiles] = useState<IdeDraft[]>(() => ensureDefaultDraft(loadIdeDrafts()));
  const [path, setPath] = useState(DEFAULT_CODE_PATH);
  const [editorText, setEditorText] = useState(
    () => ensureDefaultDraft(loadIdeDrafts()).find((draft) => draft.path === DEFAULT_CODE_PATH)?.content ?? DEFAULT_CODE,
  );
  const [runtimeChecks, setRuntimeChecks] = useState<RuntimeFileCheck[]>([]);
  const [newFileOpen, setNewFileOpen] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [saveOpen, setSaveOpen] = useState(false);
  const [taskProgress, setTaskProgress] = useState<TaskProgress | null>(null);
  const [installOpen, setInstallOpen] = useState(false);
  const [installSelection, setInstallSelection] = useState<Record<string, boolean>>({});
  const [microPythonOpen, setMicroPythonOpen] = useState(false);
  const [editorScroll, setEditorScroll] = useState({ top: 0, left: 0 });
  const [runningOnPico, setRunningOnPico] = useState(false);
  const [terminalFollow, setTerminalFollow] = useState(true);
  const transportRef = useRef<SerialTransport | null>(null);
  const replRef = useRef<MicroPythonRepl | null>(null);
  const fsRef = useRef<PicoFilesystem | null>(null);
  const uploadInputRef = useRef<HTMLInputElement | null>(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const runningRef = useRef(false);
  const terminalQuietRef = useRef(false);

  const status = developerModeStatus();
  const bleMode = picoIdeOrigin === 'control' && !!active && isBleConnected();
  const canInstallMicroPythonDirectly = supportsBundledMicroPythonInstall();
  const editorLineCount = Math.max(1, editorText.split('\n').length);
  const editorByteSize = new Blob([editorText]).size;

  const transport = useMemo(() => {
    const serial = new SerialTransport({
      onLine: (line) => {
        if (terminalQuietRef.current) return;
        if (runningRef.current && line.trim() && !line.includes('>>>') && !line.includes('raw REPL')) {
          pushLine('info', line);
        }
      },
      onLog: pushLine,
      onDisconnect: () => {
        setConnected(false);
        setRunningOnPico(false);
        runningRef.current = false;
        pushLine('warning', 'USB-forbindelse lukket.');
      },
    });
    transportRef.current = serial;
    return serial;
  }, []);

  function pushLine(level: SerialLogLevel, text: string) {
    setLines((current) => [...current.slice(-140), { level, text }]);
  }

  function finishTaskProgress(label: string) {
    setTaskProgress({ value: 100, label });
    window.setTimeout(() => setTaskProgress(null), 900);
  }

  function renderTaskProgress() {
    if (!taskProgress) return null;
    return (
      <div className="ide-task-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(taskProgress.value)}>
        <div>
          <span>{taskProgress.label}</span>
          <strong>{Math.round(taskProgress.value)}%</strong>
        </div>
        <i style={{ width: `${Math.max(2, Math.min(100, taskProgress.value))}%` }} />
      </div>
    );
  }

  async function withQuietTerminal<T>(action: () => Promise<T>): Promise<T> {
    const wasQuiet = terminalQuietRef.current;
    terminalQuietRef.current = true;
    try {
      return await action();
    } finally {
      terminalQuietRef.current = wasQuiet;
    }
  }

  useEffect(() => {
    if (!terminalFollow) return;
    const el = terminalRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [lines, terminalFollow]);

  function updateLocalDraft(nextPath: string, content: string, uploaded: boolean) {
    setLocalFiles((current) => {
      const next = upsertDraft(current, nextPath, content, uploaded);
      saveIdeDrafts(next);
      return next;
    });
  }

  const fileRows = buildFileRows(files, localFiles);

  useEffect(() => {
    if (bleMode) {
      void listFiles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bleMode]);

  async function connectUsb() {
    if (!status.supported) return;
    setConnecting(true);
    try {
      await transport.requestAndConnect();
      const repl = new MicroPythonRepl(transport);
      replRef.current = repl;
      fsRef.current = new PicoFilesystem(repl);
      setConnected(true);
      await repl.interrupt();
      await probeMicroPython(repl);
      pushLine('success', 'Sendte stop-signal til Pico REPL.');
      await listFilesWith(fsRef.current);
      await checkRuntimeFilesWith(fsRef.current);
    } catch (err) {
      pushLine('error', err instanceof Error ? err.message : 'USB-forbindelse mislykkedes.');
      pushLine('info', 'Hvis Picoen er i BOOTSEL, vises den som et drev og kan ikke forbindes som serial. Brug Installer MicroPython i stedet.');
      setMicroPythonOpen(true);
      setConnected(false);
    } finally {
      setConnecting(false);
    }
  }

  async function probeMicroPython(repl: MicroPythonRepl) {
    const result = await repl.exec("import sys\nprint(sys.implementation.name)\n", 4000);
    if (result.error || !result.output.toLowerCase().includes('micropython')) {
      throw new Error('MicroPython blev ikke fundet på Picoen.');
    }
  }

  async function disconnectUsb() {
    await transportRef.current?.disconnect();
    replRef.current = null;
    fsRef.current = null;
    setConnected(false);
  }

  async function installMicroPython() {
    setBusy(true);
    setTaskProgress({ value: 10, label: 'Klargør MicroPython...' });
    try {
      const driveName = await installBundledMicroPythonUf2((value, label) => setTaskProgress({ value, label }));
      finishTaskProgress('MicroPython kopieret');
      pushLine('success', `Kopierede ${BUNDLED_MICROPYTHON.version} til ${driveName}. Picoen genstarter nu.`);
      setMicroPythonOpen(false);
    } catch (err) {
      setTaskProgress(null);
      pushLine('error', err instanceof Error ? err.message : 'MicroPython installation mislykkedes.');
    } finally {
      setBusy(false);
    }
  }

  async function withFs(action: (fs: PicoFilesystem) => Promise<void>) {
    const fs = fsRef.current;
    if (!fs) return;
    setBusy(true);
    terminalQuietRef.current = true;
    try {
      await action(fs);
    } catch (err) {
      setTaskProgress(null);
      pushLine('error', err instanceof Error ? err.message : 'USB filhandling fejlede.');
    } finally {
      terminalQuietRef.current = false;
      setBusy(false);
    }
  }

  async function listFiles() {
    if (bleMode) {
      setBusy(true);
      try {
        const next = await bleListFiles();
        setFiles(next);
        pushLine('success', `Læste ${next.length} filer fra Pico via Bluetooth.`);
      } catch (err) {
        pushLine('error', err instanceof Error ? err.message : 'BLE filhandling fejlede.');
      } finally {
        setBusy(false);
      }
      return;
    }
    await listFilesWith(fsRef.current);
  }

  async function listFilesWith(fs: PicoFilesystem | null) {
    if (!fs) return;
    setBusy(true);
    try {
      const next = await withQuietTerminal(() => fs.list('/'));
      setFiles(next);
      pushLine('success', `Læste ${next.length} filer fra Pico.`);
    } catch (err) {
      pushLine('error', err instanceof Error ? err.message : 'USB filhandling fejlede.');
    } finally {
      setBusy(false);
    }
  }

  async function checkRuntimeFiles() {
    if (bleMode) {
      setBusy(true);
      try {
        const checks: RuntimeFileCheck[] = [];
        for (const file of REQUIRED_RUNTIME_FILES) {
          try {
            const current = await bleReadText(file.path);
            const ok = normalizeRuntimeContent(current) === normalizeRuntimeContent(file.content);
            checks.push({ ...file, status: ok ? 'ok' : 'outdated', detail: ok ? 'Matcher appens version' : 'Matcher ikke appens version - opdater via USB' });
          } catch {
            checks.push({ ...file, status: 'missing', detail: 'Mangler på Pico' });
          }
        }
        setRuntimeChecks(checks);
        const missing = checks.filter((check) => check.status === 'missing').length;
        const outdated = checks.filter((check) => check.status === 'outdated').length;
        pushLine(missing || outdated ? 'warning' : 'success', `Runtime check: ${missing} mangler, ${outdated} skal opdateres.`);
      } catch (err) {
        pushLine('error', err instanceof Error ? err.message : 'BLE runtime check fejlede.');
      } finally {
        setBusy(false);
      }
      return;
    }
    await checkRuntimeFilesWith(fsRef.current);
  }

  async function checkRuntimeFilesWith(fs: PicoFilesystem | null) {
    if (!fs) return;
    setBusy(true);
    try {
      const checks = await withQuietTerminal(() => collectRuntimeChecks(fs));
      setRuntimeChecks(checks);
      const missing = checks.filter((check) => check.status === 'missing').length;
      const outdated = checks.filter((check) => check.status === 'outdated').length;
      if (missing || outdated) {
        pushLine('warning', `Runtime check: ${missing} mangler, ${outdated} skal opdateres.`);
      } else {
        pushLine('success', 'Runtime check: alle filer er klar.');
      }
    } catch (err) {
      pushLine('error', err instanceof Error ? err.message : 'Runtime check fejlede.');
    } finally {
      setBusy(false);
    }
  }

  async function collectRuntimeChecks(fs: PicoFilesystem | null): Promise<RuntimeFileCheck[]> {
    if (!fs) return [];
    const checks: RuntimeFileCheck[] = [];
    for (const file of REQUIRED_RUNTIME_FILES) {
      try {
        const current = await fs.readText(file.path);
        const ok = normalizeRuntimeContent(current) === normalizeRuntimeContent(file.content);
        checks.push({ ...file, status: ok ? 'ok' : 'outdated', detail: ok ? 'Matcher appens version' : 'Matcher ikke appens version' });
      } catch {
        checks.push({ ...file, status: 'missing', detail: 'Mangler på Pico' });
      }
    }
    return checks;
  }

  async function readFile(nextPath = path) {
    if (bleMode) {
      setBusy(true);
      try {
        const text = await bleReadText(nextPath);
        setPath(nextPath);
        setEditorText(text);
        updateLocalDraft(nextPath, text, true);
        pushLine('success', `Læste ${displayPicoPath(nextPath)} via Bluetooth.`);
      } catch (err) {
        pushLine('error', err instanceof Error ? err.message : 'BLE læsning fejlede.');
      } finally {
        setBusy(false);
      }
      return;
    }

    await withFs(async (fs) => {
      const text = await fs.readText(nextPath);
      setPath(nextPath);
      setEditorText(text);
      updateLocalDraft(nextPath, text, true);
      pushLine('success', `Læste ${nextPath}.`);
    });
  }

  function saveFile() {
    setSaveOpen(true);
  }

  function saveLocalFile() {
    updateLocalDraft(path, editorText, false);
    setSaveOpen(false);
    pushLine('success', `Gemte ${displayPicoPath(path)} lokalt.`);
  }

  async function savePicoFile() {
    setTaskProgress({ value: 0, label: 'Starter gemning...' });
    if (bleMode) {
      setBusy(true);
      try {
        await bleWriteText(path, editorText, (value, label) => setTaskProgress({ value, label }));
        updateLocalDraft(path, editorText, true);
        setSaveOpen(false);
        finishTaskProgress('Gemt på Pico via Bluetooth');
        pushLine('success', `Gemte ${displayPicoPath(path)} på Pico via Bluetooth.`);
        await listFiles();
      } catch (err) {
        setTaskProgress(null);
        pushLine('error', err instanceof Error ? err.message : 'BLE gem fejlede.');
      } finally {
        setBusy(false);
      }
      return;
    }

    if (!fsRef.current) {
      setTaskProgress(null);
      return;
    }
    await withFs(async (fs) => {
      await fs.writeText(path, editorText, (value, label) => setTaskProgress({ value, label }));
      updateLocalDraft(path, editorText, true);
      finishTaskProgress('Gemt på Pico via USB');
      pushLine('success', `Gemte ${path}.`);
      await listFiles();
      await checkRuntimeFiles();
    });
    setSaveOpen(false);
  }

  function downloadFile() {
    const blob = new Blob([editorText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = displayPicoPath(path);
    a.click();
    URL.revokeObjectURL(url);
    setSaveOpen(false);
    pushLine('success', `Downloadede ${displayPicoPath(path)}.`);
  }

  function deleteFile() {
    askConfirm({
      title: 'Slet fil',
      message: `Vil du slette ${displayPicoPath(path)}?`,
      confirmLabel: 'Slet',
      onConfirm: () => {
        void deleteFileConfirmed();
      },
    });
  }

  async function deleteFileConfirmed() {
    if (bleMode) {
      setBusy(true);
      try {
        await bleDeleteFile(path);
        const next = localFiles.filter((draft) => draft.path !== path);
        setLocalFiles(next);
        saveIdeDrafts(next);
        setEditorText('');
        pushLine('warning', `Slettede ${displayPicoPath(path)} på Pico via Bluetooth.`);
        await listFiles();
      } catch (err) {
        pushLine('error', err instanceof Error ? err.message : 'BLE sletning fejlede.');
      } finally {
        setBusy(false);
      }
      return;
    }

    if (!fsRef.current) {
      const next = localFiles.filter((draft) => draft.path !== path);
      setLocalFiles(next);
      saveIdeDrafts(next);
      setEditorText('');
      pushLine('warning', `Slettede ${displayPicoPath(path)} lokalt.`);
      return;
    }

    await withFs(async (fs) => {
      await fs.delete(path);
      const next = localFiles.filter((draft) => draft.path !== path);
      setLocalFiles(next);
      saveIdeDrafts(next);
      pushLine('warning', `Slettede ${path}.`);
      setEditorText('');
      await listFiles();
      await checkRuntimeFiles();
    });
  }

  async function importFile(file: File | undefined) {
    if (!file) return;
    const nextPath = normalizeImportedFileName(file.name);
    if (!nextPath) {
      pushLine('error', 'Kun .py, .txt, .json og .csv kan importeres.');
      return;
    }
    if (file.size > 128 * 1024) {
      pushLine('error', 'Filen er for stor til Pico-værkstedet.');
      return;
    }

    const text = await file.text();
    setPath(nextPath);
    setEditorText(text);
    updateLocalDraft(nextPath, text, false);
    pushLine('success', `Importerede ${displayPicoPath(nextPath)} lokalt.`);
  }

  async function newFile() {
    setNewFileName('');
    setNewFileOpen(true);
  }

  function createNewFile() {
    const nextPath = normalizePicoFileName(newFileName);
    if (!nextPath) return;
    setPath(nextPath);
    setEditorText('');
    updateLocalDraft(nextPath, '', false);
    setNewFileOpen(false);
    pushLine('info', `Ny fil klar: ${displayPicoPath(nextPath)}. Tryk Gem for at oprette den på Pico.`);
  }

  function openFile(file: IdeFileRow) {
    if (file.type !== 'file') {
      setPath(file.path);
      return;
    }

    if (file.source === 'local') {
      const draft = localFiles.find((item) => item.path === file.path);
      setPath(file.path);
      setEditorText(draft?.content ?? '');
      return;
    }

    readFile(file.path);
  }

  async function installRuntimeFiles() {
    if (!connected || bleMode) return;
    const checks = runtimeChecks.length > 0 ? runtimeChecks : await withQuietTerminal(() => collectRuntimeChecks(fsRef.current));
    setRuntimeChecks(checks);
    const nextSelection: Record<string, boolean> = {};
    checks.forEach((check) => {
      nextSelection[check.path] = check.status !== 'ok';
    });
    setInstallSelection(nextSelection);
    setInstallOpen(true);
  }

  async function performInstallRuntimeFiles() {
    await withFs(async (fs) => {
      const checks =
        runtimeChecks.length > 0
          ? runtimeChecks
          : REQUIRED_RUNTIME_FILES.map((file) => ({ ...file, status: 'unknown', detail: 'Ikke tjekket' }) as RuntimeFileCheck);
      const targets = checks.filter((check) => installSelection[check.path]);
      if (targets.length === 0) {
        pushLine('info', 'Ingen filer valgt til installation.');
        return;
      }

      setTaskProgress({ value: 0, label: 'Starter installation...' });
      for (const [index, file] of targets.entries()) {
        pushLine('info', `Installerer ${file.label}...`);
        const baseProgress = (index / targets.length) * 100;
        const fileShare = 100 / targets.length;
        await fs.replaceTextSafely(file.path, file.content, (value, label) => {
          setTaskProgress({
            value: Math.min(99, baseProgress + (value / 100) * fileShare),
            label: `${file.label}: ${label}`,
          });
        });
        pushLine('success', `Installerede ${file.label}.`);
      }
      finishTaskProgress('Installation færdig');
      await listFiles();
      await checkRuntimeFiles();
      setInstallOpen(false);
    });
  }

  async function runEditorCode() {
    if (bleMode) {
      await savePicoFile();
      pushLine('warning', 'Koden er gemt via Bluetooth. Automatisk genstart/genforbindelse er næste trin i planen.');
      return;
    }

    const repl = replRef.current;
    if (!repl) {
      pushLine('info', 'Kører i offline playground. For rigtig MicroPython: forbind en Pico med USB.');
      runLocalPythonPlayground(editorText, pushLine);
      return;
    }

    if (path.endsWith('.py')) {
      await savePicoFile();
      setRunningOnPico(true);
      runningRef.current = true;
      setTerminalFollow(true);
      try {
        await repl.runFile(path);
        pushLine('success', `Kører ${displayPicoPath(path)}. Brug Stop for at afbryde.`);
      } catch (err) {
        setRunningOnPico(false);
        runningRef.current = false;
        pushLine('error', err instanceof Error ? err.message : 'Kunne ikke starte koden.');
      }
      return;
    }

    setBusy(true);
    try {
      const result = await repl.exec(editorText, 20000);
      if (result.output.trim()) pushLine('info', result.output);
      if (result.error.trim()) pushLine('error', result.error);
      if (!result.output.trim() && !result.error.trim()) pushLine('success', 'Koden kørte uden output.');
    } catch (err) {
      pushLine('error', err instanceof Error ? err.message : 'Kunne ikke køre koden.');
    } finally {
      setBusy(false);
    }
  }

  async function stopPicoCode() {
    const repl = replRef.current;
    if (!repl) return;
    try {
      await repl.stop();
      pushLine('warning', 'Stoppede koden på Pico.');
    } catch (err) {
      pushLine('error', err instanceof Error ? err.message : 'Kunne ikke stoppe koden.');
    } finally {
      setRunningOnPico(false);
      runningRef.current = false;
      setTerminalFollow(true);
    }
  }

  function onTerminalScroll() {
    const el = terminalRef.current;
    if (!el) return;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 12;
    setTerminalFollow(atBottom);
  }

  function clearTerminal() {
    setLines([]);
    setTerminalFollow(true);
  }

  return (
    <div className="screen ide-screen">
      <TopBar title="Pico Kodeværksted" onMenu={() => toggleSideMenu()} />

      <div className="ide-layout">
        <section className="ide-panel ide-files-panel">
          <div className="ide-panel-head">
            <h2>Filer</h2>
            <div className="ide-mini-actions">
              <button className="btn btn-outline ide-tool-btn" type="button" onClick={newFile} aria-label="Ny fil" title="Ny fil">
                <Glyph name="plus" size={20} />
              </button>
              <button className="btn btn-outline ide-tool-btn" type="button" onClick={() => uploadInputRef.current?.click()} aria-label="Importer fil" title="Importer fil">
                <Glyph name="upload" size={20} />
              </button>
              <button className="btn btn-outline ide-tool-btn" type="button" onClick={listFiles} disabled={(!connected && !bleMode) || busy} aria-label="Opdater filer" title="Opdater filer">
                <Glyph name="refresh" size={20} />
              </button>
            </div>
          </div>
          <div className="ide-file-list">
            {fileRows.length === 0 ? (
              <button type="button" disabled>
                Ingen filer læst
              </button>
            ) : (
              fileRows.map((file) => (
                <button
                  type="button"
                  key={file.path}
                  onClick={() => openFile(file)}
                  className={path === file.path ? 'active' : ''}
                >
                  <span>{file.name}</span>
                  <small>
                    <i className={`ide-sync-dot sync-${file.source}`} aria-hidden="true" />
                    {file.type === 'dir' ? 'mappe' : file.uploaded ? 'Pico' : 'lokal'}
                  </small>
                </button>
              ))
            )}
          </div>
        </section>

        <section className="ide-panel ide-status-panel">
          <div>
            <h2>{bleMode ? 'Forbundet Pico' : 'USB udvikling'}</h2>
            <p>{bleMode ? `${active?.deviceName ?? 'Pico'} er forbundet via Bluetooth.` : status.message}</p>
          </div>
          {!bleMode && (
            <div className="ide-actions">
              <button
                className="btn btn-primary"
                type="button"
                onClick={connected ? disconnectUsb : connectUsb}
                disabled={!status.supported || connecting}
              >
                <Glyph name="power" size={22} />
                {connecting ? 'Forbinder...' : connected ? 'Afbryd USB' : 'Forbind USB'}
              </button>
              <button className="btn btn-primary" type="button" onClick={installRuntimeFiles} disabled={!connected || bleMode || busy}>
                Installer
              </button>
            </div>
          )}
          <div className="ide-runtime">
            <div className="ide-mini-actions">
              <button className="btn btn-outline" type="button" onClick={checkRuntimeFiles} disabled={(!connected && !bleMode) || busy}>
                Tjek filer
              </button>
              <button className="btn btn-outline ide-disconnect-btn" type="button" onClick={() => setMicroPythonOpen(true)}>
                MicroPython
              </button>
            </div>
            <div className="ide-runtime-list">
              {runtimeChecks.length > 0 && (
                runtimeChecks.map((check) => (
                  <span className={`runtime-${check.status}`} key={check.path}>
                    {check.label}: {check.detail}
                  </span>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="ide-panel ide-editor-panel">
          <div className="ide-panel-head">
            <h2>
              {displayPicoPath(path)}
              <small>{editorByteSize} bytes</small>
            </h2>
            <div className="ide-mini-actions">
              <button className="btn btn-outline" type="button" onClick={runEditorCode} disabled={busy}>
                Kør
              </button>
              <button className="btn btn-outline" type="button" onClick={stopPicoCode} disabled={!connected || !runningOnPico}>
                Stop
              </button>
              <button className="btn btn-primary" type="button" onClick={saveFile} disabled={busy || !path.trim()}>
                Gem
              </button>
              <button className="btn btn-outline btn-danger" type="button" onClick={deleteFile} disabled={busy || !path.trim()}>
                Slet
              </button>
            </div>
          </div>
          {renderTaskProgress()}
          <div className="ide-editor-wrap">
            <div className="ide-line-numbers" aria-hidden="true" style={{ transform: `translateY(${-editorScroll.top}px)` }}>
              {Array.from({ length: editorLineCount }, (_, index) => (
                <span key={index}>{index + 1}</span>
              ))}
            </div>
            <pre
              className="ide-highlight"
              aria-hidden="true"
              style={{ transform: `translate(${-editorScroll.left}px, ${-editorScroll.top}px)` }}
            >
              {highlightPython(editorText)}
            </pre>
            <textarea
              className="ide-editor"
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              onScroll={(e) => setEditorScroll({ top: e.currentTarget.scrollTop, left: e.currentTarget.scrollLeft })}
              spellCheck={false}
            />
          </div>
        </section>

        <section className="ide-panel ide-terminal-panel">
          <div className="ide-panel-head">
            <h2>Terminal</h2>
            <button className="btn btn-outline" type="button" onClick={clearTerminal} disabled={lines.length === 0}>
              Ryd
            </button>
          </div>
          <div className="ide-terminal" aria-live="polite" ref={terminalRef} onScroll={onTerminalScroll}>
            {lines.length === 0 ? (
              <div className="term-line">Ingen USB data endnu.</div>
            ) : (
              lines.map((line, idx) => (
                <div className={`term-line term-${line.level}`} key={`${idx}-${line.text}`}>
                  {line.text}
                </div>
              ))
            )}
          </div>
        </section>
      </div>

      <input
        ref={uploadInputRef}
        type="file"
        accept=".py,.txt,.json,.csv"
        className="sr-only"
        onChange={(e) => {
          void importFile(e.target.files?.[0]);
          e.currentTarget.value = '';
        }}
      />

      {saveOpen && (
        <Modal title="Gem fil" onClose={() => setSaveOpen(false)}>
          <div className="ide-save-options">
            <button className="btn btn-primary" type="button" onClick={saveLocalFile}>
              Gem i browser
            </button>
              <button className="btn btn-primary" type="button" onClick={savePicoFile} disabled={(!connected && !bleMode) || busy}>
                Gem på Pico
              </button>
            {renderTaskProgress()}
            <button className="btn btn-outline" type="button" onClick={downloadFile}>
              Download til computer
            </button>
          </div>
        </Modal>
      )}

      {installOpen && (
        <Modal title="Installer filer" onClose={() => setInstallOpen(false)}>
          <div className="ide-install-list">
            {runtimeChecks.map((file) => (
              <label className="ide-install-row" key={file.path}>
                <input
                  type="checkbox"
                  checked={!!installSelection[file.path]}
                  onChange={(e) => setInstallSelection((current) => ({ ...current, [file.path]: e.target.checked }))}
                />
                <span>
                  <strong>
                    {file.label}
                    <em className={`ide-install-status status-${file.status}`}>{runtimeStatusLabel(file.status)}</em>
                  </strong>
                  <small>{file.kind === 'library' ? 'Bibliotek' : 'Startprogram'} - {file.detail}</small>
                  <small>{file.description}</small>
                </span>
              </label>
            ))}
            {renderTaskProgress()}
            <button className="btn btn-primary" type="button" onClick={performInstallRuntimeFiles} disabled={busy}>
              Installer valgte
            </button>
          </div>
        </Modal>
      )}

      {microPythonOpen && (
        <Modal title="Installer MicroPython" onClose={() => setMicroPythonOpen(false)}>
          <div className="settings-stack">
            <p className="confirm-message">
              Hvis Picoen er helt frisk, skal MicroPython først lægges på den. Appen kan kopiere den indbyggede UF2-fil for dig.
            </p>
            <div className="notice">
              BOOTSEL bruger ikke serial-forbindelsen. Hold BOOTSEL nede, sæt Picoen i USB, slip BOOTSEL, tryk installer, og vælg drevet RPI-RP2.
            </div>
            <small className="muted-note">
              Indbygget: {BUNDLED_MICROPYTHON.board}, {BUNDLED_MICROPYTHON.version} ({BUNDLED_MICROPYTHON.date}).
            </small>
            {renderTaskProgress()}
            {canInstallMicroPythonDirectly ? (
              <button className="btn btn-primary btn-block" type="button" onClick={installMicroPython} disabled={busy}>
                Installer på Pico
              </button>
            ) : (
              <>
                <a className="btn btn-primary btn-block" href={BUNDLED_MICROPYTHON.assetPath} download={BUNDLED_MICROPYTHON.fileName}>
                  Download MicroPython UF2
                </a>
                <div className="notice warning">
                  Brave understøtter ikke direkte installation her. Download UF2-filen og kopier den til RPI-RP2-drevet.
                </div>
              </>
            )}
            <a className="btn btn-outline btn-block" href="https://www.raspberrypi.com/documentation/microcontrollers/micropython.html" target="_blank" rel="noreferrer">
              Se vejledning
            </a>
          </div>
        </Modal>
      )}

      {newFileOpen && (
        <Modal title="Ny Python-fil" onClose={() => setNewFileOpen(false)}>
          <form
            className="ide-new-file-form"
            onSubmit={(e) => {
              e.preventDefault();
              createNewFile();
            }}
          >
            <label htmlFor="new-pico-file">Filnavn</label>
            <div className="ide-new-file-row">
              <input
                id="new-pico-file"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                autoFocus
                placeholder="test"
              />
              <span>.py</span>
            </div>
            <p>Skriv kun navnet. Appen tilføjer .py automatisk.</p>
            <button className="btn btn-primary" type="submit" disabled={!normalizePicoFileName(newFileName)}>
              Opret
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}

function normalizePicoFileName(value: string): string {
  const cleaned = value
    .trim()
    .replace(/\\/g, '/')
    .split('/')
    .filter(Boolean)
    .pop()
    ?.replace(/\.py$/i, '')
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .replace(/^_+|_+$/g, '');
  return cleaned ? `/${cleaned}.py` : '';
}

function normalizeImportedFileName(value: string): string {
  const raw = value
    .trim()
    .replace(/\\/g, '/')
    .split('/')
    .filter(Boolean)
    .pop();
  const match = raw?.match(/^(.+)\.(py|txt|json|csv)$/i);
  if (!match) return '';
  const base = match[1].replace(/[^a-zA-Z0-9_-]/g, '_').replace(/^_+|_+$/g, '');
  return base ? `/${base}.${match[2].toLowerCase()}` : '';
}

function normalizeRuntimeContent(value: string): string {
  return value.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trimEnd();
}

function displayPicoPath(value: string): string {
  return value.split('/').filter(Boolean).pop() ?? value;
}

function highlightPython(code: string) {
  const keywordPattern =
    /\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g;
  const tokenPattern = /(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm;
  const nodes: ReactNode[] = [];

  code.split(/(\r?\n)/).forEach((part, lineIndex) => {
    if (part === '\n' || part === '\r\n') {
      nodes.push(<br key={`br-${lineIndex}`} />);
      return;
    }

    let cursor = 0;
    const matches = [...part.matchAll(tokenPattern)];
    matches.forEach((match, matchIndex) => {
      const start = match.index ?? 0;
      if (start > cursor) {
        nodes.push(...highlightKeywords(part.slice(cursor, start), keywordPattern, `${lineIndex}-${matchIndex}-plain`));
      }
      const token = match[0];
      const className = token.startsWith('#')
        ? 'tok-comment'
        : token.startsWith('"') || token.startsWith("'")
          ? 'tok-string'
          : /^\d/.test(token)
            ? 'tok-number'
            : 'tok-builtin';
      nodes.push(
        <span className={className} key={`${lineIndex}-${matchIndex}-token`}>
          {token}
        </span>,
      );
      cursor = start + token.length;
    });

    if (cursor < part.length) {
      nodes.push(...highlightKeywords(part.slice(cursor), keywordPattern, `${lineIndex}-tail`));
    }
  });

  return nodes.length ? nodes : ' ';
}

function highlightKeywords(text: string, pattern: RegExp, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  const local = new RegExp(pattern.source, 'g');
  [...text.matchAll(local)].forEach((match, index) => {
    const start = match.index ?? 0;
    if (start > cursor) {
      nodes.push(<span key={`${keyBase}-${index}-plain`}>{text.slice(cursor, start)}</span>);
    }
    nodes.push(
      <span className="tok-keyword" key={`${keyBase}-${index}-keyword`}>
        {match[0]}
      </span>,
    );
    cursor = start + match[0].length;
  });
  if (cursor < text.length) {
    nodes.push(<span key={`${keyBase}-plain-end`}>{text.slice(cursor)}</span>);
  }
  return nodes;
}

function ensureDefaultDraft(drafts: IdeDraft[]): IdeDraft[] {
  if (drafts.length > 0) return drafts;
  return [{ path: DEFAULT_CODE_PATH, content: DEFAULT_CODE, uploaded: false, updatedAt: Date.now() }];
}

function upsertDraft(drafts: IdeDraft[], path: string, content: string, uploaded: boolean): IdeDraft[] {
  const next = drafts.filter((draft) => draft.path !== path);
  return [{ path, content, uploaded, updatedAt: Date.now() }, ...next].sort((a, b) => b.updatedAt - a.updatedAt);
}

function runtimeStatusLabel(status: RuntimeFileCheck['status']): string {
  if (status === 'ok') return 'Nyeste';
  if (status === 'outdated') return 'Opdater';
  if (status === 'missing') return 'Mangler';
  return 'Ikke tjekket';
}

function buildFileRows(picoFiles: PicoFileEntry[], localFiles: IdeDraft[]): IdeFileRow[] {
  const rows = new Map<string, IdeFileRow>();

  for (const file of picoFiles) {
    rows.set(file.path, {
      name: file.name,
      path: file.path,
      type: file.type,
      size: file.size,
      source: 'pico',
      uploaded: true,
    });
  }

  for (const draft of localFiles) {
    const existing = rows.get(draft.path);
    if (existing) {
      rows.set(draft.path, {
        ...existing,
        source: 'both',
        uploaded: draft.uploaded,
      });
      continue;
    }

    rows.set(draft.path, {
      name: displayPicoPath(draft.path),
      path: draft.path,
      type: 'file',
      source: 'local',
      uploaded: false,
    });
  }

  return [...rows.values()].sort((a, b) => a.name.localeCompare(b.name, 'da'));
}

function runLocalPythonPlayground(code: string, log: (level: SerialLogLevel, text: string) => void): void {
  const env = new Map<string, string | number | boolean>();
  const output: string[] = [];
  const errors: string[] = [];
  const lines = code.split(/\r?\n/).map((text, index) => ({ text, index }));

  const executeSimpleLine = (rawLine: string, lineNumber: number): boolean => {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) return true;

    const assignment = line.match(/^([A-Za-z_]\w*)\s*=\s*(.+)$/);
    if (assignment) {
      const value = evalBeginnerExpression(assignment[2], env);
      if (value.ok) {
        env.set(assignment[1], value.value);
      } else {
        errors.push(`Linje ${lineNumber}: ${value.error}`);
      }
      return true;
    }

    const printCall = line.match(/^print\((.*)\)$/);
    if (printCall) {
      const parts = splitPrintArgs(printCall[1]);
      const values = parts.map((part) => evalBeginnerExpression(part, env));
      const failed = values.find((value) => !value.ok);
      if (failed && !failed.ok) {
        errors.push(`Linje ${lineNumber}: ${failed.error}`);
        return true;
      }
      output.push(values.map((value) => (value.ok ? String(value.value) : '')).join(' '));
      return true;
    }

    errors.push(`Linje ${lineNumber}: Offline playground understøtter print(...), simple variabler og simple while-løkker.`);
    return false;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i].text;
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;

    const whileMatch = line.match(/^while\s+(.+)\s*:\s*$/);
    if (!whileMatch) {
      executeSimpleLine(raw, lines[i].index + 1);
      continue;
    }

    const block: typeof lines = [];
    let j = i + 1;
    while (j < lines.length && (/^\s+/.test(lines[j].text) || !lines[j].text.trim())) {
      if (lines[j].text.trim()) block.push(lines[j]);
      j += 1;
    }

    if (block.length === 0) {
      errors.push(`Linje ${lines[i].index + 1}: while-løkken mangler indrykket kode.`);
      i = j - 1;
      continue;
    }

    let guard = 0;
    while (true) {
      const condition = evalBeginnerCondition(whileMatch[1], env);
      if (!condition.ok) {
        errors.push(`Linje ${lines[i].index + 1}: ${condition.error}`);
        break;
      }
      if (!condition.value) break;
      for (const blockLine of block) {
        executeSimpleLine(blockLine.text, blockLine.index + 1);
        if (errors.length) break;
      }
      if (errors.length) break;
      guard += 1;
      if (guard > 1000) {
        errors.push(`Linje ${lines[i].index + 1}: while-løkken stoppede efter 1000 gentagelser.`);
        break;
      }
    }
    i = j - 1;
  }

  if (output.length) log('info', output.join('\n'));
  if (errors.length) log('error', errors.join('\n'));
  if (!output.length && !errors.length) log('success', 'Offline kørsel færdig uden output.');
}

type EvalResult = { ok: true; value: string | number | boolean } | { ok: false; error: string };
type ConditionResult = { ok: true; value: boolean } | { ok: false; error: string };

function evalBeginnerCondition(raw: string, env: Map<string, string | number | boolean>): ConditionResult {
  const expr = raw.trim();
  const comparison = expr.match(/^(.+?)\s*(<=|>=|==|!=|<|>)\s*(.+)$/);
  if (comparison) {
    const left = evalBeginnerExpression(comparison[1], env);
    const right = evalBeginnerExpression(comparison[3], env);
    if (!left.ok) return { ok: false, error: left.error };
    if (!right.ok) return { ok: false, error: right.error };

    switch (comparison[2]) {
      case '<':
        return { ok: true, value: left.value < right.value };
      case '<=':
        return { ok: true, value: left.value <= right.value };
      case '>':
        return { ok: true, value: left.value > right.value };
      case '>=':
        return { ok: true, value: left.value >= right.value };
      case '==':
        return { ok: true, value: left.value === right.value };
      case '!=':
        return { ok: true, value: left.value !== right.value };
      default:
        return { ok: false, error: 'Betingelsen kunne ikke læses.' };
    }
  }

  const value = evalBeginnerExpression(expr, env);
  if (!value.ok) return { ok: false, error: value.error };
  return { ok: true, value: Boolean(value.value) };
}

function evalBeginnerExpression(raw: string, env: Map<string, string | number | boolean>): EvalResult {
  const expr = raw.trim();
  if (!expr) return { ok: true, value: '' };

  const quoted = expr.match(/^(['"])(.*)\1$/);
  if (quoted) {
    return { ok: true, value: quoted[2].replace(/\\n/g, '\n').replace(/\\t/g, '\t') };
  }

  if (/^-?\d+(\.\d+)?$/.test(expr)) {
    return { ok: true, value: Number(expr) };
  }

  if (expr === 'True') return { ok: true, value: true };
  if (expr === 'False') return { ok: true, value: false };

  if (/^[A-Za-z_]\w*$/.test(expr)) {
    return env.has(expr) ? { ok: true, value: env.get(expr) ?? '' } : { ok: false, error: `${expr} findes ikke endnu.` };
  }

  const numericExpr = expr.replace(/\b[A-Za-z_]\w*\b/g, (name) => {
    const value = env.get(name);
    return typeof value === 'number' ? String(value) : 'NaN';
  });
  if (/^[\d+\-*/(). %NaN]+$/.test(numericExpr) && !numericExpr.includes('NaN')) {
    try {
      const value = Function(`"use strict"; return (${numericExpr});`)();
      return Number.isFinite(value) ? { ok: true, value } : { ok: false, error: 'Regnestykket kunne ikke beregnes.' };
    } catch {
      return { ok: false, error: 'Regnestykket kunne ikke læses.' };
    }
  }

  return { ok: false, error: `Kan ikke køre "${expr}" offline endnu.` };
}

function splitPrintArgs(value: string): string[] {
  const parts: string[] = [];
  let current = '';
  let quote: string | null = null;

  for (const char of value) {
    if ((char === '"' || char === "'") && current[current.length - 1] !== '\\') {
      quote = quote === char ? null : quote ?? char;
    }
    if (char === ',' && !quote) {
      parts.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  parts.push(current);
  return parts;
}
