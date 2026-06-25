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
RADAR_DOT_DURATION = 1600

BluetoothControls = (
    ('toggle', 'SCAN', SCAN_INITIAL),
    ('radar', 'RADAR', SERVO_MIN, SERVO_MAX, RADAR_MAX_CM, RADAR_DOT_DURATION),
)


led = Pin('LED', Pin.OUT)
led.off()

board = PicoRobotics.KitronikPicoRobotics()
sensor = HCSR04(trigger_pin=2, echo_pin=3)

scan_enabled = SCAN_INITIAL == 1
scan_angle = SERVO_MIN
scan_direction = 1


def on_toggle(name, value):
    """Reager på toggle-knapper fra appen."""
    global scan_enabled
    if name == 'SCAN':
        scan_enabled = bool(value)
        ble.send_toggle_state('SCAN', scan_enabled)
        print('Scan ->', scan_enabled)
    else:
        print('Unknown toggle:', name)


def on_connect():
    global scan_enabled, scan_angle, scan_direction
    led.on()
    scan_enabled = False
    scan_angle = SERVO_MIN
    scan_direction = 1
    board.servoWrite(1, 90)
    ble.send_toggle_state('SCAN', False)
    print('BLE client connected')


def on_disconnect():
    global scan_enabled, scan_angle, scan_direction
    led.off()
    scan_enabled = False
    scan_angle = SERVO_MIN
    scan_direction = 1
    board.servoWrite(1, 90)
    ble.send_toggle_state('SCAN', False)
    print('BLE client disconnected')


ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='Radar')


while True:
    if not scan_enabled or not ble.connected:
        time.sleep_ms(100)
        continue

    board.servoWrite(1, scan_angle)
    time.sleep_ms(SERVO_SETTLE_MS)

    distance = sensor.distance_cm()
    print('Radar:', scan_angle, distance, 'cm')
    ble.send_radar('RADAR', scan_angle, distance)

    scan_angle += SERVO_STEP * scan_direction
    if scan_angle >= SERVO_MAX:
        scan_angle = SERVO_MAX
        scan_direction = -1
    elif scan_angle <= SERVO_MIN:
        scan_angle = SERVO_MIN
        scan_direction = 1
