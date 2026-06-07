# Mindbody — Batch 10 raw capture: Clients directory + Client profile cockpit (8 horizontal tabs) + per-client schedule view

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~2:30 AM UTC-4)
Batch: 10
Feature area(s): `clients_directory`, `clients_profile`, `clients_profile_contact_logs`, `clients_profile_schedule`
Screenshots covered: 8 (chronologically: row 62 = 11.48.49 PM previously skipped, then rows 95-101 = 12.06.54 AM - 12.10.05 AM)
Chat cross-references:
- **Marker 3 (lines 1086-1615) — "Client record / account cockpit"** — THE canonical anchor for Batch 10: *"the missing bridge between scheduling, checkout, messaging, and CNS. Client profile as command center answering: who is this person, how to contact, current membership/package state, visit history, upcoming appointments, purchases/payments, notes/alerts, opt-ins, card on file, follow-ups due, documents, what should staff do next."* Steps 02-08 surface every dimension of this enumeration.
- **Marker 4 (lines 1616-2152) — "Account operations are editable, runnable, and destructive"** — Step 03 Billing Information surface (saved card with autopay schedule + autopay history + add-new-autopay) is the canonical seller-side anchor.
- Pre-marker bucket 7 (notes — multiple types) — Step 02 Notes textarea + Step 04 Formula notes (collapsible section); confirms Mindbody handles multiple notes substrates per client.
- Pre-marker bucket 9 (Client directory / CRM filters) — Step 01 Client Directory filters surface confirms the enumerated filter axes.

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-13 at 11.48.49 PM.png`
**URL:** `clients.mindbodyonline.com/app/business/asp/adm/adm_clt_lkup.asp`
**Feature area:** `clients_directory`
**Inferred screen title:** Client Directory — search/filter list (saved searches + extensive filter set)

### TEXT CONTENT (VERBATIM)

```
[Top: Client Directory header + More dropdown]

Client Directory                                   More ▾

▾ Saved
   BH+ Member List (6/22/2025)

▾ Filters
[Reset Search]

Client info:  [All Relationships ▼] [Active clients ▼] [Any gender ▼] [All non-members & members ▼]
              ☐ Clients w/ an alert  ☐ Clients w/ a provider alert  ☐ Clients w/ a current contract  ☐ Clients without a referral  ☐ Tagged clients only (1) [Clear]

Sales Info:   [Any contact log status ▼]  Profile creation date: [date] To [date]  [All Reps ▼]  [Any sales status ▼]  ⓘ
              First contact date: [date] To [date]    Expected close date: [date] To [date]
              Actual close date: [date] To [date]

Client Indexes: [All Massage Pressure ▼]  [All Music Preference ▼]  [All Reason for visiting ▼]
Liability Waiver: [Any status ▼]

Search client by  [All fields ▼] [search input]  [Search]  [Add New Client]  [4 monogram icons]

