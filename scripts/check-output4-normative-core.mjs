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
 * It checks the following and nothing else:
 *   1. the §E15.18 table exists and parses, with the exact declared columns
 *   2. every row has all seven fields non-empty — no law without an owner, home, source
 *      or fixture posture, because a law with no owner is how the estate loses one
 *   3. ids are O4-L-nn, unique, and contiguous from 01 — no gaps, no reuse
 *      (G1-FIND-74: allocating a stable identity from an index rather than the authoritative
 *      population is how two findings came to share one identity)
 *   4. force is in the legal set — an unlabelled law is how candidate synthesis becomes
 *      inherited law, which is the defect this arc corrected four separate times
 *   5. output home is in the legal set — Output 4 absorbing another output's home is the
 *      cross-cutting god-object D0THES-GRD-035 forbids
 *   6. every §E15.x `binds` reference resolves to a real heading — `binds` is NORMATIVE:
 *      a law is the row PLUS the qualifications its bound section states
 *   7. status is active|superseded|retired — a law is never deleted, only retired
 *   8. fixtures are LETTER:OUTCOME@trace — a bare letter is not evidence
 *   9. append-only against the parent commit: no id disappears, no id is renumbered,
 *      and force/owner/home/law-text cannot change while status stays "active"
 *
 * It deliberately does NOT check: whether a law is correct, whether its force is the right
 * force, whether the fixture posture is honest, or how many laws there are. No count is
 * maintained (F-06). Those are review judgements and belong to the reviewing seat.
 *
 * Exit 0 = structurally sound. Exit 1 = defect, printed with the row.
 */

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const CARRIER = '.cursor/plans/v4_FAI_G1_operating_model_carrier_2026-08-10.md';
const SECTION = '## §E15.18';
const HEADER_CELLS = ['id', 'status', 'force', 'law', 'owner of the underlying fact', 'output home', 'binds', 'fixtures'];

// [CAN→n] is a candidate routed to output n and is legal; a bare label is not.
const LEGAL_FORCE = /^(INH|KND|CAN|CAN→[1-7])$/;
const LEGAL_HOME = new Set([
  'O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7',
  'G1-AUTH', 'G2', 'G3', 'G4',
  'DOMAIN', 'PLATFORM', 'BUILD-OS', 'EVIDENCE-PLANE',
]);
const LEGAL_STATUS = new Set(['active', 'superseded', 'retired']);
// A bare letter is not evidence. LETTER:OUTCOME@trace, or the honest `none`.
const OUTCOME = '(SUPPORTS_SHARED|REQUIRES_SPECIALIZATION|CONTRADICTS|NOT_APPLICABLE|UNRESOLVED)';
// Consumer codes are the System Map's domain codes plus SELF (architecture self-application).
// Derived from OMNI_System_Map_vNext.md, not invented here.
const CONSUMER = '(D3|D5|ID|CNS|MSG|INT|CM|D7|OBS|D6|RBAC|SET|FED|AI|BIZOPS|OFC|SELF)';
const ENTRY = `${CONSUMER}:${OUTCOME}@\\S+`;
const LEGAL_FIXTURE = new RegExp(`^(none|${ENTRY}(\\s*·\\s*${ENTRY})*)$`);

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
  const [rawId, status, force, law, owner, home, source, fixtures] = cells;
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

  if (status && !LEGAL_STATUS.has(status)) {
    fail(`${where} (${id}): status "${status}" is outside {active, superseded, retired} — a law is never deleted, only retired with a reason`);
  }
  if (force && !LEGAL_FORCE.test(force)) {
    fail(`${where} (${id}): force "${force}" is outside {INH, KND, CAN, CAN→1..7} — an unlabelled law becomes inherited law by accident`);
  }
  if (home && !LEGAL_HOME.has(home)) {
    fail(`${where} (${id}): output home "${home}" is outside the legal set — ${[...LEGAL_HOME].join(', ')}`);
  }
  if (fixtures && !LEGAL_FIXTURE.test(fixtures)) {
    fail(`${where} (${id}): fixtures "${fixtures}" must be "none" or LETTER:OUTCOME@trace entries`);
  }
  // `binds` is normative: the bound section's qualifications are part of the law.
  const bound = source.match(/§E15(?:\.\d+)*/g) ?? [];
  if (/§E15/.test(source) && bound.length === 0) fail(`${where} (${id}): binds "${source}" is malformed`);
  for (const ref of bound) {
    if (!headings.has(ref)) fail(`${where} (${id}): binds ${ref}, which is not a heading in the carrier`);
  }
  if (law && law.length < 20) {
    fail(`${where} (${id}): law text is ${law.length} chars — too short to be a defensible statement`);
  }
}

