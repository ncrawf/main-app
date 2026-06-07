# Mindbody — Batch 21 raw capture (FINAL MOBILE BATCH): Visa settled-transactions detail + Sale detail with Tip line + Sales report (location + date + 6 sales) + Return Sale detail (System Generated actor + Comp/Guest 25th payment method) + Business Snapshot KPI dashboard (6 tiles rolling-30-days) + Snapshot Settings (Accounting Basis Accrual/Cash) + More menu (multi-site switcher) + Settings (Tap to Pay on iPhone, Don't Allow Additional Charge, Clear Cache)

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~6:30 AM UTC-4)
Batch: 21 (FINAL MOBILE BATCH; 9 screens)
Feature area(s): `mobile_business_app_payment_processing_card_detail`, `mobile_business_app_sale_detail_with_tip`, `mobile_business_app_sales_report`, `mobile_business_app_return_sale_detail`, `mobile_business_app_business_snapshot`, `mobile_business_app_snapshot_settings`, `mobile_business_app_more_menu`, `mobile_business_app_settings`
Screenshots covered: 9 (rows 41-49 = IMG_9162-9170)

Chat cross-references:
- **Marker 6 + 14 (lines 2598-3721 + 27597-27982) — Settings as OS + admin config taxonomy** — Steps 06-09 mobile More menu + Settings is the mobile projection of Mindbody's settings depth.
- **Marker 2 (lines 701-1085) — Checkout/POS/payment methods** — Steps 01-04 surface sale/refund detail substrate.

Supplemental cross-references:
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 (4-entity split + commerce primitives) — Step 02 Tip as SEPARATE line item ($20 on $50 service) confirms Tip is a 1st-class commerce primitive (sibling to Product/Service/Pricing-Option, NOT a modifier on parent line).
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 (capability flags) — Step 06 Business Snapshot dashboard shows brand-aggregate KPIs with **Accrual vs Cash basis ACCOUNTING toggle** — per-clinic accounting-basis capability substrate (Layer 2 Section J accounting integration).

User feedback cross-refs:
- Gap #6 (cross-patient metrics) — Step 05 Business Snapshot dashboard shows 6 KPI tiles with rolling-30-day comparisons. Mindbody metrics substrate is rich.

---

## Step 01 (row 41) — Visa settled-transactions detail

**File:** `screenshots/IMG_9162.PNG`
**Feature area:** `mobile_business_app_payment_processing_card_detail`

Visa transactions SETTLED detail — 4 entries on Wed May 13 2026:
- Suryavanshi, Nayan: Method Keyed / $70
- Davis, Keith: Keyed / $350
- Debs, Sarah: Keyed / $1,150
- Donlon, Diana: Keyed / $200

OBSERVATIONS: 
- Method = `Keyed` (manually entered card vs Swiped/Tapped/etc.) — Mindbody captures the payment-entry-method as audit substrate.
- 4 settled Visa transactions = the 4-trans count from Batch 20 Step 10 ($1,770 total = 70+350+1150+200 = $1,770 ✓).
- **`Keyed`** method enum value confirms payment-entry-method substrate enum (Keyed / Swiped / Tapped / Inserted).

---

## Step 02 (row 42) — Sale detail with Tip line item

**File:** `screenshots/IMG_9163.PNG`
**Feature area:** `mobile_business_app_sale_detail_with_tip`

Sale ID 149163 detail — Recipient NS Nayan Suryavanshi / Wed May 13 2026 5:12 PM / **Sold by Parrah Grundy / Bloom Health** / 
- **Dermaplaning (ADD-ON): QTY 1 TX $50.00**
- **Tip $20.00**
Subtotal $70 / Tax $0 / Payment Method Visa/MC $70 / Total $70 / View receipt + Refund.

OBSERVATIONS: 
- **Tip is a SEPARATE LINE ITEM** ($20 on a $50 service = 40% tip). Substrate: `commerce_order_line { type='tip', ... }`. Q3 evidence: Tip is a 1st-class commerce primitive (Batch 13 Step 09 Pricing section 9 sub-pages included Tips).
- **"Dermaplaning (ADD-ON): QTY 1 TX"** — naming includes "TX" suffix = treatment-quantity. Service identifier embeds quantity-unit semantics.
- **Sold by Parrah Grundy** = staff actor (vs "Sold by Bloom Health" or "Sold by Automatic Payment"). 3 actor types confirmed: staff_name / clinic_name / system_label.

