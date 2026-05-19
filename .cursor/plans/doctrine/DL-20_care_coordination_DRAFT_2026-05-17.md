# DL-20 — Care-Coordination Substrate (Care Episode + Encounter Container + Episode Catalog) (DRAFT)

**Date:** 2026-05-17
**Status:** DRAFT — Phase 1 hardening per Day 0 Build Contract commit `6dc1286`. NOT locked doctrine. Joint Opus + Knox + user signoff required before promotion to locked DL in `system_map_three_layers_60706286.plan.md`. NOT code. NOT migrations. NOT substrate slice. **CONTAINS partial resolution of Q1 (encounter container architecture, SHELVED) and Q6 (Care Episode parent object) — promotion requires explicit Q1+Q6 joint signoff.**

**Phase 1 hardening v2 corrections (2026-05-17 user + Knox refinements REPLACE my prior overcorrections):** The earlier draft (committed as 7e5de53) framed encounter_container as the mandatory primary primitive. Pressure-testing against Hims async / lab review / biopsy recall / multi-day adverse event / GLP-1 multi-modal scenarios proved this overcorrected. The corrected model is THREE distinct layers — appointment + appointment_item (planned) / encounter + encounter_line (actual) / linked evidence + commerce — with the appointment IS the container for synchronous trips; lazy container materializes only when needed for multi-line coordination; encounter created when work begins (scheduled OR walk-in OR async OR lab review). DL-15 amendment 8 renames inv 5 state "confirmed" → "scheduled" so DL-20 confirmation_state can use "confirmed" for patient confirmation. Rejected patterns explicitly enumerated below. Full pressure-test arc preserved at [future_care_obligations_design_2026-05-17.md](future_care_obligations_design_2026-05-17.md).

**Cross-DL discipline:** honors system_map Cross-DL warning (vendor/specialty/Mindbody-artifact labels do NOT become OMNI substrate enum values). encounter.modality is 4 values (in_person / video / phone / async) — NOT specialty-coded. Specialty leakage prevented. Per-specialty taxonomies live in tenant catalog (service_category hierarchy via DL-15 + DL-17 + DL-19 booking_preset).

**Broad-default booking doctrine** (mirrors DL-15 + DL-19 preambles): a patient may always book at category level; missing planned_details NEVER display as "Unknown" patient-facing; tenant configures self_bookable_progressive_disclosure_mode per service.

