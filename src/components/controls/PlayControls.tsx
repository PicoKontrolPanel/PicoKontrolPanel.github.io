import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import type { Control, RadarPing, Rotation } from '../../lib/types';
import type { ControlRect } from '../../grid/geometry';

interface PlacedProps {
  control: Control;
  rect: ControlRect;
  disabled: boolean;
  latestValue?: number;
  toggleValue?: boolean;
  radarPings?: RadarPing[];
  onButton: (name: string) => void;
  onSlider: (name: string, value: number) => void;
  onToggle: (name: string, value: boolean) => void;
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
  const words = name.trim().split(/\s+/).filter(Boolean);
  const chars = Math.max(1, name.replace(/\s+/g, '').length + Math.max(0, words.length - 1) * 1.6);
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

export function PlayControl({
  control,
  rect,
  disabled,
  latestValue,
  toggleValue,
  radarPings = [],
  onButton,
  onSlider,
  onToggle,
}: PlacedProps) {
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

  if (control.type === 'toggle') {
    const isOn = !!toggleValue;
    return (
      <div className="control" style={style}>
        <button
          className={`control-toggle ${isOn ? 'on' : ''}`}
          type="button"
          disabled={disabled}
          aria-pressed={isOn}
          style={{ width: '100%', height: '100%', fontSize: controlLabelFontSize(control.name, rect.width, rect.height) }}
          onPointerDown={(e) => {
            if (disabled) return;
            e.preventDefault();
            onToggle(control.name, !isOn);
          }}
        >
          <span>{control.name}</span>
        </button>
      </div>
    );
  }

  if (control.type === 'radar') {
    return (
      <div className="control" style={style}>
        <RadarVisual control={control} pings={radarPings} width={rect.width} height={rect.height} />
      </div>
    );
  }

  return (
    <div className="control" style={style}>
      <SliderControl
        control={control}
        disabled={disabled}
        latestValue={latestValue}
        onSlider={onSlider}
        width={rect.width}
        height={rect.height}
      />
    </div>
  );
}

export function RadarVisual({
  control,
  pings,
  width,
  height,
  preview = false,
}: {
  control: Control;
  pings: RadarPing[];
  width: number;
  height: number;
  preview?: boolean;
}) {
  const [, setTick] = useState(0);
  const fadeMs = Math.max(120, control.radarFadeMs ?? 1200);
  const rawMinAngle = control.radarMinAngle ?? 0;
  const rawMaxAngle = control.radarMaxAngle ?? 180;
  const minAngle = normalizeAngle(rawMinAngle);
  const maxAngle = normalizeAngle(rawMaxAngle);
  const fullRange = Math.abs(rawMaxAngle - rawMinAngle) >= 360 || (minAngle === maxAngle && rawMinAngle !== rawMaxAngle);
  const maxDistance = Math.max(1, control.radarMaxDistance ?? 200);
  const now = Date.now();
  const latest = pings[pings.length - 1];
  const visualRotation = control.rotation;
  const visualMinAngle = normalizeAngle(minAngle + visualRotation);
  const visualMaxAngle = normalizeAngle(maxAngle + visualRotation);
  const middleAngle = midpointAngle(minAngle, maxAngle);
  const sweepAngle = (latest?.angle ?? middleAngle) + visualRotation;
  const visiblePings = preview
    ? [{ id: 'preview', angle: middleAngle, distance: maxDistance * 0.62, createdAt: now }]
    : pings.filter((ping) => now - ping.createdAt <= fadeMs);
  const showLabels = !fullRange;
  const labelFontSize = Math.max(8, Math.min(12, Math.min(width, height) * 0.16));
  const cx = 0;
  const cy = 0;
  const radius = 1;
  const viewBox = fullRange
    ? { x: -1.12, y: -1.12, width: 2.24, height: 2.24 }
    : fittedSectorViewBox(visualMinAngle, visualMaxAngle);
  const sector = fullRange ? '' : sectorPath(cx, cy, radius, visualMinAngle, visualMaxAngle);
  const minLabel = formatAngle(rawMinAngle);
  const maxLabel = formatAngle(rawMaxAngle);
  const labelPositions = showLabels
    ? radarLabelPositions(visualMinAngle, visualMaxAngle, viewBox, width, height, minLabel, maxLabel, labelFontSize)
    : null;

  useEffect(() => {
    if (preview || pings.length === 0) return undefined;
    const timer = window.setInterval(() => setTick((value) => value + 1), 120);
    return () => window.clearInterval(timer);
  }, [fadeMs, pings.length, preview]);

  const sweep = polarPoint(cx, cy, radius, sweepAngle);

  return (
    <div className="control-radar" style={{ width: '100%', height: '100%' }}>
      <svg
        width={width}
        height={height}
        viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {fullRange ? (
          <circle className="radar-sector-fill" cx={cx} cy={cy} r={radius} />
        ) : (
          <path className="radar-sector-fill" d={sector} />
        )}
        {[0.25, 0.5, 0.75, 1].map((fraction) => (
          fullRange ? (
            <circle key={fraction} className="radar-ring" cx={cx} cy={cy} r={radius * fraction} />
          ) : (
            <path
              key={fraction}
              className="radar-ring"
              d={arcPath(cx, cy, radius * fraction, visualMinAngle, visualMaxAngle)}
            />
          )
        ))}
        {!fullRange && <RadarBoundary cx={cx} cy={cy} radius={radius} angle={visualMinAngle} />}
        {!fullRange && <RadarBoundary cx={cx} cy={cy} radius={radius} angle={visualMaxAngle} />}
        <line className="radar-sweep" x1={cx} y1={cy} x2={sweep.x} y2={sweep.y} />
        {visiblePings.map((ping) => {
          const age = preview ? 0 : now - ping.createdAt;
          const opacity = Math.max(0, 1 - age / fadeMs);
          const distance = Math.max(0, Math.min(maxDistance, ping.distance));
          const point = polarPoint(cx, cy, radius * (distance / maxDistance), ping.angle + visualRotation);
          return (
            <circle
              key={ping.id}
              className="radar-ping"
              cx={point.x}
              cy={point.y}
              r={Math.max(0.025, Math.min(viewBox.width, viewBox.height) * 0.025)}
              opacity={opacity}
            />
          );
        })}
      </svg>
      {showLabels && labelPositions && (
        <>
          <span
            className="radar-angle-label"
            style={{ left: labelPositions.min.x, top: labelPositions.min.y, fontSize: labelFontSize }}
          >
            {minLabel}
          </span>
          <span
            className="radar-angle-label"
            style={{ left: labelPositions.max.x, top: labelPositions.max.y, fontSize: labelFontSize }}
          >
            {maxLabel}
          </span>
        </>
      )}
    </div>
  );
}

function RadarBoundary({ cx, cy, radius, angle }: { cx: number; cy: number; radius: number; angle: number }) {
  const point = polarPoint(cx, cy, radius, angle);
  return <line className="radar-boundary" x1={cx} y1={cy} x2={point.x} y2={point.y} />;
}

function polarPoint(cx: number, cy: number, radius: number, angle: number): { x: number; y: number } {
  const radians = ((normalizeAngle(angle) - 90) * Math.PI) / 180;
  return {
    x: cx + Math.cos(radians) * radius,
    y: cy + Math.sin(radians) * radius,
  };
}

function sectorPath(cx: number, cy: number, radius: number, startAngle: number, endAngle: number): string {
  const start = polarPoint(cx, cy, radius, startAngle);
  const end = polarPoint(cx, cy, radius, endAngle);
  const largeArc = sectorSpan(startAngle, endAngle) > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
}

function arcPath(cx: number, cy: number, radius: number, startAngle: number, endAngle: number): string {
  const start = polarPoint(cx, cy, radius, startAngle);
  const end = polarPoint(cx, cy, radius, endAngle);
  const largeArc = sectorSpan(startAngle, endAngle) > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

function sectorSpan(startAngle: number, endAngle: number): number {
  const start = normalizeAngle(startAngle);
  const end = normalizeAngle(endAngle);
  const span = end >= start ? end - start : 360 - start + end;
  return span === 0 ? 360 : span;
}

function fittedSectorViewBox(startAngle: number, endAngle: number): { x: number; y: number; width: number; height: number } {
  const points = [
    { x: 0, y: 0 },
    polarPoint(0, 0, 1, startAngle),
    polarPoint(0, 0, 1, endAngle),
  ];
  for (const angle of [0, 90, 180, 270]) {
    if (angleInSector(angle, startAngle, endAngle)) {
      points.push(polarPoint(0, 0, 1, angle));
    }
  }
  const minX = Math.min(...points.map((p) => p.x));
  const maxX = Math.max(...points.map((p) => p.x));
  const minY = Math.min(...points.map((p) => p.y));
  const maxY = Math.max(...points.map((p) => p.y));
  const width = Math.max(0.1, maxX - minX);
  const height = Math.max(0.1, maxY - minY);
  const pad = Math.max(width, height) * 0.24;
  return {
    x: minX - pad,
    y: minY - pad,
    width: width + pad * 2,
    height: height + pad * 2,
  };
}

function angleInSector(angle: number, startAngle: number, endAngle: number): boolean {
  const start = normalizeAngle(startAngle);
  const target = normalizeAngle(angle);
  const span = sectorSpan(startAngle, endAngle);
  const offset = normalizeAngle(target - start);
  return offset >= 0 && offset <= span;
}

function radarLabelPositions(
  minAngle: number,
  maxAngle: number,
  viewBox: { x: number; y: number; width: number; height: number },
  width: number,
  height: number,
  minText: string,
  maxText: string,
  fontSize: number,
): { min: { x: number; y: number }; max: { x: number; y: number } } {
  const labelRadius = 1.1;
  const minPoint = polarPoint(0, 0, labelRadius, minAngle);
  const maxPoint = polarPoint(0, 0, labelRadius, maxAngle);
  return {
    min: clampedLabelPosition(minPoint, viewBox, width, height, minText, fontSize),
    max: clampedLabelPosition(maxPoint, viewBox, width, height, maxText, fontSize),
  };
}

function pointToPixel(
  point: { x: number; y: number },
  viewBox: { x: number; y: number; width: number; height: number },
  width: number,
  height: number,
): { x: number; y: number } {
  return {
    x: ((point.x - viewBox.x) / viewBox.width) * width,
    y: ((point.y - viewBox.y) / viewBox.height) * height,
  };
}

function clampedLabelPosition(
  point: { x: number; y: number },
  viewBox: { x: number; y: number; width: number; height: number },
  width: number,
  height: number,
  text: string,
  fontSize: number,
): { x: number; y: number } {
  const px = pointToPixel(point, viewBox, width, height);
  const labelW = Math.max(10, text.length * fontSize * 0.62);
  const labelH = fontSize;
  const inset = 7;
  return {
    x: clamp(px.x, labelW / 2 + inset, Math.max(labelW / 2 + inset, width - labelW / 2 - inset)),
    y: clamp(px.y, labelH / 2 + inset, Math.max(labelH / 2 + inset, height - labelH / 2 - inset)),
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function formatAngle(angle: number): string {
  return `${Math.round(angle)}`;
}

function normalizeAngle(angle: number): number {
  if (!Number.isFinite(angle)) return 0;
  return ((angle % 360) + 360) % 360;
}

function midpointAngle(minAngle: number, maxAngle: number): number {
  const min = normalizeAngle(minAngle);
  const max = normalizeAngle(maxAngle);
  const span = max >= min ? max - min : 360 - min + max;
  return normalizeAngle(min + span / 2);
}

/** Label content: horizontal text, or an upright top-to-bottom character stack. */
function labelContent(name: string, vertical: boolean): React.ReactNode {
  if (!vertical) return name;
  const words = name.trim().split(/\s+/).filter(Boolean);
  return (
    <span
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        lineHeight: 1.02,
        textAlign: 'center',
        gap: '0.42em',
      }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {[...word].map((ch, i) => (
            <span key={`${ch}-${i}`}>{ch}</span>
          ))}
        </span>
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
  lowLabel,
  highLabel,
  showEnds,
}: {
  name: string;
  vertical: boolean;
  rotation: Rotation;
  color: string;
  fontSize: number;
  endFontSize: number;
  centerInset: React.CSSProperties;
  lowLabel: string;
  highLabel: string;
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
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        {labelContent(name, vertical)}
      </div>
      {ends && (
        <>
          <div style={{ ...ends.low, fontWeight: 800, fontSize: endFontSize }}>{lowLabel}</div>
          <div style={{ ...ends.high, fontWeight: 800, fontSize: endFontSize }}>{highLabel}</div>
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
  lowLabel = '0',
  highLabel = '100',
}: {
  name: string;
  rotation: Rotation;
  width: number;
  height: number;
  value: number;
  showEnds?: boolean;
  fillColor?: string;
  lowLabel?: string;
  highLabel?: string;
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
      lowLabel={lowLabel}
      highLabel={highLabel}
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
  latestValue,
  onSlider,
  width,
  height,
}: {
  control: Control;
  disabled: boolean;
  latestValue?: number;
  onSlider: (name: string, value: number) => void;
  width: number;
  height: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const min = control.sliderMin ?? 0;
  const max = control.sliderMax ?? 100;
  const [percent, setPercent] = useState(() =>
    latestValue === undefined
      ? percentForRecenter(control.sliderRecenter ?? 'none')
      : percentForValue(latestValue, min, max),
  );
  const lastSent = useRef<number | null>(null);
  const rot: Rotation = control.rotation;

  useEffect(() => {
    if (latestValue !== undefined) {
      setPercent(percentForValue(latestValue, min, max));
      lastSent.current = latestValue;
    }
  }, [latestValue, min, max]);

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
    sendFraction(fractionFromEvent(e));
  }

  function sendFraction(fraction: number) {
    const nextPercent = Math.round(fraction * 100);
    const value = Math.round(min + (max - min) * fraction);
    setPercent(nextPercent);
    if (value !== lastSent.current) {
      lastSent.current = value;
      onSlider(control.name, value);
    }
  }

  function recenter() {
    const mode = control.sliderRecenter ?? 'none';
    if (disabled || mode === 'none') return;
    sendFraction(percentForRecenter(mode) / 100);
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
      onPointerUp={recenter}
      onPointerCancel={recenter}
      onLostPointerCapture={recenter}
    >
      <SliderVisual
        name={control.name}
        rotation={rot}
        width={width}
        height={height}
        value={percent}
        showEnds
        lowLabel={String(min)}
        highLabel={String(max)}
      />
    </div>
  );
}

function percentForRecenter(mode: Control['sliderRecenter']): number {
  if (mode === 'bottom') return 0;
  if (mode === 'top') return 100;
  if (mode === 'middle') return 50;
  return 0;
}

function percentForValue(value: number, min: number, max: number): number {
  if (max === min) return 0;
  return Math.max(0, Math.min(100, Math.round(((value - min) / (max - min)) * 100)));
}
