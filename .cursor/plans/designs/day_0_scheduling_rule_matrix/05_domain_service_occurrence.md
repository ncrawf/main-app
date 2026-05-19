# Domain 5 — Service Occurrence Creation / Linking Rules (Day 0)

**Subtitle:** Canonical `service_occurrence` substrate with derived `encounter_view` where clinical  
**Date:** 2026-05-19  
**Round:** 5 (active authoring)  
**Status:** AUTHORED (OPEN) — not closed; Amendment K closure gate unresolved  
**Index:** [00_index.md](00_index.md)

---

## §0 Round 5 opening read receipt + explicit GO anchor

Round 5 started from the formal opening package and explicit GO signal.

Read + binding anchors:
- [Round 5 opening package](./05_round5_opening_read_receipt_gate_check.md)
- [Index §2.23 (CNS parent contract lock)](./00_index.md)
- [Index §2.24 (Domain Slice Template)](./00_index.md)
- [Index §2.24.7 (D5 pre-open checks)](./00_index.md)
- [Index §2.25 (service occurrence doctrine)](./00_index.md)
- [Round 5 pre-open checkpoint](./05_preopen_service_occurrence_checkpoint.md)
- [Round 3.6 parent contract](./03_6_cns_orchestration_core.md)

Binding ontology statement:
- parent object: `service_occurrence`
- primary classifier: `service_occurrence_kind`
- derived projection: `encounter_view` (not parent identity)

This file authorizes Domain 5 rule authoring. It does **not** declare Round 5 closure.

---

## §1 Domain 5 ownership boundary

### D5 owns
- `service_occurrence` create-vs-link policy and chain integrity.
- `service_occurrence_kind` classification policy.
- transition rules for occurrence lifecycle.
- derivation contract for `encounter_view`.
- occurrence-level candidate emission into CNS for encounter/occurrence-originated actions.

### D5 does not own
- D3 appointment lifecycle canonical truth.
- D4 scheduling confirmation/outbound state machine.
- D6 commerce, entitlement, payment, refund canonical truth.
- D7 evidence/documentation artifact canonical truth.
- Rx prescribing authority and pharmacy fulfillment truth.

---

## §2 Layer-1 substrate context (canonical parent)

```text
service_occurrence (canonical parent, Domain 5 owned)
├── id, tenant_id
├── patient_id NULL (resource-only allowed)
├── appointment_id NULL (not required for all occurrences)
├── service_occurrence_kind ENUM
├── origin_kind ENUM (scheduled|walk_in|message_triggered|lab_triggered|rx_triggered|staff_created|system_triggered)
├── trigger_domain ENUM (scheduling|messaging|lab|rx|intake|ops|other_registry_defined)
├── lifecycle_state ENUM
├── authority_class ENUM (operational|clinical|provider_required|compliance_required)
├── clinicality_level ENUM (none|adjacent|clinical)
├── context_domain ENUM (care|lab|rx|intake|ops|commerce_adjacent|other_registry_defined)
├── root_occurrence_id, parent_occurrence_id, chain_id, link_reason_code
├── occurrence_identity_key (revision-safe dedupe identity)
├── started_at, ended_at, cancelled_at, superseded_at
├── source_event_id, source_domain, causation_id, correlation_id
├── context_packet_id, context_packet_version
├── modality_path JSONB (Day 0 sequence projection; promotion rules in SO-22)
├── created_by_actor (DL-16 actor 4-tuple)
└── version, superseded_by_occurrence_id

service_occurrence_work_item (canonical atomic actualized-work unit)
├── occurrence_id FK
├── work_item_kind
├── authority_required
├── quantity/value fields (units/duration/count as applicable)
├── linked_evidence_ref NULL (D7-owned truth)
├── linked_commerce_ref NULL (D6-owned truth)
└── status

service_occurrence_link (typed graph edge; reserved Day 0 extension point)
├── from_occurrence_id FK
├── to_occurrence_id FK
├── link_type ENUM (supersedes|depends_on|follows|caused_by|references|sibling_of)
└── created_by_actor

encounter_view (derived projection, non-canonical)
├── occurrence_id FK
├── encounter_classification
├── provider_required BOOLEAN
├── documentation_required BOOLEAN
├── legal_record_required BOOLEAN
└── derivation_reason
```

---

## §3 Rule sections

| Section | Rules | Theme |
|---|---|---|
| A | SO-01 to SO-03 | Canonical parent + classifier + derived view doctrine |
| B | SO-04 to SO-06 | Create-vs-link and chain integrity |
| C | SO-07 to SO-09 | Lifecycle transitions + supersession |
| D | SO-10 to SO-12 | Authority matrix + non-collapse boundaries |
| E | SO-13 to SO-15 | Source event mapping and CNS candidate emission |
| F | SO-16 to SO-17 | Failure modes + queue ownership |
| G | SO-18 | Pressure-test conformance table |
| H | SO-19 to SO-22 | Scale hardening: admission boundary + deterministic grammar + classifier decomposition + modality home |
| I | SO-23 to SO-27 | Atomicity + closeout barrier + encounter projection hardening + patientless guard + candidate-commit handshake |
| J | SO-28 to SO-29 | Amendment K anti-assumption guard + metric-safe semantic contract |
| K | SO-30 to SO-33 | Substrate accounting + kind threshold + K-readiness preflight |
| L | SO-34 | Wide-breadth OMNI scenario corpus (pre-final validation, non-optional) |

---

## Section A — Canonical parent doctrine

### Rule SO-01: `service_occurrence` is canonical parent; `encounter_view` is derived only

**Trigger:** any create/read/update path involving occurrence/encounter semantics  
**Required inputs:** occurrence payload + classifier + authority context  
**Decision logic:**
- Store canonical truth on `service_occurrence`.
- Compute `encounter_view` as projection from canonical fields.
- Never persist `encounter_view` as competing parent identity substrate.
**Output/state change:** canonical occurrence row plus optional derived projection row/materialization  
**Failure mode:** attempted direct write to derived-only fields as canonical source -> reject  
**Audit/event:** `service_occurrence.derivation_evaluated`  
**Test case:** async review occurrence exists without forcing fixed modality encounter enum.

### Rule SO-02: `service_occurrence_kind` is primary classifier (not modality enum identity)

**Trigger:** occurrence create/classification update  
**Required inputs:** source event family + authority class + work type + modality segment (if present)  
**Decision logic:**
- Set `service_occurrence_kind` as primary classifier.
- Model modality as segment/axis attributes, not parent object identity.
**Output/state change:** classifier stored on canonical row  
**Failure mode:** create request attempts fixed-modality identity typing (for example `in_person_encounter` as parent type) -> reject  
**Audit/event:** `service_occurrence.kind_set`  
**Test case:** hybrid chain `async -> phone -> video -> in_person` links occurrences without identity conflict.

### Rule SO-03: Minimum Day 0 kind set (decomposed, non-compound, extensible)

