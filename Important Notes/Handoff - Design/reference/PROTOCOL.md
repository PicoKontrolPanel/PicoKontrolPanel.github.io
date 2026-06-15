# BLE Protocol — full spec for the React app

The connectivity test app only did "connect + write one short command" (LED on/off).
The **full app needs the complete protocol below**: a handshake, ownership/permission
negotiation, multi-line **layout streaming**, and a **reliable-stream framing** that
sits on top of 20-byte BLE packets. None of this exists in the test app yet — build
it, using `reference/unity-scripts/AppManager.cs` (app side) as the authoritative
behaviour reference. The Pico firmware mirror is in the original
`MicroPython/.../BLEPeripheral.py` (you have it from the first handoff).

> The app is always the **central/client**; the Pico is the **peripheral**. The app
> *initiates* every exchange. "send" = write to the write characteristic; "receive"
> = a notification on the notify characteristic.

---

## 1. GATT profile (unchanged)

| Role | UUID |
|------|------|
| Service | `b8e06067-62ad-41ba-9231-206ae80ab551` |
| Write (app → Pico) | `f897177b-aee8-4767-8ecc-cc694fd5fce0` |
| Notify (Pico → app) | `f897177b-aee8-4767-8ecc-cc694fd5fce1` |
| Advertised name | `PicoW-<base>` (display name = strip the `PicoW-` prefix) |

All payloads are **UTF-8 text, newline (`\n`) terminated**, and chunked into
**≤20-byte** writes/notifications. The receiver accumulates bytes and splits on `\n`
into logical lines.

---

## 2. Two transport tiers

### 2a. Plain lines (single short messages)
For short app→device commands you can write the line directly (≤20 bytes → one
write; longer → split into ≤20-byte chunks with a small gap, ~0.12s, between chunks).
Used for fire-and-forget control commands (`button,`/`slider,`) and simple acks.

### 2b. Reliable stream (any multi-line or important payload)
Used for the handshake messages, the **layout** (device→app) and the **update**
(app→device). It guarantees ordered, complete delivery over lossy notifications.

Framing (sender S → receiver R):
1. S → R: `prep,<total>,<streamId>\n`  (announces `total` lines, a new `streamId`)
2. R → S: `ack:prep,<streamId>\n`  (or legacy `ack:prep`)
3. S → R: for i in 1..total: `<i>-<payload>\n`  (1-based index, dash, then the line)
4. R reassembles by index. If R sees a gap (an index arrives **beyond** the first
   missing one), R asks: `miss,<streamId>,<missingIndex>\n`.
5. S, on `miss,...`, **resends that one cached frame**: `<missingIndex>-<payload>\n`.
6. When R has all `total` indices, it delivers them **in order** to the app logic.

Notes that make this robust (from the Unity/MicroPython impl):
- Each side keeps a cache `{streamId:index → frame}` so it can answer `miss`.
- Only request a `miss` on a **true out-of-order gap** (index > firstMissing); if
  `index == firstMissing` the next frame may simply still be in flight — wait.
- Numbered frames received while no stream is "active" are processed as plain lines
  (defensive). A `prep` with `total<=0` is ignored.
- A single-line payload is just `total=1`.

Implement this as a small class with: `sendReliable(lines[])`, an inbound handler
that recognizes `prep,`/`ack:prep`/`miss,`/`<n>-...`, and an `onLine(plainLine)`
callback for everything else. (Mirror `HandleInboundProtocolLine` /
`SendReliableStream` in AppManager.cs.)

---

## 3. Connection handshake (app drives; runs on the Connection screen)

Order, with the progress-bar value each step maps to. Each step has retries
(typically 3) and a timeout; on failure, disconnect and return to dashboard with a
friendly message.

1. **Connect GATT**, get characteristics, `startNotifications` on notify. (prog 5)
2. **Wait for notifications ready** — give the link a moment to settle (~350ms) before
   trusting it. (prog 18)
3. **HELLO**: send `HELLO` → expect `ACK:HELLO`. Verifies bidirectional link. (26→34)
4. **Ownership**: send `who_are_you` → expect either
   - `unowned` → go to **Create Device** screen, OR
   - `owned,<ownerID>,<iconID>` → remember ownerID + iconID. (44→56)
5. (If owned) send `ACK:ownership` → expect `READY:permission`. (optional staged step)
6. **Permission**: send `request_permission,<userID>,<username>` → expect
   `perm,<canConnect>,<canEdit>` (each 0/1). (66→76)
   - `canConnect==0` → **denied** (private device): show message, disconnect.
   - else: `canEditThisSession = (canEdit==1) || (userID==ownerID)`; save the device
     locally (owned-by-me iff `userID==ownerID`); send `ACK:permission`.
