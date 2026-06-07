# Mindbody — Batch 7 raw capture: POS Checkout flow continuation (Services + Contracts + Tips + Packages)

Source: per-screen verbatim capture from screenshots/ + cross-reference to chat raw + Knox analysis
Status: raw ingest — agent-produced; do not summarize away when synthesizing Layer 2
Date: 2026-05-16 (~1:15 AM UTC-4)
Batch: 7
Feature area(s): `pos_checkout` (continuation of Batch 6)
Screenshots covered: 9 (Screen Shot 2026-05-13 at 11.55.11 PM through 11.59.01 PM, chronological)
Chat cross-references:
- Marker 2 (lines 701-1085) — Knox "Day 0 parity = scheduling + checkout + commerce" enumeration: this batch covers Services / Autopays-contracts / Tips / Packages (4 of the 7 commerce categories from Batch 6 Step 04)
- Marker 4 (lines 1616-2152) — Knox "Account operations are editable, runnable, and destructive" — this batch surfaces the Autopay/contract creation surface (Step 05 BH+ Elite) which is the buyer-side analog of the account-operations Knox describes
- Marker 5 (lines 2153-2597) — Knox "service catalog as operational infrastructure" — Step 01 Browse > Services view is a cart-context projection of the same service catalog; Step 02 Medical Visits subcategory + Step 03 Medical Weight Loss Initial detail surfaces a per-Schedulable-Service Billable Item entry with sessions / duration / active-on attributes
Supplemental cross-references (Step 0.5):
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — 4-entity split: Step 03 (Medical Weight Loss Initial detail) is the most concrete rendering of the **Schedulable-as-Billable** projection — same Service catalog row, surfaced into POS as a Billable Item with Price + Quantity + **Sessions + Duration + Active on** attributes. The Sessions/Duration/Active-on fields are NOT on the Schedulable Service catalog row itself — they're added at the Billable Item layer.
- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 3 — Care episode/encounter container modes: BH+ Elite (Step 05) is concrete evidence for **`hybrid` mode service line** (recurring contract with monthly billing + bookable services + capability flags). The contract product itself spans multiple modes: it's a recurring billable + a service-catalog-eligibility entitlement + a membership-tier flag for pricing.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 — 4-entity split validity: this batch confirms the **insufficiency** finding from Batch 6 Step 04. Packages (Step 08) and Contracts (Step 05) are NOT covered by Knox's 4 entities; they are **bundle entities** (Packages: 1-to-many service entitlements with package-level discount) and **commitment entities** (Contracts: recurring billing + service-catalog-eligibility + membership-tier flag). Layer 2 Section G must scope expansion.
- [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q4 — mode-per-service-line: BH+ Elite contract (Step 05) is concrete evidence that mode is multi-axis (`recurring` + `entitlement_redeemable_for: [services]` + `membership_tier: BH+_Elite` + `discount_eligible: yes`). Single `mode` attribute insufficient.

---

## Step 01

**File:** `screenshots/Screen Shot 2026-05-13 at 11.55.11 PM.png`
**URL:** (same — `mainappointments/index`; POS overlay)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Browse > Services categories (Classes + Appointments hierarchy)

### TEXT CONTENT (VERBATIM)

```
[POS PANEL — Browse > Services view]

D  Diana Donlon                                   ▾  ✕

[Tab strip: 🔍 BROWSE (active) | ❤ FAVORITES]

Classes

🏷 Category 1                                          ▶

Appointments

🏷 1. Facials                                          ▶
🏷 10. Red Light Therapy                              ▶
🏷 11. Provider Consultations                         ▶
🏷 12. Medical Visits                                  ▶
🏷 2. Add-Ons                                          ▶
🏷 3. Chemical Peels                                   ▶
🏷 4. Skin Treatments                                  ▶

[Right column unchanged from Batch 6 Step 07/08:]
Wednesday, May 13, 2026
👤 No Sales Rep Assigned

> BH HydraFacial                                  PAID
v BioRePeel                                       $250.00
   None
   Edit | Remove

⊕ Tip       ⊕ Promo

Subtotal                                          $250.00
Tax                                               $0.00
Total                                             $250.00

[CHECKOUT $250.00]
```

### UI ELEMENTS (visible)

**Browse > Services view** (entered from Step 04 Browse panel by clicking "Services" category):

**Two top-level groupings visible:**

**Classes group:**
- 🏷 **Category 1** (single category — likely a default placeholder OR the only configured class category for this clinic)

**Appointments group:**
- 🏷 1. Facials ▶
- 🏷 10. Red Light Therapy ▶
- 🏷 11. Provider Consultations ▶
- 🏷 12. Medical Visits ▶
- 🏷 2. Add-Ons ▶
- 🏷 3. Chemical Peels ▶
- 🏷 4. Skin Treatments ▶

**Right column:** unchanged cart from Batch 6 (BH HydraFacial PAID + BioRePeel $250).

### VISUAL MARKERS

- **Two-group separation** (Classes vs Appointments) — visual distinction between two service-modality types
- **Same numbered category headers** as the appointment-grid service category filter (Batch 5 Steps 04-05) — confirms the SAME service catalog is the source of truth
- **Right caret** on every category — drills into sub-list (Step 02)

### ARCHITECTURAL OBSERVATIONS

**Critical observation: "Classes" is a SEPARATE service modality from "Appointments"** in Mindbody's catalog. This is the first surface where the Classes/Appointments distinction appears. Mindbody historically came from the yoga/fitness studio market where classes (group sessions, drop-in, recurring schedule) are first-class. The user's medspa configuration has only "Category 1" under Classes (likely placeholder or unused).

**For OMNI Encounter Container ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1, Turn 5):**
- Classes are a different **encounter profile** — group session vs 1:1 appointment
- Per Knox Turn 5 enumeration: `office_visit | office_visit_with_minor_procedure | procedure_encounter | surgical_case | resource_only_session | virtual_visit | phone_visit | async_review | internal_event` — Classes is missing from this list. Knox's encounter profiles need a `group_class` profile added.
- For OMNI: classes likely warrant a separate encounter profile, since: capacity > 1, multiple participants share resources/time, instructor-led not provider-led, may have waitlist mechanics, may have drop-in vs reservation modes
- **Open question Q1 (encounter container architecture)** — Classes is concrete evidence that the encounter profile enum needs to cover group sessions

