import ubluetooth
import utime as time
from micropython import const
import struct

__version__ = '0.6.0'
__author__ = 'Christian Brochner Rasmussen'

# --------------------- BLE UUIDs ---------------------
SERVICE_UUID     = ubluetooth.UUID("b8e06067-62ad-41ba-9231-206ae80ab551")
CHAR_UUID_WRITE  = ubluetooth.UUID("f897177b-aee8-4767-8ecc-cc694fd5fce0")
CHAR_UUID_NOTIFY = ubluetooth.UUID("f897177b-aee8-4767-8ecc-cc694fd5fce1")

_IRQ_CENTRAL_CONNECT    = const(1)
_IRQ_CENTRAL_DISCONNECT = const(2)
_IRQ_GATTS_WRITE        = const(3)

_FLAG_READ              = const(0x0002)
_FLAG_WRITE_NO_RESPONSE = const(0x0004)
_FLAG_WRITE             = const(0x0008)
_FLAG_NOTIFY            = const(0x0010)

# -------------------- Protocol defs ------------------
LAYOUT_VERSION         = 1
ALLOWED_COMMAND_TYPES  = ["button", "slider"]
MAX_NAME_LENGTH        = 14

# Files on-device
SETTINGS_FILE = "DeviceSettings.txt"
LAYOUT_FILE   = "Layout.txt"


