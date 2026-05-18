# Domain 4 — Scheduling-Originated CNS Action Rules (Day 0)

**Subtitle:** Confirmation, reminders, scheduling replies, and appointment-originated action candidates through the CNS Orchestration Core  
**Date:** 2026-05-18  
**Round:** 4.2C adversarial hardening  
**Status:** ACCEPTED / CLOSED — Domain 4 Day 0 scheduling-originated CNS slice  
**Index:** [00_index.md](00_index.md)

---

## §0 Round 4.2B read receipt + inheritance statement (binding)

Round 4.2B is authored from the Round 3.6 parent contract and expands Round 4.2 framing into buildable Day 0 rules.

Read + binding anchors:
- [Round 3.6 parent contract](./03_6_cns_orchestration_core.md)
- [Index parent binding (§2.23)](./00_index.md)
- [System map Phase 1 hardening v11](../../system_map_three_layers_60706286.plan.md)
- [Round 3.5 ADR (+ Round 3.6 addendum)](../../../docs/architecture/cns_action_orchestration_adr_2026-05-17.md)
- [Post-mortem patterns 9/10 + parent-contract implicitness watchpoint](../../../docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md)

Binding inheritance statement:
- D4 is a scheduling-originated candidate emitter into shared CNS resolver.
- D4 is not a standalone reminder module.
- CNS resolves `send_now | defer | suppress | reroute | staff_review | clinical_escalation | no_op`.

---

## §1 Domain 4 ownership boundary

### D4 owns
- Scheduling-originated candidate emission.
- `appointment.confirmation_state` transitions and auditability.
- `appointment_confirmation_event` operational write discipline.
- Scheduling reply classification into candidate/proposal paths.

### D4 does not own
- D3 lifecycle truth/state commit for appointment lifecycle states.
- D5/D7 encounter/post-care emission policy.
- D6 commerce/entitlement business truth and decisions.
- Lab/Rx/intake/marketing business logic.
- Provider clinical disposition authority.

---

## §2 Event ownership and D4 role

| Source event | Canonical owner | D4 role |
|---|---|---|
| `appointment.scheduled` | D3 | consume and emit scheduling candidates |
| `appointment.rescheduled` | D3 | consume and emit scheduling candidates |
| `appointment.cancelled` | D3 | consume and emit scheduling candidates |
| `appointment.no_showed` | D3 | consume and emit scheduling candidates |
| `appointment.checked_in` | D3 | consume and emit scheduling candidates |
| `appointment.confirmation_timeout` | D4 cadence/timer | emit timeout candidates |
| `appointment.reminder_due` | D4 cadence/timer | emit reminder candidates |
| `appointment.waitlist_offer_due` | D4 cadence/timer | emit waitlist candidates |
| `appointment.hold_expiring` | D4 cadence/timer | emit hold-expiry candidates |
| `appointment.scheduling_reply_received` | D4/CNS inbound loop | classify + emit proposal/review candidates |

Clarifier: D4 consumes several D3-owned lifecycle events but does not take lifecycle ownership.

---

## §3 Source-event to candidate mapping (buildable contract)

