# Mindbody — Batch 6 raw capture: POS Checkout flow (entry + cart + browse products + add-on)

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~12:50 AM UTC-4)
Batch: 6
Feature area(s): `pos_checkout`, `appointments_grid_overlays` (row 63 entry point)
Screenshots covered: 8 (Screen Shot 2026-05-13 at 11.52.36 PM through 11.54.50 PM, chronological)
Chat cross-references:
- Marker 1 (lines 380-700) — Knox's deconstruction of the appointment action menu (12 items: Checkout / Retail / Apply payment / Early cancel / Late cancel / Confirmed / Arrived / Reschedule / Modify / Progress note / Prebook / Groups). Row 63 surfaces all 12 items in one view (Batch 5 only saw 7). Marker 1's central thesis: "appointment is a workflow object, not just a calendar block. Mindbody shows 'appointment' and 'checkout' are tightly coupled but not the same object."
- Marker 2 (lines 701-1085) — "Day 0 parity = scheduling + checkout + commerce. Mindbody Day 0 parity is not just scheduling. It is scheduling + checkout + packages + memberships + payment methods + entitlement redemption + appointment status all fused together." Checkout as its own operational surface: appointment-linked checkout, cart building, service redemption, retail/product sale, add-on sale, package sale, membership/contract sale, gift card sale/redemption, account payment. Rows 64-70 are concrete evidence for ALL of these.
- Marker 5 (lines 2153-2597) — "Mindbody's 'service' model is not just a list of services. It is a mesh of: appointment type → service category → pricing options → staff eligibility → online booking rules → package/contract eligibility → commission/payroll → scheduling restrictions → automated emails." Row 67-68 surfaces the "products" parallel catalog; row 70 surfaces per-product pricing options (Price + Quantity + Discount percent + Discount amount + Notes).
Supplemental cross-references (Step 0.5):
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — Knox's 4-entity split: Schedulable Service / Clinical Service / **Billable Item** / Resource/Inventory Item. POS checkout surface is where Billable Items get assembled. Row 64 cart shows BH HydraFacial (PAID — pre-purchased Billable Item being redeemed against today's appointment) coexisting with new add-ons being assembled. Row 70 BioRePeel detail edit panel exposes Billable Item attributes (Price + Quantity + Discount).
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 2 — Knox's analogies: Restaurant POS as the planned-vs-rendered analogy. Row 64-69 is concrete: the patient booked one HydraFacial appointment; at checkout the actual rendered economic event is HydraFacial + BioRePeel + (later) Medical Weight Loss + (later) BH+ Elite contract = $850. The reservation is not the bill.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 (4-entity split validity) — concrete instance. Q4 (mode-per-service-line) — Diana's BH HydraFacial was PAID via a pre-purchased Signature service entitlement (purchased 04/10/2026), redeeming today against the appointment. This is **Schedulable Service redemption against pre-purchased Billable Item**. OMNI must support this entitlement-resolution flow.

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-13 at 11.52.36 PM.png`
**URL:** `clients.mindbodyonline.com/app/business/mainappointments/index` (URL unchanged from Batch 5; context menu is overlay on calendar)
**Feature area:** `appointments_grid_overlays`
**Inferred screen title:** Appointment action context menu — FULL 12-item view (Checkout entry point to POS)

### TEXT CONTENT (VERBATIM)

```
[Top filter row visible (cropped):]
ek         vice categories  ▼   All providers ▼   More ▼

[Provider columns visible behind menu:]
Amber Allen ▼  | Angelina Dedvukaj ▼  | Our Team ▼  | Front Desk ▼

[Visible appointment cards (Amber Allen + Angelina Dedvukaj columns):]
- Chemical Pe... ☆ 📄 Elle J Room 3 (purple)
- SkinPen Micr... ☆ 📄 + Callie J Room 2 (purple)
- BH HydraFacial ● Diana D Room 3 (light teal/light purple) [in Angelina Dedvukaj column at 11:00 AM area]
- BH HydraFacial ☆ 📄 Carolyn B Room 4 (purple)
- BH HydraFacial ☆ Nayan S Room 4 (RED — different status?)

[CONTEXT MENU opened — FULL 12-item appointment action menu (right-click on appointment card):]

