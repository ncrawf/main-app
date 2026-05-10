# shipped migration — ontology analysis (NOT a preflight, NOT implementation)

**Read this file directly in your editor.** The Cursor chat UI is dropping my responses on your end, so this is the plain-text version of the conceptual analysis you asked for.

This document does NOT propose a path. It does NOT recommend an option. It does NOT write a preflight. It only explains the conceptual tradeoff plainly so you can decide which direction to take.

---

## 1. What did the producer-site discovery uncover?

When I went looking for where `shipped` status gets written, I expected to find one place — the same file the previous three clinical_decision migrations all wired into (`lib/internal/patient-case/impl.ts`).

I found two places.

The codebase has TWO parallel state machines that both contain a status value called `'shipped'`, living in two different subsystems:

- A **case-shaped** state machine: `treatment_items.status` moves through values like `pending → approved → rx_sent → shipped → active → refill_due`. The status is a column on the patient's `treatment_item` row. Updates happen in `lib/internal/patient-case/impl.ts` `updateTreatmentItemStatus`. This is the surface the legacy notification system was originally written against.

- A **fulfillment-shaped** state machine: `treatment_orders.status` moves through values like `pending_clinician_review → preparing → rx_sent → shipped → fulfilled`. The status is a column on a separate `treatment_orders` row. Updates happen in `lib/orders/updateFulfillment.ts` `updateTreatmentOrder`. This is a newer surface added in April 2026. It exists alongside, not instead of, the case-shaped one.

Plus the orders subsystem has two more parallel surfaces — `supplement_orders` and `lab_kit_orders` — each with its own state machine that also includes a `'shipped'` value.

Today the legacy notification only fires from the case-shaped surface. The fulfillment-shaped surfaces emit timeline events but no notifications. So even though the codebase has a more architecturally-correct fulfillment representation, the patient-facing "your order has shipped" message comes from the legacy case-shaped surface.

---

## 2. Why did `shipped` stop looking like a trivial migration?

The first three legacy notifications I migrated (case_approved, intake_submitted, awaiting_clinical_review) all had a single producer surface — the case-shaped `lib/internal/patient-case/impl.ts`. The wiring was mechanical: pick the status, copy the pattern from the previous migration, change a few names.

`shipped` is the first migration where the codebase forces a real choice. Before writing any code, I have to decide which subsystem represents "shipped" canonically — the case-shaped one (where the legacy fires) or the fulfillment-shaped one (where the newer schema lives).

That choice changes:
- Which folder the typed Rule lives in
- What the payload's discriminant field is called
- What audit event the idempotency keys off of
- Whether the migration preserves legacy behavior or changes it

That's no longer a mechanical migration. It's an architectural commitment. The producer-site discovery turned what looked like the fourth instance of an established pattern into the first instance of a new architectural question.

---

## 3. What currently makes `shipped` "case-shaped"?

In the legacy implementation, `shipped` is a value on the same column as values like `pending`, `approved`, `denied`, `under_review`, `active`. That column is `treatment_items.status` — the status of the patient's treatment.

The legacy data model treats a treatment as having a single state machine that tracks both clinical decisions ("approved", "denied", "under_review") AND fulfillment events ("rx_sent", "shipped"). Both kinds of state live on the same column, which means the system implicitly says "fulfillment is a kind of clinical case state."

The newer `treatment_orders` model started separating these. `treatment_items.status` would track clinical state; `treatment_orders.status` would track fulfillment state. They're related but distinct concepts. But the consolidation is not finished — both columns still have overlapping status values, both can be updated independently, and the legacy notification system never moved to the new surface.

So when the typed Rule cutover encounters `shipped`, it inherits the legacy case-shaped framing by default. To NOT inherit it requires a deliberate choice.

---

## 4. Why might that become dangerous later?

The danger is gradual, not sudden. It plays out like this:

This commit migrates `shipped` to the typed Rule registry. If we put it in the existing `clinical_decision` domain folder and use the existing `case_kind` payload (the same shape as case_approved), the registry now contains an entry that says: "shipping is a clinical_decision rule with case_kind discriminant."

Some months later, a future migration handles `delivered` (when packages arrive). The author looks at the registry, sees the shipped precedent, and replicates the pattern: clinical_decision folder, case_kind payload.

Another future migration handles `pharmacy_filled` (when the pharmacy completes a prescription fill). Same author or different author looks at the precedent, replicates: clinical_decision folder, case_kind payload.

