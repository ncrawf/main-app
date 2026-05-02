# TRT first vertical slice — pre-runtime stress test

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** Stress-test the locked architecture for a Schedule III controlled-substance pathway with longitudinal lab monitoring, fertility implications, and a sibling identity-care pathway. Mirrors structure + depth of GLP-1 first vertical slice ([2026-04-30_glp1_first_slice.md](./2026-04-30_glp1_first_slice.md)).
**Slice scope locked:**
- Cis-male TRT (Scenarios 1-5)
- IM injectable (cypionate/enanthate weekly) + topical gel (daily); ~90% telehealth TRT
- Scenario 6 routes to SIBLING pathway `gender_affirming_masculinizing_hrt` stubbed in `Section 1K.2`; full GAH library deferred to a future slice
- `pathway_sensitivity: extreme` per `Section 1K.2` + `Section 1Q.17` triple-axis governance — outside-secure tier_3 BLOCKED regardless of consent
- Schedule III handling per existing `1J.6` + DEA/state-PDMP integration

**Verdict (full):** Architecture HOLDS. 4 small in-place patches required (none introduce new primitives). 28 illustrative-but-realistic TRT rules + 28 templates by domain. Pathway-agnostic claim validated. Ready for code-as-config implementation of `repo/rules/trt/` + `repo/templates/trt/` after checkpoint lands.

---

# Part 1 — Cross-industry framing for TRT

TRT is fundamentally different from GLP-1 in three load-bearing dimensions:

| Dimension | GLP-1 | TRT |
|---|---|---|
| Regulatory class | Rx; not controlled | **Schedule III controlled substance** (DEA + state PDMP + refill caps) |
| Sensitivity | Moderate (weight-loss is socially less stigmatized) | **Extreme** (sexual function + fertility + masculinity stigma + controlled substance) |
| Monitoring rhythm | Lab freshness + check-in cadence + adherence | **Confirmation labs (2x morning testosterone) + erythrocytosis monitoring + PSA cadence + dose change interval discipline** |
| Fertility impact | Negligible (caution in pregnancy) | **TRT suppresses spermatogenesis; major counseling burden if patient wants conception** |
| Outside-source population | Some patients with prior compounded GLP-1 | **Common patients arrive on outside TRT (men's health spa, online source, non-prescribed AAS)** — care_management_source critical |
| Sibling pathway | None at this scale | **Gender-affirming masculinizing HT shares medication (testosterone) but is a distinct pathway** with different clinical CODEOWNER scope, target ranges, jurisdictional rules, and identity-affirming language requirements |

Cross-industry analogs:

- **DEA-controlled e-commerce (e.g., compounding pharmacies, telehealth ADHD/anxiety treatment after Cerebral/Done):** the pattern of (a) Schedule III/IV refill caps, (b) state PDMP integration, (c) provider DEA-license verification per state, (d) fixed dispensing intervals — all relevant for TRT and reused from `1J.6` controlled substance handling.
- **Identity-care platforms (Plume, Folx, FOLX):** pattern of (a) sibling pathways sharing primitives but distinct CODEOWNER scope, (b) identity-affirming language as architectural requirement (not parameter), (c) jurisdictional carve-outs (some states restrict; pathway_jurisdiction_eligibility scoped), (d) informed-consent-only model vs letter-from-MH-provider model. This slice STUBS the sibling and proves the pattern.
- **Endocrinology clinical guidelines (Endocrine Society, AUA):** confirmation lab pattern (2x morning testosterone) is a **clinical guideline requirement, not just lab freshness**. Architecturally, this is a `confirmation_count_required` attribute on `lab_requirement` rules — generic pattern, not TRT-specific.

---

# Part 2 — 6 patient scenarios traced atom-by-atom

Each scenario uses the locked 10-step pipeline:
**source → evidence → classification → atomization → routing → rules → templates → actions → provider workspace → architecture verdict**

---

## Scenario 1 — Clean TRT intake

**Patient:** Marcus, 38M. Symptoms of low-T (low libido, fatigue, low motivation, decreased morning erections) for 6 months. Uploaded recent labs: total testosterone 240 ng/dL (drawn 7am 3 weeks ago) + free testosterone 5.2 ng/dL + LH 2.1 mIU/mL + estradiol 18 pg/mL + CBC normal + PSA 0.8 + A1c 5.4. No major contraindications. Wants treatment. Selects IM cypionate 100mg weekly.

**1. Source input:**
- Stage 1 structured intake responses (33 questions per cis-male TRT pathway): age, symptom severity ordinals, prior testosterone history, fertility intent, sleep apnea screening, prostate symptoms, cardiovascular history, alcohol/substance use, current medications, BMI, baseline weight
- Free text (qb.trt.symptoms_narrative_v1, optional): "Started feeling really tired about 6 months ago, sex drive way down, just don't feel like myself."
- Document uploads: lab PDF (2 weeks old), photo of self for identity per `1J.4` L3

**2. Immutable evidence:**
- 33 `intake_response` rows per `1K.4` with full version pin (question_id + question_version + module_id + module_version + branch_path_token + pathway_id=`trt`)
- 1 `intake_response` row for free text + safety scan annotation (no match)
- `patient_document_routing` row routing the lab PDF to `Section 1L` document-extraction pipeline + `patient_diagnostic_reports` row + 5 `patient_lab_observations` rows for total T / free T / LH / estradiol / hematocrit / PSA / A1c (one row per analyte, structured-first per `Section 1L`)
- `patient_identity_verifications` row at L3 per `1J.4`

**3. Classification:**
- Deterministic safety scan: no match
- AI classifier on free text: `actionable` + `clinical` intent + no urgent flags

**4. Atomization (per `1K.5.A` two-stage trigger pipeline + `Section 1P` for free text):**
- Clinical assertions emitted: `condition.hypogonadism_male_suspected` (status=`active`, authored_by=`patient_reported`, evidence_refs to symptom intake_response rows), `symptom.libido_decreased` + `symptom.fatigue` + `symptom.erectile_dysfunction_morning` (all patient_reported, severity_ordinal captured), `medication.testosterone_outside_use_history = false`
- Lab-derived assertions per `Section 1L`: `lab.total_testosterone = 240 ng/dL` (authored_by=`lab_derived`, source=`patient_uploaded_outside_lab` per `Section 1L.16a` structured-first carve-out + provider review pending)
- `clinical_concept_assertion: surgery.history = none`
- `clinical_concept_assertion: condition.prostate_cancer_personal_history = false` + family history concept
- Free-text safety-scan turn closed: `clinical_acceptable`

**5. Routing:**
- Provider review batch via `Section 1G` (TRT-eligible provider in patient's state)
- Lab order per `Section 1L` Scenario A NOT triggered (recent labs uploaded; freshness check = pass)
- `patient_action_items` row of type `clinical_required` for provider response

**6. Rules firing (7-stage execution order):**

Stage 1 (preconditions): `rule.trt.eligibility.age_threshold` (>=18 ✓), `rule.trt.eligibility.jurisdiction_allowed` (state in scope ✓)
Stage 2 (safety preflight `1J.10`): `rule.trt.safety.contraindication_prostate_cancer_personal` (no ✓), `rule.trt.safety.contraindication_breast_cancer` (no ✓), `rule.trt.safety.contraindication_severe_untreated_osa` (no ✓), `rule.trt.safety.contraindication_baseline_hematocrit_high` (HCT 44 ✓), `rule.trt.safety.contraindication_psa_age_stratified` (PSA 0.8 < threshold for age 38 ✓), `rule.trt.safety.cardiovascular_risk_review` (no major risk ✓)
Stage 3 (eligibility): `rule.trt.eligibility.testosterone_below_threshold` (240 < 300 ng/dL ✓), `rule.trt.lab.confirmation_morning_count_required` (**FAILS** — only 1 morning draw documented)
Stage 4 (authority floor): provider authorization required for any TRT Rx
Stage 5 (action selection): `kind: 'clarify'` action — request second confirmation morning testosterone draw via `Section 1L` lab order
Stage 6 (AI refinement governance): no AI refinement at this turn
Stage 7 (audit): typed `audit_events` row pinning rule_version + template_version per `Section 1Q.7`

**7. Templates rendered:**
- `tmpl.trt.intake.confirmation_lab_required_v1` (tier_2 outside / tier_4 secure-view; intent=`clinical`; explains why a second draw is needed)
- `tmpl.trt.lab.kit_shipped_v1` (tier_2 outside; intent=`clinical`)
- `tmpl.trt.education.confirmation_lab_rationale_v1` (tier_4 in-secure; intent=`education`)

**8. Actions:**
- Lab order created via `Section 1L` Scenario A for second morning total testosterone (specimen window: 7-10am next 7 days)
- `patient_action_items` row of type `lab_kit_pending`
- Provider review batch holds pending second lab return
- `pending_patient_input_tasks` of type `lab_result_return`

**9. Provider workspace experience:**
- Batch review UI shows: patient summary, lab summary banner ("1 morning T draw documented; 2nd draw ordered per `rule.trt.lab.confirmation_morning_count_required`"), uploaded lab PDF inline preview, `decision_support_payload` per `Section 1Q.4` `kind: 'route'`: typed options `acknowledge_pending` / `request_additional_evaluation` (no Rx-approve option until confirmation lab returns)
- Provider acknowledges; patient enters `lab_pending` state
- 7 days later: confirmation morning T = 232 ng/dL → both labs confirm hypogonadism → `rule.trt.lab.confirmation_morning_count_required` PASSES → re-routes to provider with full `decision_support_payload`: `approve_im_cypionate_100mg_weekly` / `approve_topical_gel_5g_daily` / `defer_for_additional_evaluation` / `deny_with_alternative` + rationale_summary citing both T values + evidence_summary
- Provider approves IM cypionate 100mg weekly with 4-month follow-up; writes `provider_confirmed` assertion of `condition.hypogonadism_male`; signs Rx authorization

**10. Architecture verdict:**
- HOLDS. Pre-treatment confirmation lab pattern (Patch 5 in this slice) cleanly enforced. Lab freshness for one analyte does not preempt confirmation requirement.
- Provider workspace surfaces clinical guideline requirement deterministically; no AI judgment in safety preflight.
- Schedule III handling kicks in at Rx authorization step per `1J.6` (DEA-licensed provider in patient state + state PDMP query if required).

---

## Scenario 2 — Missing or stale labs

**Patient:** James, 45M. Reports fatigue, low libido, depressed mood for ~1 year. No recent labs uploaded. Has labs from 2.5 years ago showing total T 285 (8am draw) — STALE per `rule.trt.lab.freshness_baseline` (180-day freshness window for baseline TRT eligibility).

**1. Source input:** Stage 1 intake responses (33 questions); no lab uploads; old lab from 2023 mentioned in free text.

**2. Immutable evidence:**
- 33 `intake_response` rows
- Free-text mention of prior labs creates an `inbound_narrative_review` row per `Section 1P`
- No `patient_lab_observations` rows because no current lab data uploaded

**3. Classification:** safety scan no match; AI classifier `actionable`.

**4. Atomization:**
- Clinical symptoms (libido, fatigue, mood) atomized as patient_reported
- Free-text mention of "I had labs in 2023 showing T at 285" → atomized as a `clinical_history_self_report` candidate atom per `Section 1P.4` routing (NOT as `lab_derived` — the patient's recall is not authoritative for lab values; provider review required to decide whether to ask for those records via `Section 1O` document-routing)

**5. Routing:**
- Provider review batch
- `pending_patient_input_tasks` of type `lab_kit_required` (NOT `lab_result_return` because no kit ordered yet)

**6. Rules firing:**
- Stage 1 preconditions ✓
- Stage 2 safety preflight: contraindication checks rely on labs — they fail for `unknown` (NULL = unknown per `1K.5.A` partial-data semantics + fail-closed safety)
- Stage 3 eligibility: `rule.trt.eligibility.testosterone_below_threshold` cannot evaluate (UNKNOWN) → `rule.trt.lab.baseline_required` (FAILS — no current lab)
- Stage 5 action: `kind: 'clarify'` → request lab order

**7. Templates rendered:**
- `tmpl.trt.lab.baseline_kit_required_v1` (tier_2 outside / tier_4 secure-view; intent=`clinical`)
- `tmpl.trt.education.why_baseline_labs_v1` (tier_4 in-secure; intent=`education`)

**8. Actions:**
- Lab order via `Section 1L` Scenario A for: total testosterone (2x morning) + free testosterone + LH + FSH + estradiol + CBC + PSA + comprehensive metabolic panel + A1c + lipid panel
- `patient_action_items` row of type `lab_kit_pending`
- Provider review batch HOLDS pending lab return

**9. Provider workspace:**
- Batch review surfaces: "Baseline labs ordered; provider review will resume on return." No Rx-approve option visible.
- Provider may add internal note via `clinical_visits` per `Section 1G.8`.

**10. Architecture verdict:**
- HOLDS. Fail-closed safety per `1K.5.A` correctly blocks Rx authorization on UNKNOWN lab. Provider does not see Rx-approve option until evidence is sufficient — prevents premature decision.
- Patient communication is tier_2 outside-secure: "We need a baseline lab kit before your provider can move forward. Open MAIN to schedule." NEVER names "testosterone" in SMS body per `pathway_sensitivity: extreme` + `Section 1Q.17` rules.

---

## Scenario 3 — Contraindication / safety concern

**Patient:** Robert, 58M. Symptoms suggestive of low-T. Uploaded labs: total T 220 (8am draw, 4 weeks ago, second draw 215 ng/dL 1 week later — confirms hypogonadism), **HCT 56% (elevated)**, PSA 4.8 (elevated for age 58), self-reports CPAP-naive severe sleep apnea diagnosed 1 year ago but not adherent, prior MI 3 years ago.

**1. Source input:** Stage 1 intake responses including medical history; uploaded labs including elevated HCT + PSA; medical history of OSA + MI.

**2. Immutable evidence:**
- `intake_response` rows including `condition.severe_obstructive_sleep_apnea_untreated = true` (patient_reported), `condition.myocardial_infarction_history = true` + onset date
- `patient_lab_observations` rows: total T 220 + 215 (both morning), HCT 56, PSA 4.8

**3. Classification:** deterministic safety scan MATCHES on PSA threshold + HCT threshold + OSA-untreated keyword + MI history; opens `clinical_required` urgent turn per `Section 1G.3`. AI classifier `actionable` + `safety` intent.

**4. Atomization:**
- `condition.severe_obstructive_sleep_apnea_untreated` (patient_reported)
- `condition.myocardial_infarction_history` (patient_reported)
- Lab-derived: `lab.hematocrit = 56%`, `lab.psa = 4.8 ng/mL`
- Multiple safety-flag annotations on the relevant atoms

**5. Routing:**
- Urgent provider review (priority `urgent_clinical`); SLA shorter than Scenario 1
- NO Rx-approve path possible at this turn

**6. Rules firing:**
- Stage 2 safety preflight (multiple BLOCKS):
  - `rule.trt.safety.contraindication_baseline_hematocrit_high` (HCT >54% → BLOCK)
  - `rule.trt.safety.contraindication_psa_age_stratified` (PSA >3.0 for age 58 with no current evaluation → BLOCK pending urology referral)
  - `rule.trt.safety.contraindication_severe_untreated_osa` (BLOCK pending OSA treatment)
  - `rule.trt.safety.cardiovascular_risk_review` (recent MI <5 years → REVIEW required, may be DEFER not BLOCK depending on provider judgment)
- Multiple rules with `override_capability_required: 'can_authorize_clinical_override'` on the OSA + cardiovascular ones (some clinical judgment is permitted with documented reasoning per `Section 1Q.4` scoped clinical override pattern); the HCT block is non-overridable per concept default authority floor
- Stage 5 action: composite `kind: 'block'` on multiple rules → patient sees deferral, NOT denial; provider sees full safety stack

**7. Templates rendered:**
- `tmpl.trt.deferral.safety_concern_multiple_v1` (tier_2 outside / tier_5 in-secure; intent=`clinical`; companion `tmpl.trt.deferral.safety_concern_outside_secure_vague_v1` at tier_2; safety_critical_override_allowed = true if any underlying concern is urgent)
- `tmpl.trt.education.safety_concerns_referral_pathway_v1` (tier_4-5 in-secure; intent=`education`)

**8. Actions:**
- Provider review batch with HIGH priority + safety preflight summary
- `patient_action_items` of type `provider_safety_review_pending`
- If provider documents: refer to urology for PSA workup + refer to sleep medicine for OSA management + consult cardiology re recent MI → multiple `referral_pending` action items
- TRT pathway state: `closed_ineligible` with `closed_eligibility_reason_codes = [hematocrit_too_high, psa_elevated_referral_required, osa_untreated, recent_mi_review]`
- Reopen criteria documented per `1K.13` Mode D pattern

**9. Provider workspace:**
- Batch review UI shows: full safety preflight stack with each blocking rule + its reason_code + evidence_refs; "potential clinical impact of recent fulfillment event" banner if any prior outside TRT use is on chart; cross-batch concept-aware banner if patient has prior assertions on these concepts
- `decision_support_payload`: typed options `defer_pending_workup` / `deny_with_alternative_pathway` / `request_additional_history` (no `approve` option visible per `Section 1Q.4` blocking rules)
- Provider documents reasoning + refers patient appropriately; NO Rx authorization possible at this turn

**10. Architecture verdict:**
- HOLDS. Multiple blocking safety rules cleanly stack per `Section 1Q.7` audit chain. Scoped clinical override is available for SOFT blocks (OSA, MI history) but NOT for hard blocks (HCT >54% concept floor). Patient communication is tier_2 outside ("Your provider has reviewed your case and needs to discuss next steps before moving forward") — never specifies "elevated hematocrit" in SMS body.
- Reopen criteria preserved on the closed-ineligible session per `1K.13` Mode D — patient can return after addressing concerns.

---

## Scenario 4 — Fertility concern / family planning

**Patient:** Anand, 34M. Symptoms of low-T. Uploaded labs: total T 265 (2x morning, confirms hypogonadism). **Actively trying to conceive** with partner (fertility intent captured at intake). Wants TRT.

**1. Source input:** Stage 1 intake; lab uploads; fertility intent flagged in intake module per `qb.trt.fertility_intent_v2`.

**2. Immutable evidence:** intake responses + labs + clinical assertion `intent.actively_trying_to_conceive = true` (patient_reported, evidence_refs to fertility intent question).

**3. Classification:** safety scan no match; AI classifier `actionable` + `clinical` intent.

**4. Atomization:**
- `intent.actively_trying_to_conceive` (patient_reported)
- `intent.completed_family_planning = false` (patient_reported)
- Standard hypogonadism atoms

**5. Routing:** provider review batch + `patient_clarification` action.

**6. Rules firing:**
- Stage 2 safety preflight: no contraindication fires
- Stage 3 eligibility: meets testosterone threshold ✓
- Stage 5 action selection: `rule.trt.clarification.fertility_intent_counseling_required` fires → `kind: 'clarify'` action with `decision_support_payload` for the provider showing typed alternative pathways (HCG monotherapy / clomiphene / sperm banking + TRT / defer until family complete) + rationale_summary citing TRT spermatogenesis suppression
- Patient sees `tmpl.trt.clarification.fertility_intent_v1` explaining the implications + asking patient to confirm understanding before provider proceeds

**7. Templates rendered:**
- `tmpl.trt.clarification.fertility_intent_v1` (tier_2 outside / tier_4 secure-view; intent=`clinical`)
- `tmpl.trt.education.trt_fertility_implications_v1` (tier_4 in-secure; intent=`education`; full evidence-based content on spermatogenesis suppression + HCG/clomiphene/sperm banking alternatives)

**8. Actions:**
- `patient_action_items` of type `clinical_clarification_pending` for fertility-counseling acknowledgment
- Patient-facing bilingual flow: education content + structured response options (acknowledge + want to proceed with TRT despite fertility risk / interested in HCG-monotherapy / interested in sperm banking first / defer until family-complete)
- Patient response writes a new `intake_response` + clinical assertion `intent.fertility_counseling_acknowledged_at` with timestamp + chosen pathway
- Provider review batch resumes with patient's structured choice surfaced
- Provider authority: chooses Rx pathway based on patient's choice + provider clinical judgment; may write `decision_support_payload`-driven alternative Rx for HCG monotherapy

**9. Provider workspace:**
- Batch review surfaces: fertility intent banner ("Patient is actively trying to conceive — TRT spermatogenesis suppression material") + patient's acknowledged choice
- `decision_support_payload`: typed options reflecting patient's choice
- Provider authority: writes `provider_confirmed` clinical assertion for chosen pathway; signs appropriate Rx (TRT vs HCG monotherapy vs deferral)

**10. Architecture verdict:**
- HOLDS. Architecture distinguishes EDUCATION (information given to patient; intent=`education`) from CLINICAL RECOMMENDATION (provider-authored decision; written via `recordClinicalAssertion`). Patient acknowledgment is structured `intake_response` + clinical assertion — auditable, replayable, version-pinned.
- Cleanly separates: education templates (clinical CODEOWNER governance + tone_constraints `factual_only` + structured alternatives) from clinical recommendation (provider authority).

---

## Scenario 5 — Existing outside TRT use

**Patient:** Daniel, 41M. Currently on testosterone cypionate 200mg/week IM from a men's health spa for ~18 months. Wants to transfer care to MAIN for cost reasons. Uploaded current labs: total T 950 (supraphysiologic), HCT 53%, PSA 1.2.

**1. Source input:** Stage 1 intake; uploads outside-spa labs + outside-spa Rx label photo.

**2. Immutable evidence:**
- `intake_response` rows
- `patient_document_routing` for spa Rx label photo + lab PDF
- `patient_diagnostic_reports` row for spa labs (vendor=`outside_men_health_spa_unspecified`; structured per `Section 1L.16a` carve-out)
- `medication.testosterone_cypionate_im_200mg_weekly` clinical assertion (authored_by=`patient_reported`; metadata.care_management_source=`outside_provider_continuation`; metadata.start_date_estimated; evidence_refs to intake question + label photo)

**3. Classification:** safety scan no match (no urgent symptoms); AI classifier `actionable` + `clinical` intent.

**4. Atomization:**
- Outside-medication assertion with care_management_source distinction
- Lab-derived `lab.total_testosterone = 950` (supraphysiologic) + `lab.hematocrit = 53%`

**5. Routing:** provider review batch.

**6. Rules firing:**
- Stage 2 safety preflight: `rule.trt.safety.contraindication_baseline_hematocrit_high` (HCT 53% — close to threshold; SOFT block with override_capability_required for clinical judgment about dose-reduction)
- Stage 3: `rule.trt.eligibility.outside_trt_continuation_disclosure` fires when `medication.testosterone_*` assertion has `care_management_source != null` — routes to provider with `decision_support_payload` of typed options: `co_manage_at_current_dose` / `co_manage_with_dose_reduction` / `substitute_with_lower_dose` / `refuse_continuation_and_offer_alternative` / `request_additional_records_from_outside_provider`
- Stage 5 action: `kind: 'route'` with decision_support_payload

**7. Templates rendered:**
- `tmpl.trt.outside_use.disclosure_acknowledgment_v1` (tier_2 outside / tier_4 secure-view; intent=`clinical`)
- `tmpl.trt.education.outside_trt_continuation_v1` (tier_4 in-secure; intent=`education`; explains co-management vs substitution semantics)

**8. Actions:**
- Provider review with full decision_support_payload
- If provider chooses `co_manage_with_dose_reduction`: writes `provider_confirmed` assertion with new dose; new Rx authorized at lower dose; old outside-spa medication assertion superseded with metadata.transitioned_at; new monitoring cadence (sooner-than-baseline lab re-check given supraphysiologic level)
- If provider chooses `refuse_continuation_and_offer_alternative`: declines TRT due to safety concerns; offers alternative pathway (urology referral)
- Audit chain documents provider's clinical reasoning per `Section 1Q.4` decision_support_payload pattern

**9. Provider workspace:**
- Batch review surfaces: outside-medication banner ("Patient on testosterone cypionate 200mg/week from outside source ~18 months; current T 950 ng/dL supraphysiologic; HCT 53%") + uploaded label photo + uploaded labs + decision_support_payload
- Provider authority: chooses pathway; writes assertion with clear reasoning

**10. Architecture verdict:**
- HOLDS. `care_management_source` field added in adversarial slice handles this cleanly. `decision_support_payload` per `Section 1Q.4` Refinement 4 of GLP-1 slice surfaces typed options without AI judgment. Provider authority is preserved.
- Outside-source narrative (label photo + outside lab) is preserved as immutable evidence per `Section 1P`; provider's decision is `provider_confirmed` clinical assertion that supersedes the patient's `outside_provider_continuation` assertion in current-state read view per `1K.5.A` longitudinal rollup.

---

## Scenario 6 — Patient seeking gender-affirming masculinizing HT

**Patient:** Morgan, 27. Assigned female at birth, identifies as male, wants to start masculinizing testosterone therapy. Has been considering for 2 years; has letter from mental health provider (state requires it for some plans; informed-consent-only model used in others).

**Routing:** intake captures `gender_affirming_intent: true` clinical assertion → branching rule routes to SIBLING pathway `gender_affirming_masculinizing_hrt` (NOT `trt`).

**Sibling pathway file declaration (per `Section 1K.2` — stubbed in this slice; full library deferred):**
- `pathway_id: gender_affirming_masculinizing_hrt`
- `pathway_sensitivity: extreme`
- `pathway_crisis_carveout: false` (not crisis pathway by default; mental health co-management often warranted)
- `pathway_jurisdiction_eligibility`: scoped to permissive states (some states restrict gender-affirming care for minors or restrict access generally)
- `clinical_codeowner_scope`: distinct from `trt` — gender-affirming care expertise required (likely a small specialist subset of providers)
- `consent_protocol`: `'informed_consent_only' | 'letter_from_mh_provider_required'` — declared per pathway based on org policy + state law
- `tone_constraints` floor: ALL templates must declare `identity_affirming` per `Section 1Q.5` extension (Patch 4 in this slice)
- Module imports SHARED with `trt`: lab orchestration (Section 1L), medication workflow (Section 1G + 1Q.13 Module 6), fulfillment (Module 7), pharmacy partner integration
- Module imports DISTINCT from `trt`: intake clinical history (different prior history; mental health co-management; identity-formation timeline; voice change expectations; menstruation effect counseling), education content (identity-affirming + factual), safety preflight (different baseline lab targets — cis-male reference ranges may not apply; trans-masc target T range typically 350-1000 ng/dL same as cis-male hypogonadal but rationale differs), refill cadence
- Branching rule: `rule.system.routing.gender_affirming_intent_branching` — when intake captures `gender_affirming_intent: true`, route to `gender_affirming_masculinizing_hrt` pathway INSTEAD of `trt` (or as additional pathway concurrent with `trt` if patient chooses both contexts)

**This slice:** stubs the routing + sibling pathway file shape + ONE example identity-affirming template (`tmpl.gah.masculinizing.welcome_intake_v1` — tier_2 outside / tier_5 secure-view; intent=`clinical`; tone_constraints includes `identity_affirming`) + ONE example rule (`rule.system.routing.gender_affirming_intent_branching`). Full GAH rules + templates library, jurisdictional scope, consent protocol selection, mental health co-management workflow — DEFERRED to a future GAH slice with its own clinical CODEOWNER review.

**Architecture verdict for this routing pattern:**
- HOLDS. Sibling pathway pattern works — pathways share architectural primitives (lab, fulfillment, audit, privacy gate) but have distinct rules + templates + CODEOWNER scope. Pathway-agnostic claim VALIDATED.
- Identity-affirming language as architectural requirement (Patch 4 in this slice — `tone_constraints: identity_affirming`) prevents misgendering or non-affirming language by CI lint, not by manual review.

---

# Part 3 — TRT rules library (~28 rules by domain)

**Eligibility (5):**
- `rule.trt.eligibility.age_threshold` — patient age >= 18 (or jurisdiction-specific minimum)
- `rule.trt.eligibility.jurisdiction_allowed` — telehealth TRT allowed in state per `1G.4.1`
- `rule.trt.eligibility.testosterone_below_threshold` — total T < 300 ng/dL on 2x morning draw
- `rule.trt.eligibility.outside_trt_continuation_disclosure` — fires when `care_management_source != null` on testosterone medication assertion; routes to provider with decision_support_payload
- `rule.trt.eligibility.symptoms_required_for_treatment` — at least N symptoms from approved list (low libido / fatigue / morning erection decline / mood / strength) at threshold severity

**Clinical Safety (8):**
- `rule.trt.safety.contraindication_prostate_cancer_personal` (BLOCK; non-overridable)
- `rule.trt.safety.contraindication_breast_cancer` (BLOCK; non-overridable)
- `rule.trt.safety.contraindication_baseline_hematocrit_high` — HCT > 54% at baseline (BLOCK)
- `rule.trt.safety.contraindication_psa_age_stratified` — PSA > age-adjusted threshold (BLOCK pending urology evaluation; override_capability_required after urology workup)
- `rule.trt.safety.contraindication_severe_untreated_osa` — severe OSA without CPAP adherence (override_capability_required for clinical judgment after sleep medicine review)
- `rule.trt.safety.cardiovascular_risk_review` — recent MI/CVA <2 years (review required; override_capability_required)
- `rule.trt.safety.adverse_event_erythrocytosis_in_treatment` — HCT > 52% during treatment → dose hold/reduce decision per `decision_support_payload` (mid-treatment safety; references Refinement 1 from adversarial slice)
- `rule.trt.safety.adverse_event_psa_rise_during_treatment` — PSA rise >0.6 ng/mL/year during treatment → urology referral

**Patient Clarification (4):**
- `rule.trt.clarification.intake_completion` — same pattern as GLP-1
- `rule.trt.clarification.fertility_intent_counseling_required` — when `intent.actively_trying_to_conceive = true`; provider must document counseling before Rx
- `rule.trt.clarification.outside_trt_disclosure` — when free-text or structured field suggests outside TRT use without explicit disclosure question filled
- `rule.trt.clarification.injection_self_administration_capability` — for IM injectable approval, patient must acknowledge ability to self-inject or willingness to use a clinic for administration

**Lab Requirement (3):**
- `rule.trt.lab.baseline_required` — fires if labs missing/stale; orders comprehensive baseline panel
- `rule.trt.lab.confirmation_morning_count_required` — **NEW PATTERN per Patch 5** (`confirmation_count_required: 2`); requires 2x morning total testosterone draws; cites Endocrine Society guideline
- `rule.trt.lab.refill_freshness` — labs (T + HCT + PSA) must be < 6 months for refill at 6-month mark; < 12 months for annual refill

**Clinical Routing (1):**
- `rule.trt.routing.assign_to_dea_licensed_provider_in_jurisdiction` — Schedule III restriction; provider must be DEA-licensed in patient's state

**Refill Renewal (2):**
- `rule.trt.rx.refill_blocked_lab_freshness` — same pattern as GLP-1; integrates `1J.6` Schedule III refill cap + state PDMP per Patch 6
- `rule.trt.rx.adherence_gap_dose_decision` — same pattern as GLP-1 adversarial Refinement 1; if 4+ weeks of missed doses, decision_support_payload with re-titrate vs continue vs discontinue

**Dose Escalation (2):**
- `rule.trt.rx.dose_change_minimum_interval` — minimum 6-12 weeks between dose adjustments (allow steady-state evaluation)
- `rule.trt.followup.week_4_initial_titration_check` — 4-week post-start check-in for tolerability

**Adverse Event (2):**
- `rule.trt.adverse.urgent_symptom_routing` — same pattern as GLP-1 (chest pain, severe edema, severe mood change → urgent route + safety_critical_override_allowed)
- `rule.trt.followup.three_month_safety_check` — comprehensive 3-month check (labs + symptoms + adverse events)

**Fulfillment Exception (1):**
- `rule.trt.fulfillment.cold_chain_failure_for_topical_gel` — same pattern as GLP-1 cold-chain rule; gel doesn't have cold-chain requirement but does have transfer-risk + temperature-stability concerns

**Compliance Audit (1):**
- `rule.trt.compliance.controlled_substance_prescription_audit` — DEA + state PDMP audit row on every Rx authorization per `1J.6`

**Marketing Lifecycle (n/a):** TRT is `pathway_sensitivity: extreme` — `Section 1Q.17` invariant 5 BLOCKS tier_3 marketing regardless of consent. Tier_1/tier_2 only ("Welcome back to MAIN" generic messaging). No `marketing.signup_incomplete_drip` or `supplement_cross_sell` for TRT pathway.

---

# Part 4 — TRT templates library (~28 templates by domain)

All templates declare `privacy_exposure_level` + `message_intent` per `Section 1Q.5`. Pathway sensitivity `extreme` caps outside-secure tier_3 regardless of consent. Templates with safety_critical_override_allowed declare safety_vague_companion_template_key per `Section 1Q.5`.

**Account Lifecycle (2):**
- `tmpl.trt.account.welcome_v1` — tier_1, intent=`account`
- `tmpl.trt.account.identity_verification_prompt_v1` — tier_1, intent=`account`

**Patient Clarification (4):**
- `tmpl.trt.clarification.intake_completion_v1` — tier_2, intent=`clinical`
- `tmpl.trt.clarification.fertility_intent_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`
- `tmpl.trt.clarification.outside_trt_use_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`
- `tmpl.trt.clarification.injection_capability_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`

**Denial Not Eligible (3):**
- `tmpl.trt.denial.testosterone_above_threshold_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`
- `tmpl.trt.denial.contraindication_v1` — tier_2 outside / tier_5 secure-view, intent=`clinical`
- `tmpl.trt.denial.jurisdiction_v1` — tier_2, intent=`clinical`

**Deferral (2):**
- `tmpl.trt.deferral.safety_concern_multiple_v1` — tier_2 outside / tier_5 secure-view, intent=`clinical`; companion `tmpl.trt.deferral.safety_concern_outside_secure_vague_v1` at tier_2 (safety_critical_override_allowed = true)
- `tmpl.trt.deferral.referral_pending_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`

**Lab Reminder (3):**
- `tmpl.trt.lab.baseline_kit_required_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`
- `tmpl.trt.lab.confirmation_kit_pending_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`
- `tmpl.trt.lab.results_released_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`

**Medication Workflow (4):**
- `tmpl.trt.rx.approved_im_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`; companion `tmpl.trt.rx.approved_outside_secure_v1` at tier_2 (NEVER names "testosterone" outside-secure)
- `tmpl.trt.rx.approved_topical_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`; transfer-risk safety messaging in tier_4 (avoid skin contact with women + children)
- `tmpl.trt.rx.dose_change_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`
- `tmpl.trt.rx.refill_blocked_lab_freshness_v1` — tier_2 outside / tier_4 secure-view, intent=`clinical`

**Fulfillment Exception (3):**
- `tmpl.trt.fulfillment.shipped_im_v1` — tier_2, intent=`operational` (NEVER names medication in body)
- `tmpl.trt.fulfillment.shipped_topical_v1` — tier_2, intent=`operational` (NEVER names medication in body)
- `tmpl.trt.fulfillment.delay_v1` — tier_2, intent=`operational`

**Clinical Safety Escalation (2):**
- `tmpl.trt.safety.urgent_seek_care_v1` — tier_5 secure-view + phone, intent=`safety`, safety_critical_override_allowed = true; companion `tmpl.trt.safety.urgent_seek_care_vague_outside_v1` at tier_2
- `tmpl.trt.safety.urgent_provider_alert_v1` — tier_5, intent=`safety`, safety_critical_override_allowed = true; companion at tier_2

**Patient Education (5):**
- `tmpl.trt.education.confirmation_lab_rationale_v1` — tier_4 in-secure, intent=`education`
- `tmpl.trt.education.why_baseline_labs_v1` — tier_4 in-secure, intent=`education`
- `tmpl.trt.education.fertility_implications_v1` — tier_4 in-secure, intent=`education`
- `tmpl.trt.education.injection_self_administration_v1` — tier_4 in-secure, intent=`education`
- `tmpl.trt.education.topical_gel_transfer_safety_v1` — tier_4 in-secure, intent=`education` (transfer-risk to women + children messaging)

**Marketing Lifecycle (n/a — extreme pathway blocks tier_3):** No marketing templates for TRT pathway. Patient sees only generic MAIN branding ("Welcome back to MAIN" tier_1 fallback variant).

---

# Part 5 — Sibling pathway stub for `gender_affirming_masculinizing_hrt`

This slice STUBS the sibling pathway with the following declarations (full library DEFERRED):

**Pathway file shape:**
```typescript
// repo/intake/pathways/gender_affirming_masculinizing_hrt.ts
{
  pathway_id: 'gender_affirming_masculinizing_hrt',
  pathway_version: '0.1.0-stub',
  pathway_sensitivity: 'extreme',
  pathway_crisis_carveout: false,
  pathway_jurisdiction_eligibility: 'permissive_states_only_v1',  // tightening; some states restrict
  clinical_codeowner_scope: 'gender_affirming_care_specialist',   // distinct CODEOWNER from trt
  consent_protocol: 'informed_consent_only_v1',                    // alternative: 'letter_from_mh_provider_required_v1'; declared per org policy + state law
  shared_modules_with: 'trt',                                      // explicit reference to sibling
  distinct_modules_count: 'tbd_in_full_slice',
  status: 'stub_only',
  tone_constraints_floor: ['identity_affirming']                   // CI lint enforces ALL templates declare this
}
```

**Branching rule:**
- `rule.system.routing.gender_affirming_intent_branching` — fires when `intent.gender_affirming_masculinizing = true` clinical assertion exists; routes to GAH sibling pathway INSTEAD of `trt`; or as ADDITIONAL concurrent pathway if patient explicitly chooses both contexts

**Example template:**
- `tmpl.gah.masculinizing.welcome_intake_v1` — tier_2 outside / tier_5 secure-view; intent=`clinical`; tone_constraints includes `identity_affirming`; identity-affirming language verified at PR time

**Future GAH slice will build:**
- Full intake (different from cis-male TRT intake — captures identity formation timeline + voice/body changes desired + menstruation effect counseling + mental health co-management history)
- Full rules library (different baseline lab targets; different fertility implications; different jurisdictional restrictions)
- Full templates library (all identity-affirming)
- Consent protocol selection (informed-consent vs letter-required)
- Mental health co-management workflow

---

# Part 6 — Refinements identified

**Foundational (in-place patches; this slice):**

1. **Pre-treatment confirmation lab pattern** (Patch 5 in this slice) — `confirmation_count_required: int?` attribute on `lab_requirement` rules. Generic; applies to TRT 2x morning testosterone, future ED cardiac stress test confirmation, pre-surgery anesthesia clearance pattern, etc. CI lint requires clinical guideline citation in rationale_note.

2. **Controlled substance refill cap integration** (Patch 6 in this slice) — `refill_renewal` rule domain extended with cross-link to `1J.6` controlled substance handling. CI lint enforces: refill rules on a pathway with `medication_class_controlled_schedule != null` must reference `1J.6` controlled substance gate function.

3. **Identity-affirming language requirement** (Patch 4 in this slice) — `tone_constraints` enum extended with `identity_affirming` value. Required on all templates registered to gender-affirming pathways (any of masculinizing, feminizing, future GAH non-binary). CI lint enforces declaration on those pathway templates.

4. **Sibling pathway stub pattern** (Patch 3 in this slice) — `Section 1K.2` documents pattern for sibling pathways sharing primitives with distinct CODEOWNER + jurisdictional scope + tone_constraints floor. Future ED/Female HRT slices may use same pattern for related pathways (e.g., MH-comorbid pathways).

**MVP-polish (deferred to runtime authoring or future slices):**

1. Erythrocytosis-specific monitoring (already fits `clinical_safety` domain; rule library entry, not architectural)
2. Sleep apnea screening (already fits `patient_clarification` + `clinical_safety` domains; rule library entry)
3. Fertility counseling (already fits `patient_clarification` domain; rule library entry)
4. Outside TRT continuation (already fits `care_management_source` field added in adversarial slice)
5. Topical gel transfer-risk messaging (already fits `patient_education` domain; template library entry; covered by `tmpl.trt.education.topical_gel_transfer_safety_v1`)
6. Schedule III refill cap UX disclosure (provider workspace shows refill count + expiry per `1J.6`; UX work, not architectural)

---

# Part 7 — Comparison vs GLP-1

**Reused (proves pathway-agnostic architecture):**
- 7-stage execution order — unchanged
- Triple-axis privacy governance per `Section 1Q.17` — same engine; pathway_sensitivity `extreme` cap activated correctly (vs GLP-1 `moderate`)
- Module taxonomy per `Section 1Q.13` — same 15 modules; Module 9 safety escalation pattern proven
- Audit + reconstructability per `Section 1Q.7` — unchanged
- Lab orchestration per `Section 1L` — same kit-shipped + return + result + provider-review pattern
- Provider review workspace per `Section 1G` — same authority discipline
- Adversarial refinements (adherence-aware dose decision; cross-domain context banner; scoped clinical override; re-extraction pattern; decision_support_payload) — all directly applicable
- Patient action items as universal re-entry surface per `1G.11`

**Stressed (architecture must hold; HELD):**
- Controlled substance handling per `1J.6` — DEA Schedule III + state PDMP + refill cap integration
- Pre-treatment confirmation lab requirement (2x morning testosterone) — Patch 5 generic pattern
- Erythrocytosis monitoring + dose hold/reduce — fits existing `clinical_safety` rule domain
- PSA monitoring + age-stratified thresholds — fits existing `clinical_safety` rule domain
- Fertility implications + sperm banking referral — fits existing `patient_clarification` + `patient_education` domains
- Outside TRT continuation — `care_management_source` field handles cleanly
- Pathway_sensitivity `extreme` + tier_3 outside-secure BLOCKED — no "your testosterone refill" SMS ever (vs GLP-1 where "your weight loss plan" is allowed with consent)
- Marketing intent on extreme pathway — `marketing_personalization_with_phi` consent does NOT unlock tier_3; tier_1/tier_2 only

**New (architectural, not pathway-specific):**
- Confirmation lab pattern (Patch 5 — generic)
- Identity-affirming tone_constraint (Patch 4 — generic; applies to all future GAH pathways)
- Sibling pathway stub pattern (Patch 3 — generic; future ED/Female HRT/GAH may share modules)
- Controlled substance integration cross-link (Patch 6 — generic; ED + future scheduled meds)

**Verdict:** architecture HOLDS. 4 small in-place patches (none introduce new primitives). TRT proves pathway-agnostic claim with a meaningfully harder test surface than GLP-1.

---

# Part 8 — Final readiness verdict

After this checkpoint lands:
- `repo/rules/trt/` + `repo/templates/trt/` ready for code-as-config implementation per the locked GLP-1 implementation pattern
- ~28 TRT rules + ~28 TRT templates as TypeScript files; clinical CODEOWNER reviews each at PR time
- Sandbox test fixtures: 5+ per `clinical_safety` domain rule per `Section 1Q.4`
- Integration tests run the 5 cis-male TRT scenarios (Marcus / James / Robert / Anand / Daniel) end-to-end
- Scenario 6 (Morgan) tests routing branch to sibling pathway stub
- Sibling pathway `gender_affirming_masculinizing_hrt` deferred to a future slice with its own clinical CODEOWNER review

---

# Part 9 — Next slice candidates

In rough priority order (user picks):
1. **ED slice** — `pathway_sensitivity: extreme`, simpler than TRT (no controlled substance + lighter monitoring), good complement to test ED-specific contraindications (cardiac, nitrates)
2. **Female HRT slice** — `pathway_sensitivity: high`, complex formulations + cycle/cancer/clotting risk + mammogram coordination
3. **Gender-affirming masculinizing HT** — completes the TRT/GAH sibling pathway pair started in this slice
4. **Runtime implementation** — start `repo/rules/glp1/` + `repo/templates/glp1/` + sandbox test harness per `Section 1Q.16` pre-runtime gate
5. **Test category 1: Temporal orchestration** — stress-test cadenced check-ins + lab freshness windows + dose change minimum intervals + safety window timing across multiple pathways concurrently
6. **Test category 2: Provider cognitive load** — stress-test batch review UI + cross-domain context banners + decision_support_payload at scale (1 provider reviewing 50 batches/day across multiple pathways)
7. **Peptides slice** — compliance-blocked per `Section 1Q.16`; org policy review prerequisite

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved the slice + 4-6 in-place patches on 2026-04-30. Single multi-file checkpoint applied: this audit + 5 patches + NEW Section 1Q.18 TRT first vertical slice subsection.
