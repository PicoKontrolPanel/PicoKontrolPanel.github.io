# Pico Kontrol Panel Public Site

This repository is the public GitHub Pages deployment repository for Pico
Kontrol Panel.

It should contain only generated static website files and intentionally public
downloads needed by visitors. The full source code, firmware source, build
configuration, development documentation, and deployment script live in the
private `PicoKontrolPanel-Sourcecode` repository.

Do not manually add source files, dependency folders, private notes, or build
tooling here. Deploy fresh output from the private source repository with:

```powershell
.\scripts\deploy-pages.ps1
```
