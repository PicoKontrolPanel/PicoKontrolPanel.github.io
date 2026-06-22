import { useEffect } from 'react';
import { logoUrl } from '../assets/icons';
import { useStore } from '../store/store';

const LONG_SPLASH_MS = 6500;
const SHORT_SPLASH_MS = 1550;
const REDUCED_MOTION_MS = 450;

export function SplashScreen() {
  const target = useStore((s) => s.splashTarget);
  const finishSplash = useStore((s) => s.finishSplash);
  const isFirstRun = target === 'intro';
  const variant = target ? (isFirstRun ? 'long' : 'short') : 'pending';

  useEffect(() => {
    if (!target) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? REDUCED_MOTION_MS : isFirstRun ? LONG_SPLASH_MS : SHORT_SPLASH_MS;
    const timer = window.setTimeout(finishSplash, duration);
    return () => window.clearTimeout(timer);
  }, [finishSplash, isFirstRun, target]);

  return (
    <div className={`screen splash-screen splash-${variant}`} aria-label="Teknologiskolen starter">
      <div className="splash-red-field" />
      <div className="splash-brand" aria-hidden="true">
        {target && isFirstRun && <div className="splash-mark splash-name">Teknologiskolen</div>}
        <div className="splash-mark splash-logo-shell">
          <img className="splash-logo" src={logoUrl} alt="" />
        </div>
      </div>
      <span className="sr-only">Teknologiskolen</span>
    </div>
  );
}
