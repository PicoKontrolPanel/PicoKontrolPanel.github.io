import { useEffect, useState } from 'react';

// The app is designed at this fixed portrait "logical" size and then scaled to
// fit the viewport, so the whole UI grows/shrinks proportionally on any display.
// Keep these in sync with the `.app` width/height in styles.css.
export const BASE_W = 430;
export const BASE_H = 880;

// Below this viewport width we assume a real phone and use a full-bleed layout
// (no letterboxing) instead of the scaled desktop frame.
const PHONE_MAX_W = 600;
const MAX_SCALE = 3;

export interface ViewportScale {
  scale: number;
  fullbleed: boolean;
}

function compute(): ViewportScale {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (vw <= PHONE_MAX_W) {
    return { scale: 1, fullbleed: true };
  }
  const scale = Math.min(vw / BASE_W, vh / BASE_H, MAX_SCALE);
  return { scale, fullbleed: false };
}

export function useViewportScale(): ViewportScale {
  const [value, setValue] = useState<ViewportScale>(() =>
    typeof window === 'undefined' ? { scale: 1, fullbleed: false } : compute(),
  );

  useEffect(() => {
    const update = () => setValue(compute());
    update();
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
    };
  }, []);

  return value;
}
