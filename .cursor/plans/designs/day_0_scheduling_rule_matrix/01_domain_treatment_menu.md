# Domain 1 — Treatment Menu / Visit-Type Rules (Day 0)

**Date:** 2026-05-17
**Round:** 1 of 7
**Status:** AUTHORED — pending user + Knox review before Round 2 starts
**Index:** [00_index.md](00_index.md)
**Phase scope this file:** Day 0 fully detailed; M1-2 / M3-6 / FUTURE listed name-only in [§Deferred Rule Candidates](#deferred-rule-candidates).

---

## §0 Domain scope + the 10 doctrine questions

Domain 1 covers the rules that govern how a tenant builds its treatment menu, how patients and staff discover/select bookable services, and how the selection translates into substrate writes. Domain 1 is the foundation for every downstream domain — if visit-type doctrine doesn't hold here, Domains 2-7 inherit gaps.

**The 10 doctrine questions Domain 1 must unambiguously answer** (per preferences locked + 2-day arc accumulation):

1. What is a "visit type"?
2. What is a `service_category`?
3. What is a `service`?
4. What is a `booking_preset`?
5. How does simple booking vs guided booking work?
6. How does LHR Brazilian / Full Body work?
7. How does peptide / GLP-1 / HRT menu structure work?
8. How does the patient-facing label stay clean?
9. How do planned_details stay optional?
10. What does the schedule display?

Each rule below resolves one or more of these questions; the resolution map is in [§Resolution map](#resolution-map).

---

## §1 Layer 1 substrate context (read first)

Domain 1 rules sit on top of these substrate primitives. Each rule cites the substrate it owns or extends. **Read [DL-15 amendments 29-36](../../system_map_three_layers_60706286.plan.md), [DL-17 inv 1-5](../../doctrine/DL-17_commerce_DRAFT_2026-05-17.md), [DL-19 inv 18-19](../../doctrine/DL-19_settings_infrastructure_DRAFT_2026-05-17.md), and [DL-20 inv 33-37](../../doctrine/DL-20_care_coordination_DRAFT_2026-05-17.md) before reading individual rules.**

```text
                                  ┌────────────────────────────┐
                                  │     TENANT CATALOG         │
                                  │   (tenant-curated; admin)   │
                                  └────────────────────────────┘
                                              │
        ┌─────────────────────────────────────┼─────────────────────────────────────┐
        │                                     │                                     │
        ▼                                     ▼                                     ▼
  service_category               service                              pricing_option
  (DL-15 taxonomy)               (DL-15 operational kind)            (DL-17 inv 1-5 commerce variant)
  - hierarchical                 - service_type ENUM (5)              - pricing_option_type ENUM (4)
  - sort_order non-contig        - quantity_strategy ENUM (5)         - price + commission + restrictions
  - NO price                     - planned_detail_schema JSONB        - entitlement activation strategy
  - NO specialty                 - self_bookable_progressive_         - service_pricing_option_assignment
  - parent_category_id             disclosure_mode ENUM (3)             (M:N join)
                                 - NO price
                                              │
                                              ▼
                                  booking_preset
                                  (DL-19 inv 19 tenant affordance)
                                  - target_service_id FK NULL OR
                                    target_service_category_id FK NULL
                                  - parent_preset_id (hierarchical)
                                  - bundled_member_preset_ids[] (combo)
                                  - default_planned_details JSONB
                                  - visible_in_self_booking BOOLEAN
                                              │
                                              ▼
                                              │
                ┌─────────────────────────────┼─────────────────────────────┐
                │                             │                             │
                ▼                             ▼                             ▼
    OPERATIONAL SUBSTRATE              appointment              appointment_item
    (booking flow produces this)       (DL-20 inv 33)           (DL-20 inv 34)
                                       - status ENUM            - planned_service_id NULL OR
                                       - confirmation_state       planned_service_category_id NULL
                                       - venue_id                 (exactly one)
                                       - booking_channel        - planned_pricing_option_id NULL
                                       - attribution_source     - planned_details JSONB
                                       - trigger_source         - planned_quantity NUMERIC NULL
                                                                - planned_treatment_areas[]
                                                                - parent_item_id (add-ons)
                                                                - linked_booking_preset_id
```

Visit type does NOT exist as a substrate primitive. It is a tenant-named projection of `booking_preset.display_label` (or `service.name` for direct service booking, or `service_category.name` for category-level booking). The phrase "visit type" never appears as a column or enum value in OMNI substrate.

---

## §2 Rule sections

| Section | Rules | Theme |
|---|---|---|
| A | TM-01 to TM-06 | Catalog primitive separation (foundation) |
| B | TM-07 to TM-11 | Booking_preset substrate + 3 shape patterns |
| C | TM-12 to TM-16 | Broad-default booking semantics |
| D | TM-17 to TM-20 | Structured detail capture |
| E | TM-21 to TM-23 | Multi-line visit + add-ons |
| F | TM-24 to TM-27 | Catalog operations + lifecycle |
| G | TM-28 to TM-30 | Anti-leakage discipline (cross-cutting) |

---

## Section A — Catalog primitive separation

### Rule TM-01: service_category is taxonomy-only (no price, no operational semantics)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 13 Step 07 shows `Service category = "1. Facials"` as a top-level grouping for pricing options, with separate `Revenue category = "Esthetician Services, Revenue"` for accounting. Batch 20 Step 05 shows Bloom Health's 14 service categories (12 numbered + G/X prefixed) including non-contiguous numbering (1/2/3/4/5/6/7/8/skip 9/10/11/12) and a NEW category "12. Medical Visits" added between desktop and mobile screenshot sessions. Mindbody supports 2 levels (categories + appointment types alphabetical).
2. **Cross-app evidence:**
   - **Amazon product taxonomy** — Browse hierarchy is purely organizational (Electronics → Computers → Laptops → Gaming Laptops); price never lives at the category level.
   - **Restaurant menu (OpenTable / Toast)** — Section headers ("Appetizers" / "Mains" / "Desserts") have no price; price lives on the menu item.
   - **Epic / Cerner** — "Department" / "Service area" is taxonomy; "Appointment type" carries the operational kind; pricing is a separate billing layer.
3. **Underlying tenant need:** Tenants need a navigable, hierarchical organization of their offerings for both patient discovery and staff catalog management. The hierarchy depth varies per specialty (medspa: shallow; derm: medium; hospital: deep). The tenant must be able to reorganize without affecting price, scheduling logic, or historical bookings.
4. **OMNI generic primitive / rule:** `service_category` substrate (DL-15 implicit; backed by DL-19 admin UI). Carries `id`, `tenant_id`, `parent_category_id` FK NULL (for hierarchy), `display_name`, `sort_order` NUMERIC (non-contiguous integer), `is_active` BOOLEAN, `description` TEXT NULL, `display_color` STRING NULL. NO `price`, NO `commission_rate`, NO `default_duration`, NO `service_type` columns. Categories are pure taxonomy.
5. **Divergence / improvement:** Mindbody allows only 2 levels (category + appointment-type alphabetical sort). OMNI supports arbitrary depth via `parent_category_id` chain (matches Amazon + Epic hierarchy depth). Mindbody puts revenue category on pricing option separately; OMNI keeps that on `pricing_option` per DL-17 inv 20 (correctly separated). Mindbody's non-contiguous numbering bug (missing "9. Sugaring" while "10. Red Light Therapy" exists) is preserved by accepting `sort_order` as non-contiguous tenant-controlled integer.
6. **Anti-copy warning:** Do NOT create substrate enum values like `category_aesthetic`, `category_medspa`, `category_derm_visits`, `category_injectables`. Do NOT hardcode the depth limit (Mindbody's 2-level cap is a Mindbody constraint, not a tenant need). Do NOT bake category names into substrate (Bloom Health's "Medical Visits" is tenant configuration, not OMNI enum).
7. **Substrate pressure-test verdict:** **OK** — DL-15 implicitly admits `service_category` per system map §1F service catalog scaffold; DL-19 inv 18 service_policy keys on `(service_id, modality)` confirming category is upstream of service. No new substrate needed. `service_category.parent_category_id` for hierarchy is a standard column; existing scaffold supports.

#### Section B — Rule definition

8. **Trigger:** Tenant admin creates / edits / reorganizes service catalog; patient or staff browses bookable offerings.
9. **Required inputs:** `tenant_id`, `display_name` STRING. Optional: `parent_category_id` FK (for hierarchy), `sort_order` NUMERIC (defaults to MAX(sort_order)+10 within sibling group).
10. **Decision logic:**
    - On admin write: validate `display_name` non-empty + unique within `(tenant_id, parent_category_id)` sibling group; reject duplicate.
    - `parent_category_id` may be NULL (top-level category) or FK to existing category in same tenant; reject cross-tenant FK; reject self-FK or cycle.
    - `sort_order` is tenant-controlled; system never auto-renumbers (preserves Mindbody-style non-contiguous integers if tenant prefers).
    - On read: hierarchy queried recursively; depth uncapped at substrate level (UI may impose a soft cap for usability — that's a UI projection rule, not substrate).
11. **Output / state change:** Insert `service_category` row; emit `service_category.created` event. On edit: insert new row version per DL-12 versioning; emit `service_category.updated` event with before/after diff.
12. **Owning substrate:** `service_category` (DL-15 implicit; per system_map §1F service catalog scaffold). FK targets in `service.service_category_id` (per DL-15 inv 30 service substrate) + `pricing_option.service_category_id` (per DL-17 inv 1 + Batch 13 Step 07 evidence) + `booking_preset.target_service_category_id` (per DL-19 inv 19).
13. **UI surface:**
    - Admin: Settings → Services & Scheduling → Service Categories admin (per DL-19 inv 3 12-section taxonomy). Tree view with drag-reorder.
    - Patient: discovery hierarchy on patient portal booking flow (top-level categories on home; drill-down via `parent_category_id` chain).
    - Staff: catalog browse modal on appointment creation; same hierarchy as patient view but with disabled/hidden categories visible.
14. **Failure mode:** If `parent_category_id` references a deleted/inactive category, the child category cascade-hides from patient view (`is_active = TRUE` AND parent chain all active); staff view shows with "[parent disabled]" badge. NEVER renders "Category Unknown" patient-facing.
15. **Audit / event:** `service_category.created` / `service_category.updated` / `service_category.activated` / `service_category.deactivated` / `service_category.reparented` per DL-16 inv 5 + amendment 42 registry. Actor 4-tuple per DL-16 amendment 43 (staff admin who made change).
16. **Evidence citations:**
    - DL-15 + system_map §1F service catalog scaffold
    - DL-17 inv 1 service ↔ pricing_option assignment (separates category from price)
    - DL-17 inv 20 revenue_category separate from service_category (binding accounting axis)
    - Mindbody Batch 13 Step 07 — `Service category = "1. Facials"` field
    - Mindbody Batch 20 Step 05 — Bloom Health's 14 categories with non-contiguous numbering + new "12. Medical Visits" added between sessions
    - Preferences locked §1 "Tenant catalog flexibility" + post-mortem Pattern 7
17. **Test case:** Tenant configures Bloom Health catalog hierarchy: top-level "Facials" → sub-categories "HydraFacial" / "Biologique Recherche" / "CryoGloss" / "Aquagold". Patient browsing books at "HydraFacial" sub-category level → broad-default booking. Tenant later adds a 4th-level sub-category "HydraFacial Add-Ons" under "HydraFacial" without breaking existing bookings. Sort order non-contiguous (10, 20, 30) allows insertion of new category at sort_order=25 between existing categories without renumbering siblings.

---

### Rule TM-02: service is operational kind only (no price, no specialty leakage)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 13 Step 01 shows Service edit page (URL `services-products/appointment-types/edit/88`) with 6 required fields: Name / Duration / Appointment category / Capacity / # deducted / Sort order; plus optional Color / Description / Convert-to-add-on / online_bookable. No price field. Step 10 staff assignment surfaces 3 per-staff per-service columns (Booking Time / Prep Time / Finish Time) — service stores defaults; staff-service-assignment carries overrides. Batch 20 Step 05 shows services categorized into 14 categories at Bloom Health (Facials / Add-Ons / Chemical Peels / Skin Treatments / Injectables / Bodysculpting / LHR / Sugaring / Red Light / Provider Consultations / Medical Visits / Memberships / Internal Scheduling).
2. **Cross-app evidence:**
   - **OpenTable / Toast** — A "menu item" carries name + description + prep time + allergens + size variants; price lives on per-variant rows (small / medium / large) not on the parent item.
   - **Epic appointment_type** — Operational kind ("Office Visit" / "Wellness Visit" / "Procedure Visit") carries duration + room requirements + provider type; billing is a separate layer (CPT codes attach to encounter, not to appointment type).
   - **Calendly / Cal.com event_type** — Carries duration + buffer time + question template + provider; "tier pricing" if needed lives on a separate paywall layer.
3. **Underlying tenant need:** The tenant needs a unit of "the thing we DO" that holds operational facts (duration, prep, capacity, room/resource requirements, planned-detail schema, who can perform it) without conflating those with pricing or with specialty taxonomy. The same operational kind may have multiple commercial variants (Hydrafacial Signature / Deluxe / Platinum at different prices) without being 3 different services.
4. **OMNI generic primitive / rule:** `service` substrate (DL-15 inv 30 service substrate). Carries `id`, `tenant_id`, `service_category_id` FK, `name` STRING, `service_type` ENUM per DL-15 amendment 32 (`appointment` / `arrival` / `class` / `course` / `membership`), `quantity_strategy` ENUM per DL-15 amendment 5 (`fixed_quantity` / `per_unit_quantity` / `package_count` / `unlimited_period` / `subscription_recurring`), `default_duration_minutes`, `default_capacity`, `num_deducted` (inventory hook; 0 for non-product services), `sort_order`, `is_active`, `online_bookable` BOOLEAN, `is_addon` BOOLEAN, `self_bookable_progressive_disclosure_mode` ENUM (`none` / `optional` / `required` — per DL-19 preamble), `planned_detail_schema` JSONB (validation rules for `appointment_item.planned_details`), `description`, `display_color`. NO `price` (price lives on pricing_option per DL-17 inv 1). NO `specialty_kind` enum (specialty is implicit via tenant's service_category hierarchy).
5. **Divergence / improvement:** Mindbody's 7-tier Botox pricing options workaround (Botox 20u / 30u / 40u / 50u / 60u / 80u / 100u as separate "products" because price scales per unit) is eliminated by `quantity_strategy = per_unit_quantity` + `planned_quantity` capture (DL-15 amendment 5 inv 33). Mindbody's specialty leakage (Bloom Health's "Medical Visits" category) is preserved as tenant catalog (not OMNI enum). OMNI separates `service` (operational kind) from `pricing_option` (commercial variant) via M:N join — Mindbody collapses both into single "appointment type" + "pricing option" rows with separate URLs but shared substrate.
6. **Anti-copy warning:** Do NOT create substrate enum values like `service_kind_aesthetic_office_visit`, `service_kind_botox_treatment`, `service_kind_filler_visit`, `service_kind_glp1_consult`, `service_kind_hrt_followup`. The user's verbatim direction: "WHY THE FUCK WOULD THAT EXIST IN OMNI. AESTHETIC OFFICE VISIT MEANS FUCKING NOTHING. MEDSPAS, DERM, PLASTICS, GI, ETC. IT IS A GODDAMN FUCKING VISIT WITH A PROVIDER ON A CALENDAR." Per preferences locked §1 "No specialty leakage in substrate." Do NOT bake Botox / Dysport / Daxxify / Hydrafacial / SkinPen / CoolSculpting as substrate values — they are tenant-configured `service.name` STRINGs (or `planned_details.preferred_product` if tenant models one Neuromodulator service with multi-product capture).
7. **Substrate pressure-test verdict:** **OK** — DL-15 amendment 32 (service_type 5-enum) + amendment 5/33 (quantity_strategy 5-enum) + DL-15 inv 30 (4-axis booking composer reading service requirements) cover the operational substrate. DL-19 inv 18 service_policy keys (service_id, modality) for required-axis flags. DL-19 inv 19 booking_preset references service. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Tenant admin creates / edits service in catalog; patient or staff selects bookable service.
9. **Required inputs:** `tenant_id`, `service_category_id` FK, `name` STRING, `service_type` ENUM (defaults to `appointment`), `quantity_strategy` ENUM (defaults to `fixed_quantity`), `default_duration_minutes` NUMERIC, `default_capacity` NUMERIC (defaults to 1).
10. **Decision logic:**
    - `name` must be unique within `(tenant_id, service_category_id)` — per Batch 20 Step 06 evidence where Mindbody allowed duplicate "BH Signature Facial (90 Mins)" at $200 and $165 (data corruption bug). OMNI rejects at substrate.
    - `service_type` enum constrains downstream behavior: `appointment` requires staff axis per DL-15 inv 30; `arrival` allows walk-in (no scheduled time); `class` admits multi-patient capacity; `course` is recurring; `membership` is autopay-coupled per DL-17 inv 11.
    - `quantity_strategy` constrains pricing behavior per DL-17 inv 5: `fixed_quantity` → one pricing_option, one redemption; `per_unit_quantity` → staff enters quantity at checkout; etc.
    - `self_bookable_progressive_disclosure_mode` defaults to `optional` (patient can drill if they want; never forced).
    - `planned_detail_schema` defaults to `{}` (no structured detail required). Tenant adds schema to require specific fields (treatment_areas[], preferred_product, planned_units).
11. **Output / state change:** Insert `service` row; emit `service.created` event per DL-16 amendment 42 registry. On edit: insert new row version per DL-12 versioning; emit `service.updated` event with diff.
12. **Owning substrate:** `service` (DL-15 amendment 30 + 32 + 33). FK targets in `appointment_item.planned_service_id` (DL-20 inv 34), `service_pricing_option_assignment.service_id` (DL-17 inv 1), `staff_service_assignment.service_id` (DL-15 amendment 31), `room_service_compatibility.service_id` + `resource_service_compatibility.service_id` (DL-15 amendment 30 4-axis composer), `booking_preset.target_service_id` (DL-19 inv 19), `service_policy.(service_id, modality)` (DL-19 inv 18).
13. **UI surface:**
    - Admin: Settings → Services & Scheduling → Services list + edit drawer (matching Mindbody Batch 13 drawer pattern). Pricing tab (M:N assignment) + Staff tab (per-staff prep/booking/finish overrides) + Advanced options (capacity, online_bookable, description, schema editor).
    - Patient: rendered as drill-down option within service_category hierarchy.
    - Staff: appears in appointment creation modal; filtered by staff capabilities + room compatibility per DL-15 inv 30.
14. **Failure mode:** If service is disabled (`is_active = FALSE`), patient view excludes it but staff view shows with "[disabled]" badge for historical reference; existing bookings remain visible. If `planned_detail_schema` references missing axis, validation rejects schema save with admin-facing error (NOT patient-facing).
15. **Audit / event:** `service.created` / `service.updated` / `service.activated` / `service.deactivated` / `service.schema_changed` per DL-16 amendment 42. Actor 4-tuple per DL-16 amendment 43.
16. **Evidence citations:**
    - DL-15 amendment 32 (service_type 5-enum: appointment / arrival / class / course / membership)
    - DL-15 amendment 5 / 33 (quantity_strategy 5-enum)
    - DL-15 inv 30 (4-axis booking composer)
    - DL-17 inv 1 (service ↔ pricing_option M:N assignment)
    - DL-19 inv 18 (service_policy keyed by service_id + modality)
    - Mindbody Batch 13 Step 01 (Service edit page; 6 required + ~25 optional fields; no price on service)
    - Mindbody Batch 13 Step 10 (per-staff per-service prep/booking/finish overrides)
    - Mindbody Batch 20 Step 06 (BH Signature Facial duplicate naming bug — OMNI rejects)
    - Preferences locked §1 "No specialty leakage" + user verbatim quote
    - Post-mortem Pattern 7 (UI labels as substrate vocabulary)
17. **Test case:** Tenant creates service "Neuromodulator Visit" in category "Injectables" with `service_type = appointment`, `quantity_strategy = per_unit_quantity`, `planned_detail_schema = {treatment_areas: {type: array, items: enum[glabella, forehead, crows_feet, masseter, ...]}, preferred_product: {type: enum, values: [Botox, Dysport, Daxxify, Jeuveau], required: false}}`, `default_duration_minutes = 30`, `self_bookable_progressive_disclosure_mode = optional`. Sarah books at category "Injectables" → broad-default; Patrick books "Neuromodulator Visit" → service-level booking with planned_details left blank (allowed because progressive disclosure mode is optional). Schedule shows clean parent label.

---

### Rule TM-03: pricing_option is the commerce variant (price + commission + commercial restrictions)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 13 Step 03 + 04 + 05 + 07-09 show pricing options as separate substrate from services. Batch 13 Step 05 confirms 4-type taxonomy via Create dropdown (Single Session / Multiple Sessions / Unlimited Sessions / Autopay/Contract). Step 07 shows Pricing Option advanced edit page at distinct URL (`adm_tlbx_series.asp?optProduct=101489`) with ~30 fields: name / number of sessions / service category / appointment types many-to-many / revenue category / expires after / price / online price / sales tax flags / activation date 3-strategy radio / priority / barcode / early bird / commission / member discounts / scheduling restrictions / auto-emails. Per-pricing-option commission rates (standard + promo). Per-pricing-option scheduling restrictions (5 fields). Per-pricing-option auto-emails (2 triggers). Batch 20 Step 06 shows 13 pricing options under "Facials" category (CryoGloss Facial / Aquagold Facial / BH HydraFacial Deluxe-Platinum-Signature / BH Signature Facial 60-75-90-90 mins / Biologique Recherche 60-90 mins / ClassPass $0 / Cancellation Policy $0).
2. **Cross-app evidence:**
   - **Airline fare class** — One flight (UA 256) carries multiple fare classes (Economy / Economy Plus / Business / First). Fare class = commerce variant with different price + benefits; flight = operational entity.
   - **Restaurant size variants (Starbucks / Chipotle)** — One menu item ("Latte") has Tall / Grande / Venti sizes at different prices; size variant = pricing option.
   - **Amazon product variants** — One product page ("iPhone 15 Pro") has storage variants (128GB / 256GB / 512GB / 1TB) at different prices.
   - **Cal.com paid event types** — Event template + Stripe price ID separately; commerce variant decoupled from event definition.
3. **Underlying tenant need:** A service may have multiple commercial variants — flat-rate, tiered, package (N sessions prepaid), unlimited-within-window, recurring autopay, member-discounted, comp/free promo, ClassPass-integration $0, deposit-only, late-cancel-fee $0 wrapper. Tenants must price one operational kind multiple ways without duplicating the service definition.
4. **OMNI generic primitive / rule:** `pricing_option` substrate (DL-17 inv 2). Carries `id`, `tenant_id`, `pricing_option_type` ENUM (`single_session` / `multiple_sessions` / `unlimited_period` / `autopay_contract` per DL-17 inv 2), `display_name`, `price` NUMERIC, `online_price` NUMERIC NULL (channel-specific override), `quantity_strategy` ENUM per DL-17 inv 5 (5 values; binds to `service.quantity_strategy`), `activation_strategy` ENUM per DL-17 inv 3 (3 values: `on_sale_date` / `on_first_visit_after_purchase` / `on_custom_date`), `expires_after_value` NUMERIC NULL + `expires_after_unit` ENUM (`days` / `months` / `years`), `redemption_priority` per DL-17 inv 4 (Low/Medium/High), `member_only` BOOLEAN, `online_bookable` BOOLEAN, `revenue_category_id` FK (DL-17 inv 20), per-type sub-fields, scheduling restrictions per DL-15 amendment 33, commission per DL-17 inv 25, auto-email triggers per DL-17 inv N. Linked M:N to service via `service_pricing_option_assignment` (DL-17 inv 1).
5. **Divergence / improvement:** Mindbody's per-quantity Botox workaround (7 pricing options for 7 quantity tiers of Botox) eliminated by `quantity_strategy = per_unit_quantity` per DL-17 inv 5 (one service + one pricing_option + planned_quantity at booking + actual quantity at checkout). Mindbody's $0 Cancellation Policy pricing option (Batch 13 Step 04 + Batch 20 Step 06) workaround is replaced by `cancellation_policy` 1st-class substrate per DL-17 inv 24 (cancellation/no-show fees emit `commerce_order_line.line_kind = cancellation_fee` directly).
6. **Anti-copy warning:** Do NOT model deposit as a $0 "Treatment Deposit" pricing option (Mindbody workaround). Deposit is a `commerce_order_line.line_kind = treatment_deposit` per DL-17 inv 6 + DL-17 deposit visibility clarification. Do NOT model cancellation fees as $0 pricing options. Do NOT bake vendor financing names (Cherry, GreenSky, CareCredit) into `pricing_option_type` enum — those are `payment_method.label` per DL-17 inv 18 tenant-defined STRING.
7. **Substrate pressure-test verdict:** **OK** — DL-17 inv 1-5 fully covers pricing_option substrate. DL-17 inv 22-23 covers entitlement-vs-pricing-option separation. DL-15 amendment 33 covers per-pricing-option scheduling restrictions. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Tenant admin creates/edits pricing option; admin assigns pricing option to one or more services via M:N join; patient/staff selects pricing option at booking or checkout.
9. **Required inputs:** `tenant_id`, `display_name` STRING, `pricing_option_type` ENUM, `price` NUMERIC ≥ 0, `revenue_category_id` FK.
10. **Decision logic:**
    - Price ≥ 0 (admits $0 for ClassPass / promo / comp; rejects negative).
    - `online_price` NULL → online uses `price`; populated → channel-specific.
    - `activation_strategy = on_custom_date` requires `custom_activation_date` populated.
    - `pricing_option_type = multiple_sessions` requires `redemption_count` ≥ 2.
    - `pricing_option_type = autopay_contract` requires `recurrence_rule` (RRULE per DL-17 inv 11).
    - `quantity_strategy = per_unit_quantity` requires `default_unit_price` + `min_quantity` + `max_quantity` + `quantity_unit`.
    - `member_only = TRUE` rejects sale to non-members; non-members get filtered-out projection.
    - M:N assignment to service: substrate insert into `service_pricing_option_assignment` with `priority` (Low/Medium/High) for entitlement redemption order per DL-17 inv 4.
11. **Output / state change:** Insert `pricing_option` row + 0-or-more `service_pricing_option_assignment` rows (atomic per DL-16 inv 6). Emit `pricing_option.created` event. On edit: new version per DL-12; emit `pricing_option.updated` event with diff.
12. **Owning substrate:** `pricing_option` (DL-17 inv 2) + `service_pricing_option_assignment` (DL-17 inv 1). FK targets in `commerce_order_line.pricing_option_id` (DL-17 inv 6) + `appointment_item.planned_pricing_option_id` (DL-20 inv 34) + `booking_preset.target_pricing_option_id` (DL-19 inv 19) + `entitlement.pricing_option_id` (DL-17 inv 22).
13. **UI surface:**
    - Admin: Settings → Commerce & Pricing → Pricing Options + drawer per-service. Mindbody-style drawer (Batch 13 Step 03-04 pattern) for quick M:N assign; dedicated Advanced Edit page for deep config (Batch 13 Step 07-09 pattern).
    - Patient: pricing options surface as commercial variants ("Signature $200 / Deluxe $250 / Platinum $300") at booking or checkout flow.
    - Staff: surface in cart at checkout; entitlement redemption priority resolves automatically per DL-17 inv 4.
14. **Failure mode:** If pricing_option deactivated mid-cart, cart shows alert + offers active alternatives; reject completion until resolved. If `member_only` and patient not member, hide from patient view + show staff-facing warning at checkout.
15. **Audit / event:** `pricing_option.created` / `pricing_option.assigned_to_service` / `pricing_option.disassociated_from_service` / `pricing_option.deactivated` / `pricing_option.redeemed` per DL-16 amendment 42. Actor 4-tuple per amendment 43.
16. **Evidence citations:**
    - DL-17 inv 1-5 (catalog primitives + quantity_strategy)
    - DL-17 inv 11 (Contract / Autopay substrate with lazy template-expansion)
    - DL-17 inv 22-23 (entitlement 5-state lifecycle + redemption non-monetary at booking)
    - DL-17 inv 25 (commission per pricing option + per staff)
    - DL-15 amendment 33 (5 scheduling restrictions on pricing options)
    - Mindbody Batch 13 Step 05 (4-type pricing option Create dropdown)
    - Mindbody Batch 13 Step 07-09 (Pricing Option Advanced Edit ~30 fields)
    - Mindbody Batch 20 Step 06 (13 pricing options under Facials category showing variant pricing)
    - Preferences locked §1 "Pricing on pricing_option, not service or category"
17. **Test case:** Tenant creates Hydrafacial service. Creates 3 pricing options: "Signature $200" / "Deluxe $250" / "Platinum $300" (each `pricing_option_type = single_session`). All 3 linked to "Hydrafacial" service via M:N. Tenant also creates "ClassPass" pricing option at $0 with `member_only = FALSE` and links to all eligible services. Patient books at Hydrafacial service level; checkout surfaces 3 tier options. Sale closes with Deluxe selected; entitlement emitted with priority Medium; redemption at appointment.checked_in. Test confirms `service.price` does not exist; price lives on pricing_option.

---

### Rule TM-04: service ↔ pricing_option many-to-many via assignment join (with Disassociate vs Deactivate semantics)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 13 Step 06 shows ⋮ menu on per-service pricing option row with 3 explicit actions: **Disassociate** ("Clients can no longer use this pricing option for this service" — per-service unlink) / **Advanced Edit** (navigate to detail page) / **Deactivate** ("Clients can no longer use this pricing option for all associated services" — global). Step 04 shows disabled pricing options retained for historical visit-projection integrity (5 disabled "HydraFacial | Deluxe" et al. preserved when clinic migrated naming from pipe `|` to em-dash `–`).
2. **Cross-app evidence:**
   - **Stripe products + prices** — One product (api object: `prod_xxx`) has multiple prices (api object: `price_xxx`). Many-to-many relationship; archiving a price keeps it for historical invoices.
   - **Shopify product variants + collections** — Many-to-many via collection-product join; deactivation vs deletion distinct.
   - **Restaurant POS combo bundles** — One menu item appears in multiple combos via join row.
3. **Underlying tenant need:** A pricing option (e.g., "Treatment Deposit $50") may apply across multiple services (HydraFacial deposit / Botox deposit / Filler deposit / etc.). A service may have multiple pricing options (Signature / Deluxe / Platinum). The relationship is M:N. The tenant must be able to unlink from ONE service without affecting other links (Disassociate) AND globally retire a pricing option without leaving orphaned per-service assignments (Deactivate).
4. **OMNI generic primitive / rule:** `service_pricing_option_assignment` substrate per DL-17 inv 1. Carries `id`, `service_id` FK, `pricing_option_id` FK, `is_active` BOOLEAN, `priority` per DL-17 inv 4, `valid_from` + `valid_to` (temporal validity per DL-16 inv 18), `disassociated_at` TIMESTAMP NULL. Disassociate: set `disassociated_at` (soft-delete; preserves historical bookings + entitlement redemption audit). Deactivate: set `pricing_option.is_active = FALSE` (cascades to hide from all sale UI but assignments preserved per DL-17 inv 1 disassociation-distinct-from-deactivation discipline).
5. **Divergence / improvement:** Mindbody's two-verb pattern (Disassociate per-service vs Deactivate global) is preserved as core substrate semantics. OMNI adds `disassociated_at` TIMESTAMP for audit (Mindbody only carries a deletion flag without temporal granularity).
6. **Anti-copy warning:** Do NOT model assignment as a nested array on `service.pricing_option_ids[]` or `pricing_option.service_ids[]`. Per DL-17 inv 1 rejected pattern: nested arrays prevent M:N audit + temporal validity + per-assignment priority. Always M:N join row.
7. **Substrate pressure-test verdict:** **OK** — DL-17 inv 1 covers `service_pricing_option_assignment` + soft-delete + priority + temporal validity. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Admin assigns pricing option to service (or unlinks); admin deactivates pricing option globally; booking flow queries available pricing options for a service.
9. **Required inputs:** `service_id` FK, `pricing_option_id` FK. Optional: `priority` (defaults to Medium per pricing_option default), `is_active` (defaults TRUE).
10. **Decision logic:**
    - Insert new `service_pricing_option_assignment` row on assign; uniqueness via `(service_id, pricing_option_id, disassociated_at IS NULL)` partial index.
    - On Disassociate: set `disassociated_at = NOW()` + `is_active = FALSE`. Assignment row preserved.
    - On Deactivate (global on `pricing_option`): cascade UI hide; assignment rows preserved; historical bookings + entitlement redemptions remain queryable.
    - Re-assign after disassociate: insert NEW row (do NOT clear `disassociated_at` on old row); preserves audit trail.
    - Query at booking: `WHERE service_id = ? AND is_active = TRUE AND disassociated_at IS NULL AND pricing_option.is_active = TRUE AND (valid_to IS NULL OR valid_to > NOW())`.
11. **Output / state change:** Insert / update `service_pricing_option_assignment` row; emit `pricing_option.assigned_to_service` / `pricing_option.disassociated_from_service` / `pricing_option.deactivated_globally` events.
12. **Owning substrate:** `service_pricing_option_assignment` (DL-17 inv 1). Cross-link `service` + `pricing_option` + `entitlement` (DL-17 inv 22-23 redemption queries).
13. **UI surface:**
    - Admin: Service edit drawer → Pricing tab → list + Create dropdown (matches Mindbody Batch 13 Step 03 drawer). Per-row ⋮ menu with Disassociate / Advanced Edit / Deactivate (matches Step 06).
    - Patient/staff: filtered list query (active assignment + active pricing option).
14. **Failure mode:** If both `service` and `pricing_option` are active but assignment is disassociated, surface unavailable in patient view (correct behavior; not a failure). If query returns zero active assignments, fall back to base service.price (rejected — service has no price; correct behavior is "no commercial variant available" UI state).
15. **Audit / event:** `pricing_option.assigned_to_service` / `pricing_option.disassociated_from_service` / `pricing_option.priority_changed` per DL-16 amendment 42. Actor per amendment 43.
16. **Evidence citations:**
    - DL-17 inv 1 (service ↔ pricing_option M:N via assignment with disassociated_at)
    - DL-17 inv 4 (redemption priority)
    - DL-16 inv 18 (temporal validity)
    - Mindbody Batch 13 Step 06 (Disassociate / Advanced Edit / Deactivate 3-action ⋮ menu)
    - Mindbody Batch 13 Step 04 (5 disabled pricing options preserved for historical bookings)
17. **Test case:** "Treatment Deposit $50" pricing option assigned to 4 services: HydraFacial / Botox / Filler / LHR. Admin disassociates from HydraFacial only via ⋮ menu. Patient booking HydraFacial no longer sees deposit option; Botox/Filler/LHR still see it. Later admin globally deactivates "Treatment Deposit $50"; all 3 remaining services hide it; historical sales from past 2 years still reference the assignment for audit. Re-assign deposit to HydraFacial later → NEW assignment row created; old `disassociated_at` row preserved.

---

### Rule TM-05: service.service_type ENUM constrains operational semantics (5 values)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 16 settings + Layer 2 Section D confirm Mindbody's 5 service-type families: Appointments (1-to-1 patient ↔ provider booking) / Arrivals (drop-in walk-in queue) / Classes (multi-patient capacity) / Courses (recurring class series) / Memberships (subscription with benefits). Different families have different booking semantics, scheduling constraints, and commerce treatment. DL-15 amendment 32 inv 32 binds this 5-enum to OMNI.
2. **Cross-app evidence:**
   - **Calendly event_type kinds** — "1-on-1" / "Group" / "Round Robin" / "Collective" — event type kind constrains downstream behavior (capacity / participant resolution / availability composition).
   - **Eventbrite event_type** — Free / Paid / Donation; type discriminates downstream commerce + reminder + capacity logic.
   - **MindBody (current evidence)** — Definitive 5-enum.
   - **Boulevard service taxonomy** — Service + Class + Series + Membership separation matches Mindbody's pattern.
3. **Underlying tenant need:** The platform must distinguish how scheduling, capacity, payment, and reminders work for fundamentally different service shapes. Appointment booking (one patient, one provider, calendar slot) is mechanically different from class booking (one event, many patients) which is different from membership enrollment (recurring autopay, ongoing benefits).
4. **OMNI generic primitive / rule:** `service.service_type` ENUM 5 values per DL-15 amendment 32 inv 32: (1) `appointment` — 1-to-1 patient/provider; default; 4-axis composer per DL-15 inv 30; (2) `arrival` — drop-in/walk-in queue; no scheduled time; `status_flags |= Walk_in` per DL-15 amendment 29; (3) `class` — multi-patient capacity; capacity_consume per DL-15 inv 30; (4) `course` — recurring class series; multiple `availability_window` rows + multi-session entitlement; (5) `membership` — subscription with benefits; couples to DL-17 inv 11 Contract / autopay substrate. Service_type drives which DL-15 axes are required at booking + which DL-17 pricing_option types are admissible.
5. **Divergence / improvement:** Mindbody's 5-enum imported as substrate (this IS a generic operational distinction, not vendor-specific). OMNI clarifies: service_type is the SHAPE of the operational kind, not the SPECIALTY. A medspa, a derm clinic, a Hims clinic, a yoga studio, and a chiropractor all use the SAME 5-enum — only their service catalogs differ.
6. **Anti-copy warning:** Do NOT extend service_type with specialty-coded values (`appointment_aesthetic` / `appointment_medspa` / `appointment_derm`). Do NOT extend with vendor-coded values (`membership_alle` / `class_yoga_specific_brand`). Per system_map Cross-DL warning. Do NOT collapse `course` and `class` (Mindbody made that distinction for a reason — recurring series vs single events).
7. **Substrate pressure-test verdict:** **OK** — DL-15 amendment 32 inv 32 binds the 5-enum. Per DL-15 inv 30 4-axis composer reads `service.service_type` to determine which axes are required. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Tenant admin creates/edits service; booking RPC reads service.service_type to determine booking semantics.
9. **Required inputs:** `service.service_type` ENUM value (one of 5).
10. **Decision logic:**
    - On admin write: validate enum value ∈ 5 allowed values.
    - Booking RPC reads service_type to dispatch to type-specific booking handler:
      - `appointment`: 4-axis composer per DL-15 inv 30; requires staff + (optional room/resource per service_policy).
      - `arrival`: no scheduled_time required; emits arrival queue entry; `status_flags |= Walk_in`.
      - `class`: capacity consume + multi-patient roster; `participant_count < capacity` check; emits class enrollment.
      - `course`: recurring class series; multi-session entitlement per DL-17 inv 2 `multiple_sessions` type; per-session enrollment.
      - `membership`: enrollment emits Contract row per DL-17 inv 11 with `recurrence_rule`; subsequent recurring charges deterministic per autopay.
    - On edit: changing service_type post-creation REJECTED (per DL-12 versioning — changing operational shape would invalidate historical bookings). Admin must deactivate + create new.
11. **Output / state change:** Insert/update `service` row with service_type value. On booking, dispatch to type-specific RPC handler.
12. **Owning substrate:** `service` (DL-15 amendment 32 inv 32). FK targets in `service_policy.service_id` (DL-19 inv 18) — service_policy required-axis flags vary by service_type.
13. **UI surface:**
    - Admin: Service edit form → service_type dropdown.
    - Patient/Staff: implicit; affects which booking flow renders (appointment booking modal vs class roster vs membership signup).
14. **Failure mode:** If booking RPC receives `service_id` with `service_type = membership` but request is for appointment booking → reject with "Service is a membership; use enrollment flow." No fallthrough.
15. **Audit / event:** `service.created` / `service.service_type_changed_rejected` (when admin tries to change post-creation) per DL-16 amendment 42.
16. **Evidence citations:**
    - DL-15 amendment 32 inv 32 (service_type 5-enum binding)
    - DL-15 inv 30 (4-axis booking composer reading service_type)
    - DL-17 inv 11 (Contract / autopay coupling for membership service_type)
    - DL-17 inv 2 (multiple_sessions pricing_option_type for course service_type)
    - Mindbody Layer 2 + Batch 16 evidence (5-type taxonomy)
17. **Test case:** Tenant creates "Hydrafacial" as `service_type = appointment` + 4-axis booking composer engages (requires staff + room per service_policy). Tenant creates "Bloom Pilates Tuesday 6pm" as `service_type = class` with capacity 12; booking flow shows roster + enrollment. Tenant creates "Bloom Membership Monthly" as `service_type = membership` with `recurrence_rule = FREQ=MONTHLY`; signup emits Contract row + first charge. Each service follows different booking handler; same substrate.

---

### Rule TM-06: service.quantity_strategy ENUM eliminates Mindbody's per-quantity workaround (5 values)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 8 Step 06 + Batch 13 Step 04 + Batch 20 Step 04 show Mindbody's Botox 7-tier workaround: Botox is modeled as a "product" (not a service) with 7+ pricing options for 7 quantity tiers (Botox 20u / 30u / 40u / 50u / 60u / 80u / 100u as separate "products" because price scales per unit). Each quantity tier is a separate substrate row. This is the canonical user feedback gap #2 anchor. Mindbody Batch 20 mobile confirms 5 visible Botox tiers at $14/u × N: BQ 1u $14 / BS 80u $800 / BS 160u $1560 / BS 200u $1900 / BS 256u $2368. Variable quantity cannot be captured cleanly.
2. **Cross-app evidence:**
   - **Hospital OR procedure billing** — Procedures with variable supply consumption (e.g., laparoscopy with N trocars, surgery with X units of bone cement) capture quantity at the procedure level, not at the supply level. CPT codes + HCPCS supply codes + units consumed.
   - **Restaurant POS (Chipotle build-your-own bowl)** — Base "Bowl" item + per-modifier quantity (rice / beans / meat / extras) captured at order time, not via "Bowl with 2x meat" as separate menu items.
   - **Gas station fuel** — One "Gasoline" service + variable gallons quantity × price-per-gallon at checkout; not 50 separate "Gasoline 1gal" / "Gasoline 2gal" pricing options.
   - **Amazon "Buy in bulk" pricing** — Same product + quantity field + per-unit pricing.
3. **Underlying tenant need:** Some services are unit-priced (Botox $14/u × N units; LHR $50/area × N areas; PRP $X/vial × N vials) where the tenant cannot pre-enumerate every quantity tier. The substrate must capture quantity at booking (planned) and quantity at checkout (actual performed). Conversely, some services are fixed-price (Hydrafacial $200 flat — no per-unit semantics). The substrate distinguishes.
4. **OMNI generic primitive / rule:** `service.quantity_strategy` ENUM 5 values per DL-15 amendment 5 / DL-17 inv 5: (1) `fixed_quantity` — one redemption; e.g., one Hydrafacial Signature visit; (2) `per_unit_quantity` — variable-quantity at checkout; staff enters quantity; e.g., Botox $14/u × N units (**eliminates Mindbody's 7-tier workaround**); per-pricing-option `default_unit_price` + `min_quantity` + `max_quantity` + `quantity_unit` ENUM (units / syringes / vials / areas / sessions); (3) `package_count` — N sessions per multiple_sessions pricing option; (4) `unlimited_period` — no quantity semantics; unlimited within window; (5) `subscription_recurring` — quantity = billing periods for autopay contracts. `appointment_item.planned_quantity` captures planned at booking; `encounter_line.performed_payload.units_or_syringes` captures actual at delivery.
5. **Divergence / improvement:** The 7-tier Botox workaround is THE canonical user-feedback-gap-2 anchor (per user verbatim: "Currently mind body to my knowledge… we have to use botox as a 'product' so we can specify botox $14/unit then we type in 20 units administered. Consider various ways we can achieve this elegantly across services, inventory, bookkeeping, and actual products"). OMNI's `per_unit_quantity` strategy single-handedly resolves this. Per DL-17 inv 5 rejected pattern: "Botox 7-tier per-quantity pricing options (Mindbody workaround)."
6. **Anti-copy warning:** Do NOT model Botox as 7 separate "products" or 7 separate pricing_options for 7 quantity tiers. Do NOT bake quantity into service name ("Botox 20u" / "Botox 40u" as separate services). Do NOT bake quantity into pricing_option name (Mindbody does this with "BS Botox Subscription | 200 Units"). Quantity is a CAPTURE on `appointment_item.planned_quantity` + `encounter_line.performed_payload.units_or_syringes`, NOT a service identity.
7. **Substrate pressure-test verdict:** **OK** — DL-15 amendment 5 inv 33 + DL-17 inv 5 fully cover `quantity_strategy` 5-enum + per-unit defaults + appointment_item quantity capture + encounter_line performed quantity. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Tenant admin creates service; booking flow captures planned quantity; checkout captures actual performed quantity.
9. **Required inputs:** `service.quantity_strategy` ENUM. For `per_unit_quantity`: `default_unit_price` NUMERIC, `min_quantity` NUMERIC, `max_quantity` NUMERIC, `quantity_unit` ENUM.
10. **Decision logic:**
    - On admin write: validate enum value ∈ 5 allowed values.
    - On booking with `per_unit_quantity` strategy: `appointment_item.planned_quantity` capture allowed (optional; tenant may defer to checkout); progressive disclosure mode determines if patient is asked.
    - On checkout with `per_unit_quantity` strategy: staff enters `encounter_line.performed_payload.units_or_syringes`; price = `default_unit_price × quantity` unless pricing_option override; commerce_order_line carries quantity × unit_price.
    - On `fixed_quantity` strategy: planned_quantity = 1; performed_quantity = 1 (or 0 if not performed); price = pricing_option.price.
    - On `package_count` strategy: planned_quantity = redemption_count from pricing_option; entitlement generated with redemption_count = N.
    - On `unlimited_period`: no quantity semantics; per-redemption-event entitlement decrements not applicable.
    - On `subscription_recurring`: per-period charge; quantity not user-entered.
11. **Output / state change:** `appointment_item` row with planned_quantity; `encounter_line` row with performed quantity; `commerce_order_line.quantity × unit_price = total`. Emit `service.quantity_captured.planned` + `service.quantity_captured.performed` events.
12. **Owning substrate:** `service.quantity_strategy` (DL-15 amendment 5 inv 33; DL-17 inv 5). `appointment_item.planned_quantity` (DL-20 inv 34). `encounter_line.performed_payload.units_or_syringes` (DL-20 inv 13).
13. **UI surface:**
    - Patient booking (when progressive disclosure asks): "How many units would you like?" optional input.
    - Staff appointment edit: planned_quantity editable.
    - Staff checkout: actual_quantity entered (mandatory for per_unit_quantity; auto-1 for fixed_quantity).
14. **Failure mode:** If `per_unit_quantity` actual_quantity exceeds max_quantity, reject with admin alert; if below min_quantity, surface warning but allow with reason_code. If `fixed_quantity` and staff tries to override quantity, reject with "Service is fixed-quantity; create separate appointment_item for additional sessions."
15. **Audit / event:** `service.quantity_strategy_set` / `appointment_item.planned_quantity_changed` / `encounter_line.performed_quantity_recorded` per DL-16 amendment 42.
16. **Evidence citations:**
    - DL-15 amendment 5 inv 33 (quantity_strategy 5-enum binding)
    - DL-17 inv 5 (Quantity Strategy enum on Pricing Option; eliminates 7-tier workaround)
    - DL-17 inv 5 rejected pattern (Mindbody Botox 7-tier)
    - Mindbody Batch 8 Step 06 (Botox-as-product 7-tier workaround)
    - Mindbody Batch 20 Step 04 (mobile confirms 5-tier Botox)
    - User feedback gap #2 (verbatim quote: variable quantity at checkout)
    - Preferences locked §1 "Keep toxin/product modeling flexible" (Knox direction)
17. **Test case:** Tenant creates "Neuromodulator Visit" service with `quantity_strategy = per_unit_quantity`, `default_unit_price = 14`, `min_quantity = 10`, `max_quantity = 100`, `quantity_unit = units`. Sarah books appointment; progressive disclosure asks "How many units?" — Sarah enters 24 (planned_quantity = 24, planned cost = $336). At visit, provider injects 26 units; staff updates encounter_line.performed_payload.units = 26; commerce_order_line.quantity = 26 × $14 = $364. Schedule shows "Neuromodulator Visit — 24u planned" pre-visit; after performed line locked, shows "Neuromodulator Visit — 26u performed." Same service handles 20u Botox booking AND 100u Sculptra booking AND 5-area LHR booking via tenant-configured `quantity_unit` ENUM extension.

---

## Section B — Booking_preset substrate + 3 shape patterns

### Rule TM-07: booking_preset is tenant-configured patient-facing affordance (separate from service)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody does NOT have an explicit booking_preset substrate — it uses appointment-type rows as the patient-facing label directly. Each appointment-type IS a bookable affordance (Batch 13 Step 01 evidence shows the service edit page is also the affordance edit page). This conflates "the operational kind" (service) with "what the patient picks at booking" (preset). Result: tenants either (a) duplicate services for every commercial variant ("BH HydraFacial – Deluxe" / "BH HydraFacial – Platinum" / "BH HydraFacial – Signature" as 3 services per Batch 20 Step 06) OR (b) cannot represent combo bundles ("Full Facial Balancing = Neuromodulator + Filler + Filler + Biostimulator") cleanly.
2. **Cross-app evidence:**
   - **Restaurant POS combo bundle** — "Combo #3" appears as ONE menu item but materializes 3 line items (sandwich + side + drink) on the ticket. Combo definition is a tenant-configured affordance separate from the underlying menu items.
   - **Calendly event_type + Cal.com event_type** — Separate from the underlying meeting (you can have multiple event types pointing to the same meeting template, each with different intake questions / availability rules).
   - **Amazon "frequently bought together" bundles** — Bundle is a curated affordance separate from individual products.
   - **Zoom Scheduler templates** — Template is a tenant-configured presentation of an availability + intake combo; many templates can reference one underlying availability.
3. **Underlying tenant need:** The tenant must be able to expose patient-facing booking affordances that don't map 1:1 to underlying services. A single service ("Hydrafacial") may have multiple presets ("HydraFacial Signature" / "HydraFacial Deluxe" / "HydraFacial Platinum" — each pointing to different pricing_options + slightly different planned_details defaults). Multiple services may compose into one preset ("Full Facial Balancing" combo). Same service may appear under different patient-facing names per channel ("Botox Touch-Up" online; "Neuromodulator Maintenance" in-clinic).
4. **OMNI generic primitive / rule:** `booking_preset` substrate per DL-19 inv 19. Carries `id`, `tenant_id`, `display_label` STRING (patient-facing name), `target_service_id` FK NULL OR `target_service_category_id` FK NULL (exactly one), `target_pricing_option_id` FK NULL (for tier-at-booking), `default_planned_quantity` NUMERIC NULL, `default_planned_details` JSONB (pre-populates planned_details), `default_duration_minutes` NUMERIC NULL, `default_provider_eligibility_filter` STRING NULL, `default_resource_requirement` STRING NULL, `visible_in_self_booking` BOOLEAN, `parent_preset_id` FK NULL (hierarchical drill-down), `bundled_member_preset_ids[]` ARRAY NULL (combo bundle), `tenant_display_order` NUMERIC, `active` BOOLEAN.
5. **Divergence / improvement:** Mindbody conflates affordance + operational kind. OMNI separates: `service` is operational kind (clinical/operational reality); `booking_preset` is patient-facing affordance (UX/marketing reality). Tenant configures presets per channel, per audience, per marketing campaign without duplicating service rows. Result: cleaner catalog, no Mindbody-style "BH HydraFacial – Deluxe / Platinum / Signature" service-duplication; ONE Hydrafacial service + 3 presets pointing to 3 pricing_options.
6. **Anti-copy warning:** Do NOT bake preset names into substrate enums (`preset_hydrafacial_deluxe` / `preset_neuromodulator_visit`). All preset names are tenant-defined STRINGs. Do NOT model presets as a child of pricing_option (presets are independent; preset can target service OR category OR pricing_option). Do NOT use "visit_type" as a substrate concept — `visit_type` is the projection of `booking_preset.display_label`, NOT a column or enum.
7. **Substrate pressure-test verdict:** **OK** — DL-19 inv 19 fully covers `booking_preset` substrate. Three target patterns (service / category / pricing_option) are all admitted. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Tenant admin creates / edits / reorders booking presets; patient self-booking flow renders presets; staff appointment creation modal shows presets.
9. **Required inputs:** `tenant_id`, `display_label` STRING, `target_service_id` OR `target_service_category_id` (exactly one populated; check constraint).
10. **Decision logic:**
    - Exactly-one-target check: `(target_service_id IS NOT NULL) XOR (target_service_category_id IS NOT NULL)` if neither is part of a bundle (`bundled_member_preset_ids` IS NULL OR empty).
    - For combo bundle preset: `bundled_member_preset_ids` non-empty; `target_service_id` may be NULL (combo is composition of children).
    - For hierarchical preset: `parent_preset_id` non-NULL → drill-down chain; child inherits parent's `default_planned_details` unless overridden.
    - `visible_in_self_booking` controls patient portal visibility; staff always sees all presets.
    - `default_planned_details` JSONB MUST validate against target service's `planned_detail_schema` at admin write time.
    - On booking commit: preset materializes one or more `appointment_item` rows with preset defaults (see TM-08 / TM-09 / TM-10 / TM-11 for shape-specific behavior).
11. **Output / state change:** Insert `booking_preset` row; emit `booking_preset.created` event. On preset selection at booking → see TM-08/09/10/11 for materialization.
12. **Owning substrate:** `booking_preset` (DL-19 inv 19). FK targets in `appointment_item.linked_booking_preset_id` (DL-20 inv 34).
13. **UI surface:**
    - Admin: Settings → Services & Scheduling → Booking Presets admin (tree view + drag-reorder). Per-preset edit form (target / defaults / hierarchy / bundle).
    - Patient: rendered as the patient-facing booking menu — `display_label` is what the patient sees, NOT the underlying service.name.
    - Staff: appointment creation modal shows presets + raw services (staff can also book at service level directly).
14. **Failure mode:** If preset references deactivated service / category / pricing_option, preset auto-hides from patient view; staff view shows with "[target inactive]" badge. If `default_planned_details` JSONB fails schema validation (e.g., schema changed after preset created), admin edit rejected with diff-explanation.
15. **Audit / event:** `booking_preset.created` / `booking_preset.updated` / `booking_preset.activated` / `booking_preset.deactivated` / `booking_preset.target_changed` per DL-16 amendment 42.
16. **Evidence citations:**
    - DL-19 inv 19 (booking_preset substrate definition)
    - DL-20 inv 34 (appointment_item.linked_booking_preset_id FK)
    - Preferences locked §1 "Tenant catalog flexibility"
    - Mindbody Batch 13 Step 01 + Batch 20 Step 06 (Mindbody's lack of separate preset substrate)
    - Post-mortem Pattern 7 (avoiding Mindbody-renamed rules; booking_preset is NEW pattern, not renamed Mindbody)
17. **Test case:** Tenant creates booking_preset "Brazilian Laser Hair Removal" with `target_service_id = LHR_service.id`, `default_planned_details = {treatment_areas: ['brazilian']}`, `visible_in_self_booking = TRUE`. Patient self-books "Brazilian LHR" → preset materializes appointment_item with `planned_service_id = LHR_service.id` + `planned_details = {treatment_areas: ['brazilian']}`. Same underlying LHR service supports "Full Body LHR" preset with `default_planned_details = {treatment_areas: ['brazilian','underarms','full_legs','back','chest']}` — ONE service, multiple presets.

---

### Rule TM-08: Single-item booking_preset pattern (target_service_id populated)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody's "appointment type" row IS effectively a single-item preset (it materializes one appointment with one underlying service). Batch 13 Step 01 evidence. This is the most common pattern — book one thing.
2. **Cross-app evidence:**
   - **Calendly 1-on-1 event_type** — Single event template → single meeting.
   - **OpenTable reservation** — Single restaurant + party-size + time slot.
   - **Amazon single-product purchase** — One product variant, no bundling.
3. **Underlying tenant need:** Most bookings are simple — one service, one provider, one room, one patient. Preset for this pattern shouldn't require any hierarchy or bundling overhead.
4. **OMNI generic primitive / rule:** Single-item booking_preset = `booking_preset` row with `target_service_id` populated, `parent_preset_id = NULL`, `bundled_member_preset_ids = NULL`. Materializes ONE appointment_item per DL-20 inv 34 on booking commit.
5. **Divergence / improvement:** Matches Mindbody's appointment-type pattern but cleanly separates preset (UX) from service (operational). Patient sees "Botox Touch-Up" preset; substrate writes appointment_item with planned_service_id = Neuromodulator service.
6. **Anti-copy warning:** Do NOT require all single-item presets to have a parent_preset_id (flat single-item presets are valid). Do NOT model "no-add-on" as a special preset type — every preset implicitly admits add-ons at booking flow per TM-21.
7. **Substrate pressure-test verdict:** **OK** — DL-19 inv 19 + DL-20 inv 34 cover this pattern.

#### Section B — Rule definition

8. **Trigger:** Patient or staff selects a single-item booking_preset at booking flow.
9. **Required inputs:** `booking_preset.target_service_id` (NOT NULL); `booking_preset.id`; patient_id; requested time slot.
10. **Decision logic:**
    - Read preset → determine `target_service_id` + `default_planned_details` + `default_planned_quantity` + `default_pricing_option_id` (optional).
    - Run 4-axis booking composer per DL-15 inv 30 against service requirements + service_policy (DL-19 inv 18) for required axes.
    - Materialize ONE `appointment_item` row with: `planned_service_id = preset.target_service_id`, `planned_pricing_option_id = preset.target_pricing_option_id` (NULL if tier-at-checkout), `planned_quantity = preset.default_planned_quantity` (NULL if quantity-at-checkout), `planned_details = merge(preset.default_planned_details, patient_overrides)`, `linked_booking_preset_id = preset.id`, `sequence_index = 1`, `parent_item_id = NULL`.
    - Emit `appointment_booked` per DL-16 amendment 42.
11. **Output / state change:** ONE `appointment` row + ONE `appointment_item` row inserted atomically per DL-16 inv 6.
12. **Owning substrate:** `appointment` + `appointment_item` (DL-20 inv 33-34). `booking_preset` (DL-19 inv 19).
13. **UI surface:** Patient self-booking — single-item preset shows as one-click booking affordance. Confirmation page shows preset.display_label + planned_details.
14. **Failure mode:** If target_service_id deactivated mid-flow, abort booking with patient-friendly retry. If schema validation fails, surface inline error.
15. **Audit / event:** `appointment_booked` per DL-16 amendment 42; carries `booking_preset_id` in payload.
16. **Evidence citations:** DL-19 inv 19 + DL-20 inv 34 + Mindbody Batch 13 (appointment-type pattern).
17. **Test case:** Tenant creates "Botox Touch-Up" preset → `target_service_id = Neuromodulator service`, `default_planned_quantity = 20`, `default_planned_details = {preferred_product: 'Botox'}`. Patient books "Botox Touch-Up" → ONE appointment_item materialized with planned_quantity = 20, planned_details = {preferred_product: 'Botox'}. Patient may edit planned_quantity before commit (defaults are defaults, not constraints unless schema marks required).

---

### Rule TM-09: Hierarchical drill-down booking_preset pattern (parent_preset_id chain)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody cannot represent hierarchical drill-down within its preset model (everything is flat at appointment-type level). Batch 20 Step 06 shows 13 facials listed flat (CryoGloss / Aquagold / BH HydraFacial Deluxe / BH HydraFacial Platinum / BH HydraFacial Signature / BH Signature Facial 60-75-90-90 / Biologique Recherche 60-90 / ClassPass / Cancellation Policy) without hierarchical organization. Patient sees overwhelming list.
2. **Cross-app evidence:**
   - **Amazon product detail page with variant selectors** — "iPhone 15 Pro" page → drill down (Storage: 128GB/256GB/512GB/1TB → Color: Natural/Blue/White/Black → Carrier: AT&T/Verizon/etc.).
   - **Restaurant POS modifier prompts** — "Burger" → drill down (Bun: brioche/sesame/lettuce → Patty: 1/2 → Cheese: yes/no → Toppings: list).
   - **OpenTable special occasion selector** — Restaurant → drill down (Anniversary / Birthday / Business / Date / Romantic).
3. **Underlying tenant need:** Some services have multiple tier variants that share the same operational kind but differ in price/duration/inclusions. Patient should see a clean parent label ("Hydrafacial") then optionally drill down to choose tier ("Signature" / "Deluxe" / "Platinum"). Tenant must be able to model this without duplicating service rows.
4. **OMNI generic primitive / rule:** Hierarchical drill-down booking_preset = chain of `booking_preset` rows linked via `parent_preset_id` FK. Parent preset has `target_service_id = X`, children have `target_service_id = X` (same service) + `target_pricing_option_id = X_tier1/2/3` (different pricing_options) + `default_planned_details` overrides (tier-specific). At booking, patient picks parent → UI surfaces children for drill-down; selecting child commits with child's defaults.
5. **Divergence / improvement:** Mindbody's flat list is replaced by tenant-controlled hierarchy. ONE Hydrafacial service + 3 pricing_options + 1 parent preset "Hydrafacial" + 3 child presets "Signature/Deluxe/Platinum" → clean UX, no service duplication.
6. **Anti-copy warning:** Do NOT cap hierarchy depth at substrate (UI may impose soft cap for usability). Do NOT require children to share parent's `target_service_id` (children may target different services if tenant wants — but typical pattern is same service, different pricing_options).
7. **Substrate pressure-test verdict:** **OK** — DL-19 inv 19 `parent_preset_id` FK admits arbitrary-depth chains. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Patient picks parent preset → UI drills to children; patient selects child preset → booking commits.
9. **Required inputs:** `booking_preset.id` (child preset with `parent_preset_id` populated).
10. **Decision logic:**
    - Resolve preset chain: walk `parent_preset_id` upward to root; merge `default_planned_details` from root → leaf (leaf overrides root).
    - Materialize ONE appointment_item (single-item shape from TM-08) using the LEAF preset's target_service_id + target_pricing_option_id + merged planned_details.
    - `linked_booking_preset_id` = leaf preset id (preserves the patient's actual selection for analytics + UX recall).
11. **Output / state change:** ONE appointment + ONE appointment_item (same as TM-08, but with hierarchical preset context).
12. **Owning substrate:** Same as TM-08 + `booking_preset.parent_preset_id` FK chain.
13. **UI surface:** Patient self-booking — drill-down UX (radio/click-tree); breadcrumb shows hierarchy ("Hydrafacial > Signature").
14. **Failure mode:** If leaf preset deactivated, walk up to next active sibling at same level. If parent chain has cycle (shouldn't happen at admin write — substrate rejects on insert), error logged + admin alert.
15. **Audit / event:** `appointment_booked` with `booking_preset_id` (leaf) + `booking_preset_chain` in payload for analytics.
16. **Evidence citations:** DL-19 inv 19 (parent_preset_id) + DL-20 inv 34. Cross-app: Amazon variant selectors, restaurant modifier prompts.
17. **Test case:** Tenant creates parent preset "Hydrafacial" (target_service = Hydrafacial service, no pricing_option, no details). Creates 3 children: "Signature" (target_pricing_option = sig_$200, default_planned_details = {tier: 'signature'}); "Deluxe" (target_pricing_option = del_$250, default_planned_details = {tier: 'deluxe', addons: ['boost_serum']}); "Platinum" (target_pricing_option = plat_$300, default_planned_details = {tier: 'platinum', addons: ['boost_serum', 'led_light']}). Patient self-books → sees "Hydrafacial" → drills to "Deluxe" → appointment_item materialized with planned_pricing_option = del_$250, planned_details = {tier: 'deluxe', addons: ['boost_serum']}. Schedule shows "Hydrafacial Deluxe" (preset.display_label of leaf).

---

### Rule TM-10: Combo bundle booking_preset pattern (bundled_member_preset_ids[])

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody cannot represent combo bundles cleanly. The user verbatim: "Hydrafacial machine, room 2 for esti. Then to injector room. Then to red light in room 2. All coordinated at specific times. Like, that's literally a regular day for us. This is not an edge case." Mindbody requires booking 3 separate appointments back-to-back — separate confirmations, separate cancellation policies, no atomic itinerary.
2. **Cross-app evidence:**
   - **Restaurant POS combo meal** — "Combo #3" = sandwich + side + drink as ONE order with ONE total but THREE ticket items routed to 3 stations.
   - **Spa package bookings (Mandarin Oriental / Four Seasons)** — "Renewal Day Spa Package" = facial + massage + manicure as ONE booking with multi-staff coordination.
   - **Airline multi-leg itinerary** — One PNR (Passenger Name Record) holds N flight segments; one cancellation cascades.
   - **Travel agency package** — Flight + hotel + car rental as one booking record.
3. **Underlying tenant need:** Some patient visits intentionally combine multiple services in one trip ("Full Facial Balancing" = Neuromodulator + 2x Filler + Biostimulator Consult; "Bloom Glow Package" = Hydrafacial + Injector + Red Light). Tenant must model these as ONE booking affordance materializing N appointment_items atomically — with shared appointment cancellation policy, shared confirmation, but per-item provider/room/resource.
4. **OMNI generic primitive / rule:** Combo bundle booking_preset = `booking_preset` row with `bundled_member_preset_ids[]` array populated (FK array to other booking_presets). Selecting bundle preset materializes ONE appointment + N appointment_items (one per bundled member preset). Each member preset is itself a single-item preset (TM-08 pattern); the bundle is a composition.
5. **Divergence / improvement:** OMNI lets tenant compose presets without duplicating services. ONE bundle preset = N member presets that each reference their own service. Cancellation, confirmation, and check-in operate at the appointment level; per-item state allows mid-visit changes (skip line 2 if patient declines).
6. **Anti-copy warning:** Do NOT model bundles as a special "combo service" — bundle is a PRESET concept, not a SERVICE concept. Do NOT bake bundle composition into a JSONB free-form field — `bundled_member_preset_ids[]` is typed FK array. Do NOT auto-cancel sibling items if patient skips one — each appointment_item has its own lifecycle (DL-20 inv 34 `item_state`).
7. **Substrate pressure-test verdict:** **OK** — DL-19 inv 19 `bundled_member_preset_ids[]` ARRAY + DL-20 inv 34 multi-item per appointment with `sequence_index` + `parent_item_id` cover combo bundles. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Patient or staff selects a combo bundle preset at booking flow.
9. **Required inputs:** `booking_preset.id` (with `bundled_member_preset_ids[]` populated).
10. **Decision logic:**
    - Resolve bundle: read `bundled_member_preset_ids[]` → fetch each member preset.
    - For each member preset: run TM-08 single-item materialization (resolve target_service + defaults + planned_details).
    - Run 4-axis booking composer per DL-15 inv 30 for EACH member (each may need different staff / room / resource); composer enforces ALL axes for ALL members or rejects (per DL-15 inv 2 multi-resource atomic).
    - Materialize ONE appointment + N appointment_items atomically (per DL-16 inv 6).
    - `sequence_index` set per member preset's position in array (1, 2, 3, ...).
    - `linked_booking_preset_id` on each item = the MEMBER preset's id (the SPECIFIC service in the bundle); parent bundle id stored on appointment.bundled_from_preset_id (NEW SUBSTRATE NEEDED — see verdict refinement below).

**Substrate gap discovered during rule authoring:** `appointment.bundled_from_preset_id` is NOT in DL-20 inv 33 substrate definition. The bundle parent preset id needs a home for analytics + UX recall. Two options:
- **Option A:** Add `appointment.bundled_from_preset_id` FK NULL column to DL-20 inv 33 (small extension).
- **Option B:** Store via tag/metadata pattern (worse for queryability).

**Revised verdict:** **OK with extension** — DL-20 inv 33 needs `appointment.bundled_from_preset_id` FK NULL column. Flagged for Phase 1 DL amendment. Documented in [§Substrate gap audit](#substrate-gap-audit).

11. **Output / state change:** ONE appointment + N appointment_items atomically. Emit `appointment_booked` event with bundle metadata in payload.
12. **Owning substrate:** `appointment` + `appointment_item × N` + `booking_preset` chain. EXTENSION NEEDED on `appointment` per gap above.
13. **UI surface:** Patient self-booking — bundle preset surfaces as one option; preview shows member items before commit ("Full Facial Balancing includes: Neuromodulator, Filler x2, Biostimulator Consult — Total estimated 90min"). Schedule shows ONE appointment block with N items visible on hover/click.
14. **Failure mode:** If any member preset target_service is deactivated, surface alert + offer alternatives. If 4-axis composer cannot satisfy all members atomically, reject with patient-friendly error + suggest splitting into separate appointments.
15. **Audit / event:** `appointment_booked` with `bundle_metadata` in payload. Per-item `appointment_item.created` events.
16. **Evidence citations:** DL-19 inv 19 (bundled_member_preset_ids[]) + DL-20 inv 34 (multi-item appointment) + DL-15 inv 30 (4-axis multi-resource atomic) + preferences locked §1 "Multi-line visit reality" + user verbatim quote.
17. **Test case:** Tenant creates bundle preset "Full Facial Balancing" with `bundled_member_preset_ids = [neuromodulator_preset, filler_preset, filler_preset, biostimulator_consult_preset]` (filler appears twice — different planned_treatment_areas per item). Patient books "Full Facial Balancing" → ONE appointment + 4 appointment_items materialized atomically. Each item has its own planned_service_id + planned_details (filler items have different treatment_areas: cheek vs chin). Schedule shows one block with 4 items. Patient mid-visit declines second filler line; staff marks item_state = skipped_at_visit; other 3 items proceed; appointment.status remains completed.

---

### Rule TM-11: booking_preset.default_planned_details pre-populates appointment_item.planned_details JSONB

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody has no structured planned-detail capture at booking. Staff types free-form into "Notes" (Batch 5 evidence). Result: patient typing "looking to get my filler touched up" goes into a string field that requires manual interpretation. No structured data for analytics, no validation, no patient-side guided UX.
2. **Cross-app evidence:**
   - **Calendly intake questions** — Event type carries question template; patient answers structured fields at booking; answers attach to meeting.
   - **OpenTable special requests** — Reservation carries structured pull-down (dietary / occasion / seating preference) + free-form note.
   - **Restaurant POS modifier defaults** — Combo Meal preset has default modifiers ("no onion" / "extra cheese") that pre-populate ticket but staff can override.
3. **Underlying tenant need:** Some presets carry structured booking context (treatment_areas for LHR/neuromodulator, preferred_product for multi-product services, planned_units for variable-quantity). The substrate must let the preset PRE-POPULATE these defaults to reduce patient/staff input while admitting per-booking override.
4. **OMNI generic primitive / rule:** `booking_preset.default_planned_details` JSONB pre-populates `appointment_item.planned_details` at booking commit. JSONB must validate against target service's `planned_detail_schema`. Merge order: preset defaults → patient overrides at booking → staff overrides at appointment edit; later wins.
5. **Divergence / improvement:** Mindbody's free-form Notes field is supplemented (NOT replaced) by structured planned_details. Free-text staff_booking_note still exists per DL-20 inv 39 `appointment_staff_note_entry` (append-only). Structured fields are tenant-defined per-service via schema.
6. **Anti-copy warning:** Do NOT replace free-text notes with mandatory structured fields. Per preferences locked §1 "Free text where free-text is appropriate; structured where structured is appropriate." Patient typed comment ("looking to get my filler touched up") still goes into `appointment.booking_request_note` (DL-20 inv 33). Structured fields are tenant CHOICE per service. Do NOT make planned_detail_schema required by default — empty schema `{}` means no structured capture (always optional).
7. **Substrate pressure-test verdict:** **OK** — DL-19 inv 19 `default_planned_details JSONB` + DL-20 inv 34 `planned_details JSONB` + DL-15 amendment 30 (4-axis composer reads service.planned_detail_schema) cover this. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Preset selected at booking; appointment_item materialization step.
9. **Required inputs:** `booking_preset.default_planned_details` JSONB, target `service.planned_detail_schema` JSONB, patient/staff overrides (optional).
10. **Decision logic:**
    - Materialization order: (1) start with `{}`; (2) merge `booking_preset.default_planned_details` (if non-null); (3) merge patient overrides at booking flow (if patient provided); (4) merge staff overrides at appointment edit (later wins).
    - Validate final merged JSONB against `service.planned_detail_schema` per DL-19 inv 18.
    - Reject save if schema validation fails (substrate-level CHECK constraint, not app-layer-only).
    - NULL or `{}` planned_details ALWAYS allowed (broad-default per TM-12); schema validation rejects extra fields but allows missing fields unless schema marks `required = true` per field.
11. **Output / state change:** `appointment_item.planned_details` populated; emit `appointment_item.planned_details_set` event with diff.
12. **Owning substrate:** `appointment_item.planned_details` (DL-20 inv 34). `service.planned_detail_schema` (DL-15 inv 30 service substrate; explicit JSONB schema field).
13. **UI surface:** Patient self-booking — if preset has defaults AND service has schema, render structured form with pre-populated values. Staff appointment edit — same form with override capability.
14. **Failure mode:** If schema invalidates patient input, render inline error (not substrate-level rejection that user-side; clean UX). If schema is malformed at admin write, admin gets explicit error.
15. **Audit / event:** `appointment_item.planned_details_set` per DL-16 amendment 42; carries before/after diff.
16. **Evidence citations:** DL-19 inv 19 (booking_preset.default_planned_details JSONB) + DL-20 inv 34 (appointment_item.planned_details JSONB) + DL-15 inv 30 (planned_detail_schema validation) + preferences locked §1 "Free-text vs structured."
17. **Test case:** Tenant creates LHR service with `planned_detail_schema = {treatment_areas: {type: array, items: enum[brazilian, underarms, full_legs, half_legs, back, chest, shoulders], required: false}}`. Tenant creates preset "Brazilian LHR" with `default_planned_details = {treatment_areas: ['brazilian']}`. Patient books "Brazilian LHR" → planned_details pre-filled with brazilian. Patient adds underarms via guided flow → planned_details = {treatment_areas: ['brazilian', 'underarms']}. Validation passes. Same patient later books "Full Body LHR" preset → planned_details = {treatment_areas: ['brazilian', 'underarms', 'full_legs', 'back', 'chest']}.

---

## Section C — Broad-default booking semantics

### Rule TM-12: Patient may always book at category level (broad-default doctrine)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody requires specific appointment-type selection at booking — patient cannot book broadly. Result: if patient doesn't know which Botox tier they want, they either pick wrong (creates rebooking) or abandon. Per user verbatim: "What if a client doesn't know what 'botox' type they want, now they see 5 tox options. Can they book this visit without knowing?"
2. **Cross-app evidence:**
   - **Restaurant reservations (OpenTable)** — Reserve a table for 4 at 7pm; menu choices happen AT the restaurant, not at booking.
   - **Calendly "any" availability** — Some event types are "any 30min slot"; specifics emerge at the meeting.
   - **Doctor's office "general consult"** — Schedule a consult; the consult kind / focus emerges during the visit.
   - **Hospital ER intake** — Patient arrives; triage determines specifics; specific procedure / department isn't pre-selected at booking.
3. **Underlying tenant need:** Patients often don't know specifics at booking time. The tenant must let them book at the category level ("Injectables" or "Provider Consult" or "Hydrafacial") without forcing premature specificity. Specifics emerge at intake / at visit. Tenant configures progressive disclosure depth per service.
4. **OMNI generic primitive / rule:** Broad-default booking doctrine per DL-15 + DL-19 + DL-20 preambles. `appointment_item.planned_service_id` and `planned_service_category_id` are FK NULL fields — exactly one populated. Category-level booking sets `planned_service_category_id = X`, `planned_service_id = NULL`, `planned_details` may be `{}` or partial.
5. **Divergence / improvement:** Mindbody forces specificity; OMNI admits category-level booking as a first-class pattern. Substrate explicitly supports "I don't know yet" state. Patient-facing rendering NEVER shows "Unknown Botox" (per TM-13).
6. **Anti-copy warning:** Do NOT require both planned_service_id and planned_service_category_id (either-or). Do NOT default missing planned_service_id to "default service" — keep it explicitly NULL. Do NOT bake category-level booking restriction into substrate (some categories may not be category-bookable; that's tenant policy via `service_category.self_bookable` BOOLEAN if added).
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 34 admits `planned_service_id FK NULL OR planned_service_category_id FK NULL` (exactly one populated). DL-15 + DL-19 + DL-20 preambles explicitly bind broad-default booking doctrine. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Patient self-booking flow at category-level entry point; staff appointment creation at category level.
9. **Required inputs:** `planned_service_category_id` (NOT NULL). Optional: `planned_details` (may be `{}`).
10. **Decision logic:**
    - Check constraint: `(planned_service_id IS NOT NULL) XOR (planned_service_category_id IS NOT NULL)`.
    - At category-level booking: `planned_service_id = NULL`, `planned_service_category_id = X`.
    - Booking composer (DL-15 inv 30) reads service_category to determine which axes apply (e.g., category may admit multiple services with different requirements; composer uses broadest superset for category-level booking).
    - Default planned_pricing_option_id = NULL (price resolved at checkout).
    - Default planned_quantity = NULL (resolved at visit).
11. **Output / state change:** Insert appointment_item with category-only FK populated. Emit `appointment_item.created` event with `booking_mode = 'category_level'` in payload.
12. **Owning substrate:** `appointment_item` (DL-20 inv 34).
13. **UI surface:** Patient self-booking — top-level service_category list serves as broad-default entry point; "Continue without specifying" / "I'll decide later" button visible at each drill-down level.
14. **Failure mode:** None — category-level booking is a first-class success state, not a fallback.
15. **Audit / event:** `appointment_item.created` with category-level mode flag.
16. **Evidence citations:** DL-20 inv 34 (planned_service_id OR planned_service_category_id check constraint) + DL-15 + DL-19 + DL-20 preambles (broad-default doctrine) + preferences locked §1 "Broad-default booking; rich is opt-in" + user verbatim quote.
17. **Test case:** Patient self-books "Injectables" category at 2pm Tuesday → appointment_item created with `planned_service_category_id = injectables_category.id`, `planned_service_id = NULL`, `planned_details = {}`. Schedule shows "Injectables — Sarah" at 2pm. At visit, provider determines patient wants Botox 24u; encounter_line created with `linked_appointment_item_id = X`, `performed_payload.units = 24`. Appointment closes with category-only planned + specific performed.

---

### Rule TM-13: Missing planned_details NEVER render as "Unknown" patient-facing

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody's UI shows raw enum / NULL values in some patient-facing surfaces (e.g., "Service: Botox - Type: -" with dash for missing). Per user verbatim: "I don't want 'unknown' showing up all over the schedule."
2. **Cross-app evidence:**
   - **Amazon "title only" listing** — When color/size not selected, shows just product title (not "Unknown color").
   - **Calendly default event display** — Shows event name, not "Default duration: Unknown."
   - **Restaurant reservation confirmation** — Shows "Dinner for 4" not "Dinner for 4, Cuisine: Unknown."
3. **Underlying tenant need:** Patient-facing surfaces must look clean regardless of data completeness. Missing structured data renders as the broadest available label (parent service or category), never as "Unknown X" or "Unspecified Y."
4. **OMNI generic primitive / rule:** Patient-facing rendering rule (UI projection, not substrate per se): if `appointment_item.planned_service_id` is NULL, render `service_category.name` (parent label). If `planned_details` is NULL or missing fields, render parent service name (or category) without detail. Never render "Unknown [whatever]" in patient view. Staff view may show "[empty]" or "[not specified]" badges for clarity.
5. **Divergence / improvement:** OMNI explicitly bans "Unknown" rendering in patient surfaces. Mindbody's pattern of showing raw enum values is replaced by cascade-to-parent-label projection.
6. **Anti-copy warning:** Do NOT use "Unknown" / "Unspecified" / "TBD" / "Pending" / "Not Set" / "—" / null-symbol as patient-facing label fallback. Do NOT render JSONB raw to patient (always parse + display readable label or omit).
7. **Substrate pressure-test verdict:** **OK** — This is a UI projection rule, not substrate change. DL-16 inv 3 category e projections cover. Doctrine reference: DL-19 preamble "patient-facing schedule renders the cleanest parent label."

#### Section B — Rule definition

8. **Trigger:** Patient-facing UI renders any appointment / appointment_item / encounter / encounter_line with missing planned_details.
9. **Required inputs:** Appointment / appointment_item rows with possibly-null planned_service_id / planned_details fields.
10. **Decision logic:**
    - If `planned_service_id IS NOT NULL`: render `service.name` as primary label.
    - Else if `planned_service_category_id IS NOT NULL`: render `service_category.display_name` (potentially appended with " Visit" or similar tenant-configured suffix from DL-19 inv 12 vocabulary).
    - Else: error case (should not occur given check constraint; log + render generic "Appointment").
    - For planned_details: if schema has display_template configured (DL-19 inv 12 vocabulary territory), render template with available fields; else omit details entirely.
    - NEVER include "Unknown" / "Unspecified" / "TBD" / null-token in patient render.
11. **Output / state change:** None (UI projection only).
12. **Owning substrate:** UI projection layer; reads `appointment_item` + `service` + `service_category` + tenant vocabulary. Cross-link DL-16 inv 3 category e (rendered projections).
13. **UI surface:** Patient portal calendar, confirmation emails, SMS reminders, in-app notifications, public booking confirmation page.
14. **Failure mode:** If service AND category both inactive at render time (extreme edge case), render generic tenant-vocabulary "Appointment" / "Visit" / "Treatment" (whatever DL-19 inv 12 maps for that tenant).
15. **Audit / event:** `ui.label_rendered_fallback_to_parent` (DEBUG-level analytics event for completeness tracking).
16. **Evidence citations:** DL-19 preamble (broad-default + clean patient-facing label) + preferences locked §1 "Broad-default booking" + user verbatim quote "I don't want 'unknown' showing up all over the schedule" + DL-16 inv 3 category e (projections).
17. **Test case:** Sarah books "Injectables" category-level. Confirmation email subject reads "Your Injectables appointment Tuesday May 19 at 2pm" (NOT "Your Unknown service appointment"). In-app calendar shows "Injectables — 2:00 PM" (NOT "—" or "Unknown"). Provider chart shows "[category-level booking; specifics TBD at visit]" badge but patient-facing remains clean.

---

### Rule TM-14: Schedule display projection rule — clean parent label always

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody schedule shows raw appointment-type names + Notes field. No abstraction layer between substrate and schedule render.
2. **Cross-app evidence:**
   - **Google Calendar event titles** — Render the event title as-given; no schema or projection layer.
   - **Hospital EHR calendar (Epic)** — Renders "Visit Type" cleanly; chart-specific clinical details hidden in chart view.
   - **OpenTable host view** — Shows party name + size + time; cuisine / special requests appear on hover or detail view.
3. **Underlying tenant need:** Staff schedule view must be scannable. Each appointment is one row with a clean label + minimal structured info. Detail drilling happens on click/hover. Patient view is even more compressed.
4. **OMNI generic primitive / rule:** Schedule projection rule: each appointment renders as ONE label (regardless of how many appointment_items it contains). Label hierarchy (in priority order):
    - (1) If 1 appointment_item: `appointment_item.linked_booking_preset.display_label` (preset wins if available — tenant marketing name)
    - (2) Else if 1 appointment_item: `service.name` (operational kind name)
    - (3) Else if 1 appointment_item with only category-level: `service_category.display_name`
    - (4) If multi-item: `appointment.bundled_from_preset_id.display_label` (bundle label per TM-10 verdict extension)
    - (5) Else if multi-item without bundle preset: tenant-vocabulary "Multi-Service Visit" or compose top 2 item labels ("Botox + Filler")
    - In all cases: NEVER "Unknown" / NEVER raw JSONB / NEVER tech labels
5. **Divergence / improvement:** Mindbody renders the raw appointment-type name. OMNI projects from preset → service → category hierarchy with composability. Multi-line appointments are first-class with bundle labeling.
6. **Anti-copy warning:** Do NOT show planned_quantity / treatment_areas / preferred_product in schedule label by default (those live in detail drawer). Do NOT show pricing_option name in label (price is checkout concern, not schedule). Do NOT concatenate everything (cluttered).
7. **Substrate pressure-test verdict:** **OK** — UI projection rule reads existing substrate. No new substrate needed. (TM-10 verdict extension covers `appointment.bundled_from_preset_id`.)

#### Section B — Rule definition

8. **Trigger:** Schedule view renders (staff calendar, patient portal calendar, day view, week view, list view, mobile calendar).
9. **Required inputs:** `appointment` + `appointment_items[]` + `service` + `service_category` + `booking_preset` data.
10. **Decision logic:** Apply priority hierarchy from §A.4 above. Resolution per appointment, projected at render time.
11. **Output / state change:** None (UI projection).
12. **Owning substrate:** Read-only across `appointment` + `appointment_item` + `service` + `service_category` + `booking_preset`.
13. **UI surface:** Schedule views (all surfaces — desktop / mobile / patient / staff).
14. **Failure mode:** If all FK targets inactive, render tenant-vocabulary fallback "Appointment" (never null/blank/Unknown).
15. **Audit / event:** None (projection only). Optional analytics event `schedule.label_resolved.<hierarchy_level>` for label-quality monitoring.
16. **Evidence citations:** DL-16 inv 3 category e (projections) + DL-19 inv 12 (vocabulary override) + preferences locked §1 "Broad-default booking" + TM-13.
17. **Test case:** (1) Single-item booking via "Botox Touch-Up" preset → schedule shows "Botox Touch-Up." (2) Single-item booking via "Neuromodulator" service directly → schedule shows "Neuromodulator." (3) Category-level booking via "Injectables" → schedule shows "Injectables." (4) Multi-item via "Full Facial Balancing" bundle → schedule shows "Full Facial Balancing" (bundle preset label). (5) Multi-item without bundle (3 separate items added at booking) → schedule shows "Neuromodulator + Filler" (top 2 composed).

---

### Rule TM-15: service.self_bookable_progressive_disclosure_mode controls patient drill-down depth (3-state ENUM)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody has a single boolean per appointment-type (Batch 13 Step 01: "Would you like to allow your clients to book this appointment online? Yes/No"). No graduated control over depth of patient-required input.
2. **Cross-app evidence:**
   - **Calendly per-event-type "Ask for additional info" toggle** — Per-event-type setting; 3 levels (skip / optional / required).
   - **OpenTable special request settings** — Per-restaurant setting for whether special requests are surfaced / required.
   - **Cal.com question requirement levels** — Per-question per-event-type (skip / optional / required).
3. **Underlying tenant need:** Different services have different need for upfront detail. Botox can be booked broadly ("come in and we'll figure it out"); LHR Brazilian needs to know which areas (so room equipment is right); biopsy needs intake form completed. The tenant must control per-service whether patients are forced into guided depth or admitted to broad-default.
4. **OMNI generic primitive / rule:** `service.self_bookable_progressive_disclosure_mode` ENUM 3 values per DL-19 preamble: (1) `none` — service not self-bookable by patient at all (staff-only); (2) `optional` — patient may drill into structured detail or skip (default; broad-default admitted); (3) `required` — patient must complete structured detail to commit. Mode is per-service tenant configuration in admin.
5. **Divergence / improvement:** Mindbody's all-or-nothing online_bookable boolean is replaced by 3-state ENUM that admits tenant-controlled depth. Default `optional` preserves broad-default doctrine while allowing tenant to override per-service.
6. **Anti-copy warning:** Do NOT make `required` the default — broad-default must be the default for patient UX. Do NOT bake disclosure depth into substrate at field-level granularity (too much complexity); per-service mode + per-field schema validation is the right level.
7. **Substrate pressure-test verdict:** **OK** — DL-19 preamble explicitly binds this ENUM on `service`. Per DL-15 inv 30 service substrate. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Patient self-booking flow renders service; admin edits service.
9. **Required inputs:** `service.self_bookable_progressive_disclosure_mode` ENUM (defaults to `optional`).
10. **Decision logic:**
    - On admin write: validate enum value ∈ 3 allowed values.
    - On patient self-booking render: if `none`, hide from patient view (staff-only); if `optional`, render basic form + "Add details (optional)" expansion; if `required`, render structured form with required fields per `service.planned_detail_schema`.
    - On patient submit: validate planned_details against schema; for `optional` mode, missing fields allowed; for `required` mode, schema-required fields enforced.
11. **Output / state change:** Filters patient view; gates submit validation.
12. **Owning substrate:** `service.self_bookable_progressive_disclosure_mode` (DL-15 inv 30; DL-19 preamble).
13. **UI surface:** Admin service edit form — dropdown. Patient self-booking — render mode varies per service.
14. **Failure mode:** If `required` and patient submits without details, surface inline error (NOT generic "Unknown" rendering). If `none`, service simply doesn't appear in patient view; patient never sees error.
15. **Audit / event:** `service.disclosure_mode_changed` per DL-16 amendment 42.
16. **Evidence citations:** DL-19 preamble (broad-default doctrine; self_bookable_progressive_disclosure_mode ENUM 3-state) + DL-15 inv 30 (service substrate) + preferences locked §1 + user verbatim quote "What if a client doesn't know what 'botox' type they want, now they see 5 tox options."
17. **Test case:** Tenant sets "Botox Touch-Up" preset's underlying Neuromodulator service to `disclosure_mode = optional` (default). Patient books → can skip planned_details. Tenant sets "LHR Brazilian" service to `disclosure_mode = required` with schema requiring treatment_areas[]. Patient books "Brazilian LHR" → form REQUIRES treatment_areas selection. Patient sets "Provider Consultation" service to `disclosure_mode = none` (staff schedules only). Patient does NOT see this service in self-booking; staff books on patient's behalf.

---

### Rule TM-16: Patient portal filters services by self_bookable_progressive_disclosure_mode

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody filters by online_bookable boolean (Batch 13 Step 01). Binary.
2. **Cross-app evidence:**
   - **Calendly "Public" vs "Private" event types** — Public visible at booking URL; private requires direct link.
   - **Cal.com "hidden" event types** — Hidden from public list; accessible via direct link.
3. **Underlying tenant need:** Patient portal must not surface services that aren't patient-self-bookable. Staff retains full visibility.
4. **OMNI generic primitive / rule:** Patient portal service query: `WHERE service.self_bookable_progressive_disclosure_mode != 'none' AND service.is_active = TRUE`. Staff query: all services (filtered only by staff capabilities + service.is_active).
5. **Divergence / improvement:** Same intent as Mindbody but reads from 3-state ENUM instead of boolean.
6. **Anti-copy warning:** Do NOT use `online_bookable` as a separate column — disclosure_mode covers it. Do NOT bake additional patient-filter logic (e.g., "patient_tier >= silver to see") at substrate; that's a separate access control concern (DL-18 patient capability flags).
7. **Substrate pressure-test verdict:** **OK** — Existing primitive (TM-15) covers.

#### Section B — Rule definition

8. **Trigger:** Patient self-booking flow renders service list.
9. **Required inputs:** `tenant_id`, service catalog query.
10. **Decision logic:** Apply filter `service.is_active = TRUE AND service.self_bookable_progressive_disclosure_mode IN ('optional', 'required')`. Booking_presets also filtered: `booking_preset.visible_in_self_booking = TRUE AND booking_preset.target_service (or target_category services) all pass above filter`.
11. **Output / state change:** Returns filtered service / preset list.
12. **Owning substrate:** Read-only on `service` + `booking_preset`.
13. **UI surface:** Patient portal booking page.
14. **Failure mode:** Empty list → render "No services available for self-booking right now. Please call us at [tenant phone] or [contact us link]" (NOT "Service Unknown").
15. **Audit / event:** Optional analytics: `patient_portal.service_list_rendered.count = N`.
16. **Evidence citations:** TM-15 (disclosure_mode ENUM) + DL-19 inv 19 (booking_preset.visible_in_self_booking) + Mindbody Batch 13 Step 01.
17. **Test case:** Tenant has 50 services; 35 with `disclosure_mode != 'none'` and `is_active = TRUE`. Patient portal shows 35; staff sees all 50. Tenant adds new "VIP Consultation" service with `disclosure_mode = 'none'`; patient view unchanged; staff view +1.

---

## Section D — Structured detail capture

### Rule TM-17: service.planned_detail_schema governs structured detail validation (JSONB Schema)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody has zero structured booking-detail schema. Free-form Notes + appointment-type name carry everything. Per user verbatim: "the service rendered, eg botox 36 units at checkout, while the service type gets tracked, everything recorded."
2. **Cross-app evidence:**
   - **JSON Schema** — Industry standard for declarative validation; widely used in Calendly question templates / OpenAPI / FHIR.
   - **FHIR resource definitions** — Each FHIR resource has a declarative schema; OMNI follows this pattern.
   - **HL7 v2 segments** — Field-level structured capture.
   - **Calendly question template** — Per-event-type questions with type (text/select/multiselect/etc.) + required flag.
3. **Underlying tenant need:** Per-service structured capture rules must be tenant-defined without code change. Tenant must declare which fields exist, what types, what's required, what allowed values. Validation runs at substrate write time, not app-layer-only.
4. **OMNI generic primitive / rule:** `service.planned_detail_schema` JSONB carrying JSON Schema document per DL-19 inv 18 + DL-19 inv 2 settings registry pattern. Schema fields admit standard JSON Schema types (string / number / boolean / array / enum / object). Per-field properties: type, required, default, enum, items, description, ui_hints (display label, render order). Schema versioned per DL-12. Backward-compatible additions accepted live; breaking changes require tenant migration plan.
5. **Divergence / improvement:** OMNI uses declarative schema instead of hardcoded fields per service kind. Tenant configures schema per service. Same substrate primitive supports any specialty (medspa treatment_areas, peptide dose tier, GLP-1 starting dose, Botox preferred product, HRT formulation choice) without code change.
6. **Anti-copy warning:** Do NOT bake specialty-specific fields into substrate columns (no `service.treatment_areas` or `service.preferred_product` columns — those live in schema-validated JSONB). Do NOT use a closed enum for schema field types — JSON Schema standard types are sufficient. Do NOT make schema mandatory (empty `{}` is valid; means no structured capture).
7. **Substrate pressure-test verdict:** **OK** — DL-15 inv 30 service substrate + DL-19 inv 2 settings registry pattern (value_schema JSON Schema) cover. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Admin defines or edits service schema; appointment_item write validates against schema.
9. **Required inputs:** `service.planned_detail_schema` JSONB (defaults to `{}` empty schema).
10. **Decision logic:**
    - On admin write: validate schema is well-formed JSON Schema; reject if malformed.
    - On `appointment_item.planned_details` write: validate against current service.planned_detail_schema; reject substrate write if invalid (CHECK constraint level, not app-layer-only).
    - Schema version (DL-12) bumped on breaking changes; backward-compatible additions don't bump version.
    - For schema with `enum` typed fields, admin UI renders dropdowns; for `array` typed, multi-select; for `string`, text input; etc.
11. **Output / state change:** Insert/update `service.planned_detail_schema`; emit `service.schema_changed` with diff.
12. **Owning substrate:** `service.planned_detail_schema` JSONB (DL-15 inv 30; DL-19 inv 2 registry pattern).
13. **UI surface:** Admin service edit form → schema editor (JSON or visual form-builder). Patient self-booking + staff appointment edit → schema-driven form.
14. **Failure mode:** Malformed schema rejected at admin write. Invalid planned_details rejected at appointment_item write. NEVER patient-facing "Schema error" — render generic "Some details were missing; please review."
15. **Audit / event:** `service.schema_changed` per DL-16 amendment 42 with version increment.
16. **Evidence citations:** DL-15 inv 30 + DL-19 inv 2 + DL-19 inv 18 + DL-12 versioning + preferences locked §1 "Free text vs structured."
17. **Test case:** Tenant defines LHR service schema: `{type: 'object', properties: {treatment_areas: {type: 'array', items: {type: 'string', enum: ['brazilian', 'underarms', 'full_legs', 'half_legs', 'back', 'chest', 'shoulders']}, required: true}}}`. Patient books LHR; UI renders multi-select; patient picks 'brazilian' + 'underarms'; substrate validates + persists. Tenant later adds 'lip_chin' to enum (backward-compatible); existing schema rows unchanged. Tenant removes 'shoulders' (breaking change); DL-12 version bumped + migration plan required.

---

### Rule TM-18: appointment_item.planned_details validation runs at booking commit (substrate CHECK)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** No structured planned-detail validation. Free-form Notes accept anything.
2. **Cross-app evidence:**
   - **PostgreSQL JSONB + CHECK constraint** — Industry-standard pattern for substrate-level JSONB validation.
   - **FHIR validator** — Server-side validation against resource schemas.
   - **Calendly question response validation** — At-submit validation per event-type schema.
3. **Underlying tenant need:** Validation must happen at substrate write time, not only at app layer. App can drift; substrate is canonical. Bad data should never persist.
4. **OMNI generic primitive / rule:** `appointment_item.planned_details` JSONB validated against `service.planned_detail_schema` (resolved from `appointment_item.planned_service_id`) via PostgreSQL CHECK constraint or trigger. If validation fails, write rejected at substrate level.
5. **Divergence / improvement:** Substrate-level validation enforces correctness regardless of app version. Per DL-19 inv 8 cross-DL discipline: "substrate-level enforcement (NOT app-layer-only)."
6. **Anti-copy warning:** Do NOT validate only at app layer. Do NOT skip validation when planned_service_id is NULL — schema is per-service, so category-level booking skips this validation cleanly. Do NOT silently coerce invalid data; reject.
7. **Substrate pressure-test verdict:** **OK** — DL-19 inv 8 + DL-15 inv 30 + DL-19 inv 18 cover. PostgreSQL has JSONB schema validation via trigger/function. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Insert or update `appointment_item.planned_details`.
9. **Required inputs:** `appointment_item.planned_service_id` (may be NULL for category-level), `appointment_item.planned_details` JSONB.
10. **Decision logic:**
    - If `planned_service_id IS NOT NULL`: resolve `service.planned_detail_schema`; validate `planned_details` against schema; reject write if invalid.
    - If `planned_service_id IS NULL` (category-level): skip schema validation; accept any JSONB (or empty).
    - Validation: type-check, enum-check, required-field-check per schema.
    - Atomic with appointment_item insert/update.
11. **Output / state change:** Either successful write or rejection. On reject: app surfaces inline error.
12. **Owning substrate:** `appointment_item` (DL-20 inv 34) + `service.planned_detail_schema` (TM-17). Validation via trigger or CHECK function.
13. **UI surface:** Patient self-booking + staff appointment edit. Validation error inline.
14. **Failure mode:** Reject write with structured error code (field-level: "treatment_areas is required") → app surfaces patient-friendly inline message. NEVER substrate panic.
15. **Audit / event:** `appointment_item.planned_details_validation_failed` (analytics; not standard event).
16. **Evidence citations:** DL-19 inv 8 (substrate-level enforcement) + DL-19 inv 18 (service_policy) + TM-17 + DL-12.
17. **Test case:** Patient books LHR; substrate enforces schema. App sends `planned_details = {treatment_areas: ['invalid_area']}`; substrate rejects (enum violation); app surfaces "Invalid treatment area selection." Patient corrects to `['brazilian']`; substrate accepts. Patient books "Injectables" category-level → planned_service_id NULL → validation skipped → empty planned_details accepted.

---

### Rule TM-19: Per-unit quantity captured as appointment_item.planned_quantity (per_unit_quantity strategy)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody captures quantity only at checkout (via 7-tier Botox-as-product workaround). Booking flow cannot capture planned quantity.
2. **Cross-app evidence:**
   - **Restaurant POS quantity field** — Each menu item has quantity; defaults to 1; staff edits.
   - **Hospital OR units captured** — Surgical supplies tracked per-unit at procedure time.
   - **Pharmacy fill quantity** — Captured at prescription writing AND at dispense.
3. **Underlying tenant need:** Some services have variable planned quantity (Botox 20u / 40u / 60u; LHR 3 areas / 5 areas; PRP 1 vial / 2 vials). Tenant must capture planned quantity at booking (so room/staff time can be estimated) AND actual quantity at delivery.
4. **OMNI generic primitive / rule:** `appointment_item.planned_quantity` NUMERIC NULL captures planned. `encounter_line.performed_payload.units_or_syringes` captures actual. Reconciliation: planned vs performed surfaces in analytics + commerce.
5. **Divergence / improvement:** Per TM-06 — OMNI's quantity_strategy eliminates Mindbody's 7-tier workaround. Planned vs performed separation matches FHIR planned vs documented distinction.
6. **Anti-copy warning:** Do NOT require planned_quantity always (NULL allowed; staff resolves at visit). Do NOT bake quantity into service name. Do NOT collapse planned + performed into one field.
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 34 (planned_quantity) + DL-20 inv 13 (performed_payload.units_or_syringes). No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Booking flow with `service.quantity_strategy = per_unit_quantity`.
9. **Required inputs:** `appointment_item.planned_quantity` NUMERIC (optional at booking; required for some service modes).
10. **Decision logic:**
    - If `service.quantity_strategy = per_unit_quantity` AND `service.self_bookable_progressive_disclosure_mode = required`: planned_quantity required at booking.
    - If `service.quantity_strategy = per_unit_quantity` AND mode = optional: planned_quantity optional; defaults to NULL if patient skips.
    - If `service.quantity_strategy = fixed_quantity`: planned_quantity defaults to 1; not user-entered.
    - Min/max bounds per `service.planned_detail_schema.quantity` or `pricing_option.min_quantity` / `max_quantity` (DL-17 inv 5).
11. **Output / state change:** `appointment_item.planned_quantity` populated; analytics tracks planned vs eventual performed.
12. **Owning substrate:** `appointment_item.planned_quantity` (DL-20 inv 34).
13. **UI surface:** Booking form — quantity stepper when applicable.
14. **Failure mode:** Out-of-range quantity rejected at substrate (CHECK constraint with pricing_option bounds).
15. **Audit / event:** `appointment_item.planned_quantity_set` per DL-16 amendment 42.
16. **Evidence citations:** DL-20 inv 34 + DL-15 amendment 5 inv 33 + DL-17 inv 5 + TM-06.
17. **Test case:** Sarah books "Neuromodulator Visit" (quantity_strategy = per_unit_quantity) with planned_quantity = 24. At visit, actual = 26; encounter_line.performed_payload.units = 26. Analytics shows variance.

---

### Rule TM-20: Treatment areas captured as planned_treatment_areas[] for area-bearing services

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody requires staff to type treatment areas in Notes or pick a different appointment-type per area combo (e.g., "Brazilian LHR" vs "Full Body LHR" as separate services). Per user verbatim: "we want to know if there's botox, Dysport, jeaveau, cheek filler, lip filer all during one visit. Consider how other platforms or even other industries would solve this problem."
2. **Cross-app evidence:**
   - **Restaurant POS modifier toggles** — Per-item modifiers ("no onion" / "extra cheese") as array.
   - **Hospital OR procedure body regions** — Surgery sites recorded per case (left knee / right knee / both).
   - **Tax software deductions** — Itemized deduction array.
3. **Underlying tenant need:** Some services are "performed on N areas" where N is variable (LHR Brazilian = 1 area; Full Body = 5+ areas; neuromodulator face = 1-5 areas). Tenant must capture planned AND performed areas. Pricing may scale per area (per_unit_quantity).
4. **OMNI generic primitive / rule:** `appointment_item.planned_treatment_areas[]` ARRAY (typed via `service.planned_detail_schema.treatment_areas.items.enum`). Enum values are tenant-defined per service. `encounter_line.performed_payload.treatment_areas[]` captures actual.
5. **Divergence / improvement:** OMNI uses tenant-defined enum array instead of free-text or service-row duplication. Same LHR service supports any combination of areas.
6. **Anti-copy warning:** Do NOT enumerate treatment areas at OMNI substrate level (`treatment_area_brazilian` is tenant catalog, not OMNI enum). Do NOT model each area as a separate appointment_item by default (single LHR service + multi-area capture is cleaner; multi-item for combo bundles per TM-10).
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 34 carries `planned_treatment_areas[] ARRAY`. Per `service.planned_detail_schema` enum constrains values per service. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Booking flow for service with `planned_detail_schema.treatment_areas` defined.
9. **Required inputs:** `appointment_item.planned_treatment_areas[]` ARRAY (optional at booking unless schema marks required).
10. **Decision logic:**
    - Schema-validated per TM-18.
    - Patient picks multi-select; saved as ARRAY.
    - Reconciliation at encounter_line: performed_areas may differ from planned (patient added/removed); analytics captures variance.
11. **Output / state change:** `appointment_item.planned_treatment_areas[]` populated; emit event.
12. **Owning substrate:** `appointment_item.planned_treatment_areas[]` (DL-20 inv 34) + `encounter_line.performed_payload.treatment_areas[]` (DL-20 inv 13).
13. **UI surface:** Booking form — multi-select chips/checkboxes.
14. **Failure mode:** Invalid area value (not in schema enum) rejected per TM-18.
15. **Audit / event:** `appointment_item.treatment_areas_set` per DL-16 amendment 42.
16. **Evidence citations:** DL-20 inv 34 + DL-20 inv 13 + TM-17 + TM-18 + user verbatim.
17. **Test case:** "Brazilian LHR" preset → planned_treatment_areas = ['brazilian']. At visit, patient adds underarms; staff updates encounter_line.performed_payload.treatment_areas = ['brazilian', 'underarms']. Analytics shows planned vs performed variance for upsell analysis.

---

## Section E — Multi-line visit + add-ons

### Rule TM-21: Add-on is appointment_item with parent_item_id (NOT a new "add-on visit type" enum)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody has a "Convert to add-on" boolean per appointment-type (Batch 13 Step 01 evidence: "Do you want to convert this appointment to an add-on? Yes/No"). Add-ons are a TYPE of appointment-type. Inconsistent with the model — an add-on is the relationship to another visit, not a kind of visit.
2. **Cross-app evidence:**
   - **Restaurant POS** — Sides and modifiers attach to a parent menu item via parent-child relationship; they're not "side dishes" type.
   - **Airline baggage add-on** — Bag added to a reservation, not a new reservation type.
   - **Hotel room upgrades** — Spa visit add-on to room reservation.
3. **Underlying tenant need:** Some services are typically performed as add-ons to a main visit (lip flip add-on to Botox; gloss treatment add-on to facial; tip line on a haircut). Substrate must model the parent-child relationship without conflating it with the service kind.
4. **OMNI generic primitive / rule:** Add-on is an `appointment_item` with `parent_item_id` FK populated per DL-20 inv 34. The service itself may also have `is_addon = TRUE` flag (UI hint: surface in "Add to your visit" admin section), but the substrate semantic is the parent-child link, not the flag.
5. **Divergence / improvement:** Mindbody's "Convert to add-on" type conflation is fixed. Same service may appear as standalone OR as add-on per booking; relationship lives on appointment_item, not on service.
6. **Anti-copy warning:** Do NOT model add-ons as a separate service_type ENUM value (`service_type = 'addon'`). Do NOT collapse add-ons into the parent appointment_item's `planned_details` JSONB (lose per-item provider attribution + per-item state). Do NOT require add-ons to have `is_addon = TRUE` — service may be standalone OR add-on per booking.
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 34 `parent_item_id FK NULL` (for add-ons) covers this. DL-15 inv 30 service has `is_addon` BOOLEAN as a UI hint. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Patient or staff adds an "add-on" item to an existing or in-progress booking.
9. **Required inputs:** `appointment_id` FK, `parent_item_id` FK (the parent appointment_item this is an add-on to), `planned_service_id` FK (the add-on service).
10. **Decision logic:**
    - Add-on inherits parent's `provider_id` / `room_id` / `resource_id` UNLESS add-on service has different requirements (4-axis composer per DL-15 inv 30 evaluates).
    - Add-on `sequence_index` is parent.sequence_index + 0.5 (insert between parent and next, or after).
    - Pricing add-on at checkout: separate `commerce_order_line` linked to the appointment_item.
11. **Output / state change:** Insert appointment_item with `parent_item_id` populated.
12. **Owning substrate:** `appointment_item.parent_item_id` (DL-20 inv 34).
13. **UI surface:** Booking flow — "Add an add-on" section. Schedule detail — child items indented under parent.
14. **Failure mode:** If parent item cancelled/skipped, ask user about add-on (may proceed independently or cancel cascade per service).
15. **Audit / event:** `appointment_item.created` with `addon` flag in payload.
16. **Evidence citations:** DL-20 inv 34 (parent_item_id) + DL-15 inv 30 (is_addon flag) + Mindbody Batch 13 Step 01 (Convert to add-on) + post-mortem Pattern 7 (avoiding type conflation).
17. **Test case:** Sarah books Botox visit (parent appointment_item: Neuromodulator service). Adds Lip Flip add-on → appointment_item materialized with parent_item_id = Neuromodulator item id, sequence_index = 1.5, inherits provider. At checkout: separate commerce_order_line for Lip Flip. Provider performs both; encounter_lines linked back to each item.

---

### Rule TM-22: Multi-line visit = one appointment + N appointment_items (no "combo visit type" enum)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody cannot model multi-line atomic visits cleanly. User books 3 separate appointments back-to-back. No shared confirmation, no shared cancellation policy.
2. **Cross-app evidence:**
   - **Airline PNR** — One reservation, multiple flight segments.
   - **Restaurant tab** — One tab, multiple courses + items.
   - **Hospital OR session** — One operative session, multiple procedures.
   - **Salon multi-service visit** — One booking, color + cut + treatment.
3. **Underlying tenant need:** A single patient trip may involve multiple services (Hydrafacial + injector + red light from preferences locked). Must model as ONE booking with shared confirmation, shared cancellation, but per-item state and per-item provider.
4. **OMNI generic primitive / rule:** `appointment` is the container per DL-20 inv 33. `appointment_item × N` are the children per DL-20 inv 34. No multi-line "type" enum — multi-line is the natural state when N appointment_items exist.
5. **Divergence / improvement:** OMNI's 3-layer foundation explicitly admits multi-line; appointment is the synchronous-trip container.
6. **Anti-copy warning:** Do NOT create `service_type = 'combo_visit'` or `appointment_type = 'multi_service'`. Multi-line is structural (count of appointment_items), not typed.
7. **Substrate pressure-test verdict:** **OK** — DL-20 inv 33-34 cover. Bundle preset (TM-10) is the affordance pattern; multi-line is the substrate result.

#### Section B — Rule definition

8. **Trigger:** Booking with multiple service selections; bundle preset selection; staff adds line at appointment edit.
9. **Required inputs:** Multiple appointment_item rows.
10. **Decision logic:** Each item materialized per single-item rule (TM-08) with shared appointment_id. Sequence_index ordered. 4-axis composer ensures all axes can be satisfied atomically per DL-15 inv 2.
11. **Output / state change:** One appointment + N items.
12. **Owning substrate:** DL-20 inv 33-34.
13. **UI surface:** Schedule shows one block; click expands to N items. Cancellation operates at appointment OR per-item level.
14. **Failure mode:** Per-item cancellation does not cascade to appointment unless all items cancelled.
15. **Audit / event:** `appointment_booked` + N × `appointment_item.created`.
16. **Evidence citations:** DL-20 inv 33-34 + preferences locked §1 "Multi-line visit reality" + DL-15 inv 2.
17. **Test case:** Sarah books Hydrafacial + Botox + Red Light → one appointment, 3 items. Mid-visit she declines Red Light; item_state = skipped_at_visit; appointment.status = completed.

---

### Rule TM-23: Bundle preset materializes N appointment_items at booking commit

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** No bundle pattern. Patient + staff manually create multiple appointments.
2. **Cross-app evidence:**
   - **Restaurant combo materialization** — Selecting "Combo #3" auto-materializes sandwich + side + drink line items.
   - **Travel package booking** — Selecting "Hawaii package" materializes flight + hotel + car rows.
3. **Underlying tenant need:** When tenant offers pre-defined combos, patient should be able to book in ONE action and have substrate materialize the multiple items atomically.
4. **OMNI generic primitive / rule:** Bundle preset selection at booking → resolve `bundled_member_preset_ids[]` → per-member preset run TM-08 single-item resolution → materialize N appointment_items atomically (per DL-16 inv 6).
5. **Divergence / improvement:** Per TM-10. Bundle is a PRESET shape, not a service shape.
6. **Anti-copy warning:** Do NOT auto-cancel sibling items if patient skips one — each has independent state.
7. **Substrate pressure-test verdict:** **OK** — Covered by TM-10 substrate. (TM-10 verdict extension on `appointment.bundled_from_preset_id` applies.)

#### Section B — Rule definition

8. **Trigger:** Bundle booking_preset selected.
9. **Required inputs:** `booking_preset.id` with bundled_member_preset_ids[].
10. **Decision logic:** Per TM-10; atomic per DL-16 inv 6.
11. **Output / state change:** One appointment + N items.
12. **Owning substrate:** Per TM-10.
13. **UI surface:** Patient sees one bundle button; preview shows member items; confirm commits all.
14. **Failure mode:** If any member fails atomicity, whole bundle rejected; patient retries.
15. **Audit / event:** `appointment_booked` + N × item events.
16. **Evidence citations:** TM-10 + DL-16 inv 6 + DL-19 inv 19.
17. **Test case:** "Bloom Glow Package" bundle → 3 items materialized atomically. If one service inactive, entire bundle rejected.

---

## Section F — Catalog operations + lifecycle

### Rule TM-24: service / pricing_option / booking_preset are disabled-not-deleted (soft-delete)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody preserves disabled items for historical integrity (Batch 13 Step 04: 5 disabled pricing options retained for naming migration). "Show disabled pricing options" toggle. Per Step 06 ⋮ menu Disassociate / Deactivate distinct.
2. **Cross-app evidence:**
   - **Stripe API archived state** — Price/product objects archived (not deleted) so historical invoices remain valid.
   - **Shopify product status** — Active / Draft / Archived; archived preserves orders.
   - **GitHub repository archived state** — Archived repo readable, not writable.
3. **Underlying tenant need:** Tenant evolves catalog over time (renames, restructures, retires). Historical bookings, entitlements, and audit trails must remain queryable + readable indefinitely. Hard delete breaks history.
4. **OMNI generic primitive / rule:** `is_active` BOOLEAN on `service`, `pricing_option`, `booking_preset`, `service_category`. Deactivation sets `is_active = FALSE`; substrate row retained. UI filters by `is_active = TRUE` for active surfaces; admin view + historical reads include inactive.
5. **Divergence / improvement:** Matches Mindbody preserve-pattern; explicit `is_active` per substrate. No hard delete except via tenant retention policy per DL-16 inv 13.
6. **Anti-copy warning:** Do NOT hard-delete catalog rows. Do NOT cascade-deactivate on dependency change (e.g., deactivating a service shouldn't auto-deactivate pricing_options; admin must explicitly choose).
7. **Substrate pressure-test verdict:** **OK** — `is_active` BOOLEAN is standard pattern; DL-12 versioning + DL-16 inv 13 retention cover. No new substrate needed.

#### Section B — Rule definition

8. **Trigger:** Admin deactivates a catalog item.
9. **Required inputs:** Catalog row id, `is_active = FALSE`.
10. **Decision logic:**
    - Set `is_active = FALSE`; preserve row.
    - Cascading deactivation NOT automatic (admin warning surfaces affected presets / assignments).
    - Disassociation per TM-04 is distinct from deactivation.
11. **Output / state change:** `is_active` flipped. Emit `<entity>.deactivated` event.
12. **Owning substrate:** `service.is_active`, `pricing_option.is_active`, `booking_preset.active`, `service_category.is_active`.
13. **UI surface:** Admin catalog views; "Show inactive" toggle.
14. **Failure mode:** If deactivating last active pricing option for a service, warn admin that service becomes uncheckoutable.
15. **Audit / event:** `service.deactivated` / `pricing_option.deactivated` etc. per DL-16 amendment 42.
16. **Evidence citations:** Mindbody Batch 13 Step 04 + Step 06 + DL-12 + DL-16 inv 13.
17. **Test case:** Tenant deactivates "BH HydraFacial – Deluxe" pricing option. Existing entitlements remain redeemable; new sales cannot select it; historical reports show it; "Show inactive" admin view surfaces it.

---

### Rule TM-25: service_pricing_option_assignment Disassociate vs Deactivate distinct semantics

**Phase:** DAY_0

(Covered in detail in TM-04 above. Brief re-statement for completeness:)

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 13 Step 06 — 3-action ⋮ menu.
2. **Cross-app evidence:** Stripe price archival (per-product unlink vs global archive).
3. **Underlying tenant need:** Granular vs global retire.
4. **OMNI generic primitive / rule:** Per TM-04: `service_pricing_option_assignment.disassociated_at` (per-service unlink) distinct from `pricing_option.is_active = FALSE` (global deactivate).
5. **Divergence / improvement:** Matches Mindbody pattern; OMNI adds temporal granularity.
6. **Anti-copy warning:** Do NOT collapse the two verbs into one.
7. **Substrate pressure-test verdict:** **OK** (covered by TM-04).

#### Section B — Rule definition

8. **Trigger:** Admin selects Disassociate OR Deactivate from ⋮ menu.
9. **Required inputs:** Pricing_option id, service_id (for Disassociate), action.
10. **Decision logic:** Per TM-04 above. Disassociate: `disassociated_at = NOW()`. Deactivate: `is_active = FALSE` global.
11. **Output / state change:** Per TM-04.
12. **Owning substrate:** Per TM-04.
13. **UI surface:** Per TM-04 ⋮ menu.
14. **Failure mode:** Per TM-04.
15. **Audit / event:** Per TM-04.
16. **Evidence citations:** TM-04 + Mindbody Batch 13 Step 06.
17. **Test case:** Per TM-04 test case.

---

### Rule TM-26: service_category hierarchy depth is tenant-controlled (no OMNI cap)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody caps hierarchy at 2 levels. Limits operational expression for specialties like derm (where service catalog naturally has more depth) and Hims-style multi-modality offerings.
2. **Cross-app evidence:**
   - **Amazon browse hierarchy** — Arbitrary depth (Electronics → Computers → Laptops → Gaming Laptops → 14-inch Gaming Laptops).
   - **Restaurant menu hierarchy** — Section → category → item → variant.
   - **Hospital service line hierarchy** — Service line → Department → Division → Specialty.
3. **Underlying tenant need:** Different specialties have different natural hierarchy depths. Medspa typically shallow (3 levels); derm medium (4-5); hospital deep (6+). Substrate must admit arbitrary depth; UI may impose soft cap.
4. **OMNI generic primitive / rule:** `service_category.parent_category_id` FK NULL (per TM-01) admits unlimited recursive depth. No substrate cap.
5. **Divergence / improvement:** Mindbody's hard 2-level cap removed.
6. **Anti-copy warning:** Do NOT bake hierarchy depth limit at substrate. Do NOT enforce category numbering — sort_order is tenant-controlled integer.
7. **Substrate pressure-test verdict:** **OK** — Covered by TM-01.

#### Section B — Rule definition

8. **Trigger:** Tenant admin creates nested service_category.
9. **Required inputs:** `parent_category_id` FK (may be NULL for top-level).
10. **Decision logic:** Reject cycles. Accept arbitrary depth.
11. **Output / state change:** Insert/update row.
12. **Owning substrate:** `service_category.parent_category_id` (TM-01).
13. **UI surface:** Admin tree view; UI may impose 6-level soft cap for usability (tenant-overridable).
14. **Failure mode:** Cycle detected → reject.
15. **Audit / event:** `service_category.created` + `service_category.reparented`.
16. **Evidence citations:** TM-01 + Amazon hierarchy + hospital service-line evidence.
17. **Test case:** Hims-style tenant creates: "Peptides" (top) → "Wellness Peptides" (level 2) → "BPC-157" (level 3) → "BPC-157 Injectable" (level 4) → "BPC-157 Injectable 250mcg/wk" (level 5). All admitted by substrate. UI renders breadcrumb.

---

### Rule TM-27: Tenant vocabulary override renames concepts without substrate change

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody supports per-brand "Words and Phrases" vocabulary override (Layer 2 C.4: medspa uses "treatment" / "client" / "package").
2. **Cross-app evidence:**
   - **Salesforce custom labels** — Per-org label override.
   - **Shopify locale customization** — Per-shop renaming of terms.
   - **i18n in apps** — Translation layer, but vocabulary override is per-brand brand-domain customization.
3. **Underlying tenant need:** Different specialties use different terminology. Medspa "treatment" vs derm "visit" vs Hims "consult." Substrate stays canonical; UI rendering reads tenant vocabulary at render time.
4. **OMNI generic primitive / rule:** `tenant_vocabulary_override` substrate per DL-19 inv 12. Maps canonical OMNI terms (appointment, member, pricing_option, service) to tenant labels. UI render reads vocabulary at projection time.
5. **Divergence / improvement:** Matches Mindbody pattern; OMNI cleanly separates substrate naming (canonical) from UI rendering (tenant-controlled).
6. **Anti-copy warning:** Do NOT change substrate column names per tenant. Do NOT bake tenant vocabulary into substrate values.
7. **Substrate pressure-test verdict:** **OK** — DL-19 inv 12 covers.

#### Section B — Rule definition

8. **Trigger:** UI renders any term that has tenant vocabulary override.
9. **Required inputs:** `tenant_vocabulary_override` rows; canonical term being rendered.
10. **Decision logic:** Resolve `original_word` → `override_word` per tenant scope; fall back to canonical if no override.
11. **Output / state change:** UI text rendering.
12. **Owning substrate:** `tenant_vocabulary_override` (DL-19 inv 12).
13. **UI surface:** All patient-facing + staff-facing surfaces.
14. **Failure mode:** Missing override → canonical term rendered (no failure).
15. **Audit / event:** None standard.
16. **Evidence citations:** DL-19 inv 12 + Mindbody Layer 2 C.4.
17. **Test case:** Medspa tenant overrides "appointment" → "treatment" + "member" → "client". UI renders "Treatment booked" instead of "Appointment booked." Substrate canonical names unchanged. Derm tenant uses defaults.

---

## Section G — Anti-leakage discipline (cross-cutting)

### Rule TM-28: NO specialty visit types in substrate (no aesthetic_visit, derm_visit, etc.)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody allows tenant to name service categories freely ("Medical Visits" / "Injectables" / "Facials"). The category name IS tenant catalog. No substrate-level specialty enum.
2. **Cross-app evidence:**
   - **Epic** — Service Line / Department is tenant-configured; no Epic enum for "Specialty."
   - **FHIR** — Encounter resource has `serviceType` CodeableConcept (tenant-extensible code system); no fixed enum.
3. **Underlying tenant need:** Specialty-specific labeling is tenant CATALOG concern, never OMNI substrate concern. Same substrate primitives serve medspa / derm / Hims / GI / cardio / endocrine / sleep.
4. **OMNI generic primitive / rule:** Service / service_category / booking_preset names are tenant-defined STRINGs. No `service_type` enum value, no `service_category` enum value, no `booking_preset.kind` enum value contains specialty-coded vocabulary.
5. **Divergence / improvement:** Per system_map Cross-DL warning + preferences locked + post-mortem Pattern 7. Mindbody's "Medical Visits" category is tenant catalog, NOT OMNI enum.
6. **Anti-copy warning:** Forbidden values: `aesthetic_visit`, `aesthetic_office_visit`, `medspa_visit`, `medspa_appt`, `derm_visit`, `derm_appt`, `plastics_visit`, `gi_visit`, `cardio_visit`, `endocrine_visit`, `sleep_visit`, `provider_visit`, `injectable_visit`, `peptide_visit`, `hrt_visit`, `glp1_visit`. All forbidden.
7. **Substrate pressure-test verdict:** **OK** — System_map Cross-DL warning + DL-15 amendment 32 service_type 5-enum + DL-20 inv 35 encounter.modality 4-enum + DL-20 inv 41 rejected patterns enumerate. No new substrate; this rule enforces existing doctrine.

#### Section B — Rule definition

8. **Trigger:** Admin attempts to add substrate enum value that includes specialty vocabulary; code review detects specialty-coded value in DL DRAFT or system_map.
9. **Required inputs:** Substrate enum extension proposal.
10. **Decision logic:** Reject any enum extension that includes specialty vocabulary. Tenant naming via STRING fields is unconstrained; substrate ENUM additions are gated by Cross-DL warning compliance.
11. **Output / state change:** None at runtime (this is a doctrine enforcement rule); pre-commit hook may flag.
12. **Owning substrate:** Cross-DL warning enforcement layer + DL review process.
13. **UI surface:** Admin sees rejected change with explanation.
14. **Failure mode:** Specialty value attempted → rejected at code review or DL amendment review.
15. **Audit / event:** `doctrine.cross_dl_warning_violated_at_review` (DEBUG).
16. **Evidence citations:** System_map Cross-DL warning + preferences locked §1 "No specialty leakage" + post-mortem Pattern 7 + user verbatim quote.
17. **Test case:** Developer proposes adding `service_type = 'aesthetic_visit'` to DL-15 amendment 32. Code review rejects citing Cross-DL warning. Tenant Bloom Health adds service_category "Medical Visits" via admin UI → accepted (tenant catalog string, not substrate enum).

---

### Rule TM-29: NO vendor names in service / pricing_option substrate (vendor names are tenant labels)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody allows vendor names freely in catalog (Botox / Dysport / Daxxify / Hydrafacial / SkinPen). These are tenant catalog labels, not Mindbody enum values.
2. **Cross-app evidence:**
   - **Stripe products** — Product names are tenant-defined STRING.
   - **Shopify** — Product names tenant-defined.
3. **Underlying tenant need:** Vendor names live in tenant catalog (service.name, booking_preset.display_label, planned_details.preferred_product). Substrate stays generic.
4. **OMNI generic primitive / rule:** Service / pricing_option / booking_preset names = tenant STRING. No enum values contain vendor names.
5. **Divergence / improvement:** Per system_map Cross-DL warning + DL-17 inv 18 payment_method tenant label pattern.
6. **Anti-copy warning:** Forbidden: `service_kind_botox`, `service_kind_dysport`, `pricing_option_alle`, `booking_preset_hydrafacial_signature`. All forbidden as substrate enum values; valid as tenant STRING values.
7. **Substrate pressure-test verdict:** **OK** — System_map Cross-DL warning + DL-17 inv 18 (payment_method tenant label) + DL-22 (Canfield Visia → partner_imaging_device + string label).

#### Section B — Rule definition

8. **Trigger:** Code review / DL amendment review.
9. **Required inputs:** Substrate enum proposal.
10. **Decision logic:** Reject vendor-named enum values.
11. **Output / state change:** None at runtime; doctrine review enforcement.
12. **Owning substrate:** Cross-DL warning layer.
13. **UI surface:** Admin can freely name catalog rows with vendor names.
14. **Failure mode:** Reject vendor enum proposal.
15. **Audit / event:** Per TM-28.
16. **Evidence citations:** System_map Cross-DL warning + DL-17 inv 18 + DL-22 (Canfield example) + preferences locked §1 "No vendor names in substrate" + user verbatim about Allē/Aspire/Cherry.
17. **Test case:** Tenant catalog: service.name = "Botox Touch-Up" → accepted (STRING). Developer proposes `service_kind = 'botox'` enum → rejected at code review. Tenant Bloom Health adds booking_preset.display_label = "Daxxify 30u" → accepted (tenant catalog).

---

### Rule TM-30: "Visit type" is NOT a substrate concept — it's a tenant catalog projection

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody conflates "appointment type" = "visit type" = "service" all into one table. UI uses "appointment type" / "service" interchangeably.
2. **Cross-app evidence:**
   - **FHIR Encounter.type vs Appointment.serviceType** — Both are CodeableConcept (tenant-extensible code system), NOT FHIR-fixed enums.
   - **Epic departments and service lines** — Tenant-configured.
3. **Underlying tenant need:** "Visit type" is what the patient/staff calls the bookable affordance in their day-to-day vocabulary. Substrate doesn't need a "visit_type" column or enum because it's a projection of (booking_preset.display_label OR service.name OR service_category.display_name) per TM-14.
4. **OMNI generic primitive / rule:** No substrate column or enum named `visit_type`. Patient/staff vocabulary "visit type" maps to TM-14 schedule projection rule (preset.display_label → service.name → service_category.display_name).
5. **Divergence / improvement:** Per system_map Cross-DL warning + post-mortem Pattern 7. Eliminates the Mindbody conflation.
6. **Anti-copy warning:** Forbidden: any substrate column / enum named `visit_type` / `appointment_type` / `service_kind_visit`. The closest substrate concept is `booking_preset` (TM-07) for tenant-facing affordance OR `service` (TM-02) for operational kind.
7. **Substrate pressure-test verdict:** **OK** — Existing primitives (booking_preset + service + service_category) cover all "visit type" needs. No new substrate.

#### Section B — Rule definition

8. **Trigger:** Architecture review; data model questions; UI labeling questions.
9. **Required inputs:** N/A — this is a doctrine enforcement rule.
10. **Decision logic:** "Visit type" is always resolved per TM-14 projection rule.
11. **Output / state change:** None.
12. **Owning substrate:** Combination of booking_preset + service + service_category.
13. **UI surface:** Tenant uses "visit type" in their day-to-day vocabulary; substrate projects.
14. **Failure mode:** Developer asks "where is visit_type stored?" → answer: nowhere; it's projected.
15. **Audit / event:** None.
16. **Evidence citations:** System_map Cross-DL warning + preferences locked §1 "No specialty leakage" + post-mortem Pattern 7 + user verbatim "AESTHETIC OFFICE VISIT MEANS FUCKING NOTHING. MEDSPAS, DERM, PLASTICS, GI, ETC. IT IS A GODDAMN FUCKING VISIT WITH A PROVIDER ON A CALENDAR."
17. **Test case:** Sarah's schedule shows "Botox Touch-Up Tuesday 2pm" (the "visit type" she sees). Substrate stores: `appointment_item.linked_booking_preset_id = botox_touchup_preset.id`, `appointment_item.planned_service_id = neuromodulator_service.id`. "Visit type" never appears as a substrate column or enum.

---

## §3 Deferred Rule Candidates (M1-2 / M3-6 / FUTURE — name-only, NOT designed)

These rules surface during Domain 1 authoring but are deferred to later phases. Listed by name only with brief justification; substrate design happens in subsequent rounds or as the rules are activated.

### M1-2 Candidates

- **TM-DEF-M1-2-1: Tenant import/clone of service catalog from another tenant** — onboarding optimization; substrate exists (DL-19 inv 26 settings export/import); M1-2 UI work.
- **TM-DEF-M1-2-2: booking_preset.display_order admin reorder UI** — substrate carries `tenant_display_order`; M1-2 UI affordance.
- **TM-DEF-M1-2-3: Service catalog versioning history admin view** — DL-12 substrate versioning carries; M1-2 UI to surface diff history.
- **TM-DEF-M1-2-4: Bulk service activation/deactivation** — batch operations; M1-2 admin convenience.
- **TM-DEF-M1-2-5: Service catalog audit report** — drives compliance + audit; substrate present (DL-16 events); M1-2 reporting work.
- **TM-DEF-M1-2-6: booking_preset analytics (which presets convert better)** — analytics layer; M1-2 reporting.

### M3-6 Candidates

- **TM-DEF-M3-6-1: Conditional booking_preset visibility based on patient_metadata_axis** — e.g., VIP-only presets; substrate exists (DL-19 inv 9-10 patient metadata); M3-6 admin UI + filter logic.
- **TM-DEF-M3-6-2: Multi-step guided booking wizard with branching logic** — for complex services like LHR full body (drill into 5 areas with per-area sub-prompts); substrate exists (planned_details JSONB schema); M3-6 wizard UX.
- **TM-DEF-M3-6-3: Provider-specialty-driven booking_preset filtering** — patient sees presets relevant to their assigned provider; substrate exists (provider capability per DL-18 inv 6); M3-6 UI.
- **TM-DEF-M3-6-4: Patient-specific service catalog (e.g., post-op restrictions)** — patient_metadata_axis_value filters; M3-6 personalization layer.
- **TM-DEF-M3-6-5: Service catalog A/B testing per channel** — test variant presentation; substrate may need slight extension (channel-scoped catalog); M3-6 + DL amendment.
- **TM-DEF-M3-6-6: Multi-language service catalog (i18n)** — separate from vocabulary override (translation layer vs brand-domain customization); M3-6.

### FUTURE Candidates

- **TM-DEF-FUTURE-1: AI auto-classification of free-text booking_request_note into structured planned_details** — CNS layer + DL-14 inv 18-22 AI autonomy; parked in preservation doc.
- **TM-DEF-FUTURE-2: Cross-tenant service catalog federation (specialty rollout)** — Federation Mode 3+ per FUTURE_ARC §8; future.
- **TM-DEF-FUTURE-3: Smart catalog reorganization based on conversion analytics** — AI-suggested catalog optimization; future.
- **TM-DEF-FUTURE-4: External system service catalog sync (e.g., from EMR)** — third-party integration; future.
- **TM-DEF-FUTURE-5: Dynamic pricing variants (surge / off-peak)** — beyond Day 0 pricing_option flat-rate; future.
- **TM-DEF-FUTURE-6: Provider-personalized service catalog (provider chooses what they offer)** — provider preference layer; future.
- **TM-DEF-FUTURE-7: Subscription bundling (e.g., "Bloom+ includes 4 of these services in this catalog")** — composes with membership benefits; future.
- **TM-DEF-FUTURE-8: Service catalog templates from clinical guidelines (e.g., AAD-recommended derm visit schedule)** — clinical guideline integration; future.

---

## §4 Substrate gap audit

Aggregated substrate pressure-test verdicts across all 30 Day 0 rules:

| Rule | Verdict | Notes |
|---|---|---|
| TM-01 | OK | service_category — existing DL-15 + DL-19 |
| TM-02 | OK | service — DL-15 amendment 30 + 32 + 33 |
| TM-03 | OK | pricing_option — DL-17 inv 1-5 |
| TM-04 | OK | service_pricing_option_assignment — DL-17 inv 1 |
| TM-05 | OK | service.service_type ENUM 5-value — DL-15 amendment 32 inv 32 |
| TM-06 | OK | service.quantity_strategy ENUM 5-value — DL-15 amendment 5 + DL-17 inv 5 |
| TM-07 | OK | booking_preset — DL-19 inv 19 |
| TM-08 | OK | Single-item booking_preset — DL-19 inv 19 + DL-20 inv 34 |
| TM-09 | OK | Hierarchical drill-down booking_preset — DL-19 inv 19 parent_preset_id |
| TM-10 | **OK with extension** | Combo bundle booking_preset — DL-19 inv 19 + DL-20 inv 34 cover; **`appointment.bundled_from_preset_id` FK NULL needed on DL-20 inv 33** for bundle parent tracking |
| TM-11 | OK | booking_preset.default_planned_details — DL-19 inv 19 |
| TM-12 | OK | Broad-default booking — DL-20 inv 34 + DL-15 + DL-19 + DL-20 preambles |
| TM-13 | OK | Clean patient-facing label — UI projection rule per DL-16 inv 3 |
| TM-14 | OK | Schedule projection — UI projection per DL-16 inv 3 |
| TM-15 | OK | service.self_bookable_progressive_disclosure_mode ENUM — DL-15 inv 30 + DL-19 preamble |
| TM-16 | OK | Patient portal filter — existing primitive |
| TM-17 | OK | service.planned_detail_schema JSONB — DL-15 inv 30 + DL-19 inv 2 |
| TM-18 | OK | planned_details substrate-level validation — DL-19 inv 8 |
| TM-19 | OK | appointment_item.planned_quantity — DL-20 inv 34 |
| TM-20 | OK | planned_treatment_areas[] — DL-20 inv 34 |
| TM-21 | OK | Add-on appointment_item with parent_item_id — DL-20 inv 34 |
| TM-22 | OK | Multi-line visit — DL-20 inv 33-34 |
| TM-23 | OK (via TM-10) | Bundle materialization — covered by TM-10 (carries TM-10's extension) |
| TM-24 | OK | Soft-delete (is_active) — standard pattern |
| TM-25 | OK | Disassociate vs Deactivate — DL-17 inv 1 |
| TM-26 | OK | service_category hierarchy depth — DL-15 + TM-01 |
| TM-27 | OK | tenant_vocabulary_override — DL-19 inv 12 |
| TM-28 | OK | No specialty visit types — Cross-DL warning enforcement |
| TM-29 | OK | No vendor names in substrate — Cross-DL warning enforcement |
| TM-30 | OK | "Visit type" projection — TM-14 |

### Substrate gap audit summary

- **Total Day 0 rules:** 30
- **OK:** 28 rules
- **OK with extension:** 2 rules (TM-10 + TM-23 which depends on TM-10)
- **NEW SUBSTRATE NEEDED:** 0 rules

### Proposed DL amendment note (DL-20)

**Gap:** `appointment.bundled_from_preset_id` FK NULL is needed in DL-20 inv 33 substrate to track the parent bundle preset id when an appointment is materialized from a combo bundle booking_preset (TM-10).

**Justification:** The `appointment_item.linked_booking_preset_id` per DL-20 inv 34 captures the per-item preset (a MEMBER preset of the bundle). The parent BUNDLE preset id is not currently tracked. This is needed for:
- Schedule rendering hierarchy per TM-14 (bundle label projection)
- Analytics (which bundles convert / are most popular)
- Cancellation UX (cancel "Full Facial Balancing" appointment cancels all 4 member items atomically)
- Recall / future-care-obligation linkage (per DL-20 inv 16; some bundle patterns drive recurring recall — e.g., Bloom Glow Package monthly)

**Proposed DL-20 inv 33 extension:**

```diff
 appointment
 ├── id, tenant_id, patient_id, patient_relationship_id
 ├── venue_id NULL
 ├── planned_window_start, planned_window_end
 ├── status ENUM
 ├── booking_channel ENUM
 ├── attribution_source STRING NULL
 ├── trigger_source ENUM
 ├── booking_request_note STRING NULL
 ├── confirmation_state ENUM
+├── bundled_from_preset_id FK NULL          -- DL-19 inv 19 booking_preset
+│       when the appointment was materialized from a combo bundle preset;
+│       NULL for non-bundle bookings; FK to booking_preset(id) where
+│       bundled_member_preset_ids[] was non-empty
 ├── fulfillment_encounter_id FK NULL
 └── created_by_actor (DL-16 amendment 43 4-tuple)
```

**Not done in this rule matrix.** Flagged for Phase 1 DL-20 amendment. Recommended action: small amendment commit to DL-20 inv 33 adding the FK column before Domain 2 starts.

---

## §5 Resolution map (10 doctrine questions → rules that resolve them)

| Doctrine question | Resolving rules |
|---|---|
| Q1. What is a visit type? | TM-30 (not a substrate concept; tenant catalog projection of booking_preset / service / service_category) |
| Q2. What is a service_category? | TM-01 (taxonomy-only, hierarchical, no price) + TM-26 (tenant-controlled depth) |
| Q3. What is a service? | TM-02 (operational kind, no price, no specialty) + TM-05 (service_type 5-enum) + TM-06 (quantity_strategy 5-enum) |
| Q4. What is a booking_preset? | TM-07 (tenant-configured affordance) + TM-08 / TM-09 / TM-10 (3 shape patterns) + TM-11 (default_planned_details) |
| Q5. Simple booking vs guided booking | TM-12 (broad-default doctrine) + TM-15 (self_bookable_progressive_disclosure_mode ENUM) + TM-16 (patient portal filter) |
| Q6. LHR Brazilian / Full Body | TM-06 (quantity_strategy=per_unit_quantity) + TM-19 (planned_quantity) + TM-20 (planned_treatment_areas[]) + TM-11 (preset defaults; "Brazilian LHR" / "Full Body LHR" presets share LHR service) |
| Q7. Peptide / GLP-1 / HRT menu structure | TM-26 (arbitrary-depth hierarchy) + TM-02 (tenant-defined service names, no specialty leakage) |
| Q8. Patient-facing label clean | TM-13 (no "Unknown" rendering) + TM-14 (schedule projection rule) |
| Q9. planned_details optional | TM-12 (broad-default) + TM-15 (disclosure mode = optional default) + TM-17 (planned_detail_schema) + TM-18 (validation rule) |
| Q10. What does the schedule display | TM-14 (projection hierarchy: preset → service → category) + TM-13 (no "Unknown") |

All 10 doctrine questions have at least 2 resolving rules. Doctrine holds.

---

## §6 Report (read at end before commit + push)

### Rule count
- **Day 0 rules fully detailed:** 30 (target was 25-35 thorough; landed in middle)
- **Deferred Rule Candidates (name-only):** 20 across M1-2 / M3-6 / FUTURE phases

### Evidence sources used

#### Mindbody ingestion batches
- Batch 13 (service edit / pricing options drawer + 4-type taxonomy + advanced edit page + staff assignment with prep/booking/finish — TM-02 / TM-03 / TM-04 / TM-05 / TM-06 / TM-08 / TM-21 / TM-25)
- Batch 20 (mobile retail catalog with 14 service categories + Bloom Health "Medical Visits" + walk-in cart reduced catalog — TM-01 / TM-02 / TM-21)
- Batch 8 + 13 + 20 (Botox-as-product 7-tier workaround — TM-06)
- Batch 13 Step 04 (disabled pricing options preserved — TM-24)
- Batch 13 Step 06 (Disassociate / Advanced Edit / Deactivate 3-action ⋮ menu — TM-04 / TM-25)
- Layer 2 Section C / D / G (settings + service catalog + commerce evidence)

#### Cross-app evidence
- **Restaurant POS / OpenTable / Toast** — TM-01 / TM-02 / TM-07 / TM-10 / TM-11 / TM-21 / TM-23
- **Airline (Delta / United / PNR)** — TM-03 / TM-10 / TM-22
- **Amazon product taxonomy** — TM-01 / TM-09 / TM-13 / TM-26
- **Epic / Cerner / athenaHealth** — TM-02 / TM-26 / TM-28 / TM-30
- **Calendly / Cal.com / Zoom Scheduler** — TM-05 / TM-07 / TM-08 / TM-12 / TM-15 / TM-16 / TM-17
- **Boulevard** — TM-05 (medspa-native parallel evidence)
- **Hospital OR / endoscopy block scheduling** — TM-06 / TM-19 / TM-20 / TM-22
- **Stripe / Shopify** — TM-04 / TM-24
- **FHIR** — TM-17 (resource schema) / TM-28 / TM-30 (CodeableConcept tenant-extensible)
- **Salesforce custom labels / Shopify locale** — TM-27

#### Doctrine + Build Contract refs
- DL-15 amendments 5 / 30 / 31 / 32 / 33 / 34 / 35
- DL-17 invariants 1-5 / 22-23 / 25
- DL-19 invariants 2 / 8 / 12 / 18 / 19
- DL-20 invariants 13 / 16 / 33 / 34 / 41
- DL-16 invariants 3 / 5 / 6 / 18 / amendment 42 / amendment 43
- Cross-DL warning (system_map Phase 1 hardening 2026-05-17)
- Day 0 Build Contract commit `6dc1286`

#### Retrospective trio
- User + Knox preferences locked (§1 + §2)
- Coherent architecture pattern (§2 cross-cutting disciplines)
- Post-mortem (Pattern 1 / 3 / 5 / 7)

### Missing evidence

None for Day 0 Domain 1 specifically. All 30 rules cite at least 1 Mindbody source + 1 cross-app source + 1 doctrine source.

Two minor items worth noting:
- **`service.is_addon` flag semantic** — Mindbody Batch 13 Step 01 documents "Convert to add-on" toggle but doesn't fully clarify whether the flag is just a UI hint or has substrate enforcement. OMNI treats it as UI hint (TM-21); admin can override at appointment_item level via `parent_item_id`. Future evidence (if surfaced in a Mindbody ingestion gap) may refine.
- **booking_preset bundle materialization atomicity** — DL-19 inv 19 + DL-20 inv 34 admit the substrate but the atomic 4-axis composer check across N member presets isn't explicitly tested in current DL DRAFT scenarios. Domain 2 (booking composer) will need to validate that bundled_member_preset_ids[] all-or-nothing booking is enforceable per DL-15 inv 2 multi-resource atomic discipline.

### Open decisions (require user + Knox signoff before Domain 2)

1. **TM-10 / TM-23 substrate extension:** Should `appointment.bundled_from_preset_id` FK NULL be added to DL-20 inv 33? **Opus recommendation: YES** — small extension, no schema migration cost (pre-substrate-slice), enables clean bundle UX and analytics. **Alternative:** Store bundle parent id via tag/metadata pattern (rejected — worse for queryability).

2. **`service.is_addon` flag treatment:** Is this a UI hint only (Opus current interpretation) OR does it have substrate enforcement? **Opus recommendation: UI hint only** — substrate enforces add-on relationship via `appointment_item.parent_item_id` (TM-21); `is_addon` flag is admin convenience for catalog organization. Tenant may use an "add-on" service as standalone if they want.

3. **Hierarchical preset display depth UI cap:** TM-09 admits arbitrary depth at substrate; UI may impose soft cap (Opus suggests 6 levels). **Recommendation: defer to UX design** — substrate is unconstrained; UI cap is tenable per-deployment.

4. **Bundle preset member duplicates:** TM-10 example has "Filler" appearing twice (different planned_treatment_areas per occurrence). **Recommendation: ALLOW duplicates** in `bundled_member_preset_ids[]` since each member preset can have own default_planned_details. Substrate doesn't constrain.

5. **Service vocabulary override scope:** TM-27 / DL-19 inv 12 — should vocabulary override apply per-brand or per-site? **Recommendation: per-tenant scope with site inheritance** (per DL-19 inv 4 hierarchy). Surfaces consistently across patient + staff at same scope.

### Whether visit-type / treatment-menu doctrine held up

**YES — visit-type doctrine held up under Domain 1 rule authoring.** The 3-layer pattern (`service_category` taxonomy + `service` operational kind + `pricing_option` commerce variant + `booking_preset` patient-facing affordance + `appointment_item` planned line) cleanly resolves all 10 doctrine questions accumulated from the 2-day arc. The substrate gap audit surfaced ONE minor extension (TM-10 `appointment.bundled_from_preset_id`); zero NEW SUBSTRATE NEEDED verdicts. This is a positive signal that Domain 2 (booking composer / availability) can start without doctrine rework.

The post-mortem failure patterns were avoided:
- **Pattern 1 (Layer 2 as substrate template)** — Mindbody cited only as evidence; 8 cross-app sources informed every rule.
- **Pattern 3 (compound enums)** — service_type (5 values), quantity_strategy (5 values), self_bookable_progressive_disclosure_mode (3 values), pricing_option_type (4 values) are all single-concept enums.
- **Pattern 5 (scope creep)** — 30 rules landed; 20 candidates deferred (name-only).
- **Pattern 7 (Mindbody UI labels as substrate)** — TM-28 / TM-29 / TM-30 explicitly enforce anti-leakage. No vendor or specialty leakage in any Day 0 rule.

### Substrate gap audit summary (for index)

- 30 total rules
- 28 OK
- 2 OK with extension (TM-10 + TM-23; same gap: `appointment.bundled_from_preset_id` FK NULL on DL-20 inv 33)
- 0 NEW SUBSTRATE NEEDED

**Recommendation:** Apply the small DL-20 inv 33 extension before Domain 2 starts. The extension is pre-substrate-slice (cheap; no code/migration cost). Alternative: defer until Domain 2 confirms no additional bundle-related gaps surface.

---

## §7 What this file is NOT

- NOT new doctrine. DLs are doctrine.
- NOT code. Substrate slice scoping is the next gate.
- NOT migrations.
- NOT a complete rule matrix — Domains 2-7 still need to be authored.
- NOT a Mindbody clone — every rule cites at least 1 non-Mindbody cross-app source.

Round 1 ends here. Push commits 1+2 to origin/main. Stop and report.
