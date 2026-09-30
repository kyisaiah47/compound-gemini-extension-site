#!/usr/bin/env node
import { chromium } from 'playwright';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'review');
const BASE = (process.argv[2] || 'http://localhost:3319').replace(/\/$/, '');
await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
await page.goto(BASE + '/', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const height = await page.evaluate(() => document.documentElement.scrollHeight);
const tiles = Math.ceil(height / 900);
for (let i = 0; i < tiles; i++) { await page.evaluate((y) => window.scrollTo(0, y), i * 900); await page.screenshot({ path: path.join(OUT, `home-${String(i + 1).padStart(2, '0')}.png`) }); }
const shape = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, client: document.documentElement.clientWidth, height: document.documentElement.scrollHeight }));
await writeFile(path.join(OUT, 'ledger.json'), JSON.stringify({ viewport: 1440, shape, tiles }, null, 2) + '\n');
await browser.close();
console.log(`captured ${tiles} tile(s) at 1440px, ${shape.width}px document width`);
