# Mindbody — Batch 8 raw capture: POS Checkout completion (Gift Cards / Account payments / Promo / Payment method / Cart zoom / Botox-as-product)

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~1:45 AM UTC-4)
Batch: 8
Feature area(s): `pos_checkout` (continuation), `pos_checkout_payment` (NEW sub-area), `pos_browse_botox` (NEW)
Screenshots covered: 8 (Screen Shot 2026-05-13 at 11.59.15 PM through 2026-05-14 at 12.01.58 AM, chronological)
Chat cross-references:
- Marker 2 (lines 701-1085) — final coverage of all 7 commerce categories from Browse panel; Steps 02-04 cover Gift Cards + Account payments
- Marker 4 (lines 1616-2152) — account operations including Account payments primitive (debit against balance)
- Pre-marker bucket 5 (variable quantity services, ~line 270-280) — Step 08 Botox-in-Products is the canonical concrete instance: *"Variable quantity services (Botox: appointment type + units used + product lot + provider + body-face region + price per unit + discount-membership-promo + treatment note + before-after + inventory decrement + follow-up cadence; scheduler + POS + clinical treatment cannot be one flat service row)"* — Mindbody's workaround: Botox as Product with subscription unit-bundles
Supplemental cross-references (Step 0.5):
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — 4-entity split: Step 08 Botox-in-Products is the most concrete evidence for Mindbody's failure to separate Schedulable Service / Clinical Service / Billable Item / Resource/Inventory Item
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 — confirmed: Botox subscription tiers (80/160/200/256 units at $800/$1560/$1900/$2368) are package-like (bulk units at tiered pricing) but stored as Products. Operational debt; OMNI Encounter Container with planned-vs-rendered + variable Billable Item lines is the correct model.

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-13 at 11.59.15 PM.png`
**URL:** (same — `mainappointments/index`; POS overlay)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Peels (VI PEEL / PURIFY) QTY 3-Pack package detail SCROLLED (full 3 items visible with 15% / $34.50 each)

### TEXT CONTENT (VERBATIM)

```
[POS PANEL — Package detail edit (scrolled showing all 3 items)]

D  Diana Donlon                                   ▾  ✕

▾ Package items

   Peels (VI PEEL / PURIFY): QTY 1 TX               $230.00
   Discount percent             Discount amount
   15%                          $34.50

   Peels (VI PEEL / PURIFY): QTY 1 TX               $230.00
   Discount percent             Discount amount
   15%                          $34.50

   Peels (VI PEEL / PURIFY): QTY 1 TX               $230.00
   Discount percent             Discount amount
   15%                          $34.50

[Action bar: CANCEL  DONE]
```

### UI ELEMENTS (visible)

**Same package detail as Batch 7 Step 09**, scrolled to show all 3 Package items. Confirms: 3-Pack = exactly 3 enumerated child items, each with identical pricing + discount fields.

### ARCHITECTURAL OBSERVATIONS

**Confirms substrate model**: Package = parent + 3 enumerated children with shared schema. Per-item override allowed (could change item 2's discount to 20% while keeping items 1+3 at 15%) — granular accounting.

For OMNI commerce DL (Q3 expansion): `service_package` parent + `service_package_item` child. Each child has independent state (redemption_status, redeemed_at, redeemed_against_encounter_id, etc.). Per-item lifecycle is the substrate truth; package-level aggregation is a derived view.

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-13 at 11.59.34 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Browse > Gift Cards (2 options: 100.00 Gift Card $100 value + Gift card custom amount $0.00 value)

### TEXT CONTENT (VERBATIM)

```
[Tab strip: BROWSE (active) | FAVORITES]

Gift Cards

100  100.00 Gift Card                                $100.00
     $100.00 value

GC   Gift card (custom amount)                       $0.00
     $0.00 value

