# Preflight — Phase 4H-templates-discipline c4 (`shipped` migration)

**Status:** PROPOSED. Not yet implemented. Awaiting your approval before execution.

**Phase position:** 4th typed Rule + Template migration in the 4H-templates-discipline series. Previous in series: `payment_received` (4H-pre c5), `intake_submitted` (c1), `case_approved` (c2), `awaiting_clinical_review` (c3).

**Doctrinal context:** this is the first migration to land **after** the `## Platform operational model` doctrine was inserted at the top of the system map (2026-05-10). Every architectural choice below is the operationalization of that doctrine. This is also the convergence-via-wiring trial #3 of 2-3 reinforcements for the typed Rule + Template registry.

---

## 1. Architectural commitment (Option D synthesis)

Per the [`shipped_ontology_analysis_2026-05-10.md`](shipped_ontology_analysis_2026-05-10.md) §7 Option D synthesis — **the type system tells the truth about the architecture, even though the runtime call temporarily lives on a legacy surface.**

Concretely, four layers:

1. **Folder layer:** typed Rule lives in `repo/rules/fulfillment_lifecycle/`. Typed Template lives in `repo/templates/fulfillment_lifecycle/`. **NEW domain folder.** First migration to populate it. Encodes the system-map doctrine: fulfillment is its own first-class sibling under Patient, not a sub-shape of `clinical_decision`.

2. **Payload layer:** the Rule's trigger event `'patient.order_shipped'` carries an `order_kind` discriminant (NOT `case_kind`). Initial wiring covers `order_kind: 'treatment_order'` only. Future migrations expand to `'supplement_order'` and `'lab_kit_order'` when their producers come online. The discriminant tells future authors that fulfillment events have their own home.

3. **Audit layer:** audit action is `'rule.fired.fulfillment_lifecycle.order_shipped_v1'`. Names the domain explicitly, parallel to existing `'rule.fired.clinical_decision.case_approved_v1'` and `'rule.fired.account_lifecycle.intake_submitted_v1'`. The audit catalog itself encodes the sibling-domain layering.

4. **Runtime locality:** dispatch call lives in `lib/internal/patient-case/impl.ts` `updateTreatmentItemStatus`, on the same case-shaped surface where the legacy `'shipped' -> 'shipped'` template arm fires today. This is **transitional locality** with an explicit comment per audit §6 #3. The architecturally correct producer is `lib/orders/updateFulfillment.ts`; that migration is **deferred** pending broader `treatment_items`-vs-`treatment_orders` consolidation appetite.

Type system: correct. Runtime locality: legacy with explicit transitional flag. Future authors reading the registry see `fulfillment_lifecycle/order_shipped_v1` and replicate the *correct* pattern for `delivered`, `pharmacy_filled`, `subscription_renewed`, `retail_order_placed`, etc. The wrong precedent is not set.

---

## 2. Doctrinal alignment (system map `## Platform operational model`)

This migration enforces every binding clause of the doctrine:

| Doctrine clause | How this migration honors it |
|---|---|
| "Major operational domains are first-class siblings... orders / fulfillment / inventory" | New `fulfillment_lifecycle/` folder created as the first-class home for orders/fulfillment events |
| "Siblings are never modeled as sub-shapes of any single sibling (including 'case')" | Refuses to put `shipped` in `clinical_decision/`; refuses `case_kind` discriminant |
| "Each sibling owns its own discriminant: case_kind for clinical-decision, order_kind for fulfillment" | Uses `order_kind: 'treatment_order' \| 'supplement_order' \| 'lab_kit_order'` |
| "A case is one operational object among many, not the parent ontology" | `shipped` is an order event, not a case state, even though legacy schema couples them |
| "Producer-site locality is per-sibling. Legacy cross-sibling producers are tagged transitional" | Producer comment names the legacy locality + future correct producer at `lib/orders/updateFulfillment.ts` |

---

## 3. Audit §6 corrections (binding for this commit)