Then `subscription_renewed` (monthly billing cycle of an ongoing care subscription). The author hesitates because subscriptions don't really feel clinical, but the precedent says clinical_decision works for fulfillment-adjacent events, so it gets stuck there.

Then `retail_order_placed` (when the platform expands to selling non-clinical products like vitamin sample packs). The author tries to put it elsewhere but the established pattern is so dominant that the path of least resistance is clinical_decision + case_kind anyway.

By that point, the registry is canonizing the wrong ontological model. The fix would touch dozens of files. The signal that should have been preserved at the start — "shipping/fulfillment/logistics is its own concept, not a clinical_decision sub-type" — was lost when the precedent was set.

The c3 checkpoint flagged this watch zone explicitly. shipped is the first migration where the watch zone is concretely actionable.

---

## 5. Which future surfaces are implicated?

Each of these is a real future need with logistical or commerce-shaped events that aren't actually clinical decisions:

**Retail.** If the platform ever sells non-clinical products (sample packs, branded items, accessories), order events (placed → packed → shipped → delivered → returned) are pure commerce, not clinical decisions. Forcing them into clinical_decision would be wrong.

**Pharmacy.** Pharmacy fulfillment events (prescription filled → ready for pickup → picked up → refilled) presuppose a clinical decision already happened. The pharmacy event itself is logistics. Putting them in clinical_decision conflates "the clinician decided to prescribe" with "the pharmacy completed the fill."

**Subscriptions.** Monthly billing cycle events (renewal → upgrade → cancellation → dunning → churn) are commerce. They have weak coupling to clinical state but aren't themselves clinical.

**Inventory.** Back-order, allocation, restock, vendor purchase orders. Pure logistics.

**Logistics.** Carrier handoff, in transit, out for delivery, delivered, returned, address-correction. Pure logistics with external vendor lifecycles (USPS, FedEx, ShipStation).

**Lab fulfillment.** Lab kit shipped, kit received, sample collected, results ready. Distinct from "the clinician ordered a lab" (that part is clinical_decision territory) — the kit's logistics are their own lifecycle.

In each case, the right architectural home is something like `fulfillment_lifecycle` or `commerce_lifecycle` or `logistics_lifecycle` — not `clinical_decision`. The first migration that ships a fulfillment-shaped event sets the precedent for all of them.

---

## 6. Acceptable temporary locality vs dangerous platform canonization

This is the most important distinction in the whole question. Both phrases are about the same migration making the same wiring choice — but at different layers of the system.

**Producer locality** is the question of "which file does the runtime dispatch call live in." Today, the runtime call for `shipped` would naturally live in `lib/internal/patient-case/impl.ts` (the case-shaped surface) because that's where the legacy code already fires. Even if the architecturally correct producer is somewhere else (the orders subsystem), there are real reasons to preserve the legacy locality temporarily — primarily that it preserves behavioral parity and avoids opening adjacent architectural questions before we have appetite for them.

**Platform canonization** is a different question. It's the question of "what does the type system, folder structure, and shared vocabulary tell future authors that fulfillment events are." Even if the runtime call is on a legacy surface, the type system can independently encode the correct architecture. Folder names, payload type names, domain vocabulary — those are read by humans before they write the next migration. They set the pattern.

**The acceptable version is:** the runtime wiring is temporarily in legacy locality, but the type system and folder vocabulary already encode the correct architecture. A future author of `delivered` or `pharmacy_filled` reads the registry, sees that shipped is in `fulfillment_lifecycle` (not `clinical_decision`) with `order_kind` payload (not `case_kind`), and correctly concludes that fulfillment events have their own home. The runtime locality is a temporary detail; the architectural vocabulary is correct.

**The dangerous version is:** the type system itself encodes the legacy/wrong model. The folder is `clinical_decision`. The payload is `case_kind`. The vocabulary tells future authors "shipping = clinical decision." There's no signal that the architecturally correct model is different. The next migration replicates the pattern, then the next, then the next. The wrong model becomes the platform's mental model.

The line between them is whether the TYPE SYSTEM tells the truth about the architecture, independent of where the runtime call happens to live today.

---

## 7. What is the "Option D synthesis" structurally?

You asked for the structural shape, not a recommendation. Here it is.

Option D would:

- Place the typed Rule and Template in a NEW folder called `repo/rules/fulfillment_lifecycle/` and `repo/templates/fulfillment_lifecycle/`. The folder name is its own architectural decision — it tells future readers that fulfillment events have their own home, distinct from clinical_decision. Names like `fulfillment_lifecycle`, `commerce_lifecycle`, or `logistics_lifecycle` would all serve; the choice of which is itself a small commitment.

