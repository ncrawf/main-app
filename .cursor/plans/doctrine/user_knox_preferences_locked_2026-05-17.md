# User + Knox Preferences — Locked Record (2026-05-17)

**Status:** Locked reference. Preferences delivered explicitly by the user and Knox during the 2026-05-16 + 2026-05-17 scheduling foundation arc. NEVER re-litigate. If a future session proposes anything that contradicts one of these, flag the contradiction explicitly before proceeding.

**Companions:**
- Post-mortem: [scheduling_foundation_post_mortem_2026-05-17.md](../../docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md)
- Architecture pattern: [coherent_omni_architecture_pattern_2026-05-17.md](coherent_omni_architecture_pattern_2026-05-17.md)
- Preservation doc: [future_care_obligations_design_2026-05-17.md](future_care_obligations_design_2026-05-17.md)

---

## §1 User preferences (explicit, delivered)

These are direct quotes or paraphrases from the user during the arc. Each was repeated multiple times. Each is binding for future sessions.

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

These are explicit preferences delivered by Knox during the cross-AI dialogue. Each is binding.

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

## §3 Drop-in checklist for future sessions

When a future session starts a new pillar:

- [ ] Read this preferences doc
- [ ] Read the architecture pattern doc
- [ ] Read the post-mortem doc
- [ ] Cross-link these three from the new DL DRAFT preamble
- [ ] Honor every preference above without re-litigation
- [ ] Use the 3-layer pattern as default substrate shape
- [ ] No vendor names in substrate enums
- [ ] No specialty names in substrate enums
- [ ] No Mindbody UI labels in substrate vocabulary
- [ ] Check existing OMNI substrate before proposing new (extend, don't replace)
- [ ] Decompose compound enums into separate fields
- [ ] Patient-level wallets for cross-visit concerns
- [ ] CNS round-trip for outbound + inbound flows
- [ ] State machines for things with lifecycles
- [ ] FK references between substrates, no content duplication
- [ ] Tenant catalog flexibility (substrate provides primitives, tenant chooses depth)
- [ ] Run ≥5 real-world scenarios with user before treating DRAFT as substrate-ready
- [ ] Switch artifact class when user says "build"

---

## §4 What this doc is not

This is NOT new doctrine. The DLs are doctrine. This is a PREFERENCE RECORD — the explicit user + Knox positions from the 2026-05-17 arc, locked so future sessions don't ignore them.

If a future Opus or Knox session contradicts one of these preferences without explicit user re-opening, the contradiction must be flagged. The user has already spent 2 days teaching us these. They shouldn't have to teach them again.
