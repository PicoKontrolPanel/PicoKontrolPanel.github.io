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

## Network / API calls

`urequests`, `socket`, `usocket`, and `network` are not available in this
build (confirmed by attempting each import: all raise `ImportError`/no such
module). Those only work on a real Pico with Wi-Fi.

The build does ship `import js`, a live proxy over the worker's JavaScript
global scope (this is the official webassembly port's JS FFI, exposed as
`asyncio.jsffi` underneath). Because the code runs inside a Web Worker, that
global scope includes the real `fetch()`. Combined with
`asyncio.ThenableEvent`, which wraps a JS `Promise`/thenable so it can be
`await`-ed from MicroPython, user code can make real HTTP requests:

```python
import js
from asyncio import ThenableEvent

response = await ThenableEvent(js.fetch(url)).wait()
data = await ThenableEvent(response.json()).wait()
```

`response`/`data` are `JsProxy` objects (no `.to_py()` in this build), but
both `data["key"]` and `data.key` work, so most dict-shaped API code reads
unchanged. This was verified end-to-end (including in a real headless Chrome
tab, not just Node) against the same Open-Meteo endpoint used in
`device-runtime/examples/API/main.py`; see
`docs/OFFLINE_MICROPYTHON_TESTS.md` for the full example. CORS is up to the
target API (Open-Meteo sends `Access-Control-Allow-Origin: *`); APIs without
permissive CORS headers cannot be called this way from the browser.
