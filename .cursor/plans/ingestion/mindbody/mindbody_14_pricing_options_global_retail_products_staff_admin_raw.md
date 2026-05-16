# Mindbody — Batch 14 raw capture: Add Provider modal + Pricing Options GLOBAL admin (Botox 7-tier as gap #2 workaround) + Pricing Options responsive/mobile view + Retail Products admin + Staff list + Staff Profile editor + Edit login modal

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~4:30 AM UTC-4)
Batch: 14
Feature area(s): `services_products_staff_add_new`, `services_products_pricing_global`, `services_products_pricing_global_mobile`, `services_products_retail_products`, `staff_list`, `staff_profile_editor`, `staff_login_edit_modal`
Screenshots covered: 10 (rows 132-141 = 12.28.49 AM through 12.35.18 AM)

Chat cross-references:
- **Marker 5 (lines 2153-2597) — Service catalog mesh** — Step 02-04 (Pricing Options global) is the canonical evidence base for Knox's "service catalog mesh" enumeration: a 238-row Pricing Options master ledger with per-row Service Type / Service Category / Price / Active / Sell online flags + N-of-100 pagination.
- **Marker 6 (lines 2598-3721) — Settings as operating system + staff permissions / inventory / retail** — Step 06 (Retail Products) and Steps 07-10 (Staff list + profile + login modal) are direct Knox marker 6 evidence.
- **Marker 14 (lines 27597-27982) — Deep admin/configuration: staff as multi-domain + provider-login-vs-profile + admin config taxonomy** — Step 09 (Staff Profile) confirms the multi-domain staff model with 3 capability mode flags (Desk staff / Provider for appointments / Provider for group lessons) + Sales settings + Google Calendar integration.
- Pre-marker bucket 5 (variable quantity services Botox $14/unit × 20 units = $280) — Step 02 Pricing Options global shows **7 SEPARATE Botox pricing options** by quantity (20/30/40/50/60/64 units + Botox ($14.00/Unit) base + Botox - Return Visit + Botox (Lip Flip) + Botox (Returning) x3). **THIS IS THE WORKAROUND** for user feedback gap #2 made concrete.

Supplemental cross-references:
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — Knox's 4-entity split. Batch 14 confirms a 5th sibling: **Retail Product** is a 4th distinct catalog substrate (after Schedulable Service / Clinical Service / Billable Item / Resource-Inventory). Retail Products have their own schema (Retail Price + Online Price + Our Cost + SKU + Suppliers + Categories — different from Pricing Options).
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q2 (pressure-test scenarios) — Step 02 Botox 7-tier evidence is the canonical Q2 scenario #1 (Botox visit) instance. **Q1 encounter container architecture must reason about this:** a single Botox encounter could redeem 1 of 7 different Pricing Options based on units administered. Quantity tracking in OMNI must be cleaner than Mindbody's "7 distinct options."
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 (4-entity split) — Step 06 Retail Products page proves Retail is a separate substrate from Pricing Options. Step 09 Staff Profile shows staff is a 3+ capability-flag multi-domain primitive (not just "providers").
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 (capability flags) — Step 09 Staff Profile Settings + Sales settings = per-staff capability flag substrate (8+ flags visible). Same Q5 pattern as per-brand capability flags.

User feedback cross-refs:
- Gap #1 (room/provider/resource) — Step 01 Add Provider modal pre-populates `Booking time = 60` matching the parent service's Duration. Per-staff-per-service times default from service.duration. Q1 cross-axis composition.
- Gap #2 (intended visit vs actual; variable quantity) — Step 02 Botox 7-tier = canonical evidence of Mindbody's workaround. OMNI substrate must handle this elegantly (1 Pricing Option with quantity field, not 7 separate options).
- Gap #4 (progress notes attached to visits) — Step 09 Staff Profile has "Private notes" rich-text editor at staff level. **Notes substrate is also per-staff**, not just per-client / per-appointment. 4+ notes substrates already: per-appointment / per-client / per-cart-line / per-staff.
- Gap #6 (cross-patient metrics) — Step 02 Pricing Options 238-row ledger + Sessions column N (3-pack = 3 sessions) implies aggregation metrics (visits-purchased-vs-redeemed per pricing option per client) are substrate-derivable.

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-14 at 12.28.49 AM.png`
**URL:** Same as Batch 13 Step 10 (StaffAssignment legacy ASP)
**Feature area:** `services_products_staff_add_new`
**Inferred screen title:** Add New Provider modal (TYPO: "Add New Provder") opened inline from Staff Assignment — 7 fields: First/Last/Gender/Default pay type/Booking 60/Prep None/Finish None

### TEXT CONTENT (VERBATIM)

```
[Modal centered, light blue header:]

Add New Provder                                                                ×    ← VERBATIM typo from Mindbody

First name              [                                          ]
Last name               [                                          ]
Gender                  [Female                                  ▼]   ← default
Default pay type        [No pay                                   ▼]
Booking time            [60                              ] minutes  ← pre-filled from service
Prep time               [None                            ] minutes
Finish time             [None                            ] minutes

                                                    [Cancel]  [Add]
