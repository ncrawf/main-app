# Seam Contract — `SC-D5-D7-001` : Service Occurrence completed → Materialized record

Document type: `seam_contract` (durable cross-domain boundary)
Status: `draft_for_ratification` (created 2026-05-31, Foundation vNext)
Source domain: `service_occurrence` (`contracts/D5_service_occurrence_care_coordination_contract.md`) · Target domain: `documents` (`contracts/D7_documents_consent_media_contract.md`)
Authority: `canonical` for this boundary · Review gate: `user_knox_required`

---

## Trigger

A `service_occurrence` completes (or a `service_occurrence_work_item` is recorded) — e.g., a GI scope, Botox procedure, derm visit, lab draw, telehealth consult. The work-truth event fires from D5.

## Contract (what crosses the seam)

| Field | Value | Rule |
|---|---|---|
| `service_occurrence_id` (+ work_item ids) | from D5 | the work-truth reference |
| materialization request | document_kind(s) to materialize (procedure note, photo set, settings sheet, aftercare packet, generated PDF) | D7 creates the `patient_document` / `evidence_record` |
| `performed_by` / `performed_at` / venue | from D5 | provenance; preserved on the artifact (§8 federation readiness) |
| linkage | `linked_encounter_ids[]` / `linked_episode_ids[]` / `linked_care_objects_ids[]` | DL-22 inv 1/20 (references, not copies) |

## Ownership split (the line)

- **D5 owns:** that the service occurred, who performed it, when, and what actualized work was done.
- **D7 owns:** the durable documentation/media/evidence artifact materialized from that work (the note, photo, settings sheet, packet, PDF) + its custody/retention/access/visibility.

## Invariants (what must not collapse)

1. **Materialization ≠ work-truth.** The artifact is a *record of* the work; D5 remains the source of truth that the work occurred. D7 does not own work-truth.
2. **Structured values → Observation, not the artifact.** If the procedure produces structured measurements (laser settings as values, lab results), those normalize into Observation; the artifact (settings sheet / report PDF) stays D7.
3. **Clinical meaning → Clinical Memory.** Any finding/diagnosis/assertion derived from the materialized record flows to CM with `evidence_refs` back to the D7 artifact; provider adoption required.
4. **Provenance + federation readiness preserved** — performing operator/practice, performed_at, venue carried onto the artifact for cross-practice accountability.
5. **References, not duplicates** — the artifact links to the occurrence/encounter/episode by id (DL-22 inv 20); no copying of work records into the artifact.

## Open

- What auto-materializes vs requires explicit author action per `document_kind` (`REV-140`).
- Dedupe interaction when an external report (not OMNI-performed work) covers the same occurrence (§D7 §6 one-canonical-artifact policy; `REV-155`).

## Evidence

D5 contract (`service_occurrence` + work_item lifecycle) · DL-22 inv 1/11/20 + Build Contract §3.6 (visit closeout includes photos + chart attach) · thesis §1548 `evidence_record` (accountable, post-authorization).
