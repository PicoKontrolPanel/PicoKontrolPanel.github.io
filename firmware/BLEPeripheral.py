import ubluetooth
import utime as time
from micropython import const
import struct
import os
import ubinascii
import machine

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
ALLOWED_COMMAND_TYPES  = ["button", "slider", "toggle", "radar"]
MAX_NAME_LENGTH        = 14
SLIDER_RECENTER_MODES  = ["none", "bottom", "middle", "top"]

# Files on-device
SETTINGS_FILE = "DeviceSettings.txt"
LAYOUT_FILE   = "Layout.txt"


class BLEPeripheral:
    """
    Full grid-layout protocol peripheral (web-app compatible).

    Handshake (app drives):
      - 'HELLO'                          -> 'ACK:HELLO'
      - 'who_are_you'                    -> 'unowned' | 'owned,<ownerID>,<iconID>,<canConnect>,<canEdit>,<ownerName>'
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
      - 'button,<NAME>' / 'slider,<NAME>:<VALUE>' / 'toggle,<NAME>:<0|1>'

    Telemetry (device -> app, optional from main.py):
      - 'radar,<NAME>,<ANGLE_DEGREES>,<DISTANCE_CM>'
      - 'toggle_state,<NAME>,<0|1>'

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
        self.grid_cols = 11
        self.grid_rows = 31

        # ---- Session flags
        self._session_can_edit = False
        self._session_is_owner = False

        # ---- Files & buffers
        self._settings_file = SETTINGS_FILE
        self._layout_file = LAYOUT_FILE
        self._rx_layout_buffer = ""
        self._command_buffer = ""
        self._expecting_update = False
        self._expecting_file_write = False
        self._file_write_path = None
        self._file_write_tmp = None
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

    def _protocol_field(self, value):
        if value is None:
            return ""
        try:
            return str(value).replace(",", " ").replace("\r", " ").replace("\n", " ").strip()
        except:
            return ""

    # -------------------- Init helpers --------------------
    def _initialize_controls(self, base_controls):
        """Build a list of control dicts from tuples like [("button","A"),("slider","B")]."""
        result = []
        seen = set()
        for spec in base_controls:
            ctrl_type = spec[0]
            name = spec[1]
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
            ctrl = {
                "type": ctrl_type,
                "name": name,
                "x": None,        # grid centerX2 (half-cells)
                "y": None,        # grid centerY2 (half-cells)
                "width": None,    # grid spanX (cells)
                "height": None,   # grid spanY (cells)
                "rotation": 0     # 0/90/180/270
            }
            if ctrl_type == "slider":
                ctrl["min"] = 0
                ctrl["max"] = 100
                ctrl["recenter"] = "none"
                if len(spec) >= 4:
                    try:
                        ctrl["min"] = int(spec[2])
                        ctrl["max"] = int(spec[3])
                    except:
                        ctrl["min"] = 0
                        ctrl["max"] = 100
                if ctrl["max"] == ctrl["min"]:
                    ctrl["max"] = ctrl["min"] + 1
                if len(spec) >= 5 and spec[4] in SLIDER_RECENTER_MODES:
                    ctrl["recenter"] = spec[4]
            elif ctrl_type == "toggle":
                ctrl["initial"] = 0
                if len(spec) >= 3:
                    try:
                        ctrl["initial"] = 1 if int(spec[2]) == 1 else 0
                    except:
                        ctrl["initial"] = 0
            elif ctrl_type == "radar":
                ctrl["minAngle"] = 0
                ctrl["maxAngle"] = 180
                ctrl["maxDistance"] = 200
                ctrl["fadeMs"] = 1200
                if len(spec) >= 4:
                    try:
                        ctrl["minAngle"] = int(float(spec[2]))
                        ctrl["maxAngle"] = int(float(spec[3]))
                    except:
                        ctrl["minAngle"] = 0
                        ctrl["maxAngle"] = 180
                if len(spec) >= 5:
                    try:
                        ctrl["maxDistance"] = max(1, int(float(spec[4])))
                    except:
                        ctrl["maxDistance"] = 200
                if len(spec) >= 6:
                    try:
                        ctrl["fadeMs"] = max(120, int(float(spec[5])))
                    except:
                        ctrl["fadeMs"] = 1200
            result.append(ctrl)
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
                elif key == "gridCols":
                    try:
                        self.grid_cols = max(2, min(60, int(val)))
                    except:
                        self.grid_cols = 11
                elif key == "gridRows":
                    try:
                        self.grid_rows = max(2, min(60, int(val)))
                    except:
                        self.grid_rows = 31

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

    def save_settings_to_file(self, owner_id, owner_name, icon_id, can_connect, can_edit,
                              grid_cols=None, grid_rows=None):
        # Enforce rule: if connect==0 => edit==0
        if not can_connect:
            can_edit = 0
        if grid_cols is None:
            grid_cols = self.grid_cols
        if grid_rows is None:
            grid_rows = self.grid_rows
        grid_cols = max(2, min(60, int(grid_cols)))
        grid_rows = max(2, min(60, int(grid_rows)))
        try:
            with open(self._settings_file, "w") as f:
                f.write("VERSION,1\n")
                f.write("ownerID,{}\n".format(owner_id))
                f.write("ownerName,{}\n".format(owner_name))
                f.write("iconID,{}\n".format(icon_id))
                f.write("canOthersConnect,{}\n".format(1 if can_connect else 0))
                f.write("canOthersEdit,{}\n".format(1 if can_edit else 0))
                f.write("gridCols,{}\n".format(grid_cols))
                f.write("gridRows,{}\n".format(grid_rows))
            self.owner_id = owner_id if owner_id else None
            self.owner_name = owner_name if owner_name else None
            self.icon_id = int(icon_id)
            self.can_others_connect = 1 if can_connect else 0
            self.can_others_edit = 1 if can_edit else 0
            self.grid_cols = grid_cols
            self.grid_rows = grid_rows
            print("Settings saved.")
        except Exception as e:
            print("Error saving settings:", e)

    # -------------------- File I/O: Layout --------------------
    def _merge_base_with_layout_override(self, base, override):
        """Keep layout placement from Layout.txt, but use main.py controls as truth."""
        ctrl = dict(base)
        for key in ("x", "y", "width", "height", "rotation"):
            if key in override:
                ctrl[key] = override[key]
        return ctrl

    def save_layout_to_file(self, notify=True):
        """Writes Layout.txt in grid format; 'n' for None.

        Writes to a temp file and renames it into place so a power loss
        mid-write can never leave a half-written (corrupt) Layout.txt.
        """
        tmp_file = self._layout_file + ".tmp"
        try:
            with open(tmp_file, "w") as f:
                f.write("#VERSION,{}\n".format(LAYOUT_VERSION))
                for ctrl in self.controls:
                    x = ctrl["x"] if ctrl["x"] is not None else "n"
                    y = ctrl["y"] if ctrl["y"] is not None else "n"
                    w = ctrl["width"] if ctrl["width"] is not None else "n"
                    h = ctrl["height"] if ctrl["height"] is not None else "n"
                    r = ctrl.get("rotation", 0)
                    if ctrl["type"] == "slider":
                        mn = ctrl.get("min", 0)
                        mx = ctrl.get("max", 100)
                        recenter = ctrl.get("recenter", "none")
                        f.write("{},{},{},{},{},{},{},{},{},{}\n".format(
                            ctrl['type'], ctrl['name'], x, y, w, h, r, mn, mx, recenter))
                    elif ctrl["type"] == "toggle":
                        initial = 1 if ctrl.get("initial", 0) == 1 else 0
                        f.write("{},{},{},{},{},{},{},{}\n".format(
                            ctrl['type'], ctrl['name'], x, y, w, h, r, initial))
                    elif ctrl["type"] == "radar":
                        f.write("{},{},{},{},{},{},{},{},{},{},{}\n".format(
                            ctrl['type'], ctrl['name'], x, y, w, h, r,
                            ctrl.get("minAngle", 0),
                            ctrl.get("maxAngle", 180),
                            ctrl.get("maxDistance", 200),
                            ctrl.get("fadeMs", 1200)))
                    else:
                        f.write("{},{},{},{},{},{},{}\n".format(ctrl['type'], ctrl['name'], x, y, w, h, r))
            # Atomic swap. littlefs rename overwrites atomically; FAT needs the
            # destination removed first, so fall back to remove+rename there.
            try:
                os.rename(tmp_file, self._layout_file)
            except OSError:
                try:
                    os.remove(self._layout_file)
                except OSError:
                    pass
                os.rename(tmp_file, self._layout_file)
            print("Layout saved successfully.")
            if notify:
                self.send_with_retry("ACK: Layout saved.\n", max_attempts=3)
        except Exception as e:
            print("Error saving layout:", e)
            try:
                os.remove(tmp_file)
            except OSError:
                pass
            if notify:
                self.send_with_retry("ERR: Failed to save layout.\n", max_attempts=3)

    def load_layout_from_file(self):
        """Loads Layout.txt and merges onto base controls.

        Parsing is tolerant: a single bad line is skipped, never aborting the
        whole load. A genuinely missing file seeds defaults, but a file that
        exists yet fails to open is left untouched (never overwritten), so a
        recoverable file is not destroyed by a transient read error.
        """
        try:
            with open(self._layout_file, "r") as f:
                lines = [l.strip() for l in f.readlines() if l.strip()]
        except OSError as e:
            # No layout file yet (first boot): seed defaults on disk.
            print("Layout file not found, seeding defaults. Err:", e)
            self.controls = [dict(c) for c in self.base_controls]
            self.save_layout_to_file(notify=False)
            return
        except Exception as e:
            # File present but unreadable: fall back in memory only and leave
            # the file intact for inspection/recovery.
            print("Layout file unreadable, using base controls (file left intact). Err:", e)
            self.controls = [dict(c) for c in self.base_controls]
            return

        def _to_val(s):
            if s == "n":
                return None
            try:
                return int(float(s))
            except:
                return None

        overrides = {}
        for line in lines:
            if line.startswith("#VERSION"):
                continue
            try:
                parts = line.split(",")
                if len(parts) < 7:
                    print("Skipping malformed layout line:", line)
                    continue
                ctrl_type, name, x, y, w, h, r = parts[:7]

                override = {
                    "type": ctrl_type,
                    "name": name,
                    "x": _to_val(x),
                    "y": _to_val(y),
                    "width": _to_val(w),
                    "height": _to_val(h),
                    "rotation": int(float(r)) if r not in ("n", "") else 0
                }
                if ctrl_type == "slider":
                    override["min"] = 0
                    override["max"] = 100
                    override["recenter"] = "none"
                    if len(parts) >= 10:
                        try:
                            override["min"] = int(float(parts[7]))
                            override["max"] = int(float(parts[8]))
                        except:
                            override["min"] = 0
                            override["max"] = 100
                        if override["max"] == override["min"]:
                            override["max"] = override["min"] + 1
                        if parts[9] in SLIDER_RECENTER_MODES:
                            override["recenter"] = parts[9]
                elif ctrl_type == "toggle":
                    override["initial"] = 0
                    if len(parts) >= 8:
                        try:
                            override["initial"] = 1 if int(float(parts[7])) == 1 else 0
                        except:
                            override["initial"] = 0
                elif ctrl_type == "radar":
                    override["minAngle"] = 0
                    override["maxAngle"] = 180
                    override["maxDistance"] = 200
                    override["fadeMs"] = 1200
                    if len(parts) >= 11:
                        try:
                            override["minAngle"] = int(float(parts[7]))
                            override["maxAngle"] = int(float(parts[8]))
                            override["maxDistance"] = max(1, int(float(parts[9])))
                            override["fadeMs"] = max(120, int(float(parts[10])))
                        except:
                            override["minAngle"] = 0
                            override["maxAngle"] = 180
                            override["maxDistance"] = 200
                            override["fadeMs"] = 1200
                overrides[name] = override
            except Exception as e:
                print("Skipping bad layout line:", line, "err:", e)
                continue

        updated = []
        known = set()
        for base in self.base_controls:
            c = dict(base)
            if c["name"] in overrides:
                c = self._merge_base_with_layout_override(c, overrides[c["name"]])
            updated.append(c)
            known.add(c["name"])
        dropped = len([name for name in overrides if name not in known])

        self.controls = updated
        self.save_layout_to_file(notify=False)
        if dropped:
            print("Dropped stale layout controls:", dropped)
        print("Layout loaded. Controls:", len(self.controls))

    # -------------------- BLE IRQ / I/O --------------------
    def _reset_protocol_state(self):
        self._session_can_edit = False
        self._session_is_owner = False
        self._rx_layout_buffer = ""
        self._command_buffer = ""
        self._expecting_update = False
        self._expecting_file_write = False
        self._file_write_path = None
        self._file_write_tmp = None
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

    def send_with_retry(self, msg, max_attempts=3, chunk_size=20, chunk_gap_ms=3):
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
                    if i + chunk_size < len(data) and chunk_gap_ms > 0:
                        time.sleep_ms(chunk_gap_ms)

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
        if self._expecting_file_write and msg != "disconnect":
            if msg == "fs_write_end":
                self._finish_file_write()
                return
            if msg.startswith("fs_write_chunk,"):
                self._append_file_write_chunk(msg.split(",", 1)[1])
                return
            self._send_reliable_stream(["ERR: Unexpected file write data"])
            return

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

        elif msg.startswith("fs_list"):
            self._handle_fs_list(msg)

        elif msg == "fs_capabilities":
            self._handle_fs_capabilities()

        elif msg.startswith("fs_read_stream,"):
            self._handle_fs_read_stream(msg)

        elif msg.startswith("fs_read_page,"):
            self._handle_fs_read_page(msg)

        elif msg.startswith("fs_write_begin,"):
            self._handle_fs_write_begin(msg)

        elif msg.startswith("fs_delete,"):
            self._handle_fs_delete(msg)

        elif msg == "restart":
            self._send_reliable_stream(["ACK:restart"])
            time.sleep_ms(120)
            machine.reset()

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
                self._send_reliable_stream(["owned,{},{},{},{},{}".format(
                    self.owner_id,
                    int(self.icon_id),
                    int(self.can_others_connect),
                    int(self.can_others_edit),
                    self._protocol_field(self.owner_name),
                )])
            else:
                self._send_reliable_stream(["unowned"])

        elif msg.startswith("request_permission,"):
            parts = msg.split(",", 2)
            if len(parts) < 3:
                self._send_reliable_stream(["ERR: Malformed request_permission"])
                return
            requester_id = parts[1]
            requester_name = self._protocol_field(parts[2])

            if self.owner_id and requester_id == self.owner_id:
                if requester_name and requester_name != self.owner_name:
                    self.save_settings_to_file(
                        self.owner_id or "",
                        requester_name,
                        self.icon_id,
                        self.can_others_connect,
                        self.can_others_edit,
                        self.grid_cols,
                        self.grid_rows,
                    )
                self._session_can_edit = True
                self._session_is_owner = True
                self._send_reliable_stream(["perm,1,1"])
            else:
                self._session_is_owner = False
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
            # create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>[,<cols>,<rows>]
            parts = msg.split(",")
            if len(parts) < 6:
                self._send_reliable_stream(["ERR: Malformed create command"])
                return
            _, owner_id, owner_name, icon_id_s, can_connect_s, can_edit_s = parts[:6]
            owner_name = self._protocol_field(owner_name)
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

            grid_cols = self.grid_cols
            grid_rows = self.grid_rows
            if len(parts) >= 8:
                try:
                    grid_cols = int(parts[6])
                except:
                    pass
                try:
                    grid_rows = int(parts[7])
                except:
                    pass

            if can_connect == 0:
                can_edit = 0

            self.save_settings_to_file(owner_id, owner_name, icon_id, can_connect, can_edit,
                                       grid_cols, grid_rows)
            self._session_can_edit = True
            self._session_is_owner = True
            try:
                self._advertise()
            except Exception:
                pass
            self._send_reliable_stream(["ACK:create"])

        elif msg.startswith("settings_update,"):
            if not self._session_is_owner:
                self._send_reliable_stream(["ERR: Owner permission required"])
                return
            parts = msg.split(",")
            if len(parts) < 6:
                self._send_reliable_stream(["ERR: Malformed settings_update command"])
                return
            try:
                icon_id = int(parts[1])
            except:
                icon_id = self.icon_id
            try:
                can_connect = 1 if int(parts[2]) == 1 else 0
            except:
                can_connect = self.can_others_connect
            try:
                can_edit = 1 if int(parts[3]) == 1 else 0
            except:
                can_edit = self.can_others_edit
            try:
                grid_cols = int(parts[4])
            except:
                grid_cols = self.grid_cols
            try:
                grid_rows = int(parts[5])
            except:
                grid_rows = self.grid_rows
            owner_name = self.owner_name or ""
            if len(parts) >= 7:
                owner_name = self._protocol_field(parts[6]) or owner_name

            if can_connect == 0:
                can_edit = 0

            self.save_settings_to_file(
                self.owner_id or "",
                owner_name,
                icon_id,
                can_connect,
                can_edit,
                grid_cols,
                grid_rows,
            )
            try:
                self._advertise()
            except Exception:
                pass
            self._send_reliable_stream(["ACK:settings_update"])

        else:
            # Application commands ("button,STOP" / "slider,NAME:VALUE")
            if self._on_write_callback:
                try:
                    self._on_write_callback(msg)
                except Exception as e:
                    print("Write callback error:", e)

    def send_layout_to_unity(self):
        """Build and send layout payload once per request, ending with '__END__'."""
        lines = ["#VERSION,{}".format(LAYOUT_VERSION),
                 "#GRID,{},{}".format(self.grid_cols, self.grid_rows)]
        for ctrl in self.controls:
            if ctrl["type"] not in ALLOWED_COMMAND_TYPES:
                continue
            x = ctrl["x"] if ctrl["x"] is not None else "n"
            y = ctrl["y"] if ctrl["y"] is not None else "n"
            w = ctrl["width"] if ctrl["width"] is not None else "n"
            h = ctrl["height"] if ctrl["height"] is not None else "n"
            r = ctrl.get("rotation", 0)
            if ctrl["type"] == "slider":
                mn = ctrl.get("min", 0)
                mx = ctrl.get("max", 100)
                recenter = ctrl.get("recenter", "none")
                lines.append("{},{},{},{},{},{},{},{},{},{}".format(
                    ctrl['type'], ctrl['name'], x, y, w, h, r, mn, mx, recenter))
            elif ctrl["type"] == "toggle":
                initial = 1 if ctrl.get("initial", 0) == 1 else 0
                lines.append("{},{},{},{},{},{},{},{}".format(
                    ctrl['type'], ctrl['name'], x, y, w, h, r, initial))
            elif ctrl["type"] == "radar":
                lines.append("{},{},{},{},{},{},{},{},{},{},{}".format(
                    ctrl['type'], ctrl['name'], x, y, w, h, r,
                    ctrl.get("minAngle", 0),
                    ctrl.get("maxAngle", 180),
                    ctrl.get("maxDistance", 200),
                    ctrl.get("fadeMs", 1200)))
            else:
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
                if len(parts) < 7:
                    print("Skipping malformed update line:", line)
                    continue
                ctrl_type, name, x, y, w, h, r = parts[:7]

                def _parse_or_none(s):
                    if s == "n":
                        return None
                    try:
                        return int(float(s))
                    except:
                        return None

                override = {
                    "type": ctrl_type,
                    "name": name,
                    "x": _parse_or_none(x),
                    "y": _parse_or_none(y),
                    "width": _parse_or_none(w),
                    "height": _parse_or_none(h),
                    "rotation": int(float(r)) if r not in ("n", "") else 0
                }
                if ctrl_type == "slider" and len(parts) >= 10:
                    try:
                        override["min"] = int(float(parts[7]))
                        override["max"] = int(float(parts[8]))
                    except:
                        pass
                    if parts[9] in SLIDER_RECENTER_MODES:
                        override["recenter"] = parts[9]
                    if override.get("max") == override.get("min"):
                        override["max"] = override["min"] + 1
                elif ctrl_type == "toggle" and len(parts) >= 8:
                    try:
                        override["initial"] = 1 if int(float(parts[7])) == 1 else 0
                    except:
                        override["initial"] = 0
                elif ctrl_type == "radar" and len(parts) >= 11:
                    try:
                        override["minAngle"] = int(float(parts[7]))
                        override["maxAngle"] = int(float(parts[8]))
                        override["maxDistance"] = max(1, int(float(parts[9])))
                        override["fadeMs"] = max(120, int(float(parts[10])))
                    except:
                        pass
                overrides[name] = override

            updated = []
            names = set()
            for base in self.base_controls:
                c = dict(base)
                if c["name"] in overrides:
                    c = self._merge_base_with_layout_override(c, overrides[c["name"]])
                updated.append(c)
                names.add(c["name"])
            dropped = len([name for name in overrides if name not in names])

            self.controls = updated
            self.save_layout_to_file()
            self._send_reliable_stream(["LAYOUT_SAVED"])
            if dropped:
                print("Dropped stale layout controls:", dropped)
            print("Layout updated successfully.")
        except Exception as e:
            print("Error parsing layout update:", e)
            self._send_reliable_stream(["ERR: Failed to parse layout."])

    # -------------------- BLE file management --------------------
    def _clean_fs_path(self, raw):
        try:
            path = str(raw).strip().replace("\\", "/")
        except:
            path = ""
        if not path:
            return "/"
        if ".." in path:
            return ""
        if not path.startswith("/"):
            path = "/" + path
        return path

    def _path_for_open(self, path):
        return path[1:] if path.startswith("/") else path

    def _handle_fs_list(self, msg):
        parts = msg.split(",", 1)
        base = self._clean_fs_path(parts[1] if len(parts) > 1 else "/")
        if not base:
            self._send_reliable_stream(["ERR: Bad path", "__END__"])
            return
        open_base = self._path_for_open(base)
        if open_base == "":
            open_base = "."
        lines = []
        try:
            for name in os.listdir(open_base):
                path = (base.rstrip("/") + "/" + name) if base != "/" else "/" + name
                try:
                    st = os.stat(self._path_for_open(path))
                    mode = st[0]
                    kind = "dir" if (mode & 0x4000) else "file"
                    size = st[6]
                except:
                    kind = "unknown"
                    size = -1
                lines.append("fs_entry,{},{},{}".format(kind, path, size))
            lines.append("__END__")
            self._send_reliable_stream(lines)
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_list failed {}".format(e), "__END__"])

    def _handle_fs_capabilities(self):
        self._send_reliable_stream([
            "fs_capabilities,version,{},page_read,1,max_page,192,stream_read,1,stream_chunk,128".format(__version__),
            "__END__",
        ])

    def _handle_fs_read_stream(self, msg):
        parts = msg.split(",", 2)
        if len(parts) < 2:
            self._send_reliable_stream(["ERR: Bad fs_read_stream", "__END__"])
            return
        path = self._clean_fs_path(parts[1])
        if not path:
            self._send_reliable_stream(["ERR: Bad path", "__END__"])
            return
        try:
            chunk_size = 128
            if len(parts) >= 3:
                chunk_size = max(16, min(192, int(parts[2])))
        except:
            self._send_reliable_stream(["ERR: Bad fs_read_stream chunk", "__END__"])
            return
        try:
            open_path = self._path_for_open(path)
            total = os.stat(open_path)[6]
            checksum = 0
            offset = 0
            lines = ["fs_stream_begin,{},{},{}".format(path, total, chunk_size)]
            with open(open_path, "rb") as f:
                while True:
                    chunk = f.read(chunk_size)
                    if not chunk:
                        break
                    for b in chunk:
                        checksum = (checksum + b) & 0xFFFFFFFF
                    hex_data = ubinascii.hexlify(chunk).decode()
                    lines.append("fs_stream_chunk,{},{}".format(offset, hex_data))
                    offset += len(chunk)
            lines.append("fs_stream_end,{},{},{}".format(path, total, checksum))
            lines.append("__END__")
            self._send_reliable_stream(lines)
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_read_stream failed {}".format(e), "__END__"])

    def _handle_fs_read_page(self, msg):
        parts = msg.split(",", 3)
        if len(parts) < 4:
            self._send_reliable_stream(["ERR: Bad fs_read_page", "__END__"])
            return
        path = self._clean_fs_path(parts[1])
        if not path:
            self._send_reliable_stream(["ERR: Bad path", "__END__"])
            return
        try:
            offset = max(0, int(parts[2]))
            length = max(1, min(192, int(parts[3])))
        except:
            self._send_reliable_stream(["ERR: Bad fs_read_page range", "__END__"])
            return
        try:
            open_path = self._path_for_open(path)
            st = os.stat(open_path)
            with open(open_path, "rb") as f:
                f.seek(offset)
                chunk = f.read(length)
            hex_data = ubinascii.hexlify(chunk).decode() if chunk else ""
            self._send_reliable_stream([
                "fs_page,{},{},{},{}".format(path, offset, st[6], hex_data),
                "__END__",
            ])
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_read_page failed {}".format(e), "__END__"])

    def _handle_fs_write_begin(self, msg):
        if not self._session_can_edit:
            self._send_reliable_stream(["ERR: Edit not permitted"])
            return
        path = self._clean_fs_path(msg.split(",", 1)[1])
        if not path:
            self._send_reliable_stream(["ERR: Bad path"])
            return
        protected = ("/BLEPeripheral.py",)
        # The BLE runtime itself should only be changed through USB installer/recovery.
        # /main.py may be replaced over BLE; the running program keeps using the
        # current in-memory code until the user explicitly restarts the Pico.
        if path in protected:
            self._send_reliable_stream(["ERR: Protected runtime file"])
            return
        self._file_write_path = self._path_for_open(path)
        self._file_write_tmp = self._file_write_path + ".tmp"
        try:
            with open(self._file_write_tmp, "wb") as f:
                pass
            self._expecting_file_write = True
            self._send_reliable_stream(["ACK:fs_write_begin"])
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_write_begin failed {}".format(e)])

    def _append_file_write_chunk(self, hex_data):
        if not self._file_write_tmp:
            self._send_reliable_stream(["ERR: No file write active"])
            self._expecting_file_write = False
            return
        try:
            data = ubinascii.unhexlify(hex_data)
            with open(self._file_write_tmp, "ab") as f:
                f.write(data)
        except Exception as e:
            self._expecting_file_write = False
            self._send_reliable_stream(["ERR: fs_write_chunk failed {}".format(e)])

    def _finish_file_write(self):
        try:
            bak = self._file_write_path + ".bak"
            try:
                os.remove(bak)
            except:
                pass
            try:
                os.rename(self._file_write_path, bak)
            except:
                pass
            os.rename(self._file_write_tmp, self._file_write_path)
            self._send_reliable_stream(["ACK:fs_write_done"])
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_write_end failed {}".format(e)])
        finally:
            self._expecting_file_write = False
            self._file_write_path = None
            self._file_write_tmp = None

    def _handle_fs_delete(self, msg):
        if not self._session_can_edit:
            self._send_reliable_stream(["ERR: Edit not permitted"])
            return
        path = self._clean_fs_path(msg.split(",", 1)[1])
        if path in ("/BLEPeripheral.py", "/main.py"):
            self._send_reliable_stream(["ERR: Protected runtime file"])
            return
        try:
            os.remove(self._path_for_open(path))
            self._send_reliable_stream(["ACK:fs_delete"])
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_delete failed {}".format(e)])

    # -------------------- External hooks --------------------
    def send_radar(self, name, angle, distance_cm):
        """Send one radar telemetry sample to the app: radar,<NAME>,<ANGLE>,<DISTANCE_CM>."""
        if not self.connected:
            return
        try:
            clean_name = self._protocol_field(name)
            angle_value = int(float(angle))
            distance_value = round(float(distance_cm), 1)
            self.send_with_retry(
                "radar,{},{},{}\n".format(clean_name, angle_value, distance_value),
                max_attempts=1,
            )
        except Exception as e:
            print("send_radar failed:", e)

    def send_toggle_state(self, name, value):
        """Send current toggle state to the app: toggle_state,<NAME>,<0|1>."""
        if not self.connected:
            return
        try:
            clean_name = self._protocol_field(name)
            state = 1 if value else 0
            self.send_with_retry(
                "toggle_state,{},{:d}\n".format(clean_name, state),
                max_attempts=1,
            )
        except Exception as e:
            print("send_toggle_state failed:", e)

    def on_write(self, callback):
        self._on_write_callback = callback

    def on_connect(self, callback):
        self._on_connect_callback = callback

    def on_disconnect(self, callback):
        self._on_disconnect_callback = callback
