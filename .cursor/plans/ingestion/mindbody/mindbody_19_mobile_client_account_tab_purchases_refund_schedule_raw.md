# Mindbody — Batch 19 raw capture: Mobile Client Account tab (Passes/Contracts/Purchases) + Purchases full history + Sale detail + Receipt PDF + Issue Refund workflow + Schedule tab (Upcoming + Visit History)

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~6:00 AM UTC-4)
Batch: 19
Feature area(s): `mobile_business_app_client_account_tab`, `mobile_business_app_purchases_listing`, `mobile_business_app_sale_detail`, `mobile_business_app_receipt_pdf`, `mobile_business_app_issue_refund`, `mobile_business_app_client_schedule_tab`
Screenshots covered: 10 (rows 21-30 = IMG_9142-9151)

Chat cross-references:
- **Marker 4 (lines 1616-2152) — Account operations editable/runnable/destructive** — Steps 01-04 mobile Account tab (Passes/Contracts/Purchases) + Steps 07-08 Issue Refund workflow are the canonical mobile projection of marker 4.
- **Marker 1+2 (lines 380-1085) — Checkout/POS/commerce coupling + payment methods** — Step 05 Sale detail + Step 06 Receipt PDF surface the commerce ledger entries.
- Pre-marker bucket 10 (Checkout/POS/commerce + refund pathway) — Steps 07-08 refund workflow.

Supplemental cross-references:
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 (4-entity split + Pricing Options taxonomy) — Step 01 INACTIVE PASSES list (Dermaplaning + Dysport Returning + NEO Red Light) confirms passes substrate = Pricing Options with expires_after + remaining/total redemptions. Step 02-04 CONTRACTS (BH+ Elite) substrate is separate (matches Batch 13 Step 09 Pricing Options 4-type Autopay/Contract).

User feedback cross-refs:
- Gap #3 (subscriptions/memberships/POS/retail/gift cards/loyalty) — Mobile Account tab cleanly separates 4 distinct ledgers: PASSES / CONTRACTS / INACTIVE PASSES / PURCHASES. Substrate alignment.

---

## Step 01 (row 21) — Account tab Passes/Inactive Passes

**File:** `screenshots/IMG_9142.PNG`
**Feature area:** `mobile_business_app_client_account_tab`

Mary Behler Account tab — **PASSES** section ("No active account items") + **INACTIVE PASSES** (3 visible): Dermaplaning 0/1 Remaining Expired 02/09/2027 / Dysport (Returning) 0/1 / NEO Red Light Therapy (Single Session, Add-On) 0/1.

