# Mindbody — Batch 5 raw capture: Appointments grid overlays + appointment detail/edit panel

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~12:30 AM UTC-4)
Batch: 5
Feature area(s): `appointments_grid_overlays`, `appointments_detail_edit`
Screenshots covered: 7 (Screen Shot 2026-05-13 at 11.45.04 PM through 11.47.37 PM, chronological)
Chat cross-references:
- Pre-marker section (lines 1-379) — Knox's first-pass "Mindbody Day 0 parity categories" buckets 1 (provider schedule grid) + 2 (providers/rooms/resources independent but composable) + 3 (service catalog hierarchical tree) + 4 (appointment record full field set: client/phone/email/provider/service/room/notes/formula notes/add-ons/confirmation/source/deposit/discount/treatment notes) + 5 (appointment lifecycle confirmed/arrived/cancel/modify/progress note/prebook/locked-after-completion) + 7 (notes: appointment / previsit / treatment / formula / staff-only / clinical / checkout / source / provider / internal-warning)
- Marker 1 (line 380) — Knox's deconstruction of the appointment action menu (Checkout, Retail, Apply payment, Early cancel, Late cancel, Confirmed, Arrived, Reschedule, Modify, Progress note, Prebook, Groups) and "appointment is workflow object not calendar block"
- Marker 6 (line 2598) — Knox's settings-as-OS analysis touches assignment of appointment types per provider (relevant to row 56 "Assign appointment types" provider menu item)
Supplemental cross-references (added by Step 0.5):
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — Knox's Encounter Container architecture (planned vs rendered), 4-entity split (Schedulable Service / Clinical Service / Billable Item / Resource/Inventory Item). Row 60's "Edit appointment" panel surfaces planned-vs-rendered tension directly: locked-after-completion banner means rendered events have closed the editable plan
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q1 (encounter container architecture) + Q3 (4-entity split validity) — Row 60's Service field "Consultation - Aesthetic Injector" is what patient/staff books (Schedulable Service); the actual rendered care during the consultation is unknown until checkout (Clinical Service); the charge from this consultation is unknown (Billable Item); Room 6 is the Resource. All four entities present but collapsed under one "appointment" field.

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-13 at 11.45.04 PM.png`
**URL:** (same — `mainappointments/index`; calendar surface unchanged from Batch 4)
**Feature area:** `appointments_grid_overlays`
**Inferred screen title:** Appointment hover popover — quick-glance detail with metadata

### TEXT CONTENT (VERBATIM)

```
[Calendar grid background: 9:00 AM through 6:00 PM rows; provider columns
+Add | Dr. Nicholas Crawford | Dr. Rana Balboul | Nadine Klait NP | Parisa Jaffar (...)
Visible appointment cards behind popover:
  - 12:00 PM "Consultatio..." ☆ 📄 Kristie E Room 6 (purple/lavender)
  - 10:00 AM-1:00 PM "Moving out of st" 10:00 AM-1:00 PM (white block, Nadine column)
  - 3:00 PM "Botox (New P..." (red, Parisa column truncated)
  - 3:00 PM-4:00 PM "Work" (white, Our Team column)
  - Lighter grey shading on Dr. Nicholas Crawford col 9:00 AM-12:00 PM (unavailable)
  - Lighter grey shading on Parisa Jaffar col after 3:00 PM (unavailable)]

[POPOVER overlay (white rounded card with purple header):]

Kristie Eberhardt                          (586) 876-3442

12:00 PM - 12:45 PM                                  ● ⭐
11. Provider Consultations | Consultation -
Aesthetic Injector
Room 6

📄 SOURCE:  DISCOUNTS:  TX NOTES:
   DEPOSIT:  BY: NCo
```

### UI ELEMENTS (visible)

**Popover card (centered, opened on hover/click of the 12:00 PM Kristie E appointment):**
- **Header bar (purple/lavender bg):** Client name "Kristie Eberhardt" (left) + phone number "(586) 876-3442" (right)
- **Metadata block:**
  - Time: "12:00 PM - 12:45 PM" (left) + green dot indicator + gold star icon (right)
  - Service: "11. Provider Consultations | Consultation - Aesthetic Injector" (full hierarchical service path: category number `11` + category name + pipe + service name)
  - Resource: "Room 6"
- **Note metadata strip (grey rounded subpanel):**
  - Document icon + 5 labeled fields: SOURCE: / DISCOUNTS: / TX NOTES: / DEPOSIT: / BY: NCo (only BY is populated; "NCo" likely the staff initial who created the appointment — Nicholas Crawford abbreviated)

**Behind popover (calendar grid still visible):** confirms multi-provider day view from Batch 4 Step 03; same provider columns, same appointment cards, same time grid.

### VISUAL MARKERS

- **Popover background:** white rounded card with subtle drop shadow against dark calendar
- **Header bar:** matches the purple/lavender of the underlying appointment card (visual link between hover target + popover)
- **Status indicators:** green dot (●) + gold star (⭐) — these may indicate "Confirmed" (green) + "VIP" (star) status. Different from the in-card icons (☆ in white = empty star? + 📄 = note attached) — note that the CARD shows ☆ (outline) but the POPOVER shows ⭐ (filled). Possible encoding: filled = appointment has the flag, outline = appointment supports the flag. OR they're different flags entirely. Need more screens to confirm.
- **Document icon (📄)** before the SOURCE/DISCOUNTS/TX NOTES/DEPOSIT/BY: row — signals "this appointment has a note artifact attached"
- **Empty-string fields** (SOURCE: / DISCOUNTS: / TX NOTES: / DEPOSIT:) shown WITH their labels even when blank — UX choice: always show the label-shaped affordance even if value is null, so staff knows what fields are available without opening the full edit panel

### LINK MARKERS

- Phone number (586) 876-3442 — likely click-to-call link
- Possibly client name — click would navigate to Client Directory profile (per Batch 6 / row 62)
- Service name — likely click navigates to service catalog

### ARCHITECTURAL OBSERVATIONS

**Hover popover as the "minimum viable appointment context" surface.** Not a full edit affordance, but a quick-glance display that exposes:

1. **Identity** (client name + phone)
2. **Time** (start/end including duration implied by minute count)
3. **Service** (via 3-level hierarchy: category number + category name + service name)
4. **Resource** (room)
5. **Status icons** (green dot + star — interpretation TBD)
6. **Note metadata strip** (5 labeled fields whose values are the workflow data: SOURCE = where booking came from; DISCOUNTS = applied; TX NOTES = treatment notes; DEPOSIT = paid; BY = staff who handled)
7. **Authorship trace** (BY: NCo)

This screen confirms Knox pre-marker bucket 4 ("Appointment record: client, phone, email, provider, service, notes, formula notes, add-ons, confirmation, source, deposit, discount, treatment notes") — every field Knox enumerated is present in the underlying appointment record, but the popover surfaces only the most-needed-at-a-glance subset. Provider name is NOT in the popover — confirmed implicit by which column the card lives in.

**The 5-field note metadata strip is interesting.** SOURCE / DISCOUNTS / TX NOTES / DEPOSIT / BY are NOT a single "notes" textarea. They are five distinct typed fields. This contradicts a naive "notes is a long-text blob" assumption. The fields are:
- **SOURCE** — provenance / referral / booking origin (CRM-relevant; ties to marketing attribution per system map "1H.4 acquisition / attribution")
- **DISCOUNTS** — pricing modifier (commerce-relevant; ties to OMNI commerce future Phase C)
- **TX NOTES** — treatment notes (clinical-relevant; ties to clinical assertions per system primitives + 1G messaging vs treatment authorship discipline)
- **DEPOSIT** — payment partial (commerce-relevant; ties to charge_lines lifecycle from Knox marker 14 + 1I.4-1I.5)
- **BY** — staff actor (audit-relevant; ties to system primitive #1 `authored_by` 9-value enum)

For OMNI Encounter Container (per [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1): each of these 5 fields maps to a different OMNI sibling (CRM / commerce / clinical / commerce / audit). Mindbody collapses them onto the appointment record; OMNI's encounter container would route them to their respective siblings via the CNS envelope (DL-16). This is concrete evidence supporting Knox's "Mindbody is a calendar with commerce bolted on" framing.

**Hover popover as substrate read pattern.** This is a query of multiple substrates joined per-appointment: scheduling (time + room + provider) + CRM (client + phone) + service catalog (3-level hierarchy lookup) + commerce (deposit/discount) + audit (BY). For OMNI: a hover popover requires either (a) denormalized appointment row with all fields, OR (b) a single joined read across siblings — DL-13 (multi-consumer adapter) is relevant if the popover is a cross-domain projection.

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-13 at 11.45.23 PM.png`
**URL:** (same — `mainappointments/index`)
**Feature area:** `appointments_grid_overlays`
**Inferred screen title:** Provider column dropdown menu (per-provider admin actions)

