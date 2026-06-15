# Pico Kontrol Panel — Test Results

## First run / identity
- [ ] First launch shows the username intro; "Fortsæt" lands on the dashboard
- [ ] Username + userID persist across reload (no intro on second launch)

## Connect & handshake (against firmware/)
- [ ] Android Chrome: "+" opens the chooser and connects
- [ ] iPhone/iPad Bluefy: "+" opens the chooser and connects
- [ ] Connection screen progress runs 0 → 100
- [ ] Unowned device → Create Device screen
- [ ] Create (icon + Privat/Offentlig + edit) → lands on Control Panel
- [ ] Owned device reconnect goes straight to the Control Panel

## Control Panel (play mode)
- [ ] Buttons send `button,<NAME>` (LED reacts)
- [ ] Slider sends `slider,<NAME>:<VALUE>`
- [ ] Pico notifications appear in the Debugger log

## Edit Mode
- [ ] Pencil (side menu) enters edit mode; dot grid shows
- [ ] Drag + release snaps a control to the grid
- [ ] Overlapping controls turn grey and block Save
- [ ] Rotate / resize / add / delete work
- [ ] Save streams `update` and the device confirms `LAYOUT_SAVED`

## General
- [ ] Disconnect (exit door) returns to the dashboard cleanly
- [ ] Debugger "Save To Phone" downloads a timestamped .txt
- [ ] Saved device delete works

Notes:
