# Phase B — Scheduling substrate canonization (two-commit sequence: DL-16 first, then DL-15)

**Status:** binding plan. Bound by **DL-14** (OMNI CNS center of gravity), **DL-15** (Scheduling Substrate Spine — landing Commit 2 of this plan), **DL-16** (universal CNS event envelope + taxonomy evolution — landing Commit 1 of this plan), **ADR §7.17**, and **ADR §7.19**.

**Sits on top of:** `06e0c22` (Phase A.2: DL-14 invariants 7-22 — AI hybrid layer / jurisdiction / Compose Assist / intent preservation / prompt injection defense / live-state revalidation).

**Replaces:** the prior single-commit Phase B plan (which would have landed DL-15 only, with a closed scheduling event taxonomy and missing universal distributed-systems guardrails). That earlier draft was rejected during pressure-test rounds A-H — see "Scope evolution" below.

---

## §1 Why this plan exists

Phase A canonized **DL-14** — OMNI CNS center of gravity (event-driven care coordination brain; rails and surfaces are outputs; subsystems subordinate, not omnipotent). Phase A.2 hardened the AI hybrid layer underneath DL-14 (invariants 7-22).

The next phase was originally intended to be **Phase 0** (brain hardening adversarial audit — eleven required stress scenarios per `.cursor/plans/omni_brain_hardening_d1ef429b.plan.md`). But mid-conversation, the user reframed:

> *"what is the next best design item overall?? scheduling, sales, and rx writing all remain undefined. those are major pillars imo. major rails into and out of the CNS. how are we gonna harden a CNS without understanding scheduling requirements to a high degree first?? how would tesla design a self driving car? would they hook up all the road sensors first and then design and harden the CNS?????? or would they hook up 2 sensors (intake and messaging) and wing the CNS??????"*

The reframing was right. Phase 0 against an under-specified scheduling vocabulary would have produced a hardened brain reasoning over fragmented event grammar. Better sequence: canonize load-bearing domain primitives first, then audit the hardened brain against fully-defined domain primitives.

Phase B's first scope was: canonize **DL-15 — Scheduling Substrate Spine** (Mindbody-class scheduling depth on Day 0 per DL-5). One commit, ~25-30 scheduling invariants, ~30 scheduling-specific event kinds.

That scope did not survive pressure-test.

---

## §2 Scope evolution — why this is now a two-commit sequence (DL-16 first, then DL-15)

Eight rounds of adversarial pressure-test (rounds A-H) with Knox/chat surfaced ~30 distinct gaps. Critically: **none of them were scheduling-specific.** All applied to every domain that emits events into CNS — messaging, commerce, intake, labs, Rx, notes, calls, voicemails, fax, external-line, internal collaboration, future. Promoting the universal patterns into a scheduling-only DL would have produced drift: every future domain DL would have to re-derive the same universal patterns from scratch.

**Round A** — Closed taxonomy rejected. CNS reads events from ~20 surfaces today; dozens more over time. A finite enum forecloses extension. Vocabulary must be extensible under registry governance.

**Round B** — Event / orchestration_action conflation rejected. DL-14 invariants 16 + 17 already establish 6-layer event-sourced + CQRS pattern. The original Phase B draft was treating domain events (CNS inputs) and orchestration_actions (CNS outputs) as one substrate. Partition is binding: 7 categories (domain event / canonical state / orchestration_run / orchestration_action / projection / outcome event / cns_decision).

**Round C** — Unidirectional CNS↔domain seam rejected. The first draft framed scheduling as "scheduler emits events to CNS." Real model: scheduler is BOTH producer (events) AND consumer (orchestration_actions). Every domain integration is bidirectional. The pattern generalizes — messaging, commerce, intake, labs, Rx, notes all follow the same bidirectional seam.

**Round D** — Distributed systems guardrails missing. Causality (correlation_id / causation_id / aggregate_id), atomic state mutation (event sourcing or transactional outbox), payload minimization (PHI hydrated by consumers per policy), replayability (CNS decisions replayable against historical timelines), authorization (producer + emission + execution), compensation (compensating actions, not silent rollback), consistency tiers, GDPR/CCPA erasure (pseudonymization, not physical deletion). None scheduling-specific.