**Trigger:** classifier validation at create time  
**Required inputs:** proposed kind  
**Decision logic:** allow at least:
- `service_delivery`
- `review`
- `procedure_step`
- `resource_session`
- `care_coordination_touch`
- `monitoring_check`

Decomposition rule:
- origin/source (`scheduled`, `walk_in`, `lab_triggered`, `rx_triggered`, etc.) is carried on origin/source fields, not in `service_occurrence_kind`.
- modality (`async`, `phone`, `video`, `in_person`, `device`, `room`) is carried in modality segment data, not in `service_occurrence_kind`.
- authority (`operational`, `clinical`, `provider_required`, `compliance_required`) is carried in authority fields, not in `service_occurrence_kind`.

`care_coordination_touch` admission threshold (strict):
- must represent actualized care/service coordination tied to a bounded service obligation (for example provider-requested follow-up coordination that alters the active care chain).
- must not be used for generic communication/admin activity (scheduling questions, billing nudges, generic staff tasks, marketing outreach, or internal chatter).
**Output/state change:** accepted classifier or validation failure  
**Failure mode:** unregistered kind -> reject with explicit reason  
**Audit/event:** `service_occurrence.kind_rejected` when invalid  
**Test case:** equipment-only sauna/room event classified as `resource_session` with `origin=scheduled` or `origin=walk_in` per source facts.

---

## Section B — Create-vs-link and chain integrity

### Rule SO-04: Create-vs-link contract is deterministic

**Trigger:** incoming event indicates new work/review/step  
**Required inputs:** source event, patient/resource identity, active chain candidates, time window, authority class  
**Decision logic:**
- **Create** new occurrence when event introduces new bounded unit of work.
- **Link** to existing chain when event continues same bounded unit across modality/channel/stage.
- Use explicit `link_reason_code` on every link decision.
**Output/state change:** new occurrence with chain metadata OR linked continuation  
**Failure mode:** ambiguous create-vs-link -> `staff_review_candidate` with queue ownership  
**Audit/event:** `service_occurrence.create_or_link_decided`  
**Test case:** inbound escalation creates provider review occurrence linked to prior async occurrence.

### Rule SO-05: Chain metadata is mandatory for linked flows (typed-link capable)

**Trigger:** occurrence linked to prior occurrence  
**Required inputs:** prior occurrence id + reason  
**Decision logic:**
- Set `root_occurrence_id`, `parent_occurrence_id`, `chain_id`, `link_reason_code`.
- Preserve lineage even if chain crosses appointment boundaries.
- For non-tree relations (dependency/reference/sibling causality), create typed `service_occurrence_link` edges.
**Output/state change:** chain graph remains queryable and auditable  
**Failure mode:** missing chain metadata on link path -> reject  
**Audit/event:** `service_occurrence.linked`  
**Test case:** lab-review occurrence links to earlier scheduled service root.

### Rule SO-06: Revision-safe duplicate prevention

**Trigger:** create request may duplicate existing occurrence  
**Required inputs:** `occurrence_identity_key`, revision/supersession context, source event id  
**Decision logic:**
- Deduplicate using identity key that includes revision/supersession branch context.
- Do not suppress valid new occurrence for a new branch after reschedule/supersession.
**Output/state change:** create accepted or duplicate suppressed with explicit rationale  
**Failure mode:** stale duplicate guard suppresses valid new branch -> raise `system_ops_queue` alert  
**Audit/event:** `service_occurrence.dedupe_evaluated`  
**Test case:** rescheduled episode creates valid new occurrence chain branch without being blocked by prior key.

---

## Section C — Lifecycle transitions and supersession

### Rule SO-07: Occurrence lifecycle states are explicit

**Trigger:** lifecycle mutation attempt  
**Required inputs:** current state + target state + reason  
**Decision logic:** allowed Day 0 states:
- `created`
- `active`
- `completed`
- `cancelled`
- `superseded`
- `aborted`
**Output/state change:** legal transition applied, illegal transition rejected  
**Failure mode:** illegal transition attempt -> reject + staff/admin review route  
**Audit/event:** `service_occurrence.lifecycle_transitioned`  
**Test case:** completed occurrence cannot transition back to active without formal supersession path.

### Rule SO-08: Supersession is first-class and stale-safe

**Trigger:** correction/replacement event after occurrence exists  
**Required inputs:** target occurrence id + replacement context  
**Decision logic:**
- Mark older row as `superseded` with `superseded_at` and `superseded_by_occurrence_id`.
- Ensure downstream candidate emission ignores superseded rows unless policy explicitly requests retrospective action.
**Output/state change:** corrected lineage with explicit supersession chain  
**Failure mode:** stale event mutates superseded row as active -> block and route to review  
**Audit/event:** `service_occurrence.superseded`  
**Test case:** corrected telehealth note creates replacement occurrence and suppresses stale branch outputs.

### Rule SO-09: Timer/async transitions require active-state revalidation

**Trigger:** timeout/async transition event (for example stale open occurrence timeout)  
**Required inputs:** current lifecycle state, current revision, supersession status  
**Decision logic:**
- Revalidate active row and revision before transition.
- Do not apply timeout transitions to completed/cancelled/superseded rows.
**Output/state change:** valid transition or safe no-op/defer  
**Failure mode:** stale timer tries to mutate inactive row -> no-op + `system_ops_queue`  
**Audit/event:** `service_occurrence.active_state_guard_blocked`  
**Test case:** delayed timer does not close occurrence already superseded by newer review.

---

## Section D — Authority boundaries and sibling seams

### Rule SO-10: Authority matrix is explicit per occurrence kind

**Trigger:** create or state proposal  
**Required inputs:** kind + requested action + actor class  
**Decision logic:**
- classify required authority as one of:
  - `operational`
  - `clinical`
  - `provider_required`
  - `compliance_required`
- reject actions lacking required authority.
**Output/state change:** authorized action applied; unauthorized action routed to owning queue  
**Failure mode:** authority mismatch -> `staff_review_candidate` or `provider_task_candidate` as appropriate  
**Audit/event:** `service_occurrence.authority_checked`  
**Test case:** operational actor can create resource-only occurrence but cannot sign clinical completion.

### Rule SO-11: D5 does not absorb D6 or D7 canonical truth

**Trigger:** occurrence workflow touches payment/entitlement/evidence semantics  
**Required inputs:** occurrence context + external domain references  
**Decision logic:**
- D5 stores linkage references only.
- D6 owns payment/refund/entitlement state commits.
- D7 owns evidence artifact and attestation commits.
**Output/state change:** D5 emits proposals/candidates instead of direct sibling-domain commits  
**Failure mode:** attempted direct commerce/documentation commit from D5 path -> reject  
**Audit/event:** `service_occurrence.cross_domain_boundary_enforced`  
**Test case:** no-show follow-up occurrence can request billing review candidate; cannot set fee collected.

### Rule SO-12: `encounter_view` derivation threshold is policy-driven

