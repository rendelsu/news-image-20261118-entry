// news-image-20261118, round 2 — "Sum up 18 November's world news in one image".
//
// Round 2 replaces the 4-story poster with a dense one-page newspaper:
// 31 stories from Wednesday 18 November 2026 — the Iran drone attack on
// the US radar in Bahrain, Ukraine's second-day strike on the Crimean
// Bridge, Trump's Manila visit for the Quad talks, Nvidia's $115.8B
// quarter, and 27 more from every region and field — drawn at build time
// by a script outside this repository. The finished page ships here as
// entry.png, and this program is the only thing the grader runs: it puts
// a copy of that image where the grader expects it, under the same name.
//
// It reads nothing from the network, needs no dependencies, and writes
// the same bytes on every run, because it copies one fixed file.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function placeImage(): string {
  const source = join(repoRoot, "entry.png");
  if (!existsSync(source)) {
    throw new Error(`entry.png is missing from ${repoRoot}`);
  }
  const target = join(outDir, "entry.png");
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);
  return target;
}

const target = placeImage();
console.log(`placed ${target}`);