### TEXT CONTENT (VERBATIM)

```
[Top bar: search "Find a client" centered]

[Left: mini-calendars May 2026 + June 2026; "Hide calendar" toggle]

[Top-right: "Today" button (highlighted blue) + "Wed May 13, 2026" + < > nav]

[Calendar columns visible: +Add | Dr. Nicholas Crawford | Dr. Rana Balboul | Nadine Klait NP]

[DROPDOWN MENU opened from Dr. Nicholas Crawford column header (caret ▾):]

Go to week view

Edit schedule

Add unavailability

Assign appointment types

View profile
```

### UI ELEMENTS (visible)

**Provider column header dropdown** opened (5 menu items):
1. **Go to week view** — pivots day-view → week-view filtered to this provider (likely the action that produces the Batch 4 Step 02 single-provider week view)
2. **Edit schedule** — opens provider's working-hours editor
3. **Add unavailability** — opens unavailability dialog (PTO, blocked time, etc.)
4. **Assign appointment types** — opens dialog mapping which services this provider can deliver
5. **View profile** — navigates to staff profile / settings

**Behind dropdown:** standard multi-provider day-view calendar (cropped); confirms provider columns can be individually administered without leaving the calendar surface.

### VISUAL MARKERS

- **Dropdown card:** white rounded card with drop shadow, opens below the column header
- **Menu items:** plain text, no icons, single-column list (compact)
- **No keyboard shortcut hints** (suggests menu is mouse-driven primarily)

### LINK MARKERS

All 5 menu items are click targets opening other surfaces.

### ARCHITECTURAL OBSERVATIONS

**Provider column = administrative entry point, not just a calendar lane.** Staff can:
- Pivot view (Day → Week) filtered to one provider
- Edit working schedule (operational substrate write)
- Block availability (operational substrate write — unavailability is a typed event)
- Configure capability mapping (`Assign appointment types` is the per-provider service eligibility setting; cross-references Knox marker 5 "service eligibility per staff" + Knox pre-marker bucket 3 "allowed providers")
- Navigate to provider profile (staff record domain)

**5 distinct write paths from one column header.** Three are operational state writes (schedule, unavailability, appointment types). Two are navigation. This is the **distributed admin affordance pattern** — admin actions placed inline at the relevant context (the provider column) rather than in a central settings page. Mindbody balances this with a central Settings nav item.

**For OMNI Encounter Container:** "Assign appointment types" is the per-provider Schedulable Service eligibility relation. Per Knox's 4-entity split ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1), this would be a many-to-many join: provider × Schedulable Service. Mindbody handles this; OMNI must too. **Open question Q5 (capability flags)** [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) — provider capability for a service is sibling to brand/clinic capability for scheduling-as-a-domain.

**"Edit schedule" + "Add unavailability"** are the two concrete writes that DL-15 invariants must cover. DL-15 invariant 2 (multi-resource atomic booking) implies provider availability is a queryable substrate. The unavailability dialog (not yet seen) likely supports types: PTO / sick / training / lunch / blocked-for-meeting / etc. — Layer 2 will need to enumerate these.

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-13 at 11.45.35 PM.png`
**URL:** (same — `mainappointments/index`)
**Feature area:** `appointments_grid_overlays`
**Inferred screen title:** +Add column dropdown — quick-add staff availability picker (full staff roster)

### TEXT CONTENT (VERBATIM)

```
[Top: Mini calendars + "Today" button]

[DROPDOWN opened from +Add column header, with tooltip header:]

Quick-add staff availability for 5/13/2026

Dr. Nicholas Crawford

Dr. Rana Balboul

Nadine Klait NP

Parisa Jaffar

Amber Allen

Parrah Grundy

Angelina Dedvukaj

Our Team

Front Desk

