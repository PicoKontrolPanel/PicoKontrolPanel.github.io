import { Modal } from './Modal';
import { useStore } from '../store/store';

export function ConfirmDialog() {
  const dialog = useStore((s) => s.confirmDialog);
  const close = useStore((s) => s.closeConfirm);

  if (!dialog) return null;

  function confirm() {
    dialog?.onConfirm();
    close();
  }

  return (
    <Modal title={dialog.title} onClose={close}>
      <div className="settings-stack">
        <p className="confirm-message">{dialog.message}</p>
        <div className="row">
          <button className="btn btn-outline btn-block" type="button" onClick={close}>
            {dialog.cancelLabel ?? 'Annuller'}
          </button>
          <button className="btn btn-primary btn-block" type="button" onClick={confirm}>
            {dialog.confirmLabel ?? 'Fortsæt'}
          </button>
        </div>
      </div>
    </Modal>
  );
}
