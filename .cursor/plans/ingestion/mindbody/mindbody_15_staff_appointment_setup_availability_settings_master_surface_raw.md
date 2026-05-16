# Mindbody — Batch 15 raw capture: Staff Profile Appointment Setup tab + Appointment Availability tab + Add Availability 4-axis form + Settings master surface (Communications & Marketing / Staff / Clients / Inventory / Pricing sections enumerated)

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~4:50 AM UTC-4)
Batch: 15
Feature area(s): `staff_profile_appointment_setup`, `staff_profile_appointment_availability`, `staff_profile_add_availability`, `settings_master_surface`
Screenshots covered: 10 (rows 142-151 = 12.35.41 AM through 12.38.58 AM)

Chat cross-references:
- **Marker 6 (lines 2598-3721) — Settings as operating system + global admin config taxonomy** — Steps 05-10 (Settings master surface across Communications/Staff/Clients/Inventory/Pricing) are THE canonical evidence base. Knox's "Mindbody's architecture is really: client record + service catalog + pricing/entitlement engine + staff/provider capability system + inventory/retail + communications settings + global admin configuration" is FULLY surfaced here in one navigable taxonomy.
- **Marker 14 (lines 27597-27982) — Services settings as policy controls + admin config taxonomy** — Step 05 Settings left nav shows 10 top-level sections (Communications & Marketing / Staff / Clients / Inventory / Pricing / General / Services / Retail / Mindbody Add-ons / Classic Setup) — the deepest config taxonomy Knox enumerated.
- **Marker 5 (lines 2153-2597) — Service catalog mesh: staff eligibility / online booking rules** — Steps 01-04 (Staff Appointment Setup + Availability + Add Availability) show staff-as-scheduling-object substrate with 4-axis Availability primitive (what/where/when/other).
- Pre-marker bucket 7 (multi-typed notes) — Step 03 Add Availability has a "Privacy" axis distinguishing client-visible vs staff-only schedules (note pattern at scheduling level).

Supplemental cross-references:
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 3 (mode-per-service-line) — Step 03 Add Availability's "What services does Amber offer at this time?" multi-select is the canonical evidence of staff-per-time-window service-eligibility scoping. Mode-per-service-line maps but doesn't fully capture; here it's time-window-scoped multi-service eligibility.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q4 (mode-per-service-line vs flat) — Step 03 evidence: services CAN be scoped per-availability-window, not just per-staff. A staff member can be a "Provider for appointments" globally (Step 09 Batch 14 capability flag) AND ALSO have time-windowed service-category eligibility (e.g., "morning shifts only injectables, afternoon shifts adds facials").
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 (capability flags per brand) — Steps 05-10 Settings master surface IS the canonical brand-level capability/configuration substrate. Every settings sub-page is an org-configurable capability axis.

User feedback cross-refs:
- Gap #1 (room/provider/resource alignment) — Step 03 Add Availability "Where" axis = single Location dropdown (Bloom Health). For multi-location clinics, this is the location-component of the booking axis composition.
- Gap #8 (video visits / ad-hoc phone calls / in-clinic mixed schedule) — Step 02 Appointment Availability allows MULTIPLE schedule entries per day, each with its own Service Categories scope. A staff can have AM shift "Z" category at one location + PM shift "8 services" at another. Substrate supports the mixed-modality use case.
- Gap #3 (subscriptions/memberships/POS/retail/gift cards/loyalty woven) — Step 10 Settings Pricing section confirms ALL of these are separate settings sub-pages: Pricing Options / Manage Sales / Promo Codes / Account Payments / **Gift Cards** / **Contracts** / Organize Contracts / **Packages**. 8 distinct primitives. Plus Step 06 Membership Settings + Step 09 Tax Rates (Batch 14 Step 04) + Intro Offers = 11+ commerce-domain configurable substrates.

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-14 at 12.35.41 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/asp/adm/adm_trn_payrates.asp`
**Feature area:** `staff_profile_appointment_setup`
**Inferred screen title:** Staff Profile > Appointment Setup tab — Amber Allen — Set default pay rate + Set up appointments table (10 of N services with Service category / Appointment type / Length / Prep time / Finish time / Provider pay rate columns)

### TEXT CONTENT (VERBATIM)

```
[Breadcrumb: Provider / Amber Allen]
[Tabs: Provider Profile / Appointment Setup (active) / Appointment Availability / Group Lesson Pay Rates]

