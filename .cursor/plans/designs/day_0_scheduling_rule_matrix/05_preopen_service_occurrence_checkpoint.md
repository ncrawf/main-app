# Round 5 Pre-Open Checkpoint — Service Occurrence Ontology Lock

**Date:** 2026-05-18  
**Status:** COMPLETE (pre-open hardening only)  
**Round 5 state:** FROZEN pending explicit user/Knox go

---

## 1) What is locked before Round 5

- `service_occurrence` is the canonical parent container for bounded actualized work/care/service/review/procedure/session.
- `service_occurrence_kind` is the primary classifier.
- `encounter_view` is derived projection (clinical/documentation/legal), not parent substrate identity.
- Modality is modeled as segment/axis, not parent identity enum.
- Domain 5 cannot swallow D6 commerce truth or D7 documentation truth.

---

## 2) Required D5 pre-open checks (must be cited at Round 5 opening)

- create-vs-link `service_occurrence` contract
- single occurrence vs linked occurrences chain policy
- duplicate prevention across chain transitions
- participant role + authority matrix
- clinical vs operational/wellness/resource-led occurrence distinction
- evidence/documentation sibling boundary
- commerce sibling boundary

---

## 3) Mandatory pressure-test set for Round 5 opening

- scheduled in-person service occurrence
- non-provider sauna/wellness occurrence
- equipment/resource-only occurrence (device/room primary actor)
- async intake review occurrence
- message escalation to provider review occurrence
- phone/video follow-up occurrence
- lab-review-initiated occurrence
- Rx/program follow-up occurrence
- procedure chain with checkpoints (for example pre-op/anesthesia step)
- hybrid modality chain (`async -> phone -> video -> in_person`) with explicit create-vs-link policy

---

## 4) Explicit non-go statement

This checkpoint does **not** start Round 5 authoring.  
Round 5 remains frozen until explicit user/Knox opening approval.
