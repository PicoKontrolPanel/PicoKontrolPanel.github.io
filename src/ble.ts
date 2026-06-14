const SERVICE_UUID = 'b8e06067-62ad-41ba-9231-206ae80ab551';
const WRITE_UUID = 'f897177b-aee8-4767-8ecc-cc694fd5fce0';
const NOTIFY_UUID = 'f897177b-aee8-4767-8ecc-cc694fd5fce1';

export type BluetoothStatus = 'unsupported' | 'idle' | 'connecting' | 'connected' | 'disconnecting' | 'error';

type StatusListener = (status: BluetoothStatus) => void;
type MessageListener = (message: string) => void;

const statusListeners = new Set<StatusListener>();
const messageListeners = new Set<MessageListener>();
const encoder = new TextEncoder();
const decoder = new TextDecoder();

let status: BluetoothStatus = isBluetoothSupported() ? 'idle' : 'unsupported';
let device: BluetoothDevice | null = null;
let writeCharacteristic: BluetoothRemoteGATTCharacteristic | null = null;
let notifyCharacteristic: BluetoothRemoteGATTCharacteristic | null = null;

function emitStatus(nextStatus: BluetoothStatus) {
  status = nextStatus;
  for (const listener of statusListeners) {
    listener(nextStatus);
  }
}

function emitMessage(message: string) {
  for (const listener of messageListeners) {
    listener(message);
  }
}

function resetConnectionState() {
  if (notifyCharacteristic) {
    notifyCharacteristic.removeEventListener('characteristicvaluechanged', handleNotification);
  }

  writeCharacteristic = null;
  notifyCharacteristic = null;
}

function handleDisconnected() {
  resetConnectionState();
  device = null;
  emitMessage('system: disconnected');
  emitStatus(isBluetoothSupported() ? 'idle' : 'unsupported');
}

function handleNotification(event: Event) {
  const target = event.target as BluetoothRemoteGATTCharacteristic | null;
  if (!target?.value) {
    return;
  }

  const text = decoder.decode(target.value.buffer);
  emitMessage(`rx: ${text.trimEnd()}`);
}

export function isBluetoothSupported() {
  return typeof navigator !== 'undefined' && 'bluetooth' in navigator;
}

export function getBluetoothStatus() {
  return status;
}

export function onBluetoothStatusChange(listener: StatusListener) {
  statusListeners.add(listener);
  listener(status);

  return () => {
    statusListeners.delete(listener);
  };
}

export function onBluetoothMessage(listener: MessageListener) {
  messageListeners.add(listener);

  return () => {
    messageListeners.delete(listener);
  };
}

async function writeLine(line: string) {
  if (!writeCharacteristic || getBluetoothStatus() !== 'connected') {
    throw new Error('No connected Pico is available.');
  }

  const payload = encoder.encode(`${line}\n`);
  await writeCharacteristic.writeValue(payload);
  emitMessage(`tx: ${line}`);
}

export async function connect() {
  if (!isBluetoothSupported()) {
    emitStatus('unsupported');
    throw new Error('Web Bluetooth is not available in this browser.');
  }

  emitStatus('connecting');

  try {
    device = await navigator.bluetooth.requestDevice({
      filters: [{ services: [SERVICE_UUID] }, { namePrefix: 'PicoW-' }],
      optionalServices: [SERVICE_UUID],
    });

    device.addEventListener('gattserverdisconnected', handleDisconnected);

    const server = await device.gatt?.connect();
    if (!server) {
      throw new Error('Failed to open the Bluetooth connection.');
    }

    const service = await server.getPrimaryService(SERVICE_UUID);
    writeCharacteristic = await service.getCharacteristic(WRITE_UUID);
    notifyCharacteristic = await service.getCharacteristic(NOTIFY_UUID);

    await notifyCharacteristic.startNotifications();
    notifyCharacteristic.addEventListener('characteristicvaluechanged', handleNotification);

    emitMessage(`system: connected to ${device.name ?? 'Pico'}`);
    emitStatus('connected');
  } catch (error) {
    resetConnectionState();
    device = null;
    emitStatus('error');
    throw error;
  }
}

export async function disconnect() {
  if (!device?.gatt?.connected) {
    handleDisconnected();
    return;
  }

  emitStatus('disconnecting');
  device.gatt.disconnect();
  handleDisconnected();
}

export function sendButton(name: string) {
  return writeLine(`button,${name}`);
}

export function sendSlider(name: string, value: number) {
  return writeLine(`slider,${name}:${value}`);
}