---

## Step 03 (row 43) — Sales report (location/date filtered)

**File:** `screenshots/IMG_9164.PNG`
**Feature area:** `mobile_business_app_sales_report`

Sales report — Search by Sale ID + location-pin icon + filter funnel + 2-day grouped sales:
- **MAY 14 2026: TOTAL $0.00** (No Sales)
- **MAY 13: TOTAL $2,899.30** with 6 sales:
  - #149163 Nayan Suryavanshi: 2 Items / Bloom Health / Parrah Grundy / 💳 $70
  - #149162 Kylie Schmitt: ClassPass / Bloom Health / _ClassPass API_ / 🎁 $0
  - #149161 Keith Davis: Dysport (Returning) / Bloom Health / Parrah Grundy / 💳 $350
  - #149160 Sarah Debs: 3 Items / Bloom Health / Parrah Grundy / 💳 $1,150
  - #149159 Kristie Eberhardt: Consultation - Injectables / Bloom Health / Parrah Grundy / 🎁 $0
  - **#149158 Kenzie Cashero: ClassPass / Bloom Health / _System Generated_ / 🎁 RED `Refund` label $0**

OBSERVATIONS: 
- **Per-row icons distinguish payment types:** 💳 (card) vs 🎁 (gift/comp).
- **Sold-By actor types visible:** Parrah Grundy (staff) / **_ClassPass API_** (third-party integration actor!) / **_System Generated_** (automated system actor).
- **NEW actor type: `_ClassPass API_`** — ClassPass integration creates sales as a 3rd-party-named actor. Confirms Q5 capability + Layer 2 Section J cross-domain (3rd-party integration creates substrate actors).
- **#149158 has RED `Refund` label** = visual indicator this is a return record (Step 04 confirms).

---

## Step 04 (row 44) — Return Sale detail (System Generated + Comp/Guest)

**File:** `screenshots/IMG_9165.PNG`
**Feature area:** `mobile_business_app_return_sale_detail`

Sale ID 149158 Kenzie Cashero — **"Return Sale ID" in RED** (vs regular "Sale ID") / Wed May 13 2026 10:13 AM / **Sold by System Generated** / Bloom Health / ClassPass $0 / **Payment Method: Comp/Guest $0** / Total $0 / View receipt + Refund.

OBSERVATIONS: 
- **`Return Sale ID` label in red** = visual + substrate distinction for return/refund records.
- **`System Generated`** = 4th actor type (staff_name / clinic_name / Automatic Payment / **System Generated**). Each maps to a distinct actor_kind enum value.
- **`Comp/Guest` payment method = 25th unique payment method discovered** (24 enumerated cumulative in Batches 8-11 + 14, plus Comp from Batch 11). Comp/Guest variant suggests substrate distinguishes free-visit-for-guest vs free-comp-for-staff.

---

## Step 05 (row 45) — Business Snapshot dashboard (6 KPI tiles)

**File:** `screenshots/IMG_9166.PNG`
**Feature area:** `mobile_business_app_business_snapshot`

Business Snapshot — All Locations ▼ + settings gear + Yesterday ▼ (likely Rolling-30-days) — **6 KPI tiles**:
1. **Total Sales Rolling-30-days: $30.8K ↓12.3%**
2. **Total Appointments Rolling-30-days: 129 ↓11.0%**
3. **Top Prebooked Staff Rolling-30-days: [photo]**
4. **New Clients Rolling-30-days: ⭐ 46**
5. **Clients On AutoPay As of 5/13/2026: 19 ↓24.0%**
6. **Projected Revenue Next month's autopays: $2,961 ↓38.7%**

