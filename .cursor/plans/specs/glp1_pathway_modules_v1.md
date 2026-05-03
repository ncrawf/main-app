# GLP-1 Pathway-specific modules — Layer D spec v1

**Date:** 2026-05-03
**Stage:** 2 Phase 2.1 — Layer D authoring (first 3 of ~9 modules)
**Clinical CODEOWNER:** founder (board-certified MD)
**Architecture pin:** `Section 1K.3` (atomization + 4-layer module taxonomy + answer mechanics + pathway override + directly-answered-fields rule) + `Section 1K.4` (question bank + versioning) + `Section 1K.5.A` (clinical assertion layer; concept registry organized by domain) + `Section 1K.19` (intake repository + control model) + `Section 1Q.15` (GLP-1 vertical slice; 24 rules / 25 templates) + `Section 1Q.16` (adversarial pre-runtime gate)
**Reference funnel:** [.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md](.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md)

## Scope

Layer D pathway-specific GLP-1 modules — Phase 2.1 (first 3 of ~9 total). Layer D modules collect pathway-specific facts that extend Layer A/B/C baselines OR capture pathway-unique data (per `Section 1K.3` 4-layer taxonomy). Atoms emitted by Layer D STILL live in domain registry files (`repo/clinical-concepts/<domain>.ts`) per `Section 1K.3` atomization principle; the MODULE is pathway-owned because the question context is pathway-specific. The only `atom.pathway.glp1.*` namespace atom in this checkpoint is `atom.pathway.glp1.weight_loss_goal_band` (a pathway-unique fact; not a clinical concept).

**3 modules in this file:**
1. `mod.pathway.glp1.weight_history_v1` — 5 questions (height + current weight + weight loss goal band + max-weight Y/N + max-weight value if not current)
2. `mod.pathway.glp1.weight_loss_attempts_v1` — 2 questions (prior attempts Y/N + methods multi-select)
3. `mod.pathway.glp1.prior_glp1_use_v1` — 8 questions (status + which GLP-1 + dose + duration + weight lost + side effects + when stopped + why stopped)

**Total: 15 questions defined.**

**Per-patient render counts (varies by branch):**
- GLP-1-naive patient with no prior weight-loss attempts: ~7 questions rendered (Q13.1 + Q13.2 + Q13.3 + Q13.4 + Q14.1 + Q15.1; Q13.5 skipped if `current = max ever`; Q14.2 + Q15.2-Q15.8 skipped)
- GLP-1-naive patient with prior diet attempts: ~8 questions rendered (above + Q14.2)
- Current GLP-1 patient (Q15.1 = currently): ~12 questions rendered (Q15.2 + Q15.3 + Q15.4 + Q15.5 + Q15.6; Q15.7 + Q15.8 skipped)
- Past GLP-1 patient (Q15.1 = past): ~14 questions rendered (full cascade including Q15.7 + Q15.8)

## MAIN voice principles (binding; reused from Phase 1)

### Tone lock (binding)

**Clinical product with subtle warmth. NOT a human product with clinical constraints.**

What this means in practice:
- Direct prompts (Hims-direct cadence). No emotional framing in the prompt itself.
- Helper text explains WHY when sensitive — never adds hype or feeling-y tone.
- Permission-to-estimate, permission-to-skip-via-explicit-option — these warm gestures preserve autonomy without selling.
- No transformation hype. No "amazing journey." No "we're so excited."
- No clinical jargon the patient won't recognize.
- No internal-system narration in patient-facing UI ("provider will follow up", "system flags this for review", etc.). The system handles its own wiring.
- When in doubt: tighter is better.

**Tone-lock corollary (binding):** don't make a funnel question `optional` if you actually want the data. Use an answer option for the don't-know case (`"I don't have a specific number"`, `"I don't remember"`, `"I'm not sure"`). This preserves data completeness without forcing fake content and without leaking optionality into the funnel. Per-question `requiredness` should be `required_to_continue` or `conditionally_required` for any data the system cares about; `optional` is reserved for genuinely-low-priority signal (e.g., narrative free-text patient could skip with no clinical loss).

