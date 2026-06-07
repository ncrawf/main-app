# GLP-1 Starter Concept Registry — Extraction + Cross-Funnel Analysis

**Date:** 2026-04-27
**Source material:** `.cursor/plans/ingestion/competitor_product_evidence/hims/hims_weight_loss_new_patient.md` (Hims new-patient GLP-1 intake, Steps 1-78)
**Scope:** concept registry work only — no question writing yet
**Verdict:** ~95 concepts needed for v1 GLP-1 + ~50 SHARED CORE for cross-funnel reuse; system map's "~50 starter concepts" estimate was aspirational and needs revision

---

## A. Extracted concepts from Hims GLP-1 intake (Steps 22-66)

Direct extraction from the clinical screening portion of the new-patient flow.

### Conditions (Steps 35-43, 47)

| Hims question step | Concepts extracted |
|---|---|
| Step 35-36 (GI conditions) | `condition.ibs`, `condition.celiac`, `condition.constipation_chronic`, `condition.gerd`, `condition.diverticulitis`, `condition.crohns_disease`, `condition.ulcerative_colitis`, `symptom.fatigue` |
| Step 38 (kidney) | `condition.kidney_disease_chronic`, `condition.kidney_stones` |
| Step 40-43 (cardio/metabolic/other) | `condition.hypertension`, `condition.hypotension`, `condition.diabetes_type_1`, `condition.prediabetes`, `condition.seizure_disorder`, `condition.stroke_or_tia`, `condition.heart_arrhythmia`, `condition.myocardial_infarction`, `condition.coronary_artery_disease`, `condition.hyperlipidemia`, `condition.angina`, `condition.congestive_heart_failure`, `condition.liver_disease`, `condition.cancer_history`, `condition.glaucoma`, `condition.cystic_fibrosis`, `condition.hyponatremia`, `condition.phenylketonuria`, `condition.obstructive_sleep_apnea` |
| Step 47 (GLP-1 specific) | `condition.medullary_thyroid_cancer`, `condition.multiple_endocrine_neoplasia_type_2`, `condition.pancreatitis_history`, `condition.gastroparesis`, `condition.diabetes_type_2`, `condition.long_qt_syndrome` |
| Step 33-34 (mental health) | `condition.mental_health_diagnosis_unspecified`, `symptom.suicidal_ideation_active`, `symptom.homicidal_ideation_active` |
| Step 32 (eating disorder symptoms) | `symptom.self_induced_vomiting_for_weight_loss`, `symptom.binge_eating_pattern`, `symptom.restrictive_eating_pattern_for_weight` |

### Family history (Steps 47, 49)

`family_history.medullary_thyroid_cancer`, `family_history.multiple_endocrine_neoplasia_type_2`, `family_history.sudden_death_under_40`

### Surgery (Steps 52-55)

`surgery.bariatric_gastric_bypass_roux_en_y`, `surgery.bariatric_duodenal_switch`, `surgery.bariatric_lap_band`, `surgery.bariatric_gastric_sleeve`, `surgery.bariatric_intestinal_unspecified`. Free text via Step 55 captures into `surgery.other_unspecified` with `metadata.text_description`.

### Medications (Steps 56-57)

`medication.glp1_class_active`, `medication.glp1_class_history`. Step 57 free entry produces `medication.*` per individual drug.

### Allergies (Steps 58-61)

Free-search; each allergen is its own concept (`allergy.penicillin`, `allergy.sulfa`, etc.). Top 15 pre-seeded; tail captured via `allergy.other_unspecified` with text_description until ops curates.

### Social history (Steps 62-64)

`social_history.alcohol_binge_pattern` (frequency ordinal in metadata), `social_history.cocaine_use_recent`, `social_history.kratom_use_recent`, `social_history.opioid_use_recent`, `social_history.methamphetamine_use_recent`, `social_history.cannabis_use_recent`, `medication.nicotine_replacement_active`, implicit `social_history.tobacco_active`.

### Vitals (Steps 65-66) — see Section D

Step 65 (HR band) → `field_name = vital.hr.resting_band` in `patient_state_observations`; conditional concept `condition.tachycardia_unconfirmed` only when ≥100 bpm.
Step 66 (BP elevated history) → `field_name = vital.bp.elevated_recent_history` in `patient_state_observations`; conditional concept `condition.hypertension_unconfirmed_patient_reported`.

**Total extracted from Hims: ~52 distinct concepts** (35 conditions/symptoms + 3 family history + 5 surgeries + 2 medication classes + 7 social history + 2 vital-derived).