Appointment Setup

┌─────────────────────────────────────────────────────────────┐
│ Set default pay rate for Amber Allen                        │
│ No pay  Edit                                                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Set up appointments for Amber Allen;        [+ Assign Multiple Appointment Types] │
│ These are the types of appointments that Amber can perform; │
│                                                             │
│ Service category ▼ | Appointment type | Length | Prep time | Finish time | Provider pay rate │
│ 1. Facials        | BH HydraFacial    | 60 mins | 0 mins | 0 mins | No pay │
│ 1. Facials        | BH Signature Facial (60 Mins) | 60 mins | 0 mins | 0 mins | No pay │
│ 1. Facials        | BH Signature Facial (90 Mins) | 90 mins | 0 mins | 0 mins | No pay │
│ 1. Facials        | Biologique Recherche Facial (60 Mins) | 60 mins | 0 mins | 0 mins | No pay │
│ 1. Facials        | Biologique Recherche Facial (90 Mins) | 90 mins | 0 mins | 0 mins | No pay │
│ 1. Facials        | C-Radiance Facial | 60 mins | 0 mins | 0 mins | No pay │
│ 1. Facials        | Expecting Facial  | 60 mins | 0 mins | 0 mins | No pay │
│ 1. Facials        | Express Facial    | 30 mins | 0 mins | 0 mins | No pay │
│ 1. Facials        | Fire & Ice Facial | 60 mins | 0 mins | 0 mins | No pay │
│ 1. Facials        | HI-Tech Facial    | 60 mins | 0 mins | 0 mins | No pay │
│ [more below]                                                │
```

### ARCHITECTURAL OBSERVATIONS

**This is the REVERSE projection of Batch 13 Step 10.** Same `staff_service_assignment` join table; here projected from Staff's perspective listing all assigned services. There projected from Service's perspective listing all eligible staff.

**Default pay rate** (currently "No pay") is at staff-level, applied as fallback when per-service pay rate is null. **2-tier substrate:**
- `staff.default_pay_rate_id` — staff-level fallback
- `staff_service_assignment.pay_rate_id` — per-service override (nullable; falls through to staff default if null)

**"Assign Multiple Appointment Types"** CTA implies a bulk-assignment workflow (multi-select services + bulk-bind to staff with same prep/finish/pay defaults).

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-14 at 12.35.57 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/StaffSchedule/StaffCentricSchedule?id=100000047`
**Feature area:** `staff_profile_appointment_availability`
**Inferred screen title:** Staff Profile > Appointment Availability tab — Amber Allen — Day Of Week × Start/End Time × Service Categories × Date Range × Privacy table; mixed recurring + one-time-override schedule entries

### TEXT CONTENT (VERBATIM)

```
[Tabs: Provider Profile / Appointment Setup / Appointment Availability (active) / Group Lesson Pay Rates]

Appointment Availability                                       [+ Add New Schedule]

                                                              View: [Current and future ▼]

Day Of Week | Start Time | End Time | Service Categories | Date Range            | Privacy
─────────────────────────────────────────────────────────────────────────────────────────
Sunday      |            |          |                    |                       |
Monday      | 10:00 am   | 1:15 pm  | Z (italic)         | 05/11/2026 (italic)   | [lock icon] [person icon]
            | 10:00 am   | 5:00 pm  | 8 services         | 09/25/2025 – 09/25/2027 | [person icon]
Tuesday     |            |          |                    |                       |
Wednesday   | 10:00 am   | 5:00 pm  | 8 services         | 09/25/2025 – 09/25/2027 | [person icon]
Thursday    |            |          |                    |                       |
Friday      | 10:00 am   | 5:00 pm  | 8 services         | 09/25/2025 – 09/25/2027 | [person icon]
            | 1:30 pm    | 5:00 pm  | Daughter sick- no P... (italic) | 05/15/2026 (italic) | [lock icon] [person icon]
Saturday    |            |          |                    |                       |
                                                                                       [Done]
```

