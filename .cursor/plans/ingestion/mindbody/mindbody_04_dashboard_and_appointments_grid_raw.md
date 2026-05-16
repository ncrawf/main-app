# Mindbody — Batch 4 raw capture: Dashboard + Appointments grid + Appointments admin menu

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-15
Batch: 4
Feature area(s): `dashboard`, `appointments_grid`, `appointments_admin_menu`
Screenshots covered: 5 (Screen Shot 2026-05-13 at 11.42.37 PM through 11.44.49 PM, chronological)
Chat cross-references: Knox marker 1 (line 380 — "Checkout / POS / package / membership atop scheduling, appointment as workflow object") plus pre-marker section (lines 200-379, Knox's first-pass "Day 0 Mindbody parity categories" enumeration including scheduling calendar bucket #1)

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-13 at 11.42.37 PM.png`
**URL:** `clients.mindbodyonline.com/app/dashboard?studioid=411894&locationId=1&menuId=dashboard-submenu&customerAccountId=fe71b7f8-c7...`
**Feature area:** `dashboard`
**Inferred screen title:** Mindbody Dashboard — Insights snapshot home

### TEXT CONTENT (VERBATIM)

```
Hello, Nicholas!

Insights snapshot                                       Collapse ^

Get business insights that matter now                    [Go to Analytics 2.0]
See your sales, visits, and membership data in
one simple view. Spot opportunities and make
smart decisions to grow your business faster.

[This mon...]  [Location / O...]  Gift Cards / Payme...  [At Red...] [At Tim...]

Total Net Sales (U... i      Total Visits i        Active Members i
11,160                       55                    null
↓ 27% vs Prev Year           0% vs Prev Year       Invalid date

Today's schedule             Client AI predictions
[CLASSES] [APPOINTMENTS]     [BIG SPENDERS] [AT-RISK]

10:00 AM
Lisa Hall
NEO | Red Light Therapy
with Our Team

Elle Jacobson
(cut off)

Notifications
(empty list)

[Truemed integration upsell panel]
"Help clients save up to 30%— free to you"
"Eligible clients can now save on qualified
products and services by paying with pre-
tax HSA/FSA funds, made possible
through Mindbody's new partnership with
Truemed."
[Get Started]
"Truemed is for qualified customers.
HSA/FSA tax savings vary. Learn more."

[Product Updates panel]
04.2026
Product Updates
"New in April: Let clients buy contracts at
checkout, reorder appointment types and
services based on your preferences, and more!"
[Explore All Updates]
```

### UI ELEMENTS (visible)

**Top app bar:**
- Hamburger menu icon (left)
- BH (Bloom Health) brand logo
- "Insights snapshot" tooltip/breadcrumb
- Global search: "Find a client" (centered)
- Clock icon
- Checkmark icon
- Person/contact icon
- Help (?) icon
- Notification bell icon (with badge "3")
- User avatar "NC" with dropdown

**Left sidebar nav (primary navigation):**
- Dashboard (active, highlighted)
- Appointments
- Rooms
- Check In
- Clients
- Point of Sale
- Insights (with expand caret)
- Marketing (with expand caret)
- Services & Products (with expand caret)
- Staff
- Settings
- [Edit] button (bottom)
- AI Assistant (bottom-left)

**Center content:**
- "Hello, Nicholas!" personalized greeting
- "Insights snapshot" section header + Collapse toggle
- Green CTA banner — "Get business insights that matter now" + "Go to Analytics 2.0" button (suggests Insights v2 is the newer analytics product)
- 3 filter pills: "This mon...", "Location / O...", "Gift Cards / Payme..." (filters truncate; cannot see full values)
- 2 status pills: "At Red...", "At Tim..." (truncated; likely "At Risk", "At Time" risk filters)
- 3 KPI cards: Total Net Sales (11,160 ↓ 27% vs Prev Year, RED indicator), Total Visits (55, 0% vs Prev Year, NEUTRAL), Active Members (null, "Invalid date" error)
- "Today's schedule" section with [CLASSES] / [APPOINTMENTS] tab toggle
- "Client AI predictions" section with [BIG SPENDERS] / [AT-RISK] tab toggle
- Appointment list: Lisa Hall at 10:00 AM, NEO | Red Light Therapy with "Our Team" (yellow dot indicator); Elle Jacobson (partially visible)

**Right column (notifications + upsell stack):**
- "Notifications" header (empty list)
- Truemed HSA/FSA integration upsell card (closable via X)
- "04.2026 Product Updates" card with "Explore All Updates" CTA (closable via X)

**Status bar elements:**
- Browser shows "Paused" indicator (top-right by browser nav)

### VISUAL MARKERS

- **Background:** white center panel, subtle gray sidebar (right column has near-white panels with borders)
- **Brand color:** purple/burgundy header bar (Mindbody chrome)
- **KPI red indicator:** down arrow with red color on Total Net Sales — visual signal for negative trend
- **Yellow dot** on Lisa Hall appointment — possibly status indicator (Confirmed? Arrived? Has alert?)
- **Notification badge** "3" — three pending notifications elsewhere in app
- **"null" / "Invalid date"** in Active Members card — clear UI bug or unconfigured state

### LINK MARKERS

- "Go to Analytics 2.0" — links to newer analytics product
- "Get Started" (Truemed) — affiliate integration onboarding
- "Explore All Updates" — Mindbody product updates page
- "Learn more" (HSA/FSA fine print)

### ARCHITECTURAL OBSERVATIONS

The dashboard pulls from MULTIPLE substrates simultaneously:

1. **Sales aggregation** (Total Net Sales) — financial substrate, dollar value, prev-year comparison, date-range filter
2. **Visit aggregation** (Total Visits) — appointment substrate, count, prev-year comparison
3. **Membership aggregation** (Active Members) — membership substrate, count, currently broken/unconfigured (shows null + Invalid date)
4. **Schedule preview** (Today's schedule) — appointment substrate, filtered to today, tabbed by class vs appointment
5. **AI predictions** (Big Spenders / At-Risk) — derived analytics; AI predictions are first-class on dashboard
6. **Notifications** — notifications substrate (empty here but the structure is reserved)
7. **System upsells / product updates** — Mindbody-managed marketing surface (HSA/FSA partnership; product update announcements)

The dashboard is a **read-only widget surface** layered atop the operational substrates. It does not have its own data model; it aggregates.

**For OMNI:** the home/dashboard is a "what matters now" widget shelf. The widgets are:
- KPI tiles with configurable time-range + comparison
- Today's schedule preview (cross-references appointment substrate)
- AI prediction tiles (cross-reference patient analytics)
- Notifications inbox preview
- System announcements (Mindbody's product updates equivalent = OMNI release notes / patient comms)

Widget configurability (right column upsells X-closable suggests per-user dismissibility) is a UX pattern worth preserving.

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-13 at 11.43.23 PM.png`
**URL:** `clients.mindbodyonline.com/app/business/mainappointments/index`
**Feature area:** `appointments_grid`
**Inferred screen title:** Mindbody Appointments — Week view (single-provider filter)

### TEXT CONTENT (VERBATIM)

```
Today  Wed  May 13, 2026                              < > Day Week

All service categories         Crawford, Dr. Nicholas         More

May 2026                                  June 2026

S  M  T  W  T  F  S         S  M  T  W  T  F  S
26 27 28 29 30  1  2        31  1  2  3  4  5  6
 3  4  5  6  7  8  9         7  8  9 10 11 12 13
10 11 12 13 14 15 16        14 15 16 17 18 19 20
17 18 19 20 21 22 23        21 22 23 24 25 26 27
24 25 26 27 28 29 30        28 29 30  1  2  3  4
31  1  2  3  4  5  6         5  6  7  8  9 10 11

         — Hide calendar

         +Add     Wed 5/13  Thu 5/14  Fri 5/15  Sat 5/16  Sun 5/17  Mon 5/18  Tue 5/19

11:00 AM
11:30 AM
12:00 PM     Consultation -...
12:30 PM     ☆ ✓ Kristie E
1:00 PM      Room 6
1:30 PM
2:00 PM
2:30 PM
3:00 PM     ___________
3:30 PM     Ghuznavi
4:00 PM     3:00 PM-5:00 PM
4:30 PM
5:00 PM
5:30 PM
...

Status [dropdown]            ⊞  0 ⊟ 0 ⊟ 2 ⊟ 6 ⊟ 2   [A] [L] [BG]
                             (numeric badges with rectangle icons; likely status counts)
11:43 PM (timestamp line)
mindbody    © 2026 MINDBODY Inc.  Terms and Conditions.  Privacy Policy.
Site ID: 411894
```

### UI ELEMENTS (visible)

**Top of calendar:**
- "Today" button
- Date header: "Wed  May 13, 2026"
- Date navigation: < > arrows
- View toggle: [Day] [Week] (currently Week active)
- "All service categories" filter dropdown
- "Crawford, Dr. Nicholas" provider filter dropdown (currently single-provider selected)
- "More" menu (opens admin options; see Step 05)

**Left mini-calendars:**
- May 2026 (current month, day 13 highlighted)
- June 2026 (next month)
- "Hide calendar" toggle below

**Main calendar grid:**
- Columns: +Add, Wed 5/13, Thu 5/14, Fri 5/15, Sat 5/16, Sun 5/17, Mon 5/18, Tue 5/19 (8 day columns — current day + next 7)
- Each day column has dropdown caret (per-day menu)
- Time rows: 11:00 AM, 11:30 AM, 12:00 PM, 12:30 PM, 1:00 PM, 1:30 PM, 2:00 PM, 2:30 PM, 3:00 PM, 3:30 PM, 4:00 PM, 4:30 PM, 5:00 PM, 5:30 PM, 6:00 PM, 6:30 PM, 7:00 PM, 7:30 PM, 8:00 PM, 8:30 PM (30-min slots, 11 AM to 8:30 PM)
- Background: dark grey/charcoal time grid; light grey for non-business areas (Sat 5/16 + Sun 5/17 + part of Tue 5/19 column shaded lighter — closed business)

**Appointment cards visible:**
- 12:00-1:00 PM Wed 5/13: "Consultation -..." with "☆ ✓ Kristie E", "Room 6" (purple/lavender appointment card with status icons: star + checkmark)
- 3:00-5:00 PM Wed 5/13: "Ghuznavi 3:00 PM-5:00 PM" (white/light card — likely staff block or note, no client+service format)

**Bottom toolbar:**
- Print icon
- Edit icon
- Search icon
- Calendar add (green badge "1")
- "Status" filter dropdown (collapsed)
- 5 status badges with counts: 0 (blue), 0 (teal), 2 (purple), 6 (purple+red?), 2 (red) — appointment status counts by type
- A / L / BG buttons (3-letter abbreviations, possibly Anonymous / Logged-in / Background filter?)

**Footer:**
- 11:43 PM (current time bar with red line indicator)
- mindbody logo
- Terms / Privacy
- Site ID: 411894

### VISUAL MARKERS

- **Dark grey calendar grid** for time slots — Mindbody's classic dark calendar theme
- **Pink/magenta thin horizontal lines** at each hour (visual time grid)
- **Red horizontal line** near 11:43 PM bottom — current-time marker
- **Lighter grey columns** for non-business days/times (Sat/Sun + late Tue)
- **Purple/lavender appointment card** for Consultation — booked/confirmed status
- **Star + checkmark icons** inside appointment card — likely "VIP" star + "Confirmed" check status flags
- **Status count badges** at bottom — 5 status types color-coded

### ARCHITECTURAL OBSERVATIONS

This is the **single-provider calendar week view**. Mindbody's appointments substrate supports:

1. **Multi-date-axis simultaneous view** (8 days visible)
2. **Time-slot grid** (30-min default; configurable via "Appointment Size" Auto/Small/Medium/Large per Step 05)
3. **Per-day +Add quick action** (column header click → add appointment for that day)
4. **Per-day dropdown** (column-level admin actions per day)
5. **Per-provider filter** (this view filtered to Dr. Nicholas Crawford only)
6. **Service category filter** (decoupled from provider filter)
7. **Closed business days/times** as visual lighter shading (different from "no appointments" — operational state)
8. **Current-time marker** as horizontal red line (real-time scheduling awareness)
9. **Appointment card** has multiple state markers inside it: star (VIP?), checkmark (confirmed?), room name, service name truncated, client name
10. **Status counts** at bottom — 5 status categories visible (0, 0, 2, 6, 2)

**For OMNI:** week view + per-provider filter + service-category filter + current-time marker + closed-business-days visualization + per-appointment status markers (VIP / confirmed / arrived / etc) are all Day 0 requirements for Mindbody parity. The week-view 8-day visibility is unusual (most apps show 7); the extra column for +Add is a UI affordance worth noting.

Knox marker 1 (line 380) bucket "appointment action menu" + Knox pre-marker bucket 1 "Provider schedule grid" both anchor this screen's interpretation.

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-13 at 11.43.47 PM.png`
**URL:** `clients.mindbodyonline.com/app/business/mainappointments/index`
**Feature area:** `appointments_grid`
**Inferred screen title:** Mindbody Appointments — Day view (multi-provider team view, 8 columns)

### TEXT CONTENT (VERBATIM)

```
Today  Wed  May 13, 2026                              < > Day Week
                                                       ^^^ Day active here

All service categories     All providers     More

May 2026                June 2026
... (mini calendar)

         +Add  Dr. Nicholas Crawford  Dr. Rana Balboul  Nadine Klait NP  Parisa Jaffar  Amber Allen  Angelina Dedvukaj  Our Team  Front Desk

9:00 AM
9:30 AM
10:00 AM                   Moving out of state    Chemical Pe...
10:30 AM                   10:00 AM-1:00 PM       ☆ ✓ Elle J
                                                  Room 3
11:00 AM                                          SkinPen Micr...
11:30 AM                                          ☆ ✓+ Callie J            BH HydraFacial
                                                  Room 2                    Diana D
                                                                            Room 3
12:00 PM     Consultation...                                        BH HydraFacial
12:30 PM     ☆ ✓ Kristie E                                          ☆ ✓ Carolyn B
1:00 PM      Room 6                                                  Room 4
1:30 PM                              Dermal Filler...
2:00 PM                              ☆ ✓ ✚ Sarah D
2:30 PM                              Dysport (Ret...
                                     ☆ ✓ ✚ Keith D                BH HydraFacial
                                     Botox (New P...                ☆ Nayan S
3:00 PM                                            Work             Room 4
3:30 PM                                            3:00 PM-4:00 PM
4:00 PM
4:30 PM
...

7:30 PM - Schedule availability for Our Team    (tooltip / context hint)

Status [dropdown]            ⊞ 0 ⊟ 0 ⊟ 2 ⊟ 6 ⊟ 2  [A] [L] [BG]
                             (now: 0, 0, 6, 2, 2 — slightly different from Step 02 since this is day-view)
```

### UI ELEMENTS (visible)

**Filters now showing:**
- "All service categories" (unchanged)
- "All providers" (CHANGED from "Crawford, Dr. Nicholas" — now multi-provider view)

**Columns (provider grid):**
- +Add (utility column)
- Dr. Nicholas Crawford
- Dr. Rana Balboul
- Nadine Klait NP (Nurse Practitioner suffix)
- Parisa Jaffar
- Amber Allen
- Angelina Dedvukaj
- Our Team (catch-all / shared resource)
- Front Desk (admin/non-provider role)
- 8 provider/role columns total

**Appointment cards by time:**
- 10:00 AM-1:00 PM Nadine Klait NP: "Moving out of state" — WHITE/light card, full-day staff block (3-hour duration)
- 10:00 AM Parisa Jaffar: "Chemical Pe..." with "☆ ✓ Elle J" Room 3 (purple card)
- 11:00 AM Parisa Jaffar: "SkinPen Micr..." with "☆ ✓+ Callie J" Room 2 (purple)
- 11:00 AM Amber Allen: "BH HydraFacial" with "Diana D" Room 3 (light purple)
- 12:00 PM Dr. Nicholas Crawford: "Consultation..." with "☆ ✓ Kristie E" Room 6 (purple)
- 12:30 PM Amber Allen: "BH HydraFacial" with "☆ ✓ Carolyn B" Room 4 (purple)
- 1:30 PM Parisa Jaffar: "Dermal Filler..." with "☆ ✓ ✚ Sarah D" (red card — different status?)
- 2:00 PM Parisa Jaffar: "Dysport (Ret..." with "☆ ✓ ✚ Keith D" (red card)
- 2:30 PM Parisa Jaffar: "Botox (New P..." (red card, stacked under Dysport)
- 3:00 PM "Our Team" column: "Work 3:00 PM-4:00 PM" (white/grey card — staff time block)
- 2:30 PM Amber Allen: "BH HydraFacial" with "☆ Nayan S" Room 4 (RED card — different status)

**Lighter shading:**
- Dr. Nicholas Crawford's column 9:00 AM-12:00 PM: lighter grey (unavailable / not scheduled)
- Most providers have varied availability shading

**Tooltip visible:**
- "7:30 PM - Schedule availability for Our Team" — hover tooltip showing day-end edit affordance

### VISUAL MARKERS

- **Card colors signal status:**
  - **Purple** (Consultation, SkinPen, HydraFacial morning slots): likely "Confirmed" or default booked status
  - **Light purple/lavender** (Carolyn B HydraFacial, Diana D HydraFacial): same as purple, possibly different status
  - **Red** (Dermal Filler / Dysport / Botox / Nayan S HydraFacial): "Arrived" or "Late cancel" or "needs attention" — distinct enough to read at-a-glance
  - **White/light** (Moving out of state, Work): staff blocks / non-client time
- **Icons inside cards:** ☆ = star/VIP; ✓ = confirmed; ✚ = ? (plus sign, maybe medical alert or additional info); 📅 (calendar) on some
- **Multi-line appointment cards** show: service name (truncated with ...), staff status icons, client name, room number
- **Status badges at bottom changed** (status counts update with view)

### ARCHITECTURAL OBSERVATIONS

This screen reveals **multiple critical operational primitives**:

1. **Multi-provider day view** as the operational daily-roster surface — every staff with their bookings side-by-side. This is where front desk lives most of the day.
2. **"Our Team" + "Front Desk"** as scheduling columns — proves that not all schedule columns are providers. Some are SHARED resources (teams, catch-alls, admin roles). Per Knox bucket 2 ("Providers, rooms, resources are independent but composable") — these "team" columns are an analog to the resource column.
3. **Card color encoding** for status — visual status density that text alone cannot convey at a glance. Mindbody encodes ~4-5 status states in card color.
4. **Status icons stack inside card** — multiple flags simultaneously (VIP + Confirmed + Has-Alert + ...) without taking extra row height.
5. **Staff time blocks vs appointments** are visually distinct (white "Work" / "Moving out of state" cards vs colored client appointments). Same substrate, different rendering.
6. **Per-provider availability shading** — same operational state (provider unavailable) renders consistently across columns.
7. **NP suffix** (Nadine Klait NP) — provider type identifier in display name. Suggests provider profile carries credential field.
8. **Service name truncation** with "..." indicates fixed-width column; full name lives in tooltip / detail view.

**For OMNI:** the multi-provider day view is the staff operational hub. Card color encoding + multi-status-icon stack inside card are UX choices that need substrate support (status enum, multi-flag boolean fields). Card design constraint: ~3-5 lines, service-truncated, client-name + room + icons must fit.

Knox marker 1 (line 380) "appointment action menu" + Knox pre-marker bucket 1 (Provider schedule grid: provider columns, team columns, room/resource view, blocked time, unavailability, appointment status color/state) both anchor this screen's interpretation. The team column ("Our Team") + non-provider column ("Front Desk") confirms Knox's pre-marker bucket 2 ("providers, rooms, resources are independent but composable; team / resource columns coexist with provider columns").

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-13 at 11.44.26 PM.png`
**URL:** (same — mainappointments/index)
**Feature area:** `appointments_grid`
**Inferred screen title:** Mindbody Appointments — Day view zoomed (focused on appointment detail with status badges)

### TEXT CONTENT (VERBATIM)

```
   — Hide calendar

10:00 AM                  Moving out of stat...        Chemical Pe...
                          10:00 AM-1:00 PM             ☆ Elle J            BH HydraFacial
10:30 AM                                               Room 3              Diana D
                                                                            Room 3
11:00 AM                                               SkinPen Micr...
11:30 AM                                               ☆ ✓+ Callie J
                                                       Room 2              BH HydraFacial
                                                                            ☆ Carolyn B
12:00 PM    Consultatio...                                                  Room 4
12:30 PM    ☆ Kristie E
            Room 6
1:00 PM
1:30 PM                              Dermal Filler...
2:00 PM                              ☆ Sarah D
2:30 PM                              Dysport (Ret...
                                     ☆ Keith D                              BH HydraFacial
                                     Botox (New P...                        ☆ Nayan S
3:00 PM                              Work                                   Room 4
3:30 PM                              3:00 PM-4:00 PM
4:00 PM
...

Status [dropdown]           0 0 2 6 2  [A] [L] [BG]
                            (numeric badges at bottom)
```

### UI ELEMENTS (visible)

Same multi-provider day grid as Step 03 but **zoomed/cropped** showing time labels along left + tight focus on midday appointments. Sidebar nav cut off (only "Hide calendar" toggle visible at top).

Bottom status badges visible: 0, 0, 2, 6, 2 (same counts as Step 03 — same day same data, just different viewport).

### VISUAL MARKERS

- Status icons inside cards now visible WITHOUT confirmed-checkmark (`✓`) on most — possibly different filtered view OR these are unconfirmed bookings
- Some cards show "☆ ✓+" combo (star + check + plus) — multiple flags stacked
- Cards stack vertically when multiple appointments occupy the same time slot for the same provider

### ARCHITECTURAL OBSERVATIONS

This is a refined view of the same data. Reveals:

1. **Status icon set** is at least: ☆ (star/VIP), ✓ (confirmed), ✚ or + (additional flag — possibly "has note" or "alert" or "deposit paid"). Need more screens to map full icon vocabulary.
2. **Same provider, same time-slot, multiple appointments** is possible — Parisa Jaffar has Dermal Filler 1:30 PM → Dysport 2:00 PM stacked → Botox 2:30 PM (back-to-back, but Dysport and Botox visually overlap in 2:30 PM time slot). This either means (a) two clients at 2:30 PM (impossible single-provider unless one is in a different room/resource), (b) appointment overlap allowed for this provider, OR (c) one is finishing and one is starting (handoff). Need to verify with appointment-detail view.
3. **Status count "0 0 2 6 2"** maps to 5 status types; need legend / hover for definitions. Sum: 10 (matches visible appointment cards roughly).

For Layer 2: status icon vocabulary + status count legend + appointment overlap rules are TBD pending more screens.

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-13 at 11.44.49 PM.png`
**URL:** (same — mainappointments/index)
**Feature area:** `appointments_admin_menu`
**Inferred screen title:** Mindbody Appointments — "More" admin menu opened (admin access to appointment-related settings)

### TEXT CONTENT (VERBATIM)

```
Today  Wed  May 13, 2026                       < > Day Week

All service categories     All providers     [More v opened, dropdown visible:]

                                              Create New Appointment Service
                                              Edit Appointment Rates     [HIGHLIGHTED in green/teal]
                                              Edit Appointment Options
                                              Set Up Auto Emails
                                              Schedule a Closed Business Day

                                              Appointment Size
                                              ○ Auto    [selected]
                                              ○ Small
                                              ○ Medium
                                              ○ Large

                                              Refresh Schedule Every
                                              [30 sec. v dropdown]
```

(Background still shows the multi-provider day calendar with appointment cards from Steps 03-04.)

### UI ELEMENTS (visible)

**"More" dropdown menu** opened from top-right of calendar:

**Action items (top section):**
- Create New Appointment Service → creates a new appointment type / service
- Edit Appointment Rates (highlighted hover state — teal/green highlight)
- Edit Appointment Options → opens appointment-options settings page
- Set Up Auto Emails → opens auto-email setup for appointment workflow
- Schedule a Closed Business Day → block out a date for the whole business

**Appointment Size (radio buttons):**
- Auto (selected) — calendar density auto-determined
- Small
- Medium
- Large

**Refresh Schedule Every:**
- Dropdown showing "30 sec." (auto-refresh interval)

### ARCHITECTURAL OBSERVATIONS

The "More" menu is the **admin-affordance entry point** for appointment-related operational settings. It exposes 5 admin actions plus 2 view preferences (size + refresh interval).

Each admin action opens a distinct settings surface:

1. **Create New Appointment Service** — service catalog write path (creates new appointment types)
2. **Edit Appointment Rates** — pricing for appointment types
3. **Edit Appointment Options** — global appointment booking policy (this is the page Knox describes deeply at marker 14 line 27597, "Appointment Options" with client booking, required payments, waitlists, confirmations, etc.)
4. **Set Up Auto Emails** — appointment-triggered automated email config
5. **Schedule a Closed Business Day** — operational state write path (single-day full-business closure)

**Appointment Size** is per-USER display preference (Auto/Small/Medium/Large affects card density). Likely stored per-user not per-org.

**Refresh Schedule Every** controls real-time data refresh polling. Mindbody polls scheduling state to keep multi-staff views fresh — relates to Knox marker 14 + DL-16 invariant 24 (live-state revalidation at execution moment).

**For OMNI:** the "More" menu pattern is a useful UI affordance — keeps the calendar surface clean while making admin actions accessible without navigating away. Substrate-wise, each action links to a different settings surface in the same operational domain. Note "Auto Emails" → appointment-event-triggered notification config, which Knox marker 14 calls out as a major Mindbody capability.

The Appointment Size + Refresh Schedule controls bundled into the same "More" menu as substantive admin actions suggests Mindbody bundles per-user view prefs with org admin actions. OMNI should probably separate these (view prefs in a separate user-settings menu).

---

## Cross-references

- **Manifest rows updated:** rows 6, 7, 8, 9, 10 (the first 5 desktop Screen Shots chronologically); see [mindbody_ingestion_manifest.md](mindbody_ingestion_manifest.md) (manifest update commit follows this raw capture commit).
- **Chat navigation map references:**
  - Pre-marker section (lines 1-379) — Knox's first-pass "Mindbody is not just a calendar" + "Day 0 Mindbody parity categories" buckets 1 (Provider schedule grid) + 2 (Providers/rooms/resources) most directly inform this batch.
  - Marker 1 (line 380, "Checkout / POS / package / membership atop scheduling; appointment as workflow object not calendar block") — the "appointment action menu" deconstruction (Checkout, Retail, Apply payment, Early cancel, Late cancel, Confirmed, Arrived, Reschedule, Modify, Progress note, Prebook, Groups) describes the appointment-detail surface that opens from the calendar cards visible in Steps 03-04 (but cards themselves don't show that menu — it appears on click).
- **Pasted text settings cross-refs:**
  - [mindbody_settings_room_requirements_raw.md](mindbody_settings_room_requirements_raw.md) — the 132 services that populate "All service categories" filter in Steps 02-03 derive from this configuration table.
  - [mindbody_settings_class_course_options_raw.md](mindbody_settings_class_course_options_raw.md) — the "Set Up Auto Emails" / appointment-options surface in Step 05 is the sibling of the Class/Course Options page from this raw file.
- **User feedback cross-refs:**
  - User feedback gap #1 (need to control room vs provider vs resource independently) — directly informed by Step 03 multi-provider grid + "Our Team" column ambiguity. Mindbody handles provider columns; rooms/resources visible inside appointment cards but not as separate columns in this view. Per Knox pre-marker bucket 2, OMNI must support room/resource as first-class schedule column.
  - User feedback gap #8 (multi-modal visits including video) — not surfaced in these 5 screens (Mindbody's calendar shown is in-person service oriented; no video-visit UI visible). Layer 2 should flag this as an absence.
- **Knox synthesis statements to reference in Layer 2:**
  - "appointment is not just a calendar block. It is a workflow object" (marker 1, ~line 395-400)
  - "Providers, rooms, resources are independent but composable" (pre-marker, ~line 240-260)
  - "appointment = service + client + time + required participants/resources NOT appointment-belongs-to-provider" (pre-marker, ~line 250)

## Outstanding observations / TBD

- Status icon vocabulary (☆, ✓, ✚, +) needs full mapping — these 5 screens show partial coverage; later screens (appointment-detail view) likely reveal more.
- Status count badge legend (0, 0, 2, 6, 2 at bottom) needs decoding — 5 status types but not labeled in this view.
- Appointment overlap rules — Step 04 suggests overlap is possible; Mindbody's "allow overlapping scheduling" provider toggle (Knox marker 6+) confirms this is a per-provider setting.
- Closed business day visual encoding (lighter shading) covers full days AND partial day-times (after 8:30 PM); same visual encoding for both is intentional.
- "Our Team" / "Front Desk" non-provider columns need substrate explanation — Knox pre-marker bucket 2 confirms team/resource columns coexist with provider columns; substrate model TBD in Layer 2.
- HSA/FSA + Truemed partnership integration in Step 01 dashboard panel suggests external-partner integrations get prominent UI placement; relevant for OMNI marketing/partnership surface (cross-domain, not scheduling).
- AI predictions (Big Spenders / At-Risk) as first-class dashboard surface — already cross-domain (analytics + AI + dashboard); Layer 2 Section J should log this for future Phase D Rx-labs-notes DL or future analytics DL.