**Round E** — AI content validation, source-of-truth reads, patient impersonation, saga-only cross-domain, observability + circuit breakers, environment segregation, producer auth, decision records, compensation, granularity routing, context snapshot immutability, lock discipline, unit/value normalization, manual reality capture, privileged-action approval, tamper-evident audit, out-of-band reconciliation.

**Round F** — Cycle detection (causation_depth limit), consistency tier declaration per event_kind, AI content validation against canonical state before emission, source-of-truth reads for clinical-decision surfaces, unverified-handle PHI gating, cross-domain atomic write rejection.

**Round G** — Math correction. The summary count was wrong (chat's 9 + Opus's 5 + Knox's 7 ≠ 16; it's 21). Mechanically numbered invariant list demanded. Producer authorization + first-class CNS decision records + compensation discipline + event granularity routing + context snapshot immutability + aggregate concurrency / lock discipline + unit/timezone/value normalization + manual reality capture added.

**Round H** — Final additions: operational observability + circuit breakers (event lag / DLQ age / projection staleness / action failure rate / unauthorized event attempts / schema rejection rate; pause/resume by tenant / domain / event_kind / action_kind / rail; emergency safe mode), producer/consumer schema contract governance (registry tracks active producers + consumers + required fields + compatibility class + schema owner + migration plan; breaking changes require migration), environment / sandbox / replay segregation.

**Result:** the universal guardrails became **DL-16** (39 mechanically-numbered invariants). The scheduling-specific guardrails became **DL-15** (28 invariants, all subordinate to DL-16). Commit 1 = DL-16. Commit 2 = DL-15.

If DL-16 lands second, DL-15 inherits drift from undefined universals. If DL-16 lands first, DL-15 (and all future domain DLs — commerce Phase C, Rx/labs Phase D, notes, intake-events) specialize cleanly against the universal substrate.

---

## §3 Commit 1 — DL-16 doctrine lock + universal CNS envelope + taxonomy evolution

### §3.1 DL-16 invariant set (39 mechanically numbered, grouped by theme)

**Foundation (1-4)**

1. **Extensibility under registry governance.** Event vocabulary is open + extensible. CNS reads ALL meaningful events from every domain that activates. New `event_kinds` register through the taxonomy registry; finite enums REJECTED.
2. **Universal event envelope.** Every event carries: `event_id`, `event_kind`, `domain`, `source`, `actor`, four time fields (`occurred_at`, `recorded_at`, `effective_at`, `valid_from`, `valid_to`), `entity_refs`, `before_state`, `after_state`, `payload_version`, `schema_version`, `audit_lineage`, `idempotency_key`, `confidence`, `correlation_id`, `causation_id`, `aggregate_id`, `sequence_number`, `tenant_id`, `environment_context`, `replayability_flag`, `status`, `replacement_kind`, `retention_class`, `consistency_tier`, `cost_attribution`.
3. **Seven-category vocabulary partition.** Domain event / canonical domain state / orchestration run / orchestration action / rail-or-surface projection / outcome-or-feedback event / cns_decision. Events and orchestration_actions are NOT the same row type.
4. **Bidirectional CNS↔domain seam.** Every sibling is BOTH producer (events) AND consumer (orchestration_actions). Unidirectional REJECTED.

**Envelope + atomicity (5-9)**

5. **Taxonomy registry governance.** Owner / schema / status / deprecation path / producer list / consumer list per `event_kind` + `action_kind`. Breaking schema changes require migration plan + compatibility tests.
6. **Atomic state mutation.** Sibling executors mutate canonical state and emit the corresponding event in the same atomic boundary (event sourcing OR transactional outbox). Silent state mutations REJECTED.
7. **Payload minimization + policy-scoped PHI hydration.** Events carry minimum data for routing; consumers hydrate PHI per role / capability / relationship scope / jurisdiction / DLP. Full-PHI broadcast REJECTED.
8. **Multi-tenant isolation at event-bus level.** Every event carries `tenant_id`; subscribers enforce tenant boundary at subscription + delivery. Default = strict isolation; permeability opt-in per A1 federation.
9. **Schema versioning rules.** Additive = compatible; removed = breaking; renamed = aliased; type change = breaking. Registry tracks per-field compatibility class.

**Execution + reliability (10-15)**

