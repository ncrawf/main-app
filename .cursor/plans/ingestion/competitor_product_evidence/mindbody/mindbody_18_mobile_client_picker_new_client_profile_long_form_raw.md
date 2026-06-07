# Mindbody — Batch 18 raw capture: Mobile Business app — Schedule action sheet variants + per-staff Schedule view + Clients picker (Last Client + Recent Clients) + New Client form (5 sections) + Client Profile mobile long-form (12 sections: identity/quick-actions/Mindbody account/personal info/contact info/subscriptions/client indexes/billing info/alerts/notes/emergency contact/client forms)

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~5:50 AM UTC-4)
Batch: 18
Feature area(s): `mobile_business_app_schedule`, `mobile_business_app_clients_picker`, `mobile_business_app_new_client_form`, `mobile_business_app_client_profile_long_form`
Screenshots covered: 10 (rows 11-20 = IMG_9132-9141)

Chat cross-references:
- **Marker 3 (lines 1086-1615) — Client record / account cockpit** — IMG_9137-9141 mobile Client Profile is the canonical mobile projection of Knox marker 3 client cockpit. 12 sections in vertical scroll equivalent to desktop's 8 horizontal tabs + sub-sections.
- **Marker 14 (lines 27597-27982) — staff multi-domain + required-fields-and-alerts-as-typed-conditions** — IMG_9140 ALERTS section (Red alert + Yellow alert) is concrete substrate evidence — alert severity has 2-level enum.
- Pre-marker bucket 7 (multi-typed notes) — IMG_9141 NOTES + Formula notes as 2 separate fields = 2nd type of mobile-visible notes substrates (after appointment-level notes from Batch 17).

Supplemental cross-references:
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — Q3 4-entity split. IMG_9138 PERSONAL INFO + IMG_9139 CONTACT INFO confirm `client` table has both identity attributes AND contact-info attributes; mobile separates them into sections (suggesting they MAY be different substrate tables OR sub-projections of one).
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 (capability flags) — IMG_9135-9136 New Client form required-field markers (red First/Last/Email/Mobile) align with desktop Required Fields dual-mode (Batch 16 Step 07). Mobile uses Business Mode requirements.

User feedback cross-refs:
- Gap #1 + #8 — IMG_9132 ad-hoc bottom-sheet for staff to Add Unavailability mid-shift from mobile — supports ad-hoc real-world clinic ops.
- Gap #3 (subscriptions/memberships/POS/retail) — IMG_9139 SUBSCRIPTIONS section + IMG_9140 BILLING INFO + IMG_9141 ALERTS + Client Forms link confirm mobile profile is the omnibus surface (12 sections in vertical scroll).

---

## Step 01 (row 11)

