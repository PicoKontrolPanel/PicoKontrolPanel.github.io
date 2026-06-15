import { useState } from 'react';
import { TopBar } from '../components/TopBar';
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
  const reconnect = useReconnect();
  const [page, setPage] = useState<Page>('mine');

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
                onDelete={() => removeSavedDevice(d.deviceID)}
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
    </div>
  );
}

function DeviceCard({
  device,
  disabled,
  onConnect,
  onDelete,
}: {
  device: SavedDevice;
  disabled: boolean;
  onConnect: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="device-tile-wrap">
      <button className="device-tile" type="button" onClick={onConnect} disabled={disabled}>
        <img className="device-tile-icon" src={deviceIconUrl(device.deviceIconID)} alt="" />
        <span className="device-tile-name">{device.deviceName}</span>
      </button>
      <button className="device-tile-del" type="button" onClick={onDelete} aria-label="Slet enhed">
        <Glyph name="delete" size={36} />
      </button>
    </div>
  );
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