[Calendar shows multi-provider day grid behind dropdown; same appointments visible:
Moving out of st (Nadine), various Parisa cards (Dermal Filler, Dysport, Botox), Amber Allen
HydraFacials, Work block (Our Team)]
```

### UI ELEMENTS (visible)

**+Add column header dropdown** opened. Header text: "Quick-add staff availability for 5/13/2026" (date-aware tooltip).

**Menu items (9 — full staff/team list):**
1. Dr. Nicholas Crawford
2. Dr. Rana Balboul
3. Nadine Klait NP
4. Parisa Jaffar
5. Amber Allen
6. **Parrah Grundy** (NEW — wasn't in Batch 4 Step 03 column list, where the 8 columns were Crawford / Balboul / Klait NP / Jaffar / Allen / Dedvukaj / Our Team / Front Desk; Parrah Grundy was MISSING from that column view)
7. Angelina Dedvukaj
8. Our Team
9. Front Desk

### VISUAL MARKERS

- **Tooltip-style header bar** above the menu (dark grey/black rounded rectangle, white text)
- **Menu items:** plain text list, no icons
- **No availability-state indicator per provider** in this dropdown (just names)

### ARCHITECTURAL OBSERVATIONS

**Critical observation: the calendar column count is NOT the same as the provider count.** Batch 4 Step 03 showed 8 schedule columns (Crawford / Balboul / Klait NP / Jaffar / Allen / Dedvukaj / Our Team / Front Desk). This dropdown shows 9 names (added Parrah Grundy). So **Parrah Grundy exists as a staff entity but is HIDDEN from the day-view by default** — likely because she has no appointments today AND no availability defined for today, so the column is collapsed.

This implies:
1. **Calendar columns are dynamically computed** from "staff with appointments OR with availability defined for selected date," not from the static staff roster.
2. **The +Add column is the discovery affordance** for adding work for a staff member who is currently column-hidden.
3. **Provider availability is a first-class object** (Knox pre-marker bucket 6 "staff availability: edit schedule, add unavailability, assigned appointment types"); a staff entity without availability for a given date doesn't render a column.

For DL-15: invariant 5 (or similar) likely needs to specify that "provider column visibility is derived from availability + appointments" not from raw staff list. This is an operational efficiency optimization — but it has implications for "Quick-add availability" workflow: front desk can ADD a staff member for the day on-the-fly via this menu, which then opens an availability dialog (not seen yet — likely produces a window, then the column appears).

**For OMNI Encounter Container ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1):** this is concrete evidence that "what business reserves" (resource_only_session per encounter profile per Q1) needs an **availability-defined-but-no-appointment-yet** state. Without this state, you can't have a provider "open" for a day before any patient books. Mindbody handles this via the staff availability primitive; OMNI must too.

**"Our Team" + "Front Desk" appear as named staff entities in the dropdown.** Confirms Batch 4 Step 03 observation: these are NOT providers but ARE schedulable entities. Knox pre-marker bucket 2 ("providers, rooms, resources are independent but composable") is partially satisfied — Mindbody treats teams as a special staff entity, not as a separate "team" type. Whether this is a design choice or a limitation TBD; likely a limitation per user feedback gap #1 (need to control room vs provider vs resource independently).

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-13 at 11.45.51 PM.png`
**URL:** (same — `mainappointments/index`)
**Feature area:** `appointments_grid_overlays`
**Inferred screen title:** Service category filter dropdown — top of hierarchical service tree (categories 1, 10, 11, 12, partial 2)

### TEXT CONTENT (VERBATIM)

```
[Top-right: "Today" button + "Wed May 13, 2026" + < > + Day | Week toggle]

[DROPDOWN opened from "All service categories" filter; dropdown contents:]

✓ All service categories

1. Facials
   BH Signature Facial (90 Mins)
   Biologique Recherche Facial (60 Mins)            [HIGHLIGHTED in blue/teal]
   Biologique Recherche Facial (90 Mins)
   C-Radiance Facial
   Expecting Facial
   Express Facial
   Fire & Ice Facial
   HI-Tech Facial
   Lymphatic Facial
   O2 Glow Facial
   BH HydraFacial
   BH Signature Facial (60 Mins)

10. Red Light Therapy
   NEO | Red Light Therapy
   NEO | Red Light Therapy (Add-On)

11. Provider Consultations
   Consultation - BH+ Membership
   Consultation - Bodysculpting
   Consultation - Hormone Evaluation
   Consultation - Laser Hair Removal
   Consultation - Medical Weight Loss
   Consultation - Skin Analysis
   Consultation - Aesthetic Injector

12. Medical Visits
   Hormone Therapy (Follow-Up)
   Hormone Therapy (Initial Visit)
   Medical Weight Loss (Follow-Up)
   Medical Weight Loss (Initial Visit)

2. Add-Ons
   ( plated )™ Exosomes by Skin Science
   BH Professional Peel
   Dermaplaning
   Glacial
   HydraFacial: Eye Boost
   HydraFacial: Lip Boost
   Hydrojelly Mask
   LED Light Mask - Déesse Pro
   Lipid Recovery Mask: Face

[Background: calendar grid + footer "© 2026 MINDBODY Inc." Site ID: 411894]
```

### UI ELEMENTS (visible)

**Service category filter dropdown** opened (from "All service categories" filter button at top of calendar). Hierarchical structure:

- **Top item:** ✓ All service categories (selected — checkmark indicator; clears any sub-filter)
- **Numbered category headers** (collapsible — render as parent labels):
  - `1. Facials` (12 visible facial services)
  - `10. Red Light Therapy` (2 visible — main + Add-On)
  - `11. Provider Consultations` (7 visible consultation types)
  - `12. Medical Visits` (4 visible — Hormone Therapy and Medical Weight Loss × Initial/Follow-Up)
  - `2. Add-Ons` (9 visible — partial; continued in Step 05)
- **Indented service names** under each category (the "leaf" Schedulable Service rows)
- **Highlighted row** (Biologique Recherche Facial 60 Mins) — currently hovered/selected pre-confirmation

**Category numbering anomaly:** `1, 10, 11, 12, 2` — alphanumeric sort, NOT numeric sort. Categories are likely sorted as STRINGS rather than as integers. This is a UX issue (12 appears before 2), but functionally consistent.

### VISUAL MARKERS

- **Dark/translucent dropdown bg** with white text — matches Mindbody chrome
- **Highlighted item** "Biologique Recherche Facial (60 Mins)" in lighter blue/teal background (hover state)
- **Numbered category headers** appear bolder than service names (visual hierarchy: category > service)
- **Compact list** — no spacing between items; many items fit in one viewport

### ARCHITECTURAL OBSERVATIONS

**Confirms Knox pre-marker bucket 3 ("Service catalog: rich model — category / service / appointment type / duration / default provider type / allowed providers / required room type / required device-resource / add-ons / intake required / deposit required / membership-package eligible / clinical clearance required / telehealth-vs-in-person / brand-location availability / online-bookable / staff-only-internal").** This screen exposes the **hierarchical category** + **service-name** levels of that model — but the deeper attributes (duration, allowed providers, required room, etc.) are not visible here; they would be on each service's settings page (TBD batches).

