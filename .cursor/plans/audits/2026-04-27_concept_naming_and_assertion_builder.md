# Concept Naming Rule + Multi-Question Assertion-Builder + Partial-Data + D1-D7 Clinical Decisions + G7 Governance — Combined Audit

**Date:** 2026-04-27
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** lock the concept naming + assertion-mapping pattern, the multi-question assertion-builder, partial-data semantics, all D1-D7 clinical decisions (with renaming applied), and the G7 governance items — BEFORE any `repo/clinical-concepts/` file authoring begins
**Verdict:** ready to patch and proceed to file authoring after this checkpoint

---

# Part 1 — Concept naming rule (binding)

## A. The rule

**`concept_id` names the underlying clinical entity. Lifecycle/state about that entity belongs in assertion fields.**

The clinical entity is "what is the thing" — the disease, the symptom, the drug, the procedure, the body process. Lifecycle is "what's the temporal/clinical state of that thing right now."

| Belongs in `concept_id` | Belongs in assertion fields |
|---|---|
| Disease entity (`condition.colon_cancer`) | Currently active vs in remission vs resolved |
| Symptom entity (`symptom.nausea`) | First episode vs ongoing vs resolved |
| Medication entity (`medication.insulin`) | Currently taking vs past use vs never used |
| Procedure entity (`surgery.cholecystectomy`) | Date performed; complications |
| Pathophysiologically-distinct subtype (`condition.diabetes_type_1` vs `condition.diabetes_type_2`) | Patient-reported vs provider-confirmed |

Lifecycle goes to:
- `assertion_type`
- `status`
- `authored_by`
- `onset_at` / `onset_estimated`
- `resolved_at` / `resolution_reason`
- `severity`
- `metadata.disease_state` (`active | remission_recent | remission_sustained | resolved | controlled_with_treatment | uncontrolled | unknown`)
- `metadata.*` for entity-specific clinical detail (stage, subtype, mechanism)
- `context.*` for clinical episode / treatment context
- `evidence_refs[]` for sources

## B. Exceptions where lifecycle/state STAYS in concept_id

A modifier stays in `concept_id` only when the modifier creates a **clinically distinct entity** — different etiology, different management, different prognosis. Not just a different point in time.

**Real exceptions (keep in concept_id):**

- `condition.diabetes_type_1` vs `condition.diabetes_type_2`
- `condition.angina_unstable` vs `condition.angina_stable`
- `condition.heart_failure_systolic` vs `condition.heart_failure_diastolic` (when granularity needed)
- `condition.anorexia_nervosa` vs `condition.bulimia_nervosa` vs `condition.binge_eating_disorder`
- `condition.coronary_artery_disease` vs `condition.myocardial_infarction`
- `condition.atrial_fibrillation` vs `condition.ventricular_tachycardia` (when granularity warrants)
- `condition.medullary_thyroid_cancer` separate from `condition.thyroid_cancer`
- `condition.cellulitis` vs `condition.necrotizing_fasciitis`

**NOT exceptions (collapse into entity + assertion fields):**

- `_history` suffix on conditions / cancers / procedures
- `_active` suffix on medications, conditions, intent
- `_recent` suffix on social history
- `_unconfirmed` / `_unconfirmed_patient_reported` suffix
- `_event` suffix on symptoms

---

# Part 2 — Multi-question assertion-builder pattern

## C. Stage 1.5 deferred composite emitter

The existing Stage 1 emitter (per `1K.5.A`) handles single-question → single-assertion mappings unchanged. A new **Stage 1.5 deferred composite emitter** handles multi-question groups where many questions contribute to one composite assertion.

### Question-bank declaration extensions

Three optional fields added to `concept_mapping`:

```ts
concept_mapping?: {
  // ... existing fields
  assertion_group_id?: string;
  contributes_to: ('assertion_type' | 'status' | 'onset_at' | 'resolved_at' | 'severity' | 'metadata' | 'evidence_only')[];
  contribution_template: {
    [answer_value: string]: {
      assertion_type?: AssertionType;
      onset_at_from_value?: boolean;
      resolved_at_from_value?: boolean;
      severity_value?: SeverityLevel;
      metadata_set?: Record<string, unknown>;
      stops_group?: boolean;
    };
  };
};
```

Plus one module-level declaration:

```ts
assertion_group_emit_trigger: {
  [assertion_group_id]: 'all_required_answered' | 'module_complete' | 'session_submitted' | 'gating_negative';
};
```

### Emission flow

When `intake_response` is inserted for a question with `assertion_group_id`:
- Stage 1 emitter writes nothing yet
- Row marked `metadata.assertion_group_pending = true` + `metadata.assertion_group_id = <id>`
- Draft assertion held keyed on `(intake_session_id, assertion_group_id, concept_id, context_key)`
- Each subsequent answer merges its contribution into the draft

When the group's `assertion_group_emit_trigger` fires:
- Stage 1.5 emitter walks the draft + all contributing intake_response rows
- Composes the final assertion with all accumulated fields
- Writes to `patient_clinical_assertions` with `evidence_refs = [all contributing intake_response refs]`
- Stage 2 trigger fires the patients.* projection per existing pipeline

### Mode J double-supersession on a group

Patient updates ONE question in a previously-emitted group via Mode J:
- New `intake_response` row written + supersedes prior single-question response per `1K.5` Mode J discipline
- Stage 1.5 emitter re-runs over the group's CURRENT LATEST answers
- New composite assertion emitted with `supersedes_assertion_id` pointing at prior composite + updated `evidence_refs`
- Double-supersession discipline (intake_response chain + assertion chain) holds

## D. Partial-data handling (binding; safety-critical)

### Four completion_status values (extends prior round's three)

