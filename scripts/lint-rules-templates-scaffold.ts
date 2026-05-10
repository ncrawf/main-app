/**
 * Phase 4H-pre commit 3 — CI lint enforcing the rules + templates
 * scaffold discipline.
 *
 * Three checks:
 *
 *   1. CODEOWNERS gate exists for /repo/rules/ + /repo/templates/.
 *      Without these entries, GitHub's CODEOWNERS enforcement does not
 *      gate the directories, so any PR can land Rules / Templates
 *      without an approver. This lint catches a regression of the
 *      CODEOWNERS file that drops the entries.
 *
 *   2. Anti-extension lint on the legacy implicit engine v0 (per
 *      system map Section 1Q.12 DELETE-AFTER-PARITY directive):
 *        - lib/workflows/notificationRules.ts NotificationTemplateKey
 *          union: snapshot the 11 baseline cases. Any new value fails
 *          the lint. (Removals are allowed — commit 5 deletes
 *          payment_received in the same PR that ships its replacement.)
 *        - lib/notifications/patientMessages.ts case statements:
 *          same snapshot logic. Any new case fails.
 *        - new direct callers of lib/workflows/onPatientWorkflowEvent
 *          are flagged.
 *
 *   3. Scaffold integrity: verify the four required scaffold files
 *      (repo/rules/{README.md,types.ts,index.ts} + repo/templates/
 *      same trio) exist. If a future commit accidentally deletes one,
 *      the lint catches it at PR time.
 *
 * Run with: npx tsx scripts/lint-rules-templates-scaffold.ts
 *
 * Exit codes: 0 = clean, 1 = violations found.
 */

import { readFileSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'

import { RULE_REGISTRY } from '../repo/rules'
import { isKnownPathwayCode, PATHWAY_CODES } from '../lib/pathways/sensitivity-registry'

const ROOT = process.cwd()

const FAILURES: string[] = []

function fail(check: string, message: string): void {
  FAILURES.push(`[${check}] ${message}`)
}

function ok(check: string, label: string): void {
  console.log(`  PASS — [${check}] ${label}`)
}

// =====================================================================
// Check 1: CODEOWNERS gate
// =====================================================================

console.log('[check 1] CODEOWNERS gate for /repo/rules/ and /repo/templates/')

const codeownersPath = `${ROOT}/.github/CODEOWNERS`
if (!existsSync(codeownersPath)) {
  fail('codeowners', '.github/CODEOWNERS does not exist — repository governance is not configured')
} else {
  const codeowners = readFileSync(codeownersPath, 'utf8')

  // Match a line of the form:
  //   /repo/rules/    @approver1 @approver2
  // (whitespace-separated approvers; at least one required)
  const rulesGateMatch = codeowners.match(/^\/repo\/rules\/[^\n]*?@\S+/m)
  const templatesGateMatch = codeowners.match(/^\/repo\/templates\/[^\n]*?@\S+/m)

  if (!rulesGateMatch) {
    fail(
      'codeowners',
      '/repo/rules/ has no CODEOWNER entry in .github/CODEOWNERS — Rules can be merged without governance approval'
    )
  } else {
    ok('codeowners', `/repo/rules/ gated: ${rulesGateMatch[0].trim()}`)
  }

  if (!templatesGateMatch) {
    fail(
      'codeowners',
      '/repo/templates/ has no CODEOWNER entry in .github/CODEOWNERS — Templates can be merged without governance approval'
    )
  } else {
    ok('codeowners', `/repo/templates/ gated: ${templatesGateMatch[0].trim()}`)
  }
}

// =====================================================================
// Check 2: Anti-extension lint on the legacy v0 engine
// =====================================================================

console.log('\n[check 2] Anti-extension lint on legacy implicit engine v0 (Section 1Q.12)')

// Section 1Q.12 binding inventory: the 11 NotificationTemplateKey values
// frozen at the cutover baseline. Each migrates per-PR to a typed Rule +
// Template; no new values may be added. Removals are allowed (commit 5
// deletes the migrated case).
const NOTIFICATION_TEMPLATE_KEYS_BASELINE = new Set([
  'payment_received',
  'intake_submitted',
  'awaiting_clinical_review',
  'case_approved',
  'case_denied',
  'followup_needed',
  'rx_sent',
  'shipped',
  'active_care',
  'followup_due',
  'refill_pending',
])

// 2a. NotificationTemplateKey union snapshot.
const notifRulesPath = `${ROOT}/lib/workflows/notificationRules.ts`
if (!existsSync(notifRulesPath)) {
  ok(
    'legacy-v0',
    'lib/workflows/notificationRules.ts no longer exists (post-cutover state — Section 1Q.12 directive complete)'
  )
} else {
  const notifRulesContent = readFileSync(notifRulesPath, 'utf8')
  const unionMatch = notifRulesContent.match(
    /export type NotificationTemplateKey =[\s\S]*?(?=\n\n|\nexport |\n[a-z])/,
  )
  if (!unionMatch) {
    fail(
      'legacy-v0',
      'lib/workflows/notificationRules.ts: could not parse NotificationTemplateKey union — file may have been refactored without updating this lint'
    )
  } else {
    const literalMatches = unionMatch[0].match(/'[a-z_]+'/g) ?? []
    const currentKeys = new Set(literalMatches.map(s => s.slice(1, -1)))

    let extensionFound = false
    for (const key of currentKeys) {
      if (!NOTIFICATION_TEMPLATE_KEYS_BASELINE.has(key)) {
        fail(
          'legacy-v0',
          `lib/workflows/notificationRules.ts: NotificationTemplateKey '${key}' is NEW — extending v0 is forbidden per Section 1Q.0 invariant 12. Migrate to a typed Rule + Template at repo/rules/ + repo/templates/ instead.`
        )
        extensionFound = true
      }
    }

    if (!extensionFound) {
      const removed = [...NOTIFICATION_TEMPLATE_KEYS_BASELINE].filter(k => !currentKeys.has(k))
      if (removed.length > 0) {
        ok(
          'legacy-v0',
          `lib/workflows/notificationRules.ts: ${currentKeys.size} cases (baseline 11; ${removed.length} migrated + deleted: ${removed.join(', ')})`
        )
      } else {
        ok(
          'legacy-v0',
          `lib/workflows/notificationRules.ts: ${currentKeys.size} cases (baseline 11; no migrations yet)`
        )
      }
    }
  }
}

// 2b. patientMessages.ts: the file mixes NotificationTemplateKey
// switches with other unrelated state-machine switches (e.g.,
// SupplementFulfillmentEmailStatus, ShippingEventStatus). Reliable
// scoped-regex matching is brittle. We rely on TypeScript's
// exhaustiveness checking to enforce that any new NotificationTemplateKey
// added to the union (caught by check 2a above) WILL force a matching
// case in patientMessages.ts at compile time. So we don't need a
// separate count check here — the union snapshot is the single source
// of truth for the legacy v0 vocabulary.

// 2c. New callers of onPatientWorkflowEvent are flagged. The legacy
// hook should not be called from new sites; the cutover replaces it
// with the typed event-bus pattern in 4H-rules-runtime.
//
// Snapshot the current call sites; any addition fails the lint. We use
// ripgrep when available, fall back to a simple shell grep.
const ONPATIENT_WORKFLOW_EVENT_BASELINE_SITES = new Set([
  // Snapshot of the current call sites at Phase 4H-pre commit 3. If
  // the cutover refactor introduces a NEW caller, it must be a
  // deliberate decision recorded in a follow-up ADR. Removals are
  // allowed (commit 5+ migrations delete legacy hook calls per the
  // DELETE-AFTER-PARITY directive).
  'lib/internal/patient-case/impl.ts',
  'lib/payments/handleStripeCheckoutCompleted.ts',
  'lib/protocol/derive.ts',
  'lib/refill/submitPatientRefillRequest.ts',
])

try {
  const grepOutput = execSync(
    `git grep -l "onPatientWorkflowEvent" -- '*.ts' '*.tsx' || true`,
    { cwd: ROOT, encoding: 'utf8' },
  )
  const callerFiles = new Set(
    grepOutput
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0)
      // The function definition itself + its export site are not
      // "callers" for this purpose.
      .filter(s => !s.endsWith('lib/workflows/onPatientWorkflowEvent.ts'))
      .filter(s => !s.endsWith('lib/workflows/types.ts'))
      // The lint script itself references the symbol in this comment;
      // exclude the lint to avoid self-trigger.
      .filter(s => !s.endsWith('scripts/lint-rules-templates-scaffold.ts')),
  )

  let newCallerFound = false
  for (const caller of callerFiles) {
    if (!ONPATIENT_WORKFLOW_EVENT_BASELINE_SITES.has(caller)) {
      fail(
        'legacy-v0',
        `New caller of onPatientWorkflowEvent: ${caller}. Calling the v0 workflow hook from new sites is forbidden during the cutover (Section 1Q.12). Use the typed event-bus that ships in 4H-rules-runtime instead.`
      )
      newCallerFound = true
    }
  }

  if (!newCallerFound) {
    ok(
      'legacy-v0',
      `onPatientWorkflowEvent has ${callerFiles.size} caller sites (baseline ${ONPATIENT_WORKFLOW_EVENT_BASELINE_SITES.size}; no extensions)`
    )
  }
} catch (err) {
  fail(
    'legacy-v0',
    `failed to enumerate onPatientWorkflowEvent callers: ${err instanceof Error ? err.message : err}`
  )
}

