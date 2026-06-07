# Universal modules — Layer A spec v1

**Date:** 2026-05-02 (revised after demographic over-collection fix + pathway override architectural rule)
**Stage:** 2 Phase 1 — Layer A authoring (4 modules; 14 questions defined; per-patient render varies — cis ~12, non-cis ~14)
**Clinical CODEOWNER:** founder (board-certified MD)
**Architecture pin:** `Section 1K.3` (atomization + 4-layer module taxonomy + answer mechanics + pathway override pattern + directly-answered-fields rule) + `Section 1K.4` (question bank + versioning) + `Section 1K.19` (intake repository + control model)
**Reference funnel:** [.cursor/plans/ingestion/competitor_product_evidence/hims/hims_weight_loss_new_patient.md](.cursor/plans/ingestion/competitor_product_evidence/hims/hims_weight_loss_new_patient.md) (verbatim Hims weight-loss new-patient funnel; cadence reference)

## Scope

Layer A universal modules — platform identity / logistics / payment facts. Stable everywhere; reused by every clinical pathway with no modification. Per `Section 1K.19.7` CI lint enforces every pathway file MUST compose at minimum `mod.universal.demographics_v1` + `mod.universal.base_consents_v1` + `mod.universal.identity_verification_v1`.

**4 modules in this file:**
1. `mod.universal.demographics_v1` — 8 questions defined (Q1.1 DOB; Q1.2 biological sex; Q1.3a alignment; Q1.3b deeper identity (conditional); Q1.3c pronouns (conditional); Q1.4 residence state; Q1.5 shipping state; Q1.6 ethnicity)
2. `mod.universal.base_consents_v1` — 1 question (emits 3 consent atoms)
3. `mod.universal.identity_verification_v1` — 2 questions
4. `mod.universal.insurance_payment_readiness_v1` — 3 questions

**Total: 14 questions defined / 16 atoms emitted (1 ack emits 3; staff-witnessed L3 emits compound).**

**Per-patient render counts:**
- Cis patient (alignment = Yes): ~12 questions rendered (Q1.3b + Q1.3c skipped)
- Non-cis patient (alignment = No): ~14 questions rendered (full Q1.3 sequence)

## MAIN voice principles (binding)

- Direct over pretty. Short sentences.
- Warm not saccharine. "Thanks for sharing — this helps us tailor your care" not "We're SO excited!"
- Clinically accurate. Don't euphemize.
- Educational micro-copy after sensitive questions (Hims cadence).
- Inclusive but not preachy. "Biological sex (assigned at birth)" asked separately from gender; we don't lecture, we just ask.
- No false urgency. No transformation hype.
- ~7th-grade reading level.

---

## Module 1 — `mod.universal.demographics_v1`

**`module_id`:** `mod.universal.demographics_v1`
**`module_version`:** `1.0.0`
**`kind`:** non-clinical (operational/identity)
**`pathways`:** all (universal)
**`required_for`:** eligibility, identity, fulfillment
**`assertion_group_emit_trigger`:** none (each question emits independently)

### Q1.1 — Date of birth

**Hims source:** Step 15-16 "To verify eligibility, tell us your date of birth: Date of birth"
**MAIN voice:**
- prompt: "What's your date of birth?"
- helper: "We use this to verify eligibility and personalize your care."

**Schema:**
- `question_id`: `qb.universal.demographics.dob_v1` | `tier`: 1
- `answer_type`: `date` | `selection_cardinality`: `required_blank_not_allowed` | `requiredness`: `required_to_continue`
- `answer_role`: `operational` | `intent_of_answer_set`: `forced_classification`
- `entity_kind`: `single_value` | `atom_kind`: `identity` | `downstream_effect`: `personalization`
- `render_when`: null (baseline)

**Atoms emitted:**
- Positive: `atom.universal.dob` (metadata: `{value: ISO_date}`)
- Denied: n/a (required)

**Issues found:** None.
**Recommended rewrite:** Keep as proposed (warmer than Hims; same intent).
**Branching adjustments:** Age <18 triggers safety preflight hard_stop downstream; intake captures regardless per `Section 1K.3` hard_stop semantics.
**Downstream effect:** `personalization` (drives age-appropriate care + eligibility computation per `Section 1J.4`).
**Final decision:** **Keep**

### Q1.2 — Biological sex assigned at birth

**Hims source:** Step 28 "What was your sex assigned at birth? Male / Female"
**MAIN voice:**
- prompt: "What was your biological sex assigned at birth?"
- helper: "We ask this separately from gender identity. Some clinical decisions depend on biology."