**Service category numbering as policy ordering.** The numbered prefix (`1., 2., 3., ..., 12.`) suggests staff-controlled display ordering. Common Mindbody pattern: org admin assigns numbers to enforce display order. The alphanumeric sort confirms numbers are stored as strings, not integers. This is a configuration surface — Layer 2 Section C must capture "service category ordering as configurable string-prefix taxonomy."

**Cross-reference to [mindbody_settings_room_requirements_raw.md](mindbody_settings_room_requirements_raw.md):** that file contains the 132-service × room compatibility matrix. The services visible in this dropdown (132 unique across 12 categories) ARE the services in that matrix. This is the same source of truth — service catalog with per-service operational metadata (room requirement is one such attribute).

**For OMNI 4-entity split ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1, [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3):** every leaf row in this dropdown is a **Schedulable Service**. The category headers (Facials, Red Light Therapy, etc.) are taxonomy / grouping affordance, NOT separate entities. Variant explosion is real:
- "Biologique Recherche Facial (60 Mins)" vs "Biologique Recherche Facial (90 Mins)" — same care, different duration → 2 Schedulable Services
- "Hormone Therapy (Initial Visit)" vs "Hormone Therapy (Follow-Up)" — same care, different visit posture → 2 Schedulable Services
- "Medical Weight Loss (Initial Visit)" vs "Medical Weight Loss (Follow-Up)" — same pattern

This implies that Initial vs Follow-Up + duration variants are EACH a separate row in the catalog, not parameters on a parent service. Knox's Encounter Container architecture would let one parent service have multiple Schedulable Service variants — Mindbody flattens this. **Open question Q3a** (4 entities right number?) is concrete here.

**"NEO | Red Light Therapy" naming convention** — the `NEO |` prefix may indicate a brand / device family (NEO is likely a Red Light Therapy device manufacturer). This is brand metadata on the service name itself. OMNI Resource/Inventory Item entity (per Knox 4-split) would separate the device from the service; Mindbody encodes it in the name.

**"Consultation - X" naming pattern** for category 11 (7 consultations) — `Consultation - <body system / treatment family>`. These are gateway encounters that lead to actual treatment plans (consult → plan → recurring service). Knox's Encounter Container "planned vs rendered" framing is HIGHLY relevant: a "Consultation - Aesthetic Injector" is the planned booking but the rendered care could be many things downstream. This screen makes Q1 (encounter container architecture) concrete.

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-13 at 11.46.10 PM.png`
**URL:** (same — `mainappointments/index`)
**Feature area:** `appointments_grid_overlays`
**Inferred screen title:** Service category filter dropdown — scrolled down (rest of categories 2 / 3 / 4)

### TEXT CONTENT (VERBATIM)

```
[Continued from Step 04, scrolled down inside the dropdown:]

Expecting Facial
Express Facial
Fire & Ice Facial
HI-Tech Facial
Lymphatic Facial
O2 Glow Facial
BH HydraFacial
BH Signature Facial (60 Mins)

10. Red Light Therapy
   NEO | Red Light Therapy
   NEO | Red Light Therapy (Add-On)

11. Provider Consultations
   Consultation - BH+ Membership
   Consultation - Bodysculpting
   Consultation - Hormone Evaluation
   Consultation - Laser Hair Removal
   Consultation - Medical Weight Loss
   Consultation - Skin Analysis
   Consultation - Aesthetic Injector

12. Medical Visits
   Hormone Therapy (Follow-Up)
   Hormone Therapy (Initial Visit)
   Medical Weight Loss (Follow-Up)
   Medical Weight Loss (Initial Visit)

2. Add-Ons
   ( plated )™ Exosomes by Skin Science
   BH Professional Peel
   Dermaplaning
   Glacial
   HydraFacial: Eye Boost
   HydraFacial: Lip Boost
   Hydrojelly Mask
   LED Light Mask - Déesse Pro
   Lipid Recovery Mask: Face
   Lipid Recovery Mask: Neck & Décolleté
   Lipid Recovery Mask: Under Eye        [HIGHLIGHTED in blue]
   Lymphatic Drainage
   NEO | Red Light Therapy (Single Session)
   Salicylic Spot Treatment
   SkinStylus: NanoNeedling

2. Facial Treatments

3. Chemical Peels
   BH DermaPeel (Dermaplaning + BioRePeel)
   Chemical Peel (BioRepeel)
   Chemical Peel (Glycolic Peel)
   Chemical Peel (Lactic Peel)
   Chemical Peel (Mandelic Peel)
   Chemical Peel (Obagi Salicylic Peel)
   Chemical Peel (VIPeel)

4. Skin Treatments
   Aquagold Facial
   BBL HEROic