[Right column:]
Client type:
[All client types selected]
B2B
FAMILY
[truncated]
```

### ARCHITECTURAL OBSERVATIONS

**Client Directory exposes ~20 filter axes spanning 5 conceptual buckets:**
- **Client info bucket (4 dropdowns + 5 checkboxes):** Relationships, Active status, gender, member status, alerts, provider alerts, current contract, no referral, tagged
- **Sales Info bucket (4 dropdowns + 4 date ranges):** Contact log status, profile creation date, sales rep, sales status, first contact, expected close, actual close (sales-pipeline / lead-management language!)
- **Client Indexes bucket (3 dropdowns):** Massage Pressure, Music Preference, Reason for visiting (CONFIGURABLE per-clinic taxonomies — these aren't built-in; they're org-defined custom indexes)
- **Liability Waiver (1 dropdown):** waiver status
- **Search bar:** field-scoped or all-fields, with "Add New Client" affordance
- **Saved Searches:** "BH+ Member List (6/22/2025)" — saved query pattern (org-level OR user-level TBD)

**Critical architectural observation: Client Indexes are CUSTOMIZABLE per-clinic.** "Massage Pressure / Music Preference / Reason for visiting" are clearly user-configured taxonomies (medspa wouldn't natively have "Music Preference" — this is a config import from Mindbody's massage-studio roots OR a clinic-customized field). For OMNI: per-org configurable client attributes are a substrate primitive.

**Client type filter** (right column: "All client types / B2B / FAMILY / ..."): client classification taxonomy — distinguishes B2B accounts (corporate buyers?) from FAMILY accounts. Suggests Mindbody supports multi-person account structures (one billing entity, multiple individual clients linked).

For OMNI Q5 (capability flags + client identity): per-org client classification is a configurable axis. Per system map "1J.1-1J.9 identity precedence": multi-person family/B2B accounts is a known doctrine concern.

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-14 at 12.06.54 AM.png`
**URL:** `clients.mindbodyonline.com/app/clients/100002103/client-info`
**Feature area:** `clients_profile`
**Inferred screen title:** Client Profile — Diana Donlon Client Info tab (left column: Visits + Membership summary + Appointments Remaining; right column: Contact & Subscriptions opt-in + Class Waitlist SMS + Notes)

### TEXT CONTENT (VERBATIM)

```
[Top: ☰  Bh logo  search  utility-icons row  NC user]

[Left sidebar nav: Dashboard / Appointments / Rooms / Check In / Clients (active) / Point of Sale / Insights / Marketing / Services & Products / Staff / Settings]

[Center column — Client cockpit core data:]
[partial: Connect Mindbody Account link]

Visits
Last Visit:
BH HydraFacial
May 13, 2026 • 11:00 AM

Membership summary
Membership status
Non-Member
Current membership
BH HydraFacial - Signature
BH HydraFacial - Signature
Locker #
[blank]
Suspension to date
None

Appointments Remaining:
1. Facials
   BH HydraFacial - Signature
   Exp 04/10/2027
   Remaining: 1
1. Facials
   BH HydraFacial - Signature
   Exp 05/13/2027
   Remaining: 1

[Right column:]
Contact & Subscriptions   ▾

Contact email
donlondiana@gmail.com                                    ⓘ
Connect Mindbody Account

Mobile phone        Home phone
(586) 839-5222

Work phone          Work extension

Subscriptions
When you ask clients to opt in, remind them that we will still send receipts and anything critical.

Account management         ☐ Email   ☐ Text
Reminder & schedule changes ☐ Email  ☐ Text
News & Promo               ☐ Email   ☐ Text  ⓘ

Class Waitlist SMS Notification
For optimal waitlist performance, clients are automatically opted into waitlist SMS notifications when added to the waitlist from Business Mode. Please ensure to collect consent to receive waitlist notifications when adding a client for the first time. They always have the ability to opt-out by texting "STOP" to unsubscribe.
☐ Text [disabled]

Notes  ▾
[empty textarea]
```

### ARCHITECTURAL OBSERVATIONS

