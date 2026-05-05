# `lib/intake/` — typed intake foundation

Per system map **Section 1K.0.5** (Data routing + atomization boundary + claim-ledger-vs-reconciled-entity discipline) — the canonical clinical foundation for the platform.

## Architecture overview

```
                      Raw input sources
              (intake responses, messages, lab feeds,
              document extractions, AI outputs, devices)
                              │
                              ▼
                       Emitter / router
              (per-target write handlers in lib/intake/write/)
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
  Identity / contact   Clinical claim ledger   Reconciled clinical entities
  patients,            patient_clinical_       patient_medications,
  patient_addresses,   assertions              patient_allergies,
  patient_contacts                             patient_immunizations,
                                               patient_exam_findings
        │                     │                     │
        ▼                     ▼                     ▼
  Trackable obs        Diagnostic artifacts    Consents
  patient_state_       patient_lab_obs,        patient_consents
  observations         patient_diagnostic_
                       reports
        │                     │                     │
        ▼                     ▼                     ▼
  Commerce             Administrative          Process state
  treatment_orders,    patient_external_       intake_sessions,
  subscriptions,       providers,              clinical_visits,
  commerce_orders      patient_preferred_      message_threads,
                       pharmacies,             appointments
                       patient_emergency_
                       contacts,
                       patient_advance_
                       directives,
                       patient_insurance_
                       details
        │                     │                     │
        ▼                     ▼                     ▼
  Derived decisions    Telemetry              (composed views)
  eligibility_         audit_events           problem-list,
  decisions                                   allergy-list,
                                              med-list,
                                              facesheet,
                                              care-plan,
                                              reconciliation-queue
```

## File layout

- `types.ts` — Module, Question, Pathway, Emission (discriminated union; 21 targets)
- `answer-types.ts` — Zod schemas per answer_type (single_select, multi_select, numeric, date, etc.)
- `branching.ts` — render_when predicate types (response, assertion, entity, interaction_context, and/or/not)
- `interaction-context.ts` — InteractionContext per Section 1Q.23
- `session-state.ts` — IntakeSession status enum + metadata flags
- `events.ts` — 12+ audit_events action values + Zod payload schemas per Section 1K.19.9
- `targets.ts` — 21-value emission target enum + per-target payload schemas
- `authored-by.ts` — 9 values per Section 1K.5.A claim-ledger authorship
- `assertion-types.ts` — 11+ assertion_type values + status + confidence + severity enums
- `reconciliation-status.ts` — 5-value enum for reconciled entity workflow
- `write/` — 21 typed write handler stubs (one per target); Phase 4 fills bodies
- `question-bank/` — typed question definitions per module
- `modules/` — typed module catalog
- `pathways/` — pathway composition (e.g., glp1.ts)
- `views/` — derived view helpers (problem-list, allergy-list, med-list, facesheet, care-plan, reconciliation-queue)

## Sibling registries

- `lib/clinical-concepts/` — concept_id catalogs for the claim ledger (condition, symptom, medication, intent, etc.)
- `lib/entities/` — TypeScript types for reconciled clinical entities + administrative entities
- `lib/consents/` — consent type catalog aligned with Section 1K.11 enum
- `lib/commerce/` — pricing profile schema + GLP-1 instance + Stripe integration types

## Key principles

1. **Atomization boundary**: not everything is an "atom." Identity / contact / commerce / observation / decision / telemetry data have their own canonical homes. See Section 1K.0.5.
2. **Claim ledger vs reconciled entities**: claim-shaped data (conditions, symptoms, family hx, intent) lives in `patient_clinical_assertions`. Entity-shaped data (meds, allergies, immunizations, exam findings) follows the two-stage flow: claim → reconciliation → entity.
3. **Append-only discipline**: claims, observations, consents, decisions, and reconciled entities are immutable. Changes write a new row with `supersedes_*_id` chain.
4. **Routing target enum**: every intake question's emissions declare a `target:` per emission. The 21 values map 1:1 to write handler files.
5. **Same-transaction audit emission**: every state-mutating write emits a paired `audit_events` row in the same DB transaction per Section 1Q.7.
6. **Intent vs treatment_target vs operational preference**: three distinct concept domains, three authorship/authority models. See Section 1K.0.5.9.

## Phase status

- **Phase 3 (current):** declarative TypeScript foundation. Types, registries, write handler stubs (throw 'not implemented'), DB migration. Zero behavior change.
- **Phase 4 (next):** runtime resolver, write handler implementations, frontend intake renderer, Stripe Subscriptions integration, rule engine for Section 1Q.15 GLP-1 rules.
