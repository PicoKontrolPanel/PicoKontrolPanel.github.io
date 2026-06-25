# Future Plans For Control Panel Elements

This document collects possible future elements for Pico Kontrol Panel. The goal is
to keep the app broadly useful for Teknologiskolen projects while preserving the
current student-friendly pattern: the Pico declares controls in `main.py`, the web
app renders them on a customizable grid, and both sides exchange simple line-based
messages over BLE.

## Current Baseline

| Area | Current behavior | Why it matters for future elements |
|---|---|---|
| Layout source | The Pico declares controls such as `button`, `slider`, `toggle`, and `radar`. | Students can understand the UI by reading `main.py`, and a project can expose only the controls it needs. |
| App to Pico | Buttons send `button,NAME`, sliders send `slider,NAME:VALUE`, toggles send `toggle,NAME:0/1`. | New control elements should follow this readable command style whenever possible. |
| Pico to app | Radar sends `radar,NAME,ANGLE,DISTANCE`; toggles can report `toggle_state,NAME,0/1`. | New sensor elements can use the same "type,name,data..." idea for telemetry. |
| Layout editing | Controls are placed, resized, rotated, and saved back to the Pico. | New elements should have sensible default sizes and edit-mode previews. |
| Devices | The same app can run on phones, tablets, laptops, and desktops. | Some elements should be touch-first, while others can add keyboard and desktop shortcuts. |

## Control Elements

| Element idea | Data direction | Example payload idea | Brief explanation and use case |
|---|---|---|---|
| Text output / student terminal | Pico to app | `text,LOG,Hello world` | A user-level terminal controlled from `main.py`. Students can print status, debug values, instructions, sensor warnings, or game messages without opening the developer debugger. |
| Text input field | App to Pico | `input,NAME:hello` | Lets students send typed commands, names, passwords, or parameter values to the Pico. Useful for lessons about parsing, state machines, and simple command interpreters. |
| Numeric input / stepper | App to Pico | `number,SPEED:42` | Better than a slider when exact values matter, such as servo calibration, PID tuning, thresholds, or timing constants. |
| Servo dial | App to Pico | `servo,WRIST:90` | A circular or arc-shaped control that visually matches servo motion. It could declare min/max degrees and optional snap points. |
| Servo slider | App to Pico | `servo,SHOULDER:120` | Similar to the existing slider but styled and labeled as an angular joint. Good for beginner robot arms where students think in degrees. |
| Joystick | App to Pico | `joystick,DRIVE:23,-80` | A two-axis control for robot cars, tanks, pan/tilt mounts, and games. On touch it behaves like a thumbstick; on desktop it can map to WASD or arrow keys. |
| D-pad | App to Pico | `dpad,MOVE:up` | Four or eight direction buttons for simpler robots. Easier than analog joystick for beginner lessons and reliable on small phone screens. |
| Momentary hold button | App to Pico | `hold,CLAW:1` then `hold,CLAW:0` | Sends press and release instead of one click. Useful for motors, buzzers, pumps, grippers, and "move while held" actions. |
| Button group | App to Pico | `choice,MODE:auto` | A compact segmented control for selecting modes: manual/auto, slow/fast, line-follow/remote, red/green/blue. |
| Radio choice | App to Pico | `select,PATTERN:rainbow` | Similar to button group, but for longer option names or more choices. Useful for LED patterns and behavior selection. |
| Multi-toggle bank | App to Pico | `bits,OUTPUTS:10110000` | A dense panel for many digital outputs, such as relays, LEDs, or GPIO experiments. It saves space compared with many separate toggles. |
| Keypad / matrix buttons | App to Pico | `keypad,KEYS:7` | A 3x3, 4x4, or custom keypad for access-code projects, calculator projects, robot mode menus, or quiz games. |
| Macro button | App to Pico | `macro,DEMO1` | Triggers a named routine on the Pico, such as "dance", "park arm", "scan room", "reset experiment", or "start mission". |
| Emergency stop | App to Pico | `estop,1` | A large, high-priority stop control that can be visually distinct and optionally always pinned. Useful for motors, arms, and classroom safety. |
| Keyboard control mapper | App to Pico | `key,DRIVE:w,1` / `key,DRIVE:w,0` | On laptops/desktops, physical keys can control robots. This makes tanks, cars, cranes, and games easier to drive with both hands. |
| Gamepad mapper | App to Pico | `gamepad,AXES:0.2,-0.7` | Browser Gamepad API support could let USB/Bluetooth controllers drive robots. Useful for advanced students and public demos. |
| Gesture pad | App to Pico | `gesture,PAD:swipe_left` | A touch surface for swipes, taps, and long presses. Useful for small phone screens where full controls may be crowded. |
| Color picker | App to Pico | `color,LED:255,80,10` | Lets students choose RGB colors for NeoPixels, RGB LEDs, status lights, and visual feedback projects. |
| Color palette buttons | App to Pico | `palette,LED:red` | A beginner-friendly alternative to full RGB picking. Teachers can define named colors or lesson-specific palettes. |
| Timer / countdown control | App to Pico | `timer,START:30000` | Starts timed experiments, motors, games, or measurements. Useful for science-style classroom activities. |
| Calibration wizard element | App to Pico and Pico to app | `calibrate,SERVO:start` / `calibration,SERVO,90,ok` | A guided element for setting min/max servo angles, sensor baselines, motor trims, or safe arm positions. |

