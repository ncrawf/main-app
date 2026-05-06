/**
 * Phase 4F unit test — verifies the typed event registry is well-formed
 * and parity-checked against the Phase 4A intake catalog.
 *
 * Pure-function (no DB), runs as: `npx tsx scripts/test-events-registry.ts`.
 *
 * What this test asserts:
 *   1. Each catalog has no duplicates.
 *   2. AUDIT_ACTIONS is a strict superset of `INTAKE_EVENT_ACTIONS` from
 *      `lib/intake/events.ts` (drift detector).
 *   3. Within each domain group, entries are alphabetically sorted (keeps
 *      diffs reviewable).
 *   4. Zod enums round-trip every registered value.
 *   5. `assertKnown*` throws for unknown values.
 *   6. `isKnown*` type-guards behave correctly.
 *   7. The lint script exits 0 against the current tree (no regressions).
 */

import { spawnSync } from 'node:child_process'
import {
  AUDIT_ACTIONS,
  AuditActionSchema,
  CAPABILITY_AUDIT_ACTIONS,
  EXTERNAL_RAIL_AUDIT_ACTIONS,
  INTAKE_AUDIT_ACTIONS,
  PATIENT_CASE_AUDIT_ACTIONS,
  RULE_AND_NOTIFICATION_AUDIT_ACTIONS,
  assertKnownAuditAction,
  isKnownAuditAction,
} from '../lib/events/audit-actions'
import {
  CLINICAL_TIMELINE_TYPES,
  COMMERCE_TIMELINE_TYPES,
  NOTIFICATION_DISPATCH_TIMELINE_TYPES,
  ORDER_LIFECYCLE_TIMELINE_TYPES,
  PATIENT_PORTAL_TIMELINE_TYPES,
  REFILL_TIMELINE_TYPES,
  STAFF_ANNOTATION_TIMELINE_TYPES,
  SUPPORT_TIMELINE_TYPES,
  TIMELINE_EVENT_TYPES,
  TREATMENT_LIFECYCLE_TIMELINE_TYPES,
  TimelineEventTypeSchema,
  assertKnownTimelineEventType,
  isKnownTimelineEventType,
} from '../lib/events/timeline-event-types'
import { INTAKE_EVENT_ACTIONS } from '../lib/intake/events'

let passed = 0
let failed = 0

function check(label: string, condition: boolean, detail?: string): void {
  if (condition) {
    passed++
    console.log(`  PASS — ${label}`)
  } else {
    failed++
    console.log(`  FAIL — ${label}${detail ? `: ${detail}` : ''}`)
  }
}

function arraysEqual<T>(a: readonly T[], b: readonly T[]): boolean {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false
  return true
}

function assertSorted(label: string, arr: readonly string[]): void {
  const sorted = [...arr].sort()
  check(`${label} alphabetically sorted within group`, arraysEqual(arr, sorted), `expected ${JSON.stringify(sorted)}`)
}

function assertNoDuplicates(label: string, arr: readonly string[]): void {
  const seen = new Set<string>()
  const dupes: string[] = []
  for (const v of arr) {
    if (seen.has(v)) dupes.push(v)
    seen.add(v)
  }
  check(`${label} no duplicates`, dupes.length === 0, `dupes: ${dupes.join(', ')}`)
}

console.log('Phase 4F event registry tests')
console.log('-'.repeat(70))

console.log('\n[group 1] Domain groups alphabetically sorted')
assertSorted('INTAKE_AUDIT_ACTIONS', INTAKE_AUDIT_ACTIONS)
assertSorted('PATIENT_CASE_AUDIT_ACTIONS', PATIENT_CASE_AUDIT_ACTIONS)
assertSorted('EXTERNAL_RAIL_AUDIT_ACTIONS', EXTERNAL_RAIL_AUDIT_ACTIONS)
assertSorted('CAPABILITY_AUDIT_ACTIONS', CAPABILITY_AUDIT_ACTIONS)
assertSorted('RULE_AND_NOTIFICATION_AUDIT_ACTIONS', RULE_AND_NOTIFICATION_AUDIT_ACTIONS)
assertSorted('STAFF_ANNOTATION_TIMELINE_TYPES', STAFF_ANNOTATION_TIMELINE_TYPES)
assertSorted('TREATMENT_LIFECYCLE_TIMELINE_TYPES', TREATMENT_LIFECYCLE_TIMELINE_TYPES)
assertSorted('ORDER_LIFECYCLE_TIMELINE_TYPES', ORDER_LIFECYCLE_TIMELINE_TYPES)
assertSorted('CLINICAL_TIMELINE_TYPES', CLINICAL_TIMELINE_TYPES)
assertSorted('PATIENT_PORTAL_TIMELINE_TYPES', PATIENT_PORTAL_TIMELINE_TYPES)
assertSorted('REFILL_TIMELINE_TYPES', REFILL_TIMELINE_TYPES)
assertSorted('COMMERCE_TIMELINE_TYPES', COMMERCE_TIMELINE_TYPES)
assertSorted('NOTIFICATION_DISPATCH_TIMELINE_TYPES', NOTIFICATION_DISPATCH_TIMELINE_TYPES)
assertSorted('SUPPORT_TIMELINE_TYPES', SUPPORT_TIMELINE_TYPES)

