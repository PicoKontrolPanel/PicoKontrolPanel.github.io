import blePeripheralSource from '../../firmware/BLEPeripheral.py?raw';
import hcsr04Source from '../../firmware/hcsr04.py?raw';
import mainSource from '../../firmware/main.py?raw';
import picoRoboticsSource from '../../firmware/PicoRobotics.py?raw';

export interface RuntimeFile {
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
    path: '/BLEPeripheral.py',
    label: 'BLEPeripheral.py',
    description: 'Bluetooth-biblioteket der får Picoen til at tale med appen.',
    kind: 'library',
    content: blePeripheralSource,
  },
  {
    path: '/main.py',
    label: 'main.py',
    description: 'Startprogrammet der kører når Picoen tændes.',
    kind: 'program',
    content: mainSource,
  },
  {
    path: '/PicoRobotics.py',
    label: 'PicoRobotics.py',
    description: 'Bibliotek til Kitronik Pico Robotics Board.',
    kind: 'library',
    content: picoRoboticsSource,
  },
  {
    path: '/hcsr04.py',
    label: 'hcsr04.py',
    description: 'Bibliotek til HC-SR04 ultralyds-afstandssensor.',
    kind: 'library',
    content: hcsr04Source,
  },
];
