# Mindbody — Batch 12 raw capture: POS entry surface + Add-new-client modal + Clients Directory admin More menu + Services & Products Appointments admin (service catalog editor entry/categories/single-service-edit)

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~3:50 AM UTC-4)
Batch: 12
Feature area(s): `pos_entry`, `pos_client_add_modal`, `clients_directory_admin_more`, `services_products_appointments_admin`, `services_products_appointments_admin_edit`
Screenshots covered: 10 (rows 112-121 = 12.18.34 AM through 12.24.30 AM)

Chat cross-references:
- **Marker 1 (lines 380-700) — Checkout/POS/package/membership coupling** — Step 01 POS entry (Search for client / Add new client / Walk-In Sale / Open Tickets) is the entry point to all marker 1's action-menu-coupled flows.
- **Marker 5 (lines 2153-2597) — Service catalog / pricing engine / staff assignment / online booking** — THE canonical anchor for Steps 05-10. Knox's "Mindbody's service model is a mesh of: appointment type → service category → pricing options → staff eligibility → online booking rules → package/contract eligibility → commission/payroll → scheduling restrictions → automated emails" is fully visible at Step 05 (Appointments admin list) + Step 10 (Edit appointment type single service).
- **Marker 11 / Knox cluster 3 (lines ~27890-27982 end-of-marker-14)** — client merge / unmask / data privacy admin actions surface at Step 04 More menu (Modify Tagged Clients, Locate Duplicate Clients, Merge Duplicate Clients, Data Privacy, Client Forms, ICD Codes, Required Fields, etc.).
- Pre-marker bucket 9 (Client Directory / CRM) — Step 02 Add-new-client modal + Step 04 More menu confirms Mindbody's CRM-grade client management depth.

Supplemental cross-references:
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — Knox's 4-entity split (Schedulable / Clinical / Billable / Resource-Inventory). Step 09 hover popover surfacing **Capacity / Color / Deducted / Sort order** as per-service attributes is concrete evidence for Q3: a Schedulable Service row carries scheduling-only attributes (Capacity, Sort order) AND inventory-attributes (Deducted = decrement-on-render flag, Color = inventory variant axis). The 4-entity split is mostly merged in Mindbody.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 (4-entity split) — Steps 05-10 are the canonical evidence base. Knox's "service catalog mesh" enumeration at chat marker 5 is the conceptual model; here the UI implementation is visible.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 (capability flags) — Step 06 Settings dropdown items (Appointment Options / Scheduling Increments / Staff Schedules) are per-clinic configurable knobs; Q5 capability layer must accommodate.

User feedback cross-refs:
- Gap #1 (room/provider/resource independent + must align) — Step 09 hover shows Capacity 1, Color --, Deducted 0, Sort order 1 PER-SERVICE. Capacity attribute = how many simultaneous bookings the SERVICE supports. **NOT** the room or resource capacity — yet they must align (a service with Capacity=1 in a room with Capacity=3 still books 1 at a time UNLESS multi-staffing). OMNI must explicitly model service-capacity vs room-capacity vs resource-capacity as 3 independent axes that compose.
- Gap #2 (intended visit vs actual; variable-quantity Botox) — Step 10 Edit appointment type single-service page does NOT have a "variable quantity" toggle in default visible fields. Variable-quantity services like Botox are forced into the Products catalog (per Batch 8 row 87) precisely because Appointment Types are scheduling-only objects without quantity composability.
- Gap #3 (subscriptions/memberships/POS/retail/gift cards/loyalty woven) — Step 04 More menu shows admin entries for `ICD Codes / Client Forms / Required Fields / Client Form Custom Fields / Referral Types / Referral Subtypes / Contact Log Types / Client Statuses / Gender` — confirms Mindbody treats client metadata as a richly configurable taxonomy substrate. OMNI's CRM domain inherits this depth.

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-14 at 12.18.34 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/asp/adm/main_retail.asp?fl=true&tabID=3`
**Feature area:** `pos_entry`
**Inferred screen title:** Point of Sale — top-level entry page (3 paths: Search client / Add new client / Mary Behler [recent client?] / Walk-In Sale + Open Tickets dropdown + Gift card balance lookup)

### TEXT CONTENT (VERBATIM)

```
[URL: clients.mindbodyonline.com/app/business/asp/adm/main_retail.asp?fl=true&tabID=3]

[Left nav: Point of Sale (active)]

Point of Sale                                                                     [More ▾]

[Search for the client making a purchase] [input box, focused]      [Add new client]  [Mary Behler]  [Walk-In Sale]

Open Tickets    [New ticket ▼]                                                              [Gift card balance] [Lookup]

