# Scheduling Foundation Preference Record (2026-05-17)

Document type: `narrative_or_postmortem`
Authority: historical_nonbinding
Status: active
Domain(s): d3_scheduling, d5_actualized_work, d6_commerce, d7_documentation_evidence, federation_topology, cns_orchestration
Lifecycle role: historical_record (primary-source preference record from the 2026-05-16/17 scheduling foundation arc)
Source-of-truth relationship: preserves verbatim quotes from Nick and Knox during the scheduling foundation arc; the BINDING decisions derived from these preferences have been routed to canonical destinations (see "Canonical destinations" pointers per sub-section below); this file is a historical primary-source archive, NOT current doctrine
Supersedes: none
Superseded by: none (binding decisions superseded into canonical destinations; this file remains the historical record)
Manifest action: add_tier2
Review gate: architecture_steward_required (for historical-record disposition only)

agent_read_rule: consult_if_routed

---

## Historical Status Notice (BINDING)

**This file is a HISTORICAL primary-source record. It is NOT current binding doctrine.**

Originally created 2026-05-17 as a locked-preference doc capturing Nick + Knox verbatim positions during the scheduling foundation arc. Renamed 2026-05-23 from `user_knox_preferences_locked_2026-05-17.md` to its current path as part of the preference-doc fitness refactor (`D0OPER-DEC-002`).

Three content classes were extracted to dedicated homes during the refactor:

- **Operator context (former §0)** → `.cursor/plans/doctrine/operator_context_and_collaboration_model.md` (Tier 0 mandatory at every boot).
- **New-pillar onboarding checklist (former §3)** → `.cursor/plans/doctrine/new_pillar_substrate_onboarding_checklist.md` (consult-routed for new-pillar/substrate-start work).
- **Binding decisions derived from these preferences** were ALREADY routed at the time of the scheduling foundation arc to canonical destinations (DL-15/16/17/20/21, CNS ADR, scheduling rule matrix, guardrail digest). Per-item "Canonical destination" pointers are inline below.

**What stays here:**
- Nick's + Knox's verbatim quotes from the scheduling foundation arc. Preserved as primary source for historical reference.
- §1 (Nick preferences) + §2 (Knox preferences) sub-sections, each with a "Canonical destination" pointer to where the binding form lives.
- §4 (meta-framing).

**When to read this file:**
- Scheduling/substrate/commerce/federation work where the historical context informs why a primitive is shaped the way it is.
- Reviewing the conversational origin of a binding decision in DL-15/16/17/20/21 / CNS ADR / scheduling rule matrix.
- Pillar-onboarding work (typically alongside the dedicated checklist + architecture pattern + post-mortem).

**When NOT to read this file:**
- Every boot. This file is consult-routed, not universal.
- Treating these quotes as current doctrine. They are historical primary source; binding form lives at the canonical destinations.

---

**Companions:**
- Post-mortem: [scheduling_foundation_post_mortem_2026-05-17.md](../../docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md)
- Architecture pattern: [coherent_omni_architecture_pattern_2026-05-17.md](coherent_omni_architecture_pattern_2026-05-17.md)
- Preservation doc: [future_care_obligations_design_2026-05-17.md](future_care_obligations_design_2026-05-17.md)
- New-pillar onboarding checklist (extracted from former §3): [new_pillar_substrate_onboarding_checklist.md](new_pillar_substrate_onboarding_checklist.md)
- Operator context (extracted from former §0): [operator_context_and_collaboration_model.md](operator_context_and_collaboration_model.md)

---

## §1 User preferences (explicit, delivered)

These are direct quotes from Nick during the 2026-05-16/17 scheduling foundation arc. The verbatim text is preserved as historical primary source. The binding form of each preference has been routed to a canonical destination — read the destination as authority, not this file.

### Canonical destinations summary (binding doctrine lives at these paths)

