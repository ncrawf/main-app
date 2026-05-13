# FUTURE ARC — Federation / Permeability / Topology (cross-entity operational permeability + cross-channel patient unification + scheduling-communications collision)

**Status:** RESERVED FUTURE ARC — 2026-05-12 capture (post-R6 follow-up to e1 preflight)
**Type:** Future doctrine arc. Not a preflight. Not a design. Not active doctrine. Preserves a real architectural question for whenever first multi-state / first franchise / first network-native activation pushes on the gap.
**Likely DL designation when activated:** DL-14 candidate (rail-agnostic substrate + cross-entity operational permeability). Naming TBD when arc activates.
**Origin:** R6 follow-up conversation 2026-05-12 evening — user observed "multi-location" is actually "network topology"; ChatGPT named 5+ topology modes spanning shared local market → shared national brand → Hims-mode → franchise ecosystem → hybrid dynamic permeability.
**Folds in:** seam 3 (multi-thread patient reality) + seam 9 (scheduling-communications collision) from R1+R6 follow-up.
**Doctrine NOT introduced (binding):** this document does NOT introduce doctrine; it captures a future arc that will introduce doctrine when activated.
**Companion docs:**
- [FUTURE_ARC_2026-05-12_prioritization_attention_economics.md](FUTURE_ARC_2026-05-12_prioritization_attention_economics.md) (A2)
- [FUTURE_ARC_2026-05-12_phi_surface_governance.md](FUTURE_ARC_2026-05-12_phi_surface_governance.md) (A3)
- [PREFLIGHT_2026-05-12_phase_4h_external_line_e1_execution_substrate_adapter_inbox.md](PREFLIGHT_2026-05-12_phase_4h_external_line_e1_execution_substrate_adapter_inbox.md) (e1 §26 cross-reference origin)

---

## §1 Premise

OMNI is not a "single-tenant healthcare platform." OMNI is also not a "multi-tenant" platform in the standard SaaS sense. OMNI is — as it matures — a **federated operational platform across degrees of cross-entity permeability**.

The framing that the R6 follow-up surfaced:

> "Multi-location" is actually "network topology." Not "does this org have multiple clinics?" but "what kinds of operational permeability exist between entities?"

This document captures the question. It does NOT answer it.

### §1.A Why "multi-location" is the wrong frame

The naive frame is:

- Single clinic = one org_id + one brand_id + one location_id.
- Multi-clinic = same org_id, multiple location_id values, treated as a flat list.

This frame fails immediately when:

- Two clinics in the same market (Birmingham + Somerset, 8 miles apart) need to behave like ONE business with TWO front doors (shared patient identity, shared memberships, shared communication context, location-specific phone numbers).
- Two clinics in different states (Michigan + Florida) under one company need to behave like SAME parent with REGION-ISOLATED operations (patients rarely cross over; providers separate; jurisdiction-specific rules; consent / pricing / tax differ).
- The SAME company has BOTH topologies at once (Bham+Somerset shared-market AND Michigan+Florida region-isolated AND a future LA expansion).
- A patient travels (LA-based patient walks into NYC clinic; they want their history pulled in seamlessly).
- A patient uses Hims-style virtual care overlaid on top of an in-person aesthetic clinic relationship.
- A franchise operator joins the OMNI ecosystem (separate subscription, separate legal entity, separate Stripe, separate Twilio — but same OMNI platform).

The "multi-location" frame collapses these into one undifferentiated mess. The right frame is **permeability axes**.

### §1.B Why DL-13 doesn't cover this

DL-13 binds:

- Rail-agnostic substrate + vendor-confined adapter pattern.
- OMNI canonical source-of-truth + vendor-adopt-not-write.
- Settings precedence hierarchy.
- Deterministic outbound 8-gate.
- Display-projection-not-substrate discipline.

DL-13 is **rail-and-substrate-level discipline**. It says: "vendor stays in adapter; OMNI is canonical; settings precedence is six-level; outbound passes 8-gate; display is computed projection."

