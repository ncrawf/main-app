# Future Care Obligations + Scheduling Foundation — Design Pressure-Test (UN-PARKED → ACT-LOOP EVIDENCE)

**Date:** 2026-05-17
**Status (updated 2026-05-31):** **UN-PARKED → active ACT-LOOP / Ordered-Fulfillment + Care-Obligations EVIDENCE** per `D0THES-DEC-031`. The Care-Coordination-CNS workstream this doc was parked behind has effectively re-opened as the **Act/Fulfillment loop** concept (thesis §8.6 names it; two governed loops §8). This artifact is now the **recovered evidence + stress-test corpus** for that lifecycle: its `care_episode_task` design (§4) = the **`care_obligation`** primitive; its 3-layer model (§1) + the industry-validation table (§2: Amazon/Tesla/FHIR/Epic/Airline/Restaurant) = the act-loop + Lens-B comparator evidence; its 15 stress tests (§3) = the pressure-test corpus. **Still NOT locked doctrine and NOT a contract** — substrate detail promotes via the Ordered-Fulfillment/Care-Obligations contract pass + `D0THES-REV-163` (own-thin-domain-vs-decompose decision). The original PARKED framing below is **superseded by this banner** (preserved as history). Per the disposition discipline: nothing here is deleted; it is recovered into the act-loop lineage.
**(Historical status, superseded:)** PARKED DESIGN PRESSURE-TEST ARTIFACT — NOT locked doctrine, NOT a new architecture doc, NOT to be expanded into DL invariants without explicit re-opening of the Care-Coordination-CNS workstream. Preserves the day's foundational pressure-testing arc so future readers (Knox, Opus, user, future maintainers) do not rehash.

**Companion artifacts:**
- Patch round v2 plan: [.cursor/plans/dl-17_to_dl-22_patch_round_v2_a05a2728.plan.md](../dl-17_to_dl-22_patch_round_v2_a05a2728.plan.md)
- Day 0 Build Contract (frozen): [.cursor/plans/designs/2026-05-17_omni_scheduling_day_0_build_contract.md](../designs/2026-05-17_omni_scheduling_day_0_build_contract.md) commit `6dc1286`
- Operating Model + Architecture synthesis: [.cursor/plans/designs/2026-05-17_omni_scheduling_operating_model_and_architecture.md](../designs/2026-05-17_omni_scheduling_operating_model_and_architecture.md)
- Foundational architecture: [.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md](../FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md)
- Federation future arc (being activated to Day 0 via DL-21): [.cursor/plans/FUTURE_ARC_2026-05-12_federation_permeability_topology.md](../FUTURE_ARC_2026-05-12_federation_permeability_topology.md)

---

## Why this document exists

The 2026-05-17 session pressure-tested OMNI scheduling foundation from "visit type" through "care obligations" across medspa / derm / GI / plastics / Hims-style async / hair salon / federal multi-LE / multi-state / multi-modality scenarios. The arc produced several genuine corrections (some painful) and a large amount of design thinking on the future-care-obligations substrate that was correctly scoped OUT of the immediate patch round but should NOT be rehashed when the Care-Coordination-CNS workstream activates.

