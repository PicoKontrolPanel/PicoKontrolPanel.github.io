# Pico IDE Pipeline

## Recommended core pipeline

This is the simple pipeline the app should optimize for first. It favors
predictable classroom use over clever synchronization.

1. Fresh Pico setup happens from a laptop/desktop in Pico IDE.
2. If the Pico has no MicroPython, the IDE offers the bundled UF2 download.
   - The most compatible browser path is: hold BOOTSEL, mount the Pico as
     `RPI-RP2`, download/save the UF2 directly to that drive, and let the Pico
     reboot into MicroPython.
   - Browser-specific direct filesystem APIs can remain optional sugar later.
3. The user connects the Pico through Web Serial.
4. The IDE installs the selected starter program and libraries over serial.
   - Program variant installs to `/main.py`.
   - Shared runtime/control support installs to `/BLEPeripheral.py`.
   - Project libraries install to the filesystem root.
   - Writes use temp files, verification, backup, then replace.
5. The user writes code and saves files to the Pico over serial.
6. Leaving Pico IDE disconnects Web Serial and returns to the dashboard.
7. The user searches for nearby BLE devices and connects to the Pico.
8. From BLE connection the user can:
   - use the control panel,
   - enter edit mode to place controls and save `Layout.txt`,
   - enter Pico IDE to inspect and edit files.
9. Over BLE, ordinary file saves should replace the file safely with:
   - write new content to `file.tmp`,
   - optionally verify by size/hash,
   - rotate old file to `file.bak`,
   - rename temp file into place.
10. Saving `/main.py` over BLE is allowed through a guarded flow.
    - The current BLE connection can remain alive because overwriting the file
      on disk does not restart the MicroPython process already running in RAM.
    - The new `/main.py` does not take effect until the user explicitly chooses
      `Restart / Apply main.py`.
    - If the user restarts, BLE will disconnect; the app should treat that as
      expected and attempt to reconnect to the same known device.
11. `/BLEPeripheral.py` stays readable in BLE Pico IDE, but locked for editing
    while connected over BLE.
    - It is the active connection/runtime layer.
    - A modal should explain that it can only be changed through USB installer
      or recovery.
    - This keeps the connection path understandable and recoverable.
12. When the user is finished, disconnecting returns to the dashboard where the
    known device appears under Mine or Andre depending on ownership.

## Feasibility notes

- Installing MicroPython by saving the UF2 directly to the `RPI-RP2` drive is
  feasible across browsers because it uses normal browser download behavior plus
  the Pico bootloader drive.
- Web Serial setup after MicroPython install is feasible on desktop Chromium
  browsers and Chromebooks.
- BLE file editing is feasible with the current protocol shape, but should be
  made safer with explicit firmware commands for rename and protected files.
- Keeping BLE connected while editing and saving `/main.py` is feasible if save
  only changes the file on disk. The running program continues from RAM.
- Running the new `/main.py` without a restart is not a good simple target.
  MicroPython can reload modules in some cases, but reliably replacing a whole
  active application without stale globals, callbacks, motors, timers, or BLE
  state is fragile. The recommended rule is: save keeps connection; apply/restart
  runs the new boot code.
- Reconnecting after restart is feasible, but not guaranteed by every browser.
  The app should try automatic reconnect to the same permitted BluetoothDevice
  and fall back to the normal device chooser with a clear message.

## Recommended implementation plan

1. Keep Pico IDE desktop-only.
   - Phones/tablets stay controller-first.
   - Small screens show the laptop-only modal.
2. Make serial setup the authoritative first-install and recovery path.
   - Improve the MicroPython modal to explain the UF2-to-`RPI-RP2` download
     workflow.
   - Keep serial runtime installation as the safest way to update
     `BLEPeripheral.py`.
3. Add BLE protocol capabilities.
   - Add a `fs_capabilities` command returning support flags such as
     `rename`, `safe_write`, `main_write`, and protocol/runtime version.
   - Use this for diagnostics and clear errors during development, not for
     old-firmware compatibility before release.
4. Add real BLE rename.
   - Firmware command: `fs_rename,<from>,<to>`.
   - App method: `renameFile(from, to)`.
   - Use it instead of copy-new/delete-old.
   - No old-firmware fallback is needed before release; test devices should use
     the current bundled runtime.
