from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral
import PicoRobotics
from neopixel import Neopixel


# Status indicator
led = Pin("LED", Pin.OUT)

# Bluetooth 
BluetoothControls = (
    ("button", "STOP"),
    ("button", "FREM"),
    ("button", "TILBAGE"),
    ("button", "HOJRE"),
    ("button", "VENSTRE"),
    ("button", "TURBO"),
    ("button", "FOLG LINJE"),
    ("button", "CALIBRATE"),
)

# Neopixels
pixels = Neopixel(4, 0, 16, "GRB")
yellow = (255, 100, 0)
orange = (255, 50, 0)
green = (0, 255, 0)
blue = (0, 0, 255)
red = (255, 0, 0)
clear = (0, 0, 0)
ledState = "stop"

# Movement
board = PicoRobotics.KitronikPicoRobotics()
moveSpeed = 60
should_move = True
moveState = "fri"
shouldCalibrate = False

# Measurement
sensor1 = machine.ADC(27)
sensor2 = machine.ADC(26)

# Reset Button
reset_button = machine.Pin(15, machine.Pin.IN, machine.Pin.PULL_UP)
# (Pressed = LOW, Released = HIGH)

# Line Following
NEED_SAME   = 3       # must see the same thing this many times to "lock in"
SPEED       = 40      # normal driving speed (0-100)
DELAY_MS    = 2000      # loop delay
CAL_SAMPLES = 100     # how many readings to learn the floor level
CAL_SPEED   = 40      # speed during calibration (go slow & straight)
FLOOR_OFFSET = 15000   # try 500..2000 if the tape is very dark vs floor
last1 = None
last2 = None
same_count1 = 0
same_count2 = 0



def handle_receive(msg): # callback metode når besked modtages fra applikation
    global ledState, moveState, moveSpeed, shouldCalibrate
    command_type, payload = msg.split(",", 1)

    if command_type == "button":
        button_name = payload
        
        if moveState == "fri":
            
            if button_name == "STOP":
                board.motorOff(1)
                board.motorOff(2)
                ledState = "stop"
                
            elif button_name == "FREM":
                board.motorOn(1, "f", moveSpeed)
                board.motorOn(2, "f", moveSpeed)
                ledState = "frem"
                
            elif button_name == "TILBAGE":
                board.motorOn(1, "r", moveSpeed)
                board.motorOn(2, "r", moveSpeed)
                ledState = "tilbage"
                
            elif button_name == "VENSTRE":
                board.motorOn(1, "f", 0)
                board.motorOn(2, "f", moveSpeed)
                ledState = "venstre"
                
            elif button_name == "HOJRE":
                board.motorOn(1, "f", moveSpeed)
                board.motorOn(2, "f", 0)
                ledState = "hojre"
                
            elif button_name == "TURBO":
                if moveSpeed == 60:
                    moveSpeed = 100
                elif moveSpeed == 100:
                    moveSpeed = 60
                    
        elif moveState == "linje":            
            if button_name == "CALIBRATE":
                if shouldCalibrate == False:
                    shouldCalibrate = True
            
        if button_name == "FOLG LINJE":
            if moveState == "fri":
                moveState = "linje"
            elif moveState == "linje":
                moveState = "fri"

        else:
            print("Unknown button command:", button_name)
            
    else:
        print("Unknown command type:", command_type)


def handle_send(msg: str): # Hjælper metode til at sende information til applikationen (evt sensor data)
    if ble_peripheral.connected:
        ble_peripheral.send(msg)

def on_connect(): # callback metode når en applikation forbinder til Picoen
    led.on()
    print("BLE client connected!")

def on_disconnect(): # callback metode når en applikation frakobler fra Picoen
    led.off()
    board.motorOff(1)
    board.motorOff(2)
    print("BLE client disconnected!")


ble_peripheral = BLEPeripheral(base_controls=BluetoothControls, device_base_name="AllInOne")
ble_peripheral.on_write(handle_receive)
ble_peripheral.on_connect(on_connect)
ble_peripheral.on_disconnect(on_disconnect)


def pixelsFrem():
    pixels.fill(green)
    pixels.show()
    time.sleep_ms(200)
    pixels.fill(clear)
    pixels.show()
    
def pixelsTilbage():
    pixels.fill(red)
    pixels.show()
    time.sleep_ms(200)
    pixels.fill(clear)
    pixels.show()
    
def pixelsHojre():
    pixels.fill(clear)
    pixels.show()
    pixels.set_pixel(0, yellow)
    pixels.show()
    time.sleep_ms(200)
    pixels.set_pixel(1, yellow)
    pixels.show()
    time.sleep_ms(200)
    pixels.set_pixel(2, yellow)
    pixels.show()
    time.sleep_ms(200)
    pixels.set_pixel(3, yellow)
    pixels.show()
    time.sleep_ms(200)
    
