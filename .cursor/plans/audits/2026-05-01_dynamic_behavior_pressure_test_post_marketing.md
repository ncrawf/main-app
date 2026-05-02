# Dynamic Behavior Pressure Test — post-marketing-suite hardening

**Date:** 2026-05-01
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** Pre-runtime dynamic behavior pressure test of Categories 2-7 (provider cognitive load + edge-case stacking + user behavior + communication perception + stale state + internal ownership) against the LATEST locked architecture (commit `6e3bd30`). 30 scenarios across 6 categories. Foundational gaps AND polish-now items both fixed IN-PLACE in natural-home Sections (NO appendix; NO deferral to "runtime fixtures" — fix the bugs now).
**Verdict:** **MOSTLY READY → READY after 6 in-place fixes land in this checkpoint.** 1 foundational gap (campaign_recall pattern parallel to existing rule/template/model recall) + 5 polish-now items (decision_support_payload minimum-content + patient_self_correction emitter + free-text-reply-to-clarification rule + anti-vague CI lint + refund-subscription-clarity template) all fixed in their right architectural homes.

---

# Part 1 — Methodology + scope

**Approach:** compressed per-scenario verification.

**What's NEW since `2026-04-30_dynamic_behavior_pre_runtime.md` + `2026-05-01_dynamic_behavior_verification_pass.md`:**
- `Section 1Q.20` runtime green-light declaration
- `Section 1Q.21` Marketing Lifecycle + Growth Orchestration Suite (13 primitives + 25 invariants + state-machine campaign engine + conversion-driven transitions + 11-tier collision priority)
- 3 marketing pressure test fixes (Section 1G.3 contact-info + jurisdiction freshness; Section 1Q.5 dual-CODEOWNER co-sign)

These changes add NEW interaction surfaces:
- Provider workspace now has marketing campaign awareness alongside clinical
- Edge-case stacking now includes concurrent marketing campaigns
- Marketing exclusion windows interact with clinical concern detection
- Stale state can now occur across `campaign_enrollment` + clinical decision boundaries
- Campaign rules + templates have versioning + supersession but NO recall pattern (until this checkpoint)

**Constraint discipline (per user):**
- Foundational gaps + polish-now items BOTH fixed IN-PLACE in natural-home Sections
- NO appendix patches
- NO deferral to "runtime fixtures"
- Fix the bugs in the right spot now

---

# Part 2 — Cat 2: Provider cognitive load (5 scenarios)

## 2.1 — Clean patient with 35 candidate atoms but only 5 matter
**Setup:** Patient submits comprehensive intake; AI extraction emits 35 candidate atoms; 5 are clinically actionable; 30 are supplementary signal or informational pointer.
**System behavior:** Surfacing tier discipline per `Section 1P.5` Refinement 3 — AI emitter classifies each atom as `primary_candidate | supplementary_signal | informational_pointer`. Default UI cap 8 primaries; `inbound_narrative_reviews.batch_complexity_high = true` if >30 atoms. Provider sees 5 primaries by default with expandable supplementary section.
**Failure mode:** none.
**Classification:** `no_issue`.

## 2.2 — Conflicting structured + narrative + uploaded-document evidence
**Setup:** Structured intake says "no diabetes"; narrative says "I'm pre-diabetic"; uploaded lab shows A1c = 6.8%.
**System behavior:** Three atoms with different `authored_by` per `Section 1K.5.A` ranking — patient_reported (50) for structured + narrative; lab_derived (60) for uploaded lab. Authority taxonomy resolves: lab_derived > patient_reported. Section 1P.8 cross-source reconciliation surfaces conflict banner. Provider reviews + writes `provider_confirmed` (90) superseding lower-authority.
**Failure mode:** none.
**Classification:** `no_issue`.

