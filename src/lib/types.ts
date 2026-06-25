// Shared domain types for the Pico Kontrol Panel app.

export type ControlType = 'button' | 'slider' | 'toggle' | 'radar';
export type Rotation = 0 | 90 | 180 | 270;
export type SliderRecenter = 'none' | 'bottom' | 'middle' | 'top';

/**
 * A single control as defined by the device layout.
 * Geometry is in grid units; `null` on any geometry field means the control is
 * "uninitialized" (declared by the device but not yet placed) and belongs in the
 * Add menu rather than on the grid.
 *
 * - centerX2 / centerY2: center position in HALF-cells (dot 5 -> 10).
 * - spanX / spanY: size in WHOLE cells.
 */
export interface Control {
  type: ControlType;
  name: string;
  centerX2: number | null;
  centerY2: number | null;
  spanX: number | null;
  spanY: number | null;
  rotation: Rotation;
  sliderMin?: number;
  sliderMax?: number;
  sliderRecenter?: SliderRecenter;
  toggleInitial?: boolean;
  radarMinAngle?: number;
  radarMaxAngle?: number;
  radarMaxDistance?: number;
  radarFadeMs?: number;
}

export interface RadarPing {
  id: string;
  angle: number;
  distance: number;
  createdAt: number;
}

export function isPlaced(c: Control): boolean {
  return (
    c.centerX2 !== null &&
    c.centerY2 !== null &&
    c.spanX !== null &&
    c.spanY !== null
  );
}

export interface User {
  username: string;
  userID: string;
}

export interface SavedDevice {
  /** Web Bluetooth device id (stable per-origin) used as the storage key. */
  deviceID: string;
  /** Display name = advertised name with the `PicoW-` prefix stripped. */
  deviceName: string;
  deviceIconID: number;
  canOthersConnect: boolean;
  canOthersEdit: boolean;
  isOwnedByMe: boolean;
  ownerName?: string;
}

export const MAX_NAME_LENGTH = 14;
export const NAME_PATTERN = /^[A-Za-z0-9_ -]{1,14}$/;