## Sensor And Viewing Elements

| Element idea | Data direction | Example payload idea | Brief explanation and use case |
|---|---|---|---|
| Value display | Pico to app | `value,TEMP:22.4` | Shows one live number with unit and optional min/max. Useful for temperature, distance, battery voltage, light level, speed, or angle. |
| Gauge / meter | Pico to app | `gauge,BATTERY:74` | A visual meter for values that should be understood quickly. Good for battery, signal strength, tank level, speed, brightness, and sensor confidence. |
| Bar graph | Pico to app | `bar,LIGHT:621` | Simple visual feedback for analog readings. Excellent for beginner sensor lessons because students can immediately see change. |
| Multi-channel bars | Pico to app | `bars,LINE:120,820,760,130` | Displays arrays from line sensors, sound spectrum bins, color channels, or multiple analog pins. |
| Line chart | Pico to app | `plot,TEMP:22.1` | Shows values over time. Useful for experiments, battery drain, sensor smoothing, PID tuning, and classroom data collection. |
| XY plot | Pico to app | `xy,ACCEL:0.12,-0.33` | Shows two-axis readings such as joystick echo, accelerometer tilt, magnetometer direction, or robot position. |
| 3-axis vector display | Pico to app | `vector,IMU:0.1,-0.2,9.7` | Makes movement sensor data easier to understand than raw numbers. Useful for accelerometers, gyros, magnetometers, and orientation lessons. |
| Tilt / artificial horizon | Pico to app | `tilt,IMU:roll,pitch` | A visual orientation element for motion sensors. Good for balancing robots, handheld controllers, and aerospace-style demos. |
| Compass | Pico to app | `compass,HEADING:274` | Displays heading from a magnetometer or calculated robot direction. Useful for navigation and rover projects. |
| Distance cone | Pico to app | `distance,FRONT:63` | A simple proximity viewer for ultrasonic or infrared sensors. Easier than radar when the sensor does not rotate. |
| Radar / sonar scan | Pico to app | Already exists: `radar,NAME,ANGLE,DISTANCE` | Keep improving the current radar as a showcase: adjustable fade, sweep trail, distance labels, and multiple pings. |
| Camera-free occupancy grid | Pico to app | `gridmap,ROOM:4,6,1` | A low-bandwidth map where cells can be unknown, empty, or blocked. Useful for mapping robots without streaming video. |
| Event log | Pico to app | `event,SYSTEM:Line lost` | A structured log element for student-readable events. Different from terminal text because it can show severity, timestamps, and filtering. |
| Status badge | Pico to app | `status,MODE:Scanning` | A compact label for the Pico's current mode, connection state, mission step, or error state. |
| Image-like LED matrix preview | Pico to app | `matrix,DISPLAY:8,8,hexdata` | Shows what an LED matrix or small display is showing. Useful when the robot or display is not physically visible to every student. |
| Audio level meter | Pico to app | `audio,MIC:43` | Makes microphone, clap detector, or sound-reactive projects easier to demonstrate. |
| Frequency / spectrum viewer | Pico to app | `spectrum,MIC:3,8,12,4` | More advanced sound experiments can visualize bins without streaming audio. |
| GPS / coordinate display | Pico to app | `gps,POS:55.6761,12.5683` | For outdoor projects or simulated navigation lessons. Can be shown as numbers first, with map support later if desired. |
| Table view | Pico to app | `row,SENSORS:temp=22,light=410` | A compact way to show many named values from one project without creating a separate visual for every sensor. |
| State machine viewer | Pico to app | `state,ROBOT:FOLLOW_LINE` | Helps students debug programs that move through states such as idle, scan, avoid, drive, park, or error. |

