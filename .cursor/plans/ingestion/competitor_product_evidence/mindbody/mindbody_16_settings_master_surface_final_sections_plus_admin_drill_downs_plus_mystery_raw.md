# Mindbody — Batch 16 raw capture: Settings master surface FINAL sections (General/Services/Retail/Links) + Provider Permissions groups + No-Show/Late Cancel Fees Charge Fees filters (8 memberships visible) + Required Fields Consumer-vs-Business-Mode dichotomy + Client Alerts 21-event vocabulary + Promo Code edit + Gift Cards add modal + Packages add form + **MYSTERY FILE (row 163)**: Diana Donlon Client Info v2 cockpit layout

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~5:10 AM UTC-4)
Batch: 16 (FINAL DESKTOP BATCH; 12 screens incl. mystery file row 163)
Feature area(s): `settings_master_surface`, `settings_links_master`, `staff_permissions_groups`, `clients_admin_no_show_fees`, `clients_admin_required_fields_dual_mode`, `clients_admin_client_alerts_vocabulary`, `pricing_admin_promo_codes_edit`, `pricing_admin_gift_cards_add`, `pricing_admin_packages_add`, `clients_profile_v2_cockpit_with_alerts`
Screenshots covered: 12 (rows 152-162 + 163 mystery = 12.39.13 AM through 12.55.47 AM + screenshot_unnamed_2048x1440.png)

Chat cross-references:
- **Marker 6 (lines 2598-3721) — Settings as operating system** — Steps 01-03 close out the Settings master surface enumeration (10 of 10 sections enumerated cumulatively with Batch 15). Step 04 Provider Permissions groups is the canonical "granular provider permissions" anchor.
- **Marker 14 (lines 27597-27982) — Deep admin/configuration: services settings as policy controls + appointment options + suspension types** — Step 03 surfaces ALL 4 Services-section sub-pages (Class and Course Options / Appointment Options / Suspension Types / Active Appointment Times) confirming Knox's enumeration. Also Step 06 Required Fields with Consumer-vs-Business-Mode dichotomy = "required fields and alerts as typed conditions" Knox marker 14 enumeration.
- Pre-marker bucket 8 (Appointment lifecycle 12 states; every state change is event into CNS) — Step 07 Client Alerts 21-event vocabulary is the CONCRETE CNS event taxonomy at client-level (Account Balance Threshold / Autopay Failed / Credit Card Expiration / Failed Auto Email / Followup Due / Liability Waiver / Low Session Alert / Missing Billing Info / Missing Required Fields / No Arrivals / Scheduling Suspended / Staff (Red) Alert / etc.).
- Pre-marker bucket 10 (Checkout/POS/commerce) — Steps 08-10 (Promo Codes / Gift Cards / Packages) are 3 of the 8+ commerce primitives enumerated in Batch 15 Step 10.

Supplemental cross-references:
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 5 — Knox encounter container architecture. Step 06 Required Fields Consumer-vs-Business-Mode dichotomy is concrete evidence that **CONSUMER MODE and BUSINESS MODE are DISTINCT data-collection contexts with different policy gates** — same as encounter_profile concept (clinic_visit vs walkin_appointment may have different required fields). Q1 evidence point.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 (capability flags) — Steps 06 (dual-mode required fields) + Step 04 (5 Provider Permission groups: BH | External / Front Desk / Manager / Service Provider / Social Media Manager) confirm 2-axis capability layer:
  - Per-staff capability flags (Batch 14 Step 09)
  - Per-permission-group role assignments (Step 04 here)
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 (4-entity split) — Step 03 Services section sub-pages confirm the 4-entity boundary: Class/Course Options (Schedulable-Service config) + Appointment Options (Schedulable-Service config) + Suspension Types (Billable-Item lifecycle config) + Active Appointment Times (Resource config).
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q2 (8 pressure-test scenarios) — Step 05 No-Show/Late Cancel Fees Charge Fees filters surface **8 distinct membership tiers** (BH+ Elite / BH+ Platinum / BH+ Ultra / BH+ Hormone Balance / Coolsculpting VIP 40 / GOLD MEMBERS 10% / Non-Member / ULTRA 25/25/10) — each pressure-test scenario must be reasoned against all 8 tiers.

User feedback cross-refs:
- Gap #3 (subscriptions/memberships/POS/retail/gift cards/loyalty woven) — Step 05 (8 membership types in 1 clinic) + Steps 08-10 (Promo Codes + Gift Cards + Packages add forms) make the canonical commerce-woven concrete.
- Gap #6 (cross-patient metrics) — Step 05 Charge Fees admin is an aggregated lookup-and-charge admin operation (cross-client/membership/cancellation-method/location matrix search).
- Gap #9 (display new first-time visits) — Step 06 Required Fields dual-mode dichotomy enables per-client-state-aware data collection.
- Mystery file (row 163) — Diana Donlon Client Info v2 layout — alternate cockpit rendering with prominent Alerts card; possibly mobile-app rendering OR a different Mindbody UI version. Maps Knox marker 3 client cockpit + marker 4 alerts.

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-14 at 12.39.13 AM.png`
**URL:** `/app/settings`
**Feature area:** `settings_master_surface`
**Inferred screen title:** Settings Pricing section END (Contracts / Organize Contracts / Packages) + **General section START** (7 sub-pages: Locations and Mindbody App Listings / Rooms and Resources / Schedule a Closed Business Day / Client Forms / Logo and Colors / Contact Information / Account Language)

### TEXT CONTENT (VERBATIM)

```
💲 Pricing (end)
Contracts                        > Manage contracts to automate recurring billing for clients.
Organize Contracts               > Organize and display contracts in your preferred order.
Packages                         > Combine services, products, and credits into customizable packages.

