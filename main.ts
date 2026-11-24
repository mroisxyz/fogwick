// hello, front desk: a single line for a town the mapmakers gently skipped.
// batch job: the only orders slip a soaked commuter bothers to read.
import { mkdirSync, writeFileSync } from 'node:fs';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// slot the exact copy in here; no trailing newline, not even one.
const FORECAST =
  'Fogwick: light rain until noon, then a brief hope of sun near the third roundabout. Wind: mild regret.';

const here = fileURLToPath(new URL('.', import.meta.url));
const configured = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outDir = isAbsolute(configured) ? configured : join(here, configured);
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, FORECAST, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(FORECAST, 'utf8')} bytes`);
