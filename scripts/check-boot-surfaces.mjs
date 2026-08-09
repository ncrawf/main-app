#!/usr/bin/env node
/**
 * Boot-surface validator — enforces the AGENTS.md "Boot-Surface Rule" (D0CKPT-GRD-007).
 *
 * WHAT THIS ACTUALLY GUARANTEES, stated honestly:
 *   The two CURRENT-CHECKPOINT POINTER BLOCKS are structurally constrained and merge-tested.
 *   It does NOT prove that all of AGENTS.md and all of the read graph are state-free — that
 *   broader claim is not audited or enforced here, so do not make it.
 *
 * Why it exists: on 2026-08-08 both blocks were ~13 KB mutable status blobs containing
 * "NEXT AUTHORIZED ACTION ... it is NOT Gate 2". A compliant cold boot read that and abandoned
 * the live Insurance arc. A prose prohibition did not prevent it.
 *
 * Design: ALLOWLIST, not a growing denylist of today's arc names. A pointer block may contain
 * only a bounded single line whose backticked tokens are all drawn from a permitted set. That
 * makes it impossible to introduce any new identifier — arc, gate, lane, state or SHA — without
 * failing, without this file needing to know what those identifiers are.
 *
 * Deliberately narrow. This is not a doctrine linter and must not become one.
 */
import { readFileSync, existsSync } from "node:fs";

const START = "<!-- CHECKPOINT-POINTER:START -->";
const END = "<!-- CHECKPOINT-POINTER:END -->";

const SURFACES = [
  { file: "AGENTS.md", label: "AGENTS.md current-checkpoint pointer block" },
  { file: ".cursor/plans/doctrine/04_manifest_read_graph.md", label: "read-graph Tier-0 #15 current-checkpoint pointer block" },
];

/** Anti-regrowth cap. Compliant blocks are ~900 chars. Raising this is a decision, not a convenience. */
const MAX_CHARS = 1100;

/** A checkpoint path. The FIRST occurrence is the current checkpoint; later ones are historical lineage. */
const HANDOFF_PATH = /^\.cursor\/plans\/HANDOFF_[A-Za-z0-9._-]+\.md$/;

/**
 * ALLOWLIST of non-path backticked tokens. Any other backticked token fails.
 * State values in this estate are overwhelmingly backticked, so this is the primary control:
 * you cannot name a gate, lane, arc, status or SHA here without adding it to this list on purpose.
 */
const ALLOWED_TOKENS = new Set([
  "D0CKPT-GRD-007",
  "npm run check:boot-surfaces",
  "AGENTS.md",
]);

/** Residual prose denylist: the severe form is a NEGATIVE directive, which is prose, not a token. */
const FORBIDDEN_PROSE = [
  { re: /\bit is NOT\b/i, why: 'negative next-action directive — the exact 2026-08-08 failure' },
  { re: /\bdo not (work on|start|begin|select)\b/i, why: "negative next-action directive" },
  { re: /\b[0-9a-f]{7,40}\b/, why: "commit SHA / blob / base pin (AWP §2.1 single-source law)" },
];

const problems = [];
const currentPaths = [];

for (const s of SURFACES) {
  let text;
  try {
    text = readFileSync(s.file, "utf8");
  } catch {
    problems.push(`${s.file}: cannot read file`);
    continue;
  }

  const starts = text.split(START).length - 1;
  const ends = text.split(END).length - 1;
  if (starts !== 1 || ends !== 1) {
    problems.push(
      `${s.label}: expected exactly one ${START} / ${END} pair, found ${starts}/${ends}. ` +
        `The markers define the enforced region — do not remove or duplicate them.`
    );
    continue;
  }

  const block = text.split(START)[1].split(END)[0];

  const lines = block.split("\n").filter((l) => l.trim() !== "");
  if (lines.length !== 1) {
    problems.push(
      `${s.label}: contains ${lines.length} non-blank lines; exactly one is permitted. ` +
        `Continuation lines are how state creeps back in.`
    );
    continue;
  }

  const line = lines[0];

  if (line.length > MAX_CHARS) {
    problems.push(`${s.label}: ${line.length} chars exceeds the ${MAX_CHARS}-char cap — this is how the status blob grew back.`);
  }

  // Every backticked token must be a HANDOFF path or an explicitly allowed token.
  const ticks = [...line.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const paths = ticks.filter((t) => HANDOFF_PATH.test(t));
  for (const t of ticks) {
    if (HANDOFF_PATH.test(t) || ALLOWED_TOKENS.has(t)) continue;
    problems.push(
      `${s.label}: disallowed token \`${t}\`. Only .cursor/plans/HANDOFF_*.md paths and ` +
        `[${[...ALLOWED_TOKENS].join(", ")}] are permitted here. If this is current state — a gate, ` +
        `lane, arc, status or identifier — it belongs in its owning surface, not on the boot route.`
    );
  }

  if (paths.length === 0) {
    problems.push(`${s.label}: no checkpoint path found; the block must name a .cursor/plans/HANDOFF_*.md file.`);
  } else {
    const current = paths[0];
    if (!existsSync(current)) problems.push(`${s.label}: current checkpoint \`${current}\` does not exist on disk.`);
    for (const h of paths.slice(1)) {
      if (!existsSync(h)) problems.push(`${s.label}: historical pointer \`${h}\` does not exist on disk.`);
    }
    currentPaths.push({ label: s.label, path: current });
  }

  // Strip paths before prose checks so filenames cannot trip the SHA pattern.
  const prose = line.replace(/`[^`]+`/g, "«t»");
  for (const f of FORBIDDEN_PROSE) {
    const hit = prose.match(f.re);
    if (hit) problems.push(`${s.label}: contains ${f.why} — matched "${hit[0]}".`);
  }
}

// Drift-guard: both surfaces must name the same current checkpoint (AGENTS.md Boot Freshness Check).
if (currentPaths.length === SURFACES.length) {
  const uniq = [...new Set(currentPaths.map((r) => r.path))];
  if (uniq.length !== 1) {
    problems.push(
      "Boot Freshness Check FAILS — surfaces name different current checkpoints:\n" +
        currentPaths.map((r) => `    ${r.label} -> ${r.path}`).join("\n")
    );
  }
}

if (problems.length > 0) {
  console.error("\n\u2716 boot-surface check FAILED (D0CKPT-GRD-007)\n");
  for (const p of problems) console.error(`  - ${p}`);
  console.error(
    "\n  Owners: current checkpoint = focus, next allowed action, lane + integrator state;" +
      "\n  the gate's own carrier/brief = gate execution + acceptance state;" +
      "\n  the single owning row = every SHA / base pin; the work horizon = dependency conditions.\n"
  );
  process.exit(1);
}

console.log(`\u2714 boot-surface check passed — 2 pointer blocks conform; both name ${currentPaths[0].path}`);