🏪 General

Locations and Mindbody App Listings   > Manage physical location details displayed on the Mindbody Marketplace.   (highlighted)
Rooms and Resources                   > Manage rooms, services, and locations for your business.
Schedule a Closed Business Day        > Schedule closed business days and manage service category closures.
Client Forms                          > Create forms to learn about clients and share policies.
Logo and Colors                       > Update the logo and colors used in your Mindbody site and emails.
Contact Information                   > Update your business's contact details and communication preferences.
Account Language                      > Set the display language only for your account. This will not affect your studio's language.
                                        Language: [Studio Language (English) ▼]
```

### ARCHITECTURAL OBSERVATIONS

**General section has 11+ sub-pages** (8 visible here, more in Steps 02-03). The single LARGEST settings section — confirms "general" is the catch-all for foundational org config.

**`Locations and Mindbody App Listings`** = location/branch management. Multi-location clinics manage physical addresses + Mindbody marketplace listings.

**`Rooms and Resources`** = the canonical Room/Resource substrate management — directly maps to user feedback gap #1 (room/provider/resource independence). Refer to `mindbody_settings_room_requirements_raw.md` 132-service room matrix for the data inside.

**`Schedule a Closed Business Day`** = holiday/closure substrate — overlays availability windows with "closed" exception. Bulk-cancel cross-ref (Batch 15 Step 06 Cancel Class/Appointment Bookings).

**`Client Forms`** at General section = template-design entry point (not per-client form-send; that's in Documents tab). 2-step substrate: template (here) → assignment (Documents tab).

**`Account Language`** = per-USER language override (vs studio-wide language). Substrate primitive: user.locale fallback to brand.locale.

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-14 at 12.39.28 AM.png`
**URL:** Same
**Feature area:** `settings_master_surface`
**Inferred screen title:** Settings General section continued — Logo and Colors / Contact Information / Account Language / Tax Rates / Room Requirements / **General Setup and Options** (Knox marker 6 "master feature-flag system") / Words and Phrases / Client View Settings + Services section start

### TEXT CONTENT (VERBATIM)

```
🏪 General (continued)

Logo and Colors
Contact Information
Account Language   [Language: Studio Language (English) ▼]
Tax Rates                            > Set your sales tax rates and tax registration information.
Room Requirements                    > Restrict appointment bookings to only selected available rooms.
General Setup and Options            > Customize system settings for management and client interaction.   (highlighted)
Words and Phrases                    > Edit customizable terms (hotwords) for personalized software language.
Client View Settings                 > Manage the tabs and navigation of your consumer mode and mobile app.

🔧 Services

Class and Course Options             > View and manage service categories, classes, and courses in one place.
Appointment Options                  > [text below cutoff]
```

### ARCHITECTURAL OBSERVATIONS

**`General Setup and Options`** = THE Mindbody master feature-flag toggle system. Knox marker 6 chat anchor:
> *"Mindbody's General Setup & Options is the master feature-flag system. Almost every domain-level toggle (online booking enabled / autopay enabled / membership enabled / Google Calendar enabled / staff clock-in enabled / etc.) lives here."*

This is the brand-level capability surface. OMNI substrate: per-brand `feature_flag` table OR a structured `brand_capability` record.

**`Words and Phrases`** = vocabulary customization page (Batch 1 chat nav map cluster reference). Every UI label is org-overridable. Substrate: `brand_vocabulary_override { brand_id, original_word, override_word }`.

**`Client View Settings`** — manages Consumer Mode + Mobile App tabs and navigation. Per-brand customization of CONSUMER-FACING UI tabs/nav. This is the brand-level analog of per-user `Set as client lookup landing page` (Batch 11 Step 09 More menu). For OMNI: per-brand consumer UI customization substrate.

**`Tax Rates`** + **`Room Requirements`** appear in General section ALSO (not just Pricing section). Implies cross-section linking — Tax Rates is referenced from Pricing context AND General context.

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-14 at 12.40.32 AM.png`
**URL:** Same
**Feature area:** `settings_master_surface`
**Inferred screen title:** Settings Services section (4 sub-pages: **Class and Course Options / Appointment Options / Suspension Types / Active Appointment Times** — Knox marker 14 canonical 4) + Retail section start (5 sub-pages: Close out Data / Payment Methods / Revenue Categories / Revenue Subcategories / Product Revenue Categories)

### TEXT CONTENT (VERBATIM)

```
🔧 Services

Class and Course Options             > View and manage service categories, classes, and courses in one place.
Appointment Options                  > Configure client appointment booking and payment settings.
Suspension Types                     > Manage and customize suspension types for memberships and services.
Active Appointment Times             > Set scheduling times for classes, appointments, and resources.

