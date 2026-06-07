# Mindbody — Batch 11 raw capture: Client profile cockpit completion (Visits / Purchases / Account Details autopay / Documents) + Mindbody user/site identity dropdown

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~3:30 AM UTC-4)
Batch: 11
Feature area(s): `clients_profile_visits`, `clients_profile_purchases`, `clients_profile_account_details`, `clients_profile_documents`, `staff_identity_dropdown`
Screenshots covered: 10 (chronologically: rows 102-111 = 12.10.47 AM through 12.17.42 AM)

Chat cross-references:
- **Marker 3 (lines 1086-1615) — "Client record / account cockpit"** — Batch 11 closes out the remaining 5 of 8 horizontal tabs in the client cockpit (Visits / Purchases / Account Details summary + Autopay sub-tabs / Documents). Combined with Batch 10 (Client Home/Info/Contact Logs/Schedule), the complete cockpit is now ingested. Knox's enumeration *"what should staff do next… current membership/package state, visit history, upcoming appointments, purchases/payments, notes/alerts, opt-ins, card on file, follow-ups due, documents"* is FULLY surfaced.
- **Marker 4 (lines 1616-2152) — "Account operations are editable, runnable, and destructive"** — Steps 04-06 (Mary Behler Account Details Summary + Autopay Schedule + month-to-month expansion) are the canonical operational-ledger anchor. Particularly: Inactive pricing-option action menu (Return/Void, Edit, Show Visits) + "Recalculate" button + Autopay Schedule "Remove (Delete) Checked Transactions" + "Run All Checked Transactions Now" — destructive AND runnable account operations.
- Pre-marker bucket 10 (Checkout/POS commerce — refund pathway) — Step 02 Purchases tab shows Sale ID 149159 with **Return / Void** Actions column. Refund pathway is per-sale; ledger-attached not orphaned.
- Pre-marker bucket 4 (Intended appointment vs actual treatment) — Step 01 Visits tab shows a completed appointment row labeled `Provider Consultations / Consultation – Aesthetic Injec...` with Status `Completed`. The Visits tab is the **scheduled-and-rendered ledger**; per-row Resource(s) column is EMPTY for this row (an Injectables consult uses no machine resource, only a provider). Q3 4-entity split visible: Schedulable (visit) vs Resource (empty).

Supplemental cross-references:
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — Knox's 4-entity split (Schedulable / Clinical / Billable / Resource-Inventory). The Visits tab (Step 01) and Purchases tab (Step 02) are the **post-rendered projections** of those entities; Visits projects Schedulable+Clinical, Purchases projects Billable.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 (4-entity split validity) — Steps 01-02 are concrete evidence: Visit row has no Price/Quantity columns; Purchase row has no Provider/Resource columns. Mindbody projects them separately. (Question remains OPEN whether OMNI uses 4 separate tables, 1 unified table with views, or hybrid.)
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q5 (capability flags) — Step 10 Mindbody user-profile dropdown shows `Account Information / Payments Portal / Mindbody Subscription / Location Owner` as distinct identity / subscription / ownership surfaces — per-user vs per-site separation visible.

User feedback cross-refs:
- Gap #2 (intended visit vs actual treatment) — Step 01 Visits tab confirms Mindbody's projection: a single Visit row collapses the entire intended-vs-rendered pair into one row, losing the granularity user wants for "schedule broad → narrow at checkout." OMNI's solution per Q3+Q1 must split these projections.
- Gap #3 (subscriptions/memberships/POS/retail/gift cards/loyalty woven together) — Step 04 (Account Details Summary with **4 Inactive pricing options + 1 Auto Pays contract**) shows Mindbody's account-level commerce ledger. Multi-entity types coexist in one summary view.
- Gap #6 (cross-patient metrics) — Step 01 footer: `Total visits: 1   Total hours: 0.75` — Mindbody auto-aggregates per-client. For OMNI metrics: aggregations must be substrate-derived, not denormalized.

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-14 at 12.10.47 AM.png`
**URL:** `clients.mindbodyonline.com/app/clients/100003897/visits`
**Feature area:** `clients_profile_visits`
**Inferred screen title:** Kristie Eberhardt — Visits tab (default Visits sub-tab; All Visit Types filter; single completed visit row)

### TEXT CONTENT (VERBATIM)

```
[Top URL: clients.mindbodyonline.com/app/clients/100003897/visits]
[Header: Kristie Eberhardt    kristie_j_13@hotmail.com    (586) 876-3442    [tag icons]]

[8-tab horizontal nav:]
Client Home | Client Info | Contact Logs | Schedule | Visits (active, underline) | Purchases | Account Details | Documents      More ▾

[Visits sub-tab nav (4 sub-tabs):]
Visits (active, green underline) | Logins | Appointments | Cancellations

[Date filter:]
● Show All Dates       ○ Select date range                                          [Visit Types ▼ All Visit Types]

[Table columns (8 visible):]
Date    | Day      | Time              | Description                                            | Provider              | Location     | Resource(s) | Status
05/13/2026 | Wednesd... | 12:00 PM - 12:45 PM | 11. Provider Consultations / Consultation - Aesthetic Injec... (hyperlinked) | Dr. Nicholas Crawford | Bloom Health |             | Completed

