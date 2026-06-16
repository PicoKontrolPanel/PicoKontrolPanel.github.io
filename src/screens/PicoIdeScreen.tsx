import { useMemo, useRef, useState } from 'react';
import { TopBar } from '../components/TopBar';
import { Glyph } from '../assets/icons';
import { MicroPythonRepl } from '../serial/micropythonRepl';
import { PicoFilesystem, type PicoFileEntry } from '../serial/picoFilesystem';
import { REQUIRED_RUNTIME_FILES, type RuntimeFileCheck } from '../serial/runtimeFiles';
import { developerModeStatus, SerialTransport, type SerialLogLevel } from '../serial/serialTransport';
import { useStore } from '../store/store';

interface TerminalLine {
  level: SerialLogLevel;
  text: string;
}

export function PicoIdeScreen() {
  const toggleSideMenu = useStore((s) => s.toggleSideMenu);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [busy, setBusy] = useState(false);
  const [files, setFiles] = useState<PicoFileEntry[]>([]);
  const [path, setPath] = useState('/user_code.py');
  const [editorText, setEditorText] = useState("print('Hello from Pico Kontrol Panel')\n");
  const [runtimeChecks, setRuntimeChecks] = useState<RuntimeFileCheck[]>([]);
  const transportRef = useRef<SerialTransport | null>(null);
  const replRef = useRef<MicroPythonRepl | null>(null);
  const fsRef = useRef<PicoFilesystem | null>(null);

  const status = developerModeStatus();

  const transport = useMemo(() => {
    const serial = new SerialTransport({
      onLine: (line) => pushLine('info', line || ' '),
      onLog: pushLine,
      onDisconnect: () => {
        setConnected(false);
        pushLine('warning', 'USB-forbindelse lukket.');
      },
    });
    transportRef.current = serial;
    return serial;
  }, []);

  function pushLine(level: SerialLogLevel, text: string) {
    setLines((current) => [...current.slice(-140), { level, text }]);
  }

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
      pushLine('success', 'Sendte stop-signal til Pico REPL.');
      await listFilesWith(fsRef.current);
      await checkRuntimeFilesWith(fsRef.current);
    } catch (err) {
      pushLine('error', err instanceof Error ? err.message : 'USB-forbindelse mislykkedes.');
      setConnected(false);
    } finally {
      setConnecting(false);
    }
  }

  async function disconnectUsb() {
    await transportRef.current?.disconnect();
    replRef.current = null;
    fsRef.current = null;
    setConnected(false);
  }

  async function withFs(action: (fs: PicoFilesystem) => Promise<void>) {
    const fs = fsRef.current;
    if (!fs) return;
    setBusy(true);
    try {
      await action(fs);
    } catch (err) {
      pushLine('error', err instanceof Error ? err.message : 'USB filhandling fejlede.');
    } finally {
      setBusy(false);
    }
  }

  async function listFiles() {
    await listFilesWith(fsRef.current);
  }

  async function listFilesWith(fs: PicoFilesystem | null) {
    if (!fs) return;
    setBusy(true);
    try {
      const next = await fs.list('/');
      setFiles(next);
      pushLine('success', `Læste ${next.length} filer fra Pico.`);
    } catch (err) {
      pushLine('error', err instanceof Error ? err.message : 'USB filhandling fejlede.');
    } finally {
      setBusy(false);
    }
  }

  async function checkRuntimeFiles() {
    await checkRuntimeFilesWith(fsRef.current);
  }

  async function checkRuntimeFilesWith(fs: PicoFilesystem | null) {
    if (!fs) return;
    setBusy(true);
    try {
      const checks: RuntimeFileCheck[] = [];
      for (const file of REQUIRED_RUNTIME_FILES) {
        try {
          const current = await fs.readText(file.path);
          const ok = current === file.content;
          checks.push({ ...file, status: ok ? 'ok' : 'outdated', detail: ok ? 'Installeret' : 'Skal opdateres' });
        } catch {
          checks.push({ ...file, status: 'missing', detail: 'Mangler' });
        }
      }
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

  async function readFile(nextPath = path) {
    await withFs(async (fs) => {
      const text = await fs.readText(nextPath);
      setPath(nextPath);
      setEditorText(text);
      pushLine('success', `Læste ${nextPath}.`);
    });
  }

  async function saveFile() {
    await withFs(async (fs) => {
      await fs.writeText(path, editorText);
      pushLine('success', `Gemte ${path}.`);
      await listFiles();
      await checkRuntimeFiles();
    });
  }

  async function deleteFile() {
    await withFs(async (fs) => {
      await fs.delete(path);
      pushLine('warning', `Slettede ${path}.`);
      setEditorText('');
      await listFiles();
      await checkRuntimeFiles();
    });
  }

  async function newFile() {
    const name = window.prompt('Filnavn på Pico', '/user_code.py');
    const nextPath = normalizePicoPath(name ?? '');
    if (!nextPath) return;
    setPath(nextPath);
    setEditorText('');
    pushLine('info', `Ny fil klar: ${nextPath}. Tryk Gem for at oprette den på Pico.`);
  }

  async function installRuntimeFiles() {
    await withFs(async (fs) => {
      const checks =
        runtimeChecks.length > 0
          ? runtimeChecks
          : REQUIRED_RUNTIME_FILES.map((file) => ({ ...file, status: 'unknown', detail: 'Ikke tjekket' }) as RuntimeFileCheck);
      const targets = checks.filter((check) => check.status !== 'ok');
      if (targets.length === 0) {
        pushLine('success', 'Alle runtime filer er allerede installeret.');
        return;
      }

      for (const file of targets) {
        pushLine('info', `Installerer ${file.label}...`);
        await fs.replaceTextSafely(file.path, file.content);
        pushLine('success', `Installerede ${file.label}.`);
      }
      await listFiles();
      await checkRuntimeFiles();
    });
  }

  async function runEditorCode() {
    const repl = replRef.current;
    if (!repl) return;
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

  async function softResetPico() {
    const repl = replRef.current;
    if (!repl) return;
    setBusy(true);
    try {
      await repl.softReset();
      pushLine('success', 'Sendte soft reset til Pico.');
    } catch (err) {
      pushLine('error', err instanceof Error ? err.message : 'Kunne ikke genstarte Pico.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="screen ide-screen">
      <TopBar title="Pico IDE" onMenu={() => toggleSideMenu()} />

      <div className="ide-layout">
        <section className="ide-panel ide-files-panel">
          <div className="ide-panel-head">
            <h2>Filer</h2>
            <div className="ide-mini-actions">
              <button className="btn btn-outline" type="button" onClick={newFile}>
                Ny
              </button>
              <button className="btn btn-outline" type="button" onClick={listFiles} disabled={!connected || busy}>
                Opdater
              </button>
            </div>
          </div>
          <div className="ide-file-list">
            {files.length === 0 ? (
              <button type="button" disabled>
                Ingen filer læst
              </button>
            ) : (
              files.map((file) => (
                <button
                  type="button"
                  key={file.path}
                  onClick={() => (file.type === 'file' ? readFile(file.path) : setPath(file.path))}
                  className={path === file.path ? 'active' : ''}
                >
                  <span>{file.name}</span>
                  <small>{file.type === 'dir' ? 'mappe' : `${file.size ?? 0} B`}</small>
                </button>
              ))
            )}
          </div>
        </section>

        <section className="ide-panel ide-status-panel">
          <div>
            <h2>USB udvikling</h2>
            <p>{status.message}</p>
          </div>
          <div className="ide-actions">
            <button className="btn btn-primary" type="button" onClick={connectUsb} disabled={!status.supported || connected || connecting}>
              <Glyph name="power" size={22} />
              {connecting ? 'Forbinder...' : connected ? 'Forbundet' : 'Forbind USB'}
            </button>
            <button className="btn btn-outline" type="button" onClick={disconnectUsb} disabled={!connected}>
              Afbryd
            </button>
          </div>
          <div className="ide-runtime">
            <div className="ide-mini-actions">
              <button className="btn btn-outline" type="button" onClick={checkRuntimeFiles} disabled={!connected || busy}>
                Tjek filer
              </button>
              <button className="btn btn-primary" type="button" onClick={installRuntimeFiles} disabled={!connected || busy}>
                Installer
              </button>
            </div>
            <div className="ide-runtime-list">
              {runtimeChecks.length === 0 ? (
                <span>Runtime filer er ikke tjekket endnu.</span>
              ) : (
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
            <h2>{path}</h2>
            <div className="ide-mini-actions">
              <button className="btn btn-outline" type="button" onClick={runEditorCode} disabled={!connected || busy}>
                Kør
              </button>
              <button className="btn btn-outline" type="button" onClick={softResetPico} disabled={!connected || busy}>
                Reset
              </button>
              <button className="btn btn-primary" type="button" onClick={saveFile} disabled={!connected || busy || !path.trim()}>
                Gem
              </button>
              <button className="btn btn-outline btn-danger" type="button" onClick={deleteFile} disabled={!connected || busy || !path.trim()}>
                Slet
              </button>
            </div>
          </div>
          <textarea className="ide-editor" value={editorText} onChange={(e) => setEditorText(e.target.value)} spellCheck={false} />
        </section>

        <section className="ide-panel ide-terminal-panel">
          <h2>Terminal</h2>
          <div className="ide-terminal" aria-live="polite">
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
    </div>
  );
}

function normalizePicoPath(value: string): string {
  const trimmed = value.trim().replace(/\\/g, '/');
  if (!trimmed || trimmed.endsWith('/')) return '';
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
}
