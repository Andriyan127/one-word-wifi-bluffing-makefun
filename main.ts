import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const WORD = "Bluffing";

// The bounty rules require exactly one word: the funniest word for your
// Wi-Fi, no trailing newline and no extra text. Write it as raw UTF-8
// bytes, nothing more.
const rawOutputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim();
const outputDir = rawOutputDir ? rawOutputDir : "/output";
const outputPath = resolve(join(outputDir, "entry.txt"));

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, WORD, "utf8");

console.log(
  `Wrote ${WORD.length} bytes ("${WORD}") to ${outputPath}`,
);
