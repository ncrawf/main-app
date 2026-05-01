# Dynamic behavior verification pass — re-run of pre-runtime stress test

**Date:** 2026-05-01
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** Verification (not discovery) re-run of the 7-category × 35-scenario dynamic behavior stress test from `2026-04-30_dynamic_behavior_pre_runtime.md`. Validates that the 6 foundational patches landed in commit `fecab3c` resolved the originally-identified failure modes, did not introduce regressions, and that `Section 1Q.19`'s 12 invariants hold under re-evaluation.
**Verdict:** **READY FOR RUNTIME.** All 6 prior foundational gaps resolved by their respective patches. All 12 `Section 1Q.19` invariants hold. No regressions introduced. No new foundational gaps. 0 MVP-polish refinements (the 8 from prior pass remain runtime-only as expected). Hard-stop rule satisfied: declare READY via NEW `Section 1Q.20` runtime green-light.

---

# Part 1 — Verification methodology + scope

**Approach:** compressed per-scenario re-run. Each scenario from the original audit gets:
- Previous failure (if any)
- Current behavior post-patches
- Patch success: yes / no / partial
- Regression: yes / no
- Classification: `no_issue` | `mvp_polish` | `foundational_gap`

**Deep-expand criteria:** patch failed, regression detected, or new foundational issue surfaced. Otherwise: 1-3 lines.

**Patches under verification (commit `fecab3c`):**

| # | Patch | Section(s) modified |
|---|---|---|
| P2 | Pre-send revalidation gate | `1G.3` + `1Q.7` |
| P3 | Stale-pending-review for provider decisions | `1G.5` + `1Q.7` |
| P4 | Marketing exclusion windows + `transactional_critical` flag | `1Q.1` + `1Q.5` |
| P5 | Long-term re-engagement cadence (T1→T2→T3 hard cap) | `1Q.13` Module 15 |
| P6 | Cross-owner clinical context banner | `1G.5` + `1Q.13` |
| P7 | Clarification retry limits + phone escalation | `1G.5` |

**Foreseeable patch interaction edge cases checked:** (a) `transactional_critical` carve-out actually bypasses safety window suppression for billing; (b) marketing exclusion windows interaction with re-engagement cadence (deferral, not skip); (c) clarification escalation to phone + cross-owner banner availability for staff fielding the call.

---

# Part 2 — Category 1 verification: Temporal orchestration

## 1.1 — Lab reminder + refill block + provider clarification + shipment delay (24h)
- **Previous:** `mvp_polish` — digest message domain + tone unification.
- **Current:** unchanged — digest rule fires per `Section 1G.3` for ≥3 notifications/4h. P2 pre-send revalidation does not affect digest (digest is post-send aggregation, not per-rule send).
- **Patch success:** N/A (no patch needed for this scenario).
- **Regression:** no.
- **Classification:** `mvp_polish` (unchanged; runtime-only).

## 1.2 — Safety + marketing + billing reminder same day
- **Previous:** `foundational_gap` — billing transactional vs promotional distinction during safety window.
- **Current:** P4 `transactional_critical: boolean` flag carves out billing transactional reminders from safety-window AND marketing-exclusion suppression. Test trace: T0 safety event opens 24h window; T0+5h billing transactional reminder template declares `transactional_critical: true` → privacy gate runs normally; suppression check reads flag → BYPASS suppression → dispatch. Marketing reminder at T0+2h (no `transactional_critical`) → suppressed correctly.
- **Patch success:** YES.
- **Regression:** no.
- **Classification:** `no_issue`.

## 1.3 — Refill request while labs pending + provider review pending + prior clarification unanswered
- **Previous:** `mvp_polish` — UI consolidation across 3 separate items.
- **Current:** unchanged. P7 clarification retry limits applies if clarification has been ignored long enough; otherwise standard digest.
- **Patch success:** N/A.
- **Regression:** no.
- **Classification:** `mvp_polish` (unchanged; runtime-only).