**Anchoring rule (binding):** in multi-step cascades, follow-up question prompts MUST anchor to a meaningful noun, not "it" or other unanchored pronouns. Three valid anchoring patterns: (a) drug-class anchor (default; `"your GLP-1"`); (b) specific-drug anchor when single drug confirmed and single follow-up (`"your Wegovy"` via `patient_label_template_refs` per `Section 1K.4`); (c) most-recent-instance anchor when multi-drug (`"your most recent GLP-1"`). For Module 15 in this checkpoint, all follow-ups anchor to `"your GLP-1"` for consistency.

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

## Layer D Phase 2.1 audit summary

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

**Verdict:** 0 Keep + 15 Modify. Net: spec introduces 15 net GLP-1-pathway-specific questions across 3 modules (Module 14 reduced from 3 → 2 by removing Q14.3 free-text; Module 15 grew from 7 → 8 by splitting old composite Q15.5 into Q15.7 + Q15.8 — net unchanged). All in MAIN voice with full `Section 1K.3` + Stage 1.5 schema discipline + binding tone lock + binding banded-numeric atom architecture. ~11 are net-new clinical signal beyond Hims's funnel (Q13.5 max weight value; Q14.1-Q14.2 weight loss attempts; Q15.2-Q15.8 prior GLP-1 details). 4 closely mirror Hims (Q13.1-Q13.4 weight history; Q15.1 GLP-1 status). All emit atoms in pathway-agnostic concept registry per `Section 1K.3` atomization principle (only Q13.3 weight loss goal carries `atom.pathway.glp1.*` namespace as Layer D pathway-unique fact).

## Cross-pathway reuse projection

