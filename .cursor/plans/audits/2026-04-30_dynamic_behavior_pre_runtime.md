# Dynamic behavior pre-runtime stress test

**Date:** 2026-04-30
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** Pure orthogonal stress test of the locked architecture against dynamic behavior over time. NOT another clinical pathway slice. 7 categories × 35 scenarios. Identifies whether the system fails, annoys users, confuses providers, over-messages patients, sequences poorly, or behaves badly when multiple events stack over time.
**Verdict:** Architecture **MOSTLY READY**. 6 foundational gaps + 8 MVP-polish refinements + 12 runtime-only observations. Foundational gaps addressable with 6 small in-place patches (~150 lines net). Recommend: land patches in this checkpoint → repeat this stress test once → runtime green-light if verdict goes to READY.

---

# Part 1 — Architecture-already-handles inventory (pre-read)

| Capability | Where | Status |
|---|---|---|
| Cross-channel deduplication | `Section 1G.3` + GLP-1 Refinement 5 | EXISTS |
| Digest rule (≥3 notifications/4h → digest) | `Section 1G.3` + `Section 1Q.13` | EXISTS |
| Safety SMS override (always fires regardless of preference) | `Section 1G.3` | EXISTS |
| Active safety window 24h + suppress routine | `Section 1G.3` step 5 | EXISTS |
| Surfacing tier (primary / supplementary / informational; 8-cap) | `Section 1P.5` | EXISTS |
| Mode F consolidation | `Section 1P.5` GLP-1 Refinement 1 | EXISTS |
| Override audit + aggregate stats | `Section 1Q.7` `rule.firing_overridden` | EXISTS |
| Model recall / re-extraction | `Section 1Q.10` + `Section 1P.11` | EXISTS |
| Cross-domain context banner (ops → clinical) | `Section 1P.5` adversarial Refinement 2 | EXISTS |
| Pre-send revalidation | not explicit | **GAP** |
| Stale provider decision flagging | not explicit | **GAP** |
| Clarification retry limits | not explicit | **GAP** |
| Long-term re-engagement cadence | thin (T1→T2→T3 mentioned only) | **GAP** |
| Cross-owner clinical context banner (clinical → ops/billing) | not explicit | **GAP** |
| Marketing exclusion windows after denial/deferral | not explicit | **GAP** |
| Wrong-channel safety capture | Section 1P safety scan SHOULD apply uniformly | VERIFIED OK |
| Owner-per-atom for cross-domain stacks | `Section 1P.5` parallel role-scoped reviewers | EXISTS |

---

# Part 2 — Category 1: Temporal orchestration

## Scenario 1.1 — Lab reminder, refill block, provider clarification, shipment delay all within 24h

**Events (chronological):**
- T0: Lab reminder rule fires (Module 5; intent=`clinical`; tier_2)
- T0+2h: Refill block rule fires (Module 6; intent=`clinical`; tier_2)
- T0+5h: Provider clarification rule fires (Module 4; intent=`clinical`; tier_2)
- T0+8h: Shipment delay vendor webhook → fulfillment notification (Module 7; intent=`operational`; tier_2)

**How current architecture handles:**
- Cross-channel dedup per Refinement 5 applies per-rule, not across rules
- Digest rule applies: ≥3 notifications/4h triggers digest message via `account_lifecycle` template domain
- 4 rules × 4h window: at T0+5h the 3rd notification fires → digest is created summarizing all 3 + click-through; 4th at T0+8h folds into the digest
- No active safety window; no suppression
- Provider sees 4 separate items in batch review (each rule fires independently)

**Failure mode:**
- Patient sees ONE digest with 4 actions = good. But the digest domain is `account_lifecycle` which is intent=`account` — semantic mismatch with the underlying clinical/operational events. Click-throughs go to per-event detail in-app, but the digest's `tone_constraints` may not match each event's tone (lab reminder = warm_direct; clarification = clinical_formal; shipment delay = factual_only).

**Classification:** `mvp_polish` — the digest message domain choice + tone_constraints unification needs runtime calibration. Not foundational; existing digest infrastructure works.

**Proposed patch:** runtime-only; add to integration test fixtures.

---

## Scenario 1.2 — Safety + marketing + billing reminder same day

**Events:**
- T0: Patient reports nausea via portal message → AI atomization → `clinical_safety_escalation` rule fires (Module 9; intent=`safety`; tier_5 secure-view + tier_2 vague companion outside)
- T0+2h: Routine marketing message scheduled via `marketing_lifecycle` rule (Module 15; intent=`marketing`; tier_3 if patient has `marketing_personalization_with_phi`)
- T0+5h: Billing renewal reminder rule fires (Module 8; intent=`billing`; tier_2)