**Trigger:** occurrence create/update  
**Required inputs:** clinicality_level + authority_class + evidence requirement + policy profile  
**Decision logic:**
- derive `encounter_view` only when configured thresholds are met.
- keep non-clinical/resource occurrences as non-encounter projections.
**Output/state change:** derived projection present or absent by rule  
**Failure mode:** blanket conversion of all occurrences into encounter projections -> reject policy  
**Audit/event:** `service_occurrence.encounter_view_derived`  
**Test case:** in-house retail handoff occurrence remains non-encounter view.

---

## Section E — Source events and CNS candidate emission

### Rule SO-13: D5 source-event ownership map

| Source event | Canonical owner | D5 role |
|---|---|---|
| `appointment.checked_in` | D3 | consume and create/link occurrence candidates |
| `appointment.in_progress_started` | D3 | consume and activate/create occurrence |
| `walk_in.intake_submitted` | D5/D7 seam | create occurrence candidate |
| `message.escalated_to_provider_review` | CNS inbound loop | create/link provider review occurrence candidate |
| `lab.review_required` | Lab domain | consume and create/link `review` occurrence candidate (`origin=lab_triggered`) |
| `rx.followup_required` | Rx domain | consume and create/link `review` or `care_coordination_touch` candidate (`origin=rx_triggered`) |
| `resource.session_started` | Ops/supply/resource domain | create/link `resource_session` occurrence candidate |

### Rule SO-14: Source-event to candidate mapping

| Source event | Candidate family | Possible envelope output | Occurrence effect |
|---|---|---|---|
| `appointment.checked_in` | `occurrence_create_candidate` | `state_transition_proposal` / `staff_task` | start/create occurrence branch for scheduled service |
| `appointment.in_progress_started` | `occurrence_activate_candidate` | `state_transition_proposal` | `created -> active` if row exists, else create+activate per policy |
| `message.escalated_to_provider_review` | `provider_review_occurrence_candidate` | `provider_task` | create/link provider review occurrence |
| `lab.review_required` | `lab_review_occurrence_candidate` | `provider_task` / `staff_task` | create/link lab review occurrence |
| `rx.followup_required` | `rx_followup_occurrence_candidate` | `provider_task` / `patient_message` | create/link rx follow-up occurrence |
| `resource.session_started` | `resource_occurrence_candidate` | `state_transition_proposal` | create/link resource-session occurrence |

### Rule SO-15: Candidate emission does not imply canonical commit

**Trigger:** any D5 candidate emission  
**Required inputs:** candidate payload + context packet + ownership map  
**Decision logic:**
- emit candidate into CNS resolver.
- only owning domain writes canonical state after accepted proposal path.
**Output/state change:** candidate lifecycle progresses via parent CNS contract  
**Failure mode:** emitter attempts direct bypass (`event -> commit`) -> reject and log  
**Audit/event:** `service_occurrence.candidate_emitted` + resolver decision record link  
**Test case:** provider review candidate routed/deferred/suppressed without implicit occurrence state commit.

---

## Section F — Failure modes and owning queues

### Rule SO-16: D5 failure-mode fallback matrix

| Failure mode | Resolver-safe fallback | Owning queue class |
|---|---|---|
| missing context packet | defer + create review task | `front_desk_queue` |
| unknown authority class | block action, require routing review | `admin_config_queue` |
| ambiguous create-vs-link | staff review required | `front_desk_queue` |
| stale revision/superseded row targeted | no-op + reconciliation task | `system_ops_queue` |
| cross-domain truth missing (D6/D7) | proposal only; no commit | `billing_resolution_queue` or `clinical_triage_queue` by type |
| provider-required action without provider assignment | reroute to assignment resolution | `provider_task_queue` |

### Rule SO-17: Consent/legal visibility class handling is explicit

**Trigger:** candidate or projection may become patient/provider/staff visible  
**Required inputs:** visibility class + consent class + payload sensitivity  
**Decision logic:**
- classify each output as `patient_visible`, `staff_visible`, `provider_visible`, `audit_only`, or `external_vendor_visible`.
- if consent class is unknown, apply class-specific fallback (not blanket suppression).
**Output/state change:** safe routing/suppression/defer behavior by class  
**Failure mode:** unknown class defaults to overly broad visibility -> block + compliance review  
**Audit/event:** `service_occurrence.visibility_policy_applied`  
**Test case:** unknown PHI-over-SMS consent blocks PHI-bearing patient output while allowing staff-visible audit trail.

---

## Section G — Round 5 pressure-test conformance (authoring-stage)

### Rule SO-18: Pre-open mandatory pressure-test conformance table

| Scenario | Primary rules satisfying | Authoring-stage status | Integration gate |
|---|---|---|---|
| scheduled in-person service occurrence | SO-04, SO-07, SO-13, SO-14 | PASS (design) | downstream substrate validation |
| non-provider wellness/service occurrence | SO-02, SO-03, SO-10, SO-12 | PASS (design) | authority matrix config |
| equipment/resource-only occurrence | SO-03, SO-12, SO-14 | PASS (design) | resource event adapter maturity |
| async intake review occurrence | SO-04, SO-13, SO-14 | PASS (design) | intake domain event contract |
| message escalation to provider review occurrence | SO-04, SO-10, SO-14 | PASS (design) | provider routing/coverage config |
| phone/video follow-up occurrence | SO-02, SO-04, SO-05 | PASS (design) | modality segment data quality |
| lab-review-initiated occurrence | SO-05, SO-13, SO-14 | PASS (design) | lab domain event reliability |
| Rx/program follow-up occurrence | SO-05, SO-11, SO-14 | PASS (design) | rx domain ownership seams |
| procedure chain with checkpoints | SO-05, SO-06, SO-07 | PASS (design) | chain policy and checkpoint data |
| hybrid chain (`async -> phone -> video -> in_person`) | SO-02, SO-04, SO-05, SO-06 | PASS (design) | cross-channel correlation quality |

PASS semantics:
- PASS here means Domain 5 design conformance.
- Runtime/production pass requires integration gates to clear.

---

## Section H — Scale hardening (pressure-cook)

### Rule SO-19: Negative admission boundary — what is NOT a `service_occurrence`

**Trigger:** inbound/source event asks D5 to create occurrence  
**Required inputs:** event class + work actualization signal + domain owner  
**Decision logic:** D5 rejects creation when event is not bounded service/review/procedure/session actualization. Non-occurrence examples:
- pure retail purchase with no service/review actualization (D6)
- staff-only scheduling/admin conversation (D3/D4 ops)
- pure billing dispute/payment issue (D6)
- inventory reorder/procurement event (supply domain)
- general marketing outreach/lead nurturing (marketing domain)
- internal provider/staff discussion with no occurrence actualization
- CNS suppression/no-op decision records (CNS audit)
**Output/state change:** no occurrence created; route to owning domain candidate/queue if needed  
**Failure mode:** ambiguous event class -> `staff_review_candidate`  
**Audit/event:** `service_occurrence.admission_rejected_non_occurrence`  
**Test case:** patient asks "what time are you open?" does not create occurrence.

### Rule SO-20: Deterministic create-vs-link grammar (no intuitive linking)