🛒  Checkout
📦  Retail
↪   Apply payment
✗   Early Cancel
✗   Late Cancel
☑   Confirmed       [teal/green check]
☑   Arrived         [teal/green check]
↪   Reschedule
✏   Modify
📋  Progress Note
📖  Prebook
👥  Groups          ▶ (right caret — submenu indicator)
```

### UI ELEMENTS (visible)

**Appointment action context menu** opened on a calendar appointment card (likely the BH HydraFacial Diana D card based on chronology — this is the entry point to the POS flow that follows in rows 64-70).

**12 menu items (FULL set per Knox marker 1 line 380):**
1. **🛒 Checkout** — opens POS panel for this appointment (the action that produces row 64)
2. **📦 Retail** — opens retail product sale flow (separate from appointment-linked checkout)
3. **↪ Apply payment** — applies payment to existing balance
4. **✗ Early Cancel** — cancellation lifecycle state
5. **✗ Late Cancel** — cancellation lifecycle state
6. **☑ Confirmed** (active) — appointment confirmation status
7. **☑ Arrived** (active) — patient arrival status
8. **↪ Reschedule** — opens reschedule flow
9. **✏ Modify** — opens edit appointment panel (Batch 5 row 60)
10. **📋 Progress Note** — opens progress note authoring surface
11. **📖 Prebook** — opens prebook (next-appointment booking) flow
12. **👥 Groups** — opens groups submenu (right caret indicates further depth)

**Background:** multi-provider day calendar grid (Amber Allen / Angelina Dedvukaj / Our Team / Front Desk columns visible) — 5 appointment cards visible behind menu.

### VISUAL MARKERS

- **Menu rendered as compact white card** with rounded corners + drop shadow + close X icon top-right
- **Icon vocabulary** (left of each label): 🛒 (cart/checkout), 📦 (box/retail), ↪ (arrow/redirect), ✗ (cancel), ☑ (active toggle), ✏ (edit), 📋 (clipboard/note), 📖 (book/prebook), 👥 (people/group). Visual vocabulary is consistent.
- **Confirmed + Arrived BOTH show teal checkmarks** (active state) — confirms Batch 5 Step 06 observation that lifecycle states stack (multi-flag, not enum).
- **Submenu caret on Groups** — only menu item with deeper navigation; suggests Groups has a sub-action set (likely group-booking-related: link to series, redirect to a Group pricing tier, etc.).

### LINK MARKERS

All 12 items are click targets opening other surfaces. Checkout (item 1) launches the POS panel (rows 64+).

### ARCHITECTURAL OBSERVATIONS

**This is the canonical Mindbody "appointment-as-workflow-object" surface** that Knox marker 1 deconstructs at chat line 380. Batch 5 only surfaced 7 of these 12 items (Step 06); this row reveals the full 12. The 5 NEW items relative to Batch 5: Checkout / Retail / Apply payment / Reschedule / Groups.

**Critical architectural observation: the menu mixes 4 distinct concerns:**

1. **Commerce** (3 items): Checkout / Retail / Apply payment — all open POS / payment surfaces
2. **Lifecycle** (5 items): Early Cancel / Late Cancel / Confirmed / Arrived / Modify (state transitions or modifications to lifecycle)
3. **Clinical** (1 item): Progress Note (clinical documentation)
4. **Booking** (3 items): Reschedule / Prebook / Groups (calendar / future booking actions)

Mindbody collapses all 4 concerns into ONE context menu attached to ONE appointment object. **This is the canonical evidence for Knox's "appointment is a workflow object, not just a calendar block" thesis** — the appointment is the umbrella for commerce + lifecycle + clinical + booking actions. For OMNI Encounter Container ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1), all 4 concerns are sibling care lines under the encounter container; the context menu is the operational entry point for any of them. **Open question Q1 (encounter container architecture)** — same parent container with profiles vs separate objects — is concrete here: Mindbody's monolithic "appointment" object handles all 4 concerns; OMNI's encounter container with sibling care lines (clinical / commerce / lifecycle / booking) would render the same UX with cleaner substrate.

**For DL-15 + DL-16:** the menu's 12 actions emit 12 distinct event types into the CNS:
- `appointment.checkout_initiated` (item 1)
- `appointment.retail_added` (item 2)
- `appointment.payment_applied` (item 3)
- `appointment.early_cancelled` (item 4)
- `appointment.late_cancelled` (item 5)
- `appointment.confirmation_toggled` (item 6 — toggle, not just set)
- `appointment.arrival_toggled` (item 7)
- `appointment.reschedule_initiated` (item 8)
- `appointment.modified` (item 9)
- `appointment.progress_note_started` (item 10)
- `appointment.prebook_initiated` (item 11)
- `appointment.group_action_initiated` (item 12)

DL-16 universal envelope must cover all 12 event types. DL-15 invariants must reason about which transitions require multi-resource locking (per invariant 2) and which don't (e.g., confirmation toggle is local).

**The Groups submenu** is the most novel — Knox marker 1 (line 380) lists "Groups" as the 12th item but doesn't explore what's inside. Mindbody's Groups likely supports: link to recurring series / link to course / link to a group booking / pricing-tier override / etc. Out of scope for this batch (no Groups submenu screen visible) — flagged as Outstanding observation.

**Cross-reference to user feedback gap #3** (memberships + subscriptions + POS + retail + gift cards + loyalty rewards woven into experience): the 3 commerce items (Checkout / Retail / Apply payment) are Mindbody's answer. Limited — no surface for memberships / subscriptions / gift cards / loyalty here directly (those live inside the Checkout panel surface in rows 64+). Gap relevant.

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-13 at 11.52.55 PM.png`
**URL:** (same — `mainappointments/index`; POS panel opens as overlay)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS Checkout panel — appointment-linked cart open (BH HydraFacial PAID + UNPAID context)

### TEXT CONTENT (VERBATIM)

```
[Left sidebar visible (full nav now showing):]
☰ Bh
🏠 Dashboard
📅 Appointments              [ACTIVE]
🚪 Rooms
📝 Check In
👥 Clients
🏷 Point of Sale
📊 Insights ▾
📢 Marketing ▾
👥👤 Services & Products ▾
👥 Staff
⚙ Settings
[Edit] button
✨ AI Assistant

[Top: search "Find a client" centered]

[Mini calendars May 2026 + June 2026 cropped at left]

[Calendar grid cropped at right showing provider columns and 9:00 AM line]

[POS PANEL — large overlay centered/right; minimize and close icons top-right]

D  Diana Donlon                                   ▾  ✕

UNPAID

🪥  BH HydraFacial   Edit
   11:00 AM today with Dedvukaj, Angelina            ☑ (checkmark)

BH  BH HydraFacial - Signature                       PAID
   1 available | purchased 04/10/2026

⊕ Add-on Service

[Right column:]
Wednesday, May 13, 2026
👤 No Sales Rep Assigned

[Empty cart panel below right column:]

There are no items in the cart

[Bottom right column:]
⊕ Tip       ⊕ Promo

Subtotal                                          $0.00
Tax                                               $0.00
Total                                             $0.00

[Bottom buttons:]
CANCEL    🛒 ADD TO CART    CHECKOUT $0.00

[Status bar bottom:]
Status ▾  [colored badges] 0(orange) 0(blue) 2(teal) 6(purple) 2(red)
```

### UI ELEMENTS (visible)

**POS Checkout panel** opened — appointment-linked. Three-column structure:

**Left column (panel header + appointment context):**
- Client avatar "D" + "Diana Donlon" + dropdown caret (client switcher?) + close X
- **UNPAID section** with one item:
  - Icon (likely service icon for HydraFacial)
  - "BH HydraFacial" (service name) + "Edit" link (modify the appointment-linked service)
  - Sub-line: "11:00 AM today with Dedvukaj, Angelina"
  - Checkmark indicator (right side — possibly "already in cart" or "selected for checkout")
- **PAID section** with one item:
  - Icon "BH" (BH-prefixed service)
  - "BH HydraFacial - Signature" (likely the pre-purchased entitlement)
  - "PAID" badge (right side, blue)
  - Sub-line: "1 available | purchased 04/10/2026"

- **+ Add-on Service** button (centered, blue+dotted-border style)

**Center column (would be middle of POS panel — empty in this view, occupied by the items list above)**

**Right column (cart + receipt):**
- Date header: "Wednesday, May 13, 2026"
- "👤 No Sales Rep Assigned" (subtle text — sales rep attribution required for commission tracking, not yet assigned)
- "There are no items in the cart" (empty state)
- "+ Tip" + "+ Promo" pill buttons (commerce affordances)
- **Receipt summary:** Subtotal $0.00 / Tax $0.00 / Total $0.00

**Bottom action bar:**
- Cancel (left, plain text)
- 🛒 ADD TO CART (center, teal/green active button — adds the highlighted UNPAID item to cart)
- CHECKOUT $0.00 (right, orange/amber gradient — transitions to payment; disabled at $0)

**Calendar background visible** (cropped at top + right showing provider columns + time grid).

### VISUAL MARKERS

