# Marketing System Pressure Test — verification of Section 1Q.21

**Date:** 2026-05-01
**Clinical CODEOWNER:** founder (board-certified MD)
**Ops CODEOWNER + Compliance CODEOWNER:** co-sign on Gap C dual-CODEOWNER rule
**Scope:** Pure verification pressure test of the just-landed Section 1Q.21 + 13 primitives + 25 invariants + 20 audit event types + state-machine campaign engine architecture (commit `bd035a6`). 7 test dimensions × 19 scenarios. NOT a discovery design pass. Identifies real failure modes under real-world conditions; foundational gaps fixed IN-PLACE in natural-home Sections (Section 1G.3 / Section 1Q.5 / Section 1Q.7) — NOT as appendix patches.
**Verdict:** **MOSTLY READY → READY after 3 foundational fixes land in this checkpoint.** 3 foundational gaps surfaced (contact info change rebound; jurisdiction freshness in pre-send revalidation; high-sensitivity tier_3 dual-CODEOWNER rule) — all addressable with small in-place patches in their right architectural homes (~55 lines net). 25 invariants hold for the OTHER 16+ scenarios. Marketing system ready for runtime authoring after fixes land.

---

# Part 1 — Verification methodology + scope

**Approach:** compressed per-scenario verification. Each scenario:
- Setup (chronological events + patient state)
- System behavior (which invariants/gates apply; how the architecture responds)
- Failure mode (if any)
- Classification: `no_issue` | `mvp_polish` | `foundational_gap`

Deeply expand ONLY where:
- A scenario fails (foundational_gap or borderline)
- A regression vs prior pressure tests appears
- A new architectural concern surfaces

**Architecture under test:**
- Section 1Q.21 Marketing Lifecycle + Growth Orchestration Suite (13 primitives + 25 invariants)
- Section 1Q.13 Module 15 marketing carve-out
- Section 1Q.17 privacy + communication governance (privacy_exposure_level + pathway_sensitivity + message_intent)
- Section 1Q.19 dynamic behavior gates (with 6 patches landed; pre-send revalidation, stale-pending-review, marketing exclusion windows, T1→T2→T3 cadence cap, cross-owner banner, clarification retry)
- Section 1Q.20 runtime green-light
- Section 1G.3 11-tier collision priority hierarchy
- Section 1Q.7 20 marketing audit event types

**Constraints honored (per user):**
- DO NOT introduce new primitives — kept 13
- DO NOT redesign system — invariants + primitives unchanged
- DO NOT expand scope — pressure test only
- Foundational gaps fixed IN-PLACE — Section 1G.3 / Section 1Q.5 / Section 1Q.7 (NOT as appendix to Section 1Q.21)

---

# Part 2 — Cat 1: Temporal chaos (3 scenarios)

## 1.1 — Multiple campaigns firing within 24-72h
**Setup:** Patient is GLP-1 active subscriber (refill_reorder campaign active) + has abandoned a supplement cart (abandoned_checkout campaign T1) + birthday today (birthday campaign) + provider-clarification rule fires (Module 4 clinical) + lab kit returned reminder (Module 5 clinical). 5 active firings within 6h.

**System behavior:**
- 11-tier collision priority hierarchy (Section 1G.3 Patch 7) sorts: Module 5 lab reminder (tier 4 = fulfillment) + Module 4 clinical clarification (tier 2 = required clinical next step) + GLP-1 refill_reorder (tier 5 = active treatment lifecycle) + abandoned_checkout (tier 7 = approved-not-purchased adjacent) + birthday (tier 11 = holiday/birthday)
- Tier 2 clinical fires immediately
- Tier 4 fulfillment fires (digest if ≥3 in 4h per Section 1G.3 digest rule — yes, 5 firings → digest fires)
- Tier 5 + 7 + 11 fold into the digest message (account_lifecycle template domain digest)
- Patient receives ONE digest message + the urgent clinical clarification
- All decisions audited: `campaign.step_dispatched`, `campaign.step_suppressed` (for any rate-limited firings), `campaign.step_delayed` (for any deferred to next window)

**Failure mode:** none — Invariants 18 (six-gate enforcement) + cadence caps + 11-tier priority all hold.
**Classification:** `no_issue`.

## 1.2 — Conversion mid-drip
**Setup:** Patient enrolled in lead_nurture campaign at T0; T1 email dispatched at T0; T2 email queued for T0+72h. Patient clicks T1 link at T0+2h, lands on intake page, completes intake at T0+5h. T2 email is still queued.