**Cross-anchors:**
- System map DL-7 (tracked clinical objects + procedure / intervention lifecycle as foundation primitive) + DL-14 (CNS center of gravity) + DL-15 (Scheduling Substrate Spine) + DL-16 (universal envelope) + DL-17 (Commerce Substrate Spine) + DL-18 (RBAC)
- Layer 2 Section A.1 (Care Episode + Encounter Container proposed; Q6 OPEN) + Section E (User's 9 gaps — gap #5 procedure visits vs office visits)
- Day 0 Build Contract §3.1 (encounter primitives Day 0) + §3.6 (visit closeout drawer) + §5 (workflow scenarios all anchor on care_episode + encounter_container) + §6.4 step 4
- Mindbody raw layer batches 5 / 14 / 19 + open_questions Q1 / Q6 / Q7 / Q8 / Q9 / Q10 / Q11 / Q12 / Q13 / Q14 (collectively the care-coordination question cluster)
- Synthesis doc `.cursor/plans/designs/2026-05-17_omni_scheduling_operating_model_and_architecture.md` §§3 (canonical object model) + 4 (lifecycle) + 5 (workflow scenarios)

**Scope (binding):** OMNI **care-coordination substrate** — care episodes (longitudinal care relationships covering one or more visits/encounters), encounter containers (the canonical unit at which clinical/operational work attaches), encounter profiles (the 5+ kinds of encounters that admit different policy), and the linkages from these to scheduling (DL-15), commerce (DL-17), clinical (DL-7), Rx, labs, intake, consent, messages, and outbound (DL-16 amendment 42). Specializes against DL-7 + DL-14 + DL-16 — every DL-20 invariant inherits the appropriate disciplines. DL-20 binds the **care-coordination substrate**; it does NOT bind clinical encoding (ICD/CPT — Clinical-Coding DL Phase D); it does NOT bind specific clinical content (clinical_record / progress_notes — DL-7 territory); it does NOT bind specific operational primitives (booking — DL-15; sale — DL-17; intake artifacts — Clinical-Media DL).

---

## Invariants (44 candidates; was 41; +3 Round 5 closure-execution amendments for K(C) bridge + work-item canonical mapping + occurrence-link typed edges)

### Care Episode primitive (Q6 partial resolution)

1. **Care Episode is a 1st-class substrate primitive (binding tentative resolution of Q6).** `care_episode` carries: `id`, `tenant_id` (brand / site / legal_entity per DL-10), `patient_id` FK + `patient_relationship_id` FK (per DL-10 + primitive #19), `episode_kind_id` FK to `episode_catalog` per inv 5, `started_at`, `expected_end_at` NULLABLE, `actual_end_at` NULLABLE, `status` ENUM per inv 4 lifecycle, `primary_provider_id` FK NULL (longitudinal owner; per Knox session 2 marker — provider attribution), `referring_provider_id` FK NULL, `legal_entity_id` FK (per Federation-Topology DL — episode operates under one LE), `clinical_focus_text` TEXT NULL (free-form summary; e.g., "GLP-1 weight loss management"), `metadata` JSONB. **Q6 resolution rationale:** without Care Episode, ad-hoc encounters drift unrelated; cross-encounter clinical continuity (lab → visit → Rx adjust → followup visit → lab → adjust) requires an explicit parent. Care Episode IS the parent. Per Knox session 2: "an interaction becomes encounter-linked evidence when it informed, triggered, documented, or followed up an accountable care action." Episodes provide the canonical aggregation key. **PROMOTION TO LOCK REQUIRES JOINT SIGNOFF + Q6 RESOLUTION COMMIT.**

2. **Care Episode is OPERATIONAL not CLINICAL-CODING (binding).** Episode kind (per inv 5 catalog) is a tenant-operational categorization (`weight_loss_glp1` / `botox_maintenance` / `derm_treatment_plan` / `sleep_apnea_management` / `endocrine_thyroid_monitoring` / `peri_procedure_plastics_facelift` / `cardiac_lipid_management` / `gi_ibd_followup` / etc.). It is NOT ICD-10 / CPT clinical coding (those attach to encounter_line per Clinical-Coding DL Phase D). Episode kind admits multiple clinical diagnoses to coexist within one episode. REJECTED: forcing care episode kind into ICD-10 categorization — distinct concerns.

3. **Care Episode is patient-relationship-scoped (per DL-10 + primitive #19).** A patient with relationships at brand_A (Bloom medspa) and brand_B (Hims-style weight loss) may have one episode at brand_A (`botox_maintenance`) and a separate episode at brand_B (`weight_loss_glp1`). Episodes are NOT shared cross-brand by default (per DL-10 strict isolation); cross-brand episode sharing requires federation permeability admission per A1 + Federation-Topology DL.

4. **Care Episode lifecycle 6-state (binding).** `care_episode.status` ENUM: (1) `intake_pending` (episode created from intake/lead but no first visit yet) → (2) `active` (≥1 encounter completed; ongoing care) → (3) `in_remission_or_paused` (no active care, retained for resumption; e.g., off GLP-1 for trial of lifestyle) → (4) `completed` (care goal met; e.g., facelift recovery complete) → (5) `transferred_out` (referred to another provider/practice; relationship preserved for re-onboarding) → (6) `archived_inactive` (long inactivity threshold elapsed; soft-archived per DL-16 inv 13 retention). Transitions are state-machine-validated per DL-15 inv 5 pattern. Reactivation from `archived_inactive` → `active` allowed via explicit `episode_reactivated` event + audit.

### Episode Catalog (settings substrate per DL-19)

5. **Episode Catalog is a tenant-configurable substrate (binding per DL-19 settings substrate).** `episode_catalog` carries: `id`, `tenant_id`, `episode_kind_key` STRING (e.g., `weight_loss_glp1`), `display_name`, `description`, `default_profile_ids[]` (array of encounter_profile_id this episode kind admits per inv 6), `default_initial_profile_id` FK (the typical first-encounter profile; e.g., for `weight_loss_glp1` initial encounter is `async_review_intake` then `office_visit` then `async_review` recurring), `recommended_cadence` JSONB NULL (recommendations for cadence; e.g., `{ followup_after_initial_days: 14, ongoing_followup_days: 30 }`), `auto_instantiation_rules` JSONB NULL (when to auto-create episode; e.g., "first GLP-1 Rx → auto-create weight_loss_glp1 episode"; cross-link inv 24 auto-instantiation), `clinical_protocol_template_id` FK NULL (Clinical-Media DL Phase 1 — links to template for intake / consent / aftercare), `commerce_default_program_ids[]` (DL-17 — typical pricing options / contracts this episode admits), `is_active` BOOLEAN, `created_by_actor` per DL-16 amendment 43. Day 0 seed catalog: ≥ 12 episode kinds per specialty (medspa: botox_maintenance / filler_maintenance / laser_hair_removal_series / facial_series; derm: derm_treatment_plan / acne_management / mohs_recovery; Hims: weight_loss_glp1 / mental_health_support / ED_treatment; sleep: sleep_apnea_management; cardio: lipid_management / hypertension_management; endocrine: thyroid_monitoring / diabetes_management). Specialty rollout order pinned per Build Contract §8 (medspa → derm → plastics → GI → cardio → endocrine → sleep). **NOT a closed enum** — registry extends.

### Encounter Container primitive (Q1 partial resolution)

6. **Encounter Container is a 1st-class substrate primitive (binding tentative resolution of Q1).** `encounter_container` carries: `id`, `tenant_id`, `care_episode_id` FK (each encounter belongs to exactly one episode per inv 7), `encounter_profile_id` FK to `encounter_profile_registry` per inv 8, `patient_id` FK + `patient_relationship_id` FK, `scheduled_appointment_id` FK NULL (if scheduled; FK to scheduling per DL-15), `started_at` NULLABLE, `completed_at` NULLABLE, `closed_at` NULLABLE (post-closeout immutable per inv 26), `status` ENUM per inv 11 lifecycle, `primary_provider_id` FK NULL, `additional_staff_ids[]` ARRAY, `venue_id` FK NULL (per Federation-Topology DL 11-axis venue substrate; null for async/Hims-style), `client_physical_location_at_action_time` STRING NULL (per Build Contract §3.7 patch 1 jurisdiction — patient's actual state during video/async). **Q1 resolution rationale:** clinical reality requires a canonical aggregation primitive that admits 5+ kinds of encounters with different policy (in-person office visit / aesthetic treatment visit / video visit / async review / phone visit). Single-table-with-profile-discriminator (Option A from pressure-test §10.1) wins on simplicity + composability + RPC affordance. **PROMOTION TO LOCK REQUIRES Q1 JOINT SIGNOFF.**

7. **Encounter Container 1-to-N child of Care Episode (binding).** Each `encounter_container.care_episode_id` is NOT NULL. Each episode has 1-to-many encounters. Cross-episode encounter REJECTED at substrate (one encounter belongs to one episode). Linking a previously-orphan encounter to an episode admitted via explicit `encounter_episode_assigned` event + audit (e.g., walk-in encounter retroactively assigned to existing GLP-1 episode by provider judgment). Reassignment between episodes allowed via explicit `encounter_episode_reassigned` event + Tier 3 attestation per DL-18 inv 8 dual approval.

### Encounter Profile registry (DL-19 settings + DL-15 amendment 30 cross-link)

8. **Encounter Profile registry is a tenant-configurable substrate (binding per DL-19 + DL-15 amendment 30).** `encounter_profile_registry` carries: `id`, `tenant_id`, `profile_key` STRING (Day 0 seed: `office_visit` / `aesthetic_treatment_visit` / `video_visit` / `phone_visit` / `async_review` + EXTENDED `resource_only_session` (e.g., LHR-only-with-tech-no-provider) / `procedure_visit_with_room` (medspa Botox in private room) / `procedure_visit_without_room` (chair-side derm cyst removal) / `home_visit` / `hospital_visit` (cross-link Federation-Topology venue)), `display_name`, `description`, `policy_axes_required` JSONB (per DL-15 amendment 30 4-axis composer requirements: requires_staff / requires_room / requires_resource / requires_capacity_consume / requires_scheduled_time / requires_clinical_clearance / requires_consent / requires_intake_complete / requires_deposit / allows_walk_in), `default_duration_minutes`, `default_authorship_tier` per DL-18 inv 8 (most encounter profiles default to Tier 4 provider attestation), `commerce_line_kinds_admitted` ARRAY (per DL-17 inv 6; e.g., async_review admits service line; office_visit admits service + product + tip lines). Day 0 seed registry: ≥ 10 profiles per inv 8 list. **NOT a closed enum** — registry extends as new specialty profiles land (Phase D Clinical-Coding DL extends).

9. **Encounter Profile composes with DL-15 booking 4-axis (binding cross-DL).** Booking RPC reads `encounter_profile.policy_axes_required` per DL-15 amendment 30 inv 30 + amendment 32 patch 1. Profile policy determines whether staff/room/resource/capacity axes are required for this encounter; per DL-15 inv 30 + 32 booking REJECTS missing required axis. Cross-link DL-15 inv 30 + DL-15 inv 32 (Service Type enum extension; per amendment 32 service_type='appointment' admits all 5+ profiles).

10. **Encounter Container created at booking time (binding when scheduled) OR at intake time (when async/Hims-style) — temporal composability.** Per Build Contract §3.6 visit closeout drawer + §5 workflow scenarios. Two creation patterns:
    - **Scheduled-first** (office_visit / aesthetic_treatment_visit / video_visit / phone_visit): appointment booked → encounter_container created with `status = scheduled_not_started` and FK to appointment_id
    - **Intake-first** (async_review / asynchronous-review for Hims-style): intake submitted → encounter_container created with `status = intake_received_pending_provider_review`; no scheduled_appointment_id
    
    Both paths converge at `started_at` (provider opens encounter). REJECTED: creating encounter at clinical action time without prior appointment OR intake (out-of-band action capture per DL-16 inv 36 manual reality capture).

### Encounter lifecycle (8-state per synthesis §4)

11. **Encounter Container lifecycle 8-state (binding per synthesis §4).** `encounter_container.status` ENUM: (1) `proposed` (intake received but provider not assigned) / (2) `scheduled_not_started` (appointment booked OR provider assigned; encounter exists but work hasn't started) / (3) `in_progress` (provider has opened encounter; work is happening) / (4) `paused_pending_external` (encounter waiting for external dependency — lab result, prior auth, patient response) / (5) `clinical_work_complete` (provider has done clinical work; pending closeout — chart not signed, attestation not collected, commerce not settled) / (6) `closeout_complete` (chart signed + attestation collected + commerce settled per Build Contract §3.6 visit closeout drawer; encounter is FINAL per inv 26 immutability) / (7) `cancelled_before_start` (cancelled before clinical work began; may emit cancellation fees per DL-15 inv 6) / (8) `archived_post_retention` (post-retention soft-archival per DL-16 inv 13). Transitions are state-machine-validated; illegal transitions emit `illegal_transition_attempted`. Cross-link DL-15 inv 5 appointment lifecycle (NOT identical; appointment + encounter are distinct primitives with related-but-distinct lifecycles).

### Encounter ↔ Encounter Line (per Q9 + Q10 planned-vs-performed distinction)

12. **Encounter Line as 1st-class child of Encounter Container (binding tentative resolution of Q9 + Q10).** Per Knox session 2 + Layer 2 + open Q9 (planned intent vs performed truth). `encounter_line` carries: `id`, `encounter_container_id` FK, `line_kind` ENUM (planned_intent_line / performed_intervention_line / observation_line / order_line / referral_line / followup_action_line / attribution_line per DL-17 inv 31), `line_state` ENUM (`proposed` / `confirmed` / `executed` / `cancelled` / `superseded`), `created_at`, `created_by_actor`, `provider_id` FK NULL, `discriminator_payload` JSONB (per line_kind), `parent_planned_line_id` FK NULL (if this line is the PERFORMED execution of a previously PROPOSED line; preserves planned vs performed audit). Substrate distinguishes **planned intent** (what the encounter intends to do; per booking) from **performed truth** (what actually happened; per provider attestation). REJECTED: collapsing planned + performed into one row — loses audit + analytics + reconciliation per Q10.

13. **Performed Intervention Line captures clinical product + lot + expiration + units + treatment areas (binding per Build Contract §3.7 patch 4).** Per Day 0 patch 4. `performed_intervention_line.discriminator_payload` (when line_kind = performed_intervention_line) carries: `product_id` FK (e.g., Botox SKU), `lot_number` STRING, `product_expiration` DATE, `units_or_syringes` NUMERIC + `unit_kind` ENUM(units / syringes / vials / mL), `treatment_areas[]` ARRAY (e.g., glabella / forehead / crows-feet / masseter), `injector_id` FK (FK to staff = provider_user), `provider_attestation_id` FK (per DL-18 inv 8 + 9). Required for clinical accuracy and recall/safety tracking. NOT yet full inventory tracking (that's Inventory DL Phase D); Day 0 substrate captures the data + adjusts inventory snapshot at performed event.

14. **Encounter Line ↔ Commerce Order Line linkage (binding cross-DL).** Each `encounter_line` of `line_kind = performed_intervention_line` (and other commerce-bearing kinds) may carry `commerce_order_line_id` FK NULL — when the work has been settled commercially. Links allow reconciliation between clinical performed truth and commerce sale truth. Composes with DL-17 inv 6 (sale parent + line child) + inv 17 (commerce order 9-state lifecycle).

### Encounter closeout (Build Contract §3.6 anchor)

15. **Encounter closeout drawer is an atomic operation across substrates (binding per Build Contract §3.6).** Closeout = single atomic action (per DL-16 inv 6 atomicity) that:
    - Collects provider attestation (DL-18 inv 9 attestation envelope; Tier 4 provider_signature)
    - Closes commerce_order (DL-17 inv 17 transition to `paid_fully` / `paid_partial` / etc.)
    - Marks encounter_container.status = `closeout_complete` (per inv 11 state 6)
    - Captures performed_intervention_lines + lot/expiration (inv 13)
    - Emits encounter closeout event per DL-16 envelope
    - Triggers post-encounter outbound (per DL-16 amendment 42; appointment.no_show_followup / clinical.followup_due_reminder / outbound.commerce.purchase_receipt)
    
    Atomic — either all 6 sub-actions succeed or none commit. Saga decomposition per DL-16 inv 26 cross-domain saga-only IF any sub-action spans a different siblings (e.g., Rx prescription mid-closeout). Cross-link DL-16 inv 26 + 31 (compensation if any sub-action fails).

### Care Episode tasks + cadence + recommendations

16. **Care Episode Task substrate — MINIMAL recall extension only in current patch round (binding).** Per Build Contract §3 ledger. `care_episode_task` carries existing fields: `id`, `care_episode_id` FK, `task_kind` ENUM (extended with 3 new recall kinds per Phase 1 hardening: `schedule_followup_recall` / `clinical_review_recall` / `outreach_recall` — added to existing enum: `schedule_followup` / `await_lab_result` / `await_intake_response` / `await_consent_signature` / `await_patient_response` / `provider_review_pending` / `outbound_reminder_due` / etc.), `assigned_to_actor` per DL-16 amendment 43, `due_at` NULLABLE, `status` ENUM, `priority` ENUM per DL-16 amendment 41 (red / yellow), `linked_encounter_id` FK NULL, `escalation_rules` JSONB NULL. **NEW FK fields for recall conversion:** `linked_clinical_object_id` FK NULL (source-of-recall linkage per DL-7), `fulfillment_appointment_id` FK NULL (populated when task converts to scheduled appointment), `fulfillment_encounter_id` FK NULL (populated when clinically acted on). **Binding lifecycle rule:** a care_episode_task is NEITHER an appointment NOR an encounter until it converts. Tasks are first-class CNS substrate; cross-link DL-14 + 1Q.14.2 outbound 8-gate. **Full future-care-obligations substrate design (30+ fields, 55+ Day 0 task_kinds across 10 origin classes, lifecycle conversion rules, 4 refinement gaps) is PARKED at [future_care_obligations_design_2026-05-17.md](future_care_obligations_design_2026-05-17.md) — NOT expanded into DL-20 invariants in this patch round. The Care-Coordination-CNS workstream is a future scope, not this scheduling-foundation round.**

17. **Provider Review Queue substrate composes with care_episode_task (binding per Build Contract §3.7 patch 5).** Per Day 0 patch 5 — Hims-level functionality. `provider_review_queue` is a logical projection of `care_episode_task` rows where `task_kind ∈ {provider_review_pending, await_lab_result, await_intake_response}` AND `assigned_to_actor.actor_kind = provider_user`. Queue routing supports:
    - **Auto-reassignment**: provider unavailability (PTO / off-duty / over-capacity threshold) auto-reassigns to next-eligible-provider per fallback_provider_pool per inv 17
    - **Manager queue fallback**: if no provider eligible, escalate to manager_review_queue
    - **Backup provider pools**: per-specialty backup pool registered in episode_catalog per inv 5
    - **Escalation**: time-based escalation (review pending > N hours → escalate red alert per DL-16 amendment 41)
    
    All tasks emit CNS events per DL-16 envelope; queue is a projection per DL-16 inv 3 category e.

18. **Episode cadence + recommended-next-action engine (binding per DL-14 inv 18-22 AI hybrid + episode_catalog.recommended_cadence).** Episodes have configured cadence per inv 5 `recommended_cadence`. CNS reads episode + encounter history + cadence config → suggests next action (schedule followup / order lab / send patient checkin / request intake / etc.). AI proposes within DL-14 inv 18 autonomy mode; deterministic policy validates. Suggested actions emit `orchestration_action` per DL-14 inv 16. Cross-link DL-14 inv 18-22 + DL-16 amendment 42 outbound trigger registry.

### Multi-initiator video + multi-channel encounter creation

19. **Video visit encounter initiation supports 4 affordances Day 0 (binding per user direction 2026-05-17 + Build Contract §3 ledger).** Per user direction verbatim: *"a scheduled visit in a hyvrid clinic can be started by the client, it can be started by the provider, by a suggestino from the system. a Hims patient should always have option to utilize a scheduled visit, video, in clinci or otherwise. a him client should be able to click 'schedule video call now' on Day 0"*. Four affordances at Day 0:
    - **Patient-initiated** ("schedule video call now" button in patient portal → emits booking request → encounter_container with encounter_profile_id=video_visit created)
    - **Provider-initiated** (provider initiates from chart; rare but supported)
    - **Staff-initiated** (front desk schedules on patient's behalf; standard flow)
    - **CNS-suggested** (per inv 18 episode cadence engine; CNS proposes "schedule video followup" → patient/staff accept)
    
    All 4 paths converge in `encounter_container` creation per inv 10; provenance preserved per actor 4-tuple (DL-16 amendment 43).

### Async encounter + cross-channel continuity

20. **Async Encounter primitive (binding for Hims-style + chronic-care continuity per user direction).** Per user feedback gap #7 + #8 + Build Contract §5 Hims workflow scenarios. Async encounters have `encounter_profile_id = async_review`; do NOT require scheduled_time per inv 8 `requires_scheduled_time = FALSE`; created from intake or message thread per inv 10 intake-first creation pattern. Lifecycle proceeds: `intake_received_pending_provider_review` → `in_progress` (provider reviews) → either `clinical_work_complete` (provider issues Rx / orders lab / makes decision) OR transitions to `paused_pending_external` (provider requests more info). Async encounters can convert to scheduled visits via `encounter_kind_changed` event + new encounter linked via inv 7 reassignment chain.

21. **Cross-channel encounter continuity (binding per Q11 visit closeout drawer + Q13 Interaction vs Encounter boundary).** Per Knox session 2 marker — interaction (message, call, voicemail) becomes encounter-linked-evidence when it informs/triggers/documents an accountable care action. Substrate captures via `encounter_interaction_link` carrying: `encounter_container_id` FK + `interaction_id` FK (FK to messages / calls / voicemails substrate per §1G + §1V + §1Q) + `link_kind` ENUM (`informed_decision` / `triggered_creation` / `documented_action` / `followup_response`) + `created_by_actor`. Interactions can ALSO exist without encounter linkage (general patient communications). Q13 boundary preserved per Knox marker.

### Cross-DL bindings

22. **DL-20 ↔ DL-15 Scheduling (binding).** Booking emits scheduling event + creates encounter_container per inv 10 scheduled-first path. Encounter container persists across reschedule (cancel original appointment, book new — encounter stays linked per DL-15 inv 6 compensation; appointment FK updates).

23. **DL-20 ↔ DL-17 Commerce (binding).** Encounter closeout closes commerce_order atomically per inv 15. Performed lines may link to commerce lines per inv 14. Cross-link DL-17 inv 32 saga.

24. **DL-20 ↔ DL-18 RBAC (binding).** Encounter operations require atoms (`encounter.open` / `encounter.close` / `encounter.add_performed_line` / `encounter.attest_signature` / `episode.create` / `episode.reactivate` / `episode_task.assign` / `episode_task.escalate`). Per DL-18 inv 22. Provider attestation per DL-18 inv 9 attestation envelope.

25. **DL-20 ↔ DL-19 Settings (binding).** Episode catalog (inv 5) + encounter profile registry (inv 8) live in settings substrate per DL-19 inv 18 encounter_profile_policy. Settings change emits `policy_changed.episode_catalog` → DL-20 substrates react.

26. **DL-20 ↔ DL-7 Tracked Clinical Objects (binding).** Encounter performed_intervention_lines may update tracked_clinical_objects per DL-7 (e.g., performed Botox glabella → updates `glabellar_rhytid` clinical_object continuity history per DL-7 invariant 3). Cross-link DL-7 + DL-20 inv 13.

27. **DL-20 ↔ Federation-Topology DL (binding).** Encounter venue_id (inv 6) references venue substrate per Federation-Topology DL 11-axis venue. Multi-state video visits + multi-LE scenarios per Build Contract §3.7 patch 1 jurisdiction.

### Auto-instantiation + lifecycle events

28. **Auto-instantiation rules for care episodes (binding per inv 5 `auto_instantiation_rules`).** Some operational events deterministically create care episodes:
    - First GLP-1 Rx prescribed → auto-create `weight_loss_glp1` episode (cross-link DL-7 + Rx substrate)
    - First Botox performed → auto-create `botox_maintenance` episode
    - First peri-op intake submitted for plastics → auto-create `peri_procedure_plastics_<procedure_type>` episode
    - First lipid panel result outside-normal-range + provider order → auto-create `lipid_management` episode
    
    Auto-instantiation rules declared in `episode_catalog.auto_instantiation_rules` JSONB. CNS executes per DL-14 inv 18 deterministic policy. AI proposes auto-instantiation; deterministic policy commits per DL-14 inv 18 + 21 (clinical clearance not bypassed).

### Audit + immutability

29. **Encounter closeout immutability (binding per inv 11 state 6 + DL-16 inv 38 tamper-evident).** Post-`closeout_complete` encounter is immutable; corrections are additive `encounter_correction` rows per inv 30. Provider can amend the chart but the original chart + attestation is preserved (analogous to DL-17 inv 29 sale immutability).

30. **Encounter correction substrate (per DL-12 + DL-16 inv 38).** `encounter_correction` carries: `id`, `original_encounter_container_id` FK, `correction_kind` ENUM (`addendum_to_chart` / `entered_in_error_void` / `clinical_amendment` / `commerce_adjustment`), `correction_text` TEXT, `corrected_by_actor` per DL-16 amendment 43 (must satisfy Tier 4 attestation per DL-18 inv 8), `corrected_at`, `attestation_id` FK. Original encounter not mutated; corrections are additive rows + emit `encounter_corrected` events per DL-16.

### Decision record per DL-16 inv 30

31. **Every encounter decision (open / close / pause / reassign / amend) emits a `cns_decision` record per DL-16 inv 30 (binding).** Decision record records: triggering event(s), context snapshot (episode state / encounter state / clinical state at decision time), rule versions, AI versions if any, policy resolution layers, alternatives considered, action(s) emitted, reason. Audit lineage appendable post-action; never mutable. Cross-link DL-16 inv 30 + 33 + 38.

### Open-question boundaries preserved

32. **Q12 (federation) cross-references for Day 0 federation (binding per user direction).** Per user direction 2026-05-17: federation Day 0. Encounter venue_id + legal_entity_id (inv 6) compose with Federation-Topology DL 11-axis venue. Patient continuity across modalities (Hims + medspa + federation) preserved via single patient_id per DL-10 + primitive #19 + Federation-Topology DL.

### Three-layer foundation refinement (Phase 1 hardening v2 — appointment + appointment_item + encounter + encounter_line as separated layers per industry pattern)

33. **`appointment` substrate (Layer 1 planned operational commitment, binding).** Per the 3-layer model that matches FHIR + Epic + Cerner + Athena + Amazon + airline + restaurant + Tesla patterns. The appointment IS the synchronous-trip container; lazy multi-line container materializes only when 2+ items coordinate.

    ```text
    appointment
    ├── id, tenant_id, patient_id, patient_relationship_id
    ├── venue_id NULL (per DL-21 11-axis venue substrate)
    ├── planned_window_start, planned_window_end
    ├── status ENUM (per DL-15 inv 5 + amendment 8 renames):
    │       proposed / held / hold_expired / scheduled (was "confirmed") /
    │       scheduled_pending_deposit (was "confirmation_pending_deposit") /
    │       checked_in / in_progress / completed / cancelled / no_showed /
    │       rescheduled / disputed / archived
    ├── booking_channel ENUM (registry-extensible per DL-16 inv 5):
    │       online_self_booking / staff_phone_booking / staff_walk_in_booking /
    │       staff_in_person_booking / cns_proposed_accepted /
    │       api_partner_booking
    │   (HOW the booking was made — single concept)
    ├── attribution_source STRING NULL
    │   (WHERE the patient came from — free-form: UTM, influencer code,
    │    referral_patient_id, organic, paid_search, walk_in_other)
    ├── trigger_source ENUM (registry-extensible):
    │       patient_initiated / staff_initiated /
    │       care_episode_recall_conversion / waitlist_promotion /
    │       no_show_recovery_rebook / cns_proposed_accepted /
    │       partner_referral_inbound
    │   (WHAT initiated the booking flow — single concept)
    ├── booking_request_note STRING NULL (cap 500 chars; patient-typed at
    │       booking; MUTABLE with audit history per DL-16 inv 38 — each edit
    │       emits appointment.booking_request_note_modified event capturing
    │       before/after/actor/timestamp; patient may add context later;
    │       staff may correct typos; single field, single-author UX)
    ├── confirmation_state ENUM (state machine; deterministic transitions
    │       per DL-15 inv 5 pattern; illegal transitions emit
    │       illegal_transition_attempted):
    │       unconfirmed (initial after scheduled)
    │       confirmation_sent (outbound dispatched)
    │       confirmed (patient acknowledged — natural staff-facing term
    │                  per DL-15 amendment 8 freeing this word)
    │       cancellation_requested (does NOT auto-cancel; routes to
    │                               deterministic policy or staff review)
    │       reschedule_requested (routes to reschedule flow per DL-15 inv 6)
    │       staff_review_required (ambiguous classification)
    │       failed_delivery (all attempts failed)
    │       expired_no_response (NOT cancellation; tenant policy decides)
    │       not_required (tenant admits some service types as no-confirm)
    ├── source_booking_preset_id FK NULL          (Amendment A per Phase 1
    │       hardening v3 / Knox 2026-05-17 patch round)
    │       — DL-19 inv 19 booking_preset that initiated the booking action;
    │       NULL for direct raw service bookings + degenerate staff category
    │       fallback; populated for single-item presets / category-targeting
    │       presets / bundle presets uniformly. Used for analytics +
    │       schedule label projection per Day 0 Scheduling Rule Matrix TM-14
    │       + cancellation cascading + booking-shape analytics. Generalizes
    │       beyond bundle-only patterns (which the earlier draft name
    │       bundled_from_preset_id implied).
    ├── fulfillment_encounter_id FK NULL (populated when realized into encounter)
    ├── created_by_actor (DL-16 amendment 43 4-tuple)
    └── ... cancellation_policy_id FK NULL, audit lineage
    ```

    Patient new-vs-repeat status COMPUTED at runtime from `patient.first_visit_at IS NULL` — NOT stored as enum value. UI projects "New patient" / "Repeat — Nth visit" badges from this computed state.

    Meaning across status + confirmation_state: `appointment.status = scheduled` = booking commitment exists (slot held); `confirmation_state = confirmed` = patient acknowledged. Orthogonal. Both can be set simultaneously without conflict.

34. **`appointment_item` substrate (Layer 1 planned line under appointment, binding).** Each appointment has 1-to-N items. Item is what was planned to happen.

    ```text
    appointment_item
    ├── id, appointment_id FK
    ├── planned_service_id FK NULL OR planned_service_category_id FK NULL
    │   (exactly one populated; specific service vs category-level booking
    │    per neuromodulator-family / injectable-menu UX)
    ├── planned_pricing_option_id FK NULL (for tier-at-booking per Hydrafacial
    │       Signature/Deluxe/Platinum — NULL = tier resolved at checkout)
    ├── sequence_index NUMERIC (for sequential trips: Hydrafacial 1 → injector
    │       2 → red light 3 in same appointment)
    ├── planned_start, planned_end (per-item time window)
    ├── planned_quantity NUMERIC NULL (e.g., 24 units Botox, 5 areas LHR,
    │       2 cycles CoolSculpting)
    ├── planned_treatment_areas[] MATERIALIZED PROJECTION
    │       (Amendment C per Phase 1 hardening v3 / Knox 2026-05-17 patch
    │       round — clarifies source-of-truth) — derived from
    │       planned_details.treatment_areas at write time via trigger;
    │       indexed for analytics queries; do NOT write to this column
    │       directly. Source of truth is the JSONB field below.
    ├── planned_details JSONB CANONICAL SOURCE OF TRUTH (structured
    │       planned-detail capture validated against
    │       service.planned_detail_schema per DL-19 inv 18 — treatment areas,
    │       preferred product, planned cycles, tier preferences; NO free
    │       text in structured path; controlled vocabulary against tenant
    │       schemas; treatment_areas array within JSONB is canonical,
    │       planned_treatment_areas[] column above is materialized
    │       projection only)
    ├── planned_provider_id FK NULL
    ├── planned_room_id FK NULL
    ├── planned_resource_id FK NULL
    ├── prep_time, booking_time, finish_time (per DL-15 amendment 31)
    ├── item_state ENUM: proposed / confirmed / in_progress / executed /
    │       cancelled / skipped_at_visit / superseded / fulfilled
    ├── item_origin ENUM: booking_initial / added_at_visit /
    │       added_during_closeout
    ├── parent_item_id FK NULL (for ADD-ONS — hair salon haircut+gloss,
    │       medspa facial+lip flip; child line inherits parent's
    │       provider/room/resource OR carries own)
    ├── visibility_to_patient BOOLEAN
    ├── linked_recall_task_id FK NULL (when item fulfills a recall)
    └── linked_booking_preset_id FK NULL (per DL-19 booking_preset that
            materialized this item)
    ```

35. **`encounter` substrate (Layer 2 actual care moment, binding — REFACTORED from prior encounter_container).** Created when work begins. encounter_profile_registry (prior proposal) is RIPPED OUT entirely; specialty-coded enum values were leakage per system_map Cross-DL warning.

    ```text
    encounter
    ├── id, tenant_id, patient_id, patient_relationship_id
    ├── modality ENUM (4 values only — NO specialty leakage):
    │       in_person / video / phone / async
    ├── arrival_kind_actual ENUM (registry-extensible):
    │       scheduled / walk_in / ad_hoc_video /
    │       inbound_message_triggered / cns_initiated_async /
    │       lab_review_initiated
    ├── fulfillment_appointment_id FK NULL (when realized from appointment;
    │       NULL for walk-in, async, lab review, message escalation)
    ├── care_episode_id NULL
    ├── venue_id NULL
    ├── actual_start, actual_end
    ├── status ENUM: started / in_progress / paused_pending_external /
    │       clinical_work_complete / closeout_complete /
    │       cancelled_before_start / archived
    ├── closeout_attestation_id NULL (per DL-18 inv 9; provider signature
    │       at closeout)
    └── created_by_actor (DL-16 amendment 43)
    ```

    Specialty / service-type / venue-type all live on their own axes:
    - WHAT was planned = `appointment_item.planned_service_id` (DL-15/17 catalog)
    - WHAT happened = `encounter_line` rows with line_kind discriminator (inv 12)
    - WHO participated = `encounter_participant` rows (inv 38 NEW)
    - WHY care over time = `care_episode_id` FK
    - WHERE physically = `venue_id` FK (DL-21 11-axis venue)
    - WHAT resources = `room_id` / `resource_ids[]` (DL-15 4-axis composer)
    - HOW BILLED = linked `commerce_order_id` (DL-17)
    
    Provider capability / specialty / licensure is a CONSTRAINT on the participant (read at booking from staff_capability per DL-18 inv 6 + provider_license per DL-21 inv 12), NOT a column on encounter.

36. **`encounter_line` REFACTOR — adds `linked_appointment_item_id` FK NULL (when this line fulfilled a planned item from appointment).** Existing line_kind enum + line_state + provider_id + attestation_id + performed_payload JSONB + linked_clinical_object_id + linked_commerce_order_line_id + linked_thread_message_id + linked_patient_document_id remain per inv 12. Encounter_lines are created WHEN WORK HAPPENS, not auto-copied from appointment_items at check-in (preserves Q9 planned-vs-performed distinction).

37. **Encounter creation paths (binding per Knox session 2 marker, REFACTORED from prior inv 10):** scheduled-first (appointment → check-in → encounter with fulfillment_appointment_id); intake-first (intake_session submitted → encounter with arrival_kind=inbound_message_triggered, no appointment); walk-in (encounter at door, arrival_kind=walk_in, no appointment); ad-hoc video (patient or provider initiates → encounter, no appointment); async clinical decision (provider takes action → encounter, modality=async, no appointment); lab review (provider reviews lab result → encounter, arrival_kind=lab_review_initiated, no appointment); message escalation (CNS detects urgency in inbound message → encounter, arrival_kind=cns_initiated_async). Each path produces an encounter with appropriate fulfillment_appointment_id (NULL when no upstream appointment).

38. **`encounter_participant` substrate (NEW Phase 1 hardening; 3 FK targets, NOT 4).** Multi-role participants attach to EITHER appointment_item_id (planned participant for specific item: injector for Dysport line) OR encounter_line_id (performed participant for specific line) OR encounter_id (visit-wide role: checkout_owner, patient_facing_designated, supervising MD on call). Exactly one FK populated.

    ```text
    encounter_participant
    ├── id
    ├── appointment_item_id FK NULL
    ├── encounter_line_id FK NULL
    ├── encounter_id FK NULL    (exactly one of the 3 populated)
    ├── staff_id FK
    ├── role ENUM (registry-extensible per DL-16 inv 5; NOT closed):
    │       primary_rendering_provider / assisting_staff /
    │       supervising_provider / checkout_owner / care_team_member /
    │       patient_facing_designated / observer / trainee
    ├── valid_from, valid_to NULL (admits mid-encounter handoff)
    └── joined_at_actor (DL-16 amendment 43)
    ```

    Multi-provider per-line via multiple appointment_item-scoped participants; visit-wide via encounter-scoped participants. "Operational owner" is a projection: patient_facing_designated for patient-side rendering; highest-attestation-tier participant for closeout; checkout_owner role for commercial coordination. NOT a substrate column.

39. **`appointment_staff_note_entry` substrate (NEW Phase 1 hardening — REPLACES single-field staff_booking_note per Knox refinement).** Append-only child substrate with note_kind discriminator. Captures Mindbody's "NC—..." pattern properly + the three distinct staff note types (scheduling context / treatment preview / inventory prep / etc.).

    ```text
    appointment_staff_note_entry
    ├── id, appointment_id FK
    ├── note_kind ENUM (registry-extensible per DL-16 inv 5):
    │       scheduling_context / treatment_preview /
    │       inventory_prep / deposit_capture / visit_followup /
    │       reschedule_context / general
    ├── content STRING (cap 500 chars per entry)
    ├── entered_at TIMESTAMP
    ├── entered_by_actor (DL-16 amendment 43 — initials shown in UI)
    ├── visibility ENUM: staff_only / supervisor_only / patient_visible_explicit
    └── superseded_by_entry_id FK NULL (if later entry corrects)
    ```

    UI renders entries reverse-chronologically with actor initials + timestamp. Multiple staff append without overwriting. Heavier clinical notes live in DL-7 clinical_record / DL-22 patient_document — distinct substrate.

40. **`appointment_confirmation_event` substrate (NEW Phase 1 hardening — CNS round-trip orchestration; REPLACES single confirmed timestamp).** Confirmation is event-driven orchestration round-trip per DL-14 + DL-16 + DL-15 state machine. AI classifies; deterministic rules transition state. Event substrate REFERENCES messaging/orchestration/cns_decision substrates via FK; does NOT duplicate content.

    ```text
    appointment_confirmation_event
    ├── id, appointment_id FK
    ├── round_trip_kind ENUM: outbound_attempt / inbound_response /
    │       cns_classification / state_transition
    ├── confirmation_method ENUM (registry-extensible):
    │       email_auto / sms_auto / sms_manual_staff_typed /
    │       phone_call_outbound / phone_call_inbound /
    │       in_app_push / patient_portal_click /
    │       staff_verbal_in_person
    ├── linked_orchestration_action_id FK NULL (DL-14 primitive #10;
    │       outbound action ref — content lives in orchestration_action
    │       substrate, NOT here)
    ├── linked_inbound_message_id FK NULL (§1Q/§1V messaging substrate;
    │       REFERENCE only, message content NOT duplicated here)
    ├── linked_cns_decision_id FK NULL (DL-16 inv 30; classification ref)
    ├── classified_intent ENUM NULL (when round_trip_kind=cns_classification):
    │       confirmed / cancel_request / reschedule_request /
    │       question_unrelated / ambiguous / opt_out / other
    ├── classifier_confidence NUMERIC NULL (AI confidence per DL-14 inv 18-22)
    ├── requires_staff_review BOOLEAN
    ├── state_transition_applied BOOLEAN (FALSE = queued for staff review;
    │       TRUE = appointment.confirmation_state actually changed)
    ├── resulting_state_transition_from + to (when round_trip_kind=state_transition)
    ├── occurred_at TIMESTAMP
    ├── triggered_by_actor (DL-16 amendment 43)
    └── notes STRING NULL
    ```

    Round-trip flow: appointment scheduled → CNS emits outbound action → patient responds via rail → CNS classifier interprets → IF classifier_confidence above threshold AND classified_intent unambiguous: deterministic rules transition confirmation_state, state_transition_applied=TRUE; ELSE: requires_staff_review=TRUE, confirmation_state=staff_review_required, staff resolves manually with explicit state transition event.

    Guard (binding): appointment_confirmation_event MUST NOT duplicate messaging substrate. Stores ONLY appointment-specific interpretation + state-transition audit. Message content lives in messaging substrate; outbound payload lives in orchestration_action substrate; CNS classification record lives in cns_decision substrate. AI classifies; deterministic rules + staff decide. AI never silently changes appointment state.

### Phase 1 hardening v2 explicit rejections

41. **Phase 1 hardening v2 REJECTED patterns (cross-link to system_map Cross-DL warning + preservation doc).** Patterns considered and rejected during 2026-05-17 pressure-test arc:
    - encounter_profile_registry as substrate enum with specialty-coded values (aesthetic_treatment_visit / procedure_visit_with_room / etc.) — RIPPED OUT; encounter.modality is 4 values only
    - Mandatory encounter_container as separate row for every visit — appointment IS the container for synchronous trips; lazy container materializes only when 2+ items coordinate
    - "appointment_line as primary primitive collapsing all clinical truth" (my prior overcorrection) — restored 3-layer separation
    - "acknowledged_by_patient" workaround for confirmation_state (my prior workaround to dodge DL-15 amendment) — DL-15 amendment 8 fixes upstream collision; confirmation_state.confirmed is the natural term
    - schedule_segment substrate as child of encounter_line (Knox over-modeling) — appointment_item + encounter_line carry own timing
    - 6-state line-type enum (primary/add-on/dependent/optional/same-day-added/not-performed) — replaced by parent_item_id FK + item_origin 3-value ENUM + per-item policy axes
    - 4-FK participant attachment (appointment+appointment_item+encounter+encounter_line) — 3 FK targets only
    - New care_obligation substrate for recalls — extends existing care_episode_task with 3 recall task_kinds
    - Auto-copy appointment_items to encounter_lines at check-in — encounter_lines created when work happens
    - "reason_for_visit[]" tenant-controlled-vocabulary checklist — booking_request_note free-text field (bounded, mutable with audit) + structured planned_details JSONB
    - compound booking_origin enum — decomposed into 3 fields (booking_channel + attribution_source + trigger_source)
    - array-of-promo-FKs on appointment — replaced by appointment_promo_intent substrate per DL-17 inv 37
    - single-string staff_booking_note — replaced by appointment_staff_note_entry append-only child substrate per inv 39
    - simple-event-table confirmation (one row per send) — replaced by CNS round-trip with state machine + cns_classification rows + state_transition rows per inv 40

    Full pressure-test arc + rationale preserved at [future_care_obligations_design_2026-05-17.md](future_care_obligations_design_2026-05-17.md).

### Round 5 closure-execution amendments (2026-05-19; bridge + canonical mapping lock)

42. **Amendment R5-KC-1 (K(C) minimal participant/seat substrate lock, binding for Round 5 closure path A).** Appointment-layer composition uses combined `appointment_participant` + `appointment_seat` model:
    - participant semantics: caregiver / guardian / observer / guest / care_recipient flags + visibility/authority metadata
    - seat semantics: seat reservation/check-in/release/no-show + per-seat linkage refs
    - linkage: seat may map to participant/patient; non-seat participants may exist without billable seat
    - boundary: D5 references these overlays for actualization mapping, but participant/seat rows do not force appointment-dependency for async/walk-in/resource-origin occurrence flows.

43. **Amendment R5-WI-2 (`service_occurrence_work_item` canonical atomic actualized-work mapping; `encounter_line` transition lock).** For Round 5 closure:
    - canonical D5 atomic actualized-work primitive = `service_occurrence_work_item`
    - `encounter_line` is not competing canonical truth in D5 closure path
    - allowed `encounter_line` posture = D7 record-materialized projection OR transitional alias/read model mapped from `service_occurrence_work_item`
    - forbidden posture = dual canonical write source between encounter_line and work_item
    - commerce consequence: D6 financial truth links to work-item refs; financial corrections do not rewrite actualized-work truth.

44. **Amendment R5-LK-3 (`service_occurrence_link` minimal Day 0 typed-edge substrate).** Promote from reserved to minimal implementation for closure-critical correction/multi-causal lineage:
    - shape: `from_occurrence_id`, `to_occurrence_id`, `link_type`, `reason_code`, actor/timestamps
    - minimum link types: `supersedes`, `depends_on`, `follows`, `caused_by`, `references`, `sibling_of`
    - scope: no full graph-theory expansion in Round 5; typed edges only where closure scenarios force explicit non-tree lineage (wrong-chart correction, multi-pathway async overlap, merge lineage, etc.).

---

## Open sub-questions (require Knox + user signoff before lock)

- **Q-DL20-1 (Q1 resolution)**: Single `encounter_container` table with profile discriminator (Option A) — promotion to LOCK requires Q1 SHELVED → RESOLVED commit + Knox + user joint signoff. The tentative resolution (Option A) is **opus-recommended** based on pressure-test §10 + Build Contract feasibility + simplicity per Knox session 2 marker.
- **Q-DL20-2 (Q6 resolution)**: Care Episode as 1st-class parent (per inv 1) — promotion to LOCK requires Q6 SHELVED → RESOLVED commit + signoff. Tentative resolution: Care Episode IS the parent (per Knox session 2 marker + Layer 2 evidence).
- **Q-DL20-3**: Walk-in encounter handling — does walk-in create encounter at door OR at first action (e.g., commerce sale)? Tentative: walk-in creates encounter at door with `status = scheduled_not_started`; if no clinical work happens (e.g., retail-only walk-in), encounter `cancelled_before_start` at sale close; clinical reality preserved.
- **Q-DL20-4**: Multi-provider encounter handling (per Layer 2 D.10 — 4 simultaneous appointments with different providers for one client visit) — one encounter_container with multiple providers (additional_staff_ids[]) OR multiple encounter_containers grouped under an `encounter_session` parent? Tentative: Option A (single encounter, multi-staff) for simplicity Day 0; revisit M6 if clinical analytics requires distinct provider attribution.
- **Q-DL20-5**: Specialty rollout depth — Day 0 ships 12 episode_kind seeds across 7 specialties (medspa/derm/Hims-style/plastics/GI/cardio/endocrine/sleep). Depth-per-specialty varies (medspa deepest; sleep shallowest). Specialty deeper invariants deferred per Build Contract §8 phasing.

---

## Rejected patterns

- **No Care Episode primitive (encounters drift orphan).** Per inv 1 — Care Episode is 1st-class.
- **Episode kind = ICD-10 categorization.** Per inv 2 — operational vs clinical-coding distinct.
- **Cross-brand episode sharing without permeability.** Per inv 3 + DL-10 strict isolation.
- **Single-encounter-table-with-NULL-profile.** Per inv 6 — profile FK is NOT NULL; tenant-configurable.
- **Cross-episode encounter linkage.** Per inv 7 — one encounter to one episode.
- **Out-of-band encounter creation without appointment OR intake.** Per inv 10 — substrate REJECTS; out-of-band uses DL-16 inv 36 manual capture.
- **Planned + performed collapsed into one row.** Per inv 12 — distinct rows preserve audit.
- **Encounter mutation post-closeout.** Per inv 29 — additive correction rows only.
- **AI auto-instantiation of episodes bypassing deterministic policy.** Per inv 28 — AI proposes; policy commits.
- **Encounter without atomic closeout.** Per inv 15 — atomic per DL-16 inv 6.

---

## Cross-link summary

- **Inherits from:** DL-1 + DL-2 + DL-7 (tracked clinical objects) + DL-10 (multi-tenant) + DL-12 + DL-14 + DL-16 (envelope + audit + amendment 42 outbound + amendment 43 actor)
- **Specializes:** DL-7 foundation primitives for the encounter substrate (encounter_line ↔ clinical_object continuity)
- **Composes with:** DL-15 (scheduling: appointment ↔ encounter; amendment 30 4-axis composer reads encounter_profile policy) + DL-17 (commerce: encounter closeout closes sale; performed_line ↔ commerce_order_line) + DL-18 (RBAC: encounter atoms + provider attestation) + DL-19 (settings: episode_catalog + encounter_profile_registry live in settings substrate)
- **Future DL composition:** Clinical-Coding DL (Phase D — ICD-10 / CPT on performed lines) + Clinical-Media DL (Phase 1 — intake / consent / clinical_media substrates) + Federation-Topology DL (venue_id; multi-LE) + Inventory DL (Phase D — product/lot inventory deduction)
- **Coexists with:** §1F existing care primitives (continuation gating per 1L.16 + clinical visits) + §1G AI layer + §1J identity + §1K.5.A clinical authority

---

## Q1 + Q6 partial resolution promotion gate

This DRAFT contains **tentative resolution of Q1 + Q6**. Promotion to locked doctrine requires:
1. Knox + user joint signoff on Q1 (single `encounter_container` with profile discriminator) per Q-DL20-1
2. Knox + user joint signoff on Q6 (Care Episode as 1st-class parent) per Q-DL20-2
3. mindbody_open_questions_raw.md update marking Q1 + Q6 SHELVED → RESOLVED with cross-reference to DL-20 locked invariants
4. system_map cross-references updated per cross-link summary

Until Q1 + Q6 are jointly signed off, DL-20 remains DRAFT.

NOT code. NOT migrations. NOT substrate slice. NOT §10.5 stale-existing-OMNI warning removal.