**Cross-references [mindbody_settings_class_course_options_raw.md](mindbody_settings_class_course_options_raw.md):** that file has 89 named settings for Classes/Courses — distinct from Appointments settings. This confirms Classes is a major separate operational surface that the medspa configuration has barely activated. For OMNI: Classes/group-sessions feature is a future extension; not Day 0 medspa but Day 0 for fitness/yoga/wellness studios.

**For OMNI multi-modality scaling vision** ([mindbody_user_feedback_raw.md](mindbody_user_feedback_raw.md) closing paragraphs — sleep labs / cardio / endocrine / plastics) + Layer 2 Section L: classes as encounter profile would also enable **group fitness / wellness coaching / educational sessions / support groups** — useful for hybrid clinics that want to offer group programming alongside 1:1 medical care. Worth a Layer 2 Section L call-out.

**The 7 numbered Appointment categories match Batch 5 Step 04 (appointment-grid service category filter dropdown).** Same data source. The POS Browse > Services > Appointments view is a **commerce-context projection** of the appointment-bookable service catalog. For OMNI: a single Schedulable Service catalog with multi-context projections (booking surface vs POS surface vs admin surface) is the right architecture; Mindbody achieves this through their substrate.

---

## Step 02

**File:** `screenshots/Screen Shot 2026-05-13 at 11.55.31 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Browse > Services > 12. Medical Visits (5 services with prices)

### TEXT CONTENT (VERBATIM)

```
[Tab strip: BROWSE (active) | FAVORITES]

[Breadcrumb:]
Services  /  12. Medical Visits

[Service list:]

BH  BH+ | Hormone Balance                            $125.00

HT  Hormone Therapy (Initial Visit)                  $225.00

HT  Hormone Therapy - Follow-Up                      $125.00

MW  Medical Weight Loss (Follow-Up)                  $150.00

MW  Medical Weight Loss (Initial Visit)              $300.00

[Right column updated — cart now has more items:]
Wednesday, May 13, 2026
👤 No Sales Rep Assigned

> BH HydraFacial                                  PAID
v BioRePeel                                       $250.00
   None
   Edit | Remove

⊕ Tip       ⊕ Promo

Subtotal                                          $250.00
Tax                                               $0.00
Total                                             $250.00

[CHECKOUT $250.00]
```

### UI ELEMENTS (visible)

**Browse > Services > 12. Medical Visits** subcategory:

**Breadcrumb:** "Services / 12. Medical Visits" (Note: NO "Prod:" prefix here, unlike Batch 6 Step 06 which had "Products / Prod: Chemical Peels, ALL". Different breadcrumb generation per category.)

**Service list (5 visible):**
1. **BH** BH+ | Hormone Balance — $125.00 (note "BH+" prefix indicates membership-tier eligibility)
2. **HT** Hormone Therapy (Initial Visit) — $225.00
3. **HT** Hormone Therapy - Follow-Up — $125.00
4. **MW** Medical Weight Loss (Follow-Up) — $150.00
5. **MW** Medical Weight Loss (Initial Visit) — $300.00

### VISUAL MARKERS

- **Initial vs Follow-Up pricing variance** — Initial Visit ($225 / $300) > Follow-Up ($125 / $150). Suggests Mindbody captures visit-posture as both a Schedulable Service variant AND a Billable Item pricing tier
- **"BH+ |" prefix** on Hormone Balance — membership-tier marker (BH+ Elite contract from later steps; this service is part of the BH+ Hormone Balance contract product seen in Step 04 Autopays/contracts)
- **No "Prod:" breadcrumb prefix** — confirms Step 06 (Batch 6) "Prod:" prefix is specific to Products category, not all categories

### ARCHITECTURAL OBSERVATIONS

**Initial vs Follow-Up is encoded as separate Schedulable Service rows**, NOT as a typed attribute on a parent "Hormone Therapy" service. Same anti-pattern as Batch 5 Step 04 (Biologique Recherche Facial 60 Mins vs 90 Mins). For OMNI: visit posture (initial / follow-up / urgent / re-eval / rooming-only) should be a typed attribute, not encoded in service name.

**"BH+ | Hormone Balance" $125.00** — interesting because:
- The "BH+ |" prefix suggests membership-tier-specific pricing (likely $125 IS the member price; non-members may not see this row OR see a different price)
- This is the **member-only service** pattern. Knox marker 2 enumerates "package/contract sale" + "entitlement redemption" — this row is a service that presupposes a contract entitlement
- For OMNI: per-membership-tier service catalog visibility + per-membership-tier pricing is a substrate concern. Needs eligibility-resolution at booking + at checkout. Cross-references gap #3 (memberships + subscriptions weaving into experience).

**Hormone Therapy + Medical Weight Loss** are the two "Hims-style async-eligible" service families in this medspa. Cross-references **user feedback gap #7** (Hims-like weight loss plan attached to scheduled visits) + [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 3 (5 execution modes including `async_first`):
- Mindbody surfaces these as scheduled-visit-only Schedulable Services
- For OMNI mode-per-service-line (Q4): these would be `hybrid` or `async_first_with_optional_video` mode — patient can do async intake → Rx → video visit → in-clinic visit → async follow-up
- Mindbody collapses this into a single scheduled-visit option; OMNI's mode flexibility unlocks the full Hims-style flow + clinic option

**Pricing as Billable Item attribute:** prices visible per service ($125 / $150 / $225 / $300). For OMNI Q3 (4-entity split): the price IS NOT on the Schedulable Service entity (booking shouldn't expose price decision-makers — the catalog row is the bookable shell); the price IS on the Billable Item entity (the chargeable representation, surfaced at POS). Mindbody's POS view surfaces the price because POS is where Billable Items are composed.

---

## Step 03

**File:** `screenshots/Screen Shot 2026-05-13 at 11.55.54 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Medical Weight Loss (Initial Visit) item detail edit (Price + Quantity + Sessions + Duration + Active on + Discount + Notes)

