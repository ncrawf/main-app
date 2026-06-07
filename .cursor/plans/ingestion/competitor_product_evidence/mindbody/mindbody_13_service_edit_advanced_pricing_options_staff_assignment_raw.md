# Mindbody — Batch 13 raw capture: Service Edit Advanced options + Pricing Options drawer (4-type taxonomy + ⋮ menu) + Pricing Option Advanced Edit legacy page (with member discounts/commission/scheduling restrictions/auto-emails) + Staff assignment per-service with booking/prep/finish times

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~4:10 AM UTC-4)
Batch: 13
Feature area(s): `services_products_appointments_admin_edit`, `services_products_pricing_options_drawer`, `services_products_pricing_options_advanced_edit`, `services_products_staff_assignment_per_service`
Screenshots covered: 10 (rows 122-131 = 12.24.49 AM through 12.28.28 AM)

Chat cross-references:
- **Marker 5 (lines 2153-2597) — Service catalog / pricing engine / staff assignment / online booking** — Batch 13 is the deepest expansion of Knox marker 5. Every dimension of the "service catalog mesh" is operationally surfaced: pricing options taxonomy (Step 05), per-service staff assignment (Step 10), per-pricing-option commission rates (Step 09), scheduling restrictions / max sessions (Step 09), auto-email triggers per pricing option (Step 09).
- **Marker 6 (lines 2598-3721) — Settings as operating system** — Steps 07-09 (Pricing Option Advanced Edit legacy ASP page) is a canonical example of Mindbody's "deeply configurable business rules engine" — ~30 fields on one pricing-option configuration page. Knox marker 6 anchor.
- Pre-marker bucket 5 (variable quantity services) — Step 06 ⋮ menu has `Disassociate` action (per-service unlink) confirming pricing options are many-to-many to services; supports variable-quantity-via-multi-tier pattern (e.g., 4 Botox tier pricing options sharing 1 Botox service).
- Pre-marker bucket 10 (Checkout/POS/commerce) — Step 09 Activation Date triple (sale-date / first-visit / custom) is the entitlement-activation strategy substrate seen in cart→entitlement conversion (Batches 7-8).

Supplemental cross-references:
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 Knox's 4-entity split — Batch 13 is the canonical evidence base. Schedulable Service (Step 01 Edit page) and Billable Item (Step 07-09 Pricing Option page) are CLEARLY DIFFERENT substrate tables in Mindbody (separate URLs, separate ID namespaces, separate field schemas). Q3 4-entity split is at least 2-entity confirmed by Mindbody's own schema.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 — Steps 05-06 Pricing Options drawer + ⋮ menu Disassociate evidence: Pricing Options are many-to-many to Services via a join table. OMNI substrate primitive: `service_pricing_option_assignment` (or similar). 
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q4 (mode-per-service-line) — Step 05 "Create" dropdown reveals **4 pricing-option types as a taxonomy** (Single Session / Multiple Sessions / Unlimited Sessions / Autopay/Contract). This is a `pricing_option_type` enum at the substrate level. Mode-per-service-line per Q4 may be a similar enum at the service level.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 (capability flags) — Step 09 Member Discounts list (`GOLD MEMBERS 10% / VIP INJECTABLES 40/30/10 / ULTRA 25/25/10 / Coolsculpting VIP 40`) confirms per-clinic discount-program configurability is a substrate primitive.

User feedback cross-refs:
- Gap #1 (room/provider/resource independent + must align) — Step 10 Staff Assignment surfaces **3 per-staff-per-service time attributes:** Booking Time / Prep Time / Finish Time. Booking Time = actual service duration; Prep Time = pre-service setup buffer; Finish Time = post-service cleanup buffer. Total appointment block = Prep + Booking + Finish. DIFFERENT per staff (more experienced staff might have shorter prep time). DL-15 scheduling substrate spine must accommodate.
- Gap #2 (intended visit vs actual) — Step 09 Activation Date 3-option (sale-date / first-visit / custom) is the canonical "schedulable vs billable lifecycle" decoupling. Sale (Billable Item commit) ≠ Activation (when entitlement becomes consumable). OMNI substrate must model this entitlement_activation_date separately from sale_date.
- Gap #3 (subscriptions/memberships/POS/retail/gift cards/loyalty woven) — Step 05 Create-dropdown 4-type taxonomy CONFIRMS Mindbody collapses subscriptions/memberships into Pricing Options via `Autopay/Contract` type. Single substrate (Pricing Option) handles 4 distinct billing patterns. OMNI Q3 must reason about: single Billable Item table with type enum vs separate tables per billing pattern.

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-14 at 12.24.49 AM.png`
**URL:** `clients.mindbodyonline.com/app/services-products/appointment-types/edit/88`
**Feature area:** `services_products_appointments_admin_edit`
**Inferred screen title:** Edit appointment type — BH HydraFacial scrolled to Online Scheduling + Advanced options FULLY EXPANDED (Color / Capacity / # deducted / Sort order as required fields) + Cancel/Save buttons

### TEXT CONTENT (VERBATIM)

```
[Scrolled view of Edit appointment type page (ID 88):]

────── Online Scheduling ──────
Would you like to allow your clients to book this appointment online?
● Yes    ○ No

[Description rich-text editor with HydraFacial marketing copy]
[Toolbar: Aa B I U link align list list-num code]