**System behavior:**
- Click on `/r/:tracking_id` writes `tracking_link.clicked` audit + `attribution_event{kind: click_through}` per Invariants 19/20
- Intake completion fires `lifecycle_event{type: 'lifecycle.intake_completed'}`
- Per Invariant 23, conversion event triggers transition: lead_nurture campaign exits with `exit_due_to_conversion` audit + `intake_completed_lifecycle` campaign enters via `entered_due_to_conversion` audit (paired)
- T2 email at T0+72h is now stale; per Invariants 1+23 it MUST be cancelled
- Two cancellation paths fire in concert:
  1. Proactive cancellation via `campaign.step_cancelled_due_to_conversion` audit (system searches outbound_jobs WHERE campaign_enrollment_id IN exited_enrollments AND scheduled_for > now)
  2. Pre-send revalidation safety net per Patch 2 of dynamic behavior catches any race
- `marketing_profile.lifecycle_stage` derived view recomputes (now `intake_completed`)
- `next_best_action` derived view recomputes
- Marketing exclusion 7d window opens during open clinical concern (Patch 4 of dynamic behavior)

**Failure mode:** none — full state-machine + conversion-driven transition + pre-send revalidation chain works.
**Classification:** `no_issue`.

## 1.3 — Resend scheduled then invalidated by conversion
**Setup:** abandoned_intake campaign step 1 dispatched at T0 with 'not_opened' branch declared (`within: 48h`, `next_step_id: 'step_1_resend'`). Patient doesn't open by T0+48h → resend fires at T0+48h with subject variant per Invariant 24. But meanwhile patient does intake at T0+50h via push notification (different channel). Resend just dispatched; patient now has new lifecycle stage.

**System behavior:**
- Pre-send revalidation per Patch 2 of dynamic behavior fires AT DISPATCH TIME (T0+48h) — at that moment, patient hasn't completed intake yet, so resend dispatches normally
- 2 hours later (T0+50h), intake_completed fires → conversion event → exits abandoned_intake → enters intake_completed_lifecycle
- The resend already dispatched — but the next queued step (step 2) is cancelled per Invariant 23
- Patient receives resend + then the intake_completed_lifecycle email (potentially in succession, but Section 1G.3 digest + cadence rules prevent burst)

**Failure mode:** the resend already dispatched 2h before conversion; patient may receive resend "we noticed you haven't engaged" message even though they're about to complete intake. Borderline confusing UX but not architecturally broken — the system CANNOT predict the future. Once conversion fires, future steps are cancelled.

**Classification:** `mvp_polish` (runtime detail — could add 30-min "settling window" before resend fires to allow late conversion to catch up; deferred to runtime fixture work, not foundational).

---

# Part 3 — Cat 2: Cross-pathway behavior (3 scenarios)

## 2.1 — GLP-1 + TRT + supplements overlap
**Setup:** Patient is GLP-1 active subscriber + TRT active subscriber (concurrent pathways per `1K.14` `pathway_codes[]`) + supplement subscription. 5 active campaigns at once: GLP-1 refill_reorder + GLP-1 onboarding week-12 education + TRT lab reminder + TRT refill_reorder + supplement reorder.

**System behavior:**
- Per cadence cap "max active campaigns per patient: 5" (Section 1Q.21 Part 8) — exactly at cap; new lead-nurture firing (e.g., for cross-sell) would be suppressed
- 11-tier priority sorts: TRT lab reminder (tier 4) > GLP-1 refill (tier 5) = TRT refill (tier 5) > supplement reorder (tier 6) > GLP-1 education (tier 14 module = `patient_education` domain runs in parallel per Module 13)
- All clinical/operational fire normally; supplement digest if ≥3 in 4h
- Per Invariant 25 (supplement vs clinical lifecycle distinct), supplement subscription_renewal does NOT trigger GLP-1 lifecycle changes; commerce conversion ≠ Rx_purchased
- Cross-channel dedup per Refinement 5 dispatches per `notification_channel_preferences`

**Failure mode:** none — multi-pathway concurrent enrollment works; cadence caps + priority hierarchy + Invariant 25 distinct lifecycles all hold.
**Classification:** `no_issue`.

## 2.2 — Cross-sell logic
**Setup:** GLP-1 active subscriber at month 4 (post-onboarding cooldown). Cross-sell rule fires for protein supplement (Section 1Q.21 Part 10 GLP-1 → protein supplement allowed cross-sell).

