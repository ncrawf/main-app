# Core Operating Physics Extraction v0.2

Document type: `canon_digest` (Stage 1 extraction companion)  
Authority: Stage 1 extraction artifact for review  
Status: Draft for review (Stage 1 only)  
Lifecycle role: Synthesis + onboarding memory for machine-model alignment  
Supersedes: none  
Manifest action: Candidate support artifact for Tier 0/1 routing after review (no automatic manifest patch)  
Review gate: User/Knox review required before Stage 2 progression or manifest-impact action

**Date:** 2026-05-19  
**Stage:** 1 (Core Operating Physics)  
**Status:** Draft for review (Stage 1 only)  
**Purpose:** Extract the machine-model doctrine future agents must internalize before domain work or future-seam analysis.

---

## 1) Stage 1 Read Coverage

### Mandatory deep-read set
- `full_read` — `.cursor/plans/designs/day_0_scheduling_rule_matrix/03_6_cns_orchestration_core.md`
- `full_read` — `docs/architecture/cns_action_orchestration_adr_2026-05-17.md`
- `full_read` — `docs/architecture/cns_taxonomy_reconciliation.md`
- `full_read` — `docs/architecture/communications_topology.md`
- `full_read` — `.cursor/plans/doctrine/DL-20_care_coordination_DRAFT_2026-05-17.md`
- `full_read` — `.cursor/plans/designs/day_0_scheduling_rule_matrix/05_domain_service_occurrence.md`
- `full_read` — `.cursor/plans/designs/day_0_scheduling_rule_matrix/05_3_round5_closure_verdict.md`
- `full_read` — `.cursor/plans/designs/day_0_scheduling_rule_matrix/05_2_kc_minimal_implementation_lock.md`
- `full_read` — `.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (carried from Stage 0 full read)
- `full_read` — `.cursor/plans/doctrine/user_knox_preferences_locked_2026-05-17.md`

### Conditional support reads
- Not used in this pass (no unresolved ambiguity requiring escalation).

---

## 2) Operating Physics Canon (Derived, Compact, Binding-for-Context)

These rules are compressed from Stage 1 deep reads.

1. **CNS orchestrates; domains own canonical truth.**  
   Source: `03_6_cns_orchestration_core.md` (`§1`, `§2.4`, `§2.5`), `cns_action_orchestration_adr_2026-05-17.md` (`§2`, `§5`).

2. **Source event is not candidate; candidate is not commit.**  
   Source: `03_6_cns_orchestration_core.md` (`§2.1`, `§2.3`), `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (`§6`, `§10`).

3. **Canonical flow is fixed:** `source_event -> candidate -> resolver -> envelope -> owning_domain_commit`.  
   Source: `03_6_cns_orchestration_core.md` (`§2`, `§4`, `§6`), `cns_action_orchestration_adr_2026-05-17.md` (`§2.1`, `§2.2`).

4. **AI proposes/classifies/drafts; deterministic policy plus authorized human/domain commits.**  
   Source: `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (`§9`, `§10`), `cns_action_orchestration_adr_2026-05-17.md` (`§2.1`, `§4.5`).

5. **Messages are CNS actions, not rail-side side effects or mini-brains.**  
   Source: `communications_topology.md` (`§1.0`, `§3`), `cns_action_orchestration_adr_2026-05-17.md` (`§2.1`, `§3.4`).

6. **Rails are projection/execution surfaces; inbound rails are CNS inputs, not alternative orchestration cores.**  
   Source: `communications_topology.md` (`§1.0`, `§4`, `§6`).

7. **Context modules feed CNS; they are not the brain.**  
   Source: `cns_action_orchestration_adr_2026-05-17.md` (`§3.1`, `§4.4`), `00_index.md` (`§2.15` pointer from Stage 0).

8. **D5 owns actualized work truth via `service_occurrence` and atomic work items.**  
   Source: `05_domain_service_occurrence.md` (`SO-01`, `SO-23`), `DL-20_care_coordination_DRAFT_2026-05-17.md` (`inv 42-44` context).

9. **D6 owns commerce and entitlement truth; D5 references but does not mutate D6 canonical state.**  
   Source: `05_domain_service_occurrence.md` (`SO-11`, `SO-23`, `SO-24`), `05_2_kc_minimal_implementation_lock.md` (`§5.3`).

10. **D7 owns evidence/materialization/attestation truth; D5 references but does not absorb it.**  
    Source: `05_domain_service_occurrence.md` (`SO-11`, `SO-25`), `05_2_kc_minimal_implementation_lock.md` (`§5.2`).

11. **`service_occurrence_work_item` is the canonical atomic actualized-work unit in D5.**  
    Source: `05_domain_service_occurrence.md` (`SO-23`), `05_2_kc_minimal_implementation_lock.md` (`§2`), `05_3_round5_closure_verdict.md` (`§2`).

12. **`encounter_line` is legacy/projection/transitional mapping posture, not competing canonical D5 truth.**  
    Source: `05_2_kc_minimal_implementation_lock.md` (`§2.2`, `§2.3`), `05_3_round5_closure_verdict.md` (`§2`), `DL-20_care_coordination_DRAFT_2026-05-17.md` (`inv 43`).

13. **Appointment is optional context for care actualization; async/lab/Rx/message-triggered flows are first-class.**  
    Source: `05_domain_service_occurrence.md` (`SO-13`, `SO-34B`), `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (`§10`, async lock).

