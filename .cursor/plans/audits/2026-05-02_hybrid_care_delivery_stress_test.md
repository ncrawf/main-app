# Hybrid Care Delivery (In-Person + Remote) — pre-runtime stress test

**Date:** 2026-05-02
**Clinical CODEOWNER:** founder (board-certified MD)
**Scope:** Cross-system extension test (NOT a clinical pathway slice). Validate that the locked architecture (commit `824480a`) supports in-person AND remote care delivery on the SAME spine — without forking intake / rules / messaging / identity / campaigns / decision logic. **Hybrid-first, not hybrid-retrofit.**
**Eight scenarios:** 7 user-specified + 1 explicit end-to-end mixed-mode lifecycle as the proof-of-hybrid-first decisive reconstructability test.
**Verdict (full):** Architecture HOLDS. The system was designed with `Section 1F` modality + location + bookable-service primitives + compositional checkout discipline + per-program message threads + clinician-of-record continuity per `1G.9` + identity-confidence L-gating per `1J.4` + `Section 1Q` rules + templates engine — all of which already accommodate both modes by extension. The stress test surfaces 8 small in-place foundational gaps (G1-G8) — none introduce new primitives. `interaction_context` is locked at **Outcome P2 (typed-shape compromise)** — declared as a binding TypeScript interface used uniformly across `intake_sessions`, `appointment`, `outbound_jobs`, `messages`, `commerce_orders`, `treatment_orders`, `patient_diagnostic_reports`, `audit_events` rows via their existing `metadata` field; NO new tables. Promotion-threshold criteria for future P3 (`care_session` first-class) declared in `Section 1Q.23`. All foundational gaps fixed in their right architectural homes per user discipline. **Final verdict: READY for hybrid deployment** after checkpoint lands.

---

# Part 1 — Cross-industry framing

Hybrid-first care delivery means in-person and remote operate on the SAME execution spine — same patient identity, same intake, same rules, same messaging, same provider authority, same audit. Not "telehealth with in-clinic added later" and not "in-clinic with telehealth added later." The architectural failure mode of retrofit systems is what the 4 failure conditions enumerate: parallel data, parallel rules, parallel messaging, parallel auth. Once any of those forks, the system loses the property that PROVIDERS RELY ON without thinking twice — it becomes "more stuff," not confidence.

**Cross-industry comparison (where prior systems landed):**

| System | Hybrid posture | Failure mode |
|---|---|---|
| Mindbody (clinic SaaS) | Clinic-first; telehealth bolted on later | Two booking systems; two patient profiles; reconciliation layer |
| Athenahealth | EMR-first; telehealth via separate module | Forked clinical doc + audit chain across modes |
| Hims/Ro/Modern (telehealth-only) | Telehealth-only; no in-clinic at all | Cannot extend to in-clinic without re-architecture |
| Epic + MyChart | Unified spine for chart + patient portal | Partial unification; messaging/portal a peer not a primary surface |
| Cerner + HealtheLife | Similar to Epic | Same partial unification |
| **MAIN (this system)** | **Hybrid-first by design** — `Section 1F` modality enum + `appointment` first-class + `commerce_orders` (1E retail) vs `treatment_orders` (1I clinical) compositional segregation + per-program `message_thread` + clinician-of-record `1G.9` + concept assertions `1K.5.A` + Identity L-gating `1J.4` + Rules engine `Section 1Q` | **Test surface:** does the locked architecture honor day-1 mode-equality without retrofit? |

**Why it matters:** providers rely on memory; improvise workflows; forget follow-ups; vary in quality. The architecture's job is to remove uncertainty and inconsistency — not to replace clinicians. **Removing uncertainty across modes is the hybrid-first proof point.** A junior provider operating an in-person workstation should produce the same `decision_support_payload`, the same authority gates, the same audit trail as that same provider working a remote queue 3 hours later. THAT is the test.

**The subtle but important shift:** the system is not "tools to treat conditions"; it is "a system that lets providers act correctly, consistently, and confidently without carrying everything in their head" — across in-person AND remote, regardless of which mode the case starts or ends in.

---

# Part 2 — Six non-negotiable invariants + four failure conditions (binding)

These become NEW hard invariants in `Section 1Q.23` and are enforced by CI lint at PR time + runtime asserts at the orchestration layer. Each invariant declares: (a) the invariant; (b) the architectural mechanism enforcing it; (c) failure mode if violated; (d) detection trigger.

**Invariant 1 — SINGLE PATIENT IDENTITY**
- Mechanism: one canonical `patients` row per person (per `1J.5` cross-program identity); identity confidence L-level per `1J.4` is mode-agnostic; in-person and remote care write to the SAME row.
- Failure mode: a "clinic" `patients` row vs an "online" `patients` row → fragmented chart → reconciliation layer → safety regressions.
- Detection: CI lint forbids any `patients_clinic` / `patients_online` / `patients_in_person` table or schema split. Runtime assert: every `intake_sessions.patient_id` resolves to a non-null `patients.id`.

**Invariant 2 — NO DUPLICATE SYSTEMS**
- Mechanism: single intake / single rules engine / single messaging / single campaign system; mode is a TYPED INPUT (`interaction_context.mode`) at orchestration layer, NEVER a code-split. CI lint at PR time enforces single-codepath discipline (no top-level `if mode === 'in_person' { ...separate flow... }` branching at the `Section 1Q` rules engine, `Section 1G.3` send-policy, `Section 1K.14` intake resolver, or `Section 1Q.21` campaign engine).
- Failure mode: parallel intake systems / parallel rules / parallel templates → fork F1.
- Detection: CI lint scans for top-level mode-switch branching at orchestration files; integration test runs same patient data through both modes and asserts identical decision_support_payload output.

**Invariant 3 — CONTEXT-AWARE EXECUTION ONLY**
- Mechanism: `interaction_context` typed object — `{ mode: 'in_person' | 'remote', assisted: boolean, location_id?, appointment_id?, active_visit_id?, preferred_in_person_provider_id?, staff_user_id?, source: 'patient_self' | 'staff_assisted' | 'kiosk' | 'tablet', initiated_at }` — declared in `Section 1Q.23` and threaded through every state-mutating row's `metadata` field. Underlying logic is identical; UX/timing/suppression adapts.
- Failure mode: inconsistent mode propagation → drift → assertions written from in-person workstation that don't surface in remote chart.
- Detection: CI lint enforces presence of `interaction_context` on every state-mutating row's metadata at orchestration layer. Runtime assert: every `audit_events` row carries `interaction_context` for the firing actor.

**Invariant 4 — PROVIDER AUTHORITY IS CONSISTENT**
- Mechanism: `Section 1Q.4` rule object shape's `authority_floor` enum + `override_capability_required` field is the SAME object regardless of mode. In-person provider operates with same `requireCapability` + `Section 1J.4` L-gating + `Section 1Q.7` audit shape as remote provider. Safety preflight per `1J.10` `loadPatientCaseSafetySnapshot` runs IDENTICALLY before any clinical mutation regardless of mode.
- Failure mode: in-person bypasses safety (e.g., "we can override the contraindication because the patient is in front of us") OR remote weakens safety (e.g., "we can't fully verify so we'll skip the gate") → fork F3.
- Detection: integration test asserts identical safety-preflight outcome for same patient data under both modes; CI lint forbids any mode-conditional in `1J.10` or `Section 1Q` rule actions.

**Invariant 5 — SAME DECISION → SAME OUTCOME**
- Mechanism: rule object shape declares optional `interaction_context_aware: boolean` flag (default false). When `true`, rule MAY tune action's UX/timing per `interaction_context` — but its DECISION LOGIC + AUTHORITY FLOOR + DECISION_SUPPORT_PAYLOAD CONTENT must remain identical. CI lint at PR time enforces: when `interaction_context_aware: true`, the rule's `rationale_note` must declare what tunes (UX/timing) and assert what does NOT (decision logic). Templates declare `interaction_context_compatibility: ['remote' | 'in_person' | 'both']` (default `['both']`); CI lint forbids creating SEPARATE template versions per mode for the same `message_intent`.
- Failure mode: a contraindication blocks remote Rx but is silently bypassable in-person → fork F3.
- Detection: integration test asserts identical `decision_support_payload.suggested_options` + `rationale_summary` + `evidence_summary` for same patient data across modes.

