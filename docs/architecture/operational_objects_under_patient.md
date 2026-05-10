# Operational objects under Patient — implementation companion

**Status:** elaboration companion to the **Platform operational model** binding doctrine in [`/Users/bloomfrontdesk1/Desktop/main-app/.cursor/plans/system_map_three_layers_60706286.plan.md`](../../.cursor/plans/system_map_three_layers_60706286.plan.md). The doctrine binds; this companion shows the visualization, per-sibling conventions, and platform-grade-foundations bar that flow from it.

**Date introduced:** 2026-05-10, alongside the system-map doctrine.

**Read this when:** picking the domain folder for a new typed Rule, picking the payload discriminant for a new event, deciding whether a new producer-site belongs in `lib/internal/patient-case/impl.ts` or somewhere else, or evaluating whether a sibling surface (Epic-style EMR / Mindbody-style scheduling / Shopify-style retail / ActiveCampaign-style marketing / Twilio-style communications / pharmacy lifecycle / labs / provider tasking) plugs in cleanly or needs new substrate.

---

## What this document is

A high-altitude visualization of the operational-object layer the system-map doctrine binds, distinct from the substrate layer that supports it. It captures a way of *seeing* the architecture that the system map's existing prose-heavy structure doesn't surface visually.

This document **does not introduce** the platform premise — that lives in the system map's `## Platform operational model` section and is binding doctrine. This document shows how the doctrine resolves at the implementation layer: what folders to create, what discriminants to use, where producers live, and what bar the substrate has to clear so each sibling can become a first-class surface without rewrites.

---

## The platform model (what this map binds)

The system map's `## Platform operational model` section binds the platform as a **patient-rooted healthcare operating system** where major operational domains coexist as first-class siblings over a shared governance and orchestration substrate:

- clinical record / charting
- care programs / pathways
- scheduling / appointments
- prescriptions / pharmacy lifecycle
- orders / fulfillment / inventory
- labs / diagnostics
- provider tasks / escalation
- communications / inbox
- billing / subscriptions / claims
- retail / commerce
- marketing / lifecycle journeys

Reference points for the platform-grade-foundations bar (§ later in this doc): Epic (EMR depth), Mindbody (scheduling sophistication), Shopify (retail/commerce maturity), ActiveCampaign (marketing lifecycle journeys), Twilio (governed communication primitives), pharmacy lifecycle managers, lab order management.

The platform does NOT need to match any of those feature-for-feature today. The substrate must clear the bar so any of them can land as a first-class sibling when its concrete migration arrives, without substrate rewrites.

---

## The two-layer architecture

The platform has two layers that look similar but serve different purposes. Conflating them is the canonization risk.

### Layer 1 — Operational sibling domains (first-class platform objects)

Each is a first-class object in the platform's data + behavior model. Each gets its own domain folder under `repo/rules/` and `repo/templates/`. Each has its own state machine(s), its own producer surfaces, its own audit lineage, its own typed events. Sibling domains are **peers under Patient**, not nested under each other.

```
Patient
  |
  |-- Clinical record / chart
  |     (assertions, observations, problem list, diagnosis, medication reconciliation, SOAP)
  |
  |-- Care programs / pathways
  |     (longitudinal care episodes, protocol versions, pathway sensitivity)
  |
  |-- Appointments / scheduling
  |     (booking, reschedule, no-show, waitlist, recurrence, in-person vs remote)
  |
  |-- Prescriptions / pharmacy lifecycle
  |     (prescribed -> submitted -> filled -> ready -> picked up -> refilled)
  |
  |-- Orders / fulfillment / inventory
  |     (treatment_orders, supplement_orders, lab_kit_orders, retail_orders shipping)
  |
  |-- Labs / diagnostics
  |     (orders, kit fulfillment, sample collection, results, results review)
  |
  |-- Provider tasks / escalation
  |     (provider work queues, decision_support_payloads, SLA tracking, escalation)
  |
  |-- Communications / inbox
  |     (provider messages, patient messages, care team threading, notification log)
  |
  |-- Billing / subscriptions / claims
  |     (Stripe events, plan lifecycle, dunning, claims submission, payer mix)
  |
  |-- Retail / commerce
  |     (non-clinical product sales, cart, checkout, returns, retail catalog)
  |
  '-- Marketing / lifecycle journeys
        (lead nurture, abandoned intake, winback, re-engagement, campaigns)
```