OBSERVATIONS: Mobile labels what desktop called "Inactive pricing options" (Batch 11 Step 04) as **"PASSES"** — vocabulary mismatch between mobile and desktop UI (both refer to same `pricing_option_redemption` substrate). Mobile shows `Remaining/Total` as `0/1` format (vs desktop's split columns Scheduled + Remaining + Total).

---

## Step 02 (row 22) — Account tab CONTRACTS section start

**File:** `screenshots/IMG_9143.PNG`
**Feature area:** `mobile_business_app_client_account_tab`

INACTIVE PASSES continued (NEO Red Light Therapy) + View all link + **CONTRACTS section**: BH+ | Elite Purchased Tuesday 03/04/2025 (green dot = active).

OBSERVATIONS: Active contract has green dot indicator. Substrate `contract.is_active BOOLEAN`. Same `BH+ | Elite` contract from Batch 11 Step 04 desktop Account Details.

---

## Step 03 (row 23) — Account tab INACTIVE CONTRACTS + PURCHASES section start

**File:** `screenshots/IMG_9144.PNG`
**Feature area:** `mobile_business_app_client_account_tab`

CONTRACTS / INACTIVE CONTRACTS ("No contract items") + **PURCHASES section** (3 visible: 5/1/2026 BH+ Elite $159 / 4/1/2026 $159 / 3/1/2026 $159) + View all link.

OBSERVATIONS: Mobile Account tab has 5 commerce-substrate sections:
1. PASSES (active pricing options)
2. INACTIVE PASSES (unused/expired pricing options)
3. CONTRACTS (active memberships)
4. INACTIVE CONTRACTS (cancelled/expired memberships)
5. PURCHASES (sale history)

All accessible via vertical scroll + View all for full lists.

---

## Step 04 (row 24) — Purchases full history listing

**File:** `screenshots/IMG_9145.PNG`
**Feature area:** `mobile_business_app_purchases_listing`

Full Purchases history — 8 visible monthly autopay charges (FRI MAY 01 2026 BH+ Elite $159 / WED APR 01 2026 $159 / SUN MAR 01 2026 $159 / **TUE FEB 10 2026: 154 Items $725.00** / SUN FEB 01 2026 $159 / THU JAN 01 2026 $159 / MON DEC 01 2025 $159 / SAT NOV 01 2025 $159).

OBSERVATIONS: **"154 Items $725.00"** bulk-sale outlier — single Sale_ID with 154 line items totaling $725. Confirms Sale-to-Line 1-to-N substrate (multi-item POS transactions). Could be a bulk gift-card purchase or staff training session checkout.

Monthly BH+ Elite $159 recurring autopay rows are the regular cadence (matches Batch 11 Step 05-06 BH+ Elite Autopay Schedule = $159/month rolling).

Dates show as `DAY-OF-WEEK, MONTH DD YYYY` headers — daily grouping.

---

## Step 05 (row 25) — Sale detail (Sale ID 148904)

**File:** `screenshots/IMG_9146.PNG`
**Feature area:** `mobile_business_app_sale_detail`

Sale ID 148904 / Recipient Mary Behler mary.e.behler@gmail.com / **Wed Apr 1 2026 at 3:39 AM Sold by Bloom Health** / BH+ Elite $159 / Subtotal $159 / Tax $0 / Payment Method Visa/MC $159 / Total $159. Bottom: **View receipt | Refund** buttons.

OBSERVATIONS: Sold by Bloom Health (the clinic itself, not a staff name) = **automatic payment substrate** (no human seller). Distinguishes automated billing (autopay-run) from manual POS sales.

Sale detail shows substrate fields: sale_id / recipient_client_id / sale_datetime / sold_by_actor_id / line_items[] / subtotal / tax / total / payment_method_id / amount.

Refund button surfaces the Issue Refund workflow (Step 07).

---

## Step 06 (row 26) — Receipt PDF/printable view

**File:** `screenshots/IMG_9147.PNG`
**Feature area:** `mobile_business_app_receipt_pdf`

Bloom Health receipt rendered as PDF-style — Header: Bloom Health / 2527 S Telegraph Rd / Bloomfield Hills MI 48302 / (248) 365-0311 / https://bloom.health. Body: Mary Behler / MI / Sale Date 4/1/2026 3:39 AM / Sale ID 148904 / Sold By: **Automatic Payment** / 1 BH+ Elite **$196,365.00** (TYPO/data corruption — should be $159.00) / Subtotal $159 / Tax $0 / Total $159 / Payment Method Visa/MC $159 / Mary Behler / Visa - ***6567 / Authorization #: 143097 / Signature line / Agreement text / "*** Merchant Copy ***".

OBSERVATIONS: 
- **DATA CORRUPTION VISIBLE**: Item line shows $196,365.00 but Subtotal correctly shows $159.00. Either:
  - (A) Mindbody substrate corruption where per-line price is stored separately from sum-of-lines = subtotal
  - (B) Receipt rendering bug
  - (C) The `196,365.00` is actually some other field like a transaction reference number that got rendered in the price column
- **Sold By: Automatic Payment** = system actor on automated charges (different from "Sold by Bloom Health" in Sale detail Step 05 which references clinic-level actor; could be 2 different fields).
- **Authorization #: 143097** = payment processor authorization code from Visa/MC.
- Receipt template includes brand contact info + cardholder signature line + agreement text. Substrate: `receipt_template { brand_id, header_html, footer_html, agreement_text }`.

---

## Step 07 (row 27) — Issue Refund (keyboard open for reason)

**File:** `screenshots/IMG_9148.PNG`
**Feature area:** `mobile_business_app_issue_refund`

Issue Refund screen — Refund date 5/14/2026 (today) / Refund location Bloom Health (dropdown) / **Reason for return** (textarea with cursor + keyboard open) / ITEMS section: BH+ Elite $159 / **Add back to inventory toggle ON** / Total ($159.00).

OBSERVATIONS: **Add back to inventory toggle** = critical substrate primitive: when a refund involves inventory product, the substrate can OPTIONALLY restock the item. For services/subscriptions like BH+ Elite, toggle is moot (no physical inventory) but still defaults ON.

`Reason for return` is required text field (cursor focused).

Refund Total is shown as negative `($159.00)` parenthesized.

---

## Step 08 (row 28) — Issue Refund completed form

**File:** `screenshots/IMG_9149.PNG`
**Feature area:** `mobile_business_app_issue_refund`

Same Issue Refund screen — **Reason for return: Required** (red dot indicating field validation; user hasn't entered text yet) / ITEMS BH+ Elite $159 / Add back to inventory ON / Total ($159) / **REFUND TO section: Visa/MC 6567 ($159.00)** (refund destination = original payment method by default) / **COMPLETE REFUND** button at bottom.

OBSERVATIONS: 
- **Refund-to original payment method default** is substrate behavior: `refund.destination_payment_method_id = sale.payment_method_id` by default. Override allowed (dropdown).
- **REFUND TO section** surfaces the payment_method that will receive the refund.
- "Required" field validation in red.

---

## Step 09 (row 29) — Schedule tab Upcoming + Visit History

**File:** `screenshots/IMG_9150.PNG`
**Feature area:** `mobile_business_app_client_schedule_tab`

Mary Behler Schedule tab — **UPCOMING VISITS section**: Today Thursday — BH HydraFacial 12:00 pm with Parrah Grundy (avatar). **VISIT HISTORY section** start: 02/10/2026 Tuesday — Dysport (Returning) 2:30 pm with Dr. Nicholas Crawford + BH Signature Facial (60 Mins) 12:30 pm with Parrah Grundy.

OBSERVATIONS: 
- Mobile Schedule tab combines 2 desktop sub-tabs:
  - "Upcoming Visits" = subset of `appointment WHERE state IN (confirmed, scheduled) AND start_datetime > NOW()`
  - "Visit History" = subset of `appointment WHERE state IN (completed, late_cancel, no_show, etc.) AND start_datetime < NOW()`
- Per-row data: date / day-of-week / service name / time / staff name + avatar.

---

## Step 10 (row 30) — Schedule tab Visit History continued (4 entries on 02/10/2026)

**File:** `screenshots/IMG_9151.PNG`
**Feature area:** `mobile_business_app_client_schedule_tab`

Schedule tab scrolled — UPCOMING VISIT 12:00pm with Parrah Grundy (Mary Behler's current appointment) + VISIT HISTORY 02/10/2026 Tuesday: 4 entries on same day (Dysport Returning 2:30 pm with Dr. Nicholas Crawford / BH Signature Facial 12:30 pm with Parrah Grundy / NEO Red Light Therapy Add-On 12:30 pm **with Our Team** / Dermaplaning 12:30 pm with Parrah Grundy) + 10/08/2025 Wednesday: Dermaplaning 3:30 pm with Amber Allen + View all link.

OBSERVATIONS: 
- **02/10/2026 has 4 simultaneous/overlapping appointments at 12:30 pm** with different staff/types — confirms Mindbody supports multi-staff multi-service simultaneous appointments per client. Per user feedback gap #5 / Q1 / Knox marker 5: multi-provider procedures.
- **NEO Red Light Therapy Add-On with "Our Team"** = staff entity is the team-role (not individual). Confirms Batch 13 Step 10 Our Team entity usage.
- View all link → full appointment history page.

---

## Cumulative Batch 19 findings (additive to handoff 1-15 + Batches 11-18 16-147)

### 148. Mobile Account tab has 5 commerce-ledger sections (PASSES / INACTIVE PASSES / CONTRACTS / INACTIVE CONTRACTS / PURCHASES)
Steps 01-04. Vertical-scroll projection of marker 4 account operations.

### 149. Vocabulary mismatch: mobile "PASSES" = desktop "Inactive pricing options"
Step 01 vs Batch 11 Step 04. Same substrate.

### 150. Bulk-sale outlier "154 Items $725" confirms Sale-to-Line 1-to-N high-cardinality
Step 04. Substrate supports many line items per sale.

### 151. Sold by Bloom Health (clinic actor) vs Sold By Automatic Payment (system actor) on autopay sales
Steps 05-06. 2 distinct actor types on sale records.

### 152. Authorization # is payment-processor return value stored on sale
Step 06. `sale.authorization_code` from Visa/MC.

### 153. Receipt PDF substrate has data-corruption case (item line $196,365 vs Subtotal $159)
Step 06. Either substrate-level corruption or rendering bug. OMNI must enforce price-line ≤ subtotal invariant.

### 154. Refund "Add back to inventory" toggle is substrate primitive (auto-restocks physical products on refund)
Step 07. Per-refund-line inventory_restock_flag.

### 155. Refund destination defaults to original payment method
Step 08. `refund.destination_payment_method_id = sale.payment_method_id` by default with override.

### 156. Mobile Schedule tab fuses 2 desktop sub-tabs (Upcoming Visits + Visit History)
Steps 09-10. Mobile compresses query: state-filter union by tense.

### 157. Multi-staff multi-service simultaneous-time appointments per client visible (02/10/2026 4 entries at 12:30 pm)
Step 10. Mindbody supports multi-provider procedures per user feedback gap #5.

### 158. "Our Team" staff entity confirmed in production appointment data
Step 10. NEO Red Light Therapy Add-On staff = "Our Team" (not individual). Substrate evidence.

---

## End of Mobile Batch 19

Next batch: Mobile Batch 20 (rows 31-40 = IMG_9152-9161). Likely continues client profile + transitions to reports/retail/other surfaces.