### Things in the Hims intake that are NOT concepts

- BMI — derived value (`vital.bmi`); eligibility flag is per `1K.9` derived score
- Weight goal, "why lose weight," motivation/preference questions
- "Specific medication in mind" — preference
- "Anything else your provider should know" (free text) — narrative; intake_response only
- Demographics — `patients.*` columns
- Identity verification — Stage 2 routing per Section 1J / 1O

---

## B. Additional GLP-1 concepts NOT in the Hims intake (recommended)

### Pregnancy / lactation / family planning (CRITICAL — Hims doesn't ask)

`condition.pregnancy_status_active` (assertion_type: present | absent | suspected | unknown), `condition.lactation_active`, `condition.recent_pregnancy_loss`, `intent.conception_planning_active` (new concept_type — see G2).

### Concurrent medications with GLP-1 hypoglycemia / interaction risk

`medication.insulin_active`, `medication.sulfonylurea_active`, `medication.thyroid_replacement_active`, `medication.warfarin_active`, `medication.oral_contraceptive_active`.

### GLP-1 side-effect concepts (for Mode F check-in writes)

`symptom.nausea`, `symptom.vomiting`, `symptom.diarrhea`, `symptom.constipation`, `symptom.abdominal_pain`, `symptom.headache`, `symptom.fatigue` (already in extraction), `symptom.injection_site_reaction`, `symptom.dizziness`, `symptom.heartburn_event`.

### GLP-1-relevant conditions Hims missed

`condition.diabetic_retinopathy`, `condition.gallstone_disease`, `condition.gallbladder_disease_history`, `condition.pancreatic_cancer_history`, `condition.eating_disorder_anorexia_nervosa`, `condition.eating_disorder_bulimia_nervosa`, `condition.eating_disorder_binge_eating_disorder`, `condition.depression`, `condition.anxiety_generalized`, `condition.bipolar_disorder`, `condition.alcohol_use_disorder`, `condition.thyroid_nodule_history`.

### Lab concepts (for lab-derived emitter per Section 1L.20)

`lab.a1c`, `lab.fasting_glucose`, `lab.lipid_panel`, `lab.tsh`, `lab.amylase`, `lab.lipase`, `lab.creatinine`, `lab.egfr`, `lab.alt`, `lab.ast`, `lab.alkphos`, `lab.beta_hcg`.

**Total recommended additional: ~30 concepts.**

**Combined v1 GLP-1 registry: ~95 concepts** (52 extracted + ~43 added/recommended). The system map's "~50 starter concepts" was aspirational; reality is closer to ~95 for GLP-1 alone, ~150-200 for first 4-5 pathways combined with ~50 SHARED CORE.

---

## C. Surgery concept modeling recommendation

Two-tier hierarchy. Even though `parent_concept_id` was deferred, surgery can model the relationship in `metadata.parent_concept_id` for v1 (informational; not enforced).

### Tier 1: broad parent concepts

`surgery.abdominal_history`, `surgery.bariatric_history`, `surgery.thyroid_history`, `surgery.gi_history`.

### Tier 2: specific child concepts

`surgery.bariatric_gastric_bypass_roux_en_y`, `surgery.bariatric_duodenal_switch`, `surgery.bariatric_lap_band`, `surgery.bariatric_gastric_sleeve`, `surgery.bariatric_intestinal_unspecified`, `surgery.gallbladder_removal`, `surgery.appendectomy`, `surgery.bowel_resection`, `surgery.pancreatic_resection`, `surgery.thyroidectomy_total`, `surgery.thyroidectomy_partial`, `surgery.gastric_resection_other`.

### Modeling rules

1. Asserting a child does NOT auto-emit the parent in v1; provider workspace UI groups children under parents; analytics queries OR over child concept_ids.
2. Free-text "shoulder surgery" entries become `surgery.other_unspecified` with `metadata.text_description`. Ops curates after 2nd same-allergen pattern.
3. Date of surgery → `assertion.onset_at`; fuzzy `metadata.surgery_year` allowed.
4. Reason for surgery → `metadata.reason`.

---

## D. Vitals / BP / heart rate modeling recommendation

**Hard rule: vitals are MEASUREMENTS first, ASSERTIONS second.**

