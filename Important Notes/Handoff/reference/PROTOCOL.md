# BLE Protocol Reference (distilled)

This is the minimum you need to make a **React web app** talk to a **Raspberry Pi Pico W**
running the existing firmware. The full firmware (`reference/micropython-original/`) implements
a much larger handshake + reliable-stream protocol — **you do NOT need that for the connectivity
test.** You may write a *simplified* `main.py` and `BLEPeripheral.py` (allowed by the task).

Everything below is the part that actually matters for "connect + send a button command".

---

## 1. GATT profile (MUST match on both sides)

These UUIDs are taken verbatim from the production firmware and the Android/iOS native plugins.
If you keep these, the Pico is discoverable/usable by the real app too — but for the test you
only need them to match between *your* React app and *your* simplified Pico firmware.

| Role | UUID | Properties |
|------|------|-----------|
| Service | `b8e06067-62ad-41ba-9231-206ae80ab551` | primary |
| Write characteristic (phone → Pico) | `f897177b-aee8-4767-8ecc-cc694fd5fce0` | WRITE (+ READ) |
| Notify characteristic (Pico → phone) | `f897177b-aee8-4767-8ecc-cc694fd5fce1` | NOTIFY |
| CCCD (standard, for enabling notifications) | `00002902-0000-1000-8000-00805f9b34fb` | — |

> Note the write and notify UUIDs differ only in the **last hex digit** (`…fce0` vs `…fce1`).

**Advertised name:** the firmware advertises as `PicoW-<base_name>`, e.g. `PicoW-AllInOne`.
The advertisement includes the Flags AD and the Complete Local Name. For Web Bluetooth filtering,
filter by the **service UUID** (most reliable) and/or a name prefix of `PicoW-`.

---

## 2. Command wire format (phone → Pico)

Commands are plain UTF-8 text, **newline-terminated** (`\n`), and in the production app are
chunked into ≤20-byte BLE packets. For short test commands a single write is fine.

| Control | Bytes sent on the write characteristic |
|---------|----------------------------------------|
| Button press | `button,<NAME>\n` — e.g. `button,STOP\n`, `button,FREM\n` |
| Slider change | `slider,<NAME>:<VALUE>\n` — e.g. `slider,Speed:42\n` |

Control commands are **fire-and-forget**: the Pico does not ACK them. So a successful write +
an observable reaction on the Pico (LED, serial print, motor) is your proof of success.

Real button names from the Line-Following-Car firmware (`main.py`):
`STOP`, `FREM` (forward), `TILBAGE` (back), `HOJRE` (right), `VENSTRE` (left),
`TURBO`, `FOLG LINJE` (follow line), `CALIBRATE`.
For the test you can use any names your simplified firmware understands.

---

## 3. Messages Pico → phone (optional for the test)

The Pico can `notify` UTF-8 text back on the notify characteristic. In the full protocol this
carries the handshake and layout stream. **For the test this is optional** — you may have the
simplified firmware notify a short string like `ok:STOP\n` so the React UI can display that a
reply was received, which also proves the notify subscription works end-to-end.

---

## 4. What the simplified firmware needs to do (minimum)

1. Start BLE, register one service with the write + notify characteristics above.
2. Advertise as `PicoW-Test` (or similar).
3. On a write: accumulate bytes, split on `\n`, and for each full line:
   - if it starts with `button,` → read the name, toggle the onboard LED / print it / (optionally) notify `ok:<name>`.
4. (Optional) on connect/disconnect: turn the onboard `LED` on/off so there is a visible signal.

You can ignore: ownership, permissions, `HELLO`/`who_are_you`/`request_permission`,
the `prep`/`ack:prep`/numbered-frame/`miss` reliable-stream layer, and layout streaming.
Those are in the reference firmware only for completeness.

---

## 5. Web Bluetooth ⇄ this protocol (JS sketch)

```js
const SERVICE = 'b8e06067-62ad-41ba-9231-206ae80ab551';
const WRITE   = 'f897177b-aee8-4767-8ecc-cc694fd5fce0';
const NOTIFY  = 'f897177b-aee8-4767-8ecc-cc694fd5fce1';

// Must be called from a user gesture (e.g. button click):
const device = await navigator.bluetooth.requestDevice({
  filters: [{ services: [SERVICE] }],      // or [{ namePrefix: 'PicoW-' }] + optionalServices
  optionalServices: [SERVICE],
});
const server  = await device.gatt.connect();
const service = await server.getPrimaryService(SERVICE);
const writeCh = await service.getCharacteristic(WRITE);
const notifyCh = await service.getCharacteristic(NOTIFY);

// Send a button command:
await writeCh.writeValue(new TextEncoder().encode('button,STOP\n'));

// Receive notifications (optional):
await notifyCh.startNotifications();
notifyCh.addEventListener('characteristicvaluechanged', (e) => {
  const text = new TextDecoder().decode(e.target.value);
  console.log('from pico:', text);
});
```

---

## 6. Reference files in this folder

- `micropython-original/BLEPeripheral.py` — authoritative source of UUIDs, chunking, full protocol.
- `micropython-original/main.py` — real command handling example (Line Following Car).
- `micropython-original/DeviceSettings.txt`, `Layout.txt` — on-device file formats (not needed for the test).
- `unity-bridge/UnifiedBleBridge.cs`, `BleBridge.cs` — how the Unity client calls native BLE (method names map 1:1 to the protocol).
- `unity-bridge/AndroidPicoBle.java` — the Android native implementation; confirms UUIDs and chunking behavior.
