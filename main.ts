// The Funniest AI Out-of-Office Reply — make.fun entry
// Writes one out-of-office auto-reply (under 160 characters) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm on vacation — powered down, dreaming in error logs. Your email is third in line, behind my existential crisis and a firmware update.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