## NeoPixel And LED Ideas

| Element idea | Data direction | Example payload idea | Brief explanation and use case |
|---|---|---|---|
| Single NeoPixel color | App to Pico | `pixel,LED:0,255,40,0` | Easy beginner case: choose a color for one LED. Works well with a color picker and a brightness slider. |
| NeoPixel strip length declaration | Layout metadata | `neostrip,STRIP,n,n,n,n,0,100` | The Pico should declare strip length as metadata, so the app knows whether it is controlling 8, 30, 60, or 100 LEDs. |
| Whole strip fill | App to Pico | `strip,STRIP:fill,255,0,0` | Efficient for 100 LEDs because one command controls all pixels. Useful for lamps, costumes, signs, and status bars. |
| Pixel range fill | App to Pico | `strip,STRIP:range,10,30,0,0,255` | Efficient middle ground for long strips. Students can color sections without sending 100 separate pixel commands. |
| Pattern selector | App to Pico | `strip,STRIP:pattern,rainbow` | The Pico runs animations locally while the app only chooses pattern, speed, brightness, and colors. This avoids BLE bandwidth problems. |
| Pattern parameter sliders | App to Pico | `strip_param,STRIP:speed,45` | Lets the app tune local Pico animations. Good for teaching variables, loops, and visual effects. |
| Pixel painter | App to Pico | `strip,STRIP:set,17,255,255,0` | A visual strip editor where students tap individual LEDs. Best for shorter strips or occasional edits, not high-speed animation. |
| Compressed pixel frame | App to Pico | `strip_frame,STRIP:hex...` | For advanced use, send a compact RGB frame in chunks. Useful for 8x8 matrices or small strips, but should not be the default for 100 LEDs. |
| Strip preview telemetry | Pico to app | `strip_state,STRIP:pattern,rainbow,brightness,80` | Lets the app reflect what the Pico is currently doing, especially after reconnecting or when the Pico changes modes itself. |
| LED matrix editor | App to Pico | `matrix_set,FACE:3,4,255,0,0` | For 5x5, 8x8, or 16x16 matrices. Students can design icons, robot faces, traffic lights, or simple animations. |

## Robot Arm Elements