**Schema:**
- `question_id`: `qb.universal.demographics.biological_sex_at_birth_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `forced_classification`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)

**Choices:** Male | Female
**`choice_values`:** `male | female`

**Atoms emitted:**
- Positive: `atom.universal.biological_sex_at_birth` (metadata: `{value}`)
- Denied: n/a

**Issues found:** Earlier draft expanded to 4 options (intersex + prefer_not_to_answer). User correction (per `Section 1K.3` directly-answered-fields rule + Hims funnel parity): keep as Male/Female binary at the funnel layer. Rare intersex patients (estimated ~0.018% of births per medical literature) are handled via downstream Mode F clarification per `Section 1P.4` AND/OR via pathway-specific anatomy questions per `Section 1K.3` directly-answered vs inferred clinical facts rule (uterus / ovary / testes / prostate captured separately when clinically relevant; never inferred from biological_sex_at_birth alone). Patients who decline to answer are extremely rare in registration funnels; declined answer is captured via patient-portal Mode J self-correction post-registration if patient initiates. Funnel-layer simplicity dominates: binary matches Hims, reduces friction, and the architectural rule preserves clinical safety regardless.
**Recommended rewrite:** Adopt Male/Female binary per Hims; rely on `Section 1K.3` directly-answered-fields rule + pathway-specific anatomy capture to cover rare cases.
**Branching adjustments:** This question is the trigger for `mod.domain.reproductive.pregnancy_status_baseline_v1` rendering when `value = female` (per `Section 1K.3` directly-answered-fields rule: `biological_sex_at_birth` MAY drive pregnancy-possibility screening since it is a directly answered demographic fact).
**Downstream effect:** `provider_review` (clinical context recorded; downstream anatomy questions handled in pathway-specific modules per `Section 1K.3` directly-answered vs inferred clinical facts rule).
**Final decision:** **Keep** (binary Male/Female matches Hims funnel parity; the architectural rule in `Section 1K.3` preserves clinical safety).

### Q1.3 — Gender identity (two-question alignment + asymmetric conditional deeper branch + optional pronouns)

**Pattern overview (binding per user direction + `Section 1K.3` directly-answered-fields rule):** Q1.3 is implemented as THREE sub-questions following Hims's low-friction pattern. Cis patients answer ONE question (Q1.3a alignment = Yes) and continue. Non-cis / non-binary patients see Q1.3a + Q1.3b deeper identity (asymmetric answer set per biological sex at birth) + Q1.3c optional pronouns. **Atom values are universal concept_id enum**; only the rendered subset varies per biological_sex_at_birth.

**Hims source:** Step 29 "Do you identify as a man? Yes / No" (rendered after biological sex; one binary question; we extend with conditional depth for non-cis patients).

**Why this pattern (per user direction + `Section 1K.3` clinical-discipline rule):**
- Low-friction for cis patients (one question; matches Hims).
- Respectful + clear for non-cis patients (asymmetric answer set respects that male-at-birth person can't be a "trans man" semantically; female-at-birth can't be a "trans woman").
- Clinically safe because anatomy/hormone/fertility/surgical assumptions are NEVER inferred from identity alone — those are captured via pathway-specific clinical questions per `Section 1K.3` directly-answered-fields rule (TRT testes_status; Female HRT uterus/ovary; GAH-feminizing/masculinizing surgery history; ED prostate/testes; GLP-1 pregnancy_possibility_check).

---

**Q1.3a — Gender alignment with biological sex at birth (universal Tier 2):**

**MAIN voice:**
- prompt (dynamic per Q1.2):
  - If `biological_sex_at_birth = male`: "Do you identify as a man?"
  - If `biological_sex_at_birth = female`: "Do you identify as a woman?"
- helper: "Most people identify with the sex assigned at birth. If you don't, that's fine — we'll ask a couple of follow-up questions next."

**Schema:**
- `question_id`: `qb.universal.demographics.gender_alignment_with_birth_sex_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `preference` | `intent_of_answer_set`: `forced_classification`
- `entity_kind`: `single_value` | `atom_kind`: `identity` | `downstream_effect`: `personalization`
- `render_when`: `{question_id: 'qb.universal.demographics.biological_sex_at_birth_v1', in: ['male', 'female']}` (renders after biological sex captured)
- `prompt_template_refs`: `[{ref: 'biological_sex_at_birth', resolves_to: 'man' | 'woman'}]` (dynamic prompt resolved by resolver per `Section 1K.4` `patient_label_template_refs`)

**Choices:** Yes | No
**`choice_values`:** `yes | no`

**Atoms emitted:**
- Positive: `atom.universal.gender_alignment_with_birth_sex` (metadata: `{value: 'aligned' | 'not_aligned'}`)
- `Yes` → `value: 'aligned'`; `No` → `value: 'not_aligned'`

**bloom_rewrite_note:** "Two-question alignment + conditional deeper branch matches Hims Step 29 cadence (binary alignment binary), then extends with asymmetric depth ONLY when alignment = No. Cis patients answer ONE question; non-cis patients see depth. Atom value enum (`aligned` / `not_aligned`) is canonical; binary Yes/No is the patient-facing surface. Tier 2 (SHOULD ASK; not safety-gating). Universal pattern; not duplicated per pathway."

---

**Q1.3b — Deeper gender identity (conditional Tier 3; ASYMMETRIC answer sets per biological sex at birth):**

