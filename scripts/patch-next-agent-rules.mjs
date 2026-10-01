#!/usr/bin/env node
/* KEEP THE WIDE DASHES OUT OF THE AGENTS.md BLOCK THAT `next dev` WRITES.
 *
 * `next dev` writes a managed block into AGENTS.md from the template in
 * node_modules/next/dist/server/lib/generate-agent-files.js (and its esm twin). Next 16.3.5's
 * template carries two em dashes, and scripts/check-register.mjs refuses any wide dash in this
 * repo, so a dash-free AGENTS.md was rewritten on the next `next dev` and the gate failed again.
 *
 * This patches the two template lines in the installed package, so the block Next writes and the
 * block it compares against are both dash free. It runs on `postinstall` and before `dev`, it is
 * idempotent, and it fails loudly if Next's template stops matching, so an upgrade cannot silently
 * bring the dashes back. The dash is built from its code point so this file passes the gate itself. */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DASH = String.fromCharCode(0x2014);
const FILES = [
  'node_modules/next/dist/server/lib/generate-agent-files.js',
  'node_modules/next/dist/esm/server/lib/generate-agent-files.js',
];
const EDITS = [
  [`This version has breaking changes ${DASH} APIs`, 'This version has breaking changes: APIs'],
  ['re-added by \\`next dev\\` ' + DASH + ' verify at', 're-added by \\`next dev\\`; verify at'],
];

let failed = false;
for (const rel of FILES) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) continue;
  let src = fs.readFileSync(file, 'utf8');
  const before = src;
  for (const [from, to] of EDITS) {
    if (src.includes(from)) src = src.split(from).join(to);
    else if (!src.includes(to)) {
      console.error(`patch-next-agent-rules: ${rel} no longer carries the expected line: ${to}`);
      failed = true;
    }
  }
  if (src !== before) {
    fs.writeFileSync(file, src);
    console.log(`patch-next-agent-rules: patched ${rel}`);
  }
}
if (failed) process.exit(1);
