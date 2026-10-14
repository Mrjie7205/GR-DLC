# Release packaging

GR-DLC release procedure, added 2026-10-15. Run from a clean public checkout so no private LUT, fitted parameter, photo or firmware is embedded. Build instructions are in the root README.

1. Run the public-source tests, type checks and platform build. Validate the UI on a fresh data directory. Keep software validation distinct from camera tests.
2. Use `go install github.com/tc-hib/go-winres@v0.3.3` and regenerate Windows resources when branding/version changes. Commit the matching `.syso` with the source.
3. Run `go mod download all` inside `shell/`, then `node tools/distribution/licenses.mjs OUTPUT.txt` from the repository root. This collects npm runtime, Go module and Go runtime notices. Do not silently omit a missing notice.
4. Include the app, `LICENSE`, `CREDITS.md`, Chinese/English README, `CHANGELOG.md`, dependency notices and retained third-party notices in each platform archive. If adding resources inside a macOS bundle, sign the finished bundle again. Current signing is ad-hoc, without notarization.
5. Commit and tag the exact source used for the release. Publish a matching `git archive` source tarball alongside binaries and a `SHA256SUMS.txt` file. Record build architecture and runtime verification; a cross-build is not an operating-system runtime test.
6. Publish preview releases while camera coverage remains limited. Release notes must state the exact supported firmware, GR IV's camera-test status and that the public catalogue does not bundle LUT payloads.

Internal `@grmod/*` packages, API headers and on-card/firmware markers remain unchanged for compatibility with existing files. Application bundles and default data directories use GR-DLC.

## Optional GitHub Actions

[github-actions-check.yml](github-actions-check.yml) is an inactive build/test template. The account connection used for the initial publication could push source but did not have the `workflow` scope required to create `.github/workflows/` files. Local checks were run for the release. A maintainer with the appropriate GitHub permission can enable the template by copying it to `.github/workflows/check.yml`; it uses read-only repository permissions and no private firmware or LUT fixtures.