Each operational sibling has its own:
- Domain folder name (e.g., `repo/rules/scheduling_lifecycle/`)
- State machine(s) (e.g., `appointments.status` enum)
- Producer surface (e.g., `lib/scheduling/` mutation site)
- Typed events (e.g., `'patient.appointment_confirmed'`, `'patient.appointment_no_show'`)
- Payload discriminant (e.g., `appointment_kind: 'video_visit' | 'in_person' | 'phone'`)

They share the substrate primitives (next section).

### Layer 2 — Substrate primitives (cross-cutting, used by every operational sibling)

These are NOT operational objects under Patient. They are infrastructure that every operational sibling depends on. They get their own architectural homes (separate from `repo/rules/` and `repo/templates/`) and they show up in every sibling's wiring.

| Substrate primitive | Where it lives | What every sibling uses it for |
|---|---|---|
| Identity / consent / authority | `patient_consents`, `staff_profiles`, `authority_floor` enum | Who can act, who consented, what authority floor is required |
| Audit lineage / longitudinal operational timeline | `audit_events`, `patient_timeline_events`, `lib/events/` | Reconstructable history of every governed action |
| Disclosure-policy gate | `lib/disclosure-policy/` | Privacy / channel / cadence governance for every patient-facing surface |
| Deterministic evaluators + runtime boundaries | Pure-function evaluator + async runtime wrapper pattern (ADR §7.6) | Side-effect-bounded rule execution; structural enforcement of invariants |
| Pathway sensitivity | `lib/pathways/sensitivity-registry.ts` | Per-pathway clinical sensitivity for clamp logic |
| Idempotent orchestration | `enqueue_outbound_job` SECURITY DEFINER + per-row idempotency_key | Atomic state transition + audit emission; replay-safe |
| Cross-org tenancy | `org_id` on every persisted entity; orchestrator-level rejection | Multi-tenant safety |
| AI orchestration / decision support (future) | TBD; will likely augment existing primitives, not replace them | When AI participates in governed workflows, the substrate ensures lineage + authority remain intact |

Substrate primitives are NOT siblings of operational domains. They are the foundation every operational sibling rests on.

---

## What this means for current 4H work

### For the typed Rule + Template registry

Domain folders should be **operational siblings**, not substrate primitives. Examples:

- `repo/rules/billing_subscription/` (sibling: Billing/subscriptions/claims)
- `repo/rules/account_lifecycle/` (a sub-area of Identity/consent/authority — substrate-adjacent, kept as a domain folder for migration convenience)
- `repo/rules/clinical_decision/` (a sub-area of Care programs/pathways — specifically the decision-cycle within those programs)
- `repo/rules/fulfillment_lifecycle/` (sibling: Orders/fulfillment/inventory) — TO BE ESTABLISHED in the shipped migration

Future folders that should exist as siblings activate:
- `repo/rules/scheduling_lifecycle/` (when first scheduling-event rule lands)
- `repo/rules/pharmacy_lifecycle/` (when first pharmacy-event rule lands)
- `repo/rules/labs_lifecycle/` (when first lab-event rule lands)
- `repo/rules/provider_tasking/` (when first provider-task rule lands)
- `repo/rules/communications_lifecycle/` (when first inbox-routing rule lands)
- `repo/rules/retail_lifecycle/` (when first retail rule lands)
- `repo/rules/marketing_lifecycle/` (when first marketing journey rule lands)