▾ Advanced options

Do you want to convert this appointment to an add-on?
If you need to mark this appointment as an add-on, you can change that here.
○ Yes    ● No   ← currently No (HydraFacial is NOT an add-on)

Color                              Capacity *
[                ]                 [1                  ]
                                   ⓘ

# deducted *                       Sort order *
[0                ]                [1                  ]
ⓘ                                  ⓘ

                            [Cancel]  [Save]
```

### UI ELEMENTS / VISUAL MARKERS

- All 4 hover-popover attributes from Batch 12 Step 09 (Color / Capacity / Deducted / Sort order) are EDITABLE FIELDS here with required-field asterisks (`*`) on Capacity / # deducted / Sort order
- Tooltip info icons (`ⓘ`) on every field
- `# deducted` (not "Deducted") — the column header in the substrate is `num_deducted` or similar (likely inventory-decrement-per-booking counter)

### ARCHITECTURAL OBSERVATIONS

**Service substrate REQUIRED fields surfaced:**
- Name (required, Step 10 Batch 12)
- Duration in minutes (required, Step 10 Batch 12)
- Appointment category (required, Step 10 Batch 12)
- Capacity (required, Step 01 here)
- # deducted (required, Step 01 here)
- Sort order (required, Step 01 here)

**Substrate baseline:** every service has at least 6 required-non-null columns. Plus optional: Color, Description, Convert-to-add-on flag, online_bookable.

**`# deducted` semantic:** likely the inventory-decrement-on-booking integer. For a service that doesn't consume product inventory (e.g., HydraFacial as a SERVICE, separate from HydraFacial machine), # deducted = 0. For a product-as-service (Botox $14/unit), # deducted would scale with quantity. This is the substrate hook that lets Mindbody collapse Service + Inventory-Item conceptually — `# deducted` is the field that decides whether a booking decrements stock.

OMNI for Q3 4-entity split: this field is the bridge from Schedulable Service ↔ Resource/Inventory Item. If OMNI separates the entities, the join becomes explicit: `service_inventory_link { service_id, inventory_item_id, decrement_per_booking }`.

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-14 at 12.25.13 AM.png`
**URL:** Same as Step 05 Batch 12 (services-products/appointment-types list view)
**Feature area:** `services_products_pricing_options_drawer`
**Inferred screen title:** Right-side drawer opened from HydraFacial row — **Staff tab** active (3 staff assigned with per-staff Pay rate dropdown + Remove links + Staff schedules + Assign Staff buttons)

### TEXT CONTENT (VERBATIM)

```
[Right-side drawer overlay, anchored to BH HydraFacial row:]

BH Hyd... [truncated header]                                        ●Set Up Add-Ons              ×

🏷 Pricing      |     👤 Staff (active, underlined)

[List of assigned staff:]

AA  Amber Allen                                                                          Remove
    Pay rate
    [No pay                                                          ▼]

AD  Angelina Dedvukaj                                                                    Remove
    Pay rate
    [No pay                                                          ▼]

PG  Parrah Grundy                                                                        Remove
    Pay rate
    [No pay                                                          ▼]

                    [Staff schedules 📅]    [Assign Staff]
```

### UI ELEMENTS / VISUAL MARKERS

- **2 tabs in drawer:** Pricing | Staff
- **Per-staff Pay rate dropdown** with current value `No pay` — implies pay rates are per-(staff × service) assignment, NOT per-staff or per-service alone
- **Initials avatars** (AA / AD / PG) as visual identifier
- **2 footer buttons:** Staff schedules (📅 icon) + Assign Staff
- **Remove** link per row — per-staff disassociation

### ARCHITECTURAL OBSERVATIONS

**Staff ↔ Service is a join table with pay rate column:**
- `staff_service_assignment { id, staff_id, service_id, pay_rate_id, booking_time_minutes, prep_time_minutes, finish_time_minutes }` — Step 10 expands more columns
- Pay rates are likely a separate entity (Pay Rate definitions) referenced by the assignment

**Drawer-as-quick-config pattern** — clicking the catalog row's name doesn't immediately jump to Edit page; it opens a drawer for fast Pricing/Staff config. Edit page (Batch 12 Step 10) is for deeper Service-level config. UI separation:
- Drawer = "associative" config (which pricing options + which staff are linked)
- Edit page = "intrinsic" config (Service's own attributes)

OMNI substrate design implication: this UI separation matches the data separation — joins are quick-configurable, intrinsic attributes are dedicated form.

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-14 at 12.25.30 AM.png`
**URL:** Same (drawer Pricing tab now active)
**Feature area:** `services_products_pricing_options_drawer`
**Inferred screen title:** Drawer Pricing tab — 4 active pricing options under `Single Session` category + ClassPass $0 + `Show disabled pricing options ▶` link

### TEXT CONTENT (VERBATIM)

```
[Drawer Pricing tab:]

🏷 Pricing (active, underlined) | 👤 Staff

[Add a pricing option...                                          ▼]   [Create ▾]

Single Session
  BH HydraFacial – Deluxe              $250.00     [⋮]
  BH HydraFacial – Platinum            $300.00     [⋮]
  BH HydraFacial – Signature           $200.00     [⋮]
  ClassPass                              $0.00     [⋮]

Show disabled pricing options ▶
```

