import { useEffect, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import { TopBar } from '../components/TopBar';
import { Modal } from '../components/Modal';
import { Glyph } from '../assets/icons';
import { MicroPythonRepl } from '../serial/micropythonRepl';
import { BUNDLED_MICROPYTHON, installBundledMicroPythonUf2, supportsBundledMicroPythonInstall } from '../serial/microPythonUf2';
import { PicoFilesystem, type PicoFileEntry } from '../serial/picoFilesystem';
import { REQUIRED_RUNTIME_FILES, type RuntimeFileCheck } from '../serial/runtimeFiles';
import { developerModeStatus, SerialTransport, type SerialLogLevel } from '../serial/serialTransport';
import { analyzeOfflineMicroPython, runOfflineMicroPython } from '../serial/offlineMicroPython';
import { explainMicroPythonError } from '../serial/microPythonErrors';
import { loadIdeDrafts, loadIdeSettings, saveIdeDrafts, saveIdeSettings, type IdeDraft } from '../lib/storage';
import { useStore } from '../store/store';

interface TerminalLine {
  level: SerialLogLevel;
  text: string;
  technical?: string;
}

interface TaskProgress {
  value: number;
  label: string;
  cancellable?: boolean;
}

interface IdeFileRow {
  kind: 'file';
  name: string;
  path: string;
  type: 'file' | 'dir' | 'unknown';
  size?: number;
  source: FileLocation;
  uploaded: boolean;
}

interface IdeFileSeparator {
  kind: 'separator';
  id: string;
  label: string;
}

type IdeFileListItem = IdeFileRow | IdeFileSeparator;
type FileLocation = 'local' | 'pico';

interface AutocompleteState {
  items: CompletionSuggestion[];
  selected: number;
  start: number;
  end: number;
  position: { left: number; top: number };
}

interface CompletionSuggestion {
  label: string;
  insert: string;
}

const DEFAULT_CODE_PATH = '/min_kode.py';
const DEFAULT_CODE = "print('Hej fra Pico Kontrol Panel')\n";
const IDE_MIN_WIDTH = 980;

function draftKey(source: FileLocation, nextPath: string): string {
  return `${source}:${nextPath}`;
}

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
  const bleRestartAndReconnect = useStore((s) => s.bleRestartAndReconnect);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [busy, setBusy] = useState(false);
  const [files, setFiles] = useState<PicoFileEntry[]>([]);
  const [loadingFilePath, setLoadingFilePath] = useState<string | null>(null);
  const [localFiles, setLocalFiles] = useState<IdeDraft[]>(() => ensureDefaultDraft(loadIdeDrafts()));
  const [path, setPath] = useState(DEFAULT_CODE_PATH);
  const [activeSource, setActiveSource] = useState<FileLocation>('local');
  const [editorText, setEditorText] = useState(
    () => ensureDefaultDraft(loadIdeDrafts()).find((draft) => draft.path === DEFAULT_CODE_PATH)?.content ?? DEFAULT_CODE,
  );
  const [runtimeChecks, setRuntimeChecks] = useState<RuntimeFileCheck[]>([]);
  const [newFileOpen, setNewFileOpen] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [renameFile, setRenameFile] = useState<IdeFileRow | null>(null);
  const [renameFileName, setRenameFileName] = useState('');
  const [saveOpen, setSaveOpen] = useState(false);
  const [taskProgress, setTaskProgress] = useState<TaskProgress | null>(null);
  const [installOpen, setInstallOpen] = useState(false);
  const [installSelection, setInstallSelection] = useState<Record<string, boolean>>({});
  const [microPythonOpen, setMicroPythonOpen] = useState(false);
  const [mainRestartOpen, setMainRestartOpen] = useState(false);
  const [editorScroll, setEditorScroll] = useState({ top: 0, left: 0 });
  const [runningOnPico, setRunningOnPico] = useState(false);
  const [runningOffline, setRunningOffline] = useState(false);
  const [terminalFollow, setTerminalFollow] = useState(true);
  const [picoSnapshots, setPicoSnapshots] = useState<Record<string, string>>({});
  const [sessionDrafts, setSessionDrafts] = useState<Record<string, string>>({});
  const [autocomplete, setAutocomplete] = useState<AutocompleteState | null>(null);
  const [clearTerminalOnRun, setClearTerminalOnRun] = useState(() => loadIdeSettings().clearTerminalOnRun);
  const [simplifiedErrors, setSimplifiedErrors] = useState(() => loadIdeSettings().simplifiedErrors);
  const [screenTooSmall, setScreenTooSmall] = useState(() => typeof window !== 'undefined' && window.innerWidth < IDE_MIN_WIDTH);
  const transportRef = useRef<SerialTransport | null>(null);
  const replRef = useRef<MicroPythonRepl | null>(null);
  const fsRef = useRef<PicoFilesystem | null>(null);
  const uploadInputRef = useRef<HTMLInputElement | null>(null);
  const editorRef = useRef<HTMLTextAreaElement | null>(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const runningRef = useRef(false);
  const terminalQuietRef = useRef(false);
  const offlineAbortRef = useRef<AbortController | null>(null);
  const bleFileReadAbortRef = useRef<AbortController | null>(null);
  const bleFileReadDoneRef = useRef<Promise<void> | null>(null);
  const bleFileReadGenerationRef = useRef(0);
  const bleFileReadActivePathRef = useRef<string | null>(null);
  const bleFileReadIntentRef = useRef<string | null>(null);
  const bleSessionKeyRef = useRef<string | null>(null);
  const taskProgressClearTimerRef = useRef<number | null>(null);

  const status = developerModeStatus();
  const bleMode = picoIdeOrigin === 'control' && !!active && isBleConnected();
  const bleSessionKey = bleMode ? (active?.deviceID ?? 'ble') : null;
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
        clearPicoSessionFiles();
        pushLine('warning', 'USB-forbindelse lukket.');
      },
    });
    transportRef.current = serial;
    return serial;
  }, []);

  function pushLine(level: SerialLogLevel, text: string) {
    setLines((current) => [...current.slice(-140), { level, text }]);
  }

  function pushMicroPythonError(errorText: string, sourceCode = editorText, level: SerialLogLevel = 'error') {
    if (!simplifiedErrors) {
      pushLine(level, errorText);
      return;
    }
    const explanation = explainMicroPythonError(errorText, sourceCode);
    setLines((current) => [...current.slice(-140), { level, text: explanation.simple, technical: explanation.technical }]);
  }

  function setEditorDraft(nextPath: string, content: string, source: FileLocation = activeSource) {
    setPath(nextPath);
    setActiveSource(source);
    setEditorText(content);
    setSessionDrafts((current) => ({ ...current, [draftKey(source, nextPath)]: content }));
  }

  function showLoadingEditorShell(nextPath: string, source: FileLocation = 'pico') {
    setPath(nextPath);
    setActiveSource(source);
    setEditorText('');
    setAutocomplete(null);
    setEditorScroll({ top: 0, left: 0 });
  }

  function updateEditorText(content: string, cursor = editorRef.current?.selectionStart ?? content.length) {
    setEditorText(content);
    setSessionDrafts((current) => ({ ...current, [draftKey(activeSource, path)]: content }));
    updateAutocomplete(content, cursor);
  }

  function clearSessionDraft(nextPath: string, source: FileLocation = activeSource) {
    setSessionDrafts((current) => {
      const key = draftKey(source, nextPath);
      if (!(key in current)) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function editorContentIsSavedOnPico(): boolean {
    return picoSnapshots[path] === editorText;
  }

  function logRuntimeCheckDetails(checks: RuntimeFileCheck[]) {
    if (checks.length === 0) return;
    pushLine('info', 'Fil-tjek detaljer:');
    for (const check of checks) {
      pushLine(runtimeCheckLogLevel(check.status), `${check.label}: ${check.detail}`);
    }
  }

  function markPicoSnapshot(nextPath: string, content: string) {
    setPicoSnapshots((current) => ({ ...current, [nextPath]: content }));
  }

  function clearPicoSessionFiles() {
    setFiles([]);
    setRuntimeChecks([]);
    setPicoSnapshots({});
    setSessionDrafts({});
    setAutocomplete(null);
    setPath((currentPath) => {
      const currentDrafts = ensureDefaultDraft(loadIdeDrafts());
      const currentDraft = currentDrafts.find((draft) => draft.path === currentPath);
      if (currentDraft) return currentPath;

      const nextDraft = currentDrafts[0];
      setActiveSource('local');
      setEditorText(nextDraft.content);
      return nextDraft.path;
    });
  }

  function finishTaskProgress(label: string) {
    clearTaskProgressTimer();
    setTaskProgress({ value: 100, label });
    taskProgressClearTimerRef.current = window.setTimeout(() => {
      taskProgressClearTimerRef.current = null;
      setTaskProgress(null);
    }, 900);
  }

  function clearTaskProgressTimer() {
    if (taskProgressClearTimerRef.current === null) return;
    window.clearTimeout(taskProgressClearTimerRef.current);
    taskProgressClearTimerRef.current = null;
  }

  function renderTaskProgress() {
    if (!taskProgress) return null;
    return (
      <div className="ide-task-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(taskProgress.value)}>
        <div>
          <span>{taskProgress.label}</span>
          <strong>{Math.round(taskProgress.value)}%</strong>
          {taskProgress.cancellable && (
            <button className="ide-task-cancel" type="button" onClick={cancelCurrentTask} aria-label="Stop handling" title="Stop">
              <Glyph name="delete" size={18} />
            </button>
          )}
        </div>
        <i style={{ width: `${Math.max(2, Math.min(100, taskProgress.value))}%` }} />
      </div>
    );
  }

  function cancelCurrentTask() {
    if (!bleFileReadAbortRef.current) return;
    cancelBleFileRead('Stopper læsning...', true, true);
  }

  function cancelBleFileRead(label = 'Stopper læsning...', keepProgress = false, logCancel = false) {
    clearTaskProgressTimer();
    bleFileReadIntentRef.current = null;
    bleFileReadGenerationRef.current += 1;
    bleFileReadAbortRef.current?.abort();
    bleFileReadAbortRef.current = null;
    bleFileReadActivePathRef.current = null;
    setLoadingFilePath(null);
    setBusy(false);
    if (keepProgress) {
      setTaskProgress({ value: taskProgress?.value ?? 0, label, cancellable: false });
    } else {
      setTaskProgress(null);
    }
    if (logCancel) {
      pushLine('warning', 'Stopper BLE-læsning efter den aktuelle datapakke.');
    }
  }

  function queueBleFileRead(nextPath: string) {
    if (bleFileReadActivePathRef.current === nextPath || bleFileReadIntentRef.current === nextPath) {
      return;
    }

    bleFileReadIntentRef.current = nextPath;
    if (bleFileReadDoneRef.current) {
      bleFileReadGenerationRef.current += 1;
      bleFileReadAbortRef.current?.abort();
      bleFileReadAbortRef.current = null;
      bleFileReadActivePathRef.current = null;
      showLoadingEditorShell(nextPath);
      setLoadingFilePath(nextPath);
      setBusy(true);
      clearTaskProgressTimer();
      setTaskProgress({ value: 2, label: `Skifter til ${displayPicoPath(nextPath)}...`, cancellable: true });
      return;
    }

    startNextQueuedBleFileRead();
  }

  function startNextQueuedBleFileRead() {
    if (bleFileReadDoneRef.current) return;
    const nextPath = bleFileReadIntentRef.current;
    if (!nextPath) return;
    bleFileReadIntentRef.current = null;

    const generation = bleFileReadGenerationRef.current + 1;
    bleFileReadGenerationRef.current = generation;
    const abortController = new AbortController();
    bleFileReadAbortRef.current = abortController;
    bleFileReadActivePathRef.current = nextPath;
    showLoadingEditorShell(nextPath);
    setLoadingFilePath(nextPath);
    setBusy(true);
    clearTaskProgressTimer();
    setTaskProgress({ value: 12, label: `Indlæser ${displayPicoPath(nextPath)}...`, cancellable: true });

    const readTask = (async () => {
      try {
        const text = await bleReadText(
          nextPath,
          (value, label) => {
            if (bleFileReadGenerationRef.current === generation) {
              setTaskProgress({ value, label, cancellable: true });
            }
          },
          abortController.signal,
        );
        if (abortController.signal.aborted || bleFileReadGenerationRef.current !== generation) return;
        setEditorDraft(nextPath, text, 'pico');
        markPicoSnapshot(nextPath, text);
        finishTaskProgress('Fil indlæst');
      } catch (err) {
        if (bleFileReadGenerationRef.current !== generation) return;
        if (isAbortError(err) || abortController.signal.aborted) {
          pushLine('info', `Stoppede læsning af ${displayPicoPath(nextPath)}.`);
        } else {
          setTaskProgress(null);
          pushLine('error', err instanceof Error ? err.message : 'BLE læsning fejlede.');
        }
      }
    })();

    bleFileReadDoneRef.current = readTask;
    void readTask.finally(() => {
      if (bleFileReadDoneRef.current !== readTask) return;
      bleFileReadDoneRef.current = null;
      if (bleFileReadAbortRef.current === abortController) {
        bleFileReadAbortRef.current = null;
      }
      if (bleFileReadActivePathRef.current === nextPath) {
        bleFileReadActivePathRef.current = null;
      }

      const hasNextIntent = !!bleFileReadIntentRef.current;
      if (!hasNextIntent) {
        setLoadingFilePath(null);
        setBusy(false);
        if (abortController.signal.aborted) setTaskProgress(null);
      }
      startNextQueuedBleFileRead();
    });
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

  useEffect(() => {
    saveIdeSettings({ clearTerminalOnRun, simplifiedErrors });
  }, [clearTerminalOnRun, simplifiedErrors]);

  useEffect(() => {
    const onResize = () => setScreenTooSmall(window.innerWidth < IDE_MIN_WIDTH);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    return () => {
      clearTaskProgressTimer();
      const transport = transportRef.current;
      replRef.current = null;
      fsRef.current = null;
      transportRef.current = null;
      void transport?.disconnect().catch(() => {});
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== 's') return;
      event.preventDefault();
      if (!busy && path.trim() && !screenTooSmall && !saveOpen && !renameFile && !newFileOpen) {
        void quickSaveCurrentFile();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeSource, bleMode, busy, connected, editorText, path, screenTooSmall, saveOpen, renameFile, newFileOpen]);

  function updateLocalDraft(nextPath: string, content: string, uploaded: boolean) {
    setLocalFiles((current) => {
      const next = upsertDraft(current, nextPath, content, uploaded);
      saveIdeDrafts(next);
      return next;
    });
  }

  const fileListItems = buildFileListItems(files, localFiles, sessionDrafts);

  useEffect(() => {
    if (bleMode) {
      void listFiles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bleMode]);

  useEffect(() => {
    const previous = bleSessionKeyRef.current;
    if (previous && previous !== bleSessionKey) {
      clearPicoSessionFiles();
    }
    bleSessionKeyRef.current = bleSessionKey;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bleSessionKey]);

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
    clearPicoSessionFiles();
  }

  async function installMicroPython() {
    setBusy(true);
    setMicroPythonOpen(false);
    setTaskProgress({ value: 10, label: 'Klargør MicroPython...' });
    try {
      const driveName = await installBundledMicroPythonUf2((value, label) => setTaskProgress({ value, label }));
      finishTaskProgress('MicroPython kopieret');
      pushLine('success', `Kopierede ${BUNDLED_MICROPYTHON.version} til ${driveName}. Picoen genstarter nu.`);
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
        pushLine('success', `Indlæste ${next.length} filer fra Pico via Bluetooth.`);
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
      pushLine('success', `Indlæste ${next.length} filer fra Pico.`);
    } catch (err) {
      pushLine('error', err instanceof Error ? err.message : 'USB filhandling fejlede.');
    } finally {
      setBusy(false);
    }
  }

  async function checkRuntimeFiles() {
    if (bleMode) {
      setBusy(true);
      setTaskProgress({ value: 4, label: 'Tjekker biblioteker på Pico via Bluetooth...' });
      try {
        const normalizedChecks = await collectBleRuntimeChecks((value, label) => setTaskProgress({ value, label }));
        setRuntimeChecks(normalizedChecks);
        const missing = normalizedChecks.filter((check) => check.status === 'missing').length;
        const outdated = normalizedChecks.filter((check) => check.status === 'outdated').length;
        pushLine(missing || outdated ? 'warning' : 'success', `Runtime check: ${missing} mangler, ${outdated} skal opdateres.`);
        logRuntimeCheckDetails(normalizedChecks);
        finishTaskProgress('Fil-tjek færdigt');
      } catch (err) {
        setTaskProgress(null);
        pushLine('error', err instanceof Error ? err.message : 'BLE runtime check fejlede.');
      } finally {
        setBusy(false);
      }
      return;
    }
    await checkRuntimeFilesWith(fsRef.current);
  }

  async function collectBleRuntimeChecks(onProgress?: (value: number, label: string) => void): Promise<RuntimeFileCheck[]> {
    const checks: RuntimeFileCheck[] = [];
    const readableFiles = REQUIRED_RUNTIME_FILES.filter((file) => file.kind === 'library' && !isBleProtectedRuntimeFile(file));
    let readableIndex = 0;
    for (const file of REQUIRED_RUNTIME_FILES) {
      if (file.kind === 'program') {
        checks.push({ ...file, status: 'unknown', detail: 'Startprogram kan vælges til installation' });
        continue;
      }

      if (isBleProtectedRuntimeFile(file)) {
        checks.push({ ...file, status: 'unknown', detail: 'Opdateres via USB' });
        continue;
      }

      try {
        const baseProgress = (readableIndex / Math.max(1, readableFiles.length)) * 100;
        const fileShare = 100 / Math.max(1, readableFiles.length);
        pushLine('info', `Tjekker ${file.label} på Pico via Bluetooth...`);
        onProgress?.(Math.min(95, baseProgress), `Tjekker ${file.label} på Pico...`);
        const current = await bleReadText(file.path, (value, label) => {
          onProgress?.(Math.min(95, baseProgress + (value / 100) * fileShare), `${file.label}: ${label}`);
        });
        const ok = normalizeRuntimeContent(current) === normalizeRuntimeContent(file.content);
        checks.push({ ...file, status: ok ? 'ok' : 'outdated', detail: ok ? 'Matcher appens version' : 'Kan installeres via Bluetooth' });
      } catch {
        checks.push({ ...file, status: 'missing', detail: 'Mangler på Pico' });
      } finally {
        readableIndex += 1;
      }
    }
    onProgress?.(100, 'Fil-tjek færdigt');
    return normalizeRuntimeChecks(checks);
  }
  async function checkRuntimeFilesWith(fs: PicoFilesystem | null) {
    if (!fs) return;
    setBusy(true);
    try {
      const checks = await withQuietTerminal(() => collectRuntimeChecks(fs));
      const normalizedChecks = normalizeRuntimeChecks(checks);
      setRuntimeChecks(normalizedChecks);
      const missing = normalizedChecks.filter((check) => check.status === 'missing').length;
      const outdated = normalizedChecks.filter((check) => check.status === 'outdated').length;
      if (missing || outdated) {
        pushLine('warning', `Runtime check: ${missing} mangler, ${outdated} skal opdateres.`);
      } else {
        pushLine('success', 'Runtime check: alle filer er klar.');
      }
      logRuntimeCheckDetails(normalizedChecks);
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
      if (file.kind === 'program') {
        checks.push({ ...file, status: 'unknown', detail: 'Startprogram kan vælges til installation' });
        continue;
      }

      try {
        const current = await fs.readText(file.path);
        const ok = normalizeRuntimeContent(current) === normalizeRuntimeContent(file.content);
        checks.push({ ...file, status: ok ? 'ok' : 'outdated', detail: ok ? 'Matcher appens version' : 'Matcher ikke appens version' });
      } catch {
        checks.push({ ...file, status: 'missing', detail: 'Mangler på Pico' });
      }
    }
    return normalizeRuntimeChecks(checks);
  }

  async function readFile(nextPath = path) {
    if (bleMode) {
      queueBleFileRead(nextPath);
      return;
    }

    setLoadingFilePath(nextPath);
    await withFs(async (fs) => {
      setTaskProgress({ value: 12, label: `Indlæser ${displayPicoPath(nextPath)}...` });
      const text = await fs.readText(nextPath);
      setEditorDraft(nextPath, text, 'pico');
      markPicoSnapshot(nextPath, text);
      finishTaskProgress('Fil indlæst');
    });
    setLoadingFilePath(null);
  }

  function saveFile() {
    setSaveOpen(true);
  }

  async function quickSaveCurrentFile() {
    if (activeSource === 'pico') {
      if (!connected && !bleMode) {
        pushLine('error', 'Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.');
        return;
      }
      await savePicoFile();
      return;
    }

    saveLocalFile();
  }

  function saveLocalFile() {
    updateLocalDraft(path, editorText, false);
    setActiveSource('local');
    setSessionDrafts((current) => ({ ...current, [draftKey('local', path)]: editorText }));
    setSaveOpen(false);
    pushLine('success', `Gemte ${displayPicoPath(path)} lokalt.`);
  }

  async function savePicoFile(): Promise<boolean> {
    setSaveOpen(false);
    setTaskProgress({ value: 0, label: 'Starter gemning...' });
    if (bleMode) {
      setBusy(true);
      try {
        await bleWriteText(path, editorText, (value, label) => setTaskProgress({ value, label }));
        markPicoSnapshot(path, editorText);
        setActiveSource('pico');
        setSessionDrafts((current) => ({ ...current, [draftKey('pico', path)]: editorText }));
        finishTaskProgress('Gemt på Pico via Bluetooth');
        pushLine('success', `Gemte ${displayPicoPath(path)} på Pico via Bluetooth.`);
        if (isMainPyPath(path)) {
          setMainRestartOpen(true);
          pushLine('warning', 'main.py er gemt. Genstart Picoen for at køre den nye version.');
        }
        await listFiles();
        return true;
      } catch (err) {
        setTaskProgress(null);
        pushLine('error', err instanceof Error ? err.message : 'BLE gem fejlede.');
        return false;
      } finally {
        setBusy(false);
      }
    }

    if (!fsRef.current) {
      setTaskProgress(null);
      return false;
    }
    let saved = false;
    await withFs(async (fs) => {
      await fs.writeText(path, editorText, (value, label) => setTaskProgress({ value, label }));
      markPicoSnapshot(path, editorText);
      setActiveSource('pico');
      setSessionDrafts((current) => ({ ...current, [draftKey('pico', path)]: editorText }));
      finishTaskProgress('Gemt på Pico via USB');
      pushLine('success', `Gemte ${path}.`);
      await listFiles();
      await checkRuntimeFiles();
      saved = true;
    });
    return saved;
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

  async function applyMainPyRestart(target: 'control' | 'ide') {
    setBusy(true);
    setMainRestartOpen(false);
    setTaskProgress({ value: 10, label: 'Genstarter Pico...' });
    try {
      const reconnected = await bleRestartAndReconnect(target);
      if (reconnected) {
        finishTaskProgress('Pico genforbundet');
        pushLine('success', target === 'control' ? 'Pico genforbundet. Åbner kontrolpanelet.' : 'Pico genforbundet til Kodeværkstedet.');
        if (target === 'ide') {
          await listFiles();
        }
      } else {
        setTaskProgress(null);
        pushLine('warning', 'Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet.');
      }
    } catch (err) {
      setTaskProgress(null);
      pushLine('error', err instanceof Error ? err.message : 'Genstart/genforbindelse mislykkedes.');
    } finally {
      setBusy(false);
    }
  }

  function deleteFile(file?: IdeFileRow) {
    const target: Pick<IdeFileRow, 'path' | 'source'> = file ?? { path, source: activeSource };
    const location = target.source === 'pico' ? 'Pico' : 'browser';
    askConfirm({
      title: 'Slet fil',
      message: `Vil du slette ${displayPicoPath(target.path)} fra ${location}?`,
      confirmLabel: 'Slet',
      onConfirm: () => {
        void deleteFileConfirmed(target);
      },
    });
  }

  async function deleteFileConfirmed(target: Pick<IdeFileRow, 'path' | 'source'>) {
    const targetPath = target.path;
    const targetSource = target.source;
    const deletingOpenFile = targetPath === path && targetSource === activeSource;

    if (targetSource === 'local') {
      const next = localFiles.filter((draft) => draft.path !== targetPath);
      setLocalFiles(next);
      saveIdeDrafts(next);
      if (deletingOpenFile) setEditorDraft(targetPath, '', 'local');
      clearSessionDraft(targetPath, 'local');
      pushLine('warning', `Slettede ${displayPicoPath(targetPath)} fra browseren.`);
      return;
    }

    if (bleMode) {
      setBusy(true);
      try {
        await bleDeleteFile(targetPath);
        setPicoSnapshots((current) => {
          const next = { ...current };
          delete next[targetPath];
          return next;
        });
        if (deletingOpenFile) setEditorDraft(targetPath, '', 'pico');
        clearSessionDraft(targetPath, 'pico');
        pushLine('warning', `Slettede ${displayPicoPath(targetPath)} på Pico via Bluetooth.`);
        await listFiles();
      } catch (err) {
        pushLine('error', err instanceof Error ? err.message : 'BLE sletning fejlede.');
      } finally {
        setBusy(false);
      }
      return;
    }

    if (!fsRef.current) {
      pushLine('error', 'Ingen Pico-forbindelse. Kan ikke slette Pico-filen.');
      return;
    }

    await withFs(async (fs) => {
      await fs.delete(targetPath);
      setPicoSnapshots((current) => {
        const next = { ...current };
        delete next[targetPath];
        return next;
      });
      pushLine('warning', `Slettede ${targetPath}.`);
      if (deletingOpenFile) setEditorDraft(targetPath, '', 'pico');
      clearSessionDraft(targetPath, 'pico');
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
    setEditorDraft(nextPath, text, 'local');
    pushLine('success', `Importerede ${displayPicoPath(nextPath)} lokalt.`);
  }

  async function newFile() {
    setNewFileName('');
    setNewFileOpen(true);
  }

  function createNewFile() {
    const nextPath = normalizePicoFileName(newFileName);
    if (!nextPath) return;
    setEditorDraft(nextPath, '', 'local');
    setNewFileOpen(false);
    pushLine('info', `Ny fil klar: ${displayPicoPath(nextPath)}. Tryk Gem for at oprette den på Pico.`);
  }

  function openRenameFile(file: IdeFileRow) {
    if (file.type !== 'file') return;
    setRenameFile(file);
    setRenameFileName(displayPicoPath(file.path));
  }

  async function renameCurrentFile() {
    if (!renameFile) return;
    const nextPath = normalizeEditableFileName(renameFileName);
    if (!nextPath || nextPath === renameFile.path) {
      setRenameFile(null);
      return;
    }

    if (filePathExists(nextPath, renameFile.source)) {
      pushLine('error', `Der findes allerede en fil med navnet ${displayPicoPath(nextPath)}.`);
      return;
    }

    const renameLocal = renameFile.source === 'local';
    const renamePico = renameFile.source === 'pico';

    if (bleMode && renamePico && (isMainPyPath(renameFile.path) || isMainPyPath(nextPath))) {
      pushLine('error', 'main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.');
      return;
    }

    setBusy(true);
    try {
      if (renamePico) {
        if (bleMode) {
          const content = picoSnapshots[renameFile.path] ?? (await bleReadText(renameFile.path));
          await bleWriteText(nextPath, content, (value, label) => setTaskProgress({ value, label }));
          await bleDeleteFile(renameFile.path);
          setPicoSnapshots((current) => ({ ...renameSnapshot(current, renameFile.path, nextPath), [nextPath]: content }));
        } else if (fsRef.current) {
          await withQuietTerminal(() => fsRef.current!.rename(renameFile.path, nextPath));
          setPicoSnapshots((current) => renameSnapshot(current, renameFile.path, nextPath));
        }
      }

      if (renameLocal) {
        setLocalFiles((current) => {
          const next = current.map((draft) => (draft.path === renameFile.path ? { ...draft, path: nextPath, updatedAt: Date.now() } : draft));
          saveIdeDrafts(next);
          return next;
        });
      }

      if (path === renameFile.path && activeSource === renameFile.source) {
        setPath(nextPath);
      }
      setSessionDrafts((current) => renameSessionDraft(current, renameFile.source, renameFile.path, nextPath));
      setRenameFile(null);
      setRenameFileName('');
      pushLine('success', `Omdøbte ${displayPicoPath(renameFile.path)} til ${displayPicoPath(nextPath)}.`);
      if (renamePico) await listFiles();
    } catch (err) {
      pushLine('error', err instanceof Error ? err.message : 'Kunne ikke omdøbe filen.');
    } finally {
      setTaskProgress(null);
      setBusy(false);
    }
  }

  function filePathExists(nextPath: string, source: FileLocation): boolean {
    return source === 'pico'
      ? files.some((file) => file.path === nextPath)
      : localFiles.some((draft) => draft.path === nextPath);
  }

  function openFile(file: IdeFileRow) {
    if (file.type !== 'file') {
      if (bleMode) cancelBleFileRead(undefined, false);
      setPath(file.path);
      setActiveSource(file.source);
      return;
    }

    if (bleMode && isBleProtectedRuntimeFile(file)) {
      pushLine('warning', 'BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.');
      return;
    }

    if (file.source === 'local') {
      if (bleMode) cancelBleFileRead(undefined, false);
      const draft = localFiles.find((item) => item.path === file.path);
      setEditorDraft(file.path, sessionDrafts[draftKey('local', file.path)] ?? draft?.content ?? '', 'local');
      return;
    }

    const picoDraftKey = draftKey('pico', file.path);
    if (Object.prototype.hasOwnProperty.call(sessionDrafts, picoDraftKey)) {
      if (bleMode) cancelBleFileRead(undefined, false);
      setEditorDraft(file.path, sessionDrafts[picoDraftKey], 'pico');
      return;
    }

    if (Object.prototype.hasOwnProperty.call(picoSnapshots, file.path)) {
      if (bleMode) cancelBleFileRead(undefined, false);
      setEditorDraft(file.path, picoSnapshots[file.path], 'pico');
      return;
    }

    readFile(file.path);
  }

  async function installRuntimeFiles() {
    if (!connected && !bleMode) return;
    setBusy(true);
    setTaskProgress({ value: 4, label: bleMode ? 'Tjekker biblioteker på Pico via Bluetooth...' : 'Tjekker biblioteker på Pico...' });
    pushLine('info', bleMode ? 'Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...' : 'Tjekker om Picoens biblioteker er opdaterede før installation...');
    try {
      const checks =
        runtimeChecks.length > 0
          ? runtimeChecks
          : bleMode
            ? await collectBleRuntimeChecks((value, label) => setTaskProgress({ value, label }))
            : await withQuietTerminal(() => collectRuntimeChecks(fsRef.current));
      setRuntimeChecks(checks);
      const nextSelection: Record<string, boolean> = {};
      checks.forEach((check) => {
        if (bleMode && isBleProtectedRuntimeFile(check)) {
          nextSelection[check.id] = false;
          return;
        }
        if (check.kind === 'program') {
          nextSelection[check.id] = false;
        } else {
          nextSelection[check.id] = check.status !== 'ok' && check.status !== 'unknown';
        }
      });
      setInstallSelection(nextSelection);
      setInstallOpen(true);
      setTaskProgress(null);
    } catch (err) {
      setTaskProgress(null);
      pushLine('error', err instanceof Error ? err.message : 'Fil-tjek før installation fejlede.');
    } finally {
      setBusy(false);
    }
  }

  async function performInstallRuntimeFiles() {
    setInstallOpen(false);

    if (bleMode) {
      setBusy(true);
      try {
        const checks =
          runtimeChecks.length > 0
            ? runtimeChecks
            : REQUIRED_RUNTIME_FILES.map((file) => ({ ...file, status: 'unknown', detail: 'Ikke tjekket' }) as RuntimeFileCheck);
        const targets = checks.filter((check) => installSelection[check.id] && !isBleProtectedRuntimeFile(check));
        if (targets.length === 0) {
          pushLine('info', 'Ingen filer valgt til installation.');
          return;
        }

        let installedLibrary: RuntimeFileCheck | null = null;
        setTaskProgress({ value: 0, label: 'Starter installation...' });
        for (const [index, file] of targets.entries()) {
          pushLine('info', `Installerer ${file.label} via Bluetooth...`);
          const baseProgress = (index / targets.length) * 100;
          const fileShare = 100 / targets.length;
          await bleWriteText(file.path, file.content, (value, label) => {
            setTaskProgress({
              value: Math.min(99, baseProgress + (value / 100) * fileShare),
              label: `${file.label}: ${label}`,
            });
          });
          markPicoSnapshot(file.path, file.content);
          pushLine('success', `Installerede ${file.label}.`);
          if (file.kind === 'library') {
            installedLibrary = file;
          }
          if (isMainPyPath(file.path)) {
            setMainRestartOpen(true);
          }
        }
        finishTaskProgress('Installation færdig');
        await listFiles();
        await checkRuntimeFiles();
        if (installedLibrary) {
          openInstalledRuntimeFile(installedLibrary);
        }
      } catch (err) {
        setTaskProgress(null);
        pushLine('error', err instanceof Error ? err.message : 'BLE installation fejlede.');
      } finally {
        setBusy(false);
      }
      return;
    }

    await withFs(async (fs) => {
      const checks =
        runtimeChecks.length > 0
          ? runtimeChecks
          : REQUIRED_RUNTIME_FILES.map((file) => ({ ...file, status: 'unknown', detail: 'Ikke tjekket' }) as RuntimeFileCheck);
      const targets = checks.filter((check) => installSelection[check.id]);
      if (targets.length === 0) {
        pushLine('info', 'Ingen filer valgt til installation.');
        return;
      }

      let installedLibrary: RuntimeFileCheck | null = null;
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
        if (file.kind === 'library') {
          installedLibrary = file;
        }
      }
      finishTaskProgress('Installation færdig');
      await listFiles();
      await checkRuntimeFiles();
      if (installedLibrary) {
        openInstalledRuntimeFile(installedLibrary);
      }
    });
  }

  function openInstalledRuntimeFile(file: RuntimeFileCheck) {
    setEditorDraft(file.path, file.content, 'pico');
    markPicoSnapshot(file.path, file.content);
    pushLine('info', `Åbnede ${file.label} i editoren.`);
  }
  function updateInstallSelection(file: RuntimeFileCheck, checked: boolean) {
    setInstallSelection((current) => {
      if (file.kind !== 'program') {
        return { ...current, [file.id]: checked };
      }

      const next = { ...current };
      for (const item of runtimeChecks) {
        if (item.kind === 'program') {
          next[item.id] = false;
        }
      }
      next[file.id] = checked;
      return next;
    });
  }

  async function runEditorCode() {
    prepareTerminalForRun();

    if (bleMode && activeSource === 'pico') {
      pushLine('warning', 'Bluetooth-kode køres ikke direkte herfra. Gem filen på Picoen, og brug genstart for at anvende den.');
      return;
    }

    const repl = replRef.current;
    if (!repl) {
      const offlineIssues = analyzeOfflineMicroPython(editorText);
      if (offlineIssues.some((issue) => issue.level === 'error')) {
        for (const issue of offlineIssues) {
          const prefix = issue.line ? `Linje ${issue.line}: ` : '';
          pushLine(issue.level === 'error' ? 'error' : 'warning', `${prefix}${issue.text}`);
        }
        pushLine('warning', 'Denne kode bruger Pico-specifikke funktioner og kan ikke køres i browseren. Gem den på Picoen først, og tryk derefter Kør.');
        return;
      }

      const abortController = new AbortController();
      offlineAbortRef.current = abortController;
      setBusy(true);
      setRunningOffline(true);
      setTerminalFollow(true);
      pushLine('info', "Starter offline MicroPython. Forbind en Pico med USB for at køre rigtig micropython på Pico'en.");
      try {
        let streamedOutput = false;
        const result = await runOfflineMicroPython(editorText, {
          signal: abortController.signal,
          onOutput: (text) => {
            streamedOutput = true;
            pushLine('info', text);
          },
        });
        for (const issue of result.issues) {
          const prefix = issue.line ? `Linje ${issue.line}: ` : '';
          pushLine(issue.level === 'error' ? 'error' : 'warning', `${prefix}${issue.text}`);
        }
        if (result.output.trim()) pushLine('info', result.output);
        if (result.error.trim()) pushMicroPythonError(result.error, editorText, result.unavailable ? 'warning' : 'error');
        if (result.ok && !streamedOutput && !result.output.trim() && !result.error.trim()) pushLine('success', 'Offline MicroPython kørte uden output.');
      } finally {
        offlineAbortRef.current = null;
        setRunningOffline(false);
        setBusy(false);
      }
      return;
    }

    if (path.endsWith('.py')) {
      if (activeSource !== 'pico') {
        pushLine('error', `${displayPicoPath(path)} er gemt i browseren. Gem den manuelt på Picoen før den kan køres på Picoen.`);
        return;
      }
      if (!editorContentIsSavedOnPico()) {
        pushLine('info', `${displayPicoPath(path)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`);
        const saved = await savePicoFile();
        if (!saved) {
          pushLine('error', 'Pico-forbindelsen blev afbrudt under gemning.');
          return;
        }
      }
      if (busy) return;
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
      if (result.error.trim()) pushMicroPythonError(result.error, editorText);
      if (!result.output.trim() && !result.error.trim()) pushLine('success', 'Koden kørte uden output.');
    } catch (err) {
      pushLine('error', err instanceof Error ? err.message : 'Kunne ikke køre koden.');
    } finally {
      setBusy(false);
    }
  }

  async function stopPicoCode() {
    if (runningOffline) {
      offlineAbortRef.current?.abort();
      pushLine('warning', 'Stoppede offline MicroPython.');
      setTerminalFollow(true);
      return;
    }

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

  function renderInstallGroup(title: string, items: RuntimeFileCheck[]) {
    if (items.length === 0) return null;
    return (
      <div className="ide-install-group">
        <h3>{title}</h3>
        {items.map((file) => {
          const protectedInBle = bleMode && isBleProtectedRuntimeFile(file);
          return (
            <label className={`ide-install-row ${protectedInBle ? 'disabled' : ''}`} key={file.id}>
              <input
                type={file.kind === 'program' ? 'radio' : 'checkbox'}
                name={file.kind === 'program' ? 'install-program' : undefined}
                checked={!!installSelection[file.id]}
                disabled={protectedInBle}
                onChange={(e) => updateInstallSelection(file, e.target.checked)}
              />
              <span>
                <strong>
                  {file.label}
                  {file.kind === 'library' && (
                    <em className={`ide-install-status status-${file.status}`}>{protectedInBle ? 'USB' : runtimeStatusLabel(file.status)}</em>
                  )}
                </strong>
                <small>{file.description}</small>
              </span>
            </label>
          );
        })}
      </div>
    );
  }

  function prepareTerminalForRun() {
    if (clearTerminalOnRun) {
      setLines([]);
    }
    setTerminalFollow(true);
  }

  function findLineEnd(text: string, index: number) {
    const nextBreak = text.indexOf('\n', index);
    return nextBreak === -1 ? text.length : nextBreak;
  }

  function updateAutocomplete(text: string, cursor: number) {
    const token = getCompletionToken(text, cursor);
    if (!token || token.query.length < 1) {
      setAutocomplete(null);
      return;
    }

    const lower = token.query.toLowerCase();
    const items = COMPLETION_SUGGESTIONS.filter((item) => item.label.toLowerCase().startsWith(lower)).slice(0, 8);
    const position = getTextareaCaretPosition(editorRef.current, cursor);
    setAutocomplete(items.length > 0 && position ? { items, selected: 0, start: token.start, end: cursor, position } : null);
  }

  function applyAutocomplete(suggestion = autocomplete?.items[autocomplete.selected]) {
    if (!suggestion || !autocomplete) return;
    const nextText = editorText.slice(0, autocomplete.start) + suggestion.insert + editorText.slice(autocomplete.end);
    const caret = autocomplete.start + suggestion.insert.length - (suggestion.insert.endsWith('()') ? 1 : 0);
    setEditorText(nextText);
    setSessionDrafts((current) => ({ ...current, [draftKey(activeSource, path)]: nextText }));
    setAutocomplete(null);
    window.requestAnimationFrame(() => {
      const target = editorRef.current;
      if (!target) return;
      target.focus();
      target.selectionStart = caret;
      target.selectionEnd = caret;
      updateAutocomplete(nextText, caret);
    });
  }

  function onEditorKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
      if (!busy && path.trim()) void quickSaveCurrentFile();
      return;
    }

    if (autocomplete) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setAutocomplete((current) =>
          current ? { ...current, selected: (current.selected + 1) % current.items.length } : current,
        );
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setAutocomplete((current) =>
          current ? { ...current, selected: (current.selected - 1 + current.items.length) % current.items.length } : current,
        );
        return;
      }
      if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        applyAutocomplete();
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setAutocomplete(null);
        return;
      }
    }

    if (e.key !== 'Tab') return;
    e.preventDefault();

    const target = e.currentTarget;
    const start = target.selectionStart;
    const end = target.selectionEnd;
    const indent = '    ';

    if (e.shiftKey) {
      const lineStart = editorText.lastIndexOf('\n', start - 1) + 1;
      const lineEnd = start === end ? findLineEnd(editorText, start) : end;
      const selectedText = editorText.slice(lineStart, lineEnd);
      let removedBeforeCaret = 0;
      let removedTotal = 0;
      const outdented = selectedText.replace(/(^|\n)( {1,4}|\t)/g, (match, prefix, whitespace, offset) => {
        const removed = whitespace.length;
        if (lineStart + offset < start) removedBeforeCaret += removed;
        removedTotal += removed;
        return prefix;
      });

      if (removedTotal === 0) return;
      const nextText = editorText.slice(0, lineStart) + outdented + editorText.slice(lineEnd);
      updateEditorText(nextText, Math.max(lineStart, start - removedBeforeCaret));
      window.requestAnimationFrame(() => {
        target.selectionStart = Math.max(lineStart, start - removedBeforeCaret);
        target.selectionEnd = start === end ? target.selectionStart : Math.max(target.selectionStart, end - removedTotal);
      });
      return;
    }

    if (start === end) {
      const nextText = editorText.slice(0, start) + indent + editorText.slice(end);
      updateEditorText(nextText, start + indent.length);
      window.requestAnimationFrame(() => {
        target.selectionStart = start + indent.length;
        target.selectionEnd = start + indent.length;
      });
      return;
    }

    const lineStart = editorText.lastIndexOf('\n', start - 1) + 1;
    const selectedText = editorText.slice(lineStart, end);
    const indented = selectedText.replace(/^/gm, indent);
    const addedLines = indented.split('\n').length;
    const nextText = editorText.slice(0, lineStart) + indented + editorText.slice(end);
    updateEditorText(nextText, start + indent.length);
    window.requestAnimationFrame(() => {
      target.selectionStart = start + indent.length;
      target.selectionEnd = end + addedLines * indent.length;
    });
  }

  return (
    <div className="screen ide-screen">
      <TopBar title="Pico Kodeværksted" onMenu={() => toggleSideMenu()} />

      {screenTooSmall ? (
        <div className="ide-size-gate" role="dialog" aria-modal="true" aria-labelledby="ide-size-title">
          <div className="ide-size-gate-panel">
            <h2 id="ide-size-title">Brug en bærbar for at bruge Kodeværkstedet</h2>
            <p>
              Denne skærm er for lille, så du skal åbne Kodeværkstedet
              på en bærbar eller en større skærm.
            </p>
          </div>
        </div>
      ) : (
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
            {fileListItems.length === 0 ? (
              <button type="button" disabled>
                Ingen filer læst
              </button>
            ) : (
              fileListItems.map((file) => {
                if (file.kind === 'separator') {
                  return (
                  <div className="ide-file-separator" key={file.id}>
                    <span>{file.label}</span>
                  </div>
                  );
                }

                const protectedInBle = bleMode && isBleProtectedRuntimeFile(file);
                const sessionText = sessionDrafts[draftKey(file.source, file.path)];
                const hasUnsavedChanges =
                  sessionText !== undefined &&
                  sessionText !== getSavedFileContent(file, localFiles, picoSnapshots);
                return (
                  <div className={`ide-file-row ${path === file.path && activeSource === file.source ? 'active' : ''} ${protectedInBle ? 'protected' : ''}`} key={`${file.source}:${file.path}`}>
                    <button
                      type="button"
                      onClick={() => openFile(file)}
                      disabled={protectedInBle}
                      title={protectedInBle ? 'Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her' : undefined}
                    >
                      <span>{file.name}</span>
                      <small title={hasUnsavedChanges ? 'Ikke gemte ændringer' : 'Ingen ikke gemte ændringer'}>
                        <i className={`ide-file-dirty-dot ${hasUnsavedChanges ? 'dirty' : 'clean'}`} aria-hidden="true" />
                      </small>
                    </button>
                    <button
                      className="ide-file-rename"
                      type="button"
                      onClick={() => openRenameFile(file)}
                      disabled={file.type !== 'file' || busy || protectedInBle}
                      aria-label={`Omdøb ${file.name}`}
                      title={protectedInBle ? 'Holder Bluetooth-forbindelsen i gang og kan ikke ændres her' : 'Omdøb fil'}
                    >
                      <Glyph name="edit" size={16} />
                    </button>
                    <button
                      className="ide-file-delete"
                      type="button"
                      onClick={() => deleteFile(file)}
                      disabled={file.type !== 'file' || busy || protectedInBle}
                      aria-label={`Slet ${file.name}`}
                      title={protectedInBle ? 'Holder Bluetooth-forbindelsen i gang og kan ikke ændres her' : 'Slet fil'}
                    >
                      <Glyph name="delete" size={16} />
                    </button>
                  </div>
                );
              })
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
          {bleMode && (
            <div className="ide-actions">
              <button className="btn btn-primary ide-connection-state" type="button" disabled>
                <Glyph name="power" size={22} />
                Bluetooth forbundet
              </button>
              <button className="btn btn-primary" type="button" onClick={installRuntimeFiles} disabled={busy}>
                Installer
              </button>
            </div>
          )}
          <div className="ide-runtime">
            <div className={`ide-mini-actions ${bleMode ? 'single' : ''}`}>
              <button className="btn btn-outline" type="button" onClick={checkRuntimeFiles} disabled={(!connected && !bleMode) || busy}>
                Tjek filer
              </button>
              {!bleMode && (
                <button className="btn btn-outline ide-disconnect-btn" type="button" onClick={() => setMicroPythonOpen(true)}>
                  MicroPython
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="ide-panel ide-editor-panel">
          <div className="ide-panel-head">
            <div className="ide-editor-title">
              <h2>
                {displayPicoPath(path)}
                <small>{editorByteSize} bytes</small>
              </h2>
            </div>
            <div className="ide-mini-actions">
              <button className="btn btn-outline" type="button" onClick={runEditorCode} disabled={busy}>
                Kør
              </button>
              <button className="btn btn-outline" type="button" onClick={stopPicoCode} disabled={!runningOffline && (!connected || !runningOnPico)}>
                Stop
              </button>
              <button className="btn btn-primary" type="button" onClick={saveFile} disabled={busy || !path.trim()}>
                Gem
              </button>
              <button className="btn btn-outline btn-danger" type="button" onClick={() => deleteFile()} disabled={busy || !path.trim()}>
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
              ref={editorRef}
              className="ide-editor"
              value={editorText}
              onChange={(e) => updateEditorText(e.target.value, e.target.selectionStart)}
              onKeyDown={onEditorKeyDown}
              onKeyUp={(e) => {
                if (['ArrowUp', 'ArrowDown', 'Enter', 'Tab', 'Escape'].includes(e.key)) return;
                updateAutocomplete(e.currentTarget.value, e.currentTarget.selectionStart);
              }}
              onClick={(e) => updateAutocomplete(e.currentTarget.value, e.currentTarget.selectionStart)}
              onScroll={(e) => {
                setEditorScroll({ top: e.currentTarget.scrollTop, left: e.currentTarget.scrollLeft });
                if (autocomplete) updateAutocomplete(e.currentTarget.value, e.currentTarget.selectionStart);
              }}
              spellCheck={false}
            />
            {autocomplete && (
              <div
                className="ide-autocomplete"
                role="listbox"
                aria-label="Kodeforslag"
                style={{ left: autocomplete.position.left, top: autocomplete.position.top }}
              >
                {autocomplete.items.map((item, index) => (
                  <button
                    className={index === autocomplete.selected ? 'active' : ''}
                    type="button"
                    key={item.label}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      applyAutocomplete(item);
                    }}
                    role="option"
                    aria-selected={index === autocomplete.selected}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
            {loadingFilePath && (
              <div className="ide-editor-loading" role="status" aria-live="polite">
                <span className="spinner" aria-hidden="true" />
                <strong>Indlæser {displayPicoPath(loadingFilePath)}...</strong>
              </div>
            )}
          </div>
        </section>

        <section className="ide-panel ide-terminal-panel">
          <div className="ide-panel-head">
            <h2>Terminal</h2>
            <div className="ide-mini-actions">
              <button
                className={`btn btn-outline ide-tool-btn ide-terminal-toggle ${simplifiedErrors ? 'active' : ''}`}
                type="button"
                onClick={() => setSimplifiedErrors((value) => !value)}
                aria-label={simplifiedErrors ? 'Vis enkle fejl' : 'Vis tekniske fejl'}
                aria-pressed={simplifiedErrors}
                title={simplifiedErrors ? 'Viser enkle fejlbeskeder' : 'Viser tekniske fejlbeskeder'}
              >
                <Glyph name="debugger" size={18} />
              </button>
              <button
                className={`btn btn-outline ide-terminal-toggle ${clearTerminalOnRun ? 'active' : ''}`}
                type="button"
                onClick={() => setClearTerminalOnRun((value) => !value)}
                aria-pressed={clearTerminalOnRun}
                title={clearTerminalOnRun ? 'Terminalen ryddes, hver gang du trykker Kør' : 'Terminalen beholder tekst, når du trykker Kør'}
              >
                Ryd ved Kør
              </button>
              <button className="btn btn-outline" type="button" onClick={clearTerminal} disabled={lines.length === 0}>
                Ryd
              </button>
            </div>
          </div>
          <div className="ide-terminal" aria-live="polite" ref={terminalRef} onScroll={onTerminalScroll}>
            {lines.length === 0 ? (
              <div className="term-line">Ingen USB data endnu.</div>
            ) : (
              lines.map((line, idx) => (
                <div className={`term-line term-${line.level}`} key={`${idx}-${line.text}`}>
                  {line.text}
                  {!simplifiedErrors && line.technical && (
                    <pre className="term-technical">{line.technical}</pre>
                  )}
                </div>
              ))
            )}
          </div>
        </section>
      </div>
      )}

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
              <button className="btn btn-primary" type="button" onClick={() => void savePicoFile()} disabled={(!connected && !bleMode) || busy}>
                Gem på Pico
              </button>
            <button className="btn btn-outline" type="button" onClick={downloadFile}>
              Download til computer
            </button>
          </div>
        </Modal>
      )}

      {installOpen && (
        <Modal title="Installer filer" onClose={() => setInstallOpen(false)}>
          <div className="ide-install-list">
            {renderInstallGroup('Startprogrammer', runtimeChecks.filter((file) => file.kind === 'program'))}
            {renderInstallGroup('Biblioteker', runtimeChecks.filter((file) => file.kind === 'library'))}
            <button className="btn btn-primary" type="button" onClick={performInstallRuntimeFiles} disabled={busy}>
              Installer valgte
            </button>
          </div>
        </Modal>
      )}

      {mainRestartOpen && (
        <Modal title="main.py er gemt" onClose={() => setMainRestartOpen(false)}>
          <div className="settings-stack">
            <p className="confirm-message">
              Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter.
            </p>
            <button className="btn btn-primary btn-block" type="button" onClick={() => void applyMainPyRestart('control')} disabled={busy}>
              Genstart og åbn kontrolpanel
            </button>
            <button className="btn btn-outline btn-block" type="button" onClick={() => void applyMainPyRestart('ide')} disabled={busy}>
              Genstart og bliv i Kodeværksted
            </button>
            <button className="btn btn-outline btn-block" type="button" onClick={() => setMainRestartOpen(false)} disabled={busy}>
              Senere
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

      {renameFile && (
        <Modal title="Omdøb fil" onClose={() => setRenameFile(null)}>
          <form
            className="ide-new-file-form"
            onSubmit={(e) => {
              e.preventDefault();
              void renameCurrentFile();
            }}
          >
            <label htmlFor="rename-pico-file">Filnavn</label>
            <div className="ide-new-file-row">
              <input
                id="rename-pico-file"
                value={renameFileName}
                onChange={(e) => setRenameFileName(e.target.value)}
                autoFocus
                placeholder="min_kode.py"
              />
            </div>
            <p>Brug filendelser som .py, .txt, .json eller .csv.</p>
            <button className="btn btn-primary" type="submit" disabled={!normalizeEditableFileName(renameFileName) || busy}>
              Omdøb
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

function normalizeEditableFileName(value: string): string {
  const raw = value
    .trim()
    .replace(/\\/g, '/')
    .split('/')
    .filter(Boolean)
    .pop();
  if (!raw) return '';
  const match = raw.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);
  if (!match) return '';
  const base = match[1].replace(/[^a-zA-Z0-9_-]/g, '_').replace(/^_+|_+$/g, '');
  const ext = (match[2] ?? 'py').toLowerCase();
  return base ? `/${base}.${ext}` : '';
}

function normalizeRuntimeContent(value: string): string {
  return value.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trimEnd();
}

function normalizeRuntimeChecks(checks: RuntimeFileCheck[]): RuntimeFileCheck[] {
  return checks;
}

function runtimeCheckLogLevel(status: RuntimeFileCheck['status']): SerialLogLevel {
  if (status === 'ok') return 'success';
  if (status === 'unknown') return 'info';
  return 'warning';
}

function displayPicoPath(value: string): string {
  return value.split('/').filter(Boolean).pop() ?? value;
}

function isMainPyPath(value: string): boolean {
  return value.replace(/\\/g, '/').toLowerCase() === '/main.py';
}

function isAbortError(err: unknown): boolean {
  return err instanceof DOMException && err.name === 'AbortError';
}

function isBleProtectedRuntimeFile(file: Pick<RuntimeFileCheck, 'path'>): boolean {
  return file.path.replace(/\\/g, '/').toLowerCase() === '/bleperipheral.py';
}

const COMPLETION_SUGGESTIONS: CompletionSuggestion[] = [
  ...[
    'False',
    'None',
    'True',
    'and',
    'as',
    'assert',
    'async',
    'await',
    'break',
    'class',
    'continue',
    'def',
    'del',
    'elif',
    'else',
    'except',
    'finally',
    'for',
    'from',
    'global',
    'if',
    'import',
    'in',
    'is',
    'lambda',
    'nonlocal',
    'not',
    'or',
    'pass',
    'raise',
    'return',
    'try',
    'while',
    'with',
    'yield',
  ].map((word) => ({ label: word, insert: `${word}${['for', 'if', 'while', 'def', 'class', 'elif', 'else', 'try', 'except', 'finally', 'with'].includes(word) ? ' ' : ''}` })),
  ...[
    'abs',
    'all',
    'any',
    'bin',
    'bool',
    'bytearray',
    'bytes',
    'callable',
    'chr',
    'dict',
    'dir',
    'divmod',
    'enumerate',
    'eval',
    'exec',
    'filter',
    'float',
    'getattr',
    'hasattr',
    'hash',
    'hex',
    'id',
    'int',
    'isinstance',
    'issubclass',
    'iter',
    'len',
    'list',
    'map',
    'max',
    'min',
    'next',
    'object',
    'oct',
    'open',
    'ord',
    'pow',
    'print',
    'range',
    'repr',
    'reversed',
    'round',
    'set',
    'setattr',
    'slice',
    'sorted',
    'str',
    'sum',
    'super',
    'tuple',
    'type',
    'zip',
  ].map((word) => ({ label: `${word}()`, insert: `${word}()` })),
  { label: 'for i in range():', insert: 'for i in range():' },
  { label: 'while True:', insert: 'while True:' },
  { label: 'if True:', insert: 'if True:' },
  { label: 'time', insert: 'time' },
  { label: 'time.', insert: 'time.' },
  { label: 'time.sleep', insert: 'time.sleep' },
  { label: 'time.sleep()', insert: 'time.sleep()' },
  { label: 'time.sleep_ms()', insert: 'time.sleep_ms()' },
  { label: 'time.ticks_ms()', insert: 'time.ticks_ms()' },
  { label: 'time.ticks_diff()', insert: 'time.ticks_diff()' },
  { label: 'machine', insert: 'machine' },
  { label: 'machine.', insert: 'machine.' },
  { label: 'machine.Pin', insert: 'machine.Pin' },
  { label: 'machine.PWM', insert: 'machine.PWM' },
  { label: 'machine.ADC', insert: 'machine.ADC' },
  { label: 'machine.I2C', insert: 'machine.I2C' },
  { label: 'machine.SPI', insert: 'machine.SPI' },
  { label: 'machine.reset()', insert: 'machine.reset()' },
  { label: 'Pin()', insert: 'Pin()' },
  { label: 'PWM()', insert: 'PWM()' },
  { label: 'ADC()', insert: 'ADC()' },
  { label: 'I2C()', insert: 'I2C()' },
  { label: 'SPI()', insert: 'SPI()' },
  { label: 'Pin.OUT', insert: 'Pin.OUT' },
  { label: 'Pin.IN', insert: 'Pin.IN' },
  { label: 'Pin.PULL_UP', insert: 'Pin.PULL_UP' },
  { label: 'import time', insert: 'import time' },
  { label: 'import machine', insert: 'import machine' },
  { label: 'from machine import Pin', insert: 'from machine import Pin' },
  { label: 'from machine import Pin, PWM', insert: 'from machine import Pin, PWM' },
  { label: 'BLEPeripheral', insert: 'BLEPeripheral' },
  { label: 'PicoRobotics', insert: 'PicoRobotics' },
  { label: 'NeoPixel', insert: 'NeoPixel' },
  { label: 'ValueError', insert: 'ValueError' },
  { label: 'TypeError', insert: 'TypeError' },
  { label: 'OSError', insert: 'OSError' },
  { label: 'Exception', insert: 'Exception' },
];

function getCompletionToken(text: string, cursor: number): { query: string; start: number } | null {
  const before = text.slice(0, cursor);
  const match = before.match(/[A-Za-z_][A-Za-z0-9_.]*$/);
  if (!match || match.index === undefined) return null;
  return { query: match[0], start: match.index };
}

function getTextareaCaretPosition(textarea: HTMLTextAreaElement | null, cursor: number): { left: number; top: number } | null {
  if (!textarea) return null;
  const wrap = textarea.parentElement;
  if (!wrap) return null;

  const style = window.getComputedStyle(textarea);
  const mirror = document.createElement('div');
  const marker = document.createElement('span');
  const wrapRect = wrap.getBoundingClientRect();

  mirror.style.position = 'absolute';
  mirror.style.visibility = 'hidden';
  mirror.style.pointerEvents = 'none';
  mirror.style.whiteSpace = 'pre-wrap';
  mirror.style.overflowWrap = 'break-word';
  mirror.style.boxSizing = style.boxSizing;
  mirror.style.width = `${textarea.clientWidth}px`;
  mirror.style.padding = style.padding;
  mirror.style.border = style.border;
  mirror.style.font = style.font;
  mirror.style.lineHeight = style.lineHeight;
  mirror.style.letterSpacing = style.letterSpacing;
  mirror.style.tabSize = style.tabSize;
  mirror.style.left = `${textarea.offsetLeft - textarea.scrollLeft}px`;
  mirror.style.top = `${textarea.offsetTop - textarea.scrollTop}px`;

  mirror.textContent = textarea.value.slice(0, cursor);
  marker.textContent = textarea.value.slice(cursor, cursor + 1) || ' ';
  mirror.appendChild(marker);
  wrap.appendChild(mirror);

  const markerRect = marker.getBoundingClientRect();
  mirror.remove();

  const left = clamp(markerRect.left - wrapRect.left, 8, Math.max(8, wrap.clientWidth - 296));
  const below = markerRect.bottom - wrapRect.top + 6;
  const top = below + 218 > wrap.clientHeight ? Math.max(8, markerRect.top - wrapRect.top - 218) : below;
  return { left, top };
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
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

function getEditorSaveStatus(path: string, content: string, drafts: IdeDraft[], computerSave: { path: string; content: string } | null, picoSnapshots: Record<string, string>) {
  const draft = drafts.find((item) => item.path === path);
  const places: string[] = [];

  if (draft?.content === content) {
    places.push('browser');
  }

  if (picoSnapshots[path] === content) {
    places.push('Pico');
  }

  if (computerSave?.path === path && computerSave.content === content) {
    places.push('computer');
  }

  if (places.length === 0) {
    return {
      kind: 'dirty',
      label: 'Ikke gemt',
      title: 'Ændringerne er ikke gemt endnu.',
    };
  }

  return {
    kind: 'saved',
    label: `Gemt: ${places.join(' + ')}`,
    title: `Den viste version er gemt i/på: ${places.join(', ')}.`,
  };
}

function getSavedFileContent(file: IdeFileRow, drafts: IdeDraft[], picoSnapshots: Record<string, string>): string | undefined {
  if (file.source === 'pico') return picoSnapshots[file.path];
  return drafts.find((draft) => draft.path === file.path)?.content;
}

function runtimeStatusLabel(status: RuntimeFileCheck['status']): string {
  if (status === 'ok') return 'Nyeste';
  if (status === 'outdated') return 'Opdater';
  if (status === 'missing') return 'Mangler';
  return 'Ikke tjekket';
}

function buildFileListItems(picoFiles: PicoFileEntry[], localFiles: IdeDraft[], sessionDrafts: Record<string, string>): IdeFileListItem[] {
  const rows = new Map<string, IdeFileRow>();

  for (const file of picoFiles) {
    rows.set(draftKey('pico', file.path), {
      kind: 'file',
      name: file.name,
      path: file.path,
      type: file.type,
      size: file.size,
      source: 'pico',
      uploaded: true,
    });
  }

  for (const draft of localFiles) {
    rows.set(draftKey('local', draft.path), {
      kind: 'file',
      name: displayPicoPath(draft.path),
      path: draft.path,
      type: 'file',
      source: 'local',
      uploaded: false,
    });
  }

  for (const key of Object.keys(sessionDrafts)) {
    const [source, ...pathParts] = key.split(':');
    const draftPath = pathParts.join(':');
    if ((source !== 'local' && source !== 'pico') || !draftPath) continue;
    const existing = rows.get(key);
    if (existing) {
      rows.set(key, existing);
      continue;
    }

    rows.set(key, {
      kind: 'file',
      name: displayPicoPath(draftPath),
      path: draftPath,
      type: 'file',
      source,
      uploaded: false,
    });
  }

  const sortedRows = [...rows.values()].sort(compareIdeFileRows);
  const picoRows = sortedRows.filter((row) => row.source === 'pico');
  const localRows = sortedRows.filter((row) => row.source === 'local');
  const items: IdeFileListItem[] = [];

  if (picoRows.length > 0) {
    items.push({ kind: 'separator', id: 'pico-files', label: 'Pico' }, ...picoRows);
  }
  if (localRows.length > 0) {
    items.push({ kind: 'separator', id: 'browser-files', label: 'Browser' }, ...localRows);
  }

  return items;
}

const STANDARD_FILE_ORDER = new Map<string, number>([
  ['main.py', 0],
  ['devicesettings.txt', 1],
  ['layout.txt', 2],
  ['bleperipheral.py', 3],
  ['picorobotics.py', 4],
  ['neopixel.py', 5],
  ['hcsr04.py', 6],
]);

function compareIdeFileRows(a: IdeFileRow, b: IdeFileRow): number {
  const aStandard = standardFileOrder(a.path);
  const bStandard = standardFileOrder(b.path);

  if (aStandard === null && bStandard === null) {
    return a.name.localeCompare(b.name, 'da');
  }
  if (aStandard === null) return -1;
  if (bStandard === null) return 1;
  return aStandard - bStandard;
}

function standardFileOrder(path: string): number | null {
  const fileName = path.replace(/\\/g, '/').split('/').filter(Boolean).pop()?.toLowerCase();
  if (!fileName) return null;
  return STANDARD_FILE_ORDER.get(fileName) ?? null;
}

function renameSnapshot(snapshots: Record<string, string>, from: string, to: string): Record<string, string> {
  if (!(from in snapshots)) return snapshots;
  const next = { ...snapshots, [to]: snapshots[from] };
  delete next[from];
  return next;
}

function renameSessionDraft(drafts: Record<string, string>, source: FileLocation, from: string, to: string): Record<string, string> {
  const fromKey = `${source}:${from}`;
  if (!(fromKey in drafts)) return drafts;
  const next = { ...drafts, [`${source}:${to}`]: drafts[fromKey] };
  delete next[fromKey];
  return next;
}