The deeper question is one logical question with TWO answer-set variants resolved at render time based on `biological_sex_at_birth`. A male-at-birth person who says alignment = No cannot semantically be a "trans man" (that's a female-at-birth person); the answer set respects that. Same logic inverse.

**MAIN voice:**
- prompt: "How do you identify?"
- helper: "Pick the closest match. Optional."

**Schema:**
- `question_id`: `qb.universal.demographics.gender_identity_explicit_v1` | `tier`: 3
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue` (when render_when fires; can be skipped via `prefer_not_to_say`)
- `answer_role`: `preference` | `intent_of_answer_set`: `preference_capture`
- `entity_kind`: `single_value` | `atom_kind`: `identity` | `downstream_effect`: `personalization`
- `render_when`: `{question_id: 'qb.universal.demographics.gender_alignment_with_birth_sex_v1', equals: 'no'}` (renders only when patient declines alignment)

**Choices (ASYMMETRIC; resolved at render time):**

If `biological_sex_at_birth = male`:
- Woman
- Trans woman
- Non-binary
- Another identity
- Prefer not to say

`choice_values` (male-at-birth path): `woman | trans_woman | non_binary | another | prefer_not_to_say`

If `biological_sex_at_birth = female`:
- Man
- Trans man
- Non-binary
- Another identity
- Prefer not to say

`choice_values` (female-at-birth path): `man | trans_man | non_binary | another | prefer_not_to_say`

The "Woman" and "Trans woman" options on the male-at-birth path (and "Man" / "Trans man" on the female-at-birth path) capture patient self-identification preference. Some trans patients prefer the bare label without the "trans" qualifier; others embrace it. Both options respect that.

**Concept registry alignment:** `atom.universal.gender_identity` lives in `repo/clinical-concepts/identity.ts` (or `social_history.ts` per registry organization); single canonical concept_id; values enum allows all 7 listed (`woman` / `man` / `trans_woman` / `trans_man` / `non_binary` / `another` / `prefer_not_to_say`). Asymmetric answer SETS at the question layer don't affect concept registry — the registry knows all values; the question rendering shows the appropriate subset based on `biological_sex_at_birth`. CI lint validates: rendered `choice_values` are a SUBSET of the registered concept enum; no orphan values; no duplicates.

**Atoms emitted:**
- Per selection: `atom.universal.gender_identity = <choice_value>` (only populated when this question is answered; cis patients leave this null at storage; downstream rules can derive cis gender_identity from `biological_sex_at_birth + alignment` if needed for messaging tone)
- `prefer_not_to_say` selected: `atom.universal.gender_identity = 'prefer_not_to_say'` (records explicit decline; not null)
- Skipped (not rendered): no atom (alignment = aligned for cis patients)

**bloom_rewrite_note:** "Deeper gender identity question fires only when alignment = No. ASYMMETRIC answer sets per biological_sex_at_birth: male-at-birth path offers Woman / Trans woman / Non-binary / Another / Prefer not to say; female-at-birth path offers Man / Trans man / Non-binary / Another / Prefer not to say. Both label options (e.g., 'Woman' AND 'Trans woman' on the male-at-birth path) respect patient self-identification preference. Atom values are universal concept_id enum; only the rendered subset varies. Tier 3 NICE TO HAVE; A/B-testable. Universal pattern; not duplicated per pathway. **CRITICAL CLINICAL DISCIPLINE per `Section 1K.3` directly-answered-fields rule (binding):** use directly answered sex/gender fields for their stated purpose, but do not infer unstated anatomy, hormone use, fertility status, or surgical history from identity alone. atom.universal.gender_identity drives messaging tone + patient-facing communication + sibling-pathway routing where appropriate. atom.universal.biological_sex_at_birth (directly answered) MAY drive clinical-safety logic where directly relevant (e.g., pregnancy-possibility screening trigger). Pronouns MUST NOT be inferred from either; ask explicitly (Q1.3c) or fall back to neutral phrasing. Anatomy / hormone-use / fertility / surgical-history are captured via pathway-specific clinical questions when clinically relevant."

---

**Q1.3c — Pronouns (conditional Tier 3; optional):**

**MAIN voice:**
- prompt: "What pronouns should we use?"
- helper: "Optional. We use this in messages and visit notes."

**Schema:**
- `question_id`: `qb.universal.demographics.pronouns_v1` | `tier`: 3
- `answer_type`: `single_select` | `selection_cardinality`: `optional_blank_allowed` | `requiredness`: `optional`
- `answer_role`: `preference` | `intent_of_answer_set`: `preference_capture`
- `entity_kind`: `single_value` | `atom_kind`: `identity` | `downstream_effect`: `personalization`
- `render_when`: `{question_id: 'qb.universal.demographics.gender_alignment_with_birth_sex_v1', equals: 'no'}` (renders only after Q1.3b)

**Choices:** he/him | she/her | they/them | other (free-text) | prefer not to say
**`choice_values`:** `he_him | she_her | they_them | other | prefer_not_to_say`

**Atoms emitted:**
- Positive: `atom.universal.pronouns = <choice_value>` (with optional `metadata.other_text` when `other` selected)
- Skipped: no atom (downstream messaging falls back to first-name + neutral phrasing per `Section 1K.3` directly-answered-fields rule — pronouns are NEVER inferred from biological_sex_at_birth or gender_identity)

**bloom_rewrite_note:** "Optional pronouns question. Renders only when alignment = No (cis patients implicitly use pronouns matching biological_sex_at_birth at messaging layer; downstream messaging code MAY render he/she based on biological_sex_at_birth for cis patients but MUST NOT for any patient who has answered Q1.3a = No without explicit Q1.3c value). Tier 3 NICE TO HAVE. Per `Section 1K.3` directly-answered-fields rule: pronouns MUST NOT be inferred from biological_sex_at_birth or gender_identity for non-cis patients; ask explicitly here or fall back to neutral phrasing."

---

**Q1.3 (overall) Branching adjustments:** alignment = No signals potential gender-affirming care interest; downstream system MAY surface optional `intent.gender_affirming_care_interest` ack on a future TRT or female_hrt sibling pathway (per `Section 1K.2` sibling pattern). NOT in V1.
**Q1.3 (overall) Downstream effect:** `personalization` (drives messaging tone + pronoun usage + sibling-pathway routing intent).
**Q1.3 (overall) Final decision:** **Modify** (redesign from single-question 7-option to three-question alignment + asymmetric conditional deeper branch + optional pronouns; per user direction + `Section 1K.3` directly-answered-fields rule).

### Q1.4 — Residence state

**Hims source:** Step 14 "Select the state you live in: This state is where your medication will be shipped to, if prescribed."
**MAIN voice:**
- prompt: "What state do you live in?"
- helper: "We use this to verify telehealth eligibility and (if you're prescribed) ship to the right place."

**Schema:**
- `question_id`: `qb.universal.demographics.residence_state_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `operational` | `intent_of_answer_set`: `forced_classification`
- `entity_kind`: `single_value` | `atom_kind`: `identity` | `downstream_effect`: `hard_stop` (when state ineligible)
- `render_when`: null (baseline)

**Choices:** 50 US states + DC (controlled vocab `state_code` enum; 51 values)

**Atoms emitted:**
- Positive: `atom.universal.residence_state` (metadata: `{state_code}`)
- Denied: n/a

**Issues found:** Hims's wording is slightly transactional ("This state is where your medication will be shipped"); MAIN's wording is warmer + clearer about the dual purpose (eligibility + shipping).
**Recommended rewrite:** Adopt MAIN voice.
**Branching adjustments:** Unsupported state (e.g., AK / HI per `main_hims-level_build` plan locked launch safety defaults) → safety preflight `hard_stop` downstream; intake completes regardless. Intake renders soft "this state isn't yet supported but we'll let you know" message at submission.
**Downstream effect:** `hard_stop` when state ineligible (case-level blocker; provider review per `Section 1Q.4`); `operational` otherwise.
**Final decision:** **Modify** (rewrite for warmer voice).

### Q1.5 — Shipping state

**Hims source:** Step 75 "Complete your profile: ... State Michigan ..." (captured at hard-commit shipping address step late in funnel)
**MAIN voice:**
- prompt: "Same state for shipping?"
- helper: "We need to ship medications to the same state you live in for telehealth compliance. If different, let us know."

**Schema:**
- `question_id`: `qb.universal.demographics.shipping_state_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `operational` | `intent_of_answer_set`: `forced_classification`
- `entity_kind`: `single_value` | `atom_kind`: `operational` | `downstream_effect`: `hard_stop` (when mismatch)
- `render_when`: null (baseline; renders right after residence_state)

**Choices:** "Same as residence" | 50 US states + DC (controlled vocab `state_code`)
**`choice_values`:** `same_as_residence | <state_code>`

**Atoms emitted:**
- Positive: `atom.universal.shipping_state` (metadata: `{state_code; derived_from_residence: bool}`)
- Denied: n/a

**Issues found:** Hims captures shipping state at the hard-commit step late in funnel (Step 75). MAIN captures it earlier (in demographics) BUT only as a confirmation question — most patients pick "Same as residence" (one click). This avoids the late-funnel surprise + matches the `main_hims-level_build` locked rule "residence_state == shipping_state required before payment/prescribing." If different, downstream `state_review_required` route per the locked plan.
**Recommended rewrite:** Adopt MAIN voice + 1-click "Same as residence" default.
**Branching adjustments:** If `value != same_as_residence`, downstream rule `rule.universal.state_mismatch_review` fires `kind: 'route'` to ops with `decision_support_payload` (per `Section 1Q.4`); patient sees soft "we need to confirm shipping" message; case enters `state_review_required` per `main_hims-level_build` plan.
**Downstream effect:** `hard_stop` if mismatch + ineligible state; `provider_review` otherwise.
**Final decision:** **Modify** (Hims captures late; MAIN captures early w/ 1-click default).

### Q1.6 — Ethnicity

**Hims source:** Step 27 "How would you describe your ethnicity? Please select all that apply. Asian / East Asian / South Asian / Black or African American / Hispanic or Latino / Native American / Pacific Islander / White or Caucasian / Other"
**MAIN voice:**
- prompt: "How would you describe your ethnicity?"
- helper: "Optional. Some treatments and lab references vary by ethnicity. Select all that apply."

**Schema:**
- `question_id`: `qb.universal.demographics.ethnicity_v1` | `tier`: 1
- `answer_type`: `multi_select` | `selection_cardinality`: `zero_or_more` | `requiredness`: `optional`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` (multi_select but single composite atom emitted; `value: string[]`)
- `atom_kind`: `clinical_history` | `downstream_effect`: `personalization`
- `render_when`: null (baseline)

**Choices:** Asian (combined) | East Asian (Japanese, Chinese, Korean) | South Asian | Black or African American | Hispanic or Latino | Native American or Alaska Native | Pacific Islander | White or Caucasian | Other (free-text)
**`choice_values`:** `asian | east_asian | south_asian | black_african_american | hispanic_latino | native_american | pacific_islander | white_caucasian | other`

**Atoms emitted:**
- Positive: `atom.universal.ethnicity` (metadata: `{values: string[], other_text?: string}`)
- Denied: n/a (multi_select; blank submission acceptable since `requiredness: optional`)

**bloom_rewrite_note:** "Earlier draft expanded to 12 options (added Southeast Asian, MENA, Prefer not to answer). User correction: keep 9 Hims-equivalent options for funnel parity + low-friction. Patients who decline simply leave the multi-select blank (`requiredness: optional` + `selection_cardinality: zero_or_more` allows blank submission). 'Other (free-text)' covers Southeast Asian, MENA, mixed identities, and any other ethnicity the patient wants to specify — captured via the `other_text` metadata field. The combined `asian` option remains for patients who prefer not to disambiguate; East Asian / South Asian remain as separate options for patients who want more specificity. Net: 9 options matches Hims's funnel structure exactly."
**Issues found:** Earlier expansion to 12 options was over-inclusion at the funnel layer. Hims's 9-option set is the correct discipline for an early-funnel optional question.
**Recommended rewrite:** Adopt Hims 9-option set; drop none_logic block (multi_select with `zero_or_more` cardinality + `optional` requiredness already supports blank submission).
**Branching adjustments:** None.
**Downstream effect:** `personalization` (drives lab reference range selection in `Section 1L`; drives coaching content selection).
**Final decision:** **Modify** (Hims 9-option parity; drop none_logic; warmer helper).

---

## Module 2 — `mod.universal.base_consents_v1`

**`module_id`:** `mod.universal.base_consents_v1`
**`module_version`:** `1.0.0`
**`kind`:** non-clinical (consent)
**`pathways`:** all (universal)
**`required_for`:** submission, eligibility
**`assertion_group_emit_trigger`:** `module_complete` (3 atoms emitted as composite at module submit)

### Q2.1 — Telehealth + Terms + Privacy acknowledgment (bundled)

**Hims source:** Step 14 "By clicking 'Continue', I agree to the Terms and Conditions and Telehealth Consent and acknowledge the Privacy Policy."
**MAIN voice:**
- prompt: "Before we continue, please confirm you agree to our terms."
- helper: "By continuing, you agree to MAIN's Telehealth Consent, Terms & Conditions, and acknowledge the Privacy Policy. We'll never share your information with anyone outside your care."
- consent_block_text: "I agree to the [Telehealth Consent](link), [Terms & Conditions](link), and acknowledge the [Privacy Policy](link)."

**Schema:**
- `question_id`: `qb.universal.base_consents.telehealth_terms_privacy_v1` | `tier`: 1
- `answer_type`: `acknowledgment` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `operational` | `intent_of_answer_set`: `forced_classification`
- `entity_kind`: `single_value` (one checkbox; emits 3 atoms as composite via `assertion_group_id`)
- `atom_kind`: `consent` | `downstream_effect`: `hard_stop` (cannot proceed without consent)
- `render_when`: null (baseline; required floor per `Section 1K.19.3` change-control matrix)
- `assertion_group_id`: `universal.base_consents_composite`

**Atoms emitted (3 in same DB transaction at module_complete):**
- Positive: `consent.telehealth_v1_signed` (metadata: `{consent_version, signed_at, ip_address_hash}`)
- Positive: `consent.terms_v1_signed` (metadata same)
- Positive: `consent.privacy_v1_acknowledged` (metadata same)
- Denied: n/a (cannot proceed without consent; hard_stop semantics per Section 1K.3)

**Issues found:** Hims bundles 3 consents into 1 checkbox. MAIN does the same — 1 checkbox UX, 3 atoms emitted. Consent links must be inline + clearly distinguishable per `Section 1K.11` consent discipline.
**Recommended rewrite:** Adopt MAIN voice + ensure 3 separate clickable links.
**Branching adjustments:** None.
**Downstream effect:** `hard_stop` if not checked (intake cannot proceed past Stage 0.5 per `Section 1K.13`); intake architecture allows `educational_screen` -style "you must accept to continue" message rather than terminating session.
**Final decision:** **Modify** (3 atoms via composite assertion_group; same UX as Hims).

---

## Module 3 — `mod.universal.identity_verification_v1`

**`module_id`:** `mod.universal.identity_verification_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical (identity = clinical safety per `Section 1J.4`)
**`pathways`:** all (universal)
**`required_for`:** identity (L3 per `Section 1J.4`)
**`assertion_group_emit_trigger`:** `module_complete` (composite identity atom)

**Composition position in conversion funnel:** this module renders between Module 25 `profile_hard_commit_v1` and Module 26 `membership_checkout_v1` in the conversion funnel ordering (online mode), and between Module 25 and the provider-encounter interstitial in in-office mode (where the staff-witnessed path per `Section 1Q.23` Patch G4 replaces the photo-upload UX). Full conversion-funnel flow definition lives in `.cursor/plans/specs/conversion_funnel_modules_v1.md`.

### Q3.1 — Government ID upload

**Hims source:** Step 77 "Please provide the last 4 digits of your social security number ... Don't want to provide this? You can upload a photo of your ID instead." Step 78 "Upload a photo of yourself ... To verify your identity, we need a clear photo of your face."
**MAIN voice:**
- prompt: "Upload a photo of your government ID."
- helper: "Driver's license, passport, or state ID. We use this to verify your identity (required for telehealth). Encrypted and never shared."

**Schema:**
- `question_id`: `qb.universal.identity_verification.gov_id_upload_v1` | `tier`: 1
- `answer_type`: `photo_upload` | `selection_cardinality`: `required_blank_not_allowed` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `identity` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline; in-person variant uses staff-witnessed L3 path per `Section 1Q.23` Patch G4)

**Atoms emitted:**
- Positive: `atom.universal.id_artifact_uploaded` (metadata: `{id_kind: 'drivers_license' | 'passport' | 'state_id', vendor_verification_pending: true}`)
- Denied: n/a (required for L3)

**Issues found:** Hims offers SSN-last-4 OR ID photo. MAIN simplifies to ID-photo only (cleaner audit trail; clearer for patient; SSN-last-4 was a Hims fallback that adds complexity). For in-person path: `interaction_context.mode = 'in_person'` triggers `verification_method: 'staff_witnessed_in_person'` per `Section 1Q.23` Patch G4 instead of patient photo upload.
**Recommended rewrite:** Adopt ID-photo-only with staff-witnessed in-person fallback.
**Branching adjustments:** Vendor verification (Persona/Stripe Identity/etc.) runs async per `Section 1J.4`; intake completes; verification result lands at safety preflight before Rx authorization.
**Downstream effect:** `provider_review` (provider sees identity verification status in workspace per `Section 1G.8.5`).
**Final decision:** **Modify** (drop SSN-last-4 fallback; ID-photo-only).

### Q3.2 — Selfie upload

**Hims source:** Step 78 "Upload a photo of yourself ... To verify your identity, we need a clear photo of your face."
**MAIN voice:**
- prompt: "Take a quick selfie."
- helper: "We match this to your ID photo to confirm it's really you. Encrypted and never shared."

**Schema:**
- `question_id`: `qb.universal.identity_verification.selfie_upload_v1` | `tier`: 1
- `answer_type`: `photo_upload` | `selection_cardinality`: `required_blank_not_allowed` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `identity` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.universal.identity_verification.gov_id_upload_v1', equals: 'uploaded'}` (renders after ID upload)

**Atoms emitted:**
- Positive: `atom.universal.selfie_uploaded` (metadata: `{biometric_match_pending: true}`)
- Denied: n/a

**Issues found:** Hims wording is fine; MAIN slightly warmer.
**Recommended rewrite:** Keep with minor tone adjustment.
**Branching adjustments:** Vendor selfie+ID match runs async; result feeds `Section 1J.4` `loadPatientCaseSafetySnapshot` at safety preflight. Match failure → Mode F clarification request.
**Downstream effect:** `provider_review`.
**Final decision:** **Modify** (minor MAIN voice).

---

## Module 4 — `mod.universal.insurance_payment_readiness_v1`

**`module_id`:** `mod.universal.insurance_payment_readiness_v1`
**`module_version`:** `1.0.0`
**`kind`:** non-clinical (operational/commercial)
**`pathways`:** all (universal)
**`required_for`:** payment
**`assertion_group_emit_trigger`:** none (independent)

### Q4.1 — Insurance status

**Hims source:** Hims captures insurance later in checkout; not in clinical intake explicitly. We're adding it to baseline for upfront expectation-setting (Hims's flaw is late-funnel insurance surprise).
**MAIN voice:**
- prompt: "Do you have health insurance?"
- helper: "We may be able to use your insurance for some treatments and labs. Telehealth visits are typically self-pay, but it helps us know upfront."

