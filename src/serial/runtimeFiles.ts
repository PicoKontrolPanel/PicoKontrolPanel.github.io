import blePeripheralSource from '../../firmware/BLEPeripheral.py?raw';
import hcsr04Source from '../../firmware/hcsr04.py?raw';
import neopixelSource from '../../firmware/neopixel.py?raw';
import onboardLedMainSource from '../../firmware/OnboardLED/main.py?raw';
import picoRoboticsSource from '../../firmware/PicoRobotics.py?raw';
import radarControlMainSource from '../../firmware/RadarControl/main.py?raw';
import tankControlMainSource from '../../firmware/TankControl/main.py?raw';

export interface RuntimeFile {
  id: string;
  path: string;
  label: string;
  description: string;
  kind: 'library' | 'program';
  content: string;
}

export type RuntimeFileStatus = 'missing' | 'outdated' | 'ok' | 'unknown';

export interface RuntimeFileCheck extends RuntimeFile {
  status: RuntimeFileStatus;
  detail: string;
}

export const REQUIRED_RUNTIME_FILES: RuntimeFile[] = [
  {
    id: 'program:onboard-led',
    path: '/main.py',
    label: 'OnboardLED/main.py',
    description: 'Startprogram til den indbyggede LED på Pico W.',
    kind: 'program',
    content: onboardLedMainSource,
  },
  {
    id: 'program:tank-control',
    path: '/main.py',
    label: 'TankControl/main.py',
    description: 'Startprogram til robotbil med to motor-slidere.',
    kind: 'program',
    content: tankControlMainSource,
  },
  {
    id: 'program:radar-control',
    path: '/main.py',
    label: 'RadarControl/main.py',
    description: 'Startprogram til radar med servo, afstandssensor og scan-toggle.',
    kind: 'program',
    content: radarControlMainSource,
  },
  {
    id: 'library:ble-peripheral',
    path: '/BLEPeripheral.py',
    label: 'BLEPeripheral.py',
    description: 'Bluetooth-biblioteket der får Picoen til at tale med appen.',
    kind: 'library',
    content: blePeripheralSource,
  },
  {
    id: 'library:pico-robotics',
    path: '/PicoRobotics.py',
    label: 'PicoRobotics.py',
    description: 'Bibliotek til Kitronik Pico Robotics Board.',
    kind: 'library',
    content: picoRoboticsSource,
  },
  {
    id: 'library:hcsr04',
    path: '/hcsr04.py',
    label: 'hcsr04.py',
    description: 'Bibliotek til HC-SR04 ultralyds-afstandssensor.',
    kind: 'library',
    content: hcsr04Source,
  },
  {
    id: 'library:neopixel',
    path: '/neopixel.py',
    label: 'neopixel.py',
    description: 'Bibliotek til NeoPixel LED-strips og LED-ringe.',
    kind: 'library',
    content: neopixelSource,
  },
];
