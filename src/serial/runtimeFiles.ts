import blePeripheralSource from '../../firmware/BLEPeripheral.py?raw';
import mainSource from '../../firmware/main.py?raw';

export interface RuntimeFile {
  path: string;
  label: string;
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
    content: blePeripheralSource,
  },
  {
    path: '/main.py',
    label: 'main.py',
    content: mainSource,
  },
];