| §1 preference | binding form lives at |
|---|---|
| Substrate-first, not doctrine-first | meta workflow rule; reinforced by `D0TIER0-GRD-005` (Preservation as exception at checkpoint close) + Charter Layer 2 (Build OS) |
| No vendor names in substrate | guardrail `D0-GRD-010` (Vendor-shaped substrate primitives) |
| No specialty leakage in substrate | scheduling rule matrix + DL-21 federation; encounter.modality enum |
| Confirmation means PATIENT confirmation | scheduling rule matrix + DL-15 amendment 8 + DL-20 confirmation_state |
| Promos live on patient account, not visit | DL-20 care_coordination + DL-17 commerce four-layer model |
| Free-text where free-text is appropriate | DL-16 amendment 38 (appointment.booking_request_note; appointment_staff_note_entry) |
| Broad-default booking; rich is opt-in | scheduling rule matrix (service.self_bookable_progressive_disclosure_mode; booking_preset) |
| Pricing on pricing_option, not service or category | DL-17 commerce (service_category / service / pricing_option separation) |
| Federation Day 0; specialty rollout pinned | DL-21 federation; specialty rollout order pinned in DL-21 |
| Multi-line visit reality (Bloom is real) | DL-20 care_coordination three-layer model (appointment / appointment_item / encounter / encounter_line / encounter_participant) |
| Future obligations are real but PARKED | `future_work_registry.md` (care coordination future arc; if not yet seeded, flag as `FWREG-REV-*` for review) |
| AI routing is parked | `future_work_registry.md` (AI governance future arc; if not yet seeded, flag for review) |
| Mindbody is reference, not architecture | guardrail family `D0W4*-GRD-*` (Mindbody-specific anti-import patterns); generalizable principle |
| No more rehashing | meta intent; reinforced by Checkpoint Preservation Rule + `new_pillar_substrate_onboarding_checklist.md` |

The verbatim sub-sections that follow preserve the conversational origin. Do not cite this file as binding authority — cite the canonical destination above.

---

### Substrate-first, not doctrine-first

> "I have wanted to work on the substrate or whatever. like. how do people fucking build apps correctly, and for scale and resilience."

> "Like, I could have said Opus build me an interface that does XYZ 2 days ago and we'd be farther along than this bullshit."

> "Get back on track here man... BUILD THE FUCKING SCHEDULER, UPDATE THE SYSTEM MAP, RECONCILE ALL THE PREVIOUS FUCKING GARBAGE PATHS WE'VE BEEN ON FOR SCHEDULING, GET DOCTRINE RIGHT, ETC ETC. we are not building the whole care task CNS right now."

**Implication:** when user asks to build, switch artifact class. Stop refining doctrine drafts. Move to DDL / RPC / migration / substrate slice.

### No vendor names in substrate

> "Alle and Aspire and Cherry are labels we put on for 'payment options' in Mindbody for our small local spa. Why the fuck are you building them out as anything. They should exist as like 'slots for payment'. e.g. bitcoin could be one in 5 years if we choose."

> "I'm worried Opus doesn't understand refinement of the UX I'm looking for. But this isn't about UX, it's about categorizing and utilize the data right now."

**Implication:** payment_method.label is free-form tenant STRING. No vendor names in any substrate enum across any pillar. Same applies to Stripe, Twilio, Surescripts, Quest, Labcorp, etc. for future pillars.

### No specialty leakage in substrate

> "Why the fuck would that exist in OMNI. AESTHETIC OFFICE VISIT MEANS FUCKING NOTHING. MEDSPAS, DERM, PLASTICS, GI, ETC. IT IS A GODDAMN FUCKING VISIT WITH A PROVIDER ON A CALENDAR."

> "Main fucking question or one of the main ones to restart for like the 4th time: is a visit categorized as a TYPE of VISIT, or a type of PROVIDER that's seen, or the SPECIFIC PROVIDER seen. or both or all of the above."

**Implication:** encounter.modality is 4 values (in_person / video / phone / async). Specialty / service / venue / arrival are separate axes. Tenant catalog holds specialty taxonomies; OMNI substrate does not.

### Confirmation means PATIENT confirmation

> "Like we want maximum control gating AI layering and feedback back into OMNI. Like, do we have to conceptualize 'confirmation' differently? Like, a confirmation event is sure triggered by appt on schedule. But, like, it's a CNS send out, which then requires feedback from input, to then change state of the appt."

**Implication:** DL-15 amendment 8 renamed booking-committed state to `scheduled`; freed `confirmed` for patient confirmation per DL-20 confirmation_state. CNS round-trip discipline. AI classifies; deterministic rules + staff decide.

### Promos live on patient account, not visit

> "Well like on the promo thing. A patient claims it with their account. The promo is on their account. Not just on the visit, right????"

**Implication:** four-layer model: `promo_code` (definition) + `patient_promo_claim` (wallet at account level) + `appointment_promo_intent` (reservation, own state machine) + `commerce_order_line.applied_promo_claim_id` (commerce truth). Wallet survives across appointments. Same pattern applies to packages, memberships, and any future "thing patient has across visits" concept.

