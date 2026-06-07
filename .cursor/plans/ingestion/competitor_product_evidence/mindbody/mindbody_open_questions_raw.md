# Mindbody / OMNI direction — open questions gap log

Source: agent extraction from [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) (verbatim Knox + user back-and-forth, 2026-05-16 session 1)
Status: open questions log — do not resolve until Phase B.5 Layer 2 synthesis + user/Knox/Opus review
Date filed: 2026-05-16
Companion: [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md)

---

## STATUS UPDATE 2026-05-17 — partial resolutions surfaced in Phase 1 hardening v2 DRAFTs (PENDING joint signoff)

Per the 2026-05-17 patch round v2 design pressure-test session, the following questions have TENTATIVE partial resolutions in the new DL DRAFTs at `.cursor/plans/doctrine/DL-NN_*_DRAFT_2026-05-17.md`. **These are NOT yet locked.** Promotion to RESOLVED requires explicit joint Knox + user + Opus signoff. Until then, treat as SHELVED → TENTATIVE RESOLUTION IN DRAFT.

- **Q1 (encounter container architecture):** SHELVED → tentative resolution in DL-20 DRAFT (Phase 1 hardening v2 invariants 33-40). Three-layer foundation: appointment + appointment_item / encounter + encounter_line / linked evidence + commerce. The encounter_profile_registry with specialty-coded enum values (originally proposed) is RIPPED OUT entirely. encounter.modality is 4 values only (in_person / video / phone / async). Industry-validated against FHIR + Epic + Cerner + Athena + Amazon + airline + restaurant + Tesla patterns. Full pressure-test arc + 15 scenario stress tests preserved at [.cursor/plans/doctrine/future_care_obligations_design_2026-05-17.md](../../doctrine/future_care_obligations_design_2026-05-17.md).
- **Q6 (Care Episode parent object):** SHELVED → tentative resolution in DL-20 DRAFT inv 1. Care Episode is 1st-class substrate primitive (parent of encounters). Lifecycle 6-state (intake_pending / active / in_remission_or_paused / completed / transferred_out / archived_inactive).
- **Q7 (Provider authorship + attestation tiers):** SHELVED → tentative resolution in DL-18 DRAFT inv 8-9. 4-tier authorship hierarchy (authorship_only / reason_coded_authorship / dual_approval_authorship / provider_attestation_signature). Tier 2 reason_code seeds existing SensitiveAccessReason enum at lib/auth/capabilities.ts lines 89-95.
- **Q8 / Q11 (Visit closeout drawer):** SHELVED → tentative resolution in DL-20 DRAFT inv 15. Closeout drawer is atomic operation across substrates (clinical attestation + commerce close + encounter status transition + performed lines + closeout outbound).
- **Q9 (Planned intent vs performed truth):** SHELVED → tentative resolution in DL-20 DRAFT inv 12 + 36. Distinct line_kinds: planned_intent_line on appointment_item, performed_intervention_line on encounter_line. Encounter_lines created when work happens, NOT auto-copied from appointment_items.
- **Q10 (3-lane source-of-truth):** SHELVED → tentative resolution in DL-20 + DL-17 cross-DL discipline. Scheduling truth on appointment + appointment_item; clinical truth on encounter + encounter_line; commerce truth on commerce_order + commerce_order_line. Three lanes linked via FK, never collapsed.
- **Q12 (federation Day 0):** SHELVED → tentative resolution in DL-21 DRAFT. Federation activated to Day 0 substrate per user direction 2026-05-17 (3 spas Day 1 + plastics next). Mode 1 + Mode 2 substrate primitives Day 0; Mode 3/4/5/6+ deferred per FUTURE_ARC §8.
- **Q13 (Encounter vs Interaction boundary):** SHELVED → tentative resolution in DL-20 DRAFT inv 21. encounter_interaction_link substrate captures Knox's "interaction becomes encounter-linked-evidence when it informs/triggers/documents an accountable care action" boundary. Interactions can also exist without encounter linkage (general patient communications).
- **Q14 (Photos/intake/consent/docs as separate clinical artifacts):** SHELVED → tentative resolution in DL-22 DRAFT inv 1-2. Unified patient_document substrate with document_kind discriminator (16 Day 0 seed kinds: clinical_photo_general / before_after_baseline / before_after_followup / intake_form_submission / consent_signature / signed_liability_waiver / signed_contract_document / id_scan_patient / insurance_card_scan / external_lab_report / external_imaging_report / external_pathology_report / external_referral_letter / clinical_progress_attachment / clinical_education_handout_sent / other).

**Promotion gate:** each tentative resolution requires explicit joint Knox + user + Opus signoff before this file is updated to mark Q1/Q6/Q7/Q8/Q9/Q10/Q11/Q12/Q13/Q14 as RESOLVED. Until then, the resolutions live IN the DRAFTs as TENTATIVE; this STATUS UPDATE block cross-references them.

Remaining questions not yet addressed by Phase 1 hardening v2: Q2 (45 workflow scenario coverage) + Q3 (commerce 4-entity split validity) + Q4 (Knox 12-entity check) + Q5 (capability flag scope) + Q15 onwards as applicable. Phase B.5+ doctrine sharpening continues.

---

## Why this file exists

Per Knox's explicit recommendation in [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 6:

> "That belongs in the gap log / open questions file, not as final doctrine yet."

This file extracts the architectural questions surfaced during the 2026-05-16 OMNI scheduling design pressure-test session, indexed for cross-reference from Layer 2 synthesis. **None of these are resolved.** All are **deferred to Phase B.5+ doctrine sharpening** after Layer 2 review.

The companion `mindbody_to_omni_direction_raw.md` holds the verbatim back-and-forth. This file holds the indexed open-question list extracted from it.

---

## Resolution discipline

- **Do NOT amend DL-15 or DL-14 or DL-16 based on these questions during Phase B.5.** All amendments are post-Layer-2 work per [phase_b5_mindbody_ingestion_4db27449.plan.md](../../phase_b5_mindbody_ingestion_4db27449.plan.md) "What Phase B.5 does NOT do" section.
- **Do NOT author new DLs (commerce / RBAC / settings) during Phase B.5.** New DL drafts are post-Layer-2 work, scoped in Layer 2 Section G.
- **Do NOT scope substrate slice work from these questions during Phase B.5.** Substrate slice scoping is Layer 2 Section H.
- **DO cross-reference these questions from Batches 2-N raw captures** where a screenshot makes one of these questions concrete. The cross-reference belongs in the screenshot's `ARCHITECTURAL OBSERVATIONS` block, framed as "this screen surfaces evidence relevant to Open Question Q-N (see [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md))."
- **DO use these questions as Layer 2 anchor points** in sections G / H / I / J / K (refined doctrine sharpening scope, refined substrate slice scope, OMNI competitive moats, cross-domain implications, industry analogy insights).

---

## Q1 — Encounter container architecture (PRIMARY shelved question)

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turns 1, 5, 6 (especially Turn 5).