| Value | Meaning |
|---|---|
| `complete` | All declared required questions answered |
| `partial` | Gating answered (positive/uncertain), patient quit before completing the group; some non-gating fields missing |
| `gating_negative` | Gating question answered "no"; group short-circuited; assertion `assertion_type = absent` |
| `gating_uncertain` | Gating question answered "I don't know" / "unsure"; group short-circuited; assertion `assertion_type = suspected` (or the contribution_template's mapping for the uncertain answer) |

`metadata.completion_status` MUST be set on every composite assertion at write time — never NULL. Single-question simple assertions (Stage 1, no `assertion_group_id`) get `metadata.completion_status = 'complete'` by default. CI lint + DB CHECK constraint enforce that completion_status is populated.

### Missing fields = NULL = UNKNOWN (binding)

Stage 1.5 emitter only writes fields that have explicit contributions from answered questions. Unanswered → NULL. **Never backfilled, never defaulted at write time.**

CI rule: emitter rejects any code path that sets a default for a missing contribution. Lint check.

NULL means UNKNOWN. NULL ≠ 0, ≠ false, ≠ negative.

### Safety preflight semantics for partial assertions

| Scenario | Behavior |
|---|---|
| Concept has `default_authority_floor = provider_confirmed`; partial patient-reported assertion | Floor not satisfied (authored_by < floor). **Block fires.** Same as complete patient-reported. |
| Safety check requires field that is NULL on partial (e.g., specific severity) | **Fail closed.** Block with reason code `paused_needs_provider_severity_clarification_<concept_id>`. Unknown severity cannot be assumed safe. |
| Safety check requires entity claim intact even on partial (e.g., "block if patient has CHF") | **Block fires.** Entity claim is intact regardless of partial details. |
| Conflict between partial and provider/lab assertion under `requires_provider_review_on_conflict` | **Block fires** for reconciliation. Same as complete-vs-conflict. |
| `gating_uncertain` on a concept whose authority floor or freshness profile requires definitive answer | **Fail closed.** Reason code `paused_needs_patient_clarification_<concept_id>`. Mode J or Mode E re-prompt. |

**Net property: partial / unknown / uncertain assertions never grant permission for high-risk mutations. They block and route to provider for resolution.**

### Provider packet rendering (`1K.12`) + workspace panel (`1G.8.5`)

| completion_status | Visual treatment |
|---|---|
| `complete` | Standard rendering; no marker |
| `gating_negative` | Light-gray: "Patient denied [concept]" |
| `gating_uncertain` | Yellow: "Patient unsure about [concept] — provider review recommended" |
| `partial` | Yellow/orange: "Partial answers — N of M questions answered" + expand link |

Partial and gating_uncertain assertions sort to the TOP of the relevant section. NULL fields render as **explicit "Not provided by patient"** — never sentinel defaults.

### Analytics SQL discipline rules (binding)

1. **NEVER use `severity != 'severe'` or similar without explicit `IS NULL` handling.** Treat NULL as a third state in every comparison.
2. **NEVER use "patient does not have X" via absence of assertion.** Compute via explicit `assertion_type = 'absent'` query. Absence of assertion ≠ denial; it's "no info on file."
3. **ALWAYS document the partial inclusion rule in metric definitions.** Every dashboard / report writer specifies whether their cohort includes / excludes / segregates partials.

Cohort definitions:
- "Patients with [concept]" — `assertion_type = present`, includes both `complete` and `partial` (entity claim intact)
- "Patients with documented [specific subtype/stage/severity]" — explicit field filter, EXCLUDES partials with that field NULL
- "Patients who denied [concept]" — `assertion_type = absent` (gating_negative)
- "Patients with no info on [concept]" — no assertion exists at all (distinct from partial)
- "Patients uncertain about [concept]" — gating_uncertain + suspected without provider confirmation

---

# Part 3 — D1-D7 clinical decisions (UPDATED with naming rule applied)

All decisions confirmed by clinical CODEOWNER (board-certified MD). Renames applied to drop lifecycle suffixes per Part 1.

## D1. Cancer concepts (split + parent fallback) — CONFIRMED with renames

```
condition.cancer                        (parent fallback for vague "had cancer")
condition.breast_cancer                 (HRT contraindication when ER+/PR+)
condition.endometrial_cancer            (HRT contraindication)
condition.prostate_cancer               (TRT contraindication / caution)
condition.colon_cancer                  (no specific Rx contraindication; common)
condition.melanoma                      (HRT caution per some studies)
condition.thyroid_cancer                (separate from MTC)
condition.medullary_thyroid_cancer      (already separate concept; MEN-2 association)
condition.pancreatic_cancer             (renamed from condition.pancreatic_cancer_history)
```

For each: assertion_type captures `present` (active disease) vs `history_of` (resolved). `metadata.disease_state` captures `active | remission_recent | remission_sustained | resolved | unknown`. `severity` captures stage. `metadata.cancer_type_text` for parent fallback when patient can't recall type.

## D2. Mental health typed list (direct, not unspecified-disambiguate) — CONFIRMED with cleanup

Drop the `eating_disorder_` prefix (concept_type = condition already says it). Drop `_active`, `_recent` suffixes.

```
condition.depression
condition.anxiety_generalized
condition.bipolar_disorder
condition.ptsd
condition.ocd
condition.schizophrenia_or_psychotic_disorder
condition.anorexia_nervosa
condition.bulimia_nervosa
condition.binge_eating_disorder
condition.arfid
condition.osfed
condition.adhd
condition.alcohol_use_disorder
condition.substance_use_disorder_unspecified  (placeholder until pathway needs typed children)
condition.mental_health_unspecified           (fallback for genuine "other" entries only)
symptom.suicidal_ideation
symptom.homicidal_ideation
symptom.self_harm_behavior
```

Question bank asks the typed list directly. No Mode E disambiguate flow for the typed cases. `mental_health_unspecified` exists only as a fallback for "other (specify)" entries.

## D3. Gallbladder concepts (4 distinct) — CONFIRMED with renames

```
condition.cholelithiasis              (gallstones — entity; assertion_type captures lifecycle)
condition.cholecystitis               (gallbladder inflammation — entity)
condition.gallbladder_disease_unspecified   (umbrella for vague patient recall)
surgery.cholecystectomy               (the procedure — concept_type = procedure)
```

## D4. Pregnancy reconciliation workflow — CONFIRMED

### (a) Block scope: per-pathway via authority_floor — CONFIRMED

| Pathway | `condition.pregnancy` floor enforcement |
|---|---|
| GLP-1 | hard block on `prescribe_catalog` and `refill_approve` |
| TRT | not applicable (typically male patients) |
| HRT estrogen | hard block (most estrogen formulations contraindicated in pregnancy) |
| HRT progesterone-only | provider review (some progesterone safe in pregnancy) |
| ED PDE5 | not applicable |
| Anxiety SSRI | provider review (risk/benefit; SSRIs have pregnancy data) |
| Topical hair / skin | most safe; provider review for systemic agents (e.g., finasteride) |

### (b) Notification urgency: page CoR within 1 business hour — CONFIRMED

β-HCG positive vs patient self-report "not pregnant" → standard `1G.7.6 queue.item.created` with `priority = urgent_clinical` (new priority enum value); page patient's CoR per `1G.9` within 1 business hour. If no CoR, page on-call.

### (c) Patient communication: NO system-authored disclosure — CONFIRMED

Portal shows generic message: "Your provider needs to review your recent lab results with you. Please expect a call from your care team within 24 hours. If urgent, you can message your care team directly." Provider initiates call. No system message that discloses pregnancy status.

### (d) Provider action options — CONFIRMED

5 typed actions in workspace assertion-list panel:
- Acknowledge lab + plan to call
- Confirm pregnancy after patient call (auto-discontinues GLP-1; opens OB referral)
- Reject lab as false positive (orders repeat β-HCG)
- Patient denies, refuses repeat testing (provider judgment to discontinue Rx)
- Order quantitative serial β-HCG and/or pelvic US

Each action via `recordClinicalAssertion` with `provider_assessment.assertion_action` set + `notes_clinical_visit_id`.

### (e) Documentation requirements — CONFIRMED

- `clinical_visits` row with phone call documentation
- `patient_clinical_assertions` supersession chain
- `treatment_items` state transition with reason `paused_clinical_pregnancy_status_active`
- `audit_events` row carrying full ID set
- `patient_action_items` row of type `external_referral` if OB referral made

## D5. Drop Hims-style mental_health_unspecified intake pattern — CONFIRMED

Mental health asked as typed list directly (per D2). `condition.mental_health_unspecified` exists only as concept-level fallback for genuine "other (specify)" entries.

## D6. Add ARFID + OSFED — CONFIRMED

`condition.arfid`, `condition.osfed` added to D2 typed list.

## D7. Substance use granularity unchanged — CONFIRMED with renames

Drop `_use_recent` suffixes. Recency captured in `metadata.recency_window` or `onset_at`.

```
social_history.tobacco_use
social_history.alcohol_binge_pattern
social_history.cocaine_use
social_history.opioid_use
social_history.methamphetamine_use
social_history.cannabis_use
social_history.kratom_use
```

## Comprehensive renames (cleanup of prior registry analysis)

All renames per the naming rule. These supersede the names in `2026-04-27_glp1_concept_registry_analysis.md`:

| Prior name | New name |
|---|---|
| `condition.pancreatitis_history` | `condition.pancreatitis` |
| `condition.cancer_history` | `condition.cancer` |
| `condition.pancreatic_cancer_history` | `condition.pancreatic_cancer` |
| `condition.thyroid_nodule_history` | `condition.thyroid_nodule` |
| `condition.gallbladder_disease_history` | `condition.gallbladder_disease_unspecified` |
| `condition.recent_pregnancy_loss` | `condition.pregnancy_loss` |
| `condition.tachycardia_unconfirmed` | `condition.tachycardia` |
| `condition.hypertension_unconfirmed_patient_reported` | `condition.hypertension` |
| `condition.hyponatremia_history` | `condition.hyponatremia` |
| `condition.pregnancy_status_active` | `condition.pregnancy` |
| `condition.lactation_active` | `condition.lactation` |
| `intent.conception_planning_active` | `intent.conception_planning` |
| `symptom.suicidal_ideation_active` | `symptom.suicidal_ideation` |
| `symptom.binge_eating_pattern_recent` | `symptom.binge_eating_pattern` |
| `symptom.heartburn_event` | `symptom.heartburn` |
| `medication.glp1_class_active` + `medication.glp1_class_history` | `medication.glp1_class` |
| `medication.insulin_active` | `medication.insulin` |
| `medication.sulfonylurea_active` | `medication.sulfonylurea` |
| `medication.thyroid_replacement_active` | `medication.thyroid_replacement` |
| `medication.warfarin_active` | `medication.warfarin` |
| `medication.oral_contraceptive_active` | `medication.oral_contraceptive` |
| `medication.nicotine_replacement_active` | `medication.nicotine_replacement` |
| `social_history.tobacco_active` | `social_history.tobacco_use` |
| `social_history.cocaine_use_recent` | `social_history.cocaine_use` |
| `social_history.opioid_use_recent` | `social_history.opioid_use` |
| `social_history.methamphetamine_use_recent` | `social_history.methamphetamine_use` |
| `social_history.cannabis_use_recent` | `social_history.cannabis_use` |
| `social_history.kratom_use_recent` | `social_history.kratom_use` |
| `condition.eating_disorder_anorexia_nervosa` | `condition.anorexia_nervosa` |
| `condition.eating_disorder_bulimia_nervosa` | `condition.bulimia_nervosa` |
| `condition.eating_disorder_binge_eating_disorder` | `condition.binge_eating_disorder` |

---

# Part 4 — G7 governance (mechanical)

## G7-1. INDEX.md generator

CI job `npm run docs:concept-index` triggered post-merge to `main`. Builds `repo/clinical-concepts/INDEX.md` listing every concept with `concept_id`, `concept_type`, `display_name`, `tier`, `default_authority_floor`, `reconciliation_policy`, `retired?`, and **which pathways reference it** (computed by scanning question-bank `concept_mapping` references). Marked `linguist-generated` in `.gitattributes`.

## G7-2. CODEOWNERS file

`.github/CODEOWNERS` at repo root with founder MD as solo clinical CODEOWNER for v1:
- `repo/clinical-concepts/**` → @ncrawf
- `repo/intake/question-bank/**` → @ncrawf (clinical CODEOWNER for `concept_mapping` references; engineering reviewer added when first hire lands)
- `.cursor/plans/system_map_three_layers_60706286.plan.md` → @ncrawf
- `.cursor/plans/audits/**` → @ncrawf

Engineering co-reviewer added when first hire lands.

## G7-3. DB-shadow CI sync job (already declared in 1K.5.A)

`npm run sync:concept-registry`; post-merge GitHub Action; idempotent UPSERT keyed on `concept_id`. Already covered in 1K.5.A registry section. Confirmed.

## G7-4. Question-bank ↔ concept-bank CI integrity check

`npm run lint:question-bank` as part of the existing `npm run lint` gate. Validates every `concept_mapping.concept_id` exists as an active (non-retired) concept in `repo/clinical-concepts/` at the question's pinned `mapping_version`. Blocks merge on failure. Catches retirement gaps at PR time, not deploy time.

## G7-5. Concept_version evolution rule (formalization)

Already implicit via `concept_version` field. Explicit policy:
- Patch bump (1.0.0 → 1.0.1): display_name change, alias additions, description tightening
- Minor bump (1.0.0 → 1.1.0): new optional fields, `default_authority_floor` LOOSENING, `reconciliation_policy` LOOSENING
- Major bump (1.0.0 → 2.0.0): `default_authority_floor` TIGHTENING, `reconciliation_policy` TIGHTENING, retiring with replaced_by
- Major bumps require explicit migration plan in PR (which assertions affected? recomputation needed? pending mutations re-evaluated?)

---

# Part 5 — Patches to apply (8 in this checkpoint)

| # | Target | Change |
|---|---|---|
| F1 | 1K.5.A after registry section | Concept naming rule (binding) paragraph + exceptions list |
| F2 | 1K.5.A after two-stage trigger pipeline | Multi-question assertion-builder + completion_status (4 values) + partial-data semantics + safety preflight fail-closed + analytics SQL discipline |
| F3 | 1K.4 line 3001 | Extend concept_mapping with assertion_group_id, contributes_to, contribution_template |
| F4 | 1K.3 line 2984 | Module declaration adds assertion_group_emit_trigger when module contains a group |
| G7-1 + G7-4 | 1K.5.A registry DB-shadow paragraph | INDEX.md generator + CI integrity check (lint:question-bank) |
| G7-5 | 1K.5.A after concept retirement migration | Concept_version evolution rule (semver discipline) |
| D4 | 1K.5.A reconciliation policies section | Pregnancy reconciliation worked example (per-pathway floor + urgent_clinical priority + 5 provider actions + documentation) |
| CODEOWNERS | new file at `.github/CODEOWNERS` | Solo clinical CODEOWNER for v1 |

Estimated +120 lines net to system map; 1 new CODEOWNERS file (~25 lines); 1 audit file (this).

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-27. All decisions are clinically ratified. Patches apply in single checkpoint. After landing: `repo/clinical-concepts/` file authoring begins with all naming, assertion-building, partial-data, and clinical decisions locked.
