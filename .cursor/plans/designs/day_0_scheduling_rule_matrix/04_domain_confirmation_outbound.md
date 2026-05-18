# Domain 4 — Confirmation / Outbound Round-Trip Rules (Day 0)

**Date:** 2026-05-18
**Round:** 4 of 7
**Status:** AUTHORED — pending user + Knox review before Round 5 starts
**Index:** [00_index.md](00_index.md)
**Phase scope this file:** Day 0 fully detailed; M1-2 / M3-6 / FUTURE listed name-only in [§6 Deferred Rule Candidates](#6-deferred-rule-candidates).

## §0 Round 4 opening (per §2.21 read receipt template; binding)

> **Round 4 opening.** I have read:
>
> 1. `system_map_three_layers_60706286.plan.md` — Phase 1 hardening v10 (latest; documents Round 3.5 doctrine lock + §2.22 cross-vertical pressure-test + Amendment K hard closure gate)
> 2. `00_index.md` §1 + §2.0 through §2.22 — all locked rule-matrix doctrine
> 3. `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md` — 10 failure patterns (8 original + Pattern 9 known-pillars-as-discoveries + Pattern 10 narrow-framing-creep)
> 4. `.cursor/plans/doctrine/user_knox_preferences_locked_2026-05-17.md` — 18 explicit preferences NEVER re-litigate
> 5. `.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md` — 3-layer pattern reference
> 6. `docs/architecture/evolution_narrative.md` Volume 1 + `evolution_narrative_volume_2_2026-05-17.md` Volume 2 (Phase B.5 → Round 3.5 chronology)
> 7. `docs/architecture/communications_topology.md` — 3 patient surfaces / 6 outbound channels / 5 inbound channels
> 8. `docs/architecture/cns_action_orchestration_adr_2026-05-17.md` — Round 3.5 ADR
> 9. Prior Domain rule files — `01_domain_treatment_menu.md` / `02_domain_booking_composer.md` / `03_domain_appointment_lifecycle.md`
> 10. Domain 4 MUST READ per §6 — §2.18 pre-brief Sections A-O + §2.19 Citation Map + DL-14 inv 16-22 + DL-16 amendments 41-43 + DL-20 inv 33 + 40 + communications_topology.md + §1F + §1G + §1G.8 + §1G.11 + §1P + §1Q.23 + 4h phase work + Round 3.5 ADR
>
> **Key constraints I am honoring from prior rounds:**
> - §2.0 Flight-lane discipline (Mindbody as evidence, NOT template; per-rule Section A flight-lane translation + Section B rule definition)
> - §2.1.5 Gate-timing taxonomy (5 timings: booking_visibility / booking_hard_gate / pre_arrival_task / pre_performance_gate / closeout_documentation_gate)
> - §2.2 Anti-copy discipline (no Mindbody trigger-name lift; abstract to OMNI primitives)
> - §2.3 Round 3 guardrails (status_flags DERIVED only; lifecycle ≠ encounter creation)
> - §2.4 Same-service doctrine (no per-payment-context service catalog entries)
> - §2.5 D3↔D6 seam (lifecycle event → commerce consequence)
> - §2.6 Financial eligibility gate family
> - §2.7 Entitlement-aware continuation
> - §2.8 Membership-as-bundle
> - §2.9 Domain 6 mandatory pre-brief Sections A-K
> - §2.10 Generic benefit resolution engine (no source-specific branching)
> - §2.11 Benefit attribution / value visibility (receipt is marketing)
> - §2.12 Shopify ingestion pre-Round-6 binding
> - §2.13 Anti-double-dipping stacking doctrine (binding for Domain 6 stacking; relevant for Lane 2 entitlement-continuation communications)
> - **§2.14 Source-agnostic CNS action orchestration** (Domain 4 authors SCHEDULING-domain slice; envelope binds cross-domain)
> - **§2.15 Context Module Layer** (6 module types; consume not own; anti-brain naming; content/version governance)
> - **§2.16 CNS Action Envelope** (18 fields; 10-value action_kind; 7-value reply_policy; 9-value thread_policy; 8-value recipient_class; 9-value action_required; 10 composition invariants)
> - **§2.17 Provider Clinical Context Packet** (forward-reference to Round 5/7; Round 4 does NOT author provider decisioning, but Round 4 outbound to providers consumes the Patient Communication side of the 3-packet model)
> - **§2.18 Round 4 mandatory pre-brief Sections A-O** (binding compliance)
> - **§2.19 Citation Map** (Round 4 CITES existing doctrine for 8 reliability guardrails; does NOT re-author)
> - **§2.20 Amendment J 4-part candidate** (parked for Round 5/7 substrate evaluation)
> - **§2.21 Round Kickoff Reading Discipline** (this opening statement)
> - **§2.22 Cross-vertical pressure-test + Amendment K HARD CLOSURE GATE** (Round 4 NOT widening scope to address Amendment K; party/seat/roster/guest is Round 5/7 closure gate; Round 4 acknowledges + proceeds with scheduling-domain communications/outbound rule authoring)
>
> **Key user/Knox preferences I am honoring** (per `user_knox_preferences_locked_2026-05-17.md`):
> - Substrate-first, not doctrine-first (Round 4 authors buildable Day 0 rules, not more doctrine)
> - No vendor names in substrate (Twilio / SendGrid / etc. NEVER as enum values)
> - No specialty leakage in substrate (no aesthetic / derm / medspa-specific enum values)
> - Mindbody as evidence, not template
> - 3-layer foundation honored (planned commitment + actual delivery + linked evidence + commerce)
> - CNS as decisioning brain; rails as outputs; AI proposes + deterministic validates + provider signs
> - Generic primitives for cross-vertical applicability (§2.22)
> - Anti-double-dipping defaults (Round 3.4 §2.13)
> - Receipt-is-marketing attribution visibility (Round 3.3 §2.11)
>
> **Round 4 scope: Domain 4 — Confirmation / outbound round-trip rules.** Scheduling-domain slice of source-agnostic CNS action orchestration per §2.14. Two lanes:
> - **Lane 1** — Appointment confirmation round-trip per DL-20 inv 40 (`appointment_confirmation_event` substrate); CNS classifier per DL-14 inv 18; deterministic state transitions; staff review when ambiguous
> - **Lane 2** — Visit/service protocol communications via CNS Action Envelope per §2.16 (pre-care prep / post-care follow-up / entitlement-retention / experience-personalization / parallel internal action classes when triggered by appointment events)
>
> **Round 4 is NOT widening scope to address Amendment K** per §2.22.7; party/seat/roster/guest is a Round 5/7 closure gate.
>
> **Open questions for user + Knox before authoring proceeds:** None blocking. All open decisions resolved via §2.18 pre-brief Sections A-O + §2.19 Citation Map. Open execution decisions (M1-2 vs M3-6 phasing for specific rules; quiet-hours default windows; AI confidence threshold defaults) will be flagged in §4 closing for user/Knox to set before substrate slice.

---

## §1 Layer 1 substrate context (read first)

```text
appointment (DL-20 inv 33; substrate-slice-ready):
├── id, tenant_id, patient_id, patient_relationship_id
├── confirmation_state ENUM (9 values per DL-20 inv 33 — Domain 4 owns transitions):
│       unconfirmed (initial after scheduled)
│       confirmation_sent (outbound dispatched)
│       confirmed (patient acknowledged)
│       cancellation_requested (does NOT auto-cancel; routes to deterministic policy or staff review)
│       reschedule_requested (routes to reschedule flow per DL-15 inv 6)
│       staff_review_required (ambiguous classification)
│       failed_delivery (all attempts failed)
│       expired_no_response (NOT cancellation; tenant policy decides)
│       not_required (tenant admits some service types as no-confirm)
└── ... rest per DL-20 inv 33

appointment_confirmation_event (DL-20 inv 40; CNS round-trip orchestration substrate):
├── id, appointment_id FK
├── round_trip_kind ENUM: outbound_attempt / inbound_response / cns_classification / state_transition
├── confirmation_method ENUM (registry-extensible)
├── linked_orchestration_action_id FK NULL (DL-14 inv 16)
├── linked_messaging_thread_message_id FK NULL (messaging substrate)
├── linked_cns_decision_id FK NULL (DL-14 inv 18-22 classifier records)
├── classified_intent ENUM NULL (registry-extensible: confirm / cancel_request / reschedule_request / question / unintelligible)
├── classifier_confidence NUMERIC NULL
├── requires_staff_review BOOLEAN
├── state_transition_applied BOOLEAN (FALSE = queued for staff review)
├── resulting_state_transition_from + to (when round_trip_kind=state_transition)
├── occurred_at TIMESTAMP
├── triggered_by_actor (DL-16 amendment 43 4-tuple)
└── notes STRING NULL

orchestration_action (DL-14 inv 16; CNS output substrate;
                       Amendment J(b) candidate to extend with 18-field CNS Action Envelope):
├── id, tenant_id, action_kind (10 values per §2.16 Correction 4),
│   recipient_class, audience_scope, action_required, owning_queue,
│   message_purpose (registry per DL-16 amendment 42), source_event_id FK,
│   conversation_scope, thread_policy, expected_intents[],
│   permits_ai_drafting, staff_review_required, clinical_risk_possible,
│   consent_class, quiet_hours_policy, suppression_group, reply_policy
└── created_by_actor (DL-16 amendment 43)

orchestration_action_kind registry (DL-16 amendment 42; 32 seeded rows; registry-extensible):
├── kind STRING (e.g., outbound.scheduling.booking_confirmation)
├── default_channels[] (email / sms / push / in_app / fax / voice — payload-minimization-aware)
├── default_template_set FK (org-overridable per DL-16 inv 8)
├── default_throttle (cooldown + dedupe key shape per 1Q.14.2 gate 4)
├── default_consent_class ENUM (transactional / marketing / clinical)
├── default_quiet_hours_policy
├── pii_exposure_class (envelope / template-only / payload-required per DL-16 inv 7)
├── permits_ai_drafting BOOLEAN
└── allowed_actor_kinds[] + allowed_emitter_actor_kinds[] per DL-16 amendment 43

cns_decision (DL-14 inv 18-22; AI classifier + deterministic policy decision substrate)

messaging substrates (existing per communications_topology.md §1F + §1G):
├── messages, message_threads, message_thread_participants
├── patient_inbox_messages, patient_action_items
├── outbound_jobs (rail-side projection per §1Q.14.2)
├── inbound_emails, inbound_call_transcripts, inbound_narrative_reviews
└── voice_call

patient channel preferences (per §1Q.23 + communications_topology.md §6):
├── preferred_channels[] (SMS / email / portal / push / voice)
├── blocked_channels[]
├── PHI-over-SMS allowed BOOLEAN
├── opt-out per consent_class
└── quiet_hours_window per patient

cancellation_policy (DL-17 inv 24; per-service / per-brand override)

Context Modules (§2.15; 6 module types; substrate distribution per Amendment J(a)):
├── Intervention Context — prep_instructions / aftercare_instructions / red_flag_symptoms /
│       spacing_rules / follow_up_schedule / cns_message_triggers / ... +
│       version + approved_by_actor + effective_from + effective_to + superseded_by_version +
│       change_audit_lineage (per chat Patch 7)
├── Product/SKU Context
├── Care Program Context — episode_catalog.recommended_cadence (DL-20 inv 5) +
│       clinical_protocol_template_id (DL-20 inv 5; Amendment K may extend shape)
├── Entitlement Context
├── Order/Commerce Context
└── Patient Profile Context
```

---

## §2 Rule sections

| Section | Rules | Theme |
|---|---|---|
| **A** | CS-01 to CS-04 | Confirmation state machine (Lane 1) — 9-state ENUM + transition matrix + illegal transition + status_flags Confirmed projection |
| **B** | CS-05 to CS-09 | Outbound trigger fire rules (Lane 1 + Lane 2) — `appointment.scheduled` initial + registry + idempotency + service-specific composition + arbitration |
| **C** | CS-10 to CS-14 | CNS Action Envelope per outbound — 18 fields binding + action_kind + reply_policy/thread_policy + recipient_class + composition |
| **D** | CS-15 to CS-18 | Channel + content composition — channel selection per patient preference + template + quiet hours + PII/consent class |
| **E** | CS-19 to CS-22 | Lane 2 pre-care cadence — reminder cadence + protocol prep instructions + throttle/contact-load budget + service-aware cadence |
| **F** | CS-23 to CS-27 | Inbound response handling + classification (Lane 1) — classifier + confidence threshold + intent ENUM + `appointment_confirmation_event` write + deterministic transition |
| **G** | CS-28 to CS-30 | Graceful degradation (Constraint 5) — AI-off deterministic path + AI as enhancement + staff ambiguity queue |
| **H** | CS-31 to CS-34 | Lane 2 post-care follow-up — `encounter.completed` trigger + clinical_escalation_enabled + adverse symptom routing + provider/staff queue |
| **I** | CS-35 to CS-37 | Cross-domain seams — D3↔D4 lifecycle / D4↔D5 encounter / D4↔D6 entitlement-continuation |

**Round 4 rule count target:** 32-38 Day 0 rules. Final count = **37 rules**.

---

## Section A — Confirmation state machine (Lane 1)

### Rule CS-01: appointment.confirmation_state is a 9-state ENUM per DL-20 inv 33

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Mindbody Layer 2 Section B + Knox chat raw line 6356-6638 enumerate confirmation lifecycle (Appointment Confirmation Manual + Appointment Follow-up + Reservation Confirmations Recurring/Single + Reservation Reminder + No Show Notification Emails). Mindbody UI shows confirmed badge + reminder badge + cancel badge per appointment row. State is implicit + scattered across confirmation_sent / received_confirm / failed_to_reach / patient_replied free-text flags.
2. **Cross-app pattern reference (ANALOGIES; NOT hard evidence):**
   - **Airline check-in lifecycle** — boarded / not_yet_checked_in / checked_in / standby — explicit state machine
   - **Restaurant reservation confirmation (OpenTable)** — confirmation_sent / confirmed / unconfirmed / cancelled — explicit
   - **Calendly meeting** — confirmation_sent / accepted / declined / no_response — explicit
   - **FHIR Appointment.participantStatus** — needs-action / accepted / declined / tentative — FHIR standard
3. **Underlying tenant need:** Clinical operations require explicit + auditable + queryable confirmation state to drive automation (reminders / cancellation cascades / no-show recovery / staff follow-up queues). Free-text flags break reporting + scheduler decision logic + downstream CNS orchestration.
4. **OMNI generic primitive / rule:** `appointment.confirmation_state` ENUM per DL-20 inv 33, **9 values**:
   1. `unconfirmed` — initial after `appointment.status=scheduled`; outbound not yet attempted
   2. `confirmation_sent` — outbound dispatched per CS-05; awaiting patient response
   3. `confirmed` — patient acknowledged via inbound classification per CS-26 (positive confirm intent) OR staff manual mark per CS-26.b
   4. `cancellation_requested` — patient replied with cancel intent; does NOT auto-cancel `appointment.status`; routes to deterministic policy per CS-26 + cancellation seam (D3↔D4 per CS-35)
   5. `reschedule_requested` — patient replied with reschedule intent; routes to Domain 2 reschedule flow per DL-15 inv 6 + Domain 3 LC-18 atomic compensation
   6. `staff_review_required` — classifier confidence below threshold per CS-24 OR ambiguous intent; staff resolves manually per CS-30
   7. `failed_delivery` — all outbound attempts failed (per rail failure lifecycle in §2.19 citation #2); fallback to alternate channel per CS-15 fallback chain OR staff escalation
   8. `expired_no_response` — tenant policy timeout elapsed with no inbound (per tenant `confirmation_no_response_policy`); does NOT auto-cancel; staff queue per CS-30
   9. `not_required` — tenant admits some service types as no-confirm (e.g., walk-in arrival services); Lane 1 round-trip skipped; Lane 2 still applies
5. **Divergence / improvement vs Mindbody:** OMNI explicit 9-state ENUM binding (no free-text flags). Per DL-15 amendment 8: `confirmed` lifecycle state renamed to `scheduled` so `confirmation_state.confirmed` is reserved for PATIENT acknowledgment semantics; Mindbody conflates.
6. **Anti-copy warning:** Do NOT add ad-hoc state values (ENUM is closed). Do NOT mix `appointment.status` lifecycle with `appointment.confirmation_state` — they are orthogonal per DL-20 inv 33 (`appointment.status=scheduled` + `confirmation_state=unconfirmed` is a valid combination).
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 33 fully covers.

#### Section B — Rule definition

8. **Trigger:** Any `appointment.confirmation_state` transition (substrate write).
9. **Required inputs:** appointment_id, new_state ENUM, transition reason / context (from inbound classification OR staff action OR system timeout).
10. **Decision logic:**
    - Validate new_state ∈ 9 allowed values
    - Validate transition is legal per CS-02 transition matrix
    - Update `appointment.confirmation_state` atomically per DL-16 inv 6
    - Update `status_flags |= Confirmed` projection if new_state=`confirmed` per CS-04
    - Emit `appointment.confirmation_state_changed.{from}_to_{to}` event per DL-16 amendment 42 outbound trigger registry
    - Write `appointment_confirmation_event` row per DL-20 inv 40 with `round_trip_kind=state_transition`
11. **Output / state change:** confirmation_state updated; status_flags Confirmed projection updated; event emitted; `appointment_confirmation_event` audit row created.
12. **Owning substrate:** `appointment.confirmation_state` (DL-20 inv 33) + `appointment_confirmation_event` (DL-20 inv 40) for audit lineage.
13. **UI surface:** Schedule grid confirmation badge per state (patient + staff); admin filters per state.
14. **Failure mode:** Invalid state value → reject. Illegal transition → see CS-03.
15. **Audit / event:** `appointment.confirmation_state_changed.{from}_to_{to}` per DL-16 amendment 42 + amendment 43 actor 4-tuple + DL-16 inv 30 decision record.
16. **Evidence citations (HARD EVIDENCE):** DL-20 inv 33 (9-state ENUM binding); DL-20 inv 40 (round-trip substrate); Mindbody Knox chat raw lines 6356-6638 (confirmation lifecycle taxonomy evidence); Layer 2 Section B + B.7 (outbound communication events).
17. **Test case:** Sarah's Botox booking transitions: `unconfirmed` (initial) → `confirmation_sent` (Day -2 SMS) → `confirmed` (Sarah replies "C") → terminal. All 3 transitions emit events + write `appointment_confirmation_event` rows.

### Rule CS-02: Transition matrix is deterministic + binding (legal transitions enumerated)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody implicitly enforces some transitions but matrix is not explicit; staff can sometimes manipulate confirmation flag arbitrarily in admin UI.
2. **Cross-app pattern reference:**
   - **OpenTable** — confirmation_sent → confirmed only (no skip-state)
   - **Calendly** — confirmation_sent → accepted / declined / expired
   - **FSM theory** — explicit transition tables prevent impossible states
3. **Underlying tenant need:** Staff + AI + automation must NOT put confirmation_state into impossible states. Audit demands explicit transition rules.
4. **OMNI generic primitive / rule:** Transition matrix per Domain 4 binding doctrine. Allowed transitions:

| From → To | Owning trigger |
|---|---|
| (start) → `unconfirmed` | CS-05 (appointment.scheduled initial) |
| (start) → `not_required` | CS-05 (service_type=arrival OR tenant confirmation_required=FALSE) |
| `unconfirmed` → `confirmation_sent` | CS-05 + CS-15 outbound dispatch |
| `unconfirmed` → `not_required` | Tenant policy change mid-flight (rare) |
| `confirmation_sent` → `confirmed` | CS-26 inbound classification confirm intent |
| `confirmation_sent` → `cancellation_requested` | CS-26 inbound classification cancel intent |
| `confirmation_sent` → `reschedule_requested` | CS-26 inbound classification reschedule intent |
| `confirmation_sent` → `staff_review_required` | CS-24 classifier confidence below threshold |
| `confirmation_sent` → `failed_delivery` | CS-15 fallback chain exhausted |
| `confirmation_sent` → `expired_no_response` | CS-22 timeout elapsed (per tenant policy) |
| `staff_review_required` → `confirmed` | CS-30 staff manual resolution + Tier 2 attestation per DL-18 inv 8 |
| `staff_review_required` → `cancellation_requested` | CS-30 staff manual resolution |
| `staff_review_required` → `reschedule_requested` | CS-30 staff manual resolution |
| `failed_delivery` → `confirmation_sent` | CS-15 retry attempt via alternate channel |
| `failed_delivery` → `staff_review_required` | CS-30 manual handoff |
| `expired_no_response` → `staff_review_required` | Tenant escalation policy |
| `expired_no_response` → `confirmation_sent` | Manual re-send by staff |
| `confirmed` → (terminal until appointment.status changes) | none |
| `cancellation_requested` → (handed to D3 lifecycle) | D3 LC-12 cancellation flow |
| `reschedule_requested` → (handed to D3 lifecycle) | D3 LC-18 atomic compensation |
| `not_required` → (terminal) | none |

5. **Divergence / improvement vs Mindbody:** OMNI explicit binding matrix. Mindbody implicit + staff-overridable.
6. **Anti-copy warning:** Do NOT allow staff UI to override matrix without Tier 2 attestation per DL-18 inv 8. Do NOT add ad-hoc transitions.
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 33 state machine pattern + doctrine matrix.

#### Section B — Rule definition

8. **Trigger:** Any `appointment.confirmation_state` write attempt.
9. **Required inputs:** Current confirmation_state + proposed new_state.
10. **Decision logic:** Look up (current, new) in matrix; if allowed proceed per CS-01; if disallowed see CS-03.
11. **Output / state change:** Successful transition OR illegal_transition_attempted event.
12. **Owning substrate:** Doctrine matrix enforced by RPC validation + DB trigger.
13. **UI surface:** Staff actions surface only legal transitions; illegal transitions never offered.
14. **Failure mode:** See CS-03.
15. **Audit / event:** Successful transitions per CS-01.
16. **Evidence citations:** DL-20 inv 33 + state machine theory + FHIR Appointment.participantStatus precedent.
17. **Test case:** Confirmation_state in `confirmed`. Staff attempts to mark `cancellation_requested` directly. Matrix: confirmed is terminal until appointment.status transitions. Reject with `illegal_confirmation_transition_attempted`.

### Rule CS-03: Illegal confirmation transitions emit `illegal_confirmation_transition_attempted` event; never silent failure

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody silently rejects + logs no event when an impossible flag change is attempted; admin has no audit trail of the attempt.
2. **Cross-app pattern reference:**
   - **Stripe charge state machine** — illegal transition emits `charge.update_failed` event
   - **AWS Step Functions** — illegal transitions emit `ExecutionFailed` events with reason
3. **Underlying tenant need:** Audit lineage requires explicit illegal-attempt events. Silent failures hide misuse + automation bugs.
4. **OMNI generic primitive / rule:** Illegal transitions emit `illegal_confirmation_transition_attempted` event per DL-16 inv 30 decision record + DL-16 amendment 43 actor 4-tuple. Event carries: appointment_id / attempted_from + to / actor_kind / actor_id / reason_code / timestamp.
5. **Divergence / improvement vs Mindbody:** Mindbody silent; OMNI auditable.
6. **Anti-copy warning:** Do NOT silently reject. Do NOT swallow errors in API responses.
7. **Substrate pressure-test verdict:** **OK** — DL-16 inv 30 + amendment 43 fully cover.

#### Section B — Rule definition

8. **Trigger:** CS-02 transition matrix returns disallowed.
9. **Required inputs:** appointment_id / current_state / attempted_new_state / actor 4-tuple.
10. **Decision logic:** Reject write; emit event; surface error to caller with reason code.
11. **Output / state change:** No confirmation_state change; event emitted; error returned.
12. **Owning substrate:** DL-16 inv 30 decision_record + actor 4-tuple.
13. **UI surface:** Staff sees error toast with reason code; admin observability dashboard surfaces illegal attempts per tenant.
14. **Failure mode:** N/A (this IS the failure handler).
15. **Audit / event:** `illegal_confirmation_transition_attempted` per DL-16 amendment 42.
16. **Evidence citations:** DL-16 inv 30 + amendment 43 + Stripe charge state machine precedent.
17. **Test case:** Staff attempts `confirmed` → `staff_review_required`. Matrix disallows. Event emitted with actor=staff_user / reason=transition_not_in_matrix.

### Rule CS-04: status_flags `Confirmed` is a DERIVED projection from confirmation_state, NEVER canonical truth

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody mixes Confirmed flag (patient-acknowledged) with appointment status display badge; staff sometimes confuses "patient confirmed" with "appointment exists."
2. **Cross-app pattern reference:** N/A — this is a Round 2.6 Guardrail #1 + Round 3 derivative.
3. **Underlying tenant need:** Domain 3 lifecycle status_flags BITMASK admits a `Confirmed` indicator for queries (which appointments today are confirmed). Domain 3 does NOT own canonical truth for Confirmed; Domain 4 does via `appointment.confirmation_state`.
4. **OMNI generic primitive / rule:** When `appointment.confirmation_state` transitions to `confirmed` per CS-01, Domain 3 status_flags BITMASK gets `|= Confirmed` projected. When confirmation_state transitions back out (rare; rebooking), status_flags `&= ~Confirmed`. Domain 3 reads Domain 4's canonical state; never sets Confirmed independently.
5. **Divergence / improvement vs Mindbody:** OMNI explicit derivation discipline per Round 2.6 Guardrail #1. Mindbody mixes truth + projection.
6. **Anti-copy warning:** Do NOT set status_flags.Confirmed without confirmation_state transition. Do NOT read status_flags.Confirmed as canonical truth — read `appointment.confirmation_state` for ground truth.
7. **Substrate pressure-test verdict:** **OK** — Round 2.6 Guardrail #1 + DL-15 amendment 29 BITMASK shape.

#### Section B — Rule definition

8. **Trigger:** `appointment.confirmation_state` transition (CS-01).
9. **Required inputs:** appointment_id / new confirmation_state.
10. **Decision logic:** If new_state=`confirmed`, `status_flags |= Confirmed`. If old_state=`confirmed` and new_state != `confirmed`, `status_flags &= ~Confirmed`.
11. **Output / state change:** status_flags BITMASK updated atomically with confirmation_state.
12. **Owning substrate:** `appointment.status_flags` (DL-15 amendment 29; Domain 3 owns BITMASK shape; projection trigger per CS-04).
13. **UI surface:** Schedule grid Confirmed badge derives from status_flags or directly from confirmation_state (UI choice; same truth).
14. **Failure mode:** Projection drift detected by DL-16 inv 39 reconciliation jobs.
15. **Audit / event:** Same event as CS-01.
16. **Evidence citations:** Round 2.6 Guardrail #1; DL-15 amendment 29 status_flags BITMASK shape; Domain 3 §0 binding.
17. **Test case:** Sarah confirms appointment → confirmation_state=`confirmed` → status_flags |= Confirmed (bit 1). Domain 3 query "today's confirmed appointments" reads status_flags efficiently; canonical truth is in `appointment.confirmation_state`.

---

## Section B — Outbound trigger fire rules (Lane 1 + Lane 2)

### Rule CS-05: `appointment.scheduled` event initiates Lane 1 confirmation flow per service-policy

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Knox chat raw line 6356 + Layer 2 Section B.7 + mindbody_05 row 61 evidence: Mindbody supports "Appointment Confirmation (Manual)" + "Send Change Notification" + "Send confirmation email on appointment edit" as separate trigger options per appointment. ~30+ distinct outbound trigger types tied to substrate state predicates per Layer 2 B.7.
2. **Cross-app pattern reference:**
   - **OpenTable** — booking event → confirmation email + day-of reminder
   - **Calendly** — meeting created → confirmation email + reminder cadence
   - **Acuity Scheduling** — appointment booked → multi-step confirmation + reminder series
3. **Underlying tenant need:** Patients expect confirmation when they (or staff) book. Clinical operations rely on patient acknowledgment to reduce no-shows. CNS routes work; tenant configures cadence + channels per service.
4. **OMNI generic primitive / rule:**
    - On `appointment.scheduled` event emission per D3 LC-01 transition matrix (post atomic commit per D2 BC-21):
      - Read tenant `confirmation_policy` per service via DL-19 inv 18 service_policy (tenant policy profile per §2.13 doctrine; default = `medspa_anti_double_dip` profile)
      - If `service_type=arrival` (DL-15 amendment 4) OR tenant confirmation_required=FALSE: set `confirmation_state=not_required`; skip Lane 1; Lane 2 still applies per CS-19+
      - Else: set `confirmation_state=unconfirmed`; emit `outbound.scheduling.booking_confirmation` per DL-16 amendment 42 trigger registry; schedule Lane 1 cadence per CS-19 + tenant policy
    - CNS evaluates per DL-14 inv 18 bounded autopilot before dispatch; deterministic policy validates
5. **Divergence / improvement vs Mindbody:** OMNI binds the trigger to substrate state predicate (`appointment.status=scheduled` post-commit) per DL-16 inv 6 atomic event emission. Mindbody triggers vary based on UI action + setting; less deterministic.
6. **Anti-copy warning:** Do NOT trigger confirmation outbound on `appointment.status=held` or `appointment.status=proposed` (pre-commit states) — only post-commit. Do NOT skip CNS evaluation + just blast SMS (CNS is decisioning brain per §2.14).
7. **Substrate pressure-test verdict:** **OK** — DL-16 amendment 42 + DL-20 inv 33 + DL-19 inv 18 cover.

#### Section B — Rule definition

8. **Trigger:** `appointment.scheduled` event per D3 LC-01.
9. **Required inputs:** appointment_id / service_id / patient_id / venue_id / appointment_time / patient channel preferences (per §1Q.23) / tenant confirmation_policy / Context Modules (per §2.15).
10. **Decision logic:** Apply policy; emit trigger; CNS evaluates; arbitration per §2.16 + CS-09.
11. **Output / state change:** `confirmation_state` set to `unconfirmed` OR `not_required`; if `unconfirmed`, orchestration_action emitted per DL-14 inv 16.
12. **Owning substrate:** `appointment.confirmation_state` (DL-20 inv 33) + orchestration_action (DL-14 inv 16) + DL-16 amendment 42 trigger registry.
13. **UI surface:** None directly (background CNS); staff sees confirmation badge update.
14. **Failure mode:** Trigger registry row missing → emit registry_lookup_failed event + staff escalation.
15. **Audit / event:** `outbound.scheduling.booking_confirmation.fired` per DL-16 amendment 42 + DL-16 inv 30 decision record capturing context modules + version per §2.15 Patch 7.
16. **Evidence citations:** DL-16 amendment 42 (32-seed outbound trigger registry); DL-20 inv 33 + 40; Mindbody Knox chat lines 6356-6638; communications_topology.md §3 six outbound channels.
17. **Test case:** Booking Tuesday 2pm Botox for Sarah triggers `appointment.scheduled` → CNS reads service_id → service_policy says `confirmation_required=TRUE` → `confirmation_state=unconfirmed` → outbound.scheduling.booking_confirmation emitted → CNS Action Envelope assembled per §2.16 → SMS dispatched to Sarah's preferred channel.

### Rule CS-06: Outbound trigger registry per DL-16 amendment 42 is the source of truth for scheduling-domain outbounds

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Layer 2 Section B.7 + DL-16 amendment 42 enumerate 32 seed outbound trigger types across 8 buckets including scheduling (booking_confirmation / reminder / cancellation_notification / no_show_notification / reschedule_confirmation / wait_list_offer).
2. **Cross-app pattern reference:** N/A — DL-16 amendment 42 is OMNI-internal registry doctrine.
3. **Underlying tenant need:** Build authors must NOT invent ad-hoc trigger names. Registry is binding; tenant extends per DL-16 inv 5 + 9 + 29 registry pattern.
4. **OMNI generic primitive / rule:** Domain 4 Lane 1 outbounds cite the following DL-16 amendment 42 scheduling-bucket trigger kinds:
    - `outbound.scheduling.booking_confirmation` (CS-05)
    - `outbound.scheduling.day_before_reminder` (CS-19)
    - `outbound.scheduling.same_day_reminder` (CS-19; tenant-configurable)
    - `outbound.scheduling.cancellation_notification` (D3 LC-12 trigger)
    - `outbound.scheduling.no_show_notification` (D3 LC-16 trigger)
    - `outbound.scheduling.reschedule_confirmation` (D3 LC-18 trigger)
    - `outbound.scheduling.waitlist_offer` (D3 LC-21 trigger)
    - Lane 2 cites the broader DL-16 amendment 42 buckets (clinical / forms / lifecycle / marketing / patient_engagement) when appropriate per Context Module + service-policy.
5. **Divergence / improvement vs Mindbody:** OMNI registry is generic + tenant-extensible; Mindbody trigger names are vendor-frozen.
6. **Anti-copy warning:** Do NOT invent ad-hoc trigger names (e.g., `outbound.scheduling.bloom_special_reminder`). Use registry kinds; tenant extends registry per DL-16 inv 5 + 9 + 29 with audit lineage.
7. **Substrate pressure-test verdict:** **OK** — DL-16 amendment 42 registry covers; tenant-extensible.

#### Section B — Rule definition

8. **Trigger:** Any Round 4 outbound generation.
9. **Required inputs:** orchestration_action_kind STRING (must be in registry).
10. **Decision logic:** Lookup kind in registry; read default_channels / default_template_set / default_throttle / default_consent_class / default_quiet_hours_policy / pii_exposure_class / permits_ai_drafting / allowed_actor_kinds.
11. **Output / state change:** Envelope populated from registry defaults + per-action overrides.
12. **Owning substrate:** DL-16 amendment 42 orchestration_action_kind registry table.
13. **UI surface:** Admin UI for tenant to extend registry (per DL-16 inv 9 registry governance).
14. **Failure mode:** Unknown kind → reject + emit `unknown_orchestration_action_kind` per DL-16 inv 30.
15. **Audit / event:** Lookup audited via DL-16 inv 30 decision record.
16. **Evidence citations:** DL-16 amendment 42 (binding registry); DL-16 inv 5 + 9 + 29 (registry governance).
17. **Test case:** Round 4 wants to emit "patient reminder 24 hours before laser appointment." Lookup `outbound.scheduling.day_before_reminder` in registry; populates SMS + email channels + transactional consent_class + standard quiet-hours; tenant can override per service-policy.

### Rule CS-07: Idempotency per (source_event_id × orchestration_action_kind × recipient_id × time_window) prevents duplicate outbounds

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody occasionally double-sends reminders due to webhook retries + cron overlap; staff flag as "annoying" in Knox chat raw.
2. **Cross-app pattern reference (per §2.19 Citation Map):**
   - **Stripe** — idempotency keys per request
   - **Twilio** — message dedupe via idempotency headers
   - **AWS Step Functions** — idempotency via execution ID
3. **Underlying tenant need:** Patients must NOT receive duplicate "your appointment is tomorrow at 2pm" messages. Webhook retries + cron overlap + manual staff trigger MUST not double-send.
4. **OMNI generic primitive / rule:** Per §2.19 Citation Map guardrail #4 (idempotency) + DL-16 amendment 42 `default_throttle` (cooldown + dedupe_key shape per registry row) + DL-16 inv 6 atomic event emission:
    - Compute idempotency_key = hash(source_event_id, orchestration_action_kind, recipient_id, time_window_bucket)
    - If recent_orchestration_action row exists with same idempotency_key within cooldown window → SUPPRESS (action_kind=`suppression` per §2.16) + emit `outbound_suppressed_duplicate` audit event
    - Else → proceed with dispatch
    - Cooldown window per registry row (e.g., 5 minutes for confirmation; 1 hour for reminder; 24 hours for follow-up)
5. **Divergence / improvement vs Mindbody:** OMNI explicit dedupe per registry + idempotency-key audit lineage. Mindbody implicit.
6. **Anti-copy warning:** Do NOT dispatch outbound without idempotency check. Do NOT compute idempotency_key from JUST the source_event (different recipients may share a source event; need recipient dimension).
7. **Substrate pressure-test verdict:** **OK** — DL-16 amendment 42 default_throttle + 1Q.14.2 gate 4 dedupe cover per §2.19 Citation Map.

#### Section B — Rule definition

8. **Trigger:** Any outbound dispatch attempt.
9. **Required inputs:** source_event_id / orchestration_action_kind / recipient_id / time_window_bucket / cooldown_minutes (from registry).
10. **Decision logic:** Hash → lookup recent orchestration_action rows → check window → suppress OR proceed.
11. **Output / state change:** Either dispatch OR `suppression` action_kind row + audit event.
12. **Owning substrate:** orchestration_action substrate per DL-14 inv 16 + idempotency_key column (Amendment J(b) flagged in §2.19).
13. **UI surface:** Suppressions surface in admin observability (staff-only attribution per §2.16).
14. **Failure mode:** Idempotency_key collision (different content same hash) → emit `idempotency_collision_detected` per DL-16 inv 30; manual staff resolution.
15. **Audit / event:** `outbound_suppressed_duplicate` per DL-16 amendment 42 + DL-16 inv 30 decision record.
16. **Evidence citations:** §2.19 Citation Map guardrail #4; DL-16 amendment 42 `default_throttle`; DL-16 inv 6 + 21.
17. **Test case:** Webhook fires `appointment.scheduled` twice for Sarah's booking due to retry. First dispatch goes; second is suppressed via idempotency. Audit shows both events received; only one outbound sent.

### Rule CS-08: Service-specific outbound composition consumes Context Modules per §2.15

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Knox chat raw + user direction 2026-05-17: *"a coolpeel co2 visit. all the usual you're booked, text and emails, reminders. and then 'be sure to stop your retinols 5 days in advance.'"* Mindbody doesn't support service-protocol-driven message composition; staff manually adds custom notes per service.
2. **Cross-app pattern reference:**
   - **Aviation** — pre-flight briefing assembled from aircraft type + route + weather (typed references; CNS-equivalent assembles)
   - **Hotel** — pre-arrival email assembled from guest profile + reservation type + property amenities
3. **Underlying tenant need:** Patients booking CoolPeel CO2 need "stop retinols 5 days before" message; patients booking Botox don't. Service-specific protocol drives message content composition.
4. **OMNI generic primitive / rule:** Per §2.15 Context Module Layer + §2.16 composition:
    - CNS at decision time pulls Intervention Context Module for `service_id` per Round 4 outbound
    - If `intervention_context.prep_instructions[]` non-empty AND timing matches outbound schedule (e.g., 5 days before per `intervention_context.prep_instructions[].lead_time_days`):
      - Compose `patient_message` with prep instruction content drawn from approved module (per Constraint 1 — AI may assemble/polish but NEVER invent clinical content)
      - Set `consent_class=clinical` per DL-16 amendment 42
      - Set `reply_policy=two_way_ai_triage` OR `clinical_escalation_enabled` per intervention_context.red_flag_symptoms presence
      - Apply Patch 7 version capture: decision record per DL-16 inv 30 captures `intervention_context_id=coolpeel_co2_v3` + content module version
5. **Divergence / improvement vs Mindbody:** OMNI service-policy-driven composition vs Mindbody manual staff template editing.
6. **Anti-copy warning:** Do NOT bake service-specific prep instructions into template TEXT (templates are generic; Context Modules supply content). Do NOT let AI invent prep instructions not in `intervention_context.prep_instructions[]`.
7. **Substrate pressure-test verdict:** **OK with extension** — Amendment J(a) Intervention Context substrate must exist for Round 4 to consume. Flagged Round 5/7 substrate-decides shape; Round 4 references abstract interface.

#### Section B — Rule definition

8. **Trigger:** CS-05 booking_confirmation OR CS-19 reminder cadence emission.
9. **Required inputs:** orchestration_action_kind / service_id / patient_id / Context Module access (Intervention + Patient Profile).
10. **Decision logic:** Pull Intervention Context for service_id → check prep_instructions[] for matching lead_time → compose message body from approved content modules → set envelope fields.
11. **Output / state change:** CNS Action Envelope populated with composed body; orchestration_action row emitted.
12. **Owning substrate:** Intervention Context Module (Amendment J(a) candidate); orchestration_action (DL-14 inv 16).
13. **UI surface:** Patient receives prep message; staff sees in conversation thread.
14. **Failure mode:** Intervention Context missing for service_id → fallback to generic confirmation template + log `intervention_context_missing` per DL-16 inv 30.
15. **Audit / event:** `outbound.scheduling.pre_care_prep.composed` per DL-16 amendment 42 + decision record captures intervention_context version per Patch 7.
16. **Evidence citations:** §2.15 Context Module Layer; §2.16 composition; Constraint 1 (no AI invention); §2.19 Citation Map guardrail #7 (content versioning).
17. **Test case:** Todd books CoolPeel CO2 Day -7. Service = `coolpeel_co2`. Intervention Context has prep_instructions=[stop retinols Day -5; clean skin Day 0; expected downtime 7-10 days]. Day -5 cadence fires; CNS composes "Hi Todd, your CoolPeel is in 5 days. Please stop retinols today and continue avoiding them until 5 days after treatment. Arrive Day 0 with clean skin. Expect 7-10 days of redness/peeling." Decision record captures `intervention_context_id=coolpeel_co2_v3`.

### Rule CS-09: Multi-trigger arbitration follows §2.16 priority order + contact-load budget

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody dispatches every eligible reminder independently; patients sometimes get 5+ messages per day across overlapping reminder schedules (Knox chat raw user complaint).
2. **Cross-app pattern reference:**
   - **Amazon** — bundles/suppresses notifications; never sends every eligible message
   - **ICU monitoring** — suppresses false alarms; prioritizes critical
   - **Tesla Autopilot** — prioritizes safety alerts over comfort alerts
3. **Underlying tenant need:** Patient with appointment tomorrow + pending intake + payment issue + benefit-expiring offer must NOT receive 4 separate messages; CNS arbitrates per priority + bundles where compatible per §2.16 composition.
4. **OMNI generic primitive / rule:** Per §2.16 default arbitration priority + §2.16 composition invariants:
    - Default priority order (binding; tenant-tunable):
      1. clinical_safety (red flags / DL-14 inv 21 absolute interrupt)
      2. appointment_logistics (day-of / hours-of timing)
      3. billing_payment_blocker (blocks service delivery)
      4. required_prep_intake_consent (within prep-timing window)
      5. post_care_followup (within post-care window)
      6. entitlement_continuation (benefit expiring / package remaining)
      7. hospitality_personalization
      8. marketing
    - Patient contact-load budget per channel × per window (e.g., max 3 non-urgent SMS/day; max 2 marketing/week)
    - Clinical_safety bypasses budget per §2.16
    - Compose-merge where compatible (same conversation_scope + same consent_class + same reply_policy + same action_kind + same recipient_class per 10 invariants); split otherwise
5. **Divergence / improvement vs Mindbody:** OMNI arbitration is deterministic + tenant-configurable + patient-aware. Mindbody is naïve "send everything eligible."
6. **Anti-copy warning:** Do NOT skip arbitration for any non-clinical-safety outbound. Do NOT merge across `consent_class` or `recipient_class` or `action_kind`.
7. **Substrate pressure-test verdict:** **OK with extension** — Amendment J(c) arbitration substrate must exist (contact budget tracking + suppression_group registry + priority queue + recent_contact_load projection); flagged Round 5/7 substrate-decides shape.

#### Section B — Rule definition

8. **Trigger:** Any outbound dispatch attempt.
9. **Required inputs:** Candidate orchestration_action list / patient contact-load state / tenant priority profile / Context Modules.
10. **Decision logic:** Sort candidates by priority; check contact budget per channel/window; apply 5-operation composition (select / merge / split / hold / suppress) per §2.16.
11. **Output / state change:** Final dispatch list (possibly fewer than candidates); suppression/defer audit rows for non-dispatched.
12. **Owning substrate:** Amendment J(c) candidate (arbitration + queue routing substrate); DL-19 policy profile.
13. **UI surface:** Staff observability dashboard for arbitration decisions; patient sees only final dispatched messages.
14. **Failure mode:** Tied priority → use tenant tiebreaker config OR fall back to first-eligible.
15. **Audit / event:** `cns_arbitration_decided` per DL-16 inv 30 captures input candidates + final dispatch + suppressed/deferred with reasons.
16. **Evidence citations:** §2.16 arbitration + composition; Constraint 4 contact-load budget; §2.19 Citation Map guardrail #8 (observability).
17. **Test case:** Sarah has eligible at 9am: (a) booking_confirmation for tomorrow's Botox (priority 2); (b) pre-care prep for tomorrow's Botox stop-NSAIDs (priority 4); (c) HydraFacial benefit expiring (priority 6); (d) hospitality "what scent?" (priority 7). CNS merges (a) + (b) into one composed message (same conversation_scope + same consent_class transactional+clinical-compatible per tenant rule + same action_kind=patient_message + same recipient_class=patient); defers (c) to next day; suppresses (d) (contact-load budget). Final: 1 message dispatched.

---

## Section C — CNS Action Envelope per outbound

### Rule CS-10: Every Round 4 outbound writes an 18-field CNS Action Envelope per §2.16

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody outbound_jobs row has ~15 columns covering channel + template + recipient + timestamp + status; reply handling is implicit; no `action_kind` discriminator.
2. **Cross-app pattern reference:**
   - **Twilio Message** — has `to / from / body / status / sid / direction` (rail-level only; no orchestration discriminator)
   - **AWS SNS** — has `MessageStructure / Subject / Message / TopicArn / MessageAttributes` (closer to envelope)
   - **OMNI CNS Action Envelope** — purpose-built per §2.16 Correction 4
3. **Underlying tenant need:** Every CNS output must be auditable + traceable + composable + suppressable. Envelope captures the WHY/WHAT/HOW/AUDIENCE/REPLY-HANDLING in one row.
4. **OMNI generic primitive / rule:** Per §2.16 + §2.18 Section E binding, every Round 4 outbound writes the 18-field envelope:
    - **action_kind discriminator** (10-value ENUM)
    - **Patient + conversation fields (13):** message_purpose / source_event_id / orchestration_action_id / conversation_scope / thread_policy / expected_intents[] / permits_ai_drafting / staff_review_required / clinical_risk_possible / consent_class / quiet_hours_policy / suppression_group / reply_policy
    - **Multi-recipient orchestration fields (4):** recipient_class / audience_scope / action_required / owning_queue
5. **Divergence / improvement vs Mindbody:** OMNI envelope is binding + 18-field; Mindbody is rail-level only.
6. **Anti-copy warning:** Do NOT bypass envelope and write directly to rail (SMS API / email API). Rails are outputs; envelope is governance.
7. **Substrate pressure-test verdict:** **OK with extension** — Amendment J(b) substrate-extends orchestration_action (DL-14 inv 16) with 18-field envelope including action_kind + reply_policy + thread_policy + recipient_class + audience_scope + action_required + owning_queue + suppression_group.

#### Section B — Rule definition

8. **Trigger:** Any CNS-emitted Round 4 outbound.
9. **Required inputs:** All 18 field values (some defaulted from DL-16 amendment 42 registry).
10. **Decision logic:** Populate fields per §2.16 field applicability matrix per action_kind; validate per CS-11.
11. **Output / state change:** orchestration_action row written with envelope; rail delivery attempted per CS-15.
12. **Owning substrate:** orchestration_action substrate per Amendment J(b) extension.
13. **UI surface:** Admin observability sees full envelope; patient receives rendered content only.
14. **Failure mode:** Missing required field for action_kind → reject + emit `envelope_validation_failed`.
15. **Audit / event:** Every envelope is itself audit lineage per DL-16 inv 30.
16. **Evidence citations:** §2.16 18-field envelope; §2.18 Section E compliance; §2.19 Citation Map guardrail #2 + #8.
17. **Test case:** Booking confirmation for Sarah → envelope: action_kind=patient_message / recipient_class=patient / consent_class=transactional / reply_policy=action_link_only / thread_policy=attach_to_appointment_thread / conversation_scope=appointment / permits_ai_drafting=FALSE / quiet_hours_policy=tenant_default / etc.

### Rule CS-11: Field applicability per action_kind is enforced per §2.16 matrix

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** N/A — Mindbody has no action_kind discriminator.
2. **Cross-app pattern reference:** N/A — §2.16 internal doctrine.
3. **Underlying tenant need:** A `provider_task` action_kind should not have a `reply_policy` (provider doesn't reply to a task; provider completes it). A `suppression` action_kind has no thread or recipient (it's audit-only).
4. **OMNI generic primitive / rule:** Per §2.16 field applicability matrix:

| action_kind (Round 4 in-scope) | reply_policy | thread_policy | owning_queue | recipient_class | conversation_scope |
|---|---|---|---|---|---|
| `patient_message` | YES | YES | NO | patient | YES |
| `internal_notification` | YES (no_reply mainly) | YES | YES (info queue) | non-patient | YES |
| `provider_task` | N/A | YES | YES (provider_task_queue) | provider | YES |
| `staff_task` | N/A | YES | YES (routes by recipient) | non-patient non-provider | YES |
| `billing_task` | N/A | YES | YES (billing_resolution_queue) | billing_staff | YES |
| `clinical_escalation` | YES (clinical_escalation_enabled) | YES (create_clinical_triage_thread) | YES (clinical_triage_queue) | clinical_staff or provider | YES |
| `scheduling_offer` | YES (booking_assist_enabled) | YES | NO | patient | YES |
| `state_transition_proposal` | NO | NO | NO | N/A | N/A |
| `suppression` | NO | NO | NO | N/A | audit-only |
| `no_op` | NO | NO | NO | N/A | audit-only |

5. **Divergence / improvement vs Mindbody:** OMNI explicit applicability matrix per discriminator. Mindbody none.
6. **Anti-copy warning:** Do NOT populate inapplicable fields (e.g., `reply_policy` on a `provider_task`). Do NOT leave required fields NULL (e.g., `owning_queue` on a `provider_task`).
7. **Substrate pressure-test verdict:** **OK** — §2.16 matrix is binding; substrate trigger validates.

#### Section B — Rule definition

8. **Trigger:** orchestration_action row write attempt.
9. **Required inputs:** action_kind + populated fields.
10. **Decision logic:** Apply matrix; reject if violated.
11. **Output / state change:** Either successful write OR `envelope_validation_failed` event per CS-10.
12. **Owning substrate:** orchestration_action substrate trigger.
13. **UI surface:** Staff sees validation error if manual envelope authored.
14. **Failure mode:** See CS-10.
15. **Audit / event:** `envelope_validation_failed` per DL-16 inv 30.
16. **Evidence citations:** §2.16 field applicability matrix.
17. **Test case:** Author attempts `provider_task` envelope with `reply_policy=two_way_staff_queue`. Matrix says reply_policy=N/A for provider_task. Reject + emit event.

### Rule CS-12: reply_policy + thread_policy bind per outbound semantic; cross-domain consistent

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody inbound replies all funnel to one staff inbox; no per-message reply policy.
2. **Cross-app pattern reference:**
   - **Twilio** — replies route to `Inbound URL` per number; no per-message routing
   - **Healthcare patient portals** — replies attach to message thread; per-thread categorization
3. **Underlying tenant need:** A "your appointment is tomorrow" SMS reply should attach to appointment thread; a "stop retinols" reply might be clinical (red flag) and need clinical triage; a "we have HydraFacial benefit expiring" reply should route to booking assist.
4. **OMNI generic primitive / rule:** Per §2.16 reply_policy (7 values) + thread_policy (9 values) symmetric with conversation_scope. Round 4 outbound classes map to defaults:

| Round 4 outbound class | reply_policy default | thread_policy default |
|---|---|---|
| `booking_confirmation` | `action_link_only` (patient clicks confirm link OR replies; staff queue if ambiguous) | `attach_to_appointment_thread` |
| `day_before_reminder` | `action_link_only` | `attach_to_appointment_thread` |
| `same_day_reminder` | `no_reply` | `no_thread` |
| `pre_care_prep` (clinical) | `two_way_ai_triage` OR `clinical_escalation_enabled` per intervention_context.red_flag_symptoms | `attach_to_appointment_thread` |
| `post_care_followup` (clinical) | `clinical_escalation_enabled` | `attach_to_encounter_thread` |
| `entitlement_continuation` (benefit expiring) | `booking_assist_enabled` | `attach_to_entitlement_thread` |
| `hospitality` (tea/blanket/scent) | `two_way_staff_queue` | `attach_to_general_patient_thread` |
| `cancellation_notification` | `no_reply` | `attach_to_appointment_thread` |
| `no_show_notification` | `two_way_staff_queue` | `attach_to_appointment_thread` |
| `reschedule_confirmation` | `action_link_only` | `attach_to_appointment_thread` |
| `waitlist_offer` | `booking_assist_enabled` | `attach_to_appointment_thread` |

5. **Divergence / improvement vs Mindbody:** OMNI per-outbound reply + thread routing; Mindbody single-inbox.
6. **Anti-copy warning:** Do NOT set `reply_policy=no_reply` on a clinical follow-up (red flag escalation MUST be possible per DL-14 inv 21). Do NOT mix consent_class within a composed message (e.g., merge clinical post-care with marketing).
7. **Substrate pressure-test verdict:** **OK** — §2.16 ENUMs cover.

#### Section B — Rule definition

8. **Trigger:** CS-10 envelope population.
9. **Required inputs:** orchestration_action_kind / Context Modules (intervention_context.red_flag_symptoms).
10. **Decision logic:** Apply default per class table; override per tenant policy + Context Module signals.
11. **Output / state change:** Envelope fields populated.
12. **Owning substrate:** orchestration_action substrate + DL-16 amendment 42 registry defaults.
13. **UI surface:** Patient experiences appropriate reply routing; staff sees thread attachment.
14. **Failure mode:** Invalid combination (e.g., no_reply + clinical_escalation needed) → reject per CS-11.
15. **Audit / event:** Per CS-10.
16. **Evidence citations:** §2.16 reply_policy + thread_policy ENUMs (per Corrections 2 + 3).
17. **Test case:** Daisy gets post-Botox check-in SMS. reply_policy=`clinical_escalation_enabled`. thread_policy=`attach_to_encounter_thread`. Daisy replies "my face is swelling a lot." CNS classifier identifies red flag → escalate to provider per DL-14 inv 21 + create clinical_triage_thread.

### Rule CS-13: recipient_class + action_required determine queue routing for non-patient outbounds

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody internal tasks (Provider Schedule Reminder, Reservation Reminder for staff) go to email; no structured task queue per role.
2. **Cross-app pattern reference:**
   - **Asana / Jira** — task assignment per role + queue + SLA
   - **Healthcare EMR (Epic)** — provider inbox queue per task type
3. **Underlying tenant need:** "Dr. Z, call your rhinoplasty patient tomorrow" must go to Dr. Z's task queue with `call_patient` action_required and timestamp; not buried in generic email. Billing tasks (membership payment failed before HydraFacial) go to billing_resolution_queue. Hospitality tasks (Daryl wants tea) go to ops_hospitality_queue.
4. **OMNI generic primitive / rule:** Per §2.16 + Correction 3:
    - Non-patient outbound MUST populate `recipient_class` (8 values) + `audience_scope` + `action_required` (9 values) + `owning_queue`
    - Queue routing matrix (Amendment J(c) candidate):

| recipient_class + action_required combo | owning_queue |
|---|---|
| provider + call_patient OR review OR sign | provider_task_queue |
| provider + escalate | clinical_triage_queue (urgent) |
| front_desk + complete_task (e.g., resolve membership at arrival) | front_desk_queue |
| clinical_staff + complete_task (e.g., prep room) | clinical_staff_queue |
| billing_staff + resolve_billing | billing_resolution_queue |
| ops_team + complete_task (e.g., tea preference) | ops_hospitality_queue |
| care_coordinator + complete_task (e.g., GLP-1 program coordination) | care_coordinator_queue |
| external_vendor + (any) | vendor_integration_queue (deferred substrate) |

5. **Divergence / improvement vs Mindbody:** OMNI structured queue routing; Mindbody scattered email.
6. **Anti-copy warning:** Do NOT route provider_task to email-only (queue is canonical; email is rail surface). Do NOT mix recipient_classes in a single envelope (Correction 3 composition invariant).
7. **Substrate pressure-test verdict:** **OK with extension** — Amendment J(c) queue substrate needs definition; flagged Round 5/7.

#### Section B — Rule definition

8. **Trigger:** Round 4 non-patient outbound.
9. **Required inputs:** recipient_class / action_required / source_event_id / Context Modules.
10. **Decision logic:** Apply queue routing matrix; populate owning_queue; create queue item.
11. **Output / state change:** orchestration_action row + queue item per Amendment J(c) substrate.
12. **Owning substrate:** queue substrate per Amendment J(c).
13. **UI surface:** Provider/staff sees task in their queue UI.
14. **Failure mode:** Missing recipient mapping → escalate to manager/supervisor queue.
15. **Audit / event:** `internal_action_routed` per DL-16 inv 30.
16. **Evidence citations:** §2.16 Correction 3; §2.18 Section M (multi-recipient compliance).
17. **Test case:** "Dr. Z, call rhinoplasty patient post-op day 7" → recipient_class=provider / action_required=call_patient / owning_queue=provider_task_queue / source_event=encounter.completed 7 days ago. Dr. Z's queue gets task with patient context + call talking-points (per §2.17 Provider Clinical Context Packet forward-reference).

### Rule CS-14: Composition follows §2.16 10 invariants; AI never invents clinical content (Constraint 1)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody templates are static text + variable substitution; no composition or AI assembly.
2. **Cross-app pattern reference:**
   - **Salesforce Marketing Cloud** — content modules + dynamic assembly
   - **Mailchimp** — merge tags + content blocks
   - **Modern LLM-driven assistants (ChatGPT) — invent content from prompts (NOT what OMNI does; explicit anti-pattern)**
3. **Underlying tenant need:** Composed message should bundle (a) booking confirmation + (b) pre-care prep + (c) intake reminder when compatible. AI may polish phrasing but MUST NOT invent prep instructions / aftercare / safety content not in approved Context Modules.
4. **OMNI generic primitive / rule:** Per §2.16 composition + Constraint 1:
    - 5 composition operations: select / merge / split / hold / suppress
    - 10 invariants (binding): cannot merge across action_kind (Correction 4); cannot merge across recipient_class (Correction 3); cannot merge across owning_queue; cannot merge across consent_class; cannot merge across staff_review_required flags; conversation_scope must be compatible; most-restrictive quiet_hours wins; most-conservative permits_ai_drafting wins; APPROVED content modules only; benefit attribution preserved per Round 3.3 §2.11
    - Compose attempt audit captures: input candidates / selected operation / rationale / output actions / suppressed-deferred with reason / cross-action_kind splits / cross-recipient-class splits per DL-16 inv 30
5. **Divergence / improvement vs Mindbody:** OMNI composition is governed + auditable + AI-bounded. Mindbody static templates only.
6. **Anti-copy warning:** Do NOT let AI write clinical prep instructions from scratch ("avoid retinoids 7-10 days before" without that being in `intervention_context.prep_instructions[]`). Do NOT merge across action_kind boundaries. Do NOT lose benefit attribution per §2.11.
7. **Substrate pressure-test verdict:** **OK** — §2.16 composition invariants + Constraint 1 + DL-16 inv 30 audit cover.

#### Section B — Rule definition

8. **Trigger:** CS-09 arbitration produces 2+ compatible candidates.
9. **Required inputs:** Candidate envelopes / Context Modules / tenant policy.
10. **Decision logic:** Apply 10 invariants; merge compatible; split incompatible; suppress over budget.
11. **Output / state change:** 1+ final orchestration_action rows + audit trail.
12. **Owning substrate:** orchestration_action + decision_record (DL-16 inv 30).
13. **UI surface:** Patient sees composed message; staff sees full compose audit.
14. **Failure mode:** Composition produces invalid envelope per CS-11 → reject + emit event.
15. **Audit / event:** `cns_composition_decided` per DL-16 inv 30 with full input/output/rationale.
16. **Evidence citations:** §2.16 composition + 10 invariants; Constraint 1; §2.11 attribution.
17. **Test case:** Todd has eligible: (a) booking_confirmation (action_kind=patient_message; consent_class=transactional); (b) pre-care prep stop-retinols (action_kind=patient_message; consent_class=clinical). Different consent_class → MUST split per invariant 5. Two messages dispatched separately. AI polishes phrasing; never invents content not in Intervention Context.

---

## Section D — Channel + content composition

### Rule CS-15: Channel selection follows patient preference + DL-16 amendment 42 default_channels[] + fallback chain

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody allows tenant to set SMS + email per outbound type; patient can opt out per channel; no PII-aware channel selection per outbound.
2. **Cross-app pattern reference (per §2.19 Citation Map guardrail #1 + #2):**
   - **Twilio / SendGrid** — channel-specific delivery + retry
   - **AWS SNS** — multi-protocol topic with subscription per recipient
   - **healthcare patient portal (Epic MyChart)** — patient channel preference + portal-first fallback
3. **Underlying tenant need:** Patient preferred SMS + has email; clinical message (PHI-bearing) MUST NOT go over SMS if patient has not consented to PHI-over-SMS per HIPAA. Fallback: if SMS fails (number invalid / bounced), try email; if both fail, mark `failed_delivery` and escalate.
4. **OMNI generic primitive / rule:** Per §2.19 Citation Map guardrail #1 (contact endpoint resolution; cites DL-16 amendment 42 default_channels + DL-16 inv 7 payload minimization + DL-16 amendment 42 pii_exposure_class + §1Q.23 patient channel preference + communications_topology.md §3 + §6):
    - Intersect: registry default_channels[] ∩ patient preferred_channels[] − patient blocked_channels[] − PHI-incompatible channels (per consent_class + pii_exposure_class)
    - Order by patient preference rank
    - Dispatch primary channel; on rail failure (per §2.19 #2 delivery lifecycle) try fallback channel
    - Exhaustion → `failed_delivery` per CS-01 state machine
5. **Divergence / improvement vs Mindbody:** OMNI PHI-aware + preference-aware + fallback chain. Mindbody simpler.
6. **Anti-copy warning:** Do NOT dispatch PHI-bearing message over SMS without patient PHI-SMS consent (per HIPAA). Do NOT skip patient blocked_channels[] check. Do NOT bypass §1Q.23 patient channel preference.
7. **Substrate pressure-test verdict:** **OK** — §2.19 Citation Map guardrail #1 cites existing locked doctrine.

#### Section B — Rule definition

8. **Trigger:** CS-10 envelope ready for dispatch.
9. **Required inputs:** envelope.consent_class / envelope.pii_exposure_class / registry.default_channels[] / patient.preferred_channels + blocked_channels + phi_sms_consent / communications_topology.md infrastructure.
10. **Decision logic:** Intersect + order + dispatch; fallback on rail failure per §2.19 #2.
11. **Output / state change:** outbound_send_log row per rail (existing substrate); CNS Action Envelope notes channel chosen.
12. **Owning substrate:** Existing communications_topology infrastructure (rail-side); orchestration_action carries channel chosen.
13. **UI surface:** Patient receives via chosen channel; admin observability sees full channel resolution path.
14. **Failure mode:** All channels exhausted → `failed_delivery` confirmation_state per CS-01 + staff queue.
15. **Audit / event:** `outbound_channel_resolved` + `outbound_delivery_attempted` per DL-16 amendment 42 + rail-side outbound_send_log per §1Q.14.2 8-gate.
16. **Evidence citations:** §2.19 Citation Map guardrail #1; communications_topology.md §3 + §6; DL-16 amendment 42; DL-16 inv 7.
17. **Test case:** Sarah prefers SMS + email; PHI-SMS consent=TRUE; clinical pre-care message (consent_class=clinical / pii_exposure_class=template-only). Intersect: SMS first, then email fallback. SMS dispatched. Twilio reports delivered.

### Rule CS-16: Template selection per DL-16 amendment 42 default_template_set + per-tenant override

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Knox chat raw line 6356-6638 enumerates ~30 named templates: Appointment Confirmation Manual / Appointment Follow-up / Birthday Email / Contract Reminder / etc. Each template has email + SMS variant. Org-overridable per studio.
2. **Cross-app pattern reference:**
   - **Mailchimp** — template library + per-account override
   - **SendGrid Dynamic Templates** — versioned templates with dynamic substitution
3. **Underlying tenant need:** Tenant brand needs custom copy ("Welcome to Bloom!" not generic "Welcome"). Default templates exist per outbound kind; tenant overrides per brand.
4. **OMNI generic primitive / rule:** Per DL-16 amendment 42 default_template_set + DL-16 inv 8 org-isolation:
    - Each orchestration_action_kind registry row points to default_template_set FK
    - Tenant may override per brand via DL-19 settings (Amendment J(a) Context Module governance for template scope; tenant-extensible)
    - Template selection follows: tenant_override > brand_override > registry_default
    - Templates carry version per Patch 7 binding (`template.version` + `approved_by_actor` + `effective_from` + `effective_to`); decision record per DL-16 inv 30 captures version sent
5. **Divergence / improvement vs Mindbody:** OMNI version-tracked + audit-lineage; Mindbody version invisible.
6. **Anti-copy warning:** Do NOT inline template text in code (templates are substrate). Do NOT skip version capture per Patch 7.
7. **Substrate pressure-test verdict:** **OK** — DL-16 amendment 42 default_template_set + Patch 7 versioning cover.

#### Section B — Rule definition

8. **Trigger:** CS-10 envelope ready for content render.
9. **Required inputs:** orchestration_action_kind / tenant_id / brand_id / Context Modules.
10. **Decision logic:** Resolve template per hierarchy; render with variable substitution from Context Modules.
11. **Output / state change:** Rendered message body in CNS Action Envelope payload.
12. **Owning substrate:** template_set substrate per DL-16 amendment 42 + Patch 7 versioning + tenant override per DL-19.
13. **UI surface:** Admin template editor per tenant; staff observability sees template version sent.
14. **Failure mode:** Template missing → fallback to registry default; if registry default missing → emit `template_lookup_failed` + dispatch raw fallback OR suppress.
15. **Audit / event:** Per CS-10 envelope captures template_version_sent.
16. **Evidence citations:** DL-16 amendment 42 default_template_set; §2.15 Patch 7 versioning; §2.19 Citation Map guardrail #7.
17. **Test case:** Bloom's booking_confirmation template overrides generic ("Welcome to Bloom! Your appointment Tuesday 2pm Botox with Parrah is confirmed..."). Decision record captures template_version=`bloom_booking_confirmation_v3`.

### Rule CS-17: Quiet hours enforced per DL-16 amendment 42 default_quiet_hours_policy + per-patient override

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody enforces tenant-level quiet hours (e.g., no SMS 9pm-8am); no per-patient quiet hours; clinical_safety bypass not configurable.
2. **Cross-app pattern reference:**
   - **Salesforce Marketing Cloud** — send time optimization + suppression windows
   - **HIPAA TCPA compliance** — quiet hours legally required for non-emergency
3. **Underlying tenant need:** Patient should not receive marketing SMS at 11pm; appointment-tomorrow reminder at 8am ok; clinical_safety bypass for adverse symptom response always allowed.
4. **OMNI generic primitive / rule:** Per DL-16 amendment 42 default_quiet_hours_policy + per-patient profile + §2.16 arbitration:
    - Tenant-level default quiet hours (e.g., 9pm-7am)
    - Per-patient override via Patient Profile Context (per §2.15)
    - Most-restrictive wins per §2.16 composition invariant 8
    - Clinical_safety + appointment_logistics bypass quiet hours per §2.16 arbitration priority order (only when truly urgent — same-day reminder OK; clinical_escalation always OK)
    - 1Q.14.2 gate 5 quiet-hours infrastructure handles deferral
5. **Divergence / improvement vs Mindbody:** OMNI per-patient + per-priority bypass. Mindbody tenant-only.
6. **Anti-copy warning:** Do NOT bypass quiet hours for marketing/hospitality (TCPA risk). Do NOT bypass for routine reminders (only same-day OK).
7. **Substrate pressure-test verdict:** **OK** — DL-16 amendment 42 + 1Q.14.2 gate 5 + Patient Profile Context cover.

#### Section B — Rule definition

8. **Trigger:** CS-10 envelope ready for dispatch.
9. **Required inputs:** envelope.quiet_hours_policy / envelope.message_purpose / patient.quiet_hours_override / current_local_time.
10. **Decision logic:** If within quiet hours AND not bypass-eligible → defer to next allowed window per 1Q.14.2 gate 5; else dispatch.
11. **Output / state change:** Either immediate dispatch OR scheduled deferred dispatch.
12. **Owning substrate:** 1Q.14.2 quiet hours infrastructure; orchestration_action carries scheduled_dispatch_at.
13. **UI surface:** Admin observability shows deferred outbounds.
14. **Failure mode:** Deferred dispatch eventually fires; if patient timezone is wrong, may dispatch at unintended time (data quality issue).
15. **Audit / event:** `outbound_deferred_quiet_hours` per DL-16 inv 30.
16. **Evidence citations:** DL-16 amendment 42 default_quiet_hours_policy; 1Q.14.2 gate 5; TCPA compliance.
17. **Test case:** Marketing benefit-expiring email queued 11:30pm patient local. Quiet hours = 9pm-7am. Defer to 7am next morning per gate 5. Audit captures deferral reason.

### Rule CS-18: PII / consent_class compliance per DL-16 amendment 42 + DL-16 inv 7 payload minimization

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody templates can include patient name + service + provider + time; no PII tier discipline; staff sometimes accidentally include PHI in marketing SMS.
2. **Cross-app pattern reference:** N/A — HIPAA + DL-16 inv 7 internal doctrine.
3. **Underlying tenant need:** Marketing message MUST NOT include PHI (procedure type / clinical details). Transactional appointment reminder MAY include patient first name + appointment time + provider. Clinical message MUST be patient-portal-or-explicit-PHI-consent only.
4. **OMNI generic primitive / rule:** Per DL-16 amendment 42 pii_exposure_class + DL-16 inv 7 payload minimization + envelope.consent_class:
    - `pii_exposure_class = envelope` — message envelope only (e.g., "You have a new message in your patient portal"); body not in SMS/email
    - `pii_exposure_class = template-only` — generic template variables only (first name + appointment time + provider first name)
    - `pii_exposure_class = payload-required` — full PHI in body (only via patient portal OR PHI-SMS-consented channel)
    - Pre-dispatch validation: cross-check pii_exposure_class against rendered message content; if mismatch → reject + emit `pii_exposure_violation` per DL-16 inv 30
5. **Divergence / improvement vs Mindbody:** OMNI enforces PII tier per outbound; Mindbody implicit + violations frequent.
6. **Anti-copy warning:** Do NOT include service_type/intervention name in marketing message body. Do NOT bypass PII tier check for "convenience."
7. **Substrate pressure-test verdict:** **OK** — DL-16 amendment 42 pii_exposure_class + DL-16 inv 7 cover.

#### Section B — Rule definition

8. **Trigger:** CS-10 envelope ready for dispatch + rendered content.
9. **Required inputs:** envelope.pii_exposure_class / rendered message body / patient channel + consent state.
10. **Decision logic:** Validate body against tier; if violation → reject + escalate.
11. **Output / state change:** Either approved dispatch OR rejected with reason.
12. **Owning substrate:** Validation in CNS Action Envelope dispatch path; audit per DL-16 inv 30.
13. **UI surface:** Staff observability sees PII violations.
14. **Failure mode:** Violation → reject + manual staff resolution.
15. **Audit / event:** `pii_exposure_violation` per DL-16 inv 30.
16. **Evidence citations:** DL-16 amendment 42 pii_exposure_class; DL-16 inv 7; HIPAA payload minimization.
17. **Test case:** Marketing campaign template accidentally includes "your Botox appointment is coming up." pii_exposure_class=envelope (marketing). Validation rejects — body contains PHI procedure name. Staff sees error + edits template.

---

## Section E — Lane 2 pre-care cadence

### Rule CS-19: Reminder cadence per service-policy + intervention-context-driven; tenant-configurable

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Knox chat raw line 6612 + Layer 2 B.7: Mindbody supports "Reservation Reminder" + manual confirmation. Cadence is tenant-set: typically 24h before + same-day. Per-service cadence override is limited.
2. **Cross-app pattern reference:**
   - **OpenTable** — confirmation immediate + day-before reminder
   - **Calendly** — confirmation + reminder configurable per event
   - **Acuity** — multi-touchpoint reminder series (booking + 24h + 1h)
3. **Underlying tenant need:** Standard appointment reminders (24h + same-day) work for most; complex services need additional touchpoints (CoolPeel: stop retinols 5 days before; arrive clean skin 0 days before; expect downtime 7 days; check-in 1 day after).
4. **OMNI generic primitive / rule:** Per §2.15 Intervention Context + DL-19 service-policy:
    - Default reminder cadence (binding deterministic per Constraint 5):
      - T-24h: `outbound.scheduling.day_before_reminder`
      - T-2h: `outbound.scheduling.same_day_reminder` (tenant opt-in)
    - Lane 2 cadence overlay per service Intervention Context `cns_message_triggers[]` + `prep_instructions[].lead_time_days`:
      - For each entry, fire `outbound.scheduling.pre_care_prep` at scheduled time
    - Cadence stored per service in `intervention_context.cadence_template` (Amendment J(a) candidate)
    - All emissions go through CNS Action Envelope per CS-10 + arbitration per CS-09
5. **Divergence / improvement vs Mindbody:** OMNI service-protocol-driven cadence; Mindbody single tenant cadence.
6. **Anti-copy warning:** Do NOT hard-code cadence in code (substrate-driven). Do NOT skip CNS arbitration for Lane 2 outbounds (contact-load budget applies).
7. **Substrate pressure-test verdict:** **OK with extension** — Amendment J(a) Intervention Context substrate must carry `cadence_template` + `cns_message_triggers[]`; flagged Round 5/7.

#### Section B — Rule definition

8. **Trigger:** `appointment.scheduled` event per CS-05 starts cadence countdown.
9. **Required inputs:** appointment_id / service_id / Intervention Context + cadence_template.
10. **Decision logic:** Schedule orchestration_action emissions at each cadence offset; CNS arbitrates at each emission.
11. **Output / state change:** Multiple orchestration_action rows scheduled per cadence.
12. **Owning substrate:** orchestration_action substrate + scheduled_dispatch_at field; Amendment J(a) Intervention Context.
13. **UI surface:** Admin sees scheduled outbound queue per appointment; patient experiences sequence.
14. **Failure mode:** Appointment cancelled mid-cadence → suppress remaining outbounds per CS-21 cascade.
15. **Audit / event:** `outbound_cadence_scheduled` per DL-16 inv 30.
16. **Evidence citations:** §2.15 Intervention Context; Constraint 5 deterministic basic path; §2.19 Citation Map guardrail #7.
17. **Test case:** Todd books CoolPeel Day 0. Cadence emits: Day -7 booking_confirmation + Day -5 stop-retinols + Day -1 reminder + Day 0 arrival + Day +1 post-care check-in + Day +7 photo check-in. 6 scheduled outbounds; each arbitrated per CS-09 at emission time.

### Rule CS-20: Pre-care prep messages composed from approved Intervention Context modules (Constraint 1)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody allows custom note per service via staff edit (free-text); not protocol-version-controlled; staff edits drift over time.
2. **Cross-app pattern reference:**
   - **Healthcare patient education** — version-controlled content libraries (e.g., MedlinePlus / UpToDate patient handouts)
   - **Aviation pre-flight briefing** — assembled from versioned content modules
3. **Underlying tenant need:** Pre-care prep content (stop retinols, avoid NSAIDs, arrive clean, etc.) MUST be protocol-version-controlled. Decision record per DL-16 inv 30 captures which version was sent.
4. **OMNI generic primitive / rule:** Per §2.15 Patch 7 Context Module versioning + Constraint 1 (AI never invents clinical content):
    - Compose body from `intervention_context.prep_instructions[]` matching cadence offset
    - Capture `intervention_context.version` + `intervention_context.approved_by_actor` in decision record per DL-16 inv 30
    - AI may polish phrasing (per `permits_ai_drafting=TRUE` if tenant allows) but content semantics MUST come from approved module
5. **Divergence / improvement vs Mindbody:** OMNI version-controlled + auditable; Mindbody drift-prone.
6. **Anti-copy warning:** Do NOT allow AI to add prep instructions not in `intervention_context.prep_instructions[]`. Do NOT skip version capture.
7. **Substrate pressure-test verdict:** **OK with extension** — Amendment J(a) Intervention Context substrate + Patch 7 versioning.

#### Section B — Rule definition

8. **Trigger:** CS-19 cadence emission.
9. **Required inputs:** appointment_id / service_id / Intervention Context + version.
10. **Decision logic:** Filter prep_instructions[] by cadence offset; compose body; capture version.
11. **Output / state change:** Patient_message orchestration_action with composed body.
12. **Owning substrate:** Amendment J(a) Intervention Context + decision record per DL-16 inv 30.
13. **UI surface:** Patient receives composed message; staff observability sees content + version.
14. **Failure mode:** Intervention Context missing → fallback to generic confirmation (CS-19 standard reminder) + audit event.
15. **Audit / event:** `pre_care_prep_composed` per DL-16 inv 30 with intervention_context_version + content modules used.
16. **Evidence citations:** §2.15 Patch 7; Constraint 1; §2.19 Citation Map guardrail #7.
17. **Test case:** Todd Day -5 prep emission. CNS composes "Hi Todd — your CoolPeel CO2 is in 5 days. Please stop retinoids today + continue avoiding them through Day +5 after treatment. We'll see you Tuesday 2pm with Amber." Decision record captures `intervention_context_id=coolpeel_co2_v3` + content modules `prep_retinol_stop_v2`.

### Rule CS-21: Suppression cascade on appointment lifecycle change per D3↔D4 seam (CS-35)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody sometimes sends reminders for cancelled appointments due to cron lag; user complaint in Knox chat raw.
2. **Cross-app pattern reference:**
   - **Airline** — flight cancelled → all downstream notifications suppressed
   - **Calendly** — meeting cancelled → reminder series suppressed
3. **Underlying tenant need:** Cancelled / rescheduled / no-showed appointments MUST stop receiving cadence outbounds. Cascade is automatic.
4. **OMNI generic primitive / rule:** Per D3↔D4 seam (CS-35) + Round 3.1 §2.5 cross-domain seam doctrine:
    - On appointment.status transition to `cancelled` OR `rescheduled` OR `no_showed` (D3 LC-12 / LC-16 / LC-18) → emit `appointment.lifecycle_changed` event
    - Domain 4 listener: find all pending scheduled orchestration_action rows for appointment_id → mark `suppressed` action_kind per §2.16
    - Reschedule case: cascade preserves audit; new appointment_id gets fresh cadence
5. **Divergence / improvement vs Mindbody:** OMNI deterministic cascade; Mindbody race-prone.
6. **Anti-copy warning:** Do NOT continue cadence after cancel. Do NOT dual-fire on reschedule (cancel old cadence; start new).
7. **Substrate pressure-test verdict:** **OK** — D3↔D4 seam per CS-35 covers.

#### Section B — Rule definition

8. **Trigger:** `appointment.lifecycle_changed` event from D3.
9. **Required inputs:** appointment_id / new lifecycle state / Domain 4 pending orchestration_action list.
10. **Decision logic:** Suppress pending; if reschedule, start fresh cadence on new appointment.
11. **Output / state change:** Pending orchestration_action rows marked suppression; new cadence if reschedule.
12. **Owning substrate:** orchestration_action substrate + D3↔D4 seam events.
13. **UI surface:** Staff observability sees suppression cascade.
14. **Failure mode:** Race condition (outbound dispatches just as cancel commits) → idempotency catch per CS-07.
15. **Audit / event:** `cadence_suppressed_lifecycle_cascade` per DL-16 inv 30.
16. **Evidence citations:** D3↔D4 seam per CS-35; Round 3.1 §2.5.
17. **Test case:** Todd cancels CoolPeel Day -3. D3 LC-12 emits `appointment.cancelled`. Domain 4 suppresses Day -1 reminder + Day 0 arrival + Day +1 check-in + Day +7 photo check-in. Cancellation_notification dispatched per CS-06 separately.

### Rule CS-22: Confirmation no-response timeout per tenant policy; transitions to `expired_no_response`

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody timeouts vary by tenant; default is 24h. No-response is sometimes auto-cancel (dangerous), sometimes staff queue.
2. **Cross-app pattern reference:**
   - **OpenTable** — no-response → staff review (not auto-cancel)
   - **healthcare patient portals** — no-response → staff outreach
3. **Underlying tenant need:** Some patients don't reply to text reminders but show up anyway. Auto-cancel on no-response is dangerous; staff queue is safer.
4. **OMNI generic primitive / rule:** Per CS-01 + CS-02 + tenant `confirmation_no_response_policy`:
    - Default timeout: configurable per tenant (e.g., 12h after confirmation_sent)
    - On timeout elapsed without inbound: confirmation_state → `expired_no_response` per CS-02
    - Does NOT auto-cancel appointment.status; staff queue per CS-30
    - Tenant may opt INTO auto-cancel for specific high-deposit services (rare; explicit per service-policy)
5. **Divergence / improvement vs Mindbody:** OMNI staff-queue-by-default; tenant-opt-in auto-cancel for explicit cases.
6. **Anti-copy warning:** Do NOT auto-cancel on no-response by default. Do NOT skip staff review.
7. **Substrate pressure-test verdict:** **OK** — CS-01 state machine + tenant policy cover.

#### Section B — Rule definition

8. **Trigger:** Timeout elapsed (cron) since confirmation_sent.
9. **Required inputs:** confirmation_state / sent_at / tenant policy.
10. **Decision logic:** If still confirmation_sent + timeout elapsed → transition to expired_no_response + staff queue + tenant policy check for auto-cancel opt-in.
11. **Output / state change:** confirmation_state → `expired_no_response`; staff_task or auto-cancel per policy.
12. **Owning substrate:** appointment.confirmation_state per CS-01 + appointment_confirmation_event per DL-20 inv 40.
13. **UI surface:** Staff queue for expired_no_response cases.
14. **Failure mode:** Cron lag → may transition late (eventually consistent; acceptable per DL-16 inv 21 if non-clinical).
15. **Audit / event:** `confirmation_state_changed.confirmation_sent_to_expired_no_response` per DL-16 amendment 42.
16. **Evidence citations:** CS-01 + CS-02 state machine; DL-19 tenant policy hierarchy.
17. **Test case:** Sarah doesn't reply to Day -2 SMS. 12h later, cron fires; confirmation_state → expired_no_response; staff_task created for front_desk to call Sarah.

---

## Section F — Inbound response handling + classification (Lane 1)

### Rule CS-23: Inbound replies route to CNS classifier per DL-14 inv 18-22

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody inbound SMS replies go to staff inbox; manual review per message; no AI classification.
2. **Cross-app pattern reference (per §2.19 Citation Map guardrail #5):**
   - **Healthcare patient portals** — inbound triage (read receipts + categorization)
   - **Twilio Studio** — programmable flows for inbound handling
   - **4h phase work (existing OMNI build)** — rich chat rendering + action items + inbound classification
3. **Underlying tenant need:** Patient replies "C" / "1" / "yes" / "confirm" / "got it" / "yep" all mean confirmed. "Reschedule" / "Can we move it?" / "Different time?" all mean reschedule. Free-text replies need classification.
4. **OMNI generic primitive / rule:** Per DL-14 inv 18-22 bounded autopilot + §2.19 Citation Map guardrail #5 (cites DL-16 inv 3 category c inbound_messages + §1P pipeline + 4h phase work):
    - Inbound from outbound dispatched per Round 4 routes via thread_policy (per CS-12)
    - CNS classifier (DL-14 inv 18) processes inbound per cns_decision substrate
    - Classifier extracts: `classified_intent` ENUM (confirm / cancel_request / reschedule_request / question / opt_out / unintelligible) + `classifier_confidence` NUMERIC
    - Per Constraint 5 (graceful degradation): if AI disabled, deterministic keyword match handles "C / 1 / yes / confirm / cancel / reschedule / no / stop" — all other replies → staff_review_required
5. **Divergence / improvement vs Mindbody:** OMNI AI-assisted with deterministic fallback; Mindbody manual only.
6. **Anti-copy warning:** Do NOT skip CNS classifier for free-text replies (Pattern 9 anti-pattern: don't re-author classification when DL-14 + 4h phase work already does it). Do NOT let AI auto-cancel on ambiguous intent (Constraint 1 boundary).
7. **Substrate pressure-test verdict:** **OK** — §2.19 Citation Map guardrail #5 cites existing locked doctrine.

#### Section B — Rule definition

8. **Trigger:** Inbound message via §1P pipeline.
9. **Required inputs:** inbound message body / source thread (per thread_policy) / patient_id / appointment_id (if attach_to_appointment_thread).
10. **Decision logic:** Route to CNS classifier; produce classified_intent + confidence; write cns_decision row.
11. **Output / state change:** cns_decision row; CS-24 confidence check decides next.
12. **Owning substrate:** cns_decision (DL-14 inv 18-22); inbound_messages (DL-16 inv 3 category c); §1P pipeline.
13. **UI surface:** Staff sees classification result in conversation thread.
14. **Failure mode:** Classifier service down → fallback to deterministic keyword match per Constraint 5.
15. **Audit / event:** `inbound_classified` per DL-16 inv 30 with intent + confidence.
16. **Evidence citations:** DL-14 inv 18-22; §2.19 Citation Map guardrail #5; §1P pipeline; 4h phase work.
17. **Test case:** Sarah replies "C" to Day -2 SMS. CNS classifier identifies intent=confirm + confidence=0.99. Above threshold per CS-24 → deterministic transition per CS-26.

### Rule CS-24: Classifier confidence threshold gates deterministic transition vs staff review

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** N/A.
2. **Cross-app pattern reference:**
   - **Email categorization (Gmail)** — high-confidence auto-route; low-confidence inbox
   - **Healthcare clinical decision support** — confidence threshold per intervention severity
3. **Underlying tenant need:** AI should not auto-cancel an appointment based on a 0.55-confidence "this looks like a cancel" classification. High-confidence (>0.85) → deterministic transition. Lower → staff_review_required.
4. **OMNI generic primitive / rule:** Per DL-14 inv 18 bounded autopilot + tenant `cns_classifier_confidence_threshold` policy:
    - Default threshold: 0.85 for cancel/reschedule (HIGH stakes; staff review on ambiguity)
    - 0.75 for confirm (lower stakes; positive intent)
    - Tenant-configurable per service-policy + per intent
    - Below threshold → confirmation_state → `staff_review_required` per CS-02
5. **Divergence / improvement vs Mindbody:** OMNI deterministic policy threshold; Mindbody N/A.
6. **Anti-copy warning:** Do NOT use a global threshold for all intents (cancel/reschedule are higher stakes). Do NOT lower threshold for "convenience."
7. **Substrate pressure-test verdict:** **OK** — DL-14 inv 18 + tenant policy cover.

#### Section B — Rule definition

8. **Trigger:** CS-23 produces classified_intent + confidence.
9. **Required inputs:** classified_intent / confidence / tenant threshold per intent.
10. **Decision logic:** Compare confidence vs threshold per intent; route to CS-26 or CS-30.
11. **Output / state change:** Either deterministic state transition OR staff_review_required transition.
12. **Owning substrate:** cns_decision substrate per DL-14 inv 22.
13. **UI surface:** Staff sees thresholds + decisions in observability.
14. **Failure mode:** Confidence NULL (classifier error) → default to staff_review_required.
15. **Audit / event:** `classifier_threshold_evaluated` per DL-16 inv 30.
16. **Evidence citations:** DL-14 inv 18-22; tenant policy per DL-19.
17. **Test case:** Daisy replies "maybe? idk." Classifier: intent=reschedule_request / confidence=0.55. Threshold 0.85 → below → staff_review_required.

### Rule CS-25: Deterministic intent extraction supports 5+ intent kinds (registry-extensible)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Knox chat raw cites Mindbody confirmation responses: "C" / "1" / "Y" / "yes" → confirm; "X" / "0" / "cancel" → cancel; manual for rest.
2. **Cross-app pattern reference:**
   - **Twilio Conversational Intents** — intent registry per use case
   - **Slack interactive messages** — explicit response options
3. **Underlying tenant need:** Beyond confirm/cancel, patients reply with reschedule asks, questions, opt-out requests, unintelligible noise. Each needs explicit handling.
4. **OMNI generic primitive / rule:** Per DL-14 inv 18 + DL-20 inv 40 appointment_confirmation_event.classified_intent ENUM (registry-extensible):
    - `confirm` — positive acknowledgment
    - `cancel_request` — explicit cancellation ask
    - `reschedule_request` — explicit reschedule ask
    - `question` — free-text question (route to staff_review)
    - `opt_out` — STOP / unsubscribe (compliance-critical)
    - `unintelligible` — classifier could not extract intent
    - Future: `symptom_report` (clinical lane post-care), `preference_response` (hospitality lane), `payment_issue_response` (billing lane)
5. **Divergence / improvement vs Mindbody:** OMNI explicit registry; Mindbody narrow set.
6. **Anti-copy warning:** Do NOT hard-code intent values in code (registry per DL-16 inv 5 + 9 + 29). Do NOT skip `opt_out` handling (TCPA legal requirement).
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 40 classified_intent ENUM + DL-16 inv 5 registry pattern.

#### Section B — Rule definition

8. **Trigger:** CS-23 classifier produces intent.
9. **Required inputs:** classified_intent / source thread / patient_id.
10. **Decision logic:** Route per intent: confirm → CS-26 transition; cancel/reschedule → CS-26 transition + D3 seam; opt_out → patient profile update + suppress future; question/unintelligible → staff_review.
11. **Output / state change:** Per route.
12. **Owning substrate:** appointment_confirmation_event.classified_intent per DL-20 inv 40.
13. **UI surface:** Staff sees intent + handling in observability.
14. **Failure mode:** Unknown intent value → reject per registry governance.
15. **Audit / event:** `intent_routed` per DL-16 inv 30.
16. **Evidence citations:** DL-20 inv 40; DL-14 inv 18; DL-16 inv 5 registry pattern.
17. **Test case:** Patient replies "STOP" → intent=opt_out → patient profile updated to mark SMS opt-out → suppress future Round 4 SMS outbound (still allow email if not opted-out there) + audit.

### Rule CS-26: Deterministic state transition writes `appointment_confirmation_event` per DL-20 inv 40

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody confirmation event is single `confirmed_at` timestamp; no audit lineage of round-trip; no inbound classification record.
2. **Cross-app pattern reference:** N/A — DL-20 inv 40 internal doctrine.
3. **Underlying tenant need:** Audit lineage MUST preserve outbound + inbound + classification + transition as separate event rows per DL-20 inv 40 round_trip_kind ENUM.
4. **OMNI generic primitive / rule:** Per DL-20 inv 40 binding:
    - On CS-23 inbound classification → write `appointment_confirmation_event` row with `round_trip_kind=cns_classification` + classifier_confidence + linked_cns_decision_id
    - On CS-24 threshold pass → write `appointment_confirmation_event` row with `round_trip_kind=state_transition` + state_transition_applied=TRUE + resulting_state_transition_from + to per CS-01
    - On CS-24 threshold fail → write `appointment_confirmation_event` row with `round_trip_kind=state_transition` + state_transition_applied=FALSE + requires_staff_review=TRUE per CS-30
5. **Divergence / improvement vs Mindbody:** OMNI multi-event audit lineage; Mindbody single timestamp.
6. **Anti-copy warning:** Do NOT duplicate messaging content in appointment_confirmation_event (linked FK only per DL-20 inv 40 guard).
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 40 covers.

#### Section B — Rule definition

8. **Trigger:** CS-24 threshold evaluation completes.
9. **Required inputs:** classified_intent / confidence / source thread / appointment_id.
10. **Decision logic:** Write event row(s) per DL-20 inv 40 schema.
11. **Output / state change:** appointment_confirmation_event rows persisted; confirmation_state may transition per CS-01.
12. **Owning substrate:** appointment_confirmation_event (DL-20 inv 40).
13. **UI surface:** Staff observability sees full round-trip chain per appointment.
14. **Failure mode:** Write failure → emit `confirmation_event_write_failed` + retry.
15. **Audit / event:** `appointment_confirmation_event_written` per DL-16 inv 30.
16. **Evidence citations:** DL-20 inv 40 binding.
17. **Test case:** Sarah replies "C" → CS-23 classifier 0.99 confirm → CS-24 threshold pass → CS-26 writes: (1) cns_classification event, (2) state_transition event with from=confirmation_sent to=confirmed. CS-01 transitions confirmation_state. CS-04 projects status_flags Confirmed.

### Rule CS-27: Opt-out compliance per TCPA + DL-16 amendment 42 consent_class

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Knox chat raw + Layer 2 Section B.7: Mindbody supports STOP / UNSUBSCRIBE keywords; once opted out, no further SMS/email.
2. **Cross-app pattern reference:**
   - **TCPA legal requirement** — STOP must immediately opt-out + acknowledge
   - **CAN-SPAM** — unsubscribe link required in marketing email
3. **Underlying tenant need:** Opt-out is legally required + non-bypassable.
4. **OMNI generic primitive / rule:** Per DL-16 amendment 42 consent_class + DL-16 inv 7 payload minimization + TCPA:
    - CS-25 detects opt_out intent → patient profile flag updated (`opt_out_per_consent_class`)
    - Future Round 4 outbounds: arbitration per CS-09 checks opt_out before dispatch
    - Marketing/hospitality outbounds: opt-out per consent_class blocks ALL future of that class
    - Transactional/clinical_safety: opt-out per consent_class still blocks marketing but not clinical_safety (per TCPA + HIPAA legal carve-out for emergency)
    - Confirmation outbound: tenant decides if opt-out applies (most tenants allow transactional even if marketing opted out)
5. **Divergence / improvement vs Mindbody:** OMNI per-consent_class opt-out; Mindbody all-or-nothing.
6. **Anti-copy warning:** Do NOT bypass opt-out for any reason except clinical_safety. Do NOT confuse marketing opt-out with transactional opt-out.
7. **Substrate pressure-test verdict:** **OK** — DL-16 amendment 42 + Patient Profile Context + TCPA cover.

#### Section B — Rule definition

8. **Trigger:** CS-25 detects opt_out intent.
9. **Required inputs:** patient_id / consent_class / source thread.
10. **Decision logic:** Update Patient Profile Context per consent_class; emit `patient_opt_out_recorded`.
11. **Output / state change:** Patient profile flag set; subsequent outbounds checked per CS-09 arbitration.
12. **Owning substrate:** Patient Profile Context (Amendment J(a) candidate); audit per DL-16 inv 30.
13. **UI surface:** Patient receives auto-acknowledgment "You've been unsubscribed from [class] messages." Staff sees opt-out in profile.
14. **Failure mode:** Profile update fails → emit `opt_out_recording_failed` + escalate (compliance-critical).
15. **Audit / event:** `patient_opt_out_recorded` per DL-16 inv 30 with consent_class + source_event.
16. **Evidence citations:** DL-16 amendment 42; TCPA; CAN-SPAM; HIPAA emergency carve-out.
17. **Test case:** Patient replies "STOP" to marketing SMS. Opt-out per marketing class recorded. Future marketing SMS suppressed. Transactional appointment reminders continue (tenant policy). Clinical_safety always sends per legal carve-out.

---

## Section G — Graceful degradation (Constraint 5)

### Rule CS-28: Basic deterministic reminder path works WITHOUT AI per Constraint 5

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody reminders are 100% deterministic; no AI. Works because basic.
2. **Cross-app pattern reference:**
   - **Aviation autopilot** — degrades gracefully when sensors fail; manual flight always possible
   - **Tesla Autopilot** — falls back to driver if conditions unsafe
3. **Underlying tenant need:** If AI service is down OR tenant disables AI: booked confirmation + day-before reminder + same-day reminder + cancellation handling + inbound confirmation classification (deterministic keyword match) + staff ambiguity queue MUST still work.
4. **OMNI generic primitive / rule:** Per Constraint 5 + §2.18 Section J binding:
    - Core deterministic path components:
      - CS-05 booking_confirmation emission (no AI required; template-based)
      - CS-19 day_before_reminder + same_day_reminder (no AI; template-based)
      - CS-21 lifecycle cascade suppression (no AI; event-driven)
      - CS-23 fallback keyword classifier (no AI; deterministic regex: confirm = ["C", "1", "y", "yes", "confirm", "ok", "got it"] / cancel = ["cancel", "X", "0"] / reschedule = ["reschedule", "move", "different time"])
      - CS-26 deterministic state transition for matched keywords
      - CS-30 staff queue for unmatched keywords
    - Per `permits_ai_drafting=FALSE` in envelope OR tenant `cns_autonomy_mode=disabled`: all CNS Action Envelopes emit with `permits_ai_drafting=FALSE` for that scope
    - AI composition (CS-08 Intervention Context assembly) becomes static template fallback per CS-19 default cadence
5. **Divergence / improvement vs Mindbody:** OMNI explicitly preserves deterministic path; Mindbody is deterministic-only by design (no enhancement).
6. **Anti-copy warning:** Do NOT make basic reminders depend on AI service. Do NOT skip keyword-match fallback when AI is enabled (defense-in-depth).
7. **Substrate pressure-test verdict:** **OK** — Constraint 5 cited from §2.16 §2.18 cover.

#### Section B — Rule definition

8. **Trigger:** AI service status check at envelope dispatch time.
9. **Required inputs:** AI service availability / tenant cns_autonomy_mode / envelope.permits_ai_drafting.
10. **Decision logic:** If AI unavailable OR disabled: skip AI composition; use static template + deterministic keyword match; flag in audit.
11. **Output / state change:** Outbound dispatched via static path; envelope notes degradation.
12. **Owning substrate:** orchestration_action + DL-14 inv 18 autonomy mode.
13. **UI surface:** Admin observability shows degradation events.
14. **Failure mode:** Both AI and static path fail → manual staff dispatch + escalation.
15. **Audit / event:** `cns_degraded_to_deterministic` per DL-16 inv 30.
16. **Evidence citations:** Constraint 5; §2.18 Section J; DL-14 inv 18 autonomy mode.
17. **Test case:** Tenant temporarily disables AI (cost reduction trial). Sarah's booking still gets booking_confirmation (template-based). Sarah replies "C" → keyword match → confirmed. Day -1 reminder + same-day reminder fire on schedule. All Round 4 core works.

### Rule CS-29: AI composition is an ENHANCEMENT layer; never a DEPENDENCY

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** N/A.
2. **Cross-app pattern reference:** N/A — Constraint 5 internal doctrine.
3. **Underlying tenant need:** AI composition (CS-08 Intervention Context assembly + CS-20 prep instructions assembly + CS-23 inbound classification) ENHANCES patient experience. Removing it must NOT break Round 4.
4. **OMNI generic primitive / rule:** Per Constraint 5:
    - Every AI-enabled Round 4 outbound has a deterministic fallback
    - Tenant can disable AI per DL-14 inv 18 autonomy mode; Round 4 continues working
    - Patient-facing experience: less personalized but still functional + reliable
5. **Divergence / improvement vs Mindbody:** OMNI separates AI value from AI necessity.
6. **Anti-copy warning:** Do NOT couple any Round 4 core rule to AI service availability. Do NOT make Lane 2 protocol-aware comms a hard requirement (it's enhancement on top of Lane 1 core).
7. **Substrate pressure-test verdict:** **OK** — Constraint 5 + §2.18 Section J cover.

#### Section B — Rule definition

8. **Trigger:** N/A — design-time invariant.
9. **Required inputs:** N/A.
10. **Decision logic:** Round 4 architecture review: each rule has AI-on and AI-off path.
11. **Output / state change:** N/A — invariant.
12. **Owning substrate:** N/A.
13. **UI surface:** N/A.
14. **Failure mode:** Round 4 author writes a rule with AI hard dependency → flag in §2.18 Section J pre-brief review.
15. **Audit / event:** N/A.
16. **Evidence citations:** Constraint 5; §2.18 Section J.
17. **Test case:** Auditor reviews Round 4 rules. Every rule with AI path has deterministic fallback path. Audit passes.

### Rule CS-30: Staff ambiguity queue resolves classifier-low-confidence + free-text questions

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Mindbody routes ambiguous inbound to staff inbox; manual triage.
2. **Cross-app pattern reference (per §2.19 Citation Map guardrail #5 + #6):**
   - **Helpdesk ticketing systems** — auto-categorize confident + queue ambiguous
   - **4h phase work (existing OMNI build)** — patient_action_items + staff triage queue
3. **Underlying tenant need:** When CNS classifier confidence < threshold OR intent is question/unintelligible: staff must see + resolve. Resolution emits explicit state transition + audit.
4. **OMNI generic primitive / rule:** Per CS-24 + CS-25 + DL-14 inv 17 orchestration_runs (multi-step task containers) + existing patient_action_items substrate per §1G.11:
    - confirmation_state → `staff_review_required` per CS-02
    - staff_task created per §2.16 (action_kind=staff_task / recipient_class=front_desk / action_required=resolve_confirmation / owning_queue=front_desk_queue)
    - Staff resolves: explicit confirmation_state transition per CS-26 with Tier 2 attestation per DL-18 inv 8 (since CNS auto-couldn't decide)
    - SLA: tenant-configurable (default: same-business-day for non-urgent; immediate for clinical)
5. **Divergence / improvement vs Mindbody:** OMNI structured queue + SLA + attestation; Mindbody inbox dump.
6. **Anti-copy warning:** Do NOT let staff resolve without attestation per DL-18 inv 8. Do NOT skip audit (every manual resolution creates appointment_confirmation_event per DL-20 inv 40 + decision record per DL-16 inv 30).
7. **Substrate pressure-test verdict:** **OK** — §2.19 Citation Map guardrail #6 cites existing patient_action_items + §1G.11; new staff_task envelope per §2.16.

#### Section B — Rule definition

8. **Trigger:** CS-24 confidence below threshold OR CS-25 intent=question/unintelligible.
9. **Required inputs:** classified_intent / confidence / appointment_id / patient_id / source thread.
10. **Decision logic:** Create staff_task envelope; emit; queue per CS-13.
11. **Output / state change:** staff_task orchestration_action + queue item; confirmation_state → staff_review_required.
12. **Owning substrate:** orchestration_action staff_task + queue substrate per Amendment J(c) + patient_action_items per §1G.11.
13. **UI surface:** Front desk staff queue UI with task + context.
14. **Failure mode:** SLA breach → escalate to manager per task lifecycle (§2.19 guardrail #6).
15. **Audit / event:** `staff_review_required_queued` per DL-16 inv 30.
16. **Evidence citations:** §2.19 Citation Map guardrails #5 + #6; DL-14 inv 17; §1G.11; DL-18 inv 8.
17. **Test case:** Daisy replies "maybe?" → CS-23 classifier 0.55 confidence reschedule_request → below 0.85 threshold → CS-30 staff_task to front_desk_queue: "Confirm intent: reschedule request from Daisy for Botox tomorrow. Reply ambiguous." Front desk calls Daisy; explicit transition recorded.

---

## Section H — Lane 2 post-care follow-up

### Rule CS-31: `encounter.completed` event triggers Lane 2 post-care cadence

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Knox chat raw line 6360 + Layer 2 Section B.7: Mindbody supports "Appointment Follow-up — Follows up with a client a certain number of days after an appointment is finished." Single touchpoint; no clinical escalation handling.
2. **Cross-app pattern reference:**
   - **Healthcare patient portals** — post-care follow-up surveys + symptom tracking
   - **Surgical follow-up apps** — multi-touchpoint check-ins
3. **Underlying tenant need:** Daisy's post-Botox check-in: "How are you feeling?" — day +1. Adverse symptom triage if she replies "my face is swelling severely" → clinical escalation. Post-CoolPeel: photo check-in at day +7 to monitor healing.
4. **OMNI generic primitive / rule:** Per §2.14 source-agnostic + D4↔D5 seam (CS-36):
    - `encounter.completed` event from Domain 5 triggers Lane 2 post-care cadence per Intervention Context `cns_message_triggers[]` post-care entries
    - Cadence offset starts from `encounter.completed_at`
    - Each emission per CS-19 + CS-20 (intervention-context-driven composition)
    - reply_policy=`clinical_escalation_enabled` for clinical follow-up per CS-12
5. **Divergence / improvement vs Mindbody:** OMNI multi-touchpoint + clinical-aware; Mindbody single-touch.
6. **Anti-copy warning:** Do NOT trigger post-care cadence from `appointment.status=completed` (that's the scheduling-side completion; encounter.completed is the actual care moment per Round 2.6 Guardrail #2 lifecycle ≠ encounter creation). Do NOT skip clinical_escalation_enabled for clinical follow-ups.
7. **Substrate pressure-test verdict:** **OK with extension** — Amendment J(a) Intervention Context substrate + D4↔D5 seam event.

#### Section B — Rule definition

8. **Trigger:** `encounter.completed` event from Domain 5.
9. **Required inputs:** encounter_id / patient_id / Intervention Context per encounter_line.service_id / completed_at.
10. **Decision logic:** Read intervention_context.cns_message_triggers[] post-care entries; schedule orchestration_action emissions per offset.
11. **Output / state change:** Multiple orchestration_action rows scheduled.
12. **Owning substrate:** orchestration_action + Amendment J(a) Intervention Context + Amendment J(c) scheduled queue.
13. **UI surface:** Admin sees scheduled post-care series.
14. **Failure mode:** Encounter completed but Intervention Context missing → fallback generic check-in OR skip per tenant policy.
15. **Audit / event:** `post_care_cadence_scheduled` per DL-16 inv 30.
16. **Evidence citations:** §2.14 source-agnostic; D4↔D5 seam per CS-36; §2.15 Intervention Context post-care.
17. **Test case:** Daisy's Botox encounter completed Tuesday 3pm. Intervention Context = `botox_v2` with post-care entries: [+24h check_in / +7d photo_check_in / +14d satisfaction_survey]. 3 orchestration_action rows scheduled.

### Rule CS-32: Clinical post-care follow-up uses `clinical_escalation_enabled` reply_policy per §2.16

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody post-care follow-up replies all go to staff inbox; no clinical-vs-non-clinical distinction; no auto-escalation.
2. **Cross-app pattern reference:**
   - **Telehealth platforms (Hims/Hers)** — adverse event triage with escalation to provider
   - **Healthcare patient portals** — symptom check-in with provider escalation path
3. **Underlying tenant need:** Post-Botox / CoolPeel / surgical patient may report adverse symptoms. CNS classifier identifies red flags per intervention_context.red_flag_symptoms[]. Red flag → escalate to provider per DL-14 inv 21 absolute clinical interrupt.
4. **OMNI generic primitive / rule:** Per §2.16 reply_policy `clinical_escalation_enabled` + DL-14 inv 21 absolute clinical interrupt + intervention_context.red_flag_symptoms[]:
    - Lane 2 post-care outbound carries `reply_policy=clinical_escalation_enabled`
    - Inbound reply classified per CS-23; classifier checks against intervention_context.red_flag_symptoms[] per DL-14 inv 18
    - Red flag detected → MUST escalate per DL-14 inv 21 (no autonomy bypass; clinical safety bypasses contact-load budget per §2.16 arbitration)
    - Escalation = `clinical_escalation` action_kind / `recipient_class=clinical_staff` OR `provider` / `owning_queue=clinical_triage_queue` / immediate SLA
5. **Divergence / improvement vs Mindbody:** OMNI deterministic clinical escalation; Mindbody implicit.
6. **Anti-copy warning:** Do NOT skip clinical_escalation_enabled on clinical follow-up (this is a Constraint 1 boundary). Do NOT let AI auto-resolve red flag responses (DL-14 inv 21 absolute).
7. **Substrate pressure-test verdict:** **OK** — §2.16 reply_policy + DL-14 inv 21 + Intervention Context red_flag_symptoms.

#### Section B — Rule definition

8. **Trigger:** CS-23 classifier on inbound to clinical_escalation_enabled outbound.
9. **Required inputs:** inbound body / intervention_context.red_flag_symptoms[] / patient_id / encounter_id.
10. **Decision logic:** Classifier match against red_flag_symptoms[] → if matched (any confidence), escalate immediately; if not matched, route per general intent extraction.
11. **Output / state change:** clinical_escalation orchestration_action emitted; clinical_triage_queue receives task.
12. **Owning substrate:** orchestration_action + Amendment J(c) clinical_triage_queue.
13. **UI surface:** Clinical staff/provider sees escalation immediately; patient receives acknowledgment ("We received your message and a provider will be in touch shortly. If this is an emergency, call 911.").
14. **Failure mode:** Classifier service down → ALL inbound to clinical_escalation_enabled outbound routes to clinical_triage_queue for manual review (fail-safe to clinical).
15. **Audit / event:** `clinical_escalation_triggered` per DL-16 inv 30 + amendment 41 client_alert.staff_red_alert event.
16. **Evidence citations:** §2.16 reply_policy clinical_escalation_enabled; DL-14 inv 21; §2.15 Intervention Context red_flag_symptoms.
17. **Test case:** Daisy replies to post-Botox check-in: "my face is swelling a lot and it hurts." Classifier matches intervention_context.botox_v2.red_flag_symptoms[]=["significant swelling", "severe pain", "asymmetry", "vision changes"]. Escalation fires immediately; clinical_triage_queue notified; Daisy receives acknowledgment.

### Rule CS-33: Adverse symptom escalation creates clinical_triage_thread per thread_policy

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** N/A — Mindbody has no clinical triage routing.
2. **Cross-app pattern reference:**
   - **EHR (Epic) Care Everywhere** — clinical event routing to on-call provider
   - **PagerDuty** — incident escalation chain
3. **Underlying tenant need:** When CS-32 detects red flag, new clinical_triage_thread MUST be created (not attach to existing encounter_thread alone) for provider visibility + audit.
4. **OMNI generic primitive / rule:** Per §2.16 thread_policy `create_clinical_triage_thread`:
    - On CS-32 escalation: thread_policy=`create_clinical_triage_thread` per envelope
    - New thread substrate (per messaging substrates per communications_topology.md) created with category=clinical_triage / linked_encounter_id / linked_patient_id
    - Thread routes to clinical_triage_queue per CS-13
    - Linked appointment_thread + encounter_thread cross-referenced for context (per §1G threading)
5. **Divergence / improvement vs Mindbody:** OMNI dedicated triage thread; Mindbody none.
6. **Anti-copy warning:** Do NOT attach clinical triage to general patient thread (loses urgency visibility). Do NOT collapse multiple red flag reports into one thread (each is a distinct clinical event).
7. **Substrate pressure-test verdict:** **OK** — §2.16 thread_policy + existing messaging substrate.

#### Section B — Rule definition

8. **Trigger:** CS-32 red flag detected.
9. **Required inputs:** inbound message / patient_id / encounter_id / red_flag_match.
10. **Decision logic:** Create new clinical_triage_thread; link to encounter + patient; emit task.
11. **Output / state change:** New thread substrate row; orchestration_action clinical_escalation row; queue item.
12. **Owning substrate:** messaging substrates per communications_topology.md (existing); orchestration_action.
13. **UI surface:** Clinical staff + provider sees new urgent thread.
14. **Failure mode:** Thread creation fails → fallback to direct provider notification + escalate.
15. **Audit / event:** `clinical_triage_thread_created` per DL-16 inv 30.
16. **Evidence citations:** §2.16 thread_policy; communications_topology.md §1G; DL-14 inv 21.
17. **Test case:** Daisy's red flag escalation per CS-32 → new clinical_triage_thread "Daisy — post-Botox swelling Day +2" → on-call provider Dr. Z receives notification + sees thread with red_flag_match + encounter context.

### Rule CS-34: Internal post-care tasks (provider call / staff follow-up) use multi-recipient routing per CS-13

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody allows staff to manually create "follow up with patient" tasks; no structured queue + SLA.
2. **Cross-app pattern reference:**
   - **Healthcare CRM** — automated post-procedure follow-up tasks
   - **Sales follow-up automation** — auto-create rep task at touchpoint
3. **Underlying tenant need:** Provider rhinoplasty post-op day 7 call (per §2.14 worked example 7) — auto-create provider_task with context.
4. **OMNI generic primitive / rule:** Per CS-13 + Intervention Context.cns_message_triggers[] post-care entries with recipient_class=provider OR staff:
    - For each intervention_context post-care entry with non-patient recipient:
      - Schedule orchestration_action with action_kind=`provider_task` OR `staff_task` per recipient_class
      - Populate owning_queue per CS-13 matrix
      - action_required=`call_patient` for provider call entries; `review` for chart review entries; etc.
      - Context Module Layer assembles provider context (per §2.17 Provider Clinical Context Packet forward-reference)
5. **Divergence / improvement vs Mindbody:** OMNI structured + auto-scheduled + context-rich; Mindbody manual.
6. **Anti-copy warning:** Do NOT skip §2.17 provider context assembly (provider needs talking points, history, recent treatments before calling patient).
7. **Substrate pressure-test verdict:** **OK with extension** — Amendment J(a) Intervention Context + Amendment J(d) provider clinical context packet substrate; flagged Round 5/7.

#### Section B — Rule definition

8. **Trigger:** CS-31 cadence emission with non-patient recipient.
9. **Required inputs:** intervention_context entry / recipient_class / action_required / patient + encounter context.
10. **Decision logic:** Emit per CS-13 routing matrix; assemble provider context per §2.17 forward-reference.
11. **Output / state change:** provider_task or staff_task in respective queue.
12. **Owning substrate:** orchestration_action + Amendment J(c) queue + Amendment J(d) provider context.
13. **UI surface:** Provider/staff queue UI with task + context.
14. **Failure mode:** Provider unavailable → escalate per task lifecycle (§2.19 #6).
15. **Audit / event:** `internal_post_care_task_scheduled` per DL-16 inv 30.
16. **Evidence citations:** §2.14 example 7 (rhinoplasty post-op day 7 call); CS-13; §2.17 forward-reference.
17. **Test case:** Dr. Z's rhinoplasty patient Sarah encounter completed Day 0. Intervention Context = `rhinoplasty_postop_v3` post-care entry: +7d provider_call. Day +6 evening: orchestration_action emitted = provider_task / recipient_class=provider / action_required=call_patient / owning_queue=provider_task_queue. Dr. Z queue gets task Day +7 morning with full context.

---

## Section I — Cross-domain seams

### Rule CS-35: D3 ↔ D4 seam — D3 emits lifecycle events; D4 listens + cascades Lane 1/Lane 2

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody has implicit coupling; cancellation in admin UI sometimes leaves reminder cron firing for cancelled appointments.
2. **Cross-app pattern reference:** N/A — Round 3.1 §2.5 cross-domain seam doctrine internal.
3. **Underlying tenant need:** Domain 3 (Appointment Lifecycle) owns appointment.status; Domain 4 (Confirmation/Outbound) listens to lifecycle events to update cadence + emit lifecycle-driven outbounds.
4. **OMNI generic primitive / rule:** Per Round 3.1 §2.5 seam doctrine:
    - D3 emits: `appointment.scheduled` / `appointment.cancelled` / `appointment.no_showed` / `appointment.rescheduled` / `appointment.completed` (per D3 LC-01)
    - D4 listens to all per CS-05 (initial), CS-06 (cancel notification), CS-06 (no-show notification), CS-06 (reschedule confirmation), CS-21 (cascade suppression)
    - D4 does NOT mutate appointment.status (D3 owns); D4 does mutate appointment.confirmation_state (D4 owns per CS-01)
    - Round 2.6 Guardrail #1 + #2 honored: D4 doesn't swallow encounter creation; status_flags Confirmed is DERIVED projection
5. **Divergence / improvement vs Mindbody:** OMNI explicit cross-domain event coupling; Mindbody implicit.
6. **Anti-copy warning:** Do NOT mutate appointment.status from D4 (D3 owns). Do NOT skip D4 listener registration (cron lag risk per Mindbody anti-pattern).
7. **Substrate pressure-test verdict:** **OK** — Round 3.1 §2.5 + DL-16 inv 4 bidirectional seam.

#### Section B — Rule definition

8. **Trigger:** D3 lifecycle event emission.
9. **Required inputs:** D3 event payload.
10. **Decision logic:** D4 listener per event type; route to appropriate CS-* rule.
11. **Output / state change:** Lane 1/Lane 2 cadence updates + new outbounds.
12. **Owning substrate:** DL-16 inv 4 bidirectional seam.
13. **UI surface:** N/A — internal coupling.
14. **Failure mode:** Listener fails → reconciliation per DL-16 inv 39 catches drift.
15. **Audit / event:** Per D3 event + D4 reactive event.
16. **Evidence citations:** Round 3.1 §2.5 cross-domain seam doctrine; DL-16 inv 4 bidirectional; Round 2.6 Guardrails #1 + #2.
17. **Test case:** Todd cancels Day -3. D3 LC-12 emits `appointment.cancelled`. D4 listener: (a) CS-06 emits cancellation_notification; (b) CS-21 cascade suppresses pending Day -1 reminder + Day 0 arrival + Day +1 check-in.

### Rule CS-36: D4 ↔ D5 seam — D5 emits encounter events; D4 listens for post-care cadence start

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** N/A — Mindbody has no separate encounter substrate.
2. **Cross-app pattern reference:** N/A — Round 3.1 + Domain 5 forward.
3. **Underlying tenant need:** Post-care cadence (CS-31) must trigger from `encounter.completed` (actual care moment), NOT from `appointment.status=completed` (scheduling-side completion). Round 2.6 Guardrail #2 binding.
4. **OMNI generic primitive / rule:** Per Round 3.1 §2.5 seam doctrine + Round 2.6 Guardrail #2:
    - D5 emits: `encounter.started` / `encounter.completed` (per Domain 5 binding when authored)
    - D4 listens to `encounter.completed` per CS-31 for post-care cadence
    - D4 also listens to `encounter.line_performed` for treatment-specific cadence (e.g., specific service performed mid-encounter)
    - D4 does NOT mutate encounter; D5 owns
5. **Divergence / improvement vs Mindbody:** OMNI separates appointment-completion from encounter-completion; post-care anchors to encounter.
6. **Anti-copy warning:** Do NOT trigger post-care from appointment.status=completed (violates Round 2.6 Guardrail #2). Do NOT skip encounter substrate.
7. **Substrate pressure-test verdict:** **OK** — Round 3.1 §2.5 + Round 2.6 Guardrail #2 + DL-20 inv 35 encounter substrate cover.

#### Section B — Rule definition

8. **Trigger:** D5 encounter.completed event (when Domain 5 is authored).
9. **Required inputs:** encounter_id / patient_id / performed encounter_lines.
10. **Decision logic:** Read Intervention Context per encounter_line.service_id; schedule post-care cadence per CS-31.
11. **Output / state change:** Scheduled orchestration_action rows for post-care.
12. **Owning substrate:** DL-16 inv 4 bidirectional + Round 3.1 §2.5.
13. **UI surface:** N/A — internal.
14. **Failure mode:** Encounter completed but Intervention Context missing → audit + skip; fallback generic check-in.
15. **Audit / event:** `d4_post_care_triggered_by_d5_completion` per DL-16 inv 30.
16. **Evidence citations:** Round 3.1 §2.5; Round 2.6 Guardrail #2; DL-20 inv 35.
17. **Test case:** Daisy's encounter completed (Domain 5 emits event). D4 receives; reads encounter_lines [Botox 24u glabella]; per intervention_context.botox_v2 post-care entries, schedules: +24h check-in, +7d photo, +14d satisfaction.

### Rule CS-37: D4 ↔ D6 seam — D6 emits entitlement/commerce events; D4 listens for continuation cadence

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Knox chat raw line 6620-6626 + Layer 2 B.7: Mindbody supports "Series Notification - Time Running Out" + "Series Notification - Visits Remaining Low" — entitlement-driven outbounds. Single touchpoint; no multi-channel composition.
2. **Cross-app pattern reference:**
   - **Stripe Customer Subscriptions** — expiring subscription notifications
   - **Loyalty program** — point-expiring + benefit-available emails
3. **Underlying tenant need:** Tracey's HydraFacial benefit expiring in 5 days → "You have 5 more days to use your BH+ HydraFacial. We have next Tuesday at 2pm with Parrah." (per §2.14 worked example 1).
4. **OMNI generic primitive / rule:** Per Round 3.2 §2.7 entitlement-aware continuation + Round 3.4 §2.13 stacking + D4↔D6 seam:
    - D6 emits: `entitlement.expiring` / `entitlement.consumed` / `membership_payment.failed` / `package.session_remaining_low` (when Domain 6 authored)
    - D4 listens; for `entitlement.expiring`: emit `outbound.scheduling.waitlist_offer` OR `outbound.lifecycle.entitlement_continuation` per DL-16 amendment 42
    - Envelope: action_kind=`patient_message` + reply_policy=`booking_assist_enabled` + thread_policy=`attach_to_entitlement_thread` + consent_class=`marketing` (per tenant policy)
    - For `membership_payment.failed`: emit billing_task (recipient_class=billing_staff) + patient_message (informational)
    - Round 3.4 §2.13 stacking applies: benefit-continuation message references applied benefits per Round 3.3 §2.11 attribution
5. **Divergence / improvement vs Mindbody:** OMNI multi-event + multi-recipient; Mindbody single touchpoint.
6. **Anti-copy warning:** Do NOT auto-book on entitlement_expiring (offer + booking_assist_enabled lets patient choose). Do NOT skip §2.11 attribution in benefit message (transparency).
7. **Substrate pressure-test verdict:** **OK** — Round 3.2 + 3.4 + D4↔D6 seam + DL-16 amendment 42.

#### Section B — Rule definition

8. **Trigger:** D6 entitlement/commerce event (when Domain 6 is authored).
9. **Required inputs:** Entitlement Context / Patient Profile / Care Program Context.
10. **Decision logic:** Compose entitlement-continuation outbound per CS-08 + CS-19; arbitrate per CS-09; dispatch.
11. **Output / state change:** patient_message + optional billing_task.
12. **Owning substrate:** orchestration_action + Entitlement Context (Amendment J(a)) + DL-16 inv 4 bidirectional seam.
13. **UI surface:** Patient receives + can act; staff sees in entitlement thread.
14. **Failure mode:** No provider availability → emit informational only OR queue staff_task to find slot.
15. **Audit / event:** `entitlement_continuation_dispatched` per DL-16 inv 30.
16. **Evidence citations:** Round 3.2 §2.7-§2.8; Round 3.4 §2.13; Round 3.3 §2.11; DL-16 amendment 42; D4↔D6 seam.
17. **Test case:** Tracey's HydraFacial benefit expires Day +5 (D6 emits at Day -5 from expiration). D4 composes: "Hi Tracey — your BH+ HydraFacial benefit expires in 5 days. We have Tuesday 2pm with Parrah. Tap to book." Booking_assist_enabled reply_policy. Tracey taps; goes to D2 booking flow.

---

## §3 Resolution map

| Doctrine question Domain 4 must answer | Resolving rules |
|---|---|
| What are the 9 confirmation_state values + their legal transitions? | CS-01 + CS-02 |
| How are illegal state transitions handled? | CS-03 |
| How is status_flags `Confirmed` projected (DERIVED only)? | CS-04 |
| What triggers Lane 1 confirmation outbound? | CS-05 |
| What is the outbound trigger registry? | CS-06 |
| How is idempotency / duplicate prevention enforced? | CS-07 + §2.19 guardrail #4 |
| How does service-specific composition consume Context Modules? | CS-08 |
| How are multiple concurrent triggers arbitrated? | CS-09 + §2.16 arbitration |
| What is the 18-field CNS Action Envelope? | CS-10 + §2.16 |
| How are inapplicable fields per action_kind enforced? | CS-11 |
| How are reply_policy + thread_policy bound per outbound class? | CS-12 |
| How are non-patient outbounds routed to queues? | CS-13 |
| How does composition follow §2.16 invariants? | CS-14 + Constraint 1 |
| How is channel selection done with patient preference + fallback? | CS-15 + §2.19 guardrail #1 + #2 |
| How is template selection done? | CS-16 + Patch 7 versioning |
| How are quiet hours enforced? | CS-17 |
| How is PII tier compliance enforced? | CS-18 |
| How is Lane 2 pre-care cadence configured per service? | CS-19 + CS-20 |
| How does cascade suppression work on lifecycle change? | CS-21 + D3↔D4 seam |
| How does no-response timeout work? | CS-22 |
| How does CNS classifier handle inbound replies? | CS-23 + §2.19 guardrail #5 |
| How does confidence threshold gate transitions? | CS-24 |
| What are the 5+ intent kinds? | CS-25 |
| How does deterministic state transition write appointment_confirmation_event? | CS-26 |
| How is opt-out compliance handled? | CS-27 |
| How does graceful degradation work without AI? | CS-28 + CS-29 + Constraint 5 |
| How is staff ambiguity queue used? | CS-30 + §2.19 guardrail #6 |
| How does Lane 2 post-care cadence trigger from encounter.completed? | CS-31 + D4↔D5 seam |
| How is clinical_escalation_enabled used for post-care? | CS-32 |
| How are clinical triage threads created? | CS-33 |
| How are internal post-care tasks routed? | CS-34 |
| D3 ↔ D4 seam | CS-35 |
| D4 ↔ D5 seam | CS-36 |
| D4 ↔ D6 seam | CS-37 |

---

## §4 Round 4 closing (per §2.21 closing template; binding)

> **Round 4 closing.**
>
> **Authored:** 37 Day 0 rules across 9 sections (Section A confirmation state machine: 4 / Section B outbound triggers: 5 / Section C envelope: 5 / Section D channel + content: 4 / Section E Lane 2 pre-care: 4 / Section F inbound + classification: 5 / Section G graceful degradation: 3 / Section H Lane 2 post-care: 4 / Section I cross-domain seams: 3).
>
> **Substrate verdicts:** 32 OK / 5 OK-with-extension / 0 NEW SUBSTRATE NEEDED.
>
> The 5 OK-with-extension verdicts flag Amendment J substrate work for Round 5/7:
> - CS-08 — Amendment J(a) Intervention Context substrate
> - CS-09 — Amendment J(c) arbitration + queue routing substrate
> - CS-10 — Amendment J(b) `orchestration_action` 18-field envelope extension
> - CS-13 — Amendment J(c) queue substrate (provider_task_queue / billing_resolution_queue / clinical_triage_queue / etc.)
> - CS-19/20/31/34 — Amendment J(a) Intervention Context + Amendment J(d) provider clinical context packet
>
> **New Amendment candidates:** NONE. All flagged extensions map to existing Amendment J(a) / J(b) / J(c) / J(d) parts. No Amendment L (or beyond) needed from Round 4.
>
> **New failure patterns observed:** NONE during Round 4 authoring. §2.21 read receipt + §2.18 pre-brief Sections A-O successfully prevented Pattern 9 (re-discovery) and Pattern 10 (narrow framing creep). The author honored source-agnostic CNS action orchestration from the start; cited existing doctrine per §2.19 Citation Map; did NOT widen scope to Amendment K (party/seat/roster/guest) per §2.22.7 binding.
>
> **New binding doctrine sections to add:** NONE. Round 4 is buildable rules under existing doctrine; no new §2.X sections required.
>
> **Cross-domain seams identified:**
> - D3 ↔ D4 (CS-35) — D3 lifecycle events → D4 cadence cascade
> - D4 ↔ D5 (CS-36) — D5 encounter.completed → D4 post-care cadence
> - D4 ↔ D6 (CS-37) — D6 entitlement/commerce events → D4 continuation cadence
>
> All seams already covered by Round 3.1 §2.5 doctrine; Round 4 documented specific event types per seam.
>
> **Open decisions for next round (Round 5 — Domain 5 Encounter creation):**
> 1. Tenant default values for: confirmation_no_response_policy timeout (default proposed: 12h non-urgent / 4h same-day); cns_classifier_confidence_threshold per intent (proposed: 0.85 cancel/reschedule / 0.75 confirm / 0.90 opt_out); reminder cadence (proposed: T-24h + tenant-opt-in T-2h)
> 2. Tenant default for: per-day SMS contact-load budget (proposed: 3 non-urgent + unlimited clinical_safety); per-week marketing contact-load budget (proposed: 2)
> 3. Tenant default for: confirmation_no_response auto-cancel opt-in (proposed: FALSE; staff review default)
> 4. Service-level overrides per DL-19 settings hierarchy — granularity decisions (per-service / per-brand / per-tenant)
>
> **Amendment K closure status (Round 5 + 7 only per §2.22.3): NOT APPLICABLE to Round 4 — Round 4 is communications, not scheduling capacity. Round 4 honored §2.22.7 binding: did NOT widen scope to Amendment K. Amendment K closure gate remains for Round 5 + Round 7.**
>
> **Recommendation for next round:** Round 5 (Domain 5 — Encounter creation rules) starts next. Round 5 MUST resolve Amendment K per §2.22.3 (party/seat/roster/guest) as IMPLEMENTED-A / EXCLUDED-B / COVERED-C. Round 5 also evaluates Amendment J(a) Intervention Context substrate distribution + J(d) Provider Clinical Context Packet substrate. Round 5 opens with §2.21 read receipt + Amendment K closure-gate commitment statement.

---

## §5 Substrate gap audit

### §5.1 Per-rule substrate verdict tally

| Rule | Verdict | Note |
|---|---|---|
| CS-01 | OK | DL-20 inv 33 9-state ENUM |
| CS-02 | OK | DL-20 inv 33 state pattern |
| CS-03 | OK | DL-16 inv 30 + amendment 43 |
| CS-04 | OK | Round 2.6 Guardrail #1 + DL-15 amendment 29 |
| CS-05 | OK | DL-16 amendment 42 + DL-20 inv 33 + DL-19 inv 18 |
| CS-06 | OK | DL-16 amendment 42 registry |
| CS-07 | OK | DL-16 amendment 42 default_throttle + 1Q.14.2 gate 4 |
| CS-08 | OK with extension | Amendment J(a) Intervention Context substrate |
| CS-09 | OK with extension | Amendment J(c) arbitration + queue routing |
| CS-10 | OK with extension | Amendment J(b) orchestration_action 18-field envelope |
| CS-11 | OK | §2.16 field applicability matrix |
| CS-12 | OK | §2.16 reply_policy + thread_policy ENUMs |
| CS-13 | OK with extension | Amendment J(c) queue substrate |
| CS-14 | OK | §2.16 composition invariants + DL-16 inv 30 |
| CS-15 | OK | §2.19 Citation Map guardrail #1 (existing doctrine) |
| CS-16 | OK | DL-16 amendment 42 + Patch 7 versioning |
| CS-17 | OK | DL-16 amendment 42 + 1Q.14.2 gate 5 |
| CS-18 | OK | DL-16 amendment 42 pii_exposure_class + DL-16 inv 7 |
| CS-19 | OK with extension | Amendment J(a) Intervention Context |
| CS-20 | OK with extension | Amendment J(a) Intervention Context (covered by CS-19 extension) |
| CS-21 | OK | D3↔D4 seam per CS-35 |
| CS-22 | OK | CS-01 state machine + tenant policy |
| CS-23 | OK | §2.19 Citation Map guardrail #5 (existing pipeline) |
| CS-24 | OK | DL-14 inv 18 |
| CS-25 | OK | DL-20 inv 40 + DL-16 inv 5 |
| CS-26 | OK | DL-20 inv 40 |
| CS-27 | OK | DL-16 amendment 42 + TCPA |
| CS-28 | OK | Constraint 5 + §2.18 Section J |
| CS-29 | OK | Constraint 5 invariant |
| CS-30 | OK | §2.19 Citation Map guardrail #6 (existing patient_action_items + §1G.11) |
| CS-31 | OK with extension | Amendment J(a) Intervention Context + Amendment J(c) scheduled queue (covered) |
| CS-32 | OK | §2.16 reply_policy + DL-14 inv 21 |
| CS-33 | OK | §2.16 thread_policy + communications_topology.md |
| CS-34 | OK with extension | Amendment J(a) Intervention Context + Amendment J(d) provider context (covered) |
| CS-35 | OK | Round 3.1 §2.5 + DL-16 inv 4 |
| CS-36 | OK | Round 3.1 §2.5 + Round 2.6 Guardrail #2 |
| CS-37 | OK | Round 3.2 §2.7-§2.8 + Round 3.4 §2.13 + D4↔D6 |

**Tally:** 32 OK / 5 OK-with-extension / 0 NEW.

### §5.2 Amendment J extensions surfaced by Round 4

Round 4 confirms all 5 extensions map to the parked Amendment J 4-part candidate per §2.20:

- **Amendment J(a)** — Intervention Context substrate (6 module types). Round 4 consumes via abstract interface in CS-08, CS-19, CS-20, CS-31, CS-34. Substrate definition deferred to Round 5/7.
- **Amendment J(b)** — `orchestration_action` 18-field envelope extension. Round 4 writes envelopes per §2.16 schema in CS-10, CS-11, CS-12, CS-13, CS-14. Substrate definition deferred to Round 5/7.
- **Amendment J(c)** — Arbitration + queue routing substrate. Round 4 uses queues in CS-09, CS-13, CS-30, CS-32, CS-34. Substrate definition deferred to Round 5/7.
- **Amendment J(d)** — Provider Clinical Context Packet substrate. Round 4 references in CS-34. Substrate definition deferred to Round 5/7.

No new Amendment surfaced by Round 4.

### §5.3 Amendment K closure status (per §2.22.3)

Round 4 NOT APPLICABLE — communications, not scheduling capacity. Round 4 honored §2.22.7 binding (did NOT widen scope to address party/seat/roster/guest). Amendment K closure gate remains binding for Round 5 + Round 7.

---

## §6 Deferred Rule Candidates (name-only; M1-2 / M3-6 / FUTURE)

### §6.1 M1-2 candidates

- CS-M1.1 — Per-patient channel preference learning (CNS adapts after observed engagement)
- CS-M1.2 — Confirmation cadence A/B testing per tenant
- CS-M1.3 — Multi-touchpoint experience optimization (e.g., 2-3 touch vs 5-6 touch comparison)
- CS-M1.4 — Patient-driven preference UX ("how do you want to be reminded?")
- CS-M1.5 — Provider-specific message tone tuning per Amendment J(d)
- CS-M1.6 — Smart bundling across patient context (recent purchase + recent treatment + upcoming visit composed insight)

### §6.2 M3-6 candidates

- CS-M3.1 — Voice channel reminder (outbound voice call with TTS)
- CS-M3.2 — Real-time push notifications via patient mobile app
- CS-M3.3 — Patient family member proxy notifications (with consent)
- CS-M3.4 — Multi-language message composition
- CS-M3.5 — Calendar app integration (Google Calendar / Outlook auto-add)
- CS-M3.6 — Pre-arrival check-in via geolocation (within 1 mile of clinic)
- CS-M3.7 — Post-care symptom photo upload + clinical AI triage

### §6.3 FUTURE candidates

- CS-F.1 — Predictive no-show risk + targeted reminder intensity
- CS-F.2 — Cross-tenant federated communications (per Federation-Topology DL)
- CS-F.3 — External vendor action_kind (lab partner / specialty pharmacy / referral) communications
- CS-F.4 — AI-driven personalized post-care education content (cited + version-controlled)
- CS-F.5 — Patient-state-aware adaptive cadence (e.g., anxious patient gets gentler reminder pacing)

---

## §7 Round 4 commit chronology + cross-references

**Commit:** TBD (this commit) — Round 4 doctrine + 37 Day 0 rules authored

**Cross-references:**
- Index: [00_index.md](00_index.md)
- Prior Domain rule files: [01_domain_treatment_menu.md](01_domain_treatment_menu.md) / [02_domain_booking_composer.md](02_domain_booking_composer.md) / [03_domain_appointment_lifecycle.md](03_domain_appointment_lifecycle.md)
- Round 3.5 ADR: [../../../docs/architecture/cns_action_orchestration_adr_2026-05-17.md](../../../docs/architecture/cns_action_orchestration_adr_2026-05-17.md)
- Volume 2 narrative: [../../../docs/architecture/evolution_narrative_volume_2_2026-05-17.md](../../../docs/architecture/evolution_narrative_volume_2_2026-05-17.md)
- Post-mortem: [../../../docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md](../../../docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md)
- system_map: [../../system_map_three_layers_60706286.plan.md](../../system_map_three_layers_60706286.plan.md) (Phase 1 hardening v10)

**Locked doctrine cited by Round 4:**
- DL-14 inv 16-22 (CNS bounded autopilot + orchestration_action + AI proposes/deterministic validates)
- DL-15 amendment 4 (service_type 5-value ENUM) + amendment 8 (confirmed → scheduled rename) + amendment 29 (status_flags BITMASK)
- DL-16 inv 3-39 + amendments 41 (21-event client alerts) + 42 (32-seed outbound trigger registry) + 43 (actor 4-tuple)
- DL-17 inv 22 + 24 (entitlement + cancellation_policy)
- DL-18 inv 6 + 8 + 22 (staff_capability + attestation envelope + atom-based authorization)
- DL-19 inv 1 + 4 + 18 (settings hierarchy + service_policy + tenant policy profile)
- DL-20 inv 1 + 5 + 18 + 33 + 38 + 40 (care_episode + episode_catalog + cadence engine + appointment confirmation_state + encounter_participant + appointment_confirmation_event substrate)
- DL-21 (federation topology / on-call coverage)
- communications_topology.md (3 patient surfaces / 6 outbound channels / 5 inbound channels)
- §1F (care primitives) + §1G (AI layer) + §1G.8 (provider) + §1G.11 (action items) + §1P (inbound pipeline) + §1Q.14.2 (outbound 8-gate) + §1Q.23 (patient channel preference)
- 4h phase work (rich chat / action items / inbound classification)
- §2.0–§2.22 of 00_index.md (all locked rule-matrix doctrine)
- user_knox_preferences_locked_2026-05-17.md (18 preferences)
- coherent_omni_architecture_pattern_2026-05-17.md (3-layer pattern)

**End of Round 4.**