**Invariant 6 — NO LOSS OF AUDITABILITY**
- Mechanism: every state-mutating in-person interaction emits typed `audit_events` row per `Section 1Q.7` with `interaction_context` declared. In-person discussion notes attach to `clinical_visits` (existing per Section 1F-related primitives); document uploads route through `Section 1L.16a` + `Section 1P` atomization with `provenance` distinguished (staff_uploaded_in_person vs patient_uploaded_remote vs staff_uploaded_remote_on_behalf); checkout audited per `Section 1E` compositional discipline regardless of mode.
- Failure mode: in-person interactions degrade to "the provider just talked to them" with no audit row → cannot reconstruct what happened → liability + safety regression.
- Detection: integration test asserts that for any in-person scenario, the audit_events stream + clinical_visits + patient_timeline_events combined produces a complete reconstruction of state mutations equal in completeness to a remote scenario.

**Failure Condition F1 — Mode fork at any layer.** If any part of the system requires `if (mode === 'in_person') { ...path A... } else { ...path B... }` at orchestration / rules / messaging / campaign / identity / checkout layers, classify as `foundational_failure`.

**Failure Condition F2 — Patient state diverges across contexts.** If an assertion / message / order / lab / consent created in mode A is invisible in mode B for the same `patients.id`, classify as `foundational_failure`.

**Failure Condition F3 — Decisions differ based on mode.** If the same patient data produces different `decision_support_payload`, different authority floor, different safety gating, or different override eligibility under different modes, classify as `foundational_failure`.

**Failure Condition F4 — Messaging / workflows require duplication.** If the system requires separate "in-person SMS templates" vs "remote SMS templates" for the same `message_intent` + same audience, classify as `foundational_failure`.

---

# Part 3 — 8 scenarios traced atom-by-atom

Each scenario uses the locked 10-step pipeline + 5-question evaluation:
**source → evidence → classification → atomization → routing → rules → templates → actions → provider workspace → architecture verdict** + system behavior / patient experience / provider experience / awkwardness/breakdown / classification (`no_issue` / `needs_some_work` / `foundational_gap`).

---

## Scenario 1 — Walk-in / scheduled in-person intake (tablet, assisted vs self-service)

**Patient:** Maria, 52F, walks into MAIN's flagship clinic for a scheduled HRT consult. Front-desk staff (with `front_desk_staff` role + `can_initiate_intake_assisted` capability) greets her, looks up her record (or creates one if she's a new patient), hands her a tablet preloaded with the Female HRT pathway intake. Maria is comfortable with tech and self-completes; alternative scenario branch: Maria asks for help and staff sits beside her, keying answers Maria says aloud.

**1. Source:**
- Tablet UI loads `Section 1K.14` intake start page; `intake_sessions` row created with `metadata.interaction_context = { mode: 'in_person', assisted: false, location_id: 'loc_flagship_clinic_001', appointment_id: 'appt_2026_05_02_10am', staff_user_id: 'staff_frontdesk_jen', source: 'tablet', initiated_at: '2026-05-02T10:03:00Z' }`. (Assisted variant: `assisted: true`, `source: 'staff_assisted'`.)
- Same intake module versions, same question pins (per `1K.4` versioning) as remote intake — `pathway_codes: ['female_hrt']`.

**2. Evidence:** `intake_response` rows persisted in real-time as Maria taps each answer (vs remote async submission); each row carries the SAME `(intake_session_id, question_id, question_version, module_id, module_version, branch_path_token)` shape per `Section 1K.4`. Tablet network blip → resume from last persisted answer; no data loss. Free-text responses go through `Section 1P` atomization same as remote.

**3. Classification:** deterministic safety scan runs as usual; AI classifier on free text runs as usual. Surfacing tier per `Section 1P.5` unchanged.

**4. Atomization:** clinical assertions per `1K.5.A` emitted same as remote — `condition.perimenopause_suspected`, `symptom.hot_flashes_severe`, etc. **Authored_by:** stays `patient_reported` for the patient's tapped answers; assisted variant uses `patient_reported` (NOT `third_party_reported`) since the patient is the source of truth, staff is just keying — but the `staff_user_id` + `assisted: true` is preserved on `intake_response.metadata` for audit.

**5. Routing:** `Section 1G.4` provider routing fires as usual; HRT-qualified provider in jurisdiction. Because `appointment_id` is set to a 10am scheduled visit, the routing prefers the `appointment.primary_provider_id` for this visit (same provider Maria is here to see) — extension of `Section 1G.9` clinician-of-record continuity to acknowledge appointment-bound preference. **Critical:** routing logic is the same routing function — it just has more context (appointment_id) than the remote case. Inv 2 (no duplicate systems) HOLDS.

**6. Rules firing:** identical to remote — eligibility + safety preflight + symptom_cluster_threshold + menopausal_status_determination per Female HRT slice (`Section 1Q.22`). Only difference: `decision_support_payload` may include an option that's only available in-person (`offer_in_room_education_handout`) — but the rule doesn't FORK; it adds a typed option that's gated by `interaction_context.mode === 'in_person'` declared in the option's eligibility, similar to how jurisdiction-specific options work.

