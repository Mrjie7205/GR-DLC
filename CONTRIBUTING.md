# Contributing / 参与 GR-DLC

中文或 English 均可。欢迎问题反馈、实拍验证、文档改进和代码贡献。

## Report a problem

Please include the GR-DLC version, exact camera/model firmware, computer OS, selected films/ratios and a short sequence that reproduces the issue. Describe whether it affects live view, JPEG, RAW or playback. Distinguish observed camera behaviour from software-test results.

涉及照片时，可提供自己有权公开的最小样本，并先检查位置、姓名等 EXIF 信息。请勿把官方固件、个人配置目录或无权再分发的 LUT 上传到 Issues。没有样片也可以先提交文字反馈。

## Development

1. Fork **GR-DLC** and create a focused branch from `main`.
2. Install Node.js 22+ / Go 1.24+, then run `npm ci` and `npm run build`.
3. Run `npm test`, `npm -w core run typecheck` and `go test ./...` in `shell/`. Private-fixture tests skip when inputs are missing; do not manufacture passing camera claims from these skips.
4. Describe the user-visible change, relevant checks, supported camera/firmware and remaining uncertainty in your PR.

For a firmware change, preserve the corresponding official-file checks, unchanged-byte checks and model/version gates. Keep RAW behaviour explicit. Do not change camera offsets based only on a nearby firmware version. Use the [IIIx validation guide](docs/GR3X_HDF.md) for native checks.

## Sources and licences

Code contributions must be compatible with this project's GPL-2.0-only terms. Preserve notices, document modified files and dates, and add any new upstream or research source to [CREDITS.md](CREDITS.md). Do not replace an author's name with your own or present a referenced method as original work.

胶片贡献应记录来源、授权、输入色彩空间、方案版本和验证范围。配方名称不等于授权；付费或仅个人使用的输入不随项目提交。包装风格图标应保留参考来源。

We may propose generally useful fixes to upstream projects, but GR-DLC's release decisions and issue tracker are maintained independently. Keep discussion specific and respectful.
