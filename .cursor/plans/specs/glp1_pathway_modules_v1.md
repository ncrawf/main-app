# GLP-1 Pathway-specific modules — Layer D spec v1

**Date:** 2026-05-03
**Stage:** 2 Phase 2.2.2 — Layer D authoring (6 of ~9 modules; Module 18 cv_safety_extended added in this checkpoint)
**Clinical CODEOWNER:** founder (board-certified MD)
**Architecture pin:** `Section 1K.3` (atomization + 4-layer module taxonomy + answer mechanics + pathway override + directly-answered-fields rule) + `Section 1K.4` (question bank + versioning) + `Section 1K.5.A` (clinical assertion layer; concept registry organized by domain) + `Section 1K.19` (intake repository + control model) + `Section 1Q.15` (GLP-1 vertical slice; 24 rules / 25 templates) + `Section 1Q.16` (adversarial pre-runtime gate)
**Reference funnel:** [.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md](.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md)

## Scope

Layer D pathway-specific GLP-1 modules — Phase 2.2.2 (6 of ~9 total; Module 18 cv_safety_extended added). Layer D modules collect pathway-specific facts that extend Layer A/B/C baselines OR capture pathway-unique data (per `Section 1K.3` 4-layer taxonomy). Atoms emitted by Layer D STILL live in domain registry files (`repo/clinical-concepts/<domain>.ts`) per `Section 1K.3` atomization principle; the MODULE is pathway-owned because the question context is pathway-specific. The only `atom.pathway.glp1.*` namespace atom in this checkpoint is `atom.pathway.glp1.weight_loss_goal_band` (a pathway-unique fact; not a clinical concept). Module 16's motivation + commercial + educational atoms live in `repo/clinical-concepts/intent.ts` under `intent.weight_loss_*` and `intent.treatment_*` namespaces. Module 17's eating disorder atoms live in `repo/clinical-concepts/mental_health.ts` (extends `mod.domain.mental_health.baseline_v1` Phase 1 Module 11 per `Section 1K.3` contextual extension). Module 18's thyroid/endocrine/cardiac atoms live in `repo/clinical-concepts/endocrine.ts` + `repo/clinical-concepts/cardiovascular.ts` + `repo/clinical-concepts/family_history.ts` (extends `mod.domain.cardiometabolic.baseline_history_v1` Phase 1 Module 8 per `Section 1K.3` contextual extension; adds GLP-1-specific FDA-boxed conditions that aren't worth asking in general-population baseline).

**6 modules in this file:**
1. `mod.pathway.glp1.weight_history_v1` — 5 questions (height + current weight + weight loss goal band + max-weight Y/N + max-weight value if not current)
2. `mod.pathway.glp1.weight_loss_attempts_v1` — 2 questions (prior attempts Y/N + methods multi-select)
3. `mod.pathway.glp1.prior_glp1_use_v1` — 8 questions (status + which GLP-1 + dose + duration + weight lost + side effects + when stopped + why stopped)
4. `mod.pathway.glp1.motivation_and_goals_v1` — 8 questions (primary motivation + treatment priority + 4 educational screens + treatment-in-mind preference + goal benefits multi-select; mix of motivation / commercial_confidence / educational_trust answer_roles)
5. `mod.pathway.glp1.eating_disorder_screen_v1` — 4 questions (symptom screen + diagnosis history + diagnosis subtype + current treatment)
6. `mod.pathway.glp1.cv_safety_extended_v1` — 4 questions (personal history of MTC/MEN-2/Long QT + family history of same + family sudden death under 40 Y/N + cause of death conditional)

**Total: 31 questions defined.**

**Per-patient render counts (varies by branch):**
- GLP-1-naive patient with no prior weight-loss attempts + no ED history + no family sudden death: ~20 questions rendered (Q13.1-Q13.4 + Q14.1 + Q15.1 + 8 Module 16 baseline + Q17.1 + Q17.2 + Q18.1 + Q18.2 + Q18.3; Q13.5 / Q14.2 / Q15.2-Q15.8 / Q17.3 / Q17.4 / Q18.4 skipped)
- GLP-1-naive patient with prior diet attempts + no ED history + no family sudden death: ~21 questions (above + Q14.2)
- Current GLP-1 patient (Q15.1 = currently) + no ED history + no family sudden death: ~25 questions (Q15.2-Q15.6 added; Q15.7 + Q15.8 skipped)
- Past GLP-1 patient (Q15.1 = past) + no ED history + no family sudden death: ~27 questions (full Module 15 cascade)
- Any patient with ED diagnosis history: add 2 questions (Q17.3 diagnosis subtype + Q17.4 current treatment)
- Any patient with family sudden death under 40: add 1 question (Q18.4 cause of death)
- Any patient with MTC or MEN-2 personal OR family history: session closes with `denied_contraindication_absolute` per `Section 1Q.15` — downstream modules (19, 20, 21) don't render; see `Section 1J` Stage 1 hard-stop semantics
- Module 16 (motivation + educational + commercial_confidence) renders for all patients regardless of GLP-1 history; positioned in pathway file AFTER Module 13 weight history (so BMI personalized Q16.7 has the prior atoms it needs). Module 17 (eating disorder screen) renders for all patients; positioned AFTER Module 15. Module 18 (cv_safety_extended) renders for all patients; positioned AFTER Module 17 and BEFORE Modules 19-21 so thyroid/MEN-2 hard-stop fires before downstream surgery/GI/consent modules are wasted work.

## MAIN voice principles (binding; reused from Phase 1)

**Tone direction:** clinical product with subtle warmth. Apply judgment.

**Anchoring rule (binding):** in multi-step cascades, follow-up question prompts MUST anchor to a meaningful noun, not "it" or other unanchored pronouns. Three valid anchoring patterns: (a) drug-class anchor (default; `"your GLP-1"`); (b) specific-drug anchor when single drug confirmed and single follow-up (`"your Wegovy"` via `patient_label_template_refs` per `Section 1K.4`); (c) most-recent-instance anchor when multi-drug (`"your most recent GLP-1"`).

**Required vs answer-option discipline:** don't make a question `optional` if you want the data. If patients might genuinely not know, give them an answer option (`"I don't have a specific number"`, `"I don't remember"`, `"I'm not sure"`) and keep `requiredness: required_to_continue`. `optional` is reserved for genuinely-low-priority signal (e.g., narrative free-text patient could skip with no clinical loss).

### Voice principles

- Direct over pretty. Short sentences.
- Warm not saccharine. "Thanks for sharing — this helps us tailor your care" not "We're SO excited!"
- Clinically accurate. Don't euphemize.
- Educational micro-copy after sensitive questions (Hims cadence).
- Inclusive but not preachy.
- No false urgency. No transformation hype.
- ~7th-grade reading level.

---

## Module 13 — `mod.pathway.glp1.weight_history_v1`

**`module_id`:** `mod.pathway.glp1.weight_history_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical (BMI computation + GLP-1 eligibility floor + dose calibration)
**`pathways`:** `glp1` only (Layer D pathway-specific; not reused across non-weight-management pathways)
**`required_for`:** eligibility, safety, dose calibration
**`assertion_group_emit_trigger`:** `module_complete` (composite emission of trackable vitals + intent atoms in same DB transaction)
**Atom domain:** `vitals` (height + weight measurements live in `repo/clinical-concepts/vitals.ts`) + `intent` (`atom.pathway.glp1.weight_loss_goal_band` lives in `repo/clinical-concepts/intent.ts` under `intent.pathway_glp1_*` prefix per `Section 1K.3` Layer D atom-namespace exception)

### Q13.1 — Height

**Hims source:** Step 22-23 "What is your height? Please enter your height in feet and inches. Feet 5 / Inches 11"
**MAIN voice:**
- prompt: "What's your height?"
- helper: "We use this to calculate BMI."

**Schema:**
- `question_id`: `qb.pathway.glp1.weight_history.height_v1` | `tier`: 1
- `answer_type`: `numeric` (composite: feet integer + inches integer; resolver normalizes to cm) | `selection_cardinality`: `required_blank_not_allowed` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)
- `is_trackable`: false (height is essentially static for adults; refresh policy per `Section 1K.5` `static_no_refresh` for adults; `quarterly_180d` for adolescents — not in V1 scope)

**Atoms emitted:**
- Positive: `vital.height_cm` (metadata: `{value_cm: number, source_unit: 'feet_inches', source_value: {feet, inches}}`)
- Denied: n/a (required)

**Issues found:** Hims uses ft+in for US patients, which is correct (don't force metric on a US-first product). MAIN's wording is slightly tighter ("What's your height?" vs Hims's "Please enter your height in feet and inches"). Resolver normalizes feet+in → cm at write time so downstream rules (BMI, dose calibration) consume one canonical unit per `Section 1L.6` LOINC discipline.
**Recommended rewrite:** Adopt MAIN voice; preserve Hims's ft+in input UX.
**Branching adjustments:** None.
**Downstream effect:** `provider_review` (feeds BMI computation per `Section 1K.9` `intake_derived_score`; BMI is the eligibility input for `rule.glp1.eligibility.bmi_threshold` per `Section 1Q.15`).
**Final decision:** **Modify** (tighter voice; preserve Hims input UX).

### Q13.2 — Current weight

**Hims source:** Step 22-23 "What is your current weight? Please enter your current weight in pounds (lbs). Pounds 170"
**MAIN voice:**
- prompt: "What's your current weight?"
- helper: "Best estimate is fine. We'll track this over time."

**Schema:**
- `question_id`: `qb.pathway.glp1.weight_history.current_weight_v1` | `tier`: 1
- `answer_type`: `numeric` (lbs integer; resolver normalizes to kg) | `selection_cardinality`: `required_blank_not_allowed` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline; renders right after Q13.1)
- `is_trackable`: true (`field_name`: `weight_kg`; appended to `patient_state_observations` per `Section 1M`)
- `freshness_profile`: `time_sensitive_30d` (weight is a trackable measurement with 30-day freshness for refill decisions per `Section 1K.5`)

**Atoms emitted:**
- Positive: `vital.weight_kg` (metadata: `{value_kg: number, source_unit: 'lbs', source_value: lbs, source_type: 'intake', authored_by: 'patient'}`); ALSO writes first row to `patient_state_observations` `field_name = weight_kg` per `Section 1M`
- Denied: n/a (required)

**Issues found:** Hims captures weight on the same screen as height (composite form). MAIN preserves that UX (single screen captures both). Helper softens the precision pressure ("Your best estimate is fine") which Hims doesn't say — patients often don't have a recent scale weight; forcing precision delays the funnel.
**Recommended rewrite:** Adopt MAIN voice with permission-to-estimate helper.
**Branching adjustments:** Combined with Q13.1, computes BMI per `Section 1K.9` `intake_derived_score`. `rule.glp1.eligibility.bmi_threshold` per `Section 1Q.15` consumes the derived BMI atom (BMI ≥ 27 with comorbidity OR BMI ≥ 30 without; per FDA labels for semaglutide / tirzepatide weight-management indications).
**Downstream effect:** `provider_review` (BMI eligibility floor; dose calibration per Endocrine Society guidance).
**Final decision:** **Modify** (permission-to-estimate helper; preserve Hims composite-form UX).

### Q13.3 — Weight loss goal (delta band; required)

**Hims source:** Step 24 "What is your goal weight? Please enter your desired weight in pounds (lbs). Pounds 155" + Step 09 "What's your weight loss goal? Losing 1-15 lbs / Losing 16-50 lbs / Losing 51+ lbs / Not sure, I just need to lose weight" — MAIN merges the two patterns: delta-banded framing (Step 09) + post-account clinical placement (Step 24).
**MAIN voice:**
- prompt: "How much do you want to lose?"
- helper: "Best estimate is fine."

**Schema:**
- `question_id`: `qb.pathway.glp1.weight_history.weight_loss_goal_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `preference` | `intent_of_answer_set`: `motivation_priming`
- `entity_kind`: `single_value` | `atom_kind`: `preference_motivation` | `downstream_effect`: `personalization`
- `render_when`: null (baseline; renders right after Q13.2)
- `is_trackable`: false (goal is intent, not measurement; appended via `intake_response` only)

**Choices:** Up to 10 lbs | 10-20 lbs | 20-40 lbs | 40-80 lbs | More than 80 lbs | I don't have a specific number
**`choice_values`:** `up_to_10 | 10_to_20 | 20_to_40 | 40_to_80 | more_than_80 | no_specific_number`