**Question (verbatim user framing):** *"in a medspa, any visit is essentially a proecude. there is no like, cliniv visit that doesnt permit a mini procedure. so we need to think on does a clinic visit auto allow for that... vs a endoscopy visit, or are they the same container???? think hard."*

**Knox's tentative position (Turn 5):** **Same parent container, different encounter profile.** Encounter Container with planned intents + performed intervention/procedure lines. Encounter profiles enumerated:

```
async_review
virtual_visit
phone_visit
office_visit
office_visit_with_minor_procedure
procedure_encounter
surgical_case
resource_only_session
internal_event
```

All share the same spine: Encounter → planned intents → reserved resources → participants → performed intervention/procedure lines → notes/documents → inventory/products → charges/payments/entitlements → CNS events/actions/outcomes.

**Knox's key rule (Turn 5):** *"a visit may permit procedure lines, but it does not automatically authorize any procedure. Same-day add-ons should pass policy checks: provider capability, consent, contraindications, room/device availability, inventory, payment/entitlement, and documentation requirements."*

**Open implementation alternatives:**
- A. Single `encounter` table + `encounter_profile` enum + per-profile constraint set (Knox's tentative position)
- B. Polymorphic `encounter` + separate `procedure_case` / `office_visit` subtype tables
- C. Pure tag/role pattern on a flat `encounter` (no profile enum) with policy-driven discovery
- D. Two separate top-level tables (`clinic_visit` + `procedure_case`) with shared foreign key / shared CNS envelope

**Status:** OPEN. **No decision before Layer 2.** Knox + user explicitly agreed to shelve.

**Resolution dependency:** Phase B.5 Layer 2 Section G (refined doctrine sharpening scope) + Section H (refined substrate slice scope) + Phase B.5+ doctrine sharpening with Opus and Knox.

**Pressure-test scenarios (Knox supplied, Turn 6):** Botox, HydraFacial + add-ons, weight loss consult, video visit, lab draw, endoscopy, surgical follow-up, multi-provider procedure. Layer 2 must reason about each scenario against whichever architecture wins.

### Q1 — Session 2 expansion (REFERENCE / IDEAS only; Q1 remains SHELVED)

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Session 2 Turns 1-17 + 20 (especially Turn 1 layered model, Turn 2 Mohs+Botox+GLP-1 multi-episode, Turn 5 patient-relationship-as-root hierarchy, Turn 11 photos/intake/consent linked artifacts, Turn 12 industry analogy synthesis, Turn 17 OPUS PROMPT, Turn 20 doc-requirements-per-profile).

Session 2 EXPANDS the encounter container model with extensive new ideas, none of which are locked. Knox + user joint discipline still SHELVES Q1 resolution for Phase B.5+ doctrine sharpening.

**New evidence + ideas surfaced in Session 2 (NOT resolutions):**

- **Layered model proposed (Turn 1):** `Care Episode → Encounter Container → Encounter Profile → Encounter Lines → Requirements/Policies → CNS Events/Actions`. Care Episode is NEW above Encounter Container — represents longitudinal pathway (GLP-1 program / HRT pathway / Melasma treatment plan / Botox maintenance / Sleep apnea evaluation / Cardiology workup / Endoscopy screening / Post-procedure follow-up). Indexed separately as Q6 below.
- **Encounter Profile enumeration expanded (Turn 1):** `async_review / message_based_review / phone_visit / video_visit / office_visit / office_visit_with_minor_procedure / aesthetic_treatment_visit / resource_only_session / lab_draw_visit / procedure_encounter / surgical_case / post_procedure_follow_up / internal_event` (13 profiles vs Session 1 Turn 5's 9). Profile drives policy: does it require scheduled time / provider / room / equipment / can procedure lines be added / consent required / clinical clearance / vitals/photos/forms / checkout / inventory / Rx-labs-orders.
- **Encounter Lines (line-type taxonomy, Turn 1):** `planned_intent_line / performed_intervention_line / procedure_line / order_line / lab_line / rx_line / document_line / inventory_use_line / billable_line / payment_line / entitlement_redemption_line / follow_up_line / task_line / message_line`. The container coordinates; lines own truth. Each line can belong to a different Care Episode (Turn 2 Mohs+Botox+GLP-1 example confirms multi-episode-per-encounter substrate need).
- **One physical visit can touch multiple Care Episodes (Turn 2):** Mohs+Botox+GLP-1 scenario explicitly demonstrates. Each clinical action becomes its own line with own rules, owner, documentation, billing, inventory, CNS events. Bad models explicitly named: (1) appointment type forces single category, (2) appointment type change loses original surveillance, (3) creating 3 separate visits causes operational chaos, (4) one giant note/charge blob impossible for CNS.
- **Planned vs Performed must be separate (Turns 3, 4):** Patient may be scheduled "mole check" but actual care = Botox only. Original planned intent line gets status `not_performed / superseded / scheduled_in_error / patient_declined / insufficient_time` with reason. Performed intervention line is created NEW. "Do not rewrite the appointment history." Indexed separately as Q8 below.
- **Planned vs Performed UI (Turn 4):** One calendar card with "Planned for Today" + "Performed Today" sub-sections. NOT two cards. Schedule card answers "who/when/where/expected reason"; encounter drawer answers "what did we actually do"; checkout answers "what should be charged"; clinical note answers "what was clinically documented." CNS watches all of it.
- **Industry analogy hierarchy (Turns 5, 12):** Tesla CNS = sensor reader (intake / message / appointment status / payment failure / lab result / provider note as sensor inputs); Airport flight = encounter container coordinating aircraft/gate/runway/crew/passengers/baggage/fuel/delays; Restaurant reservation ≠ meal; Amazon order container with multi-line items; Epic encounters strong but commerce-weak; OMNI fuses all of these. "Scheduling is not a calendar. Scheduling is the operational timing layer for when patient state gets acted on."
- **Patient Relationship is root above Care Episode (Turn 5):** `Patient Relationship → Care Episode → Encounter / Interaction Container → [10 line types] → CNS Events / Actions / Outcomes`. Patient Relationship may be a distinct primitive above Care Episode.
- **Photos / intake / consent are separate substrates (Turn 11):** Photos = clinical media artifacts (patient/date/captured-by/region/consent/series-grouping/before-after-pair); Intake = form submissions + structured atoms/assertions (longitudinal, not visit-attached); Consent = legal/clinical artifact (version/timestamp/signer/method/scope). Encounter LINKS them; does not own them. Indexed separately as Q14 below.
- **Documentation requirements per profile (Turn 20):** `resource_only_session → session log no provider note / esthetician facial → treatment note maybe / injectables → procedure/treatment note required / medical visit → progress note required / medical visit + procedure → both / async Rx review → provider review note/signoff / lab result communication by staff → interaction log not encounter / provider changes treatment after lab review → async clinical note/signoff`. Encounter profile determines doc requirements. Indexed separately as Q12 below.

**Status:** OPEN. Q1 remains SHELVED. Session 2 evidence enriches the question; does not resolve it.

---

## Q2 — Pressure-test scenario list for the encounter container model

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 6 (final paragraph).

**Question:** Does the chosen encounter container architecture (whatever wins from Q1) hold up under all 8 of these scenarios without forcing exception logic?

**Scenarios (verbatim Knox enumeration):**

1. Botox visit (variable units, single provider, single room, inventory decrement, follow-up cadence)
2. HydraFacial + add-ons (booster + LED mask + exosomes + lip add-on + numbing + PRF add-on; each add-on has independent rules: time / price / resource / clinical clearance / inventory / patient-visibility)
3. Weight loss consult (Hims-style async path AND in-clinic visit path AND hybrid path)
4. Video visit (no room, no resource; provider time only; ad hoc OR scheduled)
5. Lab draw (resource_only_session profile; minimal provider time; specimen handling)
6. Endoscopy (procedure suite, anesthesia/sedation, prep/NPO rules, scope equipment, assistant/nurse roles, pathology/specimen, recovery/discharge, complication tracking)
7. Surgical follow-up (post-op visit; references prior procedure encounter; may include suture removal / wound check / clinical assessment / Rx adjustment)
8. Multi-provider procedure (more than 1 provider working on patient simultaneously OR sequentially during the same encounter; e.g., MD + 3 MAs, or 2 MDs working on patient)

**Status:** OPEN until Q1 resolves + Layer 2 maps each scenario.

**Resolution dependency:** Layer 2 Section D (operational depth) + Section G + Section H + Section L (multi-modality + scaling vision).

### Q2 — Session 2 expansion (27 additional pressure-test scenarios from OPUS PROMPT)

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Session 2 Turn 17 (OPUS PROMPT, section 14 "Pressure-test scenarios").

**New scenarios (Session 2 supplied, verbatim from Turn 17):**

9. Patient books Botox, provider performs Botox 36 units. (matches Session 1 #1)
10. Patient books mole check, mole check not performed, Botox performed instead. (NEW — wrong-booking pivot)
11. Patient comes for mole check, gets biopsy, asks for GLP-1 refill. (NEW — multi-episode-per-encounter)
12. Weight-loss async intake review leads to Rx, no scheduled visit. (NEW — pure Hims async path)
13. Weight-loss patient later needs video visit. (NEW — Hims-to-hybrid transition)
14. Medspa HydraFacial requires provider + room + machine. (NEW — 3-axis booking composer)
15. Red light therapy requires room/device but no provider. (NEW — provider-not-required profile)
16. Procedure visit requires room, equipment, assistant, consent, pathology. (NEW — 5-axis booking)
17. Patient schedules wrong appointment online. (NEW — self-scheduling mismatch)
18. Provider unavailable after booking. (NEW — provider-axis breakage)
19. Room unavailable but provider free. (NEW — room-axis breakage)
20. Device unavailable but provider/room free. (NEW — resource-axis breakage)
21. Patient texts "C" to confirm appointment. (NEW — inbound CNS classify+match+confirm)
22. Patient replies to reminder with clinical concern. (NEW — CNS suppress + clinical escalation)
23. Appointment checkout includes service + product + membership discount + package credit. (NEW — commercial layering)
24. Visit includes multiple providers. (extends Session 1 #8 multi-provider procedure)
25. Botox inventory tracked by units/lot later. (NEW — inventory-by-lot future)
26. Before/after photos captured during visit. (NEW — media artifact substrate)
27. Consent missing before procedure. (NEW — consent-vs-clinical-clearance separation)
28. Video visit started from scheduled visit. (NEW — video attached to encounter)
29. Ad hoc video started from message thread. (NEW — video as ad hoc rail)
30. Lab result returns between visits. (NEW — lab event ≠ encounter)
31. Staff call about labs does not become encounter. (NEW — interaction vs encounter boundary)
32. Provider changes dose after lab review; async encounter created. (NEW — async clinical encounter trigger)
33. First-time patient visit display. (NEW — user feedback gap #9 substrate)
34. Follow-up questions after last treatment enrich next encounter. (NEW — intake-as-living-memory)
35. Dermatology clinic wants mole surveillance + cosmetic + Rx care in same patient. (NEW — derm multi-episode)

**Session 2 also surfaces additional scenarios from open-ended discussion:**

36. Provider performs Botox chairside with structured drawer entry, pushes to shared cart, front desk applies loyalty/Aspire/membership (Turn 21 workflow).
37. MA drafts performed line "pending provider attestation"; checkout proceeds; provider attests later end-of-day (Turn 20+22 tier model).
38. Front desk attempts to add Botox units silently; system blocks with "Provider attestation required" reconciliation flag (Turn 22).
39. Admin override creates injectable charge without provider-authored performed line; system records "Checkout override; provider reconciliation required" audit scar (Turn 27).
40. Provider visit closeout drawer surfaces 7 lanes: performed-care / documentation / patient-instructions / follow-up-plan / retail-recs / scheduling-instructions / internal-ops-tasks (Turn 29).
41. "Text patient in 2 days" scheduled follow-up CNS action with patient + template + send time + channel + owner + suppression rules + response handling + escalation if concerning reply (Turn 29).
42. Provider laser drawer preloads from appointment/package context (planned session 1-of-3, planned areas, checkbox for performed areas); not generic 400-item catalog search (Turn 24).
43. LHR receipt projection shows "Session 2 of 6 / Areas: underarms, arms, back" while clinical note has device/fluence/pulse-width/Fitzpatrick (Turn 25 granularity-projection model).
44. Care Episode spans Location A in-person + Location H in-person + virtual video, all inside same federation (Turn 18).
45. Pure Hims deployment with no physical clinic; video visit on Provider C schedule; "location" = provider's licensed practice entity OR patient state/jurisdiction OR brand/service line OR billing/rendering location (Turn 18).

**Status:** OPEN. Q2 remains OPEN until Q1 resolves AND Layer 2 + Phase B.5+ doctrine sharpening map each scenario against whichever encounter container architecture wins.

---

## Q3 — Four-entity split validity (Schedulable Service vs Clinical Service vs Billable Item vs Resource/Inventory Item)

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1.

**Question:** Knox proposes that Mindbody's flat "appointment type" / "service" model collapses 4 distinct entities. Does this 4-way split hold under Phase B.5 evidence?

**Knox's 4 entities:**
- Schedulable Service — what can be booked (e.g., "Injectables visit")
- Clinical Service — what care was performed (e.g., Botox treatment, lip filler consult)
- Billable Item — what gets charged (e.g., Botox $14/unit × 36 units)
- Resource/Inventory Item — what gets consumed or reserved (e.g., Botox vial, HydraFacial machine, treatment room)

**User feedback gap #2 anchor (per [mindbody_user_feedback_raw.md](mindbody_user_feedback_raw.md)):** *"book broad appointment type → refine at checkout/encounter."* Variable-quantity services (Botox 20 units vs 36 units) is the canonical concrete instance. Maps directly to this 4-way split.

**Open sub-questions:**
- Q3a — Are 4 entities the right number, or should it be fewer (3? collapse Billable Item into Clinical Service?) or more (5+? add "Membership/Package Entitlement Item"? add "Consent/Form Item"? add "Note/Document Item"?)
- Q3b — How do these entities map onto DL-15 invariants (currently 28)? Which are already covered? Which require new invariants?
- Q3c — How do these entities map onto the future commerce DL? Are billable items, charges, and refunds the commerce DL's responsibility, or scheduling's?
- Q3d — How does this 4-way split interact with the Mindbody "service catalog mesh" Knox describes (chat marker 5: appointment type → service category → pricing options → staff eligibility → online booking rules → package/contract eligibility → commission/payroll → scheduling restrictions → automated emails)? Are these all properties on Schedulable Service, or are some on Clinical Service?

**Status:** OPEN. Layer 2 Section A (entity model) + Section C (configuration surface) + Section G must reason about this against Mindbody evidence.

---

## Q4 — Mode-per-service-line vs flat appointment_type

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 3.

**Question:** Knox proposes that each service line declares its operating mode:

```
Service line: GLP-1
Mode: async_first | schedule_required | hybrid | disabled_scheduler

Service line: Botox
Mode: schedule_required

Service line: HRT
Mode: async_first_with_optional_video

Service line: Red light therapy
Mode: resource_booking_only
```

How does this mode declaration align with DL-15 (scheduling substrate spine, 28 invariants) + DL-16 (universal CNS event envelope, 39 invariants)?

**Open sub-questions:**
- Q4a — Is mode a property of the service line, the encounter profile (Q1), or the brand/clinic capability flag (Q5)? Or all three (mode resolution per request from a capability matrix)?
- Q4b — How does mode interact with the 4-entity split (Q3)? Is mode a property of Schedulable Service, Clinical Service, both, or neither?
- Q4c — When a brand changes mode for a service line (e.g., a Hims-style brand adds in-person Botox to GLP-1), what migrations / data implications flow? Is mode change retroactive, prospective, or per-encounter?
- Q4d — How does this map to existing OMNI doctrine for `outbound_jobs` (system primitive #10) and `treatment_items.metadata` (per system map line 81)?

**Status:** OPEN. Layer 2 Section G (refined doctrine sharpening) must reason about whether DL-15 needs amendment for service-line mode, or whether mode is a sibling concept that requires a new DL.

---

## Q5 — Capability flags per brand/clinic/federation mapping to existing OMNI capability layer

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 3 (federation paragraph).

**Question:** Knox proposes per-brand capability flags:

```
async messaging enabled
external-line enabled
scheduling enabled
room/resource scheduling enabled
POS enabled
memberships enabled
Rx enabled
labs enabled
video visits enabled
```

How does this map to OMNI's existing capability layer (`lib/auth/capabilities.ts`, `requireCapability`, system map Section 1D / 1D.1 / 1D.2)?

**Open sub-questions:**
- Q5a — Are these brand/clinic capability flags (org-scoped) the same primitive as user/role capability flags (user-scoped per `requireCapability`), or a different primitive?
- Q5b — Knox's rule: *"If a domain is disabled, its UI disappears, but its CNS contract remains admitted."* — how does this interact with `1J.10` "current operational state + enforcement plan" doctrine (universal joined safety read enforced before first Rx pathway ships)? Does CNS contract admission for a disabled domain create an enforcement gap?
- Q5c — How do capability flags relate to multi-tenancy (system map Section 1U) and federation (radar zones 79-88)?
- Q5d — When two clinics with different capability profiles merge (per Knox's federation example), how does the patient identity/relationship layer (1J.1-1J.9) reconcile without forcing one clinic's mode onto the other?

**Status:** OPEN. Layer 2 Section J (cross-domain implications) + Section G must reason about whether existing capability layer + DL-13 (multi-consumer adapter) cover this, or whether a new capability primitive is needed.

---

## Q6 — Care Episode parent object (longitudinal pathway above Encounter Container)

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Session 2 Turns 1, 2, 5, 16.

**Question:** Session 2 introduces a new primitive ABOVE Encounter Container: **Care Episode** = the longitudinal reason for interacting with the patient. Is Care Episode a 1st-class substrate primitive, or is it a derived projection?

**Examples (Knox supplied, Turn 1):** GLP-1 weight loss program / HRT treatment pathway / Melasma treatment plan / Botox/filler aesthetic care / Sleep apnea evaluation / Cardiology workup / Endoscopy screening pathway / Post-procedure follow-up.

**Knox tentative position (Turn 5):** Hierarchy is `Patient Relationship → Care Episode → Encounter / Interaction Container → [10 line types] → CNS Events / Actions / Outcomes`. Care Episode is the parent; encounters are bounded touchpoints within it; lines are the truth-owners.

**Multi-episode-per-encounter (Turn 2 Mohs+Botox+GLP-1):** One physical visit can touch multiple Care Episodes simultaneously. Each line on the encounter can belong to a different Care Episode (Mole check line → Dermatology episode; Botox line → Aesthetic episode; GLP-1 refill line → Weight loss episode).

**Open sub-questions:**
- Q6a — Is Care Episode a substrate table, or is it a derived rollup of encounters/orders/Rx/labs tagged with a `care_program` or `episode_label`?
- Q6b — How does Care Episode interact with `treatment_items` (existing OMNI substrate) and `clinical_visits` (existing)? Is Care Episode a generalization, a specialization, or a sibling?
- Q6c — How does Care Episode interact with the 4-entity split (Q3)? Is Care Episode a property of Schedulable Service, Clinical Service, or independent?
- Q6d — Care Episode boundaries: when does an episode end? Episode-state lifecycle (open / active / paused / closed / completed / lost-to-follow-up)?
- Q6e — Can a Care Episode span multiple brands/locations within a federation (per Turn 18 location seam)? How does Care Episode interact with the location taxonomy (Q10)?

**Status:** OPEN. Layer 2 Section A (entity model) is silent on Care Episode (Layer 2 was written before Session 2). Phase B.5+ doctrine sharpening must reason about Care Episode as substrate primitive vs derived projection.

**Resolution dependency:** Q1 resolution + Phase B.5+ Commerce DL + RBAC DL drafts + possibly new Care-Coordination-DL.

---

## Q7 — Encounter vs Interaction boundary discipline

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Session 2 Turns 6, 7, 8 (especially Turn 8 user pushback + Knox boundary).

**Question:** Session 2 explicitly pushes back on Session 1's encounter taxonomy: NOT every patient touchpoint should become an encounter. Where exactly is the boundary?

**Knox's tentative working rule (Turn 6, 8):** 
- `Care Episode` = longitudinal problem/pathway
- `Encounter` = accountable clinical/operational decision/action container
- `Interaction` = message/call/email/task/contact log/lab result/voicemail/event touchpoint

User framing (Turn 8, verbatim): *"a fucking encounter in human terms is. we scheduled a call with you, we met and talked, we met with you in clinic. we had an intake review and rx session with you. yes that last one DOES seem like a boundaried encounter, and it seems like it (mostly) ends when the provider write the rx and signs the chart. like. thats conventional uhman underasnting of medicine."*

**Knox boundary formulation (Turn 8):** *"An interaction becomes encounter-linked evidence when it informed, triggered, documented, or followed up an accountable care action. It becomes an encounter only when the system records an accountable clinical/operational decision moment."*

**Examples (Turns 6, 7, 8):**

| Touch | Classification |
|---|---|
| "Thanks!" | message only |
| "Can I reschedule?" | message + scheduling action, NOT encounter |
| "My lip filler has a lump" | message → triggers provider review/task → may become async encounter |
| "Your labs are normal" from staff | result communication interaction, linked to lab, NOT encounter |
| Provider reviews abnormal labs and changes dose | async clinical encounter / clinical decision event |
| In-clinic Botox visit | encounter with procedure/intervention lines |
| Post-Botox "looks great thanks" | message only |
| Post-Botox "my eyelid is drooping" | message → safety/clinical review encounter if provider evaluates/responds clinically |
| Async intake review where provider evaluates + writes Rx + signs chart | async encounter |
| Lab result auto-arrives | event, NOT encounter |
| Staff call about results | interaction log, NOT encounter |

**Open sub-questions:**
- Q7a — How does `Interaction` relate to existing DL-11 (separate messaging substrates protected from cramming into other storage/lifecycle) and DL-16 (universal envelope)? Is Interaction a new substrate primitive or just an event_kind in DL-16's seven-category partition?
- Q7b — Substrate boundary: when does an Interaction "escalate into" an Encounter? Is the escalation event itself a `cns_decision` (DL-16 category)? Is the resulting encounter a separate substrate row, or does the Interaction get a `promoted_to_encounter_id` link?
- Q7c — How does this interact with the existing `clinical_visits` substrate and `outbound_jobs` (primitive #10 conceptually renamed `orchestration_actions`)?
- Q7d — DL-16 invariant 3 (seven-category partition: domain event / cns_decision / orchestration_action / rail projection / outcome / patient state / system event) — where does `Interaction` fit? Is it `domain event` (inbound message) projected to `rail projection` (thread view)?

**Status:** OPEN. Layer 2 Section B (event vocabulary) describes the 21-event Client Alert vocabulary + 30+ outbound triggers but does NOT define the Encounter vs Interaction boundary. Phase B.5+ doctrine sharpening must reason about the boundary against DL-11 + DL-16.

**Resolution dependency:** Q1 resolution + DL-16 amendments scoped in Layer 2 Section G.3.

---

## Q8 — Planned Intent vs Performed Truth (substrate-enforced non-overwrite)

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Session 2 Turns 3, 4 (planned-vs-performed), Turn 17 OPUS PROMPT section 3.

**Question:** Session 2 demands that scheduled intent and performed truth be substrate-enforced separate concepts (NOT one editable appointment row). What is the substrate enforcement model?

**Knox key rule (Turn 3, verbatim):** *"Do not rewrite the appointment history. Preserve planned intent, then record actual care."*

**Planned-intent-line statuses (Turn 3):** `not_performed / superseded / scheduled_in_error / patient_declined / insufficient_time` plus reason. Performed intervention line is NEW + separate.

**UI projection (Turn 4):** ONE calendar card with two sub-sections inside the visit drawer: "Planned for Today" + "Performed Today". Each line independently statused.

**Examples (Turn 4 + OPUS PROMPT scenarios 9-15):**

| Scheduled intent | Performed truth |
|---|---|
| Botox | Botox 36 units |
| Mole check | (not_performed) + Botox 36 units (NEW added same-day) |
| Injectables visit | Botox 36 units + Lip filler consult + (no filler performed) |
| Weight loss follow-up | HRT question + labs + Rx refill |
| Mole check | Biopsy (procedure escalation) + GLP-1 refill (separate-episode added) |
| Consult | Consult (planned) + Treatment (added: contraindication blocks treatment → not_performed) |

**Open sub-questions:**
- Q8a — Substrate: one `appointment` table with separate `planned_lines` + `performed_lines` child tables? OR `encounter` parent with two child substrates? OR same table with `line_kind ENUM('planned', 'performed')` discriminator?
- Q8b — Status enum for planned lines: `not_performed / superseded / scheduled_in_error / patient_declined / insufficient_time / completed_as_planned` — what's the full enum and how does it interact with `appointment.status` (canonical schedule state) + `encounter.documentation_status` + `commerce_order.checkout_status`?
- Q8c — Audit / metrics derivation (Turn 3): online_booking_mismatch_rate / staff_scheduling_error_rate / pivoted_visit_rate / planned_vs_rendered_conversion / same_day_upsell_rate — these are derived from the planned-vs-performed substrate. Are they Layer 2 Section I moats or core substrate primitives?
- Q8d — How does this interact with DL-15 (scheduling substrate spine, 28 invariants)? Does DL-15 need amendment to mandate planned-vs-performed separation?

**Status:** OPEN. Layer 2 Section D.1 (conditional UI based on substrate state) + D.2 (multi-flag lifecycle stacks) touch on this but do not specify the substrate enforcement. Phase B.5+ DL-15 amendments scoped in Layer 2 Section G.1 must encode planned-vs-performed.

**Resolution dependency:** Q1 + DL-15 amendments + Commerce DL draft.

---

## Q9 — 3-lane source-of-truth separation (clinical / commercial / receipt projection)

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Session 2 Turns 21, 22, 25, 26 (especially Turn 21 3-lane model, Turn 25 granularity projections, Turn 26 cart ≠ clinical truth).

**Question:** Session 2 explicitly separates three sources of truth that must not be collapsed. What's the substrate enforcement?

**Knox 3-lane model (Turn 21):**

| Lane | Substrate | Owner |
|---|---|---|
| **Clinical truth** | Performed Intervention Line (units / areas / provider / timestamp / lot) | Provider (or staff-drafted pending provider attestation) |
| **Commercial truth** | Cart / Charge Line (units / price / discount / package / loyalty / Aspire / payment) | Front desk (commercial settlement) |
| **Documentation truth** | Procedure Note (renders from performed line + provider attestation) | Provider (signoff) |

**Plus 3 additional projections (Turn 25):**

| Projection | Granularity |
|---|---|
| **Client-facing receipt** | "Botox — 24 units" (no anatomical breakdown for client) |
| **Inventory line** | "Botox product consumed: 24 units" (audit/inventory perspective) |
| **Attribution line** | who performed / assisted / sold / checked out / commission |

**Knox rule (Turn 25, verbatim):** *"Performed clinical line = rich truth. Charge line = what is financially billable. Receipt projection = client-facing summary. Inventory line = what was consumed. Provider note = clinical documentation. Attribution line = who performed / assisted / sold / checked out."*

**Critical anti-pattern (Turn 21):** Front desk modifies CHARGE line for discount/loyalty/package — fine (commercial settlement). Front desk modifies CLINICAL line for units/areas — substrate must block: "Provider attestation required."

**Open sub-questions:**
- Q9a — Substrate enforcement: is the clinical performed line a separate table from the cart/charge line, with explicit foreign-key + role-gated mutations?
- Q9b — How does the 3-lane model interact with Q3 (4-entity split: Schedulable / Clinical / Billable / Resource-Inventory)? Are Clinical Service + Billable Item the same row with different projections, or different rows?
- Q9c — Receipt is described as a "projection" — is it a materialized view or computed at print time? How does it interact with DL-16 invariants 16 (replay safety) + 38 (tamper-evident audit)?
- Q9d — Audit substrate: every projection must have a lineage back to the source clinical performed line (per DL-14 actor-stamped event envelope). What's the projection-to-source linkage primitive?

**Status:** OPEN. Layer 2 Section A (entity model) names Sale + Sale Line + Refund but does NOT enforce the clinical-vs-commercial-vs-receipt 3-lane separation. Phase B.5+ Commerce DL draft must encode this.

**Resolution dependency:** Q3 + Commerce DL draft (Layer 2 Section G.2.1).

---

## Q10 — Provider authorship + attestation tier model

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Session 2 Turns 22, 23, 26, 27, 28 (especially Turn 27 4-tier authority).

**Question:** Session 2 proposes a 4-tier authority model for who can author/attest clinical performed truth. How does this map to OMNI's existing RBAC + capability layer?

**Knox 4-tier model (Turn 27):**

| Tier | Allowed | Effect | Audit |
|---|---|---|---|
| **1. Provider-entered (chairside)** | Provider authors performed line | Becomes clinical performed truth + pushes to cart | Clean |
| **2. MA/staff-drafted** | Staff/MA enters performed line | `authorship=staff_drafted, attestation=pending_provider` — checkout allowed if clinic policy permits; chart not closed until provider attests | Pending attestation flag visible |
| **3. Front desk commercial settlement** | Front desk modifies discount/loyalty/package/payment/tip/promo | Commercial line changes; clinical performed line unchanged | No clinical impact |
| **4. Admin override** | Front desk attempts to add clinical performed line | System creates checkout line + "Checkout override; provider reconciliation required" audit scar | Permanent audit scar visible |

**Front desk authority boundaries (Turn 22):**

| Front desk CAN change | Front desk CANNOT silently change |
|---|---|
| discounts / loyalty / Aspire-Allē / gift card / package credit / membership benefit / payment method / split / retail product / tip / receipt note | Botox units / filler syringe count / product used clinically / treatment area / procedure performed / Rx-lab-order / provider attribution / clinical note content |

**Shared workstation, not shared identity (Turn 22):** Mindbody's "everyone acts under whoever is logged in" is rejected. OMNI: fast staff switching (PIN/badge/Face ID/quick user switch) — every action records the REAL actor per DL-14 audit lineage.

**Open sub-questions:**
- Q10a — How does this 4-tier model interact with the 5-permission-group Mindbody substrate (External / Front Desk / Manager / Service Provider / Social Media Manager)? Is the 4-tier authority model orthogonal to permission groups, or composed?
- Q10b — Substrate: `performed_line.authorship_state ENUM(provider_entered, staff_drafted, admin_override)` + `performed_line.attestation_state ENUM(attested, pending, n/a)` + `performed_line.attesting_actor_id`?
- Q10c — Checkout policy: when can checkout proceed with `attestation=pending`? Per-clinic policy enum? Per-encounter-profile policy?
- Q10d — Reconciliation task lifecycle: how long does a pending attestation stay open before escalation (CNS task → manager / chart-close hard stop / billing block)?

**Status:** OPEN. Layer 2 Section A (entity model) names Permission Group + 5 brand groups + per-staff 8+ capability flags, but does NOT encode the 4-tier authorship+attestation model. Phase B.5+ RBAC DL draft (Layer 2 Section G.2.3) must encode this.

**Resolution dependency:** RBAC DL + Commerce DL drafts.

---

## Q11 — Visit closeout drawer (separate from checkout cart; 7 lanes)

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Session 2 Turn 29 (the "another major product wedge" enumeration).

**Question:** Session 2 surfaces that the front desk handoff is NOT just checkout — it's "visit closeout" with 7 distinct lanes. Should OMNI model closeout as a separate first-class substrate alongside the cart?

**Knox 7-lane visit closeout (Turn 29):**

1. **Performed / chargeable care** → pushes to checkout cart
2. **Documentation requirements** → procedure note / treatment note / provider signoff
3. **Patient instructions** → aftercare message / printed instructions / portal message
4. **Follow-up plan** → text in 2 days / tox check in 2 weeks / provider review / photo request
5. **Retail / product recommendations** → suggest vitamin C / add to cart / send product link / staff discussion
6. **Scheduling instructions** → rebook in 2 weeks / repeat in 3 months / schedule package visit
7. **Internal ops tasks** → front desk call / provider task / MA task / billing task

**Knox key separation (Turn 29):** Cart answers "what are we charging?" Closeout plan answers "what needs to happen after this care?"

**Smart drawer + suggestion engine (Turn 29):** Provider sees a CONTEXTUAL closeout drawer generated from performed services. Example: Botox performed → OMNI suggests "Charge Botox units / Send injectable aftercare / Offer 2-week tox check / Ask follow-up text in 2 days? / Note required." NOT a generic checklist.

**CNS turns closeout items into actions (Turn 29):** `send_aftercare_message / schedule_follow_up_text_for_2_days / create_front_desk_rebook_task / recommend_retail_product / create_provider_note_requirement / schedule_tox_check_offer`.

**Open sub-questions:**
- Q11a — Is `visit_closeout` a separate substrate primitive, or is it a derived projection from encounter performed lines + per-service closeout-template configuration?
- Q11b — Scheduled follow-up CNS actions (e.g., "text in 2 days") substrate: how does this interact with `outbound_jobs` (primitive #10 = `orchestration_actions`)? Is each closeout-item-promoted-to-action a separate `orchestration_action` row, or do they group under an `orchestration_run`?
- Q11c — Per-service closeout template substrate: Botox closeout suggests aftercare-message + 2-week-tox-check; SkinPen closeout suggests microneedling-aftercare + 48-hour-follow-up + 4-6-week-rebook. Substrate: `service_closeout_template { service_id, action_type, default_send_time, default_template_id }`?
- Q11d — How does Visit Closeout interact with the Q9 3-lane source-of-truth model? Is closeout a 4th lane (workflow truth) or projected from the existing lanes?

**Status:** OPEN. Layer 2 Section A (entity model) does NOT enumerate `visit_closeout` substrate. Phase B.5+ doctrine sharpening must reason about closeout as 1st-class substrate vs derived.

**Resolution dependency:** Q1 + DL-15 amendments + RBAC DL + Commerce DL drafts.

---

## Q12 — Encounter location / venue / federation taxonomy

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Session 2 Turn 18 + Turn 19 #1 + #5 + #9.

**Question:** Session 2 explicitly identifies that encounter location is NOT always a physical clinic. What's the location taxonomy primitive set?

**Knox 11-axis location taxonomy (Turn 18):**

- `physical_location`
- `virtual_location` / `no_physical_location`
- `brand`
- `legal_entity` / `practice_entity`
- `deployment`
- `patient_relationship`
- `provider_schedule_location`
- `patient_state` / `service_jurisdiction`
- `billing_rendering_location`
- `resource_location`
- `federation_location_of_record`

**Failure mode if collapsed (Turn 18, verbatim):** *"scheduling silently assumes clinic room = location = legal entity = brand = billing site, which will break Hims, federation, multi-location derm, hybrid medspa, and future specialty deployments."*

**Cross-federation scenarios (Turn 18 + user feedback):**

- Patient has in-person encounter at Location A, then later in-person at Location H, both inside same federation. Care episode continues across both.
- Pure Hims deployment: no physical clinic; video on Provider C schedule; tagged location = virtual + provider's licensed practice entity + patient state/jurisdiction + brand/service line + billing/rendering location.
- Hybrid medspa: in-person + video + async; each touchpoint has different location semantics.

**Open sub-questions:**
- Q12a — How does this 11-axis taxonomy map to system map Section 1U multi-tenancy + radar federation zones 79-88?
- Q12b — Substrate: separate tables for `physical_location` / `brand` / `legal_entity` / `deployment` with N-to-N join? OR single `venue` table with multiple typed-attribute columns + discriminator?
- Q12c — Mindbody multi-site switcher confirms `user_site_access` many-to-many (Layer 2 Section A.2). Does this need extension to support all 11 axes?
- Q12d — Encounter substrate: which location axes are mandatory per encounter_profile? `procedure_encounter` requires physical_location + resource_location; `async_review` may only require provider_schedule_location + patient_state + legal_entity. Per-profile-required-axes substrate?

**Status:** OPEN. Layer 2 Section A.2 (Identity model 3 concentric scopes: User/Site/Owner) + Section C.12 (multi-tenancy) touch this but do NOT enumerate 11 axes. Phase B.5+ doctrine sharpening must extend.

**Resolution dependency:** Q5 + Settings-Infrastructure DL draft + possibly new Federation-Topology DL extension (cross-ref FUTURE_ARC_2026-05-12_federation_permeability_topology.md).

---

## Q13 — False-equivalence audit pattern (meta-principle)

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Session 2 Turn 19 (the 10-item "what other stuff will break it" enumeration).

**Question:** Session 2 surfaces a META-principle: *"The same kind of thing that breaks it is when we accidentally assume one concept equals another concept."* Should OMNI codify a doctrine principle that audits every substrate concept for false equivalence?

**Knox 10-item false-equivalence audit (Turn 19):**

1. Provider ≠ staff user ≠ rendering clinician ≠ supervising clinician ≠ seller
2. Appointment type ≠ performed service ≠ billable item ≠ inventory item
3. Encounter ≠ message thread ≠ contact log ≠ note
4. Patient identity ≠ patient relationship ≠ client profile ≠ portal account
5. Service location ≠ resource location
6. Scheduled visit ≠ completed visit ≠ checked-out visit ≠ documented visit
7. Consent/form complete ≠ clinically cleared
8. Membership/subscription/package ≠ payment
9. Virtual care breaks location/timing/licensure assumptions
10. Notes/photos/documents are not one blob

**Knox pattern (Turn 19, verbatim):** *"Audit every major scheduling concept for false equivalence. Anywhere we are tempted to collapse two things into one field, stop and separate them if they differ in authority, lifecycle, visibility, billing, clinical responsibility, or CNS behavior."*

**6 axes of separation (Knox-supplied):**
- authority
- lifecycle
- visibility
- billing
- clinical responsibility
- CNS behavior

**Open sub-questions:**
- Q13a — Should this be a doctrine principle (e.g., a new doctrine lock DL-XX "Substrate Concept Separation") or just a Layer 2 / Phase B.5+ design audit checklist?
- Q13b — Does the audit apply retroactively to existing DLs (DL-14, DL-15, DL-16) — do they violate the principle in any place?
- Q13c — How does this relate to existing DL-11 (separate messaging substrates protected from cramming)? Is DL-11 a specific instance of this general principle?
- Q13d — Pressure-test substrate decisions: when designing a new substrate primitive, run the 6-axis audit and document which axes it differs on from adjacent concepts.

**Status:** OPEN. Meta-principle question. Phase B.5+ doctrine sharpening must decide whether this becomes a new doctrine lock or a design audit pattern.

**Resolution dependency:** ALL Q1-Q14 — false-equivalence audit applies to every substrate decision.

---

## Q14 — Photos / intake / consent / docs as separate clinical artifact substrates

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Session 2 Turns 11, 12, 15, 16 (especially Turn 11 substrate enumeration, Turn 12 industry analogy synthesis, Turn 15 intake-not-attached-to-appointment, Turn 16 intake-as-living-memory).

**Question:** Session 2 demands that before/after photos, intake, consent, and documents each live in their own substrate (linked to encounters, NOT owned by encounters). What are the substrate primitives + linkage model?

**Knox substrate enumeration (Turn 11):**

| Artifact | Substrate metadata |
|---|---|
| **Clinical media (photo/video/scan)** | patient / date-time / source (camera/upload/message/portal) / captured-by / body-region / treatment-area / consent-visibility / linked-encounter / linked-intervention-line / series-grouping / before-after-pair / annotation-support |
| **Intake** | submission + responses + clinical-atoms/assertions / longitudinal (NOT visit-attached) / optional links to care_episode / encounter / order / Rx-decision / lab / message-thread |
| **Consent** | version / timestamp / signer / method / scope / linked-intervention-line OR medication-pathway OR procedure-encounter |
| **Document (lab/pathology/referral/legal)** | own legal/clinical artifact / linked to encounter when relevant |

**Knox rule (Turn 11, verbatim):** *"Everything meaningful emits an event and can appear in the timeline. Everything authoritative lives in its proper substrate. Encounters link the relevant pieces together."*

**Intake-as-living-memory (Turn 16):** Medspa correction = intake enriched per-visit ("since last visit: any problems / medication changes / how tolerate last treatment / redness-pigment-swelling-bruising / vitamin C cream use / labs / outcome"). Hims correction = async care needs MORE clinical structure (decision points / lab-Rx-order state / follow-up obligations / adverse-event handling). Intake and scheduling are EQUAL pillars (NOT intake-first nor schedule-first).

**Timeline projection (Turn 11):** UI shows unified "May 14: Intake completed / Consent signed / Photos captured / Botox performed: 36 units / Treatment note signed / Payment completed / Follow-up scheduled" — but underlying data lives in 5+ substrates.

**Industry analogy (Turn 12):** Airline flight = container that LINKS aircraft-maintenance / passenger-identity / baggage / gate-schedule / crew-credentialing / fuel-invoice / weather-report / delay-log without OWNING any of them.

**Open sub-questions:**
- Q14a — Substrate enumeration: is `clinical_media` a new substrate primitive distinct from existing OMNI document/photo substrates? What's the relationship to system map 1H + Knox marker 11 + Layer 2 Section A?
- Q14b — Intake substrate: extend existing intake-submission substrate with `intake_evidence_link { intake_session_id, linked_object_type, linked_object_id, used_as }` join table? OR project intake into encounter via a `linked_intake_session_id[]` array column?
- Q14c — Consent substrate: existing OMNI consent substrate vs Mindbody form-template-and-assignment (Layer 2 Section A)? Same primitive or different?
- Q14d — Series-grouping + before-after-pair substrate for photos: how does this interact with treatment_items lifecycle? Is the photo series tied to the Care Episode (Q6) or to a single Encounter?

**Status:** OPEN. Layer 2 Section A.1 names many substrates but does NOT enumerate clinical_media as a 1st-class primitive; treats Intake + Consent (Client Form template + assignment + VIEW LOG) at Mindbody-substrate-level. Phase B.5+ doctrine sharpening must extend.

**Resolution dependency:** Q1 + Q6 + possibly new Clinical-Media DL + revisit of existing intake substrate.

---

## Cross-references

- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) — verbatim source for all questions Q1-Q14:
  - Session 1 (Turns 1-6) sources Q1-Q5
  - Session 2 (Turns 1-30) expands Q1 + Q2 and sources Q6-Q14
- [mindbody_user_feedback_raw.md](mindbody_user_feedback_raw.md) — user's 9 gaps; gap #1 (room/provider/resource independence) maps to Q3 + Q4; gap #2 (intended visit vs actual treatment) maps to Q1 + Q3 + Q8; gap #4 (progress notes attached to visits) maps to Q1 + Q12; gap #5 (procedure visits vs office visits) maps to Q1 + Q12; gap #6 (cross-patient metrics) relevant to Q8 (planned-vs-performed derived metrics)
- [mindbody_knox_chat_raw.md](mindbody_knox_chat_raw.md) — pre-marker bucket 4 ("Intended appointment vs actual treatment is one of your biggest points") maps to Q1 + Q3 + Q8; pre-marker bucket 5 (variable quantity services) maps to Q3
- [phase_b5_mindbody_ingestion_4db27449.plan.md](../../phase_b5_mindbody_ingestion_4db27449.plan.md) — Phase B.5 master plan with "What Phase B.5 does NOT do" discipline (no doctrine amendments yet, no substrate slice yet)
- [system_map_three_layers_60706286.plan.md](../../system_map_three_layers_60706286.plan.md) — DL-14 (CNS center of gravity) anchors the "CNS as orchestrator over scheduling/messaging/etc." pattern Knox invokes; system primitives + Intent layers + Section 1D (capabilities) anchor Q5; existing intake/clinical-visit substrate anchors Q6-Q8-Q14
- [FUTURE_ARC_2026-05-12_federation_permeability_topology.md](../../FUTURE_ARC_2026-05-12_federation_permeability_topology.md) — federation topology future arc; Q12 location taxonomy folds into this scope
- [designs/2026-05-16_mindbody_architecture_understanding.md](../../designs/2026-05-16_mindbody_architecture_understanding.md) — Layer 2 synthesis (commit `780e523`); authored BEFORE Session 2 was filed; Session 2 implications fold at Phase B.5+ doctrine sharpening, NOT by retroactively rewriting Layer 2

---

## Status summary

| # | Question | Status | Resolution dependency |
|---|----------|--------|----------------------|
| Q1 | Encounter container architecture (single + profile enum vs polymorphic vs separate tables); Session 2 expansion with layered model + Care Episode parent + line-type taxonomy | **OPEN — primary shelved question** | Layer 2 Section G + H + Phase B.5+ doctrine sharpening with Opus + Knox |
| Q2 | Pressure-test scenarios validate the chosen architecture (Session 1: 8 scenarios; Session 2: +27 more from OPUS PROMPT + 10 more from discussion = 45 total) | **OPEN** | Q1 resolution + Layer 2 Section D + L |
| Q3 | Four-entity split validity (Schedulable / Clinical / Billable / Resource-Inventory); Layer 2 expanded to 12-15+ primitives | **OPEN** | Layer 2 Section A + C + G; Commerce DL draft |
| Q4 | Mode-per-service-line vs flat appointment_type alignment with DL-15 + DL-16 | **OPEN** | Layer 2 Section G; DL-15 amendments |
| Q5 | Capability flags per brand/clinic mapping to existing OMNI capability layer | **OPEN** | Layer 2 Section J + G; RBAC DL draft |
| Q6 | Care Episode parent object (longitudinal pathway above Encounter Container) | **OPEN (NEW from Session 2)** | Q1 + Care-Coordination-DL or extension of existing primitives |
| Q7 | Encounter vs Interaction boundary discipline | **OPEN (NEW from Session 2)** | Q1 + DL-16 amendments + DL-11 cross-ref |
| Q8 | Planned Intent vs Performed Truth substrate-enforced non-overwrite | **OPEN (NEW from Session 2)** | Q1 + DL-15 amendments + Commerce DL |
| Q9 | 3-lane source-of-truth separation (clinical / commercial / receipt projection) | **OPEN (NEW from Session 2)** | Q3 + Commerce DL draft |
| Q10 | Provider authorship + attestation tier model (4-tier authority) | **OPEN (NEW from Session 2)** | RBAC DL + Commerce DL drafts |
| Q11 | Visit closeout drawer (separate from cart; 7 lanes) | **OPEN (NEW from Session 2)** | Q1 + DL-15 amendments + RBAC DL + Commerce DL |
| Q12 | Encounter location / venue / federation taxonomy (11-axis) | **OPEN (NEW from Session 2)** | Q5 + Settings-Infrastructure DL + Federation-Topology future arc |
| Q13 | False-equivalence audit pattern (meta-principle) | **OPEN (NEW from Session 2)** | ALL Q1-Q14 — applies to every substrate decision |
| Q14 | Photos / intake / consent / docs as separate clinical artifact substrates | **OPEN (NEW from Session 2)** | Q1 + Q6 + possibly new Clinical-Media DL + intake-substrate revisit |

**No question resolved during Phase B.5.** All defer to Layer 2 + Phase B.5+ doctrine sharpening per Knox + user joint direction in [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Session 1 Turn 6 + Session 2 Turn 1 framing.

**Session 2 discipline reminder (user, Session 2 Turn 1):** *"this chat is progressive, we were developing ideas as we went, no ideas are locked or decided on per se, we were just surfacing things, gratvitating towards thigs."* Q6-Q14 are REFERENCE / IDEAS, not lock-in proposals.
