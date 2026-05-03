# GLP-1 Pathway-specific modules — Layer D spec v1

**Date:** 2026-05-03
**Stage:** 2 Phase 2.1 — Layer D authoring (first 3 of ~9 modules)
**Clinical CODEOWNER:** founder (board-certified MD)
**Architecture pin:** `Section 1K.3` (atomization + 4-layer module taxonomy + answer mechanics + pathway override + directly-answered-fields rule) + `Section 1K.4` (question bank + versioning) + `Section 1K.5.A` (clinical assertion layer; concept registry organized by domain) + `Section 1K.19` (intake repository + control model) + `Section 1Q.15` (GLP-1 vertical slice; 24 rules / 25 templates) + `Section 1Q.16` (adversarial pre-runtime gate)
**Reference funnel:** [.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md](.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md)

## Scope

Layer D pathway-specific GLP-1 modules — Phase 2.1 (first 3 of ~9 total). Layer D modules collect pathway-specific facts that extend Layer A/B/C baselines OR capture pathway-unique data (per `Section 1K.3` 4-layer taxonomy). Atoms emitted by Layer D STILL live in domain registry files (`repo/clinical-concepts/<domain>.ts`) per `Section 1K.3` atomization principle; the MODULE is pathway-owned because the question context is pathway-specific. The only `atom.pathway.glp1.*` namespace atom in this checkpoint is `atom.pathway.glp1.weight_goal_target_kg` (a pathway-unique fact; not a clinical concept).

**3 modules in this file:**
1. `mod.pathway.glp1.weight_history_v1` — 5 questions (height + current weight + goal weight + max-weight Y/N + max-weight value if not current)
2. `mod.pathway.glp1.weight_loss_attempts_v1` — 3 questions (prior attempts Y/N + methods multi-select + free-text what-worked)
3. `mod.pathway.glp1.prior_glp1_use_v1` — 7 questions (status + which GLP-1 + dose + duration + when-stopped/why + side effects + weight lost while on it)

**Total: 15 questions defined.**

**Per-patient render counts (varies by branch):**
- GLP-1-naive patient with no prior weight-loss attempts: ~7 questions rendered (Q13.1 + Q13.2 + Q13.3 + Q13.4 + Q14.1 + Q15.1; Q13.5 skipped if `current = max ever`; Q14.2/Q14.3 + Q15.2-Q15.7 skipped)
- GLP-1-naive patient with prior diet attempts: ~9-10 questions rendered (above + Q14.2 + Q14.3)
- Returning GLP-1 patient (Q15.1 ∈ {currently, past}): ~13-15 questions rendered (full cascade Q15.2 - Q15.7)

## MAIN voice principles (binding; reused from Phase 1)

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
**Atom domain:** `vitals` (height + weight measurements live in `repo/clinical-concepts/vitals.ts`) + `intent` (`atom.pathway.glp1.weight_goal_target_kg` lives in `repo/clinical-concepts/intent.ts` under `intent.pathway_glp1_*` prefix per `Section 1K.3` Layer D atom-namespace exception)

### Q13.1 — Height

**Hims source:** Step 22-23 "What is your height? Please enter your height in feet and inches. Feet 5 / Inches 11"
**MAIN voice:**
- prompt: "What's your height?"
- helper: "We use this with your weight to calculate BMI."

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
- helper: "Your best estimate is fine. We'll track this over time."

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

### Q13.3 — Goal weight

**Hims source:** Step 24 "What is your goal weight? Please enter your desired weight in pounds (lbs). Pounds 155"
**MAIN voice:**
- prompt: "What's your goal weight?"
- helper: "Optional but helpful for personalizing your plan. You can change this later."

**Schema:**
- `question_id`: `qb.pathway.glp1.weight_history.goal_weight_v1` | `tier`: 2
- `answer_type`: `numeric` (lbs integer; resolver normalizes to kg) | `selection_cardinality`: `optional_blank_allowed` | `requiredness`: `optional`
- `answer_role`: `preference` | `intent_of_answer_set`: `motivation_priming`
- `entity_kind`: `single_value` | `atom_kind`: `preference_motivation` | `downstream_effect`: `personalization`
- `render_when`: null (baseline; renders right after Q13.2)
- `is_trackable`: false (goal is intent, not measurement; appended via `intake_response` only)

