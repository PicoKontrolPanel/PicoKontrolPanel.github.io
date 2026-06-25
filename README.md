# Pico Kontrol Panel

A local-only React web app for controlling Raspberry Pi Pico W projects over Web
Bluetooth. The Pico declares the available controls in `main.py`, the app renders
them on a customizable grid, and the user can place, rotate, resize, and save the
layout back to the Pico.

The app is built for Teknologiskolen-style classroom projects: students can start
from a bundled `main.py`, install the required MicroPython files, connect over
Bluetooth, and then arrange a project-specific control panel.

## What This Repo Contains

- A Vite + React + TypeScript app that runs entirely in the browser.
- A layered BLE stack in `src/ble/`: GATT transport, reliable stream framing,
  handshake, layout transfer, file transfer, and control messages.
- A browser Pico IDE for USB Serial setup and BLE file editing.
- MicroPython firmware and example projects in `firmware/`.
- Static hosting configuration for GitHub Pages.

## Supported Control Panel Elements

The current layout/control vocabulary has four element types:

- `button`: sends `button,<NAME>` when pressed.
- `slider`: sends `slider,<NAME>:<VALUE>` while dragged.
- `toggle`: sends `toggle,<NAME>:0/1` and can receive
  `toggle_state,<NAME>,0/1` from the Pico to stay synchronized.
- `radar`: receives `radar,<NAME>,<ANGLE_DEGREES>,<DISTANCE_CM>` from the Pico
  and displays a fitted radar/sonar sector with fading pings.

All four elements can be declared by the Pico, added to the grid, moved, resized,
rotated, and saved in `Layout.txt`.

## Example Firmware Programs

The installer currently offers three example `/main.py` programs:

- `firmware/OnboardLED/main.py`
  - Demonstrates buttons and sliders with the Pico W onboard LED.
  - Good first test because it needs no external hardware.
- `firmware/TankControl/main.py`
  - Demonstrates two `-100..100` recentering sliders for a two-motor robot car.
  - Uses `PicoRobotics.py`.
- `firmware/RadarControl/main.py`
  - Demonstrates a toggle and radar telemetry.
  - Uses a servo on the Kitronik board plus an HC-SR04 distance sensor through
    `PicoRobotics.py` and `hcsr04.py`.

Install exactly one program variant as `/main.py`, plus the libraries that program
imports.

## End-To-End Workflow

1. Open the app on a laptop/desktop browser that supports Web Serial and Web
   Bluetooth, such as Chrome or Edge.

2. Create a local username on first launch.
   - The app stores the username and generated `userID` in browser storage only.
   - There is no backend.

3. Open Pico IDE from the dashboard.

4. Put MicroPython on the Pico W if needed.
   - Hold BOOTSEL while plugging in the Pico.
   - The Pico appears as `RPI-RP2`.
   - Use the bundled `RPI_PICO_W.uf2` guidance/download flow.
   - After copying the UF2, the Pico reboots into MicroPython.

5. Connect to the Pico through Web Serial in Pico IDE.

6. Install a starter program and required libraries.
   - Pick one program variant:
     - `OnboardLED/main.py`
     - `TankControl/main.py`
     - `RadarControl/main.py`
   - Install shared/runtime files such as `BLEPeripheral.py`.
   - Install project libraries such as `PicoRobotics.py`, `hcsr04.py`, or
     `neopixel.py` when the selected program imports them.
   - Program variants install as `/main.py`.
   - Libraries install at the Pico filesystem root.

7. Leave Pico IDE and connect over Bluetooth.
   - The Pico advertises as `PicoW-<device_base_name>`.
   - Use the dashboard connect/search flow.
   - Browser Bluetooth selection must be triggered by a user gesture.

8. Claim or open the device.
   - On first BLE connection, the Pico is unowned and the app shows the Create
     Device flow.
   - Choose icon, sharing permissions, and grid size.
   - After creation, ownership/settings are persisted on the Pico in
     `DeviceSettings.txt`.

