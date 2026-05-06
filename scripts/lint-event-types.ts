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
 *   - ERROR on every inline literal at a raw `from(...).insert(...)` /
 *     `logAuditEvent` write site, even if the value is known. Forces use
 *     of `insertAuditEvent` / `insertTimelineEvent` from `lib/events/index.ts`.
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
  join('lib', 'events'),
  join('lib', 'intake', 'events.ts'),
  join('scripts', 'lint-event-types.ts'),
  join('scripts', 'test-events-registry.ts'),
]

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

function collectFindings(src: string, path: string): Finding[] {
  const lines = src.split(/\r?\n/)
  const findings: Finding[] = []

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
        findings.push({
          path,
          line: i + 1,
          column: match.index + 1,
          kind,
          literal,
          context: line.trim(),
          inRegistry: knownSet.has(literal),
        })
      }
    }
  }

  return findings
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
  const known = findings.filter((f) => f.inRegistry)

  console.log(`[lint-event-types] mode=${STRICT ? 'strict' : 'default'}`)
  console.log(
    `  registry sizes: AUDIT_ACTIONS=${KNOWN_ACTIONS.size}, TIMELINE_EVENT_TYPES=${KNOWN_EVENT_TYPES.size}`,
  )
  console.log(
    `  scanned: ${SCAN_ROOTS.join(', ')}; findings: ${unknown.length} unknown, ${known.length} known-but-inline`,
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

  if (STRICT && known.length > 0) {
    console.error(
      `\n[lint-event-types] FAIL (strict) — ${known.length} inline literal(s) at write sites. Use typed helpers from lib/events/index.ts.\n`,
    )
    const byFile = new Map<string, Finding[]>()
    for (const f of known) {
      if (!byFile.has(f.path)) byFile.set(f.path, [])
      byFile.get(f.path)!.push(f)
    }
    for (const [file, fs] of byFile) {
      console.error(`  ${file}`)
      for (const f of fs) console.error(fmtFinding(f, 'ERROR'))
    }
  }

  if (!STRICT && known.length > 0) {
    console.log(
      `  info: ${known.length} inline-but-known literal(s) in legacy call sites. Run with --strict to enforce typed-helper migration.`,
    )
  }

  if (unknown.length > 0) return 1
  if (STRICT && known.length > 0) return 1

  console.log('[lint-event-types] OK')
  return 0
}

const code = main()
process.exit(code)
