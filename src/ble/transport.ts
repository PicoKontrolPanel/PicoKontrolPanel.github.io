// Low-level GATT transport: connect, chunked line writes, and notify -> line splitting.
// This is the only layer that talks to navigator.bluetooth.

export const SERVICE_UUID = 'b8e06067-62ad-41ba-9231-206ae80ab551';
export const WRITE_UUID = 'f897177b-aee8-4767-8ecc-cc694fd5fce0';
export const NOTIFY_UUID = 'f897177b-aee8-4767-8ecc-cc694fd5fce1';

const CHUNK_SIZE = 20;
const CHUNK_GAP_MS = 12;

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isBluetoothSupported(): boolean {
  return typeof navigator !== 'undefined' && 'bluetooth' in navigator;
}

/** Strip the advertised `PicoW-` prefix for display. */
export function displayName(name: string | undefined | null): string {
  if (!name) return 'Pico';
  return name.startsWith('PicoW-') ? name.slice('PicoW-'.length) : name;
}

export async function requestDevice(): Promise<BluetoothDevice> {
  if (!isBluetoothSupported()) {
    throw new Error('Web Bluetooth er ikke tilgængelig i denne browser.');
  }
  return navigator.bluetooth.requestDevice({
    filters: [{ services: [SERVICE_UUID] }, { namePrefix: 'PicoW-' }],
    optionalServices: [SERVICE_UUID],
  });
}

/** Permitted devices for quick reconnect, where supported. */
export async function getPermittedDevices(): Promise<BluetoothDevice[]> {
  if (!isBluetoothSupported() || !navigator.bluetooth.getDevices) {
    return [];
  }
  try {
    return await navigator.bluetooth.getDevices();
  } catch {
    return [];
  }
}

export class BleTransport {
  device: BluetoothDevice | null = null;
  private writeChar: BluetoothRemoteGATTCharacteristic | null = null;
  private notifyChar: BluetoothRemoteGATTCharacteristic | null = null;
  private buffer = '';
  private writeQueue: Promise<void> = Promise.resolve();
  private disconnectNotified = false;

  onLine: (line: string) => void = () => {};
  onDisconnect: () => void = () => {};

  get connected(): boolean {
    return !!this.device?.gatt?.connected;
  }

  async connect(device: BluetoothDevice): Promise<void> {
    if (this.device && this.device !== device) {
      this.device.removeEventListener('gattserverdisconnected', this.handleDisconnected);
    }
    this.device = device;
    this.buffer = '';
    this.disconnectNotified = false;
    device.removeEventListener('gattserverdisconnected', this.handleDisconnected);
    device.addEventListener('gattserverdisconnected', this.handleDisconnected);

    const server = await device.gatt?.connect();
    if (!server) {
      throw new Error('Kunne ikke åbne Bluetooth-forbindelsen.');
    }

    const service = await server.getPrimaryService(SERVICE_UUID);
    this.writeChar = await service.getCharacteristic(WRITE_UUID);
    this.notifyChar = await service.getCharacteristic(NOTIFY_UUID);

    await this.notifyChar.startNotifications();
    this.notifyChar.addEventListener('characteristicvaluechanged', this.handleNotification);
  }

  private handleNotification = (event: Event): void => {
    const target = event.target as BluetoothRemoteGATTCharacteristic | null;
    if (!target?.value) return;
    this.buffer += decoder.decode(target.value.buffer);
    let nl = this.buffer.indexOf('\n');
    while (nl >= 0) {
      const line = this.buffer.slice(0, nl).trim();
      this.buffer = this.buffer.slice(nl + 1);
      if (line) this.onLine(line);
      nl = this.buffer.indexOf('\n');
    }
  };

  private handleDisconnected = (): void => {
    if (this.disconnectNotified) return;
    this.disconnectNotified = true;
    this.device?.removeEventListener('gattserverdisconnected', this.handleDisconnected);
    this.writeChar = null;
    this.notifyChar = null;
    this.onDisconnect();
  };

  /**
   * Write a single newline-terminated line, chunked to <= 20 bytes. Serialized.
   * The returned promise reflects THIS write's result (so callers see failures),
   * while the internal queue keeps running even if a write rejects.
   */
  writeLine(line: string): Promise<void> {
    const run = this.writeQueue.then(() => this.doWrite(line));
    this.writeQueue = run.catch(() => {});
    return run;
  }

  private async doWrite(line: string): Promise<void> {
    if (!this.writeChar) throw new Error('Ingen forbindelse.');
    const data = encoder.encode(`${line}\n`);
    // Prefer write-without-response only when the characteristic actually
    // supports it; otherwise fall back to write-with-response (the firmware's
    // write char declares only Write-with-response).
    const supportsNoResponse =
      this.writeChar.properties.writeWithoutResponse &&
      typeof this.writeChar.writeValueWithoutResponse === 'function';
    const writeFn = supportsNoResponse
      ? this.writeChar.writeValueWithoutResponse.bind(this.writeChar)
      : this.writeChar.writeValue.bind(this.writeChar);

    for (let i = 0; i < data.length; i += CHUNK_SIZE) {
      const chunk = data.slice(i, i + CHUNK_SIZE);
      await writeFn(chunk);
      if (i + CHUNK_SIZE < data.length) {
        await delay(CHUNK_GAP_MS);
      }
    }
  }

  disconnect(): void {
    const device = this.device;
    if (device?.gatt?.connected) {
      device.gatt.disconnect();
    } else {
      this.handleDisconnected();
    }
  }
}
