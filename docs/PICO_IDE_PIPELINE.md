# Pico IDE Pipeline

## Product split

- Phones and tablets are controllers.
- Laptops, desktops, and Chromebooks are developer controllers.
- USB is used for first setup and recovery.
- BLE is used for day-to-day control and, later, file CRUD/code upload once the Pico has the development firmware installed.

## Target classroom flow

1. A student opens the app on a laptop or desktop.
2. The student opens Pico IDE and connects the Pico W over USB Serial.
3. The app installs the stable runtime files:
   - `main.py` as a tiny boot/development loader.
   - `BLEPeripheral.py` with control and file-management support.
   - `user_code.py` as the student-owned code file.
   - Optional lesson libraries.
4. Existing `main.py` is backed up before any generated boot file is written.
5. After first setup, normal iteration can happen over BLE:
   - edit code in the app,
   - save draft locally,
   - upload to `user_code.py.tmp`,
   - verify size/hash,
   - rotate backups,
   - rename tmp to `user_code.py`,
   - restart the Pico,
   - reconnect and open the control panel.

## Safety rules

- Never overwrite a student `main.py` directly.
- Upload to temporary files before replacing live files.
- Verify uploaded files before commit/rename.
- Keep local editor drafts in browser storage before transfer.
- Treat USB as the recovery path when BLE firmware or student code prevents reconnection.

## Implementation phases

1. Done: add a desktop-only Pico IDE entry with platform capability detection.
2. Done: add Web Serial transport and terminal basics.
3. Done: add MicroPython raw REPL helpers.
4. In progress: add filesystem CRUD over USB.
   - Files can be listed, opened by clicking, saved, deleted, and explicitly created with `Ny`.
   - The separate path text box is intentionally removed; the selected file path is shown in the editor header.
   - The old `Læs` button is intentionally removed; clicking a file loads it, and `Opdater` reloads the file list.
5. In progress: add safe installer for runtime files and library bundles.
   - The USB panel now checks required runtime files and can install missing/outdated files.
   - Installable files are sourced from `firmware/`: program variants such as `OnboardLED/main.py` and `TankControl/main.py` install to `/main.py`, followed by shared libraries such as `BLEPeripheral.py`, `PicoRobotics.py`, and `hcsr04.py`.
   - Installer writes through a temporary file, verifies it, keeps a `.bak`, then promotes the file.
6. In progress: add code execution controls.
   - `Kør` executes the current editor contents through raw REPL.
   - `Stop` sends keyboard interrupt to the Pico for running code.
7. Todo: add offline MicroPython execution without faking CPython/Python behavior.
   - The old JavaScript "offline playground" has been removed from the run path because it was not real MicroPython.
   - App-side worker integration is in place and currently loads `public/micropython/micropython.mjs` plus `public/micropython/micropython.wasm`.
   - Current bundled runtime is `@yeliulee/micropython-wasm@1.0.0`, an older Emscripten MicroPython build, copied locally so there is no runtime CDN dependency.
   - Preferred long-term runtime path: build and bundle the official MicroPython WebAssembly port, run it inside a dedicated Web Worker, and only use it when no Pico is connected.
   - The worker must have a hard timeout/termination path and clear terminal messages for unsupported hardware modules.
8. Todo: replace the plain textarea with a Python-aware editor.
   - Preferred path: CodeMirror 6 with Python syntax highlighting.
   - Keep the UI compact; the editor should own the main right-side work area.
9. Todo: add local editor drafts with persistent browser storage.
10. Todo: split firmware into stable runtime loader plus student-owned `user_code.py`.
11. Todo: extend BLE firmware protocol with safe file CRUD.
12. Todo: add BLE upload/restart/reconnect flow.
13. Todo: add guided MicroPython/UF2 installation.
14. Todo: add lesson levels and template generation.

## Current Pico IDE layout

- Left column: files first, then USB/runtime installation.
- Right column: editor first, terminal below.
- The USB development panel intentionally sits below the files panel to give
  the editor more horizontal and vertical space on desktop screens.

## Current improvement checklist

1. Terminal should auto-follow newest output while the user is already at the bottom.
2. If the user scrolls up, terminal output must not force-scroll.
3. If the user scrolls back to the bottom or clears the terminal, auto-follow resumes.
4. Failed known-device connections should return to the same dashboard tab.
5. Runtime checks should compare normalized file contents, so line endings do not create false outdated warnings.
6. Long-running Pico code should run in streaming mode instead of raw REPL wait mode.
7. The editor needs a real Stop command that sends keyboard interrupt to the Pico.
8. MicroPython install support should start as guided BOOTSEL/UF2 installation, then grow into richer browser-assisted setup where browser APIs allow it.
9. To compete with Thonny for classroom use, the app needs: board detection, firmware UF2 guidance, robust file sync, streaming terminal, stop/restart, traceback display, syntax highlighting, import/export, safe runtime install, and recovery mode.
10. File panel actions should use compact icons on narrow panels.
11. Installer should show a choice modal grouped by installable type, not silently install every bundled file.
12. Current installable files are grouped into program variants and libraries. Program variants are shown first and install as `/main.py`; libraries are shown after and copy to the Pico filesystem root so MicroPython imports work simply for children.
13. Fresh Pico workflow still needs guided board selection and UF2 download/copy instructions before Web Serial can work.

## Platform posture

- Desktop Chrome/Edge and Chromebooks are the primary IDE targets.
- Android is controller-first and may get experimental development support later.
- iPhone/iPad are controller-only in the web app; direct development requires a desktop or a native/special browser path.
