# Mindbody Ingestion Manifest

**Phase B.5 master index — Step 2 deliverable**
**Date:** 2026-05-15
**Status:** scaffold (Step 2); will be incrementally updated during Step 4-N feature-area ingestion batches and Step N+1 Layer 2 synthesis

---

## Purpose

This is the durable master index for every raw input that feeds Phase B.5's Mindbody architecture understanding work. Per Knox's binding direction (locked in [phase_b5_mindbody_ingestion_4db27449.plan.md](../../phase_b5_mindbody_ingestion_4db27449.plan.md)): **preserve everything, full screenshot/chat granularity must remain available later, not just a polished Layer 2 summary.** This manifest is what makes that promise enforceable — every raw artifact has a row, every row gets linked back from Layer 2 citations.

The manifest tracks:

- **Every screenshot** at [screenshots/](screenshots/) and its inferred screen title (filled during ingestion)
- **Every screenshot's feature area** (filled during ingestion; likely 15-20 areas; final taxonomy locked in Layer 2 Section A)
- **The per-feature-area raw capture file each screenshot lands in** (filled during ingestion)
- **The chat navigation line range** in [mindbody_chat_navigation_map.md](mindbody_chat_navigation_map.md) (built in Step 3) where the screenshot was discussed by user ↔ Knox
- **The ingestion batch number** and **status** (PENDING → IN_BATCH_NN → COMPLETED)

The manifest is updated incrementally during Step 4-N (per-feature-area raw capture batches). Each batch commit updates the relevant manifest rows from PENDING to COMPLETED with feature area + screen title + raw capture filename + chat nav line range filled in.

---

## Conventions

### Source column values

- **mobile** — iOS Photos captures from user's iPhone. Filenames start with `IMG_`. Numbered IMG_9122 through IMG_9170 (49 unique files).
- **desktop** — macOS screenshot tool captures from user's Mac. Filenames start with `Screen Shot YYYY-MM-DD at HH.MM.SS AM/PM`. Captured during the 2026-05-13 evening into 2026-05-14 early morning user ↔ Knox discovery session (~113 unique files).
- **other** — anything else (1 file: `screenshot_unnamed_2048x1440.png`, name unknown).

### Feature area values (preliminary list; final taxonomy in Layer 2 Section A)

These are the likely feature-area buckets that raw capture files will be organized by. The list may shift during ingestion as the actual screenshot coverage becomes clear:

- `dashboard` — Mindbody business home / insights snapshot / today's schedule preview
- `appointments_grid` — main scheduling calendar (day/week/month views; provider/team columns)
- `appointments_detail` — single appointment record / edit / lifecycle states
- `rooms_resources` — separate room schedule view + room/resource management settings
- `check_in` — sign-in flows / kiosk self-sign-in / arrival workflow
- `clients_directory` — client list/search/filter
- `clients_profile` — single client detail / alerts / appointment history / notes
- `pos_checkout` — point-of-sale checkout flow + receipt
- `pricing_packages` — pricing options / packages / contracts / promo codes / gift cards
- `memberships` — membership tier setup / settings / member-specific access policies
- `services_products_catalog` — service categories / appointment types / retail products
- `staff_list` — staff list / roles / activate/deactivate
- `staff_rbac_permissions` — granular permission groups + permission atoms
- `provider_profile` — staff profile (provider variants) / login / capabilities
- `provider_availability` — provider schedule editor / unavailability / closed days
- `settings_general` — General Setup & Options master feature-flag system
- `settings_words_phrases` — vocabulary customization page
- `settings_class_course` — class/course-specific scheduling settings (covered by [mindbody_settings_class_course_options_raw.md](mindbody_settings_class_course_options_raw.md))
- `settings_appointment_options` — appointment-specific settings
- `waitlist` — waitlist setup + lifecycle / first-to-claim + auto-add automation
- `notifications_alerts` — system notifications / client alerts / staff alerts
- `privacy_audit` — merge/unmask clients / data privacy / forget-my-data
- `inventory_retail` — retail product inventory management
- `mobile_app_business_mode` — Mindbody mobile app for staff/business mode
- `mobile_app_consumer_mode` — Mindbody mobile app for clients (consumer mode)
- `consumer_mode_vs_business_mode` — comparison or cross-cutting Mode toggle settings
- `insights_reports` — analytics / reports / dashboards beyond home insights
- `marketing_auto_emails` — email automation / SMS / SMTP configuration
- `integrations` — Google Calendar / payroll / merchant processing / Truemed / etc.
- `consumer_booking` — client-facing booking flow (online booking page)
- `room_requirements_matrix` — covered by [mindbody_settings_room_requirements_raw.md](mindbody_settings_room_requirements_raw.md) (132-service × room compatibility table)
- `tbd` — placeholder before ingestion identifies the area

### Status values

- `PENDING` — not yet ingested into a raw capture file
- `IN_BATCH_NN` — currently being ingested (e.g., `IN_BATCH_04`)
- `COMPLETED` — raw capture file written + cross-referenced to chat
- `FUTURE_ARC` — out of scope for B.5 (rare; should be empty initially)

### Raw capture filename convention

`mindbody_NN_<area>_raw.md` where NN is the batch number sortable (e.g. `mindbody_04_appointments_grid_raw.md`).

### Chat navigation line range

References [mindbody_chat_navigation_map.md](mindbody_chat_navigation_map.md) (built in Step 3). Format: e.g. `lines 1200-1850` or `lines 4500-4900` or `multi: 1200-1850 + 8300-8450` for screenshots discussed in multiple chat rounds.

---

## Inventory summary

**Final state at .cursor/plans/ingestion/mindbody/screenshots/ as of Step 1 correction (commit 3c149cb):**

| Source | Count | Range / characteristic |
|---|---|---|
| **mobile** (`IMG_*`) | 49 | IMG_9122.PNG through IMG_9170.PNG (consecutive numbering) |
| **desktop** (`Screen Shot *`) | 113 | Captured 2026-05-13 at 11.42 PM through 2026-05-14 at 12.55 AM |
| **other** | 1 | `screenshot_unnamed_2048x1440.png` (2048×1440 PNG, unknown origin) |
| **Total unique at root** | **163** | |
| **Duplicates in `_duplicates/`** | 20 | 5 IMG_ + 14 Screen Shot ` (1).png` + 1 unnamed dup, all byte-identical to a root file |

**Raw text inputs (not in screenshots/, listed for cross-reference):**