[Right column: cart now 6 items; Subtotal $1,699 / Discount ($103.50) / Tax $0 / Total $1,595.50]
```

### UI ELEMENTS (visible)

**Browse > Gift Cards subcategory:**
- **100.00 Gift Card** — $100 sale price, $100 face value (1:1 sale-to-value, no markup/markdown)
- **Gift card (custom amount)** — $0 sale price placeholder, $0 default value (staff enters amount)

Right column shows cart now displaying the **Discount line** explicitly: Subtotal $1,699 - Discount $103.50 = Total $1,595.50. The Peels package's per-item discount aggregates into a cart-level Discount line.

### ARCHITECTURAL OBSERVATIONS

**Gift Cards are stored-value entities** with two purchase patterns:
1. **Fixed-denomination gift card** ($100 sale = $100 value; preset SKU)
2. **Custom-amount gift card** (variable sale price = variable value)

**For OMNI commerce DL (Q3 expansion):**
- `gift_card_definition` (template) — sale_price_policy: fixed | custom; face_value_policy: equal_to_sale | configurable
- `gift_card_instance` (each sold gift card) — gift_card_number, original_face_value, current_balance, transferable_to, expiration_policy, redemption_history
- 1-to-many: `gift_card_redemption` events tracking each application against a cart

**Cart-level Discount aggregation:** the cart now shows a Discount line ($103.50) below Subtotal. This is the AGGREGATE of all per-line item discounts. The substrate likely:
- Per-line discount stored on each line item (per Batch 7 Step 09 finding)
- Cart-level Discount line is computed/displayed (sum of per-line discounts)
- May ALSO support cart-level discounts independent of line items (e.g., "20% off entire cart") via promo codes

For OMNI commerce DL: discount lifecycle has multiple sources (per-line override + package-derived + cart-level promo + member-tier discount). Each source contributes to a final discount; the substrate must capture sources for refund/audit.

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-13 at 11.59.50 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Gift card detail ($100.00 Gift Card with number input + Get random number + Look up card balance)

### TEXT CONTENT (VERBATIM)

```
[POS PANEL — Gift card detail]

D  Diana Donlon                                   ▾  ✕

100  100.00 Gift Card

[Empty input field, blue border:]
Gift card number

[Two link options below input:]
Get random number          Look up card balance

[Action bar: CANCEL  DONE]
```

### UI ELEMENTS (visible)

**Gift card sale detail:**
- **Gift card number** input (empty, focused with blue border)
- **Get random number** link (auto-generates a unique gift card number)
- **Look up card balance** link (looks up an EXISTING gift card's balance — implies Gift Cards is a dual-purpose surface: SELL new + LOOK UP existing)

### ARCHITECTURAL OBSERVATIONS

**Gift card number is staff-assignable.** Either:
- Auto-generated (Get random number link)
- Manually entered (e.g., physical card with pre-printed number)

This implies Mindbody supports BOTH digital-only gift cards (auto-generated number, email/SMS delivery) AND physical-card gift cards (printed numbers). Substrate must support both.

**"Look up card balance" link in the SELL surface** is a UX shortcut — staff might be selling a gift card OR looking up balance for redemption. Mindbody collapses both into the same panel.

For OMNI commerce DL: gift card lifecycle requires:
- `gift_card_number` (unique, indexed for lookup)
- `is_physical_card` boolean (controls delivery flow)
- `current_balance` (decrements on redemption, increments on top-up if supported)
- `last_balance_check_at` (audit for "look up balance" actions, per system map's audit_events doctrine)

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-14 at 12.00.18 AM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Browse > Account payments (1 option: Payment on Account $0.00)

### TEXT CONTENT (VERBATIM)

```
[Tab strip: BROWSE (active) | FAVORITES]

Account payments

PO   Payment on Account                              $0.00

[Right column: cart unchanged from Step 02 — 6 items, $1,595.50 Total]
```

### UI ELEMENTS (visible)

**Browse > Account payments subcategory** — only 1 option visible:
- **PO** Payment on Account — $0.00 placeholder (staff enters amount)

### ARCHITECTURAL OBSERVATIONS

**Account payments primitive:** debit against an existing balance, NOT a purchase of an item. Confirms:
- Patient may have an account balance (positive = credit; negative = owed)
- Account payment is the surface for paying down owed balance
- Distinct from purchasing a gift card (which adds to gift card balance) and distinct from contract billing (which charges per recurring schedule)

**For OMNI commerce DL (Q3 expansion):** `account_payment` is its own commerce primitive (the 7th confirmed). Lifecycle is simple: amount entered → applied to balance → balance updated → audit event emitted.

This completes the **7 commerce categories** Knox marker 2 enumerates: Products / Services / Autopays-contracts / Packages / Gift Cards / Account payments / Tips. All visible in the POS Browse surface across Batches 6-8.

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-14 at 12.00.38 AM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Promo code overlay (single field input)

### TEXT CONTENT (VERBATIM)

```
[POS PANEL — Promo code overlay]