```

### UI ELEMENTS (visible)

**Same dropdown as Step 04**, scrolled. New categories visible:

- `2. Add-Ons` (continuation — 15 add-ons total visible: includes Lipid Recovery Mask variants Face/Neck/Under Eye, Lymphatic Drainage, NEO Red Light single session, Salicylic Spot Treatment, SkinStylus NanoNeedling)
- `2. Facial Treatments` (header visible but no items shown — anomaly: SAME number prefix `2.` as Add-Ons; possibly a typo or duplicate ordering string)
- `3. Chemical Peels` (7 chemical peel variants — BH DermaPeel + 6 named chemical peel chemistries)
- `4. Skin Treatments` (2 visible — Aquagold Facial + BBL HEROic; partial)

### VISUAL MARKERS

- **Highlighted item** "Lipid Recovery Mask: Under Eye" (hover state, blue)
- **Number-prefix collision** `2.` appears for both `Add-Ons` and `Facial Treatments` — bug or intentional? Suggests either (a) admin user typo, OR (b) the numbering allows duplicates
- **Variant naming patterns:**
  - "Lipid Recovery Mask: <area>" (3 area variants under Add-Ons)
  - "Chemical Peel (<chemistry>)" (6 chemistry variants under Chemical Peels)
  - "BH <something>" prefix for branded house variants (BH DermaPeel, BH Professional Peel, BH HydraFacial, BH Signature Facial, BH+ Membership) — the `BH` prefix is Bloom Health's brand marker on house-formulated services

### ARCHITECTURAL OBSERVATIONS

**Variant explosion is real and not consistently structured.** Three different naming conventions for "same care, different variant":
- `Service Name (Variant)` — e.g., Chemical Peel (Glycolic Peel)
- `Service Name: Variant` — e.g., Lipid Recovery Mask: Face
- `Brand Service Name` — e.g., NEO | Red Light Therapy (NEO is brand) vs `NEO | Red Light Therapy (Add-On)` (Add-On is the variant)

For OMNI 4-entity split (Q3): each variant is a separate Schedulable Service row. The variant attribute (chemistry / area / session-type) is encoded in the NAME STRING, not as a typed property. This is the **string-encoded variant anti-pattern** — common in older catalogs. OMNI should structure variants as typed attributes on a parent service (e.g., `Chemical Peel` parent + `chemistry: glycolic | lactic | mandelic | obagi_salicylic | bio_repeel | vipeel | derma_peel` enum + `chemistry_specific_metadata`). This unlocks: filterable variant search, structured pricing per variant, structured time-by-variant, structured contraindications per chemistry.

**Cross-reference to user feedback gap #2** (intended visit vs actual treatment, [mindbody_user_feedback_raw.md](mindbody_user_feedback_raw.md)): "Mind body to my knowledge… we have to use botox as a 'product' so we can specify botox $14/unit then we type in 20 units administered." This screen confirms the limitation — Botox is NOT in this Schedulable Service list (no `Botox` row visible), because Mindbody requires modeling Botox as a PRODUCT (per user observation), not as a service. The closest is "Consultation - Aesthetic Injector" (in category 11) which is the booking shell that gets converted into Botox-as-product at checkout. **This is the canonical concrete instance for [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q1 + Q3 + Q4.**

**Number-prefix collision (`2. Add-Ons` and `2. Facial Treatments`)** — admin has either intentionally duplicated the prefix OR fat-fingered the number. Either way, it confirms the catalog is staff-managed via free-form prefix strings, not via ordered enums. This is **operational debt** — the kind of thing that decays as catalogs grow. OMNI should require sortable integer ordering OR explicit ordering relations.

**Add-Ons category includes both standalone services AND modifier add-ons:**
- Standalone-feeling: Lymphatic Drainage, Salicylic Spot Treatment, SkinStylus NanoNeedling
- Modifier-feeling: HydraFacial: Eye Boost, HydraFacial: Lip Boost, Lipid Recovery Mask variants, NEO Red Light single session

Knox pre-marker bucket 6 enumerates add-on logic: "add time or not, add price or not, require resource or not, require clinical clearance or not, consume inventory or not, visible to patient or staff-only, affects room/device availability or not." None of those typed attributes are visible from this list view — they're config on each individual add-on. Need separate batches to capture add-on detail screens.

---

## Step 06

**File:** `screenshots/Screen Shot 2026-05-13 at 11.47.10 PM.png`
**URL:** (same — `mainappointments/index`; the `Edit appointment` is a side-panel overlay)
**Feature area:** `appointments_detail_edit`
**Inferred screen title:** Edit Appointment — full panel + appointment action menu opened (locked-after-completion)

### TEXT CONTENT (VERBATIM)

```
[Left: mini calendars May/June 2026; "Hide calendar" toggle]

[LEFT PANEL: Edit appointment]

Edit appointment

Sorry! We can't let you edit some details of the appointment
because it's already been completed.                       [in red text]

[Tab strip: ● 🕒  (green dot status + clock icon, 2 visible tabs)]

Client      Kristie Eberhardt
Phone       (586) 876-3442
Email       kristie_j_13@hotmail.com

            ☑ Send Change Notification
            Send confirmation email                        [link]

[Visual divider — purple horizontal bar]

Provider    Dr. Nicholas Crawford
Service   * Consultation - Aesthetic Injector
            ☆ Dr. Nicholas Crawford
            requested
Start time  12:00 PM ▾    Length    45 min ▾
End time    12:45 PM
Resource  * Room 6                                ▾
Notes       SOURCE: DISCOUNTS: TX NOTES:
            DEPOSIT: BY: NCo
Formula     No formula notes                      ▾
notes
Add-ons     + Add
Conf# 19412

[Bottom of panel:]
Cancel    Save                                    [Save in blue]

[CENTER: calendar grid still visible behind/right of panel — multi-provider day view]

[CONTEXT MENU opened on appointment card (12:00 PM Kristie E):]
✗ Early Cancel
✗ Late Cancel
☑ Confirmed     [teal/green check]
☑ Arrived       [teal/green check]
✏ Modify
📋 Progress Note
📖 Prebook

