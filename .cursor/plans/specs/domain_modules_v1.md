# Domain modules — Layer C spec v1

**Date:** 2026-05-02 (revised after demographic over-collection fix + pathway override architectural rule)
**Stage:** 2 Phase 1 — Layer C authoring (5 modules; 17 questions)
**Clinical CODEOWNER:** founder (board-certified MD)
**Architecture pin:** `Section 1K.3` (atomization + 4-layer module taxonomy + answer mechanics + pathway override pattern + directly-answered-fields rule) + `Section 1K.4` (question bank + versioning) + `Section 1K.5.A` (clinical assertion layer; concept registry organized by domain) + `Section 1K.19` (intake repository + control model)
**Reference funnel:** [.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md](.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md)

## Scope

Layer C domain modules — single-domain clinical baselines. Each module's atoms live in the corresponding `repo/clinical-concepts/<domain>.ts` per `Section 1K.5.A`. Reusable across every pathway that needs that domain.

**5 modules in this file:**
1. `mod.domain.cardiometabolic.baseline_history_v1` — 3 questions (cardiovascular + endocrine + renal/hepatic + cancer multi-select)
2. `mod.domain.gastrointestinal.baseline_history_v1` — 1 question (GI conditions multi-select)
3. `mod.domain.reproductive.pregnancy_status_baseline_v1` — 5 questions (rendered when biological_sex_at_birth = female)
4. `mod.domain.mental_health.baseline_v1` — 3 questions (diagnosis + meds + safety screen)
5. `mod.domain.lifestyle.standard_baseline_v1` — 5 questions (activity / alcohol / drugs / nicotine / sleep)

**Total: 17 questions across 5 medical domains.**

---

## Module 8 — `mod.domain.cardiometabolic.baseline_history_v1`

**`module_id`:** `mod.domain.cardiometabolic.baseline_history_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical
**`pathways`:** all clinical pathways where cardiometabolic baseline is clinically appropriate
**`required_for`:** safety
**`assertion_group_emit_trigger`:** `module_complete`
**Atom domain:** `cardiovascular` + `endocrine` + `renal_hepatic` (per `Section 1K.5.A` concept registry)

### Q8.1 — Diagnosed with any of these conditions?

**Hims source:** Steps 38-43 (multi-page multi-select covering kidney + heart + endocrine + cancer + liver conditions)
**MAIN voice:**
- prompt: "Have you ever been diagnosed with any of these?"
- helper: "Select all that apply. We use this to screen for safety. If unsure, leave it unchecked."

**Schema:**
- `question_id`: `qb.domain.cardiometabolic.medical_conditions_multiselect_v1` | `tier`: 1
- `answer_type`: `multi_select` | `selection_cardinality`: `zero_or_more` | `requiredness`: `skippable_with_explicit_none`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` (multi-select but single composite atom emitted with structured value array; each selected condition triggers its own typed atom in Stage 1.5 emit)
- `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)

**Choices** (controlled vocab; consolidated from Hims Steps 38-43):
- Cardiovascular: Hypertension (high blood pressure) | Hypotension (low blood pressure) | Heart attack | Heart arrhythmia | Heart disease (coronary artery disease) | Angina | Congestive heart failure | Stroke or mini-stroke (TIA) | Hyperlipidemia (high cholesterol)
- Endocrine: Diabetes Type 1 | Prediabetes | Thyroid disease (specify in free-text) | Pituitary disorder
- Renal/hepatic: Acute or chronic kidney disease (CKD) | Kidney stones | Liver issues (specify)
- Other systemic: Cancer (specify type/year) | Seizure disorder (including epilepsy) | Cystic fibrosis | Hyponatremia | PKU | Glaucoma | Obstructive sleep apnea
- None: No, none of these

**`none_logic`:** `{mode: 'exclusive_with_other_choices', none_choice_value: 'none_of_these'}` (selecting "None of these" auto-deselects all positives — binding for safety screen per `Section 1K.3` Stage 1.5 anti-pattern guard)

**Atoms emitted (composite emitter via `assertion_group_id`; Stage 1.5 multi-question emit):**
- Per selected positive: typed atomic assertion per condition (e.g., `condition.hypertension_history`, `condition.heart_attack_history`, `condition.diabetes_t1_history`, `condition.prediabetes_history`, `condition.cad_history`, `condition.stroke_history`, `condition.hyperlipidemia_history`, `condition.ckd_history`, `condition.kidney_stones_history`, `condition.liver_issues_history`, `condition.cancer_history`, `condition.osa_history`, etc.; lives in respective domain registry files per `Section 1K.5.A`)
- "None of these" selected → all condition atoms emitted as DENIED (`status: 'denied_at_intake'`; provider sees explicit denial in workspace; future re-asks would surface this prior denial per `Section 1K.5` answer-reuse + freshness)
- Denied atoms: per condition, when patient could have selected but did not → ABSENCE is implicit; explicit denial only when "None of these" is selected (the all-or-nothing semantic)

**Issues found:** Hims spreads this across 6 page-flips (Steps 38-43); MAIN consolidates into ONE multi-select page for faster patient experience + cleaner atomization. The trade-off is more options on one screen but Hims patients already see the full list when scrolling — consolidation saves clicks. Per `Section 1K.3` anti-pattern guard: safety multi_select with "None of these" MUST use `exclusive_with_other_choices` mode (binding).
**Recommended rewrite:** Consolidate Hims's 6 pages into 1 multi-select; keep all condition options.
**Branching adjustments:** No conditional follow-up questions in this module (those live in pathway-specific extensions per `Section 1K.3` contextual extension principle — e.g., GLP-1 pathway adds `mod.pathway.glp1.cv_safety_extended_v1` for MEN-2/MTC; female_hrt adds reproductive-context follow-ups, etc.).
**Downstream effect:** `provider_review` (each selected condition feeds safety preflight per `Section 1J.10`).
**Final decision:** **Modify** (consolidate Hims's 6 pages into 1; adopt `exclusive_with_other_choices` none_logic).

### Q8.2 — Other medical conditions free-text

**Hims source:** Step 44-46 "Are there any other medical conditions you haven't shared with us already? Be sure to include any medical conditions that you treat with medications. No / Yes" → if Yes "Please list any other medical conditions. [text area; 0/255]"
**MAIN voice:**
- prompt: "Anything else we should know about your health?"
- helper: "Optional. List any conditions not covered above — even minor stuff. We'd rather know than miss it."

**Schema:**
- `question_id`: `qb.domain.cardiometabolic.other_conditions_freetext_v1` | `tier`: 2
- `answer_type`: `free_text_bounded` | `selection_cardinality`: `optional_blank_allowed` | `requiredness`: `skippable_blank`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` (free-text; AI atomization via `Section 1P` extracts structured atoms post-submit)
- `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline; renders after Q8.1)

**`free_text_rules`:** `{allow_blank: true, explicit_no_value: "Nothing else", safety_scan: true, do_not_force_fake_content: true}`
**`narrative_intent`:** `patient_concern`

**Atoms emitted:**
- At intake: `narrative.other_conditions_freetext` (raw stored)
- Post-submit (via `Section 1P` AI atomization): `condition.<descriptor>_instance` per detected condition

**Issues found:** Hims uses 2-step Y/N + text area (255 chars). MAIN simplifies to single optional free-text with `do_not_force_fake_content: true` + explicit "Nothing else" checkbox companion (per `Section 1K.3` free-text rules) so patients can submit blank without feeling weird about it. Hims's pattern of forcing 0/255 character counter feels like homework; MAIN drops it.
**Recommended rewrite:** Adopt single optional question with explicit-no-value checkbox.
**Branching adjustments:** None.
**Downstream effect:** `provider_review` (AI-extracted atoms surface in provider workspace; provider can confirm/reject).
**Final decision:** **Modify** (consolidate Hims 2-step into 1; adopt skippable_blank pattern).

### Q8.3 — Family history of cardiometabolic conditions

**Hims source:** Hims doesn't ask family history at this layer (covered later in pathway-specific MEN-2/MTC family question Step 49). MAIN adds a Tier 3 lightweight family history question for personalization + risk context.
**MAIN voice:**
- prompt: "Any of these run in your immediate family?"
- helper: "Parents, siblings, or kids only. Skip if unsure. We use this to personalize care, not to gate anything."

**Schema:**
- `question_id`: `qb.domain.cardiometabolic.family_history_v1` | `tier`: 3
- `answer_type`: `multi_select` | `selection_cardinality`: `zero_or_more` | `requiredness`: `skippable_with_explicit_none`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` (multi-select; composite atom)
- `atom_kind`: `clinical_history` | `downstream_effect`: `personalization`
- `render_when`: null (baseline; Tier 3 — A/B-testable per `Section 1K.3` Stage 1.5)

