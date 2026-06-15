# Screenshots — annotated index (VISUAL SOURCE OF TRUTH)

These are real captures of the Unity app. **When a visual detail in
DESIGN_HANDOFF.md and a screenshot disagree, the screenshot wins.** Filenames are
just capture timestamps; the mapping below is what matters.

General visual notes confirmed across all shots:
- Portrait, fills the screen. Brand red `#C6504E` top bar with a **white bold title**.
- Big **rounded panels** (~40px radius) with a thin **red or white border**.
- **"Prototype Version 0.6.7"** sits bottom-left on most screens (grey, small).
- Toggles are **segmented pills**: the active half is solid red with white text;
  the inactive half is white with red text, inside a red-bordered rounded pill.

| File | Screen | Key details to reproduce |
|------|--------|--------------------------|
| `Screenshot 2026-06-14 221353.png` | **Intro / username (first run)** | Red header band with **"Teknologiskolen"** wordmark + a **power icon** in a white circle. Centered Danish welcome copy (red text). Floating-label input placeholder *"Brugernavn..."* in a red-bordered rounded pill. Full-width red **"Fortsæt"** button. |
| `Screenshot 2026-06-14 221418.png` | **Dashboard (empty)** | Title **"Hovedmenu"**, **hamburger top-right**. Segmented pill **"Mine Enheder"** (active) / **"Andre Enheder"**. One large white-bordered rounded panel = the device list (empty here). A red circular **"+" FAB bottom-right** = add/find a device. |
| `Screenshot 2026-06-14 221440.png` | **Dashboard + side menu open** | Side menu slides from the **right** as a solid-red vertical strip; rest of screen dims (grey scrim). White icon buttons top→down: **hamburger (close), user, settings (cog), help (?), debugger (chat bubble)**. |
| `Screenshot 2026-06-14 221509.png` | **Create Device — Privat** | Title **"Opret Enhed"**. Large rounded-square **device icon** (raspberry = iconID 0) with a small **"+" badge** (tap → icon picker). Prompt *"Må andre forbinde til- og bruge denne enhed?"* with **Privat / Offentlig** pill (Privat active). Bottom: **"Annuller"** + **"Opret"** buttons. (Edit toggle hidden while Privat.) |
| `Screenshot 2026-06-14 221603.png` | **Create Device — full form** | Same as above but the second prompt *"Må andre redigere denne enhed?"* with **Nej / Ja** pill is shown (appears for Offentlig). Use this for the full create-form layout. |
| `Screenshot 2026-06-14 221622.png` | **Icon picker modal** | Title **"Vælg Enhedens Icon"**, red **✕** close top-right, over a scrim. **3-column grid of 12** rounded-red icon tiles, in the exact `iconID` order (see ICONS.md): raspberry, sumo, led / ruler+pencil, car, tank / robot-arm, bee, palette / waveform(proximity), magnifier, bell. |
| `Screenshot 2026-06-14 221651.png` | **Control Panel — loading** | Title **"Kontrol Panel"**, hamburger top-right. Large **red-bordered controls area** (the play field), empty, with a **red "bars" spinner** centered while the layout streams in. |
| `Screenshot 2026-06-14 221734.png` | **Control Panel + side menu open** | Side menu (right, red) with: **user, settings, EDIT (pencil-in-square), help, debugger**, and a **leave/exit (door) icon bottom-right**. NOTE: **Edit Mode is entered from this side-menu pencil**, and you leave the device via the exit icon here. |

## Corrections these screenshots make to the earlier write-up
1. **Dashboard title is "Hovedmenu"**, hamburger is **top-right**, and there is a
   red **"+" FAB** (bottom-right) — that FAB is the "add / find a device" entry
   point (maps cleanly to a Web Bluetooth `requestDevice()` button).
2. The My/Other switch is a **segmented pill at the top** (in addition to the swipe
   behaviour described in the scripts).
3. The **side menu is a thin right-edge red strip of icon buttons**, not a wide
   panel. Its contents differ per screen: Dashboard = user/settings/help/debugger;
   **Control Panel adds an Edit (pencil) button and a leave/exit (door) button.**
4. **Edit Mode is launched from the side menu** (pencil), not a top-bar button.
5. The intro shows a **power-symbol logo** inside a white circle under the
   "Teknologiskolen" wordmark (use the brand logo asset / a power glyph).
