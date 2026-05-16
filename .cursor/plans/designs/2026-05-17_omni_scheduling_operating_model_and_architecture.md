# OMNI Scheduling — Operating Model and Architecture

**Date:** 2026-05-17
**Status:** CONVERGENCE ARTIFACT — synthesis of 190 Mindbody screenshots + Sessions 1+2 verbatim + Layer 2 + pressure-test + brain audit + 9 user gaps + 45 scenarios. Architectural recommendations, NOT doctrine amendments. Q1-Q24 tentatively resolved with reasoning; final lock requires joint Opus + Knox + user signoff.
**Author:** Opus (thread 3)
**Constraints (binding):** NOT doctrine amendment / NOT code / NOT migrations / NOT new DL drafts / Q1-Q24 recommendations are tentative. Layer 2 + pressure-test + audit + Sessions frozen.

---

## How to read this doc

Dense + specific + solution-oriented per Knox redirect. Read §1 first for the thesis. §2 enumerates the substrate. §3-§4 are the rules. §5 walks 8 end-to-end scenarios that prove the model. §6 is the Q1-Q24 ledger. §7 maps Mindbody pain to OMNI response. §8 phases the build. §9 lists risks + validation questions for you.

No "plain English explainer" framing. The user has spent weeks on the inputs; this doc owes them a real architecture.

---

# §1 Executive architecture thesis

## 1.1 Where OMNI Scheduling fits inside OMNI + OMNI CNS

OMNI Scheduling is **the operational timing/resource layer** of the OMNI CNS. Per DL-14 (CNS center-of-gravity locked doctrine):

- The CNS reads a unified event graph from every domain (intake, clinical atoms, messaging, commerce, treatments, labs, Rx, scheduling, payments, calls, provider activity, patient state, elapsed time)
- The CNS emits orchestration_actions across 9 actor targets (patient, provider, front desk, care coordinator, manager, compliance, AI planner, queue/team, external vendor)
- Rails (SMS / email / in-app / push / voice / voicemail / provider inbox / staff task surfaces / video / scheduling executor / payment / labs / Rx / future) are OUTPUTS — they project decisions, they do not orchestrate.

**Scheduling is one executor inside that brain.** It is not the brain. It is not a calendar. It is not a Mindbody clone. It is the substrate where: *patient state is acted on by the right actor + the right resource + at the right moment*. It is also the producer of one of the densest event streams the CNS consumes — bookings, holds, cancellations, no-shows, check-ins, performed-interventions, completions, doc-pending, charge-pending, follow-ups due, video-started, video-completed.

Per DL-14 inv 14, OMNI uses ONE 9-layer vertical CNS stack with 10 horizontal domain slices. Scheduling is one slice. It uses the same vertical spine — there is NO "scheduling brain." The scheduler executes deterministic resource validation + lifecycle transitions; the CNS owns the cross-domain coordination (scheduling ↔ messaging ↔ commerce ↔ clinical ↔ external-line ↔ video).

## 1.2 What scheduling owns vs what CNS owns vs what other domains own

```
SCHEDULING owns:
  - Canonical schedule state (appointment row, encounter row, hold row, availability windows)
  - Multi-resource concurrency arbitration (provider × room × resource × time atomic locks)
  - Lifecycle state machine (per DL-15 inv 5, extended for multi-flag composability)
  - Clinical-clearance gate (per DL-15 inv 10 ABSOLUTE; reads canonical clinical truth)
  - Booking validation (4-axis composer: Capacity / Staff / Room / Resource)
  - Planned-vs-Performed substrate (encounter_line rows; immutable history)
  - Encounter Container substrate (single + profile_enum + policy table — per Q1 recommendation §6)
  - Care Episode parent (per Q6 recommendation §6)

CNS owns:
  - Cross-domain orchestration (when to remind / when to escalate / when to suppress / when to coordinate)
  - Decision records (cns_decisions audit primitive)
  - Policy resolution (7-layer per DL-14 inv 11)
  - AI envelope dispatch (per DL-14 inv 9)
  - Outcome event closure (per DL-16 inv 17)

COMMERCE owns (Phase C; not built yet but admitted today):
  - Pricing options (4-type taxonomy)
  - Charge lines (derived from performed_intervention_line via FK; mutable for discount/payment only)
  - Payment attempts (split tender, refunds, settlements)
  - Tax / membership / package / gift card / loyalty / promo / Aspire / Cherry / etc.
  - Receipt projection (read-only computed view)
  - Inventory consumption events (substrate-derived from performed lines)

CLINICAL owns (deepens at Phase D; admitted today):
  - Provider notes (renders from performed_intervention_line + attestation)
  - Clinical atoms / assertions
  - Lab orders / lab results
  - Rx orders / Rx state
  - Diagnoses (ICD codes — Phase D)
  - Procedure codes (CPT — Phase D)

MESSAGING owns (DL-11 protected; do NOT cram):
  - Patient chat substrate
  - External-line / pre-account communications substrate
  - Internal team collaboration substrate
  - Inbound/outbound messages and threading
  - Status callbacks from rails

EXTERNAL-LINE owns (per FUTURE_ARC federation):
  - Contact-identity layer
  - Pre-account communications
  - Ops triage queue

VIDEO owns (rail; vendor-agnostic):
  - video_session substrate (linked to encounter OR interaction OR ad-hoc)
  - Vendor adapter (Zoom Video SDK Day 0; Daily/Twilio/Foundry later)
  - Recording / transcript policy (Phase 1+)

FEDERATION owns (per FUTURE_ARC + Q12):
  - 11-axis venue taxonomy
  - Cross-location patient flow
  - Brand / legal_entity / deployment / jurisdiction policy resolution
  - Patient_relationship_id scoping (DL-10)

CLINICAL-MEDIA owns (Q14; admitted today, deeper later):
  - Photos (before/after, body region, treatment area, series grouping, before-after pairs)
  - Intake / forms (longitudinal, not visit-attached; linked when used)
  - Consents (versioned; signed; linked to interventions / Rx / procedures)
  - Documents (lab PDFs, pathology, referrals, legal)
```

## 1.3 The thesis in one paragraph

OMNI Scheduling is the operational timing/resource layer of a federated, multi-modal, clinical-grade care-coordination platform. It treats **Care Episode** as the longitudinal pathway (GLP-1 program / Aesthetic maintenance / Mole surveillance / Sleep apnea workup / Cardiology evaluation / etc.); **Encounter Container** as the bounded accountable moment within an episode (with `encounter_profile` enum driving policy: office_visit / video_visit / async_review / aesthetic_treatment_visit / resource_only_session / lab_draw_visit / procedure_encounter / surgical_case / etc.); and **Encounter Lines** as the truth-owners (planned_intent / performed_intervention / procedure / order / lab / rx / document / inventory_use / billable / payment / entitlement_redemption / follow_up / task / message — each line owns its truth in its proper substrate; the container LINKS). Scheduling owns appointment + encounter + planned-vs-performed + 4-axis booking + lifecycle states. CNS reads scheduling events + emits orchestration_actions for messaging / commerce / clinical / federation coordination. Clinical and Commercial are SEPARATE source-of-truth lanes connected by FK + role-gated mutations. Mindbody is the cautionary tale: it conflated appointment_type with performed_service with billable_item; collapsed `provider ≠ rendering_clinician ≠ supervising ≠ seller`; collapsed `consent ≠ clinical_clearance`; stored notes/photos/consents inside appointment fields; allowed shared logins. OMNI separates each of these with substrate FK + audit + DL-13 rail-agnostic discipline. The result: medspa Day 0 + Hims async + derm specialty Year 1 + sleep/cardio/endocrine/plastics Year 2+ on ONE substrate, expandable without rewrite.

## 1.4 What this thesis does NOT claim

- Does not claim to replace Mindbody operationally. Mindbody's operational depth (settings-as-OS, calendar UI, reporting) is a deep moat. OMNI competes on **clinical-grade structured commerce + planned-vs-performed truth + multi-modality + CNS coordination**, not on calendar-feature parity.
- Does not claim to be an EMR. Clinical depth comes from structured performed_intervention_line + provider attestation + note rendering. Not Epic-grade ordering / pathology / hospital-grade clinical decision support.
- Does not claim to be a POS. Commerce primitives (Pricing Option 4-type / Discount / Loyalty / Aspire / Cherry / Payment Method 25+ enum) live in Commerce DL (Phase C). Day 0 has a placeholder.
- Does not claim to be a video platform. Zoom (or Daily / Twilio / Foundry) is the rail. OMNI owns video_session state.
- Does not claim to ship full multi-modality on Day 0. Day 0 is HYBRID medspa + Hims async; specialty modalities admit substrate-wise but UX/UI ships in phases.

---

# §2 Canonical object / container model

The substrate primitives. Names are tentative pending substrate slice scoping; concepts are firm.

## 2.1 Top-of-hierarchy

```
patient
  ↓
patient_relationship (per DL-10 scoping; multi-tenant + federation)
  ↓
care_episode (longitudinal pathway; NEW per Q6 recommendation)
  ↓
encounter_container (bounded accountable moment; NEW per Q1 recommendation)
  ↓
encounter_line (14 line types; owns truth in its proper substrate)
```

## 2.2 The 14 encounter_line types (Q3 + Q15 + Q8 derivations)