**Choices:** Heart disease (early — under 55) | Stroke (early — under 55) | Diabetes (type 2) | High cholesterol | Cancer (specify) | None of these | Don't know
**`choice_values`:** `early_heart_disease | early_stroke | t2_diabetes | hyperlipidemia | cancer | none_of_these | dont_know`

**`none_logic`:** `{mode: 'exclusive_with_other_choices', none_choice_value: 'none_of_these'}` — but "Don't know" is its own option (not exclusive; family history is often genuinely unknown).

**Atoms emitted:**
- Per selected: `family_history.<condition>_first_degree` (e.g., `family_history.early_heart_disease_first_degree`)
- "None of these" → atoms denied
- "Don't know" → no atom emitted; intake_response records the unsure status

**Issues found:** Tier 3 (NICE TO HAVE; A/B-testable) — family history is useful for personalization but not safety-gating in V1. "Don't know" is a valid answer (avoids forcing patient to guess).
**Recommended rewrite:** Keep proposed.
**Branching adjustments:** None at intake; downstream personalization only.
**Downstream effect:** `personalization` (drives content selection + future risk-stratification).
**Final decision:** **Modify** (new Tier 3 question; A/B-test eligibility flagged for clinical CODEOWNER).

---

## Module 9 — `mod.domain.gastrointestinal.baseline_history_v1`

