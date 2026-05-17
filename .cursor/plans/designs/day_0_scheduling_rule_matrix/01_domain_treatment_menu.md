# Domain 1 — Treatment Menu / Visit-Type Rules (Day 0)

**Date:** 2026-05-17 (initial) + 2026-05-17 (Knox patch round applied)
**Round:** 1 of 7
**Status:** AUTHORED + PATCHED — pending user + Knox sign-off before Round 2 starts
**Index:** [00_index.md](00_index.md)
**Phase scope this file:** Day 0 fully detailed; M1-2 / M3-6 / FUTURE listed name-only in [§Deferred Rule Candidates](#deferred-rule-candidates).

**Knox 2026-05-17 review changes applied (2 rounds):**

**Round 1.5 — Patch round (commit `5762edb`):**
1. **TM-12 contradiction with TM-01 fixed** — broad-default booking now routes through a category-targeting `booking_preset` (preserves TM-01 taxonomy purity; service_category does NOT carry operational requirements).
2. **FK renamed** — `appointment.bundled_from_preset_id` → `appointment.source_booking_preset_id` (more general; covers single / category / bundle / direct booking shapes uniformly).
3. **TM-15 split flagged** — Conflated `self_bookable_progressive_disclosure_mode` ENUM proposed to split into `service.self_bookable` BOOLEAN + `service.planned_detail_disclosure_mode` ENUM.
4. **TM-20 source-of-truth flagged** — `planned_details.treatment_areas` JSONB canonical; `planned_treatment_areas[]` ARRAY materialized projection.
5. **Sloppy example fixed** — TM-06 test case clarified (Botox units / filler syringes / Sculptra vials / CoolSculpting cycles / LHR areas).
6. **Cross-app terminology** — "Cross-app evidence" → "Cross-app pattern reference (ANALOGIES for pressure-testing, NOT hard evidence)" across all 30 rules and index.

**Round 1.6 — DL amendments + Knox 5 refinements (commits `ee46585` + `d040f59`):**
1. **DL Amendment A applied** — DL-20 inv 33 now carries `appointment.source_booking_preset_id` FK NULL.
2. **DL Amendment B applied** — DL-19 preamble now defines `service.self_bookable` BOOLEAN + `service.planned_detail_disclosure_mode` ENUM (split + DL-15 inv 30 service substrate cross-referenced).
3. **DL Amendment C applied** — DL-20 inv 34 now explicitly designates `planned_details.treatment_areas` canonical + `planned_treatment_areas[]` materialized projection.
4. **Knox refinement #1 (schedulability floor)** — TM-07 binding CHECK: category-targeting presets MUST carry `default_duration_minutes` + `default_provider_eligibility_filter` (cannot be all-NULL).
5. **Knox refinement #2 (no pricing in scheduling)** — TM-09 + TM-03 explicit anti-copy: operational defaults (duration, room, resource, provider) live on PRESET/SERVICE, NEVER on pricing_option.
6. **Knox refinement #3 (broad-default ≠ bypass gates) — INITIAL VERSION (superseded by Round 1.7).** Initial draft treated all gates as firing at booking commit, which would have broken basic medspa flow.
7. **Knox refinement #4 (Layer 1 admits vagueness; Layers 2 + 3 are specific)** — TM-12 3-layer resolution constraint: `appointment_item` may be category-only, but `encounter_line.service_id` AND `commerce_order_line.pricing_option_id` MUST be specific at performed + charged truth.
8. **Knox refinement #5 (Domain 1 ≠ scheduler completion)** — Index doc §6 strengthened with explicit warning.

**Round 1.7 — Gate-timing correction + wording fix (this commit):**
1. **Wording fix — "may always book at category level" → "may book broadly WHEN tenant exposes a self-bookable category-targeting preset"** (per Knox 2026-05-17 wording correction). Broad-default is a SUPPORTED PATTERN, not a UNIVERSAL RIGHT. Tenant decides per-category whether to expose a self-bookable broad affordance. Applied to TM-12 + DL-19 preamble.
2. **Gate-timing model (replaces overly-aggressive Round 1.6 refinement #3) — 5 distinct gate timings:**
   - `booking_visibility` — controls whether service appears in self-booking
   - `booking_hard_gate` — blocks appointment creation (license, jurisdiction, intake-first when configured)
   - `pre_arrival_task` — task created at booking; pre-arrival completion; does NOT block booking (intake form for normal medspa)
   - `pre_performance_gate` — blocks `encounter_line` creation until satisfied (**consent for normal medspa services — Botox / Hydrafacial / LHR / Filler all default here**)
   - `closeout_documentation_gate` — blocks closeout (lot capture, attestation, chart note)
3. **Binding rule:** Consent is usually `pre_performance_gate`, NOT `booking_hard_gate`. Patient books Hydrafacial → arrives → signs consent at check-in → treatment proceeds. Consent NEVER blocks booking unless tenant explicitly upgrades the service.
4. **Amendment D candidate (DEFERRED to Domain 2 round):** DL-19 inv 18 `service_policy` will gain per-requirement `gate_timing` ENUM. Day 0 Domain 1 binds the TAXONOMY; Domain 2 implements the substrate column.

Substrate gap audit post-Round 1.7: **29 OK / 1 OK-with-extension (TM-12 carries Amendment D candidate for Domain 2) / 0 NEW SUBSTRATE NEEDED.** All 3 DL amendments live in DRAFTs; locked DL-15 / DL-16 untouched. See [§4 Substrate gap audit](#4-substrate-gap-audit-post-phase-1-hardening-v3-amendments-applied-2026-05-17--knox-refinements-integrated).

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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
   - **OpenTable / Toast** — A "menu item" carries name + description + prep time + allergens + size variants; price lives on per-variant rows (small / medium / large) not on the parent item.
   - **Epic appointment_type** — Operational kind ("Office Visit" / "Wellness Visit" / "Procedure Visit") carries duration + room requirements + provider type; billing is a separate layer (CPT codes attach to encounter, not to appointment type).
   - **Calendly / Cal.com event_type** — Carries duration + buffer time + question template + provider; "tier pricing" if needed lives on a separate paywall layer.
3. **Underlying tenant need:** The tenant needs a unit of "the thing we DO" that holds operational facts (duration, prep, capacity, room/resource requirements, planned-detail schema, who can perform it) without conflating those with pricing or with specialty taxonomy. The same operational kind may have multiple commercial variants (Hydrafacial Signature / Deluxe / Platinum at different prices) without being 3 different services.
4. **OMNI generic primitive / rule:** `service` substrate (DL-15 inv 30 service substrate). Carries `id`, `tenant_id`, `service_category_id` FK, `name` STRING, `service_type` ENUM per DL-15 amendment 32 (`appointment` / `arrival` / `class` / `course` / `membership`), `quantity_strategy` ENUM per DL-15 amendment 5 (`fixed_quantity` / `per_unit_quantity` / `package_count` / `unlimited_period` / `subscription_recurring`), `default_duration_minutes`, `default_capacity`, `num_deducted` (inventory hook; 0 for non-product services), `sort_order`, `is_active`, `is_addon` BOOLEAN (UI hint per TM-21), `self_bookable` BOOLEAN (defaults TRUE; per TM-15 — visibility axis), `planned_detail_disclosure_mode` ENUM (`none` / `optional` / `required`; defaults `optional` per TM-15 — form rigor axis, independent of self_bookable), `planned_detail_schema` JSONB (validation rules for `appointment_item.planned_details`), `description`, `display_color`. NO `price` (price lives on pricing_option per DL-17 inv 1). NO `specialty_kind` enum (specialty is implicit via tenant's service_category hierarchy). NO `online_bookable` BOOLEAN — replaced by `self_bookable` (cleaner naming; removes vestigial Mindbody label).
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
    - `self_bookable` defaults to TRUE (broad discoverability per TM-15); `planned_detail_disclosure_mode` defaults to `optional` (broad-default doctrine per TM-15).
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
17. **Test case:** Tenant creates service "Neuromodulator Visit" in category "Injectables" with `service_type = appointment`, `quantity_strategy = per_unit_quantity`, `planned_detail_schema = {treatment_areas: {type: array, items: enum[glabella, forehead, crows_feet, masseter, ...]}, preferred_product: {type: enum, values: [Botox, Dysport, Daxxify, Jeuveau], required: false}}`, `default_duration_minutes = 30`, `self_bookable = TRUE`, `planned_detail_disclosure_mode = optional`. Sarah books at category "Injectables" → broad-default; Patrick books "Neuromodulator Visit" → service-level booking with planned_details left blank (allowed because disclosure mode is optional). Schedule shows clean parent label.

---

### Rule TM-03: pricing_option is the commerce variant (price + commission + commercial restrictions)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Batch 13 Step 03 + 04 + 05 + 07-09 show pricing options as separate substrate from services. Batch 13 Step 05 confirms 4-type taxonomy via Create dropdown (Single Session / Multiple Sessions / Unlimited Sessions / Autopay/Contract). Step 07 shows Pricing Option advanced edit page at distinct URL (`adm_tlbx_series.asp?optProduct=101489`) with ~30 fields: name / number of sessions / service category / appointment types many-to-many / revenue category / expires after / price / online price / sales tax flags / activation date 3-strategy radio / priority / barcode / early bird / commission / member discounts / scheduling restrictions / auto-emails. Per-pricing-option commission rates (standard + promo). Per-pricing-option scheduling restrictions (5 fields). Per-pricing-option auto-emails (2 triggers). Batch 20 Step 06 shows 13 pricing options under "Facials" category (CryoGloss Facial / Aquagold Facial / BH HydraFacial Deluxe-Platinum-Signature / BH Signature Facial 60-75-90-90 mins / Biologique Recherche 60-90 mins / ClassPass $0 / Cancellation Policy $0).
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
   - **Airline fare class** — One flight (UA 256) carries multiple fare classes (Economy / Economy Plus / Business / First). Fare class = commerce variant with different price + benefits; flight = operational entity.
   - **Restaurant size variants (Starbucks / Chipotle)** — One menu item ("Latte") has Tall / Grande / Venti sizes at different prices; size variant = pricing option.
   - **Amazon product variants** — One product page ("iPhone 15 Pro") has storage variants (128GB / 256GB / 512GB / 1TB) at different prices.
   - **Cal.com paid event types** — Event template + Stripe price ID separately; commerce variant decoupled from event definition.
3. **Underlying tenant need:** A service may have multiple commercial variants — flat-rate, tiered, package (N sessions prepaid), unlimited-within-window, recurring autopay, member-discounted, comp/free promo, ClassPass-integration $0, deposit-only, late-cancel-fee $0 wrapper. Tenants must price one operational kind multiple ways without duplicating the service definition.
4. **OMNI generic primitive / rule:** `pricing_option` substrate (DL-17 inv 2). Carries `id`, `tenant_id`, `pricing_option_type` ENUM (`single_session` / `multiple_sessions` / `unlimited_period` / `autopay_contract` per DL-17 inv 2), `display_name`, `price` NUMERIC, `online_price` NUMERIC NULL (channel-specific override), `quantity_strategy` ENUM per DL-17 inv 5 (5 values; binds to `service.quantity_strategy`), `activation_strategy` ENUM per DL-17 inv 3 (3 values: `on_sale_date` / `on_first_visit_after_purchase` / `on_custom_date`), `expires_after_value` NUMERIC NULL + `expires_after_unit` ENUM (`days` / `months` / `years`), `redemption_priority` per DL-17 inv 4 (Low/Medium/High), `member_only` BOOLEAN, `online_bookable` BOOLEAN, `revenue_category_id` FK (DL-17 inv 20), per-type sub-fields, scheduling restrictions per DL-15 amendment 33, commission per DL-17 inv 25, auto-email triggers per DL-17 inv N. Linked M:N to service via `service_pricing_option_assignment` (DL-17 inv 1).
5. **Divergence / improvement:** Mindbody's per-quantity Botox workaround (7 pricing options for 7 quantity tiers of Botox) eliminated by `quantity_strategy = per_unit_quantity` per DL-17 inv 5 (one service + one pricing_option + planned_quantity at booking + actual quantity at checkout). Mindbody's $0 Cancellation Policy pricing option (Batch 13 Step 04 + Batch 20 Step 06) workaround is replaced by `cancellation_policy` 1st-class substrate per DL-17 inv 24 (cancellation/no-show fees emit `commerce_order_line.line_kind = cancellation_fee` directly).
6. **Anti-copy warning:** Do NOT model deposit as a $0 "Treatment Deposit" pricing option (Mindbody workaround). Deposit is a `commerce_order_line.line_kind = treatment_deposit` per DL-17 inv 6 + DL-17 deposit visibility clarification. Do NOT model cancellation fees as $0 pricing options. Do NOT bake vendor financing names (Cherry, GreenSky, CareCredit) into `pricing_option_type` enum — those are `payment_method.label` per DL-17 inv 18 tenant-defined STRING. **Do NOT put operational defaults (duration, provider eligibility, room, resource) on pricing_option (Knox 2026-05-17 refinement #2).** Pricing_option carries COMMERCE truth only (price / online_price / commission / expires_after / activation_strategy / redemption_priority). If "Hydrafacial Deluxe" takes 90min and "Hydrafacial Signature" takes 60min, the duration difference lives on a child `booking_preset.default_duration_minutes` override (per TM-09) or on `service.default_duration_minutes` (service-level baseline) — NEVER on pricing_option. Pricing must NOT sneak back into scheduling.
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
17. **Test case:** Tenant creates "Neuromodulator Visit" service with `quantity_strategy = per_unit_quantity`, `default_unit_price = 14`, `min_quantity = 10`, `max_quantity = 100`, `quantity_unit = units`. Sarah books appointment; progressive disclosure asks "How many units?" — Sarah enters 24 (planned_quantity = 24, planned cost = $336). At visit, provider injects 26 units; staff updates encounter_line.performed_payload.units = 26; commerce_order_line.quantity = 26 × $14 = $364. Schedule shows "Neuromodulator Visit — 24u planned" pre-visit; after performed line locked, shows "Neuromodulator Visit — 26u performed." The SAME `quantity_strategy = per_unit_quantity` PATTERN handles other services with different `quantity_unit` values: filler bookings (e.g., 1 syringe Juvéderm Voluma OR 2 mL Restylane Refyne — unit = `syringes` or `mL` per tenant catalog), Sculptra (1-2 vials per session — unit = `vials`), CoolSculpting (2 or 4 cycles per visit — unit = `cycles`), LHR (1-5 areas per visit — unit = `areas`). Each of these is a DIFFERENT tenant-configured service, not a different OMNI substrate; only the `quantity_unit` ENUM value + per-pricing-option `default_unit_price` + `min_quantity` / `max_quantity` differ per service.

---

## Section B — Booking_preset substrate + 3 shape patterns

### Rule TM-07: booking_preset is tenant-configured patient-facing affordance (separate from service)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody does NOT have an explicit booking_preset substrate — it uses appointment-type rows as the patient-facing label directly. Each appointment-type IS a bookable affordance (Batch 13 Step 01 evidence shows the service edit page is also the affordance edit page). This conflates "the operational kind" (service) with "what the patient picks at booking" (preset). Result: tenants either (a) duplicate services for every commercial variant ("BH HydraFacial – Deluxe" / "BH HydraFacial – Platinum" / "BH HydraFacial – Signature" as 3 services per Batch 20 Step 06) OR (b) cannot represent combo bundles ("Full Facial Balancing = Neuromodulator + Filler + Filler + Biostimulator") cleanly.
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
   - **Restaurant POS combo bundle** — "Combo #3" appears as ONE menu item but materializes 3 line items (sandwich + side + drink) on the ticket. Combo definition is a tenant-configured affordance separate from the underlying menu items.
   - **Calendly event_type + Cal.com event_type** — Separate from the underlying meeting (you can have multiple event types pointing to the same meeting template, each with different intake questions / availability rules).
   - **Amazon "frequently bought together" bundles** — Bundle is a curated affordance separate from individual products.
   - **Zoom Scheduler templates** — Template is a tenant-configured presentation of an availability + intake combo; many templates can reference one underlying availability.
3. **Underlying tenant need:** The tenant must be able to expose patient-facing booking affordances that don't map 1:1 to underlying services. A single service ("Hydrafacial") may have multiple presets ("HydraFacial Signature" / "HydraFacial Deluxe" / "HydraFacial Platinum" — each pointing to different pricing_options + slightly different planned_details defaults). Multiple services may compose into one preset ("Full Facial Balancing" combo). Same service may appear under different patient-facing names per channel ("Botox Touch-Up" online; "Neuromodulator Maintenance" in-clinic).
4. **OMNI generic primitive / rule:** `booking_preset` substrate per DL-19 inv 19. Carries `id`, `tenant_id`, `display_label` STRING (patient-facing name), `target_service_id` FK NULL OR `target_service_category_id` FK NULL (exactly one), `target_pricing_option_id` FK NULL (for tier-at-booking), `default_planned_quantity` NUMERIC NULL, `default_planned_details` JSONB (pre-populates planned_details), `default_duration_minutes` NUMERIC NULL, `default_provider_eligibility_filter` STRING NULL, `default_resource_requirement` STRING NULL, `visible_in_self_booking` BOOLEAN, `parent_preset_id` FK NULL (hierarchical drill-down), `bundled_member_preset_ids[]` ARRAY NULL (combo bundle), `tenant_display_order` NUMERIC, `active` BOOLEAN.
5. **Divergence / improvement:** Mindbody conflates affordance + operational kind. OMNI separates: `service` is operational kind (clinical/operational reality); `booking_preset` is patient-facing affordance (UX/marketing reality). Tenant configures presets per channel, per audience, per marketing campaign without duplicating service rows. Result: cleaner catalog, no Mindbody-style "BH HydraFacial – Deluxe / Platinum / Signature" service-duplication; ONE Hydrafacial service + 3 presets pointing to 3 pricing_options.
6. **Anti-copy warning:** Do NOT bake preset names into substrate enums (`preset_hydrafacial_deluxe` / `preset_neuromodulator_visit`). All preset names are tenant-defined STRINGs. Do NOT model presets as a child of pricing_option (presets are independent; preset can target service OR category OR pricing_option). Do NOT use "visit_type" as a substrate concept — `visit_type` is the projection of `booking_preset.display_label`, NOT a column or enum.
7. **Substrate pressure-test verdict:** **OK** — DL-19 inv 19 fully covers `booking_preset` substrate. Three target patterns (service / category / pricing_option) are all admitted. **Schedulability floor constraint added (Knox 2026-05-17 refinement #1):** category-targeting presets MUST carry enough defaults to be safely bookable — see Decision logic #10 below. No new substrate fields needed; this is a CHECK constraint on existing fields.

#### Section B — Rule definition

8. **Trigger:** Tenant admin creates / edits / reorders booking presets; patient self-booking flow renders presets; staff appointment creation modal shows presets.
9. **Required inputs:** `tenant_id`, `display_label` STRING, `target_service_id` OR `target_service_category_id` (exactly one populated; check constraint).
10. **Decision logic:**
    - Exactly-one-target check: `(target_service_id IS NOT NULL) XOR (target_service_category_id IS NOT NULL)` if neither is part of a bundle (`bundled_member_preset_ids` IS NULL OR empty).
    - For combo bundle preset: `bundled_member_preset_ids` non-empty; `target_service_id` may be NULL (combo is composition of children).
    - For hierarchical preset: `parent_preset_id` non-NULL → drill-down chain; child inherits parent's `default_planned_details` unless overridden.
    - `visible_in_self_booking` controls patient portal visibility; staff always sees all presets.
    - `default_planned_details` JSONB MUST validate against target service's `planned_detail_schema` at admin write time.
    - **Schedulability floor (Knox 2026-05-17 refinement #1) — binding CHECK at admin write:**
      - If `target_service_category_id IS NOT NULL` (category-targeting preset): MUST have non-null `default_duration_minutes` AND non-null `default_provider_eligibility_filter` (cannot be all-NULL — the category itself carries no operational requirements per TM-01, so the preset MUST provide them). Optional fields: `default_resource_requirement` (NULL = no specific room/resource required), `default_planned_details` (NULL = empty), `default_pricing_option_id` (NULL = resolved at checkout).
      - If `target_service_id IS NOT NULL` (single-item preset): defaults may be NULL; booking composer falls back to `service.default_duration_minutes` + `staff_service_assignment` resolution per DL-15 amendment 30.
      - If `bundled_member_preset_ids[]` populated (bundle preset): defaults NULL allowed; duration + provider resolution composed from member presets.
      - Patient-facing preset (`visible_in_self_booking = TRUE`) with missing schedulability floor → admin save REJECTED with explicit error: "Patient-bookable category preset requires default_duration_minutes and default_provider_eligibility_filter."
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
   - **Amazon product detail page with variant selectors** — "iPhone 15 Pro" page → drill down (Storage: 128GB/256GB/512GB/1TB → Color: Natural/Blue/White/Black → Carrier: AT&T/Verizon/etc.).
   - **Restaurant POS modifier prompts** — "Burger" → drill down (Bun: brioche/sesame/lettuce → Patty: 1/2 → Cheese: yes/no → Toppings: list).
   - **OpenTable special occasion selector** — Restaurant → drill down (Anniversary / Birthday / Business / Date / Romantic).
3. **Underlying tenant need:** Some services have multiple tier variants that share the same operational kind but differ in price/duration/inclusions. Patient should see a clean parent label ("Hydrafacial") then optionally drill down to choose tier ("Signature" / "Deluxe" / "Platinum"). Tenant must be able to model this without duplicating service rows.
4. **OMNI generic primitive / rule:** Hierarchical drill-down booking_preset = chain of `booking_preset` rows linked via `parent_preset_id` FK. Parent preset has `target_service_id = X`, children have `target_service_id = X` (same service) + `target_pricing_option_id = X_tier1/2/3` (different pricing_options for COMMERCE variant) + `default_planned_details` overrides (tier-specific). **Critical: operational differences (default_duration_minutes / default_provider_eligibility_filter / default_resource_requirement) live on the PRESET CHILD, NOT on pricing_option** (Knox 2026-05-17 refinement #2 — pricing must NOT sneak back into scheduling). If "Hydrafacial Deluxe" takes 90min and "Hydrafacial Signature" takes 60min, the duration difference lives on the child preset's `default_duration_minutes` override, NOT on `pricing_option.price` or any pricing_option field. Pricing_option is COMMERCE truth; preset is OPERATIONAL truth. At booking, patient picks parent → UI surfaces children for drill-down; selecting child commits with child's operational defaults + child's pricing_option for commerce.
5. **Divergence / improvement:** Mindbody's flat list is replaced by tenant-controlled hierarchy. ONE Hydrafacial service + 3 pricing_options + 1 parent preset "Hydrafacial" + 3 child presets "Signature (60min, $200)" / "Deluxe (90min, $250)" / "Platinum (120min, $300)" → clean UX, no service duplication, operational + commerce concerns cleanly separated.
6. **Anti-copy warning:** Do NOT cap hierarchy depth at substrate (UI may impose soft cap for usability). Do NOT require children to share parent's `target_service_id` (children may target different services if tenant wants — but typical pattern is same service, different pricing_options + operational defaults). **Do NOT put operational defaults (duration, room, resource, provider) on `pricing_option` substrate.** Pricing_option carries `price` / `online_price` / `commission_rate` / `expires_after` / etc. — COMMERCE variants only. Operational variants belong on PRESET (child preset's defaults) or SERVICE (`service.default_duration_minutes`).
7. **Substrate pressure-test verdict:** **OK** — DL-19 inv 19 `parent_preset_id` FK admits arbitrary-depth chains; child preset can override operational defaults independent of pricing_option. No new substrate needed. (Knox 2026-05-17 refinement #2 is enforced by EXISTING substrate separation — DL-17 inv 1 keeps price on pricing_option; DL-19 inv 19 keeps operational defaults on preset.)

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
17. **Test case:** Tenant creates parent preset "Hydrafacial" (target_service = Hydrafacial service, no pricing_option, no operational override). Creates 3 children with BOTH operational defaults (preset-level) AND commerce variants (pricing_option):
    - "Signature" — target_pricing_option = sig_$200, default_duration_minutes = 60 (preset override of service default), default_planned_details = {tier: 'signature'}
    - "Deluxe" — target_pricing_option = del_$250, default_duration_minutes = 90 (longer treatment), default_planned_details = {tier: 'deluxe', addons: ['boost_serum']}
    - "Platinum" — target_pricing_option = plat_$300, default_duration_minutes = 120 (longest treatment), default_planned_details = {tier: 'platinum', addons: ['boost_serum', 'led_light']}
    
    Patient self-books → sees "Hydrafacial" → drills to "Deluxe" → appointment_item materialized with planned_pricing_option = del_$250 (commerce) + appointment.planned_window_end - planned_window_start = 90min (operational, from preset override, NOT from pricing_option). Schedule shows "Hydrafacial Deluxe" (preset.display_label of leaf) in a 90min block. Same Hydrafacial SERVICE underlies all 3 tiers; SAME 3 pricing_options as Mindbody Batch 13 Step 03 evidence; OMNI's clean separation: operational (preset) ⊥ commerce (pricing_option).

---

### Rule TM-10: Combo bundle booking_preset pattern (bundled_member_preset_ids[])

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody cannot represent combo bundles cleanly. The user verbatim: "Hydrafacial machine, room 2 for esti. Then to injector room. Then to red light in room 2. All coordinated at specific times. Like, that's literally a regular day for us. This is not an edge case." Mindbody requires booking 3 separate appointments back-to-back — separate confirmations, separate cancellation policies, no atomic itinerary.
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
    - `linked_booking_preset_id` on each item = the MEMBER preset's id (the SPECIFIC service in the bundle); the appointment-level booking source preset is stored on `appointment.source_booking_preset_id` (NEW SUBSTRATE NEEDED — see verdict refinement below).

**Substrate gap discovered during rule authoring:** `appointment.source_booking_preset_id` is NOT in DL-20 inv 33 substrate definition. The appointment-level booking source preset id needs a home for analytics + UX recall + cancellation cascading. This FK is general-purpose:
- For BUNDLE bookings: source = the bundle preset that materialized N items
- For CATEGORY-LEVEL bookings (per TM-12): source = the category-targeting preset
- For SINGLE-ITEM preset bookings: source = the single-item preset
- For DIRECT raw service bookings (no preset): source = NULL
- For DEGENERATE raw category fallback (staff override per TM-12): source = NULL

Two options:
- **Option A:** Add `appointment.source_booking_preset_id` FK NULL column to DL-20 inv 33 (small extension; one column).
- **Option B:** Store via tag/metadata pattern (worse for queryability + analytics + cancellation logic).

**Revised verdict:** **OK with extension** — DL-20 inv 33 needs `appointment.source_booking_preset_id` FK NULL column (more general than the original `bundled_from_preset_id` name; covers all 3 preset shapes + direct booking). Flagged for Phase 1 DL amendment. Documented in [§Substrate gap audit](#substrate-gap-audit).

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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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

### Rule TM-12: Broad-default booking goes through a tenant-exposed self-bookable category-targeting booking_preset (NOT raw service_category) — preserves TM-01 taxonomy purity + respects gate timing

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody requires specific appointment-type selection at booking — patient cannot book broadly. Result: if patient doesn't know which Botox tier they want, they either pick wrong (creates rebooking) or abandon. Per user verbatim: "What if a client doesn't know what 'botox' type they want, now they see 5 tox options. Can they book this visit without knowing?"
2. **Cross-app pattern reference (pressure-test patterns, not hard evidence):**
   - **Restaurant reservations (OpenTable)** — Reserve a table for 4 at 7pm; menu choices happen AT the restaurant. Note: even OpenTable doesn't book a patient against the raw category "Italian Restaurants" — it books a specific RESTAURANT. The taxonomy stays taxonomy; the reservation goes through a discrete affordance.
   - **Calendly "round robin" event** — Patient picks an event type ("30-min Consult") which targets a TEAM (taxonomy concept); the event template carries operational defaults (duration / provider rotation rule); patient never books against a raw "team" object.
   - **Hotel category booking (Booking.com / Airbnb)** — Patient picks a property listing (the affordance carrying price / amenities / availability), not a raw category like "Beach Resorts."
3. **Underlying tenant need:** Patients often don't know specifics at booking time. The tenant must let them book at a broad level ("Injectables Visit" / "Provider Consult" / "Botox Touch-Up Generic") — WHEN the tenant has decided to expose that broad affordance. Some categories should NOT be self-bookable broadly (controlled medications, certain HRT flows, surgical consults, post-op issues, pediatric/minor cases, anything requiring prior intake/labs/provider review). The broad affordance, where exposed, must carry operational defaults somewhere — per TM-01 service_category is pure taxonomy (no operational semantics), so defaults live on a `booking_preset` that targets the category.
4. **OMNI generic primitive / rule:** Broad-default booking is a SUPPORTED PATTERN (not a UNIVERSAL RIGHT — per Knox 2026-05-17 wording correction). When and only when the tenant exposes a self-bookable category-targeting `booking_preset` (`target_service_category_id` populated AND `visible_in_self_booking = TRUE`), patients may broad-book at that category. The preset carries default_duration_minutes / default_provider_eligibility_filter / default_resource_requirement / default_planned_details. Materialization writes `appointment_item.planned_service_category_id = X`, `planned_service_id = NULL`, `linked_booking_preset_id = preset.id`. Service_category stays pure taxonomy — composer reads PRESET defaults, not category. (Raw category booking without a preset is a degenerate fallback for staff edge cases; see Decision logic.)
5. **Divergence / improvement vs Mindbody:** Mindbody can't broad-book at all. OMNI's category-targeting booking_preset is the canonical broad-default affordance when tenant exposes it. The PRESET is what carries operational defaults; the CATEGORY remains a pure organizational concept. Tenant decides per-category whether to expose a self-bookable broad-affordance OR keep it staff-mediated. **This rule explicitly fixes both the prior draft contradiction (category implicitly carrying operational requirements) AND the over-broad "may always book at category level" wording.**
6. **Anti-copy warning:** Do NOT put `default_duration` / `default_provider_eligibility_filter` / `default_resource_requirement` on `service_category` substrate. Service_category remains taxonomy per TM-01. Operational defaults live on the `booking_preset` that targets the category. Do NOT add a `service_category.self_bookable` BOOLEAN — visibility filtering is `booking_preset.visible_in_self_booking` (TM-16). Do NOT read service_category for axis requirements at booking — composer reads PRESET defaults. Do NOT claim "broad-default" is a universal right — it is a SUPPORTED PATTERN that requires tenant-exposed self-bookable preset. **Do NOT collapse all eligibility / intake / consent / clinical-clearance / license requirements into "booking gates" (Knox 2026-05-17 critical correction — would break basic medspa flow where patient books Hydrafacial online and signs consent at check-in, not before booking).** Gate timing is fine-grained — see refinement #3 below for the binding 5-timing model.

**Knox 2026-05-17 refinement #3 — gate-timing model (REPLACES the over-aggressive "all gates fire at booking" wording from prior draft).** Critical correction: **consent is usually a PRE-PERFORMANCE gate, NOT a pre-booking gate.** The earlier draft language implied all eligibility / intake / consent / clinical-clearance / license requirements fire at booking commit time. That would break basic medspa flow — a patient books Hydrafacial online, arrives, completes consent at check-in, then receives treatment. Consent gates THE TREATMENT, not the BOOKING.

Eligibility requirements fire at DIFFERENT TIMINGS in the appointment lifecycle. The substrate exposes 5 timings; tenant-policy assigns each requirement to one of them per service.

**The 5 gate timings (binding cross-DL doctrine; mirrored in DL-19 preamble post-Knox patch):**

| Gate timing | What it gates | Examples | Default for these requirements |
|---|---|---|---|
| **`booking_visibility`** | Whether service/preset appears in patient self-booking surface | `service.self_bookable = FALSE`; staff-only categories hidden from patient portal | Visibility decisions — not requirement-driven |
| **`booking_hard_gate`** | Blocks appointment creation at booking commit | Intake-first programs (Hims-style GLP-1 requires intake submitted before scheduling); no licensed provider available for service + jurisdiction; age/guardian impossibility for substance class; explicit tenant-policy "consent-before-booking" services (rare — e.g., new-patient surgical consent packet) | Provider license + jurisdiction; intake-first when explicitly configured; age limits with no workaround |
| **`pre_arrival_task`** | Task created at booking; must complete before arrival but does NOT block booking | Intake form for medspa visit; pre-treatment instructions; medical history update | **Intake (default for normal services)**; pre-visit instructions |
| **`pre_performance_gate`** | Blocks `encounter_line` creation (actual performed treatment) until satisfied | Botox consent before injection; LHR consent before laser; procedure consent before surgical/endoscopic procedure; medical history update required to authorize treatment | **Consent (default for normal medspa services)** — patient books Hydrafacial → arrives → completes consent at check-in → treatment proceeds. If consent missing at check-in, treatment is blocked but appointment + arrival are preserved. |
| **`closeout_documentation_gate`** | Blocks commerce_order closeout OR provider attestation OR encounter_line completion until satisfied | Lot / expiration / units / treatment_areas captured for injectable performed_line; provider signature attestation; required procedure note; required imaging captured | Lot capture; attestation; chart note |

**Binding rule:** Consent is usually `pre_performance_gate`, NOT `booking_hard_gate`. Tenant-policy may upgrade specific services to `booking_hard_gate` (e.g., new-patient surgical consent packet) BUT this is an explicit tenant decision per-service, NOT a substrate default.

**Worked examples (per Knox 2026-05-17):**

| Service | Booking visibility | Booking hard gate | Pre-arrival task | Pre-performance gate | Closeout/doc gate |
|---|---|---|---|---|---|
| Hydrafacial | tenant exposes preset | none | intake form (if required) | consent before treatment | provider note |
| Botox / Filler | tenant exposes preset | none | intake form | consent before injection | lot / units / areas + attestation |
| LHR | tenant exposes preset | none | intake form | LHR consent before laser | provider note |
| GLP-1 / HRT async (Hims-style) | tenant exposes preset OR staff-only | **intake-first → booking_hard_gate** | n/a (intake done pre-booking) | Rx prescribing requires intake review | provider attestation; Rx documentation |
| Surgery / GI endoscopy | consult preset self-bookable; procedure self-bookable = FALSE | consult: none; procedure: pre-procedure consent may be required pre-booking depending on tenant policy | intake for consult | procedure consent before procedure (always pre-performance) | procedure note + pathology linkage |

**Substrate location of gate_timing:** Domain 2 (Booking composer / availability) will model `service_policy` (DL-19 inv 18) to admit per-requirement `gate_timing` ENUM (with values matching the 5 timings above). Day 0 Domain 1 binds the TAXONOMY in this rule; Domain 2 implements the substrate column. **Flagged as Amendment D candidate** for the Domain 2 round.

**What DOES still apply at booking commit (refinement #3 narrowed):** Only the gates marked `booking_hard_gate` in tenant configuration. By default this is a small set: license/jurisdiction + intake-first when explicitly configured + age/guardian when there's no workaround. The rest (consent, most intake, most clinical clearance, most prior-consult) fires DOWNSTREAM in the lifecycle (pre-arrival / pre-performance / closeout). Broad-default booking simplifies the PATIENT UX (one click to book Injectables); the gate-timing model ensures it does NOT bypass requirements — but routes each to its correct firing point.

**Knox 2026-05-17 refinement #4 — category-level planned item must resolve to SPECIFIC at performed/charged truth.** Per the 3-layer pattern:
- Layer 1 (planned): `appointment_item.planned_service_category_id` populated, `planned_service_id` NULL is VALID and EXPECTED for broad-default booking.
- Layer 2 (performed): `encounter_line.service_id` MUST be specific (NOT NULL) per DL-20 inv 12. Provider determines specific service at care delivery time. If patient booked broad "Injectables" and received "Xeomin 24u" — the encounter_line.service_id resolves to the specific Neuromodulator service (or Xeomin-specific service if tenant models per-product); planned_details captures the specific product.
- Layer 3 (charged): `commerce_order_line.line_kind = service` + linked pricing_option ID MUST be specific (NOT NULL). Commerce truth is always specific (per DL-17 inv 6).
- Resolution path: patient broad-books → appointment_item has category-only → provider performs → encounter_line.linked_appointment_item_id = X + encounter_line.service_id = specific service (per DL-20 inv 36 refactor) + encounter_line.performed_payload captures specifics → commerce_order_line.pricing_option_id = specific tier → sale closes.
- A patient broad-booked appointment_item NEVER stays vague at performed/charged truth — it's the BOOKING that admits vagueness; downstream layers always concretize.

7. **Substrate pressure-test verdict:** **OK** — DL-19 inv 19 booking_preset already admits `target_service_category_id` FK. DL-20 inv 34 already admits `appointment_item.planned_service_category_id` FK NULL. DL-20 inv 12 already requires encounter_line.line_kind / service_id specifics at performed truth. No new substrate needed; this rule is a CONSTRAINT on the canonical path (broad booking = via preset, not raw category; gates always fire downstream; specifics emerge at performed truth).

#### Section B — Rule definition

8. **Trigger:** Patient or staff selects a category-targeting booking_preset at booking flow.
9. **Required inputs:** `booking_preset.id` with `target_service_category_id` populated, `target_service_id = NULL`. Optional: patient overrides to `planned_details` at booking.
10. **Decision logic:**
    - Resolve preset → read `target_service_category_id` + `default_duration_minutes` + `default_provider_eligibility_filter` + `default_resource_requirement` + `default_planned_details`.
    - **Schedulability floor validation per TM-07 refinement #1:** preset MUST have non-null `default_duration_minutes` AND `default_provider_eligibility_filter`. If either is NULL, REJECT at admin save (not at booking — booking surface only sees valid presets).
    - **Gate timing applies (refinement #3 — REVISED per Knox 2026-05-17 critical correction):** at booking commit, only `booking_hard_gate` requirements fire — NOT all requirements. By default this is a SMALL set: provider license + jurisdiction; intake-first when tenant explicitly configures the service this way (e.g., GLP-1 Hims-style); age/guardian when there's no workaround; tenant-configured "consent-before-booking" rarely. Most requirements fire DOWNSTREAM per the 5-timing model: consent → `pre_performance_gate` (at check-in / before treatment); standard intake → `pre_arrival_task` (created at booking, completed pre-arrival, does not block booking); lot capture + attestation + chart note → `closeout_documentation_gate`. Domain 1 enforces the TAXONOMY; Domain 2 implements the per-service `service_policy.gate_timing` ENUM (Amendment D candidate). Broad-default presets do NOT bypass requirements — they route each requirement to its correct firing point.
    - Run 4-axis booking composer per DL-15 inv 30 using PRESET defaults (NOT category-derived requirements):
      - Capacity axis: 1 (default for appointment-shape preset) unless preset specifies.
      - Staff axis: provider eligibility resolved per `preset.default_provider_eligibility_filter` (tenant-defined; e.g., "any injector" / "any MD" / specific staff group).
      - Room axis: per `preset.default_resource_requirement` (may be NULL — no specific room required).
      - Resource axis: same source.
    - Materialize `appointment_item` with: `planned_service_id = NULL`, `planned_service_category_id = preset.target_service_category_id`, `planned_details = preset.default_planned_details` (may be `{}`), `linked_booking_preset_id = preset.id`, `appointment.source_booking_preset_id = preset.id` (per Amendment A), `planned_pricing_option_id = NULL` (resolved at checkout per disclosure mode or staff resolution).
    - **Resolution constraint at performed/charged truth (refinement #4):** When the appointment is fulfilled in Domain 5 (encounter creation), the resulting `encounter_line.service_id` MUST be specific (NOT NULL) per DL-20 inv 12 + inv 36. The provider determines specific service at care delivery. The category-only `appointment_item` remains category-only (preserves planned intent audit); the encounter_line carries the specific service.id. The commerce_order_line carries the specific pricing_option.id. Vagueness ends at Layer 1; Layers 2 + 3 are always specific.
    - **Degenerate fallback (staff-only edge case):** Staff may create an appointment_item directly with `planned_service_category_id = X` and no preset reference (`linked_booking_preset_id = NULL`, `source_booking_preset_id = NULL`). In this case, composer applies tenant-default duration + no specific provider/room/resource (staff fills in manually). Patient-facing flow NEVER allows this path; broad-default for patients ALWAYS routes through a preset. Downstream gates still fire even for the staff fallback.
11. **Output / state change:** Insert appointment + appointment_item; emit `appointment_booked` with `booking_mode = 'category_level_via_preset'` (or `category_level_direct_staff` for degenerate fallback) in payload.
12. **Owning substrate:** `booking_preset` (DL-19 inv 19; with `target_service_category_id` populated) + `appointment_item.planned_service_category_id` (DL-20 inv 34) + `appointment_item.linked_booking_preset_id` (DL-20 inv 34).
13. **UI surface:** Patient self-booking — category-targeting presets surface as broad-default options (alongside service-targeting presets and bundle presets). Staff appointment creation — same presets + raw-service-level booking + degenerate raw-category booking (clearly labeled as "advanced / staff override").
14. **Failure mode:** If category-targeting preset is deactivated, surface alternative presets for same category. If composer cannot satisfy preset defaults (no eligible provider in window), reject + suggest alternative time slot. NEVER patient-facing fallback to raw category booking.
15. **Audit / event:** `appointment_booked` per DL-16 amendment 42; `booking_mode` field distinguishes category_level_via_preset vs category_level_direct_staff for analytics.
16. **Evidence citations (Mindbody + doctrine):**
    - Mindbody: no direct evidence (Mindbody cannot broad-book; this is a OMNI affordance that Mindbody lacks)
    - DL-19 inv 19 (booking_preset with `target_service_category_id` FK)
    - DL-20 inv 34 (appointment_item.planned_service_category_id FK NULL + linked_booking_preset_id FK)
    - DL-15 + DL-19 + DL-20 preambles (broad-default booking doctrine)
    - Preferences locked §1 "Broad-default booking; rich is opt-in"
    - User verbatim quote (Knox session 2)
    - TM-01 (taxonomy-only service_category — this rule preserves TM-01 by routing operational defaults through preset)
17. **Test case (3-layer walk + 5-timing gate walk):** Tenant creates booking_preset "Injectables Visit" with `target_service_category_id = injectables_category.id`, `default_duration_minutes = 60`, `default_provider_eligibility_filter = 'any_injector'`, `default_planned_details = {}`, `visible_in_self_booking = TRUE`. Tenant also creates "GLP-1 Consult" preset targeting weight_loss_category with the underlying service marked intake-first (Domain 2 will set `service_policy.gate_timing` for intake to `booking_hard_gate` per Amendment D).
- **Booking time (Sarah books "Injectables Visit"):** Schedulability floor passes (preset has duration + provider filter). At booking commit, ONLY `booking_hard_gate` requirements evaluated — provider license + jurisdiction valid; no intake-first configured for Injectables. Sarah does NOT sign consent here. Sarah does NOT need to complete intake here (intake is `pre_arrival_task` for normal medspa services). Booking succeeds. `appointment` row inserted with `source_booking_preset_id = preset.id`; `appointment_item` row inserted with `planned_service_category_id = injectables_category.id`, `planned_service_id = NULL`, `linked_booking_preset_id = preset.id`, `planned_details = {}`. Schedule shows "Injectables Visit — Sarah" at 2pm (per TM-14 projection).
- **Pre-arrival window:** CNS sends intake form (`pre_arrival_task`); Sarah completes it 2 days before visit. Booking remains active regardless of completion (per refinement #3).
- **Check-in (Sarah arrives at 1:55pm):** Front desk verifies intake complete; presents Neuromodulator consent on tablet for Sarah's signature (`pre_performance_gate`). Sarah signs.
- **Layer 2 (performed):** Provider Sarah Sees consults; patient wants Botox 24u. `encounter_line` insert succeeds because consent satisfied. `encounter_line` carries `linked_appointment_item_id = X`, `service_id = neuromodulator_service.id` (SPECIFIC — refinement #4), `performed_payload = {product: 'Botox', units: 24, treatment_areas: ['glabella', 'crows_feet']}`, `provider_id = sarah_sees.id`.
- **Closeout:** Provider attests (`closeout_documentation_gate` — attestation captured); lot/expiration recorded on performed_payload; chart note written. `commerce_order_line.line_kind = service`, `pricing_option_id = neuromodulator_per_unit.id` (SPECIFIC tier — refinement #4), `quantity = 24`, `unit_price = 14`, `total = 336`.
- **Contrast — Sarah's friend Patrick tries "GLP-1 Consult":** Patrick has not submitted intake yet. Tenant has configured `service_policy.gate_timing` for intake on the underlying GLP-1 service to `booking_hard_gate`. Booking RPC rejects with patient-facing redirect: "Please complete our medical intake before scheduling. [Start intake →]". Patrick completes intake (15min) → booking now succeeds. Single-service tenant policy on intake gating; not a Domain 1 hardcoded rule.
- **Result:** Sarah's broad-default booking went through cleanly without bypassing requirements; each requirement fired at its correct timing per the 5-timing model. Patrick's intake-first service correctly enforced `booking_hard_gate`. Category remained pure taxonomy at Layer 1; encounter + commerce specifics at Layers 2 + 3. Consent was a `pre_performance_gate` for Sarah's Hydrafacial-class flow; `booking_hard_gate` would have been wrong default.

---

### Rule TM-13: Missing planned_details NEVER render as "Unknown" patient-facing

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody's UI shows raw enum / NULL values in some patient-facing surfaces (e.g., "Service: Botox - Type: -" with dash for missing). Per user verbatim: "I don't want 'unknown' showing up all over the schedule."
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
   - **Google Calendar event titles** — Render the event title as-given; no schema or projection layer.
   - **Hospital EHR calendar (Epic)** — Renders "Visit Type" cleanly; chart-specific clinical details hidden in chart view.
   - **OpenTable host view** — Shows party name + size + time; cuisine / special requests appear on hover or detail view.
3. **Underlying tenant need:** Staff schedule view must be scannable. Each appointment is one row with a clean label + minimal structured info. Detail drilling happens on click/hover. Patient view is even more compressed.
4. **OMNI generic primitive / rule:** Schedule projection rule: each appointment renders as ONE label (regardless of how many appointment_items it contains). Label hierarchy (in priority order):
    - (1) If `appointment.source_booking_preset_id` is populated: `source_booking_preset.display_label` (the booking-level affordance label; preset wins for single / category / bundle preset bookings — tenant marketing name)
    - (2) Else if 1 appointment_item with `linked_booking_preset_id` populated: `linked_booking_preset.display_label` (per-item preset label)
    - (3) Else if 1 appointment_item with `planned_service_id` populated: `service.name` (operational kind name)
    - (4) Else if 1 appointment_item with only `planned_service_category_id`: `service_category.display_name` (degenerate direct-category staff fallback per TM-12)
    - (5) Else if multi-item without source_booking_preset: tenant-vocabulary "Multi-Service Visit" or compose top 2 item labels ("Botox + Filler")
    - In all cases: NEVER "Unknown" / NEVER raw JSONB / NEVER tech labels
5. **Divergence / improvement:** Mindbody renders the raw appointment-type name. OMNI projects from preset → service → category hierarchy with composability. Multi-line appointments are first-class with bundle labeling.
6. **Anti-copy warning:** Do NOT show planned_quantity / treatment_areas / preferred_product in schedule label by default (those live in detail drawer). Do NOT show pricing_option name in label (price is checkout concern, not schedule). Do NOT concatenate everything (cluttered).
7. **Substrate pressure-test verdict:** **OK** — UI projection rule reads existing substrate. (TM-10 verdict extension covers `appointment.source_booking_preset_id`.)

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

### Rule TM-15: service exposes self-bookable + structured-detail-disclosure as TWO INDEPENDENT axes (NOT one conflated ENUM)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody has a single boolean per appointment-type (Batch 13 Step 01: "Would you like to allow your clients to book this appointment online? Yes/No"). No graduated control over depth of patient-required input. No separation between "patient may book" and "what details are required."
2. **Cross-app pattern reference:**
   - **Calendly** — Per-event-type "Visibility" (public / private / hidden) is SEPARATE from "Booking questions" (skip / optional / required per question). Two axes; two settings.
   - **OpenTable** — Per-restaurant "Online reservations enabled" is SEPARATE from "Special request form" required/optional.
   - **Cal.com** — Hidden event type can still be booked by staff via direct link; question requirement is per-question.
3. **Underlying tenant need:** Two independent concerns:
   - (a) **Is this service self-bookable by patients?** (visibility / discoverability axis — TRUE/FALSE)
   - (b) **When booked (by ANY actor — patient or staff), what's the structured-detail capture depth?** (form rigor axis — none / optional / required)
   - A service may be self-bookable with no structured details ("Quick Touch-Up" — patient picks slot, that's it).
   - A service may be staff-only but still REQUIRE structured details when staff books it ("Complex Multi-Area LHR" — front desk fills the form on patient's behalf).
   - Conflating these into one ENUM forces tenant into choices like "if I want patients to book it, I have to accept zero details" or "if I want required details, patients can't book it" — neither matches reality.
4. **OMNI generic primitive / rule:** TWO INDEPENDENT FIELDS on `service`:
   - **`service.self_bookable` BOOLEAN** — `TRUE` = service appears in patient self-booking flow; `FALSE` = staff-only. Default: `TRUE`.
   - **`service.planned_detail_disclosure_mode` ENUM** 3 values: (1) `none` — no structured detail capture at booking (form skipped regardless of actor); (2) `optional` — form rendered with all fields optional (broad-default doctrine; default value); (3) `required` — form rendered with schema-required fields enforced regardless of actor. Per-service tenant configuration.
   - Both fields evaluated independently at booking flow.
5. **Divergence / improvement vs prior draft (Knox 2026-05-17 patch):** Earlier draft conflated these into one 3-state ENUM `self_bookable_progressive_disclosure_mode`. Knox correctly flagged: "These are independent axes." Patch decomposes into 2 fields. Mindbody's online_bookable boolean maps cleanly to OMNI's `self_bookable`; Mindbody has no equivalent of `planned_detail_disclosure_mode` — that's an OMNI improvement.
6. **Anti-copy warning:** Do NOT recombine into one ENUM. Do NOT default `self_bookable = FALSE` (broad discoverability is default; tenant opts services OUT). Do NOT default `planned_detail_disclosure_mode = required` (broad-default doctrine requires patient flexibility).
7. **Substrate pressure-test verdict:** **OK with extension** — Existing DL-19 preamble lists `self_bookable_progressive_disclosure_mode` ENUM 3-value; this patch splits into 2 fields. DL-15 inv 30 service substrate carries both. Flagged for Phase 1 DL amendment (per Amendment B in §Substrate gap audit).

#### Section B — Rule definition

8. **Trigger:** Patient self-booking flow filters services; booking flow renders detail form for either actor; admin edits service.
9. **Required inputs:** `service.self_bookable` BOOLEAN (defaults TRUE); `service.planned_detail_disclosure_mode` ENUM (defaults `optional`).
10. **Decision logic:**
    - On admin write: validate `self_bookable` is BOOLEAN; validate `planned_detail_disclosure_mode ∈ {none, optional, required}`.
    - Patient self-booking visibility filter: include service iff `service.self_bookable = TRUE AND service.is_active = TRUE`.
    - Staff booking flow: all active services visible regardless of `self_bookable`.
    - Detail form rendering (for either actor): if `planned_detail_disclosure_mode = none`, skip form; if `optional`, render form with all fields optional (per schema); if `required`, render form with schema-required fields enforced.
    - Submission validation: same rules as form rendering; `required` mode enforces schema-required fields.
11. **Output / state change:** Filters patient view; gates form rendering + submit validation.
12. **Owning substrate:** `service.self_bookable` BOOLEAN + `service.planned_detail_disclosure_mode` ENUM (DL-15 inv 30 service substrate; DL-19 preamble updated per Amendment B).
13. **UI surface:** Admin service edit form — 2 separate controls (checkbox + dropdown). Patient self-booking — filtered list; rendered form per disclosure_mode. Staff booking — full list; rendered form per disclosure_mode.
14. **Failure mode:** If `required` and submitter omits required fields, surface inline error (never patient-facing "Unknown" rendering). If `self_bookable = FALSE`, patient doesn't see service; cannot trigger error.
15. **Audit / event:** `service.self_bookable_changed` / `service.disclosure_mode_changed` per DL-16 amendment 42.
16. **Evidence citations (Mindbody + doctrine):**
    - Mindbody Batch 13 Step 01 (online_bookable boolean — partial evidence; OMNI extends with disclosure_mode)
    - DL-15 inv 30 (service substrate)
    - DL-19 preamble (broad-default booking doctrine; current single-ENUM version superseded by this patch)
    - Preferences locked §1 "Broad-default booking; rich is opt-in"
    - User verbatim quote
    - Knox 2026-05-17 patch (decompose compound enum)
17. **Test case:** Tenant creates "Botox Touch-Up" service with `self_bookable = TRUE`, `planned_detail_disclosure_mode = optional`. Patient sees service, books at category level with no structured details — success. Tenant creates "Complex Multi-Area LHR" service with `self_bookable = FALSE`, `planned_detail_disclosure_mode = required`. Patient does NOT see service in self-booking. Front desk staff books on patient's behalf — form REQUIRES treatment_areas selection per schema; staff fills it in. Tenant creates "Quick Lash Tint" with `self_bookable = TRUE`, `planned_detail_disclosure_mode = none`. Patient books in one click — no form rendered.

---

### Rule TM-16: Patient portal filters services by service.self_bookable + booking_preset.visible_in_self_booking

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody filters by online_bookable boolean (Batch 13 Step 01). Single binary.
2. **Cross-app pattern reference:**
   - **Calendly "Public" vs "Private" event types** — Public visible at booking URL; private requires direct link.
   - **Cal.com "hidden" event types** — Hidden from public list; accessible via direct link.
3. **Underlying tenant need:** Patient portal must not surface services or presets that aren't patient-self-bookable. Staff retains full visibility.
4. **OMNI generic primitive / rule:** Patient portal service-list query filters by `service.self_bookable = TRUE AND service.is_active = TRUE`. Patient portal preset-list query filters by `booking_preset.visible_in_self_booking = TRUE AND booking_preset.active = TRUE AND (the underlying target service OR all target_category services have service.self_bookable = TRUE)`. Staff query: all active services + all active presets regardless of self_bookable / visible_in_self_booking flags.
5. **Divergence / improvement vs Mindbody:** Same intent as Mindbody; reads from BOOLEAN field (per TM-15 patch) decoupled from disclosure mode.
6. **Anti-copy warning:** Do NOT bake additional patient-filter logic (e.g., "patient_tier >= silver to see") at substrate; that's a separate access control concern (DL-18 patient capability flags / consumer_view_setting per DL-19 inv 13).
7. **Substrate pressure-test verdict:** **OK** — `service.self_bookable` BOOLEAN (per TM-15) + `booking_preset.visible_in_self_booking` BOOLEAN (per DL-19 inv 19) cover.

#### Section B — Rule definition

8. **Trigger:** Patient self-booking flow renders service / preset list.
9. **Required inputs:** `tenant_id`, catalog query.
10. **Decision logic:** Apply filter:
    - Services: `service.self_bookable = TRUE AND service.is_active = TRUE`.
    - Presets: `booking_preset.visible_in_self_booking = TRUE AND booking_preset.active = TRUE AND (booking_preset.target_service.self_bookable = TRUE OR booking_preset.target_service_category services include ≥1 self_bookable service)`.
11. **Output / state change:** Returns filtered service / preset list.
12. **Owning substrate:** Read-only on `service` + `booking_preset`.
13. **UI surface:** Patient portal booking page.
14. **Failure mode:** Empty list → render "No services available for self-booking right now. Please call us at [tenant phone] or [contact us link]" (NOT "Service Unknown").
15. **Audit / event:** Optional analytics: `patient_portal.service_list_rendered.count = N`.
16. **Evidence citations:** TM-15 (`self_bookable` BOOLEAN) + DL-19 inv 19 (booking_preset.visible_in_self_booking) + Mindbody Batch 13 Step 01.
17. **Test case:** Tenant has 50 services; 35 with `self_bookable = TRUE` AND `is_active = TRUE`. Patient portal shows 35; staff sees all 50. Tenant adds "VIP Consultation" service with `self_bookable = FALSE`; patient view unchanged; staff view +1. Tenant creates preset "Brazilian LHR" targeting LHR service (self_bookable = TRUE) with `visible_in_self_booking = TRUE`; preset appears in patient view. Tenant creates preset "Complex MD Consult" targeting MD Consult service (self_bookable = FALSE) with `visible_in_self_booking = FALSE`; preset hidden from patients; staff sees it.

---

## Section D — Structured detail capture

### Rule TM-17: service.planned_detail_schema governs structured detail validation (JSONB Schema)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody has zero structured booking-detail schema. Free-form Notes + appointment-type name carry everything. Per user verbatim: "the service rendered, eg botox 36 units at checkout, while the service type gets tracked, everything recorded."
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
    - If `service.quantity_strategy = per_unit_quantity` AND `service.planned_detail_disclosure_mode = required`: planned_quantity required at booking.
    - If `service.quantity_strategy = per_unit_quantity` AND `planned_detail_disclosure_mode = optional`: planned_quantity optional; defaults to NULL if patient skips.
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

### Rule TM-20: Treatment areas live in planned_details JSONB (canonical); planned_treatment_areas[] is a MATERIALIZED PROJECTION

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody requires staff to type treatment areas in Notes or pick a different appointment-type per area combo (e.g., "Brazilian LHR" vs "Full Body LHR" as separate services). Per user verbatim: "we want to know if there's botox, Dysport, jeaveau, cheek filler, lip filer all during one visit."
2. **Cross-app pattern reference:**
   - **Restaurant POS modifier toggles** — Per-item modifiers ("no onion" / "extra cheese") stored in order JSON; line items index the common ones for query.
   - **Hospital OR procedure body regions** — Surgery sites recorded in procedure JSONB; CPT-coded sites materialized for billing query.
   - **PostgreSQL JSONB + generated columns** — Standard pattern: canonical JSONB; generated/materialized column for indexability.
   - **FHIR Observation.bodySite** — CodeableConcept in resource; backend index for query.
3. **Underlying tenant need:** Some services are "performed on N areas" where N is variable (LHR Brazilian = 1 area; Full Body = 5+ areas; neuromodulator face = 1-5 areas). Tenant must capture planned AND performed areas. Pricing may scale per area (per_unit_quantity). The substrate needs ONE canonical source of truth + fast query access for analytics + per-area resource planning. Per Knox 2026-05-17 patch: drift risk if `planned_details` JSONB AND `planned_treatment_areas[]` ARRAY both carry the same data without explicit source-of-truth rule.
4. **OMNI generic primitive / rule:** **CANONICAL SOURCE OF TRUTH:** `appointment_item.planned_details.treatment_areas` JSONB field (validated against `service.planned_detail_schema` per TM-17 / TM-18). **MATERIALIZED PROJECTION:** `appointment_item.planned_treatment_areas[]` ARRAY column maintained atomically by trigger on `planned_details` write — supports indexed queries for analytics (e.g., "how many LHR Brazilian bookings last month") + per-area resource planning at booking composer. Same pattern on encounter side: `encounter_line.performed_payload.treatment_areas` (canonical JSONB) with optional materialized projection for query. Per Knox 2026-05-17 patch: pick ONE source of truth; ARRAY column does NOT accept direct writes — it is derived.
5. **Divergence / improvement vs Mindbody:** Mindbody offers no structured capture; OMNI's schema-driven JSONB + materialized ARRAY projection gives the best of both (declarative validation + index-speed queries).
6. **Anti-copy warning:** Do NOT write to `planned_treatment_areas[]` directly. Writes go to `planned_details.treatment_areas`; trigger updates ARRAY. Do NOT enumerate treatment areas at OMNI substrate level (`treatment_area_brazilian` is tenant catalog, not OMNI enum) — enum values live in `service.planned_detail_schema.treatment_areas.items.enum`. Do NOT model each area as a separate appointment_item by default (single LHR service + multi-area capture is cleaner; multi-item for combo bundles per TM-10).
7. **Substrate pressure-test verdict:** **OK with extension** — DL-20 inv 34 currently lists both fields but doesn't explicitly mark which is source of truth. Flagged for Phase 1 DL-20 inv 34 clarification (per Amendment C in §Substrate gap audit). No new substrate columns; existing fields stay but documented + enforced (via trigger or computed-column pattern).

#### Section B — Rule definition

8. **Trigger:** Booking flow for service with `planned_detail_schema.treatment_areas` defined.
9. **Required inputs:** `appointment_item.planned_details.treatment_areas` (JSON path; optional unless schema marks required).
10. **Decision logic:**
    - Schema-validated per TM-18 against `service.planned_detail_schema.treatment_areas`.
    - Patient/staff picks multi-select; saved into `planned_details.treatment_areas` JSONB field.
    - On `planned_details` write: trigger atomically updates `planned_treatment_areas[]` materialized column.
    - Reconciliation at encounter_line: `performed_payload.treatment_areas` may differ from planned (patient added/removed at visit); analytics captures variance via materialized column.
11. **Output / state change:** `appointment_item.planned_details.treatment_areas` populated (canonical); `planned_treatment_areas[]` ARRAY column auto-populated by trigger; emit `appointment_item.planned_details_set` event.
12. **Owning substrate:** `appointment_item.planned_details` JSONB (canonical per DL-20 inv 34) + `appointment_item.planned_treatment_areas[]` ARRAY (materialized projection) + `encounter_line.performed_payload.treatment_areas` (DL-20 inv 13).
13. **UI surface:** Booking form — multi-select chips/checkboxes (writes to JSONB path). Analytics dashboards read materialized projection for query speed.
14. **Failure mode:** Invalid area value (not in schema enum) rejected per TM-18. Direct write attempt to `planned_treatment_areas[]` rejected (trigger/policy enforces JSONB-only write path).
15. **Audit / event:** `appointment_item.planned_details_set` per DL-16 amendment 42 (NOT a separate event for the materialized projection — it's derived).
16. **Evidence citations:** DL-20 inv 34 (planned_details JSONB + planned_treatment_areas[] — per Amendment C clarification) + DL-20 inv 13 (encounter_line.performed_payload.treatment_areas) + TM-17 + TM-18 + Knox 2026-05-17 patch (pick one source of truth) + user verbatim.
17. **Test case:** Patient books "Brazilian LHR" preset → `planned_details = {treatment_areas: ['brazilian']}` (JSONB canonical write); trigger sets `planned_treatment_areas = ['brazilian']` (ARRAY projection). Patient adds underarms → `planned_details = {treatment_areas: ['brazilian', 'underarms']}`; ARRAY projection updates atomically. Analytics query `WHERE 'brazilian' = ANY(planned_treatment_areas)` is fast (indexed); same result available via `planned_details->'treatment_areas' ? 'brazilian'` (canonical but slower without specific JSONB index). At visit, encounter_line.performed_payload.treatment_areas = ['brazilian', 'underarms', 'full_legs'] — variance captured.

---

## Section E — Multi-line visit + add-ons

### Rule TM-21: Add-on is appointment_item with parent_item_id (NOT a new "add-on visit type" enum)

**Phase:** DAY_0

#### Section A — Flight-lane translation

1. **Mindbody behavior observed:** Mindbody has a "Convert to add-on" boolean per appointment-type (Batch 13 Step 01 evidence: "Do you want to convert this appointment to an add-on? Yes/No"). Add-ons are a TYPE of appointment-type. Inconsistent with the model — an add-on is the relationship to another visit, not a kind of visit.
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
   - **Restaurant combo materialization** — Selecting "Combo #3" auto-materializes sandwich + side + drink line items.
   - **Travel package booking** — Selecting "Hawaii package" materializes flight + hotel + car rows.
3. **Underlying tenant need:** When tenant offers pre-defined combos, patient should be able to book in ONE action and have substrate materialize the multiple items atomically.
4. **OMNI generic primitive / rule:** Bundle preset selection at booking → resolve `bundled_member_preset_ids[]` → per-member preset run TM-08 single-item resolution → materialize N appointment_items atomically (per DL-16 inv 6).
5. **Divergence / improvement:** Per TM-10. Bundle is a PRESET shape, not a service shape.
6. **Anti-copy warning:** Do NOT auto-cancel sibling items if patient skips one — each has independent state.
7. **Substrate pressure-test verdict:** **OK** — Covered by TM-10 substrate. (TM-10's Amendment A extension on `appointment.source_booking_preset_id` per Knox patch applies here too.)

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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):** Stripe price archival (per-product unlink vs global archive).
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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
2. **Cross-app pattern reference (analogies for pressure-testing, NOT hard evidence — hard evidence is Mindbody + DL refs + user gap + Build Contract):**
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

## §4 Substrate gap audit (post Phase 1 hardening v3 amendments applied 2026-05-17 + Knox refinements integrated)

Aggregated substrate pressure-test verdicts across all 30 Day 0 rules. **Status: all 3 DL amendments (A / B / C) APPLIED in commit `ee46585` to DL-19 + DL-20 DRAFTs. Previously OK-with-extension rules are now OK.**

| Rule | Verdict | Notes |
|---|---|---|
| TM-01 | OK | service_category — existing DL-15 + DL-19 |
| TM-02 | OK | service — DL-15 amendment 30 + 32 + 33 + Amendment B split fields |
| TM-03 | OK | pricing_option — DL-17 inv 1-5; Knox refinement #2 enforced (no operational defaults sneak into pricing_option) |
| TM-04 | OK | service_pricing_option_assignment — DL-17 inv 1 |
| TM-05 | OK | service.service_type ENUM 5-value — DL-15 amendment 32 inv 32 |
| TM-06 | OK | service.quantity_strategy ENUM 5-value — DL-15 amendment 5 + DL-17 inv 5 |
| TM-07 | OK | booking_preset — DL-19 inv 19 + Knox refinement #1 schedulability floor CHECK on category-targeting presets |
| TM-08 | OK | Single-item booking_preset — DL-19 inv 19 + DL-20 inv 34 |
| TM-09 | OK | Hierarchical drill-down booking_preset — DL-19 inv 19 parent_preset_id + Knox refinement #2 (operational defaults on preset/service, NOT pricing_option) |
| TM-10 | OK (Amendment A applied) | Combo bundle booking_preset — `appointment.source_booking_preset_id` FK NULL added to DL-20 inv 33 in commit ee46585 |
| TM-11 | OK | booking_preset.default_planned_details — DL-19 inv 19 |
| TM-12 | **OK with extension (Amendment D candidate — DEFERRED to Domain 2)** | Broad-default via tenant-exposed category-targeting preset — DL-19 inv 19 + DL-20 inv 34 + Knox refinement #3 REVISED (gate-timing model, 5 timings; consent is pre-performance not pre-booking) + refinement #4 (encounter resolves to specific). Amendment D candidate: DL-19 inv 18 `service_policy` will gain per-requirement `gate_timing` ENUM. Day 0 Domain 1 binds TAXONOMY; Domain 2 implements substrate column. |
| TM-13 | OK | Clean patient-facing label — UI projection per DL-16 inv 3 |
| TM-14 | OK (Amendment A applied) | Schedule projection reads `appointment.source_booking_preset_id` (Amendment A live in DL-20 inv 33) |
| TM-15 | OK (Amendment B applied) | `service.self_bookable` BOOLEAN + `service.planned_detail_disclosure_mode` ENUM — split live in DL-19 preamble per commit ee46585 |
| TM-16 | OK (Amendment B applied) | Patient portal filter reads `service.self_bookable` + `booking_preset.visible_in_self_booking` |
| TM-17 | OK | service.planned_detail_schema JSONB — DL-15 inv 30 + DL-19 inv 2 |
| TM-18 | OK | planned_details substrate-level validation — DL-19 inv 8 |
| TM-19 | OK | appointment_item.planned_quantity — DL-20 inv 34 |
| TM-20 | OK (Amendment C applied) | Treatment areas source-of-truth clarified — `planned_details.treatment_areas` canonical, `planned_treatment_areas[]` materialized projection — DL-20 inv 34 updated in commit ee46585 |
| TM-21 | OK | Add-on appointment_item with parent_item_id — DL-20 inv 34 |
| TM-22 | OK | Multi-line visit — DL-20 inv 33-34 |
| TM-23 | OK (Amendment A applied) | Bundle materialization — covered by Amendment A (`appointment.source_booking_preset_id` populated for bundles) |
| TM-24 | OK | Soft-delete (is_active) — standard pattern |
| TM-25 | OK | Disassociate vs Deactivate — DL-17 inv 1 |
| TM-26 | OK | service_category hierarchy depth — DL-15 + TM-01 |
| TM-27 | OK | tenant_vocabulary_override — DL-19 inv 12 |
| TM-28 | OK | No specialty visit types — Cross-DL warning enforcement |
| TM-29 | OK | No vendor names in substrate — Cross-DL warning enforcement |
| TM-30 | OK | "Visit type" projection — TM-14 |

### Substrate gap audit summary (post Phase 1 hardening v3 amendments + Knox 5 refinements + Round 1.7 gate-timing correction)

- **Total Day 0 rules:** 30
- **OK:** **29 rules** (no extension)
- **OK with extension:** **1 rule** (TM-12 — carries Amendment D candidate for Domain 2: `service_policy.gate_timing` ENUM per-requirement)
- **NEW SUBSTRATE NEEDED:** 0 rules

Knox's refinements (2026-05-17 post-amendment + Round 1.7 correction) integrated into rules:
- Refinement #1 (schedulability floor on category-targeting presets) → TM-07 binding CHECK at admin write
- Refinement #2 (pricing must not sneak into scheduling) → TM-03 anti-copy + TM-09 explicit "operational defaults on preset/service, NOT pricing_option"
- Refinement #3 REVISED Round 1.7 (gate-timing model, NOT "all gates at booking") → TM-12 binds 5-timing taxonomy; consent default is `pre_performance_gate` not `booking_hard_gate`; Domain 2 implements per-service `gate_timing` ENUM as Amendment D
- Refinement #4 (category-level planned must resolve to specific at performed/charged) → TM-12 3-layer constraint; encounter_line.service_id NOT NULL per DL-20 inv 12
- Refinement #5 (Domain 1 ≠ scheduler completion) → index doc §6 stronger warning
- Round 1.7 wording fix → broad-default booking is SUPPORTED PATTERN not UNIVERSAL RIGHT; requires tenant-exposed self-bookable category-targeting preset

Doctrine held under: original 30-rule pressure-test (Round 1) + Knox's patch review (Round 1.5) + Knox's 5-refinement review (Round 1.6) + Knox's gate-timing correction (Round 1.7). The Round 1.7 correction is critical — the prior draft would have broken normal medspa flow (consent treated as booking blocker). Patient books Hydrafacial → arrives → signs consent → treats: this flow is now substrate-correct.

Domain 1 is **substrate-slice-ready for treatment-menu / visit-type concerns ONLY** — per refinement #5, this does NOT generalize to scheduler-wide readiness. Domain 2 is the next dangerous domain AND must implement Amendment D (`service_policy.gate_timing` ENUM).

### DL amendment notes (3 amendments — ALL APPLIED in commit `ee46585` per Phase 1 hardening v3 2026-05-17)

#### Amendment A — DL-20 inv 33: add `appointment.source_booking_preset_id` FK NULL

**Gap:** `appointment.source_booking_preset_id` FK NULL is needed in DL-20 inv 33 substrate to track the booking-level preset that initiated the booking action — covering all 4 booking shapes uniformly:
- Bundle preset booking (per TM-10): source = bundle preset that materialized N items
- Category-level preset booking (per TM-12): source = category-targeting preset
- Single-item preset booking (per TM-08): source = single-item preset
- Direct raw service booking OR degenerate staff fallback: source = NULL

**Justification:** The `appointment_item.linked_booking_preset_id` per DL-20 inv 34 captures the per-item preset (the MEMBER preset for bundles; same as source for single-item). The APPOINTMENT-level source preset is the unified analytics + cancellation + schedule-label anchor. Per Knox 2026-05-17 patch: name generalized from `bundled_from_preset_id` to `source_booking_preset_id` to avoid bundle-only narrowing. This is needed for:
- Schedule rendering hierarchy per TM-14 (preset label projection priority 1)
- Analytics (which presets convert / are most popular; bundle vs category vs single comparison)
- Cancellation UX (cancel appointment cascades correctly to all linked items)
- Recall / future-care-obligation linkage per DL-20 inv 16

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
+├── source_booking_preset_id FK NULL        -- DL-19 inv 19 booking_preset
+│       that initiated the booking action; NULL for direct raw service
+│       bookings + degenerate staff category fallback; populated for
+│       single-item presets / category-targeting presets / bundle presets
+│       uniformly. Used for analytics + schedule label projection per
+│       TM-14 + cancellation cascading.
 ├── fulfillment_encounter_id FK NULL
 └── created_by_actor (DL-16 amendment 43 4-tuple)
```

#### Amendment B — DL-15 inv 30 + DL-19 preamble: split `self_bookable_progressive_disclosure_mode` into 2 fields

**Gap (introduced via Knox patch 2026-05-17):** The current DL-19 preamble defines a single ENUM `service.self_bookable_progressive_disclosure_mode` with 3 values (`none` / `optional` / `required`) that conflates TWO independent concerns:
- (a) Is this service self-bookable by patients at all? (visibility / staff-only)
- (b) When booked, what's the structured detail capture depth? (none / optional / required)

These are independent axes. A service can be self-bookable with no structured details (e.g., "Quick Touch-Up"); or staff-only but still have required structured details when staff books it (e.g., complex multi-area LHR where front desk fills the form on the patient's behalf).

**Justification:** Per Knox 2026-05-17 patch — "A service can be self-bookable with no structured details. Or staff-only but still have required structured details when staff books it."

**Proposed DL-15 inv 30 + DL-19 preamble extension:**

```diff
 service substrate (DL-15 inv 30):
 ├── ... (existing fields)
-├── self_bookable_progressive_disclosure_mode ENUM
-│       (none / optional / required)
+├── self_bookable BOOLEAN
+│       (TRUE = patient may self-book; FALSE = staff-only)
+│       Default: TRUE (broad default discoverability)
+├── planned_detail_disclosure_mode ENUM
+│       (none / optional / required)
+│       Governs structured detail capture at booking flow, INDEPENDENT
+│       of self_bookable. Default: optional (broad-default doctrine).
 └── ...
```

#### Amendment C — DL-20 inv 34: clarify source-of-truth for treatment areas (JSONB canonical; ARRAY is materialized projection)

**Gap:** DL-20 inv 34 currently lists BOTH `planned_treatment_areas[]` ARRAY field AND `planned_details JSONB` (with treatment_areas typically inside JSONB per service.planned_detail_schema). The comment "(also captured in planned_details for typing)" is ambiguous — drift risk if write paths don't keep them in sync.

**Justification:** Per Knox 2026-05-17 patch — "Either: treatment areas live inside planned_details, and planned_treatment_areas[] is an indexed/materialized projection; or treatment areas are first-class fields and planned_details does not duplicate them. Pick one source of truth."

**Opus recommendation: Option A** — `planned_details.treatment_areas` JSONB is the canonical source of truth; `planned_treatment_areas[]` ARRAY is a materialized projection maintained atomically by trigger (or write-path computed column). This preserves schema-driven discipline (`service.planned_detail_schema` validates JSONB) AND keeps ARRAY queryable for analytics ("how many LHR Brazilian bookings last month").

**Proposed DL-20 inv 34 clarification:**

```diff
 appointment_item substrate (DL-20 inv 34):
 ├── ... (existing fields)
-├── planned_treatment_areas[] (also captured in planned_details for typing)
+├── planned_treatment_areas[] MATERIALIZED PROJECTION
+│       of planned_details.treatment_areas (per service schema). Maintained
+│       atomically by trigger on planned_details write. Indexed for
+│       analytics queries. Source of truth is planned_details JSONB;
+│       do NOT write to this column directly.
 ├── planned_details JSONB  CANONICAL SOURCE OF TRUTH
 │       (validated against service.planned_detail_schema per DL-19 inv 18;
 │       treatment_areas / preferred_product / planned_cycles / tier preferences
 │       all live here; ARRAY projection is derived for indexability)
 └── ...
```

**Status: ALL 3 AMENDMENTS APPLIED** in commit `ee46585` (Phase 1 hardening v3, 2026-05-17). DL-19 + DL-20 DRAFTs updated; system_map cross-reference added under DL-15 Phase 1 hardening v3 section. Locked DL-15 / DL-16 untouched. Substrate gap audit accordingly updated to 30 OK / 0 OK-with-extension / 0 NEW SUBSTRATE NEEDED. Pre-substrate-slice; no code/migration cost.

---

## §5 Resolution map (10 doctrine questions → rules that resolve them)

| Doctrine question | Resolving rules |
|---|---|
| Q1. What is a visit type? | TM-30 (not a substrate concept; tenant catalog projection of booking_preset / service / service_category) |
| Q2. What is a service_category? | TM-01 (taxonomy-only, hierarchical, no price) + TM-26 (tenant-controlled depth) |
| Q3. What is a service? | TM-02 (operational kind, no price, no specialty) + TM-05 (service_type 5-enum) + TM-06 (quantity_strategy 5-enum) |
| Q4. What is a booking_preset? | TM-07 (tenant-configured affordance) + TM-08 / TM-09 / TM-10 (3 shape patterns) + TM-11 (default_planned_details) |
| Q5. Simple booking vs guided booking | TM-12 (broad-default doctrine via category-targeting preset) + TM-15 (`self_bookable` BOOLEAN + `planned_detail_disclosure_mode` ENUM as 2 independent axes) + TM-16 (patient portal filter) |
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

### Evidence sources used (HARD EVIDENCE — distinct from cross-app pattern references)

#### Mindbody ingestion (sourced)
- Batch 13 (service edit / pricing options drawer + 4-type taxonomy + advanced edit page + staff assignment with prep/booking/finish — TM-02 / TM-03 / TM-04 / TM-05 / TM-06 / TM-08 / TM-21 / TM-25)
- Batch 20 (mobile retail catalog with 14 service categories + Bloom Health "Medical Visits" + walk-in cart reduced catalog — TM-01 / TM-02 / TM-21)
- Batch 8 + 13 + 20 (Botox-as-product 7-tier workaround — TM-06)
- Batch 13 Step 04 (disabled pricing options preserved — TM-24)
- Batch 13 Step 06 (Disassociate / Advanced Edit / Deactivate 3-action ⋮ menu — TM-04 / TM-25)
- Layer 2 Section C / D / G (settings + service catalog + commerce evidence)

#### Cross-app pattern references (analogies for pressure-testing, NOT hard evidence per Knox 2026-05-17 patch)
- **Restaurant POS / OpenTable / Toast** — TM-01 / TM-02 / TM-07 / TM-10 / TM-11 / TM-21 / TM-23
- **Airline (Delta / United / PNR)** — TM-03 / TM-10 / TM-22
- **Amazon product taxonomy** — TM-01 / TM-09 / TM-13 / TM-26
- **Epic / Cerner / athenaHealth** — TM-02 / TM-26 / TM-28 / TM-30
- **Calendly / Cal.com / Zoom Scheduler** — TM-05 / TM-07 / TM-08 / TM-12 / TM-15 / TM-16 / TM-17
- **Boulevard** — TM-05 (medspa-native parallel pattern)
- **Hospital OR / endoscopy block scheduling** — TM-06 / TM-19 / TM-20 / TM-22
- **Stripe / Shopify** — TM-04 / TM-24
- **FHIR** — TM-17 (resource schema) / TM-28 / TM-30 (CodeableConcept tenant-extensible)
- **Salesforce custom labels / Shopify locale** — TM-27

These cross-app references are unsourced analogies used to verify the OMNI abstraction holds across domains. They are NOT implementation prescriptions and NOT hard evidence per Knox patch.

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

1. **Amendment A — DL-20 inv 33: add `appointment.source_booking_preset_id` FK NULL.** (Renamed from earlier `bundled_from_preset_id` per Knox 2026-05-17; more general — covers single / category / bundle / direct booking shapes uniformly.) **Opus recommendation: APPLY** — pre-substrate-slice; small column addition; enables clean schedule label projection (TM-14) + cancellation cascading + booking-shape analytics.

2. **Amendment B — DL-15 inv 30 + DL-19 preamble: split `self_bookable_progressive_disclosure_mode` into `service.self_bookable` BOOLEAN + `service.planned_detail_disclosure_mode` ENUM.** Per Knox 2026-05-17 patch — current conflated ENUM is Pattern 3 (compound enum) regression. **Opus recommendation: APPLY URGENTLY** — splitting prevents downstream rules from inheriting the conflation. Most urgent of the 3 amendments.

3. **Amendment C — DL-20 inv 34: clarify treatment_areas source-of-truth.** `planned_details.treatment_areas` is canonical JSONB; `planned_treatment_areas[]` ARRAY is materialized projection maintained by trigger. Per Knox 2026-05-17 patch — pick one source of truth. **Opus recommendation: APPLY** — documents intent; prevents write-path drift; no column changes (clarifies intent + adds trigger).

4. **`service.is_addon` flag treatment:** UI hint only (Opus interpretation) OR substrate enforcement? **Opus recommendation: UI hint only** — substrate enforces add-on relationship via `appointment_item.parent_item_id` (TM-21); `is_addon` flag is admin convenience for catalog organization. Tenant may use an "add-on" service as standalone if they want.

5. **Hierarchical preset display depth UI cap:** TM-09 admits arbitrary depth at substrate; UI may impose soft cap (Opus suggests 6 levels). **Recommendation: defer to UX design** — substrate is unconstrained; UI cap is tenable per-deployment.

6. **Bundle preset member duplicates:** TM-10 example has "Filler" appearing twice (different planned_treatment_areas per occurrence). **Recommendation: ALLOW duplicates** in `bundled_member_preset_ids[]` since each member preset can have own default_planned_details. Substrate doesn't constrain.

7. **Service vocabulary override scope:** TM-27 / DL-19 inv 12 — should vocabulary override apply per-brand or per-site? **Recommendation: per-tenant scope with site inheritance** (per DL-19 inv 4 hierarchy). Surfaces consistently across patient + staff at same scope.

### Whether visit-type / treatment-menu doctrine held up

**YES — visit-type doctrine held up under Domain 1 rule authoring, after the Knox 2026-05-17 patch round.** The 3-layer pattern (`service_category` taxonomy + `service` operational kind + `pricing_option` commerce variant + `booking_preset` patient-facing affordance + `appointment_item` planned line) cleanly resolves all 10 doctrine questions. The patch round revealed and fixed:

1. **TM-12 contradiction with TM-01** — initial draft let category-level booking re-import operational semantics into service_category; patch routes broad-default booking through a category-targeting `booking_preset` (preserving TM-01 taxonomy purity).
2. **TM-15 compound enum (Pattern 3 regression)** — initial draft conflated `self_bookable` (visibility) and `disclosure_mode` (form rigor); patch splits into 2 independent fields.
3. **TM-20 source-of-truth drift risk** — initial draft listed both `planned_treatment_areas[]` ARRAY and `planned_details` JSONB without explicit source-of-truth rule; patch designates JSONB canonical with ARRAY materialized projection.
4. **FK naming generality** — `bundled_from_preset_id` renamed to `source_booking_preset_id` covering all booking shapes uniformly (TM-10 / TM-14 / TM-23).
5. **Cross-app terminology** — initial draft called cross-app references "evidence"; patch correctly labels as "pattern reference" (analogies for pressure-testing, not hard evidence per Knox patch).

The post-mortem failure patterns were largely avoided in initial draft + the regressions were caught + fixed by Knox review:
- **Pattern 1 (Layer 2 as substrate template)** — Mindbody cited as hard evidence; cross-app cited as pattern reference (terminology fixed in patch).
- **Pattern 3 (compound enums)** — Caught regression in TM-15 (`self_bookable_progressive_disclosure_mode`); split into 2 fields in patch.
- **Pattern 5 (scope creep)** — 30 rules landed; 20 candidates deferred (name-only). Held.
- **Pattern 7 (Mindbody UI labels as substrate)** — TM-28 / TM-29 / TM-30 explicitly enforce anti-leakage. Held.
- **Initial Domain 1 → patched Domain 1:** the iterative review cycle worked — Knox's review caught real architecture leaks that initial draft missed.

### Substrate gap audit summary (post Phase 1 hardening v3 + Knox 5 refinements)

- **30 total Day 0 rules**
- **30 OK** (all 3 DL amendments applied in commit `ee46585`; Knox 5 refinements integrated into TM-03 / TM-07 / TM-09 / TM-12 / index)
- **0 OK-with-extension**
- **0 NEW SUBSTRATE NEEDED**

Knox's 5 refinements (2026-05-17 post-amendment review) integrated into Domain 1:
1. **Schedulability floor** for category-targeting presets — TM-07 binding CHECK
2. **No pricing in scheduling** — TM-03 anti-copy + TM-09 operational-defaults-on-preset
3. **Broad-default ≠ bypass gates** — TM-12 explicit downstream gate list
4. **Layer 1 admits vagueness; Layers 2/3 are specific** — TM-12 3-layer resolution constraint
5. **Domain 1 ≠ scheduler completion** — Index §6 explicit warning about Domains 2/6/7

**Domain 1 status:** substrate-slice-ready for treatment-menu / visit-type concerns ONLY. Per refinement #5, this does NOT generalize to scheduler-wide readiness. Domain 2 (booking composer / availability) is the next dangerous domain — provider eligibility, rooms, resources, double-booking, intake-first gates, age limits, jurisdiction, license validation all surface there.

---

## §7 What this file is NOT

- NOT new doctrine. DLs are doctrine.
- NOT code. Substrate slice scoping is the next gate.
- NOT migrations.
- NOT a complete rule matrix — Domains 2-7 still need to be authored.
- NOT a Mindbody clone — every rule cites at least 1 non-Mindbody cross-app source.

Round 1 ends here. Push commits 1+2 to origin/main. Stop and report.
