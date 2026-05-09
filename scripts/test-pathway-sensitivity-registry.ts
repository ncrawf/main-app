/**
 * Phase 4H-disclosure-policy commit 2 — pure-function unit tests for
 * the pathway sensitivity registry + the dispatcher's pathway
 * resolution behavior.
 *
 * No DB, no I/O. Run: npx tsx scripts/test-pathway-sensitivity-registry.ts
 *
 * Validates:
 *   1. Every code in PATHWAY_CODES resolves to a value in
 *      PATHWAY_SENSITIVITY_LEVELS.
 *   2. resolvePathwaySensitivity throws on unknown codes.
 *   3. isKnownPathwayCode returns the right boolean for known + unknown.
 *   4. The (synthetic) dispatcher resolution behavior matrix:
 *        - undefined / empty pathway_scope -> both fields undefined
 *        - single registered code -> both fields populated
 *        - single UNREGISTERED code -> resolver throws
 *        - multi-element scope -> both fields undefined (multi-scope
 *          tier_2 or below; the elevated-tier lint blocks the
 *          dangerous combinations from authoring time, not the runtime
 *          resolver)
 *   5. CI lint at scripts/lint-rules-templates-scaffold.ts exits 0 on
 *      the current tree.
 */

import { execSync } from 'node:child_process'

import {
  PATHWAY_CODES,
  PATHWAY_SENSITIVITY_BY_CODE,
  resolvePathwaySensitivity,
  isKnownPathwayCode,
  type PathwayCode,
} from '../lib/pathways/sensitivity-registry'

import { PATHWAY_SENSITIVITY_LEVELS, type PathwaySensitivity } from '../lib/outbound/types'

// Re-implement the dispatcher's resolvePathwayForRule shape here so the
// test exercises the same branching logic. This avoids importing the
// dispatcher module (which has DB-touching transitive imports).
//
// IMPORTANT: if the dispatcher's behavior diverges from this test
// helper, the live-DB smoke at scripts/test-pathway-sensitivity-
// propagation-live.ts will catch it. This helper is the pure-function
// statement of intent.
type ResolvedPathway = {
  pathway_code: PathwayCode | undefined
  pathway_sensitivity: PathwaySensitivity | undefined
}

function resolvePathwayForRuleSpec(scope: readonly string[] | undefined): ResolvedPathway {
  if (!scope || scope.length === 0) {
    return { pathway_code: undefined, pathway_sensitivity: undefined }
  }
  if (scope.length > 1) {
    return { pathway_code: undefined, pathway_sensitivity: undefined }
  }
  const code = scope[0]
  if (!isKnownPathwayCode(code)) {
    throw new Error(
      `resolvePathwayForRuleSpec: unknown pathway_code='${code}' in single-element pathway_scope`,
    )
  }
  return {
    pathway_code: code,
    pathway_sensitivity: resolvePathwaySensitivity(code),
  }
}

let passes = 0
let failures = 0
function pass(label: string): void {
  console.log(`  PASS — ${label}`)
  passes++
}
function fail(label: string, msg: string): void {
  console.error(`  FAIL — ${label}: ${msg}`)
  failures++
}
function assert(cond: boolean, label: string, msg: string): void {
  if (cond) pass(label)
  else fail(label, msg)
}

// =====================================================================
// Group 1: registry sanity
// =====================================================================

console.log('[group 1] registry sanity')

assert(
  PATHWAY_CODES.length > 0,
  'PATHWAY_CODES is non-empty',
  `got length=${PATHWAY_CODES.length}`,
)

assert(
  new Set(PATHWAY_CODES).size === PATHWAY_CODES.length,
  'PATHWAY_CODES has no duplicates',
  'duplicate codes detected',
)

const sensitivitySet = new Set<PathwaySensitivity>(PATHWAY_SENSITIVITY_LEVELS)
for (const code of PATHWAY_CODES) {
  const sensitivity = PATHWAY_SENSITIVITY_BY_CODE[code]
  assert(
    sensitivity !== undefined,
    `${code} has a registered sensitivity`,
    'missing entry in PATHWAY_SENSITIVITY_BY_CODE',
  )
  assert(
    sensitivitySet.has(sensitivity),
    `${code} sensitivity '${sensitivity}' is in PATHWAY_SENSITIVITY_LEVELS`,
    `got '${sensitivity}'; allowed: ${[...sensitivitySet].join(', ')}`,
  )
}

const registeredKeys = new Set<string>(Object.keys(PATHWAY_SENSITIVITY_BY_CODE))
for (const k of registeredKeys) {
  assert(
    (PATHWAY_CODES as readonly string[]).includes(k),
    `PATHWAY_SENSITIVITY_BY_CODE key '${k}' is in PATHWAY_CODES`,
    'orphaned entry; remove or add to PATHWAY_CODES',
  )
}

// =====================================================================
// Group 2: resolvePathwaySensitivity
// =====================================================================

console.log('\n[group 2] resolvePathwaySensitivity')

for (const code of PATHWAY_CODES) {
  const v = resolvePathwaySensitivity(code)
  assert(
    sensitivitySet.has(v),
    `resolvePathwaySensitivity('${code}') returns valid sensitivity`,
    `got '${v}'`,
  )
}

