# Mindbody / OMNI direction — open questions gap log

Source: agent extraction from [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) (verbatim Knox + user back-and-forth, 2026-05-16 session 1)
Status: open questions log — do not resolve until Phase B.5 Layer 2 synthesis + user/Knox/Opus review
Date filed: 2026-05-16
Companion: [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md)

---

## Why this file exists

Per Knox's explicit recommendation in [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 6:

> "That belongs in the gap log / open questions file, not as final doctrine yet."

This file extracts the architectural questions surfaced during the 2026-05-16 OMNI scheduling design pressure-test session, indexed for cross-reference from Layer 2 synthesis. **None of these are resolved.** All are **deferred to Phase B.5+ doctrine sharpening** after Layer 2 review.

The companion `mindbody_to_omni_direction_raw.md` holds the verbatim back-and-forth. This file holds the indexed open-question list extracted from it.

---

## Resolution discipline

- **Do NOT amend DL-15 or DL-14 or DL-16 based on these questions during Phase B.5.** All amendments are post-Layer-2 work per [phase_b5_mindbody_ingestion_4db27449.plan.md](../../phase_b5_mindbody_ingestion_4db27449.plan.md) "What Phase B.5 does NOT do" section.
- **Do NOT author new DLs (commerce / RBAC / settings) during Phase B.5.** New DL drafts are post-Layer-2 work, scoped in Layer 2 Section G.
- **Do NOT scope substrate slice work from these questions during Phase B.5.** Substrate slice scoping is Layer 2 Section H.
- **DO cross-reference these questions from Batches 2-N raw captures** where a screenshot makes one of these questions concrete. The cross-reference belongs in the screenshot's `ARCHITECTURAL OBSERVATIONS` block, framed as "this screen surfaces evidence relevant to Open Question Q-N (see [mindbody_open_questions_raw.md](mindbody_open_questions_raw.md))."
- **DO use these questions as Layer 2 anchor points** in sections G / H / I / J / K (refined doctrine sharpening scope, refined substrate slice scope, OMNI competitive moats, cross-domain implications, industry analogy insights).

---

## Q1 — Encounter container architecture (PRIMARY shelved question)

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turns 1, 5, 6 (especially Turn 5).

**Question (verbatim user framing):** *"in a medspa, any visit is essentially a proecude. there is no like, cliniv visit that doesnt permit a mini procedure. so we need to think on does a clinic visit auto allow for that... vs a endoscopy visit, or are they the same container???? think hard."*

**Knox's tentative position (Turn 5):** **Same parent container, different encounter profile.** Encounter Container with planned intents + performed intervention/procedure lines. Encounter profiles enumerated:

```
async_review
virtual_visit
phone_visit
office_visit
office_visit_with_minor_procedure
procedure_encounter
surgical_case
resource_only_session
internal_event
```

All share the same spine: Encounter → planned intents → reserved resources → participants → performed intervention/procedure lines → notes/documents → inventory/products → charges/payments/entitlements → CNS events/actions/outcomes.

**Knox's key rule (Turn 5):** *"a visit may permit procedure lines, but it does not automatically authorize any procedure. Same-day add-ons should pass policy checks: provider capability, consent, contraindications, room/device availability, inventory, payment/entitlement, and documentation requirements."*