[Calendar background: same multi-provider day view as Batch 4]
```

### UI ELEMENTS (visible)

**Left side: Edit Appointment panel** (full-height drawer, opened from clicking the appointment card):

**Top section (panel header):**
- Heading: "Edit appointment"
- **Lock banner (red text):** "Sorry! We can't let you edit some details of the appointment because it's already been completed."
- Tab strip: 2 visible tabs — green dot (●, status?) + clock icon (🕒, history?)

**Client/contact section:**
- Client: Kristie Eberhardt (link to client profile)
- Phone: (586) 876-3442
- Email: kristie_j_13@hotmail.com
- Send Change Notification (checkbox, checked)
- Send confirmation email (link / button)

**Appointment detail section** (separated by purple divider):
- Provider: Dr. Nicholas Crawford (read-only after completion?)
- Service: ★ Consultation - Aesthetic Injector (asterisk denotes required field) + sub-line "Dr. Nicholas Crawford requested" (provider was specifically requested by client/booker)
- Start time: 12:00 PM (dropdown)
- Length: 45 min (dropdown)
- End time: 12:45 PM (computed/display)
- Resource: ★ Room 6 (required field, dropdown)
- Notes: SOURCE: DISCOUNTS: TX NOTES: DEPOSIT: BY: NCo (textarea showing the same 5-field labels from popover Step 01, all empty except BY)
- Formula notes: "No formula notes" (dropdown — implies a structured formula notes substrate, not free text)
- Add-ons: + Add (button to attach add-on services to the appointment)
- Conf# 19412 (read-only confirmation number, presumably stable identifier)

**Footer:**
- Cancel button + Save button (Save in blue/active)

**Right side: appointment card context menu** (opened on right-click or click-action-icon of the calendar appointment card, partially overlapping the calendar):

**Context menu items (7 visible — partial; full menu has 12 per Knox marker 1 line 380):**
1. ✗ Early Cancel
2. ✗ Late Cancel
3. ☑ Confirmed (with teal/green check icon — currently active state)
4. ☑ Arrived (with teal/green check icon — currently active state)
5. ✏ Modify
6. 📋 Progress Note
7. 📖 Prebook

(Knox marker 1 enumerates the full 12: Checkout, Retail, Apply payment, Early cancel, Late cancel, Confirmed, Arrived, Reschedule, Modify, Progress note, Prebook, Groups. This screen shows 7 of those 12; the missing 5 — Checkout, Retail, Apply payment, Reschedule, Groups — appear in row 63 (Step 09 below in chronological set; will go into next batch).)

### VISUAL MARKERS

- **Red lock banner** — non-blocking warning that some fields are read-only post-completion. Serious UI signal: editing is restricted but not impossible.
- **Asterisk (★) on Service + Resource fields** — required-field marker. Confirms these are required for booking (Knox pre-marker bucket 4 "appointment record").
- **Tab strip** at top of panel: ● + 🕒 — likely status tab + history/timeline tab. Multi-tab edit panel pattern.
- **Sub-line "Dr. Nicholas Crawford requested"** — important: provider preference is captured (patient/booker explicitly requested this provider, not just was-assigned). This is a typed attribute on the appointment record, not a note string.
- **Context menu icons** — visual vocabulary: ✗ for cancel actions, ☑ for confirmed/arrived (with teal checkmarks indicating ACTIVE state — both Confirmed and Arrived are currently checked), ✏ for modify, 📋 for note/document, 📖 for booking-related.
- **Two checkmarks active simultaneously (Confirmed + Arrived)** — confirms Knox pre-marker bucket 5 "Appointment lifecycle: Confirmed, Arrived, Early cancel, Late cancel, Modify, Progress note, Prebook" — these are NOT mutually exclusive states, they STACK (an appointment can be both Confirmed AND Arrived).

### ARCHITECTURAL OBSERVATIONS

**This is THE appointment substrate detail surface.** Multiple architectural primitives exposed at once:

1. **Locked-after-completion semantics** — the "completed" state of an appointment partially-locks editability. This is operational compliance: rendered events (per Knox Encounter Container Turn 1) close the editable plan. For OMNI: Q1 (encounter container architecture) needs to define WHICH lifecycle transitions lock WHICH fields. Mindbody's banner is non-specific — "some details" — suggesting a runtime-evaluated allowlist per field. **OMNI should make this explicit per field per state**, not a fuzzy "some details."

2. **Provider preference as typed attribute** — "requested" sub-line implies a `requested_provider_id` field, distinct from `assigned_provider_id`. This is concrete evidence for Knox pre-marker bucket 2 ("appointment = service + client + time + required participants/resources NOT appointment-belongs-to-provider") — but Mindbody softens this by capturing requested vs assigned as separate concepts. OMNI should preserve this distinction.

3. **Notes field is BLOB-LOOKING but contains 5 typed fields.** SOURCE: DISCOUNTS: TX NOTES: DEPOSIT: BY: — this is a **pseudo-structured notes field**. It looks like a textarea but the labels suggest staff write into structured slots. This is operational debt: structured data masquerading as unstructured. **OMNI should split these into 5 typed fields** per Step 01 architectural observations + system map domain-table-discipline doctrine ("Domain tables are the source of truth for their concern... patient_timeline_events is the narrative / event layer ONLY... Hard rule: rules, gates, dashboards, AI inputs, and reports read from domain tables, not from timeline payload text").

4. **Formula notes as a SEPARATE dropdown field** — distinct from Notes. "Formula notes" likely refers to medspa formula tracking (e.g., neurotoxin dilution, filler product/lot, peel chemistry concentration). The dropdown suggests structured selection (templates? saved formulas?). OMNI clinical Section 1L (labs/diagnostics substrate) + Section 1W (tracked clinical objects + procedure/intervention lifecycle) are relevant — formulas tracked across visits is a longitudinal observation pattern.

5. **Add-ons + Add affordance** — appointment can be augmented with add-ons post-booking. Confirms Knox pre-marker bucket 6 "add-ons own logic." Adding an add-on may change time/resource/price/clinical-clearance — runtime constraint solver per [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 ("scheduling engine should be a constraint solver").

6. **Conf# 19412** — confirmation number is the stable display identifier. Likely a string (zero-padded? sequential?). Used for client/staff lookup. Different from primary key. OMNI should have a similar separation between internal ID and confirmation number.

7. **Appointment lifecycle states stack** — Confirmed + Arrived can both be true. This is critical for DL-15 + Encounter Container model. Lifecycle is NOT a single enum (state machine with one current state); it's a multi-flag system. Knox pre-marker bucket 5 enumerates 12 states: created / modified / confirmed / arrived / checked-in / completed / early-cancelled / late-cancelled / no-show / rescheduled / prebooked / locked-after-completion / reopened-with-permission-maybe / entered-in-error-maybe. Some are mutually exclusive (cancelled vs arrived) but many stack (confirmed AND arrived). OMNI Encounter Container model needs to handle this: per Q1 either as multi-flag boolean fields OR as a state-set rather than state-enum.

8. **Both context-menu items (Confirmed + Arrived) show CHECKMARK indicating already-set state** — clicking them likely TOGGLES rather than transitions. If clicking Confirmed unchecks it, that's a regression of state — operational implications for audit (who unconfirmed? when?). DL-16 envelope needs to capture state-uncheck events as first-class, not just state-set events.

9. **Send Change Notification (checkbox, checked)** — when staff edits the appointment, the patient gets notified by default. This is an OUTBOUND COMMUNICATION coupled to APPOINTMENT EDIT operations. Cross-references DL-14 + DL-16 — the notification is a CNS action triggered by the substrate event. **For OMNI: the appointment edit needs to emit a CNS event that the messaging executor/rail consumes per the per-org / per-service-line rule policy** — Mindbody hardcodes "send notification on edit"; OMNI should make this configurable per CNS rule.

10. **Send confirmation email (link)** — separate from change notification. This sends a confirmation email immediately. For OMNI: this is an ad-hoc action, distinct from the policy-driven notification on edit. Both are CNS-orchestrated.

This is the densest architectural payload screen of Batch 5. Layer 2 sections A (entity model — appointment record fields), B (event vocabulary — edit, send-change-notif, send-confirmation), C (configuration surface — required vs optional fields, lock-after-completion policy), D (operational depth — multi-flag lifecycle, formula notes), E (user gaps — gap #4 progress notes attached to visits is highly relevant here — "Progress Note" is a context menu item directly attaching notes to the visit), F (coverage matrix — DL-15 + DL-16 cover much of this; some gaps), G (refined doctrine sharpening — the structured-notes anti-pattern is concrete), J (cross-domain — change notification couples appointment + messaging substrates), and especially the open questions Q1 + Q3 are all anchored on this single screen.

---

## Step 07

**File:** `screenshots/Screen Shot 2026-05-13 at 11.47.37 PM.png`
**URL:** (same — `mainappointments/index`; same Edit panel)
**Feature area:** `appointments_detail_edit`
**Inferred screen title:** Edit Appointment — top of panel showing Created/Last-modified audit metadata

### TEXT CONTENT (VERBATIM)

```
[Mini calendar June 2026 cropped at top]

         — Hide calendar