14. **K(C) participant/seat structures are appointment-layer overlays that bridge into actualized work only through explicit mapping and lineage.**  
    Source: `05_2_kc_minimal_implementation_lock.md` (`§1`, `§5`), `05_3_round5_closure_verdict.md` (`§1`, `§4`), `DL-20_care_coordination_DRAFT_2026-05-17.md` (`inv 42`).

15. **Identity, contact handle, patient, account/relationship are distinct; they are not casually interchangeable.**  
    Source: `communications_topology.md` (`§11`, `§12` DL-10/DL-13 references), `user_knox_preferences_locked_2026-05-17.md` (`identity/account/patient separation preferences).

16. **No-op and suppression are first-class outcomes, not silent drops.**  
    Source: `03_6_cns_orchestration_core.md` (`§1`, `§4`), `cns_action_orchestration_adr_2026-05-17.md` (`§2.1`, `§2.16 summary in ADR references).

17. **Traceability is mandatory for candidate/action/no-op/suppression with decision-record lineage.**  
    Source: `03_6_cns_orchestration_core.md` (`§2.8`), `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (`§9`, decision traceability), `cns_taxonomy_reconciliation.md` (`§1`, `§3`).

18. **Violation classes must remain explicit:** scope-read failures are governance failures; doctrine-boundary breaches are architecture failures.  
    Source: `00_doctrine_manifest.md` (`MANIFEST_SCOPE_VIOLATION`, `LI-CNS_VIOLATION`) and reinforced by Stage 0/1 control doctrine.

---

## 3) Deep Extraction by Required Topic

### 3.1 CNS parent contract
- Extracted lesson: CNS is a first-class parent contract with fixed contracts for source event, context packet, candidate lifecycle, resolver, and ownership boundaries.
- Source anchors:
  - `.cursor/plans/designs/day_0_scheduling_rule_matrix/03_6_cns_orchestration_core.md` (`§1`, `§2`, `§6`)
  - `docs/architecture/cns_action_orchestration_adr_2026-05-17.md` (`§2`, `§8`)
- Status: `binding`
- Confidence: `high`
- Proposed routing: `Tier0`

### 3.2 Source event -> candidate -> resolver -> envelope -> owning-domain commit
- Extracted lesson: execution must be resolver-mediated with explicit owning-domain acceptance/rejection; CNS can propose state transitions, domains commit canonical state.
- Source anchors:
  - `03_6_cns_orchestration_core.md` (`§2.5`, `§4`)
  - `05_domain_service_occurrence.md` (`SO-15`, `SO-27`)
- Status: `binding`
- Confidence: `high`
- Proposed routing: `Tier0`

### 3.3 Candidate / draft / action / no-op / suppression distinction
- Extracted lesson: these are distinct lifecycle outcomes, each auditable and policy-significant.
- Source anchors:
  - `03_6_cns_orchestration_core.md` (`§1`, `§4`)
  - `cns_action_orchestration_adr_2026-05-17.md` (`§2.1`, decision outputs and action kinds)
- Status: `binding`
- Confidence: `high`
- Proposed routing: `Tier0`

### 3.4 Atomicity and actualized-work discipline
- Extracted lesson: D5 actualized work must be atomized (`service_occurrence_work_item`) and separated from planned intent and from financial/documentation sibling truth.
- Source anchors:
  - `05_domain_service_occurrence.md` (`SO-23`, `SO-24`)
  - `05_2_kc_minimal_implementation_lock.md` (`§2`)
  - `DL-20_care_coordination_DRAFT_2026-05-17.md` (`inv 43`)
- Status: `binding` (Round 5 closure path)
- Confidence: `high`
- Proposed routing: `Tier1` (D5/D6/D7 seam)

### 3.5 Context modules vs CNS brain
- Extracted lesson: context modules are typed, versioned inputs; they are not orchestration engines.
- Source anchors:
  - `cns_action_orchestration_adr_2026-05-17.md` (`§2.1 table`, `§3.1`, `§4.4`)
  - `communications_topology.md` (DL-14/DL-16 references in `§1.0`)
- Status: `binding`
- Confidence: `high`
- Proposed routing: `Tier0`

### 3.6 AI authority boundary
- Extracted lesson: AI classification/drafting support is permitted; clinical/canonical commits require policy + authorized actor.
- Source anchors:
  - `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (`§9`, `§10`)
  - `cns_action_orchestration_adr_2026-05-17.md` (`§4.5`, `§5.1`)
- Status: `binding`
- Confidence: `high`
- Proposed routing: `Tier0`

### 3.7 Messaging/communications rails vs CNS action substrate
- Extracted lesson: outbound/inbound channels are rail projections and ingestion paths under CNS policy, not independent orchestration domains.
- Source anchors:
  - `communications_topology.md` (`§1.0`, `§3`, `§4`, `§6`)
  - `cns_action_orchestration_adr_2026-05-17.md` (`§2.1`, `§4.2`)
