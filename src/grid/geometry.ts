// Dot-grid coordinate model. Must match the device's layout meaning exactly.
// The grid size (cols x rows) is a per-device property reported by the device
// (default 11 x 31). edgeMargin=50. Origin = bottom-left dot.
// Stored coords: centerX2/centerY2 in HALF-cells; spanX/spanY in WHOLE cells.

import type { Control, Rotation } from '../lib/types';

export const DEFAULT_GRID_COLS = 11;
export const DEFAULT_GRID_ROWS = 31;

// Absolute protocol clamp — any value a device may report/store renders truthfully.
export const MIN_GRID = 2;
export const MAX_GRID = 60;

// Comfortable range offered on the Create screen (guidance, not a hard wall).
export const GRID_INPUT_MIN = 4;
export const GRID_INPUT_MAX = 40;

export interface GridGeometry {
  areaW: number;
  areaH: number;
  cols: number;
  rows: number;
  margin: number;
  stepX: number;
  stepY: number;
}

/** Edge margin scales with the play area so it looks right on phones and laptops alike. */
function edgeMargin(areaW: number, areaH: number): number {
  return Math.max(14, Math.min(56, Math.min(areaW, areaH) * 0.05));
}

/** Pixel placement of a control (center + unrotated size). */
export interface ControlRect {
  cx: number;
  cy: number;
  width: number;
  height: number;
}

export function computeGeometry(
  areaW: number,
  areaH: number,
  cols: number = DEFAULT_GRID_COLS,
  rows: number = DEFAULT_GRID_ROWS,
): GridGeometry {
  const margin = edgeMargin(areaW, areaH);
  const usableW = Math.max(1, areaW - 2 * margin);
  const usableH = Math.max(1, areaH - 2 * margin);
  return {
    areaW,
    areaH,
    cols,
    rows,
    margin,
    stepX: usableW / Math.max(1, cols - 1),
    stepY: usableH / Math.max(1, rows - 1),
  };
}

/** Half-cell center coord -> pixel from the relevant edge. */
function centerToPxX(centerX2: number, geo: GridGeometry): number {
  return geo.margin + (centerX2 / 2) * geo.stepX;
}

function centerToPxY(centerY2: number, geo: GridGeometry): number {
  // Origin is bottom-left, DOM top grows downward.
  const fromBottom = geo.margin + (centerY2 / 2) * geo.stepY;
  return geo.areaH - fromBottom;
}

export function controlRect(control: Control, geo: GridGeometry): ControlRect | null {
  if (
    control.centerX2 === null ||
    control.centerY2 === null ||
    control.spanX === null ||
    control.spanY === null
  ) {
    return null;
  }
  return {
    cx: centerToPxX(control.centerX2, geo),
    cy: centerToPxY(control.centerY2, geo),
    width: control.spanX * geo.stepX,
    height: control.spanY * geo.stepY,
  };
}

/** All dot positions, for rendering the edit-mode grid. */
export function gridDots(geo: GridGeometry): { x: number; y: number }[] {
  const dots: { x: number; y: number }[] = [];
  for (let col = 0; col < geo.cols; col += 1) {
    for (let row = 0; row < geo.rows; row += 1) {
      dots.push({
        x: geo.margin + col * geo.stepX,
        y: geo.areaH - (geo.margin + row * geo.stepY),
      });
    }
  }
  return dots;
}

/**
 * Snap a pixel center to the nearest valid half-cell coord for the given span.
 * Center parity must match span parity (even span -> center on a dot -> even X2).
 */
export function snapCenter(
  pxX: number,
  pxY: number,
  spanX: number,
  spanY: number,
  geo: GridGeometry,
): { centerX2: number; centerY2: number } {
  const snapAxis = (px: number, span: number, edgeToPx: (c2: number) => number, maxCell: number): number => {
    const parity = span % 2; // odd span -> odd X2 (center sits between dots)
    const maxX2 = maxCell * 2;
    let best = parity;
    let bestDist = Infinity;
    for (let c2 = parity; c2 <= maxX2; c2 += 2) {
      const d = Math.abs(edgeToPx(c2) - px);
      if (d < bestDist) {
        bestDist = d;
        best = c2;
      }
    }
    // Clamp so the control stays fully inside the grid (half-width = span half-cells).
    return Math.max(span, Math.min(maxX2 - span, best));
  };

  const centerX2 = snapAxis(pxX, spanX, (c2) => centerToPxX(c2, geo), geo.cols - 1);
  const centerY2 = snapAxis(pxY, spanY, (c2) => centerToPxY(c2, geo), geo.rows - 1);
  return { centerX2, centerY2 };
}

/** Effective on-screen bounding box accounting for 90/270 rotation (for collision). */
export function rotatedSpan(spanX: number, spanY: number, rotation: Rotation): { w: number; h: number } {
  if (rotation === 90 || rotation === 270) {
    return { w: spanY, h: spanX };
  }
  return { w: spanX, h: spanY };
}
