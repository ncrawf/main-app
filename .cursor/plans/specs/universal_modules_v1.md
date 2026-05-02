# Universal modules — Layer A spec v1

**Date:** 2026-05-02
**Stage:** 2 Phase 1 — Layer A authoring (4 modules; 12 questions)
**Clinical CODEOWNER:** founder (board-certified MD)
**Architecture pin:** `Section 1K.3` (atomization + 4-layer module taxonomy + answer mechanics) + `Section 1K.4` (question bank + versioning) + `Section 1K.19` (intake repository + control model)
**Reference funnel:** [.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md](.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md) (verbatim Hims weight-loss new-patient funnel; cadence reference)

## Scope

Layer A universal modules — platform identity / logistics / payment facts. Stable everywhere; reused by every clinical pathway with no modification. Per `Section 1K.19.7` CI lint enforces every pathway file MUST compose at minimum `mod.universal.demographics_v1` + `mod.universal.base_consents_v1` + `mod.universal.identity_verification_v1`.

**4 modules in this file:**
1. `mod.universal.demographics_v1` — 6 questions
2. `mod.universal.base_consents_v1` — 1 question (emits 3 consent atoms)
3. `mod.universal.identity_verification_v1` — 2 questions
4. `mod.universal.insurance_payment_readiness_v1` — 3 questions

**Total: 12 questions / 14 atoms emitted (1 ack emits 3; staff-witnessed L3 emits compound).**

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
- helper: "This is asked separately from gender identity. It helps us screen for conditions safely (some treatments depend on biology)."

**Schema:**
- `question_id`: `qb.universal.demographics.biological_sex_at_birth_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `forced_classification`
- `entity_kind`: `single_value` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)

**Choices:** Male | Female | Intersex | Prefer not to answer
**`choice_values`:** `male | female | intersex | prefer_not_to_answer`

**Atoms emitted:**
- Positive: `atom.universal.biological_sex_at_birth` (metadata: `{value}`)
- Denied: n/a

**Issues found:** Hims offers only Male/Female. Adding `intersex` + `prefer_not_to_answer` is more inclusive AND clinically correct (intersex patients exist; clinical decisions need the truth). `prefer_not_to_answer` triggers downstream provider clarification request rather than hard_stop.
**Recommended rewrite:** Adopt 4-option set per above.
**Branching adjustments:** This question is the trigger for `mod.domain.reproductive.pregnancy_status_baseline_v1` rendering when `value = female | intersex` (intersex patients may need pregnancy/contraception screening; provider clinical judgment).
**Downstream effect:** `provider_review` (`prefer_not_to_answer` opens Mode F clarification per `Section 1P.4`).
**Final decision:** **Modify** (expand from 2 to 4 options vs Hims).

### Q1.3 — Gender identity

**Hims source:** Step 29 "Do you identify as a man? Yes / No" (rendered after biological sex)
**MAIN voice:**
- prompt: "What's your gender identity?"
- helper: "Optional. We ask so we can use the right pronouns and care framing for you."

**Schema:**
- `question_id`: `qb.universal.demographics.gender_identity_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `optional_blank_allowed` | `requiredness`: `optional`
- `answer_role`: `preference` | `intent_of_answer_set`: `preference_capture`
- `entity_kind`: `single_value` | `atom_kind`: `identity` | `downstream_effect`: `personalization`
- `render_when`: `{question_id: 'qb.universal.demographics.biological_sex_at_birth_v1', equals: any}` (renders after biological sex captured; nullable answer)

**Choices:** Man | Woman | Non-binary | Trans man | Trans woman | Prefer to self-describe (free-text) | Prefer not to answer
**`choice_values`:** `man | woman | non_binary | trans_man | trans_woman | self_describe | prefer_not_to_answer`

**Atoms emitted:**
- Positive: `atom.universal.gender_identity` (metadata: `{value, self_describe_text?}`)
- Denied: n/a