## 2.3 — Multi-domain unresolved (clinical + billing + fulfillment + support)
**Setup:** Patient has open clinical_required turn + open billing dispute + pending fulfillment exception + support ticket.
**System behavior:** Section 1P.5 parallel role-scoped reviewers — provider sees clinical; ops sees billing/fulfillment; support sees support thread. Cross-owner clinical context banner per Patch 6 of dynamic behavior surfaces clinical context to ops/billing/support. Active marketing campaigns suppressed during open clinical concern (7d marketing exclusion per Patch 4 of dynamic behavior). Active campaigns NOT surfaced in provider workspace by default — marketing lives in growth-team workspace.
**Failure mode:** none.
**Classification:** `no_issue`.

## 2.4 — decision_support_payload with several options but insufficient context
**Setup:** Provider review batch surfaces `decision_support_payload` with 4 typed options for handling outside-TRT continuation but `rationale_summary` is "Patient on outside TRT" (15 chars) and no `evidence_summary`. Provider has no context to choose.
**System behavior:** `Section 1Q.4` RuleAction `decision_support_payload` shape declares `rationale_summary` + `evidence_summary` as text fields but doesn't enforce minimum content. Provider may rubber-stamp.

**FAILURE MODE — Polish-Now FIX needed:** decision_support_payload should ENFORCE minimum-content discipline at PR time so providers always get sufficient context.

**Classification:** `polish-now → fix in-place`.
**Fix lives in:** `Section 1Q.4` RuleAction shape (Patch 3 below).

## 2.5 — Provider repeatedly overrides a rule
**Setup:** Provider overrides `rule.glp1.eligibility.bmi_threshold` 7 times in 30 days for borderline-BMI patients.
**System behavior:** Per `Section 1Q.7` `rule.firing_overridden` audit + aggregate stats per `(rule_id, override_reason_code)` feed `Section 1Q.10` rule_recall pattern. Clinical CODEOWNER reviews aggregate quarterly — high override rate signals rule may be too strict. Same pattern applies to all clinical rules.
**Failure mode:** none — pattern works as designed.
**Classification:** `no_issue`.

---

# Part 3 — Cat 3: Edge-case stacking (4 scenarios)

## 3.1 — GLP-1 patient: external prior use + missed 3 weeks + restart high dose + nausea + warm shipment + refund
**Setup:** Patient is GLP-1 active subscriber. T0: reports nausea (suspected pancreatitis) → triggers safety_window. T0+1h: reports warm shipment → fulfillment_exception. T0+2h: requests refund. T0+3h: requests refill at higher dose despite missed 3 weeks. Earlier: patient disclosed external prior GLP-1 use at intake.
**System behavior:**
- Safety event opens 24h+ active safety window per `Section 1G.3` step 5 emergency orchestration
- `Section 1P` parallel role-scoped reviewers: clinical (safety + dose decision) + ops (fulfillment) + billing (refund)
- Cross-owner banner per Patch 6 surfaces clinical context to ops/billing
- Marketing exclusion 7d during open clinical concern per Patch 4
- Adherence-aware dose decision rule per Patch 1 of adversarial slice fires `decision_support_payload` for the dose-restart question
- Outside TRT continuation handled per `care_management_source` field
- Pancreatitis safety scan suppresses ALL marketing per Section 1Q.21 Invariant 18
**Failure mode:** none — adversarial slice + safety orchestration handle this stack.
**Classification:** `no_issue`.

## 3.2 — TRT patient: outside TRT + stale labs + elevated hematocrit + fertility + refill
**Setup:** Patient on outside TRT 200mg/wk for 18 months; uploaded labs show HCT 56% (elevated); 6-month-old labs (stale); requesting refill; reports fertility concern; partner trying to conceive.
**System behavior:**
- Safety preflight per `1J.10` evaluates multiple blocking rules:
  - `rule.trt.safety.contraindication_baseline_hematocrit_high` (HCT >54%) — non-overridable BLOCK per concept default authority floor
  - `rule.trt.lab.refill_freshness` — labs stale; refill blocked
  - `rule.trt.clarification.fertility_intent_counseling_required` — clinical-clarification needed
