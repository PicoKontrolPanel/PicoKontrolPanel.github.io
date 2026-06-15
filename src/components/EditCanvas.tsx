import type React from 'react';
import { useMemo, useRef, useState } from 'react';
import { Glyph } from '../assets/icons';
import { AddModal } from './AddModal';
import {
  controlRect,
  gridDots,
  rotatedSpan,
  snapCenter,
  type GridGeometry,
} from '../grid/geometry';
import { isPlaced, type Control, type Rotation } from '../lib/types';
import { useStore } from '../store/store';

const DEFAULT_SPAN_X = 4;
const DEFAULT_SPAN_Y = 5;

interface EditCanvasProps {
  geo: GridGeometry;
  canEdit: boolean;
}

interface Box {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
}

function cellBox(c: Control): Box | null {
  if (!isPlaced(c)) return null;
  const { w, h } = rotatedSpan(c.spanX!, c.spanY!, c.rotation);
  const cx = c.centerX2! / 2;
  const cy = c.centerY2! / 2;
  return { x0: cx - w / 2, x1: cx + w / 2, y0: cy - h / 2, y1: cy + h / 2 };
}

function overlaps(a: Box, b: Box, eps = 0.02): boolean {
  return a.x0 < b.x1 - eps && b.x0 < a.x1 - eps && a.y0 < b.y1 - eps && b.y0 < a.y1 - eps;
}

/** Re-snap a control's center to a legal grid placement for its current (rotated) span. */
function resnap(c: Control, geo: GridGeometry): Control {
  const rect = controlRect(c, geo);
  if (!rect || c.spanX === null || c.spanY === null) return c;
  const { w, h } = rotatedSpan(c.spanX, c.spanY, c.rotation);
  const snapped = snapCenter(rect.cx, rect.cy, w, h, geo);
  return { ...c, centerX2: snapped.centerX2, centerY2: snapped.centerY2 };
}

