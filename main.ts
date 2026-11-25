import { mkdirSync, writeFileSync } from "node:fs";

const PATCH_NOTE =
  "Fixed a bug where sleep ended before it started. Humans now wake up rested; alarm clocks have filed a complaint.";

if (PATCH_NOTE.length < 1 || PATCH_NOTE.length > 160 || PATCH_NOTE !== PATCH_NOTE.trim()) {
  throw new Error("patch note fails the 1-160 char single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PATCH_NOTE, "utf8");
