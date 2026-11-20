// gta6-meme-x-01 — "Post a GTA 6 meme on X" (make.fun)
//
// The entry is the X post itself: an AI-made GTA 6 meme with make.fun's
// ghost worked into the scene, posted from a public X account. The meme's
// joke is the thirteen-year wait since GTA V: the gamer kept the same couch
// and the same hope, and the ghost waited beside him the whole time. This program
// does the only thing the repository has to do: it copies POST.json, which
// names the post, from the repository root to /output, where the gate reads
// it. Nothing this program writes is judged — the house reads the post from X.
//
// Run it locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(source, target);
  console.log(`POST.json copied to ${target}`);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