- **PAID badge** in blue (visual signal that this item is already paid — entitlement-redemption pattern)
- **Empty cart state** explicit ("There are no items in the cart") — UX choice over implicit blank
- **Action bar prominence** — Cancel/Add to Cart/Checkout in a tight bottom strip; Add to Cart is the primary CTA
- **Sales Rep field** placeholder ("No Sales Rep Assigned") — implies commission attribution is a first-class concept; staff must select a sales rep before commission flows
- **Tip + Promo** as pill buttons (lighter-weight than Add to Cart) — secondary commerce affordances always available

### ARCHITECTURAL OBSERVATIONS

**Critical observation: the POS panel renders TWO different commerce primitives side-by-side:**

1. **UNPAID section** (line item: "BH HydraFacial" 11:00 AM today with Dedvukaj, Angelina) — this is the **appointment-as-billable-item** projection. The patient has an appointment scheduled for 11:00 AM; that appointment has a price (revealed when added to cart); the UNPAID section is "things this patient owes for their booked appointments today."

2. **PAID section** (line item: "BH HydraFacial - Signature, 1 available, purchased 04/10/2026") — this is the **pre-purchased entitlement / redemption** primitive. Diana bought a "BH HydraFacial - Signature" package on 04/10/2026 (33 days ago). She has 1 redemption available. The system surfaces this in the POS panel so staff can apply it against today's appointment.

**This is the canonical Mindbody "entitlement resolution" surface.** Per Knox marker 2 ("Day 0 parity = scheduling + checkout + packages + memberships + payment methods + entitlement redemption all fused"). Per Knox marker 4 (lines 1616-2152, account operations): "Account operations are editable, runnable, and destructive... active contract/autopay actions (View, Print, Next Autopay, Terminate, Delete), account recalculation, autopay schedule editing, autopay transaction deletion." This screen surfaces the BUYER side of those operations.

**For OMNI Encounter Container ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1):**
- The "BH HydraFacial" UNPAID item is the **Schedulable Service → Billable Item projection** for today's appointment
- The "BH HydraFacial - Signature" PAID item is a **pre-existing Billable Item entitlement** that can resolve against the Schedulable Service
- The "Add-on Service" affordance lets staff append more **Schedulable Service / Billable Item** entries during the encounter
- The cart accumulates **Billable Item** entries; the receipt aggregates them

**For OMNI's domain-table-discipline doctrine** (system map "Layer 1 (data architecture discipline)"):
- The POS cart is a **transient session state** — must NOT be a domain table; it's a working draft
- The "Subtotal / Tax / Total" computation is **derived** from the cart line items + tax rules; must NOT be persisted as a denormalized field
- The **commit operation** (CHECKOUT button) writes into multiple domain tables: `commerce_orders` (per system map "1I"), `treatment_orders` if Rx-relevant, possibly `patient_state_observations` if treatment-tracked, audit_events, patient_timeline_events as projection
- DL-13 (multi-consumer adapter) is relevant here: the POS commit emits events that multiple downstream consumers process (commission attribution, inventory decrement, package redemption, treatment record append, lab order creation, follow-up scheduling, CNS observation)

**"No Sales Rep Assigned" placeholder:**
- Commission attribution is a separate axis from provider attribution. The provider (Angelina Dedvukaj) is set on the appointment, but the sales rep (who gets commission for the upsold add-ons) is a separate field
- Per Knox marker 5 ("staff eligibility → online booking rules → commission/payroll"): commission/payroll is part of the service mesh
- For OMNI: per system primitive #1 (`authored_by` 9-value enum), commission attribution likely needs its own typed field (`sales_rep_user_id`) on the order line item, distinct from the provider attribution

**"BH HydraFacial - Signature, 1 available, purchased 04/10/2026" — the 33-day age:**
- Implies entitlements are durable across many days (not session-bound)
- "1 available" implies entitlement quantity tracking (could have been multi-use; this one has 1 left)
- Mindbody likely models this as a `client_credits` / `package_uses` / `membership_redemptions` row
- For OMNI: Q3 4-entity split — this is concrete evidence that **Billable Item is its own entity** with state (purchased_at, quantity_remaining, expiration), distinct from Schedulable Service (the bookable thing) and Clinical Service (the rendered thing)

**+ Add-on Service** (button) launches the flow seen in Step 03 (row 65). This is how staff ADD post-booking services during the visit. Cross-references gap #2 (book broad → refine at checkout): this is the canonical concrete UX for that gap. OMNI's Encounter Container with planned-vs-rendered semantics directly addresses this — the booking captures planned, the checkout captures rendered.

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-13 at 11.53.16 PM.png`
**URL:** (same — `mainappointments/index`; POS overlay)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Add-on Service flow opened (Original Service context + Service + Staff selection)

### TEXT CONTENT (VERBATIM)

```
[Left sidebar visible (same as Step 02)]

[POS PANEL — Add-on Service sub-flow opened]

D  Diana Donlon                                   ▾  ✕

ORIGINAL SERVICE

   BH HydraFacial
   11:00 AM today with Dedvukaj, Angelina

ADD-ONS

Service
                                                        ▾
Select service

⊙ Select staff

