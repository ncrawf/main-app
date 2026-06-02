# Clinical Memory / Clinical Assertion — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the clinical-memory substrate (concept registry + assertion layer + adoption gate + current-memory view)
Status: `draft_for_ratification` (created 2026-05-31, Foundation vNext; domain pass #6a; Nick + Knox review gate) · **legacy-scatter backfill done 2026-06-01** (grepped legacy map beyond §1K.5/§1G: SURFACED the unowned DL-7/§1W `tracked_clinical_objects` layer — `REV-167`; related the five-layer provenance axis to DL-7's four-layer epistemic axis §3; routed structured-authoring→D7, encounter/intervention→D5, billing-artifact→D6, recall/surveillance→OFC `REV-163`) · **corpus gem-pull (clinical-assertion cluster) done 2026-06-01** (8 audits incorporated → §5.1 pattern-vs-authority + rollup · §6.1 naming rule + concept_id/field_name · §6.2 identity-namespace-vs-envelopes · §6.3 composite-builder + partial-data · §6.4 acute-states promotion-threshold · §8.11-13 · §10 lab-mapping; D1-D7 lists routed as config-as-code seed; glp1 renames superseded) · **validation-sweep add 2026-06-01:** `care_management_source` supplemental field (§6.2; care_management_source audit)
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

**Build depth bar (Lens B; registry + thesis §3.5):** the *actual build* is a **distinct architectural layer — the normalized clinical-assertion / current-truth / adoption substrate — NOT an EMR and NOT a slice of one.** It is the thing EMRs never built cleanly: one governed memory of what is currently true about a patient, with provenance + adoption lineage. Adoption discipline mirrors **Apple HealthKit "contributions-to-a-record"** (atomized candidates in a review queue, provider commits — never auto-chart-write). This is the build-facing comparator for Clinical Memory.

## §3 The five-layer model (design §B)

`Evidence (raw, immutable, in its domain home) → Concept (normalized, code-as-config) → Assertion (one claim about a concept, with provenance/authority/status/context) → Context (envelope; coexisting assertions per context_key) → Current Clinical Memory (view: latest non-superseded/non-rejected per (patient, concept, context_key), authority-ranked)`. Provider assessment is **not a separate layer** — it is just another assertion at highest authority that supersedes lower-authority claims.

**Relation to legacy DL-7 / §1W four-layer epistemic model (orthogonal axis — must not be conflated):** the five layers above are the **provenance/authority axis**. Legacy DL-7's `tracked finding → assertion atom → diagnosis entity → billing artifact` is an **epistemic-promotion axis**. They intersect at the **assertion atom = Clinical Memory's assertion** (CM owns it; `diagnosis entity` = a `provider_confirmed` condition assertion, §9). But DL-7's **`tracked_clinical_object`** (the durable longitudinal per-patient object — "*this* patient's glabellar rhytid" — with `object_id` + anatomical anchoring + `clinical_object_aliases` + AI-assisted identity reconciliation + continuity history) is **NOT the same as CM's normalized `concept`** and currently has **no owner**. Scope decision pending — see §12 `REV-167`.

## §4 Ownership boundary

**Owns:** `clinical_concepts` registry (code-as-config; ~50 seed, grow-from-PRs); `patient_clinical_assertions` (append-only); `source_authority` + `authored_by`; **authority precedence**; `status` / `clinical_adoption_state`; `context` + `context_key`; `evidence_refs` (pointers, never copies); conflict/reconciliation policy; `patient_clinical_assertion_current` view; the `patients.*` chart-column **projection trigger**; the `recordClinicalAssertion` write API + the clinical-adoption gate.
**Does NOT own:** the raw evidence rows (each producer's home — `intake_response`/`patient_state_observations`/`patient_lab_observations`/`patient_document_routing`/`clinical_visits`/AI outputs); intake construction (Intake); identity (Identity); commerce/entitlement; the AI engine that *generates* candidates (AI/Model-Lineage — a producer that must respect the adoption rules, §8.4).

**Anti-junk-drawer boundary (Knox 2026-05-31 — binding):** Clinical Memory is the **assertion / adoption / current-memory substrate — NOT a general clinical-record junk drawer.** It does NOT absorb raw documents, raw labs, clinical notes, encounter documentation, orders, plans, tasks, commerce, or care_commitments. Those remain in their owning domains (D7 docs/consent, Labs, D5 occurrence/work, D6 commerce, care_commitment substrate) and **feed/consume Clinical Memory through seams + projections only** (§10). If a raw artifact or authored document starts living here instead of being *referenced*, that is a bug — move it back to its owning domain.

## §5 Authority precedence (read-view tie-break, locked)

`provider_confirmed > provider_assessed > lab_derived > document_extracted > patient_self_correction > patient_reported > ai_suggested > system_derived` (implemented as a STORED `authority_rank` generated column for hot-path ORDER BY). The current view returns the highest-authority non-superseded row per `(patient_id, concept_id, context_key)`. **Same concept, different `context_key` = coexisting active assertions** (the GLP-1-nausea-in-4-contexts case), NOT a conflict.

**Three distinct axes — do NOT conflate** (followup audit): `authority` (`authored_by`, **locked at write time**, drives safety floors) ≠ `status` (who AGREES — `unconfirmed`→`provider_confirmed`) ≠ `confidence` (the SOURCE's self-reported reliability — `low|moderate|high|definitive`, + optional `confidence_score` float for `ai_suggested`). `assertion_type` captures CLAIM CONTENT; `status` captures AGREEMENT.

### §5.1 Longitudinal pattern vs authority (the hard rule — observability ≠ safety contract)

**`current_authority` drives floor decisions; `longitudinal_pattern` drives queue priority + provider attention. NEVER the reverse** (authority_vs_longitudinal audit). Repeated patient reports raise a `longitudinal_pattern`/`confidence_weight` but **never** promote `status`, **never** raise `authored_by`/`authority_rank`, **never** satisfy an authority floor or bypass reconciliation — they may only boost `priority_hint` (e.g., `urgent_clinical`) for provider review. Safety preflight reads `current_authority`, NEVER pattern/confidence_weight. This is candidate≠commit / LI-informs-never-commits (`D0W3C-GRD-001`) at the assertion layer. Backed by a sibling observability view (§11 rollup); numeric `confidence_weight` deferred to v1.1 (pattern label suffices for v1).

## §6 Canonical objects

`clinical_concepts` (registry; `concept_id`, version, aliases, `reconciliation_policy`, `default_authority_floor`) · `patient_clinical_assertions` (append-only; concept+version, `assertion_type`, `status`, `authored_by`(+user_id), `confidence`, `evidence_refs` jsonb, `source_observation_ids` (→ Observation), `source_artifact_ids` (→ D7), `extraction_run`/model_version ref (→ AI lineage) when AI-derived, `context`+`context_key` generated, severity, `supersedes_assertion_id`, `branch_path_token`) · `evidence_refs` (typed pointers to raw rows) · `context` / `context_key` (program/episode/encounter/semantic scope) · `patient_clinical_assertion_current` (view) · `patients.*` projection (trigger from assertions, narrowed convenience columns) · `recordClinicalAssertion` API (`requireCapability(can_record_clinical_assertion)`).

**Mirror, don't duplicate (Nick + Knox 2026-05-31):** Clinical Memory mirrors the **authority / provenance / adoption** layer — it stores *references + badges* (source_artifact_ids, source_observation_ids, extraction lineage, a verification-state pointer/summary, adoption status), **not** the evidence warehouse. It does NOT duplicate raw PDFs, raw observations/lab panels, wearable time-series, full extraction payloads, image blobs, consent documents, or procedure-note bodies — those live in D7 / Observation / AI-extraction / owning domains. Clinical Memory says *"this assertion came from these sources, at this authority, with this verification + adoption status"* (the layered-accountability link, not a parallel copy).

### §6.1 Concept naming rule (binding) + concept_id-vs-field_name split

**`concept_id` names the clinical ENTITY** (the disease/symptom/drug/procedure — "what the thing is"); **lifecycle/state lives in assertion fields** (`assertion_type`/`status`/`onset_at`/`resolved_at`/`severity`/`metadata.disease_state`/`context`). A modifier stays in `concept_id` ONLY when it makes a **clinically-distinct entity** (different etiology/management/prognosis — `condition.diabetes_type_1` vs `_type_2`; `angina_unstable` vs `_stable`) — NEVER `_history`/`_active`/`_recent`/`_unconfirmed`/`_event` suffixes (those are lifecycle → assertion fields). **`concept_id` (clinical concepts — presence/absence/history) and `field_name` (trackable measurements in Observation/1M — continuous values over time) are complementary, not redundant:** a symptom assertion (`concept_id=symptom.nausea`) MAY reference a measurement series (`field_name=glp1_nausea_severity`) via `evidence_refs`. **`concept_version` evolution:** patch (display/alias) · minor (new optional field, floor/policy LOOSENING) · major (floor/policy TIGHTENING or retire+`replaced_by` — requires a migration plan). Concept registry seed (D1-D7 lists + the rename set) is **config-as-code** in `repo/clinical-concepts/` (CODEOWNERS-gated), NOT contract text.

### §6.2 AssertionContext = identity namespace vs supplemental envelopes (analytics audit — binding)

Context has **two categories with different rules**: (1) **Identity namespace** — a FIXED 8-field allowlist hashed into `context_key` (`care_program_id` · `pathway_code` · `treatment_item_id` · `dose_context` · `episode_id` · `episode_kind` · `treatment_phase` · `semantic_context`); adding a 9th reshapes supersession for ALL assertions → requires CODEOWNERS review. (2) **Supplemental envelopes** — per-source optional jsonb sub-shapes (`context.check_in` · `context.lab` · `context.provider_assessment`; deferred `document`/`medication_exposure`/`ai`/`adverse_event`), **NOT in `context_key`**, additive, each source owns its own, old readers degrade gracefully. **Identity ≠ provenance.** `context_key` = a single `canonicalContextKey()` (deterministic sha256 over the 8 identity fields) — same input → same key across clients.

**`care_management_source` (supplemental field; care_management_source audit):** a supplemental enum on context (`internal_program` · `outside_provider` · `patient_self_directed` · `unmanaged` · `unknown`; NULL = `unknown`) recording **who manages care for this concept** — resolving the ambiguity of NULL `treatment_item_id` (external-use vs not-yet-prescribed vs missing vs stopped). **NOT in `context_key`** (a `medication.tirzepatide` is the same entity regardless of prescriber) and **NOT safety-authoritative** (a pancreatitis history still blocks GLP-1 regardless of source). Pathway context ≠ care ownership (a patient can be in `pathway_code=glp1` with `care_management_source=outside_provider` for an existing GLP-1). Advisory-only auto-suggest (never auto-populated; provider sets via `recordClinicalAssertion`).

### §6.3 Multi-question composite assertion-builder + partial-data (safety-critical)

Single-question → single-assertion is the Stage-1 emitter; a **Stage 1.5 deferred composite emitter** handles many-questions → one assertion (`assertion_group_id` + `contributes_to` + `contribution_template` + module-level `assertion_group_emit_trigger`; emits on trigger with `evidence_refs` = all contributing rows; Mode J re-runs over current-latest answers + double-supersession). Every composite carries `metadata.completion_status ∈ {complete · partial · gating_negative · gating_uncertain}` (never NULL). **Missing field = NULL = UNKNOWN — never backfilled, never defaulted** (NULL ≠ 0 ≠ false ≠ negative). **Partial/unknown/uncertain assertions NEVER grant permission for a high-risk mutation — they fail closed + route to provider** (§8.11). Analytics SQL discipline: treat NULL as a third state; **absence-of-assertion ≠ denial** (denial = explicit `assertion_type=absent`).

### §6.4 Acute states = promotion-threshold model (NOT a parallel `clinical_episodes` table)

Acute states (exacerbation/flare/decompensation/side-effect-course/acute-event) are **structured assertion context + metadata on the SAME longitudinal `concept_id`** — NOT separate concept_ids, NOT a parallel entity. Differentiated by `assertion_type` (`present` = chronic/baseline vs `active_problem` = acute-now), `metadata.disease_state` (acute enum), `onset_at`/`resolved_at`, `severity` (sequential supersession captures progression), `context.episode_id`/`episode_kind`. Concept registry field `active_disease_state_blocks_pathways[]` gates pathways at preflight when current `disease_state` is acute. **Promote to a dedicated `clinical_episodes` table ONLY when ALL THREE hold:** (1) state machine more complex than current/resolved (e.g. hospitalization), (2) follow-up cadence distinct from chronic management, (3) episode-count cohorts not computable from assertion timestamps. **None hold in v1.** (This is the same "promote-to-first-class-only-when-the-workflow-demands-it" discipline as `REV-167` tracked-clinical-objects + `REV-163` OFC — and a direct precedent for the `REV-167` decision.)

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
11. **Partial / unknown / uncertain never grants permission** (§6.3) — a partial/`gating_uncertain` assertion or a NULL safety-relevant field **fails closed** for high-risk mutations (reason `paused_needs_*`) and routes to provider; the entity claim still blocks even when details are partial.
12. **Emitter failure is fail-closed (no DLQ)** — an assertion-emitter failure (unknown `concept_id`, malformed context, RLS reject) **aborts the source INSERT in the same transaction**; no swallowed try-catch, no dead-letter (matches Intent's "failed audit blocks the mutation").
13. **Read the view, not the column, for time-sensitive fields** — provider workspace MUST read `patient_clinical_assertion_current` (with `freshness_state`) for any field whose `freshness_profile != static_no_refresh`; only static fields (legal name / DOB once L3-locked) may read the `patients.*` denormalized column. The chart columns are `REVOKE UPDATE`'d from all callers except the projection trigger; **every writer (incl. 1O document-derived facts) goes through `recordClinicalAssertion`** — no parallel chart-table path.

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
| DL-7/§1W `tracked_clinical_objects` + `clinical_object_aliases` + `object_id` + anatomical anchoring + clinical-identity reconciliation | **scope decision pending (`REV-167`)** | the durable longitudinal-object layer ≠ CM normalized `concept`; own primitive/domain vs fold into CM concept+context — analogous to `REV-163` |
| DL-7 four-layer epistemic model (tracked finding → assertion atom → diagnosis entity → billing artifact) | **split across domains** | assertion atom = CM (here); diagnosis entity = CM `provider_confirmed` view; tracked finding/object = `REV-167`; billing artifact = D6 |
| DL-7 structured-first authoring + note-as-rendered-output | **route → D7** | the note is a rendered projection (D7 documents/charting), not a CM table |
| DL-7 encounter → intervention → checkout continuity chain | **route → D5** (+ OFC `REV-163` for recall/surveillance) | actualized-work + procedure/intervention lifecycle is D5; recall/surveillance hooks = care_obligation |
| clinical-assertion audit cluster (2026-04-27/30: layer + followup + analytics + concept_naming + authority_vs_longitudinal + acute_states + lab_authored_by) | **incorporated (sharpens spine)** | §5/§5.1 (axes + pattern-vs-authority + rollup), §6.1-§6.4 (naming · context namespaces · composite-builder/partial-data · acute-states), §8.11-13, §10 (lab mapping), §11 (rollup). Source examples retained as evidence — not transcribed |
| D1-D7 concept lists + comprehensive rename set (concept_naming Part 3) | **config-as-code seed → `repo/clinical-concepts/`** (CODEOWNERS-gated) | the registry CONTENT, not contract text; contract owns the naming RULE (§6.1) |
| `glp1_concept_registry_analysis` renames | **superseded by concept_naming** (its renames are explicitly overridden); concept-volume sizing = evidence | partly-stale |
| static-clinical-facts Fix A-F (DB-trigger / REVOKE+ESLint / read-view-for-time-sensitive / source_actor derivation / 1O-through-API / recon-as-gate) | **incorporated** (§6.2/§8.12/§8.13) + build-state | projection-boundary hardening; CI/REVOKE mechanics = build-task |
| separate `clinical_episodes` table (acute states) | **reject for v1 (promotion-threshold)** | §6.4; promote only on all-3 criteria |
| `parent_concept_id` field (v1) | **drop (overbuild)** | followup B1; add when refinement UI ships |
| event-sourcing / CRDT / triple-store-RDF / MEL-countdown / per-type sub-tables | **reject (overbuild)** | followup E "don't build" — single Postgres + RLS + triggers gives replay without the boilerplate |

## §10 Seams (producers → Clinical Memory; Clinical Memory → consumers)

- **Producers (in):** `SC-INTK-CM-001` Intake → assertion (patient_reported, claim-first); Mode J → patient_self_correction; Labs → lab_derived; Documents → document_extracted; Provider workspace → `recordClinicalAssertion` (provider_*; `client_idempotency_key` for double-click safety); AI → ai_suggested (+`confidence_score`).
- **Lab-source → `authored_by` mapping (binding; lab_authored_by audit):** we-ordered partner/kit/device (structured) → `lab_derived`/high (satisfies a `lab_derived` floor) · outside-ordered structured vendor feed → `lab_derived`/moderate (concept policy may still require provider review) · external-upload OCR/AI-extracted → `document_extracted` (CANNOT satisfy a lab floor until provider supersedes) · ops/provider-entered from paper → `provider_assessed` · patient memory ("my A1c was 7") → `patient_reported` assertion-only (no `patient_lab_observations` row; never satisfies a lab floor). **Provider supersession is the single elevation path** for any outside lab to gate-satisfying authority.
- **Consumers (out):** Clinical Memory → safety preflight (`loadPatientCaseSafetySnapshot` reads the current view; authority-aware gates); → provider workspace / packet rendering (grouped by concept + context_key); → AI summary (must cite assertion IDs + surface status badges; never collapse context_keys); → `patients.*` projection.
- **Adoption seam:** clinical_adoption (§7.5) → may attach `care_commitment` (§7.3) → CNS/owning domain.

## §11 Projections

`patient_clinical_assertion_current` (latest non-superseded/non-rejected/non-resolved per (patient, concept, context_key), authority-ranked) · **`patient_clinical_assertion_history_rollup`** (observability sibling, live-computed v1; per (patient, concept, context_key); `longitudinal_pattern` 6-enum `consistent_present`/`consistent_absent`/`consistent_resolved`/`conflicting`/`uncertain`/`insufficient_history` + counts/source_mix/temporal — drives queue priority + provider attention ONLY, §5.1; safety reads the CURRENT view, never the rollup) · problem-list / allergy-list / med-list = view filters · `patients.*` chart columns = flattened convenience projection (trigger). All projections; none is an independent source of truth.

## §12 Open items (→ `08`)

- **Vocabulary unification** (`REV-151`): lock the exact mapping `authored_by`/`status` (substrate, 9+8 values) ↔ `source_authority`/`clinical_adoption_state` (thesis §7.5.3, 6+4 values) — same gate, must not fork into two parallel enums at build.
- **Build-state truth:** which of {`patient_clinical_assertions` table, current view v2, `patients.*` rewire, lab/doc/AI emitters, reconciliation UI} are shipped vs designed (design §O build order 1–14); confirm before build.
- `loadPatientCaseSafetySnapshot` authority-aware-gate Rx blocker (shared with Identity `REV-145`).
- **Tracked-clinical-object / DL-7 §1W home** (`REV-167`): the durable longitudinal `tracked_clinical_object` layer (object_id + anatomical anchoring + aliases + clinical-identity reconciliation + continuity history) has no owner. Decide: own foundation primitive/domain vs fold into CM `concept`+`context_key`. Then place the four-layer epistemic model across CM/D5/D7/D6/OFC. **Precedent: §6.4 acute-states promotion-threshold** (model as assertion metadata now; promote to a dedicated entity only when all-3 workflow criteria hold) is the v1 answer pattern — `REV-167` should apply the same test to `tracked_clinical_object`. (legacy-scatter backfill 2026-06-01; corpus-pull 2026-06-01)

## §13 Evidence sources

`clinical_assertion_layer_design` (2026-04-27) + its audit · system map `1K.5.A` / `1K.5` / `1J.10` / `1M` / `1O` / `1L` / `1N` cross-links · shipped `lib/intake/assertion-types.ts` + `lib/intake/write/clinical_assertion.ts` + `record_intake_emissions_batch` · thesis v2 §7.5.3 + §7.5 + §7.3 + §12.8 · **clinical-assertion audit cluster (2026-04-27/30): `clinical_assertion_layer_audit` · `_followup_audit` · `_analytics_audit` · `concept_naming_and_assertion_builder` · `authority_vs_longitudinal_confidence` · `acute_states_promotion_threshold` · `lab_authored_by_mapping` · `static_clinical_facts_audit` · `glp1_concept_registry_analysis` (renames superseded)**.