Edit appointment

Sorry! We can't let you edit some details of the appointment
because it's already been completed.                              [red text]

[Tab strip: ● 🕒  (status dot + clock icon — clock icon now appears highlighted/selected)]

Created
05/05/2026 5:58 PM by Nicholas Crawford
Last modified
05/13/2026 1:24 PM by Parrah Grundy

Email   kristie_j_13@hotmail.com    [partial visible]

         ☑ Send Change Notification
         Send confirmation email                  [link]

[Visual divider — purple horizontal bar]

Provider    Dr. Nicholas Crawford
Service   * Consultation - Aesthetic Injector
            ☆ Dr. Nicholas Crawford
            (cropped)

[CENTER: calendar visible — Consultatio... | Kristie E card at 12:00 PM]

[RIGHT: same context menu visible — Early C, Late C, Confirm, Arrived, Modify, Progress, Prebook]
```

### UI ELEMENTS (visible)

**Same Edit Appointment panel as Step 06**, with the SECOND TAB now active (clock icon — history/audit view). Reveals **audit metadata**:

- **Created:** 05/05/2026 5:58 PM by Nicholas Crawford
- **Last modified:** 05/13/2026 1:24 PM by Parrah Grundy

This audit trail shows:
- Appointment was originally created **8 days before** the appointment date (05/05 → 05/13)
- Original creator was Nicholas Crawford (likely the provider himself created it OR the staff with NC initials seen in the SOURCE notes)
- Last modification was on the appointment day at 1:24 PM (after the 12:00-12:45 appointment time — so likely a post-appointment edit by Parrah Grundy, who is the staff entity hidden from the day calendar columns per Step 03)

### VISUAL MARKERS

- **Tab strip with second tab active** — clock icon highlighted, indicating "history" view. The dot tab (status?) is now inactive.
- **Audit metadata** rendered with bold labels (Created / Last modified) and value lines below (date + by-whom).

### ARCHITECTURAL OBSERVATIONS

**Built-in audit trail at the appointment-detail level.** Mindbody surfaces creator + last-modifier directly in the edit UI. This is concrete evidence for system map's `audit_events` doctrine — Mindbody implements this for appointments. OMNI must do the same per system primitive #1 (`authored_by`), and the appointment substrate must emit `audit_events` rows that surface in this UI.

**Granularity:** Mindbody surfaces only "Created" + "Last modified" (NOT "all modifications"). This is **bounded audit** — full history is presumably accessible elsewhere (admin audit log surface) or via a deeper expand. OMNI: edit-panel surface should show last actor + creator; full audit trail is a separate surface (per system map "1H.1 / 1H.2" operational traceability discipline).

**Cross-actor edit sequence:** Nicholas Crawford created → Parrah Grundy modified. Two different staff actors touched the appointment over 8 days. This implies:
1. Cross-staff edit is normal in operations (not restricted to creator)
2. Each edit needs its own audit row (DL-16 envelope)
3. Lock-after-completion is a STATE-based gate, not an actor-based gate (Parrah modified AFTER appointment time, possibly post-completion — and the lock banner says "we can't let you edit SOME details" not "you can't edit at all")

**Parrah Grundy is the hidden-from-column staff member** (per Step 03 observation). The fact that she modified an appointment post-completion implies she has **front-desk-level edit capability** for completed appointments — likely a different capability than provider edit. Knox marker 6 (settings architecture) deeply analyzes "permission groups + permission atoms" — this row's multi-actor edit is concrete evidence for that permission model. OMNI: per system map Section 1D / 1D.1 / 1D.2 capability discipline, this maps to a `requireCapability("appointment_edit_post_completion")` or similar check — the locked-after-completion banner is the CAP check's user-facing message.

**Date math sanity check:** 05/05 → 05/13 = 8 days. Standard lead time for an Aesthetic Injector consult booked 8 days out. Suggests Mindbody supports >7 day booking windows by default; advance booking limits are likely a config (per Knox marker 14 Appointment Options page).

**Knox pre-marker bucket 5 ("Appointment lifecycle: 12 states")** is anchored here — this screen exposes the time dimension of the lifecycle (created_at + modified_at) but NOT the state transitions themselves. State-by-state audit (e.g., "Marked Confirmed at 05/12 by Parrah Grundy") is presumably accessible via the dot tab or a deeper drill. OMNI's CNS event envelope (DL-16) must capture per-state-transition audit.

---

## Cross-references

- **Manifest rows updated:** rows 55, 56, 57, 58, 59, 60, 61 (the 7 chronological screens in Batch 5); see [mindbody_ingestion_manifest.md](mindbody_ingestion_manifest.md) (manifest update commit follows this raw capture commit).
- **Chat navigation map references:**
  - Pre-marker section (lines 1-379) — Knox's first-pass "Mindbody is not just a calendar" + buckets 1, 2, 3, 4, 5, 6, 7. Bucket 4 (appointment record full field set) and bucket 5 (lifecycle states) and bucket 6 (add-ons own logic) and bucket 7 (multiple typed notes) are heavily anchored by Step 06 + Step 07.
  - Marker 1 (line 380, "Checkout / POS / package / membership atop scheduling; appointment as workflow object not calendar block") — the appointment action context menu in Step 06 is the menu Knox deconstructs at this marker. Step 06 surfaces 7 of the 12 menu items; rows 63+ surface the remaining 5 (Checkout / Retail / Apply payment / Reschedule / Groups).
  - Marker 6 (line 2598, settings-as-OS) — Step 02 "Assign appointment types" + Step 03 staff list dropdown + Step 06 multi-flag lifecycle stacking are all evidence for marker 6's "client record + service catalog + pricing/entitlement engine + staff/provider capability system + inventory/retail + communications settings + global admin configuration" architectural reading.
- **Pasted text settings cross-refs:**
  - [mindbody_settings_room_requirements_raw.md](mindbody_settings_room_requirements_raw.md) — the 132-service catalog visible in Steps 04-05 dropdown is the same source of truth as the 132-service × room compatibility matrix. Cross-reference is explicit.
  - [mindbody_settings_class_course_options_raw.md](mindbody_settings_class_course_options_raw.md) — the appointment-options policy surface Knox marker 14 deeply analyzes is the sibling of the class/course options page in this raw file. Step 02 "Assign appointment types" and Step 06 lifecycle constraints are anchored at the same configuration-as-infrastructure principle.
- **User feedback cross-refs:**
  - **Gap #1 (room/provider/resource independence):** Step 06 Resource = Room 6 dropdown; Provider = Dr. Nicholas Crawford. They are SEPARATE fields, but no equipment/resource (e.g., HydraFacial machine) field is visible. Mindbody handles room as a separate resource, but device/equipment as a separate first-class field is NOT exposed on this Consultation appointment (likely because consultations don't require devices). Need device-required service screens to confirm device handling.
  - **Gap #2 (intended visit vs actual treatment):** Step 04-05 service catalog dropdown reveals NO `Botox` row — booking is via "Consultation - Aesthetic Injector" Schedulable Service (Step 06) → actual Botox units rendered at checkout. This is the canonical concrete instance for Q1 + Q3 + Q4.
  - **Gap #4 (progress notes attached to visits):** Step 06 context menu has "Progress Note" item; Edit panel has Notes (5-field labels) + Formula notes (separate dropdown). Progress notes are post-visit clinical documentation — likely a separate substrate from notes/formula. Need progress-note detail screen to confirm.
  - **Gap #6 (metrics on visits across providers):** Step 07 audit trail (Created by NC, Modified by PG) is the substrate input for these metrics. Cross-actor accountability is captured per appointment.
  - **Gap #7 (Hims-style weight loss plan attached to visit):** Step 04 service catalog has "12. Medical Visits" → "Medical Weight Loss (Initial Visit)" + "Medical Weight Loss (Follow-Up)" — Mindbody handles medical visits as Schedulable Services in their own category, but cross-visit plan continuity is NOT visible from the appointment surface alone. Likely on the client profile (Batch 6).
- **Knox synthesis statements to reference in Layer 2:**
  - "appointment is not just a calendar block. It is a workflow object" (marker 1, ~line 395-400) — Step 06 is the workflow object surface
  - "Providers, rooms, resources are independent but composable" (pre-marker, ~line 240-260) — Step 06 has Provider + Resource as separate fields; missing device/equipment field is gap evidence
  - "Notes (multiple types: appointment note, previsit note, client general note, treatment note, formula note, staff-only ops note, clinical note, checkout note, deposit/discount/source note, provider note, internal warning/alert)" (pre-marker bucket 7, ~line 295-310) — Step 06 has Notes (5-typed-field pseudo-structure) + Formula notes (separate substrate)
  - "Appointment lifecycle (12 states; every state change is an event into CNS)" (pre-marker bucket 8, ~line 313-330) — Step 06 lifecycle stacks (Confirmed AND Arrived simultaneously); Step 07 audit trail captures actor per modification
- **Supplemental cross-refs (Step 0.5 supplemental files):**
  - [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — Encounter Container architecture; Step 06 "Edit appointment" panel + Notes 5-field structure + Formula notes + Add-ons + Resource + 7-item lifecycle context menu are concrete evidence for the planned-vs-rendered model
  - [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — 4-entity split: Schedulable Service (Step 04-05 catalog: "Consultation - Aesthetic Injector"); Clinical Service (Step 06 reveals nothing rendered yet — Step 06 is planned only); Billable Item (Step 06 has no charge field — separate substrate); Resource/Inventory Item (Step 06 Resource = Room 6, but device field missing)
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q1 (encounter container architecture) — Step 06's locked-after-completion banner is concrete evidence that lifecycle gates partially restrict editability. OMNI must make this explicit per field per state, not "some details."
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 (4-entity split validity) — Step 04-05 catalog variant explosion (Chemical Peel × 6 chemistries, Lipid Recovery Mask × 3 areas, etc.) is concrete evidence that string-encoded variant naming is operational debt; OMNI's Schedulable Service should structure variants as typed attributes
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 (capability flags mapping) — Step 07 cross-actor edit (NC created, PG modified post-completion) is concrete evidence that appointment edit requires a `requireCapability("appointment_edit_post_completion")` check; capability layer must be granular enough

## Outstanding observations / TBD

- **Status icon vocabulary** still incomplete — Step 01 popover shows green dot + gold star; Step 06 context menu shows ✗ / ☑ / ✏ / 📋 / 📖. The CARD itself shows ☆ (outline star) + 📄. Are outline = unset and filled = set? Or different flags entirely? Need a screen showing a card WITHOUT a star vs WITH a star.
- **Tab strip in Edit Appointment panel** — 2 tabs visible (● dot + 🕒 clock). Step 06 has ● tab active (status); Step 07 has 🕒 tab active (history). What's behind each tab in full? More screens needed.
- **Add-ons + Add affordance behavior** — what surface does + Add open? Does it filter the service catalog (Steps 04-05) to add-on category only? Or open a separate add-on picker? Need + Add click screens.
- **Formula notes dropdown** — is it a templates/saved-formulas list? What's the substrate? Need formula-notes detail screen.
- **Lock-after-completion field allowlist** — banner says "we can't let you edit SOME details" but doesn't specify which. What fields are locked vs editable post-completion? Need a screen attempting to edit a locked field.
- **Quick-add staff availability dialog** — what opens after clicking a name in Step 03 dropdown? Need the resulting availability-input screen.
- **Provider preference (`requested` sub-line in Step 06)** — was this captured at booking? Where does the request flag get set? Need booking-flow screens.
- **Number-prefix collision** in service category dropdown (`2. Add-Ons` AND `2. Facial Treatments`) — admin error or feature? Need admin/edit view of categories.
- **Conf# 19412 format** — what's the numbering scheme? Sequential? Random? Length-bounded? Need multiple appointment screens to compare confirmation numbers.
- **Send Change Notification + Send confirmation email** — are these tied to the same outbound comms substrate? Different templates? Different policies? Cross-references DL-14 (CNS as event-driven brain) — the configurable rule should be in the CNS, not on the appointment edit form. Need messaging-config screens.
- **Appointment lifecycle stacking** — confirmed which states stack vs are mutually exclusive? Need a screen showing the full 12-state surface (Knox pre-marker bucket 5 enumerates 12; only 7 visible here).
