# Coherent OMNI Architecture Pattern (2026-05-17)

**Status:** Reference doc. One-page distillation of the substrate pattern that emerged across pillars after the 2026-05-16 + 2026-05-17 scheduling foundation arc. Future pillars start from this shape, not from scratch.

**Companion:** [scheduling_foundation_post_mortem_2026-05-17.md](../../docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md) (why this shape; what went wrong getting here).

---

## §1 The universal pattern

Every operational domain in OMNI has three substrate layers:

```text
                    LAYER 1                LAYER 2                  LAYER 3
                    Planned commitment     Actual delivery          Linked evidence + commerce

Scheduling          appointment            encounter                commerce_order_line + clinical
                    + appointment_item     + encounter_line         _object + intake_session +
                    (planned itinerary)    (actual care moment)     patient_document + thread

Commerce            commerce_order         commerce_order_payment   commerce_order_line +
                    (cart opened)          (paid / refunded /       entitlement_redemption +
                                           voided)                  receipt projection

RBAC                permission_group       capability_exercised     audit_events trail +
                    + atom_grants          event (per requireCap)   attestation envelope
                    (configured access)

Federation          federation_permeability_policy + jurisdiction_  cross-tenant action emitted   audit trail + actor 4-tuple +
                    admission_rule         (per cns_decision)       decision record

Intake              intake_session         intake_response          encounter_line referencing
                    (sent to patient)      (patient answered)       the intake (provider review)

Messaging           orchestration_action   rail-side projection +   inbound response +
                    (CNS decides send)     send attempt rows        cns_decision + linked encounter

Clinical-Media      patient_document       performed encounter_line clinical_object updates +
                    (signed/captured/      referencing photo or     audit per access
                    uploaded)              note

Care Obligations    care_episode_task      converted to appointment converted to encounter +
                    (recall / await /      OR encounter OR          orchestration_action
                    outreach)              orchestration_action     (audit lineage of conversion)

Promo                promo_code (def) +    appointment_promo_intent commerce_order_line.
                    patient_promo_claim    (reservation)            applied_promo_claim_id
                    (wallet)                                        (commerce truth)

Future pillars      TBD (Rx, Labs, etc.) — same shape applies
(Rx, Labs, etc.)
```

**Pattern:** planned commitment exists FIRST. Actual delivery happens SECOND, may or may not converge with the planned. Linked evidence/commerce is THIRD, captures the financial + clinical + documentation truth.

Industry validation: FHIR (Appointment + Encounter + Procedure + DiagnosticReport), Epic (Appointment → Encounter → Visit Note → Charge Capture), Amazon (Order → Shipment → Delivery → Charge), Airline (Reservation → Flight → Boarding → Baggage), Restaurant (Reservation → Table Session → Orders → Bill), Tesla (Service Appointment → Service Visit → Work Order → Invoice).

---

## §1.5 v2 vertical-layering architecture canon (descriptive frameworks — DEMOTED from Tier 0 candidacy per F.3 D2 / Phase G.1)

*Added Phase G.1 (2026-05-28) per F.3 review gate `D0THES-DEC-019` + `D0THES-DEC-020`. These two OMNI Thesis v2 frameworks were adjudicated as **descriptive architecture canon, NOT Tier 0 constitutional guardrails** (Tier 0 = imperative "must/must not"; these are structural/taxonomic frameworks). They live here as architecture-pattern canon. Detailed cross-link into system map Platform operational model lands in Phase G.2 (Reconciliation Map cluster C1).*

### §1.5.1 Four-layer care OS framework (T0-11 — descriptive)

OMNI's architecture reads as four vertical layers (top = closest to humans; bottom = physics):