### For payload discriminants

Each operational sibling should have its own discriminant naming the underlying object correctly:

- Clinical decision events: `case_kind: 'treatment_item' | 'care_program'` — bounded to clinical-decision-shaped events
- Fulfillment events: `order_kind: 'treatment_order' | 'supplement_order' | 'lab_kit_order' | 'retail_order'`
- Scheduling events: `appointment_kind: 'video_visit' | 'in_person' | 'phone'`
- Pharmacy events: `pharmacy_event_kind: 'rx_filled' | 'rx_ready' | 'refill_dispensed'`
- Lab events: `lab_event_kind: 'kit_shipped' | 'sample_collected' | 'results_ready'`
- Provider task events: `task_kind: 'review_required' | 'message_response' | 'escalation'`
- Communications events: `message_kind: 'provider_to_patient' | 'patient_to_provider' | 'patient_to_support'`
- Retail events: `retail_kind: 'order_placed' | 'order_shipped' | 'return_initiated'`
- Marketing events: `journey_kind: 'lead_nurture' | 'abandoned_intake' | 'winback'`

The point: discriminants are **per-sibling**. They are NOT reused across siblings except where the underlying object is genuinely the same.

### For producer-site locations

Each operational sibling's producers live in their own subsystem files. They do NOT all stack into `lib/internal/patient-case/impl.ts`.

- Clinical decision producers: `lib/internal/patient-case/impl.ts` (where they are today)
- Fulfillment producers: `lib/orders/updateFulfillment.ts`
- Scheduling producers: `lib/scheduling/` (when activated)
- Pharmacy producers: `lib/pharmacy/` or pharmacy webhook handlers (when activated)
- Lab producers: `lib/labs/` or lab webhook handlers (when activated)
- Provider task producers: `lib/provider-tasks/` or wherever (when activated)
- Communications producers: wherever messaging happens
- Retail producers: `lib/commerce/retail/` (when activated)
- Marketing producers: `lib/marketing/` or campaign engine (when activated)

The producer-site sprawl watch zone (audit §7.3) names this risk explicitly.

---

## What "platform-grade foundations" means concretely

A platform foundation is platform-grade if a future first-class surface for that operational object can land WITHOUT rewriting the substrate.

| Future surface | Bar to clear | Status |
|---|---|---|
| Epic-style EMR (charting, problem list, diagnosis, medication reconciliation) | Substrate accepts: clinical_record domain, audit lineage on every chart change, authority_floor for chart-mutation rules, disclosure-policy on chart exports | Substrate ready; clinical_record domain folder not yet created (none needed until first migration arrives) |
| Mindbody-style scheduling (booking, recurrence, waitlist, no-show recovery) | Substrate accepts: scheduling_lifecycle domain, audit lineage on appointment changes, pathway-aware rules (e.g., "send extra prep info for tier_3 visits"), in-person redundancy windows | Substrate ready; scheduling_lifecycle domain folder not yet created |
| Shopify-style retail (catalog, cart, checkout, returns) | Substrate accepts: retail_lifecycle domain, idempotent commerce orchestration, cross-org tenancy, marketing intent on retail comms | Substrate ready; retail_lifecycle domain folder not yet created |
| ActiveCampaign-style marketing lifecycle (drip campaigns, journeys, exclusion windows) | Substrate accepts: marketing_lifecycle domain, cadence rules (Section 1Q.21 already specs this), consent for marketing intent | Substrate ready; marketing_lifecycle domain folder not yet created |
| Twilio-style governed communication (channel routing, opt-out, deliverability) | Substrate accepts: communications_lifecycle domain, disclosure-policy gate (already shipped), per-channel ceilings | Substrate ready; communications_lifecycle domain folder activates when inbox + provider messaging migrate |
| Pharmacy lifecycle (rx fills, refills, exceptions, callback) | Substrate accepts: pharmacy_lifecycle domain, integration with treatment_items + treatment_orders (or successor), audit lineage on pharmacy events | Substrate ready; pharmacy_lifecycle domain folder not yet created; pharmacy events not yet wired |
| Labs / diagnostics (kit ship, sample, results, clinical review) | Substrate accepts: labs_lifecycle domain, orchestrator pattern for lab order ↔ result correlation, authority_floor for results-review rules | Substrate ready; labs_lifecycle domain folder not yet created |
| Provider tasking (work queues, SLA, escalation, decision support) | Substrate accepts: provider_tasking domain, RuleAction.kind: 'route' (Section 1Q.4 already specs this), decision_support_payload | Substrate ready; ADR §7.6 amendment needed before first 'route' rule lands |
| Patient inbox / in-app messaging | Substrate accepts: communications_lifecycle domain, send_in_app channel adapter | Substrate mostly ready; in_app adapter not yet wired (`send_in_app` JOB_KIND exists but no dispatch handler) |
| AI orchestration / decision support | Substrate accepts: action_kind extension to permit AI-recommended actions, audit lineage for AI authorship, authority_floor for AI override capability | Substrate mostly ready; the actor_kind enum already includes `'ai_assistant_with_human_approval'`; first concrete AI-rule requires ADR §7.6 amendment |

