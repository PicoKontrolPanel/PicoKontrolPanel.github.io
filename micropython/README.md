# Browser MicroPython runtime

Kodeværkstedet loads these files inside a dedicated Web Worker when running
browser-based MicroPython (no Pico connected):

- `micropython.mjs`
- `micropython.wasm`

Current bundled runtime:

- Package: `@micropython/micropython-webassembly-pyscript`
- Version: `1.28.0-6`
- Source: `https://www.npmjs.com/package/@micropython/micropython-webassembly-pyscript`
- License: MIT

This is the official MicroPython `ports/webassembly` build (PyScript variant). It
exposes the modern `loadMicroPython({ stdin, stdout, stderr })` factory API and
`runPythonAsync`, which is what the worker uses.

## Interactive `input()`

The old bundled runtime (Rami Ali 2017 port) had no working stdin path, so
`input()` could never receive characters in the browser. This build reads stdin
through the `stdin` callback (`FS.createDevice("/dev/stdin", ...)`), one byte per
call. The worker backs that callback with a `SharedArrayBuffer` + `Atomics.wait`
so a running program can block until the terminal supplies a line.

Because `SharedArrayBuffer` requires cross-origin isolation, the app sends
`Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy:
require-corp` (via `sw.js` in production and the Vite dev/preview server locally).

The builtin `input()` in this build reads from a raw TTY path that ignores the
`stdin` device, so the worker shadows `input()` with a small Python shim that
reads via `sys.stdin.readline()` (which does use the `stdin` device). See
`src/workers/offlineMicroPython.worker.ts`.
