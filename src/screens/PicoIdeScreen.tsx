import { useMemo, useRef, useState } from 'react';
import { TopBar } from '../components/TopBar';
import { Modal } from '../components/Modal';
import { Glyph } from '../assets/icons';
import { MicroPythonRepl } from '../serial/micropythonRepl';
import { PicoFilesystem, type PicoFileEntry } from '../serial/picoFilesystem';
import { REQUIRED_RUNTIME_FILES, type RuntimeFileCheck } from '../serial/runtimeFiles';
import { developerModeStatus, SerialTransport, type SerialLogLevel } from '../serial/serialTransport';
import { loadIdeDrafts, saveIdeDrafts, type IdeDraft } from '../lib/storage';
import { useStore } from '../store/store';

interface TerminalLine {
  level: SerialLogLevel;
  text: string;
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
  const transportRef = useRef<SerialTransport | null>(null);
  const replRef = useRef<MicroPythonRepl | null>(null);
  const fsRef = useRef<PicoFilesystem | null>(null);

  const status = developerModeStatus();

  const transport = useMemo(() => {
    const serial = new SerialTransport({
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

  function updateLocalDraft(nextPath: string, content: string, uploaded: boolean) {
    setLocalFiles((current) => {
      const next = upsertDraft(current, nextPath, content, uploaded);
      saveIdeDrafts(next);
      return next;
    });
  }

  const fileRows = buildFileRows(files, localFiles);

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
      updateLocalDraft(nextPath, text, true);
      pushLine('success', `Læste ${nextPath}.`);
    });
  }

  async function saveFile() {
    if (!fsRef.current) {
      updateLocalDraft(path, editorText, false);
      pushLine('success', `Gemte ${displayPicoPath(path)} lokalt.`);
      return;
    }

    await withFs(async (fs) => {
      await fs.writeText(path, editorText);
      updateLocalDraft(path, editorText, true);
      pushLine('success', `Gemte ${path}.`);
      await listFiles();
      await checkRuntimeFiles();
    });
  }

  async function deleteFile() {
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
    if (!repl) {
      runLocalPythonPlayground(editorText, pushLine);
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
            <h2>USB udvikling</h2>
            <p>{status.message}</p>
          </div>
          <div className="ide-actions">
            <button className="btn btn-primary" type="button" onClick={connectUsb} disabled={!status.supported || connected || connecting}>
              <Glyph name="power" size={22} />
              {connecting ? 'Forbinder...' : connected ? 'Forbundet' : 'Forbind USB'}
            </button>
            <button className="btn btn-outline ide-disconnect-btn" type="button" onClick={disconnectUsb} disabled={!connected}>
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
            <h2>{displayPicoPath(path)}</h2>
            <div className="ide-mini-actions">
              <button className="btn btn-outline" type="button" onClick={runEditorCode} disabled={busy}>
                Kør
              </button>
              <button className="btn btn-outline" type="button" onClick={softResetPico} disabled={!connected || busy}>
                Reset
              </button>
              <button className="btn btn-primary" type="button" onClick={saveFile} disabled={busy || !path.trim()}>
                Gem
              </button>
              <button className="btn btn-outline btn-danger" type="button" onClick={deleteFile} disabled={busy || !path.trim()}>
                Slet
              </button>
            </div>
          </div>
          <textarea className="ide-editor" value={editorText} onChange={(e) => setEditorText(e.target.value)} spellCheck={false} />
        </section>

        <section className="ide-panel ide-terminal-panel">
          <div className="ide-panel-head">
            <h2>Terminal</h2>
            <button className="btn btn-outline" type="button" onClick={() => setLines([])} disabled={lines.length === 0}>
              Ryd
            </button>
          </div>
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

function displayPicoPath(value: string): string {
  return value.split('/').filter(Boolean).pop() ?? value;
}

function ensureDefaultDraft(drafts: IdeDraft[]): IdeDraft[] {
  if (drafts.length > 0) return drafts;
  return [{ path: DEFAULT_CODE_PATH, content: DEFAULT_CODE, uploaded: false, updatedAt: Date.now() }];
}

function upsertDraft(drafts: IdeDraft[], path: string, content: string, uploaded: boolean): IdeDraft[] {
  const next = drafts.filter((draft) => draft.path !== path);
  return [{ path, content, uploaded, updatedAt: Date.now() }, ...next].sort((a, b) => b.updatedAt - a.updatedAt);
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

  code.split(/\r?\n/).forEach((rawLine, index) => {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) return;

    const assignment = line.match(/^([A-Za-z_]\w*)\s*=\s*(.+)$/);
    if (assignment) {
      const value = evalBeginnerExpression(assignment[2], env);
      if (value.ok) {
        env.set(assignment[1], value.value);
      } else {
        errors.push(`Linje ${index + 1}: ${value.error}`);
      }
      return;
    }

    const printCall = line.match(/^print\((.*)\)$/);
    if (printCall) {
      const parts = splitPrintArgs(printCall[1]);
      const values = parts.map((part) => evalBeginnerExpression(part, env));
      const failed = values.find((value) => !value.ok);
      if (failed && !failed.ok) {
        errors.push(`Linje ${index + 1}: ${failed.error}`);
        return;
      }
      output.push(values.map((value) => (value.ok ? String(value.value) : '')).join(' '));
      return;
    }

    errors.push(`Linje ${index + 1}: Offline playground understøtter print(...) og simple variabler.`);
  });

  if (output.length) log('info', output.join('\n'));
  if (errors.length) log('error', errors.join('\n'));
  if (!output.length && !errors.length) log('success', 'Offline kørsel færdig uden output.');
}

type EvalResult = { ok: true; value: string | number | boolean } | { ok: false; error: string };

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
