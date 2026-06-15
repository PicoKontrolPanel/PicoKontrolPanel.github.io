# Icons used in UIExample.scene

Every image asset actually referenced by the Unity scene, copied here with its
role. (Recovered by resolving the scene's sprite GUIDs to their asset files.)

The art is third-party (icons8 + a free flat-icon pack + a "Simple Button Set").
Treat these as a **visual reference / placeholder set** — for the web app you can
re-export them or substitute equivalent SVGs, as long as you keep the **same
meanings and the same device-icon ordering** (the `iconID` index is sent over BLE
and stored, so order is a contract, not cosmetic).

---

## Device icons — the `iconID` picker set (ORDER IS A CONTRACT)

These are `AppManager.allIconImages`, shown in the "Vælg Enhedens Icon" picker and
on device cards / the connection screen. **`iconID` is the index into this exact
list** and is sent in `create,<ownerID>,<ownerName>,<iconID>,...` and echoed back
in `owned,<ownerID>,<iconID>`. Keep this order.

| iconID | file (`device-icons/`) | meaning |
|:--:|------|------|
| 0 | `icons8-raspberry-pi-120.png` | Raspberry Pi |
| 1 | `icons8-sumo-96.png` | Sumo robot |
| 2 | `icons8-led-100.png` | LED / light |
| 3 | `icons8-draw-96.png` | Ruler + pencil (design/draw) |
| 4 | `icons8-car-100.png` | Car |
| 5 | `icons8-tank-96.png` | Tank |
| 6 | `icons8-robot-arm-100.png` | Robot arm |
| 7 | `icons8-bee-96.png` | Bee |
| 8 | `icons8-draw-96 (1).png` | Artist palette (paint) |
| 9 | `icons8-proximity-sensor-96.png` | Proximity sensor (waveform) |
| 10 | `icons8-search-96.png` | Search / magnifier |
| 11 | `icons8-alarm-96.png` | Alarm / bell |

> The icon grid is verified against the "Vælg Enhedens Icon" screenshot
> (`../screenshots/Screenshot 2026-06-14 221622.png`). Indices 3 and 8 share the
> icons8 "draw" base filename but are **visually different** (ruler+pencil vs
> palette). Keep this exact order and the array length so existing stored `iconID`s
> still resolve; you may re-export the artwork as SVGs.

---

## UI glyphs (`ui-glyphs/`)

Functional icons used across the chrome. Map to your own icon set if you prefer;
meanings are what matter.

| file | used for |
|------|----------|
| `menu.png` | hamburger / open side menu |
| `settings.png` | settings (device settings / side menu) |
| `user.png` | user / profile (intro, identity) |
| `help.png` | help / info |
| `plus.png` | add (used on Add-control list entries, the "+") |
| `Free Flat Edit Icon.png` | enter Edit Mode (pencil) |
| `Free Flat Disk 1 Icon.png` | save (save edits / "Save To Phone") |
| `Free Flat Exit Door Icon.png` | exit / leave device / back to dashboard |
| `Free Flat Button Blank Cross Icon.png` | close / cancel (e.g. "Annuller", modal X) |
| `Free Flat Button Blank Circle With Cross Icon.png` | delete / remove (e.g. delete saved device, delete control) |
| `Free Flat Circle Dash Icon.png` | status / availability indicator (the green/grey device dot) |
| `Free Flat Chat 2 Bars Icon.png` | debugger / log / messages |

---

## Branding & textures (`../art/`)

| file | used for |
|------|----------|
| `art/Teknologiskolen_logo.png` | brand logo (intro/header) |
| `art/Teknologiskolen_logo 1.png` | brand logo (second variant used in scene) |
| `art/Splash Screen Coloured 2.png` | launch splash (brand red) |
| `art/textures/Rounded40px@2x-RedBorder.png` | 9-slice rounded panel/button frame, **red border** (brand red `#C6504E`). In web: a rounded-corner container with a red border, ~40px radius. |
| `art/textures/Rounded40px@4xWhiteBorderBig.png` | 9-slice rounded panel frame, **white border** (cards/modals). In web: rounded container, white border. |

The two "Rounded40px" textures are Unity 9-slice sprites that give the app its
**40px-radius rounded panels** with either a red or white border — that rounded,
bordered card look is core to the visual style. Reproduce with CSS
`border-radius: ~40px` + a 2–4px border in the matching color.