### Free-text where free-text is appropriate; structured where structured is appropriate

> "No, there is no goddamn free text area for goddamn booking. Like yes, they can leave a note visit or whatever. Yes that's fine. But clients are not writing in their visit details to get on the schedule."

> "Yes when someone schedules, they can leave a typed note, at the end or whatever 'looking to get my filler touched up'. But that note is getting stored somewhere on the fucking visit encounter."

**Implication:** `appointment.booking_request_note` is single free-text field (Mindbody-style, mutable with audit history). `appointment_staff_note_entry` is append-only child substrate with note_kind discriminator. Structured booking detail (treatment areas, preferred product, tier) lives in `appointment_item.planned_details` JSONB validated against `service.planned_detail_schema`. No tenant-controlled-vocabulary checklist for reason_for_visit (rejected).

### Broad-default booking; rich is opt-in

> "What if a client doesn't know what 'botox' type they want, now they see 5 tox options. Can they book this visit without knowing?? And I don't want 'unknown' showing up all over the schedule."

> "Treatment menu should feel like a menu experience on the interface. Not like 5 separate appts!"

**Implication:** patient can always book at category level. Missing planned_details NEVER display as "Unknown" patient-facing. Tenant configures `service.self_bookable_progressive_disclosure_mode` per service (default: optional). Hierarchical service_category + booking_preset hierarchy + booking_preset bundle support the progressive disclosure UX.

### Pricing on pricing_option, not service or category

> "Consider whether the pricing and charge needs to live off the procedure ID or whatever, or the service ID or whatever fucking line we're calling it VS having the hydrafacial price auto attached to the SCHEDULING tree of HYDRAFACIAL."

**Implication:** `service_category` is taxonomy (no price). `service` is operational kind (no price). `pricing_option` is commerce variant (price + discount + commission rules), linked many-to-many to service via `service_pricing_option_assignment`. Tenant catalog flexibility preserved: brand-specific variants as separate services OR one operational kind with product in planned_details — tenant decides.

### Federation Day 0; specialty rollout pinned

> "Federation ability needs to be Day 0 man. Like we're gonna have 3 spas using this on day 1. Plastics is next after derm. Then GI and cardio etc."

**Implication:** DL-21 promotes A1 future arc to Day 0. Mode 1 + Mode 2 substrate primitives Day 0. Mode 3/4/5/6+ deferred per FUTURE_ARC §8. Specialty rollout order pinned: medspa → derm → plastics → GI → cardio → endocrine → sleep. Specialty NAMES are tenant catalog seed timing, NOT substrate enum values.

### Multi-line visit reality (Bloom is real)

> "Hydrafacial machine, room 2 for esti. Then to injector room. Then to red light in room 2. All coordinated at specific times. Like, that's literally a regular day for us. This is not an edge case."

> "One visit may actually just need 3 providers working on the patient, all at the same time, too! In the same room, with the same resource between them. Idk, like an endoscope procedure with an anesthesiologist."

**Implication:** appointment + multiple appointment_items + encounter + multiple encounter_lines + encounter_participant (3 FK targets: per-item / per-line / visit-wide). Per-line provider attestation. Multi-provider concurrent work handled via shared room + overlapping participants. The appointment IS the synchronous-trip container.

### Future obligations are real but PARKED for this round

> "OMNI should be able to know, if we collected their lead info, the promo should honestly get applied at checkout too, but to not have to manually track 'promo amount' would be nice."

> "Imagine as a provider being able to click into the chart and see a future timeline of planned events, based on their past history or events, procedures... like a map of the future. Upcoming touch points, required touchpoints, mandatory check in, Rx refill, Botox due. Refill on Biologique toner? 1 year join anniversary. Like that's where this shit becomes not marketing but the actual care coordination!"

**Implication:** care_episode_task gets MINIMAL recall extension in current round (3 new task_kinds + 4 FK fields). Full future-care-obligations substrate (30+ fields, 55+ task_kinds across 10 origin classes) PARKED in preservation doc. Care-Coordination-CNS is a future workstream, NOT current scope.

### AI routing is parked

> "How does our layered AI handle routing of all the outbound pings, AND the individual content within those pings. Those are further future discussion (I think). But we must goddamn fucking preserve all this thought process."

**Implication:** AI routing of outbound + content generation parked in preservation doc. Existing scaffolding (DL-14 inv 18-22 AI autonomy modes + DL-16 amendment 42 outbound trigger registry + §1Q.14.2 outbound 8-gate) is the foundation. Full design is future workstream.