```

### UI ELEMENTS / VISUAL MARKERS

- **Verbatim typo in modal title:** "Add New Provder" — actual Mindbody bug, NOT my transcription error
- **Inline new-staff-creation context:** This modal opened from Step 10 Batch 13 (Staff Assignment to BH HydraFacial). Creating a new provider HERE auto-binds them to the parent service.
- **Booking time pre-fills 60** (matches HydraFacial service duration)
- **Default pay type = No pay** (matches existing staff defaults)
- **Gender field default = Female** (statistical bias for medspa clinic? Or arbitrary)

### ARCHITECTURAL OBSERVATIONS

**Inline-create-with-binding pattern:** Adding a new staff from inside a service's Staff Assignment context creates BOTH:
- New `staff` record
- New `staff_service_assignment` row binding to parent service

OMNI substrate: support context-aware create (creating an entity from inside another entity's binding context auto-creates the binding). Reduces 2-step workflows to 1-step.

**Substrate primitive `pay_type` enum:** Default pay type = "No pay" implies an enum {No pay / Hourly / Per session / Per service / Salary / etc.}. Layer 2 Section J cross-domain (payroll integration).

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-14 at 12.29.30 AM.png`
**URL:** `clients.mindbodyonline.com/app/services-products/pricing`
**Feature area:** `services_products_pricing_global`
**Inferred screen title:** Pricing Options GLOBAL admin — 238-row master ledger; visible: **BOTOX 7-TIER as user feedback gap #2 workaround** (Botox 20/30/40/50/60/64 Units @ $14.00/Unit + base Botox ($14.00/Unit) $0 + Botox - Return Visit $0)

### TEXT CONTENT (VERBATIM)

```
[URL: services-products/pricing]
[Search bar] [filters: Active ▼ / All Service Types ▼ / All Sales Channels ▼ / Service Categories ▼ / Memberships ▼ / Apply]

Name                                      Sessions  Service Type    Service Category    Price   Active  Sell online  Dup  ⋮
─────────────────────────────────────────────────────────────────────────────────────────────────────
Biologique Recherche Facial (60 Mins)       1       Appointments    1. Facials         $200.00   ☑     ☑      [⎘]  ⋮
Biologique Recherche Facial (90 Mins)       1       Appointments    1. Facials         $275.00   ☑     ☑      [⎘]  ⋮
Biologique Recherche Signature Facial (60)  1       Appointments    X) Internal Sched  $165.00   ☑     ☑      [⎘]  ⋮
BioRePeel                                   1       Appointments    1. Facials         $250.00   ☑     ☑      [⎘]  ⋮
Botox - Return Visit                        1       Appointments    5. Injectables       $0.00   ☑     ☑      [⎘]  ⋮
Botox ($14.00/Unit)                         1       Appointments    5. Injectables       $0.00   ☑     ☐      [⎘]  ⋮  ← NOT sold online
Botox (20 Units @ $14.00/Unit)              1       Appointments    5. Injectables     $280.00   ☑     ☑      [⎘]  ⋮
Botox (30 Units @ $14.00/Unit)              1       Appointments    5. Injectables     $420.00   ☑     ☑      [⎘]  ⋮  ← active row highlighted
Botox (40 Units @ $14.00/Unit)              1       Appointments    5. Injectables     $560.00   ☑     ☑      [⎘]  ⋮
Botox (50 Units @ $14.00/Unit)              1       Appointments    5. Injectables     $700.00   ☑     ☑      [⎘]  ⋮
Botox (60 Units @ $14.00/Unit)              1       Appointments    5. Injectables     $840.00   ☑     ☑      [⎘]  ⋮
Botox (64 Units @ $14.00/Unit)              1       Appointments    5. Injectables     $896.00   ☑     ☑      [⎘]  ⋮
Botox (Lip Flip)                            1       Appointments    5. Injectables       $0.00   ☑     ☑      [⎘]  ⋮
Botox (Returning)                           1       Appointments    5. Injectables       $0.00   ☑     ☑      [⎘]  ⋮  ← duplicate name #1
Botox (Returning)                           1       Appointments    5. Injectables       $0.00   ☑     ☑      [⎘]  ⋮  ← duplicate name #2
Botox (Returning)                           1       Appointments    5. Injectables       $0.00   ☑     ☑      [⎘]  ⋮  ← duplicate name #3

Total: 238                                                                                   Rows per page: 100 ▼   1-100 of 238   ‹ ›
```

### UI ELEMENTS / VISUAL MARKERS

- **238 total pricing options** in this clinic (Total footer)
- **7-tier Botox quantity workaround visible:** 20/30/40/50/60/64 unit variants — 6 quantity tiers + base Botox ($14.00/Unit) $0 placeholder + Botox - Return Visit (returning-client variant) + Botox (Lip Flip) (anatomical-region variant) + 3× Botox (Returning) duplicates
- **`Botox ($14.00/Unit)` has Sell online = ☐ OFF** — the unit-only base option is NOT bookable online; clients can't book "Botox" without selecting a quantity tier
- **Duplicate naming "Botox (Returning)" x3** — historical data integrity issue. Mindbody allows duplicate names; no uniqueness constraint at substrate level.
- **`X) Internal Scheduling` service category** = staff/internal-only category prefixed with X) to sort to bottom (numeric prefix sort)
- **`Sessions` column = 1 for all visible** — single-session pricing options (would be 3 for 3-pack, etc., as seen in Step 03)
- **Service Type filter values implied:** Appointments / Arrivals / Memberships / etc.

### ARCHITECTURAL OBSERVATIONS

**THE BOTOX 7-TIER IS THE DEFINITIVE USER FEEDBACK GAP #2 WORKAROUND.** User's literal words from `mindbody_user_feedback_raw.md` gap #2:

> *"we have to use botox as a 'product' so we can specify botox $14/unit then we type in 20 units administered"*