let threwOnUnknown = false
try {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolvePathwaySensitivity('not_a_real_pathway' as any)
} catch {
  threwOnUnknown = true
}
assert(
  threwOnUnknown,
  'resolvePathwaySensitivity throws on unknown code',
  'expected throw; got silent return',
)

// =====================================================================
// Group 3: isKnownPathwayCode
// =====================================================================

console.log('\n[group 3] isKnownPathwayCode')

for (const code of PATHWAY_CODES) {
  assert(isKnownPathwayCode(code), `isKnownPathwayCode('${code}') === true`, 'expected true')
}

assert(
  !isKnownPathwayCode('not_a_real_pathway'),
  `isKnownPathwayCode('not_a_real_pathway') === false`,
  'expected false',
)

assert(!isKnownPathwayCode(''), `isKnownPathwayCode('') === false`, 'expected false')

// =====================================================================
// Group 4: dispatcher resolution behavior matrix
// =====================================================================

console.log('\n[group 4] dispatcher resolution behavior matrix')

// 4a. undefined scope -> both fields undefined
{
  const r = resolvePathwayForRuleSpec(undefined)
  assert(
    r.pathway_code === undefined && r.pathway_sensitivity === undefined,
    'undefined pathway_scope -> both fields undefined',
    JSON.stringify(r),
  )
}

// 4b. empty array scope -> both fields undefined
{
  const r = resolvePathwayForRuleSpec([])
  assert(
    r.pathway_code === undefined && r.pathway_sensitivity === undefined,
    'empty pathway_scope -> both fields undefined',
    JSON.stringify(r),
  )
}

// 4c. single registered code -> both fields populated, sensitivity matches registry
for (const code of PATHWAY_CODES) {
  const r = resolvePathwayForRuleSpec([code])
  assert(
    r.pathway_code === code,
    `single-element pathway_scope=['${code}'] -> pathway_code='${code}'`,
    `got '${r.pathway_code}'`,
  )
  assert(
    r.pathway_sensitivity === PATHWAY_SENSITIVITY_BY_CODE[code],
    `single-element pathway_scope=['${code}'] -> pathway_sensitivity matches registry`,
    `got '${r.pathway_sensitivity}'; expected '${PATHWAY_SENSITIVITY_BY_CODE[code]}'`,
  )
}

// 4d. single UNREGISTERED code -> resolver throws
let threwOnSingleUnregistered = false
try {
  resolvePathwayForRuleSpec(['not_a_real_pathway'])
} catch {
  threwOnSingleUnregistered = true
}
assert(
  threwOnSingleUnregistered,
  'single UNREGISTERED pathway_scope throws (loud failure, not silent fall-through)',
  'expected throw; got silent return',
)

// 4e. multi-element scope (all registered) -> both fields undefined
//     (multi-scope tier_2 or below path; the elevated-tier lint blocks
//     dangerous tier_3+ combinations at authoring time).
//
// Today PATHWAY_CODES has length 1, so we synthesize a 2-element scope
// using the first registered code twice. The resolver only checks
// `scope.length > 1`, not uniqueness; this exercises the multi-scope
// branch without requiring a second registered code to exist.
{
  const codes = PATHWAY_CODES as readonly string[]
  const r = resolvePathwayForRuleSpec([codes[0], codes[0]])
  assert(
    r.pathway_code === undefined && r.pathway_sensitivity === undefined,
    'multi-element pathway_scope -> both fields undefined (commit 2 deferral)',
    JSON.stringify(r),
  )
}

// 4f. multi-element scope with a synthetic UNREGISTERED entry mixed in:
//     resolver returns undefined (does NOT throw, because multi-scope
//     short-circuits before the per-element check). The elevated-tier
//     lint catches this at PR time.
{
  const codes = PATHWAY_CODES as readonly string[]
  const r = resolvePathwayForRuleSpec([codes[0], 'not_a_real_pathway'])
  assert(
    r.pathway_code === undefined && r.pathway_sensitivity === undefined,
    'multi-element scope with one unregistered code returns undefined (lint catches at PR time, not runtime)',
    JSON.stringify(r),
  )
}

// =====================================================================
// Group 5: CI lint smoke
// =====================================================================

console.log('\n[group 5] CI lint smoke')

try {
  execSync('npx tsx scripts/lint-rules-templates-scaffold.ts > /dev/null 2>&1', {
    cwd: process.cwd(),
  })
  pass('scripts/lint-rules-templates-scaffold.ts exits 0 on the current tree')
} catch (err) {
  fail(
    'scripts/lint-rules-templates-scaffold.ts exits 0 on the current tree',
    err instanceof Error ? err.message : String(err),
  )
}

// =====================================================================
console.log('\n----------------------------------------------------------------------')
console.log(
  `Phase 4H-disclosure-policy commit 2 pathway sensitivity registry: ${passes} passed, ${failures} failed.`,
)
if (failures > 0) {
  console.error('RED — registry / resolver invariants violated.')
  process.exit(1)
} else {
  console.log('GREEN — pathway sensitivity registry + resolver behavior locked.')
  process.exit(0)
}