**How current architecture handles:**
- T0 safety event: SMS-vague-first fires; push header-only; provider phone outreach SLA starts; **24h active safety window opens**; routine notifications suppressed during window per `Section 1G.3` step 5 emergency orchestration
- T0+2h marketing: SUPPRESSED by safety window; audit `notification.suppressed_during_safety_window`
- T0+5h billing: SUPPRESSED (intent ∈ {marketing, billing, education, operational} are all routine per current 1G.3)
- T0+24h: window closes; routine resumes

**Failure mode:**
- Billing reminder for an actual upcoming charge could be a real problem if suppressed across the safety window — patient could miss payment. Current rule blanket-suppresses ALL `billing` intent during safety window. Need finer discipline: suppress billing PROMOTIONAL ("upgrade to annual plan!") but allow billing TRANSACTIONAL ("your card will be charged in 3 days") during safety window.
- Current `message_intent` taxonomy uses single `billing` intent — does not distinguish transactional vs promotional sub-intent.

**Classification:** `foundational_gap` — `message_intent: billing` needs to distinguish transactional vs promotional for suppression discipline. Either (a) add subtype, OR (b) introduce a separate `is_transactional_critical: boolean` flag on templates so safety window suppression honors transactional billing.

**Proposed patch:** Lighter-weight option: extend `Section 1Q.5` template with `transactional_critical: boolean` flag (default false). When true, the safety-window suppression is bypassed AND privacy gate still applies. Document in `Section 1G.3` step 5 emergency orchestration. Folded into Patch 4 (marketing exclusion windows) to keep patch count tight.

---

## Scenario 1.3 — Refill request while labs pending + provider review pending + prior clarification unanswered

**Events:**
- T-7d: Provider sent clarification (e.g., "have you had abdominal pain in the last week?"); patient ignored
- T-3d: Lab order kit shipped; patient hasn't returned sample
- T-1d: Provider review batch in queue (waiting on labs + clarification)
- T0: Patient submits refill request via portal action

**How current architecture handles:**
- `pending_patient_input_tasks` exist for both clarification + lab return per `1G.11` action items
- Refill request creates a NEW `patient_action_items` row + invokes refill rule
- Refill rule's preconditions check (lab freshness + clarification freshness) → FAILS both (labs not returned + clarification unanswered)
- Refill rule action: `kind: 'block'` + `block_reason_code: 'pending_clinical_blockers'` + `consent_uplift_required: false`

**Failure mode:**
- Patient gets a "your refill is blocked because [pending clarification + lab not returned]" message. But the clarification message + lab kit reminder + refill block message are all separate firings — could trigger digest, but the digest message may not coherently summarize "you have 3 things waiting for you."
- Provider workspace may show 3 separate items even though they're related to one pathway state.

**Classification:** `mvp_polish` — existing digest + Mode F consolidation handle the patient side; provider workspace can group by pathway via existing `Section 1P.5` batch review primitives. Runtime calibration.

**Proposed patch:** runtime-only.

---

## Scenario 1.4 — Patient submits new free text after provider review but before outbound message sent

**Events:**
- T0: Provider reviews case + writes `provider_confirmed` clinical assertion (e.g., approves Rx); rule action emits `notify` template via `outbound_jobs`; queue scheduled for T0+15min (rate limit window)
- T0+5min: Patient submits free text via portal: "Wait — I just realized I have prostate cancer history I forgot to mention" → AI atomization → safety event candidate
- T0+15min: outbound_jobs dispatches the pre-rule-firing approval message

**How current architecture handles:**
- Patient's free text creates `inbound_narrative_review` row + classification + atomization
- Atomization produces `condition.prostate_cancer_personal_history = true` candidate atom (high severity safety flag)
- Safety scan fires deterministically on the new evidence
- BUT: the queued `outbound_jobs` row at T0+15min is NOT revalidated against new evidence before dispatch
- Patient receives "Your prescription has been approved" message AT THE SAME TIME the safety event is being processed

**Failure mode:** **HIGH-severity foundational gap.** Patient gets inconsistent guidance: an approval message AND an urgent-safety message within minutes of each other. Approval is now stale and potentially unsafe.

**Classification:** `foundational_gap` — pre-send revalidation pattern is missing.