**Schema:**
- `question_id`: `qb.universal.insurance_payment_readiness.has_insurance_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `operational` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `operational` | `downstream_effect`: `personalization`
- `render_when`: null

**Choices:** Yes (commercial / employer plan) | Yes (Medicare / Medicaid) | No / uninsured | I'm not sure
**`choice_values`:** `yes_commercial | yes_medicare_medicaid | no | unsure`

**Atoms emitted:**
- Positive: `atom.universal.has_insurance` (metadata: `{value, kind?: 'commercial' | 'medicare_medicaid'}`)
- Denied: explicit `no` is a valid clinical answer; not a denial of the question

**Issues found:** Hims hides insurance until checkout (frustrating UX). MAIN asks upfront so payment expectations are set early. 4-option set distinguishes commercial vs Medicare/Medicaid (relevant for some pathway eligibility) + handles unsure (don't penalize patients who don't know).
**Recommended rewrite:** Keep proposed wording.
**Branching adjustments:** `yes_commercial` → render Q4.2 (carrier); `yes_medicare_medicaid` → skip carrier (handled at later coverage check); `no | unsure` → skip carrier; render Q4.3 (self-pay willingness).
**Downstream effect:** `personalization` (drives coverage check timing + payment messaging).
**Final decision:** **Modify** (new question; not in Hims; adopt as proposed).

### Q4.2 — Insurance carrier

**Hims source:** n/a (Hims captures via Stripe / payment flow)
**MAIN voice:**
- prompt: "Which insurance company?"
- helper: "Type to search. We use this to check coverage."

**Schema:**
- `question_id`: `qb.universal.insurance_payment_readiness.carrier_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `conditionally_required`
- `answer_role`: `operational` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` | `atom_kind`: `operational` | `downstream_effect`: `personalization`
- `render_when`: `{question_id: 'qb.universal.insurance_payment_readiness.has_insurance_v1', equals: 'yes_commercial'}`
- `required` (resolver): `<Predicate>` (required when render_when fires)

**Choices:** Typeahead controlled vocab of major US insurers + "Other (specify)" free-text fallback

**Atoms emitted:**
- Positive: `atom.universal.insurance_carrier` (metadata: `{carrier_name, carrier_id?}`)
- Denied: n/a

**Issues found:** None.
**Recommended rewrite:** Keep.
**Branching adjustments:** None.
**Downstream effect:** `personalization` (downstream eligibility check).
**Final decision:** **Modify** (new question).

### Q4.3 — Self-pay willingness

**Hims source:** Implicit in Hims pricing (commercial-confidence question; not asked directly)
**MAIN voice:**
- prompt: "If your insurance doesn't cover the treatment, are you willing to self-pay?"
- helper: "Most weight loss medications aren't covered by insurance. Plans typically start around $199/month."

**Schema:**
- `question_id`: `qb.universal.insurance_payment_readiness.self_pay_willingness_v1` | `tier`: 2
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `commercial_confidence` | `intent_of_answer_set`: `conversion_support`
- `entity_kind`: `single_value` | `atom_kind`: `operational` | `downstream_effect`: `personalization`
- `render_when`: null (baseline; renders after Q4.1 regardless of has_insurance answer)

**Choices:** Yes | Maybe (depends on cost) | No
**`choice_values`:** `yes | maybe_cost_dependent | no`

**Atoms emitted:**
- Positive: `atom.universal.self_pay_willingness` (metadata: `{value}`)
- Denied: n/a

**Issues found:** This is `answer_role: commercial_confidence` not `clinical_safety` — it sets pricing expectations + reduces late-funnel sticker shock. Helper text explicitly states pricing range to set expectations honestly.
**Recommended rewrite:** Keep proposed.
**Branching adjustments:** `no` answer doesn't block intake (patient may still be eligible for insurance-covered alternatives); downstream marketing rules per `Section 1Q.21` consume this for cohort segmentation.
**Downstream effect:** `personalization` (drives pricing display + alternative-treatment offers).
**Final decision:** **Modify** (new commercial-confidence question).

---

## Layer A audit summary

| Question | Tier | answer_role | atom_kind | downstream_effect | Decision |
|---|---|---|---|---|---|
| Q1.1 DOB | 1 | operational | identity | personalization | Keep |
| Q1.2 Biological sex | 1 | clinical_context | clinical_history | provider_review | Keep (Hims binary parity) |
| Q1.3a Gender alignment | 2 | preference | identity | personalization | Modify |
| Q1.3b Deeper gender identity (conditional; asymmetric) | 3 | preference | identity | personalization | Modify |
| Q1.3c Pronouns (conditional; optional) | 3 | preference | identity | personalization | Modify |
| Q1.4 Residence state | 1 | operational | identity | hard_stop | Modify |
| Q1.5 Shipping state | 1 | operational | operational | hard_stop | Modify |
| Q1.6 Ethnicity | 1 | clinical_context | clinical_history | personalization | Modify |
| Q2.1 Consents | 1 | operational | consent | hard_stop | Modify |
| Q3.1 Gov ID | 1 | clinical_safety | identity | provider_review | Modify |
| Q3.2 Selfie | 1 | clinical_safety | identity | provider_review | Modify |
| Q4.1 Has insurance | 1 | operational | operational | personalization | Modify |
| Q4.2 Carrier | 2 | operational | operational | personalization | Modify |
| Q4.3 Self-pay | 2 | commercial_confidence | operational | personalization | Modify |

**Verdict:** 2 Keep + 12 Modify across 14 defined questions (per-patient render varies: cis ~12, non-cis ~14). No Remove. Net: spec is a Hims-cadence rewrite in MAIN voice with: (a) Q1.2 biological sex Male/Female binary matching Hims (Hims funnel parity per `Section 1K.3` directly-answered-fields rule); (b) Q1.3 redesigned as two-question alignment + asymmetric conditional deeper branch + optional pronouns (low-friction for cis patients; respectful for non-cis; clinically safe because anatomy/hormone/fertility/surgical-history captured via pathway-specific clinical questions per architectural rule); (c) Q1.6 ethnicity 9 Hims-equivalent options (parity); (d) upfront insurance ask. Preserves Hims's brevity + sequencing while adopting MAIN voice + atomization architecture.

## Atomization boundary (per system map Section 1K.0.5)

This spec's emissions follow the canonical-homes routing discipline established in `Section 1K.0.5` of the system map. Identity / contact / consent / commerce / observation / decision / telemetry data each have their own canonical home — they do NOT all live in `patient_clinical_assertions`. Per-question routing target declared below.

| Question | Emission target | Canonical home |
|---|---|---|
| Q1.1 DOB | `patient_column` | `patients.date_of_birth` |
| Q1.2 Biological sex at birth | `patient_column` | `patients.biological_sex_at_birth` |
| Q1.3a Gender alignment | `patient_column` | `patients.gender_alignment_with_birth_sex` |
| Q1.3b Deeper gender identity (conditional) | `patient_column` | `patients.gender_identity` |
| Q1.3c Pronouns (conditional) | `patient_column` | `patients.pronouns` |
| Q1.4 Residence state | `patient_column` | `patients.residence_state` |
| Q1.5 Shipping state | `patient_address` | `patient_addresses` (initial row) |
| Q1.6 Ethnicity | `patient_column` | `patients.ethnicity` |
| Q2.1 Telehealth + Terms + Privacy (composite) | `consent` × 3 | `patient_consents` rows: `telehealth_consent`, `terms_and_conditions`, `privacy_policy_acknowledgment` (composite via `assertion_group_id: 'universal.base_consents_composite'`) |
| Q3.1 Government ID upload | `patient_column` (storage pointer) + future `patient_identity_verifications` row | `patients.id_artifact_storage_id` (initial); `patient_identity_verifications` (richer; per Section 1J.4) |
| Q3.2 Selfie upload | same as Q3.1 | `patient_identity_verifications.selfie_artifact_storage_id` |
| Q4.1 Has insurance | `patient_column` | `patients.has_insurance` (initial); future `patient_insurance_details` row when richer fields captured |
| Q4.2 Insurance carrier (conditional) | `patient_column` (initial) + `insurance_details` (richer) | `patients.insurance_carrier` (initial); `patient_insurance_details.carrier_name` (full record) |
| Q4.3 Self-pay willingness | `patient_column` | `patients.self_pay_willingness` |

**No `clinical_assertion` emissions in this spec.** Layer A modules capture identity / contact / consent / payment readiness — none are clinical claims about the patient. Concept_id prefix `atom.universal.*` from earlier draft is **DROPPED** per Section 1K.0.5 anti-patterns; canonical naming uses table-natural keys (column names, consent type enum values) rather than concept_id strings.

## Cross-pathway reuse projection

All 4 universal modules are CANDIDATES for reuse across every future MAIN clinical pathway (TRT, Female HRT, ED, mental health, hair loss, labs subscription) where clinically appropriate. Future pathway authoring composes these modules unchanged via `repo/intake/pathways/<pathway>.ts`. ~12 questions saved per future pathway slice.

## Next deliverable

Phase 1 + Phase 2.2.2 + Phase 2.3 are all complete:
- `.cursor/plans/specs/clinical_core_modules_v1.md` — Layer B (3 modules; medication_history, allergy_history, surgery_history; ~8 questions) — **COMPLETE**.
- `.cursor/plans/specs/domain_modules_v1.md` — Layer C (5 modules; ~17 questions) — **COMPLETE**.
- `.cursor/plans/specs/glp1_pathway_modules_v1.md` — Layer D (8 modules; 35 questions; pharmacologic acks deferred) — **COMPLETE**.
- `.cursor/plans/specs/conversion_funnel_modules_v1.md` — post-clinical conversion funnel (5 modules: smart_loading, candidacy_result, treatment_preview, profile_hard_commit, membership_checkout; + `membership_pricing_profile_v1` schema + GLP-1 V1 Hims-placeholder instance; online + in-office dual-mode via `interaction_context.mode` per `Section 1Q.23`) — **COMPLETE**. **Adds 4 additional universal modules (22, 23, 25, 26) authored under the conversion funnel label; Module 24 is pathway-scoped (GLP-1).**

Next: Phase 3 runtime — `repo/intake/pathways/glp1.ts` pathway composition file wires all layers A + B + C + D + conversion funnel into the runtime definition per `conversion_funnel_modules_v1.md` composition ordering.
