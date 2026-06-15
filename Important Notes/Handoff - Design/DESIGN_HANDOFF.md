# Pico Kontrol Panel — Design Handoff (Unity → React)

This document is the **conceptual bridge** between the existing Unity app
(`UIExample.scene`) and the React app you are building. It describes **what every
screen looks like, what every interaction does, and what it sends/receives over
BLE** — so you can rebuild the *experience*, not transcribe Unity objects.

Sources, in priority order:
1. **`reference/screenshots/`** (+ `SCREENSHOTS.md`) — real captures of the app.
   **For anything visual, the screenshots win** over this document's prose.
2. **This document** — authoritative for *intent*, flow, and behaviour.
3. **`reference/PROTOCOL.md`** — the full BLE protocol the app must speak
   (handshake, reliable stream, layout/update). The connectivity-test app does NOT
   implement this yet; build it from here + `AppManager.cs`.
4. **`reference/unity-scripts/`** — behaviour ground-truth (read when a rule is
   ambiguous); `reference/scene/UIExample.unity` — raw scene (grep for exact values).

Do not try to mirror Unity's object tree, RectTransforms, or coroutines — translate
them into idiomatic React/DOM.

> Language: the app is **Danish** (target users are Danish schoolchildren at
> "Teknologiskolen"). Keep all visible text in Danish exactly as listed here.

---

## 0. TL;DR of the whole experience

A kid opens the app. First launch asks for a **username** (stored locally). Then
they land on a **dashboard** showing device "cards": *Mine Enheder* (My Devices)
and *Andre Enheder* (Other Devices), swipeable left/right, plus a scan for
**nearby devices**. They tap a device → a **connection-progress screen** runs a
BLE handshake. Depending on the device:
- **Unowned device** → **Create Device** screen (pick an icon, set public/private
  and edit permissions) → becomes owned.
- **Owned device** → the device streams its **control-panel layout**, and the kid
  lands on the **Control Panel**: a grid of buttons/sliders they press to drive
  the robot.

If they have edit rights, an **Edit Mode** lets them drag, resize, rotate, add and
delete controls on a dot-grid, then **save** the layout back to the device.

A **side menu** (settings), a **debug terminal**, and several **modals** round it
out.