### UI ELEMENTS / VISUAL MARKERS

- **Group header `Single Session`** = pricing-option-type categorization
- **4 active pricing options for HydraFacial:** Deluxe $250 / Platinum $300 / Signature $200 / ClassPass $0
- **`ClassPass $0`** is a special 3rd-party integration pricing option — ClassPass clients pay $0 directly to clinic because ClassPass pays the clinic via their integration revenue share. Per Q5 (capability flags) — ClassPass enablement is per-clinic configurable.
- **`Add a pricing option...` searchable dropdown + `Create ▾`** — implies you can ASSIGN an existing pricing option to this service (search-pick) OR CREATE a new one (Create dropdown → Step 05 expansion).
- **`Show disabled pricing options ▶`** — soft-deleted variants viewable

### ARCHITECTURAL OBSERVATIONS

**Group by pricing-option-type within drawer:** Single Session group visible; other groups (Multiple Sessions / Unlimited Sessions / Autopay/Contract) would appear if HydraFacial had pricing options of those types.

**Pricing options vs Services 4-entity split EVIDENCE:** $0 ClassPass is the canonical example. The Service "HydraFacial" is the same; the Billable Item "ClassPass HydraFacial" is a $0 variant for ClassPass clients. **Schedulable ≠ Billable** is a real substrate split in Mindbody, not just conceptual.

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-14 at 12.25.59 AM.png`
**URL:** Same as Step 03
**Feature area:** `services_products_pricing_options_drawer`
**Inferred screen title:** Drawer Pricing tab with `Show disabled pricing options ▼` EXPANDED — 6 additional disabled pricing options including a NEW group: `Autopay/Contracts` with `BH+ (Platinum) $504.00`

### TEXT CONTENT (VERBATIM)

```
[Below the 4 active pricing options + Show disabled link expanded:]

Single Session (DISABLED group)
  HydraFacial | Deluxe                 $250.00     [⋮]
  HydraFacial | Platinum               $300.00     [⋮]
  HydraFacial | Signature              $200.00     [⋮]
  Signature                            $200.00     [⋮]
  Treatment Deposit                     $50.00     [⋮]

Autopay/Contracts
  BH+ (Platinum)                       $504.00     [⋮]
```

### UI ELEMENTS / VISUAL MARKERS

- **5 disabled Single Session pricing options** — clinic transitioned from `HydraFacial | Deluxe` (pipe separator) to `BH HydraFacial – Deluxe` (em-dash separator) naming convention. Old name preserved as disabled for historical visit-projection integrity.
- **`Treatment Deposit $50.00`** as a Single Session pricing option (disabled but ASSIGNED to HydraFacial historically) — confirms deposits are modeled as PRICING OPTIONS (not a separate deposit primitive). Patient pays $50 deposit pricing option → entitled to HydraFacial service when they redeem.
- **`Autopay/Contracts` group** with `BH+ (Platinum) $504.00` — confirms Mindbody's Autopay/Contracts subscriptions are SAME SUBSTRATE as one-time pricing options, distinguished only by `pricing_option_type` enum.

### ARCHITECTURAL OBSERVATIONS

**Treatment Deposits are pricing options:** This is a key architectural choice. Deposits are not a separate substrate entity in Mindbody; they're a flavor of pricing option with $0 service-cost-attached and entitlement-activation-on-future-visit semantics.

For OMNI Q3 4-entity split: this is a Q3 evidence point. Mindbody collapses these into 1 Billable Item table:
- One-time service charge (Signature $200)
- Deposit (Treatment Deposit $50)
- Multi-session pack (Multiple Sessions pricing option)
- Membership subscription (Autopay/Contract BH+ Platinum $504)

ALL same table. The complexity moves into the type-discriminated field set: Single Session has expires_after; Autopay has billing_cycle; Multi-session has session_count; etc.

OMNI could either:
- (A) Single billable_item table + type enum (Mindbody pattern) — denser, more nullable fields
- (B) Separate tables per type (1NF cleaner) — JOINs to aggregate

Layer 2 Section G must decide.

**Naming-convention history preserved via disabled-not-deleted:** Pipe `|` → em-dash `–` migration is visible in disabled options. OMNI substrate should similarly soft-delete naming variants rather than rename in place (preserves audit trail per DL-14).

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-14 at 12.26.15 AM.png`
**URL:** Same as Step 03
**Feature area:** `services_products_pricing_options_drawer`
**Inferred screen title:** Drawer Pricing tab with `Create ▾` dropdown EXPANDED — **4 pricing-option-type taxonomy**: Single Session / Multiple Sessions / Unlimited Sessions / Autopay/Contract

### TEXT CONTENT (VERBATIM)

```
[Create ▾ dropdown expanded:]

  Single Session
  Multiple Sessions
  Unlimited Sessions
  Autopay/Contract
```

### UI ELEMENTS / VISUAL MARKERS

- **4 pricing-option creation types** — definitive enumeration of Mindbody's pricing taxonomy

### ARCHITECTURAL OBSERVATIONS

**Canonical pricing-option-type enum: 4 values.** This is the substrate enum:
```sql
CREATE TYPE pricing_option_type AS ENUM (
  'single_session',      -- one-time visit purchase
  'multiple_sessions',   -- N-pack of pre-paid visits
  'unlimited_sessions',  -- unlimited within a time-window
  'autopay_contract'     -- recurring subscription
);
```

