// SPDX-License-Identifier: GPL-2.0-only
// Added for GR-DLC on 2026-10-15: collect installed dependency notices for releases.
// Usage: node tools/distribution/licenses.mjs OUTPUT.txt
// Run npm ci and (cd shell && go mod download all) first.
import { readFileSync, readdirSync, existsSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../../', import.meta.url));
const output = process.argv[2];
if (!output) throw new Error('Specify an output file.');
const parts = ['GR-DLC dependency notices\n\nProject code: GPL-2.0-only; see LICENSE and CREDITS.md.\nIncludes installed npm runtime dependencies and Go module dependencies.'];
const missing = [];
function append(name, version, dir, declared = '') {
  if (!dir || !existsSync(dir)) { missing.push(name); return; }
  const files = readdirSync(dir).filter(n => /^(licen[cs]e|copying|copyright|notice)([._-].*)?$/i.test(n))
    .filter(n => !n.toLowerCase().endsWith('.go')).sort();
  const texts = files.flatMap(n => {
    try { return [`--- ${n} ---\n${readFileSync(join(dir, n), 'utf8')}`]; }
    catch (e) { if (e.code === 'EISDIR') return []; throw e; }
  });
  if (!texts.length) { missing.push(`${name} (no licence file)`); return; }
  parts.push(`\n${'='.repeat(72)}\n${name} ${version}${declared ? ` | ${declared}` : ''}\n\n${texts.join('\n\n')}`);
}
const lock = JSON.parse(readFileSync(join(root, 'package-lock.json'), 'utf8'));
for (const [rel, meta] of Object.entries(lock.packages).sort(([a], [b]) => a.localeCompare(b))) {
  if (!rel.startsWith('node_modules/') || meta.link || meta.dev || !existsSync(join(root, rel))) continue;
  const pkg = JSON.parse(readFileSync(join(root, rel, 'package.json'), 'utf8'));
  append(pkg.name, pkg.version, join(root, rel), typeof pkg.license === 'string' ? pkg.license : '');
}
const modules = execFileSync('go', ['list', '-m', '-f', '{{if not .Main}}{{.Path}}|{{.Version}}|{{.Dir}}{{end}}', 'all'], { cwd: join(root, 'shell'), encoding: 'utf8' });
for (const line of modules.trim().split('\n').filter(Boolean)) {
  const [name, version, dir] = line.split('|');
  append(name, version, dir);
}
const goroot = execFileSync('go', ['env', 'GOROOT'], { encoding: 'utf8' }).trim();
const goVersion = execFileSync('go', ['env', 'GOVERSION'], { encoding: 'utf8' }).trim();
append('Go runtime and standard library', goVersion, goroot, 'BSD-3-Clause');
if (missing.length) throw new Error(`Incomplete dependency notices:\n${missing.join('\n')}`);
writeFileSync(resolve(output), parts.join('\n') + '\n');
console.log(`Wrote ${parts.length - 1} dependency notices.`);
