from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral


# Den indbyggede LED er den eneste hardware, dette testprogram styrer.
led = Pin('LED', Pin.OUT)
led.off()

# Disse variabler husker, hvad LED'en skal gøre lige nu.
led_enabled = False
blink_speed = 0
_blink_state = False

# BluetoothControls bestemmer, hvilke kontroller appen viser.
# Navnene her skal passe med navnene i on_button og on_slider.
BluetoothControls = (
    ('button', 'TAEND'),
    ('button', 'SLUK'),
    ('slider', 'BLINK', 0, 100, 'none'),
)


def on_button(name):
    """Reager på knapper fra appen."""
    global led_enabled, _blink_state

    # Hvis appen sender "TAEND", tænder vi LED'en.
    if name == 'TAEND':
        led_enabled = True
        _blink_state = False
        led.on()
        print('LED on')

    # Hvis appen sender "SLUK", slukker vi LED'en.
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

    # BLINK-slideren sender et tal fra 0 til 100.
    if name == 'BLINK':
        blink_speed = int(value)
        print('Blink ->', blink_speed)
    else:
        print('Unknown slider:', name)


def on_connect():
    print('BLE client connected')


def on_disconnect():
    global led_enabled, blink_speed, _blink_state

    # Når appen afbryder, stopper vi blink og slukker LED'en.
    led_enabled = False
    blink_speed = 0
    _blink_state = False
    led.off()
    print('BLE client disconnected')


# callbacks=globals() gør, at BLEPeripheral kan finde funktionerne ovenfor.
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='LED', callbacks=globals())


while True:
    # Programmet kører hele tiden og vælger LED-opførsel ud fra variablerne.
    if not led_enabled:
        led.off()
        time.sleep_ms(100)
    elif blink_speed > 0:
        # Jo højere blink_speed er, jo kortere pause er der mellem blink.
        _blink_state = not _blink_state
        led.value(1 if _blink_state else 0)
        time.sleep_ms(int(900 - (blink_speed / 100) * 820))
    else:
        led.on()
        time.sleep_ms(100)