1. **Surface** — what patients / providers / staff / brand operators actually see + touch (apps, portals, inboxes, dashboards). Projections per T0-15.
2. **Coordination CNS** — the event-driven care-coordination brain (DL-14): reads the unified event graph, decides multi-actor multi-action, emits orchestration_actions. Rails/surfaces are outputs.
3. **Boundary Policy** — authority / capability / consent / disclosure / jurisdiction / federation permeability gates (DL-10 + DL-18 + DL-22 + §1J + §1Q.17). What is allowed, by whom, under what consent.
4. **Substrate Physics** — the canonical primitives + invariants every domain rests on (system primitives 7-invariant framework + DL-1..DL-9 + DL-16 envelope). The Coherent Pattern §1 three-layer pattern is substrate-internal structure WITHIN this layer (per Reconciliation Map §9 finding D0THES-REV-045 — compositional, not contradictory).

This is a *framing* of how the existing substrate + CNS + policy + surfaces relate vertically; it introduces no new primitive. Origin: `omni_thesis_v2_2026-05-26.md` §3.7.

### §1.5.2 Four coexistent operator-level abilities (T0-12 — descriptive)

At the operator level, OMNI simultaneously supports four abilities (not modes — coexistent):

1. **Power brands** — be the substrate under Powered-by-OMNI brands (operator runs care; OMNI is the engine).
2. **Connect brands** — coordinate across operators (cross-operator coherence + elective active coordination per DL-10 + A1 permeability).
3. **Govern the network** — operate the network governance plane (aggregate-by-default; access purposes; per v1 §7.6 Network Governance Plane).
4. **Operate care domains** — run OMNI's own Core Capabilities / Specialty Lines (bounded by T0-14 anti-institutional-gravity guardrail).

A capability taxonomy, not an imperative. Origin: `omni_thesis_v2_2026-05-26.md` §3.8.

**Why these are canon-not-Tier-0**: Tier 0 holds imperative guardrails ("must / must not"). §1.5.1 + §1.5.2 are descriptive structural/capability frameworks — they describe shape, not prohibition. The *imperatives* that protect them (T0-14 anti-institutional-gravity for ability 4; T0-15 projection for the Surface layer; T0-09 substrate-vs-care for the CNS/Boundary layers) ARE in Tier 0.

---

## §2 Cross-cutting disciplines (every pillar honors)

1. **No vendor names in substrate enums.** Tenant labels, free-form STRING. (Per system_map Cross-DL warning, Phase 1 hardening 2026-05-17.)
2. **No specialty names in substrate enums.** No aesthetic_*, derm_*, plastics_*, gi_*, cardio_*, endocrine_*, sleep_*, medspa_* enum values. Specialty lives in tenant catalog.
3. **No Mindbody UI labels as substrate vocabulary.** Tenant configures names. Substrate exposes generic primitives.
4. **AI classifies; deterministic rules + staff decide.** AI never silently mutates substrate. (DL-14 inv 18-22.)
5. **Patient-level wallets for things that survive across visits.** Promos, packages, memberships, future Rx?, future lab results? — all on patient account, not appointment. Appointment carries INTENT; commerce carries APPLICATION.
6. **Pricing on `pricing_option`, never on service or category.** Service is operational kind; pricing_option is commerce variant; category is taxonomy.
7. **Free text for human notes (Mindbody-style). Structured fields for operational data.** Patient typed note free text bounded; planned_details JSONB schema-driven.
8. **Tenant configures the menu. Substrate provides primitives.** service_category hierarchy + booking_preset + planned_detail_schema let tenant build their treatment menu without code change.
9. **Locked doctrine can be amended pre-substrate-slice.** Workarounds become tech debt.
10. **Layer 2 synthesis from third-party reference systems is EVIDENCE, not template.** Mindbody / Surescripts / Quest / Stripe schemas are tenant operational reality, NOT OMNI substrate.

---

## §3 Cross-domain composition rules

How the layers compose across domains:

### Scheduling → Encounter → Commerce

```text
appointment (scheduled)
  └── appointment_item × N (planned services per visit)
      └── (at check-in)
          └── encounter (actual care)
              └── encounter_line × N (actual performed services)
                  └── (at sale close)
                      └── commerce_order_line × N (billed line items)
```

Each layer transition is a state machine. Each step preserves audit lineage. Each step uses the actor 4-tuple per DL-16 amendment 43.

### Promo wallet → Reservation → Application