D  Diana Donlon                                   ▾  ✕

Promo code

[Empty input:]
Promo code

[Action bar: CANCEL  DONE]
```

### UI ELEMENTS (visible)

**Promo code modal** (likely opened from "+ Promo" button in cart's right column):
- Single field: Promo code (alphanumeric input)
- Cancel + DONE action bar

### ARCHITECTURAL OBSERVATIONS

**Promo code as a cart-level discount mechanism**, distinct from per-line discounts.

**For OMNI commerce DL:**
- `promo_code` entity (alphanumeric code, validity window, usage limits, eligible-services constraints, member-tier eligibility, discount type [percent | amount | fixed-price-override], discount value)
- `promo_code_usage` (each application of a code; audited per cart)
- Validation on apply: code valid? not-expired? cart eligible? user eligible?
- Single-use vs multi-use vs single-per-customer policies

Combined with per-line discounts + member-tier discounts + package-derived discounts, OMNI's discount lifecycle is multi-source. Substrate must capture each source for refund/audit/reporting.

---

## Step 06

**File:** `screenshots/Screen Shot 2026-05-14 at 12.00.54 AM.png`
**URL:** (same)
**Feature area:** `pos_checkout_payment`
**Inferred screen title:** **CHECKOUT — Payment method selection screen** (NEW sub-area; first post-CHECKOUT-button screen)

### TEXT CONTENT (VERBATIM)

```
[POS PANEL — Payment method selection (post-CHECKOUT click)]

D  Diana Donlon                                   ▾  ✕

[Left column — cart summary (read-only, finalized for payment):]
Wednesday, May 13, 2026
👤 No Sales Rep Assigned

BH HydraFacial                                    PAID
BioRePeel                                         $250.00
Medical Weight Loss (Initial Visit)               $300.00
BH HydraFacial - Platinum                         $300.00
BH+ | Elite                                       $159.00
Peels (VI PEEL / PURIFY): QTY 3...                $690.00
   Discount                                       ($103.50)

Subtotal                                          $1,699.00
Discount                                          ($103.50)
Tax                                               $0.00

[Bottom-left: ‹ Cart link to return to cart edit]

[Center-right column — payment method picker:]
[Credit card icon]
$1,595.50
Choose an autopay method

[Card Reader option (large, centered):]
[Card reader icon]
Card Reader
Credit/debit

[3 smaller options below in row:]
[icon] Swipe card        [icon] Enter card        [icon] Visa 6345        [icon] Account
        Credit/debit             Credit/debit              [card on file]            $0.00