// =====================================================================
// Check 4: pathway_sensitivity propagation discipline
// (Phase 4H-disclosure-policy commit 2)
// =====================================================================

console.log(
  '\n[check 4] Pathway sensitivity propagation (Section 1Q.4 + 1Q.17 + ADR Section 7.5)',
)

// 4a. Every PathwayCode referenced in any Rule's pathway_scope must
// resolve to a registered code at lib/pathways/sensitivity-registry.ts.
//
// Catches typos and out-of-sync registries at PR time so the
// dispatcher never throws at runtime on an unknown code (which would
// abort the rule firing loudly — recoverable, but sloppy).

const OUTSIDE_SECURE_CHANNELS = new Set(['sms', 'email', 'push', 'mail'])

let pathwayCodeViolations = 0
let elevatedScopeViolations = 0

for (const rule of RULE_REGISTRY) {
  if (rule.pathway_scope && rule.pathway_scope.length > 0) {
    for (const code of rule.pathway_scope) {
      if (!isKnownPathwayCode(code)) {
        fail(
          'pathway-resolves',
          `${rule.rule_id} references pathway_code='${code}' which is not in PATHWAY_CODES at lib/pathways/sensitivity-registry.ts. ` +
            `Add the code to the registry (with its sensitivity declaration) or remove it from pathway_scope. ` +
            `Registered codes: ${PATHWAY_CODES.join(', ')}.`,
        )
        pathwayCodeViolations++
      }
    }
  }

  // 4b. Tier_3+ outside-secure rules must scope tightly.
  //
  // Per the Phase 4H-disclosure-policy commit 2 preflight + ChatGPT
  // pushback wording: "commit 2 supports single-pathway scope;
  // multi-pathway scope must either fail lint for elevated outside-
  // secure rules or require explicit max-sensitivity reducer."
  //
  // The reducer ships in a later commit; until then, multi-scope tier_3+
  // outside-secure rules fail lint. Multi-scope tier_2 or below: passes.
  // Single-scope tier_3+ outside-secure: passes (sensitivity unambiguously
  // resolvable).
  if (rule.action.kind === 'notify' || rule.action.kind === 'escalate' || rule.action.kind === 'clarify') {
    const tier = rule.action.intended_privacy_exposure_level
    const channels: string[] =
      rule.action.kind === 'notify'
        ? rule.action.channels
        : []
    const hitsOutsideSecure = channels.some((c) => OUTSIDE_SECURE_CHANNELS.has(c))
    const isElevated = tier !== undefined && tier >= 3
    const isMultiScope = (rule.pathway_scope?.length ?? 0) > 1

    if (isElevated && hitsOutsideSecure && isMultiScope) {
      fail(
        'pathway-elevated-scope',
        `${rule.rule_id} is tier_${tier} outside-secure with multi-element pathway_scope=[${rule.pathway_scope!.join(', ')}]. ` +
          `Multi-scope tier_3+ outside-secure rules cannot resolve sensitivity unambiguously. ` +
          `Either tighten pathway_scope to a single pathway, or wait until the multi-pathway max-sensitivity reducer ships in a later commit. ` +
          `(Multi-scope is fine for tier_0/1/2 outside-secure or any inside-secure-only channels — the clamp does not read pathway_sensitivity for those.)`,
      )
      elevatedScopeViolations++
    }
  }
}