### Mindbody is reference, not architecture

> "We have 170 screenshots and whole previous discussions that were too much for you and Knox to handle. I'm sending this screenshot of Mindbody to ensure that we are not missing some part of the schedule substrate that needs to be in there. Like attached to the fucking visit."

> "Like, why are Boulevard and Mindbody actually not richer in this department? Like Mindbody lets us control two layers, categories and then a bunch of appts, in alphanumeric sequence only. Like that's what we're currently dealing with. Our idea seems simple. But easy. Like too easy."

**Implication:** Mindbody screenshots are EVIDENCE OF TENANT NEEDS that OMNI's generic primitives must satisfy. They are NOT a substrate template. OMNI's substrate looks "too simple" because complexity lives correctly in tenant configuration. That's the right answer.

### No more rehashing

> "I do not want to have to explain the scheduling app 10 more times in the next 3 months."

> "We have 4-5 more pillars... like, I had to beg and plead to build substrate and you guys prompt after prompt after prompt kept steering me away."

**Implication:** the patterns named in the post-mortem must not recur. This preferences doc + the architecture pattern doc + the post-mortem are read at the start of each future pillar work. If a future session asks "why this shape" or "is this drift," the answer is in these docs.

---

## §2 Knox preferences (delivered during cross-AI dialogue)

These are preferences delivered by Knox (ChatGPT reviewer; not a human teammate — see `operator_context_and_collaboration_model.md`) during the cross-AI dialogue of the scheduling foundation arc. The verbatim text is preserved as historical primary source. The binding form has been routed to canonical destinations.

### Canonical destinations summary

| §2 preference | binding form lives at |
|---|---|
| Substrate evolution path, not parallel substrate | Charter Catalog + Read-Graph Clarity Rule + `coherent_omni_architecture_pattern_2026-05-17.md` (3-layer substrate pattern); generalizable design principle |
| Decompose compound enums | generalizable design principle; applied across DL-15/16/17/20 enums; flag-candidate for guardrail digest if not yet captured |
| CNS round-trip, not checkbox | CNS ADR (`docs/architecture/cns_action_orchestration_adr_2026-05-17.md`) + DL-14; binding form |
| Patient/account/appointment/commerce separation | DL-20 care_coordination + DL-17 commerce four-layer model |
| Don't make immutability dogmatic | DL-16 amendment 38 (mutable with audit history default) |
| Confirmation event references rail substrate, doesn't duplicate | CNS ADR + DL-14 (orchestration_action / cns_decision); messaging substrate FK references |
| Don't preserve bad terminology | generalizable design principle; flag-candidate for guardrail digest if not yet captured |
| Tenant catalog flexibility | scheduling rule matrix (service catalog config); DL-17/20 substrate primitives provide; tenant chooses depth |
| Promo intent is auditable, not loose array | DL-20/DL-17 (appointment_promo_intent state machine; promo_reservation child row) |

The verbatim sub-sections that follow preserve the conversational origin. Do not cite this file as binding authority — cite the canonical destination above.

---

### Substrate evolution path, not parallel substrate

> "DL-18 must EXTEND the existing capability layer, not invent a parallel RBAC system."

> "Make care_episode_task / recall / future obligation explicitly load-bearing in DL-20."

> "Push back if needed. Do not just agree. Do not go overboard in opposite direction."

**Implication:** when proposing new substrate, ALWAYS check if existing OMNI substrate already covers it. If yes, EXTEND not REPLACE. lib/auth/capabilities.ts is the canonical existing RBAC layer; DL-18 evolves it. audit_events is the canonical existing audit substrate; DL-18 does not add `permission_audit_log`. Same discipline applies to every future pillar — check what exists first.

### Decompose compound enums

> "Booking origin: good idea, but don't make giant enums like new_client_organic_online that mix too many concepts. Better: booking channel, patient status at booking, attribution source, and trigger source are separate fields."

**Implication:** every enum that mixes concepts gets decomposed. booking_channel + attribution_source + trigger_source + (computed new-vs-repeat) are 3 fields + 1 computed value. Apply this discipline to any future enum.

### CNS round-trip, not checkbox

> "Confirmation is not just an appointment timestamp. It is a CNS round-trip: schedule state creates an outbound action, the patient responds through a rail, CNS classifies the response, then the appointment state updates."