🛒 Retail

Close out Data                       > Track daily cash closeout against sales with the Daily Closeout report.
Payment Methods                      > Customize, add, or remove accepted payment methods in your system.
Revenue Categories                   > Manage revenue categories for detailed sales reporting.
Revenue Subcategories                > Organize product revenue subcategories for better tracking.
Product Revenue Categories           > Manage product revenue categories for accurate financial reporting.
```

### ARCHITECTURAL OBSERVATIONS

**Services section enumerates Knox marker 14 canonical 4 sub-pages.** From the chat:
> *"Services settings area includes Class and Course Options, Appointment Options, Suspension Types, Active Appointment Times."*

Concrete substrate primitives:
- **Class and Course Options** = configuration substrate for group classes (`mindbody_settings_class_course_options_raw.md` 89 settings file)
- **Appointment Options** = configuration substrate for 1-1 appointments (deposit / intake / cancel policy etc.)
- **Suspension Types** = canonical membership/contract pause substrate
- **Active Appointment Times** = time-slot grid definitions

**Retail section has 5 sub-pages with 3 distinct REVENUE CATEGORY substrates:**
- **Revenue Categories** = service-side revenue classification (Batch 13 Step 07 "Esthetician Services, Revenue" cross-ref)
- **Revenue Subcategories** = product-side revenue subcategorization
- **Product Revenue Categories** = product-side revenue classification

3 distinct accounting axes — implies Mindbody's GL integration has nested classification per `service vs product × category × subcategory`.

**`Payment Methods`** at Retail section = THE payment-method admin (where the 24+ payment methods from Batches 8-11 are enabled/disabled per clinic). Q5 capability per-clinic substrate.

**`Close out Data`** = end-of-day reconciliation substrate (cash drawer count vs sales total + variance audit).

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-14 at 12.43.15 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/linksandshortcuts`
**Feature area:** `settings_links_master`
**Inferred screen title:** Links page (Communications & Marketing > Links) — 13 accordion categories with pre-generated deep-links: MINDBODY App / Home / Video / Classes / Appointments / Marketing / My Info / Insights / Online Store - Products / Online Store - Services / Online Store - Gift Cards / Online Store - Account Payments / Online Store - Contracts

### TEXT CONTENT (VERBATIM)

```
Links ⓘ                                                                              [Rate this page]

Generate links to specific parts of your MINDBODY site, then use them on your website or within newsletters.

> MINDBODY App
> Home
> Video
> Classes
> Appointments
> Marketing
> My Info
> Insights
> Online Store - Products
> Online Store - Services
> Online Store - Gift Cards
> Online Store - Account Payments
> Online Store - Contracts
```

### ARCHITECTURAL OBSERVATIONS

**13 link categories with pre-generated deep-link substrate.** Each accordion contains URL templates the clinic can paste into website/newsletter/email. Substrate primitive: `brand_link_template { brand_id, category, link_template, parameters }`.

**5 Online Store categories** = 5 consumer-facing commerce surfaces:
- Products (retail catalog)
- Services (service booking)
- Gift Cards (gift card purchase)
- Account Payments (pay account balance)
- Contracts (subscribe to membership)

Each surface has its own consumer-facing URL pattern. Consumer Mode (Batch 14 Step 09 reference) IS this set of surfaces.

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-14 at 12.44.33 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/asp/adm/adm_tlbx_ss_staff.asp`
**Feature area:** `staff_permissions_groups`
**Inferred screen title:** Provider Permissions page — 3 horizontal tabs (Provider Management / Pay Rate Descriptions / **Provider Permissions** active) + Edit/Add Groups CTA + dropdown EXPANDED showing **5 permission groups**: BH | External (selected) / BH | Front Desk / BH | Manager / BH | Service Provider / BH | Social Media Manager

### TEXT CONTENT (VERBATIM)

```
Provider Permissions ⓘ
[3 horizontal tabs: Provider Management / Pay Rate Descriptions / Provider Permissions (active)]

                                                                                            [Edit/Add Groups]

[Dropdown expanded:]
✓ Select
   BH | External   (highlighted/selected, dark blue background)
   BH | Front Desk
   BH | Manager
   BH | Service Provider
   BH | Social Media Manager
```

### ARCHITECTURAL OBSERVATIONS

**5 PERMISSION GROUPS per brand:**
1. BH | External (NEW — likely contractors or external service providers)
2. BH | Front Desk
3. BH | Manager
4. BH | Service Provider
5. BH | Social Media Manager (NEW — marketing-only access)

Compared with Batch 14 Step 07 Staff list visible roles (3: Service Provider / Front Desk / Manager) — Permission Groups are a 5-level enumeration vs the 3 visible in the active staff list. External + Social Media Manager don't have current assignees.

**Permission Groups substrate:**
```sql
permission_group { id, brand_id, name }
staff_permission_group_assignment { staff_id, permission_group_id }
permission_atom { id, name, description }
permission_group_atom_grant { permission_group_id, permission_atom_id, granted }
```

This is Knox marker 6 + 14 "granular provider permissions" canonical substrate. Per system map 1D (auth.capabilities) + Phase B.5+ doctrine sharpening: OMNI's `lib/auth/capabilities.ts` is the staff-side analog. Permission groups bundle multiple capability atoms.

**`<Brand> | <Name>` convention** = same as Staff Role naming (Batch 14 Step 07). Role IS a permission group OR roles ARE permission groups conceptually unified.

---

## Step 06

**File:** `screenshots/Screen Shot 2026-05-14 at 12.49.39 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/noshowlatecancel`
**Feature area:** `clients_admin_no_show_fees`
**Inferred screen title:** No-Show/Late Cancel Fees > Charge Fees sub-tab — multi-axis filter form (Dates + Type of service × Memberships × Pricing options × Cancellation method × Location); 8 memberships visible

### TEXT CONTENT (VERBATIM)

```
No-Show/Late Cancel Fees
[Tabs: Manage Fees | Charge Fees (active)]