Mindbody's actual implementation creates SEPARATE Pricing Options for EACH quantity tier:
- Botox (20 Units @ $14.00/Unit) — $280 (= $14 × 20)
- Botox (30 Units @ $14.00/Unit) — $420 (= $14 × 30)
- Botox (40 Units @ $14.00/Unit) — $560
- Botox (50 Units @ $14.00/Unit) — $700
- Botox (60 Units @ $14.00/Unit) — $840
- Botox (64 Units @ $14.00/Unit) — $896

This is a **substrate-level workaround for the missing "variable quantity" pricing option type.** For 100-unit administered cases, the clinic must EITHER create a new pricing option (Botox 100 Units @ $14.00/Unit) OR fall back to the "Botox $14.00/Unit" base + Botox-in-Products quantity-multiplied workaround (Batches 8-9).

**For OMNI Q3 4-entity split + Q4 mode-per-service-line:** OMNI's Pricing Option / Billable Item substrate needs a `quantity_strategy` enum:
```sql
CREATE TYPE quantity_strategy AS ENUM (
  'fixed',                  -- 1 unit (Single Session)
  'per_unit_quantity',      -- variable units (Botox $14/unit × N)
  'package_count',          -- N-pack of sessions
  'unlimited_period',       -- unlimited within period
  'subscription_recurring'  -- subscription
);
```

Plus a `default_unit_price` field for `per_unit_quantity` types. This collapses Mindbody's 7-tier Botox workaround into 1 pricing option with quantity variability.

**For Layer 2 Section I (OMNI competitive moats):** the clinical-grade structured commerce moat is concretely visible here. Mindbody's flat pricing model forces the 7-tier workaround AND the Botox-in-Products workaround (Batch 8). OMNI's `quantity_strategy` enum + clinical encounter substrate would eliminate both.

**Duplicate naming is a data-integrity problem.** Mindbody allows it; OMNI should enforce uniqueness within a clinic's pricing option catalog.

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-14 at 12.29.50 AM.png`
**URL:** Same as Step 02 (scrolled up to top of list)
**Feature area:** `services_products_pricing_global`
**Inferred screen title:** Pricing Options GLOBAL admin scrolled to top — visible: `Pricing Options` header + More / Organize Pricing Options / Add Pricing Option buttons; first 13 alphabetical pricing options including `*MEETING*` / `*Rep Meeting*` (internal-scheduling staff meeting types as Pricing Options); BBL HEROic 3-Pack with Sessions=3

### TEXT CONTENT (VERBATIM)

```
Pricing Options                                  [More ▾]  [Organize Pricing Options]  [Add Pricing Option]

[filters same as Step 02]

Name                                      Sessions  Service Type    Service Category    Price    Active  Sell online
─────────────────────────────────────────────────────────────────────────────────────────────────────
( plated )™ Exosomes by Skin Science      1         Appointments    2. Add-Ons          $65.00   ☑     ☑
*MEETING*                                  1         Appointments    5. Injectables       $0.00   ☑     ☐
*Rep Meeting*                              1         Appointments    11. Provider Consult $0.00   ☑     ☐
+Staff Interview+                          1         Appointments    11. Provider Consult $0.00   ☑     ☐
+Staff Meeting+                            1         Appointments    11. Provider Consult $0.00   ☑     ☐
3-Pack                                     3         Appointments    4. Skin Treatments  $1,500.00 ☑    ☑
Aquagold                                   1         Appointments    4. Skin Treatments     $0.00 ☑    ☑
Aquagold facial                            1         Arrivals        Memberships bloom    $0.00   ☑     ☐
Aquagold Facial                            1         Appointments    5. Injectables       $0.00   ☑     ☐
Aquagold Facial                            1         Appointments    1. Facials          $0.00    ☑    ☑
BBL HEROic 3-Pack                          3         Appointments    4. Skin Treatments $1,350.00 ☑    ☑
BBL HEROic Photofacial                     1         Appointments    4. Skin Treatments  $500.00  ☑    ☑
BH DermaGloss (Dermaplane + Glacial)       1         Appointments    4. Skin Treatments  $220.00  ☑    ☑
```

### UI ELEMENTS / VISUAL MARKERS

- **3 header CTAs:** More ▾ / Organize Pricing Options / Add Pricing Option
- **`Organize Pricing Options`** = bulk admin operation (likely drag-reorder, group, sort)
- **Star-asterisk-naming pattern** for internal items: `*MEETING*`, `*Rep Meeting*`, `+Staff Interview+`, `+Staff Meeting+` — convention to sort internal items separately
- **`Aquagold facial`** has Service Type = **Arrivals** (NOT Appointments) — implies different scheduling primitive: Arrivals are a 2nd scheduling type
- **Service Categories visible:** 1. Facials / 2. Add-Ons / 4. Skin Treatments / 5. Injectables / 11. Provider Consultations / Memberships bloom (special non-numbered category)
- **3 duplicate `Aquagold facial` / `Aquagold Facial`** rows with different Service Type / Service Category — implies pricing options are versioned across contexts

### ARCHITECTURAL OBSERVATIONS

**Service Type column has at least 2 values: `Appointments` and `Arrivals`.** Arrivals is Mindbody's separate scheduling primitive (different left-nav entry "Arrivals" visible in Step 06 mobile view). Per chat marker 5 mesh dimension: Service Type discriminates the SCHEDULING-AREA the pricing option applies to. Possible enum:
- Appointments (1-to-1 booking)
- Arrivals (drop-in / walk-in / time-slot)
- Classes (group class booking)
- Courses (multi-session program)

**Internal-only pricing options** (*MEETING* / *Rep Meeting* / +Staff Interview+ / +Staff Meeting+) — Mindbody uses pricing-option substrate for INTERNAL scheduling blocks (not commerce). Sell online = OFF. This is the substrate hook for "block time" / "internal meeting" / "out of office" — same Pricing Option table, semantic-only difference.

For OMNI: internal-vs-external pricing options should be:
- (A) Same table with `is_internal` boolean flag (Mindbody pattern)
- (B) Separate substrate (`internal_scheduling_blocks` table)
- (C) Flag-discriminated via service_type enum

Mindbody's (A) keeps the schema simple; OMNI may prefer (B) for cleaner semantic separation.

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-14 at 12.30.07 AM.png`
**URL:** Same
**Feature area:** `services_products_pricing_global`
**Inferred screen title:** Pricing Options global with `More ▾` dropdown EXPANDED — 4 admin sub-pages: Membership Settings / Tax Rates / Promo Codes / Intro Offers