**Atoms emitted:**
- Source-of-truth atom: `atom.pathway.glp1.weight_loss_goal_band` (metadata: `{band: <choice_value>, source_unit: 'lbs'}`)
- Derived value (display only; computed at read time per `Section 1K.9` `intake_derived_score`; NOT stored as primary atom): `intake_derived_score.glp1_estimated_goal_weight_kg = current_weight_kg - midpoint_of_band_kg` where midpoints are `up_to_10` → 5 lbs (2.27 kg); `10_to_20` → 15 lbs (6.80 kg); `20_to_40` → 30 lbs (13.61 kg); `40_to_80` → 60 lbs (27.22 kg); `more_than_80` → 100 lbs (45.36 kg) conservative; `no_specific_number` → not computed (downstream display falls back to "patient hasn't set a specific goal")
- Denied: n/a (`required_to_continue`; "I don't have a specific number" is the don't-know answer option, not a skip)

**Issues found:** Original draft used numeric absolute goal weight + optional. Two product-feel problems: (a) absolute target forces patients to do mental math ("I'm 200, I want to lose 25, so... 175") when they actually think in delta terms ("I want to lose 25 lbs"); (b) `requiredness: optional` leaks optionality into the funnel — if we're asking, we want the data. Banded delta + required + don't-know answer option fixes both. Hims validates the delta-banded pattern at Step 09. Banding by doubling-pattern (10/20/40/80) clusters similar magnitudes naturally — patients say "I want to lose 30 lbs" or "50 lbs", not "25" — so band edges at round 10s read more naturally than at 25s. Atom architecture: band is source of truth (binding per spec's banded-numeric atom rule); derived numeric goal weight computed at display time only, never stored as primary atom.
**Recommended rewrite:** Adopt delta-banded single_select with 6 options (5 magnitude bands + don't-know); required; banded source-of-truth atom; derived numeric for display only.
**Branching adjustments:** `Section 1K.9` `intake_derived_score.glp1_estimated_goal_weight_kg` + `intake_derived_score.glp1_weight_loss_target_pct = midpoint_of_band / current_weight` computed when band is concrete (skipped for `no_specific_number`); consumed by motivation rules in `Section 1Q.15` for personalization (e.g., "you're aiming for ~10% loss — most patients see 5-15% over a year" personalized template).
**Downstream effect:** `personalization` (drives BMI-comparison display per Hims Step 25 + content selection in Hims-style educational screens).
**Final decision:** **Modify** (delta-banded + required + banded-atom architecture; replaces numeric absolute target).

### Q13.4 — Is current weight your highest ever?

**Hims source:** Step 30 "Is your current weight the most you have ever weighed? Yes / No"
**MAIN voice:**
- prompt: "Is your current weight the most you've ever weighed?"
- helper: "We ask so we can understand your weight trend over time."

**Schema:**
- `question_id`: `qb.pathway.glp1.weight_history.weight_max_is_current_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline; renders right after Q13.3)

**Choices:** Yes | No
**`choice_values`:** `yes | no`

**Atoms emitted:**
- Positive: `vital.weight_kg_max_is_current` (metadata: `{value: 'yes' | 'no'}`)
- Denied: n/a (required)

**Issues found:** Hims asks this exactly the same way; clinical-history flag for weight trajectory (was the patient losing/gaining/stable before they reached current weight?). Helper adds the WHY which Hims doesn't include — patients prefer to know why we're asking.
**Recommended rewrite:** Adopt MAIN voice with explanatory helper.
**Branching adjustments:** `no` → render Q13.5 (highest ever weight). `yes` → skip Q13.5 (patient confirms current = max).
**Downstream effect:** `provider_review` (provider sees the trajectory hint; informs weight-loss-attempt context).
**Final decision:** **Modify** (warmer helper; preserve Hims binary + sequencing).

### Q13.5 — Highest ever weight (conditional; renders only when Q13.4 = no)

**Hims source:** Implicit (Hims doesn't explicitly capture max-weight value; MAIN adds for clinical trajectory).
**MAIN voice:**
- prompt: "What's the most you've ever weighed?"
- helper: "Best estimate is fine."

**Schema:**
- `question_id`: `qb.pathway.glp1.weight_history.weight_max_value_v1` | `tier`: 2
- `answer_type`: `numeric` (lbs integer; resolver normalizes to kg) | `selection_cardinality`: `required_blank_not_allowed` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.weight_history.weight_max_is_current_v1', equals: 'no'}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Atoms emitted:**
- Positive: `vital.weight_kg_max_self_reported` (metadata: `{value_kg: number, source_unit: 'lbs', source_value: lbs, source_type: 'intake', authored_by: 'patient'}`)
- Denied: n/a (conditionally required)

**Issues found:** New question (not in Hims funnel as observed). Adds clinical trajectory signal: a patient currently 200 lbs whose max ever was 240 lbs has a different clinical picture than one currently 200 lbs whose max ever was 200 lbs (former is already losing; latter is at peak). Helper preserves permission-to-estimate consistent with Q13.2.
**Recommended rewrite:** Adopt as new Tier 2 conditional question.
**Branching adjustments:** None at intake; downstream provider workspace surfaces the delta `(weight_max - weight_current)` for clinical context.
**Downstream effect:** `provider_review` (trajectory context).
**Final decision:** **Modify** (new question; not in Hims funnel; clinically additive).

---

## Module 14 — `mod.pathway.glp1.weight_loss_attempts_v1`

**`module_id`:** `mod.pathway.glp1.weight_loss_attempts_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical (prior attempts inform GLP-1 eligibility framing — most US payers require documented prior attempts; informs FDA-label rationale of "as adjunct to reduced-calorie diet and increased physical activity")
**`pathways`:** `glp1` only (Layer D pathway-specific; some elements may be reused for future bariatric / mental-health-eating-disorder pathways but not in V1)
**`required_for`:** clinical context, motivation framing, payer documentation
**`assertion_group_emit_trigger`:** `module_complete`
**Atom domain:** `intent` (`intent.prior_weight_loss_*`)

### Q14.1 — Have you tried to lose weight in the past 5 years?

**Hims source:** Implicit (Hims captures motivation early at Step 5 but doesn't explicitly ask about prior attempts; MAIN adds for clinical context + payer documentation).
**MAIN voice:**
- prompt: "In the last 5 years, have you tried to lose weight?"
- helper: "Including diet, exercise, programs, medications, or surgery — anything counts."

**Schema:**
- `question_id`: `qb.pathway.glp1.weight_loss_attempts.has_attempted_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)

**Choices:** Yes | No
**`choice_values`:** `yes | no`

**Atoms emitted:**
- Positive: `intent.prior_weight_loss_attempt_history` (metadata: `{value: 'yes' | 'no', timeframe: 'last_5_years'}`)
- Denied: `no` is a meaningful clinical answer; not a denial of the question

**Issues found:** New question (not explicit in Hims funnel I've seen). Adds clinical context for provider + payer documentation. 5-year window is the standard prior-authorization timeframe for US commercial payers (BCBS / Cigna / Aetna typically require documented prior weight-loss attempts within 3-5 years for GLP-1 PA). Helper enumerates examples so patients understand scope (some patients don't think "diet" counts as "trying to lose weight").
**Recommended rewrite:** Adopt as new Tier 2 baseline.
**Branching adjustments:** `yes` → render Q14.2 (methods tried). `no` → skip Q14.2 + Q14.3.
**Downstream effect:** `provider_review` (informs visit framing + payer documentation per `Section 1Q.15` `rule.glp1.eligibility.prior_attempts_for_payer_pa`).
**Final decision:** **Modify** (new Tier 2 question; clinically + payer-additive).

### Q14.2 — What methods have you tried? (conditional; renders only when Q14.1 = yes)

**Hims source:** Implicit (Hims doesn't break this down; MAIN adds for richer clinical context).
**MAIN voice:**
- prompt: "What methods have you tried?"
- helper: "Select all that apply."

**Schema:**
- `question_id`: `qb.pathway.glp1.weight_loss_attempts.methods_v1` | `tier`: 2
- `answer_type`: `multi_select` | `selection_cardinality`: `one_or_more` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `multi_instance` | `instance_scope`: `aggregate` (per-method follow-ups deferred to Phase 2.2; aggregate atom emitted per method in V1)
- `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.weight_loss_attempts.has_attempted_v1', equals: 'yes'}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices:** Diet (eating differently or restricting) | Exercise (regular activity / gym / classes) | Prescription weight-loss medication | Bariatric surgery or weight-loss procedure | Commercial program (Weight Watchers, Noom, Jenny Craig, etc.) | Supplements or OTC products | Other
**`choice_values`:** `diet | exercise | rx | bariatric_surgery | commercial_program | supplement_otc | other`

**Atoms emitted:**
- Per selected: `intent.prior_weight_loss_method_<kind>` (e.g., `intent.prior_weight_loss_method_diet`, `intent.prior_weight_loss_method_exercise`, `intent.prior_weight_loss_method_rx`, etc.; metadata: `{kind, timeframe: 'last_5_years', context_key: <kind>}` per `Section 1K.5.A` multi-instance discipline)
- Denied: n/a (`one_or_more` cardinality; required when rendered)

**Issues found:** No `none_logic` because cardinality is `one_or_more` (patient can't reach this question without saying yes to Q14.1 — at least one positive selection is implied); the absence of "None of these" is intentional (would be self-contradictory with Q14.1 = yes). The `bariatric_surgery` choice CROSS-REFERENCES the `mod.clinical_core.surgery_history_v1` baseline (Phase 1) per `Section 1K.3` contextual extension principle — bariatric surgery selection here flags clinical-history context, but the surgery atom emission lives in clinical_core (this question records the WEIGHT-LOSS-ATTEMPT FRAMING; surgery atoms live in `procedure.gastric_bypass_history` etc. emitted by Phase 2.2 `mod.pathway.glp1.bariatric_surgery_extended_v1` per Section 1K.3 contextual extension).
**Recommended rewrite:** Adopt as new Tier 2 conditional with 7-option multi-select; `instance_scope: aggregate` for V1 (per-method depth deferred).
**Branching adjustments:** Selection of `bariatric_surgery` cross-references downstream `mod.pathway.glp1.bariatric_surgery_extended_v1` (Phase 2.2). Selection of `rx` cross-references downstream `mod.pathway.glp1.prior_glp1_use_v1` (this module — patient who selects `rx` here may or may not have used GLP-1; Q15.1 captures that distinction directly).
**Downstream effect:** `provider_review` (multi-method context informs visit framing + provider personalization).
**Final decision:** **Modify** (new Tier 2 conditional with multi-instance discipline; per-method depth deferred to Phase 2.2).

---

## Module 15 — `mod.pathway.glp1.prior_glp1_use_v1`

**`module_id`:** `mod.pathway.glp1.prior_glp1_use_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical (CRITICAL — prior GLP-1 use directly informs starting dose, contraindication screening, and adherence-aware dose decisions per `Section 1Q.16` Refinement 1 `rule.glp1.rx.adherence_gap_dose_decision`)
**`pathways`:** `glp1` only (Layer D pathway-specific; not reused — TRT/HRT/ED have their own prior-Rx-use modules)
**`required_for`:** safety, dose calibration, eligibility (some payers exclude patients currently on a GLP-1 from new GLP-1 PA; some pathways restart-only after washout)
**`assertion_group_emit_trigger`:** `module_complete` (composite emission of medication + side-effect atoms in same DB transaction)
**Atom domain:** `medications` (drug-use + dose-band + duration-band + weight-lost-band + stop-date-band + stop-reason atoms live in `repo/clinical-concepts/medications.ts`) + `gastrointestinal` / `endocrine` (side-effect condition atoms live in respective domain registries per `Section 1K.5.A`)

### Q15.1 — Current/past/never GLP-1 use

**Hims source:** Step 56 "Are you currently or have you ever taken a GLP-1 medication? GLP-1s can include compounded semaglutide, compounded tirzepatide, Ozempic, Wegovy, Mounjaro and Zepbound. / I am currently taking a GLP-1 medication / I've taken a GLP-1 medication in the past but I'm not currently / I have never taken a GLP-1 medication"
**MAIN voice:**
- prompt: "Have you ever taken a GLP-1 medication?"
- helper: "GLP-1s include semaglutide (Ozempic, Wegovy), tirzepatide (Mounjaro, Zepbound), and compounded versions."

**Schema:**
- `question_id`: `qb.pathway.glp1.prior_glp1_use.status_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)

**Choices:** Yes, I'm currently taking one | Yes, I've taken one in the past but not now | No, I've never taken one
**`choice_values`:** `currently | past | never`

**Atoms emitted:**
- Positive: `medication.glp1_use_status` (metadata: `{value: 'currently' | 'past' | 'never'}`); ALSO emits derived flag `medication.glp1_exposure_history = (value !== 'never')` for downstream rules
- Denied: `never` is a meaningful clinical answer; provider sees "GLP-1 naive" in workspace

**Issues found:** Hims tightened wording is fine but verbose. MAIN trims helper while keeping the brand-name examples (patients recognize Ozempic/Wegovy/Mounjaro/Zepbound; clinical names alone wouldn't be self-evident). 3-option set is the same as Hims (currently / past / never) — no need to expand or restructure; this is the canonical Tier 1 safety screen.
**Recommended rewrite:** Tighter MAIN voice; preserve Hims 3-option semantics.
**Branching adjustments:** `currently` OR `past` → render Q15.2 + Q15.3 + Q15.4 + Q15.5 + Q15.6 (and Q15.7 + Q15.8 if `past`). `never` → skip all follow-ups; provider sees "GLP-1 naive" flag.
**Downstream effect:** `provider_review` (returning patient → adherence-aware dose decision per `Section 1Q.16` Refinement 1 `rule.glp1.rx.adherence_gap_dose_decision`; naive patient → standard starting dose).
**Final decision:** **Modify** (tighter helper; preserve Hims 3-option semantics).

### Q15.2 — Which GLP-1(s) (conditional; renders when Q15.1 ∈ {currently, past})

**Hims source:** Implicit (Hims captures specific drug via medications list at Step 57; MAIN asks directly here for cleaner cascade + brand-recognition capture).
**MAIN voice:**
- prompt: "Which of these have you taken?"
- helper: "Select all that apply."

**Schema:**
- `question_id`: `qb.pathway.glp1.prior_glp1_use.which_v1` | `tier`: 1
- `answer_type`: `multi_select` | `selection_cardinality`: `one_or_more` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `multi_instance` | `instance_scope`: `aggregate` (per-drug follow-ups deferred to Phase 2.2; aggregate atom emitted per drug in V1; Q15.3-Q15.6 capture details for the MOST RECENT drug only in V1 per per-instance discipline below)
- `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1', in: ['currently', 'past']}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices** (7 flat options; ordered by patient brand recognition; NO visual grouping headers per tone-lock + Section 1K.3 directly-answered patient UX):
1. Ozempic
2. Wegovy
3. Mounjaro
4. Zepbound
5. Compounded semaglutide or tirzepatide
6. Other or newer medication
7. I don't remember

**`choice_values`:** `ozempic | wegovy | mounjaro | zepbound | compounded | other_or_newer | dont_remember`

**Atoms emitted:**
- Per selected (brand-specific): `medication.glp1_<drug>_use` (e.g., `medication.glp1_ozempic_use`, `medication.glp1_wegovy_use`, `medication.glp1_mounjaro_use`, `medication.glp1_zepbound_use`; metadata: `{drug_kind: 'glp1', brand_name, generic_name, context_key: <drug>}` per multi-instance discipline)
- `compounded` selected → `medication.glp1_compounded_use = true` (metadata: `{generic_name_pending_clarification: true}`); drug class (sema vs tirze) derived from Q15.3 dose band OR provider Mode F clarification per `Section 1P.4` — clinically sufficient because compounded dosing varies by compounder anyway
- `other_or_newer` selected → `medication.glp1_other_specified = true`; provider Mode F clarification opens at safety preflight (catches Saxenda / Rybelsus / future approvals like retatrutide without spec churn)
- `dont_remember` selected → `medication.glp1_unknown_drug_use = true`; provider Mode F per `Section 1P.4` to clarify (many patients used a service-name like Hims / Sequence / Ro without knowing the underlying compound)
- Denied: n/a (`one_or_more` cardinality; required when rendered)

**Issues found:** Original draft (round 1) had 8 options + 3-header visual grouping (FDA-approved / off-label / compounded / other). Patient-think pushback (round 2): patients don't think "was my medication FDA-approved for weight loss?" — they think "I took Ozempic." Visual grouping was clinical taxonomy creep into patient UX. Round 3 reduction: drop visual grouping entirely; reduce to 7 flat options ordered by patient brand recognition (Ozempic > Wegovy > Mounjaro > Zepbound is the cultural awareness order; flat list scans faster than grouped). Compounded sema and compounded tirze combined into one line — UX simpler; clinical signal preserved via Q15.3 dose band disambiguation OR provider Mode F if needed. Saxenda dropped from explicit list — rare for weight loss now (Wegovy supplanted); folds into "Other or newer medication" which future-proofs for retatrutide / oral semaglutide / future approvals without spec maintenance churn. Generic names dropped from top 4 brand labels — informational noise for the patient; brand recognition is the scan target.
**Recommended rewrite:** 7 flat options ordered by patient recognition; brand-only labels for top 4; no visual grouping; combined compounded line; "Other or newer medication" catch-all (future-proofed); "I don't remember" honest catch-all.
**Branching adjustments:** `compounded` or `other_or_newer` or `dont_remember` → provider Mode F clarification opens at safety preflight (provider may request prior chart records per `Section 1G.7.6` clinical_required follow-up). Multiple selections (e.g., started Wegovy, switched to Zepbound) → V1 captures aggregate atoms; per-drug timeline (when started/stopped each) deferred to Phase 2.2 multi-instance follow-up.
**Downstream effect:** `provider_review` (specific drug informs starting dose + lockout rules — e.g., GLP-1 → DPP-4 inhibitor combination is a known adverse-event flag per FDA labels).
**Final decision:** **Modify** (7-option flat list; brand-recognition ordering; no visual grouping; future-proofed catch-all).

### Q15.3 — Most recent dose (conditional; renders when Q15.1 ∈ {currently, past})

**Hims source:** Implicit (Hims captures via medications list free-text; MAIN asks structurally for cleaner downstream consumption).
**MAIN voice:**
- prompt: "What's the most recent dose you took?"
- helper: "If you don't remember the exact number, pick the closest. We'll confirm with your provider."

**Schema:**
- `question_id`: `qb.pathway.glp1.prior_glp1_use.dose_recent_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1', in: ['currently', 'past']}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices** (binned across semaglutide + tirzepatide standard dose ranges):
- Lowest starter dose (e.g., semaglutide 0.25 mg / tirzepatide 2.5 mg)
- Low maintenance (e.g., semaglutide 0.5-1.0 mg / tirzepatide 5 mg)
- Mid maintenance (e.g., semaglutide 1.7 mg / tirzepatide 7.5-10 mg)
- High maintenance (e.g., semaglutide 2.4 mg / tirzepatide 12.5-15 mg)
- I don't remember

**`choice_values`:** `starter | low_maintenance | mid_maintenance | high_maintenance | dont_remember`

**Atoms emitted:**
- Positive: `medication.glp1_dose_recent_band` (metadata: `{band: 'starter' | 'low_maintenance' | 'mid_maintenance' | 'high_maintenance' | 'dont_remember', drug_context: from_q15_2}`)
- Denied: n/a (conditionally required)

**Issues found:** Banded dose (rather than free-text mg) is intentional — patients don't reliably know exact mg, but they do recognize "starter pen" vs "the higher dose pen." Band is sufficient signal for adherence-aware dose decision per `Section 1Q.16` Refinement 1. Provider confirms exact dose at visit.
**Recommended rewrite:** Adopt 5-option banded set.
**Branching adjustments:** `high_maintenance` + Q15.1 = `currently` → adherence-aware dose decision rule fires; provider may continue at high dose without re-titration if Q15.4 duration ≥ 8 weeks. `starter` + Q15.1 = `past` → restart at starter dose (no preserved titration).
**Downstream effect:** `provider_review` (starting dose calibration per Endocrine Society + FDA labels per `Section 1Q.15`).
**Final decision:** **Modify** (new banded dose question; not in Hims; clinically critical for dose calibration).

### Q15.4 — Duration on your GLP-1 (conditional; renders when Q15.1 ∈ {currently, past})

**Hims source:** Implicit (Hims doesn't capture; MAIN adds for adherence-aware dose decision per Section 1Q.16 Refinement 1).
**MAIN voice:**
- prompt: dynamic per Q15.1 status — `"How long have you been taking your GLP-1?"` (when `currently`) / `"How long were you on your GLP-1?"` (when `past`); resolved via `patient_label_template_refs` per `Section 1K.4`
- helper: "Best estimate. Helps us decide whether to continue your current dose or restart titration."

**Schema:**
- `question_id`: `qb.pathway.glp1.prior_glp1_use.duration_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1', in: ['currently', 'past']}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices:**
- Less than 4 weeks
- 4-8 weeks
- 8-16 weeks (~2-4 months)
- 16-32 weeks (~4-8 months)
- More than 8 months
- I don't remember

**`choice_values`:** `less_than_4w | 4_to_8w | 8_to_16w | 16_to_32w | more_than_8mo | dont_remember`

**Atoms emitted:**
- Positive: `medication.glp1_duration_band` (metadata: `{band: <choice>, drug_context: from_q15_2}`)
- Denied: n/a (conditionally required)

**Issues found:** Original prompt `"How long have you been on it (or were you on it)?"` had unanchored "it" — sloppy in a multi-step cascade per the `Section 1K.3` anchoring rule. Replaced with dynamic per-status anchoring: `"your GLP-1"` is the universal anchor that scales when patient used multiple drugs; resolver picks past vs present tense per Q15.1 answer. Banded duration (rather than weeks integer) is intentional — patients don't reliably remember exact start dates; bands cover the clinically-meaningful adherence-decision thresholds (4-week titration window per FDA labels; 8-week minimum for dose-stability claim per Endocrine Society guidance). Helper anchors WHY without leaking system narration.
**Recommended rewrite:** Adopt 6-option banded set with dynamic anchored prompt.
**Branching adjustments:** Q15.4 + Q15.3 + Q15.1 jointly feed `Section 1Q.16` Refinement 1 `rule.glp1.rx.adherence_gap_dose_decision`. Example: Q15.1 = `currently` + Q15.3 = `mid_maintenance` + Q15.4 = `more_than_8mo` → continue at current dose without re-titration.
**Downstream effect:** `provider_review` (adherence-aware dose decision per Section 1Q.16 Refinement 1).
**Final decision:** **Modify** (new banded duration question; clinically critical for adherence-aware dose decision).

### Q15.5 — Weight lost on your GLP-1 (conditional; renders when Q15.1 ∈ {currently, past}) — REPOSITIONED

**Cascade reordering rationale:** Outcome first, then details. Did the GLP-1 work? matters more than when/why the patient stopped, so weight-lost moves earlier in the cascade. New order: status → which → dose → duration → **weight lost** → side effects → (past only) when stopped → why stopped.

**Hims source:** Implicit (Hims doesn't capture; MAIN adds for restart-plan motivation framing + non-responder flag).
**MAIN voice:**
- prompt: "How much weight did you lose on your GLP-1?"
- helper: "Best estimate. Helps your provider set realistic expectations."

**Schema:**
- `question_id`: `qb.pathway.glp1.prior_glp1_use.weight_lost_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1', in: ['currently', 'past']}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices** (7 doubling-pattern bands + outcome flag + don't-know):
- Less than 5 lbs
- 5-10 lbs
- 10-20 lbs
- 20-40 lbs
- More than 40 lbs
- I didn't lose weight (or gained)
- I don't remember

**`choice_values`:** `less_than_5 | 5_to_10 | 10_to_20 | 20_to_40 | more_than_40 | none_or_gained | dont_remember`

**Atoms emitted:**
- Source-of-truth atom: `medication.glp1_weight_lost_band` (metadata: `{band: <choice_value>, source_unit: 'lbs', drug_context: from_q15_2, duration_band: from_q15_4}`)
- `none_or_gained` selected → flags non-responder / rebounder cohort for provider review (clinically critical: motivation framing differs vs partial-responder)
- Derived value (display only; computed at read time per `Section 1K.9`; NOT stored as primary atom): `intake_derived_score.glp1_estimated_weight_lost_kg = midpoint_of_band_kg` where midpoints are `less_than_5` → 2.5 lbs (1.13 kg); `5_to_10` → 7.5 lbs (3.40 kg); `10_to_20` → 15 lbs (6.80 kg); `20_to_40` → 30 lbs (13.61 kg); `more_than_40` → 60 lbs (27.22 kg) conservative; `none_or_gained` / `dont_remember` → not computed
- Denied: n/a (`conditionally_required`; "I don't remember" is the don't-know answer option)

**Issues found:** Original draft used numeric input + Tier 3 optional. Two problems: (a) numeric input is friction and forces precision patients don't have; (b) "I didn't lose weight or gained" is clinically critical signal that numeric input misses (patient typing "0" without context conflates "I'm not sure" with "I genuinely didn't lose"). Also: position was last in cascade — wrong, because did-it-work is the most important question and should come right after duration. Reposition + replace numeric with banded single_select. The "I didn't lose weight (or gained)" option flags non-responders + rebounders — important cohort for provider visit framing (don't celebrate prior response; consider drug switch or dose escalation). Atom architecture: band is source of truth (binding per spec's banded-numeric atom rule); derived numeric for display only.
**Recommended rewrite:** Reposition to Q15.5 (was Q15.7); replace numeric with 7-band single_select; add non-responder option; required.
**Branching adjustments:** `none_or_gained` → provider visit framing flagged as non-responder/rebounder; `Section 1Q.15` `template.glp1.personalization.prior_response_celebration` SKIPS for this cohort.
**Downstream effect:** `provider_review` (drives motivation-priming template selection + visit framing per `Section 1Q.15`).
**Final decision:** **Modify** (repositioned + reformatted from numeric Tier 3 to banded Tier 2 with non-responder flag).

### Q15.6 — Side effects on your GLP-1 (conditional; renders when Q15.1 ∈ {currently, past})

**Hims source:** Implicit (Hims captures via medications list "report side effects" free-text post-Rx; MAIN asks directly upfront for cleaner restart-plan signal).
**MAIN voice:**
- prompt: "Did you have any side effects on your GLP-1?"
- helper: "Most patients experience at least some — usually mild. Honest answers help us tailor your plan."

**Schema:**
- `question_id`: `qb.pathway.glp1.prior_glp1_use.side_effects_v1` | `tier`: 2
- `answer_type`: `multi_select` | `selection_cardinality`: `zero_or_more` | `requiredness`: `skippable_with_explicit_none`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` (multi-select; composite atom emitted with structured value array) | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1', in: ['currently', 'past']}`

**Choices** (10 options; UI render directive groups them visually for patient clarity but `choice_values` stay flat):

*Common (most patients have some):*
- Nausea
- Vomiting
- Diarrhea
- Constipation
- Heartburn or acid reflux

*More serious:*
- Severe abdominal pain
- Gallbladder issues (gallstones, cholecystitis, cholecystectomy)

*Other:*
- Severe injection-site reaction
- Hair loss
- Something else

Plus: None of these (with binding `exclusive_with_other_choices` none_logic).

**`choice_values`:** `nausea | vomiting | diarrhea | constipation | heartburn | severe_abdominal_pain | gallbladder | injection_site_reaction | hair_loss | something_else | none_of_these`

**`none_logic`:** `{mode: 'exclusive_with_other_choices', none_choice_value: 'none_of_these'}` (binding for safety screen per `Section 1K.3` Stage 1.5 anti-pattern guard)

**Atoms emitted:**
- Per selected: typed atom `condition.glp1_side_effect_<kind>_history` (e.g., `condition.glp1_side_effect_nausea_history`, `condition.glp1_side_effect_severe_abdominal_pain_history`, `condition.glp1_side_effect_gallbladder_history`); `assertion_type: history_of`; `metadata.disease_state: side_effect_course_resolved` per `Section 1K.5.A` concept naming rule
- `something_else` selected → `condition.glp1_side_effect_other_history = true`; provider Mode F clarification at safety preflight per `Section 1P.4` if clinically relevant
- "None of these" selected → all 9 specific side-effect atoms emitted as DENIED (`status: 'denied_at_intake'`; provider sees explicit denial)
- `severe_abdominal_pain` selected → CRITICAL: provider safety preflight reviews for prior pancreatitis flag per `Section 1Q.15` `rule.glp1.safety.contraindication_pancreatitis_personal_history`; if confirmed, contraindication BLOCK (per FDA black box for semaglutide / tirzepatide pancreatitis history)

**Issues found:** Original draft had: (a) unanchored "while on it" in prompt; (b) abrupt tone for a cohort that may have had real adverse events; (c) helper that didn't normalize side effects (which causes UNDER-reporting — patients fearful of being denied prescription minimize their report); (d) free-text "Other" option (friction; low-signal). Patient-think pushback: side effects are normal on GLP-1s — telling patients that REDUCES under-reporting and improves clinical signal. "Something else" replaces "Other (free-text)" — no text input; no internal-system narration like "(provider will follow up)" which breaks immersion + creates trust risk if provider doesn't actually ask. Visual grouping (Common / More serious / Other) is a UI render directive for patient clarity; choice_values stay flat (no semantic schema impact). Per `Section 1K.3` Stage 1.5 anti-pattern guard: safety multi_select with "None of these" MUST use `exclusive_with_other_choices` (binding) — preserved.
**Recommended rewrite:** Anchor with "your GLP-1"; soften prompt + helper to normalize side effects (reduces under-reporting); visual grouping for clarity; replace free-text "Other" with non-text "Something else" (no system narration); preserve binding `exclusive_with_other_choices` none_logic.
**Branching adjustments:** `severe_abdominal_pain` selected → safety preflight reviews for pancreatitis confirmation. `gallbladder` selected → provider review for cholecystectomy status + active gallbladder disease. `something_else` selected → Mode F clarification at safety preflight if clinically relevant.
**Downstream effect:** `provider_review` (multiple side effects flag pattern of intolerance → provider may consider lower restart dose or alternate drug class).
**Final decision:** **Modify** (anchored prompt; normalizing helper; visual grouping; non-narrating "Something else"; preserved exclusive none_logic).

### Q15.7 — When did you stop? (conditional; renders only when Q15.1 = past) — SPLIT FROM OLD Q15.5

**Hims source:** Implicit (Hims doesn't capture; MAIN adds for re-treatment context).
**MAIN voice:**
- prompt: "When did you stop?"
- helper: "Best estimate is fine."

**Schema:**
- `question_id`: `qb.pathway.glp1.prior_glp1_use.stop_when_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1', equals: 'past'}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices** (6 date bands):
- Less than 1 month ago
- 1-3 months ago
- 3-6 months ago
- 6-12 months ago
- More than 1 year ago
- I don't remember

**`choice_values`:** `less_than_1mo | 1_to_3mo | 3_to_6mo | 6_to_12mo | more_than_1y | dont_remember`

**Atoms emitted:**
- Source-of-truth atom: `medication.glp1_stop_date_band` (metadata: `{band: <choice_value>}`)
- Derived value (display only per `Section 1K.9`; NOT stored as primary atom): washout-status flag computed from band (`more_than_1y` → washout-complete; `less_than_1mo` → potential drug-interaction concern in interim period)
- Denied: n/a (conditionally required)

**Issues found:** Original Q15.5 was a composite question (date band + free-text reason). User pushback: composite is two-questions-in-one, free-text for reason is high-friction, poor UX. Split into 2 sequential questions: Q15.7 (when) + Q15.8 (why structured). Both inherit `render_when` from Q15.1 = past. Banded date (rather than exact date) is intentional — patients don't reliably remember exact stop dates; bands cover the clinically-meaningful washout-decision thresholds.
**Recommended rewrite:** Split composite into Q15.7 (when) + Q15.8 (why); date band as before; required.
**Branching adjustments:** `more_than_1y` ago → considered washout-complete; restart at starter dose by default per `Section 1Q.15` rule logic. `less_than_1mo` ago → potential drug-interaction concern if patient on alternate Rx in interim; provider review at safety preflight.
**Downstream effect:** `provider_review` (re-treatment plan + washout status).
**Final decision:** **Modify** (split from old composite; banded date single_select; required).

### Q15.8 — Why did you stop? (conditional; renders only when Q15.1 = past) — SPLIT FROM OLD Q15.5

**Hims source:** Implicit (Hims doesn't capture; MAIN adds for re-treatment context).
**MAIN voice:**
- prompt: "Why did you stop?"
- helper: "Pick the main reason."

**Schema:**
- `question_id`: `qb.pathway.glp1.prior_glp1_use.stop_why_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1', equals: 'past'}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices** (8 structured options; primary reason `single_select`):
- Side effects
- Cost or insurance
- Wasn't working / hit a plateau
- Pregnancy or trying to conceive
- Provider stopped it
- Switched to a different medication
- Lifestyle change
- Other

**`choice_values`:** `side_effects | cost_or_insurance | not_working | pregnancy_ttc | provider_stopped | switched_medication | lifestyle_change | other`

**Atoms emitted:**
- Positive: `medication.glp1_stop_reason` (metadata: `{value: <choice_value>}`)
- `side_effects` selected → cross-references Q15.6 side-effect atoms; provider visit framing emphasizes tolerability
- `cost_or_insurance` selected → marketing + commercial team gets `intent.cost_concern_disclosed = true` per `Section 1Q.21` marketing personalization (with appropriate consents)
- `not_working` selected → provider visit framing emphasizes drug switch / dose escalation discussion
- `pregnancy_ttc` selected → CRITICAL: cross-references reproductive module per `Section 1Q.15` `rule.glp1.safety.contraindication_pregnancy_active`; if currently pregnant or TTC, provider review at safety preflight
- `provider_stopped` selected → provider Mode F clarification at safety preflight to obtain prior provider's reasoning
- `other` selected → provider Mode F clarification at visit (no free-text required at intake)
- Denied: n/a (conditionally required)

**Issues found:** Original Q15.5 used free-text for reason. User pushback: free-text is high-friction + closed-list reasons cover the clinically-distinct decisions cleanly. 8 structured options capture the meaningful clinical distinctions: cost (alternative pricing discussion); side effects (titration / drug switch); plateau (escalation / drug switch); pregnancy (absolute contraindication); provider-stopped (need their reasoning); switched (clinical context); lifestyle (informational); other (rare). `single_select` (primary reason) NOT `multi_select` — primary reason captures intent cleanly; multi adds noise. `Other` requires no free-text input; flags for provider Mode F clarification at visit per `Section 1P.4` (does not narrate this in UI per tone-lock).
**Recommended rewrite:** Adopt 8-option structured single_select; required; no free-text default.
**Branching adjustments:** `pregnancy_ttc` triggers reproductive module render check per `Section 1Q.15` safety preflight. `cost_or_insurance` feeds marketing personalization per `Section 1Q.21` (with consent).
**Downstream effect:** `provider_review` (re-treatment plan + visit framing differs by stop reason).
**Final decision:** **Modify** (split from old composite; structured single_select; required; no free-text).

---

## Module 16 — `mod.pathway.glp1.motivation_and_goals_v1`

**`module_id`:** `mod.pathway.glp1.motivation_and_goals_v1`
**`module_version`:** `1.0.0`
**`kind`:** non-clinical (motivation framing + commercial confidence + patient education; no clinical safety atoms emitted)
**`pathways`:** `glp1` only (Layer D pathway-specific; mechanism reusable as template for future TRT / Female HRT motivation modules)
**`required_for`:** motivation framing, commercial confidence, patient education
**`assertion_group_emit_trigger`:** `module_complete` (intent atoms emit composite)
**Atom domain:** `intent` (`intent.weight_loss_*` + `intent.treatment_*` live in `repo/clinical-concepts/intent.ts`); educational_screens emit non-clinical analytics events only per `Section 1K.19.9` (no clinical atoms)
**Composition position:** pathway file `repo/intake/pathways/glp1.ts` inserts this module AFTER Layer A demographics + AFTER Module 13 weight history (Q16.7 BMI personalized depends on height + weight atoms) but BEFORE Layer B/C clinical screens. This matches Hims funnel cadence: motivation + trust + commercial confidence build BEFORE clinical safety screening begins.

### Q16.1 — Primary motivation

**Hims source:** Step 5 "Why do you want to lose weight? / Improve my health / Gain confidence / Feel better in my clothes / Something else"
**MAIN voice:**
- prompt: "Why do you want to lose weight?"
- helper: none

**Schema:**
- `question_id`: `qb.pathway.glp1.motivation_and_goals.primary_motivation_v1` | `tier`: 3 (motivation; A/B-testable)
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `motivation` | `intent_of_answer_set`: `motivation_priming`
- `entity_kind`: `single_value` | `atom_kind`: `preference_motivation` | `downstream_effect`: `personalization`
- `render_when`: null (baseline)

**Choices:** Improve my health | Gain confidence | Feel better in my clothes or feel better about how I look | Something else
**`choice_values`:** `improve_health | gain_confidence | feel_better_appearance | something_else`

**Atoms emitted:**
- Positive: `intent.weight_loss_primary_motivation` (metadata: `{value: <choice_value>}`)
- Denied: n/a (required; no don't-know option needed — patients always have a primary reason)

**Issues found:** Adopt Hims prompt verbatim. Drop helper (question is self-explanatory). Drop unnecessary "I" expansion in answers. Expanded option 3 to capture both clothing-fit and general-appearance motivations (single bucket for the "I want to look better" cohort; reduces "Something else" usage by patients whose motivation is appearance-but-not-specifically-clothes).
**Recommended rewrite:** Hims-faithful prompt + 4-option set with expanded option 3.
**Branching adjustments:** `improve_health` → personalization rules per `Section 1Q.15` for clinical-tone messaging cohort; `gain_confidence` / `feel_better_appearance` → emotional-tone messaging cohort; `something_else` → provider Mode F clarification at visit if clinically relevant.
**Downstream effect:** `personalization` (drives motivation-priming template selection per `Section 1Q.15`).
**Final decision:** **Modify** (Hims-faithful with one expanded option).

### Q16.2 — Treatment priority

**Hims source:** Step 7 "What matters most to you about your treatment? / FDA-approved medications / Affordability / Results that last / Support from licensed providers"
**MAIN voice:**
- prompt: "What matters most to you about your treatment?"
- helper: none (Hims-faithful)

**Schema:**
- `question_id`: `qb.pathway.glp1.motivation_and_goals.treatment_priority_v1` | `tier`: 3
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `commercial_confidence` | `intent_of_answer_set`: `conversion_support`
- `entity_kind`: `single_value` | `atom_kind`: `operational` | `downstream_effect`: `personalization`
- `render_when`: null (baseline)

**Choices:** FDA-approved medications | Affordability | Results that last | Support from licensed providers
**`choice_values`:** `fda_approved | affordability | lasting_results | provider_support`

**Atoms emitted:**
- Positive: `intent.treatment_priority` (metadata: `{value: <choice_value>}`)
- Denied: n/a

**Issues found:** Hims uses identical 4-option set; MAIN keeps. `answer_role: commercial_confidence` because this drives conversion / commercial messaging (which factor matters most), not clinical decisions. Helper omitted because the question is self-explanatory at this funnel position.
**Recommended rewrite:** Adopt Hims 4-option set; preserve voice.
**Branching adjustments:** Drives downstream commercial messaging per `Section 1Q.21` marketing cohort segmentation (with appropriate consents); e.g., `affordability` → pricing-focused follow-up cadence; `lasting_results` → outcome-focused content; `provider_support` → care-team-emphasized messaging.
**Downstream effect:** `personalization` (commercial messaging cohort).
**Final decision:** **Modify** (preserve Hims 4-option semantics).

### Q16.3 — Educational: 83% stat

**Hims source:** Step 10-11 "83% of Americans are not the weight they'd like to be / Data based on a nationally representative survey of 5,000 American adults. Hims & Hers, The Shape of America Report, December 2024."
**MAIN voice:**

Body text:
> 83% of Americans are not at the weight they'd like to be.
>
> You're not alone. Most people need more than diet and exercise alone.

Source citation (inline; binding):
> *Hims & Hers, The Shape of America Report, December 2024. Survey of 5,000 American adults.*

When MAIN has its own data, swap citation. For V1 spec, Hims-cited stat is the binding template content.

**Schema:**
- `question_id`: `qb.pathway.glp1.motivation_and_goals.educational_stat_v1` | `tier`: 3
- `answer_type`: `educational_screen` | `selection_cardinality`: `none_applicable` | `requiredness`: `required_to_continue` (continue button required to proceed)
- `answer_role`: `educational_trust` | `intent_of_answer_set`: `education`
- `entity_kind`: `single_value` (one screen) | `atom_kind`: n/a | `downstream_effect`: `personalization`
- `render_when`: null (baseline; renders right after Q16.2)
- Continue button label: `"Continue"`

**Atoms emitted:**
- `emits_atoms`: `[]` (binding empty per `Section 1K.3` Stage 1.5 educational_screen rule)
- Analytics-only event per `Section 1K.19.9`: `intake.educational_screen.continued` with `metadata: {question_id: 'qb.pathway.glp1.motivation_and_goals.educational_stat_v1', dwell_time_ms?, continued: true}`

**Issues found:** Hims uses this stat as social proof + emotional anchor before clinical questions. MAIN preserves the stat with proper inline citation per evidence-based-content discipline. The "you're not alone" framing is factual reassurance, not hype.
**Recommended rewrite:** Adopt Hims stat with inline citation; tone-direction-compliant.
**Branching adjustments:** None.
**Downstream effect:** `personalization` (analytics on engagement; A/B-testable for funnel completion).
**Final decision:** **Modify** (Hims stat preserved; binding inline citation).

### Q16.4 — Treatment-in-mind preference

**Hims source:** Step 12 "Do you have a specific weight loss medication in mind? / No, I'd like a provider recommendation / Yes, I already have something in mind"
**MAIN voice:**
- prompt: "Do you have a specific weight loss treatment in mind?"
- helper: none

**Schema:**
- `question_id`: `qb.pathway.glp1.motivation_and_goals.treatment_in_mind_v1` | `tier`: 3 (drop-eligible if commercial nurture flows aren't V1 scope; A/B-testable)
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `preference` | `intent_of_answer_set`: `preference_capture`
- `entity_kind`: `single_value` | `atom_kind`: `preference_motivation` | `downstream_effect`: `personalization`
- `render_when`: null (baseline; renders right after Q16.3 educational stat)

**Choices:** No, I'd like a provider recommendation | Yes, I already have something in mind
**`choice_values`:** `recommendation | have_in_mind`

**Atoms emitted:**
- Positive: `intent.treatment_selection_preference` (metadata: `{value: <choice_value>}`)
- Denied: n/a (required)

**Issues found:** Hims-faithful 2-option binary; no helper; "weight loss" preserved in prompt for clarity (vs vague "treatment" alone).
**Recommended rewrite:** Hims-faithful prompt + 2-option set; no helper.
**Branching adjustments:** Does not branch in V1. `have_in_mind` → downstream commercial cohort signal per `Section 1Q.21` (more conversion-likely; nurture flow shorter); `recommendation` → standard provider-led flow with options-education emphasis. If commercial nurture flows aren't V1 scope, this question can be dropped via flag without clinical loss.
**Downstream effect:** `personalization` (commercial cohort signal for `Section 1Q.21`).
**Final decision:** **Modify** (Hims-faithful 2-option; drop-eligible Tier 3 — keep for commercial signal; remove if commercial nurture flows defer).

### Q16.5 — Goal benefits multi-select

**Hims source:** Step 17 "What would reaching your goal weight mean for you? Select all that apply. / Having more energy / Feeling more confident / Improving overall health / Feeling better in my body / Feeling good in clothes"
**MAIN voice:**
- prompt: "What would reaching your goal weight mean for you?"
- helper: "Select all that apply."

**Schema:**
- `question_id`: `qb.pathway.glp1.motivation_and_goals.goal_benefits_v1` | `tier`: 3 (motivation; A/B-testable)
- `answer_type`: `multi_select` | `selection_cardinality`: `one_or_more` | `requiredness`: `required_to_continue`
- `answer_role`: `motivation` | `intent_of_answer_set`: `motivation_priming`
- `entity_kind`: `multi_instance` | `instance_scope`: `aggregate` (per-benefit follow-ups not used; aggregate atom emitted per benefit)
- `atom_kind`: `preference_motivation` | `downstream_effect`: `personalization`
- `render_when`: null (baseline; renders right after Q16.4)

**Choices:** Having more energy | Feeling more confident | Improving overall health | Feeling better in my body | Feeling good in clothes
**`choice_values`:** `more_energy | more_confident | better_health | better_in_body | better_in_clothes`

**Atoms emitted:**
- Per selected: `intent.weight_loss_benefit_<kind>` (e.g., `intent.weight_loss_benefit_more_energy`, `intent.weight_loss_benefit_more_confident`, `intent.weight_loss_benefit_better_health`, `intent.weight_loss_benefit_better_in_body`, `intent.weight_loss_benefit_better_in_clothes`; metadata: `{kind, context_key: <kind>}` per multi-instance discipline)
- Denied: n/a (`one_or_more` cardinality required when rendered)

**Issues found:** Hims-faithful prompt + 5-option set with Hims gerund phrasing ("Having" / "Feeling" / "Improving") — gerunds are scannable and convey personal experience without "I" friction. Multi-select (not single) is correct because patients legitimately have multiple motivations — forcing one would lose richness. No "None of these" option because Q16.5 is motivation-priming (patient self-reflection on benefits), not a safety screen.
**Recommended rewrite:** Hims-faithful prompt + 5-option set with Hims gerund phrasing.
**Branching adjustments:** Multiple benefit atoms drive personalization template selection per `Section 1Q.15` (e.g., `better_health` selected → clinical-outcome-emphasized messaging; `more_confident` + `better_in_clothes` → appearance-emphasized; multi-benefit selection → multi-emphasis content).
**Downstream effect:** `personalization` (drives motivation-priming template per `Section 1Q.15`).
**Final decision:** **Modify** (Hims-faithful 5-option multi-select with gerund phrasing).

### Q16.6 — Patient testimonials (educational + social proof)

**Hims source:** Step 18-19 testimonials "Verified customers / Real results start here / Chance, 30. Lost 16 pounds in 4 months. Hims customer. / Jonathan, 42. Lost 17 pounds in 3 months. Hims customer." + standard FDA disclaimer
**MAIN voice:**

Body content (Hims-pattern testimonial cards; em-dash one-liner format; for V1 spec, Hims customer data is binding template content; real MAIN customer data swapped in when available):

> Chance, 30 — lost 16 pounds in 4 months
>
> Jonathan, 42 — lost 17 pounds in 3 months
>
> Zachary, 43 — lost 119 pounds in 9 months

Inline FDA-compliant disclaimer (required on this question's body; provides source attribution):

> *Medications are part of a weight loss program that includes a reduced-calorie diet and increased physical activity. Customers were compensated for their opinion. Results shared by customers who have purchased varying products. Customers' results have not been independently verified. Individual results will vary.*

**Schema:**
- `question_id`: `qb.pathway.glp1.motivation_and_goals.testimonials_v1` | `tier`: 3 (A/B-testable conversion driver; can be removed if conversion data shows otherwise)
- `answer_type`: `educational_screen` | `selection_cardinality`: `none_applicable` | `requiredness`: `required_to_continue`
- `answer_role`: `commercial_confidence` | `intent_of_answer_set`: `conversion_support`
- `entity_kind`: `single_value` | `atom_kind`: n/a | `downstream_effect`: `personalization`
- `render_when`: null (baseline; renders right after Q16.5)
- Continue button label: `"Continue"`

**Atoms emitted:**
- `emits_atoms`: `[]` (binding empty)
- Analytics-only event per `Section 1K.19.9`: `intake.educational_screen.continued` with `metadata: {question_id: 'qb.pathway.glp1.motivation_and_goals.testimonials_v1', testimonial_set_id, dwell_time_ms?, continued: true}`

**Issues found:** Earlier draft considered dropping testimonials entirely as "transformation hype." Reversed per user direction: testimonials with real patient data + FDA-compliant disclaimers are standard healthcare commercial pattern, not transformation hype. The disclaimer + factual format (name + age + lbs lost + timeframe + customer label) is industry-standard and legally compliant. For V1 spec, Hims-pattern customer data is the binding template; production deploy swaps in MAIN's own customer data. Testimonial set rotation + A/B testing are runtime concerns; spec captures the structural pattern + disclaimer requirement.
**Recommended rewrite:** Adopt Hims testimonial pattern with binding inline disclaimer.
**Branching adjustments:** None at intake; analytics-only.
**Downstream effect:** `personalization` (A/B-testable conversion driver; analytics on engagement).
**Final decision:** **Modify** (Hims testimonial pattern preserved; binding inline FDA-compliant disclaimer).

### Q16.7 — BMI personalized educational (derived_display)

**Hims source:** Step 25 "Your current BMI falls within a range that may qualify you for weight loss medication / Your BMI 24 / 170 lbs 5'11" / Current BMI / Medication zone / 18.5 25.7 32.8 40 / Your current BMI falls in the range for men who typically qualify for weight loss. / Your goal 15 lbs / 24 Current BMI / 22 Goal BMI / Why does BMI matter? It's a key data point that doctors use to assess your overall health as well as any health risks. / Rest assured, a licensed provider will thoroughly review your full profile to ensure you're getting a treatment that's right for you."
**MAIN voice:**

Body template (rendered with `patient_label_template_refs` per `Section 1K.4`; values resolved from prior atoms):

> Your BMI falls within a range that may qualify you for treatment.
>
> BMI: **{bmi}**

Where:
- `{bmi}` = `intake_derived_score.bmi` per `Section 1K.9` (computed from `vital.height_cm` + `vital.weight_kg`)
- Body copy above renders for BMI ≥ 27 (typical GLP-1 eligibility floor); for BMI < 27, body renders alternate copy (`"Your BMI is below the typical GLP-1 treatment range. Your provider will review your full profile to confirm what's right for you."`) — alternate copy is a runtime UI conditional based on derived `bmi_eligibility_band`

Helper text: none (the body is the educational content)

**Schema:**
- `question_id`: `qb.pathway.glp1.motivation_and_goals.bmi_personalized_v1` | `tier`: 3 (high-signal — patient sees their eligibility framing)
- `answer_type`: `educational_screen` (renders as `derived_display` per `Section 1K.4` `module_step.kind: 'derived_display'`) | `selection_cardinality`: `none_applicable` | `requiredness`: `required_to_continue`
- `answer_role`: `educational_trust` | `intent_of_answer_set`: `education`
- `entity_kind`: `single_value` | `atom_kind`: n/a | `downstream_effect`: `personalization`
- `render_when`: `{all_of: [{question_id: 'qb.pathway.glp1.weight_history.height_v1', captured: true}, {question_id: 'qb.pathway.glp1.weight_history.current_weight_v1', captured: true}]}` (depends on Q13.1 + Q13.2 atoms; will not render if either is missing)
- `derived_value_id`: `intake_derived_score.bmi` per `Section 1K.9`
- `computation`: `sync` (computed at render time; no async lab fetch required)
- Continue button label: `"Continue"`

**Atoms emitted:**
- `emits_atoms`: `[]` (binding empty; this is a pure display screen)
- Analytics-only event per `Section 1K.19.9`: `intake.educational_screen.continued` with `metadata: {question_id: 'qb.pathway.glp1.motivation_and_goals.bmi_personalized_v1', derived_bmi_band: <may_qualify | above_range | below_range>, dwell_time_ms?, continued: true}`

**Issues found:** Hims uses a rich BMI visualization (graph with medication zone) + comparison block. MAIN simplifies to a 2-line text-based template for V1 — clarity, not explanation. The visualization layer is a runtime UI concern, not a spec concern. For BMI ≥ 27, body copy reads "Your BMI falls within a range that may qualify you for treatment" + the BMI value. For BMI < 27, alternate copy is rendered (runtime UI conditional). Actual provider-eligibility decision is downstream.
**Recommended rewrite:** 2-line template with derived BMI; runtime UI handles eligibility-band conditional copy + future visualization.
**Branching adjustments:** Below-range BMI (< 27) → alternate body copy renders at runtime; downstream provider review at safety preflight may decline GLP-1 prescription per `Section 1Q.15` `rule.glp1.eligibility.bmi_threshold` (not blocked at intake; intake completes per `Section 1K.3` `hard_stop` semantics).
**Downstream effect:** `personalization` (educational + eligibility-framing context).
**Final decision:** **Modify** (Hims pattern simplified to 2-line text template).

### Q16.8 — Educational treatment mechanism

**Hims source:** Step 26 "Ways a treatment plan may help with weight loss / Improves eating habits / Active ingredients in weight loss treatments work by making you feel fuller longer, so you don't have to rely on restrictive diets. / Targets the source of cravings / Active ingredients in weight loss treatments work on the appetite center of the brain, helping you control cravings and suppress appetite."
**MAIN voice:**

Body content:

> *How GLP-1 medications work*
>
> GLP-1 medications mimic a hormone your body already makes (GLP-1) that helps regulate appetite and slows how fast your stomach empties.
>
> The result: you feel fuller longer, with fewer cravings.
>
> *Effects vary by individual. Best results pair medication with diet and lifestyle changes.*

Helper text: none

**Schema:**
- `question_id`: `qb.pathway.glp1.motivation_and_goals.treatment_mechanism_v1` | `tier`: 3
- `answer_type`: `educational_screen` | `selection_cardinality`: `none_applicable` | `requiredness`: `required_to_continue`
- `answer_role`: `educational_trust` | `intent_of_answer_set`: `education`
- `entity_kind`: `single_value` | `atom_kind`: n/a | `downstream_effect`: `personalization`
- `render_when`: null (baseline; renders right after Q16.7 BMI personalized)
- Continue button label: `"Continue"`

**Atoms emitted:**
- `emits_atoms`: `[]` (binding empty)
- Analytics-only event per `Section 1K.19.9`: `intake.educational_screen.continued` with `metadata: {question_id: 'qb.pathway.glp1.motivation_and_goals.treatment_mechanism_v1', dwell_time_ms?, continued: true}`

**Issues found:** Hims uses 2-card layout ("Improves eating habits" + "Targets the source of cravings"). MAIN consolidates to single body block with factual mechanism + honest "effects vary" caveat. The mechanism explanation (GLP-1 hormone mimicry + appetite regulation + delayed gastric emptying) is medically accurate per FDA labels and reduces patient confusion later about how the medication works. The "best results pair with diet and lifestyle" line aligns with FDA-required messaging that GLP-1 indications include reduced-calorie diet + increased physical activity.
**Recommended rewrite:** Adopt consolidated factual body with mechanism explanation + honest caveat.
**Branching adjustments:** None.
**Downstream effect:** `personalization` (analytics on engagement; informs provider visit framing — patient who scrolled through mechanism vs skipped immediately may benefit from different visit emphasis).
**Final decision:** **Modify** (Hims 2-card → consolidated factual body; mechanism preserved; FDA-aligned caveat).

---

## Module 17 — `mod.pathway.glp1.eating_disorder_screen_v1`

**`module_id`:** `mod.pathway.glp1.eating_disorder_screen_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical (safety — active eating disorder patterns are a provider-review flag; anorexia-pattern food restriction in particular is a relative contraindication for GLP-1s since appetite suppression in a restriction-driven patient compounds medical risk)
**`pathways`:** `glp1` only (Layer D pathway-specific extension of Phase 1 Module 11 `mod.domain.mental_health.baseline_v1`; mental-health baseline screens depression / anxiety / suicidal ideation but not ED patterns — GLP-1 is the pathway where ED-pattern screening is clinically load-bearing)
**`required_for`:** safety, provider review
**`assertion_group_emit_trigger`:** `module_complete`
**Atom domain:** `mental_health` (eating disorder concept atoms live in `repo/clinical-concepts/mental_health.ts` under `condition.eating_disorder_*` namespace per `Section 1K.3` atomization principle; extends Module 11 rather than re-authoring)

**Composition position:** pathway file `repo/intake/pathways/glp1.ts` inserts this module after Module 15 (prior GLP-1 use) and before Modules 18-20 (CV / GI / bariatric safety cascades). Runs early in the safety block so ED signal reaches provider visit framing before the rest of the clinical cascades compose.

### Q17.1 — Eating pattern symptom screen

**Hims source:** Step 32 "Have you ever experienced any of these symptoms? This helps your provider better understand your current health so they can recommend the best treatment for you. / Causing yourself to vomit in order to lose weight / Frequently eating very large amounts of food and feeling like you can't stop eating / Severely limiting the amount of food you eat due to an intense fear of gaining weight / No, I have not experienced any of these"
**MAIN voice:**
- prompt: "Have you ever experienced any of these symptoms?"
- helper: "This helps your provider recommend the right treatment."

**Schema:**
- `question_id`: `qb.pathway.glp1.eating_disorder_screen.symptoms_v1` | `tier`: 1
- `answer_type`: `multi_select` | `selection_cardinality`: `one_or_more` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` (multi-select; composite atom emission with structured value array) | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)
- `none_logic`: `{mode: 'exclusive_with_other_choices', none_choice_value: 'none_of_these'}`

**Choices** (Hims option wording preserved verbatim — the symptom-based phrasing is clinically sophisticated; patients with undiagnosed patterns won't self-identify with "bulimia" / "anorexia" but will identify with behavior descriptions):
- Causing yourself to vomit in order to lose weight
- Frequently eating very large amounts of food and feeling like you can't stop eating
- Severely limiting the amount of food you eat due to an intense fear of gaining weight
- No, I have not experienced any of these

**`choice_values`:** `purging | binge_eating | severe_restriction | none_of_these`

**Atoms emitted:**
- Per symptom selected: typed atom `condition.eating_disorder_<pattern>_history` (e.g., `condition.eating_disorder_purging_history`, `condition.eating_disorder_binge_history`, `condition.eating_disorder_restriction_history`); `assertion_type: history_of`; `metadata.disease_state: symptom_endorsed_lifetime` per `Section 1K.5.A` concept naming rule
- "None of these" selected → all 3 pattern atoms emitted DENIED (`status: 'denied_at_intake'`; provider sees explicit denial)
- `severe_restriction` selected → provider safety preflight flag for anorexia-pattern review per `Section 1Q.15` (GLP-1 + restriction pattern is high-risk; may be a contraindication depending on severity + active/historical)

**Issues found:** Hims's symptom-based phrasing is the right approach — catches patterns in patients who've never been formally diagnosed and who wouldn't self-identify with diagnostic labels. MAIN trims prompt slightly ("Have you ever experienced any of these symptoms?" keeps Hims's meaningful "symptoms" word — frames as clinical, not lifestyle) and tightens helper (Hims's full version "This helps your provider better understand your current health so they can recommend the best treatment for you" is long for a sensitive question; shorter helper reduces hesitation without losing the explanatory WHY). Preserves Hims's 3-symptom + none structure verbatim in answer options. `exclusive_with_other_choices` none_logic matches the safety-screen pattern used in Q15.6 for GLP-1 side effects.
**Recommended rewrite:** Tighter helper; preserve Hims's 4-option structure and option wording verbatim.
**Branching adjustments:** Q17.2 renders regardless of Q17.1 answer — some patients with prior ED diagnosis are in remission and will truthfully answer "none" to Q17.1 but still have a diagnosis that matters for GLP-1 safety review.
**Downstream effect:** `provider_review` (any symptom → provider visit framing flags ED pattern review; `severe_restriction` specifically → safety preflight reviews per `Section 1Q.15` for anorexia-pattern contraindication).
**Final decision:** **Modify** (Hims-faithful option text; tighter helper).

### Q17.2 — Eating disorder diagnosis history

**Hims source:** Implicit (Hims screens symptoms only; MAIN adds diagnosis capture to distinguish currently-symptomatic patients from diagnosed-in-remission patients — these are clinically distinct populations for GLP-1 decision).
**MAIN voice:**
- prompt: "Have you ever been diagnosed with an eating disorder?"
- helper: none

**Schema:**
- `question_id`: `qb.pathway.glp1.eating_disorder_screen.diagnosis_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline; renders regardless of Q17.1)

**Choices:** Yes | No | Prefer not to say
**`choice_values`:** `yes | no | prefer_not_to_say`

**Atoms emitted:**
- `yes` → `condition.eating_disorder_diagnosis_history = true` (metadata: `{disease_state: 'history_of'}`)
- `no` → `condition.eating_disorder_diagnosis_history` emitted DENIED (`status: 'denied_at_intake'`)
- `prefer_not_to_say` → `condition.eating_disorder_diagnosis_history` left UNCAPTURED; provider Mode F clarification opens at safety preflight per `Section 1P.4` (sensitive; clinician can ask in-person at visit)

**Issues found:** Distinct question from Q17.1 — a symptom screen captures "what has this patient experienced?" while a diagnosis question captures "has a clinician ever named this?" Some patients in stable remission haven't had active symptoms in the Q17.1 timeframe but carry a diagnosis that affects GLP-1 risk assessment. "Prefer not to say" is appropriate for this sensitive question; respecting opt-out reduces under-reporting from patients who'd otherwise abandon the funnel or lie. Provider clarifies at visit.
**Recommended rewrite:** New Tier 2 baseline 3-option single_select with opt-out.
**Branching adjustments:** `yes` → BOTH Q17.3 (diagnosis subtype) AND Q17.4 (current treatment) render. `no` or `prefer_not_to_say` → skip both Q17.3 and Q17.4. Q17.3 and Q17.4 are independent follow-ups to Q17.2 (not nested under each other) — a patient who answers Q17.2 = yes sees both downstream questions regardless of how they answer Q17.3.
**Downstream effect:** `provider_review` (diagnosis history in provider workspace; Q17.3 subtype drives differentiated routing per `Section 1Q.15` — AN = hard stop, BN = flag, BED = distinct flag cohort; Q17.4 adds care coordination signal).
**Final decision:** **Modify** (new Tier 2 diagnosis capture; not in Hims funnel; clinically additive).

### Q17.3 — Which eating disorder(s) were you diagnosed with? (conditional; renders only when Q17.2 = yes)

**Hims source:** Implicit (Hims has no diagnosis-subtype question; MAIN adds because AN / BN / BED produce meaningfully different prescribing decisions — AN is a hard-stop cohort even in remission; BN is a flag cohort with significant caution; BED is a distinct cohort with emerging evidence as a positive indication for GLP-1).
**MAIN voice:**
- prompt: "Which eating disorder(s) were you diagnosed with?"
- helper: "Select all that apply."

**Schema:**
- `question_id`: `qb.pathway.glp1.eating_disorder_screen.diagnosis_subtype_v1` | `tier`: 1 (clinical safety — anorexia nervosa history is a hard-stop gate; warrants Tier 1)
- `answer_type`: `multi_select` | `selection_cardinality`: `one_or_more` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` (multi-select; composite atom emission with structured value array) | `atom_kind`: `safety` | `downstream_effect`: `provider_review` (differentiated per selection — see atom notes below)
- `render_when`: `{question_id: 'qb.pathway.glp1.eating_disorder_screen.diagnosis_v1', equals: 'yes'}`
- `required` (resolver): `<Predicate>` (required when render_when fires)
- `none_logic`: `{mode: 'exclusive_with_other_choices', none_choice_value: 'not_sure'}` — "I'm not sure which one" cannot coexist with a specific diagnosis label; "Another eating disorder" CAN coexist with specific labels (comorbidity is valid — e.g., AN history that transitioned to BN, or BN + BED overlap)

**Choices:**
- Anorexia nervosa
- Bulimia nervosa
- Binge eating disorder
- Another eating disorder
- I'm not sure which one

**`choice_values`:** `anorexia_nervosa | bulimia_nervosa | binge_eating_disorder | another_ed | not_sure`

**Atoms emitted** (all live in `repo/clinical-concepts/mental_health.ts`):
- `anorexia_nervosa` selected → `condition.anorexia_nervosa_history` with `assertion_type: history_of`; metadata: `{disease_state: 'history_of'}`. CRITICAL: feeds `rule.glp1.safety.contraindication_anorexia_nervosa_history` per `Section 1Q.15` — hard stop cohort (BLOCK fires even in remission; provider exception pathway exists but default is decline because appetite suppression + restriction-driven pathology is a high-risk combination)
- `bulimia_nervosa` selected → `condition.bulimia_nervosa_history` with `assertion_type: history_of`. Feeds flag cohort rule — provider review at safety preflight; GLP-1 GI side effects (nausea, delayed gastric emptying) can trigger purging cycles, so caution is significant but not an automatic block
- `binge_eating_disorder` selected → `condition.binge_eating_disorder_history` with `assertion_type: history_of`. Feeds distinct flag cohort — provider review at safety preflight with a DIFFERENT risk profile: emerging evidence (semaglutide + BED trials) shows reduction in binge frequency, so provider may proceed with monitoring rather than decline
- `another_ed` selected → `condition.eating_disorder_other_history` with `assertion_type: history_of`; metadata: `{disease_state: 'history_of', subtype_unspecified: true}`. Provider Mode F clarification at safety preflight per `Section 1P.4` — could be atypical anorexia (OSFED; hard-stop-equivalent risk), purging disorder (BN-like risk), ARFID, UFED, etc. Clinician clarifies at visit
- `not_sure` selected → no subtype atom emitted; umbrella atom from Q17.2 (`condition.eating_disorder_diagnosis_history = true`) persists. Provider Mode F clarification at safety preflight per `Section 1P.4`

**Issues found:** This is the most clinically load-bearing question in the module. A single coarse "has ED history = yes" atom would blur three meaningfully different prescribing decisions into one. Splitting AN / BN / BED by subtype lets the rule layer produce differentiated routing: AN → hard stop cohort; BN → flag with significant caution; BED → flag with a potentially positive clinical rationale. `multi_select` is the correct cardinality because ED comorbidity is clinically real — AN can transition to BN over time (well-documented longitudinal pattern); BN + BED diagnosis overlap is common in clinical populations. Forcing single-select would lose this signal. "I'm not sure which one" is kept separate from "Another eating disorder" to preserve the distinction between *patient doesn't remember the specific label* and *patient knows it was a non-standard diagnosis* — both need provider follow-up but the clinical interpretation differs. DSM-5 subtypes beyond AN/BN/BED (OSFED, ARFID, atypical AN, purging disorder, UFED) fold into "Another eating disorder" because their labels are clinical jargon patients generally won't self-identify with; provider Mode F at visit clarifies. ARFID specifically is rare in weight-loss-seeking adults and the restriction is not weight-motivated, so its distinct risk profile can be resolved at visit without spec complexity. Tier 1 (not Tier 2) because AN history triggers a hard-stop BLOCK gate — Tier 1 questions carry BLOCK gates per the established tier convention.
**Recommended rewrite:** New Tier 1 conditional multi_select with 5 options; exclusive_with_other_choices none_logic on `not_sure` only.
**Branching adjustments:** `anorexia_nervosa` atom → hard stop rule fires per `Section 1Q.15`. `bulimia_nervosa` atom → flag cohort rule. `binge_eating_disorder` atom → distinct flag cohort rule with differentiated visit framing. `another_ed` or `not_sure` → provider Mode F clarification at safety preflight. Q17.4 (current treatment) renders independently based on Q17.2 = yes, not dependent on Q17.3 subtype selection.
**Downstream effect:** `provider_review` (differentiated per selection — AN routes to hard-stop cohort; BN to flag/caution; BED to flag/potentially-proceed; unknown/other to Mode F clarification).
**Final decision:** **Modify** (new Tier 1 conditional; clinically critical for differentiated prescribing logic).

### Q17.4 — Current eating disorder treatment (conditional; renders only when Q17.2 = yes)

**Hims source:** Implicit (MAIN adds for care coordination — active treatment vs long-term remission is a meaningful clinical distinction for GLP-1 prescribing decision).
**MAIN voice:**
- prompt: "Are you currently in treatment for it?"
- helper: "Therapy, medication, nutrition support — anything counts."

**Schema:**
- `question_id`: `qb.pathway.glp1.eating_disorder_screen.current_treatment_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.eating_disorder_screen.diagnosis_v1', equals: 'yes'}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices:** Yes, currently in treatment | No, I was treated in the past | No, I've never been treated
**`choice_values`:** `currently | past_only | never`

**Atoms emitted:**
- Positive: `condition.eating_disorder_treatment_status` (metadata: `{value: <choice_value>}`)
- Denied: n/a (conditionally required)

**Issues found:** "It" in the prompt is acceptable here — Q17.4 fires as a follow-up to Q17.2 (and renders alongside Q17.3 for patients with diagnosis history), so the referent (eating disorder diagnosis) is already established in the cascade and unambiguous. Using "it" rather than naming the diagnosis is intentionally softer — some patients with a diagnosis don't emotionally identify with the label, so repeating it question-after-question can feel pressuring. Helper enumerates treatment types because "treatment" can mean different things to different patients (some don't count therapy; some don't count nutrition work). "Never been treated" with a diagnosis history is unusual but possible (self-managed recovery, diagnosis declined formal treatment, etc.); provider reviews at visit.
**Recommended rewrite:** New Tier 2 conditional 3-option single_select.
**Branching adjustments:** `currently` → provider visit framing flags active care coordination (consider consulting with patient's ED care team before prescribing GLP-1). `past_only` → provider confirms stability at visit. `never` → provider reviews at visit for context.
**Downstream effect:** `provider_review` (care coordination signal; not a hard contraindication on its own).
**Final decision:** **Modify** (new Tier 2 conditional).

---

## Module 18 — `mod.pathway.glp1.cv_safety_extended_v1`

**`module_id`:** `mod.pathway.glp1.cv_safety_extended_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical (safety — medullary thyroid carcinoma and MEN-2 syndrome are FDA black-box contraindications for semaglutide and tirzepatide; personal OR family history blocks GLP-1 absolutely per `Section 1Q.15` — `rule.glp1.eligibility.contraindication_thyroid_cancer` + `rule.glp1.eligibility.contraindication_men2`; Stage 1 gate per `Section 1J` with `closed_reason_code: denied_contraindication_absolute` and `reopen_eligibility_criteria: none`)
**`pathways`:** `glp1` only (Layer D pathway-specific extension of Phase 1 Module 8 `mod.domain.cardiometabolic.baseline_history_v1`; Module 8 captures general cardiometabolic personal + family history — Module 18 adds the rare GLP-1-specific thyroid/endocrine/cardiac rhythm conditions that aren't worth asking every patient but are mandatory-ask for GLP-1)
**`required_for`:** eligibility, safety — personal or family MTC/MEN-2 is an absolute contraindication per FDA boxed warning
**`assertion_group_emit_trigger`:** `module_complete` (composite emission of all personal + family + sudden-death atoms in same DB transaction so the safety preflight sees the complete set atomically)
**Atom domain:** `endocrine` (MTC + MEN-2 atoms live in `repo/clinical-concepts/endocrine.ts`) + `cardiovascular` (long QT syndrome atoms in `repo/clinical-concepts/cardiovascular.ts`) + `family_history` (sudden-death-under-40 atoms in `repo/clinical-concepts/family_history.ts`)

**Composition position:** pathway file `repo/intake/pathways/glp1.ts` inserts this module after Module 17 (eating disorder screen) and before Modules 19-20 (bariatric + GI safety). Runs in the Stage 1 safety cascade per `Section 1J` — atoms here gate eligibility BLOCKs before the patient continues. Placed before Module 21 contraindication_acknowledgments so the BLACK BOX acknowledgment question sees all upstream personal/family MTC/MEN-2 atoms already captured.

**Module naming note:** the name `cv_safety_extended` is historical (inherited from the spec's "Next deliverable" plan when the module was first scoped). The atoms actually span endocrine + cardiovascular + family_history domains. Renaming deferred to avoid spec churn; `Section 1Q.15` rules reference the atoms directly, not the module name.

**Hims surface covered:** Steps 47-48 (personal + family combined multi-select in Hims; MAIN splits for clean atomic data) + Step 49 (family sudden death under 40 Y/N) + Steps 50-51 (cause of death free-text in Hims; MAIN replaces with structured options). Hims Step 47 also includes Diabetes T2, Pancreatitis, and Gastroparesis — those are handled elsewhere (Module 8 baseline captures T2D; Module 20 GI safety extended will capture pancreatitis + gastroparesis) and deliberately NOT duplicated here.

### Q18.1 — Personal history of thyroid / endocrine / cardiac conditions

**Hims source:** Step 47/48 — Hims combines personal + family into a single multi-select: "Have you or a family member ever been diagnosed with any of the following conditions? / Medullary thyroid cancer / Multiple endocrine neoplasia type-2 / Pancreatitis / Gastroparesis / Diabetes type 2 / Long QT Syndrome / No, none of these". MAIN splits personal into Q18.1 and family into Q18.2 for unambiguous atomic data (see "Issues found" below for rationale).
**MAIN voice:**
- prompt: "Have you ever been diagnosed with any of these conditions?"
- helper: "Some conditions affect which medications are safe."

**Schema:**
- `question_id`: `qb.pathway.glp1.cv_safety_extended.personal_history_v1` | `tier`: 1 (clinical safety — MTC/MEN-2 personal history is an FDA-boxed hard-stop)
- `answer_type`: `multi_select` | `selection_cardinality`: `one_or_more` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` (multi-select; composite atom emission with structured value array) | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)
- `none_logic`: `{mode: 'exclusive_with_other_choices', none_choice_value: 'none_of_these'}`

**Choices:**
- Medullary thyroid cancer
- Multiple endocrine neoplasia type 2 (MEN-2)
- Long QT syndrome
- No, none of these

**`choice_values`:** `medullary_thyroid_carcinoma | men2 | long_qt_syndrome | none_of_these`

**Atoms emitted:**
- `medullary_thyroid_carcinoma` selected → `condition.medullary_thyroid_carcinoma_history` with `assertion_type: 'history_of'`; lives in `repo/clinical-concepts/endocrine.ts`. CRITICAL: feeds `rule.glp1.eligibility.contraindication_thyroid_cancer` per `Section 1Q.15` — absolute contraindication BLOCK; session closure `closed_reason_code: denied_contraindication_absolute` per `Section 1K.12`; `reopen_eligibility_criteria: none` per `Section 1J.14` (patient is not nudged to return; the condition won't change)
- `men2` selected → `condition.men2_history` with `assertion_type: 'history_of'`; lives in `repo/clinical-concepts/endocrine.ts`. CRITICAL: feeds `rule.glp1.eligibility.contraindication_men2` per `Section 1Q.15` — absolute contraindication BLOCK with same closure semantics as MTC
- `long_qt_syndrome` selected → `condition.long_qt_syndrome_history` with `assertion_type: 'history_of'`; lives in `repo/clinical-concepts/cardiovascular.ts`. NOT FDA-boxed for GLP-1; provider review flag — caution during dose titration; provider may proceed with monitoring
- `none_of_these` selected → all 3 specific condition atoms emitted DENIED (`status: 'denied_at_intake'`; provider sees explicit denial)

**Issues found:** Hims Step 47 compresses personal + family history into a single multi-select. That UX compromise loses the clinically meaningful distinction between "I have MEN-2" vs "my mom had MEN-2" — both are FDA-boxed blocks for GLP-1, but the provider conversation and patient counseling differ substantially. MAIN splits into Q18.1 (personal) + Q18.2 (family) for unambiguous atomic data. Cost: one extra question; benefit: clean provider data. Hims's Step 47 list also includes Diabetes T2 (already in Module 8 cardiometabolic baseline), Pancreatitis (will live in Module 20 GI safety extended), and Gastroparesis (Module 20) — those are NOT duplicated here. Long QT syndrome is not strictly FDA-boxed for GLP-1 but Hims includes it; MAIN keeps it because arrhythmia risk is a reasonable provider review signal during GLP-1 dose escalation. No `not_sure` option on personal history because patients always know their own diagnoses (unlike family history, where adopted/estranged patients may genuinely not know).
**Recommended rewrite:** Split Hims combined Q into personal (Q18.1) + family (Q18.2); preserve Hims's condition wording; drop Diabetes T2 + Pancreatitis + Gastroparesis (covered in Module 8 / Module 20); add `(MEN-2)` parenthetical for patient recognition.
**Branching adjustments:** `medullary_thyroid_carcinoma` or `men2` selected → hard-stop BLOCK fires at safety preflight per `Section 1Q.15`. `long_qt_syndrome` selected → flag cohort; provider review at visit. Q18.2, Q18.3, Q18.4 render regardless of Q18.1 answer (parallel baseline questions; not nested).
**Downstream effect:** `provider_review` (differentiated per selection — MTC/MEN-2 route to absolute contraindication block; Long QT routes to flag/caution).
**Final decision:** **Modify** (split from Hims combined Q; 4-option multi-select for personal history).

### Q18.2 — Family history of thyroid / endocrine / cardiac conditions

**Hims source:** Step 47/48 (combined with personal above; MAIN splits).
**MAIN voice:**
- prompt: "Has anyone in your family been diagnosed with any of these conditions?"
- helper: none (parallel to Q18.1; rationale already shown there)

**Schema:**
- `question_id`: `qb.pathway.glp1.cv_safety_extended.family_history_v1` | `tier`: 1 (clinical safety — family MTC/MEN-2 is an FDA-boxed hard-stop)
- `answer_type`: `multi_select` | `selection_cardinality`: `one_or_more` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` (multi-select; composite atom emission) | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)
- `none_logic`: `{mode: 'exclusive_with_other_choices', none_choice_value: 'none_of_these'}` — note: `not_sure` is NOT treated as exclusive with specific conditions (a patient might know their mom had MTC but not know their dad's side; selecting both `medullary_thyroid_carcinoma` and `not_sure` is valid)

**Choices:**
- Medullary thyroid cancer
- Multiple endocrine neoplasia type 2 (MEN-2)
- Long QT syndrome
- I'm not sure
- No, none of these

**`choice_values`:** `medullary_thyroid_carcinoma | men2 | long_qt_syndrome | not_sure | none_of_these`

**Atoms emitted:**
- `medullary_thyroid_carcinoma` selected → `condition.medullary_thyroid_carcinoma_family_history` with `assertion_type: 'family_history'`; lives in `repo/clinical-concepts/endocrine.ts`. CRITICAL: feeds `rule.glp1.eligibility.contraindication_thyroid_cancer` per `Section 1Q.15` — family history of MTC is included in the FDA boxed warning; absolute contraindication BLOCK
- `men2` selected → `condition.men2_family_history` with `assertion_type: 'family_history'`; lives in `repo/clinical-concepts/endocrine.ts`. CRITICAL: feeds `rule.glp1.eligibility.contraindication_men2` per `Section 1Q.15` — absolute contraindication BLOCK
- `long_qt_syndrome` selected → `condition.long_qt_syndrome_family_history` with `assertion_type: 'family_history'`; lives in `repo/clinical-concepts/cardiovascular.ts`. Provider review flag (not FDA-boxed)
- `not_sure` selected → `family_history.status` metadata captured as `unknown_family_history_asserted = true`; specific family-condition atoms NOT emitted denied (patient didn't assert either way). Provider follow-up clarification per `Section 1P.4` — clinician may ask whether patient can reach a family member to find out, or proceed with shared decision-making
- `none_of_these` selected → all 3 specific family-history atoms emitted DENIED (`status: 'denied_at_intake'`)

**Issues found:** Parallel structure to Q18.1 with prompt cadence matched ("Has anyone in your family been diagnosed..."). Dropped the family-member enumeration helper from an earlier draft — patients know what "family" means; enumerating "parents, siblings, children, grandparents, aunts, or uncles" read as clinical over-specification for this UX. Added "I'm not sure" option because some patients are adopted, estranged from biological family, have parents who immigrated and don't share medical history, or are from cultures where inherited conditions aren't openly discussed — forcing these patients to answer "none" when they genuinely don't know would introduce false negatives for the FDA-boxed MTC/MEN-2 screen. An earlier draft used "I don't know my family history" which was longer than necessary and carried a mild blame-the-patient tone for not knowing; "I'm not sure" is shorter and neutral. `not_sure` is treated as "did not assert" (provider follow-up), NOT as "no" — this is the safer default for a boxed-warning screen. `not_sure` is allowed to coexist with specific conditions (e.g., "I know my mom had MTC but I don't know my dad's side") — that's why it's NOT in `exclusive_with_other_choices`.
**Recommended rewrite:** New Tier 1 baseline multi_select with 5 options (3 conditions + not_sure + none_of_these); `not_sure` treated as non-assertion, not as denial; no enumeration helper.
**Branching adjustments:** MTC/MEN-2 family history → hard-stop BLOCK. Long QT family history → flag cohort. `not_sure` → follow-up clarification. Q18.3 renders regardless of Q18.2 (separate clinical signal — undiagnosed inherited cardiac conditions that never got a formal label).
**Downstream effect:** `provider_review` (differentiated per selection).
**Final decision:** **Modify** (new Tier 1 baseline; parallel to Q18.1; adds `not_sure` option absent from personal-history since patient always knows their own history).

### Q18.3 — Sudden death of a close family member under 40

**Hims source:** Step 49 "Has a close family member under the age of 40 passed away unexpectedly? Close family members can be a parent, sibling or child. We ask this so your provider can determine the appropriate treatment for you."
**MAIN voice:**
- prompt: "Has a close family member passed away unexpectedly before age 40?"
- helper: "This helps us screen for hereditary heart conditions that affect treatment safety."

**Schema:**
- `question_id`: `qb.pathway.glp1.cv_safety_extended.family_sudden_death_v1` | `tier`: 2 (clinical context — sudden death under 40 screens for undiagnosed inherited cardiac conditions and familial MTC; flag cohort signal, not a hard-stop on its own)
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)

**Choices:** No | Yes | I'm not sure
**`choice_values`:** `no | yes | not_sure`

**Atoms emitted:**
- `yes` → `family_history.sudden_death_under_40_history = true`; lives in `repo/clinical-concepts/family_history.ts`; provider review at safety preflight for inherited cardiac screening
- `no` → `family_history.sudden_death_under_40_history` emitted DENIED
- `not_sure` → atom left UNCAPTURED; provider follow-up clarification per `Section 1P.4`

**Issues found:** Hims uses Yes/No binary. MAIN adds `not_sure` as a third option — adopted patients, patients with small families, or patients estranged from biological family may genuinely not know, and forcing a No answer introduces false negatives for a cardiac safety screen. Dropped the "close family means parent, sibling, or child" enumeration that an earlier draft pulled from Hims — patients already understand "close family" and the enumeration read as clinical over-specification. Helper ties directly to the clinical rationale (hereditary heart conditions affecting treatment safety) rather than Hims's vague "so your provider can determine the appropriate treatment" — gives patients a specific reason they can verify the logic of rather than opaque process language. Same helper as Q18.4 for consistency (both questions screen for the same clinical concern).
**Recommended rewrite:** 3-option (No/Yes/I'm not sure); short helper tied to clinical rationale; no family-member enumeration.
**Branching adjustments:** `yes` → Q18.4 renders. `no` or `not_sure` → skip Q18.4.
**Downstream effect:** `provider_review` (undiagnosed inherited cardiac conditions flag; informs provider framing — may recommend cardiology referral or ECG workup).
**Final decision:** **Modify** (tighter helper; not_sure option for accuracy).

### Q18.4 — Heart-related? (conditional; renders only when Q18.3 = yes)

**Hims source:** Step 50/51 "Please tell us more about the specific cause of death. These details help your provider determine the most appropriate treatment for you." (Hims uses a 255-char free-text input asking for the cause of death; MAIN reframes to ask the clinically-useful question directly — see "Issues found" for reframe rationale.)
**MAIN voice:**
- prompt: "Please share whether this was heart-related."
- helper: "This helps us screen for hereditary heart conditions that affect treatment safety."

**Schema:**
- `question_id`: `qb.pathway.glp1.cv_safety_extended.family_death_heart_related_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.cv_safety_extended.family_sudden_death_v1', equals: 'yes'}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices:** Yes | No | I'm not sure
**`choice_values`:** `yes | no | not_sure`

**Atoms emitted:**
- `yes` → `family_history.sudden_death_under_40_cardiac_related = true`; lives in `repo/clinical-concepts/family_history.ts`. Provider review flag for hereditary cardiac condition screening (HCM, long QT, Brugada, ARVC, familial hyperlipidemia, familial sudden cardiac death syndromes) — provider may recommend cardiology referral or ECG workup before starting GLP-1
- `no` → `family_history.sudden_death_under_40_cardiac_related` emitted DENIED (`status: 'denied_at_intake'`); cardiac screening flag cleared — likely non-genetic cause (accident, trauma, non-cardiac illness)
- `not_sure` → atom left UNCAPTURED; provider follow-up clarification per `Section 1P.4` — clinician may ask patient to reach out to family for context, or proceed with shared decision-making

**Issues found:** An earlier draft replaced Hims's free-text with a 7-option structured single_select covering heart disease / arrhythmia / stroke / cancer / accident / other / dont_know. Two problems with that approach: (1) asking a bereaved patient to categorize the death of a family member who died young is tonally invasive — "what was the cause?" reads as clinical detachment from what is, for many patients, the loss of a parent or sibling; (2) structured cause-of-death options extract weaker signal than asking the actual clinical question directly. The clinical signal we need for GLP-1 safety screening is binary: was this hereditary cardiac or not? Reframing Q18.4 to ask that question directly captures the signal we need in one tap, with Hims-style "please" softening to acknowledge the sensitivity. The rare-edge-case signal loss (e.g., young family member who died of cancer that was actually undisclosed MTC) is acceptable — Q18.2 family history already catches known MTC, and in the rare case where a patient says `not_sure` the provider follow-up can explore further. `stroke` as a signal for hereditary thrombophilia is also a lower-priority signal that can be captured through follow-up if needed. Helper is shared with Q18.3 for cadence consistency (both questions screen for the same clinical concern).
**Recommended rewrite:** Reframed from "what was the cause (7 structured options)" to "was this heart-related (Yes/No/I'm not sure)"; prompt uses Hims-style "Please share" softener for sensitivity; shared helper with Q18.3; dropped "at your visit" language entirely (MAIN is a Hims-style async system and may not involve a synchronous visit).
**Branching adjustments:** `yes` → hereditary cardiac screening flag; provider may recommend cardiology workup before GLP-1 initiation. `no` → cardiac flag cleared. `not_sure` → follow-up clarification.
**Downstream effect:** `provider_review` (informs provider framing; may trigger cardiology referral or ECG workup recommendations).
**Final decision:** **Modify** (reframed from structured cause-of-death to direct heart-related Y/N/unsure question; deftness + clinical-signal directness both improved).

---

## Layer D Phase 2.2.2 audit summary

| Question | Tier | answer_role | atom_kind | downstream_effect | none_logic? | Decision |
|---|---|---|---|---|---|---|
| Q13.1 Height | 1 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q13.2 Current weight | 1 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q13.3 Weight loss goal (delta band) | 2 | preference | preference_motivation | personalization | n/a | Modify |
| Q13.4 Max weight is current Y/N | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q13.5 Max weight value (conditional) | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q14.1 Has attempted (5y) | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q14.2 Methods tried (conditional; multi-instance) | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q15.1 GLP-1 status | 1 | clinical_safety | safety | provider_review | n/a | Modify |
| Q15.2 Which GLP-1 (conditional; multi-instance) | 1 | clinical_safety | safety | provider_review | n/a | Modify |
| Q15.3 Dose recent (conditional) | 2 | clinical_safety | safety | provider_review | n/a | Modify |
| Q15.4 Duration on your GLP-1 (conditional) | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q15.5 Weight lost on your GLP-1 (conditional; banded) | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q15.6 Side effects on your GLP-1 (conditional; grouped) | 2 | clinical_safety | safety | provider_review | exclusive_with_other_choices | Modify |
| Q15.7 When did you stop (past only) | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q15.8 Why did you stop (past only) | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q16.1 Primary motivation | 3 | motivation | preference_motivation | personalization | n/a | Modify |
| Q16.2 Treatment priority | 3 | commercial_confidence | operational | personalization | n/a | Modify |
| Q16.3 Educational 83% stat | 3 | educational_trust | n/a (educational_screen) | personalization | n/a | Modify |
| Q16.4 Treatment-in-mind preference | 3 | preference | preference_motivation | personalization | n/a | Modify |
| Q16.5 Goal benefits multi-select | 3 | motivation | preference_motivation | personalization | n/a | Modify |
| Q16.6 Patient testimonials | 3 | commercial_confidence | n/a (educational_screen) | personalization | n/a | Modify |
| Q16.7 BMI personalized (derived_display) | 3 | educational_trust | n/a (educational_screen) | personalization | n/a | Modify |
| Q16.8 Treatment mechanism | 3 | educational_trust | n/a (educational_screen) | personalization | n/a | Modify |
| Q17.1 ED symptom screen | 1 | clinical_safety | safety | provider_review | exclusive_with_other_choices | Modify |
| Q17.2 ED diagnosis history | 2 | clinical_safety | safety | provider_review | n/a | Modify |
| Q17.3 ED diagnosis subtype (conditional; multi-select; AN hard-stop) | 1 | clinical_safety | safety | provider_review | exclusive_with_other_choices (on not_sure) | Modify |
| Q17.4 ED current treatment (conditional) | 2 | clinical_safety | safety | provider_review | n/a | Modify |
| Q18.1 Personal history MTC/MEN-2/Long QT (multi-select; MTC+MEN-2 hard-stop) | 1 | clinical_safety | safety | provider_review | exclusive_with_other_choices | Modify |
| Q18.2 Family history MTC/MEN-2/Long QT (multi-select; MTC+MEN-2 hard-stop) | 1 | clinical_safety | safety | provider_review | exclusive_with_other_choices (on none_of_these only) | Modify |
| Q18.3 Family sudden death under 40 | 2 | clinical_safety | safety | provider_review | n/a | Modify |
| Q18.4 Heart-related? (conditional; Y/N/I'm not sure) | 2 | clinical_safety | safety | provider_review | n/a | Modify |

**Verdict:** 0 Keep + 31 Modify. Net: spec introduces 31 GLP-1-pathway-specific questions across 6 modules. ~15 are net-new clinical signal beyond Hims's funnel (Q13.5 max weight value; Q14.1-Q14.2 weight loss attempts; Q15.2-Q15.8 prior GLP-1 details; Q16.4 treatment-in-mind 3rd option; Q16.7 BMI personalized text-based template; Q17.2-Q17.4 ED diagnosis + diagnosis subtype + current treatment). ~16 closely mirror Hims with structural refactors (Q13.1-Q13.4 weight history; Q15.1 GLP-1 status; Q16.1-Q16.3 + Q16.5 + Q16.6 + Q16.8 motivation/commercial/educational sequence; Q17.1 ED symptom screen; Q18.1-Q18.4 personal/family thyroid-endocrine-cardiac screen split from Hims's combined multi-select + Q18.4 reframed from Hims free-text cause-of-death to heart-related Y/N/I'm not sure — captures the clinical signal directly with Hims-style deftness for a sensitive family-death context). Module 16 introduces 4 educational_screen questions (Q16.3 / Q16.6 / Q16.7 / Q16.8) emitting only non-clinical analytics events per `Section 1K.19.9`; no clinical atoms from educational screens. All clinical/preference/intent atoms emit in pathway-agnostic concept registry per `Section 1K.3` atomization principle (only Q13.3 weight loss goal carries `atom.pathway.glp1.*` namespace as Layer D pathway-unique fact). Module 17 atoms live in `mental_health` domain (extends Phase 1 Module 11 baseline); Q17.3 specifically produces differentiated subtype atoms (`condition.anorexia_nervosa_history` / `condition.bulimia_nervosa_history` / `condition.binge_eating_disorder_history`) that drive differentiated rule routing per `Section 1Q.15` — AN as hard stop, BN as flag cohort, BED as distinct flag cohort with emerging positive-indication evidence. Module 18 atoms span `endocrine` (MTC, MEN-2) + `cardiovascular` (long QT) + `family_history` (sudden death under 40) domains; Q18.1/Q18.2 produce personal + family history atoms that feed `rule.glp1.eligibility.contraindication_men2` and `rule.glp1.eligibility.contraindication_thyroid_cancer` per `Section 1Q.15` — both fire `denied_contraindication_absolute` closure with `reopen_eligibility_criteria: none` per `Section 1J.14`.

## Cross-pathway reuse projection

Layer D modules are pathway-specific by definition; cross-pathway reuse is N/A. However:
- **Q13.1 + Q13.2** (height + current weight) atoms (`vital.height_cm` + `vital.weight_kg`) are CONSUMED by every pathway whose safety preflight needs BMI (cardiometabolic / TRT / Female HRT / GAH / hair loss minoxidil contraindication). Future pathway-specific weight-history modules (e.g., `mod.pathway.trt.weight_baseline_v1`) would author DIFFERENT pathway questions to capture the same atoms (or reuse this module's questions via composition if clinically appropriate).
- **Q15.1 GLP-1 status** atom (`medication.glp1_use_status`) is CONSUMED by future TRT pathway (TRT + GLP-1 combination is common; provider reviews concurrent therapy) and Female HRT pathway (some GLP-1 + HRT combinations require cardiovascular monitoring). Future pathways would compose `mod.clinical_core.medication_history_v1` for general medication history; THIS module's GLP-1 specifics are GLP-1-pathway-only.
- **Q14 weight loss attempts** (Q14.1 has-attempted + Q14.2 methods multi-select) is GLP-1-specific framing; future bariatric or mental-health-eating-disorder pathways would author their own attempt-history modules with pathway-appropriate framing.
- **Module 16 motivation_and_goals** is GLP-1-specific in CONTENT but the STRUCTURE (motivation primer → treatment priority → educational stat → treatment-in-mind → goal benefits → testimonials → personalized derived_display → mechanism explanation) is reusable as a TEMPLATE for future TRT / Female HRT / ED / hair loss motivation modules. Atoms (`intent.weight_loss_*`, `intent.treatment_*`) are pathway-named in the metadata-namespace; future pathways author parallel `intent.testosterone_therapy_*`, `intent.female_hrt_*`, etc. atoms with the same structural pattern.
- **Module 17 eating_disorder_screen** is GLP-1-specific in composition position (runs in the safety cascade of the GLP-1 pathway) but the atoms (`condition.eating_disorder_*`, `condition.anorexia_nervosa_history`, `condition.bulimia_nervosa_history`, `condition.binge_eating_disorder_history` in `repo/clinical-concepts/mental_health.ts`) are pathway-agnostic. A future psychiatry pathway or a bariatric pathway can CONSUME these atoms if the patient has completed intake on any pathway that rendered Module 17, without re-asking the questions. The question bank (Q17.1 Hims-verbatim symptom screen; Q17.2 diagnosis history; Q17.3 diagnosis subtype; Q17.4 current treatment) is reusable via `module_composition` references per `Section 1K.3` if a future non-GLP-1 pathway needs the same ED safety screen. Note: the AN-hard-stop rule is GLP-1-specific (driven by appetite-suppression + restriction-driven-pathology incompatibility); other pathways would author their own AN-routing rules appropriate to their treatment mechanism.
- **Module 18 cv_safety_extended** is GLP-1-specific in composition position but the atoms (`condition.medullary_thyroid_carcinoma_history`, `condition.men2_history` + their `_family_history` counterparts in `repo/clinical-concepts/endocrine.ts`; `condition.long_qt_syndrome_history` / `_family_history` in `repo/clinical-concepts/cardiovascular.ts`; `family_history.sudden_death_under_40_history` + `family_history.sudden_death_under_40_cardiac_related` in `repo/clinical-concepts/family_history.ts`) are pathway-agnostic. The MTC + MEN-2 hard-stop rules are GLP-1-specific (FDA boxed warning for semaglutide + tirzepatide only); Long QT + family-death-under-40 atoms are broadly reusable — any future pathway whose safety preflight needs to know about hereditary cardiac conditions (e.g., TRT + cardiovascular risk; stimulants for ADHD) can CONSUME these atoms without re-asking. The question bank (Q18.1 personal + Q18.2 family + Q18.3 sudden-death Y/N + Q18.4 heart-related Y/N/unsure) is reusable via `module_composition` if a future pathway needs the same screens, though the condition-specific answer options (MTC + MEN-2) would likely be swapped for pathway-relevant conditions. Note: MTC/MEN-2 are FDA-boxed specifically for incretin-based therapies (GLP-1 agonists + GIP/GLP-1 dual agonists); other pathways have different absolute contraindication sets.

## Architectural patterns applied (binding; per Section 1K.3)

1. **Atomization principle:** all atoms live in `repo/clinical-concepts/<domain>.ts` (vitals.ts / medications.ts / intent.ts / cardiometabolic.ts / gastrointestinal.ts) per `Section 1K.3`. Pathway-unique facts (Q13.3 weight loss goal band) carry the `atom.pathway.glp1.*` namespace per Layer D row of the 4-layer taxonomy table.
2. **Banded numerics:** for Q13.3 / Q15.3 / Q15.4 / Q15.5 / Q15.7, the band is the atom. Derived numeric values (e.g., midpoint-converted-to-kg) are computed at display time per `Section 1K.9` `intake_derived_score`, not stored as primary atoms.
3. **Multi-instance discipline (`Section 1K.5.A`):** Q14.2 method-tried-multi-select uses `(concept_id, context_key)` tuple where `context_key = method_kind`; per-method follow-ups deferred to Phase 2.2. Q15.2 prior GLP-1 use is multi-instance-aggregated for V1 (per-drug timeline + per-drug Q15.3-Q15.5 cascade deferred to Phase 2.2 for patients who used multiple GLP-1s).
4. **`hard_stop` semantics:** none of these 3 modules emit hard_stop atoms directly. `Section 1Q.16` GLP-1 contraindication checks fire DOWNSTREAM from Q15.6 atoms (e.g., severe abdominal pain → safety preflight reviews for pancreatitis confirmation; if confirmed via clinical history elsewhere → `rule.glp1.safety.contraindication_pancreatitis_personal_history` BLOCK fires per `Section 1Q.15`). Module-layer atoms are clinical_history / safety classification but not hard-blocking themselves.
5. **Concept naming rule (`Section 1K.5.A`):** lifecycle in assertion fields. Q15.6 side effects use `condition.glp1_side_effect_<kind>_history` with `assertion_type: history_of` and `metadata.disease_state: side_effect_course_resolved`. Q15.1 status uses `medication.glp1_use_status` with metadata value (`currently | past | never`); the concept_id names the entity (GLP-1 use), the value names the lifecycle.
6. **Pathway-specific clinical capture (`Section 1K.3` directly-answered-fields rule):** Q15.5 weight-lost + Q15.6 side effects + Q15.8 stop reason are CLINICAL FACTS asked DIRECTLY; never inferred from gender_identity, biological_sex_at_birth, or any other identity atom. The directly-answered-fields rule is preserved.
7. **Hims source ref discipline:** every question carries explicit reference to Hims source step (or "Implicit" when MAIN adds beyond Hims). Net `Implicit` count: 11 of 23 (Q13.3 partially + Q13.5 + Q14.1-Q14.2 + Q15.2-Q15.8) — most of the cascade depth is MAIN-additive beyond Hims's funnel; Module 16 questions (Q16.1-Q16.8) all map directly to Hims Steps 5, 7, 10-11, 12, 17, 18-19, 25, 26.
8. **Anchoring rule applied:** all Module 15 follow-up prompts anchor to `"your GLP-1"` (drug-class anchor); Q15.4 uses dynamic past-vs-present-tense via `patient_label_template_refs`. No unanchored "it" references in any prompt per the binding anchoring rule in MAIN voice principles.
9. **Required vs answer-option discipline applied:** Q13.3 weight-loss-goal is `requiredness: required_to_continue` with `"I don't have a specific number"` as the don't-know answer option. Pattern preserved in Q15.5 weight-lost (`"I don't remember"` + `"I didn't lose weight (or gained)"` as structured options) and Q15.7 / Q15.8 (`"I don't remember"` / `"Other"`).
10. **Educational_screen pattern (Module 16):** 4 questions in Module 16 (Q16.3 / Q16.6 / Q16.7 / Q16.8) use `answer_type: educational_screen` per `Section 1K.3` Stage 1.5. These emit ZERO clinical atoms (`emits_atoms: []` binding); they emit non-clinical analytics events (`intake.educational_screen.continued`) per `Section 1K.19.9` ONLY. Q16.7 is a `derived_display` per `Section 1K.4` — body template renders derived BMI from prior atoms (Q13.1 + Q13.2). Q16.6 testimonials carry inline FDA-compliant disclaimer copy in body block; clinical CODEOWNER reviews testimonial content + disclaimer at PR.

## Counts (after this checkpoint)

- Layer D Phase 2.2.2 (in-progress): 6 modules / 31 questions defined (Module 18 cv_safety_extended added with 4 questions in this checkpoint: personal history + family history + family sudden death Y/N + cause of death conditional)
- Stage 2 grand total so far (Phase 1 + Phase 2.2.2 in-progress): 18 modules / 70 questions defined
- Per-patient render varies: GLP-1-naive ~20-21 questions; current GLP-1 patient ~25 questions; past GLP-1 patient ~27 questions; add 2 more for patients with ED diagnosis history; add 1 more for patients reporting family sudden death under 40
- Hard-stop early-exit: patients asserting MTC or MEN-2 personal or family history exit intake at Module 18 with `denied_contraindication_absolute` closure; downstream Modules 19-21 do not render for these patients
- Remaining for Phase 2.2.2: 3 more modules / ~10-14 more questions (bariatric surgery extended + GI safety extended + contraindication acknowledgments)

## Next deliverable

Phase 2.2.2 (in-progress; this checkpoint added Module 18): remaining 3 Layer D modules:

1. ~~`mod.pathway.glp1.eating_disorder_screen_v1`~~ — **COMPLETE prior checkpoint** (4 questions: symptom screen + diagnosis history + diagnosis subtype + current treatment; Q17.3 subtype drives differentiated routing — AN hard stop, BN flag, BED distinct flag cohort)
2. ~~`mod.pathway.glp1.cv_safety_extended_v1`~~ — **COMPLETE this checkpoint** (4 questions: personal history + family history of MTC/MEN-2/Long QT + family sudden death under 40 Y/N + structured cause of death; MTC + MEN-2 personal OR family history fire `denied_contraindication_absolute` hard stop per `Section 1Q.15`)
3. `mod.pathway.glp1.bariatric_surgery_extended_v1` — extends `mod.clinical_core.surgery_history_v1` (Phase 1 Layer B) with gastric bypass / sleeve / lap band / duodenal switch (per Hims Step 53); ~2-3 questions
4. `mod.pathway.glp1.gi_safety_extended_v1` — extends `mod.domain.gastrointestinal.baseline_history_v1` (Phase 1 Module 9) with pancreatitis / gallbladder / gastroparesis / diabetic retinopathy specifics; ~5-7 questions
5. `mod.pathway.glp1.contraindication_acknowledgments_v1` — MEN-2 BLACK BOX acknowledgment + off-label disclosure consents (`acknowledgment` answer_type; emits `consent.*` atoms per `Section 1K.5.A` + `Section 1K.11`); ~3-4 questions

After Phase 2.2.2: 9 GLP-1 Layer D modules complete; ~45-50 total Layer D questions; followed by Phase 3 GLP-1 pathway composition file (`repo/intake/pathways/glp1.ts`) wiring all layers.
