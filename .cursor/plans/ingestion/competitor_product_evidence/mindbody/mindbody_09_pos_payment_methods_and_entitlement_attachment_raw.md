# Mindbody — Batch 9 raw capture: POS payment composition (23 payment methods) + split payment + appointment entitlement-attachment view

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~2:00 AM UTC-4)
Batch: 9
Feature area(s): `pos_checkout_payment` (continuation), `appointments_detail_edit` (revisit with new tab)
Screenshots covered: 7 (Screen Shot 2026-05-14 at 12.02.19 AM through 12.05.05 AM, chronological)
Chat cross-references:
- Marker 2 (lines 701-1085) — "checkout + payment methods + entitlement redemption" — Step 02-04 surfaces the FULL 23-payment-method ecosystem; Step 07 shows entitlement attachment to appointment
- Marker 4 (lines 1616-2152) — "active contract/autopay actions" — entitlement view in Step 07 is the buyer-side entitlement-state view (1 of 1 remaining; Exp 04/10/2027)
- Pre-marker bucket 5 (variable quantity services) — Step 01 shows the OPERATIONAL execution: Botox (Qty 1 Unit) at Quantity 20 = $280 charged. User's gap #2 quote enacted.
Supplemental cross-references:
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — 4-entity split: Step 07 entitlement-attachment shows the Schedulable Service (BH HydraFacial appointment) with attached Billable Item (BH HydraFacial - Signature entitlement, redeemable). Pristine concrete instance.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 — payment methods are an 8th+ commerce primitive (or actually a separate concern from the 7 cart categories — payment is the DISCHARGE of a cart, not a cart item)

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-14 at 12.02.19 AM.png`
**Feature area:** `pos_checkout` (Botox detail with Qty=20 entered)
**Inferred screen title:** Botox (Qty 1 Unit) detail edit — Quantity = 20 entered (concrete enactment of user feedback gap #2 workaround)

### TEXT CONTENT (VERBATIM)

```
[Item detail edit panel, larger view than Batch 6/7 detail panels:]

D  Diana Donlon                                   ─  ✕

BQ  Botox (Qty 1 Unit)

Price                                           $14.00

Quantity
20

Discount percent             Discount amount
0%                            $0.00

Notes (optional)
[empty textarea]

[Action bar: CANCEL  DONE]
```

### ARCHITECTURAL OBSERVATIONS

**THIS IS THE LIVE ENACTMENT of user feedback gap #2.** User's exact words: *"we have to use botox as a 'product' so we can specify botox $14/unit then we type in 20 units administered."* This screen IS that workflow:
- Botox (Qty 1 Unit) as the Product line
- Price $14.00 per unit
- **Quantity = 20** (entered by staff to specify 20 units administered)
- Computed line total: $14 × 20 = $280

Mindbody has NO native concept of "Botox 36 units administered to forehead by Provider X using lot Y" as a single Clinical Service line. Staff must manually:
1. Select Botox (Qty 1 Unit) Product (mental gymnastics: Botox is structurally a service, but stored as a product)
2. Enter Quantity = 20 (no field for substance + body region + lot tracking + before/after photos)
3. Add staff-only Notes (free-text annotation; not structured for clinical reporting)

**For OMNI Encounter Container (per [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1):** the encounter would have a structured Clinical Service line with typed attributes (substance: botox; units: 20; body_region: forehead; product_lot: ABC123; provider_id: ...; before_photo: ...; after_photo: ...). The Billable Item line would derive from the Clinical Service line (20 × $14 = $280). The Resource/Inventory Item decrement (vial inventory) would derive automatically. **All from one structured input, not a Product workaround.**

For Layer 2 Section I (OMNI competitive moats): clinical-grade structured commerce IS the moat. Mindbody's flat model forces operational debt; OMNI's encounter container resolves it.

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-14 at 12.02.43 AM.png`
**Feature area:** `pos_checkout_payment`
**Inferred screen title:** **CHECKOUT — Payment method picker EXPANDED** (cart now $866.50 — Botox added; 8 payment methods visible top-of-list)

### TEXT CONTENT (VERBATIM)

