#!/usr/bin/env node
/**
 * Boot-surface validator — enforces AGENTS.md "Boot-Surface Rule" (D0CKPT-GRD-007).
 *
 * Boot surfaces route; they do not report. On 2026-08-08 AGENTS.md and read-graph
 * Tier-0 #15 each carried a ~13 KB mutable status blob containing the directive
 * "NEXT AUTHORIZED ACTION ... it is NOT Gate 2". A compliant cold boot read it and
 * abandoned the live Insurance arc. A prose prohibition alone did not prevent that;
 * this check does.
 *
 * Scope is deliberately narrow: the two current-checkpoint pointer lines, nothing else.
 * It is not a doctrine linter and must not grow into one.
 */
import { readFileSync } from "node:fs";

const SURFACES = [
  {
    file: "AGENTS.md",
    label: "AGENTS.md Current Checkpoint Handoff pointer",
    startsWith: "- **Current Checkpoint Handoff",
  },
  {
    file: ".cursor/plans/doctrine/04_manifest_read_graph.md",
    label: "read-graph Tier-0 #15 Current Checkpoint Handoff pointer",
    startsWith: "15. **Current Checkpoint Handoff:**",
  },
];

/** Anti-regrowth cap. The compliant pointers are ~780 chars; this leaves editing room
 *  without permitting a status blob. Raising this is a decision, not a convenience. */
const MAX_POINTER_CHARS = 1000;

const CHECKPOINT_RE = /`(\.cursor\/plans\/HANDOFF_[A-Za-z0-9._-]+\.md)`/;

/**
 * Forbidden VALUE patterns. These target state values, never field names — a pointer
 * may say "resolve next allowed action there"; it may not say what that action is.
 */
const FORBIDDEN = [
  { re: /\bit is NOT\b/i,                       why: "negative next-action directive (the exact 2026-08-08 failure)" },
  { re: /\bdo not (work on|start|begin)\b/i,    why: "negative next-action directive" },
  { re: /\b(none auto-starts|nothing auto-starts|no arc auto-start)\b/i, why: "next-action state value" },
  { re: /\b[0-9a-f]{7,40}\b/,                   why: "commit SHA / blob / base pin (single-source law: one owning row)" },
  { re: /\b(not_started|shell_pending_population|eligible_dormant|review_ready_pending|gate_?2_?not_started)\b/i, why: "lane or gate state value" },
  { re: /\b(VACANT|construction may begin|MAY BEGIN|held behind|blocking predecessor)\b/i, why: "integrator or gate execution state value" },
  { re: /operator_focus\s*=|current operator-selected focus is|focus\s*=\s*INS/i, why: "operator focus value (checkpoint owns focus)" },
  { re: /\b(INS-G2|INS-G0|C3\.9|OPECON|Task-D|C4\.5)\b/,  why: "arc/gate-specific state reference (boot surfaces name no arc's state)" },
  { re: /\bAxis [12]\b|NO_SHARED_FINANCING|READY_AS_/,    why: "arc result value" },
];

const problems = [];
const resolved = [];

for (const s of SURFACES) {
  let text;
  try {
    text = readFileSync(s.file, "utf8");
  } catch {
    problems.push(`${s.file}: cannot read file`);
    continue;
  }

  const matches = text.split("\n").filter((l) => l.startsWith(s.startsWith));
  if (matches.length === 0) {
    problems.push(
      `${s.label}: pointer line not found (expected a line starting "${s.startsWith}"). ` +
        `If it was renamed, update this validator deliberately — do not delete the pointer.`
    );
    continue;
  }
  if (matches.length > 1) {
    problems.push(`${s.label}: ${matches.length} pointer lines found; exactly one must exist.`);
    continue;
  }

  const line = matches[0];

  if (line.length > MAX_POINTER_CHARS) {
    problems.push(
      `${s.label}: ${line.length} chars exceeds the ${MAX_POINTER_CHARS}-char cap. ` +
        `This is how the status blob grew back. Move the content to its owning surface.`
    );
  }

  const cp = line.match(CHECKPOINT_RE);
  if (!cp) {
    problems.push(`${s.label}: no checkpoint path found; the pointer must name a .cursor/plans/HANDOFF_*.md file.`);
  } else {
    resolved.push({ label: s.label, path: cp[1] });
  }

  // Ignore the historical-lineage pointers: they are stable paths, not current state.
  const scanned = line.replace(/`\.cursor\/plans\/HANDOFF_[A-Za-z0-9._-]+\.md`/g, "«ptr»");

  for (const f of FORBIDDEN) {
    const hit = scanned.match(f.re);
    if (hit) {
      problems.push(
        `${s.label}: contains ${f.why} — matched "${hit[0]}". ` +
          `Boot surfaces route; they do not report. Put it in the owning surface.`
      );
    }
  }
}

// Drift-guard: both surfaces must name the same checkpoint (AGENTS.md Boot Freshness Check).
if (resolved.length === SURFACES.length) {
  const uniq = [...new Set(resolved.map((r) => r.path))];
  if (uniq.length !== 1) {
    problems.push(
      `Boot Freshness Check FAILS — surfaces name different checkpoints:\n` +
        resolved.map((r) => `    ${r.label} -> ${r.path}`).join("\n")
    );
  }
}

if (problems.length > 0) {
  console.error("\n✖ boot-surface check FAILED (D0CKPT-GRD-007)\n");
  for (const p of problems) console.error(`  - ${p}`);
  console.error(
    "\n  Rule: AGENTS.md \u00a7 Boot-Surface Rule. Owners: checkpoint = focus, next action, lane +" +
      "\n  integrator state; the gate's own carrier/brief = gate execution + acceptance state;" +
      "\n  the single owning row = every SHA/base pin; the work horizon = dependency conditions.\n"
  );
  process.exit(1);
}

console.log(
  `✔ boot-surface check passed — 2 pointer regions clean; both name ${resolved[0].path}`
);