[Bottom buttons:]
CANCEL                                            DONE
```

### UI ELEMENTS (visible)

**Add-on Service sub-flow** (opened from + Add-on Service button in Step 02):

**Top section: ORIGINAL SERVICE context**
- Read-only display of the original appointment service
- Shows "BH HydraFacial" + "11:00 AM today with Dedvukaj, Angelina"
- Anchors the add-on to the appointment

**Bottom section: ADD-ONS form**
- **Service** dropdown — empty placeholder "Select service" (would open service catalog filtered to add-on category)
- **Select staff** — dropdown / button (likely populates after Service is selected; lets staff specify if a different provider performs the add-on)

**Action bar:**
- Cancel (left)
- DONE (right, orange/amber gradient — primary CTA, presumably saves the add-on association and returns to the POS panel)

### VISUAL MARKERS

- **Two-section layout** with clear separation: ORIGINAL SERVICE (read-only context) + ADD-ONS (writable form)
- **Inline validation affordances** — empty Service field shows "Select service" placeholder; Select staff is greyed but clickable
- **DONE button** (orange/amber) matches the CHECKOUT button style from Step 02 — visual hierarchy: orange = primary commit action

### ARCHITECTURAL OBSERVATIONS

**Add-on Service flow as a discrete substrate write.** This isn't just modifying the original appointment record — it appears to be creating an associated add-on row that:
1. References the original appointment (via ORIGINAL SERVICE context)
2. Has its own service selection (ADD-ONS Service)
3. Has its own staff attribution (Select staff)

**Cross-references Knox pre-marker bucket 6:** *"Add-ons (own logic: add time or not, add price or not, require resource or not, require clinical clearance or not, consume inventory or not, visible to patient or staff-only, affects room/device availability or not; examples: hydrafacial booster, LED mask, exosomes, lip/eye add-on, numbing, PRF add-on)."* This screen confirms add-ons have **their own staff field** — implies an add-on can be performed by a different provider than the original appointment provider. Concrete example: HydraFacial done by Angelina, then a HydraFacial: Lip Boost performed by an aesthetician different from Angelina, all within the same encounter.

**For OMNI Encounter Container ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1):**
- Add-ons are concrete evidence for **multiple care threads in one encounter**
- Each add-on is its own Schedulable Service → Clinical Service → Billable Item → Resource/Inventory Item chain (Knox 4-split per Q3)
- Each add-on has its own staff attribution (separate from primary appointment provider)
- Each add-on has its own time/price/resource/clinical-clearance/inventory rules (per Knox marker 5 service mesh + pre-marker bucket 6)

**For DL-15 + DL-16:** the add-on creation is a write event into the appointment substrate that emits at minimum:
- `appointment.add_on_added` (DL-16)
- Possibly `inventory.consumption_planned` (if the add-on consumes a tracked resource)
- Possibly `room.availability_modified` (if the add-on requires a room change or extends the time block)
- Possibly `provider.availability_modified` (if a different staff member is allocated)

DL-15 invariant 2 (multi-resource atomic booking) is relevant: adding an add-on may require re-running the constraint solver to check that the new staff member is available, the room can accommodate the extended time, and the inventory is decrementable.

**"ORIGINAL SERVICE" context label** is interesting — Mindbody's UX explicitly distinguishes original from add-on. This is a UI hint that the add-on is **derivative** of the original. For OMNI: this hierarchy could be modeled as `parent_service_line_id` on the add-on line, OR as a flat list with `is_addon: true`. Mindbody's UX implies parent-child but the substrate model is TBD.

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-13 at 11.53.37 PM.png`
**URL:** (same — `mainappointments/index`; POS overlay)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Browse panel (7 commerce categories: Products / Services / Autopays-contracts / Packages / Gift Cards / Account payments / Tips)

### TEXT CONTENT (VERBATIM)

```
[POS PANEL — Browse view opened]

D  Diana Donlon                                   ▾  ✕

[Tab strip:]
🔍 BROWSE                ❤ FAVORITES

[List items with right caret ▶ each:]

🛍 Products                                          ▶
🏷 Services                                          ▶
📋 Autopays/contracts                                ▶
📦 Packages                                          ▶
🎁 Gift Cards                                        ▶
💵 Account payments                                  ▶
💲 Tips                                              ▶

[Right column:]
Wednesday, May 13, 2026
👤 No Sales Rep Assigned

▾ BH HydraFacial                                  PAID
   purchased 4/10/2026
   Paying for 1 service
   Remove

[Bottom right:]
⊕ Tip       ⊕ Promo

Subtotal                                          $0.00
Tax                                               $0.00
Total                                             $0.00

[Bottom action bar:]
                                                  CHECKOUT $0.00
```

### UI ELEMENTS (visible)

**POS Browse panel** — replaces the previous appointment-context view with a commerce browse surface.

**Tab strip:**
- 🔍 **BROWSE** (active, blue underline) — current view
- ❤ **FAVORITES** — alternative tab (likely staff-curated frequent items)

**Browse list (7 commerce categories — each is a click target opening a sub-list):**
1. 🛍 **Products** — physical/SKU products (skincare, retail, devices)
2. 🏷 **Services** — bookable services (the catalog from Steps 04-05 of Batch 5)
3. 📋 **Autopays/contracts** — recurring billing arrangements (memberships, subscriptions)
4. 📦 **Packages** — pre-paid bundles of services (e.g., "5 HydraFacial Signature for $X")
5. 🎁 **Gift Cards** — sale or redemption of stored-value cards
6. 💵 **Account payments** — payments toward an existing balance (not against a new purchase)
7. 💲 **Tips** — gratuity addition

**Right column (cart + receipt):**
- Date + Sales Rep header (unchanged)
- **▾ BH HydraFacial PAID** — the entitlement from Step 02's PAID section is now in the cart (added via implicit "redeem against today's appointment" action)
- Sub-lines: "purchased 4/10/2026" + "Paying for 1 service" + **Remove** link
- Cart still shows $0.00 total (entitlement applied; no new charge)
- Same Tip / Promo / receipt structure as Step 02

**Bottom: CHECKOUT $0.00** (orange button — disabled at $0 OR enabled because the entitlement application IS a transaction worth committing)

### VISUAL MARKERS

- **Tab strip with FAVORITES alternative** — implies staff-curated quick-access for common items (efficiency for high-volume POS)
- **Right caret on every browse list item** — drills into sub-list (Step 05 Products / Step 08 Services etc.)
- **Cart item now shows ▾ caret + Remove link** — collapsible / removable line items
- **"Paying for 1 service"** — semantic label for what the entitlement is being applied to (vs. a new purchase)

### ARCHITECTURAL OBSERVATIONS

**The 7-category browse panel is the canonical Mindbody "what is sellable in this POS" taxonomy.** Each category corresponds to a distinct commerce primitive:

1. **Products** — physical SKU inventory
2. **Services** — bookable + redeemable service catalog (overlap with appointment service catalog)
3. **Autopays/contracts** — recurring billing entities (subscriptions, memberships)
4. **Packages** — bundled service entitlements
5. **Gift Cards** — stored-value transferable accounts
6. **Account payments** — payments against balance (no item being purchased)
7. **Tips** — gratuity (no item being purchased; flows to staff via commission/payroll)

**Cross-references Knox marker 2:** *"Day 0 parity = scheduling + checkout + packages + memberships + payment methods + entitlement redemption + appointment status all fused together. Checkout as its own operational surface: appointment-linked checkout, cart building, service redemption, retail/product sale, add-on sale, package sale, membership/contract sale, gift card sale/redemption, account payment."* All 7 categories from Knox's enumeration are represented. Concrete evidence.

**For OMNI commerce DL (future Phase C, scoped per [phase_b5_mindbody_ingestion_4db27449.plan.md](../../phase_b5_mindbody_ingestion_4db27449.plan.md) Layer 2 Section G):**
- These 7 categories are 7 distinct commerce primitives that need separate entity models
- Each has its own substrate semantics (e.g., Account payments don't decrement inventory; Tips don't create a service-rendered event; Gift Cards have transferability rules)
- Mindbody collapses them into one POS UI but keeps the substrate distinct (per Knox marker 4 account operations analysis)
- OMNI's commerce DL must define each primitive's lifecycle + relationships + audit pattern

**For Q3 (4-entity split validity):** Knox's 4 entities (Schedulable Service / Clinical Service / Billable Item / Resource/Inventory Item) cover Products + Services well. But:
- Autopays/contracts are a RELATIONSHIP entity (recurring schedule + commitment), not a Billable Item directly
- Packages are a BUNDLE entity (1-to-many Schedulable Service entitlements), not a Billable Item directly
- Gift Cards are a STORED-VALUE entity (transferable account credit), not a Billable Item directly
- Account payments are a PAYMENT entity (debit against balance), not a Billable Item directly
- Tips are a GRATUITY entity (commission attribution), not a Billable Item directly

This suggests Knox's 4-entity split may need expansion for full commerce coverage. **Open question Q3a (4-entity split right number)** is concretely answered: **likely needs expansion** to cover memberships/contracts/packages/gift-cards/account-payments/tips. Layer 2 Section G must scope this expansion as part of the future commerce DL.

**Cross-references user feedback gap #3:** *"We will need to weave subscriptions, memberships (if those 2 are different entities, yes they might be?/), point of sale, retail, gift cards, loyalty rewards, and whatever else into this experience for clients."* This screen is concrete evidence for the gap — Mindbody handles all of these in one Browse panel. OMNI must too. The user's question "if subscriptions and memberships are different entities" is critical: in Mindbody's taxonomy, both fall under "Autopays/contracts" — suggesting they may be the same primitive with different policies. Layer 2 Section A (entity model) must reason about this.

**Cart shows entitlement application as a $0 transaction.** "Paying for 1 service" + Remove link — the entitlement is in the cart but doesn't charge anything. This is the **redemption-as-transaction pattern**: even when no money flows, an entitlement application is a recordable economic event (decrements package_uses_remaining, fulfills the appointment's payment requirement, etc.). For OMNI: the commerce DL must support $0 transactions that are still substantive operational events.

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-13 at 11.53.57 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Browse > Products subcategory (HydraFacial product variants + ADD-ON products)

### TEXT CONTENT (VERBATIM)

```
[Tab strip: BROWSE (active) | FAVORITES]

[Search bar:]
🔍 Name or barcode

[Product list with monogram avatars and prices:]

BD  BH Deluxe HydraFacial: QTY 1 TX                  $250.00
BP  BH Platinum Hydrafacial: QTY 1 TX                $300.00
BS  BH Signature Hydrafacial: QTY 1 TX               $200.00
BB  Britenol Booster (ADD-ON): QTY 1 TX              $250.00
DB  Dermabuilder Booster (ADD-ON): QTY 1 TX          $250.00
FL  Face LED Light Therapy (ADD-ON): QTY 1 TX        $50.00

[Right column unchanged from Step 04 — cart shows BH HydraFacial PAID 4/10/2026]

[Bottom: CHECKOUT $0.00]
```

### UI ELEMENTS (visible)

**Browse > Products view:**

**Top:**
- Search bar with "Name or barcode" placeholder (barcode scanner integration implied)

**Product list (6 visible HydraFacial-related products):**
- Monogram avatar (2-letter initial, color-coded)
- Product name with embedded variant info: "QTY 1 TX" (1 transaction quantity, likely default)
- Price (right-aligned)

Products visible:
1. **BD** BH Deluxe HydraFacial: QTY 1 TX — $250.00
2. **BP** BH Platinum Hydrafacial: QTY 1 TX — $300.00
3. **BS** BH Signature Hydrafacial: QTY 1 TX — $200.00
4. **BB** Britenol Booster (ADD-ON): QTY 1 TX — $250.00
5. **DB** Dermabuilder Booster (ADD-ON): QTY 1 TX — $250.00
6. **FL** Face LED Light Therapy (ADD-ON): QTY 1 TX — $50.00

### VISUAL MARKERS

- **Monogram color coding** — different colors per product (visual differentiation)
- **(ADD-ON) suffix** in 3 of the 6 product names — explicit naming convention to distinguish standalone products from add-on products
- **"QTY 1 TX"** suffix on every product name — likely "1 transaction" default; suggests Mindbody products have default quantity baked into the name string
- **Price right-aligned** — easy scan for staff

### ARCHITECTURAL OBSERVATIONS

**This is the Products parallel catalog.** Distinct from the Services catalog (Batch 5 Steps 04-05). Knox marker 6 (lines 2598-3721, the canonical settings architecture) describes products as "retail/inventory" alongside services as "client record + service catalog." Concrete evidence: Mindbody maintains TWO separate catalogs — services (bookable) and products (sellable as physical goods OR as service-as-product like the BH HydraFacial Deluxe).

**Critical observation: HydraFacial appears in BOTH catalogs as different primitives:**
- **Services catalog (Batch 5 Step 04):** "BH HydraFacial" listed under "1. Facials" (bookable service)
- **Products catalog (this screen):** "BH Deluxe HydraFacial" / "BH Platinum Hydrafacial" / "BH Signature Hydrafacial" listed as products with QTY 1 TX

This is the **service-as-product pattern** Knox warns about (pre-marker, line 25 of chat): *"service as product or service as service, for botox for example, we might do 20 units here, and then 44 for next person."* User feedback gap #2 also flags this: *"Currently, mind body to my knowledge… we have to use botox as a 'product' so we can specify botox $14/unit then we type in 20 units administered."*

**Mindbody's workaround for variable-quantity services is to model them as products.** A "BH HydraFacial Signature" (Service catalog row) has its own pricing, but if you want to UPSELL during a HydraFacial (e.g., add a Britenol Booster), you go to PRODUCTS, not Services. The Products list contains both:
- Service-as-product variants (BH Deluxe / BH Platinum / BH Signature HydraFacial — same care, three pricing tiers)
- True ADD-ON products (Britenol Booster / Dermabuilder Booster / Face LED Light Therapy)

For OMNI Encounter Container + 4-entity split (Q3): this is concrete evidence that **Mindbody collapses Schedulable Service variants AND Clinical Service variants AND Billable Item pricing tiers AND Resource/Inventory Items into a single "product" catalog**. The collapse is operational debt — staff must remember which catalog to use depending on whether they're booking vs upselling. OMNI should disambiguate.

**For Q1 (encounter container architecture):** the cart already has the entitlement-redeemed BH HydraFacial PAID line. Adding a product (e.g., Britenol Booster) is a NEW Billable Item. If the encounter container model captures planned-vs-rendered, the cart additions ARE the rendered Billable Items being layered onto the planned encounter. OMNI's checkout would naturally surface this without requiring two separate catalogs.

**Search bar with "Name or barcode" placeholder:** confirms barcode scanner integration. Inventory items have SKU/barcode identifiers. For OMNI Resource/Inventory Item entity (Q3): physical inventory must support barcode lookup. This is a system primitive for retail-grade POS (system map "Layer 3 — Deferred / later: full LIMS-level lab coding" mentions inventory POs to vendors as deferred — but barcode lookup is Day 0 retail).