**Proposed patch:** **Patch 2** — `Section 1G.3` + `Section 1Q.7` pre-send revalidation pattern. At outbound_jobs dispatch time (after privacy gate, before actual SMS/email send): verify `evidence_refs[]` are still current; verify no newer assertion contradicts firing's preconditions; verify provider decision (if cited in evidence_refs) not superseded. On failure: cancel send + audit `notification.cancelled_pre_send_stale_evidence` + create `patient_action_items` of type `secure_message_waiting` + reroute to provider review queue with stale-decision flag. Pattern reuses existing audit infrastructure.

---

## Scenario 1.5 — Vendor fulfillment update arrives after provider clinical decision

**Events:**
- T0: Provider approves Rx based on shipping address X
- T0+1h: Vendor webhook arrives reporting "shipping address X invalid"
- T0+2h: Patient gets confused order-status messages

**How current architecture handles:**
- Vendor webhook = structured payload → bypasses Section 1P AI atomization; deterministic handler in `Section 1L`/`1I.5`/`1O.14` per vendor type
- Operational state updates: `commerce_orders` / `treatment_orders` shipping address invalid flag
- Cross-domain context banner per adversarial Refinement 2 fires when ops events impact clinical timeline
- Provider's clinical decision (Rx approval) remains valid clinically — only fulfillment is affected
- Ops queue gets the address-fix task; provider's decision is NOT auto-flagged stale

**Failure mode:** correctly handled — vendor data updates ops state only; clinical decision remains valid. Provider receives banner on next batch review showing fulfillment exception. Patient gets routed to ops fix flow.

**Classification:** `no_issue` — architecture correctly distinguishes vendor (ops) authority from clinical authority per `Section 1P` invariant 8.

**Proposed patch:** none.

---

# Part 3 — Category 2: Provider cognitive load

## Scenario 2.1 — Clean patient with 35 candidate atoms but only 5 matter

**How current architecture handles:**
- `Section 1P.5` surfacing tier discipline classifies atoms as `primary_candidate` / `supplementary_signal` / `informational_pointer`
- Default UI surface caps at 8 primary candidates per batch
- 35 → ~5 primary + ~10 supplementary + ~20 informational; provider sees 5 by default with expand-supplementary affordance

**Failure mode:** correctly handled by surfacing tier discipline.

**Classification:** `no_issue`.

---

## Scenario 2.2 — Conflicting structured + narrative + document evidence

**Example:** Structured intake says "no diabetes"; narrative says "I'm pre-diabetic"; uploaded lab shows A1c = 6.8% (diabetic range).

**How current architecture handles:**
- All three sources create separate atoms with different `authored_by` values: `patient_reported` (structured intake), `patient_reported` (free-text narrative; same authority), `lab_derived` (uploaded lab)
- Authority ranking per `Section 1K.5.A` + `Section 1P.0` invariant 9: lab_derived > patient_reported
- Conflict detection fires per `Section 1P.8` cross-source reconciliation
- Provider sees evidence stack with conflict banner

**Failure mode:** correctly handled. Authority ranking + provider review reconciles. Provider may write `provider_confirmed` superseding all lower-authority inconsistencies.

**Classification:** `no_issue`.

---

## Scenario 2.3 — Patient has unresolved clinical + billing + fulfillment + support items

**How current architecture handles:**
- Each item has its own owner per `Section 1P.5` parallel role-scoped reviewers
- Cross-batch concept-aware review surfacing per `Section 1P.5` shows prior assertions on same `(patient_id, concept_id, context_key)`
- Provider workspace defaults to clinical-domain items; ops workspace defaults to ops-domain; etc.
- Cross-domain banners exist (ops → clinical adversarial Refinement 2)

**Failure mode:** **MISSING the inverse banner** (clinical → ops/billing). When a refund task lands on ops staff but the underlying issue is a clinical safety event, ops staff has no automatic clinical context — must ask provider or check chart.

**Classification:** `foundational_gap` — cross-owner clinical context banner pattern needed.

**Proposed patch:** **Patch 6** — `Section 1G.5` + `Section 1Q.13` cross-owner clinical context banner (inverse of adversarial Refinement 2). Ops/billing staff workspace renders read-only clinical context summary on handoff tasks; PHI bound by `Section 1D.1` capability per role.

---

## Scenario 2.4 — Provider sees decision_support_payload with insufficient context

**How current architecture handles:**
- `decision_support_payload` per `Section 1Q.4` carries `suggested_options[]` + `rationale_summary` + `evidence_summary`
- evidence_summary is pre-computed at rule-firing time from typed inputs (no AI runtime content)

**Failure mode:** if rule's evidence_summary computation logic is too thin, provider needs to drill into raw evidence_refs. Not architectural — content quality issue resolved at rule definition PR review.