### TEXT CONTENT (VERBATIM)

```
[More ▾ dropdown expanded:]

Membership Settings
Tax Rates
Promo Codes
Intro Offers
```

### UI ELEMENTS / VISUAL MARKERS

- 4 separate admin sub-pages accessible from Pricing Options More menu

### ARCHITECTURAL OBSERVATIONS

**4 distinct substrate primitives** sibling to Pricing Options:
1. **Membership Settings** — global membership program config (separate from individual membership pricing options)
2. **Tax Rates** — tax bucket library (Sales Tax / Tax 2 from Batch 13 Step 08 reference here)
3. **Promo Codes** — coupon/discount code library (separate from Discount Programs from Batch 13 Step 09)
4. **Intro Offers** — new-client special pricing (Batch 9 row 91 New Patient Special payment method points here)

**Promo Codes vs Discount Programs distinction:**
- Promo Codes = manually-entered coupons (POS clerk types a code; client supplies code)
- Discount Programs = automatic loyalty tier discounts (membership-tier-driven, applied by substrate, not user)

OMNI substrate must distinguish both.

**Intro Offers** as separate primitive — different rules from regular pricing options:
- One-time-per-client restriction (substrate enforced)
- Eligibility based on `client.first_visit_date IS NULL`
- Marketing-driven (often time-limited campaigns)

Confirms Mindbody's commerce substrate has at least 5 primitives feeding POS:
- Pricing Options (general catalog)
- Membership Settings (subscription tier framework)
- Tax Rates (line-item tax buckets)
- Promo Codes (coupon library)
- Intro Offers (new-client campaign library)

Plus 24+ Payment Methods (Batch 9-11 cumulative).

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-14 at 12.31.07 AM.png`
**URL:** Same as Step 02
**Feature area:** `services_products_pricing_global_mobile`
**Inferred screen title:** Pricing Options page in narrowed/mobile-responsive viewport — left nav collapses to icons; Services & Products section popup shows nested entries

### TEXT CONTENT (VERBATIM)

```
[Narrower viewport; left nav icons-only:]

[Icon-stack: dashboard / appointments / rooms / check-in / clients / pos / insights / marketing / services-products (selected) / staff / settings]

Pricing Options
[Search]
Name
( plated )™ Exosomes by Skin Science
*MEETING*
Aquagold facial
Aquagold Facial
[truncated for narrow viewport]

[Floating popup over icon nav:]
Services & Products
  Classes
  Appointments
  Courses
  Retail Products
  Pricing (highlighted)
  Arrivals
  Contracts
```

### UI ELEMENTS / VISUAL MARKERS

- Confirms 7 sub-pages under Services & Products: Classes / Appointments / Courses / Retail Products / Pricing / Arrivals / Contracts
- Responsive UI hides full nav at narrow viewport; floating popup shows the nested structure

### ARCHITECTURAL OBSERVATIONS

**Services & Products nav has 7 sub-pages** (vs the 6 visible in Batch 12 desktop view + Pricing more menu's 4 admin items):
- **Catalog entries:** Classes / Appointments / Courses / Retail Products / Pricing / Arrivals / Contracts (7)
- **Pricing more menu admin entries:** Membership Settings / Tax Rates / Promo Codes / Intro Offers (4)

Total 11 sub-areas in Services & Products domain. Layer 2 Section C (configuration surface) taxonomy must enumerate all.

**Mobile/responsive evidence** — Mindbody's web UI is responsive (Layer 2 Section M mobile-vs-desktop UX distinction has evidence on the desktop side too: same data, narrower projection).

---

## Step 06

**File:** `screenshots/Screen Shot 2026-05-14 at 12.31.49 AM.png`
**URL:** `clients.mindbodyonline.com/app/services-products/retail`
**Feature area:** `services_products_retail_products`
**Inferred screen title:** Retail Products admin — 10 visible products with COMPLETELY DIFFERENT schema from Pricing Options (Retail Price / Online Price / Our Cost / SKU / Modified / Created with audit stamps); Suppliers / Categories filters

### TEXT CONTENT (VERBATIM)

```
[URL: services-products/retail]
Retail Products                                    [Inventory ▾] [More ▾] [Add a New Product]
[All ▾] [Search] [filter icon] [All Suppliers ▼] [All Categories ▼] [Active ▼] [Apply]