### ARCHITECTURAL OBSERVATIONS

**Multiple availability entries per day allowed.** Substrate:
- `staff_availability_window { id, staff_id, day_of_week, start_time, end_time, service_categories[], location_id, date_range_start, date_range_end, privacy, notes }`
- Recurring entries have multi-year date ranges (09/25/2025–09/25/2027 = 2-year recurring availability)
- One-time-override entries have single-date (05/15/2026) — typically italicized in UI to distinguish overrides
- **Notes field** ("Daughter sick- no P...") = staff-supplied reason for override

**Privacy column** has 2 icon types visible:
- `[lock icon]` = private to staff/admin
- `[person icon]` = visible to clients (public schedule)

Both icons coexist on the Monday 10:00am-1:15pm row AND Friday override row — implies 2 separate privacy modes can be ON simultaneously (or the lock icon is for "edit-locked" and person icon is for "client-visible").

**Substrate per Q1 + DL-15:** Availability is the schedule-supply primitive. Appointments consume availability windows. OMNI must model these as separate substrate primitives.

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-14 at 12.36.15 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/StaffSchedule/AddSchedule?staffId=100000047&staffCentric=True&legacyTabId=f4b21fb7-...`
**Feature area:** `staff_profile_add_availability`
**Inferred screen title:** Add Availability form for Amber Allen — 4 numbered sections (1. What / 2. Where / 3. When / 4. Other) — Show staff as Available/Unavailable + Services multi-select + Location + Date Range + Days + Time + Privacy

### TEXT CONTENT (VERBATIM)

```
[Card header]: Amber Allen
* Required field

① What
Show staff as:                      ● Available    ○ Unavailable

* What services does Amber offer at this time?
[1. Facials, 11. Provider Consultations, 2. Add-Ons   ▼]   ← multi-select

② Where
Location:                           Bloom Health

③ When
Date Range:                         [Custom dates                     ▼]
Date:                               [05/13/2026]  To  [05/27/2026]
Days:                               [Sun] [Mon] [Tue] [Wed (SELECTED)] [Thu] [Fri] [Sat]
Time:                               [8:30 am ▼]  To  [9:00 am ▼]

④ Other
Privacy:                            [Allow clients to see schedule  ▼]

                              [Cancel]  [Add]  [Save and Add Next]
```

### ARCHITECTURAL OBSERVATIONS

**4-axis Availability primitive substrate:**
1. **What:** Available/Unavailable + service categories (multi-select)
2. **Where:** Location (single select from clinic's locations)
3. **When:** Date Range (Custom dates / Recurring / Specific Date types) + Days (multi-select day-of-week) + Time window (HH:MM start-end)
4. **Other:** Privacy (Allow clients to see / Hide from clients / Staff only)

The UI's numbered-step flow (1→4) matches the substrate composition. OMNI substrate:

```sql
staff_availability_window {
  id, staff_id,
  availability_type,    -- 'available' | 'unavailable'
  service_category_ids[],
  location_id,
  date_range_type,      -- 'custom' | 'recurring_weekly' | 'one_time'
  date_range_start, date_range_end,
  days_of_week[],       -- {sun, mon, tue, wed, thu, fri, sat}
  time_start, time_end,
  privacy,              -- 'public' | 'staff_only' | 'hidden_from_clients'
  notes
}
```

**Unavailable entries are stored in the SAME table as Available** (just with `availability_type='unavailable'`). Simplifies query model — unavailability is a constraint window, not absence-of-availability.

**Privacy 3-enum confirmed:** Privacy controls client visibility. For OMNI per system map 1G consent capture: scheduling privacy is a 3-state primitive.

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-14 at 12.37.17 AM.png`
**URL:** `clients.mindbodyonline.com/app/settings`
**Feature area:** `settings_master_surface`
**Inferred screen title:** Settings master surface — left nav with 10 sections (Communications & Marketing / Staff / Clients / Inventory / Pricing / General / Services / Retail / Mindbody Add-ons / Classic Setup); Communications & Marketing section displayed with 7 sub-pages