**Classification:** `runtime_only` — sandbox test fixtures should include "insufficient context" cases to drive better evidence_summary content at PR time.

---

## Scenario 2.5 — Provider repeatedly overrides a rule

**How current architecture handles:**
- `Section 1Q.7` `rule.firing_overridden` event captures every override with full provenance
- Aggregate stats per `(rule_id, rule_version, override_reason_code)` feed quality monitoring per `Section 1Q.10` rule_recall
- Clinical CODEOWNER reviews aggregate quarterly

**Failure mode:** quarterly review may be too slow if a rule is consistently wrong (e.g., 80% override rate). Need automated alert when override rate exceeds threshold.

**Classification:** `mvp_polish` — add threshold-driven alert in rule_recall aggregate stats.

**Proposed patch:** runtime-only; add to rule_correction_patterns_rollup view per `Section 1P.11` discipline.

---

# Part 4 — Category 3: Edge-case stacking

## Scenario 3.1 — GLP-1: external prior use + missed 3 weeks + high-dose restart request + nausea + warm shipment + refund

**How current architecture handles:**
- `medication.semaglutide` assertion with `metadata.care_management_source = 'outside_provider_continuation'`
- Adherence-aware dose decision rule per adversarial Refinement 1 detects 3-week gap → `decision_support_payload` with re-titrate / continue / discontinue options
- Nausea atom + safety scan
- Warm shipment cold-chain failure event + cross-domain context banner
- Refund request via `1I.4`

**Result:** safety priority drives sequence. Provider sees stacked context with banners. Patient gets ONE digest. Ops processes refund + replacement. Provider authorizes (or refuses) restart with documented reasoning per scoped clinical override pattern.

**Classification:** `no_issue` — adversarial slice + GLP-1 slice already covered this depth.

---

## Scenario 3.2 — TRT: outside TRT + stale labs + elevated hematocrit + fertility concern + refill request

**How current architecture handles:**
- TRT slice handles each individually
- Stacked: safety preflight blocks refill on HCT >54%; lab freshness blocks refill on stale labs; fertility concern triggers clarification; outside TRT triggers `outside_trt_continuation_disclosure` rule
- Provider sees full safety stack; multiple blocking rules can stack per `Section 1Q.7` audit chain
- Decision_support_payload: typed options for handling each concern

**Failure mode:** with 5 stacked blocking concerns, the provider workspace surface needs to render the FULL stack coherently — not 5 separate "blocked: <reason>" banners. Existing batch review UI renders per-rule, not consolidated.

**Classification:** `mvp_polish` — provider workspace UI needs consolidated safety stack rendering. Architectural primitives (audit + decision_support_payload) support it; UI work at runtime.

**Proposed patch:** runtime-only; add to integration test fixtures.

---

## Scenario 3.3 — ED: nitrate med + chest pain narrative + urgent prescription before travel + billing complaint

**How current architecture handles:**
- Nitrate medication assertion + ED contraindication rule fires (BLOCK; non-overridable)
- Chest pain narrative → safety scan match → urgent classification + tier_5 secure / tier_2 vague companion + provider phone outreach
- Urgent travel request: irrelevant to safety stack — patient cannot have ED Rx with active nitrates regardless of travel timing
- Billing complaint: separate ops queue
- Active safety window opens (chest pain) → routine messaging suppressed; provider phone outreach SLA 15-min

**Failure mode:** correctly handled — safety priority dominates; urgent travel request doesn't shortcut safety; nitrate contraindication is non-overridable.

**Classification:** `no_issue`.

---

## Scenario 3.4 — Female HRT: unclear pregnancy + clotting family hx + severe mood + dose increase + mammogram/lab uncertainty

**How current architecture handles:**
- Multiple safety preflight rules fire (clotting family hx → review; pregnancy uncertainty → BLOCK pending clarification; severe mood → safety event; mammogram pending → lab requirement)
- Stacked clarifications consolidate to ONE Mode F session per Mode F consolidation rule
- Provider sees full safety stack with banner

**Failure mode:** Female HRT is `pathway_sensitivity: high` (per Section 1K.2) — outside-secure communication must be tier_2 + cannot name "HRT" outside-secure unless per-template explicit opt-in. Multiple stacked blockers may produce a lengthy in-secure message. Patient may not engage. Same `mvp_polish` as Scenario 3.2 — UI consolidation.

**Classification:** `mvp_polish`.

---

# Part 5 — Category 4: User behavior vs system intent

