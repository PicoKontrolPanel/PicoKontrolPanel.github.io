# Offline MicroPython runtime

Kodeværksted loads these files inside a dedicated Web Worker when no Pico is connected:

- `micropython.mjs`
- `micropython.wasm`

Current bundled runtime:

- Package: `@yeliulee/micropython-wasm`
- Version: `1.0.0`
- Source: `https://www.npmjs.com/package/@yeliulee/micropython-wasm`
- License: MIT

The package ships `micropython.js`; it is copied here as `micropython.mjs` so the
app has a stable runtime URL. This is an older Emscripten MicroPython build, not
Pyodide/CPython. It should be replaced with a freshly built official
MicroPython `ports/webassembly` runtime when that build pipeline is added.

Local patch:

- The Node auto-run guard was changed from `typeof window === 'undefined'` to
  also require `typeof require !== 'undefined'`, because Web Workers also have
  no `window` but must not execute the Node CLI path.
- Worker path detection reads `self.MICROPYTHON_RUNTIME_BASE` when present so
  the WASM file is loaded beside this runtime instead of beside Vite's worker
  bundle.
