# Design Notes — Unity → React port

Implementation notes, web adaptations, and intentionally deferred items for the
Pico Kontrol Panel web app. Read alongside `Important Notes/Handoff - Design/`.

## Architecture

```
src/
  lib/        types, id (userID), storage (localStorage), useElementSize
  assets/     icons.tsx — inline SVG glyphs + device-icon registry
  ble/        transport.ts (GATT) · reliableStream.ts (framing) · protocol.ts (handshake/layout)
  grid/       geometry.ts — dot-grid coordinate model
  store/      store.ts — Zustand store, owns the PicoProtocol singleton + flow orchestration
  components/ TopBar, SideMenu, Modal, Debugger, IconPicker, AddModal, EditCanvas, controls/
  screens/    Splash, Intro, Dashboard, Connection, CreateDevice, ControlPanel
  App.tsx     view router (mutually-exclusive screens + global overlays)
```

The BLE stack is three layers: `BleTransport` (bytes ↔ newline lines, chunked ≤20B)
→ `ReliableStream` (prep/ack:prep/numbered/miss framing, both directions) →
`PicoProtocol` (handshake state machine, layout request/save, queued control commands).

## Icon-ID mapping (wire contract)

`iconID` is the index into the 12-item device-icon list and is sent in `create,…`
and echoed in `owned,…`. The original PNGs were copied to `public/device-icons/<id>.png`
in the exact handoff order, so stored ids still resolve:

| id | meaning | id | meaning |
|----|---------|----|---------|
| 0 | Raspberry Pi | 6 | Robot arm |
| 1 | Sumo robot | 7 | Bee |
| 2 | LED / light | 8 | Palette |
| 3 | Ruler + pencil | 9 | Proximity sensor |
| 4 | Car | 10 | Search |
| 5 | Tank | 11 | Alarm |

UI chrome glyphs (hamburger, user, settings, help, debugger, edit, exit, plus,
delete, power) are inline SVGs (`assets/icons.tsx`), not the original icons8 PNGs —
the handoff allows substituting glyphs as long as meanings are preserved.

## Web adaptations (Unity → browser)

- **Scanning.** Web Bluetooth cannot background-scan or toggle "in range" dots.
  The nearby list is replaced by the **"+" FAB → `requestDevice()`** browser chooser.
  Saved-device reconnect tries **`getDevices()`** (permitted devices) and falls back
  to the chooser. The green/grey availability dot is **dropped** (not reliably
  knowable on web); cards show "Min enhed" / "Andens enhed" instead.
- **Every device reply is reliable-framed.** The firmware wraps even one-line replies
  (`ACK:HELLO`, `unowned`, `perm,…`) in `prep/ack:prep/<n>-…`. So inbound reassembly
  runs from the very first handshake step, not just for the layout. Implemented in
  `reliableStream.ts`; the app sends its own short commands as plain lines.
- **Permission denial self-disconnect.** On `perm,0,0` the device disconnects itself;
  the app marks the disconnect as expected and shows "Adgang nægtet".
- **Slider range.** The firmware just echoes the raw value to its `on_write`. The web
  app uses **integer 0–100**. Confirm against firmware semantics before relying on a
  scale; `firmware/main.py`'s `LYS` slider treats ≥50 as LED-on.
- **Name length.** Validation uses **14** chars (firmware `MAX_NAME_LENGTH`), not 32.

## Edit Mode

Grid model matches the wire format exactly: cols=11, rows=31, edgeMargin=50,
half-cell `centerX2/centerY2`, whole-cell `spanX/spanY`, rotation 0/90/180/270.
Implemented: dot grid, drag with center-snap on release (parity-aware), rotated
bounding-box **collision** (grey-out + save disabled), **rotate** (−90°/tap with
re-snap), **add** (from the Add modal, default span 4×5) / **delete** (returns the
control to the Add list), **save** via the `update` reliable stream → `LAYOUT_SAVED`,
and **discard** (exit without saving).

**Adaptation:** resize uses a selection-toolbar of `W±`/`H±` whole-cell buttons
rather than Unity's four drag-handles — simpler and touch-friendly, same grid result.
Drag-handle resize and the discard "animate back" tween are deferred polish.

## Intentionally deferred

- Side-menu **user / settings / help** screens are present as buttons but not yet
  wired to content (debugger, edit, exit are functional).
- Dashboard **horizontal swipe** between Mine/Andre pages — the segmented pill switches
  pages; flick/drag gesture is not implemented.
- Availability dot (see scanning above).
- Drag-handle resize + discard restore animation (toolbar resize works).

## Local-only guarantee

No backend, analytics, or network calls. Identity (`pkp.user`) and saved devices
(`pkp.savedDevices`) live in `localStorage` only.