| Source event | Candidate family | Possible envelope output | Confirmation/state effect |
|---|---|---|---|
| `appointment.scheduled` | `booking_confirmation_candidate` | `patient_message` or `suppression` | initialize `start -> unconfirmed` or `start -> not_required`; transition `unconfirmed -> confirmation_sent` only after resolved outbound attempt |
| `appointment.rescheduled` | `reschedule_confirmation_candidate` | `patient_message` | supersede prior cadence branch, reinitialize confirmation branch per policy, emit fresh confirmation/reminder candidates |
| `appointment.cancelled` | `cancellation_notification_candidate` | `patient_message` or `staff_task` | no D4 lifecycle commit; consume D3 cancellation truth |
| `appointment.no_showed` | `no_show_recovery_candidate` | `patient_message` or `staff_task` | no D4 lifecycle commit; communication/review recovery only; financial/entitlement consequences require authoritative D3/D6 consequence context |
| `appointment.checked_in` | `post_checkin_suppression_candidate` | `suppression` | suppress pending confirmation/reminder candidates that are no longer relevant |
| `appointment.confirmation_timeout` | `confirmation_timeout_recovery_candidate` | `staff_task` or `patient_message` | timeout may drive `confirmation_sent -> expired_no_response` only after active-state guard (active lifecycle + active revision + unsuperseded branch + eligible confirmation state) |
| `appointment.reminder_due` | `day_before_reminder_candidate` / `same_day_reminder_candidate` | `patient_message` / `suppression` | no state change unless timeout escalation |
| `appointment.waitlist_offer_due` | `waitlist_offer_candidate` | `scheduling_offer` / `patient_message` | no confirmation-state mutation by default |
| `appointment.hold_expiring` | `scheduling_offer_candidate` | `patient_message` / `staff_task` | may trigger proposal or suppression |
| `appointment.scheduled` (provider pre-visit trigger) | `provider_previsit_review_candidate` | `provider_task` | no confirmation-state mutation; provider review signal only (no clinical recommendation/diagnosis/plan/dosing/chart-authoring in D4) |
| `appointment.scheduling_reply_received(confirm)` | `state_transition_proposal_candidate` | `state_transition_proposal` | proposal toward `confirmed` |
| `appointment.scheduling_reply_received(cancel)` | `state_transition_proposal_candidate` | `state_transition_proposal` / `staff_task` | proposal toward `cancellation_requested` + D3 path |
| `appointment.scheduling_reply_received(reschedule)` | `state_transition_proposal_candidate` | `state_transition_proposal` / `staff_task` | proposal toward `reschedule_requested` + D2/D3 path |
| `appointment.scheduling_reply_received(ambiguous/low-confidence)` | `staff_review_candidate` | `staff_task` | proposal toward `staff_review_required` |

No direct rail/task/queue/state-proposal/suppression/no-op bypass and no direct cross-domain canonical mutation.

---

## §4 Candidate contract and resolver handoff

### CS-01 Candidate emission contract
**Trigger:** any admitted D4 event from §2  
**Required inputs:** source event id, appointment id/revision, candidate family, context packet id/version, policy profile refs  
**Minimum candidate payload fields:**
- `candidate_id`
- `source_event_id`
- `source_domain`
- `appointment_id`
- `appointment_revision`
- `patient_id`
- `candidate_family`
- `action_family`
- `dedupe_key`
- `correlation_id`
- `causation_id`
- `context_packet_id`
- `context_packet_version`
- `delivery_window_profile_ref`
- `response_coverage_profile_ref`
- `expires_at`
- `autonomy_level`
- `risk_severity_hint`
**Decision logic:** emit candidate first; never directly send task/message from event handler  
**Revision-safe dedupe requirement:**
- Dedupe key must include at minimum `candidate_family + appointment_id + appointment_revision_or_supersession_branch + source_event_id_or_cadence_key`.
- Dedupe must never suppress valid new cadence after reschedule/supersession branch changes.
**Clarifier:** candidate emission does not imply communication/task creation; it only enters CNS evaluation for `send/defer/suppress/reroute/staff_review/clinical_escalation/no_op`.  
**Output:** candidate record enters resolver pipeline  
**Failure mode:** missing candidate payload fields -> `failed_resolution` and `staff_review_candidate`  
**Audit/event:** candidate lifecycle transition and decision record pointer  
**Test case:** `appointment.scheduled` produces exactly one `booking_confirmation_candidate` per dedupe key

### CS-02 Resolver handoff contract
**Trigger:** candidate reaches resolver eligibility  
**Required inputs:** context packet version, consent/PII class, delivery window profile, response coverage profile, contact load, risk hints, identity/correlation confidence  
**Decision logic:** resolver returns only parent-contract decisions  
**Output:** envelope output or safe non-send outcome (`defer/suppress/reroute/staff_review/no_op`)  
**Failure mode:** missing/stale/contradictory context -> no blind send; route to safe outcomes  
**Audit/event:** resolver decision record minimum schema  
**Test case:** missing coverage profile for reply-inviting action yields `defer` or `staff_review`

### CS-02B No-bypass rule for Day 0 D4
Day 0 Domain 4 has no direct rail/task/queue/state-proposal/suppression/no-op bypasses. All scheduling-originated outputs flow through:
`source event -> candidate -> resolver -> envelope`.

