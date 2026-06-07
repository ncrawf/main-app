# OMNI Scheduling Architecture — Design Pressure-Test

**Date:** 2026-05-17
**Status:** **DESIGN PRESSURE-TEST ARTIFACT** — surfaces unresolved scheduling architecture questions and proposes tentative options for joint Opus + Knox + user review **BEFORE** doctrine sharpening, Phase 0 audit, or implementation.
**Author:** Opus (thread 3, post-Phase-B.5)
**Source inputs:** Session 2 Turn 17 OPUS PROMPT (user + chat co-composed) + Session 1 + Session 2 verbatim discussion + [Layer 2 synthesis](2026-05-16_mindbody_architecture_understanding.md) (commit `780e523`) + Q1-Q14 + 9 user gaps + 17 raw Mindbody capture files + DL-14 / DL-15 / DL-16 anchored in system map.

---

## 0. Discipline locks (user-supplied constraints — BINDING)

Per user instruction (2026-05-17 plan-mode confirmation):

1. **NOT doctrine.** This doc does not amend or canonize anything.
2. **NOT DL-15 amendments.** DL-15 28 invariants remain unchanged.
3. **NOT DL-16 amendments.** DL-16 39 invariants remain unchanged.
4. **NOT new DL authoring.** Commerce DL / Settings-Infrastructure DL / RBAC DL / Clinical-Coding DL drafts deferred to Phase B.5+.
5. **NOT migrations.** No DDL, no schema migrations, no SQL.
6. **NOT code.** No implementation, no API specs, no test scaffolding.
7. **Q1 + Q6-Q14 remain SHELVED.** This doc surfaces tradeoffs and tentative options. It does NOT resolve.
8. **Layer 2 ([2026-05-16_mindbody_architecture_understanding.md](2026-05-16_mindbody_architecture_understanding.md)) NOT retroactively edited.** Implications fold at Phase B.5+ doctrine sharpening, not here.
9. **All tentative architectural proposals are framed as "for review."** Final wording requires joint Opus + Knox + user agreement.

User framing reminder (Session 2 Turn 1, verbatim):
> *"this chat is progressive, we were developing ideas as we went, no ideas are locked or decided on per se, we were just surfacing things, gratvitating towards thigs."*

Knox framing reminder (Session 1 Turn 6 + Session 2 implicit throughout):
> *"Don't force the encounter/profile question tonight. Keep ingesting Mindbody evidence first."*

This pressure-test artifact respects both framings.

---

## 1. Purpose

Per user constraint (verbatim):
> *"surface unresolved scheduling architecture questions, organize the Mindbody ingestion + Knox discussion + user gap list + Q1-Q14 + 45 scenarios, and propose tentative architecture options for review."*

The output identifies, for each architectural concept currently in play:

1. **What is already locked doctrine** — invariants that downstream work MUST respect
2. **What is implied but not yet proven** — assertions across Layer 2 / Sessions / Knox direction that have not been formally encoded as doctrine
3. **What remains unresolved** — Q1-Q14 + new questions surfaced here (Q15+)
4. **What would require doctrine amendment later** — Phase B.5+ doctrine sharpening scope
5. **What belongs in the thin vertical scheduling slice (Day 0)** — minimum substrate to admit the architecture without forcing premature implementation
6. **What must be deferred** — Phase 2+ scope; explicit "NOT now"

Plus, per the Session 2 Turn 17 OPUS PROMPT deliverable format:

- Tentative core object model (2-3 options + tradeoffs)
- Event + action mapping (tentative)
- Data ownership boundaries (tentative; Q9 3-lane applied)
- Pressure-test walk-through (15-20 of the 45 Q2 scenarios)
- False-equivalence audit (Q13 6-axis principle applied)
- Risks / where this can go wrong
- Why this beats Mindbody / supports Hims / supports derm-specialty-procedure
- Recommended next steps

---

## 2. Source inputs & reading order

For verbatim source material:

1. [Session 1 Turns 1-6](../ingestion/competitor_product_evidence/mindbody/mindbody_to_omni_direction_raw.md) — Knox direction + Q1 SHELVE (binding)
2. [Session 2 Turns 1-30](../ingestion/competitor_product_evidence/mindbody/mindbody_to_omni_direction_raw.md) — progressive scheduler-builder discussion + OPUS PROMPT in Turn 17 (REFERENCE / IDEAS only)
3. [Q1-Q14 open questions](../ingestion/competitor_product_evidence/mindbody/mindbody_open_questions_raw.md) — indexed; 45 cumulative pressure-test scenarios
4. [User feedback raw](../ingestion/competitor_product_evidence/mindbody/mindbody_user_feedback_raw.md) — 9 gaps
5. [Layer 2 synthesis](2026-05-16_mindbody_architecture_understanding.md) — 13 sections A-M, 185+ findings cited back to 17 raw capture files

For doctrine anchors:

6. [system map](../system_map_three_layers_60706286.plan.md) — DL-14 + DL-15 + DL-16 canonical homes
7. [FOUNDATIONAL_ARCHITECTURE](../FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md) — primitives + sibling enumeration
8. [omni_brain_hardening](../omni_brain_hardening_d1ef429b.plan.md) — phase sequencing
9. [FUTURE_ARC federation/topology](../FUTURE_ARC_2026-05-12_federation_permeability_topology.md) — federation-mode taxonomy

For raw evidence per substrate concept: 17 raw capture files at [`.cursor/plans/ingestion/competitor_product_evidence/mindbody/mindbody_NN_*.md`](../ingestion/competitor_product_evidence/mindbody/) (Batches 4-21).

---

## 3. Glossary (terms used in this doc — tentative, for review)

| Term | Tentative working definition |
|---|---|
| **Care Episode** | Longitudinal pathway/context. Reason OMNI is interacting with the patient over time (e.g., GLP-1 weight loss program, Botox maintenance, Mole surveillance, Sleep apnea evaluation). Session 2 proposes as 1st-class primitive ABOVE Encounter Container. Status: Q6 OPEN. |
| **Encounter Container** | Bounded accountable clinical/operational decision moment within a Care Episode. May be scheduled (office visit) or async (provider review). NOT every patient touchpoint. |
| **Encounter Profile** | Per-encounter discriminator that drives policy requirements (provider required / room required / consent required / clinical clearance / inventory consumption / Rx-labs-orders allowed / etc.). Session 2 enumerates 13 profiles. Status: Q1 SHELVED. |
| **Interaction** | Communication/contact/event touchpoint NOT meeting encounter threshold. Message / call / voicemail / lab result event / "thanks!" text. Can LINK to encounter as evidence. Status: Q7 OPEN. |
| **Planned Intent Line** | What was scheduled / prepared for / expected to happen at an encounter. Status enum includes `completed_as_planned / not_performed / superseded / scheduled_in_error / patient_declined / insufficient_time`. Status: Q8 OPEN. |
| **Performed Intervention Line** | What ACTUALLY happened at an encounter — clinical truth. Authored by provider (or staff-drafted pending provider attestation). Separate substrate from planned intent. Status: Q8 OPEN. |
| **Line** | Any sub-record under an Encounter Container: planned intent / performed intervention / procedure / order / lab / rx / document / inventory_use / billable / payment / entitlement_redemption / follow_up / task / message. Each LINE owns its own truth in its proper substrate; the container LINKS. |
| **Projection** | Derived view of substrate data. Receipt = projection of charge lines. Visit timeline = projection of all lines linked to encounter. Substrate truth lives in source; projection renders. |
| **Attestation** | Provider sign-off on staff-drafted clinical truth (e.g., MA enters performed line; provider attests later). Status: Q10 OPEN (4-tier authorship+attestation model). |
| **Closeout** | Post-encounter workflow: documentation due / patient instructions / follow-up plan / retail recs / scheduling instructions / internal ops tasks. Separate from checkout cart. Status: Q11 OPEN (7-lane closeout). |
| **Venue** | Generalization of "location." 11 axes: physical_location / virtual_location / brand / legal_entity / deployment / patient_relationship / provider_schedule_location / patient_state-jurisdiction / billing_rendering_location / resource_location / federation_location_of_record. Status: Q12 OPEN. |
| **Federation** | Cross-clinic / cross-brand / cross-deployment topology. Status: cross-ref [FUTURE_ARC federation/topology](../FUTURE_ARC_2026-05-12_federation_permeability_topology.md). |
| **CNS** | OMNI's care coordination brain. Reads unified events, emits orchestration actions, owns outcome feedback. Per DL-14 (locked). |
| **DL-14 / DL-15 / DL-16** | Doctrine Locks. DL-14 = CNS center of gravity (22 invariants). DL-15 = scheduling substrate spine (28 invariants). DL-16 = universal CNS event envelope + taxonomy evolution (39 invariants). All locked. |

---

## 4. Bucket 1 — Locked doctrine (NOT up for debate)

The following doctrine is canonized + binding. ALL tentative proposals in §§7-17 must respect these. Any apparent conflict between a tentative proposal and locked doctrine MUST be flagged for review, not silently resolved.

### 4.1 DL-14 — OMNI CNS center of gravity (22 invariants)

Canonical homes: [system map](../system_map_three_layers_60706286.plan.md) top anchor + [FOUNDATIONAL §0](../FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md) + ADR §7.17.

Key claims for this pressure-test:

- OMNI CNS is event-driven care coordination. Rails and surfaces are OUTPUTS.
- Scheduling is one executor the CNS can use; it does NOT own the patient journey.
- Messaging is its own substrate. Not encounters. (Reinforces Session 2 Turn 7 messaging-stays-messaging rule.)
- Invariants 7-22 (Phase A.2) bind AI runtime + planner + control-state + 6-layer CQRS architecture.

### 4.2 DL-15 — Scheduling substrate spine (28 invariants)

Canonical home: system map. Binds:

- Schedule canonical state ownership (scheduler owns it; CNS consumes events)
- Conflict detection + concurrent-booking safety
- Multi-resource alignment (this is the doctrinal predecessor of the 4-axis booking composer, but is not yet in 4-axis form per Layer 2 G.1 Amendment 2)
- Reschedule / cancel / no-show lifecycle states
- Hold / lock / reservation semantics

### 4.3 DL-16 — Universal CNS event envelope + 7-category vocabulary partition (39 invariants)

Canonical home: system map §1Z + ADR §7.19.

Every event in the system inherits the universal envelope: `event_id / event_kind / domain / source / actor / 4 time fields / entity_refs / before_state / after_state / payload_version / schema_version / audit_lineage / idempotency_key / confidence / correlation_id / causation_id / aggregate_id / sequence_number / tenant_id / environment_context / replayability_flag / status / replacement_kind / retention_class / consistency_tier / cost_attribution`.

7-category vocabulary partition (DL-16 invariant 3): domain_event / cns_decision / orchestration_action / rail_projection / outcome_event / patient_state / system_event.

### 4.4 DL-11 — Messaging substrate protection

Canonical home: system map. Messaging substrates are NOT to be crammed into other lifecycle models. Reinforced by Session 2 Turn 7: *"No — messaging is still messaging."*

### 4.5 DL-5 — Day 0 elite-class depth for activated domains

Canonical home: system map. Any domain that activates on Day 0 must admit Klara/RingCentral-class depth in substrate (even if surface UI is thin).

### 4.6 DL-13 — Rail-agnostic substrate spine

Canonical home: system map. Substrate is rail-agnostic; rails are adapters/projections.

### 4.7 System primitive #10 — `orchestration_actions`

Renamed from `outbound_jobs` per Phase A.2 (non-reopenable). Scope-bound by DL-14 invariants 3 + 5 + 14 + 16. Hosts ALL CNS action types as projections (patient outbound message / provider notification / staff task / ops alert / passive awareness marker / suppression-cancellation / AI plan request / lifecycle state update / no-op / booking hold / deposit link request).

### 4.8 System primitive #11 — AI runtime

Scope-bound by DL-14 invariants 7-22 (Phase A.2). Adequacy of existing implementation against bound scope is Phase 0 brain-audit work.

### 4.9 Phase B.5 binding constraints (per [phase_b5 plan](../phase_b5_mindbody_ingestion_4db27449.plan.md))

- "Preserve everything" raw layer contract — raw layer is durable archive; cannot be re-derived from Layer 2.
- "What Phase B.5 does NOT do" — no doctrine amendments yet, no substrate slice yet, no DL drafts yet.

### 4.10 Knox + user joint shelve of Q1

Per Session 1 Turn 6 + Session 2 implicit throughout: Q1 encounter container architecture (same parent container with configurable encounter profiles vs separate visit/procedure objects) is **EXPLICITLY SHELVED** until Phase B.5+ joint review.

### 4.11 Phase sequencing (per [omni_brain_hardening](../omni_brain_hardening_d1ef429b.plan.md))

```
Phase A → A.2 → B (DL-14/15/16) → B.5 (done) → 0 (PENDING) → 1 → B.5+ doctrine → 2 → 3
```

This doc precedes Phase 0. It feeds Phase B.5+ but does not preempt Phase 0.

---

## 5. Bucket 2 — Implied but not proven

Concepts asserted across Layer 2 / Sessions / Knox direction that have NOT been formally encoded as doctrine. Each becomes a candidate for Phase B.5+ amendment OR new doctrine OR rejection.

### 5.1 4-axis booking composer (Capacity × Staff × Room × Resource)

- **Source:** User gap #1 ("ability to control room vs provider vs resource… all independently, so that they can all align when needed"); Layer 2 D.5; Session 1 Turn 1 (Knox); Session 2 Turn 17 OPUS PROMPT §5.
- **Status:** Implied. DL-15 invariants admit multi-resource alignment but do NOT formally define a 4-axis composer or per-axis-required-for-encounter-profile binding.
- **Pressure-test implication:** Layer 2 G.1 Amendment 2 explicitly flags this as DL-15 amendment territory.

### 5.2 3-component appointment block (Prep + Booking + Finish, per staff per service)

- **Source:** Mindbody Batch 13 Step 10 (staff assignment per-service); Layer 2 D.6.
- **Status:** Implied. DL-15 does not encode 3-component time decomposition.
- **Pressure-test implication:** Layer 2 G.1 Amendment 3.

### 5.3 Multi-flag lifecycle stack (Confirmed AND Arrived simultaneously)

- **Source:** Mindbody Batch 5 row 60 (multi-flag stack); Layer 2 B.1 + D.2.
- **Status:** Implied. DL-15 currently models lifecycle as single-state enum.
- **Pressure-test implication:** Layer 2 G.1 Amendment 1.

### 5.4 12-15+ commerce primitives (expansion of Knox's 4-entity split)

- **Source:** Knox Session 1 Turn 1 (4-entity); Layer 2 A.4 expanded to 15+ primitives; Session 2 Turn 17 OPUS PROMPT §4.
- **Status:** Implied. No Commerce DL canonized.
- **Pressure-test implication:** Phase B.5+ Commerce DL draft (Layer 2 G.2.1).

### 5.5 Planned intent vs Performed truth as substrate-enforced separate concepts

- **Source:** Session 2 Turns 3, 4, 17 §3; Layer 2 D.4; user gap #2.
- **Status:** Implied. Not formally encoded as DL-15 invariant; existing scheduling substrate likely conflates intent + performance into single editable appointment row.
- **Pressure-test implication:** New DL-15 amendment + Q8 OPEN.

### 5.6 Encounter ≠ Interaction boundary discipline

- **Source:** Session 2 Turns 6, 7, 8 (Knox + user explicit pushback); Q7.
- **Status:** Implied. DL-11 protects messaging substrate; DL-16 partitions events; but boundary is not formally encoded as: "interactions can link to encounters but never become encounters by default."
- **Pressure-test implication:** Possible DL-16 amendment OR new doctrine lock.

### 5.7 Care Episode as 1st-class primitive above Encounter

- **Source:** Session 2 Turn 1 (Knox layered model); Q6.
- **Status:** Implied. Existing OMNI substrate has `treatment_items` + `clinical_visits` but no formal Care Episode primitive.
- **Pressure-test implication:** Possible new Care-Coordination-DL OR extension of existing primitive.

### 5.8 11-axis location / venue / federation taxonomy

- **Source:** Session 2 Turn 18 (Knox 11-axis enumeration); Q12; cross-ref [FUTURE_ARC federation](../FUTURE_ARC_2026-05-12_federation_permeability_topology.md).
- **Status:** Implied. Existing system map Section 1U has 3-scope identity (User/Site/Owner); 11-axis taxonomy is not formally encoded.
- **Pressure-test implication:** Settings-Infrastructure DL + Federation-Topology DL extension.

### 5.9 3-lane source-of-truth separation (clinical / commercial / receipt-projection)

- **Source:** Session 2 Turns 21, 22, 25, 26 (Knox 3-lane model); Q9.
- **Status:** Implied. Not formally encoded.
- **Pressure-test implication:** Commerce DL invariant.

### 5.10 4-tier provider authorship + attestation model

- **Source:** Session 2 Turns 22, 27 (Knox 4-tier); Q10.
- **Status:** Implied. Not formally encoded. Mindbody substrate has 5 permission groups + 8+ per-staff capability flags but no formal authorship+attestation tier.
- **Pressure-test implication:** RBAC DL draft.

### 5.11 Visit closeout drawer (7 lanes, separate from checkout cart)

- **Source:** Session 2 Turn 29 (Knox 7-lane closeout); Q11.
- **Status:** Implied. Not formally encoded.
- **Pressure-test implication:** Possible DL-15 amendment OR new substrate primitive.

### 5.12 Industry analogy fusion as architectural lens

- **Source:** Session 2 Turn 12 (Knox airline+restaurant+Amazon+Tesla+Epic+Shopify+CPU+Ford); Layer 2 K11.
- **Status:** Pedagogical / framing principle, not substrate.
- **Pressure-test implication:** Sanity-check substrate decisions against industry-analog patterns.

### 5.13 Intake-as-living-memory (continuous state capture, not one-time form)

- **Source:** Session 2 Turn 16 (user-articulated); Layer 2 A.1; Q14.
- **Status:** Implied. Existing OMNI intake substrate is form-submission-based; "since last visit" enrichment is not formally encoded.
- **Pressure-test implication:** Intake substrate revisit at Phase B.5+ (Q14).

### 5.14 Substrate-derived metrics

- **Source:** Session 2 Turn 3 (Knox listed: online_booking_mismatch_rate, staff_scheduling_error_rate, pivoted_visit_rate, planned_vs_rendered_conversion, same_day_upsell_rate); Layer 2 I.9.
- **Status:** Implied as moats. No metric substrate primitives.
- **Pressure-test implication:** Phase B.5+ metric-substrate design.