**Open implementation alternatives:**
- A. Single `encounter` table + `encounter_profile` enum + per-profile constraint set (Knox's tentative position)
- B. Polymorphic `encounter` + separate `procedure_case` / `office_visit` subtype tables
- C. Pure tag/role pattern on a flat `encounter` (no profile enum) with policy-driven discovery
- D. Two separate top-level tables (`clinic_visit` + `procedure_case`) with shared foreign key / shared CNS envelope

**Status:** OPEN. **No decision before Layer 2.** Knox + user explicitly agreed to shelve.

**Resolution dependency:** Phase B.5 Layer 2 Section G (refined doctrine sharpening scope) + Section H (refined substrate slice scope) + Phase B.5+ doctrine sharpening with Opus and Knox.

**Pressure-test scenarios (Knox supplied, Turn 6):** Botox, HydraFacial + add-ons, weight loss consult, video visit, lab draw, endoscopy, surgical follow-up, multi-provider procedure. Layer 2 must reason about each scenario against whichever architecture wins.

---

## Q2 — Pressure-test scenario list for the encounter container model

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 6 (final paragraph).

**Question:** Does the chosen encounter container architecture (whatever wins from Q1) hold up under all 8 of these scenarios without forcing exception logic?

**Scenarios (verbatim Knox enumeration):**

1. Botox visit (variable units, single provider, single room, inventory decrement, follow-up cadence)
2. HydraFacial + add-ons (booster + LED mask + exosomes + lip add-on + numbing + PRF add-on; each add-on has independent rules: time / price / resource / clinical clearance / inventory / patient-visibility)
3. Weight loss consult (Hims-style async path AND in-clinic visit path AND hybrid path)
4. Video visit (no room, no resource; provider time only; ad hoc OR scheduled)
5. Lab draw (resource_only_session profile; minimal provider time; specimen handling)
6. Endoscopy (procedure suite, anesthesia/sedation, prep/NPO rules, scope equipment, assistant/nurse roles, pathology/specimen, recovery/discharge, complication tracking)
7. Surgical follow-up (post-op visit; references prior procedure encounter; may include suture removal / wound check / clinical assessment / Rx adjustment)
8. Multi-provider procedure (more than 1 provider working on patient simultaneously OR sequentially during the same encounter; e.g., MD + 3 MAs, or 2 MDs working on patient)

**Status:** OPEN until Q1 resolves + Layer 2 maps each scenario.

**Resolution dependency:** Layer 2 Section D (operational depth) + Section G + Section H + Section L (multi-modality + scaling vision).

---

## Q3 — Four-entity split validity (Schedulable Service vs Clinical Service vs Billable Item vs Resource/Inventory Item)

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 1.

**Question:** Knox proposes that Mindbody's flat "appointment type" / "service" model collapses 4 distinct entities. Does this 4-way split hold under Phase B.5 evidence?

**Knox's 4 entities:**
- Schedulable Service — what can be booked (e.g., "Injectables visit")
- Clinical Service — what care was performed (e.g., Botox treatment, lip filler consult)
- Billable Item — what gets charged (e.g., Botox $14/unit × 36 units)
- Resource/Inventory Item — what gets consumed or reserved (e.g., Botox vial, HydraFacial machine, treatment room)

**User feedback gap #2 anchor (per [mindbody_user_feedback_raw.md](mindbody_user_feedback_raw.md)):** *"book broad appointment type → refine at checkout/encounter."* Variable-quantity services (Botox 20 units vs 36 units) is the canonical concrete instance. Maps directly to this 4-way split.

**Open sub-questions:**
- Q3a — Are 4 entities the right number, or should it be fewer (3? collapse Billable Item into Clinical Service?) or more (5+? add "Membership/Package Entitlement Item"? add "Consent/Form Item"? add "Note/Document Item"?)
- Q3b — How do these entities map onto DL-15 invariants (currently 28)? Which are already covered? Which require new invariants?
- Q3c — How do these entities map onto the future commerce DL? Are billable items, charges, and refunds the commerce DL's responsibility, or scheduling's?
- Q3d — How does this 4-way split interact with the Mindbody "service catalog mesh" Knox describes (chat marker 5: appointment type → service category → pricing options → staff eligibility → online booking rules → package/contract eligibility → commission/payroll → scheduling restrictions → automated emails)? Are these all properties on Schedulable Service, or are some on Clinical Service?

**Status:** OPEN. Layer 2 Section A (entity model) + Section C (configuration surface) + Section G must reason about this against Mindbody evidence.

---

## Q4 — Mode-per-service-line vs flat appointment_type

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 3.

**Question:** Knox proposes that each service line declares its operating mode:

```
Service line: GLP-1
Mode: async_first | schedule_required | hybrid | disabled_scheduler

Service line: Botox
Mode: schedule_required

Service line: HRT
Mode: async_first_with_optional_video

Service line: Red light therapy
Mode: resource_booking_only
```

How does this mode declaration align with DL-15 (scheduling substrate spine, 28 invariants) + DL-16 (universal CNS event envelope, 39 invariants)?

**Open sub-questions:**
- Q4a — Is mode a property of the service line, the encounter profile (Q1), or the brand/clinic capability flag (Q5)? Or all three (mode resolution per request from a capability matrix)?
- Q4b — How does mode interact with the 4-entity split (Q3)? Is mode a property of Schedulable Service, Clinical Service, both, or neither?
- Q4c — When a brand changes mode for a service line (e.g., a Hims-style brand adds in-person Botox to GLP-1), what migrations / data implications flow? Is mode change retroactive, prospective, or per-encounter?
- Q4d — How does this map to existing OMNI doctrine for `outbound_jobs` (system primitive #10) and `treatment_items.metadata` (per system map line 81)?

**Status:** OPEN. Layer 2 Section G (refined doctrine sharpening) must reason about whether DL-15 needs amendment for service-line mode, or whether mode is a sibling concept that requires a new DL.

---

## Q5 — Capability flags per brand/clinic/federation mapping to existing OMNI capability layer

**Source:** [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 3 (federation paragraph).

**Question:** Knox proposes per-brand capability flags:

```
async messaging enabled
external-line enabled
scheduling enabled
room/resource scheduling enabled
POS enabled
memberships enabled
Rx enabled
labs enabled
video visits enabled
```

How does this map to OMNI's existing capability layer (`lib/auth/capabilities.ts`, `requireCapability`, system map Section 1D / 1D.1 / 1D.2)?

**Open sub-questions:**
- Q5a — Are these brand/clinic capability flags (org-scoped) the same primitive as user/role capability flags (user-scoped per `requireCapability`), or a different primitive?
- Q5b — Knox's rule: *"If a domain is disabled, its UI disappears, but its CNS contract remains admitted."* — how does this interact with `1J.10` "current operational state + enforcement plan" doctrine (universal joined safety read enforced before first Rx pathway ships)? Does CNS contract admission for a disabled domain create an enforcement gap?
- Q5c — How do capability flags relate to multi-tenancy (system map Section 1U) and federation (radar zones 79-88)?
- Q5d — When two clinics with different capability profiles merge (per Knox's federation example), how does the patient identity/relationship layer (1J.1-1J.9) reconcile without forcing one clinic's mode onto the other?

**Status:** OPEN. Layer 2 Section J (cross-domain implications) + Section G must reason about whether existing capability layer + DL-13 (multi-consumer adapter) cover this, or whether a new capability primitive is needed.

---

## Cross-references

- [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) — verbatim source for all 5 questions
- [mindbody_user_feedback_raw.md](mindbody_user_feedback_raw.md) — user's 9 gaps; gap #1 (room/provider/resource independence) maps to Q3 + Q4; gap #2 (intended visit vs actual treatment) maps to Q1 + Q3; gap #4 (progress notes attached to visits) and gap #5 (procedure visits vs office visits) map directly to Q1
- [mindbody_knox_chat_raw.md](mindbody_knox_chat_raw.md) — pre-marker bucket 4 ("Intended appointment vs actual treatment is one of your biggest points") maps to Q1 + Q3; pre-marker bucket 5 (variable quantity services) maps to Q3
- [phase_b5_mindbody_ingestion_4db27449.plan.md](../../phase_b5_mindbody_ingestion_4db27449.plan.md) — Phase B.5 master plan with "What Phase B.5 does NOT do" discipline (no doctrine amendments yet, no substrate slice yet)
- [system_map_three_layers_60706286.plan.md](../../system_map_three_layers_60706286.plan.md) — DL-14 (CNS center of gravity) anchors the "CNS as orchestrator over scheduling/messaging/etc." pattern Knox invokes; system primitives + Intent layers + Section 1D (capabilities) anchor Q5

---

## Status summary

| # | Question | Status | Resolution dependency |
|---|----------|--------|----------------------|
| Q1 | Encounter container architecture (single + profile enum vs polymorphic vs separate tables) | **OPEN — primary shelved question** | Layer 2 Section G + H + Phase B.5+ doctrine sharpening with Opus + Knox |
| Q2 | 8 pressure-test scenarios validate the chosen architecture | **OPEN** | Q1 resolution + Layer 2 Section D + L |
| Q3 | Four-entity split validity (Schedulable / Clinical / Billable / Resource-Inventory) | **OPEN** | Layer 2 Section A + C + G |
| Q4 | Mode-per-service-line vs flat appointment_type alignment with DL-15 + DL-16 | **OPEN** | Layer 2 Section G |
| Q5 | Capability flags per brand/clinic mapping to existing OMNI capability layer | **OPEN** | Layer 2 Section J + G |

**No question resolved during Phase B.5.** All defer to Layer 2 + Phase B.5+ doctrine sharpening per Knox + user joint direction in [mindbody_to_omni_direction_raw.md](mindbody_to_omni_direction_raw.md) Turn 6.