Dates                            Filters                                              Actions
  Start date                       Type of service(s)                                      Sea... (cutoff)
  [5/6/2026]                       [Appointments ×] [Classes ×]
  End date                         Membership(s)
  [5/13/2026]                      [BH+ (Elite) ×] [BH+ (Platinum) ×] [BH+ (Ultra) ×]
                                   [BH+ | Hormone Balance ×] [Coolsculpting VIP 40 ×]
                                   [GOLD MEMBERS 10% ×] [Non-Member ×] [ULTRA 25/25/10 ×]
                                   Pricing options non-member(s)
                                   [Select option(s)]
                                   Cancellation method(s)
                                   [Late Cancellations ×] [No-Shows ×]
                                   Location(s)
                                   [Bloom Health ×] [Online Store ×]
```

### ARCHITECTURAL OBSERVATIONS

**8 DISTINCT MEMBERSHIP TIERS at Bloom Health clinic:**
1. BH+ (Elite)
2. BH+ (Platinum) — Batches 11 + 13 cross-ref ($504/month, $159/month autopay)
3. BH+ (Ultra)
4. BH+ | Hormone Balance — Hims-style targeted-condition membership
5. Coolsculpting VIP 40 — service-specific membership
6. GOLD MEMBERS 10% — flat discount membership
7. Non-Member (as filter category, not actual membership)
8. ULTRA 25/25/10 — rotating-tier discount membership (matches Batch 13 Step 09 rotating discount pattern)

Plus VIP INJECTABLES (40/30/10) from Batch 13 Step 09 = 9th membership likely.

**Cancellation method dichotomy: Late Cancellations vs No-Shows** — 2 distinct substrate events:
- Late Cancellation = canceled within X hours (configurable per cancellation_policy)
- No-Show = appointment lifecycle reached scheduled-end-time without arrival

For DL-15 + DL-16: late_cancellation and no_show are distinct lifecycle terminal states with different fee policy linkage.

**Location filter includes "Online Store" as virtual location** alongside physical "Bloom Health". For OMNI multi-tenancy + Q5 capability flags: Location substrate has location_type {physical, virtual, online_store, kiosk, etc.}.

---

## Step 07

**File:** `screenshots/Screen Shot 2026-05-14 at 12.50.17 AM.png`
**URL:** `clients.mindbodyonline.com/app/required-fields`
**Feature area:** `clients_admin_required_fields_dual_mode`
**Inferred screen title:** Required Fields page — **Consumer Mode vs Business Mode DUAL-COLUMN required-flag matrix** (Email/Address/City/State/Postal required in Consumer Mode but not Business Mode; ID tooltip explains business-mode-specific behavior)

### TEXT CONTENT (VERBATIM)

```
[Breadcrumb: Settings / Required Fields]

Required Fields

Check the boxes below to indicate which bits of information you want to require when a client profile is created or edited in your site. Please note the first and last names are always required.

Field Name          | Required in Consumer Mode? | Required in Business Mode?
ID                   |                              |                              ⓘ "When selected, the RSSID is required ONLY in business missing info alerts"
Middle Name         | ☐                            | ☐
Birthday            | ☐                            | ☐
Gender              | ☐                            | ☐
Email               | ☑ (greyed)                   | ☑
Address             | ☑                            | ☐
City                | ☑                            | ☐
State               | ☑                            | ☐
Postal Code         | ☑                            | ☐
```

### ARCHITECTURAL OBSERVATIONS

**Consumer Mode vs Business Mode DUAL-MODE substrate.** Per-field required-flag is independently configured for each mode:
- **Consumer Mode** = client-facing flows (online booking, self-registration, mobile app)
- **Business Mode** = staff-facing flows (in-clinic admin, walk-in registration)

This is concrete evidence that Mindbody substrate has TWO distinct policy gates per data-collection field — same field can be optional for staff add but required for client self-add.

For OMNI substrate:
```sql
required_field_policy {
  id, brand_id, field_key,
  required_in_consumer_mode BOOLEAN,
  required_in_business_mode BOOLEAN,
  ...
}
```

**`ID` field** (with tooltip "RSSID is required ONLY in business missing info alerts") — implies a non-PII business-grade unique identifier field (Mindbody-specific concept).

**Consumer Mode Email shows greyed checkbox** — likely permanently-checked at consumer-mode level (can't unset because Mindbody requires email for consumer-mode self-registration). Suggests substrate has 3-state required (always_required / configurable_required / configurable_optional) not just boolean.

Maps to user feedback gap #9 (display new first-time visits) — Consumer Mode for new-client flows.

---

## Step 08

**File:** `screenshots/Screen Shot 2026-05-14 at 12.51.59 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/asp/adm/adm_tlbx_clt_alerts.asp`
**Feature area:** `clients_admin_client_alerts_vocabulary`
**Inferred screen title:** Client Alerts admin — dropdown EXPANDED showing **21-event alert vocabulary**: Account Balance Threshold / Account Credit Notification (iDeal) / Arrivals in Threshold / Autopay Failed / Client Status / Contract Confirmation / Credit Card Expiration / Failed Auto Email / Followup Due / Liability Waiver / Low Session Alert / Missing Billing Info / Missing Required Fields / No Arrivals in Threshold / No Current Membership Or Pricing Option / No Visits in Threshold / Scheduling Suspended / Staff (Red) Alert / Unpaid Sessions Alert / Waitlist Confirmed / Yellow Alert

### TEXT CONTENT (VERBATIM)

```
Client Alerts ⓘ

