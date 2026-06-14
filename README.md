# Pico Kontrol Panel

Static React web app for controlling Raspberry Pi Pico W devices over Web Bluetooth.

## What this repo contains

- A Vite + React + TypeScript app that runs entirely in the browser.
- A minimal BLE client for the fixed Pico W service and characteristics.
- Simplified MicroPython firmware in `firmware/` for end-to-end testing.
- A results checklist in `RESULT.md`.

## Setup

1. Install dependencies with `npm install`.
2. Start local development with `npm run dev`.
3. Build the static site with `npm run build`.

## GitHub Pages

This project is configured for static hosting on GitHub Pages.

- The Vite `base` is set to `./` so the built files work from the repo pages URL.
- The repo includes a GitHub Actions workflow at `.github/workflows/pages.yml` that builds and deploys `dist/` on every push to `main`.
- In the repository settings, set Pages to use `GitHub Actions` as the source.

## BLE contract

- Service UUID: `b8e06067-62ad-41ba-9231-206ae80ab551`
- Write characteristic: `f897177b-aee8-4767-8ecc-cc694fd5fce0`
- Notify characteristic: `f897177b-aee8-4767-8ecc-cc694fd5fce1`
- Command format: `button,<NAME>\n` or `slider,<NAME>:<VALUE>\n`

## iPhone and iPad

iOS Safari does not support Web Bluetooth. Open the site in Bluefy on iPhone or iPad.

## Firmware

The `firmware/` folder contains a tiny Pico W firmware pair for this proof of concept:

- `firmware/BLEPeripheral.py`
- `firmware/main.py`

Flash those files to the Pico W, then connect from Chrome on Android or Bluefy on iOS.