**System behavior:**
- Cross-sell campaign (tier 9) fires per Section 1Q.21 Part 10 allowed-cross-sells matrix
- `marketing_supplement_adjacent` consent (informational; tied to active subscription) gates the offer per Section 1K.11 extension
- Tier_3 (pathway_named) outside-secure allowed if patient has `pathway_named_outside_secure_comm` consent (Toggle 4) per Invariant 21 + GLP-1 sensitivity = moderate
- Templates declare `allowed_personalization_level: 'contextual'` — references "your weight-loss routine" with consent
- TRT patient → ED evaluation cross-sell: requires provider review per Invariant 25 sub-rule (clinical pathway cross-sell requires clinical review); cross_sell campaign creates `pending_patient_input_task` of type `clinical_pathway_evaluation_pending` per `1G.11`

**Failure mode:** none — provider-review-required gating works for clinical pathway cross-sells; consent-gated for tier_3.
**Classification:** `no_issue`.

## 2.3 — Pathway transitions
**Setup:** Patient enters `intake_started` lifecycle for GLP-1; completes intake at T0+3h; enters `intake_completed_lifecycle`; provider approves at T0+3d; enters `approved_not_purchased`; patient pays at T0+5d; enters `purchased`/`active_subscriber` lifecycle.

**System behavior:**
- 4 conversion events fire in sequence: intake_started → intake_completed → approved → purchased
- Each conversion fires paired `campaign.exit_due_to_conversion` + `campaign.entered_due_to_conversion` audits per Invariant 23
- `auto_exit_on_higher_lifecycle_state: true` cascades: intake_started_lifecycle exits when intake_completed fires; intake_completed_lifecycle exits when approved fires; approved_not_purchased campaign exits when purchase_completed fires
- Stale queued steps cancelled at every transition per Invariants 1+23
- `marketing_profile.lifecycle_stage` derived view recomputes 4 times
- `lifecycle_event` rows in `patient_timeline_events` for full reconstruction

**Failure mode:** none — full pathway state machine works.
**Classification:** `no_issue`.

---

# Part 4 — Cat 3: Sensitivity + privacy (3 scenarios)

## 3.1 — ED messaging during intake
**Setup:** Patient has started ED intake (extreme pathway_sensitivity). At T0+24h, abandoned_intake T1 email scheduled. Patient also has `marketing_personalization_with_phi` (Toggle 6) ON.

**System behavior:**
- Per Invariant 21 + Section 1Q.17 invariant 5, ED is `pathway_sensitivity: extreme` → tier_3 outside-secure BLOCKED regardless of consent
- T1 email renders at tier_2 max with privacy-safe campaign naming (`utm_campaign=mens_health_education` not `utm_campaign=erectile_dysfunction_treatment`)
- Marketing exclusion 7d window opens during open clinical concern (intake_started state) per Patch 4 of dynamic behavior — wait, intake_started isn't "open clinical concern" exactly...

**Subtle question:** does intake_started count as "open clinical concern" for Patch 4 marketing exclusion? Looking at Patch 4 spec: "7-day open-clinical-concern exclusion while any inbound_narrative_review of source_kind ∈ {patient_message, patient_email, intake_response_free_text} AND classification_status indicating clinical content is open". An intake-in-progress doesn't necessarily have an open `inbound_narrative_review` of clinical kind unless the patient submitted free-text concerns.

Per Section 1Q.21 Part 3 lead state model: `intake_started` state allows abandoned-intake T1/T2/T3 cadence (3 contacts cap). So abandoned-intake messaging IS allowed during intake_started state — that's the entire point.

Tier_3 still BLOCKED for extreme sensitivity. Tier_2 outside-secure works ("pick up where you left off — your consultation is ready").

**Failure mode:** none — extreme pathway sensitivity correctly blocks tier_3; abandoned-intake cadence runs as designed.
**Classification:** `no_issue`.

## 3.2 — TRT subscription state vs marketing
**Setup:** Patient is TRT active subscriber (extreme pathway sensitivity). Birthday campaign fires; supplement cross-sell campaign fires; subscription_retention campaign fires.

**System behavior:**
- All three campaigns at tier_2 max outside-secure per Invariant 21 (extreme pathway sensitivity + tier_3 BLOCKED)
- Birthday template renders generic ("Happy birthday from MAIN!" — no pathway naming)
- Cross-sell template uses neutral language ("we have new options for your wellness routine" — no "testosterone" outside-secure)
- subscription_retention uses tier_2 ("your subscription continues — manage in MAIN")
- UTM campaigns privacy-safe: `utm_campaign=birthday_celebration`, `utm_campaign=wellness_followup`, `utm_campaign=subscription_retention` — no pathway hints