def pixelsVenstre():
    pixels.fill(clear)
    pixels.show()
    pixels.set_pixel(3, yellow)
    pixels.show()
    time.sleep_ms(200)
    pixels.set_pixel(2, yellow)
    pixels.show()
    time.sleep_ms(200)
    pixels.set_pixel(1, yellow)
    pixels.show()
    time.sleep_ms(200)
    pixels.set_pixel(0, yellow)
    pixels.show()
    time.sleep_ms(200)

pixels.brightness(50)
pixels.fill(clear)
pixels.show()

def calibrate_floor_level():
    """
    Drive forward a little, read both sensors CAL_SAMPLES times,
    and set FLOOR_LEVEL to the average (both sensors combined).
    """
    print("Calibration: starting...")
    total = 0
    count = 0

    # move forward slowly while collecting samples
    board.motorOn(1, "f", CAL_SPEED)
    board.motorOn(2, "f", CAL_SPEED)

    for _ in range(CAL_SAMPLES):
        r1 = sensor1.read_u16()
        r2 = sensor2.read_u16()
        total += r1 + r2
        count += 2
        # small delay so we don't read *too* fast
        time.sleep_ms(10)

    # stop briefly after calibration
    board.motorOff(1)
    board.motorOff(2)
    
    time.sleep(1)

    avg = total // count  # average floor level
    level = max(0, min(65535, avg - FLOOR_OFFSET))  # clamp to ADC range, apply optional offset

    print("Calibration: average floor =", avg, "-> FLOOR_LEVEL =", level)
    print("Calibration: done!\n")
    return level

# --- Do the calibration once at startup ---
FLOOR_LEVEL = calibrate_floor_level()

while True:
    while True:
        if ledState == "stop":
            pixels.fill(red)
            pixels.show()
        elif ledState == "frem":
            pixelsFrem()
        elif ledState == "tilbage":
            pixelsTilbage()
        elif ledState == "venstre":
            pixelsVenstre()
        elif ledState == "hojre":
            pixelsHojre()
        time.sleep_ms(200)
        
        if moveState == "linje":
            break

    while True:
        ledState = "stop"
        pixels.fill(red)
        pixels.show()
        
        # Check if button is pressed (LOW)
        while reset_button.value() == 0:
            board.motorOff(1)
            board.motorOff(2)
            time.sleep(1)
            
        if shouldCalibrate == True:
            board.motorOff(1)
            board.motorOff(2)
            time.sleep(1)  # small delay so it doesn't trigger multiple times
            if reset_button.value() == 1:
                FLOOR_LEVEL = calibrate_floor_level()
                shouldCalibrate = False
                break
            
        # measure distance sensor
        
        
        read1 = sensor1.read_u16()
        read2 = sensor2.read_u16()

        now1 = read1 > FLOOR_LEVEL
        now2 = read2 > FLOOR_LEVEL

        if last1 is None:
            last1 = now1
            same_count1 = 1
        else:
            if now1 == last1:
                same_count1 += 1
            else:
                last1 = now1
                same_count1 = 1

        if same_count1 >= NEED_SAME and see_floor1 != last1:
            see_floor1 = last1

        if last2 is None:
            last2 = now2
            same_count2 = 1
        else:
            if now2 == last2:
                same_count2 += 1
            else:
                last2 = now2
                same_count2 = 1

        if same_count2 >= NEED_SAME and see_floor2 != last2:
            see_floor2 = last2

        print("ADC:", read1, read2,
              "| floor_level:", FLOOR_LEVEL,
              "| now:", "floor" if now1 else "tape", ",", "floor" if now2 else "tape",
              "| using:", "floor" if see_floor1 else "tape", ",", "floor" if see_floor2 else "tape")

        if should_move:
            if see_floor1 and see_floor2:
                # Go straight
                board.motorOn(1, "f", SPEED)
                board.motorOn(2, "f", SPEED)

            elif not see_floor1 and see_floor2:
                # Left sees tape -> turn right
                board.motorOn(1, "r", SPEED)
                board.motorOn(2, "f", SPEED)

            elif not see_floor1 and not see_floor2:
                # Both see tape -> go right or left and resume line following
                board.motorOff(1)
                board.motorOff(2)

            elif see_floor1 and not see_floor2:
                # Right sees tape -> turn left
                board.motorOn(1, "f", SPEED)
                board.motorOn(2, "r", SPEED)

        time.sleep_ms(10)
        
        if moveState == "fri":
            break