---

## §5 Confirmation state machine (full legal transitions)

### CS-03 Confirmation values (canonical D4 field)
`unconfirmed | confirmation_sent | confirmed | cancellation_requested | reschedule_requested | staff_review_required | failed_delivery | expired_no_response | not_required`

### CS-04 Legal transition matrix

| From | To | Trigger class |
|---|---|---|
| `start` | `unconfirmed` | appointment enters confirmation flow |
| `start` | `not_required` | tenant/service policy |
| `unconfirmed` | `confirmation_sent` | outbound confirmation emitted |
| `unconfirmed` | `not_required` | policy override |
| `confirmation_sent` | `confirmed` | inbound confirm classification |
| `confirmation_sent` | `cancellation_requested` | inbound cancel classification |
| `confirmation_sent` | `reschedule_requested` | inbound reschedule classification |
| `confirmation_sent` | `staff_review_required` | low-confidence/ambiguous |
| `confirmation_sent` | `failed_delivery` | fallback exhausted |
| `confirmation_sent` | `expired_no_response` | timeout policy |
| `failed_delivery` | `confirmation_sent` | retry/fallback successful |
| `failed_delivery` | `staff_review_required` | manual review route |
| `expired_no_response` | `confirmation_sent` | manual resend |
| `expired_no_response` | `staff_review_required` | escalation route |
| `staff_review_required` | `confirmed` | staff resolution |
| `staff_review_required` | `cancellation_requested` | staff resolution |
| `staff_review_required` | `reschedule_requested` | staff resolution |
| `confirmed` | `cancellation_requested` | non-terminal post-confirm inbound |
| `confirmed` | `reschedule_requested` | non-terminal post-confirm inbound |
| `confirmed` | `staff_review_required` | conflict/ambiguity |

Illegal transitions are rejected and emit `illegal_confirmation_transition_attempted`.

### CS-05 Projection discipline
Schedule-grid "confirmed" badge is derived projection from `appointment.confirmation_state`, never canonical truth.

---

## §6 Inbound classification and clinical escape hatch

### CS-06 Inbound classification taxonomy (minimum)
Classifications:
- `confirm`
- `cancel_request`
- `reschedule_request`
- `question`
- `opt_out_stop`
- `clinical_symptom`
- `billing_payment_issue`
- `visit_coordination`
- `ambiguous`
- `unintelligible`
- `duplicate_reply`
- `conflicting_intent`

### CS-07 Correlation/supersession gate
Before proposal:
- identity confidence
- thread/action correlation confidence
- proxy/guardian validity
- appointment revision and supersession freshness

Low confidence/ambiguous/cross-thread paths route to `staff_review_candidate`.

### CS-08 Stale mutation prevention
Superseded or obsolete thread/revision inbound cannot mutate active appointment state; produce `staff_review_candidate` or `no_op` with stale rationale.

### CS-09 Clinical escape hatch (hard boundary)
If `clinical_symptom` is detected in scheduling thread:
- D4 does not resolve clinical meaning or disposition.
- CNS routes/escalates to clinical owner policy (`clinical_escalation` or review queue).
- D4 may preserve scheduling thread context.
- D4 scheduling state mutates only when scheduling intent is independently clear.

### CS-09B Opt-out ownership seam
D4 may classify `opt_out_stop` in scheduling context and emit suppression/legal-route candidates.  
Canonical communication preference/consent truth is owned by the communication/consent substrate, not D4.

### CS-09C STOP immediate provisional suppression
On `opt_out_stop`, D4/CNS emits immediate provisional suppression for affected channel/consent class pending canonical communication/consent substrate update and reconciliation.

---

## §7 Coverage-aware scheduling policy profiles

### CS-10 Policy dimensions
Scheduling resolver inputs must include delivery window + response coverage + action family + consent/channel + tenant/location/provider policy + contact-load.

### CS-11 Default Day 0 profile examples

| Action family | Default delivery posture | Default coverage posture |
|---|---|---|
| booking confirmation | immediate (including late-hour patient-initiated) | no immediate response required; next-business-day acceptable |
| routine reminder | configured reminder windows | next-business-day acceptable |
| reply-inviting prep/pre-arrival coordination | monitored coverage windows | staff/clinical coverage required |
| visit coordination | tenant operational window | configured operations queue coverage |
| provider task | provider/coverage window | queue SLA ownership required |