## Scenario 4.1 — Patient ignores Mode F clarification, then sends free text

**How current architecture handles:**
- Mode F clarification creates `pending_patient_input_tasks`
- Patient's free text → AI atomization → may or may not address the clarification
- If AI extraction matches the clarification's expected concept_id: candidate atom routes to provider review (NOT auto-resolves the task — provider determines if patient's narrative addresses the question)
- If no match: clarification remains open; free text is its own atom

**Failure mode:** **GAP — no clarification retry limit.** Patient could ignore N clarifications without escalation. Pathway sits in `pending_clinical_blockers` indefinitely.

**Classification:** `foundational_gap`.

**Proposed patch:** **Patch 7** — `Section 1G.5` clarification retry limits + escalation. After N consecutive ignored clarifications (default N=3 non-safety; N=2 safety-adjacent), next firing escalates to phone outreach. After 2 phone attempts unanswered, pathway closes with `closed_clarification_unanswered` reason code per `1K.13`.

---

## Scenario 4.2 — Patient answers half of structured follow-up

**How current architecture handles:**
- Each question has its own `intake_response` row; partial answers create partial state
- Per `Section 1K.5.A` partial-data semantics: partial_data → `metadata.completion_status = 'partial'` → fail-closed safety
- Resolver per `1K.6` resumes at last completed step
- Patient can return to incomplete session via Mode B re-entry per `1K.13`

**Failure mode:** correctly handled — partial-data semantics + Mode B resume.

**Classification:** `no_issue`.

---

## Scenario 4.3 — Patient contradicts themselves across channels

**Example:** patient says "no allergies" in intake form; later messages provider "I'm allergic to peanuts."

**How current architecture handles:**
- Both atoms preserved with same `authored_by: patient_reported`
- Conflict detection per `Section 1P.8` cross-source reconciliation
- Provider review reconciles via `provider_confirmed` assertion

**Failure mode:** **patient self-correction needs capture.** Section 1P invariant 9 has `patient_self_correction` authority value (rank 80, higher than first-time `patient_reported`). Need to verify the AI atomization emitter assigns `patient_self_correction` when contradicting prior `patient_reported` rather than just `patient_reported` again.

**Classification:** `mvp_polish` — existing authority taxonomy supports it; emitter logic needs to detect contradiction and use the higher-rank value.

**Proposed patch:** runtime-only emitter logic; sandbox test fixture.

---

## Scenario 4.4 — Patient replies "yes" to email that needed structured data

**How current architecture handles:**
- Email reply lands as inbound message → `Section 1P` atomization
- Free-text "yes" → AI classifier likely classifies as conversational skip (per `Section 1P.10` retention discipline) OR as ambiguous response
- If ambiguous: provider/staff sees the reply attached to the original clarification thread; provider can ask follow-up

**Failure mode:** patient may THINK they answered the question; system doesn't auto-resolve clarification on free-text "yes" (correctly — needs structured response). But patient frustration risk if no clear feedback that "yes is not enough."

**Classification:** `mvp_polish` — when free-text reply lands on a structured-data clarification, system should auto-respond with "we need a quick structured answer; please tap [link]" rather than leaving the patient to wonder.

**Proposed patch:** runtime-only template + rule for "free_text_reply_to_structured_clarification" pattern.

---

## Scenario 4.5 — Patient sends urgent symptoms via billing/support

**How current architecture handles:**
- Section 1P inbound atomization runs on ALL inbound channels (intake / messages / email / phone transcript / sms / staff notes / vendor / partner)
- Deterministic safety scan applies UNIFORMLY regardless of source channel per `Section 1P.0` invariant 4
- Atom routing per `Section 1P.4`: urgent symptom atom routes to clinical workflow regardless of source channel
- Source narrative preserved with vendor/source attribution

**Failure mode:** correctly handled — wrong-channel safety capture works because atomization is channel-agnostic.

**Classification:** `no_issue` (verified).

---

## Scenario 4.6 — Patient opts out of SMS, then triggers urgent safety workflow

**How current architecture handles:**
- Patient revokes `marketing_sms` + sets `notification_channel_preferences.transactional_preferred_channels[]` to exclude SMS
- Urgent safety event fires → `Section 1G.3` SMS-vague-first override per emergency orchestration step 1: "safety-critical messages ALWAYS fire on SMS regardless of preference"
- Provider phone outreach SLA starts regardless

**Failure mode:** correctly handled — safety override is invariant 5 of `Section 1Q.17` ("safety override never raises channel ceiling" + "patient preference TIGHTENS only").

