import { useState } from 'react';
import { TopBar } from '../components/TopBar';
import { Modal } from '../components/Modal';
import { Glyph, deviceIconUrl } from '../assets/icons';
import { APP_VERSION } from '../lib/storage';
import { getPermittedDevices, isBluetoothSupported } from '../ble/transport';
import { useStore } from '../store/store';
import type { SavedDevice } from '../lib/types';

type Page = 'mine' | 'andre';

export function DashboardScreen() {
  const savedDevices = useStore((s) => s.savedDevices);
  const toggleSideMenu = useStore((s) => s.toggleSideMenu);
  const findDevice = useStore((s) => s.findDevice);
  const removeSavedDevice = useStore((s) => s.removeSavedDevice);
  const askConfirm = useStore((s) => s.askConfirm);
  const reconnect = useReconnect();
  const [page, setPage] = useState<Page>('mine');
  const [settingsDevice, setSettingsDevice] = useState<SavedDevice | null>(null);

  const supported = isBluetoothSupported();
  const devices = savedDevices.filter((d) => (page === 'mine' ? d.isOwnedByMe : !d.isOwnedByMe));

  return (
    <div className="screen dashboard-screen">
      <TopBar title="Hovedmenu" onMenu={() => toggleSideMenu()} />

      <div className="content dash-content">
        {!supported && (
          <div className="notice">
            Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På
            Android: brug Chrome.
          </div>
        )}

        <div className="segmented">
          <button
            type="button"
            className={page === 'mine' ? 'active' : ''}
            onClick={() => setPage('mine')}
          >
            Mine Enheder
          </button>
          <button
            type="button"
            className={page === 'andre' ? 'active' : ''}
            onClick={() => setPage('andre')}
          >
            Andre Enheder
          </button>
        </div>

        <div className="panel panel-white device-list">
          {devices.length === 0 ? (
            <div className="device-list-empty">
              {page === 'mine'
                ? 'Ingen enheder endnu. Tryk på + for at finde en enhed.'
                : 'Ingen andre enheder gemt.'}
            </div>
          ) : (
            devices.map((d) => (
              <DeviceCard
                key={d.deviceID}
                device={d}
                disabled={!supported}
                onConnect={() => reconnect(d)}
                onSettings={() => setSettingsDevice(d)}
              />
            ))
          )}
        </div>
      </div>

      <button
        className="fab"
        type="button"
        onClick={() => findDevice()}
        disabled={!supported}
        aria-label="Find enhed"
      >
        <Glyph name="plus" size={30} />
      </button>

      <span className="version">{APP_VERSION}</span>

      {settingsDevice && (
        <Modal title="Enhedsindstillinger" onClose={() => setSettingsDevice(null)}>
          <div className="settings-stack">
            <div className="saved-device-head">
              <img src={deviceIconUrl(settingsDevice.deviceIconID)} alt="" />
              <strong>{settingsDevice.deviceName}</strong>
            </div>
            <InfoRow label="Gemte indstillinger" value="Denne browser" />
            <InfoRow label="Ejer" value={ownerLabel(settingsDevice)} />
            <InfoRow label="Offentlig" value={settingsDevice.canOthersConnect ? 'Ja' : 'Nej'} />
            <InfoRow label="Andre må redigere" value={settingsDevice.canOthersEdit ? 'Ja' : 'Nej'} />
            <div className="notice">Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen.</div>
            <button
              className="btn btn-primary btn-block"
              type="button"
              disabled={!supported}
              onClick={() => {
                const device = settingsDevice;
                setSettingsDevice(null);
                reconnect(device);
              }}
            >
              Forbind
            </button>
            <button
              className="btn btn-outline btn-block"
              type="button"
              onClick={() =>
                askConfirm({
                  title: 'Glem enhed',
                  message: `Vil du fjerne ${settingsDevice.deviceName} fra gemte enheder?`,
                  confirmLabel: 'Glem',
                  onConfirm: () => {
                    removeSavedDevice(settingsDevice.deviceID);
                    setSettingsDevice(null);
                  },
                })
              }
            >
              Glem enhed
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

function DeviceCard({
  device,
  disabled,
  onConnect,
  onSettings,
}: {
  device: SavedDevice;
  disabled: boolean;
  onConnect: () => void;
  onSettings: () => void;
}) {
  return (
    <div className="device-tile-wrap">
      <button className="device-tile" type="button" onClick={onConnect} disabled={disabled}>
        <img className="device-tile-icon" src={deviceIconUrl(device.deviceIconID)} alt="" />
        <span className="device-tile-name">{device.deviceName}</span>
      </button>
      <button className="device-tile-del" type="button" onClick={onSettings} aria-label="Enhedsindstillinger">
        <Glyph name="settings" />
      </button>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="settings-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ownerLabel(device: SavedDevice): string {
  if (device.isOwnedByMe) return 'Dig';
  return device.ownerName?.trim() || 'Anden bruger';
}

/** Reconnect to a saved device using getDevices() (permitted devices) where possible. */
function useReconnect() {
  const connectToDevice = useStore((s) => s.connectToDevice);
  const findDevice = useStore((s) => s.findDevice);
  const log = useStore((s) => s.log);

  return async (saved: SavedDevice) => {
    const permitted = await getPermittedDevices();
    const match = permitted.find((d) => d.id === saved.deviceID);
    if (match) {
      await connectToDevice(match, saved);
    } else {
      log('info', 'Genforbind: vælg enheden i browserens liste.');
      await findDevice();
    }
  };
}