Each type has different fields:
- **Single Session:** price, expires_after, activation_date_strategy
- **Multiple Sessions:** price, session_count, expires_after, activation_date_strategy
- **Unlimited Sessions:** price, time_window_days, time_window_unit (month/week), restrictions
- **Autopay/Contract:** price, billing_cycle, billing_day_of_period, end_date (or rolling), early-termination-fee

For OMNI substrate: 4 archetypes confirmed. Q3 expansion = at least 4 billing flavors for the Billable Item entity, plus the existing 8 commerce primitives found in Batches 6-9 (Product / Service-entitlement / Contract / Package-parent / Package-item / Gift Card / Account-payment / Tip). Total: ~12 commerce primitives.

---

## Step 06

**File:** `screenshots/Screen Shot 2026-05-14 at 12.26.31 AM.png`
**URL:** Same as Step 03
**Feature area:** `services_products_pricing_options_drawer`
**Inferred screen title:** Drawer Pricing tab with ⋮ menu EXPANDED on `BH HydraFacial – Deluxe` pricing-option row — 3 actions: **Disassociate / Advanced Edit / Deactivate**

### TEXT CONTENT (VERBATIM)

```
[⋮ menu expanded on BH HydraFacial – Deluxe row:]

🚫 Disassociate
    Clients can no longer use this pricing
    option for this service.

✏️ Advanced Edit
    Manage custom settings for this pricing
    option here.

🗑 Deactivate
    Clients can no longer use this pricing
    option for all associated services.
```

### UI ELEMENTS / VISUAL MARKERS

- 3 actions with explanatory help text:
  - **Disassociate** = unlink from THIS service only (keeps for other services)
  - **Advanced Edit** = navigate to legacy ASP Pricing Option detail page (Step 07)
  - **Deactivate** = disable for ALL associated services

### ARCHITECTURAL OBSERVATIONS

**Pricing Options are MANY-TO-MANY to Services with named operations:**
- `service_pricing_option_assignment { service_id, pricing_option_id }` join table
- Disassociate = delete row in join table
- Deactivate = set `pricing_option.is_active = false` (cascades to all assignments)

OMNI Q3 substrate: 1-to-N or N-to-N? This evidence confirms N-to-N. A single pricing option (e.g., "Treatment Deposit $50") can apply to multiple Services (HydraFacial deposit, Botox deposit, Filler deposit). Confirms `service_pricing_option_assignment` is the canonical primitive.

---

## Step 07

**File:** `screenshots/Screen Shot 2026-05-14 at 12.26.52 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/asp/adm/adm_tlbx_series.asp?optProduct=101489&retstr=%2Fapp%2Fservices-products%2...`
**Feature area:** `services_products_pricing_options_advanced_edit`
**Inferred screen title:** Pricing Options legacy ASP edit page — `BH HydraFacial – Deluxe` (ID 101489) — Search + Name section (Number of sessions / Service category / Appointment types / Revenue category / Expires after / Discontinued) + Price section start

### TEXT CONTENT (VERBATIM)

```
[Legacy ASP URL: adm_tlbx_series.asp?optProduct=101489&...]

Pricing Options ⓘ

┌─ Search for an Item ───────────────────────────────────┐
│ Type [All Types ▼]   Service category [All service categories ▼]
│                       Revenue Categories [All revenue categories ▼]
│ ☐ Members only?   ☑ Discontinued   ☐ Members Discount   ☐ Sell online only?
│                                                      [          ] [Search]
└────────────────────────────────────────────────────────┘
                                                                    [+ Add New]

▾ Name

Pricing option name        ⓘ  [BH HydraFacial – Deluxe                  ]
Number of sessions         ⓘ  [Limited sessions                      ▼]
Service category           ⓘ  [1. Facials                            ▼]
                              [Select Appointment type            ▼]  [Assign]
Appointment types              1. Facials | BH HydraFacial   [ Remove ]
Revenue category           ⓘ  [Esthetician Services, Revenue         ▼]
Expires after              ⓘ  [12]   ○ Days   ● Months
Discontinued                  ☐

▾ Price

Price                      ⓘ  [250.00]
```

### UI ELEMENTS / VISUAL MARKERS

- **Legacy ASP URL** (`adm_tlbx_series.asp`) — same legacy backend as POS entry (Batch 12 Step 01). Confirms two-layer architecture: modern React shell + legacy ASP detail pages.
- **`optProduct=101489`** = pricing option numeric ID (separate ID namespace from service `88`)
- **Search panel at top** of edit page — Mindbody's pattern: edit pages with search-for-other-records header. Useful for pricing-option admin where you might edit many in succession.
- **Filters in search panel:** Type, Service category, Revenue Categories, Members only, Discontinued (CHECKED for this search), Members Discount, Sell online only
- **`Number of sessions = Limited sessions`** — implies a separate enum for the within-Single-Session type granularity:
  - Limited sessions
  - (other values: Unlimited sessions?)