- Define a NEW payload type with a discriminant that names the underlying object correctly. Probably `order_kind: 'treatment_order' | 'supplement_order' | 'lab_kit_order'` (or similar). Crucially: NOT `case_kind`. The discriminant tells the type system that this is an event about an order, not a case.

- Wire the runtime dispatch call at `treatment_items.shipped` — the same case-shaped surface where the legacy notification fires. Behavior is preserved exactly: the patient receives the same notification at the same moment in the workflow.

- Include an explicit comment at the producer site that says something like: "this is legacy producer locality. The architecturally correct producer is the fulfillment subsystem (`lib/orders/updateFulfillment.ts`). Migration to the correct surface is deferred pending broader treatment_items-vs-treatment_orders consolidation. Future fulfillment-event migrations should target the orders surface, not this case-shaped one."

So three layers — folder, payload, vocabulary — encode the correct architecture. The fourth layer — runtime wiring — is on the legacy surface but explicitly flagged.

---

## 8. Which parts are semantic cleanup vs real architectural expansion?

**Semantic cleanup — small, mostly costless:**

- Picking a new domain folder name.
- Picking a new payload type name.
- Adding a comment that explains why the producer-site is in legacy locality.

These are decisions about how to label things. They don't require changes to existing subsystems, don't require new audit emissions, don't require database changes, don't change runtime behavior.

**Real architectural expansion — bigger, deferred:**

- Adding the orders subsystem as a producer surface for typed Rules (which would require adding audit emission to `updateFulfillment.ts`).
- Resolving the treatment_items-vs-treatment_orders consolidation question (does the case-shaped status column eventually drop the fulfillment values, leaving fulfillment state only on treatment_orders?).
- Establishing how the orders subsystem participates in the rules engine going forward (does updating an order trigger rules? do orders have their own rule domain?).

Option D as I described it does ONLY the semantic cleanup. The architectural expansion is explicitly deferred. The benefit is bounded scope; the cost is that the runtime wiring stays in the wrong place for now (with an explicit "we know" comment).

If we instead chose to move the producer to the orders surface, all the architectural expansion comes with it — that's why it's a substantively bigger commit.

---

## 9. Naming, ownership, producer locality, or true ontology?

It's a mix, but the dominant concern is **ontology**.

**Naming** is real but small. Whether the new folder is called `fulfillment_lifecycle` or `commerce_lifecycle` matters for human readability but doesn't change the system's architectural commitments materially.

**Ownership** is not at play. The case subsystem and orders subsystem have clear owners; the question isn't who owns what.

**Producer locality** is the surface manifestation. It's the visible part — which file does the dispatch call live in. If you only look at producer locality, you might conclude the question is "do we move the code to the right file or not." But that framing misses the deeper issue.

**Ontology** is the real concern. The deeper question is: what does the platform think shipping IS? Is it a state of a clinical case (the case-centric model) or is it an event in a fulfillment lifecycle that happens to be triggered by a clinical case decision (the fulfillment-shaped model)? Those are different ontological commitments. They have different implications for how the platform thinks about retail, pharmacy, subscriptions, inventory, logistics, lab fulfillment — none of which fit cleanly into a case-centric model.

The legacy code accidentally encoded the case-centric ontology by putting fulfillment values on `treatment_items.status`. The newer treatment_orders schema started moving toward the fulfillment-shaped ontology. The typed Rule cutover for shipped has to choose which ontology gets canonized in the type system.

The ontology choice cascades. Once you've decided "fulfillment events are their own thing," the folder name, payload shape, and producer-locality decisions all follow. Once you've decided "fulfillment is a sub-type of clinical_decision," those same decisions go the other way.

That's why this isn't a mechanical migration. It's a small migration that forces a real ontological commitment.

---

## End of analysis

This document does NOT propose implementation. It does NOT write a preflight. It does NOT recommend a specific path.

The conceptual tradeoff is: do we let `shipped`'s migration into the typed Rule registry encode the legacy (case-centric) ontology in the type system, or do we let it encode the architecturally-correct (fulfillment-shaped) ontology in the type system, even if the runtime call temporarily lives on a legacy surface?

When you're ready, tell me which path you want, or which part of this you want to discuss further. No tool calls at the end of this file — just text for you to read.