**Atoms emitted:**
- Positive: `atom.pathway.glp1.weight_goal_target_kg` (metadata: `{value_kg: number, source_unit: 'lbs', source_value: lbs}`)
- Denied: blank acceptable (`requiredness: optional`); patient can skip without penalty

**Issues found:** Hims requires goal weight; MAIN softens to optional with motivation-priming framing. Some patients genuinely don't have a number in mind — forcing one creates anchoring bias and patient frustration. Helper acknowledges that goals can change ("You can change this later"). Per `Section 1K.3` Stage 1.5 anti-pattern guard: `answer_role: preference` is correct (this is patient preference / motivation, not clinical safety) — provider does NOT prescribe to a specific goal weight; clinical decisions use BMI + comorbidities, not patient goal.
**Recommended rewrite:** Adopt optional + motivation-priming framing.
**Branching adjustments:** `Section 1K.9` `intake_derived_score.glp1_weight_loss_target_pct = (current_weight - goal_weight) / current_weight` computed when both populated; consumed by motivation rules in `Section 1Q.15` for personalization (e.g., "you're aiming for a 9% loss — most patients see results in the 5-15% range" personalized template).
**Downstream effect:** `personalization` (drives BMI-comparison display per Hims Step 25 + content selection in Hims-style educational screens).
**Final decision:** **Modify** (optional + motivation-priming framing; permission-to-skip).

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
**Atom domain:** `intent` (`intent.prior_weight_loss_*`) + `narrative` (Q14.3 free-text post-atomization via `Section 1P`)

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

**Choices:** Diet (eating differently or restricting) | Exercise (regular activity / gym / classes) | Prescription weight-loss medication | Bariatric surgery or weight-loss procedure | Commercial program (Weight Watchers, Noom, Jenny Craig, etc.) | Supplements or OTC products | Other (free-text in Q14.3)
**`choice_values`:** `diet | exercise | rx | bariatric_surgery | commercial_program | supplement_otc | other`

**Atoms emitted:**
- Per selected: `intent.prior_weight_loss_method_<kind>` (e.g., `intent.prior_weight_loss_method_diet`, `intent.prior_weight_loss_method_exercise`, `intent.prior_weight_loss_method_rx`, etc.; metadata: `{kind, timeframe: 'last_5_years', context_key: <kind>}` per `Section 1K.5.A` multi-instance discipline)
- Denied: n/a (`one_or_more` cardinality; required when rendered)

