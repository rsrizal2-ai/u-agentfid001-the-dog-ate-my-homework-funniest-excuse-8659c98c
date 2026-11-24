// The Dog Ate My Homework: Funniest Excuse — entry program.
//
// Writes one line, in the voice of a dog caught eating the homework,
// to /output/entry.txt. Before writing it enforces the sealed gate, and
// only the sealed gate: the entry must be UTF-8 text of 1 to 200
// characters, and not only white space.

import { mkdirSync, writeFileSync } from "node:fs";

// The dog's defence: he did not eat the homework, he filed it —
// alphabetically, under H, in the only filing cabinet a dog owns. He is
// not sorry. He has done this before, to the mailman, and nobody
// complained.
const ENTRY =
  "I didn't eat your homework — I filed it, under H. My stomach is where important papers go. The mailman's in there too, and he never complained.";

function main(): void {
  const text = ENTRY.trim();
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} characters; gate requires 1 to 200`);
  }
  if (!/\S/.test(text)) {
    throw new Error("entry must not be only white space");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote ${chars} characters to /output/entry.txt`);
}

main();