Everything is **local**: no accounts server, no analytics. Identity + saved
devices live in browser storage (localStorage equivalent of Unity's JSON files).

---

## 1. Visual language (global)

### Palette
| Token | Value | Usage |
|-------|-------|-------|
| **Primary / brand red** | `#C6504E` (rgb 198,80,78) | top bars, primary buttons, control buttons, accents, status bar |
| **White** | `#FFFFFF` | screen backgrounds, cards, text on red |
| **Light grey** | `#F5F5F5` (≈0.962) | subtle panel fills |
| **Disabled / collision grey** | `#808080` | disabled controls, "colliding" control highlight in edit mode |
| **Modal scrim** | `rgba(0,0,0,0.39)` | dim/blur behind modals & side panel |
| **Status: available** | green | "device nearby" dot |
| **Status: unavailable** | grey | "device not nearby" dot |

The brand red `#C6504E` is the single dominant accent — buttons, the top bar, and
the on-device control buttons all use it. Navigation/system bar in the native app
was this red with a white nav bar; for web, theme the page/PWA with `#C6504E`.

### Type & shape
- Rounded, friendly, **large touch targets** (kids on tablets). Generous padding.
- Bold headings; the brand uses a clean sans (use any rounded sans, e.g. system
  UI / Nunito-like). Headings often white on red.
- Cards and buttons have **rounded corners** and soft shadows.
- Branding: **Teknologiskolen logo** (`reference/art/Teknologiskolen_logo.png`) on
  the intro screen; colored splash (`Splash Screen Coloured 2.png`) at launch.

### Orientation & canvas
- The native app runs **fullscreen, portrait** on phones/tablets, immersive (no
  system bars). For web: a portrait-first, mobile-viewport layout; fill the
  viewport, avoid page scroll except inside designed scroll areas.

### Motion
Animations are subtle and spring/ease based (Unity uses `SmoothStep`/lerp ~0.25–0.3s):
- Side panel slides in from the right (~0.3s smoothstep) with scrim fade.
- Page swipe (My/Other devices) snaps with eased lerp; flick = go to next/prev.
- Vertical device lists have **inertial scrolling** with a slight bounce past edges.
- Floating-label input: placeholder shrinks (~0.8×) and lifts when focused/filled.
- Edit-mode "discard" animates each control back to its original spot (~0.3s).
- Connection screen: a progress bar fills 0→100 as handshake steps complete.

---

## 2. Screen-by-screen recipe

Screens are mutually-exclusive "views" toggled active/inactive (think routes or a
view switch). Names below match Unity objects; Danish UI strings are quoted.

### 2.1 Splash / launch
- Colored splash image, brand red. Brief. Then → Intro (first run) or Dashboard.

### 2.2 Introduction (First Time Only) — username creation
Shown **only if no user is stored**.
- Teknologiskolen logo.
- Welcome copy: *"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til
  Raspberry Pi…"* (welcome blurb).
- A **floating-label text input**, placeholder *"Brugernavn..."* (label *"Brugernavn"*).
  - Floating-label behaviour: when focused OR non-empty, the placeholder lifts and
    scales to ~0.8 and becomes fully opaque (see `LerpInputFieldPlaceholderText.cs`).
- Primary button *"Fortsæt"* (Continue).
- **Action:** trim the name; generate a unique `userID` (UUID, hex, no dashes);
  persist `{username, userID}` locally; go to Dashboard.
- Version label somewhere: *"Prototype Version 0.6.7"* (keep a version string).

### 2.3 Dashboard (main hub)
The home screen after identity exists. (Screenshots: `…221418` empty, `…221440`
with side menu.) Structure:
- **Top bar** (brand red) titled **"Hovedmenu"** with a **hamburger top-right**
  (opens side menu).
- A red circular **"+" floating button bottom-right** = **add / find a device**.
  On web this is the `requestDevice()` entry point (browser chooser).
- **Device group slider**: two horizontally-swipeable pages with a draggable
  segmented **handle** at the top indicating page:
  - Page 1 — **"Mine Enheder"** (My Devices): cards for devices this user owns.
  - Page 2 — **"Andre Enheder"** (Other Devices): cards for devices owned by
    others but saved/known to this user.
  - The handle and the page move in sync (drag either; both snap together). A flick
    jumps a page; a slow drag snaps to nearest. (See `DragManager`/`DragPanel`/`DragHandle`.)
- **Nearby devices**: a section / modal titled *"Enheder i nærheden"* (Devices
  Nearby) listing freshly **scanned** devices not yet saved. Heading also seen as
  *"Hovedmenu"* (Main menu) context.
- Each list scrolls vertically with inertia.

**Saved device card** (`ButtonConnectToSavedDevice`):
- Device **icon** (chosen from an icon set; see §4).
- **Device name** (display name = advertised name with the `PicoW-` prefix stripped).
- A small **status dot**: green if the device is currently in range (passive scan
  saw it), grey if not. Card is **disabled (not tappable) when not in range**.
- A **delete** affordance (e.g. long-press or an edit/trash control) → removes the
  saved device locally.
- **Tap (when available):** connect to that saved device (→ §2.6 connection flow).

**Nearby (new) device row** (`ButtonConnectToNewDevice`):
- Just the display name + a connect affordance. **Tap:** connect to that device.

**Scanning model (IMPORTANT — differs on web):** Unity ran a background scanner
loop: an **active scan** (when the user opens "nearby") populates the nearby list,
and a **passive scan** every few seconds toggles the green/grey availability dots
on saved cards. **Web Bluetooth cannot background-scan or silently enumerate**;
`requestDevice()` opens the browser's own chooser on a tap. So adapt:
- Replace the "nearby devices" list with a **"Find enhed" (Find device)** button
  that calls `requestDevice` (filtered by the service UUID / `PicoW-` prefix) and
  shows the browser chooser. The chosen device flows into the connection screen.
- For **saved devices**, use `navigator.bluetooth.getDevices()` (permitted devices)
  where supported to offer quick reconnect; the green/grey "in range" dot may not be
  reliably determinable on web — either drop it, or approximate (e.g. show
  "available" only after a successful `getDevices()` match / connection attempt).
- Keep the *visual* of cards + my/other pages; just change what fills them.

### 2.4 Side menu (right-edge icon strip)
- Slides in from the **right** over a dark scrim (`SidePanelController`, ~0.3s); the
  rest of the screen dims. It is a **thin solid-red vertical strip of white icon
  buttons**, not a wide panel. (Screenshots `…221440` and `…221734`.)
- **Contents depend on the screen:**
  - On the **Dashboard**: hamburger (close), **user**, **settings**, **help (?)**,
    **debugger (chat)**.
  - On the **Control Panel**: **user**, **settings**, **Edit (pencil-in-square)**,
    **help (?)**, **debugger**, and a **leave/exit (door) button at the bottom**.
- **Edit Mode is launched from this menu's pencil**, and you **leave the device**
  via the exit/door button here. Tapping the scrim closes the menu.

### 2.5 Debugger modal ("Debugger")
- A scrollable **terminal** showing a rolling log (max ~200 lines). Lines are
  prefixed by severity: `[ERROR]`, `[SUCCESS]`, `[WARNING]`, plain info, and Unity
  log mirrors. (See `AppManager.LogDebug` / `EnqueueLog`.)
- Buttons: **"Clear"** (empty the log) and **"Save To Phone"** (export the log text
  to a timestamped `.txt`). On web, "save" = trigger a file download (`dd-MM-yyyy-HH-mm.txt`).
- Useful to keep for field debugging; style as a monospace dark panel.

### 2.6 Connection status ("Forbinder til Enhed" / "Forbinder til")
Full-screen progress view shown while connecting (kept layered under the Control
Panel). Elements:
- Device **icon** + device **name** (*"Forbinder til <name>"* — Connecting to).
- A **step label** (text that updates per stage) and a **progress bar** 0→100.
- The progress milestones map to handshake stages (values from `AppManager`):
  - 5 Connecting to BLE → 18 Notifications ready → 26 HELLO sent → 34 HELLO acked →
    44 ownership requested → 56 ownership received → 66 permission requested →
    76 permission granted → 84 layout requested → 88–96 receiving layout → 100 done.
- On failure it shows a reason and returns to Dashboard (e.g. *"Connection failed:
  notifications were not enabled in time."*). Keep friendly, kid-readable messages.

> The handshake itself is BLE-protocol work (see §5). Visually, this screen is just
> "icon + name + animated step text + progress bar".

### 2.7 Create Device ("Opret Enhed") — for unowned devices
Reached when the connected device reports it is **unowned**. The kid sets it up:
- Title *"Opret Enhed"*.
- **Device icon picker**: a current-icon button; tapping opens the **icon modal**
  *"Vælg Enhedens Icon"* / *"Vælg Element"* (Choose the device's icon / Choose
  element) — a grid of selectable icons (§4). Selecting sets the device icon.
- **Access toggle** — *"Må andre forbinde til- og bruge denne enhed?"* (May others
  connect to and use this device?) with **"Privat"** (Private) / **"Offentlig"**
  (Public) options. Implemented as a sliding toggle (handle slides left/right; a
  white label cross-fades). Private = only owner; Public = others may connect.
- **Edit toggle** — *"Må andre redigere denne enhed?"* (May others edit this
  device?) with **"Nej"** (No) / **"Ja"** (Yes). **Only visible when Public**
  (slides into view when Public is chosen, hides when Private). Rule: **Private ⇒
  others can never edit** (force edit off).
- Confirm button *"Opret"* (Create).
- **Action:** require a stored user; compute `canConnect` (1 if Public) and
  `canEdit` (1 only if Public AND edit=Yes); send `create,<ownerID>,<ownerName>,
  <iconID>,<canConnect>,<canEdit>` to the device; remember the chosen icon; proceed
  into the device (it becomes owned-by-me). (See `DeviceSettingsManager`.)

### 2.8 Control Panel ("Kontrol Panel" / "Control Panel") — the main event
The screen where kids actually drive the robot.
- **Top bar** (brand red): titled **"Kontrol Panel"** with the **hamburger
  top-right**. **Edit Mode** and **leave/exit** live in the **side menu** (§2.4),
  not the top bar. (Screenshots `…221651` loading, `…221734` side menu.)
- **Controls Area**: a fixed-aspect play area containing the **buttons and sliders**
  defined by the device's layout. Each control is positioned on an invisible
  **dot grid** (default **11 columns × 31 rows**, `edgeMargin = 50`), sized as a
  span of grid cells, and may be rotated 0/90/180/270.
- **Loading icon** overlays the controls area while a layout is being received or
  saved.
- A **"Background (Hides Control Panel)"** scrim is used when a modal is open above.

**Control: button** (`SendCommandButton` + `DraggableUIButton`):
- A rounded **brand-red button** with a centered label (the control's name).
- **Press (pointer-down) sends `button,<NAME>`** to the device immediately
  (fire-and-forget; trigger on *press down*, not release). Disabled while the panel
  is busy/loading or while in edit mode.

**Control: slider** (`SendCommandSlider` + `DraggableUISlider`):
- A slider track with a fill (brand red) and the control's **name shown twice** (a
  red label and a white "masked" label that reads correctly over the fill).
- **On value change sends `slider,<NAME>:<VALUE>`**. (Unity slider value is a float;
  pick a sensible range/step for web, e.g. 0–100 integer, and keep it consistent
  with whatever the firmware expects.)
- When rotated to vertical (90/270), the **text becomes vertical** (one char per
  line) and the track swaps orientation. (See `DraggableUISlider` for the exact
  rotation/text handling — replicate the *effect*: readable label in any rotation.)

### 2.9 Add Modal ("Add Modal") — add controls (edit mode)
- Two scrollable lists: **"Knapper"** (Buttons) and **"Slidere"** (Sliders),
  reachable via a small two-tab/segmented control. Each entry is an
  **uninitialized control** the device declared but that isn't placed yet
  (`ButtonAddButton` / `ButtonAddSlider`), labeled with the control name and a
  **"+"**.
- **Tap an entry:** instantiate that control in the Controls Area (centered on the
  grid, default span 4×5), enter edit mode for it, and remove the entry from the
  add-list. (See `AppManager.InstantiateCommandButton/Slider`.)

### 2.10 Modals & misc
- **Icon select modal** (*"Vælg Element"* / *"Vælg Enhedens Icon"*): grid of icons.
- **Connect/confirm modals**, **Cancel** (*"Annuller"*), **Yes/No** (*"Ja"/"Nej"*),
  generic **Exit/Back** affordances.
- All modals appear above the `rgba(0,0,0,0.39)` scrim; tapping the scrim or a
  cancel button dismisses.

---

## 3. Edit Mode — the draggable grid editor (the hardest, most valuable part)

Available on the Control Panel **only if `canEditThisSession`** (owner, or public
device with edit allowed); entered via the **side-menu pencil** (§2.4). Entering
edit mode (`AppManager.EnterEditMode`):
1. **Show the dot grid** (11×31 dots, evenly spaced inside `edgeMargin`).
2. Make every control **draggable** and **non-interactive** (pressing no longer
   sends commands).
3. Show a **confirm** ("save") button, enabled only when there are **no collisions**.

Per-control editing (`DraggableUIBase` + subclasses + `EditResizeHandle`):
- **Select**: tap a control → shows its **edit UI** (resize handles + rotate/delete
  buttons). Tapping elsewhere deselects all.
- **Drag**: move freely while dragging; **stays inside** the controls area (clamped);
  **snaps to the nearest grid dot on release** (center-based snapping). No snapping
  mid-drag.
- **Collision**: while moving/resizing, if a control's rotated bounding box overlaps
  another (with a tiny tolerance so touching edges is OK), **both turn grey**;
  default color returns when clear. Save is disabled while any overlap exists.
- **Resize**: four directional handles (Right/Left/Up/Down). Dragging a handle grows/
  shrinks the control by **whole grid cells** in that direction (the opposite edge
  stays put — center shifts by half-steps). Clamped to ≥1 cell and inside bounds; on
  release it snaps to a legal grid placement respecting span parity. (See
  `EditResizeHandle` + `ResizeFromHandle`/`CommitHandleResize`.)
- **Rotate**: a rotate action turns the control **−90° per tap** (0→270→180→90→0),
  then re-clamps and re-snaps. Sliders also rotate their inner text to stay readable
  (vertical text on 90/270).
- **Delete**: removes the control from the panel and **returns it to the Add list**
  as an uninitialized control (so it can be re-added later).
- **Discard**: exits edit mode and **animates every control back** to its original
  position/rotation (~0.3s each); restores slider text/size too.

**Grid coordinate model (must match the device protocol):**
- Controls are stored as **half-step grid coordinates**: `centerX2`, `centerY2` are
  the center in *half-cells* (so dot 5 = 10; halfway between 5 and 6 = 11). `spanX`,
  `spanY` are sizes in **whole cells**. `rotation` ∈ {0,90,180,270}.
- Default grid: **cols = 11, rows = 31, edgeMargin = 50**. Step = usable size /
  (count−1). Origin = bottom-left dot. (See `ComputeGridGeometry` and
  `ControlPanelGridSizeAdjuster`.)
- This is the exact format used in layout lines (§5), so editor math and protocol
  must agree.

**Save** (`SaveEditsAndExitEditMode`): for every control compute
`type,name,centerX2,centerY2,spanX,spanY,rotation`; deletions become
`...,n,n,n,n,0`. Send the whole set as an `update` stream to the device (§5), show
the loading icon until the device confirms `LAYOUT_SAVED`, then leave edit mode.

---

## 4. Icons & assets

**Every icon/image actually used in the scene has been extracted and copied** into
`reference/icons/` and `reference/art/`, with a full table in
`reference/icons/ICONS.md`. Read that file — summary below.

- **Device icons** (`reference/icons/device-icons/`): the ordered array
  `AppManager.allIconImages`, shown in the "Vælg Enhedens Icon" picker and on device
  cards / the connection screen. **`iconID` is the index into this exact list** and
  is sent in `create,...` and echoed in `owned,...`, so **the order is a contract**,
  not cosmetic. The 12, in order, are: 0 raspberry-pi, 1 sumo, 2 led, 3 draw,
  4 car, 5 tank, 6 robot-arm, 7 bee, 8 draw(variant), 9 proximity-sensor,
  10 search, 11 alarm. You may re-export/substitute the artwork (SVGs ideal) but
  keep the indices stable so stored `iconID`s still resolve.
- **UI glyphs** (`reference/icons/ui-glyphs/`): menu (hamburger), settings, user,
  help, plus (add), edit (pencil → Edit Mode), disk (save), exit-door (leave),
  cross (close/cancel), circle-with-cross (delete), circle-dash (availability dot),
  chat-bars (debugger). Substitute with any consistent flat set; meanings matter.
- **Brand** (`reference/art/`): `Teknologiskolen_logo.png` (+ `…logo 1.png` variant)
  for intro/header; `Splash Screen Coloured 2.png` for launch.
- **Panel textures** (`reference/art/textures/`): `Rounded40px@2x-RedBorder.png` and
  `Rounded40px@4xWhiteBorderBig.png` — Unity 9-slice frames giving the app its
  signature **~40px-radius rounded panels/cards** with a red or white border.
  Reproduce in CSS with `border-radius: ~40px` + a matching 2–4px border.
- **Loading icons**: Unity used an animated-spinner asset pack (not copied — large).
  Any tasteful CSS/SVG spinner in brand red is fine.

---

## 5. How the UI ties into BLE (workflow contract)

You already have Web Bluetooth working in the React repo (connect + send). The full
app drives the **same GATT contract** but exchanges richer text messages. Each UI
moment maps to specific messages (newline-terminated UTF-8, chunked ≤20 bytes; a
reliable-stream framing wraps multi-line payloads — see the protocol notes you
already have from the connectivity test). Summary of what the **app** sends/expects:

| UI moment | App sends | Device replies |
|-----------|-----------|----------------|
| After connect, verify link | `HELLO` | `ACK:HELLO` |
| Ask ownership | `who_are_you` | `unowned` **or** `owned,<ownerID>,<iconID>` |
| (if owned) ack | `ACK:ownership` | `READY:permission` |
| Ask permission | `request_permission,<userID>,<username>` | `perm,<canConnect>,<canEdit>` (0/1 each) |
| Confirm permission | `ACK:permission` | — |
| Create (unowned setup) | `create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>` | `ACK:create` |
| Request layout | `request` | layout lines … then `__END__` |
| Save layout (edit) | `update` then N×`update,<type>,<name>,<cx2>,<cy2>,<sx>,<sy>,<rot>` then `__END__` | `ACK:update` … `LAYOUT_SAVED` |
| Press a button | `button,<NAME>` | (none) |
| Move a slider | `slider,<NAME>:<VALUE>` | (none) |
| Leave | `disconnect` | `ACK:disconnect` |

**Layout line format** (device → app, one per control):
`type,name,centerX2,centerY2,spanX,spanY,rotation` where any of the four numbers =
`n` means **uninitialized** (goes into the Add list instead of being placed).
`type` ∈ {`button`,`slider`}; name matches `^[A-Za-z0-9_-]{1,32}$`.

Decision flow after handshake:
- `unowned` → **Create Device** screen.
- `owned` + `perm` `canConnect=0` → denied → back to Dashboard with a message.
- `owned` + `canConnect=1` → request layout → **Control Panel**; enable Edit only if
  `canEdit=1` or this user is the owner.

> You do not need the Android/MicroPython side. But the app must speak the table
> above for the workflow to feel identical. The reliable-stream framing
> (`prep`/`ack:prep`/numbered `N-payload`/`miss`) is only needed for the multi-line
> payloads (layout + update); single short messages can be sent plain.

---

## 6. Local persistence (no server)

Mirror Unity's two JSON save files using browser storage (localStorage/IndexedDB):
- **User**: `{ username, userID }` (Unity: `userdata.json`).
- **Saved devices**: a list of
  `{ deviceID, deviceName, deviceIconID, canOthersConnect, canOthersEdit, isOwnedByMe }`
  (Unity: `SavedDevices.json`). A device is auto-saved on first successful connect;
  `isOwnedByMe = (userID === ownerID)`. (See `DeviceSaveSystem`/`UserSaveSystem`.)
- Nothing else is stored; nothing leaves the device. (Honour the local-only rule
  from the test app.)

---

## 7. What to build first (suggested order)

1. **Shell + theme + local storage** (username intro → dashboard skeleton).
2. **Connection screen + handshake** wired to your existing BLE module (HELLO →
   who_are_you → permission → request layout). Render received controls **read-only**.
3. **Control Panel (play mode)**: render buttons/sliders from the layout on the dot
   grid; press/drag sends `button,`/`slider,`. This already delivers the core value.
4. **Create Device** flow (icon + public/private + edit) → `create,...`.
5. **Dashboard polish**: my/other pages, saved-device cards, find/scan, reconnect.
6. **Edit Mode**: dot grid, drag+snap, collision, resize handles, rotate, add/delete,
   save (`update` stream). This is the largest piece — schedule it last.

Prioritise *feel*: big touch targets, snappy feedback, the brand red, Danish copy.

---

## 8. Reference index

- `reference/screenshots/` + `SCREENSHOTS.md` — **visual source of truth**; annotated
  map of every screen and the corrections they make to this prose.
- `reference/PROTOCOL.md` — **full BLE protocol** to implement (handshake, reliable
  stream, layout/update, control commands). Not present in the test app yet.
- `reference/unity-scripts/AppManager.cs` — master flow: screens, handshake, layout
  parse/build, send queue, edit save, logging. The single most important file.
- `DraggableUIBase.cs` (+ `DraggableButtonUI`, `DraggableSliderUI`) — drag, grid
  snap, collision, resize, rotate, restore.
- `EditResizeHandle.cs` — handle-driven resizing in grid cells.
- `ControlPanelGridSizeAdjuster.cs` — the 11×31 dot grid + geometry.
- `DragManager.cs` / `DragPanel.cs` / `DragHandle.cs` — dashboard horizontal page
  swipe + vertical inertial scroll.
- `SidePanelController.cs` — side menu slide/scrim.
- `DeviceSettingsManager.cs` — Create-Device toggles + `create,...`.
- `SendCommandButton.cs` / `SendCommandSlider.cs` — press→`button,`/`slider,`.
- `ButtonConnectToNewDevice/SavedDevice`, `ButtonAddButton/Slider` — list entries.
- `DeviceSaveSystem.cs` / `UserSaveSystem.cs` — the two local JSON stores.
- `reference/scene/UIExample.unity` — raw scene (grep for exact positions/colors).
- `reference/icons/ICONS.md` — every scene icon + the `iconID` order contract.
- `reference/icons/device-icons/`, `reference/icons/ui-glyphs/` — extracted icons.
- `reference/art/` — brand logo + splash + rounded-panel border textures.
