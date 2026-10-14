# GR-DLC

**Add a DLC to your GR.**

An open-source expansion toolkit for Ricoh GR cameras: film colour, independent Image Control slots, custom ratios and power-off images.

[中文](README.md) · [Releases](https://github.com/Mrjie7205/GR-DLC/releases) · [Issues](https://github.com/Mrjie7205/GR-DLC/issues) · [Credits](CREDITS.md) · [GPL-2.0-only](LICENSE)

GR-DLC is an independently maintained derivative of [Maxwooow/Ricoh-GRMod](https://github.com/Maxwooow/Ricoh-GRMod) and the community projects credited below. It retains upstream Git history and notices, is maintained by Mrjie7205, and is not a Ricoh product or an official upstream release. Version **0.1.0** continues the work previously published as GR Mod `0.6.4-film120-jpg-w2`.

![GR-DLC film catalogue, package-inspired icons and CUBE import](docs/images/film-library.jpg)

## Features and camera status

| Feature | GR IIIx HDF · 1.60 | GR IV / GR IV HDF · 1.11 |
| --- | --- | --- |
| Nine independent film slots, names and icons | Camera feedback available; factory controls preserved | Software/native-function checks passed; camera testing pending; both Cinema looks preserved |
| Custom ratios and RAW | T4 wide-ratio flicker fix confirmed; full 6000×4000 RAW checked in samples | Existing ratio/RAW code retained; nine-slot combination needs camera tests |
| Film name, version and parameter fingerprint in JPEG EXIF UserComment | Checked in camera-produced files | Not ported |
| Embedded W2 power-off image | Display and clarity confirmed on a camera | Not ported; existing image method retained |
| Other tools | Clarity-table soft focus | Inherited ADJ soft focus, date imprint and monochrome looks |

The library contains **120 stock entries and package-inspired icons**. Import your own display-sRGB `.cube` and select up to nine films per firmware. Camera matrices and RGB curves approximate colours; this is not full in-camera 3D LUT execution and does not add spatial grain or halation.

Hardware feedback covers a subset of films and settings, not all 120 stocks or all combinations. Other camera/firmware versions are outside this release's support scope.

## Get started

1. Download your computer build from [Releases](https://github.com/Mrjie7205/GR-DLC/releases). macOS uses a local browser UI; Windows uses WebView2 or a browser.
2. Select your exact model and open the matching official firmware: **IIIx HDF 1.60** or **GR IV family 1.11**. A newer download is not automatically supported.
3. Import your own CUBE through the library, assign up to nine slots and choose ratios or a power-off image.
4. Export to a computer folder first, then follow the camera's official SD-card update procedure. Keep original firmware, settings and photographs.

**Public builds include the catalogue, icons and import/conversion tools, but no third-party LUTs, fitted parameter payloads or Ricoh firmware.** Missing inputs appear as importable entries. The developer's local research installation has 119 prepared inputs, with Velvia 100F pending; public builds do not bundle those 119 presets. Per-stock provenance is in [catalog.json](ui/public/film-library/catalog.json).

This first independent release is a preview. Firmware modification has risks and no manufacturer warranty. Read the [camera status and validation guide](docs/GR3X_HDF.md) before testing. macOS builds are ad-hoc signed, not Apple-notarized.

## Projects behind GR-DLC

| Project | Relationship |
| --- | --- |
| [Maxwooow/Ricoh-GRMod](https://github.com/Maxwooow/Ricoh-GRMod) | Direct code base: UI/shell, firmware containers, checks, colour conversion and GR IV tools |
| [DoYitNow/gr-custom-tool](https://github.com/DoYitNow/gr-custom-tool) | Crop compiler port, native code and reference validation; foundation for the later IIIx adaptation |
| [radium-wang/ricoh-gr4-firmware-analysis-and-feature-expansion](https://github.com/radium-wang/ricoh-gr4-firmware-analysis-and-feature-expansion) | Public GR IV firmware and power-off image research; IIIx W2 is a later adaptation |
| [lemonadesaltbagel/GR4-MonoUnlock](https://github.com/lemonadesaltbagel/GR4-MonoUnlock) | GR IV monochrome-unlock method; inherited implementation describes method reference without copied code |
| [t3mujinpack](https://github.com/t3mujinpack/t3mujinpack), [G'MIC Color Presets](https://gmic.eu/color_presets/) | Hald/colour sources for catalogue and local film research |
| [Spectral Film LUT](https://github.com/JanLohse/spectral_film_lut), [Redlamp](https://github.com/pdcgomes/redlamp) | Spectral/colour models adapted to sRGB for local research |
| [Moderate Film Simulator](https://github.com/Moder4te/moderates-film-simulator), [PictureFX / Marc Roovers](https://marcrphoto.wordpress.com/2025/02/28/picturefx-cinestill-800t-v2-0-lut/) | Selected model research and CineStill input; separate terms apply |

[CREDITS.md](CREDITS.md) records pinned references, licences and adaptations. Listing a project does not imply its authors maintain or endorse GR-DLC.

This branch adds the IIIx HDF 1.60 port, capture-resume fixes, full RAW preservation, nine film slots for both families, the 120-stock catalogue/icons, JPEG recipe identities, W2 export and macOS integration. Commits and test evidence remain available.

## Build and test

Node.js 22+ and Go 1.24+ are required. Normal builds never fetch LUTs or firmware.

```sh
git clone https://github.com/Mrjie7205/GR-DLC.git
cd GR-DLC
npm ci
npm run build
cd shell
./build.sh macos     # dist/GR-DLC.app; requires macOS
# ./build.sh windows # dist/GR-DLC.exe; Windows x64
# ./build.sh dev     # dist/gr-dlc-dev; Linux headless development build
```

Install `go install github.com/tc-hib/go-winres@v0.3.3` to regenerate Windows resources. Run `npm test`, `npm -w core run typecheck` and, inside `shell/`, `go test ./...`. Private-fixture tests skip without their inputs; the [validation guide](docs/GR3X_HDF.md) documents optional `GRMOD_GR3X_FIRMWARE`, `GRMOD_GR4_FIRMWARE` and `GRMOD_GR3X_W2` variables.

GR-DLC stores data separately: `~/Library/Application Support/GR-DLC` on macOS, `%LOCALAPPDATA%\GR-DLC` on Windows, `$XDG_DATA_HOME/gr-dlc` or `~/.local/share/gr-dlc` in Linux development mode. To migrate, close both apps, back up GR Mod and copy its `store/` into the new directory. Keep personal images and firmware private. Internal APIs, project formats and firmware markers remain compatible.

## Contribute and licence

Stars, forks, reproducible reports and improvements are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). Code remains **GPL-2.0-only** with original notices retained; distribute complete corresponding source and build instructions with binaries. Third-party assets retain their terms and are not relicensed by catalogue inclusion. Ricoh/GR and film names belong to their respective owners.

Independent release date: 2026-10-15. See [CHANGELOG.md](CHANGELOG.md) and the retained [technical background](docs/TECHNICAL_BACKGROUND.md).