### 5.15 Encounter profile drives documentation requirements

- **Source:** Session 2 Turn 20 (Knox: resource_only_session → session log no provider note; injectables → procedure note required; medical visit → progress note required; etc.); Q12.
- **Status:** Implied. Not formally encoded.
- **Pressure-test implication:** DL-15 amendment OR new Documentation DL.

---

## 6. Bucket 3 — Unresolved (Q1-Q14 + new questions surfaced by composing this doc)

All 14 questions Q1-Q14 from [mindbody_open_questions_raw.md](../ingestion/competitor_product_evidence/mindbody/mindbody_open_questions_raw.md) remain **OPEN**. This doc does NOT resolve them. New questions Q15-Q21 are surfaced below.

### 6.1 Q1-Q14 status (verbatim from open-questions log)

| # | Question | Status |
|---|----------|--------|
| Q1 | Encounter container architecture | **OPEN — primary shelved question** |
| Q2 | 45 pressure-test scenarios validate architecture | **OPEN** (pending Q1) |
| Q3 | 4-entity split validity (Schedulable / Clinical / Billable / Resource-Inventory) | **OPEN** |
| Q4 | Mode-per-service-line vs flat appointment_type | **OPEN** |
| Q5 | Capability flags per brand/clinic mapping | **OPEN** |
| Q6 | Care Episode parent object | **OPEN** |
| Q7 | Encounter vs Interaction boundary | **OPEN** |
| Q8 | Planned Intent vs Performed Truth substrate enforcement | **OPEN** |
| Q9 | 3-lane source-of-truth separation | **OPEN** |
| Q10 | 4-tier provider authorship+attestation | **OPEN** |
| Q11 | Visit closeout drawer 7 lanes | **OPEN** |
| Q12 | 11-axis location/venue/federation taxonomy | **OPEN** |
| Q13 | False-equivalence audit meta-principle | **OPEN** |
| Q14 | Photos/intake/consent/docs separate substrates | **OPEN** |

### 6.2 New questions surfaced by composing this pressure-test (Q15-Q21)

Each surfaces ONLY because the act of organizing Layer 2 + Sessions + scenarios into this doc made the gap visible.

#### Q15 — Encounter substrate identity (single substrate-with-discriminator vs polymorphic vs separate-tables)

- **Source:** This doc §10 (proposed object model options).
- **Question:** If Q1 resolves as "same parent container with configurable encounter profiles," what's the substrate-level identity model? Single `encounter` table with `encounter_profile_id` FK + per-profile policy table? Polymorphic `encounter` + per-profile child tables? Pure tag/role pattern with no profile enum? Two top-level tables with shared FK?
- **Tentative options:** (A) single + profile_enum + policy_table (Knox tentative); (B) polymorphic + subtype tables; (C) pure tag pattern; (D) two separate top-level tables with shared FK.
- **Decision-blocker:** Q1.
- **Resolution dependency:** Phase B.5+ joint Opus + Knox + user review.

#### Q16 — Encounter ↔ Care Episode multiplicity (one encounter belongs to N episodes?)

- **Source:** Session 2 Turn 2 (Mohs+Botox+GLP-1 multi-episode-per-encounter); this doc §10 + §13 scenario 11.
- **Question:** Does an Encounter have one Care Episode (FK), zero-or-one (nullable FK), or N (join table)?
  - One Care Episode: forces "primary episode" choice on multi-episode visits.
  - Nullable: allows "no episode" (drop-in retail / walk-in cosmetic).
  - N (join table): admits Session 2 Turn 2 Mohs+Botox+GLP-1 scenario natively, but Episode ↔ Line linkage is then more complex.
- **Tentative position:** Lines link to Episodes; Encounter is Episode-agnostic OR links to a "primary" episode for display purposes.
- **Decision-blocker:** Q1 + Q6.
- **Resolution dependency:** Phase B.5+.

#### Q17 — Charge-line lifecycle independence from performed-line lifecycle

- **Source:** Session 2 Turns 21-22 (front desk can modify discount/loyalty without clinical attestation; cannot modify units without provider attestation); §12 below.
- **Question:** If clinical performed line is provider-attested + immutable post-signoff, but commercial charge line is mutable for discount/loyalty/refund post-checkout, how does the substrate model temporal lifecycle independence?
- **Tentative position:** Performed line has `clinical_lifecycle_state ENUM(draft, attested, signed-off, amended)`; charge line has `commercial_lifecycle_state ENUM(proposed, finalized, refunded, voided)`. Independent lifecycles linked by `derived_from_performed_line_id` FK.
- **Decision-blocker:** Q8 + Q9 + Q10.
- **Resolution dependency:** Phase B.5+ Commerce DL.

#### Q18 — Closeout substrate vs derived projection

- **Source:** Session 2 Turn 29; Q11; this doc §10 option C.
- **Question:** Is "Visit Closeout" a 1st-class substrate (table) with 7 lane sub-substrates, or a derived view over encounter lines + per-service closeout-template config?
  - 1st-class: explicit `visit_closeout` row per encounter with 7 lane child rows; closeout state explicit; closeout completion as separate state.
  - Derived: no `visit_closeout` table; closeout view computed at render time from performed lines + service closeout templates + outstanding tasks/messages/follow-ups.
- **Tentative position:** Derived (per DL-13 rail-agnostic preference for substrate minimalism), with `service_closeout_template` config table to drive suggestions.
- **Decision-blocker:** Q11.
- **Resolution dependency:** Phase B.5+.

#### Q19 — Care Episode auto-creation vs explicit creation

- **Source:** Session 2 Turn 16 (intake-as-living-memory across all visits) + Turn 2 (multi-episode-per-encounter); Q6.
- **Question:** Does OMNI auto-create Care Episodes when the first encounter for a "care line" lands (Rx written, procedure scheduled, intake completed)? Or does it require explicit clinic configuration of which Episodes exist?
  - Auto-create: lower friction; risk of episode proliferation + bad labeling.
  - Explicit: cleaner; risk of episode-less-line orphans.
  - Hybrid: clinic-configured episode templates + auto-instantiation when matching event.
- **Tentative position:** Hybrid — clinic configures Episode catalog; system auto-instantiates per-patient when first qualifying event fires.
- **Decision-blocker:** Q6.
- **Resolution dependency:** Phase B.5+.

#### Q20 — Async encounter as 1st-class encounter vs Interaction-promoted-to-Encounter

- **Source:** Session 2 Turns 6, 8 (Knox: async intake review + provider Rx + signoff = async encounter); Q7.
- **Question:** Is an async provider review encounter (intake submitted → provider reviewed → Rx written → chart signed) the SAME substrate as an in-clinic encounter? Or is it a different encounter sub-type? Or is it an Interaction promoted to Encounter?
  - Same: cleanest; one encounter table; profile drives requirements.
  - Sub-type: encounter_profile=`async_review` + different child tables.
  - Promoted-Interaction: starts as inbound intake submission interaction; CNS decision creates an async_encounter when provider acts.
- **Tentative position:** Same substrate, profile=`async_review`, with profile-driven policy gates (no room required / no scheduled time / provider authorship required / chart-signoff required).
- **Decision-blocker:** Q1 + Q7.
- **Resolution dependency:** Phase B.5+.

#### Q21 — Day 0 thin slice scope boundary

- **Source:** This doc §8 (Bucket 5 thin vertical slice).
- **Question:** Where exactly is the "minimum viable scheduling" line? Does Day 0 include video session placeholder? Inventory line placeholder? Closeout suggestion? Care Episode skeleton?
- **Tentative position:** §8 below proposes a minimum surface. But the boundary is a real design decision pending Knox + user input.
- **Decision-blocker:** Phase B.5+ + Phase 0 brain-audit findings.
- **Resolution dependency:** Joint review of this doc.

### 6.3 Cumulative unresolved count

**21 OPEN questions** at this snapshot (Q1-Q14 + Q15-Q21). All deferred to Phase B.5+ doctrine sharpening per Knox + user joint discipline.

---

## 7. Bucket 4 — Would require doctrine amendment later

Per Layer 2 §G + Session 2 evidence. Enumeration of doctrine work; NOT drafting it here.

### 7.1 DL-15 amendments needed (7 enumerated in Layer 2 G.1)

1. **Multi-flag lifecycle stack** invariants (Confirmed AND Arrived simultaneously)
2. **4-axis booking composer** invariants (Capacity × Staff × Room × Resource; booking impossible if any axis unavailable)
3. **3-component appointment block** invariants (Prep + Booking + Finish per staff per service; total = sum)
4. **Service Type enum** expansion (Appointments / Arrivals / Classes / Courses / Memberships)
5. **5 Scheduling Restrictions on Pricing Options** invariants (Max Sessions / Disallow Consecutive Days / Daily Restriction / Day of Month Scheduling Opens / Time Access)
6. **Staff Availability Window 4-axis primitive** (What/Where/When/Other-Privacy)
7. **Recurring + one-time-override availability composition**

### 7.2 DL-16 amendments needed (4 enumerated in Layer 2 G.3)

1. **21+ Client Alert event types** enumerated as concrete CNS event vocabulary
2. **Alert 2-level severity enum** (Red / Yellow)
3. **30+ Outbound communication trigger types**
4. **Multi-actor envelope** (4+ actor_kind: staff / clinic / system / 3rd-party-integration like `_ClassPass API_`)

