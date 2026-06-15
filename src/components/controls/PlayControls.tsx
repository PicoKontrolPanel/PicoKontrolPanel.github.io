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

const TEXT_PAD = 8;

function clampTextSize(value: number): number {
  return Math.max(5, Math.min(22, value));
}

export function controlLabelFontSize(name: string, width: number, height: number): number {
  const chars = Math.max(1, name.length);
  const byWidth = (width - TEXT_PAD * 2) / (chars * 0.58);
  const byHeight = (height - TEXT_PAD * 2) * 0.48;
  return clampTextSize(Math.min(byWidth, byHeight));
}

function sliderTextMetrics(
  name: string,
  width: number,
  height: number,
  vertical: boolean,
  showEnds: boolean,
): { fontSize: number; endFontSize: number; centerInset: React.CSSProperties } {
  const chars = Math.max(1, name.length);
  const endFontSize = showEnds
    ? clampTextSize(Math.min(width / 4.6, height / 4.6, 12))
    : 0;
  const endReserve = showEnds ? endFontSize + TEXT_PAD : TEXT_PAD;

  if (vertical) {
    const availableH = Math.max(1, height - endReserve * 2);
    const fontSize = clampTextSize(Math.min(width * 0.48, availableH / (chars * 1.04)));
    return {
      fontSize,
      endFontSize,
      centerInset: showEnds ? { top: endReserve, bottom: endReserve } : {},
    };
  }

  const availableW = Math.max(1, width - endReserve * 4.2);
  const fontSize = clampTextSize(Math.min(height * 0.42, availableW / (chars * 0.58)));
  return {
    fontSize,
    endFontSize,
    centerInset: showEnds ? { left: endReserve * 2.1, right: endReserve * 2.1 } : {},
  };
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
          style={{ width: '100%', height: '100%', fontSize: controlLabelFontSize(control.name, rect.width, rect.height) }}
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
        <span key={i}>{ch === ' ' ? ' ' : ch}</span>
      ))}
    </span>
  );
}

/** Where the "0" (low / fill origin) and "100" (high) end labels sit, per rotation. */
function endPositions(rotation: Rotation): { low: React.CSSProperties; high: React.CSSProperties } {
  const base: React.CSSProperties = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
  };
  const pad = 4;
  if (rotation === 0) {
    return { low: { ...base, left: pad, top: 0, bottom: 0 }, high: { ...base, right: pad, top: 0, bottom: 0 } };
  }
  if (rotation === 180) {
    return { low: { ...base, right: pad, top: 0, bottom: 0 }, high: { ...base, left: pad, top: 0, bottom: 0 } };
  }
  if (rotation === 90) {
    return { low: { ...base, bottom: pad, left: 0, right: 0 }, high: { ...base, top: pad, left: 0, right: 0 } };
  }
  return { low: { ...base, top: pad, left: 0, right: 0 }, high: { ...base, bottom: pad, left: 0, right: 0 } }; // 270
}

/** One coloured copy of all slider text (name + optional 0/100 ends), filling its parent. */
function SliderTextLayer({
  name,
  vertical,
  rotation,
  color,
  fontSize,
  endFontSize,
  centerInset,
  showEnds,
}: {
  name: string;
  vertical: boolean;
  rotation: Rotation;
  color: string;
  fontSize: number;
  endFontSize: number;
  centerInset: React.CSSProperties;
  showEnds: boolean;
}) {
  const ends = showEnds ? endPositions(rotation) : null;
  return (
    <div style={{ position: 'absolute', inset: 0, color }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          ...centerInset,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize,
          pointerEvents: 'none',
        }}
      >
        {labelContent(name, vertical)}
      </div>
      {ends && (
        <>
          <div style={{ ...ends.low, fontWeight: 800, fontSize: endFontSize }}>0</div>
          <div style={{ ...ends.high, fontWeight: 800, fontSize: endFontSize }}>100</div>
        </>
      )}
    </div>
  );
}

/**
 * Slider visuals: white track with a red fill, and a masked label that reads
 * red on the white track and white over the red fill. Fill direction + text
 * orientation follow the rotation (0 left, 90 bottom, 180 right, 270 top).
 * Used by both play mode (interactive) and edit mode (static, with 0/100 ends).
 */
export function SliderVisual({
  name,
  rotation,
  width,
  height,
  value,
  showEnds = false,
  fillColor = 'var(--red)',
}: {
  name: string;
  rotation: Rotation;
  width: number;
  height: number;
  value: number;
  showEnds?: boolean;
  fillColor?: string;
}) {
  const vertical = rotation === 90 || rotation === 270;
  const { fontSize, endFontSize, centerInset } = sliderTextMetrics(name, width, height, vertical, showEnds);

  let fillStyle: React.CSSProperties;
  let innerAnchor: React.CSSProperties;
  if (rotation === 0) {
    fillStyle = { left: 0, top: 0, bottom: 0, width: `${value}%` };
    innerAnchor = { left: 0, top: 0 };
  } else if (rotation === 180) {
    fillStyle = { right: 0, top: 0, bottom: 0, width: `${value}%` };
    innerAnchor = { right: 0, top: 0 };
  } else if (rotation === 90) {
    fillStyle = { left: 0, right: 0, bottom: 0, height: `${value}%` };
    innerAnchor = { left: 0, bottom: 0 };
  } else {
    fillStyle = { left: 0, right: 0, top: 0, height: `${value}%` };
    innerAnchor = { left: 0, top: 0 };
  }

  const layer = (color: string) => (
    <SliderTextLayer
      name={name}
      vertical={vertical}
      rotation={rotation}
      color={color}
      fontSize={fontSize}
      endFontSize={endFontSize}
      centerInset={centerInset}
      showEnds={showEnds}
    />
  );

  return (
    <>
      {/* red base text over the white track */}
      <div style={{ position: 'absolute', left: 0, top: 0, width: `${width}px`, height: `${height}px` }}>
        {layer('var(--red)')}
      </div>
      {/* red fill with white text clipped to the filled region */}
      <div style={{ position: 'absolute', background: fillColor, overflow: 'hidden', ...fillStyle }}>
        <div style={{ position: 'absolute', width: `${width}px`, height: `${height}px`, ...innerAnchor }}>
          {layer('var(--white)')}
        </div>
      </div>
    </>
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

  return (
    <div
      ref={trackRef}
      className="control-slider"
      style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', touchAction: 'none' }}
      onPointerDown={(e) => {
        if (disabled) return;
        e.preventDefault();
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setFromEvent(e);
      }}
      onPointerMove={(e) => {
        if (e.buttons === 0) return;
        setFromEvent(e);
      }}
    >
      <SliderVisual name={control.name} rotation={rot} width={width} height={height} value={value} showEnds />
    </div>
  );
}
