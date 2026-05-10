# System map alignment pressure test — 2026-05-10

**Triggered by the shipped ontology analysis** at [`shipped_ontology_analysis_2026-05-10.md`](../shipped_ontology_analysis_2026-05-10.md). The shipped migration surfaced the first concrete case-centric ontology seam, which made the broader alignment prompt operationally relevant rather than theoretical.

**Scope:** focused, not comprehensive. Uses shipped as the worked example. Audits existing 4H artifacts for similar canonization risks. Sample-checks future surfaces. Concludes with a continue / lightly-adjust / materially-redirect verdict.

**What this is NOT:**
- Not a system map rewrite.
- Not an ADR amendment.
- Not a new architecture proposal.
- Not a comprehensive 13-surface × 13-future-surface review (that LONG version would bury the actionable signal).
- Not a recommendation to slow down 4H work.

**What this IS:**
- A pre-commitment alignment check before shipped's path locks in.
- A sample audit of which existing primitives are durable vs which are starting to canonize.
- A short list of lightly-adjustable conventions worth establishing before the next 4-6 migrations.

---

## 1. Are we accidentally canonizing intake-era ontology?

Audited the existing typed-Rule artifacts (4 Rules, 4 Templates, 4 render modules, 4 hardcoded executor branches) plus the disclosure-policy gate, pathway-sensitivity registry, audit-action vocabulary, and event-trigger registry.

### What's bounded correctly today

| Artifact | Bounded by | Canonization risk |
|---|---|---|
| `repo/rules/billing/payment_received_v1.ts` | `billing_subscription` domain; no `case_kind` | None |
| `repo/rules/account_lifecycle/intake_submitted_v1.ts` | `account_lifecycle` domain; no `case_kind` | None |
| `repo/rules/clinical_decision/case_approved_v1.ts` | `clinical_decision` domain; uses `case_kind` (genuinely about a case decision) | Low — folder name is honest |
| `repo/rules/clinical_decision/awaiting_clinical_review_v1.ts` | `clinical_decision` domain; uses `case_kind` (genuinely a case status update) | Low — folder name is honest |

The first two migrations (billing + account_lifecycle) DON'T use `case_kind` — they're properly bounded by their own domain shapes. The two clinical_decision migrations DO use `case_kind`, which is appropriate because both genuinely operate on case-shaped objects (`treatment_item` or `care_program` row IDs).

So at the type-system layer, the existing artifacts are clean. The case-centric pattern is bounded to the genuinely-case-shaped domain.

### Where the canonization actually shows up

The risk only emerges when a NEW migration reaches for `case_kind` or `clinical_decision` for an event that ISN'T case-shaped. The shipped migration is the first concrete instance where this is actionable. If shipped lands in `clinical_decision/` with `case_kind` payload, the canonization begins. If shipped lands in a new `fulfillment_lifecycle/` with `order_kind` payload, the canonization is averted.

So: **no canonization has happened yet; the shipped decision is the first one where it could.** That's a healthy sign — the system surfaced ontology pressure organically before we made the wrong choice.

### What about other potential canonization vectors?

Audited:

- **`pathway_scope` + `PathwayCode` enum:** typed (`'glp1'` only today). New codes go through the registry. Bounded.
- **`pathway_sensitivity` enum:** 4 values (`low | moderate | high | extreme`). Section 1Q.17 binding. Bounded.
- **`message_intent` enum:** 10 values. Section 1Q.5 binding. Bounded.
- **`privacy_exposure_level` enum:** 6 values (0-5). Section 1Q.17 binding. Bounded.
- **`recall_severity` enum:** 4 values. Section 1Q.10 binding. Bounded.
- **`audit_event_type` namespace:** `rule.fired.{domain}.{concept}_v{N}` pattern. Each domain prefix bounds the entry. No accidental cross-domain reuse.
- **`MessageIntent` ↔ rule action:** structurally enforced by the disclosure-policy gate's action-template alignment check. Mismatch produces a fail-safe block, not silent drift.

All bounded. No type-system-level canonization detected outside the shipped seam.

---

