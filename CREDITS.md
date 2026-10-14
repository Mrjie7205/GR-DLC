# Sources, authors and licences / 项目来源与致谢

GR-DLC is maintained by Mrjie7205 as an independent derivative, not a claim of authorship over upstream work. Original authors, notices and Git history remain part of this project. This inventory was prepared on **2026-10-15**.

## Direct code base

- **[Maxwooow/Ricoh-GRMod](https://github.com/Maxwooow/Ricoh-GRMod)** — GPL-2.0-only. The direct foundation includes the TypeScript firmware/container engine, colour fitting, React UI, Go desktop shell and GR IV features. The retained upstream base is `d2145e7efcf41d31215675005987a73476d76004` (GR Mod 0.6.1); our preceding integration is `2cb491bfe3e741ec46dbce48ba52657c754648ea` (0.6.4-film120-jpg-w2). Both remain in the ancestry of this repository. The original geometric application icon is also inherited from `shell/tools/genicon/`.
- **[DoYitNow/gr-custom-tool](https://github.com/DoYitNow/gr-custom-tool)** — GPL-2.0-only. GR Mod ported its crop compiler and embedded compiled native crop code; the IIIx adaptation builds on that foundation. The reference pinned by the upstream notice is `0c15c8f`. Included C sources and the precise derivation map are in [third_party/gr-custom-tool/NOTICE.md](third_party/gr-custom-tool/NOTICE.md), with the [original licence](third_party/gr-custom-tool/LICENSE) and [author statement](third_party/gr-custom-tool/AUTHOR_STATEMENT.md). See also `tools/gr3x/native/map.c` and its retained licence header.

## Firmware research and methods

- **[radium-wang/ricoh-gr4-firmware-analysis-and-feature-expansion](https://github.com/radium-wang/ricoh-gr4-firmware-analysis-and-feature-expansion)** — credited by GR Mod for public GR IV firmware and power-off image research. GR-DLC retains that acknowledgement. The IIIx W2 A: resource adaptation, packaging checks and hardware evidence are documented separately in [GR3X_HDF.md](docs/GR3X_HDF.md); credit for the earlier research is not a claim that it provided or validated this later port.
- **[lemonadesaltbagel/GR4-MonoUnlock](https://github.com/lemonadesaltbagel/GR4-MonoUnlock)** — source of the GR IV monochrome-look unlock method. The inherited GR Mod implementation states that no code was copied from this project. The GR IIIx six-style Replica experiment was an approximation, not a port of the GR IV Monochrome processing engine; it is not part of the current nine-film selection.

## Film sources and local research

The public repository contains provenance and package-inspired icons, not downloaded LUT/Hald files or fitted parameter payloads. Normal builds do not download them. Each catalogue entry records the selected source, available alternatives, hashes and adapter notes in [catalog.json](ui/public/film-library/catalog.json).

| Source / authors | Pinned reference and relationship | Licence / distribution note |
| --- | --- | --- |
| [t3mujinpack](https://github.com/t3mujinpack/t3mujinpack), João Pedro Almeida and contributors | `0b421f3e25209ed78253d1724a29cc6255c5e7fe`; Hald sources, including the first eight T6 films | MIT; [notice](ui/public/film-library/licenses/t3mujinpack.txt) retained |
| [G'MIC Color Presets](https://gmic.eu/color_presets/), collection and individual preset authors | Selected Hald sources and candidate catalogue; per-entry page and source hash retained | A collection contains multiple authors; no blanket licence claim is made for every preset |
| [JanLohse/spectral_film_lut](https://github.com/JanLohse/spectral_film_lut), Jan Lohse and contributors | `6307a98f3cf4f2d7b6d09bab82fbf6f64356ccfe`; local spectral-model to display-sRGB experiments | MIT; [notice](ui/public/film-library/licenses/spectral-film-lut.txt) retained |
| [pdcgomes/redlamp](https://github.com/pdcgomes/redlamp) | `773c412be2f2b786697d353d12c6a2ac6eba5687`; local scene-log / Rec.2020 look-table adaptation | MPL-2.0; [text](ui/public/film-library/licenses/redlamp-mpl.txt) retained; model payloads excluded |
| [Moder4te/moderates-film-simulator](https://github.com/Moder4te/moderates-film-simulator) | `21058bde4245c6a3150d9fca3b60b6450150caee`; local ProPhoto model-to-sRGB experiments | PolyForm Noncommercial 1.0.0; [text](ui/public/film-library/licenses/moderate-noncommercial.txt) retained. This source is not represented as an unrestricted open-source asset |
| [PictureFX / Marc Roovers](https://marcrphoto.wordpress.com/2025/02/28/picturefx-cinestill-800t-v2-0-lut/) | CineStill 800T v2.0 N125; source hash in [T6 provenance](examples/gr3x/T6/SOURCES.json). The later C1 correction is documented in [rebuild notes](docs/GR3X_T6_C1_REBUILD.txt) | An author's free personal download does not establish a redistribution grant; the source and derived payload stay local |

Optional adapter scripts under `tools/film-library/` document research conversions. They require separately obtained inputs and do not replace those inputs' licences. A source listed as an alternative was not necessarily selected or tested. The private 119-input library, the public 120-entry catalogue and the nine slots in a firmware are different quantities.

Icons were drawn for the catalogue using packaging colours and identifying text; they are not a bundle of downloaded manufacturer logos. Packaging reference URLs and generated icon hashes are recorded per stock, with the original nine-film references in [ICON-SOURCES.json](examples/gr3x/T6/ICON-SOURCES.json). Film names, packaging and trademarks belong to their respective owners; no endorsement is implied.

## Other resources and dependencies

- **DPReview studio test scene** — `ui/src/assets/preview.jpg` was included by upstream GR Mod with permission, according to its README. It is retained with that attribution and is **not** covered by the code licence. No new permission from DPReview is claimed here. Users can choose their own preview image.
- **Barlow Condensed** — the bundled typeface from `@fontsource/barlow-condensed`, under its SIL Open Font License. The dependency's licence is retained with binary distributions.
- **React, Vite, TypeScript, fflate, Go and desktop dependencies** — versions and dependency relationships are recorded in `package-lock.json`, `shell/go.mod` and `shell/go.sum`. Binary distributions include dependency licence notices.
- **Ricoh firmware** — proprietary input supplied by the user or downloaded from Ricoh under its own terms. It is not included or relicensed by GR-DLC.

## Work maintained in this branch

Our commits add the GR IIIx HDF 1.60 port, capture-resume/display fixes, full RAW preservation, nine independent film slots for both camera families, catalogue/icons and source tracking, IIIx JPEG identities, W2 embedded shutdown images, macOS integration and independent-project packaging. These additions retain their underlying sources and existing licence notices. The [technical background](docs/TECHNICAL_BACKGROUND.md), [camera validation guide](docs/GR3X_HDF.md) and commit history describe the boundaries of the work.

GR-DLC code remains GPL-2.0-only. This document supplements, rather than replaces, original file notices. Attribution does not grant rights to redistribute third-party assets. None of the credited authors or manufacturers is presented as a GR-DLC maintainer, sponsor or endorser.