10. **Emission-time authorization.** CNS code checks AI autonomy / capability / jurisdiction / clinical clearance / policy before emitting `orchestration_actions`. Executor's check is second line, not only line.
11. **Idempotent execution.** Executor + rail dispatchers check `idempotency_key` before side-effect emission. Replays do not double-fire.
12. **DLQ + manual review.** Failed-after-retries actions land in DLQ with admin/ops review pathway. Silent drop REJECTED.
13. **Retention class declaration.** Per `event_kind`: how long retained, encryption-at-rest class, legal-hold supersession.
14. **Executor timeout contract.** Every executor declares max wall-clock; on timeout, action transitions to `failed` with `timeout_reason`. Hung actions REJECTED.
15. **Correlation across runs.** Multi-step pathway journeys carry `correlation_id` linking events / runs / actions / outcomes / decisions.

**Replay + temporal + projection (16-19)**

16. **Explicit replay safety modes.** Simulation replay non-emitting by default; operational recovery replay requires authorized mode + idempotency + rail-side duplicate suppression. Mode declared via `environment_context`.
17. **Executor outcome contract.** Every executed action emits a corresponding outcome event (success / failed / suppressed / overridden / acknowledged / edited / thumbed). No silent execution.
18. **Temporal validity for window-semantic facts.** Clinical clearance / consent / financial authorization carry `effective_at` + `valid_from` + `valid_to`. Single-timestamp REJECTED for window-semantic facts.
19. **Projection freshness + rebuildability.** Projections rebuildable from canonical state + event stream. Projections NEVER authority for clinical-decision surfaces.

**Consistency + causality + erasure (20-22)**

20. **Causality cycle detection + depth limit.** `causation_depth` tracked per action; threshold rejection (default 8-10; per-action_kind overridable). Cascade-bug becomes audit-event, not DDoS.
21. **Consistency tier declaration per event_kind.** Strong / eventual / best-effort. Clinical = strong; analytics = eventual; telemetry = best-effort.
22. **GDPR / CCPA erasure-by-pseudonymization.** PII columns replaced with tombstone refs; audit causality preserved. Physical event deletion REJECTED. HIPAA / regulatory legal hold supersedes.

**AI integrity + identity (23-25)**

23. **AI content validation against canonical substrate before emission.** AI cannot draft "your appointment is confirmed" when no `appointment_booking_action` resolved successfully.
24. **Source-of-truth reads for clinical-decision surfaces.** Clinical decisions read canonical state, NEVER projections. Projection-as-clinical-authority REJECTED.
25. **Patient impersonation gate.** Events from unverified handles get PUBLIC routing context only; PHI hydration requires identity confidence ≥ L-threshold + audit.

**Saga + observability + environment (26-28)**

26. **Saga-only cross-domain coordination.** Cross-sibling atomic writes REJECTED; each sibling owns its own write atomicity; cross-domain coordinated via orchestration_run + compensation.
27. **Operational observability + circuit breakers.** Metrics (event lag / DLQ age / projection staleness / action failure rate / unauthorized event attempts / schema rejection rate). Pause/resume by tenant / domain / event_kind / action_kind / rail. Emergency safe mode preserves clinical / safety routing, suppresses non-critical automation.
28. **Environment segregation.** Every event / run / action / replay / import / executor call carries `environment_context`. Non-production = non-emitting by default. Production executors reject non-live actions without explicit allow-list.

**Governance (29-30)**

29. **Producer authorization.** Every producer authenticated + authorized for `event_kind` / `domain` / `tenant` / source-attested. External webhooks require signature verification + provider-event idempotency. Internal services cannot publish arbitrary kinds without registry permission.
30. **First-class CNS decision records.** Distinct from events / runs / actions / outcomes. Every action traces to a `decision_id` or explicit human/manual bypass record. Captures triggering events / context snapshot / rule versions / AI versions / policy resolution / rejected alternatives / emitted actions / reason.

**Reality + routing + concurrency + audit + reconciliation (31-39)**

