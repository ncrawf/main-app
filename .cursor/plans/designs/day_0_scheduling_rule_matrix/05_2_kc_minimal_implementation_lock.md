# Round 5.2 — K(C) Minimal Implementation Lock + D5 Substrate Closure Decisions

**Date:** 2026-05-19  
**Scope:** Execute closure checklist items from `05_closure_prep_consistency_report.md` without new breadth expansion  
**Status:** AUTHORED (closure-execution artifact; Round 5 still open pending implementation/mapping completion)

---

## 1) K(C) Minimal Substrate Lock (Day 0 implementation target)

Chosen model: **K(C)** = `appointment_participant` + `appointment_seat` combined model.

### 1.1 `appointment_participant` (minimum)
- `id`
- `appointment_id`
- `patient_id NULL` (null allowed for non-patient participant)
- `role_kind` ENUM:
  - `primary_patient`
  - `caregiver`
  - `guardian`
  - `observer`
  - `guest`
  - `staff_support`
- `care_recipient` BOOLEAN
- `authority_scope` ENUM (view_only / consent_authorized / scheduling_proxy / none)
- `visibility_class` ENUM (patient_visible / staff_visible / provider_visible / audit_only)
- `seat_id NULL` (links to `appointment_seat` where applicable)
- temporal validity fields (`valid_from`, `valid_to`)

### 1.2 `appointment_seat` (minimum)
- `id`
- `appointment_id`
- `seat_index`
- `seat_status` ENUM (reserved / checked_in / released / no_show)
- `linked_patient_id NULL`
- `linked_participant_id NULL`
- `entitlement_ref NULL` (D6-owned target reference)
- `commerce_line_ref NULL` (D6-owned target reference)
- `documentation_scope_ref NULL` (D7-owned target reference)

### 1.3 Seat-to-participant linkage rules
- Seat may map to patient participant, guest participant, or remain temporarily unbound.
- Non-seat participants (caregiver/observer/guardian) may exist without occupying a billable seat.
- Per-recipient visibility and authority are participant-governed; seat governs capacity/roster/entitlement hooks.

### 1.4 Per-seat/per-recipient boundary locks
- Per-seat commerce/entitlement truth remains D6.
- Per-recipient documentation/visibility truth remains D7.
- D5 may reference these links but does not own financial/documentation commits.

---

## 2) Work-Item Transition Lock (`encounter_line` concern resolved)

### 2.1 Canonical decision
- **Canonical atomic actualized-work unit:** `service_occurrence_work_item` (D5).
- `encounter_line` is **not** a competing canonical primitive in Round 5 closure.

### 2.2 Allowed `encounter_line` posture after this lock
- `encounter_line` may persist only as:
  - D7 record-materialized projection, or
  - transitional alias/read-model mapped from `service_occurrence_work_item`.

### 2.3 Forbidden posture
- No dual-write canonical truth between `service_occurrence_work_item` and `encounter_line`.
- No D6 billing truth keyed to canonical `encounter_line` semantics as primary source.

### 2.4 Required amendment mapping
- DL-20 extension must explicitly map:
  - `encounter_line` legacy references -> `service_occurrence_work_item` canonical mapping,
  - read/write ownership and allowed projection-only use in D7 contexts.

---

## 3) `service_occurrence_link` Decision (Day 0)

### Decision
- **Implement minimal Day 0 typed edge substrate now** (not reserved-only).

### Why now
- Repeated `LINK_FORCE` scenarios in closure-prep report:
  - wrong appointment/wrong chart correction,
  - TRT/HRT lab-review-to-decision relation,
  - multi-pathway async overlaps,
  - wrong-patient correction,
  - duplicate patient merge lineage.

### Minimal Day 0 shape
- `service_occurrence_link`
  - `id`
  - `from_occurrence_id`
  - `to_occurrence_id`
  - `link_type` ENUM:
    - `supersedes`
    - `depends_on`
    - `follows`
    - `caused_by`
    - `references`
    - `sibling_of`
  - `reason_code`
  - `created_by_actor`
  - timestamps

### Guardrail
- No full graph-theory expansion in Round 5.
- Only typed-edge support required to preserve correction and multi-causal lineage integrity.

---

## 4) `service_occurrence_segment` Decision (Day 0)