```

### UI ELEMENTS (visible)

**Payment method selection screen** (first post-CHECKOUT screen):

**Left column:** Final cart summary (read-only) showing all 6 line items + Subtotal $1,699 / Discount ($103.50) / Tax $0 / **implicit Total $1,595.50**.
- "‹ Cart" back link to return to cart edit mode

**Center-right column:** Payment method picker:
- Header: $1,595.50 + "Choose an autopay method"
- **Card Reader** (primary, centered) — physical card reader integration
- 4 secondary options in a row:
  - **Swipe card** (Credit/debit)
  - **Enter card** (Credit/debit; manual key entry)
  - **Visa 6345** (saved card on file — last 4)
  - **Account $0.00** (account balance — currently $0, so disabled)

### ARCHITECTURAL OBSERVATIONS

**Payment method picker reveals 5 distinct payment paths:**
1. **Card Reader** — physical NFC/chip terminal integration (Mindbody-issued or third-party hardware)
2. **Swipe card** — magstripe via attached reader
3. **Enter card** — manual key entry (highest-risk; PCI considerations)
4. **Saved card on file** (Visa 6345) — tokenized previously-stored card; displayed by last-4 + brand
5. **Account balance** — debit against existing positive balance

For OMNI commerce DL + payment rail integration (system map "1I" Section + 1I.4-1I.5 capability matrix):
- Each payment path has different audit pattern, fraud surface, PCI scope, rail provider
- "Account balance" is a SUBSTRATE concept (account_balance domain table); the others are RAIL concepts (external payment processor)
- Saved cards require token storage + revocation lifecycle
- Card Reader requires hardware lease/integration

**"Choose an autopay method" header** is interesting — labels the payment method as for "autopay" not just "payment." This suggests the primary card chosen here may also be saved as the on-file autopay card for future contract billing. Mindbody is implicitly bundling: today's payment method + future autopay method.

For OMNI: per system map's "1I.6 idempotency" + "1I.4-1I.5 capability matrix" — payment lifecycle requires:
- One-time payment vs autopay-card-update as distinct operations
- User consent capture for storing/reusing payment methods
- PCI-compliant tokenization
- Audit per payment attempt (succeeded / failed / cancelled / refunded)

**"$1,595.50" displayed prominently** but "Subtotal $1,699 / Discount ($103.50) / Tax $0" not summing to $1,595.50 directly... wait, $1,699 - $103.50 = $1,595.50. Total IS displayed implicitly via the prominent number. Layout decision: total is the biggest visual element on this screen.

**Visa 6345 as a card-on-file** confirms tokenized card storage. For OMNI: per system map "Layer 1 (money + events)" + "1I.4-1I.5" — payment adapter integration must support card tokenization with PCI-compliant scope minimization.

---

## Step 07

**File:** `screenshots/Screen Shot 2026-05-14 at 12.01.20 AM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** Cart panel zoomed (zoomed-in view of cart right column — cart shrank to $1,345.50)

### TEXT CONTENT (VERBATIM)

```
[Far-right cropped portion of POS panel showing cart only:]
Wednesday, May 13, 2026
👤 No Sales Rep Assigned

> BH HydraFacial                                  PAID
v Medical Weight Loss (Initial ...                $300.00
   Edit | Remove
> BH HydraFacial - Platinum                       $300.00
> BH+ | Elite                                     $159.00
> Peels (VI PEEL / PURIFY): QT...                 $690.00
     Discount                                      ($103.50)

⊕ Tip       ⊕ Promo

Subtotal                                          $1,449.00
Discount                                          ($103.50)
Tax                                               $0.00
Total                                             $1,345.50

CHECKOUT $1,345.50

[Faint left side: empty FAVORITES tab + 7 empty list items (Browse list with no items shown)]
```

### UI ELEMENTS (visible)

**Same POS cart panel**, zoomed-in view showing 5 items now (was 6 in Step 06; **BioRePeel was removed**, dropping cart from $1,595.50 to $1,345.50). 

User likely cancelled out of payment screen, removed BioRePeel, and is reviewing.

### ARCHITECTURAL OBSERVATIONS

**Cart edits are non-destructive within session.** User backed out of payment, removed an item, and the cart updated. Confirms:
- Cart state is transient draft (per system map domain-table-discipline)
- Removal is a soft operation (no audit entry needed for in-cart edits, only at commit)
- Recompute is automatic (Subtotal updated from $1,699 to $1,449)

For OMNI commerce DL: cart state management is a session-level concern; only commits write to domain tables.

---

## Step 08