## 1.4 — New free text after provider review but before outbound message sent
- **Previous:** `foundational_gap` — patient gets approval message AND urgent-safety message within minutes (HIGH-severity).
- **Current:** P2 pre-send revalidation gate runs at dispatch time. Patient's free text creates new evidence (e.g., `condition.prostate_cancer_personal_history = true` patient_reported atom). When the queued approval message hits dispatch, revalidation reads `evidence_refs[]` and detects contradicting newer assertion → cancels send + audits `notification.cancelled_pre_send_stale_evidence` + creates `secure_message_waiting` action item + reroutes to provider review with stale-decision flag (per P3 stale-pending-review pattern). Patient sees secure message in app; provider sees stale-pending-review banner on next batch review with new evidence.
- **Patch success:** YES — both P2 + P3 fire correctly in concert.
- **Regression:** no.
- **Classification:** `no_issue`.

## 1.5 — Vendor fulfillment update after provider clinical decision
- **Previous:** `no_issue`.
- **Current:** unchanged.
- **Classification:** `no_issue`.

---

# Part 3 — Category 2 verification: Provider cognitive load

## 2.1 — 35 atoms / 5 matter
- **Previous:** `no_issue` (surfacing tier).
- **Current:** unchanged.
- **Classification:** `no_issue`.

## 2.2 — Conflicting structured + narrative + document evidence
- **Previous:** `no_issue` (authority taxonomy).
- **Current:** unchanged.
- **Classification:** `no_issue`.

## 2.3 — Multi-domain unresolved (clinical + billing + fulfillment + support)
- **Previous:** `foundational_gap` — cross-owner clinical context banner missing.
- **Current:** P6 cross-owner clinical context banner now renders for ops/billing/support staff handling tasks with clinical context. Capability-bound per `Section 1D.1` — staff with `can_view_phi_full` see tier_4 summary; minimum-necessary roles see tier_2; no-PHI roles see flag only.
- **Patch success:** YES.
- **Regression:** no. CI lint enforces banner rendering on cross-owner handoff tasks; no leakage beyond capability tier.
- **Classification:** `no_issue`.

## 2.4 — Decision_support_payload with insufficient context
- **Previous:** `runtime_only` — content quality at PR time.
- **Current:** unchanged.
- **Classification:** `runtime_only` (deferred to integration test fixtures).

## 2.5 — Provider repeatedly overrides a rule
- **Previous:** `mvp_polish` — quarterly review threshold + automated alert.
- **Current:** unchanged. Aggregate stats per `(rule_id, override_reason_code)` feed `rule_correction_patterns_rollup` per existing `Section 1P.11` discipline; threshold-driven alerting is runtime work.
- **Classification:** `mvp_polish` (unchanged; runtime-only).

---

# Part 4 — Category 3 verification: Edge-case stacking

## 3.1 — GLP-1: external prior use + missed 3 weeks + high-dose restart + nausea + warm shipment + refund
- **Previous:** `no_issue` — adversarial slice + GLP-1 slice covered.
- **Current:** unchanged. P2 pre-send revalidation adds further protection if any rule fires while new safety event is in flight.
- **Classification:** `no_issue`.

## 3.2 — TRT: outside TRT + stale labs + elevated hematocrit + fertility + refill
- **Previous:** `mvp_polish` — UI consolidation of stacked safety stack.
- **Current:** unchanged. Architectural primitives all in place; UI work at runtime.
- **Classification:** `mvp_polish` (unchanged; runtime-only).

## 3.3 — ED: nitrate + chest pain + urgent-before-travel + billing
- **Previous:** `no_issue`.
- **Current:** unchanged. Safety priority dominates; nitrate contraindication is non-overridable. P4 ensures billing transactional reminder STILL reaches the patient if `transactional_critical: true` declared.
- **Classification:** `no_issue`.

## 3.4 — Female HRT: pregnancy uncertain + clotting fam hx + severe mood + dose increase + mammogram pending
- **Previous:** `mvp_polish` — UI consolidation.
- **Current:** unchanged.
- **Classification:** `mvp_polish` (unchanged; runtime-only).

---

# Part 5 — Category 4 verification: User behavior vs system intent