### 7.3 4 new DLs to draft (Layer 2 G.2)

#### G.2.1 Commerce DL (Phase C kickoff)

19+ commerce primitives to encode: Pricing Option (4-type) / Entitlement Activation Strategy / Entitlement Redemption Priority / Contract-Autopay with template-expansion / Package mixed-type bundle / Gift Card / Promo Code (13+ columns) / Discount Program (rotating-tier patterns) / Intro Offer / Treatment Deposit / Tip (1st-class line item) / Sale + Sale Line (1-to-N) / Refund / Return-Sale with refund-destination routing / Payment Method federation (25+ enum) / Tax Rates (2-tier) / Revenue Categories / Accounting Basis (Accrual vs Cash) / Cancellation Policy / Suspension substrate.

#### G.2.2 Settings-Infrastructure DL

10 settings sections + ~100 sub-pages substrate + General Setup and Options master feature flag + Words and Phrases vocabulary override + Client View Settings + 4-tier client-metadata substrate (Required Fields / Indexes / Index Values / Form Custom Fields) + 3-state required-field enum + Dual-mode Consumer-vs-Business required field policy + Per-clinic auto-fill defaults + URL-addressable deep-links + Per-cart-mode capability scoping.

#### G.2.3 RBAC DL

Permission Group (5 per brand) + Permission Atom + Permission Group ↔ Atom grants + Staff ↔ Permission Group assignment + Per-staff 8+ capability flags + 2-layer composition (brand × staff capability flags) + **NEW Session 2 Q10:** 4-tier provider authorship+attestation model (provider-entered / staff-drafted-pending / front-desk-commercial-only / admin-override-with-audit-scar).

#### G.2.4 Clinical-Coding DL (Phase D flag; may defer)

ICD-10/11 / CPT / HCPCS code library + Diagnosis assignment to Encounter + Procedure code assignment to Encounter line items.

### 7.4 Possible additional DLs surfaced in Session 2

#### Care-Coordination DL (NEW from Q6)

Care Episode primitive + Episode catalog + Episode lifecycle (open / active / paused / closed / completed / lost-to-follow-up) + Episode ↔ Encounter linkage + Episode ↔ Line linkage (multi-episode-per-encounter).

#### Federation-Topology DL extension (NEW from Q12; cross-ref [FUTURE_ARC](../FUTURE_ARC_2026-05-12_federation_permeability_topology.md))

11-axis location/venue/federation taxonomy + cross-federation patient-relationship-of-record + permission scoping across federation modes.

#### Clinical-Media DL (NEW from Q14)

Before/after photo substrate (metadata + body-region + treatment-area + consent + series-grouping + before-after-pair + annotation-support) + clinical media linkage to encounter lines + provenance + retention class.

### 7.5 Possible new doctrine lock — Substrate Concept Separation meta-principle (Q13)

Knox false-equivalence audit pattern from Session 2 Turn 19. Could become a new DL-XX or remain a Phase B.5+ design audit checklist:

> *"Audit every major scheduling concept for false equivalence. Anywhere we are tempted to collapse two things into one field, stop and separate them if they differ in authority, lifecycle, visibility, billing, clinical responsibility, or CNS behavior."*

6-axis separation: authority / lifecycle / visibility / billing / clinical responsibility / CNS behavior.

---

## 8. Bucket 5 — Thin vertical scheduling slice (Day 0)

The MINIMUM substrate + UI required to:
- Schedule + checkout a medspa Botox visit with Aspire reward + multi-tender payment
- Schedule + complete a video visit with no physical room
- Schedule + execute a mole-check-pivots-to-Botox scenario without corrupting the chart
- Emit DL-16-compliant CNS events at every meaningful state transition
- Admit Phase B.5+ doctrine sharpening without rewrite

### 8.1 Substrate primitives (Day 0)

Tentative enumeration. Each row admits later extension without rewrite.