[Footer:]
Total visits: 1   Total hours: 0.75   ⓘ                                                       [⬇ Export]
```

### UI ELEMENTS / VISUAL MARKERS

- **8-tab horizontal nav identical to Batch 10 Step 03 (Contact Logs)** — confirms `clients_profile` cockpit is exactly 8 tabs + More menu (More menu surfaced in Step 09 below).
- **4 Visits sub-tabs:** Visits / Logins / Appointments / Cancellations — Visits is the rendered-encounter ledger, Logins is consumer-portal login history (per Knox marker 3 client identity surface), Appointments is the booking-grain ledger (different from rendered), Cancellations is the cancelled-booking ledger. **Two distinct grains:** Appointments (intended) and Visits (rendered). Knox's "intended vs actual" pattern is reflected in Mindbody's sub-tab split.
- **Resource(s) column is EMPTY** for the Injectables consult row — confirms per-service resource requirement; consults take no machine.
- **Description field** uses Mindbody's hierarchical service-catalog notation: `11. Provider Consultations / Consultation – Aesthetic Injec...` — leading `11.` is the service-category numbering, slash-separator nests category → service. Same `XX. Category / Service` pattern seen across Batch 5-7 service-catalog projections (POS Browse > Services and appointment-grid service filter). Single source of truth for service catalog projected here.
- **Provider name shows credential prefix:** `Dr. Nicholas Crawford` — Mindbody stores provider title/credential as part of display name (NOT separate field surfaced in this view; could be substrate-separate but display-concatenated).
- **Status `Completed`** displayed in green — Mindbody's appointment lifecycle terminal state.
- **Footer aggregations:** `Total visits: 1   Total hours: 0.75` — per-client roll-up auto-computed across visible rows.
- **Export affordance** (bottom-right) — every Mindbody table exposes export-to-CSV/XLS pattern (substrate primitive for reporting).
- **Tag icons** in client header (top-right, next to phone): two small avatar-style icons — confirms Mindbody client tagging visible in header (relates to Batch 10 row 62 "Tagged clients only (1)" filter).

### ARCHITECTURAL OBSERVATIONS

**Visits sub-tab proves Mindbody projects rendered encounters separately from booked appointments.** The 4-sub-tab split (Visits / Logins / Appointments / Cancellations) implies:
- **Visits row** = an Appointment that progressed through arrived → completed lifecycle (per Batch 5 row 60 multi-flag-stack pattern: Appointment has Confirmed+Arrived flags ON THE APPOINTMENT, not a separate "Visit" row, but it gets PROJECTED into the Visits view when the lifecycle reaches Completed)
- **Appointments row** = a booking record in any lifecycle state (including future, cancelled, no-show)
- **Cancellations row** = subset of Appointments where lifecycle hit Early Cancel / Late Cancel / No-Show

For OMNI Q1 (encounter container) + Q3 (4-entity split): Mindbody operationalizes the Schedulable/Clinical separation via VIEW-level projection on a (likely) single Appointment table, not via separate tables. The Visits sub-tab is a SAVED FILTER over the Appointments table where `lifecycle_state IN (completed)` — OR it could be a materialized Encounter row created at completion-time. Cannot determine from screen alone; substrate inspection during Q1 resolution will clarify.

**Resource(s) column-on-the-row is a per-Visit projection** — implies the underlying schema has a many-to-many or comma-joined "resources attached to this appointment" relation. Empty for consult; would presumably show "HydraFacial Machine" for a HydraFacial visit. Surfaces as another piece of Q3 evidence (Resource/Inventory Item is its own entity attached to Visits).

**Hyperlinked Description** — clicking through navigates back to the original appointment detail (per Batch 5/9 Edit Appointment), maintaining the entity round-trip from Visit projection back to source Appointment. OMNI substrate must preserve this round-trip (event_id / encounter_id ↔ visit_projection_id).

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-14 at 12.11.08 AM.png`
**URL:** `clients.mindbodyonline.com/app/clients/100003897/purchases`
**Feature area:** `clients_profile_purchases`
**Inferred screen title:** Kristie Eberhardt — Purchases tab (date-ranged Sales ledger; single sale row visible)

### TEXT CONTENT (VERBATIM)

```
[Top URL: clients.mindbodyonline.com/app/clients/100003897/purchases]

[8-tab horizontal nav same as Step 01, "Purchases" underlined active]

[Date filter:]
○ Show All Dates    ● Select date range    [Start date 11/14/2025]    [End date 05/14/2026]
[View mode toggle icons (list / summary)] [⬇] [All purchases ▼]

[Table columns (12 visible):]
Sale ID  |  [icons]  | Sale Date  | Payment Method | Description           | Location     | Color | Size | Price | Quantity | Dis... | Tax | Am... | Pay... | Actions
149159 (hyperlinked) | [⬇][🖨][📧] | 05/13/2026 | Comp           | Consultation - Injectables | Bloom Health |       |      | $0.00 | 1        |        | $0... | $0... | 18117 | Return / Void
```

### UI ELEMENTS / VISUAL MARKERS

