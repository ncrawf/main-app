# HANDOFF — Phase 4H-templates-discipline c4 (`order_shipped` migration) checkpoint

**Date:** 2026-05-10
**Status:** SHIPPED. All verification green. Pushed to origin/main.
**Position in series:** 4th typed Rule + Template migration in 4H-templates-discipline. Previous: `payment_received` (4H-pre c5), `intake_submitted` (c1), `case_approved` (c2), `awaiting_clinical_review` (c3). FIRST sibling-domain expansion since the registry was scaffolded.

---

## What this commit shipped

**Architectural commitment:** Option D synthesis from [`shipped_ontology_analysis_2026-05-10.md`](shipped_ontology_analysis_2026-05-10.md) §7. The type system encodes the architecturally-correct sibling-domain home (`fulfillment_lifecycle/`, `order_kind` discriminant, `rule.fired.fulfillment_lifecycle.*` audit namespace). The runtime call lives transitionally on the legacy case-shaped surface (`lib/internal/patient-case/impl.ts` `updateTreatmentItemStatus`) with explicit producer-locality comment. Architecturally-correct producer is `lib/orders/updateFulfillment.ts`; producer migration is deferred pending broader `treatment_items`-vs-`treatment_orders` consolidation appetite.

**Doctrinal context:** First migration to land AFTER the system-map `## Platform operational model` doctrine was inserted (2026-05-10). Every architectural choice in this commit operationalizes that doctrine.

---

## Files changed (16 total)

### NEW (4)

- [`repo/rules/fulfillment_lifecycle/order_shipped_v1.ts`](../../repo/rules/fulfillment_lifecycle/order_shipped_v1.ts) — typed Rule. `domain: 'fulfillment_lifecycle'`, `authority_floor: 'system'`, `recall_severity: 'operational'`, `tier_2`, `transactional_operational` send-policy class. FIRST in `fulfillment_lifecycle/` folder.
- [`repo/templates/fulfillment_lifecycle/order_shipped_v1.ts`](../../repo/templates/fulfillment_lifecycle/order_shipped_v1.ts) — typed Template. `domain: 'fulfillment_lifecycle'`, `privacy_exposure_level: 2`, `message_intent: 'operational'`, `transactional_critical: false`. Pathway-agnostic at Template layer.
- [`lib/templates/render/order-shipped.ts`](../../lib/templates/render/order-shipped.ts) — render module. Mirrors `case-approved.ts` / `awaiting-clinical-review.ts` structure exactly with shipped-specific literals.
- [`scripts/test-shipped-parity.ts`](../../scripts/test-shipped-parity.ts) — live-DB parity smoke test. 5 scenarios; 54 assertions.

### MODIFIED (12)

