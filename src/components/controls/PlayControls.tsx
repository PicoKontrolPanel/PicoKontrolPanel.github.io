import type React from 'react';
import { useRef, useState } from 'react';
import type { Control } from '../../lib/types';
import type { ControlRect } from '../../grid/geometry';

interface PlacedProps {
  control: Control;
  rect: ControlRect;
  disabled: boolean;
  onButton: (name: string) => void;
  onSlider: (name: string, value: number) => void;
}

export function PlayControl({ control, rect, disabled, onButton, onSlider }: PlacedProps) {
  const style = {
    left: rect.cx,
    top: rect.cy,
    width: rect.width,
    height: rect.height,
    '--rot': `${control.rotation}deg`,
  } as React.CSSProperties;

  if (control.type === 'button') {
    return (
      <div className="control" style={style}>
        <button
          className="control-button"
          type="button"
          disabled={disabled}
          style={{ width: '100%', height: '100%' }}
          onPointerDown={(e) => {
            if (disabled) return;
            e.preventDefault();
            onButton(control.name);
          }}
        >
          {control.name}
        </button>
      </div>
    );
  }

  return (
    <div className="control" style={style}>
      <SliderControl
        control={control}
        disabled={disabled}
        onSlider={onSlider}
        width={rect.width}
        height={rect.height}
      />
    </div>
  );
}

function SliderControl({
  control,
  disabled,
  onSlider,
  width,
  height,
}: {
  control: Control;
  disabled: boolean;
  onSlider: (name: string, value: number) => void;
  width: number;
  height: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const lastSent = useRef(0);
  const vertical = control.rotation === 90 || control.rotation === 270;

  function fractionFromEvent(e: React.PointerEvent): number {
    const el = trackRef.current;
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    let f: number;
    if (vertical) {
      f = 1 - (e.clientY - r.top) / r.height;
    } else {
      f = (e.clientX - r.left) / r.width;
    }
    if (control.rotation === 180) f = 1 - f;
    return Math.max(0, Math.min(1, f));
  }

  function setFromEvent(e: React.PointerEvent) {
    if (disabled) return;
    const v = Math.round(fractionFromEvent(e) * 100);
    setValue(v);
    if (v !== lastSent.current) {
      lastSent.current = v;
      onSlider(control.name, v);
    }
  }

  return (
    <div
      ref={trackRef}
      className="control-slider"
      style={{ width: '100%', height: '100%', position: 'relative', touchAction: 'none' }}
      onPointerDown={(e) => {
        if (disabled) return;
        e.preventDefault();
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        setFromEvent(e);
      }}
      onPointerMove={(e) => {
        if (e.buttons === 0) return;
        setFromEvent(e);
      }}
    >
      <div
        style={{
          position: 'absolute',
          background: 'var(--red)',
          ...(vertical
            ? { left: 0, right: 0, bottom: 0, height: `${value}%` }
            : { top: 0, bottom: 0, left: 0, width: `${value}%` }),
        }}
      />
      <span
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          fontWeight: 800,
          color: 'var(--red)',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          fontSize: Math.max(11, Math.min(width, height) * 0.22),
        }}
      >
        {control.name}
      </span>
    </div>
  );
}
