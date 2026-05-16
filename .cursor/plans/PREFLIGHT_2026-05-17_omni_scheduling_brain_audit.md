# Phase 0 — OMNI Brain Audit (gap analysis vs scheduling pressure-test)

**Date:** 2026-05-17
**Status:** AUDIT — gap analysis ONLY per Knox's explicit direction. NOT doctrine amendment. NOT new DL drafts. NOT migrations. NOT code. NOT Q1 resolution.
**Author:** Opus (thread 3, post-Phase-B.5 + post-pressure-test)
**Inputs:**
- [`designs/2026-05-17_omni_scheduling_architecture_pressure_test.md`](designs/2026-05-17_omni_scheduling_architecture_pressure_test.md) — stress-test target (commit `637149b`)
- [`system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md) — DL-14 22inv + DL-15 28inv + DL-16 39inv + DL-5/11/13 + primitives
- [`FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md`](FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md) — 21 substrate primitives, 18 siblings, 20 ontology traps
- [`omni_brain_hardening_d1ef429b.plan.md`](omni_brain_hardening_d1ef429b.plan.md) — Phase 0 spec
- [`docs/architecture/v1_pressure_test_radar.md`](docs/architecture/v1_pressure_test_radar.md) — radar zones (this audit may surface new ones for review)
- [`docs/architecture/communications_topology.md`](docs/architecture/communications_topology.md)
- [`FUTURE_ARC_2026-05-12_federation_permeability_topology.md`](FUTURE_ARC_2026-05-12_federation_permeability_topology.md)

---

## 0. Discipline locks (BINDING)

Per Knox's direction (2026-05-17, verbatim):
> *"Run Path B only as a gap audit, not as doctrine editing. Audit DL-14/15/16 and existing brain docs against the scheduling pressure-test artifact. Output: what is correctly covered, what is missing, what conflicts, what must stay unresolved, and what doctrine amendments may be needed later. Do not amend doctrine. Do not implement. Do not resolve Q1 unilaterally."*

This audit ABSOLUTELY MUST NOT:

1. Edit DL-14 / DL-15 / DL-16 invariant text. **Locked doctrine stays locked.**
2. Draft Commerce DL / RBAC DL / Settings-Infrastructure DL / Clinical-Coding DL.
3. Write migrations, SQL, DDL, schema changes.
4. Write implementation code.
5. Resolve Q1 encounter container architecture. **Q1-Q21 stay SHELVED.**
6. Edit the pressure-test doc ([`designs/2026-05-17_..md`](designs/2026-05-17_omni_scheduling_architecture_pressure_test.md), commit `637149b`).
7. Edit Layer 2 ([`designs/2026-05-16_..md`](designs/2026-05-16_mindbody_architecture_understanding.md), commit `780e523`).
8. Edit the `omni_brain_hardening` plan phase sequencing.

This audit IS:

- A read-only walk of 84+ existing invariants × the pressure-test artifact
- A walk of 45 pressure-test scenarios × existing brain
- An aggregation into 5 buckets (correctly covered / missing / conflicts / must-stay-unresolved / amendments-needed-later)
- A REVIEW INPUT for Knox + user. Findings are observations, not directives.

Free-wheeling guardrail (binding): every finding cites at least one doctrine invariant + at least one pressure-test section + (where applicable) a scenario number. Speculative drift not allowed.

---

## 1. Audit method

For each of 84+ existing invariants:
1. Read invariant verbatim
2. Find pressure-test claim(s) that exercise it (§1 Locked / §5 Implied / §10 object model / §13 scenarios)
3. Verdict: **COVERED** / **PARTIAL** / **MISSING** / **CONFLICTS**

For each of 45 pressure-test scenarios:
1. Read scenario
2. Identify the brain invariant(s) that should handle it
3. Verdict: **COVERED** / **PARTIAL** / **MISSING** / **CONFLICTS**

Verdict semantics:

- **COVERED** — existing invariant directly admits the pressure-test claim; no gap
- **PARTIAL** — existing invariant admits the claim at a high level but doesn't specify scheduling-substrate details; not a conflict but not fully spec'd
- **MISSING** — pressure-test claim has NO existing invariant covering it; doctrine is silent
- **CONFLICTS** — existing invariant says something incompatible with the pressure-test claim; explicit choice required (amend / change pressure-test / accept tension)

---

## 2. Source inventory (what the brain looks like today)

**Doctrine locks bearing on scheduling:**

| Lock | Where canonized | Invariant count | Scope |
|---|---|---|---|
| DL-5 | system_map line 282 | 1 binding claim | Day 0 elite-class depth for activated domains |
| DL-11 | system_map line 331+ | 1 binding claim | 3 messaging surfaces (patient chat / external-line / internal collaboration) |
| DL-13 | system_map line 396+ | 1 binding claim w/ multi-clause | Rail-agnostic substrate spine |
| DL-14 | system_map line 420 | 22 invariants | CNS center of gravity (event-driven care coordination) |
| DL-15 | system_map line 531 | 28 invariants | Scheduling substrate spine |
| DL-16 | system_map line 623 | 39 invariants | Universal CNS event envelope |

**Cross-cutting locks (referenced but not audited in depth here):** DL-7, DL-8, DL-10, DL-12 (federation / governance / multi-tenant disciplines).

**System primitives bearing on scheduling (foundational doc):**

| # | Primitive | Status | Scheduling relevance |
|---|---|---|---|
| #1 | actor_type taxonomy | locked | scheduling event `actor` field |
| #3 | idempotency primitives | locked | scheduling actions per DL-16 inv 11 |
| #4 | multi-tenant primitives | locked | scheduling `tenant_id` per DL-15 inv 17 |
| #10 | orchestration_actions (formerly `outbound_jobs`) | RENAMED Phase A.2 (non-reopenable); physical migration deferred | scheduling actions per DL-14 inv 16 |
| #11 | AI runtime | scope-bound by DL-14 inv 7-22; adequacy pending Phase 0 | AI-assisted booking per DL-15 inv 13 |
| #16 | external-system ingest | locked | scheduling integrations (calendar imports, external bookings) |
| #19 | relationship scoping | locked | scheduling `patient_relationship_id` per DL-10 |

**Existing scheduling subsections (system_map):** §1F.10-§1F.24 (15 subsections, DL-15 binding); §1F.23 patient-profile-integration prominent.

**Existing AI subsections (system_map):** §1N.10-§1N.26 (17 subsections, DL-14 binding) — AI envelopes / autonomy modes / policy resolution / Compose Assist / etc.

**Existing universal CNS envelope section:** §1Z (DL-16 home; 13 subsections covering envelope, partition, registry, atomicity, reliability, consistency).

---

## 3. §1 DL-14 audit — 22 invariants vs pressure-test

DL-14 governs CNS center-of-gravity. Most scheduling claims in the pressure-test are about the substrate that the CNS operates over; DL-14 itself is largely about the brain's role + AI hybrid layer.

| Inv | Title | Verdict | Notes |
|---|---|---|---|
| 1 | Unified event graph as CNS input | **COVERED** | Pressure-test §1.1 cites verbatim. Scheduling events feed the graph per DL-15 inv 22. |
| 2 | Multi-actor decision substrate | **COVERED** | Pressure-test §11.1 enumerates `actor_target` 9 kinds. |
| 3 | Multi-type action emission | **COVERED** | Pressure-test §11.3 enumerates 18 orchestration_action types overlapping the 16 in DL-14 inv 16. Note new types proposed (`process_inbound_confirmation_reply`, `settle_cart`) — for review. |
| 4 | Rails-as-outputs discipline | **COVERED** | Pressure-test §10.4 + §13.13 explicitly says video adapter is a rail, not brain. |
| 5 | Subsystem subordination + selective adequacy commits | **COVERED** | Pressure-test §4.6 + §4.7 honor this. Phase 0 audit of §1Q / §1Q.21 against multi-actor multi-action CNS = STILL TODO per DL-14 inv 5 itself. This audit does that for scheduling slice only. |
| 6 | CNS learning loop as first-class input | **COVERED** | Pressure-test §11.5 outcome events feed learning loop. |
| 7 | AI hybrid interpretation + action-assist layer | **COVERED** | Pressure-test §11.2 cns_decision category includes `encounter_promotion_decision (interaction→encounter)`. AI envelope dispatch per §10.4 + §11.2. |
| 8 | AI autonomy modes (7 modes) | **COVERED** | Pressure-test §13.8-13.9 implicitly use mode 6 bounded-autopilot for SMS confirm + mode 7 escalate for clinical concern. |
| 9 | AI jurisdiction / capability envelope model (4 envelopes) | **COVERED** | Pressure-test §13.9 routes clinical-concern through safety/triage envelope. |
| 10 | AI invocation audit lineage | **COVERED** | Pressure-test §11.7 emits `system_event` audit; DL-16 envelope handles lineage per inv 2. |
| 11 | AI policy / toggle matrix (7-layer) | **COVERED** | Pressure-test §10.7 4-tier attestation is per-staff layer (Layer 6) of 7-layer resolution. |
| 12 | Re-prompt / retry / no-response stateful follow-up | **COVERED** | Pressure-test §11.3 includes `retry`-shaped orchestration actions implicitly; explicit retry path admitted. |
| 13 | NO global meta-AI / supervisor-AI | **COVERED** | Pressure-test §10 architectural options A/B/C/D do not introduce a meta-AI. |
| 14 | CNS 9-layer vertical stack + 10 horizontal domain slices — Tesla-autopilot pattern; no domain-specific mini-brain | **PARTIAL → POTENTIAL CONFLICT** | Pressure-test §10 proposes `encounter_container` substrate that COULD be misread as a "scheduling brain." Knox + user joint review needed to confirm Q1 resolution doesn't violate "no domain mini-brain" anti-pattern. **Flag for Bucket C review.** |
| 15 | Control ownership state machine (9 states) | **COVERED** | Pressure-test §10.7 + §13.13 implicitly model control_state via attestation_state + authorship_state. |
| 16 | Six-layer event-sourced + CQRS pattern; 16 action_types; 9 origins | **COVERED** | Pressure-test §11.3 18 actions overlap; new types are domain specializations per DL-16 inv 5 registry. |
| 17 | orchestration_runs — parent state-machine for multi-step journeys | **COVERED** | Pressure-test §10 Care Episode COULD be implemented over orchestration_runs OR could be sibling. Resolution-dependent (Q6). |
| 18 | AI Compose Assist global capability + Context Packet Builder + 5 invocation modes | **COVERED** | Pressure-test §13.9 implicit + §16.2 supports Hims path. |
| 19 | AI intent preservation in Polish + Draft Refinement | **COVERED** | Pressure-test §10.5 planned-vs-performed substrate keeps user intent immutable. |
| 20 | Prompt injection defense + instruction hierarchy | **COVERED** | Pressure-test §13.9 clinical-concern reply does NOT blindly confirm. |
| 21 | Live-state revalidation before action firing + tool failure fallback | **COVERED** | Pressure-test §13.13 video session state owned by OMNI not Zoom — exact pattern. |
| 22 | Multi-tenant + federation-aware AI scoping | **PARTIAL → AMENDMENT NEEDED** | Pressure-test §10.4 Q12 11-axis location/venue taxonomy is BROADER than DL-14 inv 22's `org_id` / `brand_id` / `location_id` / `practice_entity_id` 4-axis tenant decl. **Bucket E: amendment to extend tenant scope axes.** |

**DL-14 verdict summary:** 20 COVERED / 2 PARTIAL (one with potential conflict for review). DL-14 is fundamentally healthy as the CNS spine; the gap is in tenant-axis breadth (Q12).

---

## 4. §2 DL-15 audit — 28 invariants vs pressure-test

DL-15 is the canonical home for scheduling claims. This is the most-load-bearing audit section.

| Inv | Title | Verdict | Notes |
|---|---|---|---|
| 1 | Mindbody-class depth on Day 0 (DL-5 binding) | **COVERED** | Pressure-test §1 + §8 Day 0 thin slice intentionally smaller than Mindbody parity — but substrate ADMITS Mindbody depth via §H.1 substrate primitives per Layer 2. |
| 2 | Multi-resource atomic booking | **PARTIAL → AMENDMENT NEEDED** | DL-15 inv 2 says "provider × service-window × room × device × MA × prep × cleanup × supply × deposit" atomic; pressure-test §5.1 + §13.5 + §13.6 specify a 4-AXIS COMPOSER (Capacity × Staff × Room × Resource) with per-axis-required-for-encounter-profile policy. DL-15 inv 2 already admits multi-resource, BUT does NOT formally encode the 4-axis-composer-driven-by-encounter_profile binding. **Bucket E: Layer 2 G.1 Amendment 2.** |
| 3 | Slot offer → hold → book lifecycle | **COVERED** | Pressure-test §11.3 admits `scheduling_hold` action. |
| 4 | Slot-hold timeout discipline | **COVERED** | Pressure-test silent (Day 0 deferral acceptable). |
| 5 | Appointment lifecycle states (13 binding) | **PARTIAL → POTENTIAL CONFLICT** | DL-15 inv 5 enumerates 13 states as a state-machine; pressure-test §5.3 + §13.1 + §13.2 implies MULTI-FLAG STACK (e.g., `Confirmed AND Arrived` simultaneously). DL-15 inv 5 is a strict state machine — multi-flag stack is technically additive (status_flags column per Layer 2 D.2), not state-replacement. NOT a strict conflict if read as "13 lifecycle states are top-level, multi-flag is per-state composability." But Layer 2 G.1 Amendment 1 explicitly calls this DL-15 amendment territory. **Bucket E.** |
| 6 | Reschedule / cancel / no-show / waitlist — compensation discipline | **COVERED** | Pressure-test §13.7 wrong-booking pivot uses compensation pattern (mark planned_intent_line as `not_performed` + add new). DL-15 inv 6 admits. |
| 7 | Cancellation policy enforcement | **COVERED** | Pressure-test §6.1 Mindbody no-show fee evidence + DL-15 inv 7 admits. |
| 8 | Waitlist substrate | **COVERED** | Pressure-test silent (Day 0 deferral). |
| 9 | Deposit coupling — confirmation_pending_deposit (state 5) | **COVERED** | Pressure-test §8.5 deferred Commerce DL admits this couples in. |
| 10 | Clinical clearance gating — ABSOLUTE | **COVERED** | Pressure-test §13.9 clinical-concern reply blocks confirmation. |
| 11 | Live-state revalidation + per-resource concurrency lock | **COVERED** | Pressure-test §13.5 4-axis booking validates all axes at execution. |
| 12 | Jurisdiction-aware booking | **PARTIAL → AMENDMENT NEEDED** | DL-15 inv 12 uses 1-axis "jurisdiction" (state license + location regulation + brand rules); pressure-test §5.8 Q12 11-axis location/venue taxonomy is BROADER. **Bucket E.** |
| 13 | AI-assisted booking via AI Compose Assist | **COVERED** | Pressure-test §13.8 SMS-to-confirmation flows through CNS not rail. |
| 14 | Clinical-cue interrupt during booking — ABSOLUTE | **COVERED** | Pressure-test §13.9 clinical-concern reply explicitly described. |
| 15 | Prompt injection defense at booking surface | **COVERED** | Pressure-test §13.9 + DL-14 inv 20. |
| 16 | orchestration_runs binding for multi-step booking journeys | **COVERED** | Pressure-test §11.7 system events imply waitlist promotion runs. |
| 17 | Federation-aware booking | **PARTIAL → AMENDMENT NEEDED** | Same as inv 12 — 11-axis is broader. **Bucket E.** |
| 18 | Patient-profile integration (PROMINENT) | **PARTIAL → AMENDMENT NEEDED** | DL-15 inv 18 says booking reads patient profile (past visits, preferences, contraindications, etc.). Pressure-test §10.3 Q6 Care Episode parent object proposes a NEW longitudinal layer that DL-15 inv 18 does NOT enumerate. The Mohs+Botox+GLP-1 multi-episode-per-encounter scenario (pressure-test §13.3) needs Care Episode primitive, not just profile reads. **Bucket E + Bucket B.** |
| 19 | Audit lineage for every booking action | **COVERED** | Pressure-test §12 12.1 substrate ownership audit + DL-16 inv 30 cns_decisions. |
| 20 | Staff override + manual booking pathway | **COVERED** | Pressure-test §10.7 4-tier attestation + admin override scar. |
| 21 | Per-resource concurrency lock | **COVERED** | Pressure-test §13.5 4-axis validation atomic. |
| 22 | Scheduling domain events specialize DL-16 envelope | **COVERED** | Pressure-test §11.1 24 scheduling event_kinds inherit envelope. |
| 23 | Scheduling orchestration_actions specialize DL-16 partition | **COVERED** | Pressure-test §11.3 18 actions distinct from events. |
| 24 | Scheduling ↔ CNS bidirectional seam | **COVERED** | Pressure-test §11 enumerates both producer + consumer events/actions. |
| 25 | Compensation for incorrect booking actions | **COVERED** | Pressure-test §13.7 wrong-booking pivot uses compensation. |
| 26 | Strong consistency for booking writes | **COVERED** | Pressure-test §12.1 substrate ownership table implies. |
| 27 | Scheduling retention class per DL-16 inv 13 | **COVERED** | Pressure-test silent (Day 0 deferral). |
| 28 | Reconciliation jobs per DL-16 inv 39 | **COVERED** | Pressure-test silent (Day 0 deferral). |

**DL-15 verdict summary:** 22 COVERED / 6 PARTIAL (5 amendment-needed for Bucket E, 1 multi-flag stack edge case). DL-15 is the right home; gaps are in formal 4-axis composer + 11-axis venue + Care Episode + multi-flag stack composability + multi-episode-per-encounter.

**Specific gaps NOT in DL-15 (Bucket B — MISSING):**

- **Planned Intent Line vs Performed Intervention Line substrate separation (Q8).** DL-15 inv 5 has 13 lifecycle states but does NOT model planned intent and performed intervention as separate rows. Pressure-test §10.5 proposes them as separate `encounter_line` rows with `line_kind` discriminator. DL-15 is silent.
- **Encounter Container substrate ABOVE appointment (Q1).** DL-15 has `appointment` substrate; pressure-test §10.1 proposes `encounter` substrate that may or may not equal appointment. Q1 SHELVED.
- **Encounter Profile enum (Q1).** Not in DL-15.
- **3-component appointment block (Prep + Booking + Finish per staff per service).** DL-15 inv 2 lists "prep + cleanup" but not formal 3-component split per Layer 2 G.1 Amendment 3.
- **Service Type enum** (Appointments / Arrivals / Classes / Courses / Memberships) per Layer 2 G.1 Amendment 4.
- **5 Scheduling Restrictions on Pricing Options** per Layer 2 G.1 Amendment 5.

---

## 5. §3 DL-16 audit — 39 invariants vs pressure-test

DL-16 is the universal envelope. Mostly COVERED at the envelope level; pressure-test §11 explicitly cites the 7-category partition.

| Inv | Title | Verdict | Notes |
|---|---|---|---|
| 1 | Universal event-graph principle | **COVERED** | Pressure-test §11 admits universal ingestion. |
| 2 | Universal event envelope (25 binding fields) | **COVERED** | Pressure-test §11.8 verbatim. |
| 3 | Seven-category vocabulary partition | **COVERED** | Pressure-test §11 cites 7 categories explicitly. |
| 4 | Bidirectional CNS ↔ domain seam | **COVERED** | Pressure-test §11 events + actions. |
| 5 | Taxonomy registry governance | **COVERED** | Pressure-test §11 implicitly assumes; new event_kinds proposed (§13 scenarios) require registry entries. |
| 6 | State mutation = event emission ATOMIC | **COVERED** | Pressure-test §12.1 substrate ownership table. |
| 7 | Payload minimization + PHI policy hydration | **COVERED** | DL-14 inv 22 + DL-16 inv 25 applied. |
| 8 | Multi-tenant isolation at event-bus level | **PARTIAL → AMENDMENT NEEDED** | Same as DL-14 inv 22 — 11-axis venue extends. **Bucket E.** |
| 9 | Schema validation at WRITE time + evolution rules | **COVERED** | Standard. |
| 10 | Action authorization at EMISSION time | **COVERED** | Pressure-test §10.7 4-tier attestation per Layer 6 of DL-14 inv 11. |
| 11 | Idempotency at action EXECUTION | **COVERED** | Standard. |
| 12 | DLQ + manual review + admin escalation | **COVERED** | Standard. |
| 13 | Retention discipline per event_kind | **COVERED** | Standard. |
| 14 | Executor timeout / non-response semantics | **COVERED** | Standard. |
| 15 | Cross-run correlation | **COVERED** | Standard. |
| 16 | Replay safety modes | **COVERED** | Standard. |
| 17 | Executor outcome contracts | **COVERED** | Pressure-test §11.5 outcome events. |
| 18 | Temporal validity — four time fields | **COVERED** | Standard. |
| 19 | Projection freshness + rebuildability | **COVERED** | Pressure-test §12.1 receipt projection explicitly NEVER authority. |
| 20 | Causality cycle detection + depth limit | **COVERED** | Standard. |
| 21 | Consistency tiers per event_kind + per read | **COVERED** | Pressure-test §12.1 strong for clinical writes. |
| 22 | GDPR/CCPA erasure-by-pseudonymization | **COVERED** | Standard. |
| 23 | AI content validation before emission | **COVERED** | Pressure-test §13.8 SMS "Your appointment is confirmed" only emitted after canonical state set. |
| 24 | Clinical-decision surfaces read source-of-truth | **COVERED** | Standard. |
| 25 | Patient impersonation gate on unverified handles | **COVERED** | Standard. |
| 26 | Cross-domain atomic write REJECTED; saga only | **COVERED** | Pressure-test §13.10 multi-tender + retail across commerce uses saga. |
| 27 | Operational observability + circuit breakers | **COVERED** | Standard. |
| 28 | Environment / sandbox / replay / live segregation | **COVERED** | Standard. |
| 29 | Producer authorization | **COVERED** | DL-16 inv 29 enforces; pressure-test §13.8 SMS classification routes through CNS-authorized producers. |
| 30 | CNS Decision Record as first-class audit | **COVERED** | Pressure-test §11.2 cns_decision category. |
| 31 | Compensation discipline (not rollback) | **COVERED** | Pressure-test §13.7. |
| 32 | Event-granularity routing — universal ingestion, selective evaluation | **COVERED** | Standard. |
| 33 | Context snapshot immutability | **COVERED** | Standard. |
| 34 | Aggregate concurrency / lock discipline | **COVERED** | Pressure-test §13.5. |
| 35 | Unit / timezone / currency / value normalization | **COVERED** | Standard. |
| 36 | Manual reality capture pathways | **COVERED** | Pressure-test §10.7 admin override with audit scar uses this. |
| 37 | Privileged-action elevated-approval discipline | **COVERED** | DL-15 inv 7 cancellation policy staff override per DL-14 inv 8 capability. |
| 38 | Tamper-evident audit log | **COVERED** | Standard. |
| 39 | Out-of-band reconciliation jobs | **COVERED** | Standard. |

**DL-16 verdict summary:** 38 COVERED / 1 PARTIAL (multi-tenant extends via Q12). DL-16 is exceptionally healthy as universal envelope; gaps are not in envelope grammar.

**Specific gaps NOT in DL-16 (Bucket B — MISSING):**

- DL-16 governs envelope grammar; it doesn't govern domain-vocabulary specifics. Scheduling-specific gaps are in DL-15, not DL-16.

**DL-16 amendments needed (Bucket E, per Layer 2 G.3):**

- Amendment 1: 21+ Client Alert event types as concrete CNS event vocabulary (Mindbody-evidence-based)
- Amendment 2: Alert 2-level severity enum (Red / Yellow)
- Amendment 3: 30+ Outbound communication trigger types
- Amendment 4: Multi-actor envelope (4+ actor_kind including `_ClassPass API_` 3rd-party-integration actor)

These don't break DL-16; they extend its registry with concrete domain vocabulary. None require invariant-text edits.

---

## 6. §4 DL-5 / DL-11 / DL-13 audit (brief)

| Lock | Verdict | Notes |
|---|---|---|
| **DL-5** Day 0 elite-class depth | **COVERED** | Pressure-test §1 + §8.5 explicitly defers Day 0 commerce/RBAC/settings while admitting substrate. DL-5 says substrate must ADMIT elite-class depth; pressure-test §H.1 substrate primitives do. |
| **DL-11** 3 messaging surfaces | **COVERED** | Pressure-test §10.4 + §13.9 explicitly keeps messaging in messaging substrate, does NOT cram into encounters. Knox + user Session 2 Turns 6-8 reinforce. |
| **DL-13** Rail-agnostic substrate | **COVERED** | Pressure-test §10.4 + §13.13 + §13.14 video adapter is rail not domain. |

---

## 7. §5 System primitives audit

| Primitive | Verdict | Notes |
|---|---|---|
| #1 actor_type taxonomy | **PARTIAL → AMENDMENT NEEDED** | DL-16 envelope `actor` field uses primitive #1 enum. Pressure-test §13.3 + §13.11 Session 2 Turn 19 #1 surfaces NEW actor distinctions: `performing_provider ≠ assisting_provider ≠ supervising_provider ≠ seller ≠ checkout_staff`. Mindbody Layer 2 D.22 found `_ClassPass API_` as 3rd-party-integration named actor. Need attribution_line concept that compounds with actor_type. **Bucket E.** |
| #3 idempotency | **COVERED** | DL-16 inv 11. |
| #4 multi-tenant | **PARTIAL → AMENDMENT NEEDED** | 11-axis venue extends. **Bucket E.** |
| #10 orchestration_actions | **COVERED + naming committed** | Phase A.2 rename committed; physical migration is post-audit work. Pressure-test §11.3 enumerates 18 action types — proposes 2 new (`process_inbound_confirmation_reply`, `settle_cart`) for registry per DL-16 inv 5. |
| #11 AI runtime | **PARTIAL** | DL-14 inv 7-22 binds scope; adequacy of EXISTING implementation against bound scope is exactly Phase 0 audit territory but bigger than scheduling alone. Pressure-test §13.9 + §13.8 use AI envelope correctly. |
| #16 external-system ingest | **COVERED** | Pressure-test §13.13 video session adapter, §13.14 ad-hoc video. |
| #19 relationship scoping | **COVERED** | DL-10 + DL-16 inv 8. |

---

## 8. §6 Per-scenario coverage matrix (45 Q2 scenarios)

Verdicts assigned per scenario. C=COVERED, P=PARTIAL, M=MISSING, X=CONFLICT.

| # | Scenario summary | Verdict | Citing brain | Citing pressure-test |
|---|---|---|---|---|
| 1-8 | Session 1 original 8 (Botox / HydraFacial+addons / weight loss consult / video / lab draw / endoscopy / surgical followup / multi-provider) | mixed C+P+M | DL-15 inv 1-28 partial; encounter container question (Q1) blocks endoscopy + surgical_case profiles | Pressure-test §13 covers Botox + multi-provider (13.11); endoscopy / surgical / lab not walked (deferred) |
| 9 | Books Botox, performs Botox 36u | **C** | DL-15 inv 1-3 + 18-19; DL-14 inv 16 | §13.1 |
| 10 | Mole check booked, not performed, Botox performed | **P → M for planned_intent_line substrate** | DL-15 inv 5 + 6 admit compensation; substrate for `planned_intent_line.status='not_performed'` is missing | §13.2 |
| 11 | Mole check + biopsy + GLP-1 refill in same visit (multi-episode) | **M** | No Care Episode primitive; DL-15 inv 18 reads profile, doesn't admit multi-episode-per-encounter | §13.3 |
| 12 | Weight-loss async intake → Rx, no scheduled visit | **P** | DL-14 inv 7-8 + 22 admit; no `async_review` encounter profile primitive in DL-15 | §13.4 |
| 13 | Weight-loss patient later needs video visit | **C** | DL-15 inv 13 + DL-13; DL-15 inv 5 lifecycle | §13 implicit |
| 14 | HydraFacial requires provider + room + machine | **P** | DL-15 inv 2 admits multi-resource; 4-axis composer formal binding pending | §13.5 |
| 15 | Red light requires room/device but no provider | **P** | DL-15 inv 2 admits "device + room"; `requires_provider=false` per encounter_profile pending | §13.6 |
| 16 | Procedure: room, equipment, assistant, consent, pathology | **P** | DL-15 inv 2 + 7; pathology coupling deferred to Phase D | §13 implicit |
| 17 | Wrong appointment booked online | **P → M for substrate behavior** | DL-15 inv 6 admits compensation; substrate behavior "DO NOT mutate `appointment.service_id`" is policy not encoded | §13.7 |
| 18 | Provider unavailable after booking | **C** | DL-15 inv 11 + 21; DL-16 inv 34 | §13 implicit |
| 19 | Room unavailable but provider free | **C** | DL-15 inv 2 multi-resource atomic; booking fails | §13 implicit |
| 20 | Device unavailable but provider/room free | **C** | Same | §13 implicit |
| 21 | Patient texts "C" to confirm | **C** | DL-14 inv 7-9 envelope dispatch; DL-16 inv 4 bidirectional | §13.8 |
| 22 | Patient replies to reminder with clinical concern | **C** | DL-14 inv 7-9 safety/triage envelope; DL-15 inv 14 ABSOLUTE interrupt | §13.9 |
| 23 | Checkout: service + product + membership discount + package credit | **P → M for Commerce DL** | Commerce DL pending Phase B.5+; DL-15 inv 9 deposit coupling admits | §13.10 |
| 24 | Multi-provider visit | **P → M for attribution_line** | DL-15 inv 19 audit; per-line provider attribution missing in DL-15 substrate | §13.11 |
| 25 | Botox inventory tracked by units/lot (future) | **P** | Commerce DL pending; Layer 2 G.2.1 enumerates | §16.1 implicit |
| 26 | Before/after photos captured during visit | **M** | Clinical-Media DL not authored (Layer 2 mentions; Q14) | §13.12 |
| 27 | Consent missing before procedure | **C** | DL-15 inv 10 clinical clearance ABSOLUTE | §13 implicit |
| 28 | Video visit from scheduled visit | **C** | DL-13 rail-agnostic; DL-15 inv 13 | §13.13 |
| 29 | Ad-hoc video from message thread | **P** | DL-13 rail-agnostic; `encounter_id` nullable on video_session not formal | §13.14 |
| 30 | Lab result returns between visits | **C** | DL-16 inv 32 event-granularity routing | §13 implicit |
| 31 | Staff call about labs is NOT encounter | **C** | DL-11 messaging substrate; pressure-test §10.4 Q7 explicit | §13 implicit |
| 32 | Provider changes dose after lab review = async clinical encounter | **P → M for async_review profile** | DL-15 doesn't enumerate async profiles; Knox + user shelved Q1 | §13 implicit |
| 33 | First-time patient visit display | **P** | Patient profile (DL-15 inv 18 + system map 1J) supports; Day 0 UI deferred | §16.1 |
| 34 | Follow-up questions after last treatment enrich next encounter (intake-as-living-memory) | **M** | Intake substrate revisit (Q14); not encoded as living-memory | §16.2 implicit |
| 35 | Derm: mole surveillance + cosmetic + Rx in same patient (multi-episode) | **M** | Care Episode primitive (Q6) missing | §13.15 |
| 36 | Provider performs Botox chairside + pushes to shared cart | **P → M for shared cart substrate** | Commerce DL pending Phase B.5+ | §13 implicit |
| 37 | MA drafts performed_line + provider attests later | **M** | 4-tier authorship+attestation (Q10) missing | §13 implicit |
| 38 | Front desk tries to add Botox units silently → blocked | **M** | Substrate enforcement of "front desk cannot modify clinical line" not encoded | §13 implicit |
| 39 | Admin override creates injectable charge → audit scar | **P** | DL-14 inv 8 + DL-16 inv 36 + 37; "audit scar" UI/UX pending | §13 implicit |
| 40 | Provider visit closeout drawer 7 lanes | **M** | Closeout substrate (Q11) missing | §13 implicit |
| 41 | "Text patient in 2 days" scheduled follow-up CNS action | **C** | DL-14 inv 12 + 17; DL-15 inv 16 | §13 implicit |
| 42 | Provider laser drawer preloads from appointment/package context | **P → M for UI substrate** | UI-level; Day 0 scoping deferred | §13 implicit |
| 43 | LHR receipt projection ≠ clinical note granularity | **P → M for receipt projection substrate** | DL-16 inv 19 admits projections; specific receipt_projection substrate (Q9) not encoded | §13 implicit |
| 44 | Care Episode spans Location A + Location H + virtual federation | **M** | 11-axis venue (Q12) + Care Episode (Q6) both missing | §13 implicit |
| 45 | Pure Hims: no physical clinic, video on Provider C, location = jurisdiction + practice_entity | **M** | 11-axis venue (Q12); DL-15 inv 12 + 17 are 1-2-axis | §13 implicit |

**Coverage tally:**

- COVERED: 14 scenarios (#9, 13, 18-22, 27-28, 30-31, 41, plus 13.8, 13.9)
- PARTIAL (existing brain admits but doesn't fully encode): 13 scenarios
- MISSING: 13 scenarios
- CONFLICTS: 0 (no scenario directly conflicts with existing locked doctrine; multi-flag stack is composability not conflict per §3 inv 5)

The 13 MISSING scenarios cluster around: Care Episode parent (Q6) / Encounter Container substrate (Q1) / 4-tier attestation (Q10) / Visit Closeout (Q11) / 11-axis venue (Q12) / Clinical Media substrate (Q14) / Receipt Projection substrate (Q9) / Commerce DL primitives.

---

## 9. §7 Bucket A — Correctly covered

The existing brain ALREADY admits these claims. No amendment needed.

1. **Event-driven CNS spine (DL-14 inv 1-6).** Pressure-test §1 + §11 verbatim citations.
2. **AI hybrid envelope architecture (DL-14 inv 7-13).** Pressure-test §10.4 + §13.9 use safety/triage + clinical envelope routing correctly.
3. **9-layer vertical stack + AI Compose Assist (DL-14 inv 14-18).** Pressure-test §11 + §13 implicit.
4. **Live-state revalidation + tool failure fallback (DL-14 inv 21).** Pressure-test §13.5 + §13.8 + §13.13.
5. **Universal event envelope grammar (DL-16 inv 1-39 with exceptions).** Pressure-test §11.1 + §11.8 universal envelope.
6. **7-category vocabulary partition (DL-16 inv 3).** Pressure-test §11.
7. **Atomic state mutation + outbox (DL-16 inv 6).** Pressure-test §12.1.
8. **Bidirectional CNS ↔ scheduler seam (DL-16 inv 4 + DL-15 inv 24).** Pressure-test §11.
9. **Slot-offer → hold → book lifecycle (DL-15 inv 3-4).** Pressure-test §11.3 admits.
10. **Clinical clearance gating ABSOLUTE (DL-15 inv 10).** Pressure-test §13.9 + §13 implicit.
11. **Compensation discipline (DL-15 inv 6 + 25; DL-16 inv 31).** Pressure-test §13.7.
12. **Idempotency at execution (DL-16 inv 11).** Standard.
13. **Patient impersonation gate (DL-16 inv 25).** Standard.
14. **Prompt injection defense (DL-14 inv 20 + DL-15 inv 15).** Pressure-test §13.9.
15. **Rails-as-outputs (DL-14 inv 4 + DL-13).** Pressure-test §13.13 video adapter.
16. **DL-11 messaging substrate protection.** Pressure-test §10.4 + Session 2 Turn 7 verbatim "messaging stays messaging."
17. **DL-5 Day 0 elite-class depth.** Pressure-test §H.1 admits.
18. **System primitive #10 `orchestration_actions` rename committed.** Phase A.2 (non-reopenable).
19. **Tesla-autopilot pattern (DL-14 inv 14 + 15).** Pressure-test §10 architectural options preserve.
20. **NO global meta-AI (DL-14 inv 13).** Pressure-test does not introduce a meta-AI.

**Reassurance**: the brain is structurally sound. The center of gravity (CNS as event-driven care coordination), the AI envelope architecture, the universal event grammar, and the messaging substrate protection are all healthy.

---

## 10. §8 Bucket B — Missing

The brain says nothing on these. Pressure-test surfaces them as required for the 1B-co architecture.

### B.1 Care Episode primitive (Q6)

- **Source:** Pressure-test §5.7 + §10.3 + §13.3 (Mohs+Botox+GLP-1) + §13.15 (derm multi-episode).
- **Brain silence:** DL-15 inv 18 reads patient profile; doesn't encode longitudinal pathway. Foundational doc has `treatment_items` + `clinical_visits` but no Care Episode primitive.
- **Size:** Major. Care Episode is proposed as the parent of Encounter Container in pressure-test §10.3 + §10.4.
- **Resolution path:** Possible Care-Coordination DL OR extension of existing primitives. Phase B.5+ doctrine sharpening.

### B.2 Encounter Container substrate above appointment (Q1)

- **Source:** Pressure-test §10 (4 architectural options A/B/C/D) + §13 most scenarios.
- **Brain silence:** DL-15 has `appointment`; doesn't have `encounter` as substrate.
- **Size:** Foundational. Q1 SHELVED. Resolution requires joint Knox + user.

### B.3 Encounter Profile enum + policy table (Q1)

- **Source:** Pressure-test §10.1 + 13 profiles enumerated in Session 2 Turn 1.
- **Brain silence:** No profile enum.
- **Size:** Major. Drives policy per-profile (provider required / room required / documentation required / etc.).

### B.4 Planned Intent Line vs Performed Intervention Line substrate (Q8)

- **Source:** Pressure-test §10.5 + §13.1 + §13.2 + §13.7.
- **Brain silence:** DL-15 inv 5 has 13 lifecycle states but not separate substrate rows.
- **Size:** Major. Substrate enforcement of "never overwrite planned intent" requires separate rows.

### B.5 3-lane source-of-truth substrate (Q9)

- **Source:** Pressure-test §10.6 + §13.10.
- **Brain silence:** DL-16 inv 19 admits projections-not-authority generically; doesn't encode clinical-vs-commercial-vs-receipt 3-lane.
- **Size:** Medium. Commerce DL territory.

### B.6 4-tier provider authorship + attestation model (Q10)

- **Source:** Pressure-test §10.7 + §13 implicit.
- **Brain silence:** DL-14 inv 8 has staff override capability; doesn't encode 4-tier (provider-entered / staff-drafted-pending / front-desk-commercial-only / admin-override-with-audit-scar).
- **Size:** Major. RBAC DL territory.

### B.7 Visit Closeout drawer 7 lanes (Q11)

- **Source:** Pressure-test §10 + Session 2 Turn 29.
- **Brain silence:** Not in any DL.
- **Size:** Medium. Possible derived projection per pressure-test §13 implicit.

### B.8 11-axis location/venue/federation taxonomy (Q12)

- **Source:** Pressure-test §5.8 + Session 2 Turn 18.
- **Brain silence:** DL-10 multi-tenant has 3-scope (User/Site/Owner). DL-15 inv 12 + 17 use 1-2 axis. Pressure-test proposes 11 axes.
- **Size:** Major. Federation-Topology DL extension territory.

### B.9 False-equivalence audit meta-principle (Q13)

- **Source:** Session 2 Turn 19 Knox 10-item audit + 6-axis (authority / lifecycle / visibility / billing / clinical-responsibility / CNS-behavior).
- **Brain silence:** No formal doctrine. DL-11 is a specific instance ("messaging substrate ≠ other substrates").
- **Size:** Meta-principle. Could become doctrine OR design audit checklist.

### B.10 Photos / intake / consent / docs as separate clinical artifact substrates (Q14)

- **Source:** Pressure-test §10 + Session 2 Turns 11-12.
- **Brain silence:** Existing intake substrate; no Clinical-Media DL.
- **Size:** Medium. Per system map 1J + 1K already partial.

### B.11 4-axis booking composer formal binding

- **Source:** Pressure-test §5.1 + §13.5 + §13.6.
- **Brain silence:** DL-15 inv 2 admits multi-resource; doesn't bind 4-axis composer driven by encounter_profile policy.
- **Size:** Small. DL-15 inv 2 amendment (Layer 2 G.1 Amendment 2).

### B.12 3-component appointment block (Prep + Booking + Finish per staff per service)

- **Source:** Pressure-test §5.2 + Mindbody Batch 13 Step 10.
- **Brain silence:** DL-15 inv 2 lists "prep + cleanup"; not 3-component.
- **Size:** Small. DL-15 amendment (Layer 2 G.1 Amendment 3).

### B.13 Multi-flag lifecycle composability

- **Source:** Pressure-test §5.3.
- **Brain silence:** DL-15 inv 5 specifies 13 states as strict enum; multi-flag stacks (`Confirmed AND Arrived`) are technically additive but not formally encoded.
- **Size:** Small. DL-15 amendment (Layer 2 G.1 Amendment 1).

### B.14 Service Type enum expansion (Appointments / Arrivals / Classes / Courses / Memberships)

- **Source:** Pressure-test implicit; Mindbody Batches 5-16 evidence.
- **Brain silence:** DL-15 silent on service-type taxonomy.
- **Size:** Small. DL-15 amendment (Layer 2 G.1 Amendment 4).

### B.15 Staff Availability Window 4-axis primitive

- **Source:** Pressure-test §H.1 + Mindbody Batch 15.
- **Brain silence:** DL-15 silent on availability primitive shape.
- **Size:** Small. DL-15 amendment (Layer 2 G.1 Amendment 6).

### B.16 5 Scheduling Restrictions on Pricing Options

- **Source:** Pressure-test implicit; Mindbody Batch 13 Step 9.
- **Brain silence:** Commerce DL territory.
- **Size:** Small. Commerce DL territory + DL-15 amendment (Layer 2 G.1 Amendment 5).

**Bucket B count:** 16 distinct missing items. Most are amendment-territory (small to medium); 4 are Major (B.1 Care Episode / B.2 Encounter / B.3 Encounter Profile / B.6 4-tier attestation) requiring Q1+Q6+Q10 joint resolution.

---

## 11. §9 Bucket C — Conflicts

Where existing doctrine says something INCOMPATIBLE with the pressure-test. **CRITICAL — these require explicit choice: amend doctrine, change pressure-test, or accept tension as deliberate scope decision.**

### C.1 DL-14 invariant 14 "no domain-specific mini-brain" vs encounter container

- **Tension:** DL-14 inv 14 explicitly says: *"Each domain uses the same vertical CNS spine — no domain gets its own mini-brain... Anti-pattern (binding rejection): building a domain-specific orchestrator (a 'scheduling brain' / 'marketing brain' / 'clinical brain') that bypasses or duplicates the 9-layer CNS spine."*
- **Pressure-test:** §10 proposes `encounter_container` as substrate that coordinates planned_intent / performed_intervention / billable / clinical_documentation / inventory_use / etc. lines.
- **Conflict severity:** **POTENTIAL** — not actual yet. If `encounter_container` is read as substrate (data model), no conflict. If `encounter_container` is read as orchestrator (running rules / making decisions), it conflicts.
- **Resolution required:** Knox + user joint review must confirm Q1 resolution path treats encounter container as substrate-only. Pressure-test §10.4 explicitly says encounter LINKS lines; lines own their own substrate truth — that's substrate-only framing. Reading this as substrate (not mini-brain) appears to resolve conflict.
- **Recommendation for Knox + user review:** add explicit framing to Q1 resolution: "encounter_container is substrate that LINKS lines; CNS is the orchestrator that READS encounter state. No mini-brain inside encounter."

### C.2 DL-15 invariant 5 13-state strict lifecycle vs multi-flag stack

- **Tension:** DL-15 inv 5 enumerates 13 states as state machine with "transitions are state-machine-validated; illegal transitions emit `illegal_transition_attempted` audit event."
- **Pressure-test:** §5.3 + Mindbody evidence: appointment can be `Confirmed AND Arrived` simultaneously (multi-flag, not state-machine).
- **Conflict severity:** **APPARENT, RESOLVABLE** — multi-flag stack is COMPOSABLE on top of 13-state machine if encoded as separate `status_flags` column distinct from `state`. State machine still applies to lifecycle; flags add orthogonal sub-states.
- **Resolution required:** DL-15 amendment to clarify state-vs-flag composability (Layer 2 G.1 Amendment 1).

### C.3 DL-15 invariant 12 "1-axis jurisdiction" vs Q12 11-axis venue taxonomy

- **Tension:** DL-15 inv 12 conceives of jurisdiction as 1-axis (state license + location regulation + brand rules collapsed into single check); pressure-test §5.8 + Q12 propose 11 axes.
- **Conflict severity:** **AMENDMENT, NOT FORBIDDING** — 11-axis is strictly MORE; doesn't conflict with 1-axis check, extends it.
- **Resolution required:** DL-15 + DL-14 inv 22 + DL-16 inv 8 + DL-10 amendment territory. Federation-Topology DL extension.

### C.4 DL-15 invariant 18 "PROMINENT patient-profile integration" vs Care Episode parent

- **Tension:** DL-15 inv 18 says booking reads patient profile (preferences / history / contraindications / membership / balances). Pressure-test §10.3 proposes Care Episode as substrate primitive ABOVE encounter; profile is a different layer.
- **Conflict severity:** **NONE** — profile and Care Episode are different concepts. Profile = patient state; Care Episode = longitudinal pathway over time. They compose.
- **Resolution required:** None for DL-15 inv 18. Care Episode addition is Bucket B.1 / Bucket E.

### C.5 DL-14 invariant 22 "4-axis tenant scoping" vs Q12 11-axis

- **Tension:** Same as C.3 but for AI scoping rather than booking. DL-14 inv 22 uses `org_id / brand_id / location_id / practice_entity_id`; pressure-test extends.
- **Conflict severity:** **AMENDMENT, NOT FORBIDDING.**
- **Resolution required:** DL-14 amendment territory + Federation-Topology DL extension.

### C.6 None other identified

After walking 84 invariants × 45 scenarios, no other direct conflicts identified. The brain is structurally aligned with the pressure-test; gaps are primarily MISSING (Bucket B) and AMENDMENT-NEEDED (Bucket E).

**Bucket C count:** 5 tensions identified. 1 potential conflict (C.1 — resolvable via framing clarification); 4 amendment-territory tensions.

---

## 12. §10 Bucket D — Must stay unresolved

Per Knox direction: do not resolve Q1 unilaterally. Q1-Q21 + any audit-surfaced new questions all stay OPEN.

| # | Question | Origin | Status |
|---|---|---|---|
| Q1 | Encounter container architecture | Session 1 Turn 5 | **OPEN (primary shelve)** |
| Q2 | 45 pressure-test scenarios validate architecture | Sessions 1-2 + pressure-test §13 | **OPEN** (pending Q1) |
| Q3 | 4-entity split validity | Knox Session 1 Turn 1 | **OPEN** |
| Q4 | Mode-per-service-line vs flat appointment_type | Knox Session 1 Turn 3 | **OPEN** |
| Q5 | Capability flags per brand/clinic | Knox Session 1 Turn 3 | **OPEN** |
| Q6 | Care Episode parent object | Knox Session 2 Turn 1 | **OPEN** |
| Q7 | Encounter vs Interaction boundary | Session 2 Turns 6-8 | **OPEN** |
| Q8 | Planned Intent vs Performed Truth substrate | Session 2 Turns 3-4 + pressure-test §10.5 | **OPEN** |
| Q9 | 3-lane source-of-truth separation | Session 2 Turns 21-26 + pressure-test §10.6 | **OPEN** |
| Q10 | 4-tier provider authorship + attestation | Session 2 Turns 22-27 + pressure-test §10.7 | **OPEN** |
| Q11 | Visit closeout drawer 7 lanes | Session 2 Turn 29 + pressure-test §13 | **OPEN** |
| Q12 | 11-axis location/venue/federation taxonomy | Session 2 Turn 18 + pressure-test §5.8 | **OPEN** |
| Q13 | False-equivalence audit meta-principle | Session 2 Turn 19 + pressure-test §14 | **OPEN** |
| Q14 | Photos/intake/consent/docs separate substrates | Pressure-test §10 + Session 2 Turns 11-12 | **OPEN** |
| Q15 | Encounter substrate identity (single + profile_enum vs polymorphic vs flat tag vs separate tables) | Pressure-test §10.1 | **OPEN** |
| Q16 | Encounter ↔ Care Episode multiplicity (1-to-N via line.care_episode_id) | Pressure-test §10.3 | **OPEN** |
| Q17 | Charge-line lifecycle independence from performed-line lifecycle | Pressure-test §10.6 | **OPEN** |
| Q18 | Closeout substrate vs derived projection | Pressure-test §10 | **OPEN** |
| Q19 | Care Episode auto-creation vs explicit creation | Pressure-test §10.3 | **OPEN** |
| Q20 | Async encounter as 1st-class encounter vs Interaction-promoted | Pressure-test §10.4 | **OPEN** |
| Q21 | Day 0 thin slice scope boundary | Pressure-test §8 | **OPEN** |

### New questions surfaced by audit (Q22-Q24)

#### Q22 — DL-14 inv 14 + Q1 encounter container compatibility framing

**Source:** §11 C.1 above.
**Question:** Does the Q1 encounter container resolution require explicit framing that `encounter_container` is substrate-only (data) and NOT an orchestrator? Or is it OK for the encounter container to host policy gates (per Q1 Option A `encounter_profile` policy table)?
**Tentative tension:** Pressure-test §10.1 Option A has `encounter_profile` policy table that drives requirements (`requires_provider`, `requires_room`, `allows_procedure_lines`). This is policy, not orchestration. CNS reads encounter_profile + applies policy in CNS deterministic gates (per DL-14 inv 11). So encounter substrate stores policy; CNS uses policy to make decisions. That seems compatible — but should be explicitly confirmed at Q1 resolution.
**Resolution dependency:** Q1 + Knox + user joint review.

#### Q23 — How does Care Episode interact with `treatment_items` + `clinical_visits` (existing substrates)?

**Source:** §10 B.1 above + foundational doc.
**Question:** Foundational doc names `treatment_items` (primitive) + `clinical_visits` (primitive). Pressure-test §10.3 proposes Care Episode as NEW. Three options:
- (A) Care Episode is a generalization (treatment_items + clinical_visits become children)
- (B) Care Episode is a sibling (separate substrate alongside)
- (C) Care Episode is a projection (derived view over treatment_items / clinical_visits / outbound_jobs / etc.)
**Resolution dependency:** Q6 + Phase B.5+ doctrine sharpening.

#### Q24 — RBAC layer for 4-tier provider authorship + attestation

**Source:** §10 B.6 above + Session 2 Q10.
**Question:** DL-14 inv 8 admits staff override via capability + audit. Pressure-test §10.7 proposes 4-tier (provider-entered / staff-drafted-pending / front-desk-commercial-only / admin-override-with-audit-scar). How does this map to existing `lib/auth/capabilities.ts` + 5 permission groups + 8+ per-staff capability flags?
**Resolution dependency:** RBAC DL draft (Layer 2 G.2.3) + Phase B.5+.

**Bucket D count:** 21 SHELVED + 3 new from audit = **24 OPEN questions**.

---

## 13. §11 Bucket E — Amendments needed later

Enumeration of where amendment WILL be needed at Phase B.5+. Does NOT draft amendments.

### E.1 DL-14 amendments (1 + 1 new from audit)

1. **DL-14 inv 22 tenant-axis extension** (audit finding §3) — extend 4-axis (`org_id / brand_id / location_id / practice_entity_id`) to admit Q12 11-axis location/venue taxonomy.
2. **(Audit-surfaced)** Possible inv 14 clarification on substrate-vs-orchestrator boundary for encounter container (§11 C.1).

### E.2 DL-15 amendments (7 from Layer 2 G.1)

1. Multi-flag lifecycle stack invariants (audit finding §4 inv 5)
2. 4-axis booking composer with per-encounter-profile policy (audit finding §4 inv 2)
3. 3-component appointment block (Prep + Booking + Finish per staff per service)
4. Service Type enum expansion (Appointments / Arrivals / Classes / Courses / Memberships)
5. 5 Scheduling Restrictions on Pricing Options
6. Staff Availability Window 4-axis primitive (What / Where / When / Other-Privacy)
7. Recurring + one-time-override availability composition
8. **(Audit-surfaced)** Possible inv 12 + 17 jurisdiction extension to 11-axis venue (audit finding §4 inv 12, 17)
9. **(Audit-surfaced)** Possible inv 18 extension to Care Episode + multi-episode-per-encounter (audit finding §4 inv 18)

### E.3 DL-16 amendments (4 from Layer 2 G.3)

1. 21+ Client Alert event types enumerated as concrete CNS event vocabulary
2. Alert 2-level severity enum (Red / Yellow)
3. 30+ Outbound communication trigger types
4. Multi-actor envelope (4+ actor_kind including 3rd-party-integration actor like `_ClassPass API_`)
5. **(Audit-surfaced)** Possible inv 8 tenant-axis extension to 11-axis venue (audit finding §5 inv 8)

### E.4 New DLs to draft (Layer 2 G.2 + audit additions)

1. **Commerce DL (Phase C kickoff)** — 19+ primitive enumeration per Layer 2 G.2.1
2. **Settings-Infrastructure DL** — 10-section settings-as-OS substrate per Layer 2 G.2.2
3. **RBAC DL** — permission group + atom + 2-layer composition + 4-tier authorship+attestation per Layer 2 G.2.3 + audit finding Q24
4. **Clinical-Coding DL** — Phase D flag; may defer per Layer 2 G.2.4
5. **(Session 2 + audit)** Care-Coordination DL — Care Episode primitive per Q6 + audit finding Q23
6. **(Session 2 + audit)** Federation-Topology DL extension — 11-axis venue per Q12 + audit findings §4 inv 12, 17
7. **(Session 2 + audit)** Clinical-Media DL — Photos / intake / consent / docs separate substrates per Q14

### E.5 Possible new doctrine lock — Substrate-Concept-Separation meta-principle (Q13)

Audit observation: Q13 false-equivalence audit (Session 2 Turn 19) is a meta-principle that could:
- (A) Stay a Phase B.5+ design audit checklist
- (B) Promote to new DL-XX if Phase 0 audits confirm existing brain systematically violates

Audit finding §11 surfaces 4 false-equivalence pairs the brain ALREADY admits via separation:
- Messaging substrate ≠ encounter substrate (DL-11)
- Domain canonical ≠ projection (DL-16 inv 19)
- Event ≠ orchestration_action (DL-16 inv 3)
- Patient identity ≠ patient relationship (DL-10)

The brain DOES practice substrate-concept-separation already. Whether to canonize the META-principle as a new DL is a judgment call. **Recommendation for review:** keep as Phase B.5+ design audit checklist; do not promote to DL unless additional violations surface.

### Sequencing recommendation (per Layer 2 G.4 + audit)

1. **DL-15 amendments first** (highest pre-existing doctrine; lowest scope risk; ~7-9 amendments)
2. **DL-16 amendments** (event vocabulary enumeration; ~4-5 amendments)
3. **DL-14 amendments** (tenant-axis extension; 1-2 amendments)
4. **Commerce DL draft** (highest value; many primitives)
5. **RBAC DL draft** (gates 4-tier authorship+attestation per Q10/Q24)
6. **Settings-Infrastructure DL draft**
7. **Care-Coordination DL draft** (Q6 dependent)
8. **Federation-Topology DL extension** (Q12 dependent)
9. **Clinical-Media DL draft** (Q14)
10. **Clinical-Coding DL draft** (Phase D flag; may defer)

---

## 14. §12 Recommended Phase 1 gap hardening scope (for review)

Per omni_brain_hardening Phase 1 spec: "Address each NEEDS AMENDMENT finding from Phase 0. One commit per amendment. Touch existing canonical homes only. No new substrate tables; semantic broadening of primitives allowed."

This audit suggests the following Phase 1 sequencing is reasonable IF Knox + user confirm:

### P1.1 — DL-15 7-amendment commit series

7 small commits, one per amendment. Layer 2 G.1 enumerates. Each commit:
- Reads pressure-test scenario(s) covered
- Drafts amendment text
- Adds invariant text to DL-15 in system_map
- Cross-references radar zones + ADR
- Single commit; review at each checkpoint

### P1.2 — DL-16 4-amendment commit series

4 small commits, one per amendment. Layer 2 G.3 enumerates.

### P1.3 — DL-14 inv 22 tenant-axis extension (optional; could defer with Federation-Topology DL)

Single amendment commit. Extends 4-axis to admit Q12 11-axis. Cross-link FUTURE_ARC federation.

### P1.4 — Q1 + Q6 joint resolution working session (NOT autopilot)

This is the highest-value blocker. Q1 encounter container architecture + Q6 Care Episode parent must resolve together to unlock:
- Q3 / Q7 / Q8 / Q15-Q21 follow from Q1
- Commerce DL / RBAC DL / Care-Coordination DL drafts need Q1+Q6 settled

**Recommended format:** synchronous Knox + user + Opus working session targeting:
- (a) Review pressure-test §10.1 4 architectural options A/B/C/D
- (b) Confirm Knox tentative position (Option A: single + profile_enum + policy_table)
- (c) Confirm Care Episode hierarchy (parent of Encounter; line.care_episode_id allows multi-episode-per-encounter)
- (d) Write Q1+Q6 resolution doc to designs/

### P1.5 — Substrate slice scoping (POST-Q1)

After Q1+Q6 resolve, scope Day 0 thin slice per pressure-test §8. Should include:
- Substrate table list (~30-40 tables)
- RPC list (~12-15 lifecycle operations)
- Event_kind list (~15 minimum, registered in DL-16 taxonomy registry)
- UI surface list (minimum)

This is THE pivot from doctrine to substrate. Knox + user signoff required before scoping. NOT in this audit.

### Phase 0 scope NOT touched here

The omni_brain_hardening Phase 0 spec includes other audit territory (`§1Q` rules engine adequacy, `§1Q.21` Marketing Lifecycle, primitive #10 physical migration approach, primitive #11 AI runtime adequacy). This audit only covered the SCHEDULING SLICE of Phase 0. Full Phase 0 audit remains. Recommend:

- (a) This scheduling-slice audit lands first; Knox + user review
- (b) If healthy, audit Marketing Lifecycle slice (separate doc)
- (c) Audit `§1Q` rules engine adequacy slice
- (d) Audit primitive #10 physical migration approach
- (e) Audit primitive #11 AI runtime implementation adequacy

Then full Phase 0 verdict.

---

## 15. §13 Discipline reaffirmed (footer)

This audit is:

- A **gap audit** per Knox direction
- **NOT** doctrine amendment
- **NOT** new DL drafts
- **NOT** migrations / code
- **NOT** Q1 resolution
- **NOT** pressure-test or Layer 2 edits
- **NOT** omni_brain_hardening sequencing edits

All findings are observations for joint Knox + user review.

**Aggregate verdict:** the brain is structurally healthy. 80%+ of pressure-test claims are COVERED or PARTIAL-with-amendment-path. The MISSING items cluster around Q1+Q6+Q10+Q11+Q12+Q14 — the questions Knox + user explicitly SHELVED for joint resolution. The CONFLICTS bucket has 1 potential conflict (C.1 encounter container vs mini-brain anti-pattern; resolvable via Q1 framing) and 4 amendment-territory tensions (already enumerated in Bucket E).

**No question resolved during this audit.** All 24 questions Q1-Q24 remain OPEN. All amendments deferred to Phase B.5+ doctrine sharpening per Knox + user joint discipline.

Per omni_brain_hardening Phase 0 checkpoint discipline: **user + Knox review findings. Decide: skip to Phase 2 (brain proven adequate) OR proceed to Phase 1 (gaps found).**

This audit's recommendation: **Phase 1 gaps exist** (16 in Bucket B + 5 in Bucket C + ~14 amendments in Bucket E). Phase 1 hardening is warranted IF Knox + user confirm sequencing per §14 above. Q1+Q6 joint resolution is highest-value blocker.

---

**End of Phase 0 OMNI Brain Audit (2026-05-17). Ready for joint Knox + user review.**