- `service` + `service_category` + `add_on` (Knox marker 5 service catalog mesh; minimum 30 cols admitted; Day 0 implements ~10 cols)
- `staff` (with `staff_type ENUM(individual, team, role, system)`)
- `staff_service_assignment` (with `prep_time + booking_time + finish_time` per staff per service)
- `room` + `room_service_compatibility`
- `resource` + `resource_service_compatibility`
- `appointment` / `encounter` (Day 0 collapses these per Q1 SHELVE; profile column reserved for future)
- `encounter_profile` enum (Day 0 minimum: `office_visit / video_visit / async_review / aesthetic_treatment_visit / resource_only_session`)
- `planned_intent_line` (with status enum: `completed_as_planned / not_performed / superseded / scheduled_in_error / patient_declined`)
- `performed_intervention_line` (separate from planned_intent_line; provider-attested; minimal cols)
- `availability_window` (4-axis Day 0: what/where/when/privacy)
- `commerce_order` (cart parent) — PLACEHOLDER ONLY; full Commerce DL deferred
- `commerce_order_line` (with `line_type` enum + `derived_from_performed_line_id` FK; service / product / pricing_option / gift_card / tip / etc. enumerated as enum even if only `service` is implemented Day 0)
- `payment_attempt` (1-to-N from order; supports split payment placeholder)
- `client` + `client_address` + `client_phone` + `client_emergency_contact` (per system map 1J)
- `client_tag` + `client_tag_assignment`
- `care_episode` — SKELETON ONLY (per Q6 OPEN; column reserved + nullable FK on encounter)
- `video_session` — PLACEHOLDER ONLY (encounter ↔ video_session 1-to-zero-or-one; adapter logic deferred)
- `audit_event` (DL-14 actor-stamped event envelope; required Day 0)
- `outbound_template` + `orchestration_action` (system primitive #10) — minimum for appointment confirmation/reminder flows

### 8.2 RPCs / lifecycle operations (Day 0)

- `service_create` / `service_update` (catalog admin)
- `staff_service_assignment_create` / `_update`
- `appointment_propose` (slot search with 4-axis validation)
- `appointment_book` (commit hold)
- `appointment_reschedule` / `_cancel` / `_no_show`
- `appointment_check_in` (sets `arrived` flag in addition to `confirmed`)
- `appointment_complete` (transitions to `care_complete` state)
- `planned_intent_line_mark_not_performed` (with reason enum)
- `performed_intervention_line_create` (provider-attested; pushes derived charge line to cart)
- `cart_settle` (apply discounts/loyalty/payment; PLACEHOLDER for full Commerce DL)
- `appointment_emit_cns_event` (DL-16 envelope per state transition)

### 8.3 Events emitted (Day 0; DL-16 envelope; minimum 15 event_kinds)

`appointment_requested / appointment_booked / appointment_rescheduled / appointment_cancelled / appointment_no_show / patient_checked_in / encounter_started / planned_service_not_performed / performed_intervention_recorded / cart_settled / checkout_completed / encounter_completed / follow_up_scheduled / video_session_started / video_session_completed`

### 8.4 UI surfaces (Day 0)

- Day-view + week-view schedule (provider-keyed + room-keyed)
- Appointment booking modal with 4-axis availability check
- Encounter drawer with "Planned today" + "Performed today" sub-sections (per Session 2 Turn 4)
- Performed-line entry drawer with quick-add presets per service (Botox unit map / SkinPen areas / Laser session checklist — minimum 3 templates Day 0)
- Cart view (shared, permissioned per Session 2 Turn 21 model)
- Client profile cockpit (minimum: profile / schedule / purchases tabs; full 8-tab Mindbody parity deferred)
- Video visit "Click here to start video" button on encounter card (calls placeholder vendor adapter)

### 8.5 What Day 0 does NOT include (explicit deferrals)

- Full Commerce DL (Pricing Option 4-type / Contract-Autopay template-expansion / Package mixed-type / Gift Card / Promo Code / Discount Program / Loyalty / Aspire integration / Cherry / etc.)
- Full inventory by lot tracking
- Full RBAC permission-atom drill-down
- Full settings-as-OS surface (~100 sub-pages)
- Full video stack (Zoom adapter; recording; transcript)
- Full closeout drawer 7 lanes (Day 0 has performed-line + simple aftercare-message hook only)
- Procedure encounter / surgical case profile depth
- Clinical-coding integration (ICD / CPT / HCPCS)
- Pure Hims async-review encounter polish (Day 0 admits the profile; UX polish deferred)
- Care Episode catalog management UI (Day 0 has the FK + skeleton only)
- Mobile-native integrations (Tap to Pay on iPhone)

---

## 9. Bucket 6 — Deferred (Phase 2+)

Explicit "NOT now" scope per `phase_b5 plan` "What Phase B.5 does NOT do" + Day 0 boundary above.

### 9.1 Doctrine-level deferrals (Phase B.5+)

- Q1 encounter container architecture **FINAL** decision (substrate identity model + profile enum + policy gates)
- DL-15 7 amendments (per §7.1)
- DL-16 4 amendments (per §7.2)
- Commerce DL draft (Phase C kickoff)
- Settings-Infrastructure DL draft
- RBAC DL draft (incl. 4-tier authorship+attestation per Q10)
- Clinical-Coding DL draft (Phase D flag)
- Care-Coordination DL draft (possible; per Q6)
- Federation-Topology DL extension (per Q12; cross-ref FUTURE_ARC)
- Clinical-Media DL draft (per Q14)
- Substrate-Concept-Separation meta-principle (per Q13; possible new DL-XX)

### 9.2 Substrate-level deferrals (Phase 1+ / Phase 2+)

- Full commerce ledger / RCM / claims
- Full inventory by lot tracking
- Full RBAC permission-atom drill-down
- Full settings-as-OS surface (~100 sub-pages)
- Full video stack (recording / transcript / multi-vendor adapter)
- Full closeout drawer 7 lanes (Q11)
- Surgical case / endoscopy procedure profile depth
- ICD/CPT/HCPCS clinical-coding integration
- Cross-federation patient location-of-record reconciliation
- Hims-style async-review encounter polish (Day 0 admits; UX deferred)
- Patient Relationship vs Client Profile reconciliation (per Q19 + Knox marker 11 merge/unmask)
- Provider commission attribution (line-level)
- Substrate-derived metrics (per §5.14)

### 9.3 Future product wedges named but not scoped

- Sleep labs / cardio / endocrine / plastic surgery clinic expansion (per user gap #5 "$10k/mo SaaS")
- Hims-grade async clinical structure (per Session 2 Turn 16 "Hims model lacks clinical structure")
- AI Compose Assist polish (DL-14 invariant 18)
- Multi-modality scaling

---

## 10. Proposed core object model (tentative; 3 options for review)

### 10.1 Three architectural options (per Q1 + Q15)

#### Option A — Single `encounter` table + `encounter_profile` enum + policy table

Knox tentative position (Session 1 Turn 5 + Session 2 Turn 1).

```
encounter (
  id, patient_id, scheduled_start, scheduled_end,
  encounter_profile_id, status_flags (multi-flag),
  primary_care_episode_id (nullable FK),
  venue_id (FK to venue substrate),
  ...
)
encounter_profile (
  id, name, requires_provider, requires_room, requires_equipment,
  allows_procedure_lines, requires_consent, requires_clinical_clearance,
  allows_checkout, allows_inventory_consumption, allows_rx_labs_orders,
  default_documentation_requirement, ...
)
encounter_line (
  id, encounter_id, line_kind (enum: planned_intent / performed_intervention / procedure / order / lab / rx / document / inventory_use / billable / payment / entitlement_redemption / follow_up / task / message),
  care_episode_id (FK; nullable),
  ...
)
```

Pros: One substrate; profile-driven policy; clean future extension; admits same-table-multi-episode-per-encounter via line.care_episode_id.
Cons: Wide `encounter` table; profile-row policy table is itself a config substrate; risk of "junk drawer" encounter.

#### Option B — Polymorphic `encounter` + per-profile child tables

```
encounter (id, patient_id, scheduled_start, scheduled_end, profile_kind, ...)
office_visit_encounter (encounter_id FK, room_id, ...)
procedure_encounter (encounter_id FK, room_id, equipment_set_id, anesthesia_required, ...)
async_review_encounter (encounter_id FK, intake_session_id, provider_signoff_id, ...)
video_visit_encounter (encounter_id FK, video_session_id, ...)
```

Pros: Clean per-profile schema; no wide nullable columns; child tables admit per-profile evolution.
Cons: N tables; harder cross-profile reporting; per-profile RPC explosion; resists adding new profile types.

#### Option C — Pure tag/role pattern on flat `encounter` (no profile enum)

```
encounter (id, patient_id, scheduled_start, ...)
encounter_role (encounter_id, role_kind enum, role_target_id) -- requires_room / requires_provider / allows_procedure / etc.
```

Pros: Maximum flexibility; no fixed taxonomy.
Cons: Hard to enforce policy via substrate; UX confused without enum; doctrine unfriendly.

#### Option D — Two separate top-level tables with shared FK

```
clinic_visit (id, patient_id, ...)
procedure_case (id, patient_id, ...)
shared_encounter_id (FK that both reference; OR shared CNS envelope across both)
```

Pros: Procedure-case rigor isolated; clinic-visit lightweight.
Cons: Loses the medspa truth ("every visit can become a mini-procedure" per Session 1 Turn 5 + Session 2 Turn 1); duplicate substrate; harder cross-table reporting.

### 10.2 Tentative recommendation (for review)

**Option A** appears most consistent with:
- Knox Session 1 Turn 5 + Session 2 Turn 1 tentative position
- Layer 2 Section I.3 moat #3 (encounter container architecture flexibility)
- Knox marker 5 service catalog mesh (single mesh substrate, not separate per-modality tables)
- Multi-modality scaling vision (per user gap #5 sleep labs / cardio / endocrine / plastics)

But Option A has 2 substrate risks:
1. `encounter` table grows wide with nullable per-profile columns. Mitigation: keep per-profile-specific data in `encounter_line` instead (line types per profile).
2. `encounter_profile` policy table is itself a config substrate. Mitigation: it's a small enum-like config table (10-20 rows max).

**This recommendation is tentative. Knox + user must decide.** The other 3 options remain on the table.

### 10.3 Care Episode integration (Q6 + Q16)

Tentative position (for review):

```
care_episode (
  id, patient_id, episode_template_id (FK to clinic-configured catalog),
  lifecycle_state ENUM(open, active, paused, closed, completed, lost_to_follow_up),
  opened_at, closed_at, ...
)
encounter (..., primary_care_episode_id nullable FK)
encounter_line (..., care_episode_id nullable FK)
```

Per Q16: Encounter has nullable PRIMARY episode FK (for display/aggregation); each LINE has its own episode FK (admits multi-episode-per-encounter natively per Session 2 Turn 2 Mohs+Botox+GLP-1).

Trade-off: Display rule needed (which episode to show on schedule card? Default = primary; allow override).

### 10.4 Interaction substrate (Q7 + Q20)

Tentative position (for review):

Interactions live in existing messaging substrate (DL-11 protected). Encounter substrate has optional FK array `linked_interaction_ids[]` for evidence projection. Encounter is NOT auto-created from interactions; CNS decision (DL-16 cns_decision category) explicitly creates an encounter when accountable clinical action occurs.

```
-- existing messaging substrates: message / call / voicemail / contact_log
-- existing event taxonomy: lab_result_event / patient_state_event
-- NEW (tentative): encounter_evidence_link (encounter_id, evidence_kind enum, evidence_ref_id)
```

This avoids "shoving every message into an encounter container" (Session 2 Turn 6 + Turn 8 user pushback).

### 10.5 Planned vs Performed substrate separation (Q8)

Tentative position (for review):

Two separate `encounter_line` rows (or two separate FK-linked tables) for planned intent vs performed intervention. Planned intent line never gets overwritten; status enum updates. Performed intervention line is NEW + provider-attested.

```
encounter_line (line_kind='planned_intent', service_id, status ENUM(completed_as_planned, not_performed, superseded, scheduled_in_error, patient_declined, insufficient_time))
encounter_line (line_kind='performed_intervention', service_id_or_intervention_ref, units, areas, provider_id, attestation_state, ...)
```

Critical invariant (proposed, for review): planned_intent_line.status `completed_as_planned` REQUIRES at least one matching `performed_intervention_line` linked to same encounter.

### 10.6 3-lane source-of-truth (Q9)

Tentative position (for review):

```
performed_intervention_line       -- CLINICAL truth (provider-owned, attested)
commerce_order_line               -- COMMERCIAL truth (front-desk-owned for discount/payment; derived_from FK to performed_line)
receipt_projection                -- VIEW (computed at render; not substrate)
inventory_use_event               -- INVENTORY truth (substrate-derived from performed_line for inventory_consumed items)
provider_note                     -- DOCUMENTATION truth (renders from performed_line + attestation)
attribution_line                  -- WHO truth (performing/assisting/supervising/seller/checkout-staff)
```

Critical invariant (proposed, for review): commerce_order_line MAY be modified for discount/loyalty/payment by front-desk role; commerce_order_line MAY NOT have its `service_or_product_ref` or `quantity` modified without matching modification to performed_intervention_line + provider attestation.

### 10.7 4-tier provider authorship+attestation (Q10)

Tentative position (for review):

```
performed_intervention_line (
  ...,
  authorship_state ENUM(provider_entered, staff_drafted, admin_override),
  attestation_state ENUM(attested, pending, n_a),
  authoring_actor_id, attesting_actor_id, attested_at, ...
)
```

Critical invariant (proposed, for review): admin_override authorship_state ALWAYS creates an `audit_event` with `event_kind='checkout_override_with_provider_reconciliation_required'`. Reconciliation task created in CNS until provider attests.

---

## 11. Event + action mapping (tentative; per DL-16 7-category partition)

### 11.1 Scheduling-domain events (domain_event category, DL-16 invariant 3)

`appointment_requested / appointment_booked / appointment_rescheduled / appointment_cancelled / appointment_no_show / patient_checked_in / provider_started_visit / service_added_same_day / planned_service_not_performed / procedure_performed / intervention_completed / photos_captured / consent_signed / note_signed / checkout_completed / follow_up_due / video_started / video_completed / lab_ordered / rx_written / clinical_clearance_required / payment_required / encounter_started / encounter_completed`

24 event_kinds — exceeds Day 0 minimum of 15 (per §8.3). Day 0 subset deferred to first 15 most-load-bearing.

### 11.2 CNS-decision events (cns_decision category, DL-16 invariant 3)

`scheduling_decision_made / encounter_promotion_decision (interaction→encounter) / clinical_clearance_decision / inventory_clearance_decision / authorization_decision / follow_up_decision / suppression_decision / escalation_decision`

### 11.3 Orchestration actions (orchestration_action category, system primitive #10 hosts all)

`slot_search / scheduling_hold / book_appointment / reschedule_appointment / cancel_appointment / request_deposit / send_reminder / request_form / create_provider_task / create_front_desk_task / start_video_session / send_aftercare / schedule_follow_up / suppress_marketing / escalate_clinical_concern / send_appointment_confirmation / process_inbound_confirmation_reply / settle_cart`

### 11.4 Rail projections (rail_projection category)

`sms_send / email_send / in_app_notification / push_notification / phone_call_dispatch / voicemail_send / video_link_send / portal_message_send`

### 11.5 Outcome events (outcome_event category)

`appointment_confirmed_by_patient / appointment_confirmed_by_staff / message_delivered / message_replied / payment_succeeded / payment_failed / video_session_succeeded / video_session_failed / reminder_sent / reminder_unsubscribed`

### 11.6 Patient state events (patient_state category)

`intake_submitted / clinical_concern_reported / lab_result_received / consent_signed / photo_uploaded / form_completed`

### 11.7 System events (system_event category)

`schedule_published / availability_window_added / availability_window_removed / service_added_to_catalog / pricing_option_activated / staff_clocked_in / room_locked_for_maintenance`

### 11.8 All envelope-compliant per DL-16

Every event above carries the 25-field universal envelope (DL-16 invariant 2). No exceptions.

---

## 12. Data ownership boundaries (tentative)

Per Q9 3-lane source-of-truth + DL-13 rail-agnostic substrate spine + DL-14 CNS center of gravity.

### 12.1 Substrate ownership

| Truth domain | Substrate owner | Mutable by | Frozen after |
|---|---|---|---|
| Scheduling | `appointment` / `encounter` | scheduler RPCs | encounter_completed |
| Clinical performed | `performed_intervention_line` | provider (or staff-draft) | provider attestation + chart signoff |
| Commercial settled | `commerce_order_line` | front-desk role; admin override | cart settlement (with audit trail for amendments) |
| Inventory | `inventory_use_event` | system-derived from performed_line; admin manual entry with audit | n/a (event log) |
| Clinical documentation | `provider_note` | provider | provider signoff (immutable post-signoff; amendments via addendum) |
| Attribution | `attribution_line` | system-derived from performed_line; admin manual override | cart settlement |
| Messaging | DL-11 protected messaging substrate | messaging RPCs | n/a (rail projections always derivable) |
| CNS decisions | `cns_decision` (DL-16) | CNS RPCs | n/a (event log) |
| Orchestration actions | `orchestration_action` (primitive #10) | CNS RPCs | execution; outcome event closes loop |
| Audit | `audit_event` (DL-14) | system; all actor-stamped | n/a (append-only) |

### 12.2 Cross-domain edit boundaries (false-equivalence protection per Q13)

- Front desk can edit commercial settlement; CANNOT edit clinical performed
- Provider can edit clinical performed; CANNOT edit commercial settlement directly
- Admin can override either with audit scar
- Staff (MA) can draft clinical performed; provider must attest
- CNS reads everything; emits orchestration actions; does NOT directly mutate any of the above (always via RPC + DL-16 idempotent execution invariant)
- Receipt is rendered, never edited (projection only)

### 12.3 Care Episode ownership

`care_episode` lifecycle owned by: (per Q19 tentative position) clinic-configured Episode catalog template + system auto-instantiation on first qualifying event. Provider can transition lifecycle state (open → active → paused → closed → completed); admin can override; CNS reads + emits follow-up actions.

---

## 13. Pressure-test walk-through (selected from 45 Q2 scenarios)

For each scenario: what was scheduled / what happened / which substrates touched / proposed architecture's behavior.

### 13.1 Scenario 9: Patient books Botox, provider performs Botox 36 units

- **Scheduled:** `appointment(profile=aesthetic_treatment_visit)` + `planned_intent_line(service=Botox)`
- **Performed:** `performed_intervention_line(intervention=Botox_neuromodulator, units=36, areas=[...], provider, attestation_state=attested)` created chairside via provider drawer
- **Substrates touched:** scheduling / encounter / planned_line / performed_line / commerce_order_line (derived) / inventory_use_event / provider_note (pending signoff) / orchestration_action (aftercare-message scheduled at +0 / 2-week tox-check offer scheduled at +14d)
- **Architecture behavior:** Cart auto-populates from performed_line. Front desk applies Aspire/loyalty. Cart settles. Provider attests note end-of-day. CNS schedules aftercare + tox-check follow-up.
- **Where it breaks (false-equivalence audit):** if cart is allowed to silently add units = bug. Substrate must enforce front-desk-cannot-modify-clinical-truth.

### 13.2 Scenario 10: Patient books mole check, mole check NOT performed, Botox performed instead

- **Scheduled:** `appointment(profile=office_visit_with_minor_procedure_allowed)` + `planned_intent_line(service=Mole_Check)`
- **Performed:** `planned_intent_line.status='not_performed'` with reason; NEW `planned_intent_line(service=Botox, added_same_day=true)` + `performed_intervention_line(Botox 24 units, areas, provider, attestation)`
- **Substrates touched:** same as 13.1 + `cns_decision(planned_service_not_performed → derm_surveillance_episode_remains_open + follow_up_task_create)`
- **Architecture behavior:** Original planned line preserved with not_performed status + reason. New planned line added same-day with `added_same_day=true` flag. Performed Botox line created. CNS does NOT mark Mole Check episode complete; creates reschedule task.
- **Where it breaks:** if `appointment.service_id` is mutated from Mole Check to Botox, dermatology surveillance is silently lost. Substrate must enforce planned-line immutability post-not-performed.

### 13.3 Scenario 11: Mole check + biopsy + GLP-1 refill in same physical visit

- **Scheduled:** `appointment(profile=office_visit_with_minor_procedure_allowed)` + `planned_intent_line(service=Mole_Check, care_episode=Dermatology_Surveillance)`
- **Performed in encounter:**
  - `performed_intervention_line(Mole_Check_completed, episode=Dermatology_Surveillance)`
  - `performed_intervention_line(Biopsy_performed, episode=Dermatology_Surveillance, pathology_order_id=...)` (added during visit)
  - `performed_intervention_line(GLP1_refill_review, episode=Weight_Loss_GLP1, rx_order_id=...)` (added during visit)
- **Substrates touched:** 3 separate care_episode FKs on lines / 3 different documentation requirements / 3 different follow-up cadences / 3 different commerce line types (biopsy = procedure CPT future / GLP-1 refill = subscription billing / mole-check = E/M visit level)
- **Architecture behavior:** ONE encounter row. THREE lines linked to THREE different care_episode rows. CNS emits 3 different downstream events: derm follow-up in 6mo + biopsy pathology workflow + GLP-1 next refill in 30d. ONE after-visit summary projects all 3.
- **Where it breaks:** if encounter has single `primary_care_episode_id` FK that forces a choice — derm vs aesthetic vs weight-loss. Substrate must allow line-level episode FK (per §10.3 tentative).

### 13.4 Scenario 12: Weight-loss async intake review → Rx → no scheduled visit (pure Hims)

- **Scheduled:** none (no `appointment` row).
- **Path:** `patient_state_event(intake_submitted)` → `cns_decision(promote_to_async_encounter)` → `encounter(profile=async_review, no_appointment_id)` → `performed_intervention_line(provider_review_completed)` + `performed_intervention_line(rx_written, rx_id=...)` + `provider_note(signed)`
- **Substrates touched:** patient_state / encounter / performed_lines / provider_note / orchestration_action (Rx-to-pharmacy, subscription_billing, follow-up async cadence)
- **Architecture behavior:** Encounter exists WITHOUT corresponding appointment. Profile=async_review drives policy: no room required / no scheduled time / provider authorship required / chart signoff required. CNS handles all downstream coordination.
- **Where it breaks:** if Encounter substrate REQUIRES an appointment_id FK. Substrate must allow nullable appointment_id (or have encounter_profile=async_review path that bypasses).

### 13.5 Scenario 14: Medspa HydraFacial requires provider + room + machine

- **Scheduled:** `appointment(profile=aesthetic_treatment_visit)` + 4-axis check: provider available / room available / HydraFacial machine resource available / patient eligible
- **Architecture behavior:** Booking RPC validates ALL 4 axes. If ANY unavailable, booking impossible (per Layer 2 G.1 Amendment 2 + Session 2 Turn 17 OPUS PROMPT §5).
- **Where it breaks:** if any single axis is silently allowed to be unavailable (e.g., machine not available but appointment books). User gap #1 directly addresses this.

### 13.6 Scenario 15: Red light therapy requires room/device but NO provider

- **Scheduled:** `appointment(profile=resource_only_session)` + 4-axis check: provider=N/A / room available / red-light-device resource available / patient eligible
- **Architecture behavior:** `encounter_profile.requires_provider=false`. Booking RPC skips provider-availability check. Session log emitted at completion; no provider note required.
- **Where it breaks:** if every appointment requires a `provider_id` FK NOT NULL. Substrate must allow nullable provider on resource_only_session profile.

### 13.7 Scenario 17: Patient schedules wrong appointment online

- **Scheduled:** patient self-books `appointment(planned_intent=Mole_Check)` online; staff identifies booking is wrong type at check-in.
- **Path:** Two valid paths to surface:
  - (A) Edit appointment.service to correct type → BAD (loses planned intent + corrupts metrics)
  - (B) Mark planned_intent_line.status='scheduled_in_error' + add NEW planned_intent_line for correct service → GOOD
- **Architecture behavior:** Substrate enforces path B. UI surfaces "Booking type mismatch — was the patient supposed to be in for X? Mark original as scheduled_in_error and add Y instead." Metrics track online_booking_mismatch_rate (per §5.14).
- **Where it breaks:** if `appointment.service_id` is mutable. Substrate should enforce planned_intent_line as the mutable layer; appointment row reflects what was originally scheduled.

### 13.8 Scenario 21: Patient texts "C" to confirm appointment

- **Path:** Inbound SMS → `domain_event(sms_inbound)` → `cns_decision(classify_as_appointment_confirmation_intent + safe_match_to_appointment)` → `orchestration_action(confirm_appointment)` → scheduler validates → `appointment.status_flags ⊕ confirmed` → `outcome_event(appointment_confirmed_by_patient)` → schedule UI projection updates.
- **Architecture behavior:** Inbound message stays in messaging substrate (DL-11). CNS decision classifies. Scheduler RPC executes. Outcome event closes loop. UI projects.
- **Where it breaks:** if SMS-to-confirmation logic is hardcoded in the SMS adapter rather than going through CNS decision → DL-14 violation (rails-orchestrate anti-pattern).

### 13.9 Scenario 22: Patient replies to reminder with clinical concern

- **Path:** Inbound SMS "Actually I have a rash" → `domain_event(sms_inbound)` → `cns_decision(classify_as_clinical_concern → suppress_default_confirmation_flow + escalate_to_provider_review)` → `orchestration_action(create_provider_task + suppress_normal_confirmation)` → outcome event
- **Architecture behavior:** CNS detects clinical concern keyword/sentiment, suppresses normal confirmation flow, escalates to provider. Encounter NOT auto-created from message; only if provider responds with clinical action (per §10.4 Q7 tentative).
- **Where it breaks:** if naive intent-classifier blindly confirms "any reply = confirm." Must run safety/clinical-triage classifier first per DL-14 invariant 7 + 13.

### 13.10 Scenario 23: Appointment checkout includes service + product + membership discount + package credit

- **Path:** `performed_intervention_line(service)` + `commerce_order_line(retail_product, manually added by front desk)` + `commerce_order_line(membership_discount_applied)` + `commerce_order_line(package_credit_redeemed)` + `payment_attempt(card, $X)`
- **Architecture behavior:** Performed line drives service charge line. Retail product is front-desk-added (no clinical attestation needed). Discount + package credit applied via commerce settlement. Multiple payment_attempt rows for split payment.
- **Where it breaks:** if commerce_order_line modifications silently affect performed_intervention_line (e.g., applying a package credit changes units recorded). Per §10.6 critical invariant.

### 13.11 Scenario 24: Visit includes multiple providers

- **Path:** Encounter has multiple `attribution_line` rows: `performing_provider_a` for Botox, `performing_provider_b` for filler, `assisting_ma` for prep, `selling_staff` for retail.
- **Architecture behavior:** Performed_intervention_line.performing_provider_id may differ from appointment.scheduled_provider_id. Attribution_line captures full set. Commission attribution at LINE level, not appointment level.
- **Where it breaks:** if commission is inferred from `appointment.provider_id` (per Session 2 Turn 19 #1).

### 13.12 Scenario 26: Before/after photos captured during visit

- **Path:** Photo captured via camera/upload → `clinical_media (linked_encounter_id, linked_performed_line_id (optional), body_region, series_grouping=patient_botox_series, before_after_pair, consent_visibility, ...)`
- **Architecture behavior:** Photos in their own substrate (per Q14 + §10 tentative). Encounter LINKS photos via FK. Patient timeline projects photos alongside performed lines + notes + payments.
- **Where it breaks:** if photos are stored as note attachments inside `provider_note.blob`. Per Layer 2 finding + Q14.

### 13.13 Scenario 28: Video visit started from scheduled visit

- **Path:** `appointment(profile=video_visit)` → `encounter` → `video_session(encounter_id, scheduled_start, vendor_adapter=zoom_video_sdk, join_link=...)` → provider clicks "Start video" → `video_started` event → patient joins → bidirectional → `video_completed` event
- **Architecture behavior:** Encounter ↔ video_session 1-to-zero-or-one. Vendor adapter abstracted. OMNI owns video_session state; Zoom is rail.
- **Where it breaks:** if encounter state changes depend on Zoom webhook reliability. Per DL-14 (rails are outputs; brain owns state).

### 13.14 Scenario 29: Ad hoc video started from message thread

- **Path:** Provider clicks "Start video call now" on patient profile → `video_session(no_appointment_id, no_encounter_id, ad_hoc=true)` → patient gets link → bidirectional
- **Architecture behavior:** video_session admits zero or one encounter_id (NOT a required FK). If provider takes accountable clinical action during ad-hoc video, an async_review encounter MAY be created post-facto.
- **Where it breaks:** if video_session REQUIRES encounter_id NOT NULL. Substrate must allow ad-hoc video without encounter.

### 13.15 Scenario 35: Dermatology clinic — mole surveillance + cosmetic + Rx care in same patient

- **Path:** Patient has 3 active `care_episode` rows: Dermatology_Surveillance / Aesthetic_Maintenance / Isotretinoin_Course.
- **Architecture behavior:** Each visit creates 1 encounter linked to whichever episode(s) it touches via line.care_episode_id. Patient cockpit shows 3 active care plans, each with its own follow-up cadence, completion criteria, and CNS coordination.
- **Where it breaks:** if patient ↔ care_episode is treated as 1-to-1 ("the patient's care plan"). Multi-episode-per-patient is the medspa+derm+specialty norm.

### 13.16 Coverage summary

Of the 45 scenarios in Q2: this doc walks 16 (representative coverage across booking-axis / planned-vs-performed / multi-episode / async / commercial-clinical separation / multi-provider / media / video / federation / specialty). The remaining 29 scenarios should be walked at Phase B.5+ doctrine sharpening with Knox + user.

---

## 14. False-equivalence audit applied (Q13 6-axis principle)

Per Session 2 Turn 19: anywhere we collapse 2 concepts into 1 field that differ in **authority / lifecycle / visibility / billing / clinical responsibility / CNS behavior**, the substrate breaks. Audit applied to 10 substrate-concept pairs in the proposed model.

| Concept pair | Axes that differ | Substrate separation in proposed model |
|---|---|---|
| Provider ≠ Staff User ≠ Rendering Clinician ≠ Supervising Clinician ≠ Seller | authority / lifecycle / billing / clinical responsibility | `staff` + `attribution_line` per role per encounter |
| Appointment Type ≠ Performed Service ≠ Billable Item ≠ Inventory Item | authority / lifecycle / billing / clinical responsibility | `planned_intent_line` ≠ `performed_intervention_line` ≠ `commerce_order_line` ≠ `inventory_use_event` (per §10 + §12) |
| Encounter ≠ Message Thread ≠ Contact Log ≠ Note | authority / lifecycle / visibility / CNS behavior | `encounter` + DL-11 messaging substrate + `provider_note` (separate); `encounter_evidence_link` for cross-references |
| Patient Identity ≠ Patient Relationship ≠ Client Profile ≠ Portal Account | authority / lifecycle / visibility | per existing system map 1J + Knox marker 11 merge/unmask + Q19 (Phase B.5+) |
| Service Location ≠ Resource Location ≠ Provider Schedule Location ≠ Patient Jurisdiction | authority / lifecycle / billing | 11-axis venue taxonomy per §10 + Q12 |
| Scheduled Visit ≠ Completed Visit ≠ Checked-out Visit ≠ Documented Visit | lifecycle | independent state machines: `appointment.status_flags` + `encounter.lifecycle` + `commerce_order.checkout_status` + `provider_note.signoff_status` (per Session 2 Turn 20) |
| Consent ≠ Clinical Clearance | clinical responsibility | `consent` substrate ≠ `clinical_clearance` per-encounter check; signed consent ≠ authorized treatment |
| Membership ≠ Subscription ≠ Package ≠ Payment | authority / lifecycle / billing | Commerce DL (Phase C) primitives per §7.3 |
| Clinical Performed ≠ Commercial Settled ≠ Receipt Projection | authority / lifecycle / visibility / billing | 3-lane source-of-truth per Q9 + §10.6 |
| Provider Authorship ≠ Staff Draft ≠ Front-desk Commercial ≠ Admin Override | authority / clinical responsibility | 4-tier authorship+attestation per Q10 + §10.7 |

### 14.1 Pattern: every separation gets an "evidence link" projection

Substrate separation does NOT mean UI separation. The chart timeline + visit drawer projects everything together (per Session 2 Turn 11 + Turn 12 industry-analog hierarchy). Substrate owns truth; UI renders synthesized view.

### 14.2 Pattern: doctrine candidacy

Q13's false-equivalence audit pattern could become a new DL-XX or stay a Phase B.5+ design audit checklist. Recommendation (for review): keep as design-audit checklist; promote to doctrine only if Phase 0 audit shows existing brain docs systematically violate.

---

## 15. Risks / where this can go wrong

10 risks. Each risk is a future-failure-pattern the proposed architecture must guard against. None of these are resolved here; they're flagged for review.

### 15.1 Risk: Encounter Container becomes a junk drawer

Knox flagged this twice (Session 1 Turn 1 + Session 2 Turn 1). Mitigation: lines own truth; container coordinates. Substrate enforcement: encounter table is thin; per-domain truth lives in line tables.

### 15.2 Risk: Provider drawer is too generic; provider hunts through 400-item catalog

Session 2 Turn 24 explicit risk. Mitigation: drawer is contextual per appointment / package / room / planned intent / provider favorites. NOT a generic catalog search.

### 15.3 Risk: Front-desk-modifies-cart silently corrupts clinical truth

Session 2 Turn 22 explicit risk. Mitigation: substrate enforcement of "front desk can modify commercial; cannot modify clinical." See §10.6 critical invariant.

### 15.4 Risk: Provider attestation bottleneck (provider in next room, cannot log in to attest)

Session 2 Turn 22 explicit risk. Mitigation: staff-drafted with pending attestation flag; checkout proceeds; provider attests end-of-day. Per §10.7 4-tier model.

### 15.5 Risk: Q1 resolved prematurely without joint review

Knox + user joint shelve binding. Mitigation: this doc surfaces options; final decision requires joint review.

### 15.6 Risk: Hims path forces calendar UI

Session 1 Turn 3 + Session 2 Turn 1 explicit. Mitigation: encounter profile=async_review admits no scheduled-time / no calendar surface; CNS coordinates without UI calendar.

### 15.7 Risk: Mindbody surface is copied literally

Layer 2 + Session 2 Turn 13. Mitigation: copy operational LESSONS, not data model. Use Mindbody as evidence of needed substrates, not as schema spec.

### 15.8 Risk: Building too small (a tiny dumb scheduler that gets ripped apart in 8 months)

Session 2 Turn 30 + Layer 2 I. Mitigation: substrate admits Phase B.5+ + Phase 2+ scope; Day 0 UI is minimal but substrate is forward-looking.

### 15.9 Risk: Building too large (drowning in complexity before V1 ships)

Session 2 Turn 30 user concern. Mitigation: ruthlessly staged. Day 0 is small. Substrate admits more; UI doesn't.

### 15.10 Risk: Phase 0 brain audit finds doctrine gaps that invalidate this pressure-test

Possible. Mitigation: this doc is a REVIEW INPUT; not a lock-in. Knox + user review BEFORE Phase 0 should determine whether Phase 0 needs re-scoping given the 14+7 = 21 unresolved questions.

---

## 16. Why this beats Mindbody / supports Hims / supports derm-specialty-procedure

Per Session 2 Turn 17 OPUS PROMPT deliverable. Maps to Layer 2 Section I (9 OMNI competitive moats).

### 16.1 Why this beats Mindbody

| Mindbody pattern | OMNI substrate response |
|---|---|
| Flat appointment_type forces one-category-per-visit | Encounter container + line types admit multi-episode-per-encounter natively (Mohs+Botox+GLP-1 scenario) |
| Botox 7-tier per-quantity Pricing Options workaround | Commerce DL Pricing Option with `quantity_strategy ENUM(per_unit_quantity, ...)` eliminates 7-tier workaround |
| Verbal hallway handoff "24 Botox and SkinPen add-on" | Provider drawer pushes structured performed_line → cart auto-populates → no front-desk-guessing |
| Discount/loyalty/package applied post-checkout corrupts chart | 3-lane source-of-truth separation; cart-edit cannot silently change clinical |
| Settings as bolted-on configuration | Settings-Infrastructure DL recognizes settings-as-OS pattern |
| "Everyone acts as whoever's logged in at desk" | Shared workstation + per-action actor (DL-14 audit lineage); fast staff switching (PIN/badge/Face ID) |
| No planned-vs-performed separation; wrong booking corrupts metrics | Substrate-enforced planned_intent_line.status preserves history |
| Single-state appointment lifecycle | Multi-flag stack (Confirmed AND Arrived) per DL-15 amendment |
| Notes attached to single appointment | Note substrate separate from encounter; per-encounter doc requirements driven by profile |

### 16.2 Why this supports Hims

- Encounter profile `async_review` admits no scheduled time / no room / no calendar UI
- Care Episode parent (Q6) provides the longitudinal pathway model that Hims actually IS (intake → review → Rx → renew → message → renew)
- CNS coordinates async flows (intake_submitted event → cns_decision(promote_to_async_encounter) → provider review → outbound Rx)
- No-scheduled-visit path admitted natively; calendar UI is optional surface
- Existing intake substrate becomes "living memory layer" with optional encounter linkage (per Session 2 Turn 16)

### 16.3 Why this supports derm / specialty / procedure clinics

- Encounter profile expansion admits procedure_encounter / surgical_case / lab_draw_visit / post_procedure_follow_up
- 4-axis booking composer scales to N-axis for surgical case (provider + room + equipment + assistant + recovery + anesthesia + pathology)
- Performed_intervention_line + procedure_line admit CPT/HCPCS attachment without requiring full RCM today
- Charge lineage (planned → performed → coded → claimed → settled) admits specialty billing pathways
- Care Episode supports longitudinal derm pathways (mole surveillance + cosmetic + Rx care simultaneously)
- Clinical-coding DL deferred but admitted via line.diagnosis_codes[] + line.procedure_codes[]

### 16.4 Why this supports multi-modality scaling vision ($10k/mo SaaS)

Per user gap #5: "we want to be able to service term clinics, sleep labs, cardio groups, endocrine groups, plastic surgery groups, etc etc. that's probably where the SaaS actually makes $10k per month subscription."

Substrate response:
- Encounter profile flexibility: sleep labs (resource_only_session for sleep room overnight) + cardio (multi-modality stress test / echo / Holter) + endocrine (lab-draw resource_only_session) + plastics (surgical_case with multi-stage procedure series)
- 11-axis venue taxonomy admits cross-state licensure (sleep lab Provider C in state A; patient in state B; lab in state C)
- Multi-episode-per-encounter admits derm-style multi-pathway-per-patient
- Capability layer admits per-brand specialty feature gating

---

## 17. Recommended next steps (for joint Opus + Knox + user review)

Not a directive. Tentative sequencing for review.

### 17.1 Review this doc

Joint Opus + Knox + user pass. Per discipline lock 9: final wording requires joint agreement.

### 17.2 Decide: Phase 0 brain audit timing

Two options:
- (A) Phase 0 brain audit FIRST per existing omni_brain_hardening sequencing; uses this doc + Layer 2 + Q1-Q21 as input
- (B) Defer Phase 0; jump to Q1 resolution + DL drafts (Phase B.5+ doctrine sharpening); revisit Phase 0 scope after

### 17.3 Decide: Q1 encounter container architecture resolution path

Knox + user joint review of §10.1 options A/B/C/D. Knox's tentative position is Option A (single + profile_enum + policy_table). Decision required before Commerce DL / RBAC DL drafts can land.

### 17.4 Decide: Q6 Care Episode primitive

Independent decision: 1st-class substrate or derived projection. Affects Care-Coordination DL draft existence.

### 17.5 Sequencing of DL drafts (Layer 2 G.4 + Session 2 expansion)

Tentative order (for review):

1. DL-15 amendments (7) — lowest scope risk
2. DL-16 amendments (4) — event vocabulary
3. Commerce DL draft (high value; many primitives)
4. RBAC DL draft (gates 4-tier authorship+attestation)
5. Settings-Infrastructure DL draft
6. Care-Coordination DL draft (Q6 dependent)
7. Federation-Topology DL extension
8. Clinical-Media DL draft
9. Clinical-Coding DL draft (Phase D flag)

### 17.6 Day 0 thin slice scoping (per §8)

Once Q1 + Q6 resolve, scope the Day 0 substrate + RPCs + events + UI per §8. Substrate slice scoping is post-Phase-B.5+; not now.

### 17.7 Phase 2/3 implementation

Per omni_brain_hardening Phase 2 (e1 reframe) + Phase 3 (e1 implementation). Cannot start until Phase 0 + Phase 1 + Phase B.5+ doctrine settle.

---

## 18. Discipline reaffirmed

This document is:
- A **design pressure-test artifact** for joint Opus + Knox + user review
- **NOT** doctrine
- **NOT** DL-15 amendment
- **NOT** DL-16 amendment
- **NOT** new DL authoring
- **NOT** migrations
- **NOT** code
- **NOT** substrate slice commits
- **NOT** lock-in

All tentative architectural proposals in §§7-17 are framed for REVIEW. Final wording requires joint agreement.

Q1 + Q6-Q14 remain SHELVED. Q15-Q21 surface here for the first time; also SHELVED.

Layer 2 ([2026-05-16_mindbody_architecture_understanding.md](2026-05-16_mindbody_architecture_understanding.md)) is NOT retroactively edited. Implications from this pressure-test fold at Phase B.5+ doctrine sharpening, not here.

Per Knox direction (Session 1 Turn 6): *"Don't force the encounter/profile question tonight. Keep ingesting Mindbody evidence first."*

Per user direction (Session 2 Turn 1): *"this chat is progressive, we were developing ideas as we went, no ideas are locked or decided on per se, we were just surfacing things, gratvitating towards thigs."*

This artifact respects both framings.

---

**End of OMNI Scheduling Architecture Design Pressure-Test (2026-05-17)**

Ready for joint Opus + Knox + user review.