- Multiple clarifications consolidate to single Mode F session per Mode F consolidation rule
- Provider sees full safety stack with non-overridable HCT block + override-allowed lab freshness + clarification
- 30d post-deferral marketing exclusion per Patch 4
**Failure mode:** none — TRT slice + Section 1Q.4 scoped clinical override pattern handle.
**Classification:** `no_issue`.

## 3.3 — ED patient: nitrate medication + chest pain + urgent travel + billing complaint
**Setup:** Patient has nitrate medication on med list; reports chest pain via portal message; requests "urgent ED prescription before travel tomorrow"; billing complaint about prior charge.
**System behavior:**
- `rule.ed.safety.contraindication_nitrate` — non-overridable BLOCK (absolute contraindication)
- Chest pain narrative → safety scan match → urgent classification + tier_5 secure / tier_2 vague companion + provider phone outreach within SLA
- 24h safety window opens; ALL marketing suppressed per Section 1Q.21 Invariant 18
- ED is `pathway_sensitivity: extreme` → tier_3 outside-secure BLOCKED regardless of consent (per Invariant 21)
- Travel timing irrelevant — nitrate contraindication is absolute
- Billing complaint goes to ops queue with cross-owner banner showing clinical context (per Patch 6)
**Failure mode:** none — safety priority dominates correctly.
**Classification:** `no_issue`.

## 3.4 — Female HRT patient: pregnancy unclear + clotting fam hx + severe mood + dose increase + mammogram uncertain
**Setup:** Patient on Female HRT. T0: pregnancy status unclear (last documented 90d ago); clotting family hx; reports "severe mood changes" via narrative; requests dose increase; mammogram status uncertain.
**System behavior:**
- Pregnancy status time_sensitive_30d freshness profile per `1K.5` → safety preflight blocks Rx until refresh per `1J.10`
- Clotting family hx triggers `rule.female_hrt.safety.cardiovascular_clotting_review` (override_capability_required)
- Severe mood narrative → safety scan + clinical_required turn
- Dose increase request → `rule.female_hrt.rx.dose_change_minimum_interval` evaluation
- Mammogram uncertain → `rule.female_hrt.lab.mammogram_freshness`
- Multiple clarifications consolidate to single Mode F session
- Female HRT is `pathway_sensitivity: high` → tier_3 marketing requires per-template explicit opt-in + dual-CODEOWNER co-sign per Gap C fix
- 7d marketing exclusion during open clinical concern
**Failure mode:** none — multi-blocker safety stack handled cleanly via existing primitives.
**Classification:** `no_issue`.

---

# Part 4 — Cat 4: User behavior vs system intent (6 scenarios)

## 4.1 — Patient ignores Mode F clarification, then sends free text
**Setup:** Provider sent clarification (Mode F task created); patient ignores 2 retries; sends unrelated free text via portal.
**System behavior:** Per Patch 7 of dynamic behavior, clarification retry limits enforce N=3 non-safety / N=2 safety-adjacent / N=1 hard-stop-safety. Free text creates `inbound_narrative_review` row + AI atomization. If atomized atoms address the clarification's expected concept_id, provider can resolve manually; otherwise clarification retry counter still increments.
**Failure mode:** none — clarification retry limits + Section 1P atomization handle.
**Classification:** `no_issue`.

## 4.2 — Patient answers half of structured follow-up
**Setup:** Mode F session has 5 questions; patient answers 2, abandons.
**System behavior:** Per `Section 1K.5.A` partial-data semantics, partial responses → `metadata.completion_status = 'partial'` → fail-closed safety. Resolver per `1K.6` resumes at last completed step. Patient can return via Mode B re-entry per `1K.13`.
**Failure mode:** none.
**Classification:** `no_issue`.

