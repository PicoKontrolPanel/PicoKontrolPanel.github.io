import { create } from 'zustand';
import type { Control, SavedDevice, User } from '../lib/types';
import { generateUserID } from '../lib/id';
import {
  loadSavedDevices,
  loadUser,
  removeDevice,
  saveUser,
  upsertDevice,
} from '../lib/storage';
import { PicoProtocol, parseGridHeader, parseLayout, type LogLevel } from '../ble/protocol';
import { displayName, requestDevice } from '../ble/transport';
import { DEFAULT_GRID_COLS, DEFAULT_GRID_ROWS } from '../grid/geometry';

export type Screen =
  | 'splash'
  | 'intro'
  | 'dashboard'
  | 'connection'
  | 'create'
  | 'control';

export interface LogEntry {
  level: LogLevel;
  message: string;
  time: string;
}

export interface ConnectingInfo {
  name: string;
  iconID: number;
}

interface ActiveDevice {
  deviceID: string;
  deviceName: string;
  iconID: number;
  canEdit: boolean;
  isOwnedByMe: boolean;
  gridCols: number;
  gridRows: number;
}

interface AppState {
  screen: Screen;
  user: User | null;
  savedDevices: SavedDevice[];

  connecting: ConnectingInfo | null;
  progress: { value: number; label: string };
  toast: string | null;

  active: ActiveDevice | null;
  layout: Control[];

  logs: LogEntry[];
  sideMenuOpen: boolean;
  debuggerOpen: boolean;
  editMode: boolean;

  // actions
  init: () => void;
  createUser: (username: string) => void;
  findDevice: () => Promise<void>;
  connectToDevice: (device: BluetoothDevice, known?: SavedDevice) => Promise<void>;
  finishCreate: (
    iconID: number,
    canConnect: boolean,
    canEdit: boolean,
    cols: number,
    rows: number,
  ) => Promise<void>;
  cancelCreate: () => Promise<void>;
  disconnect: () => Promise<void>;
  removeSavedDevice: (deviceID: string) => void;

  sendButton: (name: string) => void;
  sendSlider: (name: string, value: number) => void;
  saveLayout: (controls: Control[]) => Promise<void>;

  setEditMode: (on: boolean) => void;
  toggleSideMenu: (open?: boolean) => void;
  toggleDebugger: (open?: boolean) => void;
  clearLogs: () => void;
  log: (level: LogLevel, message: string) => void;
  showToast: (message: string) => void;
  dismissToast: () => void;
}

let protocol: PicoProtocol | null = null;
let toastTimer: ReturnType<typeof setTimeout> | null = null;

function timestamp(): string {
  return new Date().toLocaleTimeString('da-DK', { hour12: false });
}

