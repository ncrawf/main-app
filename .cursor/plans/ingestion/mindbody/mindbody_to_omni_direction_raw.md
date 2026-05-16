# Mindbody → OMNI direction (raw ingest, supplemental session 1)

Source: user ↔ chat/Knox back-and-forth (verbatim, supplied 2026-05-16)
Status: raw ingest — do not edit, do not analyze, do not summarize away
Date filed: 2026-05-16 (~12:00 AM UTC-4)
Companion: [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) (gap log)

---

## CRITICAL DISCIPLINE (read before referencing this file)

- **Knox + user EXPLICITLY agreed to SHELVE** the encounter container architecture question (same parent container with configurable encounter profiles vs separate visit/procedure objects) for revisit AFTER Phase B.5 ingestion + Layer 2 synthesis complete.
- **This file is a raw INPUT to Layer 2 synthesis** (sections G / H / I / J / K), NOT a doctrine source. No DL-15 amendments, no new DLs, no substrate slice work derived from this file before Layer 2 + user/Knox review.
- Quoting Knox (Turn 6): *"Don't force the encounter/profile question tonight. Keep ingesting Mindbody evidence first."*
- This file lives in Layer 1 (raw) per Knox's binding preserve-everything direction (locked in [phase_b5_mindbody_ingestion_4db27449.plan.md](../../phase_b5_mindbody_ingestion_4db27449.plan.md)).
- Cross-referenced by Batches 2-N raw captures during ingestion + by Layer 2 synthesis sections G / H / I / J / K. Companion gap log [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) extracts the open questions in indexed form.

---

## Session metadata

- **Session 1:** OMNI scheduling design pressure-test (mid-Phase B.5 ingestion)
- **Date:** 2026-05-16 (~midnight UTC-4)
- **Channel:** user ↔ chat/Knox (`knox` is the chat persona used by user)
- **Trigger:** user paused mid-ingestion (after Batch 1 of Step 4 completed) to pressure-test "how would Knox design OMNI scheduling?" — supplied this back-and-forth to thread-2 agent for filing per preserve-everything contract
- **Structure:** 6 exchanges (6 user turns, 6 chat/Knox turns)
- **Verbatim:** preserved below with no spelling / punctuation / wording / capitalization edits. Light structural scaffolding only (turn numbering + actor markers + anchor lines for the open-questions file to cite).

---

## Turn 1

### USER:

how would YOU design OMNI scheduling knox?

### KNOX:

I would design OMNI Scheduling as an operating system for clinical time, not as an appointment calendar.

The core object would not be "appointment." It would be an Encounter Container: a scheduled or unscheduled unit of care that can hold provider time, room time, equipment/resources, staff participation, planned services, rendered services, notes, payments, inventory use, labs, forms, follow-ups, and CNS actions. That container can represent a medspa Botox visit, Hims-style telehealth visit, lab review, procedure-room encounter, scope day, nurse injection, red light session, or hybrid visit. Your uploaded Mindbody failure list is basically describing why a flat "appointment type" model breaks under real clinical/commerce complexity.

I would separate what the patient books from what the business reserves from what actually happens.

Patient books:
"Injectables visit," "Weight loss follow-up," "HydraFacial," "Procedure consult."

System reserves:
provider + room + equipment/resource + staff role + time block + required prep/finish time + eligibility/payment rules.

What actually happens:
Botox 36 units, Dysport 20 units, cheek filler consult, HRT discussion, weight-loss plan renewal, labs ordered, note signed, product sold, subscription applied.

That means every visit has two layers: planned intents and rendered events. Planned intent helps scheduling and day-of-prep. Rendered events drive documentation, billing, inventory, analytics, commissions, compliance, and follow-up.

The scheduling engine should be a constraint solver. A booking is valid only if all required constraints align: provider availability, room availability, equipment/resource availability, staff support, patient eligibility, appointment type rules, payment/subscription/membership rules, service category restrictions, forms, consent, buffer time, and clinical safety constraints. Mindbody treats many of these as adjacent settings. OMNI should treat them as one unified booking truth.

For taxonomy, I would use four separate but linked entities:

Schedulable Service — what can be booked.
Clinical Service — what care was performed.
Billable Item — what gets charged.
Resource/Inventory Item — what gets consumed or reserved.

Botox is the perfect example. "Injectables visit" may be schedulable. "Botox treatment" is clinical. "Botox $14/unit × 36 units" is billable. The vial/unit inventory is resource/inventory. Those should not be smashed into one object.