```
[Left column — final cart summary (read-only):]
Wednesday, May 13, 2026
👤 No Sales Rep Assigned

BH HydraFacial                                    PAID
Peels (VI PEEL / PURIFY): QTY 3...                $690.00
   Discount                                       ($103.50)
20 x Botox (Qty 1 Unit)                           $280.00

Subtotal                                          $970.00
Discount                                          ($103.50)
Tax                                               $0.00

[Bottom-left: ‹ Cart link]

[Center-right column — payment methods picker:]

[Card icon centered]
$866.50
Choose a payment method

[Card Reader (large primary):]
[reader icon] Card Reader
              Credit/debit

[4 secondary options row 1:]
[icon] Swipe card    [icon] Enter card    [icon] Visa 6345    [icon] Cash
       Credit/debit          Credit/debit          [card on file]

[4 secondary options row 2:]
[icon] Account       [icon] Gift card     [icon] Check        [icon] Other Payment
       $0.00                                                   
```

### UI ELEMENTS (visible)

**CHECKOUT payment screen with CART containing Botox 20 units.**

**Cart:** 3 line items (BH HydraFacial PAID + Peels VI PEEL PURIFY $690 minus $103.50 discount + 20 × Botox Qty 1 Unit at $280) = Subtotal $970, Discount ($103.50), Tax $0, Total $866.50.

**"20 x Botox (Qty 1 Unit) $280.00"** — line label format reveals: Mindbody renders quantity-multiplied product as "<N> x <product_name>" with the $280 = total (not unit price). UX shows aggregated cost.

**Payment methods (8 visible in this view):**
1. **Card Reader** (primary, centered, larger) — Credit/debit
2. **Swipe card** — Credit/debit (magstripe)
3. **Enter card** — Credit/debit (manual entry)
4. **Visa 6345** — saved card on file
5. **Cash** — physical cash payment
6. **Account** ($0.00) — debit against patient's account balance (currently $0; disabled)
7. **Gift card** — gift card redemption
8. **Check** — paper check
9. **Other Payment** — generic catch-all

This is a SUPERSET of Step 06 in Batch 8 (which only showed 5 payment methods because "Account" was the last one shown before scroll).

### ARCHITECTURAL OBSERVATIONS

**Different cart contents reveal more payment methods.** The Step 06 (Batch 8) view showed 5 methods; this view shows 9+ visible. Either:
- Mindbody renders payment options dynamically based on cart total / cart contents
- Or the Step 06 view was a different rendering mode (mobile-vs-desktop? simplified-vs-full?)

For OMNI commerce DL: payment method availability is a runtime computation (eligible payment methods per cart per patient per brand) — substrate must support. Some payment methods may be restricted (e.g., CareCredit only for >$200 cart; Gift Card only if patient has a gift card).

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-14 at 12.02.58 AM.png`
**Feature area:** `pos_checkout_payment`
**Inferred screen title:** **CHECKOUT — Payment method picker SCROLLED (medical financing + 3rd-party tier visible)**

### TEXT CONTENT (VERBATIM)

```
[Same cart on left]

[Center-right column — payment methods (scrolled to show row 3 + row 4 visible):]

Row 3:
[icon] Account       [icon] Gift card     [icon] Check        [icon] Other Payment
       $0.00

Row 4:
[icon ←→] CareCredit  [icon ←→] GreenSky  [icon ←→] Allē      [icon ←→] Treatment Dep...