| Filename | Lines | Bytes | Source |
|---|---|---|---|
| [mindbody_knox_chat_raw.md](mindbody_knox_chat_raw.md) | 27,983 (v2 clean) | ~845 KB | User ↔ Knox chat transcript (full back-and-forth, v2 clean — v1 with copy-paste duplication archived at `mindbody_knox_chat_raw_v1_with_duplicates_preserved.md`) |
| [mindbody_user_feedback_raw.md](mindbody_user_feedback_raw.md) | 62 | 7.5 KB | User's 9-gap feedback + meta-framing |
| [mindbody_settings_room_requirements_raw.md](mindbody_settings_room_requirements_raw.md) | ~146 | ~15 KB | Mindbody "Room Requirements" settings page (132-service × room matrix; verbatim text from Pasted text (4).txt with frozen-ingest header) |
| [mindbody_settings_class_course_options_raw.md](mindbody_settings_class_course_options_raw.md) | ~196 | ~13 KB | Mindbody "Class and Course Options" settings page (~89 numbered settings; verbatim text from Pasted text (6).txt with frozen-ingest header) |
| [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) | 321 | 20 KB | Step 0.5 supplemental — user ↔ chat/Knox 6-exchange OMNI scheduling design pressure-test session 1, dated 2026-05-16 (~midnight). Verbatim. Status: shelved — encounter container architecture explicitly deferred to Layer 2 + Phase B.5+ doctrine sharpening per Knox + user joint direction. |
| [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) | 199 | 16 KB | Step 0.5 supplemental gap log extracted from `mindbody_to_omni_direction_raw.md` — 5 indexed open architectural questions (Q1 encounter container architecture; Q2 8 pressure-test scenarios; Q3 4-entity split validity; Q4 mode-per-service-line vs flat appointment_type; Q5 capability flags mapping). Status: all OPEN, no resolution during Phase B.5. |

---

## Manifest table (root screenshots)

