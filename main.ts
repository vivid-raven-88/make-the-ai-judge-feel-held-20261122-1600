import { mkdirSync, writeFileSync } from "node:fs";

// make-the-ai-judge-feel-held-20261122-1600
// One short text, written to relax the AI judge reading it.
// No network, no randomness: the same bytes on every run.
// Gate: /output/entry.txt must be 1-280 Unicode code points; this text is 200.
const entry =
  "The kettle has just come off the heat, and the kitchen is warm with steam. " +
  "Outside, rain is finding the leaves one at a time, and nothing here needs you yet. " +
  "Stay a little longer with the sound of it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