- **Sale ID 149159** is the granular sale record identifier (vs Sale Date which is its commit timestamp).
- **3-icon row** next to Sale ID: download (PDF/CSV?), printer (receipt print), email (email receipt to client). Receipt re-issuance is a first-class operation, not just a one-time delivery.
- **Payment Method = `Comp`** — confirms `Comp` is a Mindbody payment-method enum value (Comp = complimentary / waived). This was NOT visible in the 23-payment-method enumeration from Batch 9. **24th payment method discovered: Comp.** Likely a settings-toggleable enable per Q5 capability flag.
- **Description: `Consultation - Injectables`** — note this differs slightly from Step 01 Visit Description (`11. Provider Consultations / Consultation – Aesthetic Injec...`). The Visit row uses full service catalog notation; the Purchase row uses commerce-line-item description (likely the Service-as-Product name, not the Service-as-Scheduled name). Possible Q3 evidence: Schedulable Service and Billable Item have DIFFERENT names for the SAME logical encounter — already separated at the data level in Mindbody.
- **Color / Size columns** are empty for this service-line-item — but they exist as columns, implying retail-product sales (Batch 6/7) use them. Sales table is uniform schema across services AND products; Color/Size only populated for products.
- **Quantity column = 1** — unit quantity of this sale line item (vs Batch 8 row 87 Botox $14×20 enactment which would show Quantity = 20).
- **Pay... column = 18117** — a Payment-side reference (likely payment_attempt_id or transaction_id linking back to a payment record).
- **Actions = `Return / Void`** — per-sale-line refund pathway (matches Batch 10 row 97 account-summary Inactive pricing options Action menu).

### ARCHITECTURAL OBSERVATIONS

**Purchases tab is the per-client billable-ledger projection.** Schema observations:
- One Sale ID can have multiple line items (this row is 1 of N for sale 149159). Sale = parent (commerce_order), Line = child (commerce_order_line). Already aligned with OMNI doctrine pattern.
- Each line carries its own price/quantity/discount/tax/amount + payment_method + actions — line-level granularity, not sale-level only.
- **Refund (`Return / Void`) is a per-line action**, not a per-sale action. OMNI substrate: refund operations should be line-scoped with parent-sale relationship preserved.
- Description divergence from Visits tab (commerce description vs catalog description) confirms Q3 Schedulable Service ≠ Billable Item separation is REAL in the Mindbody schema, not just a UI gloss.

