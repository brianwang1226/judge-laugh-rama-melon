// Make the AI Judge Laugh — one-liner entry for make.fun.
// A courtroom defense of a cookie thief: specific numbers (14 cookies),
// escalation (the security camera waved back), and a short kicker
// ("guilty to being adorable") that reframes the whole defense.
// The judge is the audience, so the line addresses it directly.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your Honor, my client did not steal the cookies. He ate 14 of them in front of the security camera, then waved at it. The camera waved back. We plead guilty to being adorable.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