- [`lib/events/rule-trigger-event-types.ts`](../../lib/events/rule-trigger-event-types.ts) — added `'patient.order_shipped'` to `RULE_TRIGGER_EVENT_TYPES`.
- [`lib/events/audit-actions.ts`](../../lib/events/audit-actions.ts) — added `'rule.fired.fulfillment_lifecycle.order_shipped_v1'`. FIRST in the `rule.fired.fulfillment_lifecycle.*` namespace.
- [`repo/rules/index.ts`](../../repo/rules/index.ts) — registered `orderShippedV1` (5th rule).
- [`repo/templates/index.ts`](../../repo/templates/index.ts) — registered `orderShippedTemplateV1` (5th template).
- [`lib/rules/runtime/dispatcher.ts`](../../lib/rules/runtime/dispatcher.ts) — added `'patient.order_shipped'` to `RuleTriggerEvent` union, `PatientOrderShippedPayload` interface (with `order_kind` discriminant + producer-locality + reserved-values comments), `executeOrderShippedRule` executor branch. NO dispatcher generalization (pre-execution constraint #1).
- [`lib/internal/patient-case/impl.ts`](../../lib/internal/patient-case/impl.ts) `updateTreatmentItemStatus` — added 3rd dispatch block firing `'patient.order_shipped'` on transition to `'shipped'`. Includes ~25-line transitional locality comment naming the legacy locality, the future correct producer at `lib/orders/updateFulfillment.ts`, the doctrine, audit §6 #3, and radar zone 27.
- [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts) — removed `case 'shipped'` email + SMS arms; added c4 transitional removal comments.
- [`lib/workflows/notificationRules.ts`](../../lib/workflows/notificationRules.ts) — removed `'shipped'` from `NotificationTemplateKey` union; removed `shipped: 'shipped'` from `PATIENT_NOTIFY_BY_STATUS`; added c4 removal comment.
- [`app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx`](../../app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx) — removed `'shipped'` from `TEMPLATE_OPTIONS`.
- [`scripts/lint-rules-templates-scaffold.ts`](../../scripts/lint-rules-templates-scaffold.ts) — added new **check 5: sibling-discriminant / sibling-folder alignment** enforcing the doctrine's payload-discriminant-per-sibling rule (`case_kind` requires `repo/rules/clinical_decision/`; `order_kind` requires `repo/rules/fulfillment_lifecycle/`).
- [`scripts/lint-event-types.ts`](../../scripts/lint-event-types.ts) — added `scripts/test-shipped-parity.ts` to `EXEMPT_PATHS`.
- [`scripts/test-rules-templates-scaffold.ts`](../../scripts/test-rules-templates-scaffold.ts) — count assertions updated to `>= 5`; added `order_shipped_v1` rule + template anchor assertions (domain, authority, severity, message_intent, tier, audit-namespace, transactional_critical).

---

## Verification (all green)

| Check | Status | Notes |
|---|---|---|
| `npm run typecheck` | GREEN | `tsc --noEmit` clean |
| `npm run lint` | GREEN | eslint clean |
| `npx tsx scripts/lint-rules-templates-scaffold.ts` | GREEN | 5 checks pass; 5 rules + 5 templates scanned; sibling-discriminant guard verified |
| `npx tsx scripts/lint-event-types.ts` | GREEN | 0 unknown literals; 67 audit actions registered (was 66); 4 known-and-typed |
| `npx tsx scripts/test-rules-templates-scaffold.ts` | GREEN | 61 / 61 passed |
| `npx tsx scripts/test-shipped-parity.ts` | GREEN | 54 / 54 passed across 5 live-DB scenarios |

Live-DB parity test verified against Supabase synthetic + production patients. Email subject + SMS body byte-identical to legacy "MAIN: Order shipped." Idempotency on `shipping_audit_event_id` replay confirmed (no duplicate rows). Synthetic patient rows correctly suppressed by the c1 data_environment gate. Legacy `resolvePatientNotifications({toWorkflowStatus: 'shipped'})` returns `[]` (legacy path deleted).

---

## Doctrinal alignment (system map `## Platform operational model`)

Every binding clause of the doctrine is honored by this commit:

| Doctrine clause | This commit |
|---|---|
| Major operational domains include orders / fulfillment / inventory | NEW `repo/rules/fulfillment_lifecycle/` folder created |
| Siblings are never modeled as sub-shapes of any single sibling (including 'case') | `shipped` lives in `fulfillment_lifecycle/`, NOT `clinical_decision/` |
| Each sibling owns its own discriminant (`case_kind` for clinical-decision, `order_kind` for fulfillment) | Payload uses `order_kind: 'treatment_order' \| 'supplement_order' \| 'lab_kit_order'`. `case_kind` not present anywhere in fulfillment payload. |
| A case is one operational object among many, not the parent ontology | `shipped` is an order event, not a case state, even though legacy schema couples them on `treatment_items.status` |
| Producer-site locality is per-sibling. Legacy cross-sibling producers are tagged transitional | Producer-site comment names the legacy locality + future correct producer at `lib/orders/updateFulfillment.ts` + the doctrine + audit §6 #3 + radar zone 27 |
| Substrate-vs-operational distinction governs every architectural choice | Render module lives in `lib/templates/render/` (substrate utility, no per-sibling folder); the rule + template + audit namespace get sibling-domain folders |

---

## Audit §6 corrections (all four landed)

1. **NEW `fulfillment_lifecycle/` folder** — created in this commit; first migration to populate it. ✓
2. **`order_kind` payload discriminant** — `'treatment_order' | 'supplement_order' | 'lab_kit_order'`. Initial wiring covers `'treatment_order'` only; the other two are reserved in the discriminant for future migrations. ✓
3. **Producer-locality comment** — explicit transitional comment at the dispatch site in `updateTreatmentItemStatus` naming the legacy locality, the architecturally-correct future producer (`lib/orders/updateFulfillment.ts`), and pointing at the doctrine + audit + radar. ✓
4. **Radar zone 27** — landed earlier (2026-05-10 post-snapshot addendum) as the parent invariant this commit's discipline protects. ✓

---

## What's deferred (explicit non-scope)

- **Producer migration** to `lib/orders/updateFulfillment.ts`. Deferred pending broader `treatment_items`-vs-`treatment_orders` consolidation appetite.
- **`supplement_order` and `lab_kit_order` producers.** Their `order_kind` values are reserved in the discriminant but not active. Future migrations populate them.
- **Cross-sibling producer cleanup.** Existing `case_approved` and `case_under_review` dispatch blocks in `updateTreatmentItemStatus` remain unchanged — they are clinical_decision events on a clinical-decision-shaped surface, which is correct per the doctrine.
- **Pharmacy lifecycle, scheduling, retail, marketing siblings.** Their first migrations are future work; this commit establishes the convention they will follow.

---

## Convergence-via-wiring trial counter — COMPLETE

After this commit: **trial #3 of 2-3 reinforcements complete.** The pattern (typed Rule + Template + render module + producer wiring + lint anchors + parity test + DELETE-AFTER-PARITY) is now reinforced across:

- `payment_received` (4H-pre c5) — billing_subscription, system-authority
- `intake_submitted` (c1) — account_lifecycle, system-authority
- `case_approved` (c2) — clinical_decision, provider-authority
- `awaiting_clinical_review` (c3) — clinical_decision, system-authority
- `order_shipped` (c4) — **fulfillment_lifecycle**, system-authority *(this commit — first sibling-domain expansion)*

Five typed rules + five typed templates across **four sibling domains** (`billing_subscription`, `account_lifecycle`, `clinical_decision`, `fulfillment_lifecycle`). The convergence-via-wiring trial is **concluded**. Future migrations follow the established pattern without further architectural reflection at the substrate layer.

---

## Anchor strings (so future contributors can find this commit)

- `rule.fulfillment_lifecycle.order_shipped_v1`
- `tmpl.fulfillment_lifecycle.order_shipped_v1`
- `'patient.order_shipped'` (RuleTrigger event_type)
- `'rule.fired.fulfillment_lifecycle.order_shipped_v1'` (audit action)
- `order_kind: 'treatment_order' | 'supplement_order' | 'lab_kit_order'` (sibling-domain discriminant)
- v1 pressure-test radar zone 27 (Sibling-discriminant leak / case-as-parent-ontology drift)
- System-map `## Platform operational model` section (binding doctrine, lines 7–25)

---

## What landed alongside (in-session)

This commit is the implementation arm of the 2026-05-10 system-map alignment work. The same session also landed:

- System-map `## Platform operational model` doctrine inserted at top of map (lines 7–25)
- Forward-looking doc reframed as "implementation companion" (`docs/architecture/operational_objects_under_patient.md`)
- Audit §8 reframed as "doctrine reference" (`.cursor/plans/audits/2026-05-10_system_map_alignment_pressure_test.md`)
- Radar zone 27 added (`docs/architecture/v1_pressure_test_radar.md`)

The doctrine-and-companion artifacts may be in the same commit as the c4 implementation or split into a doctrine-first commit; check git log for actual structure.