**File:** `screenshots/Screen Shot 2026-05-14 at 12.01.58 AM.png`
**URL:** (same)
**Feature area:** `pos_browse_botox` (special focus for user feedback gap #2 anchor)
**Inferred screen title:** **POS — Browse > Products with "botox" search (CRITICAL: Botox in Products catalog confirmed)** — 5 Botox results (1 unit + 4 subscription tiers)

### TEXT CONTENT (VERBATIM)

```
[Tab strip: BROWSE (active) | FAVORITES]

Products

[Search bar:]
🔍 botox

[Search results (5 visible):]

BQ   Botox (Qty 1 Unit)                              $14.00

BS   Botox Subscription | 160 Units                  $1,560.00

BS   Botox Subscription | 200 Units                  $1,900.00

BS   Botox Subscription | 256 Units                  $2,368.00

BS   Botox Subscription | 80 Units                   $800.00

[Right column — cart shrank further to:]
> BH HydraFacial                                  PAID
> Peels (VI PEEL / PURIFY): QT...                 $690.00
     Discount                                       ($103.50)

⊕ Tip       ⊕ Promo

Subtotal                                          $690.00
Discount                                          ($103.50)
Tax                                               $0.00
Total                                             $586.50

CHECKOUT $586.50
```

### UI ELEMENTS (visible)

**POS Browse > Products with active search "botox":**

**5 Botox-related products:**
1. **BQ** Botox (Qty 1 Unit) — $14.00 (per-unit pricing — the "service-as-product" workaround)
2. **BS** Botox Subscription | 160 Units — $1,560.00 ($9.75/unit — bulk discount)
3. **BS** Botox Subscription | 200 Units — $1,900.00 ($9.50/unit)
4. **BS** Botox Subscription | 256 Units — $2,368.00 ($9.25/unit)
5. **BS** Botox Subscription | 80 Units — $800.00 ($10.00/unit)

Bulk-tier pricing pattern: per-unit price decreases as bundle size increases ($14 retail → $9.25 at 256-unit tier).

Cart shrank further to $586.50 (only BH HydraFacial PAID + Peels VI PEEL PURIFY $690 with $103.50 discount remain).

### ARCHITECTURAL OBSERVATIONS

**THIS IS THE CANONICAL ANCHOR for user feedback gap #2.** User explicitly stated: *"Currently, mind body to my knowledge… we have to use botox as a 'product' so we can specify botox $14/unit then we type in 20 units administered."* Confirmed: Botox lives in the Products catalog (NOT in Services), with:
- 1-unit retail price ($14)
- Bulk-tier subscription products (80 / 160 / 200 / 256 units at progressively-discounted per-unit pricing)

**Cross-references Knox pre-marker bucket 5 (variable-quantity services):**
> *"Variable quantity services (Botox: appointment type + units used + product lot + provider + body-face region + price per unit + discount-membership-promo + treatment note + before-after + inventory decrement + follow-up cadence; scheduler + POS + clinical treatment cannot be one flat service row)"*

**Mindbody's "subscription" naming for bulk-unit products is misleading** — these are NOT recurring subscriptions. They're **prepaid bulk-unit packages**. The "Subscription" label is a Mindbody convention for pre-paid bulk service consumption, not for recurring billing. Confusing operational debt.

**For OMNI Encounter Container ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1) + Q1 + Q3:** Knox's 4-entity split is concretely tested here:
- **Schedulable Service:** "Consultation - Aesthetic Injector" (the booking) — Batch 5 Step 04 catalog
- **Clinical Service:** "Botox 36 units administered to forehead/glabella with provider Dr. X using product lot Y" — NOT a single catalog row in Mindbody; reconstructed from notes + product line items
- **Billable Item:** "Botox (Qty 1 Unit) × 36 = $504" OR "Botox Subscription | 80 Units (1 prepaid bundle)" — Mindbody collapses this into Products
- **Resource/Inventory Item:** Botox vial decremented per unit administered — Mindbody decrements via "QTY 1 TX" semantics on the product

