// High-level protocol: handshake, layout request/save, control commands.
// Sits on BleTransport (lines) + ReliableStream (framing). Mirrors AppManager.cs.

import type { Control, Rotation, SliderRecenter, User } from '../lib/types';
import { BleTransport, displayName } from './transport';
import { ReliableStream } from './reliableStream';
import { DEFAULT_GRID_COLS, DEFAULT_GRID_ROWS, MAX_GRID, MIN_GRID } from '../grid/geometry';

export type LogLevel = 'info' | 'success' | 'warning' | 'error';

export interface ProtocolEvents {
  onProgress?: (value: number, label: string) => void;
  onLog?: (level: LogLevel, message: string) => void;
  onDisconnect?: () => void;
}

export type HandshakeResult =
  | { kind: 'unowned' }
  | { kind: 'denied' }
  | {
      kind: 'owned';
      ownerID: string;
      iconID: number;
      canEdit: boolean;
      isOwnedByMe: boolean;
      canOthersConnect: boolean;
      canOthersEdit: boolean;
    };

interface Waiter {
  match: (line: string) => boolean;
  resolve: (line: string) => void;
  reject: (err: Error) => void;
  timer: ReturnType<typeof setTimeout>;
}

const HANDSHAKE_TIMEOUT = 6000;
const CONTROL_GAP_MS = 30;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class PicoProtocol {
  private transport = new BleTransport();
  private stream: ReliableStream;
  private events: ProtocolEvents;

  private waiters: Waiter[] = [];
  private collectingLayout = false;
  private layoutBuffer: string[] = [];
  private layoutResolve: ((lines: string[]) => void) | null = null;

  private controlQueue: Promise<void> = Promise.resolve();
  private expectingDisconnect = false;
  private busy = false;

  constructor(events: ProtocolEvents = {}) {
    this.events = events;
    this.stream = new ReliableStream(
      (line) => this.transport.writeLine(line),
      (line) => this.onDeviceMessage(line),
    );
    this.transport.onLine = (line) => this.stream.handleLine(line);
    this.transport.onDisconnect = () => this.handleDisconnect();
  }

  get device(): BluetoothDevice | null {
    return this.transport.device;
  }

  get deviceName(): string {
    return displayName(this.transport.device?.name);
  }

  get connected(): boolean {
    return this.transport.connected;
  }

  setBusy(busy: boolean): void {
    this.busy = busy;
  }

  private log(level: LogLevel, message: string): void {
    this.events.onLog?.(level, message);
  }

  private progress(value: number, label: string): void {
    this.events.onProgress?.(value, label);
  }

  // ---- inbound routing --------------------------------------------------
  private onDeviceMessage(line: string): void {
    // Unsolicited device-initiated teardown.
    if (line === 'disconnect') {
      this.log('warning', 'Enheden afbrød forbindelsen.');
      this.expectingDisconnect = true;
      this.transport.disconnect();
      return;
    }

    if (this.collectingLayout) {
      if (line === '__END__') {
        const lines = this.layoutBuffer;
        this.layoutBuffer = [];
        this.collectingLayout = false;
        this.layoutResolve?.(lines);
        this.layoutResolve = null;
        return;
      }
      // Still satisfy waiters (e.g. a late ACK) but also collect layout lines.
      if (!line.startsWith('ACK') && !line.startsWith('ERR') && !line.startsWith('#VERSION')) {
        this.layoutBuffer.push(line);
      } else if (line.startsWith('#VERSION')) {
        this.layoutBuffer.push(line);
      }
      return;
    }

    if (line.startsWith('ERR')) {
      this.log('error', line);
    } else if (line.startsWith('ACK') || line === 'LAYOUT_SAVED' || line.startsWith('READY')) {
      this.log('success', line);
    } else {
      this.log('info', `rx: ${line}`);
    }

    // Resolve the first matching waiter.
    const idx = this.waiters.findIndex((w) => w.match(line));
    if (idx >= 0) {
      const waiter = this.waiters[idx];
      this.waiters.splice(idx, 1);
      clearTimeout(waiter.timer);
      waiter.resolve(line);
    }
  }

  private waitFor(match: (line: string) => boolean, timeoutMs: number, label: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        const i = this.waiters.findIndex((w) => w.timer === timer);
        if (i >= 0) this.waiters.splice(i, 1);
        reject(new Error(`Timeout: ${label}`));
      }, timeoutMs);
      this.waiters.push({ match, resolve, reject, timer });
    });
  }

  /** Send a line then wait for a matching reply, retrying the whole exchange. */
  private async exchange(
    send: string,
    match: (line: string) => boolean,
    label: string,
    attempts = 3,
  ): Promise<string> {
    let lastErr: unknown;
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
      try {
        await this.transport.writeLine(send);
        return await this.waitFor(match, HANDSHAKE_TIMEOUT, label);
      } catch (err) {
        lastErr = err;
        this.log('warning', `${label}: forsøg ${attempt}/${attempts} mislykkedes`);
      }
    }
    throw lastErr instanceof Error ? lastErr : new Error(`Failed: ${label}`);
  }

  // ---- connection + handshake ------------------------------------------
  async connect(device: BluetoothDevice): Promise<void> {
    this.expectingDisconnect = false;
    this.stream.reset();
    this.progress(5, 'Forbinder til Bluetooth...');
    await this.transport.connect(device);
  }

  async runHandshake(user: User): Promise<HandshakeResult> {
    await delay(350);
    this.progress(18, 'Klargør forbindelse...');

    this.progress(26, 'Sender HELLO...');
    await this.exchange('HELLO', (l) => l === 'ACK:HELLO', 'HELLO');
    this.progress(34, 'Forbindelse bekræftet');

    this.progress(44, 'Spørger om ejerskab...');
    const ownLine = await this.exchange(
      'who_are_you',
      (l) => l === 'unowned' || l.startsWith('owned,'),
      'who_are_you',
    );
    this.progress(56, 'Ejerskab modtaget');

    if (ownLine === 'unowned') {
      return { kind: 'unowned' };
    }

    const parts = ownLine.split(',');
    const ownerID = parts[1] ?? '';
    const iconID = parts[2] !== undefined ? parseInt(parts[2], 10) || 0 : 0;
    const reportedCanConnect = parts[3] !== undefined ? parseInt(parts[3], 10) === 1 : true;
    const reportedCanEdit = parts[4] !== undefined ? parseInt(parts[4], 10) === 1 : false;

    // Staged ack -> READY:permission. Optional; tolerate absence.
    try {
      await this.exchange('ACK:ownership', (l) => l === 'READY:permission', 'ACK:ownership', 1);
    } catch {
      this.log('info', 'READY:permission ikke modtaget (fortsætter).');
    }

    this.progress(66, 'Anmoder om adgang...');
    const permLine = await this.exchange(
      `request_permission,${user.userID},${user.username}`,
      (l) => l.startsWith('perm,') || l.startsWith('permission_response,'),
      'request_permission',
    );
    this.progress(76, 'Adgang vurderet');

    const nums = permLine.split(',').filter((p) => /^\d+$/.test(p));
    const canConnect = nums.length >= 1 ? parseInt(nums[nums.length - 2] ?? '0', 10) : 0;
    const canEdit = nums.length >= 1 ? parseInt(nums[nums.length - 1] ?? '0', 10) : 0;

    if (canConnect === 0) {
      this.expectingDisconnect = true;
      return { kind: 'denied' };
    }

    const isOwnedByMe = user.userID === ownerID;
    const canEditThisSession = canEdit === 1 || isOwnedByMe;
    await this.transport.writeLine('ACK:permission');

    return {
      kind: 'owned',
      ownerID,
      iconID,
      canEdit: canEditThisSession,
      isOwnedByMe,
      canOthersConnect: reportedCanConnect,
      canOthersEdit: reportedCanEdit,
    };
  }

  // ---- create (unowned setup) ------------------------------------------
  async create(
    user: User,
    iconID: number,
    canConnect: boolean,
    canEdit: boolean,
    cols: number,
    rows: number,
  ): Promise<void> {
    const c = canConnect ? 1 : 0;
    const e = canConnect && canEdit ? 1 : 0;
    await this.exchange(
      `create,${user.userID},${user.username},${iconID},${c},${e},${cols},${rows}`,
      (l) => l === 'ACK:create',
      'create',
    );
  }

  async updateDeviceSettings(
    iconID: number,
    canConnect: boolean,
    canEdit: boolean,
    cols: number,
    rows: number,
  ): Promise<void> {
    const c = canConnect ? 1 : 0;
    const e = canConnect && canEdit ? 1 : 0;
    await this.exchange(
      `settings_update,${iconID},${c},${e},${cols},${rows}`,
      (l) => l === 'ACK:settings_update',
      'settings_update',
      3,
    );
  }

  // ---- layout request --------------------------------------------------
  async requestLayout(): Promise<string[]> {
    this.progress(84, 'Henter kontrolpanel...');
    this.collectingLayout = true;
    this.layoutBuffer = [];

    const layoutPromise = new Promise<string[]>((resolve, reject) => {
      this.layoutResolve = resolve;
      const timer = setTimeout(() => {
        if (this.collectingLayout) {
          this.collectingLayout = false;
          this.layoutResolve = null;
          reject(new Error('Timeout: layout'));
        }
      }, HANDSHAKE_TIMEOUT * 2);
      // Clear the timer once resolved by wrapping resolve.
      const origResolve = this.layoutResolve;
      this.layoutResolve = (lines) => {
        clearTimeout(timer);
        origResolve?.(lines);
      };
    });

    await this.transport.writeLine('request');
    this.progress(92, 'Modtager kontrolpanel...');
    const lines = await layoutPromise;
    this.progress(100, 'Klar');
    return lines;
  }

  // ---- layout save (edit mode) -----------------------------------------
  async saveLayout(controls: Control[]): Promise<void> {
    await this.exchange('update', (l) => l === 'ACK:update', 'update', 3).catch(() => {
      this.log('warning', 'ACK:update udeblev (fortsætter).');
    });

    const lines = controls.map((c) => {
      const n = (v: number | null) => (v === null ? 'n' : String(v));
      return `update,${c.type},${c.name},${n(c.centerX2)},${n(c.centerY2)},${n(c.spanX)},${n(c.spanY)},${c.rotation}`;
    });
    lines.push('__END__');

    const saved = this.waitFor((l) => l === 'LAYOUT_SAVED', HANDSHAKE_TIMEOUT * 2, 'LAYOUT_SAVED');
    this.stream.sendReliable(lines);
    await saved;
  }

  // ---- control commands (play mode) ------------------------------------
  enqueueButton(name: string): void {
    this.enqueueControl(`button,${name}`);
  }

  enqueueSlider(name: string, value: number): void {
    this.enqueueControl(`slider,${name}:${value}`);
  }

  private enqueueControl(line: string): void {
    if (this.busy) return;
    this.controlQueue = this.controlQueue.then(async () => {
      if (this.busy || !this.transport.connected) return;
      try {
        await this.transport.writeLine(line);
        this.log('info', `tx: ${line}`);
        await delay(CONTROL_GAP_MS);
      } catch (err) {
        this.log('error', err instanceof Error ? err.message : 'Kunne ikke sende kommando.');
        this.handleDisconnect();
      }
    });
  }

  // ---- teardown ---------------------------------------------------------
  async disconnect(): Promise<void> {
    if (!this.transport.connected) {
      this.handleDisconnect();
      return;
    }
    this.expectingDisconnect = true;
    try {
      await this.exchange('disconnect', (l) => l === 'ACK:disconnect', 'disconnect', 1);
    } catch {
      /* ignore — we are tearing down anyway */
    }
    this.transport.disconnect();
  }

  private handleDisconnect(): void {
    // Reject any pending waiters.
    for (const waiter of this.waiters) {
      clearTimeout(waiter.timer);
      waiter.reject(new Error('Forbindelsen blev afbrudt.'));
    }
    this.waiters = [];
    this.collectingLayout = false;
    this.layoutResolve = null;
    this.stream.reset();
    this.events.onDisconnect?.();
  }
}