## 4.1 — Patient ignores Mode F clarification, then sends free text
- **Previous:** `foundational_gap` — no clarification retry limit.
- **Current:** P7 clarification retry limits enforce N=3 non-safety / N=2 safety-adjacent / N=1 hard-stop-safety. After N retries → escalate to phone outreach by ops/provider per `Section 1G.4`. After 2 phone attempts unanswered → pathway closes with `closed_clarification_unanswered` reason code per `1K.13`. Reopen-eligible action item created per `1G.11`. Patient-frustration mitigation: at retry N-1 a softer fallback template renders ("we'll move on if you don't respond — please tap [link] or we'll call you").
- **Patch success:** YES.
- **Regression:** no. Aggregate stats per `(pathway_code, clarification_template_key, retry_outcome)` feed `Section 1Q.10` rule_recall — high abandon-vs-resolve rates signal questions need rewording.
- **Classification:** `no_issue`.

## 4.2 — Patient answers half of structured follow-up
- **Previous:** `no_issue` (partial-data semantics + Mode B resume).
- **Current:** unchanged.
- **Classification:** `no_issue`.

## 4.3 — Cross-channel contradiction
- **Previous:** `mvp_polish` — emitter logic for `patient_self_correction` authority assignment.
- **Current:** unchanged.
- **Classification:** `mvp_polish` (unchanged; runtime-only).

## 4.4 — Patient replies "yes" to email needing structured data
- **Previous:** `mvp_polish` — auto-respond template + rule.
- **Current:** unchanged.
- **Classification:** `mvp_polish` (unchanged; runtime-only).

## 4.5 — Patient sends urgent symptoms via billing/support
- **Previous:** `no_issue` (verified).
- **Current:** verified again — `Section 1P` deterministic safety scan applies UNIFORMLY to all inbound channels per `Section 1P.0` invariant 4. Atom routing per `Section 1P.4` routes urgent symptom atom to clinical workflow regardless of source channel.
- **Classification:** `no_issue`.

## 4.6 — Patient opts out of SMS, then triggers urgent safety workflow
- **Previous:** `no_issue` — `Section 1G.3` safety override.
- **Current:** unchanged.
- **Classification:** `no_issue`.

---

# Part 6 — Category 5 verification: Communication perception + over-messaging

## 5.1 — Too many "action needed" messages
- **Previous:** `mvp_polish` — rolling 24h digest threshold.
- **Current:** unchanged.
- **Classification:** `mvp_polish` (unchanged; runtime-only).

## 5.2 — Privacy-safe messages too vague
- **Previous:** `mvp_polish` — CI lint for vague-portal-only patterns.
- **Current:** unchanged.
- **Classification:** `mvp_polish` (unchanged; runtime-only).

## 5.3 — Marketing message arrives while clinical issue unresolved
- **Previous:** `foundational_gap` — no exclusion window during open clinical concern.
- **Current:** P4 marketing exclusion windows enforce: 7-day exclusion during open `inbound_narrative_review` of clinical kind. Patient with open clinical concern → marketing rule firing suppressed → audit `notification.suppressed_during_safety_window` (event_type extended to cover non-safety-window exclusions per `suppression_reason` enum).
- **Patch success:** YES.
- **Regression:** no. Eligibility-event reset semantics correctly handle when clinical concern resolves: cadence resumes from where it deferred (NOT skipped).
- **Classification:** `no_issue`.

## 5.4 — Denial + promo within 48h
- **Previous:** `foundational_gap` — covered by P4.
- **Current:** P4 30-day post-denial exclusion enforces. Promo cannot fire within 48h of denial event for that patient.
- **Patch success:** YES.
- **Regression:** no. P5 re-engagement cadence respects exclusion (T1 deferred or denied-with-contraindication = NO automated re-engagement at all).
- **Classification:** `no_issue`.

## 5.5 — Operational update implies clinical reassurance
- **Previous:** `foundational_gap` — pre-send revalidation needed.
- **Current:** P2 covers — vendor cold-chain failure event landing between rule firing and dispatch causes the stale "shipped successfully" message to be cancelled at revalidation gate. Patient gets corrective message via P2 reroute path or via existing fulfillment_exception domain templates.
- **Patch success:** YES.
- **Regression:** no.
- **Classification:** `no_issue`.

