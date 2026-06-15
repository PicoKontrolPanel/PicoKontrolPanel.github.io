import { deviceIconUrl } from '../assets/icons';
import { useStore } from '../store/store';

export function ConnectionScreen() {
  const connecting = useStore((s) => s.connecting);
  const progress = useStore((s) => s.progress);

  return (
    <div className="screen connection">
      <div className="device-icon-pick">
        <img src={deviceIconUrl(connecting?.iconID ?? 0)} alt="" />
      </div>

      <h2 style={{ margin: 0, color: 'var(--red)' }}>Forbinder til {connecting?.name ?? 'enhed'}</h2>

      <div className="spinner" />

      <div style={{ width: '100%' }}>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress.value}%` }} />
        </div>
        <p style={{ color: 'var(--muted)', fontWeight: 600, marginTop: 12 }}>{progress.label}</p>
      </div>
    </div>
  );
}