- Status: `binding`
- Confidence: `high`
- Proposed routing: `Tier1` (communications-triggered)

### 3.8 Internal vs external line boundaries
- Extracted lesson: patient-facing chat, external pre-account line, and internal collaboration are distinct surfaces with different authority/privacy/routing semantics.
- Source anchors:
  - `communications_topology.md` (`§11`, `§12`)
  - `cns_taxonomy_reconciliation.md` (surface rows for messaging internal/external)
- Status: `binding design direction` / `partial substrate deferred`
- Confidence: `medium`
- Proposed routing: `Tier2` (messaging + identity triggers)
- Notes: external-line substrate implementation remains staged; doctrine boundary is explicit.

### 3.9 Patient/contact/account/identity separation
- Extracted lesson: external handle identity, patient identity, and relationship/account scope are separate layers; linking requires explicit provenance and policy.
- Source anchors:
  - `communications_topology.md` (`§11`, DL-10/DL-13 references)
  - `user_knox_preferences_locked_2026-05-17.md` (`§1`, `§2`)
- Status: `binding`
- Confidence: `high`
- Proposed routing: `Tier1` (identity boundary)

### 3.10 D5/D6/D7 sibling truth boundaries
- Extracted lesson: D5 actualized work, D6 commercial truth, D7 evidence/materialization truth remain sibling-owned; no cross-collapse.
- Source anchors:
  - `05_domain_service_occurrence.md` (`SO-11`, `SO-23`, `SO-24`)
  - `05_2_kc_minimal_implementation_lock.md` (`§5.2`, `§5.3`)
  - `05_3_round5_closure_verdict.md` (`§4`)
- Status: `binding`
- Confidence: `high`
- Proposed routing: `Tier0`

### 3.11 Encounter/encounter_line legacy mapping
- Extracted lesson: D5 canonical mapping moved to work-item model; encounter_line posture is legacy/projection/transitional alias, not canonical D5 write truth.
- Source anchors:
  - `05_2_kc_minimal_implementation_lock.md` (`§2`)
  - `DL-20_care_coordination_DRAFT_2026-05-17.md` (`inv 43`)
- Status: `binding (closure lock)`
- Confidence: `high`
- Proposed routing: `Tier1` (D5 closure doctrine)

### 3.12 K(C) participant/seat bridge into actualization
- Extracted lesson: appointment participant/seat overlays must map explicitly into occurrence/work-item lineage; no hidden one-seat-one-occurrence invariant.
- Source anchors:
  - `05_2_kc_minimal_implementation_lock.md` (`§1`, `§5`)
  - `05_domain_service_occurrence.md` (`SO-28`, `SO-32`, `SO-34G`)
  - `05_3_round5_closure_verdict.md` (`§1`)
- Status: `binding (Round 5 path A closure evidence)`
- Confidence: `high`
- Proposed routing: `Tier1`

### 3.13 Traceability and audit requirements
- Extracted lesson: decision record minimums, context packet/version lineage, and proposal outcome recording are mandatory.
- Source anchors:
  - `03_6_cns_orchestration_core.md` (`§2.8`)
  - `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (`§9`)
  - `05_domain_service_occurrence.md` (`SO-27`)
  - `cns_taxonomy_reconciliation.md` (`§1`, `§3`)
- Status: `binding`
- Confidence: `high`
- Proposed routing: `Tier0`

### 3.14 Known anti-patterns and violation classes
- Extracted anti-patterns:
  - rail-side orchestration or fail-open logic acting as brain
  - event/action conflation
  - projection-as-authority
  - planned/performed collapse
  - D5 mutating D6/D7 canonical truths
  - hidden one-patient-one-occurrence invariants
  - compound enum creep instead of decomposed axes
- Violation classes:
  - `MANIFEST_SCOPE_VIOLATION` (scope/read governance failure)
  - `LI-CNS_VIOLATION` (doctrine/architecture boundary failure)
- Source anchors:
  - `communications_topology.md` (`§1.0`, anti-drift references)
  - `cns_taxonomy_reconciliation.md` (`§4`)
  - `05_domain_service_occurrence.md` (`SO-19`, `SO-21`, `SO-28`)
  - `00_doctrine_manifest.md` (violation class definitions)
- Status: `binding`
- Confidence: `high`
- Proposed routing: `Tier0` + `Tier2` triggers

---

## 4) Stage 1 Memory-Debt (Remaining After Core Physics)

- Full chronology and supersession proving path is not yet extracted (Stage 2 scope).
- Future seams/frontier remains intentionally unread in this stage (Stage 3 scope).
- Communications handoff packet corpus and identity/external-line tactical docs not yet deep-extracted (candidate Stage 4 tranche).
- No manifest patch proposal is made in Stage 1 by design.

---

## 5) Non-Actions Confirmed (Stage 1 Compliance)

- No D6 authoring.
- No Round 6 opening.
- No future-seams extraction.
- No manifest patching in this stage.
- No advancement to Stage 2 until this Stage 1 artifact is reviewed.