Select the type of alert:
  ✓ Select
  Account Balance Threshold
  Account Credit Notification (iDeal)
  Arrivals in Threshold
  Autopay Failed
  Client Status                                ← highlighted (current selection)
  Contract Confirmation
  Credit Card Expiration
  Failed Auto Email
  Followup Due
  Liability Waiver
  Low Session Alert
  Missing Billing Information
  Missing Required Fields
  No Arrivals in Threshold
  No Current Membership Or Pricing Option
  No Visits in Threshold
  Scheduling Suspended
  Staff (Red) Alert
  Unpaid Sessions Alert
  Waitlist Confirmed
  Yellow Alert

                                                                Show enabled alerts ONLY: ☐
```

### ARCHITECTURAL OBSERVATIONS

**21-EVENT CLIENT ALERT VOCABULARY** = the canonical CNS event taxonomy at client-level. This is concrete evidence for DL-14 + DL-16 (CNS Event Envelope, 39 invariants) — Mindbody implements 21 distinct alert-event triggers, each tied to a client_state predicate.

Categorizing the 21 alerts:
- **Financial (5):** Account Balance Threshold / Account Credit Notification / Autopay Failed / Credit Card Expiration / Unpaid Sessions Alert
- **Membership/Pricing (3):** No Current Membership Or Pricing Option / Low Session Alert / Contract Confirmation
- **Visit/Activity (3):** Arrivals in Threshold / No Arrivals in Threshold / No Visits in Threshold
- **Compliance (2):** Missing Billing Information / Missing Required Fields / Liability Waiver
- **Lifecycle (3):** Client Status / Scheduling Suspended / Waitlist Confirmed
- **System (5):** Failed Auto Email / Staff (Red) Alert / Yellow Alert / Followup Due

For OMNI CNS substrate: 21+ alert event types should be enumerated for client-side CNS. Plus likely 20-30+ for appointment-side / commerce-side / staff-side. Total CNS event vocabulary at Mindbody might be 80+ event types.

**Show enabled alerts ONLY checkbox** = per-clinic enabled-subset filter. Each alert type is enable/disable per clinic per Q5 capability flag.

**`Staff (Red) Alert` + `Yellow Alert`** — colored severity tiers. Suggests UI surfaces alerts with severity indicators. OMNI: alert substrate must include severity enum.

---

## Step 09

**File:** `screenshots/Screen Shot 2026-05-14 at 12.54.05 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/asp/adm/adm_tlbx_promotion.asp`
**Feature area:** `pricing_admin_promo_codes_edit`
**Inferred screen title:** Promo Codes edit page — `BLOOM - B2B (35% Off)` (code B2B35) — 13+ fields: Promotion Name / Code (Generate Random) / Discount Type Percent / Amount 35 / Apply to Autopays / Activation/Expiration dates / Max Uses Unlimited / Days after Close / Allow Online Sales / Valid Day(s) all-week / Promotion Applies To: All Product & Services / Define Promotional Items / Discontinued?

### TEXT CONTENT (VERBATIM)

```
Promo Codes ⓘ                                                                                [+ Add New]   [Show Discontinued/Expired? ☐]

Select a promo code:    [BLOOM - B2B (35% Off)                                           ▼]

Promotion Name:         [BLOOM - B2B (35% Off)                            ]   Discontinued? ☐
Promotion Code:         [B2B35]                                    [Generate Random]
Discount Type:          [Percent ▼]
Discount Amount:        [35.00] (with ⓘ tooltip)
Discount Autopays:      ○ No   ○ Yes
Activation Date:        [3/14/2019 📅]
Expiration Date:        [4/10/2036 📅]
Max Number of Uses:     [Unlimited ▼]
Days after Close Date:  [Unlimited ▼]
Allow for Online Sales: ☐
Valid Day(s):           Sun: ☑   Mon: ☑   Tue: ☑   Wed: ☑   Thu: ☑   Fri: ☑   Sat: ☑

Promotion Applies To:
   All Product & Services (Optional - Define Promotional Items)   Type