Product                                  [SKU]         Retail Price   Online Price   Our Cost   Active  Sell online  Modified    Created    [★]
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
CoolSculpting (PETITE): QTY 1 Cycle      5127458525   $ 800           $ 800           $ 150     ☑     ☐         06/28/2023  AS 04/24/2019  ☐
CoolSculpting (SMOOTH): QTY 1 Cycle      5856293742   $ 800           $ 800           $ 150     ☑     ☐         06/28/2023  AS 04/24/2019  ☐
Biologique Recherche Biokiss             7908342317   $ 68            $ 68            $ 0       ☑     ☐         08/06/2024  RJ 12/02/2022  ☐
Biologique Recherche Creme VIP O2        1160450140   $ 215           $ 0             $ 0       ☑     ☐         12/28/2023  RJ 03/07/2023  ☐
Biologique Recherche Progeskin 1 oz      6403163067   $ 178           $ 178           $ 0       ☑     ☐         07/30/2024  AS 06/27/2024  ☐
BR Creme Contour Des Yeux Biosensible 0.5 oz  9755648992  $ 130       $ 130           $ 0       ☑     ☐         08/06/2024  RJ 04/18/2023  ☐
DF Restylane (KYSSE): QTY 1cc Syringe    6153917914   $ 740           $ 740           $ 370     ☑     ☐         06/30/2024  AS 06/23/2020  ★
Peels (VI PEEL / ADVANCED): QTY 1 TX     9273893108   $ 230           $ 230           $ 0       ☑     ☐         06/28/2023  RJ 05/17/2022  ☐
( plated ) Skin Science - CALM w Exosomes 15ml  1496574562  $ 258    $ 258           $ 0       ☑     ☑         01/04/2025  NC 01/04/2025  ☐

TOTAL PRODUCTS: MORE THAN 100                                                                Rows per page: 100 ▼   1-100 of more than 100   ‹ ›
```

### UI ELEMENTS / VISUAL MARKERS

- **9 distinct columns** for retail products (vs Pricing Options 8 columns) with non-overlapping schema:
  - Product (name)
  - SKU (10-digit numeric, hyperlinked — Mindbody barcode)
  - Retail Price (in-clinic)
  - Online Price (often $0 for products NOT sold online — internal-stock-only items)
  - Our Cost (COGS for margin tracking)
  - Active (boolean)
  - Sell online (boolean — separate from Active)
  - Modified date
  - Created (staff initials + date)
  - Star/favorite (per-user pin)
- **Audit trail visible:** Modified date + Created date + Created-by staff initials (NC / AS / RJ) — substrate primitive audit_actor + audit_timestamp on retail product rows.
- **SKU numeric** (10 digits, e.g., 5127458525) — substrate primary identifier separate from product display name. **Different ID namespace from Service ID (Step 10 Batch 12 = 88) and Pricing Option ID (Batch 13 Step 07 = 101489).**
- **`More than 100` indicates 100+ products** total. Mindbody compressed count display.
- **DF Restylane** marked with ★ (favorited by current user NC — per-user pin substrate)
- **CoolSculpting cycles** are products with retail $800, cost $150 = 80%+ margin (commerce-line-item profitability tracking implied)

### ARCHITECTURAL OBSERVATIONS

**Retail Products is a DISTINCT SUBSTRATE from Pricing Options.** 4 KEY substrate primitives surface:
1. **SKU** (barcode) — physical product identifier
2. **Our Cost** — COGS for margin tracking (NOT visible on Pricing Options!)
3. **Suppliers** filter — implies a `suppliers` table joined to retail products
4. **Inventory** button (top-right CTA) — separate inventory management workflow (stock counts, reorder points, etc.)

**Pricing Options vs Retail Products dichotomy:**
- **Pricing Options** = service entitlements (booking-attached, consumption-on-visit)
- **Retail Products** = physical inventory (sold at POS, no booking required, decrement stock)
- But: a Retail Product CAN be added to a service cart (Batch 8 Botox-in-Products = Botox vials sold as products with quantity multiplier)

For Q3 4-entity split, this is the 4th distinct entity:
- **Schedulable Service** (Appointment Type — Batch 12)
- **Billable Item** (Pricing Option — Batches 13-14)
- **Clinical Service** (intersection of Schedulable + Clinical-coded — Q1 territory)
- **Resource/Inventory Item** — Retail Product (Step 06) + Resource/Machine (Service.# deducted bridge)

**Retail Product substrate has its own audit-stamped lifecycle** (Created by NC on 01/04/2025, Modified 01/04/2025). DL-14 actor-stamped event envelope applies here.

**Star/favorite per-user-per-resource** substrate primitive. `user_resource_favorite { user_id, resource_table, resource_id, favorited_at }`.

---

## Step 07

**File:** `screenshots/Screen Shot 2026-05-14 at 12.33.53 AM.png`
**URL:** `clients.mindbodyonline.com/app/staff`
**Feature area:** `staff_list`
**Inferred screen title:** Staff list — 10 of ~20 staff visible with NAME / ROLE / PHONE NUMBER / EMAIL columns; Filter by Role (All ▼) + Status (Active ▼) + Export Data; Add New Staff CTA

### TEXT CONTENT (VERBATIM)

```
[URL: /app/staff]

Staff                                                                       [More ▾] [Add New Staff]

[Search by staff name]   Filter by  [Role: All ▼]  [Status: Active ▼]                [Export Data]