## 2. Which current primitives appear durable across future surfaces?

| Primitive | Located in | Durability across future surfaces |
|---|---|---|
| Disclosure-policy gate (evaluator + runtime) | `lib/disclosure-policy/` | **High.** Reads only `intended_privacy_exposure_level`, `message_intent`, `pathway_sensitivity`, `channel`, consent state. Doesn't care which subsystem produced the row. Will work for inbox, tasks, exports, AI-summary surfaces, provider-facing disclosure with no substrate change |
| Typed audit-action vocabulary | `lib/events/audit-actions.ts` | **High.** Domain-prefixed namespace pattern scales to any new domain. CI lint blocks inline literals at write sites |
| Pathway sensitivity registry | `lib/pathways/sensitivity-registry.ts` | **High.** Pure read-only constant lookup. Adding new pathways is a one-line addition. Future EMR/clinical surfaces inherit |
| Env gate (data_environment dispatch suppression) | `lib/outbound/dataEnvironmentGate.ts` + SECURITY DEFINER | **High.** Pre-dispatch atomic suppression. Works for any outbound row regardless of producer subsystem |
| Side-effect-bounded rule execution (ADR §7.6) | `lib/rules/runtime/dispatcher.ts` import allowlist | **High.** The constraint that rules only produce governed actions through approved orchestrator boundaries doesn't depend on what the actions are. Future kinds (route, escalate) extend by ADR amendment, not by relaxing the invariant |
| Atomic SECURITY DEFINER orchestrators | `enqueue_outbound_job`, `mark_outbound_job_suppressed_*` | **High.** Pattern generalizes — atomic state transition + audit emission |
| Cross-org safety + idempotency at orchestrator boundary | RPC contracts | **High.** Per-row idempotency_key + cross-org rejection are substrate invariants |
| Typed slot binding for templates (no free-form interpolation) | `repo/templates/types.ts` Section 1Q.5 | **High.** Generalizes to any future template; CI lint enforces |
| Brand sourcing from typed multi-tenant primitives | ADR §7.5 | **High.** Multi-tenant ready by design |
| Deterministic evaluator pattern (pure functions, runtime wrappers) | Disclosure-policy + pathway-sensitivity + (future) safety-window | **High.** Pure-function-with-async-wrapper pattern is reusable doctrine |

**Bottom line:** the substrate is durable. None of these primitives encode case-centric assumptions. They encode privacy semantics, dispatch atomicity, audit lineage, side-effect boundedness, and tenancy — which are right at the universal substrate layer.

---

## 3. Which current implementation details risk becoming hidden coupling?

| Detail | Risk surface | Mitigation status |
|---|---|---|
| `case_kind` payload discriminant | Used by 2 rules today (case_approved + awaiting_clinical_review). Both genuinely case-shaped. Risk: a new migration reaches for it for a non-case event (shipped is the first test) | **Mitigation needed:** §6 lightly-adjust list includes "reserve case_kind for clinical-decision-shaped events; document the convention" |
| `clinical_decision` domain folder | Holds 2 rules today, both genuinely clinical decisions. Risk: shipped or future delivered/rx_filled/etc. lands here and the folder name becomes a lie | **Mitigation needed:** §6 lightly-adjust list includes "establish fulfillment_lifecycle folder convention before shipped" |
| Hardcoded executor branches in `lib/rules/runtime/dispatcher.ts` | 4 branches today. Each one assumes a specific event_type. ADR §7.6 governs when generalization becomes earnable | **Known deferred decision** — branch trajectory 4 → 7 → 12 → 20 noted in c3 checkpoint §6 |
| `lib/internal/patient-case/impl.ts` as the canonical producer file | All 4 typed Rules wire from this file. Becoming a god-object for "everything that triggers a typed Rule" | **Mitigation needed:** §6 lightly-adjust list includes "future producers in non-case subsystems should live in their own files" — shipped's wiring decision is the first test |
| Idempotency key schema `rule.{name}:{audit_event_id}:{channel}` | Every rule today keys idempotency on an audit_event_id. Future rules with non-audit-event triggers (webhook arrival, scheduled cron, time-based) need a different anchor | **Watch zone** — when the first non-audit-anchored rule lands, the schema generalizes. Not blocking |
| `Action.kind: 'notify'` is the only allowed kind | All 4 rules ship `notify`. Future kinds (route, escalate, clarify, gate) require ADR §7.6 amendment | **Known deferred decision** — preserves discipline. The first non-notify rule is the trigger |
| Render module per template_key (one-to-one) | 4 modules today; scales linearly with number of typed Templates | Not a coupling risk; might become tedious at 50+ rules but that's its own problem |
| Producer-site filter convention (e.g., `treatment_key === 'glp1_primary'`) | Both clinical_decision producers gate on program/treatment type | Working as intended; preserves legacy behavior. Watch zone for when more pathways activate |
| Pathway scoping → unscoped rule defaults | All 4 rules have `pathway_scope: undefined`. Resolves to null sensitivity at enqueue. Tier_1/2 unaffected | Working correctly. Tier_3+ rules will need explicit pathway_scope (CI lint enforces) |