### TEXT CONTENT (VERBATIM)

```
[Left nav: Settings menu]
  Communications & Marketing (active)
  Staff
  Clients
  Inventory
  Pricing
  General
  Services
  Retail
  Mindbody Add-ons
  Classic Setup

[Search settings]

📣 Communications & Marketing

News & Events                    > Display messages for events and promotions on your site.
Notifications (Auto-emails)      > Manage email and SMS notifications for clients and staff.
Links                            > Create links to specific parts of your MINDBODY site.
Appointment Reminders            > Set up and customize appointment reminders for your clients.
Waitlist Notifications           > Enable and customize waitlist notifications for clients.
Social Media                     > Store social media settings for easy online presence management.
Studio Variables                 > Set up dynamic variables for your Attentive marketing messages.

👥 Staff

Provider Permissions             > Control staff permissions for access to different MINDBODY site features.
[continues...]
```

### ARCHITECTURAL OBSERVATIONS

**Settings has 10 TOP-LEVEL sections, each with multiple sub-pages.** This is the Knox marker 6 canonical "settings as operating system" surface. Per system map 1F (configuration surface) — OMNI must have an equivalent settings taxonomy. Enumeration of all visible sub-pages across Steps 04-10:

| Section | Sub-pages observed |
|---------|-------------------|
| Communications & Marketing | News & Events, Notifications (Auto-emails), Links, Appointment Reminders, Waitlist Notifications, Social Media, Studio Variables (7) |
| Staff | Provider Permissions, Self Clock In, Time Clock Tasks (3) |
| Clients | Membership Settings, Modify Tagged Clients, Locate Duplicate Clients, Merge Duplicate Clients, Unmask Merged Clients, Cancel Class and Appointment Bookings, Self Check In, Data Privacy, No-Show/Late Cancel Fees, Required Fields, Prospect Stages, Relationship Types, Client Profile Custom Fields, Client Alerts, Client Indexes, Client Index Values, Client Types, Referral Types, Referral Subtypes, Contact Log Types, Client Statuses, Gender (22) |
| Inventory | Purchase Orders, Inventory Tickets, Product Sizes, Product Colors, Suppliers, Payment Terms (6) |
| Pricing | Pricing Options, Organize Pricing, Manage Sales, Promo Codes, Account Payments, Gift Cards, Contracts, Organize Contracts, Packages (9) |

**Total surfaces visible across Steps 04-10: 47 settings sub-pages** in just 5 of 10 sections. Extrapolating to all 10 sections, Mindbody likely has **~100+ configurable settings sub-pages** at brand-level. This is Knox marker 14's "deeply configurable business rules engine" made literal.

**`Search settings` input at top** — full-text search across settings is itself a substrate feature.

**Sub-pages are linkable individually** (each row has `>` chevron + status-bar URL hint per Step 04-10 browser status bar text). Implies stable, addressable settings URLs:
- `/app/business/asp/adm/adm_tlbx_ss_membership.asp` (Membership Settings)
- `/app/business/clients/client-types` (Client Types)
- `/app/business/GenderManagement` (Gender)
- etc.

For OMNI: per system map 1F + 1Q (config) — settings substrate should mirror this URL-addressable per-sub-page pattern. Direct deep-links to specific settings are important for ops and support flows.

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-14 at 12.37.34 AM.png`
**URL:** Same as Step 04
**Feature area:** `settings_master_surface`
**Inferred screen title:** Settings scrolled to Staff section + Clients section start (Provider Permissions / Self Clock In / Time Clock Tasks + Clients: Membership Settings / Modify Tagged Clients / Locate Duplicate / Merge Duplicate / Unmask Merged)

### TEXT CONTENT (VERBATIM)

```
👥 Staff

Provider Permissions             > Control staff permissions for access to different MINDBODY site features.
Self Clock In                    > Self clock in screen requires a staff ID.
Time Clock Tasks                 > Track staff hours, categorize tasks, and calculate pay efficiently.

👤 Clients