NAME                          ROLE                    PHONE NUMBER       EMAIL                              ⋮
AD  Angelina Dedvukaj         BH | Service Provider   +1 (586) 804-4511  angelina.dedvukaj@bloom.health     ⋮
DB  Dr. Rana Balboul          BH | Service Provider   +1 (248) 996-9932  balboul.rana@gmail.com             ⋮
AG  Arshnoor Ghare            BH | Front Desk         +1 (517) 513-4753  arshnoorghare@oakland.edu          ⋮
CK  Chanel Khemmoro           BH | Manager            +1 (248) 880-5150  chanel.khemmoro@bloom.health       ⋮
[photo] Parrah Grundy         BH | Service Provider   +1 (313) 784-8045  parrah.grundy@bloom.health         ⋮
[photo] Amber Allen           BH | Service Provider   +1 (248) 787-4085  amber.allen@bloom.health           ⋮
[photo] Parisa Jaffar         BH | Service Provider   +1 (501) 256-3986  parisa.jaffar@bloom.health         ⋮
[photo] Raina Patel           BH | Manager            +1 (248) 935-9726  raina.patel@bloom.health           ⋮
[photo] Barb Crawford         BH | Manager            +1 (248) 914-0708  barb.crawford@bloom.health         ⋮
MS  Marissa Stewart           BH | Front Desk         +1 (949) 572-9768  marissabrooke33@gmail.com          ⋮

                                                                          Rows per page: 10 ▼   1 | 2  ‹ ›
```

### UI ELEMENTS / VISUAL MARKERS

- **3 visible Role values:** BH | Service Provider / BH | Front Desk / BH | Manager
- **Role naming convention:** `<Brand> | <Role>` — Brand prefix + pipe + Role
- **Avatars:** Either initials (AD/DB/AG/CK/MS) OR actual photo (5 staff with uploaded photos)
- **Email mixed sources:** @bloom.health (primary work domain) + @gmail.com + @oakland.edu (external personal emails). Some staff use personal email.
- **Pagination:** 10 per page (smaller default than 100 for pricing options); 2 pages = ~20 total staff
- **Filter axes:** Role (filter to one role) + Status (Active / Inactive)
- **Export Data button** (CSV export)

### ARCHITECTURAL OBSERVATIONS

**Staff Role substrate is a typed enum with brand prefix:**
```sql
staff { id, name, role_id, ... }
role  { id, brand_id, name, ... }
```

Role examples: "Service Provider", "Front Desk", "Manager", "Owner" (not visible but implied), "Contractor" (per Knox marker 6 chat reference).

**Role taxonomy is per-brand:** `BH |` prefix indicates Bloom Health brand. Multi-brand clinics would have `BH | Service Provider` and `OtherBrand | Service Provider` as distinct roles.

**Staff have 2 ID surfaces:**
- Step 09 (Staff Profile URL) reveals `trnID=100000047` (legacy numeric ID, 47) AND `staffUserID=68bf28d659198259cf98ab00` (UUID-style hex). Mindbody uses BOTH ID schemas.
- OMNI: UUID-only.

---

## Step 08

**File:** `screenshots/Screen Shot 2026-05-14 at 12.34.09 AM.png`
**URL:** Same as Step 07
**Feature area:** `staff_list`
**Inferred screen title:** Staff list with ⋮ menu EXPANDED on Angelina Dedvukaj row — 4 per-staff actions: Manage Appointment Types / Manage Schedules / Manage Class Pay Rates / Edit Staff Profile

### TEXT CONTENT (VERBATIM)

```
[⋮ menu expanded on Angelina Dedvukaj row:]

Manage Appointment Types
Manage Schedules
Manage Class Pay Rates
Edit Staff Profile
```

### UI ELEMENTS / VISUAL MARKERS

- 4 per-staff admin operations:
  - Manage Appointment Types (assign/unassign services from THIS staff)
  - Manage Schedules (work calendar / availability for this staff)
  - Manage Class Pay Rates (group-class-specific pay rates — separate primitive from appointment pay rates)
  - Edit Staff Profile (navigates to Step 09)

### ARCHITECTURAL OBSERVATIONS

**Class Pay Rates is a SEPARATE substrate from Appointment Pay Rates.** Group classes have different commission models than 1-1 appointments. Per chat marker 14 Knox enumeration "staff as multi-domain": staff x service-type-context x pay-rate is a 3-axis substrate.

**4 actions are read-and-mutate; no delete/deactivate in this quick menu.** Delete/deactivate operations require Edit Staff Profile flow.

---

## Step 09

**File:** `screenshots/Screen Shot 2026-05-14 at 12.34.34 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/asp/adm/adm_trn_e.asp?trnID=100000047&staffUserID=68bf28d659198259cf98ab00`
**Feature area:** `staff_profile_editor`
**Inferred screen title:** Staff Profile editor — Amber Allen (legacy ASP URL); 4 horizontal tabs (Provider Profile / Staff Appointment Setup / Appointment Availability / Group Lesson Pay Rates) + 3-column form (left photo+login+permissions, center contact+address+notes, right Settings + Sales settings + Google Calendar Integration)

### TEXT CONTENT (VERBATIM)

```
[Breadcrumb: Staff / Amber Allen]

[4 horizontal tabs:]
Provider Profile (active)  |  Staff Appointment Setup  |  Appointment Availability  |  Group Lesson Pay Rates

Staff Profile

[LEFT COLUMN:]
[Photo Amber Allen]                                              [Save] [add staff icon]
[Delete photo button]
                                                                  Settings
🪪 Login                                                          ☑ Desk staff
   amber.allen@bloom.he... ●                                      ☑ Provider (for appointments)
   Edit login                                                     ☑ Provider (for group lessons)
                                                                  More »
🔒 Permissions
   Role                                                           Sales settings
   BH | Service Provider                                          ☐ Rep 1
   Edit permissions                                               ☑ Can be assigned followups
                                                                  ☐ Earns commissions
👤 Gender                                                         ☑ Earns tips
   Female

Provider ID #                                                     [Google Calendar Integration  ⓘ]
   Set Staff ID                                                   [Google logo]
                                                                  Share your MINDBODY schedule with your Google Calendar.
