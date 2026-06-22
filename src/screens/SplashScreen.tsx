import { useEffect } from 'react';
import { logoUrl } from '../assets/icons';
import { useStore } from '../store/store';

const SPLASH_MS = 1550;
const REDUCED_MOTION_MS = 450;

export function SplashScreen() {
  const target = useStore((s) => s.splashTarget);
  const finishSplash = useStore((s) => s.finishSplash);
  const animationClass = target ? 'splash-screen-animation splash-ready' : 'splash-pending';

  useEffect(() => {
    if (!target) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? REDUCED_MOTION_MS : SPLASH_MS;
    const timer = window.setTimeout(finishSplash, duration);
    return () => window.clearTimeout(timer);
  }, [finishSplash, target]);

  return (
    <div className={`screen splash-screen ${animationClass}`} aria-label="Teknologiskolen starter">
      <div className="splash-white-cover" />
      <div className="splash-red-field" />
      <div className="splash-brand" aria-hidden="true">
        <div className="splash-mark splash-logo-shell">
          <img className="splash-logo" src={logoUrl} alt="" />
        </div>
      </div>
      <span className="sr-only">Teknologiskolen</span>
    </div>
  );
}