**The OMNI fix per Encounter Container architecture:**
- Booking creates Encounter (planned: Aesthetic Injector consultation)
- At checkout, staff opens Encounter, adds variable-quantity Clinical Service line (Botox)
- Clinical Service line has typed attributes: substance + units + provider + body_region + product_lot + before_after_photos
- Billable Item line is computed from Clinical Service: 36 units × $14 = $504, OR redeemed against prepaid bundle (decrement bundle's remaining units by 36)
- Resource/Inventory Item decrements vial inventory by 36 units (with lot tracking for FDA recall compliance)

This is the **clinical commerce gap** that Mindbody can't resolve cleanly. OMNI's encounter-with-multiple-line-types substrate handles it natively.

**Bulk-unit subscription pricing tier pattern:**
- 1 unit: $14
- 80 units: $10/unit (29% off retail)
- 160 units: $9.75/unit (30% off)
- 200 units: $9.50/unit (32% off)
- 256 units: $9.25/unit (34% off)

For OMNI commerce DL: variable-quantity prepaid-bundle pricing is a substrate concern. Bundle can be:
- Per-unit (sold in N-unit bundles)
- Per-session (sold in N-session bundles like Batch 7 Step 09 Peels 3-Pack)
- Per-time-period (sold for X days/months access)

All three patterns exist; substrate must support each.

**For Layer 2 Section I (OMNI competitive moats):** clean separation of Schedulable Service / Clinical Service / Billable Item / Resource-Inventory Item is THE differentiating moat for clinical-grade commerce. Mindbody's collapse forces operational workarounds (Botox-as-product, "Subscription" mislabeling, separate Services + Products catalogs with overlap). OMNI's clean separation enables: clinical compliance (FDA recall by lot), accurate analytics (units administered per provider per body region), bundle redemption (decrement remaining bundle units after each visit), unit-margin tracking, and variable-quantity pricing without taxonomy gymnastics.

---

## Cross-references

- **Manifest rows updated:** rows 80, 81, 82, 83, 84, 85, 86, 87 (8 chronological screens in Batch 8); see [mindbody_ingestion_manifest.md](mindbody_ingestion_manifest.md).
- **Chat navigation map references:**
  - Marker 2 (lines 701-1085) — final coverage of all 7 commerce categories from Knox enumeration. Steps 02-04 cover the remaining (Gift Cards / Account payments) categories not yet seen in Batches 6-7.
  - Marker 4 (lines 1616-2152) — account operations: Step 04 Account payments + Step 06 payment method picker (saved card on file = tokenized payment account operation)
  - Pre-marker bucket 5 (~line 270-280, variable quantity services) — Step 08 Botox-in-Products is THE canonical concrete anchor
  - Pre-marker bucket 6 (~line 280-300, add-ons own logic) — implicit: variable-unit Botox is structurally a per-visit add-on with quantity, even though Mindbody models it as a Product
- **Pasted text settings cross-refs:** none new for this batch
- **User feedback cross-refs:**
  - **Gap #2 (intended visit vs actual treatment, Botox-as-product):** Step 08 IS THE CANONICAL ANCHOR. User's exact quote *"we have to use botox as a 'product' so we can specify botox $14/unit then we type in 20 units administered"* is concretely visible: Botox (Qty 1 Unit) $14.00 row + 4 bulk-tier "Subscription" rows. Mindbody's workaround for variable-quantity services in operational form.
  - **Gap #3 (memberships + subscriptions + POS + retail + gift cards + loyalty rewards weaving):** all 7 categories now confirmed. Step 02 Gift Cards + Step 04 Account payments complete the enumeration.
- **Knox synthesis statements to reference in Layer 2:**
  - Pre-marker bucket 5: "Variable quantity services... scheduler + POS + clinical treatment cannot be one flat service row" — Step 08 is the canonical anchor
  - Marker 2: enumeration of 7 commerce primitives — complete after this batch
- **Supplemental cross-refs (Step 0.5):**
  - [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — Encounter Container 4-entity split: Step 08 Botox-in-Products is THE concrete failure mode of Mindbody's flat appointment+service+product modeling
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 — bulk-unit product naming "Subscription" but they are actually prepaid bundles (not recurring); operational debt; OMNI Encounter Container with variable Billable Item lines is the clean model

## Outstanding observations / TBD

- **CHECKOUT commit completion screen** — what happens after Card Reader / Swipe / Enter card / Saved card click? Receipt screen? Email/print? Need post-payment screens.
- **"Choose an autopay method" header** — does the chosen card become the saved autopay method for future contract billing? Need post-payment view of patient's payment methods.
- **Account balance** — Step 06 shows "Account $0.00" disabled; what happens when patient has positive balance? Need a screen with positive account balance.
- **Promo code application UX** — Step 05 just shows the input; what happens after entering a code? Validation feedback? Discount applied to which line items? Need post-promo-apply screens.
- **Gift card usage flow** — Step 03 shows the SELL surface; how is a gift card USED at checkout? Need redemption flow screens.
- **Botox bulk-tier purchase commit** — when Botox Subscription | 80 Units is added to cart and purchased, what's the post-purchase substrate state? A balance of 80 units? An entitlement record? How is unit-decrement tracked? Need account-view-after-purchase screens.
- **Cart abandonment/save** — user cancelled out of payment, removed items. Was the previous cart state lost? Or recoverable? Need cart-restore or cart-state-persistence screens.
- **Refund flow** — none seen yet; need post-purchase refund screens.
- **Receipt format** — receipt format (printed / emailed / shown) not yet seen; need post-checkout receipt.