### TEXT CONTENT (VERBATIM)

```
[POS PANEL — Item detail edit overlay]

D  Diana Donlon                                   ▾  ✕

MW  Medical Weight Loss (Initial Visit)

Price                                              $300.00

Quantity                Sessions
1                       1

Duration                                Active on
365         Days  ▾                     05/13/2026

Discount percent                       Discount amount
0%                                              $0.00

Notes (optional)
[empty textarea]

[Bottom action bar:]
CANCEL                                              DONE
```

### UI ELEMENTS (visible)

**Medical Weight Loss (Initial Visit) detail edit panel:**

**Header:** "MW  Medical Weight Loss (Initial Visit)" (monogram + service name)

**Form fields (more attributes than the BioRePeel product detail in Batch 6 Step 08):**
- **Price:** $300.00 (editable)
- **Quantity:** 1 (left half)
- **Sessions:** 1 (right half — NEW field not on product edit)
- **Duration:** 365 + Days dropdown (NEW field — likely entitlement validity duration in days)
- **Active on:** 05/13/2026 (NEW field — when the entitlement becomes available)
- **Discount percent:** 0% / **Discount amount:** $0.00 (split row, same as product edit)
- **Notes (optional):** empty textarea

**Action bar:** Cancel + DONE (orange/amber primary CTA)

### VISUAL MARKERS

- **Sessions** as a separate field from Quantity — important: 1 quantity might mean 1 instance of an entitlement covering multiple sessions
- **Duration + unit dropdown (Days)** — entitlement validity window; defaults to 365 days
- **Active on** as a date picker — entitlement start date (deferred eligibility possible)

### ARCHITECTURAL OBSERVATIONS

**THIS is the most architecturally significant screen of Batch 7.** The detail edit panel for a Service-as-Billable-Item exposes a substantially RICHER attribute set than the Product detail edit (Batch 6 Step 08):

**Product detail (Batch 6 Step 08 BioRePeel):** Price + Quantity + Discount % + Discount $ + Notes (5 fields)

**Service detail (this Step):** Price + Quantity + **Sessions** + **Duration + unit** + **Active on** + Discount % + Discount $ + Notes (8 fields, +3 new)

**The 3 new fields are entitlement-lifecycle attributes:**

1. **Sessions** — number of redemptions this entitlement supports (e.g., "Quantity 1, Sessions 6" = one entitlement covering 6 visits)
2. **Duration + unit** — validity window (e.g., 365 Days = entitlement expires 1 year from Active on)
3. **Active on** — start date for the entitlement (defaults to today; can be future-dated for prepaid programs)

This is the **service-as-prepaid-entitlement pattern.** Mindbody allows you to sell a "Medical Weight Loss (Initial Visit)" today as a $300 entitlement that gives the patient access to redeem one Initial Visit anytime in the next 365 days. This is the substrate for:
- Pre-paid visit packages (e.g., 3 visits prepaid)
- Subscription-style service access (e.g., 1 visit/month)
- Gift-card-like service redemption (e.g., gift a friend a visit)
- Forward-dated subscription start (Active on = future date)

**For OMNI Encounter Container + 4-entity split (Q3):**

This screen confirms that **a single Service catalog row CAN be sold as multiple Billable Item lifecycle variants**:
- Sold-and-redeemed-immediately (Quantity 1, Sessions 1, Duration short, Active on today)
- Sold-as-multi-session-entitlement (Quantity 1, Sessions 6, Duration 1 year)
- Sold-as-future-entitlement (Active on = future date)

OMNI's Billable Item entity must support these lifecycle attributes. The Schedulable Service is the catalog row; the Billable Item carries the **per-sale entitlement state** (Quantity + Sessions + Duration + Active on + redemption history).

**For OMNI commerce DL (future Phase C):** this is the canonical "service-entitlement" primitive. It's fundamentally different from a product purchase (no expiration, no session count, no redemption mechanic). It's also different from a contract/subscription (one-time vs recurring) and different from a package (single service vs bundle). **5+ commerce primitives** (Product / Service-entitlement / Contract / Package / Gift-card / Account-payment / Tip) — confirms Q3 finding from Batch 6 that 4-entity split is insufficient.

**Per-line entitlement-as-Billable-Item interactions with calendar:**
- When does the entitlement decrement? Likely at appointment booking OR at appointment check-in OR at appointment checkout
- Mindbody's pattern (per Batch 6 Step 02 PAID redemption against today's appointment): redemption happens at checkout, against an existing appointment
- For OMNI: the redemption lifecycle is its own substrate concern — must support: pending (sold but not yet redeemed), redeemed (against a specific appointment), expired (past Duration), refunded, transferred

**Cross-references user feedback gap #7** (Hims-like weight loss plan attached to visits): the "Medical Weight Loss" entitlement IS the Hims-like weight loss plan substrate. Patient can buy a 6-session weight loss program ($300 × 6 = $1800 prepaid OR $300 × 6 with discount); each session is redeemed against a scheduled or async-care visit. OMNI's 5-execution-modes ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 3) — async_first / scheduled_visit / hybrid / etc. — all need to support entitlement redemption against the visit.

**Active on default = today (05/13/2026):** the appointment date is today. Mindbody defaults the entitlement start to today for immediate-use; the Active on field is editable for prepaid future access.

---

## Step 04

**File:** `screenshots/Screen Shot 2026-05-13 at 11.56.43 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Browse > Autopays/contracts (5 contracts; cart now $850 with 4 items)

### TEXT CONTENT (VERBATIM)

```
[Tab strip: BROWSE (active) | FAVORITES]

Autopays/contracts

BE  BH+ | Elite                                        $159.00
    $0.00 one-time | $159.00 recurring

BE  BH+ | Elite Referral                               $79.00
    $0.00 one-time | $79.00 recurring

BU  BH+ | Ultra                                        $59.00
    $0.00 one-time | $59.00 recurring

BH  BH+ | Hormone Balance                              $125.00
    $0.00 one-time | $125.00 recurring