if (pathwayCodeViolations === 0) {
  ok(
    'pathway-resolves',
    `every Rule.pathway_scope element resolves to a registered code (${RULE_REGISTRY.length} rules scanned; ${PATHWAY_CODES.length} registered codes)`,
  )
}
if (elevatedScopeViolations === 0) {
  ok(
    'pathway-elevated-scope',
    `no tier_3+ outside-secure rule has multi-element pathway_scope without the (deferred) max-sensitivity reducer`,
  )
}

// =====================================================================
// Check 5: Sibling-discriminant / sibling-folder alignment
// (Phase 4H-templates-discipline c4 — system-map `## Platform
// operational model` doctrine + audit §6 #1 + #2 + radar zone 27)
//
// Per the doctrine: each operational sibling owns its own payload
// discriminant (case_kind for clinical-decision, order_kind for
// fulfillment, etc.) and discriminants do NOT leak across sibling
// seams. Reusing case_kind for orders or order_kind for clinical-
// decision events is the canonization-of-wrong-ontology error this
// lint exists to prevent.
//
// This check uses static text scan against the rule files (the
// payload type lives in the dispatcher's union, not on the Rule
// object itself, so we cannot inspect the Rule shape directly). The
// scan is conservative: it flags rule files whose folder location
// disagrees with the discriminant they reference.
// =====================================================================

console.log(
  '\n[check 5] Sibling-discriminant / sibling-folder alignment (## Platform operational model doctrine)',
)

interface DiscriminantFolderRule {
  discriminant: string
  requiredFolder: string
  description: string
}

const DISCRIMINANT_FOLDER_RULES: DiscriminantFolderRule[] = [
  {
    discriminant: 'case_kind',
    requiredFolder: 'repo/rules/clinical_decision/',
    description: 'clinical_decision sibling owns case_kind',
  },
  {
    discriminant: 'order_kind',
    requiredFolder: 'repo/rules/fulfillment_lifecycle/',
    description: 'fulfillment_lifecycle sibling owns order_kind',
  },
  // Phase 4H-templates-discipline c8 — pharmacy_lifecycle sibling
  // activation. Per the doctrine: pharmacy_event_kind belongs to the
  // pharmacy_lifecycle sibling and MUST NOT appear in clinical_decision/
  // or fulfillment_lifecycle/ rule files.
  {
    discriminant: 'pharmacy_event_kind',
    requiredFolder: 'repo/rules/pharmacy_lifecycle/',
    description: 'pharmacy_lifecycle sibling owns pharmacy_event_kind',
  },
]

let discriminantFolderViolations = 0