I would also make every appointment capable of having multiple care threads attached. A visit can touch weight loss, HRT, Botox, labs, and membership renewal without forcing the system to pretend it was only one appointment type. The encounter becomes the umbrella; each service line inside it gets its own state, owner, note, charge, inventory effect, and CNS visibility.

For UX, I would not show staff twelve identical "injector consults." The schedule should display a compact summary like:

12:00 PM — Mary B. — Injectable Visit
Planned: Botox + lip filler consult
Provider: Amber
Room: 2
Resource: injectable tray
Readiness: forms complete / card on file / membership active

Then checkout converts planned items into rendered items. That is where "Botox 36 units" becomes exact.

The CNS layer sits above all of this. Scheduling events should emit structured events: appointment requested, booking confirmed, resource reserved, forms missing, client checked in, provider delayed, service rendered, checkout pending, note unsigned, lab ordered, follow-up due, subscription used, no-show risk, payment failed. OMNI CNS does not "own the calendar"; it watches the living state and coordinates action.

So my answer is: build scheduling as the bridge between clinical operations and commerce. Not a calendar. Not POS. Not notes. Not subscriptions. A substrate where all of them meet. That is why it is the missing link to Hims, medspa, procedures, and eventually specialty-clinic SaaS.

---

## Turn 2

### USER:

what other industries or apps already do this. help me conceptualize.

### KNOX:

The closest conceptual model is not Mindbody. It is a blend of airline operations + restaurant POS + hospital OR scheduling + Amazon fulfillment.

Airlines are the best scheduling analogy. A flight is not just "10:00 AM to Chicago." It requires aircraft, pilots, crew, gate, runway slot, baggage, fuel, maintenance status, weather, passenger eligibility, seat inventory, delays, and downstream connections. OMNI Scheduling should treat an appointment the same way: provider, room, machine, staff, forms, payment, clinical eligibility, timing, and downstream CNS tasks all have to align before the visit is truly bookable.

Restaurants are the best "planned vs rendered" analogy. A reservation says: party of four, table at 7:00. But the actual economic event is the order: steak, wine, dessert, substitutions, comps, split check, gift card, tip. Same with OMNI: the patient books "injectables visit," but the rendered reality may be Botox 36 units, Dysport consult, lip filler, skincare product, membership discount, deposit applied. The reservation is not the bill.

Amazon fulfillment is the best resource-allocation analogy. One order can contain multiple items from different warehouses, with different inventory, shipping methods, delivery windows, substitutions, returns, and payment states. A clinical encounter can contain multiple services/products/subscriptions/labs/notes inside one patient visit. OMNI needs that "order container" architecture.

Hospital OR scheduling is probably the most clinically relevant analogy. A surgery case requires surgeon, room, anesthesia, equipment tray, implants, nursing team, pre-op clearance, consent, pathology, post-op orders, billing codes, and documentation. That is much closer to where OMNI needs to go than spa scheduling. Even a "simple" Botox visit is structurally a mini procedure case if you model it correctly.

Uber/Lyft are useful for matching. They do not just schedule a ride; they match rider, driver, vehicle, location, route, ETA, payment, cancellation rules, and live state. OMNI needs a similar live-state engine: appointment requested → matched to provider/resource/room → confirmed → checked in → delayed → rendered → checked out → followed up.

Hotel/property-management systems are useful for availability logic. A room is a reserved asset with check-in/check-out, cleaning buffers, upgrades, blocked inventory, no-shows, deposits, and rate plans. In OMNI, treatment rooms, devices, provider blocks, and procedural resources behave like hotel inventory.

Epic/Cerner-style EHR scheduling is useful, but incomplete. They understand clinical visits, orders, notes, referrals, labs, encounters, and providers. But they are usually weak at commerce, memberships, subscriptions, retail, and consumer-grade UX. OMNI should learn from EHR encounter structure without inheriting EHR ugliness.

Shopify/Stripe are useful for commerce abstraction. Products, subscriptions, invoices, discounts, payment methods, tax, refunds, credits, gift cards, and customer identity are all separate but linked. OMNI needs that same separation: schedulable service ≠ clinical service ≠ billable item ≠ inventory item.

The big mental model: OMNI Scheduling is the air-traffic-control layer where time, care, commerce, people, rooms, devices, and CNS all intersect. Mindbody is a calendar with commerce bolted on. OMNI should be an operating system for encounters.

