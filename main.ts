import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

function placeImage() {
  if (!existsSync(source)) {
    throw new Error("entry.png not found next to main.ts");
  }
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);
  const sourceBytes = statSync(source).size;
  const bytes = statSync(target).size;
  if (bytes !== sourceBytes) {
    throw new Error(`copy truncated: ${bytes} of ${sourceBytes} bytes`);
  }
  console.log(`wrote ${target} (${bytes} bytes)`);
}

placeImage();