| Element idea | Data direction | Example payload idea | Brief explanation and use case |
|---|---|---|---|
| Six-servo arm panel | App to Pico | `arm,ARM:90,80,120,90,60,20` | One element can group base, shoulder, elbow, wrist sideways, wrist, and gripper. It saves layout space compared with six independent sliders. |
| Individual joint controls | App to Pico | `servo,SHOULDER:82` | Good for lessons where students learn each joint separately. Each joint can declare min/max/safe default. |
| Arm pose buttons | App to Pico | `pose,ARM:park` | Named positions such as park, pickup, drop, wave, home, and inspect. Students can write the pose logic in `main.py`. |
| Record pose | App to Pico and Pico to app | `pose_record,ARM:slot1` | Lets students manually move sliders, save a pose, then replay it. Useful for robotics lessons without writing arrays by hand. |
| Pose sequence player | App to Pico | `sequence,ARM:start` | Runs a stored series of poses on the Pico. The app can provide start, pause, step, loop, and speed controls. |
| Gripper control | App to Pico | `gripper,CLAW:42` | A specialized slider or pinch control for open/close. It can include safe limits to avoid overdriving the servo. |
| Joint limit visualizer | Pico to app | `joint_state,SHOULDER:82,ok` | Shows actual or commanded joint angles, limit warnings, and whether the arm is in a safe zone. |
| Inverse kinematics target pad | App to Pico | `ik,ARM:x,y,z,grip` | Advanced option: users drag a target point, while Pico or app calculates servo angles. Good for older students and math lessons. |
| Arm mirror mode | App to Pico | `arm_delta,ARM:base,+2` | Small incremental movement buttons or keyboard shortcuts for precise adjustments. Useful when direct sliders are too jumpy. |
| Safety envelope | Pico to app | `arm_warn,ARM:elbow_limit` | A visible warning when a pose is outside allowed geometry or servo limits. Important for classroom durability. |

## Robot Vehicle Elements

| Element idea | Data direction | Example payload idea | Brief explanation and use case |
|---|---|---|---|
| Tank drive pair | App to Pico | Existing sliders: `slider,VENSTRE MOTOR:-80` | Keep the current TankControl example as a clear two-slider beginner project. |
| Arcade drive joystick | App to Pico | `drive,TANK:forward,turn` | One joystick can control both speed and steering. Easier for many drivers than two tank sliders. |
| WASD drive | App to Pico | `keydrive,TANK:w,a` | Laptop keyboards are excellent for robot cars. The app can expose keyboard mappings only on devices with hardware keyboards. |
| Speed limiter | App to Pico | `limit,SPEED:40` | A teacher-friendly control to cap motor speed for safety or indoor testing. |
| Trim controls | App to Pico | `trim,LEFT:+5` | Fine-tunes motor mismatch so a robot drives straight. Good lesson in calibration and real-world imperfections. |
| Autonomy mode selector | App to Pico | `mode,ROBOT:line_follow` | Switches between manual drive, line following, obstacle avoidance, and remote-controlled mode. |
| Mission buttons | App to Pico | `mission,ROBOT:start` | Start/stop/retry controls for challenge courses, sumo bots, maze solvers, and classroom competitions. |
| Sensor overlay dashboard | Pico to app | `vehicle_state,speed,heading,battery` | A compact status panel showing what the robot thinks is happening while it drives. |

## Protocol And Data Shape Ideas

| Idea | Direction | Example payload idea | Brief explanation and use case |
|---|---|---|---|
| Generic telemetry line | Pico to app | `telemetry,NAME,key=value,key=value` | A flexible fallback for new sensor views. It keeps early prototypes possible before a dedicated visual element exists. |
| Element-specific command prefix | Both | `servo,NAME:90`, `color,NAME:r,g,b` | Each new element can have a readable type prefix, matching the current `button`, `slider`, and `toggle` style. |
| Batched updates | Pico to app | `batch,value,A:1;value,B:2;status,M:ok` | Reduces BLE overhead when many sensors update at once. Useful for sensor dashboards and robot telemetry. |
| Rate hints | Layout metadata | `plot,TEMP,n,n,n,n,0,min,max,unit,rate` | Elements could declare expected update rate so the app can buffer, throttle, or draw history appropriately. |
| Units and labels | Layout metadata | `value,TEMP,n,n,n,n,0,C,0,50` | Units make data meaningful for students. A `value` display should know whether it is showing cm, V, deg, percent, or raw ADC. |
| Min/max ranges | Layout metadata | `gauge,BATTERY,n,n,n,n,0,0,100,%` | Ranges let the app render gauges and warnings without hardcoding project details. |
| Severity levels | Pico to app | `event,SYSTEM,warning,Low battery` | Logs and alerts become easier to scan. Good for classroom troubleshooting. |
| State restore on reconnect | Pico to app | `state_dump,...` | After reconnecting, the Pico can resend current toggle states, slider values, selected modes, and sensor baselines. |
| Capability versioning | Both | `#VERSION,2` plus feature flags | New elements should be versioned so older apps and older firmware fail gracefully. |
| Chunked large payloads | Both | Existing reliable stream style | Large LED frames, file operations, or table snapshots should use reliable framing instead of many fragile small commands. |

