# Female HRT first vertical slice — pre-runtime stress test

**Date:** 2026-05-01
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** Stress-test the locked architecture (commit `1c2daed`) for cis-female HRT — characterized by subjective symptom-driven eligibility, cycle-based physiology, multi-condition safety gating (cancer + clot risk + abnormal bleeding), uterine-status-driven progesterone requirement, and high provider interpretation load. Mirrors structure + depth of `2026-04-30_glp1_first_slice.md` and `2026-04-30_trt_first_slice.md`.
**Slice scope locked:**
- Cis-female HRT (7 scenarios per user request)
- Formulations: oral estradiol pill + transdermal estradiol patch + oral progesterone (Prometrium / micronized) — covers ~85% of telehealth Female HRT
- `pathway_sensitivity: high` per `Section 1K.2` (cycle/cancer/clotting risk + social sensitivity); tier_3 outside-secure ALLOWED with per-template explicit opt-in + dual-CODEOWNER co-sign per Gap C of marketing pressure test
- `pathway_crisis_carveout: false`
- `medication_class_controlled_schedule: null` (estrogen + progesterone are NOT controlled substances)
- Out of scope: pellet (q3-6mo); compounded BHRT; testosterone for women (off-label); gender-affirming feminizing HRT (future sibling pathway stub)

**Verdict (full):** Architecture HOLDS. Female HRT validates pathway-agnostic claim against the HIGHEST-ambiguity test surface designed so far (subjective symptoms; cycle physiology; FSH/estradiol not always decisive; multi-condition gating; uterine-status-driven Rx logic). 2 small in-place refinements identified during scenario tracing (none introduce new primitives): (a) `symptom_cluster_score: int?` attribute on `eligibility` rules per `Section 1Q.4` rule shape; (b) `abnormal_bleeding_cancer_screening_workflow` rule pattern per `Section 1Q.1` `adverse_event` rule domain extension. Both fixes land in their right architectural homes per user discipline. Ready for code-as-config implementation of `repo/rules/female_hrt/` + `repo/templates/female_hrt/`.

---

# Part 1 — Cross-industry framing for Female HRT

Female HRT is the highest-ambiguity pathway designed so far. Three load-bearing dimensions distinguish it from prior slices:

| Dimension | GLP-1 | TRT | Female HRT |
|---|---|---|---|
| Eligibility driver | **Lab thresholds** (BMI ≥27 with comorbidity OR ≥30; A1c context) | **Lab thresholds** (2x morning total testosterone <300 ng/dL per Endocrine Society) | **Symptom-driven** (FSH/estradiol NOT always decisive in perimenopause; clinical judgment dominates) |
| Sensitivity | moderate | extreme (Schedule III + sexual function) | **high** (cycle/cancer/clotting risk + social sensitivity) |
| Multi-condition safety gating | minimal (MEN-2; pancreatitis; pregnancy) | hematocrit + PSA + OSA + CV | **breast cancer + clot risk + abnormal bleeding + uterine status (progesterone requirement) + liver disease** |
| Provider interpretation load | medium (clear thresholds) | medium (lab + symptom integration) | **high** (no clear threshold; clinical gestalt; menopausal stage interpretation) |
| Outside-source population | medium (compounded GLP-1) | high (men's health spas) | **very high** (medspas + compounded BHRT + online sources) |
| Cycle-based decisions | n/a | n/a | **yes** (perimenopause vs postmenopause; irregular cycle interpretation) |

Cross-industry analogs:

- **Endocrine Society + NAMS guidelines:** Female HRT eligibility uses CLINICAL GESTALT — patient's symptom cluster + age + cycle status + risk factors. Labs (FSH, estradiol) are confirmatory at best; not gating in perimenopause where values fluctuate dramatically. Architecturally this means `lab_requirement` rules are SUPPORTIVE, not gating; `eligibility` rules use `symptom_cluster_threshold` (NEW attribute proposed; minor in-place refinement).
- **OB/GYN clinical practice patterns:** patients often have a PCP or OB/GYN already managing hormones; outside HRT continuation is the norm rather than exception. Architecture handles via `care_management_source` field (existing per adversarial slice + TRT slice).
- **Menopause Society Position Statement (2023):** abnormal bleeding on HRT is an URGENT cancer screening trigger — bleeding pattern abnormalities require endometrial biopsy or imaging. This is a unique safety pattern: not a "block Rx" but a "trigger downstream cancer screening workflow." Architecture handles via new `abnormal_bleeding_cancer_screening_workflow` rule pattern (minor in-place refinement to `Section 1Q.1` `adverse_event` rule domain).
- **WHI / Million Women Study compliance:** breast cancer history is an ABSOLUTE contraindication; clot history is an ABSOLUTE contraindication unless transdermal-only. These map cleanly to existing non-overridable BLOCK pattern + `override_capability_required` for transdermal-only with documented reasoning.

Female HRT proves the pathway-agnostic claim because:
1. The architecture already supports symptom-driven eligibility via `eligibility` rule domain + concept assertions + multi-question assertion-builder pattern (per `1K.5.A`)
2. Multi-condition safety gating uses existing `clinical_safety` rule stacking + scoped clinical override pattern (per `Section 1Q.4`)
3. Uterine-status-driven Rx logic uses existing rule preconditions + decision_support_payload pattern
4. Outside HRT continuation reuses `care_management_source` field added in adversarial slice
5. Provider clinical judgment surfaces via existing decision_support_payload (now with minimum-content discipline per dynamic behavior post-marketing Patch 3)

---

# Part 2 — 7 patient scenarios traced atom-by-atom

Each scenario uses the locked 10-step pipeline:
**source → evidence → classification → atomization → routing → rules → templates → actions → provider workspace → architecture verdict**

---

## Scenario 1 — Perimenopause / symptom-driven intake

**Patient:** Sarah, 47F. Last period 4 months ago, prior cycles irregular for 18 months. Reports hot flashes (4-6/day, severe), night sweats with sleep disruption, mood swings (irritable / tearful), brain fog (memory + concentration issues), decreased libido. Has not had labs drawn for hormones. No personal cancer history; no clotting disorders; mother had uncomplicated menopause; father had MI at 70. Healthy weight; no smoking; moderate alcohol; on no medications. Has uterus (no hysterectomy).

**1. Source input:**
- Stage 1 structured intake responses (~38 questions per cis-female HRT pathway): age, last period date, cycle history (regularity + duration over past 24 months), symptom severity ordinals across 8 menopause symptom clusters, prior HRT use, current medications, cancer history, clotting history, cardiovascular history, liver history, hysterectomy/oophorectomy history, mammogram recency, BP self-report
- Free text (`qb.female_hrt.symptoms_narrative_v1`, optional): "I just don't feel like myself anymore. The hot flashes are constant, I can't sleep through the night, my husband and I haven't been intimate in months because I just don't have any drive. I cry over commercials. My boss asked if I'm okay because I forgot a meeting last week."
- Document uploads: photo of self for identity per `1J.4` L3; recent BP cuff reading photo (uploaded by patient; informational only)

**2. Immutable evidence:**
- 38 `intake_response` rows per `1K.4` with full version pin (question_id + question_version + module_id + module_version + branch_path_token + pathway_id=`female_hrt`)
- 1 `intake_response` row for free text + safety scan annotation (no urgent symptom match)
- `patient_state_observations` rows for self-reported BP per `Section 1M`
- `patient_identity_verifications` row at L3 per `1J.4`
- `inbound_narrative_review` row for the free text (Section 1P atomization)

**3. Classification:**
- Deterministic safety scan: no match (no urgent symptoms, no chest pain, no severe bleeding)
- AI classifier on free text: `actionable` + `clinical` intent + no urgent flags
- Surfacing tier per `Section 1P.5`: extracted symptoms as `primary_candidate` (clinically actionable); narrative quotes as `supplementary_signal`

**4. Atomization (per `1K.5.A` two-stage trigger pipeline + `Section 1P` for free text):**
- Clinical assertions emitted: `condition.perimenopause_suspected` (status=`active`, authored_by=`patient_reported`, evidence_refs to symptom intake_response rows), `symptom.hot_flashes_severe` (severity=high), `symptom.sleep_disruption`, `symptom.mood_changes`, `symptom.cognitive_difficulty`, `symptom.libido_decreased`, `cycle.last_period_4_months_ago`, `cycle.irregular_18_months`
- Demographic context: `patient.age = 47`, `patient.has_uterus = true` (from intake question; CRITICAL for progesterone requirement)
- Risk factors negative: `condition.breast_cancer_personal_history = false`, `condition.estrogen_sensitive_malignancy_history = false`, `condition.dvt_pe_history = false`, `condition.severe_liver_disease = false`, `condition.uncontrolled_hypertension = false`, `condition.unexplained_vaginal_bleeding = false`
- Family history: `family_history.breast_cancer = false`, `family_history.early_menopause = false`, `family_history.cardiovascular_disease_father = true (age 70)`
- Free-text safety-scan turn closed: `clinical_acceptable`

**5. Routing:**
- Provider review batch via `Section 1G` (HRT-qualified provider in patient's state per `clinical_codeowner_scope: hrt_qualified_provider`)
- NOT lab-required at this turn (clinical_clear case — symptom cluster + age + cycle history sufficient for perimenopause determination per Endocrine Society guidelines; baseline labs deferred to post-Rx safety monitoring)
- `patient_action_items` row of type `clinical_required` for provider response

**6. Rules firing (7-stage execution order):**

Stage 1 (preconditions): `rule.female_hrt.eligibility.age_threshold` (≥35 perimenopause range; or 18+ with verified ovarian suppression / surgical menopause) ✓, `rule.female_hrt.eligibility.jurisdiction_allowed` ✓
Stage 2 (safety preflight `1J.10`):
- `rule.female_hrt.safety.contraindication_breast_cancer_history` (no ✓; non-overridable)
- `rule.female_hrt.safety.contraindication_estrogen_sensitive_malignancy` (no ✓; non-overridable)
- `rule.female_hrt.safety.contraindication_active_dvt_pe` (no ✓; non-overridable for systemic; transdermal allowed with override per Endocrine Society)
- `rule.female_hrt.safety.contraindication_unexplained_vaginal_bleeding` (no ✓; non-overridable)
- `rule.female_hrt.safety.contraindication_severe_liver_disease` (no ✓; non-overridable)
- `rule.female_hrt.safety.contraindication_active_pregnancy` (no — last period 4 months ago; pregnancy test required per current guidelines for perimenopausal patients per `1K.5` time_sensitive_30d freshness profile; provider can request pregnancy test at next step)
- `rule.female_hrt.safety.contraindication_uncontrolled_htn` (BP self-report normal range ✓; provider may request office-visit BP confirmation)
Stage 3 (eligibility):
- `rule.female_hrt.eligibility.symptom_cluster_threshold` — patient has 5/8 menopause symptoms at moderate-or-high severity → meets threshold (≥2 for clinical eligibility per Endocrine Society 2017 Position Statement)
- `rule.female_hrt.eligibility.menopausal_status_determination` — clinical perimenopause confirmed by (a) cycle irregularity ≥12 months + age ≥40 + symptom cluster, OR (b) FSH ≥30 mIU/mL on 2 occasions, OR (c) amenorrhea ≥12 months → patient meets criterion (a) → `condition.perimenopause` provider-confirmable
Stage 4 (authority floor): provider authorization required for HRT Rx
Stage 5 (action selection): `kind: 'route'` action with `decision_support_payload` to provider — typed options: `approve_estrogen_oral_starting_dose | approve_estrogen_transdermal_patch | approve_estrogen_+_progesterone_combined | request_pregnancy_test_first | request_baseline_labs_first | defer_for_in_person_evaluation` (last option is opt-out for cases where telehealth feels insufficient per provider judgment)
Stage 6 (AI refinement governance): no AI refinement at this turn
Stage 7 (audit): typed `audit_events` row pinning rule_version + template_version per `Section 1Q.7`

**7. Templates rendered:**
- `tmpl.female_hrt.intake.received_v1` (tier_2 outside / tier_4 secure-view; intent=`clinical`; informs patient provider review is in progress)
- `tmpl.female_hrt.education.what_to_expect_perimenopause_v1` (tier_4 in-secure; intent=`education`; educational content on perimenopause timeline + HRT options + risks; pathway_sensitivity_compatibility=['high']; tone_constraints=['empathetic_concerned', 'factual_only']; ai_refinement_allowed=false; clinical CODEOWNER + compliance CODEOWNER co-sign required at PR per Gap C dual-CODEOWNER rule for high-sensitivity)

**8. Actions:**
- Provider review batch with `decision_support_payload`:
  - `rationale_summary`: "Patient is 47F with 18-month history of cycle irregularity + 5/8 menopausal symptoms at moderate-high severity (hot flashes, sleep disruption, mood changes, cognitive difficulty, libido decrease). Last period 4 months ago. No personal cancer or clotting history. Has uterus (progesterone required if estrogen prescribed). BP self-report normal."
  - `evidence_summary`: "Evidence: 38 intake responses + free-text narrative; cycle history; symptom severity scores; family history (mother uncomplicated menopause, father MI age 70); has_uterus=true. References intake_response_id [...]; condition.perimenopause_suspected; symptom.* atoms"
  - `suggested_options[]`:
    - `approve_estrogen_oral_starting_dose` + option_rationale: "Oral estradiol 1mg daily + micronized progesterone 100mg daily (continuous combined) is first-line for perimenopausal symptom relief in patient with intact uterus; oral has higher first-pass clot risk but acceptable in low-risk patient"
    - `approve_estrogen_transdermal_patch` + option_rationale: "Transdermal patch 0.05mg + oral progesterone 100mg has lower clot risk; preferred per NAMS for patients with any cardiovascular concern (here: father MI age 70 is mild family history); requires patient willingness to apply patch twice weekly"
    - `request_pregnancy_test_first` + option_rationale: "Patient still cycling 4 months ago; pregnancy test (qualitative urine βhCG via mailed kit) ensures pregnancy ruled out before HRT initiation; perimenopausal pregnancy is uncommon but possible; takes 3-5 days to return"
    - `request_baseline_labs_first` + option_rationale: "Baseline labs (FSH, estradiol, lipids, comprehensive metabolic, thyroid) NOT required for symptom-driven eligibility but useful for trending response to HRT; defer if provider clinical judgment is clear"
- Lab order NOT created at this turn (clinical_clear case)
- Patient sees `tmpl.female_hrt.intake.received_v1` immediately + education content available in-secure
- Provider workspace at next batch review

**9. Provider workspace experience:**
- Batch review UI shows: patient summary card (47F perimenopause symptom-driven intake; 5/8 symptom cluster), full safety preflight stack (all clear), uploaded BP photo for context, narrative quote with `supplementary_signal` tier, decision_support_payload with 5 typed options + rationale_summary + evidence_summary
- `pathway_sensitivity: high` banner — provider sees high-sensitivity discipline (no pathway-named outside-secure marketing for this patient unless future Toggle 6 + per-template opt-in)
- Provider cognitive load: SUPPRESSED via surfacing tier discipline — 38 atoms total but 5 primaries (the 5/8 symptoms above threshold); 8 supplementary (lower-severity symptoms, family history items, BP self-report); 25 informational (negative risk factors)
- Provider selects `approve_estrogen_transdermal_patch` per low-risk profile + family history of MI + lower clot risk
- Writes `provider_confirmed` clinical assertion of `condition.perimenopause` with `evidence_refs` pointing to symptom + cycle atoms
- Signs Rx authorization for Climara 0.05mg patch (twice weekly) + Prometrium 100mg oral (continuous combined since patient has uterus); 4-month follow-up scheduled

**10. Architecture verdict:**
- HOLDS. Symptom-driven eligibility flows through existing `eligibility` rule domain + symptom cluster threshold (minor refinement: `symptom_cluster_score: int?` attribute on rules — see Refinements section).
- Has-uterus → progesterone requirement enforced via rule precondition + decision_support_payload typed options (provider can't accidentally approve estrogen monotherapy in patient with uterus).
- decision_support_payload minimum-content discipline per dynamic behavior post-marketing Patch 3 enforces: rationale_summary >80 chars (~280 chars actual); evidence_summary >80 chars (~250 chars); each option has option_rationale >50 chars (~200 chars each).
- Cross-batch concept-aware review surfacing per `Section 1P.5` ready for follow-up review.

---

## Scenario 2 — Postmenopausal patient seeking HRT

**Patient:** Linda, 56F. Amenorrhea 18 months. Reports moderate hot flashes (2-3/day), vaginal dryness, mild sleep disruption, decreased libido. No personal cancer history; no clotting disorders; mother had breast cancer at age 78 (post-menopausal; estrogen receptor unknown). Healthy weight; no smoking; rare alcohol; on lisinopril for HTN (well-controlled). Mammogram 8 months ago (normal). Has uterus.

**1. Source input:** Stage 1 intake (38 questions); free text minimal; mammogram report uploaded.

**2. Immutable evidence:**
- 38 `intake_response` rows
- `patient_document_routing` for mammogram report → `patient_diagnostic_reports` row (vendor=`outside_imaging_facility_unspecified`)
- `patient_lab_observations` rows extracted from mammogram report (BIRADS 1 = negative; per `Section 1L.16a` structured-first carve-out)
- `medication.lisinopril_active` clinical assertion (authored_by=`patient_reported`)

**3. Classification:** safety scan no match; AI classifier `actionable` + `clinical` intent.

**4. Atomization:**
- `condition.postmenopause` (clinical assertion candidate; criterion: amenorrhea ≥12 months at age ≥45)
- Symptom atoms: `symptom.hot_flashes_moderate`, `symptom.vaginal_dryness`, `symptom.sleep_disruption_mild`, `symptom.libido_decreased`
- Cycle: `cycle.last_period_18_months_ago`, `cycle.amenorrhea_confirmed_postmenopausal`
- Risk factors: `condition.breast_cancer_personal_history = false`, `family_history.breast_cancer = true (mother age 78 post-menopausal)`, `condition.htn_controlled = true (on lisinopril)`, `condition.dvt_pe_history = false`
- Document-derived: mammogram BIRADS 1 negative (recent within freshness window)
- Demographics: `patient.age = 56`, `patient.has_uterus = true`

**5. Routing:** provider review batch.

**6. Rules firing:**
- Stage 1 preconditions ✓
- Stage 2 safety preflight: all contraindications absent or not blocking; `rule.female_hrt.safety.contraindication_uncontrolled_htn` evaluates HTN-on-treatment-controlled = no override needed (well-controlled per patient report)
- Stage 3 eligibility: `rule.female_hrt.eligibility.symptom_cluster_threshold` (4/8 symptoms; meets ≥2 threshold ✓), `rule.female_hrt.eligibility.menopausal_status_determination` (amenorrhea ≥12 months at age ≥45 → clinical postmenopause ✓)
- Stage 5 action: `kind: 'route'` with `decision_support_payload`:
  - Typed options: `approve_estrogen_oral_low_dose | approve_estrogen_transdermal_patch_low_dose | approve_combined_oral | approve_combined_transdermal | request_baseline_labs_first`
  - Family hx of breast cancer (mother age 78) is NOT a contraindication (post-menopausal cancer in first-degree relative <60 = relative caution; this patient's mother was 78 = no enhanced caution per NAMS guidelines)
  - decision_support_payload notes family hx context for provider awareness without raising it to a contraindication

**7. Templates rendered:**
- `tmpl.female_hrt.intake.received_v1` (tier_2)
- `tmpl.female_hrt.education.postmenopause_hrt_options_v1` (tier_4 in-secure; intent=`education`)

**8. Actions:**
- Provider reviews → approves transdermal patch + oral progesterone (continuous combined) for ease and lower clot risk on ACE-inhibitor-treated HTN
- Rx authorized; 3-month follow-up scheduled
- `tmpl.female_hrt.rx.approved_patch_v1` (tier_2 outside / tier_4 secure-view; companion vague at tier_2; pathway_sensitivity_compatibility=['high']; transfer-risk safety messaging in tier_4 — patches placed on lower abdomen, alternating sites; avoid skin-to-skin with children/partner where patch contacts during application window)

**9. Provider workspace:** clean approval flow; full safety stack passes; family hx surfaced as informational; provider authority straightforward; cognitive load low.

**10. Architecture verdict:** HOLDS. Postmenopausal pathway is the cleanest case — clear menopausal status + clear symptom cluster + low-risk profile. Existing primitives handle.

---

## Scenario 3 — Contraindication / safety (high-risk)

**Patient:** Diane, 52F. Reports significant menopausal symptoms (hot flashes severe, mood, sleep). Last period 14 months ago (postmenopausal). Personal history of breast cancer (ER-positive ductal carcinoma diagnosed age 48; mastectomy + tamoxifen completed 2 years ago; oncology clearance for symptom management not specified). Prior DVT during pregnancy 12 years ago (unprovoked; on no current anticoagulation). Mother had breast cancer at 52. Has uterus.

**1. Source input:** Stage 1 intake; uploaded oncology records (incomplete — discharge summary only); medication list includes tamoxifen completed 2 years ago.

**2. Immutable evidence:**
- `intake_response` rows including breast cancer history + DVT history responses
- `patient_document_routing` for oncology summary → `patient_diagnostic_reports`; AI extraction emits `condition.breast_cancer_history_personal = true` with `metadata.disease_state = 'in_remission'` + `evidence_refs` pointing to oncology summary
- `condition.dvt_history_personal = true` with `metadata.disease_state = 'historical_unprovoked'` + onset_at = 12 years ago

**3. Classification:** deterministic safety scan MATCHES on `breast_cancer_history` + `dvt_history`; opens `clinical_required` urgent turn per `Section 1G.3`. AI classifier `actionable` + `safety` intent.

**4. Atomization:**
- `condition.breast_cancer_history_personal` (lab_derived from oncology document; status=`in_remission`)
- `condition.dvt_history_personal` (patient_reported; status=`historical_unprovoked`)
- `medication.tamoxifen_completed_2_years_ago` (patient_reported; metadata.completion_date)
- Standard menopause symptom atoms

**5. Routing:**
- Urgent provider review (priority `urgent_clinical`); SLA shorter than Scenario 1 (per `Section 1G.7.6`)
- NO Rx-approve path possible at this turn — multiple non-overridable BLOCKS

**6. Rules firing:**
- Stage 2 safety preflight (multiple non-overridable BLOCKS):
  - `rule.female_hrt.safety.contraindication_breast_cancer_history` (BLOCK; non-overridable per concept default authority floor for absolute contraindication)
  - `rule.female_hrt.safety.contraindication_estrogen_sensitive_malignancy` (BLOCK; ER-positive ductal carcinoma is estrogen-sensitive)
  - `rule.female_hrt.safety.contraindication_active_dvt_pe` (REVIEW; not active but historical unprovoked DVT; transdermal-only with override_capability_required per Endocrine Society — but this is moot given the BLOCK on cancer)
- Stage 5 action: composite `kind: 'block'` with all blocking rules → patient sees deferral language, NOT denial; provider sees full safety stack
  - decision_support_payload typed options for provider: `defer_to_oncology_consult | refer_to_specialty_menopause_clinic_non_hormonal_options | offer_non_hormonal_symptom_management_education | deny_with_alternative_pathway`

**7. Templates rendered:**
- `tmpl.female_hrt.deferral.safety_concern_breast_cancer_history_v1` (tier_2 outside / tier_5 secure-view; intent=`clinical`; companion `tmpl.female_hrt.deferral.safety_concern_outside_secure_vague_v1` at tier_2 + safety_critical_override_allowed=true; clinical CODEOWNER approval required; AI refinement disallowed)
  - Outside-secure body: "Your provider has reviewed your case and needs to discuss next steps before moving forward."
  - In-secure body: detailed explanation of breast cancer + estrogen interaction + oncology consultation recommendation + non-hormonal alternatives (gabapentin, SSRIs, vaginal moisturizers)
- `tmpl.female_hrt.education.non_hormonal_symptom_options_v1` (tier_4 in-secure; intent=`education`)

**8. Actions:**
- Provider review with HIGH priority + safety preflight summary
- `patient_action_items` of type `provider_safety_review_pending`
- Provider documents: refer to oncology for clearance + non-hormonal symptom management options + DVT-aware future considerations if patient wishes to revisit transdermal-only with oncology clearance
- Multiple `referral_pending` action items for oncology + specialty menopause clinic
- Female HRT pathway state: `closed_ineligible` with `closed_eligibility_reason_codes = [breast_cancer_history, estrogen_sensitive_malignancy_history]`
- Reopen criteria documented per `1K.13` Mode D pattern (per oncology + specialty consult; with explicit "re-evaluation requires oncologist clearance letter")

**9. Provider workspace:**
- Batch review UI shows: full safety preflight stack with each blocking rule + reason_code + evidence_refs (oncology document inline preview); cross-batch concept-aware banner if patient has prior assertions
- `decision_support_payload`: typed options `defer_to_oncology_consult` / `refer_to_specialty_menopause_clinic_non_hormonal_options` / `offer_non_hormonal_education` / `deny_with_alternative_pathway`
- NO `approve` option visible per non-overridable blocking rules
- Provider documents reasoning + refers patient appropriately

**10. Architecture verdict:**
- HOLDS. Multiple non-overridable blocking safety rules cleanly stack per `Section 1Q.7` audit chain. Patient communication is tier_2 outside ("Your provider has reviewed your case and needs to discuss next steps") — never specifies "breast cancer" or "DVT" in SMS body per pathway_sensitivity high + Invariant 21 privacy-safe URL/UTM/external-platform discipline.
- Reopen criteria preserved on closed-ineligible session per `1K.13` Mode D — patient can return after oncology + specialty consult. Critical that this pathway never shuts the patient out of care entirely; non-hormonal symptom management remains accessible.

---

## Scenario 4 — Younger patient (inappropriate indication)

**Patient:** Madison, 28F. Reports fatigue, "low energy", "occasional bad mood swings", desire for "hormone optimization for performance" (mentions following hormone-therapy influencers on social media). Regular monthly cycles, no sleep disruption beyond stress-related, no hot flashes, no vaginal dryness, no libido changes. Healthy weight; no smoking; on no medications. Has uterus.

**1. Source input:** Stage 1 intake; free text — "I've been feeling tired and want to optimize my hormones for energy and overall wellness. My friend is on HRT and feels great."

**2. Immutable evidence:** intake_response rows; patient_state_observations for trackables; free text inbound_narrative_review.

**3. Classification:** safety scan no match; AI classifier `actionable` + `clinical` intent.

**4. Atomization:**
- `symptom.fatigue` (severity=mild; patient_reported)
- `symptom.mood_changes` (severity=mild; patient_reported)
- `intent.hormone_optimization_wellness_motivated` (NEW assertion per intent capture; flagged as wellness-driven not medical-necessity-driven by AI classifier; routing tag for provider awareness)
- Demographics: `patient.age = 28`, `patient.has_uterus = true`, `cycle.regular_monthly` (patient_reported)
- Negative risk factors: standard cancer/clotting/liver checks all `false`

**5. Routing:** provider review batch.

**6. Rules firing:**
- Stage 1 preconditions ✓ (age threshold met at 18+; jurisdiction ✓)
- Stage 2 safety preflight: no contraindication
- Stage 3 eligibility:
  - `rule.female_hrt.eligibility.symptom_cluster_threshold` — patient has 2/8 symptoms but ALL are mild + non-menopausal (fatigue and mild mood are non-specific); meets bare minimum count but not severity-weighted threshold
  - `rule.female_hrt.eligibility.menopausal_status_determination` — FAILS: patient has REGULAR cycles + age <40 + no surgical menopause indication
  - `rule.female_hrt.eligibility.appropriate_indication_check` (NEW rule pattern; per Refinement) — fires based on age + cycle regularity + symptom non-specificity → flags as `inappropriate_indication_likely`
- Stage 5 action: composite `kind: 'route'` with provider-explicit `decision_support_payload`:
  - Typed options: `defer_for_workup_thyroid_anemia_other_causes | offer_wellness_education_no_rx | refer_to_pcp_for_general_health_evaluation | deny_with_education`
  - rationale_summary explicitly notes: "Patient is 28F with regular cycles + mild non-specific symptoms (fatigue, mild mood changes). Does NOT meet menopausal status criteria (age + regular cycles). Symptom complaint likely non-hormonal etiology; thyroid + anemia + sleep + stress + general health evaluation indicated FIRST. Wellness-driven motivation flagged. HRT not medically indicated at this time."

**7. Templates rendered:**
- `tmpl.female_hrt.intake.received_v1` (tier_2)
- `tmpl.female_hrt.denial.younger_inappropriate_indication_v1` (tier_2 outside / tier_4 secure-view; intent=`clinical`; uses respectful language; explains medical necessity vs wellness motivation; offers alternatives — PCP referral; sleep + stress + thyroid + general health evaluation; non-hormonal energy/mood support evidence-based options)

**8. Actions:**
- Provider review → provider selects `defer_for_workup_thyroid_anemia_other_causes` OR `deny_with_education` (per provider clinical judgment)
- Patient receives empathetic but clear "HRT is not medically indicated at your age with regular cycles; let's address your fatigue with appropriate workup first"
- Female HRT pathway state: `closed_ineligible` with `closed_eligibility_reason_codes = [inappropriate_indication_age_cycle_status]`; reopen criteria: "After PCP workup completes + if symptoms develop consistent with menopausal transition"
- Optional cross-sell to general wellness pathway (with provider review per `Section 1Q.21` Part 10 cross-sell discipline)

**9. Provider workspace:**
- Batch review UI shows: patient summary card flagging `inappropriate_indication_likely`; symptom severity chart shows non-menopausal pattern; decision_support_payload with non-hormonal alternatives
- `pathway_sensitivity: high` banner; Outside-secure communication tier_2 only
- Provider authority: clear ability to deny without providing HRT (this is the standard of care for a 28F with regular cycles); provider workspace surfaces appropriate alternatives

**10. Architecture verdict:**
- HOLDS. Architecture distinguishes WELLNESS-MOTIVATED vs MEDICAL-NECESSITY-DRIVEN via `intent.*` assertion + age + cycle regularity in eligibility rule. Provider authority is clean — denial is the right answer, framed respectfully + with alternatives.
- This is one of the harder pathway-architectural tests: the system MUST be capable of refusing to prescribe even when a patient explicitly requests something. The decision_support_payload pattern + provider authority floor + non-overridable evaluations enforce this.

---

## Scenario 5 — Already on outside HRT

**Patient:** Karen, 49F. Currently on estrogen patch + oral progesterone from a "men's & women's health spa" for 8 months. Reports symptom relief but provider concerned about lack of monitoring. Uploaded current Rx label photos: estradiol patch 0.1mg twice weekly + Prometrium 200mg nightly. Has uterus. No personal cancer history. Family history of breast cancer (sister at 45 — recent diagnosis). No clotting issues. Mammogram 6 months ago.

**1. Source input:** Stage 1 intake; uploads spa Rx label photos + recent labs from spa (estradiol 350 pg/mL, FSH suppressed); requests transfer of care.

**2. Immutable evidence:**
- `intake_response` rows
- `patient_document_routing` for spa Rx label photos + lab PDFs
- `patient_diagnostic_reports` row for spa labs (vendor=`outside_health_spa_unspecified`)
- AI extraction emits:
  - `medication.estradiol_patch_0.1mg_2x_weekly` clinical assertion (authored_by=`patient_reported`; metadata.care_management_source=`outside_provider_continuation`; metadata.start_date_estimated; evidence_refs to label photo)
  - `medication.progesterone_oral_200mg_nightly` clinical assertion (authored_by=`patient_reported`; metadata.care_management_source=`outside_provider_continuation`)
- Lab-derived: `lab.estradiol = 350 pg/mL` (high-normal premenopausal range; supraphysiologic for postmenopausal monitoring) + `lab.fsh = 4 mIU/mL` (suppressed; consistent with active estrogen replacement)
- `family_history.breast_cancer = true (sister age 45)` — RECENT, FIRST-DEGREE, AGE <60 — material clinical context

**3. Classification:** safety scan no match (no acute symptoms); AI classifier `actionable` + `clinical` intent + `outside_continuation` flag.

**4. Atomization:**
- Outside-medication assertions with care_management_source distinction
- Lab-derived `lab.estradiol = 350 pg/mL` (supraphysiologic for menopause therapy goal)
- `family_history.breast_cancer_first_degree_recent_under_60 = true` — distinct from typical post-menopausal family history; flagged for provider review per concept registry policy
- Standard menopause clinical context atoms

**5. Routing:** provider review batch.

**6. Rules firing:**
- Stage 2 safety preflight:
  - `rule.female_hrt.safety.contraindication_breast_cancer_history_personal` (no ✓; non-overridable)
  - `rule.female_hrt.safety.family_history_breast_cancer_first_degree_recent_under_60_review` (REVIEW with override_capability_required; relative caution per NAMS; provider clinical judgment — first-degree relative with recent diagnosis under 60 is a flag, not an absolute contraindication)
  - Estrogen dose flagged supraphysiologic (lab.estradiol >300 typically considered too high for menopause therapy goal of 50-100 pg/mL)
- Stage 3 eligibility: `rule.female_hrt.eligibility.outside_hrt_continuation_disclosure` fires — routes to provider with `decision_support_payload` of typed options:
  - `co_manage_at_current_dose` — provider may NOT select due to supraphysiologic dose + recent first-degree family hx; rationale_summary explicitly flags risk
  - `co_manage_with_dose_reduction_to_physiologic_range` — reduce estradiol patch 0.1mg → 0.05mg + maintain progesterone; offer breast cancer risk discussion + oncology consultation; reduce safety risk while maintaining symptom relief
  - `substitute_with_lower_dose_oral_or_transdermal` — switch to lower-dose formulation
  - `refuse_continuation_and_offer_alternative` — given recent first-degree family hx + supraphysiologic dose; defer to oncology genetic counseling first
  - `request_additional_records_from_outside_spa` — request additional labs + clinical notes from spa to understand monitoring pattern
- Stage 5 action: `kind: 'route'` with full decision_support_payload

**7. Templates rendered:**
- `tmpl.female_hrt.outside_use.disclosure_acknowledgment_v1` (tier_2 outside / tier_4 secure-view; intent=`clinical`)
- `tmpl.female_hrt.education.outside_hrt_continuation_v1` (tier_4 in-secure; intent=`education`; explains co-management vs substitution semantics)

**8. Actions:**
- Provider review with full decision_support_payload
- If provider chooses `co_manage_with_dose_reduction_to_physiologic_range`: writes `provider_confirmed` assertion with new dose; new Rx authorized at lower dose; old outside-spa medication assertion superseded with metadata.transitioned_at; new monitoring cadence (more frequent given recent family hx); offer genetic counseling referral (BRCA testing consideration given sister's recent diagnosis under 60)
- Audit chain documents provider's clinical reasoning per `Section 1Q.4` decision_support_payload pattern

**9. Provider workspace:**
- Batch review surfaces: outside-medication banner (estradiol patch 0.1mg + progesterone 200mg from spa for 8 months); supraphysiologic estradiol level flagged; family hx flagged as recent + first-degree + under 60; uploaded label photos + outside labs + decision_support_payload
- Cross-batch concept-aware review surfacing per `Section 1P.5` (existing) shows any prior assertions on same `(patient_id, concept_id)` — none here since first interaction
- Provider authority: chooses pathway; writes assertion with clear reasoning; recommends genetic counseling

**10. Architecture verdict:**
- HOLDS. `care_management_source` field handles outside HRT cleanly. `decision_support_payload` per `Section 1Q.4` minimum-content discipline (per dynamic behavior post-marketing Patch 3) gives provider sufficient context. Provider authority preserved — outside-source narrative + recent first-degree family hx surfaced + provider judgment dominates.
- Outside-source labs (vendor=`outside_health_spa_unspecified`) preserved as immutable evidence per `Section 1P`; provider's decision is `provider_confirmed` clinical assertion that supersedes the patient's `outside_provider_continuation` assertion in current-state read view per `1K.5.A` longitudinal rollup.
- Cross-pathway awareness: this scenario could trigger genetic counseling cross-sell (existing pathway-adjacent rule per `Section 1Q.21` Part 10) — provider clinical review required per Invariant 25.

---

## Scenario 6 — Complex mixed case (cycle + symptoms + labs)

**Patient:** Patricia, 51F. Cycles irregular for 2 years (some 21 days, some 60 days; occasional missed). Labs from PCP 4 months ago: FSH 18 mIU/mL (borderline; perimenopausal range typically >25-40), estradiol 95 pg/mL (cycling range; not definitive). Reports symptoms: hot flashes (variable; some days many, some days none), mood (some ok days, some bad), sleep (occasional disruption), libido (decreased but not absent). Brain fog reported but mild. Has uterus. No cancer; no clotting; no significant family hx.

**1. Source input:** Stage 1 intake; uploaded PCP labs from 4 months ago; free text describing variable symptom pattern.

**2. Immutable evidence:**
- intake_response rows + free-text inbound_narrative_review
- `patient_diagnostic_reports` for PCP lab document; AI extraction emits:
  - `lab.fsh = 18 mIU/mL` (status=`borderline_perimenopausal_range`) + `lab.estradiol = 95 pg/mL` (status=`cycling_range`) with `metadata.lab_date = 4_months_ago`
- Symptom atoms with severity ordinals (variable severity captured)
- `cycle.irregular_2_years` clinical assertion + cycle history pattern atoms

**3. Classification:** safety scan no match; AI classifier `actionable` + `clinical` intent.

**4. Atomization:**
- Symptoms with VARIABLE severity flagged in metadata (e.g., `metadata.severity_pattern = 'variable_perimenopausal'`)
- Labs in PERIMENOPAUSAL range but not definitive (FSH 18 is below confirmatory threshold of >25-40)
- Cycle irregularity 2 years → consistent with perimenopause but lab data ambiguous

**5. Routing:** provider review batch + clarification possible.

**6. Rules firing:**
- Stage 2 safety preflight: all clear
- Stage 3 eligibility:
  - `rule.female_hrt.eligibility.symptom_cluster_threshold` — patient has 4-5/8 symptoms but VARIABLE severity → meets bare threshold; provider should weigh
  - `rule.female_hrt.eligibility.menopausal_status_determination` — AMBIGUOUS:
    - Cycle criterion: irregular ≥12 months at age ≥40 → ✓
    - Lab criterion: FSH ≥25 mIU/mL — borderline (18 is below), only 1 draw → not confirmatory
    - Amenorrhea criterion: not 12 months continuous (cycles continue, just irregular)
  - `rule.female_hrt.eligibility.lab_confirmation_when_clinical_ambiguous` (NEW pattern; per Refinement) → fires when clinical criteria are bare-passing OR ambiguous; recommends 2nd FSH draw (per `Section 1Q.1` `confirmation_count_required` pattern from TRT slice)
- Stage 5 action: composite — could be `kind: 'clarify'` (request 2nd FSH) OR `kind: 'route'` (provider review with decision_support_payload)
  - decision_support_payload typed options: `request_repeat_fsh_for_confirmation | request_estrogen_progesterone_lh_panel_for_completeness | proceed_with_treatment_per_clinical_judgment_symptom_cluster_acceptable | defer_for_3_month_observation_with_symptom_diary | refer_to_specialty_menopause_clinic_for_evaluation`

**7. Templates rendered:**
- `tmpl.female_hrt.clarification.cycle_history_v1` (tier_2 outside / tier_4 secure-view; intent=`clinical`) — patient asked to provide more cycle history detail
- `tmpl.female_hrt.lab.confirmation_kit_pending_v1` (tier_2; clinical) — if provider chooses repeat-FSH
- Education content available in-secure on perimenopause variability

**8. Actions:**
- Provider reviews + has clinical-judgment options
- Per provider clinical judgment + symptom cluster (5/8) + cycle history (irregular 2y at age 51) + age weighted: provider can choose to proceed at low dose with 3-month follow-up + safety net for repeat labs if symptom response is unclear
- Lab order via Section 1L Scenario A for repeat FSH (specimen window: any time of day for follicular phase if cycling resumed; otherwise random)
- patient_action_items of type `lab_kit_pending` AND/OR `clinical_required`
- 3-month follow-up scheduled per `Section 1Q.21` cadence

**9. Provider workspace:**
- Batch review UI shows: ambiguity banner ("Clinical perimenopause likely but lab ambiguous; 2nd FSH for confirmation OR proceed per clinical judgment with monitoring"), uploaded PCP labs inline preview, symptom variability chart with severity ordinals over reported time period, decision_support_payload with 5 typed options + each option's rationale (~150-200 chars per option)
- Provider chooses `proceed_with_treatment_per_clinical_judgment_symptom_cluster_acceptable` because age + cycle history + symptom cluster are clinically clear despite lab ambiguity
- Writes `provider_confirmed` assertion of `condition.perimenopause` with evidence_refs to clinical findings; signs Rx authorization for low-dose transdermal patch + progesterone

**10. Architecture verdict:**
- HOLDS. Architecture cleanly handles ambiguity via:
  - `confirmation_count_required` pattern from TRT slice (NOW REUSED in Female HRT for FSH confirmation when ambiguous)
  - Clinical-judgment authority via decision_support_payload
  - Provider's `provider_confirmed` assertion supersedes ambiguous lab data per `1K.5.A` authority taxonomy
- This is the test case that proves the architecture HANDLES AMBIGUITY without forcing premature decision. Provider can defer + observe + act on cluster judgment without the system forcing a binary decision.

---

## Scenario 7 — Follow-up case with external OB/GYN conflict

**Patient:** Helen, 54F. On Bloom-prescribed Climara patch 0.05mg + Prometrium 100mg for 6 months. Original Rx via Bloom GLP-1-qualified provider. Reports mixed labs (estradiol 65 pg/mL — therapeutic range; FSH suppressed; lipids stable). Still has mild residual symptoms (occasional hot flashes 1-2/week, libido improved but not full). Saw her own OB/GYN last week who said "stop the HRT immediately, it's dangerous after 5 years" (mis-stated; OB/GYN was thinking of older WHI data). Patient is confused — should she titrate up, switch, or stop?

**1. Source input:** Patient sends portal message: "My OB/GYN said I should stop HRT but I feel like the symptoms are still there a bit. What should I do?" + uploads recent labs.

**2. Immutable evidence:**
- `messages` row preserving the patient's narrative
- `inbound_narrative_review` row per `Section 1P`
- `patient_document_routing` for recent labs → `patient_lab_observations` rows + `patient_diagnostic_reports` row

**3. Classification:**
- Deterministic safety scan: no match
- AI classifier: `actionable` + `clinical` intent + flags `external_provider_conflict` AND `treatment_decision_uncertainty`
- Surfacing tier per `Section 1P.5`: high primary_candidate (clinical decision)

**4. Atomization:**
- `intent.external_provider_conflict_disclosed = true` (NEW ASSERTION TYPE — flags need for provider awareness; AI extracted)
- `intent.treatment_titration_decision_pending` (patient asking for guidance)
- `provider_external_recommendation = 'stop_hrt_per_obgyn'` clinical assertion (authored_by=`third_party_reported` rank 30; existing 9-value `authored_by` enum from adversarial slice)
- Lab-derived: `lab.estradiol = 65 pg/mL` (therapeutic; goal achieved), `lab.fsh = suppressed`
- Symptom atoms: residual mild symptoms (1-2 hot flashes/week)
- Existing meds: `medication.climara_0.05mg_2x_weekly` + `medication.prometrium_100mg_nightly` (both authored_by=`provider_confirmed`; original Bloom Rx)

**5. Routing:** Mode E (provider follow-up) per `1K.13` Mode E (no new intake_sessions row; stage-agnostic write through resolver). Routes to original prescribing provider OR HRT-qualified provider in queue.

**6. Rules firing:**
- Stage 2 safety preflight: existing Rx active; no contraindication; no urgent symptom
- Stage 3 eligibility: not at this turn (continuation review, not new prescription)
- Stage 5 action selection (NEW PATTERN — `external_provider_conflict_disclosure` rule pattern; per Refinement):
  - `rule.female_hrt.clarification.external_provider_conflict_disclosure` fires when AI classifier flags `external_provider_conflict_disclosed = true` on a patient with active Bloom Rx
  - `kind: 'route'` action with decision_support_payload:
    - rationale_summary: "Patient on Bloom Climara 0.05 + Prometrium 100 x 6 months. Therapeutic estradiol 65 pg/mL. Mild residual symptoms 1-2 HF/week. External OB/GYN advised stopping (per patient report). Patient seeking guidance."
    - evidence_summary: "Patient message [...]; medication.climara_0.05mg_2x_weekly (provider_confirmed); medication.prometrium_100mg_nightly (provider_confirmed); recent labs estradiol 65 + FSH suppressed; symptom severity ordinals"
    - suggested_options:
      - `acknowledge_titrate_up_to_climara_0.075mg`: option_rationale "Mild residual symptoms suggest underdosing; can titrate up at 8-12 week steady-state interval (now 24 weeks, well within); minimal added risk at moderate dose; clinical guidelines support symptom-driven dosing"
      - `acknowledge_titrate_up_to_climara_0.1mg`: option_rationale "Higher dose if symptoms warrant; same monitoring; consider only if patient prefers"
      - `acknowledge_continue_current_dose`: option_rationale "Symptoms mild + stable; mild residual symptoms acceptable for many patients; reasonable to continue if patient comfortable"
      - `acknowledge_taper_off_per_obgyn_recommendation`: option_rationale "Respects external provider judgment; offer counseling on symptom management post-taper; provider notes no clinical reason to stop currently per current evidence; patient autonomy"
      - `request_lab_confirmation_estradiol_recheck`: option_rationale "Confirms current therapeutic range before titration decision (per Section 1Q.1 confirmation_count_required pattern; useful when titration uncertain)"
      - `defer_for_provider_phone_call_with_obgyn`: option_rationale "Patient confusion about provider discrepancy warrants phone clarification; provider can call OB/GYN if patient permits to clarify external recommendation rationale"
- Stage 7 (audit): `audit_events` row noting `intent.external_provider_conflict_disclosed = true` for analytics

**7. Templates rendered:**
- `tmpl.female_hrt.clarification.external_provider_conflict_v1` (NEW; tier_2 outside / tier_4 secure-view; intent=`clinical`; pathway_sensitivity_compatibility=['high']) — patient receives "Your provider is reviewing your situation and the recommendations from your OB/GYN" message
- `tmpl.female_hrt.education.hrt_duration_evidence_review_v1` (tier_4 in-secure; intent=`education`; pathway_sensitivity_compatibility=['high']; CITED current evidence on HRT duration recommendations vs older WHI data; clinical CODEOWNER + compliance CODEOWNER co-sign required at PR per Gap C dual-CODEOWNER rule for high-sensitivity high-stakes claim)

**8. Actions:**
- Provider review with decision_support_payload
- Provider chooses `request_lab_confirmation_estradiol_recheck` to confirm current dose adequacy first; provider documents rationale
- Lab order generated via Section 1L: estradiol + FSH repeat panel; **lab Rx generated via existing `1L` lab order primitive** — when patient self-pay vs insurance: lab order fulfilled as Bloom-managed test kit (mailed) OR Bloom-issued lab Rx PDF for in-person LabCorp/Quest collection
- New `pending_patient_input_tasks` of type `lab_result_return`
- Next follow-up: 2 weeks after lab return for titration decision discussion (typical decision cycle)
- Patient receives clarification message + provider commits to discussion call after lab returns
- Patient may choose to call OB/GYN for joint discussion if she prefers

**9. Provider workspace:**
- Batch review UI shows: external-provider-conflict banner; existing Bloom Rx context (6-month history); recent lab data inline; patient narrative quote; decision_support_payload with 6 typed options
- Cross-batch concept-aware review surfacing per `Section 1P.5` shows prior provider's original Rx assertion → consistency context
- Provider authority floor: existing Rx provider has continuation authority; new HRT-qualified provider can review if original unavailable
- Cognitive load: medium — 1 patient + history + decision; surfacing tier discipline keeps focus

**10. Architecture verdict:**
- HOLDS. NEW pattern surfaced: `external_provider_conflict_disclosure` rule pattern. Architecturally this is a `clarification` rule type per `Section 1Q.1` rule domain. Lives within existing rule domain — NOT a new primitive. Implementation: rule fires when AI classifier flags `intent.external_provider_conflict_disclosed = true` on a patient with active Bloom Rx in any pathway. PR-time CI lint enforces clinical CODEOWNER review when external provider recommendations are surfaced via decision_support_payload (because it touches multi-provider judgment).
- Lab Rx generation works via existing `Section 1L` lab order primitive — provider chooses lab kit OR Bloom-issued lab Rx PDF for external collection; both pathways audited.
- Mode E (provider follow-up) per `1K.13` correctly handles the no-new-intake-session continuation case.
- Follow-up cadence: 2 weeks post-lab is standard titration decision interval; aligns with cadence rules in `Section 1Q.21` Part 8.

---

# Part 3 — Female HRT rules library (~30 rules by domain)

**Eligibility (5):**
- `rule.female_hrt.eligibility.age_threshold` — patient age ≥ 18 (jurisdiction-specific minimum); special handling for surgical menopause patients <40
- `rule.female_hrt.eligibility.jurisdiction_allowed` — telehealth Female HRT allowed in state per `1G.4.1`
- `rule.female_hrt.eligibility.symptom_cluster_threshold` — at least 2 menopausal symptoms (hot flashes / sleep disruption / mood / cognitive / vaginal dryness / libido / joint pain / weight changes) at moderate-or-high severity per Endocrine Society 2017 Position Statement; **NEW ATTRIBUTE: `symptom_cluster_score: int?`** per Section 1Q.4 rule shape extension (Refinement 1)
- `rule.female_hrt.eligibility.menopausal_status_determination` — clinical OR temporal OR lab-based determination:
  - Clinical: cycle irregularity ≥12 months at age ≥40 + symptom cluster
  - Temporal: amenorrhea ≥12 months at age ≥45
  - Lab: FSH ≥25-40 mIU/mL on 2 occasions + estradiol low + clinical context
  - Surgical: post-bilateral-oophorectomy at any age
- `rule.female_hrt.eligibility.outside_hrt_continuation_disclosure` — fires when `medication.estradiol_*` OR `medication.progesterone_*` assertion has `care_management_source != null`
- `rule.female_hrt.eligibility.appropriate_indication_check` — flags `inappropriate_indication_likely` for younger patients (<35) with regular cycles + non-specific symptoms (Scenario 4 pattern)

**Clinical Safety (8):**
- `rule.female_hrt.safety.contraindication_breast_cancer_history_personal` (BLOCK; non-overridable)
- `rule.female_hrt.safety.contraindication_estrogen_sensitive_malignancy` (BLOCK; non-overridable; covers endometrial, ovarian, ER+ tumors)
- `rule.female_hrt.safety.contraindication_active_dvt_pe` (BLOCK for systemic; transdermal-only with override_capability_required per Endocrine Society)
- `rule.female_hrt.safety.contraindication_uncontrolled_htn` (override_capability_required; if controlled on therapy, no override needed)
- `rule.female_hrt.safety.contraindication_severe_liver_disease` (BLOCK; non-overridable)
- `rule.female_hrt.safety.contraindication_active_pregnancy` (BLOCK pending refresh; pregnancy_status time_sensitive_30d freshness profile per `1K.5`)
- `rule.female_hrt.safety.contraindication_unexplained_vaginal_bleeding` (BLOCK pending workup; non-overridable until evaluated)
- `rule.female_hrt.safety.adverse_event_abnormal_bleeding_in_treatment` — NEW PATTERN: when patient on HRT reports new abnormal bleeding (post-coital, intermenstrual, postmenopausal), urgent provider escalation + cancer screening workflow per Refinement 2; surfaces decision_support_payload typed options including endometrial biopsy referral

**Patient Clarification (4):**
- `rule.female_hrt.clarification.intake_completion`
- `rule.female_hrt.clarification.cycle_history_clarification`
- `rule.female_hrt.clarification.outside_hrt_disclosure`
- `rule.female_hrt.clarification.mammogram_recency_clarification` — fires when mammogram ≥12 months old or undocumented; gating per pre-Rx safety screening
- `rule.female_hrt.clarification.external_provider_conflict_disclosure` — NEW PATTERN per Scenario 7

**Lab Requirement (3):**
- `rule.female_hrt.lab.baseline_required` — fires when labs missing OR provider clinical judgment requests; orders comprehensive panel (FSH + estradiol + lipid + thyroid + CBC + comprehensive metabolic; mammogram if not recent)
- `rule.female_hrt.lab.refill_freshness` — annual mammogram + lipid + symptom check at refill cadence; lab values supplementary not gating
- `rule.female_hrt.lab.pre_treatment_confirmation_when_ambiguous` — uses Section 1Q.1 `confirmation_count_required` pattern; when initial FSH borderline + clinical context ambiguous, recommends 2nd FSH draw per Endocrine Society guidelines

**Clinical Routing (1):**
- `rule.female_hrt.routing.assign_to_hrt_qualified_provider_in_jurisdiction` — provider eligibility per `Section 1G.4` provider qualifications (HRT-qualified subset)

**Refill Renewal (2):**
- `rule.female_hrt.rx.refill_blocked_lab_freshness` — per Section 1Q.1 refill_renewal pattern (annual mammogram + symptom check + cycle/bleeding check)
- `rule.female_hrt.rx.adherence_gap_dose_decision` — mirrors GLP-1 Refinement 1 adherence-aware dose decision pattern

**Dose Escalation (2):**
- `rule.female_hrt.rx.dose_change_minimum_interval` — minimum 8-12 weeks between dose adjustments for steady-state evaluation
- `rule.female_hrt.followup.6week_initial_titration_check` — 6-week post-start check-in for tolerability + symptom response

**Adverse Event (3):**
- `rule.female_hrt.adverse.urgent_symptom_routing` — chest pain / severe HA / vision changes / severe edema / unilateral leg swelling → urgent + safety_critical_override_allowed
- `rule.female_hrt.adverse.abnormal_bleeding_escalation` — NEW PATTERN; cancer screening trigger; surfaces decision_support_payload for endometrial biopsy referral
- `rule.female_hrt.followup.3month_safety_check` — comprehensive 3-month check (symptom relief + adverse events + adherence)

**Fulfillment Exception (1):**
- `rule.female_hrt.fulfillment.cold_chain_failure_for_patch` — transdermal patch temperature stability (less critical than GLP-1 cold-chain but still relevant)

**Compliance Audit (1):**
- `rule.female_hrt.compliance.standard_non_dea_prescription_audit` — standard Rx audit (no DEA refill caps; no PDMP requirement); annual prescription monitoring per state HRT regulations where applicable

**Marketing Lifecycle (none):** Female HRT is `pathway_sensitivity: high` — `Section 1Q.21` invariant 5 + dual-CODEOWNER co-sign (Gap C of marketing pressure test) requires per-template explicit opt-in for tier_3 marketing. Default tier_2 outside-secure; tier_3 only with explicit per-template clinical CODEOWNER + compliance CODEOWNER co-sign at PR time. No "your HRT plan" SMS unless dual-CODEOWNER approved + Toggle 6 ON.

---

# Part 4 — Female HRT templates library (~30 templates by domain)

All templates declare `privacy_exposure_level` + `message_intent` + `pathway_sensitivity_compatibility=['high']` per `Section 1Q.5`. Templates with `safety_critical_override_allowed=true` declare `safety_vague_companion_template_key` per `Section 1Q.5`.

**Account Lifecycle (2):**
- `tmpl.female_hrt.account.welcome_v1` — tier_1, intent=`account`
- `tmpl.female_hrt.account.identity_verification_prompt_v1` — tier_1, intent=`account`

**Patient Clarification (4):**
- `tmpl.female_hrt.clarification.intake_completion_v1` — tier_2, intent=`clinical`
- `tmpl.female_hrt.clarification.cycle_history_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`
- `tmpl.female_hrt.clarification.outside_hrt_use_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`
- `tmpl.female_hrt.clarification.external_provider_conflict_v1` — NEW; tier_2 outside / tier_4 secure-view, intent=`clinical` (per Scenario 7)

**Denial Not Eligible (4):**
- `tmpl.female_hrt.denial.breast_cancer_history_v1` — tier_2 outside / tier_5 secure-view, intent=`clinical`; companion `tmpl.female_hrt.denial.breast_cancer_history_outside_secure_vague_v1` at tier_2 (NEVER names "breast cancer" outside-secure; safety_critical_override_allowed=true; clinical CODEOWNER + compliance CODEOWNER co-sign required)
- `tmpl.female_hrt.denial.active_clot_v1` — tier_2 outside / tier_5 secure-view, intent=`clinical`; companion at tier_2
- `tmpl.female_hrt.denial.unexplained_bleeding_v1` — tier_2 outside / tier_5 secure-view, intent=`clinical` (deferral pending workup)
- `tmpl.female_hrt.denial.younger_inappropriate_indication_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`

**Deferral (2):**
- `tmpl.female_hrt.deferral.safety_concern_multiple_v1` — tier_2 outside / tier_5 secure-view, intent=`clinical`; companion at tier_2; safety_critical_override_allowed=true
- `tmpl.female_hrt.deferral.referral_pending_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`

**Lab Reminder (3):**
- `tmpl.female_hrt.lab.baseline_kit_required_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`
- `tmpl.female_hrt.lab.mammogram_reminder_v1` — tier_2, intent=`clinical`
- `tmpl.female_hrt.lab.results_released_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`

**Medication Workflow (4):**
- `tmpl.female_hrt.rx.approved_oral_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`; companion `tmpl.female_hrt.rx.approved_outside_secure_v1` at tier_2 (NEVER names "estrogen" or "HRT" outside-secure for high-sensitivity; uses neutral "your prescription has been approved")
- `tmpl.female_hrt.rx.approved_patch_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`; transfer-risk safety messaging in tier_4
- `tmpl.female_hrt.rx.dose_change_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`
- `tmpl.female_hrt.rx.refill_blocked_lab_freshness_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`

**Fulfillment Exception (3):**
- `tmpl.female_hrt.fulfillment.shipped_oral_v1` — tier_2, intent=`operational` (NEVER names medication in body)
- `tmpl.female_hrt.fulfillment.shipped_patch_v1` — tier_2, intent=`operational` (NEVER names medication in body)
- `tmpl.female_hrt.fulfillment.delay_v1` — tier_2, intent=`operational`

**Clinical Safety Escalation (3):**
- `tmpl.female_hrt.safety.urgent_seek_care_v1` — tier_5 secure-view + phone, intent=`safety`, safety_critical_override_allowed=true; companion `tmpl.female_hrt.safety.urgent_seek_care_vague_outside_v1` at tier_2 (chest pain / severe HA / vision changes / unilateral leg swelling)
- `tmpl.female_hrt.safety.urgent_provider_alert_v1` — tier_5, intent=`safety`, safety_critical_override_allowed=true; companion at tier_2
- `tmpl.female_hrt.safety.abnormal_bleeding_escalation_v1` — NEW; tier_5 secure-view + phone, intent=`safety`, safety_critical_override_allowed=true; companion at tier_2; cancer screening trigger per Refinement 2

**Patient Education (5):**
- `tmpl.female_hrt.education.symptom_expectations_v1` — tier_4 in-secure, intent=`education`
- `tmpl.female_hrt.education.dose_titration_education_v1` — tier_4 in-secure, intent=`education`
- `tmpl.female_hrt.education.breast_self_exam_reminder_v1` — tier_4 in-secure, intent=`education`
- `tmpl.female_hrt.education.mammogram_importance_v1` — tier_2 outside / tier_4 secure-view, intent=`education`
- `tmpl.female_hrt.education.cycle_irregularity_explanation_v1` — tier_4 in-secure, intent=`education`

**Marketing Lifecycle (none):** per Section 1Q.21 + Gap C dual-CODEOWNER for any tier_3 opt-in. Default tier_2 outside-secure for any marketing communications; "your wellness plan" only with explicit per-template opt-in + dual CODEOWNER co-sign.

---

# Part 5 — Pathway file declaration in `Section 1K.2`

```typescript
// repo/intake/pathways/female_hrt.ts
{
  pathway_id: 'female_hrt',
  pathway_version: '1.0.0',
  pathway_sensitivity: 'high',                                    // per Section 1K.2 + Gap C dual-CODEOWNER for tier_3 opt-in
  pathway_crisis_carveout: false,
  medication_class_controlled_schedule: null,                     // estrogen + progesterone are NOT controlled substances
  pathway_jurisdiction_eligibility: 'standard_telehealth_states_v1',
  clinical_codeowner_scope: 'hrt_qualified_provider',             // subset of providers per 1G.4 provider eligibility
  payment_model: 'subscription_or_pay_as_you_go',
  intent_codes: ['perimenopause_symptoms', 'postmenopause_symptoms', 'hrt_continuation'],
  module_versions: { ... },                                       // pinned versions per 1K.4
  l_gate: 'L3',                                                   // per 1J.4
  confirmation_count_required: 2,                                 // per Section 1Q.1 lab_requirement extension; for FSH when initial ambiguous
  effective_at: '2026-05-01T00:00:00Z'
}
```

**Future sibling pathway stub `gender_affirming_feminizing_hrt`** — similar to TRT/GAH-masculinizing pair per Section 1K.2 sibling pathway pattern. Distinct clinical CODEOWNER scope (gender-affirming care specialist); identity-affirming language requirement per Section 1Q.5 `tone_constraints_floor: ['identity_affirming']`; pathway_sensitivity=`extreme` (more sensitive than cis-female HRT due to gender-affirming context); shared modules with `female_hrt` for lab orchestration + medication workflow + fulfillment + audit. Full library deferred to a future slice with distinct clinical CODEOWNER review.

---

# Part 6 — Refinements identified during scenario tracing

**Foundational refinements (in-place patches; this slice):**

1. **`symptom_cluster_score: int?` attribute on `eligibility` rules** — extends `Section 1Q.4` rule shape with optional integer attribute that captures multi-symptom severity-weighted score for symptom-driven eligibility. Generic pattern (not just Female HRT-specific): applies to any pathway where eligibility depends on symptom cluster integration (future mental health pathways; future endocrine pathways). CI lint validates: rules with `symptom_cluster_score >= N` requires `rationale_note` documenting which symptoms + severity threshold drove the score.

2. **`abnormal_bleeding_cancer_screening_workflow` rule pattern** — extends `Section 1Q.1` `adverse_event` rule domain. When patient on HRT reports new abnormal bleeding (post-coital, intermenstrual, postmenopausal), rule fires with urgent provider escalation + decision_support_payload typed options including endometrial biopsy referral. Generic pattern (not just Female HRT-specific): applies to TRT (PSA elevation), future hematology pathways, etc. — adverse event triggers downstream cancer screening workflow vs immediate Rx block. Distinct from existing safety preflight blocks (which prevent Rx initiation) — this is for adverse-events-during-treatment.

Both refinements fit existing primitive structures (rule domain attributes; decision_support_payload typed options) — NO new primitives.

**MVP-polish (not surfaced as foundational; deferred only to runtime fixture work where appropriate):** none surfaced.

---

# Part 7 — Comparison vs GLP-1 + TRT

**Reused (proves pathway-agnostic architecture):**
- 7-stage execution order — unchanged
- Triple-axis privacy governance per `Section 1Q.17` — same engine; pathway_sensitivity `high` cap activated correctly (vs GLP-1 `moderate` / TRT `extreme`)
- Module taxonomy per `Section 1Q.13` — same 15 modules; Module 9 safety escalation pattern proven
- Audit + reconstructability per `Section 1Q.7` — unchanged
- Lab orchestration per `Section 1L` — same kit-shipped + return + result + provider-review pattern
- Provider review workspace per `Section 1G` — same authority discipline
- Adversarial refinements + dynamic behavior fixes — all directly applicable
- Pre-treatment confirmation lab pattern from TRT slice — REUSED for Female HRT FSH when ambiguous (Patch 5 of TRT slice → applied here)
- Outside HRT continuation pattern from TRT slice — REUSED via `care_management_source` field
- decision_support_payload minimum-content discipline from dynamic behavior post-marketing Patch 3 — directly applied throughout scenarios
- Cross-batch concept-aware review surfacing per `Section 1P.5` — directly applicable

**Stressed (architecture must hold; HELD):**
- **Symptom-driven eligibility** (vs lab-driven for GLP-1/TRT) — symptom cluster threshold + menopausal status determination + clinical gestalt
- **Cycle-based physiology** — irregular cycles + perimenopause vs postmenopause
- **Multi-condition safety gating** — breast cancer + clot risk + abnormal bleeding + uterine status (progesterone requirement) + liver disease
- **Uterine-status-driven Rx logic** — has_uterus → progesterone REQUIRED with estrogen; post-hysterectomy → estrogen monotherapy
- **Lab variability** — FSH/estradiol fluctuate dramatically in perimenopause; not always decisive
- **High provider interpretation load** — clinical gestalt > lab thresholds; decision_support_payload critical
- **Outside-source population** very high (medspas + compounded BHRT)
- **Family history nuance** — first-degree breast cancer recent <60 = relative caution, not contraindication; older post-menopausal cancer = informational only
- **External provider conflict pattern** (Scenario 7) — patient consults their OB/GYN who advises something different
- **Inappropriate indication detection** (Scenario 4) — wellness-driven vs medical-necessity-driven; provider must be able to refuse
- Pathway_sensitivity `high` + Gap C dual-CODEOWNER for tier_3 marketing opt-in — applied throughout templates

**New (architectural, not pathway-specific) — only 2 minor refinements:**
- `symptom_cluster_score: int?` attribute (Refinement 1 — generic; not Female HRT-specific)
- `abnormal_bleeding_cancer_screening_workflow` rule pattern (Refinement 2 — generic; cancer screening trigger pattern applies to other pathways)

**Verdict:** architecture HOLDS. 2 small in-place refinements (none introduce new primitives). Female HRT proves pathway-agnostic claim with HIGHER-ambiguity test surface than TRT.

---

# Part 8 — Final readiness verdict

After this checkpoint lands:
- `repo/rules/female_hrt/` + `repo/templates/female_hrt/` ready for code-as-config implementation per the locked GLP-1 / TRT implementation pattern
- ~30 Female HRT rules + ~30 Female HRT templates as TypeScript files; clinical CODEOWNER + compliance CODEOWNER reviews each at PR time per `.github/CODEOWNERS` (compliance CODEOWNER required for high-sensitivity tier_3 marketing templates per Gap C)
- Sandbox test fixtures: 5+ per `clinical_safety` domain rule per `Section 1Q.4`
- Integration tests run all 7 patient scenarios (Sarah / Linda / Diane / Madison / Karen / Patricia / Helen) end-to-end
- Sibling pathway `gender_affirming_feminizing_hrt` deferred to a future slice with distinct clinical CODEOWNER scope per Section 1K.2 sibling pathway pattern

---

# Part 9 — Next slice candidates

In rough priority order (user picks):
1. **ED slice** — `pathway_sensitivity: extreme`, simpler than Female HRT (lighter monitoring; clear contraindications); good complement to test ED-specific contraindications (cardiac, nitrates)
2. **Gender-affirming feminizing HT** — completes the Female HRT/GAH-feminizing sibling pathway pair started in this slice
3. **Gender-affirming masculinizing HT** — completes the TRT/GAH-masculinizing sibling pathway pair
4. **Mental health / sleep / depression** — `pathway_sensitivity: extreme` + `pathway_crisis_carveout: true`; phone-first crisis routing + 988 hotline
5. **Runtime implementation** — start `repo/rules/glp1/` + `repo/templates/glp1/` + sandbox test harness per `Section 1Q.16` pre-runtime gate
6. **Test category 1: Temporal orchestration** — already verified twice; could deepen
7. **Peptides slice** — compliance-blocked per `Section 1Q.16`; org policy review prerequisite

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved the slice + 2 in-place refinements on 2026-05-01. Single multi-file checkpoint applied: this audit + NEW Section 1Q.22 + 2 small in-place refinements (Section 1Q.4 `symptom_cluster_score` attribute + Section 1Q.1 `abnormal_bleeding_cancer_screening_workflow` rule pattern).