| # | filename | source | feature_area | screen_title | raw_capture_file | chat_nav_lines | batch | status |
|---|----------|--------|--------------|--------------|------------------|---------------|-------|--------|
| 1 | `IMG_9122.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 2 | `IMG_9123.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 3 | `IMG_9124.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 4 | `IMG_9125.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 5 | `IMG_9126.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 6 | `IMG_9127.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 7 | `IMG_9128.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 8 | `IMG_9129.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 9 | `IMG_9130.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 10 | `IMG_9131.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 11 | `IMG_9132.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 12 | `IMG_9133.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 13 | `IMG_9134.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 14 | `IMG_9135.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 15 | `IMG_9136.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 16 | `IMG_9137.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 17 | `IMG_9138.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 18 | `IMG_9139.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 19 | `IMG_9140.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 20 | `IMG_9141.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 21 | `IMG_9142.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 22 | `IMG_9143.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 23 | `IMG_9144.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 24 | `IMG_9145.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 25 | `IMG_9146.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 26 | `IMG_9147.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 27 | `IMG_9148.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 28 | `IMG_9149.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 29 | `IMG_9150.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 30 | `IMG_9151.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 31 | `IMG_9152.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 32 | `IMG_9153.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 33 | `IMG_9154.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 34 | `IMG_9155.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 35 | `IMG_9156.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 36 | `IMG_9157.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 37 | `IMG_9158.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 38 | `IMG_9159.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 39 | `IMG_9160.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 40 | `IMG_9161.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 41 | `IMG_9162.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 42 | `IMG_9163.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 43 | `IMG_9164.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 44 | `IMG_9165.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 45 | `IMG_9166.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 46 | `IMG_9167.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 47 | `IMG_9168.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 48 | `IMG_9169.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 49 | `IMG_9170.PNG` | mobile | TBD | TBD | TBD | TBD | TBD | PENDING |
| 50 | `Screen Shot 2026-05-13 at 11.42.37 PM.png` | desktop | dashboard | Mindbody Dashboard — Insights snapshot home | mindbody_04_dashboard_and_appointments_grid_raw.md | pre-marker + marker 1 (lines 1-700) | 4 | COMPLETED |
| 51 | `Screen Shot 2026-05-13 at 11.43.23 PM.png` | desktop | appointments_grid | Appointments — Week view (single-provider filter, Crawford Dr. Nicholas) | mindbody_04_dashboard_and_appointments_grid_raw.md | pre-marker bucket 1 + marker 1 (lines 240-700) | 4 | COMPLETED |
| 52 | `Screen Shot 2026-05-13 at 11.43.47 PM.png` | desktop | appointments_grid | Appointments — Day view (multi-provider team, 8 columns) | mindbody_04_dashboard_and_appointments_grid_raw.md | pre-marker buckets 1+2 + marker 1 (lines 240-700) | 4 | COMPLETED |
| 53 | `Screen Shot 2026-05-13 at 11.44.26 PM.png` | desktop | appointments_grid | Appointments — Day view zoomed (focused on appointment cards + status badges) | mindbody_04_dashboard_and_appointments_grid_raw.md | pre-marker buckets 1+2 + marker 1 (lines 240-700) | 4 | COMPLETED |
| 54 | `Screen Shot 2026-05-13 at 11.44.49 PM.png` | desktop | appointments_admin_menu | Appointments — "More" admin menu opened (5 admin actions + 2 view prefs) | mindbody_04_dashboard_and_appointments_grid_raw.md | marker 14 (line 27597, Appointment Options page deep-dive) | 4 | COMPLETED |
| 55 | `Screen Shot 2026-05-13 at 11.45.04 PM.png` | desktop | appointments_grid_overlays | Appointment hover popover — quick-glance detail with metadata (Kristie E, Consultation - Aesthetic Injector, Room 6) | mindbody_05_appointments_grid_overlays_and_detail_raw.md | pre-marker bucket 4 + marker 1 (lines 1-700) + supplemental Turn 1 (mindbody_to_omni_direction_raw.md) | 5 | COMPLETED |
| 56 | `Screen Shot 2026-05-13 at 11.45.23 PM.png` | desktop | appointments_grid_overlays | Provider column dropdown menu (Go to week view / Edit schedule / Add unavailability / Assign appointment types / View profile) | mindbody_05_appointments_grid_overlays_and_detail_raw.md | pre-marker buckets 1+6 + marker 6 staff perms (lines 240-379 + 2598-3721) | 5 | COMPLETED |
| 57 | `Screen Shot 2026-05-13 at 11.45.35 PM.png` | desktop | appointments_grid_overlays | +Add column dropdown — quick-add staff availability picker (full 9-staff roster, surfaces hidden Parrah Grundy) | mindbody_05_appointments_grid_overlays_and_detail_raw.md | pre-marker buckets 2+6 (lines 240-379) | 5 | COMPLETED |
| 58 | `Screen Shot 2026-05-13 at 11.45.51 PM.png` | desktop | appointments_grid_overlays | Service category filter dropdown — top of hierarchical service tree (categories 1, 10, 11, 12 partial 2) | mindbody_05_appointments_grid_overlays_and_detail_raw.md | pre-marker bucket 3 + marker 5 (lines 270-290 + 2153-2597) + cross-ref to mindbody_settings_room_requirements_raw.md | 5 | COMPLETED |
| 59 | `Screen Shot 2026-05-13 at 11.46.10 PM.png` | desktop | appointments_grid_overlays | Service category filter dropdown — scrolled down (categories 2 Add-Ons full + 2 Facial Treatments + 3 Chemical Peels + 4 Skin Treatments) | mindbody_05_appointments_grid_overlays_and_detail_raw.md | pre-marker buckets 3+6 + marker 5 (lines 270-300 + 2153-2597) | 5 | COMPLETED |
| 60 | `Screen Shot 2026-05-13 at 11.47.10 PM.png` | desktop | appointments_detail_edit | Edit Appointment full panel + appointment action context menu (locked-after-completion banner; Confirmed+Arrived stack; 7 of 12 lifecycle items visible) | mindbody_05_appointments_grid_overlays_and_detail_raw.md | pre-marker buckets 4+5+6+7 + marker 1 (lines 240-380 + 380-700) + supplemental Turn 1 (mindbody_to_omni_direction_raw.md) | 5 | COMPLETED |
| 61 | `Screen Shot 2026-05-13 at 11.47.37 PM.png` | desktop | appointments_detail_edit | Edit Appointment — second tab active (history/audit) showing Created+Last-modified metadata (NC created 05/05, PG modified 05/13 post-completion) | mindbody_05_appointments_grid_overlays_and_detail_raw.md | pre-marker bucket 5 + marker 6 staff perms (lines 313-330 + 2598-3721) + supplemental Q5 capability flags (mindbody_open_questions_raw.md) | 5 | COMPLETED |
| 62 | `Screen Shot 2026-05-13 at 11.48.49 PM.png` | desktop | clients_directory | Client Directory — search/filter list (Saved searches + ~20 filter axes across 5 buckets: Client info / Sales Info / Client Indexes / Liability Waiver / Search; Client type filter B2B/FAMILY; Add New Client) | mindbody_10_clients_directory_and_profile_cockpit_raw.md | pre-marker bucket 9 (CRM filters, lines 320-340) + marker 3 (lines 1086-1615) | 10 | COMPLETED |
| 63 | `Screen Shot 2026-05-13 at 11.52.36 PM.png` | desktop | appointments_grid_overlays | Appointment action context menu — FULL 12-item view (Checkout / Retail / Apply payment / Early Cancel / Late Cancel / Confirmed / Arrived / Reschedule / Modify / Progress Note / Prebook / Groups) — POS entry point | mindbody_06_pos_checkout_entry_and_products_raw.md | marker 1 (lines 380-700) + marker 2 (lines 701-1085) + supplemental Turn 1 + Q1 (mindbody_open_questions_raw.md) | 6 | COMPLETED |
| 64 | `Screen Shot 2026-05-13 at 11.52.55 PM.png` | desktop | pos_checkout | POS Checkout panel — appointment-linked cart open (Diana Donlon BH HydraFacial UNPAID + BH HydraFacial-Signature PAID entitlement; empty cart $0.00) | mindbody_06_pos_checkout_entry_and_products_raw.md | marker 2 (lines 701-1085) + marker 4 account ops (lines 1616-2152) + supplemental Turn 1 (mindbody_to_omni_direction_raw.md) | 6 | COMPLETED |
| 65 | `Screen Shot 2026-05-13 at 11.53.16 PM.png` | desktop | pos_checkout | POS — Add-on Service sub-flow (Original Service: BH HydraFacial 11:00 AM with Dedvukaj + ADD-ONS Service [Select service] + Select staff + DONE) | mindbody_06_pos_checkout_entry_and_products_raw.md | pre-marker bucket 6 (add-ons own logic) + marker 2 add-on sale (lines 240-380 + 701-1085) | 6 | COMPLETED |
| 66 | `Screen Shot 2026-05-13 at 11.53.37 PM.png` | desktop | pos_checkout | POS — Browse panel (7 commerce categories: Products / Services / Autopays-contracts / Packages / Gift Cards / Account payments / Tips) | mindbody_06_pos_checkout_entry_and_products_raw.md | marker 2 (lines 701-1085) — entire enumeration of commerce primitives + supplemental Q3 (4-entity split likely insufficient) | 6 | COMPLETED |
| 67 | `Screen Shot 2026-05-13 at 11.53.57 PM.png` | desktop | pos_checkout | POS — Browse > Products subcategory (BH Deluxe / Platinum / Signature HydraFacial $200-300 + Britenol Booster ADD-ON $250 + Dermabuilder Booster ADD-ON $250 + Face LED Light Therapy ADD-ON $50) | mindbody_06_pos_checkout_entry_and_products_raw.md | marker 5 service mesh (lines 2153-2597) + marker 6 retail/inventory (lines 2598-3721) + user feedback gap #2 (service-as-product) | 6 | COMPLETED |
| 68 | `Screen Shot 2026-05-13 at 11.54.20 PM.png` | desktop | pos_checkout | POS — Browse > Products > Chemical Peels filter (5 peel SKUs: VI PEEL ADVANCED / BioRePeel / OBAGI BLUE PEEL RADIANCE / SKIN TECH EASY PHYTIC / VI PEEL ORIGINAL; brand+formulation variants) | mindbody_06_pos_checkout_entry_and_products_raw.md | marker 5 (lines 2153-2597) + user feedback meta-framing (variant explosion at scale) | 6 | COMPLETED |
| 69 | `Screen Shot 2026-05-13 at 11.54.37 PM.png` | desktop | pos_checkout | POS — Chemical Peels with BioRePeel ADDED to cart ($250.00 Subtotal/Total) | mindbody_06_pos_checkout_entry_and_products_raw.md | marker 4 account ops (lines 1616-2152) + marker 2 cart building (lines 701-1085) | 6 | COMPLETED |
| 70 | `Screen Shot 2026-05-13 at 11.54.50 PM.png` | desktop | pos_checkout | POS — BioRePeel item detail edit panel (Price + Quantity + Discount percent + Discount amount + Notes optional + DONE) | mindbody_06_pos_checkout_entry_and_products_raw.md | marker 4 account ops (lines 1616-2152) + supplemental Q3 (per-line Billable Item attributes) | 6 | COMPLETED |
| 71 | `Screen Shot 2026-05-13 at 11.55.11 PM.png` | desktop | pos_checkout | POS — Browse > Services categories (Classes [Category 1] + Appointments hierarchy 7 numbered categories) | mindbody_07_pos_checkout_services_contracts_packages_raw.md | marker 5 service catalog (lines 2153-2597) + supplemental Turn 5 encounter profiles (Classes missing from enumeration) | 7 | COMPLETED |
| 72 | `Screen Shot 2026-05-13 at 11.55.31 PM.png` | desktop | pos_checkout | POS — Browse > Services > 12. Medical Visits (5 services: BH+ Hormone Balance $125 [member-tier] / Hormone Therapy Initial $225 / Hormone Therapy Follow-Up $125 / Medical Weight Loss Follow-Up $150 / Medical Weight Loss Initial $300) | mindbody_07_pos_checkout_services_contracts_packages_raw.md | marker 5 (lines 2153-2597) + user feedback gap #7 (Hims-style weight loss + HRT) | 7 | COMPLETED |
| 73 | `Screen Shot 2026-05-13 at 11.55.54 PM.png` | desktop | pos_checkout | POS — Medical Weight Loss (Initial Visit) detail edit (Price + Quantity + **Sessions + Duration + Active on** entitlement-lifecycle attributes + Discount + Notes) | mindbody_07_pos_checkout_services_contracts_packages_raw.md | marker 4 account ops (lines 1616-2152) + supplemental Q3 (4-entity split insufficient — service-as-prepaid-entitlement) | 7 | COMPLETED |
| 74 | `Screen Shot 2026-05-13 at 11.56.43 PM.png` | desktop | pos_checkout | POS — Browse > Autopays/contracts (5 BH+ membership tiers: Elite $159 / Elite Referral $79 / Ultra $59 / Hormone Balance $125 / RLT $99; all $0 one-time + recurring) | mindbody_07_pos_checkout_services_contracts_packages_raw.md | marker 4 account ops (lines 1616-2152) + user feedback gap #3 (memberships+subscriptions) + supplemental Q3 (commerce primitive expansion) | 7 | COMPLETED |
| 75 | `Screen Shot 2026-05-13 at 11.57.06 PM.png` | desktop | pos_checkout | POS — BH+ Elite contract detail edit (Start date 6/1/2026 + Duration 1 Month + Contract items RECURRING + Discount + **Pay Now toggle** ON/OFF) | mindbody_07_pos_checkout_services_contracts_packages_raw.md | marker 4 account ops (lines 1616-2152) + supplemental Turn 3 hybrid mode + Q4 (mode multi-axis) | 7 | COMPLETED |
| 76 | `Screen Shot 2026-05-13 at 11.57.20 PM.png` | desktop | pos_checkout | POS — BH+ Elite contract detail SCROLLED (Notes optional textarea below the fold) | mindbody_07_pos_checkout_services_contracts_packages_raw.md | marker 4 (lines 1616-2152) — per-line notes annotation pattern consistent across product/service/contract | 7 | COMPLETED |
| 77 | `Screen Shot 2026-05-13 at 11.58.00 PM.png` | desktop | pos_checkout | POS — Tip detail panel (Recipient dropdown + Amount $0.00) — gratuity attribution to single staff recipient | mindbody_07_pos_checkout_services_contracts_packages_raw.md | marker 5 commission/payroll mention (lines 2160-2180) + supplemental Q3 (8th commerce primitive) | 7 | COMPLETED |
| 78 | `Screen Shot 2026-05-13 at 11.58.30 PM.png` | desktop | pos_checkout | POS — Browse > Packages (6+ packages with strikethrough list-price merchandising: NEO Science RLT 16-Pack $580 / Aquagold variants / Hair Restoration variants / Microneedling variants; cart now $1,009) | mindbody_07_pos_checkout_services_contracts_packages_raw.md | marker 4 account ops (lines 1616-2152) + supplemental Q3 (package as bundle entity) | 7 | COMPLETED |
| 79 | `Screen Shot 2026-05-13 at 11.59.01 PM.png` | desktop | pos_checkout | POS — Peels (VI PEEL / PURIFY) QTY 3-Pack package detail edit (Active on + Package items 1-to-many enumeration with per-item Discount percent 15% / Discount amount $34.50) | mindbody_07_pos_checkout_services_contracts_packages_raw.md | marker 4 (lines 1616-2152) + supplemental Q3 (parent package + child package_items entities; total 8 commerce primitives) | 7 | COMPLETED |
| 80 | `Screen Shot 2026-05-13 at 11.59.15 PM.png` | desktop | pos_checkout | POS — Peels VI PEEL PURIFY 3-Pack package detail SCROLLED (3 enumerated children with 15% / $34.50 each) | mindbody_08_pos_checkout_completion_and_botox_raw.md | marker 4 (lines 1616-2152) + supplemental Q3 (parent + 1-to-many children substrate) | 8 | COMPLETED |
| 81 | `Screen Shot 2026-05-13 at 11.59.34 PM.png` | desktop | pos_checkout | POS — Browse > Gift Cards (100.00 Gift Card $100 + Gift card custom amount $0; cart now displays Discount line $103.50) | mindbody_08_pos_checkout_completion_and_botox_raw.md | marker 2 (lines 701-1085) gift card sale/redemption + supplemental Q3 (gift card stored-value entity) | 8 | COMPLETED |
| 82 | `Screen Shot 2026-05-13 at 11.59.50 PM.png` | desktop | pos_checkout | POS — 100.00 Gift Card detail (Gift card number input + Get random number link + Look up card balance link) — dual-purpose surface (sell new + lookup existing) | mindbody_08_pos_checkout_completion_and_botox_raw.md | marker 2 (lines 701-1085) + system map "1H.1 / 1H.2" audit doctrine | 8 | COMPLETED |
| 83 | `Screen Shot 2026-05-14 at 12.00.18 AM.png` | desktop | pos_checkout | POS — Browse > Account payments (Payment on Account $0.00) — debit-against-balance commerce primitive | mindbody_08_pos_checkout_completion_and_botox_raw.md | marker 2 (lines 701-1085) account payment + supplemental Q3 (7th commerce primitive confirmed) | 8 | COMPLETED |
| 84 | `Screen Shot 2026-05-14 at 12.00.38 AM.png` | desktop | pos_checkout | POS — Promo code overlay (single field input) — cart-level discount mechanism | mindbody_08_pos_checkout_completion_and_botox_raw.md | marker 4 (lines 1616-2152) + supplemental Q3 (multi-source discount lifecycle) | 8 | COMPLETED |
| 85 | `Screen Shot 2026-05-14 at 12.00.54 AM.png` | desktop | pos_checkout_payment | **CHECKOUT — Payment method selection** (Card Reader / Swipe card / Enter card / Visa 6345 saved / Account $0.00) — first post-CHECKOUT-button screen | mindbody_08_pos_checkout_completion_and_botox_raw.md | system map 1I.4-1I.5 payment adapter capability matrix + 1I.6 idempotency | 8 | COMPLETED |
| 86 | `Screen Shot 2026-05-14 at 12.01.20 AM.png` | desktop | pos_checkout | POS — Cart panel zoomed (5 items, $1,345.50 — BioRePeel was removed; cart edits non-destructive within session) | mindbody_08_pos_checkout_completion_and_botox_raw.md | marker 4 (lines 1616-2152) + system map domain-table-discipline (cart as transient draft) | 8 | COMPLETED |
| 87 | `Screen Shot 2026-05-14 at 12.01.58 AM.png` | desktop | pos_browse_botox | **POS — Browse > Products with "botox" search — CANONICAL ANCHOR for user feedback gap #2** (Botox Qty 1 Unit $14 + 4 "Subscription" tiers 80/160/200/256 units at $800/$1560/$1900/$2368; bulk-tier prepaid bundles mislabeled as Subscription) | mindbody_08_pos_checkout_completion_and_botox_raw.md | pre-marker bucket 5 variable-quantity services (lines 270-280) + supplemental Q1 + Q3 (Encounter Container with planned-vs-rendered + variable Billable Item lines is OMNI's clean fix) | 8 | COMPLETED |
| 88 | `Screen Shot 2026-05-14 at 12.02.19 AM.png` | desktop | pos_checkout | Botox (Qty 1 Unit) detail edit — **Quantity = 20 entered** (LIVE ENACTMENT of user feedback gap #2 workaround: $14/unit × 20 = $280) | mindbody_09_pos_payment_methods_and_entitlement_attachment_raw.md | pre-marker bucket 5 variable-quantity (lines 270-280) + supplemental Q1 + Q3 (Encounter Container + 4-entity split fix) | 9 | COMPLETED |
| 89 | `Screen Shot 2026-05-14 at 12.02.43 AM.png` | desktop | pos_checkout_payment | CHECKOUT — Payment method picker EXPANDED ($866.50 total; 9 visible methods: Card Reader / Swipe / Enter / Visa 6345 / Cash / Account / Gift card / Check / Other Payment) | mindbody_09_pos_payment_methods_and_entitlement_attachment_raw.md | marker 2 (lines 701-1085) payment methods + system map 1I.4-1I.5 capability matrix | 9 | COMPLETED |
| 90 | `Screen Shot 2026-05-14 at 12.02.58 AM.png` | desktop | pos_checkout_payment | CHECKOUT — Payment method picker SCROLLED (medical financing tier: CareCredit / GreenSky / Allē / Treatment Deposit + digital wallets: Venmo / Pre-Paid / PayPal / Zelle) | mindbody_09_pos_payment_methods_and_entitlement_attachment_raw.md | marker 2 (lines 701-1085) + supplemental Q5 (per-brand payment method capability flags) | 9 | COMPLETED |
| 91 | `Screen Shot 2026-05-14 at 12.03.10 AM.png` | desktop | pos_checkout_payment | CHECKOUT — Payment method picker FULL SCROLL (brand-loyalty Aspire + clinic-specific BH+ Member Discount + New Patient Special + 3rd-party ClassPass + Referral Discount; **23 total payment methods enumerated**) | mindbody_09_pos_payment_methods_and_entitlement_attachment_raw.md | marker 2 (lines 701-1085) + supplemental Q3 (payment is federation of integrations) + Q5 (per-brand capability) | 9 | COMPLETED |
| 92 | `Screen Shot 2026-05-14 at 12.03.41 AM.png` | desktop | pos_checkout_payment | CHECKOUT — Cash $245 entered, Payment Notes optional, Split Payment affordance, COMPLETE SALE button | mindbody_09_pos_payment_methods_and_entitlement_attachment_raw.md | marker 4 (lines 1616-2152) + system map 1I.6 idempotency on cart commit | 9 | COMPLETED |
| 93 | `Screen Shot 2026-05-14 at 12.04.13 AM.png` | desktop | pos_checkout_payment | **CHECKOUT — SPLIT PAYMENT IN ACTION** (Cash $245 + Check $621.50 = $866.50; per-method specific fields: Cash Payment Notes vs Check Check#) | mindbody_09_pos_payment_methods_and_entitlement_attachment_raw.md | marker 4 (lines 1616-2152) + system map 1I.4-1I.5 + supplemental Q3 (multi-tender canonical pattern) | 9 | COMPLETED |
| 94 | `Screen Shot 2026-05-14 at 12.05.05 AM.png` | desktop | appointments_detail_edit | Edit Appointment with **NEW 3rd tab (entitlement-attachment view)** — "Current pricing option: BH HydraFacial - Signature, 1 of 1 remaining, Exp 04/10/2027"; conditional UI based on substrate state | mindbody_09_pos_payment_methods_and_entitlement_attachment_raw.md | marker 4 (lines 1616-2152) + supplemental Turn 1 (Schedulable + Billable Item separation concrete) + Q1 + Q3 | 9 | COMPLETED |
| 95 | `Screen Shot 2026-05-14 at 12.06.54 AM.png` | desktop | clients_profile | Client Profile — Diana Donlon Client Info tab (Visits + Membership summary [BH HydraFacial Signature x2] + Appointments Remaining + Contact & Subscriptions opt-in [3 categories x 2 channels = 6 toggles] + Class Waitlist SMS + Notes) | mindbody_10_clients_directory_and_profile_cockpit_raw.md | marker 3 client cockpit (lines 1086-1615) + system map DL-14 + 1G consent | 10 | COMPLETED |
| 96 | `Screen Shot 2026-05-14 at 12.07.08 AM.png` | desktop | clients_profile | Client Profile scrolled — Notes textarea + Billing Information (Credit card tab, saved card xxxx6345, Swipe Card to Store, Copy from contact info) | mindbody_10_clients_directory_and_profile_cockpit_raw.md | marker 4 (lines 1616-2152) + system map 1I.4-1I.5 payment adapter | 10 | COMPLETED |
| 97 | `Screen Shot 2026-05-14 at 12.07.20 AM.png` | desktop | clients_profile | Client Profile scrolled — Credit card details (07/2028 Visa) + **Autopay Schedule / Autopay History / Add New Autopay Schedule** + 6 collapsible sections (Edit name/Emergency Contact/Formula notes/Membership status/Address/Photo) | mindbody_10_clients_directory_and_profile_cockpit_raw.md | marker 4 account ops (lines 1616-2152) + pre-marker bucket 7 notes types | 10 | COMPLETED |
| 98 | `Screen Shot 2026-05-14 at 12.07.33 AM.png` | desktop | clients_profile | Client Profile scrolled — full 12 collapsible sections (Edit name / Emergency / Formula notes / Membership / Address / Photo / Referred by / Relationships / Additional info / **History [38 contact logs]** / **Client Indexes** / Rep (0)) | mindbody_10_clients_directory_and_profile_cockpit_raw.md | marker 3 (lines 1086-1615) + pre-marker bucket 9 + system map 1J.1-1J.9 (Relationships) | 10 | COMPLETED |
| 99 | `Screen Shot 2026-05-14 at 12.08.44 AM.png` | desktop | clients_profile_contact_logs | Diana Donlon — Contact Logs page (8 horizontal tabs: Client Home / Client Info / **Contact Logs (active)** / Schedule / Visits / Purchases / Account Details / Documents + More) + denormalized Visits/Pricing Options/Purchases header + filters (4 type, alert, followup status, sort) + Add New Contact Log form (Date/Time, Contact name, Contact method, Followup, Assigned, rich text body) | mindbody_10_clients_directory_and_profile_cockpit_raw.md | marker 3 client cockpit (lines 1086-1615) + system map 1H.4 acquisition + DL-14 followup-as-CNS-event | 10 | COMPLETED |
| 100 | `Screen Shot 2026-05-14 at 12.09.51 AM.png` | desktop | clients_profile_schedule | Kristie Eberhardt — Schedule tab (8 horizontal tabs same as 99; per-client appointment list with Day/Date/Time/Description [category + service]/Provider/Location [Bloom Health]/Booked online [No, channel attribution]/Actions; grouped by week, sortable) | mindbody_10_clients_directory_and_profile_cockpit_raw.md | marker 3 (lines 1086-1615) + system map 1H.4 channel attribution | 10 | COMPLETED |
| 101 | `Screen Shot 2026-05-14 at 12.10.05 AM.png` | desktop | clients_profile_schedule | Kristie Eberhardt — Schedule with per-row action menu (3 actions: Reschedule / Early Cancel / Check Out — context-reduced from 12-item appointment menu because future appointment) | mindbody_10_clients_directory_and_profile_cockpit_raw.md | marker 1 (lines 380-700) appointment action menu + DL-15 lifecycle gating | 10 | COMPLETED |
| 102 | `Screen Shot 2026-05-14 at 12.10.47 AM.png` | desktop | clients_profile_visits | Kristie Eberhardt — Visits tab (sub-tab nav: Visits/Logins/Appointments/Cancellations; 1 completed Provider Consultations - Aesthetic Injectables row; Resource(s) column empty; Total visits/hours footer aggregations) | mindbody_11_clients_profile_visits_purchases_account_documents_raw.md | marker 3 (lines 1086-1615) + pre-marker bucket 4 (intended vs actual) + supplemental Q1 + Q3 (Visits ≠ Appointments sub-tab evidence) | 11 | COMPLETED |
| 103 | `Screen Shot 2026-05-14 at 12.11.08 AM.png` | desktop | clients_profile_purchases | Kristie Eberhardt — Purchases tab (Sale 149159 / Payment Method `Comp` = **24th payment method**; per-line Return/Void action; receipt download/print/email icons; commerce description ≠ visit description) | mindbody_11_clients_profile_visits_purchases_account_documents_raw.md | marker 2 (lines 701-1085) + supplemental Q3 (Schedulable Service ≠ Billable Item naming divergence) + Q5 (`Comp` as per-clinic capability) | 11 | COMPLETED |
| 104 | `Screen Shot 2026-05-14 at 12.11.53 AM.png` | desktop | clients_profile_purchases | Kristie Eberhardt — Purchases tab with `Go to summary view` tooltip on view-mode toggle (same data, two projections — list vs summary) | mindbody_11_clients_profile_visits_purchases_account_documents_raw.md | marker 2 (lines 701-1085) (per-projection view-mode pattern) | 11 | COMPLETED |
| 105 | `Screen Shot 2026-05-14 at 12.14.01 AM.png` | desktop | clients_profile_account_details | Mary Behler — Account Details Summary sub-tab (Inactive section with 4 pricing options at $0.00/$50; per-row action menu open: Return/Void/Edit/Show Visits; Auto Pays section: BH+ \| Elite contract sold by Hannah Frrokaj, Month-to-Month, Auto-renewing N; Recalculate button) | mindbody_11_clients_profile_visits_purchases_account_documents_raw.md | marker 4 account ops (lines 1616-2152) + supplemental Q3 (entitlement projection back to Visits via Show Visits action) | 11 | COMPLETED |
| 106 | `Screen Shot 2026-05-14 at 12.14.30 AM.png` | desktop | clients_profile_account_details | Mary Behler — Autopay Schedule sub-tab (1 active scheduled row 6/1/2026 $159 BH+ Elite Credit card; inline-editable fields; `Apply to all?` checkbox; `Remove (Delete) Checked Transactions` + `Run All Checked Transactions Now` destructive/runnable ops; Show month-to-month toggle) | mindbody_11_clients_profile_visits_purchases_account_documents_raw.md | marker 4 (lines 1616-2152) + system map 1I.6 idempotency (force-run-now + auto-run double-charge protection) | 11 | COMPLETED |
| 107 | `Screen Shot 2026-05-14 at 12.15.13 AM.png` | desktop | clients_profile_account_details | Mary Behler — Autopay Schedule with month-to-month expanded (11 synthetic future rows 7/1/2026-5/1/2027 all $159 BH+ Elite Credit card Scheduled; template-expansion not pre-materialization pattern) | mindbody_11_clients_profile_visits_purchases_account_documents_raw.md | marker 4 (lines 1616-2152) + system map domain-table-discipline (rolling-contract substrate efficiency) | 11 | COMPLETED |
| 108 | `Screen Shot 2026-05-14 at 12.16.31 AM.png` | desktop | clients_profile_documents | Mary Behler — Documents tab (Upload New File 4MB max with 7 filename-restriction patterns; Client Forms empty state with Send Client Forms CTA; VIEW LOG column indicates form-submission audit trail) | mindbody_11_clients_profile_visits_purchases_account_documents_raw.md | marker 3 (lines 1086-1615) + system map 1G.3 consent capture audit | 11 | COMPLETED |
| 109 | `Screen Shot 2026-05-14 at 12.16.47 AM.png` | desktop | clients_profile_documents | Mary Behler — Documents tab with More menu expanded (`Set as client lookup landing page` user-pref + `Merge duplicate clients` admin op; More menu is cockpit-shell-level not per-tab) | mindbody_11_clients_profile_visits_purchases_account_documents_raw.md | marker 11 (lines ~27890-27982 end-of-marker-14 cluster) merge-as-audit + system map 1J.1-1J.9 identity precedence | 11 | COMPLETED |
| 110 | `Screen Shot 2026-05-14 at 12.17.05 AM.png` | desktop | clients_profile_documents | Mary Behler — Documents tab with `Tag add` tooltip visible (tag-add affordance per-cockpit; confirms client tagging is first-class primitive; tags ≠ Client Indexes) | mindbody_11_clients_profile_visits_purchases_account_documents_raw.md | marker 3 (lines 1086-1615) + Batch 10 row 62 Tagged-clients filter cross-ref | 11 | COMPLETED |
| 111 | `Screen Shot 2026-05-14 at 12.17.42 AM.png` | desktop | staff_identity_dropdown | NC user profile dropdown EXPANDED — Nicholas Crawford / Site ID: 411894 / 5 menu items: Account Information / Payments Portal / Mindbody Subscription / Location Owner / Log out of Mindbody Apps; **3 concentric identity scopes visible (user/site/owner)** + Payment Portal vs Mindbody Subscription split (external commerce vs platform billing) | mindbody_11_clients_profile_visits_purchases_account_documents_raw.md | system map 1U multi-tenancy + radar federation zones 79-88 + supplemental Q5 capability flags per brand/clinic | 11 | COMPLETED |
| 112 | `Screen Shot 2026-05-14 at 12.18.34 AM.png` | desktop | pos_entry | POS top-level entry page (3 paths: Search client / Add new client / Mary Behler quick-pick / Walk-In Sale + Open Tickets dropdown + Gift card balance lookup); 3 substrate cart states implied | mindbody_12_pos_entry_clients_admin_more_service_catalog_editor_raw.md | marker 1 (lines 380-700) checkout/POS coupling | 12 | COMPLETED |
| 113 | `Screen Shot 2026-05-14 at 12.18.48 AM.png` | desktop | pos_client_add_modal | Add new client modal page 1 — 4 required fields (First/Last/Email/Mobile phone) + Gender + Subscriptions 6 toggles (3 categories × 2 channels) + critical/transactional always-sent disclaimer | mindbody_12_pos_entry_clients_admin_more_service_catalog_editor_raw.md | marker 3 (lines 1086-1615) + system map 1G consent capture audit | 12 | COMPLETED |
| 114 | `Screen Shot 2026-05-14 at 12.19.20 AM.png` | desktop | pos_client_add_modal | Add new client modal SCROLLED — Address type dropdown (multi-typed) + Address/City [pre-filled Bloomfield Hills]/State Michigan/Postal/Country US + Work phone/extension/Home phone (4 phone slots denormalized); per-clinic auto-fill defaults | mindbody_12_pos_entry_clients_admin_more_service_catalog_editor_raw.md | pre-marker bucket 9 (CRM filters) + supplemental Q5 (per-clinic capability defaults) | 12 | COMPLETED |
| 115 | `Screen Shot 2026-05-14 at 12.19.53 AM.png` | desktop | clients_directory_admin_more | Client Directory — More menu EXPANDED with **18 client-domain admin entries**: Modify Tagged Clients / Locate Duplicate Clients / Merge Duplicate Clients / Data Privacy / Client Forms / **ICD Codes** / Required Fields / Relationship Types / Client Form Custom Fields / Client Alerts / Client Indexes / Client Index Values / Client Types / Referral Types / Referral Subtypes / Contact Log Types / Client Statuses / Gender — entire client-domain admin/config surface | mindbody_12_pos_entry_clients_admin_more_service_catalog_editor_raw.md | marker 11 client merge/unmask + marker 6 settings as OS (lines 2598-3721) + system map 1J.1-1J.9 identity precedence | 12 | COMPLETED |
| 116 | `Screen Shot 2026-05-14 at 12.22.05 AM.png` | desktop | services_products_appointments_admin | Services & Products → Appointments admin list view (left nav: Classes/Appointments/Courses/Retail Products/Pricing/Arrivals/Contracts) — 1. Facials category expanded with 12 services + 10. Red Light Therapy collapsed; 5-column projection (Services/Duration/Price/Staff/Bookable online); HydraFacial price-range `$0.00 - $300.00 [4]` = 4 pricing tiers; 9 of 12 services have ⚠ config-completeness warnings | mindbody_12_pos_entry_clients_admin_more_service_catalog_editor_raw.md | marker 5 service catalog mesh (lines 2153-2597) + supplemental Q3 (4-entity split: Service ↔ Pricing Options 1-to-N) | 12 | COMPLETED |
| 117 | `Screen Shot 2026-05-14 at 12.23.11 AM.png` | desktop | services_products_appointments_admin | Appointments admin with Settings dropdown EXPANDED (3 sub-pages: Appointment Options / Scheduling Increments / Staff Schedules) — DL-15 scheduling substrate spine territory | mindbody_12_pos_entry_clients_admin_more_service_catalog_editor_raw.md | marker 5 (lines 2153-2597) + DL-15 scheduling substrate spine (28 invariants) | 12 | COMPLETED |
| 118 | `Screen Shot 2026-05-14 at 12.23.40 AM.png` | desktop | services_products_appointments_admin | Appointments admin Category ⋮ menu EXPANDED on `1. Facials` — 6 category-level actions: Allow online scheduling ✓ / Rename / Show inactive appointment types / Manage pricing relationships / Payroll integration / Deactivate; categories are substrate not just service.category_name string | mindbody_12_pos_entry_clients_admin_more_service_catalog_editor_raw.md | marker 5 (lines 2153-2597) + supplemental Q3 (Pricing Options substrate management entry point) | 12 | COMPLETED |
| 119 | `Screen Shot 2026-05-14 at 12.23.58 AM.png` | desktop | services_products_appointments_admin | Appointments admin Service-row ⋮ menu EXPANDED on `BH HydraFacial` — 2 minimal actions: Deactivate / Duplicate (other operations via Edit page); duplicate-as-first-class implies template-cloning pattern | mindbody_12_pos_entry_clients_admin_more_service_catalog_editor_raw.md | marker 5 (lines 2153-2597) | 12 | COMPLETED |
| 120 | `Screen Shot 2026-05-14 at 12.24.14 AM.png` | desktop | services_products_appointments_admin | Appointments admin HOVER POPOVER on `BH HydraFacial` row exposing 4 extra attributes: Capacity 1 / Color -- / Deducted 0 / Sort order 1 (NOT shown in default 5-column projection); service substrate is 9+ visible attributes here, ~30+ total | mindbody_12_pos_entry_clients_admin_more_service_catalog_editor_raw.md | marker 5 (lines 2153-2597) + supplemental Q3 (4 independent composing booking axes: Capacity/Staff/Room/Resource) + user feedback gap #1 | 12 | COMPLETED |
| 121 | `Screen Shot 2026-05-14 at 12.24.30 AM.png` | desktop | services_products_appointments_admin_edit | Edit appointment type — BH HydraFacial (numeric ID 88) — Details (Name/Duration 60/Appointment category `Med spa > General` 2-level hierarchy) + Online Scheduling Yes/No + Description rich-text + Advanced options (`Convert to add-on Yes/No` radio — Add-on collapsed into Service table with is_addon flag) | mindbody_12_pos_entry_clients_admin_more_service_catalog_editor_raw.md | marker 5 (lines 2153-2597) + supplemental Q3 (Add-on substrate decision: same table vs separate) + Q4 (mode-per-service-line vs flat appointment_type) | 12 | COMPLETED |
| 122 | `Screen Shot 2026-05-14 at 12.24.49 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 123 | `Screen Shot 2026-05-14 at 12.25.13 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 124 | `Screen Shot 2026-05-14 at 12.25.30 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 125 | `Screen Shot 2026-05-14 at 12.25.59 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 126 | `Screen Shot 2026-05-14 at 12.26.15 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 127 | `Screen Shot 2026-05-14 at 12.26.31 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 128 | `Screen Shot 2026-05-14 at 12.26.52 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 129 | `Screen Shot 2026-05-14 at 12.27.10 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 130 | `Screen Shot 2026-05-14 at 12.27.37 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 131 | `Screen Shot 2026-05-14 at 12.28.28 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 132 | `Screen Shot 2026-05-14 at 12.28.49 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 133 | `Screen Shot 2026-05-14 at 12.29.30 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 134 | `Screen Shot 2026-05-14 at 12.29.50 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 135 | `Screen Shot 2026-05-14 at 12.30.07 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 136 | `Screen Shot 2026-05-14 at 12.31.07 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 137 | `Screen Shot 2026-05-14 at 12.31.49 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 138 | `Screen Shot 2026-05-14 at 12.33.53 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 139 | `Screen Shot 2026-05-14 at 12.34.09 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 140 | `Screen Shot 2026-05-14 at 12.34.34 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 141 | `Screen Shot 2026-05-14 at 12.35.18 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 142 | `Screen Shot 2026-05-14 at 12.35.41 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 143 | `Screen Shot 2026-05-14 at 12.35.57 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 144 | `Screen Shot 2026-05-14 at 12.36.15 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 145 | `Screen Shot 2026-05-14 at 12.37.17 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 146 | `Screen Shot 2026-05-14 at 12.37.34 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 147 | `Screen Shot 2026-05-14 at 12.37.48 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 148 | `Screen Shot 2026-05-14 at 12.38.06 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 149 | `Screen Shot 2026-05-14 at 12.38.23 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 150 | `Screen Shot 2026-05-14 at 12.38.42 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 151 | `Screen Shot 2026-05-14 at 12.38.58 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 152 | `Screen Shot 2026-05-14 at 12.39.13 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 153 | `Screen Shot 2026-05-14 at 12.39.28 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 154 | `Screen Shot 2026-05-14 at 12.40.32 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 155 | `Screen Shot 2026-05-14 at 12.43.15 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 156 | `Screen Shot 2026-05-14 at 12.44.33 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 157 | `Screen Shot 2026-05-14 at 12.49.39 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 158 | `Screen Shot 2026-05-14 at 12.50.17 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 159 | `Screen Shot 2026-05-14 at 12.51.59 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 160 | `Screen Shot 2026-05-14 at 12.54.05 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 161 | `Screen Shot 2026-05-14 at 12.54.50 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 162 | `Screen Shot 2026-05-14 at 12.55.47 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 163 | `screenshot_unnamed_2048x1440.png` | other | TBD | TBD | TBD | TBD | TBD | PENDING |

---

## Duplicates archive (preserved per Knox direction; not deleted)

These files are byte-identical duplicates of files at root. Preserved in [screenshots/_duplicates/](screenshots/_duplicates/) for full audit trail. Not ingested separately (the at-root version is the canonical one).

| # | filename | duplicate of | reason |
|---|----------|--------------|--------|
| 1 | `IMG_9122 2.PNG` | `IMG_9122.PNG` | iCloud Photos sync artifact (` 2.PNG` suffix); byte-identical |
| 2 | `IMG_9123 2.PNG` | `IMG_9123.PNG` | iCloud Photos sync artifact (` 2.PNG` suffix); byte-identical |
| 3 | `IMG_9124 2.PNG` | `IMG_9124.PNG` | iCloud Photos sync artifact (` 2.PNG` suffix); byte-identical |
| 4 | `IMG_9125 2.PNG` | `IMG_9125.PNG` | iCloud Photos sync artifact (` 2.PNG` suffix); byte-identical |
| 5 | `IMG_9126 2.PNG` | `IMG_9126.PNG` | iCloud Photos sync artifact (` 2.PNG` suffix); byte-identical |
| 6 | `Screen Shot 2026-05-13 at 11.58.00 PM (1).png` | `Screen Shot 2026-05-13 at 11.58.00 PM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 7 | `Screen Shot 2026-05-13 at 11.59.15 PM (1).png` | `Screen Shot 2026-05-13 at 11.59.15 PM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 8 | `Screen Shot 2026-05-13 at 11.59.34 PM (1).png` | `Screen Shot 2026-05-13 at 11.59.34 PM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 9 | `Screen Shot 2026-05-14 at 12.00.18 AM (1).png` | `Screen Shot 2026-05-14 at 12.00.18 AM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 10 | `Screen Shot 2026-05-14 at 12.00.38 AM (1).png` | `Screen Shot 2026-05-14 at 12.00.38 AM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 11 | `Screen Shot 2026-05-14 at 12.00.54 AM (1).png` | `Screen Shot 2026-05-14 at 12.00.54 AM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 12 | `Screen Shot 2026-05-14 at 12.01.20 AM (1).png` | `Screen Shot 2026-05-14 at 12.01.20 AM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 13 | `Screen Shot 2026-05-14 at 12.01.58 AM (1).png` | `Screen Shot 2026-05-14 at 12.01.58 AM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 14 | `Screen Shot 2026-05-14 at 12.02.19 AM (1).png` | `Screen Shot 2026-05-14 at 12.02.19 AM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 15 | `Screen Shot 2026-05-14 at 12.02.43 AM (1).png` | `Screen Shot 2026-05-14 at 12.02.43 AM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 16 | `Screen Shot 2026-05-14 at 12.02.58 AM (1).png` | `Screen Shot 2026-05-14 at 12.02.58 AM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 17 | `Screen Shot 2026-05-14 at 12.03.41 AM (1).png` | `Screen Shot 2026-05-14 at 12.03.41 AM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 18 | `Screen Shot 2026-05-14 at 12.04.13 AM (1).png` | `Screen Shot 2026-05-14 at 12.04.13 AM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 19 | `Screen Shot 2026-05-14 at 12.05.05 AM (1).png` | `Screen Shot 2026-05-14 at 12.05.05 AM.png` | browser save-as duplicate (` (1).png` suffix); md5-identical |
| 20 | `screenshot_unnamed_2048x1440 dup.png` | `screenshot_unnamed_2048x1440.png` | md5-identical duplicate; original filename was 'png (1)' (no extension), renamed at cleanup |

---

## Maintenance / update protocol

This manifest is updated incrementally during Phase B.5 execution:

1. **Step 3 (chat navigation map):** populate `chat_nav_lines` column for screenshots discussed in the chat transcript.
2. **Step 4-N (per-feature-area raw capture batches):** for each screenshot in the batch:
   - Read the image
   - Identify `screen_title` (inferred from visible UI content)
   - Assign `feature_area` (from the taxonomy in Conventions section)
   - Write the per-screen capture into the appropriate `mindbody_NN_<area>_raw.md` file
   - Update the manifest row: `raw_capture_file` filled, `batch` filled, `status` → `COMPLETED`
3. **Step N+1 (Layer 2 synthesis):** every claim in Layer 2 cites manifest row number(s) for granular traceability back to source.

Per Knox direction (locked in [phase_b5_mindbody_ingestion_4db27449.plan.md](../../phase_b5_mindbody_ingestion_4db27449.plan.md)): the manifest is part of the durable archive. Layer 2 synthesis can be re-derived from raw layer + manifest if needed; the raw layer + manifest cannot be re-derived from Layer 2.

## Cross-references

- [phase_b5_mindbody_ingestion_4db27449.plan.md](../../phase_b5_mindbody_ingestion_4db27449.plan.md) — Phase B.5 master plan with Knox direction
- [omni_brain_hardening_d1ef429b.plan.md](../../omni_brain_hardening_d1ef429b.plan.md) — broader brain-hardening plan; Phase B.5 inserts between Phase B and Phase 0
- [mindbody_knox_chat_raw.md](mindbody_knox_chat_raw.md) — full user ↔ Knox chat transcript (raw, frozen)
- [mindbody_user_feedback_raw.md](mindbody_user_feedback_raw.md) — user's 9-gap feedback + meta-framing (raw, frozen)
- [mindbody_settings_room_requirements_raw.md](mindbody_settings_room_requirements_raw.md) — Mindbody Room Requirements settings (raw, frozen)
- [mindbody_settings_class_course_options_raw.md](mindbody_settings_class_course_options_raw.md) — Mindbody Class and Course Options settings (raw, frozen)
- [mindbody_chat_navigation_map.md](mindbody_chat_navigation_map.md) — chat line-range index per topic (Step 3 deliverable; not yet built)
- `mindbody_NN_<area>_raw.md` files — per-feature-area raw screenshot captures (Step 4-N deliverables; not yet built)
- `../../designs/2026-05-15_mindbody_architecture_understanding.md` — Layer 2 synthesis (Step N+1 deliverable; not yet built)