**Classification:** `no_issue`.

---

# Part 6 — Category 5: Communication perception + over-messaging

## Scenario 5.1 — Patient gets too many "action needed" messages

**How current architecture handles:**
- Digest rule (≥3 in 4h → digest) handles burst
- Cross-channel dedup handles same-rule-multiple-channel
- Mode F consolidation handles multiple clarifications

**Failure mode:** if 4 different rule firings in different 4h windows (each <3 in their own window), no digest fires. Patient could get 4 separate messages in 24h across rule windows.

**Classification:** `mvp_polish` — extend digest rule with rolling 24h secondary trigger.

**Proposed patch:** runtime-only; configurable threshold in `Section 1G.3` digest rule.

---

## Scenario 5.2 — Privacy-safe messages are too vague to be useful

**Example:** "Your provider has an update. Open Bloom." — patient doesn't know if it's urgent, routine, or what action.

**How current architecture handles:**
- `Section 1Q.17` privacy-safe useful outside-secure examples discipline (Part 12 of privacy audit)
- Templates cite ACTIONABLE outside-secure copy: "We need one more detail to continue your request" / "Your refill request needs a quick review" / "Your lab kit ships tomorrow"

**Failure mode:** discipline exists but enforcement is at PR review of templates. Some templates may regress to vague-portal-only without CI lint catching it.

**Classification:** `mvp_polish` — add CI lint pattern that flags templates with overly-vague outside-secure copy (e.g., "open the app" without action context).

**Proposed patch:** runtime-only CI lint rule; add to pre-merge template review checklist.

---

## Scenario 5.3 — Marketing message arrives while clinical issue unresolved

**How current architecture handles:**
- During active safety window: routine intent suppressed (covers marketing)
- BUT: if no active safety window AND patient has open clinical issue (e.g., open `inbound_narrative_review` of `clinical` kind, pending clarification, denied pathway, deferred treatment): NO explicit suppression of marketing

**Failure mode:** **GAP — marketing suppression during open clinical concern.** Patient may receive promotional message while their refill is blocked or while their case is in deferral.

**Classification:** `foundational_gap`.

**Proposed patch:** **Patch 4** — `Section 1Q.1` `marketing_lifecycle` exclusion windows. 30d after active denial; 7d after deferral; 7d during open `inbound_narrative_review` of `clinical` kind. Pathway-configurable.

---

## Scenario 5.4 — Denial/deferral message and promo arrive within 48h

**How current architecture handles:**
- Same as 5.3 — currently no exclusion window enforced

**Failure mode:** identical — covered by Patch 4.

**Classification:** `foundational_gap` (same patch).

---

## Scenario 5.5 — Operational update accidentally implies clinical reassurance

**Example:** "Your shipment is on the way!" sent automatically AFTER a vendor cold-chain failure event was logged but before patient was notified. Patient infers "everything is fine."

**How current architecture handles:**
- Pre-send revalidation pattern (Patch 2) addresses this — vendor event between rule firing and dispatch should cancel the stale operational confirmation

**Failure mode:** without Patch 2, this is a real risk. With Patch 2, addressed.

**Classification:** `foundational_gap` (covered by Patch 2).

---

# Part 7 — Category 6: Stale state + race conditions

## Scenario 6.1 — Template rendered, then provider changes decision before send

**How current architecture handles:** Provider changes decision via `recordClinicalAssertion` → new `provider_confirmed` assertion supersedes prior. Pre-send revalidation (Patch 2) verifies provider decision in evidence_refs not superseded; cancels send + reroutes.

**Classification:** `foundational_gap` (covered by Patch 2).

---

## Scenario 6.2 — Patient completes missing data after denial queued but before sent

**How current architecture handles:** Same pattern — pre-send revalidation cancels denial; reroutes to provider review with new evidence.

**Classification:** `foundational_gap` (covered by Patch 2).

---

## Scenario 6.3 — Lab result arrives after provider approves bridge refill but before shipment

**How current architecture handles:** Lab result creates new `lab_derived` assertion. Provider's bridge approval was a `rule.firing_overridden` event with `override_scope: 'this_firing_only'`. Bridge supply Rx is queued for fulfillment. Lab result with critical value (e.g., HCT 56% on TRT) needs to flag the bridge-supply-pending downstream action as stale.

**Failure mode:** **GAP — provider's prior decision should auto-flag stale_pending_review when contradicting evidence arrives before downstream actions complete.**

**Classification:** `foundational_gap`.

**Proposed patch:** **Patch 3** — `Section 1G.5` + `Section 1Q.7` stale-pending-review pattern. Auto-flag affected provider decision; provider sees banner on next batch review.

