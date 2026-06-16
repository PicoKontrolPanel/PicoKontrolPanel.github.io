import { useEffect, useState } from 'react';
import { Modal } from './Modal';
import { IconPicker } from './IconPicker';
import { deviceIconUrl } from '../assets/icons';
import { APP_VERSION } from '../lib/storage';
import { isBluetoothSupported } from '../ble/transport';
import { GRID_INPUT_MAX, GRID_INPUT_MIN } from '../grid/geometry';
import { useStore } from '../store/store';
import { isPlaced, type Control } from '../lib/types';

export function MenuPages() {
  const page = useStore((s) => s.menuPage);
  const close = useStore((s) => s.closeMenuPage);
  const user = useStore((s) => s.user);
  const active = useStore((s) => s.active);
  const layout = useStore((s) => s.layout);
  const sliderValues = useStore((s) => s.sliderValues);
  const savedDevices = useStore((s) => s.savedDevices);
  const updateUsername = useStore((s) => s.updateUsername);
  const clearSavedDevices = useStore((s) => s.clearSavedDevices);
  const resetApplicationData = useStore((s) => s.resetApplicationData);
  const saveDeviceSettings = useStore((s) => s.saveDeviceSettings);
  const setEditMode = useStore((s) => s.setEditMode);
  const askConfirm = useStore((s) => s.askConfirm);
  const [username, setUsername] = useState(user?.username ?? '');
  const [iconID, setIconID] = useState(active?.iconID ?? 0);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [isPublic, setIsPublic] = useState(active?.canOthersConnect ?? false);
  const [canOthersEdit, setCanOthersEdit] = useState(active?.canOthersEdit ?? false);
  const [cols, setCols] = useState(active?.gridCols ?? 11);
  const [rows, setRows] = useState(active?.gridRows ?? 31);
  const [savingDevice, setSavingDevice] = useState(false);

  useEffect(() => {
    if (page === 'user-settings') {
      setUsername(user?.username ?? '');
    }
  }, [page, user?.username]);

  useEffect(() => {
    if (page === 'device-settings' && active) {
      setIconID(active.iconID);
      setIsPublic(active.canOthersConnect);
      setCanOthersEdit(active.canOthersEdit);
      setCols(active.gridCols);
      setRows(active.gridRows);
    }
  }, [active, page]);

  const clampGrid = (v: number, fallback: number) =>
    Number.isFinite(v)
      ? Math.max(GRID_INPUT_MIN, Math.min(GRID_INPUT_MAX, Math.round(v)))
      : fallback;

  if (!page) return null;

  if (page === 'user-settings') {
    return (
      <Modal title="Brugerindstillinger" onClose={close}>
        <div className="settings-stack">
          <div className="field">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength={24}
              autoComplete="off"
              placeholder="Brugernavn"
            />
          </div>
          <InfoRow label="UUID" value={user?.userID ?? 'Ukendt'} />
          <button className="btn btn-primary btn-block" type="button" onClick={() => updateUsername(username)}>
            Gem bruger
          </button>
          <button
            className="btn btn-outline btn-block btn-danger"
            type="button"
            onClick={() =>
              askConfirm({
                title: 'Start forfra',
                message: 'Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.',
                confirmLabel: 'Slet alt',
                onConfirm: () => {
                  resetApplicationData();
                },
              })
            }
          >
            Slet brugerdata
          </button>
        </div>
      </Modal>
    );
  }

  if (page === 'application-settings') {
    return (
      <Modal title="Applikationsindstillinger" onClose={close}>
        <div className="settings-stack">
          <InfoRow label="Version" value={APP_VERSION} />
          <InfoRow label="Bluetooth" value={isBluetoothSupported() ? 'Tilgængelig' : 'Ikke tilgængelig'} />
          <InfoRow label="Gemte enheder" value={String(savedDevices.length)} />
          <div className="notice">
            Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne
            tilladelsen i browserens site- eller Bluetooth-indstillinger.
          </div>
          <button
            className="btn btn-outline btn-block"
            type="button"
            onClick={() =>
              askConfirm({
                title: 'Ryd gemte enheder',
                message: 'Vil du fjerne alle gemte enheder fra denne browser?',
                confirmLabel: 'Ryd',
                onConfirm: clearSavedDevices,
              })
            }
            disabled={savedDevices.length === 0}
          >
            Ryd gemte enheder
          </button>
        </div>
      </Modal>
    );
  }

  if (page === 'application-help') {
    return (
      <Modal title="Hjælp til applikationen" onClose={close}>
        <div className="settings-stack prose">
          <p>Find en Pico W med plus-knappen, forbind til den, og åbn kontrolpanelet.</p>
          <p>Gemte enheder kan forbindes igen fra dashboardet. Enheder du ikke ejer vises under Andre Enheder.</p>
          <p>Brugerens UUID er fast, så enheder kan genkende ejeren på tværs af app-sessioner.</p>
        </div>
      </Modal>
    );
  }

  if (page === 'device-settings') {
    const sliders = layout.filter((c) => c.type === 'slider');
    const owner = !!active?.isOwnedByMe;
    async function saveConnectedSettings(confirmRisk = false) {
      if (!active || !owner) return;
      const nextCols = clampGrid(cols, active.gridCols);
      const nextRows = clampGrid(rows, active.gridRows);
      const risk = gridShrinkRisk(layout, nextCols, nextRows);
      if (risk && !confirmRisk) {
        askConfirm({
          title: 'Gitter kan påvirke layout',
          message: `Det nuværende layout bruger op til ${risk.requiredCols} kolonner og ${risk.requiredRows} rækker. Det nye gitter er ${nextCols} × ${nextRows}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,
          confirmLabel: 'Gem alligevel',
          onConfirm: () => {
            saveConnectedSettings(true);
          },
        });
        return;
      }
      setSavingDevice(true);
      await saveDeviceSettings(iconID, isPublic, isPublic && canOthersEdit, nextCols, nextRows);
      setCols(nextCols);
      setRows(nextRows);
      setSavingDevice(false);
    }

    return (
      <Modal title="Enhedsindstillinger" onClose={close}>
        <div className="settings-stack">
          <InfoRow label="Navn" value={active?.deviceName ?? 'Ukendt'} />
          <InfoRow label="Ejer" value={ownerLabel(active)} />
          {owner ? (
            <>
              <button className="device-icon-pick settings-icon-pick" type="button" onClick={() => setPickerOpen(true)}>
                <img src={deviceIconUrl(iconID)} alt="" />
              </button>

              <p className="prompt">Må andre forbinde til- og bruge denne enhed?</p>
              <div className="segmented">
                <button type="button" className={!isPublic ? 'active' : ''} onClick={() => setIsPublic(false)}>
                  Privat
                </button>
                <button type="button" className={isPublic ? 'active' : ''} onClick={() => setIsPublic(true)}>
                  Offentlig
                </button>
              </div>

              {isPublic && (
                <>
                  <p className="prompt">Må andre redigere layoutet?</p>
                  <div className="segmented">
                    <button type="button" className={!canOthersEdit ? 'active' : ''} onClick={() => setCanOthersEdit(false)}>
                      Nej
                    </button>
                    <button type="button" className={canOthersEdit ? 'active' : ''} onClick={() => setCanOthersEdit(true)}>
                      Ja
                    </button>
                  </div>
                </>
              )}

              <p className="prompt">Kontrolpanelets gitter</p>
              <div className="row">
                <div className="grid-field">
                  <label htmlFor="device-cols">Kolonner</label>
                  <input
                    id="device-cols"
                    type="number"
                    min={GRID_INPUT_MIN}
                    max={GRID_INPUT_MAX}
                    value={Number.isNaN(cols) ? '' : cols}
                    onChange={(e) => setCols(parseInt(e.target.value, 10))}
                    onBlur={() => setCols(clampGrid(cols, active?.gridCols ?? 11))}
                  />
                </div>
                <div className="grid-field">
                  <label htmlFor="device-rows">Rækker</label>
                  <input
                    id="device-rows"
                    type="number"
                    min={GRID_INPUT_MIN}
                    max={GRID_INPUT_MAX}
                    value={Number.isNaN(rows) ? '' : rows}
                    onChange={(e) => setRows(parseInt(e.target.value, 10))}
                    onBlur={() => setRows(clampGrid(rows, active?.gridRows ?? 31))}
                  />
                </div>
              </div>

              <button className="btn btn-primary btn-block" type="button" onClick={() => saveConnectedSettings()} disabled={savingDevice}>
                {savingDevice ? 'Gemmer...' : 'Gem enhedsindstillinger'}
              </button>
            </>
          ) : (
            <>
              <InfoRow label="Ikon ID" value={String(active?.iconID ?? 0)} />
              <InfoRow label="Redigering" value={active?.canEdit ? 'Tilladt' : 'Ikke tilladt'} />
              <InfoRow label="Gitter" value={`${active?.gridCols ?? 0} × ${active?.gridRows ?? 0}`} />
            </>
          )}
          <InfoRow label="Kontroller" value={String(layout.length)} />
          {sliders.length > 0 && (
            <div className="settings-section">
              <h4>Slidere</h4>
              {sliders.map((slider) => (
                <div className="slider-meta" key={slider.name}>
                  <strong>{slider.name}</strong>
                  <span>
                    {slider.sliderMin ?? 0} til {slider.sliderMax ?? 100}
                  </span>
                  <span>Retur: {recenterLabel(slider.sliderRecenter ?? 'none')}</span>
                  <span>Seneste værdi: {sliderValues[slider.name] ?? 'Ikke brugt'}</span>
                </div>
              ))}
            </div>
          )}
          {pickerOpen && <IconPicker selected={iconID} onSelect={setIconID} onClose={() => setPickerOpen(false)} />}
        </div>
      </Modal>
    );
  }

  return (
    <Modal title="Hjælp til enheden" onClose={close}>
      <div className="settings-stack prose">
        <p>Knapper sender en kommando med deres navn, når de trykkes.</p>
        <p>Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse.</p>
        <p>Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen.</p>
        {active?.canEdit && (
          <button className="btn btn-primary btn-block" type="button" onClick={() => setEditMode(true)}>
            Rediger layout
          </button>
        )}
      </div>
    </Modal>
  );
}

function gridShrinkRisk(controls: Control[], cols: number, rows: number): { requiredCols: number; requiredRows: number } | null {
  let requiredCols = 0;
  let requiredRows = 0;
  for (const control of controls) {
    if (!isPlaced(control)) continue;
    requiredCols = Math.max(requiredCols, Math.ceil((control.centerX2! + control.spanX!) / 2) + 1);
    requiredRows = Math.max(requiredRows, Math.ceil((control.centerY2! + control.spanY!) / 2) + 1);
  }
  if (cols < requiredCols || rows < requiredRows) {
    return { requiredCols, requiredRows };
  }
  return null;
}

function recenterLabel(mode: string): string {
  if (mode === 'bottom') return 'bund';
  if (mode === 'middle') return 'midte';
  if (mode === 'top') return 'top';
  return 'ingen';
}

function ownerLabel(device: { isOwnedByMe: boolean; ownerName?: string } | null): string {
  if (!device) return 'Ukendt';
  if (device.isOwnedByMe) return 'Dig';
  return device.ownerName?.trim() || 'Anden bruger';
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="settings-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