5. Add guarded BLE safe-write for `/main.py`.
   - Keep `/BLEPeripheral.py` protected over BLE.
   - Allow `/main.py` only through a special safe-write command or explicit
     allowlist.
   - Always write temp, verify, backup, then replace.
   - Mark the editor state as "Saved to Pico, restart needed".
6. Add a locked runtime-file editor state.
   - If `/BLEPeripheral.py` is opened over BLE, show it read-only.
   - Gray the editor and show a concise modal/notice: "This file keeps the BLE
     connection alive. Update it from USB installer."
7. Add explicit Apply/Restart behavior.
   - After saving `/main.py`, show an `Apply by restarting Pico` action.
   - On restart, suppress the normal connection-lost warning.
   - Attempt automatic reconnect and handshake.
   - Return to the control panel or BLE Pico IDE based on where the user was.
8. Keep whole-file saves for now.
   - Do not add diff/patch updates yet.
   - Whole-file transfer is simpler and more reliable for small classroom Python
     files.
   - Consider a patch protocol only if measured BLE save times become a real
     problem.

## Implemented restart/reconnect behavior

- BLE saves to `/main.py` keep the current BLE session alive and show a restart
  prompt.
- The prompt offers:
  - restart and open the control panel,
  - restart and return to Pico IDE,
  - postpone restart.
- Restart uses the existing BLE `restart` command.
- The app suppresses the expected disconnect from the reset, waits for the
  browser to observe the disconnect, then tries to reconnect to the same
  browser-permitted Bluetooth device via `navigator.bluetooth.getDevices()`.
- If reconnect succeeds, the normal handshake/layout load runs again.
- If reconnect fails, the user is returned to the dashboard with the known-device
  reconnect flow available.
- The bundled `BLEPeripheral.py` now permits safe BLE writes to `/main.py` while
  keeping `/BLEPeripheral.py` protected over BLE.

## Implemented connection-loss behavior

- The BLE transport listens for the browser `gattserverdisconnected` event.
- Unexpected BLE loss while in the control panel, connection/create flow, or
  Pico IDE opened from the control panel sends the user back to the dashboard.
- The dashboard shows a connection-lost modal with a reconnect action for the
  same known device.
- During an intentional `/main.py` apply/restart, the first disconnect is treated
  as expected. If automatic reconnect fails, the app still returns to the
  dashboard and shows the reconnect path.
- The BLE transport disconnect callback is idempotent so duplicate browser/manual
  disconnect notifications do not produce duplicate state transitions.

## Implemented BLE file-read behavior

- BLE file reads prefer a paged `fs_read_page` protocol command.
- Each page reads a small byte range from the Pico and sends only that page back
  to the browser.
- This avoids building one large `fs_read` response in Pico RAM, which could
  fail for larger library files such as `BLEPeripheral.py`, `PicoRobotics.py`,
  and `neopixel.py`.
- Paged reads are the only supported BLE file-read path. Because the project is
  unreleased, installed test devices should be updated to the current
  `BLEPeripheral.py` before BLE IDE testing.
- The Pico IDE shows editor-level loading feedback while a file is being read.

## Manual test path for main.py reconnect

1. Use Pico IDE over USB Serial.
2. Install/update `BLEPeripheral.py` from the runtime installer so the Pico has
   the BLE runtime that allows `/main.py` saves.
3. Disconnect USB by leaving Pico IDE.
4. Connect to the Pico over BLE from the dashboard.
5. Open Pico IDE from the connected control panel.
6. Open `/main.py`, make a small visible change, and save to Pico.
7. Confirm that the BLE session remains connected and the restart prompt appears.
8. Choose `Genstart og aabn kontrolpanel`.
9. Confirm that the Pico restarts, the app reconnects without the normal
   connection-lost warning, and the control panel opens again.
10. Repeat with `Genstart og bliv i Kodevaerksted` and confirm the app reconnects
    back into Pico IDE.

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
   - Installable files are sourced from `firmware/`: program variants such as `OnboardLED/main.py`, `TankControl/main.py`, and `RadarControl/main.py` install to `/main.py`, followed by shared libraries such as `BLEPeripheral.py`, `PicoRobotics.py`, and `hcsr04.py`.
   - These three bundled programs demonstrate the current four control-panel elements: buttons, sliders, toggles, and radar telemetry.
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