### Decision
- **Defer implementation for Day 0** (keep `modality_path` projection) with hard promotion triggers.

### Promotion triggers (binding)
Promote to typed `service_occurrence_segment` when any closure-blocking scenario requires:
1. segment-level ownership/authority decisions,
2. segment-level evidence/documentation linkage,
3. segment-level participant/resource assignment,
4. segment-level SLA/queue accountability,
5. segment-level financial/entitlement effect,
6. segment-level legal/clinical record materialization,
7. segment-level analytics beyond ordered sequence.

### Current outcome
- From current SO-34 reductions, `SEGMENT_FORCE` appears conditional.
- Therefore deferral is acceptable for Round 5 closure **if** no unresolved closure-blocking scenario depends on segment-level commitments.

---

## 5) Appointment-to-Occurrence Bridge Lock (K(C) -> D5 actualization)

### 5.1 Multi-seat appointment actualization mapping
- Default mapping: **shared `service_occurrence` root + participant/seat-scoped `service_occurrence_work_item` rows**.
- Escalation mapping: create per-seat/per-recipient sibling occurrences only when authority, visibility, or documentation boundaries require independent occurrence lifecycle.
- No forced one-seat-one-occurrence invariant.

### 5.2 Caregiver/guardian/observer carry-through into D7 + encounter materialization
- Caregiver/guardian/observer roles remain participant metadata; they do not become care-recipient work items unless explicitly promoted by policy and identity.
- D7 visibility and documentation scopes consume `appointment_participant.role_kind`, `authority_scope`, and `visibility_class`.
- `encounter_view` materialization uses participant metadata to enforce per-recipient visibility and legal boundaries; non-recipient participants may appear as contextual participants, not recipients of performed care.

### 5.3 Per-seat D6 linkage without D5 commerce ownership
- D5 may carry `seat -> entitlement_ref` and `seat -> commerce_line_ref` references only.
- D6 remains canonical for entitlement redemption, payment, refund, split-tender, reversal.
- D5 work-item truth is immutable to financial state changes; D6 updates do not rewrite D5 actualized-work records.

### 5.4 No-appointment flows (async/walk-in/resource) remain first-class
- K(C) applies to appointment-shaped flows only; it must not re-center D5 onto appointment dependency.
- For async/walk-in/resource flows:
  - `appointment_id` may remain null,
  - `service_occurrence` + `service_occurrence_work_item` still operate with decomposed axes (`origin_kind`, `trigger_domain`, `context_domain`),
  - participant/seat semantics are optional overlays, not prerequisites.

### 5.5 Guest/no-patient -> patient later (identity/provenance rule)
- Non-patient participant (`patient_id = NULL`) may be linked to a patient later only via explicit provenance event.
- Provenance minimum:
  - source evidence reference,
  - actor attribution,
  - timestamp,
  - confidence class,
  - supersession/correction linkage if prior identity assumptions existed.
- No silent identity backfill on historical work items.

### 5.6 Bridge guardrails (closure-binding)
- Appointment semantics cannot overwrite actualized-work truth.
- Actualized-work truth cannot imply commerce/documentation closure.
- Participant/seat overlays cannot collapse async/no-appointment flows.
- Wrong-container corrections must resolve via typed link/supersession lineage, never silent rewrite.

---

## 6) Closure Impact Summary

### Implement now (closure-execution set)
1. K(C) minimal participant + seat substrate definitions.
2. `encounter_line` transition lock to projection/transitional alias only.
3. `service_occurrence_link` minimal typed-edge implementation decision.
4. Appointment-to-occurrence bridge lock for seat/participant -> occurrence/work-item actualization.

### Defer (with explicit triggers)
1. `service_occurrence_segment` typed substrate.

### Remaining Round 5 closure blockers after this artifact
1. Formal DL amendment entries for:
   - K(C) minimal substrate,
   - `service_occurrence_work_item` canonical mapping from legacy `encounter_line`,
   - `service_occurrence_link` minimal typed-edge substrate,
   - appointment-to-occurrence bridge semantics (Section 5).
2. Update Amendment K resolution log (§2.22.4) with selected path evidence linkage.
3. Confirm no unresolved `K_BLOCKED` scenario remains unrepresented under K(C) minimal model.

Round 5 remains open until the above are recorded and linked in closure package artifacts.
