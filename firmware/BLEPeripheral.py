import ubluetooth
from micropython import const

SERVICE_UUID = ubluetooth.UUID('b8e06067-62ad-41ba-9231-206ae80ab551')
WRITE_UUID = ubluetooth.UUID('f897177b-aee8-4767-8ecc-cc694fd5fce0')
NOTIFY_UUID = ubluetooth.UUID('f897177b-aee8-4767-8ecc-cc694fd5fce1')

_IRQ_CENTRAL_CONNECT = const(1)
_IRQ_CENTRAL_DISCONNECT = const(2)
_IRQ_GATTS_WRITE = const(3)

_FLAG_READ = const(0x0002)
_FLAG_WRITE = const(0x0008)
_FLAG_NOTIFY = const(0x0010)


class BLEPeripheral:
    def __init__(self, device_base_name='Test', on_write=None, on_connect=None, on_disconnect=None):
        self.ble = ubluetooth.BLE()
        self.ble.active(True)
        self.ble.irq(self._irq)

        self.connected = False
        self.conn_handle = None
        self._write_buffer = ''
        self._on_write = on_write
        self._on_connect = on_connect
        self._on_disconnect = on_disconnect

        self.device_base_name = device_base_name

        service_definition = (
            SERVICE_UUID,
            (
                (WRITE_UUID, _FLAG_READ | _FLAG_WRITE),
                (NOTIFY_UUID, _FLAG_NOTIFY),
            ),
        )

        ((self.handle_write, self.handle_notify),) = self.ble.gatts_register_services((service_definition,))
        self._advertise()

    def _advertise(self):
        name = 'PicoW-' + self.device_base_name
        name_bytes = name.encode()
        name_payload = bytearray([len(name_bytes) + 1, 0x09]) + name_bytes
        adv_payload = bytearray([0x02, 0x01, 0x06]) + name_payload
        self.ble.gap_advertise(100_000, adv_payload)
        print('Advertising as:', name)

    def _restart_advertising(self):
        try:
            self._advertise()
        except Exception as exc:
            print('Failed to advertise:', exc)

    def _irq(self, event, data):
        if event == _IRQ_CENTRAL_CONNECT:
            self.conn_handle, _, _ = data
            self.connected = True
            self._write_buffer = ''
            print('BLE connected')
            if self._on_connect:
                self._on_connect()

        elif event == _IRQ_CENTRAL_DISCONNECT:
            self.connected = False
            self.conn_handle = None
            self._write_buffer = ''
            print('BLE disconnected')
            if self._on_disconnect:
                self._on_disconnect()
            self._restart_advertising()

        elif event == _IRQ_GATTS_WRITE:
            _, attr_handle = data
            if attr_handle != self.handle_write:
                return

            chunk = self.ble.gatts_read(self.handle_write).decode()
            self._write_buffer += chunk

            while '\n' in self._write_buffer:
                line, self._write_buffer = self._write_buffer.split('\n', 1)
                line = line.strip()
                if not line:
                    continue

                print('RX:', line)
                if self._on_write:
                    self._on_write(line)

    def send(self, message):
        if not self.connected or self.conn_handle is None:
            return

        try:
            payload = message.encode()
            self.ble.gatts_write(self.handle_notify, payload)
            self.ble.gatts_notify(self.conn_handle, self.handle_notify, payload)
            print('TX:', message.strip())
        except Exception as exc:
            print('Notify failed:', exc)