DL-13 does NOT say:
- When two OMNI organizations share a patient identity, who is canonical?
- When a patient relationship straddles two brands under one org, what's the projection rule?
- When Michigan and Florida are the same org but separate jurisdictions, what's the consent / pricing / template scope?
- When a Hims-mode virtual care arc overlays a local clinic relationship, who owns the conversation?
- When a franchise tenant in OMNI's ecosystem wants opt-in patient portability to a sibling franchise, what's the consent + audit + transfer pattern?

DL-13 is silent because DL-13 is rail-substrate doctrine; this future arc is **cross-entity operational permeability doctrine**.

The two are complementary. DL-13 makes the substrate rail-portable. This future arc would make the substrate **federation-portable**.

---

## §2 The shift in framing (binding for the future arc)

From:

> "Single-tenant vs multi-tenant"

To:

> "Degrees of operational permeability across entities."

This is the central reframing. Every architectural question downstream of this reframing changes shape.

### §2.A Operational permeability axis

When two entities (org / brand / practice_entity / location / region / franchise) exist in the same OMNI deployment, the question is NOT "are they the same org?" The question is "what's permeable between them, and what's isolated?"

Permeable dimensions to consider (each one is an independent axis):

| Dimension | Fully isolated | Mostly isolated | Partially shared | Mostly shared | Fully shared |
|---|---|---|---|---|---|
| Patient identity | Separate `patients` records per entity | Federated identity with explicit consent | Shared identity, scoped relationships | Shared identity, shared relationships per entity | One identity, one operational view |
| Patient history (longitudinal record) | Records stay local | Read-only cross-entity pull on request | On-request transfer with audit | Shared by default within scope | Continuously shared |
| Scheduling | Per-entity calendars; no awareness | Cross-entity availability visible to admin | Cross-entity booking allowed | Shared queue + provider availability | One unified scheduling brain |
| Memberships / packages | Per-entity | Honored on request | Portable to sibling entities | Portable nationally | Universal across federation |
| Provider visibility | Local providers only | Providers visible cross-entity for reference | Cross-licensed providers can serve | Floating provider model | Providers serve any entity |
| Communications (inbox / external-line) | Per-entity inbox | Cross-entity admin view only | Cross-entity ops view with audit | Shared front-desk pool with brand scoping | Unified inbox |
| AI memory / context | Per-entity | Cross-entity admin read | Cross-entity ops scope | Shared within federation | One AI memory |
| Reporting | Per-entity | Roll-up to parent | Cross-entity comparative | Federation-wide rollup | Universal dashboards |
| Billing | Separate Stripe / payment processor accounts | Centrally administered, locally executed | Shared payment processor, separate billing | Shared billing | Unified billing |
| Consent | Per-entity / per-jurisdiction | Federated with explicit cross-entity opt-in | Some scopes portable | Mostly portable with audit | Universal consent |
| Jurisdiction / regulatory | Hard fenced | Soft fenced with admin override | Aware but unenforced | Aware and enforced selectively | Treated uniformly |

**No single setting on these axes; they vary independently per dimension.** A topology mode is a *combination* of choices across these axes. Mode taxonomy emerges from the combinations.

### §2.B Permeability isn't always static

A real-world OMNI customer may move between topology modes over time:

- Year 1 — single clinic (no federation question at all).
- Year 2 — second clinic 8 miles away (Mode 1 / shared local market activates).
- Year 3 — expansion to second state (Mode 2 / shared national brand activates; Year 1+2 clinics stay Mode 1 within their market, but the new state is region-isolated relative to them).
- Year 4 — pilot Hims-style telehealth arm (Mode 3 / Hims-mode adds an overlay; patients with both in-person AND virtual presence trigger Mode 5 / hybrid).
- Year 5 — sell a clinic to a franchise operator who stays on OMNI (Mode 4 / franchise ecosystem activates; that clinic separates).

The doctrine must admit **mode transitions over time** as first-class operations, not as accidents.

---

## §3 Topology modes (the 5+ named)

Below are the modes the R6 follow-up surfaced. The list is not closed.

### §3.A Mode 1 — Fully shared local market

**Example:** Birmingham + Somerset, 8 miles apart, same brand (Cultured).

**Permeability profile:**