OBSERVATIONS: 
- **6 KPI tiles** = canonical metrics dashboard at brand level. Substrate:
```sql
brand_kpi {
  brand_id, kpi_name, value, period_basis,
  previous_period_value, change_pct, change_direction
}
```
- **Total Sales / Total Appointments / Top Prebooked Staff / New Clients / Clients On AutoPay / Projected Revenue** = 6 canonical metrics surfaced.
- **Rolling-30-days vs As of (point-in-time)** = 2 period bases. Step 06 confirms 4 total (Accrual + Cash × Month-to-date + Rolling-30-days).
- Down-arrow indicators with %change = comparison against previous equivalent period.
- **`Projected Revenue Next month's autopays`** = forward-looking projection substrate (computes from active contracts × billing_cycle).

---

## Step 06 (row 46) — Snapshot Settings (Accounting Basis + Date Range)

**File:** `screenshots/IMG_9167.PNG`
**Feature area:** `mobile_business_app_snapshot_settings`

Snapshot Settings modal — 2 config groups:
- **Accounting Basis**: ✓ Accrual basis (selected) / Cash basis
- **Date Range**: Month-to-date / ✓ Rolling-30-days (selected)

OBSERVATIONS: 
- **`Accounting Basis` toggle** = CRITICAL substrate primitive for revenue recognition:
  - **Accrual basis**: revenue recognized when EARNED (when service delivered), regardless of when payment received
  - **Cash basis**: revenue recognized when PAYMENT RECEIVED, regardless of when service delivered
- These are 2 distinct accounting standards. Mindbody supports BOTH at brand level. For clinics that sell pre-paid pricing options (Single Session / Multi-Session / Unlimited / Autopay-Contract):
  - Cash basis: $500 sale of 3-session package → $500 revenue today
  - Accrual basis: $500 sale → $0 today + recognize ~$167 revenue per session as redeemed
- **Substrate**: `brand.default_accounting_basis ENUM('accrual', 'cash')`. Each Pricing Option type has different revenue-recognition behavior under each basis.
- Layer 2 Section J cross-domain: accounting integration (Quickbooks/Xero) requires this primitive to route per-transaction revenue correctly.

For OMNI future commerce DL (Phase C): accounting basis is a 1st-class brand setting that affects substrate query semantics for revenue reporting.

---

## Step 07 (row 47) — More menu (multi-site switcher)

**File:** `screenshots/IMG_9168.PNG`
**Feature area:** `mobile_business_app_more_menu`

More menu — Header: BH logo + **Nicholas / Bloom Health / Bloom Health** (2 location entries) + Right: 2 BH circle avatars (multi-site switcher).

Body: 6 actions:
- Your Mindbody site
- Support
- Share
- Manage accounts
- Settings
- Send feedback

Footer: Sign out of Bloom Health.

OBSERVATIONS: 
- **Multi-site switcher** (2 BH circles top-right) = brand-level navigation between sites the user has access to. Matches Batch 11 Step 10 desktop user-profile-dropdown "Location Owner" entry.
- **Header shows BH logo + 2 "Bloom Health" entries** — possibly user has access to 2 separate Bloom Health locations (different Site IDs). Substrate: `user_site_access { user_id, site_id, role }` many-to-many.
- **`Manage accounts`** menu item — multi-account management (different Mindbody accounts the user might have).

---

## Step 08 (row 48) — Mobile Settings (Tap to Pay on iPhone, RETAIL SETTINGS)

**File:** `screenshots/IMG_9169.PNG`
**Feature area:** `mobile_business_app_settings`

Settings page — sections:
- **ACCESSIBILITY**: Larger Text toggle
- **NOTIFICATIONS**: Appointment push notification / Class push notification (both clickable links)
- **RETAIL SETTINGS**:
  - **Tap to Pay on iPhone** (iPhone-as-card-reader integration)
  - Card Reader (external Bluetooth card reader pairing)
  - **Disable Analog Swiper** toggle
  - **Don't Allow Additional Charge** toggle ("You won't be able to charge more than the total shown in the cart.")
- **SCHEDULE**:
  - Export My Schedule ("Generates a link to access your schedule from other applications")
- **ADVANCED SETTINGS** (cutoff)