### CS-12 Contact-load arbitration
Multiple same-day candidates are arbitrated by priority/burden policy; lower-priority candidates may be deferred/suppressed.

---

## §8 AI-off deterministic baseline (explicit)

### CS-13 AI-off baseline requirements
With AI disabled, D4 still supports:
- booking confirmations
- routine reminders
- link-based confirm/cancel/reschedule flows
- deterministic keyword/basic intent routing where configured
- failed delivery handling + fallback chain
- staff review queue for unresolved/ambiguous cases

AI remains enhancement, never dependency.

---

## §9 `appointment_confirmation_event` write discipline

### CS-14 Required round-trip rows

| Event row kind | When written |
|---|---|
| `outbound_attempt` | candidate resolved to outbound attempt |
| `delivery_result` | rail delivery success/failure callback |
| `inbound_response` | scheduling inbound received |
| `cns_classification` | classification result recorded |
| `state_transition_proposal` | candidate proposes confirmation-state mutation |
| `state_transition_applied` | canonical D4 confirmation mutation applied |
| `state_transition_rejected` | proposal rejected (invalid/stale/illegal) |
| `staff_review_resolution` | human resolved ambiguity |
| `stale_reply_blocked` | stale inbound blocked from mutation |
| `failed_delivery_path` | fallback exhausted/manual escalation branch |

Each row links source event/action/decision context for audit reconstruction.

---

## §10 D4-specific failure modes and fallbacks

| Failure condition | Required fallback | Owning queue class |
|---|---|---|
| missing context packet | `defer` or `staff_review`; never blind send | `front_desk_queue` |
| missing policy profile | `defer` + policy configuration task | `admin_config_queue` |
| undefined coverage owner | `defer`/`staff_review`; no reply-inviting send | `admin_config_queue` |
| unknown marketing consent | suppress marketing-class actions | `front_desk_queue` |
| unknown PHI-over-SMS/email consent | block PHI-bearing channel; reroute to allowed channel/review | `front_desk_queue` |
| unknown transactional non-PHI consent | may proceed only through legally/policy-allowed transactional channel | `front_desk_queue` |
| resolver unavailable | queue retry path + staff fallback | `system_ops_queue` |
| ambiguous thread correlation | `staff_review_candidate` | `front_desk_queue` |
| appointment revision not found | `staff_review_candidate` + stale/invalid audit row | `front_desk_queue` |
| duplicate candidate dedupe-key hit | `suppression` or `no_op` with dedupe reason | `system_ops_queue` |
| stale superseded thread | `no_op` or `staff_review`, no mutation | `front_desk_queue` |

Parent contract rule applies: missing/stale/contradictory context cannot proceed to blind execution.

---

## §11 Cross-domain seams (explicit)

### CS-15 D3 seam
D3 owns lifecycle state commits/events. D4 consumes D3 lifecycle events for scheduling candidate emission.

### CS-16 D5/D7 seam
D5/D7 own encounter/post-care candidate emissions. D4 contributes appointment context only.

### CS-17 D6 seam
D6 owns payment, entitlement, membership, package, and commerce truth plus emissions.  
D4 may emit `scheduling_context_blocker_candidate` or `eligibility_check_needed_candidate`, but D4 does not determine financial or entitlement truth.

### CS-17B No-show recovery consequence boundary
`no_show_recovery_candidate` is communication/review orchestration only in D4.  
D4 does not author, infer, or announce deposit retention, membership forfeiture, package-credit use, reschedule fee, cancellation-policy consequence, or provider compensation unless authoritative D3/D6 consequence context is present.

### CS-18B Provider previsit authority boundary
`provider_previsit_review_candidate` may request provider review and attach context packet references.  
It must not author clinical recommendations, contraindication decisions, diagnosis, treatment plan, dosing decision, or charting content.  
Provider Clinical Context authority remains in D5/D7-owned clinical pathways.

### CS-18 Other domain seams
Rx/lab/intake/marketing own their emissions; all domains share same CNS resolver and decision record discipline.