| Axis | Setting |
|---|---|
| Patient identity | Fully shared (one identity, one operational view) |
| Patient history | Fully shared |
| Scheduling | Cross-entity booking; shared provider availability |
| Memberships / packages | Portable within market |
| Provider visibility | Floating providers cross-location |
| Communications | Shared front-desk pool with location-specific phone numbers; location-aware routing |
| AI memory | Shared within market |
| Reporting | Comparative + rollup |
| Billing | Shared payment processor; per-location revenue allocation |
| Consent | Universal within market |
| Jurisdiction | Same state; uniform regulatory |

**The patient can reasonably float between locations.** Front desk at Somerset sees Sarah's Birmingham history. Provider at Birmingham can cover for a Somerset appointment. Membership credits work at both.

**Substrate today:** admits via existing `org_id` + `brand_id` + `location_id` columns with location-scoped views; no doctrine yet on what's mandatory shared vs configurable shared.

### §3.B Mode 2 — Shared national brand

**Example:** LA + NYC, same parent company, same brand or sibling brands, different states.

**Permeability profile:**

| Axis | Setting |
|---|---|
| Patient identity | Shared (portable across locations) |
| Patient history | Cross-location pull with audit |
| Scheduling | Per-location calendars; cross-location admin visibility |
| Memberships / packages | Portable for VIP tiers; configurable per brand |
| Provider visibility | Cross-state licensing may or may not exist; configurable |
| Communications | Per-location inboxes; cross-location admin only |
| AI memory | Per-location; cross-location query on demand |
| Reporting | Cross-location rollup |
| Billing | Per-state billing accounts; central admin |
| Consent | Per-state consent (jurisdiction matters) |
| Jurisdiction | Region-isolated; state-specific policies apply |

**The patient rarely floats between locations**, but when they do (traveling, relocating), the system supports portable identity. NYC clinic can pull LA history if patient consents.

**Substrate today:** admits via `practice_entity_id` (state-level legal entity) + `location_id` + jurisdiction-aware DL-10 `patient_relationships`; doctrine on portable identity scope is unspecified.

### §3.C Mode 3 — Hims-mode (network-native virtual care)

**Example:** Hims-style national telehealth brand; patients are digital-first; providers are licensed per-state; care is asynchronous; routing is network-wide.

**Permeability profile:**

| Axis | Setting |
|---|---|
| Patient identity | One national identity |
| Patient history | Centralized |
| Scheduling | Asynchronous-first; not appointment-centric |
| Memberships / packages | National |
| Provider visibility | Cross-state licensed providers; network-wide routing |
| Communications | Centralized inbox; provider triage via routing |
| AI memory | Centralized; persistent customer memory |
| Reporting | National with state breakdown |
| Billing | One national payment processor account |
| Consent | Per-state for clinical operations; portable for marketing |
| Jurisdiction | Regional compliance overlays |

**Different shape entirely.** Hims doesn't have a physical "location" the way a clinic does. The unit of operation is a **care episode** or **subscription**, not a clinic visit. Substrate must admit this — relationship layer per DL-10 already does (relationship boundary isn't physical location; it's operational scope).

**Substrate today:** the DL-10 multi-relationship-per-person model admits Hims-mode; no doctrine yet on how Hims-mode coexists with in-person clinic modes in the same OMNI deployment.

### §3.D Mode 4 — Franchise ecosystem (Mindbody-ish)

**Example:** OMNI hosts the platform; individual clinic owners run their own businesses on OMNI; each is a separate legal entity with separate subscription, separate Stripe, separate Twilio.

**Permeability profile:**

| Axis | Setting |
|---|---|
| Patient identity | Fully isolated per-tenant |
| Patient history | Local to tenant; opt-in transfer if patient + receiving tenant consent |
| Scheduling | Local |
| Memberships / packages | Local; opt-in honor at sibling tenants |
| Provider visibility | Local |
| Communications | Local |
| AI memory | Local |
| Reporting | Local; aggregate platform metrics for OMNI |
| Billing | Per-tenant Stripe |
| Consent | Per-tenant |
| Jurisdiction | Per-tenant |

**Federation is opt-in, not default.** Marketplace dynamics may emerge — a patient looking for botox in a new city might consent to have their record transferred from their home clinic to a Cultured-network franchise in the new city.

