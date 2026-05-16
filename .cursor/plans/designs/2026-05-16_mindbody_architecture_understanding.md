# Mindbody Architecture Understanding — Layer 2 Synthesis

**Phase B.5 Step N+1 deliverable**
**Date:** 2026-05-16
**Source layers:** raw ingestion at [.cursor/plans/ingestion/mindbody/](../ingestion/mindbody/) (163 screenshots across 17 raw capture files mindbody_04 through mindbody_21 + 5 supplemental raw files + manifest + chat nav map)
**Status:** Layer 2 — agent's first-pass synthesis of Mindbody's architecture inferred from raw ingest layer. NOT OMNI-flavored doctrine yet; that's Phase B.5+.

---

## Reading order

This document is THE Layer 2 deliverable. It synthesizes 185+ cumulative architectural findings from the raw ingestion layer into 13 navigable sections (A–M). Every claim cites raw-capture-file + manifest-row + chat-nav-line-range.

For DEEP context behind any claim, traverse to the cited raw capture file. For the FULL audit trail, traverse to the manifest.

This Layer 2 does NOT amend doctrine. Phase B.5+ doctrine sharpening + Phase 0 brain audit will use Sections G + H to scope the work.

---

## Knox + user joint discipline reminder

Per [phase_b5_mindbody_ingestion_4db27449.plan.md](../phase_b5_mindbody_ingestion_4db27449.plan.md) "Knox direction note (2026-05-15 evening, locked)":
> "Preserve everything. Move duplicates out of the way, don't delete them. Create a manifest, raw ingestion files by feature area, then synthesize into Layer 2. We need full screenshot/chat granularity available later, not just a polished summary."

Per [.cursor/plans/ingestion/mindbody/mindbody_open_questions_raw.md](../ingestion/mindbody/mindbody_open_questions_raw.md):
> Q1 (encounter container architecture) is **EXPLICITLY SHELVED** for Phase B.5+ doctrine sharpening. Layer 2 does not resolve it.

5 open questions (Q1-Q5) are cited where Layer 2 evidence is relevant; they are NOT resolved here.

---

## Section A — Entity model

### A.1 Core entities surfaced (with raw capture citations)