**Issues found:** No `none_logic` because cardinality is `one_or_more` (patient can't reach this question without saying yes to Q14.1 — at least one positive selection is implied); the absence of "None of these" is intentional (would be self-contradictory with Q14.1 = yes). The `bariatric_surgery` choice CROSS-REFERENCES the `mod.clinical_core.surgery_history_v1` baseline (Phase 1) per `Section 1K.3` contextual extension principle — bariatric surgery selection here flags clinical-history context, but the surgery atom emission lives in clinical_core (this question records the WEIGHT-LOSS-ATTEMPT FRAMING; surgery atoms live in `procedure.gastric_bypass_history` etc. emitted by Phase 2.2 `mod.pathway.glp1.bariatric_surgery_extended_v1` per Section 1K.3 contextual extension).
**Recommended rewrite:** Adopt as new Tier 2 conditional with 7-option multi-select; `instance_scope: aggregate` for V1 (per-method depth deferred).
**Branching adjustments:** Selection of `bariatric_surgery` cross-references downstream `mod.pathway.glp1.bariatric_surgery_extended_v1` (Phase 2.2). Selection of `rx` cross-references downstream `mod.pathway.glp1.prior_glp1_use_v1` (this module — patient who selects `rx` here may or may not have used GLP-1; Q15.1 captures that distinction directly). Selection of `other` triggers Q14.3 free-text (free-text is `optional` regardless; selecting `other` strongly suggests Q14.3 will be populated).
**Downstream effect:** `provider_review` (multi-method context informs visit framing + provider personalization).
**Final decision:** **Modify** (new Tier 2 conditional with multi-instance discipline; per-method depth deferred to Phase 2.2).

### Q14.3 — What worked or didn't? (free-text; optional)

**Hims source:** Implicit (Hims doesn't ask narrative reflection on prior attempts; MAIN adds Tier 3 free-text for richer provider context per `Section 1P` narrative atomization).
**MAIN voice:**
- prompt: "Anything specific that worked or didn't?"
- helper: "Optional. Helps your provider personalize your plan. Or skip if there's nothing to add."

**Schema:**
- `question_id`: `qb.pathway.glp1.weight_loss_attempts.what_worked_freetext_v1` | `tier`: 3
- `answer_type`: `free_text_bounded` | `selection_cardinality`: `optional_blank_allowed` | `requiredness`: `skippable_blank`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.weight_loss_attempts.has_attempted_v1', equals: 'yes'}`

**`free_text_rules`:** `{allow_blank: true, explicit_no_value: 'Nothing specific to add', safety_scan: true, do_not_force_fake_content: true}`
**`narrative_intent`:** `patient_concern`

**Atoms emitted:**
- At intake: `narrative.weight_loss_attempt_freetext` (raw stored)
- Post-submit (via `Section 1P` AI atomization): `intent.prior_weight_loss_method_<kind>_outcome_<positive|negative|neutral>` per detected method-outcome pair; OR `narrative.weight_loss_concern_*` for patient concerns (e.g., "I plateaued after 3 months on Wegovy" extracts to outcome + duration atoms)

**Issues found:** Tier 3 (NICE TO HAVE; A/B-testable). Honors patient time when there's nothing meaningful to add (`do_not_force_fake_content: true` + explicit-no-value checkbox). Per `Section 1P` narrative atomization: AI extracts structured atoms from patient narrative (provider sees raw text + atomized facts in workspace per `Section 1P.4`).
**Recommended rewrite:** Adopt as Tier 3 free-text with skippable_blank pattern.
**Branching adjustments:** None at intake; AI atomization runs post-submit per `Section 1P`.
**Downstream effect:** `provider_review` (raw narrative + atomized outcomes surface in provider workspace per `Section 1G.8.5`).
**Final decision:** **Modify** (new Tier 3 free-text; skippable_blank).

---

## Module 15 — `mod.pathway.glp1.prior_glp1_use_v1`

**`module_id`:** `mod.pathway.glp1.prior_glp1_use_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical (CRITICAL — prior GLP-1 use directly informs starting dose, contraindication screening, and adherence-aware dose decisions per `Section 1Q.16` Refinement 1 `rule.glp1.rx.adherence_gap_dose_decision`)
**`pathways`:** `glp1` only (Layer D pathway-specific; not reused — TRT/HRT/ED have their own prior-Rx-use modules)
**`required_for`:** safety, dose calibration, eligibility (some payers exclude patients currently on a GLP-1 from new GLP-1 PA; some pathways restart-only after washout)
**`assertion_group_emit_trigger`:** `module_complete` (composite emission of medication + side-effect atoms in same DB transaction)
**Atom domain:** `medications` (drug-use atoms live in `repo/clinical-concepts/medications.ts`) + `gastrointestinal` / `endocrine` (side-effect condition atoms live in respective domain registries) + `vitals` (Q15.7 weight-lost outcome lives in `vitals.ts`)

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
**Branching adjustments:** `currently` OR `past` → render Q15.2 + Q15.3 + Q15.4 + Q15.6 + Q15.7 (and Q15.5 if `past`). `never` → skip all follow-ups; provider sees "GLP-1 naive" flag.
**Downstream effect:** `provider_review` (returning patient → adherence-aware dose decision per `Section 1Q.16` Refinement 1 `rule.glp1.rx.adherence_gap_dose_decision`; naive patient → standard starting dose).
**Final decision:** **Modify** (tighter helper; preserve Hims 3-option semantics).

### Q15.2 — Which GLP-1(s) (conditional; renders when Q15.1 ∈ {currently, past})

**Hims source:** Implicit (Hims captures specific drug via medications list at Step 57; MAIN asks directly here for cleaner cascade + specific brand-name capture).
**MAIN voice:**
- prompt: "Which one(s)?"
- helper: "Select all that apply. If you've switched, pick everything you've used."

**Schema:**
- `question_id`: `qb.pathway.glp1.prior_glp1_use.which_v1` | `tier`: 1
- `answer_type`: `multi_select` | `selection_cardinality`: `one_or_more` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `multi_instance` | `instance_scope`: `aggregate` (per-drug follow-ups deferred to Phase 2.2; aggregate atom emitted per drug in V1; Q15.3-Q15.7 capture details for the MOST RECENT drug only in V1 per per-instance discipline below)
- `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1', in: ['currently', 'past']}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices:** Compounded semaglutide | Compounded tirzepatide | Ozempic (semaglutide) | Wegovy (semaglutide) | Mounjaro (tirzepatide) | Zepbound (tirzepatide) | Other GLP-1 (specify) | I don't remember the name
**`choice_values`:** `compounded_semaglutide | compounded_tirzepatide | ozempic | wegovy | mounjaro | zepbound | other | dont_remember`

**Atoms emitted:**
- Per selected: `medication.glp1_<drug>_use` (e.g., `medication.glp1_semaglutide_compounded_use`, `medication.glp1_ozempic_use`, `medication.glp1_zepbound_use`, etc.; metadata: `{drug_kind, brand_name, generic_name, context_key: <drug>}` per multi-instance discipline)
- `dont_remember` selected → `medication.glp1_unknown_drug_use = true`; provider follow-up Mode F per `Section 1P.4` to clarify
- Denied: n/a (`one_or_more` cardinality; required when rendered)

**Issues found:** Compounded semaglutide / tirzepatide are common (some retail compounders + telehealth providers prescribed compounded versions during the FDA shortage 2022-2024). Including them as separate choices captures the compounding flag (patient may not know batch consistency or shared-active-ingredient safety profile). "I don't remember" is real and clinically valid — many patients used a service-name (Hims, Sequence, Ro) without knowing the underlying compound.
**Recommended rewrite:** Adopt 8-option multi-select with brand + generic dual labels.
**Branching adjustments:** `dont_remember` → provider Mode F clarification opens at safety preflight (provider may request prior chart records from previous clinic per `Section 1G.7.6` clinical_required follow-up). Multiple selections (e.g., started Wegovy, switched to Zepbound) → V1 captures aggregate atoms; per-drug timeline (when started/stopped each) deferred to Phase 2.2 multi-instance follow-up.
**Downstream effect:** `provider_review` (specific drug informs starting dose + lockout rules — e.g., GLP-1 → DPP-4 inhibitor combination is a known adverse-event flag per FDA labels).
**Final decision:** **Modify** (new explicit question; preserve Hims's brand-list examples as choices).

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

### Q15.4 — Duration on it (conditional; renders when Q15.1 ∈ {currently, past})

**Hims source:** Implicit (Hims doesn't capture; MAIN adds for adherence-aware dose decision per Section 1Q.16 Refinement 1).
**MAIN voice:**
- prompt: "How long have you been on it (or were you on it)?"
- helper: "Best estimate. We're checking if you've been on it long enough to justify continuing at your current dose."

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

**Issues found:** Banded duration (rather than weeks integer) is intentional — patients don't reliably remember exact start dates; bands cover the clinically-meaningful adherence-decision thresholds (4-week titration window per FDA labels; 8-week minimum for dose-stability claim per Endocrine Society guidance). Helper sets honest expectation about why duration matters (no false claim that we'll just continue prescribing — provider confirms).
**Recommended rewrite:** Adopt 6-option banded set.
**Branching adjustments:** Q15.4 + Q15.3 + Q15.1 jointly feed `Section 1Q.16` Refinement 1 `rule.glp1.rx.adherence_gap_dose_decision`. Example: Q15.1 = `currently` + Q15.3 = `mid_maintenance` + Q15.4 = `more_than_8mo` → continue at current dose without re-titration.
**Downstream effect:** `provider_review` (adherence-aware dose decision per Section 1Q.16 Refinement 1).
**Final decision:** **Modify** (new banded duration question; clinically critical for adherence-aware dose decision).

### Q15.5 — When did you stop and why? (conditional; renders only when Q15.1 = past)

**Hims source:** Implicit (Hims doesn't capture; MAIN adds for re-treatment context).
**MAIN voice:**
- prompt: "When did you stop, and why?"
- helper: "Best estimate is fine. We ask so we can pick the right restart plan."

**Schema:**
- `question_id`: `qb.pathway.glp1.prior_glp1_use.stop_when_why_v1` | `tier`: 2
- `answer_type`: `mixed` (composite: date-band single_select + free-text reason); resolver writes 2 atoms per `Section 1K.0` composite-question pattern | `selection_cardinality`: `exactly_one` (date band) + `optional_blank_allowed` (reason) | `requiredness`: `conditionally_required` (date band) + `optional` (reason)
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1', equals: 'past'}`
- `required` (resolver): `<Predicate>` (date band required when render_when fires; reason optional)

**Date band choices:** Less than 1 month ago | 1-3 months ago | 3-6 months ago | 6-12 months ago | More than 1 year ago | I don't remember
**Date band `choice_values`:** `less_than_1mo | 1_to_3mo | 3_to_6mo | 6_to_12mo | more_than_1y | dont_remember`

**Reason `free_text_rules`:** `{allow_blank: true, explicit_no_value: 'Skip', safety_scan: true, do_not_force_fake_content: true}`
**Reason `narrative_intent`:** `patient_concern`

**Atoms emitted:**
- Positive (date band): `medication.glp1_stop_date_band` (metadata: `{band: <choice>}`)
- Positive (reason free-text): `narrative.glp1_stop_reason_freetext` (raw stored); post-submit AI atomization extracts structured atoms (e.g., `condition.glp1_side_effect_severe_history`, `intent.cost_concern_disclosed`, `intent.weight_loss_plateau_disclosed`, etc.) per `Section 1P`
- Denied: n/a (date band required)

**Issues found:** Reason is intentionally optional + free-text — closed-list reasons (cost / side effects / no-results / lifestyle / pregnancy / other) reduce richness; AI atomization extracts structured signals from narrative per `Section 1P`. Common stop reasons (cost, side effects, plateau) all surface clinically distinct decisions (cost → discuss alternative pricing; side effects → discuss titration; plateau → discuss escalation or different drug).
**Recommended rewrite:** Adopt composite (date band required + reason optional).
**Branching adjustments:** `more_than_1y` ago → considered washout-complete; restart at starter dose by default. `less_than_1mo` ago → potential drug-interaction concern if patient on alternate Rx in interim; provider review at safety preflight.
**Downstream effect:** `provider_review` (re-treatment plan + provider visit framing).
**Final decision:** **Modify** (new composite question for past-users only; clinically additive).

### Q15.6 — Side effects experienced (conditional; renders when Q15.1 ∈ {currently, past})

**Hims source:** Implicit (Hims captures via medications list "report side effects" free-text post-Rx; MAIN asks directly upfront for cleaner restart-plan signal).
**MAIN voice:**
- prompt: "Did you experience any of these while on it?"
- helper: "Select all that apply. Honest answers help your provider tailor your plan."

**Schema:**
- `question_id`: `qb.pathway.glp1.prior_glp1_use.side_effects_v1` | `tier`: 2
- `answer_type`: `multi_select` | `selection_cardinality`: `zero_or_more` | `requiredness`: `skippable_with_explicit_none`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` (multi-select; composite atom emitted with structured value array) | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1', in: ['currently', 'past']}`

**Choices:** Nausea | Vomiting | Diarrhea | Constipation | Heartburn or acid reflux | Severe abdominal pain | Gallbladder issues (gallstones, cholecystitis, cholecystectomy) | Severe injection-site reaction | Hair loss | None of these | Other (free-text in follow-up)
**`choice_values`:** `nausea | vomiting | diarrhea | constipation | heartburn | severe_abdominal_pain | gallbladder | injection_site_reaction | hair_loss | none_of_these | other`

**`none_logic`:** `{mode: 'exclusive_with_other_choices', none_choice_value: 'none_of_these'}` (binding for safety screen per `Section 1K.3` Stage 1.5 anti-pattern guard)

**Atoms emitted:**
- Per selected: typed atom `condition.glp1_side_effect_<kind>_history` (e.g., `condition.glp1_side_effect_nausea_history`, `condition.glp1_side_effect_severe_abdominal_pain_history`, `condition.glp1_side_effect_gallbladder_history`); `assertion_type: history_of`; `metadata.disease_state: side_effect_course_resolved` per `Section 1K.5.A` concept naming rule
- "None of these" selected → all 9 side-effect atoms emitted as DENIED (`status: 'denied_at_intake'`; provider sees explicit denial)
- Severe abdominal pain → CRITICAL: provider safety preflight reviews for prior pancreatitis flag per `Section 1Q.15` `rule.glp1.safety.contraindication_pancreatitis_personal_history`; if confirmed, contraindication BLOCK (per FDA black box for semaglutide / tirzepatide pancreatitis history)

**Issues found:** Per `Section 1K.3` Stage 1.5 anti-pattern guard: safety multi_select with "None of these" MUST use `exclusive_with_other_choices` (binding). Severe abdominal pain is the pancreatitis flag — must surface to provider review per FDA labels. Gallbladder issues (cholelithiasis / cholecystitis) are a known GLP-1 side effect; clinically critical to capture for restart decisions.
**Recommended rewrite:** Adopt 11-option set (9 specific side effects + None of these + Other) with `exclusive_with_other_choices` none_logic.
**Branching adjustments:** `severe_abdominal_pain` selected → safety preflight reviews for pancreatitis confirmation (provider Mode F clarification per `Section 1P.4` if not already captured). `gallbladder` selected → provider review for cholecystectomy status + active gallbladder disease. `other` selected → optional Q15.6b free-text follow-up (deferred to Phase 2.2).
**Downstream effect:** `provider_review` (multiple side effects flag pattern of intolerance → provider may consider lower restart dose or alternate drug class).
**Final decision:** **Modify** (new explicit safety question with 11-option set + binding `exclusive_with_other_choices` none_logic).

### Q15.7 — Weight lost while on it (conditional; renders when Q15.1 ∈ {currently, past})

**Hims source:** Implicit (Hims doesn't capture; MAIN adds Tier 3 for restart-plan motivation framing).
**MAIN voice:**
- prompt: "How much weight did you lose while on it?"
- helper: "Optional. Best estimate. Helps your provider set realistic expectations."

**Schema:**
- `question_id`: `qb.pathway.glp1.prior_glp1_use.weight_lost_v1` | `tier`: 3
- `answer_type`: `numeric` (lbs integer; resolver normalizes to kg) | `selection_cardinality`: `optional_blank_allowed` | `requiredness`: `optional`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `personalization`
- `render_when`: `{question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1', in: ['currently', 'past']}`

**Atoms emitted:**
- Positive: `vital.weight_kg_glp1_response` (metadata: `{value_kg_lost: number, source_unit: 'lbs', drug_context: from_q15_2, duration_band: from_q15_4}`)
- Denied: blank acceptable

**Issues found:** Tier 3 (NICE TO HAVE; A/B-testable). Provides motivation framing for returning patients ("you lost 12 lbs last time on Wegovy 1.0 mg over 4 months — let's see if we can do that again"). Optional because patients don't always remember precisely.
**Recommended rewrite:** Adopt as Tier 3 optional numeric.
**Branching adjustments:** None at intake; downstream personalization only.
**Downstream effect:** `personalization` (drives motivation-priming template per `Section 1Q.15` `template.glp1.personalization.prior_response_celebration`).
**Final decision:** **Modify** (new Tier 3 optional question; A/B-testable).

---

## Layer D Phase 2.1 audit summary

| Question | Tier | answer_role | atom_kind | downstream_effect | none_logic? | Decision |
|---|---|---|---|---|---|---|
| Q13.1 Height | 1 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q13.2 Current weight | 1 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q13.3 Goal weight | 2 | preference | preference_motivation | personalization | n/a | Modify |
| Q13.4 Max weight is current Y/N | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q13.5 Max weight value (conditional) | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q14.1 Has attempted (5y) | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q14.2 Methods tried (conditional; multi-instance) | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q14.3 What worked freetext (conditional) | 3 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q15.1 GLP-1 status | 1 | clinical_safety | safety | provider_review | n/a | Modify |
| Q15.2 Which GLP-1 (conditional; multi-instance) | 1 | clinical_safety | safety | provider_review | n/a | Modify |
| Q15.3 Dose recent (conditional) | 2 | clinical_safety | safety | provider_review | n/a | Modify |
| Q15.4 Duration (conditional) | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q15.5 Stop when/why (past only; composite) | 2 | clinical_context | clinical_history | provider_review | n/a | Modify |
| Q15.6 Side effects (conditional) | 2 | clinical_safety | safety | provider_review | exclusive_with_other_choices | Modify |
| Q15.7 Weight lost (conditional; optional) | 3 | clinical_context | clinical_history | personalization | n/a | Modify |

**Verdict:** 0 Keep + 15 Modify. Net: spec introduces 15 new GLP-1-pathway-specific questions across 3 modules, all in MAIN voice with full Section 1K.3 + Stage 1.5 schema discipline. ~10 are net-new clinical signal beyond Hims's funnel (Q13.5 max weight value; Q14.1-Q14.3 weight loss attempts; Q15.2-Q15.7 prior GLP-1 details). 5 closely mirror Hims (Q13.1-Q13.4 weight history; Q15.1 GLP-1 status). All emit atoms in pathway-agnostic concept registry per Section 1K.3 atomization principle (only Q13.3 weight goal carries `atom.pathway.glp1.*` namespace as Layer D pathway-unique fact).

## Cross-pathway reuse projection

Layer D modules are pathway-specific by definition; cross-pathway reuse is N/A. However:
- **Q13.1 + Q13.2** (height + current weight) atoms (`vital.height_cm` + `vital.weight_kg`) are CONSUMED by every pathway whose safety preflight needs BMI (cardiometabolic / TRT / Female HRT / GAH / hair loss minoxidil contraindication). Future pathway-specific weight-history modules (e.g., `mod.pathway.trt.weight_baseline_v1`) would author DIFFERENT pathway questions to capture the same atoms (or reuse this module's questions via composition if clinically appropriate).
- **Q15.1 GLP-1 status** atom (`medication.glp1_use_status`) is CONSUMED by future TRT pathway (TRT + GLP-1 combination is common; provider reviews concurrent therapy) and Female HRT pathway (some GLP-1 + HRT combinations require cardiovascular monitoring). Future pathways would compose `mod.clinical_core.medication_history_v1` for general medication history; THIS module's GLP-1 specifics are GLP-1-pathway-only.
- **Q14 weight loss attempts** is GLP-1-specific framing; future bariatric or mental-health-eating-disorder pathways would author their own attempt-history modules with pathway-appropriate framing.

## Architectural patterns applied (binding; per Section 1K.3)

1. **Atomization principle:** all atoms live in `repo/clinical-concepts/<domain>.ts` (vitals.ts / medications.ts / intent.ts / cardiometabolic.ts / gastrointestinal.ts) per `Section 1K.3`. Only `atom.pathway.glp1.weight_goal_target_kg` carries the `atom.pathway.glp1.*` namespace per Layer D row of the 4-layer taxonomy table (pathway-unique fact; not a clinical concept).
2. **Multi-instance discipline (`Section 1K.5.A`):** Q14.2 method-tried-multi-select uses `(concept_id, context_key)` tuple where `context_key = method_kind`; per-method follow-ups deferred to Phase 2.2. Q15.2 prior GLP-1 use is multi-instance-aggregated for V1 (per-drug timeline + per-drug Q15.3-Q15.7 cascade deferred to Phase 2.2 for patients who used multiple GLP-1s).
3. **`hard_stop` semantics:** none of these 3 modules emit hard_stop atoms directly. `Section 1Q.16` GLP-1 contraindication checks fire DOWNSTREAM from Q15.6 atoms (e.g., severe abdominal pain → safety preflight reviews for pancreatitis confirmation; if confirmed via clinical history elsewhere → `rule.glp1.safety.contraindication_pancreatitis_personal_history` BLOCK fires per `Section 1Q.15`). Module-layer atoms are clinical_history / safety classification but not hard-blocking themselves.
4. **Concept naming rule (`Section 1K.5.A`):** lifecycle in assertion fields. Q15.6 side effects use `condition.glp1_side_effect_<kind>_history` with `assertion_type: history_of` and `metadata.disease_state: side_effect_course_resolved`. Q15.1 status uses `medication.glp1_use_status` with metadata value (`currently | past | never`); the concept_id names the entity (GLP-1 use), the value names the lifecycle.
5. **Pathway-specific clinical capture (`Section 1K.3` directly-answered-fields rule):** Q15.6 side effects + Q15.7 weight-lost are CLINICAL FACTS asked DIRECTLY; never inferred from gender_identity, biological_sex_at_birth, or any other identity atom. The directly-answered-fields rule is preserved.
6. **Hims source ref discipline:** every question carries explicit reference to Hims source step (or "Implicit" when MAIN adds beyond Hims). Net `Implicit` count: 9 of 15 (Q13.5 + Q14.1-Q14.3 + Q15.2-Q15.7) — most of the cascade depth is MAIN-additive beyond Hims's funnel.
7. **Composite question pattern (`Section 1K.0`):** Q15.5 stop-when-why is a `mixed` answer_type with date-band single_select + free-text reason; resolver writes 2 atoms in same DB transaction per composite-question discipline.

## Counts (after this checkpoint)

- Layer D Phase 2.1: 3 modules / 15 questions defined
- Stage 2 grand total so far (Phase 1 + Phase 2.1): 15 modules / 54 questions defined
- Per-patient render varies (cis GLP-1-naive ~7, cis returning ~13-15)
- Remaining for Phase 2.2: ~6 modules / ~35-40 questions

## Next deliverable

Phase 2.2 (DEFERRED to next checkpoint): remaining 6 Layer D modules:

1. `mod.pathway.glp1.cv_safety_extended_v1` — extends `mod.domain.cardiometabolic.baseline_history_v1` (Phase 1 Module 8) with MEN-2 / medullary thyroid cancer family + personal history (per Hims Step 47-51); ~6-8 questions
2. `mod.pathway.glp1.gi_safety_extended_v1` — extends `mod.domain.gastrointestinal.baseline_history_v1` (Phase 1 Module 9) with pancreatitis / gallbladder / gastroparesis / diabetic retinopathy specifics; ~5-7 questions
3. `mod.pathway.glp1.eating_disorder_screen_v1` — extends `mod.domain.mental_health.baseline_v1` (Phase 1 Module 11) with anorexia / bulimia / BED screen (per Hims Step 32); ~3-4 questions
4. `mod.pathway.glp1.bariatric_surgery_extended_v1` — extends `mod.clinical_core.surgery_history_v1` (Phase 1 Layer B) with gastric bypass / sleeve / lap band / duodenal switch (per Hims Step 53); ~2-3 questions
5. `mod.pathway.glp1.contraindication_acknowledgments_v1` — MEN-2 BLACK BOX acknowledgment + off-label disclosure consents (`acknowledgment` answer_type; emits `consent.*` atoms per `Section 1K.5.A` + `Section 1K.11`); ~3-4 questions
6. `mod.pathway.glp1.motivation_and_goals_v1` — Hims-style motivation primer (Hims Step 5 "Why do you want to lose weight?" + Step 17 "What would reaching your goal weight mean for you?") + educational screens (Hims Step 10-11 "83% of Americans" + Step 18-19 testimonials); ~5-8 questions including educational_screen + motivation_priming + commercial_confidence answer_roles

After Phase 2.2: 9 GLP-1 Layer D modules complete; ~50-55 total Layer D questions; followed by Phase 3 GLP-1 pathway composition file (`repo/intake/pathways/glp1.ts`) wiring all layers.