Row 5:
[icon ←→] Venmo       [icon ←→] Pre-Paid  [icon ←→] PayPal    [icon ←→] Zelle
```

### ARCHITECTURAL OBSERVATIONS

**Medical financing tier (Row 4):**
- **CareCredit** — major medical financing platform (Synchrony Bank); patient applies, gets approved, OMNI/Mindbody calls CareCredit API for approval/charge
- **GreenSky** — Goldman Sachs medical financing
- **Allē** — Allergan brand loyalty/financing program (the manufacturer of Botox/Juvederm/Latisse) — couples to medspa BUYER LOYALTY for Allergan products specifically
- **Treatment Dep...** (truncated; likely "Treatment Deposit") — non-financing; partial payment toward future treatment

**Digital/peer-to-peer payment tier (Row 5):**
- Venmo, PayPal, Zelle — peer-to-peer payment apps
- **Pre-Paid** — pre-paid card or pre-paid balance (not patient account; some other prepaid mechanism)

**For OMNI commerce DL + payment rail integration (system map "1I.4-1I.5 capability matrix"):** each external payment method is a separate adapter with its own:
- API integration / webhook contract
- Consent capture flow
- Refund/cancellation rules
- Reconciliation cadence
- Failure modes
- Audit trail

The medical financing tier (CareCredit / GreenSky / Allē / Cherry [Step 04]) is particularly significant for medspa — these are the financing rails that unlock larger purchases (e.g., $5000 laser package financed over 24 months). For OMNI: medical financing rail integration is a Day 1 Phase C concern for medspa.

**Allē is a particularly interesting integration:** it's not just financing, it's a brand-coupling loyalty program. Allergan rewards dollars (earned by Allē enrollees from prior Allergan purchases) can be applied at checkout. This is **3rd-party brand-loyalty redemption** — a COMPLETELY new commerce primitive vs gift cards / promo codes / discounts. For OMNI: brand-loyalty integration is a future Phase C concern; surfaces in clinical commerce because Allergan products (Botox, Juvederm, Latisse) are core medspa inventory.

**ClassPass (Step 04):** 3rd-party fitness/wellness aggregator that offers credits for participating studios. Mindbody's Classes/Courses primitive (Batch 7 Step 01) couples to ClassPass natively. Less relevant for medical-only practices but matters for hybrid wellness clinics.

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-14 at 12.03.10 AM.png`
**Feature area:** `pos_checkout_payment`
**Inferred screen title:** **CHECKOUT — Payment method picker FULL SCROLL (rows 6+ with brand-loyalty + new-patient-special + ClassPass + Referral Discount)**

### TEXT CONTENT (VERBATIM)

```
[Same cart on left]

[Center-right column — payment methods (scrolled to show rows 5-7+):]

Row 5: Venmo / Pre-Paid / PayPal / Zelle (continued from Step 03)

Row 6:
[icon ←→] Aspire     [icon ←→] Cherry    [icon ←→] BH+ Member Di...    [icon ←→] New Patient Sp...

Row 7:
[icon ←→] ClassPass  [icon ←→] Referral Discount
```

### ARCHITECTURAL OBSERVATIONS

**Brand-loyalty + clinic-specific tier (Row 6):**
- **Aspire** — Galderma's brand loyalty program (Sculptra, Restylane, Dysport — competitor/sibling to Allergan's Allē)
- **Cherry** — medical financing focused on aesthetic/dental
- **BH+ Member Di...** (BH+ Member Discount) — clinic-specific member discount mechanism applied at payment time (vs as a cart-level promo)
- **New Patient Sp...** (New Patient Special) — first-visit promotion mechanism

**3rd-party + Referral tier (Row 7):**
- **ClassPass** — fitness/wellness aggregator
- **Referral Discount** — referrer-based discount mechanism

**Total payment methods enumerated across rows 1-7 (Steps 02-04): ~23**

This count is staggering for a single-clinic POS system. It reveals Mindbody handles:
- 4 payment-rail variants (Card Reader / Swipe / Enter card / Saved card)
- 1 paper-method (Cash + Check)
- 1 patient-account (Account)
- 1 clinic-issued-balance (Gift card)
- 1 catch-all (Other Payment)
- 4 financing rails (CareCredit / GreenSky / Cherry / Treatment Deposit)
- 2 brand-loyalty (Allē Allergan + Aspire Galderma)
- 4 digital wallets (Venmo / PayPal / Zelle / Pre-Paid)
- 2 clinic-loyalty (BH+ Member Discount + Referral Discount + New Patient Special)
- 1 3rd-party platform (ClassPass)

**= 4 + 1 + 1 + 1 + 1 + 1 + 4 + 2 + 4 + 3 + 1 = 23 distinct types**

