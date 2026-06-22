// Reliable-stream framing on top of plain BLE lines.
// Mirrors BLEPeripheral.py: prep / ack:prep / numbered <n>-payload / miss.
//
// The device wraps EVERY reply (even single lines) in this framing, so the app
// must run inbound reassembly to receive anything. The app also uses the outbound
// half to stream the layout `update` on save.

type SendFn = (line: string) => void | Promise<void>;
type MessageFn = (line: string) => void;
type OutboundProgressFn = (sent: number, total: number, payload: string) => void;

export class ReliableStream {
  private send: SendFn;
  private onMessage: MessageFn;

  // inbound (device -> app)
  private inActive = false;
  private inExpectedTotal = 0;
  private inStreamId = 0;
  private inParts = new Map<number, string>();

  // outbound (app -> device)
  private outPendingLines: string[] | null = null;
  private outWaitingAck = false;
  private outStreamId = 0;
  private outNextStreamId = 1;
  private outCache = new Map<number, string>();
  private outProgress: OutboundProgressFn | null = null;

  constructor(send: SendFn, onMessage: MessageFn) {
    this.send = send;
    this.onMessage = onMessage;
  }

  reset(): void {
    this.inActive = false;
    this.inExpectedTotal = 0;
    this.inStreamId = 0;
    this.inParts.clear();
    this.outPendingLines = null;
    this.outWaitingAck = false;
    this.outStreamId = 0;
    this.outCache.clear();
    this.outProgress = null;
  }

  /** Feed every received line through here. */
  handleLine(msg: string): void {
    if (msg.startsWith('prep,')) {
      const parts = msg.split(',');
      const total = parts.length >= 2 && /^\d+$/.test(parts[1]) ? parseInt(parts[1], 10) : null;
      const streamId = parts.length >= 3 && /^\d+$/.test(parts[2]) ? parseInt(parts[2], 10) : 0;
      if (total !== null && total > 0) {
        this.inActive = true;
        this.inExpectedTotal = total;
        this.inStreamId = streamId;
        this.inParts.clear();
        this.send(streamId > 0 ? `ack:prep,${streamId}` : 'ack:prep');
      }
      return;
    }

    if (msg === 'ack:prep' || msg === 'ACK:PREP' || msg === `ack:prep,${this.outStreamId}`) {
      void this.flushOutbound();
      return;
    }

    if (msg.startsWith('miss,')) {
      const parts = msg.split(',');
      if (parts.length >= 3 && /^\d+$/.test(parts[1]) && /^\d+$/.test(parts[2])) {
        const streamId = parseInt(parts[1], 10);
        const missingIdx = parseInt(parts[2], 10);
        const cached = this.outCache.get(missingIdx);
        if (streamId === this.outStreamId && cached) {
          this.send(cached);
        }
      }
      return;
    }

    const numbered = this.parseNumbered(msg);
    if (numbered) {
      const { idx, payload } = numbered;

      if (!this.inActive) {
        // Defensive: numbered frame with no active stream -> treat as plain.
        this.onMessage(payload);
        return;
      }

      if (!this.inParts.has(idx)) {
        this.inParts.set(idx, payload);
      }

      // Find the first missing index.
      let missingIdx = 0;
      for (let i = 1; i <= this.inExpectedTotal; i += 1) {
        if (!this.inParts.has(i)) {
          missingIdx = i;
          break;
        }
      }
      // Only ask for a resend on a true out-of-order gap.
      if (missingIdx > 0 && this.inStreamId > 0 && idx > missingIdx) {
        this.send(`miss,${this.inStreamId},${missingIdx}`);
      }

      if (this.inParts.size >= this.inExpectedTotal) {
        for (let i = 1; i <= this.inExpectedTotal; i += 1) {
          const line = this.inParts.get(i);
          if (line !== undefined) this.onMessage(line);
        }
        this.inActive = false;
        this.inExpectedTotal = 0;
        this.inStreamId = 0;
        this.inParts.clear();
      }
      return;
    }

    // Plain line.
    this.onMessage(msg);
  }

  /** Stream multiple lines reliably (used for the layout `update` save). */
  async sendReliable(lines: string[], onProgress?: OutboundProgressFn): Promise<void> {
    const payload = lines.length === 0 ? [''] : lines;
    this.outPendingLines = [...payload];
    this.outWaitingAck = true;
    this.outProgress = onProgress ?? null;
    this.outStreamId = this.outNextStreamId;
    this.outNextStreamId += 1;
    this.outCache.clear();
    await this.send(`prep,${payload.length},${this.outStreamId}`);
  }

  private async flushOutbound(): Promise<void> {
    if (!this.outWaitingAck || this.outPendingLines === null) {
      this.outWaitingAck = false;
      this.outProgress = null;
      return;
    }
    const total = this.outPendingLines.length;
    for (let i = 0; i < total; i += 1) {
      const payload = this.outPendingLines[i];
      const frame = `${i + 1}-${payload}`;
      this.outCache.set(i + 1, frame);
      await this.send(frame);
      this.outProgress?.(i + 1, total, payload);
    }
    this.outPendingLines = null;
    this.outWaitingAck = false;
    this.outProgress = null;
  }

  private parseNumbered(msg: string): { idx: number; payload: string } | null {
    const dash = msg.indexOf('-');
    if (dash <= 0) return null;
    const indexStr = msg.slice(0, dash);
    if (!/^\d+$/.test(indexStr)) return null;
    const idx = parseInt(indexStr, 10);
    if (idx < 1) return null;
    return { idx, payload: msg.slice(dash + 1) };
  }
}