---

## Scenario 6.4 — Vendor reports cold-chain failure after "shipped successfully" message

**How current architecture handles:** Vendor reports cold-chain failure → triggers fulfillment exception per `Section 1G.5` + `1H.6.1E`; patient already received "shipped" message; system needs to send corrective message.

**Failure mode:** patient-visible correction template needed but exists per Module 7 fulfillment_exception domain.

**Classification:** `no_issue` — corrective templates exist; ops processes replacement.

---

## Scenario 6.5 — Model recall affects assertion used in recent decision

**How current architecture handles:** `Section 1Q.10` model_recall pattern + re-extraction per adversarial Refinement 4. `mass_supersede` action retracts affected atoms; `flag_for_re_review` queues for provider re-review; recent decisions citing affected atoms are surfaced via correction-loop pattern.

**Classification:** `no_issue` — adversarial slice covered this.

---

# Part 8 — Category 7: Internal ownership + handoff

## Scenario 7.1 — Clinical and billing issue from one message

**How current architecture handles:** `Section 1P.5` parallel role-scoped reviewers — both provider + billing assigned per atom domain. Both see source message via `inbound_narrative_review_role_assignments`.

**Classification:** `no_issue`.

---

## Scenario 7.2 — Ops resolves shipment but provider still needs clinical follow-up

**How current architecture handles:** Each domain's atoms have their own owner; ops resolution doesn't auto-close clinical follow-up. Provider sees ops resolution via cross-domain context banner.

**Failure mode:** correctly handled.

**Classification:** `no_issue`.

---

## Scenario 7.3 — Billing refunds patient but subscription remains active

**How current architecture handles:** Refund flow per `1I.4` is independent of subscription state per `1I.7`. They're separate primitives.

**Failure mode:** patient may be confused: "I got a refund, why am I still being charged monthly?" — but this is a UX/copy issue, not architectural.

**Classification:** `mvp_polish` — refund template should clarify subscription status; if patient wants subscription cancelled, separate flow.

**Proposed patch:** runtime-only template content.

---

## Scenario 7.4 — Provider asks support to follow up, but support lacks clinical context

**How current architecture handles:** **GAP — same as Scenario 2.3.** Cross-owner clinical context banner needed.

**Classification:** `foundational_gap` (covered by Patch 6).

---

## Scenario 7.5 — Vendor update requires ops action and provider awareness

**How current architecture handles:** Vendor update routes to ops queue; cross-domain context banner per adversarial Refinement 2 surfaces clinical impact for provider review.

**Classification:** `no_issue`.

---

# Part 9 — Foundational gaps summary

| # | Gap | Patch | Section affected |
|---|---|---|---|
| F1 | Pre-send revalidation pattern (Scenarios 1.4, 5.5, 6.1, 6.2) | Patch 2 | `Section 1G.3` + `Section 1Q.7` |
| F2 | Stale provider decision flagging on new evidence (Scenario 6.3) | Patch 3 | `Section 1G.5` + `Section 1Q.7` |
| F3 | Marketing exclusion windows after denial/deferral (Scenarios 5.3, 5.4) | Patch 4 | `Section 1Q.1` |
| F4 | Long-term re-engagement cadence discipline (long-term marketing concern in user prompt) | Patch 5 | `Section 1Q.13` Module 15 |
| F5 | Cross-owner clinical context banner (Scenarios 2.3, 7.4) | Patch 6 | `Section 1G.5` + `Section 1Q.13` |
| F6 | Clarification retry limits + escalation (Scenario 4.1) | Patch 7 | `Section 1G.5` |
| F7 (folded into F3) | Transactional vs promotional billing distinction during safety window (Scenario 1.2) | Patch 4 (additive) | `Section 1Q.5` `transactional_critical: boolean` |

**6 distinct patches** addressing **7 foundational gaps**. None introduce new primitives; all extend existing sections.

---

# Part 10 — MVP-polish refinements

| # | Refinement | Where | Disposition |
|---|---|---|---|
| M1 | Digest message domain + tone unification (Scenario 1.1) | Runtime calibration; integration test fixture | runtime-only |
| M2 | Provider workspace UI consolidated safety stack rendering (Scenarios 3.2, 3.4) | Runtime UI | runtime-only |
| M3 | Override rate threshold-driven alert (Scenario 2.5) | `rule_correction_patterns_rollup` view | runtime-only |
| M4 | Patient self-correction emitter logic (Scenario 4.3) | Atomization emitter | runtime-only |
| M5 | Free-text reply to structured clarification handler (Scenario 4.4) | Template + rule pattern | runtime-only |
| M6 | Rolling 24h digest threshold (Scenario 5.1) | `Section 1G.3` digest rule | runtime-only |
| M7 | Vague-outside-secure CI lint (Scenario 5.2) | Template review checklist | runtime-only |
| M8 | Refund vs subscription clarification template (Scenario 7.3) | Template content | runtime-only |

