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
| [mindbody_knox_chat_raw.md](mindbody_knox_chat_raw.md) | 30,627 | ~1.0 MB | User ↔ Knox chat transcript (full back-and-forth) |
| [mindbody_user_feedback_raw.md](mindbody_user_feedback_raw.md) | 62 | 7.5 KB | User's 9-gap feedback + meta-framing |
| [mindbody_settings_room_requirements_raw.md](mindbody_settings_room_requirements_raw.md) | ~146 | ~15 KB | Mindbody "Room Requirements" settings page (132-service × room matrix; verbatim text from Pasted text (4).txt with frozen-ingest header) |
| [mindbody_settings_class_course_options_raw.md](mindbody_settings_class_course_options_raw.md) | ~196 | ~13 KB | Mindbody "Class and Course Options" settings page (~89 numbered settings; verbatim text from Pasted text (6).txt with frozen-ingest header) |

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
| 50 | `Screen Shot 2026-05-13 at 11.42.37 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 51 | `Screen Shot 2026-05-13 at 11.43.23 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 52 | `Screen Shot 2026-05-13 at 11.43.47 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 53 | `Screen Shot 2026-05-13 at 11.44.26 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 54 | `Screen Shot 2026-05-13 at 11.44.49 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 55 | `Screen Shot 2026-05-13 at 11.45.04 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 56 | `Screen Shot 2026-05-13 at 11.45.23 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 57 | `Screen Shot 2026-05-13 at 11.45.35 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 58 | `Screen Shot 2026-05-13 at 11.45.51 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 59 | `Screen Shot 2026-05-13 at 11.46.10 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 60 | `Screen Shot 2026-05-13 at 11.47.10 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 61 | `Screen Shot 2026-05-13 at 11.47.37 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 62 | `Screen Shot 2026-05-13 at 11.48.49 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 63 | `Screen Shot 2026-05-13 at 11.52.36 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 64 | `Screen Shot 2026-05-13 at 11.52.55 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 65 | `Screen Shot 2026-05-13 at 11.53.16 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 66 | `Screen Shot 2026-05-13 at 11.53.37 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 67 | `Screen Shot 2026-05-13 at 11.53.57 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 68 | `Screen Shot 2026-05-13 at 11.54.20 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 69 | `Screen Shot 2026-05-13 at 11.54.37 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 70 | `Screen Shot 2026-05-13 at 11.54.50 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 71 | `Screen Shot 2026-05-13 at 11.55.11 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 72 | `Screen Shot 2026-05-13 at 11.55.31 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 73 | `Screen Shot 2026-05-13 at 11.55.54 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 74 | `Screen Shot 2026-05-13 at 11.56.43 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 75 | `Screen Shot 2026-05-13 at 11.57.06 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 76 | `Screen Shot 2026-05-13 at 11.57.20 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 77 | `Screen Shot 2026-05-13 at 11.58.00 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 78 | `Screen Shot 2026-05-13 at 11.58.30 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 79 | `Screen Shot 2026-05-13 at 11.59.01 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 80 | `Screen Shot 2026-05-13 at 11.59.15 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 81 | `Screen Shot 2026-05-13 at 11.59.34 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 82 | `Screen Shot 2026-05-13 at 11.59.50 PM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 83 | `Screen Shot 2026-05-14 at 12.00.18 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 84 | `Screen Shot 2026-05-14 at 12.00.38 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 85 | `Screen Shot 2026-05-14 at 12.00.54 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 86 | `Screen Shot 2026-05-14 at 12.01.20 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 87 | `Screen Shot 2026-05-14 at 12.01.58 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 88 | `Screen Shot 2026-05-14 at 12.02.19 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 89 | `Screen Shot 2026-05-14 at 12.02.43 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 90 | `Screen Shot 2026-05-14 at 12.02.58 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 91 | `Screen Shot 2026-05-14 at 12.03.10 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 92 | `Screen Shot 2026-05-14 at 12.03.41 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 93 | `Screen Shot 2026-05-14 at 12.04.13 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 94 | `Screen Shot 2026-05-14 at 12.05.05 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 95 | `Screen Shot 2026-05-14 at 12.06.54 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 96 | `Screen Shot 2026-05-14 at 12.07.08 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 97 | `Screen Shot 2026-05-14 at 12.07.20 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 98 | `Screen Shot 2026-05-14 at 12.07.33 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 99 | `Screen Shot 2026-05-14 at 12.08.44 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 100 | `Screen Shot 2026-05-14 at 12.09.51 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 101 | `Screen Shot 2026-05-14 at 12.10.05 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 102 | `Screen Shot 2026-05-14 at 12.10.47 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 103 | `Screen Shot 2026-05-14 at 12.11.08 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 104 | `Screen Shot 2026-05-14 at 12.11.53 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 105 | `Screen Shot 2026-05-14 at 12.14.01 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 106 | `Screen Shot 2026-05-14 at 12.14.30 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 107 | `Screen Shot 2026-05-14 at 12.15.13 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 108 | `Screen Shot 2026-05-14 at 12.16.31 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 109 | `Screen Shot 2026-05-14 at 12.16.47 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 110 | `Screen Shot 2026-05-14 at 12.17.05 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 111 | `Screen Shot 2026-05-14 at 12.17.42 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 112 | `Screen Shot 2026-05-14 at 12.18.34 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 113 | `Screen Shot 2026-05-14 at 12.18.48 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 114 | `Screen Shot 2026-05-14 at 12.19.20 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 115 | `Screen Shot 2026-05-14 at 12.19.53 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 116 | `Screen Shot 2026-05-14 at 12.22.05 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 117 | `Screen Shot 2026-05-14 at 12.23.11 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 118 | `Screen Shot 2026-05-14 at 12.23.40 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 119 | `Screen Shot 2026-05-14 at 12.23.58 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 120 | `Screen Shot 2026-05-14 at 12.24.14 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
| 121 | `Screen Shot 2026-05-14 at 12.24.30 AM.png` | desktop | TBD | TBD | TBD | TBD | TBD | PENDING |
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
