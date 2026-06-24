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
      ownerName?: string;
      iconID: number;
      canEdit: boolean;
      isOwnedByMe: boolean;
      canOthersConnect: boolean;
      canOthersEdit: boolean;
    };

export interface BleFileEntry {
  name: string;
  path: string;
  type: 'file' | 'dir' | 'unknown';
  size?: number;
}

export type FileWriteProgress = (value: number, label: string) => void;
export type FileReadProgress = (value: number, label: string) => void;

interface BleFilesystemCapabilities {
  version?: string;
  pageRead: boolean;
  maxPageSize: number;
  validated: boolean;
}

interface Waiter {
  match: (line: string) => boolean;
  resolve: (line: string) => void;
  reject: (err: Error) => void;
  timer: ReturnType<typeof setTimeout>;
}

const HANDSHAKE_TIMEOUT = 6000;
const CONTROL_GAP_MS = 15;
const FILE_READ_PAGE_SIZES = [32, 64, 128, 192] as const;
const FILE_READ_PAGE_ATTEMPTS = 4;
const FILE_TRANSFER_TIMEOUT = HANDSHAKE_TIMEOUT * 4;
const FILE_CAPABILITIES_TIMEOUT = HANDSHAKE_TIMEOUT;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function throwIfAborted(signal?: AbortSignal): void {
  if (!signal?.aborted) return;
  throw new DOMException('BLE file read cancelled', 'AbortError');
}

function isAbortError(err: unknown): boolean {
  return err instanceof DOMException && err.name === 'AbortError';
}

function protocolField(value: string): string {
  return value.replace(/[\r\n,]/g, ' ').trim();
}

export class PicoProtocol {
  private transport = new BleTransport();
  private stream: ReliableStream;
  private events: ProtocolEvents;

  private waiters: Waiter[] = [];
  private collectingLayout = false;
  private layoutBuffer: string[] = [];
  private layoutResolve: ((lines: string[]) => void) | null = null;
  private collectingLines = false;
  private lineBuffer: string[] = [];
  private lineResolve: ((lines: string[]) => void) | null = null;
  private lineReject: ((err: unknown) => void) | null = null;
  private lineCollectId = 0;

  private controlPumpActive = false;
  private pendingButtons: string[] = [];
  private pendingSliders = new Map<string, string>();
  private expectingDisconnect = false;
  private busy = false;
  private fsCapabilities: BleFilesystemCapabilities | null = null;

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
    if (busy) {
      this.pendingButtons = [];
      this.pendingSliders.clear();
      return;
    }
    this.pumpControls();
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