**No category breadcrumb visible** in this view — the user is in "Products" but the breadcrumb isn't shown (it appears in Step 06 row 68 as "Products / Prod: Chemical Peels, ALL"). This implies the Products list is a flat top-level view; sub-categories are revealed via filter/breadcrumb navigation.

---

## Step 06

**File:** `screenshots/Screen Shot 2026-05-13 at 11.54.20 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Browse > Products > Chemical Peels filter (5 peel SKUs, breadcrumb visible)

### TEXT CONTENT (VERBATIM)

```
[Tab strip: BROWSE (active) | FAVORITES]

[Breadcrumb:]
Products  /  Prod: Chemical Peels, ALL

[Search bar:]
🔍 Name or barcode

[Product list:]

PV  Peels (VI PEEL / ADVANCED): QTY 1 TX             $230.00
B   BioRePeel                                         $250.00
PO  Peels (OBAGI / BLUE PEEL, RADIANCE): QTY 1 TX    $125.00
PS  Peels (SKIN TECH / EASY PHYTIC SOLUTION): QTY 1 TX $125.00
PV  Peels (VI PEEL / ORIGINAL): QTY 1 TX             $200.00
PV  Peels (VI PEEL / PRECISION): QTY 1 TX            $230.00 [partial]
```

### UI ELEMENTS (visible)

**Browse > Products > Chemical Peels filter view:**

**Top:**
- Breadcrumb: "Products / Prod: Chemical Peels, ALL"
- Search bar with same Name or barcode placeholder

**Product list (5+ chemical peel products visible):**
1. **PV** Peels (VI PEEL / ADVANCED): QTY 1 TX — $230.00
2. **B** BioRePeel — $250.00 (no QTY suffix; possibly different pricing model)
3. **PO** Peels (OBAGI / BLUE PEEL, RADIANCE): QTY 1 TX — $125.00
4. **PS** Peels (SKIN TECH / EASY PHYTIC SOLUTION): QTY 1 TX — $125.00
5. **PV** Peels (VI PEEL / ORIGINAL): QTY 1 TX — $200.00
6. **PV** Peels (VI PEEL / PRECISION): QTY 1 TX — $230.00 (partial)

### VISUAL MARKERS

- **Breadcrumb format** "Products / Prod: <Subcategory>, <Filter>" — verbose; "Prod:" prefix duplicates "Products" parent; "ALL" filter suffix indicates current sort/filter applied
- **Naming convention** "Peels (BRAND / VARIANT): QTY 1 TX" — heavily structured product names with parens for brand+variant disambiguation
- **BioRePeel** is the outlier — no parens, no QTY 1 TX suffix; suggests a different product class (maybe a unit-based product or a specially-formatted product)

### ARCHITECTURAL OBSERVATIONS

**Product naming conventions reveal multi-vendor catalog management:**
- VI PEEL brand has 3 variants: ADVANCED, ORIGINAL, PRECISION — same brand, different formulations
- OBAGI brand has BLUE PEEL with RADIANCE variant
- SKIN TECH brand has EASY PHYTIC SOLUTION variant
- BioRePeel is a single-formulation product (no variant disambiguation needed)

**This is the canonical "string-encoded variant anti-pattern" repeated** — Batch 5 Step 05 surfaced the same pattern in the Services catalog. Per OMNI doctrine: variants should be typed attributes (`brand: vi_peel | obagi | skin_tech | bio_re_peel` + `formulation: advanced | original | precision | blue_peel | easy_phytic_solution`) rather than encoded in the name string. This unlocks: structured filtering, brand-specific pricing rules, brand-specific contraindications, brand-specific commission rules.

**Cross-references user feedback meta-framing** ("we want to incorporate for our organizational infrastructure to maintain $1B scope, scalability, versatility, and granular precision"): Mindbody's name-encoded variants don't scale. OMNI must structure variants as typed attributes from Day 0.

**Pricing variance across peels ($125-$250):** brand+formulation drives pricing; not duration-driven, not provider-driven, not patient-state-driven (though those would be additional pricing modifiers). For OMNI Billable Item (Q3): pricing is multi-axis (base price per product/service variant + provider premium + duration premium + member discount + promo discount + tax + tip — Knox marker 4 account operations enumerated similar dimensions).

**"Prod:" breadcrumb prefix** is a UX wart — suggests the breadcrumb generation logic prepends "Prod:" before subcategory names (likely a string concatenation that didn't strip the prefix). Operational debt; not architecturally significant. Flagged as Outstanding.

---

## Step 07

**File:** `screenshots/Screen Shot 2026-05-13 at 11.54.37 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Browse > Products > Chemical Peels with BioRePeel ADDED to cart ($250.00 subtotal)

### TEXT CONTENT (VERBATIM)

```
[Tab strip: BROWSE (active) | FAVORITES]

[Breadcrumb: Products / Prod: Chemical Peels, ALL]
[Search bar: 🔍 Name or barcode]

[Product list (same as Step 06):]
PV  Peels (VI PEEL / ADVANCED): QTY 1 TX             $230.00
B   BioRePeel                                         $250.00
PO  Peels (OBAGI / BLUE PEEL, RADIANCE): QTY 1 TX    $125.00
PS  Peels (SKIN TECH / EASY PHYTIC SOLUTION): QTY 1 TX $125.00
PV  Peels (VI PEEL / ORIGINAL): QTY 1 TX             $200.00
[partial: PV Peels (VI PEEL / PRECISION) $230.00 cropped]

[Right column — CART NOW HAS BioRePeel ADDED:]
Wednesday, May 13, 2026
👤 No Sales Rep Assigned

> BH HydraFacial                                  PAID
v BioRePeel                                       $250.00
   None
   Edit | Remove

[Bottom right:]
⊕ Tip       ⊕ Promo

Subtotal                                          $250.00
Tax                                               $0.00
Total                                             $250.00

[Action bar:]
                                                  CHECKOUT $250.00
```

### UI ELEMENTS (visible)

**Same Browse > Products > Chemical Peels view as Step 06**, but cart updated:

**Cart change:**
- BH HydraFacial PAID (collapsed: ▷ caret)
- **BioRePeel** newly added ($250.00, expanded ▽ caret) with sub-line "None" + Edit / Remove links

**Receipt update:**
- Subtotal: $250.00 (was $0.00)
- Tax: $0.00 (no tax applied; possibly tax-exempt category or tax not yet computed)
- Total: $250.00

**Action bar:**
- CHECKOUT $250.00 (now active with the running total)

### VISUAL MARKERS

