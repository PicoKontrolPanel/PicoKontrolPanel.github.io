// Local-only persistence for user and saved-device records.
// Nothing leaves the browser.
import type { SavedDevice, User } from './types';

const USER_KEY = 'pkp.user';
const DEVICES_KEY = 'pkp.savedDevices';
const IDE_DRAFTS_KEY = 'pkp.ideDrafts';
const IDE_SETTINGS_KEY = 'pkp.ideSettings';

export const APP_VERSION = 'Prototype Version 0.6.7';

function readJSON<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function writeJSON(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable — local-only app simply forgets */
  }
}

export function loadUser(): User | null {
  const user = readJSON<User>(USER_KEY);
  if (user && typeof user.username === 'string' && typeof user.userID === 'string') {
    return user;
  }
  return null;
}

export function saveUser(user: User): void {
  writeJSON(USER_KEY, user);
}

export function loadSavedDevices(): SavedDevice[] {
  return readJSON<SavedDevice[]>(DEVICES_KEY) ?? [];
}

export function saveDevices(devices: SavedDevice[]): void {
  writeJSON(DEVICES_KEY, devices);
}

export function clearSavedDevices(): void {
  saveDevices([]);
}

export function clearAppData(): void {
  try {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(DEVICES_KEY);
    localStorage.removeItem(IDE_DRAFTS_KEY);
    localStorage.removeItem(IDE_SETTINGS_KEY);
  } catch {
    /* storage unavailable - reset simply falls back to current memory */
  }
}

export interface IdeDraft {
  path: string;
  content: string;
  uploaded: boolean;
  updatedAt: number;
}

export function loadIdeDrafts(): IdeDraft[] {
  return readJSON<IdeDraft[]>(IDE_DRAFTS_KEY)?.filter((draft) => draft.path && typeof draft.content === 'string') ?? [];
}

export function saveIdeDrafts(drafts: IdeDraft[]): void {
  writeJSON(IDE_DRAFTS_KEY, drafts);
}

export interface IdeSettings {
  clearTerminalOnRun: boolean;
  simplifiedErrors: boolean;
}

export function loadIdeSettings(): IdeSettings {
  const settings = readJSON<Partial<IdeSettings>>(IDE_SETTINGS_KEY) ?? {};
  return {
    clearTerminalOnRun: !!settings.clearTerminalOnRun,
    simplifiedErrors: settings.simplifiedErrors !== false,
  };
}

export function saveIdeSettings(settings: IdeSettings): void {
  writeJSON(IDE_SETTINGS_KEY, settings);
}

/** Insert or update a saved device by deviceID. */
export function upsertDevice(device: SavedDevice): SavedDevice[] {
  const devices = loadSavedDevices();
  const idx = devices.findIndex((d) => d.deviceID === device.deviceID);
  if (idx >= 0) {
    devices[idx] = device;
  } else {
    devices.push(device);
  }
  saveDevices(devices);
  return devices;
}

export function removeDevice(deviceID: string): SavedDevice[] {
  const devices = loadSavedDevices().filter((d) => d.deviceID !== deviceID);
  saveDevices(devices);
  return devices;
}