| Line type | Owns truth in | Mutable by | Frozen after |
|---|---|---|---|
| **planned_intent_line** | encounter_line table (status enum) | scheduler (status only) | encounter_completed (status_history audit-preserved) |
| **performed_intervention_line** | encounter_line + clinical attestation | provider (or staff-drafted pending) | provider attestation + chart signoff (amendable via addendum) |
| **procedure_line** | encounter_line + procedure codes (CPT future) | provider | provider signoff |
| **order_line** | clinical_orders substrate | provider | order sent to executor |
| **lab_line** | lab_orders + lab_results substrate | provider (order) + lab (result) | result released |
| **rx_line** | rx_orders substrate | provider | rx sent to pharmacy |
| **document_line** | clinical-media substrate | provider / staff | signed / locked |
| **media_line** (photo/video/scan) | clinical-media substrate | provider / staff / patient (upload) | retention policy |
| **consent_line** | consent substrate | patient signs + staff witness | versioned (new sig = new row) |
| **inventory_use_line** | inventory substrate (derived from performed line) | system (derived) | event log (immutable) |
| **billable_line** (charge_capture) | commerce_order_line | front desk (commercial only) | cart settled |
| **payment_line** | payment_attempt substrate | front desk + payment processor | settlement closes |
| **entitlement_redemption_line** | commerce_order_line | front desk + provider (if package) | settlement closes |
| **follow_up_line** | orchestration_actions (CNS primitive #10) | CNS | execution outcome |
| **task_line** | orchestration_actions | CNS / staff | execution outcome |
| **message_line** | DL-11 messaging substrate | rail | outcome event |
| **attribution_line** | encounter_line + actor refs | system (derived from line.performer_id + line.assistant_id + line.supervisor_id + line.seller_id + line.checkout_staff_id) | encounter completion |

(That's 16 line types when we split media/photo from document and break out attribution. The "14" from Knox Session 2 Turn 1 was an early enumeration; final count is for substrate slice scoping.)

## 2.3 Encounter Profile enum (Q1 recommendation: 13 profiles Day 0)

```
office_visit
video_visit
phone_visit
async_review            (Hims-style; no scheduled time)
message_based_review    (sub-variant of async_review for SMS/inbox-driven review)
office_visit_with_minor_procedure_allowed
aesthetic_treatment_visit
resource_only_session   (red light, sauna, equipment-only)
lab_draw_visit
procedure_encounter
surgical_case
post_procedure_follow_up
internal_event          (staff training, vendor visit, blocked time)
```

Each profile has a policy row (separate `encounter_profile_policy` table) declaring:

```
requires_scheduled_time         boolean
requires_provider                boolean
requires_room                    boolean
requires_equipment               boolean
allows_procedure_lines           boolean
requires_consent                 boolean
requires_clinical_clearance      boolean
requires_vitals                  boolean
requires_photos                  boolean
requires_forms                   boolean
allows_checkout                  boolean
allows_inventory_consumption     boolean
allows_rx_labs_orders            boolean
default_documentation_kind       enum(none, session_log, treatment_note, procedure_note, progress_note, operative_note, async_review_note)
provider_attestation_required    boolean
```

Profile drives policy. CNS reads policy at decision time. Substrate is the storage; CNS is the orchestrator.

## 2.4 Substrate enumeration (Day 0 slice; substrate scope per phase)

The 30-40 substrate tables that admit the full architecture but only some get UI/UX on Day 0:

```
DAY 0 SUBSTRATE (admit + light surface):
  patient
  patient_relationship                                   (DL-10 scoped)
  staff
  staff_capability                                       (8+ flags per staff)
  staff_service_assignment                               (with prep + booking + finish time)
  permission_group + permission_group_assignment         (5 groups per brand)
  permission_atom + permission_group_atom_grant
  service                                                (catalog; 30+ cols admitted, 10 implemented Day 0)
  service_category
  add_on                                                 (flag on service OR separate; Q3 decision)
  service_closeout_template                              (suggestion engine config)
  room
  room_service_compatibility
  resource
  resource_service_compatibility
  availability_window                                    (4-axis: what/where/when/privacy)
  care_episode                                           (NEW; Q6)
  encounter_container                                    (NEW; Q1)
  encounter_profile                                      (enum + policy table)
  appointment                                            (scheduled instance; links to encounter)
  encounter_line                                         (NEW; 14-16 line types via line_kind discriminator)
  hold                                                   (slot hold with TTL)
  client_alert                                           (21-event vocab from Mindbody Batch 16)
  client_alert_severity                                  (Red/Yellow enum)
  outbound_template
  orchestration_action                                   (system primitive #10)
  orchestration_run                                      (parent state machine; DL-14 inv 17)
  cns_decision                                           (audit primitive per DL-16 inv 30)
  audit_event                                            (actor-stamped per DL-14)

DAY 0 PLACEHOLDER (admit but minimal UI):
  commerce_order                                         (cart)
  commerce_order_line
  payment_attempt
  video_session
  clinical_media                                         (photos/scans)
  consent                                                (versioned)
  intake_session
  intake_evidence_link                                   (intake → encounter/episode/order linkage)

DEFERRED TO MONTH 6+ (substrate exists per Phase C draft):
  pricing_option                                         (4-type enum)
  contract / autopay
  package + package_item
  gift_card
  promo_code
  discount_program
  intro_offer
  membership_tier
  payment_method_capability                              (per-clinic 25+ methods enabled flags)
  tax_rate (2-tier)
  revenue_category
  supplier + payment_term + purchase_order               (ERP-adjacent; Phase D)
  retail_product                                         (4th catalog substrate distinct from pricing_option)
  inventory_use_event                                    (lot tracking; Phase 1)

DEFERRED TO YEAR 1+ (admit substrate but no spec yet):
  procedure_code (CPT)                                   (Phase D clinical-coding DL)
  diagnosis_code (ICD)                                   (Phase D)
  pathology_order + pathology_result                     (Phase D)
  charge_capture_for_claims                              (RCM Phase D+)
```

## 2.5 The 11-axis venue substrate (Q12 recommendation)

```
venue (
  id,
  physical_location_id            nullable -- physical clinic
  virtual_flag                    boolean   -- pure virtual deployment
  brand_id                        FK
  legal_entity_id                 FK        -- practice entity
  deployment_id                   FK        -- which OMNI deployment instance
  patient_relationship_id         FK
  provider_schedule_location_id   nullable
  patient_state_jurisdiction      varchar
  billing_rendering_location_id   nullable
  resource_location_id            nullable
  federation_location_of_record   FK
)
```

Encounter has `venue_id` FK. Different encounter profiles require different axes (e.g., `procedure_encounter` requires physical_location + resource_location; `async_review` requires only provider_schedule_location + patient_jurisdiction + legal_entity).

## 2.6 Critical substrate enforcement rules

These are the FK + check-constraint patterns that make the model survive at $1B scale. Not encoded as code; substrate-level enforcement at the design level.

1. **Planned-intent immutability**: `planned_intent_line.status` UPDATE is allowed; `service_id` UPDATE is REJECTED. New planned intent = NEW row with `added_same_day=true` flag. Per Q8.
2. **Performed-intervention attestation gate**: `performed_intervention_line` with `authorship_state='staff_drafted'` blocks chart-close until `attestation_state='attested'`. Per Q10.
3. **Charge-line FK requires performed-line**: `commerce_order_line.derived_from_performed_line_id` is NOT NULL for `line_kind IN ('service', 'procedure', 'intervention')`. NULL allowed for `line_kind IN ('retail_product', 'tip', 'membership_discount', 'package_credit', 'gift_card')`. Per Q9.
4. **Receipt projection is computed, never stored**: `receipt_projection` is a view function `(commerce_order_id, role_filter)`. NEVER persisted as authority.
5. **Encounter ↔ Care Episode multi-link**: `encounter.primary_care_episode_id` nullable FK for display; `encounter_line.care_episode_id` nullable FK per line (multi-episode-per-encounter). Per Q16.
6. **Multi-flag lifecycle composability**: `appointment.lifecycle_state` ENUM (13 per DL-15 inv 5) + `appointment.status_flags` BITMASK (Confirmed / Arrived / Forms_complete / Card_on_file / Late / Provider_running_behind / etc.). Per Q22.
7. **Async encounter substrate identity**: `appointment_id` nullable on `encounter_container` (admits async_review profile with no scheduled time). Per Q20.

---

# §3 End-to-end lifecycle

8 states. Per state: who emits the transition, what event, what CNS reads, what downstream fires.

## 3.1 The pipeline

```
scheduled → prepared → arrived → performed → documented → charged → closed → followed_up
```

## 3.2 State definitions + transitions

### State 1: SCHEDULED

- **What it means:** appointment + encounter created; `planned_intent_line` rows created; provider/room/resource holds confirmed
- **Who emits:** scheduler RPC `appointment_book`
- **DL-16 envelope event:** `appointment_booked` (per DL-15 inv 22)
- **CNS reads:** scheduler events → emits `send_appointment_confirmation` orchestration_action → rail-side SMS/email send
- **Downstream:** patient gets confirmation; reminder cadence scheduled; deposit-required check (if Pricing Option requires); intake form push (if required by encounter_profile policy)
- **Substrate state:** `appointment.lifecycle_state='confirmed'`; `appointment.status_flags |= Confirmed`

### State 2: PREPARED

- **What it means:** patient confirmed (Y/C reply OR link click OR staff confirm); forms complete; card on file; consent signed pre-visit if profile requires
- **Who emits:** CNS classifies inbound SMS / link callback / staff manual confirm → emits `confirm_appointment` orchestration_action → scheduler validates → state update
- **DL-16 event:** `appointment_confirmed_by_patient` / `appointment_confirmed_by_staff`
- **CNS reads:** outcome event closes confirmation loop; reminder cadence may step down
- **Substrate state:** `appointment.status_flags |= Forms_complete + Card_on_file + Consent_signed`
- **Failure path:** clinical-cue interrupt fires (per DL-15 inv 14) if reply contains symptom keywords → suppress normal confirmation flow → escalate to provider review

### State 3: ARRIVED

- **What it means:** patient checked in at clinic OR video call started (per encounter_profile)
- **Who emits:** front desk staff click "Check in" OR video_session.started event from rail OR ad-hoc creation
- **DL-16 event:** `patient_checked_in` / `video_session_started`
- **CNS reads:** room/device ready check; provider notified
- **Substrate state:** `appointment.lifecycle_state='in_progress'`; `appointment.status_flags |= Arrived`

### State 4: PERFORMED

- **What it means:** provider performed services; structured performed_intervention_line(s) created via chairside drawer
- **Who emits:** provider via drawer (or staff-drafted pending attestation per Q10)
- **DL-16 event:** `performed_intervention_recorded` (multiple, one per line)
- **CNS reads:** triggers cart auto-population (Q9 substrate: charge_line derived_from FK); CNS emits `suggest_aftercare_message`, `suggest_follow_up_text_2d`, `suggest_rebook_2wk`, `suggest_retail_recommendation` per service_closeout_template (Q18 derived projection)
- **Substrate state:** `encounter.lifecycle_state='care_complete'`; `performed_intervention_line.authorship_state='provider_entered'` or `'staff_drafted'`

### State 5: DOCUMENTED

- **What it means:** provider note signed off (or, for async_review profile, provider attestation + chart signoff)
- **Who emits:** provider via note completion UI
- **DL-16 event:** `note_signed`
- **CNS reads:** chart-close timer cancellation; provider productivity metric event
- **Substrate state:** `provider_note.signoff_status='signed'`; `performed_intervention_line.attestation_state='attested'`
- **Critical:** documentation is BLOCKING for high-risk encounter_profiles (procedure_encounter / surgical_case / async_review with Rx written). Per Q12 + encounter_profile.provider_attestation_required boolean.

### State 6: CHARGED

- **What it means:** cart settled; payment attempt successful
- **Who emits:** front desk via checkout RPC; or autopay run for subscription billing
- **DL-16 event:** `checkout_completed` / `payment_succeeded`
- **CNS reads:** revenue event for accounting integration; receipt emitted via rail (email/SMS); CNS triggers post-pay follow-ups
- **Substrate state:** `commerce_order.checkout_status='paid'`; `payment_attempt.status='settled'`
- **Critical:** charge != performed (Q9 3-lane separation). Charged state happens AFTER performed but BEFORE closed. Front desk modifying discount/loyalty is fine; modifying clinical line forces provider attestation.

### State 7: CLOSED

- **What it means:** encounter fully resolved; no open obligations; chart closed
- **Who emits:** system-derived state when all of: documented + charged + (no open clinical follow-up tasks blocking close)
- **DL-16 event:** `encounter_completed`
- **CNS reads:** archive eligibility timer starts; medico-legal retention timer starts
- **Substrate state:** `encounter.lifecycle_state='closed'`

### State 8: FOLLOWED_UP

- **What it means:** post-encounter actions executed (aftercare message sent + 2-day text + rebook scheduled + retail rec sent + clinical follow-up if needed)
- **Who emits:** CNS-driven via scheduled orchestration_actions
- **DL-16 event:** per orchestration_action outcome events
- **CNS reads:** outcome feedback loop (patient replied, message delivered, rebook complete, etc.)
- **Substrate state:** orchestration_actions per encounter_id rolled up; encounter `followups_complete` derived flag

## 3.3 Critical lifecycle properties

- **States are NOT strictly sequential:** scheduled and charged can happen out of order (autopay subscription charges happen on a cadence, not on visit completion). The 8-state pipeline is the **encounter lifecycle**; orthogonal lifecycles (payment, documentation, charge) compose.
- **Multi-flag composability:** `status_flags` bitmask sits orthogonal to `lifecycle_state` (per Q22 + multi-flag stack).
- **DL-15 inv 14 ABSOLUTE clinical-cue interrupt** can suspend ANY state transition into PERFORMED if a clinical safety cue arises.
- **Compensation (DL-15 inv 6 + 25 + DL-16 inv 31):** errors do NOT silent-rollback; new events explicitly correct with audit lineage.

---

# §4 5 source-of-truth lanes

Per Q9 + Knox Session 2 Turn 21-26. 5 lanes connected via FK; mutations role-gated.

## 4.1 The lanes

### Lane 1: Clinical truth

- **Owns:** what was clinically performed (`performed_intervention_line` + `procedure_line` + `order_line` + `lab_line` + `rx_line` + `consent_line`) + provider attestation + signed provider note + clinical assertions
- **Mutable by:** provider (attestation); MA / staff (draft only, pending provider attestation per Q10)
- **Frozen after:** provider attestation + chart signoff (amendable via addendum only)
- **Reads from:** patient profile + intake / forms / atoms + lab results + Rx state + clinical-media
- **Emits events:** `performed_intervention_recorded`, `note_signed`, `consent_signed`, `clinical_clearance_granted`, `clinical_concern_raised`

### Lane 2: Commercial truth

- **Owns:** cart (`commerce_order`) + line items (`commerce_order_line` with `line_kind` enum) + discounts + loyalty + Aspire/Cherry/Allē + memberships + packages + gift cards + tax + payment_attempts + refunds + receipt projection (computed)
- **Mutable by:** front desk (full commerce; cannot modify clinical lines); admin (override with audit scar per Q10)
- **Frozen after:** cart settled (amendable via refund / new charge with audit)
- **Reads from:** performed_intervention_line via `derived_from` FK + service_pricing_option_assignment + patient_packages + patient_memberships
- **Emits events:** `cart_settled`, `payment_succeeded`, `refund_issued`, `package_credit_redeemed`

### Lane 3: Operational truth

- **Owns:** appointment / encounter / hold / availability / scheduling state / closeout state (derived per Q18)
- **Mutable by:** scheduler RPC; staff for booking actions; CNS for orchestration triggers
- **Frozen after:** encounter_completed lifecycle state
- **Reads from:** staff + staff_capability + staff_service_assignment + room + resource + 4-axis booking composer
- **Emits events:** `appointment_booked`, `appointment_cancelled`, `appointment_no_show`, `patient_checked_in`, `encounter_completed`

### Lane 4: Communication truth

- **Owns:** patient chat (DL-11 surface 1) + external-line (DL-11 surface 2) + internal collaboration (DL-11 surface 3) + outbound rails (SMS / email / in-app / push / voice / voicemail / fax)
- **Mutable by:** rail adapters; CNS for orchestration_action dispatch; patient/staff for inbound/outbound
- **Frozen after:** outcome event closes
- **Reads from:** orchestration_action substrate + cns_decision + patient profile
- **Emits events:** all DL-11 + DL-13 rail events; outcome events back to CNS
- **Critical:** message ≠ encounter per Q7. Message stays in messaging substrate. Encounter LINKS via `encounter_evidence_link` substrate.

### Lane 5: Patient-record artifacts

- **Owns:** photos (`clinical_media`) + intake (`intake_session`) + consent (`consent`) + documents (`patient_document`) + labs / Rx (in clinical lane technically; cross-referenced here for UI)
- **Mutable by:** patient (upload via portal) + staff (capture during visit) + provider (annotation)
- **Frozen after:** retention policy per artifact type
- **Reads from:** patient + linked encounters + linked orders + linked Rx
- **Emits events:** `photo_captured`, `intake_submitted`, `consent_signed`, `document_uploaded`
- **Critical:** each artifact LINKED to encounter via FK; NEVER stored inside note blob. Per Q14.

## 4.2 Cross-lane edit boundaries (Q13 false-equivalence audit applied)

| Lane combination | Allowed | Rejected |
|---|---|---|
| Clinical → Commercial | performed_line auto-generates charge_line via FK | front desk cannot add units / change procedure |
| Commercial → Clinical | NONE | strictly rejected with substrate constraint |
| Clinical → Operational | performed line completion triggers encounter state advance | scheduler cannot modify clinical line content |
| Operational → Clinical | scheduling state can require clinical clearance check | scheduler cannot create clinical truth |
| Communication → Clinical | inbound message can TRIGGER clinical review (CNS decision); never become clinical truth | message thread cannot author intervention |
| Communication → Operational | inbound "C" can trigger appointment_confirmed | message cannot author booking |
| Patient-record → Clinical | consent / photo / intake LINKED to encounter | artifact cannot author intervention |
| Admin override | with audit scar (Q10 tier 4); creates reconciliation task | NOT silent |

## 4.3 The receipt-projection rule

Per Q9 + Knox Session 2 Turn 25. Different projections from one performed line:

```
performed_intervention_line:
  Botox 24 units
  glabella 10 / R crow's feet 6 / L crow's feet 4 / lip flip 4
  provider: Amber, performer
  consent: signed
  product_lot: optional
  
→ provider_note (rich): full anatomical breakdown + lot + settings + photos linked

→ charge_line (commercial granularity):
  Botox × 24 units × $14 = $336
  membership discount -10% = -$33.60
  total $302.40

→ inventory_use_event (audit):
  Botox product consumed: 24 units
  lot: ABC-123

→ receipt_projection (client-facing):
  "Botox — 24 units"
  payment method: Visa **6567
  total $302.40

→ attribution_line:
  performer: Amber
  seller: Amber
  checkout_staff: Front Desk Jane
```

**Critical:** these are 5 separate projections of ONE performed_intervention_line. Substrate enforces non-divergence: modifying performed_line cascades; modifying charge_line is commercial-only; modifying note is provider-only.

---

# §5 8 workflow scenarios end-to-end

Per Knox redirect. Each scenario: scheduled → performed → charged → closed → followed up. Substrate citations.

## 5.1 Botox visit (canonical aesthetic_treatment_visit)

```
T-3d:  Patient books online → appointment(profile=aesthetic_treatment_visit, scheduled_provider_id=Amber)
       + planned_intent_line(service=Botox, status=open)
       + send_appointment_confirmation orchestration_action → SMS
T-1d:  CNS sends reminder per cadence → SMS "see you tomorrow at 12pm"
T-1h:  Patient replies "C" → CNS classifies as confirmation_intent → safe_match → 
       confirm_appointment action → appointment.status_flags |= Confirmed
T-0:   Patient arrives → front desk checks in → status_flags |= Arrived
       → CNS suppresses normal reminder cadence (live state revalidation per DL-15 inv 11)
       → Forms unsigned? → request_form action → tablet/portal
T+5m:  Patient signs Botox injectable consent → consent_line created + linked to encounter
T+10m: Provider Amber pulls up chairside drawer (provider role-permitted context):
       Service: Botox
       Areas treated: glabella 10u / R crow's feet 6u / L crow's feet 4u / lip flip 4u
       Total: 24 units
       Performer: Amber
       Click "Push performed summary"
       → performed_intervention_line(units=24, areas=[...], authorship_state='provider_entered', attestation_state='attested')
       → CNS derives charge_line(service=Botox, quantity=24, derived_from_performed_line_id=<id>)
       → cart auto-populates
T+15m: Provider also clicks "Send injectable aftercare" + "Offer 2-week tox check" + "Text follow-up in 2 days?"
       → closeout suggestions enqueued (Q18 derived projection) → orchestration_actions queued
T+20m: Front desk sees cart:
       Botox × 24 units = $336
       Aspire reward: -$50
       Membership discount: -10% = -$28.60
       Total: $257.40
       Payment: Visa **6567
       Front desk clicks Settle
       → commerce_order.checkout_status='paid'
       → payment_succeeded event
       → receipt projection rendered + emailed
T+25m: Provider Amber signs treatment note (separate UI; renders from performed_intervention_line)
       → note_signed event
       → encounter_completed event (when documented + charged + no blocking tasks)
T+2d:  CNS-scheduled SMS fires: "Hi Sarah, hope your Botox is settling. Any concerns?"
T+14d: CNS-scheduled SMS fires: "Time for your 2-week tox check. Schedule here: [link]"
T+30d: Rebook follow-up if patient hasn't rebooked
```

**Substrate primitives touched:** appointment + encounter + planned_intent_line + performed_intervention_line + consent_line + commerce_order + commerce_order_line + payment_attempt + provider_note + clinical_media (if photos) + orchestration_actions (5+: confirmation / reminder / aftercare / 2d-follow-up / 2wk-toxcheck / rebook-30d) + cns_decisions + attribution_line (Amber as performer + checkout_staff)

**Smart-drawer UX requirement (per Knox Session 2 Turn 24 + user direction):** The chairside drawer MUST be contextually preloaded from: today's appointment + scheduled provider's favorite presets + service template (Botox unit map / SkinPen areas / Laser checklist) + patient package context + patient prior treatments + room/device context + planned intent. **Generic 400-item catalog search is REJECTED UX failure mode.** Provider should see "Common for this visit: Botox units / Dysport units / Lip filler syringe / Add-on options" preloaded — NOT a search bar with full catalog.

**Day 0 tier-2 acceptable path (per Knox + user direction 2026-05-17):** If provider does not enter chairside (workflow shock / time pressure / next room), MA or trained staff can DRAFT the performed_intervention_line. Status `authorship_state='staff_drafted'` + `attestation_state='pending'`. Checkout proceeds; provider attests at end of visit / end of day / chart-close timer. NOT a hard bottleneck Day 0 (per §6.14 Q10 recommendation).

**Why OMNI handles this better than Mindbody:** chairside drawer eliminates verbal hallway handoff (when provider uses it); staff-drafted-pending-attestation eliminates verbal hallway handoff (when provider doesn't); substrate-derived charge_line eliminates front-desk-translation error; provider attestation lives on performed_line not on appointment; receipt projection doesn't corrupt clinical note granularity; ATTRIBUTION_LINE captures performer / checkout_staff at line level (Day 0 substrate; commission UI Month 1-2).

## 5.2 Laser hair removal — package visit 1-of-3 (resource_only_session variant)

```
T-1w:  Patient already has active package: LHR_6_session_package (3 redeemed, 3 remaining)
T-0:   Patient books online → appointment(profile=resource_only_session OR aesthetic_treatment_visit per clinic policy)
       + planned_intent_line(service=LHR, planned_areas=[face, neck, underarms])
       + CNS reads patient.packages → suggests package_credit application
T+5m:  Provider Amber pulls up drawer; drawer PRELOADS package context:
       Planned today: LHR
       Package: LHR_6_session_package
       Session: 4 of 6
       Planned areas: face, neck, underarms
       Performed today: [✓ face] [✓ neck] [✗ underarms - skipped, time]
       Device settings: required by clinic policy → fluence/pulse_width/Fitzpatrick fields
       Push performed summary
       → performed_intervention_line(service=LHR, session_number=4, areas=[face, neck], device_settings={...})
       → derived charge_line PROPOSES package_credit_redemption (face + neck = 1 session count)
       → cart shows: Package credit: LHR 4-of-6 ✓
T+15m: Front desk reviews cart → 1 package_credit_redemption (no cash charge) → settle
T+20m: Provider signs treatment note (settings + reaction + endpoint captured)
T+1d:  CNS-scheduled SMS: aftercare instructions
T+30d: CNS-scheduled SMS: time for session 5
```

**Critical:** drawer is CONTEXTUAL (preloads package + session + planned areas + device + room + provider favorites). NOT a generic 400-item catalog search. Knox Session 2 Turn 24 + user direction 2026-05-17. Per Bloom catalog, Day 0 ships ~3 service-specific drawer templates (Botox / SkinPen / Laser); Month 1-2 expands to ~20+ templates covering full Bloom catalog.

## 5.3 Mole-check pivots to Botox + GLP-1 refill (multi-episode-per-encounter)

The hardest scenario; the one Knox + user pressure-tested. Per §13.3 of pressure-test + Session 2 Turn 2.

```
T-1w:  Patient (Maria) books online for "mole check"
       → appointment(profile=office_visit_with_minor_procedure_allowed)
       + planned_intent_line(service=Mole_Check, care_episode_id=Maria.dermatology_surveillance_episode)
T-0:   Patient arrives → checked in
T+5m:  Provider Dr. Nicholas examines + reviews patient request:
       Patient: "Actually, can we skip the mole check today? I want Botox + ask about my GLP-1 refill."
       
       Provider opens encounter drawer:
       
       Action 1: Mark mole check NOT PERFORMED
       → planned_intent_line.status='not_performed' (reason: patient_pivoted)
       → CNS: mole check episode STAYS OPEN; reschedule task created for front desk
       
       Action 2: Add same-day Botox
       → new planned_intent_line(service=Botox, added_same_day=true, 
            care_episode_id=Maria.aesthetic_maintenance_episode [auto-instantiated per Q19 if not exists])
       → Botox consent check (DL-15 inv 10 ABSOLUTE clearance gate)
       → consent_line created (signed on tablet)
       → performed_intervention_line(Botox 30 units, areas, provider=Nicholas, attestation=attested)
       
       Action 3: GLP-1 refill review
       → planned_intent_line(service=GLP1_refill_review, added_same_day=true,
            care_episode_id=Maria.glp1_weight_loss_episode)
       → Provider reviews labs + weight + BP (Lane 5 patient-record artifacts)
       → performed_intervention_line(rx_review_completed, rx_order_id=<NEW>, rx_state=pending_pharmacy)
       → CNS sends Rx to pharmacy + schedules monthly subscription billing run

T+20m: Front desk cart:
       Botox × 30 units = $420
       (GLP-1 refill is on monthly subscription; not on this cart)
       Mole check: $0 (not performed)
       Total: $420
       Settle → paid
       
T+25m: Provider signs 3 separate documentation outputs (or one consolidated; clinic policy):
       - Botox treatment note
       - GLP-1 refill clinical review note (with attestation that labs + weight reviewed)
       - Mole check encounter note (noting "not performed; patient pivoted; recommended reschedule in 90d")

T+1d:  CNS fires:
       - Botox aftercare SMS (aesthetic episode)
       - "We didn't get to your mole check today. Schedule here:" SMS (derm episode reschedule)
       - "Your GLP-1 will ship in 2 days" SMS (GLP-1 episode)
       
T+14d: Botox 2-week tox check offer (aesthetic episode)
T+30d: GLP-1 next refill cycle (auto-bill + follow-up)
T+90d: CNS reminder: mole surveillance due (derm episode)
T+180d: Aesthetic rebook reminder (aesthetic episode)
```

**Substrate criticality:**
- ONE encounter row. THREE care_episodes linked via `encounter_line.care_episode_id` (Q16 recommendation).
- Original planned_intent_line preserved with `status='not_performed'` + reason (Q8).
- Mole surveillance episode does NOT auto-complete (CNS reads not_performed status + keeps episode open).
- 3 distinct after-visit follow-up cadences per episode (CNS orchestration_runs).
- ONE patient view: timeline shows all 3 threads in one chart.

**This is the medspa/derm scenario Mindbody cannot handle.** It requires Care Episode + multi-episode-per-encounter + planned-vs-performed substrate. Layer 2 + pressure-test + Session 2 all converge here.

## 5.4 Hims-style async Rx visit (no scheduled time)

```
T-0:   Patient submits GLP-1 intake form via portal
       → intake_submitted event (patient_state_event category)
       → CNS classify (safety/triage envelope per DL-14 inv 9):
         "GLP-1 weight loss intake; not urgent; clinical envelope review needed"
       → CNS creates orchestration_run(pathway=hims_async_glp1_review)
       → enqueues provider review task

T+2h:  Provider in queue picks up task → opens patient context:
       - Intake responses (Lane 5)
       - Prior history (Lane 1)
       - Eligibility check (clinical)
       - Lab requirements (if any)
       
       Provider decision:
       Option A: Cleared for Rx → write Rx
       Option B: Need labs first → order labs, send patient message
       Option C: Not eligible → decline with reason; send patient message

       (Provider chooses Option A)
       
       → CNS instantiates encounter_container(
            profile=async_review,
            appointment_id=NULL,
            primary_care_episode_id=patient.glp1_weight_loss_episode [auto-instantiated]
          )
       → performed_intervention_line(rx_written, rx_order_id=<NEW>, attestation=attested)
       → provider_note(signed)
       → CNS sends Rx to pharmacy
       → subscription_billing_enrolled event
       → CNS sends patient: "Your GLP-1 prescription is being processed. You'll get a tracking number tomorrow."

T+1d:  Pharmacy ships → CNS sends tracking SMS
T+7d:  Patient gets medication → CNS schedules check-in: "How's your first week going?"
T+30d: Auto-bill + next-month-supply + follow-up

T+90d: 3-month check-in: lab requirement (if clinic policy) → CNS sends lab kit request
```

**Substrate criticality:**
- Encounter row exists WITHOUT appointment row (`appointment_id=NULL`). Per Q20 recommendation.
- Profile=async_review drives policy: no scheduled_time required, no room, provider attestation required, chart signoff required.
- Care Episode active across all subsequent monthly cycles.
- CNS coordinates everything. No calendar UI required.

**This is Hims.** OMNI does Hims with MORE clinical structure than Hims itself (per Knox Session 2 Turn 16).

## 5.5 Video visit (multi-initiator Day 0; ad-hoc Month 6)

Per user direction 2026-05-17 Q20: Hims-style patient ALWAYS has option to schedule video / in-clinic. "Schedule video call now" affordance on patient portal Day 0. Multiple initiators first-class.

```
PATIENT-INITIATED SCHEDULED VIDEO (Day 0 affordance for Hims-hybrid patient):
T-3d:  Hims-style patient (no physical clinic visit history) logs into portal
       Patient clicks "Schedule video call now"
       → portal shows available slots on Provider C's calendar
       Patient picks Tuesday 2pm
       → appointment(profile=video_visit, scheduled_provider_id=C, booking_initiator='patient')
       → encounter created (venue.virtual_flag=true, provider_schedule_location=C's_calendar, patient_state_jurisdiction=patient.state)
       → video_session created (vendor_adapter=zoom_video_sdk, join_link generated, no room_id)
       → CNS sends SMS with link "See you Tuesday at 2pm, click here at 2pm"
T-1h:  Reminder + link re-send
T-0:   Patient clicks link → joins video room → video_started event
       Provider C clicks "Start" → video_started event from provider side
       Bidirectional video active
T+25m: Visit concludes → video_completed event
       Provider opens performed_intervention drawer → records what was done
       performed_intervention_line(virtual_visit_completed, decisions_made=[...], rx_order_id=...)
T+30m: Provider signs note → note_signed
       Charge line auto-generates if billable (subscription billing if Hims membership)

PROVIDER-INITIATED SCHEDULED VIDEO (Day 0):
       Provider in queue sees patient needing follow-up
       Provider clicks "Schedule video visit" from patient profile
       → patient gets SMS with slot options OR notification with proposed time
       Patient confirms → appointment booked
       (same downstream flow)

CNS-SUGGESTED SCHEDULED VIDEO (Day 0):
       Care episode follow-up cadence fires (e.g., GLP-1 30-day check-in)
       → CNS emits orchestration_action(suggest_appointment_to_patient, profile=video_visit, suggested_slots=[...])
       → patient gets SMS "Time for your monthly check-in. Tap to schedule: [link]"
       Patient picks slot or replies with preferred time
       → appointment booked (booking_initiator='patient_via_cns_suggestion')

AD-HOC PROVIDER-INITIATED (Month 6 UX; substrate Day 0):
       Patient sends inbound message: "Can we hop on a quick call?"
       Provider opens patient profile, clicks "Start video call now"
       → video_session(no_appointment_id, no_encounter_id, ad_hoc=true, initiator=provider)
       → CNS sends link SMS to patient
       → patient joins → video_started
T+10m: video_completed
       Provider OPTIONALLY creates async_review encounter post-facto IF accountable clinical action occurred during call
```

**Substrate criticality:**
- `video_session` has `encounter_id` nullable (admits ad-hoc).
- `appointment.booking_initiator` enum: `patient / provider / staff / cns_suggestion` per Q4+Q20.
- Zoom is rail. OMNI owns video_session state. Per DL-13.
- Ad-hoc → async_review encounter promotion is CNS-decision-driven, not automatic. Per Q7 + Q20.
- Day 0 affordances: patient portal "Schedule video visit" / provider quick-book / CNS-suggested slot.
- Ad-hoc-from-message-thread provider-initiated UX is Month 6 (substrate Day 0).

## 5.6 Red light therapy (resource_only_session, no provider)

```
T-3d:  Patient books red light → appointment(profile=resource_only_session)
       Provider: NULL (allowed by profile policy)
       Room: red_light_room_2
       Resource: red_light_device_A
       Package: red_light_10_session_package (5 redeemed, 5 remaining)
T-0:   Patient arrives → checked in
       Staff (MA) starts device → session begins
T+20m: Session ends
       Staff records: session_completed (line_kind=performed_intervention_line, line_subkind=resource_session,
                                          authorship_state='staff_drafted')
       Profile policy: provider_attestation_required=false for resource_only_session
       → cart auto: package_credit_redemption (session 6 of 10)
       → cart settle (package credit, no cash)
       → CNS schedules session-7 reminder
```

**Substrate criticality:**
- `requires_provider=false` per encounter_profile policy.
- Staff-drafted performed line is FINE (no provider attestation needed for this profile).
- Documentation requirement: session_log (lightweight, not provider note).

## 5.7 Multi-provider procedure (attribution at line level)

```
Scenario: Bodysculpting + Botox + lip filler all in one visit; 2 providers involved
T-0:   Patient arrives → encounter started
T+5m:  Provider A (MD Nicholas) performs Botox 24 units → performed_intervention_line(performer=Nicholas)
T+10m: Provider B (NP Sarah) performs CoolSculpting (different room) → performed_intervention_line(performer=Sarah)
T+45m: Provider A returns + performs lip filler 1 syringe → performed_intervention_line(performer=Nicholas)
T+60m: Front desk cart shows:
       Botox × 24 units (performer: Nicholas)
       CoolSculpting cycle (performer: Sarah)
       Lip filler × 1 syringe (performer: Nicholas)
       Discount + payment
T+70m: Settled

Provider commission attribution per LINE:
  Nicholas earns commission on Botox + Lip filler
  Sarah earns commission on CoolSculpting
  Selling_staff (front desk Jane) earns selling-comm if applicable
```

**Substrate criticality:**
- `attribution_line` substrate stores: performer_id / assistant_id / supervisor_id / seller_id / checkout_staff_id PER PERFORMED LINE. Not at appointment level. Per Q3 + Knox Session 2 Turn 19 #1.
- Commission rules read attribution_lines, NOT appointment.scheduled_provider_id.

## 5.8 Multi-location federation (cross-clinic patient flow)

```
Patient: Maria
Brand: Bloom Health (federated multi-location)
Locations: Bham (legal_entity=Bloom_MI), Somerset (legal_entity=Bloom_MI), Florida (legal_entity=Bloom_FL)

T-365d: Maria has visits at Bham → encounters tagged venue(physical_location=Bham_id, brand=Bloom, legal_entity=Bloom_MI, federation_of_record=Bloom_brand_id)
T-180d: Maria moves to Somerset → continues care; new encounters tagged venue(physical_location=Somerset_id, brand=Bloom, legal_entity=Bloom_MI, federation_of_record=Bloom_brand_id)
T-90d:  Maria travels to Florida for snowbird season → wants treatment at Bloom_FL
       Issue: Bloom_FL is same brand but DIFFERENT legal_entity (state licensure)
       Federation/permeability policy (per A1 future arc):
         brand=share, legal_entity=cross-state (Maria's MI provider relationship visible read-only),
         clinical workflow=cross-state (Florida provider can see history),
         operational queues=NOT shared (Bham/Somerset queues don't see FL),
         provider commissions=local to legal_entity
       Maria's encounter at Bloom_FL: venue(physical_location=FL_id, brand=Bloom, legal_entity=Bloom_FL, patient_state_jurisdiction=FL, billing_rendering_location=FL_id, federation_of_record=Bloom_brand_id)

T+0:   Pure Hims patient (Bob) — no physical clinic
       Provider C licensed in OH
       Video visit scheduled on Provider C calendar
       Venue: virtual_flag=true, physical_location_id=NULL, brand=Hims_brand, legal_entity=Hims_OH_practice, patient_state_jurisdiction=Bob.state, provider_schedule_location=Provider_C_calendar, billing_rendering_location=Hims_OH_practice
```

**Substrate criticality:**
- 11-axis venue per Q12 admits both scenarios.
- Patient_relationship_id (DL-10) scopes what cross-location data is visible per federation policy.
- Care Episode CAN span venues (Maria's GLP-1 episode spans Bham + Somerset + FL).
- CNS reads federation policy at decision time + scopes orchestration_actions per resolved permeability.

---

## §5 ADDITIONAL workflow scenarios (Day 0 + Month 1-2 + Year 1 — per user direction "THINK MAN")

Scenarios beyond the canonical 8. Synthesized from Mindbody screenshots + industry-analog patterns + Sessions 1+2 implicit cases. Each shows substrate touch points + which DL primitive bears the load.

### 5.9 Patient cancels via SMS or web-link (cancellation cascade + fee enforcement)

T-2d: Patient gets reminder SMS with cancellation link. T-23h: Patient clicks cancel. Substrate: `appointment_cancelled` event + DL-15 inv 7 cancellation policy enforcement reads service.cancellation_policy + lead-time threshold + clinic policy. If outside grace window: deposit forfeiture line + `commerce_order_line(line_kind='cancellation_fee', amount=$X, reason='late_cancel_within_24h')`. CNS emits `waitlist_promotion_check` orchestration_action → first waitlist match gets `waitlist_offer_sent` per DL-15 inv 8 + 16. If patient cancels INSIDE grace window: no fee; waitlist promotion still fires; resources released atomically.

Mindbody handles cancellations but stores fee charge as ad-hoc Pricing Option ("Cancellation Policy $0" — per Batch 16 Step 06 + Batch 20 Step 06 substrate trick). OMNI Day 0 admits cancellation_fee as 1st-class line_kind. **Substrate Day 0; full waitlist promotion UI Month 6.**

### 5.10 No-show (no-show fee + lifecycle re-engagement)

T+15m past appointment_time: no patient check-in. Front desk or CNS marks `no_show` (per DL-15 inv 5 state 10). Substrate emits `no_show_confirmed` event. CNS fires:
- `commerce_order_line(line_kind='no_show_fee')` per clinic policy
- `lifecycle_re_engagement` orchestration_run (per DL-14 inv 17): "We missed you today. Want to reschedule?"
- 21-event Client Alert "No Arrivals in Threshold" if pattern across last 30d (per Layer 2 G.3 DL-16 amendment)
- If 3rd consecutive no-show: escalate to provider task "Patient X: 3 consecutive no-shows; consider discharge from care or care plan revision"

**Substrate Day 0; UI Month 1-2.**

### 5.11 Provider sick-day / bulk reschedule cascade (operational reality)

Provider C calls in sick at 7am. Staff opens admin UI → marks Provider C unavailable today → triggers bulk_reschedule orchestration_run per DL-15 inv 16. Substrate cascade:
- All Provider C appointments today → status_flags |= Provider_unavailable
- CNS for each appointment: try provider_swap (find another provider with capability + availability) → if found: propose swap to patient → if no: propose reschedule slot
- Patient SMS: "Provider C is out today. We can reschedule to Tuesday 3pm OR get you in with Provider D at original time. Reply 1 or 2."
- Cancellation fee NOT charged (clinic-side cancel, not patient-side)
- Patients who don't reply within 1hr: front desk calls

Coordinated bulk-cancel emits 1 cns_decision per appointment (audit chain per DL-16 inv 30); not 30 separate manual cancellations.

**Substrate Day 0 (orchestration_run + bulk_reschedule_action); admin UI Month 1-2.**

### 5.12 Waitlist promotion (cancellation → next person in queue)

Patient X cancels. Substrate emits `appointment_cancelled` event. CNS evaluates waitlist per DL-15 inv 8: find first waitlist entry matching (service, provider, location, window). Emit `waitlist_offer_sent` orchestration_action → SMS "A slot just opened: Tomorrow 2pm with Provider C. Tap to book within 4 hours." TTL on offer. If accepted: `appointment_book` from waitlist_entry. If expired: cascade to next waitlist entry. Per DL-15 inv 16 orchestration_runs.

**Substrate Day 0; offer-cascade UI Month 6.**

### 5.13 Subscription billing failure → access suspended

GLP-1 patient on monthly autopay subscription. Card declined on next billing. Substrate emits `payment_failed` event. CNS:
- 21-event Client Alert "Autopay Failed" fires (per DL-16 amendment)
- patient SMS: "Your card was declined. Update payment to continue your GLP-1 plan: [link]"
- 3-retry cadence over 7 days
- If still failing day 7: care_episode.lifecycle_state → `paused`; subsequent Rx refill blocked until payment resolved
- Provider task created if substance/Rx is mid-protocol (clinical judgment whether to continue or suspend)

**Substrate Day 0 (payment_attempt retry + care_episode pause); CNS coordination Day 0.**

### 5.14 Lab order → result → followup encounter (derm biopsy pathway)

During mole_check encounter: provider biopsies suspicious lesion. Substrate:
- `performed_intervention_line(line_kind='procedure', service=biopsy, areas=[...], specimen_collected=true)`
- `order_line(line_kind='lab_order', test=pathology_dermatopathology, specimen_ref=<biopsy>)`
- `cns_decision(care_episode.dermatology_surveillance keeps open + cns_schedules_pathology_followup_orchestration_run)`

T+5d: pathology result arrives via lab integration (HL7 v2 / FHIR; substrate-admit Day 0; integration Year 1). Substrate emits `lab_result_received` event. CNS evaluates:
- Benign: send patient "Good news, biopsy was benign" + close pathology orchestration_run + schedule next surveillance per care_episode cadence
- Suspicious/Malignant: emit `clinical_concern_raised` event → provider task with HIGH priority → optionally auto-suggest Mohs surgery referral within federation

T+10d: provider has reviewed; calls patient OR sends portal message OR creates followup_encounter (async_review profile) if accountable clinical decision occurred during review.

**Substrate Day 0 (lab_order + lab_result placeholder); lab integration Year 1.**

### 5.15 Rx renewal with lab gating (GLP-1 monthly renewal requires monitoring)

GLP-1 patient on monthly subscription. Month 3: per clinic policy, requires BP + weight + side-effect check before next refill. Substrate:
- CNS at T-7d before month-3 renewal: emit `request_form` orchestration_action → patient gets BP + weight + symptom form
- Patient submits → `intake_evidence_link` created → linked to upcoming async_review encounter
- T-2d: provider in queue reviews intake + Rx history → decision: continue / adjust / pause / require video visit
- If continue: async_review encounter created + Rx renewed + subscription bills + meds ship
- If adjust: provider initiates dose-change via Rx amendment + patient SMS
- If video visit needed: CNS-suggested slot to patient
- If pause: care_episode.lifecycle_state → `paused`; patient SMS explaining

**Substrate Day 0; Rx adjust + lab integration Year 1.**

### 5.16 New-patient first-visit flow (full onboarding sequence)

New patient (Sarah) books online for "Botox consultation." Substrate:
- Patient created (status=prospect → first_visit_pending)
- appointment(profile=office_visit, first_visit=true)
- CNS fires onboarding orchestration_run:
  - Required-fields check (Consumer Mode per Q17 dual-mode policy)
  - Intake form push (per service_closeout_template OR clinic policy)
  - Consent forms push (general clinic consent + service-specific if applicable)
  - "Welcome to Bloom Health" SMS + portal account invite
- T-1d: reminder + form completion check; if forms incomplete: SMS nudge
- T-0: patient arrives → status_flags |= first_visit + intake_complete + consent_complete + payment_on_file
- Provider sees "FIRST VISIT" badge on encounter card → adjusts workflow (medical history review + chart establish)
- After completion: status → returning_patient; portal account active

Per user feedback gap #9 ("display new, first-time visits, if at all").

**Substrate Day 0 (patient_status enum + first_visit boolean); UI Day 0.**

### 5.17 Recurring appointment series (e.g., weekly weight checks for 12 weeks)

Care plan requires patient to come in weekly for weight check + injection. Provider creates `appointment_series` (one parent series + N child appointments). Substrate:
- `appointment_series` substrate with cadence (weekly Tuesday 4pm × 12 weeks)
- Each child appointment is normal `appointment` row linked via `series_id` FK
- Patient can cancel/reschedule individual appointments; series itself preserved
- CNS fires reminders for each appointment
- Series completion triggers care_episode milestone

Mindbody calls these "recurring appointments." OMNI substrate Day 0 admits via series substrate.

**Substrate Day 0; UI Month 6.**

### 5.18 Package purchase + first-session redemption SAME visit

Patient at front desk: "I want to buy the LHR package + use my first session today." Substrate:
- `commerce_order_line(line_kind='package_purchase', package=LHR_6_session, amount=$1800)`
- Atomic with: `commerce_order_line(line_kind='package_credit_redemption', package_ref=<NEW>, session_number=1)`
- `performed_intervention_line(LHR, session_number=1)` linked via `derived_from_performed_line_id`
- Cart settles with single payment; package created + first session immediately redeemed

This requires Commerce DL primitives Day 0 (per §8.1 Knox 8-item list + package_credit_link). Mindbody handles this clunkily. OMNI: atomic.

**Substrate Day 0 (basic package primitive in Knox 8-item commerce list); full package UI Month 6.**

### 5.19 Membership signup at checkout (mid-visit upsell)

Patient comes for Botox. At checkout: "Want to sign up for BH+ Elite membership? $159/month gets you 20% off Botox + free monthly facial." Front desk:
- Adds `commerce_order_line(line_kind='membership_signup', tier=BH_Elite, amount=$159, recurring=monthly)`
- Cart auto-recalculates Botox with -20% membership discount (per Commerce DL primitives)
- Settles total
- Substrate creates `client_membership` row + autopay schedule + recurring billing orchestration_run

**Substrate Day 0 (basic membership primitive); full discount/loyalty integration Month 6 → Year 1.**

### 5.20 Insurance prior-auth required before procedure (derm/plastics)

Patient books for biopsy or surgical_case profile encounter. Clinic policy: insurance prior-auth required if procedure CPT code matches policy table. Substrate:
- `appointment(profile=procedure_encounter)` with status_flags |= prior_auth_required
- CNS fires `request_prior_auth` orchestration_action → external integration (clearing house) OR manual staff task
- Until prior-auth received: appointment cannot transition to `arrived` state (per DL-15 inv 10 clinical clearance gating analogue)
- Once received: status_flags |= prior_auth_received → appointment unblocks

**Substrate Day 0 (status_flag + clearance gating); external integration Year 1 (per Phase D RCM).**

### 5.21 Manual reality capture (paper booking / verbal clearance / walk-in)

Real-world chaos: walk-in patient with no appointment; provider says "yeah I'll see her now"; verbal clearance given in hallway; paper booking written on a napkin.

Substrate per DL-16 inv 36 manual reality capture pathway:
- Walk-in: front desk creates appointment(walk_in=true, actor=staff_manual) for current time + immediate check-in
- Verbal clearance: provider clicks "Verbal clearance given" UI → audit_event created with reason + actor + timestamp; status_flags |= clinical_clearance_received_verbal
- Paper booking: staff manually enters appointment with reason_code='paper_booking_capture'

All visible in audit; none silent.

**Substrate Day 0 (per DL-16 inv 36); UI affordances Day 0 minimum.**

### 5.22 Minor patient with parental consent (dual-actor model)

Patient is 16-year-old presenting for acne treatment. Substrate:
- Patient row: minor=true; guardian_patient_relationship_id FK to parent's patient record
- Consent rows: require BOTH minor's assent (if age-appropriate) AND parent's consent
- Encounter participation: parent may join visit (additional `attribution_line` for parental observer role)
- Billing: parent is responsible_party (commerce_order.billing_party_patient_id = parent.id)
- Messaging: portal access split — parent gets messages; minor may have separate portal at clinic discretion

DL-11 messaging substrate + DL-10 patient_relationship cover this. OMNI substrate Day 0.

**Substrate Day 0 (DL-10 relationship + dual-consent); UI Month 1-2.**

### 5.23 Bulk-cancel (clinic closed for snow / holiday)

Clinic decides to close tomorrow due to snowstorm. Operator opens admin UI → "Close clinic 2026-05-17 all day" → triggers mass_cancel orchestration_run. Substrate:
- Reads all appointments for date + location
- Per appointment: `appointment_cancelled` event with reason=`clinic_closure_snow_2026_05_17`
- No cancellation fee charged (clinic-side cancel)
- CNS for each: SMS patient "Sorry, we're closed tomorrow due to weather. Reschedule here: [link]"
- Waitlist NOT promoted (closure not slot release)

**Substrate Day 0 (mass_cancel orchestration_run); admin UI Month 1-2.**

### 5.24 Resource maintenance (laser device down for service)

Laser device A fails diagnostic check. Front desk marks "Laser A out of service." Substrate:
- resource_unavailable_window created (start=now, end=null)
- Any appointment requiring Laser A during window → CNS evaluates per DL-15 inv 11 live-state revalidation
- Patients with affected appointments: SMS "Your laser appointment needs to move; we'll call you." + provider/staff task
- Once device repaired: resource_unavailable_window closed; waitlist for laser flushes

**Substrate Day 0 (resource availability window primitive); UI Month 1-2.**

### 5.25 Cross-state patient travel (Maria snowbird seasonal flow expansion)

Already partially covered in §5.8. Adds: Maria flies to FL Dec 1 - April 1 each year. Care_episode active across both locations. Bloom_FL provider needs read access to Maria's MI history (per federation/permeability policy: brand=share, legal_entity=cross-state read-only).

Substrate: per-dimension permeability policy resolves "Bloom_FL provider can read MI clinical history" + "Bloom_FL cannot edit MI provider notes." Maria's seasonal pattern detected via location_of_record changes + venue history.

**Substrate Day 0 (federation policy + cross-venue read scoping); seasonal-pattern detection UI Year 1.**

### 5.26 Provider-on-coverage (Provider A covering Provider B's patients during vacation)

Provider B is on vacation. Provider A covers her patients. Substrate:
- Provider B's appointments during vacation period: scheduled_provider_id stays Provider B (history preserved); performing_provider on the day = Provider A (attribution_line override at performance time)
- CNS reads coverage_assignment substrate when patient sends inbound message → routes to covering provider
- Encounter audit lineage shows BOTH: scheduled with Provider B + performed by Provider A

Per Q10 4-tier attestation + attribution_line. Mindbody handles coverage poorly; OMNI substrate first-class.

**Substrate Day 0 (coverage_assignment + attribution_line override); UI Month 1-2.**

### 5.27 Industry-analog pressure-test scenarios (per user reminder: airline/restaurant/Amazon/Tesla)

Beyond the 26 scenarios above, OMNI substrate also handles:

- **Airline-style standby/no-show release** (cancellation cascade § 5.12)
- **Restaurant-style comp / discount given by manager** (admin_override path § 6.14 Q10 tier 4)
- **Amazon-style return-within-30-days** (refund + restock-to-inventory toggle per Mindbody Batch 19 Step 07 evidence)
- **Tesla-style continuous-sensor-input + decision-time-snapshot** (CNS reads patient state continuously; orchestration_action carries context_snapshot per DL-16 inv 33)
- **Uber-style surge-pricing / dynamic-pricing** (rejected for Day 0; loyalty rotating-tier discounts at Year 1 instead)
- **Hotel-style early-check-in / late-checkout** (resource hold extension; per DL-15 inv 4 hold timeout discipline)
- **Epic-style encounter-with-multiple-orders** (multiple order_line + lab_line + rx_line per encounter; substrate Day 0)
- **Shopify-style order with split-tender** (multi-payment per commerce_order per Knox 8-item)
- **Ford-assembly-line-style sequential resource scheduling** (procedure_encounter with surgeon → anesthesia → room → recovery; sequential resource holds per Q12 + DL-15)

These map naturally onto the OMNI substrate; not separate workflows.

---

# §6 Q1-Q24 resolution ledger

Tentative recommendations. Final lock requires joint Opus + Knox + user signoff. Q1 and Q6 lead the dependency spine.

## 6.1 Q1 — Encounter container architecture (PRIMARY)

**Recommended decision:** **Option A — Single `encounter_container` substrate table + `encounter_profile` enum + `encounter_profile_policy` config table.** Encounter is the operational touchpoint container above appointment. Appointment is one PROJECTION of encounter (the scheduled-time instance with a row in `appointment` table FK-linked to encounter; nullable appointment_id on encounter admits async_review profile per Q20).

**Reasoning:**
- Admits all 13 encounter_profiles without per-modality table explosion
- Profile policy is config (small enum-like table), not orchestration (no mini-brain per DL-14 inv 14 + Q22)
- Lines own truth in proper substrates (clinical / commercial / operational / patient-record); encounter LINKS via `encounter_line` rows
- Knox Session 1 Turn 5 + Session 2 Turn 1 tentative position
- Layer 2 Section I.3 moat #3 (encounter container architecture flexibility)
- Multi-episode-per-encounter (Q16) cleanly admitted via `encounter_line.care_episode_id`

**Alternatives considered:**
- Option B (polymorphic + per-profile subtype tables): rejected — per-modality table explosion; harder cross-profile reporting; resists adding new profiles.
- Option C (pure tag/role pattern, no profile enum): rejected — substrate cannot enforce policy; UX confused without enum; doctrine unfriendly.
- Option D (2 separate top-level tables `clinic_visit` + `procedure_case`): rejected — loses medspa truth that every visit can become a mini-procedure; duplicate substrate.

**What breaks if wrong:**
- Option B chosen: every new modality (e.g., adding sleep_study_visit later) requires new table + migration + per-profile RPC explosion
- Option C chosen: substrate cannot enforce "procedure_encounter requires consent"; bugs slip in
- Option D chosen: medspa workflow corrupted; "every visit can become mini-procedure" lost

**Downstream impact:**
- DL-15 inv 5 13-state lifecycle composes with profile (state machine still applies; profile drives required-fields)
- New substrate primitives: `encounter_container`, `encounter_profile`, `encounter_profile_policy`, `encounter_line`
- Day 0 includes 5 profiles minimum (per §8); other 8 admitted but UI deferred

**Deferred:**
- Exact policy table content (which fields are required per profile) — Phase B.5+ via Knox + user joint working session
- Per-profile UI templates — Phase 1+

## 6.2 Q6 — Care Episode parent object (PRIMARY)

**Recommended decision:** **`care_episode` is a 1st-class substrate primitive ABOVE encounter_container.** Patient has 0-N active care_episodes. Encounter has nullable `primary_care_episode_id` FK (for display). Each `encounter_line` has its own `care_episode_id` FK (admits multi-episode-per-encounter; Q16).

**Reasoning:**
- Mohs+Botox+GLP-1 scenario (§5.3) forces multi-episode-per-encounter; line.care_episode_id is the cleanest way
- Longitudinal pathway is a real concept distinct from patient profile (Knox Session 2 Turn 1)
- Derm + specialty clinics need this for "Mole surveillance episode" + "Aesthetic maintenance episode" + "GLP-1 episode" simultaneously
- Episode lifecycle enum (open / active / paused / closed / completed / lost_to_follow_up) admits real care patterns
- CNS reads episode state to coordinate follow-ups + complete derm surveillance only when mole_check actually performed

**Alternatives considered:**
- Derived projection over treatment_items + clinical_visits + outbound_jobs: rejected — forces re-derivation; performance + clarity loss; doesn't admit auto-detect "episode active" predicates
- Episode as flat tags on appointments: rejected — false-equivalence between tag and pathway; doesn't carry lifecycle state
- Episode as required FK on encounter (not nullable): rejected — forces "primary episode" choice on multi-episode visits like §5.3

**What breaks if wrong:**
- No Care Episode primitive: "Is patient still in GLP-1 program?" requires N joins + heuristic predicates; CNS can't reliably orchestrate
- Episode-as-projection: every read recomputes; expensive at scale; auto-detect rules duplicated across consumers
- Required FK (not nullable on line): multi-episode visits lose data; forces "primary" choice that's wrong half the time

**Downstream impact:**
- New Care-Coordination DL (Phase B.5+)
- Substrate primitives: `care_episode`, `episode_catalog` (per-clinic template), auto-instantiation rules in CNS
- Q19 hybrid: clinic configures episode templates; system auto-instantiates per-patient on first qualifying event

**Deferred:**
- Episode end-criteria auto-detection logic (Phase B.5+; needs clinical input)
- Cross-federation episode portability per A1 future arc

## 6.3 Q15 — Encounter substrate identity

**Recommended decision:** Same as Q1 — Option A single + profile_enum + policy_table.

(Q15 was an audit-surfaced sub-question of Q1; resolves with Q1.)

## 6.4 Q16 — Encounter ↔ Care Episode multiplicity

**Recommended decision:** **1-to-many via `encounter_line.care_episode_id`** (each line has own episode FK). Encounter has nullable `primary_care_episode_id` FK for display/aggregation purposes only.

**Reasoning:** §5.3 Mohs+Botox+GLP-1 scenario forces it; nullable primary FK allows simple cases (one-episode visits) to designate the primary for UI.

**Alternatives:** Required single FK (forces wrong choice); join table (overkill); none.

**What breaks if wrong:** multi-episode visits get forced into single category; CNS misroutes follow-ups.

**Downstream:** substrate primitive; UI selector for "primary episode" on multi-episode encounters.

## 6.5 Q17 — Charge-line lifecycle independence

**Recommended decision:** **Separate lifecycle states.** `performed_intervention_line.clinical_lifecycle_state` ENUM(draft, attested, signed_off, amended); `commerce_order_line.commercial_lifecycle_state` ENUM(proposed, finalized, refunded, voided). Linked via `derived_from_performed_line_id` FK. Independent transitions; substrate enforces clinical-line content immutable post-attestation (amendments via addendum); commerce-line discount/payment mutable until cart-settled.

**Reasoning:** Knox Session 2 Turn 21 explicit 3-lane model. Provider attests clinical truth; front desk modifies commercial without breaking clinical attestation. Substrate enforcement is the only way to prevent corruption at scale.

**Alternatives:** shared lifecycle (rejected; cross-domain edit corrupts truth).

**What breaks if wrong:** front desk applying loyalty discount silently invalidates provider attestation; chart corrupts; medico-legal liability.

**Downstream:** Commerce DL substrate invariant; substrate FK + role-gated mutation enforcement.

## 6.6 Q18 — Closeout substrate vs derived projection

**Recommended decision:** **Derived projection** (NOT 1st-class substrate). Closeout view computed at render-time from: performed_intervention_lines + outstanding orchestration_actions (aftercare / follow-up / rebook tasks) + service_closeout_template configuration.

**Reasoning:** Substrate minimalism per DL-13. Closeout is workflow, not data. Per-service-closeout-template config table is small (per-service Day 0; per-encounter-profile later).

**Alternatives:** 1st-class substrate (rejected; substrate explosion).

**What breaks if wrong:** closeout state diverges from underlying truth; provider sees "closeout incomplete" while chart says complete.

**Downstream:** `service_closeout_template` config table (per-service closeout suggestions: aftercare template / follow-up cadence / rebook interval / retail recs); UI projection logic.

## 6.7 Q19 — Care Episode auto-creation vs explicit

**Recommended decision:** **Hybrid.** Clinic configures Episode catalog templates (e.g., "Aesthetic_Maintenance", "GLP-1_Program", "Mole_Surveillance"). System auto-instantiates per-patient on first qualifying event (e.g., first Botox performed_intervention_line → auto-create Aesthetic_Maintenance episode if not exists). Episodes lifecycle-managed by CNS auto-detection rules + manual provider override.

**Reasoning:** Auto-only causes proliferation. Explicit-only causes orphans. Hybrid balances; clinic configures intent; system saves clinical time.

**Alternatives:** auto-only / explicit-only / no-template (all rejected).

**What breaks if wrong:** episode proliferation (1000s of orphan "Botox_episode" rows); or no episodes (multi-episode-per-encounter unusable).

**Downstream:** `episode_catalog` config table; auto-instantiation rules in CNS at L4 context assembly; manual override UI.

## 6.8 Q20 — Async encounter as 1st-class or interaction-promoted

**Recommended decision:** **Same encounter substrate, `profile=async_review`, with nullable `appointment_id`.** When provider takes accountable action on inbound intake / message / lab review, CNS-decision creates encounter row with profile=async_review. Encounter exists WITHOUT appointment row.

**Reasoning:** Cleanest — one encounter table; profile drives requirements; doesn't fork substrate.

**Alternatives:** sub-type table (per-profile explosion); promoted-interaction (complex; loses encounter clarity).

**What breaks if wrong:** Hims path forced into appointment substrate; calendar UI showed for async patient.

**Downstream:** nullable `appointment_id` on encounter; CNS promotion rules; encounter_profile.requires_scheduled_time=false for async_review.

## 6.9 Q3 — Four-entity split validity (Schedulable / Clinical / Billable / Resource-Inventory)

**Recommended decision:** **Keep the split conceptually; expand to 12-15+ primitives per Layer 2 A.4.** The 4-entity is the SIMPLIFIED mental model; actual substrate has more granularity:

- Schedulable Service (appointment_type per current DL-15)
- Clinical Service / Intervention (performed_intervention_line subtypes)
- Procedure (procedure_line subtype)
- Billable Item / Pricing Option (4-type enum per Mindbody evidence)
- Retail Product (4th catalog substrate distinct from pricing_option)
- Inventory Item (consumed unit; lot-tracked future)
- Membership Tier
- Subscription / Contract (autopay rolling)
- Package (mixed-type bundle)
- Gift Card (price-value decoupled)
- Promo Code
- Discount Program (rotating-tier loyalty)
- Intro Offer
- Tip (1st-class commerce line)
- Treatment Deposit (variant Pricing Option)
- Account Payment

**Reasoning:** Knox Session 1 Turn 1 4-split is right intuition; Mindbody evidence + Layer 2 expanded to 15+. Each primitive has distinct lifecycle / billing / commission rules.

**Alternatives:** Strict 4 entities (rejected; too few); flat single "billable" table (rejected; Mindbody pattern that breaks).

**What breaks if wrong:** Botox 7-tier workaround returns; can't separate retail vs service vs membership.

**Downstream:** Commerce DL primary work (Layer 2 G.2.1).

## 6.10 Q4 — Mode-per-service-line + Q20 multi-initiator video booking

**Recommended decision:** **`service.mode` enum per-service catalog row + `encounter_profile` per-encounter row + MULTI-INITIATOR booking pathway** (per user direction 2026-05-17 Q20). Both service.mode and encounter_profile compose at booking time. Booking can be initiated by patient (portal / app), provider (in-EHR / mobile), staff (front desk), or CNS suggestion (system-proposed slot per care_episode follow-up cadence).

**`service.mode` enum:** `async_first / schedule_required / hybrid / disabled_scheduler / async_first_with_optional_video / resource_booking_only`.

**Multi-initiator booking pathways (per Q20 user direction, all first-class Day 0):**
1. **Patient-initiated** (portal / Hims-style "Schedule video call now" affordance / mobile app)
2. **Provider-initiated** (provider books on own calendar from patient profile; e.g., "follow-up in 2 weeks")
3. **Staff-initiated** (front desk books on phone / in-person)
4. **CNS-suggested** (system proposes slot based on care_episode cadence / Rx renewal due / lab review due / 2-week tox check / 90-day mole surveillance; patient confirms or modifies)

For a Hims-style patient: ALL 4 pathways available Day 0. Patient clicks "Schedule video call now" → patient-initiated. Provider initiates from review queue → provider-initiated. CNS proposes "Time for monthly check-in" → CNS-suggested patient confirms.

**Reasoning:** Knox Session 1 Turn 3 framing; service-level mode admits "GLP-1 = async_first" while keeping office_visit profile available for hybrid cases. User direction 2026-05-17: Hims patient ALWAYS has option to schedule video / in-clinic. Multi-initiator first-class Day 0.

**Alternatives:** mode only on encounter_profile (rejected — service-line declarations needed for clinic policy); flat single mode (rejected — too rigid); single-initiator (rejected per user direction).

**What breaks if wrong:**
- Single-initiator only → patient cannot book from portal Day 0; Hims model breaks
- Mode-only-encounter → can't express "GLP-1 service is async-first by default"
- No CNS-suggested → care_episode follow-ups manual; CNS coordination breaks

**Downstream:** `service.mode` column; CNS booking validation reads service.mode + encounter_profile + booking_initiator; patient portal "Schedule visit" affordance Day 0; provider quick-book UI Day 0; CNS suggested-slot orchestration_action Day 0.

## 6.11 Q7 — Encounter vs Interaction boundary

**Recommended decision:** **Interactions stay in messaging substrate (DL-11 protected).** Encounter is created ONLY when accountable clinical/operational decision/action occurs. CNS-decision (DL-16 cns_decision category) is the explicit "promote interaction to encounter" event. Encounter has optional `encounter_evidence_link` substrate to reference interactions as evidence.

**Working rule (Session 2 Turn 6-8):** Encounter = accountable care/action unit. Interaction = communication/contact unit. Episode = longitudinal pathway context. NOT every touchpoint becomes encounter.

**Reasoning:** Knox + user explicit pushback in Session 2; DL-11 already protects messaging substrate; user worried about "shoving messages into encounters."

**Alternatives:** auto-promote every message to encounter (rejected — fake structure); never promote (rejected — async_review encounters can't fire).

**What breaks if wrong:** every "thanks!" SMS becomes a medical visit; chart becomes garbage.

**Downstream:** CNS promotion rules; `encounter_evidence_link` substrate.

## 6.12 Q8 — Planned Intent vs Performed Truth substrate

**Recommended decision:** **Separate `encounter_line` rows with `line_kind` discriminator** (`planned_intent` vs `performed_intervention`). Planned status enum: `open / completed_as_planned / not_performed / superseded / scheduled_in_error / patient_declined / insufficient_time`. UPDATE allowed on status; UPDATE on service_id REJECTED (new planned_intent_line with `added_same_day=true` flag instead).

**Reasoning:** §5.3 mole-pivot scenario forces it. Substrate enforcement is the only way "do not rewrite appointment history" (Knox Session 2 Turn 3) holds at scale.

**Alternatives:** mutable appointment.service_id (rejected; corrupts metrics + history); single planned-performed table (rejected; can't model "planned but not performed").

**What breaks if wrong:** wrong-booking-pivot loses dermatology surveillance; metrics like online_booking_mismatch_rate become unmeasurable.

**Downstream:** DL-15 amendment for planned-vs-performed substrate enforcement; metric substrate (Layer 2 §5.14) for derived metrics.

## 6.13 Q9 — 3-lane source-of-truth separation

**Recommended decision:** **Substrate-enforced 3-lane + 2 projections separation per §4.** Clinical lane (performed_intervention_line) + Commercial lane (commerce_order_line, derived_from FK to performed) + Operational lane (encounter / appointment / closeout) + Communication lane (DL-11 messaging) + Patient-record artifacts lane (clinical_media / intake / consent / docs). Plus 2 read-only projections: provider_note (renders from performed+attestation) and receipt_projection (renders from charge_lines).

**Reasoning:** Knox Session 2 Turn 21 explicit. Substrate FK + role-gated mutations are the enforcement primitive. Cross-lane edit boundaries per §4.2.

**Alternatives:** unified single substrate (rejected; corrupts at scale); 6+ lanes (rejected; over-engineered).

**What breaks if wrong:** front desk applying discount changes clinical chart; receipt corruption (Mindbody $196,365 bug).

**Downstream:** Commerce DL substrate invariants; FK constraints; role-based mutation policies.

## 6.14 Q10 — 4-tier provider authorship + attestation

**Recommended decision (CLARIFIED per Knox Session 2 + user direction 2026-05-17):** **4-tier model on `performed_intervention_line` with `staff_drafted` as ACCEPTABLE Day 0 workflow** (not exception path):

1. `authorship_state='provider_entered'` + `attestation_state='attested'` — cleanest / preferred path
2. **`authorship_state='staff_drafted'` + `attestation_state='pending'` — ACCEPTABLE Day 0 workflow (per Knox: "may be a workflow shock, support staff-drafted/admin-reconciled fallback, not a hard Day 0 bottleneck").** Checkout allowed per clinic policy; provider attests later (end-of-day / end-of-visit / chart-close timer).
3. Front desk can NEVER set `line_kind='performed_intervention'` directly (commercial-only); substrate constraint
4. `authorship_state='admin_override'` + `attestation_state='pending'` + audit_event `event_kind='checkout_override_with_provider_reconciliation_required'` — reconciliation task created

**Why tier 2 is NOT an exception path Day 0:** Bloom medspa current workflow IS verbal hallway handoff (Session 2 Turn 23 evidence). Forcing tier 1 (provider chairside) Day 0 is workflow shock that risks adoption. Tier 2 path is the realistic Day 0 fallback that preserves chart integrity (pending attestation visible; reconciliation task auto-created if not attested by end-of-day). Bloom can MIGRATE from tier 2 → tier 1 organically as providers adopt the chairside drawer over Month 1-3.

**Reasoning:** Session 2 Turns 22, 27 verbatim. Provider owns clinical truth; front desk owns commercial settlement; admin override leaves audit scar. User direction 2026-05-17 confirms: do not force tier 1 as hard Day 0 bottleneck.

**Alternatives:** tier 1 hard requirement Day 0 (rejected per user direction; workflow shock); provider-must-be-online-always (rejected; clinic flow breaks); admin override silent (rejected; audit corrupts).

**What breaks if wrong:**
- Tier 2 not Day 0 → Bloom adoption shock; clinic abandons OMNI; product launch fails
- Tier 2 has no attestation gate → chart corruption Mindbody-style
- Admin override silent → audit corruption; medico-legal exposure

**Downstream:** RBAC DL substrate; `performed_intervention_line.authorship_state` + `attestation_state` + `attesting_actor_id` + `attested_at` columns; reconciliation task workflow; end-of-day chart-close timer per encounter_profile policy.

## 6.15 Q11 — Visit Closeout drawer 7 lanes

**Recommended decision:** **Derived projection** per Q18. Closeout drawer renders from: performed_intervention_lines + outstanding orchestration_actions (filtered by encounter_id) + service_closeout_template (per-service config) + provider_role policy. Provider sees CONTEXTUAL drawer (not generic checklist).

7 lanes (UI projection):
1. Performed / chargeable care → cart
2. Documentation requirements → note / signoff
3. Patient instructions → aftercare message
4. Follow-up plan → 2-day SMS / 2-week tox check / rebook
5. Retail recommendations → product link / staff discussion
6. Scheduling instructions → rebook cadence
7. Internal ops tasks → front desk / MA / billing tasks

**Reasoning:** Knox Session 2 Turn 29; Q18 derived; admit complexity without substrate explosion.

**Alternatives:** 1st-class substrate (rejected; substrate explosion).

**What breaks if wrong:** generic checklist becomes unusable; provider ignores; aftercare falls through cracks.

**Downstream:** `service_closeout_template` config; UI drawer rendering logic; CNS orchestration_action factories per template.

## 6.16 Q5 — Capability flags per brand/clinic

**Recommended decision:** **2-layer composition** (brand × per-staff). Per-brand `capability_flag` config table; per-staff `staff_capability` rows (8+ flags); CNS resolves capability at action emission time per DL-14 inv 11 policy layers.

**Reasoning:** Mindbody pattern (Layer 2 C.10); user feedback gap #5; extends existing `lib/auth/capabilities.ts` without replacing.

**Alternatives:** flat per-staff (rejected; brand-level admin can't grant); flat per-brand (rejected; staff variation lost).

**What breaks if wrong:** can't enable specialty modalities per-brand; can't restrict per-staff.

**Downstream:** RBAC DL substrate; capability resolution at orchestration_action emission per DL-14 inv 11.

## 6.17 Q12 — 11-axis location / venue / federation taxonomy + Q7 Federation Day 0

**Recommended decision (REVISED per user direction 2026-05-17):** **`venue` substrate with 11 typed columns per §2.5 SHIPS DAY 0. Federation/permeability policy resolution + cross-location patient flow ALSO ship Day 0** (not Year 1).

**Reasoning:** User explicit — "3 spas using this on Day 1." Day 0 customer base is medspa federation, not single-location. Without venue substrate + federation/permeability policy on Day 0, multi-site spas cannot deploy. The substrate was already planned Day 0 (§2.5); user direction confirms policy resolution + cross-location patient flow are NOT deferrable to Year 1.

**Day 0 federation scope (concrete):**
- 11-axis `venue` substrate (physical_location / virtual / brand / legal_entity / deployment / patient_relationship / provider_schedule_location / patient_state_jurisdiction / billing_rendering_location / resource_location / federation_location_of_record)
- `federation_permeability_policy` substrate (per-dimension policy table per A1 future arc; brand × legal_entity × patient_state × dimension matrix)
- Cross-location patient flow (Maria Bham → Somerset same-brand same-legal_entity = full permeability; Maria → FL same-brand DIFFERENT legal_entity = jurisdiction-gated permeability per policy)
- CNS reads federation policy at decision time + scopes orchestration_actions per resolved permeability
- DL-10 patient_relationship_id scoping enforced at every cross-venue read
- Pure-Hims deployment substrate admitted (virtual_flag=true + no physical_location; provider_schedule_location + billing_rendering_location + patient_jurisdiction required)

**What ships Day 0 vs deferred:**
- Day 0: Full 11-axis venue substrate + per-dimension permeability policy table + CNS-level policy resolution + UI for cross-location patient cockpit view (per-dimension visibility)
- Month 6: per-clinic admin UI for permeability policy config (Day 0 = clinic operator works with OMNI staff to set policy; Month 6 self-serve)
- Year 1+: cross-state CMEK/data-residency / pathology cross-federation routing / advanced multi-state regulatory tooling

**Alternatives:** 3-scope identity only (User/Site/Owner per system map 1U) — too coarse, fails 3-spa Day 0; per-axis tables — over-engineered.

**What breaks if wrong:**
- If federation deferred to Year 1: 3 Day 1 spa customers cannot deploy with multi-location; product launch blocks
- If venue 1-axis only: Knox Session 2 Turn 18 failure mode — `clinic_room = location = legal_entity = brand = billing_site` collapses; pure-Hims customer cannot deploy
- If permeability default permissive: cross-brand PHI leakage; HIPAA + DL-10 violations

**Downstream:** Federation-Topology DL drafted at Phase B.5+ (NOT deferred); substrate ships Day 0; A1 future arc folds into this DL.

**Deferred:**
- Advanced cross-state regulatory tooling (state-specific consent variants / state-specific Rx scheduling rules / CMEK per-state)
- Cross-federation patient location-of-record reconciliation tooling
- Cross-state pathology integration

## 6.18 Q22 — DL-14 inv 14 + Q1 compatibility framing

**Recommended decision:** **Explicit framing: `encounter_profile` is data (substrate) + policy declaration table. CNS reads policy + applies at decision time per DL-14 inv 11 7-layer resolution. NOT mini-brain.**

**Reasoning:** DL-14 inv 14 anti-pattern is logic-running (a domain-specific orchestrator that bypasses CNS). Substrate + declarative policy is data, not logic. CNS is the orchestrator; encounter_profile_policy is config.

**Alternatives:** avoid encounter_container entirely (rejected per Q1 reasoning).

**What breaks if wrong:** if encounter starts running rules locally (e.g., a "scheduling AI engine" inside encounter substrate), DL-14 violation.

**Downstream:** clarifying note in Q1 resolution doc; possible DL-14 amendment for clarity (Phase B.5+).

## 6.19 Q13 — False-equivalence audit meta-principle

**Recommended decision:** **Keep as Phase B.5+ design audit checklist.** 6-axis (authority / lifecycle / visibility / billing / clinical-responsibility / CNS-behavior) applied when designing new substrate. Promote to DL-XX only if Phase 0 audits surface systematic violations.

**Reasoning:** Brain audit §11 found 4 pairs already separated correctly (messaging substrate / projections / events vs actions / patient identity). Existing brain practices substrate-concept-separation already.

**Alternatives:** new DL-XX (rejected for now; may revisit).

**What breaks if wrong:** drift; some future substrate decision collapses 2 concepts that differ in 1 of the 6 axes.

**Downstream:** Phase B.5+ checklist; possible DL-XX if violations surface.

## 6.20 Q14 — Photos/intake/consent/docs separate substrates

**Recommended decision:** **`clinical_media` (photos/videos/scans) + `intake_session` + `consent` + `patient_document` as 4 separate substrates.** Each LINKED to encounter via `encounter_line` rows of appropriate `line_kind`. Each lives in its own substrate with its own metadata + retention class + lifecycle.

**Reasoning:** Knox Session 2 Turn 11 explicit; Mindbody storing photos in note blob is the anti-pattern; substrate separation enables timeline projection without trapping artifacts in fragile note.

**Alternatives:** unified single artifact table (rejected; per-artifact metadata diverges); per-artifact-in-note (rejected; Mindbody anti-pattern).

**What breaks if wrong:** photos trapped in notes; intake unfindable; consent versioning lost.

**Downstream:** Clinical-Media DL (Phase B.5+); 4 substrate primitives.

## 6.21 Q23 — Care Episode vs treatment_items + clinical_visits

**Recommended decision:** **Care Episode is SIBLING substrate** (parallel to existing). `treatment_items` becomes child of care_episode via `treatment_items.care_episode_id` FK. `clinical_visits` becomes projection-of-encounter (legacy substrate kept; new encounter substrate is canonical).

**Reasoning:** Separation of concerns; legacy substrates preserved without migration; Care Episode is new primitive.

**Alternatives:** generalization (forces migration; rejected); pure projection (per-derivation cost; rejected).

**What breaks if wrong:** legacy intake substrate forced into new shape; migration risk.

**Downstream:** Care-Coordination DL; sibling primitives.

## 6.22 Q24 — RBAC layer for 4-tier authorship + attestation

**Recommended decision:** **4-tier model extends existing RBAC.** Existing `lib/auth/capabilities.ts` + 5 permission_groups + 8+ per-staff capability flags STAY. New attributes on `performed_intervention_line`: `authorship_state` + `attestation_state` + `attesting_actor_id` + `attested_at`. CNS deterministic policy validates attestation per encounter_profile.provider_attestation_required + per service_kind.

**Reasoning:** Extends without replacing; existing RBAC works; just adds attestation primitive.

**Alternatives:** separate authorization substrate (rejected; duplicates RBAC).

**What breaks if wrong:** confusing dual RBAC stack.

**Downstream:** RBAC DL substrate column additions; capability resolution at attestation time.

## 6.23 Q2 — 45 pressure-test scenarios coverage

**Recommended decision:** **All 45 scenarios resolved via combination of Q1+Q3+Q4+Q6-Q24 recommendations above.** Per-scenario verdicts now (post-recommendation):

- 14 originally COVERED by existing brain: stay COVERED
- 13 originally PARTIAL: become COVERED via Q1+Q6+Q9+Q10+Q11 recommendations  
- 13 originally MISSING: become COVERED via Q6+Q12+Q14+Q22 recommendations
- 5 multi-modality scenarios (sleep / cardio / endocrine / plastics): admitted via encounter_profile expansion; UX deferred to Year 2+

**Reasoning:** Recommendations close the gaps the audit found.

**Downstream:** Phase 1 hardening per §8.

## 6.24 Q21 — Day 0 thin slice boundary

**Recommended decision:** **Day 0 boundary per §8 below.** Includes scheduling foundation + encounter container (5 profiles) + planned-vs-performed + 4-axis booking + chairside drawer + cart placeholder + video placeholder + 15 CNS events + Care Episode skeleton + closeout placeholder. Excludes full Commerce DL, full RBAC drill-down, full settings-as-OS surface, full video stack, procedure_encounter profile depth, ICD/CPT codes.

**Reasoning:** Minimum admit-future without underbuild. Substrate admits Year 2+ scope without rewrite.

**Alternatives:** smaller (calendar-only — fails Day 0 medspa use case); bigger (full commerce — Phase C scope explosion).

**What breaks if wrong:** rewrite at month 12; cathedral-of-doctrine sloppiness.

**Downstream:** §8 phasing.

---

# §7 Mindbody gap synthesis

What the 190 screenshots taught us. 12 concrete failures. OMNI design response per.

## 7.1 Botox 7-tier per-quantity Pricing Option workaround

**Mindbody:** Pricing Option has no `quantity_strategy` enum; clinic creates 7+ separate Pricing Options for Botox at different quantities (20u / 30u / 40u / 50u / 60u + Lip Flip + Returning variants). Patient pays $14 × 20 units = $280; system requires "Botox 20 units" Pricing Option to exist as separate row. Inventory tracking impossible. (Mindbody Batches 8-9 + Batch 14)

**OMNI:** `pricing_option.quantity_strategy` ENUM (fixed / per_unit_quantity / package_count / unlimited_period / subscription_recurring) + `default_unit_price`. Botox = single Pricing Option with `per_unit_quantity` strategy. Provider enters units; system multiplies. (Commerce DL Phase C)

## 7.2 Verbal hallway handoff broken

**Mindbody:** Provider tells front desk "we did 24 Botox + SkinPen add-on"; front desk translates to charges; missed charges constant. (Knox Session 2 Turn 23 + Mindbody Batches 5-9 evidence)

**OMNI:** Provider chairside drawer pushes structured `performed_intervention_line` directly to shared cart. Front desk sees ready-to-settle cart, not transcription task. (§5.1 Botox flow)

## 7.3 Cart-edit corrupts chart

**Mindbody:** Front desk applies discount or modifies units at checkout; provider note (if it exists) is silently stale. No substrate enforcement. (Knox Session 2 Turn 21)

**OMNI:** 3-lane source-of-truth (Q9). Front desk can modify commerce_order_line (discount/loyalty/payment); CANNOT modify performed_intervention_line content without provider attestation. Substrate constraint. (§4 + Q9)

## 7.4 Single appointment_type limits multi-episode

**Mindbody:** Schedule says "Mole Check"; if patient pivots to Botox + GLP-1, provider must (a) change appointment_type (corrupts metrics), (b) create 3 separate appointments (operational chaos), (c) bury everything in notes. (§5.3 + Layer 2 + Knox Session 2 Turn 2)

**OMNI:** ONE encounter; 3 care_episodes via `encounter_line.care_episode_id` (Q16). Mole surveillance episode stays open; new lines added same-day; CNS routes 3 different follow-up cadences. (§5.3 + Q6 + Q16)

## 7.5 Notes attached to single appointment

**Mindbody:** Progress note lives inside appointment row; one note per appointment; no per-line documentation; no async notes; no procedure notes separate from progress notes. (Mindbody Batches 5-9 evidence + user feedback gap #4)

**OMNI:** `provider_note` substrate is RENDERED projection from performed_intervention_line + attestation + provider signature. Notes are per-encounter (not per-appointment); admit per-profile documentation requirements (procedure_note vs treatment_note vs progress_note vs session_log vs async_review_note). (Q14)

## 7.6 Multi-flag stack ignored

**Mindbody:** Appointment status is single state (Confirmed OR Arrived); Mindbody actually allows both simultaneously (Batch 5 row 60 evidence). UI shows multi-flag; substrate likely flat. Inconsistency. (Layer 2 B.1)

**OMNI:** `appointment.lifecycle_state` ENUM (13 states per DL-15 inv 5) + orthogonal `appointment.status_flags` BITMASK (Confirmed / Arrived / Forms_complete / Card_on_file / Late / Provider_running_behind / etc.). Composable. (Q22)

## 7.7 Shared login = no accountability

**Mindbody:** Everyone at front desk acts as whoever is logged in. No real-actor stamp per action. Audit becomes "Front Desk #1 did everything today." (Knox Session 2 Turn 22)

**OMNI:** Fast staff switching (PIN/badge/Face ID) per workstation; every action records REAL actor per DL-14 audit lineage. Shared workstation, NOT shared identity. (Q10 + DL-14 inv 8 + 10)

## 7.8 Receipt $196,365 corruption visible

**Mindbody:** Mary Behler's receipt for BH+ Elite shows line $196,365 but subtotal $159 (Mindbody Batch 19 Step 06 actual screenshot evidence). Either substrate corruption or rendering bug. No price-line ≤ subtotal invariant. (Layer 2 D.20)

**OMNI:** Substrate invariant: `commerce_order_line.amount` SUM equals `commerce_order.subtotal`. Enforced via CHECK constraint + reconciliation jobs per DL-16 inv 39. Receipt is rendered projection, never stored. (Q9 + §4.3)

## 7.9 Vocabulary trap (Inactive ≠ Unused)

**Mindbody:** "Inactive Pricing Options" means UNUSED, not deactivated. Confusing UX + bad data semantics. Pasted_text_2 / Pasted_text_4 settings evidence + Batch 11 Step 04. (Layer 2 D throughout)

**OMNI:** Explicit lifecycle enum per primitive: Pricing Option lifecycle (active / disabled / soft_deleted) + Pricing Option redemption (open / partially_redeemed / fully_redeemed / expired). Vocabulary clarity. (Commerce DL)

## 7.10 2-tier permission groups + 8+ capability flags

**Mindbody:** 5 permission groups per brand (External / Front Desk / Manager / Service Provider / Social Media Manager) + 8+ per-staff capability flags (Desk staff / Provider for appointments / Provider for group lessons / Sales Rep / Followups / Commissions / Tips). Composition opaque. (Mindbody Batch 14-16)

**OMNI:** 2-layer composition (brand × staff) per Q5. Plus 4-tier authorship + attestation overlay per Q10. Explicit policy resolution per DL-14 inv 11. (Q5 + Q10)

## 7.11 Settings as bolted-on (not as OS)

**Mindbody:** 10 settings sections + ~100 sub-pages; Words and Phrases vocabulary override; Required Fields dual-mode (Consumer / Business); Accounting Basis (Accrual / Cash); ICD Codes library admin entry — all evidence of "settings as OS" pattern. But Mindbody surfaces ad-hoc. (Mindbody Batches 15-16)

**OMNI:** Settings-Infrastructure DL (Layer 2 G.2.2). 10-section enumerated substrate; URL-addressable deep-links; per-cart-mode capability scoping; vocabulary override substrate; dual-mode required fields. (Q5 + Settings-Infra DL)

## 7.12 Federation cross-state breaks

**Mindbody:** Cultured / Evo / multi-state / pure-Hims all force same data model. Cross-state licensure / patient relocation / federation policy = manual workaround. (Layer 2 J.9 + Q12 + FUTURE_ARC)

**OMNI:** 11-axis venue (Q12) + DL-10 patient_relationship + A1 future arc permeability per dimension. Maria Bham → Somerset → FL flow works. (§5.8 + Q12)

---

# §8 Build phasing

What ships when. Concrete substrate + UI + CNS event boundaries per phase.

## 8.1 Day 0 (V1 thin slice — Q21 + user direction 2026-05-17)

**SCOPE NOTE (binding, per user direction):** Day 0 customer base = 3 medspa federation customers + Hims-hybrid patient affordance + derm wedge starting. Federation IS Day 0 (not Year 1). OMNI-wide Settings-Infrastructure substrate ships Day 0 (NOT just scheduling-slice settings). Settings-Infra is broader than scheduling — it's OMNI-wide doctrine. Half the Mindbody settings (~50 sub-pages) are OMNI-wide concerns (vocabulary override, dual-mode required fields, tax rates, payment methods, locations, etc.); only ~30-50 are scheduling-specific (encounter profile policy, cancellation policy, no-show fee, availability rules, etc.). The OMNI Settings-Infra DL substrate ships Day 0; scheduling-pillar settings live within it.

**Substrate primitives Day 0 — SCHEDULING-PILLAR:**
- patient + patient_relationship + staff + staff_capability + staff_service_assignment
- permission_group + permission_atom + permission_group_atom_grant + staff_permission_group_assignment
- service + service_category + add_on flag + service_closeout_template
- room + room_service_compatibility
- resource + resource_service_compatibility
- availability_window (4-axis)
- care_episode (skeleton, 0-N per patient) + episode_catalog (config; clinic-managed)
- encounter_container (with profile + venue_id)
- encounter_profile + encounter_profile_policy (5 profiles Day 0: office_visit / video_visit / async_review / aesthetic_treatment_visit / resource_only_session)
- appointment (linked to encounter; nullable appointment_id on encounter for async_review)
- hold
- encounter_line (with line_kind discriminator: planned_intent / performed_intervention / consent / follow_up / task / message)
- **attribution_line (Day 0 substrate; commission UI Month 1-2 per user direction)**
- client_alert (21-event vocabulary; partial)
- outbound_template + orchestration_action + orchestration_run + cns_decision + audit_event

**Substrate primitives Day 0 — FEDERATION (per user direction; 3 spas Day 1):**
- **venue (11-axis: physical_location / virtual_flag / brand / legal_entity / deployment / patient_relationship / provider_schedule_location / patient_state_jurisdiction / billing_rendering_location / resource_location / federation_location_of_record)**
- **federation_permeability_policy (per-dimension policy table; brand × legal_entity × patient_state × dimension matrix per A1 future arc)**
- **DL-10 patient_relationship_id scoping enforced at every cross-venue read**

**Substrate primitives Day 0 — OMNI-WIDE SETTINGS-INFRASTRUCTURE (per user direction; broader than scheduling):**
- **settings_section + settings_subpage substrate (admits ~100 sub-pages; ~30-50 implemented Day 0)**
- **vocabulary_override (Mindbody "Words and Phrases" pattern; per-clinic + per-brand vocabulary customization)**
- **required_field_policy (dual-mode: Consumer Mode + Business Mode; per-domain field-state enum: always_required / configurable_required / configurable_optional)**
- **per_clinic_default + per_clinic_auto_fill (e.g., default City/State for new patient form)**
- **client_metadata: required_fields + client_indexes + client_index_values + client_form_custom_fields (4-tier)**
- **client_alerts substrate (21-event + 2-level severity)**
- **suspension_types**
- **tax_rates (2-tier Sales Tax + Tax 2)**
- **revenue_categories (accounting axis)**
- **accounting_basis brand-level enum (Accrual / Cash)**
- **payment_method_capability (per-clinic enabled flags for the 25+ payment methods)**
- **cancellation_policy + no_show_fee_policy (per-service / per-clinic)**
- **business_hours + holiday_calendar + scheduling_window_policy**
- **prospect_stages + relationship_types + client_types + referral_types + referral_subtypes + contact_log_types + client_statuses + gender_enum**

**Substrate primitives Day 0 — COMMERCE MINIMUM (Knox 8-item list, per user direction):**
- **performed_service / product / order_line (`commerce_order_line` with line_kind discriminator)**
- **quantity / unit / price_basis columns**
- **package_credit_link substrate (`commerce_order_line.entitlement_redemption_ref` FK to package_redemption record)**
- **discount + loyalty + promo line_kind placeholders (`line_kind IN ('discount', 'loyalty_reward', 'promo', 'membership_discount')`)**
- **provider attribution per line (via attribution_line FK)**
- **checkout / cart projection (computed view)**
- **receipt projection (computed view; rendered, never stored as authority)**
- **commerce_override audit_event (every front-desk-modify or admin-override emits audit_event with reason)**

Full Commerce DL (full Pricing Option 4-type / full Contract / Gift Card / Promo Code / Aspire/Cherry/Allē integration / 25+ payment methods full federation) deferred to Month 1-2 → Year 1.

**Substrate primitives Day 0 — VIDEO (per user direction Q20; multi-initiator first-class):**
- **video_session (Zoom Video SDK adapter Day 0)**
- **scheduled video visit fully functional (provider schedule + patient portal "Schedule video visit" affordance + provider-initiated booking + system-suggested booking via CNS)**
- **"Schedule video call now" affordance on PATIENT PORTAL Day 0 (per user direction)**
- **video_session.encounter_id nullable (admits ad-hoc; ad-hoc UX deferred Month 6)**
- **"Start video call now" provider-initiated affordance on patient profile (Month 6; substrate Day 0)**

**Substrate primitives Day 0 — CLINICAL-MEDIA + INTAKE + CONSENT (placeholder UI; substrate full):**
- clinical_media (photos / videos / scans; linked to encounter_line)
- intake_session + intake_evidence_link (longitudinal; linked to encounter when used)
- consent (versioned; signed; linked to procedures/Rx)
- patient_document (lab PDFs / pathology / referrals / legal)

**RPCs Day 0:**
- service_create / service_update (catalog admin)
- staff_service_assignment_create / _update (with prep + booking + finish time)
- appointment_propose (slot search with 4-axis validation + federation/permeability check)
- appointment_book (commit hold; venue-aware)
- appointment_reschedule / _cancel / _no_show
- appointment_check_in
- appointment_complete
- planned_intent_line_mark_not_performed (with reason enum)
- performed_intervention_line_create (provider-entered OR staff-drafted-pending-attestation; pushes derived charge_line to cart)
- performed_intervention_line_attest (provider attestation RPC)
- cart_settle (Knox 8-item commerce minimum)
- commerce_override_apply (with reason; audit-eventd)
- federation_permeability_resolve (per-venue per-dimension policy evaluation)
- venue_create / _update (federation admin)
- settings_subpage_get / _update (OMNI-wide settings admin)
- vocabulary_override_set
- video_session_schedule (scheduled video visit)
- video_session_start / _complete
- appointment_emit_cns_event (DL-16 envelope per transition)

**CNS events Day 0 (minimum 20):**
- appointment_requested / _booked / _rescheduled / _cancelled / _no_show
- patient_checked_in
- encounter_started / _completed
- planned_service_not_performed
- performed_intervention_recorded
- performed_intervention_attested
- cart_settled
- checkout_completed
- commerce_override_applied
- follow_up_scheduled
- video_session_scheduled / _started / _completed
- federation_permeability_resolution_made
- venue_changed
- settings_subpage_updated

**CNS orchestration_actions Day 0 (minimum 18):**
- send_appointment_confirmation / _reminder
- request_form
- request_deposit (placeholder)
- create_provider_task / _front_desk_task
- send_aftercare_message
- schedule_follow_up_text_2d
- offer_2wk_tox_check
- suggest_rebook
- start_video_session
- send_video_visit_link
- process_inbound_confirmation_reply
- classify_clinical_cue_intent
- escalate_clinical_concern
- suppress_marketing
- send_aftercare
- recommend_retail_product (Phase 1+ but admitted)
- federation_route_decision (cross-venue patient flow)

**UI surfaces Day 0:**
- Day-view + week-view schedule (provider-keyed + room-keyed + venue-keyed)
- Multi-location schedule view (cross-venue calendar per federation permeability)
- Appointment booking modal with 4-axis availability check + federation gating
- Encounter drawer with "Planned today" + "Performed today" sub-sections
- Provider chairside performed-line entry drawer (smart contextual; preloads appointment + package + room + device + planned-areas; per service template: Botox unit map / SkinPen areas / Laser areas-checklist; NOT generic catalog search)
- MA/staff-draft pathway (4-tier authorship UI with attestation_state visible)
- Cart view (shared, permissioned; commerce_override path visible)
- Client profile cockpit (Profile / Schedule / Purchases / Documents / Photos / Intake tabs)
- Patient portal "Schedule video visit" affordance (Hims patient affordance; user-initiated booking)
- Video visit "Click here to start" button (provider + patient join paths)
- Closeout drawer (3 lanes Day 0: cart / documentation / follow-up; full 7 lanes Month 6)
- Federation admin UI (venue + permeability_policy management)
- OMNI Settings admin UI (~30-50 sub-pages Day 0; the scheduling-relevant + OMNI-wide settings users need to operate)

**Phasing critical NOT in Day 0:**
- Full Commerce DL (full Pricing Option 4-type / Contract / Package / Gift Card / Promo / Loyalty / Aspire / 25+ Payment Methods integrated — Month 1-2 → Year 1)
- Full inventory by lot (Year 1)
- Full RBAC permission-atom drill-down (Month 1-2 substrate; UI Month 6)
- Full Mindbody-style settings ~100 sub-pages (Day 0 = ~30-50 high-load; remaining Month 6+)
- Full video stack — recording / transcript / multi-vendor adapter (Year 1)
- Full closeout drawer 7 lanes (Day 0 has 3 lanes; full 7 Month 6)
- Procedure_encounter profile depth (Day 0 admits substrate; UI Month 6)
- Surgical_case profile UI (Year 1+)
- Pure Hims async-review UX deep polish (admits substrate Day 0; full polish Year 1)
- Care Episode catalog management UI (Day 0 has the FK + skeleton + auto-instantiation rules; full admin UI Month 6)
- Mobile-native integrations (Tap to Pay on iPhone — Year 1)
- ICD/CPT clinical coding integration (Year 1+ substrate; full RCM Year 2+)

## 8.2 Month 1-2 (post-Day 0 critical fast-follows)

Per user direction 2026-05-17: "attribution substrate needs to be planned for in advance, month 1-2." Several Day 0 substrate primitives need their UI/reports/admin surfaces to land WELL BEFORE Month 6.

**Adds within 8 weeks of Day 0:**
- **Attribution reports / commission UI** (substrate Day 0; UI Month 1-2 per user direction). Per-line provider commission (performing / assisting / supervising / seller / checkout_staff); per-staff commission report; multi-provider visit support per §5.7.
- 4-tier authorship + attestation full UI (per Q10; substrate Day 0)
- Care Episode catalog management UI (per Q19 hybrid; substrate Day 0)
- Self-serve federation permeability policy admin UI (Day 0 = OMNI-staff-managed; Month 1-2 = clinic self-serve)
- Closeout drawer expansion 3 lanes → 7 lanes (per Q11)
- Full smart-drawer service template library (Day 0 has 3 templates: Botox / SkinPen / Laser; Month 1-2 expands to 20+ templates per Bloom catalog)

## 8.3 Month 6 (after early traction; derm + 3-spa federation stable)

**Adds:**
- Commerce DL primitives wave 1: full Pricing Option 4-type taxonomy + basic Contract / Autopay rolling + Gift Card + Promo Code (substrate Day 0; UI/admin Month 6)
- Retail products as 4th catalog (per Mindbody evidence; substrate Day 0; UI Month 6)
- Membership + Subscription tier UI (substrate Day 0; UI Month 6)
- Discount Program with rotating-tier patterns (e.g., Bloom's GOLD / VIP INJECTABLES 40/30/10 / ULTRA 25/25/10)
- Mobile chairside drawer (iOS native; Day 0 was web/tablet)
- Encounter profiles 6-13 UX (procedure_encounter / lab_draw_visit / surgical_case / post_procedure_follow_up — substrate Day 0; UI Month 6)
- Aspire / Allē / Cherry / GreenSky integration (per Mindbody 25+ payment method list)
- Patient timeline UI (5-lane synthesized view per §4)
- "Start video call now" provider-initiated ad-hoc affordance (substrate Day 0; UI Month 6)
- Outstanding ~50 Settings sub-pages (Day 0 shipped ~30-50; Month 6 closes the remainder)
- Out-of-band reconciliation jobs (DL-16 inv 39)
- Clinical-Media DL substrate refinements (annotation tools / before-after pair UI / series grouping UI)

## 8.4 Year 1 (derm + plastics wedge expansion)

**Adds (per user direction: plastics is next specialty after derm):**
- **Plastics-specialty modality UX** (surgical_case profile depth: multi-resource + anesthesia/sedation prep / pre-op + post-op encounter sequences / surgical consent workflow / before-after photo series management / multi-stage procedure series tracking)
- Full Commerce DL (all 19+ primitives integrated; full Aspire/Cherry/Allē/CareCredit/GreenSky federation; 25+ Payment Method capability full)
- Full inventory tracking by lot (Botox vial tracking / pharmacy lot for Rx / device serial for laser)
- Full RBAC permission-atom drill-down + 4-tier attestation enforcement at policy level
- Full Settings-Infrastructure DL admin surface (Mindbody-class depth)
- Hims async polish (full UX for no-physical-clinic deployment customer)
- Video stack (recording / transcript / multi-vendor adapter Daily/Twilio/Foundry beyond Zoom)
- 21-event Client Alert vocabulary fully encoded (DL-16 amendment)
- ICD-10 + CPT placeholder substrate (codes attachable; not yet for claims)
- Out-of-band reconciliation jobs fully running per DL-16 inv 39

## 8.5 Year 2+ (multi-modality + $10k SaaS; specialty priority per user direction)

**Specialty rollout order (per user direction 2026-05-17): medspa (Day 0) → derm (Month 6) → plastics (Year 1) → GI (Year 2) → cardio (Year 2) → endocrine (Year 2+) → sleep labs (Year 2+).**

**Year 2 adds:**
- **GI-specialty modality UX** (endoscopy procedure_encounter depth + pathology integration + sedation prep + scope equipment + recovery encounter + pathology specimen workflow + follow-up surveillance cadence + colonoscopy 10-year recall)
- **Cardio-specialty modality UX** (multi-modality stress test / echo / Holter monitor / cath lab; mixed acuity; sequential multi-provider within single encounter; cardiology-specific clearance gates)
- Full RCM (claims / EOB / denial management / payer rules engine; ICD-10 + CPT live for claims submission)
- Pathology integration (HL7 v2 + FHIR DiagnosticReport / specimen tracking / result-to-encounter linking)
- Lab interface (HL7 v2 / FHIR Observation; LabCorp / Quest / hospital labs)
- Cross-state federation full A1 fulfillment (data residency per state; CMEK per state; cross-state provider licensure routing)
- Branded patient app (per-clinic white-label)
- AI Compose Assist full deployment (5 invocation modes per DL-14 inv 18)

**Year 2+ adds (later in Year 2 or Year 3):**
- **Endocrine-specialty modality UX** (lab-draw heavy resource_only_session profile / Rx infusion appointment / long-term care plan tracking / endocrine-specific clearance + monitoring)
- **Sleep lab modality UX** (overnight resource session profile / polysomnograph equipment / sleep-tech role / overnight observation encounter / multi-night encounter sequences / CPAP titration workflow)
- AI clinical envelope full deployment (provider-facing clinical reasoning; per DL-14 inv 9)
- Multi-tenant white-label deployment patterns
- Cross-federation patient location-of-record reconciliation tooling
- Advanced analytics + metric substrate (substrate-derived per Layer 2 §5.14)
- Surgical_case full depth (operative_note + anesthesia_record + recovery_track + 90-day-global-period billing)

## 8.6 Why this phasing survives

- Day 0 substrate ADMITS all future scope (no rewrites)
- Federation is DAY 0 (per user direction 3 spas Day 1), not Year 1 deferral
- OMNI-wide Settings-Infrastructure is DAY 0 (broader than scheduling), not Year 1
- Attribution substrate Day 0; commission UI Month 1-2 (not Month 6+); user explicit "do not leave dangling"
- Specialty rollout order pinned: medspa → derm → plastics → GI → cardio → endocrine → sleep
- Each Year 1+ phase activates an existing substrate primitive's UX, not new substrate
- Commerce DL / RBAC DL / Settings-Infra DL / Clinical-Media DL / Care-Coordination DL / Federation-Topology DL drafted at Phase B.5+, implemented progressively Day 0 → Month 1-2 → Month 6 → Year 1 → Year 2+
- DL-14 / DL-15 / DL-16 invariants remain stable; new domains specialize against DL-16 envelope without reinventing

---

# §9 Risks + validation questions for user

## 9.1 Top 5 risks if these recommendations are wrong

1. **Q1 encounter_profile becomes "scheduling brain" anti-pattern.** If encounter_profile_policy starts hosting orchestration logic (not just declarative policy), DL-14 inv 14 violated. Mitigation: substrate enforcement that policy_table is declarative-only; CNS reads + decides.

2. **Q6 Care Episode proliferation.** Auto-instantiation rules misfire; create 100s of orphan "Botox_episode" rows per patient. Mitigation: clinic-configured episode_catalog acts as allowlist for auto-instantiation; CNS rules conservative; manual override always available.

3. **Q8 Planned-vs-Performed substrate not enforced.** Devs allow `UPDATE encounter_line SET service_id` instead of "mark not_performed + add new line"; metric calculations corrupt. Mitigation: substrate constraint at DDL level; code review discipline.

4. **Q9 3-lane separation not enforced at substrate.** Front desk gets broader role; modifies performed_intervention_line; chart corruption. Mitigation: substrate FK + role-gated mutation policies enforced by RPC layer, not by UI hiding.

5. **Day 0 underbuild.** Day 0 substrate too thin to admit Month 6 + Year 1 features; rewrite at Month 12. Mitigation: §8.1 enumeration explicitly admits 30+ substrate tables + placeholders + nullable FKs; substrate slice scoping rigorous.

## 9.2 Validation Resolution Status

Per user direction 2026-05-17: stop re-litigating decisions already in Sessions 1+2 + Knox answers. The 20 validation questions originally posed are now resolved as follows (full citation matrix at §10 below).

**RESOLVED via Knox-user discussion (14 of 20):** Q1 / Q2 / Q3 / Q4 / Q5 / Q6 / Q8 (procedure_encounter) / Q10 (Care Episode match) / Q11 (multi-episode frequency) / Q12 (planned-vs-performed today) / Q13 (front desk modify: WARN) / Q14 (MAs draft today) / Q15 (provider drawer adoption) / Q19 (Hims async match).

**RESOLVED by user direction 2026-05-17 (5 of 20):**
- **Q7 Federation:** Day 0 (3 spas Day 1)
- **Q9 First specialty after derm:** plastics → GI → cardio → endocrine → sleep
- **Q16 Attribution:** substrate Day 0; reports Month 1-2 (not Month 6+)
- **Q17 Settings:** scheduling-specific Day 0 + OMNI-wide Settings-Infra DL Day 0 (broader than scheduling pillar; ~30-50 sub-pages Day 0)
- **Q20 Hims-to-scheduled trigger:** multi-initiator (patient / provider / system suggestion / ad-hoc); patient ALWAYS has option; "Schedule video call now" Day 0 affordance

**REMAINS NEEDING USER (1 of 20):**
- **Q18 Any Bloom workflow missed?** Per user: "no Bloom workflows that come to mind atm — but there WILL BE MORE." OMNI commits: substrate Day 0 admits flexible workflow expansion (§5.9-§5.27 covers 19 additional scenarios beyond canonical 8); when new workflows surface, no rewrite needed.

The §9.3 discipline note acknowledges: no more validation re-litigation. Sessions 1+2 + user direction 2026-05-17 are the validation source. Future ambiguities surface at substrate slice scoping time.

---

## 9.3 Discipline reaffirmed

This artifact:

- IS a convergence synthesis
- IS the actual OMNI Scheduling architecture
- IS Knox-redirect-compliant (dense, specific, solution-oriented)
- IS REVIEW INPUT, not lock-in

This artifact:

- IS NOT doctrine amendment
- IS NOT code / migrations
- IS NOT new DL drafts (those happen Phase B.5+ after this signoff)
- Q1-Q24 recommendations are TENTATIVE until joint Opus + Knox + user signoff

After your validation answers (above), I revise this doc to match. Then Phase 1 hardening sequence proceeds per Layer 2 G.4: DL-15 amendments → DL-16 amendments → 4-7 new DL drafts → substrate slice scoping → code build.

**End of OMNI Scheduling Operating Model and Architecture (2026-05-17).**

---

# §10 Validation Resolution Status — citation matrix (post-2026-05-17 user direction)

For future readers + Knox + user: where each of the 20 originally-posed validation questions was resolved.

| # | Original question | Resolution source | Resolution doc location |
|---|---|---|---|
| Q1 | Day 0 medspa Botox match Bloom? | Session 2 Turns 21-29 + Knox 2026-05-17 + user 2026-05-17 | §5.1 + §6.14 Q10 (staff-drafted Day 0 acceptable) |
| Q2 | LHR receipt/note/credit split | Session 2 Turn 25 + Knox 2026-05-17 | §4.3 + §5.2 + §6.13 Q9 |
| Q3 | Day 0 commerce minimum | Knox 2026-05-17 8-item list | §8.1 Day 0 commerce minimum (Knox 8-item) |
| Q4 | Day 0 video scheduled or ad-hoc | Knox 2026-05-17 + user 2026-05-17 Q20 | §5.5 + §8.1 + §6.10 Q4 (multi-initiator Day 0) |
| Q5 | Day 0 closeout 3 lanes or 7 | Session 2 Turn 30 user + Knox | §8.1 (3 lanes Day 0) + §8.3 (7 lanes Month 6) |
| Q6 | Hims-only Day 0 customer? | Sessions 1+2 wedge framing | §8.1 (substrate admits async_review Day 0) + Bloom = Day 0 customer; Hims-only = Year 1 |
| Q7 | Federation Year 1 or Year 2+? | User 2026-05-17 explicit | **§6.17 Q12 (REVISED Day 0)** + §8.1 (federation substrate Day 0) |
| Q8 | Procedure_encounter Year 1 or 2+? | Session 2 Turn 5 | §8.4 Year 1 (substrate Day 0; UI Year 1) |
| Q9 | First specialty after derm? | User 2026-05-17 explicit | **§8.4-§8.5 (plastics → GI → cardio → endocrine → sleep)** |
| Q10 | Care Episode match Bloom? | Session 2 Turn 2 user accepted | §6.7 Q19 (hybrid) + §2 + §5.3 |
| Q11 | Multi-episode-per-encounter frequency | Session 2 Turn 2 example | §5.3 Mohs-pivot-Botox-GLP-1 load-bearing |
| Q12 | Planned-vs-performed today | Sessions 2 Turns 3 + 23 | §5.3 + §6.12 Q8 substrate enforcement |
| Q13 | Front desk modify: BLOCK or WARN | Session 2 Turn 22 Knox | §6.14 Q10 (WARN + reconciliation flag) |
| Q14 | MAs draft today? | Session 2 Turn 22 Knox | §6.14 Q10 tier-2 staff_drafted |
| Q15 | Providers actually use drawer? | Session 2 Turn 24 user + Knox + user 2026-05-17 | §5.1 + §5.2 smart-contextual drawer (generic catalog REJECTED) |
| Q16 | OK no day-roster/commission Day 0? | User 2026-05-17 explicit | **§8.2 attribution UI Month 1-2 (not Month 6+)** |
| Q17 | Settings ~10 sub-pages enough? | User 2026-05-17 explicit | **§8.1 OMNI-wide Settings-Infra Day 0 (~30-50 sub-pages; broader than scheduling)** |
| Q18 | Bloom workflow missed? | User 2026-05-17: "no atm but there will be more" | §5.9-§5.27 (19 additional scenarios); substrate Day 0 admits flexible expansion |
| Q19 | Hims async substrate match? | Session 2 Turns 4 + 6 | §5.4 matches verbatim |
| Q20 | Hims-to-scheduled trigger? | User 2026-05-17 explicit | **§6.10 Q4 multi-initiator (patient/provider/system) + patient "Schedule video call now" Day 0** |

**5 questions where user direction 2026-05-17 overrode my initial recommendations:**
- Q7 (Federation moved Day 0 from Year 1)
- Q9 (Specialty order pinned: plastics → GI → cardio → endocrine → sleep)
- Q16 (Attribution reports Month 1-2 from Month 6+)
- Q17 (Settings Day 0 expanded to ~30-50 OMNI-wide sub-pages from ~10 scheduling-specific)
- Q20 (Multi-initiator video Day 0 from "scheduled-only Day 0")

**Doc revision history:**
- 2026-05-17 commit `42d2752` — initial doc (1467 lines)
- 2026-05-17 second commit (this revision) — amendments per user direction 2026-05-17

---

**End of OMNI Scheduling Operating Model and Architecture (2026-05-17 + user direction 2026-05-17 amendments). Ready for Phase 1 hardening sequence per Layer 2 G.4: DL-15 amendments → DL-16 amendments → new DL drafts → substrate slice scoping → code build.**
