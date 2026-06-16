import { MicroPythonRepl } from './micropythonRepl';

export interface PicoFileEntry {
  name: string;
  path: string;
  type: 'file' | 'dir' | 'unknown';
  size?: number;
}

const CHUNK_SIZE = 512;

export type FileWriteProgress = (value: number, label: string) => void;

function pyString(value: string): string {
  return JSON.stringify(value);
}

function bytesLiteral(bytes: Uint8Array): string {
  return `bytes.fromhex(${JSON.stringify([...bytes].map((b) => b.toString(16).padStart(2, '0')).join(''))})`;
}

function joinPath(dir: string, name: string): string {
  const cleanDir = dir === '/' ? '' : dir.replace(/\/$/, '');
  return `${cleanDir}/${name}`;
}

export class PicoFilesystem {
  constructor(private repl: MicroPythonRepl) {}

  async list(path = '/'): Promise<PicoFileEntry[]> {
    const code = `
import os
base = ${pyString(path)}
for name in os.listdir(base):
    p = (${pyString(path)}.rstrip('/') + '/' + name) if ${pyString(path)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`;
    const result = await this.repl.exec(code);
    if (result.error) throw new Error(result.error);
    return result.output
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [name, kind, sizeRaw] = line.split('\t');
        const type = kind === 'dir' || kind === 'file' ? kind : 'unknown';
        const size = parseInt(sizeRaw ?? '', 10);
        return {
          name,
          path: joinPath(path, name),
          type,
          ...(Number.isFinite(size) && size >= 0 ? { size } : {}),
        };
      });
  }

  async readText(path: string): Promise<string> {
    const code = `
import sys
with open(${pyString(path)}, 'rb') as f:
    while True:
        b = f.read(${CHUNK_SIZE})
        if not b:
            break
        print(b.hex())
`;
    const result = await this.repl.exec(code, 10000);
    if (result.error) throw new Error(result.error);
    const hex = result.output.replace(/\s+/g, '');
    return new TextDecoder().decode(hexToBytes(hex));
  }

  async writeText(path: string, content: string, onProgress?: FileWriteProgress): Promise<void> {
    const bytes = new TextEncoder().encode(content);
    onProgress?.(5, 'Klargør fil...');
    await this.repl.exec(`open(${pyString(path)}, 'wb').close()`);
    if (bytes.length === 0) {
      onProgress?.(100, 'Gemt på Pico');
      return;
    }
    for (let offset = 0; offset < bytes.length; offset += CHUNK_SIZE) {
      const chunk = bytes.slice(offset, offset + CHUNK_SIZE);
      const code = `
with open(${pyString(path)}, 'ab') as f:
    f.write(${bytesLiteral(chunk)})
`;
      const result = await this.repl.exec(code, 10000);
      if (result.error) throw new Error(result.error);
      const written = Math.min(offset + chunk.length, bytes.length);
      onProgress?.(10 + Math.round((written / bytes.length) * 85), `Gemmer ${written}/${bytes.length} bytes...`);
    }
    onProgress?.(100, 'Gemt på Pico');
  }

  async replaceTextSafely(path: string, content: string, onProgress?: FileWriteProgress): Promise<void> {
    const tmpPath = `${path}.tmp`;
    const backupPath = `${path}.bak`;
    await this.writeText(tmpPath, content, (value, label) => onProgress?.(Math.min(70, value * 0.7), label));
    onProgress?.(78, 'Verificerer fil...');
    const written = await this.readText(tmpPath);
    if (written !== content) {
      await this.delete(tmpPath).catch(() => {});
      throw new Error(`Verificering fejlede for ${path}.`);
    }

    onProgress?.(88, 'Udskifter fil...');
    await this.delete(backupPath).catch(() => {});
    await this.rename(path, backupPath).catch(() => {});
    await this.rename(tmpPath, path);
    onProgress?.(100, 'Installeret på Pico');
  }

  async delete(path: string): Promise<void> {
    const result = await this.repl.exec(`
import os
os.remove(${pyString(path)})
`);
    if (result.error) throw new Error(result.error);
  }

  async rename(from: string, to: string): Promise<void> {
    const result = await this.repl.exec(`
import os
os.rename(${pyString(from)}, ${pyString(to)})
`);
    if (result.error) throw new Error(result.error);
  }
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(Math.floor(hex.length / 2));
  for (let i = 0; i < bytes.length; i += 1) {
    bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return bytes;
}