- **`Service category` + `Appointment types` 2-line entry:** category-then-service nested assignment with `[ Remove ]` per assigned pair
- **`Revenue category` = Esthetician Services, Revenue** — accounting/GL coding axis SEPARATE from service category. Layer 2 Section J cross-domain implication: revenue category supports accounting integration (Quickbooks / accounting platforms).
- **`Expires after [12] ○ Days ● Months`** — entitlement expiry strategy (the "valid for 12 months" rule for the Inactive pricing options seen in Batch 11 Step 04 with `Expiration Date 02/09/2027` from `Activation date 02/10/2026` = 12 months)

### ARCHITECTURAL OBSERVATIONS

**Pricing Option substrate has at least 7 fields visible on this single panel:**
1. Pricing option name (string)
2. Number of sessions enum (Limited / Unlimited?)
3. Service category foreign key
4. Appointment types many-to-many (join table)
5. Revenue category foreign key (accounting axis)
6. Expires after duration (int + unit enum {days/months})
7. Discontinued boolean

**REVENUE CATEGORY is a NEW substrate primitive.** Distinct from Service Category (which is product taxonomy). Revenue Category is accounting taxonomy. For OMNI Layer 2 Section J: accounting integration (Quickbooks / Xero) depends on this. Pricing Option commits → revenue routed by revenue_category to accounting GL. Per Knox marker 5 catalog mesh dimension: "commission/payroll" and "automated emails" are GL-adjacent. **Probably a future commerce DL Phase C concern.**

---

## Step 08

**File:** `screenshots/Screen Shot 2026-05-14 at 12.27.10 AM.png`
**URL:** Same as Step 07
**Feature area:** `services_products_pricing_options_advanced_edit`
**Inferred screen title:** Pricing Options legacy page SCROLLED — Price section + Activation Date 3-strategy radio + Advanced Settings (Only contract/package / Priority / Barcode / Early bird / Therapist payment)

### TEXT CONTENT (VERBATIM)

```
[Continuing scrolled view:]

▾ Price

Price                      ⓘ  [250.00]
Sell online                ⓘ  ☑ Link
Online price               ⓘ  [250.00]
Sales Tax                  ⓘ  ☐
Tax 2                      ⓘ  ☐
Set number of sessions     ⓘ  [1]
Use per session pricing    ⓘ  ☑

▾ Activation Date  ⓘ

● On the sale date
○ On the date of the client's first visit after purchase
○ On a custom date  [date picker]

▾ Advanced Settings  ⓘ

Only allow clients to purchase this in a contract or package?  ⓘ  ☐
Priority                   ⓘ  [Medium                            ▼]
Barcode                    ⓘ  [101489]   [Print barcodes]
Early bird discount        ⓘ  ☐
Does the therapist get paid for this client?  ⓘ  [Yes              ▼]
```

### UI ELEMENTS / VISUAL MARKERS

- **Price section (7 fields):**
  - Price (decimal)
  - Sell online (boolean + Link hyperlink)
  - **Online price** (separate decimal — can differ from in-clinic price)
  - Sales Tax (boolean toggle to apply tax 1)
  - Tax 2 (boolean toggle to apply tax 2)
  - Set number of sessions (int)
  - Use per session pricing (boolean)
- **Activation Date section (3-option radio):**
  - On the sale date (default)
  - On the date of the client's first visit after purchase
  - On a custom date (date picker)
- **Advanced Settings section (5 fields):**
  - Only allow clients to purchase this in a contract or package? (boolean — bundling restriction)
  - Priority (Low/Medium/High dropdown — entitlement-redemption-order priority)
  - Barcode (string + Print barcodes link)
  - Early bird discount (boolean)
  - Does the therapist get paid for this client? (Yes/No dropdown)

### ARCHITECTURAL OBSERVATIONS

**Online price ≠ In-clinic price:** Two distinct prices per pricing option. Useful for online-only promos or in-clinic surcharge. OMNI substrate must support multiple price channels per Pricing Option.

**Dual tax flags (Sales Tax + Tax 2):** Mindbody supports 2-tier tax computation (state + local OR sales + excise OR sales + service charge). OMNI tax substrate must support 2+ tax buckets per line item.

**Activation Date 3-strategy enum:**
```sql
CREATE TYPE entitlement_activation_strategy AS ENUM (
  'on_sale_date',
  'on_first_visit_after_purchase',
  'on_custom_date'
);
```
This is the canonical substrate primitive for entitlement-activation-vs-sale-commit decoupling. **Critical for OMNI:** entitlement.activated_at is COMPUTED from this strategy + sale_date + first_visit_date (if applicable). For example, a Single-Session pricing option with `On the date of the client's first visit after purchase` strategy = the entitlement expiration clock starts ticking only when the client first uses it, not when they bought it.

User feedback gap #3 (subscriptions weave) — this 3-strategy enum is the entitlement-lifecycle substrate seam that allows memberships, packages, and one-time purchases to coexist with different activation semantics.

**Priority (Low/Medium/High) = entitlement-redemption-order:** When a client has multiple entitlements valid for the same service (e.g., 1 Treatment Deposit + 1 Single Session voucher + 1 Membership benefit), Priority determines which is consumed first. This is the substrate for the "entitlement resolution order" Knox mentioned in pre-marker bucket 5 / chat marker 5.

For OMNI: per system map FOUNDATIONAL_ARCHITECTURE — entitlement resolution order is a primitive substrate concern. The Pricing Option's `priority` field is the substrate root.

