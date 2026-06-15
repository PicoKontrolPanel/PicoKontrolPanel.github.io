from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral


# Onboard LED is the only hardware this test firmware drives.
led = Pin('LED', Pin.OUT)
led.off()


# Controls this device declares to the app. Geometry is assigned by the layout
# editor; these start "uninitialized" (unplaced) so they appear in the Add menu
# until positioned and saved. Names must be <= 14 chars (MAX_NAME_LENGTH).
BluetoothControls = (
    ('button', 'LED ON'),
    ('button', 'LED OFF'),
    ('button', 'BLINK'),
    ('slider', 'LYS'),
)


def handle_receive(msg):
    """Fire-and-forget control commands from the app: 'button,<NAME>' / 'slider,<NAME>:<VALUE>'."""
    try:
        command_type, payload = msg.split(',', 1)
    except ValueError:
        print('Unknown message:', msg)
        return

    if command_type == 'button':
        name = payload
        if name == 'LED ON':
            led.on()
            print('LED on')
        elif name == 'LED OFF':
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
        # payload is '<NAME>:<VALUE>'. Map LYS 0-100 to LED on/off at 50%.
        try:
            name, value_s = payload.split(':', 1)
            value = int(float(value_s))
        except ValueError:
            print('Bad slider payload:', payload)
            return
        if name == 'LYS':
            if value >= 50:
                led.on()
            else:
                led.off()
            print('LYS ->', value)
        else:
            print('Unknown slider:', name)

    else:
        print('Unknown command type:', command_type)


def on_connect():
    print('BLE client connected')


def on_disconnect():
    led.off()
    print('BLE client disconnected')


ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='AllInOne')
ble.on_write(handle_receive)
ble.on_connect(on_connect)
ble.on_disconnect(on_disconnect)


while True:
    time.sleep_ms(200)
