from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral


# Onboard LED is the only hardware this test firmware drives.
led = Pin('LED', Pin.OUT)
led.off()

led_enabled = False
blink_speed = 0
_blink_state = False

BluetoothControls = (
    ('button', 'TAEND'),
    ('button', 'SLUK'),
    ('slider', 'BLINK', 0, 100, 'none'),
)


def _blink_interval_ms(value):
    value = max(1, min(100, value))
    return int(900 - (value / 100) * 820)


def _set_led_enabled(value):
    global led_enabled, _blink_state
    led_enabled = bool(value)
    _blink_state = False
    led.value(1 if led_enabled else 0)


def handle_receive(msg):
    """Handle app commands: 'button,<NAME>' or 'slider,BLINK:<VALUE>'."""
    global blink_speed
    try:
        command_type, payload = msg.split(',', 1)
    except ValueError:
        print('Unknown message:', msg)
        return

    if command_type == 'button':
        if payload == 'TAEND':
            _set_led_enabled(True)
            print('LED on')
        elif payload == 'SLUK':
            _set_led_enabled(False)
            print('LED off')
        else:
            print('Unknown button command:', payload)

    elif command_type == 'slider':
        try:
            name, value_s = payload.split(':', 1)
            value = int(float(value_s))
        except ValueError:
            print('Bad slider payload:', payload)
            return

        if name == 'BLINK':
            blink_speed = max(0, min(100, value))
            print('Blink ->', blink_speed)
        else:
            print('Unknown slider:', name)

    else:
        print('Unknown command type:', command_type)


def on_connect():
    print('BLE client connected')


def on_disconnect():
    global blink_speed
    blink_speed = 0
    _set_led_enabled(False)
    print('BLE client disconnected')


ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='LED')
ble.on_write(handle_receive)
ble.on_connect(on_connect)
ble.on_disconnect(on_disconnect)


while True:
    if not led_enabled:
        led.off()
        time.sleep_ms(100)
    elif blink_speed > 0:
        _blink_state = not _blink_state
        led.value(1 if _blink_state else 0)
        time.sleep_ms(_blink_interval_ms(blink_speed))
    else:
        led.on()
        time.sleep_ms(100)