**`module_id`:** `mod.domain.gastrointestinal.baseline_history_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical
**`pathways`:** all clinical pathways where GI baseline is clinically appropriate (GLP-1 critical; TRT/Female HRT/ED less critical)
**`required_for`:** safety
**`assertion_group_emit_trigger`:** `module_complete`
**Atom domain:** `gastrointestinal`

### Q9.1 — GI conditions multi-select

**Hims source:** Step 35-36 "Have you been diagnosed with any of the following conditions? IBS / Celiac / Chronic constipation / Heartburn / GERD or Acid Reflux / Diverticulitis / Crohn's Disease / Ulcerative colitis / Fatigue or low energy levels / No, none of these"
**MAIN voice:**
- prompt: "Any GI or digestion-related conditions?"
- helper: "Select all that apply. Tells your provider which treatments to consider carefully."

**Schema:**
- `question_id`: `qb.domain.gastrointestinal.conditions_multiselect_v1` | `tier`: 1
- `answer_type`: `multi_select` | `selection_cardinality`: `zero_or_more` | `requiredness`: `skippable_with_explicit_none`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` (multi-select; composite atom)
- `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)

**Choices:** IBS (Irritable Bowel Syndrome) | Celiac disease | Chronic constipation | Heartburn (occasional) | GERD or chronic acid reflux | Diverticulitis | Crohn's disease | Ulcerative colitis | None of these
**`choice_values`:** `ibs | celiac | chronic_constipation | heartburn | gerd | diverticulitis | crohns | uc | none_of_these`

**`none_logic`:** `{mode: 'exclusive_with_other_choices', none_choice_value: 'none_of_these'}` (binding for safety screen)

**Atoms emitted:**
- Per selected: typed atom (e.g., `condition.ibs_history`, `condition.celiac_history`, `condition.gerd_history`, `condition.ibd_crohns_history`, `condition.ibd_uc_history`)
- "None of these" → all GI condition atoms denied at intake (`status: 'denied_at_intake'`)

**Issues found:** Hims includes "Fatigue or low energy levels" in the GI list — that's misclassified (fatigue is a symptom, not a GI condition; belongs in lifestyle or mental_health depending on cause). MAIN drops it from this list. Per `Section 1K.3` anti-pattern guard: safety multi_select with "None of these" MUST use `exclusive_with_other_choices`.
**Recommended rewrite:** Drop "Fatigue or low energy levels" from Hims list; tighten options.
**Branching adjustments:** No conditional follow-ups at this layer; pathway-specific GI safety extensions (e.g., GLP-1 pancreatitis/gallbladder/gastroparesis) live in `mod.pathway.glp1.gi_safety_extended_v1` (Phase 2).
**Downstream effect:** `provider_review` (GI conditions affect GLP-1 dose titration + medication selection across pathways).
**Final decision:** **Modify** (drop misclassified "Fatigue" from Hims list).

---

## Module 10 — `mod.domain.reproductive.pregnancy_status_baseline_v1`

**`module_id`:** `mod.domain.reproductive.pregnancy_status_baseline_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical
**`pathways`:** all clinical pathways where reproductive baseline is clinically appropriate (GLP-1 absolute contraindication; Female HRT treatment selection; mental health Rx interactions; hair loss minoxidil contraindication)
**`required_for`:** safety
**`assertion_group_emit_trigger`:** `module_complete`
**Atom domain:** `obstetric`
**Render policy:** module ONLY renders when `qb.universal.demographics.biological_sex_at_birth_v1 = female` per `Section 1K.3` directly-answered-fields rule (biological_sex_at_birth is a directly answered demographic fact and MAY drive pregnancy-possibility screening logic; intersex / declined-to-answer patients handled via downstream Mode F clarification per `Section 1P.4` and/or pathway-specific anatomy questions per `Section 1K.3` directly-answered vs inferred clinical facts rule)

### Q10.1 — Currently pregnant?

**Hims source:** Hims pregnancy block (mapped to Steps in pregnancy section of new-patient funnel; verbatim wording omitted from grep but pattern is consistent)
**MAIN voice:**
- prompt: "Are you currently pregnant?"
- helper: "We ask because some treatments aren't safe during pregnancy. We'll never share this."

**Schema:**
- `question_id`: `qb.domain.reproductive.pregnancy_status.currently_pregnant_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `hard_stop` (active pregnancy = absolute contraindication for many pathways)
- `render_when`: `{question_id: 'qb.universal.demographics.biological_sex_at_birth_v1', equals: 'female'}`

**Choices:** Yes | No | Not sure
**`choice_values`:** `yes | no | unsure`

**Atoms emitted:**
- Yes: `condition.pregnancy_active = true` (`hard_stop` per pathway-specific safety preflight)
- No: `condition.pregnancy_active = false` (denied atom; cleared)
- Not sure: `condition.pregnancy_active = unconfirmed` (`provider_review`; provider may request pregnancy test per `Section 1J.10` `time_sensitive_30d` freshness profile)

**Issues found:** Reassuring helper text ("We'll never share this") is critical — pregnancy status is sensitive PHI. "Not sure" is a real and valid answer (especially in early weeks); MAIN preserves it explicitly rather than forcing binary.
**Recommended rewrite:** Adopt MAIN voice with reassuring helper.
**Branching adjustments:** Yes → hard_stop case-level blocker per `Section 1K.3` hard_stop semantics (intake continues; provider sees flag in workspace; provider may discuss alternative treatments). Not sure → Mode F clarification opens at safety preflight (provider may request pregnancy test before Rx).
**Downstream effect:** `hard_stop` (Yes) | `provider_review` (Not sure) | `personalization` (No; informs contraception counseling timing).
**Final decision:** **Modify** (adopt warm helper + 3-option set vs binary).

### Q10.2 — Trying to conceive?

**Hims source:** Hims pregnancy block
**MAIN voice:**
- prompt: "Are you actively trying to become pregnant?"
- helper: "Including IVF or fertility treatment. We ask to keep your treatment options safe."

**Schema:**
- `question_id`: `qb.domain.reproductive.pregnancy_status.trying_to_conceive_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review` (TTC affects medication washout planning)
- `render_when`: `{all_of: [{question_id: 'qb.universal.demographics.biological_sex_at_birth_v1', equals: 'female'}, {question_id: 'qb.domain.reproductive.pregnancy_status.currently_pregnant_v1', in: ['no', 'unsure']}]}`

**Choices:** Yes | No | Considering it within next 12 months
**`choice_values`:** `yes | no | considering`

**Atoms emitted:**
- Yes: `condition.actively_trying_to_conceive = true` (provider counseling required for GLP-1 + 2-month washout per Endocrine Society; per `Section 1K.5.A` authority tier)
- No: `condition.actively_trying_to_conceive = false`
- Considering: `condition.actively_trying_to_conceive = considering` (informational; downstream provider conversation)

**Issues found:** "Considering it within next 12 months" is a real demographic that affects long-term Rx planning; binary Y/N misses this nuance. Helper acknowledges fertility treatment is a related case.
**Recommended rewrite:** 3-option set; warm helper.
**Branching adjustments:** Yes / Considering → `provider_review` flag triggered; provider may have a counseling conversation before Rx.
**Downstream effect:** `provider_review`.
**Final decision:** **Modify** (3-option set; new "considering" option).

### Q10.3 — Currently breastfeeding?

**Hims source:** Hims pregnancy block
**MAIN voice:**
- prompt: "Are you currently breastfeeding?"
- helper: "Some medications pass through breast milk. We need to know."

**Schema:**
- `question_id`: `qb.domain.reproductive.pregnancy_status.breastfeeding_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `hard_stop` (many pathways contraindicated during breastfeeding)
- `render_when`: `{question_id: 'qb.universal.demographics.biological_sex_at_birth_v1', equals: 'female'}`

