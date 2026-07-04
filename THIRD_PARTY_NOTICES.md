# Third-Party Notices

This repository contains generated static website assets. Pico Kontrol Panel's
own code and content are covered by `LICENSE`. Third-party software remains
covered by its own license terms.

## Runtime JavaScript Dependencies

The generated JavaScript bundle may include code from these dependencies:

- React, copyright Meta Platforms, Inc. and affiliates, MIT License.
- React DOM, copyright Meta Platforms, Inc. and affiliates, MIT License.
- Zustand, copyright Paul Henschel, MIT License.

MIT License text:

```text
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Offline MicroPython Runtime

The files in `micropython/` are derived from `@yeliulee/micropython-wasm`
version `1.0.0`, identified by the project documentation as MIT licensed. The
local copy is patched for browser-worker loading; see `micropython/README.md`.