| Datum | Primary storage | Conditional assertion |
|---|---|---|
| Resting heart rate (numeric or band) | `patient_state_observations.field_name = vital.hr.resting_bpm` (or `vital.hr.resting_band`) | If sustained ≥100 → `condition.tachycardia_unconfirmed_lab_derived` |
| Systolic / diastolic BP | `patient_state_observations.field_name = vital.bp.systolic_mmhg` / `vital.bp.diastolic_mmhg` | If 2+ readings ≥130/80 in last 12mo → `condition.hypertension_unconfirmed_patient_reported` |
| BP elevated history (Hims yes/no) | `patient_state_observations.field_name = vital.bp.elevated_recent_history` | Same → `condition.hypertension_unconfirmed_patient_reported` |
| BMI | `patient_state_observations.field_name = vital.bmi` | NO concept assertion (eligibility derivation per `1K.9`) |
| Weight | `patient_state_observations.field_name = vital.weight_lbs` (or kg) | NO concept; trend-based |

**Bridge:** when assertion emitted from observation interpretation, `assertion.evidence_refs` includes the observation pointer AND `assertion.field_name = vital.*` per the `1K.5.A` field_name ⊕ concept_id complementary-vocabulary rule.

**Don't pollute the concept registry with `vital.bp.systolic` as a clinical concept.** Concepts are claims; measurements are values.

---

## E. Starter GLP-1 concept registry — compact table

(Full attribute set lives in `repo/clinical-concepts/<domain>.ts`. Tier: CT = contraindication absolute, CN = caution, MN = monitoring, BG = background, FH = family history, SS = symptom, RX = medication, SU = surgery, AL = allergy, LB = lab, SH = social history, IN = intent. Reconciliation: AD = auto_dedupe, CD = context_distinct, RR = requires_provider_review_on_conflict. Floor: PR = patient_reported OK, PV = provider_confirmed required. Shared: SC = used by ≥3 funnels.)

### GLP-1 absolute / caution conditions

| concept_id | tier | reconciliation | floor |
|---|---|---|---|
| `condition.medullary_thyroid_cancer` | CT | RR | PV |
| `condition.multiple_endocrine_neoplasia_type_2` | CT | RR | PV |
| `condition.pancreatitis_history` | CT | RR | PV |
| `condition.gastroparesis` | CN | RR | PV |
| `condition.diabetic_retinopathy` | CN | RR | PV |
| `condition.gallstone_disease` | MN | AD | PR |
| `condition.long_qt_syndrome` | CN | RR | PV |
| `condition.pancreatic_cancer_history` | CT | RR | PV |
| `condition.thyroid_nodule_history` | MN | AD | PR |

### Family history (GLP-1)

| concept_id | tier | reconciliation | floor |
|---|---|---|---|
| `family_history.medullary_thyroid_cancer` | CT | RR | PV |
| `family_history.multiple_endocrine_neoplasia_type_2` | CT | RR | PV |
| `family_history.sudden_death_under_40` | CN | RR | PV (SHARED CORE) |

### Cardiovascular (mostly SHARED CORE)

`condition.hypertension`, `condition.hypotension`, `condition.coronary_artery_disease`, `condition.myocardial_infarction`, `condition.heart_arrhythmia`, `condition.angina`, `condition.congestive_heart_failure`, `condition.stroke_or_tia`, `condition.hyperlipidemia`, `condition.hypertension_unconfirmed_patient_reported`, `condition.tachycardia_unconfirmed`.

### Metabolic / diabetes (SHARED CORE)

`condition.diabetes_type_1`, `condition.diabetes_type_2`, `condition.prediabetes`, `condition.obstructive_sleep_apnea`.

### Renal / hepatic (SHARED CORE)

`condition.kidney_disease_chronic`, `condition.kidney_stones`, `condition.liver_disease`.

### GI (mix of SHARED CORE + GLP-1 specific)

`condition.gerd`, `condition.ibs`, `condition.celiac`, `condition.crohns_disease`, `condition.ulcerative_colitis`, `condition.constipation_chronic`, `condition.diverticulitis`.

### Mental health / behavioral (SHARED CORE; eating disorders GLP-1-relevant)

`condition.depression`, `condition.anxiety_generalized`, `condition.bipolar_disorder`, `condition.eating_disorder_anorexia_nervosa`, `condition.eating_disorder_bulimia_nervosa`, `condition.eating_disorder_binge_eating_disorder`, `condition.alcohol_use_disorder`, `symptom.suicidal_ideation_active`, `symptom.binge_eating_pattern_recent`, `symptom.self_induced_vomiting_for_weight`.

### Other Hims-listed conditions

