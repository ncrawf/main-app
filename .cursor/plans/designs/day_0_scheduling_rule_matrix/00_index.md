# Day 0 Scheduling Rule Matrix — Index

**Date:** 2026-05-17
**Status:** ROUND 1 — index skeleton + Domain 1 only. Domains 2-7 land in subsequent rounds with explicit user + Knox review checkpoints between each.
**Anchor:** Day 0 Build Contract commit `6dc1286` is the frozen build-facing target. This rule matrix translates the Build Contract + locked + DRAFT doctrine into evidence-backed, buildable rules.
**Discipline:** every rule cites Mindbody (hard evidence) + 1-3 cross-app pattern references (analogies for pressure-testing, NOT hard evidence per Knox 2026-05-17 patch) + 1-3 doctrine / Build Contract / preferences locked / post-mortem refs (hard evidence). Mindbody is **EVIDENCE OF TENANT NEEDS**, not a substrate template. Cross-app references force broader pattern discovery. Substrate pressure-test verdicts surface real gaps without silent invention.

---

## §1 Purpose

Convert the patched OMNI scheduling foundation into Day 0 buildable rules across 7 domains. Each rule is:
- **Evidence-driven** (not imagination-driven) — cites Mindbody behavior, cross-app pattern, doctrine reference, or user-direction quote
- **Substrate-mapped** (not free-floating) — every rule names the substrate primitive that carries it; flags NEW SUBSTRATE NEEDED if existing primitives genuinely don't carry it
- **Phase-tagged** (DAY_0 / M1-2 / M3-6 / FUTURE) — Day 0 rules fully designed; later phases listed as "Deferred Rule Candidates" name-only

The rule matrix is the **specification for substrate slice scoping**. Substrate slice landing happens after the rule matrix is complete, reviewed, and substrate gap audit is resolved.

---

## §2 Flight-lane discipline (binding for all rules across all domains)