**Trigger:** event admitted as occurrence-eligible  
**Required inputs:** active chain graph + identity keys + source event semantics  
**Decision logic:** choose exactly one grammar outcome:
- `new_root_occurrence`: new bounded work unit unrelated to active chain.
- `child_step_occurrence`: explicit checkpoint/step under active parent.
- `continuation_segment`: same bounded work continues across channel/modality segment.
- `branch_occurrence`: same root with alternate branch after revision/supersession.
- `superseding_replacement`: correction that supersedes existing occurrence.
- `sibling_occurrence`: separate bounded work under same broader episode.
- `non_occurrence_event`: routed out of D5 per SO-19.
**Output/state change:** chosen grammar code stored in named field `link_decision_kind` (or equivalent typed event column), not vague metadata blobs  
**Failure mode:** multiple grammar outcomes plausible with equal score -> review queue  
**Audit/event:** `service_occurrence.grammar_classified`  
**Test case:** async review escalating to video then in-person uses `continuation_segment`, not unrelated root create.

### Rule SO-21: Classifier decomposition guard (prevent compound enum drift)

**Trigger:** creation or extension of `service_occurrence_kind` values  
**Required inputs:** proposed kind + decomposition across axes  
**Decision logic:** any new kind must prove it is not a hidden combination of other axes. Cross-check against:
- origin/source axis
- modality axis
- authority axis
- domain trigger axis
- participant/resource structure axis
If meaning can be represented by existing kind + axis attributes, reject new kind.
**Output/state change:** accepted kind or rejected extension  
**Failure mode:** compound kind admitted -> schema drift alert to `admin_config_queue`  
**Audit/event:** `service_occurrence.kind_decomposition_checked`  
**Test case:** reject proposed `async_provider_lab_video_followup` as compound.

### Rule SO-22: Modality segment home is explicit (without parent identity collapse)

**Trigger:** chain includes multi-modality progression  
**Required inputs:** sequence of modality/channel segments + timestamps + actor handoffs  
**Decision logic:**
- record modality progression in `modality_path` for Day 0 sequence visibility.
- modality changes alone do not force new root occurrence unless SO-20 grammar says new/sibling/branch.
Promotion rule (binding):
- promote to typed child substrate (for example `service_occurrence_segment`) when any of the following is required:
  - segment-level ownership/authority decisions
  - segment-level evidence linkage
  - segment-level participant/resource assignment
  - segment-level SLA/queue/routing accountability
  - segment-level analytics beyond simple ordered sequence
**Output/state change:** explicit segment trail for chain introspection and audit  
**Failure mode:** modality evidence absent for hybrid chain -> integration-gate fail  
**Audit/event:** `service_occurrence.modality_path_updated`  
**Test case:** `async -> phone -> video -> in_person` retains one root chain with segment trail.

---

## Section I — Atomicity, closure barriers, legal projection, and handshake

### Rule SO-23: Atomic child work-unit layer is mandatory for performed granularity

**Trigger:** occurrence includes one or more performed/actualized units  
**Required inputs:** parent occurrence + unit-level execution details  
**Decision logic:**
- create one or more `service_occurrence_work_item` rows.
- keep parent occurrence as container/graph node; keep work items as atomic execution detail.
- link to D7 evidence and D6 commerce by references only (no ownership capture).
- `service_occurrence_work_item` is canonical atomic actualized-work primitive for D5.
- where `encounter_line` survives in adjacent domains, it is treated as a projection/materialization mapped from work items (not a competing canonical primitive).
- `service_occurrence_work_item` represents performed/consumed/actualized work only; it does not represent retail product ownership or commerce ledger truth.
- D6 owns sold/redeemed/returned/refunded/partial-refunded/split-tender/account-credit/void/reversal states on `commerce_order_line` and related commerce substrates.
- financial adjustments do not rewrite D5 work-item truth; they update linked D6 commercial truth.
**Output/state change:** atomic work-item rows attached to parent  
**Failure mode:** parent completion attempted with zero work-item evidence where required by policy -> block  
**Audit/event:** `service_occurrence.work_item_recorded`  
**Test case:** one in-person service with two performed components generates two work items under one occurrence.

Mini pressure-test confirmation (binding boundary):
- Hydrafacial performed -> D5 `service_occurrence_work_item`
- Hydrafacial charge/refund/redeem/partial-refund (including 50% card + 50% cash) -> D6 `commerce_order_line` truth
- SkinBetter serum sold -> D6 product/commerce truth (not a D5 work item)
- product counseling/instruction by staff/provider -> may be D5 work item (actualized work), while product sale remains D6

### Rule SO-24: Occurrence completion is not commerce/documentation/legal closure

**Trigger:** lifecycle transition to `completed` requested  
**Required inputs:** occurrence state + D6/D7 closure signals + authority requirements  
**Decision logic:**
- allow D5 `completed` for actualization boundary only.
- do not imply D6 commerce settlement complete.
- do not imply D7 documentation/attestation complete.
- if siblings unresolved and policy requires reconciliation, emit reconciliation candidates/tasks.
**Output/state change:** occurrence may complete while sibling closures remain open  
**Failure mode:** patient-facing "all complete" emitted without sibling closures -> block and route  
**Audit/event:** `service_occurrence.closeout_barrier_evaluated`  
**Test case:** occurrence completes but missing attestation triggers D7 follow-up task.

### Rule SO-25: `encounter_view` has two classes — operational projection vs record-grade materialization

**Trigger:** `encounter_view` derivation requested  
**Required inputs:** derivation policy + authority class + legal/documentation thresholds  
**Decision logic:**
- `encounter_view_class = operational_projection` for UI/operational routing.
- `encounter_view_class = record_materialization` when legal/clinical record thresholds are met.
- record materialization requires derivation version, source refs, rationale, and correction/supersession traceability.
- record materialization is snapshot-oriented: once signed/materialized, source derivation inputs are version-pinned.
- later corrections do not silently rewrite historical record materialization; they create superseding materialization lineage.
**Output/state change:** classified derived view with policy metadata  
**Failure mode:** record-grade use without required derivation metadata -> reject  
**Audit/event:** `service_occurrence.encounter_view_materialized`  
**Test case:** clinical provider-signed occurrence materializes record-grade encounter view.

### Rule SO-26: Patientless/resource-only guardrails are explicit

**Trigger:** occurrence create with `patient_id = NULL`  
**Required inputs:** occurrence kind + identity confidence + later-link policy  
**Decision logic:**
- allow null patient only for approved non-patient-bound contexts (primarily `resource_session`).
- resource utilization alone is not sufficient; D5 admission requires patient/customer-facing service-session actualization signal or explicit policy-approved service-session context.
- forbid automatic conversion of patientless occurrence into patient-visible clinical occurrence without explicit provenance link event.
- require identity confidence and actor attribution for later patient association.
**Output/state change:** constrained patientless occurrence or rejected create/link  
**Failure mode:** patientless occurrence used for clinical decisioning without provenance -> block  
**Audit/event:** `service_occurrence.patient_identity_guard_applied`  
**Test case:** room/device session starts patientless; later linked to patient only via explicit provenance event.