OBSERVATIONS: 
- **`Tap to Pay on iPhone`** = Apple-native iPhone-as-payment-terminal (iOS 16+ feature for Apple Business Connect). Mindbody integrates with this. Substrate: per-device payment_processor_capability.
- **`Card Reader`** = external Bluetooth/USB card reader pairing.
- **`Disable Analog Swiper`** = anti-fraud toggle that disables mag-stripe swipes (forces chip/tap which are more secure).
- **`Don't Allow Additional Charge`** = critical anti-fraud constraint: prevents POS clerk from manually entering a higher amount than the cart total. Substrate: `clinic.cart_amount_strict_enforcement BOOLEAN`.
- **`Export My Schedule`** generates an iCal/RSS link for external app access (Google Calendar / Outlook / etc.). Per-staff calendar-export substrate.

---

## Step 09 (row 49) — Settings scrolled (ADVANCED SETTINGS: Clear Cache)

**File:** `screenshots/IMG_9170.PNG`
**Feature area:** `mobile_business_app_settings`

Settings scrolled — same RETAIL SETTINGS / SCHEDULE / **ADVANCED SETTINGS**:
- **Clear Cache** ("This refreshes your business data in the app")

OBSERVATIONS: 
- **Clear Cache** = local app data refresh action — substrate-side primitive: forces server-truth re-fetch on next data access. Useful for "I changed something on desktop but mobile is showing stale data" scenarios.
- Confirms mobile app maintains local cache of business data for offline access + performance.

---

## Cumulative Batch 21 findings (additive to handoff 1-15 + Batches 11-20 16-171)

### 172. Payment-entry-method enum surfaced (Keyed visible; likely also Swiped/Tapped/Inserted)
Step 01. `sale.entry_method` substrate enum.

### 173. Tip is a 1st-class commerce line item primitive
Step 02. `commerce_order_line { type='tip', ... }`. Sibling to Product/Service/Pricing-Option/Gift-Card/etc. Confirms Q3 4-entity expansion to include Tip as commerce primitive.

### 174. Sold-By actor has at least 4 kinds (staff_name / clinic_name / "Automatic Payment" / "System Generated" / "_ClassPass API_")
Steps 02-04. Substrate `sale.actor_kind ENUM`.

### 175. 25th unique payment method discovered: Comp/Guest (free-visit-for-guest variant of Comp)
Step 04. Substrate enum now 25+ payment methods.

### 176. Return Sale ID = visually distinct red label for refund records
Step 04. Substrate `sale.is_return BOOLEAN` or separate `return_sale` table.

### 177. Business Snapshot dashboard has 6 canonical KPI tiles
Step 05. Total Sales / Total Appointments / Top Prebooked Staff / New Clients / Clients On AutoPay / Projected Revenue.

### 178. **Accounting Basis is a brand-level substrate primitive (Accrual vs Cash basis)**
Step 06. CRITICAL for revenue recognition + accounting integration. Per system map 1F + Layer 2 Section J.

### 179. Date Range substrate (Month-to-date / Rolling-30-days as period basis enum)
Step 06. Reporting period substrate primitive.

### 180. Multi-site switcher in More menu confirms multi-tenant user_site_access many-to-many substrate
Step 07. Per system map 1U multi-tenancy.

### 181. Tap to Pay on iPhone = iOS 16+ integration substrate (iPhone-as-card-reader)
Step 08. Per-device payment-processor capability.

### 182. "Don't Allow Additional Charge" anti-fraud toggle constrains POS clerk to cart total
Step 08. Substrate `clinic.cart_amount_strict_enforcement` boolean.

### 183. Export My Schedule generates iCal/RSS link for external app access
Step 08. Per-staff calendar-export substrate.

### 184. Clear Cache action confirms mobile app has local cache (offline + performance)
Step 09.

### 185. _ClassPass API_ as actor confirms 3rd-party integration creates substrate sale records with named actor
Step 03. ClassPass capability per Q5 capability layer.

---

## End of Mobile Batch 21 — ALL 163 SCREENSHOTS INGESTED (100%)

**PHASE B.5 STEP 4 INGESTION COMPLETE.**

Cumulative manifest state: 163 of 163 (100%) COMPLETED.

Next step: **Step N+1 Layer 2 synthesis** at `.cursor/plans/designs/<today>_mindbody_architecture_understanding.md` with sections A-M citing this raw ingestion layer.