The single biggest risk: Opus reads Mindbody too literally and produces a "Mindbody but renamed" rule set with hardcoded values like `aesthetic_visit`, `medspa_appt`, `derm_visit`. Post-mortem [Pattern 7](../../../docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md#pattern-7--treating-mindbody-ui-labels-as-substrate-vocabulary) is the named failure mode.

**Lane:** Use Mindbody as ONE example among many. Translate observed behavior into generic OMNI primitives. Pull cross-app evidence from other scheduling/calendar/booking systems to validate the abstraction. Stay buildable but high enough to extract the platform rule.

### §2.1 Cross-app pattern references (each rule cites 1-3; these are ANALOGIES for pressure-testing, NOT hard evidence)

**Important distinction (Knox 2026-05-17 patch):** Cross-app references in this matrix are pattern-level analogies used to pressure-test whether the OMNI abstraction is sound. They are NOT hard evidence in the rigorous sense. Without sourced documentation per app, cross-app references serve as DESIGN PRESSURE TESTS, not implementation prescriptions. **Hard evidence is:** Mindbody ingestion (sourced from 190 screenshots + verbatim chat) + user 15% gap list (verbatim) + locked + DRAFT DL refs + Build Contract sections + post-mortem patterns + preferences locked record.

| System | What pattern it informs |
|---|---|
| **Restaurant POS / OpenTable / Toast** | Menu hierarchy (category → item → modifier); combo meals as presets; broad-default vs guided ordering; party-size as resource axis |
| **Airline booking (Delta / United / Expedia)** | Fare class (Economy / Economy Plus / Business / First) as commercial variant of one flight, NOT as a "flight type" |
| **Amazon product taxonomy** | Browse category → product → variant; broad search vs guided filter; arbitrary-depth hierarchy |
| **Epic / Cerner / athenaHealth scheduling** | Department / appointment-type / visit-type / encounter-type explicit separation; FHIR-aligned vocabulary precedent |
| **Calendly / Cal.com / Zoom Scheduler** | "Event type" as bookable affordance, separated from the actual meeting/encounter |
| **Boulevard (medspa-native competitor)** | Service categories with add-ons; differs from Mindbody on bundle UX |
| **Hospital OR / endoscopy block scheduling** | Procedure + room + provider + anesthesiologist + MA as multi-resource bundle with prep/finish time |
| **Mindbody** | Hard evidence base (sourced ingestion) — see "Mindbody ingestion evidence" cross-link section below |

### §2.1.5 Gate-timing taxonomy (binding cross-DL doctrine per Knox 2026-05-17 Round 1.7 correction)

Eligibility requirements (consent, intake, clinical clearance, age, license, jurisdiction, prior consult, substance class, member-only, federation permeability) do NOT all fire at booking commit. The substrate exposes 5 distinct timings; tenant-policy assigns each requirement to one per service.

| Gate timing | What it gates | Default for |
|---|---|---|
| `booking_visibility` | Whether service/preset appears in patient self-booking | `service.self_bookable = FALSE` visibility decisions |
| `booking_hard_gate` | Blocks appointment creation at booking commit | Provider license + jurisdiction; intake-first when explicitly configured; age limits without workaround |
| `pre_arrival_task` | Created at booking; pre-arrival completion; does NOT block booking | **Intake (default for normal services)** |
| `pre_performance_gate` | Blocks `encounter_line` creation until satisfied | **Consent (default for normal medspa services — Botox / Hydrafacial / LHR / Filler)** |
| `closeout_documentation_gate` | Blocks closeout / attestation | Lot capture; provider signature; chart note |

**Binding rule:** Consent is usually `pre_performance_gate`, NOT `booking_hard_gate`. Patient books Hydrafacial → arrives → signs consent at check-in → treatment proceeds. Conflating consent into booking gates breaks basic medspa flow.

Substrate location: Domain 2 (Booking composer / availability) will model `service_policy` (DL-19 inv 18) to admit per-requirement `gate_timing` ENUM. Day 0 Domain 1 binds the TAXONOMY (TM-12 + DL-19 preamble); Domain 2 implements the substrate column as Amendment D candidate.

### §2.2 Anti-copy warnings (every rule honors)

These are **forbidden patterns**. If a proposed rule produces any of these, the rule is wrong and must be redesigned:

- **No hardcoded substrate enums** like `aesthetic_visit`, `aesthetic_appt`, `medspa_visit`, `derm_visit`, `provider_visit`, `GI_visit`, `injectable_visit`, `peptide_visit`, `hrt_visit`, `office_visit_aesthetic`. Visit type is a TENANT CATALOG concept, not OMNI substrate vocabulary.
- **No vendor labels in substrate enums** — Allē, Aspire, Cherry, ClassPass, CareCredit, GreenSky, Botox, Dysport, Daxxify, Hydrafacial, SkinPen, CoolSculpting are tenant catalog labels (free-form STRING on `booking_preset.display_label` / `service.name` / `payment_method.label` / `planned_details.preferred_product`). Vendor names NEVER live in substrate enum values.
- **No "Mindbody but renamed" rules** — if a rule is just renaming Mindbody's `appointment_type` to OMNI's `service` with no semantic difference, the underlying tenant need was missed. Translate, don't transliterate.
- **No silent substrate invention** — if a rule needs a new field or table, FLAG it explicitly via the substrate pressure-test verdict. Never silently add columns.
- **No Mindbody UI labels as substrate vocabulary** — Mindbody calls them "Notes," "Add-Ons," "Pricing Options." OMNI substrate calls them `appointment_staff_note_entry`, `appointment_item with parent_item_id`, `pricing_option`. Tenant CAN call them whatever they want via DL-19 inv 12 vocabulary override; substrate stays generic.

---

## §3 Rule template (16 parameters in two sections)

Each rule across all 7 domains follows this exact structure. Section A (flight-lane translation) runs FIRST and forces the abstraction discipline BEFORE Section B (rule definition). The template applies uniformly so cross-domain consistency is maintained.

```markdown
### Rule [DOMAIN-NN]: [short descriptive name]

**Phase:** DAY_0 | M1-2 | M3-6 | FUTURE

#### Section A — Flight-lane translation

1. **Mindbody behavior observed (HARD EVIDENCE):** [batch ref + screenshot ref + 1-3 sentence description; or "n/a — gap, not in Mindbody"]
2. **Cross-app pattern reference (ANALOGIES for pressure-testing, NOT hard evidence):** [1-3 systems from §2.1 + brief description of pattern transferred]
3. **Underlying tenant need:** [the pure abstraction; vendor-free; specialty-free; what the tenant actually needs the platform to do]
4. **OMNI generic primitive / rule:** [the platform answer; substrate FK + behavioral rule]
5. **Divergence / improvement:** [where OMNI intentionally deviates from Mindbody or other apps, and why]
6. **Anti-copy warning:** [explicit list of forbidden values / patterns for this rule's domain]
7. **Substrate pressure-test verdict:** [one of:]
   - **OK** — existing DL-15/17/19/20 primitives sufficient (cite invariants)
   - **OK with extension** — existing primitives carry it but need minor field addition (cite primitive + proposed extension; flagged for Phase 1 DL amendment, NOT done here)
   - **NEW SUBSTRATE NEEDED** — existing primitives genuinely cannot carry it (justify why pressure-test fails + brief sketch of needed substrate + proposed DL amendment note; flagged for Phase 1 doctrine discussion, NOT designed here)

#### Section B — Rule definition

8. **Trigger:** [event or condition that fires the rule]
9. **Required inputs:** [FK refs to substrate; user-supplied fields; system-provided fields]
10. **Decision logic:** [deterministic; explicit handling of nulls, defaults, edge cases; pseudocode-level clarity]
11. **Output / state change:** [substrate writes; event emissions; UI projection changes]
12. **Owning substrate:** [which DL primitives carry it; FK refs to specific invariants]
13. **UI surface:** [where staff/patient sees it; consumer of the rule]
14. **Failure mode:** [what happens if inputs are missing or invalid; graceful degradation; never patient-facing ugliness]
15. **Audit / event:** [what event taxonomy entry fires; per DL-16 envelope + amendment 42 outbound trigger registry]
16. **Evidence citations (HARD EVIDENCE ONLY — distinct from cross-app pattern reference above):** [1-3 sources from: DL ref / Mindbody batch ref / Build Contract section / preferences locked ref / post-mortem pattern ref / user 15% gap. NOT cross-app references — those go in Section A.2.]
17. **Test case:** [concrete scenario walked through the rule; e.g., "LHR Brazilian booked, 5 areas performed"]
```

---

## §4 Substrate pressure-test verdict legend

Each rule MUST carry one of these verdicts. Aggregated at the end of each domain to flag DL patch candidates.

| Verdict | Meaning | Action |
|---|---|---|
| **OK** | Existing DL-15/17/19/20 invariants carry the rule as-is | None — rule is substrate-slice-ready |
| **OK with extension** | Existing primitives carry it; minor field addition needed | Flag for Phase 1 DL amendment (NOT done in rule matrix; documented as "proposed DL amendment" note) |
| **NEW SUBSTRATE NEEDED** | Existing primitives genuinely cannot carry it | Flag for Phase 1 doctrine discussion (NOT designed in rule matrix; documented as "proposed DL amendment" note with rough sketch) |

At end of each domain, the substrate gap audit aggregates: "Of N rules, X are OK, Y need extensions, Z need NEW SUBSTRATE." If Z > 0, the corresponding DL DRAFT(s) may need patching BEFORE the next domain starts.

---

## §5 Phase legend

| Phase tag | Meaning | Scope this matrix |
|---|---|---|
| **DAY_0** | Must ship Day 0 of OMNI scheduling release | Fully detailed per template above |
| **M1-2** | Month 1-2 hardening; substrate may need refinement | Listed name-only in "Deferred Rule Candidates" section per domain |
| **M3-6** | Month 3-6 expansion | Listed name-only in "Deferred Rule Candidates" |
| **FUTURE** | Year 1+ scope; explicit deferral per Build Contract §8 phasing | Listed name-only in "Deferred Rule Candidates" |

Day 0 phase scope is anchored to Build Contract commit `6dc1286`. M1-2 / M3-6 / FUTURE scope is informed by Build Contract §8 phasing + Build Contract deferrals + parked design notes.

---

## §6 The 7 domains (Round 1 status)

| # | Domain | File | Round | Status | Rule count Day 0 | Substrate verdicts |
|---|---|---|---|---|---|---|
| 1 | Treatment menu / visit-type rules | [01_domain_treatment_menu.md](01_domain_treatment_menu.md) | **Rounds 1 + 1.5 + 1.6 + 1.7 (Knox gate-timing correction)** | **AUTHORED + PATCHED + AMENDMENTS A/B/C APPLIED + Amendment D candidate for Domain 2** | 30 Day 0 | 29 OK / 1 OK-with-extension (TM-12 → Amendment D for Domain 2) / 0 NEW |
| 2 | Booking composer / availability rules | [02_domain_booking_composer.md](02_domain_booking_composer.md) | **Round 2 + 2.5 + 2.6 (Amendments D + E + F applied; dual-target routing guardrail; Round 3 pre-flight guardrails locked)** | **AUTHORED + PATCHED + GUARDED** | 34 Day 0 (BC-09 expanded to 3 rules for provider routing) | 34 OK / 0 OK-with-extension / 0 NEW |
| 3 | Appointment lifecycle rules | [03_domain_appointment_lifecycle.md](03_domain_appointment_lifecycle.md) | **Round 3 + 3.1 (Amendment G applied; Round 3.1 doctrine + cross-domain seam locked)** | **AUTHORED + PATCHED** | 24 Day 0 | 24 OK / 0 OK-with-extension / 0 NEW |
| 4 | Confirmation / outbound round-trip rules | (deferred) | Round 4 | NOT STARTED | — | — |
| 5 | Encounter creation rules | (deferred) | Round 5 | NOT STARTED | — | — |
| 6 | Checkout / commerce / entitlement rules | (deferred) | Round 6 | NOT STARTED | — | — |
| 7 | Documentation / evidence rules | (deferred) | Round 7 | NOT STARTED | — | — |
| Final | Scenarios validation (10 scenarios end-to-end) | (deferred) | Final round | NOT STARTED | — | — |

**Round cadence:** one domain per round. After each domain lands, STOP and report substrate gap audit + open decisions. User + Knox review BEFORE the next round starts. Final round walks 10 named scenarios end-to-end across all 7 domains to verify no gap.

**IMPORTANT — Domain 1 + 2 completion is NOT scheduler completion (Knox 2026-05-17 refinements + Round 2.6 chat review):** Domain 1 solves treatment-menu / visit-type rules. Domain 2 solves booking composer / availability / provider routing. Combined, they cover catalog + booking composition + axis atomicity + gate timing + provider routing — but NOT lifecycle, confirmation, encounter creation, checkout, or documentation. Substrate "holds" only against the concerns pressure-tested so far. The remaining dangerous domains:

- **Domain 3 (Appointment lifecycle rules)** — 13-state lifecycle + status_flags + reschedule/no-show/waitlist. See **Round 3 binding guardrails §2.3 below**.
- **Domain 4 (Confirmation / outbound round-trip rules)** — CNS round-trip per DL-20 inv 40; AI classifies, deterministic rules + staff decide.
- **Domain 5 (Encounter creation rules)** — owns scheduled-first / walk-in / async / ad-hoc-video / message-escalation / lab-review-initiated encounter paths + provider routing target #2 (async provider queue per Round 2.6 guardrail).
- **Domain 6 (Commerce / entitlement)** — packages, memberships, promos, deposits, refunds, commission, checkout, entitlement redemption priority. Mindbody-era workarounds (treatment deposit as $0 pricing option / cancellation policy as $0 pricing option / 7-tier Botox) all collapse here.
- **Domain 7 (Documentation / evidence)** — "booked Botox, performed Xeomin + Kysse with barcode/lot/expiration" — this is where 3-layer pattern proves itself OR breaks. Lot capture, attestation tiers, encounter immutability, partner imaging device naming, intake/consent/clinical media unified substrate.

Each may surface new substrate gaps. Treating "Domain 1+2 holds" as "scheduler holds" would be premature.

### §2.3 Round 3 binding guardrails (Knox/chat 2026-05-17 Round 2.6 review)

Before Round 3 (Domain 3 — Appointment lifecycle rules) starts, two cross-cutting guardrails are locked to prevent Domain 3 from becoming a junk drawer.

#### Guardrail #1 — status_flags BITMASK are DERIVED indicators, NOT canonical truth owners

Per DL-15 amendment 29 (16-flag status_flags BITMASK), the appointment carries `status_flags` orthogonal to lifecycle state. **Round 2.6 binding clarification (anti-junk-drawer):** status_flags are **MATERIALIZED PROJECTIONS per DL-16 inv 3 category e** of truth that lives in DOMAIN-OWNING substrates. status_flags is a fast query/display surface; it is NOT the source of truth for any flag.

Canonical truth lives elsewhere per this binding mapping:

| status_flag | Canonical truth lives in | Domain owner |
|---|---|---|
| `Confirmed` | `appointment.confirmation_state = 'confirmed'` (DL-20 inv 33; patient-acknowledged per DL-15 amendment 8) | Domain 4 (confirmation round-trip) |
| `Arrived` | Domain 3 lifecycle state transition `scheduled → checked_in` event | Domain 3 (appointment lifecycle) — owned |
| `Forms_complete` | `care_episode_task(task_kind='intake_complete').status = 'complete'` OR `intake_session.status = 'submitted'` (DL-22) | Domain 7 (documentation / evidence) + Domain 5 (intake submitted creates async encounter path) |
| `Card_on_file` | `payment_method` row exists for patient_id with `tokenized_card` populated (DL-17 inv 18) | Domain 6 (commerce / entitlement) |
| `Consent_signed` | `consent_artifact` row exists for (patient_id, service_id, modality) with `signed_at` populated (DL-22) | Domain 7 (documentation / evidence) |
| `Deposit_paid` | `commerce_order_line(line_kind='treatment_deposit', status='paid')` linked to appointment_id (DL-17 inv 6) | Domain 6 (commerce / entitlement) |
| `Clinical_clearance_received` | `service_policy_eligibility_gate(clinical_clearance)` satisfied per Amendment D evaluation | Domain 2 / Domain 5 (gate evaluation) |
| `Late` | DERIVED from `appointment.planned_window_start` vs `NOW()` at check-in time | Domain 3 — derived |
| `Provider_running_behind` | Operational signal — DERIVED from staff schedule slip detection | Domain 3 — derived (operational, not canonical) |
| `Photos_captured` | `clinical_media` rows exist for encounter (DL-22) | Domain 7 |
| `Note_pending` | DERIVED from `encounter_line.attestation_id IS NULL` AND `encounter.status != 'closeout_complete'` (DL-20) | Domain 7 |
| `Attestation_pending` | Same as Note_pending; DERIVED from DL-18 inv 9 attestation envelope | Domain 7 |
| `Closeout_complete` | `encounter.status = 'closeout_complete'` (DL-20 inv 11) | Domain 5 / Domain 7 |
| `First_visit` | DERIVED from `patient.first_visit_at IS NULL` at booking time | Domain 3 — derived |
| `Walk_in` | Set at booking time per BC-07; reflects `service.service_type = 'arrival'` | Domain 2 (booking composer) — owned |
| `Bulk_reschedule_pending` | Operational flag during bulk-cancel/reschedule events | Domain 3 — operational state |

**Binding rule (Round 2.6 anti-junk-drawer):** Domain 3 rules MUST NOT create new canonical truth on appointment for flags whose canonical owner is in another domain. Domain 3 owns the BITMASK SHAPE + the DERIVATION/PROJECTION discipline + flags genuinely owned by appointment lifecycle (Arrived / Late / Bulk_reschedule_pending / Walk_in for booking-time, First_visit for booking-time). Domain 3 does NOT own Confirmed (Domain 4) / Forms_complete (Domain 7) / Consent_signed (Domain 7) / Deposit_paid (Domain 6) / Card_on_file (Domain 6) / Photos_captured (Domain 7) / Note_pending (Domain 7) / Attestation_pending (Domain 7) / Closeout_complete (Domain 5+7). Those flags are SET BY their owning domain via materialized projection update + emitted event.

#### Guardrail #2 — Appointment lifecycle does NOT swallow encounter creation

Per DL-20 inv 33 (appointment as Layer 1 planned commitment) + inv 35 (encounter as Layer 2 actual care moment) + 3-layer foundation:

- **Domain 3 (Appointment lifecycle) owns** ONLY the appointment lifecycle state machine: `proposed / held / hold_expired / scheduled / scheduled_pending_deposit / checked_in / in_progress / completed / cancelled / no_showed / rescheduled / disputed / archived`. Plus reschedule = atomic compensation (cancel + book), no-show recovery, waitlist promotion, late-cancel policy fees, post-retention archival.
- **Domain 5 (Encounter creation) owns** all `encounter` substrate behavior: scheduled-first / walk-in / async / ad-hoc-video / inbound-message-triggered / cns-initiated-async / lab-review-initiated paths per DL-20 inv 37. Provider routing target #2 (async provider queue) per Round 2.6 guardrail also lives here.

**Binding rule (Round 2.6 anti-collapse):** Domain 3 lifecycle states fire on the appointment row. Encounter creation is a SIBLING event that fires per DL-20 inv 37 (Domain 5). The `appointment.fulfillment_encounter_id` FK on the appointment links the two but does NOT collapse them. Booked Botox is NOT the same as performed Botox. Booked Botox is NOT consent signed. Booked Botox is NOT Xeomin/Kysse units/lots/areas captured. Round 3 must preserve this distinction.

Examples Domain 3 must NOT swallow:
- Encounter_line creation when work happens (Domain 5)
- Performed product/lot/units/treatment_areas capture (Domain 5 + 7)
- Provider attestation at closeout (Domain 7)
- Commerce order line creation at sale close (Domain 6)
- Consent signed at check-in (Domain 7)

These each have their own owning substrate + domain. Round 3 stops at lifecycle transitions and references-out (FK to encounter_id when encounter created; status_flag updates via materialized projection of owning-substrate state).

Cross-link: Round 2.6 guardrails inherited into every subsequent domain round; explicit substrate-slice readiness checklist will include "does this domain stay within its canonical truth?" as a binding gate.

### §2.4 Round 3.1 binding doctrine — Same service ≠ different service for ANY entitlement context (extended Round 3.2)

Per Knox/chat 2026-05-17 + user direction post Round 3 review. Locked before Domain 6 (commerce / entitlement) lands so the doctrine is in place when Domain 6 authoring starts.

**Round 3.2 extension scope (Knox/chat 2026-05-17 post Round 3.1 review):** the original Round 3.1 framing focused on member vs non-member. The same doctrine applies to ALL entitlement / payment / discount / package / pricing contexts — not just memberships. Same service / same appointment_item / same encounter_line; only commerce + entitlement resolves the route.

**Anti-pattern (binding rejection — extended):** Tenants MUST NOT create separate `service` rows distinguished by entitlement context. ALL of the following are catalog pollution:

| Anti-pattern (REJECTED) | Correct model |
|---|---|
| "BH Member HydraFacial" vs "BH Non-Member HydraFacial" | ONE Hydrafacial service; commerce resolves member benefit vs self-pay |
| "June Member HydraFacial" vs "July Member HydraFacial" | ONE Hydrafacial service; commerce resolves which monthly benefit period applies |
| "Membership HydraFacial Redemption" as a service | ONE Hydrafacial service; entitlement_redemption substrate handles the benefit-consumption truth |
| "Member Botox $14/u" vs "Non-Member Botox $14/u" | ONE Neuromodulator service; pricing_option + discount_program resolves $12 vs $14 |
| "SkinPen 3-Pack Session" vs "SkinPen Self-Pay Session" | ONE SkinPen service; entitlement substrate (package multiple_sessions) tracks count remaining |
| "Red Light Member Visit" vs "Red Light Single Visit" | ONE Red Light service; entitlement unlimited_period vs single_session resolves the route |
| "GLP-1 Included Provider Visit" vs "GLP-1 Self-Pay Visit" | ONE GLP-1 followup service; entitlement substrate handles included-visit vs self-pay |
| "Hydrafacial with Package Credit" vs "Hydrafacial with Promo" | ONE Hydrafacial service; entitlement_redemption + applied_promo_claim resolve at checkout |

This is Mindbody-brain catalog pollution. It corrupts treatment menu + appointment_item + encounter_line + analytics + provider workflow.

**Binding doctrine:** A service is a service regardless of HOW the patient ends up paying for it. The substrate layers:

| Layer | What it carries | Member vs non-member? |
|---|---|---|
| `service` (DL-15) | Operational kind ("Hydrafacial") | SAME |
| `appointment_item.planned_service_id` (DL-20 inv 34) | Planned service for this booking | SAME |
| `encounter_line.service_id` (DL-20 inv 12) | Performed service | SAME |
| `commerce_order_line` (DL-17 inv 6) | Billing line | SAME service; DIFFERENT pricing_option_id + entitlement_redemption + applied_promo_claim_id resolves payment route |
| `entitlement_redemption` (DL-17 inv 22-23) | Whether membership benefit applies | RESOLVED here (member: benefit redeemed; non-member: full pay or package or self-pay) |
| `pricing_option` (DL-17 inv 1) | Commerce variant (price + commission + tier) | DIFFERENT pricing_option for member-discount-eligible vs full-price |

Provider performs the same service. Patient wants the same service. Scheduler displays the same service. Only OMNI's commerce/entitlement brain cares about the resolution.

**3 financial booking behaviors per service_policy_eligibility_gate (extension of Round 1.7 5-timing gate model):**
1. **Hard gate (`booking_hard_gate`)** — Patient cannot book unless financial condition satisfied. Example: sauna service requires `membership_current = TRUE` → booking blocked if membership payment failed; redirect to update payment method.
2. **Soft gate / warning (`pre_arrival_task` task with explicit financial-update kind)** — Patient can book; OMNI creates pre-arrival task. Example: "You booked Hydrafacial. Your membership payment appears unresolved. Please update card before your visit."
3. **Staff-mediated exception (`pre_performance_gate` or `closeout_documentation_gate`)** — Patient books; front desk must resolve before treatment or before checkout closes as member benefit. Example: membership status review at check-in or at closeout.

The service is the SAME. The financial route changes per policy + patient state. Tenant configures per service which behavior fires when.

### §2.5 Round 3.1 binding doctrine — Domain 3 ↔ Domain 6 seam (lifecycle event → commerce consequence)

Per Knox/chat 2026-05-17. Locked before Domain 6 lands.

**Binding rule:** Appointment lifecycle (Domain 3) and commerce + entitlement (Domain 6) are SEPARATE state machines coupled via events + policy. Domain 3 emits lifecycle events; Domain 6 consumes them + applies policy.

**Domain 3 owns (emits events):**
- `appointment.scheduled_committed`
- `appointment.checked_in`
- `appointment.in_progress_started`
- `appointment.completed`
- `appointment.late_cancelled` (per LC-12 when lead-time policy violated)
- `appointment.honored_cancelled` (per LC-12 when within lead-time)
- `appointment.no_show_confirmed` (per LC-16)
- `appointment.rescheduled` (per LC-18; carries original + new appointment IDs)
- `appointment.disputed` (per LC-23)

**Domain 6 consumes + decides (applies commerce/entitlement consequence per policy):**
- Cancellation fee: charge or waive (per `cancellation_policy.late_cancel_fee_amount` + `staff_override_allowed`)
- Deposit disposition: retain / convert-to-credit / transfer-to-rescheduled / refund / waive (per `cancellation_policy.deposit_forfeiture_policy`)
- Entitlement disposition: forfeit benefit / preserve benefit / convert-to-credit / restore-with-staff-override (per entitlement policy + tenant rule)
- No-show fee: charge per `cancellation_policy.no_show_fee_amount` (or % of original)
- Account hold: create if balance unpaid + tenant policy admits hold
- Membership benefit redemption: redeem at completed checkout AFTER validation that benefit is still active + current + not previously consumed

**Binding anti-pattern:** Domain 3 lifecycle rules MUST NOT directly:
- Charge fees (commerce action — Domain 6)
- Retain deposits (commerce action — Domain 6)
- Forfeit entitlements (entitlement action — Domain 6)
- Restore entitlements (staff override — Domain 6)
- Compute account holds (commerce state — Domain 6)

Per Round 2.6 Guardrail #1: `Deposit_paid` and `Card_on_file` status_flags are DERIVED projections from commerce substrate, NEVER set by Domain 3 directly. Per Round 3.1 seam: lifecycle events trigger commerce policy evaluation; Domain 6 decides + applies.

**Entitlement reservation lifecycle (binding pattern per DL-17 inv 22-23):**
1. **Booking creates reservation** (NOT consumption): `entitlement_redemption_pending` row inserted per DL-17 inv 23. Entitlement status remains `active_redeemable`; one redemption "reserved" but not yet consumed.
2. **Completed visit redeems** (consumption): on appointment completion + commerce_order close, `entitlement_redemption` row finalized; entitlement.redemptions_used incremented; if exhausted → entitlement.status = `fully_redeemed`.
3. **Late-cancel / no-show may forfeit** (per policy): on `appointment.late_cancelled` or `appointment.no_show_confirmed`, Domain 6 evaluates entitlement policy:
   - `forfeit_benefit`: redemption consumed despite no service; entitlement decremented
   - `preserve_benefit`: reservation released; entitlement.redemptions_used NOT incremented
   - `convert_to_account_credit`: forfeit benefit AND credit dollar value to patient's account
   - `apply_as_discount_next`: forfeit current; flag patient_metadata for next-visit discount
4. **Staff override / restore**: staff with capability can manually restore forfeited entitlement OR override per-tenant policy with audit (Tier 2 attestation per DL-18 inv 8).

This prevents the Mindbody pattern where benefits appear consumed but services weren't actually performed (or vice versa).

**Closeout validation discipline (binding per Round 3.1):**
At checkout / closeout (Domain 6 + Domain 7), OMNI MUST revalidate before allowing redemption-as-benefit:
- Is the membership ACTIVE + CURRENT (billing payment settled, not just attempted)?
- Is the benefit for THIS PERIOD granted (not from previous month or future month)?
- Has the benefit already been USED (idempotency — preventing double-redemption)?
- Is there an ACCOUNT HOLD or unpaid balance per tenant policy?
- Has the benefit been FORFEITED via prior late-cancel/no-show?

If validation fails: front desk cannot close visit as member redemption. Resolution required: collect self-pay / update card and collect membership balance / apply approved discount-credit / manager override with reason / comp with attestation. This is the explicit anti-pattern that addresses the Mindbody workflow gap: "front desk services on the 20th + lets them walk out as member benefit without confirming June actually paid."

### §2.6 Round 3.1 binding doctrine — Financial eligibility gate family extension (Amendment D extension)

DL-19 inv 18 `service_policy_eligibility_gate.requirement_kind` ENUM is **registry-extensible per DL-16 inv 5**. Round 3.1 adds financial gate kinds (NOT new substrate; new ENUM values):

| New requirement_kind | Meaning | Typical gate_timing default | gate_payload schema |
|---|---|---|---|
| `payment_method_active` | Patient has valid + non-expired payment method on file | `pre_arrival_task` (soft) for most; `booking_hard_gate` for membership services where required | `{required_method_kinds: [tokenized_card, hsa_card, ...]}` |
| `membership_current` | Membership billing payment is settled (NOT just `member_only = TRUE`) | `pre_arrival_task` (soft warning) OR `pre_performance_gate` (block treatment) OR `booking_hard_gate` (tenant policy) | `{required_membership_tier_ids: [...], grace_period_days: 5}` |
| `entitlement_available` | Specific period/service benefit available + within window + not already redeemed/reserved | `pre_arrival_task` (warn if missing) OR `pre_performance_gate` (block treatment without entitlement) | `{benefit_kind: 'monthly_hydrafacial', period_resolver: 'current_month', allow_reservation_only: TRUE}` |
| `account_hold_clear` | No outstanding patient balance per tenant threshold | `booking_hard_gate` (high threshold) OR `pre_performance_gate` (treatment-time block) | `{threshold_amount: 100, exempt_for_emergency: FALSE}` |

These join existing requirement_kinds (clinical_clearance / consent / intake_complete / deposit / age_verification / license_validation / prior_consult_required / substance_class_authorization / member_only / federation_permeability / medical_director_review / lab_results_review) per Amendment D.

**Important distinction:** `member_only` (existing) means "patient has a membership at all" (binary). `membership_current` (NEW) means "membership billing payment is current/settled" (state-dependent). Tenants frequently need BOTH gates — `member_only` to filter who can book member-rate services + `membership_current` to ensure they can actually redeem the benefit. Domain 6 will own the binding patterns when authored.

### §2.7 Round 3.2 binding doctrine — Entitlement-aware continuation

Per Knox/chat 2026-05-17 post Round 3.1 review + user SkinPen / red light examples. Locked before Domain 6 authoring (Round 6).

**Binding doctrine:** OMNI does NOT just know what someone bought. OMNI knows:

1. **What entitlements remain** — package count remaining; current-period benefit available; unlimited-period eligible; quarterly/annual benefit reset windows
2. **When each entitlement is eligible** — within benefit window; not previously redeemed; not previously reserved on an active appointment; not forfeited via late-cancel/no-show
3. **When to prompt patient** — next recommended booking window per service cadence; entitlement approaching expiration; unused monthly benefit before reset
4. **What can be booked** — patient sees only services + presets where they have eligibility OR can self-pay (no "Member Only" service hidden when patient has eligible package credit)
5. **What should be applied at checkout** — automatic entitlement resolution pass identifies which benefit applies to which line; staff resolves conflicts or stacking-not-allowed cases

**Operational examples (binding for Domain 6 authoring):**

- *SkinPen 3-pack patient* checks out session 1 → entitlement ledger says: 2 sessions remaining; next recommended session window = (completed_at + 4-6 weeks). After ~4-6 weeks, Domain 4 / CNS messages: "Ready for your 2nd SkinPen session, Tracey? Let's get you booked." Booking flow surfaces the remaining package credit.
- *BH+ Elite member in June* → entitlement ledger says: June Hydrafacial available; June peel available (if quarterly cadence aligns); red light unlimited through June 30; Botox member pricing ($12/u) active; 15% retail discount active. Domain 4 / CNS messages: "Red light therapy is included in your BH+ Elite membership this month, Jon." Dashboard shows "Your available benefits" wallet view.
- *BH+ Elite member with failed June payment* → entitlement ledger says: membership_current = FALSE; benefits PAUSED. Domain 4 / CNS messages: "Your BH+ Elite benefits are paused until your payment method is updated." Booking flow surfaces the same services but financial route resolves to self-pay until membership_current = TRUE.

**Cross-domain consumption pattern:**

| Domain | Reads entitlement ledger for |
|---|---|
| Domain 2 (Booking composer) | Filter visible services per patient eligibility; surface "you have a benefit" messaging at booking time; gate via `entitlement_available` per §2.6 |
| Domain 3 (Appointment lifecycle) | Reserve entitlement at booking commit (per Round 3.1 §8.4); release reservation on honored cancel; flag forfeiture-candidate on late-cancel/no-show (Domain 6 decides disposition) |
| Domain 4 (Confirmation / outbound) | Compose continuation messages: "Ready for session 2" / "Your benefit is available this month" / "Membership payment needs attention" |
| Domain 5 (Encounter creation) | Read which entitlement was reserved for this appointment_item; carry through to performed encounter_line |
| Domain 6 (Commerce / entitlement) | OWN the ledger substrate + reservation + redemption + forfeiture + restoration + cart-level resolution pass at checkout |
| Domain 7 (Documentation) | Audit attestation chain referencing entitlement_redemption per closeout |

**Patient dashboard / scheduling UX surface (Domain 6 product surface, NOT new substrate):**

The dashboard projects the entitlement ledger as a "Benefits / Credits / Packages" wallet view:
- Available benefits per period (June Hydrafacial / Q3 peel / unlimited red light)
- Remaining package sessions (SkinPen 2 of 3 remaining)
- Included membership perks (Botox $12/u pricing / 15% retail / priority booking)
- Account credit balance + promo claims
- Expiration dates / reset dates
- Next recommended booking window per service cadence
- Book / Use / View restrictions CTAs

Scheduling UX surfaces entitlement at booking flow: "You have a SkinPen package session available — we'll apply one at checkout" / "Red light is included with your BH+ Elite this month."

Checkout UX runs the benefit resolution pass (per Round 3.2 §2.8 + Domain 6 authoring) and shows itemized application: "June Hydrafacial benefit applied / Member Botox pricing applied: $12/u / 15% retail discount applied to eligible products."

**Binding anti-patterns (Round 3.2):**

- Do NOT message about benefits without reading membership_current + entitlement_available state (per Round 3.1 §8.3 4-stage validation)
- Do NOT show "available benefit" UI without revalidating at booking + closeout (per Round 3.1 §8.3)
- Do NOT model entitlement-aware messaging as marketing layer (it's CARE COORDINATION + COMMERCE TRUTH — per Round 3.1 same-service doctrine)
- Do NOT create separate services for entitlement-aware vs self-pay flows (per Round 3.2 §2.4 extension)

### §2.8 Round 3.2 binding doctrine — Membership = bundle of benefit entitlements (NOT a single membership_credit)

Per Knox/chat 2026-05-17 post Round 3.1 review + user complex-membership examples (BH+ Elite: 1 free HydraFacial/month + 1 peel/quarter + unlimited red light + 15% retail + Botox $12/u + $50 SkinPen discount + priority booking + included provider visits). Locked before Domain 6 authoring.

**Binding doctrine:** A membership is NOT a single thing. A membership is a CONTRACT that GRANTS a BUNDLE of distinct benefit entitlements per billing cycle. Each benefit is a different substrate primitive:

| Benefit kind | Substrate primitive (existing) | Example |
|---|---|---|
| Recurring service credit | `entitlement` (pricing_option_type = `multiple_sessions` OR `single_session` with `activation_strategy = on_billing_cycle_start`) | 1 Hydrafacial / month |
| Periodic benefit (quarterly / annual) | `entitlement` with custom recurrence_rule on contract_recurrence_template | 1 peel every 3 months |
| Unlimited period benefit | `entitlement` (pricing_option_type = `unlimited_period`) | Unlimited red light during current billing period |
| Service discount (fixed $) | `discount_program` (program_kind = `flat_amount`) linked to eligible_pricing_options | $50 off SkinPen |
| Category retail discount (%) | `discount_program` (program_kind = `flat_percent`) linked to eligible_pricing_options | 15% off eligible retail |
| Pricing override (unit price change) | `discount_program` with new `program_kind = pricing_override` (potential **Amendment H candidate** — Domain 6 to evaluate) OR alternate pricing_option per member tier | Botox $14/u → $12/u member price |
| Priority booking / scheduling perk | Operational flag on `patient_relationship` OR `patient_metadata_axis_value(membership_tier)` read by DL-15 BC-09 routing strategy | VIP queue / faster confirmation |
| Included provider visit | `entitlement` with quarterly/monthly count | 1 GLP-1 followup / month included |

**Mechanism (per existing DL-17 preamble + DL-19 inv 9 patient_metadata + Round 3.2 binding):**

- Membership is an `autopay_contract` (DL-17 inv 11) with `recurrence_rule = FREQ=MONTHLY` (typical).
- Each successful billing cycle charge triggers `contract_recurrence_template` materialization: tenant-configured template defines what THIS cycle grants:
  - INSERT N `entitlement` rows per cycle (each benefit kind gets its own row)
  - SET / refresh `patient_metadata_axis_value(membership_tier)` for discount_program eligibility
  - SET operational flags on `patient_relationship` for scheduling perks
- Failed billing cycle: NO new entitlements inserted; existing PRIOR-cycle entitlements may expire per their `valid_to`; metadata_axis_value may revert to non-member tier per tenant policy.

**Cart-level benefit resolution pass (Round 3.2 doctrine for Domain 6 to implement):**

At checkout, OMNI runs a deterministic resolution pass across the full cart (NOT per-line in isolation):

1. **Identify eligible benefits for each cart line:**
   - Service credit available + within window + not reserved-elsewhere?
   - Discount program eligible per pricing_option + category?
   - Pricing override applicable per membership tier?
2. **Apply deterministic priority order** (per DL-17 inv 4 redemption priority):
   - Highest redemption_priority first
   - Ties broken by valid_to ascending (use-it-or-lose-it first)
   - Ties broken by purchased_at ascending (FIFO)
3. **Honor stacking rules** per `discount_program.combinable_with_other_promos` + tenant policy
4. **Surface conflicts to staff** when:
   - Stacking not allowed + multiple benefits eligible (patient/staff chooses)
   - Membership_current = FALSE but member benefit attempted (forces resolution per §8.3)
   - Package credit already used elsewhere (idempotency)
5. **Compute uncovered balance** + emit clear itemized application to UI

**Anti-patterns (Round 3.2 binding):**

- Do NOT model membership as `member = TRUE` → "apply 15% discount to everything." That hides which discount applies where + breaks reporting + corrupts the benefit ledger.
- Do NOT collapse multiple benefit kinds into a single membership_credit row. Each kind = own entitlement / discount_program / metadata_axis_value.
- Do NOT auto-apply benefits without validation per Round 3.1 §8.3 (membership_current + entitlement_available + account_hold_clear).
- Do NOT skip the cart-level resolution pass + just sum per-line discounts (loses stacking discipline + conflict surfacing).

### §2.9 Round 3.2 binding doctrine — Domain 6 mandatory pre-brief (binding when Domain 6 authoring starts)

Domain 6 (Checkout / commerce / entitlement) MUST address the following at Round 6 authoring start. NOT optional; binding doctrine from Round 3.2:

**A. Entitlement ledger** — the substrate that tracks what a patient HAS available:
- Package counts (used / remaining / total)
- Period benefits (monthly / quarterly / annual cycles)
- Unlimited-period benefits
- Benefit windows (valid_from / valid_to)
- Reservation state (per Round 3.1 §8.4 entitlement_reservation lifecycle)
- Redemption history (per appointment / per encounter_line)
- Forfeiture / restoration audit (per Round 3.1 §8.5)
- Conversion to credit / discount-next per policy

**B. Benefit/pricing rules** — the substrate that tracks WHEN and HOW benefits apply:
- Eligible services / pricing_options / categories per benefit
- Discount kinds: flat_percent / flat_amount / rotating_tier / cumulative_loyalty / **pricing_override** (Amendment H candidate — Domain 6 to evaluate if existing `program_kind` ENUM needs extension for unit-price overrides like "Botox $14/u → $12/u member price")
- Stacking rules (`combinable_with_other_promos`)
- Tenant override + staff override per DL-18 attestation
- Auto-apply vs surface-for-staff-decision policy

**C. Cart-level benefit resolution pass** (per Round 3.2 §2.8):
- Run at checkout (closeout_documentation_gate per Round 1.7 5-timing model + Round 3.1 §8.3 4-stage validation)
- Deterministic resolution per DL-17 inv 4 priority order
- Conflict surface when stacking not allowed
- Membership_current revalidation before allowing redemption-as-benefit (per Round 3.1 §8.3)
- Itemized output showing which benefit applied to which line

**D. Membership-as-bundle materialization** (per Round 3.2 §2.8):
- `contract_recurrence_template` configuration per membership tier
- On successful billing cycle: materialize N entitlements + refresh metadata + set operational flags
- On failed billing cycle: pause benefits per policy; do NOT silently grant new entitlements
- Manual restore / pause / cancel paths with audit

**E. Entitlement-aware continuation surfaces** (per Round 3.2 §2.7):
- Patient dashboard "Benefits wallet" view
- Booking flow entitlement messaging
- Scheduling UX "you have a benefit" surfacing
- Domain 4 / CNS continuation messaging from entitlement ledger
- Next-recommended-booking-window computation per service cadence

**F. Same-service doctrine compliance** (per Round 3.2 §2.4 extension):
- Domain 6 substrate writes MUST NOT create separate services for entitlement contexts
- All entitlement / payment / discount / package contexts resolve in commerce + entitlement substrate ONLY
- Service / appointment_item / encounter_line stay invariant across all patient payment routes

**G. Round 3.1 cross-domain seam compliance** (per Round 3.1 §2.5 + Domain 3 §8):
- Domain 6 consumes Domain 3 lifecycle events; emits commerce outcome events
- Domain 6 owns fee / forfeiture / restoration / refund / account-credit / deposit-disposition decisions
- Domain 3 ↔ Domain 6 coupling is event-driven, not direct mutation

**H. Generic benefit resolution engine compliance** (per Round 3.3 §2.10):
- ALL benefit sources are first-class citizens (membership / package / promo / gift_card / account_credit / staff_adjustment / loyalty / refund_credit / subscription / future tenant-extensible sources)
- NO `if patient.has_membership` branching by source
- Stacking rules per-benefit (`combinable_with_other_promos`), not per-source
- Source registry is registry-extensible per DL-16 inv 5 + 9

**I. Benefit attribution / value visibility compliance** (per Round 3.3 §2.11):
- EVERY applied benefit produces an attribution line (source / benefit_type / original_price / adjusted_price / quantity / savings_amount / eligible_line_item_id / stacking_position / staff_override_status)
- Surfaces: staff checkout cart / patient receipt / patient dashboard "Membership value summary" / booking estimate
- Pricing override (Botox $14/u → $12/u) MUST show "Standard $14/u → Member $12/u" — never silently applied
- Attribution substrate: `commerce_order_line_benefit_attribution` child OR denormalized JSONB (Amendment H part b — Domain 6 to evaluate shape)

**J. Shopify evidence base compliance** (per Round 3.3 §2.12):
- Domain 6 MUST cite Shopify evidence (10 buckets — products/variants/collections/discounts/stacking/gift_cards/subscriptions/checkout/customer_segments/receipt) as primary commerce + cart-resolution evidence
- Mindbody remains HARD EVIDENCE for medspa-specific scheduling + entitlement-reservation patterns
- Cross-app references (Stripe / Amazon / etc.) remain ANALOGIES per Round 1.5 terminology fix
- Targeted Shopify ingestion must be captured BEFORE Round 6 authoring starts

**K. Benefit stacking + conflict resolution compliance** (per Round 3.4 §2.13):
- Default to ANTI-DOUBLE-DIPPING — Round 3.4 7 default stacking rules locked
- 6 substrate fields per benefit (combinable_with_other_benefits / exclusive_group / stacking_priority / conflict_resolution_strategy / staff_override_allowed / patient_visible_attribution)
- Conflict resolution strategies (6 ENUM values: best_value_wins / highest_priority_wins / first_expiring_wins / package_redemption_wins / manual_staff_review / tenant_defined_order)
- Tenant configuration via policy profiles (medspa_anti_double_dip / aggressive_loyalty / payment_only_credits / manual_staff_resolution / tenant_custom), NOT toggle-soup
- Package + membership_discount on same line: DO NOT COMBINE by default (rule 2)
- Multiple memberships with overlapping eligibility: best_value_wins from exclusive_group (rule 1)
- Gift card / account credit: stored value, applies AFTER discounts (rule 5)
- Staff override: requires DL-18 Tier 2 attestation + reason_code + audit (rule 6)
- Non-applied eligible benefits ALWAYS visible to staff; patient-visible per `patient_visible_attribution` flag

**Potential Amendment H candidate (Domain 6 to evaluate; expanded per Round 3.3):** DL-17 inv 15 `discount_program.program_kind` ENUM currently has 4 values (flat_percent / flat_amount / rotating_tier / cumulative_loyalty). Round 3.3 expansion: Amendment H may need TWO parts:
- (a) `program_kind = pricing_override` value to support "Botox $14/u → $12/u member price" cleanly — OR alternate pricing_option per member tier (DL-17 inv 1 admits M:N).
- (b) NEW `commerce_order_line_benefit_attribution` child substrate (or denormalized JSONB column) to capture per-line attribution lines (source / benefit_type / original_price / adjusted_price / quantity / savings_amount / stacking_position / staff_override_status) for receipt + dashboard + booking estimate surfacing. Required for Round 3.3 §2.11 benefit attribution doctrine.

Domain 6 authoring decides shape; flagged here for Round 6 evaluation.

**Potential Amendment I candidate (Domain 6 to evaluate per Round 3.4 §2.13):** Benefit stacking + conflict resolution substrate fields. Existing substrate has `promo_code.combinable_with_other_promos` BOOLEAN (DL-17 inv 14) + `entitlement.redemption_priority` (DL-17 inv 4). Amendment I extends to `discount_program` (DL-17 inv 15) + `entitlement` (DL-17 inv 22) with:
- `combinable_with_other_benefits` BOOLEAN
- `exclusive_group` STRING NULL (benefits in same group resolve to one winner)
- `stacking_priority` NUMERIC
- `conflict_resolution_strategy` ENUM (6 values: best_value_wins / highest_priority_wins / first_expiring_wins / package_redemption_wins / manual_staff_review / tenant_defined_order)
- `staff_override_allowed` BOOLEAN
- `patient_visible_attribution` BOOLEAN

Plus tenant `commerce_stacking_policy_profile` setting (5 default profiles + tenant_custom) per DL-19 inv 1 + 4.

Domain 6 authoring decides shape; flagged here for Round 6 evaluation.

### §2.10 Round 3.3 binding doctrine — Generic benefit/discount/entitlement resolution engine (NOT branching by source)

Per Knox/chat 2026-05-17 + user direction. Locked before Domain 6 authoring (Round 6).

**Binding doctrine:** Domain 6 MUST model commerce/entitlement resolution as a GENERIC ENGINE, NOT a branching tree per benefit source. Membership is ONE source of benefits among many; package credit, promo claim, gift card, account credit, staff adjustment, loyalty reward, refund credit, subscription benefit are sibling sources. ALL flow into a common resolution engine.

**Anti-pattern (REJECTED — Round 3.3 binding):**

```text
if patient.has_membership:        # ❌ Special-snowflake branching
    apply_membership_logic()
if patient.has_package:           # ❌ Same anti-pattern
    apply_package_logic()
if patient.has_promo:             # ❌ Same anti-pattern
    apply_promo_logic()
if patient.has_gift_card:         # ❌ Same anti-pattern
    apply_gift_card_logic()
```

This branching becomes hell as benefit sources multiply. Worse: stacking rules + priority resolution + conflict surfacing must be re-implemented per branch + drift inevitably.

**Correct model (BINDING):**

```text
sources_of_benefits = [           # All sources are equal citizens
    membership.entitlements,
    membership.discount_programs,
    membership.pricing_overrides,
    package.entitlements,
    promo.claims,
    gift_card.balances,
    account_credit.balances,
    staff_adjustment.lines,
    loyalty.tier_discounts,
    refund_credit.balances,
    subscription.entitlements,
]

cart_resolution_engine(cart, sources_of_benefits) → {
    per_line_applied_benefits: [...],
    per_line_attribution: [...],   # Round 3.3 §2.11
    stacking_conflicts: [...],     # surfaced to staff
    uncovered_balance: $X,
    staff_approval_required: [...],
}
```

**Binding rules for the resolution engine:**

1. **All benefit sources are first-class citizens** — no source-specific branching. Membership entitlements are NOT special; they're entitlement-substrate rows like package entitlements.
2. **Deterministic priority order** — per DL-17 inv 4 (redemption_priority high first; ties by valid_to ASC; ties by purchased_at ASC FIFO). Substrate-level discipline, not source-specific.
3. **Stacking rules are PER-BENEFIT not PER-SOURCE** — `discount_program.combinable_with_other_promos` is the binding field; applies uniformly across sources.
4. **Conflict surfacing is uniform** — when stacking not allowed + multiple eligible benefits, present choice to staff/patient regardless of source.
5. **Reservation + redemption lifecycle is uniform** — booking creates reservation (Round 3.1 §8.4); completed visit redeems; late-cancel/no-show evaluates forfeiture per policy. Same across sources.
6. **Attribution output is uniform** — every applied benefit produces an attribution line per §2.11 binding structure.

**Anti-pattern enumeration (Round 3.3 binding rejections):**

- ❌ `if patient.has_membership` branching for membership-specific logic
- ❌ Source-specific discount stacking implementations
- ❌ Membership-only "free service" pathway distinct from package "free session" pathway
- ❌ Membership-only pricing override pathway distinct from promo "% off" pathway
- ❌ Source-specific cart UI rendering (vs uniform attribution-driven render)
- ❌ Hardcoded benefit source enum that admits only existing sources (must be registry-extensible per DL-16 inv 5 for future loyalty / referral / etc.)

**Sources are tenant-extensible:** Day 0 seed admits 8 source kinds (membership / package / promo / gift_card / account_credit / staff_adjustment / loyalty / refund_credit). Tenant may add new sources (e.g., referral_credit / influencer_perk / partner_benefit) without code change, via registry extension per DL-16 inv 5 + 9.

### §2.11 Round 3.3 binding doctrine — Benefit attribution / value visibility (receipt is marketing)

Per user direction 2026-05-17 + chat framing. Locked before Domain 6 authoring.

**Binding doctrine:** Membership pricing (and ALL benefit application) MUST be visible and attributable to the customer + staff. NEVER silently applied. Without visibility, membership value is invisible + gets cancelled.

**Two distinct truths the system MUST represent:**

1. **Pricing truth** — what did the patient actually owe?
2. **Value attribution truth** — why did they owe that amount, and what did each benefit save them?

**Binding attribution line structure (Amendment H part b — Domain 6 to substrate):**

Every applied benefit produces an attribution line carrying:

| Field | Purpose |
|---|---|
| `source` | Benefit source ("BH+ Elite Membership" / "SkinPen 3-Pack" / "Promo Code SPRING25" / "Gift Card $50" / etc.) |
| `benefit_type` | Kind (pricing_override / service_credit / category_discount / unit_discount / package_redemption / gift_card_redemption / promo_application / account_credit_consumption / staff_adjustment) |
| `original_price` | Standard price before benefit |
| `adjusted_price` | Price after benefit applied |
| `quantity` | Units affected (where applicable) |
| `savings_amount` | adjusted - original (negative for savings) |
| `eligible_line_item_id` | Which `commerce_order_line` the benefit applied to |
| `stacking_position` | Order in stack (e.g., "1 of 2" if multi-benefit on one line) |
| `staff_override_status` | NULL if automatic; populated with reason_code + actor if staff override |

**Required surfacing (binding for Domain 6 UX work):**

- **Staff checkout cart** — itemized per-line with attribution lines visible
- **Patient receipt** — itemized; shows "Standard price / Member price / Savings" for pricing_override; shows "Free with membership" for full-coverage benefits
- **Patient dashboard "Membership value summary"** — running totals: month-to-date / cycle-to-date / annual savings via each benefit source
- **Booking estimate** — surfaces expected attribution BEFORE checkout ("With your BH+ Elite, this visit will be approximately $X instead of $Y")

**Worked examples (per user direction, binding for Domain 6 output):**

**Example 1 — Botox pricing override:**
```text
Botox — 40 units
  Standard price:   $14/u  =  $560.00
  BH+ Elite price:  $12/u  =  $480.00
  Membership savings:      -$80.00 (BH+ Elite Membership pricing_override)
```

**Example 2 — Retail category discount:**
```text
SkinBetter Alto Defense Serum
  Standard price:   $165.00
  BH+ Elite 15% retail benefit:  -$24.75  (BH+ Elite Membership category_discount)
  You paid:         $140.25
```

**Example 3 — Full-coverage monthly benefit:**
```text
BH HydraFacial
  Standard price:   $200.00
  June BH+ monthly benefit applied:  -$200.00 (BH+ Elite Membership service_credit, June benefit)
  You paid:         $0.00
  Membership value used: $200
```

**Example 4 — Unlimited period benefit:**
```text
Red Light Therapy
  Standard price:   $35.00
  Included with BH+ Elite this month:  -$35.00 (BH+ Elite Membership unlimited_period)
  You paid:         $0.00
```

**Example 5 — Package redemption:**
```text
SkinPen Treatment
  Standard price:   $399.00
  SkinPen 3-Pack session 2 of 3:  -$399.00 (SkinPen 3-Pack package_redemption)
  You paid:         $0.00
  Sessions remaining: 1
```

**Example 6 — Multi-source stacking (where allowed):**
```text
SkinPen Treatment
  Standard price:   $399.00
  BH+ Elite $50 SkinPen benefit:  -$50.00 (BH+ Elite Membership service_discount)
  Promo Code SPRING25 (15% off):  -$52.35 (Promo Code promo_application)
                                  (15% applied to post-membership-discount subtotal $349)
  You paid:         $296.65
```

**Anti-patterns (Round 3.3 binding rejections):**

- ❌ Silently apply member pricing without showing "Standard $14/u → Member $12/u"
- ❌ Show only final price without attribution lines on receipt
- ❌ Render benefit application as opaque "Discount: $X" without source / kind
- ❌ Omit booking-estimate attribution (patient sees price at checkout for the first time)
- ❌ Roll multiple benefits into single "Member savings" line (loses source attribution)

**Why this matters (user verbatim 2026-05-17):**

*"we NEED to be able to show customers (and staff) that the BH+ membership took them from 14 to 12 per unit!!! otherwise, we're diluting our value. we need to be able to show in the system, or on a receipt, here's what this was priced to, here's what you paid with your membership."*

OMNI's receipt is marketing. Without attribution, the membership value is invisible + the customer cancels. This is core membership-value-visibility doctrine, NOT cosmetic UI.

### §2.12 Round 3.3 binding doctrine — Shopify ingestion as pre-Domain-6 mandatory evidence

Per Knox/chat 2026-05-17. Locked before Domain 6 authoring (Round 6).

**Binding rule:** Before Domain 6 (Checkout / commerce / entitlement) authoring starts, OMNI MUST ingest targeted Shopify evidence + integrate findings into Domain 6 pre-brief. Mindbody is HARD EVIDENCE for medspa scheduling pain; Shopify is HARD EVIDENCE for catalog / discount / cart resolution. Cross-app pattern references (Stripe / Amazon / OpenTable / etc.) remain ANALOGIES for pressure-testing per Round 1.5 terminology fix — they do NOT replace targeted Shopify ingestion as the second HARD EVIDENCE base.

**Why Shopify specifically:** Shopify is the industry-standard implementation of every commerce primitive Domain 6 needs — products / variants / collections / discount eligibility / promo stacking / gift cards / subscriptions / cart line resolution / customer segments. Where Mindbody is "okay" at memberships but bad at catalog/discount logic, Shopify is rigorous. Domain 6 should land in Shopify-like territory for catalog + commerce truth + cart-level resolution, augmented with Mindbody-derived medspa scheduling and entitlement-reservation discipline.

**10 evidence buckets to capture (targeted, NOT 200-screenshot scope):**

1. **Products + variants** — product / variant / SKU / category / collection / tags / inventory status / price + compare-at price / selling plans (subscriptions)
2. **Collections + categories** — manual collection / automated collection / product eligibility by tag/category/vendor/type / how products qualify for discount groups
3. **Discounts** — percentage / fixed amount / buy X get Y / free shipping / automatic discounts / discount codes / customer eligibility / product/collection eligibility / usage limits / start/end dates
4. **Discount stacking + combination rules** — can combine with product discounts / order discounts / shipping discounts / cannot combine / priority + conflict resolution
5. **Gift cards + store credit** — balance / redemption / partial use / expiration / refund-to-credit
6. **Subscriptions + selling plans** — recurring billing / membership-ish logic / recurring product entitlements / skipped/paused/cancelled states
7. **Checkout + cart** — line-level discounts / order-level discounts / taxes / shipping / refunds / partial refunds / abandoned checkout
8. **Customer groups + segments** — customer tags / member group / VIP group / eligibility by customer segment
9. **Receipt + attribution display** — how Shopify shows applied discounts to merchant + customer (informs Round 3.3 §2.11)
10. **Refund + adjustment** — partial refund mechanics / restocking / credit conversion

**Pre-Domain-6 evidence task (binding):**

Before Round 6 authoring starts:
- Capture Shopify evidence covering the 10 buckets (screenshots OR documentation summaries OR equivalent)
- Synthesize evidence into Domain 6 evidence reference list (similar to Mindbody Layer 2 §G commerce primitives synthesis from Phase B.5)
- Cross-link evidence to Round 3.2 §2.8 (membership-as-bundle) + Round 3.3 §2.10 (generic engine) + Round 3.3 §2.11 (attribution) doctrine
- Domain 6 authoring MUST cite Shopify evidence as primary commerce + cart-resolution evidence (alongside Mindbody for medspa-specific scheduling + entitlement-reservation patterns)

**This is NOT a Round 4 blocker.** Round 4 (Confirmation / outbound) proceeds without Shopify evidence. The Shopify ingestion task is parked + binding for pre-Round-6.

### §2.13 Round 3.4 binding doctrine — Benefit stacking + conflict resolution (anti-double-dipping)

Per Knox/chat 2026-05-17 + user direction. Locked before Domain 6 authoring (Round 6).

**Binding doctrine:** Patients commonly hold MULTIPLE simultaneous benefit sources — multiple memberships, packages, promos, gift cards, account credits. Cart-level benefit resolution MUST handle overlapping eligibility on the same cart line deterministically. Default rule: anti-double-dipping. Tenant may opt INTO stacking via explicit per-benefit configuration; OMNI defaults prevent accidental double-dipping.

**Why this matters (per user verbatim 2026-05-17):**

*"people want to buy a 3-pack of SkinPen. Price goes from $400 solo to $1k for 3. BH+ monthly membership gets you $50 off any SkinPen treatment! No, you cannot combine those."*

*"red light therapy membership + peptide membership + BH+ — all may give 15% off skincare. At skincare checkout, we do NOT apply BOTH or ALL!!!! We will need hard rules to govern things like 'only apply lowest, only apply 1 at a time.'"*

Without explicit stacking doctrine, Domain 6 risks defaulting to either: (a) silent multi-stack (45% off skincare from 3 memberships → revenue leak), or (b) silent best-only with no patient visibility (membership value invisible → cancellation risk per §2.11).

**7 default stacking rules (binding OMNI doctrine; tenant may opt in to stacking via per-benefit config):**

| # | Scenario | Default behavior | Rationale |
|---|---|---|---|
| 1 | Multiple membership % discounts on same product/category (Red Light mbr + Peptide mbr + BH+ all = 15% off skincare) | Apply **best one only** (highest savings); attribute applied + flag non-applied to staff | Anti-double-dipping; preserves value visibility per §2.11 |
| 2 | Package redemption + membership service discount on same service (SkinPen 3-pack session + BH+ $50 off SkinPen) | **Do not combine.** Package redemption wins; membership discount flagged as "not applied" with reason | Package is already a bundled/discounted price; double-discounting on already-discounted line is unintended |
| 3 | Free monthly service credit + percent/fixed discount on same line (June Hydrafacial benefit + 15% promo) | **Do not combine** on $0 line; service credit wins (already fully covers) | $0 line means no discount applicable; staff override available for "credit + tip" scenarios |
| 4 | Pricing override + promo code (Botox $12/u member + SPRING25 promo) | **Do not combine** unless promo explicitly marked `combinable_with_pricing_overrides = TRUE` | Pricing override is the per-tier baseline; layering promo on top is rare + tenant-explicit |
| 5 | Gift card / account credit + discount on same line | **May combine** (gift card/credit applied AFTER discounts) | Stored value behaves like PAYMENT not DISCOUNT; applies to remaining balance after benefits |
| 6 | Staff adjustment + any benefit | **Allowed with permission + reason_code + audit** per DL-18 inv 8 | Staff override is a privileged action with attestation; explicit per-case decision |
| 7 | Promo code + promo code | **Do not combine** unless both explicitly marked `combinable_with_other_promos = TRUE` | Per existing DL-17 inv 14 promo_code.combinable_with_other_promos field |

**Per-benefit substrate fields required (Amendment I candidate — Domain 6 to substrate):**

Each benefit row (entitlement / discount_program / promo_code / pricing_override) carries:

| Field | Type | Purpose |
|---|---|---|
| `combinable_with_other_benefits` | BOOLEAN | Default FALSE for memberships + packages; default per-substrate for others |
| `exclusive_group` | STRING NULL | Benefits in same exclusive_group cannot co-apply (e.g., all 15% skincare discounts share group `retail_pct_15`) |
| `stacking_priority` | NUMERIC | Higher = applied first when stacking allowed; ties broken by savings_amount DESC then valid_to ASC |
| `conflict_resolution_strategy` | ENUM | `best_value_wins` (default) / `highest_priority_wins` / `first_expiring_wins` / `package_redemption_wins` / `manual_staff_review` / `tenant_defined_order` |
| `staff_override_allowed` | BOOLEAN | If TRUE + Tier 2 attestation per DL-18 inv 8, staff may force-apply / force-skip |
| `patient_visible_attribution` | BOOLEAN | If TRUE (default), patient sees on receipt; if FALSE, staff-only attribution |

DL-17 inv 14 (promo_code) already has `combinable_with_other_promos`. DL-17 inv 4 has `redemption_priority` (low/medium/high). Round 3.4 binds these need to extend to `discount_program` (DL-17 inv 15) + `entitlement` (DL-17 inv 22) + new field-set for `exclusive_group` + `conflict_resolution_strategy`. Flagged as Amendment I candidate for Domain 6 to substrate.

**Cart-level conflict resolution algorithm (binding deterministic logic for Domain 6):**

```text
For each cart_line:
  eligible_benefits = filter(all_active_sources_for_patient, applies_to(cart_line))

  # Group by exclusive_group
  groups = group_by(eligible_benefits, .exclusive_group)
  
  for each group:
    if group.size == 1:
      apply(benefit) → attribution line (§2.11)
    elif group.size > 1:
      strategy = group.first().conflict_resolution_strategy (must match within group)
      winner = resolve(group, strategy)
      apply(winner) → attribution line
      record_non_applied(group - {winner}) → staff-visible attribution; patient-visible only if patient_visible_attribution = TRUE
  
  # Apply combinable benefits in stacking_priority order (where allowed per rule 1-7)
  for each combinable_benefit in remaining (sorted by stacking_priority DESC):
    if compatible_with_already_applied(combinable_benefit):
      apply(combinable_benefit) → attribution line
  
  # Apply gift card / account credit AFTER discounts (per default rule 5)
  for each stored_value_source in (gift_card, account_credit) in priority order:
    apply against remaining_balance → attribution line
  
  # Compute uncovered_balance + emit cart-level summary
  return per_line_attribution + uncovered_balance + non_applied_eligible_benefits
```

**Conflict resolution strategies (per `conflict_resolution_strategy` ENUM):**

- `best_value_wins` (DEFAULT) — apply benefit with highest savings_amount on this line; ties broken by valid_to ASC then purchased_at ASC
- `highest_priority_wins` — apply benefit with highest `stacking_priority`; ties broken per default tie-break
- `first_expiring_wins` — use-it-or-lose-it: apply benefit with earliest valid_to first
- `package_redemption_wins` — package entitlement always wins over membership/promo on same line (matches default rule 2)
- `manual_staff_review` — substrate emits `cart.benefit_conflict_pending_staff_review` event; cart cannot finalize until staff resolves
- `tenant_defined_order` — tenant configures explicit ordered list of benefit kinds; resolves per list

**Tenant configuration via policy profiles (binding UX guidance, not toggle-soup):**

Per Knox/chat 2026-05-17: DO NOT expose 900 random toggles. Use policy profiles:

| Policy profile | Typical defaults |
|---|---|
| `medspa_anti_double_dip` (DEFAULT for medspa) | Rules 1-7 as default; package wins; no member+promo stacking |
| `aggressive_loyalty` | Allow membership + package combine on specific service categories; loyalty-tier-stacking allowed |
| `payment_only_credits` | Gift card / account credit may combine with any discount; all other stacking forbidden |
| `manual_staff_resolution` | All conflicts route to staff review queue (high-touch / VIP / luxury tier) |
| `tenant_custom` | Per-benefit config; explicit |

Tenant picks profile at brand setup; per-service / per-preset / per-category overrides per DL-19 inv 4 settings hierarchy.

**Worked examples (per user direction + chat framing):**

**Example A — SkinPen package + BH+ $50 off** (default rule 2):
```text
SkinPen Treatment — $399.00
  Applied:    SkinPen 3-Pack session 2 of 3  (-$399.00)
  You pay:    $0.00
  Sessions remaining: 1
  
  ┌─ Staff-only attribution ─────────────────────────────┐
  │ Not applied: BH+ Elite $50 off SkinPen               │
  │ Reason:      package_redemption_wins (default rule 2)│
  │ Eligible:    yes; combinable: no                     │
  └──────────────────────────────────────────────────────┘
```

**Example B — 3 memberships, all 15% off skincare** (default rule 1):
```text
SkinBetter Alto Defense Serum — $165.00
  Applied:    BH+ Elite 15% retail discount (-$24.75)
  You pay:    $140.25
  
  ┌─ Staff-only attribution ─────────────────────────────┐
  │ Not applied: Red Light Membership 15% retail discount│
  │ Not applied: Peptide Membership 15% retail discount  │
  │ Reason:      exclusive_group=retail_pct_15;          │
  │              best_value_wins (tied → BH+ Elite       │
  │              picked by valid_to ASC tiebreak)        │
  └──────────────────────────────────────────────────────┘
```

**Example C — Gift card on top of membership discount** (default rule 5):
```text
SkinBetter Serum — $165.00
  Applied:    BH+ Elite 15% retail discount (-$24.75)
  Subtotal:   $140.25
  Applied:    Gift Card $50 redemption (-$50.00) [stored value]
  You pay:    $90.25
  Gift card remaining: $0
```

**Example D — Staff override with reason** (default rule 6):
```text
SkinPen Treatment — $399.00
  Applied:    SkinPen 3-Pack session 2 of 3 (-$399.00)
  Staff adj:  Manager comp $50 (-$50.00) [reason: loyalty_recovery; actor: NC]
  You pay:    -$50.00 → converted to account_credit $50
  
  ┌─ Staff override audit ───────────────────────────────┐
  │ Override:    rule 6 staff_override                   │
  │ Reason:      loyalty_recovery                        │
  │ Attestation: NC Tier 2                               │
  │ Audit lineage: per DL-16 inv 30 decision record      │
  └──────────────────────────────────────────────────────┘
```

**Anti-patterns (Round 3.4 binding rejections):**

- ❌ Default-combine all eligible discounts (revenue leak; 45% off scenario)
- ❌ Silent best-only without attribution to staff (loses audit + value visibility)
- ❌ Tenant toggle-soup with 50+ stacking flags (use policy profiles)
- ❌ Per-source branching `if has_membership: apply_membership; if has_package: apply_package` (per §2.10 — generic engine, not branched)
- ❌ Stack package_redemption + membership_discount by default (default rule 2)
- ❌ Stack pricing_override + promo by default (default rule 4)

**Key principle (Knox/chat 2026-05-17 verbatim closer):**

*"All eligible benefits are detected. Only allowed combinations are applied. Conflicts are resolved deterministically, visibly, and auditable."*

This is the binding doctrine for Domain 6 stacking + conflict resolution. Domain 6 implements; Round 3.4 locks the architecture.

---

## §7 Cross-link map (every rule cross-references these)

### Locked doctrine
- **DL-14** (CNS center of gravity) — locked in [system_map_three_layers_60706286.plan.md](../../system_map_three_layers_60706286.plan.md)
- **DL-15** (Scheduling Substrate Spine) — locked + 8 amendments (invariants 29-36; amendment 8 renames lifecycle state `confirmed` → `scheduled`)
- **DL-16** (Universal CNS Event Envelope) — locked + 4 amendments (invariants 40-43; amendment 42 outbound trigger registry; amendment 43 actor 4-tuple)
- **Cross-DL warning** subsection in system_map (Phase 1 hardening 2026-05-17) — vendor / specialty / Mindbody-UI labels do NOT become OMNI substrate enum values

### DRAFT doctrine (referenced; not amended by rule matrix)
- **DL-17** (Commerce) — [DL-17_commerce_DRAFT_2026-05-17.md](../../doctrine/DL-17_commerce_DRAFT_2026-05-17.md) — 38 invariants
- **DL-18** (RBAC) — [DL-18_rbac_DRAFT_2026-05-17.md](../../doctrine/DL-18_rbac_DRAFT_2026-05-17.md) — extends `lib/auth/capabilities.ts`
- **DL-19** (Settings-Infrastructure) — [DL-19_settings_infrastructure_DRAFT_2026-05-17.md](../../doctrine/DL-19_settings_infrastructure_DRAFT_2026-05-17.md) — 29 invariants including `booking_preset` (inv 19) + `service_policy` (inv 18)
- **DL-20** (Care-Coordination) — [DL-20_care_coordination_DRAFT_2026-05-17.md](../../doctrine/DL-20_care_coordination_DRAFT_2026-05-17.md) — 41 invariants including 3-layer foundation (inv 33-37) + `appointment_staff_note_entry` (inv 39) + `appointment_confirmation_event` (inv 40)
- **DL-21** (Federation-Topology) — [DL-21_federation_topology_DRAFT_2026-05-17.md](../../doctrine/DL-21_federation_topology_DRAFT_2026-05-17.md) — Day 0 promotion of A1 future arc
- **DL-22** (Clinical-Media) — [DL-22_clinical_media_DRAFT_2026-05-17.md](../../doctrine/DL-22_clinical_media_DRAFT_2026-05-17.md) — unified patient_document substrate

### Build Contract + Operating Model
- **Day 0 Build Contract** (frozen at commit `6dc1286`) — [2026-05-17_omni_scheduling_day_0_build_contract.md](../2026-05-17_omni_scheduling_day_0_build_contract.md)
- **Operating Model + Architecture** — [2026-05-17_omni_scheduling_operating_model_and_architecture.md](../2026-05-17_omni_scheduling_operating_model_and_architecture.md)
- **Architecture pressure-test** — [2026-05-17_omni_scheduling_architecture_pressure_test.md](../2026-05-17_omni_scheduling_architecture_pressure_test.md)

### Retrospective trio (read at start of each rule matrix round)
- **Post-mortem** — [scheduling_foundation_post_mortem_2026-05-17.md](../../../docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md) — 8 failure patterns named
- **Coherent architecture pattern** — [coherent_omni_architecture_pattern_2026-05-17.md](../../doctrine/coherent_omni_architecture_pattern_2026-05-17.md) — 3-layer pattern across domains
- **User + Knox preferences locked** — [user_knox_preferences_locked_2026-05-17.md](../../doctrine/user_knox_preferences_locked_2026-05-17.md) — 18 explicit preferences (12 user + 8 Knox) — NEVER re-litigate

### Mindbody ingestion evidence
- **Ingestion manifest** — [mindbody_ingestion_manifest.md](../../ingestion/mindbody/mindbody_ingestion_manifest.md)
- **Layer 2 synthesis** — [2026-05-16_mindbody_architecture_understanding.md](../2026-05-16_mindbody_architecture_understanding.md) — 13 sections A-M, 185+ findings
- **User 15% gap list** — [mindbody_user_feedback_raw.md](../../ingestion/mindbody/mindbody_user_feedback_raw.md) — 9 explicit gap items
- **Open questions** — [mindbody_open_questions_raw.md](../../ingestion/mindbody/mindbody_open_questions_raw.md) — Q1-Q24 with tentative resolutions

### Preservation docs
- **Future care obligations design** — [future_care_obligations_design_2026-05-17.md](../../doctrine/future_care_obligations_design_2026-05-17.md) — parked 30+ field care_episode_task substrate

---

## §8 What this matrix is NOT

- **NOT new doctrine.** The DLs are doctrine. This matrix translates doctrine into buildable rules.
- **NOT migrations.** Substrate slice scoping comes after the matrix is complete.
- **NOT code.** Substrate slice + DDL + RPC come after the matrix.
- **NOT a permanent record of all rules.** Rules will refactor as substrate slice surfaces real-world constraints. The matrix is a Day 0 specification, not an ongoing rulebook (that lives in code + tests).
- **NOT a Mindbody clone with renamed columns.** Per Pattern 7 — Mindbody is evidence, not template.

---

## §9 Round 1 deliverables

This round produces:

1. **This index doc** (`00_index.md`) — round 1 commit 1
2. **Domain 1 file** (`01_domain_treatment_menu.md`) — round 1 commit 2
3. **Stop-and-report** with rule count + evidence sources + missing evidence + open decisions + substrate gap audit + proposed DL amendments (if any NEW SUBSTRATE NEEDED verdicts surface)
4. **Push to origin/main** + wait for user + Knox review signal

Round 2 starts ONLY after the substrate gap audit is resolved (any NEW SUBSTRATE NEEDED rules either patched into DL DRAFTs or explicitly waived).

---

## §10 Promotion gate

Rule matrix is **substrate-slice-ready** when:
- All 7 domains are authored
- All scenarios validation file walks 10 scenarios end-to-end with zero gap
- Substrate gap audit shows zero unresolved NEW SUBSTRATE NEEDED verdicts (all either patched into DL DRAFTs or waived with explicit user signoff)
- DL-17 / DL-18 / DL-19 / DL-20 / DL-21 / DL-22 promoted to LOCKED doctrine in system_map
- §10.5 stale-existing-OMNI warning has been verified (existing primitives in `lib/auth/capabilities.ts` etc. are current)

Then substrate slice scoping begins.