### Rule SO-27: Candidate-to-commit handshake is mandatory (proposal is not execution)

**Trigger:** D5 candidate resolved by CNS with proposal/action decision  
**Required inputs:** candidate id + resolver decision + domain accept/reject evaluation  
**Decision logic:**
- D5 must emit explicit outcome event:
  - `proposal_accepted_applied`
  - `proposal_rejected`
  - `proposal_deferred`
- canonical commit occurs only on accepted/applied path.
- decision record must include resolver decision id + owning-domain outcome.
**Output/state change:** unambiguous proposal-to-commit trace  
**Failure mode:** candidate resolved without owning-domain outcome event -> reconciliation alert  
**Audit/event:** `service_occurrence.proposal_outcome_recorded`  
**Test case:** provider-review proposal deferred for coverage window emits explicit deferred outcome, no ghost commit.

---

## Section J — Amendment K anti-assumption and metric semantics

### Rule SO-28: Round 5 must not encode hidden one-patient-one-occurrence invariant

**Trigger:** any create/link policy or schema decision in D5  
**Required inputs:** participant/seat/roster/guest scenario applicability  
**Decision logic:**
- verify D5 policies remain compatible with unresolved Amendment K options (A/B/C path).
- block any implicit invariant that forces one patient = one occurrence as universal rule.
- mark affected flows as closure-gated until Amendment K resolution entry exists in §2.22.4.
**Output/state change:** compatibility assertion recorded or blocked decision  
**Failure mode:** hidden single-patient assumption detected -> closure blocker  
**Audit/event:** `service_occurrence.amendment_k_compatibility_checked`  
**Test case:** group sauna/caregiver scenario can be represented without forced single-patient identity collapse.

### Rule SO-29: Metric-safe semantic contract (Day 0 minimum)

**Trigger:** analytics/operational metrics definitions requested from D5 substrate  
**Required inputs:** occurrence rows + work items + encounter view classes  
**Decision logic:** define minimum metric-safe counters:
- `occurrence_count` (canonical parent rows)
- `occurrence_work_item_count` (atomic units)
- `clinical_occurrence_count` (by clinicality/authority policy)
- `record_materialized_encounter_view_count`
- `resource_session_occurrence_count`
- `provider_required_occurrence_count`
Do not treat any single count (especially `occurrence_count`) as proxy for service volume, clinical volume, revenue, provider productivity, documentation completeness, attestation completion, or entitlement consumption.
**Output/state change:** stable semantic definitions for downstream reporting  
**Failure mode:** dashboard equates occurrence count to billable or documented completeness -> reject metric contract  
**Audit/event:** `service_occurrence.metric_semantics_published`  
**Test case:** one parent occurrence with two work items reports counts distinctly.

---

## Section K — Substrate accounting + K-readiness preflight

### Rule SO-30: Explicit substrate accounting for newly introduced D5 primitives

**Trigger:** D5 introduces or hardens canonical primitives  
**Required inputs:** primitive name + ownership + doctrine mapping  
**Decision logic:** every new/extended primitive must be accounted as `OK`, `OK_WITH_EXTENSION`, or `NEW_SUBSTRATE_NEEDED` and mapped to owning doctrine/amendment path.

| Primitive | Day 0 verdict | Doctrine/accounting status | Required follow-through before Round 5 closure |
|---|---|---|---|
| `service_occurrence_work_item` | `OK_WITH_EXTENSION` | D5 canonical atomic unit extension; must be reconciled with prior `encounter_line` intent under DL-20 Round 5/7 amendment accounting | record explicit DL-20 amendment mapping and D6/D7 linkage semantics in closure package |
| `service_occurrence_link` | `OK_WITH_EXTENSION` | reserved typed-edge extension for non-tree causality | if any scenario requires multi-causal links beyond root/parent/chain, promote from reserved to implemented substrate before closure |
| `service_occurrence_segment` (future promotion from `modality_path`) | `NEW_SUBSTRATE_NEEDED` when trigger conditions met | Day 0 may keep JSONB sequence only | if segment-level ownership/evidence/SLA/analytics is required by K scenarios, promotion is mandatory before closure |
| `origin_kind` / `trigger_domain` / `context_domain` | `OK_WITH_EXTENSION` | decomposed queryable axis fields to prevent compound enum relapse | ensure indexed/queryable implementation plan is included in substrate slice handoff |

**Output/state change:** substrate accounting table locked in D5 rule artifact  
**Failure mode:** new primitive added without accounting entry -> closure blocker  
**Audit/event:** `service_occurrence.substrate_accounting_recorded`  
**Test case:** introducing `service_occurrence_work_item` without verdict/mapping is rejected by rule.

### Rule SO-31: Queryable decomposed axes are required for `review` and other broad kinds

**Trigger:** occurrence of broad kind (`review`, `care_coordination_touch`, `monitoring_check`) created or queried  
**Required inputs:** kind + origin/domain/modality/authority/clinicality fields  
**Decision logic:**
- writes are invalid if decomposed axis fields are missing.
- reads/reporting must be able to filter by `service_occurrence_kind` + axis fields without resurrecting compound kinds.
**Output/state change:** broad kinds remain queryable without enum explosion  
**Failure mode:** repeated demand for `lab_review`/`rx_review` pseudo-kinds due to missing axis data -> schema quality incident  
**Audit/event:** `service_occurrence.axis_completeness_checked`  
**Test case:** `kind=review, origin_kind=lab_triggered, authority_class=provider_required` query works without adding `lab_review` kind.

### Rule SO-32: K-readiness + async-care preflight matrix (before A/B/C decision)

**Trigger:** Round 5 pre-closure readiness check  
**Required inputs:** candidate scenario set  
**Decision logic:** run each scenario against D5 model and capture shape + implication + Amendment K compatibility.

Binding doctrine sentence:
- **Async care is not appointmentless scheduling; it is service occurrence without a synchronous appointment container.**