## 4.3 — Patient contradicts themselves repeatedly across channels
**Setup:** Patient says "no allergies" in intake; later messages provider "I'm allergic to peanuts"; two days later messages "actually no I confused myself."
**System behavior:** All atoms preserved with `authored_by: patient_reported`. Conflict detection per `Section 1P.8` cross-source reconciliation. BUT: Section 1P AI emitter doesn't auto-detect contradiction with prior assertions and assign `patient_self_correction` (rank 80) to the new claim — emitter assigns plain `patient_reported` (rank 50). The contradiction sits unresolved until provider manually reconciles.

**FAILURE MODE — Polish-Now FIX needed:** Emitter should auto-detect contradiction with prior `patient_reported` for same `(patient_id, concept_id)` and assign `patient_self_correction` authority (existing rank-80 enum value per `1K.5.A`). Auto-supersession via existing supersession mechanism.

**Classification:** `polish-now → fix in-place`.
**Fix lives in:** `Section 1P` AI atomization emitter discipline (Patch 4 below).

## 4.4 — Patient replies "yes" to email needing structured data
**Setup:** Provider clarification email asks "Have you had abdominal pain in past week? Tap [link] to answer." Patient replies via email "yes."
**System behavior:** Email reply lands as `inbound_narrative_review` row → AI atomization. Free-text "yes" alone is ambiguous — doesn't fit structured form for the clarification. Provider/staff sees the reply attached to original clarification thread but task remains unresolved. Patient may think they answered.

**FAILURE MODE — Polish-Now FIX needed:** When inbound message is REPLY to open `pending_patient_input_task` of `task_kind: clarification` AND message is unstructured free-text (NOT structured form data), system should auto-fire a clarification-redirect template with soft language ("Thanks! We need a quick structured answer — please tap [link]") and NOT auto-resolve the task. Audit event for analytics.

**Classification:** `polish-now → fix in-place`.
**Fix lives in:** `Section 1G.5` + `Section 1Q.1` patient_clarification rule domain + new template family in `Section 1Q.13` Module 2 (Patch 5 below).

## 4.5 — Patient sends urgent symptoms via billing/support
**Setup:** Patient sends "I'm having severe chest pain" message via billing-themed support channel.
**System behavior:** `Section 1P` deterministic safety scan applies UNIFORMLY to all inbound channels per `Section 1P.0` invariant 4. Atom routing per `Section 1P.4` routes urgent symptom atom to clinical workflow regardless of source channel. Cross-owner banner per Patch 6 ensures support staff sees clinical context.
**Failure mode:** none — verified at Cat 4.5 of prior pressure test; same result.
**Classification:** `no_issue`.

## 4.6 — Patient opts out of SMS, then triggers urgent safety workflow
**Setup:** Patient revokes `marketing_sms` + sets `notification_channel_preferences` to exclude SMS; later reports nausea suspected pancreatitis.
**System behavior:** `Section 1G.3` safety override per emergency orchestration step 1: "safety-critical messages ALWAYS fire on SMS regardless of preference." `Section 1Q.17` invariant 5 confirms safety override never raises channel ceiling but always fires; `Section 1Q.19` confirms emergency orchestration cannot be bypassed by patient preference.
**Failure mode:** none.
**Classification:** `no_issue`.

---

# Part 5 — Cat 5: Communication perception + over-messaging (5 scenarios)

## 5.1 — Patient gets too many "action needed" messages
**Setup:** Within 4h: lab kit reminder + refill block + provider clarification + shipment delay + birthday campaign.
**System behavior:** `Section 1G.3` digest rule (≥3 in 4h → digest message); cross-channel dedup; cadence cap 5 active campaigns; 11-tier priority sorts. Result: patient receives ONE digest message + the urgent clinical clarification.
**Failure mode:** none.
**Classification:** `no_issue`.

## 5.2 — Privacy-safe vague messages feel useless
**Setup:** Patient receives "You have a notification. Open the app." via SMS — no action context, no urgency cue, no specifics.
**System behavior:** Section 1Q.17 Privacy useful-outside-secure pattern documents the anti-pattern; clarifies that body should include action-context cues ("we need one more detail to continue your request"; "your provider has an update"). BUT: no CI lint enforces this at PR time — a template can ship with body "You have a notification" if reviewer doesn't catch.

