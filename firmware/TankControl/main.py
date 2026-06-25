from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral
import PicoRobotics


# Simple tank-drive firmware for a two-motor robot car.
# Each slider sends -100..100 and recenters to 0 when released.
DEADZONE = 10

BluetoothControls = (
    ('slider', 'VENSTRE MOTOR', -100, 100, 'middle'),
    ('slider', 'HOJRE MOTOR', -100, 100, 'middle'),
)


led = Pin('LED', Pin.OUT)
led.off()

board = PicoRobotics.KitronikPicoRobotics()
left_speed = 0
right_speed = 0


def _clamp_speed(value):
    try:
        value = int(float(value))
    except:
        value = 0
    value = max(-100, min(100, value))
    if -DEADZONE <= value <= DEADZONE:
        return 0
    return value


def _drive_motor(motor, value):
    value = _clamp_speed(value)
    if value > 0:
        board.motorOn(motor, 'f', value)
    elif value < 0:
        board.motorOn(motor, 'r', -value)
    else:
        board.motorOff(motor)


def _stop_motors():
    global left_speed, right_speed
    left_speed = 0
    right_speed = 0
    board.motorOff(1)
    board.motorOff(2)


def handle_receive(msg):
    """Handle control commands from the app: 'slider,<NAME>:<VALUE>'."""
    global left_speed, right_speed
    try:
        command_type, payload = msg.split(',', 1)
    except ValueError:
        print('Unknown message:', msg)
        return

    if command_type != 'slider':
        print('Unknown command type:', command_type)
        return

    try:
        name, value_s = payload.split(':', 1)
    except ValueError:
        print('Bad slider payload:', payload)
        return

    if name == 'VENSTRE MOTOR':
        left_speed = _clamp_speed(value_s)
        _drive_motor(1, left_speed)
        print('Left motor ->', left_speed)
    elif name == 'HOJRE MOTOR':
        right_speed = _clamp_speed(value_s)
        _drive_motor(2, right_speed)
        print('Right motor ->', right_speed)
    else:
        print('Unknown slider:', name)


def on_connect():
    led.on()
    print('BLE client connected')


def on_disconnect():
    led.off()
    _stop_motors()
    print('BLE client disconnected')


ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='TankBil')
ble.on_write(handle_receive)
ble.on_connect(on_connect)
ble.on_disconnect(on_disconnect)


while True:
    # BLE callbacks do the driving. Keep the script alive and leave CPU time
    # for the Bluetooth stack.
    time.sleep_ms(100)
