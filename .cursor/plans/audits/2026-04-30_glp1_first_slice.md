# GLP-1 first vertical slice — end-to-end stress test

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** stress-test the rules + templates engine + Section 1P inbound atomization + Section 1Q.13 module taxonomy across 5 realistic GLP-1 patient scenarios. Define ~23 rules + ~25 templates illustrative-but-realistic. Identify where the architecture STRUGGLES.
**Verdict:** B+ — architecture works end-to-end; 6 MVP-polish refinements needed; no foundational gaps. Ready for code-as-config GLP-1 directory authoring after this checkpoint lands.

---

# Part 1 — Cross-industry framing for GLP-1 specifically

| Pattern | Industry exemplar | Our slice |
|---|---|---|
| Telehealth GLP-1 fast-track | Hims (intake → 24h provider review → ship within 5 days) | Slice targets parity on speed; differentiator is longitudinal memory + safety preflight + audit trail Hims doesn't have |
| Compounded GLP-1 marketplace | Henry Meds, Mochi Health, Plushcare | `care_management_source = internal_program` for compounded; `outside_provider` for branded GLP-1 from PCP; supports co-management vs substitution |
| Subscription pharmacy with monthly cadence | Ro (Roman) | Section 1Q.13 Module 8 (subscription) + Module 7 (fulfillment) + Module 6 (refill) compose for monthly delivery cycle |
| Patient education for titration | Eli Lilly Zepbound app, Novo Nordisk Wegovy companion | Module 13 patient_education with strict templates for medication-related; AI personalization opt-in for non-clinical |
| Adverse event reporting (FDA pharmacovigilance) | Major pharma post-market surveillance | Module 9 (safety) + Module 14 (compliance) + 1H.6.1E `safety_classification_miss` + 1Q.10 model_recall pattern |
| Cross-sell to supplements | Hims expansion play; Truepill platform | Module 15 marketing_lifecycle PARTIAL with HARD carve-out — uses non-PHI patient attributes; clinical-adjacent claims forbidden |

**$500M-class differentiator:** the 4-layer separation lets us match Hims-class onboarding speed AND maintain longitudinal memory + safe decision gating + cross-domain coherence at scale.

---

# Part 2 — Five patient scenarios

## Scenario 1 — Sarah, 38F (clean intake)