/** Read the device's grid size from a `#GRID,<cols>,<rows>` header (default 11x31). */
export function parseGridHeader(lines: string[]): { cols: number; rows: number } {
  const clamp = (v: number, fallback: number) =>
    Number.isFinite(v) ? Math.max(MIN_GRID, Math.min(MAX_GRID, v)) : fallback;
  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith('#GRID,')) {
      const parts = line.split(',');
      const cols = clamp(parseInt(parts[1], 10), DEFAULT_GRID_COLS);
      const rows = clamp(parseInt(parts[2], 10), DEFAULT_GRID_ROWS);
      return { cols, rows };
    }
  }
  return { cols: DEFAULT_GRID_COLS, rows: DEFAULT_GRID_ROWS };
}

/** Parse raw layout lines (device -> app) into Control objects, dedup by name. */
export function parseLayout(lines: string[]): Control[] {
  const byName = new Map<string, Control>();
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#VERSION') || line === '__END__') continue;
    const parts = line.split(',');
    if (parts.length < 7) continue;
    const [type, name, x, y, w, h, r, minRaw, maxRaw, recenterRaw] = parts;
    if (type !== 'button' && type !== 'slider') continue;
    if (byName.has(name)) continue; // keep first per name

    const toNum = (s: string): number | null => {
      if (s === 'n') return null;
      const v = parseInt(s, 10);
      return Number.isNaN(v) ? null : v;
    };
    const rot = (parseInt(r, 10) || 0) as Rotation;
    const sliderMin = minRaw !== undefined ? parseInt(minRaw, 10) : 0;
    const sliderMax = maxRaw !== undefined ? parseInt(maxRaw, 10) : 100;
    const recenter = (['none', 'bottom', 'middle', 'top'].includes(recenterRaw ?? '')
      ? recenterRaw
      : 'none') as SliderRecenter;

    byName.set(name, {
      type,
      name,
      centerX2: toNum(x),
      centerY2: toNum(y),
      spanX: toNum(w),
      spanY: toNum(h),
      rotation: [0, 90, 180, 270].includes(rot) ? rot : 0,
      ...(type === 'slider'
        ? {
            sliderMin: Number.isFinite(sliderMin) ? sliderMin : 0,
            sliderMax: Number.isFinite(sliderMax) ? sliderMax : 100,
            sliderRecenter: recenter,
          }
        : {}),
    });
  }
  return [...byName.values()];
}