**Issues found:** Hims's binary "Do you identify as a man? Yes/No" is reductive. MAIN expands to inclusive 7-option set. This is `answer_role: preference` (not clinical safety) — it shapes pronouns + care framing, not clinical decisions.
**Recommended rewrite:** Adopt 7-option set; keep optional.
**Branching adjustments:** Gender identity ≠ biological sex AT birth signals potential gender-affirming care interest; downstream system MAY surface optional `intent.gender_affirming_care_interest` ack on a future TRT or female_hrt sibling pathway (per `Section 1K.2` sibling pattern). NOT in V1.
**Downstream effect:** `personalization` (drives messaging tone + pronoun usage).
**Final decision:** **Modify** (expand from binary to inclusive set).

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

**Choices:** Asian (combined) | East Asian (Japanese, Chinese, Korean) | South Asian | Southeast Asian | Black or African American | Hispanic or Latino | Native American or Alaska Native | Pacific Islander | White or Caucasian | Middle Eastern or North African | Other (free-text) | Prefer not to answer
**`choice_values`:** `asian | east_asian | south_asian | southeast_asian | black_african_american | hispanic_latino | native_american | pacific_islander | white_caucasian | mena | other | prefer_not_to_answer`

**`none_logic`:** `{mode: 'optional_choice', none_choice_value: 'prefer_not_to_answer'}` (patient may decline; not a clinical denial; just opts out)

**Atoms emitted:**
- Positive: `atom.universal.ethnicity` (metadata: `{values: string[], other_text?: string}`)
- Denied: n/a (`prefer_not_to_answer` records the decline; not a clinical denial)

**Issues found:** Hims has 8 options; MAIN expands to 12 to be more inclusive (adds Southeast Asian, MENA, Prefer not to answer). Helper text explains relevance ("treatments and lab references vary by ethnicity") which is honest + factual.
**Recommended rewrite:** Adopt 12-option set + warmer helper.
**Branching adjustments:** None.
**Downstream effect:** `personalization` (drives lab reference range selection in `Section 1L`; drives coaching content selection).
**Final decision:** **Modify** (expand options; adopt MAIN voice).

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
| Q1.2 Biological sex | 1 | clinical_context | clinical_history | provider_review | Modify |
| Q1.3 Gender identity | 1 | preference | identity | personalization | Modify |
| Q1.4 Residence state | 1 | operational | identity | hard_stop | Modify |
| Q1.5 Shipping state | 1 | operational | operational | hard_stop | Modify |
| Q1.6 Ethnicity | 1 | clinical_context | clinical_history | personalization | Modify |
| Q2.1 Consents | 1 | operational | consent | hard_stop | Modify |
| Q3.1 Gov ID | 1 | clinical_safety | identity | provider_review | Modify |
| Q3.2 Selfie | 1 | clinical_safety | identity | provider_review | Modify |
| Q4.1 Has insurance | 1 | operational | operational | personalization | Modify |
| Q4.2 Carrier | 2 | operational | operational | personalization | Modify |
| Q4.3 Self-pay | 2 | commercial_confidence | operational | personalization | Modify |

**Verdict:** 1 Keep + 11 Modify. No Remove. Net: spec is largely a Hims-cadence rewrite in MAIN voice with 3 expansions (gender identity inclusivity; ethnicity expansion; upfront insurance ask). Preserves Hims's brevity + sequencing while adopting MAIN voice + atomization architecture.

## Cross-pathway reuse projection

All 4 universal modules are CANDIDATES for reuse across every future MAIN clinical pathway (TRT, Female HRT, ED, mental health, hair loss, labs subscription) where clinically appropriate. Future pathway authoring composes these modules unchanged via `repo/intake/pathways/<pathway>.ts`. ~12 questions saved per future pathway slice.

## Next deliverable

`.cursor/plans/specs/clinical_core_modules_v1.md` — Layer B (3 modules; medication_history, allergy_history, surgery_history; ~8 questions).
