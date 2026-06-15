import { useStore } from '../store/store';

export function Toast() {
  const toast = useStore((s) => s.toast);
  const dismiss = useStore((s) => s.dismissToast);

  if (!toast) return null;

  return (
    <div className="toast" role="alert" onClick={dismiss}>
      {toast}
    </div>
  );
}
