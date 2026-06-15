from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral


# Onboard LED is the only hardware this test firmware drives.
led = Pin('LED', Pin.OUT)
led.off()

# Continuous blink speed set by the BLINK FART slider: 0 = off (steady), 1-100 = faster.
blink_speed = 0
_blink_state = False


# Controls this device declares to the app. Geometry is assigned by the layout
# editor; these start "uninitialized" (unplaced) so they appear in the Add menu
# until positioned and saved. Names must be <= 14 chars (MAX_NAME_LENGTH).
BluetoothControls = (
    ('button', 'LED ON'),
    ('button', 'LED OFF'),
    ('button', 'BLINK'),
    ('slider', 'BLINK FART'),
)


def _blink_interval_ms(value):
    """Map slider 1-100 to a blink half-period: 1 -> ~990 ms (slow), 100 -> 50 ms (fast)."""
    value = max(1, min(100, value))
    return int(1000 - (value / 100) * 950)


def handle_receive(msg):
    """Fire-and-forget control commands from the app: 'button,<NAME>' / 'slider,<NAME>:<VALUE>'."""
    global blink_speed
    try:
        command_type, payload = msg.split(',', 1)
    except ValueError:
        print('Unknown message:', msg)
        return

    if command_type == 'button':
        name = payload
        if name == 'LED ON':
            blink_speed = 0
            led.on()
            print('LED on')
        elif name == 'LED OFF':
            blink_speed = 0
            led.off()
            print('LED off')
        elif name == 'BLINK':
            for _ in range(3):
                led.on()
                time.sleep_ms(120)
                led.off()
                time.sleep_ms(120)
            print('LED blink')
        else:
            print('Unknown button command:', name)

    elif command_type == 'slider':
        # payload is '<NAME>:<VALUE>'.
        try:
            name, value_s = payload.split(':', 1)
            value = int(float(value_s))
        except ValueError:
            print('Bad slider payload:', payload)
            return
        if name == 'BLINK FART':
            blink_speed = max(0, min(100, value))
            print('Blink speed ->', blink_speed)
        else:
            print('Unknown slider:', name)

    else:
        print('Unknown command type:', command_type)


def on_connect():
    print('BLE client connected')


def on_disconnect():
    global blink_speed
    blink_speed = 0
    led.off()
    print('BLE client disconnected')


ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='LED')
ble.on_write(handle_receive)
ble.on_connect(on_connect)
ble.on_disconnect(on_disconnect)


while True:
    if blink_speed > 0:
        _blink_state = not _blink_state
        led.value(1 if _blink_state else 0)
        time.sleep_ms(_blink_interval_ms(blink_speed))
    else:
        time.sleep_ms(100)