`condition.seizure_disorder`, `condition.cancer_history`, `condition.hyponatremia_history`, `condition.phenylketonuria`, `condition.glaucoma`, `condition.cystic_fibrosis`, `condition.gout`.

### Pregnancy / lactation / family planning (CRITICAL)

`condition.pregnancy_status_active`, `condition.lactation_active`, `condition.recent_pregnancy_loss`, `intent.conception_planning_active`.

### Surgery (per Section C)

Listed above — 4 parents + 9 specific children.

### Medications (current/history)

`medication.glp1_class_active`, `medication.glp1_class_history`, `medication.semaglutide`, `medication.tirzepatide`, `medication.liraglutide`, `medication.insulin_active`, `medication.sulfonylurea_active`, `medication.thyroid_replacement_active`, `medication.warfarin_active`, `medication.oral_contraceptive_active`, `medication.nicotine_replacement_active`.

### Symptoms (Mode F check-ins)

`symptom.nausea`, `symptom.vomiting`, `symptom.diarrhea`, `symptom.constipation`, `symptom.abdominal_pain`, `symptom.headache`, `symptom.fatigue`, `symptom.injection_site_reaction`, `symptom.dizziness`, `symptom.heartburn_event`.

### Social history

`social_history.alcohol_binge_pattern`, `social_history.tobacco_active`, `social_history.cocaine_use_recent`, `social_history.opioid_use_recent`, `social_history.methamphetamine_use_recent`, `social_history.cannabis_use_recent`, `social_history.kratom_use_recent`.

### Allergies (top common pre-seeded; tail via `allergy.other_unspecified`)

`allergy.penicillin`, `allergy.sulfa`, `allergy.nsaid`, `allergy.latex`, `allergy.semaglutide`, `allergy.tirzepatide`, `allergy.peanut`, `allergy.shellfish`, `allergy.tree_nut`, `allergy.egg`, `allergy.soy`, `allergy.gluten`, `allergy.dairy`, `allergy.iodine_contrast`, `allergy.bee_sting`, `allergy.other_unspecified`.

### Lab concepts (lab-derived emitter)

`lab.a1c`, `lab.fasting_glucose`, `lab.lipid_panel`, `lab.tsh`, `lab.creatinine`, `lab.egfr`, `lab.alt`, `lab.ast`, `lab.amylase`, `lab.lipase`, `lab.beta_hcg`.

**Total starter registry: ~95 concepts. Of which ~50 are SHARED CORE (used by ≥3 future funnels). Pure GLP-1-specific: ~30. Lab cross-funnel: ~15.**

---

## F. Concepts to defer

- **TRT-specific** (defer to TRT pathway): `condition.testosterone_deficiency`, `medication.testosterone_*`, `condition.benign_prostatic_hyperplasia`, `condition.prostate_cancer`, `lab.testosterone_total`, `lab.psa`, `lab.estradiol`, `lab.shbg`, `lab.hematocrit`
- **ED-specific** (defer to ED pathway): `condition.erectile_dysfunction`, `score.iief5`, `medication.sildenafil` family, `condition.peyronie_disease`, `condition.priapism_history`
- **HRT/female hormones** (defer): `condition.menopause_status`, `condition.perimenopause`, `score.menopause_rating`, `medication.estrogen_active`, `medication.progesterone_active`, `condition.endometrial_cancer_history`, `condition.breast_cancer_history`, `condition.dvt_history`
- **Anxiety / mental health depth** (defer): `score.phq9`, `score.gad7`, `medication.ssri_active`, `condition.panic_disorder`, `condition.ptsd`, `condition.ocd`
- **Tail allergens** — top 15 pre-seeded; free-text canonicalization on 2nd hit
- **Specific cancer types** — `condition.cancer_history` parent for v1; split when HRT lands
- **Non-pharmacologic surgery details** — `surgery.other_unspecified` + ops curation
- **Lab subtypes** (LDL/HDL/triglycerides individually) — `lab.lipid_panel` covers v1
- **Vitals concept hierarchy** — keep as `field_name` per Section D rule

---

## G. Blockers / cross-funnel considerations / ambiguities

### G1. Concept count reality vs the "~50" estimate (PATCH NEEDED)

The system map's "~50 starter concepts" is aspirational. Realistic v1: **~95 for GLP-1 alone; ~150-200 for first 4-5 pathways combined; ~50 SHARED CORE that every Rx pathway reuses.** Revise the language in `1K.5.A` to reflect realistic estimate.

### G2. New concept_type: `intent.*` (PATCH NEEDED)