This doc preserves:
1. The three-layer foundation that emerged + industry validation
2. Eight stress tests run during the session
3. The full care_episode_task substrate design (30+ fields, 55+ Day 0 task_kinds) PARKED for future activation
4. Lifecycle conversion rules (task → appointment → encounter → orchestration_action)
5. Four refinement gaps named for future substrate slice work
6. Rejected patterns enumerated (so they don't get re-proposed)
7. Visit-type-as-service-catalog clarification + neuromodulator-family + injectable-menu UX learning
8. LHR / CoolSculpting / SkinPen variable-scope handling
9. Entitlement redemption visibility pattern
10. Patient promo wallet + intent + application four-layer model
11. Confirmation as CNS round-trip + DL-15 amendment 8 rationale
12. Cross-link to DL-20 invariants this design pressure-tests against

**Status:** PARKED. NOT to be promoted into locked DL invariants without explicit re-opening of the Care-Coordination-CNS workstream by joint Knox + user + Opus signoff.

---

## §1 The three-layer foundation that emerged

OMNI scheduling substrate is THREE distinct primitives, not one overloaded line. Pattern matches FHIR + Epic + Cerner + Athena + Amazon + airline + restaurant + Tesla.

```text
LAYER 1 — Appointment + Appointment_item     (planned operational commitment)
    └─ FK fulfillment ─┐
                       ▼
LAYER 2 — Encounter + Encounter_line          (actual accountable care action)
                       │
                       ├─ FK to commerce_order_line  (DL-17, chargeable lines)
                       ├─ FK to clinical_object      (DL-7, longitudinal findings)
                       ├─ FK to intake_session       (DL-22, evidence)
                       ├─ FK to patient_document     (DL-22, photos/consents)
                       ├─ FK to thread_message       (existing §1Q/§1V, async case)
                       └─ FK to care_episode         (DL-20, longitudinal why)

LAYER 3 — Evidence + Commerce substrates      (linked in, not swallowed)

CARE_EPISODE_TASK substrate                   (recalls, awaits, escalations)
    └─ converts to appointment when scheduled
    └─ converts to encounter when realized
    └─ NEVER directly an appointment or encounter itself
```

**Layer 1 — Appointment + Appointment_item** = planned operational commitment. Appointment is the patient's booked time window at one venue. Appointment_item is one planned service/resource line under it (with parent_item_id for add-ons, item_origin, per-item room/resource/provider locks, sequence_index for sequential trips, prep/booking/finish per DL-15 amendment 31, planned_details JSONB validated against service.planned_detail_schema).

**Layer 2 — Encounter + Encounter_line** = actual accountable care action. Created when work begins: scheduled appointment → check-in → encounter; walk-in → encounter without upstream appointment; ad-hoc video → encounter; async provider review → encounter; lab review → encounter; message escalation → encounter. Encounter_line is atomic clinical truth: per-line provider, attestation, performed_intervention details (product/lot/quantity), linked_appointment_item_id NULL (when fulfilling planned), linked_clinical_object_id, linked_commerce_order_line_id, linked_thread_message_id.

**Layer 3 — Evidence + Commerce substrates linked in, not swallowed.** Commerce (DL-17) + Intake (DL-22) + Clinical objects (DL-7) + Messaging (§1Q/§1V) + Documents (DL-22) + Tags+metadata (DL-19). All link via FK to encounter / appointment / patient. None get swallowed by scheduling substrate.

**Care_episode_task** = future obligations and recalls. NEITHER an appointment NOR an encounter until it converts. The future-map substrate.

---

## §2 Industry validation

The three-layer pattern is convergent with how every comparable platform at $1B+ scale handles complex service delivery:

| Platform | Equivalent layers |
|---|---|
| FHIR | Appointment + Encounter + Procedure (+ EpisodeOfCare longitudinal) |
| Epic | Appointment → Check-in → Encounter → Visit Note → Charge Capture |
| Cerner | Appointment → Encounter → Document/Order/Result |
| Amazon | Order → Shipment → Delivery → Charge |
| Airline | Reservation → Flight Occurrence → Boarding + Service touches |
| Restaurant | Reservation → Table Session → Orders → Bill |
| Tesla | Service appointment → Service visit → Work order lines → Invoice |

Every $1B-scale platform that handles complex multi-step service delivery separates PLANNED COMMITMENT from ACTUAL DELIVERY from ATOMIC DETAIL. OMNI joins this convention.

---

## §3 Eight stress tests run during 2026-05-17 session

1. **Solo Botox visit** — one appointment + one appointment_item → encounter at check-in → one encounter_line (performed Botox 24u glabella) + one commerce_order_line ($420). Simple case stays simple.

2. **Multi-service medspa trip (Hydrafacial + injector + red light)** — one appointment + three appointment_items with own room/resource/provider → encounter at check-in → three encounter_lines with per-line attestation. Per-line clinical documentation: esti's note doesn't complete injector's note. Cart aggregates all chargeable lines.

3. **Concurrent endoscopy + anesthesia + 3 MAs** — one appointment + one appointment_item (procedure) → one encounter + multiple encounter_participants (GI + anesthesia + MAs) + multiple encounter_lines (scope / anesthesia / biopsy / Rx) for separately-billable components. Same room shared concurrently via overlapping participant valid_from/valid_to.

4. **Walk-in derm spot check** — no appointment. Encounter at door with arrival_kind=walk_in. Encounter_lines for evaluation + biopsy + pathology_order.

5. **Hims async HRT messaging multi-care-team** — no appointment, no container. Each clinical-decision moment is its own encounter with modality=async, arrival_kind=inbound_message_triggered, linked_thread_message_id bridging to messaging substrate. Multiple decisions link via shared care_episode_id. Patient sees one thread; substrate has multiple per-decision encounter_lines.

6. **Hair salon haircut + gloss add-on** — appointment + 2 appointment_items, second with parent_item_id. Add-on inherits parent's provider/room/time or carries own.

7. **Multi-state federal patient with cross-specialty care** — patient has relationships at multiple brands under one LE (Hims + Bloom + cardio). Cross-brand isolated by default per DL-10; permeability admitted via DL-21 inv 6. Per-state jurisdiction admission rule (DL-21 inv 14) reads patient location + provider license at action time. Holds.

8. **Catastrophic adverse event with multi-day cascade** — Tuesday Botox → Wednesday morning call (eyelid ptosis) → urgent same-day appointment + encounter + ophthalmology referral + adverse event regulatory filing + cancellation of 3-month maintenance recall + new 1-week / 2-week / 1-month recall chain. Substrate handles cross-encounter linkage (Wednesday references Tuesday via care_episode), task supersession via supersedes_task_id, regulatory reporting as orchestration_action, cross-specialty referral via care_episode_task with task_kind=cross_specialty_consult_pending. Multi-day audit lineage intact.

9. **GLP-1 multi-modal multi-team multi-state** — Sarah on Hims GLP-1 + Bloom medspa, NJ resident, FL provider, abnormal lipase result, nausea message, cross-specialty GI referral. Recurring tasks on Hims episode (monthly async review + quarterly lab + annual video) generate per recurrence_rule. External lab result triggers task fulfillment + auto-emits abnormal_lab_review_required task. Cross-state jurisdiction validation at action emission. Cross-brand permeability per DL-21 inv 7. Holds.

10. **LHR / CoolSculpting / SkinPen variable scope** — Mindbody's 5-pricing-options-per-area-count anti-pattern eliminated. ONE service catalog row per service kind + quantity_strategy=per_unit_quantity + planned_quantity + planned_treatment_areas[] in planned_details JSONB. Booking-vs-performance scope drift (booked 1 area, performed 5 areas) captured natively via Q9 planned-vs-performed line distinction.

11. **SkinPen 3-pack entitlement "visit 2 of 3"** — DL-17 inv 22 entitlement + inv 23 entitlement_redemption already cover. Substrate carries redemption_count + redemptions_used + redemption_index. UI projection at booking + check-in + sale surfaces "visit 2 of 3, 1 remaining, expires 8/15." Mindbody's "staff must dig and infer" pattern eliminated.

12. **Multi-benefit monthly membership** — autopay_contract (DL-17 inv 11) recurrence with contract_recurrence_template granting entitlements (free Hydrafacial, free peel) + updating patient_metadata (membership_tier for 20% off Botox eligibility) + setting operational flags (priority booking). Composition of existing primitives. Membership is NOT a payment method.

13. **Neuromodulator-family / injectable-menu booking UX** — hierarchical service_category + appointment_item.planned_service_category_id allows category-level booking (patient books "Neuromodulator" without picking brand) OR specific service booking (patient books "Dysport directly"). Schema-driven planned_details (preferred_product + planned_treatment_areas[]) captures structured intent without free text. Provider sees: "Sarah at 2pm — Neuromodulator, preferred Dysport, planned glabella+masseter+forehead." Beats Mindbody/Boulevard materially.

14. **Peptide / GLP-1 / HRT / GI / cardio scheduler menus** — same hierarchical service_category + booking_preset pattern handles all specialties without specialty-coded substrate enums. Tenant configures depth + labels per their offering. Examples surfaced: Peptides & Wellness > {NAD+, Wolverine Stack, BPC-157, Anti-Aging, Provider Guidance}; Weight Loss Program > {New Patient, Follow-Up, Lab Review, Medication Adjustment}; HRT > {New Patient, Lab Review, Follow-Up, Dose Adjustment}.

15. **Multi-line booking with combo presets** — patient builds visit one service at a time (Botox + Filler + Filler + Sculptra consult) OR picks "Full Facial Balancing" combo preset (`bundled_member_preset_ids[]`). Same substrate: 1 appointment + N appointment_items.

---

## §4 Full care_episode_task substrate design (PARKED — minimal recall extension only in patch round v2)

The full substrate design is preserved here for future Care-Coordination-CNS workstream. The CURRENT patch round (v2) ships only the minimal recall extension on existing DL-20 inv 16 substrate; this full schema does NOT ship in current round.

### §4.1 Full schema (PARKED)

```text
care_episode_task

CORE IDENTITY
├── id
├── tenant_id (per DL-10 multi-tenant composite)
├── patient_id, patient_relationship_id (per DL-10 + primitive #19)

LINKAGE — why this task exists
├── care_episode_id NULL                (primary longitudinal anchor)
├── additional_care_episode_ids[] ARRAY (secondary anchors when multi-episode)
├── source_kind ENUM                    (registry-extensible per DL-16 inv 5)
├── source_id                           (FK appropriate to source_kind)
├── source_evidence_snapshot JSONB      (immutable snapshot per DL-16 inv 33)

CLASSIFICATION
├── task_kind                           (registry-extensible STRING; ~55+ Day 0 seed)
├── task_class ENUM                     (clinical / clinical_followup / 
│                                        operational / commercial / 
│                                        compliance_regulatory / marketing / 
│                                        lifecycle / coordination)
├── obligation_strength ENUM            (mandatory_clinical / 
│                                        mandatory_compliance / 
│                                        recommended_clinical / 
│                                        recommended_commercial / 
│                                        optional_marketing / discretionary)
├── severity ENUM                       (red / yellow per DL-16 amendment 41)

TEMPORAL
├── due_at TIMESTAMP NULL
├── window_start TIMESTAMP NULL         (earliest reasonable fulfillment)
├── window_end TIMESTAMP NULL           (after this = overdue per task lifecycle)
├── earliest_outreach_at TIMESTAMP NULL (earliest CNS may message)
├── recurrence_rule STRING NULL         (RFC 5545 RRULE when recurring)
├── recurrence_strategy ENUM            (lazy_next_only / eager_fixed_dates / 
│                                        single_instance)

ASSIGNMENT + OWNERSHIP
├── assigned_actor_kind                 (per DL-16 amendment 43)
├── assigned_actor_id NULL
├── ownership_queue_id NULL             (when routed to queue not specific person)
├── backup_pool_queue_id NULL           (per Build Contract §3.7 patch 5)
├── escalation_rules JSONB              (when overdue, escalate to whom + when)

LIFECYCLE
├── status ENUM                         (proposed_ai_pending_human_review / 
│                                        proposed / active / paused / 
│                                        in_progress / fulfilled / cancelled / 
│                                        superseded / expired_unfulfilled / 
│                                        archived)
├── created_at, created_by_actor        (4-tuple per DL-16 amendment 43)
├── proposed_by_ai_proposal_id NULL     (when AI proposed; per DL-14 inv 18-22)
├── confirmed_by_actor NULL             (human confirmation for AI-proposed)
├── last_state_change_at + by_actor
├── fulfillment_appointment_id FK NULL  (when task converts to scheduled)
├── fulfillment_encounter_id FK NULL    (when clinically acted on)
├── fulfillment_orchestration_action_id NULL  (when outbound satisfies)
├── fulfillment_evidence JSONB

CROSS-TASK RELATIONSHIPS
├── parent_task_id FK NULL              (task derived from another task)
├── dependency_task_ids[] ARRAY         (must complete others first)
├── supersedes_task_id FK NULL          (this task replaces an older one)
├── orchestration_run_id FK NULL        (when task is part of multi-step run 
│                                        per DL-14 inv 17)

VISIBILITY + DISPLAY
├── patient_visible BOOLEAN             (appears in patient upcoming care view)
├── display_label STRING                (patient-facing or staff-facing label)
├── internal_note TEXT NULL
├── tenant_visibility_policy_id NULL    (DL-19 settings override)
```

### §4.2 55+ Day 0 seed task_kinds catalog (PARKED — registry-extensible)

Organized by trigger origin. Tenant adds custom kinds without code change per DL-16 inv 5+9+29.

**Performed-care-triggered (auto-emission when encounter_line closes):**
1. post_procedure_check_short (3 days, generic)
2. post_botox_results_check (14 days)
3. botox_maintenance_recall (configurable; 3-4 mo default)
4. filler_maintenance_recall (configurable; 9-12 mo default)
5. post_laser_redness_check
6. post_op_wound_check (1 week)
7. post_op_physical_therapy_followup (6 weeks)
8. pathology_result_pending (awaits external evidence; auto-fulfilled on result return)
9. post_procedure_adverse_event_window (passive monitoring period)
10. clearance_followup_required

**Result-triggered (auto-emission when external evidence returns):**
11. pathology_result_review_required
12. abnormal_lab_result_review
13. imaging_result_review
14. lab_followup_monitoring_due
15. radiologist_read_pending

**Medication-triggered:**
16. rx_refill_due
17. rx_adherence_check
18. rx_lab_monitoring_due
19. rx_expiration_warning
20. controlled_substance_renewal_check
21. medication_titration_review

**Commerce / membership-triggered:**
22. retail_restock_followup
23. membership_renewal_due
24. package_expiration_warning
25. gift_card_expiration_warning
26. contract_auto_renewal_alert
27. loyalty_tier_milestone

**Care-episode-catalog-triggered (cadence-driven):**
28. annual_skin_check
29. annual_pap_smear
30. colonoscopy_10yr_recall
31. mammogram_annual_recall
32. glp1_monthly_async_review
33. lipid_management_quarterly_check
34. thyroid_monitoring_6mo_check
35. dermatology_surveillance_recall

**Patient-lifecycle-triggered:**
36. new_patient_onboarding_d1
37. new_patient_onboarding_d7
38. new_patient_onboarding_d30
39. patient_inactivity_reactivation_outreach
40. patient_birthday
41. patient_membership_anniversary

**No-show / cancellation-triggered:**
42. no_show_recovery_outreach
43. cancellation_reactivation
44. waitlist_promotion_offer

**Manual-staff / provider-initiated:**
45. staff_created_followup
46. provider_created_clinical_recheck
47. provider_created_async_check_in
48. front_desk_courtesy_call

**CNS-inferred:**
49. cns_inferred_engagement_gap
50. cns_inferred_clinical_concern_followup
51. cns_inferred_care_team_handoff

**Compliance / regulatory:**
52. annual_consent_renewal
53. hipaa_notice_update_acknowledgment
54. provider_license_renewal_check
55. adverse_event_regulatory_filing

### §4.3 Lifecycle conversion rules (PARKED)

Binding rule when activated: a care_episode_task is NEITHER an appointment NOR an encounter until it converts:
- When scheduled = appointment created (fulfillment_appointment_id populated)
- When clinically acted on = encounter created (fulfillment_encounter_id populated)
- When outbound message dispatched = orchestration_action emitted (fulfillment_orchestration_action_id populated)

The task itself IS the future-map item — it answers "what does this patient owe / need / be due for" without conflating future obligations with past care actions.

### §4.4 Four refinement gaps for future Care-Coordination-CNS substrate slice work (PARKED)

1. **External evidence matching for incoming lab/pathology** — relies on order_id reference in inbound interface. Day 0 substrate admits match field; Day 0 logic is exact-match; M3+ adds fuzzy matching + reconciliation per DL-16 inv 39.
2. **Cross-task dependency enforcement** — substrate admits dependency_task_ids[] but enforcement lives in CNS orchestration_run per DL-14 inv 17. Multi-step workflows promote from task to run when chains exceed 3 steps or cross domains.
3. **Recurring task generation strategy** — lazy_next_only by default (per DL-15 amendment 35 pattern), eager_fixed_dates for known-date recalls. Tenant policy decides per task_kind.
4. **AI-proposed clinical-class tasks** — REQUIRE human confirmation per DL-14 inv 18-22. Status = proposed_ai_pending_human_review until confirmed_by_actor populated.

---

## §5 Visit-type-as-service-catalog (NOT substrate enum)

"Visit type" is real for the product but NOT a hardcoded OMNI encounter enum. It lives in:
- `service_category` (DL-15 taxonomy)
- `service` (DL-15 operational kind)
- `booking_preset` (DL-19 tenant affordance, with hierarchy via parent_preset_id and combos via bundled_member_preset_ids[])
- `appointment_item.planned_service_id` OR `planned_service_category_id`
- `appointment_item.planned_details` JSONB (schema-driven structured detail)

Substrate does NOT admit `aesthetic_office_visit` / `medspa_visit` / `derm_visit` / `gi_visit` as encounter enum values. Tenant configures their treatment menu. Substrate stays generic. OMNI handles medspa + derm + plastics + GI + cardio + endocrine + sleep + Hims-style + peptides + HRT + hair salon + retail from the same five primitives without code change.

### §5.1 Hierarchical service_category + specific-or-category booking

Tenant configures arbitrary-depth hierarchies. Example:

```text
Injectables
├── Neuromodulators
│   ├── Botox
│   ├── Dysport
│   ├── Jeuveau
│   ├── Daxxify
│   └── Xeomin
└── Fillers
    ├── Juvederm Voluma
    ├── Juvederm Ultra
    ├── Restylane Lyft
    ├── Restylane Kysse
    ├── Radiesse
    └── Sculptra

Laser Hair Removal
└── LHR (quantity_strategy=per_unit_quantity, unit_kind=area)

Body Contouring
└── CoolSculpting (quantity_strategy=per_unit_quantity, unit_kind=cycle)

Peptides & Wellness
├── NAD+ / Cellular Energy
├── Wolverine Stack / Recovery
├── BPC-157 / Injury Support
├── Anti-Aging / Longevity
└── Provider Guidance (fallback)

Weight Loss Program
├── New Patient (intake required)
├── Returning Patient Follow-Up
├── Lab Review
├── Medication Adjustment
└── Provider Video Visit

HRT
├── New Patient
├── Lab Review
├── Follow-Up
└── Dose Adjustment
```

Appointment_item plans against EITHER `planned_service_id` (specific) OR `planned_service_category_id` (category-level, narrowed at visit). Encounter_line always resolves to specific service when performed.

### §5.2 Schema-driven structured planned_details

`service.planned_detail_schema JSONB` defines what structured fields are captured for this service. Tenant configures. Booking UI dynamically renders form. Examples:

- Neuromodulator: `{preferred_product: enum[Botox, Dysport, Daxxify, Xeomin, Jeuveau], planned_treatment_areas[]: enum[glabella, masseter, forehead, crow's_feet, temporalis, mentalis], planned_quantity_estimate: integer optional}`
- Filler: `{preferred_product: enum[Juvederm_Ultra, Juvederm_Voluma, Restylane_Lyft, Radiesse, Sculptra], planned_treatment_areas[]: enum[lips, cheek, nasolabial, chin, jawline, temple], planned_volume_ml_estimate: number optional}`
- LHR: `{planned_body_areas[]: enum[upper_lip, chin, underarms, brazilian, bikini, legs_lower, legs_upper, full_body, back, chest]}`
- CoolSculpting: `{planned_cycles: integer, planned_body_zones[]: enum[abdomen, flanks, inner_thighs, outer_thighs, submental, arms]}`
- SkinPen: `{planned_session_index: integer, includes_prp: boolean}`
- Hydrafacial: `{tier: enum[Signature, Deluxe, Platinum] optional}` (when tier captured at booking; otherwise via planned_pricing_option_id NULL → resolved at sale time)

Schema-driven structured capture, NO free text. Tenant-controlled vocabulary.

### §5.3 Broad-default booking doctrine

Broad booking is the patient-facing default. Rich structured booking is opt-in per tenant policy. Patient may always book at category level. Missing planned_details are stored as null or marked "not_specified" internally — they never display as patient-facing "Unknown Botox" ugliness. UI always shows clean parent label.

### §5.4 LHR / CoolSculpting / SkinPen variable scope handling

ONE service catalog row per service kind. `quantity_strategy = per_unit_quantity` + `unit_kind` (area / cycle / session). Tenant-defined named presets ("Brazilian," "Full Body") are booking affordances that map to substrate (service_id=LHR, planned_quantity=N, planned_treatment_areas=...). Booking-vs-performance scope drift handled natively via planned-vs-performed line distinction (Q9 resolution in DL-20 inv 12).

---

## §6 Entitlement redemption visibility ("visit 2 of 3")

DL-17 inv 22 entitlement substrate + inv 23 entitlement_redemption already cover. Substrate carries redemption_count (3 for SkinPen 3-pack), redemptions_used (current), redemption_index (per redemption row), valid_to (expiration). UI projection at booking + check-in + sale surfaces "You're on visit 2 of 3 of your SkinPen package. 1 remaining. Expires 8/15."

For monthly memberships: contract recurrence (DL-17 inv 11) generates monthly entitlement grants (free Hydrafacial each month). Patient cockpit shows: "Active: Monthly Hydrafacial August grant (unused, ready). Expired: July grant redeemed 7/15. Upcoming: September grant pending Sept 1 charge."

No new substrate. UI projection only.

---

## §7 Patient promo wallet + intent + application (four-layer model)

The correct promo model after Knox + user refinement is four layers:

```text
LAYER A — promo_code (DL-17 inv 14 existing)
   ├─ The offer DEFINITION
   ├─ Tenant-configured
   └─ Examples: "Summer 10% off," "Influencer code DRSARAH10," 
                "New client CoolPeel," "Holiday 2026 $50 off"

LAYER B — patient_promo_claim (NEW DL-17 substrate; PATIENT WALLET)
   ├─ Account-level AVAILABILITY
   ├─ Lives on patient_id / patient_relationship_id
   ├─ State machine: available → reserved_for_appointment → 
                     applied_at_checkout / partially_used / 
                     expired / voided / reversed
   ├─ Survives across appointments
   ├─ Tracks remaining_uses + remaining_amount + claim_source + 
              claim_origin_metadata for manual promo entries
   └─ This is where Sarah's Insta promo lives

LAYER C — appointment_promo_intent (NEW DL-17 substrate; RESERVATION)
   ├─ Appointment-scoped intent/reservation
   ├─ Own state machine: planned → reserved → removed / expired / 
                          applied / rejected
   ├─ Auditable lifecycle separate from wallet-level claim_state
   ├─ intent_source (patient_selected_at_booking / staff_added / 
                     cns_proposed)
   └─ Links patient_promo_claim_id → appointment_id + 
            optional appointment_item_id

LAYER D — commerce_order_line.applied_promo_claim_id
   ├─ Commerce APPLICATION at checkout
   ├─ Final commercial truth
   ├─ Updates patient_promo_claim.remaining_uses / remaining_amount
   └─ Transitions wallet claim_state to applied_at_checkout / 
            partially_used + appointment_promo_intent.intent_state 
            to applied
```

**Rule:** Patient wallet owns AVAILABILITY. Appointment owns INTENT. Commerce owns APPLICATION. The three layers may differ; substrate captures all three for audit + analytics.

Same pattern applies to packages and memberships — account-level entitlement (DL-17 inv 22), appointment-level intent, commerce-level application. Symmetric design across promos / packages / memberships.

Mindbody's failure modes (no patient-level promo wallet; lost promos on reschedule; manual amount tracking) eliminated. Boulevard's too.

---

## §8 Confirmation as CNS round-trip + DL-15 amendment 8 rationale

### §8.1 The terminology fix (DL-15 amendment 8)

DL-15 inv 5 prior to amendment 8 used `confirmed` to mean "booking committed atomically" and `confirmation_pending_deposit` to mean "booked but deposit not collected." This collided with the natural staff-facing meaning of "confirmed" = patient confirmed. The fix: amend DL-15 inv 5 to use clean terminology:

- State (4): `confirmed` → `scheduled` (booking commitment exists; slot held; patient on schedule; not necessarily acknowledged)
- State (5): `confirmation_pending_deposit` → `scheduled_pending_deposit`

Cascading documentation updates across DL-15 inv 6 / 9 / 13 / 14 / 16 / 22 / 23 cross-references. `appointment_booked` event_kind stays as semantic alias OR can be renamed to `appointment_scheduled` per registry evolution per DL-16 inv 9. Historical aliases preserved for graceful sunset.

Now `confirmed` is freed for its natural meaning in DL-20 confirmation_state.

### §8.2 Confirmation as CNS round-trip (not a checkbox)

Confirmation is event-driven orchestration round-trip per DL-14 + DL-16 + DL-15 state machine discipline:

```text
1. Appointment booked → confirmation_state = unconfirmed
2. CNS emits outbound confirmation action(s) per tenant policy
   → orchestration_action emitted (DL-14 primitive #10)
   → appointment_confirmation_event with round_trip_kind=outbound_attempt
3. State transitions to confirmation_sent
4. Patient responds via rail (SMS/email/portal/phone)
   → inbound_message captured in messaging substrate
   → appointment_confirmation_event with round_trip_kind=inbound_response
5. CNS classifier (AI may assist per DL-14 inv 18-22; bounded autonomy) 
   interprets response
   → cns_decision recorded (DL-16 inv 30)
   → appointment_confirmation_event with round_trip_kind=cns_classification
   → classified_intent + classifier_confidence + 
       requires_staff_review + state_transition_applied
6. Deterministic rules read classification → transition confirmation_state
   → appointment_confirmation_event with round_trip_kind=state_transition
7. State transitions are deterministic; AI classifies, rules + staff decide
```

`appointment_confirmation_event` REFERENCES external substrates (messaging, orchestration_action, cns_decision) via FK. Does NOT duplicate them. Stores appointment-specific interpretation + state-transition audit only.

### §8.3 Clean confirmation_state ENUM (Knox-corrected, post DL-15 amendment 8)

- `unconfirmed` (initial after scheduled)
- `confirmation_sent` (outbound dispatched)
- `confirmed` (patient acknowledged — clean natural term, freed by DL-15 amendment 8)
- `cancellation_requested` (patient said cancel — does NOT auto-cancel appointment.status; routes to deterministic policy or staff review)
- `reschedule_requested` (patient said move it — routes to reschedule flow or staff review)
- `staff_review_required` (ambiguous classification or classifier confidence below threshold)
- `failed_delivery` (all confirmation attempts failed delivery)
- `expired_no_response` (TTL elapsed — explicitly NOT cancellation)
- `not_required` (tenant policy admits some service types as not-requiring-confirmation)

Meaning:
- `appointment.status = scheduled` = slot committed
- `confirmation_state = confirmed` = patient acknowledged
- A scheduled appointment can be unconfirmed.
- A confirmed appointment can later transition to cancellation_requested.
- No response does NOT cancel the appointment unless deterministic tenant policy says so.

---

## §9 AI routing of outbound pings + content generation (PARKED)

AI routing of outbound communications + content generation is parked for future Care-Coordination-CNS workstream. Existing scaffolding is in place:
- DL-14 inv 18-22 (AI autonomy modes; AI Compose Assist; bounded autopilot)
- DL-16 amendment 42 (outbound trigger registry: 32 seed orchestration_action_kinds)
- §1Q.14.2 (outbound 8-gate)

Full AI routing design is a future workstream, NOT scope of current patch round v2.

---

## §10 Rejected patterns enumerated

These patterns were considered and explicitly rejected during the 2026-05-17 session. NOT to be re-proposed without explicit re-opening + rationale.

- **`schedule_segment` substrate as child of encounter_line** (Knox proposal) — appointment_item + encounter_line each carry their own timing; multi-segment-per-line deferred to M6+ if ever needed
- **6-state line-type enum** (primary / add-on / dependent / optional / same-day-added / not-performed) — replaced by `parent_item_id` FK + `item_origin` 3-value ENUM + per-item policy axes
- **4-FK participant attachment** (appointment + appointment_item + encounter + encounter_line) — Day 0 uses 3 FK targets (appointment_item / encounter / encounter_line); appointment-level participants promoted to M3+ if reality demands
- **New `care_obligation` substrate** for recalls — extends existing `care_episode_task` substrate with recall task_kinds; single substrate for not-yet-realized care obligations
- **Auto-copy appointment_items to encounter_lines at check-in** — encounter_lines created when work happens; preserves planned-vs-performed distinction (Q9)
- **Separate `bookable_offering` substrate layer between service and appointment_item** — booking_preset (DL-19 settings) handles this affordance without new scheduling substrate hop
- **`reason_for_visit[]` tenant-controlled-vocabulary checklist** — Mindbody-pattern wins: small typed `booking_request_note` field (free text bounded) + `appointment_staff_note_entry` child substrate
- **Loose `intended_promo_claim_ids[]` array on appointment** — replaced by `appointment_promo_intent` child substrate with own state machine + audit
- **`appointment_line as primary primitive` collapsing all clinical truth onto one row** (my prior overcorrection) — restored 3-layer separation (appointment + encounter + lines)
- **Mandatory `encounter_container` separate row for every encounter** — the appointment IS the container for synchronous trips; async has no container by default
- **`acknowledged_by_patient` workaround for confirmation_state** (my prior workaround to dodge DL-15 amendment) — DL-15 amendment 8 fixes the upstream collision; `confirmed` now means patient confirmation
- **Vendor names as enum values** (Allē / Aspire / Cherry / ClassPass / Canfield Visia as substrate enum) — payment_method is tenant-defined free-form label; partner_imaging_device is generic enum + STRING label
- **Specialty-coded encounter profiles** (aesthetic_treatment_visit / procedure_visit_with_room / etc.) — encounter.modality is 4-value enum (in_person / video / phone / async); specialty lives in tenant catalog
- **Hardcoded specialty list in episode_catalog substrate** — tenant configures empty Day 0 catalog; specialty seeds added per Build Contract §8 phasing
- **Compound `booking_origin` enum mixing channel + patient_status + attribution + trigger** — decomposed into 3 fields + 1 computed (booking_channel + attribution_source + trigger_source + new-vs-repeat computed from patient.first_visit_at IS NULL)
- **Membership-as-payment-method** — membership is autopay_contract granting entitlements + metadata + operational flags, NOT a payment method registry row
- **Loyalty creep** — 30+-field care_episode_task substrate + 55-kind catalog promoted to DL-20 patch (my prior overcorrection from "how does this layer beside visits" pressure test) — PARKED here in preservation doc; minimal recall extension only ships in current round

---

## §11 Cross-link to DL-20 invariants this pressure-tests against

DL-20 inv 1 — Care Episode 1st-class primitive (Q6 partial resolution)
DL-20 inv 5 — Episode Catalog tenant-configurable (specialty seeds PRUNED to empty Day 0)
DL-20 inv 6 — encounter_container 1st-class (Q1 partial resolution; was rip-out target for encounter_profile_registry; refactored to appointment + encounter 3-layer model)
DL-20 inv 8 — encounter.modality 4-value enum (4 modalities only; specialty leakage prevented)
DL-20 inv 9 — booking composer atomic validation + three-profile read (provider + patient + time)
DL-20 inv 10 — encounter creation paths (scheduled-first / intake-first / walk-in / ad-hoc-video / async-clinical-decision / lab-review-initiated / message-escalation)
DL-20 inv 11 — encounter lifecycle 8-state
DL-20 inv 12 — encounter_line with line_kind discriminator (planned_intent / performed_intervention / observation / order / referral / followup_action / attribution)
DL-20 inv 13 — Performed Intervention Line captures product/lot/expiration/units/treatment_areas
DL-20 inv 14 — Encounter Line ↔ Commerce Order Line linkage
DL-20 inv 15 — Encounter closeout drawer atomic across substrates
DL-20 inv 16 — care_episode_task substrate (minimal extension in current patch round; FULL DESIGN PARKED HERE)
DL-20 inv 17 — Provider Review Queue with fallback coverage
DL-20 inv 21 — Cross-channel encounter_interaction_link (Q13)

Plus new patches added in v2:
- appointment + appointment_item substrates (Layer 1)
- encounter_participant child substrate
- appointment_staff_note_entry child substrate
- appointment_confirmation_event child substrate
- patient_promo_claim + appointment_promo_intent substrates (DL-17)
- Three-field booking_origin (booking_channel + attribution_source + trigger_source)
- DL-15 amendment 8 (inv 5 naming refinement)

---

## §12 Promotion gate

This doc is PARKED. Promotion of any clause into locked DL invariants requires:
1. Explicit re-opening of the Care-Coordination-CNS workstream
2. Joint Knox + user + Opus signoff on scope
3. Mapping each promoted clause to specific DL invariant amendment
4. Substrate slice scoping for any new primitives

Until then: clauses live HERE as preservation, NOT as binding doctrine.

NOT code. NOT migrations. NOT substrate slice. NOT a new architecture doc.

End of preservation artifact.
