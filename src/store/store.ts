import { create } from 'zustand';
import type { Control, SavedDevice, User } from '../lib/types';
import { generateUserID } from '../lib/id';
import {
  clearAppData,
  clearSavedDevices as clearSavedDevicesStorage,
  loadSavedDevices,
  loadUser,
  removeDevice,
  saveDevices,
  saveUser,
  upsertDevice,
} from '../lib/storage';
import { PicoProtocol, parseGridHeader, parseLayout, type BleFileEntry, type LogLevel } from '../ble/protocol';
import { displayName, getPermittedDevices, requestDevice } from '../ble/transport';
import { DEFAULT_GRID_COLS, DEFAULT_GRID_ROWS } from '../grid/geometry';

export type Screen =
  | 'splash'
  | 'intro'
  | 'dashboard'
  | 'connection'
  | 'create'
  | 'control'
  | 'ide';

export type MenuPage =
  | 'user-settings'
  | 'application-settings'
  | 'application-help'
  | 'device-settings'
  | 'device-help';

export type DashboardPage = 'mine' | 'andre';
export type PicoIdeOrigin = 'dashboard' | 'control';

export interface LogEntry {
  level: LogLevel;
  message: string;
  time: string;
}

export interface ConnectingInfo {
  name: string;
  iconID: number;
}

interface ConfirmDialog {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
}

interface ActiveDevice {
  deviceID: string;
  deviceName: string;
  iconID: number;
  canEdit: boolean;
  canOthersConnect: boolean;
  canOthersEdit: boolean;
  isOwnedByMe: boolean;
  ownerName?: string;
  gridCols: number;
  gridRows: number;
}

interface AppState {
  screen: Screen;
  splashTarget: Extract<Screen, 'intro' | 'dashboard'> | null;
  user: User | null;
  savedDevices: SavedDevice[];

  connecting: ConnectingInfo | null;
  progress: { value: number; label: string };
  toast: { message: string; id: number } | null;
  confirmDialog: ConfirmDialog | null;
  connectionLost: SavedDevice | null;

  active: ActiveDevice | null;
  layout: Control[];
  sliderValues: Record<string, number>;

  logs: LogEntry[];
  sideMenuOpen: boolean;
  debuggerOpen: boolean;
  menuPage: MenuPage | null;
  editMode: boolean;
  dashboardPage: DashboardPage;
  picoIdeOrigin: PicoIdeOrigin;

  // actions
  init: () => void;
  finishSplash: () => void;
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
  saveDeviceSettings: (
    iconID: number,
    canConnect: boolean,
    canEdit: boolean,
    cols: number,
    rows: number,
  ) => Promise<void>;
  cancelCreate: () => Promise<void>;
  disconnect: () => Promise<void>;
  removeSavedDevice: (deviceID: string) => void;
  clearSavedDevices: () => void;
  resetApplicationData: () => Promise<void>;
  updateUsername: (username: string) => void;
  openPicoIde: () => void;
  closePicoIde: () => void;
  isBleConnected: () => boolean;
  bleListFiles: () => Promise<BleFileEntry[]>;
  bleReadText: (path: string, onProgress?: (value: number, label: string) => void) => Promise<string>;
  bleWriteText: (path: string, content: string, onProgress?: (value: number, label: string) => void) => Promise<void>;
  bleDeleteFile: (path: string) => Promise<void>;
  bleRestart: () => Promise<void>;
  bleRestartAndReconnect: (target?: 'control' | 'ide') => Promise<boolean>;
  reconnectLostDevice: () => Promise<void>;
  dismissConnectionLost: () => void;

  sendButton: (name: string) => void;
  sendSlider: (name: string, value: number) => void;
  saveLayout: (controls: Control[]) => Promise<void>;

  setEditMode: (on: boolean) => void;
  setDashboardPage: (page: DashboardPage) => void;
  toggleSideMenu: (open?: boolean) => void;
  toggleDebugger: (open?: boolean) => void;
  openMenuPage: (page: MenuPage) => void;
  closeMenuPage: () => void;
  clearLogs: () => void;
  log: (level: LogLevel, message: string) => void;
  askConfirm: (dialog: ConfirmDialog) => void;
  closeConfirm: () => void;
  showToast: (message: string) => void;
  dismissToast: () => void;
}

