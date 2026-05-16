# Mindbody — Batch 17 raw capture: Mobile Business app (iOS) — Schedule day-view + month picker + Staff filter modal + Schedule with staff avatars + bottom-sheet action menu + Appointment detail + Edit Appointment with full substrate + Service picker hierarchical + Staff picker (eligible staff filter) + Time drum-roll picker + keyboard input

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~5:30 AM UTC-4)
Batch: 17 (FIRST MOBILE BATCH)
Feature area(s): `mobile_business_app_schedule`, `mobile_business_app_appointment_detail`, `mobile_business_app_appointment_edit`
Screenshots covered: 10 (rows 1-10 = IMG_9122-9131; mobile iOS Mindbody Business app)

Chat cross-references:
- **Marker 1 (lines 380-700) — Checkout / POS / package / membership coupling** — IMG_9126 Appointment detail BIG `CHECK OUT` button confirms the appointment-checkout coupling visible on desktop. Mobile makes it the dominant primary CTA.
- **Marker 5 (lines 2153-2597) — Service catalog mesh** — IMG_9128 hierarchical Select Appointment picker is the canonical service catalog tree projection on mobile.
- Pre-marker bucket 4 (intended vs actual) — IMG_9127 Edit Appointment surfaces SOURCE / DISCOUNTS / TX NOTES (treatment notes) as DISPLAY-ONLY greyed fields — confirms mobile surface treats these as 2nd-class read-mostly fields (vs desktop's separate "Discounts / Source / Notes / Deposit" full-editor tab from Batch 5).

Supplemental cross-references:
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — Knox 4-entity split. Mobile Edit Appointment screen (IMG_9127) cleanly separates: Appointment Type (Schedulable Service) / Staff (Provider) / Resource (Room) / Add-ons (siblings) — 4 distinct entity slots visible in mobile UI hierarchy.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q1 (encounter container) — IMG_9126 shows `No prepaid services on account` text — clients without pre-paid entitlements show this status. Q1 evidence: encounter container surfaces entitlement-attachment as 1st-class state on appointment detail.

User feedback cross-refs:
- Gap #8 (video visits / ad-hoc phone calls / in-clinic) — Mobile app is the bridge for ad-hoc booking from anywhere. IMG_9125 bottom-sheet (Book Appointment / Add Availability / Add Unavailability) shows mobile staff can self-manage availability + book on-the-go.

---

## Step 01 (row 1)

**File:** `screenshots/IMG_9122.PNG`
**Feature area:** `mobile_business_app_schedule`
**Inferred screen title:** Mobile Business app — Schedule day-view for Thursday May 14 2026 (All Staff filter selected; DC/PJ/PG/OT staff columns visible; 8 AM - 5 PM grid; 4 visible bookings with color-coded service categories: orange=HydraFacial, green=Mary Behler 12p-1p, teal+orange=Red Light Therapy NEO; greyed Ghuznavi 3p-5p block; bottom nav: Schedule(active)/Retail/Clients/Reports/More)

### KEY OBSERVATIONS

- **Mobile bottom nav has 5 tabs** (Schedule / Retail / Clients / Reports / More) vs DESKTOP left nav 12+ entries — mobile compresses to 5 top-level surfaces + More menu.
- **Day-view grid is staff-column × time-row** same as desktop (Batches 4-5). Mobile uses initials (DC/PJ/PG/OT) instead of names for column headers due to space.
- **Color-coded appointments** by service category (orange/green/teal/grey). Matches desktop pattern. Color is per-Service (Batch 12 row 120 hover popover "Color" attribute).
- **Greyed bar** ("3p-5p Ghuznavi" first column) = blocked time / unavailability / personal appointment? Visual marker for non-bookable.

---

## Step 02 (row 2)

**File:** `screenshots/IMG_9123.PNG`
**Feature area:** `mobile_business_app_schedule`
**Inferred screen title:** Schedule with **month-picker** EXPANDED (Jan/Feb/Mar/Apr/MAY/Jun row + day grid with per-day appointment count numbers underneath; May 14 currently selected; appointment grid below remains visible)

### KEY OBSERVATIONS

- Month picker shows **per-day appointment count badges** (small numbers under each date) — clinic activity intensity heatmap at calendar level.
- Day numbers visible: e.g., May 7 has badge "2", May 11 has "3", May 12 has "8" — calendar utilization signaling.
- This is a mobile-specific affordance NOT visible in desktop (desktop has separate dashboard for similar info).

---

## Step 03 (row 3)

**File:** `screenshots/IMG_9124.PNG`
**Feature area:** `mobile_business_app_schedule`
**Inferred screen title:** Staff Members filter modal — "Staff Members (14)" header + Save + Search bar + 14 staff entries with checkboxes (All Staff + Dr. Nicholas Crawford / Barb Crawford / Arshnoor Ghare / Chanel Khemmoro / Raina Patel / Marissa Stewart / Dr. Rana Balboul / Nadine Klait NP / Parisa Jaffar / Amber Allen / Parrah Grundy / Angelina Dedvukaj / **Our Team** / **Front Desk**) — all currently selected

### KEY OBSERVATIONS

- **14 staff entries** confirms Batch 14 Step 07 desktop list (10 visible + 2nd page = ~20). Mobile filter shows 14 (likely ALL active staff fits in this list).
- **`Our Team`** + **`Front Desk`** as last 2 entries = non-individual staff entities (matching Batch 13 Step 10 evidence at desktop Staff Assignment).
- Initials avatars (CK/MS/DB/AG/AD/FD) for staff without photos.

---

## Step 04 (row 4)

**File:** `screenshots/IMG_9125.PNG`
**Feature area:** `mobile_business_app_schedule`
**Inferred screen title:** Schedule day-view with **staff column headers showing AVATARS (photos)** + bottom-sheet action menu (Book Appointment / Add Availability / Add Unavailability / Close)

### KEY OBSERVATIONS

- **Mobile schedule shows actual photos** (large round avatars at top of each column) — richer visual identity than desktop's text-only column headers.
- **Bottom-sheet 3-action menu:** Book Appointment / Add Availability / Add Unavailability — staff can self-manage their own availability + booking from mobile.
- Bottom-sheet is iOS-native UX pattern (vs desktop modal pattern).

---

## Step 05 (row 5)

**File:** `screenshots/IMG_9126.PNG`
**Feature area:** `mobile_business_app_appointment_detail`
**Inferred screen title:** Appointment detail for Mary Behler 100003245 — BH HydraFacial / Parrah Grundy / Today Thu May 14 / 12:00 PM - 1:00 PM / "**No prepaid services on account**" / Room 2 + big **CHECK OUT** button + 4 nav rows (Groups / SOURCE: repeat... / Formula Notes (0) / Progress Note) + bottom Confirmed teal status + 2 lifecycle buttons (Confirmed / Arrive) + trashcan

### KEY OBSERVATIONS

- **CHECK OUT is the primary CTA** — full-width white button at center of screen. Mobile elevates checkout as the dominant action.
- **`No prepaid services on account`** message confirms entitlement-attachment state visible on appointment detail. Q1 evidence: encounter surfaces entitlement state as 1st-class.
- **Lifecycle buttons (Confirmed/Arrive)** at bottom = state-transition affordances. Trashcan = delete/cancel appointment.
- **Formula Notes (0)** = badge showing 0 formula notes count. Mobile compresses notes substrate types into linkable rows with count badges.
- **3 quick-contact buttons at top (Call / Text / Email)** — mobile elevates communication channels for the client.

---

## Step 06 (row 6)

**File:** `screenshots/IMG_9127.PNG`
**Feature area:** `mobile_business_app_appointment_edit`
**Inferred screen title:** Edit Appointment full-screen form — Mary Behler / mary.e.behler@gmail.com + 10 substrate fields stacked vertically: Appointment Type / Staff / Date / Start Time / End Time (greyed-auto) / Duration / Resource (Room) / Add-ons / SOURCE (greyed display-only) / DISCOUNTS (greyed) / TX NOTES (greyed)

### KEY OBSERVATIONS

- **Mobile Edit screen surfaces all substrate fields VERTICALLY** — vs desktop's tabbed compact layout (Batch 5 row 60).
- **Each entity-typed field has chevron `>` + clear `×`** — affording navigation to picker + clearing the value.
- **End Time is auto-computed from Duration + Start Time** (greyed).
- **3 display-only fields at bottom:** SOURCE / DISCOUNTS / TX NOTES — mobile makes these visible but NOT editable inline (desktop has them in separate Discounts/Source/Notes/Deposit tab).
- Mobile UX bias: linear scroll over tabs.

---

## Step 07 (row 7)

**File:** `screenshots/IMG_9128.PNG`
**Feature area:** `mobile_business_app_appointment_edit`
**Inferred screen title:** Select Appointment picker — service catalog hierarchical with 3 categories visible: **1. FACIALS** (10 services with HydraFacial selected ✓) / **11. PROVIDER CONSULTATIONS** (3 entries) / **2. ADD-ONS** (2 entries visible)

### KEY OBSERVATIONS

- **Same service catalog data as desktop** (Batches 12-13) but projected as flat scrollable list with section headers.
- Categories preserve numeric prefix sort (1. FACIALS / 11. PROVIDER CONSULTATIONS / 2. ADD-ONS).
- Single-tap selection vs desktop tabbed picker.
- Mobile shows fewer services per screen (10 visible vs desktop's ~12-15) due to viewport.

---

## Step 08 (row 8)

**File:** `screenshots/IMG_9129.PNG`
**Feature area:** `mobile_business_app_appointment_edit`
**Inferred screen title:** Select Staff picker — filtered to **3 ELIGIBLE STAFF for HydraFacial** (Amber Allen / Parrah Grundy ✓ / Angelina Dedvukaj)

### KEY OBSERVATIONS

- **Staff list filtered to eligible-for-service** — matches desktop Batch 13 Step 10 staff_service_assignment evidence (3 staff: AA + AD + PG were checked for HydraFacial in Batch 13).
- Mobile shows EXACTLY 3 entries (vs desktop showed all 14 staff with checkboxes).
- Confirms substrate query: eligible_staff = JOIN staff ON staff_service_assignment WHERE service_id = X AND is_assigned = TRUE.

---

## Step 09 (row 9)

**File:** `screenshots/IMG_9130.PNG`
**Feature area:** `mobile_business_app_appointment_edit`
**Inferred screen title:** Edit Appointment with **iOS-native drum-roll time picker** (showing 11:30/11:45/**12:00 PM selected**/12:15/12:30; Start Time field; Done button)

### KEY OBSERVATIONS

- **iOS-native drum-roll picker** for time selection — distinctly mobile UX.
- 15-minute increments (matches `Scheduling Increments` settings from Batch 12 Step 06).
- "Done" button confirms selection.

---

## Step 10 (row 10)

**File:** `screenshots/IMG_9131.PNG`
**Feature area:** `mobile_business_app_appointment_edit`
**Inferred screen title:** Edit Appointment with **keyboard open + cursor in DISCOUNTS field (BH+|)** — proving the greyed fields ARE editable but need tap-to-edit interaction

### KEY OBSERVATIONS

- DISCOUNTS / SOURCE / TX NOTES fields **become editable when tapped** (greyed when display-only; opens keyboard when tapped).
- Mobile keyboard auto-opens for text entry.
- Confirms substrate: these are NOT read-only fields, just visually de-emphasized.

---

## Cumulative Batch 17 findings (additive to handoff 1-15 + Batches 11-16 16-121)

### 122. Mobile bottom nav has 5 top-level surfaces (Schedule / Retail / Clients / Reports / More)
vs desktop 12+ left-nav entries. Mobile compresses via More menu.

### 123. Mobile schedule day-view shows staff avatars/photos (vs desktop text-only column headers)
Richer visual identity in mobile.

### 124. Mobile month-picker shows per-day appointment count badges (heatmap)
Calendar utilization signal not visible in desktop.

### 125. Mobile appointment detail elevates CHECK OUT as primary CTA (full-width white button)
Vs desktop "Check Out" buried in action menu. Mobile commerce focus.

### 126. Mobile Edit Appointment surfaces 10 substrate fields VERTICALLY stacked (vs desktop tabbed)
Linear scroll UX bias.

### 127. Mobile pickers are filtered to eligible-only (3 staff for HydraFacial vs full list)
Substrate query: `eligible_staff = JOIN ... WHERE is_assigned = TRUE`. Same query, mobile pre-filters before display.

### 128. Mobile uses iOS-native drum-roll time picker with 15-min increments (matching Scheduling Increments settings)
Native mobile UX pattern.

### 129. Display-only-looking greyed fields are actually editable on tap (SOURCE/DISCOUNTS/TX NOTES)
Mobile UX deliberately de-emphasizes secondary fields visually.

### 130. Mobile Appointment detail provides 3 quick-contact buttons (Call / Text / Email)
Communication channels elevated.

### 131. Mobile staff filter modal supports 14 staff entries with non-individual entities (Our Team / Front Desk)
Mobile substrate consistent with desktop.

---

## End of Mobile Batch 17

Next batch: Mobile Batch 18 (rows 11-20 = IMG_9132-9141). Likely continues appointment/booking flow + transitions to other mobile surfaces.
