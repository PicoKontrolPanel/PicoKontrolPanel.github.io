interface RunMessage {
  type: 'run';
  id: number;
  code: string;
  runtimeUrl: string;
}

interface LegacyMicroPythonGlobal {
  importScripts: (...urls: string[]) => void;
  MICROPYTHON_RUNTIME_BASE?: string;
  mp_js_init?: (stackSize: number) => void;
  mp_js_do_str?: (code: string) => number;
}

const STACK_SIZE = 64 * 1024;
const RUNTIME_READY_TIMEOUT_MS = 5000;
let micropythonLoaded = false;
let micropythonInitialized = false;

self.onmessage = async (event: MessageEvent<RunMessage>) => {
  const message = event.data;
  if (message.type !== 'run') return;

  try {
    const output: string[] = [];
    const errors: string[] = [];
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;

    console.log = (...args: unknown[]) => output.push(args.map(String).join(' '));
    console.warn = (...args: unknown[]) => output.push(args.map(String).join(' '));
    console.error = (...args: unknown[]) => errors.push(args.map(String).join(' '));

    try {
      const mp = await loadMicroPython(message.runtimeUrl);
      const exitCode = mp.mp_js_do_str?.(message.code) ?? 1;
      postResult(message.id, exitCode === 0, output.join('\n'), errors.join('\n'));
    } catch (err) {
      postResult(message.id, false, output.join('\n'), formatError(err, errors));
    } finally {
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
    }
  } catch (err) {
    self.postMessage({
      type: 'unavailable',
      id: message.id,
      error: formatUnavailableError(err),
    });
  }
};

async function loadMicroPython(runtimeUrl: string): Promise<LegacyMicroPythonGlobal> {
  const mp = self as unknown as LegacyMicroPythonGlobal;

  if (!micropythonLoaded) {
    mp.MICROPYTHON_RUNTIME_BASE = new URL('.', runtimeUrl).toString();
    mp.importScripts(runtimeUrl);
    micropythonLoaded = true;
  }

  await waitForMicroPythonApi(mp);

  if (!mp.mp_js_init || !mp.mp_js_do_str) {
    throw new Error('MicroPython WebAssembly blev hentet, men JavaScript-APIet blev ikke fundet.');
  }

  if (!micropythonInitialized) {
    mp.mp_js_init(STACK_SIZE);
    micropythonInitialized = true;
  }

  return mp;
}

function waitForMicroPythonApi(mp: LegacyMicroPythonGlobal): Promise<void> {
  if (mp.mp_js_init && mp.mp_js_do_str) return Promise.resolve();

  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      if (mp.mp_js_init && mp.mp_js_do_str) {
        resolve();
        return;
      }

      if (Date.now() - start > RUNTIME_READY_TIMEOUT_MS) {
        reject(new Error('MicroPython WebAssembly blev hentet, men JavaScript-APIet blev ikke klar i tide.'));
        return;
      }

      setTimeout(check, 20);
    };

    check();
  });
}

function postResult(id: number, ok: boolean, output: string, error: string) {
  self.postMessage({
    type: 'result',
    id,
    ok,
    output,
    error,
  });
}

function formatError(err: unknown, capturedErrors: string[]): string {
  const parts = [...capturedErrors];
  if (err instanceof Error) {
    parts.push(err.message);
  } else if (err !== undefined && err !== null) {
    parts.push(String(err));
  }
  return parts.filter(Boolean).join('\n') || 'Offline MicroPython kunne ikke køre koden.';
}

function formatUnavailableError(err: unknown): string {
  const detail = err instanceof Error ? err.message : String(err);
  return [
    'Offline MicroPython-runtime mangler.',
    'Tilføj den officielle MicroPython WebAssembly build som public/micropython/micropython.mjs og public/micropython/micropython.wasm.',
    detail,
  ].filter(Boolean).join('\n');
}

export {};
