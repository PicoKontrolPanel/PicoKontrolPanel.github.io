export const BUNDLED_MICROPYTHON = {
  board: 'Raspberry Pi Pico W',
  version: 'MicroPython v1.28.0',
  date: '2026-04-06',
  assetPath: '/firmware/micropython/RPI_PICO_W.uf2',
  fileName: 'RPI_PICO_W.uf2',
};

type FileSystemDirectoryHandleLike = {
  name: string;
  getFileHandle: (name: string, options?: { create?: boolean }) => Promise<FileSystemFileHandleLike>;
};

type FileSystemFileHandleLike = {
  createWritable: () => Promise<FileSystemWritableFileStreamLike>;
};

type FileSystemWritableFileStreamLike = {
  write: (data: Blob) => Promise<void>;
  close: () => Promise<void>;
};

type WindowWithDirectoryPicker = Window &
  typeof globalThis & {
    showDirectoryPicker?: (options?: { id?: string; mode?: 'read' | 'readwrite' }) => Promise<FileSystemDirectoryHandleLike>;
  };

export function supportsBundledMicroPythonInstall(): boolean {
  return typeof (window as WindowWithDirectoryPicker).showDirectoryPicker === 'function';
}

export async function installBundledMicroPythonUf2(): Promise<string> {
  const picker = (window as WindowWithDirectoryPicker).showDirectoryPicker;
  if (!picker) {
    throw new Error('Browseren kan ikke skrive direkte til Pico-drevet. Brug Chrome eller Edge på computer.');
  }

  const response = await fetch(BUNDLED_MICROPYTHON.assetPath, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('MicroPython UF2-filen mangler i appen.');
  }

  const uf2 = await response.blob();
  const directory = await picker({ id: 'pico-bootloader', mode: 'readwrite' });
  const driveName = directory.name.toUpperCase();
  if (!driveName.includes('RPI-RP2') && !driveName.includes('RP2350')) {
    throw new Error('Vælg Pico-drevet der hedder RPI-RP2 eller RP2350.');
  }

  const file = await directory.getFileHandle(BUNDLED_MICROPYTHON.fileName, { create: true });
  const writable = await file.createWritable();
  await writable.write(uf2);
  await writable.close();

  return directory.name;
}