**FAILURE MODE — Polish-Now FIX needed:** Section 1Q.5 should declare `action_context_required: boolean` field (defaults true for tier_2 outside-secure templates) + CI lint validates body contains verb-driven actionable cue.

**Classification:** `polish-now → fix in-place`.
**Fix lives in:** `Section 1Q.5` template object shape + CI lint discipline (Patch 6 below).

## 5.3 — Marketing during unresolved clinical issue
**Setup:** Patient has open clinical concern (provider review pending); abandoned-checkout campaign T1 wants to fire.
**System behavior:** `Section 1Q.21` 7d open-clinical-concern marketing exclusion per Patch 4 of dynamic behavior + Section 1Q.21 Invariant 18 SIX-gate enforcement (suppression gate). Marketing campaign step suppressed; audit `campaign.step_suppressed`.
**Failure mode:** none.
**Classification:** `no_issue`.

## 5.4 — Denial + promo within 48h
**Setup:** Patient denied for GLP-1 due to BMI threshold; promo campaign fires 24h later.
**System behavior:** `Section 1Q.21` 30d post-denial marketing exclusion per Patch 4 of dynamic behavior. Promo suppressed for 30 days; audit `campaign.step_suppressed { reason: marketing_exclusion_window }`.
**Failure mode:** none.
**Classification:** `no_issue`.

## 5.5 — Operational implies clinical reassurance
**Setup:** "Your shipment is on the way!" sent automatically AFTER vendor cold-chain failure logged but before patient notified. Patient infers "everything is fine" then receives correction.
**System behavior:** Patch 2 of dynamic behavior pre-send revalidation cancels stale operational confirmation when contradicting evidence (cold-chain failure event) lands between rule firing and dispatch. Patient gets corrective fulfillment_exception template instead.
**Failure mode:** none.
**Classification:** `no_issue`.

---

# Part 6 — Cat 6: Stale state + race conditions (5 scenarios)

## 6.1 — Provider changes decision before send
**Setup:** Provider approves Rx; queued message scheduled for T+15min. T+5min: provider reverses decision via `recordClinicalAssertion` superseding prior.
**System behavior:** Patch 2 of dynamic behavior pre-send revalidation reads provider decision in evidence_refs; finds it superseded; cancels send + reroutes.
**Failure mode:** none.
**Classification:** `no_issue`.

## 6.2 — Patient completes data after denial queued
**Setup:** Provider denies for missing pregnancy status; queued denial message at T+15min. T+5min: patient submits pregnancy status.
**System behavior:** Patch 2 pre-send revalidation detects new evidence contradicting denial preconditions; cancels denial; reroutes to provider review with new info.
**Failure mode:** none.
**Classification:** `no_issue`.

## 6.3 — Lab arrives after bridge approval
**Setup:** Provider authorizes bridge refill via scoped clinical override; downstream actions queued. Lab returns showing critical value.
**System behavior:** Patch 3 of dynamic behavior stale-pending-review pattern fires when `lab_derived` assertion lands with value contradicting decision's preconditions. Provider decision flagged stale; downstream actions HELD; provider sees banner on next batch review.
**Failure mode:** none.
**Classification:** `no_issue`.

## 6.4 — Cold-chain failure after "shipped" message
**Setup:** Vendor reports cold-chain failure after patient already received "shipped successfully" message.
**System behavior:** If "shipped" message hasn't dispatched yet, Patch 2 pre-send revalidation cancels. If already sent, fulfillment_exception domain corrective templates fire per Module 7 + cross-domain context banner.
**Failure mode:** none.
**Classification:** `no_issue`.

## 6.5 — Model recall affects recent decision OR campaign with discovered bug
**Setup A:** AI extraction emitter `glp1_intake_v3.1` had a negation-handling bug causing some "no family history" answers to be misclassified. Recall fires.
**System behavior A:** `Section 1Q.10` model_recall pattern + `Section 1P.11` re-extraction. Affected atoms get `recall_flag` annotation; routed for re-review per `recall_severity`. Pattern works.