**Choices:** Yes | No
**`choice_values`:** `yes | no`

**Atoms emitted:**
- Yes: `condition.breastfeeding_active = true` (hard_stop)
- No: `condition.breastfeeding_active = false`

**Issues found:** Binary Y/N is appropriate (no gray area like pregnancy "not sure"). Helper sets the medical reason simply.
**Recommended rewrite:** Keep simple binary.
**Branching adjustments:** Yes → hard_stop per pathway safety preflight.
**Downstream effect:** `hard_stop` (Yes) | `personalization` (No).
**Final decision:** **Modify** (warm helper).

### Q10.4 — Currently using contraception?

**Hims source:** Hims contraception sub-question
**MAIN voice:**
- prompt: "Are you currently using contraception?"
- helper: "Some treatments may reduce contraceptive effectiveness, and some require backup methods. Knowing helps us guide you."

**Schema:**
- `question_id`: `qb.domain.reproductive.pregnancy_status.using_contraception_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: `{all_of: [{question_id: 'qb.universal.demographics.biological_sex_at_birth_v1', equals: 'female'}, {question_id: 'qb.domain.reproductive.pregnancy_status.trying_to_conceive_v1', equals: 'no'}]}`

**Choices:** Yes | No
**`choice_values`:** `yes | no`

**Atoms emitted:**
- Yes: `medication.contraceptive_in_use = true`
- No: `medication.contraceptive_in_use = false` (denied; provider may discuss contraception counseling before Rx)

**Issues found:** Helper explicitly names dual concerns (effectiveness + backup methods) — patient understands why we ask.
**Recommended rewrite:** Adopt warm helper.
**Branching adjustments:** Yes → render Q10.5 (method).
**Downstream effect:** `provider_review` (No → counseling discussion downstream).
**Final decision:** **Modify** (warm helper).

### Q10.5 — Contraception method

**Hims source:** Hims method sub-question
**MAIN voice:**
- prompt: "What method?"
- helper: "Some methods (like oral pills) may need a backup during dose escalation."

**Schema:**
- `question_id`: `qb.domain.reproductive.pregnancy_status.contraception_method_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.domain.reproductive.pregnancy_status.using_contraception_v1', equals: 'yes'}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices:** Oral pill | IUD | Implant | Injection (Depo) | Patch / ring | Barrier only (condoms, diaphragm) | Sterilization (tubal ligation / vasectomy partner) | Other
**`choice_values`:** `oral_pill | iud | implant | injection | patch_ring | barrier_only | sterilization | other`

**Atoms emitted:**
- Positive: `medication.contraceptive_method_kind` (metadata: `{value}`)
- Denied: n/a

**Issues found:** Hims's options are typically simpler; MAIN expands to more inclusive options (sterilization is meaningful clinically). Helper explicitly addresses the GLP-1 oral-contraceptive-efficacy concern.
**Recommended rewrite:** Adopt 8-option set.
**Branching adjustments:** `oral_pill` → downstream rule `rule.system.contraception.oral_only_warning` fires `kind: 'notify'` for backup-method counseling per FDA labels.
**Downstream effect:** `provider_review` (oral_pill triggers counseling content selection).
**Final decision:** **Modify** (8-option set).

---

## Module 11 — `mod.domain.mental_health.baseline_v1`

**`module_id`:** `mod.domain.mental_health.baseline_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical
**`pathways`:** all clinical pathways where mental health baseline is clinically appropriate
**`required_for`:** safety
**`assertion_group_emit_trigger`:** `module_complete`
**Atom domain:** `mental_health`

### Q11.1 — Diagnosed with mental health condition?

**Hims source:** Step 33 "Have you been diagnosed with a mental health condition? We ask this so your provider can have a complete understanding of your medical history so they can decide what is the best treatment for you. Please be sure to report any conditions you take medications for. No / Yes"
**MAIN voice:**
- prompt: "Have you ever been diagnosed with a mental health condition?"
- helper: "This stays with your provider. Knowing helps us check for medication interactions and tailor your care."

**Schema:**
- `question_id`: `qb.domain.mental_health.diagnosed_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)

**Choices:** Yes | No
**`choice_values`:** `yes | no`

**Atoms emitted:**
- Yes: `condition.mental_health_diagnosed_history = true` (provider review; pathway-specific extension `mod.pathway.glp1.eating_disorder_screen_v1` etc. add depth)
- No: `condition.mental_health_diagnosed_history = false`

**Issues found:** Hims helper is verbose ("Please be sure to report any conditions you take medications for"). MAIN tightens + reassures. Per `Section 1K.3` reproductive/MH/safety patterns: warm helper builds trust.
**Recommended rewrite:** Adopt MAIN voice.
**Branching adjustments:** Yes → render Q11.2 (currently on meds for it). Pathway-specific extensions handle depth.
**Downstream effect:** `provider_review`.
**Final decision:** **Modify** (warmer + tighter helper).

