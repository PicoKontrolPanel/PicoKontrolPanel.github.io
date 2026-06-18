from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral


# Onboard LED is the only hardware this test firmware drives.
led = Pin('LED', Pin.OUT)
led.off()

# Continuous blink settings controlled by sliders.
# BLINK FART controls overall cycle speed.
# BLINK TAENDT / BLINK SLUKKET control the on/off time ratio.
blink_speed = 0
blink_on_weight = 50
blink_off_weight = 50
blink_bias = 0
blink_pause = False
blink_gate = 100
_blink_state = False


# Controls this device declares to the app. Geometry is assigned by the layout
# editor; these start "uninitialized" (unplaced) so they appear in the Add menu
# until positioned and saved. Names must be <= 14 chars (MAX_NAME_LENGTH).
# Sliders may be declared as:
#   ('slider', 'NAME', min_value, max_value, recenter)
# recenter: 'none', 'bottom', 'middle', or 'top'.
BluetoothControls = (
    ('button', 'LED ON'),
    ('button', 'LED OFF'),
    ('button', 'BLINK'),
    # Persistent sliders.
    ('slider', 'BLINK FART', 0, 100, 'none'),
    ('slider', 'BLINK TAENDT', 5, 95, 'none'),
    ('slider', 'BLINK SLUKKET', 5, 95, 'none'),
    # Momentary sliders demonstrating each recenter mode.
    ('slider', 'PAUSE TRYK', 0, 100, 'bottom'),
    ('slider', 'BLINK BIAS', -50, 50, 'middle'),
    ('slider', 'BLINK GATE', 0, 100, 'top'),
)


def _blink_cycle_ms(value):
    """Map slider 1-100 to a full blink cycle: 1 -> slow, 100 -> fast."""
    value = max(1, min(100, value))
    return int(1800 - (value / 100) * 1620)


def _blink_durations_ms():
    """Split the cycle into on/off durations from persistent weights + momentary bias."""
    on_weight = max(1, blink_on_weight + blink_bias)
    off_weight = max(1, blink_off_weight - blink_bias)
    total = on_weight + off_weight
    cycle = _blink_cycle_ms(blink_speed)
    on_ms = max(25, int(cycle * on_weight / total))
    off_ms = max(25, cycle - on_ms)
    return on_ms, off_ms


def handle_receive(msg):
    """Fire-and-forget control commands from the app: 'button,<NAME>' / 'slider,<NAME>:<VALUE>'."""
    global blink_speed, blink_on_weight, blink_off_weight, blink_bias, blink_pause, blink_gate
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
        elif name == 'BLINK TAENDT':
            blink_on_weight = max(5, min(95, value))
            print('Blink on weight ->', blink_on_weight)
        elif name == 'BLINK SLUKKET':
            blink_off_weight = max(5, min(95, value))
            print('Blink off weight ->', blink_off_weight)
        elif name == 'PAUSE TRYK':
            blink_pause = value > 50
            print('Blink pause ->', blink_pause)
        elif name == 'BLINK BIAS':
            blink_bias = max(-50, min(50, value))
            print('Blink bias ->', blink_bias)
        elif name == 'BLINK GATE':
            blink_gate = max(0, min(100, value))
            print('Blink gate ->', blink_gate)
        else:
            print('Unknown slider:', name)

    else:
        print('Unknown command type:', command_type)


def on_connect():
    print('BLE client connected')


def on_disconnect():
    global blink_speed, blink_bias, blink_pause, blink_gate
    blink_speed = 0
    blink_bias = 0
    blink_pause = False
    blink_gate = 100
    led.off()
    print('BLE client disconnected')


ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='LED')
ble.on_write(handle_receive)
ble.on_connect(on_connect)
ble.on_disconnect(on_disconnect)


while True:
    if blink_pause:
        led.off()
        time.sleep_ms(60)
    elif blink_gate < 50:
        led.on()
        time.sleep_ms(60)
    elif blink_speed > 0:
        _blink_state = not _blink_state
        led.value(1 if _blink_state else 0)
        on_ms, off_ms = _blink_durations_ms()
        time.sleep_ms(on_ms if _blink_state else off_ms)
    else:
        time.sleep_ms(100)