Employment dates                                                  Before you can share your schedule, have the Owner enable
   Set start date 📅                                              Google Calendar Syncing on the General Setup & Options
                                                                  screen.

[CENTER COLUMN — Form fields:]
Amber Allen

Contact
   ✉ amber.allen@bloom.health         Email
   ☐ Opt in for feature updates from MINDBODY
   📱 1.248.787.4085
   📞 Home phone
   ✉ Work phone
   More »

Address
   [Street]
   [City]               [Postal code]
   [Select State/Province]
   [UNITED STATES]

Private notes
   [Rich-text editor with Font Size / B / I / U / strikethrough / align / lists / undo / redo / color]
```

### UI ELEMENTS / VISUAL MARKERS

- **4 horizontal tabs in Staff Profile context:** Provider Profile (active) + Staff Appointment Setup + Appointment Availability + Group Lesson Pay Rates
- **Settings panel right-column (3 visible flags + More):**
  - ☑ Desk staff
  - ☑ Provider (for appointments)
  - ☑ Provider (for group lessons)
  - More » (additional flags hidden)
- **Sales settings panel (4 flags):**
  - ☐ Rep 1
  - ☑ Can be assigned followups
  - ☐ Earns commissions
  - ☑ Earns tips
- **Google Calendar Integration card** — requires Owner enablement at General Setup & Options screen FIRST. Two-tier capability:
  - Brand-level: Owner enables Google Calendar Syncing (Q5 capability)
  - Staff-level: Individual staff connects their personal Google Calendar
- **Per-staff Private notes** (rich-text editor)
- **Address: 5 fields** (Street / City / Postal / State / Country)
- **Contact: 5 phone slots** (Email + Mobile + Home + Work + More»)

### ARCHITECTURAL OBSERVATIONS

**Per-staff capability flags substrate (8+ flags visible, expandable via More»):**

```sql
staff_capability {
  id, staff_id,
  desk_staff           BOOLEAN,
  provider_appointments BOOLEAN,
  provider_group_lessons BOOLEAN,
  is_sales_rep         BOOLEAN,
  can_be_assigned_followups BOOLEAN,
  earns_commissions    BOOLEAN,
  earns_tips           BOOLEAN,
  -- ... more from More»
}
```

For Q5 (capability flags) + system map 1D (auth.capabilities): **per-staff capability flags are SEPARATE from per-brand capability flags.** Both layers exist:
- Brand: "scheduling enabled" / "POS enabled" (Q5 enumeration)
- Staff: "Desk staff" / "Provider for appointments" (this screen)

The 2-layer model maps to OMNI's `lib/auth/capabilities.ts` with both `requireCapability(brand_capability)` and `requireStaffCapability(staff_capability)`.

**Provider mode is multi-typed** (appointments vs group_lessons). Implies 2 different schedule grids (appointments grid vs group lesson grid). Layer 2 Section A entity model.

**Google Calendar Integration is brand-gated then staff-enabled.** Two-tier consent + capability pattern. Substrate:
- `brand.google_calendar_sync_enabled BOOLEAN`
- `staff.google_calendar_connected BOOLEAN`
- Both must be TRUE for sync to work.

**4 tabs in Staff Profile:**
1. Provider Profile (this view — identity, contact, capability flags)
2. Staff Appointment Setup (per-staff service assignments, pay rates, prep/finish times)
3. Appointment Availability (work calendar — system map 1H.4 acquisition channel relevant)
4. Group Lesson Pay Rates (group-class commission overrides)

Mindbody's staff substrate is at least 4-tab deep. OMNI staff substrate = 4+ projection views.

---

## Step 10

**File:** `screenshots/Screen Shot 2026-05-14 at 12.35.18 AM.png`
**URL:** Same as Step 09
**Feature area:** `staff_login_edit_modal`
**Inferred screen title:** Edit login modal — Email (editable) + Send password reset email link + Remove login section ("This will disable the staff member's ability to log into this studio.")

### TEXT CONTENT (VERBATIM)

```
[Modal:]

Edit login                                                                      ×

Edit login

Email
[amber.allen@bloom.health                                                       ]

Send password reset email   (link)

Remove login
This will disable the staff member's ability to log into this studio.

[ 🗑 Remove login ]

                                                            [Cancel]  [Save]
