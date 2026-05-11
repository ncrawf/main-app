/**
 * Phase 4F CI lint — verifies every `audit_events.action` and
 * `patient_timeline_events.event_type` literal that appears at a write
 * site is registered in the typed catalog (`lib/events/`).
 *
 * Default mode (HANDOFF scope per Phase 4F):
 *   - ERROR (exit 1) — literal NOT in registry (typo / unregistered event).
 *   - PASS (info only) — literal IS in registry (call site is using a
 *     known value; migration to typed helpers is a separate gradual pass).
 *
 * --strict mode (future hardening; opt-in via env or flag):
 *   - ERROR on every inline literal at a raw `from(...).insert(...)` write
 *     site, even if the value is known. Forces use of `insertAuditEvent` /
 *     `insertTimelineEvent` from `lib/events/index.ts`.
 *   - Enable via `npx tsx scripts/lint-event-types.ts --strict`
 *     or `LINT_EVENT_TYPES_STRICT=1 npx tsx scripts/lint-event-types.ts`.
 *
 * Scans `.ts` / `.tsx` files in `lib/`, `app/`, `scripts/` and looks for
 * inline `action: 'literal'` / `event_type: 'literal'` properties. Read
 * sites use `.eq('event_type', 'literal')` / `=== 'literal'` shapes which
 * we deliberately do NOT match (typos there return no rows rather than
 * corrupting the audit ledger).
 *
 * Exempt paths:
 *   - lib/events/**                    (the registry itself).
 *   - lib/intake/events.ts             (Phase 4A typed catalog; parity
 *                                       checked by test-events-registry.ts).
 *   - scripts/lint-event-types.ts      (this file).
 *   - scripts/test-events-registry.ts  (registers known values in tests).
 *
 * Migration files (`supabase/migrations/*.sql`) are out of scope (DDL
 * cannot reference TS imports). The orchestrator-emitted values inside
 * those files are kept in sync with the registry by manual review +
 * the parity check in `test-events-registry.ts`.
 */

