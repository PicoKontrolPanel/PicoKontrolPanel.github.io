# Pico Kontrol Panel

A local-only React web app (Vite + TypeScript) for controlling Raspberry Pi Pico W
devices over Web Bluetooth — a port of the Unity Android/iOS app to a single static
web build. The UI is in Danish (target users: Teknologiskolen).

## What this repo contains

- A Vite + React + TypeScript app that runs entirely in the browser (no backend).
- A layered BLE stack: GATT transport → reliable-stream framing → handshake/layout
  protocol (`src/ble/`).
- The full-protocol MicroPython firmware for the Pico W in `firmware/`.
- `DESIGN_NOTES.md` — architecture, icon-id contract, and web adaptations.

## Features

- First-run **username** creation (stored locally, generates a `userID`).
- **Dashboard**: Mine/Andre device pages, saved-device cards, "+" to find a device.
- **Connection** screen driven by the BLE handshake (progress 0→100).
- **Create Device** for unowned devices (icon picker, Privat/Offentlig, edit permission).
- **Control Panel**: a dot-grid of buttons/sliders that drive the device
  (`button,<NAME>` / `slider,<NAME>:<VALUE>`).
- **Edit Mode**: drag + grid-snap, collision blocking, rotate, resize, add/delete,
  and save the layout back to the device.
- **Debugger** log modal (Clear / Save To Phone) and a right-edge side menu.

## Setup

1. `npm install`
2. `npm run dev` — local development.
3. `npm run build` — static build into `dist/`.

## GitHub Pages

Static hosting is configured: Vite `base` is `./`, and
`.github/workflows/pages.yml` builds and deploys `dist/` on every push to `main`.
In repository settings, set Pages source to **GitHub Actions**.

## Cross-platform / browser support

- **Android**: Chrome (Web Bluetooth supported).
- **iPhone / iPad**: iOS Safari does **not** support Web Bluetooth — open the site in
  the free **Bluefy** browser. The app detects unsupported browsers and shows a notice.
- `requestDevice()` must be triggered by a user gesture (the "+" / connect buttons).

## BLE contract

- Service UUID: `b8e06067-62ad-41ba-9231-206ae80ab551`
- Write (app → Pico): `f897177b-aee8-4767-8ecc-cc694fd5fce0`
- Notify (Pico → app): `f897177b-aee8-4767-8ecc-cc694fd5fce1`
- Advertised name: `PicoW-<base>` (display name strips the `PicoW-` prefix).

The full protocol (handshake, ownership/permission, layout streaming, reliable-stream
framing) is documented in `Important Notes/Handoff - Design/reference/PROTOCOL.md` and
implemented in `src/ble/`.

## Firmware

`firmware/` holds the full-protocol Pico W firmware:

- `firmware/OnboardLED/main.py` - a minimal LED-only program that declares a few
  controls and drives only the onboard LED.
- `firmware/TankControl/main.py` - a two-motor robot-car program with two
  `-100..100` middle-recenter sliders for tank control.
- `firmware/BLEPeripheral.py` - complete protocol (handshake, reliable stream,
  ownership/permission, layout request/update, on-device persistence).
- `firmware/PicoRobotics.py` and `firmware/hcsr04.py` - optional classroom
  hardware libraries.

Install one program variant as `/main.py` plus the libraries needed by that project.
On first connect the device is **unowned**, so the app runs the Create flow; after
that it streams its control-panel layout. Settings and layout persist on-device in
`DeviceSettings.txt` / `Layout.txt`.

## Pico IDE pipeline

The recommended first-setup, serial install, BLE edit, and safe `/main.py` update
flow is documented in `docs/PICO_IDE_PIPELINE.md`.

## Testing checklist

See `RESULT.md`.