Membership Settings              > Use memberships to track client groups and offer perks.  (highlighted green)
Modify Tagged Clients            > Make bulk changes to multiple client accounts simultaneously.
Locate Duplicate Clients         > Find and merge duplicate client profiles to avoid issues.
Merge Duplicate Clients          > Merge duplicate client accounts and consolidate information.
Unmask Merged Clients            > Unmask merged clients to restore their individual profiles.
```

### ARCHITECTURAL OBSERVATIONS

**Time Clock Tasks** as a separate Settings sub-page implies a **clock-in/clock-out substrate** with task-categorization. For commercial clinics: staff time tracking + payroll calculation. New substrate primitive for OMNI's HR-adjacent domain. Per Knox marker 6 chat reference.

**Self Clock In** = kiosk/tablet-mode for staff to clock in/out without admin assistance. Per system map possibly 1H.4 acquisition (channel) — kiosk channel for staff identity assertion.

**`Unmask Merged Clients`** — REVERSE of merge operation. Per Knox marker 11 client merge-as-audit: merge is reversible (preserve pre-merge identity rows for unmask). Concrete confirmation that Mindbody implements merge with full reversibility audit trail.

---

## Step 06

**File:** `screenshots/Screen Shot 2026-05-14 at 12.37.48 AM.png`
**URL:** Same
**Feature area:** `settings_master_surface`
**Inferred screen title:** Settings Clients section continued — Cancel Class and Appointment Bookings / Self Check In / Data Privacy / No-Show/Late Cancel Fees / Required Fields / Prospect Stages / Relationship Types

### TEXT CONTENT (VERBATIM)

```
👤 Clients (continued)

Modify Tagged Clients            > Make bulk changes to multiple client accounts simultaneously.
Locate Duplicate Clients         > Find and merge duplicate client profiles to avoid issues.
Merge Duplicate Clients          > Merge duplicate client accounts and consolidate information.
Unmask Merged Clients            > Unmask merged clients to restore their individual profiles.
Cancel Class and Appointment Bookings  > Search for and cancel class or appointment bookings by criteria.
Self Check In                    > Dedicated check-in page for scanning cards.  (highlighted green)
Data Privacy                     > Manage client requests to access, transfer, or delete their data.
No-Show/Late Cancel Fees         > Manage no-show and late cancellation fees for flexibility.
Required Fields                  > Choose required client information for new and existing accounts.
Prospect Stages                  > Track interactions and manage prospects with targeted marketing.
Relationship Types               > Define and manage client relationships for shared services and payments.
```

### ARCHITECTURAL OBSERVATIONS

**`Cancel Class and Appointment Bookings`** as bulk-cancel operation under Settings — implies admin-grade cancel-many-bookings substrate for events like clinic closures, instructor cancellations, etc. Bulk-cancel needs audit trail per DL-14.

**`Self Check In`** = client-side kiosk for self-arrival (separate from staff Self Clock In Step 05). 2 distinct kiosk substrates.

**`Data Privacy`** = GDPR/CCPA workflows (access / transfer / delete client data). Per Knox marker 11 PII handling.

**`No-Show/Late Cancel Fees`** — settings for fee structure when clients no-show or cancel late. Implies substrate:
- `cancellation_policy { id, brand_id, no_show_fee_amount, no_show_fee_type [flat/percent], late_cancel_window_hours, late_cancel_fee_amount, ... }`

**`Prospect Stages`** = sales-pipeline stage taxonomy (Batch 10 row 62 Client Directory had "Sales Info" filters with stages). Confirms CRM-grade lead-management substrate is configurable per-clinic.

**`Relationship Types`** = client-to-client relationship taxonomy (parent/child/spouse/guardian/business). Per system map 1J relationship integrity.

---

## Step 07

**File:** `screenshots/Screen Shot 2026-05-14 at 12.38.06 AM.png`
**URL:** Same
**Feature area:** `settings_master_surface`
**Inferred screen title:** Settings Clients section continued — Client Profile Custom Fields / Client Alerts / Client Indexes / Client Index Values / Client Types / Referral Types / Referral Subtypes / Contact Log Types

### TEXT CONTENT (VERBATIM)

```
👤 Clients (continued)

