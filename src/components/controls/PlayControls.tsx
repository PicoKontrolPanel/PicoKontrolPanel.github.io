import type React from 'react';
import { useRef, useState } from 'react';
import type { Control, Rotation } from '../../lib/types';
import type { ControlRect } from '../../grid/geometry';

interface PlacedProps {
  control: Control;
  rect: ControlRect;
  disabled: boolean;
  onButton: (name: string) => void;
  onSlider: (name: string, value: number) => void;
}

export function PlayControl({ control, rect, disabled, onButton, onSlider }: PlacedProps) {
  const style: React.CSSProperties = {
    left: rect.cx,
    top: rect.cy,
    width: rect.width,
    height: rect.height,
  };

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

/** Label content: horizontal text, or an upright top-to-bottom character stack. */
function labelContent(name: string, vertical: boolean): React.ReactNode {
  if (!vertical) return name;
  return (
    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.02 }}>
      {[...name].map((ch, i) => (
        <span key={i}>{ch === ' ' ? ' ' : ch}</span>
      ))}
    </span>
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
  const rot: Rotation = control.rotation;
  const vertical = rot === 90 || rot === 270;
  const fontSize = Math.max(11, Math.min(width, height) * 0.24);

  function fractionFromEvent(e: React.PointerEvent): number {
    const el = trackRef.current;
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    let f: number;
    if (rot === 0) f = (e.clientX - r.left) / r.width;
    else if (rot === 180) f = 1 - (e.clientX - r.left) / r.width;
    else if (rot === 90) f = 1 - (e.clientY - r.top) / r.height;
    else f = (e.clientY - r.top) / r.height; // 270
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

  // Fill grows from: left (0), bottom (90), right (180), top (270).
  // The white label inside the fill is anchored to the same edge and sized to
  // the full box, so it overlays the red base label exactly (masked reveal).
  let fillStyle: React.CSSProperties;
  let innerAnchor: React.CSSProperties;
  if (rot === 0) {
    fillStyle = { left: 0, top: 0, bottom: 0, width: `${value}%` };
    innerAnchor = { left: 0, top: 0 };
  } else if (rot === 180) {
    fillStyle = { right: 0, top: 0, bottom: 0, width: `${value}%` };
    innerAnchor = { right: 0, top: 0 };
  } else if (rot === 90) {
    fillStyle = { left: 0, right: 0, bottom: 0, height: `${value}%` };
    innerAnchor = { left: 0, bottom: 0 };
  } else {
    fillStyle = { left: 0, right: 0, top: 0, height: `${value}%` };
    innerAnchor = { left: 0, top: 0 };
  }

  const labelBase: React.CSSProperties = {
    position: 'absolute',
    width: `${width}px`,
    height: `${height}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize,
    pointerEvents: 'none',
  };

  const content = labelContent(control.name, vertical);

  return (
    <div
      ref={trackRef}
      className="control-slider"
      style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', touchAction: 'none' }}
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
      {/* red base label, visible over the white track */}
      <div style={{ ...labelBase, left: 0, top: 0, color: 'var(--red)' }}>{content}</div>

      {/* red fill with a white label clipped to the filled region */}
      <div style={{ position: 'absolute', background: 'var(--red)', overflow: 'hidden', ...fillStyle }}>
        <div style={{ ...labelBase, ...innerAnchor, color: 'var(--white)' }}>{content}</div>
      </div>
    </div>
  );
}