```

### UI ELEMENTS / VISUAL MARKERS

- 3 distinct operations on login:
  - **Edit Email** — change the staff's login email (mutable identity)
  - **Send password reset email** — async password reset flow
  - **Remove login** — disable login WITHOUT deleting the staff record (preserves audit trail for past actions)

### ARCHITECTURAL OBSERVATIONS

**Login is SEPARABLE from staff record.** Critical substrate decision:
- `staff` record persists (preserves audit trail of all past actions, payroll history, schedule history)
- `staff_login` (or `auth.user_for_staff`) is removable independently

For OMNI:
- `staff { id, name, email, ..., is_active }`
- `auth.users { id, email, password_hash, ... }`
- `staff.auth_user_id` foreign key (nullable when login removed)

When login is removed: `staff.auth_user_id = NULL` but staff record remains. Future re-enablement just re-links a new auth.users row.

**This is the canonical "soft-disable" pattern for staff offboarding:** preserves all historical data while immediately revoking access. Per Knox marker 11 client merge-as-audit + system map 1J.10 enforcement plan: same pattern applied to staff identity revocation.

---

## Cumulative Batch 14 findings (additive to handoff 1-15 + Batches 11-13 findings 16-62)

### 63. Inline-create-with-binding pattern (new staff from service context auto-binds)
Step 01 Add New Provider modal opened from Staff Assignment auto-binds new staff to the parent service. OMNI substrate: context-aware create supports auto-binding.

### 64. **BOTOX 7-TIER PRICING OPTION WORKAROUND** — definitive canonical evidence of user feedback gap #2
Step 02. Mindbody creates separate Pricing Options for each Botox quantity (20/30/40/50/60/64 units + Lip Flip + Returning x3 + base $14/Unit). **THE workaround** user described in feedback raw. OMNI must implement `quantity_strategy` enum + variable-quantity Billable Items as 1st-class.

### 65. Service Type column has at least 2 values: Appointments and Arrivals (multiple scheduling primitives)
Step 03 shows Aquagold facial Service Type = Arrivals. Arrivals is a 2nd scheduling primitive (alongside Appointments). Likely also Classes / Courses per Step 05 left nav.

### 66. Internal-only pricing options use star-asterisk naming + Sell online OFF
Step 03 *MEETING* / *Rep Meeting* / +Staff Interview+ / +Staff Meeting+ — internal-scheduling blocks modeled as Pricing Options with Sell online ☐ OFF. OMNI: separate `internal_scheduling_blocks` substrate cleaner.

### 67. Duplicate naming is allowed (no substrate uniqueness constraint on Pricing Option names)
Step 03 Aquagold facial / Aquagold Facial x3 + Step 02 Botox (Returning) x3. OMNI must enforce uniqueness within clinic.

### 68. Service Categories use numeric prefix sort ordering (1. / 2. / X) Internal)
Step 03 categories `1. Facials / 2. Add-Ons / 4. Skin Treatments / 5. Injectables / 11. Provider Consult / X) Internal Sched / Memberships bloom`. Sort by leading-number convention; `X)` prefix sorts to bottom for internal categories.

### 69. Pricing-domain admin has 4 separate sub-pages (Membership Settings / Tax Rates / Promo Codes / Intro Offers)
Step 04. 4 substrate primitives sibling to Pricing Options. Plus 24+ Payment Methods (cumulative). Total 5+ commerce primitives at brand level.

### 70. Promo Codes ≠ Discount Programs (manual coupon vs auto loyalty)
Step 04 Promo Codes is distinct from Batch 13 Step 09 Member Discounts (4 programs incl. rotating 40/30/10). OMNI must distinguish.

### 71. Intro Offers is a separate substrate primitive (one-time-per-client eligibility)
Step 04. Confirmed primitive for new-client campaigns.

### 72. Services & Products has 7 catalog entries + 4 admin entries (11 sub-areas total)
Step 05 mobile/responsive view + Step 04 More menu. 11 sub-areas in Services & Products domain.

### 73. Retail Products is a DISTINCT 4th catalog substrate (SKU + Our Cost + Suppliers + Inventory + audit timestamps)
Step 06. Retail Product schema is non-overlapping with Pricing Options. Substrate:
- SKU (10-digit barcode)
- Our Cost (COGS for margin)
- Suppliers (vendor reference)
- Inventory (separate stock management)
- Created/Modified timestamps with audit_actor

### 74. Per-user resource favoriting substrate primitive (`★` icon)
Step 06 DF Restylane row has ★. `user_resource_favorite { user_id, table_name, resource_id, favorited_at }`.

### 75. 3+ visible Staff Role values with `<Brand> | <Role>` prefix convention
Step 07: BH | Service Provider / BH | Front Desk / BH | Manager. Role substrate is per-brand-scoped.

### 76. Staff have DUAL ID schemas (legacy trnID numeric + UUID-style staffUserID)
Step 09 URL `trnID=100000047&staffUserID=68bf28d659198259cf98ab00`. Mindbody migrated from numeric to UUID but preserved both for compatibility. OMNI: UUID only.

### 77. Staff Profile has 4 horizontal tabs (Provider Profile / Staff Appointment Setup / Appointment Availability / Group Lesson Pay Rates)
Step 09. 4 projection views on staff substrate.

### 78. Per-staff capability flags substrate (8+ flags: Desk staff / Provider appointments / Provider group lessons / Sales Rep / Followups / Commissions / Tips + More»)
Step 09. SEPARATE from per-brand capability flags. 2-layer capability model.

### 79. Per-staff Private notes (rich-text editor) — 5th notes substrate
Step 09. Plus: per-appointment (Batch 5), per-client (Batch 10), per-cart-line (Batch 7), per-payment (Batch 9) = 5+ notes substrate primitives.

### 80. Per-staff Address (5 fields) + 5 phone slots (Email / Mobile / Home / Work / More»)
Step 09. Same address+phone substrate as client (Batch 12 Step 03) — likely shared `contact_info` primitive.

### 81. Google Calendar Integration is 2-tier capability (brand-enabled + staff-connected)
Step 09 right column. Owner must enable Google Calendar Syncing at brand level FIRST; then each staff connects personal Google Calendar. 2-layer enablement substrate.

### 82. Login is SEPARABLE from Staff record (Remove login preserves staff for audit)
Step 10. Soft-disable pattern: `staff.auth_user_id = NULL`. Preserves staff record + history; revokes access immediately.

### 83. Edit login modal has 3 operations (Edit email / Send password reset / Remove login)
Step 10. 3 distinct auth-management operations on a single staff login record.

---

## End of Batch 14

Next batch: rows 142-N starting at `Screen Shot 2026-05-14 at 12.35.41 AM.png`. Likely continues Staff admin depth (Permissions / Staff Appointment Setup / Appointment Availability tabs) per chronological proximity.