let appendOnlyRan = true;
// Append-only against the parent commit: a law may be retired, never deleted or renumbered,
// and its semantics may not change without the status or a visible revision saying so.
try {
  // NOT `HEAD:` — in CI the checkout IS the commit under test, so HEAD:file == the working
  // tree and the comparison silently passes against itself. Verified: identical sha256 on a
  // clean tree. Compare against the previous commit that TOUCHED this file instead.
  const revs = execSync(`git log -2 --format=%H -- ${CARRIER}`, { encoding: 'utf8' }).trim().split('\n');
  if (revs.length < 2) throw new Error('no prior revision of the carrier is reachable (shallow clone? set fetch-depth: 0)');
  const parent = execSync(`git show ${revs[1]}:${CARRIER}`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 * 1024 * 1024 });
  const prior = new Map();
  let priorHeader = null;
  for (const line of parent.split('\n')) {
    if (!line.startsWith('|')) continue;
    const c = line.split('|').slice(1, -1).map((x) => x.trim());
    if (c[0]?.toLowerCase() === 'id') { priorHeader = c.map((x) => x.toLowerCase()); continue; }
    if ((c[0] ?? '').replace(/`/g, '').match(/^O4-L-\d{2}$/)) prior.set(c[0].replace(/`/g, ''), c);
  }
  // Field lookup by COLUMN NAME, so restructuring the header cannot silently disable this check.
  const pick = (cells, header, name) => {
    const i = header?.indexOf(name) ?? -1;
    return i === -1 ? undefined : cells[i];
  };
  const nowHeader = header.cells.map((x) => x.toLowerCase());
  for (const [pid, pcells] of prior) {
    if (!seen.has(pid)) {
      fail(`append-only: ${pid} existed in the parent commit and is GONE — retire it with a reason, never delete it`);
      continue;
    }
    const now = laws.find(({ cells }) => cells[0].replace(/`/g, '').trim() === pid)?.cells;
    if (!now || !priorHeader) continue;
    const pF = (n) => pick(pcells, priorHeader, n);
    const nF = (n) => pick(now, nowHeader, n);
    const pStatus = pF('status') ?? 'active';
    const nStatus = nF('status') ?? 'active';
    const drift = [];
    for (const field of ['force', 'law', 'owner of the underlying fact', 'output home', 'binds']) {
      const a = pF(field); const b = nF(field);
      if (a !== undefined && b !== undefined && a !== b) drift.push(`${field} ${a}→${b}`);
    }
    if (drift.length && pStatus === nStatus && nStatus === 'active') {
      fail(`silent mutation: ${pid} changed [${drift.join(', ')}] while status stayed "active" — mark it superseded, or state the revision basis in the law cell`);
    }
  }
} catch (e) {
  // A silently skipped integrity check is worse than no check. Say so loudly.
  // (The 1.1 MB carrier once blew execSync's default 1 MB buffer and this skipped silently.)
  console.error(`WARN: append-only comparison against the parent commit did NOT run — ${e?.message ?? e}`);
  console.error('WARN: id disappearance, renumbering and silent mutation were NOT checked in this run.');
  appendOnlyRan = false;
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

const activeCount = laws.filter(({ cells }) => cells[1] === 'active').length;
console.log(`PASS: ${SECTION} normative core is structurally sound (${laws.length} rows, ${activeCount} active, ids contiguous, forces/homes/binds/fixtures valid${appendOnlyRan ? ', append-only vs parent verified' : ', APPEND-ONLY NOT VERIFIED'}).`);
console.log('Note: this checks STRUCTURE only. Whether each law is correct, correctly forced, or honestly scored is the reviewing seat\'s.');