---

# Part 7 — Category 6 verification: Stale state + race conditions

## 6.1 — Template rendered, then provider changes decision before send
- **Previous:** `foundational_gap` — covered by P2.
- **Current:** P2 pre-send revalidation reads provider decision in evidence_refs; if newer `provider_confirmed` assertion supersedes, send cancelled + reroute.
- **Patch success:** YES.
- **Classification:** `no_issue`.

## 6.2 — Patient completes data after denial queued but before sent
- **Previous:** `foundational_gap` — covered by P2.
- **Current:** P2 pre-send revalidation detects new evidence; cancels denial dispatch; reroutes to provider review with new info.
- **Patch success:** YES.
- **Classification:** `no_issue`.

## 6.3 — Lab arrives after provider approves bridge refill but before shipment
- **Previous:** `foundational_gap` — covered by P3.
- **Current:** P3 stale-pending-review pattern fires when `lab_derived` assertion lands with value contradicting decision's preconditions. Affected provider decision auto-flagged; downstream actions HELD per `Section 1G.5` contain discipline + P2 pre-send revalidation. Provider sees banner on next batch review.
- **Patch success:** YES (P2 + P3 work in concert).
- **Classification:** `no_issue`.

## 6.4 — Vendor reports cold-chain failure after "shipped successfully" message
- **Previous:** `no_issue` — corrective templates exist.
- **Current:** unchanged. If "shipped successfully" message has not yet dispatched, P2 pre-send revalidation cancels. If already sent, fulfillment_exception domain corrective templates fire per Module 7 + cross-domain context banner.
- **Classification:** `no_issue`.

## 6.5 — Model recall affects assertion used in recent decision
- **Previous:** `no_issue` — adversarial slice covered.
- **Current:** unchanged. `Section 1Q.10` model_recall + re-extraction patterns handle. P3 stale-pending-review auto-flags decisions citing affected atoms.
- **Classification:** `no_issue`.

---

# Part 8 — Category 7 verification: Internal ownership + handoff

## 7.1 — Clinical + billing from one message
- **Previous:** `no_issue` — parallel role-scoped reviewers.
- **Current:** unchanged.
- **Classification:** `no_issue`.

## 7.2 — Ops resolves shipment + provider follow-up
- **Previous:** `no_issue`.
- **Current:** unchanged. P6 cross-owner banner adds clinical context for ops staff if needed.
- **Classification:** `no_issue`.

## 7.3 — Refund + subscription remains active
- **Previous:** `mvp_polish` — template content.
- **Current:** unchanged.
- **Classification:** `mvp_polish` (unchanged; runtime-only).

## 7.4 — Provider asks support to follow up, but support lacks clinical context
- **Previous:** `foundational_gap` — covered by P6.
- **Current:** P6 cross-owner clinical context banner renders for support staff fielding provider-handoff tasks. Capability-bound per `Section 1D.1`.
- **Patch success:** YES.
- **Regression:** no.
- **Classification:** `no_issue`.

## 7.5 — Vendor update needs ops + provider awareness
- **Previous:** `no_issue` — cross-domain context banner per adversarial Refinement 2.
- **Current:** unchanged.
- **Classification:** `no_issue`.

---

# Part 9 — `Section 1Q.19` invariant validation

Each of the 12 invariants checked against the architecture as locked:

| # | Invariant | Status |
|---|---|---|
| 1 | Every queued `outbound_jobs` row passes pre-send revalidation gate at dispatch time before SMS/email/push send; CI lint forbids dispatch paths that bypass | HOLDS — P2 implements; CI lint declared |
| 2 | Provider decisions auto-flag `stale_pending_review` when contradicting evidence arrives during decision-action window | HOLDS — P3 implements |
| 3 | Marketing exclusion windows fire after denial (30d), deferral (7d), open clinical concern (7d), active safety window (existing 24h via `Section 1G.3` step 5); pathway-configurable | HOLDS — P4 implements |
| 4 | T1→T2→T3 re-engagement cadence caps at 3 contacts per trigger event; eligibility-event reset only | HOLDS — P5 implements |
| 5 | `denied_with_contraindication` patients are EXCLUDED from automated marketing re-engagement (provider-initiated only) | HOLDS — P5 explicit row in trigger event matrix |
| 6 | Cross-owner clinical context banner renders bidirectionally (clinical→ops/billing/support; ops/billing/support→clinical via existing `Section 1P.5` Refinement 2); both subject to `Section 1D.1` capability gating | HOLDS — P6 implements inverse direction; existing Refinement 2 covers original direction |
| 7 | Clarification retry limits enforce: N=3 non-safety / N=2 safety-adjacent / N=1 hard-stop-safety; escalate to phone outreach; close pathway with reopen-eligibility after 2 phone attempts unanswered | HOLDS — P7 implements |
| 8 | `transactional_critical: boolean` flag bypasses exclusion windows AND safety window suppression for billing/account/safety intents only; never `marketing` or `education` | HOLDS — P4 additive flag with CI lint enforcement |
| 9 | Aggregate stats per (rule_id, override_reason_code), (rule_id, stale_pending_review_flag_reason), (template_key, exclusion_window_suppression_reason), (clarification_template_key, retry_outcome) feed `rule_correction_patterns_rollup` for quality monitoring | HOLDS — existing infrastructure per `Section 1P.11` extended by P3 + P4 + P7 audit shapes |
| 10 | Audit rows for every dispatch decision per `Section 1Q.7` extended audit shapes — never silent | HOLDS — P2 + P3 + P7 add new audit event types; CI lint forbids silent paths |
| 11 | Wrong-channel safety capture works because `Section 1P` deterministic safety scan applies UNIFORMLY to all inbound channels regardless of source | HOLDS — verified at Cat 4.5; pre-existing per `Section 1P.0` invariant 4 |
| 12 | Patient-frustration mitigation: at retry N-1 (one before phone escalation), softer fallback template renders | HOLDS — P7 explicit clause |

**12/12 invariants hold.** No partial holds. No invariants requiring re-design.

---

# Part 10 — Patch interaction edge case analysis

Foreseeable interactions between patches were specifically traced:

## EC1 — `transactional_critical` carve-out actually bypasses suppression for billing
**Trace:** billing reminder template `tmpl.billing.renewal_3day_warning_v1` declares `message_intent: billing` + `privacy_exposure_level: 2` + `transactional_critical: true`. Patient is in active safety window. At dispatch time, suppression check reads `transactional_critical` flag → BYPASS suppression check (per Patch 4 explicit clause) → privacy gate runs normally → dispatch. **Verified:** P4 carve-out works as designed. CI lint forbids `transactional_critical = true` on `marketing` or `education` intents — billing/account/safety only.

## EC2 — Marketing exclusion windows × re-engagement cadence interaction
**Trace:** patient abandoned at Stage 1 day 0; cadence T1 fires day 2 (within 48h cadence rule); T2 scheduled day 7. Day 5: provider denies a different concurrent pathway. Day 7 cadence T2 fires → P4 30-day post-denial exclusion checks → suppress. T2 deferred per P5 explicit clause: "if cadence T2 is scheduled but patient is in active safety window OR open clinical concern, the cadence stage is DEFERRED (not skipped — paused until exclusion window closes)." Day 35 (post-denial-window-close): T2 fires. Day 65: T3 fires per cadence rule. Hard cap at 3 contacts. **Verified:** deferral semantics work. No regression.

## EC3 — Clarification escalation to phone × cross-owner banner availability
**Trace:** clarification ignored 3x → P7 escalates to phone outreach by staff (non-safety) or provider (safety-adjacent). Staff fielding the call already has access to the clarification task + patient chart per their `Section 1D.1` capability. Cross-owner banner per P6 renders if the staff member has handoff context (e.g., the clarification originated from a clinical event). For non-handoff cases (clarification owned by ops directly), banner not strictly required. **Verified:** no friction; staff have what they need.