let protocol: PicoProtocol | null = null;
let toastTimer: ReturnType<typeof setTimeout> | null = null;
let toastCounter = 0;
let suppressNextDisconnect = false;

function timestamp(): string {
  return new Date().toLocaleTimeString('da-DK', { hour12: false });
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const useStore = create<AppState>((set, get) => {
  function pushLog(level: LogLevel, message: string): void {
    set((s) => ({
      logs: [{ level, message, time: timestamp() }, ...s.logs].slice(0, 200),
    }));
  }

  function pushToast(message: string): void {
    if (toastTimer) clearTimeout(toastTimer);
    toastCounter += 1;
    // New id every time so the Toast remounts and replays its animation even
    // if the same message is already on screen.
    set({ toast: { message, id: toastCounter } });
    toastTimer = setTimeout(() => set({ toast: null }), 4500);
  }

  protocol = new PicoProtocol({
    onProgress: (value, label) => set({ progress: { value, label } }),
    onLog: (level, message) => pushLog(level, message),
    onDisconnect: () => {
      const { screen, active, picoIdeOrigin } = get();
      if (suppressNextDisconnect) {
        suppressNextDisconnect = false;
        return;
      }
      if (screen === 'control' || screen === 'connection' || screen === 'create' || (screen === 'ide' && picoIdeOrigin === 'control')) {
        const lostDevice: SavedDevice | null =
          active
            ? {
                deviceID: active.deviceID,
                deviceName: active.deviceName,
                deviceIconID: active.iconID,
                canOthersConnect: active.canOthersConnect,
                canOthersEdit: active.canOthersEdit,
                isOwnedByMe: active.isOwnedByMe,
                ownerName: active.ownerName,
            }
            : null;
        set({
          screen: 'dashboard',
          active: null,
          layout: [],
          sliderValues: {},
          editMode: false,
          sideMenuOpen: false,
          menuPage: null,
          connectionLost: lostDevice,
        });
      }
    },
  });

  return {
    screen: 'splash',
    splashTarget: null,
    user: null,
    savedDevices: [],
    connecting: null,
    progress: { value: 0, label: '' },
    toast: null,
    confirmDialog: null,
    connectionLost: null,
    active: null,
    layout: [],
    sliderValues: {},
    logs: [],
    sideMenuOpen: false,
    debuggerOpen: false,
    menuPage: null,
    editMode: false,
    dashboardPage: 'mine',
    picoIdeOrigin: 'dashboard',

    init: () => {
      const user = loadUser();
      const savedDevices = loadSavedDevices();
      set({
        user,
        savedDevices,
        splashTarget: user ? 'dashboard' : 'intro',
      });
    },

    finishSplash: () => {
      const target = get().splashTarget;
      set({ screen: target ?? 'intro' });
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
      suppressNextDisconnect = false;

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
              canOthersConnect: false,
              canOthersEdit: false,
              isOwnedByMe: true,
              ownerName: user.username,
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
          canOthersConnect: result.canOthersConnect,
          canOthersEdit: result.canOthersEdit,
          isOwnedByMe: result.isOwnedByMe,
          ownerName: result.isOwnedByMe ? user.username : result.ownerName ?? known?.ownerName,
        };
        set({ savedDevices: upsertDevice(saved) });

        const lines = await protocol.requestLayout();
        const grid = parseGridHeader(lines);
        set({
          layout: parseLayout(lines),
          sliderValues: {},
          active: {
            deviceID,
            deviceName,
            iconID: result.iconID,
            canEdit: result.canEdit,
            canOthersConnect: result.canOthersConnect,
            canOthersEdit: result.canOthersEdit,
            isOwnedByMe: result.isOwnedByMe,
            ownerName: result.isOwnedByMe ? user.username : result.ownerName ?? known?.ownerName,
            gridCols: grid.cols,
            gridRows: grid.rows,
          },
          screen: 'control',
          connecting: null,
          connectionLost: null,
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
          ownerName: user.username,
        };
        set({ savedDevices: upsertDevice(saved) });

        const lines = await protocol.requestLayout();
        const grid = parseGridHeader(lines);
        set({
          layout: parseLayout(lines),
          sliderValues: {},
          active: {
            ...active,
            iconID,
            canEdit: true,
            canOthersConnect: canConnect,
            canOthersEdit: canConnect && canEdit,
            ownerName: user.username,
            gridCols: grid.cols,
            gridRows: grid.rows,
          },
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

    saveDeviceSettings: async (iconID, canConnect, canEdit, cols, rows) => {
      const { active, user } = get();
      if (!active || !protocol || !active.isOwnedByMe) return;
      try {
        protocol.setBusy(true);
        await protocol.updateDeviceSettings(iconID, canConnect, canEdit, cols, rows, user?.username);
        const nextActive = {
          ...active,
          iconID,
          canEdit: true,
          canOthersConnect: canConnect,
          canOthersEdit: canConnect && canEdit,
          ownerName: user?.username ?? active.ownerName,
          gridCols: cols,
          gridRows: rows,
        };
        const saved: SavedDevice = {
          deviceID: active.deviceID,
          deviceName: active.deviceName,
          deviceIconID: iconID,
          canOthersConnect: canConnect,
          canOthersEdit: canConnect && canEdit,
          isOwnedByMe: true,
          ownerName: user?.username ?? active.ownerName,
        };
        set({ active: nextActive, savedDevices: upsertDevice(saved) });
        pushToast('Enhedsindstillinger gemt.');
      } catch (err) {
        pushLog('error', err instanceof Error ? err.message : 'Kunne ikke gemme enhedsindstillinger.');
        pushToast('Kunne ikke gemme enhedsindstillinger.');
      } finally {
        protocol.setBusy(false);
      }
    },

    cancelCreate: async () => {
      if (protocol) await protocol.disconnect().catch(() => {});
      set({ screen: 'dashboard', active: null, connecting: null });
    },

    disconnect: async () => {
      suppressNextDisconnect = true;
      if (protocol) await protocol.disconnect().catch(() => {});
      suppressNextDisconnect = false;
      set({
        screen: 'dashboard',
        active: null,
        layout: [],
        sliderValues: {},
        editMode: false,
        sideMenuOpen: false,
        menuPage: null,
        connectionLost: null,
      });
    },

    removeSavedDevice: (deviceID) => {
      set({ savedDevices: removeDevice(deviceID) });
    },

    clearSavedDevices: () => {
      clearSavedDevicesStorage();
      set({ savedDevices: [] });
      pushToast('Gemte enheder ryddet.');
    },

    resetApplicationData: async () => {
      suppressNextDisconnect = true;
      if (protocol?.connected) {
        await protocol.disconnect().catch(() => {});
      }
      clearAppData();
      window.location.reload();
    },

    updateUsername: (username) => {
      const user = get().user;
      const trimmed = username.trim();
      if (!user || !trimmed) return;
      const next = { ...user, username: trimmed };
      saveUser(next);
      set((s) => {
        const savedDevices = s.savedDevices.map((device) =>
          device.isOwnedByMe ? { ...device, ownerName: trimmed } : device,
        );
        saveDevices(savedDevices);
        return {
          user: next,
          active: s.active?.isOwnedByMe ? { ...s.active, ownerName: trimmed } : s.active,
          savedDevices,
        };
      });
      pushToast('Brugernavn gemt.');
    },

    openPicoIde: () => {
      const fromControl = get().screen === 'control' && !!protocol?.connected;
      set((s) => ({
        screen: 'ide',
        picoIdeOrigin: fromControl ? 'control' : 'dashboard',
        active: fromControl ? s.active : null,
        layout: fromControl ? s.layout : [],
        sliderValues: fromControl ? s.sliderValues : {},
        editMode: false,
        sideMenuOpen: false,
        menuPage: null,
      }));
    },
    closePicoIde: () => {
      const { picoIdeOrigin, active } = get();
      set({
        screen: picoIdeOrigin === 'control' && active && protocol?.connected ? 'control' : 'dashboard',
        sideMenuOpen: false,
        menuPage: null,
        picoIdeOrigin: 'dashboard',
      });
    },
    isBleConnected: () => !!protocol?.connected,
    bleListFiles: async () => {
      if (!protocol?.connected) return [];
      return protocol.listFiles('/');
    },
    bleReadText: async (path, onProgress) => {
      if (!protocol?.connected) throw new Error('Ingen BLE-forbindelse.');
      return protocol.readText(path, onProgress);
    },
    bleWriteText: async (path, content, onProgress) => {
      if (!protocol?.connected) throw new Error('Ingen BLE-forbindelse.');
      await protocol.writeText(path, content, onProgress);
    },
    bleDeleteFile: async (path) => {
      if (!protocol?.connected) throw new Error('Ingen BLE-forbindelse.');
      await protocol.deleteFile(path);
    },
    bleRestart: async () => {
      if (!protocol?.connected) return;
      await protocol.restart();
    },
    bleRestartAndReconnect: async (target = 'control') => {
      const { active } = get();
      if (!protocol?.connected || !active) return false;
      const saved: SavedDevice = {
        deviceID: active.deviceID,
        deviceName: active.deviceName,
        deviceIconID: active.iconID,
        canOthersConnect: active.canOthersConnect,
        canOthersEdit: active.canOthersEdit,
        isOwnedByMe: active.isOwnedByMe,
        ownerName: active.ownerName,
      };

      suppressNextDisconnect = true;
      pushLog('info', 'Genstarter Pico og forsøger automatisk genforbindelse...');
      try {
        await protocol.restart();
      } catch {
        /* restart often drops the link before the browser sees the ACK */
      }

      set({
        progress: { value: 15, label: 'Venter på Pico genstart...' },
        connecting: { name: saved.deviceName, iconID: saved.deviceIconID },
      });

      for (let wait = 0; wait < 12 && protocol?.connected; wait += 1) {
        await delay(250);
      }
      if (!protocol?.connected) {
        suppressNextDisconnect = false;
      }

      for (let attempt = 1; attempt <= 8; attempt += 1) {
        await delay(attempt === 1 ? 1200 : 850);
        try {
          const permitted = await getPermittedDevices();
          const match = permitted.find((device) => device.id === saved.deviceID);
          if (!match) {
            set({ progress: { value: Math.min(88, 20 + attempt * 8), label: 'Venter på browser-tilladelse...' } });
            continue;
          }

          set({ progress: { value: Math.min(92, 24 + attempt * 8), label: `Genforbinder (${attempt}/8)...` } });
          await get().connectToDevice(match, saved);
          if (target === 'ide') {
            get().openPicoIde();
          }
          pushToast('Pico genforbundet.');
          return true;
        } catch (err) {
          pushLog('warning', err instanceof Error ? err.message : 'Genforbindelse mislykkedes.');
        }
      }

      pushToast('Kunne ikke genforbinde automatisk. Vælg Picoen igen.');
      suppressNextDisconnect = false;
      set({
        screen: 'dashboard',
        active: null,
        layout: [],
        sliderValues: {},
        editMode: false,
        sideMenuOpen: false,
        menuPage: null,
        connecting: null,
        connectionLost: saved,
      });
      return false;
    },

    reconnectLostDevice: async () => {
      const saved = get().connectionLost;
      if (!saved) return;
      set({ connectionLost: null });
      try {
        if (navigator.bluetooth?.getDevices) {
          const permitted = await navigator.bluetooth.getDevices();
          const match = permitted.find((d) => d.id === saved.deviceID);
          if (match) {
            await get().connectToDevice(match, saved);
            return;
          }
        }
      } catch {
        /* fall through to chooser */
      }
      pushLog('info', 'Genforbind: vælg enheden i browserens liste.');
      await get().findDevice();
    },

    dismissConnectionLost: () => set({ connectionLost: null }),

    sendButton: (name) => protocol?.enqueueButton(name),
    sendSlider: (name, value) => {
      set((s) => ({ sliderValues: { ...s.sliderValues, [name]: value } }));
      protocol?.enqueueSlider(name, value);
    },

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

    setEditMode: (on) => set({ editMode: on, sideMenuOpen: false, menuPage: null }),
    setDashboardPage: (page) => set({ dashboardPage: page }),
    toggleSideMenu: (open) => set((s) => ({ sideMenuOpen: open ?? !s.sideMenuOpen })),
    toggleDebugger: (open) => set((s) => ({ debuggerOpen: open ?? !s.debuggerOpen, sideMenuOpen: false, menuPage: null })),
    openMenuPage: (page) => set({ menuPage: page, sideMenuOpen: false }),
    closeMenuPage: () => set({ menuPage: null }),
    clearLogs: () => set({ logs: [] }),
    log: (level, message) => pushLog(level, message),
    askConfirm: (dialog) => set({ confirmDialog: dialog }),
    closeConfirm: () => set({ confirmDialog: null }),
    showToast: (message) => pushToast(message),
    dismissToast: () => {
      if (toastTimer) clearTimeout(toastTimer);
      set({ toast: null });
    },
  };
});