**Client Profile center column = the "client cockpit" Knox marker 3 describes:**
- Visits (Last Visit → recent activity)
- Membership summary (status + current membership + locker # + suspension)
- Appointments Remaining (entitlement-redemption tracking — same data as Batch 9 Step 07's appointment view but client-side)
- "Membership status: Non-Member" but "Current membership: BH HydraFacial - Signature" (twice listed) — interesting: client has TWO BH HydraFacial - Signature entitlements but is NOT a member. Memberships and entitlements are SEPARATE concepts.

**Right column = communication preferences + alerts:**
- Contact & Subscriptions section (collapsible)
- 3 typed subscription opt-ins (Account management / Reminder & schedule changes / News & Promo) × 2 channels each (Email / Text) = 6 individual consent toggles
- Class Waitlist SMS Notification with explicit consent guidance text — TCPA / CAN-SPAM / opt-in compliance text rendered inline
- "Connect Mindbody Account" link — patient self-service portal linking

**For OMNI doctrine alignment:**
- Per system map DL-14 (CNS-as-orchestrator): subscription opt-ins are CONSENT primitives that the CNS reads when deciding whether to send outbound communications
- Per system map "1G.1 / 1G.3 / 1G.4 messaging" — clinical-required messages bypass opt-in (per CAN-SPAM exemptions for transactional); marketing opt-in is gate-checked
- Per system primitive #7 in system map (consent governance): each opt-in toggle is a separate `patient_consents` row with timestamps + capture method
- Mindbody surfaces 3 typed-categories × 2 channels = 6 toggles; OMNI per [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 4 (no reinventing intake/messaging) reuses existing OMNI consent surface

**For Q5 (per-brand capability flags):** The "Class Waitlist SMS" section is class-specific. If this clinic doesn't use Classes, this section may be hidden. Per-brand capability flag axis confirmed.

**Locker # field** — fitness-studio-origin field; vestigial for medspa. Operational debt.

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-14 at 12.07.08 AM.png`
**URL:** (same — `client-info`)
**Feature area:** `clients_profile`
**Inferred screen title:** Client Profile scrolled — Notes textarea + Billing Information (Credit card tab with saved card xxxx6345)

### TEXT CONTENT (VERBATIM)

```
Notes  ▾
[empty textarea — large]

Billing Information   [CC tab indicator]   ▾

Credit card  [tab active, blue underline]

Cardholder Name
Diana Donlon
Copy from contact info  [link]

Address                          Postal code

City                             State  ▾

Swipe Card to Store              [empty input]

CC Number
xxxx6345
```

### ARCHITECTURAL OBSERVATIONS

**Billing Information section is COLLAPSIBLE (▾) and TABBED.** "Credit card" is the active tab — implies other tabs exist (likely ACH / bank account, Gift card, etc.). Multi-method billing storage.

**Saved card display: xxxx6345 (Visa from Step 04)** — confirms PCI-compliant tokenized storage. Last-4 only displayed.

**"Swipe Card to Store" input** — staff can swipe a physical card to capture for storage (vs manual entry into Cardholder/CC Number/Expiration fields). Magstripe → tokenization pathway.

**"Copy from contact info" link** — autofill helper to populate cardholder address from client's contact info. Reduces typing; common UX pattern.

**For OMNI commerce DL + payment rail integration (system map "1I.4-1I.5"):** per-client tokenized card storage is a substrate primitive. Lifecycle: stored → used (charge succeeds → audit) → updated (card-on-file expires; autopay update) → revoked (patient removes). Multi-tab billing implies multiple stored payment methods per patient.

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-14 at 12.07.20 AM.png`
**URL:** (same — `client-info`)
**Feature area:** `clients_profile`
**Inferred screen title:** Client Profile scrolled — Credit card details (Expiration + CC Type) + Autopay Schedule/History links + 6 collapsible profile sections

### TEXT CONTENT (VERBATIM)

```
Credit card

Cardholder Name
Diana Donlon
Copy from contact info

[address fields]

CC Number
xxxx6345

Expiration Month        Expiration Year
07 - July               2028

CC Type
Visa

Autopay Schedule    |    Autopay History    |    Add New Autopay Schedule

Edit name                                ▾
Emergency Contact Information            ▾
Formula notes                            ▾
Membership status   [Non-Member badge]   ▾
Address                                  ▾
Photo                                    ▾
[Referred by — partial]
```

### ARCHITECTURAL OBSERVATIONS

**3 autopay-related actions on the saved card:**
- **Autopay Schedule** — view current recurring charges scheduled against this card
- **Autopay History** — view past charges
- **Add New Autopay Schedule** — manually create a new autopay (not just from contract purchase — staff can create autopay direct)

This confirms Knox marker 4: *"Account operations are editable, runnable, and destructive... active contract/autopay actions (View, Print, Next Autopay, Terminate, Delete), account recalculation, autopay schedule editing, autopay transaction deletion."* The Autopay Schedule + History + Add are concrete affordances.

**6 collapsible profile sections visible:**
- Edit name
- Emergency Contact Information (clinical / safety relevant)
- **Formula notes** (medspa-specific clinical formula tracking, mentioned at Batch 5 Step 06 appointment edit)
- Membership status [Non-Member badge]
- Address
- Photo (patient photo)
- Referred by (partial)

**For OMNI:** the client profile is an aggregation of many domain-table reads. Each collapsible section is a domain-table projection (Edit name → patients table, Emergency Contact → patient_emergency_contacts, Formula notes → clinical_assertions or domain-specific table, Address → patient_addresses, Photo → patient_documents per system map 1O, Referred by → patient_relationships).

For Q3 (4-entity split): client profile is the substrate read aggregation surface. NOT a single domain table.

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-14 at 12.07.33 AM.png`
**URL:** (same)
**Feature area:** `clients_profile`
**Inferred screen title:** Client Profile scrolled — full collapsible section list (12 sections visible)

### TEXT CONTENT (VERBATIM)

```
Edit name                                ▾
Emergency Contact Information            ▾
Formula notes                            ▾
Membership status   [Non-Member]         ▾
Address                                  ▾
Photo                                    ▾
Referred by                              ▾
Relationships                            ▾
Additional information                   ▾
History                                  View contact logs (38)  ▾
Client Indexes                           ▾
Rep (0)                                  ▾
```

### ARCHITECTURAL OBSERVATIONS

**12 collapsible sections in the client profile:**
1. Edit name
2. Emergency Contact Information
3. Formula notes
4. Membership status (Non-Member badge)
5. Address
6. Photo
7. Referred by
8. **Relationships** (multi-person account / family / spouse / dependent linking — per pre-marker bucket 9 "Relationships filter")
9. Additional information (org-customizable extra fields)
10. **History** with "View contact logs (38)" — 38 contact log entries for Diana
11. **Client Indexes** (the customizable per-clinic taxonomies from Step 01: Massage Pressure / Music Preference / Reason for visiting)
12. **Rep (0)** — Sales rep assignment count (currently 0; CRM/sales-pipeline relevant)

**For OMNI:** 12 sections × ~6 fields each = ~70+ fields in the client profile. Massive substrate aggregation. Each section corresponds to a domain table (or a sibling-table relationship). Per system map domain-table-discipline: each section reads from the relevant domain; client profile is the aggregation/projection view, not the source of truth for any one section.

**"Rep (0)"** confirms sales-rep attribution is per-client, not just per-cart. Sales rep can be: per-cart (immediate transaction commission) AND per-client (ongoing relationship attribution; CRM lifetime-value).

**"View contact logs (38)"** — Diana has 38 contact log entries. Clicking opens Step 06 (Contact Logs surface).

---

## Step 06

**File:** `screenshots/Screen Shot 2026-05-14 at 12.08.44 AM.png`
**URL:** `clients.mindbodyonline.com/app/clients/100002103/contact-logs`
**Feature area:** `clients_profile_contact_logs`
**Inferred screen title:** Diana Donlon — Contact Logs page (8 horizontal tabs visible; visits + pricing options summary + filters + Add New Contact Log form)

### TEXT CONTENT (VERBATIM)

```
[Header: Diana Donlon  donlondiana@gmail.com  (586) 839-5222]

[8 horizontal tabs:]
Client Home  Client Info  Contact Logs (active, underlined)  Schedule  Visits  Purchases  Account Details  Documents     More ▾

[Header summary row:]
Visits      5/5/2026 4:00 pm  5. Injectables / Dermal Fillers (Lips)  Completed  Dr. Nicholas Crawford
            4/10/2026 11:00 am  1. Facials / BH Signature Facial (60 Mins)  Completed  Amber Allen

Phone #:  (586) 839-5222  Email: 📧 donlondiana@gmail.com

Pricing Options
1. Facials  BH HydraFacial - Signature  Expiration Date 4/10/2027  Remaining: 1
1. Facials  BH HydraFacial - Signature  Expiration Date 5/13/2027  Remaining: 1

Purchases
5/13/2026  BH HydraFacial - Signature  $200.00
4/10/2026  BH HydraFacial - Signature  $200.00

Contact logs: 38 | Failed auto emails: 0 | Logs requiring followup: 0

[Filter row:]
Start date  [11/14/2025]  End date  [5/14/2026]
Contact log types: [All / AfterVisitCourtesy / New Lead / Time to Re-Book — multi-select]
Alert type:        [Non-system generated ▼]
Followup status:   ◉ All contact logs  ○ Logs requiring followup  ○ Logs with overdue followups
Sort by:           ◉ Date  ○ Contact name  ○ Followups due
                   Client Indexes ▾

Add New Contact Log
Date/Time:    5/14/2026 12:08:08 AM
Contact name:  Diana
Contact method: Email ▾                  Followup by this date  Followup time
Assigned to: All ▾
[Rich text editor with formatting toolbar]
```

### ARCHITECTURAL OBSERVATIONS

**Contact Logs surface is a CRM-grade activity log** with:
- Date-range filter (default: 6 months back)
- Type filter with 4+ predefined types (All / AfterVisitCourtesy / New Lead / Time to Re-Book — these look like Mindbody-managed AND custom types)
- Alert filter (Non-system generated = staff-created vs system-auto-generated)
- Followup status filter (All / Requiring followup / Overdue followups)
- Sort by date / contact name / followups due
- Client Indexes inline filter

**Add New Contact Log form fields:**
- Date/Time (defaults to now)
- Contact name (who at the clinic interacted)
- **Contact method** (Email / Phone / etc.) — typed channel
- **Followup by this date + Followup time** — scheduled next-touch
- Assigned to (staff assignment)
- Rich text body

**For OMNI doctrine:**
- Contact Logs = `patient_contact_logs` domain table (substrate); per system map "1H.4 acquisition / attribution" + CRM context
- Followup deadline triggers a CNS event when due (DL-14 anchor)
- Followup escalation if missed (DL-14 + 1G.1 case ownership)
- Sales-pipeline-specific log types (New Lead / AfterVisitCourtesy / Time to Re-Book) are CRM concepts that OMNI must support OR allow per-org configuration

**"Visits" header summary at top:** denormalized last-2-visits projection. Common pattern (recent activity preview without nav). For OMNI: derived view, not stored denormalization.

**"Pricing Options" header summary:** denormalized active entitlements with expiration dates + remaining counts. Same source of truth as Batch 9 Step 07's Edit Appointment 3rd tab.

**"Purchases" header summary:** denormalized recent purchase history. Source of truth: commerce_orders table.

**For OMNI Encounter Container ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1) Q3 cross-validation:** the Contact Logs surface is purely commerce/CRM concerns. Combined with Client Profile sections from Steps 02-05 (clinical/communication concerns), the client cockpit IS the multi-domain aggregation. Knox's preserve-everything direction: client profile is a multi-substrate read, not a single domain.

---

## Step 07

**File:** `screenshots/Screen Shot 2026-05-14 at 12.09.51 AM.png`
**URL:** `clients.mindbodyonline.com/app/clients/100003897/schedule`
**Feature area:** `clients_profile_schedule`
**Inferred screen title:** **Kristie Eberhardt** (DIFFERENT client) — Schedule tab (per-client appointment list with Provider + Location + Booked online + per-row Actions)

### TEXT CONTENT (VERBATIM)

```
[Header: Kristie Eberhardt  kristie_j_13@hotmail.com  (586) 876-3442  [2 monogram icons]]

[8 horizontal tabs (same as Step 06):]
Client Home  Client Info  Contact Logs  Schedule (active)  Visits  Purchases  Account Details  Documents     More ▾

[View toggle:]
◉ Show All Dates    ○ Select date range

[Schedule table:]
Day  Date         Time              Description                          Provider                    Location           Booked online  Actions
▾    Week 05/31/2026 - 06/06/2026 (1)
     Fri  06/05/2026  3:00 PM - 4:00 PM   5. Injectables / Sculptra (Face)   Dr. Nicholas Crawford  Bloom Health       No             ⋮

▾    Week 06/07/2026 - 06/13/2026 (1)
     Fri  06/12/2026  11:00 AM - 12:00 PM  4. Skin Treatments / SkinPen Micr...  Amber Allen         Bloom Health       No             ⋮

[Bottom: Cancellation policy:  (link)  Print schedule]
```

### ARCHITECTURAL OBSERVATIONS

**Per-client schedule view = personalized appointment list** (different from the calendar grid in Batch 4-5 which is staff-perspective):
- Grouped by week (collapsible week headers)
- Sortable by date
- Columns: Day / Date / Time / Description / Provider / Location / Booked online / Actions
- "Description" includes service category (5. Injectables / 4. Skin Treatments) + service name (Sculptra Face / SkinPen Micr...) — same service catalog vocabulary as the calendar grid
- "Booked online: No" — channel attribution (online vs in-clinic vs phone) per appointment
- "Location: Bloom Health" — multi-location support (single org, multiple physical locations)

**For OMNI:** per-patient schedule view is a domain-table projection (`appointments` filtered by patient_id + ordered by start_time). Multi-location is a substrate concern (per-appointment `location_id` + per-patient `home_location_id` + cross-location booking permissions per Q5 capability flags).

**Channel attribution ("Booked online: No"):** each appointment has a creation channel (online self-service / in-clinic by staff / phone / etc.). Per system map "1H.4 acquisition" + CRM attribution: channel is foundational for analytics.

**8 horizontal tabs consistency:** Steps 06 + 07 + 08 all show the SAME 8-tab structure (Client Home / Client Info / Contact Logs / Schedule / Visits / Purchases / Account Details / Documents) + More dropdown. This is the canonical client-cockpit nav. OMNI should mirror.

---

## Step 08

**File:** `screenshots/Screen Shot 2026-05-14 at 12.10.05 AM.png`
**URL:** (same — Kristie's `/schedule`)
**Feature area:** `clients_profile_schedule`
**Inferred screen title:** Kristie Eberhardt — Schedule with per-row action menu opened (3 actions: Reschedule / Early Cancel / Check Out)

### TEXT CONTENT (VERBATIM)

```
[Same Schedule view as Step 07]

[Per-row action menu opened on 06/12 SkinPen appointment (⋮ menu):]
Reschedule
Early Cancel
Check Out
```

### ARCHITECTURAL OBSERVATIONS

**Per-row action menu = compact 3-action subset** of the 12-item appointment context menu (Batch 6 Step 01):
- Reschedule
- Early Cancel
- Check Out (likely "Checkout" — opens POS for this appointment)

**Why only 3 actions vs 12?** UX-context-aware menu reduction:
- This is a FUTURE appointment (06/12), not today's
- Future appointments don't need: Confirmed / Arrived / Late Cancel / Modify / Progress Note / Prebook / Groups / Retail / Apply payment (those are check-in / day-of / rendered actions)
- Future appointments DO need: Reschedule / Early Cancel / Check Out (advance pre-payment)

For OMNI: per-state-context menu reduction is a UI affordance. Substrate supports all 12 actions; UI surfaces only valid actions for the current encounter state.

**For OMNI lifecycle gating:** action availability is derived from encounter state. Per system map's domain-table-discipline + DL-15 + DL-16: state machine determines valid transitions; UI renders only valid affordances.

---

## Cross-references

- **Manifest rows updated:** rows 62, 95, 96, 97, 98, 99, 100, 101 (8 screens in Batch 10).
- **Chat navigation map references:**
  - **Marker 3 (lines 1086-1615) — "Client record / account cockpit"** — THE CANONICAL ANCHOR. Every Step 02-08 surface is concrete evidence for Knox's enumeration.
  - Marker 4 (lines 1616-2152) — Step 04 Autopay Schedule / History / Add New + Step 06 Pricing Options denormalization
  - Pre-marker bucket 7 (notes — multiple types) — Step 04 Formula notes vs Step 02 Notes textarea
  - Pre-marker bucket 9 (Client directory CRM filters) — Step 01 confirms enumerated filter axes
- **User feedback cross-refs:**
  - **Gap #6 (metrics on visits across providers + clients):** Step 06 Contact Logs (38 entries) + Visits + Purchases history are the substrate inputs for cross-patient analytics
  - **Gap #7 (Hims-style weight loss plan attached to visits):** Step 02 Membership summary couples client to BH HydraFacial - Signature entitlement; substrate for plan-attached-to-visit pattern
  - **Gap #1 (room/provider/resource + booking impossible if not aligned):** Step 07 Booked online: No column is channel attribution; not directly room/provider/resource but is operational metadata
- **Knox synthesis statements:**
  - Marker 3 client cockpit enumeration is concretely surfaced across Steps 02-08
  - Marker 4 account operations editable: Step 04 autopay surface is canonical
- **Supplemental cross-refs:**
  - [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — 4-entity split: Step 02 + Step 06 surface entitlement-state ("Appointments Remaining" + "Pricing Options"); Step 06 surfaces commerce_orders ("Purchases")
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 — Step 02 Subscriptions + Class Waitlist SMS + Step 04 multiple Billing tabs all confirm per-brand capability flag axes (which subscriptions enabled, which class features active, which payment methods supported)
- **Gap #4 (progress notes attached to visits):** Step 04 Formula notes (collapsible client-level) vs Step 02 Notes (free-form client-level) vs appointment Notes (Batch 5/6) vs Step 06 Contact Logs (CRM-level). Multiple note substrates per Knox pre-marker bucket 7. OMNI must distinguish or unify per Q1+Q3.

## Outstanding observations / TBD

- **8 horizontal tabs full content** — Steps 06-08 cover Contact Logs + Schedule. Other tabs (Client Home / Client Info / Visits / Purchases / Account Details / Documents) need their own batches.
- **More dropdown** on the tabs row — what's inside? Need a screen with More opened.
- **Documents tab** — likely the patient_document_routing per system map 1O surface; need separate batch.
- **Account Details tab** — Knox marker 4 deeply analyzes this; need separate batch.
- **Visits tab** — likely a richer Visits projection than the header summary in Step 06; need separate batch.
- **Purchases tab** — likely a richer commerce_orders projection than header summary in Step 06; need separate batch.
- **Client Home tab** — likely the dashboard analog at client-level; need separate batch.
- **Locker # field** — fitness-studio vestige; org-level config to disable?
- **B2B / FAMILY client types** (Step 01) — multi-person account substrate; need account-structure screens.
- **Client Indexes customization** (Massage Pressure / Music Preference / Reason for visiting) — per-clinic configurable; need admin-config screens.
- **Connect Mindbody Account** link — patient self-service portal; consumer mode integration TBD.
- **Class Waitlist SMS** — tied to Classes feature; if Classes is disabled per Q5, does this section hide?
- **Followup deadline → CNS event** — substrate hookup for follow-up reminders (Knox marker 3 mentions "follow-ups due"); confirm with messaging substrate batches later.
- **Multi-location support (Bloom Health Location)** — single-clinic medspa here; multi-location operationally TBD with future batches.