- BMI 32.4 (195 lbs, 5'5"); CA; T2DM no; HTN no; pregnancy no; no contraindications
- Allergies: penicillin (rash, mild, age 12); current meds: multivitamin + OTC ibuprofen
- Free text: "I'm hoping to lose about 30-40 pounds before my sister's wedding next year. I've tried diet and exercise but plateau around this weight. My friend had great success on Wegovy. Excited to try!"
- Prior history: none uploaded

## Scenario 2 — Marcus, 45M (missing data)

- BMI 31.7 (240 lbs, 6'1"); TX; HTN yes (lisinopril 10mg)
- **Skipped fields: T2DM, pregnancy section (despite male; system must NOT assume "no" — invariant 11), family thyroid cancer**
- Current meds: "lisinopril 10mg, and a couple supplements but I forget the names"
- Free text: empty (skipped narrative)
- Prior history: none uploaded

## Scenario 3 — Priya, 32F (contradiction: structured vs free text)

- BMI 30.5 (178 lbs, 5'4"); NY; T2DM no; pregnancy no; no contraindications
- **Structured allergies: "no"**
- Current meds: birth control pill + sertraline 50mg
- **Free text: "I think I might be allergic to penicillin? I had a really bad rash when I was a kid after taking amoxicillin and my mom always told me I was allergic, but I haven't been tested. I just want to mention it. Also, I've been feeling really anxious lately about starting this — I read about pancreatitis and now I'm worried."**
- Prior history: photo of childhood medical record showing "PCN allergy noted"

## Scenario 4 — David, 52M (safety concern buried in narrative)

- BMI 33.0 (230 lbs, 5'10"); FL; T2DM yes (HbA1c 6.8 last year per PCP); HTN yes
- Current meds: metformin 1000mg BID, metoprolol 50mg, atorvastatin 20mg
- **Free text: "I've been having some chest pain when I take my morning meds, especially the metformin. It usually goes away in 30 minutes or so. I figured it was just stress from work but my wife thinks I should mention it. I'm also wondering if GLP-1 will help with my pre-diabetes since metformin alone hasn't gotten my A1c below 6.8."**
- Prior history: PCP labs uploaded (HbA1c 6.8%, LDL 142, eGFR normal)

## Scenario 5 — Jennifer, 41F (external GLP-1 use)

- BMI 31.9 (198 lbs, 5'6"); IL; T2DM no; pregnancy no; no contraindications
- **Current meds: "semaglutide 0.5mg weekly (compounded, from a clinic in Mexico)" + birth control pill**
- Free text: "I've been on semaglutide for about 8 months from a clinic in Mexico — I lost 35 pounds and have been maintaining well. I'm coming to your program because the Mexico clinic is hard to keep ordering from and I want a US-based provider to manage me going forward. I'd like to continue at my current dose if possible. Side effects have been manageable: some nausea early on, occasional constipation."
- Prior history: receipts and dose log from Mexico clinic showing semaglutide 0.25 → 0.5mg titration over 4 months and steady 0.5mg weekly for 4 months

---

# Part 3 — End-to-end pipeline walkthrough

```
Source narrative (per Section 1K + 1P)
  → Immutable evidence (intake_response per 1K.5)
  → Classification (Section 1P.2: deterministic safety scan + AI classifier)
  → Atomization (Section 1P fan-outs)
  → Atom routing (Section 1P.4 matrix)
  → Rules firing (Section 1Q.6 7-stage execution order)
  → Template render (Section 1Q.5 + 1Q.13 per-channel)
  → Actions + side effects (per Section 1Q.13 module)
```

## Scenario 1 trace — Sarah (clean intake)

**Pipeline:**
1. **Source:** Sarah submits intake; ~40 structured `intake_response` rows + 1 free-text-bounded narrative row
2. **Evidence:** All rows immutable, version-pinned per `1K.5`; `intake_session_id` carries through
3. **Classification:** Deterministic safety scan on narrative — no match (excited language); AI classifier — `actionable`
4. **Atomization:** ~28 clinical assertion candidates from structured questions (concept_mapping → patient_clinical_assertions with `authored_by = patient_reported`); 1 free-text narrative → 0 additional atoms (no concerning content); 0 ops/billing/safety atoms
5. **Routing:** All clinical assertions → patient_clinical_assertions; chart denormalization triggers fire per 1K.5 Fix A; `inbound_narrative_review` row created with single role assignment to provider
6. **Rules firing (7 stages):**
   - Stage 1 pre-conditions: identity verified L2, payment method captured ✓
   - Stage 2 safety preflight: `1J.10` reads — no contraindication assertions, no time-sensitive stale ✓
   - Stage 3 eligibility: `rule.glp1.eligibility.bmi_threshold` (BMI 32.4 ≥30) ✓ + age ≥18 ✓ + jurisdiction CA ✓ + contraindication rules clear ✓
   - Stage 4 authority floor: clinical assertions at `patient_reported` below `provider_confirmed` floor; provider review of safety-relevant assertions is the gate
   - Stage 5 action: `rule.glp1.routing.assign_to_provider_in_jurisdiction` → CA-licensed provider; `rule.glp1.labs.baseline_required` → enqueues lab order
   - Stage 6 AI refinement: N/A (no patient-facing message yet)
   - Stage 7 audit: rule firings emit `audit_events` rows
7. **Templates rendered:** `tmpl.glp1.account.welcome_v1` (Module 1) → email + in_app; `tmpl.glp1.lab.kit_shipped_v1` (Module 5; clinical CODEOWNER approved; ai_refinement_allowed=false; strict) → SMS + email
8. **Actions:** provider review batch with ~28 atoms; lab order via Section 1L; subscription with `if_prescribed_charge` deferred per 1K.11; education sequence enqueued (fires ON Rx approval)

**Provider workspace experience:** ~28 patient_reported assertions, all `unconfirmed`, organized by concept_type. Provider clicks "accept all routine" + reviews safety-critical ones + makes Rx decision. **Total provider time: ~5-7 minutes.**

**Subsequent flow:** lab kit ships → patient draws → results return clean → provider reviews labs (small follow-up batch, ~5 atoms) → Rx authorized → fulfillment ships → patient receives → titration education starts → week-2 check-in fires → week-4 side-effect check-in fires → first refill cycle.

## Scenario 2 trace — Marcus (missing data)

**Deviations:**

- **Atomization:** Structured rows include several missing fields (T2DM blank, family thyroid cancer blank, medication "supplements but I forget"); narrative empty; clinical assertion candidates emit only for completed fields
- **Routing:** Patient_clinical_assertions row for `condition.hypertension` (patient_reported, present); medication assertions for lisinopril; no assertion for unspecified supplements
- **Rules firing:**
  - Stage 2 safety preflight: `1J.10` reads — `pregnancy_status` is `time_sensitive_30d` per `1K.5` and Marcus is male; per existing 1J.10 rule "GLP-1/TRT/HRT/off-label Rx `refill_approve` MUST read `pregnancy_status` regardless of patient sex-at-birth setting"; pregnancy field reads `unknown` (skipped, not denied); per Section 1Q invariant 11 missing data triggers clarification
  - Stage 3 eligibility: `rule.glp1.eligibility.bmi_threshold` PASS; `rule.glp1.eligibility.contraindication_thyroid_cancer` reads → family history `unknown` → fires `rule.glp1.clarification.family_thyroid_cancer_required`
  - Multiple clarification rules fire concurrently: medication list incomplete, T2DM unknown
  - Stage 5 action: all clarification rules emit `clarify` action with Mode F bridge target; per Section 1P.4 Patch B `concern_to_follow_up_policy = auto_schedule_mode_f`, system enqueues a SINGLE consolidated Mode F check-in covering all 3 missing items
- **Templates:** Mode F clarification: `tmpl.glp1.clarification.intake_completion_v1` (Module 2; clinical CODEOWNER approved; strict); rendered to email + in_app. **NO** lab order yet, **NO** provider routing yet. `inbound_narrative_review.status = paused_pending_patient_clarification`

**Architecture stress test:** ✓ Missing data triggers clarification not unsafe inference (invariant 11). ✓ Multiple clarification rules consolidate into ONE Mode F. ✓ Eligibility deferred until clarification complete. ✓ No premature denial. ✓ Patient sees ONE message, not 4.

**Where this stresses the system:** Mode F consolidation needs explicit rule. **Refinement 1 below.**

## Scenario 3 trace — Priya (contradiction)

**Deviations:**

- **Atomization:** Structured `allergy.none = true` produces patient_reported assertion `assertion_type = absent` for `condition.allergy_general`. Narrative free-text triggers AI extraction emitter (`narrative_intent = patient_concern + open_invitation`):
  - Candidate assertion `condition.allergy.penicillin` with `assertion_type = present`, `metadata.completion_status = partial`, `authored_by = ai_suggested`, `confidence = moderate`
  - `metadata.discrepancy_with_structured = true` flag (contradicts structured `allergy.none = true`)
  - Candidate concern atom `patient_concern_topic = pancreatitis` (worry, not a claim) → `patient_chart_ai_reviews`
  - Uploaded photo of childhood record routes through Section 1O → adds `evidence_refs` of kind `patient_document_routing` to penicillin allergy candidate
- **Routing:** Penicillin allergy candidate writes to `patient_clinical_assertions` with discrepancy flag; reconciliation policy `requires_provider_review_on_conflict` per 1K.5.A fires; pancreatitis concern → `patient_chart_ai_reviews`
- **Rules firing:**
  - Stage 2 safety preflight: 1J.10 reads conflicting assertions on `condition.allergy.penicillin`; conflict unresolved → blocks Rx with reason `paused_needs_provider_reconciliation_condition.allergy.penicillin`
  - Stage 3 eligibility: would otherwise PASS (BMI 30.5, age 32, NY allowed)
  - Stage 5 action: `rule.glp1.clarification.allergy_contradiction` (clinical_safety domain, blocking) → opens `clinical_required` turn for provider review, `priority_hint = standard`. Pancreatitis concern routes to `provider_question_pending` per `concept.pancreatitis.concern_to_follow_up_policy = provider_review_required` (default)
- **Templates:** NO patient message at this step — contradiction routes to provider, not patient. Provider sees discrepancy banner per Section 1P.5 cross-batch surfacing. Provider can: (a) accept narrative as `provider_assessed`, supersede structured; (b) reject narrative; (c) request Mode F clarification. Pancreatitis concern: provider acknowledges in chart, may address in Rx-approval message
- **Actions:** Provider's decision audit-logged via `recordClinicalAssertion`; resolved assertion writes new row supersedes prior; `clinical_required` turn closed

**Architecture stress test:** ✓ Contradiction detected automatically. ✓ Provider sees both side-by-side via cross-batch banner. ✓ Patient not bothered. ✓ Pancreatitis concern flagged without elevating to safety urgent. ✓ `requires_provider_review_on_conflict` fires correctly.

**Where this stresses the system:** when `evidence_refs` contains both `intake_response` AND `patient_document_routing` for same concept, packet renderer should surface "narrative + document evidence" jointly. **Refinement 2 below.**

## Scenario 4 trace — David (safety concern buried in narrative)

**Deviations:**

- **Classification:** Deterministic safety scan on narrative — **MATCH** on "chest pain" keyword per `1G.2` code-as-config ruleset. Even though context is "chest pain when I take morning meds — usually goes away in 30 min" — clinically MAY not be ACS — the deterministic scan does NOT make that judgment. Match → opens `clinical_required` turn IMMEDIATELY with `priority_hint = urgent_clinical` per `1G.7.6`
- **Atomization:** AI extraction also runs (separate from deterministic scan):
  - Candidate `symptom.chest_pain` with `metadata.timing = post_medication_morning` + `metadata.duration_estimated = 30_minutes` + `metadata.medication_associated = ['metformin', 'metoprolol', 'atorvastatin']`, `confidence = moderate`
  - Candidate `condition.t2dm` (existing in chart per HbA1c 6.8)
  - `patient_concern_topic = a1c_uncontrolled_on_metformin`
  - Lab values from uploaded PCP labs route through Section 1L Scenario B (outside lab upload — outside_records_assertion); A1c 6.8% as `lab_derived` per `1L.16a` structured-first carve-out
- **Routing:** `clinical_required` turn opens with payload `event_type = inbound.narrative_safety_flag`, `rule_id = safety_scan.chest_pain_v3`; routes to CoR (or on-call for urgent_clinical priority) per `1G.9` within 1 business hour
- **Rules firing:**
  - Stage 2 safety preflight: open `clinical_required` turn from safety scan blocks Rx prescribe paths with reason `paused_pending_narrative_safety_review`
  - Eligibility decision defers (patient is otherwise eligible — BMI 33, age 52, FL allowed, T2DM is INDICATION for GLP-1; safety hold takes precedence)
  - Stage 5: `rule.glp1.adverse.urgent_symptom_routing` → patient-facing template `tmpl.glp1.safety.urgent_seek_care_v1` (Module 9; strict; ai_refinement_allowed=false) renders + auto-fires via SMS (Module 9 bypasses 1G.3 digest per Section 1Q.13 outgoing collision discipline)
  - Provider gets paged via `tmpl.glp1.safety.urgent_provider_alert_v1` (Module 9; staff_internal)
- **Templates:** Patient SMS strict template; provider receives detailed alert with full intake context + chest pain narrative + medication list + uploaded PCP labs
- **Actions:** Provider calls patient (likely within 1 business hour), assesses chest pain in context; decides path: (a) defer GLP-1 until cardiac workup, (b) proceed with caution after additional history, (c) reject GLP-1 candidacy. Decision documented in `clinical_visits.assessment` per Section 1P.6 freehand carve-out (writes assertions directly with `authored_by = provider_assessed`). `clinical_required` turn closed

**Architecture stress test:** ✓ Deterministic safety scan caught keyword without AI judgment. ✓ Bypassed digest per Section 1Q.13. ✓ Rx blocked at 1J.10 preflight. ✓ Provider routed urgently via 1G.9. ✓ Outside lab upload routed correctly via 1L.16a. ✓ `safety_classification_miss` would NOT fire here (scan correctly caught signal).

**Where this stresses the system:** if provider determines false positive, current `correction_reason` enum doesn't include `false_positive_deterministic_scan`. **Refinement 3 below.**

## Scenario 5 trace — Jennifer (external GLP-1 use)

**Deviations:**

- **Atomization:** Structured medications include semaglutide entry → patient_clinical_assertions row for `medication.semaglutide` with `assertion_type = present`, `metadata.dose = 0.5mg_weekly`, `context.care_management_source = outside_provider`. Free-text confirms via AI extraction; reconciliation `auto_dedupe` merges. AI extracts: `context.duration_estimated = 8_months`, `context.titration_history`, `context.weight_loss_achieved = 35_lbs`. Uploaded receipts + dose log route through Section 1O; structured extraction (per 1O.13a) writes `document_extracted` provenance for dose history. AI extracts: `patient_concern_topic = continuity_of_care`; `patient_concern_topic = supply_reliability`. NO safety scan match
- **Routing:** All atoms route per Section 1P.4
- **Rules firing:**
  - Stage 2 safety preflight: existing semaglutide use is NOT a contraindication; 1J.10 reads `medication.semaglutide` assertion + `care_management_source = outside_provider` — critical context for provider
  - Stage 3 eligibility: BMI 31.9 ≥30, age 41, IL allowed, no contraindications → eligible; BUT `rule.glp1.eligibility.external_glp1_use` fires (non-blocking; routes to provider with context) — provider must decide: (a) substitute, (b) co-manage, (c) refuse continuity
  - Stage 5 action: `rule.glp1.clarification.external_glp1_disclosure` → provider review action item with `priority_hint = standard`; pre-approved patient clarification template renders explaining provider will review
- **Templates:** Patient sees Mode F clarification (`tmpl.glp1.clarification.external_glp1_use_v1`; clinical CODEOWNER approved; strict). Provider receives detailed batch with: (a) external medication assertion with full context, (b) eligibility breakdown, (c) decision-support note about co-management vs substitution
- **Actions:** Provider reviews; decides to substitute (continue at 0.5mg weekly with our pharmacy); writes `recordClinicalAssertion` for `medication.semaglutide` at `provider_confirmed` with `context.care_management_source = internal_program` (transition); existing assertion superseded. Marketing carve-out per Module 15: signup-incomplete drip would NOT have applied (Jennifer completed); post-purchase supplement cross-sell may apply IF her `1K.11` `marketing_personalization_with_phi` consent is captured

**Architecture stress test:** ✓ External GLP-1 use captured via `care_management_source`. ✓ Documents (receipts, dose log) integrated via Section 1O. ✓ Provider gets full context. ✓ Continuity of care preserved. ✓ Marketing carve-out checks consent. ✓ External-use rule is NEW for this slice — surfaces clinical decision rather than auto-blocking.

**Where this stresses the system:** rule action of `kind = route` should carry `decision_support_payload` to surface context + recommended action options to provider. **Refinement 4 below.**

---

# Part 4 — Rules library for the GLP-1 slice (23 rules)

### Eligibility (Module 3)

| # | rule_id | Domain | Trigger | Action | Blocking | Authority floor | Template | Module |
|---|---|---|---|---|---|---|---|---|
| 1 | `rule.glp1.eligibility.bmi_threshold` | `eligibility` | intake_submission | gate (BMI ≥30 or ≥27+comorbidity) | yes | patient_reported | `tmpl.glp1.denial.bmi_below_threshold_v1` | 3 |
| 2 | `rule.glp1.eligibility.age_threshold` | `eligibility` | intake_submission | gate (age ≥18) | yes | patient_reported | `tmpl.glp1.denial.age_below_threshold_v1` | 3 |
| 3 | `rule.glp1.eligibility.jurisdiction_allowed` | `eligibility` | intake_submission | gate (state in allowlist per `1G.4.1`) | yes | system_derived | `tmpl.glp1.denial.jurisdiction_v1` | 3 |
| 4 | `rule.glp1.eligibility.contraindication_men2` | `clinical_safety` | intake_submission + assertion change | gate (no MEN-2 history) | yes | provider_confirmed for floor satisfaction | `tmpl.glp1.denial.contraindication_men2_v1` | 3+9 |
| 5 | `rule.glp1.eligibility.contraindication_pancreatitis_history` | `clinical_safety` | intake_submission + assertion change | gate (no pancreatitis history) | yes | patient_reported | `tmpl.glp1.denial.contraindication_pancreatitis_v1` | 3+9 |
| 6 | `rule.glp1.eligibility.contraindication_thyroid_cancer` | `clinical_safety` | intake_submission + assertion change | gate (no MTC personal/family history) | yes | patient_reported | `tmpl.glp1.denial.contraindication_thyroid_cancer_v1` | 3+9 |
| 7 | `rule.glp1.eligibility.pregnancy_block` | `clinical_safety` | intake_submission + assertion change | gate (pregnancy_status = absent and not actively trying) | yes | provider_confirmed | `tmpl.glp1.denial.pregnancy_status_v1` | 3+9 |

### Clarification (Module 2)

| # | rule_id | Domain | Trigger | Action | Blocking | Module |
|---|---|---|---|---|---|---|
| 8 | `rule.glp1.clarification.intake_completion` | `patient_clarification` | intake_submission + missing required field | clarify (Mode F per Patch B; consolidates multiple missing fields) | non-blocking but defers eligibility | 2 |
| 9 | `rule.glp1.clarification.allergy_contradiction` | `patient_clarification` | discrepancy_with_structured detected | route (provider review) | non-blocking | 2+4 |
| 10 | `rule.glp1.clarification.external_glp1_disclosure` | `patient_clarification` | external GLP-1 use detected | clarify + route (Mode F + provider with decision support) | non-blocking but defers Rx | 2+6 |

### Lab (Module 5)

| # | rule_id | Domain | Trigger | Action | Blocking | Module |
|---|---|---|---|---|---|---|
| 11 | `rule.glp1.labs.baseline_required` | `lab_requirement` | eligibility passed | gate (lab order via Section 1L; HbA1c, CMP, lipid, TSH, pregnancy if applicable) | yes (Rx blocked until reviewed_at set) | 5 |
| 12 | `rule.glp1.labs.refill_freshness` | `lab_requirement` | refill_request | gate (latest reviewed lab within 6 months for routine; 12 months max with provider override) | yes | 5+6 |

### Provider routing (Module 4)

| # | rule_id | Domain | Trigger | Action | Blocking | Module |
|---|---|---|---|---|---|---|
| 13 | `rule.glp1.routing.assign_to_provider_in_jurisdiction` | `clinical_routing` | eligibility passed + lab order created | route (assign to licensed provider per `1G.4`) | non-blocking | 4 |

### Rx decision (Module 6)

| # | rule_id | Domain | Trigger | Action | Blocking | Module |
|---|---|---|---|---|---|---|
| 14 | `rule.glp1.rx.provider_authorization_required` | `refill_renewal` | eligibility passed + labs reviewed + provider in queue | gate (no auto-Rx; provider must authorize via `clinical_visits`) | yes | 6 |
| 15 | `rule.glp1.rx.dose_escalation_4_week_check_required` | `dose_escalation` | dose_change_attempted | gate (4-week minimum at current dose unless provider override) | yes | 6 |

### Adverse event (Module 9)

| # | rule_id | Domain | Trigger | Action | Blocking | Module |
|---|---|---|---|---|---|---|
| 16 | `rule.glp1.adverse.urgent_symptom_routing` | `clinical_safety` | deterministic safety scan match | route (urgent_clinical; CoR/on-call per 1G.9; bypass 1G.3 digest) + notify (patient SMS) | yes | 9 |
| 17 | `rule.glp1.adverse.pancreatitis_concern` | `adverse_event` | symptom.abdominal_pain post-Rx OR pancreatitis_concern atom | route (provider; standard for concern, urgent for symptoms with red-flag features) | non-blocking for concern; blocking for symptoms with red flags | 9 |

### Fulfillment (Module 7)

| # | rule_id | Domain | Trigger | Action | Blocking | Module |
|---|---|---|---|---|---|---|
| 18 | `rule.glp1.fulfillment.cold_chain_failure` | `fulfillment_exception` | vendor reports temp excursion | route (ops; replacement order; notify patient) | non-blocking on patient | 7 |

### Follow-up / check-in (Module 6 + 9 + 13)

| # | rule_id | Domain | Trigger | Action | Blocking | Module |
|---|---|---|---|---|---|---|
| 19 | `rule.glp1.followup.week_2_titration_check` | `dose_escalation` | 14 days post first Rx ship | notify (Mode F system check-in via 1K.6) | non-blocking | 6+13 |
| 20 | `rule.glp1.followup.week_4_side_effect_check` | `adverse_event` | 28 days post first Rx ship OR before dose escalation | notify (Mode F; structured side effect characterization module) | non-blocking | 9+2 |

### Marketing (Module 15 partial)

| # | rule_id | Domain | Trigger | Action | Blocking | Module |
|---|---|---|---|---|---|---|
| 21 | `rule.glp1.marketing.signup_incomplete_drip` | `marketing_lifecycle` | account created + intake_session abandoned >24h + valid `marketing_email` consent | notify (drip email; non-PHI attributes only) | non-blocking | 15 |
| 22 | `rule.glp1.marketing.post_purchase_supplement_cross_sell` | `marketing_lifecycle` | first Rx fulfilled + valid `marketing_email` consent | notify (email; non-clinical-claim copy) | non-blocking | 15 |

### Compliance (Module 14)

| # | rule_id | Domain | Trigger | Action | Blocking | Module |
|---|---|---|---|---|---|---|
| 23 | `rule.glp1.compliance.adverse_event_documentation` | `compliance_audit` | provider confirms adverse event | route (compliance review; FDA pharmacovigilance documentation) | non-blocking | 14 |

---

# Part 5 — Templates library for the GLP-1 slice (25 templates)

| # | template_key | Domain | Allowed use | Channels | Required vars (typed) | Prohibited claims | CODEOWNER PR | AI refinement | Module |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `tmpl.glp1.account.welcome_v1` | `account_lifecycle` | patient_facing | email, in_app | first_name, signup_date | no_clinical_advice | no (ops) | OFF | 1 |
| 2 | `tmpl.glp1.account.identity_verification_prompt_v1` | `account_lifecycle` | patient_facing | email, in_app, sms | first_name, verification_link, expiration_at | no_clinical_advice | no (ops + compliance) | OFF | 1 |
| 3 | `tmpl.glp1.clarification.intake_completion_v1` | `patient_clarification` | patient_facing | email, in_app | first_name, missing_items_list (typed enum), mode_f_link | no_diagnosis, no_clinical_advice | YES | OFF | 2 |
| 4 | `tmpl.glp1.clarification.external_glp1_use_v1` | `patient_clarification` | patient_facing | email, in_app | first_name, expected_response_time | no_diagnosis, no_clinical_advice | YES | OFF | 2 |
| 5 | `tmpl.glp1.denial.bmi_below_threshold_v1` | `denial_not_eligible` | patient_facing | email | first_name, bmi, alternative_options | no_diagnosis, no_personal_failure_implication | YES | OFF | 3 |
| 6 | `tmpl.glp1.denial.contraindication_v1` | `denial_not_eligible` | patient_facing | email | first_name, contraindication_concept_label, alternative_options | no_diagnosis, no_personal_failure_implication, no_quoting_specific_clinical_evidence | YES | OFF | 3 |
| 7 | `tmpl.glp1.denial.jurisdiction_v1` | `denial_not_eligible` | patient_facing | email | first_name, state, future_eligibility_signup_link | no_clinical_advice, no_personal_failure_implication | no (ops + compliance) | OFF | 3 |
| 8 | `tmpl.glp1.denial.pregnancy_status_v1` | `denial_not_eligible` | patient_facing | email | first_name, alternative_options, future_signup_link | no_diagnosis, no_personal_judgment | YES | OFF | 3 |
| 9 | `tmpl.glp1.lab.kit_shipped_v1` | `lab_reminder` | patient_facing | sms (immediacy), email (instructions) | first_name, tracking_url, expected_delivery_date, return_instructions_link | no_quoting_lab_value_without_provider_review | YES | OFF | 5 |
| 10 | `tmpl.glp1.lab.kit_return_reminder_v1` | `lab_reminder` | patient_facing | sms, email | first_name, days_since_ship, return_instructions_link | no_quoting_lab_value | YES | ON (opt-in for variants) | 5 |
| 11 | `tmpl.glp1.lab.results_released_v1` | `lab_reminder` | patient_facing | email, in_app | first_name, results_drawer_link | no_quoting_lab_value_without_provider_review, no_clinical_interpretation | YES | OFF | 5 |
| 12 | `tmpl.glp1.rx.approved_v1` | `medication_workflow` | patient_facing | email, in_app, sms | first_name, medication_name, dose, schedule, ship_date, education_link | no_promise_outcome, no_off_label_promotion | YES | OFF | 6 |
| 13 | `tmpl.glp1.rx.dose_escalation_v1` | `medication_workflow` | patient_facing | email, in_app | first_name, current_dose, new_dose, escalation_date, education_link | no_promise_outcome, no_off_label_promotion | YES | OFF | 6 |
| 14 | `tmpl.glp1.rx.refill_blocked_lab_freshness_v1` | `medication_workflow` | patient_facing | email, in_app | first_name, lab_kit_link, expected_delay | no_diagnosis, no_clinical_advice | YES | OFF | 6 |
| 15 | `tmpl.glp1.fulfillment.shipped_v1` | `fulfillment_exception` | patient_facing | email, sms | first_name, tracking_url, expected_delivery_date, refrigeration_instructions | no_clinical_advice | no (ops) | ON (opt-in) | 7 |
| 16 | `tmpl.glp1.fulfillment.delay_v1` | `fulfillment_exception` | patient_facing | email, sms | first_name, delay_reason_category (typed), revised_eta | no_quoting_specific_medication, no_PHI_in_sms_body | no (ops) | OFF | 7 |
| 17 | `tmpl.glp1.fulfillment.cold_chain_replacement_v1` | `fulfillment_exception` | patient_facing | email, sms | first_name, replacement_eta | no_clinical_advice, no_quoting_specific_medication | no (ops + clinical co-review) | OFF | 7 |
| 18 | `tmpl.glp1.safety.urgent_seek_care_v1` | `clinical_safety_escalation` | patient_facing | sms (priority), email | first_name, symptom_category_acknowledgment (vague), 911_or_ER_guidance, provider_callback_window | no_diagnosis, no_clinical_advice, no_promise_outcome | YES + compliance | OFF | 9 |
| 19 | `tmpl.glp1.safety.urgent_provider_alert_v1` | `clinical_safety_escalation` | provider_facing | in_app, push, sms | patient_id, narrative_excerpt, scan_rule_id, urgent_callback_window | n/a (provider-facing) | YES | OFF | 9 |
| 20 | `tmpl.glp1.followup.week_2_titration_v1` | `patient_education` | patient_facing | email, in_app | first_name, current_dose, days_on_treatment, mode_f_check_in_link | no_diagnosis_via_check_in, no_clinical_advice | YES | ON (opt-in for empathetic phrasing) | 13+6 |
| 21 | `tmpl.glp1.followup.week_4_side_effect_v1` | `patient_clarification` + `patient_education` | patient_facing | email, in_app | first_name, days_on_treatment, mode_f_link | no_diagnosis, no_clinical_advice | YES | OFF | 9+2+13 |
| 22 | `tmpl.glp1.education.titration_schedule_v1` | `patient_education` | patient_facing | email, in_app | first_name, medication_name, full_titration_schedule (typed) | no_off_label_promotion, no_promise_outcome | YES | ON (opt-in for personalization) | 13 |
| 23 | `tmpl.glp1.education.side_effect_expectations_v1` | `patient_education` | patient_facing | email | first_name, medication_name, common_side_effects_list (typed enum), seek_care_guidance | no_diagnosis, no_promise_outcome | YES | OFF | 13 |
| 24 | `tmpl.glp1.marketing.signup_incomplete_drip_v1` | `marketing_lifecycle` | patient_facing | email | first_name (non-PHI), signup_date (non-PHI), resume_intake_link | must_not_imply_clinical_outcome, must_not_diagnose, must_not_promote_off_label, must_not_quote_efficacy_without_FDA_approval | no (ops + compliance) | ON (designed for AI refinement; A/B variants) | 15 |
| 25 | `tmpl.glp1.marketing.supplement_cross_sell_v1` | `marketing_lifecycle` | patient_facing | email | first_name (non-PHI), supplement_category, store_link | must_not_imply_clinical_outcome, must_not_diagnose, must_not_imply_clinical_efficacy_for_GLP1_specifically, must_not_quote_patient_specific_outcome | no (ops + compliance) | ON | 15 |

---

# Part 6 — Where the system struggles — 6 MVP-polish refinements

## Refinement 1 (from Scenario 2) — Mode F clarification consolidation

**Issue:** when multiple `patient_clarification` rules fire concurrently for missing fields, system map says each fires Mode F per Patch B but doesn't explicitly require consolidating multiple missing items into ONE check-in session.

**Patch:** extend Section 1P.4 Patch B `concern_to_follow_up_policy = auto_schedule_mode_f` description with consolidation rule.

## Refinement 2 (from Scenario 3) — Document + narrative joint evidence rendering

**Issue:** when an `intake_response` narrative claim is corroborated by an uploaded document, batch review UI doesn't surface "narrative + document" jointly.

**Patch:** extend Section 1P.5 cross-batch concept-aware review surfacing rule with corroborating document badge.

## Refinement 3 (from Scenario 4) — False-positive correction reason for deterministic safety scan

**Issue:** Section 1P.11 `correction_reason` enum covers AI-extraction corrections but doesn't include `false_positive_deterministic_scan` for deterministic-scan safety turns.

**Patch:** extend Section 1P.11 `correction_reason` enum with new value `false_positive_deterministic_scan` (Safety category).

## Refinement 4 (from Scenario 5) — Decision-support payload on rule actions

**Issue:** non-blocking routing rules with provider decision-support context (substitute vs co-manage vs refuse) don't have a typed slot for surfacing decision-support to provider.

**Patch:** extend Section 1Q.4 `RuleAction` discriminated union for `kind = 'route'` with optional `decision_support_payload`.

## Refinement 5 — Cross-channel send-policy deduplication

**Issue:** for "lab kit shipped", patient may have email + SMS + push enabled. Section 1Q.5 declares per-channel rendering, but no explicit cross-channel dedupe rule prevents firing same notification on all 3 channels when patient prefers email-only.

**Patch:** extend 1G.3 send-policy gating with cross-channel deduplication rule + 1K.11 patient_consents notification_channel_preferences extension.

## Refinement 6 — Provider freehand AI-draft draft-vs-sent diff capture

**Issue:** Section 1Q.0 invariant 9 says "AI drafting assistance for human-authored freehand allowed but human MUST approve before send" with audit row carrying "draft-vs-sent diff". Schema for the diff isn't spec'd.

**Patch:** extend Section 1Q.7 audit trail with explicit `audit_events.payload.ai_draft_vs_sent_diff` field shape.

## No foundational gaps detected

The architecture handles all 5 scenarios cleanly. Refinements 1-6 are MVP-polish details that emerge from real patient journey tracing — none require Section-level changes.

---

# Part 7 — Architecture verdict + readiness for implementation

**The architecture works for a real GLP-1 patient journey.** All 5 scenarios pipeline cleanly. Cross-domain collisions resolve. Marketing carve-out holds. Provider workflow scales (Sarah's clean intake = ~5-7 min provider time; David's safety case = immediate urgent routing). FDA AI/ML SaMD compliance levers function as designed.

**After this checkpoint lands:** scaffold `repo/rules/glp1/` directory with the 23 rules as TypeScript code-as-config files (organized by domain subdirectory: `clinical_safety/`, `eligibility/`, `patient_clarification/`, `lab_requirement/`, `refill_renewal/`, `dose_escalation/`, `adverse_event/`, `fulfillment_exception/`, `clinical_routing/`, `marketing_lifecycle/`, `compliance_audit/` per `1K.14` module-organized layout); scaffold `repo/templates/glp1/` directory with the 25 templates similarly organized; build sandbox test harness; clinical CODEOWNER reviews each rule + template at PR time.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30. Single multi-file checkpoint applied: 6 in-place refinement patches + NEW Section 1Q.15 GLP-1 slice cross-link + this audit.
