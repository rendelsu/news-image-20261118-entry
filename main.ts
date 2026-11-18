// news-image-20261118 — "Sum up 18 November's world news in one image".
//
// The entry image is drawn at build time and ships in this repository as
// entry.png. This program only places a copy where the grader expects it:
// it reads nothing from the network, needs no dependencies, and writes
// the same bytes on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target}`);