**Substrate today:** the multi-tenant primitive (foundational §4 primitive #4) admits separate `org_id` per tenant; doctrine on patient-portability-across-tenants is unspecified.

### §3.E Mode 5 — Hybrid permeability (dynamic policy-driven)

**Example:** Birmingham + Somerset (Mode 1) + Miami semi-shared (Mode 2-ish) + LA mostly isolated + Hims virtual care overlay (Mode 3) + traveling-VIP-patient temporarily unlocks cross-region access + cross-state-licensed-providers + some queues shared nationally + some data blocked by state law.

**Permeability profile:**

> Dynamic. Permeability is policy-driven per dimension per relationship per moment.

This is the real-world endgame for a national brand operator. The doctrine must admit:

- Per-relationship permeability overrides (this patient is VIP-national; unlock cross-region history).
- Per-provider permeability overrides (this provider is multi-state licensed; visible cross-region).
- Per-jurisdiction permeability hard fences (state-X data cannot leave state-X under any policy).
- Per-feature permeability defaults (marketing-consent portable; clinical-consent jurisdiction-fenced).

### §3.F Mode 6+ — separate subscription / totally separate entity / mode-transitions

**Example A — Separate subscription, totally separate entity:** Two OMNI customers who happen to be sister businesses, but each pays separately, runs separately, has no operational permeability. They could each be on Mode 1 internally with multiple locations, but across the two organizations there is zero permeability.

**Example B — Mode transition (Mode 1 → Mode 2):** A two-clinic shared-market business expands to a second state. The Year 1+2 clinics stay Mode 1 with each other; the new state-Y clinic relates to them via Mode 2. Substrate must admit gradual transition.

**Example C — Mode transition (Mode 4 → cross-tenant patient portability):** A franchise patient consents to be transferred to a sibling franchise after a move. The transfer is an explicit federation operation — not silent data leakage.

The mode list is not closed. Future modes may emerge (e.g., government-run network mode; insurer-network mode; hospital-system-acquired mode).

---

## §4 Cross-channel patient reality (seam 3 fold-in)

The R6 follow-up identified seam 3: "patients don't behave cleanly."

Same patient may:

- Text the main line.
- Call another number.
- Email support.
- Fill an online form.
- Message after-hours.
- Have a spouse text on their behalf from a different phone.
- Walk into the clinic.

**The question:** when do these unify operationally?

Not at substrate level — DL-10 + DL-13 already admit the substrate. The substrate identifies "same patient" via `patient_relationships`; the substrate identifies "different handles for same person" via future `contact_identity_handles` per §6.3.A reservation.

**At operator cognition level:**

- Does staff realize these are connected when looking at one channel?
- Does OMNI surface relationship context (e.g., "this patient also has 4 active threads on other channels")?
- Are there "parallel active threads" — two providers replying to the same patient on different channels at the same time?
- Can staff accidentally contradict each other?

This is a coordination problem, not a substrate problem.

### §4.A Why this folds into the federation arc

The same problem exists across entities (federation) AND across channels within an entity. The doctrinal pattern is the same:

> "When the same human shows up across multiple operational contexts, how does the operator see it, and how is coordination preserved?"

For federation: same human across Birmingham + Somerset + Miami.

For channels: same human across SMS + voice + email + portal + in-person.

The future doctrine must specify a **unified human-coordination layer** that admits both axes (cross-entity and cross-channel).

### §4.B Future doctrine candidate clauses

- **Cross-channel parallel-thread surfacing.** When two active conversations exist for the same `patient_relationship` (or for the same canonical patient across relationships), the conversation detail UI shows a small "this patient also has N active threads" indicator with click-to-see-context.
- **Coordination locking pattern.** When staff opens a conversation with the same patient as another staff is currently replying on a different channel, soft warning: "Hannah is replying to Sarah on email — coordinate?"
- **Cross-channel patient view.** A single "patient communications view" surface (separate from the channel-scoped inbox) that shows all communications across channels for a given relationship. Currently NOT in e1.
- **Federation extension.** When the same patient identity spans entities (Mode 2 / Mode 5), the parallel-thread surfacing crosses entity boundaries with permeability policy controlling visibility.

These clauses are reserved for the future arc; not built in e1.

---

## §5 Scheduling-communications collision (seam 9 fold-in)

The R6 follow-up identified seam 9 as one of the biggest future centers: scheduling becomes a communications orchestration engine.

### §5.A The seam

Scheduling is not "calendar with appointments." Scheduling is the operational substrate that drives a continuous stream of patient-facing communications:

- **No-show workflows** — appointment scheduled, patient doesn't show, system needs to: notify patient, reschedule, possibly retain deposit, possibly mark relationship-state, possibly waitlist-bump another patient.
- **Deposit collection** — appointment booking requires deposit; payment success triggers booking confirmation; payment failure triggers re-attempt or hold-release.
- **Reschedule loops** — patient reschedules 3 times; system needs to track abuse patterns, suggest alternatives, possibly escalate.
- **Provider changes** — Dr. X leaves; patients with future appointments need to be re-assigned + notified; relationship context (per DL-12 invariant 38 care-team/coverage) must follow.
- **Waitlist activation** — slot opens up; system notifies waitlist patients in priority order; first-to-confirm wins.
- **Urgent openings** — same-day cancellation creates same-day availability; system reaches out to high-priority patients.
- **Package expiration** — patient has unused sessions on a package; system reminds + offers reschedule.
- **Follow-up cadence** — post-procedure follow-up needs to fire at clinically-determined intervals.

Every one of these is a **communication orchestration event triggered by scheduling state**. Scheduling and communications are tightly coupled.

### §5.B Why this is a future arc, not an e1 fold-in

The scheduling-communications collision arc requires:

- Scheduling sibling (`scheduling_lifecycle/`) activated with real depth (currently reserved per foundational §5 + §1F).
- Patient action items extended for scheduling-triggered tasks (currently exists per §1G.11; integration with external-line callback reminders admitted in e1 §6.16 but full orchestration deferred).
- AI prioritization (per A2 prioritization/attention-economics arc).
- Settings precedence runtime (e1 §10) handling scheduling-triggered sends through the 8-gate.

E1 does not build any of these. E1's substrate admits future composition with these (via `patient_projection_links`, queue routing, callback reminders).

### §5.C Why this folds into the federation arc

Scheduling-communications collision interacts with federation:

- Mode 1 (shared local market): cross-location waitlist activation; cross-location provider coverage rescheduling.
- Mode 2 (shared national brand): cross-region appointment portability when patient travels.
- Mode 3 (Hims-mode): scheduling is asynchronous-first; communications drive scheduling rather than the other way around.
- Mode 4 (franchise ecosystem): per-tenant scheduling; opt-in cross-tenant referrals.
- Mode 5 (hybrid): jurisdiction-aware scheduling — Florida appointment can't be auto-rescheduled to Michigan provider without provider re-licensing.

The federation arc must admit how scheduling-communications collision plays per-mode.

### §5.D Future doctrine candidate clauses

- **Scheduling as a communications event source.** Every scheduling state transition (booked / canceled / rescheduled / no-showed / completed / expired / provider-changed / waitlist-activated) emits a typed event that the communications layer subscribes to.
- **Scheduling-communications orchestration boundary.** Scheduling owns calendar state; communications owns rendered messages; orchestration layer translates events to outbound sends through the 8-gate.
- **Cross-mode rescheduling rules.** Per-mode policy for what rescheduling is allowed (cross-location, cross-provider, cross-jurisdiction).
- **Waitlist as a federated entity.** Mode 1 waitlists span both locations; Mode 2 waitlists per-location; Mode 3 waitlists are national queues with jurisdiction filters.

Reserved for future arc.

---

## §6 Substrate building blocks already present

OMNI is **accidentally well-aligned** for this future arc. The substrate doesn't need a rewrite to admit federation; the doctrine just needs to land.

Existing primitives:

- **`org_id`** — top-level tenant boundary; admits franchise ecosystem (Mode 4) immediately.
- **`brand_id`** — within-org brand boundary; admits multi-brand operators (Mode 1's Cultured/Evo example; Mode 2's same-brand-different-states).
- **`practice_entity_id`** — legal entity boundary; admits state-level legal separation under one org.
- **`location_id`** — physical location boundary; admits multi-location at any of Mode 1, 2, 4.
- **DL-10 `patient_relationships`** — operational relationship layer ABOVE patient identity; admits the same human having different relationships per brand / per location / per legal entity / per care arc.
- **DL-10 §7.13.5 "8 deployment shapes"** — already enumerates non-foreclosure shapes that map closely to topology modes.
- **DL-10 "$500M-state non-foreclosure clause"** — already admits cross-deployment federation as a future activation.
- **`patient_projection_links` (e1 §6.12)** — admits per-(contact_identity, patient_relationship) projection scoping; extensible to federation projection.
- **`patient_consents`** — per-(patient_id, intent_class, endpoint_OR_brand_OR_org_wide) tuple scoping admitted; extensible to per-jurisdiction scoping.
- **Settings precedence (DL-13 + MAIN §1D.4)** — six-level top-down hierarchy; jurisdiction admits as a layer-1 (law/compliance) override; federation policy admits as a layer-3 (endpoint/scope policy) override.
- **`audit_events`** — admits cross-entity transfer logging.
- **Primitive #4 (multi-tenant)** — foundational §4 already names cross-org future federation as reserved.

The substrate is largely ready. **The work the future arc does is doctrine, not substrate.**

---

## §7 What this future arc must specify when it activates

A federation/permeability/topology doctrine arc would need to bind:

### §7.A Topology mode taxonomy

A canonical taxonomy of supported modes (the 5+ above; perhaps refined to 6-8 by the time activation arrives) with explicit operational characteristics per mode. Modes are configurable per `(org_id, entity_pair_id)` tuple.

### §7.B Permeability policy schema

Per-(entity_pair, dimension, scope) policy that controls what's permeable. Replaces hardcoded "same org = same data" with "policy-driven sharing per axis." Schema admits the 11 dimensions from §2.A plus extensions.

### §7.C Cross-entity identity portability rules

- When does the same human map to the same `patient_id` across entities? Always within `org_id`? Never across `org_id`? Opt-in cross-`org_id` with audit?
- How does `patient_relationships` scope when identity spans entities? Per-entity relationship rows? Federated relationship rows?
- What's the consent + audit pattern for cross-entity identity reveal?

### §7.D Jurisdiction-aware scoping

- Per-jurisdiction settings precedence layer-1 overrides (e.g., California-resident patient gets CCPA scope regardless of clinic location).
- Per-jurisdiction data residency constraints if applicable.
- Per-jurisdiction provider licensing constraints (no cross-state Rx without licensure).
- Cross-jurisdiction templates + disclosures.

### §7.E Mode-transition migration patterns

- Mode 1 → Mode 2 (small-clinic expansion to second state).
- Mode 4 → cross-tenant patient portability activation.
- Mode 1 + Mode 3 overlay (in-person + virtual on same patient).
- Mode 2 → Mode 5 (national brand adds dynamic permeability).
- Each transition specified as a migration playbook with substrate state changes + policy changes + audit requirements.

### §7.F Federation primitives

If the arc lands, new primitive candidates:

- `entity_federation_links` — admits explicit federated relationships between `org_id` pairs.
- `permeability_policies` — admits per-(entity_pair, axis) policy rows.
- `cross_entity_identity_links` — admits opt-in patient portability between tenants.
- `jurisdiction_overlay` — admits jurisdiction-specific policy attachments.

Or these may be folded into existing primitives via new columns. Schema decisions are for the activation preflight.

### §7.G Operator cognition layer

- Unified patient view (cross-channel within entity; cross-entity within federation policy).
- Coordination locking (don't have two staff reply on different channels to same patient at same time without awareness).
- Parallel-thread surfacing.
- Cross-entity context indicators.

---

## §8 What this future arc does NOT need to specify now

- Substrate is already aligned. No DDL pre-work needed at e1 time.
- No code changes for e1.
- No doctrine commits for e1.
- No `entity_federation_links` table; no `permeability_policies` table; no `cross_entity_identity_links` table. All deferred.
- No scheduling-communications orchestration build. Scheduling sibling reserved per foundational §5; activation is its own future arc.
- No mode-transition tooling. Wait for first transition to surface.

**The doctrine arc fires when the first activation pushes on the gap.** Likely triggers:

- First multi-state OMNI customer (Mode 2 activation).
- First franchise operator in the OMNI ecosystem (Mode 4 activation).
- First Hims-style national brand customer (Mode 3 activation).
- First customer who is in transition (Mode 1 → Mode 2 with a real timeline).

Until one of these hits, the doctrine arc stays reserved.

---

## §9 Operational scenarios that exercise this arc

Concrete scenarios for whoever picks this arc up later:

### §9.A Bham + Somerset shared-market patient

Sarah Miller has appointments at Cultured Birmingham. She texts the Birmingham main line about a follow-up. She lives between the two locations and sometimes visits Somerset for convenience. Question: when she texts Birmingham, does the inbox surface "patient with active care at Somerset too" context? Substrate today says yes via shared `patient_relationship` per DL-10. UI gap: parallel-thread surfacing not built in e1.

### §9.B LA patient walks into NYC clinic

Sarah Miller (LA-Cultured patient) is in NYC for a week, walks into Cultured NYC for an emergency Botox touch-up. NYC front desk searches her phone — finds her in LA-Cultured records under the same `patient_id` (Mode 2 portable identity activated). NYC creates a new `patient_relationship` for the NYC visit (or extends the LA relationship to admit NYC context — policy decision). Question: which clinical history is visible to the NYC injector? Which consents apply? Which payment method?

### §9.C Bham patient books Somerset appointment

Front desk in Somerset opens scheduling for Sarah Miller. Sarah is a known patient at Birmingham. Calendar shows Somerset providers. She books. Substrate creates appointment row at Somerset location; relationship per DL-10 is brand-scoped (Cultured) and admits cross-location appointments because Mode 1.

### §9.D Hims patient also has in-person aesthetic

Hims overlay deployment: Sarah is on Hims hair-loss subscription (Mode 3 / virtual care). She also visits Cultured Birmingham for Botox (Mode 1 in-person within a brand). Two `patient_relationships` per DL-10: one with Hims-brand, one with Cultured-brand. Cross-brand visibility is policy-controlled. Mode 5 dynamic permeability admits VIP customers to bridge if explicit consent.

### §9.E Franchise transfer

Birmingham-Cultured operator sells the franchise to a new owner. New owner stays on OMNI as a separate `org_id` (Mode 4 / franchise ecosystem). All patient records transition to new `org_id` — or stay with old `org_id` and a federation link admits opt-in patient transfer. Multi-mode transition migration playbook required.

### §9.F Cross-state provider licensing

Dr. X is licensed in Michigan and Florida. Michigan-org's `provider_id` references Dr. X. Florida-org also wants to reference Dr. X. Cross-entity provider reference admitted via federation primitive; jurisdiction layer-1 setting enforces "Dr. X can only Rx in states where she's licensed."

### §9.G Bham → Bham + Somerset expansion

Year 1: only Cultured Birmingham. Year 2: open Somerset 8 miles away. Mode 1 activation. Substrate: add new `location_id` row; existing `patient_relationships` admit Somerset context. No data migration. New providers + new endpoints + new business-hours + cross-location scheduling rules.

### §9.H Mode 1 → Mode 2 (small-market becomes national)

Year 4: same operator opens Cultured Miami. Mode 1 (Bham+Somerset, shared local market) continues among themselves; Miami relates to them via Mode 2 (region-isolated national brand). New `practice_entity_id` for Florida legal entity. Mode-transition migration playbook activates.

---

## §10 Cross-references

- **DL-10** — Identity/Relationship doctrine; admits multi-relationship-per-person; admits 8 deployment shapes; admits $500M-state non-foreclosure clause.
- **DL-12 invariant 37** — Care-team/coverage layer drives derived membership; relates to cross-entity provider visibility.
- **DL-13** — Rail-agnostic substrate spine; foundation that this future arc extends with federation discipline.
- **Foundational §4 primitive #4** — Multi-tenant primitives; admits cross-org as reserved future activation.
- **Foundational §4 primitive #19** — `patient_relationship`; operational scope layer that this arc extends to cross-entity.
- **Foundational §5 sibling reservations** — `scheduling_lifecycle/` (admits scheduling-communications collision); `clinical_record/` (admits cross-entity record portability).
- **Foundational §7.13** — DL-10 long-form sub-doctrine; admits 8 deployment shapes.
- **Foundational §11.0 deferred-items** — when this arc activates, add a row here pointing at this document.
- **MAIN §1D.4** — Settings precedence hierarchy; jurisdiction layer extends this.
- **MAIN §1J.13** — Handle-vs-person identity; cross-channel handle resolution extends this.
- **e1 preflight §26** — Operational seams identified during R1+R6 follow-up; cross-references this document.
- **A2 prioritization arc** — Cross-references for federated prioritization (regional queues; jurisdiction-aware prioritization).
- **A3 PHI surface governance arc** — Cross-references for cross-entity PHI handling.
- **Stripe portability sketch §11** — multi-consumer adapter placement question; structurally analogous to multi-entity-consumer permeability question.
- **DL-13 closing handoff cross-arc impact map** — when this arc activates, named.

---

## §11 Future preflight named (not yet existing)

When activation triggers (per §8), the future arc's preflight should follow the DL-12 / DL-13 pattern:

**Proposed filename when activated:** `.cursor/plans/PREFLIGHT_<future-date>_federation_topology_doctrine.md`

**Proposed structure (mirrors DL-13 arc):**
1. Substrate-reality audit (what's already in MAIN / foundational / e1+ implementations).
2. Doctrine inheritance (DL-10 / DL-12 / DL-13 binding).
3. Scope partition.
4. Out-of-scope.
5. Doctrinal alignment table.
6. Topology mode taxonomy (refined from §3 of this document).
7. Permeability policy schema.
8. Cross-entity identity portability rules.
9. Jurisdiction-aware scoping.
10. Mode-transition migration patterns.
11. Federation primitives (if any).
12. Operator cognition layer.
13. Operational scenarios + scenario matrix (extends §9).
14. Watch zones.
15. Verification gates.
16. R-arc pressure-test plan.
17. Cross-references.

R-arc pressure-test would attack the doctrine from multiple angles:

- R1: Mode taxonomy completeness — are 5+ modes really 5+, or 8, or 12? Operational reality test.
- R2: Permeability policy schema sufficiency — does it admit all 11 axes × all 5+ modes × mode transitions?
- R3: Identity portability edge cases — split patient across modes; mode change mid-relationship; provider rotation across modes.
- R4: Jurisdiction conflict cases — patient in state A receives care from provider in state B via mode 3 overlay.
- R5: Mode-transition migration safety — Mode 4 → opt-in cross-tenant; Mode 1 → Mode 2 expansion.
- R6: UX implications — operator cognition surfaces (parallel threads, cross-entity views).
- R7: Substrate non-foreclosure — does any e1 implementation choice foreclose this arc's design space?
- R8+ — TBD.

---

## §12 Status note

This document is a **RESERVED FUTURE ARC** as of 2026-05-12. It captures a real architectural question that emerged from the R1+R6 follow-up on the e1 external-line preflight. It is NOT:

- Active doctrine.
- A preflight.
- A binding design.
- A scope-creep target for e1, e2, or e3.

It IS:

- A preserved question.
- A capture of the framing reshuffle ("multi-location" → "permeability axis").
- A list of operational scenarios for whoever picks the arc up.
- A list of substrate building blocks already aligned.
- A future preflight name + structure for activation.

**Activation trigger:** first multi-state OMNI customer / first franchise operator / first Hims-style overlay / first explicit cross-tenant patient portability request. When any of these arrives operationally, this document is the starting point. Until then, do NOT explode scope.

**Companion future arcs** captured the same evening (cross-references):

- [A2 — Prioritization / Attention Economics](FUTURE_ARC_2026-05-12_prioritization_attention_economics.md)
- [A3 — PHI Surface Governance](FUTURE_ARC_2026-05-12_phi_surface_governance.md)

**End of A1 federation/permeability/topology future arc capture.**