export const useStore = create<AppState>((set, get) => {
  function pushLog(level: LogLevel, message: string): void {
    set((s) => ({
      logs: [{ level, message, time: timestamp() }, ...s.logs].slice(0, 200),
    }));
  }

  function pushToast(message: string): void {
    if (toastTimer) clearTimeout(toastTimer);
    set({ toast: message });
    toastTimer = setTimeout(() => set({ toast: null }), 4500);
  }

  protocol = new PicoProtocol({
    onProgress: (value, label) => set({ progress: { value, label } }),
    onLog: (level, message) => pushLog(level, message),
    onDisconnect: () => {
      const { screen } = get();
      if (screen === 'control' || screen === 'connection' || screen === 'create') {
        set({
          screen: 'dashboard',
          active: null,
          layout: [],
          editMode: false,
          sideMenuOpen: false,
        });
      }
    },
  });

  return {
    screen: 'splash',
    user: null,
    savedDevices: [],
    connecting: null,
    progress: { value: 0, label: '' },
    toast: null,
    active: null,
    layout: [],
    logs: [],
    sideMenuOpen: false,
    debuggerOpen: false,
    editMode: false,

    init: () => {
      const user = loadUser();
      const savedDevices = loadSavedDevices();
      set({
        user,
        savedDevices,
        screen: user ? 'dashboard' : 'intro',
      });
    },

    createUser: (username) => {
      const trimmed = username.trim();
      if (!trimmed) return;
      const user: User = { username: trimmed, userID: generateUserID() };
      saveUser(user);
      set({ user, screen: 'dashboard' });
    },

    findDevice: async () => {
      try {
        const device = await requestDevice();
        await get().connectToDevice(device);
      } catch (err) {
        // user-cancelled chooser is not an error worth surfacing loudly
        if (err instanceof Error && err.name !== 'NotFoundError') {
          pushLog('error', err.message);
        }
      }
    },

    connectToDevice: async (device, known) => {
      const user = get().user;
      if (!user || !protocol) return;

      set({
        screen: 'connection',
        connecting: { name: displayName(device.name) || known?.deviceName || 'Pico', iconID: known?.deviceIconID ?? 0 },
        progress: { value: 0, label: 'Forbinder...' },
      });

      try {
        await protocol.connect(device);
        const result = await protocol.runHandshake(user);
        const deviceID = device.id;
        const deviceName = displayName(device.name) || known?.deviceName || 'Pico';

        if (result.kind === 'denied') {
          pushLog('warning', 'Adgang nægtet (privat enhed).');
          pushToast('Adgang nægtet — denne enhed er privat.');
          set({ screen: 'dashboard', connecting: null });
          await protocol.disconnect();
          return;
        }

        if (result.kind === 'unowned') {
          set({
            active: {
              deviceID,
              deviceName,
              iconID: 0,
              canEdit: true,
              isOwnedByMe: true,
              gridCols: DEFAULT_GRID_COLS,
              gridRows: DEFAULT_GRID_ROWS,
            },
            screen: 'create',
          });
          return;
        }

        // owned + allowed
        const saved: SavedDevice = {
          deviceID,
          deviceName,
          deviceIconID: result.iconID,
          canOthersConnect: true,
          canOthersEdit: result.canEdit && !result.isOwnedByMe,
          isOwnedByMe: result.isOwnedByMe,
        };
        set({ savedDevices: upsertDevice(saved) });

        const lines = await protocol.requestLayout();
        const grid = parseGridHeader(lines);
        set({
          layout: parseLayout(lines),
          active: {
            deviceID,
            deviceName,
            iconID: result.iconID,
            canEdit: result.canEdit,
            isOwnedByMe: result.isOwnedByMe,
            gridCols: grid.cols,
            gridRows: grid.rows,
          },
          screen: 'control',
          connecting: null,
        });
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Forbindelsen mislykkedes.';
        pushLog('error', message);
        pushToast('Forbindelsen mislykkedes.');
        set({ screen: 'dashboard', connecting: null });
        await protocol.disconnect().catch(() => {});
      }
    },

    finishCreate: async (iconID, canConnect, canEdit, cols, rows) => {
      const { user, active } = get();
      if (!user || !active || !protocol) return;
      try {
        protocol.setBusy(true);
        await protocol.create(user, iconID, canConnect, canEdit, cols, rows);
        protocol.setBusy(false);

        const saved: SavedDevice = {
          deviceID: active.deviceID,
          deviceName: active.deviceName,
          deviceIconID: iconID,
          canOthersConnect: canConnect,
          canOthersEdit: canConnect && canEdit,
          isOwnedByMe: true,
        };
        set({ savedDevices: upsertDevice(saved) });

        const lines = await protocol.requestLayout();
        const grid = parseGridHeader(lines);
        set({
          layout: parseLayout(lines),
          active: { ...active, iconID, canEdit: true, gridCols: grid.cols, gridRows: grid.rows },
          screen: 'control',
        });
      } catch (err) {
        protocol.setBusy(false);
        const message = err instanceof Error ? err.message : 'Oprettelse mislykkedes.';
        pushLog('error', message);
        pushToast('Oprettelse mislykkedes.');
        set({ screen: 'dashboard' });
        await protocol.disconnect().catch(() => {});
      }
    },

    cancelCreate: async () => {
      if (protocol) await protocol.disconnect().catch(() => {});
      set({ screen: 'dashboard', active: null, connecting: null });
    },

    disconnect: async () => {
      if (protocol) await protocol.disconnect().catch(() => {});
      set({ screen: 'dashboard', active: null, layout: [], editMode: false, sideMenuOpen: false });
    },

    removeSavedDevice: (deviceID) => {
      set({ savedDevices: removeDevice(deviceID) });
    },

    sendButton: (name) => protocol?.enqueueButton(name),
    sendSlider: (name, value) => protocol?.enqueueSlider(name, value),

    saveLayout: async (controls) => {
      if (!protocol) return;
      try {
        protocol.setBusy(true);
        await protocol.saveLayout(controls);
        set({ layout: controls, editMode: false });
      } catch (err) {
        pushLog('error', err instanceof Error ? err.message : 'Kunne ikke gemme layout.');
      } finally {
        protocol.setBusy(false);
      }
    },

    setEditMode: (on) => set({ editMode: on, sideMenuOpen: false }),
    toggleSideMenu: (open) => set((s) => ({ sideMenuOpen: open ?? !s.sideMenuOpen })),
    toggleDebugger: (open) => set((s) => ({ debuggerOpen: open ?? !s.debuggerOpen, sideMenuOpen: false })),
    clearLogs: () => set({ logs: [] }),
    log: (level, message) => pushLog(level, message),
    showToast: (message) => pushToast(message),
    dismissToast: () => {
      if (toastTimer) clearTimeout(toastTimer);
      set({ toast: null });
    },
  };
});