Define Promotional Items
   Type: [Select ▼]

                                                                          [Save]   Cancel
```

### ARCHITECTURAL OBSERVATIONS

**Promo Code substrate (13+ columns):**
```sql
promo_code {
  id, brand_id,
  name, code, generated_pattern,
  discount_type [percent|flat],
  discount_amount,
  apply_to_autopays BOOLEAN,
  activation_date, expiration_date,
  max_uses,  -- nullable for unlimited
  days_after_close_date,  -- post-purchase usage window
  allow_online_sales BOOLEAN,
  valid_days_of_week_mask,
  promotion_scope_type [all|category|service|product|pricing_option],
  promotional_item_id,  -- nullable, references the scope target
  is_discontinued BOOLEAN
}
```

**`B2B35` promo code** = B2B-channel-specific 35% off. Confirms Mindbody supports channel-aware promotions.

**Valid Days of Week mask** = 7-bit bitmask for day-restriction. Substrate primitive `valid_days_mask SMALLINT`.

**Activation date 3/14/2019 + Expiration 4/10/2036** = ~17-year window. Mindbody supports very long promo durations.

**"Allow for Online Sales: ☐ unchecked"** = this promo code is in-store-only. Per Q5 capability + per-channel scope substrate.

---

## Step 10

**File:** `screenshots/Screen Shot 2026-05-14 at 12.54.50 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/productmanagement/giftcardssummary`
**Feature area:** `pricing_admin_gift_cards_add`
**Inferred screen title:** Gift Cards admin page (with existing "100.00 Gift Card" + "Gift card (custom amount)" rows visible behind modal) + **Add a Gift Card modal** (green header) — Card value dropdown + Discount toggle + Gift card name + Sell online toggle + Advanced options (Allow staff to set price independently? + Can everyone purchase this gift card?)

### TEXT CONTENT (VERBATIM)

```
[Behind modal:]
Gift Cards
Attract newcomers by setting [popular gift card values like $50 and $100, or a customizable price...]

Gift Card Name          | ...
100.00 Gift Card        | ...
Gift card (custom amount) | ...

[Modal (green header):]

Add a Gift Card                                                                    ×

Card value:                  [Select card value                                  ▼]
                            ☐ Discount the price of this gift card

Gift card name:              [                                                   ]

Sell online:                ☐ Allow customers to purchase this gift card online

▾ Advanced options
Allow staff to set price and value independently? ⓘ
   ○ Yes, staff can set the price independently of the value at point of sale
   ● No, the price should always match the value

Can everyone purchase this gift card?
   ● Yes
   ○ No, only certain members can purchase it

                                                                       [Cancel]   [Add]
```

### ARCHITECTURAL OBSERVATIONS

**Gift Card substrate:**
```sql
gift_card_product {
  id, brand_id,
  card_value,
  is_custom_value BOOLEAN,
  is_discountable BOOLEAN,
  name,
  can_sell_online BOOLEAN,
  staff_can_set_price_independently BOOLEAN,
  member_only BOOLEAN,
  eligible_member_tier_ids[]  -- when member_only = TRUE
}
```

**`Discount the price of this gift card`** = promotional gift card pattern (e.g., "Buy a $100 gift card for $80"). Card value > price paid. Substrate must support price-value-decoupling for promotions.

**`Allow staff to set price independently`** = manual price override at POS. When TRUE, POS clerk can sell a $100-value gift card for any other price ($50 / $200 / etc.) — useful for customer-service gestures or rounding errors. When FALSE, gift card price is fixed at value.

**`Can everyone purchase this gift card?` Yes/No** — gift cards can be member-only (Q5 capability per gift card). Substrate eligibility check.

**2 existing gift cards visible:** "100.00 Gift Card" (predefined $100) + "Gift card (custom amount)" (custom-amount-on-sale). 2-tier pattern: predefined-value vs custom-value gift cards.

---

## Step 11

**File:** `screenshots/Screen Shot 2026-05-14 at 12.55.47 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/asp/adm/adm_tlbx_contracts_ae.asp?add=true&setAsPackage=1`
**Feature area:** `pricing_admin_packages_add`
**Inferred screen title:** Packages — Add a New Package form — Package name + Add Items to Package (Type of item dropdown) + Set Options (Discount % / Sell online / Advanced options) — empty state with "Please add an item to this package" error

### TEXT CONTENT (VERBATIM)

```
Packages ⓘ                                                                                [More ▾]

Add a New Package

Package name           [Package name                                              ]

Add Items to Package
Type of item           [Select type of item                                       ▼]

Set Options
Discount %             [0.00]
Sell online            ☐
[Advanced options]

                                                            Please add an item to this package.
                                                                                Cancel  [Add (disabled)]
```

### ARCHITECTURAL OBSERVATIONS

**Package substrate (Q3 4-entity split evidence — 5th commerce primitive):**
```sql
package {
  id, brand_id,
  name,
  discount_pct,
  can_sell_online BOOLEAN,
  ...
}