**`Does the therapist get paid for this client?` Yes/No** — per-pricing-option commission gating. Some pricing options (free promos, ClassPass $0) don't trigger therapist commission. OMNI commission substrate: per-pricing-option boolean.

**Barcode + Print barcodes** — physical-product UPC pattern applied to services. Mindbody supports barcode scanning for service-as-pricing-option redemption at POS (matching the cart-add patterns in Batches 6-8).

---

## Step 09

**File:** `screenshots/Screen Shot 2026-05-14 at 12.27.37 AM.png`
**URL:** Same as Step 07
**Feature area:** `services_products_pricing_options_advanced_edit`
**Inferred screen title:** Pricing Options legacy page FURTHER SCROLLED — Apply member discounts + Receipt notes + Commission Rates + Scheduling Restrictions + Auto emails

### TEXT CONTENT (VERBATIM)

```
[Continuing scrolled view:]

Apply member discounts (leave blank for no discounts)  ⓘ
[multi-select listbox showing:]
  GOLD MEMBERS 10%
  VIP INJECTABLES (40/30/10)
  ULTRA 25/25/10
  Coolsculpting VIP 40

Receipt notes              ⓘ  [textarea]

Commission Rates           ⓘ
                                   Percent          --OR--    Flat Rate
   Standard Commission:    ○ [0.00] %                       ○ [0.00]
   Promo Commission:       ○ [0.00] %                       ○ [0.00]

▾ Scheduling Restrictions

Max Sessions                ⓘ  [Unlimited                          ▼]
Disallow Consecutive Days?  ⓘ  ☐
Daily Restriction?          ⓘ  [Unlimited                          ▼]
Day of Month Scheduling Opens  ⓘ  [Unrestricted                  ▼]
Time Access                 ⓘ  ☐

▾ Auto emails  ⓘ
Set up [Pricing Option Visits Count Remaining Low.] (hyperlink)
Set up [Pricing Options Time Running Out] (hyperlink)

                                            [Cancel]  [Copy]  [Save]
```

### UI ELEMENTS / VISUAL MARKERS

- **Apply member discounts** multi-select listbox: 4 visible programs:
  - GOLD MEMBERS 10%
  - VIP INJECTABLES (40/30/10)  ← rotating tier discount
  - ULTRA 25/25/10                  ← rotating tier discount
  - Coolsculpting VIP 40
- **Receipt notes** = per-pricing-option text to print on receipt
- **Commission Rates** section: 2 commission rows (Standard / Promo), each with Percent OR Flat Rate radio (mutually exclusive)
- **Scheduling Restrictions section (5 fields):**
  - Max Sessions (Unlimited / N) — per-entitlement how many visits redeemable
  - Disallow Consecutive Days? (boolean)
  - Daily Restriction? (Unlimited / N visits per day) — anti-abuse rule
  - Day of Month Scheduling Opens (Unrestricted / 1-31) — scheduling availability window
  - Time Access (boolean — time-of-day restrictions)
- **Auto emails section:** 2 trigger types (Visits Count Remaining Low / Pricing Options Time Running Out) — each is a clickable link to set up the email template

### ARCHITECTURAL OBSERVATIONS

**Member Discounts substrate is configurable per-clinic** (Q5 capability evidence). 4 distinct discount programs visible. Substrate:
- `discount_program { id, brand_id, name, discount_type [flat/percent/rotating], discount_value_or_pattern }`
- Pricing Option ↔ Discount Program is many-to-many (this multi-select control)
- `VIP INJECTABLES (40/30/10)` rotating pattern suggests Mindbody supports per-visit-N discount rotations (1st visit 40% / 2nd 30% / 3rd 10%) — a non-trivial substrate

**Commission Rates** — per-pricing-option Standard + Promo commission. Two rates allow:
- Standard rate when pricing option sold at normal price
- Promo rate when pricing option sold under a discount (different commission to incentivize/disincentivize promo sales)

For OMNI: commission is substrate (not derived):
- `pricing_option { ..., standard_commission_pct, standard_commission_flat, promo_commission_pct, promo_commission_flat }` (denormalized)
- OR `pricing_option_commission { pricing_option_id, commission_type [standard/promo], rate_type [pct/flat], rate_value }` (normalized)

**Scheduling Restrictions** — 5 enforcement rules per pricing option for redemption:
- Max sessions (how many times entitlement can be used)
- Consecutive day restriction
- Daily visit cap
- Calendar-day-of-month window when redemption allowed
- Time-of-day window

DL-15 scheduling substrate spine territory. Per Phase B.5+ doctrine sharpening: DL-15 may need invariants for "per-entitlement redemption restrictions." Layer 2 Section G to scope.

**Auto Emails: 2 system-triggered templates per Pricing Option:**
- "Visits Count Remaining Low" — notify client when entitlement has N or fewer redemptions left
- "Pricing Options Time Running Out" — notify client when entitlement is N days from expiration

Per DL-14 CNS event envelope: these are CNS-orchestrated event handlers. Substrate:
- `pricing_option_auto_email { pricing_option_id, trigger_type, threshold_value, template_id, is_enabled }`
- CNS scheduler periodically queries pricing options matching triggers + sends emails