31. **Compensation discipline.** Failed or incorrect actions use compensating actions (correction / cancellation / reversal / refund / retraction / supersession / apology). Silent rollback REJECTED for irreversible side-effects (SMS sent, lab order placed, deposit charged).
32. **Event-granularity routing.** Universal ingestion; selective action evaluation per subscription / routing policy (domain / event_kind / criticality / actor / tenant / interest). Low-value telemetry does NOT trigger orchestration unless subscribed.
33. **Context snapshot immutability.** Decision-time state captured for replay / audit / debug. Distinguish current state from decision-time state.
34. **Aggregate concurrency / lock discipline.** Actions targeting scarce or exclusive resources require coordination keys / leases / optimistic concurrency. Scheduler / payment / Rx / messaging executors reject stale or conflicting actions; emit conflict outcome events.
35. **Unit / timezone / value normalization.** Payloads declare normalized values for time zones / units / currency / coded vocabularies (LOINC / SNOMED / RxNorm / NDC where applicable) + raw source values for provenance.
36. **Manual reality capture.** Manual / out-of-band operational actions (staff phone calls / verbal clearances / paper bookings / walk-ins / manager overrides) re-enter CNS via capture pathways or reconciliation events. CNS does NOT assume all reality originated inside OMNI.
37. **Privileged action discipline.** Dual approval + break-glass + auto-time-bound + immediate audit alert + post-action review for: rule modification, safety check disable, mass-pause, cross-tenant access, schema-breaking change, PHI export, mass-erasure, retention class change, audit log inspection, tombstone-mapping access, executor allow-list change, environment-context promotion.
38. **Tamper-evident audit log.** Append-only + hash-chained OR immutable storage. Mutations require break-glass + dual approval + meta-audit-event.
39. **Out-of-band reconciliation jobs.** Periodic validation of projections + executor state + canonical state against event stream. Drift becomes audit-event, not silent corruption.

**Admitted-but-deferred items**

- **D1.** Distributed tracing infrastructure (OpenTelemetry-grade or equivalent) — `correlation_id` + `causation_id` need runtime tooling. Deferred to e1+ build.
- **D2.** Data residency / sovereignty per tenant — bind event bus topology + storage location per tenant for Canada PHIPA, EU GDPR, US state-level requirements.
- **D3.** Substrate-level deprecation discipline — whole-substrate deprecation (not just per-`event_kind`) is implicit in DL-12 + Phase A.2 (`outbound_jobs` → `orchestration_actions` rename); admitted explicitly.

### §3.2 Commit 1 — files touched

- **MAIN system map** `.cursor/plans/system_map_three_layers_60706286.plan.md`:
  - `## Doctrine locks` — add **DL-16** block after DL-14 with all 39 invariants + rejected reframings + admitted-but-deferred (~300 lines).
  - New top-level section **§1Z — Universal CNS Event Envelope + Taxonomy** with ~18 subsections covering envelope, partition, registry, atomicity, PHI hydration, isolation, authorization, idempotency, DLQ, retention, timeouts, correlation, replay, temporal, projections, consistency, causality, erasure, AI validation, source-of-truth, impersonation, saga, observability, environments, producer auth, decision records, compensation, routing, context snapshots, locks, normalization, manual capture, privileged-action, tamper-evident audit, reconciliation, admitted-deferred, rejections, cross-links.

- **Foundational doc** `.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md`:
  - §0 anchor extension: DL-16 commentary block.
  - §8.1 clauses **66-95** (30 new clauses binding DL-16 invariants 1-39 as cross-cutting concerns).

- **ADR** `docs/architecture/phase_4h_target_first_decision_record.md`:
  - New **§7.19** — DL-16 decision record with 20+ rejected alternatives + specialization-vs-foundation note + admitted-but-deferred items + reconciliation pointers.

- **Pressure-test radar** `docs/architecture/v1_pressure_test_radar.md`:
  - Zones **114-131** (18 zones) — closed taxonomy / event-action conflation / unidirectional seam / non-atomic mutation / PHI broadcast / cross-tenant leak / unregistered schema / executor-only authorization / two-phase commit / replay-mode confusion / single-timestamp / projection-as-authority / unlimited cascades / physical-event deletion / AI-hallucinated action references / auto-PHI for unverified / privileged-without-approval / mutable audit + no reconciliation.

- **Communications topology** `docs/architecture/communications_topology.md`:
  - §1.0 — DL-16 binding cross-reference for messaging-domain event vocabulary inheritance.

- **Evolution narrative** `docs/architecture/evolution_narrative.md`:
  - **Act XVI part 1** — DL-16 canonization (forced by Phase B scheduling pressure-test).

- **NEW file** `docs/architecture/cns_taxonomy_reconciliation.md`:
  - Cross-surface reconciliation table — ~20 OMNI surfaces × 7 vocabulary categories + reconciliation patterns + anti-pattern cross-link to radar zones 114-131.