Per [`audits/2026-05-10_system_map_alignment_pressure_test.md`](audits/2026-05-10_system_map_alignment_pressure_test.md) §6 four corrections:

1. **NEW `fulfillment_lifecycle/` folder** — created in this commit as the operational sibling for orders/fulfillment.
2. **`order_kind` payload discriminant** — `'treatment_order' | 'supplement_order' | 'lab_kit_order'`. Initial wiring covers `'treatment_order'` only.
3. **Producer-locality comment** — at the dispatch call in `updateTreatmentItemStatus`, an explicit transitional comment names the legacy locality and points at the future correct producer.
4. **Radar entry** — already landed as zone 27 in [`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md) (post-snapshot 2026-05-10 addendum).

---

## 4. File-by-file change set

### NEW files

#### 4.1. `repo/rules/fulfillment_lifecycle/order_shipped_v1.ts`

Typed Rule. Follows the `case_approved_v1` structural template but with operational + system-authority shape (vs clinical + provider-authority):

- `rule_id: 'rule.fulfillment_lifecycle.order_shipped_v1'`
- `domain: 'fulfillment_lifecycle'`
- `trigger.event_type: 'patient.order_shipped'`
- `authority_floor: 'system'` (shipping notifications are system-emitted; no provider authority required)
- `action.kind: 'notify'`, `channels: ['email', 'sms']`
- `action.send_policy_class: 'transactional_operational'` (NOT `transactional_clinical`)
- `action.intended_privacy_exposure_level: 2` (tier_2; legacy body says "Your order has shipped" + "Tracking details are in your dashboard" — references "order" + dashboard but no protocol/dose/condition/pathway)
- `action.message_intent: 'operational'` (NOT `'clinical'` or `'billing'`)
- `priority: 'standard'`
- `blocking: false`
- `template_key: 'tmpl.fulfillment_lifecycle.order_shipped_v1'`
- `audit_event_type: 'rule.fired.fulfillment_lifecycle.order_shipped_v1'`
- `recall_severity: 'operational'` (NOT `'clinical_significant'`)
- `pathway_scope: undefined` — Rule fires regardless of pathway; producer-site filter gates to glp1_primary today
- `effective_at: '2026-05-10T00:00:00Z'`
- Header comments cite: doctrine alignment (Option D synthesis); audit §6 corrections; producer-site transitional locality; `transactional_critical: false` justification (shipping update is informational; cadence-bypass is not defensible)

#### 4.2. `repo/templates/fulfillment_lifecycle/order_shipped_v1.ts`

Typed Template. Follows the `case_approved_v1` template structure:

- `template_key: 'tmpl.fulfillment_lifecycle.order_shipped_v1'`
- `template_version: '1.0.0'`
- `tier: 'tier_2'`
- `intent: 'operational'`
- `transactional_critical: false` — shipping notifications honor cadence rules; cadence-bypass is not defensible for an informational order update.
- `channels: ['email', 'sms']`
- `slot_schema`: `brand_short_label`, `brand_display_name`, `patient_first_name`, `patient_portal_url`
- `ai_refinement_allowed: false`
- `effective_at: '2026-05-10T00:00:00Z'`

#### 4.3. `lib/templates/render/order-shipped.ts`

Render module. Mirrors `lib/templates/render/case-approved.ts` structure:

- `renderOrderShippedEmail(ctx)` — produces `{ subject, html, text }` byte-equivalent to legacy `case 'shipped'` arm in `patientMessages.ts` (subject "Your order has shipped", preview "Shipment update — your order is on the way.", eyebrow "Shipment update", heading "Your order has shipped", intro "Good news — your order is on the way.", detail "Tracking details are available in your dashboard.")
- `renderOrderShippedSms(ctx)` — produces `${brand_short_label}: Order shipped. ${short}` byte-equivalent to legacy `case 'shipped'` SMS arm
- Slot resolution sources `brand_short_label` from `brands.slug.toUpperCase()` per ADR §7.5 (NOT hardcoded "MAIN:")

**Wording-parity discipline:** governed behavioral equivalence per the c2 framing — legacy bodies preserved, brand prefix typed.

### MODIFIED files

#### 4.4. `lib/events/rule-trigger-event-types.ts`

Add `'patient.order_shipped'` to `RuleTriggerEventType`. Define `OrderShippedPayload` schema with `order_kind: 'treatment_order' | 'supplement_order' | 'lab_kit_order'` discriminant.

Comment on the `order_id` field: "logical identifier for the shipped order. Today the producer surface is `lib/internal/patient-case/impl.ts` operating on `treatment_items.id`; this is transitional locality per the doctrine's producer-site rule. Future migration to `lib/orders/updateFulfillment.ts` will switch the bound id to `treatment_orders.id` without changing the payload semantic."

#### 4.5. `lib/events/audit-actions.ts`

Add `'rule.fired.fulfillment_lifecycle.order_shipped_v1'` to the audit action enum.

#### 4.6. `lib/internal/patient-case/impl.ts` `updateTreatmentItemStatus`

Add a 3rd dispatch block (mirroring the `case_approved` and `case_under_review` blocks already present) that fires `'patient.order_shipped'`:

- Gate: `item.treatment_key === 'glp1_primary' && prevStatus !== nextStatus && nextStatus === 'shipped' && treatmentAudit.ok && treatmentAudit.audit_event_id`
- Payload: `{ patient_id, order_kind: 'treatment_order', order_id: treatmentItemId, shipping_audit_event_id: treatmentAudit.audit_event_id }`
- **Transitional locality comment** (audit §6 #3): names the legacy producer site, points at `lib/orders/updateFulfillment.ts` as the architecturally correct future producer, references the system-map doctrine + radar zone 27 + this preflight by path.

#### 4.7. `lib/rules/runtime/dispatcher.ts`

Add a new executor branch for `'rule.fulfillment_lifecycle.order_shipped_v1'` that resolves slots via the same brand-resolution path used by `case_approved_v1`, then dispatches to the order-shipped render module.

#### 4.8. `lib/notifications/patientMessages.ts`

Remove the legacy `case 'shipped'` email arm (lines 193–203) AND the legacy `case 'shipped'` SMS arm (lines 281–282). Add transitional removal-comments mirroring the c2/c3 pattern, e.g.:

```ts
// Phase 4H-templates-discipline c4 — `case 'shipped'` arm removed;
// email rendering migrated to renderOrderShippedEmail in
// lib/templates/render/order-shipped.ts. Brand prefix sourced from
// `brands.slug.toUpperCase()` (typed slot `brand_short_label`)
// instead of hardcoded "MAIN:" per ADR Section 7.5 multi-tenant rule.
// Type system encodes fulfillment_lifecycle / order_kind per
// system-map `## Platform operational model` doctrine; runtime
// dispatch is from updateTreatmentItemStatus on the legacy
// case-shaped producer surface as transitional locality per
// PREFLIGHT 4H-c4 §1 + radar zone 27.
```

#### 4.9. `lib/workflows/notificationRules.ts`

- Remove `'shipped'` from `NotificationTemplateKey` union (line 29)
- Remove `shipped: 'shipped'` from `PATIENT_NOTIFY_BY_STATUS` (line 65)
- Comment-tag the removal block per c2/c3 pattern

The `notificationRules.ts` file should now have only 4 remaining legacy template keys: `case_denied`, `followup_needed`, `rx_sent`, `active_care`, `followup_due`, `refill_pending`. (Down from 7 — `case_approved` removed in c2, `awaiting_clinical_review` removed in c3, `shipped` removed in c4.)

#### 4.10. `app/internal/(protected)/patients/[patientId]/SendTemplateTestForm.tsx`

Remove `'shipped'` from `TEMPLATE_OPTIONS` (the test form drop-down).

#### 4.11. `scripts/lint-rules-templates-scaffold.ts`

- Update count assertion (now 5 typed rules + 5 typed templates instead of 4)
- Add anchor for `'rule.fulfillment_lifecycle.order_shipped_v1'` and `'tmpl.fulfillment_lifecycle.order_shipped_v1'`
- Add lint check: any Rule whose trigger payload references `case_kind` MUST live in `repo/rules/clinical_decision/` (anti-leak guard for the doctrine)
- Add lint check: any Rule whose trigger payload references `order_kind` MUST live in `repo/rules/fulfillment_lifecycle/` (parallel anti-leak guard)

#### 4.12. `scripts/lint-event-types.ts`

Update `EXEMPT_PATHS` to include the new producer block in `lib/internal/patient-case/impl.ts` (the new `'patient.order_shipped'` `RuleTrigger.event_type` literal will be flagged otherwise).

### NEW test file

#### 4.13. `scripts/test-shipped-parity.ts`

Live-DB smoke test mirroring `test-case-approved-parity.ts` and `test-awaiting-clinical-review-parity.ts`:

- Insert a synthetic patient + brand + treatment_item (glp1_primary)
- Move treatment_item.status: `pending -> approved -> rx_sent -> shipped`
- Assert: `outbound_jobs` row created with `template_key: 'tmpl.fulfillment_lifecycle.order_shipped_v1'`, `priority_hint: 'standard'`, `queued_by_kind: 'rule_engine'`, brand-prefix slot resolved
- Assert: `audit_events` row created with `action: 'rule.fired.fulfillment_lifecycle.order_shipped_v1'` and metadata containing the `treatment_item_id` lineage
- Assert: byte-level equivalence (governed behavioral equivalence) between rendered email/SMS and the legacy bodies pre-migration (captured via a snapshot at the start of the test)

#### 4.14. `scripts/test-rules-templates-scaffold.ts`

Update with new count assertions and anchors for `order_shipped_v1` rule + template.

---

## 5. Behavioral parity discipline

Governed behavioral equivalence per the c2 reframing — NOT blind byte-level preservation:

- **Population:** `glp1_primary` treatment_items + transition to `'shipped'` on `treatment_items.status`. Same population that received the legacy notification.
- **Channels:** email + SMS, same as legacy (legacy `PATIENT_NOTIFY_BY_STATUS` route fires both).
- **Wording:** legacy email and SMS bodies preserved verbatim with one allowed deviation: brand prefix sourced from `brands.slug.toUpperCase()` instead of hardcoded "MAIN:" per ADR §7.5 multi-tenant rule.
- **Idempotency anchor:** keyed on the underlying status-transition `audit_event_id` (so a treatment_item bouncing approved -> rx_sent -> shipped -> rx_sent -> shipped emits a fresh notification on each genuine re-shipment, identical to legacy).
- **Cadence behavior:** `transactional_critical: false` on the Template — shipping notifications honor the cadence ledger and disclosure-policy gate, identical to legacy (the legacy never had cadence-bypass either).
- **Disclosure-policy:** tier_2 + glp1_primary `pathway_sensitivity` resolves to `'high'`. The disclosure-policy gate clamps as it currently does for any tier_2 + high-sensitivity message; behavior-parity preserved because legacy went through the same gate.

---

## 6. Risk + mitigations

| Risk | Mitigation |
|---|---|
| `order_id` in the payload is bound to `treatment_items.id` today, but logically represents an order. A future producer migration changes what backs `order_id`. | The payload semantic stays consistent ("the shipped order's identifier"). The producer-site comment explicitly names the locality. The dispatcher does not consume `order_id` as a treatment_orders FK. |
| Future contributors might add `order_kind: 'pharmacy_event'` or similar to the `OrderShippedPayload`, eroding the discriminant's meaning. | The lint check at scaffold (`order_kind` discriminant requires `fulfillment_lifecycle/` folder) blocks this. Pharmacy events are a separate sibling and should get their own discriminant + folder. |
| Legacy locality persists and never migrates — radar zone 27 becomes background noise. | The transitional comment is explicit + dated. The radar zone is reviewed before the next migration that touches the orders subsystem. The audit §6 #3 comment is a pull-request-review-time anchor. |
| Wording drift if email/SMS bodies are edited in `order-shipped.ts` without updating the snapshot test. | Parity test captures legacy bodies at test-suite-startup; deviations fail the test. |

---

## 7. Verification plan

In order:

1. `npm run typecheck` — TS clean
2. `npm run lint` — eslint clean
3. `npx tsx scripts/lint-rules-templates-scaffold.ts` — registry lint clean (count + anchors + new discriminant-folder guard)
4. `npx tsx scripts/lint-event-types.ts` — event type lint clean (with new EXEMPT_PATHS)
5. `npx tsx scripts/test-rules-templates-scaffold.ts` — scaffold tests pass (with new anchors)
6. `npx tsx scripts/test-shipped-parity.ts` — live-DB parity test passes against `data_environment: 'synthetic'`
7. Sanity-read the doctrine + the audit §8 + the radar zone 27 alongside the diff to confirm the migration honors all three

If any verification step fails, fix in this commit before moving on. Do not split into a follow-up commit.

---

## 8. What is explicitly NOT in scope (deferred)

- **Producer migration** to `lib/orders/updateFulfillment.ts`. Defers until `treatment_items`-vs-`treatment_orders` consolidation appetite exists.
- **`supplement_order` and `lab_kit_order` producers.** Their `order_kind` values are reserved in the discriminant but NOT wired this commit. Future migrations populate them.
- **Cross-sibling producer cleanup.** Existing `case_approved` and `case_under_review` dispatch blocks in `updateTreatmentItemStatus` remain unchanged. They are clinical_decision events on a clinical-decision-shaped surface — that's correct per the doctrine.
- **Pharmacy lifecycle, scheduling, retail, marketing siblings.** Not migrated; their first migrations are future work.
- **`treatment_orders` schema consolidation** (dropping fulfillment status values from `treatment_items.status`). Bigger migration; deferred.

---

## 9. Convergence-via-wiring trial counter

After this commit: trial #3 of 2-3 reinforcements **complete**. The pattern (typed Rule + Template + render module + producer wiring + lint anchors + parity test + DELETE-AFTER-PARITY discipline) is now reinforced across:

- `payment_received` (4H-pre c5) — billing_subscription, system-authority
- `intake_submitted` (c1) — account_lifecycle, system-authority
- `case_approved` (c2) — clinical_decision, provider-authority
- `awaiting_clinical_review` (c3) — clinical_decision, system-authority
- `order_shipped` (c4) — **fulfillment_lifecycle**, system-authority *(this commit — first sibling-domain expansion)*

Five typed rules + five typed templates across **four sibling domains** (billing_subscription, account_lifecycle, clinical_decision, fulfillment_lifecycle). The convergence-via-wiring trial is concluded; future migrations follow the established pattern without further architectural reflection at the substrate layer.

---

## 10. Approval gate

Reply with one of:

- **"approve and execute"** — write all 14 files (4 NEW + 9 MODIFIED + 1 NEW test) + run verification plan + commit + push to origin/main + write the c4 checkpoint handoff.
- **"approve, no commit yet"** — write all 14 files + run verification, but stop before commit so I can inspect the diff.
- **"edit first: <changes>"** — paste any preflight tweaks before execution begins.
- **"discuss first"** — pause for further discussion of any item above.

After approval, the commit message body will:
- Cite the doctrine + audit §8 + radar zone 27 + this preflight by path
- Capture the wording diff log per ADR §7.5
- Note the producer-site transitional locality
- Mark the convergence-via-wiring trial #3 as complete
- Include the verification output snippet
