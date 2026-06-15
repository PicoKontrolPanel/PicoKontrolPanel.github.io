import { splashUrl } from '../assets/icons';

export function SplashScreen() {
  return (
    <div className="screen" style={{ background: 'var(--red)', display: 'grid', placeItems: 'center' }}>
      <img
        src={splashUrl}
        alt="Pico Kontrol Panel"
        style={{ width: '70%', maxWidth: 280, objectFit: 'contain' }}
      />
    </div>
  );
}