```text
promo_code (offer definition; tenant catalog)
  └── patient_promo_claim × N (patient wallet entries)
      └── appointment_promo_intent × N (reservation on a specific appointment)
          └── commerce_order_line.applied_promo_claim_id (commerce truth)
```

Wallet survives across appointments. Intent is appointment-scoped with own state machine. Commerce is final truth. The three layers may differ; substrate captures all three.

### CNS event round-trip

```text
appointment confirmation_state = unconfirmed
  └── CNS emits orchestration_action (outbound confirmation request)
      └── appointment_confirmation_event (round_trip_kind=outbound_attempt)
          └── Patient responds via rail → inbound_message captured in messaging
              └── appointment_confirmation_event (round_trip_kind=inbound_response)
                  └── CNS classifier interprets response → cns_decision recorded
                      └── appointment_confirmation_event (round_trip_kind=cns_classification)
                          └── Deterministic rules transition confirmation_state
                              └── appointment_confirmation_event (round_trip_kind=state_transition)
```

This pattern repeats for every CNS-driven outbound:
- Reminder sent → patient ack → state update
- Recall fired → patient schedules → task fulfilled
- Lab result arrives → provider reviews → encounter_line + state update
- Outbound message sent → patient response → cns_decision → next action

---

## §4 Substrate-slice readiness checklist (for next pillar)

When starting a new pillar (Rx / Labs / Procedures / Commerce-deep / Communications-orchestration / etc.), the pillar is substrate-slice-ready when:

- [ ] Three layers identified explicitly (planned commitment / actual delivery / linked evidence-commerce)
- [ ] No vendor names in proposed enum values
- [ ] No specialty names in proposed enum values
- [ ] No Mindbody UI labels as substrate vocabulary
- [ ] Patient-level vs appointment-level vs commerce-level concerns clearly separated
- [ ] Pricing (if applicable) lives on pricing_option-equivalent, not on operational kind
- [ ] Free-text fields are bounded + auditable; structured fields are schema-driven
- [ ] Tenant configurable surfaces (catalog, presets, schemas) named
- [ ] AI involvement bounded per DL-14 inv 18-22 (classify, propose, never silently mutate)
- [ ] Cross-DL warning cross-linked in preamble
- [ ] User preferences locked record cross-linked
- [ ] At least 5 real-world operational scenarios stress-tested by the user
- [ ] No more than 2 levels of doctrine abstraction layered before substrate translation
- [ ] If the artifact doesn't translate to a substrate-slice-able primitive within one pass, the artifact is wrong

---

## §5 What this doc is not

This is NOT new doctrine. The DLs (DL-1 through DL-16 locked + DL-17 through DL-22 DRAFT) are doctrine. This is a CROSS-DL PATTERN REFERENCE — a one-page distillation that lets future pillar work start from the shape rather than re-derive it.

Future pillars: read this, then write your DL DRAFT, then run scenario pressure-tests, then translate to substrate slice. Don't re-derive the 3-layer pattern. Don't re-discover the cross-cutting disciplines. Use them as defaults.

---

## §6 Pointers to canonical doctrine

- DL-1 through DL-16 (locked) in [system_map_three_layers_60706286.plan.md](../system_map_three_layers_60706286.plan.md)
- DL-17 through DL-22 (DRAFT) in [.cursor/plans/doctrine/](.)
- Cross-DL warning subsection in system_map (Phase 1 hardening 2026-05-17)
- Preservation doc for parked scope: [future_care_obligations_design_2026-05-17.md](future_care_obligations_design_2026-05-17.md)
- User + Knox preferences locked: [user_knox_preferences_locked_2026-05-17.md](user_knox_preferences_locked_2026-05-17.md)
- Post-mortem: [scheduling_foundation_post_mortem_2026-05-17.md](../../docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md)
- Build Contract (Day 0 frozen at commit 6dc1286): [.cursor/plans/designs/2026-05-17_omni_scheduling_day_0_build_contract.md](../designs/2026-05-17_omni_scheduling_day_0_build_contract.md)
