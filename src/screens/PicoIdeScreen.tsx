import { useMemo, useRef, useState } from 'react';
import { TopBar } from '../components/TopBar';
import { Glyph } from '../assets/icons';
import { MicroPythonRepl } from '../serial/micropythonRepl';
import { PicoFilesystem, type PicoFileEntry } from '../serial/picoFilesystem';
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
    });
  }

  async function deleteFile() {
    await withFs(async (fs) => {
      await fs.delete(path);
      pushLine('warning', `Slettede ${path}.`);
      setEditorText('');
      await listFiles();
    });
  }

  return (
    <div className="screen ide-screen">
      <TopBar title="Pico IDE" onMenu={() => toggleSideMenu()} />

      <div className="ide-layout">
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
        </section>

        <section className="ide-panel ide-files-panel">
          <div className="ide-panel-head">
            <h2>Filer</h2>
            <button className="btn btn-outline" type="button" onClick={listFiles} disabled={!connected || busy}>
              Opdater
            </button>
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

        <section className="ide-panel ide-editor-panel">
          <div className="ide-panel-head">
            <h2>Editor</h2>
            <div className="ide-mini-actions">
              <button className="btn btn-outline" type="button" onClick={() => readFile()} disabled={!connected || busy}>
                Læs
              </button>
              <button className="btn btn-primary" type="button" onClick={saveFile} disabled={!connected || busy || !path.trim()}>
                Gem
              </button>
              <button className="btn btn-outline btn-danger" type="button" onClick={deleteFile} disabled={!connected || busy || !path.trim()}>
                Slet
              </button>
            </div>
          </div>
          <input className="ide-path-input" value={path} onChange={(e) => setPath(e.target.value)} />
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