Required Fields                  > Choose required client information for new and existing accounts.
Prospect Stages                  > Track interactions and manage prospects with targeted marketing.
Relationship Types               > Define and manage client relationships for shared services and payments.
Client Profile Custom Fields     > Create and manage custom fields for client forms and profiles.
Client Alerts                    > Enable client alerts to display important account issues.
Client Indexes                   > Set up client indexes to categorize and analyze demographics.
Client Index Values              > Set specific subdivisions within client index groups.
Client Types                     > Classify clients with types like senior, student, or veteran.  (highlighted)
Referral Types                   > Track client referral types and sources for reporting.
Referral Subtypes                > Specify referral subtypes for detailed tracking of client origins.
Contact Log Types                > Organize client notes with contact log types and filter by type.
```

### ARCHITECTURAL OBSERVATIONS

**These confirm Batch 12 Step 04 Client Directory More menu enumeration** (18 client-domain admin entries). The same primitives, accessed from a different navigation path (Settings vs Client Directory More menu).

**Client Types examples** ("senior, student, or veteran") — beyond Batch 10 Row 62's "All client types / B2B / FAMILY" enum. Mindbody allows arbitrary client-type taxonomies per-clinic.

**Client Profile Custom Fields** = per-clinic extensible client metadata (text/number/date/dropdown). Per Knox marker 6: a substrate "custom fields engine" for client domain.

OMNI substrate: `client_custom_field { id, brand_id, field_key, field_type, label, validation, sort_order }` + `client_custom_field_value { client_id, field_id, value }`.

---

## Step 08

**File:** `screenshots/Screen Shot 2026-05-14 at 12.38.23 AM.png`
**URL:** Same
**Feature area:** `settings_master_surface`
**Inferred screen title:** Settings Clients section end (Client Types / Referral Types / Referral Subtypes / Contact Log Types / Client Statuses / Gender) + Inventory section start (Purchase Orders / Inventory Tickets / Product Sizes / Product Colors)

### TEXT CONTENT (VERBATIM)

```
👤 Clients (continued)

Client Types                     > Classify clients with types like senior, student, or veteran.
Referral Types                   > Track client referral types and sources for reporting.
Referral Subtypes                > Specify referral subtypes for detailed tracking of client origins.
Contact Log Types                > Organize client notes with contact log types and filter by type.
Client Statuses                  > Create and assign custom client statuses to track their membership.
Gender                           > Add gender options for client accounts beyond the default choices.  (highlighted)

📦 Inventory

Purchase Orders                  > Create purchase orders and log inventory as shipments arrive.
Inventory Tickets                > Add items to inventory from multiple suppliers with tickets.
Product Sizes                    > Create custom sizes for products like clothing, weights, and more.
Product Colors                   > Add custom colors, scents, and materials for products you sell.
```

### ARCHITECTURAL OBSERVATIONS

**Gender configuration sub-page:** "Add gender options for client accounts beyond the default choices" — Mindbody allows non-binary / custom gender values per-clinic. Per system map 1G consent: gender is org-configurable enum, not hardcoded binary. OMNI substrate: `gender_value { id, brand_id, label, sort_order }`.

**Inventory section sub-pages (4 visible: Purchase Orders / Inventory Tickets / Product Sizes / Product Colors):**
- Purchase Orders = vendor purchase order tracking (separate substrate from retail product sales)
- Inventory Tickets = batch-receive items from suppliers
- Product Sizes = configurable size taxonomy (e.g., 1oz / 2oz / 4oz vials)
- Product Colors = product variant axis (Color / Scent / Material per the description)

**Inventory is its OWN domain** with vendor relationships, purchase orders, batch receiving, and product-variant axes. Layer 2 Section J cross-domain implication: OMNI's inventory substrate is a Phase D (Rx-labs) or later concern but needs scaffold from Day 0.

---

## Step 09

**File:** `screenshots/Screen Shot 2026-05-14 at 12.38.42 AM.png`
**URL:** Same
**Feature area:** `settings_master_surface`
**Inferred screen title:** Settings Inventory section continued (Purchase Orders / Inventory Tickets / Product Sizes / Product Colors / Suppliers / Payment Terms) + Pricing section start (Pricing Options / Organize Pricing)

### TEXT CONTENT (VERBATIM)

```
📦 Inventory (continued)

