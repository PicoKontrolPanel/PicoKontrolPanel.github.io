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
   - Required files are currently `main.py`, `BLEPeripheral.py`, and `user_code.py`.
   - Installer writes through a temporary file, verifies it, keeps a `.bak`, then promotes the file.
6. In progress: add code execution controls.
   - `Kør` executes the current editor contents through raw REPL.
   - `Reset` sends a MicroPython soft reset.
7. Todo: replace the plain textarea with a Python-aware editor.
   - Preferred path: CodeMirror 6 with Python syntax highlighting.
   - Keep the UI compact; the editor should own the main right-side work area.
8. Todo: add local editor drafts with persistent browser storage.
9. Todo: split firmware into stable runtime loader plus student-owned `user_code.py`.
10. Todo: extend BLE firmware protocol with safe file CRUD.
11. Todo: add BLE upload/restart/reconnect flow.
12. Todo: add guided MicroPython/UF2 installation.
13. Todo: add lesson levels and template generation.

## Current Pico IDE layout

- Left column: files first, then USB/runtime installation.
- Right column: editor first, terminal below.
- The USB development panel intentionally sits below the files panel to give
  the editor more horizontal and vertical space on desktop screens.

## Platform posture

- Desktop Chrome/Edge and Chromebooks are the primary IDE targets.
- Android is controller-first and may get experimental development support later.
- iPhone/iPad are controller-only in the web app; direct development requires a desktop or a native/special browser path.