**Setup B (NEW):** Marketing campaign `campaign.glp1.abandoned_intake_v3` has a privacy-leaking template that names "semaglutide" outside-secure for moderate-sensitivity GLP-1 patients without `pathway_named_outside_secure_comm` consent (i.e., a privacy bug discovered post-deploy). Hundreds of `campaign_enrollment` rows are pinned to `campaign_version: 3` and have queued steps using the bad template.
**System behavior B:**
- Per `Section 1Q.21` campaign_definition versioning, pinning the enrollment to `campaign_version: 3` means existing enrollments continue with bad logic
- Section 1Q.10 has rule_recall + template_recall + model_recall — but NO campaign_recall pattern
- The growth team must manually retire `campaign_version: 3` + ship `campaign_version: 4` + manually drain enrollments + manually cancel queued outbound_jobs for v3 enrollments
- Pre-send revalidation per Patch 2 of dynamic behavior catches per-message via privacy gate (template's privacy_exposure_level vs pathway_sensitivity), so the bad messages don't actually dispatch — but the audit chain isn't structured around a recall event; cancellation reasons are scattered across pre-send revalidation audit rows

**FAILURE MODE — Foundational gap:** `Section 1Q.10` rule_recall + template_recall + model_recall pattern has NO parallel `campaign_recall` action. When a campaign has a discovered bug post-deploy, there's no first-class recall mechanism to:
- Cancel in-flight `campaign_enrollment` rows pinned to bad version (per recall_severity)
- Emit paired audit events (`campaign_recall_issued` + per-enrollment `campaign.exit_due_to_recall`)
- Reroute patients per recall classification (safety_critical mass_supersede vs operational mass_unenroll vs cosmetic flag_informational)

**Classification:** `foundational_gap` → in-place fix in `Section 1Q.10` + `Section 1Q.7` (Patch 2 below).

---

# Part 7 — Cat 7: Internal ownership + handoff (5 scenarios)

## 7.1 — Clinical + billing from one message
**Setup:** Patient sends one message: "I had nausea after my last shipment + can I get a refund for the warm package?"
**System behavior:** `Section 1P.5` parallel role-scoped reviewers — provider sees clinical (nausea) atom; ops/billing sees fulfillment + refund atoms; both share one `inbound_narrative_review_id` for full source picture. Cross-owner banner per Patch 6 of dynamic behavior surfaces clinical context to ops/billing if needed.
**Failure mode:** none.
**Classification:** `no_issue`.

## 7.2 — Ops resolves shipment + provider follow-up
**Setup:** Ops resolves shipment exception (replacement shipped); provider still needs to follow up on nausea.
**System behavior:** Each domain's atoms have own owner; ops resolution doesn't auto-close clinical follow-up. Provider sees ops resolution via cross-domain context banner per adversarial Refinement 2.
**Failure mode:** none.
**Classification:** `no_issue`.

## 7.3 — Billing refunds patient but subscription remains active
**Setup:** Patient receives refund for warm shipment; subscription continues monthly billing. Patient confused: "I got a refund, why am I still being charged monthly?"
**System behavior:** Refund flow per `1I.4` is independent of subscription state per `1I.7`. Refund template currently doesn't clarify subscription status — patient must look up subscription separately.

**FAILURE MODE — Polish-Now FIX needed:** Refund-domain templates should INCLUDE subscription status clarification ("Your subscription remains active and renews on [date]" OR "Your subscription was cancelled on [date]"). New template family `tmpl.billing.refund_with_subscription_status_v1` declared in `Section 1Q.13` Module 8 with `subscription_status_summary` required_variable.

**Classification:** `polish-now → fix in-place`.
**Fix lives in:** `Section 1Q.13` Module 8 binding rule + `Section 1Q.5` template required_variables (Patch 7 below).

## 7.4 — Provider asks support to follow up, but support lacks clinical context
**Setup:** Provider sends message: "Please ask patient about peanut allergy resolution"; staff/support fields the call.
**System behavior:** Patch 6 of dynamic behavior cross-owner clinical context banner renders for support staff fielding provider-handoff tasks. Capability-bound per `Section 1D.1`.
**Failure mode:** none.
**Classification:** `no_issue`.

## 7.5 — Vendor update needs ops + provider awareness
**Setup:** Vendor reports lab kit returned but specimen rejected (insufficient sample). Ops needs to send replacement; provider needs to know clinical timing impacted.
**System behavior:** Cross-domain context banner per adversarial Refinement 2 surfaces ops events to providers when temporally correlated with clinical timeline. Section 1G.5 + Section 1L lab orchestration handle the workflow.
**Failure mode:** none.
**Classification:** `no_issue`.

---

# Part 8 — 25 invariant validation

| # | Invariant | Status |
|---|---|---|
| 1-15 | Original 15 + 3 pressure-test corrections | HOLD |
| 16 | marketing_profile not-junk-drawer | HOLD |
| 17 | Marketing lifecycle flags DERIVED | HOLD |
| 18 | Six-gate enforcement on all campaign execution | HOLD |
| 19 | System is source of truth for attribution | HOLD |
| 20 | All marketing outbound links MUST be tracking-wrapped | HOLD |
| 21 | Privacy-safe URL/UTM/external-platform discipline | HOLD |
| 22 | Campaigns are STATE MACHINES, not linear blasts | HOLD |
| 23 | Conversion events MUST trigger transitions | HOLD |
| 24 | Resend logic discipline | HOLD |
| 25 | Supplement vs clinical pathway lifecycles MUST NOT collapse | HOLD |

**25/25 invariants HOLD.** Foundational gap from Cat 6.5 (campaign_recall) is a NEW pattern parallel to existing recall mechanisms — not a violation of an existing invariant, but a missing pattern that becomes essential at scale.

---

# Part 9 — Final verdict

**Verdict: MOSTLY READY → READY after 6 in-place fixes land in this checkpoint.**

| Metric | Result |
|---|---|
| Scenarios traced | 30 |
| Scenarios passing | 24 (80%) |
| Foundational gaps surfaced | 1 (campaign_recall pattern) |
| Polish-now items surfaced + fixed in-place | 5 (decision_support_payload + emitter + clarification rule + anti-vague lint + refund-subscription) |
| Items deferred to "runtime fixtures" | **0** (per user discipline; everything fixed now) |
| Regressions vs prior pressure tests | 0 |
| Invariants still holding | 25/25 |

## 6 in-place fixes (NOT appendix; in their right architectural homes)

1. **Patch 2** — `Section 1Q.10` + `Section 1Q.7`: campaign_recall pattern (foundational; Cat 6.5)
2. **Patch 3** — `Section 1Q.4`: decision_support_payload minimum-content discipline (polish-now; Cat 2.4)
3. **Patch 4** — `Section 1P` emitter discipline: patient_self_correction auto-detection (polish-now; Cat 4.3)
4. **Patch 5** — `Section 1G.5` + `Section 1Q.1` + `Section 1Q.13` Module 2: free-text-reply-to-clarification rule + template (polish-now; Cat 4.4)
5. **Patch 6** — `Section 1Q.5`: anti-vague-outside-secure CI lint (polish-now; Cat 5.2)
6. **Patch 7** — `Section 1Q.13` Module 8 + `Section 1Q.5`: refund-subscription-clarity template + required_variables (polish-now; Cat 7.3)

Total: ~150-180 lines net of in-place fixes across 6 patches in their natural-home Sections.

After fixes land: **READY** for runtime authoring.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-05-01. Single multi-file checkpoint applied: this audit + 6 in-place patches. No appendix. No deferral. All bugs fixed in their right architectural homes per user discipline.