### Q11.2 — Currently on medication for mental health?

**Hims source:** Implicit follow-up to Step 33 (Hims captures via medications list at Step 57)
**MAIN voice:**
- prompt: "Are you currently taking medication for it?"
- helper: "Including SSRIs, SNRIs, mood stabilizers, anti-anxiety meds, ADHD meds, sleep meds — anything prescribed."

**Schema:**
- `question_id`: `qb.domain.mental_health.currently_on_meds_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.domain.mental_health.diagnosed_v1', equals: 'yes'}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices:** Yes | No | Used to, but stopped
**`choice_values`:** `yes | no | stopped`

**Atoms emitted:**
- Yes: `medication.psychotropic_in_use = true` (cross-references `mod.clinical_core.medication_history_v1` for specific medications; provider review)
- No: `medication.psychotropic_in_use = false`
- Stopped: `medication.psychotropic_historical = true` (provider may discuss reasons + considerations)

**Issues found:** Hims captures meds list later; MAIN asks the binary here for faster safety preflight. "Used to, but stopped" is meaningful clinically (relapse risk + medication-history context).
**Recommended rewrite:** 3-option set; helper enumerates common psychotropic categories so patients know what counts.
**Branching adjustments:** Specifics captured in `mod.clinical_core.medication_history_v1` Q5.2 multi-instance.
**Downstream effect:** `provider_review`.
**Final decision:** **Modify** (3-option set; helper expansion).

### Q11.3 — Currently feel like harming yourself or others?

**Hims source:** Step 34 "Do you currently have any desire to harm yourself or others? We ask this question so your provider can have a complete picture of your current health and determine which treatment might be right for you. No / Yes"
**MAIN voice:**
- prompt: "Right now, are you having thoughts of harming yourself or someone else?"
- helper: "If yes, we'll connect you with crisis resources right away. We're not here to judge; we want to make sure you're safe."

**Schema:**
- `question_id`: `qb.domain.mental_health.self_harm_current_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `hard_stop` (case-level blocker; PARALLEL emergency orchestration per `Section 1K.3` hard_stop semantics + `Section 1Q.13` Module 9)
- `render_when`: null (baseline)

**Choices:** Yes | No
**`choice_values`:** `yes | no`

**Atoms emitted:**
- Yes: `intent.self_harm_current = true` (URGENT; triggers parallel emergency orchestration — crisis-resources banner appears in-app + 988 hotline + on-call clinician escalation per `Section 1G.3` step 5b emergency carveout; intake CONTINUES per Section 1K.3 hard_stop semantics — does NOT terminate session; depth gathered post-submission via Mode F clarification per `Section 1P.4` to avoid retraumatization)
- No: `intent.self_harm_current = false`

**Issues found:** Hims's helper is overly clinical ("complete picture of your current health"). MAIN's helper is ACTIVELY supportive ("we'll connect you with crisis resources right away" + "We're not here to judge; we want to make sure you're safe"). This MATTERS — patients answering Yes are vulnerable; tone of helper text shapes whether they feel safe answering honestly. Per `Section 1K.3` hard_stop semantics: intake CONTINUES even on Yes; crisis resources appear as banner; provider review opens at urgent_clinical priority within minutes.
**Recommended rewrite:** Adopt actively supportive helper. CRITICAL.
**Branching adjustments:** Yes → IMMEDIATE crisis-resources banner appears in-app; 988 hotline link surfaces; on-call clinician notified at urgent_clinical priority per `Section 1G.7.6`; intake CONTINUES collecting (no follow-up Q to avoid retraumatization). No → standard intake flow.
**Downstream effect:** `hard_stop` (Yes; case-level blocker for clinical Rx pending provider safety review) | `personalization` (No; standard).
**Final decision:** **Modify** (CRITICAL helper rewrite for actively supportive tone; preserve binding hard_stop semantics).

---

## Module 12 — `mod.domain.lifestyle.standard_baseline_v1`