[Footer: © 2026 MINDBODY Inc. | Terms and Conditions | Privacy Policy | Site ID: 411894]
```

### UI ELEMENTS / VISUAL MARKERS

- **3 entry buttons inline next to client-search:**
  - `Add new client` — opens Step 02 modal
  - `Mary Behler` — appears to be a "recent client" quick-pick (or the most recently-viewed client persisted in session)
  - `Walk-In Sale` — start a sale without attaching a client (anonymized POS path)
- **Open Tickets dropdown** with `New ticket` default value — open-ticket workflow (paused sales saved for resumption)
- **Gift card balance / Lookup** in right column — gift-card balance check pathway (Batch 8 row 80 cross-ref)
- **`fl=true&tabID=3` URL params** — legacy ASP page; the underlying admin surface predates the modern React shell (tabID=3 is the POS tab)
- **Footer "Site ID: 411894"** confirms cross-cockpit consistency with Step 10 Batch 11 (Nicholas Crawford / Site ID 411894)

### ARCHITECTURAL OBSERVATIONS

**POS landing page is a triage surface, not a transaction surface.** Three flows fan out:
1. **Client-attached sale** (search/add → builds a per-client cart with Q3 entitlement attachment)
2. **Walk-In Sale** (anonymous, no client_id, simpler entitlement-free cart)
3. **Open ticket resume** (suspended sale, picks up where left off; substrate: cart persists across sessions until commit or void)

Three substrate cart states implied: `attached_cart`, `walkin_cart`, `paused_ticket`. OMNI commerce primitive (future Phase C) must model all three.

**Mary Behler quick-pick** = session-recent-client (the previous client viewed/sold-to in this session). Useful UX, low-stakes substrate primitive (per-user last-N-clients cache).

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-14 at 12.18.48 AM.png`
**URL:** Same (modal overlay)
**Feature area:** `pos_client_add_modal`
**Inferred screen title:** Add new client modal (page 1 — name/email/phone/gender + Subscriptions multi-channel opt-in)

### TEXT CONTENT (VERBATIM)

```
[Modal overlay center:]

‹ Back                              Add new client                              ×

First name *                                    Last name *
[          ]                                    [          ]

Email *
[                                                                       ]

☐ Prefers not to provide email

Mobile phone *
[                                                                       ]

Gender
No gender selected                                                       ▼

Subscriptions
When you ask clients to opt in, remind them that we'll still send receipts and anything critical.

Account info                            ☑ Email     ☐ Text
Schedule reminders and changes          ☑ Email     ☐ Text
News and Promos                         ☑ Email     ☐ Text ⓘ

                            Advanced Add Client   [Add Client] (orange)
```

### UI ELEMENTS / VISUAL MARKERS

- **4 required fields:** First name, Last name, Email, Mobile phone (Email has "Prefers not to provide email" escape hatch)
- **Subscriptions section** matches Batch 10 Step 02 Diana Donlon Client Info (6 toggles — 3 categories × 2 channels):
  - Account info (transactional) — defaults Email ON / Text OFF
  - Schedule reminders and changes (transactional-but-promotional-adjacent) — defaults Email ON / Text OFF
  - News and Promos (marketing) — defaults Email ON / Text OFF
- **Disclaimer:** "we'll still send receipts and anything critical" — Mindbody distinguishes transactional-mandatory comms from consent-gated comms. **Even when opted out of all categories, the system still sends receipts** — implicit "critical / regulatory / transactional" channel sits OUTSIDE the consent surface.
- **Default opt-in state is Email-ON across all 3 categories** — opt-out-by-default for Text, opt-in-by-default for Email. Per-channel defaults are configurable knobs (per Q5 capability).

### ARCHITECTURAL OBSERVATIONS

**Consent substrate has 4 conceptual buckets in Mindbody:**
1. **Critical / transactional** (receipts, regulatory) — NOT toggleable, always sent
2. **Account info** (account notifications, password resets)
3. **Schedule reminders and changes** (appointment-bound transactional)
4. **News and Promos** (pure marketing)

Each toggleable bucket has per-channel (Email / Text) opt-in. **5 channels possible** (Email, SMS Text, Phone Call, Push, Postal) but UI only exposes 2.

For OMNI per system map 1G (consent capture audit): consent substrate should model:
- `consent_category` (4+ buckets: critical [non-toggleable], transactional, scheduling, marketing)
- `consent_channel` (5+ values: email, sms, phone, push, postal)
- `consent_assignment` (per-client, per-category, per-channel, with default values from clinic config + override + opt-in audit trail)
- Default values are clinic-configurable per Q5

**`Prefers not to provide email`** = explicit data-minimization affordance. Confirms Mindbody treats Email as PII that can be intentionally absent. OMNI must support null Email + alternate channels (SMS-only path).

**Advanced Add Client link** in footer — suggests there's a 2-page or deeper version of this form. Step 03 may be the scrolled version (showing Address/Phone) but `Advanced Add Client` is a separate "more fields" path.

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-14 at 12.19.20 AM.png`
**URL:** Same (modal scrolled)
**Feature area:** `pos_client_add_modal`
**Inferred screen title:** Add new client modal SCROLLED (Address/State/Country/Work phone/Home phone — extended optional fields)

### TEXT CONTENT (VERBATIM)

```
[Modal scrolled down:]

Address type
Select                                                                  ▼

Address
[Street, number, P.O. box                                              ]

City
[Bloomfield Hills                                                       ]   ← pre-populated default

State/Province                    Postal code
[Michigan                ▼]       [               ]

