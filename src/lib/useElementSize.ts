import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';

export function useElementSize(ref: RefObject<HTMLElement | null>): { w: number; h: number } {
  const [size, setSize] = useState({ w: 0, h: 0 });
  const observedEl = useRef<HTMLElement | null>(null);
  const observer = useRef<ResizeObserver | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (observedEl.current === el) return;

    observer.current?.disconnect();
    observer.current = null;
    observedEl.current = el;

    if (!el) {
      setSize((prev) => (prev.w === 0 && prev.h === 0 ? prev : { w: 0, h: 0 }));
      return;
    }

    const update = () => {
      const next = { w: el.clientWidth, h: el.clientHeight };
      setSize((prev) => (prev.w === next.w && prev.h === next.h ? prev : next));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    observer.current = ro;
  });

  useEffect(() => {
    return () => {
      observer.current?.disconnect();
      observer.current = null;
      observedEl.current = null;
    };
  }, []);

  return size;
}
