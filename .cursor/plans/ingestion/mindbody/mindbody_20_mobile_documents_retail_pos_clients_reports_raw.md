# Mindbody — Batch 20 raw capture: Mobile Documents tab + Retail POS entry + Retail Cart (BROWSE/FAVORITES tabs + 7 catalog categories) + Botox Products search (matches desktop 7-tier) + Services 12 categories + Facials 13 pricing options + Walk-in cart mode (reduced catalog) + Clients tab standalone + Reports tab (3 reports) + Payment Processing daily breakdown by card network

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~6:15 AM UTC-4)
Batch: 20
Feature area(s): `mobile_business_app_client_documents`, `mobile_business_app_retail_entry`, `mobile_business_app_retail_cart_browse`, `mobile_business_app_retail_products_search`, `mobile_business_app_retail_services_categories`, `mobile_business_app_retail_facials_list`, `mobile_business_app_retail_walkin_cart`, `mobile_business_app_clients_tab`, `mobile_business_app_reports_tab`, `mobile_business_app_payment_processing_report`
Screenshots covered: 10 (rows 31-40 = IMG_9152-9161)

Chat cross-references:
- **Marker 1+2 (lines 380-1085) — Checkout/POS coupling + Day 0 parity scheduling+checkout+commerce** — Steps 02-07 mobile Retail POS flow is the mobile projection of marker 1+2's checkout substrate.
- **Marker 5 (lines 2153-2597) — Service catalog mesh** — Step 05 mobile Services 12-category list confirms catalog hierarchy.
- Pre-marker bucket 5 (variable quantity Botox) — Step 04 Botox Products search confirms 7-tier workaround at mobile (matches Batch 14 Step 02 desktop).

Supplemental cross-references:
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 (4-entity split) — Step 05 mobile Services shows **12 categories + G) Memberships + X) Internal Scheduling = 14 total** including NEW **"12. Medical Visits"** not visible in desktop ingestion. Significantly expands service catalog scope.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 (capability flags) — Step 07 Walk-in cart mode has REDUCED catalog (only Products + Gift Cards enabled; Services/Auto Pays/Bundles/Account Payments/Tips greyed) — per-cart-mode capability scoping.

User feedback cross-refs:
- Gap #2 (variable quantity Botox) — Step 04 confirms mobile shows same 7-tier Botox Subscription workaround as desktop. Mobile UX same constraints.
- Gap #5 (procedure visits vs office visits) — Step 05 NEW "12. Medical Visits" category visible in mobile (not in desktop screenshots) suggests Bloom Health has separate medical-visit category for procedure-grade visits.

---

## Step 01 (row 31) — Documents tab empty state

**File:** `screenshots/IMG_9152.PNG`
**Feature area:** `mobile_business_app_client_documents`

Mary Behler Documents tab (4th tab) — CLIENT DOCUMENTS section + Add Document link + "No documents uploaded" empty state.

OBSERVATIONS: Mobile Documents tab is simpler than desktop (Batch 11 Step 07 had Upload + Client Forms section + filename restrictions). Mobile compresses to single Add Document action.

---

## Step 02 (row 32) — Retail POS entry "Start a new cart"

**File:** `screenshots/IMG_9153.PNG`
**Feature area:** `mobile_business_app_retail_entry`

Retail tab — "Start a new cart" header + 3 paths: **Existing client / New client / Walk-in** (matches desktop Batch 12 Step 01 POS entry triage).

OBSERVATIONS: Same 3-cart-state substrate as desktop (`attached_cart`, `new_client_then_attached_cart`, `walkin_cart`).

---

## Step 03 (row 33) — Retail Cart Browse with 7 catalog categories

**File:** `screenshots/IMG_9154.PNG`
**Feature area:** `mobile_business_app_retail_cart_browse`

Retail cart for Mary Behler — top banner **"Settle this client's unpaids?"** with X dismiss + 2 tabs (BROWSE active / **FAVORITES**) + **7 catalog categories**: Products / Services / Auto Pays / Bundles / Gift Cards / Account Payments / Tips + barcode-scanner icon top-right.

OBSERVATIONS: 
- **"Settle this client's unpaids?" banner** = proactive prompt when client has outstanding account balance. Substrate: `client.account_balance > 0` triggers banner.
- **FAVORITES tab** = per-user favorites (Batch 14 Step 06 ★ star icon cross-ref).
- **Barcode-scanner icon** (top-right) = mobile-native barcode scan for product lookup. Matches Batch 13 Step 08 desktop Barcode + Print barcodes references.
- **7 catalog categories** = same as desktop POS Batches 6-8 (Products / Services / Auto Pays / Bundles / Gift Cards / Account Payments / Tips). 7 commerce primitives surfaced as cart-add categories.

---

## Step 04 (row 34) — Retail Products with "Botox" search (7-tier confirmed at mobile)

**File:** `screenshots/IMG_9155.PNG`
**Feature area:** `mobile_business_app_retail_products_search`