**8 MVP-polish refinements** — all runtime work, not architectural patches. Captured here for runtime test fixtures.

---

# Part 11 — Runtime-only observations

12 observations from compressed scenario tracing that should become integration test fixtures during runtime authoring:

1. Multi-rule digest content quality (1.1)
2. Edge-case stacking provider UI consolidation (3.2, 3.4)
3. Override rate threshold alerting (2.5)
4. Patient self-correction authority assignment (4.3)
5. Free-text reply to structured clarification (4.4)
6. Rolling 24h digest threshold tuning (5.1)
7. Outside-secure copy CI lint (5.2)
8. Refund + subscription state clarity (7.3)
9. Provider workspace consolidated safety stack
10. Cross-pathway concurrent multi-pathway behavior (deferred per plan)
11. Long-form intake atomization performance (>20KB free_text_long)
12. AI training feedback loop telemetry (rule_correction_patterns_rollup volume)

---

# Part 12 — Required pre-runtime rules

**Temporal orchestration rules required (in order):**
1. Pre-send revalidation MUST run after privacy gate, before SMS/email dispatch (Patch 2).
2. Stale-pending-review flag MUST auto-fire when contradicting evidence arrives during decision-action window (Patch 3).
3. Active safety window suppression MUST NOT block transactional-critical billing (Patch 4 additive flag).
4. Digest rule MUST handle ≥3 notifications per rolling 4h window (existing).
5. Mode F consolidation MUST collapse multiple clarifications per session (existing).

**Communication suppression / priority rules required:**
6. Marketing exclusion windows MUST fire after denial (30d), deferral (7d), open clinical concern (7d) (Patch 4).
7. Re-engagement cadence MUST cap at 3 contacts per stage; eligibility-event reset only (Patch 5).
8. Safety override MUST always fire on SMS regardless of preference; companion at tier_2 (existing).
9. Pathway sensitivity MUST cap outside-secure regardless of consent (existing).
10. Cross-owner banners MUST surface clinical context for ops/billing handoff tasks (Patch 6).

**Provider cognitive-load rules required:**
11. Surfacing tier MUST classify every atom; default UI cap 8 primary candidates (existing).
12. Decision_support_payload MUST carry typed options + rationale_summary + evidence_summary; no AI runtime content (existing).
13. Override aggregate stats MUST feed quality monitoring (existing).
14. Clarification retry limits MUST escalate after N=3 non-safety / N=2 safety-adjacent (Patch 7).
15. Cross-domain context banners MUST render bidirectionally (clinical↔ops; ops↔clinical) (existing + Patch 6).

---

# Part 13 — Final verdict

**Dynamic behavior verdict: MOSTLY READY.**

- 6 foundational patches (~150 lines net) close the gaps surfaced.
- 8 MVP-polish refinements deferred to runtime authoring + integration test fixtures.
- 12 runtime-only observations captured for pre-runtime test harness.
- Architecture HOLDS at the load-bearing patterns: surfacing tier, digest rule, safety window, mode consolidation, authority taxonomy, scoped overrides, decision_support_payload, model recall, cross-domain banner (one direction).
- Architecture HAS GAPS at the dynamic-time patterns: pre-send revalidation, stale-pending-review, marketing exclusion windows, re-engagement cadence discipline, cross-owner banner inverse direction, clarification retry limits.

**Hard-stop rule applied:** 6 foundational gaps surfaced. **Land patches in this checkpoint → repeat this stress test once → runtime green-light if verdict goes to READY.**

Recommended next checkpoint after patches land:
- Re-run this dynamic behavior stress test once more
- If verdict = READY: proceed to runtime authoring (`repo/rules/glp1/` + `repo/templates/glp1/`)
- If verdict still = MOSTLY READY: assess whether new gaps are foundational or runtime-only; if still foundational, the architecture has a deeper issue worth structural rework

Most likely outcome: after patches land, re-run finds verdict = READY and runtime authoring begins.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-04-30. Single multi-file checkpoint applied: this audit + 6 in-place patches + NEW Section 1Q.19 dynamic behavior pre-runtime gate.