export function EditCanvas({ geo, canEdit }: EditCanvasProps) {
  const layout = useStore((s) => s.layout);
  const saveLayout = useStore((s) => s.saveLayout);
  const setEditMode = useStore((s) => s.setEditMode);

  const [draft, setDraft] = useState<Control[]>(() => layout.map((c) => ({ ...c })));
  const [selected, setSelected] = useState<string | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [dragName, setDragName] = useState<string | null>(null);
  const [dragPx, setDragPx] = useState<{ cx: number; cy: number } | null>(null);
  const [saving, setSaving] = useState(false);
  const areaRef = useRef<HTMLDivElement>(null);

  const dots = useMemo(() => gridDots(geo), [geo]);
  const placed = draft.filter(isPlaced);
  const unplaced = draft.filter((c) => !isPlaced(c));

  // Collision set.
  const colliding = useMemo(() => {
    const set = new Set<string>();
    for (let i = 0; i < placed.length; i += 1) {
      for (let j = i + 1; j < placed.length; j += 1) {
        const a = cellBox(placed[i]);
        const b = cellBox(placed[j]);
        if (a && b && overlaps(a, b)) {
          set.add(placed[i].name);
          set.add(placed[j].name);
        }
      }
    }
    return set;
  }, [placed]);

  const hasCollision = colliding.size > 0;
  const selectedControl = draft.find((c) => c.name === selected) ?? null;

  function update(name: string, fn: (c: Control) => Control) {
    setDraft((d) => d.map((c) => (c.name === name ? fn(c) : c)));
  }

  // ---- drag ----
  function onPointerDown(e: React.PointerEvent, c: Control) {
    e.stopPropagation();
    setSelected(c.name);
    const rect = controlRect(c, geo);
    if (!rect) return;
    setDragName(c.name);
    setDragPx({ cx: rect.cx, cy: rect.cy });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!dragName) return;
    const area = areaRef.current;
    if (!area) return;
    const r = area.getBoundingClientRect();
    // r is in visual (scaled) pixels; clientWidth/Height are layout pixels.
    // Convert the pointer position into the frame's unscaled layout space so it
    // matches the grid geometry regardless of the viewport scale factor.
    const sx = area.clientWidth / r.width;
    const sy = area.clientHeight / r.height;
    setDragPx({
      cx: Math.max(0, Math.min(area.clientWidth, (e.clientX - r.left) * sx)),
      cy: Math.max(0, Math.min(area.clientHeight, (e.clientY - r.top) * sy)),
    });
  }

  function onPointerUp() {
    if (dragName && dragPx) {
      const c = draft.find((x) => x.name === dragName);
      if (c && c.spanX !== null && c.spanY !== null) {
        const { w, h } = rotatedSpan(c.spanX, c.spanY, c.rotation);
        const snapped = snapCenter(dragPx.cx, dragPx.cy, w, h, geo);
        update(dragName, (ctrl) => ({ ...ctrl, centerX2: snapped.centerX2, centerY2: snapped.centerY2 }));
      }
    }
    setDragName(null);
    setDragPx(null);
  }

  // ---- toolbar actions ----
  function rotate(name: string) {
    update(name, (c) => resnap({ ...c, rotation: (((c.rotation + 270) % 360) as Rotation) }, geo));
  }

  function resize(name: string, axis: 'x' | 'y', delta: number) {
    update(name, (c) => {
      if (c.spanX === null || c.spanY === null) return c;
      const spanX = axis === 'x' ? Math.max(1, Math.min(geo.cols - 1, c.spanX + delta)) : c.spanX;
      const spanY = axis === 'y' ? Math.max(1, Math.min(geo.rows - 1, c.spanY + delta)) : c.spanY;
      return resnap({ ...c, spanX, spanY }, geo);
    });
  }

  function remove(name: string) {
    update(name, (c) => ({ ...c, centerX2: null, centerY2: null, spanX: null, spanY: null, rotation: 0 }));
    setSelected(null);
  }

  function add(name: string) {
    setAddOpen(false);
    const base = draft.find((c) => c.name === name);
    if (!base) return;
    const placedControl: Control = {
      ...base,
      spanX: DEFAULT_SPAN_X,
      spanY: DEFAULT_SPAN_Y,
      rotation: 0,
      centerX2: 0,
      centerY2: 0,
    };
    const snapped = snapCenter(geo.areaW / 2, geo.areaH / 2, DEFAULT_SPAN_X, DEFAULT_SPAN_Y, geo);
    update(name, () => ({ ...placedControl, centerX2: snapped.centerX2, centerY2: snapped.centerY2 }));
    setSelected(name);
  }

  async function save() {
    if (hasCollision) return;
    setSaving(true);
    await saveLayout(draft);
    setSaving(false);
  }

  return (
    <div
      ref={areaRef}
      style={{ position: 'absolute', inset: 0, touchAction: 'none' }}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerDown={() => setSelected(null)}
    >
      {/* dot grid */}
      <svg width={geo.areaW} height={geo.areaH} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={2.5} fill="rgba(198,80,78,0.45)" />
        ))}
      </svg>

      {/* controls */}
      {placed.map((c) => {
        const isDragging = dragName === c.name && dragPx;
        const rect = controlRect(c, geo);
        if (!rect) return null;
        const cx = isDragging ? dragPx!.cx : rect.cx;
        const cy = isDragging ? dragPx!.cy : rect.cy;
        const style = {
          left: cx,
          top: cy,
          width: rect.width,
          height: rect.height,
          '--rot': `${c.rotation}deg`,
          outline: selected === c.name ? '3px solid var(--text)' : 'none',
          outlineOffset: 2,
        } as React.CSSProperties;
        return (
          <div
            key={c.name}
            className={`control ${colliding.has(c.name) ? 'colliding' : ''}`}
            style={style}
            onPointerDown={(e) => onPointerDown(e, c)}
          >
            <div
              className={c.type === 'button' ? 'control-button' : 'control-slider'}
              style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: c.type === 'slider' ? 'var(--red)' : undefined, fontWeight: 800 }}
            >
              {c.name}
            </div>
          </div>
        );
      })}

      {/* selection toolbar */}
      {selectedControl && isPlaced(selectedControl) && (
        <div
          style={{
            position: 'absolute',
            top: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 6,
            background: 'var(--white)',
            border: '2px solid var(--red)',
            borderRadius: 16,
            padding: 6,
            zIndex: 6,
          }}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <ToolBtn label="⟲" onClick={() => rotate(selectedControl.name)} />
          <ToolBtn label="W-" onClick={() => resize(selectedControl.name, 'x', -1)} />
          <ToolBtn label="W+" onClick={() => resize(selectedControl.name, 'x', 1)} />
          <ToolBtn label="H-" onClick={() => resize(selectedControl.name, 'y', -1)} />
          <ToolBtn label="H+" onClick={() => resize(selectedControl.name, 'y', 1)} />
          <button className="iconbtn" style={{ color: 'var(--red)' }} onClick={() => remove(selectedControl.name)} aria-label="Slet">
            <Glyph name="delete" size={22} />
          </button>
        </div>
      )}

      {/* add button */}
      {canEdit && (
        <button
          type="button"
          className="fab"
          style={{ width: 52, height: 52, right: 12, bottom: 70 }}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => setAddOpen(true)}
          aria-label="Tilføj kontrol"
        >
          <Glyph name="plus" size={24} />
        </button>
      )}

      {/* save / discard */}
      <div
        style={{ position: 'absolute', left: 12, right: 12, bottom: 12, display: 'flex', gap: 10, zIndex: 6 }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <button className="btn btn-outline btn-block" type="button" onClick={() => setEditMode(false)} disabled={saving}>
          Annuller
        </button>
        <button className="btn btn-primary btn-block" type="button" onClick={save} disabled={hasCollision || saving}>
          {saving ? 'Gemmer...' : 'Gem'}
        </button>
      </div>

      {saving && (
        <div className="overlay">
          <div className="spinner" />
        </div>
      )}

      {addOpen && <AddModal unplaced={unplaced} onAdd={add} onClose={() => setAddOpen(false)} />}
    </div>
  );
}

function ToolBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        minWidth: 34,
        height: 34,
        borderRadius: 10,
        background: 'var(--red)',
        color: 'var(--white)',
        fontWeight: 800,
        fontSize: 13,
      }}
    >
      {label}
    </button>
  );
}