7. **Layout**: send `request` → device streams the layout (section 4) ending `__END__`. (84→100)
8. Show Control Panel; enable Edit only if `canEditThisSession`.

(Legacy/compat: the verbose `permission_response,<c>,<e>` may appear instead of
`perm,...`; parse either, taking the last two integers.)

---

## 4. Layout streaming (device → app), after `request`

The device sends, via the reliable stream:
```
#VERSION,1
<line per control>
__END__
```
Each control line:
```
type,name,centerX2,centerY2,spanX,spanY,rotation
```
- `type` ∈ {`button`,`slider`}; `name` matches `^[A-Za-z0-9_-]{1,32}$`.
- `centerX2`,`centerY2` = center in **half-cells** (dot 5 → 10; halfway 5–6 → 11).
- `spanX`,`spanY` = size in **whole grid cells**.
- `rotation` ∈ {0,90,180,270}.
- If **any** of the four geometry numbers is `n`, the control is **uninitialized**:
  do not place it on the grid — list it in the **Add** menu instead (Knapper/Slidere).
- Layout-stream retries can duplicate lines: **keep only the first line per name**.

Other lines the app may see and how to treat them: `LAYOUT_SAVED` (save confirmed),
`ACK:...` (log), `ERR:...` (log as error), `#VERSION...` (note), `disconnect`
(device asked to drop — tear down, return to dashboard).

Grid constants (must match the device's coordinate meaning): **cols=11, rows=31,
edgeMargin=50**. Origin = bottom-left dot; step = (usable size)/(count−1).

---

## 5. Saving an edited layout (app → device), Edit Mode "save"

1. send `update` → expect `ACK:update` (retry up to 3×; proceed anyway if absent).
2. Reliable-stream these lines then `__END__`:
   ```
   update,<type>,<name>,<cx2>,<cy2>,<sx>,<sy>,<rot>
   ```
   - For a **deleted** control, send `update,<type>,<name>,n,n,n,n,0`.
3. expect `LAYOUT_SAVED` (show the loading icon until then; warn if it times out).

Compute from each control: center → `cx2,cy2` (half-cells), size → `sx,sy` (cells),
rotation snapped to the nearest of 0/90/180/270. (See `SaveEditsAndExitEditMode`.)

---

## 6. Control commands (app → device), Control Panel play mode

Fire-and-forget plain lines (no ack); send on the interaction:
- Button press (on **pointer-down**): `button,<NAME>`
- Slider change: `slider,<NAME>:<VALUE>`

Queue them so they go out one at a time with a tiny gap (~30ms) and are **blocked
while the panel is busy/loading** or in edit mode. (See `EnqueueControlCommand`.)

> Slider value range/semantics are not pinned down in the Unity code (it sent the raw
> UI float). Pick a consistent range (e.g. integer 0–100) and confirm it matches what
> the firmware expects for `slider,<NAME>:<VALUE>` before relying on it.

---

## 7. Create / ownership write (Create Device screen)

Send (reliable) `create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>` →
expect `ACK:create`. Rule: if `canConnect==0` (Privat) then force `canEdit=0`.
`iconID` is the index into the device-icon array (see `reference/icons/ICONS.md`).

---

## 8. Disconnect

Send `disconnect` (device replies `ACK:disconnect` and drops), then close GATT.
Also handle the device-initiated `disconnect` line at any time.

---

## 9. Message reference (quick table)

| Direction | Message | Meaning |
|-----------|---------|---------|
| app→dev | `HELLO` | link check |
| dev→app | `ACK:HELLO` | link ok |
| app→dev | `who_are_you` | ask ownership |
| dev→app | `unowned` / `owned,<id>,<icon>` | ownership state |
| app→dev | `ACK:ownership` | staged ack |
| dev→app | `READY:permission` | proceed |
| app→dev | `request_permission,<userID>,<username>` | ask access |
| dev→app | `perm,<canConnect>,<canEdit>` | access decision (0/1,0/1) |
| app→dev | `ACK:permission` | done |
| app→dev | `create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>` | claim/setup |
| dev→app | `ACK:create` | saved |
| app→dev | `request` | ask layout |
| dev→app | `#VERSION,1` … control lines … `__END__` | layout stream |
| app→dev | `update` then `update,...` lines then `__END__` | save layout |
| dev→app | `ACK:update`, `LAYOUT_SAVED`, `ERR:...` | edit acks |
| app→dev | `button,<NAME>` / `slider,<NAME>:<VALUE>` | control (no ack) |
| both | `prep,<total>,<id>` / `ack:prep,<id>` / `<n>-<payload>` / `miss,<id>,<n>` | reliable framing |
| both | `disconnect` / `ACK:disconnect` | teardown |
