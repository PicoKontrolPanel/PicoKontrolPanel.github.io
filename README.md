# Pico Kontrol Panel Public Site

This repository is the public GitHub Pages deployment repository for Pico
Kontrol Panel.

It should contain only generated static website files and intentionally public
downloads needed by visitors. The full source code, firmware source, build
configuration, development documentation, and deployment script live in the
private sibling repository:

```text
D:\Website Projects\PicoKontrolPanel\PicoKontrolPanel-Sourcecode
```

Do not manually add source files, dependency folders, private notes, or build
tooling here. Deploy fresh output from the private source repository with:

```powershell
cd "D:\Website Projects\PicoKontrolPanel\PicoKontrolPanel-Sourcecode"
.\scripts\deploy-pages.ps1
```

This Pages repository is expected to be served from the `main` branch root.

## What Belongs Here

This repository should contain only files needed by GitHub Pages or intentionally
public visitor downloads:

- `index.html`
- bundled JavaScript and CSS in `assets/`
- public images in `art/`, `icons/`, and `device-icons/`
- `manifest.webmanifest`
- `sw.js`
- browser MicroPython runtime files in `micropython/`
- public firmware downloads in `firmware/micropython/`
- this README and a small `.gitignore`

The current intentionally public download is:

- MicroPython UF2 files are downloaded from official MicroPython links and are not bundled in this repository.

## What Does Not Belong Here

Do not add these to this public repository:

- `src/`
- editable firmware source such as `BLEPeripheral.py` or example `main.py`
  programs
- `package.json`, lockfiles, Vite/TypeScript configs, or build scripts
- `node_modules/`
- private notes, planning docs, tests, or development-only documentation
- `.env` files, credentials, API keys, or internal configuration

If a file is needed to rebuild the site, it belongs in the private source
repository. If a file is needed only after the site is built, it can be deployed
here by the source repository's deploy script.

## Future Agent Notes

This repository has intentionally clean public history. Avoid making source
changes directly here. The normal workflow is:

1. Edit `PicoKontrolPanel-Sourcecode/`.
2. Build the source project.
3. Run `PicoKontrolPanel-Sourcecode/scripts/deploy-pages.ps1`.
4. Review the generated changes in this repository.
5. Commit this repository separately from the source repository.

The deploy script preserves this repo's `.git` folder and regenerates the static
site from `dist/`. It does not commit or push automatically.

GitHub Pages should be configured to serve from:

```text
Branch: main
Folder: / (root)
```