**`module_id`:** `mod.domain.lifestyle.standard_baseline_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical (some lifestyle factors are clinical safety; others are personalization)
**`pathways`:** all clinical pathways where lifestyle baseline is clinically appropriate
**`required_for`:** safety (alcohol/nicotine/drugs) + submission (activity/sleep)
**`assertion_group_emit_trigger`:** `module_complete`
**Atom domain:** `social_history`

### Architectural note — Pathway-specific drug screen extensibility (binding per `Section 1K.3` `question_overrides` pattern)

Q12.3 recreational drugs is the **universal baseline** (5 Hims-equivalent substances: cocaine / methamphetamine / opioids / kratom / cannabis). Pathways requiring deeper or differently-scoped substance screening declare a `question_override` per `Section 1K.3` pathway override pattern. The override REPLACES Q12.3 at render time within this module's composition; the override MAY emit MORE atoms than the baseline (richer signal) but MUST NOT emit FEWER atoms (CI lint enforces atom-output-cannot-decrease rule). All overrides preserve the 5 baseline substance atoms (`social_history.recreational_drug_cocaine_6mo` / `_methamphetamine_6mo` / `_opioids_6mo` / `_kratom_6mo` / `_cannabis_6mo`) so downstream rules consuming the baseline atoms continue to work; overrides ADD pathway-specific substance atoms in the same `social_history.*` namespace.

**Worked extensibility examples (binding intent; Phase 2+ scope marker):**

- **`mod.pathway.mental_health_ssri.recreational_drugs_extended_v1`** — 12-substance high-resolution variant for SSRI / SNRI / MAOI pathways. Adds: hallucinogens (LSD / psilocybin / ayahuasca) + MDMA / ecstasy + ketamine / dissociatives + GHB + novel synthetic drugs + DXM (dextromethorphan misuse). Rationale: serotonergic substances cause serotonin syndrome with SSRIs/SNRIs/MAOIs; MAOIs interact with multiple substances. CI lint: emits all 5 baseline atoms PLUS 7 additional substance atoms (`social_history.recreational_drug_hallucinogens_6mo`, etc.). Clinical CODEOWNER ack required at PR per `Section 1K.3` override-pattern rationale_note.
- **`mod.pathway.cardiology.recreational_drugs_cocaine_focused_v1`** — 1-question targeted variant for beta-blocker / antihypertensive pathways. Asks "Have you used cocaine in the last 30 days?" with shorter recall window. Rationale: cocaine + non-selective beta-blocker = unopposed alpha-adrenergic stimulation → hypertensive emergency; 30-day recall is clinically critical (vs 6-month baseline). CI lint: enriched cocaine atom `social_history.recreational_drug_cocaine_30d` (more recent timeframe; clinically critical) — atom semantic differs from baseline, requires explicit clinical CODEOWNER ack in `rationale_note` per `Section 1K.3` override-pattern CI lint failure mode (b). Other 4 baseline atoms continue emitting from the override (renders the baseline question + the 30d-targeted question; preserves baseline coverage).
- **`mod.pathway.ed.recreational_drugs_extended_v1`** — adds poppers / amyl nitrites / inhaled nitrates to baseline list. Rationale: PDE5 inhibitors + nitrates = absolute contraindication; poppers are a common recreational use. CI lint: emits all 5 baseline atoms PLUS `social_history.recreational_drug_poppers_6mo`. Clinical CODEOWNER ack at PR.

**Pattern reuse:** Q12.4 nicotine + Q12.2 alcohol may also be candidates for pathway override (Q12.4 may need vape-specific depth for cardiology; Q12.2 may need detailed CAGE-style depth for ED with hepatic clearance considerations). Architecture is the same; specific overrides authored when pathways author Phase 2+ pathway-specific modules.

### Q12.1 — Activity level

**Hims source:** Step 31 "How would you describe your typical daily activity level? 5 - I'm very active (i.e. exercise 6-7 days per week) / 4 / 3 - I'm moderately active (i.e. exercise 3-5 days per week) / 2 / 1 - I'm not very active (i.e. don't usually exercise during the week)"
**MAIN voice:**
- prompt: "How active are you in a typical week?"
- helper: "Be honest — there's no judgment. We use this to personalize your care."

**Schema:**
- `question_id`: `qb.domain.lifestyle.activity_level_v1` | `tier`: 2
- `answer_type`: `severity_ordinal` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `lifestyle_behavior` | `downstream_effect`: `personalization`
- `render_when`: null

**Choices** (canonical ordinal 1-5 per `Section 1K.4` severity_ordinal pattern):
- 1: Not very active (rarely exercise)
- 2: Lightly active (light walks, occasional movement)
- 3: Moderately active (exercise 3-5 days/week)
- 4: Active (exercise 5-6 days/week)
- 5: Very active (daily intense exercise)

**Atoms emitted:**
- Positive: `social_history.physical_activity_level` (metadata: `{ordinal: 1-5, scale_name: 'maybe_org_custom_v1'}`)
- Denied: n/a

**Issues found:** Hims's labels are slightly awkward ("I'm not very active"); MAIN's are tighter + non-judgmental. Helper actively reassures patient that honesty is welcomed (Hims doesn't).
**Recommended rewrite:** Adopt MAIN voice.
**Branching adjustments:** Pathway-specific extensions in `mod.pathway.glp1.exercise_goals_depth_v1` (Phase 2) ask deeper exercise-type questions when activity ≥ moderate.
**Downstream effect:** `personalization` (drives content + cadence).
**Final decision:** **Modify** (MAIN voice; non-judgmental).

### Q12.2 — Alcohol frequency

**Hims source:** Step 62 "How often do you consume 5 or more alcoholic drinks in one occasion? Sometimes alcohol can impact the effectiveness of certain medications and it's important for your provider to know to give you the best guidance. Never / A few times a year / Once a month / Once a week / Daily or almost daily"
**MAIN voice:**
- prompt: "How often do you have 5 or more drinks in one sitting?"
- helper: "Alcohol can interact with some medications. Honest answers help your provider give you the right guidance. We're not here to judge."

**Schema:**
- `question_id`: `qb.domain.lifestyle.alcohol_binge_frequency_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `lifestyle_behavior` | `downstream_effect`: `provider_review`
- `render_when`: null

**Choices:** Never | A few times a year | Once a month | Once a week | Daily or almost daily
**`choice_values`:** `never | few_per_year | once_per_month | once_per_week | daily_or_almost`

**Atoms emitted:**
- Positive: `social_history.alcohol_binge_frequency` (metadata: `{value, ordinal_rank: 0-4}`)
- Denied: `never` is a meaningful clinical answer; not a denial of the question

**Issues found:** Hims's helper is fine but slightly cold; MAIN adds "We're not here to judge" reassurance (matches Q12.1 pattern). The 5-or-more-drinks framing is the standard CAGE-style binge-drinking screen — keep intact.
**Recommended rewrite:** Adopt warmer helper.
**Branching adjustments:** `daily_or_almost` triggers downstream `mod.pathway.glp1.lifestyle_depth_v1` Branch 3 follow-up (Phase 2; Tier 2 alcohol depth).
**Downstream effect:** `provider_review` (high-frequency drinking + GLP-1 = pancreatitis caution).
**Final decision:** **Modify** (warmer helper).

