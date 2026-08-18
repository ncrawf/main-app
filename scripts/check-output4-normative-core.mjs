#!/usr/bin/env node
/**
 * Output-4 normative-core check (FAI G1 §E15.18).
 *
 * Nine correction passes on the Output-4 change-lifecycle proposal produced real law and
 * buried it in a 1.1 MB prose dossier. Every prior arc that did that had its law re-derived
 * by the next agent. Narrative discipline had already failed twice in this carrier — §0.1
 * deleted its own evidence and kept the totals, and F-06's maintained figures broke three
 * times in one correction arc, twice inside the pass installing the rule against them.
 *
 * So the law index is structural, exactly like check-checkpoint-pointer.mjs.
 *
 * §E15.18 is a DERIVED projection over the authored prose sections. It owns no truth: where
 * the index and the section disagree, the section governs and this checker has found a defect.
 *
 * It checks six things and nothing else:
 *   1. the §E15.18 table exists and parses, with the exact seven columns
 *   2. every row has all seven fields non-empty — no law without an owner, home, source
 *      or fixture posture, because a law with no owner is how the estate loses one
 *   3. ids are O4-L-nn, unique, and contiguous from 01 — no gaps, no reuse
 *      (G1-FIND-74: allocating a stable identity from an index rather than the authoritative
 *      population is how two findings came to share one identity)
 *   4. force is in the legal set — an unlabelled law is how candidate synthesis becomes
 *      inherited law, which is the defect this arc corrected four separate times
 *   5. output home is in the legal set — Output 4 absorbing another output's home is the
 *      cross-cutting god-object D0THES-GRD-035 forbids
 *   6. every §E15.x source reference resolves to a real heading in the carrier
 *
 * It deliberately does NOT check: whether a law is correct, whether its force is the right
 * force, whether the fixture posture is honest, or how many laws there are. No count is
 * maintained (F-06). Those are review judgements and belong to the reviewing seat.
 *
 * Exit 0 = structurally sound. Exit 1 = defect, printed with the row.
 */

import { readFileSync } from 'node:fs';

const CARRIER = '.cursor/plans/v4_FAI_G1_operating_model_carrier_2026-08-10.md';
const SECTION = '## §E15.18';
const HEADER_CELLS = ['id', 'force', 'law', 'owner of the underlying fact', 'output home', 'source', 'fixtures'];

// [CAN→n] is a candidate routed to output n and is legal; a bare label is not.
const LEGAL_FORCE = /^(INH|KND|CAN|CAN→[1-7])$/;
const LEGAL_HOME = new Set([
  'O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7',
  'G1-AUTH', 'G2', 'G3', 'G4',
  'DOMAIN', 'PLATFORM', 'BUILD-OS', 'EVIDENCE-PLANE',
]);
// A law authored and never run against a materially different consumer is `none`, honestly.
const LEGAL_FIXTURE = /^(none|[ABCD](\s*[,·]\s*[ABCD])*)$/;

const problems = [];
const fail = (msg) => problems.push(msg);

const src = readFileSync(CARRIER, 'utf8');
const lines = src.split('\n');

const start = lines.findIndex((l) => l.startsWith(SECTION));
if (start === -1) {
  console.error(`FAIL: ${SECTION} not found in ${CARRIER}`);
  process.exit(1);
}
// Section ends at the next top-level or second-level heading.
let end = lines.length;
for (let i = start + 1; i < lines.length; i++) {
  if (/^#{1,2} /.test(lines[i])) { end = i; break; }
}

const rows = lines
  .slice(start, end)
  .map((line, i) => ({ line, n: start + i + 1 }))
  .filter(({ line }) => line.startsWith('|'))
  .map(({ line, n }) => ({
    n,
    cells: line.split('|').slice(1, -1).map((c) => c.trim()),
  }))
  .filter(({ cells }) => !cells.every((c) => /^-*:?-*$/.test(c) || c === ''));

if (rows.length < 2) {
  console.error(`FAIL: ${SECTION} contains no parseable law table`);
  process.exit(1);
}

const [header, ...laws] = rows;
if (header.cells.length !== HEADER_CELLS.length ||
    !header.cells.every((c, i) => c.toLowerCase() === HEADER_CELLS[i])) {
  fail(`line ${header.n}: header columns are ${JSON.stringify(header.cells)}, expected ${JSON.stringify(HEADER_CELLS)}`);
}

// Collect every §E15 heading so source references can be resolved.
const headings = new Set();
for (const line of lines) {
  const m = line.match(/^#{1,4} (§E15(?:\.\d+)*)/);
  if (m) headings.add(m[1]);
}

const seen = new Map();
const ordinals = [];

for (const { n, cells } of laws) {
  const where = `line ${n}`;
  if (cells.length !== HEADER_CELLS.length) {
    fail(`${where}: has ${cells.length} columns, expected ${HEADER_CELLS.length}`);
    continue;
  }
  const [rawId, force, law, owner, home, source, fixtures] = cells;
  const id = rawId.replace(/`/g, '').trim();

  HEADER_CELLS.forEach((name, i) => {
    if (cells[i] === '') fail(`${where} (${id || 'no id'}): empty "${name}" — a law with no ${name} is not defensible`);
  });

  const idm = id.match(/^O4-L-(\d{2})$/);
  if (!idm) {
    fail(`${where}: id "${id}" is not O4-L-nn`);
  } else {
    const ord = Number(idm[1]);
    if (seen.has(id)) fail(`${where}: id ${id} duplicates ${where === seen.get(id) ? 'itself' : `line ${seen.get(id)}`} — identities are never reused (G1-FIND-74)`);
    seen.set(id, n);
    ordinals.push(ord);
  }

  if (force && !LEGAL_FORCE.test(force)) {
    fail(`${where} (${id}): force "${force}" is outside {INH, KND, CAN, CAN→1..7} — an unlabelled law becomes inherited law by accident`);
  }
  if (home && !LEGAL_HOME.has(home)) {
    fail(`${where} (${id}): output home "${home}" is outside the legal set — ${[...LEGAL_HOME].join(', ')}`);
  }
  if (fixtures && !LEGAL_FIXTURE.test(fixtures)) {
    fail(`${where} (${id}): fixtures "${fixtures}" must be "none" or a subset of A,B,C,D`);
  }
  for (const ref of source.match(/§E15(?:\.\d+)*/g) ?? []) {
    if (!headings.has(ref)) fail(`${where} (${id}): source references ${ref}, which is not a heading in the carrier`);
  }
  if (law && law.length < 20) {
    fail(`${where} (${id}): law text is ${law.length} chars — too short to be a defensible statement`);
  }
}

ordinals.sort((a, b) => a - b);
ordinals.forEach((ord, i) => {
  if (ord !== i + 1) {
    fail(`id contiguity: expected O4-L-${String(i + 1).padStart(2, '0')}, found O4-L-${String(ord).padStart(2, '0')} — gaps hide a withdrawn law instead of retiring it`);
  }
});

if (problems.length) {
  console.error(`FAIL: ${SECTION} normative core has ${problems.length} structural defect(s):\n`);
  for (const p of problems) console.error(`  - ${p}`);
  console.error(`\n${SECTION} is a derived projection. Where it disagrees with its prose section, the section governs.`);
  process.exit(1);
}

console.log(`PASS: ${SECTION} normative core is structurally sound (${laws.length} laws, ids contiguous, all forces/homes/sources/fixtures valid).`);
console.log('Note: this checks STRUCTURE only. Whether each law is correct, correctly forced, or honestly scored is the reviewing seat\'s.');