**File:** `screenshots/IMG_9132.PNG`
**Feature area:** `mobile_business_app_schedule`
**Inferred screen title:** Mobile Schedule day-view with bottom-sheet (**2-action variant**: Book Appointment / Add Unavailability / Cancel — fewer than IMG_9125's 3-action variant)

### OBSERVATIONS
- Context-aware action sheet — when tapping different time slots, available actions differ. Empty slot may show fewer options than already-occupied.

---

## Step 02 (row 12)

**File:** `screenshots/IMG_9133.PNG`
**Feature area:** `mobile_business_app_schedule`
**Inferred screen title:** Mobile Schedule **SINGLE-STAFF FILTERED view** — Parrah Grundy avatar top-left replaces "All Staff" icon; only Parrah's appointments visible (Sonjai White 9:30-10:30 + Mary Behler 12-1, both BH HydraFacial Room 2)

### OBSERVATIONS
- Single-staff view collapses to 1-column day-view (vs 4-column for All Staff).
- Avatar swap (group icon → personal photo) makes filter state visible.

---

## Step 03 (row 13)

**File:** `screenshots/IMG_9134.PNG`
**Feature area:** `mobile_business_app_clients_picker`
**Inferred screen title:** Mobile Clients picker modal — Search bar + **Last Client** section (Mary Behler) + **Recent Clients** section (9 visible with phone+email); Cancel / Add-client icon (person+)

### OBSERVATIONS
- **Last Client substrate primitive:** per-user/per-device most-recent-selected-client cache.
- **Recent Clients substrate primitive:** per-user/per-device last-N-clients list.
- Both are UI-state primitives (not core domain), but improve UX significantly.
- Each entry shows: avatar (initials) / name / email / phone — multi-attribute identification.

---

## Step 04 (row 14)

**File:** `screenshots/IMG_9135.PNG`
**Feature area:** `mobile_business_app_new_client_form`
**Inferred screen title:** Mobile New Client form — vertical stack with required-field markers (red text): First name * / Middle name / Last name * / Gender / Birthday / CONTACT INFO section header / Email * / Reminders & Notifications toggle (ON) / Newsletters & Promotions toggle (ON) / Mobile phone * / Home phone / Work phone / ADDRESS section header / Address / City...

### OBSERVATIONS
- **4 required fields with RED LABELS:** First name / Last name / Email / Mobile phone — matches Batch 12 Step 02 desktop modal.
- **2 subscription toggles** (Reminders & Notifications + Newsletters & Promotions) — mobile collapses Batch 12's 3 categories (Account info + Schedule reminders + News and Promos) into 2 categories. Possibly because mobile combines transactional-account-info with reminders.
- **Required Fields applied in Business Mode** (staff-entering new client) — matches Batch 16 Step 07 dual-mode substrate.

---

## Step 05 (row 15)

**File:** `screenshots/IMG_9136.PNG`
**Feature area:** `mobile_business_app_new_client_form`
**Inferred screen title:** New Client form SCROLLED — ADDRESS continued (State Michigan pre-filled + Country United States pre-filled + Postal Code) + **EMERGENCY CONTACT** section (Name + Phone + Email + Relationship) + **REFERRED BY** section

### OBSERVATIONS
- **EMERGENCY CONTACT INFO** as STRUCTURED substrate (4 fields) — distinct primitive `client_emergency_contact { client_id, name, phone, email, relationship }`. Per clinical-clinic operational depth.
- **Relationship** field = enum or free-text? (likely enum from Relationship Types in Batch 12 Step 04 + Batch 16 Step 06).
- **REFERRED BY** section is single-field — distinct from CONTACT INFO; ties to Referral Types substrate (Batch 12 Step 04).

---

## Step 06 (row 16)

**File:** `screenshots/IMG_9137.PNG`
**Feature area:** `mobile_business_app_client_profile_long_form`
**Inferred screen title:** Mobile Client Profile for Mary Behler — MB avatar + name + **4 horizontal tabs** (Profile active / Account / Schedule / Documents) + **4 quick-action buttons** (Call / Message / Email / **Buy**) + MINDBODY ACCOUNT section + PERSONAL INFO start

### OBSERVATIONS
- **4 horizontal tabs in mobile client profile** vs **8 tabs in desktop** (Batch 10 Step 02). Mobile compresses:
  - Profile (= Client Home + Client Info)
  - Account (= Account Details)
  - Schedule (= Visits + Appointments + Schedule)
  - Documents (= Documents)
  - Contact Logs / Purchases / More are NOT visible top-level on mobile (likely accessed via More menu or scroll).
- **4 quick-action buttons (Call / Message / Email / Buy)** — mobile adds **Buy** as 4th button (vs Batch 17 appointment-detail 3 buttons). Implies cockpit context allows initiating commerce flow.
- **MINDBODY ACCOUNT section** with **Send Password Reset Email** action — mobile prominently surfaces password-management.

---

## Step 07 (row 17)

**File:** `screenshots/IMG_9138.PNG`
**Feature area:** `mobile_business_app_client_profile_long_form`
**Inferred screen title:** Profile tab scrolled — MINDBODY ACCOUNT + PERSONAL INFO (Client ID 100003245 / Gender None / Birthday none / Profile creation Friday 01/24/2025 / Referred by none + Add / Relationships + Add) + CONTACT INFO start

### OBSERVATIONS
- **`Client ID 100003245`** displayed prominently — mobile elevates IDs to identity surface.
- **`Profile creation Friday 01/24/2025`** = audit primitive client.created_at displayed.
- **`Referred by` + `Relationships`** with inline "Add" link — empty-state has direct Add affordance.
- **`Email & login`** label (vs just "Email") — confirms email IS the login identifier substrate primitive.

---

## Step 08 (row 18)

**File:** `screenshots/IMG_9139.PNG`
**Feature area:** `mobile_business_app_client_profile_long_form`
**Inferred screen title:** Profile tab further scrolled — CONTACT INFO complete (Email & login + Mobile phone + Home phone + Work phone + Work extension + **Home address with map link**) + SUBSCRIPTIONS section (3 categories with channels: Account management: Email and text / Reminders and schedule changes: Email and text / News and promos: Email)

### OBSERVATIONS
- **Home address with 🗺 map icon** — single-tap to launch Maps app — mobile-specific OS-integration substrate.
- **Subscriptions 3 categories surfaced with channels:**
  - Account management: Email and text (both channels enabled)
  - Reminders and schedule changes: Email and text
  - News and promos: **Email ONLY** (text NOT enabled)
- Confirms Batch 12 Step 02 / Batch 10 Step 02 3-category subscription substrate; mobile shows enabled-channel state inline.

---

## Step 09 (row 19)

**File:** `screenshots/IMG_9140.PNG`
**Feature area:** `mobile_business_app_client_profile_long_form`
**Inferred screen title:** Profile tab further scrolled — SUBSCRIPTIONS + Edit link / Client Indexes + View / BILLING INFO (Credit card Visa **** 6567 expires 05/2030) / **ALERTS section** (Red alert: none + Add / Yellow alert: none + Add) / NOTES start

### OBSERVATIONS
- **ALERTS section confirms 2-level severity enum:** Red alert + Yellow alert. Matches Batch 16 Step 08 21-event alert vocabulary (where "Staff (Red) Alert" + "Yellow Alert" appear as 2 of 21 alert types).
- **Substrate clarification:** Red + Yellow are likely substrate severity flags, NOT a subset of the 21 alert types. Each client can have a Red alert and/or a Yellow alert with associated text.
- **Credit card stored with last-4 + expiry** in cockpit-visible position — matches Batch 11 Step 03 Billing Information desktop view (tokenized PCI-compliant).
- **Client Indexes accessible via View link** — matches Batch 12 Step 04 + Batch 16 Step 07 Client Indexes substrate.

---

## Step 10 (row 20)

**File:** `screenshots/IMG_9141.PNG`
**Feature area:** `mobile_business_app_client_profile_long_form`
**Inferred screen title:** Profile tab END — ALERTS continued / NOTES (none + Add) / **Formula notes** (+Add — separate from Notes) / **EMERGENCY CONTACT INFO** (none + Add) / **Client Forms** + View link / ⓘ info icon

### OBSERVATIONS
- **Notes ≠ Formula notes** as 2 distinct mobile-surface fields. Confirms multi-typed notes substrate (Batch 5 row 60 desktop had 5 notes fields in appointment edit; this is the client-level analog).
- **Emergency Contact Info** is empty (matching New Client form Step 05 above — captured but optional).
- **Client Forms link** → navigates to form template list (same substrate as Batch 11 Step 07 Documents tab Client Forms desktop view).

---

## Cumulative Batch 18 findings (additive to handoff 1-15 + Batches 11-17 16-131)

### 132. Schedule action-sheet is context-aware (2-action vs 3-action variants depending on tapped context)
IMG_9132 vs IMG_9125. UI affordance availability depends on context state (matching desktop pattern from Batch 9 row 94 / Batch 10 row 101).

### 133. Single-staff Schedule view collapses to 1-column day grid (vs All-Staff multi-column)
IMG_9133. Avatar swap (group → individual photo) makes filter state visible.

### 134. Mobile clients picker has Last Client + Recent Clients UI-state primitives
IMG_9134. `user_last_client { user_id, last_client_id, set_at }` + `user_recent_clients { user_id, client_id, viewed_at }` (last-N).

### 135. Mobile New Client form REQUIRED FIELDS: First/Last/Email/Mobile phone (red labels) = Business Mode
IMG_9135. Matches Batch 16 Step 07 dual-mode substrate.

### 136. Mobile collapses 3 subscription categories into 2 toggles (Reminders & Notifications + Newsletters & Promotions)
IMG_9135. Mobile aggregates Account info + Schedule reminders → "Reminders & Notifications". Same substrate, fewer UI controls.

### 137. EMERGENCY CONTACT is structured 4-field substrate (Name / Phone / Email / Relationship)
IMG_9136. `client_emergency_contact` primitive.

### 138. Mobile Client Profile has 4 tabs (vs 8 desktop) — collapses Client Home+Info into "Profile", Visits+Appointments+Schedule into "Schedule"
IMG_9137. Mobile compresses tab taxonomy.

### 139. Mobile cockpit elevates 4 quick-action buttons (Call/Message/Email/**Buy**) — Buy added for commerce
IMG_9137. Vs Batch 17 appointment-detail (only Call/Text/Email).

### 140. Profile creation timestamp displayed as audit primitive in mobile cockpit
IMG_9138 "Profile creation Friday 01/24/2025".

### 141. Email & login terminology confirms email IS the login identifier substrate
IMG_9138 + IMG_9139. `client.email` doubles as `auth.login_email`.

### 142. Home address displayed with map link (single-tap iOS Maps integration)
IMG_9139. Mobile-specific OS integration substrate primitive (deep-link to Maps).

### 143. SUBSCRIPTIONS section shows enabled-channels per category inline ("Email and text" / "Email")
IMG_9139. Confirms 3-category × 2-channel substrate primitive (Batch 12 Step 02 cross-ref).

### 144. ALERTS section confirms 2-level severity enum (Red alert + Yellow alert) as distinct fields per client
IMG_9140. Substrate primitive `client_alert { client_id, severity [red|yellow], text }` separate from the 21-event alert vocabulary in Batch 16 Step 08.

### 145. Credit card stored tokenized with last-4 + expiry visible in mobile cockpit BILLING INFO section
IMG_9140 Visa **** 6567 expires 05/2030. PCI-compliant token substrate.

### 146. NOTES ≠ Formula notes (2 separate per-client mobile-surface notes fields)
IMG_9141. Multi-typed notes substrate confirmed at client level (Batches 5 + 17 cross-ref).

### 147. Client Profile mobile vertical scroll has 12 sections (vs desktop 8 horizontal tabs)
IMG_9137-9141 cumulative. Same substrate, different projection mode.

---

## End of Mobile Batch 18

Next batch: Mobile Batch 19 (rows 21-30 = IMG_9142-9151). Likely continues client profile depth + transitions to other mobile surfaces.
