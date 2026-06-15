import { useState } from 'react';
import { Glyph, deviceIconUrl } from '../assets/icons';
import { IconPicker } from '../components/IconPicker';
import { APP_VERSION } from '../lib/storage';
import { useStore } from '../store/store';

export function CreateDeviceScreen() {
  const finishCreate = useStore((s) => s.finishCreate);
  const cancelCreate = useStore((s) => s.cancelCreate);

  const [iconID, setIconID] = useState(0);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function submit() {
    setSubmitting(true);
    await finishCreate(iconID, isPublic, isPublic && canEdit);
  }

  return (
    <div className="screen">
      <header className="topbar">
        <h1>Opret Enhed</h1>
      </header>

      <div className="content create-body">
        <button
          type="button"
          className="device-icon-pick"
          onClick={() => setPickerOpen(true)}
          aria-label="Vælg ikon"
        >
          <img src={deviceIconUrl(iconID)} alt="" />
          <span className="badge">
            <Glyph name="plus" size={22} />
          </span>
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
            <p className="prompt">Må andre redigere denne enhed?</p>
            <div className="segmented">
              <button type="button" className={!canEdit ? 'active' : ''} onClick={() => setCanEdit(false)}>
                Nej
              </button>
              <button type="button" className={canEdit ? 'active' : ''} onClick={() => setCanEdit(true)}>
                Ja
              </button>
            </div>
          </>
        )}

        <div className="row" style={{ marginTop: 'auto', width: '100%' }}>
          <button
            className="btn btn-outline btn-block"
            type="button"
            onClick={() => cancelCreate()}
            disabled={submitting}
          >
            Annuller
          </button>
          <button
            className="btn btn-primary btn-block"
            type="button"
            onClick={submit}
            disabled={submitting}
          >
            {submitting ? 'Opretter...' : 'Opret'}
          </button>
        </div>
      </div>

      {pickerOpen && (
        <IconPicker selected={iconID} onSelect={setIconID} onClose={() => setPickerOpen(false)} />
      )}

      <span className="version">{APP_VERSION}</span>
    </div>
  );
}