Country
[United States                                                          ▼]

Work phone                                       Work extension
[                                  ]              [                    ]

Home phone
[                                                                       ]

                            Advanced Add Client   [Add Client] (orange)
```

### UI ELEMENTS / VISUAL MARKERS

- **City field pre-populated with `Bloomfield Hills`** — Mindbody auto-fills with the clinic's default city
- **State pre-populated `Michigan`** + **Country pre-populated `United States`** — same clinic-default auto-population
- **3 phone fields** (Mobile from Step 02 + Work + Home + Work extension) — Mindbody supports 4 phone columns per client
- **Address type dropdown** at top — implies Mindbody supports multiple addresses per client (Home / Work / Billing / Shipping?). Type-tagged address rows.

### ARCHITECTURAL OBSERVATIONS

**Address substrate is multi-typed-1-to-many:**
- `client_address { id, client_id, address_type [home/work/billing/shipping], street, city, state, postal_code, country }` — type-tagged
- 1 client → N addresses
- Clinic default city/state/country auto-fills on new-client-add (per-clinic config Q5)

**Phone substrate is fixed-4-fields-per-client (NOT 1-to-many):**
- `client { ..., mobile_phone, work_phone, work_extension, home_phone }` — denormalized as 4 columns
- Decision: Mindbody chose denormalized phone (vs phone array) because 4 is the practical max and join cost matters

For OMNI: phone primitive should be configurable — likely model as 1-to-many `client_phone { client_id, phone_type, phone_number, is_primary, is_consent_granted, ... }` to support edge cases (international numbers, additional phone types, channel-specific opt-in).

**Work extension as separate field from Work phone** is a small precision win — distinguishes the dialing process. OMNI keeps both.

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-14 at 12.19.53 AM.png`
**URL:** `clients.mindbodyonline.com/app/business/asp/adm/adm_clt_lkup.asp?nocache=1778732382393`
**Feature area:** `clients_directory_admin_more`
**Inferred screen title:** Client Directory — More menu EXPANDED with 18 client-domain admin/config entrypoints

### TEXT CONTENT (VERBATIM)

```
[Client Directory page — More dropdown EXPANDED top-right:]

More ▾
  Modify Tagged Clients
  Locate Duplicate Clients
  Merge Duplicate Clients
  Data Privacy
  Client Forms
  ICD Codes
  Required Fields
  Relationship Types
  Client Form Custom Fields
  Client Alerts
  Client Indexes
  Client Index Values
  Client Types
  Referral Types
  Referral Subtypes
  Contact Log Types
  Client Statuses
  Gender
```

### UI ELEMENTS / VISUAL MARKERS

- **18 menu items** — entire client-domain admin surface accessible from the Client Directory More menu
- Items map to substrate primitives:
  - `Modify Tagged Clients` — bulk-edit client tags (CRM admin)
  - `Locate Duplicate Clients` — duplicate detection workflow (precursor to merge)
  - `Merge Duplicate Clients` — same as Batch 11 Step 08 cockpit-level action
  - `Data Privacy` — GDPR/CCPA-style data-rights workflow (right-to-be-forgotten, data export)
  - `Client Forms` — form template management (intake, waiver, consent)
  - **`ICD Codes`** — medical/diagnosis code library (clinical substrate!)
  - `Required Fields` — clinic-configurable required fields per client
  - `Relationship Types` — taxonomy of client-to-client relationships (parent/child, spouse, guardian)
  - `Client Form Custom Fields` — per-form-template extensible fields
  - `Client Alerts` — alert/warning condition library
  - `Client Indexes` — taxonomy axes (Batch 10 row 62: Massage Pressure / Music Preference / Reason for visiting)
  - `Client Index Values` — values within each index axis
  - `Client Types` — B2B / FAMILY / etc. enum (Batch 10 row 62 reference)
  - `Referral Types` — top-level referral channel (e.g. Friend, Google, Instagram)
  - `Referral Subtypes` — second-level under each type
  - `Contact Log Types` — taxonomy for contact log entries
  - `Client Statuses` — Active / Inactive / etc. enum
  - `Gender` — gender enum (configurable beyond binary)

### ARCHITECTURAL OBSERVATIONS

**18 client-domain admin entries proves Mindbody treats CRM metadata as a richly configurable substrate.** Every taxonomy axis is org-configurable (per Q5 capability flag pattern). Knox marker 6 ("Settings as operating system") canonical anchor; the More menu confirms it for the client domain specifically.

**ICD Codes appearing here is significant.** Mindbody-the-medspa-product surfaces ICD diagnosis codes as a configurable library — Knox marker 5 hints at it; this is the concrete admin entry. For OMNI: clinical substrate must include ICD-10 / ICD-11 code library, even for medspa Day 0, because consent / treatment / charge-coding flows reference these. Per system map DL doctrine, ICD substrate may need its own DL (clinical-coding-substrate-DL) — flag for Layer 2 Section G refined doctrine sharpening.

**Data Privacy entry separately from Merge** — distinguishes 2 PII operations:
- Merge = combine 2 duplicate records (data preservation, dedup)
- Data Privacy = GDPR/CCPA workflow (data export, right-to-forget, consent log)