| Entity | Raw capture refs | Substrate evidence | Key cross-refs |
|---|---|---|---|
| **Brand / Site** | mindbody_11 Step 10; mindbody_21 Step 07 | Site ID 411894 = Bloom Health tenant; multi-site switcher in More menu | system map 1U multi-tenancy |
| **Location** | mindbody_15 Steps 01,03; mindbody_16 Step 06 | location_type enum {physical "Bloom Health" / virtual "Online Store"}; per-location settings | system map 1U |
| **Staff** (multi-typed) | mindbody_14 Steps 07-10; mindbody_13 Step 10; mindbody_15 Step 01 | Individual + Team ("Our Team") + Role ("Front Desk") via staff_type discriminator; per-staff 8+ capability flags (Desk staff / Provider appointments / Provider group lessons / Sales Rep / Followups / Commissions / Tips) | DL-14 actor; system map 1D auth.capabilities |
| **Permission Group** | mindbody_16 Step 05 | 5 groups per brand (External / Front Desk / Manager / Service Provider / Social Media Manager) with `<Brand> \| <Name>` naming; staff_permission_group_assignment join | DL-14 + system map 1D |
| **Client** | mindbody_10 Steps 02-08; mindbody_18 Step 04-10 | 8 cockpit tabs (desktop) / 4 tabs (mobile) reflecting 4 ledger projections (identity / activity / commerce / documents); 12+ cockpit sections in mobile | DL-14; system map 1J |
| **Client custom metadata (4-tier)** | mindbody_12 Step 04; mindbody_15 Step 07,08 | Required Fields + Client Indexes (axes) + Client Index Values (per-axis values) + Client Form Custom Fields | system map 1F |
| **Emergency Contact** | mindbody_18 Step 05 | 4-field substrate (Name/Phone/Email/Relationship) | system map 1J |
| **Service Category** | mindbody_12 Steps 05-07; mindbody_20 Step 05 | 14 categories at Bloom Health with non-contiguous numeric prefix sort (1./2./3./... 12./G)./X)); category-level admin operations (6 actions) | marker 5 |
| **Schedulable Service / Appointment Type** | mindbody_12 Step 10; mindbody_13 Steps 01-02 | numeric ID 88 = BH HydraFacial; 6 required fields (Name/Duration/Category/Capacity/# deducted/Sort order) + ~25 optional; is_addon flag collapses Add-Ons into same table | Q3 / Q4 |
| **Add-on** | mindbody_5 Step 60-66 (B5); mindbody_12 Step 10 | Same `service` table with is_addon=true OR sibling table (OPEN per Q3); independent rules (add time/price/resource/clinical clearance/inventory) | Q3 |
| **Pricing Option / Billable Item** | mindbody_13 Steps 03-09; mindbody_14 Step 02 | numeric ID 101489; **4-type taxonomy** (Single Session / Multiple Sessions / Unlimited Sessions / Autopay/Contract); 13+ columns per pricing option; **238 total** at Bloom Health; **Botox 7-tier** workaround | Q3 evidence |
| **Service↔PricingOption Assignment** | mindbody_13 Step 06 | N-to-N join table; Disassociate (per-service unlink) vs Deactivate (global) | Q3 |
| **Contract / Autopay** | mindbody_11 Step 04-06; mindbody_19 Step 02 | BH+ Elite Month-to-Month rolling autopay; same substrate as Pricing Options via `setAsPackage=1` flag in legacy ASP URL (mindbody_16 Step 11) | Q3 |
| **Package** | mindbody_16 Step 11 | Mixed-type bundle (5+ item types: service/product/pricing_option/gift_card/contract); shares Contract substrate | Q3 |
| **Gift Card** | mindbody_16 Step 10 | Price-value decoupling (promotional gift cards); member-only eligibility option; staff-set-price-independently flag | system map 1F + Layer 2 J |
| **Promo Code** | mindbody_16 Step 09 | 13+ columns: name/code/discount type/amount/apply to autopays/activation/expiration/max uses/days after close/online sales/valid days mask/promo scope/discontinued | system map 1F |
| **Tip** | mindbody_21 Step 02 | 1st-class commerce line item ($20 tip on $50 service); commerce_order_line { type='tip' } | Q3 expansion |
| **Account Payment** | mindbody_15 Step 10 | account credit/debit substrate; appears in Pricing settings 9-page taxonomy | marker 4 + Q3 |
| **Retail Product** | mindbody_14 Step 06 | DISTINCT substrate from Pricing Options: 9 columns (SKU 10-digit / Retail Price / Online Price / Our Cost / Active / Sell online / Modified / Created with audit actor / ★ favorite); 100+ products at Bloom Health | Q3 4th catalog substrate |
| **Suppliers + Purchase Orders + Payment Terms** | mindbody_15 Step 09 | Full ERP-adjacent AP substrate (Net-N payment terms) | Layer 2 J |
| **Room / Resource** | mindbody_settings_room_requirements_raw.md (pre-existing) + mindbody_5 referenced + mindbody_15 Step 01 | 132-service × room matrix substrate; Room Requirements page in Settings; Rooms and Resources page in General settings | user feedback gap #1 |
| **Appointment** (Schedulable instance) | mindbody_5 row 60-61; mindbody_17 Steps 05-09 | 12-state lifecycle (created/modified/confirmed/arrived/checked-in/completed/early-cancelled/late-cancelled/no-show/rescheduled/prebooked/locked-after-completion); multi-flag stack (Confirmed AND Arrived simultaneously); cross-actor edit normal (NC created, PG modified post-completion) | DL-15 + Q1 |
| **Visit** (rendered projection) | mindbody_11 Step 01 | Visits tab is VIEW projection of Appointment WHERE state=completed; Appointments tab is full lifecycle; Cancellations tab is filtered subset | Q1 |
| **Encounter Container** | OPEN Q1 — shelved | Mindbody collapses encounter into Appointment with multi-state flags; OMNI Q1 to resolve whether to split | Q1 |
| **Encounter Profile** | OPEN Q1 — shelved | Knox proposed 9-profile enum (async_review/virtual_visit/phone_visit/office_visit/office_visit_with_minor_procedure/procedure_encounter/surgical_case/resource_only_session/internal_event) per mindbody_to_omni_direction_raw.md Turn 5 | Q1 |
| **Sale / Order** | mindbody_19 Step 05; mindbody_21 Step 02 | Sale_ID (e.g., 148904, 149163) + Recipient + Sale Date + Sold By Actor + Subtotal + Tax + Total + Payment Method + 1-to-N Lines | marker 2 |
| **Sale Line** | mindbody_11 Step 02; mindbody_19 Step 02 | Per-line description + price + quantity + discount + tax + amount + per-line Return/Void action; "154 Items $725" bulk-sale outlier confirms 1-to-N high cardinality | marker 2 |
| **Refund / Return Sale** | mindbody_19 Steps 07-08; mindbody_21 Step 04 | "Return Sale ID" red label; refund destination defaults to original payment method; Add back to inventory toggle; reason for return required | marker 4 |
| **Payment Method (24+ enum + Comp + Comp/Guest)** | mindbody_8-9; mindbody_11 Step 02; mindbody_21 Step 04 | Federation of 25+ integrations: 4 card variants / cash / check / Account / Gift card / Other / CareCredit / GreenSky / Allē / Treatment Deposit / Venmo / Pre-Paid / PayPal / Zelle / Aspire / BH+ Member Discount / New Patient Special / ClassPass / Referral Discount / Comp / Comp/Guest | Q5 capability per-clinic |
| **Discount Program** | mindbody_13 Step 09 | 4 programs (GOLD MEMBERS 10% / VIP INJECTABLES 40/30/10 rotating / ULTRA 25/25/10 / Coolsculpting VIP 40); applied to pricing options via multi-select | Q5 |
| **Membership Tier** | mindbody_16 Step 06 | 8+ tiers at Bloom Health: BH+ (Elite/Platinum/Ultra/Hormone Balance) / Coolsculpting VIP 40 / GOLD MEMBERS / Non-Member / ULTRA 25/25/10 | Q3 |
| **Suspension** | mindbody_16 Step 03 (Suspension Types); mystery file row 163 (suspension to date field) | client_suspension { id, client_id, suspension_type_id, start_date, end_date, reason } | Q3 |
| **Intro Offer** | mindbody_14 Step 04 | One-time-per-client eligibility; new-client campaign substrate | Q3 |
| **Staff Availability Window** | mindbody_15 Steps 02-03 | 4-axis primitive (What/Where/When/Other-Privacy); multi-entry-per-day; mixed recurring + one-time-override; 3-enum privacy | DL-15 |
| **Note** (multi-typed substrate, 5+) | mindbody_5 row 60; mindbody_18 Step 10 | appointment notes / formula notes / per-cart-line notes / per-payment notes / client-level notes / Contact Logs / per-staff Private notes / Red alert text / Yellow alert text — 8+ notes substrates total | Q3 |
| **Tag (Client Tag)** | mindbody_12 Step 09; mindbody_15 Step 03 | Lightweight binary labels per client; org-scoped tag library; queryable in directory; distinct from Client Indexes (structured taxonomies) | system map 1J |
| **Client Form** (template + assignment) | mindbody_11 Step 07; mindbody_15 Step 01 | 2-step substrate: form template (admin Settings) → assignment to client (Documents tab); VIEW LOG column for submission audit trail | DL-14 + Q3 |
| **ICD Code library** | mindbody_12 Step 04 | Mindbody clinical coding substrate; admin entry in Client Directory More menu; OMNI clinical-coding-substrate-DL flag for Phase B.5+ | Layer 2 G |
| **Receipt** (template + rendered PDF) | mindbody_19 Step 06 | Brand header (address/phone/URL) + sale details + signature line + agreement text + footer; data corruption visible ($196,365 line vs $159 subtotal) | system map 1H |
| **Autopay Schedule Row** | mindbody_11 Step 05-06 | Per-future-billing-event record; mutable before run; force-run-now affordance; template-expansion (not pre-materialization) for rolling contracts | DL-15 + Q3 |
| **Autopay History** | mindbody_11 Step 04 | Immutable history of past autopay runs; companion to Autopay Schedule | marker 4 |
| **Audit Event** | mindbody_5 row 60-61; mindbody_19 Step 06 | Actor + timestamp on appointment edits + sale records; substrate-level audit trail | DL-14 |

### A.2 Identity model (3 concentric scopes)

Per mindbody_11 Step 10 + mindbody_21 Step 07:
- **User-scope** = personal Mindbody account (persistent across sites)
- **Site-scope** = clinic tenant (Site ID 411894 = Bloom Health)
- **Owner-scope** = multi-location brand parent

Maps to OMNI system map 1U multi-tenancy + radar federation zones 79-88.

### A.3 Dual ID schema problem

Mindbody uses BOTH numeric IDs (legacy ASP, e.g., service=88, pricing_option=101489, staff trnID=100000047) AND UUIDs (modern, e.g., staffUserID=68bf28d659198259cf98ab00). Migration debt visible in URL.

**OMNI substrate**: UUID-only per FOUNDATIONAL_ARCHITECTURE.

### A.4 Q3 4-entity split SCOPING (concrete from evidence)

Knox's original 4-entity split per [mindbody_to_omni_direction_raw.md](../ingestion/mindbody/mindbody_to_omni_direction_raw.md) Turn 1:
- Schedulable Service / Clinical Service / Billable Item / Resource-Inventory Item

**Cumulative evidence from Phase B.5 expands this to 12+ commerce primitives** (mindbody_15 Step 10 enumeration + cumulative Batches 6-21):
1. Schedulable Service (Appointment Type)
2. Clinical Service (overlapping with Schedulable but with clinical-coding hooks)
3. Pricing Option / Billable Item (4-type enum: Single Session / Multiple Sessions / Unlimited Sessions / Autopay/Contract)
4. Resource / Inventory Item (Retail Product separate substrate)
5. Add-On (separate from base service per Knox marker 5)
6. Contract / Autopay (Pricing Option type or sibling)
7. Package (mixed-type bundle, shares Contract substrate)
8. Gift Card
9. Account Payment
10. Tip (1st-class line item)
11. Promo Code (manual coupon)
12. Discount Program (auto loyalty tier)
13. Intro Offer
14. Treatment Deposit (modeled as Pricing Option)
15. Cancellation Policy fee (modeled as $0 Pricing Option per mindbody_20 Step 06)

Plus federation primitives:
16-40+. 25+ Payment Methods (federation of integrations)
41+. ICD Codes library
42+. Tax Rates (2-tier: Sales Tax + Tax 2)
43+. Revenue Categories (accounting axis, distinct from service category)

**OMNI Q3 decision needed at Phase B.5+ doctrine sharpening:**
- (A) Single billable_item table with type discriminator (Mindbody pattern) — denser, more nullable fields
- (B) Separate tables per type (1NF cleaner) — JOINs to aggregate
- (C) Hybrid: shared parent table + per-type subtype tables

---

## Section B — Event vocabulary

### B.1 Appointment lifecycle (12 states per pre-marker bucket 8 + mindbody_5 row 60)

`created` → `modified` → `confirmed` → `arrived` → `checked_in` → `completed` → `locked_after_completion`
Plus terminal: `early_cancelled` / `late_cancelled` / `no_show` / `rescheduled` / `entered_in_error`
Plus async: `prebooked` (future booking with future-state preview)

Multi-flag stacks (Confirmed AND Arrived simultaneously) imply boolean flags on appointment row, not single-state enum. DL-15 amendment territory.

### B.2 Sale lifecycle (substrate-derived)

`drafting (open ticket)` → `committed (subtotal-locked)` → `payment_pending` → `settled` → optionally `returned` (Return Sale ID).

### B.3 Autopay lifecycle (per mindbody_11 Step 05)

`scheduled` → `running` → `succeeded` / `failed` → optionally `retried` → optionally `skipped` / `removed`

Force-run-now affordance + edit-before-run combine into idempotency contract (system map 1I.6).

### B.4 Client lifecycle

`prospect` → `client` → `member (via contract)` → optionally `suspended` → optionally `merged-into-another` (reversible via Unmask).

Prospect Stages (mindbody_15 Step 06) = configurable lead-management stages.

### B.5 Entitlement (Pricing Option redemption) lifecycle

`purchased` → `activated (per activation strategy: on_sale_date / on_first_visit_after_purchase / on_custom_date)` → `redeeming (per visit)` → `fully_redeemed` OR `expired (per expires_after)` OR `voided (Return/Void)`.

Priority (Low/Medium/High) determines redemption order when multiple entitlements valid for same service.

### B.6 21-event Client Alert vocabulary (mindbody_16 Step 08)

Account Balance Threshold / Account Credit Notification (iDeal) / Arrivals in Threshold / Autopay Failed / Client Status / Contract Confirmation / Credit Card Expiration / Failed Auto Email / Followup Due / Liability Waiver / Low Session Alert / Missing Billing Information / Missing Required Fields / No Arrivals in Threshold / No Current Membership Or Pricing Option / No Visits in Threshold / Scheduling Suspended / Staff (Red) Alert / Unpaid Sessions Alert / Waitlist Confirmed / Yellow Alert.

**Per DL-14 + DL-16 (39 invariants CNS Event Envelope)**: this 21-event taxonomy is concrete substrate validation. OMNI CNS substrate must support 21+ event types at client-level, plus likely 20-30+ for appointment-side / commerce-side / staff-side. Total CNS vocabulary at Mindbody is 80+ event types.

Alert severity is 2-level enum (Red / Yellow) per mindbody_18 Step 09.

### B.7 Outbound communication events

Per mindbody_13 Step 09 (per-Pricing-Option auto-email triggers: Visits Count Remaining Low / Pricing Options Time Running Out) + mindbody_5 row 61 (Send Change Notification + Send confirmation email on appointment edit):

Outbound is CNS-orchestrated per DL-14 + system primitive #10 (outbound_jobs). Mindbody emits ~30+ distinct outbound trigger types tied to substrate state predicates.

---

## Section C — Configuration surface

### C.1 Settings master surface — 10 top-level sections (mindbody_15 Step 04 + mindbody_16 Steps 01-03)

1. **Communications & Marketing** — 7 sub-pages (News & Events / Notifications (Auto-emails) / Links / Appointment Reminders / Waitlist Notifications / Social Media / Studio Variables)
2. **Staff** — 3 sub-pages (Provider Permissions / Self Clock In / Time Clock Tasks)
3. **Clients** — 22 sub-pages (Membership Settings / Modify Tagged / Locate Duplicate / Merge Duplicate / Unmask Merged / Cancel Class+Appt Bookings / Self Check In / Data Privacy / No-Show/Late Cancel Fees / Required Fields / Prospect Stages / Relationship Types / Client Profile Custom Fields / Client Alerts / Client Indexes / Client Index Values / Client Types / Referral Types / Referral Subtypes / Contact Log Types / Client Statuses / Gender)
4. **Inventory** — 6 sub-pages (Purchase Orders / Inventory Tickets / Product Sizes / Product Colors / Suppliers / Payment Terms)
5. **Pricing** — 9 sub-pages (Pricing Options / Organize Pricing / Manage Sales / Promo Codes / Account Payments / Gift Cards / Contracts / Organize Contracts / Packages)
6. **General** — 11+ sub-pages (Locations and Mindbody App Listings / Rooms and Resources / Schedule a Closed Business Day / Client Forms / Logo and Colors / Contact Information / Account Language / Tax Rates / Room Requirements / **General Setup and Options** [master feature flag] / Words and Phrases / Client View Settings)
7. **Services** — 4 sub-pages (Class and Course Options / Appointment Options / Suspension Types / Active Appointment Times)
8. **Retail** — 5 sub-pages (Close out Data / Payment Methods / Revenue Categories / Revenue Subcategories / Product Revenue Categories)
9. **Mindbody Add-ons** — (sub-pages not enumerated)
10. **Classic Setup** — (legacy admin entries)

**~100+ settings sub-pages** total. Knox marker 14 "deeply configurable business rules engine" made literal.

### C.2 Required Fields dual-mode policy (mindbody_16 Step 07)

Each field has independent required-flag for:
- **Consumer Mode** (client-facing flows: online booking, self-registration)
- **Business Mode** (staff-facing flows: in-clinic admin)

Field-state is 3-enum (always_required / configurable_required / configurable_optional), not boolean. Email is greyed-permanently-required in Consumer Mode.

### C.3 General Setup and Options master feature flag (mindbody_16 Step 02)

Per Knox marker 6: THE master toggle system. Every domain-level flag lives here. Brand-level capability surface.

### C.4 Words and Phrases vocabulary customization

Per chat nav map cluster 1 + mindbody_16 Step 02: every UI label is org-overridable. Substrate: `brand_vocabulary_override { brand_id, original_word, override_word }`.

### C.5 Client View Settings (Consumer Mode customization)

Per mindbody_16 Step 02: per-brand customization of consumer-facing UI tabs and navigation.

### C.6 Accounting Basis (mindbody_21 Step 06)

**CRITICAL** brand-level substrate primitive: Accrual basis vs Cash basis. Affects revenue recognition for prepaid Pricing Options. Substrate: `brand.default_accounting_basis ENUM('accrual', 'cash')`.

### C.7 Per-clinic auto-fill defaults

Per mindbody_12 Step 03: New Client form auto-populates City "Bloomfield Hills" / State Michigan / Country US. Substrate: per-org default-context-values.

### C.8 Per-staff capability flags (mindbody_14 Step 09)

8+ flags per staff: Desk staff / Provider for appointments / Provider for group lessons / Sales Rep / Followups assignment / Earns commissions / Earns tips / Google Calendar connected / More».

Per system map 1D auth.capabilities: **2-layer capability model** = brand-level + staff-level.

### C.9 Permission Groups (mindbody_16 Step 05)

5 permission groups per brand: BH | External / Front Desk / Manager / Service Provider / Social Media Manager. With Edit/Add Groups admin operation. Likely substrate:
```sql
permission_group { id, brand_id, name }
permission_atom { id, name }
permission_group_atom_grant { permission_group_id, permission_atom_id, granted }
staff_permission_group_assignment { staff_id, permission_group_id }
```

### C.10 Q5 capability flags (per-brand vs per-staff)

Per [mindbody_open_questions_raw.md](../ingestion/mindbody/mindbody_open_questions_raw.md) Q5: per-brand capability flags (async messaging enabled / external-line enabled / scheduling enabled / room/resource scheduling / POS / memberships / Rx / labs / video visits) compose with per-staff capability flags (Desk staff / Provider appointments / Provider group lessons / etc.).

Status: OPEN. Layer 2 Section J + G must reason about whether existing OMNI capability layer covers + how 2-layer composes.

### C.11 Per-cart-mode capability scoping (mindbody_20 Step 07)

Walk-in cart mode: only Products + Gift Cards enabled; Services / Auto Pays / Bundles / Account Payments / Tips greyed (require client attachment). Substrate: `cart_capability_scope { cart_mode, allowed_catalog_categories }`.

### C.12 Multi-tenancy + federation surface

Per mindbody_21 Step 07 More menu (multi-site switcher) + mindbody_11 Step 10 (Site ID / Location Owner): user_site_access many-to-many supports staff working across multiple Mindbody-licensed clinics.

---

## Section D — Operational depth

### D.1 Conditional UI based on substrate state

- **mindbody_9 row 94**: Edit Appointment shows 2 tabs OR 3 tabs depending on whether the appointment has an entitlement attached.
- **mindbody_10 row 101**: per-row action menu shows 3 actions for future appointments vs 12 actions for today's appointments.
- **mindbody_18 (IMG_9132)**: bottom-sheet action variants depend on tapped time slot context.

**Pattern**: substrate state drives UI affordance availability. For OMNI: state machine determines valid affordances; UI renders only valid ones.

### D.2 Multi-flag lifecycle stacks

mindbody_5 row 60: Confirmed AND Arrived simultaneously. NOT a single state enum.

### D.3 Cross-actor edit normal

mindbody_5 row 61: NC (Nicholas Crawford) created, PG (Parrah Grundy) modified post-completion. Lock-after-completion is state-based gate, not actor-based.

### D.4 Service catalog mesh (9+ attributes per service)

mindbody_12 Step 09 hover popover: Capacity / Color / Deducted / Sort order. Plus default list view: Name / Duration / Price-or-range / Staff-eligibility-count / Bookable online. Plus Edit page (mindbody_12 Step 10): Description / Online Scheduling / Convert-to-add-on / Appointment category. Plus Pricing Option page (mindbody_13 Steps 07-09) shows 13+ more attributes. **Service substrate is 30+ columns wide.**

### D.5 4 independent composing booking axes

Per user feedback gap #1 + mindbody_12 Step 09 + mindbody_13 Step 10 + Pasted text (4) room requirements:
1. Service Capacity (1 per booking by default)
2. Staff Eligibility (per staff_service_assignment with prep/booking/finish times)
3. Room Requirement (per room_service_compatibility)
4. Resource Requirement (per resource per service)

Bookings require ALL 4 axes to align.

### D.6 3-component appointment block (mindbody_13 Step 10)

Per-staff-per-service: Prep Time + Booking Time + Finish Time. Total appointment block = sum. DIFFERENT per staff (more experienced staff might have shorter prep). DL-15 amendment territory.

### D.7 Entitlement attachment view on Edit Appointment (mindbody_9 row 94)

Conditional 3rd tab on Edit Appointment when entitlement attached. "Current pricing option: BH HydraFacial - Signature, 1 of 1 remaining, Exp 04/10/2027". Concrete Q3 evidence: Pricing Option ↔ Appointment is many-to-many via entitlement_assignment.

### D.8 Multi-tender split payment (mindbody_9 row 93)

Cash $245 + Check $621.50 = $866.50. 1-to-many payment_attempt rows on commerce_orders parent.

### D.9 Bulk-cancel admin substrate (mindbody_15 Step 06)

Cancel Class and Appointment Bookings page in Settings. Audit-trail-bound per DL-14.

### D.10 Multi-staff multi-service simultaneous appointments (mindbody_19 Step 10)

02/10/2026 12:30 PM: Dysport (Dr. Nicholas) + BH Signature Facial (Parrah) + NEO Red Light Therapy (Our Team) + Dermaplaning (Parrah) — 4 simultaneous appointments per client. User feedback gap #5 substrate evidence.

### D.11 Variable-quantity Botox 7-tier workaround (mindbody_14 Step 02)

CANONICAL user feedback gap #2 anchor. Mindbody creates SEPARATE Pricing Options per Botox quantity (20/30/40/50/60/64 units + Lip Flip + 3× Returning duplicates). OMNI substrate must implement `quantity_strategy` enum with `per_unit_quantity` to eliminate the 7-tier workaround.

### D.12 Botox-in-Products workaround (mindbody_8 row 87-88)

Botox modeled as Product with quantity multiplier ($14 × 20 = $280). Forced by Mindbody's lack of variable-quantity service substrate.

### D.13 Cancellation Policy as $0 Pricing Option (mindbody_20 Step 06)

Fee-charge substrate trick: late cancel/no-show fees charged by selling the "Cancellation Policy" $0 pricing option with a fee amount. Substrate: cancellation fees are commerce events, not separate substrate.

### D.14 Per-clinic Client Indexes (mindbody_10 row 62)

Massage Pressure / Music Preference / Reason for visiting — configurable per-clinic taxonomies. Per Q5 capability + Client Indexes substrate (4-tier: Required Fields / Indexes / Values / Form Custom Fields).

### D.15 Footer aggregations + per-resource projections

mindbody_11 Step 01 Visits tab footer: "Total visits: 1 Total hours: 0.75" — per-client roll-up auto-computed. Substrate: aggregations are substrate-derived projections.

### D.16 Audit-trail surfacing

mindbody_5 row 61 (Edit Appointment Created + Last Modified actors) + mindbody_14 Step 06 Retail Products (Created/Modified timestamps with audit actor initials NC/AS/RJ). DL-14 actor-stamped event envelope substrate primitives concrete.

### D.17 24-month autopay template-expansion (mindbody_11 Step 06)

11 synthetic future autopay rows shown when month-to-month contract expanded. Strategy: lazy-template-expansion (not pre-materialization). OMNI substrate efficiency win.

### D.18 Force-run-now + Edit-before-run pattern (mindbody_11 Step 05)

Mutable scheduled-billing with idempotency contract. System map 1I.6 substrate requirement.

### D.19 Receipt template substrate (mindbody_19 Step 06)

Brand header + sale details + signature line + agreement text + footer. `receipt_template { brand_id, header_html, footer_html, agreement_text }`.

### D.20 Data corruption case (mindbody_19 Step 06)

Receipt shows $196,365 for BH+ Elite line but Subtotal correctly $159. Either substrate corruption or rendering bug. OMNI must enforce price-line ≤ subtotal invariant.

### D.21 Payment Processing daily-card-network rollup (mindbody_20 Step 10 + mindbody_21 Step 01)

`payment_settlement { brand_id, date, card_network, transaction_count, total_amount, status }`. Settlement status enum (Settled visible).

### D.22 4+ actor kinds on sale records (mindbody_21 Steps 02-04)

staff_name (Parrah Grundy) / clinic_name (Bloom Health) / "Automatic Payment" / "System Generated" / "_ClassPass API_" — substrate enum.

### D.23 25+ Payment Methods federation (cumulative Batches 8-21)

Cumulative enumeration: Card Reader / Swipe card / Enter card / Saved Visa-MC / Cash / Check / Account / Gift card / Other Payment / CareCredit / GreenSky / Allē / Treatment Deposit / Venmo / Pre-Paid / PayPal / Zelle / Aspire / BH+ Member Discount / New Patient Special / ClassPass / Referral Discount / Comp / Comp/Guest + likely more.

Each is per-brand capability-flagged (mindbody_16 Step 03 Retail > Payment Methods admin).

### D.24 Anti-fraud constraint substrates (mindbody_21 Step 08)

`Disable Analog Swiper` toggle + `Don't Allow Additional Charge` toggle ("You won't be able to charge more than the total shown in the cart"). Per-clinic anti-fraud substrate primitives.

### D.25 Operational scope summary

Mindbody surfaces operate across at least 11 distinct concerns:
1. Scheduling (DL-15 territory)
2. CNS event taxonomy (DL-14 + DL-16)
3. Commerce ledger (Phase C territory)
4. Client identity + relationship (system map 1J)
5. Staff identity + capability (system map 1D + Phase B.5+ RBAC DL)
6. Settings as OS (system map 1F)
7. CRM + sales pipeline (mindbody_15 Step 06 Prospect Stages)
8. Inventory + ERP-adjacent AP (Layer 2 J)
9. Accounting integration (Accounting Basis + Revenue Categories)
10. PII + GDPR + merge/unmask (system map 1J + Knox marker 11)
11. Mobile-native integrations (Tap to Pay on iPhone)

OMNI must scaffold all 11 concerns from Day 0 (some shallow, some deep).

---

## Section E — User's 9 gaps with architectural root causes

Source: [.cursor/plans/ingestion/mindbody/mindbody_user_feedback_raw.md](../ingestion/mindbody/mindbody_user_feedback_raw.md).

| Gap | User's words | Architectural root cause | OMNI fix scope (preview) |
|---|---|---|---|
| **#1 Room/provider/resource independence** | "Need ability to control room vs provider vs resource… all independently, so that they can all align when needed" | Mindbody's `staff_service_assignment` + `room_service_compatibility` + `service.resource_requirements` are 3 separate substrates but UI scattered; no unified booking axis composer | DL-15 amendment: 4-axis-composer primitive (Capacity / Staff / Room / Resource); booking impossible if ANY axis unavailable; user feedback Section D.5 cross-ref |
| **#2 Intended visit vs actual treatment / variable-quantity Botox** | "We have to use botox as a 'product' so we can specify botox $14/unit then we type in 20 units" | Mindbody Pricing Option substrate lacks `quantity_strategy` enum; forces 7-tier per-quantity Pricing Options OR Botox-in-Products workaround | OMNI Pricing Option substrate: `quantity_strategy ENUM(fixed, per_unit_quantity, package_count, unlimited_period, subscription_recurring)` + `default_unit_price` field; eliminates 7-tier workaround |
| **#3 Subscriptions/memberships/POS/retail/gift cards/loyalty woven** | "Need to weave subscriptions, memberships (if those 2 are different entities, yes they might be?/), point of sale, retail, gift cards, loyalty rewards" | Mindbody surfaces 12+ commerce primitives in scattered admin sub-pages | OMNI commerce DL Phase C: unified 12+ primitive taxonomy with consistent admin surface |
| **#4 Progress notes attached to visits** | "Progres notes in mind body currently are not great. Consider how those get attached to visits" | Mindbody has 5+ notes substrates (appointment / per-cart-line / formula / per-payment / per-client / Contact Logs / per-staff Private notes / Red+Yellow alerts) — fragmented | OMNI: unified `note` substrate with `attached_entity_type` enum + provider-side rich-text editor; per system map 1J.10 enforcement |
| **#5 Procedure visits vs office visits vs sleep labs/cardio/endocrine/plastics** | "Mindbody is not designed for office or video visits, then dedicated surface for procedure rooms... we want to be able to service terms clinics, sleep labs, cardio groups, endocrine groups, plastic surgery groups" | Mindbody Appointment Type is flat — no encounter_profile discriminator | **Q1 OPEN** — encounter container architecture deferred to Phase B.5+. Knox proposed 9-profile enum (mindbody_to_omni_direction_raw.md Turn 5) |
| **#6 Cross-patient metrics** | "We'll need to track... metrics on everything about the visits" | Mindbody has Business Snapshot 6 KPIs + Payment Processing daily-card-network rollup + per-pricing-option auto-emails — but limited customization | OMNI: metric substrate is configurable rollups + DL-14 event-stream-derived |
| **#7 Hims-like weight loss attached to scheduled visits** | "How will we attach (or not attach) a Hims like weight loss plan to any scheduled visits" | Mindbody has no async path; everything is in-clinic appointment | OMNI per Q4 mode-per-service-line: `mode ENUM(async_first, schedule_required, hybrid, disabled_scheduler)` |
| **#8 Video visits + scheduled phone + ad-hoc** | "Video visits. scheduled phone 'visits'. Ad-hoc video visits" | Mindbody mobile supports ad-hoc availability/booking; Service Type enum includes Arrivals (drop-in) | OMNI: encounter_profile enum includes virtual_visit / phone_visit / async_review + Service Type expansion |
| **#9 Display new first-time visits** | "How do we display new, first time visits, if at all" | Mindbody has `Tagged clients only` filter + Required Fields dual-mode + Client Statuses + Profile creation date | OMNI: client lifecycle substrate with first_visit_date + tag-based filter affordances |

---

## Section F — Coverage matrix (Mindbody concept → OMNI doctrine bucket)

Format: COVERED (cite invariant) / GAP-doctrine (extension needed) / GAP-substrate-only / IMPROVEMENT-OPPORTUNITY (OMNI wins).

| Mindbody concept | OMNI bucket | Cite |
|---|---|---|
| Appointment 12-state lifecycle | COVERED — DL-15 invariants on lifecycle | DL-15 |
| Multi-flag stack (Confirmed AND Arrived) | GAP-doctrine — DL-15 amendment for flag composition | DL-15 |
| Cross-actor edit | COVERED — DL-14 actor-stamped event envelope | DL-14 |
| 4 independent booking axes (Capacity/Staff/Room/Resource) | GAP-doctrine — DL-15 amendment for multi-axis composer | DL-15 |
| 3-component appointment block (Prep/Booking/Finish) | GAP-doctrine — DL-15 amendment | DL-15 |
| Service substrate 30+ columns | GAP-substrate-only — substrate expansion under DL-15 | DL-15 |
| Pricing Option 4-type enum + 13+ columns | GAP-doctrine — new commerce DL (Phase C); Q3 expansion | Commerce DL |
| Add-on substrate decision | OPEN Q3 — same-table-with-flag vs separate | Commerce DL |
| Entitlement Activation Strategy 3-enum | GAP-doctrine — new commerce DL invariant | Commerce DL |
| Entitlement Redemption Priority | COVERED — FOUNDATIONAL_ARCHITECTURE entitlement resolution order | FOUNDATIONAL |
| 5 Scheduling Restrictions on Pricing Options | GAP-doctrine — DL-15 amendment for per-entitlement constraint substrate | DL-15 |
| 2 Auto-Email triggers per Pricing Option | COVERED — DL-14 outbound + system primitive #10 | DL-14 |
| Retail Product 4th catalog substrate | GAP-doctrine — new commerce DL | Commerce DL |
| Suppliers + Payment Terms + Purchase Orders ERP | GAP-doctrine — new ERP-adjacent DL (Phase D+) | Future DL |
| Gift Card substrate | GAP-doctrine — new commerce DL | Commerce DL |
| Promo Code 13+ columns | GAP-doctrine — new commerce DL | Commerce DL |
| 25+ Payment Methods federation | COVERED — system primitive #5 payment adapter; Q5 capability | system map 1I |
| Discount Programs incl rotating-tier | GAP-doctrine — new commerce DL | Commerce DL |
| Tip as 1st-class line item | GAP-doctrine — new commerce DL | Commerce DL |
| Package mixed-type bundle | GAP-doctrine — new commerce DL | Commerce DL |
| Contract / Autopay rolling | GAP-doctrine — new commerce DL with template-expansion strategy | Commerce DL |
| Sale-Line 1-to-N | COVERED — system map domain-table-discipline | system map |
| Return Sale / Refund destination | GAP-doctrine — new commerce DL with refund-routing invariants | Commerce DL |
| 21-event Client Alert vocabulary | COVERED + EXTENSION — DL-16 (39 invariants) + Phase B.5+ amendments to enumerate all 80+ event types | DL-16 |
| Alert 2-level severity | GAP-doctrine — minor DL-16 amendment | DL-16 |
| Settings as OS (10 sections, 100+ sub-pages) | GAP-doctrine — new settings-infrastructure DL | New DL |
| Required Fields dual-mode | GAP-doctrine — settings-infrastructure DL | New DL |
| 3-state required (always/configurable-required/configurable-optional) | GAP-doctrine — settings-infrastructure DL | New DL |
| Accounting Basis Accrual/Cash | GAP-doctrine — commerce DL invariant | Commerce DL |
| Revenue Categories (accounting axis) | GAP-doctrine — commerce DL + Layer 2 J accounting integration | Commerce DL |
| 2-tier tax (Sales Tax + Tax 2) | GAP-doctrine — commerce DL | Commerce DL |
| Multi-tenancy (User/Site/Owner 3 scopes) | COVERED — system map 1U + radar federation | system map |
| Per-cart-mode capability scoping | GAP-doctrine — minor amendment to capability layer | system map 1D |
| Permission Groups (5 per brand) | GAP-doctrine — new RBAC DL with permission_group + permission_atom substrate | RBAC DL |
| Per-staff 8+ capability flags | COVERED + EXTENSION — system map 1D + per-staff layer | system map 1D |
| Tag (Client Tag) vs Client Indexes | GAP-doctrine — system map 1J amendment | system map 1J |
| Emergency Contact 4-field substrate | GAP-substrate-only — substrate expansion under system map 1J | system map 1J |
| Suspension substrate | GAP-doctrine — minor commerce DL invariant | Commerce DL |
| Form template + assignment + VIEW LOG | COVERED — DL-14 + system map 1G consent | DL-14 |
| Merge/Unmask with full reversibility | COVERED — Knox marker 11; system map 1J.1-1J.9 | system map 1J |
| Data Privacy (GDPR/CCPA) | COVERED + EXTENSION — system map 1J + new privacy DL | system map 1J |
| ICD Codes library | GAP-doctrine — new clinical-coding DL (Phase B.5+ flag) | Clinical DL |
| Receipt template substrate | GAP-substrate-only — substrate under commerce DL | Commerce DL |
| Mobile-specific (Tap to Pay / drum-roll / cache / map links) | GAP-substrate-only — UI substrate, no DL | UI |
| Multi-modality (Appointments/Arrivals/Classes/Courses/Memberships) | GAP-doctrine — DL-15 amendment for service_type enum | DL-15 |
| Cancellation Policy as $0 Pricing Option | IMPROVEMENT-OPPORTUNITY — OMNI better with explicit cancellation_policy substrate | Commerce DL |
| Botox 7-tier per-quantity workaround | IMPROVEMENT-OPPORTUNITY — OMNI quantity_strategy enum eliminates | Commerce DL |
| Botox-in-Products workaround | IMPROVEMENT-OPPORTUNITY — OMNI clinical-grade structured commerce | Commerce DL |
| Encounter container architecture | OPEN Q1 — Phase B.5+ doctrine sharpening | Q1 / Phase B.5+ |
| Duplicate naming bug (no uniqueness constraint) | IMPROVEMENT-OPPORTUNITY — OMNI enforces uniqueness per (brand, category, name) | Commerce DL |
| Data corruption visible in receipt | IMPROVEMENT-OPPORTUNITY — OMNI enforces price-line ≤ subtotal invariant | Commerce DL |
| Brand-level vocabulary mismatches (Inactive ≠ unused) | IMPROVEMENT-OPPORTUNITY — OMNI naming discipline | UI / docs |

---

## Section G — Refined doctrine sharpening scope

**Status of all OPEN questions: shelved per [.cursor/plans/ingestion/mindbody/mindbody_open_questions_raw.md](../ingestion/mindbody/mindbody_open_questions_raw.md). Phase B.5+ doctrine sharpening resolves.**

### G.1 DL-15 amendments needed (current 28 invariants)

- **Amendment 1**: Multi-flag lifecycle stack (Confirmed AND Arrived simultaneously) — flag composition invariants
- **Amendment 2**: 4-axis booking composer (Capacity × Staff × Room × Resource) — invariants for cross-axis alignment + booking impossibility if any axis unavailable
- **Amendment 3**: 3-component appointment block (Prep + Booking + Finish) — total-block = sum invariant
- **Amendment 4**: Service Type enum expansion (Appointments / Arrivals / Classes / Courses / Memberships)
- **Amendment 5**: 5 Scheduling Restrictions on Pricing Options (Max Sessions / Disallow Consecutive Days / Daily Restriction / Day of Month Scheduling Opens / Time Access) — invariants for per-entitlement constraint enforcement
- **Amendment 6**: Staff Availability Window 4-axis primitive (What/Where/When/Other-Privacy) — replaces simpler availability invariants if any
- **Amendment 7**: Recurring + one-time-override availability composition

### G.2 New DLs to draft (Phase B.5+ doctrine sharpening sequencing)

#### G.2.1 Commerce DL (Phase C territory)

Scope: 12-15 commerce primitive substrate spine.

Primitives to encode:
1. Pricing Option / Billable Item (4-type enum + 13+ columns)
2. Entitlement Activation Strategy (3-enum)
3. Entitlement Redemption Priority (Low/Medium/High)
4. Contract / Autopay with template-expansion (not pre-materialization)
5. Package mixed-type bundle (shares Contract substrate)
6. Gift Card (price-value decoupling + member eligibility)
7. Promo Code (13+ columns: channel + day-mask + scope-type + max-uses)
8. Discount Program (rotating-tier patterns 40/30/10)
9. Intro Offer (one-time-per-client eligibility)
10. Treatment Deposit (Pricing Option variant)
11. Tip (1st-class commerce line item)
12. Sale / Order parent + Sale Line 1-to-N child
13. Refund / Return Sale with refund-destination routing
14. Payment Method federation (25+ enum + per-clinic capability)
15. Tax Rates (2-tier: Sales Tax + Tax 2)
16. Revenue Categories (accounting axis distinct from service category)
17. Accounting Basis (Accrual vs Cash basis — brand-level)
18. Cancellation Policy (fees as commerce events vs separate substrate)
19. Suspension substrate

Invariants to lock:
- Price-line ≤ Subtotal invariant (per mindbody_19 Step 06 data corruption case)
- Refund destination defaults to original payment method
- Add-back-to-inventory on refund (per refund-line config)
- Service ↔ Pricing Option many-to-many via assignment join (Disassociate vs Deactivate)
- Pricing Option ↔ Discount Program many-to-many
- Pricing Option ↔ Membership Tier many-to-many for eligibility
- Sale uniqueness within clinic
- Refund per-line scoped to parent-sale with audit trail

#### G.2.2 Settings-Infrastructure DL (new DL territory)

Scope: settings-as-OS pattern.

Primitives to encode:
- 10 settings sections + ~100 sub-pages substrate
- General Setup and Options master feature flag
- Words and Phrases vocabulary override
- Client View Settings (consumer-facing UI customization)
- 4-tier client-metadata substrate (Required Fields / Indexes / Index Values / Form Custom Fields)
- 3-state required-field enum (always_required / configurable_required / configurable_optional)
- Dual-mode (Consumer vs Business) required field policy
- Per-clinic auto-fill defaults
- URL-addressable deep-links per sub-page
- Per-cart-mode capability scoping

Invariants:
- Every settings sub-page is URL-addressable with stable identifier
- Settings substrate is brand-scoped (per system map 1F)
- Settings changes generate DL-14 audit events
- Settings cannot violate doctrine invariants (e.g., can't disable critical/transactional comms)

#### G.2.3 RBAC DL (new DL territory)

Scope: granular provider permissions.

Primitives to encode:
- Permission Group (5 per brand: External / Front Desk / Manager / Service Provider / Social Media Manager)
- Permission Atom (granular feature flag)
- Permission Group ↔ Permission Atom grants (many-to-many)
- Staff ↔ Permission Group assignment (many-to-many)
- Per-staff 8+ capability flags (Desk staff / Provider appointments / Provider group lessons / Sales Rep / Followups / Commissions / Tips / Google Calendar)
- 2-layer composition (brand-level capability flags AND staff-level capability flags)

Invariants:
- Brand-level capability disables UI surface; CNS contract admission still allowed (per Q5 sub-question Q5b)
- Per-staff capability acts as filter on top of permission group atoms
- Audit trail on permission changes

#### G.2.4 Clinical-Coding DL (Phase B.5+ flag, may be Phase D)

Scope: ICD Codes + clinical taxonomy.

Primitives:
- ICD-10 / ICD-11 code library (org-scoped configurable)
- Diagnosis assignment to Encounter
- Procedure code (CPT) assignment to Encounter line items

Open: Q1 encounter container architecture impacts where these attach.

### G.3 DL-16 amendments needed (current 39 invariants)

- **Amendment 1**: 21+ Client Alert event types enumerated as concrete CNS event vocabulary (mindbody_16 Step 08)
- **Amendment 2**: Alert 2-level severity enum (Red / Yellow) as `client_alert.severity ENUM`
- **Amendment 3**: Outbound communication 30+ trigger types (Visits Count Remaining Low / Time Running Out / Send Change Notification / etc.)
- **Amendment 4**: Multi-actor envelope (4+ actor kinds: staff / clinic / system / 3rd-party-integration named like `_ClassPass API_`)

### G.4 Phase B.5+ doctrine sharpening sequencing

1. **DL-15 amendments first** (highest pre-existing doctrine; lowest scope risk)
2. **DL-16 amendments** (event vocabulary enumeration)
3. **Commerce DL draft** (Phase C kickoff)
4. **RBAC DL draft** (kicks off RBAC slice)
5. **Settings-Infrastructure DL draft** (gates substrate slice with config management)
6. **Q1 encounter container architecture resolution** (Phase B.5+ joint review with Opus + Knox + user)
7. **Clinical-Coding DL draft** (Phase D flag; may be deferred)

---

## Section H — Refined substrate slice scope

Driven by Section G doctrine sharpening + Section A entity model.

### H.1 Substrate slice scope MUST include (Day 0 substrate)

Tables (substrate primitives — minimum):
- `brand` + `site` + `location` (multi-tenancy 3-scope)
- `staff` (with staff_type enum: individual / team / role / system)
- `staff_capability` (per-staff 8+ boolean flags)
- `permission_group` + `permission_atom` + `permission_group_atom_grant` + `staff_permission_group_assignment`
- `client` + `client_address` (typed 1-to-N) + `client_phone` (1-to-N typed) + `client_emergency_contact`
- `client_tag` + `client_tag_assignment`
- `client_metadata_axis` + `client_metadata_axis_value` + `client_metadata_assignment`
- `client_alert` (with severity Red/Yellow + 21-event-type alert)
- `service_category`
- `service` (appointment_type) — 30+ column substrate
- `staff_service_assignment` (with pay_rate_id + booking_time + prep_time + finish_time)
- `room` + `room_service_compatibility`
- `resource` + `resource_service_compatibility`
- `pricing_option` + `pricing_option_type` enum + 4-type subtables (Single Session / Multiple Sessions / Unlimited Sessions / Autopay/Contract)
- `service_pricing_option_assignment` (N-to-N)
- `discount_program` + `pricing_option_discount_program_assignment`
- `tax_rate` (with Sales Tax + Tax 2 distinction)
- `revenue_category` (accounting axis distinct from service_category)
- `appointment` (with 12-state lifecycle + multi-flag stack + 3-component time block)
- `appointment_entitlement_assignment` (linking redeemed pricing options)
- `availability_window` (4-axis: What/Where/When/Other-Privacy)
- `commerce_order` (sale parent)
- `commerce_order_line` (with type enum: service / product / pricing_option / gift_card / contract / package / tip / etc.)
- `payment_method` (25+ enum + per-clinic capability)
- `payment_attempt` (1-to-N from commerce_order; supports split payment)
- `refund` (with destination_payment_method_id + reason + restock_inventory_flag)
- `gift_card_product` + `gift_card_issued` + `gift_card_balance`
- `promo_code` (13+ columns)
- `contract` (with rolling support via billing_cycle + next_run_date)
- `autopay_schedule_row` (lazy-materialized, force-run-now capable)
- `autopay_history`
- `package` + `package_item`
- `account_credit` / `account_payment`
- `intro_offer`
- `suspension_type` + `client_suspension`
- `client_form_template` + `client_form_assignment` (with VIEW LOG audit)
- `retail_product` (DISTINCT substrate from pricing_option) + `retail_inventory`
- `supplier` + `payment_term` + `purchase_order`
- `cancellation_policy` (per-clinic fee structure)
- `outbound_template` + `outbound_trigger` + `outbound_send_log` (DL-14 CNS)
- `audit_event` (DL-14 actor-stamped event envelope)

### H.2 Substrate slice MUST NOT include yet (Phase D+ or Phase 2+ deferred)

- Suppliers/AP full workflow (Phase D-territory)
- ICD Codes library (Phase D-territory; clinical-coding DL gates)
- Q1 encounter container architecture details (post-Phase-B.5 resolution)
- Surgical-suite / endoscopy / sleep-lab procedure encounters (Phase 2+)
- Mobile-native integrations (Tap to Pay / drum-roll picker) — UI substrate, no migration
- Full receipt template editor (Phase 2+ UI work)

### H.3 RPC / migration scope (Day 0 build slice)

Per system map 1H execution substrate:
- RPCs covering 12+ commerce primitive lifecycle operations
- RPC for appointment lifecycle transitions with multi-flag stack support
- RPC for entitlement assignment + activation + redemption
- RPC for force-run-now autopay with idempotency contract
- RPC for refund with destination-routing + add-back-to-inventory
- RPC for client merge / unmask with full reversibility audit
- RPC for permission group / atom grant management

---

## Section I — OMNI competitive moats

### I.1 Moat #1: Clinical-grade structured commerce

**Mindbody pain**: Botox 7-tier per-quantity Pricing Options + Botox-in-Products workaround forced because Pricing Option lacks `quantity_strategy` enum.

**OMNI win**: `quantity_strategy ENUM(fixed, per_unit_quantity, package_count, unlimited_period, subscription_recurring)` + `default_unit_price`. Eliminates 7-tier per-quantity workaround + Botox-in-Products workaround. Clinical-grade structured commerce.

### I.2 Moat #2: Unified Schedulable/Clinical/Billable/Resource entity separation

**Mindbody pain**: Schedulable Service (Appointment Type) + Clinical Service + Billable Item (Pricing Option) + Resource/Inventory (Retail Product) are scattered substrates with multi-many joins; Add-on collapsed into is_addon flag on services table.

**OMNI win**: explicit 4-entity decomposition with clean joins; Add-on as 1st-class table. Per Q3 resolution at Phase B.5+ doctrine sharpening.

### I.3 Moat #3: Encounter container architecture (Q1)

**Mindbody pain**: Flat Appointment substrate doesn't distinguish office_visit / procedure_encounter / virtual_visit / async_review / etc. Forces clinics to use Service Type filtering + workarounds.

**OMNI win (post-Q1 resolution)**: encounter_profile enum + per-profile constraint set with policy gates. Supports user feedback gap #5 (sleep labs / cardio / endocrine / plastics scalability).

### I.4 Moat #4: 4-axis booking composer

**Mindbody pain**: Capacity × Staff × Room × Resource axes exist but scattered across substrates; booking flow doesn't enforce all 4.

**OMNI win**: DL-15 amendment — booking RPC enforces ALL 4 axes alignment. Booking impossible if any axis unavailable. User feedback gap #1 fix.

### I.5 Moat #5: Mode-per-service-line (Q4)

**Mindbody pain**: No async path; everything in-clinic appointment.

**OMNI win**: `service.mode ENUM(async_first, schedule_required, hybrid, disabled_scheduler, async_first_with_optional_video, resource_booking_only)` per Q4. Hybrid Hims + medspa scope user emphasized.

### I.6 Moat #6: Per-brand + per-staff 2-layer capability model

**Mindbody pain**: Per-brand capability flags + permission groups + per-staff capability flags exist but composition rules opaque.

**OMNI win**: Q5 resolution at RBAC DL — clear 2-layer capability composition with explicit precedence + UI surfaces respecting both layers.

### I.7 Moat #7: Multi-modality scaling vision (procedural + medspa + Hims + sleep labs + cardio + endocrine + plastics)

Per user feedback gap #5: "we want to be able to service terms clinics, sleep labs, cardio groups, endocrine groups, plastic surgery groups... that's probably where the SaaS actually makes 10k per month subscription".

**OMNI win**: encounter_profile enum + service.mode enum + capability layer composition supports radical modality expansion without substrate rewrites.

### I.8 Moat #8: Data integrity (uniqueness, audit, no naming bugs)

**Mindbody pain**: Duplicate naming bugs (`Botox (Returning)` x3 / `Aquagold Facial` x3 / `BH Signature Facial (90 Mins)` $200 + $165); data corruption ($196,365 line vs $159 subtotal); vocabulary mismatches (Inactive ≠ unused).

**OMNI win**: enforced uniqueness within (brand, category, name); price-line ≤ subtotal invariant; vocabulary discipline (Pass/Redeemed/Expired/Voided naming).

### I.9 Moat #9: Substrate-derived metrics + CNS observability

**Mindbody pain**: Business Snapshot 6 KPIs are fixed; limited customization beyond Accounting Basis + Date Range.

**OMNI win**: DL-14 + DL-16 CNS Event Envelope + system primitive #10 outbound jobs → all metrics derivable from event stream; per-brand configurable KPI dashboards.

---

## Section J — Cross-domain implications

### J.1 Accounting integration (Quickbooks / Xero / NetSuite)

Driven by:
- Accounting Basis (Accrual vs Cash basis) — affects revenue recognition for prepaid Pricing Options
- Revenue Categories (accounting axis distinct from service category)
- 2-tier Tax Rates (Sales Tax + Tax 2)
- Per-sale receipts with tokenized payment data

OMNI Phase C commerce DL must support both accounting basis + GL routing per pricing option.

### J.2 Marketing engine integration (Attentive / Klaviyo / etc.)

Driven by:
- Studio Variables (mindbody_15 Step 04) for Attentive marketing
- Subscriptions multi-channel consent
- News and Promos / Newsletters & Promotions categories
- Promo Codes with channel-scoping
- Customer attribute substrate (Tags + Client Indexes + Custom Fields)

### J.3 Payment processor integration

Driven by:
- 25+ Payment Methods federation (each with own integration)
- Authorization codes returned from Visa/MC stored on sale
- Settlement reporting (daily-card-network rollup)
- PCI-compliant tokenized card storage (Visa **** 6567 expires 05/2030)
- Tap to Pay on iPhone (iOS 16+ Apple Business Connect)

OMNI per system map 1I.4-1I.5 payment adapter capability matrix.

### J.4 3rd-party integration (ClassPass / Mindbody Marketplace)

Driven by:
- `_ClassPass API_` actor on sale records
- ClassPass $0 Pricing Option variant
- "Connect Mindbody Account" links throughout client profile

Each 3rd-party integration creates substrate sale/event records with named actor.

### J.5 HR / Payroll integration

Driven by:
- Staff Time Clock Tasks substrate (mindbody_15 Step 05)
- Per-(staff × service × pay-rate-type) substrate
- Standard + Promo Commission Rates per Pricing Option
- "Does the therapist get paid for this client?" per-pricing-option flag

OMNI Phase D or later HR-adjacent DL.

### J.6 Clinical EHR / Rx integration

Driven by:
- ICD Codes library
- Multi-typed notes (provider-grade clinical notes separate from front-desk notes)
- Formula notes substrate (medspa formula tracking precursor to provider Rx)
- Q1 encounter_profile enum (procedure_encounter / surgical_case profiles)

OMNI Phase D Rx-labs-notes territory.

### J.7 Calendar integration (Google Calendar / iCal)

Driven by:
- Google Calendar Integration per-staff (mindbody_14 Step 09)
- Export My Schedule iCal/RSS link (mindbody_21 Step 08)
- 2-tier capability (brand-enabled + staff-connected)

### J.8 Inventory / Supply chain integration

Driven by:
- Suppliers + Payment Terms + Purchase Orders substrate
- Retail Product Our Cost (COGS for margin tracking)
- Add-back-to-inventory on refund

OMNI Phase D ERP-adjacent.

### J.9 Identity / Auth federation

Driven by:
- 3-scope identity (User / Site / Owner)
- Multi-site switcher in mobile More menu
- Staff login separable from staff record (Remove login soft-disable)
- Send Password Reset Email
- Sign-in-with-Mindbody (consumer-facing OAuth)

OMNI system map 1J + 1U.

---

## Section K — Industry analogy insights

Per user feedback raw + [.cursor/plans/ingestion/mindbody/mindbody_to_omni_direction_raw.md](../ingestion/mindbody/mindbody_to_omni_direction_raw.md) Turn 2:

### K.1 Airlines (reservation / yield management / availability)

**Lesson**: airlines use FARE CLASS as the billable variant on a flight (one flight, many fare classes with different prices and rules). Maps directly to OMNI's Service ↔ Pricing Option N-to-N substrate. ClassPass $0 = "ClassPass fare class on this service".

### K.2 Restaurants (mixed-modality + add-ons + party size)

**Lesson**: restaurants handle add-ons (apps + entrées + desserts + drinks) with independent rules and pricing. Maps to Service + Add-on architecture. Per Knox marker 5 add-on rules (add time / add price / require resource / require clinical clearance / consume inventory) directly mirror restaurant modifiers.

### K.3 Amazon (catalog + variants + bundles + subscriptions)

**Lesson**: Amazon supports product + variant (size/color) + bundle (multi-product) + Subscribe-and-Save (recurring). Maps to OMNI Pricing Option 4-type enum (Single Session / Multiple Sessions / Unlimited Sessions / Autopay/Contract) + Package mixed-type bundle.

### K.4 Hospital OR / surgical case scheduling

**Lesson**: hospitals coordinate provider + anesthesiologist + room + equipment + recovery bed. Multi-axis composer is industry norm for surgical scheduling. Maps to OMNI 4-axis booking composer (Capacity / Staff / Room / Resource) — extended to N-axis for procedure_encounter / surgical_case encounter profiles.

### K.5 Uber (dynamic surge + per-trip price + driver/rider 2-sided)

**Lesson**: Uber's dynamic pricing maps to OMNI Promo Code + Discount Program rotating-tier patterns. Driver/rider 2-sided maps to staff-client substrate symmetry.

### K.6 Hotels (multi-channel pricing / consortium pricing / advance purchase)

**Lesson**: hotel rates differ by channel (direct vs OTA), advance purchase, refundable status. Maps to OMNI Pricing Option `Online price ≠ In-clinic price` + Entitlement Activation Strategy 3-enum.

### K.7 EHR (Epic / Cerner / Athenahealth) — clinical context

**Lesson**: EHRs separate visit_type (Encounter Type) from procedures from billable items. Q1 encounter container architecture lineage. Plus problem list (ICD-coded) + medication list + order set.

### K.8 Shopify-Stripe (commerce stack composition)

**Lesson**: Shopify-Stripe pattern is commerce engine (Shopify) + payment processor (Stripe) cleanly separated. OMNI follows similar separation: commerce DL (substrate) + payment_method federation (integration adapters).

### K.9 CPU/RAM (computational scheduling)

**Lesson**: CPU scheduler quanta + thread priority + memory locality. Maps to OMNI scheduling substrate spine — services have priority (entitlement redemption priority Low/Medium/High) + capacity (concurrent bookings) + resource locality (room + equipment).

### K.10 Ford assembly line (sequential resource scheduling)

**Lesson**: assembly line schedules machines to fixed vehicle-in-progress. Maps to OMNI room/resource scheduling axis + 3-component appointment block (prep / booking / finish).

### K.11 Industry analogy synthesis

OMNI synthesizes ALL of these: airline-fare-class billable variants + restaurant add-on rules + Amazon catalog variants + hospital OR multi-axis + Uber promo dynamics + hotel multi-channel pricing + EHR encounter taxonomy + Shopify-Stripe separation + CPU scheduling priorities + Ford assembly resource scheduling.

**The moat is the FUSION** — no single industry does all of these in one substrate. OMNI's substrate spine + DL discipline enables it.

---

## Section L — Multi-modality + scaling vision

### L.1 Day 0: HYBRID Hims + medspa + procedural outpatient

Concrete substrates needed:
- Service Type: Appointments / Arrivals / Classes / Courses / Memberships / **Medical Visits** (mindbody_20 Step 05 new)
- Service mode (Q4): async_first / schedule_required / hybrid / disabled_scheduler / resource_booking_only / async_first_with_optional_video
- Encounter profile (Q1): async_review / virtual_visit / phone_visit / office_visit / office_visit_with_minor_procedure / procedure_encounter / surgical_case / resource_only_session / internal_event

### L.2 Phase 1+: Sleep labs / cardio / endocrine / plastic surgery clinics

User explicit scope per gap #5: "we want to be able to service terms clinics, sleep labs, cardio groups, endocrine groups, plastic surgery groups, etc etc. that's probably where the SaaS actually makes 10k per month subscription!!!! Let's make sure we make that surface rich."

Required substrate primitives:
- **Sleep labs**: long-duration overnight appointments + multi-resource (sleep room + polysomnograph equipment + tech) + lab-report attachment
- **Cardio**: multi-modality (stress test / echo / Holter monitor / cath lab) with mixed acuity + multi-provider sequential within encounter
- **Endocrine**: lab-draw resource_only_session profile + Rx infusion appointment + long-term care plan tracking
- **Plastic surgery**: surgical_case encounter profile + pre-op + post-op + multi-stage procedure series + photo documentation

### L.3 Phase 2+: $10k/mo SaaS scope

Differentiators that justify $10k/mo:
1. Clinical-grade structured commerce (eliminates Botox-in-Products workarounds)
2. Multi-axis booking composer with substrate enforcement
3. Encounter profile flexibility (sleep labs through plastic surgery)
4. Substrate-derived metrics customizable per clinic
5. CNS event-stream observability for ops + compliance
6. Multi-tenancy + federation (multi-location brand owners)
7. Capability-layer composition (brand + staff + per-cart-mode + per-permission-group)
8. ICD-coded clinical encounter support
9. Outbound communications federation (30+ trigger types orchestrated)
10. PII-grade merge/unmask + Data Privacy GDPR/CCPA support

---

## Section M — Mobile vs desktop UX distinction

Per Batches 17-21 mobile inventory (49 screenshots) + cross-ref to desktop:

### M.1 Surface compression

| Surface | Desktop | Mobile |
|---|---|---|
| Left nav | 12+ top-level entries | 5 bottom-tab nav (Schedule / Retail / Clients / Reports / More) |
| Client cockpit | 8 horizontal tabs | 4 horizontal tabs (Profile / Account / Schedule / Documents) + 12-section vertical scroll |
| Edit Appointment | Tabbed compact layout | Vertical-stack 10-field linear scroll |
| Service catalog picker | Tabbed picker with filters | Flat scrollable list with section headers |
| Schedule day view | Multi-column staff grid | Configurable single/multi-staff with avatar headers |

### M.2 Mobile-specific affordances NOT in desktop

- iOS-native drum-roll time picker (15-min increments)
- Bottom-sheet action menu (context-aware variant counts)
- Native iOS Maps deep-link from Home Address
- Tap to Pay on iPhone (iOS 16+ payment integration)
- Card Reader Bluetooth pairing
- "Clear Cache" mobile-app-local-cache refresh
- Per-day appointment count badges in month-picker (heatmap)
- "Settle this client's unpaids?" proactive banner on cart entry

### M.3 Desktop-specific affordances NOT in mobile

- Edit/Add Groups permissions admin
- 18-entry Client Directory More menu
- ~100+ settings sub-pages (mobile compresses to ~10 More menu actions)
- Multi-column staff schedule with advanced filters
- Pricing Options 238-row global admin
- Receipt edit / template configuration
- Provider Permissions Edit/Add Groups page

### M.4 Same-substrate-different-projection examples

- Visits sub-tab in Schedule = same `appointment` table, projected to state=completed view
- Mobile "PASSES" = desktop "Inactive pricing options" (vocab mismatch, same substrate)
- Mobile 12-section client profile = desktop 8-tab cockpit (compressed but covers all)
- Mobile staff filter (14 entries) = desktop staff list (10/page × 2 pages)
- Mobile clients_picker reused as modal AND full-screen tab

### M.5 OMNI mobile design implications

- Per system map 1Q (UI substrate): mobile and desktop are projections of same domain substrate
- Per-user UI preferences (Set as client lookup landing page) substrate enables per-user-per-device customization
- Mobile-first design for staff-clinical interactions; desktop-first for admin/settings
- Both surfaces consume same RPCs; client-side projects differently

---

## Cross-references

- **Raw ingestion layer**: [.cursor/plans/ingestion/mindbody/](../ingestion/mindbody/) — 17 raw capture files (mindbody_04 through mindbody_21) + manifest (163 rows) + chat nav map + 5 supplemental files
- **Phase B.5 master plan**: [.cursor/plans/phase_b5_mindbody_ingestion_4db27449.plan.md](../phase_b5_mindbody_ingestion_4db27449.plan.md)
- **Open questions** (5 shelved): [.cursor/plans/ingestion/mindbody/mindbody_open_questions_raw.md](../ingestion/mindbody/mindbody_open_questions_raw.md)
- **Step 0.5 OMNI direction**: [.cursor/plans/ingestion/mindbody/mindbody_to_omni_direction_raw.md](../ingestion/mindbody/mindbody_to_omni_direction_raw.md)
- **User feedback raw**: [.cursor/plans/ingestion/mindbody/mindbody_user_feedback_raw.md](../ingestion/mindbody/mindbody_user_feedback_raw.md)
- **Chat nav map**: [.cursor/plans/ingestion/mindbody/mindbody_chat_navigation_map.md](../ingestion/mindbody/mindbody_chat_navigation_map.md)
- **System map**: [.cursor/plans/system_map_three_layers_60706286.plan.md](../system_map_three_layers_60706286.plan.md)
- **Foundational architecture**: [.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md](../FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md)
- **OMNI brain hardening**: [.cursor/plans/omni_brain_hardening_d1ef429b.plan.md](../omni_brain_hardening_d1ef429b.plan.md)

---

## Final reading note

This Layer 2 is **frozen on commit**. Future doctrine sharpening (Phase B.5+) references THIS document's section identifiers (G.2.1 / G.2.2 / G.2.3 / H.1 / etc.) when amending DL-15 / DL-14 / DL-16 / drafting Commerce DL / RBAC DL / Settings-Infrastructure DL / Clinical-Coding DL.

185 cumulative findings encoded across the raw capture files (mindbody_04 through mindbody_21) feed every claim. Traverse the raw layer for FULL audit.

**Phase B.5 Layer 2 synthesis: COMPLETE.**
