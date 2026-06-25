from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral
from hcsr04 import HCSR04
import PicoRobotics


SERVO_MIN = 45
SERVO_MAX = 135
SERVO_STEP = 3
SERVO_SETTLE_MS = 60
RADAR_MAX_CM = 200
SCAN_INITIAL = 0

BluetoothControls = (
    ('toggle', 'SCAN', SCAN_INITIAL),
    ('radar', 'RADAR', SERVO_MIN, SERVO_MAX, RADAR_MAX_CM, 1600),
)


led = Pin('LED', Pin.OUT)
led.off()

board = PicoRobotics.KitronikPicoRobotics()
sensor = HCSR04(trigger_pin=2, echo_pin=3)

scan_enabled = SCAN_INITIAL == 1
scan_angle = SERVO_MIN
scan_direction = 1


def _clamp_distance(value):
    try:
        value = float(value)
    except:
        return RADAR_MAX_CM
    if value < 0:
        return 0
    if value > RADAR_MAX_CM:
        return RADAR_MAX_CM
    return value


def _reset_scan():
    global scan_enabled, scan_angle, scan_direction
    scan_enabled = False
    scan_angle = SERVO_MIN
    scan_direction = 1
    board.servoWrite(1, 90)
    ble.send_toggle_state('SCAN', False)


def handle_receive(msg):
    global scan_enabled
    try:
        command_type, payload = msg.split(',', 1)
    except ValueError:
        print('Unknown message:', msg)
        return

    if command_type != 'toggle':
        print('Unknown command type:', command_type)
        return

    try:
        name, value_s = payload.split(':', 1)
    except ValueError:
        print('Bad toggle payload:', payload)
        return

    if name == 'SCAN':
        scan_enabled = int(float(value_s)) == 1
        ble.send_toggle_state('SCAN', scan_enabled)
        print('Scan ->', scan_enabled)
    else:
        print('Unknown toggle:', name)


def on_connect():
    led.on()
    _reset_scan()
    print('BLE client connected')


def on_disconnect():
    led.off()
    _reset_scan()
    print('BLE client disconnected')


ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='Radar')
ble.on_write(handle_receive)
ble.on_connect(on_connect)
ble.on_disconnect(on_disconnect)


while True:
    if not scan_enabled or not ble.connected:
        time.sleep_ms(100)
        continue

    board.servoWrite(1, scan_angle)
    time.sleep_ms(SERVO_SETTLE_MS)

    try:
        distance = _clamp_distance(sensor.distance_cm())
        print('Radar:', scan_angle, distance, 'cm')
        ble.send_radar('RADAR', scan_angle, distance)
    except Exception as e:
        print('Distance read failed:', e)

    scan_angle += SERVO_STEP * scan_direction
    if scan_angle >= SERVO_MAX:
        scan_angle = SERVO_MAX
        scan_direction = -1
    elif scan_angle <= SERVO_MIN:
        scan_angle = SERVO_MIN
        scan_direction = 1
