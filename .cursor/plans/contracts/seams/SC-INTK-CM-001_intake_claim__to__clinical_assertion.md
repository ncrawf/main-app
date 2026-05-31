# Seam Contract — `SC-INTK-CM-001` : Intake claim → Clinical Memory assertion

Document type: `seam_contract` (durable cross-domain boundary)
Status: `draft_for_ratification` (created 2026-05-31, Foundation vNext)
Source domain: `intake` (`contracts/intake_contract.md`) · Target domain: `clinical_memory` (`contracts/clinical_memory_assertion_contract.md`)
Authority: `canonical` for this boundary · Review gate: `user_knox_required`

---

## Trigger

A patient answers an intake question whose `Question.concept_mapping` is present (Mode E/F/J or onboarding). The intake resolver emits a `clinical_assertion` emission within `record_intake_emissions_batch`.

## Contract (what crosses the seam)

| Field | Value | Rule |
|---|---|---|
| `concept_id` (+version) | from `concept_mapping` | MUST exist in `clinical_concepts` registry (CI-checked) |
| `assertion_type` | from `assertion_template[answer_value]` | e.g. yes→present, no→absent, prior→history_of |
| `authored_by` | `patient_reported` (or `patient_self_correction` for Mode J) | intake NEVER emits `provider_*` |
| `source_authority` | `patient` (§7.5.3) | provenance; preserved downstream |
| `status` / `clinical_adoption_state` | `unconfirmed` / `not_adopted` | **never auto-confirm / auto-adopt** |
| `confidence` | per question default (≤ moderate) | patient self-report |
| `evidence_refs` | `[{kind:'intake_response', id, question_id, question_version}]` | referenced, never copied |
| `context` / `context_key` | from `context_template` (semantic + care_program + episode) | distinguishes coexisting assertions |
| `branch_path_token` | carried from intake | reconstructability |
| `supersedes_assertion_id` | set when Mode J updates a prior patient-authored claim on same `(concept, context_key)` | supersession chain |

## Ordering + atomicity

**Claim-first**: `clinical_assertion` emission executes before dependent entity emissions (medication/allergy/immunization/exam_finding); the generated assertion id propagates as `source_assertion_id` (two-stage flow, `1K.0.5.4`). All emissions + paired `audit_events` rows commit in **one Postgres transaction** (`record_intake_emissions_batch`).

## Invariants (what must not collapse)

1. Intake emits **patient-source / provisional** only — adoption is a Clinical Memory + provider act (§7.5 / §7.5.3). Intake authorship NEVER satisfies a provider-confirmation gate.
2. **Provenance preserved** — `source_authority = patient` survives downstream adoption.
3. **Idempotent** on `(patient_id, concept_id, context_key, authored_by, evidence hash)` — replay-safe.
4. Questions with `pre_account_safe: true` MUST NOT carry `concept_mapping` (no pre-account PHI assertions).
5. Clinical Memory owns the assertion row's lifecycle thereafter (authority precedence, reconciliation, current view) — intake does not mutate it post-emit.

## Open

- Vocabulary unification `authored_by`/`status` ↔ `source_authority`/`clinical_adoption_state` (`REV-151`, Clinical Memory) — the emit shape here must use the unified enum once locked.
- Build-state of the assertion emitter inside the orchestrator (`REV-152`).

## Evidence

`clinical_assertion_layer_design` §D/§E/§M · `intake_construction_design` §D · `record_intake_emissions_batch` orchestrator (`writeEmissions` claim-first sort) · thesis §7.5.3.
