from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral


# Den indbyggede LED er den eneste hardware, dette testprogram styrer.
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


def on_button(name):
    """Reager på knapper fra appen."""
    global led_enabled, _blink_state
    if name == 'TAEND':
        led_enabled = True
        _blink_state = False
        led.on()
        print('LED on')
    elif name == 'SLUK':
        led_enabled = False
        _blink_state = False
        led.off()
        print('LED off')
    else:
        print('Unknown button:', name)


def on_slider(name, value):
    """Reager på sliders fra appen."""
    global blink_speed
    if name == 'BLINK':
        blink_speed = int(value)
        print('Blink ->', blink_speed)
    else:
        print('Unknown slider:', name)


def on_connect():
    print('BLE client connected')


def on_disconnect():
    global led_enabled, blink_speed, _blink_state
    led_enabled = False
    blink_speed = 0
    _blink_state = False
    led.off()
    print('BLE client disconnected')


ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='LED')


while True:
    if not led_enabled:
        led.off()
        time.sleep_ms(100)
    elif blink_speed > 0:
        _blink_state = not _blink_state
        led.value(1 if _blink_state else 0)
        time.sleep_ms(int(900 - (blink_speed / 100) * 820))
    else:
        led.on()
        time.sleep_ms(100)