These ARE distinct substrate operations:
- Merge: combine + audit
- Data Privacy: export OR redact OR delete + audit

OMNI substrate must model both with their own DL-14 event signatures.

**Client Form Custom Fields + Client Indexes + Client Index Values + Required Fields = a 4-tier configurable client-metadata substrate:**
1. Required Fields (which fields MUST be populated when creating a client)
2. Client Indexes (which structured taxonomy axes exist — e.g., "Massage Pressure")
3. Client Index Values (the valid values per axis — e.g., "Light / Medium / Firm")
4. Client Form Custom Fields (per-form extensible field definitions)

For OMNI: per-clinic-configurable client metadata is a substrate primitive. Likely shape:
- `client_metadata_axis { id, brand_id, axis_name, axis_type [enum/text/date/multi-select], display_order }`
- `client_metadata_axis_value { axis_id, value_label, sort_order }` (for enum/multi-select axes)
- `client_metadata_assignment { client_id, axis_id, value }`

Possibly with separate primitives for form-template-custom-fields vs structured-indexes.

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-14 at 12.22.05 AM.png`
**URL:** `clients.mindbodyonline.com/app/services-products/appointment-types?accordions=6%2C20%2C5%2C21%2C17%2C9%2C18%2C2%2...`
**Feature area:** `services_products_appointments_admin`
**Inferred screen title:** Services & Products → Appointments admin (service catalog editor list — 1. Facials expanded with 12 services + 10. Red Light Therapy collapsed; search + Service categories + Appointments & Add-ons filters + Set Up Add-Ons + Settings actions)

### TEXT CONTENT (VERBATIM)

```
[Left nav: Services & Products (expanded):]
  Classes
  Appointments (active)
  Courses
  Retail Products
  Pricing
  Arrivals
  Contracts

[Right pane:]
Appointments                                              [● Set Up Add-Ons] [Settings ▾]

[Search... ▼]   [Service categories ▼]   [Appointments & Add-ons ▼]                        Collapse All

▾ 1. Facials                                                                  [Add ▾] [⋮]
  Services                                Duration  Price             Staff      Bookable online
  BH HydraFacial                          60        $0.00 - $300.00  4  3 staff       ● (ON)         [⋮]
  BH Signature Facial (60 Mins) ⚠         60        $165.00            3 staff       ● (ON)         [⋮]
  BH Signature Facial (90 Mins) ⚠         90        $200.00            3 staff       ● (ON)         [⋮]
  Biologique Recherche Facial (60 Mins) ⚠ 60        $200.00            1 staff       ● (ON)         [⋮]
  Biologique Recherche Facial (90 Mins) ⚠ 90        $275.00            1 staff       ● (ON)         [⋮]
  C-Radiance Facial ⚠                     60        $165.00            3 staff       ● (ON)         [⋮]
  Expecting Facial                        60        $165.00            3 staff       ● (ON)         [⋮]
  Express Facial ⚠                        30        $100.00            3 staff       ● (ON)         [⋮]
  Fire & Ice Facial ⚠                     60        $150.00            3 staff       ● (ON)         [⋮]
  HI-Tech Facial ⚠                        60        $200.00            3 staff       ● (ON)         [⋮]
  Lymphatic Facial ⚠                      60        $185.00            3 staff       ● (ON)         [⋮]
  O2 Glow Facial ⚠                        60        $165.00            3 staff       ● (ON)         [⋮]

▾ 10. Red Light Therapy                                                       [Add ▾] [⋮]
  Services                                Duration  Price             Staff      Bookable online
  ...
