// Local-only persistence, mirroring Unity's userdata.json + SavedDevices.json.
// Nothing leaves the browser.
import type { SavedDevice, User } from './types';

const USER_KEY = 'pkp.user';
const DEVICES_KEY = 'pkp.savedDevices';

export const APP_VERSION = 'Prototype Version 0.6.8';

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