package_item {
  id, package_id,
  item_type [service|product|pricing_option|gift_card|contract],
  item_id,
  quantity
}
```

**`Type of item` dropdown** — Packages can include MIXED item types (services + products + pricing_options + gift_cards + contracts). 5-type bundle substrate.

**Package URL uses `adm_tlbx_contracts_ae.asp?...&setAsPackage=1`** — shared underlying ASP page between Contracts and Packages with mode flag. Suggests Mindbody collapses Package and Contract into the SAME UNDERLYING SUBSTRATE distinguished by `is_package` flag.

For OMNI Q3: Package = a Pricing Option with `pricing_option_type='package'` + 1-to-N package_item children. Mindbody's evidence suggests Package and Contract share substrate; OMNI must decide if Package is its own entity OR a Pricing Option type.

---

## Step 12 — MYSTERY FILE (row 163)

**File:** `screenshots/screenshot_unnamed_2048x1440.png`
**URL:** `clients.mindbodyonline.com/app/clients/100002103/client-info`
**Feature area:** `clients_profile_v2_cockpit_with_alerts`
**Inferred screen title:** Diana Donlon Client Info tab — ALTERNATE cockpit layout with PROMINENT Alerts card (Client Alert + Staff Alert) — different from Batch 10 Step 02 standard layout; 2048×1440 resolution unique to this file

### TEXT CONTENT (VERBATIM)

```
[URL: /app/clients/100002103/client-info]
[8-tab horizontal nav: Client Home | Client Info (active) | Contact Logs | Schedule | Visits | Purchases | Account Details | Documents       More ▾]
[Header: Diana Donlon    donlondiana@gmail.com    (586) 839-5222    [tag icons]]

[LEFT COLUMN — Account block]:
[Black Message ✉ CTA] [More Actions ▾]

Account
   📞 (586) 839-5222
   ✉ donlondiana@gmail.com
   ⭐ 4 Visits (Joined August 2, 2022)
   🆔 100002103

Mindbody account
   Connect Mindbody Account (link)

Visits
   Last Visit:
   BH HydraFacial
   May 13, 2026 • 11:00 AM

Membership summary
   Membership status
   Non-Member
   Current membership
   BH HydraFacial - Signature
   BH HydraFacial - Signature
   Locker #
   [           ]
   Suspension to date
   None

[CENTER COLUMN — Alerts card]:
Alerts ⌃

⚠ Client Alert
[empty text area]

🔺 Staff Alert
[empty text area]

[RIGHT COLUMN — Contact & Subscriptions]:
Contact & Subscriptions ⌃

Contact email
   [donlondiana@gmail.com]                ⓘ
   Connect Mindbody Account (link)

Mobile phone
   [(586) 839-5222]              Home phone  [                  ]

Work phone                       Work extension
   [                ]            [                  ]

Subscriptions
When you ask clients to opt in, remind them that we'll still send receipts and anything critical.

Account management              ☐ Email   ☐ Text
```

### ARCHITECTURAL OBSERVATIONS

**ALTERNATIVE COCKPIT LAYOUT (vs Batch 10 Step 02 standard):**
- Standard Batch 10 layout: 1-column flow (Visits → Membership summary → Appointments Remaining stacked vertically)
- **This Step 12 layout: 3-column** (Account+Mindbody+Visits+Membership LEFT / Alerts CENTER / Contact & Subscriptions RIGHT)

The 3-column layout makes the **Alerts card** prominent and central — implying alerts are a 1st-tier surface in this rendering.

**Differences from Batch 10 Step 02:**
1. **Message + More Actions CTAs at top** (Batch 10 did not surface these prominently)
2. **`Joined August 2, 2022`** date — first-contact date displayed inline (Batch 10 had this in Account Details Summary)
3. **`100002103`** client ID displayed (Batch 10 hid in URL)
4. **`Locker #`** field visible (new substrate primitive — physical-locker assignment for clients at the clinic)
5. **`Suspension to date: None`** (suspension lifecycle field surfaced in cockpit)
6. **Alerts card explicit** with Client Alert + Staff Alert (2 distinct alert containers per client)
7. **Subscriptions section truncated** to just "Account management" (1 of 3 categories from Batch 10 Step 02)

**Locker # substrate primitive:** physical-locker number assigned to client. New substrate for clinics with locker amenities. OMNI: `client.locker_number TEXT NULL`.

**Suspension to date field:** confirms suspension_type substrate (Batch 16 Step 03 Services > Suspension Types cross-ref) — suspensions have an end date. `client_suspension { id, client_id, suspension_type_id, start_date, end_date, reason }`.

**Resolution 2048×1440 unique** — possibly a Retina screen capture at native resolution. Doesn't indicate a different Mindbody version, just a different capture mode. Layer 2 Section M (mobile-vs-desktop UX) — this is a desktop capture at higher resolution.

**Why this layout differs from Batch 10:**
- Either: Mindbody A/B testing different cockpit layouts (substrate same; UI different)
- Or: A different Mindbody UI version captured at a different session
- Or: A specific user-config (Set as client lookup landing page from Batch 11 Step 09) renders a specific cockpit layout

Most likely: SAME substrate, DIFFERENT UI projection. The Q5 capability + per-user UI preferences (Set as client lookup landing page) substrate is the lever for rendering different layouts.

---

## Cumulative Batch 16 findings (additive to handoff 1-15 + Batches 11-15 16-100)