| Scenario | Appointment shape | Service occurrence shape | Work-item shape | Participant/seat/guest/roster shape | Commerce/entitlement implication | Documentation implication | Patient visibility implication | K compatibility (A/B/C) |
|---|---|---|---|---|---|---|---|---|
| Group sauna party of 4 | one booking with multi-seat intent | one root + seat/participant-linked child or per-seat siblings (policy-dependent) | per-seat work items | explicit seat/roster required | per-seat entitlement + guest payment split | roster-aware session documentation | each participant sees only own permitted view | requires K(A) or K(C); weak under K(B) |
| Patient + caregiver PT visit | single appointment + caregiver present | one patient-root occurrence + caregiver participant linkage | service work item(s) for patient only | caregiver role (non-care recipient) required | no separate caregiver charge by default | caregiver presence may be documentation-relevant | caregiver visibility constrained by consent | requires K(A/C) participant semantics |
| Parent + minor child visit | booking includes guardian + minor | patient-root for minor, guardian participant role | pediatric service items | guardian participant/authority metadata | entitlement/payment tied to minor account rules | guardian consent/attestation linkage | guardian portal visibility by policy | requires K(A/C) |
| Couples/bridal group service | party booking with mixed recipients | root chain with per-recipient occurrences or per-seat siblings | per-recipient work items | roster + guest/non-patient handling | mixed membership + guest payments | per-recipient documentation boundaries | participant-specific visibility | requires K(A) likely |
| Shared resource, separate patients | concurrent resource booking | sibling occurrences sharing resource context | per-patient work items | multi-patient resource association | separate charges/entitlements per patient | separate records with shared resource reference | no cross-patient leakage | requires K(A/C) |
| Procedure + anesthesia + multiple staff | single procedural booking | root procedure occurrence + child step occurrence(s) | procedure + anesthesia work items | multi-staff participants; patient single | possible multiple billable line mappings | multi-actor attestation/documentation | patient sees consolidated permissible view | K-neutral but pressures typed links |
| One appointment, multiple patient seats | class/group slot | seat-aware occurrence modeling mandatory | per-seat work items | seat/roster is first-class | per-seat entitlement/payment | per-seat attendance documentation | per-seat visibility | requires K(A/C); K(B) excludes |
| Provider reviewing multiple related patients | provider work block across patients | separate patient-root occurrences linked by typed relation if needed | per-patient review items | no shared patient identity collapse | per-patient commerce implications | per-patient documentation separation | strict per-patient visibility | K-neutral; needs typed links |
| Guest present but not recipient of care | single patient appointment + guest | patient-root occurrence only | patient work items only | guest observer participant role | no guest care charge unless promoted | guest role may be audit/documentation note | guest usually not clinical-view recipient | requires K(A/C) participant semantics |
| Resource-only session later linked to patient | resource event first, patient later | patientless `resource_session` then explicit provenance link | work item created only when service actualization exists | participant shape introduced at link time | commerce only after patient-bound actualization | documentation starts at patient-bound stage | no patient-facing output pre-link | compatible with K(A/B/C), with provenance guard |
| Async TRT side-effect follow-up escalation | no initial appointment or async check-in slot | root `review` or `monitoring_check` occurrence; escalation branch to provider review | symptom triage + provider decision work items | usually single patient; no roster | may trigger follow-up charge or covered touch per D6 policy | adverse-effect documentation likely required | high-urgency patient-visible updates + staff/provider tasks | K-neutral |
| Async GLP-1 refill check before next check-in | async follow-up checkpoint | `monitoring_check` linked to active care chain | refill eligibility work item + provider sign-off item | single patient | entitlement/refill policy in D6/Rx | refill rationale documentation | patient sees status + instructions | K-neutral |
| Patient books two overlapping video calls with different providers across pathways | two requested appointments conflict | separate occurrences cannot be active in overlapping times for same patient unless explicit exception policy | per-visit work items | single patient, multi-provider | potential dual charges must obey overlap policy | separate documentation per provider | patient must see conflict resolution outcome | K-neutral; tests scheduling/occurrence conflict seam |

**Output/state change:** preflight record of survivability and K compatibility  
**Failure mode:** any scenario lacks representable shape without hidden invariant -> block K decision memo  
**Audit/event:** `service_occurrence.k_preflight_recorded`  
**Test case:** overlapping multi-provider video scenario is rejected/deferred by conflict policy rather than dual-active occurrence corruption.

Async-care core sub-matrix (business-model critical, not optional):

| Async-care scenario | Appointment shape | Service occurrence shape | Work-item shape | Care-program/episode relationship | CNS candidate/action shape | Rx/D7 boundary | Encounter/materialization threshold | Patient visibility | Create-vs-link decision | K compatibility |
|---|---|---|---|---|---|---|---|---|---|---|
| GLP-1 new patient async intake -> provider approval -> Rx sent | usually none | root `review` occurrence (`origin=message_triggered` or intake-triggered) with provider-required branch | intake-triage + provider-decision work items | links to program/episode root | triage candidate -> provider review task -> outcome proposal | Rx commit in Rx domain; D7 captures supporting evidence | record materialization only when clinical/legal threshold and signature policy met | patient sees status transitions and approved outcomes only | `new_root_occurrence` then continuation | K-neutral |
| Post-Rx side effect message (for example nausea) | none | linked `review` or `monitoring_check` under active chain | symptom assessment + escalation work items | same episode/program chain | clinical escalation candidate + provider task | no automatic Rx change in D5; Rx/provider authority required | materialize if clinical decision and documentation threshold met | patient sees safety guidance and routed status per policy | continuation or sibling by severity policy | K-neutral |
| TRT/HRT lab review -> dose decision | none | `review` occurrence (`origin=lab_triggered`, provider-required) | lab interpretation + dose-decision work items | linked to TRT/HRT program chain | lab-review candidate -> provider task -> decision outcome | dose/prescription authority in Rx/provider domain; D7 evidence/attestation sibling | record-grade materialization expected when signed decision exists | patient sees result summary and next-step decision per policy | usually `sibling_occurrence` to prior checkpoint with typed link | K-neutral |
| Refill due with no patient message | none | `monitoring_check` or `review` occurrence (`origin=rx_triggered`) | eligibility check + provider sign-off work items | continuation of program chain | refill-review candidate + provider task | Rx domain owns refill commit; D5 only orchestration/occurrence | materialization when clinical/legal threshold reached | patient sees refill status after decision or policy-allowed pre-notice | continuation segment | K-neutral |
| Dose escalation request | optional async appointment-like slot but not required | `review` occurrence with provider-required authority | escalation-eval + risk-check work items | linked to same care program | provider review candidate + possible clinical escalation | Rx/provider authority for dose change; D7 documentation if action taken | materialize on signed escalation decision | patient sees accepted/declined/escalated result, not raw draft | continuation or branch depending on supersession path | K-neutral |
| Multi-pathway patient (GLP-1 + HRT + derm) overlapping async reviews | may have none or independent future visits | separate roots or sibling branches by pathway; no chain collapse | pathway-specific work items | distinct program/episode links with shared patient context | multiple candidates with arbitration/contact-load policy | Rx and D7 boundaries resolved per pathway | per-pathway thresholds | patient visibility partitioned by pathway context/consent | separate roots or siblings, never forced merge | K-neutral |
| Provider asks follow-up question before decision | none | same `review` occurrence continuation unless policy requires child step | follow-up query work item + pending decision item | same chain | question candidate + patient message + deferred decision | no Rx commit until decision event; D7 pending | no record materialization until decisive clinical act | patient sees follow-up request and pending state | `continuation_segment` default | K-neutral |
| AI contraindication flag before provider review | none | occurrence only if actual review work starts; otherwise CNS-level signal | contraindication assessment work item once provider/staff acts | links to active chain if admitted | contraindication candidate -> provider task/staff escalation | AI cannot perform canonical clinical commit; Rx/D7 boundaries unchanged | materialization only when authorized human decision exists | patient visibility policy-driven; may remain internal until reviewed | `non_occurrence_event` until admitted, then new/continuation by policy | K-neutral |