import { readFileSync, statSync, readdirSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

import { AUDIT_ACTIONS } from '../lib/events/audit-actions'
import { TIMELINE_EVENT_TYPES } from '../lib/events/timeline-event-types'

const repoRoot = process.cwd()

const SCAN_ROOTS = ['lib', 'app', 'scripts']
const EXEMPT_PATHS = [
  // Registry itself.
  join('lib', 'events'),
  // Phase 4A typed catalog mirrors INTAKE_AUDIT_ACTIONS — parity check covers it.
  join('lib', 'intake', 'events.ts'),
  // The lint script itself references known values in regex strings.
  join('scripts', 'lint-event-types.ts'),
  // Phase 4F unit test references known values in assertions.
  join('scripts', 'test-events-registry.ts'),
  // Question-bank files declare emission templates that the orchestrator
  // consumes at write time — they are NOT direct write call sites. The
  // typed catalog still gates these values at runtime via the orchestrator's
  // `audit_event_only` target dispatch (see record_intake_emissions_batch).
  join('lib', 'intake', 'question-bank'),
  // Phase 4H-pre commit 3 — Rule + Template scaffold uses RuleTrigger.event_type
  // as a property name, which is a DIFFERENT concept than
  // patient_timeline_events.event_type. The string-literal heuristic this lint
  // uses cannot distinguish them; the Rule scaffold is exempt from the
  // timeline-event-type check. Future commits that ship rules under repo/rules/
  // inherit this exemption. The Rule.audit_event_type field IS checked at
  // compile time against AuditAction, so the typed-catalog discipline is
  // preserved at the type-system level.
  join('repo', 'rules'),
  join('repo', 'templates'),
  join('scripts', 'test-rules-templates-scaffold.ts'),
  // Phase 4H-pre commit 5 — same false-positive class for
  // RuleTrigger.event_type at the dispatcher + caller + smoke test
  // sites. The values here come from
  // lib/events/rule-trigger-event-types.ts (typed RuleTriggerEventType
  // registry), not from patient_timeline_events.event_type. Future
  // dispatcher code paths inherit this exemption.
  join('lib', 'rules', 'runtime'),
  join('lib', 'payments', 'handleStripeCheckoutCompleted.ts'),
  join('scripts', 'test-payment-received-parity.ts'),
  // Phase 4H-templates-discipline commit 1 — same false-positive at
  // lib/protocol/derive.ts (calls dispatchRuleTriggerEvent with
  // 'patient.intake_submitted') + the new parity test.
  join('lib', 'protocol', 'derive.ts'),
  join('scripts', 'test-intake-submitted-parity.ts'),
  // Phase 4H-templates-discipline commit 2 — same false-positive class at
  // lib/internal/patient-case/impl.ts (calls dispatchRuleTriggerEvent
  // with 'patient.case_approved' from updateTreatmentItemStatus +
  // updateCareProgramStatus producer sites) + the new parity test.
  // The file's existing audit + timeline literals are typed-helper
  // protected at insertAuditEvent / insertTimelineEvent call sites.
  join('lib', 'internal', 'patient-case', 'impl.ts'),
  join('scripts', 'test-case-approved-parity.ts'),
  // Phase 4H-templates-discipline commit 3 — same false-positive class
  // at the awaiting_clinical_review parity test (same
  // RuleTriggerEventType vs patient_timeline_events.event_type
  // distinction). The producer site exemption above (impl.ts) already
  // covers the patient.case_under_review trigger literal in that file.
  join('scripts', 'test-awaiting-clinical-review-parity.ts'),
  // Phase 4H-templates-discipline commit 4 — same false-positive class
  // at the order_shipped parity test (RuleTriggerEventType
  // 'patient.order_shipped' literal). Producer-site exemption
  // (impl.ts) already covers the trigger literal in the producer.
  join('scripts', 'test-shipped-parity.ts'),
  // Phase 4H-in-app-inbox c1 — substrate channel test inserts
  // synthetic outbound_jobs rows with kind='send_in_app' and may
  // reference rule/template lineage strings. The test does not
  // emit audit_events.action or patient_timeline_events.event_type
  // values, but the literal-string scan flags adjacent property
  // shapes. Same false-positive exemption pattern as the prior
  // parity tests.
  join('scripts', 'test-in-app-inbox-c1.ts'),
  // Phase 4H-communications c2 — chat rendering integration test
  // inserts synthetic messages rows (staff turns + multi-participant
  // scenarios) and may reference adjacent property shapes that the
  // literal-string scan flags. Same false-positive exemption pattern.
  // The test DOES emit patient_chat_message_sent via postPatientMessage,
  // but that path uses the typed insertTimelineEvent helper, so the
  // exemption is for incidental adjacent property literals only.
  join('scripts', 'test-chat-rendering-c2.ts'),
  // Phase 4H-templates-discipline c5 — same false-positive class at
  // the active_care parity test (RuleTriggerEventType
  // 'patient.case_active' literal). Producer-site exemption
  // (impl.ts) already covers the trigger literal in the producer.
  join('scripts', 'test-active-care-parity.ts'),
  // Phase 4H-templates-discipline c6 — same false-positive class at
  // the followup_due parity test (RuleTriggerEventType
  // 'patient.case_followup_due' literal).
  join('scripts', 'test-followup-due-parity.ts'),
  // Phase 4H-templates-discipline c7 — same false-positive class at
  // the followup_needed parity test (RuleTriggerEventType
  // 'patient.case_followup_needed' literal).
  join('scripts', 'test-followup-needed-parity.ts'),
  // Phase 4H-templates-discipline c8 — pharmacy_lifecycle parity
  // tests reference the new RuleTriggerEventType literals
  // 'patient.rx_sent_to_pharmacy' and 'patient.refill_initiated'.
  join('scripts', 'test-rx-sent-parity.ts'),
  join('scripts', 'test-refill-initiated-parity.ts'),
  // Phase 4H-templates-discipline c9 — final legacy migration parity
  // test references the 'patient.case_denied' RuleTriggerEventType
  // literal.
  join('scripts', 'test-case-denied-parity.ts'),
]

/** Function names whose argument literals are TS-typed against the registry,
 * so an inline literal at these call sites is safe (compile-time enforcement
 * + runtime assertKnown* guard inside the helper). */
const TYPED_HELPER_FN_NAMES = new Set<string>([
  'insertAuditEvent',
  'insertTimelineEvent',
])

const KNOWN_ACTIONS: ReadonlySet<string> = new Set(AUDIT_ACTIONS)
const KNOWN_EVENT_TYPES: ReadonlySet<string> = new Set(TIMELINE_EVENT_TYPES)

const STRICT =
  process.argv.includes('--strict') || process.env.LINT_EVENT_TYPES_STRICT === '1'

type Finding = {
  path: string
  line: number
  column: number
  kind: 'audit_action' | 'timeline_event_type'
  literal: string
  context: string
  inRegistry: boolean
  /** True when the literal sits inside a call to insertAuditEvent /
   * insertTimelineEvent. TS already enforces the literal value at compile
   * time at those sites, so strict mode allows them. */
  insideTypedHelper?: boolean
}

function shouldScan(path: string): boolean {
  if (!path.endsWith('.ts') && !path.endsWith('.tsx')) return false
  for (const exempt of EXEMPT_PATHS) {
    if (path === exempt || path.startsWith(exempt + sep)) return false
  }
  return true
}

function* walk(dir: string): Generator<string> {
  let entries: string[]
  try {
    entries = readdirSync(dir)
  } catch {
    return
  }
  for (const entry of entries) {
    if (entry === 'node_modules' || entry === '.next' || entry.startsWith('.')) continue
    const full = join(dir, entry)
    let stat
    try {
      stat = statSync(full)
    } catch {
      continue
    }
    if (stat.isDirectory()) {
      yield* walk(full)
    } else if (stat.isFile()) {
      yield full
    }
  }
}

/**
 * Walk backwards from `index` looking for the enclosing function call's
 * identifier. Tracks string-literal state so identifiers inside strings
 * don't fool us. Returns the function name (e.g. `insertAuditEvent`) or
 * undefined if no enclosing call is found within `maxLookback` chars.
 *
 * Implementation is bracket-balanced: starts at `index`, increments depth
 * on `)`, decrements on `(`. When depth would go negative we found the
 * enclosing `(`; the identifier immediately before it is the function name.
 */
function enclosingCallName(
  src: string,
  index: number,
  maxLookback = 4096,
): string | undefined {
  let depth = 0
  const start = Math.max(0, index - maxLookback)
  let i = index
  let inString: string | null = null

  while (i >= start) {
    const c = src[i]
    const prev = i > 0 ? src[i - 1] : ''

    // Toggle string state (skip char inside strings). We scan backwards so
    // a closing quote enters a string and an opening quote exits it.
    // Don't trigger on escaped quotes (preceded by an odd run of backslashes).
    if (inString) {
      if (c === inString && !isEscapedAt(src, i)) inString = null
    } else if (c === '"' || c === "'" || c === '`') {
      if (!isEscapedAt(src, i)) inString = c
    }

    if (!inString) {
      if (c === ')') depth++
      else if (c === '(') {
        if (depth === 0) {
          // Found the enclosing `(`. Walk back over whitespace + identifier.
          let j = i - 1
          while (j >= 0 && /\s/.test(src[j])) j--
          const idEnd = j + 1
          while (j >= 0 && /[A-Za-z0-9_$]/.test(src[j])) j--
          const idStart = j + 1
          if (idEnd > idStart) return src.substring(idStart, idEnd)
          return undefined
        }
        depth--
      }
    }

    // Skip the open of a `/* ... */` we're walking back through (we don't
    // need pretty handling here; comments rarely contain `(` matching pattern,
    // so the simple heuristic above is good enough).
    void prev
    i--
  }
  return undefined
}

function isEscapedAt(src: string, i: number): boolean {
  let backslashes = 0
  let j = i - 1
  while (j >= 0 && src[j] === '\\') {
    backslashes++
    j--
  }
  return backslashes % 2 === 1
}

type RawFinding = Finding & { absoluteIndex: number }

function collectFindings(src: string, path: string): Finding[] {
  const lines = src.split(/\r?\n/)
  const findings: RawFinding[] = []

  // Compute line-start offsets so we can convert (line, column) → absolute index.
  const lineStarts: number[] = [0]
  for (let i = 0; i < src.length; i++) {
    if (src[i] === '\n') lineStarts.push(i + 1)
  }

  const patterns: Array<{
    regex: RegExp
    kind: Finding['kind']
    knownSet: ReadonlySet<string>
  }> = [
    {
      regex: /(?:^|[\s,{(])action\s*:\s*['"]([a-z][a-z0-9._]*)['"]/g,
      kind: 'audit_action',
      knownSet: KNOWN_ACTIONS,
    },
    {
      regex: /(?:^|[\s,{(])event_type\s*:\s*['"]([a-z][a-z0-9._]*)['"]/g,
      kind: 'timeline_event_type',
      knownSet: KNOWN_EVENT_TYPES,
    },
  ]

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()
    if (trimmed.startsWith('//') || trimmed.startsWith('*')) continue

    for (const { regex, kind, knownSet } of patterns) {
      regex.lastIndex = 0
      let match: RegExpExecArray | null
      while ((match = regex.exec(line)) !== null) {
        const literal = match[1]
        const absoluteIndex = lineStarts[i] + match.index
        findings.push({
          path,
          line: i + 1,
          column: match.index + 1,
          kind,
          literal,
          context: line.trim(),
          inRegistry: knownSet.has(literal),
          absoluteIndex,
        })
      }
    }
  }

  // Annotate each finding with whether it sits inside a typed-helper call.
  return findings.map((f) => {
    const enclosing = enclosingCallName(src, f.absoluteIndex)
    const insideTypedHelper = enclosing ? TYPED_HELPER_FN_NAMES.has(enclosing) : false
    return { ...f, insideTypedHelper }
  })
}

function fmtFinding(f: Finding, severity: 'ERROR' | 'INFO'): string {
  const tag =
    f.kind === 'audit_action' ? 'audit_events.action' : 'patient_timeline_events.event_type'
  const reason = f.inRegistry
    ? 'inline literal at write site (consider migrating to insertAuditEvent / insertTimelineEvent)'
    : `unknown ${tag} value — not in lib/events/ registry`
  return `    ${f.line}:${f.column}  [${severity}] ${tag}="${f.literal}" — ${reason}\n      | ${f.context}`
}

function main(): number {
  const findings: Finding[] = []
  for (const root of SCAN_ROOTS) {
    for (const file of walk(join(repoRoot, root))) {
      const rel = relative(repoRoot, file)
      if (!shouldScan(rel)) continue
      const src = readFileSync(file, 'utf8')
      findings.push(...collectFindings(src, rel))
    }
  }

  const unknown = findings.filter((f) => !f.inRegistry)
  // Strict mode flags every inline literal at NON-typed-helper write sites.
  // Typed-helper sites (insertAuditEvent / insertTimelineEvent) are exempt
  // because TS enforces the literal at compile time.
  const knownAtUntypedSite = findings.filter((f) => f.inRegistry && !f.insideTypedHelper)
  const knownAtTypedSite = findings.filter((f) => f.inRegistry && f.insideTypedHelper)

  console.log(`[lint-event-types] mode=${STRICT ? 'strict' : 'default'}`)
  console.log(
    `  registry sizes: AUDIT_ACTIONS=${KNOWN_ACTIONS.size}, TIMELINE_EVENT_TYPES=${KNOWN_EVENT_TYPES.size}`,
  )
  console.log(
    `  scanned: ${SCAN_ROOTS.join(', ')}; findings: ${unknown.length} unknown, ${knownAtUntypedSite.length} known-but-untyped, ${knownAtTypedSite.length} known-and-typed (TS-checked, allowed)`,
  )

  if (unknown.length > 0) {
    console.error(
      `\n[lint-event-types] FAIL — ${unknown.length} unknown literal(s). Register in lib/events/ or fix typo.\n`,
    )
    const byFile = new Map<string, Finding[]>()
    for (const f of unknown) {
      if (!byFile.has(f.path)) byFile.set(f.path, [])
      byFile.get(f.path)!.push(f)
    }
    for (const [file, fs] of byFile) {
      console.error(`  ${file}`)
      for (const f of fs) console.error(fmtFinding(f, 'ERROR'))
    }
  }

  if (STRICT && knownAtUntypedSite.length > 0) {
    console.error(
      `\n[lint-event-types] FAIL (strict) — ${knownAtUntypedSite.length} inline literal(s) at non-typed-helper write sites.\n` +
        `  Use insertAuditEvent / insertTimelineEvent from lib/events/index.ts so TS validates the action / eventType at compile time.\n`,
    )
    const byFile = new Map<string, Finding[]>()
    for (const f of knownAtUntypedSite) {
      if (!byFile.has(f.path)) byFile.set(f.path, [])
      byFile.get(f.path)!.push(f)
    }
    for (const [file, fs] of byFile) {
      console.error(`  ${file}`)
      for (const f of fs) console.error(fmtFinding(f, 'ERROR'))
    }
  }

  if (!STRICT && knownAtUntypedSite.length > 0) {
    console.log(
      `  info: ${knownAtUntypedSite.length} inline-but-known literal(s) at legacy call sites. Run with --strict to enforce typed-helper migration.`,
    )
  }

  if (unknown.length > 0) return 1
  if (STRICT && knownAtUntypedSite.length > 0) return 1

  console.log('[lint-event-types] OK')
  return 0
}

const code = main()
process.exit(code)