**Failure mode:** none — extreme pathway sensitivity discipline correctly enforced.
**Classification:** `no_issue`.

## 3.3 — HRT pre vs post purchase messaging — borderline
**Setup:** Patient is approved-not-purchased for Female HRT (high pathway_sensitivity). conversion campaign T1 dispatches at T0+24h.

**System behavior:**
- HRT high sensitivity → tier_3 outside-secure ALLOWED only with explicit per-template opt-in at PR time per Invariant 5
- Looking at Section 1Q.21 Part 14 / Invariant 21: "explicit allowlist required for `high` / `extreme`; CI lint validates against template's `prohibited_claims` floor + privacy_exposure_level + outside_secure_render_strategy"
- BUT: current Section 1Q.5 doesn't EXPLICITLY require DUAL clinical CODEOWNER + compliance CODEOWNER co-sign for high-sensitivity tier_3 marketing templates
- A reviewer could approve a high-sensitivity tier_3 marketing template with single CODEOWNER if they don't catch the combination

**FAILURE MODE — Gap C:** PR review process for high-sensitivity tier_3 marketing templates is implicit, not explicit. CI lint should require DUAL clinical+compliance CODEOWNER co-sign + non-empty rationale_note when ALL of: `privacy_exposure_level: 3` + `outside_secure_render_strategy: 'mention_pathway_name_with_consent'` + `pathway_sensitivity_compatibility` includes `'high'` + `domain: 'marketing_lifecycle'`.

**Classification:** `foundational_gap` — Gap C.
**Fix lives in:** Section 1Q.5 template object shape CI lint discipline (Patch 4 below).

---

# Part 5 — Cat 4: Geography (2 scenarios)

## 4.1 — Pathway restricted in state — borderline
**Setup:** Patient signs up from California (TRT allowed). Patient enrolls in TRT pathway. T+30 days: patient moves to Texas (TRT restricted in Texas per `jurisdiction_profile`). Patient updates `patients.state` to TX. Active TRT campaigns are in flight.

**System behavior:**
- `patients.state = TX` mutation fires
- Per Invariant 18 step e (jurisdiction gate), next campaign step dispatch checks `jurisdiction_profile` against `campaign_definition.jurisdiction_eligibility`
- TRT campaign's jurisdiction_eligibility = `[CA, NY, FL, ...]` — TX NOT in list
- Next step dispatch: jurisdiction gate FAILS → step suppressed per Invariant 18 + audit `campaign.step_suppressed { suppression_reason: 'jurisdiction_blocked' }`
- BUT: queued outbound_jobs already in flight — what about those?

**Subtle question:** does pre-send revalidation per Patch 2 of dynamic behavior check jurisdiction freshness? Looking at the spec: "verify that the underlying rule firing's evidence_refs[] are still current; verify no contradicting newer assertion; verify provider decision freshness." Jurisdiction is NOT explicitly listed as a revalidation criterion.

**FAILURE MODE — Gap B:** queued outbound_jobs scheduled BEFORE the state change still dispatch with the OLD jurisdiction context. Patient now in TX receives TRT marketing email "your testosterone is ready to ship" which violates jurisdictional restriction.

**Classification:** `foundational_gap` — Gap B.
**Fix lives in:** Section 1G.3 send-policy pre-send revalidation extension (Patch 2 below) + Section 1Q.7 audit event `notification.cancelled_pre_send_jurisdiction_changed` (Patch 3 below).

## 4.2 — Ads driving traffic from restricted region
**Setup:** MAIN runs Google Ad for ED (allowed in CA only). Patient in TX clicks the ad and lands on `https://main.health/ed?utm_source=google&gclid=abc123`. Patient goes through signup; patient's IP geolocates to TX.

**System behavior:**
- Frontend signup flow detects patient state at `Section 1J.6` jurisdiction check
- ED pathway not available in TX → patient sees "ED not available in your state; here's what we can offer instead" + alternative pathway suggestions
- `attribution_event` row written with full UTM + gclid (per Invariants 19/21)
- Patient redirected to alternative pathway intake (e.g., GLP-1 if eligible)
- No ED campaign enrollment occurs because audience_query checks pathway_eligibility per state
- Google Ads conversion API V2+ would receive a `lead_blocked_jurisdiction` event (privacy-safe payload with no PHI; just opaque cohort ID + click ID)