### Q12.3 — Recreational drugs in last 6 months (universal baseline; pathway-overrideable per `Section 1K.3` question_override pattern)

**Hims source:** Step 63 "Have you taken any of the following recreational drugs in the past 6 months? We ask this question so your provider can have a complete picture of your current health and determine which treatment might be right for you. Cocaine / Kratom / Opiates/opioids / Methamphetamine (crystal meth) / Cannabis / No, none of these"
**MAIN voice:**
- prompt: "In the last 6 months, have you used any of these?"
- helper: "Honest answers stay with your provider. We need to know for medication safety."

**Schema:**
- `question_id`: `qb.domain.lifestyle.recreational_drugs_6mo_v1` | `tier`: 1
- `answer_type`: `multi_select` | `selection_cardinality`: `zero_or_more` | `requiredness`: `skippable_with_explicit_none`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null

**Choices:** Cocaine | Methamphetamine (crystal meth) | Opioids (heroin, fentanyl, prescription misuse) | Kratom | Cannabis | None of these
**`choice_values`:** `cocaine | methamphetamine | opioids | kratom | cannabis | none_of_these`

**`none_logic`:** `{mode: 'exclusive_with_other_choices', none_choice_value: 'none_of_these'}`

**Atoms emitted:**
- Per selected: `social_history.recreational_drug_<kind>_6mo = true`
- "None of these" → all denied at intake (`status: 'denied_at_intake'`)

**bloom_rewrite_note:** "Earlier draft expanded to 9 substances (added hallucinogens, MDMA, ketamine, plus split methamphetamine + opioids). User correction: keep the Hims 5-substance baseline at the universal Layer C level. Funnel parity + low-friction discipline. Pathways requiring deeper substance screening (mental_health_ssri for serotonergic interactions; cardiology_beta_blocker for cocaine focus; ED for poppers/inhalants) declare a `question_override` per `Section 1K.3` pathway override pattern — see `mod.domain.lifestyle.standard_baseline_v1` preamble for the worked extensibility examples. Atom output is preserved at universal baseline (5 substances atoms remain emittable by every override per CI lint atom-output-cannot-decrease rule); overrides MAY emit additional substance atoms in their own pathway namespaces."
**Issues found:** Earlier 9-option list was over-collection at the funnel layer. Hims's 5-option set is the correct universal baseline; pathway-specific depth is the architectural pattern (see `Section 1K.3` `question_overrides`).
**Recommended rewrite:** Adopt Hims 5-option baseline; depth via pathway override pattern.
**Branching adjustments:** Daily cannabis triggers `Section 1K.3` Branch 3 lifestyle_depth follow-up (Phase 2; Tier 2). Other substances → provider_review at safety preflight.
**Downstream effect:** `provider_review` (substance use affects medication selection).
**Final decision:** **Modify** (Hims 5-option parity; pathway depth via `Section 1K.3` `question_overrides`; warm helper).

### Q12.4 — Nicotine use

**Hims source:** Step 64 "Are you currently using any nicotine replacement products to help you stop smoking? We ask this to make sure there are no interactions with potential treatments. No / Yes"
**MAIN voice:**
- prompt: "Do you use nicotine?"
- helper: "Cigarettes, vapes, dip, pouches, or nicotine replacement (patches, gum). Affects cardiovascular risk and some medications."