    if (this.collectingLines) {
      if (line === '__END__') {
        const lines = this.lineBuffer;
        this.lineBuffer = [];
        this.collectingLines = false;
        this.lineResolve?.(lines);
        this.lineResolve = null;
        return;
      }
      this.lineBuffer.push(line);
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

  private async collectLines(command: string, timeoutMs: number, label: string, signal?: AbortSignal): Promise<string[]> {
    throwIfAborted(signal);
    const collectId = this.lineCollectId + 1;
    this.lineCollectId = collectId;
    this.collectingLines = true;
    this.lineBuffer = [];

    const linesPromise = new Promise<string[]>((resolve, reject) => {
      let settled = false;
      const isCurrentCollection = () => this.lineCollectId === collectId;
      const cleanup = () => {
        settled = true;
        if (isCurrentCollection()) {
          this.lineReject = null;
        }
        signal?.removeEventListener('abort', abort);
      };
      const fail = (err: unknown) => {
        if (settled) return;
        clearTimeout(timer);
        if (isCurrentCollection()) {
          this.collectingLines = false;
          this.lineBuffer = [];
          this.lineResolve = null;
        }
        cleanup();
        reject(err);
      };
      const abort = () => {
        fail(new DOMException('BLE file read cancelled', 'AbortError'));
      };
      const timer = setTimeout(() => {
        if (isCurrentCollection()) fail(new Error(`Timeout: ${label}`));
      }, timeoutMs);
      this.lineResolve = resolve;
      this.lineReject = fail;
      const origResolve = this.lineResolve;
      this.lineResolve = (lines) => {
        if (!isCurrentCollection()) return;
        clearTimeout(timer);
        cleanup();
        origResolve?.(lines);
      };
      signal?.addEventListener('abort', abort, { once: true });
    });

    await this.transport.writeLine(command);
    return linesPromise;
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
    const ownerName = parts[5]?.trim() || undefined;

    // Staged ack -> READY:permission. Optional; tolerate absence.
    try {
      await this.exchange('ACK:ownership', (l) => l === 'READY:permission', 'ACK:ownership', 1);
    } catch {
      this.log('info', 'READY:permission ikke modtaget (fortsætter).');
    }

    this.progress(66, 'Anmoder om adgang...');
    const permLine = await this.exchange(
      `request_permission,${user.userID},${protocolField(user.username)}`,
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
      ownerName,
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
      `create,${user.userID},${protocolField(user.username)},${iconID},${c},${e},${cols},${rows}`,
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
    ownerName?: string,
  ): Promise<void> {
    const c = canConnect ? 1 : 0;
    const e = canConnect && canEdit ? 1 : 0;
    await this.exchange(
      `settings_update,${iconID},${c},${e},${cols},${rows},${protocolField(ownerName ?? '')}`,
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
    await this.stream.sendReliable(lines);
    await saved;
  }

  // ---- file management over BLE ----------------------------------------
  async listFiles(path = '/'): Promise<BleFileEntry[]> {
    const lines = await this.collectLines(`fs_list,${protocolField(path)}`, HANDSHAKE_TIMEOUT * 3, 'fs_list');
    return lines
      .filter((line) => line.startsWith('fs_entry,'))
      .map((line) => {
        const [, typeRaw, pathRaw, sizeRaw] = line.split(',');
        const type = typeRaw === 'file' || typeRaw === 'dir' ? typeRaw : 'unknown';
        const size = parseInt(sizeRaw ?? '', 10);
        const cleanPath = pathRaw || '/';
        return {
          name: cleanPath.split('/').filter(Boolean).pop() ?? cleanPath,
          path: cleanPath,
          type,
          ...(Number.isFinite(size) && size >= 0 ? { size } : {}),
        };
      });
  }

  async readText(path: string, onProgress?: FileReadProgress, signal?: AbortSignal): Promise<string> {
    onProgress?.(4, 'Validerer Picoens Bluetooth-filsystem...');
    await this.getFilesystemCapabilities(signal);
    return this.readTextPaged(path, onProgress, signal);
  }

  private async getFilesystemCapabilities(signal?: AbortSignal): Promise<BleFilesystemCapabilities> {
    if (this.fsCapabilities) return this.fsCapabilities;

    let lines: string[];
    try {
      lines = await this.collectLines('fs_capabilities', FILE_CAPABILITIES_TIMEOUT, 'fs_capabilities', signal);
    } catch (err) {
      if (signal?.aborted || isAbortError(err)) throw err;
      this.log('warning', 'Runtime svarede ikke på fs_capabilities; prøver en lille fs_read_page som kompatibilitetstest.');
      return {
        pageRead: true,
        maxPageSize: FILE_READ_PAGE_SIZES[0],
        validated: false,
      };
    }

    const error = lines.find((line) => line.startsWith('ERR'));
    if (error) throw new Error(error);

    const capabilityLine = lines.find((line) => line.startsWith('fs_capabilities,'));
    if (!capabilityLine) {
      throw new Error('Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.');
    }

    const parts = capabilityLine.split(',');
    const fields = new Map<string, string>();
    for (let i = 1; i < parts.length - 1; i += 2) {
      fields.set(parts[i], parts[i + 1]);
    }

    const maxPageSize = parseInt(fields.get('max_page') ?? '', 10);
    const capabilities: BleFilesystemCapabilities = {
      version: fields.get('version') || undefined,
      pageRead: fields.get('page_read') === '1',
      maxPageSize: Number.isFinite(maxPageSize) && maxPageSize > 0 ? maxPageSize : 32,
      validated: true,
    };

    if (!capabilities.pageRead) {
      throw new Error('Picoens Bluetooth-runtime meldte, at paged file-read ikke er understøttet.');
    }

    this.fsCapabilities = capabilities;
    return capabilities;
  }

  private async readTextPaged(path: string, onProgress?: FileReadProgress, signal?: AbortSignal): Promise<string> {
    const capabilities = await this.getFilesystemCapabilities(signal);
    let pageSizeIndex = 0;
    let maxPageSizeIndex = getMaxReadPageSizeIndex(capabilities.maxPageSize);
    let offset = 0;
    let total: number | null = null;
    let hex = '';
    throwIfAborted(signal);
    onProgress?.(5, `Starter læsning af ${path}...`);

    for (let page = 0; page < 512; page += 1) {
      throwIfAborted(signal);
      const firstPage = offset === 0;
      onProgress?.(firstPage ? 7 : 8, firstPage ? 'Beder Pico om første datapakke...' : `Beder Pico om byte ${offset}...`);
      let result: { lines: string[]; nextPageSizeIndex: number; maxPageSizeIndex: number };
      try {
        result = await this.readPageWithRetry(path, offset, pageSizeIndex, maxPageSizeIndex, signal);
      } catch (err) {
        if (firstPage && !capabilities.validated && err instanceof Error) {
          throw new Error(`Kunne ikke validere Picoens Bluetooth-filsystem, og første fs_read_page fejlede: ${err.message}`);
        }
        throw err;
      }
      const lines = result.lines;
      pageSizeIndex = result.nextPageSizeIndex;
      maxPageSizeIndex = result.maxPageSizeIndex;
      throwIfAborted(signal);
      const error = lines.find((line) => line.startsWith('ERR'));
      if (error) throw new Error(error);

      const pageLine = lines.find((line) => line.startsWith('fs_page,'));
      if (!pageLine) throw new Error('ERR: fs_read_page missing data');

      const [, pagePathRaw, offsetRaw, totalRaw, hexChunk = ''] = pageLine.split(',', 5);
      if (pagePathRaw !== path) {
        throw new Error('ERR: fs_read_page stale data');
      }
      const pageOffset = parseInt(offsetRaw ?? '', 10);
      const nextTotal = parseInt(totalRaw ?? '', 10);
      if (!Number.isFinite(pageOffset) || pageOffset !== offset || !Number.isFinite(nextTotal)) {
        throw new Error('ERR: fs_read_page invalid data');
      }

      total = nextTotal;
      hex += hexChunk;
      offset += Math.floor(hexChunk.length / 2);
      const value = total > 0 ? 8 + Math.min(87, Math.round((offset / total) * 87)) : 95;
      onProgress?.(value, `Læser ${Math.min(offset, total)}/${total} bytes fra Pico...`);

      if (offset >= total || hexChunk.length === 0) {
        onProgress?.(100, 'Fil indlæst fra Pico');
        return new TextDecoder().decode(hexToBytes(hex));
      }
    }

    throw new Error('ERR: fs_read_page too many pages');
  }

  private async readPageWithRetry(
    path: string,
    offset: number,
    pageSizeIndex: number,
    maxPageSizeIndex: number,
    signal?: AbortSignal,
  ): Promise<{ lines: string[]; nextPageSizeIndex: number; maxPageSizeIndex: number }> {
    let lastErr: unknown;
    let currentIndex = Math.min(pageSizeIndex, maxPageSizeIndex);
    while (currentIndex >= 0) {
      const pageSize = FILE_READ_PAGE_SIZES[currentIndex];
      for (let attempt = 1; attempt <= FILE_READ_PAGE_ATTEMPTS; attempt += 1) {
        throwIfAborted(signal);
        try {
          const lines = await this.collectLines(
            `fs_read_page,${protocolField(path)},${offset},${pageSize}`,
            FILE_TRANSFER_TIMEOUT,
            `fs_read_page ${offset}`,
            signal,
          );
          return {
            lines,
            nextPageSizeIndex: Math.min(currentIndex + 1, maxPageSizeIndex),
            maxPageSizeIndex,
          };
        } catch (err) {
          if (signal?.aborted || isAbortError(err)) throw err;
          lastErr = err;
          const hasMoreAttempts = attempt < FILE_READ_PAGE_ATTEMPTS || currentIndex > 0;
          if (hasMoreAttempts) {
            this.log('warning', `fs_read_page ${offset} (${pageSize} bytes): forsøg ${attempt}/${FILE_READ_PAGE_ATTEMPTS} mislykkedes, prøver igen`);
            await delay(120 + attempt * 120);
          }
        }
      }
      if (currentIndex === 0) break;
      maxPageSizeIndex = Math.max(0, currentIndex - 1);
      currentIndex = maxPageSizeIndex;
    }
    throw lastErr instanceof Error ? lastErr : new Error(`Timeout: fs_read_page ${offset}`);
  }

  async writeText(path: string, content: string, onProgress?: FileWriteProgress): Promise<void> {
    onProgress?.(5, 'Klargør BLE-overførsel...');
    await this.exchange(`fs_write_begin,${protocolField(path)}`, (l) => l === 'ACK:fs_write_begin', 'fs_write_begin', 2);
    onProgress?.(18, 'Pico er klar til filen...');
    const bytes = new TextEncoder().encode(content);
    const hex = [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('');
    const lines: string[] = [];
    for (let offset = 0; offset < hex.length; offset += 160) {
      lines.push(`fs_write_chunk,${hex.slice(offset, offset + 160)}`);
    }
    lines.push('fs_write_end');
    const done = this.waitFor((l) => l === 'ACK:fs_write_done' || l.startsWith('ERR'), FILE_TRANSFER_TIMEOUT, 'fs_write_done');
    onProgress?.(bytes.length === 0 ? 85 : 18, bytes.length === 0 ? 'Sender tom fil via Bluetooth...' : `Sender 0/${bytes.length} bytes via Bluetooth...`);
    await this.stream.sendReliable(lines, (sent, totalLines, payload) => {
      if (!payload.startsWith('fs_write_chunk,')) return;
      const sentBytes = Math.min(bytes.length, sent * 80);
      const value = 18 + Math.round((sent / Math.max(1, totalLines - 1)) * 67);
      onProgress?.(Math.min(85, value), `Sender ${sentBytes}/${bytes.length} bytes via Bluetooth...`);
    });
    const result = await done;
    if (result.startsWith('ERR')) throw new Error(result);
    onProgress?.(100, 'Gemt på Pico');
  }

  async deleteFile(path: string): Promise<void> {
    const result = await this.exchange(`fs_delete,${protocolField(path)}`, (l) => l === 'ACK:fs_delete' || l.startsWith('ERR'), 'fs_delete', 2);
    if (result.startsWith('ERR')) throw new Error(result);
  }

  async restart(): Promise<void> {
    await this.exchange('restart', (l) => l === 'ACK:restart' || l.startsWith('ERR'), 'restart', 1).catch(() => {});
    this.expectingDisconnect = true;
  }

  // ---- control commands (play mode) ------------------------------------
  enqueueButton(name: string): void {
    if (this.busy) return;
    this.pendingButtons.push(`button,${name}`);
    this.pumpControls();
  }

  enqueueSlider(name: string, value: number): void {
    if (this.busy) return;
    this.pendingSliders.set(name, `slider,${name}:${value}`);
    this.pumpControls();
  }

  private pumpControls(): void {
    if (this.controlPumpActive || this.busy || !this.transport.connected) return;
    this.controlPumpActive = true;
    void this.drainControls();
  }

  private async drainControls(): Promise<void> {
    try {
      while (!this.busy && this.transport.connected) {
        const line = this.nextControlLine();
        if (!line) break;
        await this.transport.writeLine(line);
        this.log('info', `tx: ${line}`);
        await delay(CONTROL_GAP_MS);
      }
    } catch (err) {
      this.log('error', err instanceof Error ? err.message : 'Kunne ikke sende kommando.');
      this.handleDisconnect();
    } finally {
      this.controlPumpActive = false;
      if (!this.busy && this.transport.connected && this.hasPendingControls()) {
        this.pumpControls();
      }
    }
  }

  private nextControlLine(): string | null {
    const button = this.pendingButtons.shift();
    if (button) return button;

    const nextSlider = this.pendingSliders.entries().next();
    if (nextSlider.done) return null;
    const [name, line] = nextSlider.value;
    this.pendingSliders.delete(name);
    return line;
  }

  private hasPendingControls(): boolean {
    return this.pendingButtons.length > 0 || this.pendingSliders.size > 0;
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
    this.lineReject?.(new Error('Forbindelsen blev afbrudt.'));
    this.collectingLines = false;
    this.lineResolve = null;
    this.lineReject = null;
    this.fsCapabilities = null;
    this.stream.reset();
    this.events.onDisconnect?.();
  }
}

function getMaxReadPageSizeIndex(maxPageSize: number): number {
  let result = 0;
  for (let i = 0; i < FILE_READ_PAGE_SIZES.length; i += 1) {
    if (FILE_READ_PAGE_SIZES[i] <= maxPageSize) result = i;
  }
  return result;
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(Math.floor(hex.length / 2));
  for (let i = 0; i < bytes.length; i += 1) {
    bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return bytes;
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