Purchase Orders                  > Create purchase orders and log inventory as shipments arrive.
Inventory Tickets                > Add items to inventory from multiple suppliers with tickets.
Product Sizes                    > Create custom sizes for products like clothing, weights, and more.
Product Colors                   > Add custom colors, scents, and materials for products you sell.
Suppliers                        > Track supplier information, contacts, and payment terms.
Payment Terms                    > Set specific payment terms for purchase orders to suppliers.  (highlighted)

💲 Pricing

Pricing Options                  > Create and manage pricing options for your services.
Organize Pricing                 > View and manage all pricing options for your business.
```

### ARCHITECTURAL OBSERVATIONS

**Suppliers + Payment Terms** — Mindbody has full B2B-AP (Accounts Payable) substrate for vendor management:
- `supplier { id, brand_id, name, contact_info, payment_terms_id }`
- `payment_term { id, brand_id, name, days, discount_pct }` (e.g., "Net 30", "2/10 Net 30")
- `purchase_order { id, supplier_id, payment_term_id, ... }`

This is full ERP-adjacent functionality. For OMNI: AP substrate likely Phase D or later. Layer 2 Section J cross-domain.

---

## Step 10

**File:** `screenshots/Screen Shot 2026-05-14 at 12.38.58 AM.png`
**URL:** Same
**Feature area:** `settings_master_surface`
**Inferred screen title:** Settings Pricing section enumerated (9 sub-pages: Pricing Options / Organize Pricing / Manage Sales / Promo Codes / Account Payments / Gift Cards / Contracts / Organize Contracts / Packages)

### TEXT CONTENT (VERBATIM)

```
💲 Pricing

