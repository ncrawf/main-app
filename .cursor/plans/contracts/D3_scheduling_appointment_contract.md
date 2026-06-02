# D3 — Scheduling / Appointment — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the planned scheduling/appointment layer (booking composer + appointment lifecycle + confirmation outbound)
Status: `draft_for_ratification` (created 2026-05-30, Foundation vNext; domain pass #3; Nick + Knox review gate) · **legacy-scatter backfill done 2026-06-01** (grepped legacy map outside DL-15: §1G.7 provider-routing → Workforce `REV-164`/`SC-WF-D3-001`; DL-3 discriminant-locality → §7.10; class/waitlist-engine → Layer-3 `REV-165`; DL-5/DL-6 depth → §2/§6) · **corpus gem-pull (scheduling cluster) done 2026-06-01** (D3 owns PLANNED side; 2026-05-17 operating-model encounter-container framing = superseded pre-rule-matrix evidence; 27+45 workflow scenarios = build-validation corpus §10; map-change = none)
Domain(s): `d3_scheduling`, `appointment`, `booking`, `confirmation`
Lifecycle role: the TERRITORY for **planned** scheduling — how an appointment is composed, moves through its lifecycle, and gets confirmed. Hands off to D5 (actualized work) at check-in via `SC-D3-D5-001`.
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §1.5 from the FULL appointment arc (embedded FAC §1.5 below). **Controlling spine = DL-15 inv 1-35 (LOCKED) + DL-20 inv 33-34/38-40/42 (appointment substrate)**; elaborated by rule-matrix `day_0_scheduling_rule_matrix/` D2 (BC-*) + D3 (LC-*) + D4 + Day 0 Build Contract (`6dc1286`); off-main `lib/scheduling/*` authority-boundary shape ported (stale enum superseded). Method/boundaries per `00_architecture_artifact_index.md`.
Supersedes: appointment/scheduling content scattered across DL-15 / DL-20 inv 33-44 / rule-matrix D2-D4 (as build-facing artifact; those remain LOCKED-spine + evidence)
Superseded by: none
Manifest action: `add_tier1` · Review gate: `user_knox_required`

---

## §1.5 Freshest-Authority Check (embedded — the authority map; reviewed 2026-05-30)

D3 is a deep multi-layer build arc (DL-20 situation) → FAC required before draft (per plan §1.5). Layers + disposition:

| Layer | Source | Disposition |
|---|---|---|
| **Controlling spine (LOCKED)** | DL-15 inv 1-35 (incl. amendment 29-35) + DL-20 inv 33-34/38-40/42 | **clean-into-contract** — the canonical appointment substrate |
| **Freshest detailed design** | rule-matrix D2 (BC-*) + D3 (LC-*) + D4 | **AUTHORED, not closure-ratified** (only D5 reached Round-5 closure) → folded as elaboration under the LOCKED spine; non-closure noted (`REV-146`) |
| **Design evidence** | Day 0 Build Contract `6dc1286` + pressure-test + operating model + brain audit + post-mortem + Mindbody appt raws | evidence (recognized, not copied) |
| **Off-main code** | `lib/scheduling/{types,authority,trace}.ts` (d753a64, `CNF-011`) | **port authority-boundary + trace-lineage SHAPE** (§9); **supersede** stale 5-value `SchedulingState` enum (DL-15 13-state + DL-20 confirmation_state win); no behavior, no merge |
| **Thesis v2** | appointment = planned operational commitment; per-event ownership | lens; consonant (adds, doesn't bulldoze) |

No stale-vs-fresh inversion (DL-15 already absorbed amendment 29-35). Thesis adds, no conflict → no stop-and-surface.

## §1 Purpose

D3 owns the **planned scheduling/appointment layer**: composing a booking (which resources must align), moving the appointment through its lifecycle, and confirming it. It is the *planned* commitment; **actualized work is D5** (handoff at check-in via `SC-D3-D5-001`).

## §2 Governing thesis concepts (lens)

Appointment = planned operational commitment (not actualized work, not the encounter). Per-event ownership: `status` vs `status_flags` vs `confirmation_state` are distinct, non-collapsing. Projection ≠ authority (status_flags are derived).

**Build depth bar (Lens A/B; registry §A/§B + thesis §3.5):** the *actual build* must be **Mindbody/Boulevard-class scheduling depth on Day 0** (multi-resource booking, packages/memberships, recurring availability) — NOT a Calendly clone. Booking-composer patterns borrow from **airline** (fare-class = pricing variant of one service), **restaurant** (add-ons/modifiers/party-size), **hospital-OR / Epic-OpTime** (multi-axis atomic resource booking), **Calendly/Google-Calendar** (RRULE recurrence, round-robin pools). This is the build-facing comparator for D3.

## §3 Ownership boundary

**Owns:** booking composition (4-axis), `appointment` + `appointment_item` lifecycle (13-state machine), `availability_window`, slot/hold lifecycle, `status_flags` *shape + projection discipline*, cancellation/no-show/reschedule/waitlist mechanics, confirmation round-trip (`appointment_confirmation_event`), `appointment_staff_note_entry`, appointment-layer participant/seat (K(C)).
**Does NOT own:** actualized work / encounter (D5; linked via `fulfillment_encounter_id`, never collapsed) · commerce/fees/entitlement/deposit-substrate (D6; D3 emits lifecycle events, D6 applies consequences) · documentation/attestation/lot capture (D7) · **service/treatment catalog taxonomy AND canonical `service_policy` / `service_policy_eligibility_gate` DEFINITIONS + service↔room/resource/staff COMPATIBILITY DEFINITIONS (Settings/Catalog-owned per DL-19 §4a; D3 consumes + EVALUATES via seam `SC-SET-D3-001`; D3 owns only the booking-time timing/locks) — RESOLVED: Settings-defined, D3-evaluated, D3-owned timing/locks** · clinical-clearance truth (reads canonical, never owns) · **provider LIVE operational-state + routing/eligibility (legacy §1G.7: offline / signed_in / open_for_queue / paused / at_capacity / unavailable; license/state/capability/Rx-authority eligibility; derived assignment/routing) — Workforce/BIZOPS + Identity/`staff_profiles`-owned (`REV-164`); D3 CONSUMES it as a booking input via `SC-WF-D3-001` (open). This is distinct from `availability_window` (planned bookable time, D3-owned) and `staff_service_assignment` (capability/duration, D3-owned): §1G.7 is the real-time "is this provider takeable right now" layer.**

**Ownership boundary — service policy (binding):** Settings/Catalog owns the *canonical service/treatment policy definitions* (`service_policy` + `service_policy_eligibility_gate` rows: which axes/gates exist per service/modality). **D3 owns only the scheduling-time EVALUATION/APPLICATION** of those definitions — eligibility-gate firing, holds, lifecycle transitions, slot composition, and appointment consequences. `service_policy` is NOT a D3-owned object; D3 reads + evaluates it.

## §4 Canonical objects (frozen vocabulary — every hard-won name preserved)

| Object | One-line |
|---|---|
| `appointment` (DL-20 inv 33) | planned operational/scheduling commitment; synchronous-trip container; carries `status`(13) + `status_flags`(bitmask) + `confirmation_state` + booking provenance + `fulfillment_encounter_id` |
| `appointment_item` (DL-20 inv 34) | planned line under appointment (1-to-N); `planned_details` JSONB canonical; sequence/add-on/bundle support |
| `availability_window` (DL-15 amendment 34-35) | **4-axis** (What `services[]` / Where `venue_ids[]` / When `recurrence_rule` / Other-Privacy `booking_visibility`+`patient_visibility`+`auto_release`); `availability_kind` recurring / one_time_override / blocked_time; `override_supersedes_recurring` |
| `service_policy` + `service_policy_eligibility_gate` (DL-19 — **Settings/Catalog-owned DEFINITION; D3 evaluates, does NOT own**) | axis-composition flags + per-(service,modality,requirement_kind) gates; **5 gate-timings** (booking_visibility / booking_hard_gate / pre_arrival_task / pre_performance_gate / closeout). D3 *applies* these at booking time; canonical definitions live in Settings/Catalog (`SC-SET-D3-001`) |
| `staff_service_assignment` (DL-15 amendment 31) | **3-component block**: `prep_time` + `booking_time` + `finish_time` (per staff per service); patient sees booking_time only; resource lock spans all 3. **D3 OWNS the booking-time TIMING + per-resource concurrency LOCKS** (scheduling mechanics); the service↔staff *eligibility* mapping is Settings-DEFINED (DL-19 §4a), D3-evaluated |
| `room_service_compatibility` / `resource_service_compatibility` / service↔staff eligibility | room/device/staff-eligibility axes for the 4-axis composer — **Settings-DEFINED compatibility definitions (DL-19 §4a), D3-EVALUATED at booking** (venue-level compatibility = Federation venue). D3 reads, does NOT own the definition |
| slot / hold | `slot_offered` → `slot_held` (per-class TTL) → `appointment_booked`; live-state reval gates hold→book |
| `appointment_confirmation_event` (DL-20 inv 40) | CNS round-trip confirmation (outbound/inbound/classification/state-transition); references messaging/orchestration/cns_decision by FK; AI never silently flips state |
| `appointment_staff_note_entry` (DL-20 inv 39) | append-only staff notes, `note_kind` discriminator |
| `appointment_participant` + `appointment_seat` (DL-20 inv 42, K(C)) | multi-participant + seat reservation (group/caregiver/guest) |

**Axes/enums preserved:** `service_type` (appointment / arrival / class / course / membership; DL-15 amendment 32) · `pricing_option_scheduling_restrictions` (5: max_sessions_per_period / disallow_consecutive_days / daily_max_count / day_of_month_opens / time_access_window; DL-15 amendment 33) · booking provenance decomposed into `booking_channel` + `attribution_source` + `trigger_source` (DL-20 inv 33).

## §5 Lifecycle / state model

- **`status` (13-state, DL-15 inv 5 + amendment 8):** proposed → held → hold_expired → **scheduled** → scheduled_pending_deposit → checked_in → in_progress → completed → cancelled → no_showed → rescheduled → disputed → archived. State-machine-validated; illegal → `illegal_transition_attempted` audit.
- **`status_flags` (BITMASK, 16 flags, DL-15 amendment 29) — DERIVED, orthogonal to `status`.** Compose independently within a lifecycle state.
- **`confirmation_state` (DL-20 inv 33, D4-owned) — SEPARATE from `status`.** `scheduled` = slot committed; `confirmed` = patient acknowledged. Orthogonal.

## §6 Booking composer (4-axis, atomic)

Capacity × Staff (availability_window ∩ staff_service_assignment) × Room × Resource. `encounter_profile_policy` / `service_policy` declares per-profile which axes are REQUIRED; `appointment_propose` validates each required axis + fires gates by timing; **atomic — all required axes or REJECT** (no partial booking). Jurisdiction = 5th axis at action emission. Multi-item bundles materialize atomically. Add-ons inherit-or-override parent provider/room/resource.

## §7 Invariants / rejection rules (the disciplines — gems)

1. **`status_flags` are DERIVED projections, NEVER canonical** (D3 Guardrail #1). D3 owns the bitmask *shape* + the flags it genuinely owns (Arrived / Late / Walk_in / First_visit / Bulk_reschedule_pending); **Confirmed / Forms_complete / Card_on_file / Consent_signed / Deposit_paid / Photos_captured / Note_pending / Attestation_pending / Closeout_complete are SET BY their owning domain (D4/D5/D6/D7) and only PROJECTED by D3.**
2. **Appointment lifecycle does NOT swallow encounter creation** (D3 Guardrail #2). `fulfillment_encounter_id` links to D5; booked ≠ performed ≠ consented ≠ charted. (= seam `SC-D3-D5-001`.)
3. **Multi-resource booking is atomic** — partial bookings REJECTED (DL-15 inv 2).
4. **Clinical clearance gating is ABSOLUTE** (DL-15 inv 10); reads canonical clinical substrate, never projections; AI/patient text cannot bypass (prompt-injection defense, DL-15 inv 15).
5. **Live-state revalidation at firing** — stale → `failed_stale` (DL-15 inv 11).
6. **D3 emits lifecycle events; D6 applies fees/entitlement** (not D3 directly) — D3↔D6 seam.
7. **`status` ≠ `confirmation_state` ≠ `status_flags`** — never collapse.
8. **Reschedule = atomic compensation** (cancel + book as one orchestration_run), not silent rollback (DL-15 inv 6).
9. **Per-resource concurrency locks** (DL-15 inv 21); scheduler is the arbiter; AI cannot reserve outside it.
10. **Sibling-discriminant locality (legacy DL-3).** Scheduling's payload discriminant is sibling-local (`appointment_kind` / here `service_type`); **no cross-sibling discriminant leakage** — never extend `case_kind`/`order_kind`/etc. to cover appointments, and never extend `service_type` to cover non-scheduling siblings.
11. **Confirmation ownership split (binding).** **D3 owns `confirmation_state`** (the appointment-confirmation truth). **Messaging owns message transport** (delivery of the outbound/inbound). **CNS may classify/propose** (interpret the patient response). **Only D3 commits the appointment confirmation state** — CNS/AI never silently mutates it (per DL-20 inv 40: AI classifies; deterministic rules + staff/D3 transition). D3 does NOT absorb messaging transport or CNS classification logic; it references them by FK.

## §8 Events

In: confirmation inbound, deposit settled (D6), clearance granted (clinical). Out: `slot_offered` / `slot_held` / `hold_expired` / `appointment_booked` / `appointment_checked_in` (→ D5, `SC-D3-D5-001`) / `appointment_cancelled` / `no_show_confirmed` / `appointment_rescheduled` / `waitlist_offer_sent` / `appointment_confirmation_*`. All carry the DL-16 envelope (domain=`scheduling`).

## §9 Scheduling authority boundary (ported from off-main `lib/scheduling/*`, reconciled)

Preserve the boundary + lineage SHAPE (the one valuable thing in the off-main stub): a `SchedulingAuthority` boundary (`normalizeIntent` / `deriveStateChange`, signature-only contract) + **trace-lineage** `source_event → candidate → resolver → commit → state_change → messaging_projection` (consonant with CNS candidate→commit + `SC-D3-D5-001`). **Stale `SchedulingState` enum (requested/proposed/confirmed/cancelled/reschedule_requested) is SUPERSEDED** by §5 (DL-15 13-state + DL-20 confirmation_state). No behavior to recover; no merge.

## §10 Disposition table (recognizing every substrate decision — nothing eroded)

| Prior decision / primitive | Disposition | Note |
|---|---|---|
| DL-15 inv 1-28 (slot/hold/book, 13-state, waitlist, deposit-coupling, multi-resource, clearance, reval, jurisdiction, concurrency, audit) | **preserve (LOCKED spine)** | §4-§8 |
| DL-15 amendment 29 status_flags BITMASK (16 flags) | **preserve** | §5/§7 (DERIVED) |
| DL-15 amendment 30 4-axis composer + encounter_profile_policy | **preserve** | §6 |
| DL-15 amendment 31 3-component prep/booking/finish | **preserve** | §4 |
| DL-15 amendment 32 service_type enum (5) | **preserve** | §4 |
| DL-15 amendment 33 pricing-option 5 scheduling restrictions | **preserve** | §4 |
| DL-15 amendment 34-35 availability_window 4-axis + recurring/override | **preserve** | §4 |
| DL-20 inv 33-34 appointment / appointment_item | **preserve (moved D5→D3)** | §4 |
| DL-20 inv 38-40 participant / staff_note / confirmation_event | **preserve (moved D5→D3)** | §4 |
| DL-20 inv 42 K(C) participant/seat | **preserve** | §4 |
| rule-matrix D2/D3/D4 (BC/LC/confirmation rules) | **fold as elaboration; note authored-not-closed** | `REV-146` |
| D1 treatment-menu / service catalog | **move → Settings/Catalog (DL-19)** via seam `SC-SET-D3-001` | unless drafting found a scheduling-owned function (none did) |
| off-main `lib/scheduling/*` authority-boundary + trace shape | **port as design** (§9) | shape preserved |
| off-main `SchedulingState` 5-enum | **reject/supersede** | DL-15 13-state + confirmation_state win |
| legacy §1G.7 provider operational-state + routing/eligibility | **move → Workforce/BIZOPS + Identity** (`REV-164`); D3 consumes via `SC-WF-D3-001` | live-availability ≠ `availability_window` (§3) |
| legacy DL-3 sibling-discriminant locality | **preserve as invariant** | §7.10 |
| legacy DL-5 Mindbody-class depth + DL-6 scheduling-depth non-foreclosure (single/multi/equipment-gated/waitlist) | **preserve** | depth bar §2; 4-axis composer §6 admits all four depths without rewrite |
| legacy Layer-3 deferral: full **class scheduling** + **waitlist engine** | **substrate hooks present, depth deferred** | `service_type=class` + waitlist mechanics (§4) are hooks; auto-fill/optimization engine is Layer-3 (`REV-165`) |
| 2026-05-17 scheduling operating-model/pressure-test `encounter_container`/`encounter_profile` parent framing | **superseded (pre-rule-matrix layer)** | D3 owns the PLANNED side (`appointment`); the actualized parent = D5 `service_occurrence` (not `encounter_container`); collapse-zone held by inv 2 (appointment ≠ encounter). Durable scheduling concepts already carried via the rule-matrix D2/D3/D4 spine |
| 27+45 scheduling workflow scenarios (operating-model §5 / pressure-test) | **preserve as build-validation corpus** (evidence) | the booking/lifecycle/cancellation/no-show/reschedule/waitlist/recurring/package validation suite for D3 build; not contract text |

## §11 Seams

- `SC-D3-D5-001` (`appointment.checked_in` → service_occurrence) — **drafted.**
- `SC-D3-D6-001` (appointment lifecycle event → commerce fee/entitlement consequence) — OPEN (D6 not yet passed; `REV-139`).
- `SC-SET-D3-001` (Settings/Catalog → D3: service catalog/treatment-menu consumed by booking) — OPEN (Settings pass; `REV-147`).
- `SC-WF-D3-001` (Workforce/BIZOPS + Identity → D3: provider live operational-state + routing/eligibility consumed by booking, legacy §1G.7) — OPEN (`REV-164`).
- confirmation round-trip (D4) is folded into D3 here, with the §7.10 ownership split: **D3 owns `confirmation_state` + commits it; Messaging owns transport; CNS classifies/proposes** (FK references, not absorption). A dedicated Messaging↔D3 confirmation seam may be formalized when the Messaging domain passes.

## §12 Open items (→ `08`)

- `REV-146` rule-matrix D2/D3/D4 authored-not-closure-ratified (only D5 closed Round 5) — ratify or formally fold.
- `REV-147` D1 treatment-menu → Settings/Catalog seam (`SC-SET-D3-001`).
- `CNF-011` off-main `lib/scheduling/*` classified (this contract §9); whole parking-branch disposition manifest still owed (tracked).
- `REV-165` full class-scheduling + waitlist-engine depth = legacy Layer-3 deferred; D3 holds substrate hooks only. (legacy-scatter backfill 2026-06-01)
- Provider live operational-state/routing (§1G.7) routed to `REV-164` (Workforce/BIZOPS) via `SC-WF-D3-001`. (legacy-scatter backfill 2026-06-01)

## §13 Evidence sources

DL-15 inv 1-35 (system map) · DL-20 inv 33-44 · `day_0_scheduling_rule_matrix/` (02 booking composer / 03 appointment lifecycle / 04 confirmation / 00 index) · `2026-05-17_omni_scheduling_day_0_build_contract.md` · `..._architecture_pressure_test.md` · `..._operating_model_and_architecture.md` · `PREFLIGHT_..._brain_audit.md` · `scheduling_foundation_post_mortem_2026-05-17.md` · Mindbody appt raws (04/05/15/17/19) · off-main `lib/scheduling/*` (d753a64).