### Rule SO-33: K-decision gate discipline

**Trigger:** proposal to start Amendment K A/B/C decision memo  
**Required inputs:** completed SO-32 matrix + substrate accounting entries  
**Decision logic:**
- prohibit A/B/C decision memo unless SO-32 has no unresolved representation gaps.
- require unresolved items to be tagged with concrete substrate action (`implement`, `exclude with rationale`, or `prove covered`).
**Output/state change:** K decision work may start only after preflight completeness  
**Failure mode:** jump directly to K memo without preflight -> reject as process violation  
**Audit/event:** `service_occurrence.k_decision_gate_checked`  
**Test case:** missing group-seat representability blocks K memo start.

---

## Section L — Wide-breadth OMNI scenario corpus (do not minimize scope)

### Rule SO-34: Wide-breadth operational scenario corpus is mandatory before Round 5 closure

**Trigger:** pre-closure readiness and cross-domain survivability validation  
**Required inputs:** complete scenario corpus across medspa + async + procedure + surgery + labs + commerce + multi-person + correction chaos  
**Decision logic:** every scenario below must be represented with explicit shape/ownership boundaries and correction lineage behavior.

Required capture fields for each scenario:
- D3 appointment behavior
- D5 occurrence behavior
- D5 work-item behavior
- D6 commerce/entitlement implication
- D7 evidence/documentation implication
- CNS candidate/action implication
- correction/supersession/audit behavior
- patient visibility boundary
- K / `service_occurrence_link` / `service_occurrence_segment` implication

#### SO-34A Core medspa / Bloom chaos scenarios

| Scenario | D3 appointment behavior | D5 occurrence/work-item behavior | D6 implication | D7 implication | CNS + correction + visibility + K/link/segment implication |
|---|---|---|---|---|---|
| Botox booked, lip filler performed instead | booking remains planned intent history | occurrence/work item records filler actualization, not booked Botox | charge/redeem against performed line policy | document performed product/lot/areas | mismatch emits reconciliation candidate; patient sees performed truth; may require typed link between planned and actual |
| HydraFacial + Botox + red light in one visit | one appointment may carry multi-service plan | one occurrence chain with multiple work items and possibly provider/resource segments | mixed charge/redeem rules across lines | multi-artifact documentation boundaries | candidate arbitration for sequencing; visibility partition by service; segment promotion likely if per-segment authority needed |
| Injectable consult converts to same-day filler | appointment may stay consult or transition per D3 policy | create/link decision between consult review and procedure work | add-on commerce line(s) at conversion | consent/documentation thresholds escalate | pre-performance gate + conversion candidate; audit links consult->procedure |
| SkinPen package session + membership discount conflict | appointment unchanged | work item marks performed session index | entitlement + discount stacking conflict resolution in D6 | session evidence linked to entitlement use | D6 policy resolution candidate; patient visibility must explain pricing outcome |
| CoolPeel booked, consent/intake missing | appointment may remain scheduled/arrived | no performance work item until gates pass | no final charge for blocked performance (policy-driven holds possible) | missing consent/intake artifacts tracked | gate-block candidate; no ghost completion; patient sees blocked-next-step |
| Booked Botox, performed Xeomin | planned vs actual divergence captured | work item reflects Xeomin actualized | commerce resolves actual product financials | documentation reflects actual product | reconciliation candidate emitted; audit preserves plan/actual mismatch |
| Provider starts note, then appointment cancelled | appointment transitions cancelled | occurrence may remain non-completed; no forced completed work item | cancellation/no-show/deposit consequences in D6 | draft artifact persists with void/supersede lineage (no evaporation) | correction/supersession required; patient visibility policy blocks false completion |
| Provider charts under wrong appointment | D3 row may be wrong container only | occurrence linkage corrected/superseded, not silently rewritten | commerce links corrected if impacted | documentation reassociation/supersession lineage required | correction candidate + audit trail; patient visibility controlled during correction |

#### SO-34B Async Hims-style core business scenarios

| Scenario | D3 appointment behavior | D5 occurrence/work-item behavior | D6 implication | D7 implication | CNS + correction + visibility + K/link/segment implication |
|---|---|---|---|---|---|
| GLP-1 async intake -> provider approval -> Rx sent | usually no appointment | review occurrence + provider decision work item | Rx/commerce policy in D6/Rx | record materialization by threshold/signature | async chain without sync container; patient sees decision states; K-neutral |
| Side-effect message after Rx (nausea etc.) | none | linked review/monitoring occurrence | possible follow-up charge or covered touch | symptom triage documentation | escalation candidate; no autonomous clinical commit; visibility safety-first |
| TRT/HRT lab review -> dose decision | none | lab-triggered review occurrence + decision work item | Rx decision/dispense implications | signed decision may materialize record-grade view | typed link lab->review->decision likely |
| Refill due with no appointment | none | monitoring/review occurrence continuation | refill eligibility and entitlement rules | refill rationale evidence | provider task candidate; patient visibility after decision/policy |
| Dose escalation request | optional/no sync appt | review occurrence continuation/branch | Rx authority boundary enforced | escalation documentation threshold | create-vs-link explicit; patient sees accepted/declined/escalated state |
| Multi-pathway patient (GLP-1 + HRT + derm) overlapping async | maybe none | separate roots/siblings by pathway; no chain collapse | pathway-specific financials | pathway-specific evidence | arbitration/contact-load candidates; strict visibility partition |
| AI contraindication flag before provider review | none | non-occurrence until admitted, then review occurrence | no D6/Rx commit by AI | no record-grade finalization pre-human decision | contraindication candidate routes to provider/staff; audit preserved |
| Patient scheduled video calls with 3 providers across 2 pathways; overlap conflict | D3 must prevent overlap per policy | separate occurrences cannot become dual-active in conflicting windows unless explicit exception | potential duplicate-charge risk handled in D6 | separate provider documentation streams | conflict-resolution candidate; no silent double-book/double-commit |

#### SO-34C GI / procedure medicine scenarios

| Scenario | D3 appointment behavior | D5 occurrence/work-item behavior | D6 implication | D7 implication | CNS + correction + visibility + K/link/segment implication |
|---|---|---|---|---|---|
| Colonoscopy consult becomes same-day scope, consent missing | consult appointment may be same-day extended | consult review + procedure-step occurrence/work item only after gate pass | add-on procedure commerce lines | consent/procedure documentation gates | gate-block then conversion candidate; no procedure completion without consent |
| Procedure note charted under consult appointment | wrong container state in D3 context | occurrence linkage correction/supersession required | financial line reassociation if needed | note correction lineage required | no silent rewrite; audit-first correction |
| Endoscopy + anesthesia + biopsy + pathology chain | appointment may represent consult/procedure container | linked procedure steps with multiple work items | multi-line commerce mapping | multi-artifact documentation, pathology follow-up links | typed links likely required for multi-causal chain |
| Abnormal pathology follow-up | may have no immediate appointment | new/sibling review occurrence from pathology event | follow-up financial implications policy-driven | pathology interpretation documentation threshold | escalation + patient communication policy candidates |
| Procedure no-show after prep completed | no-show/cancel lifecycle in D3 | no performed procedure work item | no-show/deposit/fee outcomes in D6 | prep artifacts remain with status lineage | no ghost completion; visibility explains no-show outcome |