Pricing Options                  > Create and manage pricing options for your services.
Organize Pricing                 > View and manage all pricing options for your business.
Manage Sales                     > Search transactions by client name, sale date, or sale ID.
Promo Codes                      > Create, control, and track promo codes for discounts.
Account Payments                 > View and manage existing and create new Account Payments.
Gift Cards                       > Set up and sell gift cards online or in person with customizable options.
Contracts                        > Manage contracts to automate recurring billing for clients.  (highlighted)
Organize Contracts               > Organize and display contracts in your preferred order.
Packages                         > Combine services, products, and credits into customizable packages.
```

### ARCHITECTURAL OBSERVATIONS

**Pricing section enumerates the 8-PRIMITIVE COMMERCE SUBSTRATE in one taxonomy:**
1. Pricing Options (Single Session / Multi-Session / Unlimited / Autopay-Contract — Batch 13 4-type enum)
2. Organize Pricing (admin reordering across all)
3. Manage Sales (per-transaction lookup / refund / void)
4. Promo Codes (manual coupon library — Batch 14 Step 04 cross-ref)
5. Account Payments (account credit substrate — Batch 8 Step 04 cross-ref)
6. Gift Cards (gift card sale + redemption — Batch 8 Step 03 cross-ref)
7. **Contracts** (recurring billing automation — Batches 11 Step 04 BH+ Elite cross-ref)
8. Organize Contracts (admin reordering)
9. Packages ("Combine services, products, and credits into customizable packages" — multi-item bundle substrate)

**8 distinct configurable commerce primitives.** Plus:
- Memberships (Step 05 Clients section + Batch 14 Step 04 Pricing more menu)
- Intro Offers (Batch 14 Step 04)
- Tax Rates (Batch 14 Step 04)
- 24+ Payment Methods (Batches 8-11 cumulative)

Total **12+ commerce substrate primitives** at brand level. Plus the Q3 4-entity-split entity layer (Schedulable Service / Billable Item / Clinical Service / Resource-Inventory) for service-level commerce.

**For OMNI future commerce DL (Phase C):** the 12+ primitive taxonomy IS the configurable surface area. Each is its own admin sub-page in Settings, each is its own substrate primitive.

---

## Cumulative Batch 15 findings (additive to handoff 1-15 + Batches 11-14 16-83)

### 84. Staff Profile Appointment Setup tab is the REVERSE projection of Staff Assignment (same join, opposite perspective)
Step 01 shows per-staff what services they offer; Batch 13 Step 10 shows per-service what staff perform it. Same `staff_service_assignment` table.

### 85. 2-tier pay-rate fallback substrate (staff.default_pay_rate ← staff_service_assignment.pay_rate)
Step 01 "Set default pay rate for Amber Allen" is fallback when per-service rate null.

### 86. Appointment Availability supports multi-entry per day with mixed recurring + one-time-override
Step 02. Some Friday entries are 2-year recurring (09/25/2025-09/25/2027) + 1 single-date override (05/15/2026 "Daughter sick"). Substrate supports both pattern via date_range_type enum.

### 87. Add Availability is 4-axis primitive (What / Where / When / Other-Privacy)
Step 03. Substrate `staff_availability_window` with availability_type + service_category_ids[] + location + days[] + time_range + privacy.

### 88. Availability privacy is 3-enum (public/staff_only/hidden_from_clients)
Step 03 Other section. Privacy controls client visibility of scheduling.

### 89. Settings master surface has 10 top-level sections
Step 04 left nav: Communications & Marketing / Staff / Clients / Inventory / Pricing / General / Services / Retail / Mindbody Add-ons / Classic Setup.

### 90. ~100+ settings sub-pages total across all sections (47 visible in 5 of 10 sections)
Steps 04-10 enumerate 47 sub-pages in just 5 sections. Knox marker 14 "deeply configurable business rules engine" made literal.

### 91. Settings sub-pages have stable URL-addressable deep-links
Status bar URLs visible (`adm_tlbx_ss_membership.asp`, `/clients/client-types`, `/GenderManagement`, etc.). OMNI: settings URL-addressability is a substrate feature.

### 92. Time Clock Tasks substrate (staff clock-in/out + task categorization for payroll)
Step 05. HR-adjacent substrate.

### 93. Self Clock In (staff kiosk) ≠ Self Check In (client kiosk)
Step 05 + Step 06. 2 distinct kiosk substrates for staff vs client identity assertion at-clinic.

### 94. Unmask Merged Clients = reverse of merge operation (full reversibility audit substrate)
Step 05. Concrete confirmation Mindbody implements merge with pre-merge identity preservation for unmask. Per Knox marker 11.

### 95. Cancel Class and Appointment Bookings = bulk-cancel admin substrate
Step 06. Audit-trail-bound per DL-14.

### 96. No-Show/Late Cancel Fees substrate (cancellation_policy primitive)
Step 06. Per-clinic configurable fee structure.

### 97. Gender is org-configurable enum (non-binary / custom values)
Step 08. Substrate `gender_value { id, brand_id, label, sort_order }`. Per system map 1G consent.

### 98. Inventory section has 6 sub-pages (Purchase Orders / Inventory Tickets / Product Sizes / Product Colors / Suppliers / Payment Terms)
Steps 08-09. Full ERP-adjacent AP substrate (suppliers + payment terms + purchase orders).

### 99. Pricing section enumerates 8+ commerce primitives in one taxonomy
Step 10. Pricing Options / Organize Pricing / Manage Sales / Promo Codes / Account Payments / Gift Cards / Contracts / Organize Contracts / Packages. Total **12+ commerce substrate primitives** at brand level.

### 100. **OMNI commerce DL (Phase C) scope = 12+ primitives** — enumeration concrete
Cumulative from Batches 6-15: Pricing Options (with 4 billing-type enum) + Memberships + Tax Rates + Promo Codes + Discount Programs + Intro Offers + 24+ Payment Methods + Gift Cards + Contracts (autopay) + Packages + Account Payments + Treatment Deposits. **12 distinct primitives needed.** Plus 4-entity split for service-level commerce (Schedulable / Billable / Clinical / Resource-Inventory). Plus per-pricing-option commission/scheduling-restrictions/auto-email-triggers (Batch 13). Plus refund/return per-line. Plus Sale/Line/Payment-attempt parent-child substrate.

---

## End of Batch 15

Next batch: rows 152-N starting at `Screen Shot 2026-05-14 at 12.39.13 AM.png`. Likely continues settings master surface (General / Services / Retail / Mindbody Add-ons / Classic Setup remaining sections).
