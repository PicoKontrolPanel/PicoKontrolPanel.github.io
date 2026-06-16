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

1. Add a desktop-only Pico IDE entry with platform capability detection.
2. Add Web Serial transport and terminal basics.
3. Add MicroPython raw REPL helpers.
4. Add filesystem CRUD over USB.
5. Add safe installer for runtime files and library bundles.
6. Add local editor drafts with persistent browser storage.
7. Extend BLE firmware protocol with safe file CRUD.
8. Add BLE upload/restart/reconnect flow.
9. Add lesson levels and template generation.

## Platform posture

- Desktop Chrome/Edge and Chromebooks are the primary IDE targets.
- Android is controller-first and may get experimental development support later.
- iPhone/iPad are controller-only in the web app; direct development requires a desktop or a native/special browser path.
