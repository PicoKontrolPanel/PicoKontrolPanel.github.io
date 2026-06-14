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
        if payload == 'ON':
            led.on()
            print('LED on')
            ble.send('ok:ON\n')
        elif payload == 'OFF':
            led.off()
            print('LED off')
            ble.send('ok:OFF\n')
        else:
            print('Unknown button command:', payload)
    else:
        print('Unknown command type:', kind)


def on_connect():
    print('BLE client connected')


def on_disconnect():
    led.off()
    print('BLE client disconnected')


ble = BLEPeripheral(
    device_base_name='LED',
    on_write=on_write,
    on_connect=on_connect,
    on_disconnect=on_disconnect,
)


while True:
    time.sleep_ms(200)