- **This plan file** `.cursor/plans/phase_b_scheduling_e2c30269.plan.md`:
  - Two-commit sequence (Commit 1 DL-16, Commit 2 DL-15) + scope evolution + pressure-test arcs A-H.

### §3.3 Commit 1 — single commit on top of `06e0c22`

All Commit 1 artifacts ship as one commit titled:

> *doctrine: canonize DL-16 universal CNS event envelope + taxonomy evolution (39 invariants; Phase B Commit 1, ahead of DL-15 scheduling specialization)*

---

## §4 Commit 2 — DL-15 doctrine lock + scheduling substrate spine (specialization against DL-16)

### §4.1 DL-15 invariant set (28 invariants, all subordinate to DL-16)

To be authored at Commit 2. Coverage:

1. Mindbody-class scheduling depth on Day 0 (DL-5 binding) — provider calendars, rooms, suites, devices, equipment, multi-resource bookings, prep + cleanup dependencies, service-package catalog.
2. Multi-resource atomicity (provider + room + device + MA + service-time + prep + cleanup booked as one atomic operation; partial bookings REJECTED).
3. Slot offer + hold + book lifecycle (slot proposed → slot held → slot consumed → appointment booked, OR slot disappeared → live-state revalidation per DL-15 inv 11 → action transitions to `slot_lost`).
4. Slot-hold timeout discipline (holds auto-expire after configurable interval; expired holds release resources atomically).
5. Appointment lifecycle states (proposed / held / confirmed / checked-in / in-progress / completed / cancelled / no-showed / rescheduled / disputed / archived).
6. Reschedule-cancel-no-show-waitlist semantics (compensation per DL-16 inv 31; rebooking via NEW orchestration_action with linked compensation).
7. Cancellation policy enforcement (deposit forfeiture / refund-percent / no-show fee / staff override).
8. Waitlist substrate (join → offer → accept/expire → promotion → fallback).
9. Deposit coupling (deposit required before booking; failed deposit → action `failed_payment`; refunded deposit → action `compensation_refund`).
10. Clinical clearance gating (contraindication / medication flag / pregnancy / GLP-1 lab / blood-thinner Botox interrupt — ABSOLUTE per DL-14 inv 21).
11. Live-state revalidation before action firing (DL-16 inv 24 source-of-truth read; if slot disappeared between proposal and execution, action transitions to `failed_stale` → emit conflict outcome event).
12. Jurisdiction-aware booking (provider state license / location regulation / brand rules / Cultured vs Evo separation).
13. AI-assisted booking via AI Compose Assist (bounded autopilot per DL-14 inv 18 — AI proposes slots; CNS deterministic policy validates; action substrate executes; AI never bypasses clinical clearance).
14. Clinical-cue interrupt during booking (any cross-envelope safety detection halts booking pipeline; provider review action required).
15. Prompt injection defense at booking surface (DL-14 inv 20 hierarchy; patient self-booking text is UNTRUSTED data; clinical-cue extraction goes through safety envelope, not booking envelope).
16. orchestration_runs binding (multi-step booking journeys — new-lead → consult → first-Tx → follow-up — live on `orchestration_runs`; single-emission booking actions on `orchestration_actions`).
17. Federation-aware booking (DL-10 multi-tenant; A1 permeability — cross-brand booking opt-in per consent).
18. Patient-profile integration (booking action reads patient profile for past-visit history / preference / capability / contraindication / saved-card / membership — DL-16 inv 7 payload minimization + inv 24 source-of-truth reads).
19. Audit lineage for every booking action (DL-16 inv 30 — decision record with rejected slot alternatives, AI invocation if any, policy resolution).
20. Staff override + manual booking pathway (front desk books directly with audit; bypass-AI fast path per Phase A.2; manual reality capture per DL-16 inv 36).
21. Per-resource concurrency lock (DL-16 inv 34 — provider × time-slot, room × time-slot, device × time-slot; optimistic concurrency rejection emits conflict outcome).
22. Scheduling domain events specialize DL-16 inv 2 envelope.
23. Scheduling orchestration_actions specialize DL-16 inv 3 partition.
24. Scheduling↔CNS bidirectional seam specializes DL-16 inv 4.
25. Compensation for incorrect booking actions per DL-16 inv 31 (cancellation message, refund, supersession — NOT silent revert).
26. Scheduling consistency tier — strong (DL-16 inv 21) for booking writes; eventual acceptable for waitlist analytics.
27. Scheduling retention class declaration (DL-16 inv 13) — appointments long-retained for medico-legal; slot-search telemetry low-retention.
28. Scheduling reconciliation jobs (DL-16 inv 39) — periodic validation of appointment projections vs canonical state vs event stream; drift becomes audit-event.

