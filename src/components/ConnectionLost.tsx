import { Modal } from './Modal';
import { useStore } from '../store/store';

export function ConnectionLost() {
  const lost = useStore((s) => s.connectionLost);
  const reconnect = useStore((s) => s.reconnectLostDevice);
  const dismiss = useStore((s) => s.dismissConnectionLost);

  if (!lost) return null;

  return (
    <Modal title="Forbindelse afbrudt" onClose={dismiss}>
      <div className="settings-stack">
        <p className="confirm-message">
          Forbindelsen til {lost.deviceName} blev afbrudt. Tjek at Picoen har strøm og er tæt nok på.
        </p>
        <div className="row">
          <button className="btn btn-outline btn-block" type="button" onClick={dismiss}>
            Luk
          </button>
          <button className="btn btn-primary btn-block" type="button" onClick={() => reconnect()}>
            Genforbind
          </button>
        </div>
      </div>
    </Modal>
  );
}
