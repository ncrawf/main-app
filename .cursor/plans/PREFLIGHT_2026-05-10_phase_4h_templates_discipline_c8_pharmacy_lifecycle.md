# Preflight — Phase 4H-templates-discipline c8 (`pharmacy_lifecycle/` activation: `rx_sent` + `refill_initiated`)

**Status:** APPROVED. Captured for git history alongside c8 commit.

**Phase position:** 8th typed migration in 4H-templates-discipline. **Third sibling-domain folder activation** (after `clinical_decision/` original + `fulfillment_lifecycle/` in c4). **First two-member sibling activation** in a single commit.

**Doctrinal weight:** ANY new sibling-domain activation is a doctrinal commit per `## Platform operational model` in [`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md). The substrate must continue to admit each future sibling without rewrites.

---

## 1. Architectural commitment (Option D synthesis applied to pharmacy_lifecycle/)

Per the c4 precedent + audit §6 / §8 conclusions: **the type system tells the truth; the runtime locality is transitional.** Four layers:

1. **Folder layer** — NEW: `repo/rules/pharmacy_lifecycle/` + `repo/templates/pharmacy_lifecycle/`. Activates with TWO members in one commit (`rx_sent_v1`, `refill_initiated_v1`), demonstrating the discriminant's polymorphism out of the gate.
2. **Payload layer** — `pharmacy_event_kind` discriminant. Initial values wired this commit: `'rx_sent_to_pharmacy'`, `'refill_initiated'`. Future-reserved but unwired: `'rx_filled'`, `'rx_dispensed'`, `'refill_approved_by_provider'`, `'refill_denied_by_provider'`.
3. **Audit layer** — `'rule.fired.pharmacy_lifecycle.rx_sent_v1'` + `'rule.fired.pharmacy_lifecycle.refill_initiated_v1'`. Names the domain explicitly, parallel to existing `clinical_decision`, `account_lifecycle`, `billing_subscription`, `fulfillment_lifecycle` namespaces.
4. **Runtime locality** — both dispatches live in `lib/internal/patient-case/impl.ts` `updateTreatmentItemStatus`, on the same case-shaped surface where the legacy template arms fire today. **Transitional locality** with explicit comments naming the architecturally-correct future producer (a `lib/pharmacy/...` module that owns prescription + refill state machines). The producer migration is **deferred** pending broader pharmacy-state consolidation appetite.

---

## 2. Doctrinal alignment (system map `## Platform operational model`)

| Doctrine clause | How c8 honors it |
|---|---|
| "Major operational domains are first-class siblings... prescriptions / pharmacy lifecycle" | NEW `pharmacy_lifecycle/` folder created; first concrete migration arrives, sibling activates per "they are not pre-created" rule |
| "Each sibling owns its own discriminant... `pharmacy_event_kind` for pharmacy lifecycle" | Uses exactly that discriminant name; refuses `case_kind` and `order_kind` |
| "Siblings are never modeled as sub-shapes of any single sibling (including 'case')" | Refuses to put rx_sent / refill_initiated in `clinical_decision/`, even though they ride a `treatment_items` row today |
| "A case is one operational object among many" | rx_sent and refill events are pharmacy-lifecycle events, not case states, even though legacy schema couples them via `treatment_items.status` |
| "Producer-site locality is per-sibling. Legacy cross-sibling producers are tagged transitional" | Both producer comments name the legacy locality + future correct producer at `lib/pharmacy/...` |
| "Substrate primitives are infrastructure every sibling depends on" | New rules use the same disclosure-policy gate, audit lineage, idempotency anchor, and dispatcher executor pattern as every prior sibling |

---

## 3. Why TWO members in one commit (vs c4's one-member precedent)

c4's `fulfillment_lifecycle/` activated with `order_shipped_v1` only. That was correct then because no second fulfillment-domain candidate was migration-ready. For `pharmacy_lifecycle/`, both candidates ship from the same producer surface and are migration-ready simultaneously. Shipping them together:

- Demonstrates `pharmacy_event_kind` polymorphism out of the gate (validates the discriminant pattern in production)
- Avoids a "ghost folder" interim state with one solitary file
- Reduces preflight ceremony for what is fundamentally a single doctrinal decision
- Gets to legacy-file-deletion threshold one commit faster (after c8, only `case_denied` remains in legacy `PATIENT_NOTIFY_BY_STATUS`)

The trade-off is a larger commit + larger verification surface. Mitigation: per-rule parity tests run independently; verification plan §7 enumerates each.

---

## 4. File-by-file change set

### NEW (8)

- `repo/rules/pharmacy_lifecycle/rx_sent_v1.ts`
- `repo/rules/pharmacy_lifecycle/refill_initiated_v1.ts`
- `repo/templates/pharmacy_lifecycle/rx_sent_v1.ts`
- `repo/templates/pharmacy_lifecycle/refill_initiated_v1.ts`
- `lib/templates/render/rx-sent.ts`
- `lib/templates/render/refill-initiated.ts`
- `scripts/test-rx-sent-parity.ts`
- `scripts/test-refill-initiated-parity.ts`

### MODIFIED (12)

- `lib/events/rule-trigger-event-types.ts` — add `'patient.rx_sent_to_pharmacy'` + `'patient.refill_initiated'` with full payload schemas + transitional-locality comment on `prescription_id`
- `lib/events/audit-actions.ts` — add `'rule.fired.pharmacy_lifecycle.rx_sent_v1'` + `'rule.fired.pharmacy_lifecycle.refill_initiated_v1'`
- `repo/rules/index.ts` + `repo/templates/index.ts` — register both (10 each)
- `lib/rules/runtime/dispatcher.ts` — 2 union variants + 2 payload interfaces + 2 executor functions
- `lib/internal/patient-case/impl.ts` `updateTreatmentItemStatus` — 7th + 8th dispatch blocks with transitional-locality comments
- `lib/notifications/patientMessages.ts` — remove `case 'rx_sent'` + `case 'refill_pending'` arms
- `lib/workflows/notificationRules.ts` — remove `'rx_sent'` + `'refill_pending'` from union and `PATIENT_NOTIFY_BY_STATUS`
- `app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx` — remove both
- `scripts/lint-event-types.ts` — add both new test files to `EXEMPT_PATHS`
- `scripts/lint-rules-templates-scaffold.ts` — extend check 5 with `pharmacy_event_kind → pharmacy_lifecycle/` guard
- `scripts/test-rules-templates-scaffold.ts` — count `>= 10`; anchor blocks with shape assertions

---

## 5. Behavioral parity discipline (governed behavioral equivalence)

For BOTH rules:
- **Population:** `glp1_primary` treatment_items + transition to the respective status. Same population that received legacy notifications.
- **Channels:** email + SMS, identical to legacy.
- **Wording:** legacy bodies preserved verbatim with one allowed deviation — brand prefix sourced from `brands.slug.toUpperCase()` instead of hardcoded "MAIN:" per ADR §7.5 multi-tenant rule.
- **Idempotency anchors:** keyed on the underlying status-transition `audit_event_id` (per-transition).
- **Cadence:** `transactional_critical: false` on both Templates.
- **Disclosure-policy:** tier_2 + glp1_primary `pathway_sensitivity` resolves to `'high'`. Disclosure-policy gate clamps as it does today; behavior parity preserved.

### Wording capture

**rx_sent email** (verbatim):
- Subject: `'Prescription sent to pharmacy'`
- Preview: `'Your prescription has been sent.'`
- Eyebrow: `'Medication update'`
- Heading: `'Prescription sent'`
- Intro: `'Your prescription has been sent to the pharmacy.'`
- Detail: `'You can track fulfillment progress in your dashboard.'`

**rx_sent SMS:** `${brand_short_label}: Rx sent to pharmacy. ${dashboard_url}`

**refill_initiated email** (verbatim from legacy `case 'refill_pending'`):
- Subject: `'Refill update'`
- Preview: `'There is a refill update for your care plan.'`
- Eyebrow: `'Refill update'`
- Heading: `'Refill in progress'`
- Intro: `'There is an update on your refill.'`
- Detail: `'Please review current details in your dashboard.'`

**refill_initiated SMS:** `${brand_short_label}: Refill update. ${dashboard_url}`

---

## 6. Risk + mitigations

| Risk | Mitigation |
|---|---|
| `prescription_id` bound to `treatment_items.id` today; future producer migration changes what backs it | Payload semantic stays consistent. Producer-site comment explicitly names locality. Dispatcher does not consume `prescription_id` as a `prescriptions` FK. |
| Two-member single-commit ships more risk surface than c4 single-member precedent | Per-rule parity tests are independent; verification plan §7 runs each separately |
| Future contributors might add `pharmacy_event_kind: 'order_shipped'` etc, eroding sibling boundaries | Scaffold lint check 5 (extended this commit) blocks `pharmacy_event_kind` use outside `repo/rules/pharmacy_lifecycle/` |
| `updateTreatmentItemStatus` reaches 8 dispatch blocks; approaches extraction-pressure threshold | Radar zone 7 already tracks. Captured explicitly in c8 handoff as "approaching threshold; consider helper extraction before c9". Not a c8 blocker. |
| `refill_initiated` semantically overlaps with future `'refill_approved_by_provider'` event | Discriminant `'refill_initiated'` (not `'refill_pending'`) makes producer-side semantic explicit. Future provider-approval event slots cleanly alongside. |
| Wording drift if email/SMS bodies edited without updating snapshot tests | Each parity test captures legacy bodies at suite-startup; deviations fail the test |

---

## 7. Verification plan (in order)

1. `npm run typecheck`
2. `npm run lint`
3. `npx tsx scripts/lint-rules-templates-scaffold.ts`
4. `npx tsx scripts/lint-event-types.ts`
5. `npx tsx scripts/test-rules-templates-scaffold.ts`
6. `npx tsx scripts/test-rx-sent-parity.ts`
7. `npx tsx scripts/test-refill-initiated-parity.ts`
8. Sanity-read system-map doctrine + ADR §7.5/§7.6/§7.7 + radar zones 7+27 alongside diff

---

## 8. What is explicitly NOT in scope (deferred)

- **Producer migration to `lib/pharmacy/...`.** Both stay in `updateTreatmentItemStatus` with transitional-locality comments.
- **`'rx_filled'`, `'rx_dispensed'`, `'refill_approved_by_provider'`, `'refill_denied_by_provider'`.** Reserved in commentary but NOT wired this commit.
- **Refill state-machine consolidation.** Out of scope.
- **`prescriptions` table introduction.** Out of scope.
- **`case_denied` migration.** Last legacy mapping. Bridges into 4H-send-policy phase due to PHI risk in denial reasons.

---

## 9. Sibling-domain activation counter

After c8: **5 active sibling-domain folders** populating typed rules + templates:
- `account_lifecycle/` (1 rule)
- `billing_subscription/` (1 rule)
- `clinical_decision/` (5 rules)
- `fulfillment_lifecycle/` (1 rule)
- `pharmacy_lifecycle/` (2 rules) — NEW THIS COMMIT

10 rules + 10 templates total. Convergence-via-wiring trial remains COMPLETE per ADR §7.7. The substrate accommodates a third sibling-domain expansion without architectural changes.
