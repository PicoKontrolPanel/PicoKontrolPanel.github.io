from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral
import PicoRobotics


# Simpelt tank-styringsprogram til en robotbil med to motorer.
# Hver slider sender -100..100 og går tilbage til 0, når den slippes.
BluetoothControls = (
    ('slider', 'VENSTRE MOTOR', -100, 100, 'middle'),
    ('slider', 'HOJRE MOTOR', -100, 100, 'middle'),
)


led = Pin('LED', Pin.OUT)
led.off()

board = PicoRobotics.KitronikPicoRobotics()


def on_slider(name, value):
    """Reager på sliders fra appen."""
    value = int(value)
    if name == 'VENSTRE MOTOR':
        if value > 0:
            board.motorOn(1, 'f', value)
        elif value < 0:
            board.motorOn(1, 'r', -value)
        else:
            board.motorOff(1)
        print('Left motor ->', value)
    elif name == 'HOJRE MOTOR':
        if value > 0:
            board.motorOn(2, 'f', value)
        elif value < 0:
            board.motorOn(2, 'r', -value)
        else:
            board.motorOff(2)
        print('Right motor ->', value)
    else:
        print('Unknown slider:', name)


def on_connect():
    led.on()
    print('BLE client connected')


def on_disconnect():
    led.off()
    board.motorOff(1)
    board.motorOff(2)
    print('BLE client disconnected')


ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='TankBil')


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