**Net:** four real coupling risks, three of which are about ontological vocabulary (`case_kind`, `clinical_decision`, producer-file sprawl). All three are addressable by lightly-adjustable conventions. None requires rewriting existing artifacts.

---

## 4. Which future surfaces are already naturally supported?

Sample-checked five future surfaces from the system map. For each: would adding it require rewriting existing substrate, or would it plug in via the established patterns?

### Scheduling

A patient books an appointment → confirmation notification fires.

- **Producer:** new producer in `lib/scheduling/` (or a webhook handler). Doesn't need to live in `patient-case/impl.ts`.
- **Domain folder:** `repo/rules/scheduling_lifecycle/appointment_confirmed_v1.ts` (new folder).
- **Payload:** `AppointmentConfirmedPayload` with `appointment_id` + `appointment_kind` discriminant.
- **Disclosure-policy gate:** handles tier + intent + pathway clamps with no change.
- **Audit + idempotency:** anchored on the `appointments.scheduled_at` audit event.

**Verdict: naturally supported.** Just needs the new domain folder convention (which we'd establish for fulfillment anyway).

### eRx fulfillment (pharmacy webhook)

Pharmacy webhook arrives saying "Rx filled, ready for pickup" → patient notification.

- **Producer:** new webhook handler in `lib/pharmacy/` (or wherever).
- **Domain folder:** `repo/rules/fulfillment_lifecycle/rx_filled_v1.ts`.
- **Payload:** `RxFilledPayload` with `pharmacy_kind` or `rx_event_kind` discriminant.
- **Substrate:** all existing — disclosure-policy, audit, pathway, env gate.

**Verdict: naturally supported** if the `fulfillment_lifecycle` folder convention exists.

### Lab kit fulfillment

Lab kit shipped to patient → shipping notification. Sample collected → another notification. Results ready → another notification.

- **Producer:** existing `lib/orders/updateFulfillment.ts` `updateLabKitOrder` (already exists; would need typed-Rule wiring).
- **Domain folder:** `repo/rules/fulfillment_lifecycle/lab_kit_shipped_v1.ts` etc.
- **Payload:** `OrderShippedPayload` with `order_kind: 'lab_kit_order'` discriminant — same pattern as treatment_order shipped.

**Verdict: naturally supported** if the fulfillment_lifecycle folder + producer-site discipline (§3 mitigation) are established.

### Retail orders

Patient buys non-clinical product (vitamin sample pack, branded merch) → confirmation.

- **Producer:** new producer in `lib/commerce/` or `lib/retail/`.
- **Domain folder:** `repo/rules/commerce_lifecycle/retail_order_placed_v1.ts` (or shared `fulfillment_lifecycle/` if we treat retail as fulfillment).
- **Payload:** `RetailOrderPayload` with no clinical context.
- **Substrate:** clean — disclosure-policy gate accepts non-clinical message_intent (`marketing`, `account`, etc.).

**Verdict: naturally supported** at the substrate layer. The domain folder name (commerce vs fulfillment) is a naming decision worth making explicitly.

### Provider inbox / patient inbox

Provider replies to patient message → patient sees it in their in-app inbox. Or: provider has a queue of patient messages to triage.

- **Producer:** new producer wherever provider replies are submitted.
- **Domain folder:** `repo/rules/messaging_lifecycle/` or `repo/rules/communication_lifecycle/`.
- **Payload:** `MessageReceivedPayload` etc.
- **Substrate gap 1:** the in_app outbound channel adapter doesn't exist yet (`send_in_app` JOB_KIND exists in the enum but the dispatcher has no handler).
- **Substrate gap 2:** the rule action.kind extension — `'route'` for inbox routing or `'notify'` for in_app delivery — needs ADR §7.6 amendment.
- **Substrate gap 3:** an actual patient inbox UI surface doesn't exist.

**Verdict: partially supported.** Substrate is fine for typed Rule + Template + audit + disclosure-policy. But the in_app delivery path doesn't have an adapter; that's real work, not just a folder convention.

### Aggregate

Of 5 sampled future surfaces, **4 are naturally supported at the substrate level** (scheduling, eRx fulfillment, lab kit fulfillment, retail orders). The 5th (provider/patient inbox) requires real new substrate (in_app adapter + action.kind extension).

The 4 naturally-supported ones share one common requirement: a fulfillment/commerce/scheduling domain-folder convention that doesn't yet exist. Establishing that convention via shipped is the immediate downstream action item.

---

## 5. Which future surfaces feel under-modeled?

Areas where adding a new surface would force an awkward fit OR require modeling work beyond the typed-Rule pattern:

### Operational state-surfacing beyond notifications

Inbox, tasks, dashboard, escalation, timeline, provider queue — all need "operational state" semantics that go beyond firing one outbound notification per event. The Rule type DOES have `route` and `escalate` and `clarify` action kinds (Section 1Q.4); the dispatcher just doesn't accept them yet (ADR §7.6 deferred). So: **architecture aware, runtime not yet wired.** Not deeply under-modeled, just not yet activated.

### Multi-provider authority

Today `authority_floor: 'provider'` is a single value. Future surfaces will need richer authority semantics:
- "primary provider" vs "supervising provider" vs "covering provider"
- "consulting specialist authority"
- "supervising MD vs prescribing NP"
- "across-org provider authority for shared-care patients"

Currently under-modeled. The `RuleAction.override_capability_required` field hints at this but doesn't model multi-provider relationships.

### Longitudinal care semantics

What does "the patient's care over 6 months" look like as a queryable structure? Today the system has:
- Audit events (point-in-time records)
- Patient clinical assertions (structured claims with effective_at + recorded_at)
- Care programs (longitudinal but coarse-grained)

But there's no first-class "longitudinal program timeline" abstraction. The Rule layer can fire on individual transitions; it can't easily express rules like "the patient has been in active care for 6+ months without a check-in" — that requires querying longitudinal state. Section 1K talks about care_programs but the rules layer doesn't deeply engage.

**Under-modeled, but bounded:** the pieces exist; they're not yet composed into a first-class longitudinal abstraction.

### Provider workflow / tasking

The Rule type has `RuleAction.kind: 'route'` with a `decision_support_payload` shape (Section 1Q.4) — that's the seed of provider tasking. But:
- No `provider_tasks` table.
- No provider work queue UI.
- No escalation runtime.
- No SLA tracking.
- No task-completion-fires-rule pattern.

**Under-modeled but seeded.** When the first `route` action ships, this becomes the operational substrate question.

### Prescription lifecycle

Pharmacy-side state (prescribed → submitted → filled → ready → picked up → refilled → out-of-stock → cancelled) is its own lifecycle. Today rx state is co-mingled on `treatment_items.status`. The fulfillment-shaped concept exists for `treatment_orders` but pharmacy-side state is its own thing distinct from "the order shipped."

**Under-modeled.** Will need its own pharmacy_lifecycle domain when it lands.

### EMR object hierarchy

No charting surface. No diagnosis primitive. No problem list. No medication reconciliation. No SOAP note structure.

**Under-modeled, but not blocking 4H.** EMR is a Phase 5+ concern; the system map mentions it but doesn't yet operationally engage. The Rule + Template substrate WILL serve EMR-trigger events when they land (chart updated → assertion fired → rule evaluates).

### Aggregate

Five surfaces flagged as under-modeled. None blocks current 4H work. All can be addressed when their first concrete migration arrives. The risk would be canonizing an intake-era assumption that prevents one of them from landing cleanly later — and the shipped seam is the first concrete test of that risk (which is why this audit exists).

---

## 6. Continue / lightly adjust / materially redirect verdict

**Verdict: continue unchanged on substrate; lightly adjust domain conventions before more migrations canonize.**

### Continue unchanged (high confidence)

- The 4 existing typed Rules + Templates + render modules + dispatcher branches.
- The disclosure-policy gate runtime + pathway sensitivity registry + env gate.
- The Phase 4H ADR + side-effect-bounded rule execution invariant + import allowlist.
- The convergence-via-wiring trial (now at #2 of 2-3 reinforcements).
- The producer-site discipline guardrail (>2 sites = pause).
- The audit-action vocabulary + typed-helper enforcement at write sites.
- The cutover discipline (DELETE-AFTER-PARITY, governed-equivalence parity, transactional_critical decided on cadence-bypass grounds).

### Lightly adjust (do before shipped's commit lands)

1. **Establish a `fulfillment_lifecycle` (or `commerce_lifecycle`) domain folder convention NOW.** This is the most important adjustment. The shipped migration goes into that folder, NOT `clinical_decision`. Future delivered, rx_filled, lab_kit_shipped, retail_order_placed all inherit. The folder name itself encodes the architectural commitment.

2. **Reserve `case_kind` payload discriminant for clinical-decision-shaped events ONLY.** Document the convention in `repo/rules/types.ts` comments (or in a CODEOWNERS-gated convention doc). Future fulfillment-shaped payloads use `order_kind` or `fulfillment_kind` or surface-specific discriminants — NOT `case_kind`.

3. **Document the producer-locality pattern.** Producer-site comments should explicitly flag "this is legacy locality; correct producer is X" when the legacy surface is wired but the architecturally-correct surface differs. This prevents the type system + folder vocabulary from canonizing the legacy choice. Convention should be captured in a short doc at `docs/architecture/producer_site_locality.md` (or appended to the existing ADR).

4. **Update [`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md)** with one new watch-zone entry naming the fulfillment-vs-clinical-decision domain separation explicitly. This is preservation, not new doctrine — captures the case study that emerged organically from shipped.

### Don't (out of scope)

- Don't rewrite anything.
- Don't open the treatment_items-vs-treatment_orders consolidation question.
- Don't extend ADR §7.6 to allow new action kinds beyond `notify`.
- Don't pre-build the 4H-rules-runtime engine.
- Don't add an in_app surface.
- Don't materially redirect the 4H phase trajectory.

### Why "lightly adjust" is the right call (vs "continue unchanged")

Continue-unchanged would lose the chance to set the right precedent at the right moment. The shipped migration is the first concrete test of the case-centric ontology question. If we ship it as `clinical_decision` + `case_kind`, the precedent is set wrong; future authors will replicate. If we establish the `fulfillment_lifecycle` convention now (as part of shipped's preflight), every future fulfillment-shaped migration inherits the correct grouping for free.

The cost of lightly-adjusting now: one new folder name, one payload-discriminant convention, one producer-locality comment template, one watch-zone update to the radar doc. **All preservation/convention-setting; no code changes.**

The cost of NOT lightly-adjusting: the case-centric ontology canonizes across the next 5-10 migrations, and unwinding it requires touching dozens of files later.

### Why "materially redirect" is wrong

The substrate is durable. The rule layer's invariants are sound. The disclosure-policy gate generalizes. Pathway-sensitivity propagates correctly. Audit-action vocabulary is bounded. There's no architectural error that requires unwinding existing work. The seam is in *one specific layer* (domain-folder vocabulary + payload discriminants), and it's not yet activated — only shipped's pending decision activates it.

Material redirect would be over-correction. The system surfaced the ontology pressure exactly when needed; we just need to honor it in the next migration's design.

---

## 7. Watch zones to monitor

These are observations for future contributors / future-us, not action items.

### 7.1 Domain-folder canonization watch

Each new typed Rule's domain folder is a real architectural commitment. Before adding to an existing folder, verify the new rule actually belongs there (the folder name should describe the new rule honestly). Before creating a new folder, verify the name reflects the architecturally-correct grouping (not a label of convenience).

Specific corrections that would trigger this watch: a fulfillment event landing in `clinical_decision/`, a clinical event landing in `account_lifecycle/`, a marketing event landing in `clinical_decision/`.

### 7.2 Payload discriminant watch

Reusing existing payload discriminants is fine when the new event is structurally similar; reaching for an existing discriminant when the new event is structurally different is the canonization risk.

`case_kind` is the one to watch. It's appropriate for clinical_decision-shaped events. It should NOT spread to fulfillment, commerce, scheduling, or messaging events.

### 7.3 Producer-site sprawl watch

`patient-case/impl.ts` is the only producer file today. It naturally fits clinical-decision events. Future producers (orders subsystem, pharmacy webhooks, billing subscription events, scheduling, retail) should live in their own files in their own subsystems, not get stacked into impl.ts.

If a future migration's natural producer is impl.ts, that's fine. If it's somewhere else and we're tempted to move the call into impl.ts for convenience, that's the watch zone activating.

### 7.4 Notification-only-rule action watch

All 4 rules ship `action.kind: 'notify'`. The first non-notify rule (`route` for inbox/queue routing, `escalate` for escalation runtime, or `clarify` for follow-up forms) is a real architectural moment. It triggers ADR §7.6 amendment + an extension to the dispatcher's approved action set + likely a new orchestrator boundary.

Don't sneak through a non-notify rule under the existing pattern. The amendment is the deliberate moment.

### 7.5 First-class operational object watch

When a future rule needs an abstraction that doesn't exist yet (longitudinal program timeline, provider task, prescription lifecycle, multi-provider authority, EMR object), the right move is to model it before forcing it into existing primitives.

Don't extend `case_kind` to include `'longitudinal_program' | 'provider_task' | 'prescription_lifecycle'`. That's exactly the ontology drift this audit warns against.

---

## §8 Patient-as-root operational objects (doctrine reference)

**Added 2026-05-10 after audit completion; updated 2026-05-10 to reference the system-map doctrine.** The system map's `## Platform operational model` section binds the platform as a patient-rooted healthcare operating system with first-class sibling operational domains over a shared substrate. This audit's §6 adjustments are the **operationalization of that doctrine** at the implementation layer.

The audit's whole concern is that case-centric vocabulary, if canonized, will become the parent model for operational objects that aren't shaped like clinical cases (orders, appointments, prescriptions, lab kits, retail purchases, marketing journeys). That risk is precisely what the doctrine binds against: "A case is one operational object among many, not the parent ontology of the system." This section restates the two-layer model the doctrine encodes and shows how the §6 adjustments enforce it.

### 8.1 Two-layer mental model

The platform has two architectural layers that look similar but serve different purposes.

**Operational sibling domains** (peers under Patient — first-class platform objects, each with its own state machines, producers, audit lineage, and typed events):

```
Patient
  |-- Clinical record / chart
  |-- Care programs / pathways
  |-- Appointments / scheduling
  |-- Prescriptions / pharmacy lifecycle
  |-- Orders / fulfillment / inventory
  |-- Labs / diagnostics
  |-- Provider tasks / escalation
  |-- Communications / inbox
  |-- Billing / subscriptions / claims
  |-- Retail / commerce
  '-- Marketing / lifecycle journeys
```

**Substrate primitives** (NOT siblings of operational domains; cross-cutting infrastructure every operational sibling depends on):

- Identity / consent / authority
- Audit lineage / longitudinal operational timeline
- Disclosure-policy gate
- Deterministic evaluators + runtime boundaries
- Pathway sensitivity
- Idempotent orchestration
- Cross-org tenancy
- AI orchestration / decision support (when wired correctly, this is substrate that augments operational objects, not a sibling)

The distinction matters because:

- Each operational sibling gets its own domain folder under `repo/rules/` and `repo/templates/` (e.g., `clinical_decision/`, `fulfillment_lifecycle/`, `scheduling_lifecycle/`).
- Each operational sibling gets its own payload discriminant (e.g., `case_kind` for clinical-decision, `order_kind` for fulfillment, `appointment_kind` for scheduling).
- Substrate primitives do NOT get domain folders. They get architectural homes (e.g., `lib/disclosure-policy/`, `lib/pathways/`, `audit_events` table) that every sibling consumes.

If substrate items get treated as siblings, conceptual confusion follows ("audit lineage is a domain folder" doesn't make sense). If sibling items get nested inside other siblings (e.g., orders modeled as a sub-shape of clinical-decision-cases), the ontology drift this audit warns against takes hold.

### 8.2 Why this matters now

Four migrations have shipped (`payment_received`, `intake_submitted`, `case_approved`, `awaiting_clinical_review`). Three are clinical-decision-shaped; one is account-lifecycle-shaped. The next planned migration (`shipped`) is fulfillment-shaped — a different sibling than any prior migration.

This is the convention-setting moment for the operational object layer. After two more sibling migrations (likely scheduling and pharmacy in subsequent phases), the patterns shipped now will be very hard to retract.

The audit's §6 lightly-adjust list is already aligned with this two-layer model:
- (1) `fulfillment_lifecycle` folder creates the **operational sibling** for orders/fulfillment.
- (2) `order_kind` discriminant prevents `case_kind` from leaking across the seam between clinical-decision and fulfillment siblings.
- (3) Producer-locality comment names the temporary cross-sibling wiring as transitional.
- (4) Radar update tracks the long-term canonization risk.

### 8.3 Cross-references

- **Binding doctrine:** [`/Users/bloomfrontdesk1/Desktop/main-app/.cursor/plans/system_map_three_layers_60706286.plan.md`](../system_map_three_layers_60706286.plan.md) `## Platform operational model` section.
- Implementation companion with the full layering and platform-grade-foundations bar table: [`docs/architecture/operational_objects_under_patient.md`](../../docs/architecture/operational_objects_under_patient.md)
- Source of the ontology pressure: [`shipped_ontology_analysis_2026-05-10.md`](../shipped_ontology_analysis_2026-05-10.md)
- Watch-zone tracking: [`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md) (after §6 #4 update lands)

### 8.4 What this section does NOT change

- Substrate primitives remain platform-grade as concluded in §1.
- The §6 lightly-adjust list remains the actionable output for shipped's preflight.
- No new code changes flow from this section. It is mental-model preservation.

The section exists so that future contributors (and future-us) can answer "where does this new event/rule/producer belong?" without re-deriving the layering each time.

---

## End of audit

**Headline:** continue unchanged on substrate; lightly-adjust domain conventions now (4 specific items in §6) before shipped's commit canonizes the wrong vocabulary. The two-layer architecture in §8 is the doctrine reference (the doctrine itself now binds at the top of the system map).

**Immediate downstream action:** the shipped migration's preflight should incorporate the four §6 corrections: new `fulfillment_lifecycle` folder, `order_kind` payload discriminant, producer-locality comment, radar update. Then proceed with the migration as planned.

**No code changes from this audit.** This is a preservation document.

**System map status:** the `## Platform operational model` doctrine now binds at the top of the system map (inserted 2026-05-10 immediately after the labs precedence note and before `## Intent (short)`). The doctrine names patient-rooted, sibling-domain, substrate-vs-operational layering as binding premise. Substrate primitives in the system map remain durable and unchanged.

**Trial counter unchanged:** convergence-via-wiring trial still at #2 of 2-3 reinforcements; shipped's migration is the natural #3 candidate (now with cleaner ontological grounding and binding doctrinal backing).

When you're ready, tell me: proceed with shipped's preflight using the §6 adjustments, or discuss this audit further first.