---

## §12 Stress conformance table (Round 4.2C design pass)

| Scenario | Source event(s) | Candidate path | Rules/sections satisfying | Expected decision/result | Remaining assumption (integration gate) | Status | Patch needed |
|---|---|---|---|---|---|---|---|
| ST-01 10 PM booking confirmation | `appointment.scheduled` | `booking_confirmation_candidate` | §3 mapping, §4 CS-01/CS-02, §7 CS-10 | `send_now` allowed when patient-initiated profile permits | tenant profile configured | PASS | no |
| ST-02 confirmed then cancel | `appointment.scheduling_reply_received` | state proposal | §5 CS-04 matrix, §6 CS-06/CS-07/CS-08 | `confirmed -> cancellation_requested` non-terminal | D3 cancellation commit path available | PASS | no |
| ST-03 confirmed then reschedule | `appointment.scheduling_reply_received` | state proposal | §5 CS-04 matrix, §6 CS-06/CS-08 | `confirmed -> reschedule_requested` non-terminal | D2/D3 compensation path available | PASS | no |
| ST-04 stale reply old thread | inbound stale correlation | review/no-op candidate | §6 CS-07/CS-08, §10 stale fallbacks | no stale mutation; explicit stale audit | stale detection inputs present | PASS | no |
| ST-05 prep with coverage need | reminder/prep cadence | reply-inviting candidate | §7 CS-10/CS-11, §4 CS-02 | coverage check gates send/defer/reroute | coverage profile exists | PASS | no |
| ST-06 too many messages | multi-event burst | multiple candidates | §7 CS-12, §4 CS-02 | arbitration suppresses/defer lower priority | contact-load state available | PASS | no |
| ST-07 failed delivery | delivery failure callback | fallback/review candidate | §5 CS-04 matrix, §9 CS-14 write rows, §10 fallbacks | `failed_delivery` branch + fallback/escalation | rail callback signal is available | PASS | no |
| ST-08 STOP | opt-out inbound | suppression/legal route candidate | §6 CS-06 taxonomy, §7 CS-10 policy dimensions, §10 consent fallback | suppress disallowed sends, legal-only path | consent state is queryable | PASS | no |
| ST-09 visit coordination reply | inbound logistics | coordination/review candidate | §6 CS-06 taxonomy, §7 profile table | operational queue route; no clinical mutation | queue ownership configured | PASS | no |
| ST-10 provider appointment task | appointment context | `provider_previsit_review_candidate` | §3 mapping, §4 CS-01/CS-02, §11 seams | provider-task envelope only (no mixed action) | provider queue SLA configured | PASS | no |
| ST-11 chaotic pivot chain | mixed chain with stale + clinical | supersession-safe branching | §6 CS-07/CS-08/CS-09, §10 fallbacks, §11 seams | no dupes, stale blocked, clinical escaped to owner | cross-domain resolver contracts active | PASS | no |

Note: status indicates D4 design-conformance pass only, not runtime production validation.  
Remaining assumptions are explicit integration gates for Round 5/6/final cross-domain validation, especially ST-11 chaotic pivot chain.

---

## §13 Salvage ledger from prior Round 4 (parts-bin retained)

Retained:
- `appointment.confirmation_state` substrate
- `appointment_confirmation_event` substrate
- deterministic AI-off path
- inbound classification + confidence routing
- failed delivery + fallback handling
- idempotency and contact-load arbitration
- non-terminal `confirmed` correction
- stale inbound/supersession handling
- envelope output discipline
- stress scenario coverage

Discarded:
- reminder-module framing
- local send-orchestration mental model

---

## §14 Round 4.2C checkpoint closing and gate

- This file preserves Round 4.2 rewrite framing and applies adversarial hardening patches.
- User/Knox acceptance recorded: Domain 4 is accepted as the Day 0 scheduling-originated candidate-emitter slice into CNS.
- This closure is architectural/design conformance, not full cross-domain runtime proof.
- Remaining stress assumptions are integration gates for Round 5/6/7/final validation.
- Round 5 remains frozen.
- Explicit user/Knox checkpoint required before any Round 5 movement.
- No claim of Round 5 readiness is made here.