BR  BH+ | RLT                                          $99.00
    $0.00 one-time | $99.00 recurring

[Right column updated:]
Wednesday, May 13, 2026
👤 No Sales Rep Assigned

> BH HydraFacial                                  PAID
> BioRePeel                                       $250.00
> Medical Weight Loss (Initial ...                $300.00
v BH HydraFacial - Platinum                       $300.00
   None
   Edit | Remove

⊕ Tip       ⊕ Promo

Subtotal                                          $850.00
Tax                                               $0.00
Total                                             $850.00

[CHECKOUT $850.00]
```

### UI ELEMENTS (visible)

**Browse > Autopays/contracts subcategory:**

**Contract list (5 visible BH+ membership tiers):**
1. **BE** BH+ | Elite — $159.00 (One-time $0.00 | Recurring $159.00)
2. **BE** BH+ | Elite Referral — $79.00 (One-time $0.00 | Recurring $79.00) — likely a referral discount tier
3. **BU** BH+ | Ultra — $59.00 (One-time $0.00 | Recurring $59.00)
4. **BH** BH+ | Hormone Balance — $125.00 (One-time $0.00 | Recurring $125.00) — couples to the BH+ | Hormone Balance Service from Step 02
5. **BR** BH+ | RLT — $99.00 (One-time $0.00 | Recurring $99.00) — Red Light Therapy contract

**Cart updated:** Now has 4 items:
- BH HydraFacial (PAID, collapsed)
- BioRePeel ($250, collapsed)
- Medical Weight Loss (Initial...) ($300, collapsed; truncated name)
- BH HydraFacial - Platinum ($300, expanded with "None" + Edit/Remove)

**Receipt:** Subtotal $850 / Tax $0 / Total $850 / CHECKOUT $850

### VISUAL MARKERS

- **Two-line pricing format** for each contract: "[total] $X.00 | $0.00 one-time | $Y.00 recurring" — explicit display of one-time vs recurring components
- **All 5 contracts have $0 one-time, all-recurring pricing** — these are pure subscriptions, no enrollment fee
- **Cart growth** — from 1 item ($250) to 4 items ($850) — staff has been browsing categories and adding multiple items

### ARCHITECTURAL OBSERVATIONS

**Autopays/contracts is the membership/subscription primitive.** Distinct from products + services + packages because it has:
- A **recurring** billing component
- A **one-time** billing component (often $0; could be enrollment fee)
- A **commitment duration** (revealed in Step 05)
- A **service-eligibility** entitlement (likely makes member-only services like "BH+ | Hormone Balance" available + member pricing)

**The "BH+ |" naming convention** (Elite / Ultra / Hormone Balance / RLT / Elite Referral) is the membership program. "BH+ Elite" is the top tier, "BH+ Ultra" is mid-tier, and the others are specialty tiers (Hormone Balance, RLT = Red Light Therapy).

**Cross-references Knox marker 4 (lines 1616-2152, "Account operations are editable, runnable, and destructive"):** Knox's account-operations analysis covers:
- Inactive pricing option actions (Return/Void, Edit, Show Visits)
- Active contract/autopay actions (View, Print, Next Autopay, Terminate, Delete)
- Account recalculation
- Autopay schedule editing
- Autopay transaction deletion

This screen is the **buyer-side** of those operations — selling a new contract/autopay to a client. The post-purchase account view (not shown in this batch) is where Knox's account-operations surface lives.

**For OMNI commerce DL (future Phase C):** Autopays/contracts is a **commitment entity** (vs Billable Item = transactional entity). It has its own state machine: prospective → active → paused → terminated → expired. Its own audit pattern: every autopay charge is a `commerce_orders` row referencing the contract. Its own cancellation rules (terms, early-termination fees, refund policy). Its own service-eligibility entitlement (which services this contract grants access to). Its own member-pricing tier.

**For Q3 (4-entity split validity):** Autopays/contracts confirms the **5+ commerce primitives** finding. Contracts are NOT covered by Knox's 4 entities; they need a separate entity (`subscription_commitment` or similar). Layer 2 Section G must scope.

**For Q5 (capability flags per brand/clinic):** the BH+ membership program is brand-specific. A different clinic federation member might have different membership tiers (or none). Per-brand membership program configuration is a capability-flag axis.

**For [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 3 (5 execution modes):** the BH+ Elite contract is a **`hybrid` mode service line** — recurring billing (commerce mode) + service entitlement (booking mode) + member pricing tier (commerce mode). Single `mode` attribute on a service line is insufficient — mode is multi-axis.

---

## Step 05

**File:** `screenshots/Screen Shot 2026-05-13 at 11.57.06 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — BH+ | Elite contract detail edit (Start date + Duration + Contract items + Pay Now toggle)

### TEXT CONTENT (VERBATIM)

```
[POS PANEL — BH+ Elite contract detail overlay]

D  Diana Donlon                                   ▾  ✕

BE  BH+ | Elite

CONTRACT DETAILS

Start date                              Duration
6/1/2026         ▾                      1 Month

▾ Contract items

RECURRING

   BH+ Elite                                       $159.00

Discount percent                       Discount amount
0%                                              $0.00

Pay Now                                              ☑ (toggle ON)

[Bottom action bar:]
CANCEL                                              DONE
```

### UI ELEMENTS (visible)

**BH+ | Elite contract detail edit panel:**

**Header:** "BE  BH+ | Elite"

**CONTRACT DETAILS section:**
- **Start date:** 6/1/2026 (date picker — defaults to next month start, NOT today; intentional pattern — contracts often start beginning of next billing period)
- **Duration:** 1 Month (display field — minimum commitment duration)

**Contract items section** (collapsible ▾):
- **RECURRING** (sub-header) — distinguishes recurring items from one-time items
- BH+ Elite — $159.00 (the contract's recurring component, named same as the contract)

**Discount fields:**
- Discount percent: 0%
- Discount amount: $0.00

**Pay Now toggle** (right side, ON/active state — teal/blue) — when ON, charges the patient immediately for the first payment (vs waiting until Start date); when OFF, defers first charge to Start date

**Action bar:** Cancel + DONE (orange/amber)

### VISUAL MARKERS

- **Start date defaults to next month** (6/1/2026 vs today 5/13/2026) — intentional billing-period alignment
- **Duration "1 Month"** as a display field, not a dropdown — likely the contract's MINIMUM commitment; longer durations may exist for other tiers
- **Contract items section is collapsible** — the contract may have multiple items (recurring + one-time setup + add-on entitlements)
- **Pay Now toggle** with explicit state visualization (teal/blue when ON)

### ARCHITECTURAL OBSERVATIONS

**Contract entity has its OWN substrate attributes** beyond the Billable Item base:
- Start date (vs Active on for service entitlements)
- Duration (commitment minimum)
- Contract items (1-to-many: recurring + one-time + entitlements)
- Pay Now toggle (immediate vs deferred first charge)

**The Pay Now toggle is critical operationally:**
- ON: charges patient $159 today, then $159/month starting 6/1
- OFF: no charge today, first charge is $159 on 6/1

This is a substrate-level decision affecting:
- Initial revenue recognition timing
- Patient billing experience
- Cancellation/refund logic (paid early vs not)
- Calendar of expected charges (sometimes affects autopay schedule generation)

For OMNI commerce DL: the contract creation surface must capture this toggle. The substrate must support both "immediate first charge" and "deferred first charge" lifecycles. Audit must capture the toggle state at contract creation.

**Cross-references Knox marker 4 (account operations):** Knox enumerates "Next Autopay" / "Autopay schedule editing" / "Autopay transaction deletion" as account operations. This Step 05 screen is where the autopay schedule is INITIATED (Start date + Duration); subsequent account-operations view (TBD) shows the running schedule + edit/delete affordances.

**For OMNI Encounter Container ([mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 3):** the BH+ Elite contract is concrete evidence for the **`hybrid` mode** + **federation capability flags**:
- Contract is sold via POS (commerce mode)
- Contract grants service-catalog eligibility (booking mode for member-only services)
- Contract recurring billing runs without scheduling involvement (async/billing mode)
- Contract may bundle entitlements (package mode)
- Contract has lifecycle gates (commitment duration → cancellation rules)

This single object touches 4-5 different sub-systems. For OMNI's CNS-as-orchestrator (DL-14): contract events emit into the CNS (`contract.sold` → `contract.first_charge_due` → `contract.recurring_charge_succeeded` → `contract.recurring_charge_failed` → `contract.cancellation_requested` → `contract.terminated` → `contract.expired`); each event triggers downstream actions across commerce + booking + messaging substrates.

**Cross-references gap #3 (memberships + subscriptions weaving) + the user's explicit question "if those 2 are different entities, yes they might be?":** Mindbody collapses memberships + subscriptions into ONE primitive (Autopays/contracts). The substrate is unified; the policy/UX may differentiate. For OMNI: probably should be ONE substrate primitive (`subscription_commitment`) with policy variants (`commitment_kind: membership | subscription | autopay_only`).

---

## Step 06

**File:** `screenshots/Screen Shot 2026-05-13 at 11.57.20 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — BH+ | Elite contract detail SCROLLED (showing Notes optional field at bottom)

### TEXT CONTENT (VERBATIM)

```
[POS PANEL — BH+ Elite contract detail (scrolled down)]

D  Diana Donlon                                   ▾  ✕

CONTRACT DETAILS

Start date                              Duration
6/1/2026         ▾                      1 Month

▾ Contract items

RECURRING

   BH+ Elite                                       $159.00

Discount percent                       Discount amount
0%                                              $0.00

Pay Now                                              ☑

Notes (optional)
[empty textarea]

[Action bar:]
CANCEL                                              DONE
```

### UI ELEMENTS (visible)

**Same panel as Step 05**, scrolled down to reveal:
- Notes (optional) textarea at the bottom (was below the fold in Step 05)

### VISUAL MARKERS

- **Notes (optional)** textarea — per-contract free-form annotation field

### ARCHITECTURAL OBSERVATIONS

**Notes field is consistent across all POS detail edit panels:**
- Product detail (Batch 6 Step 08 BioRePeel): Notes (optional)
- Service detail (this batch Step 03 Medical Weight Loss): Notes (optional)
- Contract detail (this batch Step 06 BH+ Elite): Notes (optional)

This is a **shared per-line-item notes annotation pattern**. Different from appointment Notes (5-typed-field structure in Batch 5 Step 06) and from Formula Notes (separate dropdown in Batch 5 Step 06).

**For OMNI commerce DL:** per-line-item notes are domain-table data on each line item entity (one column per line type). Same column, same width, same governance. Captures staff annotations like "applied loyalty discount per manager approval" or "patient asked to defer first charge to 6/15 — approved" or "cancellation reason: moving out of state." 

**For audit trail:** these Notes are NOT events; they're persistent state on the line item. Different from `audit_events` (who edited what) and `patient_timeline_events` (narrative projection). Per system map "Layer 1 (data architecture discipline)": notes as a domain-table column on each line item, NOT on patient_timeline_events. Layer 2 Section G must capture this convention.

---

## Step 07

**File:** `screenshots/Screen Shot 2026-05-13 at 11.58.00 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Tip detail panel (Recipient + Amount)

### TEXT CONTENT (VERBATIM)

```
[POS PANEL — Tip detail overlay]

D  Diana Donlon                                   ▾  ✕

Tip

⊙ Recipient                                          ▾

Amount                                              $0.00

[Action bar:]
CANCEL                                              DONE
```

### UI ELEMENTS (visible)

**Tip detail panel** (likely opened from "+ Tip" button in cart's right column):

**Form fields (2):**
- **Recipient** dropdown (with avatar/person icon) — picks the staff member to receive the tip
- **Amount** — $0.00 (editable; supports any tip amount)

**Action bar:** Cancel + DONE (orange/amber)

### VISUAL MARKERS

- **Recipient dropdown** — explicit per-staff tip attribution (vs. "tip to the house" or "split tip")
- **Amount** as a single field (no percentage option visible in this minimal panel)

### ARCHITECTURAL OBSERVATIONS

**Tip is a separate commerce primitive** — not a discount, not a line item modifier, not a service. It's a gratuity-attribution event with:
- A recipient (staff member)
- An amount (dollar value)
- Implicit transaction context (the cart it's attached to)

**For OMNI commerce DL:** tips are a `gratuity` entity with attribution to a staff actor (`recipient_staff_user_id`), value, and parent commerce_orders reference. Lifecycle is simple: created → paid (when checkout commits). No expiration, no redemption. Distribution to staff is a downstream payroll concern (not commerce DL).

**Cross-references gap #3 (loyalty rewards + tips weaving):** tips are part of the commerce surface; they affect commission/payroll attribution; they show on patient receipts; they're audited. Mindbody handles them simply; OMNI must too.

**Single-recipient-only?** This panel implies one recipient per tip. For multi-staff visits (e.g., HydraFacial done by aesthetician + Botox done by injector), patient may want to tip both. Mindbody's model may require multiple Tip line items in one cart (one per recipient). Layer 2 Section A (entity model) must reason.

**No tip-percentage option visible** — the panel only takes a dollar amount. This is a UX choice (vs. Square/Toast which offer 18%/20%/22% buttons); Mindbody is amount-only. For OMNI: percentage-of-cart suggestions are a UX pattern that wraps the underlying dollar amount; substrate stores dollar amount.

---

## Step 08

**File:** `screenshots/Screen Shot 2026-05-13 at 11.58.30 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Browse > Packages (6 packages with strikethrough "list price" and discount; cart now $1,009 with 5 items)

### TEXT CONTENT (VERBATIM)

```
[Tab strip: BROWSE (active) | FAVORITES]

Packages

NS  NEO Science - RLT: 16-Pack                       $580.00

AB  Aquagold (BLOOM FACIAL, HA only): QTY 3-Pack     $1,290.96
                                                     $̶1̶,̶4̶6̶7̶.̶0̶0̶ (strikethrough)

AG  Aquagold (GOLDEN GLOW FACIAL, HA+Btx): QTY 3-Pack $1,537.29
                                                     $̶1̶,̶7̶6̶7̶.̶0̶0̶ (strikethrough)

HR  Hair Restoration (PRP, NO microneedling): QTY 3-Pack $1,808.40
                                                     $̶2̶,̶0̶5̶5̶.̶0̶0̶ (strikethrough)

HR  Hair Restoration (PRP, w microneedling): QTY 3-Pack $2,072.40
                                                     $̶2̶,̶3̶5̶5̶.̶0̶0̶ (strikethrough)

MB  Microneedling (BODY ONLY, no PRP): QTY 3-Pack    $792.00
                                                     $̶9̶0̶0̶.̶0̶0̶ (strikethrough)

MB  Microneedling (BODY ONLY, with PRP): QTY 3-Pack  $1,699.02 [partial]

[Right column updated:]
Wednesday, May 13, 2026
👤 No Sales Rep Assigned

> BH HydraFacial                                  PAID
> BioRePeel                                       $250.00
> Medical Weight Loss (Initial ...                $300.00
> BH HydraFacial - Platinum                       $300.00
v BH+ | Elite                                     $159.00
   None
   Edit | Remove

⊕ Tip       ⊕ Promo

Subtotal                                          $1,009.00
Tax                                               $0.00
Total                                             $1,009.00

[CHECKOUT $1,009.00]
```

### UI ELEMENTS (visible)

**Browse > Packages subcategory:**

**Package list (6+ visible):**
1. **NS** NEO Science - RLT: 16-Pack — $580.00 (no strikethrough)
2. **AB** Aquagold (BLOOM FACIAL, HA only): QTY 3-Pack — $1,290.96 (~12% off list $1,467)
3. **AG** Aquagold (GOLDEN GLOW FACIAL, HA+Btx): QTY 3-Pack — $1,537.29 (~13% off list $1,767)
4. **HR** Hair Restoration (PRP, NO microneedling): QTY 3-Pack — $1,808.40 (~12% off list $2,055)
5. **HR** Hair Restoration (PRP, w microneedling): QTY 3-Pack — $2,072.40 (~12% off list $2,355)
6. **MB** Microneedling (BODY ONLY, no PRP): QTY 3-Pack — $792.00 (~12% off list $900)
7. **MB** Microneedling (BODY ONLY, with PRP): QTY 3-Pack — $1,699.02 (partial)

**Cart updated:** 5 items now (BH HydraFacial PAID + BioRePeel + Medical Weight Loss + BH HydraFacial-Platinum + BH+ Elite). Total $1,009.

### VISUAL MARKERS

- **Strikethrough "list price" pattern** — packages display the discounted price in primary text + the original price with strikethrough below. UX pattern for "you save $X" merchandising
- **Package naming convention** "<Service> (<Variant>): QTY <N>-Pack" — explicit pack-size in name, similar to product naming convention (Batch 6 Step 06)
- **Pack sizes vary:** 3-Pack, 16-Pack — flexibility per package design
- **Pricing varies wildly** ($580 to $2,072) — packages span low-cost (RLT 16-Pack at $36/session) to high-cost ($690/session for Hair Restoration with microneedling)

### ARCHITECTURAL OBSERVATIONS

**Packages are bundle entities** with their own substrate attributes:
- A pack-size (number of redemptions: 3 vs 16)
- A package list price (un-discounted)
- A package selling price (discounted)
- Implicit per-redemption price (computed from pack price / pack size)
- A bundled Schedulable Service entitlement (likely 1-to-1 — 3-Pack = 3 redemptions of the named service)

**For OMNI commerce DL:** Packages need their own entity (`service_package`) with:
- `service_id` — the Schedulable Service this package bundles
- `redemption_count` — how many uses
- `list_price` — un-discounted total
- `selling_price` — current price (with package discount)
- `expiration_policy` — when do unused redemptions expire (likely Active on + Duration like Step 03)
- `transferability_policy` — can the package be transferred (gifted) to another patient

This is concrete evidence for **6+ commerce primitives** (Product / Service-entitlement / Contract / Package / Gift-card / Account-payment / Tip = 7). Q3 (4-entity split validity) — confirmed insufficient, Layer 2 Section G must scope expansion.

**Strikethrough merchandising pattern** is a UX choice that surfaces value-perception. For OMNI: the substrate should store both list_price + selling_price; the merchandising display ("save $X" or strikethrough) is a UI rendering rule, not a substrate concern. But the substrate must support both prices.

**Multi-axis variant naming again:**
- Aquagold has 2 variants (BLOOM FACIAL HA only, GOLDEN GLOW FACIAL HA+Btx) — formulation variants
- Hair Restoration has 2 variants (PRP NO microneedling, PRP w microneedling) — procedure-modality variants
- Microneedling has 2 variants (BODY ONLY no PRP, BODY ONLY with PRP) — procedure-modality variants

For OMNI: variants should be typed attributes on a parent service (formulation / procedure_modality / pack_size / etc.), not encoded in name strings. Same string-encoded-variant anti-pattern from Batches 5 + 6 repeated.

**Cross-references user feedback gap #2** (book broad → refine at checkout, e.g., Botox 36 units): the package model is Mindbody's "elegant" workaround for some variant cases. A 3-Pack is one row purchased, three redemptions. But Botox unit-quantity isn't a pack-of-redemptions; it's a per-visit variable quantity. Packages handle FIXED quantity, not variable. Variable-quantity needs the **service-as-product** workaround Mindbody uses (Batch 6 Step 05 BH HydraFacial Deluxe/Platinum/Signature). OMNI's Encounter Container with planned-vs-rendered semantics handles BOTH cleanly:
- 3-Pack = 3 planned redemptions, each rendered into 1 encounter
- Botox = 1 planned encounter, rendered with N units (variable Billable Item lines)

---

## Step 09

**File:** `screenshots/Screen Shot 2026-05-13 at 11.59.01 PM.png`
**URL:** (same)
**Feature area:** `pos_checkout`
**Inferred screen title:** POS — Peels (VI PEEL / PURIFY) QTY 3-Pack package detail edit (Active on + Package items with discount per item)

### TEXT CONTENT (VERBATIM)

```
[POS PANEL — Package detail edit overlay]

D  Diana Donlon                                   ▾  ✕

PV  Peels (VI PEEL / PURIFY): QTY 3-Pack

Active on
05/13/2026

▾ Package items

   Peels (VI PEEL / PURIFY): QTY 1 TX               $230.00

   Discount percent                Discount amount
   15%                             $34.50

   Peels (VI PEEL / PURIFY): QTY 1 TX               $230.00

   [more items truncated below fold]

[Action bar:]
CANCEL                                              DONE
```

### UI ELEMENTS (visible)

**Package detail edit panel** for Peels (VI PEEL / PURIFY) QTY 3-Pack:

**Header:** "PV  Peels (VI PEEL / PURIFY): QTY 3-Pack"

**Active on** field: 05/13/2026 (date picker; defaults today)

**Package items section** (collapsible ▾) — shows the package's bundled items:
- Item 1: Peels (VI PEEL / PURIFY): QTY 1 TX — $230.00
  - Discount percent: 15% / Discount amount: $34.50 (per-item discount derived from package-level discount)
- Item 2: Peels (VI PEEL / PURIFY): QTY 1 TX — $230.00 (same; partial visible)
- Item 3 likely below fold

**Action bar:** Cancel + DONE

### VISUAL MARKERS

- **Per-item discount derivation** — the package's overall discount is distributed to each item: 15% off $230 = $34.50 saved per item × 3 items = $103.50 total saved
- **Each package item is a separate row** with its own discount fields — granular accounting for package economics
- **Active on** is the package's overall validity start date; individual redemptions presumably have their own redemption-tracking

### ARCHITECTURAL OBSERVATIONS

**Package items are explicitly enumerated as separate line items** (not aggregated into one "3-Pack" line). This reveals the substrate model:
- Package = parent entity
- Package items = child entities (1-to-many)
- Each child has its own price + discount
- Aggregation (3 × $230 = $690 list, minus 3 × $34.50 = $103.50 discount = $586.50 selling — close to Step 08's NEO Science RLT 16-Pack pattern but for a different brand)

For OMNI commerce DL:
- Package = `service_package` row
- Package items = `service_package_item` rows (1-to-many on package)
- Each item has its own redemption state, discount, validity tracking
- Allows per-redemption tracking (which item was used when, by whom, against which encounter)

**Why per-item enumeration matters:**
- Refunds: if patient cancels after using 1 of 3 redemptions, the refund logic operates on remaining items
- Reporting: which package items were redeemed vs unused vs expired
- Gifting/transfer: if the package supports transfer, individual remaining items can be gifted
- Audit: per-item lifecycle is auditable

**For Q3 (4-entity split validity) finding (Q3a 4-entity split right number):** packages add 2 more entities (`service_package` parent + `service_package_item` child). Combined with prior findings, OMNI commerce DL needs **at least 7 commerce primitives**:
1. Product (physical/SKU inventory)
2. Service-entitlement (service-as-Billable-Item with sessions/duration/active-on)
3. Contract (recurring billing commitment with member-tier eligibility)
4. Package (bundle of service entitlements with package-level discount)
5. Package-item (individual redemption within a package)
6. Gift-card (transferable stored-value)
7. Account-payment (debit against balance, no item)
8. Tip (gratuity attribution to staff)

= **8 commerce primitives**. Layer 2 Section G expansion scoping is concrete here.

**Active on default = 05/13/2026 (today)** — same default as service entitlements (Step 03). Consistent UX pattern for "redeemable starting when?"

**Per-item discount derivation as "computed but stored" pattern:** the 15% / $34.50 fields appear to be derived from the package-level discount. Yet they're shown as editable per-item. This implies:
- The package has a default discount (likely set on the package definition)
- The discount propagates to each item at package-add-to-cart
- Staff can edit per-item discount post-add (override)

For OMNI: package-level discount is stored on the package; per-item discount overrides are stored on the item. Both are auditable. Layer 2 Section G captures the convention.

---

## Cross-references

- **Manifest rows updated:** rows 71, 72, 73, 74, 75, 76, 77, 78, 79 (9 chronological screens in Batch 7); see [mindbody_ingestion_manifest.md](mindbody_ingestion_manifest.md).
- **Chat navigation map references:**
  - Marker 2 (line 701, ~385 lines) — Knox's "Day 0 parity = scheduling + checkout + commerce" — this batch covers 4 of the 7 commerce categories: Services (Step 01-03) + Autopays-contracts (Step 04-06) + Tips (Step 07) + Packages (Step 08-09).
  - Marker 4 (line 1616, ~537 lines) — Knox's "Account operations are editable, runnable, and destructive" — Step 04-06 surfaces the BUYER side of contract/autopay creation; the post-purchase account-operations view is implicit (TBD batch).
  - Marker 5 (line 2153, ~445 lines) — Knox's "service catalog as operational infrastructure" — Step 01-02 confirms the same service catalog is the source of truth across appointment-grid surface AND POS Browse > Services surface.
- **Pasted text settings cross-refs:**
  - [mindbody_settings_class_course_options_raw.md](mindbody_settings_class_course_options_raw.md) — the "Classes" group in Step 01 cross-references the 89-named-settings page in this raw file. Mindbody has substantial Classes settings; the user's medspa configuration uses Classes minimally.
  - [mindbody_settings_room_requirements_raw.md](mindbody_settings_room_requirements_raw.md) — the 132-service catalog includes the 5 Medical Visits services in Step 02.
- **User feedback cross-refs:**
  - **Gap #2 (intended visit vs actual treatment):** Step 03 (Medical Weight Loss Initial detail with Sessions + Duration + Active on) is concrete evidence for the service-as-prepaid-entitlement pattern that supplements the service-as-product workaround. Mindbody uses BOTH patterns; OMNI's Encounter Container with planned-vs-rendered handles both cleanly.
  - **Gap #3 (memberships + subscriptions + POS + retail + gift cards + loyalty rewards woven):** Step 04-06 surfaces Autopays/contracts (memberships+subscriptions); Step 07 Tips; Step 08-09 Packages. Multi-primitive commerce surface confirmed.
  - **Gap #4 (progress notes attached to visits, "consider how those get attached to visits"):** Step 03 + 06 Notes (optional) per-line-item are NOT progress notes (those are clinical); the per-cart-line notes are commerce annotations. Different substrate.
  - **Gap #7 (Hims-like weight loss plan attached to visits):** Step 02 Medical Visits category includes "Medical Weight Loss" + "Hormone Therapy" services — both Hims-style async-eligible families. Step 03 Sessions + Duration + Active on attributes are the substrate for a multi-session weight loss program.
- **Knox synthesis statements to reference in Layer 2:**
  - "Day 0 parity = scheduling + checkout + commerce" (marker 2, ~line 705-720) — Steps 01-09 collectively cover 4 of the 7 commerce primitives Knox enumerates
  - "Account operations are editable, runnable, and destructive" (marker 4, ~line 1620-1640) — Step 04-06 shows buyer-side; account-operations view is the seller-side (TBD batch)
  - "Service catalog as operational infrastructure" (marker 5, ~line 2155-2175) — Step 01 (Browse > Services categories) is concrete projection of the catalog into POS context
- **Supplemental cross-refs (Step 0.5 supplemental files):**
  - [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1 — 4-entity split: Step 03 service-entitlement is the cleanest concrete instance of Schedulable Service → Billable Item lifecycle attributes. **Confirmed insufficient** (4 entities → 8 commerce primitives needed).
  - [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 3 — 5 execution modes: Step 04 BH+ Elite contract is **`hybrid` mode** (recurring billing + service entitlement + member tier + commerce primitive). Single `mode` attribute on a service line is multi-axis.
  - [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 5 — encounter profiles enumeration: Classes (Step 01) is missing from Knox's profile list. Group-class encounter profile must be added.
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q1 — Classes + Appointments split concrete evidence for encounter profile enumeration extension.
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q3 — 4-entity split insufficient; expansion to 8+ commerce primitives concretely scoped.
  - [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md) Q4 — mode-per-service-line is multi-axis; single `mode` attribute insufficient; need (`booking_mode` + `commerce_mode` + `entitlement_mode` + `member_tier_eligibility`) at minimum.

## Outstanding observations / TBD

- **Classes substrate** — the user's medspa has only "Category 1" under Classes; what are Classes substantively? Need a Classes-detail screen OR a Classes admin/setup screen. Cross-reference [mindbody_settings_class_course_options_raw.md](mindbody_settings_class_course_options_raw.md).
- **CHECKOUT commit flow** — payment method selection? receipt generation? email/print? Need post-checkout screens.
- **Contract Pay Now toggle implications** — what happens when ON vs OFF post-DONE? Need a post-checkout view of the contract showing first charge state.
- **Per-item discount override audit** — does Mindbody capture which staff applied a discount override on a package item? Need staff-attribution screens for discount overrides.
- **Package redemption tracking** — once a package item is redeemed against an appointment, does it show as "redeemed" in a subsequent view? Need post-redemption account view.
- **Multi-recipient tip** — can multiple tips be added to one cart? Need a screen with multiple Tip line items.
- **Member-only services visibility** — does "BH+ | Hormone Balance" appear in the Browse > Services > Medical Visits view for non-members? Does the price differ? Need a non-member POS view.
- **Contract Duration display field** — Step 05 shows "1 Month" as a non-editable display; can Duration be edited per-contract? Need contract admin/edit surface.
- **Contract items "RECURRING" sub-header** — implies non-recurring sub-headers may also exist (e.g., ONE-TIME or ENROLLMENT). Need a contract with multiple item types.
- **Active on field future-dating** — Step 03 + Step 09 default to today; Step 05 (contract Start date) defaults to next month. Different defaults per primitive type — operational pattern that should be intentional.
- **Service-as-Billable-Item Sessions field** — Step 03 shows Sessions = 1 default; can Sessions be > 1 (e.g., buy a 6-session bundle of one service)? If so, how does redemption decrement? Need Session-count > 1 screens.