**Failure mode:** none — frontend jurisdiction gate works; no marketing fires for unavailable pathway.
**Classification:** `no_issue`.

---

# Part 6 — Cat 5: Burnout + cadence (3 scenarios)

## 5.1 — Repeated no-opens
**Setup:** Patient opted into `marketing_email`. Receives 5 consecutive marketing emails over 30d, none opened. Day 35: next marketing email scheduled.

**System behavior:**
- `marketing_profile.open_count_30d = 0` for last 30d
- `audit_events.campaign.delivery_outcome` shows 5 delivered, 0 opened over 30d period
- Burnout signal threshold: 5+ consecutive no-opens over 30d → fatigue suppression for 30d (per Section 1Q.21 Part 8)
- Day 35 marketing email: SUPPRESSED with `campaign.fatigue_suppressed { signal_type: 'consecutive_no_opens', threshold_breached_value: {count: 5, window: 30d}, suppress_until_at: 'day_65' }`
- Other intent classes (clinical, safety, transactional_critical) NOT suppressed per Invariant 18

**Failure mode:** none — fatigue suppression works as designed.
**Classification:** `no_issue`.

## 5.2 — Multiple campaigns active
**Setup:** Patient is GLP-1 active subscriber with 5 active campaigns concurrent (cadence cap reached). New abandoned_supplement_cart campaign tries to enroll.

**System behavior:**
- Cadence cap "max active campaigns per patient: 5" hits
- New enrollment attempt: `campaign.enrollment_attempt_blocked { block_reason_code: 'max_active_campaigns_cap_reached' }` per audit event type
- audience_query matched but eligibility failed; auditable for analytics governance

**Failure mode:** none — cadence cap blocks new enrollment cleanly.
**Classification:** `no_issue`.

## 5.3 — Resend behavior
**Setup:** abandoned_checkout campaign step 1 dispatched at T0 with `not_opened` branch (`within: 48h`, action: resend with subject variant). Patient doesn't open by T0+48h.

**System behavior:**
- Resend fires per Invariant 24 (max ONE per step; subject must differ)
- Audit `campaign.resend_scheduled { resend_template_key: 'tmpl.marketing.abandoned_checkout_t1_resend_v1', resend_reason: 'not_opened' }`
- Subject deterministic variant declared on template (e.g., original "Your weight-loss kit is waiting" → resend "Quick question about your weight-loss kit")
- Same body content; same `privacy_exposure_level`; same `pathway_sensitivity_compatibility`
- If patient ALSO has cadence cap reached: `campaign.resend_suppressed { suppression_reason: 'cadence_cap_marketing_weekly' }`
- For `clinical` / `safety` / `billing` / `operational` intent templates: resend declarations FORBIDDEN per Invariant 24; CI lint enforces

**Failure mode:** none — resend logic with subject variant + suppression cascade works.
**Classification:** `no_issue`.

---

# Part 7 — Cat 6: Attribution flow (2 scenarios)

## 6.1 — Click → intake → purchase attribution chain
**Setup:** Patient clicks Google Ad on Day 1; UTM `utm_source=google&utm_medium=cpc&utm_campaign=metabolic_program&gclid=abc`. Lands on intake page; `attribution_event` row #1 created with first_touch + click IDs.

Day 2: patient clicks email link from welcome email; `tracking_link.clicked` audit + `attribution_event` row #2 (interaction).

Day 3: patient completes intake; intake_completed conversion → `campaign_conversion_event` writes `attribution_chain: [event_1, event_2]`.

Day 5: patient purchases; purchase_completed conversion → `campaign_conversion_event` with `attribution_chain: [event_1, event_2, event_3 (intake_completed_lifecycle conversion)]`.

**System behavior:**
- All attribution_event rows append-only per primitive #11
- attribution_chain populated at conversion time per Invariant 19
- First-touch (min(recorded_at)) = Day 1 Google Ad
- Last-touch (max(recorded_at)) = Day 2 email click
- Multi-touch chain visible for LTV/CAC analysis
- gclid stored on attribution_event #1 enables Google Ads Enhanced Conversions API V2+ integration (with privacy-safe payload — no PHI; only opaque cohort + click ID echoed)

**Failure mode:** none — full attribution chain captured per Invariant 19.
**Classification:** `no_issue`.