9. Load and arrange the control panel.
   - The app requests the Pico layout.
   - `main.py` is the source of truth for which controls exist.
   - `Layout.txt` stores placement, rotation, and size.
   - Unplaced controls appear in the Add modal.
   - Edit mode lets the user drag, resize, rotate, delete from layout, and save.

10. Use the control panel.
    - Buttons, sliders, and toggles send commands from app to Pico.
    - Radar receives sensor telemetry from Pico to app.
    - Toggle state can be reported back by the Pico with `send_toggle_state` so
      reconnects and Pico-side state changes are reflected in the UI.

11. Iterate on code.
    - Open Pico IDE from an active BLE control-panel session to inspect/edit
      files.
    - Saving `/main.py` over BLE writes the file to disk but does not restart the
      running MicroPython process.
    - Use the restart/apply prompt to reboot the Pico and run the new `/main.py`.
    - The app treats that disconnect as expected and attempts to reconnect.

12. Recover through USB when needed.
    - If broken user code prevents BLE reconnect, return to USB Serial Pico IDE.
    - Reinstall a known-good `main.py` and `BLEPeripheral.py`.

## Declaring Controls In `main.py`

Controls are declared with a tuple named `BluetoothControls`:

```python
BluetoothControls = (
    ('button', 'LED ON'),
    ('slider', 'SPEED', 0, 100, 'none'),
    ('toggle', 'SCAN', 0),
    ('radar', 'RADAR', 45, 135, 200, 1500),
)
```

Control names must be 14 characters or fewer. They must match the names checked
inside the friendly callbacks:

```python
def on_button(name):
    if name == 'LED ON':
        led.on()

def on_slider(name, value):
    if name == 'SPEED':
        motor_speed = int(value)

def on_toggle(name, value):
    if name == 'SCAN':
        scan_enabled = value

ble = BLEPeripheral(
    base_controls=BluetoothControls,
    device_base_name='MitProjekt',
    callbacks=globals(),
)
```

The `callbacks=globals()` part lets `BLEPeripheral` find `on_button`,
`on_slider`, `on_toggle`, `on_connect`, and `on_disconnect` in `main.py`.
For advanced projects, the explicit setup methods such as
`ble.on_slider(callback)` and `ble.on_write(callback)` are still available.

For toggle state synchronization:

```python
SCAN_INITIAL = 0

BluetoothControls = (
    ('toggle', 'SCAN', SCAN_INITIAL),
)

scan_enabled = SCAN_INITIAL == 1

def on_connect():
    ble.send_toggle_state('SCAN', scan_enabled)
```

For radar telemetry:

```python
ble.send_radar('RADAR', scan_angle, distance_cm)
```

## Local Development

1. `npm install`
2. `npm run dev`
3. `npm run build`

The static build is written to `dist/`.

## Browser Support

- Android: Chrome supports Web Bluetooth for control-panel use.
- iPhone/iPad: iOS Safari does not support Web Bluetooth. Use a compatible
  browser such as Bluefy for controller use.
- Desktop Chrome/Edge/Chromebook: primary target for Pico IDE setup because Web
  Serial is required.

## BLE Contract

- Service UUID: `b8e06067-62ad-41ba-9231-206ae80ab551`
- Write, app to Pico: `f897177b-aee8-4767-8ecc-cc694fd5fce0`
- Notify, Pico to app: `f897177b-aee8-4767-8ecc-cc694fd5fce1`
- Advertised name: `PicoW-<base>`

Device replies use the reliable stream framing implemented by
`firmware/BLEPeripheral.py` and `src/ble/reliableStream.ts`.

## GitHub Pages

Vite is configured with `base: './'`. The GitHub Actions workflow builds and
deploys `dist/` on pushes to `main`. In repository settings, Pages should use
GitHub Actions as the source.

## More Documentation

- `DESIGN_NOTES.md`: architecture and design notes.
- `docs/PICO_IDE_PIPELINE.md`: deeper Pico IDE setup, BLE editing, restart, and
  reconnect details.
- `RESULT.md`: manual testing checklist.