So when you design it, do not ask, "How do we schedule Botox?" Ask: what container allows a patient intent to become a reserved operational event, then a documented clinical event, then a billable/completed business event, while CNS can observe and act at every state transition? That is the architecture.

---

## Turn 3

### USER:

how will all those concepts relate to idea of a sync messaging for Hims style??? how will those sit side by side, activated if needed, downgraded if in clinic not used for a federation, i can imagine a number of scanrios.

### KNOX:

They sit side by side if we stop thinking of scheduling as the center and think of care coordination as the center.

OMNI should have a broader object above both:

Care episode / encounter container

That container can be handled through different modes:

Async messaging mode — Hims-style: patient submits info, provider reviews later, messages back, Rx/lab/order/task happens without a scheduled visit.
Scheduled visit mode — medspa/clinic: patient is booked with provider/room/resource/time.
Ad hoc live mode — phone/video/chat happens now, maybe not originally scheduled.
Procedure mode — room/device/team/pathology/labs/resources needed.
Hybrid mode — async intake first, then scheduled procedure, then async follow-up.

So Hims-style async care and Mindbody-style scheduling are not competing architectures. They are different execution modes of the same care episode.

Example: weight loss.

Hims-style: intake → provider async review → Rx/order → async follow-up.
Hybrid clinic: intake → scheduled consult → labs → Rx/order → async follow-up.
Medspa upsell: patient comes for Botox, also asks about weight loss → provider creates async weight-loss episode from the visit.

Same CNS. Different rails.

Scheduling becomes one executor the CNS can use when time/place/resource matters. Messaging becomes another executor when communication/review can happen asynchronously. Commerce is another. Labs/Rx another. None of them should own the patient journey alone.

For configuration, each brand/clinic/service line should declare its operating mode:

Service line: GLP-1
Mode: async_first | schedule_required | hybrid | disabled_scheduler

Service line: Botox
Mode: schedule_required

Service line: HRT
Mode: async_first_with_optional_video

Service line: Red light therapy
Mode: resource_booking_only

That lets OMNI "downgrade" cleanly. A Hims-style brand can have scheduling mostly off, except for optional video visits or lab draws. A medspa can have full scheduling/rooms/resources. A separate clinic federation can enable only the surfaces it needs.

The important rule:

If a domain is disabled, its UI disappears, but its CNS contract remains admitted.

So if a clinic does not use scheduling, OMNI does not show a big calendar. But the CNS still understands booking_required, no_booking_needed, async_review_pending, video_visit_optional, lab_draw_needed, follow_up_due. Later, if that clinic adds in-person services, scheduling can activate without rebuilding the whole care model.

Federation works the same way. Each brand/deployment/clinic has capability flags:

async messaging enabled
external-line enabled
scheduling enabled
room/resource scheduling enabled
POS enabled
memberships enabled
Rx enabled
labs enabled
video visits enabled

Two separate clinics can run with different capability profiles. If they merge later, the patient identity/relationship layer can reconcile them without forcing one clinic's operating mode onto the other.

So the answer is: async messaging is not an alternative to scheduling. It is one care-delivery mode. Scheduling is activated when care requires time, place, room, provider, device, or procedure resources. Async mode is activated when care can proceed through intake, provider review, messaging, labs/Rx, and tasks.

That is the architecture I'd want: one CNS, many execution modes.

---

## Turn 4

### USER:

please don't tell me we are gonna have to reinvent everything about intake and messaging to achieve that???!!!

### KNOX:

No. We do not need to reinvent intake or messaging.

We need to reclassify them under the CNS grammar and add missing seams where needed.

Intake already did the most important thing: it created structured patient state. That still holds. The upgrade is: intake answers become durable atoms/assertions/events that can feed scheduling, messaging, Rx, labs, follow-up, commerce, and provider review — not just a one-time form submission.

Messaging also still holds. The upgrade is: messaging becomes one rail/surface for care coordination, not the center of the care model. A patient message can trigger a scheduling action, provider task, lab request, payment prompt, or no-op. Outbound messages become orchestration actions projected through chat/SMS/email/app.

So the work is not:

tear up intake and messaging

It is:

make sure intake atoms and messages emit/consume the same CNS event/action envelope as scheduling.

That is exactly why DL-16 was valuable. It prevents rebuilding every domain from scratch. It gives old and new surfaces a shared language: domain event, canonical state, orchestration action, executor/rail, outcome event.