- **Cart line item state:** BH HydraFacial collapsed (▷); BioRePeel expanded (▽) — newly added items default to expanded
- **"None" sub-line** under BioRePeel — likely the staff-assignment field (Sales Rep / Provider / etc. not yet selected); analogous to "No Sales Rep Assigned" header text
- **Edit + Remove links** under each cart line — Edit opens the item detail panel (Step 08); Remove deletes the line
- **CHECKOUT button** updates dynamically with the running total

### ARCHITECTURAL OBSERVATIONS

**Cart state management is real-time.** Adding a product immediately updates Subtotal + Total + CHECKOUT button. This implies:
1. **Client-side cart state** (probably React/JS-managed) for responsiveness
2. **Server-side cart persistence** at some interval (autosave?) or at checkout-commit
3. **Idempotent add operation** (if a click double-fires, doesn't double-add the item)

For OMNI: the POS cart is a **transient session draft**. Per system map "Layer 1 (correctness when async work fails or repeats)": *"Duplicated webhooks, retried outbound_jobs, or manual replay are normal at scale."* The checkout commit must be idempotent + recoverable.

**"None" placeholder under cart item:** likely the per-line staff/sales-rep attribution. If different items in the cart have different sales reps (e.g., the booster was upsold by the front desk, the primary service was rendered by Angelina), per-line attribution preserves the granularity. For OMNI commission/payroll: per-Billable-Item attribution is required, not per-cart attribution.

**Tax $0.00 anomaly:** Subtotal $250 but Tax $0. Either:
- BioRePeel is tax-exempt (unlikely for retail)
- Tax is computed at checkout commit, not in real-time (more likely — server-side tax engine)
- The cart is in a "draft" state where tax isn't computed yet

For OMNI commerce DL: tax computation lifecycle is its own concern (system map "1I" + tax-engine integration). Display vs computation timing matters for UX honesty.

**Cross-references gap #3 (memberships + subscriptions + POS + retail + gift cards + loyalty rewards weaving):** the cart accumulates heterogeneous line items (PAID entitlement + new product purchase) in one container. Mindbody handles this; OMNI must too. The cart is the **operational unit of commerce composition** within a single encounter.

---

## Step 08

**File:** `screenshots/Screen Shot 2026-05-13 at 11.54.50 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — BioRePeel item detail edit panel (Price + Quantity + Discount + Notes)

### TEXT CONTENT (VERBATIM)

```
[POS PANEL — BioRePeel detail edit overlay]

D  Diana Donlon                                   ▾  ✕

B  BioRePeel

Price                                           $250.00

Quantity
1

Discount percent                       Discount amount
0%                                              $0.00

Notes (optional)
[empty textarea]

[Bottom action bar:]
CANCEL                                            DONE
```

### UI ELEMENTS (visible)

**BioRePeel detail edit panel:**

**Header:** "B  BioRePeel" (monogram + product name)

**Form fields:**
- **Price:** $250.00 (default; editable — may override per-transaction pricing)
- **Quantity:** 1 (default; editable for multi-unit purchases)
- **Discount percent:** 0% (left half of split row)
- **Discount amount:** $0.00 (right half of split row)
- **Notes (optional):** empty textarea

**Action bar:**
- Cancel (left)
- DONE (right, orange/amber — saves edits and returns to cart)

### VISUAL MARKERS

- **Price as editable field** with $ prefix (currency format)
- **Quantity as plain number input**
- **Discount as 2-field split** — percent OR amount (likely XOR — entering one disables the other, OR both can apply with rules)
- **Notes textarea** — free-form per-line item notes (retail-grade UX)

### ARCHITECTURAL OBSERVATIONS

**Per-line item editability** confirms the cart is a **draft compositional structure** where each line item has independent attributes:
- Price (override)
- Quantity (multiplier)
- Discount (modifier — percent or amount)
- Notes (annotations)

For OMNI Billable Item entity (Q3): each cart line is a row with these 4+ fields. For commerce DL (future Phase C): pricing override permission is a capability check (`requireCapability("override_price")`); discount permission is a capability check (`requireCapability("apply_discount")`); both are audited.

**Discount as 2-field split (percent + amount):** likely the staff can apply EITHER a percent OR an amount, OR both stack. UX implies XOR (one zeros the other) but substrate likely supports both with computation rules. For OMNI: discount lifecycle is its own concern — tied to promo codes (separate from per-line discounts), membership tiers (per-customer discounts), retention discounts (CNS-orchestrated). Layer 2 Section G (commerce DL drafting) must scope.

**Cross-references gap #3 (loyalty rewards):** the per-line discount field is where loyalty-reward-redemption could surface. Mindbody handles per-line discounts but the loyalty-substrate integration is TBD (likely via the Promo button or via membership/contract entitlements). OMNI must support both per-line and cart-level discounts with audit.

**"Notes (optional)"** is a per-Billable-Item textarea. Different from the appointment Notes (5-typed-field) seen in Batch 5 Step 06. This is a per-cart-line annotation — could be "applied during HydraFacial visit" or "pre-paid for next month" or any free-text staff note. For OMNI: per-cart-line notes are domain-table data, not narrative-event data — they belong on the order line item domain table, not on patient_timeline_events.

**The pattern: detail edit panel for every cart line item.** Step 13+ (Batch 7) will show the same pattern for service items + contract items. The edit panel is consistent across line types but field set differs (Step 13 will have Sessions / Duration / Active on; Step 14 will have Start date / Duration / Recurring / Pay Now toggle). This implies polymorphic line items with shared base attributes (Price + Quantity + Discount + Notes) + type-specific attributes.

For OMNI commerce DL: cart line items are polymorphic. The base set is shared; the per-type extensions are typed. OMNI's domain-table-discipline applies — each line type (product / service / contract / package / gift-card / account-payment / tip) is its own domain table with shared base columns + type-specific extensions, NOT a single "cart_line" table with a JSON payload.

---

## Cross-references

- **Manifest rows updated:** rows 63, 64, 65, 66, 67, 68, 69, 70 (8 chronological screens in Batch 6); see [mindbody_ingestion_manifest.md](mindbody_ingestion_manifest.md) (manifest update commit follows).
- **Chat navigation map references:**
  - **Marker 1 (line 380, ~321 lines)** — Knox's deconstruction of the appointment action context menu (12 items). Row 63 surfaces all 12 items in one view (Batch 5 Step 06 only saw 7). The 5 NEW items in row 63 vs Batch 5: Checkout / Retail / Apply payment / Reschedule / Groups. Marker 1's central thesis "appointment is workflow object not calendar block" is concretely anchored.
  - **Marker 2 (line 701, ~385 lines)** — Knox's "Day 0 parity = scheduling + checkout + commerce" thesis. Rows 64-70 are the canonical operational evidence for Knox's enumeration: appointment-linked checkout (Step 02 UNPAID + PAID sections), cart building (Steps 02 + 04 + 07), service redemption (Step 02 PAID section), retail/product sale (Steps 04-07 Products), add-on sale (Step 03 Add-on Service flow), package/contract sale (Step 04 Browse > Packages and Browse > Autopays-contracts categories — explored in Batch 7), gift card sale/redemption (Step 04 Browse > Gift Cards category), account payment (Step 04 Browse > Account payments category).
  - **Marker 4 (line 1616, ~537 lines)** — Knox's "Account operations are editable, runnable, and destructive" thesis. The PAID entitlement in Step 02 + the cart's Edit/Remove affordances in Step 07 + the per-line detail edit in Step 08 are concrete evidence: account-side commerce operations are not read-only ledger entries; they are editable, mutable, destructible operational artifacts. OMNI's commerce DL must support the same with audit.
  - **Marker 5 (line 2153, ~445 lines)** — Knox's "service catalog as operational infrastructure" thesis. Step 05 reveals the **dual catalog pattern** (Services AND Products) — Mindbody's service mesh extends into a parallel products mesh. OMNI must reason about catalog-vs-catalog separation (or unification).
- **Pasted text settings cross-refs:**
  - [mindbody_settings_room_requirements_raw.md](mindbody_settings_room_requirements_raw.md) — the 132-service catalog includes services that ALSO appear as Products in Step 05 (BH HydraFacial in Services as bookable; BH Deluxe / BH Platinum / BH Signature HydraFacial in Products as sellable). Cross-catalog redundancy is concrete.
- **User feedback cross-refs:**
  - **Gap #2 (intended visit vs actual treatment, "use botox as a 'product' so we can specify botox $14/unit then we type in 20 units administered")** — Step 05 Products list confirms Mindbody's service-as-product workaround. OMNI Encounter Container with planned-vs-rendered semantics ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1) directly addresses this.
  - **Gap #3 (memberships + subscriptions + POS + retail + gift cards + loyalty rewards woven into experience)** — Step 04 Browse panel surfaces 7 commerce categories covering all of these. Concrete evidence that Mindbody handles the full commerce surface in one POS panel.
  - **Gap #5 (procedure visits vs office visits, "OMNI versatility for sleep labs / cardio / endocrine / plastics")** — Step 02's appointment-linked checkout pattern confirms appointments are the unit of commerce composition. For procedure-heavy specialties (endoscopy, surgery), the same pattern would extend to procedure-room reservations + equipment + assistant-staff + pathology lines (Q2 pressure-test scenario list).
- **Knox synthesis statements to reference in Layer 2:**
  - "appointment is not just a calendar block. It is a workflow object" (marker 1, ~line 395-400) — Step 01 12-item context menu is the canonical anchor
  - "Mindbody Day 0 parity is not just scheduling. It is scheduling + checkout + packages + memberships + payment methods + entitlement redemption + appointment status all fused together" (marker 2, ~line 705-720) — Step 04 7-category browse panel is the canonical anchor
  - "Account operations are editable, runnable, and destructive" (marker 4, ~line 1620-1640) — Step 07 + Step 08 per-line edit/remove pattern is the canonical anchor
- **Supplemental cross-refs (Step 0.5 supplemental files):**
  - [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — Encounter Container architecture, 4-entity split (Schedulable Service / Clinical Service / Billable Item / Resource/Inventory Item). Step 02 cart line items are concrete Billable Items being composed for the encounter. Step 05 Products list reveals the Resource/Inventory Item dimension via "QTY 1 TX" suffix (1-transaction = 1-inventory-decrement).
  - [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 2 — Restaurant POS analogy for planned-vs-rendered. Steps 02-08 are the canonical operational evidence: the planned reservation (HydraFacial 11:00 AM) is not the bill (BH HydraFacial PAID redemption + BioRePeel $250 + future additions = $850 final).
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 — 4-entity split validity is being concretely tested. **Initial finding: 4 entities likely insufficient for full commerce coverage.** Mindbody's 7 commerce categories (Products / Services / Autopays-contracts / Packages / Gift Cards / Account payments / Tips) represent at least 7 distinct primitives. Layer 2 Section G must scope expansion of the commerce DL.
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q4 — mode-per-service-line. The PAID entitlement in Step 02 is **`schedule_required` mode + `entitlement_redeemable` capability** combined — two orthogonal axes. Mode-per-service-line may need decomposition into multiple flags (booking_mode + entitlement_mode + commerce_mode + etc.).
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 — capability flags per brand/clinic. The "No Sales Rep Assigned" placeholder + per-line discount fields imply commission-tracking + discount-override capabilities are required POS substrate features. OMNI's existing capability layer (system map Section 1D / 1D.1 / 1D.2) must support per-action commerce capabilities.

## Outstanding observations / TBD

- **Groups submenu (Step 01 item 12)** — what's inside? Group bookings? Course series? Pricing tiers? Need a Groups submenu screen.
- **Add-on Service flow staff-selection sub-flow** — what happens after Step 03's Service dropdown is filled? Does it constrain the Select staff dropdown to providers eligible for the chosen add-on service? Need follow-up screens.
- **PAID entitlement quantity tracking** — Step 02 says "1 available" — what's the substrate? `client_credits` table? `package_uses` table? `membership_redemptions` table? How is "purchased 04/10/2026" tracked? Need account/entitlement detail screens.
- **CHECKOUT $0.00 vs $250.00 enable/disable behavior** — does Mindbody disable CHECKOUT at $0, or is it always clickable (committing the entitlement application as a $0 transaction)? Need a screen showing CHECKOUT disabled state OR a $0 checkout commit screen.
- **Search bar behavior** ("Name or barcode") — does barcode scanner integration support physical scanners or only manual barcode entry? Need barcode-scan flow screens.
- **Tax computation timing** — Step 07 shows Tax $0.00 with Subtotal $250.00. Is tax computed at checkout commit only? Or is BioRePeel tax-exempt? Need a different cart with tax visible.
- **"Prod:" breadcrumb prefix** (Step 06) — operational debt or feature? Need admin view of breadcrumb settings.
- **Per-line "None" sub-line** (Step 07) — what is "None" referring to? Sales rep? Staff attribution? Need to click into the field.
- **Discount percent + amount XOR vs AND** (Step 08) — does entering one zero the other, OR can both apply? Need a screen with both populated.
- **CHECKOUT commit screen** — what happens after CHECKOUT button click? Payment method selection? Receipt? Email? Print? Need post-checkout screens.
- **Cart abandonment / save behavior** — if the panel is closed mid-flow, is the cart saved? Need cart-restoration or close-with-pending screens.