#### SO-34D Surgery / specialty operational scenarios

| Scenario | D3 appointment behavior | D5 occurrence/work-item behavior | D6 implication | D7 implication | CNS + correction + visibility + K/link/segment implication |
|---|---|---|---|---|---|
| Rhinoplasty visit, arrives 2h early, room moved twice, provider changed | appointment remains same unless D3 policy splits | same occurrence chain unless work boundary changes; assignment updates only | no implicit financial reset from room/provider move | updated participants/attestation responsibilities | reassignment candidates; segment promotion if segment-level accountability required |
| Surgery chain consult -> pre-op -> anesthesia -> procedure -> post-op | multiple appointments possible | linked root + child/sibling step occurrences with work items | staged commerce lines and settlements | staged record materialization and signatures | typed links strongly implicated |
| Post-op complication call | may be appointmentless | review occurrence linked to surgical chain | follow-up coverage/charge policy | complication documentation threshold | escalation candidate and safety visibility policy |

#### SO-34E Labs / diagnostics / imaging scenarios

| Scenario | D3 appointment behavior | D5 occurrence/work-item behavior | D6 implication | D7 implication | CNS + correction + visibility + K/link/segment implication |
|---|---|---|---|---|---|
| Labs drawn, patient returns same day, physician reviews by phone | one or more appointments or none for phone | draw occurrence + linked phone review occurrence/segment | possible additional billing policy | provider review documentation/signature threshold | create-vs-link and modality handling pressure test |
| External lab result unmatched to order | no appointment assumption | no blind occurrence commit until identity/correlation confidence passes | no financial side effects pre-match | evidence held pending match with audit | staff-review candidate; patient visibility blocked until verified |
| Imaging/photo captured before provider review | appointment optional | no review occurrence until actualized review starts | none or policy-specific | evidence artifact exists before review | avoid premature encounter materialization |
| Same diagnostic artifact reused across consult and later procedure | appointment may differ by date | linked references across occurrences/work items | possible multi-line commerce mapping | shared artifact references with clear provenance | typed links + visibility boundary check |

#### SO-34F Commerce / retail / entitlement collision scenarios

| Scenario | D3 appointment behavior | D5 occurrence/work-item behavior | D6 implication | D7 implication | CNS + correction + visibility + K/link/segment implication |
|---|---|---|---|---|---|
| Service performed + retail product sold | appointment context optional | work item for service only; no retail product as work item | retail/service lines in D6 | service evidence only in D7 | strict D5/D6 boundary preserved |
| Service refunded after performed | appointment unchanged | work item remains true (performed) | refund/return state changes in D6 | documentation remains with correction notes if needed | no rewriting actualized work |
| 50/50 refund to card and cash/account credit | appointment unchanged | no D5 mutation | split tender/refund truth in D6 | none unless documentation policy requires | patient visibility from D6 outcomes |
| Package visit late-cancelled | cancellation/no-show in D3 | no performed work item | entitlement preserve/forfeit decision in D6 | cancellation evidence trail | closure barrier prevents false completion |
| Membership payment failed before included service | booking may block per gate policy | no performed work item if blocked | entitlement paused/blocked in D6 | gate evidence in D7 if required | pre-performance gate candidate path |

#### SO-34G Multi-person / Amendment K scenarios

| Scenario | D3 appointment behavior | D5 occurrence/work-item behavior | D6 implication | D7 implication | CNS + correction + visibility + K/link/segment implication |
|---|---|---|---|---|---|
| Group sauna party | multi-seat/roster needed | per-seat/per-participant occurrence or work-item semantics required | per-seat entitlement/payment | per-participant attendance/doc visibility | K(A/C) pressure; K(B) weak |
| Patient + caregiver | single patient booking + participant | patient-root occurrence + caregiver participant role | usually no caregiver charge | caregiver role evidence and visibility boundaries | participant semantics required (K pressure) |
| Parent + minor child | guardian + minor dynamics | minor-root occurrences with guardian authority metadata | guardian-linked payment/entitlement rules | consent/authorization evidence | participant/authority semantics required |
| Couples/bridal group | multi-recipient booking | per-recipient work items under shared context | mixed individual payments/benefits | per-recipient documentation/visibility | seat/roster/guest modeling pressure |
| Provider reviews multiple related patients | separate patient appointments/charts | separate patient-root occurrences with typed relationships only when needed | per-patient financial separation | per-patient evidence separation | no identity collapse; typed link pressure |

#### SO-34H Operational failure / correction chaos scenarios

| Scenario | D3 appointment behavior | D5 occurrence/work-item behavior | D6 implication | D7 implication | CNS + correction + visibility + K/link/segment implication |
|---|---|---|---|---|---|
| Duplicate source event fires twice | D3 idempotency retains single lifecycle truth | dedupe prevents duplicate occurrence/work-item | no duplicate charge | no duplicate documentation finalization | audit emits duplicate-blocked event |
| Timer fires after supersession | stale timer ignored by D3/D5 guards | no stale mutation on superseded occurrence | no stale financial side effects | no stale documentation closure | active-state guard candidate path |
| Reply to old message after reschedule | D3 current revision governs | stale branch blocked or routed | no stale financial mutation | stale-context documentation block | supersession/correlation check enforced |
| Staff edits appointment after provider started work | D3 planned-state edit allowed by policy | D5 actualized work preserved; reconciliation if mismatch | D6 may need rebilling/reallocation | D7 may need correction linkage | correction candidate and audit trail |
| Provider opens wrong patient/wrong chart | D3 container mismatch | occurrence/context correction/supersession | commerce reassociation if impacted | strict correction lineage, no silent deletion | visibility locked during correction |
| Duplicate patient merge after work recorded | D3 patient identity merge event | occurrences/work items retain lineage and reassociate with merge audit | financial accounts reconciled in D6 | documentation visibility/ownership revalidated | high-risk reconciliation candidate path |

**Output/state change:** breadth corpus becomes mandatory validation inventory for Round 5 closure package and final cross-domain validation.  
**Failure mode:** closure attempt without complete SO-34 scenario walkthrough -> reject closure.  
**Audit/event:** `service_occurrence.breadth_corpus_preflight_recorded`  
**Test case:** wrong-chart + cancellation + service-substitution chain can be traced with no silent evaporation and no false completion.

---

## §4 Round 5 closure-gate status (explicitly open)

- Amendment K closure status (required by §2.22.3 for Round 5 close): **UNRESOLVED**.
- Therefore Round 5 is **NOT CLOSABLE** yet.
- This file is an active authoring baseline, not a closure report.