Layer D modules are pathway-specific by definition; cross-pathway reuse is N/A. However:
- **Q13.1 + Q13.2** (height + current weight) atoms (`vital.height_cm` + `vital.weight_kg`) are CONSUMED by every pathway whose safety preflight needs BMI (cardiometabolic / TRT / Female HRT / GAH / hair loss minoxidil contraindication). Future pathway-specific weight-history modules (e.g., `mod.pathway.trt.weight_baseline_v1`) would author DIFFERENT pathway questions to capture the same atoms (or reuse this module's questions via composition if clinically appropriate).
- **Q15.1 GLP-1 status** atom (`medication.glp1_use_status`) is CONSUMED by future TRT pathway (TRT + GLP-1 combination is common; provider reviews concurrent therapy) and Female HRT pathway (some GLP-1 + HRT combinations require cardiovascular monitoring). Future pathways would compose `mod.clinical_core.medication_history_v1` for general medication history; THIS module's GLP-1 specifics are GLP-1-pathway-only.
- **Q14 weight loss attempts** (Q14.1 has-attempted + Q14.2 methods multi-select) is GLP-1-specific framing; future bariatric or mental-health-eating-disorder pathways would author their own attempt-history modules with pathway-appropriate framing.

## Architectural patterns applied (binding; per Section 1K.3)

1. **Atomization principle:** all atoms live in `repo/clinical-concepts/<domain>.ts` (vitals.ts / medications.ts / intent.ts / cardiometabolic.ts / gastrointestinal.ts) per `Section 1K.3`. Pathway-unique facts (Q13.3 weight loss goal band) carry the `atom.pathway.glp1.*` namespace per Layer D row of the 4-layer taxonomy table.
2. **Banded-numeric atoms — band is source of truth; derived numeric is display-only (binding):** when a question captures a numeric quantity that doesn't require precision (weight loss goal, weight lost, dose, duration, stop date), the BAND is the source-of-truth atom emitted by the question. Any derived numeric value (e.g., midpoint-of-band-converted-to-kg) is computed at display time per `Section 1K.9` `intake_derived_score` and is NOT stored as a primary atom.
   - **Forbidden patterns:**
     - Introducing a parallel numeric atom alongside a band atom for the same fact → BLOCKED at code review unless overwhelming clinical justification + clinical CODEOWNER ack
     - Storing the derived numeric value in `intake_response` or `patient_state_observations` → BLOCKED (it's a derived value, not a clinical observation)
   - **Applies to:** Q13.3 weight loss goal (`atom.pathway.glp1.weight_loss_goal_band`); Q15.3 dose (`medication.glp1_dose_recent_band`); Q15.4 duration (`medication.glp1_duration_band`); Q15.5 weight lost (`medication.glp1_weight_lost_band`); Q15.7 stop date (`medication.glp1_stop_date_band`).
3. **Multi-instance discipline (`Section 1K.5.A`):** Q14.2 method-tried-multi-select uses `(concept_id, context_key)` tuple where `context_key = method_kind`; per-method follow-ups deferred to Phase 2.2. Q15.2 prior GLP-1 use is multi-instance-aggregated for V1 (per-drug timeline + per-drug Q15.3-Q15.5 cascade deferred to Phase 2.2 for patients who used multiple GLP-1s).
4. **`hard_stop` semantics:** none of these 3 modules emit hard_stop atoms directly. `Section 1Q.16` GLP-1 contraindication checks fire DOWNSTREAM from Q15.6 atoms (e.g., severe abdominal pain → safety preflight reviews for pancreatitis confirmation; if confirmed via clinical history elsewhere → `rule.glp1.safety.contraindication_pancreatitis_personal_history` BLOCK fires per `Section 1Q.15`). Module-layer atoms are clinical_history / safety classification but not hard-blocking themselves.
5. **Concept naming rule (`Section 1K.5.A`):** lifecycle in assertion fields. Q15.6 side effects use `condition.glp1_side_effect_<kind>_history` with `assertion_type: history_of` and `metadata.disease_state: side_effect_course_resolved`. Q15.1 status uses `medication.glp1_use_status` with metadata value (`currently | past | never`); the concept_id names the entity (GLP-1 use), the value names the lifecycle.
6. **Pathway-specific clinical capture (`Section 1K.3` directly-answered-fields rule):** Q15.5 weight-lost + Q15.6 side effects + Q15.8 stop reason are CLINICAL FACTS asked DIRECTLY; never inferred from gender_identity, biological_sex_at_birth, or any other identity atom. The directly-answered-fields rule is preserved.
7. **Hims source ref discipline:** every question carries explicit reference to Hims source step (or "Implicit" when MAIN adds beyond Hims). Net `Implicit` count: 11 of 15 (Q13.3 partially + Q13.5 + Q14.1-Q14.2 + Q15.2-Q15.8) — most of the cascade depth is MAIN-additive beyond Hims's funnel.
8. **Anchoring rule applied:** all Module 15 follow-up prompts anchor to `"your GLP-1"` (drug-class anchor); Q15.4 uses dynamic past-vs-present-tense via `patient_label_template_refs`. No unanchored "it" references in any prompt per the binding anchoring rule in MAIN voice principles.
9. **Tone-lock corollary applied:** Q13.3 weight-loss-goal moved from `requiredness: optional` (data leak) to `requiredness: required_to_continue` with `"I don't have a specific number"` as the don't-know answer option. Pattern preserved in Q15.5 weight-lost (`"I don't remember"` + `"I didn't lose weight (or gained)"` as structured options) and Q15.7 / Q15.8 (`"I don't remember"` / `"Other"`).

## Counts (after this checkpoint)

- Layer D Phase 2.1: 3 modules / 15 questions defined (net unchanged after polish: Q14.3 removed + old Q15.5 split into Q15.7 + Q15.8 = -1 + 1 = 0 net change)
- Stage 2 grand total so far (Phase 1 + Phase 2.1): 15 modules / 54 questions defined
- Per-patient render varies: GLP-1-naive ~7-8 questions; current GLP-1 patient ~12 questions; past GLP-1 patient ~14 questions (full cascade including Q15.7 + Q15.8)
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
