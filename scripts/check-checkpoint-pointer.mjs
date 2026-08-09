#!/usr/bin/env node
/**
 * Checkpoint-pointer check (D0CKPT-GRD-004).
 *
 * Boot surfaces route; mutable current state belongs to its owning checkpoint or gate carrier.
 * On 2026-08-08 both surfaces carried ~13 KB status blobs including "it is NOT Gate 2", and a
 * compliant cold boot obeyed it. Prose discipline had already failed, so this is structural.
 *
 * It checks four things and nothing else:
 *   1. exactly one pointer block per surface
 *   2. exactly one non-blank line inside each block
 *   3. both blocks name the same checkpoint path
 *   4. that path exists on disk
 *
 * Deliberately tiny. Not a doctrine linter. Do not grow it.
 */
import { readFileSync, existsSync } from "node:fs";

const START = "<!-- CHECKPOINT-POINTER:START -->";
const END = "<!-- CHECKPOINT-POINTER:END -->";
const SURFACES = ["AGENTS.md", ".cursor/plans/doctrine/04_manifest_read_graph.md"];
const PATH_RE = /`(\.cursor\/plans\/HANDOFF_[A-Za-z0-9._-]+\.md)`/g;

const problems = [];
const found = [];

for (const file of SURFACES) {
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    problems.push(`${file}: cannot read`);
    continue;
  }

  if (text.split(START).length - 1 !== 1 || text.split(END).length - 1 !== 1) {
    problems.push(`${file}: expected exactly one pointer block delimited by the START/END markers`);
    continue;
  }

  const lines = text.split(START)[1].split(END)[0].split("\n").filter((l) => l.trim() !== "");
  if (lines.length !== 1) {
    problems.push(`${file}: pointer block has ${lines.length} non-blank lines; exactly one is allowed`);
    continue;
  }

  const paths = [...lines[0].matchAll(PATH_RE)].map((m) => m[1]);
  if (paths.length !== 1) {
    problems.push(`${file}: pointer line must name exactly one .cursor/plans/HANDOFF_*.md path (found ${paths.length})`);
    continue;
  }
  if (!existsSync(paths[0])) problems.push(`${file}: checkpoint \`${paths[0]}\` does not exist`);
  found.push(paths[0]);
}

if (found.length === SURFACES.length && new Set(found).size !== 1) {
  problems.push(`boot surfaces name different checkpoints: ${found.join(" vs ")}`);
}

if (problems.length) {
  console.error("\n\u2716 checkpoint-pointer check FAILED (D0CKPT-GRD-004)\n");
  for (const p of problems) console.error(`  - ${p}`);
  console.error("\n  Boot surfaces carry one pointer line. Current state lives in the checkpoint it names.\n");
  process.exit(1);
}

console.log(`\u2714 checkpoint-pointer check passed \u2014 both surfaces point to ${found[0]}`);