### §4.2 Commit 2 — files touched (per existing pending todos)

- MAIN system map — DL-15 doctrine lock block + extend §1F.10-§1F.24 (15 new subsections; §1F.23 patient profile prominent).
- Foundational doc — §4.B `scheduling_lifecycle/` extension + §8.1 binding clauses for DL-15.
- ADR — new §7.18 with DL-15 rejected alternatives.
- Pressure-test radar — DL-15 anti-pattern zones (~22 zones).
- Communications topology — DL-15 cross-references (scheduling↔messaging seam).
- Evolution narrative — Act XVI part 2 (DL-15 canonization on top of DL-16 substrate).
- Brain hardening plan refresh — Phase 0 audit scope includes per-domain DL-16 compliance + DL-15 specialization checks.
- This plan file — mark Commit 2 complete.

### §4.3 Commit 2 — single commit on top of Commit 1

Commit 2 ships as one commit titled:

> *doctrine: canonize DL-15 Scheduling Substrate Spine (28 invariants subordinate to DL-16; Phase B Commit 2 — first domain specialization)*

---

## §5 Success criteria

- **Commit 1**: DL-16 39-invariant set lands in canonical homes (system map doctrine locks + §1Z + foundational §0 + §8.1 + ADR §7.19 + radar 114-131 + reconciliation table + topology cross-ref + evolution narrative Act XVI part 1). All references cross-link cleanly. No invariant orphaned.
- **Commit 2**: DL-15 28-invariant set lands subordinate to DL-16; each DL-15 invariant cites the DL-16 invariant(s) it specializes. Scheduling-specific scenarios catalogued. Patient profile integration prominent. AI-assisted booking governed.
- **Phase 0 readiness**: brain hardening plan refreshed to include per-domain DL-16 compliance audit + DL-15 specialization audit + the eleven required stress scenarios.

---

## §6 Out of scope (deferred)

- **Phase C — Commerce DL** (three modes: service POS / e-commerce + retail / hims-like async subscription). Each specializes DL-16; Phase C decides per-mode invariants.
- **Phase D — Rx + labs + notes DL**. Source-of-truth reads (DL-16 inv 24) + AI content validation (inv 23) bind hardest here.
- **Distributed tracing infrastructure** (DL-16 D1) — operational tooling; e1+ build.
- **Data residency / sovereignty** (DL-16 D2) — federation specialization arc.
- **Substrate-level deprecation discipline** (DL-16 D3) — implicit in DL-12; admitted explicitly in DL-16.

---

## §7 Cross-links

- MAIN system map `## Doctrine locks` — DL-14 + DL-15 + DL-16
- MAIN system map `§1Z` — Universal CNS Event Envelope + Taxonomy
- Foundational doc `§0` + `§4.B` + `§8.1` clauses 34-65 (DL-14 + Phase A.2) + 66-95 (DL-16)
- ADR `§7.17` (DL-14) + `§7.18` (DL-15, Commit 2) + `§7.19` (DL-16, Commit 1)
- Pressure-test radar zones 79-113 (DL-14 + Phase A.2) + 114-131 (DL-16) + DL-15-specific (Commit 2)
- Cross-surface reconciliation: `docs/architecture/cns_taxonomy_reconciliation.md`
- Communications topology: `docs/architecture/communications_topology.md`
- Evolution narrative: `docs/architecture/evolution_narrative.md` (Acts XV + XVI)
- Brain hardening plan: `.cursor/plans/omni_brain_hardening_d1ef429b.plan.md` (Phase 0 refresh post-Commit 2)
- Phase A.2 plan: `.cursor/plans/phase_a2_ai_hybrid_and_jurisdiction_canonization.plan.md`

---

— *Phase B Commit 1 (DL-16) lands 2026-05-13 evening on top of 06e0c22. Phase B Commit 2 (DL-15) follows immediately, on top of Commit 1.*
