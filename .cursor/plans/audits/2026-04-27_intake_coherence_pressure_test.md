# Intake Architecture Coherence Pressure Test — 2026-04-27

**Audit type:** adversarial pressure test of intake structure, information saving, database routing, re-entry, and client updates.

**Scope of system map at time of audit:** `system_map_three_layers_60706286.plan.md` at commit `95067b5` (5,735 lines), containing the Stage 0 / 0.5 / 1 / 2 / 3 model, nine named re-entry modes (A–I), Stage 2 forward-only commit per `1J.10`, pre-account fingerprint discipline per `1J.6`, L_stale → identity_uplift_stale_refresh per `1J.4`, gate-staging table + re-entry re-check discipline in `1K.7`, Stage 0.5 cookie-scoped consent + atomic promotion per `1K.11`, stage-agnostic writes for Modes E/F per `1K.6`, and `patient_action_items` as the universal re-entry surface per `1G.11.1`.

**Audit method:** parallel deep-read of Section 1G.11, Section 1J (1J.1–1J.11), Section 1K (1K.0–1K.18), Section 1L (orienting), Section 1M (entire), Section 1O (entire), Section 1H.4 (acquisition boundary). Cross-checked field-level destinations, source-of-truth claims, write-API contracts, version-pin discipline, and re-entry stage transitions for coherence under multi-pathway, longitudinal-care, and patient-update load.

**Posture:** adversarial — looking for contradictions, ambiguities, dual-claim source-of-truth, undefined lifecycle moments, and post-Stage-3 client-update failure modes that would compound at $500M longitudinal-care scale (the differentiator from "intake → Rx" Hims).

**Status:** findings adopted; patches authorized; this file is the durable record of the audit and the planned patch set.

---

## A. Verdict — mostly coherent with 4 high-impact gaps

The architecture is genuinely strong: source-of-truth boundaries are clean, the stage model + 9 re-entry modes cover most failure paths, version pin + append-only discipline are uniformly required, and the engine layering (resolver / write API / domain APIs) prevents the second-clinical-engine drift that kills systems at Hims scale. **What's not yet coherent end-to-end** is mostly around patient-initiated post-Stage-3 mutations (the parts that distinguish you from "intake → Rx" Hims and let you actually run *longitudinal* care at $500M scale). The four high-impact gaps:

1. **Patient-initiated update to a static clinical fact is unmodeled.** Modes E (provider-triggered) and F (system-triggered) cover stage-agnostic writes, but there is no Mode for "patient walks into the app and adds a new allergy / says they're now pregnant / corrects a wrong answer." The system has the machinery; it just hasn't been named.
2. **Allergies / conditions / medications source-of-truth is dual-claimed.** Layer 1 says they live on `patients` chart fields. `1K.5` says `intake_response` is the SoT and `patient_clinical_assertion_current` (a VIEW) is the read path. Both can't be true without an explicit projection rule.
3. **`care_program` lifecycle has no stage anchor.** Stages 1/2/3 are committed, but the moment the `care_program` row is minted (and what `intake_session.care_program_id` it links to) is unspecified. This breaks `patient_state_observations.care_program_id` for intake-time writes (which happen *before* the care_program exists).
4. **Multi-pathway sessions in the stage model are under-specified.** `1K.6` adds modules to the same session for cross-sell; `1K.13` Stage 2 forward-only commit and `identity_uplift_snapshot` are per-session. When pathway A and pathway B in the same session have *different* L-gates or *different* contraindication outcomes, the stage transitions are ambiguous.

Plus several smaller coherence gaps detailed in §E. None require a rewrite — all integrate into existing sections.

---

## B. Intake routing matrix (where every answer category lands)

For every answer category an intake might capture, here's where it should write per the current plan, and which table is **authoritative** vs **projection**:

| Answer category | Authoritative table | Projection / read view | Write API | Stage allowed |
|---|---|---|---|---|
| **Marketing intent** (why are you here, goal band) | `1H.4` acquisition row + session cookie | `1H.6 / 1H.7` aggregates | `recordAcquisitionContext` (implicit; `1H.4`) | 0 |
| **Pre-clinical personalization** (education choice) | `1H.4` acquisition row | — | same | 0 |
| **Jurisdiction (state of residence)** pre-account | session row + pre-account fingerprint per `1J.6` | — | session-cookie write | 0.5 |
| **DOB** pre-account (eligibility only) | session row + pre-account fingerprint | — | session-cookie write | 0.5 |
| **Telehealth + Terms + Privacy bundle consent** pre-account | session row (cookie-scoped) → atomically promoted to `patient_consents` at Stage 1 | — | `recordPatientConsent`-equivalent (after promotion) | 0.5 → 1 |
| **Email / password / SSO** | `auth` ↔ `patients` link table | — | account-creation flow | 0.5 → 1 |
| **Account-creation T&C + Privacy** | `patient_consents` (separate row from telehealth bundle) | — | `recordPatientConsent` | 1 |
| **Static clinical facts** (allergies, conditions, surgeries, family history, substance use, contraindication answers) | `intake_response` per `1K.5` (append-only, supersession via `supersedes_response_id`) | `patient_clinical_assertion_current` view (read for `1J.10` preflight); see **gap E.2** for `patients` chart-field collision | `recordIntakeResponse` per `1K.4` / `1K.14` | 1 (and stage-agnostic writes per Modes E/F) |
| **Trackable measurements** (weight, BMI-derived, BP, symptom scores, ED IIEF-5, ADAM/AMS, dose tolerance, side-effect severity, sleep, mood, libido) | `patient_state_observations` per `1M.3` (append-only, multi-row per `field_name`) | `1G.8` provider workspace + `1L.16` continuation gating reads + `1H.7` aggregates | `recordPatientStateObservation` per `1M.5` | 1 (first row); appended at Modes E / F / Stage 3 onward |
| **Derived values** (BMI, eligibility-smart-loading score) | If trackable → `patient_state_observations` with `source_type=system`; if scoring → `intake_derived_score` row per `1K.9` | provider packet pulls from stored rows, not recomputation | resolver-internal derive + write | 1 |
| **Pathway selection** | `intake_sessions.pathway_codes[]` + `intake_sessions.metadata.selected_intent` per `1K.14` | `intake_pathway_selection` (deferred concept) | `intake_sessions` upsert | 0.5 (provisional) → 1 (committed) |
| **Treatment-plan candidate** (recommendation) | `treatment_plan_candidate` per `1K.14` (dedicated table, required pre-program-#2) | `1K.12` packet renders from this | `recordTreatmentPlanCandidate`-equivalent | 1 |
| **Lab order intent** (intake routes patient into lab module) | `lab_orders` per `Section 1L` Scenario A path (intake never INSERTs `lab_orders` directly) | `patient_diagnostic_reports` for results | `Section 1L` Scenario A path | 1 (intake routes; commerce or staff workflow creates the `lab_orders` row) |
| **Today-charge payment** (kit fee, supplements) | `commerce_orders` per `1I.1` | — | `Section 1I` capture | 1 |
| **If-prescribed payment authorization** | `1I` `authorization_for_future_charge` per `1K.11` + `1I.2` | `patient_consents.subscription_auto_renew` for renewal terms | `Section 1I` | 1 |
| **Subscription pre-auth / stored payment method** | `commerce_subscriptions` + `patient_consents.subscription_auto_renew` | — | `Section 1I` | 1 |
| **Eligibility blocker outcomes** (state, age, contraindication) | Stage 0.5 → `intake_sessions.closed_eligibility_blocker_code` (no `patients` row); Stage 1 → `intake_response` rows + `intake_eligibility_blocker` event on `patient_timeline_events` + `intake_sessions.closed_reason_code` per `1K.7` / `1K.12` | `1H.7` reporting | engine emits | 0.5 / 1 |
| **Soft safety flags** (BMI band, history-needs-clarification) | `intake_safety_flag` typed payload per `1K.7` (on `patient_timeline_events` + provider packet) | `1K.12` packet rendering | engine emits | 1 |
| **Legal name + shipping address** | `patients` chart fields (locked post-L3 per `1J.3`); audit-promoted at Stage 2 | — | `1J.10`-preflighted chart-update path | 2 |
| **SSN last-4 / photo ID / selfie biometric** | `patient_identity_verifications` per `1J / 1J.4` (minimal target shape per `1O.4.1`); files in object storage via `patient_document_routing` | `loadPatientCaseSafetySnapshot` reads identity via `Section 1O` | `routePatientDocument` per `1O.5` (identity flow) | 2 |
| **Insurance card** | insurance-eligibility table (minimal shape per `1O.4.2`); files via `patient_document_routing` | `loadPatientCaseSafetySnapshot` (when eligibility is required) | `routePatientDocument` (insurance flow) | 1 or 2 (pathway-dependent) |
| **Phone / SMS marketing opt-in** | `patients` (phone) + `patient_consents.sms_marketing_opt_in` | — | chart-update + `recordPatientConsent` | 2 |
| **Provider decision** (approve / deny / pause) | `clinical_visits` with `decision_outcome_reason` per `1K.12` | timeline event `intake_submission_for_provider` → followed by visit decision | provider mutation through `1J.10` preflight | 2 → 3 |
| **Rx-state mutations** (create / approve / dispense / refill) | `treatment_orders` / `treatment_items` per `Section 1G / 1I` | — | provider mutation through `1J.10` preflight | 3 |
| **Care program lifecycle** | `care_program` per `Section 1G` (intake **does not create** per `1K.0`) | — | `Section 1G` provider routing creates | 3 — see **gap E.3** for the missing stage anchor |
| **Patient action items** | `patient_action_items` per `1G.11.2` | `listPatientActionItems` query | `recordPatientActionItem` | any stage; emitters per `1G.11.4` |
| **Pending patient input** (BP needed, ID needed, lab needed) | `patient_action_items` row of type `pending_patient_input` with extended fields per `1G.11.3` | `loadPatientCaseSafetySnapshot` consumes blocking state | `recordPatientActionItem` (pending_patient_input variant) + `resolvePendingPatientInputTask` on satisfy | any stage with a blocker |
| **Audit (every write)** | `audit_events` per Intent | — | `logAuditEvent` (returns failure for high-risk paths per `1J.10`) | every stage |
| **Narrative milestones** | `patient_timeline_events` (pointers only, never values) | — | per-domain `recordTimelineEvent`-equivalent | every stage |

---

## C. Re-entry matrix (the 9 modes pressure-tested against intake saving)

| Mode | Same vs new session | What can be edited | What is locked | Re-checks fired | Writes to `patient_action_items` | Writes to `patient_timeline_events` | Writes to memory tables | Creates `intake_sessions` row |
|---|---|---|---|---|---|---|---|---|
| **A — Existing account → new pathway** | NEW `intake_sessions` row linked to existing `patients.id` | All Stage 1 modules for the new pathway; consents that are stale | Globals carry forward per `1K.5` (re-confirm affordance only); prior pathway L is reused if sufficient | Jurisdiction, age, consent freshness, identity L-level (all four per `1K.7`) | YES — initiated from `incomplete_visit` or pathway-launch action item | YES — `intake.session.started` + per-module milestones | `intake_response` for new pathway-specific modules; `patient_state_observations` for new trackables; `patient_consents` if re-consent fires | YES |
| **B — Mid-Stage-1 resume** | SAME `intake_sessions` row | Continue from `last_resolver_step_id`; no edit of already-answered rows except via `1K.5` supersession | Hard gates re-evaluated per `1K.7` engine-version-pin; if a new gate now blocks, session pauses | Hard gates re-eval (not the full 4-class re-entry per `1K.7` since same session) | NO new item — opens the existing `incomplete_visit` action item | YES — per-module `intake.module.completed` if narrative-meaningful | New `intake_response` rows per modules that haven't been answered | NO new row |
| **C — Mid-Stage-2 resume** | SAME `intake_sessions` row in `identity_uplift_in_progress` or `_pending_retry` | ONLY the next required identity artifact (SSN / ID / selfie); Stage 1 answers locked per forward-only commit per `1J.10` | All Stage 1 answers; `identity_uplift_snapshot` pointer; pre-assigned provider per `1G.7` | None new (Stage 1 already gated; identity steps are forward-only) | NO new item; resumes from the `pending_patient_input` task already open for the artifact | YES — per-artifact submission events per `1J.10` | `patient_identity_verifications` rows; `patient_document_routing` manifests; updates to `patients.metadata.identity_confidence` only when all required artifacts pass | NO new row |
| **D — Ineligible reopen** | SAME `intake_sessions` row transitioning `closed_ineligible` → `in_progress` | Resumes at `last_resolver_step_id` after the prior blocking gate now passes | None new | All four classes per `1K.7` (since this is a re-entry across a day boundary) | Resolves the `ineligible_reopen_eligible` action item; opens `incomplete_visit` | YES — `intake.session.reopen_eligible` per `1K.13` | New `intake_response` rows per remaining modules | NO new row |
| **E — Provider-triggered follow-up** (`clinical_required`) | NO `intake_sessions` row — stage-agnostic write | The single follow-up question | N/A | N/A | NO action item is created (the `clinical_required` turn IS the surface) | YES — typed event per write | `intake_response` (static facts) and/or `patient_state_observations` (trackables); see **gap E.7** for `intake_session_id` requirement on writes | NO |
| **F — System-triggered check-in** (cron) | NO `intake_sessions` row — stage-agnostic write | The check-in prompt's questions | N/A | N/A | NO action item (the prompt is the surface; per `1G.3`) | YES — `intake.checkin.requested` + per-write events | Same as E | NO |
| **G — Identity L_stale refresh** | SAME `intake_sessions` (or scoped refresh session per `1J.4`); status `identity_uplift_stale_refresh` | ONLY the stale identity artifact(s) | Stage 1 answers stay locked; unrelated still-valid artifacts not re-asked; L never decays | Consent freshness (re-check); SMS/research consents independent | YES — `identity_verification_required` / `pending_patient_input` for the stale artifact | YES — per-artifact refresh event | New `patient_identity_verifications` row chained via `supersedes_verification_id` per `1J.4` | Conditional (per `1J.4` text — same session if mid-flow, scoped session if outside active intake) |
| **H — Post-denial retry on same pathway** | NEW `intake_sessions` row with `prior_closed_session_id` pointer | All Stage 1 modules (clinical history reused per `1K.5`) | None | All four classes per `1K.7`; `intake_repeat_attempt` event fires per `1K.13` abuse rules; **`intake_inconsistency_flag`** if any answer flips — see **gap E.6** for storage destination | YES — `incomplete_visit` and (if flagged) provider-side flag in `1K.12` packet | YES — `intake.repeat_attempt`, `intake.inconsistency_flag` (see gap) | New `intake_response` rows; superseded answers preserved per `1K.5`; provider's `1K.12` packet shows prior + current side-by-side | YES |
| **I — Stage 2 cancelled → new attempt** | NEW `intake_sessions` row with `prior_cancelled_session_id` pointer; prior session terminal at `identity_uplift_cancelled` | Stage 1 reused per `patient_clinical_assertion_current`; new pathway selection | Prior cancelled session is terminal and not reopenable | All four classes per `1K.7` | YES — `incomplete_visit` opens on the new session | YES — `intake.session.cancelled` (terminal) + `intake.session.started` (new) | New session reuses prior `intake_response` via reuse policy; new Stage 2 fires fresh forward-only commit | YES |

**Re-entry coherence findings:**

- Modes A, D, H, I all correctly demand the four-class re-check (`1K.7`). Coherent.
- Mode B's "engine-version-pin re-eval only" is correct for intra-day resume but **silently relies on the resolver caching the pin per request**, which is a runtime concern not stated in the schema.
- Mode C's snapshot preservation is enforced both at the resolver (`1J.10` Stage 2 forward-only commit) and at the safety preflight (`intake_session_forward_only_status` flag on the snapshot). Coherent — defense in depth.
- Mode G's "same session OR scoped refresh session depending on trigger" is the only mode where `intake_sessions` row creation is **conditional and ambiguous** — see gap E.5.
- Modes E and F's "stage-agnostic write through resolver, NO new `intake_sessions`" is **architecturally clean but creates an `intake_session_id` write-contract conflict** — see gap E.7.

---

## D. Client update matrix (post-Stage-3, mutable signals)

This is where the architecture is **least specified** and where the most risk lives — the longitudinal-care thesis depends on this matrix being clean.

| Update type | Patient-initiated path? | Provider-initiated path? | Authoritative destination | What gets re-checked | Risk to historical decisions |
|---|---|---|---|---|---|
| **Updated state of residence** | Implicit through chart settings (per `1J.3` "shipping when not part of jurisdiction lock"); **no explicit re-trigger of next-mutation jurisdiction re-check** | YES via Mode E (provider clarification) | `patients.state_of_residence`; `1G.4.1` jurisdiction routing reads | `1L.22` says lab review re-routes on jurisdiction change between order and review; `1K.7` re-entry re-check ONLY fires on next intake re-entry — between re-entries, a state change does not retroactively block in-flight Rx mutations | **HIGH** — state moved post-approval, no automatic jurisdiction re-block on next refill mutation. See **gap E.8**. |
| **New allergy** | **NO documented path** — see **gap E.1** (no patient-initiated Mode for static clinical fact updates) | YES via Mode E (provider clarification per `1K.5`) | `intake_response` append (with `supersedes_response_id` for refinements); `patient_clinical_assertion_current` view picks up latest | `1G.2` active asserts at next therapy mutation read the new allergy via `patient_clinical_assertion_current` | LOW if `patient_clinical_assertion_current` is correctly consulted by `1G.2`; HIGH if `patients.allergies` is denormalized and not refreshed (gap E.2) |
| **New medication** (started by outside prescriber) | NO documented path | YES via Mode E | `intake_response` append; `patient_clinical_assertion_current` view | `1G.2` interaction asserts at next therapy mutation | Same as allergy: depends on gap E.2 resolution |
| **New medical history fact** (e.g., new diagnosis, recent surgery) | NO documented path | YES via Mode E | `intake_response` append | `1G.2` contraindication asserts | Same as allergy |
| **Pregnancy / lactation status change** | **NO documented path** — see **gap E.4** (this is a critical mutable fact not addressed) | YES via Mode E or F (system check-in if scheduled) | Should be `intake_response` (static fact at a point-in-time), but pregnancy status is *dynamic*; arguably also needs `patient_state_observations` for time-aware tracking | `1G.2` should fire blocking asserts on GLP-1 / off-label / hormone pathways | **HIGH** — for any pathway where pregnancy is contraindicated (GLP-1, most off-label Rx). Patient who becomes pregnant and doesn't tell provider gets refilled. Schema permits the right write but no documented patient-initiated entry surface |
| **Changed shipping address** | Implicit through chart settings; `1J.3` says shipping is mutable when not jurisdiction-locked | YES via Mode E | `patients.shipping_address` (or equivalent) | If new address is different state, see "updated state of residence" above (**gap E.8**) | MEDIUM — different state = jurisdiction re-check needed; same state = just outbound logistics |
| **Changed payment method** | YES through `Section 1I` patient-portal flow (per `1K.11` "patient can update payment method") | YES (ops on patient request) | `Section 1I` payment-method storage; `outbound_jobs` re-attempt for failed charges | None clinical; `1G.5` payment exception clears | LOW |
| **Side-effect report** | **NO explicit path** — see **gap E.10**. Patient can use messaging (`Section 1G`), which captures it as conversation, not as a structured trackable in `1M`. No `report_concern` action-item type exists | YES via Mode E or F | `patient_state_observations` (severity score per `1M`) AND/OR `messages` per `Section 1G` | `1G.5` `clinical_safety` exception when severe trend detected per `1M.8` | MEDIUM — structured severity captured only via provider-prompt or system-prompt, not patient-initiated. Coaching loops underbuilt. |
| **"I want to change my answer" — patient-initiated correction** | **EXPLICITLY REJECTED** during Stage 2 forward-only commit per `1J.10`; **silently undocumented** for Stage 3 patients | YES — provider clarification per `1K.5` | `intake_response` append with `correction_reason = provider_clarification`; provider note linked | `1G.2` re-asserts using `patient_clinical_assertion_current` | LOW if patient is forced through the message → provider → clarification path. HIGH if implementers add a self-service "edit your intake answers" path without going through `1K.5` provider-clarification — it would silently break `1J.10` forward-only commit defenses |
| **"I want to start a new treatment"** | YES — Mode A (re-entry table) | N/A | New `intake_sessions` row | All four `1K.7` re-checks | LOW — fully covered |
| **Weight update** (between check-ins) | YES — patient can append via app surface that calls `recordPatientStateObservation` | YES via Mode E | `patient_state_observations` per `1M.3`; new row appended | `1L.16` continuation gating reads next-most-recent weight on next refill | LOW |
| **"I gave the wrong answer earlier" — incorrect previous answer** | **NO documented path** beyond messaging the provider; gap E.1 | YES — Mode E with `correction_reason = provider_clarification` per `1K.5` | `intake_response` append chained via `supersedes_response_id` | `1G.2` re-asserts; prior decision context preserved (NOT rewritten) per `1K.5` | LOW for prior decisions (decision was made on the answer-as-of-decision-time per `1K.12` packet snapshot); HIGH if implementers UPDATE rather than APPEND |

**Single most important client-update invariant** (worth surfacing on its own):

> **No patient update may rewrite the evidence used for a prior signed clinical decision.** Per `1K.5` + `1M.4` + `1K.12` packet snapshot pinning + `1K.9` derived-value version pin, every prior decision must remain reconstructable from the rows-as-they-were-at-decision-time. Append-only enforced; supersession chain preserved; `clinical_visits` decision rows reference `1K.12` packet snapshots with `score_inputs_snapshot_id` + `decision_outcome_reason`.

This invariant is **architecturally enforced** — and it would be unsafe without it. Verified intact.

---

## E. Specific gaps or ambiguities (adversarial)

Listed in priority order. The first four are the gaps called out in the verdict.

### E.1 — Missing re-entry mode: patient-initiated update to a static clinical fact (HIGH)

**Where the gap is:** `1K.13` re-entry modes table has 9 modes (A–I). Mode E is **provider-triggered**; Mode F is **system-triggered (cron)**. There is **no Mode** for "patient walks into the app, no system prompt, no provider request, and adds a new allergy / says they're now pregnant / corrects an earlier wrong answer."

**Why it matters:** the user explicitly listed `new allergy`, `new medication`, `new medical history`, `changed pregnancy/lactation status`, `"I want to change my answer"`, `incorrect answer previously` as scenarios. Per the current plan, the only documented patient path is "send a message → provider clarifies → write through Mode E." This is *unsafe at scale*: a patient who is now pregnant on a GLP-1 has every incentive to update their chart immediately, not wait for a provider message turnaround.

**The risk if unaddressed:** implementers will invent an ad-hoc "edit my intake" UI that writes directly to `intake_response` without `correction_reason`, or worse, UPDATEs the existing row. Either silently breaks the `1J.10` forward-only commit + `1K.5` ownership matrix.

**The minimal fix:** name a **Mode J — Patient-initiated update to a static clinical fact** with hard rules: (a) writes through the same `recordIntakeResponse` API as Mode E with `authored_by = patient` and `correction_reason = patient_self_correction` (new value in the `1K.5` controlled vocabulary); (b) MUST go through `1K.0` resolver so version-pin discipline holds; (c) creates a `patient_action_items` row of type `clinical_required` for provider acknowledgment when the change is clinically meaningful (per a question-bank `requires_provider_acknowledgment` flag); (d) does NOT fire stage transitions; (e) does NOT modify decisions made on the prior answer.

### E.2 — Static-fact source-of-truth dual-claim (HIGH)

**Where the gap is:** Layer 1 says `patients` chart fields hold "identity, allergies, conditions, medications, surgical history" (line 12). `1K.5` cross-session static-fact read path says `intake_response` is the SoT and `patient_clinical_assertion_current` is the read view. **Both can't be authoritative.**

**Why it matters:** if `1G.2` reads from `patients.allergies` (a column) and `loadPatientCaseSafetySnapshot` reads from `patient_clinical_assertion_current` (a view over `intake_response`), they will diverge any time a patient adds an allergy via Mode E — the `intake_response` write happens but the column doesn't refresh. Result: provider workspace shows old list, safety preflight reads new list, decisions get made on inconsistent reads.

**The minimal fix:** explicit projection rule. Either (a) `patients.allergies` etc. are TRIGGER-maintained denormalizations of the latest non-superseded `intake_response` rows, with their refresh discipline named; OR (b) the chart fields don't physically exist as columns and `patients.allergies` etc. are application-level reads through the view. Either is fine; the ambiguity is the problem.

### E.3 — `care_program` lifecycle has no stage anchor (HIGH)

**Where the gap is:** `1K.0` says intake "contributes to creation/update, never owns" the `care_program`. `Section 1G` says it owns `care_program` lifecycle. But `1K.13` Stage 1/2/3 never specifies the moment the `care_program` row is minted, nor what `intake_session.care_program_id` it links to.

**Why it matters:**
- `1M.3` `patient_state_observations.care_program_id` is **required when scoped**. At Stage 1 when the patient first writes a weight as part of GLP-1 intake, no `care_program` exists yet (intake doesn't create them). The first row would have `pathway_code='glp1'` but `care_program_id=null`.
- After Stage 3 / provider approval, the care_program is presumably created by the provider mutation. The Stage-1-era weight observations now have `care_program_id=null` permanently — queries scoped to `(care_program_id, weight, observed_at DESC)` will miss them.
- `1H` reporting will show inconsistent intake-time vs post-approval cohort sizes for the same care_program.

**The minimal fix:** specify in `1K.13` that `care_program` is minted **at Stage 2 → 3 transition** when provider approval is recorded with `decision_outcome_reason ∈ approval_family`. At minting, a single repointing migration runs in the same transaction: any `patient_state_observations` rows with `(patient_id, pathway_code = <pathway>, source_id = intake_session_id, care_program_id IS NULL)` get their `care_program_id` populated. Add explicit `intake_sessions.care_program_id` back-pointer (nullable; populated on approval) so the intake-session ↔ care-program link is queryable, not derivable.

### E.4 — Pregnancy / lactation status as a mutable clinical fact (HIGH)

**Where the gap is:** the term appears in the plan only as: a hotfix migration *example* (line 3009), a lab panel type (line 3522, 5364, 5522). Pregnancy as a **stateful, mutable, clinically-decisive fact** (changes mid-treatment, contraindicates GLP-1 / most off-label Rx / many hormones) is not given dedicated discussion. There is no:
- Question-bank field name reserved (e.g., `pregnancy_status`, `lactation_status`, `last_menstrual_period_at`).
- Re-prompt freshness window per `1K.5` (a "no" 12 months ago is irrelevant; freshness should be tight).
- Active `1G.2` assert wired (the system has the machinery, but no rule stating "GLP-1 refill mutation MUST read pregnancy_status with freshness ≤ 30 days").
- Patient-initiated update path (gap E.1).

**Why it matters:** a $500M company will face this in the first month. Quietly refilling a GLP-1 to a now-pregnant patient is the single most likely mass-tort vector for this product class.

**The minimal fix:** in `1K.5` add a named **freshness profile** for time-sensitive facts (pregnancy_status, recent_pregnancy_attempt, breastfeeding_status, nicotine_use_active) with default 30-day window. In `1G.2` (or the safety preflight contract in `1J.10`) add an explicit example: "GLP-1 refill_approve `actionContext` MUST read pregnancy_status from `patient_clinical_assertion_current`; missing-or-stale → `paused_needs_pregnancy_status_refresh` reason code per `1K.12`." In Mode J (per E.1), surface this as a top-priority patient-initiated update.

### E.5 — Mode G ambiguity: same session vs scoped refresh session (MEDIUM)

**Where the gap is:** `1J.4` L_stale mechanics says "The `intake_sessions` row (or a scoped refresh session if the staleness is detected outside an active intake)..." — leaves the trigger condition implicit. `1K.13` Mode G table cell says "same `intake_sessions` row flagged for stale-artifact refresh (or a scoped refresh session depending on trigger)."

**Why it matters:** "depending on trigger" is the kind of phrase that produces two implementations in two PRs. If Stage 3 patient hits a refill that triggers L_stale, is the refresh session attached to a NEW `intake_sessions` row, the original Stage 2 session that produced the L3 verification, or the most recent intake_session of any kind? The session row pointers (`prior_closed_session_id`, `prior_cancelled_session_id`) don't have a corresponding `prior_uplifted_session_id`.

**The minimal fix:** `1J.4` explicit rule — "L_stale refresh creates a NEW `intake_sessions` row with `status = identity_uplift_stale_refresh`, `pathway_codes[] = [<pathway that triggered>]`, and a new pointer `refreshes_identity_from_session_id` linking to the most recent `identity_uplift_refreshed` or original Stage 2 session. The new session is scoped — Stage 1 modules are not re-prompted; the resolver renders only the stale-artifact module."

### E.6 — `intake_inconsistency_flag` storage destination unspecified (MEDIUM)

**Where the gap is:** referenced in `1J.6` Rx-restart gaming (line 2642), `1K.13` re-entry abuse rules (line 3400), Mode H column. Treated like a real concept; storage destination not in `1K.14` schema table.

**Why it matters:** implementers will choose ad hoc — `intake_response.metadata`, `patient_timeline_events.payload`, a new `intake_inconsistency_flags` table, `audit_events`, `patient_action_items` of type `provider_message`. Each option has different query semantics.

**The minimal fix:** in `1K.14` add a row — "**`intake_inconsistency_flag`** — typed `patient_timeline_events` payload with `(prior_response_id, current_response_id, field_name, prior_value_hash, current_value_hash, flagged_at, resolution_status?, resolved_by_staff_id?)`; provider's `1K.12` packet renders the side-by-side from this event; ops/clinical resolution writes a new row with `resolution_status` set, supersession via `supersedes_event_id`."

### E.7 — Mode E / F write contract conflicts with `intake_session_id` requirement (MEDIUM)

**Where the gap is:** `1K.4` mandatory version capture says every `intake_response` row MUST carry `intake_session_id` and `pathway_id`. `1K.6` says provider follow-ups (Mode E) and system check-ins (Mode F) write through the same write API. `1K.13` Mode E/F rows say "**No new** `intake_sessions`."

**Why it matters:** how does the resolver write a Mode E response with no `intake_session_id`? Three plausible interpretations:
1. Mode E/F writes are **exempt** from the `intake_session_id` requirement — but then the audit trail loses session correlation.
2. Mode E/F writes attach to the **most recent submitted** `intake_sessions` for that patient + pathway — but then a year-later check-in is logged as part of an intake from a year ago, distorting `1H` funnel metrics.
3. Mode E/F writes create a **lightweight session shim** (e.g., `intake_sessions.status = standalone_progressive_intake`) — but this contradicts the "No new `intake_sessions`" rule.

**The minimal fix:** `1K.13` explicit rule. Recommend interpretation (3) with renaming: "Mode E and F writes attach to a **persistent `intake_sessions` row of type `progressive_intake_long_running`** scoped to `(patient_id, care_program_id, pathway_code)` — one per care_program, created at Stage 2→3 transition (per E.3 fix), and reused for all subsequent stage-agnostic writes. This satisfies `1K.4` version capture without distorting funnel metrics (funnel queries filter on `status != progressive_intake_long_running`)."

### E.8 — State-change between sessions does not retroactively block in-flight Rx (HIGH)

**Where the gap is:** `1K.7` re-entry re-check discipline says jurisdiction re-checks at every new pathway and resumed session. `1L.22` (labs) says "if jurisdiction changes between order and review, route to current jurisdiction." But: a Stage 3 patient who **moved states between refills** doesn't trigger an intake re-entry — the next refill is a `treatment_orders` mutation through `loadPatientCaseSafetySnapshot`, not a re-entry of the intake stage model. Does the safety preflight re-check jurisdiction?

**Looking at `1J.10`:** the `loadPatientCaseSafetySnapshot` contract lists "1G — clinical / permit / case state" but doesn't *explicitly* enumerate jurisdiction. `1G.4.1` jurisdiction routing is named in cross-links but not committed as part of the snapshot's read set.

**Why it matters:** GLP-1 patient in CA who moves to FL where the program licensing differs gets refilled without re-routing. This is a regulatory failure mode at $500M scale.

**The minimal fix:** in `1J.10` Required contract, explicitly add to the snapshot: "**Jurisdiction:** `patients.state_of_residence` compared against `1G.4.1` allowed-states for the action's pathway/program. Mismatch → block; surface `paused_needs_jurisdiction_review` per `1K.12` reason codes; route to ops per `1G.5` `compliance_or_policy_change`." This makes jurisdiction a per-mutation re-check, not a per-re-entry re-check.

### E.9 — Multi-pathway sessions in stage transitions (MEDIUM)

**Where the gap is:** `1K.6` allows adding pathway B to an in-flight session for pathway A (no duplicate session). `1K.13` Stage 2 forward-only commit, `identity_uplift_snapshot`, pre-assigned provider per `1G.7`, and Stage 1 contraindication outcomes are all *per-session*, not *per-pathway-in-session*.

**Edge cases left undefined:**
- Pathway A (GLP-1) hits an absolute contraindication at Stage 1; pathway B (HRT) is fine. Does the session close `closed_ineligible`? Or does the GLP-1 `pathway_code` get marked ineligible while the session continues for HRT?
- Pathway A needs L1; pathway B needs L3. Does Stage 1→2 transition fire when pathway B reaches its uplift step? If yes, does it also lock pathway A's Stage 1 answers (which would over-lock)?
- Patient cancels Stage 2 (Mode I): does the cancellation kill BOTH pathways, or just the L3-requiring one?

**The minimal fix:** `1K.13` add an explicit rule — "When a session has multiple pathways with different stage requirements, the **session's stage is the maximum stage of any pathway in `pathway_codes[]`**. Pathway-specific outcomes (contraindication on one pathway, identity-uplift required for another) are recorded per-pathway in `intake_response`/`treatment_plan_candidate`. A `closed_ineligible` outcome on one pathway sets the session's `closed_eligibility_pathway_codes[]` (subset); the session continues if any pathway remains eligible. A Stage 2 forward-only commit triggered by pathway B locks Stage 1 answers globally for the session — patients who want to revise must cancel and start a fresh session per Mode I."

### E.10 — Patient-initiated side-effect report has no structured surface (MEDIUM)

**Where the gap is:** `patient_action_items` `type` enum doesn't include `report_concern` or `report_side_effect`. `pending_patient_input_task.required_datum` enum is for *blocking* requirements (BP needed to continue), not for *patient-volunteered* signals. A patient who wants to proactively report nausea has only the messaging path (1G), which puts it in `messages` not `patient_state_observations`.

**Why it matters:** longitudinal trackable trends (per `1M`) drive `1G.5` `clinical_safety` exceptions only when the system has the data. If patient-volunteered side effects only land in `messages`, they don't aggregate per `field_name` for cohort trend analysis (`1H.7`), don't feed `1L.16` continuation gating, and don't surface in the provider workspace (`1G.8.7`) trend view.

**The minimal fix:** in `1G.11.2` `type` enum, add `report_concern` (patient-initiated). The action item, when opened, walks the patient through a structured-input module per `1K.6` (using the same question bank, with severity_ordinal per `1K.4`), writing to `patient_state_observations` with `source_type = patient_initiated_report`. Provider receives a notification through normal `1G.3` clinical-required flow if severity ≥ moderate or trend crosses threshold per `1M.6`.

### E.11 — `patient_action_items` `origin_event_id` requires a timeline event first (LOW)

**Where:** `1G.11.2` schema requires `origin_event_id` pointing to a `patient_timeline_events` row.

**Why it matters:** if the timeline event write fails but the action item write succeeds, the action item dangles. If the action item write fails but the timeline succeeds, the patient never sees the surface despite the timeline saying it was created.

**The minimal fix:** add to `1G.11.2` a transactional discipline note — "creation of action items emits `patient_timeline_events` AND inserts the action item in the same DB transaction; on failure, both rollback per `1L.18 #1` enforcement discipline." (This may already be the implicit intent; making it explicit prevents the partial-state class of bug.)

### E.12 — `reopen_eligibility_criteria` watcher process is undefined (LOW)

**Where:** `1K.13` says "the engine watches for the criterion to become true."

**Why it matters:** ambiguous — is it a cron, a webhook on every `recordPatientStateObservation` write, a reactive trigger? Different choices give different latency and different failure modes.

**The minimal fix:** `1K.13` name the discipline — "watchers for `reopen_eligibility_criteria` are reactive, fired in the same transaction as the satisfying write (e.g., `recordPatientStateObservation` for `bp_reading_recent`, `routePatientDocument` for `id_document_refresh`, `1G.4.1` policy upgrade for `jurisdiction_added`). Each writer scans for matching open criteria as part of its commit and emits `intake.session.reopen_eligible` + creates `patient_action_items` of type `incomplete_visit` in the same transaction. `1G.5` exception fires if a criterion remains satisfied without a matching action item being created."

### E.13 — Pre-account cart / supplement intent at Stage 0 (LOW)

**Where the gap is:** Stage 0 allows acquisition + entry-intent metadata only. Cart additions pre-account (Hims allows this) are not addressed.

**Why it matters:** if a patient adds supplements or pre-checks "labs subscription" at Stage 0, the cart needs to survive Stage 0.5 → 1 promotion alongside consent + fingerprint. Today this is undefined.

**The minimal fix:** in `1K.13` Stage 0 → 0.5 → 1 transition rules, mention "pre-account `commerce_orders` shopping cart, if present, is held cookie-scoped on the session row alongside acquisition data; on Stage 1 promotion the cart links to the new `patients.id` and resumes its standard `1I` lifecycle. No `commerce_orders` row exists pre-account (same rule as `patient_consents`)."

### E.14 — `form_submissions` legacy table mentioned in lab appendix (LOW)

**Where:** line 5298 — appendix uses `form_submissions` as the existing table for "Intake complete" in the legacy TRT-style flow.

**Why it matters:** the new `1K.x` architecture uses `intake_response`, `intake_sessions`, etc. If implementers carry forward `form_submissions` as the storage backend "because the appendix uses it," they end up with a 1K vs appendix split-source-of-truth.

**The minimal fix:** in `1K.14` clarify that `form_submissions` (legacy) is the existing table that `intake_response` per `1K.4` migrates / replaces; new pathways MUST write through `intake_response`; legacy `form_submissions` rows are read-only post-migration.

### E.15 — Cross-pathway L coverage matrix is asserted in prose but not tabulated (LOW)

**Where:** `1J.4` L→pathway gates are committed; `1K.13` says "HRT L3 covers GLP-1 L3" but the cross-pathway coverage matrix isn't a table.

**The minimal fix:** in `1J.4` add a small table — "L coverage matrix: an L<n> verification on pathway A satisfies L<m> for pathway B if and only if (a) `m ≤ n` and (b) the verification artifacts for A include all artifacts required by B's policy. Currently: HRT L3 ↔ GLP-1 L3 ↔ TRT L3 ↔ off-label Rx L3 (all four require gov-ID + selfie biometric). Future controlled L4 requires additional artifact (e.g., DEA signature) and is NOT covered by any L3 verification."

---

## F. Minimal hardening edits (by section, integrated only)

All edits integrate into existing sections; no new subsections at any level.

| Edit ID | Section | What changes | Net delta |
|---|---|---|---|
| **F.1** | `1K.13` re-entry table | Add **Mode J — Patient-initiated static-fact update** (gap E.1) | +1 row + ~6 prose lines for the named-rules block |
| **F.2** | `1K.5` data ownership matrix + Layer 1 doc (line 12) | Resolve `patients` chart fields vs `intake_response` projection (gap E.2) | +4 lines (projection rule + read discipline) |
| **F.3** | `1K.13` stage-transition table + `1K.14` schema | Anchor `care_program` minting to Stage 2→3 transition; add `intake_sessions.care_program_id` back-pointer; specify `patient_state_observations.care_program_id` backfill on care_program creation (gap E.3) | +5 lines |
| **F.4** | `1K.5` freshness profiles + `1G.2`/`1J.10` example + Mode J priority surface | Add named `pregnancy_status` / `lactation_status` time-sensitive freshness profiles + active assert example (gap E.4) | +6 lines |
| **F.5** | `1J.4` L_stale mechanics | Specify Mode G session creation rule (always new `intake_sessions` with `refreshes_identity_from_session_id` pointer + scoped module) (gap E.5) | +3 lines |
| **F.6** | `1K.14` schema | Add `intake_inconsistency_flag` row with destination = `patient_timeline_events` payload + schema (gap E.6) | +1 row |
| **F.7** | `1K.13` Mode E/F + `1K.14` `intake_sessions.status` enum | Name `progressive_intake_long_running` session type, scoped per (patient_id, care_program_id, pathway_code), reused for all stage-agnostic writes (gap E.7) | +3 lines |
| **F.8** | `1J.10` Required contract snapshot | Add jurisdiction explicitly to the snapshot read set; add `paused_needs_jurisdiction_review` reason code to `1K.12` (gap E.8) | +3 lines |
| **F.9** | `1K.13` multi-pathway rule | Add session-stage-is-max-pathway-stage rule + per-pathway `closed_eligibility_pathway_codes[]` + Stage 2 commit globalization rule (gap E.9) | +5 lines |
| **F.10** | `1G.11.2` action-item type enum + `1G.11.4` emitter | Add `report_concern` action item type; specify structured-input module path per `1K.6` (gap E.10) | +2 rows |
| **F.11** | `1G.11.2` lifecycle | Add transactional discipline note for action item + timeline event co-write (gap E.11) | +1 line |
| **F.12** | `1K.13` reopen mechanics | Specify reactive in-transaction watcher discipline + `1G.5` exception on criterion-without-action-item (gap E.12) | +2 lines |
| **F.13** | `1K.13` Stage 0/0.5/1 transition rules | Mention pre-account cart as cookie-scoped + Stage 1 promotion to `commerce_orders` (gap E.13) | +1 line |
| **F.14** | `1K.14` schema | Note that `form_submissions` (legacy) is read-only post-migration; new writes MUST use `intake_response` (gap E.14) | +1 line |
| **F.15** | `1J.4` | Add small L cross-pathway coverage matrix (gap E.15) | +5 lines (small table) |

**Total estimated delta:** ~60 lines.

---

## G. Exact wording patches (drafts)

### G.1 — Mode J added to `1K.13` re-entry modes table (after Mode I row)

```markdown
| J | Patient-initiated update to a static clinical fact (allergy, medication, condition, pregnancy status, prior wrong answer) | **Stage-agnostic** write; no stage transition | **No new** `intake_sessions`; writes to the persistent `progressive_intake_long_running` session per Mode E/F discipline | N/A | N/A | None; write appends to `intake_response` via `recordIntakeResponse` with `authored_by = patient` + `correction_reason = patient_self_correction` per `1K.5`; `patient_action_items` row of type `clinical_required` opens for provider acknowledgment if the question-bank entry has `requires_provider_acknowledgment = true` |
```

Plus, in the **Failure modes explicitly blocked** block below the table, add:

```markdown
- **Patient self-correction silently rewriting prior decision evidence** — blocked by Mode J's `correction_reason = patient_self_correction` + `1K.5` append-only + `supersedes_response_id` chain; `1K.12` packet snapshot pinning preserves the row-as-of-decision-time; `1K.9` derived-value version pin preserves any score that depended on the prior answer.
```

### G.2 — `1K.5` projection rule for static chart fields (resolves Layer 1 vs `1K.5` ambiguity)

In the "Cross-session static-fact read path (required; consumed by safety preflight)" block of `1K.5`, after the existing "Canonical read path" bullet, add:

```markdown
- **Relationship to `patients` chart-field doc (Layer 1 architecture rule):** Layer 1 names `patients` chart fields ("identity, allergies, conditions, medications, surgical history") as the per-domain home for static clinical memory. The **authoritative storage** for assertion content is `intake_response` per this section; the **`patients` chart fields, where they exist as physical columns**, are TRIGGER-maintained denormalizations of the latest non-superseded `intake_response` row per `(patient_id, field_name)` within freshness, refreshed atomically on every `recordIntakeResponse` commit. **No application code may UPDATE `patients.allergies` or equivalent chart fields directly** — the path is `recordIntakeResponse` → trigger refresh → `patient_clinical_assertion_current` view + `patients.allergies` denormalization both reflect the new assertion in the same transaction. `loadPatientCaseSafetySnapshot` reads the view (canonical); the provider workspace may read either the view OR the denormalized column (equivalent by trigger discipline). Divergence between the two is a defect surfaced by `1H.3` reconciliation queries.
```

### G.3 — `care_program` minting at Stage 2→3 transition (`1K.13` stage-transition table)

In the existing 2→3 row of the stage-transition table, change "What is committed" to:

```markdown
| 2 → 3 | KYC pass + provider approval + `1J.10` preflight clean + `1K.12` decision_outcome_reason = approved | `clinical_visits` decision; **`care_program` row minted by the same provider mutation per `Section 1G`, populating `intake_sessions.care_program_id` back-pointer in the same transaction; any existing `patient_state_observations` rows with `(patient_id, pathway_code, source_id = intake_session_id, care_program_id IS NULL)` are repointed to the new `care_program_id` in the same transaction (one-time backfill per care_program creation)**; identity at L3/L4; Rx-state mutations authorized | Identity artifacts locked per `1J.3`; decision pinned to packet version per `1K.12`; care_program scope established for all subsequent stage-agnostic writes per Mode E/F |
```

Plus, in `1K.14` `intake_sessions` row, add `care_program_id?` (nullable; populated at 2→3 transition) to the column list.

### G.4 — Pregnancy / lactation freshness + active assert (in `1K.5` and `1J.10`)

In `1K.5` after the "Freshness windows" bullet, add:

```markdown
- **Time-sensitive named freshness profiles (mandatory for clinically-decisive mutable facts):** the question bank declares a `freshness_profile` per `field_name`. Profiles include: `time_sensitive_30d` (default for `pregnancy_status`, `lactation_status`, `recent_pregnancy_attempt`, `nicotine_use_active`, `home_bp_recent`); `quarterly_180d` (allergy refresh, condition refresh); `annual_365d` (surgical history refresh); `static_no_refresh` (legal name + DOB once L3-locked per `1J.3`). The safety preflight per `1J.10` reads `patient_clinical_assertion_current` and rejects any mutation whose pathway requires a fact with a stale-relative-to-profile assertion; the patient enters Mode J or a system-initiated check-in per Mode F to refresh.
```

In `1J.10` Required contract, add to the snapshot bullet list:

```markdown
- **Time-sensitive clinical facts:** `patient_clinical_assertion_current` reads for any `field_name` declared as `time_sensitive_30d` per `1K.5` — including `pregnancy_status` and `lactation_status` for any pathway with hormonal / GLP-1 / off-label Rx implications (per pathway policy). Stale-relative-to-profile → block with reason code `paused_needs_<field_name>_refresh` per `1K.12`; opens a `pending_patient_input_task` of `required_datum = <field_name>` per `1G.11.3` driving Mode J or Mode F refresh. **Hard rule:** GLP-1 / TRT / HRT / off-label Rx refill_approve `actionContext` MUST read `pregnancy_status` regardless of patient sex-at-birth setting; the question is conditional in patient-facing presentation per `1K.5` reuse policy but unconditional in the safety preflight read.
```

---

## Patch authorization

This audit has been adopted in full. All 15 patches (E.1 through E.15) are authorized for application in the same checkpoint.

**Constraint reaffirmed:** patches integrate into existing sections only; no new subsections; no rewrites of entire sections; preserve all existing detail.

**Linked commits:** the patch commit will reference this audit file by path.
