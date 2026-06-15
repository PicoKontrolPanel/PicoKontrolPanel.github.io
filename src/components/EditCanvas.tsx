import type React from 'react';
import { useMemo, useRef, useState } from 'react';
import { Glyph } from '../assets/icons';
import { AddModal } from './AddModal';
import { useElementSize } from '../lib/useElementSize';
import {
  computeGeometry,
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

/** Upright label content for edit-mode controls (vertical stack for rotated sliders). */
function editLabel(c: Control): React.ReactNode {
  const vertical = c.type === 'slider' && (c.rotation === 90 || c.rotation === 270);
  if (!vertical) return c.name;
  return (
    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.02 }}>
      {[...c.name].map((ch, i) => (
        <span key={i}>{ch === ' ' ? ' ' : ch}</span>
      ))}
    </span>
  );
}

export function EditCanvas() {
  const layout = useStore((s) => s.layout);
  const active = useStore((s) => s.active);
  const saveLayout = useStore((s) => s.saveLayout);
  const setEditMode = useStore((s) => s.setEditMode);
  const canEdit = !!active?.canEdit;

  const [draft, setDraft] = useState<Control[]>(() => layout.map((c) => ({ ...c })));
  const [selected, setSelected] = useState<string | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [dragName, setDragName] = useState<string | null>(null);
  const [dragPx, setDragPx] = useState<{ cx: number; cy: number } | null>(null);
  const [saving, setSaving] = useState(false);

  const areaRef = useRef<HTMLDivElement>(null);
  const size = useElementSize(areaRef);
  const ready = size.w > 0 && size.h > 0;
  const geo = computeGeometry(size.w, size.h, active?.gridCols, active?.gridRows);

  const dots = useMemo(() => (ready ? gridDots(geo) : []), [geo, ready]);
  const placed = draft.filter(isPlaced);
  const unplaced = draft.filter((c) => !isPlaced(c));

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
    const snapped = snapCenter(geo.areaW / 2, geo.areaH / 2, DEFAULT_SPAN_X, DEFAULT_SPAN_Y, geo);
    update(name, () => ({
      ...base,
      spanX: DEFAULT_SPAN_X,
      spanY: DEFAULT_SPAN_Y,
      rotation: 0,
      centerX2: snapped.centerX2,
      centerY2: snapped.centerY2,
    }));
    setSelected(name);
  }

  async function save() {
    if (hasCollision) return;
    setSaving(true);
    await saveLayout(draft);
    setSaving(false);
  }

  return (
    <div className="edit-view">
      {/* toolbar band (above the area, under the top bar) */}
      <div className="edit-band edit-toolbar-band">
        {selectedControl && isPlaced(selectedControl) ? (
          <div className="edit-toolbar" onPointerDown={(e) => e.stopPropagation()}>
            <ToolBtn label="⟲" onClick={() => rotate(selectedControl.name)} />
            <ToolBtn label="W−" onClick={() => resize(selectedControl.name, 'x', -1)} />
            <ToolBtn label="W+" onClick={() => resize(selectedControl.name, 'x', 1)} />
            <ToolBtn label="H−" onClick={() => resize(selectedControl.name, 'y', -1)} />
            <ToolBtn label="H+" onClick={() => resize(selectedControl.name, 'y', 1)} />
            <button
              className="iconbtn"
              style={{ color: 'var(--red)' }}
              onClick={() => remove(selectedControl.name)}
              aria-label="Slet"
            >
              <Glyph name="delete" size={24} />
            </button>
          </div>
        ) : (
          <span className="edit-hint">Vælg en kontrol for at redigere</span>
        )}
      </div>

      {/* play area (shrunk to leave room for the bands) */}
      <div className="controls-area-wrap">
        <div
          className="controls-area"
          ref={areaRef}
          style={{ touchAction: 'none' }}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerDown={() => setSelected(null)}
        >
          {ready && (
            <>
              <svg
                width={geo.areaW}
                height={geo.areaH}
                style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
              >
                {dots.map((d, i) => (
                  <circle key={i} cx={d.x} cy={d.y} r={2.5} fill="rgba(198,80,78,0.45)" />
                ))}
              </svg>

              {placed.map((c) => {
                const isDragging = dragName === c.name && dragPx;
                const rect = controlRect(c, geo);
                if (!rect) return null;
                const cx = isDragging ? dragPx!.cx : rect.cx;
                const cy = isDragging ? dragPx!.cy : rect.cy;
                const style: React.CSSProperties = {
                  left: cx,
                  top: cy,
                  width: rect.width,
                  height: rect.height,
                  outline: selected === c.name ? '3px solid var(--text)' : 'none',
                  outlineOffset: 2,
                };
                return (
                  <div
                    key={c.name}
                    className={`control ${colliding.has(c.name) ? 'colliding' : ''}`}
                    style={style}
                    onPointerDown={(e) => onPointerDown(e, c)}
                  >
                    <div
                      className={c.type === 'button' ? 'control-button' : 'control-slider'}
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'grid',
                        placeItems: 'center',
                        color: c.type === 'slider' ? 'var(--red)' : undefined,
                        fontWeight: 800,
                      }}
                    >
                      {editLabel(c)}
                    </div>
                  </div>
                );
              })}

              {canEdit && (
                <button
                  type="button"
                  className="fab"
                  style={{ width: 52, height: 52, right: 12, bottom: 12 }}
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => setAddOpen(true)}
                  aria-label="Tilføj kontrol"
                >
                  <Glyph name="plus" size={24} />
                </button>
              )}

              {saving && (
                <div className="overlay">
                  <div className="spinner" />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* actions band (below the area) */}
      <div className="edit-band edit-actions-band">
        <button
          className="btn btn-outline"
          style={{ flex: 1 }}
          type="button"
          onClick={() => setEditMode(false)}
          disabled={saving}
        >
          Annuller
        </button>
        <button
          className="btn btn-primary"
          style={{ flex: 1 }}
          type="button"
          onClick={save}
          disabled={hasCollision || saving}
        >
          {saving ? 'Gemmer...' : 'Gem'}
        </button>
      </div>

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
        minWidth: 38,
        height: 38,
        borderRadius: 12,
        background: 'var(--red)',
        color: 'var(--white)',
        fontWeight: 800,
        fontSize: 14,
        padding: '0 8px',
      }}
    >
      {label}
    </button>
  );
}
