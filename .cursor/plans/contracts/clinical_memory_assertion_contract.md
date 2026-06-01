# Clinical Memory / Clinical Assertion — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the clinical-memory substrate (concept registry + assertion layer + adoption gate + current-memory view)
Status: `draft_for_ratification` (created 2026-05-31, Foundation vNext; domain pass #6a; Nick + Knox review gate)
Domain(s): `clinical_memory`, `clinical_assertion`
Lifecycle role: the SUBSTRATE that answers *"what is true about this patient now, by whom, at what authority?"* — the normalized clinical-memory layer that every evidence source writes into and every clinical consumer reads from. It is **not** owned by any one producer (intake, labs, docs, provider, AI all author into it).
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §1.5. **Controlling spine: `clinical_assertion_layer_design` (2026-04-27, audited + sign-off — "the most important design decision in the system to date") + system map `1K.5.A`** (LOCKED) + **shipped substrate** (Phase 3 foundation `lib/intake/assertion-types.ts` + `clinical_assertion` emission target + `record_intake_emissions_batch` Phase 4A orchestrator). **Thesis lens: §7.5.3 patient-source substrate concept** (`source_authority` + `clinical_adoption_state` gate) — which the design and thesis already point at each other (see §1.5). Method per `00_architecture_artifact_index.md`.
Supersedes: clinical-memory framing scattered across `1K.5` / `1J.10` / `1M` / `1O` (consolidated here; those remain LOCKED cross-links)
Superseded by: none
Manifest action: `add_tier1` · Review gate: `user_knox_required`

---

## §1.5 Freshest-Authority Check (embedded) — the rare strong-alignment case

| Layer | Source | Disposition |
|---|---|---|
| **Spine (design, audited+signed)** | `clinical_assertion_layer_design` (concept registry + `patient_clinical_assertions` + context envelope + provenance + authority precedence + reconciliation) | clean-into-contract |
| **Spine (LOCKED map)** | `1K.5.A` clinical concept + assertion layer | clean-into-contract |
| **Shipped substrate** | `lib/intake/assertion-types.ts` (11+ assertion_type, status, confidence, severity, 9-value authored_by), `clinical_assertion` emission target + payload, `record_intake_emissions_batch` orchestrator (claim-first; `source_assertion_id` propagation) | preserve (build-state); exact view/emitter/reconciliation build = build-task |
| **Thesis v2 (lens)** | §7.5.3 patient-source substrate (`source_authority` enum + `clinical_adoption_state` + `patient_initiated`) + §7.5 clinical_adoption + §12.8 substrate-vs-care boundary | **already aligned** — see below |

**Headline reconciliation (alignment, NOT conflict):** thesis §7.5.3 explicitly cross-references `§1K.5.A patient_clinical_assertions` + `patient_self_report` + `authority_rank`. The thesis's **`source_authority` / `clinical_adoption_state`** (not_adopted → adopted/rejected/superseded) **IS** the assertion layer's **`authored_by` / `status`** (unconfirmed → provider_confirmed/rejected) authority-precedence model, at slightly different granularity. Same gate: *patient-sourced data stays provisional until a clinical operator explicitly adopts it.* The substrate anticipated the thesis; the thesis named the table. **Reconciliation work = vocabulary unification (§12), not redesign.**

## §1 Purpose

Clinical Memory owns the **normalized clinical-truth substrate**: the concept registry, the append-only assertion table, the authority/adoption model, conflict reconciliation, the current-memory view, and the `patients.*` chart projection. It is the **shared read/write spine** for clinical truth — fed by many producers, read by all clinical consumers — and it enforces the patient-source-vs-adopted-care boundary (§7.5.3).

## §2 Governing thesis concepts (§7.5.3 + §7.5)

Patient-source is a **substrate concept, not an operator posture**. Patient-source data enters with `source_authority = patient`, `clinical_adoption_state = not_adopted`; **`care_commitment` does NOT attach until a clinical operator explicitly clinically-adopts** (§7.5 `clinical_adoption`; care_commitment threshold §7.3). Provenance is preserved across the gate (`source_authority` stays `patient` even after adoption).

**Build depth bar (Lens B; registry + thesis §3.5):** the *actual build* is a **fraction of an EMR (~10% of Epic)** — the normalized clinical-assertion / current-truth / adoption layer (the Epic "problem list" concept, not its full encounter/billing/regulatory bulk), with **Apple HealthKit "contributions-to-a-record"** adoption discipline (atomized candidates in a review queue, provider commits — never auto-chart-write). Deliberately NOT an EMR. This is the build-facing comparator for Clinical Memory.

## §3 The five-layer model (design §B)

`Evidence (raw, immutable, in its domain home) → Concept (normalized, code-as-config) → Assertion (one claim about a concept, with provenance/authority/status/context) → Context (envelope; coexisting assertions per context_key) → Current Clinical Memory (view: latest non-superseded/non-rejected per (patient, concept, context_key), authority-ranked)`. Provider assessment is **not a separate layer** — it is just another assertion at highest authority that supersedes lower-authority claims.

## §4 Ownership boundary

**Owns:** `clinical_concepts` registry (code-as-config; ~50 seed, grow-from-PRs); `patient_clinical_assertions` (append-only); `source_authority` + `authored_by`; **authority precedence**; `status` / `clinical_adoption_state`; `context` + `context_key`; `evidence_refs` (pointers, never copies); conflict/reconciliation policy; `patient_clinical_assertion_current` view; the `patients.*` chart-column **projection trigger**; the `recordClinicalAssertion` write API + the clinical-adoption gate.
**Does NOT own:** the raw evidence rows (each producer's home — `intake_response`/`patient_state_observations`/`patient_lab_observations`/`patient_document_routing`/`clinical_visits`/AI outputs); intake construction (Intake); identity (Identity); commerce/entitlement; the AI engine that *generates* candidates (AI/Model-Lineage — a producer that must respect the adoption rules, §8.4).

**Anti-junk-drawer boundary (Knox 2026-05-31 — binding):** Clinical Memory is the **assertion / adoption / current-memory substrate — NOT a general clinical-record junk drawer.** It does NOT absorb raw documents, raw labs, clinical notes, encounter documentation, orders, plans, tasks, commerce, or care_commitments. Those remain in their owning domains (D7 docs/consent, Labs, D5 occurrence/work, D6 commerce, care_commitment substrate) and **feed/consume Clinical Memory through seams + projections only** (§10). If a raw artifact or authored document starts living here instead of being *referenced*, that is a bug — move it back to its owning domain.

## §5 Authority precedence (read-view tie-break, locked)

`provider_confirmed > provider_assessed > lab_derived > document_extracted > patient_self_correction > patient_reported > ai_suggested > system_derived`. The current view returns the highest-authority non-superseded row per `(patient_id, concept_id, context_key)`. **Same concept, different `context_key` = coexisting active assertions** (the GLP-1-nausea-in-4-contexts case), NOT a conflict.

## §6 Canonical objects

`clinical_concepts` (registry; `concept_id`, version, aliases, `reconciliation_policy`, `default_authority_floor`) · `patient_clinical_assertions` (append-only; concept+version, `assertion_type`, `status`, `authored_by`(+user_id), `confidence`, `evidence_refs` jsonb, `source_observation_ids` (→ Observation), `source_artifact_ids` (→ D7), `extraction_run`/model_version ref (→ AI lineage) when AI-derived, `context`+`context_key` generated, severity, `supersedes_assertion_id`, `branch_path_token`) · `evidence_refs` (typed pointers to raw rows) · `context` / `context_key` (program/episode/encounter/semantic scope) · `patient_clinical_assertion_current` (view) · `patients.*` projection (trigger from assertions, narrowed convenience columns) · `recordClinicalAssertion` API (`requireCapability(can_record_clinical_assertion)`).

**Mirror, don't duplicate (Nick + Knox 2026-05-31):** Clinical Memory mirrors the **authority / provenance / adoption** layer — it stores *references + badges* (source_artifact_ids, source_observation_ids, extraction lineage, a verification-state pointer/summary, adoption status), **not** the evidence warehouse. It does NOT duplicate raw PDFs, raw observations/lab panels, wearable time-series, full extraction payloads, image blobs, consent documents, or procedure-note bodies — those live in D7 / Observation / AI-extraction / owning domains. Clinical Memory says *"this assertion came from these sources, at this authority, with this verification + adoption status"* (the layered-accountability link, not a parallel copy).

## §7 Reconciliation / conflict rules (design §J)

Confirmation (provider supersedes patient; both preserved) · Conflict (both live; view returns higher authority UNLESS concept's `reconciliation_policy = requires_provider_review_on_conflict` → both surface `unresolved_conflict` + high-risk gates **fail closed** until reconciled) · Different-context (both active; not a conflict) · Duplicate (idempotent on `(patient, concept, context_key, authored_by, evidence hash)`) · Refinement (`concept_id` change + `supersedes` + `provider_refined`). **No silent dedup that erases history.**

## §8 Invariants / rejection rules (the gems)

1. **Append-only / supersession** — never UPDATE in place; status change writes a new row with `supersedes_assertion_id` (matches `1K.5`/`1M.4` discipline).
2. **Evidence referenced, never copied** — raw rows stay in their domain home; assertion holds pointers; replay = follow pointers.
3. **Provider is the only adopter** — only explicit provider action writes `provider_*` status / adopts patient-source data. NO source auto-confirms.
4. **AI never confirms, never satisfies a gate** (§12.8): AI writes only `authored_by = ai_suggested`, `confidence ≤ moderate`, `status = unconfirmed`; AI may *trigger* a provider-review item but the resulting `provider_confirmed` is the provider's write.
5. **Lab-derived / document-extracted never satisfy a provider-confirmation gate** — `status = unconfirmed` until provider adopts; only satisfy gates that explicitly accept that authority (rare; screening flags, not Rx authorization).
6. **Patient-source preserved on rejection** (§7.5.3) — rejected patient-source data is kept as historical evidence, never erased, never clinical truth.
7. **No-direct-`patients.*`-write** — chart columns are a trigger projection of the assertion view (`1J.10` REVOKE GRANT preserved); never an independent source of truth.
8. **No parallel clinical-truth tables** — problem-list / allergy-list / medication-list / diagnoses are **views** (filters on assertions), not tables.
9. **Provenance survives adoption** (§7.5.3) — `source_authority` stays `patient` even after `clinical_adoption_state = adopted`.
10. **Not a clinical junk drawer** (§4 boundary) — Clinical Memory holds assertions + references + projections, NEVER raw documents/labs/notes/encounter-docs/orders/plans/tasks/commerce/care_commitments. Those live in owning domains and cross via seams only.

## §9 Disposition table

| Prior decision / primitive | Disposition | Note |
|---|---|---|
| `clinical_assertion_layer_design` (concept+assertion+context+provenance+authority+reconciliation) | **preserve (spine)** | §3–§8 |
| `1K.5.A` clinical concept + assertion layer | **preserve (LOCKED → clean-in)** | §6 |
| Shipped `assertion-types.ts` + `clinical_assertion` emission + orchestrator | **preserve (build-state)** | §6; exact view/emitter/reconciliation = build-task |
| thesis §7.5.3 `source_authority`/`clinical_adoption_state` | **reconcile-with `authored_by`/`status`** | §1.5/§12 vocab unification |
| problem-list / allergy / medication / diagnoses tables | **reject (are views)** | §8.8 |
| FHIR full reification (laterality/body-site/ICD severity-grade/encounter-scoped) | **reject (overbuild)** | design §P |
| separate "diagnosis" table | **reject** | provider_confirmed condition assertion = diagnosis |
| per-pathway concept silos | **reject** | one normalized layer is the point |

## §10 Seams (producers → Clinical Memory; Clinical Memory → consumers)

- **Producers (in):** `SC-INTK-CM-001` Intake → assertion (patient_reported, claim-first); Mode J → patient_self_correction; Labs → lab_derived; Documents → document_extracted; Provider workspace → `recordClinicalAssertion` (provider_*); AI → ai_suggested.
- **Consumers (out):** Clinical Memory → safety preflight (`loadPatientCaseSafetySnapshot` reads the current view; authority-aware gates); → provider workspace / packet rendering (grouped by concept + context_key); → AI summary (must cite assertion IDs + surface status badges; never collapse context_keys); → `patients.*` projection.
- **Adoption seam:** clinical_adoption (§7.5) → may attach `care_commitment` (§7.3) → CNS/owning domain.

## §11 Projections

`patient_clinical_assertion_current` (latest non-superseded/non-rejected/non-resolved per (patient, concept, context_key), authority-ranked) · problem-list / allergy-list / med-list = view filters · `patients.*` chart columns = flattened convenience projection (trigger). All projections; none is an independent source of truth.

## §12 Open items (→ `08`)

- **Vocabulary unification** (`REV-151`): lock the exact mapping `authored_by`/`status` (substrate, 9+8 values) ↔ `source_authority`/`clinical_adoption_state` (thesis §7.5.3, 6+4 values) — same gate, must not fork into two parallel enums at build.
- **Build-state truth:** which of {`patient_clinical_assertions` table, current view v2, `patients.*` rewire, lab/doc/AI emitters, reconciliation UI} are shipped vs designed (design §O build order 1–14); confirm before build.
- `loadPatientCaseSafetySnapshot` authority-aware-gate Rx blocker (shared with Identity `REV-145`).

## §13 Evidence sources

`clinical_assertion_layer_design` (2026-04-27) + its audit · system map `1K.5.A` / `1K.5` / `1J.10` / `1M` / `1O` / `1L` / `1N` cross-links · shipped `lib/intake/assertion-types.ts` + `lib/intake/write/clinical_assertion.ts` + `record_intake_emissions_batch` · thesis v2 §7.5.3 + §7.5 + §7.3 + §12.8 · clinical-assertion analytics/layer/followup audits (2026-04-27).