**Schema:**
- `question_id`: `qb.domain.lifestyle.nicotine_use_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null

**Choices:** No, never | Used to, but quit | Yes, currently
**`choice_values`:** `never | quit | current`

**Atoms emitted:**
- Positive: `social_history.nicotine_status` (metadata: `{value}`)
- Denied: `never` is a meaningful clinical answer

**Issues found:** Hims asks ONLY about nicotine replacement (an oddly narrow framing). MAIN broadens to ALL nicotine use (which is the actually clinically relevant question for CV + Rx interactions). Helper enumerates forms so patient understands scope. 3-option set captures historical smokers (quit smokers have residual CV risk for ~5-10 years per CDC).
**Recommended rewrite:** Broaden Hims question to all nicotine; 3-option set.
**Branching adjustments:** `current` triggers downstream `Section 1K.3` Branch 3 lifestyle_depth follow-up (form + amount per day) per Phase 2.
**Downstream effect:** `provider_review` (CV risk; some Rx contraindications).
**Final decision:** **Modify** (Hims's narrow framing → broad nicotine question; 3-option set).

### Q12.5 — Sleep quality

**Hims source:** Hims doesn't explicitly ask sleep quality (Step 65 asks resting heart rate which is GLP-1-specific). MAIN adds Tier 3 sleep question for personalization + downstream OSA screening.
**MAIN voice:**
- prompt: "How's your sleep, typically?"
- helper: "Optional. Helps us personalize your care."

**Schema:**
- `question_id`: `qb.domain.lifestyle.sleep_quality_v1` | `tier`: 3
- `answer_type`: `severity_ordinal` | `selection_cardinality`: `optional_blank_allowed` | `requiredness`: `optional`
- `answer_role`: `preference` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `lifestyle_behavior` | `downstream_effect`: `personalization`
- `render_when`: null

**Choices:**
- 1: Poor (rarely sleep well)
- 2: Fair (sometimes restless)
- 3: OK (most nights are fine)
- 4: Good (usually wake refreshed)
- 5: Great (consistently good sleep)

**Atoms emitted:**
- Positive: `social_history.sleep_quality_self_report` (metadata: `{ordinal: 1-5}`)
- Denied: blank acceptable

**Issues found:** Tier 3 (NICE TO HAVE; A/B-testable). Subjective self-report; not a substitute for OSA screening (which is in `mod.domain.cardiometabolic.baseline_history_v1` if patient selected it).
**Recommended rewrite:** Keep optional + Tier 3.
**Branching adjustments:** None at intake. Downstream personalization only.
**Downstream effect:** `personalization` (drives wellness coaching content selection).
**Final decision:** **Modify** (new Tier 3 question; A/B-testable).

---

## Layer C audit summary

| Question | Tier | answer_role | atom_kind | downstream_effect | none_logic? | Decision |
|---|---|---|---|---|---|---|
| Q8.1 Cardiometabolic conditions | 1 | clinical_safety | safety | provider_review | exclusive_with_other_choices | Modify |
| Q8.2 Other conditions free-text | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q8.3 Family history | 3 | clinical_context | clinical_history | personalization | exclusive_with_other_choices | Modify |
| Q9.1 GI conditions | 1 | clinical_safety | safety | provider_review | exclusive_with_other_choices | Modify |
| Q10.1 Pregnancy active | 1 | clinical_safety | safety | hard_stop | n/a | Modify |
| Q10.2 Trying to conceive | 1 | clinical_safety | safety | provider_review | n/a | Modify |
| Q10.3 Breastfeeding | 1 | clinical_safety | safety | hard_stop | n/a | Modify |
| Q10.4 Using contraception | 1 | clinical_safety | safety | provider_review | n/a | Modify |
| Q10.5 Contraception method | 1 | clinical_safety | safety | provider_review | n/a | Modify |
| Q11.1 MH diagnosis | 1 | clinical_safety | safety | provider_review | n/a | Modify |
| Q11.2 MH meds | 1 | clinical_safety | safety | provider_review | n/a | Modify |
| Q11.3 Self-harm | 1 | clinical_safety | safety | hard_stop | n/a | Modify (CRITICAL helper) |
| Q12.1 Activity level | 2 | clinical_context | lifestyle_behavior | personalization | n/a | Modify |
| Q12.2 Alcohol binge | 2 | clinical_safety | lifestyle_behavior | provider_review | n/a | Modify |
| Q12.3 Recreational drugs | 1 | clinical_safety | safety | provider_review | exclusive_with_other_choices | Modify |
| Q12.4 Nicotine | 1 | clinical_safety | safety | provider_review | n/a | Modify |
| Q12.5 Sleep | 3 | preference | lifestyle_behavior | personalization | n/a | Modify |

**Verdict:** 0 Keep + 17 Modify. No Remove. Net: spec rewrites Hims's domain-baseline questions in MAIN voice with: warmer reassurance helpers (especially MH/safety questions); expanded inclusivity (gender, ethnicity, recreational drugs); structural improvements (anaphylaxis severity options; nicotine broad-vs-narrow); 3-tier classification applied; multi-instance discipline applied where appropriate; `exclusive_with_other_choices` `none_logic` enforced on safety multi-selects.

## Cross-pathway reuse projection

5 domain modules CANDIDATES for reuse across future MAIN clinical pathways where clinically appropriate:
- `cardiometabolic.baseline_history` → GLP-1 / TRT / ED / Female HRT (CV risk universal)
- `gastrointestinal.baseline_history` → GLP-1 critical; Female HRT/mental_health less critical
- `reproductive.pregnancy_status_baseline` → GLP-1 / Female HRT / mental_health Rx / hair loss minoxidil
- `mental_health.baseline` → all clinical pathways
- `lifestyle.standard_baseline` → all clinical pathways

~17 questions reusable per future pathway; pathway-specific extensions (e.g., GLP-1 cv_safety_extended for MEN-2) live in Layer D per `Section 1K.3` contextual extension principle.

## Phase 1 audit summary (across Layer A + B + C)

| Layer | Modules | Questions defined | Decision |
|---|---|---|---|
| A — Universal | 4 | 14 | 2 Keep + 12 Modify (Q1.3 split into Q1.3a/b/c — 2 conditional follow-ups added; Q1.2 returns to Hims binary parity) |
| B — Clinical core | 3 | 8 | 0 Keep + 8 Modify |
| C — Domain | 5 | 17 | 0 Keep + 17 Modify |
| **Total** | **12** | **39** | **2 Keep + 37 Modify** |

**Per-patient render counts:**
- Cis patient: ~37 questions rendered (Q1.3b + Q1.3c skipped)
- Non-cis patient: ~39 questions rendered (full Q1.3 sequence)

Net: spec is a Hims-cadence rewrite in MAIN voice with structural improvements (atomization + multi-instance modeling + tier classification + warmer trust-building). Demographic over-collection corrected per `Section 1K.3` directly-answered-fields rule + pathway override pattern: (a) Q1.2 biological sex Male/Female binary matching Hims (rare cases handled via downstream Mode F + pathway-specific anatomy questions); (b) Q1.3 redesigned as two-question alignment + asymmetric conditional deeper branch + optional pronouns (low-friction for cis; respectful for non-cis; clinically safe per architectural rule); (c) Q1.6 ethnicity 9 Hims-equivalent options; (d) Q12.3 recreational drugs 5 Hims-equivalent substances baseline + pathway-specific extensions per `Section 1K.3` `question_overrides` (mental_health_ssri 12-substance; cardiology cocaine-focused 30d; ED poppers extension). Preserves Hims's brevity + sequencing while adopting MAIN architecture.

## Next deliverable

Phase 2 (DEFERRED to next checkpoint): Layer D pathway-specific GLP-1 modules (9 modules; ~26 baseline + ~25-32 conditional follow-ups across 7 binding branch families) — `repo/intake/modules/pathway/glp1/*.ts` translation source spec.