Products search "Botox" — 5 results:
- BQ Botox (Qty 1 Unit) $14.00
- BS Botox Subscription | 160 Units $1,560.00
- BS Botox Subscription | 200 Units $1,900.00
- BS Botox Subscription | 256 Units $2,368.00
- BS Botox Subscription | 80 Units $800.00

OBSERVATIONS: Mobile confirms same Botox-as-Product 5-tier workaround (1-unit + 4 Subscription tiers) as desktop Batch 8 Step 06 (canonical user feedback gap #2 anchor). Two-letter avatars (BQ / BS) for category-coding.

Mobile shows 4 subscription tiers without separation from the 1-unit retail option (cleaner UX than desktop Batch 14 Step 02 Pricing Options where Botox had 7+ tiers + Lip Flip + Returning x3).

---

## Step 05 (row 35) — Retail Services 14 categories

**File:** `screenshots/IMG_9156.PNG`
**Feature area:** `mobile_business_app_retail_services_categories`

Services > APPOINTMENTS section — 12 numbered categories + 2 special-prefix categories = **14 total**:
- 1. Facials / 2. Add-Ons / 3. Chemical Peels / 4. Skin Treatments / 5. Injectables / 6. Bodysculpting / 7. Laser Hair Removal / 8. Sugaring / 10. Red Light Therapy / 11. Provider Consultations / **12. Medical Visits (NEW)** / G) Memberships / X) Internal Scheduling

Plus CLASSES section: Category 1.

OBSERVATIONS: 
- **"12. Medical Visits" is a NEW category visible only in mobile capture** — likely added to Bloom Health between desktop screenshot session and mobile screenshot session. Suggests Bloom Health has procedure-grade visits separate from regular medspa appointments (user feedback gap #5 territory).
- **"9. Sugaring" missing from this list** — categories are NOT consecutively numbered (1/2/3/4/5/6/7/8/skip 9/10/11/12). Substrate `service_category.sort_order` is non-contiguous integer.
- **Categories with letter prefixes** (G) Memberships / X) Internal Scheduling) sort AFTER numbered categories alphabetically.
- **CLASSES section header** appears below APPOINTMENTS — confirms Knox marker 5 Classes as separate service modality.

---

## Step 06 (row 36) — Retail Services > 1. Facials list

**File:** `screenshots/IMG_9157.PNG`
**Feature area:** `mobile_business_app_retail_facials_list`

1. Facials category — 13 visible pricing options with 2-letter avatars:
- CP Cancellation Policy $0
- C ClassPass $0
- CF CryoGloss Facial $350
- AF Aquagold Facial $0
- BH BH HydraFacial – Deluxe $250
- BH BH HydraFacial – Platinum $300
- BH BH HydraFacial – Signature $200
- BS BH Signature Facial (60 Mins) $165
- **BS BH Signature Facial (75 Mins) $130** (NEW duration variant not in desktop)
- BS BH Signature Facial (90 Mins) $200
- **BS BH Signature Facial (90 Mins) $165** (duplicate naming, different price)
- BR Biologique Recherche Facial (60 Mins) $200
- BR Biologique Recherche Facial (90 Mins) $275

OBSERVATIONS: 
- **`Cancellation Policy` as a pricing option** = $0 pricing option to charge late-cancel/no-show fees against (matches Batch 16 Step 06 No-Show/Late Cancel Fees system). Substrate trick: fee charge = sell-this-$0-pricing-option-with-fee-applied.
- **BH Signature Facial has 4 variants** (60/75/90/90 — yes 2× 90 min variants at different prices $200 vs $165): duration tiers + duplicate-naming substrate problem.
- **Duplicate `BH Signature Facial (90 Mins)` rows at $200 and $165** — likely Mindbody created a duplicate when changing the price; both kept active. OMNI must prevent this with uniqueness constraints.

---

## Step 07 (row 37) — Walk-in cart REDUCED CATALOG mode

**File:** `screenshots/IMG_9158.PNG`
**Feature area:** `mobile_business_app_retail_walkin_cart`

Walk-in cart (W avatar header) — BROWSE / FAVORITES tabs + categories: **Products (active) + Services (greyed) + Auto Pays (greyed) + Bundles (greyed) + Gift Cards (active) + Account Payments (greyed) + Tips (greyed)**.

OBSERVATIONS: 
- **Walk-in mode = 2-category-only catalog** (Products + Gift Cards). Other 5 categories disabled because they require client attachment (Services need staff_service_assignment + booking; Auto Pays/Bundles need client.contracts; Account Payments need client.balance; Tips need active sale).
- Substrate: per-cart-mode capability scoping. Walk-in cart has `is_client_attached=false` and capability layer disables incompatible category access.
- OMNI substrate: `cart_capability_scope { cart_mode, allowed_catalog_categories }`.

---

## Step 08 (row 38) — Clients tab standalone (mirrors Batch 18 Step 03 modal)

**File:** `screenshots/IMG_9159.PNG`
**Feature area:** `mobile_business_app_clients_tab`