**For OMNI commerce DL (future Phase C):** payment methods are NOT a unified abstraction. They are a federation of integrations with vastly different lifecycle, audit, fraud, refund, and consent semantics. The substrate must support:
- Payment method enumeration as a configurable per-clinic catalog (some clinics enable subset)
- Per-method adapter integration (each external rail has its own SDK)
- Per-method capability check (`requireCapability("apply_<method>_payment")`)
- Per-method audit trail with method-specific metadata
- Per-method refund flow (some are reversible, some aren't, some require partner-side action)

**For OMNI Q5 (capability flags per brand/clinic) + Q4 (mode-per-service-line):** payment-method enablement IS a per-brand capability flag axis. A medspa might enable CareCredit + Allē + Cherry; a fitness studio might enable ClassPass instead. Federation: brands choose their payment ecosystem.

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-14 at 12.03.41 AM.png`
**Feature area:** `pos_checkout_payment`
**Inferred screen title:** **CHECKOUT — Cash payment selected, $245 entered, $0.00 Still owed (single payment line)**

### TEXT CONTENT (VERBATIM)

```
[Cart on left]

[Center-right column — single payment row + Split Payment + COMPLETE SALE:]

[Payment receipt icon]
$0.00
Still owed

[─ minus icon] [Cash row, blue border (focused):]
Cash                                              $245
Payment Notes (optional)

[Split Payment ←→ icon] Split Payment

[COMPLETE SALE button (orange, full-width, primary)]
```

### ARCHITECTURAL OBSERVATIONS

**Wait — $245 cash entered with $0.00 Still owed?** Cart total is $866.50. $245 alone doesn't cover it. Either:
- This is mid-flow (the $245 is partial; "$0.00 Still owed" is a placeholder until the rest is entered)
- OR the user entered $245 cash + something else covers the rest

Looking at Step 06 (next): Cash $245 + Check $621.50 = $866.50 covers the total. So "$0.00 Still owed" is the LIVE-COMPUTED REMAINING. When Cash $245 was entered alone, "Still owed" should have been $621.50. The screen captured Step 05 likely shows $0 Still owed AFTER both payments were entered (Step 06 confirms). 

**Split Payment is a dedicated affordance** below the payment row + Payment Notes. Click to add another payment method to the same transaction.

**For OMNI commerce DL:** split-payment composition is FIRST-CLASS. A single cart can have multiple payment lines (Cash $245 + Check $621.50 + maybe Card $X). Substrate model:
- `payment_attempt` rows attached to the commerce_orders parent (1-to-many)
- Each `payment_attempt` has method + amount + status + audit
- Cart "Total" = sum of all payment_attempt amounts must equal cart total
- "Still owed" = cart total - sum of successful payment_attempts

This is the canonical multi-tender pattern (well-known in restaurant POS / retail; required for Day 1 medspa).

**Payment Notes (optional):** per-payment-line annotation. E.g., "Cash from spouse, change due $5 returned" or "Check #1234 from BHC Bank account ending 4321." Substrate supports staff annotation per payment.

---

## Step 06

**File:** `screenshots/Screen Shot 2026-05-14 at 12.04.13 AM.png`
**Feature area:** `pos_checkout_payment`
**Inferred screen title:** **CHECKOUT — SPLIT PAYMENT IN ACTION (Cash $245 + Check $621.50 = $866.50 = cart total; $0.00 still owed)**

### TEXT CONTENT (VERBATIM)

```
[Cart on left]

[Center-right column — split payment composition:]

[Payment receipt icon]
$0.00
Still owed

[─ icon] Cash                                     $245.00
         Payment Notes (optional)

[─ icon] Check                                    $621.50  [blue border, focused]
         Check# (optional)

[Split Payment ←→ icon] Split Payment

[COMPLETE SALE button (orange)]
```

### UI ELEMENTS (visible)

**Two payment lines composed:**
1. **Cash** $245.00 + Payment Notes (optional)
2. **Check** $621.50 + **Check# (optional)** ← method-specific field (check number for paper trail)

**Sum:** $245 + $621.50 = $866.50 = cart total → **$0.00 Still owed**

### ARCHITECTURAL OBSERVATIONS

**Per-method specific input fields:** Cash has Payment Notes; Check has Check# (optional). For OMNI:
- `payment_attempt.method_specific_metadata` JSON column with typed schema per method
- Check: { check_number, bank_name?, account_last4? }
- Cash: { notes }
- Card: { last4, brand, auth_code, processor_response_code }
- CareCredit: { application_id, approval_code, financed_amount, financing_term_months }
- Allē: { allē_account_id, points_redeemed, dollar_value }

Each method has its own payload schema. OMNI commerce DL must define typed schemas per method.

**The minus icon (─) before each payment line** lets staff REMOVE that payment from the split. Lifecycle: payment_attempt can be in DRAFT state (in cart but not yet committed), removable until COMPLETE SALE.

**COMPLETE SALE button is the cart-commit operation.** This is the moment when:
- All payment_attempt rows finalize
- commerce_orders row writes
- patient account credit/balance updates
- inventory decrements
- entitlement quantity decrements (BH HydraFacial entitlement decrements 1 of 1 → 0 of 1)
- audit_events row(s) write
- patient_timeline_events projection writes
- outbound emails fire (receipt to patient via "Send confirmation email" pattern from Batch 5)
- CNS events emit per DL-16 (commerce.sale_completed; many downstream consumers)

**For OMNI**: COMPLETE SALE is the canonical write-commit fan-out. Per system map "Layer 1 (correctness when async work fails or repeats)" + "1I.6 idempotency": this commit MUST be idempotent. Mindbody likely uses an idempotency key on the cart session.

---

## Step 07

**File:** `screenshots/Screen Shot 2026-05-14 at 12.05.05 AM.png`
**Feature area:** `appointments_detail_edit`
**Inferred screen title:** Edit Appointment panel with **NEW 3rd tab active** (entitlement-attachment view: "Current pricing option: BH HydraFacial - Signature, 1 of 1 remaining, Exp: 04/10/2027")

### TEXT CONTENT (VERBATIM)

```
[Left: mini-calendars May 2026 + June 2026]

[Edit appointment panel:]

Edit appointment

[Tab strip — NOW SHOWING 3 TABS (Batch 5 only had 2):]
● (status, dim)  🕒 (history, dim)  ✓ (green checkmark — pricing/entitlement, ACTIVE)

Current pricing option: BH HydraFacial - Signature
1 of 1 remaining
Exp: 04/10/2027

Email   donlondiana@gmail.com
        ☑ Send Change Notification
        Send confirmation email

[Visual divider — purple horizontal bar]

Provider    Angelina Dedvukaj
Service * BH HydraFacial                    ✕
            ☆ Angelina Dedvukaj requested
Start time  11:00 AM ▾    Length    60 min ▾
End time    12:00 PM
```

### UI ELEMENTS (visible)

**Edit Appointment panel with NEW (3rd) tab:**
- Tab 1: ● (status dot)
- Tab 2: 🕒 (history/audit clock)
- **Tab 3: ✓ green checkmark (NEW — pricing/entitlement view, currently active)**

**Tab 3 content:** Pricing/entitlement attachment:
- "Current pricing option: BH HydraFacial - Signature"
- "1 of 1 remaining" (entitlement quantity)
- "Exp: 04/10/2027" (entitlement expiration date — 11+ months out from purchase)

Below tab content: standard email/notification fields (same as Batch 5 Step 06).

Provider: **Angelina Dedvukaj** (different from Batch 5 Step 06 which was Dr. Nicholas Crawford for a different appointment).

Service: **BH HydraFacial** with ☆ "Angelina Dedvukaj requested" sub-line.

### ARCHITECTURAL OBSERVATIONS

**THE 3rd TAB is the ENTITLEMENT-ATTACHMENT VIEW.** Not visible in Batch 5 because that appointment (Kristie Eberhardt's Consultation - Aesthetic Injector) had NO entitlement attached. Diana Donlon's BH HydraFacial appointment HAS the BH HydraFacial - Signature entitlement attached → so the 3rd tab is rendered.

This is **conditional UI based on substrate state**:
- If appointment has no entitlement → 2 tabs (status + history)
- If appointment has entitlement → 3 tabs (status + history + entitlement)

For OMNI: tab visibility is a derived UI affordance from substrate state. The substrate IS the source of truth (appointment-entitlement_redemption join).

**"Current pricing option: BH HydraFacial - Signature, 1 of 1 remaining, Exp 04/10/2027":**
- Patient bought a "BH HydraFacial - Signature" entitlement (purchased 04/10/2026 per Batch 6 Step 02 PAID line)
- Entitlement covers 1 redemption
- Entitlement expires exactly 1 year after purchase (04/10/2027)
- Currently 1 of 1 still remaining (BUT — wait — the Batch 8 / 9 POS flow JUST committed this as paying for today's appointment; should the post-commit view show "0 of 1 remaining"?)

Possibilities:
- (a) This screen was captured BEFORE the COMPLETE SALE button was clicked
- (b) The "1 of 1 remaining" decrement happens at appointment-completion (Arrived → Completed lifecycle), not at POS commit
- (c) UI is stale and shows pre-redemption state

Most likely (a): this screen is from a DIFFERENT moment in the user's exploration — they navigated to the Edit Appointment view to inspect what entitlement-attachment looks like, separately from the POS commit flow.

**Send Change Notification + Send confirmation email** — same as Batch 5 Step 06. Same pattern. CNS-orchestrated outbound coupling.

**For OMNI Encounter Container ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1) Q3 (4-entity split):**
- Schedulable Service: BH HydraFacial (the catalog row, the bookable thing)
- **Billable Item: BH HydraFacial - Signature (the entitlement, attached to appointment)** — concrete!
- Clinical Service: TBD (rendered at completion)
- Resource/Inventory Item: tray, machine, room — TBD

**Cross-references gap #2** (intended visit vs actual treatment): the entitlement attachment is the substrate mechanism. Patient buys generic "BH HydraFacial - Signature" entitlement; redeems against specific appointment; staff renders the specific care during the appointment. Entitlement decrements when appointment commits. This handles non-variable services well; the variable-quantity gap (Botox) is what Mindbody's product workaround addresses awkwardly.

---

## Cross-references

- **Manifest rows updated:** rows 88, 89, 90, 91, 92, 93, 94 (7 chronological screens in Batch 9); see [mindbody_ingestion_manifest.md](mindbody_ingestion_manifest.md).
- **Chat navigation map references:**
  - Marker 2 (lines 701-1085) — payment + entitlement coverage; Step 02-04 enumerate the 23 payment methods
  - Marker 4 (lines 1616-2152) — Step 07 entitlement-attachment view is the appointment-side projection of account-operations entitlement state
  - Pre-marker bucket 5 (variable quantity services) — Step 01 Botox Quantity = 20 is the OPERATIONAL execution
- **User feedback cross-refs:**
  - **Gap #2:** Step 01 Botox Quantity = 20 is the LIVE ENACTMENT of user's exact words
  - **Gap #3 (memberships+subscriptions+gift cards+loyalty rewards weaving):** Step 02-04 confirm 23 payment methods including brand-loyalty (Allē, Aspire), clinic-loyalty (BH+ Member Discount, New Patient Special, Referral Discount), 3rd-party (ClassPass), and medical financing (CareCredit, GreenSky, Cherry). Multi-source-of-funds composition.
- **Knox synthesis statements:**
  - Marker 2: "checkout + payment methods + entitlement redemption" — Steps 02-07 cover all three
  - Pre-marker bucket 5: Step 01 is canonical
- **Supplemental cross-refs:**
  - [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — 4-entity split: Step 07 entitlement-attachment is the cleanest rendering of Schedulable Service + Billable Item separation
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 — payment methods are commerce-system primitives (federation of integrations); not unified abstraction
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 — payment method enablement is per-brand capability flag axis

## Outstanding observations / TBD

- **COMPLETE SALE flow** — what happens after click? Receipt? Email/print? Confirmation screen? Need post-commit screens.
- **Account balance > $0 flow** — Step 02-04 show Account $0.00 disabled; need a screen with positive balance.
- **Receipt printing/emailing flow** — TBD.
- **Entitlement decrement timing** — at COMPLETE SALE? at appointment Arrived/Completed? Need post-commit entitlement view.
- **Each payment method's adapter integration screens** — CareCredit / GreenSky / Allē / Aspire / Cherry / etc. likely have provider-specific flow screens (out of scope for this batch).
- **Mid-cart total updating** — Steps 05-06 show "$0.00 Still owed" when payments equal cart; what about overpayment (e.g., Cash $1000 for $866.50 cart)? Change-due flow?
- **Voided / cancelled COMPLETE SALE** — failure flows TBD.