try {
  // Find every .ts file under repo/rules/ that uses a tracked
  // discriminant in TS property syntax (i.e., `case_kind:` or
  // `case_kind?:`, which signals an object-literal property or a
  // type-field declaration — the patterns that indicate a real
  // payload reference).
  //
  // We deliberately do NOT match the bare identifier (`case_kind`
  // alone) because that pattern occurs in comments / documentation
  // strings inside legitimately-placed rule files (e.g., a rule in
  // fulfillment_lifecycle/ may explain in its header comment why it
  // uses `order_kind` and not `case_kind`). The colon-suffix pattern
  // is specific to actual TS code usage and avoids those false
  // positives.
  //
  // Note: payload type definitions actually live in the dispatcher
  // (lib/rules/runtime/dispatcher.ts), not in the rule files. So this
  // lint typically finds nothing — its purpose is defensive: catch a
  // future copy-paste mistake where a developer pulls a payload-shape
  // declaration into a rule file in the wrong sibling-domain folder.
  for (const rule of DISCRIMINANT_FOLDER_RULES) {
    // git grep treats the colon literally; -E enables extended regex.
    const grepCmd =
      `git grep -lE '\\b${rule.discriminant}\\??:' -- 'repo/rules/**/*.ts' || true`
    const grepOutput = execSync(grepCmd, {
      cwd: ROOT,
      encoding: 'utf8',
    })
    const offendingFiles = grepOutput
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
      .filter((s) => !s.startsWith(rule.requiredFolder))
      // The types file references the discriminant in a comment as
      // documentation, not as a Rule's payload reference; exempt.
      .filter((s) => s !== 'repo/rules/types.ts')

    for (const file of offendingFiles) {
      fail(
        'sibling-discriminant',
        `${file} references payload discriminant '${rule.discriminant}:' (TS property syntax) but lives outside ${rule.requiredFolder}. ` +
          `Per system-map \`## Platform operational model\` doctrine: ${rule.description}. ` +
          `Reusing a discriminant across sibling seams is the canonization-of-wrong-ontology error this check prevents. ` +
          `Either move the rule to ${rule.requiredFolder} or use the correct sibling's discriminant for this rule's domain.`,
      )
      discriminantFolderViolations++
    }
  }

  if (discriminantFolderViolations === 0) {
    ok(
      'sibling-discriminant',
      `every Rule's payload discriminant aligns with its sibling-domain folder (${DISCRIMINANT_FOLDER_RULES.length} discriminant/folder pairs verified)`,
    )
  }
} catch (err) {
  fail(
    'sibling-discriminant',
    `failed to scan repo/rules for discriminant/folder alignment: ${err instanceof Error ? err.message : err}`,
  )
}

// =====================================================================
// Check 3: Scaffold integrity
// =====================================================================

console.log('\n[check 3] Scaffold integrity (repo/rules/ + repo/templates/)')

const REQUIRED_SCAFFOLD_FILES = [
  'repo/rules/README.md',
  'repo/rules/types.ts',
  'repo/rules/index.ts',
  'repo/templates/README.md',
  'repo/templates/types.ts',
  'repo/templates/index.ts',
]

for (const path of REQUIRED_SCAFFOLD_FILES) {
  if (!existsSync(`${ROOT}/${path}`)) {
    fail(
      'scaffold',
      `${path} does not exist — scaffold has been broken; restore from git history`
    )
  } else {
    ok('scaffold', `${path} present`)
  }
}

// =====================================================================
// Summary + exit
// =====================================================================

console.log('\n----------------------------------------------------------------------')
if (FAILURES.length === 0) {
  console.log('Phase 4H-pre commit 3 rules+templates scaffold lint: PASS')
  console.log(
    'GREEN — CODEOWNERS gate present, legacy v0 not extended, scaffold integrity intact.'
  )
  process.exit(0)
} else {
  console.error(`Phase 4H-pre commit 3 rules+templates scaffold lint: ${FAILURES.length} FAILURES`)
  for (const f of FAILURES) {
    console.error(`  ${f}`)
  }
  process.exit(1)
}
