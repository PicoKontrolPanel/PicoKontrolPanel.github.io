export type SerialLogLevel = 'info' | 'success' | 'warning' | 'error';

export interface SerialEvents {
  onData?: (text: string) => void;
  onLine?: (line: string) => void;
  onLog?: (level: SerialLogLevel, message: string) => void;
  onDisconnect?: () => void;
}

const RASPBERRY_PI_USB_VENDOR_ID = 0x2e8a;

export function isWebSerialSupported(): boolean {
  return typeof navigator !== 'undefined' && 'serial' in navigator && !!navigator.serial;
}

export function developerModeStatus(): { supported: boolean; message: string } {
  if (isWebSerialSupported()) {
    return {
      supported: true,
      message: 'USB-udvikling er tilgængelig i denne browser.',
    };
  }

  return {
    supported: false,
    message: 'USB-udvikling kræver en computer med Chrome, Edge eller Chromebook.',
  };
}

export class SerialTransport {
  private port: SerialPort | null = null;
  private reader: ReadableStreamDefaultReader<Uint8Array> | null = null;
  private writer: WritableStreamDefaultWriter<Uint8Array> | null = null;
  private readLoopActive = false;
  private buffer = '';
  private events: SerialEvents;
  private dataListeners = new Set<(text: string) => void>();

  constructor(events: SerialEvents = {}) {
    this.events = events;
  }

  get connected(): boolean {
    return !!this.port && !!this.writer;
  }

  get info(): SerialPortInfo | null {
    return this.port?.getInfo() ?? null;
  }

  async requestAndConnect(): Promise<void> {
    if (!navigator.serial) {
      throw new Error('Web Serial er ikke tilgængelig i denne browser.');
    }

    const port = await navigator.serial.requestPort({
      filters: [{ usbVendorId: RASPBERRY_PI_USB_VENDOR_ID }],
    });
    await this.openPort(port);
  }

  async connectKnownPort(port: SerialPort): Promise<void> {
    await this.openPort(port);
  }

  async disconnect(): Promise<void> {
    const wasConnected = this.connected || !!this.port || !!this.reader;
    this.readLoopActive = false;

    try {
      await this.reader?.cancel();
    } catch {
      /* ignore */
    }

    this.reader?.releaseLock();
    this.reader = null;

    try {
      await this.writer?.close();
    } catch {
      /* ignore */
    }

    this.writer?.releaseLock();
    this.writer = null;

    if (this.port) {
      try {
        await this.port.close();
      } catch {
        /* ignore */
      }
    }

    this.port = null;
    this.buffer = '';
    if (wasConnected) {
      this.events.onDisconnect?.();
    }
  }

  async write(data: string): Promise<void> {
    if (!this.writer) {
      throw new Error('Ingen USB-forbindelse.');
    }
    await this.writer.write(new TextEncoder().encode(data));
  }

  async writeLine(line: string): Promise<void> {
    await this.write(`${line}\r\n`);
  }

  addDataListener(listener: (text: string) => void): () => void {
    this.dataListeners.add(listener);
    return () => this.dataListeners.delete(listener);
  }

  private async openPort(port: SerialPort): Promise<void> {
    await this.disconnect().catch(() => {});
    await port.open({ baudRate: 115200, bufferSize: 4096 });
    this.port = port;
    this.writer = port.writable?.getWriter() ?? null;
    if (!this.writer || !port.readable) {
      throw new Error('USB-porten kunne ikke åbnes til læsning og skrivning.');
    }
    const info = port.getInfo();
    this.events.onLog?.(
      'success',
      `USB-forbindelse oprettet (${formatUsbInfo(info)}).`,
    );
    this.startReadLoop(port);
  }

  private async startReadLoop(port: SerialPort): Promise<void> {
    this.readLoopActive = true;
    const decoder = new TextDecoder();
    this.reader = port.readable?.getReader() ?? null;

    if (!this.reader) return;

    try {
      while (this.readLoopActive) {
        const { value, done } = await this.reader.read();
        if (done) break;
        if (!value) continue;
        this.consumeText(decoder.decode(value, { stream: true }));
      }
    } catch (err) {
      if (this.readLoopActive) {
        this.events.onLog?.('error', err instanceof Error ? err.message : 'USB-læsning stoppede.');
      }
    } finally {
      this.reader?.releaseLock();
      this.reader = null;
      if (this.readLoopActive) {
        this.readLoopActive = false;
        this.port = null;
        this.writer = null;
        this.events.onDisconnect?.();
      }
    }
  }

  private consumeText(text: string): void {
    this.events.onData?.(text);
    for (const listener of this.dataListeners) {
      listener(text);
    }

    this.buffer += text;
    while (this.buffer.includes('\n')) {
      const idx = this.buffer.indexOf('\n');
      const line = this.buffer.slice(0, idx).replace(/\r$/, '');
      this.buffer = this.buffer.slice(idx + 1);
      this.events.onLine?.(line);
    }
  }
}

function formatUsbInfo(info: SerialPortInfo): string {
  const vendor = info.usbVendorId !== undefined ? `VID ${info.usbVendorId.toString(16).padStart(4, '0')}` : 'ukendt VID';
  const product = info.usbProductId !== undefined ? `PID ${info.usbProductId.toString(16).padStart(4, '0')}` : 'ukendt PID';
  return `${vendor}, ${product}`;
}
