import ubluetooth
import utime as time
from micropython import const

__version__ = '0.5.8'
__author__ = 'Christian Brochner Rasmussen'

# --------------------- BLE UUIDs ---------------------
SERVICE_UUID     = ubluetooth.UUID("b8e06067-62ad-41ba-9231-206ae80ab551")
CHAR_UUID_WRITE  = ubluetooth.UUID("f897177b-aee8-4767-8ecc-cc694fd5fce0")
CHAR_UUID_NOTIFY = ubluetooth.UUID("f897177b-aee8-4767-8ecc-cc694fd5fce1")

_FLAG_READ   = const(0x0002)
_FLAG_WRITE  = const(0x0008)
_FLAG_NOTIFY = const(0x0010)

# -------------------- Protocol defs ------------------
LAYOUT_VERSION         = 1
ALLOWED_COMMAND_TYPES  = ["button", "slider"]
MAX_NAME_LENGTH        = 14

# Files on-device
SETTINGS_FILE = "DeviceSettings.txt"
LAYOUT_FILE   = "Layout.txt"


class BLEPeripheral:
    """
    Grid-only layout protocol.

    Handshake:
      - 'who_are_you'                    -> 'unowned' | 'owned,<ownerID>'
      - 'request_permission,<id>,<name>' -> 'permission_response,<0/1>,<0/1>' (+ optional disconnect if denied)
      - 'create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>'

        Layout streaming:
            - Unity sends 'request' -> device notifies a full layout ending with '__END__'
            - Unity can send (version 1):
                    'update' header
                    multiple 'update,<type>,<name>,<centerX2>,<centerY2>,<spanX>,<spanY>,<r>' lines
                    '__END__' terminator
                Device saves and replies 'ACK: ...' + 'LAYOUT_SAVED'

    IMPORTANT:
      - Advertising name is STABLE and derived ONLY from main.py's device_base_name.
      - No ownership suffix ('|0'/'|1') and no nickname in advertising.
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
        self.device_base_name = device_base_name  # <- ONLY source for GAP name

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
        """Build a list of controls dicts from tuples like: [("button","A"),("slider","B"),...]"""
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
                "x": None,        # grid col (center)
                "y": None,        # grid row (center)
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
                (CHAR_UUID_WRITE,  _FLAG_WRITE | _FLAG_READ),
                (CHAR_UUID_NOTIFY, _FLAG_NOTIFY),
            ),
        )
        ((self.handle_write, self.handle_notify),) = self.ble.gatts_register_services((BLE_SERVICE,))

    def _advertise(self):
        """
        Advertise a single, stable name derived ONLY from main.py's device_base_name.
        No ownership suffix, no nickname. Example: "PicoW-AllInOne".
        """
        shown_name = self.device_base_name  # fixed source of truth
        full_name = f"PicoW-{shown_name}"
        name_bytes = full_name.encode()

        # Complete Local Name AD type (0x09)
        name_payload = bytearray([len(name_bytes) + 1, 0x09]) + name_bytes
        # Flags: LE General Discoverable + BR/EDR Not Supported (0x06)
        adv_payload = bytearray([0x02, 0x01, 0x06]) + name_payload

        # 100 ms advertising interval (value in microseconds on RP2040 port)
        self.ble.gap_advertise(100_000, adv_payload)
        print("Advertising as:", full_name)

    # -------------------- File I/O: Settings --------------------
    def load_settings_from_file(self):
        """Reads settings. Format:
           VERSION,1
           ownerID,<str>
           ownerName,<str>
           iconID,<int>
           canOthersConnect,<0/1>
           canOthersEdit,<0/1>
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
            # Defaults (unowned)
            self.owner_id = None
            self.owner_name = None
            self.icon_id = 0
            self.can_others_connect = 0
            self.can_others_edit = 0
            # Optionally create defaults on disk:
            self.save_settings_to_file("", "", 0, 0, 0)

    def save_settings_to_file(self, owner_id, owner_name, icon_id, can_connect, can_edit):
        # Enforce rule: if connect==0 => edit==0
        if not can_connect:
            can_edit = 0
        try:
            with open(self._settings_file, "w") as f:
                f.write("VERSION,1\n")
                f.write(f"ownerID,{owner_id}\n")
                f.write(f"ownerName,{owner_name}\n")
                f.write(f"iconID,{icon_id}\n")
                f.write(f"canOthersConnect,{1 if can_connect else 0}\n")
                f.write(f"canOthersEdit,{1 if can_edit else 0}\n")
            # Update in-memory
            self.owner_id = owner_id if owner_id else None
            self.owner_name = owner_name if owner_name else None
            self.icon_id = int(icon_id)
            self.can_others_connect = 1 if can_connect else 0
            self.can_others_edit = 1 if can_edit else 0
            print("Settings saved (no displayName).")
        except Exception as e:
            print("Error saving settings:", e)

    # -------------------- File I/O: Layout --------------------
    def save_layout_to_file(self):
        """Writes Layout.txt in grid format; 'n' for None."""
        try:
            with open(self._layout_file, "w") as f:
                f.write(f"#VERSION,{LAYOUT_VERSION}\n")
                for ctrl in self.controls:
                    x = ctrl["x"] if ctrl["x"] is not None else "n"
                    y = ctrl["y"] if ctrl["y"] is not None else "n"
                    w = ctrl["width"] if ctrl["width"] is not None else "n"
                    h = ctrl["height"] if ctrl["height"] is not None else "n"
                    r = ctrl.get("rotation", 0)
                    f.write(f"{ctrl['type']},{ctrl['name']},{x},{y},{w},{h},{r}\n")
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
                    if s == "n": return None
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

            # Merge onto base
            updated = []
            known = set()
            for base in self.base_controls:
                c = dict(base)
                if c["name"] in overrides:
                    c.update(overrides[c["name"]])
                updated.append(c)
                known.add(c["name"])
            # Preserve any extra lines (if any)
            for name, ov in overrides.items():
                if name not in known:
                    updated.append(ov)

            self.controls = updated
            print("Layout loaded. Controls:", len(self.controls))
        except Exception as e:
            print("Layout not found or invalid. Using base controls. Err:", e)
            self.controls = [dict(c) for c in self.base_controls]
            # Optionally create a default file with 'n' values:
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
        print("Device disconnected" + (f" ({reason})" if reason else ""))
        if self._on_disconnect_callback:
            self._on_disconnect_callback()
        try:
            self._advertise()
        except Exception as e:
            print("Failed to restart advertising:", e)

    def _ble_irq(self, event, data):
        if event == 1:  # Central connected
            self.conn_handle, _, _ = data
            print("Device connected")
            self.connected = True
            self._reset_protocol_state()
            if self._on_connect_callback:
                self._on_connect_callback()

        elif event == 2:  # Central disconnected
            self._handle_disconnected("irq")

        elif event == 3:  # Write to our characteristic
            conn_handle, attr_handle = data
            if attr_handle == self.handle_write:
                chunk = self.ble.gatts_read(self.handle_write).decode()

                # Normal command accumulation; only log when a FULL line arrives
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
        """
        Send a message over the notify characteristic, chunked to <= MTU (20B).
        Always use this for ANY outbound message (short or long).
        NOTE: Must be non-blocking when called from IRQ handler.
        """
        if not self.connected or self.conn_handle is None:
            print("No connected device to notify.")
            return
        try:
            data = msg.encode()
            for i in range(0, len(data), chunk_size):
                part = data[i:i+chunk_size]
                self.ble.gatts_write(self.handle_notify, part)
                self.ble.gatts_notify(self.conn_handle, self.handle_notify, part)
                if delay_ms > 0:
                    time.sleep_ms(delay_ms)
            self._log_sent(msg)
        except Exception as e:
            print("Notify failed:", e)

    def send_with_retry(self, msg, max_attempts=3, chunk_size=20):
        """
        Send a message and retry if device is not connected or send fails.
        Used for important protocol responses.
        """
        for attempt in range(1, max_attempts + 1):
            try:
                if not self.connected or self.conn_handle is None:
                    if attempt < max_attempts:
                        print(f"Send attempt {attempt}/{max_attempts} failed - not connected, retrying...")
                        time.sleep_ms(300)
                    continue
                
                data = msg.encode()
                for i in range(0, len(data), chunk_size):
                    part = data[i:i+chunk_size]
                    self.ble.gatts_write(self.handle_notify, part)
                    self.ble.gatts_notify(self.conn_handle, self.handle_notify, part)
                
                self._log_sent(msg)
                return True  # Success
            except Exception as e:
                print(f"Send attempt {attempt}/{max_attempts} failed: {e}")
                if attempt < max_attempts:
                    time.sleep_ms(300)
        
        print(f"Send failed after {max_attempts} attempts")
        return False

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

        total = len(self._out_reliable_pending_lines)
        if total <= 0:
            total = 1

        for i, payload in enumerate(self._out_reliable_pending_lines):
            frame = "{}-{}".format(i + 1, payload)
            self._out_reliable_cache[i + 1] = frame
            line = frame + "\n"
            self.send_with_retry(line, max_attempts=3)

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

        payload = msg[dash_idx + 1:]
        return idx, payload

    def _process_inbound_line(self, msg):
        if msg.startswith("prep,"):
            parts = msg.split(",", 1)
            total = None
            stream_id = 0
            split_parts = msg.split(",")
            if len(split_parts) >= 2 and split_parts[1].isdigit():
                total = int(split_parts[1])
            if len(split_parts) >= 3 and split_parts[2].isdigit():
                stream_id = int(split_parts[2])

            if total is not None:
                if total > 0:
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
            # Only ask for a resend when we observe a true out-of-order gap.
            # If idx == missing_idx, the next frame may simply still be in flight.
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
            # Handshake initiation - send acknowledgement immediately
            print("Received HELLO handshake")
            self._send_reliable_stream(["ACK:HELLO"])
            
        elif msg == "ACK:ownership":
            # Phone acknowledged our ownership response - prepare for next phase
            print("Phone acknowledged ownership response")
            self._send_reliable_stream(["READY:permission"])

        elif msg == "ACK:permission":
            # Phone acknowledged permission response - handshake complete
            print("Phone acknowledged permission response - connection established")

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
            # 🔒 Enforce session edit permission
            if not self._session_can_edit:
                self._send_reliable_stream(["ERR: Edit not permitted"])
                return
            self._send_reliable_stream(["ACK:update"])
            print("Begin receiving layout update...")
            self._expecting_update = True
            self._rx_layout_buffer = ""
            self._command_buffer = ""

        elif msg == "who_are_you":
            # No delay - respond immediately with device ownership
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
            requester_name = ",".join(parts[2:])

            if self.owner_id and requester_id == self.owner_id:
                self._session_can_edit = True
                self._send_reliable_stream(["perm,1,1"])
            else:
                if self.can_others_connect == 1:
                    # connect allowed; edit maybe
                    self._session_can_edit = True if self.can_others_edit == 1 else False
                    self._send_reliable_stream(["perm,1,{}".format(1 if self._session_can_edit else 0)])
                else:
                    # connect not allowed -> deny then disconnect
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
            # create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>
            parts = msg.split(",")
            if len(parts) < 6:
                self._send_reliable_stream(["ERR: Malformed create command"])
                return
            _, owner_id, owner_name, icon_id_s, can_connect_s, can_edit_s = parts
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

            # Enforce rule: if cannot connect (private), then cannot edit for others
            if can_connect == 0:
                can_edit = 0

            # Persist settings
            self.save_settings_to_file(owner_id, owner_name, icon_id, can_connect, can_edit)

            # For the creator (owner), allow edit this session
            self._session_can_edit = True

            # Optional: re-advertise (name is stable; safe & explicit)
            try:
                self._advertise()
            except Exception as _:
                pass

            self._send_reliable_stream(["ACK:create"])

        else:
            # Application commands (e.g., "button,STOP" or "slider,NAME:VALUE")
            if self._on_write_callback:
                try:
                    self._on_write_callback(msg)
                except Exception as e:
                    print("Write callback error:", e)
            # Control commands are fire-and-forget; no app-level ACK required.

    def send_layout_to_unity(self):
        """
        Build and send layout payload once per request.
        Unity retries the request if needed; retrying this whole payload can duplicate lines.
        Ends with '__END__\\n' so Unity knows the stream is complete.
        """
        lines = [f"#VERSION,{LAYOUT_VERSION}"]
        for ctrl in self.controls:
            if ctrl["type"] not in ALLOWED_COMMAND_TYPES:
                continue
            x = ctrl["x"] if ctrl["x"] is not None else "n"
            y = ctrl["y"] if ctrl["y"] is not None else "n"
            w = ctrl["width"] if ctrl["width"] is not None else "n"
            h = ctrl["height"] if ctrl["height"] is not None else "n"
            r = ctrl.get("rotation", 0)
            lines.append(f"{ctrl['type']},{ctrl['name']},{x},{y},{w},{h},{r}")

        lines.append("__END__")
        self._send_reliable_stream(lines)
        print("[send_layout_to_unity] Sent layout ({} controls)".format(len(self.controls)))

    def _handle_full_layout_update(self, raw_data):
        """Parses the accumulated update lines and saves layout."""
        if not self._session_can_edit:
            self._send_reliable_stream(["ERR: Edit not permitted"])
            return
        try:
            lines = [l.strip() for l in raw_data.strip().split("\n") if l.strip()]

            overrides = {}
            for line in lines:
                # Each line either "update,<...>" or "<type>,<name>,..."
                if line.startswith("update,"):
                    line = line[len("update,"):]
                parts = line.split(",")
                if len(parts) != 7:
                    print("Skipping malformed update line:", line)
                    continue

                ctrl_type, name, x, y, w, h, r = parts

                def _parse_or_none(s):
                    if s == "n": return None
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

            # Merge onto base controls
            updated = []
            names = set()
            for base in self.base_controls:
                c = dict(base)
                if c["name"] in overrides:
                    c.update(overrides[c["name"]])
                updated.append(c)
                names.add(c["name"])

            # Include extra updates not in base (optional)
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

