# Domain 3 — Appointment Lifecycle Rules (Day 0)

**Date:** 2026-05-17 (initial) + 2026-05-17 (Round 3.1 patch applied)
**Round:** 3 of 7 + Round 3.1 patch (Amendment G + cross-domain seam + open decisions resolved)
**Status:** AUTHORED + PATCHED — pending user + Knox review before Round 4 starts
**Index:** [00_index.md](00_index.md)
**Phase scope this file:** Day 0 fully detailed; M1-2 / M3-6 / FUTURE listed name-only in [§Deferred Rule Candidates](#deferred-rule-candidates).

**Round 3.1 patches applied (Phase 1 hardening v6, post Round 3 review):**
1. **Amendment G applied** — DL-17 inv 24 extended with reschedule fee policy columns (first/nth/threshold/staff_mediation_after_n).
2. **Index §2.4-2.6 doctrine locked** — Same-service ≠ different-service for entitlement context (anti-pattern); Domain 3 ↔ Domain 6 seam (lifecycle event → commerce consequence); Financial eligibility gate family extension to Amendment D.
3. **§8 added to this file** — Domain 3 ↔ Domain 6 seam with 4-stage validation pattern + entitlement reservation lifecycle + same-service doctrine cross-link.
4. **LC rule patches** — LC-14/16/17/18/19/21/22 updated per Round 3.1 cross-domain discipline + user/Knox open-decision resolutions:
   - LC-14/17: Domain 3 emits lifecycle events; Domain 6 applies fees + entitlement disposition (NOT Domain 3 directly)
   - LC-16: 2-tier transition — auto-mark lifecycle no-show OK; financial consequences DEFAULT staff-review (tenant opt-in for automation)
   - LC-18/19: reschedule chain depth policy threshold (no global hard cap; tenant-configurable per Amendment G `staff_mediation_required_after_n_reschedules`)
   - LC-19: Amendment G applied
   - LC-21/22: Waitlist TTL default 30min (revised from 1hr); tenant-configurable with preset values + per-context defaults

Substrate gap audit post Round 3.1: **24 OK / 0 OK-with-extension / 0 NEW**.

**Round 2.6 guardrails honored** (binding from index §2.3):

1. **Guardrail #1 — status_flags BITMASK are DERIVED indicators.** Domain 3 owns the BITMASK SHAPE + projection discipline + flags genuinely owned by appointment lifecycle (Arrived / Late / Bulk_reschedule_pending / Walk_in for booking-time / First_visit for booking-time). Domain 3 does NOT own canonical truth for: Confirmed (DL-20 inv 33 confirmation_state — Domain 4) / Forms_complete (intake_session / care_episode_task — Domain 5/7) / Card_on_file (payment_method — Domain 6) / Consent_signed (consent_artifact — Domain 7) / Deposit_paid (commerce_order_line — Domain 6) / Photos_captured / Note_pending / Attestation_pending / Closeout_complete. Those flags are SET BY their owning domain via materialized projection update + emitted event; Domain 3 only PROJECTS them.

2. **Guardrail #2 — Appointment lifecycle does NOT swallow encounter creation.** Domain 3 owns ONLY the appointment lifecycle state machine. Encounter substrate + 7 creation paths + performed care + product/lot/units capture + provider attestation are Domain 5 / Domain 7 territory. `appointment.fulfillment_encounter_id` FK links the two but does NOT collapse them. Booked Botox ≠ performed Botox ≠ consent signed ≠ chart note.

## §0 Domain scope + the doctrine questions

Domain 3 covers the rules that govern HOW an appointment moves through its lifecycle states from booking commit through completion/cancellation/no-show/reschedule/archival. It encompasses the state machine, status_flags projection discipline (DERIVED only), check-in flow, cancellation policy + fees + refunds, no-show grace window + recovery, atomic reschedule compensation, waitlist promotion cascade, dispute flag, and post-retention archival.

Domain 3 does NOT cover: booking composer (Domain 2); confirmation round-trip + outbound (Domain 4); encounter creation + performed care (Domain 5); checkout + commerce settlement + entitlement redemption (Domain 6); documentation + lot capture + attestation (Domain 7).

**Doctrine questions Domain 3 must unambiguously answer:**

1. What are the 13 lifecycle states + their legal transitions?
2. How are illegal state transitions handled (rejected vs error vs admin escalation)?
3. How is the `status_flags` BITMASK maintained as a projection without becoming canonical truth?
4. Who SETS each status_flag and when?
5. How does check-in transition (scheduled → checked_in) compose with status_flags + encounter creation (Domain 5)?
6. How does in_progress → completed transition compose with encounter closeout (Domain 5)?
7. How are cancellations honored: lead-time policy + fee + refund + resource release?
8. How is no-show detected (grace window) + handled (fee + re-engagement)?
9. How does reschedule preserve atomic compensation discipline (cancel + book as one orchestration_run)?
10. How does waitlist promotion cascade on cancellation?
11. How is dispute flagged for admin review?
12. How is post-retention archival handled per DL-16 inv 13?

Each rule below resolves one or more questions; resolution map in [§Resolution map](#5-resolution-map).

## §1 Layer 1 substrate context (read first)

```text
appointment (DL-20 inv 33; substrate-slice-ready post Round 2.5):
├── id, tenant_id, patient_id, patient_relationship_id
├── venue_id
├── planned_window_start, planned_window_end
├── status ENUM (13 states per DL-15 inv 5 + amendment 8 rename — domain 3 owns transitions)
├── status_flags BITMASK (16 flags per DL-15 amendment 29 — domain 3 owns SHAPE + projection)
├── confirmation_state ENUM (DL-20 inv 33 — Domain 4 owned; Domain 3 reads to project Confirmed flag)
├── booking_channel, attribution_source, trigger_source (Domain 2 set at booking)
├── booking_request_note (mutable per DL-20 inv 33)
├── source_booking_preset_id FK NULL (Amendment A; Domain 2 set at booking)
├── fulfillment_encounter_id FK NULL (Domain 5 sets when encounter created)
├── cancellation_policy_id FK NULL (DL-17 inv 24 — read by Domain 3 cancellation flow)
├── cancelled_at TIMESTAMP NULL, cancellation_reason_code ENUM NULL (Domain 3 owned)
├── no_show_confirmed_at TIMESTAMP NULL (Domain 3 owned; grace window elapsed)
├── checked_in_at TIMESTAMP NULL, checked_in_by_actor (Domain 3 owned)
├── in_progress_started_at TIMESTAMP NULL (Domain 3 owned; encounter creation trigger)
├── completed_at TIMESTAMP NULL (Domain 3 owned; encounter closeout trigger)
├── disputed_at TIMESTAMP NULL, dispute_reason_code (Domain 3 owned; admin flag)
├── archived_at TIMESTAMP NULL (Domain 3 owned; retention trigger)
├── linked_rescheduled_from_appointment_id FK NULL (Domain 3 — atomic compensation chain)
├── linked_rescheduled_to_appointment_id FK NULL (Domain 3 — compensation chain)
└── created_by_actor (DL-16 amendment 43)

cancellation_policy (DL-17 inv 24):
├── id, tenant_id, service_id FK NULL (per-service override OR brand default)
├── lead_time_minutes (cancellation must be N+ min before appointment)
├── late_cancel_fee_amount / late_cancel_fee_percent
├── no_show_fee_amount / no_show_fee_percent
├── deposit_forfeiture_policy ENUM
├── refund_to_credit_policy ENUM
└── staff_override_allowed BOOLEAN

orchestration_run (DL-14 inv 17):
├── (multi-step container for reschedule / waitlist cascade / no-show recovery)
└── linked orchestration_action rows

waitlist_entry (DL-15 inv 8 implicit substrate):
├── patient_id, service_id FK NULL, provider_id FK NULL, location_id, time_window
└── notification_state ENUM (cascade per offer TTL)
```

## §2 Rule sections

| Section | Rules | Theme |
|---|---|---|
| A | LC-01 to LC-03 | Lifecycle state machine (13 states + legal transitions + illegal transition events) |
| B | LC-04 to LC-07 | status_flags projection discipline (DERIVED indicators; 16-flag mapping; flag-setter authority per owning domain) |
| C | LC-08 to LC-09 | Check-in flow (scheduled → checked_in; status_flags|= Arrived + Late projection) |
| D | LC-10 to LC-11 | In-progress / completed (encounter-FK-driven; lifecycle ≠ encounter creation per Guardrail #2) |
| E | LC-12 to LC-15 | Cancellation (lead-time policy + fee + refund + resource release) |
| F | LC-16 to LC-17 | No-show grace window + recovery (fee + re-engagement orchestration_run) |
| G | LC-18 to LC-20 | Reschedule = atomic compensation (cancel + book as single orchestration_run) |
| H | LC-21 to LC-22 | Waitlist promotion cascade on cancellation |
| I | LC-23 to LC-24 | Dispute flag + post-retention archival |

---

## Section A — Lifecycle state machine

### Rule LC-01: appointment.status is a 13-state ENUM per DL-15 inv 5 + amendment 8

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Batch 5 row 60 evidence + Layer 2 Section B.1 + Knox marker enumerate 13 distinct lifecycle states surfaced in Mindbody's UI (Proposed / Held / Hold Expired / Scheduled / Pending Deposit / Checked-In / In Progress / Completed / Cancelled / No-Showed / Rescheduled / Disputed / Archived). Mindbody UI distinguishes states via badges + filter tabs in appointments grid.
2. **Cross-app pattern reference (ANALOGIES for pressure-testing, NOT hard evidence):**
   - **Airline reservation lifecycle** — booked / pending payment / ticketed / checked-in / boarded / flown / cancelled / no-show / refunded. ~10-state machine; explicit transitions.
   - **Restaurant reservation lifecycle (OpenTable)** — held / confirmed / seated / completed / cancelled / no-showed. 6-state machine.
   - **Hospital appointment lifecycle (Epic)** — proposed / scheduled / arrived / in-progress / completed / cancelled / no-showed / rescheduled. 8-state machine.
   - **Finite state machine (FSM) theory** — explicit states + transitions + illegal-transition handling.
3. **Underlying tenant need:** Real clinical operations require an explicit, auditable, queryable state machine for every appointment. Free-text status (Mindbody-era pattern in some legacy systems) breaks reporting + scheduler decision logic + downstream automation (reminders, cancellation cascades, no-show recovery).
4. **OMNI generic primitive / rule:** `appointment.status` ENUM per DL-15 inv 5 (post amendment 8 rename), 13 values:
   1. `proposed` — slot offered, no commitment (Domain 2 BC-31 owns transition into this state)
   2. `held` — slot held with TTL (Domain 2 BC-31 owns transition)
   3. `hold_expired` — TTL elapsed without booking (Domain 2 BC-31 owns transition)
   4. `scheduled` — booking committed atomically (Domain 2 owns transition via BC-21 atomic commit)
   5. `scheduled_pending_deposit` — booked but deposit not collected (Domain 6 owns transition via deposit RPC)
   6. `checked_in` — patient arrived (Domain 3 owns transition via LC-08)
   7. `in_progress` — encounter creation triggered (Domain 3 owns transition via LC-10; encounter substrate created in Domain 5 via FK)
   8. `completed` — encounter closeout signaled (Domain 3 owns transition via LC-11; encounter.status = closeout_complete in Domain 5 via FK)
   9. `cancelled` — cancellation honored per policy (Domain 3 owns transition via LC-12)
   10. `no_showed` — patient did not arrive within grace window (Domain 3 owns transition via LC-16)
   11. `rescheduled` — appointment was rescheduled (Domain 3 owns transition via LC-18 atomic compensation)
   12. `disputed` — admin-flagged for review (Domain 3 owns transition via LC-23)
   13. `archived` — post-retention archived (Domain 3 owns transition via LC-24)
5. **Divergence / improvement vs Mindbody:** OMNI explicit 13-state enum binding (no free text). Per DL-15 amendment 8: `confirmed` was renamed to `scheduled` so "confirmed" is reserved for PATIENT confirmation semantics on DL-20 inv 33 `confirmation_state` (Domain 4 territory). Mindbody conflates the two.
6. **Anti-copy warning:** Do NOT add ad-hoc state values (substrate ENUM is closed). Do NOT use "confirmed" for booking commitment (that's `scheduled` per amendment 8; Confirmed status_flag is DERIVED from confirmation_state — Domain 4 territory). Do NOT collapse `scheduled_pending_deposit` into `scheduled` (deposit gating is a distinct lifecycle phase per DL-15 inv 9 + Domain 6).
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 5 + amendment 8 fully cover.

#### Section B — Rule definition

8. **Trigger:** Any state transition (substrate write of appointment.status).
9. **Required inputs:** appointment_id, new_status ENUM, transition reason / context.
10. **Decision logic:**
    - Validate new_status ∈ 13 allowed values.
    - Validate transition is legal per LC-02 transition matrix.
    - Update appointment.status atomically per DL-16 inv 6 (state mutation = event emission atomic).
    - Set domain-specific timestamp (checked_in_at / completed_at / cancelled_at / no_show_confirmed_at / disputed_at / archived_at).
    - Emit `appointment.status_changed.{from}_to_{to}` event per DL-16 amendment 42 with before/after states + actor 4-tuple.
11. **Output / state change:** appointment.status updated; event emitted; downstream listeners (Domain 4 confirmation, Domain 6 commerce, Domain 5 encounter, CNS orchestration) react per subscriptions.
12. **Owning substrate:** `appointment.status` (DL-20 inv 33; values per DL-15 inv 5 + amendment 8).
13. **UI surface:** Schedule grid status badges per state (patient + staff); admin filters per state.
14. **Failure mode:** Invalid state value → reject. Illegal transition → see LC-03.
15. **Audit / event:** `appointment.status_changed.{from}_to_{to}` per DL-16 amendment 42 + amendment 43 actor.
16. **Evidence citations (HARD EVIDENCE):**
    - DL-15 inv 5 (13-state lifecycle binding)
    - DL-15 amendment 8 (confirmed → scheduled rename)
    - DL-20 inv 33 (appointment substrate carries status ENUM)
    - Mindbody Batch 5 row 60 (13 state badges in appointments grid)
    - Layer 2 Section B.1 (state enumeration)
17. **Test case:** Sarah's Botox booking transitions: proposed (slot offered) → held (10min TTL) → scheduled (commit) → checked_in (Tuesday 2:00pm arrival) → in_progress (provider opens encounter) → completed (closeout). All 6 transitions emit events; substrate stores state + timestamps.

### Rule LC-02: Transition matrix is deterministic + binding (legal transitions enumerated)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody implicitly enforces some transitions (cannot go from cancelled → in_progress) but matrix is not explicit; staff can sometimes manipulate state in admin UI.
2. **Cross-app pattern reference:**
   - **Airline reservation transition matrix** — explicit + deterministic (cannot transition flown → cancelled without specific refund flow).
   - **State machine implementations (XState, Stately)** — explicit transition tables.
   - **FHIR Appointment.status transitions** — proposed → pending → booked → arrived → fulfilled / cancelled / noshow / entered-in-error.
3. **Underlying tenant need:** Staff + AI + automation must NOT be able to put appointment into impossible states. Audit demands explicit transition rules.
4. **OMNI generic primitive / rule:** Transition matrix per Domain 3 binding doctrine. Allowed transitions (sparse — many states are terminal):

| From → To | Owning trigger |
|---|---|
| (start) → `proposed` | Domain 2 BC-31 slot offer |
| `proposed` → `held` | Domain 2 BC-31 patient/staff hold |
| `proposed` → `cancelled` | LC-12 cancellation (rare; before any commit) |
| `held` → `hold_expired` | Domain 2 BC-31 TTL elapsed |
| `held` → `scheduled` | Domain 2 BC-21 atomic commit |
| `held` → `cancelled` | LC-12 cancellation (rare; mid-hold) |
| `hold_expired` → (terminal) | none — historical record |
| `scheduled` → `scheduled_pending_deposit` | Domain 6 (deposit required, not paid) |
| `scheduled` → `checked_in` | LC-08 front desk check-in |
| `scheduled` → `cancelled` | LC-12 cancellation |
| `scheduled` → `no_showed` | LC-16 grace window elapsed |
| `scheduled` → `rescheduled` | LC-18 atomic compensation |
| `scheduled` → `disputed` | LC-23 admin flag |
| `scheduled_pending_deposit` → `scheduled` | Domain 6 deposit paid |
| `scheduled_pending_deposit` → `cancelled` | LC-12 (deposit failure → cancel) |
| `checked_in` → `in_progress` | LC-10 encounter creation triggered |
| `checked_in` → `cancelled` | LC-12 (patient left before service) |
| `checked_in` → `disputed` | LC-23 |
| `in_progress` → `completed` | LC-11 encounter closeout signaled |
| `in_progress` → `disputed` | LC-23 |
| `completed` → `disputed` | LC-23 |
| `completed` → `archived` | LC-24 retention elapsed |
| `cancelled` → `archived` | LC-24 retention |
| `no_showed` → `archived` | LC-24 retention |
| `rescheduled` → `archived` | LC-24 retention (the OLD appointment row in compensation chain is rescheduled-terminal) |
| `disputed` → any (resolution) | Admin override with Tier 3 attestation per DL-18 inv 8 |

5. **Divergence / improvement vs Mindbody:** OMNI explicit binding matrix. Mindbody implicit.
6. **Anti-copy warning:** Do NOT allow staff UI to override the matrix without Tier 3 attestation. Do NOT add ad-hoc transitions (matrix is the doctrine).
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 5 + state pattern; transition matrix is doctrine-level enforcement.

#### Section B — Rule definition

8. **Trigger:** Any appointment.status write attempt.
9. **Required inputs:** appointment.status (current) + new_status (proposed).
10. **Decision logic:**
    - Look up (current_status, new_status) in transition matrix.
    - If allowed: proceed per LC-01.
    - If disallowed: see LC-03 (illegal transition handling).
11. **Output / state change:** Either successful transition or illegal_transition event.
12. **Owning substrate:** Doctrine matrix; enforced by substrate trigger or RPC validation.
13. **UI surface:** Staff: transitions surface as actions only when legal; illegal transitions never offered in UI (defense-in-depth).
14. **Failure mode:** See LC-03.
15. **Audit / event:** Successful transitions per LC-01.
16. **Evidence citations:** DL-15 inv 5 + state machine theory + FHIR Appointment.status precedent.
17. **Test case:** Sarah's appointment in `scheduled`. Staff attempts to mark `completed` directly without check-in. Matrix: scheduled → completed is NOT allowed (must go through checked_in → in_progress → completed). Reject with `illegal_transition_attempted`.

### Rule LC-03: Illegal state transitions emit `illegal_transition_attempted` event; never silent failure

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody silently rejects some illegal transitions; staff sees no feedback.
2. **Cross-app pattern reference:**
   - **Database constraint violation** — explicit error code returned to caller.
   - **State machine libraries** — emit `transition_rejected` events.
3. **Underlying tenant need:** Staff debugging + audit trail require explicit illegal-transition events.
4. **OMNI generic primitive / rule:** Illegal transition attempt → reject substrate write + emit `appointment.illegal_transition_attempted` event with payload `{from_status, to_status, actor, reason_code}` per DL-16 amendment 42. Staff UI surfaces specific error.
5. **Divergence / improvement vs Mindbody:** OMNI explicit + auditable.
6. **Anti-copy warning:** Do NOT swallow the error; always surface explicit reason.
7. **Substrate pressure-test verdict:** **OK** — DL-16 inv 38 tamper-evident audit covers.

#### Section B — Rule definition

8. **Trigger:** Illegal transition attempt per LC-02.
9. **Required inputs:** Attempted (from, to) tuple + actor.
10. **Decision logic:**
    - Reject substrate write.
    - Emit `appointment.illegal_transition_attempted` event with payload.
    - Surface error to caller with `illegal_transition_reason_code` (e.g., `cannot_complete_without_check_in`, `cannot_reactivate_archived`, `cancelled_is_terminal`).
11. **Output / state change:** No state change; event row written; admin alert if pattern repeats.
12. **Owning substrate:** Event stream per DL-16.
13. **UI surface:** Staff: inline error with explanation.
14. **Failure mode:** N/A — error IS the response.
15. **Audit / event:** `appointment.illegal_transition_attempted` per DL-16 amendment 42.
16. **Evidence citations:** DL-16 inv 38 + LC-02.
17. **Test case:** Staff attempts to mark cancelled appointment back to scheduled. Matrix: cancelled → scheduled is NOT allowed (terminal). Substrate rejects; event emitted; staff sees "Cancelled appointments cannot be reactivated. To restore this booking, create a new appointment."

---

## Section B — status_flags projection discipline (DERIVED indicators)

### Rule LC-04: status_flags BITMASK is a MATERIALIZED PROJECTION, NOT canonical truth

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody's UI shows multiple status indicators per appointment (Confirmed / Arrived / Forms_complete / Card_on_file / Late) simultaneously alongside lifecycle state. Per Batch 5 row 60 evidence + Layer 2 B.1 — Mindbody UI exposes both lifecycle state AND multiple orthogonal flags concurrently.
2. **Cross-app pattern reference (ANALOGIES for pressure-testing, NOT hard evidence):**
   - **PostgreSQL materialized views** — derived data refreshed atomically from source.
   - **Database trigger-based denormalization** — common pattern for fast queryable status.
   - **CRM status indicators (Salesforce)** — multi-flag rollup of underlying state across domains.
3. **Underlying tenant need:** Schedule grid + reports + reminders need fast multi-flag query without joining 7 substrates. status_flags BITMASK gives O(1) status query. BUT: per Round 2.6 Guardrail #1, this MUST be a derived projection — never canonical truth.
4. **OMNI generic primitive / rule:** `appointment.status_flags` BITMASK 16-bit per DL-15 amendment 29. Each bit is MATERIALIZED FROM another substrate's canonical state (or, for a few flags, owned by Domain 3 lifecycle directly). Substrate-level trigger maintains bits atomically when owning state changes. Per DL-16 inv 3 category e (rendered projections).

**Binding flag → canonical owner mapping (per Round 2.6 Guardrail #1):**

| Flag (bit) | Canonical owner substrate | Owning domain | How Domain 3 projects |
|---|---|---|---|
| `Confirmed` | `appointment.confirmation_state = 'confirmed'` (DL-20 inv 33) | Domain 4 | Trigger on confirmation_state write |
| `Arrived` | `appointment.checked_in_at IS NOT NULL` (Domain 3 lifecycle) | Domain 3 — owned | Set inline at check-in (LC-08) |
| `Forms_complete` | `intake_session.status = 'submitted'` OR `care_episode_task(task_kind='intake_complete').status = 'complete'` | Domain 5 / 7 | Trigger on intake / task write |
| `Card_on_file` | `payment_method` row exists for patient with `tokenized_card NOT NULL` (DL-17 inv 18) | Domain 6 | Trigger on payment_method write |
| `Late` | DERIVED at runtime from `appointment.checked_in_at > appointment.planned_window_start + tenant.late_threshold` | Domain 3 — derived | Computed projection (refresh interval) |
| `Provider_running_behind` | DERIVED from schedule slip detection (Domain 3 operational) | Domain 3 — derived | Computed projection |
| `Consent_signed` | `consent_artifact` row exists for (patient_id, service_id, modality) with `signed_at NOT NULL` (DL-22) | Domain 7 | Trigger on consent_artifact write |
| `Deposit_paid` | `commerce_order_line(line_kind='treatment_deposit', status='paid')` linked to appointment_id (DL-17 inv 6) | Domain 6 | Trigger on commerce_order_line write |
| `Clinical_clearance_received` | `service_policy_eligibility_gate(clinical_clearance)` satisfied (Amendment D) | Domain 2 / 5 | Computed projection from gate evaluation |
| `Photos_captured` | `clinical_media` rows exist for encounter (DL-22) | Domain 7 | Trigger on clinical_media write |
| `Note_pending` | DERIVED from `encounter_line.attestation_id IS NULL AND encounter.status != 'closeout_complete'` (DL-20) | Domain 7 | Computed projection |
| `Attestation_pending` | DERIVED from DL-18 inv 9 attestation envelope incomplete | Domain 7 | Computed projection |
| `Closeout_complete` | `encounter.status = 'closeout_complete'` (DL-20 inv 11) | Domain 5 / 7 | Trigger on encounter.status write |
| `First_visit` | DERIVED at booking time from `patient.first_visit_at IS NULL` | Domain 3 — derived at booking | Computed at appointment creation; static thereafter |
| `Walk_in` | Set at booking time per Domain 2 BC-07 (`service.service_type = 'arrival'`) | Domain 2 — owned at booking | Set inline at booking; static thereafter |
| `Bulk_reschedule_pending` | Operational flag during bulk-cancel/reschedule events (Domain 3) | Domain 3 — operational | Set/cleared during bulk admin operations |

5. **Divergence / improvement vs Mindbody:** Mindbody's flag display is implicit + derivation is unclear (staff edits flags directly in some places). OMNI explicit: flags are PROJECTIONS; canonical state lives elsewhere; substrate trigger keeps them in sync; staff CANNOT directly edit flags (must change canonical state).
6. **Anti-copy warning:** Do NOT allow direct write to `appointment.status_flags` from app code. Always go through canonical substrate. Per Round 2.6 binding: status_flags is anti-junk-drawer — adding new flag without registering an owning canonical substrate is REJECTED. Do NOT add specialty-coded flags (no `Botox_consent_signed` — generic `Consent_signed` reads consent_artifact which captures specifics).
7. **Substrate pressure-test verdict:** **OK** — DL-15 amendment 29 (status_flags BITMASK) + DL-16 inv 3 category e (rendered projections) + per-flag canonical substrates already exist. No new substrate.

#### Section B — Rule definition

8. **Trigger:** Owning substrate write (confirmation_state change, intake_session.status, consent_artifact.signed_at, etc.) OR lifecycle event (check-in, no-show).
9. **Required inputs:** Owning substrate write event.
10. **Decision logic:**
    - On owning substrate write, trigger fires.
    - Trigger SETs or CLEARS the corresponding bit on appointment.status_flags.
    - For computed projections (Late / Provider_running_behind / Note_pending / Attestation_pending / Clinical_clearance_received): periodic refresh (per-tenant interval) OR on-read evaluation.
    - Bit changes emit `appointment.status_flag_set.{flag_name}` / `appointment.status_flag_cleared.{flag_name}` events (DEBUG audit).
11. **Output / state change:** appointment.status_flags bitmask updated atomically.
12. **Owning substrate:** Trigger logic at substrate level; reads from per-flag canonical substrates.
13. **UI surface:** Schedule grid: badges per active flag. Staff appointment detail: full flag list with link-out to owning substrate for each.
14. **Failure mode:** If owning substrate write succeeds but flag projection fails (e.g., trigger error): emit `appointment.status_flag_projection_failed.{flag_name}` for admin alert. Read-time evaluation acts as failsafe.
15. **Audit / event:** Per LC-01 status events + projection events.
16. **Evidence citations:**
    - DL-15 amendment 29 (16-flag BITMASK)
    - DL-16 inv 3 category e (rendered projections)
    - Round 2.6 Guardrail #1 (status_flags anti-junk-drawer + flag mapping table)
    - DL-20 inv 33 (confirmation_state separation) + DL-17 inv 18 (payment_method) + DL-22 (consent_artifact, clinical_media) + DL-20 inv 12 (encounter_line attestation) + DL-18 inv 9 (attestation envelope)
17. **Test case:** Sarah signs consent at check-in. consent_artifact row inserted with signed_at = NOW(). Substrate trigger fires → set bit `Consent_signed` on appointment.status_flags. Schedule grid badge updates within 1 refresh interval. Audit event `appointment.status_flag_set.Consent_signed` emitted. Staff sees flag with link to consent_artifact detail.

### Rule LC-05: status_flag changes emit events distinct from appointment.status transitions

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody status changes appear in audit log but flag changes vs state changes are not always distinguished.
2. **Cross-app pattern reference:**
   - **Salesforce field history tracking** — per-field change events distinct from record state.
   - **FHIR resource provenance** — per-field provenance tracking.
3. **Underlying tenant need:** Audit + reporting + downstream automation distinguish "appointment.status changed" from "Consent_signed flag flipped." Different consumers care about different events.
4. **OMNI generic primitive / rule:** Per DL-16 amendment 42 + 43:
   - `appointment.status_changed.{from}_to_{to}` for lifecycle state transitions (per LC-01)
   - `appointment.status_flag_set.{flag_name}` / `appointment.status_flag_cleared.{flag_name}` for flag projections (per LC-04)
   - Both event kinds registered in DL-16 inv 5 + 9 registry.
5. **Divergence / improvement vs Mindbody:** OMNI explicit event partitioning.
6. **Anti-copy warning:** Do NOT use single `appointment.changed` event (loses signal granularity).
7. **Substrate pressure-test verdict:** **OK** — DL-16 amendment 42 outbound trigger registry supports.

#### Section B — Rule definition

8. **Trigger:** Per LC-01 + LC-04.
9. **Required inputs:** Per LC-01 + LC-04.
10. **Decision logic:** Emit distinct event kinds per LC-01 vs LC-04.
11. **Output / state change:** Event rows.
12. **Owning substrate:** Event stream.
13. **UI surface:** Audit log per-event display.
14. **Failure mode:** Event emission failure logged + retried per DL-16 inv 12 DLQ.
15. **Audit / event:** As per LC-01 + LC-04.
16. **Evidence citations:** DL-16 amendment 42 + 43.
17. **Test case:** Sarah arrives + signs consent. Two events emit: `appointment.status_changed.scheduled_to_checked_in` (lifecycle) + `appointment.status_flag_set.Arrived` (flag) + `appointment.status_flag_set.Consent_signed` (flag). 3 distinct event kinds.

### Rule LC-06: Staff cannot directly edit status_flags — must change canonical state

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody allows some staff editing of indicators directly (Confirmed checkbox in some screens), causing drift between displayed flag and canonical truth.
2. **Cross-app pattern reference:**
   - **Database materialized view discipline** — never write directly; refresh from source.
   - **Read-only projection model** — UI exposes flags as read-only; actions route to canonical writes.
3. **Underlying tenant need:** Drift between flag and canonical state corrupts reporting + downstream automation. Force staff actions through canonical substrate write paths.
4. **OMNI generic primitive / rule:** UI displays status_flags as READ-ONLY indicators. Staff actions that affect flags route to canonical substrate write:
   - Click "Confirmed" → trigger confirmation_state write per Domain 4 (NOT direct flag write)
   - Click "Arrived" → trigger checked_in_at write per LC-08 (NOT direct flag write)
   - Click "Consent signed" → trigger consent_artifact insert per Domain 7 (NOT direct flag write)
   - Click "Deposit paid" → trigger commerce_order_line write per Domain 6 (NOT direct flag write)
5. **Divergence / improvement vs Mindbody:** Mindbody allows direct edits in some flows; OMNI hardline routes through canonical.
6. **Anti-copy warning:** Do NOT expose direct status_flags edit in admin UI. App layer can READ status_flags for fast queries but NEVER WRITE.
7. **Substrate pressure-test verdict:** **OK** — UI projection discipline.

#### Section B — Rule definition

8. **Trigger:** UI action that conceptually affects a flag.
9. **Required inputs:** Action context.
10. **Decision logic:** Route to canonical substrate write per flag mapping (LC-04 table).
11. **Output / state change:** Canonical substrate write → trigger updates status_flag bit.
12. **Owning substrate:** Per LC-04 owning domain.
13. **UI surface:** Flags shown read-only; actions route through canonical edit surfaces.
14. **Failure mode:** Direct write attempt to status_flags rejected with `direct_flag_write_disallowed`.
15. **Audit / event:** Per canonical owning substrate event.
16. **Evidence citations:** LC-04 + DL-16 inv 3 + Round 2.6 Guardrail #1.
17. **Test case:** Staff clicks "Mark Confirmed" in appointment detail. UI calls Domain 4 RPC `appointment.confirmation.record_patient_confirmation`. confirmation_state = 'confirmed'. Trigger fires → status_flags |= Confirmed. UI re-renders flag. No direct flag write.

### Rule LC-07: New status_flag additions require registering canonical owner substrate

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody adds new status indicators ad-hoc as features ship.
2. **Cross-app pattern reference:**
   - **Schema evolution discipline** — new fields require migration plan.
   - **Feature flag governance** — additions go through registry.
3. **Underlying tenant need:** Per Round 2.6 anti-junk-drawer — new flags must not be added without explicit owning substrate (otherwise BITMASK becomes random grab-bag).
4. **OMNI generic primitive / rule:** Adding a new bit to `appointment.status_flags` requires:
   - (a) Registered canonical owning substrate (existing or proposed in DL amendment)
   - (b) Projection trigger logic defined
   - (c) Per DL-16 inv 5 + 9 + 29 registry update + amendment registry entry
   - (d) Tier 3 attestation per DL-18 inv 8 for doctrine change
5. **Divergence / improvement vs Mindbody:** OMNI explicit governance.
6. **Anti-copy warning:** Do NOT add new bits without canonical owner. Do NOT bypass governance via "operational override" flag.
7. **Substrate pressure-test verdict:** **OK** — DL-16 registry discipline.

#### Section B — Rule definition

8. **Trigger:** Proposed status_flags expansion.
9. **Required inputs:** Proposed flag name + canonical owner + projection logic.
10. **Decision logic:** Per doctrine governance gate.
11. **Output / state change:** Registry update + amendment.
12. **Owning substrate:** DL-16 registry + DL-15 amendment 29 extension.
13. **UI surface:** Admin doctrine review process.
14. **Failure mode:** Reject if no canonical owner.
15. **Audit / event:** Doctrine amendment event.
16. **Evidence citations:** Round 2.6 Guardrail #1 + DL-16 inv 5 + 9 + 29 + DL-15 amendment 29.
17. **Test case:** Bloom wants to add `VIP_priority` flag. Review: canonical owner? — patient_metadata_axis(VIP_status) per DL-19 inv 9. Projection logic? — trigger on patient_metadata_assignment(patient_id, VIP_axis) write. Registry update + amendment. Approved → bit added.

---

## Section C — Check-in flow

### Rule LC-08: Check-in transition (scheduled → checked_in) is front-desk authorized; sets Arrived + Late flags atomically

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Mindbody check-in flow: front desk clicks "Check In" on appointment row → appointment.status = checked_in + Arrived flag set + arrival_timestamp captured. Late status computed from comparison.
2. **Cross-app pattern reference:**
   - **Airline check-in** — boarding pass issued; status updated; flag set.
   - **Hotel check-in** — room key issued; status updated.
   - **Restaurant arrival** — "Seated at table 12"; status updated.
3. **Underlying tenant need:** Front desk needs single action to (a) move appointment to checked_in, (b) capture arrival timestamp, (c) set Arrived flag, (d) compute Late projection, (e) trigger downstream automation (notify provider, prep room, etc.).
4. **OMNI generic primitive / rule:** Check-in RPC: `appointment.check_in(appointment_id, checked_in_by_actor)`. Substrate writes:
   - `appointment.status = 'checked_in'`
   - `appointment.checked_in_at = NOW()`
   - `appointment.checked_in_by_actor = actor_4tuple`
   - `appointment.status_flags |= Arrived`
   - Compute `Late` projection: `IF (checked_in_at > planned_window_start + tenant.late_threshold_minutes): status_flags |= Late`
   - Emit `appointment.status_changed.scheduled_to_checked_in` + `appointment.status_flag_set.Arrived` (+ `appointment.status_flag_set.Late` if applicable).
5. **Divergence / improvement vs Mindbody:** OMNI explicit atomic RPC.
6. **Anti-copy warning:** Do NOT split check-in into multiple writes (atomic per DL-16 inv 6). Do NOT compute Late lazily in UI only — substrate carries projection.
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 33 + DL-15 amendment 29 + DL-16 inv 6.

#### Section B — Rule definition

8. **Trigger:** Front desk action "Check In" on appointment row.
9. **Required inputs:** appointment_id, actor (front desk staff).
10. **Decision logic:**
    - Validate appointment.status = 'scheduled' OR 'scheduled_pending_deposit' (LC-02 transition matrix).
    - If 'scheduled_pending_deposit': check tenant policy — some tenants block check-in until deposit paid (Domain 6 territory); reject with `deposit_pending_blocks_check_in`. Others admit check-in + flag warning.
    - Validate `appointment.confirmation_state` (Domain 4): some tenants require confirmation before check-in (rare; tenant policy).
    - Atomic write per LC-08 above.
    - Set Late flag if applicable per tenant.late_threshold_minutes (default 10 minutes).
11. **Output / state change:** Per LC-08 substrate write.
12. **Owning substrate:** `appointment` (DL-20 inv 33) + status_flags (DL-15 amendment 29).
13. **UI surface:** Schedule grid: "Check In" button on scheduled appointments; click → confirmation modal; commit.
14. **Failure mode:** Illegal transition → LC-03. Deposit-blocking policy → explicit reject.
15. **Audit / event:** Per LC-01 + LC-04.
16. **Evidence citations:** DL-20 inv 33 + DL-15 amendment 29 + Mindbody Batch 5 + Build Contract §3.
17. **Test case:** Sarah arrives 2:10pm for 2:00pm Botox. Front desk clicks "Check In." appointment.status = checked_in; checked_in_at = 2:10pm; status_flags |= Arrived + Late (>10min late threshold). Provider gets notification "Sarah checked in, 10min late." Encounter creation queued (Domain 5).

### Rule LC-09: Late flag is a DERIVED projection refreshed at check-in + periodically

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody shows late indicator in schedule grid; refresh interval implicit.
2. **Cross-app pattern reference:**
   - **Airline gate display** — late-arriving boarders flagged in real-time.
   - **Restaurant reservation late warning** — host UI flags after grace window.
3. **Underlying tenant need:** Late detection should happen at check-in commit + remain accurate as schedule progresses (e.g., upcoming appointment getting late but not yet checked in).
4. **OMNI generic primitive / rule:** Late projection logic:
   - At check-in: compute `Late = (checked_in_at > planned_window_start + late_threshold)`.
   - For scheduled-but-not-yet-checked-in appointments: periodic projection refresh (default 1min interval) computes `Late = (NOW() > planned_window_start + late_threshold AND status = 'scheduled' AND no_show_confirmed_at IS NULL)`. Sets flag with `pre_arrival_late` connotation (no actual arrival timestamp yet).
5. **Divergence / improvement vs Mindbody:** OMNI explicit refresh interval + clear projection rule.
6. **Anti-copy warning:** Do NOT canonicalize Late as a fact (it's derived). Do NOT trigger automated cancellation from Late alone (no-show grace window per LC-16 is the cancellation trigger).
7. **Substrate pressure-test verdict:** **OK** — derived projection.

#### Section B — Rule definition

8. **Trigger:** Check-in commit OR periodic projection refresh.
9. **Required inputs:** appointment.planned_window_start + tenant.late_threshold_minutes + (checked_in_at OR NOW()).
10. **Decision logic:** As described.
11. **Output / state change:** status_flags Late bit set/cleared.
12. **Owning substrate:** Projection logic.
13. **UI surface:** Schedule grid: Late badge.
14. **Failure mode:** Projection failure logged + retried.
15. **Audit / event:** Status flag events per LC-05.
16. **Evidence citations:** LC-04 + LC-08.
17. **Test case:** 2:15pm. Patrick is scheduled 2:00pm but not checked in. Projection runs every 1min. NOW() (2:15) > 2:00 + 10min late_threshold → set Late flag. Schedule grid shows Late badge on Patrick's row. Patrick walks in 2:18pm → check-in sets Arrived + Late persists.

---

## Section D — In-progress / completed lifecycle (encounter-FK-driven; lifecycle ≠ encounter creation)

### Rule LC-10: in_progress transition is triggered when encounter creation succeeds in Domain 5

**Phase:** DAY_0

#### Section A — Flight-lane translation (Round 2.6 Guardrail #2 — strict separation)

1. **Mindbody behavior observed:** Mindbody's "In Progress" status is set manually by staff or implicitly when service note opens.
2. **Cross-app pattern reference:**
   - **Hospital encounter (Epic)** — encounter starts when provider opens chart; appointment.status reflects this.
   - **Restaurant order** — Order Placed → order ticket sent to kitchen; status reflects.
3. **Underlying tenant need:** When clinical work begins, lifecycle must reflect in_progress for downstream automation (cancellation no longer admitted; rescheduling now requires special flow). But the substrate-canonical fact is in Domain 5 (encounter created with status = in_progress), NOT in Domain 3.
4. **OMNI generic primitive / rule:** When Domain 5 creates `encounter` row with `status = 'in_progress'` AND `fulfillment_appointment_id IS NOT NULL`, a substrate trigger fires that:
   - Updates `appointment.fulfillment_encounter_id = encounter.id` (FK link)
   - Transitions `appointment.status: checked_in → in_progress`
   - Sets `appointment.in_progress_started_at = NOW()`
   Per Round 2.6 Guardrail #2: encounter creation logic + provider attestation + performed lines + product/lot capture are Domain 5 territory. Domain 3 only PROJECTS the lifecycle transition.
5. **Divergence / improvement vs Mindbody:** Mindbody conflates state; OMNI maintains strict separation via FK link.
6. **Anti-copy warning:** Do NOT create encounter row from Domain 3 logic — that's Domain 5's job. Do NOT manually set in_progress from Domain 3 UI without an encounter being created.
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 33 fulfillment_encounter_id FK exists; Domain 3 only projects.

#### Section B — Rule definition

8. **Trigger:** Domain 5 encounter substrate write with `status = 'in_progress'` + `fulfillment_appointment_id NOT NULL`.
9. **Required inputs:** encounter row data.
10. **Decision logic:**
    - Substrate trigger detects encounter write.
    - Atomic update: `appointment.fulfillment_encounter_id = encounter.id; appointment.status = 'in_progress'; appointment.in_progress_started_at = NOW()`.
    - Emit `appointment.status_changed.checked_in_to_in_progress` event.
11. **Output / state change:** Appointment lifecycle + encounter linked.
12. **Owning substrate:** `appointment.fulfillment_encounter_id` (DL-20 inv 33).
13. **UI surface:** Schedule grid: appointment shows "In Progress" badge. Detail view: link to encounter.
14. **Failure mode:** If illegal transition (e.g., encounter created but appointment.status != checked_in), emit `illegal_transition_attempted` + admin alert.
15. **Audit / event:** Per LC-01 + cross-domain event linkage.
16. **Evidence citations:** DL-20 inv 33 (fulfillment_encounter_id) + DL-20 inv 11 (encounter lifecycle) + Round 2.6 Guardrail #2.
17. **Test case:** Sarah checked in 2:10pm. Provider opens encounter at 2:15pm (Domain 5 RPC creates encounter row, status=in_progress). Trigger fires → appointment.status = in_progress, appointment.fulfillment_encounter_id = encounter.id, appointment.in_progress_started_at = 2:15pm. Schedule grid updates. Cancellation no longer admitted (per LC-12).

### Rule LC-11: completed transition is triggered by encounter closeout in Domain 5/7

**Phase:** DAY_0

#### Section A — Flight-lane translation (Round 2.6 Guardrail #2)

1. **Mindbody behavior observed:** Mindbody marks appointment "Completed" when staff closes encounter / saves note. Mechanism implicit.
2. **Cross-app pattern reference:**
   - **Hospital chart closeout** — encounter signed → appointment terminal state.
   - **Restaurant tab closed** — bill paid → reservation terminal.
3. **Underlying tenant need:** When clinical work is done + attested + commerce settled (Domain 7 closeout + Domain 6 sale close), appointment lifecycle becomes terminal.
4. **OMNI generic primitive / rule:** When Domain 5 encounter substrate writes `encounter.status = 'closeout_complete'`, substrate trigger fires:
   - Atomic update: `appointment.status = 'completed'; appointment.completed_at = NOW()`.
   - Emit `appointment.status_changed.in_progress_to_completed`.
   - Domain 7 owns closeout atomicity (attestation + sale close + lot capture + note); Domain 3 only projects the lifecycle terminal.
5. **Divergence / improvement vs Mindbody:** Explicit separation.
6. **Anti-copy warning:** Do NOT mark appointment completed from Domain 3 UI without encounter closeout.
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 11 + DL-20 inv 15 closeout atomicity + Round 2.6.

#### Section B — Rule definition

8. **Trigger:** Domain 5/7 encounter.status = 'closeout_complete' write.
9. **Required inputs:** encounter row.
10. **Decision logic:** Trigger atomic appointment update.
11. **Output / state change:** appointment.status = completed + timestamp.
12. **Owning substrate:** Linked via DL-20 inv 33.
13. **UI surface:** Schedule grid: "Completed" badge; archival eligibility per LC-24.
14. **Failure mode:** If illegal transition (encounter closeout without appointment.status = in_progress): emit `illegal_transition_attempted`.
15. **Audit / event:** Per LC-01.
16. **Evidence citations:** DL-20 inv 11 + inv 15 + Round 2.6 Guardrail #2.
17. **Test case:** Sarah's Botox encounter closeout: provider attests; commerce_order closes; encounter.status = closeout_complete (Domain 5/7). Trigger fires → appointment.status = completed; completed_at = 2:35pm. Archival eligibility starts (LC-24).

---

## Section E — Cancellation

### Rule LC-12: Cancellation transitions through cancellation_policy evaluation; lead-time determines late_cancel vs honored

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Mindbody Batch 15 Step 06 settings "No-Show/Late Cancel Fees" sub-page. Each service / brand declares cancellation policy: lead-time + fee + refund-to-credit option + staff override.
2. **Cross-app pattern reference:**
   - **Airline cancellation policy** — fare-class-specific; lead-time tiers; refund vs credit.
   - **Hotel cancellation** — within 24hr fee tier.
   - **Restaurant reservation cancellation** — late-cancel fee for some restaurants.
3. **Underlying tenant need:** Tenant must declare cancellation policy per service (or brand default); policy applied deterministically at cancel time; staff override path with capability + audit.
4. **OMNI generic primitive / rule:** Cancellation RPC: `appointment.cancel(appointment_id, cancel_reason, actor)`. Logic:
   - Look up `cancellation_policy` (DL-17 inv 24) for appointment.service_id (per-service) OR brand default.
   - Compute `lead_time_minutes_actual = appointment.planned_window_start - NOW()`.
   - If `lead_time_minutes_actual >= cancellation_policy.lead_time_minutes`: honored cancel (no fee).
   - Else: late_cancel — apply `late_cancel_fee_amount` per LC-14.
   - Atomic transitions: `appointment.status = 'cancelled'; cancelled_at = NOW(); cancellation_reason_code = code; cancelled_by_actor = actor`.
   - Release resources atomically per LC-15.
   - Emit `appointment.status_changed.{from}_to_cancelled` + `appointment.cancelled.{honored|late}`.
   - Trigger waitlist promotion per LC-21.
5. **Divergence / improvement vs Mindbody:** OMNI explicit deterministic policy + audit.
6. **Anti-copy warning:** Do NOT invent policy at cancel time (per DL-15 inv 7 — policy is declared upfront). Do NOT silently void without `cancellation_reason_code`. Do NOT model cancellation fee as a separate $0 "Cancellation Policy" pricing option (Mindbody workaround; OMNI uses cancellation_policy substrate per DL-17 inv 24).
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 7 + DL-17 inv 24.

#### Section B — Rule definition

8. **Trigger:** Cancel action (patient self-service OR staff-mediated).
9. **Required inputs:** appointment_id, cancellation_reason_code, actor.
10. **Decision logic:** As above.
11. **Output / state change:** appointment.status = cancelled + timestamps + downstream cascades.
12. **Owning substrate:** `appointment` (DL-20 inv 33) + `cancellation_policy` (DL-17 inv 24).
13. **UI surface:** Patient self-service: cancel button on patient portal appointment detail. Staff: cancel modal with reason dropdown + late_cancel fee preview if applicable.
14. **Failure mode:** Illegal transition (e.g., cancelled→cancelled, in_progress→cancelled without dispute path) → LC-03.
15. **Audit / event:** Per LC-01 + fee + waitlist + resource release events.
16. **Evidence citations:** DL-15 inv 6 + 7 + DL-17 inv 24 + Mindbody Batch 15 Step 06.
17. **Test case:** Sarah books Botox Tuesday 2pm Monday morning. Cancellation policy: 24hr lead time, $50 late_cancel fee. Sarah cancels Monday 3pm (23hr lead time). Late_cancel fee applied. appointment.status = cancelled; commerce_order_line created with line_kind = cancellation_fee + amount = $50 (Domain 6). Resources released. Waitlist promotion cascade triggered.

### Rule LC-13: Cancellation in `in_progress` or `completed` requires dispute flow + Tier 3 attestation

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody allows some retroactive cancellation; mechanism unclear.
2. **Cross-app pattern reference:**
   - **Airline cancellation post-boarding** — requires special operations + refund processing.
   - **Hospital encounter void** — explicit "entered in error" path.
3. **Underlying tenant need:** Once clinical work has started or completed, "cancelling" the appointment is not just lifecycle — it requires clinical retraction + commerce adjustment + audit.
4. **OMNI generic primitive / rule:** Cancellation of in_progress or completed appointment is NOT a simple LC-12 transition. Routes to dispute flow per LC-23:
   - Cancellation request flagged as "entered in error" candidate.
   - Tier 3 attestation per DL-18 inv 8.
   - Encounter retraction in Domain 5 + commerce adjustment in Domain 6 + Domain 3 lifecycle update (only after upstream substrates compensated).
5. **Divergence / improvement vs Mindbody:** OMNI strict.
6. **Anti-copy warning:** Do NOT allow simple cancel after in_progress/completed.
7. **Substrate pressure-test verdict:** **OK** — multi-substrate compensation chain per DL-16 inv 31.

#### Section B — Rule definition

8. **Trigger:** Cancel attempt on in_progress or completed appointment.
9. **Required inputs:** Per LC-23 dispute flow.
10. **Decision logic:** Route to LC-23 (dispute flag) + cross-domain compensation orchestration_run.
11. **Output / state change:** Per multi-domain compensation chain.
12. **Owning substrate:** Multi-domain.
13. **UI surface:** Staff: explicit warning + Tier 3 attestation modal.
14. **Failure mode:** Standard cancel rejected; routes to dispute.
15. **Audit / event:** `appointment.cancellation_after_inprogress_attempted`.
16. **Evidence citations:** DL-16 inv 31 + DL-18 inv 8 + LC-23.
17. **Test case:** Provider accidentally creates encounter for wrong patient → encounter.status = in_progress. Discovered; dispute flow → Tier 3 attestation → encounter retracted (Domain 5) + appointment.status = cancelled via dispute path.

### Rule LC-14: Cancellation lifecycle event emitted; Domain 6 evaluates cancellation_policy + applies fee/deposit/entitlement disposition (Round 3.1 seam)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody models cancellation fee as $0 pricing option workaround. Per DL-17 inv 24 — rejected; OMNI uses dedicated cancellation_policy substrate.
2. **Cross-app pattern reference:**
   - **Airline change fee** — fee row on PNR adjustment.
   - **Hotel late-cancel charge** — itemized on folio.
3. **Underlying tenant need:** Fee must be itemized + accountable + linked to cancellation event + refundable per tenant policy.
4. **OMNI generic primitive / rule (revised Round 3.1 — Domain 3 ↔ Domain 6 seam):** When LC-12 determines cancel/late_cancel, **Domain 3 emits the lifecycle event ONLY** — does NOT directly charge fees or apply entitlement disposition. Per Round 3.1 seam (index §2.5):
   - Domain 3 emits `appointment.late_cancelled` (or `appointment.honored_cancelled`) with payload `{appointment_id, cancellation_reason_code, lead_time_actual_minutes, lead_time_required_minutes, actor}`.
   - Domain 6 (commerce + entitlement) consumes the event + reads `cancellation_policy` + applies the consequence:
     - Cancellation fee: insert `commerce_order_line` with `line_kind = 'cancellation_fee'` per DL-17 inv 6 + 24; amount per `late_cancel_fee_amount` or percentage; charge route per tenant policy (auto from card_on_file OR account_credit_consume OR invoice).
     - Deposit disposition: per `cancellation_policy.deposit_forfeiture_policy` — retain / convert-to-credit / transfer-to-rescheduled / refund / waive.
     - Entitlement disposition: per entitlement policy — forfeit / preserve / convert-to-credit / apply-as-future-discount / restore-by-staff. The booking-time `entitlement_redemption_pending` row (DL-17 inv 23) resolves per policy.
     - Refund-to-credit option per `cancellation_policy.refund_to_credit_policy`.
   - Domain 6 emits outcome events: `late_cancel_fee.assessed.amount = X` / `deposit.retained_no_show.amount = Y` / `entitlement.forfeited_due_to_late_cancel.entitlement_id = Z` / `account_credit.created.amount = W` etc. Domain 3 listens for outcome events but does NOT directly write commerce/entitlement state.
5. **Divergence / improvement vs Mindbody:** Dedicated substrate per DL-17 inv 24 + explicit Domain 3 ↔ Domain 6 seam (Round 3.1). Mindbody collapses lifecycle + financial consequences into single flow, leading to silent ambiguity (e.g., member late-cancels — is benefit consumed? Mindbody answer varies by configuration without explicit policy).
6. **Anti-copy warning:** Do NOT model fees as $0 pricing option (Mindbody workaround). Do NOT silently waive (staff override audit required). **Do NOT charge fees directly from Domain 3 logic (Round 3.1 binding — that's Domain 6 territory). Do NOT consume/forfeit entitlements from Domain 3 logic (Round 3.1 binding).** Domain 3 ONLY emits lifecycle event with policy-context payload.
7. **Substrate pressure-test verdict:** **OK** — DL-17 inv 6 + 24 + Amendment G (reschedule fee columns) + Round 3.1 seam (event-driven coupling between Domain 3 + Domain 6).

#### Section B — Rule definition

8. **Trigger:** LC-12 late_cancel branch.
9. **Required inputs:** cancellation_policy + appointment.
10. **Decision logic:**
    - Compute fee per policy.
    - Insert `commerce_order_line` with line_kind = cancellation_fee.
    - Apply tenant policy for charge mechanism (auto-charge / account_credit / invoice).
    - Staff override allowed per `cancellation_policy.staff_override_allowed` with reason_code + Tier 2 attestation.
11. **Output / state change:** commerce_order_line inserted; charge action emitted per Domain 6.
12. **Owning substrate:** `commerce_order_line` (DL-17 inv 6) + `cancellation_policy` (DL-17 inv 24).
13. **UI surface:** Patient: cancellation confirmation modal shows fee. Staff: same + override option.
14. **Failure mode:** Charge failure → DLQ + admin alert per DL-16 inv 12.
15. **Audit / event:** `appointment.late_cancel_fee_applied.amount = X`.
16. **Evidence citations:** DL-17 inv 24 + inv 6 + Mindbody Batch 15 Step 06.
17. **Test case:** Sarah late-cancels per LC-12. Policy: $50 fee. commerce_order_line inserted: line_kind = cancellation_fee, amount = $50, linked_appointment_id = X, status = pending. Auto-charge attempted on card_on_file → succeeds. Event emitted.

### Rule LC-15: Resource release on cancellation is atomic; capacity freed for waitlist promotion

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody releases resources on cancel.
2. **Cross-app pattern reference:**
   - **Airline seat release** — cancelled seat available for sale or waitlist promotion.
   - **Hotel room release** — back to availability inventory.
3. **Underlying tenant need:** Cancelled appointment must atomically release: staff slot, room, resource, capacity slot. Available for next booking + waitlist cascade.
4. **OMNI generic primitive / rule:** On LC-12 cancel commit:
   - Release `staff_service_assignment` lock for appointment's planned_window (atomic per DL-15 inv 21).
   - Release room lock + resource lock + capacity slot.
   - Mark appointment_item.item_state = 'cancelled'.
   - Trigger LC-21 waitlist promotion cascade.
5. **Divergence / improvement vs Mindbody:** Same intent; OMNI explicit atomic.
6. **Anti-copy warning:** Do NOT defer resource release (per DL-15 inv 26 strong consistency).
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 21 + 26.

#### Section B — Rule definition

8. **Trigger:** LC-12 cancellation commit.
9. **Required inputs:** Appointment row + resource locks.
10. **Decision logic:** Atomic release per DL-15 inv 2 (multi-resource atomic).
11. **Output / state change:** All resources freed; appointment_item state cancelled.
12. **Owning substrate:** Resource locks per DL-15 inv 21.
13. **UI surface:** Schedule grid: slot becomes available; waitlist cascade kicks off.
14. **Failure mode:** Release failure → admin alert; resources may be stuck (rare; reconciliation per DL-16 inv 39).
15. **Audit / event:** `appointment.resources_released` per LC-12.
16. **Evidence citations:** DL-15 inv 2 + 21 + 26.
17. **Test case:** Sarah cancels Botox 24hr lead time. NP_Klait 2pm Tuesday slot freed. Injector_Room_1 lock released. Capacity slot freed. Waitlist for "Botox NP_Klait Tuesday" cascade triggered (LC-21).

---

## Section F — No-show grace window + recovery

### Rule LC-16: No-show grace window elapsed → transition to no_showed

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Mindbody Batch 15 Step 06 No-Show/Late Cancel Fees + No-show flag in Mindbody appointment lifecycle.
2. **Cross-app pattern reference:**
   - **Airline no-show** — boarding closed; passenger flagged no-show; fare conditions apply.
   - **Restaurant no-show** — table held for grace period, then released; fee for some restaurants.
3. **Underlying tenant need:** Patient who doesn't arrive by (planned_start + grace_window) auto-transitions to no_showed; downstream automation (fee, re-engagement, waitlist) fires.
4. **OMNI generic primitive / rule (revised Round 3.1 — staff-review default ON when financial consequence):** Periodic job (every 5min per tenant config) evaluates:
   - Find appointments with `status = 'scheduled'` AND `NOW() > planned_window_start + tenant.no_show_grace_window_minutes` AND `no_show_confirmed_at IS NULL`.
   - **Default grace window: 15 minutes** (tenant override per-service 5-30min; provider visits 10-15; spa services 10; long appointments 15).
   - **Two-tier transition discipline (Round 3.1 per user/Knox decision):**
     - **Auto-mark operational no-show** (lifecycle state transition): `appointment.status = 'no_showed'; no_show_confirmed_at = NOW()` always proceeds atomically. Lifecycle truth doesn't need staff to confirm "did you not arrive?" — the grace window elapsed.
     - **Auto-charge / auto-forfeit (financial consequences): DEFAULT REQUIRES STAFF REVIEW.** Per Round 3.1 — when no-show triggers `no_show_fee` AND/OR `deposit_retained` AND/OR `entitlement_forfeited`, default policy is staff confirmation BEFORE Domain 6 applies financial consequences. Substrate emits `appointment.no_show_pending_financial_review` event with payload {appointment_id, would_apply: [no_show_fee_amount, deposit_retention, entitlement_forfeiture]}. Staff dashboard shows pending queue.
     - Tenant may explicitly opt INTO automation per service / preset / category via `cancellation_policy.auto_apply_no_show_consequences = TRUE` (default FALSE).
   - Lifecycle is auto; financial consequences are staff-mediated by default.
5. **Divergence / improvement vs Mindbody:** OMNI explicit grace window + staff-review option.
6. **Anti-copy warning:** Do NOT auto-no-show without grace window. Do NOT silently skip fee application.
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 6 (no_show = state transition) + DL-17 inv 24 (no_show_fee).

#### Section B — Rule definition

8. **Trigger:** Periodic job + grace window elapsed.
9. **Required inputs:** appointment.planned_window_start + tenant.no_show_grace_window_minutes.
10. **Decision logic:** As described; optional staff review per tenant policy.
11. **Output / state change:** appointment.status = no_showed; downstream cascades.
12. **Owning substrate:** Periodic job + DL-20 inv 33 appointment.
13. **UI surface:** Staff: alert for no_show_pending_staff_review (if enabled). Auto-transition silent for default config.
14. **Failure mode:** Job failure → retry; if persistent, admin alert.
15. **Audit / event:** `appointment.no_show_confirmed` event.
16. **Evidence citations:** DL-15 inv 6 + DL-17 inv 24 + Mindbody Batch 15 Step 06.
17. **Test case:** Patrick scheduled 2pm Botox. 2:20pm. Grace window 15min elapsed. Periodic job runs at 2:21pm. Patrick still status = scheduled, no_show_confirmed_at = NULL. Auto-transition → status = no_showed; no_show_confirmed_at = 2:21pm. No-show fee applied per LC-17. Re-engagement orchestration_run triggered.

### Rule LC-17: No-show lifecycle event triggers Domain 6 fee/forfeiture evaluation + Domain 4 re-engagement orchestration_run (Round 3.1 seam)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody applies no_show_fee per Batch 15 Step 06.
2. **Cross-app pattern reference:**
   - **Restaurant no-show charge** — credit card fee per OpenTable policy.
3. **Underlying tenant need:** No-show fee + re-engagement (book again, waitlist offer, etc.) per tenant policy.
4. **OMNI generic primitive / rule (revised Round 3.1 — Domain 3 ↔ Domain 6 seam):** On LC-16 no_show transition:
   - **Domain 3 emits** `appointment.no_show_confirmed` with payload `{appointment_id, planned_window_start, no_show_confirmed_at, grace_window_minutes, would_apply_consequences}`.
   - **Domain 6 (commerce + entitlement)** consumes event + reads `cancellation_policy` + applies consequences (per LC-16 staff-review default unless tenant opted into automation):
     - Insert `commerce_order_line` with `line_kind = 'no_show_fee'` per `cancellation_policy.no_show_fee_amount`. Domain 6 emits `no_show_fee.assessed.amount = X`.
     - Deposit retention per `deposit_forfeiture_policy`. Domain 6 emits `deposit.retained_no_show.amount = Y`.
     - Entitlement forfeiture per policy. Domain 6 emits `entitlement.forfeited_due_to_no_show.entitlement_id = Z`.
   - **Domain 4 (confirmation / outbound)** consumes event + triggers re-engagement orchestration_run per DL-14 inv 17 + DL-16 amendment 42 outbound: send patient "We missed you" SMS/email with rebook link.
   - **Domain 3** (this rule's owner) updates `patient.no_show_count` (computed projection) — informs future `booking_hard_gate` evaluation per Domain 2 BC-23-26 (e.g., > 3 no-shows in 6 months triggers deposit-before-booking policy per tenant rule).
5. **Divergence / improvement vs Mindbody:** OMNI explicit cross-domain seam + staff-review default for financial consequences (Round 3.1).
6. **Anti-copy warning:** Do NOT charge fees directly from Domain 3 (Round 3.1 binding). Do NOT auto-rebook without patient consent. Do NOT consume entitlements from Domain 3.
7. **Substrate pressure-test verdict:** **OK** — DL-17 inv 24 + DL-14 inv 17 + DL-16 amendment 42 + Round 3.1 seam (event-driven cross-domain consequences).

#### Section B — Rule definition

8. **Trigger:** LC-16 no_show transition.
9. **Required inputs:** cancellation_policy + appointment.
10. **Decision logic:** Fee insertion + orchestration_run + history update.
11. **Output / state change:** commerce_order_line; orchestration_run; metadata update.
12. **Owning substrate:** Multi-substrate.
13. **UI surface:** Patient: "We missed you" SMS/email. Staff: no_show row in admin queue.
14. **Failure mode:** Per LC-14.
15. **Audit / event:** `appointment.no_show_fee_applied` + `patient.re_engagement_initiated`.
16. **Evidence citations:** DL-17 inv 24 + DL-14 inv 17 + DL-16 amendment 42 + Mindbody.
17. **Test case:** Patrick no-show. Fee $50 charged. SMS "Hey Patrick, we missed you at 2pm! [Rebook here]" sent within 30min. Patrick's no_show_count incremented.

---

## Section G — Reschedule = atomic compensation

### Rule LC-18: Reschedule is an atomic orchestration_run (cancel original + book new) per DL-15 inv 6 + DL-16 inv 31

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Mindbody supports reschedule; mechanism allows edit-in-place which loses original audit trail. Per DL-15 inv 6 — REJECTED in OMNI.
2. **Cross-app pattern reference:**
   - **Airline rebooking** — original ticket voided; new ticket issued; compensation chain linked.
   - **Hotel reservation change** — original record cancelled with change fee; new record created.
3. **Underlying tenant need:** Reschedule must preserve audit lineage (what was original; why changed; new state). Per DL-15 inv 6 — atomic compensation, not silent mutation.
4. **OMNI generic primitive / rule (revised Round 3.1 — chain depth policy threshold):** Reschedule RPC: `appointment.reschedule(appointment_id, new_window, actor, reason_code)`. Logic:
   - Open `orchestration_run` per DL-14 inv 17 with `run_kind = 'appointment_reschedule'`.
   - **Pre-flight chain depth check (per LC-19 + Amendment G):** walk `appointment.linked_rescheduled_from` FK history; count chain depth. If chain_count >= `cancellation_policy.staff_mediation_required_after_n_reschedules` (non-NULL) → reject self-service reschedule + emit `appointment.reschedule_blocked.staff_mediation_required`. Staff with capability per DL-18 inv 8 may override with reason_code.
   - Run member action 1: cancel original appointment per LC-12 with `cancellation_reason_code = 'rescheduled'`. Set `appointment.status = 'rescheduled'` (NOT cancelled — terminal state for original). Per Round 3.1 seam: Domain 6 evaluates reschedule fee per LC-19 + Amendment G.
   - Run member action 2: book new appointment per Domain 2 BC-04 4-axis composer with same patient + service + preset + planned_details + new window. New appointment row created.
   - Atomic linkage: `original_appointment.linked_rescheduled_to_appointment_id = new_appointment.id`; `new_appointment.linked_rescheduled_from_appointment_id = original_appointment.id`.
   - If new booking fails (axis unavailable): roll back; original stays in scheduled state.
   - Emit `appointment.rescheduled` event with both IDs + chain_depth in payload. Domain 6 reads chain_depth for fee evaluation per Amendment G.
5. **Divergence / improvement vs Mindbody:** OMNI atomic compensation chain; original audit preserved.
6. **Anti-copy warning:** Do NOT edit appointment in-place (per DL-15 inv 6). Do NOT mark original as cancelled (terminal `rescheduled` state preserves reschedule semantics distinct from cancellation).
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 6 + DL-14 inv 17 + DL-16 inv 31 + linked_rescheduled_* FK fields on appointment.

#### Section B — Rule definition

8. **Trigger:** Patient or staff initiates reschedule.
9. **Required inputs:** appointment_id, new_window, actor, reason_code.
10. **Decision logic:** As above.
11. **Output / state change:** orchestration_run + 2 appointments (original rescheduled, new scheduled).
12. **Owning substrate:** Multi-substrate via DL-14 inv 17.
13. **UI surface:** Patient: "Reschedule" button → date/time picker → confirm. Staff: same with override capabilities.
14. **Failure mode:** New booking fails → orchestration_run rollback; original preserved.
15. **Audit / event:** `appointment.rescheduled.original_id = X.new_id = Y` per DL-16 amendment 42.
16. **Evidence citations:** DL-15 inv 6 + DL-14 inv 17 + DL-16 inv 31.
17. **Test case:** Sarah books Tuesday 2pm Botox. Calls Monday: "Can I move to Wednesday 3pm?" Staff reschedules: orchestration_run starts. Original cancelled with reason = rescheduled, status = rescheduled. New booking attempted for Wed 3pm via Domain 2 composer; succeeds. Linkage: original.linked_rescheduled_to = new.id; new.linked_rescheduled_from = original.id. Sarah sees confirmation for new appointment + audit trail preserved.

### Rule LC-19: Reschedule fee + chain depth policy per tenant; Amendment G applied — first/nth reschedule fee + staff_mediation_required_after_n_reschedules columns

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody admits reschedule fees; mechanism scattered.
2. **Cross-app pattern reference:**
   - **Airline change fee** — fare-class specific tiers.
   - **Hotel reservation change** — N free changes then fee.
3. **Underlying tenant need:** Most medspas don't charge for first reschedule; some charge after N reschedules; some require staff mediation after threshold rather than per-fee.
4. **OMNI generic primitive / rule (Amendment G applied this round):** `cancellation_policy` (DL-17 inv 24) extends with 4 columns per Amendment G:
   - `first_reschedule_fee_amount` NUMERIC NULL DEFAULT NULL (default NULL = no fee for first reschedule)
   - `nth_reschedule_fee_amount` NUMERIC NULL DEFAULT NULL (fee after threshold)
   - `reschedule_count_threshold` INT NULL DEFAULT NULL (counts entire reschedule chain via `appointment.linked_rescheduled_from` FK history; NULL = no fee threshold)
   - `staff_mediation_required_after_n_reschedules` INT NULL DEFAULT NULL (after N reschedules in chain, self-service reschedule blocked + routes to staff mediation regardless of fee policy; NULL = no hard threshold per user/Knox decision Round 3.1: no global hard cap; tenant-configurable policy threshold for staff mediation)
   
   LC-18 reschedule reads policy at reschedule attempt + applies. Domain 3 emits `appointment.rescheduled` event; Domain 6 applies fee per Round 3.1 seam (LC-14 pattern).
5. **Divergence / improvement vs Mindbody:** Explicit policy fields + Round 3.1 seam discipline (fee charging in Domain 6, not Domain 3).
6. **Anti-copy warning:** Do NOT hard-cap reschedule chain globally (per user/Knox Round 3.1 — tenant policy threshold for staff mediation, not hard block). Do NOT charge silently. Do NOT apply fees from Domain 3 logic (Round 3.1 binding — Domain 6 territory).
7. **Substrate pressure-test verdict:** **OK (Amendment G applied this round)** — DL-17 inv 24 + Amendment G + Round 3.1 seam. No remaining extension needed.

#### Section B — Rule definition

8. **Trigger:** LC-18 reschedule.
9. **Required inputs:** cancellation_policy (with Amendment G fields) + appointment + reschedule_count.
10. **Decision logic:**
    - Lookup reschedule_count for this appointment chain (recursive walk via linked_rescheduled_from FK).
    - Check `staff_mediation_required_after_n_reschedules`: if reschedule_count >= threshold AND non-NULL → reject self-service reschedule + route to staff queue. Staff with capability per DL-18 inv 8 may proceed with reason_code.
    - Check fee policy: if reschedule_count = 1 AND `first_reschedule_fee_amount` populated → apply first fee; elif reschedule_count >= `reschedule_count_threshold` AND `nth_reschedule_fee_amount` populated → apply nth fee; else no fee.
    - **Domain 3 emits `appointment.reschedule_fee_due` event** with payload {appointment_id, fee_amount, reschedule_count}; Domain 6 applies commerce_order_line per Round 3.1 seam (LC-14 pattern).
11. **Output / state change:** Per LC-18 + Domain 6 fee application via event.
12. **Owning substrate:** cancellation_policy extension.
13. **UI surface:** Reschedule modal shows fee preview.
14. **Failure mode:** Per LC-14.
15. **Audit / event:** `appointment.reschedule_fee_applied.amount = X`.
16. **Evidence citations:** DL-17 inv 24 + LC-18.
17. **Test case:** Patrick reschedules 3rd time. tenant policy: nth_reschedule_fee_amount = $25 after 2 reschedules. $25 fee applied. Patrick's 4th reschedule attempt → same fee.

### Rule LC-20: Reschedule preserves source_booking_preset_id + planned_details from original

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody mostly preserves appointment-type on reschedule.
2. **Cross-app pattern reference:**
   - **Airline rebooking** — preserves seat class, special requests.
3. **Underlying tenant need:** Reschedule shouldn't lose patient context (Botox details, preferred product, treatment areas).
4. **OMNI generic primitive / rule:** LC-18 reschedule copies from original to new:
   - source_booking_preset_id (Amendment A)
   - planned_details JSONB (per Domain 1 TM-11)
   - planned_treatment_areas[] (materialized projection per Amendment C will recompute)
   - planned_quantity
   - planned_pricing_option_id
   - planned_provider_id (if patient/staff didn't change)
   - booking_request_note (mutable per DL-20 inv 33)
   - confirmation_state resets to 'unconfirmed' on new appointment (CNS round-trip restarts per Domain 4).
5. **Divergence / improvement vs Mindbody:** Explicit preservation rule.
6. **Anti-copy warning:** Do NOT auto-copy confirmation_state (must restart).
7. **Substrate pressure-test verdict:** **OK** — substrate fields exist; copy logic in LC-18 RPC.

#### Section B — Rule definition

8. **Trigger:** LC-18 reschedule new appointment creation.
9. **Required inputs:** Original appointment row.
10. **Decision logic:** Copy fields per LC-20 list.
11. **Output / state change:** New appointment with preserved context.
12. **Owning substrate:** Per DL-20 inv 33 + inv 34.
13. **UI surface:** Patient sees same booking details on new appointment.
14. **Failure mode:** Copy failure → reschedule rolled back per LC-18.
15. **Audit / event:** Per LC-18.
16. **Evidence citations:** LC-18 + DL-20 inv 33 + inv 34.
17. **Test case:** Sarah reschedules from Tue 2pm to Wed 3pm. Both appointments link to same source_booking_preset = "Botox Touch-Up"; planned_quantity = 24; planned_treatment_areas = ['glabella', 'crows_feet']; same provider (Klait). New appointment.confirmation_state = unconfirmed; Domain 4 sends new confirmation SMS.

---

## Section H — Waitlist promotion cascade

### Rule LC-21: Cancellation triggers waitlist promotion cascade per DL-15 inv 8 + 16

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Mindbody waitlist feature: patients join waitlist for service/provider/window; cancellation triggers waitlist offer (semi-automatic).
2. **Cross-app pattern reference:**
   - **Airline upgrade waitlist** — cancellation cascades to upgrade offer.
   - **Restaurant cancellation list** — cascade to next waiting party.
   - **Hospital cancellation list** — fills cancelled slots from waitlist.
3. **Underlying tenant need:** When a high-demand slot opens, the next eligible waitlist entry should be auto-offered (with TTL); cascade to next if first declines.
4. **OMNI generic primitive / rule (revised Round 3.1 — TTL default 30min not 1hr per user/Knox decision):** On LC-12 cancel commit:
   - Open `orchestration_run` per DL-14 inv 17 with `run_kind = 'waitlist_promotion'`.
   - Query `waitlist_entry` for matching (service_id, provider_id (optional), location_id (optional), time_window includes cancelled appointment's time).
   - Pick first match per waitlist priority (FIFO + tenant overrides for VIP / loyalty tier).
   - Emit `waitlist_offer_sent` action per DL-15 inv 8 — outbound SMS/email with offer + TTL.
   - **TTL is tenant policy, NOT hardcoded** (per Round 3.1 user/Knox decision):
     - **Default: 30 minutes**
     - Tenant-configurable per service / preset / category
     - Suggested preset values: 10 / 15 / 30 / 45 / 60 minutes
     - **Per-context defaults:**
       - Future appointment openings (>= 24hr out): default 30 minutes
       - Same-day openings (< 24hr out): default 15 minutes
       - High-demand / short-notice services (< 4hr out): default 10-15 minutes
     - Staff can manually extend or skip per entry per DL-18 capability.
     - Substrate enforces tenant bound (5min ≤ TTL ≤ 4hr); out-of-bounds requires DL-18 inv 8 attestation.
   - If patient accepts within TTL → trigger Domain 2 booking flow with held slot.
   - If declines OR TTL expires → cascade to next entry per LC-22.
5. **Divergence / improvement vs Mindbody:** OMNI explicit orchestration_run + tenant-controlled TTL policy + context-aware defaults. Mindbody's TTL is fixed/opaque.
6. **Anti-copy warning:** Do NOT hardcode universal TTL (per Round 3.1 — tenant/service/preset policy). Do NOT auto-book without patient acceptance (offer is OFFER not COMMIT). Do NOT bypass TTL on staff override without explicit reason_code + audit.
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 8 + DL-14 inv 17 + tenant settings substrate per DL-19 inv 1.

#### Section B — Rule definition

8. **Trigger:** LC-12 cancel commit.
9. **Required inputs:** Cancelled appointment context + matching waitlist entries.
10. **Decision logic:**
    - Query matching waitlist entries.
    - Order by priority.
    - Offer to first; TTL active.
    - On accept/decline/expire, cascade.
11. **Output / state change:** orchestration_run + waitlist_offer_sent action + (eventual) new booking.
12. **Owning substrate:** waitlist_entry (DL-15 inv 8) + orchestration_run.
13. **UI surface:** Patient: SMS "A spot opened up for Botox Tuesday 2pm! Reply YES to claim (offer expires in 1hr)." Staff: waitlist cascade visible in admin queue.
14. **Failure mode:** No matching entries → cascade ends; cancelled slot becomes ordinary availability per BC-04.
15. **Audit / event:** `waitlist_offer_sent.entry_id = X.appointment_id = Y` per DL-15 inv 8 + DL-16 amendment 42.
16. **Evidence citations:** DL-15 inv 8 + DL-14 inv 17 + Mindbody waitlist.
17. **Test case:** Maria on waitlist for "Tuesday 2pm Botox NP_Klait." Sarah cancels Tuesday 2pm Botox NP_Klait. orchestration_run = waitlist_promotion. SMS sent to Maria: "Spot opened for Botox 2pm Tuesday with NP Klait. Reply YES within 1hr." Maria replies YES at 45min. Booking flow triggered with held slot → Domain 2 commits new appointment for Maria; original cancelled appointment stays in audit chain.

### Rule LC-22: Waitlist offer TTL expiry cascades to next entry

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody waitlist cascade behavior unclear.
2. **Cross-app pattern reference:**
   - **Airline upgrade cascade** — next on list.
3. **Underlying tenant need:** If first waitlist patient doesn't respond, slot must cascade to next, not get stuck.
4. **OMNI generic primitive / rule (revised Round 3.1 — 30min default per LC-21):** Per LC-21 orchestration_run: TTL on outbound offer (default 30 min per LC-21 revised default; per-context defaults vary). Periodic job checks pending offers:
   - If patient accepted → close run, book new appointment.
   - If patient declined → cascade to next entry immediately.
   - If TTL expired without response → cascade to next entry.
   - If no more eligible entries → close run; slot reverts to normal availability.
5. **Divergence / improvement vs Mindbody:** Explicit TTL cascade.
6. **Anti-copy warning:** Do NOT lose slot to TTL silently.
7. **Substrate pressure-test verdict:** **OK** — orchestration_run + TTL handling per DL-14 inv 16.

#### Section B — Rule definition

8. **Trigger:** Outbound offer + TTL evaluation.
9. **Required inputs:** Offer state + TTL.
10. **Decision logic:** Cascade per LC-22 above.
11. **Output / state change:** Next offer OR run closure.
12. **Owning substrate:** orchestration_run.
13. **UI surface:** Admin: waitlist cascade visualization.
14. **Failure mode:** Per orchestration retry logic.
15. **Audit / event:** `waitlist_offer_expired.entry_id = X` / `waitlist_promotion_cascaded.from = X.to = Y`.
16. **Evidence citations:** LC-21 + DL-14 inv 16.
17. **Test case:** Maria didn't respond within 1hr to waitlist offer. Cascade → next entry: Patrick. Patrick gets SMS, accepts within 30min. Booking commits for Patrick.

---

## Section I — Dispute + post-retention archival

### Rule LC-23: Dispute flag is admin-flagged for review; routes to multi-domain compensation

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody admits "Adjustment" / "Correction" workflows; mechanism uneven.
2. **Cross-app pattern reference:**
   - **Banking dispute flow** — flagged transaction; investigation; resolution.
   - **FHIR "entered-in-error"** — explicit error path.
3. **Underlying tenant need:** Some appointments need post-hoc review (wrong patient, billing error, encounter created incorrectly). Dispute flag captures admin attention without ad-hoc state changes.
4. **OMNI generic primitive / rule:** Dispute RPC: `appointment.flag_dispute(appointment_id, dispute_reason_code, actor, attestation_id)`. Sets `appointment.status = 'disputed'` + `disputed_at = NOW()` + `dispute_reason_code`. Tier 3 attestation per DL-18 inv 8 (audit-grade).
   - Dispute can be flagged from any non-archived state.
   - Resolution routes to multi-domain compensation: cancel commerce_order_lines per Domain 6, retract encounter per Domain 5, etc. Requires Tier 3+ attestation per change.
5. **Divergence / improvement vs Mindbody:** Explicit dispute substrate + multi-domain compensation.
6. **Anti-copy warning:** Do NOT use dispute for routine cancellation.
7. **Substrate pressure-test verdict:** **OK** — DL-16 inv 31 compensation + DL-18 inv 8 attestation.

#### Section B — Rule definition

8. **Trigger:** Admin dispute flag.
9. **Required inputs:** appointment_id, dispute_reason_code, attestation.
10. **Decision logic:** Set disputed state + admin queue.
11. **Output / state change:** appointment.status = disputed.
12. **Owning substrate:** appointment + multi-domain compensation orchestration_run.
13. **UI surface:** Admin: dispute queue + resolution workflow.
14. **Failure mode:** Per attestation requirements.
15. **Audit / event:** `appointment.disputed.reason = X`.
16. **Evidence citations:** DL-16 inv 31 + DL-18 inv 8.
17. **Test case:** Provider opens encounter for wrong patient (Sarah's chart, Patrick was actually scheduled). Admin flags Sarah's appointment as disputed (reason: wrong_patient_charted). Multi-domain compensation: encounter retracted (Domain 5), commerce adjusted (Domain 6), appointment status corrected.

### Rule LC-24: Post-retention archival per DL-16 inv 13 retention class

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody archives old appointments; mechanism varies.
2. **Cross-app pattern reference:**
   - **HIPAA 6-year retention** — clinical records minimum.
   - **GDPR right to erasure (post-retention)** — pseudonymization per DL-16 inv 22.
3. **Underlying tenant need:** Old completed/cancelled/no_showed/rescheduled appointments must transition to archived per retention policy.
4. **OMNI generic primitive / rule:** Periodic job (daily) evaluates terminal-state appointments. If `(completed_at OR cancelled_at OR no_show_confirmed_at OR rescheduled_at) + retention_class_minimum_years < NOW()`: transition `appointment.status = 'archived'; archived_at = NOW()`. Per DL-16 inv 13 + DL-21 inv 21 jurisdiction-aware retention.
5. **Divergence / improvement vs Mindbody:** Explicit retention class + jurisdiction-aware.
6. **Anti-copy warning:** Do NOT physically delete (per DL-16 inv 22 — pseudonymization, not deletion).
7. **Substrate pressure-test verdict:** **OK** — DL-16 inv 13 + DL-21 inv 21.

#### Section B — Rule definition

8. **Trigger:** Periodic archival job.
9. **Required inputs:** Terminal-state appointments + retention policy.
10. **Decision logic:** Transition per retention; preserve in archived state (queryable for audit but excluded from operational views).
11. **Output / state change:** appointment.status = archived.
12. **Owning substrate:** appointment + retention policy.
13. **UI surface:** Operational schedule views exclude archived; admin "show archived" toggle.
14. **Failure mode:** Job retry per DL-16 inv 12 DLQ.
15. **Audit / event:** `appointment.archived` per DL-16 amendment 42.
16. **Evidence citations:** DL-16 inv 13 + DL-21 inv 21 + DL-16 inv 22.
17. **Test case:** Sarah's Botox completed 2026-05-17. Retention class clinical = 7 years (HIPAA + state minimum). 2033-05-17: archival job runs. appointment.status = archived. Schedule grid no longer shows; admin search admits archived view.

---

## §3 Deferred Rule Candidates (M1-2 / M3-6 / FUTURE)

### M1-2 Candidates

- **LC-DEF-M1-2-1: Bulk-cancel admin RPC** — staff bulk-cancel multiple appointments (clinic closure, instructor cancellation). status_flags |= Bulk_reschedule_pending.
- **LC-DEF-M1-2-2: Reschedule fee policy UI affordance** — admin editor for LC-19 fields.
- **LC-DEF-M1-2-3: Late-cancel grace period (cancel within X minutes of booking)** — for accidental clicks.
- **LC-DEF-M1-2-4: Patient self-service reschedule limits** — N reschedules without staff approval.
- **LC-DEF-M1-2-5: No-show pattern detection + auto-deposit-require** — per-patient threshold for deposit-before-booking.

### M3-6 Candidates

- **LC-DEF-M3-6-1: Predictive no-show scoring** — ML model for high-risk no-show flagging.
- **LC-DEF-M3-6-2: Smart waitlist matching** — score waitlist entries by historical commitment.
- **LC-DEF-M3-6-3: Coverage provider auto-route** — provider absence triggers auto-route to coverage pool (cross-link Domain 2 BC-10 hybrid mode).
- **LC-DEF-M3-6-4: Calendar sync archival** — sync archived appointments to external calendar (Google/Outlook).

### FUTURE Candidates

- **LC-DEF-FUTURE-1: AI-suggested optimal reschedule slots** — based on patient history + provider availability optimization.
- **LC-DEF-FUTURE-2: Provider performance metrics affecting routing** — conversion rate, no-show rate, etc.
- **LC-DEF-FUTURE-3: Cross-tenant federation appointment portability** — Mode 4+ federation per FUTURE_ARC.

---

## §4 Substrate gap audit

| Rule | Verdict | Notes |
|---|---|---|
| LC-01 | OK | DL-15 inv 5 + amendment 8 |
| LC-02 | OK | Transition matrix per doctrine |
| LC-03 | OK | DL-16 inv 38 audit |
| LC-04 | OK | DL-15 amendment 29 + Round 2.6 Guardrail #1 mapping |
| LC-05 | OK | DL-16 amendment 42 |
| LC-06 | OK | UI projection discipline |
| LC-07 | OK | DL-16 inv 5 + 9 + 29 registry |
| LC-08 | OK | DL-20 inv 33 + amendment 29 |
| LC-09 | OK | Derived projection |
| LC-10 | OK | DL-20 inv 33 fulfillment_encounter_id + Round 2.6 Guardrail #2 |
| LC-11 | OK | DL-20 inv 11 + inv 15 + Round 2.6 |
| LC-12 | OK | DL-15 inv 6 + 7 + DL-17 inv 24 |
| LC-13 | OK | DL-16 inv 31 compensation + DL-18 inv 8 attestation |
| LC-14 | OK | DL-17 inv 6 + 24 |
| LC-15 | OK | DL-15 inv 2 + 21 + 26 |
| LC-16 | OK | DL-15 inv 6 + DL-17 inv 24 |
| LC-17 | OK | DL-17 inv 24 + DL-14 inv 17 + DL-16 amendment 42 |
| LC-18 | OK | DL-15 inv 6 + DL-14 inv 17 + DL-16 inv 31 |
| LC-19 | OK (Amendment G applied Round 3.1) | DL-17 inv 24 extended with `first_reschedule_fee_amount` + `nth_reschedule_fee_amount` + `reschedule_count_threshold` + `staff_mediation_required_after_n_reschedules` columns per Phase 1 hardening v6 commit. Domain 3 emits event; Domain 6 applies fee per Round 3.1 seam (§8). |
| LC-20 | OK | DL-20 inv 33 + inv 34 |
| LC-21 | OK | DL-15 inv 8 + DL-14 inv 17 |
| LC-22 | OK | LC-21 + DL-14 inv 16 |
| LC-23 | OK | DL-16 inv 31 + DL-18 inv 8 |
| LC-24 | OK | DL-16 inv 13 + DL-21 inv 21 + DL-16 inv 22 |

### Substrate gap audit summary (post Round 3.1)

- **Total Day 0 rules:** 24
- **OK:** **24 rules** (Amendment G applied; LC-19 resolved; Round 3.1 cross-domain seam locked)
- **OK with extension:** 0 rules
- **NEW SUBSTRATE NEEDED:** 0 rules

### Round 3.1 patches applied (Phase 1 hardening v6)

**Amendment G** (DL-17 inv 24 extension):
- `first_reschedule_fee_amount` NUMERIC NULL DEFAULT NULL
- `nth_reschedule_fee_amount` NUMERIC NULL DEFAULT NULL
- `reschedule_count_threshold` INT NULL DEFAULT NULL
- `staff_mediation_required_after_n_reschedules` INT NULL DEFAULT NULL (per user/Knox decision Round 3.1: no global hard cap; tenant-configurable threshold for staff mediation)

**Round 3.1 doctrine additions (NOT new substrate; cross-cutting discipline locks):**
- §2.4 Same-service ≠ different-service for entitlement context (anti-pattern)
- §2.5 Domain 3 ↔ Domain 6 seam (lifecycle event → commerce consequence)
- §2.6 Financial eligibility gate family extension to Amendment D requirement_kind ENUM (`payment_method_active` / `membership_current` / `entitlement_available` / `account_hold_clear`)

**Domain 3 rule patches:**
- LC-14: Domain 3 emits `appointment.late_cancelled` event; Domain 6 applies fee + deposit + entitlement disposition (NOT Domain 3)
- LC-16: 2-tier transition discipline — auto-mark lifecycle no-show OK; financial consequences DEFAULT STAFF-REVIEW (tenant opt-in for automation)
- LC-17: Domain 6 owns fee/forfeiture; Domain 3 emits event
- LC-18: chain depth policy threshold (no hard cap; tenant-configurable per Round 3.1)
- LC-19: Amendment G applied + Round 3.1 seam
- LC-21: TTL default 30min (revised from 1hr); tenant-configurable with preset values + per-context defaults (future 30 / same-day 15 / high-demand 10-15)
- LC-22: TTL default updated to 30min per LC-21

**Domain 3 §8 added:** Domain 3 ↔ Domain 6 seam section with 4-stage validation pattern + entitlement reservation lifecycle + same-service doctrine cross-link + future-booking-restrictions-derived-from-history pattern.

---

## §5 Resolution map

| Doctrine question | Resolving rules |
|---|---|
| Q1. 13 lifecycle states + legal transitions | LC-01, LC-02 |
| Q2. Illegal transitions handled | LC-03 |
| Q3. status_flags as projection without canonical truth | LC-04, LC-05, LC-06, LC-07 |
| Q4. Flag setter authority per owning domain | LC-04 mapping table |
| Q5. Check-in composes status_flags + encounter | LC-08, LC-09, LC-10 (separation) |
| Q6. in_progress → completed composition with encounter | LC-10, LC-11 (Round 2.6 Guardrail #2) |
| Q7. Cancellation lead-time + fee + refund | LC-12, LC-13, LC-14, LC-15 |
| Q8. No-show detection + handling | LC-16, LC-17 |
| Q9. Reschedule atomic compensation | LC-18, LC-19, LC-20 |
| Q10. Waitlist promotion cascade | LC-21, LC-22 |
| Q11. Dispute flag | LC-23 |
| Q12. Archival | LC-24 |

All 12 questions answered by 2+ rules. Doctrine holds.

---

## §6 Report

### Rule count
- **Day 0 rules fully detailed:** 24 (target was 18-25; landed mid-range)
- **Deferred Rule Candidates:** 12 across M1-2 / M3-6 / FUTURE

### Evidence sources used

**Mindbody (HARD EVIDENCE):**
- Batch 5 row 60 (13 state badges in appointments grid + status indicators)
- Batch 15 Step 06 (No-Show/Late Cancel Fees settings)
- Layer 2 Section B.1 (state enumeration)
- Mindbody waitlist substrate behavior

**Cross-app pattern references:**
- Airline reservation lifecycle (booking → check-in → board → fly → terminal states; cancellation; rebooking)
- Restaurant reservation (OpenTable seating + cancel)
- Hospital Epic appointment lifecycle (proposed → arrived → in-progress → fulfilled; entered-in-error)
- FHIR Appointment.status precedent
- FSM theory (explicit transitions + illegal handling)
- Database materialized view discipline
- Salesforce field history tracking
- PostgreSQL trigger-based denormalization
- Banking dispute flow
- HIPAA 6-year retention
- GDPR pseudonymization per DL-16 inv 22

**Doctrine refs:**
- DL-15 inv 5 (13-state lifecycle) + inv 6 (compensation discipline) + inv 7 (cancellation policy) + inv 8 (waitlist) + inv 11 (live-state revalidation) + inv 16 (orchestration_runs) + amendments 8 (state rename) + 29 (status_flags BITMASK)
- DL-16 amendment 42 (outbound event registry) + amendment 43 (actor 4-tuple) + inv 6 (atomic state mutation) + inv 12 (DLQ) + inv 13 (retention class) + inv 22 (pseudonymization) + inv 31 (compensation) + inv 38 (tamper-evident audit) + inv 39 (reconciliation)
- DL-17 inv 6 (commerce_order_line) + inv 24 (cancellation_policy substrate)
- DL-18 inv 8 (attestation tiers) + inv 9 (attestation envelope)
- DL-20 inv 11 (encounter lifecycle) + inv 15 (closeout atomicity) + inv 33 (appointment substrate) + amendment 8 (state rename cascade)
- DL-21 inv 21 (jurisdiction-aware retention)
- DL-14 inv 16 (orchestration_action lifecycle) + inv 17 (orchestration_run multi-step)
- **Round 2.6 binding guardrails #1 + #2** (status_flags projection discipline; lifecycle ≠ encounter creation)

### Missing evidence

Minor: M1-2 dynamic no-show pattern detection for auto-deposit-require could benefit from explicit Mindbody evidence (none surfaced in batches reviewed); deferred to M3-6 ML scoring.

### Open decisions (require user + Knox signoff before Round 4)

1. **Amendment G (LC-19)** — `cancellation_policy` extension for reschedule fee columns. **Opus recommendation: APPLY** before Round 4. Small column addition; supports tenant flexibility.

2. **No-show grace window default** — Default 15min; bounded 5-30min. **Recommendation: 15min default.**

3. **Waitlist offer TTL default** — Default 1hr. **Recommendation: 1hr; tenant override 15min-4hr.**

4. **Staff-review-before-auto-no-show toggle** — Default OFF (auto-transition); some tenants want staff confirmation. **Recommendation: tenant per-service config.**

5. **Reschedule chain depth limit** — Patient may keep rescheduling indefinitely; tenant may want cap (e.g., 5 reschedules). **Recommendation: tenant-configurable; default no cap.**

### Whether lifecycle doctrine held up

**YES.** 24 rules covered all 12 doctrine questions cleanly. Round 2.6 guardrails (status_flags = derived; lifecycle ≠ encounter creation) held under pressure-test — Section B (LC-04 to LC-07) explicitly enforces flag projection discipline; Section D (LC-10 to LC-11) preserves lifecycle ↔ encounter separation via FK reference only. Reschedule = atomic compensation per DL-15 inv 6 + DL-16 inv 31 held. No-show recovery + waitlist promotion via orchestration_run held.

The substrate is in good shape for Round 3 outputs. Only 1 small extension surfaced (Amendment G — cancellation_policy reschedule columns).

### Substrate gap audit summary
- 24 total rules
- 23 OK / 1 OK-with-extension (Amendment G candidate)
- 0 NEW SUBSTRATE NEEDED

**Recommendation:** Apply Amendment G before Round 4 OR defer until reschedule fee feature is actually needed (low priority).

---

## §7 What this file is NOT

- NOT new locked doctrine. Amendments live in DL DRAFTs.
- NOT code. Substrate slice scoping after all domains.
- NOT migrations.
- NOT a complete rule matrix — Domains 4-7 still need authoring.
- NOT swallowing encounter creation (Round 2.6 Guardrail #2 honored).
- NOT canonical truth for non-owned flags (Round 2.6 Guardrail #1 honored).
- NOT directly charging fees / forfeiting entitlements / retaining deposits / computing account holds (Round 3.1 seam — Domain 6 territory).

## §8 Domain 3 ↔ Domain 6 seam (Round 3.1 binding)

Per Knox/chat 2026-05-17 + user direction post Round 3 review. Locked before Domain 6 authoring starts.

### §8.1 The seam pattern

Appointment lifecycle (Domain 3) and commerce + entitlement (Domain 6) are **separate state machines coupled via events + policy**:

```
Domain 3 (this file)                      Domain 6 (deferred)
─────────────────                         ─────────────────
emits lifecycle event       →             consumes event +
                                          reads cancellation_policy +
                                          reads entitlement policy +
                                          applies consequence +
                                          emits outcome event
                            ←             outcome event consumed by
                                          downstream listeners (Domain 4
                                          re-engagement, Domain 3
                                          status_flags projection per
                                          Round 2.6 Guardrail #1)
```

Domain 3 NEVER directly:
- Charges fees (commerce action — Domain 6)
- Retains deposits (commerce action — Domain 6)
- Forfeits / restores entitlements (entitlement action — Domain 6)
- Computes account holds (commerce state — Domain 6)
- Sets `Deposit_paid` / `Card_on_file` status_flags directly (Round 2.6 Guardrail #1 — those are commerce projections)

### §8.2 Domain 3 lifecycle events that drive Domain 6 consequences

| Domain 3 event | Payload | Domain 6 consumes for |
|---|---|---|
| `appointment.scheduled_committed` | appointment_id, patient_id, planned_window, source_booking_preset_id | Reserve entitlement (`entitlement_redemption_pending` per DL-17 inv 23); deposit collection per `service_policy_eligibility_gate(deposit, booking_hard_gate)` |
| `appointment.checked_in` | appointment_id, checked_in_at, actor | Validate membership_current + entitlement_available (4-stage validation §8.3); revalidate before allowing benefit redemption |
| `appointment.completed` | appointment_id, completed_at, encounter_id | **Finalize entitlement redemption** (consume reserved benefit); close commerce_order; apply final fee + commission |
| `appointment.honored_cancelled` | appointment_id, lead_time_actual, lead_time_required, reason_code | Release entitlement reservation (NOT consume); refund deposit per policy; no fee |
| `appointment.late_cancelled` | appointment_id, lead_time_actual, lead_time_required, reason_code | Apply `late_cancel_fee` per DL-17 inv 24; deposit disposition per `deposit_forfeiture_policy` (retain / convert-to-credit / refund); entitlement disposition per policy (forfeit / preserve / convert-to-credit) |
| `appointment.no_show_confirmed` | appointment_id, planned_window, grace_window, would_apply_consequences | (Per LC-16 staff-review default) staff confirms → Domain 6 applies `no_show_fee` + deposit retention + entitlement forfeiture. If tenant opted into automation, Domain 6 auto-applies. |
| `appointment.rescheduled` | original_appointment_id, new_appointment_id, chain_depth | Apply reschedule_fee per LC-19 + Amendment G; transfer deposit to new appointment per policy; preserve entitlement reservation on new appointment |
| `appointment.reschedule_blocked.staff_mediation_required` | appointment_id, chain_depth, threshold | Staff queue notification; no commerce consequence until staff resolves |
| `appointment.disputed` | appointment_id, dispute_reason_code, attestation_id | Pause/reverse commerce; multi-domain compensation chain per DL-16 inv 31 |

### §8.3 4-stage financial validation pattern (per Round 3.1 chat framing)

Per user/Knox June Hydrafacial example, OMNI revalidates financial state at FOUR stages (mapped to 5-timing gate model from Round 1.7 TM-12):

| Stage | Gate timing equivalent | What's validated | What happens if invalid |
|---|---|---|---|
| **At booking** | `booking_hard_gate` (block) OR `booking_visibility` (filter from menu) | License + jurisdiction + age + intake-first + (per service) membership_current + payment_method_active | Block booking with redirect ("Update card to book") OR allow booking but flag pre-arrival task |
| **Before arrival** | `pre_arrival_task` | Membership_current status (if not blocked at booking) + payment_method_active + outstanding balance | Pre-arrival SMS/task: "Your membership payment appears unresolved. Please update before your visit." Booking remains active. |
| **At check-in / pre-performance** | `pre_performance_gate` | Membership_current + entitlement_available + account_hold_clear | Block treatment (encounter_line creation in Domain 5) until front desk resolves. Patient appointment + arrival preserved. |
| **At checkout / closeout** | `closeout_documentation_gate` | **Revalidate everything before allowing benefit redemption.** Did the period charge settle? Is benefit still active? Already redeemed elsewhere? Account hold? | Front desk CANNOT close visit as member benefit. Must resolve: collect self-pay / update card + collect membership / approved discount-credit / manager override / comp with attestation. |

This addresses the explicit Mindbody anti-pattern: front desk services Hydrafacial on the 20th + lets patient walk out as member benefit without confirming the June 1st charge actually settled. OMNI's closeout gate forces resolution.

### §8.4 Entitlement reservation lifecycle (Round 3.1 cross-DL pattern with DL-17 inv 22-23)

```
Booking commit  →  entitlement_redemption_pending row inserted
                   (entitlement.status remains active_redeemable;
                    one redemption "reserved" but not consumed)

Completed visit →  entitlement_redemption finalized;
                   entitlement.redemptions_used incremented;
                   if exhausted → entitlement.status = fully_redeemed

Late-cancel / no-show → Domain 6 evaluates entitlement policy:
                        - forfeit_benefit: consume redemption despite no service
                        - preserve_benefit: release reservation; not consumed
                        - convert_to_account_credit: forfeit + credit dollar value
                        - apply_as_discount_next: forfeit + flag for next-visit discount

Staff override / restore → manual restoration with Tier 2 attestation +
                           audit; reverses prior forfeiture
```

### §8.5 Same-service doctrine cross-link (Round 3.1 binding)

Per index §2.4 — A BH HydraFacial is a BH HydraFacial regardless of who books it. Service substrate is operational kind; payment route resolves in commerce + entitlement. Domain 3 lifecycle rules are payment-agnostic: a Hydrafacial late-cancelled by a member fires the SAME `appointment.late_cancelled` event as a Hydrafacial late-cancelled by a non-member. Domain 6 decides whether the consequence is "consume member's June benefit" or "charge $50 late-cancel fee to self-pay" — that resolution happens in commerce, NOT in Domain 3's lifecycle event.

This is the binding rule: SAME SERVICE → DIFFERENT FINANCIAL RESOLUTION. Never duplicate the treatment menu to represent payment context.

### §8.6 Future booking restrictions derived from history (Round 3.1)

Patient-level scheduling restrictions can be DERIVED (not canonical truth) by Domain 6:

- `> 3 no-shows in 6 months` → derived patient_metadata flag → Domain 2 `booking_hard_gate(deposit_required)` fires for this patient on next booking attempt
- `Outstanding balance > threshold` → derived → `booking_hard_gate(account_hold_clear)`
- `Active membership lapsed > 30 days` → derived → membership benefits unavailable; self-pay route
- `Pattern of late-cancels > N` → derived → tenant policy may impose card_on_file requirement

These are computed in Domain 6 + projected to Domain 2 booking_hard_gate evaluation per Amendment D requirement_kind. Domain 3 emits the LIFECYCLE EVENTS that feed the computation but does NOT compute or own the restriction.

---

Round 3 + Round 3.1 end here. Push commits to origin/main. Stop and report.