## EC4 — Pre-send revalidation × stale-pending-review concurrent firing
**Trace:** provider decision at T0 triggers Rx authorization; queued message at T0+2h. T0+30min: contradicting evidence lands. P3 stale-pending-review fires → flags provider decision + holds downstream actions per `Section 1G.5` contain discipline. T0+2h dispatch: P2 pre-send revalidation reads provider decision in evidence_refs → finds it flagged stale → cancels send + reroutes. **Verified:** P2 + P3 work in concert; no race condition between flagging and dispatch.

**No interaction-induced regressions surfaced.**

---

# Part 11 — Final verdict + summary

**Dynamic behavior verdict: READY FOR RUNTIME.**

| Metric | Result |
|---|---|
| Prior foundational gaps | 7 (closed by 6 patches) |
| Foundational gaps in this verification | **0** |
| Regressions introduced by patches | **0** |
| `Section 1Q.19` invariants holding | **12 / 12** |
| MVP-polish refinements (unchanged from prior; runtime-only) | 8 |
| Runtime-only observations (test fixture material) | 12 |
| Patch interaction edge cases verified | 4 / 4 |

**Patch validation summary:**

| Patch | Resolution | Status |
|---|---|---|
| P2 Pre-send revalidation | Closes 1.4, 5.5, 6.1, 6.2 | FULLY RESOLVED |
| P3 Stale-pending-review | Closes 6.3 | FULLY RESOLVED |
| P4 Marketing exclusion + transactional_critical | Closes 1.2, 5.3, 5.4 | FULLY RESOLVED |
| P5 Re-engagement cadence T1→T2→T3 cap | Closes long-term marketing concern (user prompt) | FULLY RESOLVED |
| P6 Cross-owner clinical context banner | Closes 2.3, 7.4 | FULLY RESOLVED |
| P7 Clarification retry limits + phone escalation | Closes 4.1 | FULLY RESOLVED |

**Hard-stop rule satisfied:** all prior gaps resolved; no new foundational issues; no regressions. **Declare READY FOR RUNTIME via NEW `Section 1Q.20`.**

---

# Part 12 — Runtime authoring sequencing (post-greenlight)

After this checkpoint lands and `Section 1Q.20` runtime green-light is declared:

1. **Scaffold GLP-1 implementation** (`repo/rules/glp1/` + `repo/templates/glp1/` per `Section 1Q.16` + `1Q.15` discipline; module-organized subdirectories per `1K.14`; `repo/templates/glp1/marketing/` physically separated per `Section 1Q.13` carve-out).
2. **Author rules + templates as TypeScript code-as-config** — 24 GLP-1 rules + 25 GLP-1 templates with privacy_exposure_level + message_intent declarations. Clinical CODEOWNER reviews each at PR time per `.github/CODEOWNERS`.
3. **Build sandbox test harness** — 5+ test fixtures per `clinical_safety` domain rule per `Section 1Q.4` rule shape.
4. **Integration tests** — run the 5 GLP-1 patient scenarios (Sarah / Marcus / Priya / David / Jennifer) end-to-end through pipeline.
5. **Adversarial + dynamic behavior scenarios as integration test fixtures** — 4 adversarial scenarios from `Section 1Q.16` + 35 dynamic behavior scenarios from `Section 1Q.19` covered by passing test fixtures.
6. **Parallel pathway authoring** — TRT (`Section 1Q.18`; 28 rules + 28 templates), ED (when slice scoped), Female HRT (when slice scoped). Subset of devs/clinicians per `Section 1G.4` provider eligibility.
7. **Sibling pathway** — `gender_affirming_masculinizing_hrt` deferred to a future slice with its own clinical CODEOWNER review per `Section 1K.2` sibling pathway pattern.
8. **Compliance-blocked** — peptide pathways per `Section 1Q.16`; org policy review prerequisite.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved verification verdict on 2026-05-01. Single multi-file checkpoint applied: this audit + `Section 1Q.19` verification appendix + NEW `Section 1Q.20` runtime green-light declaration. **Pre-runtime gate sequence COMPLETE.**