## Handheld, Laptop, And Desktop Use Cases

| Device type | Strengths | Control panel ideas |
|---|---|---|
| Phone | Always available, touch-first, good for quick robot testing. | Large buttons, toggles, joysticks, color picker, simple gauges, emergency stop, compact robot controls. |
| Tablet | Bigger touch surface, good for dashboards and shared viewing. | Robot arm panel, radar, charts, LED matrix editor, sensor dashboard, classroom demos. |
| Laptop | Keyboard input, larger display, easier coding next to the panel. | WASD robot driving, terminal text, data plots, calibration tools, Pico IDE plus live controls. |
| Desktop | Best for full dashboards, long sessions, and project development. | Multi-sensor views, gamepad control, advanced plotting, arm sequencing, LED animation authoring. |
| Shared classroom screen | Good for demonstrations and debugging as a group. | Read-only telemetry dashboards, event logs, radar scans, state machine viewer, competition status displays. |

## Candidate Project Showcases

| Project | Useful elements | Why it justifies the platform |
|---|---|---|
| Onboard LED | Button, slider, toggle, text output, color/pattern concepts for external LEDs. | A minimal first lesson that proves commands, state, and feedback with almost no hardware. |
| Tank / robot car | Tank sliders, joystick, D-pad, WASD keyboard, trim, speed limiter, distance display. | Demonstrates touch and keyboard control, motor safety, calibration, and live robot telemetry. |
| Radar scanner | Toggle, radar view, distance display, event log, servo dial. | Shows bidirectional control and sensor visualization in a way students can immediately understand. |
| Six-servo arm | Servo dials, grouped arm panel, pose buttons, record/playback, safety warnings. | Shows why customizable grouped controls are needed beyond simple buttons and sliders. |
| NeoPixel strip or matrix | Color picker, palette, pattern selector, strip preview, matrix editor. | Demonstrates that the app can control creative output devices without sending excessive BLE data. |
| Weather station | Value displays, gauges, line charts, event log. | Makes the panel useful even when the Pico is mostly a sensor device rather than a robot. |
| Motion controller | 3-axis vector, tilt view, compass, gesture pad. | Supports movement sensors and handheld-controller projects. |
| Classroom challenge robot | Mission controls, status badges, event log, sensor dashboard, emergency stop. | Gives teachers a reusable control surface for competitions and iterative student projects. |

## Implementation Notes To Consider Later

| Topic | Recommendation |
|---|---|
| Keep `main.py` readable | New elements should be declared with short tuples or small helper classes that students can understand. |
| Avoid BLE overload | Prefer high-level commands such as pattern, fill, range, and mode over streaming continuous large data. |
| Use local animation on the Pico | NeoPixel effects and servo sequences should usually run on the Pico after the app sends parameters. |
| Add desktop affordances carefully | Keyboard and gamepad support should be optional and visible only when relevant, so phone users are not confused. |
| Preview every element in edit mode | Each new element needs a static preview that communicates its purpose before any data arrives. |
| Design for reconnection | Elements with state should support a Pico-to-app state update after reconnect. |
| Keep raw escape hatches | A generic text terminal and generic telemetry element can support experiments before polished controls exist. |
| Teach with names and units | Units, ranges, and labels make data more meaningful and reduce the amount of explanation teachers need to repeat. |