```

### UI ELEMENTS / VISUAL MARKERS

- **Search bar + 2 filter dropdowns** above the catalog (Service categories + Appointments & Add-ons)
- **`Set Up Add-Ons` primary CTA** in header — add-ons configured separately (separate workflow, dedicated entry)
- **`Settings ▾` dropdown** — top-right admin settings (Step 06 expands this)
- **5 visible columns:** Services / Duration / Price / Staff / Bookable online
- **Orange ⚠ warning icons** next to 9 of 12 BH Facials services — configuration warnings (missing required staff? missing required room? other? hover not shown). 3 services have NO warning: BH HydraFacial, Expecting Facial, ...wait, looking again — BH HydraFacial has NO warning; Expecting Facial has NO warning; all others have ⚠.
- **`BH HydraFacial` row UNIQUELY shows price as `$0.00 - $300.00` with `[4]` badge** — implies 4 distinct pricing options exist for this single service (Signature/Plus/Deluxe/Platinum tiers). All other services have a single flat price.
- **`Bookable online` per-row toggle** (green ON pill for all visible rows) — the canonical per-service `online_bookable` flag.
- **`Staff` column** values: "3 staff", "1 staff", "4 staff (or 3)" — link/badge to staff-eligibility-per-service config.
- **URL query parameter `accordions=6%2C20%2C5%2C...`** persists which category accordions are expanded — UI-state-in-URL pattern.

### ARCHITECTURAL OBSERVATIONS

**Knox marker 5 ("service catalog mesh") FULLY surfaced.** The list view shows the mesh dimensions:
- **Per-service:** Name, Duration (one value), Price (one or range with N tiers), Staff-eligibility-count, online_bookable, ⋮ actions
- **Per-category:** Add (new service), ⋮ actions (Step 07 enumerates)
- **Per-tab (catalog level):** Set Up Add-Ons, Settings (Step 06)

**The 5-column projection hides ~10+ more configurable attributes per service** (Step 09 hover surfaces 4 more: Capacity / Color / Deducted / Sort order; Step 10 Edit view surfaces many more: Description, Online Scheduling Yes/No, Advanced Options including "Convert to add-on", Appointment Category hierarchy). Service substrate is likely 30+ columns wide.

**`$0.00 - $300.00 [4]` for HydraFacial = pricing-tier substrate.** Single Service can have multiple Pricing Options (Signature / Deluxe / Platinum / etc.). The Service is the schedulable unit; the Pricing Options are the billable variants. This is a clean operational separation supporting Q3 4-entity split:
- **Schedulable Service:** "HydraFacial" (one schedule line, one room, one staff)
- **Billable Items:** "HydraFacial Signature $0", "HydraFacial Deluxe $150", "HydraFacial Platinum $250", "HydraFacial Plus $300" — 4 distinct billable_item rows under one service_id

For OMNI: Service ↔ Pricing Option is a 1-to-N relationship. Layer 2 Section A entity model must reflect this.

**Orange ⚠ warning icons** = persistent configuration warnings surfaced at catalog list view. Implies the substrate has a per-service validation/config-completeness check that flags incomplete services. OMNI: every Service should have a `config_completeness` projection that surfaces warnings (e.g., "no Pricing Option set", "no Staff assigned", "Online booking enabled but no Staff eligible").

---

## Step 06

**File:** `screenshots/Screen Shot 2026-05-14 at 12.23.11 AM.png`
**URL:** Same as Step 05
**Feature area:** `services_products_appointments_admin`
**Inferred screen title:** Services & Products → Appointments admin with Settings dropdown EXPANDED (3 sub-pages: Appointment Options / Scheduling Increments / Staff Schedules)

### TEXT CONTENT (VERBATIM)

```
[Settings ▾ dropdown expanded:]
  Appointment Options
  Scheduling Increments
  Staff Schedules
```

### UI ELEMENTS / VISUAL MARKERS

- **3 top-level admin sub-pages** accessible from Appointments tab Settings dropdown:
  - **Appointment Options** — likely covers the same content as `Pasted text (4).txt → mindbody_settings_room_requirements_raw.md`-adjacent settings (132-service room requirement matrix lives here OR adjacent)
  - **Scheduling Increments** — booking time-slot granularity (15-min / 30-min / 60-min default + per-service override)
  - **Staff Schedules** — admin-level staff calendar overlay / availability rules

### ARCHITECTURAL OBSERVATIONS

**These 3 sub-pages encode 3 substrate primitives:**
1. **Per-service appointment options** (per-service config: deposit required, intake required, cancel policy, etc.)
2. **Scheduling increment / slot granularity** (system primitive: time-grid quantization)
3. **Staff schedule management** (substrate: staff_availability * day-of-week + override)

These cluster around DL-15 (scheduling substrate spine, 28 invariants). Layer 2 Section G must check if DL-15 already covers all three or if amendments needed.

---

## Step 07

**File:** `screenshots/Screen Shot 2026-05-14 at 12.23.40 AM.png`
**URL:** Same as Step 05
**Feature area:** `services_products_appointments_admin`
**Inferred screen title:** Services & Products → Appointments admin with Category ⋮ menu EXPANDED on `1. Facials` (6 actions)

### TEXT CONTENT (VERBATIM)

```
[Category-level ⋮ menu expanded on 1. Facials:]

✓ Allow online scheduling
  Rename service category
  Show inactive appointment types
  Manage pricing relationships
  Payroll integration
  Deactivate service category