## 6.2 — Multi-touch campaign attribution
**Setup:** Same patient over 60-day window receives:
- Day 1: Google Ad click → attribution_event #1
- Day 5: Email open + click on welcome → tracking_link.clicked + attribution_event #2
- Day 12: SMS click on abandoned_intake reminder → attribution_event #3
- Day 30: Email click on approved_not_purchased reminder → attribution_event #4
- Day 32: Purchase → campaign_conversion_event with attribution_chain[4 events]

**System behavior:**
- All 4 attribution_events captured (multi-touch chain)
- Conversion event records full chain
- Analytics queries:
  - First-touch attribution: utm_source=google (Day 1)
  - Last-touch attribution: utm_source=email (Day 30)
  - Multi-touch model (V1.5+): equal-weight or position-based attribution across all 4 touches

**Failure mode:** none — multi-touch chain works as designed per Invariant 19.
**Classification:** `no_issue`.

---

# Part 8 — Cat 7: User changes + adverse reactions (5 scenarios)

## 7.1 — User changes email — FOUNDATIONAL GAP
**Setup:** Patient is GLP-1 active subscriber. Tuesday at 2pm: patient updates email via account settings from `old@example.com` → `new@example.com`. Tuesday at 10am (4h before): system queued an outbound_job for Wednesday at 9am to dispatch a marketing email targeting `old@example.com`.

**System behavior:**
- patients.email mutation fires
- Wednesday 9am: outbound_jobs row dispatches → email sent to `old@example.com`
- Pre-send revalidation per Patch 2 of dynamic behavior checks: evidence freshness ✓; contradicting assertion ✗; provider decision freshness ✗ — all PASS because email change isn't classified as "stale evidence"
- Provider webhook returns `bounced_hard` (old email no longer monitored or invalid)
- `audit_events.campaign.delivery_outcome { provider_event_kind: 'bounced_hard' }` writes
- `marketing_profile.bounce_count_lifetime` increments
- BUT: the message was meant for the patient; it dispatched to the WRONG email
- Patient on Tuesday updates email expecting communication to flow to new email; instead it goes to old email → patient confusion + missed marketing engagement

**FAILURE MODE — Gap A:** contact info change does NOT propagate to queued outbound_jobs. Pre-send revalidation per Patch 2 of dynamic behavior was not designed to catch contact-target staleness.

**Classification:** `foundational_gap` — Gap A.
**Fix lives in:** Section 1G.3 send-policy pre-send revalidation extension (Patch 2 below) + Section 1Q.7 audit event `notification.cancelled_pre_send_contact_info_changed` + `patient_contact_info_changed` (Patch 3 below).

## 7.2 — User changes phone — FOUNDATIONAL GAP (same root cause as 7.1)
**Setup:** Patient updates phone from `+15551234567` → `+15559876543`. Queued SMS outbound_job for old phone.

**System behavior:** same as 7.1 — pre-send revalidation doesn't check contact-target freshness; SMS dispatches to OLD phone (which may belong to someone else now). PRIVACY VIOLATION risk if old phone reassigned.

**FAILURE MODE — Gap A (same as 7.1):** identical fix applies.

**Classification:** `foundational_gap` — Gap A.
**Fix:** same as 7.1 (Patch 2 + Patch 3).

## 7.3 — User changes name (legal vs preferred)
**Setup:** Patient updates `preferred_name` from `Sarah` → `Sam`. Templates render with `preferred_name`.

**System behavior:**
- `personalization_profile.preferred_name = 'Sam'` mutation
- Next template render uses `preferred_name = 'Sam'` per Section 1Q.21 Part 18 5-level personalization taxonomy
- Falls back to `first_name` if `preferred_name` null (degrades gracefully per Part 18 Discipline rule)
- Legal name unchanged; clinical communications use legal name; marketing uses preferred_name

**Failure mode:** none — graceful personalization degradation works.
**Classification:** `no_issue`.

## 7.4 — User changes address — FOUNDATIONAL GAP
**Setup:** Patient (GLP-1 active subscriber + TRT active subscriber) moves from California → Texas. Updates `patients.shipping_address` via account settings. TRT pathway not available in Texas per `jurisdiction_profile`. Several TRT marketing campaigns active with queued outbound_jobs.

**System behavior:**
- patients.state = 'TX' + shipping_address mutation
- Next campaign step DISPATCH evaluates jurisdiction gate per Invariant 18 step e → TRT campaigns suppressed for new state
- BUT: queued outbound_jobs scheduled BEFORE the state change → pre-send revalidation per Patch 2 doesn't check jurisdiction freshness → dispatches old TRT marketing to TX-based patient
- Privacy violation + jurisdictional violation