### 101. Settings General section has 11+ sub-pages — the largest single section (includes Rooms and Resources + Tax Rates + Room Requirements + General Setup and Options [master feature flag] + Words and Phrases + Client View Settings)
Steps 01-02. Confirms Knox marker 6 "settings as operating system" canonical anchor.

### 102. Services section has 4 sub-pages (Knox marker 14 canonical: Class and Course Options / Appointment Options / Suspension Types / Active Appointment Times)
Step 03 enumeration.

### 103. Retail section has 5 sub-pages + 3 distinct revenue category substrates (Revenue Categories + Revenue Subcategories + Product Revenue Categories)
Step 03. GL integration nested classification.

### 104. Links page has 13 deep-link category accordions
Step 04. 5 are "Online Store - X" surfaces (Products / Services / Gift Cards / Account Payments / Contracts) = consumer-facing commerce surfaces.

### 105. 5 PERMISSION GROUPS per brand (External / Front Desk / Manager / Service Provider / Social Media Manager)
Step 05. Permission Group substrate with brand_id scope. Same `<Brand> | <Name>` convention as Staff Role naming.

### 106. 8+ membership tiers at single clinic (BH+ Elite/Platinum/Ultra/Hormone Balance + Coolsculpting VIP 40 + GOLD MEMBERS 10% + Non-Member + ULTRA 25/25/10)
Step 06 No-Show/Late Cancel Fees Charge Fees filter. Confirms membership taxonomy depth.

### 107. Late Cancellations vs No-Shows are distinct lifecycle terminal states
Step 06 Cancellation method(s) filter values. DL-15 + DL-16 must distinguish.

### 108. Location substrate has location_type enum (physical / virtual / online_store / kiosk)
Step 06 Location(s) filter includes both "Bloom Health" physical and "Online Store" virtual. OMNI multi-tenancy substrate.

### 109. **DUAL-MODE Required Fields (Consumer Mode vs Business Mode)** is policy substrate
Step 07. Per-field required-flag is independently configured for each mode. Same field optional for staff but required for client self-add (e.g., Address required Consumer Mode / optional Business Mode).

### 110. Required-field state is 3-enum (always_required / configurable_required / configurable_optional) NOT boolean
Step 07 Email field greyed in Consumer Mode = always-required. OMNI required-field substrate must support 3-state.

### 111. **21-EVENT CLIENT ALERT VOCABULARY** at client-level CNS taxonomy
Step 08. Account Balance Threshold / Account Credit / Arrivals / Autopay Failed / Client Status / Contract Confirmation / Credit Card Expiration / Failed Auto Email / Followup Due / Liability Waiver / Low Session / Missing Billing / Missing Required Fields / No Arrivals / No Current Membership / No Visits / Scheduling Suspended / Staff (Red) Alert / Unpaid Sessions / Waitlist Confirmed / Yellow Alert. Concrete DL-14 + DL-16 substrate validation.

### 112. Alert severity is enum (Red / Yellow visible)
Step 08 "Staff (Red) Alert" + "Yellow Alert" entries. Alert substrate must include severity_level enum.

### 113. Promo Code substrate is 13+ columns including channel-scoping, day-of-week mask, multi-year validity
Step 09. B2B35 promo: 3/14/2019 - 4/10/2036 = 17-year window. Substrate complete.

### 114. Gift Card substrate supports price-value-decoupling for promotions
Step 10. "Discount the price of this gift card" boolean enables $100-value sold for $80.

### 115. Gift Card eligibility supports member-only restriction (per-member-tier capability)
Step 10. "Can everyone purchase this gift card? No, only certain members can purchase it" radio.

### 116. **Package and Contract share underlying substrate (same legacy ASP page with setAsPackage=1 flag)**
Step 11 URL `adm_tlbx_contracts_ae.asp?add=true&setAsPackage=1`. Mindbody collapses Package + Contract into one substrate with discriminator flag. OMNI Q3 decision: collapse or separate.

### 117. Package items support 5+ types (service / product / pricing_option / gift_card / contract)
Step 11 Type of item dropdown.

### 118. Locker # is a client substrate primitive (physical amenity assignment)
Step 12 mystery file. `client.locker_number` substrate.

### 119. Client Suspension is a substrate with end_date (Suspension Types from Step 03 Services section)
Step 12 "Suspension to date: None" field. `client_suspension { id, client_id, suspension_type_id, start_date, end_date, reason }`.

### 120. Client cockpit has multiple UI projections (3-column layout vs vertical-stack layout)
Step 12 vs Batch 10 Step 02. Same substrate, different UI rendering. Likely Q5 capability or per-user UI preference lever.

### 121. Alerts card surfaces 2 distinct alert containers (Client Alert + Staff Alert)
Step 12. Client Alert = client-visible alerts; Staff Alert = staff-only alerts. 2-tier alert visibility.

---

## End of Batch 16 — DESKTOP INGESTION COMPLETE (114 of 163 = 70%)

All 113 desktop screenshots + 1 mystery file ingested across Batches 4-16.

Next batch: rows 1-49 MOBILE screenshots (IMG_9122 through IMG_9170). Mobile UX deserves its own batch grouping per Layer 2 Section M (mobile vs desktop UX distinction).
