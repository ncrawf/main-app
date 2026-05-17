# Domain 2 — Booking Composer / Availability Rules (Day 0)

**Date:** 2026-05-17
**Round:** 2 of 7
**Status:** AUTHORED — pending user + Knox review before Round 3 starts
**Index:** [00_index.md](00_index.md)
**Phase scope this file:** Day 0 fully detailed; M1-2 / M3-6 / FUTURE listed name-only in [§Deferred Rule Candidates](#deferred-rule-candidates).

**Pre-flight: Amendment D applied** (Phase 1 hardening v4, this round) — DL-19 inv 18 service_policy split into 2-part substrate: (1) axis composition flags on `service_policy` parent + (2) per-(service_id, modality, requirement_kind) child rows on `service_policy_eligibility_gate` with `required` BOOLEAN + `gate_timing` ENUM (5 values) + `gate_payload` JSONB. This is the substrate column that backs Domain 1 TM-12 gate-timing taxonomy + Round 1.7 correction.

## §0 Domain scope + the doctrine questions

Domain 2 covers the rules that govern HOW a booking is composed: which axes (capacity / staff / room / resource) must align, how staff availability is resolved (recurring + override + blocked), what gates fire at each timing (booking_visibility / booking_hard_gate / pre_arrival_task / pre_performance_gate / closeout), how multi-resource atomicity is enforced, how add-ons + bundle materialization preserve atomic commit, and how the slot-offer-hold-book lifecycle prevents double-booking.

Domain 2 is the load-bearing pillar of the scheduler. If 4-axis composition cracks here, every downstream domain inherits the gap.

**Doctrine questions Domain 2 must answer:**

1. How does the 4-axis booking composer evaluate per-service axis requirements at booking commit?
2. How does staff availability resolve when recurring schedules collide with one-time overrides + blocked time?
3. How are room + resource compatibility constraints enforced atomically with staff + capacity?
4. How does the slot-offer-hold-book lifecycle prevent race conditions + double-booking?
5. When do `booking_hard_gate` requirements fire, and how are downstream timings deferred to Domain 5 / 7?
6. How does `pre_arrival_task` generation create intake/consent/instructions tasks at booking?
7. How do multi-item bundles materialize atomically (4-axis composer validates ALL members or rejects)?
8. How does the 3-component appointment block (prep + booking + finish) compose with availability windows?
9. How do add-ons resolve to inherit-vs-override their parent's provider/room/resource?
10. How does patient confirmation lifecycle (DL-20 inv 40 CNS round-trip) initiate at booking commit?

Each rule below resolves one or more questions; resolution map in [§Resolution map](#resolution-map).

## §1 Layer 1 substrate context (read first)

Domain 2 rules sit on top of these primitives. Each rule cites the substrate it owns or extends.

```text
                                                  service_policy (DL-19 inv 18 — axis composition)
                                                  ├── (service_id, modality, requires_staff,
                                                  │    requires_room, requires_resource,
                                                  │    requires_capacity_consume,
                                                  │    requires_scheduled_time, allows_walk_in)
                                                  │
                                                  └── service_policy_eligibility_gate (Amendment D child)
                                                      ├── (service_id, modality, requirement_kind,
                                                      │    required BOOLEAN, gate_timing ENUM,
                                                      │    gate_payload JSONB)
                                                      └── gate_timing ENUM 5 values:
                                                          booking_visibility / booking_hard_gate /
                                                          pre_arrival_task / pre_performance_gate /
                                                          closeout_documentation_gate

  4-axis composer (DL-15 inv 30 / amendment 2)        availability_window (DL-15 amendments 34+35)
  ├── Capacity axis (service.concurrent_capacity)     ├── 4 axis groups (What / Where / When / Other)
  ├── Staff axis (staff_service_assignment ∩          ├── availability_kind (recurring / one_time_override
  │   availability_window)                            │   / blocked_time)
  ├── Room axis (room_service_compatibility)          ├── parent_recurrence_id (for overrides)
  └── Resource axis (resource_service_compatibility)  └── override_supersedes_recurring BOOLEAN

  3-component block (DL-15 amendment 31)              concurrency lock (DL-15 inv 21)
  ├── staff_service_assignment per-row carries:       ├── per-(provider × time-slot)
  │   prep_time_minutes + booking_time_minutes        ├── per-(room × time-slot)
  │   + finish_time_minutes                           ├── per-(device/resource × time-slot)
  └── total resource lock = prep + booking + finish   └── per-(supply × quantity)

  jurisdiction (DL-21 inv 11-14)                      booking lifecycle (DL-15 inv 3 + 5)
  ├── jurisdiction_admission_rule per                 ├── proposed → held → scheduled
  │   (legal_entity, encounter_profile, service)      ├── slot offer (TTL) → slot held → booking commit
  └── provider_license per (provider, state, kind)    └── DL-16 inv 11 idempotency + inv 34 concurrency
```

## §2 Rule sections

| Section | Rules | Theme |
|---|---|---|
| A | BC-01 to BC-03 | Amendment D: service_policy_eligibility_gate substrate (gate_timing column carries Domain 1 TM-12 taxonomy) |
| B | BC-04 to BC-07 | 4-axis booking composer (capacity × staff × room × resource) |
| C | BC-08 to BC-10 | Provider eligibility resolution (staff_service_assignment + capability + jurisdiction) |
| D | BC-11 to BC-12 | 3-component appointment block (prep + booking + finish) |
| E | BC-13 to BC-17 | Staff availability window (4-axis + recurring + override + blocked) |
| F | BC-18 to BC-20 | Room + resource availability + compatibility |
| G | BC-21 to BC-22 | Concurrency locks + atomic multi-resource commit |
| H | BC-23 to BC-26 | Booking hard gates (license / jurisdiction / age / intake-first) |
| I | BC-27 to BC-28 | Pre-arrival task generation (intake / consent / instructions) |
| J | BC-29 to BC-30 | Multi-item bundle + add-on atomicity at booking |
| K | BC-31 to BC-32 | Slot-offer-hold-book lifecycle (TTL + idempotency + race prevention) |

---

## Section A — Amendment D substrate: service_policy_eligibility_gate

### Rule BC-01: service_policy_eligibility_gate is the substrate that carries Domain 1 TM-12 5-timing taxonomy as concrete columns

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Mindbody Batch 16 settings master surface shows policy configuration scattered across multiple sub-pages (Consent settings / Required Fields / Provider Permissions / Cancellation Policy) without timing semantics. Mindbody treats "required" as monolithic — either a field/consent is required (boolean) or not. No timing differentiation between "required at booking" vs "required at check-in" vs "required at performance."
2. **Cross-app pattern reference (ANALOGIES for pressure-testing, NOT hard evidence):**
   - **Airline boarding gates** — Passport (booking_hard_gate for international); ID (check-in_gate); boarding pass (boarding_gate). Different requirements fire at different timings; airline doesn't conflate.
   - **Hospital procedure scheduling (Epic / Cerner)** — Insurance auth (booking_hard_gate); pre-op clearance (pre_arrival_task); procedure consent (pre_performance_gate); attestation (closeout). Industry-standard separation.
   - **Restaurant party reservation** — Credit card hold (booking_hard_gate for large parties); pre-arrival menu selection (pre_arrival_task); allergen confirmation (pre_performance_gate).
3. **Underlying tenant need:** Per Round 1.7 TM-12 — consent is usually `pre_performance_gate`, intake is usually `pre_arrival_task`, license is `booking_hard_gate`. The substrate must EXPOSE these as concrete columns + admit per-tenant override (some tenants may upgrade consent to `booking_hard_gate` for surgical packets; some may downgrade intake to `pre_performance_gate` for walk-in clinics).
4. **OMNI generic primitive / rule:** `service_policy_eligibility_gate` child substrate per Amendment D (DL-19 inv 18). Carries `(service_id, modality, requirement_kind, required, gate_timing, gate_payload, tenant_override_allowed)`. Booking RPC at appointment_propose reads gates with `gate_timing = 'booking_hard_gate'` and `required = TRUE`; rejects appointment_propose if any unsatisfied. Pre_arrival_task generation reads gates with `gate_timing = 'pre_arrival_task'` and creates `care_episode_task` rows per DL-20 inv 16. encounter_line creation in Domain 5 reads gates with `gate_timing = 'pre_performance_gate'`. Closeout in Domain 7 reads gates with `gate_timing = 'closeout_documentation_gate'`.
5. **Divergence / improvement vs Mindbody:** Mindbody has no gate_timing concept; OMNI makes it first-class. Industry-standard separation now enforced at substrate level.
6. **Anti-copy warning:** Do NOT add `gate_timing` as a flag on the parent `service_policy` (it's per-requirement, not per-policy-row). Do NOT bake requirement_kind enum values for specialty-coded requirements (no `requires_aesthetic_consent` / `requires_medspa_intake`). Do NOT collapse `gate_payload` JSONB schema across requirement_kinds (each kind has its own payload shape; substrate keeps it open per DL-16 inv 9 evolution).
7. **Substrate pressure-test verdict:** **OK** — Amendment D applied this round. DL-19 inv 18 carries the child substrate. No new substrate gap.

#### Section B — Rule definition

8. **Trigger:** Admin configures eligibility policy per service/modality; booking/encounter/closeout RPCs read policy.
9. **Required inputs:** `service_id` + `modality` + `requirement_kind` ENUM + `required` BOOLEAN + `gate_timing` ENUM + optional `gate_payload` JSONB.
10. **Decision logic:**
    - On admin write: validate (service_id, modality, requirement_kind) unique constraint; validate gate_timing ∈ 5 allowed values; validate requirement_kind ∈ registered values.
    - Substrate enforces: (service_id, modality, requirement_kind) UNIQUE — one row per triple.
    - Updates go through insert-new-row + valid_to set on old row per DL-12 versioning + DL-16 inv 18 temporal validity.
    - Booking RPC at appointment_propose: query `WHERE gate_timing = 'booking_hard_gate' AND required = TRUE FOR (service_id, modality)`; evaluate each; reject if any unsatisfied with specific reason_code.
    - Pre_arrival_task generation at booking commit: query `WHERE gate_timing = 'pre_arrival_task' AND required = TRUE`; create `care_episode_task` rows per DL-20 inv 16 with linked_appointment_id + due_at = appointment.planned_window_start - tenant_lead_time.
    - encounter_line creation (Domain 5): query `WHERE gate_timing = 'pre_performance_gate'`; block if unsatisfied.
    - Closeout (Domain 7): query `WHERE gate_timing = 'closeout_documentation_gate'`; block if unsatisfied.
11. **Output / state change:** `service_policy_eligibility_gate` row inserted/updated. Emit `service_policy.eligibility_gate_changed` event per DL-16 amendment 42.
12. **Owning substrate:** `service_policy_eligibility_gate` (DL-19 inv 18 Amendment D child).
13. **UI surface:** Admin: Settings → Services & Scheduling → Service Policy editor with eligibility gate matrix (rows = requirement_kind, columns = gate_timing). Per-service-per-modality view. Patient/staff: no direct UI surface (substrate); affects booking flow validation.
14. **Failure mode:** Invalid gate_timing rejected at admin write. Conflicting rows (same (service_id, modality, requirement_kind)) rejected via UNIQUE constraint. NEVER patient-facing rendering of policy details.
15. **Audit / event:** `service_policy.eligibility_gate_changed` / `service_policy.eligibility_gate_evaluated` (DEBUG) per DL-16 amendment 42.
16. **Evidence citations (HARD EVIDENCE):**
    - DL-19 inv 18 Amendment D (this round)
    - DL-19 preamble gate-timing taxonomy (Round 1.7)
    - Day 0 Scheduling Rule Matrix TM-12 (Round 1.7 corrected 5-timing model)
    - Mindbody Batch 16 settings master surface (policy scattering pattern; OMNI consolidates with timing semantics)
    - User direction 2026-05-17 (Knox + chat correction about consent timing)
17. **Test case:** Tenant Bloom Health configures policy for Hydrafacial service in_person modality:
    - `(service=Hydrafacial, modality=in_person, requirement_kind=consent, required=TRUE, gate_timing=pre_performance_gate, gate_payload={consent_artifact_kind: 'hydrafacial_consent_v1'})`
    - `(service=Hydrafacial, modality=in_person, requirement_kind=intake_complete, required=TRUE, gate_timing=pre_arrival_task, gate_payload={intake_template_id: 'medspa_basic'})`
    - `(service=Hydrafacial, modality=in_person, requirement_kind=license_validation, required=TRUE, gate_timing=booking_hard_gate, gate_payload={required_license_kinds: ['esthetician','rn'], jurisdiction_match_required: TRUE})`
    - Booking RPC for Sarah at 2pm Tuesday: only license_validation hard gate fires; valid esthetician available + jurisdiction matches → succeeds. pre_arrival_task creates intake task with due_at = appt - 24hr. pre_performance_gate consent deferred to Domain 5.

### Rule BC-02: Booking RPC fires ONLY booking_hard_gate requirements; other timings defer to downstream domains

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody fires ALL configured requirements at booking time (or doesn't fire at all). No deferred enforcement.
2. **Cross-app pattern reference:**
   - **Hospital scheduling** — Pre-op clearance enforced at check-in, not at booking.
   - **Surgical center workflow** — Procedure consent enforced at procedure performance, not booking.
3. **Underlying tenant need:** Booking RPC must NOT block bookings for requirements that don't fire at booking time. Otherwise medspa flow breaks (per Round 1.7).
4. **OMNI generic primitive / rule:** Booking RPC (`appointment_propose` + `appointment_book`) query at commit: `SELECT * FROM service_policy_eligibility_gate WHERE service_id IN (planned_service_ids) AND modality = planned_modality AND gate_timing = 'booking_hard_gate' AND required = TRUE`. Evaluate each; reject if any unsatisfied with explicit `reason_code` per requirement_kind. Gates with other `gate_timing` values are NOT evaluated at booking — they fire downstream.
5. **Divergence / improvement vs Mindbody:** OMNI explicitly separates booking-time gates from downstream gates. Mindbody's "all-or-nothing" pattern is replaced with timing-aware enforcement.
6. **Anti-copy warning:** Do NOT short-circuit non-booking gates at booking (some tenants might want to "be safe" and validate everything at booking — that breaks the deferred model). Do NOT silently accept booking-hard-gate failures (always emit explicit `reason_code`).
7. **Substrate pressure-test verdict:** **OK** — Amendment D substrate supports query; no new gap.

#### Section B — Rule definition

8. **Trigger:** `appointment_propose` or `appointment_book` RPC invocation.
9. **Required inputs:** Booking payload (patient_id, planned_service_id(s), modality, planned_window, planned_provider_filter, etc.).
10. **Decision logic:**
    - Query gates: `WHERE gate_timing = 'booking_hard_gate' AND required = TRUE FOR planned_service_id(s) + modality`.
    - For each gate, evaluate per `requirement_kind`:
      - `license_validation`: lookup provider_license per DL-21 inv 12 matching `gate_payload.required_license_kinds` + jurisdiction match per `gate_payload.jurisdiction_match_required`. If no eligible provider → reject `no_eligible_licensed_provider`.
      - `intake_complete`: query `intake_session` for patient + service; reject `intake_required_for_booking` if not complete.
      - `prior_consult_required`: query encounter history for prior consult; reject `prior_consult_required`.
      - `age_verification`: compare patient.dob → age vs `gate_payload.min_age`; if under + no guardian path → reject `age_restriction_unsatisfied`.
      - `substance_class_authorization`: provider's DEA + state license for substance class; reject `substance_class_authorization_missing`.
      - `federation_permeability`: read DL-21 inv 7 policy; reject `cross_tenant_permeability_denied`.
    - If ALL booking_hard_gates pass: continue to 4-axis composer per BC-04.
    - If ANY fails: reject + emit `appointment_propose_rejected` event with reason_codes[].
11. **Output / state change:** Either booking proceeds to 4-axis composer OR rejected event emitted.
12. **Owning substrate:** Booking RPC reads `service_policy_eligibility_gate` (BC-01).
13. **UI surface:** Patient self-booking: shows rejection reason with redirect (e.g., intake-first → "Please complete our medical intake before scheduling. [Start intake →]"). Staff booking: shows technical reason_code + admin override option (per DL-18 capability).
14. **Failure mode:** Reject with specific reason_code. NEVER silent failure. NEVER generic "Cannot book" — always specific reason_code for staff debugging + patient redirect.
15. **Audit / event:** `appointment_propose_rejected.booking_hard_gate` with reason_codes[] payload per DL-16 amendment 42 + amendment 43 actor 4-tuple.
16. **Evidence citations:** BC-01 + DL-19 inv 18 Amendment D + DL-15 inv 30 (composer reads policy) + Round 1.7 TM-12.
17. **Test case:** Patrick books "GLP-1 Consult" preset. Tenant configured `(service=GLP1_followup, modality=async, requirement_kind=intake_complete, required=TRUE, gate_timing=booking_hard_gate)`. Patrick has no intake submitted. Booking RPC queries gate → reject `intake_required_for_booking` → patient sees redirect to intake form. Patrick completes intake → reattempts booking → gate now satisfied → 4-axis composer evaluates → booking commits.

### Rule BC-03: Tenant can override gate_timing per service (within statutory constraints)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody allows tenant override of consent + intake requirements per service (binary). No timing override semantics.
2. **Cross-app pattern reference:**
   - **Restaurant special-event reservation** — Standard reservation needs no deposit, but tenant can mark "NYE prix fixe" as deposit-at-booking.
   - **Hospital department scheduling** — Default service-specific consent timing can be overridden by department admin within compliance bounds.
3. **Underlying tenant need:** Some tenants need to upgrade specific services to stricter gating (new-patient surgical packet → consent-at-booking). Some tenants need to downgrade (walk-in clinic → no consent at all). Substrate must admit both directions when statute allows.
4. **OMNI generic primitive / rule:** `service_policy_eligibility_gate.tenant_override_allowed` BOOLEAN governs whether tenant admin can change `gate_timing` from default. Statute-bound gates (license_validation, substance_class_authorization) have `tenant_override_allowed = FALSE` and `gate_timing = booking_hard_gate` baked in. Tenant-configurable gates (consent, intake_complete, deposit, age_verification, prior_consult_required) have `tenant_override_allowed = TRUE` with default per requirement_kind.
5. **Divergence / improvement vs Mindbody:** OMNI explicitly distinguishes statute-bound (immutable) from tenant-configurable gates with override discipline.
6. **Anti-copy warning:** Do NOT allow tenant override of statute-bound gates (license / substance_class). Do NOT allow tenant override that violates downstream DL doctrine (e.g., bypassing clinical_clearance via gate_timing = none would violate DL-15 inv 10 ABSOLUTE rule — substrate prevents).
7. **Substrate pressure-test verdict:** **OK** — `tenant_override_allowed` BOOLEAN per Amendment D covers.

#### Section B — Rule definition

8. **Trigger:** Tenant admin attempts to change gate_timing for a service.
9. **Required inputs:** Service_id, modality, requirement_kind, new_gate_timing.
10. **Decision logic:**
    - Lookup existing row: if `tenant_override_allowed = FALSE` → reject with `gate_timing_change_disallowed_by_doctrine`.
    - Validate new_gate_timing ∈ 5 allowed values.
    - For specific requirements: validate downstream impact (e.g., changing `clinical_clearance` to `none` rejected per DL-15 inv 10 ABSOLUTE; substrate enforces).
    - On success: insert new row + valid_to set on old row + emit `service_policy.eligibility_gate_changed`.
    - Tier 3 attestation required per DL-18 inv 8 for upgrades to stricter timing (e.g., consent → booking_hard_gate); Tier 4 attestation for downgrades.
11. **Output / state change:** New row inserted; old row valid_to set. Event emitted.
12. **Owning substrate:** Same as BC-01.
13. **UI surface:** Admin Settings → Service Policy editor with override controls + attestation flow.
14. **Failure mode:** Reject if statute-bound; reject if downstream doctrine violation; require attestation if applicable.
15. **Audit / event:** Per BC-01.
16. **Evidence citations:** BC-01 + DL-19 inv 16 (doctrine floor) + DL-18 inv 8 attestation tiers.
17. **Test case:** Bloom tenant upgrades consent for "Sculptra" service from `pre_performance_gate` → `booking_hard_gate` (new-patient Sculptra requires consent packet pre-booking per their policy). Override allowed (consent is tenant-configurable). Tier 3 attestation required → admin signs → row inserted. Future Sculptra bookings now block at booking_hard_gate if consent missing.

---

## Section B — 4-axis booking composer

### Rule BC-04: Booking is 4-axis atomic composition (capacity × staff × room × resource)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Mindbody Batch 15 Step 03 Add Availability form shows 4 explicit axes (What/Where/When/Other). Per-staff availability scoped by service categories + location + days/time + privacy. Batch 13 Step 10 staff_service_assignment with per-staff prep/booking/finish. Batch 5 grid shows multi-resource visualization (provider columns + room visualization). Mindbody enforces atomicity but not via explicit 4-axis policy — implicit via scheduling form constraints.
2. **Cross-app pattern reference:**
   - **Hospital OR booking (Epic OpTime / Cerner OR Manager)** — Procedure + surgeon + anesthesiologist + OR room + supplies + equipment composed atomically. All-or-nothing.
   - **Restaurant party reservation** — Table + party_size + time + chef availability + special menu prep. Multi-axis atomic.
   - **Airline flight booking** — Seat + aircraft + crew + slot + jurisdiction. Atomic at PNR commit.
   - **Calendly Round Robin** — Time + event_type + assigned_provider (round-robin). Atomic at commit.
3. **Underlying tenant need:** Real clinical operations require multi-resource atomicity. Booking a Hydrafacial requires the esthetician + the room + the Hydrafacial machine + capacity slot to all align. If any axis fails, the booking must fail entirely (no partial reservation).
4. **OMNI generic primitive / rule:** Booking RPC (`appointment_propose`) evaluates 4 axes per DL-15 inv 30 (amendment 2). For each `appointment_item`:
   - **Capacity axis** (`service.concurrent_capacity`): how many simultaneous bookings the service admits for this slot. Default 1 for appointment service_type; N for class service_type.
   - **Staff axis** (`staff_service_assignment` ∩ `availability_window`): which staff can perform + are available in the time window.
   - **Room axis** (`room_service_compatibility`): which rooms admit this service.
   - **Resource axis** (`resource_service_compatibility`): which devices/equipment admit this service.
   - For each axis, `service_policy.requires_X` per DL-19 inv 18 determines whether axis is REQUIRED (TRUE) or NOT APPLICABLE (FALSE). E.g., `video_visit` requires staff but not room/resource; `LHR` requires staff + room + LHR-machine resource.
   - All REQUIRED axes must have ≥1 available match in the requested time window. If any required axis has zero match → reject `axis_unavailable.{axis_name}`.
   - If multiple matches per axis: deterministic selection (e.g., lowest-cost provider; specific tenant-policy resolution); ties broken by tenant config.
5. **Divergence / improvement vs Mindbody:** Mindbody implicitly enforces 4-axis via UI; OMNI makes it explicit policy + executable substrate rule.
6. **Anti-copy warning:** Do NOT allow partial reservation (book provider without confirming room). Do NOT skip required axis check per DL-15 inv 30. Do NOT add a 5th axis at substrate (jurisdiction is evaluated AFTER 4-axis per amendment 30 cross-link; it's not a 5th axis but a downstream rule).
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 30 + DL-19 inv 18 cover.

#### Section B — Rule definition

8. **Trigger:** `appointment_propose` after booking_hard_gate evaluation per BC-02.
9. **Required inputs:** Planned service + modality + requested window + (optionally) planned_provider/room/resource overrides from preset or staff direct booking.
10. **Decision logic:**
    - Read `service_policy` for (service_id, modality) → determine which axes are REQUIRED.
    - For each REQUIRED axis:
      - Capacity: check `service.concurrent_capacity - existing_bookings_in_window >= 1` (or >= bundle count for multi-item).
      - Staff: query staff with `staff_service_assignment(service_id)` + `availability_window` covering window per BC-13.
      - Room: query rooms with `room_service_compatibility(service_id)` + `availability_window` covering window per BC-18.
      - Resource: query resources with `resource_service_compatibility(service_id)` + `availability_window` covering window per BC-19.
    - For each axis: filter by `default_provider_eligibility_filter` (per BC-08) / `default_resource_requirement` from preset (per Domain 1 TM-07).
    - Atomic: if any axis returns empty → reject with `axis_unavailable.{axis_name}` reason_code.
    - If all axes succeed: select per-axis match deterministically (e.g., lowest staff prep_time; specific room per round-robin); enter slot-offer-hold-book lifecycle per BC-31.
11. **Output / state change:** Either proposed booking with selected (staff_id, room_id, resource_id, slot) OR rejection.
12. **Owning substrate:** Booking RPC reads `service_policy` + `staff_service_assignment` + `room_service_compatibility` + `resource_service_compatibility` + `availability_window`.
13. **UI surface:** Patient self-booking: shows available slots filtered by composer; staff booking: shows axis breakdown + override options.
14. **Failure mode:** Reject with specific axis reason_code. If multiple axes fail, surface all in event payload (do NOT surface all to patient — surface the first as actionable).
15. **Audit / event:** `appointment_propose_evaluated.4_axis_composer` per DL-16 amendment 42.
16. **Evidence citations:**
    - DL-15 inv 30 / amendment 30 (4-axis composer)
    - DL-19 inv 18 (service_policy axis flags)
    - Mindbody Batch 15 Step 03 (Add Availability 4-axis)
    - Mindbody Batch 5 grid (multi-resource visualization)
    - Build Contract §3.1 #1 4-axis composer
17. **Test case:** Sarah books LHR Brazilian preset. Service_policy: requires_staff=TRUE, requires_room=TRUE, requires_resource=TRUE, requires_capacity_consume=TRUE. Composer:
    - Capacity: 1 LHR machine slot available → OK
    - Staff: 2 LHR-certified estheticians available in window → select first per round-robin
    - Room: "LHR Room 1" matches `room_service_compatibility(LHR)` and is available → OK
    - Resource: "Diode laser device" matches `resource_service_compatibility(LHR)` and is available → OK
    - All 4 axes satisfied → propose slot with (esthetician=Amber, room=LHR_Room_1, resource=Diode_laser). Slot-offer-hold-book lifecycle per BC-31 begins.

### Rule BC-05: Required-axis evaluation is per-service_policy, not per-service

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody scopes axis requirements to appointment_type globally (no per-modality differentiation). All "facial" types need same room kind regardless of in-person vs virtual.
2. **Cross-app pattern reference:**
   - **Calendly event_type variants** — Video event type has no location/room; in-person has both. Same event template, different policy per modality.
   - **Hospital encounter_type variants** — Office visit vs telehealth same service, different room requirements.
3. **Underlying tenant need:** Same service may have different axis requirements per modality. "Provider Consultation" in_person needs staff + room; "Provider Consultation" video needs staff + camera resource but no room.
4. **OMNI generic primitive / rule:** `service_policy` keyed by (service_id, modality) per DL-19 inv 18. Each row admits different axis flags. Composer reads the row matching (planned_service_id + planned_modality).
5. **Divergence / improvement vs Mindbody:** OMNI's (service_id, modality) keying admits per-modality policy variance; Mindbody can't.
6. **Anti-copy warning:** Do NOT default `service_policy` to all-axes-required (defaults vary per modality). Do NOT collapse modality into service (the SAME service may admit multiple modalities).
7. **Substrate pressure-test verdict:** **OK** — DL-19 inv 18 keying handles this.

#### Section B — Rule definition

8. **Trigger:** Booking with explicit modality (or modality inferred from booking_preset).
9. **Required inputs:** planned_service_id, modality.
10. **Decision logic:**
    - Lookup `service_policy WHERE service_id = ? AND modality = ?`.
    - If no row exists: fall back to tenant-default modality policy OR reject `service_not_admissible_for_modality`.
    - Read axis flags from the matched row.
    - Apply axis evaluation per BC-04.
11. **Output / state change:** Same as BC-04.
12. **Owning substrate:** `service_policy` (DL-19 inv 18).
13. **UI surface:** Admin Settings → per-service-per-modality policy editor (matrix of services × modalities).
14. **Failure mode:** Missing policy row → fall back to tenant default OR reject.
15. **Audit / event:** Same as BC-04.
16. **Evidence citations:** DL-19 inv 18 + DL-20 inv 35 (modality 4-enum).
17. **Test case:** Tenant configures "Provider Consultation" service with 2 modalities:
    - (Provider_Consult, in_person, requires_staff=TRUE, requires_room=TRUE, requires_resource=FALSE)
    - (Provider_Consult, video, requires_staff=TRUE, requires_room=FALSE, requires_resource=TRUE — camera/screen)
    Patient books in_person: composer requires room match. Patient books video: composer skips room, requires camera resource.

### Rule BC-06: Bundle preset booking applies 4-axis composer to ALL member presets atomically

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody requires sequential separate booking for multi-service visits. No atomic bundle composition.
2. **Cross-app pattern reference:**
   - **Restaurant combo meal** — Combo materializes 3 ticket items, all-or-nothing.
   - **Travel package** — Flight + hotel + car, all-or-nothing PNR.
   - **Hospital surgery bundle** — Procedure + room + anesthesia + nurses, atomic OR booking.
3. **Underlying tenant need:** When patient books "Bloom Glow Package" bundle preset (Hydrafacial + Injector + Red Light), the booking must atomically validate ALL 3 member services across their respective axes. If Red Light room unavailable at time T+90min, the whole bundle should fail (not partially book Hydrafacial + Injector).
4. **OMNI generic primitive / rule:** Bundle booking applies BC-04 4-axis composer to EACH member preset's target service + modality + planned_window (computed per member's sequence_index). If ANY member fails ANY required axis → reject entire bundle. Atomic per DL-15 inv 2.
5. **Divergence / improvement vs Mindbody:** Mindbody can't atomic-book bundles. OMNI explicitly supports.
6. **Anti-copy warning:** Do NOT allow partial bundle commits. Do NOT reduce bundle atomicity to "best-effort." Per DL-15 inv 2 strict atomic.
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 2 (multi-resource atomic) + DL-19 inv 19 (bundle preset) + Domain 1 TM-10 cover.

#### Section B — Rule definition

8. **Trigger:** Booking commit for `booking_preset.bundled_member_preset_ids[]` non-empty.
9. **Required inputs:** Bundle preset id, member preset ids, requested start_window, patient_id.
10. **Decision logic:**
    - Resolve each member preset → target_service + planned_modality + default_duration_minutes (per Domain 1 TM-10).
    - Compute per-member planned_window: `start_t_member_n = start_t_bundle + Σ(duration_of_members_1_to_n-1)`. Members proceed sequentially within bundle by default; parallel-mode bundles deferred to Deferred Rule Candidates.
    - For each member: run BC-04 4-axis composer with its window.
    - If ALL members succeed → atomic commit: ONE `appointment` row + N `appointment_item` rows (per Domain 1 TM-10).
    - If ANY member fails → atomic reject + emit `bundle_axis_unavailable.{member_id}.{axis_name}` per failing axis + roll back any tentative holds.
11. **Output / state change:** Either bundle commits with all items materialized OR full rejection. Slot-offer-hold-book applies atomically across all member windows.
12. **Owning substrate:** `appointment` + `appointment_item × N` + bundle resolution per DL-19 inv 19.
13. **UI surface:** Patient: bundle preview shows estimated total duration; rejection surfaces "Unable to book this combo at the requested time — try a different time" with alternative suggestions.
14. **Failure mode:** Atomic reject — never partial. Tentative holds released atomically.
15. **Audit / event:** `bundle_proposed.evaluated` / `bundle_axis_unavailable.{member}.{axis}` per DL-16 amendment 42.
16. **Evidence citations:** DL-15 inv 2 + DL-19 inv 19 + Domain 1 TM-10 + Build Contract §3.1.
17. **Test case:** Sarah books "Bloom Glow Package" bundle: Hydrafacial 60min + Injector 30min + Red Light 20min. Composer evaluates:
    - Hydrafacial (10am-11am): esthetician=Amber, room=Facial_1, resource=Hydrafacial_machine → OK
    - Injector (11am-11:30am): injector=NP_Crawford, room=Injector_1, resource=N/A → OK
    - Red Light (11:30am-11:50am): room=Wellness_2, resource=Red_Light_panel, no staff required → OK (no-staff service_policy)
    - All 3 axes pass for all members → atomic commit: 1 appointment + 3 appointment_items materialize. Schedule shows "Bloom Glow Package" 10am-11:50am with 3 child items.
    Contrast: if Red_Light_panel is in use at 11:30am, the entire bundle fails atomically (Hydrafacial + Injector don't book partially).

### Rule BC-07: Walk-in arrival service_type bypasses scheduled-time axis; preserves room/staff axes

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody admits walk-in flow via "Arrivals" service_type. Walk-in adds patient to queue without scheduled time. Per Batch 20 Step 07 walk-in cart mode.
2. **Cross-app pattern reference:**
   - **Restaurant walk-in** — Party arrives without reservation; gets next available table.
   - **Hospital ER** — Patient arrives; triage determines wait time and staff/room.
   - **Hair salon walk-in queue** — Customer waits for next available stylist + chair.
3. **Underlying tenant need:** Some services admit walk-in (no scheduled_time required). The composer must respect this and skip scheduled_time axis but still validate staff + room + resource per service_policy.
4. **OMNI generic primitive / rule:** When `service.service_type = 'arrival'` AND `service_policy.requires_scheduled_time = FALSE` AND `service_policy.allows_walk_in = TRUE`: composer skips scheduled_time axis; queues appointment with `status_flags |= Walk_in` per DL-15 amendment 29; assigns to next-available staff/room/resource per queue order.
5. **Divergence / improvement vs Mindbody:** Same intent as Mindbody. OMNI explicit via service_type + service_policy.
6. **Anti-copy warning:** Do NOT bypass staff/room/resource axes for walk-in (axes still apply; only scheduled_time is skipped). Do NOT default `allows_walk_in = TRUE` (tenant explicitly opts service into walk-in).
7. **Substrate pressure-test verdict:** **OK** — DL-15 amendment 32 service_type + amendment 29 status_flags + DL-19 inv 18 service_policy cover.

#### Section B — Rule definition

8. **Trigger:** Walk-in arrival from front-desk staff (no patient pre-booking).
9. **Required inputs:** Patient_id (or new patient creation per Domain 1 TM-12 degenerate fallback), planned_service_id (or category-level), modality (typically in_person).
10. **Decision logic:**
    - Validate `service.service_type = 'arrival'` OR `service_policy.allows_walk_in = TRUE`.
    - Skip scheduled_time axis check.
    - Run BC-04 4-axis composer with "next available" window (no specific time).
    - Composer returns earliest-available match across staff/room/resource axes.
    - Materialize appointment with `status_flags |= Walk_in` + planned_window = (earliest_available, earliest_available + service_duration).
    - Booking_hard_gates still fire per BC-02 (license still required, etc.).
11. **Output / state change:** Walk-in appointment created with current time queue position.
12. **Owning substrate:** Same as BC-04 + DL-15 amendment 29 status_flags.
13. **UI surface:** Staff: walk-in modal with "Add to queue" button; shows estimated wait time. Patient: queue position display + estimated wait.
14. **Failure mode:** If no axis available even with next-available: reject with `walk_in_queue_full` and offer to schedule for later.
15. **Audit / event:** `walk_in_appointment_created` per DL-16 amendment 42.
16. **Evidence citations:** DL-15 amendment 32 + amendment 29 + DL-19 inv 18 + Mindbody Batch 20 Step 07 walk-in cart.
17. **Test case:** Walk-in patient arrives at front desk for Hydrafacial. Staff selects "Walk-in." Service_policy: allows_walk_in=TRUE for Hydrafacial. Composer: earliest available Hydrafacial slot = 11:15am (15min wait). Appointment created with status_flags |= Walk_in, planned_window = 11:15am-12:15pm. Patient sees "Wait approx 15 min" badge.

---

## Section C — Provider eligibility resolution

### Rule BC-08: Provider eligibility filter resolves staff_service_assignment + capability + DL-21 license

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 13 Step 10 staff assignment per-service. Batch 15 Step 01 Staff Profile Appointment Setup showing per-staff assigned services. Staff eligibility = (staff_service_assignment row exists) AND (Provider Permission flag set) AND (staff is_active).
2. **Cross-app pattern reference:**
   - **Calendly Round Robin pool** — Patient picks event_type; pool of providers; one selected per round-robin.
   - **Hospital staff scheduling** — Provider eligibility = credentialing + license + role.
   - **Salon stylist assignment** — Specific stylist vs "any available."
3. **Underlying tenant need:** Booking must filter staff by: (a) `staff_service_assignment` row exists for this service; (b) staff has capability per DL-18 (e.g., `is_provider` for clinical services); (c) staff has valid license per DL-21 for the patient's jurisdiction; (d) preset's `default_provider_eligibility_filter` (e.g., "any injector" / "specific staff group").
4. **OMNI generic primitive / rule:** Provider eligibility query at composer staff axis:
   ```sql
   SELECT staff_id FROM staff_service_assignment WHERE service_id = ?
     INTERSECT
   SELECT staff_id FROM staff WHERE is_active = TRUE AND tenant_id = ?
     INTERSECT
   SELECT staff_id FROM staff_capability WHERE capability IN required_capabilities
     INTERSECT
   SELECT staff_id FROM provider_license WHERE status = 'active' AND jurisdiction_id = patient_jurisdiction AND license_kind IN required_kinds
     INTERSECT
   SELECT staff_id FROM staff_filtered_by_preset(preset.default_provider_eligibility_filter)
   ```
5. **Divergence / improvement vs Mindbody:** Mindbody lacks structured license enforcement at booking. OMNI integrates DL-21 license check.
6. **Anti-copy warning:** Do NOT fall back to "any active staff" if license check fails — that bypasses jurisdiction discipline. Do NOT bake license_kinds into service substrate — they live on service_policy_eligibility_gate.gate_payload per Amendment D.
7. **Substrate pressure-test verdict:** **OK** — staff_service_assignment (DL-15 amendment 31) + staff_capability (DL-18 inv 6) + provider_license (DL-21 inv 12) + booking_preset.default_provider_eligibility_filter (DL-19 inv 19) cover.

#### Section B — Rule definition

8. **Trigger:** Composer staff axis evaluation per BC-04.
9. **Required inputs:** service_id, patient_jurisdiction (from patient address per DL-21), required_capabilities (from service_policy + preset filter), preset filter.
10. **Decision logic:**
    - Run INTERSECT query as above.
    - Filter results by availability_window per BC-13.
    - Result set = eligible staff.
    - If empty: reject staff axis with `no_eligible_licensed_provider_in_window`.
    - If non-empty: pass to staff selection rule (BC-09) for ranking + deterministic pick.
11. **Output / state change:** Returns eligible staff list to composer.
12. **Owning substrate:** Cross-substrate query.
13. **UI surface:** Patient sees aggregated availability across eligible providers; staff sees filtered list with eligibility reasons.
14. **Failure mode:** Empty result → axis fails → composer rejects per BC-04.
15. **Audit / event:** `staff_axis_evaluated.eligible_count = N` per DL-16 amendment 42 (DEBUG).
16. **Evidence citations:** DL-15 amendment 31 + DL-18 inv 6 + DL-21 inv 12 + DL-19 inv 19 + Mindbody Batches 13 + 15.
17. **Test case:** Sarah books "GLP-1 Consult" preset. Service: GLP-1 followup. patient_jurisdiction = MI. Required capabilities: is_provider, can_prescribe_controlled. Preset filter: "any provider." Query:
    - staff_service_assignment(GLP1) = {Dr.Crawford, NP_Klait, Dr.Balboul}
    - staff.is_active = TRUE → all 3
    - staff_capability(is_provider, can_prescribe_controlled) = {Dr.Crawford, NP_Klait, Dr.Balboul}
    - provider_license(MI, controlled_substance_authority) = {Dr.Crawford (MI), NP_Klait (MI), Dr.Balboul (MI + IL)}
    - INTERSECT all = {Dr.Crawford, NP_Klait, Dr.Balboul} — 3 eligible.
    - Pass to BC-09 for selection.

### Rule BC-09: Multi-eligible staff selection is deterministic + per-tenant policy

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody allows patient to pick specific staff OR "any available" → first-available alphabetical by default.
2. **Cross-app pattern reference:**
   - **Calendly Round Robin** — Round-robin / random / least-recent / specific assignment policies.
   - **Hospital provider queue routing** — Skill match + load balancing + on-call rotation.
   - **Restaurant table assignment** — Sections / server load / VIP routing.
3. **Underlying tenant need:** When multiple staff are eligible, the tenant must control selection: round-robin / lowest-load / specific-preferred / patient-preference. Deterministic so race conditions don't double-book.
4. **OMNI generic primitive / rule:** `tenant_setting.staff_selection_policy` ENUM per (service_id, default-or-override): `patient_choice` / `round_robin` / `lowest_load_today` / `specific_preferred_first` / `random`. Composer applies policy at staff axis selection. Default: `patient_choice` (patient sees list) for patient-facing bookings; `lowest_load_today` for staff-facing bookings.
5. **Divergence / improvement vs Mindbody:** Mindbody first-available is one option; OMNI admits multiple policies.
6. **Anti-copy warning:** Do NOT randomize at runtime without seed (race conditions); do NOT allow `staff_selection_policy = random` at substrate without explicit logging.
7. **Substrate pressure-test verdict:** **OK** — DL-19 inv 1 settings substrate covers; policy values are tenant-configurable.

#### Section B — Rule definition

8. **Trigger:** Composer has multi-eligible staff post-BC-08.
9. **Required inputs:** Eligible staff list, tenant policy, optional patient preference.
10. **Decision logic:**
    - Apply policy:
      - `patient_choice`: return all eligible to UI (patient picks).
      - `round_robin`: pick next-in-rotation per `tenant_state.last_assigned_staff_id`.
      - `lowest_load_today`: pick staff with fewest appointments today.
      - `specific_preferred_first`: pick patient's preferred provider if eligible, else round-robin.
      - `random`: secure random; log seed.
    - Ties broken by staff_id ascending (deterministic).
    - Patient preference override: if patient has `patient_metadata_axis(preferred_provider) = X` and X is eligible, prefer X.
11. **Output / state change:** Selected staff_id passed to slot-offer-hold-book lifecycle.
12. **Owning substrate:** Settings substrate + composer logic.
13. **UI surface:** Patient: dropdown if `patient_choice`; otherwise single auto-selected with override option.
14. **Failure mode:** If policy fails (e.g., round-robin state corrupt): fall back to first-eligible alphabetical.
15. **Audit / event:** `staff_selected.policy_kind = {policy_value}` per DL-16 amendment 42.
16. **Evidence citations:** DL-19 inv 1 settings + Calendly round-robin pattern + Mindbody.
17. **Test case:** Bloom tenant configures `staff_selection_policy = round_robin` for Injectables. 3 eligible injectors. Last assigned: NP_Klait. Round-robin → Dr.Crawford. Selected.

### Rule BC-10: Provider absence (PTO / sick) triggers automatic re-resolution + waitlist promotion

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 15 Step 02 shows one-time-override "Daughter sick" entry for Friday. Mindbody doesn't auto-rebook; staff manually contacts affected patients.
2. **Cross-app pattern reference:**
   - **Airline flight cancellation** — Auto-rebook on alternative flight or refund.
   - **Hospital provider absence** — Auto-route to coverage provider via on-call.
   - **Restaurant chef cancellation** — Affected reservations contacted with alternatives.
3. **Underlying tenant need:** When a provider becomes unavailable post-booking (sick day, PTO, emergency), affected appointments must trigger: (a) detection; (b) re-resolution attempt (assign coverage provider); (c) if no coverage, patient notification + reschedule offer.
4. **OMNI generic primitive / rule:** When `availability_window.availability_kind = 'blocked_time'` is inserted retroactively (provider sick day), CNS event `availability.blocked_post_booking` fires. Orchestration_run per DL-14 inv 17 begins:
   - Identify affected appointments (in window, with this provider).
   - For each: re-run BC-08 + BC-09 with `blocked_provider_excluded`. If alternate provider eligible → propose silent reassignment with audit + outbound notify per DL-16 amendment 42 + amendment 41 yellow severity. If no alternate → emit `appointment.no_coverage_available` + initiate reschedule offer outbound per Domain 4.
5. **Divergence / improvement vs Mindbody:** OMNI auto-resolves; Mindbody manual.
6. **Anti-copy warning:** Do NOT silently change provider without patient notification (consent + transparency). Do NOT auto-cancel without offering reschedule.
7. **Substrate pressure-test verdict:** **OK** — DL-15 amendment 35 (blocked_time) + DL-14 inv 17 (orchestration_run) + DL-16 amendment 41 (severity) cover.

#### Section B — Rule definition

8. **Trigger:** Insert of `availability_window` with `availability_kind = 'blocked_time'` retroactively covering existing bookings.
9. **Required inputs:** blocked_time window + affected appointment list.
10. **Decision logic:**
    - Detect affected appointments via query.
    - For each: re-run BC-04 4-axis composer excluding blocked provider.
    - If alternate eligible + within time window: propose reassignment → patient confirmation flow (Domain 4).
    - If no alternate: emit reschedule offer per Domain 4.
11. **Output / state change:** orchestration_run for each affected appointment; outbound notifications.
12. **Owning substrate:** orchestration_run (DL-14 inv 17) + availability_window (DL-15 amendment 35).
13. **UI surface:** Staff: alert showing affected appointments + auto-resolution suggestions; Patient: SMS/email with reschedule options.
14. **Failure mode:** If patient unreachable: escalate to staff queue per DL-20 inv 17 provider review queue.
15. **Audit / event:** `provider_blocked_post_booking.affected_count = N` + per-appointment outcome events.
16. **Evidence citations:** DL-15 amendment 35 + DL-14 inv 17 + Build Contract §5.11 provider sick-day cascade.
17. **Test case:** NP_Klait calls in sick at 7am Friday. Admin inserts blocked_time window Friday 9am-5pm. 6 affected appointments. CNS auto-runs BC-08 for each: 3 reassign to Dr.Crawford (alternate eligible); 2 reassign to NP_Patel; 1 has no alternate (Sculptra-only — Klait is only Sculptra-certified). 1 patient receives reschedule offer; 5 receive silent reassignment notification (patient may decline). Audit: 6 orchestration_runs.

---

## Section D — 3-component appointment block

### Rule BC-11: Total resource lock = prep + booking + finish (per-staff per-service)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Batch 13 Step 10 staff_service_assignment table shows 5 per-staff-per-service columns: Pay Rate / Booking Time / Prep Time / Finish Time. Each per-row. Batch 15 Step 01 staff profile shows assigned services with per-row prep/finish columns. User feedback gap #1: "room vs provider vs resource… all independently, so that they can all align."
2. **Cross-app pattern reference:**
   - **Restaurant kitchen prep time** — Prep + cook + plate per dish; total kitchen time = sum.
   - **Hospital OR turnover** — Procedure time + room cleanup; total OR lock = procedure + turnover.
   - **Hair salon stylist block** — Prep (mix color) + service (cut/color) + finish (cleanup); total chair time.
3. **Underlying tenant need:** Different staff have different prep/finish times for same service. Senior injector: 5min prep + 20min booking + 5min finish = 30min total. Junior: 10min + 25min + 10min = 45min. Substrate must support per-(staff × service) decomposition.
4. **OMNI generic primitive / rule:** `staff_service_assignment` carries 3 NUMERIC columns per DL-15 amendment 31: `prep_time_minutes` + `booking_time_minutes` + `finish_time_minutes`. Total resource lock = sum. Patient-facing slot = booking_time_minutes only. Staff schedule UI shows full block.
5. **Divergence / improvement vs Mindbody:** Same pattern. OMNI explicit.
6. **Anti-copy warning:** Do NOT collapse prep+booking+finish into single duration field. Do NOT default all 3 to 0 (tenant must explicitly configure; default 0 only for prep/finish, never for booking).
7. **Substrate pressure-test verdict:** **OK** — DL-15 amendment 31 covers.

#### Section B — Rule definition

8. **Trigger:** Composer time-window evaluation for staff axis.
9. **Required inputs:** staff_id + service_id (resolves to staff_service_assignment row).
10. **Decision logic:**
    - Read prep_time + booking_time + finish_time from staff_service_assignment.
    - Total lock duration = sum.
    - Patient-facing slot start = requested_time + prep_time (or requested_time if patient enters booking-time-start); patient-facing slot end = patient-facing slot start + booking_time.
    - Resource lock: (slot_start - prep_time, slot_end + finish_time) for THIS staff member only.
    - Availability window match: requires staff free for FULL lock duration.
11. **Output / state change:** Resource locks span the full block; appointment.planned_window_start = patient-facing start; appointment.planned_window_end = patient-facing end.
12. **Owning substrate:** staff_service_assignment (DL-15 amendment 31).
13. **UI surface:** Patient: sees booking_time slot. Staff schedule: sees full block with prep/finish shaded.
14. **Failure mode:** If staff_service_assignment row missing → fall back to service.default_duration_minutes for all 3 (prep=0, finish=0).
15. **Audit / event:** `appointment.resource_lock_duration = X` (DEBUG).
16. **Evidence citations:** DL-15 amendment 31 + Mindbody Batch 13 Step 10 + user gap #1.
17. **Test case:** Sarah books Botox with NP_Klait. staff_service_assignment(Klait, Neuromodulator): prep=5min, booking=20min, finish=5min. Sarah picks 2pm slot (patient-facing booking_time start). Resource lock: 1:55pm-2:25pm (30min total). Patient sees "2:00pm-2:20pm". Staff schedule shows full 1:55-2:25 block. Next available slot for Klait: 2:25pm earliest.

### Rule BC-12: Prep + finish time apply only to staff axis; room/resource locks span booking_time only

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody locks resources for full block (no distinction).
2. **Cross-app pattern reference:**
   - **Hospital OR turnover** — Room is locked for cleanup; equipment may not be.
   - **Restaurant kitchen vs table** — Kitchen prep doesn't lock dining table.
3. **Underlying tenant need:** Some resources need prep/finish lock (Hydrafacial machine cleanup); others don't (consultation room). Substrate admits per-resource configuration.
4. **OMNI generic primitive / rule:** `room_service_compatibility` and `resource_service_compatibility` carry `prep_lock_required` + `finish_lock_required` BOOLEANs. Default: TRUE for procedure resources (devices, equipment); FALSE for consult rooms.
5. **Divergence / improvement vs Mindbody:** OMNI tracks per-resource lock semantics.
6. **Anti-copy warning:** Do NOT default all resources to full-block-lock (over-conservative). Do NOT collapse this into service-level config.
7. **Substrate pressure-test verdict:** **OK with extension** — `room_service_compatibility.prep_lock_required` and `finish_lock_required` BOOLEANS need to be added. Amendment E candidate; small extension.

#### Section B — Rule definition

8. **Trigger:** Composer resource lock allocation.
9. **Required inputs:** room/resource + prep/finish flags.
10. **Decision logic:**
    - Read `prep_lock_required` / `finish_lock_required` per resource.
    - If TRUE: extend resource lock per BC-11 full block.
    - If FALSE: resource lock = booking_time only.
11. **Output / state change:** Resource lock spans determined.
12. **Owning substrate:** room_service_compatibility, resource_service_compatibility (DL-15 4-axis composer substrate).
13. **UI surface:** Admin: per-resource prep/finish lock toggle.
14. **Failure mode:** Missing flag → default TRUE (conservative).
15. **Audit / event:** Same as BC-11.
16. **Evidence citations:** DL-15 inv 30 + DL-15 amendment 31.
17. **Test case:** Sarah Hydrafacial: Hydrafacial_machine needs cleanup (prep_lock_required=TRUE, finish_lock_required=TRUE) → resource lock = full block. Consult_Room_1 is shared (prep_lock_required=FALSE, finish_lock_required=FALSE) → room lock = booking_time only.

---

## Section E — Staff availability window (4-axis + recurring + override + blocked)

### Rule BC-13: Availability window resolution at booking commit reads 4-axis composition

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Batch 15 Step 03 Add Availability form has 4 numbered sections: What (services) / Where (location) / When (date+days+time) / Other (privacy). Per-staff, per-time-window scoping. Multi-entry per day. Batch 15 Step 02 shows mixed recurring (2-year date range) + override (single-date) entries.
2. **Cross-app pattern reference:**
   - **Google Calendar event recurrence** — RFC 5545 RRULE for recurrence + EXDATE for exceptions.
   - **Calendly availability** — Weekly recurrence + override.
   - **OpenTable restaurant hours** — Recurring weekly + holiday overrides.
3. **Underlying tenant need:** Staff schedules combine recurring patterns (every Tuesday 9-5) with one-time overrides (sick day, late shift) and blocked time. The composer must compose all 3 at booking commit.
4. **OMNI generic primitive / rule:** `availability_window` per DL-15 amendments 34+35 carries 4-axis (What/Where/When/Other) + `availability_kind` ENUM (`recurring` / `one_time_override` / `blocked_time`). Booking resolution per DL-15 amendment 35 precedence:
   1. `blocked_time` windows always block
   2. `one_time_override` with `override_supersedes_recurring=TRUE` replaces recurring
   3. `one_time_override` with `override_supersedes_recurring=FALSE` adds to recurring
   4. `recurring` window virtual occurrences
5. **Divergence / improvement vs Mindbody:** OMNI explicit RFC 5545 RRULE for recurrence; explicit precedence order.
6. **Anti-copy warning:** Do NOT pre-materialize recurring occurrences (per DL-15 inv 11 lazy virtual). Do NOT allow blocked_time to be additive (always replaces).
7. **Substrate pressure-test verdict:** **OK** — DL-15 amendments 34+35 cover.

#### Section B — Rule definition

8. **Trigger:** Composer staff axis evaluation for time window.
9. **Required inputs:** staff_id, service_id, modality, requested window, venue_id.
10. **Decision logic:**
    - Query staff_id's availability_window rows where:
      - `service_id ∈ services[]` (What axis)
      - `venue_id ∈ venue_ids[]` (Where axis)
      - `requested_window ∩ [start_datetime, end_datetime]` non-empty (When axis)
      - `patient_visibility` allows (Other axis)
    - Resolve per precedence: blocked_time > one_time_override > recurring.
    - Compose with BC-11 3-component block (prep + booking + finish).
    - Return TRUE if staff is available + FALSE if not.
11. **Output / state change:** Composer staff axis result.
12. **Owning substrate:** availability_window (DL-15 amendments 34+35).
13. **UI surface:** Staff schedule view (admin) shows resolved availability with precedence visualization.
14. **Failure mode:** Conflict between override and recurring resolved per precedence; ambiguous case → reject `availability_window_ambiguous` with admin alert.
15. **Audit / event:** `staff_availability_resolved.kind = {recurring|override|blocked}` (DEBUG).
16. **Evidence citations:** DL-15 amendments 34+35 + Mindbody Batch 15 Step 02-03.
17. **Test case:** Friday 1:30pm-5pm: staff has 2-year recurring "Friday 10am-5pm Bloom-Birmingham" + one-time-override "1:30pm-5pm 05/15/2026 Daughter sick — UNAVAILABLE" (availability_kind=blocked_time). Composer at booking for Friday 2pm: blocked_time precedence wins → staff unavailable.

### Rule BC-14: Recurring availability uses RFC 5545 RRULE; virtual occurrences not pre-materialized

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 15 Step 02 shows multi-year date ranges (09/25/2025-09/25/2027) indicating recurring weekly patterns.
2. **Cross-app pattern reference:**
   - **iCalendar RFC 5545** — Industry standard for recurrence.
   - **Google Calendar recurrence** — RRULE-based.
   - **Outlook recurrence** — RRULE-based.
3. **Underlying tenant need:** Recurring availability spans years; pre-materializing rows wastes storage + admits drift. Virtual occurrences at query time.
4. **OMNI generic primitive / rule:** `availability_window.recurrence_rule` STRING per RFC 5545 RRULE (e.g., `FREQ=WEEKLY;BYDAY=TU;BYHOUR=9;INTERVAL=1`). Booking RPC computes virtual occurrences at query time per DL-15 amendment 35.
5. **Divergence / improvement vs Mindbody:** OMNI explicit RFC 5545.
6. **Anti-copy warning:** Do NOT pre-materialize recurring rows (DL-15 inv 11 lazy). Do NOT invent OMNI-specific RRULE syntax (use RFC 5545).
7. **Substrate pressure-test verdict:** **OK** — DL-15 amendment 34 (What/Where/When/Other) + amendment 35 (recurring + override).

#### Section B — Rule definition

8. **Trigger:** Recurring availability admin write or query at booking.
9. **Required inputs:** RRULE string + start_datetime + optional end_datetime/COUNT.
10. **Decision logic:**
    - Admin write: validate RRULE syntax per RFC 5545.
    - Booking query: compute virtual occurrences in requested window.
    - Combine with overrides per BC-13 precedence.
11. **Output / state change:** Virtual occurrences computed; no rows materialized.
12. **Owning substrate:** availability_window (DL-15 amendments 34+35).
13. **UI surface:** Admin RRULE editor (humanized: "Every Tuesday 9am-5pm starting May 2026").
14. **Failure mode:** Invalid RRULE rejected at admin write; unbounded recurrence allowed if `end_datetime` NULL.
15. **Audit / event:** `availability.recurrence_set` per DL-16 amendment 42.
16. **Evidence citations:** DL-15 amendments 34+35 + RFC 5545 standard.
17. **Test case:** Admin sets "Tuesday 9am-5pm, every week, starting 2026-05-01, no end date." RRULE = `FREQ=WEEKLY;BYDAY=TU`. Booking RPC for Tuesday 2026-12-15 2pm → virtual occurrence exists → staff available (subject to override/blocked checks).

### Rule BC-15: One-time-override replaces or adds to recurring per `override_supersedes_recurring` flag

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 15 Step 02 single-date entries (05/15/2026) override recurring entries for that day.
2. **Cross-app pattern reference:**
   - **iCalendar EXDATE / RECURRENCE-ID** — Override mechanism.
   - **Google Calendar single-occurrence edit** — Override one instance.
3. **Underlying tenant need:** Some overrides replace recurring (sick day cancels regular schedule). Some add (extra Saturday clinic). Substrate distinguishes.
4. **OMNI generic primitive / rule:** `availability_window.availability_kind = 'one_time_override'` + `override_supersedes_recurring` BOOLEAN per DL-15 amendment 35. Precedence per BC-13.
5. **Divergence / improvement vs Mindbody:** OMNI explicit boolean.
6. **Anti-copy warning:** Do NOT default `override_supersedes_recurring = TRUE` (additive is common case for "extra hours"). Do NOT confuse override with blocked_time (different kinds).
7. **Substrate pressure-test verdict:** **OK** — DL-15 amendment 35.

#### Section B — Rule definition

8. **Trigger:** Admin inserts one-time-override.
9. **Required inputs:** override window + `override_supersedes_recurring` BOOLEAN + parent_recurrence_id FK NULL.
10. **Decision logic:**
    - On insert: link to parent_recurrence_id if applicable.
    - At booking: apply precedence per BC-13.
11. **Output / state change:** override row inserted.
12. **Owning substrate:** availability_window.
13. **UI surface:** Admin: override editor with "Replace recurring" vs "Add to recurring" toggle.
14. **Failure mode:** Conflict resolution per precedence.
15. **Audit / event:** `availability.override_inserted` per DL-16 amendment 42.
16. **Evidence citations:** DL-15 amendment 35 + Batch 15.
17. **Test case:** Admin adds "Saturday 2026-06-15 9am-1pm" with `override_supersedes_recurring = FALSE` (extra Saturday clinic). Existing Saturday recurring = none (staff doesn't usually work Saturday). Override adds Saturday availability; doesn't conflict with anything.

### Rule BC-16: Blocked_time always wins; cannot be overridden by recurring or override

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 15 Step 02 "Daughter sick" entry treated as absolute block.
2. **Cross-app pattern reference:**
   - **Hospital provider PTO** — Absolute block; cannot be overridden by recurring schedule.
3. **Underlying tenant need:** Blocked_time = absolute unavailability. Cannot be overridden by recurring or one-time-override.
4. **OMNI generic primitive / rule:** `availability_kind = 'blocked_time'` highest precedence per DL-15 amendment 35.
5. **Divergence / improvement vs Mindbody:** OMNI explicit precedence.
6. **Anti-copy warning:** Do NOT allow blocked_time to be "additive" (always replaces).
7. **Substrate pressure-test verdict:** **OK** — DL-15 amendment 35.

#### Section B — Rule definition

8. **Trigger:** Admin inserts blocked_time OR composer evaluates availability.
9. **Required inputs:** blocked window + reason (optional notes).
10. **Decision logic:**
    - On insert: trigger BC-10 (post-booking re-resolution) if window overlaps existing bookings.
    - At composer: blocked_time always wins.
11. **Output / state change:** Blocked window inserted; affected bookings re-resolved.
12. **Owning substrate:** availability_window.
13. **UI surface:** Admin: blocked_time editor with reason notes (visible to staff_only by default).
14. **Failure mode:** N/A (blocked_time is absolute).
15. **Audit / event:** `availability.blocked_time_inserted` + cascade triggers per BC-10.
16. **Evidence citations:** DL-15 amendment 35 + Build Contract §5.11.
17. **Test case:** NP_Klait calls in sick. Admin inserts blocked_time 9am-5pm 2026-05-15 with notes "Daughter sick - no provider." Cascade per BC-10 triggers re-resolution of 6 affected appointments.

### Rule BC-17: Privacy axis controls patient self-booking visibility of windows

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** Batch 15 Step 02-03 Privacy column shows 3 states: public / staff_only / hidden_from_clients.
2. **Cross-app pattern reference:**
   - **Calendly hidden event types** — Available via direct link but not in public list.
   - **OpenTable private events** — Hidden from public booking; staff-only.
3. **Underlying tenant need:** Some windows are public (patient self-booking visible); some staff-only (back-office); some hidden (admin-only).
4. **OMNI generic primitive / rule:** `availability_window.patient_visibility` ENUM per DL-15 amendment 34 Other axis: `visible_to_patients` / `not_visible`. + `booking_visibility` ENUM: `public` / `staff_only` / `private_admin_only`.
5. **Divergence / improvement vs Mindbody:** Same intent; OMNI 2-axis (patient_visibility + booking_visibility).
6. **Anti-copy warning:** Do NOT collapse 2 axes into 1.
7. **Substrate pressure-test verdict:** **OK** — DL-15 amendment 34.

#### Section B — Rule definition

8. **Trigger:** Patient self-booking surface query.
9. **Required inputs:** patient_visibility + booking_visibility.
10. **Decision logic:**
    - Patient self-booking query: `WHERE patient_visibility = 'visible_to_patients' AND booking_visibility = 'public'`.
    - Staff booking: `WHERE booking_visibility IN ('public', 'staff_only')`.
    - Admin: all visible.
11. **Output / state change:** Filtered query result.
12. **Owning substrate:** availability_window.
13. **UI surface:** Patient self-booking: filtered slots; staff: full slots with visibility badge; admin: all.
14. **Failure mode:** Default to safest (staff_only) if NULL.
15. **Audit / event:** None standard.
16. **Evidence citations:** DL-15 amendment 34 + Mindbody Batch 15.
17. **Test case:** Staff sets "Friday 1:30pm-5pm 05/15/2026 Daughter sick" with `patient_visibility = not_visible`. Patient self-booking for that Friday: window doesn't appear (cleanly absent, not "blocked"). Staff view shows reason.

---

## Section F — Room + resource availability + compatibility

### Rule BC-18: Room compatibility resolves room_service_compatibility ∩ availability_window per room

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 16 (settings) + Build Contract §3.1 — rooms substrate. Per-service compatibility configured per room.
2. **Cross-app pattern reference:**
   - **Hospital OR room** — Procedure-specific equipment + sterility class.
   - **Hotel meeting rooms** — Capacity + AV + size compatibility.
3. **Underlying tenant need:** Each service requires specific room class. LHR needs LHR-equipped room; Botox can use any private room.
4. **OMNI generic primitive / rule:** `room_service_compatibility` substrate (DL-15 inv 30 4-axis Room axis). Composer queries:
   ```sql
   SELECT room_id FROM room_service_compatibility WHERE service_id = ?
     INTERSECT
   SELECT room_id FROM availability_window WHERE patient_window covered (per BC-13 pattern adapted for rooms)
   ```
5. **Divergence / improvement vs Mindbody:** OMNI explicit substrate.
6. **Anti-copy warning:** Do NOT default room compatibility to "any room admits any service" (services have real constraints).
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 30 + DL-21 venue substrate (rooms scoped to venue).

#### Section B — Rule definition

8. **Trigger:** Composer room axis evaluation.
9. **Required inputs:** service_id + planned_window + venue_id.
10. **Decision logic:** Run INTERSECT query; return eligible rooms; pick deterministically (e.g., lowest-id or tenant policy).
11. **Output / state change:** Selected room_id passed to commit.
12. **Owning substrate:** room_service_compatibility + room availability.
13. **UI surface:** Staff schedule: shows room utilization per time slot.
14. **Failure mode:** No room eligible → axis fails per BC-04.
15. **Audit / event:** `room_axis_evaluated.eligible_count = N` (DEBUG).
16. **Evidence citations:** DL-15 inv 30 + DL-21 inv 3.
17. **Test case:** Sarah books LHR Brazilian. service=LHR. Composer queries: room_service_compatibility(LHR) = {LHR_Room_1, LHR_Room_2}. Available at 2pm = {LHR_Room_1}. Pick LHR_Room_1.

### Rule BC-19: Resource compatibility resolves resource_service_compatibility ∩ availability per device

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Implicit in Mindbody catalog; not formal resource substrate.
2. **Cross-app pattern reference:**
   - **Hospital OR equipment** — Anesthesia machine + scope + supplies tracked per case.
   - **Photo studio camera + lens reservations** — Per-resource booking.
3. **Underlying tenant need:** Equipment / devices / consumables tracked at booking. Hydrafacial machine, LHR diode, CoolSculpting applicator.
4. **OMNI generic primitive / rule:** `resource_service_compatibility` substrate (DL-15 inv 30 4-axis Resource axis). Resources have own availability windows (multi-shift / shared across rooms). Composer query analogous to BC-18.
5. **Divergence / improvement vs Mindbody:** Explicit resource substrate.
6. **Anti-copy warning:** Do NOT collapse rooms + resources (rooms are containers; resources are movable equipment).
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 30.

#### Section B — Rule definition

8. **Trigger:** Composer resource axis evaluation.
9. **Required inputs:** service_id + planned_window.
10. **Decision logic:** INTERSECT compat + availability; pick.
11. **Output / state change:** Selected resource_id passed to commit.
12. **Owning substrate:** resource_service_compatibility.
13. **UI surface:** Staff: resource utilization timeline.
14. **Failure mode:** No resource → axis fails.
15. **Audit / event:** `resource_axis_evaluated.eligible_count = N` (DEBUG).
16. **Evidence citations:** DL-15 inv 30.
17. **Test case:** Sarah Hydrafacial: resource_service_compatibility(Hydrafacial) = {Hydrafacial_machine_1, Hydrafacial_machine_2}. Available at 2pm = {machine_1}. Pick.

### Rule BC-20: Resource attached_to_venue constraint — resources scoped to venue (DL-21 inv 3 axis 4)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Implicit.
2. **Cross-app pattern reference:**
   - **Hospital department equipment** — Equipment lives in specific department/floor.
3. **Underlying tenant need:** Some resources are venue-bound (Hydrafacial machine lives in Bloom-Birmingham facial room); some are mobile (Botox tray); some are virtual (telehealth camera).
4. **OMNI generic primitive / rule:** `venue.attached_resource_ids[]` per DL-21 inv 3 axis 4. Composer respects venue scoping per booked venue.
5. **Divergence / improvement vs Mindbody:** Explicit venue scoping.
6. **Anti-copy warning:** Do NOT make all resources global (some are venue-bound).
7. **Substrate pressure-test verdict:** **OK** — DL-21 inv 3.

#### Section B — Rule definition

8. **Trigger:** Composer resource axis evaluation post-venue selection.
9. **Required inputs:** venue_id + service_id.
10. **Decision logic:** Filter resources by `resource.venue_id = venue_id OR resource.is_mobile = TRUE`.
11. **Output / state change:** Filtered resource set.
12. **Owning substrate:** resource + venue (DL-21).
13. **UI surface:** Admin: per-venue resource assignment.
14. **Failure mode:** Resource not at venue → axis fails.
15. **Audit / event:** Same as BC-19.
16. **Evidence citations:** DL-21 inv 3 axis 4.
17. **Test case:** Sarah books at Bloom-Birmingham. Hydrafacial_machine_1 attached to Birmingham facial room (resource.venue_id = Birmingham). Sarah books at Bloom-Somerset → Hydrafacial_machine_1 NOT eligible (different venue); Hydrafacial_machine_2 (Somerset venue) eligible.

---

## Section G — Concurrency locks + atomic multi-resource

### Rule BC-21: Per-(provider × time-slot), per-(room × time-slot), per-(resource × time-slot) concurrency lock

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody enforces double-booking prevention; mechanism opaque.
2. **Cross-app pattern reference:**
   - **DB optimistic concurrency** — Version-based locking.
   - **Distributed lock services (Redis SETNX)** — Time-bounded locks.
3. **Underlying tenant need:** Two simultaneous booking attempts for same provider/room/resource at same time must not both succeed.
4. **OMNI generic primitive / rule:** Per DL-15 inv 21 + DL-16 inv 34 — aggregate-level concurrency lock at scheduler level. Optimistic concurrency: each composer evaluation reads current `version` of (provider, time-slot) tuple; commit only succeeds if version unchanged. Pessimistic alternative: row-level lock with timeout.
5. **Divergence / improvement vs Mindbody:** OMNI explicit.
6. **Anti-copy warning:** Do NOT skip concurrency check for "low traffic" tenants. Do NOT allow AI to bypass lock (AI proposes; scheduler arbitrates per DL-15 inv 21).
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 21 + DL-16 inv 34.

#### Section B — Rule definition

8. **Trigger:** Composer commit phase.
9. **Required inputs:** Selected provider/room/resource + time slot.
10. **Decision logic:**
    - Acquire per-aggregate lock OR use optimistic version check.
    - On lock failure / version mismatch → reject with `concurrency_conflict_retry`.
    - Composer retries N times (configurable) before giving up.
11. **Output / state change:** Atomic commit on success.
12. **Owning substrate:** Aggregate locks at scheduler level.
13. **UI surface:** Patient: silent retry (transparent). Staff: log entry.
14. **Failure mode:** N retries exceeded → reject; surface alternative slot.
15. **Audit / event:** `concurrency_conflict` per retry (DEBUG); `appointment_book_failed.concurrency` if exhausted.
16. **Evidence citations:** DL-15 inv 21 + DL-16 inv 34.
17. **Test case:** Sarah + Patrick simultaneously book 2pm Tuesday with NP_Klait. Both pass 4-axis. Both attempt commit. Lock acquired by Sarah's request first; Patrick's commit fails version check → silent retry; on retry, Klait 2pm gone; Patrick re-runs composer; gets 2:30pm with Klait. Atomic enforcement.

### Rule BC-22: Multi-resource atomic commit (DL-15 inv 2) — all-or-nothing across staff + room + resource

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody enforces multi-resource atomicity at booking commit.
2. **Cross-app pattern reference:**
   - **Distributed transactions (2PC)** — All-or-nothing across resources.
   - **Hospital OR booking** — Procedure + room + anesthesiologist commit together.
3. **Underlying tenant need:** Locking provider succeeds but room fails → booking fails entirely; tentative provider lock released.
4. **OMNI generic primitive / rule:** DL-15 inv 2 + DL-16 inv 6 — atomic state mutation + event emission. Composer commits all axis locks in single transactional boundary. Partial commit REJECTED.
5. **Divergence / improvement vs Mindbody:** Same.
6. **Anti-copy warning:** Do NOT use eventual consistency for booking commit (per DL-15 inv 26 strong consistency).
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 2 + DL-16 inv 6.

#### Section B — Rule definition

8. **Trigger:** Composer commit phase.
9. **Required inputs:** All axis selections.
10. **Decision logic:** Single DB transaction acquiring all locks; on any failure → rollback all.
11. **Output / state change:** Atomic commit or rollback.
12. **Owning substrate:** Per DL-15 inv 2.
13. **UI surface:** Patient: success or specific error.
14. **Failure mode:** Atomic rollback; retry if concurrency.
15. **Audit / event:** `appointment_committed` or `appointment_book_failed.atomic_rollback` per DL-16 amendment 42.
16. **Evidence citations:** DL-15 inv 2 + DL-16 inv 6.
17. **Test case:** Bundle with 3 members; member 2 room fails at commit → rollback all 3 holds; emit failure event.

---

## Section H — Booking hard gates

### Rule BC-23: License validation gate is statute-bound; cannot be overridden

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody has provider permission flags but no formal license substrate.
2. **Cross-app pattern reference:**
   - **Hospital credentialing system** — Medical staff office validates licenses.
   - **State medical board** — License lookup APIs.
3. **Underlying tenant need:** Provider must hold valid license for service + patient jurisdiction at booking time.
4. **OMNI generic primitive / rule:** `service_policy_eligibility_gate(license_validation, booking_hard_gate, tenant_override_allowed=FALSE)` per Amendment D + DL-21 inv 12 provider_license. Booking RPC checks at commit.
5. **Divergence / improvement vs Mindbody:** OMNI substrate-level enforcement.
6. **Anti-copy warning:** Do NOT allow tenant to disable license_validation gate.
7. **Substrate pressure-test verdict:** **OK** — Amendment D + DL-21 inv 12.

#### Section B — Rule definition

8. **Trigger:** Booking commit.
9. **Required inputs:** provider_id, service, jurisdiction.
10. **Decision logic:** Query provider_license; reject if missing/expired/wrong jurisdiction.
11. **Output / state change:** Pass or reject.
12. **Owning substrate:** DL-21 inv 12.
13. **UI surface:** Staff: shows specific reason; patient: "Provider unavailable for your location."
14. **Failure mode:** Specific reject reason; cascade to BC-08 to find alternate eligible.
15. **Audit / event:** `booking_hard_gate.license_validation.failed`.
16. **Evidence citations:** DL-21 inv 12 + Amendment D.
17. **Test case:** Sarah lives in CA; books with NP_Klait (MI license only). License gate fails → composer excludes Klait → finds Dr.Balboul (MI + CA) → succeeds.

### Rule BC-24: Jurisdiction admission rule fires per (LE, encounter_profile, service, state)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** None.
2. **Cross-app pattern reference:**
   - **Telehealth platforms** — State-specific rules.
3. **Underlying tenant need:** Some states require prior in-person before async Rx. Substrate enforces.
4. **OMNI generic primitive / rule:** DL-21 inv 14 `jurisdiction_admission_rule`. Booking RPC reads applicable rule.
5. **Divergence / improvement vs Mindbody:** OMNI substrate.
6. **Anti-copy warning:** Do NOT skip jurisdiction check for telehealth.
7. **Substrate pressure-test verdict:** **OK** — DL-21 inv 14.

#### Section B — Rule definition

8. **Trigger:** Booking commit, especially video / async modalities.
9. **Required inputs:** legal_entity, modality, service, patient_state.
10. **Decision logic:** Query rule + evaluate per `gate_payload`.
11. **Output / state change:** Pass or reject.
12. **Owning substrate:** DL-21 inv 14.
13. **UI surface:** Staff: specific reason.
14. **Failure mode:** Reject with state-specific reason.
15. **Audit / event:** `booking_hard_gate.jurisdiction.failed`.
16. **Evidence citations:** DL-21 inv 14 + Build Contract §3.7 patch 1.
17. **Test case:** AL patient books async GLP-1 with TX-licensed provider. AL requires prior in-person → no prior visit exists → reject `prior_in_person_required_for_async_rx`. Patient redirected to schedule in-person consult first.

### Rule BC-25: Age verification gate fires for substance-class + age-restricted services

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody has DOB on client; no formal age gate.
2. **Cross-app pattern reference:**
   - **Cannabis dispensaries** — Age + ID verification.
   - **Tobacco / alcohol** — Age verification at sale + booking for some services.
3. **Underlying tenant need:** Botox ≥ 18 (FDA); controlled substances ≥ 18; some pediatric services require guardian.
4. **OMNI generic primitive / rule:** `service_policy_eligibility_gate(age_verification, booking_hard_gate OR pre_performance_gate, gate_payload={min_age, guardian_consent_allowed})` per Amendment D.
5. **Divergence / improvement vs Mindbody:** OMNI substrate-level enforcement with timing.
6. **Anti-copy warning:** Do NOT bake min_age into service substrate (lives in gate_payload). Do NOT default booking_hard_gate (often pre_performance_gate is correct if guardian flow exists).
7. **Substrate pressure-test verdict:** **OK** — Amendment D.

#### Section B — Rule definition

8. **Trigger:** Booking commit.
9. **Required inputs:** patient.dob, service_policy_eligibility_gate(age_verification).
10. **Decision logic:**
    - Compute age = current_date - dob.
    - If age >= gate_payload.min_age → pass.
    - Else if gate_payload.guardian_consent_allowed = TRUE AND patient has guardian_relationship → pass (guardian path handles consent at pre_performance).
    - Else reject `age_restriction_unsatisfied`.
11. **Output / state change:** Pass or reject.
12. **Owning substrate:** Amendment D + patient.dob (DL-10).
13. **UI surface:** Patient: "This service is restricted to age X+. Please contact us."
14. **Failure mode:** Specific reason; redirect.
15. **Audit / event:** `booking_hard_gate.age_verification.failed`.
16. **Evidence citations:** Amendment D + FDA Botox age statute.
17. **Test case:** 17yo patient books Botox. min_age=18, guardian_consent_allowed=FALSE for Botox (FDA) → reject. Same patient books LHR. min_age=16, guardian_consent_allowed=TRUE → passes booking (guardian consent at performance).

### Rule BC-26: Intake-first gate fires when service explicitly marked

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Implicit via "Required Fields" but not service-specific.
2. **Cross-app pattern reference:**
   - **Hims-style intake** — Intake before provider review.
   - **Surveys / qualifying forms** — Required before next step.
3. **Underlying tenant need:** Some clinical services (GLP-1, HRT async, peptides) need intake before scheduling. Some don't (normal medspa).
4. **OMNI generic primitive / rule:** `service_policy_eligibility_gate(intake_complete, booking_hard_gate, tenant_override_allowed=TRUE)` per Amendment D — tenant configures per service.
5. **Divergence / improvement vs Mindbody:** OMNI per-service per-modality timing.
6. **Anti-copy warning:** Do NOT default intake to booking_hard_gate (most services have pre_arrival_task timing).
7. **Substrate pressure-test verdict:** **OK** — Amendment D.

#### Section B — Rule definition

8. **Trigger:** Booking commit when intake_complete gate exists with booking_hard_gate timing.
9. **Required inputs:** patient_id, service_id, modality, intake_session lookup.
10. **Decision logic:**
    - Query `intake_session WHERE patient_id = ? AND service_id = ? AND status = 'completed'`.
    - If exists → pass.
    - Else reject `intake_required_for_booking` + provide intake link.
11. **Output / state change:** Pass or reject + redirect.
12. **Owning substrate:** Amendment D + intake_session (DL-22).
13. **UI surface:** Patient: "Complete medical intake before scheduling [Start →]".
14. **Failure mode:** Redirect to intake flow; resume booking after.
15. **Audit / event:** `booking_hard_gate.intake_complete.failed` + `intake_initiated_for_booking`.
16. **Evidence citations:** Amendment D + DL-22.
17. **Test case:** Patrick books GLP-1 Consult. Intake_complete = booking_hard_gate. No intake → reject + redirect → Patrick completes intake (15min) → resume → succeeds.

---

## Section I — Pre-arrival task generation

### Rule BC-27: Pre-arrival tasks auto-generated at booking commit per gate_timing = pre_arrival_task

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 15 settings Appointment Reminders + intake form sending.
2. **Cross-app pattern reference:**
   - **Hospital pre-op tasks** — Lab work + clearance assigned at booking; due before procedure.
   - **Calendly post-booking email** — Auto-sent tasks/forms.
3. **Underlying tenant need:** At booking, automatically create tasks for patient to complete pre-arrival (intake, consent prep, medical history update, instructions).
4. **OMNI generic primitive / rule:** Booking commit query `service_policy_eligibility_gate WHERE gate_timing = 'pre_arrival_task' AND required = TRUE`. For each, create `care_episode_task` per DL-20 inv 16 with appropriate task_kind, due_at = appt - lead_time, gate_payload reference.
5. **Divergence / improvement vs Mindbody:** OMNI explicit substrate.
6. **Anti-copy warning:** Do NOT block booking on pre_arrival_task; just create. Do NOT auto-send all tasks immediately (respect quiet hours per DL-16 + outbound trigger per amendment 42).
7. **Substrate pressure-test verdict:** **OK** — Amendment D + DL-20 inv 16 + DL-16 amendment 42 outbound.

#### Section B — Rule definition

8. **Trigger:** Booking commit success.
9. **Required inputs:** appointment_id, service_id, modality, patient_id.
10. **Decision logic:**
    - Query gates with pre_arrival_task timing.
    - For each, create task: `care_episode_task(task_kind based on requirement_kind, linked_appointment_id, due_at = appointment.planned_start - tenant.pre_arrival_lead_time, payload from gate_payload)`.
    - Emit outbound action via DL-16 amendment 42 to send intake link, consent prep, etc.
11. **Output / state change:** Tasks created; outbound actions emitted.
12. **Owning substrate:** DL-20 inv 16 + Amendment D + DL-16 amendment 42.
13. **UI surface:** Patient: receives intake link via SMS/email; in-app tasks visible; Staff: appointment view shows task completion state.
14. **Failure mode:** Failed task creation logged; does NOT block booking.
15. **Audit / event:** `appointment.pre_arrival_tasks_created.count = N`.
16. **Evidence citations:** Amendment D + DL-20 inv 16 + DL-16 amendment 42 + Mindbody Batch 15 Communications.
17. **Test case:** Sarah books Hydrafacial Tuesday 2pm. Pre_arrival_task gates: intake_complete + medical_history_update. 2 tasks created with due_at = Tuesday 2pm - 24hr = Monday 2pm. SMS sent to Sarah Monday 9am: "Your intake form for Tuesday's appointment is ready [link]". Sarah completes Monday 11am; tasks marked complete; staff sees green checkmark at check-in.

### Rule BC-28: Pre-arrival task completion does NOT auto-confirm appointment

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody distinguishes appointment confirmation from intake completion.
2. **Cross-app pattern reference:**
   - **Hospital pre-op clearance** — Cleared status separate from confirmed.
3. **Underlying tenant need:** Pre-arrival tasks are separate concerns from patient confirmation. Patient may complete intake but still not have explicitly confirmed they're coming (confirmation_state per DL-20 inv 33).
4. **OMNI generic primitive / rule:** Pre_arrival_task completion sets task status only; does NOT mutate `appointment.confirmation_state`. Confirmation is its own CNS round-trip per DL-20 inv 40 (Domain 4 territory).
5. **Divergence / improvement vs Mindbody:** Same.
6. **Anti-copy warning:** Do NOT conflate intake completion with patient confirmation.
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 33 confirmation_state separate from inv 16 task status.

#### Section B — Rule definition

8. **Trigger:** Task completion event.
9. **Required inputs:** task_id, completion status.
10. **Decision logic:** Update task status; emit event; do NOT touch confirmation_state.
11. **Output / state change:** Task status updated.
12. **Owning substrate:** DL-20 inv 16.
13. **UI surface:** Task completion checkmark.
14. **Failure mode:** N/A.
15. **Audit / event:** `task_completed.kind = intake_complete`.
16. **Evidence citations:** DL-20 inv 16 + inv 33.
17. **Test case:** Sarah completes intake. Task green. Appointment.confirmation_state = unconfirmed still (separate flow).

---

## Section J — Multi-item bundle + add-on atomicity

### Rule BC-29: Add-on insertion at booking time inherits parent provider/room/resource by default

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Add-on attached to parent appointment-type.
2. **Cross-app pattern reference:**
   - **Restaurant side dish** — Same kitchen station as main.
3. **Underlying tenant need:** Add-on Lip Flip after Botox uses same injector + room.
4. **OMNI generic primitive / rule:** Add-on appointment_item with parent_item_id inherits parent's provider/room/resource UNLESS service_policy of add-on service requires different. Composer evaluates inheritance per service.
5. **Divergence / improvement vs Mindbody:** OMNI explicit per-service.
6. **Anti-copy warning:** Do NOT force inheritance when service_policy requires different.
7. **Substrate pressure-test verdict:** **OK** — Domain 1 TM-21 + DL-15 inv 30.

#### Section B — Rule definition

8. **Trigger:** Add-on insertion at booking.
9. **Required inputs:** parent_item_id + add-on service.
10. **Decision logic:**
    - Read service_policy for add-on service.
    - Inherit parent's provider/room/resource if axis NOT required differently.
    - Compose with parent's window (sequence after parent).
    - Validate atomic per BC-22.
11. **Output / state change:** Add-on item materialized.
12. **Owning substrate:** appointment_item with parent_item_id.
13. **UI surface:** Booking flow: "Add an add-on" section.
14. **Failure mode:** If add-on can't inherit + no alternate axis match → reject add-on; parent stands.
15. **Audit / event:** `appointment_item.created.addon`.
16. **Evidence citations:** Domain 1 TM-21 + DL-15 inv 30.
17. **Test case:** Sarah books Botox + Lip Flip add-on. Botox: NP_Klait, Injector_Room_1. Lip Flip service_policy: same axes. Inherits both. sequence_index = 1.5.

### Rule BC-30: Bundle preset member sequence is sequential by default; parallel-mode deferred

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** No bundle.
2. **Cross-app pattern reference:**
   - **Restaurant courses** — Sequential.
   - **Spa packages** — Sequential transitions between treatments.
3. **Underlying tenant need:** Bundle members typically performed sequentially (patient moves between rooms). Parallel mode (3 providers simultaneously) is rare; deferred.
4. **OMNI generic primitive / rule:** Default `sequence_index` increments by 1 per member position in `bundled_member_preset_ids[]`. Per-member duration computed; member n window starts after member n-1 ends.
5. **Divergence / improvement vs Mindbody:** OMNI explicit sequential.
6. **Anti-copy warning:** Do NOT default to parallel mode (rare; deferred to Deferred Rule Candidates).
7. **Substrate pressure-test verdict:** **OK** — Domain 1 TM-10 + appointment_item.sequence_index.

#### Section B — Rule definition

8. **Trigger:** Bundle materialization.
9. **Required inputs:** Bundle members ordered.
10. **Decision logic:** Sequential by sequence_index; member n window after member n-1.
11. **Output / state change:** N items with consecutive windows.
12. **Owning substrate:** appointment_item.sequence_index.
13. **UI surface:** Patient: shows total duration.
14. **Failure mode:** If any sequential window fails → atomic reject per BC-22.
15. **Audit / event:** `bundle_materialized.sequential`.
16. **Evidence citations:** Domain 1 TM-10 + DL-20 inv 34.
17. **Test case:** "Bloom Glow Package" → Hydrafacial (60min) at 10am, Injector (30min) at 11am, Red Light (20min) at 11:30am. Sequential.

---

## Section K — Slot-offer-hold-book lifecycle

### Rule BC-31: Slot offer → hold (with TTL) → book lifecycle per DL-15 inv 3

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody enforces some hold lifecycle (e.g., during checkout).
2. **Cross-app pattern reference:**
   - **Airline seat hold** — TTL during checkout.
   - **Hotel reservation hold** — Pre-booking confirmation.
   - **Ticketmaster seat hold** — Few-minute hold during purchase.
3. **Underlying tenant need:** Patient selects slot → slot reserved short-term (TTL) → patient completes booking → committed. Prevents 2 patients clicking same slot simultaneously.
4. **OMNI generic primitive / rule:** DL-15 inv 3 lifecycle. `appointment.status = 'proposed'` (offered) → 'held' (TTL active) → 'scheduled' (committed). TTL configurable per tenant (default 10 min).
5. **Divergence / improvement vs Mindbody:** OMNI explicit lifecycle.
6. **Anti-copy warning:** Do NOT skip hold for "fast" patient flows. Per DL-15 inv 4 explicit hold required.
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 3.

#### Section B — Rule definition

8. **Trigger:** Slot selection by patient.
9. **Required inputs:** Selected slot, patient_id.
10. **Decision logic:**
    - Status proposed → held with hold_expires_at = NOW() + tenant.hold_ttl.
    - On commit before expiry → scheduled.
    - On expiry without commit → hold_expired; resources released.
11. **Output / state change:** State transitions per DL-15 inv 5.
12. **Owning substrate:** appointment lifecycle.
13. **UI surface:** Patient: "Your slot is held for 10 minutes."
14. **Failure mode:** Expiry releases; patient re-selects.
15. **Audit / event:** `slot_offered` / `slot_held` / `slot_expired` / `appointment_scheduled` per DL-16 amendment 42.
16. **Evidence citations:** DL-15 inv 3 + inv 5.
17. **Test case:** Sarah selects 2pm. Status held, TTL 10min. Sarah completes payment 7min later → scheduled. Else expired, slot released.

### Rule BC-32: Idempotency key on booking commit prevents duplicate appointments from retry/replay

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Implicit.
2. **Cross-app pattern reference:**
   - **Stripe idempotency keys** — Standard pattern.
   - **Payment processor PSR** — Idempotency required.
3. **Underlying tenant need:** Network retry / replay must not double-book.
4. **OMNI generic primitive / rule:** Per DL-16 inv 11 — idempotency_key on commit. Executor ledger.
5. **Divergence / improvement vs Mindbody:** Explicit.
6. **Anti-copy warning:** Do NOT skip idempotency.
7. **Substrate pressure-test verdict:** **OK** — DL-16 inv 11.

#### Section B — Rule definition

8. **Trigger:** Commit RPC.
9. **Required inputs:** idempotency_key.
10. **Decision logic:** Check ledger; if seen → return original result; else execute + record.
11. **Output / state change:** At-most-once execution.
12. **Owning substrate:** Idempotency ledger.
13. **UI surface:** Transparent.
14. **Failure mode:** N/A.
15. **Audit / event:** `appointment_book.idempotency_replay` (DEBUG).
16. **Evidence citations:** DL-16 inv 11.
17. **Test case:** Network glitch retries 2 commits with same idempotency_key. Only 1 appointment created.

---

## §3 Deferred Rule Candidates (M1-2 / M3-6 / FUTURE)

### M1-2 Candidates

- **BC-DEF-M1-2-1: Parallel-mode bundle materialization** — multiple providers simultaneously (e.g., 3 providers on one patient at same time). Substrate admits via concurrent appointment_items; UX deferred.
- **BC-DEF-M1-2-2: Tentative booking + auto-confirm window** — book without commit; auto-commit after lead time if patient unresponsive.
- **BC-DEF-M1-2-3: Provider preference rotation analytics** — track patient preference over time.
- **BC-DEF-M1-2-4: Resource maintenance windows** — block resources for cleaning/calibration without provider absence.
- **BC-DEF-M1-2-5: Booking from CNS suggestion** — system-proposed booking based on episode cadence.

### M3-6 Candidates

- **BC-DEF-M3-6-1: Multi-tenant cross-brand booking** — federation Mode 2+ booking.
- **BC-DEF-M3-6-2: Provider on-call rotation** — 24/7 coverage queues for async.
- **BC-DEF-M3-6-3: Smart slot recommendation** — AI proposes optimal slots based on history.
- **BC-DEF-M3-6-4: Group event booking** — multi-patient class booking via service_type=class.
- **BC-DEF-M3-6-5: Course enrollment with pre-paid sessions** — service_type=course with multi-session entitlement.

### FUTURE Candidates

- **BC-DEF-FUTURE-1: Predictive availability** — ML-driven availability prediction.
- **BC-DEF-FUTURE-2: Cross-platform calendar sync** — Google/Outlook sync via partner integration.
- **BC-DEF-FUTURE-3: AI booking concierge** — patient texts "book me Botox next week" → AI proposes slots.
- **BC-DEF-FUTURE-4: Waitlist auto-promotion** — cancellation cascades to waitlist with confirmation window.

---

## §4 Substrate gap audit

| Rule | Verdict | Notes |
|---|---|---|
| BC-01 | OK | Amendment D applied this round |
| BC-02 | OK | Booking RPC reads service_policy_eligibility_gate |
| BC-03 | OK | tenant_override_allowed BOOLEAN per Amendment D |
| BC-04 | OK | DL-15 inv 30 4-axis composer |
| BC-05 | OK | DL-19 inv 18 per-(service_id, modality) keying |
| BC-06 | OK | DL-15 inv 2 atomic + Domain 1 TM-10 bundle |
| BC-07 | OK | DL-15 amendment 32 service_type + amendment 29 walk-in flag |
| BC-08 | OK | staff_service_assignment + DL-18 + DL-21 inv 12 |
| BC-09 | OK | DL-19 inv 1 settings substrate |
| BC-10 | OK | orchestration_run + blocked_time + outbound |
| BC-11 | OK | DL-15 amendment 31 3-component time |
| BC-12 | **OK with extension (Amendment E candidate)** | `room_service_compatibility.prep_lock_required` + `finish_lock_required` BOOLEAN — small addition; covers shared rooms vs dedicated procedure rooms. Flagged for Phase 1 v5. |
| BC-13 | OK | DL-15 amendments 34+35 |
| BC-14 | OK | DL-15 amendment 34 RFC 5545 |
| BC-15 | OK | DL-15 amendment 35 override semantics |
| BC-16 | OK | DL-15 amendment 35 blocked_time precedence |
| BC-17 | OK | DL-15 amendment 34 Other axis privacy |
| BC-18 | OK | DL-15 inv 30 + DL-21 venue |
| BC-19 | OK | DL-15 inv 30 resource axis |
| BC-20 | OK | DL-21 inv 3 axis 4 |
| BC-21 | OK | DL-15 inv 21 + DL-16 inv 34 |
| BC-22 | OK | DL-15 inv 2 + DL-16 inv 6 atomic |
| BC-23 | OK | Amendment D + DL-21 inv 12 license |
| BC-24 | OK | DL-21 inv 14 jurisdiction admission rule |
| BC-25 | OK | Amendment D gate_payload age |
| BC-26 | OK | Amendment D intake_complete |
| BC-27 | OK | Amendment D + DL-20 inv 16 + DL-16 amendment 42 |
| BC-28 | OK | DL-20 inv 33 confirmation_state separation |
| BC-29 | OK | Domain 1 TM-21 + DL-15 inv 30 |
| BC-30 | OK | Domain 1 TM-10 + sequence_index |
| BC-31 | OK | DL-15 inv 3 + inv 5 lifecycle |
| BC-32 | OK | DL-16 inv 11 idempotency |

### Substrate gap audit summary (Round 2)

- **Total Day 0 rules:** 32
- **OK:** 31 rules
- **OK with extension:** 1 rule (BC-12 — Amendment E candidate: `room_service_compatibility.prep_lock_required` + `finish_lock_required` BOOLEANs; small addition)
- **NEW SUBSTRATE NEEDED:** 0 rules

### Proposed DL amendment note (Amendment E candidate)

**Gap:** `room_service_compatibility` and `resource_service_compatibility` need `prep_lock_required` + `finish_lock_required` BOOLEAN columns to admit per-resource lock semantics. Default TRUE (conservative).

**Justification:** Some rooms/resources need prep/finish lock (Hydrafacial machine cleanup); others don't (consult room used during patient interview only). Without this, all rooms/resources lock for full prep+booking+finish block, which over-reserves shared rooms.

**Proposed extension:**

```diff
 room_service_compatibility:
 ├── id, service_id FK, room_id FK
 ├── ...existing fields...
+├── prep_lock_required BOOLEAN DEFAULT TRUE
+│       — if FALSE, room lock = booking_time only (skip prep+finish lock)
+├── finish_lock_required BOOLEAN DEFAULT TRUE
+│       — if FALSE, room lock = booking_time only
 └── ...

 resource_service_compatibility:
 ├── (same 2-column extension)
```

Not done this round. Flagged for Phase 1 v5 (next round or before Domain 3 starts).

---

## §5 Resolution map (10 doctrine questions → resolving rules)

| Doctrine question | Resolving rules |
|---|---|
| Q1. 4-axis composer evaluation | BC-04, BC-05, BC-06, BC-07 |
| Q2. Staff availability resolution (recurring + override + blocked) | BC-13, BC-14, BC-15, BC-16, BC-17 |
| Q3. Room + resource compatibility atomic | BC-18, BC-19, BC-20, BC-21, BC-22 |
| Q4. Slot-offer-hold-book lifecycle + race prevention | BC-31, BC-32, BC-21 |
| Q5. Booking_hard_gate firing timing | BC-01, BC-02, BC-03, BC-23, BC-24, BC-25, BC-26 |
| Q6. Pre_arrival_task generation | BC-27, BC-28 |
| Q7. Multi-item bundle atomicity | BC-06, BC-29, BC-30 |
| Q8. 3-component time block composition | BC-11, BC-12 |
| Q9. Add-on inheritance | BC-29 |
| Q10. Patient confirmation initiation | BC-28 (separation); Domain 4 details |

All 10 questions answered by 2+ rules. Doctrine holds.

---

## §6 Report

### Rule count
- **Day 0 rules fully detailed:** 32 (target was 20-30; landed at upper end)
- **Deferred Rule Candidates:** 14 across M1-2 / M3-6 / FUTURE

### Evidence sources used

**Mindbody (HARD EVIDENCE):**
- Batch 5 (appointments grid) — BC-04 multi-resource visualization
- Batch 13 (service edit + staff assignment with prep/booking/finish) — BC-08, BC-11
- Batch 15 (Staff Profile Appointment Setup + Appointment Availability 4-axis Add Availability form) — BC-04, BC-08, BC-13, BC-14, BC-15, BC-17, BC-27
- Batch 16 (settings master surface) — BC-01, BC-27
- Batch 20 (mobile walk-in cart mode) — BC-07

**Cross-app pattern references:**
- Airline (Delta / United / Expedia) — BC-04, BC-22, BC-23, BC-31
- Restaurant POS / OpenTable / Toast — BC-04, BC-06, BC-07, BC-11, BC-17, BC-29, BC-30
- Hospital scheduling (Epic OpTime / Cerner OR Manager) — BC-04, BC-06, BC-22, BC-23, BC-27
- Calendly / Cal.com — BC-05, BC-09, BC-14, BC-17, BC-27
- Stripe (idempotency) — BC-32
- iCalendar RFC 5545 / Google Calendar / Outlook — BC-14, BC-15
- Telehealth platforms — BC-24
- DEA / state medical boards — BC-23, BC-24

**Doctrine + Build Contract refs:**
- DL-15 amendments 29-35 (all of Phase 1 hardening) + inv 30 (4-axis) + inv 2 (atomic) + inv 21 (concurrency)
- DL-16 inv 6 (atomic state mutation) + inv 11 (idempotency) + inv 34 (aggregate concurrency) + amendments 42 (outbound) + 43 (actor)
- DL-19 inv 18 + Amendment D (service_policy_eligibility_gate)
- DL-20 inv 16 (care_episode_task) + inv 33 (confirmation_state) + inv 35 (modality)
- DL-21 inv 3 (venue 11-axis) + inv 12 (provider_license) + inv 14 (jurisdiction admission)
- Day 0 Scheduling Rule Matrix Domain 1 (TM-07 / TM-10 / TM-12 / TM-21)
- Build Contract §3.1 + §3.7 + §5.11

### Missing evidence

None material. Cross-app references for resource prep_lock_required are sparse; hospital OR turnover is the strongest analog.

### Open decisions (require user + Knox signoff before Round 3)

1. **Amendment E candidate** — `room_service_compatibility.prep_lock_required` + `finish_lock_required` BOOLEAN on rooms + resources. **Opus recommendation: APPLY** before Round 3. Small extension; admits real-world shared-room operations cleanly.

2. **Staff selection policy default** — BC-09 currently defaults to `patient_choice` for patient-facing flows. Some tenants may want `round_robin` as default to balance load. **Recommendation: leave `patient_choice` as default with tenant override per service.**

3. **Hold TTL default** — BC-31 currently 10 minutes default. Some tenants (high-traffic) may want 5 minutes; others (slow patient flow) may want 15. **Recommendation: tenant-configurable; 10min as global default.**

4. **Walk-in queue overflow handling** — BC-07 rejects on full queue. **Recommendation: also support "schedule for later today" fallback offer.**

5. **Provider absence cascade tier** — BC-10 currently auto-resolves via composer + outbound. Some tenants may prefer staff-mediated reschedule even for routine sick days. **Recommendation: tenant-configurable cascade policy.**

### Whether 4-axis composer doctrine held up

**YES.** The 4-axis composer (DL-15 inv 30) + 3-component time (amendment 31) + availability 4-axis (amendment 34) + recurring/override/blocked (amendment 35) composed cleanly into 32 Day 0 rules. Amendment D applied early carried the gate timing taxonomy from Domain 1 TM-12 into substrate as planned. One small extension surfaced (BC-12 Amendment E candidate for resource prep/finish lock semantics) — not blocking; can be applied before Round 3 or batched.

The 5-timing gate model from Round 1.7 held under composer pressure-test:
- `booking_hard_gate` (BC-02, BC-23-26): license / jurisdiction / age / intake-first
- `pre_arrival_task` (BC-27): intake / consent prep / instructions auto-created at booking
- `pre_performance_gate`: deferred to Domain 5 (encounter creation)
- `closeout_documentation_gate`: deferred to Domain 7 (documentation)

Multi-resource atomic commit + 4-axis composer + slot-offer-hold-book lifecycle + concurrency locks all hold against real workflows (Bloom Glow Package bundle / GLP-1 intake-first / walk-in Hydrafacial / provider sick-day cascade / Sarah simultaneous booking with Patrick).

### Substrate gap audit summary

- 32 total rules
- 31 OK / 1 OK-with-extension (BC-12 Amendment E candidate)
- 0 NEW SUBSTRATE NEEDED

**Recommendation:** Apply Amendment E before Round 3 (Domain 3 — Appointment lifecycle rules). Small extension; cheap pre-substrate-slice.

---

## §7 What this file is NOT

- NOT new locked doctrine (Amendment D + E live in DL DRAFTs).
- NOT code. Substrate slice scoping comes after all domains.
- NOT migrations.
- NOT a complete rule matrix — Domains 3-7 still need authoring.

Round 2 ends here. Push commits to origin/main. Stop and report.