**FAILURE MODE — Gap B:** pre-send revalidation doesn't check `jurisdiction_profile` freshness. (This is the SAME gap surfaced in Cat 4.1.)

**Classification:** `foundational_gap` — Gap B.
**Fix:** Section 1G.3 send-policy pre-send revalidation extension to include jurisdiction freshness check (Patch 2 below) + Section 1Q.7 audit event `notification.cancelled_pre_send_jurisdiction_changed` (Patch 3 below).

Also note: shipping_address change for active subscribers also needs to update fulfillment downstream (e.g., next medication shipment goes to new address). This is Section 1G.5 fulfillment exception territory, NOT marketing — flagged for runtime fixture.

## 7.5 — Bad GLP-1 reaction (safety event during marketing window)
**Setup:** Patient GLP-1 active subscriber. T0: patient sends portal message: "I'm having severe abdominal pain and vomiting. Could this be pancreatitis?" Triggers `safety_window_opened` event per Section 1G.3 emergency orchestration. T0+2h: scheduled marketing reorder reminder dispatches.

**System behavior:**
- Safety window opens for 24h+ per Section 1G.3 step 5 emergency orchestration
- Marketing exclusion: ALL marketing intent suppressed during active safety window per Patch 4 of dynamic behavior + Invariant 18 step d
- T0+2h marketing reorder reminder: pre-send revalidation per Patch 2 evaluates active safety window state → step suppressed with `campaign.step_suppressed { suppression_reason: 'safety_window_active' }`
- Audit chain: `safety.phone_outreach_initiated` + `notification.suppressed_during_safety_window` for the marketing
- T0+24h: safety window closes per provider acknowledgment OR auto-timeout
- Marketing exclusion 7d still active for "open clinical concern" until provider closes the inbound_narrative_review per Patch 4 of dynamic behavior
- Patient receives ONE urgent SMS-vague + provider phone outreach within SLA

**Failure mode:** none — safety window suppresses marketing as designed.
**Classification:** `no_issue`.

---

# Part 9 — 25 invariant validation

| # | Invariant | Status |
|---|---|---|
| 1 | Pre-send revalidation gate at dispatch time | HOLDS for evidence/assertion/decision freshness; **GAP for contact-info + jurisdiction freshness** (fixed by Patch 2) |
| 2 | Provider decisions auto-flag stale_pending_review | HOLDS |
| 3 | Marketing exclusion windows (30d post-denial / 7d post-deferral / 7d open-clinical-concern / 24h+ safety-window) | HOLDS |
| 4 | T1→T2→T3 re-engagement cadence caps at 3 contacts | HOLDS |
| 5 | denied_with_contraindication excluded from automated marketing | HOLDS |
| 6 | Cross-owner clinical context banner bidirectional | HOLDS |
| 7 | Clarification retry limits N=3/N=2/N=1 | HOLDS |
| 8 | transactional_critical bypasses suppression for billing/account/safety only | HOLDS |
| 9 | Aggregate stats feed quality monitoring | HOLDS |
| 10 | Audit row required on every dispatch decision | HOLDS |
| 11 | Wrong-channel safety capture works uniformly | HOLDS |
| 12 | Patient-frustration mitigation at retry N-1 | HOLDS |
| 13 | Provider authority preserved | HOLDS |
| 14 | Jurisdiction respect at every step | HOLDS at audience_query + step dispatch; **GAP for pre-send revalidation jurisdiction freshness** (fixed by Patch 2) |
| 15 | Pathway sensitivity cap at outside-secure ceiling | HOLDS |
| 16 | marketing_profile not-junk-drawer | HOLDS |
| 17 | Marketing lifecycle flags are DERIVED | HOLDS |
| 18 | SIX-gate enforcement on all campaign execution | HOLDS for normal flow; **partial gap for stale outbound_jobs queued before contact-info or jurisdiction change** (fixed by Patch 2) |
| 19 | System is the SOURCE OF TRUTH for attribution | HOLDS |
| 20 | All marketing outbound links MUST be tracking-wrapped | HOLDS |
| 21 | Privacy-safe URL/UTM/external-platform discipline | HOLDS at template render + UTM lint; **GAP for high-sensitivity tier_3 marketing template dual-CODEOWNER co-sign** (fixed by Patch 4) |
| 22 | Campaigns are STATE MACHINES, not linear blasts | HOLDS |
| 23 | Conversion events MUST trigger transitions | HOLDS |
| 24 | Resend logic discipline (max ONE; subject must differ; never clinical/safety/billing) | HOLDS |
| 25 | Supplement vs clinical pathway lifecycles MUST NOT collapse | HOLDS |