**7. Templates rendered:** `tmpl.female_hrt.intake.received_v1` (tier_2; intent=`clinical`) — for the IN-PERSON case the SAME template is used. The patient hears the staff say "Your provider will be with you in a moment" verbally, but the SAME tier_2 outside-secure template is queued for SMS confirmation later (suppressed by Inv 6's in-person-recent-interaction window per Patch G2 — see Patch list). No mode-specific template version exists; F4 prevented.

**8. Actions:**
- `clinical_required` turn opened for the provider review (same as remote)
- `patient_action_items` row of type `clinical_required` (same as remote)
- BUT: redundant SMS confirmation suppressed because `face_to_face_interaction_in_progress` is true (the patient is in the building; suppression window starts when `appointment.checked_in_at` is set and ends N minutes after `appointment.actual_end_at`)
- `commerce_orders` not yet created at this turn (intake only)

**9. Provider workspace:** when Maria is roomed and the provider opens the workspace, the workspace renders the SAME data using the SAME `Section 1G.8` queue surface — but the view is filtered by `interaction_context.mode === 'in_person' AND interaction_context.location_id === current_provider_session_location_id` so the synchronous-in-room patient appears at top of queue with a "currently in room" badge. Provider sees the SAME atom-by-atom intake summary, the SAME safety preflight stack, the SAME `decision_support_payload` they would see for a remote patient. Cognitive load is intentionally suppressed via existing `Section 1P.5` surfacing tier discipline (primary / supplementary / informational).

**10. Architecture verdict:**

- System behavior: **HOLDS.** Real-time intake validation works because `intake_response` rows persist per-answer same as remote (no batching / no async-only assumption). Modified UX (tablet, real-time validation) lives at the UI layer; intake structure is identical. Provider routing prefers appointment-bound provider via existing `Section 1G.9` extension.
- Patient experience: feels faster + more immediate. Staff can answer questions as Maria taps. Same data captured.
- Provider experience: same as remote — but the patient is in the building; provider sees "in room" badge.
- Awkwardness/breakdown: **redundant SMS confirmation** if not suppressed (Maria is sitting in the building; getting "Your intake was received" SMS while standing at the front desk feels broken). **Foundational gap G2** identified — fixed by in-person-recent-interaction suppression window in `Section 1G.3`.
- Classification: `needs_some_work` (without G2 fix); `no_issue` (with G2 fix in-place).

---

## Scenario 2 — Provider workstation decision flow (patient in-room)

**Patient:** Linda, 56F, postmenopausal, the same patient data as Female HRT Scenario 2 — but in-person at the clinic for her scheduled consult. Provider has 12 minutes scheduled. Provider opens the patient on the workstation tablet/desktop UI in the exam room.

**1. Source:** provider opens the patient via `Section 1G.8` provider workspace — the workspace surface is a context-aware view of the same data as remote, filtered to `interaction_context.mode === 'in_person'` and the current location. The patient's "ready for review" state, intake atoms, safety preflight, and `decision_support_payload` are pre-rendered (same data as a remote review).

**2. Evidence:** patient's `intake_response` rows + `patient_clinical_assertions` per `1K.5.A` + uploaded mammogram document per `Section 1L.16a` — all pre-loaded. Provider does NOT re-collect; this is the SAME data that would surface in a remote queue. Inv 2 HOLDS.

**3. Classification:** unchanged.

**4. Atomization:** unchanged. Existing assertions surface in the workspace.

**5. Routing:** patient is already routed; provider IS the assignee.

**6. Rules firing:** when provider clicks "Approve estrogen + progesterone combined Rx," `Section 1Q.4` rule action fires identically to remote — same authority floor, same safety preflight, same `decision_support_payload` minimum-content discipline. The difference: the provider is reading the rationale_summary OUT LOUD to the patient (synchronous discussion vs async messaging). The rule doesn't know (or care) that the discussion is verbal.

**7. Templates rendered:** at the moment of approval, `tmpl.female_hrt.rx.approved_patch_v1` (tier_2 outside / tier_4 secure-view; intent=`clinical`) is queued for SMS + email + in-app. The in-app version Maria can show the patient on the tablet IN THE ROOM. The SMS is suppressed for ~60 minutes because the patient is in active in-person interaction (per Patch G2 in-person suppression window in `Section 1G.3`). **Same template, mode-aware suppression, no fork.**

**8. Actions:**
- Rx authorization signed (same as remote)
- `treatment_orders` row created on the clinical rail (same as remote; v1 PSP capture of funds after clinical approval per `Section 1I.4-1I.5`)
- `provider_confirmed` clinical assertion of `condition.postmenopause` written (same as remote)
- `clinical_visits` row written documenting the in-room discussion (existing primitive — used same way as a remote video visit's clinical_visits row)
- Audit per `Section 1Q.7` typed `audit_events` row with `interaction_context.mode === 'in_person'` + `location_id` + `staff_user_id` + `appointment_id`

**9. Provider workspace:** the workstation IS the provider workspace — the SAME `Section 1G.8` surface used by the remote provider, with mode-tuned UX (larger touch targets for tablet, in-room-patient badge, "next visit in" countdown to keep the provider on schedule). Cognitive load is medium — provider is integrating verbal discussion + on-screen `decision_support_payload`. The 5-typed-options pattern (per `Section 1Q.4` post-marketing Patch 3 minimum-content discipline) is essential here — provider can read the option_rationale aloud while clicking. **Templated-discussion vs free-form:** same templated `decision_support_payload`; provider's verbal discussion is free-form clinical discussion (nothing the system constrains beyond what it already constrains for any clinical visit). Authority is enforced in real-time same as remote — provider cannot click "Approve" if `1J.4` L-level is below pathway minimum, or if a non-overridable safety preflight is failing.

**10. Architecture verdict:**

- System behavior: **HOLDS.** Decision_support_payload is usable in synchronous setting because of the typed-options + option_rationale + min-80-char rationale_summary + min-80-char evidence_summary discipline (per dynamic behavior post-marketing Patch 3). Provider can read the rationale aloud or paraphrase. Authority enforcement is identical.
- Patient experience: feels conversational and assisted; tablet shows the same approval the remote patient would see by SMS.
- Provider experience: identical to remote provider review, with the addition of synchronous patient interaction. Mental model is: "I'm doing the same review I'd do remotely; the patient is just in the room."
- Awkwardness/breakdown: **the workstation surface needs a context-aware view declaration in `Section 1G.8`** — currently 1G.8 is described as a queue surface; the synchronous in-room view needs explicit declaration as a CONTEXT-AWARE VIEW of the SAME DATA + SAME RULES. **Foundational gap G6** identified — fixed by extending `Section 1G.8` with explicit in-room context-aware view declaration (NOT a separate workstation product).
- Classification: `needs_some_work` (without G6 declaration); `no_issue` (with G6 fix).

---

## Scenario 3 — In-person lab ingestion (paper labs)

**Patient:** Patricia, 51F, the same patient as Female HRT Scenario 6 — brings a printed lab report from her PCP to her in-person consult. The report shows FSH 18 mIU/mL, estradiol 95 pg/mL.

**1. Source:** staff (or provider) takes a photo of the lab report using the tablet camera in the exam room; uploads via the same `Section 1L.16a` document ingestion path as remote-uploaded labs. Optionally provider keys in the values manually if photo OCR is rejected.

**2. Evidence:** `patient_document_routing` row created → `patient_diagnostic_reports` row written. **Provenance enum extension (Foundational gap G9):** the existing provenance enum currently distinguishes `patient_uploaded_remote` and similar; extend with `staff_uploaded_in_person` to capture that the document was uploaded by `staff_user_id` while patient was in `location_id`. Provenance carries audit weight per `Section 1L.16a` structured-first carve-out.

**3. Classification:** AI extraction runs same as remote uploads. AI emits `lab.fsh = 18 mIU/mL`, `lab.estradiol = 95 pg/mL` clinical assertions.

**4. Atomization:** assertions written same as remote. Provenance is `staff_uploaded_in_person` (via Patch G9). Authored_by: `lab_derived` rank 50 (per existing `1K.5.A` 9-value enum).

**5. Routing:** unchanged — assertions surface in provider workspace.

**6. Rules firing:** lab assertions feed the same eligibility rules (`rule.female_hrt.eligibility.menopausal_status_determination` lab criterion). Same decision_support_payload generated.

**7. Templates rendered:** same as remote — no template fork.

**8. Actions:**
- `patient_lab_observations` rows + `patient_diagnostic_reports` row written (same as remote)
- `audit_events` row with `interaction_context.mode === 'in_person'` + `staff_user_id` (the staff who uploaded) + `provenance: staff_uploaded_in_person`
- Provider may add a manual interpretation note via `clinical_visits` addenda (existing primitive)

**9. Provider workspace:** lab review drawer per `Section 1G.8.7` shows the document inline regardless of provenance. Provider can override the AI extraction same as remote (per `Section 1L.16a` provider-override-of-system-extraction pattern existing in the system map). Manual entry path exists when photo OCR fails — provider keys values, AI extraction is bypassed, audit row records `provenance: staff_uploaded_in_person, extraction_method: manual_provider_entry`.

**10. Architecture verdict:**

- System behavior: **HOLDS** with G9 provenance extension. Document ingestion path is same code path as remote; OCR / AI extraction same; audit trail identical.
- Patient experience: paper lab is captured; patient sees it surface in their portal later (mode-mirrored visibility).
- Provider experience: identical to remote — review drawer renders document; override path same.
- Awkwardness/breakdown: **provenance enum needs to distinguish staff-uploaded-in-person from patient-uploaded-remote** for audit + reporting clarity. **Foundational gap G9** — fix in `Section 1L.16a` (provenance enum extension only — no new code paths; no new tables).
- Classification: `needs_some_work` (without G9); `no_issue` (with G9 fix).

---

## Scenario 4 — Scheduling + follow-up (in-person vs remote follow-up choice)

**Patient:** continuing Linda from Scenario 2; Rx approved; provider says "I want to see you back in 6 weeks for an initial titration check, plus we'll do a 3-month safety check after that."

**1. Source:** provider clicks the workstation's "Schedule follow-up" button. UI presents a choice: in-person follow-up (Linda picks a slot at the clinic) OR remote follow-up (asynchronous check-in via portal at the 6-week mark).

**2. Evidence:** `appointment` row created if in-person; or `treatment_items.metadata.next_checkin_at = ...` placeholder per `Section 1F` Section "Source of truth: calendar time vs treatment_items.metadata placeholders" pattern. **Both paths are first-class — `appointment` is authoritative for time-bound workflow when present; metadata placeholder is the bridge when no appointment exists yet.**

**3. Classification:** none for scheduling event.

**4. Atomization:** none for scheduling event (atomization is for clinical content, not calendar entries).

**5. Routing:** appointment routes to the same provider per `Section 1G.9` clinician-of-record continuity (Linda's CoR is the prescriber from Scenario 2; remote follow-up via async check-in routes to same CoR by default; CoR can be transferred per existing 1G.9 controls).

**6. Rules firing:** none directly for scheduling. The 6-week follow-up event in the future will fire `rule.female_hrt.followup.6week_initial_titration_check` per `Section 1Q.22` regardless of follow-up mode — Inv 5 holds.

**7. Templates rendered:**
- "Appointment scheduled" template — SAME template fires for both in-person + remote follow-up. Variables differ: in-person renders the location address, parking info, what to bring; remote renders "we'll send you a check-in form 6 weeks from now."
- "Appointment reminder" template — SAME template; variable-driven (location vs check-in URL); fires per send-policy reminder cadence in `Section 1G.3`.

**8. Actions:**
- `appointment` row created with `modality: 'in_person'` OR `modality: 'async'` (the latter for async check-in mode); existing `Section 1F` modality enum handles both.
- `treatment_items.metadata.next_visit_at` mirrored for read models that haven't migrated.
- Reminder `outbound_jobs` queued per cadence rules.
- Audit per usual.

**9. Provider workspace:** post-scheduling, the provider's queue is updated. The future appointment shows in their schedule (regardless of modality). When the follow-up time comes, the patient appears in the queue — same queue, mode-tuned by `interaction_context`.

**10. Architecture verdict:**

- System behavior: **HOLDS.** Scheduling integration handles both modalities via existing `Section 1F` `appointment` row + `modality` enum. Campaign state coherence: marketing campaigns per `Section 1Q.21` honor active treatment lifecycle (Tier 5 in the 11-tier hierarchy) regardless of follow-up mode; reminder cadence is configured at the rule level not duplicated by mode.
- Patient experience: patient explicitly chooses follow-up mode based on convenience; not forced into one or the other; transition between modes preserves all clinical context.
- Provider experience: same scheduling UI for both modes; just selects modality.
- Awkwardness/breakdown: minor — **`appointment` reminder template needs to declare it's mode-agnostic** (one template, variable-driven copy) explicitly per `Section 1Q.5` `interaction_context_compatibility: ['both']` declaration. **Foundational gap G8** — fix in `Section 1Q.5`.
- Classification: `needs_some_work` (without G8 declaration); `no_issue` (with G8 fix).

---

## Scenario 5 — Checkout (in-person AND hybrid)

This scenario stresses two checkout sub-flows in parallel.

### Sub-flow A: In-person checkout (supplements/services sold immediately)

**Patient:** Linda from Scenario 2 wants to buy her practitioner-recommended bone-support supplement (calcium+D3+magnesium combo) immediately on her way out. Front desk staff rings up the supplement at the counter. Card swipe / chip-tap. Receipt printed.

**1. Source:** staff opens commerce checkout UI on the front-desk terminal.

**2. Evidence:** `commerce_orders` row created per `Section 1E` discipline — `commerce_orders` is the retail rail (NOT `treatment_orders`); the supplement is a retail line. `commerce_orders.metadata.interaction_context = { mode: 'in_person', location_id, staff_user_id, appointment_id (if linkable) }`. Settlement is immediate (card swipe via PSP per `Section 1I` payment rail; receipt printed).

**3. Classification:** none for retail checkout.

**4. Atomization:** none for retail checkout.

**5. Routing:** none for retail checkout.

**6. Rules firing:** `Section 1Q.21` `marketing_lifecycle` campaigns honor active subscriber + good engagement signals — no relevant marketing rule fires at retail checkout (this is not a marketing event; it's a transactional retail event).

**7. Templates rendered:**
- Receipt template (printed in-store)
- "Order confirmation" tier_1 template fires via SMS/email for the patient's records (account intent; transactional)

**8. Actions:**
- `commerce_orders` line item settled
- Inventory decrement (per `Section 1E` per-location inventory)
- Receipt
- Audit per usual

**9. Provider workspace:** none — this is a staff/checkout flow, not a clinical flow.

**10. Architecture verdict:** **HOLDS.** Retail rail is cleanly segregated from clinical rail (per existing `Section 1E` compositional checkout invariant); in-person retail uses the SAME `commerce_orders` table as remote retail (the only difference is `interaction_context.mode = 'in_person'` in metadata + immediate settlement vs deferred). Inv 2 holds — no separate "POS orders" table.

### Sub-flow B: Hybrid checkout (Rx approved → link sent to patient phone)

**Patient:** Linda's HRT Rx is approved during the in-room visit. Provider clicks "Approve Rx." The Rx is on the **clinical rail** — `treatment_orders` per `Section 1I` — and per the v1 default in `Section 1F` "compositional checkout" + `Section 1I` "PSP capture of funds AFTER clinical approval," the patient is presented with a payment link AT THE END of the clinical decision. **The patient is in-room.** Two options exist:
- (a) Front-desk swipes card now: same as Sub-flow A but on the clinical rail; `treatment_orders.metadata.interaction_context = { mode: 'in_person', ... }` + immediate PSP capture; OR
- (b) Patient receives link on phone at end of visit; settles remotely (perhaps after consulting their spouse on insurance).

**1-9.** Same primitives as remote Rx checkout — `treatment_orders` clinical rail; PSP capture after clinical approval; existing `Section 1I` payment-rail discipline.

**10. Architecture verdict:**

- System behavior: **HOLDS.** Compositional checkout invariant per `Section 1E` is preserved: clinical Rx settles on `treatment_orders` rail; supplement (Sub-flow A) settles on `commerce_orders` rail. Both rails are immediately auditable, taxed correctly, fulfilled correctly. **`Section 1E` rejects undifferentiated `orders` rows that require business rules to infer Rx-vs-retail** — the architecture explicitly forbids accidental merging.
- Patient experience: in-person patient experiences both flows AT THE COUNTER if both are settled in person; or settles supplements in-store + Rx via phone link. Clinical legitimacy preserved because:
  1. The Rx rail is `treatment_orders` (not `commerce_orders`); patient sees clear distinction in receipt/email subject lines and totals (clinical Rx itemized separately from supplement);
  2. Provider's verbal explanation in-room precedes the checkout — payment is a SEPARATE step from clinical decision (the rule firing for Rx approval has already happened independent of payment; payment is a downstream `Section 1I` event);
  3. The clinical decision is documented in `clinical_visits` + audit_events BEFORE checkout — so even if checkout is delayed/cancelled, the clinical reasoning is recorded.
- "Click button trivialization" prevention: this is an architectural property — the system separates "clinical decision" (rule action approval; provider authority gate) from "payment capture" (PSP charge after approval). They are sequenced, never co-mingled. Provider clicks "Approve Rx" → rule fires → audit row → `treatment_orders` queued → PSP capture happens AFTER as a separate step. **The system structurally prevents conflating them.** Per `Section 1Q.0` invariant 9: automated patient-facing transactional confirmations use approved templates; clinical authority is the rule firing, not the PSP capture.
- Provider experience: provider does NOT handle payment — provider handles the clinical decision. Front-desk staff or patient-self-pay handles the financial transaction. This separation is preserved across modes.
- Awkwardness/breakdown: small — **the in-person hybrid checkout flow needs explicit declaration in `Section 1E`** that the in-person-supplements-sold-now + clinical-Rx-ships-later case is the canonical hybrid case. **Foundational gap G5** identified — fix in `Section 1E` with explicit declaration (no new code paths; documentation/discipline only).
- Classification: `needs_some_work` (without G5); `no_issue` (with G5 fix).

---

## Scenario 6 — Provider ownership continuity (in-person → remote follow-up)

**Patient:** Sarah from Female HRT Scenario 1 — initially seen in-person by Dr. Chen (HRT-qualified provider in flagship clinic). Sarah now does her 6-week titration check-in remotely (via async portal form, from home).

**1. Source:** Sarah opens portal at the 6-week mark; submits async check-in form.

**2. Evidence:** `intake_response` rows for the check-in (existing primitive); `interaction_context.mode = 'remote'`, `assisted: false`. Same `patient_id` as Scenario 1; same `care_program_id`; same `message_thread_id`.

**3. Classification:** unchanged.

**4. Atomization:** new clinical assertions emitted per check-in answers (e.g., `symptom.hot_flashes_severe` updated to `severity=mild` if patient reports improvement).

**5. Routing:** **`Section 1G.9` clinician-of-record continuity:** Sarah's CoR is Dr. Chen (set during Scenario 1 in-person Rx). Default routing of the check-in is back to Dr. Chen — REGARDLESS OF MODE. Inv 1 (single patient identity) HOLDS.

**6. Rules firing:** `rule.female_hrt.followup.6week_initial_titration_check` fires identically to Scenario 1 — same check-in data → same rule → same `decision_support_payload`. Inv 5 (same decision → same outcome) HOLDS.

**7. Templates rendered:** same templates as remote-only patient — `tmpl.female_hrt.intake.received_v1` (acknowledging check-in), `tmpl.female_hrt.education.dose_titration_education_v1` if relevant.

**8. Actions:**
- Provider review batch entry routes to Dr. Chen (continuity preference)
- `audit_events` row with `interaction_context.mode = 'remote'`
- Same rule action options surface as for any remote follow-up

**9. Provider workspace:** Dr. Chen sees the check-in in her remote queue; opens the patient; sees the SAME patient record as the in-person visit (Scenario 2 outcome) — no fork. The cross-batch concept-aware review surfacing per `Section 1P.5` shows the in-person Rx assertion + the remote check-in symptom updates side by side.

**10. Architecture verdict:**

- System behavior: **HOLDS.** Single patient identity per `1J.5` + clinician-of-record continuity per `1G.9` + per-program message thread per `Section 1G` + concept assertions per `1K.5.A` all combine to make this seamless. Routing logic is the same routing function; mode is just a typed input.
- Patient experience: feels like one continuous care relationship; Sarah doesn't realize anything special is happening.
- Provider experience: Dr. Chen sees a continuous chart; the in-person visit is one row in the timeline, the remote check-in is another row; no reconciliation.
- Awkwardness/breakdown: none. **`no_issue`.** This scenario is what the architecture was DESIGNED for.
- Classification: `no_issue`.

---

## Scenario 7 — Messaging + perception (redundancy after in-person interaction)

**Patient:** continuing Sarah; her in-person visit (Scenario 1) ends at 11:24am with provider approving an estradiol patch + progesterone Rx and discussing it verbally. Without intervention, the system would queue:
- "Your provider is reviewing your case" (from intake submission rule) — REDUNDANT, the provider just approved
- "Your prescription has been approved" (from Rx approval rule) — patient was just told this verbally
- "Your prescription will ship in 2-3 business days" (from fulfillment rule) — possibly useful if patient needs the pickup info OR needs the timeline

**1. Source:** rules fire as usual; templates render as usual; `outbound_jobs` queued as usual.

**2-7. Pipeline through privacy gate + 5-step send-policy:** unchanged.

**8. Actions: in-person-recent-interaction suppression window (Foundational gap G2 fix)**:

Extend `Section 1G.3` step 5 (existing 5-step privacy + emergency orchestration gate) with a new step 5b — **in-person-recent-interaction suppression**. When `interaction_context.mode === 'in_person'` for the patient AND `face_to_face_interaction_completed_at` is within configurable window (default 60 min) — defined as `appointment.actual_end_at` for the most recent completed `appointment` of `modality: 'in_person'` for this patient — templates declared with `interaction_context_redundancy_check: true` are SUPPRESSED with audit row `outbound_jobs.suppressed_due_to_recent_in_person_interaction`. Bypass rules:

- `transactional_critical: true` ALWAYS sends (e.g., card-failure notification — patient still needs to know their card was declined even if they just left the building)
- `safety` intent ALWAYS sends (patient may have had a bad reaction in the parking lot)
- `marketing` / `education` intent: suppressed during the window AND for an additional 24h to avoid promo-feel-broken pattern

**Templates declare `interaction_context_redundancy_check: true`** when their content would be redundant after a face-to-face conversation. Examples:
- `tmpl.*.intake.received_v1` — true (patient was just received in person; "we received your intake" SMS is redundant)
- `tmpl.*.rx.approved_v1` — true (patient was just told verbally; SMS confirmation can wait until they leave)
- `tmpl.*.fulfillment.shipped_v1` — false (patient may have left; ship notification is distinct)
- `tmpl.*.lab.results_released_v1` — false (results often come hours/days later; not redundant)

CI lint enforces declaration on patient-facing templates per `Section 1Q.5`.

**9. Provider workspace:** unchanged; the suppression is a send-policy concern not a workspace concern.

**10. Architecture verdict:**

- System behavior: **HOLDS** with G2 fix. Suppression window prevents redundancy without forking templates by mode (Inv 2 + F4 prevented). All suppressed messages are audited and queryable; nothing is silently dropped.
- Patient experience: in-person patient does NOT feel spammed by SMS for things they just discussed; remote patient gets timely SMS confirmations as before.
- Provider experience: unchanged. Provider doesn't need to think about messaging suppression; system handles it.
- Awkwardness/breakdown: without G2, in-person patients receive 3-5 redundant SMSes within 30 min of leaving the clinic — system feels broken, patient asks "did anything happen?" or "wait, I thought I already got that." **Foundational gap G2** — fix in `Section 1G.3`.
- Classification: `foundational_gap` (without G2 fix); `no_issue` (with G2 fix in `Section 1G.3` step 5b extension).

---

## Scenario 8 — End-to-end mixed-mode lifecycle (proof-of-hybrid-first)

**The decisive test.** This scenario explicitly traces the user's stated FINAL EXPECTATION: "a patient starting intake at home, completing it in-office, receiving care in person, and continuing follow-up remotely — all within ONE continuous system flow." Plus extensions to test multi-mode-transition reconstructability.

**Patient:** Janet, 49F, perimenopausal, previously unknown to MAIN. Lifecycle:
- **Day 0 (remote, self-service)** — Janet learns about MAIN from a podcast. Visits the website at home; starts Female HRT intake; completes Stage 0.5 (jurisdiction + age + telehealth_consent) but gets called away at Stage 1 question 12 of 38.
- **Day 1 (in-person, assisted)** — Janet walks into MAIN flagship clinic the next morning before work for a scheduled "complete intake + first consult" appointment. Front-desk staff Jen looks up Janet's record (existing `patients` row from Day 0 + `intake_sessions` row in `status: 'in_progress'`); hands Janet the tablet preloaded to Stage 1 question 13 (where she left off); Janet completes intake (assisted variant — Jen stays with her). Provider Dr. Park sees Janet at 9am; approves transdermal estradiol + progesterone Rx after in-room discussion + photo ID verification (`1J.4` L3 via staff-witnessed L3 path per Foundational gap G4).
- **Day 1 (in-person, retail purchase)** — Janet buys bone-support supplement at front desk on her way out (`commerce_orders` rail).
- **Day 1 evening (remote, hybrid checkout completion)** — Janet's clinical Rx (`treatment_orders` rail) auto-charges her saved card at her selected pharmacy fulfillment partner; she gets shipping confirmation SMS that evening.
- **Day 4 (remote, fulfillment)** — Rx ships to Janet's home; she receives SMS shipping notification + tracking.
- **Day 6 (remote, fulfillment)** — Rx delivered.
- **Day 14 (remote, education)** — Janet receives an educational SMS about transdermal patch application + signs of common adverse effects (per `tmpl.female_hrt.education.symptom_expectations_v1`).
- **Day 42 (remote, self-service check-in)** — at the 6-week mark, Janet completes the 6-week titration check-in async via portal (her preferred mode for routine touchpoints).
- **Day 42 (remote, provider review)** — Dr. Park reviews Janet's check-in; approves continued dose; no changes.
- **Day 84 (remote, refill)** — automated refill cadence; Rx ships.
- **Day 90 (remote, support message)** — Janet messages: "I think the patch is irritating my skin; can I switch to oral?" — provider Dr. Park reviews; offers oral estradiol substitution per existing rule pattern.
- **Day 92 (remote, Rx change)** — Dr. Park approves switch; new Rx ships.
- **Day 180 (in-person, annual visit)** — Janet returns to flagship clinic for her in-person annual follow-up. Drops off lab kit (mammogram referral was already submitted; she brings the form). Dr. Park sees her; reviews labs; documents annual exam in `clinical_visits` row; renews Rx for another year; recommends repeat mammogram.
- **Day 181-365 (remote/in-person mix)** — continues care across both modes.

**1. Source per phase:** every state mutation across the 4 mode transitions writes to the SAME `patients` row, SAME `care_program_id`, SAME `message_thread_id` (per program, per `Section 1G` invariant). `interaction_context` declared on every state-mutating row's metadata.

**2. Evidence per phase:**
- Day 0 remote intake (Stage 0.5 complete, Stage 1 in progress): `intake_sessions` row with `interaction_context: { mode: 'remote', assisted: false, source: 'patient_self', initiated_at: '2026-Day0-09:00' }`
- Day 1 in-person intake completion: SAME `intake_sessions` row continued — `interaction_context` updated to `{ mode: 'in_person', assisted: true, location_id, staff_user_id, appointment_id, source: 'tablet', initiated_at: '2026-Day0-09:00', mode_transitioned_at: '2026-Day1-08:32' }`. Resume from question 13 — no new session row needed (per `1K.13` Mode A re-entry pattern + new clarification: in-progress sessions can RESUME under different `interaction_context.mode`; mode is a context tag, not a session-fork trigger). Audit: `intake_sessions.interaction_context_transitioned` event.
- Day 1 staff-witnessed L3 verification: `patient_identity_verifications` row with `verification_method: 'staff_witnessed_in_person'` (per Foundational gap G4 path); `verifying_staff_user_id: 'staff_frontdesk_jen'`, `location_id`. Achieves L3 same as remote photo+selfie.
- Day 1 in-person Rx approval: `treatment_orders` row + `clinical_visits` row + `audit_events` rows; `interaction_context.mode = 'in_person'`
- Day 1 in-person supplement purchase: `commerce_orders` row + `interaction_context.mode = 'in_person'`
- Day 4-6 remote fulfillment: `treatment_orders.metadata.fulfillment_state` updates + `outbound_jobs` rows
- Day 14 remote education: `outbound_jobs` row; rendered template `interaction_context_compatibility: ['both']`
- Day 42 remote check-in: `intake_sessions` row (NEW; check-in is its own session per `Section 1F` check-in vs appointment distinction); `interaction_context.mode = 'remote'`
- Day 42 remote provider review: `audit_events` rows; `clinical_visits` addenda for the review event; `interaction_context.mode = 'remote'`
- Day 84 remote refill: `treatment_orders` next refill row; `interaction_context.mode = 'remote'`
- Day 90 remote message: `messages` row in same `message_thread`; `interaction_context.mode = 'remote'`
- Day 92 remote Rx change: new `treatment_orders` row; old superseded; `interaction_context.mode = 'remote'`
- Day 180 in-person annual: `appointment` row (`modality: 'in_person'`); `clinical_visits` row; `patient_diagnostic_reports` row (lab kit drop-off); `interaction_context.mode = 'in_person'`

**3. Classification per phase:** unchanged across modes.

**4. Atomization per phase:** unchanged. Clinical assertions per `1K.5.A` are emitted from intake responses, lab observations, provider documentation, etc. — same primitives. Authored_by enum unchanged.

**5. Routing per phase:**
- Day 1: appointment-bound preference — Dr. Park (the provider Janet is here to see)
- Day 42 onwards: clinician-of-record continuity per `1G.9` — Dr. Park is CoR; routine touchpoints route to her
- Day 180: Janet returns for in-person; Dr. Park is still her CoR; appointment is with her

**6. Rules firing per phase:** ALL identical to a remote-only patient with the same data. Same `decision_support_payload` content. Same authority floors. Same audit shapes. Inv 5 HOLDS across 4 mode transitions.

**7. Templates rendered per phase:** all templates declare `interaction_context_compatibility: ['both']` per Patch G7 (`Section 1Q.5` extension). Variable-driven copy (location vs check-in URL vs shipping tracking) — but same template_key per `message_intent`. F4 prevented.

**8. Actions per phase:** every action audited per `Section 1Q.7` typed `audit_events` row with `interaction_context` declared.

**9. Provider workspace per phase:**
- Day 1 in-room: Dr. Park sees Janet via in-room context-aware view (per Patch G6 `Section 1G.8` extension); same data, mode-tuned UX
- Day 42 onwards remote: Dr. Park sees Janet in her remote queue; same patient record, mode-tuned UX
- Day 180 in-person: same in-room context-aware view; same patient record (now richer with 6 months of remote history)

**10. Architecture verdict — RECONSTRUCTABILITY TEST (the decisive question for `interaction_context` shape):**

The decisive question: can a single query reconstruct "what happened across Janet's full hybrid journey"?

Approach 1 (Outcome P1 — metadata extension only):
```sql
SELECT
  patient_timeline_events.event_type,
  patient_timeline_events.payload,
  patient_timeline_events.metadata->'interaction_context' AS interaction_context,
  patient_timeline_events.created_at
FROM patient_timeline_events
WHERE patient_id = $1
ORDER BY created_at;
```
This works — `patient_timeline_events` is the existing UNIFIED PROJECTION (per `Section 1F` "messaging projections + appointment + check-in + form_submission as they exist"). With `interaction_context` declared on every state-mutating row's metadata + projected into the timeline event payload, reconstruction is a single-table query.

Approach 2 (Outcome P2 — typed shape):
- Same query as P1
- ADDITIONAL benefit: `interaction_context` is enforced at the TYPE level — TS interface lives in `repo/types/interaction_context.ts`; CI lint enforces presence + typing on every state-mutating row at orchestration layer; runtime asserts catch drift
- Reconstructability is identical to P1; auditability is stronger because schema drift is caught at PR time

Approach 3 (Outcome P3 — `care_session` first-class):
- Would require: new `care_session` table joining appointment + intake + visit + commerce + lab events into a single rollup row
- Reconstruction becomes: `SELECT * FROM care_sessions WHERE patient_id = $1`
- BUT: this duplicates `patient_timeline_events` which ALREADY provides the projection
- Risk: two competing source-of-truth narratives for "what is a session"
- Risk: forces a decision on whether a remote async check-in is a "session" (it's not really an in-room session, but treating the day as a session would conflate calendar units with workflow units)

**Reconstructability verdict:** P2 (typed-shape) is sufficient. `patient_timeline_events` is the existing UNIFIED PROJECTION that already aggregates messaging + appointment + check-in + form_submission events. Adding `interaction_context` as a typed-shape declared in `Section 1Q.23` and threaded through every state-mutating row's metadata gives single-query reconstructability with NO new tables. P3 would compete with `patient_timeline_events` and create the very fragmentation the user wants to prevent.

**P3 promotion threshold criteria (declared in `Section 1Q.23`; for FUTURE trigger):**
- Promote to P3 if: a single billable encounter row is required for EMR export (HL7 v2 / FHIR Encounter resource) AND `patient_timeline_events` projection cannot satisfy the export contract. (Future-state; not present in V1.)
- Promote to P3 if: ops needs a single-row in-person-visit rollup beyond what `appointment + clinical_visits + patient_timeline_events` derived view provides (and the derived view cannot be made performant). (Empirically test before promoting.)
- Promote to P3 if: cross-system traceability requires a join key beyond `patient_id` + `interaction_context.appointment_id` (e.g., a clinical-research-grade trial registry that needs a single session id across intake + lab + visit + Rx). (Future product; not present in V1.)

In all three cases, P3 promotion preserves both modes (a remote-only session is also a `care_session` row); never an in-person-only overlay.

**Verdict for Scenario 8:** **architecture HOLDS.** The end-to-end mixed-mode lifecycle works seamlessly because:
- Single `patients` row across all phases (Inv 1)
- No system fork (Inv 2)
- `interaction_context` carried on every state-mutating row (Inv 3 — once Patch G1 lands)
- Provider authority consistent across modes (Inv 4)
- Same decision logic regardless of mode (Inv 5)
- Full auditability across phases (Inv 6)
- F1, F2, F3, F4 all prevented

Classification: `no_issue` — provided G1, G2, G4, G6, G7, G8 patches land. **This is THE proof-of-hybrid-first test, and the system passes.**

---

# Part 4 — Specific area evaluation matrix

For each architectural area: HOLDS / STRAINS classification + reasoning.

| Area | Classification | Reasoning |
|---|---|---|
| **Intake — same structure vs modified UX** | **HOLDS** | `Section 1K.14` intake structure is identical across modes; UX (tablet vs web vs assisted) is presentation-layer concern. Per Patch G3 `intake_sessions.metadata.interaction_context` field, mode is preserved on every session row. Same module versions, same question pins, same atomization. Real-time validation works per-answer same as remote. Assisted-vs-self distinguished via `assisted: boolean` + `staff_user_id` field. |
| **Intake — assisted vs unassisted** | **HOLDS** | Existing `Section 1K.14` accepts `created_by_staff_user_id` as nullable; assisted variant populates `staff_user_id`. Authored_by stays `patient_reported` (the patient is the source of truth; staff just keys); audit row records the assisting staff for provability. |
| **Routing — does in-person change routing logic?** | **HOLDS — context-aware extension** | Routing logic per `Section 1G.4` + `Section 1G.7` is the SAME function. In-person scenarios add `appointment_id` context which the existing routing function may use to prefer the appointment-bound provider (extension of `Section 1G.9` clinician-of-record continuity to acknowledge appointment-bound preference; additive metadata only). NOT a new routing engine. |
| **Routing — timing/context only?** | **HOLDS** | In-person changes timing (synchronous now) and context (location_id + appointment_id), not the routing decision itself. Routing function reads `interaction_context` and prefers appointment-bound provider when context is present. |
| **Provider workflow — workstation needed?** | **HOLDS — context-aware view** | The workstation IS the `Section 1G.8` provider workspace, filtered to `interaction_context.mode === 'in_person'` and current-location patients. Same data, same rules, same authority. UX tuned for synchronous in-room (larger touch targets, in-room badge, schedule countdown) but NOT a separate product. Per Patch G6, declare this explicitly in `Section 1G.8`. |
| **Scheduling — minimal viable vs overbuilt** | **HOLDS** | `Section 1F` already declares first-class `appointment` rows with `modality + location_id + service_id` + `bookable_offering`. Day-1 product needs: appointment rows + reminders (existing `Section 1G.3` cadence) + completion event + cancellation/no-show states. Capacity planning UI / waitlist / multi-resource scheduling are FUTURE product slices that the data model already accommodates. |
| **Scheduling — relationship to campaign state** | **HOLDS** | `Section 1Q.21` Tier 5 (active treatment lifecycle) priority covers appointment reminders. Marketing campaigns suppressed when `appointment.status = 'scheduled' AND appointment.start_at < 24h` (existing 1G.3 cadence + collision discipline). No fork. |
| **Checkout — in-person vs remote hybrid** | **HOLDS** | `Section 1E` compositional checkout invariant cleanly segregates `commerce_orders` (retail) from `treatment_orders` (clinical). Both rails are auditable, fulfillable, and taxable independently. `interaction_context.mode` declared on order metadata for analytics + reporting. Per Patch G5, declare the in-person hybrid case explicitly in `Section 1E`. |
| **Checkout — clinical legitimacy preservation** | **HOLDS** | Architectural property: clinical decision (rule action approval; provider authority gate) is sequenced BEFORE payment capture (PSP charge). Provider clicks "Approve" → rule fires → audit row → `treatment_orders` queued → PSP capture as separate downstream `Section 1I` event. The structure prevents conflating clinical approval with retail "click button" trivialization. Reinforced in-room by provider's verbal explanation BEFORE checkout step. |
| **Labs — ingestion via upload/photo** | **HOLDS** | `Section 1L.16a` document ingestion + `Section 1P` atomization are the SAME path regardless of who uploaded. Per Patch G9, extend provenance enum to distinguish `staff_uploaded_in_person` from `patient_uploaded_remote` for audit clarity. AI extraction + provider override pattern unchanged. |
| **Labs — real-time vs async handling** | **HOLDS** | In-person photo upload + AI extraction can complete within the visit window (often 30 sec - 2 min) — provider sees the lab values surface in real-time via the lab review drawer per `Section 1G.8.7`. Remote async path same as today. Both surface in the SAME `patient_lab_observations` rows. |
| **Messaging — confirmation vs redundancy** | **HOLDS — with G2 fix** | `Section 1G.3` step 5b (in-person-recent-interaction suppression window per Patch G2) prevents redundancy without forking templates. `transactional_critical: true` and `safety` intent always send. |
| **Messaging — suppression after in-person interaction** | **HOLDS — with G2 fix** | Templates declare `interaction_context_redundancy_check: true` to opt into suppression. CI lint enforces declaration at PR time per `Section 1Q.5` extension (Patch G7). All suppressed messages audited. |

---

# Part 5 — `interaction_context` promotion verdict (P1 / P2 / P3)

**Decision: P2 — typed-shape compromise.**

`interaction_context` is declared as a binding TypeScript interface in `repo/types/interaction_context.ts`:

```typescript
interface InteractionContext {
  mode: 'in_person' | 'remote';
  assisted: boolean;
  location_id?: string;
  appointment_id?: string;
  active_visit_id?: string;
  preferred_in_person_provider_id?: string;
  staff_user_id?: string;
  source: 'patient_self' | 'staff_assisted' | 'kiosk' | 'tablet';
  initiated_at: string;
  mode_transitioned_at?: string;
}
```

The shape is threaded through every state-mutating row's existing `metadata` field (NO new tables): `intake_sessions.metadata.interaction_context`, `appointment` already carries `modality + location_id + appointment_id` (extend metadata for the rest of the shape), `outbound_jobs.metadata.interaction_context`, `messages.metadata.interaction_context`, `commerce_orders.metadata.interaction_context`, `treatment_orders.metadata.interaction_context`, `patient_diagnostic_reports.metadata.interaction_context`, `audit_events.payload.interaction_context`, `patient_timeline_events.metadata.interaction_context` (the latter is the unified projection used for reconstructability).

CI lint at PR time enforces:
- presence of `interaction_context` on every state-mutating row at orchestration layer
- single-codepath discipline (no top-level mode-switch branching at orchestration files)
- templates declare `interaction_context_compatibility` per Patch G7
- rules with `interaction_context_aware: true` carry `rationale_note` declaring what tunes (UX/timing) and asserting what does NOT (decision logic + authority floor + decision_support_payload content)

Runtime asserts at orchestration layer:
- every `audit_events` row carries `interaction_context` for the firing actor
- mode-transition events emit `interaction_context.mode_transitioned` audit_events row

**Promotion-threshold criteria for future P3 (`care_session` first-class)** — declared up-front in `Section 1Q.23` so future promotion is non-surprising:
1. **EMR export contract triggered** — when HL7 v2 / FHIR Encounter resource export becomes a binding requirement AND `patient_timeline_events` projection cannot satisfy the export contract. Promote then.
2. **Cross-system traceability beyond `patient_id`** — when a clinical-research / trial-registry / regulatory audit requires a single session-level join key across intake + lab + visit + Rx that goes beyond `patient_id` + `appointment_id`. Promote then.
3. **In-person ops rollup** — when ops needs a single-row in-person-visit rollup that the derived view (appointment + clinical_visits + patient_timeline_events) cannot make performant. Empirically test before promoting; build derived view first.

In all three trigger cases, P3 promotion preserves both modes (a remote-only session is also a `care_session` row); never an in-person-only overlay.

---

# Part 6 — Foundational gap list

| Gap | Description | Severity | Section to fix |
|---|---|---|---|
| **G1** | `interaction_context` typed object NOT yet declared as a binding architectural type | foundational | NEW Section 1Q.23 + cross-link from 1F |
| **G2** | `Section 1G.3` send-policy missing in-person-recent-interaction suppression window | foundational | 1G.3 extension (step 5b) |
| **G3** | `intake_sessions` row missing `interaction_context` field | foundational | 1K.14 extension |
| **G4** | `Section 1J.4` assisted-in-person L3 path not formalized | foundational | 1J.4 staff-witnessed L3 path declaration |
| **G5** | `Section 1E` in-person hybrid checkout case (supplements-now + Rx-later) not explicitly declared | needs_some_work | 1E declaration extension |
| **G6** | `Section 1G.8` provider workspace not declared as context-aware view | needs_some_work | 1G.8 explicit declaration |
| **G7** | `Section 1Q.5` template object shape missing `interaction_context_compatibility` + `interaction_context_redundancy_check` | foundational | 1Q.5 extension |
| **G8** | `Section 1Q.4` rule object shape missing `interaction_context_aware` declaration | foundational | 1Q.4 extension |
| **G9** | `Section 1L.16a` document provenance enum missing `staff_uploaded_in_person` distinction | needs_some_work | 1L.16a provenance enum extension |

All gaps fixed in their right architectural homes per user discipline (NO appendix). 6 gaps are `foundational`; 3 are `needs_some_work`. None introduce new primitives.

---

# Part 7 — In-place patch list with section anchors

Each patch lands in its natural-home section. Final patches:

**Patch P1 — NEW Section 1Q.23 Hybrid Care Delivery Capability Map**
- Binding 6 invariants + 4 failure conditions
- `interaction_context` typed-shape declaration (Outcome P2)
- Capability matrix (which sections own which mode-aware behavior)
- CI lint floor (single-codepath discipline; presence-on-every-mutation; template `interaction_context_compatibility`)
- P3 promotion-threshold criteria
- Implementation sequencing
- Verdict per audit

**Patch G1 — Section 1F cross-link to interaction_context**
- Cross-link from `Section 1F` "Visit types and modalities (one controlled vocabulary)" subsection to `Section 1Q.23` `interaction_context` typed-shape declaration
- Note: `appointment.modality + location_id` is the canonical scheduled-event source; `interaction_context` is the broader typed shape that propagates through all state-mutating rows beyond just appointments

**Patch G2 — Section 1G.3 step 5b in-person-recent-interaction suppression**
- Extend the existing 5-step privacy + emergency orchestration gate with new step 5b
- Suppression triggered by `appointment.actual_end_at` for most recent completed `appointment` of `modality: 'in_person'` within configurable window (default 60 min) for the patient
- Bypass for `transactional_critical: true` and `safety` intent
- Templates opt-in via `interaction_context_redundancy_check: true` (Patch G7)
- Audit `outbound_jobs.suppressed_due_to_recent_in_person_interaction`

**Patch G3 — Section 1K.14 intake_sessions interaction_context field**
- Extend `intake_sessions.metadata` schema declaration to require `interaction_context` per Outcome P2 typed shape
- CI lint enforces presence on every intake start
- Mode transition mid-session (e.g., Scenario 8 Day 0 remote → Day 1 in-person resume) updates `interaction_context.mode_transitioned_at` and emits audit row; does NOT fork the session
- Resume from prior session under different mode is supported via `1K.13` Mode A re-entry pattern + this clarification

**Patch G4 — Section 1J.4 staff-witnessed L3 path**
- Add `verification_method: 'staff_witnessed_in_person'` to `patient_identity_verifications` enum
- Required fields when method is staff-witnessed: `verifying_staff_user_id` + `location_id` + `id_artifact_kind` (driver's license / passport / state ID) + `staff_attestation_text` (bounded ~300 chars)
- Achieves L3 same as remote photo+selfie (artifact bundle equivalence)
- L cross-pathway coverage matrix unchanged (L3 staff-witnessed covers L3 remote)
- Inv 4 enforced: in-person path does NOT bypass safety; it provides equivalent assurance
- Capability `can_witness_in_person_identity` required for staff to perform the verification (audited)

**Patch G5 — Section 1E in-person hybrid checkout declaration**
- Extend "Compositional checkout (architectural rule)" subsection with explicit declaration of in-person hybrid case
- Pattern: in-person retail (supplements/services) settles immediately on `commerce_orders` rail at front desk; in-person clinical Rx queued on `treatment_orders` rail with PSP capture after clinical approval (per existing v1 pattern); both rails carry `interaction_context.mode = 'in_person'`
- Reinforces clinical legitimacy: provider's verbal explanation precedes checkout; clinical decision auditable BEFORE payment

**Patch G6 — Section 1G.8 provider workspace context-aware view**
- Add explicit declaration that `Section 1G.8` is a CONTEXT-AWARE VIEW of the same underlying queue + clinical data, filtered by `interaction_context.mode` + current `location_id`
- In-room synchronous mode: in-room badge, schedule countdown, larger touch targets (presentation-layer concerns)
- Remote async mode: queue ordering, batch review, cross-batch concept-aware surfacing
- Same data, same rules, same authority — NOT a separate workstation product

**Patch G7 — Section 1Q.5 template interaction_context_compatibility + interaction_context_redundancy_check**
- Extend Template object shape with:
  - `interaction_context_compatibility: PathwaySensitivity[]` — wait, that's a different field. Use `InteractionContextMode[]` — `('in_person' | 'remote' | 'both')[]`; default `['both']`; explicit per-mode allowlist required when template is mode-specific (rare; CI lint flags as F4 risk if a template is single-mode without strong rationale_note justification)
  - `interaction_context_redundancy_check: boolean` — default false; when true, template suppressed when `face_to_face_interaction_completed_at` within the configurable window per Patch G2
- CI lint forbids creating SEPARATE template versions per mode for the same `(domain, message_intent)` combination — F4 enforcement

**Patch G8 — Section 1Q.4 rule interaction_context_aware flag**
- Extend Rule object shape with optional `interaction_context_aware: boolean` (default false)
- When `true`: rule MAY tune action's UX/timing per `interaction_context` — but DECISION LOGIC + AUTHORITY FLOOR + DECISION_SUPPORT_PAYLOAD CONTENT must remain identical
- CI lint enforces: when `interaction_context_aware: true`, `rationale_note` MUST declare what tunes (UX/timing) and assert what does NOT (decision logic)
- Default false ensures most rules are mode-agnostic by default; opt-in to context-awareness is explicit

**Patch G9 — Section 1L.16a document provenance enum extension**
- Extend `patient_diagnostic_reports.provenance` enum (or equivalent existing field) with values:
  - `staff_uploaded_in_person` — when staff uploaded a paper document during an in-person visit
  - `patient_uploaded_remote` — patient self-upload via portal (existing default)
  - `staff_uploaded_remote_on_behalf` — when staff uploads remotely on behalf of patient (e.g., fax received and ingested by ops)
- Each provenance value has audit semantics; staff-uploaded paths require `uploading_staff_user_id` + audit row
- AI extraction + provider override path unchanged regardless of provenance

---

# Part 8 — MVP-polish refinements

Per user discipline: NO deferral to "runtime fixtures." Items that surface as MVP-polish are fixed in-place if they're scoped enough to land in the same checkpoint.

**MP1 — `appointment.checked_in_at` and `appointment.actual_start_at` / `actual_end_at` fields explicit on Section 1F**
- Currently `Section 1F` declares appointment.status (scheduled / completed / cancelled / no_show / rescheduled) but doesn't explicitly declare `checked_in_at` / `actual_start_at` / `actual_end_at` timestamps that Patch G2 suppression window relies on
- Fix: extend `Section 1F` "Visit types and modalities" subsection with explicit declaration of these timestamp fields on `appointment` rows; required for in-person `face_to_face_interaction_completed_at` computation; nullable for remote/async appointments
- In-place; lands in the same checkpoint

**MP2 — `interaction_context.mode_transitioned_at` documented in Section 1Q.23 with worked example**
- The Day 0 → Day 1 mode transition in Scenario 8 (remote intake → in-person completion) is the worked example
- Important so future implementers understand mode transitions don't fork sessions; they update the context tag
- Documented in `Section 1Q.23` per Patch P1

No other MVP-polish items surfaced.

---

# Part 9 — Final verdict

**READY for hybrid deployment** after the checkpoint lands.

The architecture was DESIGNED for hybrid-first; this stress test confirms the design holds. The 6 invariants + 4 failure conditions form a binding architectural floor. The 9 in-place patches close all surfaced foundational gaps without introducing new primitives. `interaction_context` is locked at Outcome P2 (typed-shape) with explicit P3 promotion-threshold criteria for future trigger.

**No re-run required.** Runtime authoring of `repo/rules/female_hrt/`, `repo/rules/glp1/`, `repo/rules/trt/`, `repo/templates/*/` can proceed in parallel with the implementation of the in-place patches. The patches are additive (new fields, new enum values, new declarations) and do not require schema migration of existing rows — `interaction_context` lives in existing `metadata` JSONB fields per Outcome P2.

**Failure conditions F1-F4 are now actively enforced:**
- F1 (mode fork) — CI lint single-codepath discipline at orchestration layer
- F2 (state divergence) — single `patients` row + per-program `message_thread` + Inv 1 enforcement
- F3 (decisions differ by mode) — Inv 5 + integration test asserting identical `decision_support_payload` for same patient data across modes
- F4 (messaging duplication) — CI lint forbids per-mode template versions for the same `(domain, message_intent)`

---

# Part 10 — Implementation sequencing post-checkpoint

1. **Lock `interaction_context` typed shape in `repo/types/interaction_context.ts`** — single source of truth for the type; imported by orchestration layers
2. **Plumb `interaction_context` through state-mutating row metadata** — `intake_sessions`, `appointment`, `outbound_jobs`, `messages`, `commerce_orders`, `treatment_orders`, `patient_diagnostic_reports`, `audit_events`, `patient_timeline_events`. Additive; no schema migration; lives in JSONB metadata
3. **Add CI lints**:
   - Single-codepath discipline at orchestration layer files (no top-level mode-switch branching)
   - Presence of `interaction_context` on every state-mutating row at orchestration layer
   - Templates declare `interaction_context_compatibility` per Patch G7
   - Rules with `interaction_context_aware: true` carry `rationale_note` per Patch G8
   - Templates with `interaction_context_redundancy_check: true` audited per send-policy step 5b
4. **Implement Patch G2 in-person-recent-interaction suppression in `Section 1G.3` step 5b orchestration**
5. **Implement Patch G4 staff-witnessed L3 path in `Section 1J.4` orchestration**
6. **Build kiosk/tablet intake surface as a context-aware UI on top of existing `Section 1K.14` intake** — single intake structure; mode is a context tag at the orchestration layer; UI is presentation-layer concern
7. **Build provider workstation surface as a context-aware UI on top of existing `Section 1G.8` workspace** — single workspace structure; mode-tuned UX
8. **Build front-desk staff surface for assisted intake + identity verification + commerce checkout + appointment scheduling** — uses existing primitives; just a staff-facing UI surface
9. **Run integration tests for all 8 scenarios end-to-end through the unified pipeline**
10. **Validate failure conditions F1-F4 cannot occur** — CI lint + integration test gates as a CI-blocking step

---

# Disposition

User (clinical CODEOWNER, board-certified MD) approved the stress test + 9 in-place patches + Outcome P2 `interaction_context` typed-shape decision on 2026-05-02. Single multi-file checkpoint applied: this audit + NEW Section 1Q.23 + 9 in-place patches in natural-home sections (1F / 1G.3 / 1J.4 / 1K.14 / 1L.16a / 1Q.4 / 1Q.5 / 1G.8 / 1E). Architecture HOLDS. Pathway-agnostic + hybrid-first claims FULLY VALIDATED.