```

### UI ELEMENTS / VISUAL MARKERS

- **Per-category 6 actions:**
  - `Allow online scheduling` ✓ (checkbox, currently ON) — category-level online-bookable flag overrides/composes with per-service
  - `Rename service category` — name mutability
  - `Show inactive appointment types` — toggle archived/deactivated services into view
  - `Manage pricing relationships` — pricing-options-to-services join management (HydraFacial's 4 tiers configured here)
  - `Payroll integration` — link this category to payroll/commission settings
  - `Deactivate service category` — soft-delete (preserves data, hides from active flow)

### ARCHITECTURAL OBSERVATIONS

**Categories have their own admin actions, not just services.** Substrate:
- `service_category { id, brand_id, name, allow_online_scheduling, is_active, payroll_config_id, sort_order }`
- Category-level `allow_online_scheduling` flag composes with per-service `online_bookable` (both must be ON for the service to surface online).

**Manage pricing relationships** is the canonical entry to the Pricing Options substrate. Pricing Options must be defined at the brand level, then ASSIGNED to one or more Services within Categories (1-to-N relationship visible in Step 05 HydraFacial $0-$300 with [4] tiers).

For OMNI Q3 4-entity split evidence — Pricing Option (Billable Item) is a sibling table to Service (Schedulable Service), joined via a `service_pricing_option_assignment` table.

**`Show inactive appointment types`** toggle — soft-delete pattern across Mindbody. Inactive ≠ removed. Aligned with Batch 11 Step 04 "Inactive" pricing options (but vocabulary trap noted there still applies).

**`Payroll integration`** as a per-category action — implies commission rates / payroll calculation are category-scoped (not per-service). All Facials might pay a 30% commission while all Injectables pay a 25% commission. OMNI: commission/payroll rules are category-scoped substrate.

---

## Step 08

**File:** `screenshots/Screen Shot 2026-05-14 at 12.23.58 AM.png`
**URL:** Same as Step 05
**Feature area:** `services_products_appointments_admin`
**Inferred screen title:** Services & Products → Appointments admin with Service-row ⋮ menu EXPANDED on `BH HydraFacial` (2 actions)

### TEXT CONTENT (VERBATIM)

```
[Service-row ⋮ menu expanded on BH HydraFacial row:]

Deactivate
Duplicate
```

### UI ELEMENTS / VISUAL MARKERS

- **Per-service 2 actions:** Deactivate / Duplicate
- All other service operations (Edit, Manage Pricing, etc.) happen via clicking the service name (links to Edit Appointment Type page, Step 10).

### ARCHITECTURAL OBSERVATIONS

**Per-service action menu is intentionally minimal.** Deactivate = soft-delete; Duplicate = clone-for-new-variant pattern. Mindbody pushes substantial config to the dedicated Edit page (Step 10) rather than menu-cluttering the list view.

**Duplicate as first-class action** — implies new services are frequently created from existing-as-template. OMNI substrate: support `service.duplicated_from_id` lineage tracking for audit and for upstream config-completeness inference.

---

## Step 09

**File:** `screenshots/Screen Shot 2026-05-14 at 12.24.14 AM.png`
**URL:** Same as Step 05
**Feature area:** `services_products_appointments_admin`
**Inferred screen title:** Services & Products → Appointments admin with HOVER POPOVER on BH HydraFacial row (extra attribute columns: Capacity / Color / Deducted / Sort order)

### TEXT CONTENT (VERBATIM)

```
[Hover popover anchored to BH HydraFacial row name:]

BH HydraFacial
Capacity         1
Color            --
Deducted         0
Sort order       1
```

### UI ELEMENTS / VISUAL MARKERS

- **4 attributes surfaced via hover (NOT shown in default 5-column projection):**
  - `Capacity = 1` — max concurrent bookings for this service (1 = exclusive booking)
  - `Color = --` — no color assigned (used for calendar visual distinction; Batch 5 row 60 color-coded appointment cards reference)
  - `Deducted = 0` — decrement-on-render flag? Likely inventory-related (HydraFacial is a service, not a product, so it doesn't decrement inventory)
  - `Sort order = 1` — display ordering within category

### ARCHITECTURAL OBSERVATIONS

**Service substrate has at least 9 attributes visible across 5-column list + 4-attribute hover popover:**
1. Name
2. Duration (minutes)
3. Price (or price-range with tier count badge)
4. Staff-eligibility-count
5. Bookable online (boolean toggle)
6. Capacity (int)
7. Color (string / hex)
8. Deducted (int — semantic unclear; may be inventory-decrement-per-booking)
9. Sort order (int)

Plus Step 10 Edit page surfaces: Appointment category, Description, Online Scheduling Yes/No, Advanced Options (Convert to add-on Yes/No), and likely more (Staff eligibility list, Pricing Options assignment, Room Requirements join, Add-on associations, Required deposit, Intake form, Cancel policy, etc.).

**Service substrate is likely 30+ columns wide.** Q3 4-entity split must specifically reason about which of these 30 columns belong to:
- Schedulable Service (Capacity, Duration, online_bookable, Sort order, Color)
- Clinical Service (Description, Intake form, Provider eligibility)
- Billable Item (Pricing Options, deposit, Tax)
- Resource/Inventory (Room requirement, Deducted, Add-on inventory hooks)

**Capacity attribute specifically maps to user feedback gap #1.** "Capacity = 1" is the service's per-instance cap; "3 staff" is the staff-eligibility count. **These are 2 independent axes**. User's "room vs provider vs resource independent but must align" maps to:
- Service Capacity (1 per booking)
- Service Staff Eligibility (3 eligible)
- Room Requirement (HydraFacial Room required, see Pasted text (4).txt 132-service room matrix)
- Resource Requirement (HydraFacial Machine required, separate from room)
- **The 4 axes compose multiplicatively** — to book a HydraFacial, you need:
  1. 1 client (Capacity)
  2. 1 of 3 eligible staff
  3. 1 HydraFacial-compatible Room
  4. 1 HydraFacial Machine

If ANY of the 4 is unavailable, booking is impossible. OMNI substrate must enforce all 4 axes at booking time (DL-15 Invariant lookup territory).

---

## Step 10

**File:** `screenshots/Screen Shot 2026-05-14 at 12.24.30 AM.png`
**URL:** `clients.mindbodyonline.com/app/services-products/appointment-types/edit/88`
**Feature area:** `services_products_appointments_admin_edit`
**Inferred screen title:** Edit appointment type — BH HydraFacial (ID 88) — Details + Online Scheduling + Description rich-text + Advanced options

### TEXT CONTENT (VERBATIM)

```
[Breadcrumb:] Appointments / 1. Facials
[H1:] Edit appointment type