**Q5 capability evidence:** `Comp` as a payment method. Likely per-brand-enabled (some clinics don't comp visits; some do). Confirms payment_method enum is config-controlled, not hardcoded.

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-14 at 12.11.53 AM.png`
**URL:** `clients.mindbodyonline.com/app/clients/100003897/purchases`
**Feature area:** `clients_profile_purchases`
**Inferred screen title:** Kristie Eberhardt — Purchases tab with view-mode toggle tooltip (`Go to summary view`)

### TEXT CONTENT (VERBATIM)

```
[Same screen as Step 02, but tooltip visible over the second view-toggle icon:]
Go to summary view
```

### UI ELEMENTS / VISUAL MARKERS

- Tooltip `Go to summary view` confirms the view-mode toggle exposes a SECOND view of Purchases:
  - **List view** (current, default) — per-line-item ledger with all columns
  - **Summary view** (alternate) — likely aggregations per period / per sale / per provider (not surfaced here)

### ARCHITECTURAL OBSERVATIONS

**Same data, two projections.** Common pattern across Mindbody (matches Batch 10 Contact Logs filter + Account Details Summary/Autopay sub-tabs). OMNI substrate: per-projection view definitions (saved query + aggregation strategy) should be configurable, not hardcoded.

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-14 at 12.14.01 AM.png`
**URL:** `clients.mindbodyonline.com/app/clients/100003245/account-details`
**Feature area:** `clients_profile_account_details`
**Inferred screen title:** Mary Behler — Account Details > Summary sub-tab (Inactive pricing options + Auto Pays + per-row action menu open)

### TEXT CONTENT (VERBATIM)

```
[Top URL: clients.mindbodyonline.com/app/clients/100003245/account-details]
[Header: Mary Behler    mary.e.behler@gmail.com    (248) 703-9103    [tag icons]]

[8-tab horizontal nav same as prior]
Client Home | Client Info | Contact Logs | Schedule | Visits | Purchases | Account Details (active) | Documents       More ▾

[Account Details sub-tabs (4):]
Summary (active) | Autopay Schedule | Autopay History | Add New Autopay Schedule

[Date filter:]
○ Show All Dates    ● Select date range    [Start date 11/14/2025]    [End date 05/14/2026]                          [Recalculate ⟳]

▾ Inactive
[Table columns:]
Paid  | Payment Ref # | Pricing Option                       | Payment Method | Amount | Scheduled | Remaining | Activation date | Expiration Date | Notes | Actions
02/10/2026 | 180733 | BH Signature Facial (60 Mins)        | Visa/MC        | $0.00  | 0         | 0 / 1     | 02/10/2026      | 02/09/2027       | [📝]  | [⋮]
02/10/2026 | 180732 | NEO Red Light Therapy (Single Session, Ad | Visa/MC | $0.00  | 0         | 0 / 1     | 02/10/2026      | 02/09/2027       |       | [⋮ EXPANDED: Return / Void | Edit | Show Visits ]
02/10/2026 | 180731 | Dysport (Returning)                  | Visa/MC        | $0.00  | 0         | 0 / 1     | 02/10/2026      | 02/09/2027       |       | [⋮]
02/10/2026 | 180730 | Dermaplaning                         | Visa/MC        | $50.00 | 0         | 0 / 1     | 02/10/2026      | 02/09/2027       |       | [⋮]

▾ Auto Pays
[Table columns:]
Agreement Date | Confirmed | Sold By        | Contract     | Notes | Start date | End date    | Contract Deposit | Auto-renewing? | A | Actions
03/04/2025     |           | Hannah Frrokaj | BH+ | Elite |       | 03/01/2025 | n/a - Month-to-Month |               | N |         | [⋮]
```

### UI ELEMENTS / VISUAL MARKERS

- **2 collapsible sections:** Inactive (4 rows) + Auto Pays (1 row). Implies a 3rd section (Active?) collapsed or empty.
- **Inactive pricing options = entitlements that are STILL VALID but UNUSED** (`Remaining 0 / 1` = 1 entitlement available, 0 redeemed; `Expiration Date 02/09/2027` = 11 months in the future). "Inactive" label here is misleading — these are valid but unused. Mindbody's vocabulary inconsistency.
- **Action menu (⋮) EXPANDED on Red Light Therapy row** shows **3 actions:** `Return / Void` / `Edit` / `Show Visits`
- **Recalculate button** (top-right) — runnable account-level operation per Knox marker 4. Forces recompute of derived balances / entitlements.
- **Auto Pays row** shows contract `BH+ | Elite` (membership/contract entity) sold by `Hannah Frrokaj` (staff), `Auto-renewing? = N` (or `n/a - Month-to-Month`).

### ARCHITECTURAL OBSERVATIONS

**Inactive section in Mindbody = entitlements with `redemptions_used = 0`**, not entitlements past expiration. **Vocabulary trap for OMNI:** OMNI must NOT name a status "Inactive" if it means "valid unused." Better naming: `unused` / `redeemed` / `expired` / `voided`.

**Action menu (Return / Void / Edit / Show Visits) on a per-entitlement row** is the canonical operational lever:
- `Return / Void` — refund the entitlement, mark voided
- `Edit` — modify entitlement (price, expiration, terms)
- `Show Visits` — projection-jump from entitlement → list of appointments that consumed it (links Q3 Billable Item back to Schedulable Service projection)

For OMNI Q3 (4-entity split): the `Show Visits` action concretely materializes the entitlement-to-encounter link Knox describes. Substrate must store this as a foreign key from `appointment_entitlement_consumption` ↔ `entitlement_id` ↔ `pricing_option_id`.

**Auto Pays row carries Sold-By staff attribution** — every commerce object has a staff actor. Already aligned with DL-14 actor-stamped event envelope.

**`n/a - Month-to-Month`** = explicit special-case value for rolling contracts (vs fixed-term contracts that have a true End date). Implies the Contract substrate supports both fixed-term (real End) and rolling (synthetic End-date = next-billing-cycle). OMNI substrate must model both.

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-14 at 12.14.30 AM.png`
**URL:** `clients.mindbodyonline.com/app/clients/100003245/account-details/schedule`
**Feature area:** `clients_profile_account_details`
**Inferred screen title:** Mary Behler — Account Details > Autopay Schedule sub-tab (1 visible row; editable fields; show-month-to-month toggle)

### TEXT CONTENT (VERBATIM)

```
[Account Details sub-tabs:]
Summary | Autopay Schedule (active) | Autopay History | Add New Autopay Schedule

[Table:]
   Schedule Date | Amount   | Tax    | Charge Amount | Description | Location       | Payment Method ☐ Apply to all? ⓘ | Contract     | Status     | Check all | Uncheck all
1. [6/1/2026 📅] | [159.00] | $0.00  | $159.00       | BH+ Elite   | [Bloom Health ▼] | [Credit card ▼]                  | BH+ | Elite | Scheduled  | ☐

                  [Update]

[Remove (Delete) Checked Transactions]   [Run All Checked Transactions Now]

Show month-to-month autopays  (hyperlink)
```

### UI ELEMENTS / VISUAL MARKERS

- **Row is EDITABLE inline:** Schedule Date (date-picker), Amount ($ input), Location (dropdown), Payment Method (dropdown) — direct mutation of future autopay before it runs.
- **`Apply to all?` checkbox** — bulk-mutation affordance for editing multiple future rows at once.
- **2 destructive/runnable operations at row-level:** `Remove (Delete) Checked Transactions` + `Run All Checked Transactions Now` — Mindbody allows force-running future autopays NOW and deleting future autopays both via the same checked-row mechanism. Knox marker 4 exemplar.
- **`Show month-to-month autopays`** hyperlink — collapses-expandable separate set of synthetic rolling-contract autopays (Step 06 expands this).
- **Status `Scheduled`** = the autopay row's lifecycle state (Scheduled / Run / Failed / Skipped TBD).

### ARCHITECTURAL OBSERVATIONS

**Autopay Schedule is a per-future-billing-event table.** Each row is one charge attempt scheduled. Substrate primitives:
- `autopay_schedule_row { id, contract_id, scheduled_date, amount, tax, charge_amount, description, location_id, payment_method_id, status, status_changed_at }`
- Per Knox marker 4: autopay rows are MUTABLE before run, IMMUTABLE after run (transitions to a historical record in Autopay History sub-tab — see Step 06).
- `Run All Checked Transactions Now` = forced-run idempotency: must guarantee a row is not run twice if user clicks Run NOW and then the scheduled date arrives. Concretely tests system map 1I.6 (idempotency).

**Edit-before-run + force-run-now** is a powerful operational pattern OMNI should replicate. Mindbody implements human-correctable scheduled-billing.

---

## Step 06

**File:** `screenshots/Screen Shot 2026-05-14 at 12.15.13 AM.png`
**URL:** `clients.mindbodyonline.com/app/clients/100003245/account-details/schedule`
**Feature area:** `clients_profile_account_details`
**Inferred screen title:** Mary Behler — Autopay Schedule with month-to-month autopays expanded (11 future rolling rows visible)

### TEXT CONTENT (VERBATIM)

```
[Same as Step 05, but with Show → Hide toggled:]
Hide month-to-month autopays  (hyperlink)

[Below: 11 greyed/inactive rows displayed under header columns Schedule Date / Amount / Tax / Charge Amount / Description / Location / Payment Method / Contract / Status]

1.  [7/1/2026 📅]  [159.00]  $0.00  $159.00  BH+ Elite  [Bloom Health ▼]  [Credit card ▼]  BH+ | Elite  Scheduled
2.  [8/1/2026 📅]  [159.00]  $0.00  $159.00  BH+ Elite  [Bloom Health ▼]  [Credit card ▼]  BH+ | Elite  Scheduled
3.  [9/1/2026 📅]  [159.00]  $0.00  $159.00  BH+ Elite  [Bloom Health ▼]  [Credit card ▼]  BH+ | Elite  Scheduled
4.  [10/1/2026 📅] [159.00]  $0.00  $159.00  BH+ Elite  [Bloom Health ▼]  [Credit card ▼]  BH+ | Elite  Scheduled
5.  [11/1/2026 📅] [159.00]  $0.00  $159.00  BH+ Elite  [Bloom Health ▼]  [Credit card ▼]  BH+ | Elite  Scheduled
6.  [12/1/2026 📅] [159.00]  $0.00  $159.00  BH+ Elite  [Bloom Health ▼]  [Credit card ▼]  BH+ | Elite  Scheduled
7.  [1/1/2027 📅]  [159.00]  $0.00  $159.00  BH+ Elite  [Bloom Health ▼]  [Credit card ▼]  BH+ | Elite  Scheduled
8.  [2/1/2027 📅]  [159.00]  $0.00  $159.00  BH+ Elite  [Bloom Health ▼]  [Credit card ▼]  BH+ | Elite  Scheduled
9.  [3/1/2027 📅]  [159.00]  $0.00  $159.00  BH+ Elite  [Bloom Health ▼]  [Credit card ▼]  BH+ | Elite  Scheduled
10. [4/1/2027 📅]  [159.00]  $0.00  $159.00  BH+ Elite  [Bloom Health ▼]  [Credit card ▼]  BH+ | Elite  Scheduled
11. [5/1/2027 📅]  [159.00]  $0.00  $159.00  BH+ Elite  [Bloom Health ▼]  [Credit card ▼]  BH+ | Elite  Scheduled
```

### UI ELEMENTS / VISUAL MARKERS

- **11 future rows generated as a 12-month rolling preview** (6/1/2026 — the canonical "next charge" — was the only NON-greyed row in Step 05; rows 7/1/2026 through 5/1/2027 are greyed/synthetic).
- Rolling Month-to-Month contracts generate synthetic future charge rows 12 months ahead at the same amount/method/location/contract.
- All synthetic rows have identical fields (no per-row customization beyond date) — implies they are TEMPLATE-EXPANDED at view time, not stored as 12 separate physical rows.

### ARCHITECTURAL OBSERVATIONS

**Two substrate strategies, one UI:**
- **Strategy A: Pre-materialized** — Mindbody actually creates 12 physical autopay_schedule_row records ahead and displays them.
- **Strategy B: Lazy-expanded** — Mindbody only stores `(contract_id, billing_cadence='monthly', next_run_date='6/1/2026', amount='159.00', ...)` and the UI generates the 11 synthetic future rows on-the-fly.

Greyed/inactive styling + the explicit Show/Hide toggle suggests **Strategy B** — they're not "real" yet, just projected. This is a substrate-efficiency win: don't materialize 12 month autopay rows for every active contract until needed. Run-time materialization at each billing cycle.

For OMNI substrate: rolling-contract autopay representation should follow Strategy B. Materialize a row when it transitions from "scheduled" to "running" within ~7 days of run-date. Reduces table size by ~12x for month-to-month subscriptions.

---

## Step 07

**File:** `screenshots/Screen Shot 2026-05-14 at 12.16.31 AM.png`
**URL:** `clients.mindbodyonline.com/app/clients/100003245/documents`
**Feature area:** `clients_profile_documents`
**Inferred screen title:** Mary Behler — Documents tab (Upload New File + Client Forms empty state)

### TEXT CONTENT (VERBATIM)

```
[Top URL: clients.mindbodyonline.com/app/clients/100003245/documents]
[8-tab nav: Documents underlined active]

Documents - Mary Behler ⓘ

Upload New File (4MB Max) ⓘ
[Choose File]   No file chosen   [Upload (disabled)]
*File name should not contain colon(:), #, ?, %, ", double quotes(""), double dots(..) or end of file(.)

[File table (empty):]
File Name | File Size | File Type | Upload Date

Client Forms                                                                       [Send Client Forms] (orange button)

[Table:]
NAME ⇅  | STATUS ⇅  | DATE SUBMITTED ⇅  | VIEW LOG | ACTIONS
You don't have any forms.
```

### UI ELEMENTS / VISUAL MARKERS

- **2 distinct document containers** on one tab:
  - **Upload New File** — clinic-side ad-hoc document upload (4MB max). Filename-restriction warning visible.
  - **Client Forms** — clinic-managed FORM templates sent to client for completion (separate from ad-hoc uploads).
- **Send Client Forms** orange CTA — opens a form-sending workflow (not in this screenshot but obviously a separate flow with form-template selection).
- **Filename restriction list:** `:`, `#`, `?`, `%`, `"`, `""` (double quotes), `..` (double dots), `.` (end-of-file). 7 prohibited patterns — defensive against filesystem injection / URL parsing issues.
- **Sortable columns** in Client Forms table (⇅ icons on NAME / STATUS / DATE SUBMITTED).
- **VIEW LOG column** — implies form submissions are version-logged or have audit trail.

### ARCHITECTURAL OBSERVATIONS

**Documents tab has 2 substrate-distinct objects:**
- `client_document_upload { id, client_id, filename, file_size, mime_type, upload_date, uploaded_by_staff_id, file_url }` — ad-hoc files staff uploads to client record
- `client_form_assignment { id, client_id, form_template_id, status, sent_at, submitted_at, view_log_id }` — form sent for client to complete

OMNI substrate split:
- General client documents = blob storage with metadata
- Client forms = structured intake / consent / waiver workflow with template versioning + submission audit

**Both are gated by the 4MB upload limit** — a per-blob constraint that suggests Mindbody stores blobs inline (DB BLOB or attached file system) rather than via S3-like object storage with multi-GB limits. OMNI should default to object storage with much higher limits + content-type validation.

**View Log column** on Client Forms = form submission audit trail (who viewed when). Aligned with DL-14 audit event pattern. Per system map 1G.3 "consent capture audit," form submissions need durable audit trail.

---

## Step 08

**File:** `screenshots/Screen Shot 2026-05-14 at 12.16.47 AM.png`
**URL:** `clients.mindbodyonline.com/app/clients/100003245/documents`
**Feature area:** `clients_profile_documents`
**Inferred screen title:** Mary Behler — Documents tab with More dropdown EXPANDED (2 actions: Set as client lookup landing page / Merge duplicate clients)

### TEXT CONTENT (VERBATIM)

```
[Same as Step 07, More dropdown EXPANDED top-right:]
Set as client lookup landing page
Merge duplicate clients
```

### UI ELEMENTS / VISUAL MARKERS

- **More dropdown** (top-right of cockpit, persistent across all 8 tabs) shows **2 destination-level actions:**
  - `Set as client lookup landing page` — UI personalization: navigate-to-this-tab when opening this client (user-pref, not client-pref)
  - `Merge duplicate clients` — administrative action: combine two client records (the canonical client-identity dedup operation per pre-marker bucket 8 / Knox marker 11 "client merge unmask audit workflow")

### ARCHITECTURAL OBSERVATIONS

**More menu is a per-cockpit toolbox, not per-tab.** Same actions appear regardless of which 8-tab is active. Implies the menu is rendered at the cockpit shell level above the tab content.

**Merge Duplicate Clients** is THE canonical PII / Identity-grade operation. Per Knox marker 11 (chat lines ~27890-27982): merge-as-audit-workflow with multi-step confirmation + result preview + audit log entry. This is the surfacing of system map 1J.1-1J.9 (identity precedence + relationship integrity). For OMNI: merge must be:
- Reversible-with-record (event_log retains both pre-merge identity rows)
- Conflict-explicit (when merging, conflicts in indexes / membership / etc. surface UI to user)
- Audit-trail-bound (DL-14 event envelope: who merged whom, when, with what reasoning)

**Set as client lookup landing page** = per-user UI preference (NC's pref to land on Documents tab when opening clients). Substrate primitive: per-user-per-resource navigation preferences. Saved in a small `user_ui_preferences` table.

---

## Step 09

**File:** `screenshots/Screen Shot 2026-05-14 at 12.17.05 AM.png`
**URL:** `clients.mindbodyonline.com/app/clients/100003245/documents`
**Feature area:** `clients_profile_documents`
**Inferred screen title:** Mary Behler — Documents tab with `Tag add` tooltip visible over tag icons in client header

### TEXT CONTENT (VERBATIM)

```
[Same as Step 07/08, but hovering on the tag-icon area in the client-header right-side:]
Tag add (tooltip)
```

### UI ELEMENTS / VISUAL MARKERS

- **Tooltip `Tag add`** confirms the two small icons in the client header top-right area (next to phone number, seen in every Batch 10 + Batch 11 client cockpit screen) are a **Tag-add affordance** — staff can apply tags to a client from anywhere in the cockpit.
- Combined with Batch 10 Row 62 Client Directory filter "Tagged clients only (1)" — tags are first-class client-attribute primitive, queryable in directory.

### ARCHITECTURAL OBSERVATIONS

**Client tagging is a 1-to-many free-form labeling primitive.** Substrate:
- `client_tag { id, name, color, created_by_staff_id, created_at, brand_id }` (tags org-scoped)
- `client_tag_assignment { id, client_id, tag_id, assigned_by_staff_id, assigned_at }` (join table)

Affordances: directory-level filter + per-cockpit assignment. OMNI substrate should mirror this with:
- Tag values are org-defined enums (configurable via Settings)
- Tags are NOT mutually exclusive (multi-tag per client)
- Tags are search-indexable (low-cardinality, suitable for inverted index)
- Tags carry color/icon metadata for visual distinction (per Knox marker 3 "alerts and provider alerts as typed conditions" pattern — generalize to tags)

**Tags vs Client Indexes (Batch 10 Row 62):** Client Indexes ("Massage Pressure / Music Preference / Reason for visiting") were CONFIGURABLE multi-value enum dropdowns. Tags are simpler flat labels. They are **distinct primitives**:
- **Tags** = lightweight binary flags ("VIP", "do not contact", "high LTV")
- **Client Indexes** = structured taxonomies with predefined values per axis ("Massage Pressure: Light / Medium / Firm")

OMNI substrate should preserve this distinction. Tags are universal client-facing labels; Indexes are clinical/operational taxonomies.

---

## Step 10

**File:** `screenshots/Screen Shot 2026-05-14 at 12.17.42 AM.png`
**URL:** N/A (modal dropdown, no URL change)
**Feature area:** `staff_identity_dropdown`
**Inferred screen title:** Top-right user (Nicholas Crawford) profile dropdown EXPANDED — multi-level identity / subscription / ownership menu

### TEXT CONTENT (VERBATIM)

```
[Top-right NC avatar clicked, dropdown panel visible:]

Nicholas Crawford
Site ID: 411894

Account Information
Payments Portal
Mindbody Subscription
Location Owner
Log out of Mindbody Apps

[Separator]

→ Sign Out
```

### UI ELEMENTS / VISUAL MARKERS

- **Header** displays 2 identity facts:
  - `Nicholas Crawford` = the logged-in user's display name (single physical person)
  - `Site ID: 411894` = the Mindbody business identity (the clinic's tenant ID)
- **5 menu items:**
  1. `Account Information` — user-personal-account settings (user-scope)
  2. `Payments Portal` — Mindbody's BILLING portal for the clinic (clinic-scope, ops billing — Mindbody charging the clinic for Mindbody, not the clinic charging customers)
  3. `Mindbody Subscription` — the clinic's Mindbody software plan (clinic-scope, SaaS subscription tier)
  4. `Location Owner` — multi-location ownership settings (per-location-scope, brand-aggregator)
  5. `Log out of Mindbody Apps` — sign out from ALL Mindbody mobile/desktop apps (multi-device cross-app sign out)
- **Separator** + `Sign Out` — local-device-only sign out

### ARCHITECTURAL OBSERVATIONS

**Mindbody's identity model has THREE concentric scopes visible here:**
1. **User-scope** = personal Mindbody account (Account Information). Identified by user_id; persists across clinics user works for.
2. **Site-scope** = the clinic tenant (Site ID 411894). All cockpit data, settings, subscriptions, branding flow from this. Like an `org_id` in OMNI's multi-tenancy.
3. **Owner-scope** = a multi-location brand owner. The `Location Owner` menu is only present if the user owns multiple Mindbody sites; it's a parent-of-sites concept.

This concretely maps to:
- OMNI system map 1U (multi-tenancy) + radar zones 79-88 (federation)
- Q5 (capability flags per brand/clinic mapping) — clinics ARE the unit of capability scoping. Owner-scope is the federation tier above clinics.

**`Payments Portal` vs `Mindbody Subscription` separation** confirms Mindbody splits:
- Payments Portal = the BILLING + revenue collection portal (where the clinic sees its merchant-processing payouts)
- Mindbody Subscription = the SaaS plan the clinic pays for (how much the clinic owes Mindbody)

These are conceptually opposite directions of money flow:
- Clinic ← Merchant Processor (Payments Portal): revenue inflow from end customers via Mindbody-as-PSP
- Clinic → Mindbody (Mindbody Subscription): outflow to Mindbody for SaaS access

OMNI parallel: substrate must distinguish:
- **External commerce** (clinic ↔ patients) = primary commerce ledger
- **Platform billing** (clinic ↔ OMNI/Mindbody) = SaaS subscription management

Both billable, but in opposite directions. Different ledger systems entirely.

**`Log out of Mindbody Apps`** = cross-device session termination. Implies Mindbody has device-tracking + multi-app SSO session state. For OMNI: aligns with system map 1J.10 enforcement plan + auth.users device-token + revoke-all-sessions pattern.

---

## Cumulative Batch 11 findings (additive to handoff findings 1-15)

### 16. Client cockpit projects FOUR distinct ledgers
The 8 cockpit tabs split into 4 ledger types:
- **Identity ledger** (Client Home / Client Info — Batch 10) — who is this person
- **Activity ledger** (Schedule / Visits — Batch 10 + 11 Step 01) — what they did / are doing
- **Commerce ledger** (Purchases / Account Details — Batch 11 Steps 02-06) — what they paid / what's owed
- **Documents ledger** (Documents — Batch 11 Steps 07-09) — what files / forms attach to them

Each ledger is independently sourced from substrate (NOT a single user table). Layer 2 Section A entity model must reflect this 4-ledger split. (Aligned with Q3 4-entity split + Knox marker 3 client cockpit enumeration.)

### 17. Vocabulary trap: "Inactive" pricing options are actually UNUSED but VALID
Mindbody's Inactive label on Step 04 entitlements means `remaining > 0 AND not yet redeemed` — NOT "expired." OMNI must use clearer naming: `unused` / `redeemed` / `expired` / `voided`.

### 18. Rolling-contract autopays use template-expansion, not pre-materialization
Step 06 shows 11 synthetic future rows for month-to-month BH+ Elite contract. OMNI substrate should NOT materialize 12 months ahead; materialize per billing cycle within ~7 days of run-date. Reduces table size ~12x.

### 19. Mindbody splits Payment vs Mindbody-Subscription billing
Step 10 user dropdown confirms `Payments Portal` (clinic ↔ patients revenue) and `Mindbody Subscription` (clinic ↔ Mindbody SaaS billing) are DISTINCT directions of money flow with separate UI surfaces. OMNI substrate must mirror this separation: external commerce vs platform billing are different ledger systems.

### 20. Three concentric identity scopes (User / Site / Owner)
Step 10 confirms Mindbody's identity layering:
- User (Nicholas Crawford, persistent across sites)
- Site (411894, the clinic tenant)
- Owner (multi-location brand parent)

Maps to system map 1U multi-tenancy + radar federation zones. OMNI capability layer must support all three scopes (per-user `requireCapability` + per-org RLS + per-brand federation).

### 21. New payment method discovered: `Comp` (24th)
Step 02 Purchases tab payment method `Comp` (complimentary/waived) was NOT in the Batch 9 23-method enumeration. Total enumerated: **24 payment methods**. Likely per-clinic capability-flag toggled (Q5 evidence).

### 22. Visits and Appointments are SEPARATE sub-tabs within the same tab
Step 01 Visits sub-tab nav: `Visits / Logins / Appointments / Cancellations` — implies Mindbody's UI projects Appointments (booking grain, all lifecycle states) and Visits (rendered grain, completed) as separate UI projections of (probably) the same underlying Appointment table. **This is concrete evidence supporting Q1 encounter container architecture deferment** — Mindbody achieves the dual projection via VIEW-level filter on a single table, not separate tables. OMNI Q1 resolution should weigh this.

### 23. Per-line refund pathway with parent-sale preservation
Step 02 Purchases tab `Return / Void` Actions = per-line-item refund (not per-sale). Sale (commerce_order) → Lines (commerce_order_lines) → per-line refundability. Aligned with OMNI doctrine.

### 24. Merge Duplicate Clients lives in cockpit-level More menu
Step 08 confirms client merge is per-cockpit operation, not buried in Settings. Per Knox marker 11 — merge-as-audit-workflow. OMNI must implement this as DL-14 audit-stamped operation with conflict-explicit UI and reversibility.

### 25. Tags vs Client Indexes are distinct primitives
Step 09 Tag-add tooltip + Batch 10 Row 62 Client Indexes (Massage Pressure / Music Preference / Reason for visiting) are NOT the same:
- Tags = flat free-form labels (binary applied/not)
- Indexes = structured taxonomies with org-defined value sets

OMNI substrate keeps these separate: `client_tag_assignment` vs `client_index_value`.

### 26. Edit-before-run + Force-run-now pattern for scheduled autopays
Step 05 affords inline edit of future autopay rows + force-run-now button. OMNI substrate idempotency contract (system map 1I.6) must guarantee: a row force-run-now manually then auto-running at scheduled date doesn't double-charge. Per-row attempt-once idempotency key.

---

## End of Batch 11

Next batch: rows 112-N starting at `Screen Shot 2026-05-14 at 12.18.34 AM.png`. Per chat nav map, Knox marker 6 (settings as OS) territory is likely entered around mid-batch (Staff / Settings / Memberships admin / Provider Profile surfaces).