class BLEPeripheral:
    """
    Full grid-layout protocol peripheral (web-app compatible).

    Handshake (app drives):
      - 'HELLO'                          -> 'ACK:HELLO'
      - 'who_are_you'                    -> 'unowned' | 'owned,<ownerID>,<iconID>'
      - 'ACK:ownership'                  -> 'READY:permission'  (staged, optional)
      - 'request_permission,<id>,<name>' -> 'perm,<canConnect>,<canEdit>'
                                            (denies + disconnects if private)
      - 'ACK:permission'                 -> (handshake complete)
      - 'create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>' -> 'ACK:create'

    Layout streaming:
      - 'request'  -> device streams '#VERSION,1', control lines, '__END__'
      - 'update'   -> 'ACK:update', then app streams 'update,...' lines + '__END__';
                      device saves and replies 'ACK: ...' + 'LAYOUT_SAVED'

    Control commands (fire-and-forget, routed to on_write callback):
      - 'button,<NAME>' / 'slider,<NAME>:<VALUE>'

    Every device->app reply is sent through the reliable stream framing
    (prep / ack:prep / numbered frames / miss), so the central must implement
    inbound reassembly even for single-line responses.

    NOTE: Advertising puts the SERVICE UUID in the primary advertisement (so a
    Web Bluetooth service filter matches) and the name in the scan response.
    Name is stable and derived ONLY from device_base_name.
    """

    def __init__(self, base_controls=None, device_base_name="Device"):
        # ---- BLE state
        self.ble = ubluetooth.BLE()
        self.ble.active(True)
        self.ble.irq(self._ble_irq)
        self.connected = False
        self.conn_handle = None

        # ---- Controls (base + current)
        self.base_controls = self._initialize_controls(base_controls) if base_controls else []
        self.controls = [dict(c) for c in self.base_controls]

        # ---- Device identity
        self.device_base_name = device_base_name  # ONLY source for GAP name

        # ---- Settings (ownership + metadata)
        self.owner_id = None
        self.owner_name = None
        self.icon_id = 0
        self.can_others_connect = 0
        self.can_others_edit = 0

        # ---- Session flags
        self._session_can_edit = False

        # ---- Files & buffers
        self._settings_file = SETTINGS_FILE
        self._layout_file = LAYOUT_FILE
        self._rx_layout_buffer = ""
        self._command_buffer = ""
        self._expecting_update = False
        self._in_reliable_stream_active = False
        self._in_reliable_expected_total = 0
        self._in_reliable_stream_id = 0
        self._in_reliable_parts = {}
        self._out_reliable_pending_lines = None
        self._out_reliable_waiting_ack = False
        self._out_reliable_stream_id = 0
        self._out_reliable_next_stream_id = 1
        self._out_reliable_cache = {}

        # ---- Callbacks for app-level logic
        self._on_write_callback = None
        self._on_connect_callback = None
        self._on_disconnect_callback = None

        # ---- Start up
        self._register_services()
        self.load_settings_from_file()
        self.load_layout_from_file()
        self._advertise()

    # -------------------- Small log helpers --------------------
    def _log_received(self, msg):
        try:
            print("Received:", msg.strip())
        except:
            print("Received:", msg)

    def _log_sent(self, msg):
        try:
            print("Sent:", msg.strip())
        except:
            print("Sent:", msg)

    # -------------------- Init helpers --------------------
    def _initialize_controls(self, base_controls):
        """Build a list of control dicts from tuples like [("button","A"),("slider","B")]."""
        result = []
        seen = set()
        for ctrl_type, name in base_controls:
            if ctrl_type not in ALLOWED_COMMAND_TYPES:
                print("Skipping invalid control type:", ctrl_type)
                continue
            if len(name) > MAX_NAME_LENGTH:
                print("Skipping too long name:", name)
                continue
            if name in seen:
                print("Skipping duplicate control name:", name)
                continue
            seen.add(name)
            result.append({
                "type": ctrl_type,
                "name": name,
                "x": None,        # grid centerX2 (half-cells)
                "y": None,        # grid centerY2 (half-cells)
                "width": None,    # grid spanX (cells)
                "height": None,   # grid spanY (cells)
                "rotation": 0     # 0/90/180/270
            })
        print("Initialized base controls:", len(result))
        return result

    def _register_services(self):
        BLE_SERVICE = (
            SERVICE_UUID,
            (
                (CHAR_UUID_WRITE,  _FLAG_WRITE | _FLAG_WRITE_NO_RESPONSE | _FLAG_READ),
                (CHAR_UUID_NOTIFY, _FLAG_NOTIFY),
            ),
        )
        ((self.handle_write, self.handle_notify),) = self.ble.gatts_register_services((BLE_SERVICE,))

    def _advertising_payload(self, name=None, services=None):
        payload = bytearray()

        def append_field(adv_type, value):
            payload.extend(struct.pack('BB', len(value) + 1, adv_type))
            payload.extend(value)

        # Flags: LE General Discoverable + BR/EDR Not Supported
        append_field(0x01, struct.pack('B', 0x06))
        if name:
            append_field(0x09, name.encode())
        if services:
            for uuid in services:
                append_field(0x07, bytes(uuid))
        return payload

    def _advertise(self):
        """
        Service UUID in the primary advertisement (so Web Bluetooth's service
        filter matches); the name goes in the scan response.
        """
        full_name = "PicoW-{}".format(self.device_base_name)
        adv_payload = self._advertising_payload(services=[SERVICE_UUID])
        resp_payload = self._advertising_payload(name=full_name)
        # 100 ms advertising interval (value in microseconds on RP2040 port)
        self.ble.gap_advertise(100_000, adv_payload, resp_data=resp_payload)
        print("Advertising as:", full_name)

    # -------------------- File I/O: Settings --------------------
    def load_settings_from_file(self):
        """Reads settings:
           VERSION,1 / ownerID,<str> / ownerName,<str> / iconID,<int>
           canOthersConnect,<0/1> / canOthersEdit,<0/1>
        """
        try:
            with open(self._settings_file, "r") as f:
                lines = [l.strip() for l in f.readlines() if l.strip()]

            for line in lines:
                parts = line.split(",", 1)
                if len(parts) != 2:
                    continue
                key, val = parts[0], parts[1]
                if key == "ownerID":
                    self.owner_id = val if val else None
                elif key == "ownerName":
                    self.owner_name = val if val else None
                elif key == "iconID":
                    try:
                        self.icon_id = int(val)
                    except:
                        self.icon_id = 0
                elif key == "canOthersConnect":
                    try:
                        self.can_others_connect = 1 if int(val) == 1 else 0
                    except:
                        self.can_others_connect = 0
                elif key == "canOthersEdit":
                    try:
                        self.can_others_edit = 1 if int(val) == 1 else 0
                    except:
                        self.can_others_edit = 0

            print("Settings loaded:",
                  self.owner_id, self.owner_name,
                  self.icon_id, self.can_others_connect, self.can_others_edit)
        except Exception as e:
            print("Settings not found or invalid. Using defaults. Err:", e)
            self.owner_id = None
            self.owner_name = None
            self.icon_id = 0
            self.can_others_connect = 0
            self.can_others_edit = 0
            self.save_settings_to_file("", "", 0, 0, 0)

    def save_settings_to_file(self, owner_id, owner_name, icon_id, can_connect, can_edit):
        # Enforce rule: if connect==0 => edit==0
        if not can_connect:
            can_edit = 0
        try:
            with open(self._settings_file, "w") as f:
                f.write("VERSION,1\n")
                f.write("ownerID,{}\n".format(owner_id))
                f.write("ownerName,{}\n".format(owner_name))
                f.write("iconID,{}\n".format(icon_id))
                f.write("canOthersConnect,{}\n".format(1 if can_connect else 0))
                f.write("canOthersEdit,{}\n".format(1 if can_edit else 0))
            self.owner_id = owner_id if owner_id else None
            self.owner_name = owner_name if owner_name else None
            self.icon_id = int(icon_id)
            self.can_others_connect = 1 if can_connect else 0
            self.can_others_edit = 1 if can_edit else 0
            print("Settings saved.")
        except Exception as e:
            print("Error saving settings:", e)

    # -------------------- File I/O: Layout --------------------
    def save_layout_to_file(self):
        """Writes Layout.txt in grid format; 'n' for None."""
        try:
            with open(self._layout_file, "w") as f:
                f.write("#VERSION,{}\n".format(LAYOUT_VERSION))
                for ctrl in self.controls:
                    x = ctrl["x"] if ctrl["x"] is not None else "n"
                    y = ctrl["y"] if ctrl["y"] is not None else "n"
                    w = ctrl["width"] if ctrl["width"] is not None else "n"
                    h = ctrl["height"] if ctrl["height"] is not None else "n"
                    r = ctrl.get("rotation", 0)
                    f.write("{},{},{},{},{},{},{}\n".format(ctrl['type'], ctrl['name'], x, y, w, h, r))
            print("Layout saved successfully.")
            self.send_with_retry("ACK: Layout saved.\n", max_attempts=3)
        except Exception as e:
            print("Error saving layout:", e)
            self.send_with_retry("ERR: Failed to save layout.\n", max_attempts=3)

    def load_layout_from_file(self):
        """Loads Layout.txt and merges onto base controls."""
        try:
            with open(self._layout_file, "r") as f:
                lines = [l.strip() for l in f.readlines() if l.strip()]

            overrides = {}
            for line in lines:
                if line.startswith("#VERSION"):
                    continue
                parts = line.split(",")
                if len(parts) != 7:
                    print("Skipping malformed layout line:", line)
                    continue
                ctrl_type, name, x, y, w, h, r = parts

                def _to_val(s):
                    if s == "n":
                        return None
                    try:
                        return int(float(s))
                    except:
                        return None

                overrides[name] = {
                    "type": ctrl_type,
                    "name": name,
                    "x": _to_val(x),
                    "y": _to_val(y),
                    "width": _to_val(w),
                    "height": _to_val(h),
                    "rotation": int(float(r)) if r not in ("n", "") else 0
                }

            updated = []
            known = set()
            for base in self.base_controls:
                c = dict(base)
                if c["name"] in overrides:
                    c.update(overrides[c["name"]])
                updated.append(c)
                known.add(c["name"])
            for name, ov in overrides.items():
                if name not in known:
                    updated.append(ov)

            self.controls = updated
            print("Layout loaded. Controls:", len(self.controls))
        except Exception as e:
            print("Layout not found or invalid. Using base controls. Err:", e)
            self.controls = [dict(c) for c in self.base_controls]
            self.save_layout_to_file()

    # -------------------- BLE IRQ / I/O --------------------
    def _reset_protocol_state(self):
        self._session_can_edit = False
        self._rx_layout_buffer = ""
        self._command_buffer = ""
        self._expecting_update = False
        self._in_reliable_stream_active = False
        self._in_reliable_expected_total = 0
        self._in_reliable_stream_id = 0
        self._in_reliable_parts = {}
        self._out_reliable_pending_lines = None
        self._out_reliable_waiting_ack = False
        self._out_reliable_stream_id = 0
        self._out_reliable_cache = {}

    def _handle_disconnected(self, reason=""):
        self.connected = False
        self.conn_handle = None
        self._reset_protocol_state()
        print("Device disconnected" + (" ({})".format(reason) if reason else ""))
        if self._on_disconnect_callback:
            self._on_disconnect_callback()
        try:
            self._advertise()
        except Exception as e:
            print("Failed to restart advertising:", e)

    def _ble_irq(self, event, data):
        if event == _IRQ_CENTRAL_CONNECT:
            self.conn_handle, _, _ = data
            print("Device connected")
            self.connected = True
            self._reset_protocol_state()
            if self._on_connect_callback:
                self._on_connect_callback()

        elif event == _IRQ_CENTRAL_DISCONNECT:
            self._handle_disconnected("irq")

        elif event == _IRQ_GATTS_WRITE:
            conn_handle, attr_handle = data
            if attr_handle == self.handle_write:
                chunk = self.ble.gatts_read(self.handle_write).decode()
                self._command_buffer += chunk
                while "\n" in self._command_buffer:
                    msg, self._command_buffer = self._command_buffer.split("\n", 1)
                    msg = msg.strip()
                    if not msg:
                        continue
                    self._log_received(msg)
                    try:
                        self._process_inbound_line(msg)
                    except Exception as e:
                        print("Inbound processing error:", e)

    def send(self, msg, chunk_size=20, delay_ms=0):
        """Send over the notify characteristic, chunked to <= 20 bytes."""
        if not self.connected or self.conn_handle is None:
            print("No connected device to notify.")
            return
        try:
            data = msg.encode()
            for i in range(0, len(data), chunk_size):
                part = data[i:i + chunk_size]
                self.ble.gatts_write(self.handle_notify, part)
                self.ble.gatts_notify(self.conn_handle, self.handle_notify, part)
                if delay_ms > 0:
                    time.sleep_ms(delay_ms)
            self._log_sent(msg)
        except Exception as e:
            print("Notify failed:", e)

    def send_with_retry(self, msg, max_attempts=3, chunk_size=20):
        """Send an important protocol message, retrying on failure."""
        for attempt in range(1, max_attempts + 1):
            try:
                if not self.connected or self.conn_handle is None:
                    if attempt < max_attempts:
                        print("Send attempt {}/{} failed - not connected, retrying...".format(attempt, max_attempts))
                        time.sleep_ms(300)
                    continue

                data = msg.encode()
                for i in range(0, len(data), chunk_size):
                    part = data[i:i + chunk_size]
                    self.ble.gatts_write(self.handle_notify, part)
                    self.ble.gatts_notify(self.conn_handle, self.handle_notify, part)

                self._log_sent(msg)
                return True
            except Exception as e:
                print("Send attempt {}/{} failed: {}".format(attempt, max_attempts, e))
                if attempt < max_attempts:
                    time.sleep_ms(300)

        print("Send failed after {} attempts".format(max_attempts))
        return False

    # -------------------- Reliable stream (outbound) --------------------
    def _send_reliable_stream(self, payload_lines):
        if payload_lines is None or len(payload_lines) == 0:
            payload_lines = [""]

        total = len(payload_lines)
        self._out_reliable_pending_lines = list(payload_lines)
        self._out_reliable_waiting_ack = True
        stream_id = self._out_reliable_next_stream_id
        self._out_reliable_next_stream_id += 1
        self._out_reliable_stream_id = stream_id
        self._out_reliable_cache = {}
        self.send_with_retry("prep,{},{}\n".format(total, stream_id), max_attempts=3)

    def _flush_pending_reliable_stream(self):
        if not self._out_reliable_waiting_ack:
            return
        if self._out_reliable_pending_lines is None:
            self._out_reliable_waiting_ack = False
            return

        for i, payload in enumerate(self._out_reliable_pending_lines):
            frame = "{}-{}".format(i + 1, payload)
            self._out_reliable_cache[i + 1] = frame
            self.send_with_retry(frame + "\n", max_attempts=3)

        self._out_reliable_pending_lines = None
        self._out_reliable_waiting_ack = False

    def _try_parse_numbered_payload(self, msg):
        dash_idx = msg.find("-")
        if dash_idx <= 0:
            return None
        index_str = msg[:dash_idx]
        if not index_str.isdigit():
            return None
        idx = int(index_str)
        if idx < 1:
            return None
        return idx, msg[dash_idx + 1:]

    def _process_inbound_line(self, msg):
        if msg.startswith("prep,"):
            split_parts = msg.split(",")
            total = None
            stream_id = 0
            if len(split_parts) >= 2 and split_parts[1].isdigit():
                total = int(split_parts[1])
            if len(split_parts) >= 3 and split_parts[2].isdigit():
                stream_id = int(split_parts[2])

            if total is not None and total > 0:
                self._in_reliable_stream_active = True
                self._in_reliable_expected_total = total
                self._in_reliable_stream_id = stream_id
                self._in_reliable_parts = {}
                if stream_id > 0:
                    self.send_with_retry("ack:prep,{}\n".format(stream_id), max_attempts=3)
                else:
                    self.send_with_retry("ack:prep\n", max_attempts=3)
                return

        if msg == "ack:prep" or msg == "ACK:PREP" or msg == "ack:prep,{}".format(self._out_reliable_stream_id):
            self._flush_pending_reliable_stream()
            return

        if msg.startswith("miss,"):
            miss_parts = msg.split(",")
            if len(miss_parts) >= 3 and miss_parts[1].isdigit() and miss_parts[2].isdigit():
                stream_id = int(miss_parts[1])
                missing_idx = int(miss_parts[2])
                if stream_id == self._out_reliable_stream_id and missing_idx in self._out_reliable_cache:
                    self.send_with_retry(self._out_reliable_cache[missing_idx] + "\n", max_attempts=2)
            return

        parsed = self._try_parse_numbered_payload(msg)
        if parsed is not None:
            idx, payload = parsed

            if not self._in_reliable_stream_active:
                self._process_message(payload)
                return

            if idx not in self._in_reliable_parts:
                self._in_reliable_parts[idx] = payload

            missing_idx = 0
            for i in range(1, self._in_reliable_expected_total + 1):
                if i not in self._in_reliable_parts:
                    missing_idx = i
                    break
            if missing_idx > 0 and self._in_reliable_stream_id > 0 and idx > missing_idx:
                self.send_with_retry("miss,{},{}\n".format(self._in_reliable_stream_id, missing_idx), max_attempts=2)

            if len(self._in_reliable_parts) >= self._in_reliable_expected_total:
                for i in range(1, self._in_reliable_expected_total + 1):
                    line = self._in_reliable_parts.get(i)
                    if line is not None:
                        try:
                            self._process_message(line)
                        except Exception as e:
                            print("Reliable line handling error:", e)
                self._in_reliable_stream_active = False
                self._in_reliable_expected_total = 0
                self._in_reliable_stream_id = 0
                self._in_reliable_parts = {}
            return

        try:
            self._process_message(msg)
        except Exception as e:
            print("Message handling error:", e)

    # -------------------- Protocol handlers --------------------
    def _process_message(self, msg):
        if self._expecting_update and msg != "disconnect":
            if msg == "__END__":
                self._handle_full_layout_update(self._rx_layout_buffer)
                self._rx_layout_buffer = ""
                self._expecting_update = False
                return
            self._rx_layout_buffer += msg + "\n"
            return

        if msg == "HELLO":
            print("Received HELLO handshake")
            self._send_reliable_stream(["ACK:HELLO"])

        elif msg == "ACK:ownership":
            print("Phone acknowledged ownership response")
            self._send_reliable_stream(["READY:permission"])

        elif msg == "ACK:permission":
            print("Handshake complete")

        elif msg == "request":
            self.send_layout_to_unity()

        elif msg == "disconnect":
            self._send_reliable_stream(["ACK:disconnect"])
            if self.conn_handle is not None:
                try:
                    self.ble.gap_disconnect(self.conn_handle)
                except Exception as e:
                    print("gap_disconnect failed:", e)
                    self._handle_disconnected("gap_disconnect_failed")
            else:
                self._handle_disconnected("disconnect_without_handle")

        elif msg == "update":
            if not self._session_can_edit:
                self._send_reliable_stream(["ERR: Edit not permitted"])
                return
            self._send_reliable_stream(["ACK:update"])
            print("Begin receiving layout update...")
            self._expecting_update = True
            self._rx_layout_buffer = ""
            self._command_buffer = ""

        elif msg == "who_are_you":
            if self.owner_id:
                self._send_reliable_stream(["owned,{},{}".format(self.owner_id, int(self.icon_id))])
            else:
                self._send_reliable_stream(["unowned"])

        elif msg.startswith("request_permission,"):
            parts = msg.split(",")
            if len(parts) < 3:
                self._send_reliable_stream(["ERR: Malformed request_permission"])
                return
            requester_id = parts[1]

            if self.owner_id and requester_id == self.owner_id:
                self._session_can_edit = True
                self._send_reliable_stream(["perm,1,1"])
            else:
                if self.can_others_connect == 1:
                    self._session_can_edit = True if self.can_others_edit == 1 else False
                    self._send_reliable_stream(["perm,1,{}".format(1 if self._session_can_edit else 0)])
                else:
                    self._session_can_edit = False
                    self._send_reliable_stream(["perm,0,0"])
                    if self.conn_handle is not None:
                        try:
                            self.ble.gap_disconnect(self.conn_handle)
                        except Exception as e:
                            print("gap_disconnect after deny failed:", e)
                            self._handle_disconnected("deny_disconnect_failed")
                    else:
                        self._handle_disconnected("deny_without_handle")

        elif msg.startswith("create,"):
            parts = msg.split(",")
            if len(parts) < 6:
                self._send_reliable_stream(["ERR: Malformed create command"])
                return
            _, owner_id, owner_name, icon_id_s, can_connect_s, can_edit_s = parts[:6]
            try:
                icon_id = int(icon_id_s)
            except:
                icon_id = 0
            try:
                can_connect = 1 if int(can_connect_s) == 1 else 0
            except:
                can_connect = 0
            try:
                can_edit = 1 if int(can_edit_s) == 1 else 0
            except:
                can_edit = 0

            if can_connect == 0:
                can_edit = 0

            self.save_settings_to_file(owner_id, owner_name, icon_id, can_connect, can_edit)
            self._session_can_edit = True
            try:
                self._advertise()
            except Exception:
                pass
            self._send_reliable_stream(["ACK:create"])

        else:
            # Application commands ("button,STOP" / "slider,NAME:VALUE")
            if self._on_write_callback:
                try:
                    self._on_write_callback(msg)
                except Exception as e:
                    print("Write callback error:", e)

    def send_layout_to_unity(self):
        """Build and send layout payload once per request, ending with '__END__'."""
        lines = ["#VERSION,{}".format(LAYOUT_VERSION)]
        for ctrl in self.controls:
            if ctrl["type"] not in ALLOWED_COMMAND_TYPES:
                continue
            x = ctrl["x"] if ctrl["x"] is not None else "n"
            y = ctrl["y"] if ctrl["y"] is not None else "n"
            w = ctrl["width"] if ctrl["width"] is not None else "n"
            h = ctrl["height"] if ctrl["height"] is not None else "n"
            r = ctrl.get("rotation", 0)
            lines.append("{},{},{},{},{},{},{}".format(ctrl['type'], ctrl['name'], x, y, w, h, r))
        lines.append("__END__")
        self._send_reliable_stream(lines)
        print("[send_layout] Sent layout ({} controls)".format(len(self.controls)))

    def _handle_full_layout_update(self, raw_data):
        """Parses accumulated update lines and saves the layout."""
        if not self._session_can_edit:
            self._send_reliable_stream(["ERR: Edit not permitted"])
            return
        try:
            lines = [l.strip() for l in raw_data.strip().split("\n") if l.strip()]

            overrides = {}
            for line in lines:
                if line.startswith("update,"):
                    line = line[len("update,"):]
                parts = line.split(",")
                if len(parts) != 7:
                    print("Skipping malformed update line:", line)
                    continue
                ctrl_type, name, x, y, w, h, r = parts

                def _parse_or_none(s):
                    if s == "n":
                        return None
                    try:
                        return int(float(s))
                    except:
                        return None

                overrides[name] = {
                    "type": ctrl_type,
                    "name": name,
                    "x": _parse_or_none(x),
                    "y": _parse_or_none(y),
                    "width": _parse_or_none(w),
                    "height": _parse_or_none(h),
                    "rotation": int(float(r)) if r not in ("n", "") else 0
                }

            updated = []
            names = set()
            for base in self.base_controls:
                c = dict(base)
                if c["name"] in overrides:
                    c.update(overrides[c["name"]])
                updated.append(c)
                names.add(c["name"])
            for name, ov in overrides.items():
                if name not in names:
                    updated.append(ov)

            self.controls = updated
            self.save_layout_to_file()
            self._send_reliable_stream(["LAYOUT_SAVED"])
            print("Layout updated successfully.")
        except Exception as e:
            print("Error parsing layout update:", e)
            self._send_reliable_stream(["ERR: Failed to parse layout."])

    # -------------------- External hooks --------------------
    def on_write(self, callback):
        self._on_write_callback = callback

    def on_connect(self, callback):
        self._on_connect_callback = callback

    def on_disconnect(self, callback):
        self._on_disconnect_callback = callback
