from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral


led = Pin('LED', Pin.OUT)
led.off()


def on_write(message):
    parts = message.split(',', 1)
    if len(parts) != 2:
        print('Unknown message:', message)
        return

    kind, payload = parts

    if kind == 'button':
        led.value(1 - led.value())
        print('Button:', payload)
        ble.send('ok:' + payload + '\n')
    elif kind == 'slider':
        print('Slider:', payload)
        ble.send('ok:' + payload + '\n')
    else:
        print('Unknown command type:', kind)


def on_connect():
    led.on()


def on_disconnect():
    led.off()


ble = BLEPeripheral(
    device_base_name='Test',
    on_write=on_write,
    on_connect=on_connect,
    on_disconnect=on_disconnect,
)


while True:
    time.sleep_ms(200)