Practical example:

Intake answer: "I have melasma" → clinical/patient-state atom.
Message: "Can I book a peel?" → inbound message event.
Scheduler: peel requires provider/room/service eligibility.
CNS: sees melasma + peel request + availability → maybe asks for provider review, offers consult, or blocks unsafe booking.

Same intake. Same messaging. Better coordination.

So breathe: we are not rebuilding the organs. We are wiring the nervous system. Some refactors will happen, but the prior work was not wasted. It becomes the first set of domains plugged into the CNS.

---

## Turn 5

### USER:

okay, well like, in a medspa, any visit is essentially a proecude. there is no like, cliniv visit that doesnt permit a mini procedure. so we need to think on does a clinic visit auto allow for that... vs a endoscopy visit, or are they the same container???? think hard.

### KNOX:

Yes — same parent container, different encounter profile.

Do not make "clinic visit" and "procedure visit" totally separate architectures. That will break medspa immediately, because in medspa almost every visit can become a mini-procedure: Botox, peel, laser, filler, microneedling, device treatment, product add-on, lab draw, injection, photo check, etc. Your own failure list points exactly at this: a visit may start broad, then the actual services/products/units/resources/documentation happen at time of service.

The right object is:

Encounter Container
with one or more planned intents
and one or more performed intervention/procedure lines

So a medspa appointment can be booked as "Injectables Visit," but inside that encounter you can perform Botox 36 units, lip filler consult, product sale, before/after photos, consent, and follow-up. Same container. Multiple lines.

An endoscopy is also an encounter container, but with a stricter profile: procedure suite, anesthesia/sedation, prep/NPO rules, facility resources, scope equipment, assistant/nurse roles, pathology/specimen, consent, recovery/discharge, complication tracking. So it is not a different universe — it is a higher-rigor encounter profile.

I'd define encounter profiles like this:

async_review
virtual_visit
phone_visit
office_visit
office_visit_with_minor_procedure
procedure_encounter
surgical_case
resource_only_session
internal_event

But underneath, they all share the same spine:

Encounter
→ planned intents
→ reserved resources
→ participants
→ performed intervention/procedure lines
→ notes/documents
→ inventory/products
→ charges/payments/entitlements
→ CNS events/actions/outcomes

The key rule: a visit may permit procedure lines, but it does not automatically authorize any procedure. Same-day add-ons should pass policy checks: provider capability, consent, contraindications, room/device availability, inventory, payment/entitlement, and documentation requirements.

So the model is:

office visit can promote into minor procedure lines
procedure encounter starts with procedure requirements already mandatory
surgical/endoscopy case is the same container with more constraints, not a separate architecture

That gives OMNI medspa flexibility without ruining future procedural clinic depth.

---

## Turn 6

### USER:

hmmmm... knox we may really have to consider with opus what would work best here. im gonna shelve this info with opus for now and continue with ingestion of mindbody into opus.

### KNOX:

That's the right move.

Don't force the encounter/procedure taxonomy tonight. Keep ingesting Mindbody evidence first. The screenshots and notes are raw operational truth; we need that preserved before trying to "solve" the perfect model.

I'd tell Opus:

Shelve the encounter/profile question as an open design seam. Continue Mindbody ingestion first. Preserve the question: "same encounter container with configurable encounter profiles vs separate visit/procedure objects." Do not resolve prematurely.

The important thing is not to lose the insight:

In medspa, almost every appointment can become a mini-procedure, while future procedural specialties may need stricter procedure-case profiles.

That belongs in the gap log / open questions file, not as final doctrine yet.

Keep feeding Opus the Mindbody surfaces. Then once ingestion is organized, we pressure-test the encounter container model with real examples: Botox, HydraFacial + add-ons, weight loss consult, video visit, lab draw, endoscopy, surgical follow-up, and multi-provider procedure.

---

## End of session 1

Verbatim preserved above. Open questions extracted in [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md).

Per Knox direction (Turn 6) + user direction in agent handoff: ingestion continues with Phase B.5 Step 4 Batch 2 (manifest row 55 onward). The encounter container architecture question is **shelved**. Layer 2 synthesis will reference this file in sections G (refined doctrine sharpening scope), H (refined substrate slice scope), I (OMNI competitive moats), J (cross-domain implications), K (industry analogy insights), and L (multi-modality + scaling vision).