**22/25 fully hold; 3 invariants have gaps that the 3 in-place fixes close.**

---

# Part 10 — Final verdict

**Verdict: MOSTLY READY → READY after 3 in-place foundational fixes land in this checkpoint.**

| Metric | Result |
|---|---|
| Scenarios traced | 19 |
| Foundational gaps surfaced | **3** (Gap A: contact info change; Gap B: jurisdiction freshness; Gap C: dual-CODEOWNER co-sign) |
| Foundational gaps fixed by in-place patches | **3 / 3** |
| Regressions introduced vs prior pressure tests | 0 |
| `mvp_polish` notes (deferred to runtime) | 1 (Cat 1.3 — 30-min settling window before resend; runtime fixture) |
| Invariants unchanged | 25 |
| New primitives introduced | 0 |
| Architecture redesign | none |

## 3 foundational gaps + fixes

### Gap A — Contact info change does NOT propagate to queued outbound_jobs
**Affected scenarios:** Cat 7.1 (email change), 7.2 (phone change)
**Failure:** Patient updates email/phone Tuesday → message queued Tuesday for Wednesday dispatch → message goes to OLD contact target Wednesday because pre-send revalidation per Patch 2 of dynamic behavior was designed for evidence/assertion/decision freshness, not contact-target staleness.
**Fix lives in:** Section 1G.3 send-policy pre-send revalidation extension + Section 1Q.7 audit shapes (Patches 2+3 below).

### Gap B — Pre-send revalidation does NOT check jurisdiction_profile freshness
**Affected scenarios:** Cat 4.1 (TRT in Texas after move), 7.4 (CA→TX move)
**Failure:** Patient moves to state where pathway is restricted → queued marketing email still dispatches with old jurisdiction context → privacy + jurisdictional violation.
**Fix lives in:** Section 1G.3 send-policy pre-send revalidation extension + Section 1Q.7 audit shapes (Patches 2+3 below).

### Gap C — High-sensitivity tier_3 marketing template lacks explicit dual-CODEOWNER co-sign requirement
**Affected scenarios:** Cat 3.3 (HRT pre-purchase tier_3 marketing)
**Failure:** HRT (high sensitivity) tier_3 outside-secure marketing template could ship with single-CODEOWNER approval if reviewer doesn't catch the high-sensitivity-tier_3 combination. Section 1Q.5 says "explicit allowlist required for high/extreme" but doesn't ENFORCE dual clinical+compliance CODEOWNER co-sign.
**Fix lives in:** Section 1Q.5 template object shape CI lint discipline (Patch 4 below).

## In-place fixes (in their right architectural homes; NOT appendix patches)

- **Patch 2 (Section 1G.3):** extend pre-send revalidation gate with contact-info + jurisdiction freshness checks; proactive rebind/cancel of queued outbound_jobs when contact info changes; ~30 lines net.
- **Patch 3 (Section 1Q.7):** 3 new audit event types (`notification.cancelled_pre_send_contact_info_changed` + `notification.cancelled_pre_send_jurisdiction_changed` + `patient_contact_info_changed`); ~15 lines net.
- **Patch 4 (Section 1Q.5):** dual clinical+compliance CODEOWNER co-sign rule for high-sensitivity tier_3 marketing templates; CI lint enforces; ~10 lines net.

Total: ~55 lines net of in-place foundational fixes across 3 natural-home Sections.

---

# Part 11 — Implementation readiness

After patches land:
- Marketing system: **READY** for runtime authoring
- 25 invariants hold (after 3 in-place fixes)
- 13 primitives unchanged
- 20 audit event types extended to 23 (with 3 new from this checkpoint)
- All 3 foundational gaps closed in their right architectural homes (per user's discipline — NOT appendix patches)

Code-as-config implementation can proceed for `repo/campaigns/`, `repo/templates/marketing/`, `repo/offers/`, `repo/product-adjacency/`, provider adapter layer, attribution layer, analytics layer per `Section 1Q.20` runtime green-light.

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved on 2026-05-01. Single multi-file checkpoint applied: this audit + 3 in-place patches in Section 1G.3 / Section 1Q.5 / Section 1Q.7. **No appendix to Section 1Q.21.** Foundational fixes live in their right architectural homes per the user's discipline.
