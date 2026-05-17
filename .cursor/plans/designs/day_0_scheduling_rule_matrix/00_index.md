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
| 3 | Appointment lifecycle rules | (deferred) | Round 3 | NOT STARTED | — | — |
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