Clients tab (full screen) — Search + Last Client (Mary Behler) + Recent Clients (9 visible: Martina Zook / Jasmine Yousif / Tyler Yaldo / Trishawna Woods / Sonjai White / Alexis Wallace / Joseph Wahib-Mashini / Alexandria Trosko).

OBSERVATIONS: Same content as Batch 18 Step 03 (IMG_9134) Clients picker MODAL, but here as full-screen standalone tab. Implies `clients_picker` is a reusable view component embedded both as modal (from Retail context) and as full-screen tab (from Clients bottom-nav).

---

## Step 09 (row 39) — Reports tab (3 reports)

**File:** `screenshots/IMG_9160.PNG`
**Feature area:** `mobile_business_app_reports_tab`

Reports tab — 3 report types: **Business Snapshot / Sales / Payment Processing**.

OBSERVATIONS: Mobile reports surface = 3 reports vs desktop Insights menu (Batch 4 row 50 referenced Insights as separate nav surface). Mobile compresses Insights into "Reports" tab with 3 sub-reports.

---

## Step 10 (row 40) — Payment Processing daily breakdown by card network

**File:** `screenshots/IMG_9161.PNG`
**Feature area:** `mobile_business_app_payment_processing_report`

Payment Processing report — "Today, Thu, May 14, 2026: Today's total $0.00" + "No Transactions" (today empty).

Historical:
- **Wed, May 13, 2026: $2,899.30**
  - **Visa**: Transactions 4 / Status Settled / Total $1,770.00
  - **Discover**: Transactions 2 / Status Settled / Total $1,129.30
- **Tue, May 12, 2026: $336.00**
  - **Discover**: Transactions 1 / Status Settled / Total $336.00

OBSERVATIONS: 
- **Payment Processing report substrate** breaks down daily totals by card network (Visa / Discover / etc.). Substrate:
```sql
payment_settlement {
  brand_id, date, card_network,
  transaction_count, total_amount, status
}
```
- **Settlement status enum**: Settled / Pending / Refunded / Failed (visible: Settled).
- **Daily card-network rollup** is computed/cached substrate, not live-aggregated.
- Layer 2 Section J cross-domain: payment processor settlement is integration with Stripe/Square/etc. Aggregated daily for clinic operator's reconciliation.

---

## Cumulative Batch 20 findings (additive to handoff 1-15 + Batches 11-19 16-158)

### 159. Mobile Documents tab is simpler than desktop (single Add Document action, no Client Forms section)
Step 01 vs Batch 11 Step 07 desktop. Mobile compresses surface.

### 160. Mobile Retail tab has 3-path POS entry (Existing/New/Walk-in) matching desktop substrate
Step 02. Same 3-cart-state substrate.

### 161. "Settle this client's unpaids?" proactive banner on cart entry when account balance > 0
Step 03. Substrate hook: client.account_balance > 0 triggers banner.

### 162. Mobile cart has BROWSE + FAVORITES tabs (per-user favorites pinning)
Step 03. `user_resource_favorite` substrate primitive cross-ref Batch 14 Step 06.

### 163. **14 service categories at Bloom Health** (12 numbered + G) Memberships + X) Internal Scheduling); category numbering is NON-CONTIGUOUS (missing 9)
Step 05. Substrate `service_category.sort_order` non-contiguous integer.

### 164. **NEW category "12. Medical Visits"** visible only in mobile capture (added between desktop and mobile sessions)
Step 05. Suggests procedure-grade visits separate from regular appointments. User feedback gap #5 substrate evidence.

### 165. Cancellation Policy is modeled as a $0 Pricing Option (fee-charge substrate trick)
Step 06. To charge a late-cancel fee, Mindbody sells the "Cancellation Policy" $0 pricing option with a fee amount applied. Substrate: cancellation/no-show fees are commerce events.

### 166. BH Signature Facial has 4 duration variants (60/75/90/90 min) with duplicate naming at different prices
Step 06. Duplicate naming bug — OMNI must enforce uniqueness within clinic+category.

### 167. Walk-in cart mode has REDUCED CATALOG (only Products + Gift Cards enabled; 5 categories greyed)
Step 07. Per-cart-mode capability scoping: walk-in carts (is_client_attached=false) disable client-attached commerce categories.

### 168. clients_picker view component is reused as modal (Retail context) AND full-screen tab (Clients context)
Step 08 vs Batch 18 Step 03.

### 169. Mobile Reports tab has 3 sub-reports (Business Snapshot / Sales / Payment Processing) — compressed from desktop Insights
Step 09.

### 170. Payment Processing report substrate has daily-card-network rollup with settlement status
Step 10. `payment_settlement { brand_id, date, card_network, transaction_count, total_amount, status }`.

### 171. Settlement status enum includes Settled (visible) + likely Pending/Refunded/Failed
Step 10.

---

## End of Mobile Batch 20

Next batch: Mobile Batch 21 FINAL (rows 41-49 = IMG_9162-9170, 9 screens). Likely closes out mobile inventory with reports details, settings, or staff/profile screens.