console.log('\n[group 2] Unions have no duplicates')
assertNoDuplicates('AUDIT_ACTIONS', AUDIT_ACTIONS)
assertNoDuplicates('TIMELINE_EVENT_TYPES', TIMELINE_EVENT_TYPES)

console.log('\n[group 3] Phase 4A INTAKE_EVENT_ACTIONS parity with INTAKE_AUDIT_ACTIONS')
const phase4aSet = new Set<string>(INTAKE_EVENT_ACTIONS)
const phase4fIntakeSet = new Set<string>(INTAKE_AUDIT_ACTIONS)
const missing4f: string[] = []
const extra4f: string[] = []
for (const v of phase4aSet) if (!phase4fIntakeSet.has(v)) missing4f.push(v)
for (const v of phase4fIntakeSet) if (!phase4aSet.has(v)) extra4f.push(v)
check('every INTAKE_EVENT_ACTIONS value also in INTAKE_AUDIT_ACTIONS (no drift)',
  missing4f.length === 0,
  missing4f.length ? `missing in 4F: ${missing4f.join(', ')}` : undefined)
check('every INTAKE_AUDIT_ACTIONS value also in INTAKE_EVENT_ACTIONS (4A is the floor)',
  extra4f.length === 0,
  extra4f.length ? `extra in 4F intake group: ${extra4f.join(', ')}` : undefined)

console.log('\n[group 4] Zod schema round-trip')
let zodOk = true
for (const v of AUDIT_ACTIONS) {
  if (AuditActionSchema.parse(v) !== v) { zodOk = false; break }
}
check('AuditActionSchema parses every registered value', zodOk)
let zodOk2 = true
for (const v of TIMELINE_EVENT_TYPES) {
  if (TimelineEventTypeSchema.parse(v) !== v) { zodOk2 = false; break }
}
check('TimelineEventTypeSchema parses every registered value', zodOk2)

const auditUnknownThrew = !AuditActionSchema.safeParse('not.a.real.action').success
check('AuditActionSchema rejects unknown literal', auditUnknownThrew)
const timelineUnknownThrew = !TimelineEventTypeSchema.safeParse('definitely_not_real').success
check('TimelineEventTypeSchema rejects unknown literal', timelineUnknownThrew)

console.log('\n[group 5] Type guards')
check('isKnownAuditAction true for known', isKnownAuditAction('intake.atom.emitted'))
check('isKnownAuditAction false for unknown', !isKnownAuditAction('asdf.qwer'))
check('isKnownTimelineEventType true for known', isKnownTimelineEventType('staff_note'))
check('isKnownTimelineEventType false for unknown', !isKnownTimelineEventType('asdf_qwer'))

let assertThrew = false
try { assertKnownAuditAction('not.a.thing'); } catch { assertThrew = true }
check('assertKnownAuditAction throws for unknown', assertThrew)
let assertThrew2 = false
try { assertKnownTimelineEventType('not_a_thing'); } catch { assertThrew2 = true }
check('assertKnownTimelineEventType throws for unknown', assertThrew2)

console.log('\n[group 6] Catalog totals')
console.log(`  AUDIT_ACTIONS total: ${AUDIT_ACTIONS.length}`)
console.log(`    intake: ${INTAKE_AUDIT_ACTIONS.length}, patient_case: ${PATIENT_CASE_AUDIT_ACTIONS.length}, external_rail: ${EXTERNAL_RAIL_AUDIT_ACTIONS.length}, capability: ${CAPABILITY_AUDIT_ACTIONS.length}, rule_and_notification: ${RULE_AND_NOTIFICATION_AUDIT_ACTIONS.length}`)
console.log(`  TIMELINE_EVENT_TYPES total: ${TIMELINE_EVENT_TYPES.length}`)
console.log(`    staff_annotation: ${STAFF_ANNOTATION_TIMELINE_TYPES.length}, treatment_lifecycle: ${TREATMENT_LIFECYCLE_TIMELINE_TYPES.length}, order_lifecycle: ${ORDER_LIFECYCLE_TIMELINE_TYPES.length}, clinical: ${CLINICAL_TIMELINE_TYPES.length}, patient_portal: ${PATIENT_PORTAL_TIMELINE_TYPES.length}, refill: ${REFILL_TIMELINE_TYPES.length}, commerce: ${COMMERCE_TIMELINE_TYPES.length}, notification_dispatch: ${NOTIFICATION_DISPATCH_TIMELINE_TYPES.length}, support: ${SUPPORT_TIMELINE_TYPES.length}`)

console.log('\n[group 7] CI lint smoke')
const lintResult = spawnSync('npx', ['tsx', 'scripts/lint-event-types.ts'], {
  encoding: 'utf8',
  cwd: process.cwd(),
})
const lintOk = lintResult.status === 0
check(
  'scripts/lint-event-types.ts exits 0 on current tree',
  lintOk,
  lintOk ? undefined : `\n--- stdout ---\n${lintResult.stdout}\n--- stderr ---\n${lintResult.stderr}`,
)

console.log('\n' + '-'.repeat(70))
if (failed === 0) {
  console.log(`Phase 4F event registry: ${passed} passed, 0 failed.`)
  console.log('GREEN — typed event_type / action catalog locked.')
  process.exit(0)
} else {
  console.log(`Phase 4F event registry: ${passed} passed, ${failed} failed.`)
  process.exit(1)
}