For OMNI: this is concrete substrate evidence for the **outbound communications federation** (system primitive #10 + DL-14). Layer 2 Section J cross-domain implications.

---

## Step 10

**File:** `screenshots/Screen Shot 2026-05-14 at 12.28.28 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/ServicesAndPricingAppointmentStaffAssignment/Index?servicecategoryid=6&appointmentty...`
**Feature area:** `services_products_staff_assignment_per_service`
**Inferred screen title:** Assign an Existing Staff Member to BH HydraFacial — 14 staff with **5 per-staff-per-service columns: Pay Rate / Booking Time / Prep Time / Finish Time** + Add New Staff CTA

### TEXT CONTENT (VERBATIM)

```
Assign an Existing Staff Member                                         [+ Add New Staff]

The staff member that you select will be able to perform: BH HydraFacial

BH HydraFacial                                                          [Search]

Staff                       Pay Rate          Booking Time   Prep Time    Finish Time
                                              (minutes)      (minutes)    (minutes)
☑ Angelina Dedvukaj         No pay            60             0            0
☑ Parrah Grundy             No pay            60             0            0
☐ Amber Allen               No pay            60             0            0
☐ Arshnoor Ghare            No pay            60             0            0
☐ Barb Crawford             No pay            60             0            0
☐ Chanel Khemmoro           No pay            60             0            0
☐ Dr. Nicholas Crawford     [No pay   ▼]      [60]           [0]          [0]    ← active row, fields editable
☐ Dr. Rana Balboul          No pay            60             0            0
☐ Front Desk                No pay            60             0            0
☐ Marissa Stewart           No pay            60             0            0
☐ Nadine Klait NP           No pay            60             0            0
☐ Our Team                  No pay            60             0            0
☐ Parisa Jaffar             No pay            60             0            0
☐ Raina Patel               No pay            60             0            0

[‹ Go back to Services and Pricing]
```

### UI ELEMENTS / VISUAL MARKERS

- **5 per-staff-per-service editable columns:** Checkbox + Pay Rate (dropdown) + Booking Time + Prep Time + Finish Time
- **Active row (Dr. Nicholas Crawford)** has the editable fields highlighted; others show display values
- **Checkbox state shows assignment:** Angelina Dedvukaj ✓, Parrah Grundy ✓ (currently assigned); all others ☐
- **`Our Team`** + **`Front Desk`** appear in staff list — **NON-individual staff "roles"** modeled as staff entities. Implies the substrate has staff entities representing roles/teams, not just individuals.
- **Defaults:** Booking Time 60 (matches service Duration in Step 01), Prep 0, Finish 0
- **Going to view from Pricing Options Advanced Edit back to here** — implies you reach this page from the Staff tab on the drawer (Step 02), NOT from the Pricing Option tab. Different URL: `/ServicesAndPricingAppointmentStaffAssignment/Index?...`

### ARCHITECTURAL OBSERVATIONS

**Staff Service Assignment substrate (concrete):**
```sql
staff_service_assignment {
  id                    UUID PRIMARY KEY,
  staff_id              UUID REFERENCES staff(id),
  service_id            UUID REFERENCES services(id),
  pay_rate_id           UUID NULL REFERENCES pay_rates(id),
  booking_time_minutes  INT NOT NULL,  -- per-staff service duration
  prep_time_minutes     INT NOT NULL,  -- per-staff prep buffer
  finish_time_minutes   INT NOT NULL,  -- per-staff cleanup buffer
  is_assigned           BOOLEAN DEFAULT false,
  UNIQUE(staff_id, service_id)
}
```

**3-component appointment block:** Total appointment time = prep + booking + finish. DL-15 scheduling substrate spine MUST accommodate this 3-component model. Pre-existing invariants may assume single duration; Layer 2 Section G may require DL-15 amendment for the prep/booking/finish split.

For user feedback gap #1 (room/provider/resource alignment): Booking Time = the schedulable service duration; Prep/Finish are the surrounding buffer. A room must be reserved for the FULL prep+booking+finish span, but the provider doesn't necessarily need to be in-room for the prep/finish. Subtle resource semantics.

**`Our Team` and `Front Desk` as staff entities:** Mindbody allows non-individual entities to be staff rows. For OMNI:
- (A) Same `staff` table with `staff_type` enum {individual, team, role, system}
- (B) Separate tables (`staff_individuals`, `staff_teams`, etc.)

Mindbody's choice is (A) — flat. Confirms "appointment can be assigned to a TEAM or ROLE" pattern, which simplifies scheduling for non-individual-specific bookings (e.g., a check-in is assigned to Front Desk role, not a specific person).

**Per-staff Pay Rate** carrying value `No pay` for ALL staff — implies the clinic hasn't configured per-staff pay rates yet for this service. The pay_rate field is nullable; when null, no commission is paid for this staff x service combination.

For OMNI substrate: pay rates are likely a separate `pay_rate` table referenced by id; the dropdown shows pre-defined rate options.

---

## Cumulative Batch 13 findings (additive to handoff 1-15 + Batch 11 16-26 + Batch 12 27-40)

### 41. Service substrate baseline = 6 required fields + ~25 optional
Step 01 confirms required: Name / Duration / Appointment category / Capacity / # deducted / Sort order. Plus optional: Color, Description, online_bookable, is_addon. Optional from edit page advanced sections likely ~25+ more.

### 42. `# deducted` is the substrate hook between Schedulable Service and Resource/Inventory
Step 01 shows `# deducted` field on Service edit page. For services (not products), value = 0. For services that decrement inventory (Botox-as-product workaround), value > 0. Q3 4-entity split: this is the bridge column.

### 43. Drawer-as-quick-config vs Edit-as-deep-config UI pattern
Step 02 confirms Mindbody's separation: Drawer for associative configs (Pricing + Staff links), dedicated Edit page for intrinsic configs. OMNI UI follows same separation.

### 44. Pricing-option-type 4-enum (Single Session / Multiple Sessions / Unlimited Sessions / Autopay/Contract)
Step 05 Create dropdown definitive. Substrate `pricing_option_type` enum. OMNI Q3 expansion: at least 4 billing flavors as a single Billable Item type discriminator OR 4 separate tables.

### 45. Treatment Deposits are modeled as Pricing Options (not separate substrate)
Step 04 disabled list shows `Treatment Deposit $50.00` as Single Session pricing option. Deposits are a flavor of pricing option with $0 service-cost-attached + entitlement-activation-on-future-visit semantics.

### 46. Subscriptions (Autopay/Contract) collapse into Pricing Options substrate
Step 04 Autopay/Contracts group with `BH+ (Platinum) $504.00` confirms same substrate as Single Session pricing options. Q3 expansion implication: OMNI's Membership/Subscription primitive is a Billable Item type.

### 47. Pricing Options are N-to-N with Services via assignment join (Disassociate vs Deactivate)
Step 06 ⋮ menu: Disassociate (per-service unlink) ≠ Deactivate (global). Implies `service_pricing_option_assignment` join table.

### 48. Revenue Category is a NEW substrate primitive (accounting axis ≠ service category)
Step 07 `Revenue category = Esthetician Services, Revenue`. Distinct accounting axis for GL routing. Future commerce DL Phase C concern.

### 49. Online price ≠ In-clinic price (2 prices per Pricing Option)
Step 08 Price + Online price are separate fields. Channel-specific pricing substrate.

### 50. Dual tax flags (Sales Tax + Tax 2) per Pricing Option
Step 08 Sales Tax + Tax 2 are 2 independent tax buckets per pricing option. OMNI tax substrate must support 2+ buckets.

### 51. Entitlement Activation Strategy 3-enum (on_sale_date / on_first_visit_after_purchase / on_custom_date)
Step 08 Activation Date radio. Canonical substrate primitive for entitlement-lifecycle-vs-sale-commit decoupling. **Critical for user feedback gap #2.**

### 52. Entitlement Redemption Priority (Low/Medium/High) is substrate (resolves stacking conflicts)
Step 08 Priority dropdown. When client has multiple valid entitlements for same service, Priority determines consumption order. Maps to FOUNDATIONAL_ARCHITECTURE entitlement resolution order primitive.

### 53. Per-pricing-option commission gating (`Does the therapist get paid for this client?` Yes/No)
Step 08 toggle. Some pricing options (free promos, ClassPass $0) don't trigger therapist commission.

### 54. Barcode scanning at POS for Pricing Option redemption
Step 08 Barcode field + Print barcodes link. Substrate-level barcode field per pricing option.

### 55. Discount Programs (4 visible: GOLD MEMBERS / VIP INJECTABLES / ULTRA / Coolsculpting VIP) are clinic-configurable substrate
Step 09 multi-select. `discount_program` substrate with rotating-pattern support (40/30/10 per-visit progression).

### 56. Standard + Promo Commission Rates per Pricing Option (2 commission tracks)
Step 09. Standard for normal-price sales, Promo for discounted sales. Substrate either denormalized 4 fields or normalized `pricing_option_commission` join.

### 57. Scheduling Restrictions on Pricing Options (5 per-entitlement enforcement rules)
Step 09: Max Sessions / Disallow Consecutive Days / Daily Restriction / Day of Month Scheduling Opens / Time Access. DL-15 amendment territory.

### 58. Per-Pricing-Option Auto-Email triggers (2 system events: Visits Count Remaining Low / Time Running Out)
Step 09. CNS-orchestrated event handler substrate. Per DL-14 + system primitive #10 outbound jobs.

### 59. 3-component appointment block: Prep Time + Booking Time + Finish Time (per-staff-per-service)
Step 10 staff assignment table columns. DL-15 must accommodate 3-component model. Total appointment block = prep + booking + finish. Different per staff.

### 60. Staff entities include teams/roles ("Our Team", "Front Desk") not just individuals
Step 10 staff list. Mindbody uses flat staff table with staff_type discriminator (implied). Allows appointment-assigned-to-role pattern.

### 61. Pay Rate is per-(staff × service) tuple substrate
Step 10 Pay Rate column per row. Substrate `staff_service_assignment.pay_rate_id` nullable foreign key to `pay_rates`.

### 62. Member Discounts include rotating-tier patterns (40/30/10 = 1st-visit 40%, 2nd 30%, 3rd 10%)
Step 09. VIP INJECTABLES (40/30/10) shows non-trivial discount pattern substrate.

---

## End of Batch 13

Next batch: rows 132-N starting at `Screen Shot 2026-05-14 at 12.28.49 AM.png`. Likely continues service-catalog admin depth — perhaps Add-Ons setup, Pricing top-nav, Contracts management, or pivot to Staff admin or Settings.