**Bottom line:** the substrate is platform-grade for 10 of 10 sampled future surfaces. The gaps are at the *operational object layer*: domain folders, payload discriminants, producer-site locations. None require substrate rewrites. All can be established as conventions when their first concrete migration arrives.

This is what "you caught it early" means concretely.

---

## What this means for ongoing work

### Continue unchanged

- The substrate primitives (every entry in Layer 2 above).
- The Phase 4H ADR + side-effect-bounded rule execution invariant.
- The 4 typed Rules + Templates already shipped.
- The convergence-via-wiring trial (currently #2 of 2-3 reinforcements).

### Establish before more migrations

- Domain folder naming convention for each operational sibling (this doc names them).
- Payload discriminant naming convention per-sibling.
- Producer-site locality convention (legacy locality OK with explicit comment; future fulfillment events should target orders subsystem; etc.).

### Defer to natural arrival

- Each operational sibling's domain folder lands when its first concrete typed Rule needs it. Don't pre-create empty folders.
- Each substrate gap (in_app adapter, ADR §7.6 amendment for non-notify actions, etc.) lands when the first concrete need surfaces.
- The treatment_items-vs-treatment_orders consolidation question is its own bigger migration, deferred until appetite exists.

---

## Cross-references

- [`.cursor/plans/audits/2026-05-10_system_map_alignment_pressure_test.md`](../../.cursor/plans/audits/2026-05-10_system_map_alignment_pressure_test.md) — the focused alignment audit that triggered this doc.
- [`.cursor/plans/shipped_ontology_analysis_2026-05-10.md`](../../.cursor/plans/shipped_ontology_analysis_2026-05-10.md) — the shipped migration's ontology analysis that surfaced the seam.
- [`docs/architecture/v1_pressure_test_radar.md`](v1_pressure_test_radar.md) — the radar that flagged case-centric ontology as a watch zone before it became actionable.
- [`docs/architecture/phase_4h_target_first_decision_record.md`](phase_4h_target_first_decision_record.md) — Phase 4H ADR; the cutover discipline + side-effect-bounded constraint live here.
- [`.cursor/plans/system_map_three_layers_60706286.plan.md`](../../.cursor/plans/system_map_three_layers_60706286.plan.md) — the binding source of truth for primitives and section-level architecture.

---

## Final note

This document is the implementation companion to the system map's `## Platform operational model` binding doctrine. It exists to give future contributors (and future-us) a concrete reference for picking domain folders, payload discriminants, and producer-sites consistently with that doctrine. As more operational siblings activate, this doc gets updated.

The doctrine in the system map is what binds; this doc shows how the doctrine resolves at the implementation layer.