Family-planning intent (`intent.conception_planning_active`) doesn't fit existing 10 concept_types. It's a stated patient intent that affects clinical decisions. Add `intent.${string}` to the `ConceptId` union in `1K.5.A`.

### G3. Free-text allergy capture pattern (no patch needed; use `allergy.other_unspecified`)

Patient enters allergy not in pre-seeded ~15 → assertion lands on `allergy.other_unspecified` with `metadata.text_description`. Ops curates promotion to typed concept after 2nd hit.

### G4. Cross-funnel reuse — shared concepts handle pathway-specific contexts via `context.pathway_code`

Each pathway's question bank entry maps to the SAME `concept_id` for shared concepts; `context.pathway_code` differentiates. Authority floor and reconciliation policy are GLOBAL on the concept (not per-pathway). Per-pathway leniency enforced at `1J.10` preflight, not the concept registry. Conservative defaults; loosen at preflight if needed.

### G5. Provider packet rendering and traditional categorization

Storage layer flattens to `concept_type` tags. Provider packet rendering (per `1K.12`) categorizes for clinical familiarity ("Active Problems," "PMH," "Surgical History," "Social History," etc.). Categorization is in render code, not registry.

### G6. Registry file structure recommendation

For ~95 concepts, organize `repo/clinical-concepts/` into ~10 files by domain: `cardiovascular.ts`, `endocrine.ts`, `gastrointestinal.ts`, `renal_hepatic.ts`, `mental_health.ts`, `obstetric.ts`, `medications.ts`, `surgeries.ts`, `allergies.ts`, `symptoms.ts`, `labs.ts`. Each file exports an array; CI loader concatenates.

### G7. Downstream record keeping and handling — needs explicit governance

Five things change as the registry grows across 8-10 funnels. **Each needs an explicit decision before file seeding begins:**

- **(i) Concept registry size and discovery.** At 200+ concepts, dev tooling needs help. Recommend a generated `repo/clinical-concepts/INDEX.md` (CI-built) listing all concepts with their tier, default_authority_floor, and which pathways reference them. Prevents accidental duplicate creation.
- **(ii) Cross-funnel concept ownership.** A concept used by 5 pathways belongs to no single pathway. CODEOWNERS file declares clinical-leadership as owner of `repo/clinical-concepts/`.
- **(iii) Registry DB-shadow update cadence.** With ~200 concepts and frequent PRs, the `clinical_concepts_registry_snapshot` table needs CI-driven UPSERT on every merge to `main`. No manual sync. `npm run sync:concept-registry` triggered by post-merge GitHub Actions; idempotent on `concept_id`.
- **(iv) Question-bank ↔ concept-bank coupling.** When a question's `concept_mapping` references a `concept_id`, CI must verify the concept exists at the question's `mapping_version`. Failed checks at PR time, not deploy time.
- **(v) Multi-pathway concept evolution.** When a concept's `default_authority_floor` tightens, all pathways using it inherit the change. `concept_version` bump captures the policy change; assertions written before the bump are still valid via their pinned `concept_version`. Replay still works.

### G8. Ambiguities for clinical CODEOWNER review (BEFORE seeding)

- **`condition.cancer_history` granularity.** Keep as parent for v1; split into typed children (breast, endometrial, etc.) when HRT pathway lands and needs the granularity.
- **`condition.mental_health_diagnosis_unspecified`.** Map Hims-style "yes mental health" to `unspecified` with `requires_provider_acknowledgment = true`; provider follow-up disambiguates via Mode E.
- **`condition.gallstone_disease` vs `condition.gallbladder_disease_history` vs `surgery.gallbladder_removal`.** Three related concepts. Clinical decision needed on whether they're distinct or overlapping.
- **`condition.pregnancy_status_active` reconciliation when patient says "no" but β-HCG positive.** Lab-derived assertion vs patient-reported assertion conflict on a `requires_provider_review_on_conflict` concept. Workflow (block GLP-1 prescribe immediately; surface to provider; require provider call) is a PATHWAY policy that needs documenting. Defer to first pregnancy-conflict ops playbook.

---

## Disposition

User approved Option B on 2026-04-27. Patches G1 (count language correction) and G2 (`intent.*` ConceptId addition) applied to `1K.5.A` in this checkpoint. G7 (governance: INDEX.md, CODEOWNERS, CI sync, integrity checks, evolution) and G8 (clinical concept-modeling decisions) planned for the next round before `repo/clinical-concepts/` file seeding begins.
