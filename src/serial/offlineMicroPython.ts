export type OfflineMicroPythonIssueLevel = 'error' | 'warning';

export interface OfflineMicroPythonIssue {
  level: OfflineMicroPythonIssueLevel;
  line?: number;
  text: string;
}

export interface OfflineMicroPythonResult {
  ok: boolean;
  output: string;
  error: string;
  issues: OfflineMicroPythonIssue[];
  timedOut: boolean;
  unavailable: boolean;
}

interface WorkerResultMessage {
  type: 'result';
  id: number;
  ok: boolean;
  output: string;
  error: string;
}

interface WorkerReadyMessage {
  type: 'ready';
  id: number;
}

interface WorkerUnavailableMessage {
  type: 'unavailable';
  id: number;
  error: string;
}

interface WorkerStdoutMessage {
  type: 'stdout';
  id: number;
  text: string;
}

interface OfflineMicroPythonOptions {
  timeoutMs?: number;
  onOutput?: (text: string) => void;
}

type WorkerMessage = WorkerResultMessage | WorkerReadyMessage | WorkerUnavailableMessage | WorkerStdoutMessage;

const DEFAULT_TIMEOUT_MS = 15000;
const MAX_CODE_BYTES = 64 * 1024;
const MAX_RANGE_STEPS = 100000;
const OFFLINE_RUNTIME_URL = new URL('/micropython/micropython.mjs', window.location.origin).toString();

const HARDWARE_MODULES = new Set([
  'bluetooth',
  'machine',
  'network',
  'PicoRobotics',
  'rp2',
  'ubluetooth',
]);

let runId = 0;

export async function runOfflineMicroPython(
  code: string,
  options: OfflineMicroPythonOptions | number = {},
): Promise<OfflineMicroPythonResult> {
  const timeoutMs = typeof options === 'number' ? options : options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const onOutput = typeof options === 'number' ? undefined : options.onOutput;
  const issues = analyzeOfflineMicroPython(code);
  if (issues.some((issue) => issue.level === 'error')) {
    return {
      ok: false,
      output: '',
      error: '',
      issues,
      timedOut: false,
      unavailable: false,
    };
  }

  const id = ++runId;
  const worker = new Worker(new URL('../workers/offlineMicroPython.worker.ts', import.meta.url));

  return new Promise((resolve) => {
    let settled = false;
    const finish = (result: OfflineMicroPythonResult) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      worker.terminate();
      resolve(result);
    };

    const timer = window.setTimeout(() => {
      finish({
        ok: false,
        output: '',
        error: 'Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.',
        issues,
        timedOut: true,
        unavailable: false,
      });
    }, timeoutMs);

    worker.onmessage = (event: MessageEvent<WorkerMessage>) => {
      const message = event.data;
      if (message.id !== id || message.type === 'ready') return;

      if (message.type === 'stdout') {
        onOutput?.(message.text);
        return;
      }

      if (message.type === 'unavailable') {
        finish({
          ok: false,
          output: '',
          error: message.error,
          issues,
          timedOut: false,
          unavailable: true,
        });
        return;
      }

      finish({
        ok: message.ok,
        output: message.output,
        error: message.error,
        issues,
        timedOut: false,
        unavailable: false,
      });
    };

    worker.onerror = (event) => {
      finish({
        ok: false,
        output: '',
        error: event.message || 'Offline MicroPython fejlede i browser-worker.',
        issues,
        timedOut: false,
        unavailable: false,
      });
    };

    worker.postMessage({ type: 'run', id, code, runtimeUrl: OFFLINE_RUNTIME_URL });
  });
}

export function analyzeOfflineMicroPython(code: string): OfflineMicroPythonIssue[] {
  const issues: OfflineMicroPythonIssue[] = [];
  const byteSize = new Blob([code]).size;

  if (byteSize > MAX_CODE_BYTES) {
    issues.push({
      level: 'error',
      text: `Koden er ${byteSize} bytes. Offline MicroPython kører kun små programmer op til ${MAX_CODE_BYTES} bytes.`,
    });
  }

  const lines = code.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const lineNumber = index + 1;
    const line = stripComment(lines[index]).trim();
    if (!line) continue;

    const importedModule = getImportedModule(line);
    if (importedModule && HARDWARE_MODULES.has(importedModule)) {
      issues.push({
        level: 'error',
        line: lineNumber,
        text: `${importedModule} virker kun på Picoen. Forbind en Pico for at køre denne kode.`,
      });
    }

    if (/^while\s+True\s*:/.test(line) && !blockContainsExit(lines, index)) {
      issues.push({
        level: 'error',
        line: lineNumber,
        text: 'Uendelige while True-løkker køres ikke offline. Forbind en Pico, eller tilføj en tydelig break.',
      });
    }

    const rangeMatch = line.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);
    if (rangeMatch && estimateRangeSteps(rangeMatch) > MAX_RANGE_STEPS) {
      issues.push({
        level: 'error',
        line: lineNumber,
        text: `range(...) er for stor til offline kørsel. Brug højst ${MAX_RANGE_STEPS} gentagelser.`,
      });
    }
  }

  for (const name of findLikelyRecursiveFunctions(lines)) {
    issues.push({
      level: 'warning',
      text: `Funktionen ${name} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`,
    });
  }

  return issues;
}

function stripComment(line: string): string {
  let quote: string | null = null;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if ((char === '"' || char === "'") && line[i - 1] !== '\\') {
      quote = quote === char ? null : quote ?? char;
    }
    if (char === '#' && !quote) return line.slice(0, i);
  }
  return line;
}

function getImportedModule(line: string): string | null {
  const importMatch = line.match(/^import\s+([A-Za-z_]\w*)/);
  if (importMatch) return importMatch[1];
  const fromMatch = line.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);
  return fromMatch?.[1] ?? null;
}

function blockContainsExit(lines: string[], headerIndex: number): boolean {
  const headerIndent = getIndent(lines[headerIndex]);
  for (let i = headerIndex + 1; i < lines.length; i += 1) {
    const raw = lines[i];
    if (!raw.trim()) continue;
    const indent = getIndent(raw);
    if (indent <= headerIndent) return false;
    if (/\b(break|return|raise)\b/.test(stripComment(raw))) return true;
  }
  return false;
}

function getIndent(line: string): number {
  const match = line.match(/^\s*/);
  return match?.[0].replace(/\t/g, '    ').length ?? 0;
}

function estimateRangeSteps(match: RegExpMatchArray): number {
  const first = Number(match[1]);
  const second = match[2] === undefined ? undefined : Number(match[2]);
  const third = match[3] === undefined ? 1 : Number(match[3]);
  if (third === 0) return Number.POSITIVE_INFINITY;

  const start = second === undefined ? 0 : first;
  const stop = second === undefined ? first : second;
  const distance = stop - start;
  if ((distance > 0 && third < 0) || (distance < 0 && third > 0)) return 0;
  return Math.ceil(Math.abs(distance / third));
}

function findLikelyRecursiveFunctions(lines: string[]): string[] {
  const recursive = new Set<string>();
  for (let i = 0; i < lines.length; i += 1) {
    const defMatch = stripComment(lines[i]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);
    if (!defMatch) continue;

    const name = defMatch[1];
    const defIndent = getIndent(lines[i]);
    for (let j = i + 1; j < lines.length; j += 1) {
      if (!lines[j].trim()) continue;
      const indent = getIndent(lines[j]);
      if (indent <= defIndent) break;
      if (new RegExp(`\\b${name}\\s*\\(`).test(stripComment(lines[j]))) {
        recursive.add(name);
        break;
      }
    }
  }
  return [...recursive];
}
