import { SerialTransport } from './serialTransport';

export interface RawExecResult {
  output: string;
  error: string;
  raw: string;
}

const CTRL_A = '\x01';
const CTRL_B = '\x02';
const CTRL_C = '\x03';
const CTRL_D = '\x04';

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class MicroPythonRepl {
  constructor(private transport: SerialTransport) {}

  async interrupt(): Promise<void> {
    await this.transport.write(CTRL_C);
    await delay(80);
    await this.transport.write(CTRL_C);
  }

  async friendlyRepl(): Promise<void> {
    await this.transport.write(CTRL_B);
  }

  async softReset(): Promise<void> {
    await this.transport.write(CTRL_D);
  }

  async enterRawRepl(timeoutMs = 2500): Promise<void> {
    await this.interrupt();
    await delay(80);
    await this.transport.write('\r\n');
    await delay(40);
    const raw = await this.collectUntil(
      async () => {
        await this.transport.write(CTRL_A);
      },
      (buffer) => buffer.includes('raw REPL') || buffer.includes('raw REPL; CTRL-B to exit'),
      timeoutMs,
    );
    if (!raw.includes('raw REPL')) {
      throw new Error('Kunne ikke skifte til MicroPython raw REPL.');
    }
  }

  async exec(code: string, timeoutMs = 6000): Promise<RawExecResult> {
    await this.enterRawRepl();
    const raw = await this.collectUntil(
      async () => {
        await this.transport.write(code);
        if (!code.endsWith('\n')) {
          await this.transport.write('\n');
        }
        await this.transport.write(CTRL_D);
      },
      (buffer) => buffer.includes(`${CTRL_D}${CTRL_D}`) || buffer.includes(`${CTRL_D}>`),
      timeoutMs,
    );
    await this.friendlyRepl().catch(() => {});
    return parseRawExec(raw);
  }

  private collectUntil(
    action: () => Promise<void>,
    done: (buffer: string) => boolean,
    timeoutMs: number,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let buffer = '';
      let cleanup: (() => void) | null = null;
      const timer = setTimeout(() => {
        cleanup?.();
        reject(new Error('Timeout ved USB REPL kommando.'));
      }, timeoutMs);

      cleanup = this.transport.addDataListener((text) => {
        buffer += text;
        if (done(buffer)) {
          clearTimeout(timer);
          cleanup?.();
          resolve(buffer);
        }
      });

      action().catch((err) => {
        clearTimeout(timer);
        cleanup?.();
        reject(err instanceof Error ? err : new Error('USB REPL kommando fejlede.'));
      });
    });
  }
}

function parseRawExec(raw: string): RawExecResult {
  const okIndex = raw.indexOf('OK');
  const firstEot = raw.indexOf(CTRL_D, okIndex >= 0 ? okIndex : 0);
  const secondEot = firstEot >= 0 ? raw.indexOf(CTRL_D, firstEot + 1) : -1;

  if (okIndex < 0 || firstEot < 0) {
    return { output: raw.trim(), error: '', raw };
  }

  const output = raw.slice(okIndex + 2, firstEot).replace(/^\r?\n/, '').trimEnd();
  const error = secondEot >= 0 ? raw.slice(firstEot + 1, secondEot).trim() : '';
  return { output, error, raw };
}