> "AI can classify... But deterministic rules update the appointment: confirmed, needs staff review, reschedule requested, cancellation requested, etc."

**Implication:** state machine + cns_decision + deterministic rules + AI as classifier (never silent state mutator). Apply this pattern to every CNS-driven outbound + inbound flow across pillars.

### Patient/account/appointment/commerce separation

> "Patient/account-level promo claim owns availability. Appointment owns intended/reserved use. Commerce owns actual application/redemption."

> "Same pattern as packages/memberships."

**Implication:** any "thing patient has across visits" follows this four-layer model (definition / wallet / reservation / application). Apply to packages, memberships, promos, future Rx?, future banked lab results?, etc.

### Don't make immutability dogmatic

> "Booking request note should not be immutable forever. Better: patient-entered note is bounded and auditable. If it changes, keep audit/history. Do not make the current row impossible to correct."

**Implication:** mutable with audit history per DL-16 inv 38 is the default for human-typed fields. Immutability is reserved for cryptographic / regulatory / clinical-attestation contexts where it's genuinely required.

### Confirmation event references rail substrate, doesn't duplicate

> "Confirmation_event must not become its own messaging substrate. It should reference outbound action + inbound response/message/event. The message lives in messaging/rail substrate. The confirmation event is the appointment-specific interpretation and state-transition audit."

**Implication:** new substrate that bridges to existing substrate REFERENCES via FK, does NOT duplicate content. Apply broadly: encounter_interaction_link references messaging substrate; appointment_confirmation_event references messaging + orchestration_action + cns_decision; care_episode_task references encounter_line + lab_result + commerce_order_line / etc.

### Don't preserve bad terminology

> "Stop preserving bad terminology just because DL-15 already used it. We are using 'confirmed' in the right place: patient confirmation. Patch the doctrine terminology now."

**Implication:** locked doctrine can be amended pre-substrate-slice when the terminology is wrong. Amendments are cheap before code lands; workarounds become tech debt. Apply this discipline to other terminology issues if they surface in future pillars.

### Tenant catalog flexibility

> "Service/category/pricing separation is correct. But if a tier or preset changes duration, room, provider requirement, prep/finish, resource, or patient-facing booking behavior, that operational difference must be represented in booking_preset / appointment item planning, not only pricing_option."

> "Keep toxin/product modeling flexible. OMNI should allow either: one broad Neuromodulator service with preferred/actual product captured in planned_details and encounter_line, or tenant-configured Botox/Dysport/Daxxify service rows if they have different pricing, inventory, or workflow."

**Implication:** the substrate provides primitives. Tenants choose their modeling depth per service kind. Never make one-service-per-operational-kind dogmatic if operational differences are real.

### Promo intent is auditable, not loose array

> "Use an auditable appointment_promo_intent / promo_reservation child row, because promo intent can be added, removed, expired, overridden, or denied."

**Implication:** when something has a lifecycle (add / remove / expire / override / deny), it's a row with state machine. Not an array on a parent. Apply to packages, memberships, intake reservations, future Rx intent, etc.

---

## §3 New-pillar onboarding checklist — EXTRACTED 2026-05-23

The former §3 drop-in checklist was extracted to its own home as part of the preference-doc fitness refactor (`D0OPER-DEC-002`). Canonical home:

**`.cursor/plans/doctrine/new_pillar_substrate_onboarding_checklist.md`**

Read that file when starting a new pillar/substrate workstream. It contains the checklist + references to operator context, architecture pattern, post-mortem, and this scheduling foundation record.

---

## §4 What this doc is (post-refactor)

This is a HISTORICAL primary-source record of the 2026-05-16/17 scheduling foundation arc. It preserves Nick's + Knox's verbatim positions for conversational-origin context. **It is not current binding doctrine.** The binding form of each preference lives at the canonical destinations listed in the §1 and §2 summary tables above.

If a future Opus or Knox session contradicts one of these preferences without explicit re-opening, the contradiction must be flagged AGAINST THE CANONICAL DESTINATION (the binding form), not against this file.

**Pre-2026-05-23 framing of this section was:** "This is NOT new doctrine. The DLs are doctrine. This is a PREFERENCE RECORD — the explicit user + Knox positions from the 2026-05-17 arc, locked so future sessions don't ignore them." That framing remains accurate but is sharpened post-refactor: the "lock" is now structurally enforced by the canonical destinations (DLs, ADRs, guardrails, scheduling rule matrix, Future Work Registry); this file is the primary-source archive.