Details

Name *
[BH HydraFacial]

Duration in minutes *
[60]

Appointment category *
[Med spa > General                                                      ▼]
Selecting a category will help customers find you online and in the Mindbody app

────────

Online Scheduling

Would you like to allow your clients to book this appointment online?
● Yes    ○ No

[Description rich-text editor:]
Get your glow on with HydraFacial, the world's leading hydra-dermabrasion
treatment. HydraFacial uses a unique, patented Vortex-Fusion system to exfoliate,
extract, and hydrate the skin. Our exclusive 3-Step BH protocol for HydraFacial
delivers an instant and gratifying glow that will leave you feeling radiant for weeks at
a time. Choose between our BH Signature, Deluxe and Platinum options, depending
[truncated]

[Toolbar icons: Aa / B / I / U / link / align / list / list-numbered / code]

▾ Advanced options

Do you want to convert this appointment to an add-on?
If you need to mark this appointment as an add-on, you can change that here.
[radio: ○ Yes  ○ No (visible)]
```

### UI ELEMENTS / VISUAL MARKERS

- **Numeric service ID = 88** in URL (`/appointment-types/edit/88`) — services have stable numeric IDs (substrate primary key)
- **Breadcrumb:** Appointments → 1. Facials → (current = BH HydraFacial implied)
- **Appointment category dropdown** = `Med spa > General` — confirms TWO-LEVEL category hierarchy beyond what list-view (Step 05) showed. The "1. Facials" in Step 05 is one of N sub-categories under a top-level "Med spa" type-of-business; "General" is the leaf parent for HydraFacial.
- **Help text on Appointment category:** "Selecting a category will help customers find you online and in the Mindbody app" — category affects discoverability in Mindbody's consumer marketplace, not just internal organization.
- **Online Scheduling binary Yes/No radio** — same as Step 05 toggle, just rendered differently
- **Rich-text description editor** with formatting toolbar (Aa font size / B / I / U / link / alignment / bullet / numbered / code/html)
- **Advanced options** collapsible accordion (currently expanded showing "Convert to add-on" Yes/No radio) — implies more fields below cutoff (per Pasted text (4).txt 132-service room matrix file, advanced fields include Room Requirements, Pricing Options assignment, Add-on associations, Required Fields, etc.)

### ARCHITECTURAL OBSERVATIONS

**Edit page is THE definitive single-service config surface.** Multi-page form patterns:
- **Details section** — Name / Duration / Appointment category
- **Online Scheduling section** — online_bookable + description
- **Advanced options** — Convert to add-on Yes/No + likely 15-30+ additional fields below cutoff

**`Convert to add-on` Yes/No radio** = Schedulable Service ↔ Add-on are convertible at the entity level (NOT separate tables). Implies Mindbody uses a single `service` table with a `is_addon` boolean flag — Add-ons are services with `is_addon=true`. This is concrete Q3 4-entity split evidence: **Mindbody collapses Schedulable Service + Add-on into a single table with a flag**.

For OMNI: the question is whether add-ons should be:
- (A) Same table, flag-distinguished (Mindbody pattern)
- (B) Separate table with own ID space and relationship-table to parent services

Layer 2 Section G must reason about pros/cons. (A) is simpler at the database level; (B) is cleaner semantically. Knox marker 5 chat content hints at preferring (B) (separate "add-ons have own logic: add time or not, add price or not, require resource or not...") — implies add-ons may benefit from their own table due to different metadata schema.

**Appointment category hierarchy `Med spa > General`** — confirms Mindbody supports MULTI-LEVEL category nesting. Step 05 numbered categories (1. Facials, 10. Red Light Therapy) are LEAF or NEAR-LEAF categories under industry-typed parents (Med spa, Wellness, etc.). For OMNI: category substrate must support arbitrary tree depth.

**Description rich-text** — patient-facing marketing copy stored per-service. Search-indexable, may be HTML-escaped on output. OMNI substrate: `service_description { service_id, format [html/markdown/text], content, last_modified_by }`.

**Numeric IDs (88) instead of UUIDs** — Mindbody uses incremental integer IDs. OMNI doctrine likely prefers UUIDs (per FOUNDATIONAL_ARCHITECTURE — substrate primary keys are UUIDs).

---

## Cumulative Batch 12 findings (additive to handoff findings 1-15 + Batch 11 findings 16-26)

### 27. POS landing page is a triage surface with 3 fan-out paths
Step 01 confirms POS top-level surfaces: search-client / add-new-client / Walk-In Sale, plus Open Tickets (paused sales) + Gift Card lookup. Substrate implies 3 cart states: `attached_cart`, `walkin_cart`, `paused_ticket`.

### 28. Consent substrate has 4 conceptual buckets (1 non-toggleable + 3 toggleable)
Step 02 Add-Client modal Subscriptions section: Critical/Transactional (NOT toggleable, always sent) + Account info / Schedule reminders / News and Promos (each toggleable per-channel). OMNI consent substrate must distinguish critical from togglable. Per-channel defaults per Q5 capability flag.

### 29. Mindbody supports 1-to-N typed addresses but fixed-4 phone columns per client
Step 03: Address-type dropdown implies multi-typed address rows; phone fields are 4 fixed denormalized columns (mobile/work/work-ext/home). OMNI should generalize phone to 1-to-N typed phone rows (international, additional types, channel-specific consent).

### 30. Client-domain admin has 18 entries in More menu
Step 04 enumerates: Modify Tagged Clients / Locate Duplicate Clients / Merge Duplicate Clients / Data Privacy / Client Forms / **ICD Codes** / Required Fields / Relationship Types / Client Form Custom Fields / Client Alerts / Client Indexes / Client Index Values / Client Types / Referral Types / Referral Subtypes / Contact Log Types / Client Statuses / Gender. Each is a configurable substrate primitive.

### 31. ICD Codes are a Mindbody-managed admin entry — clinical-coding substrate exists even in medspa product
Step 04 client-admin More menu has `ICD Codes` entry. Confirms Mindbody surfaces clinical coding in the CRM admin surface. OMNI clinical-coding-substrate-DL may need to be its own DL (flag for Layer 2 Section G).

### 32. 4-tier configurable client-metadata substrate (Required Fields / Client Indexes / Client Index Values / Client Form Custom Fields)
Step 04 surfaces a layered metadata model. OMNI substrate primitive: `client_metadata_axis` + `client_metadata_axis_value` + `client_metadata_assignment` (likely with separate form-template-custom-fields).

### 33. Service catalog mesh dimensions: 30+ attributes per service across category / service / pricing-option layers
Steps 05-10 reveal at least 9 service attributes (Name/Duration/Price-or-range/Staff-eligibility-count/online_bookable/Capacity/Color/Deducted/Sort order) plus Step 10 Edit page additions (Appointment category hierarchy, Description, Convert-to-add-on, Advanced options). Likely 30+ total. Each maps to Q3 4-entity split decision.

### 34. Service ↔ Pricing Options is 1-to-N (HydraFacial $0-$300 [4 tiers] canonical evidence)
Step 05 HydraFacial row shows `$0.00 - $300.00 [4]` = 4 distinct Pricing Options for 1 Service. Service is the schedulable unit; Pricing Options are billable variants. Concrete Q3 4-entity split: Schedulable Service ↔ Billable Item is 1-to-N.

### 35. Category-level admin actions (6 actions per category)
Step 07: per-category menu shows Allow online scheduling / Rename / Show inactive / Manage pricing relationships / Payroll integration / Deactivate. Categories have their own substrate (NOT just service.category_name string field). `service_category { id, name, allow_online_scheduling, is_active, payroll_config_id, sort_order }`.

### 36. Schedulable Service ↔ Add-on collapsed into single table with is_addon flag (Mindbody choice)
Step 10 "Convert this appointment to an add-on?" Yes/No radio implies Mindbody uses 1 table with flag. Q3 alternative for OMNI: separate add-on table (semantically cleaner). Layer 2 Section G must decide.

### 37. Service substrate uses numeric integer IDs (88); OMNI doctrine prefers UUIDs
Step 10 URL `/appointment-types/edit/88` — Mindbody chose incremental integers. OMNI must use UUIDs per FOUNDATIONAL_ARCHITECTURE.

### 38. Per-service config-completeness validation surfaced via ⚠ warning icons in catalog list view
Step 05: 9 of 12 BH Facials services have ⚠ icons. Implies substrate-level `service.validation_status` projection. OMNI substrate must surface per-resource config-completeness via similar visual indicator.

### 39. Per-clinic auto-fill defaults (City "Bloomfield Hills" / State "Michigan" / Country "United States") on new-client add
Step 03 confirms clinic-default address auto-populates new-client form. Per-clinic config: `brand_default_client_address` row. OMNI: per-org default-context-values primitive (configurable defaults for any form field).

### 40. Service Capacity (1) ≠ Staff Eligibility (3 staff) ≠ Room Requirement ≠ Resource Requirement = 4 independent composing axes for booking
Step 09 hover popover surfaces Capacity attribute as a 1st axis distinct from Staff (3 staff). Combined with Room Requirements (Pasted text 4) + Resource (HydraFacial Machine), bookings require ALL 4 axes to align. User feedback gap #1 concrete substrate evidence.

---

## End of Batch 12

Next batch: rows 122-N starting at `Screen Shot 2026-05-14 at 12.24.49 AM.png`. Likely continues service-catalog editor depth (Edit appointment type Advanced options, pricing options config, staff eligibility config) per chronological proximity.
