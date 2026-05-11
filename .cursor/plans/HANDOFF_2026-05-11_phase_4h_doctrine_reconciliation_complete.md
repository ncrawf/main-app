# HANDOFF — Phase 4H doctrine reconciliation complete

**Date:** 2026-05-11
**Status:** CLOSED. Doctrine arc complete. All preservation docs caught up. No code, no migrations, no commits — working drafts only across the four doctrine-tier docs.
**Provenance:** consolidates the c4-c9 4H-templates-discipline arc + the post-c9 in-app inbox c1 + the 2026-05-10 mega-pressure-test session + the Phase 1.5 v3 Day 0 reframe + the doctrine reconciliation pass + the consistency cleanup + the DL-9 / §5.2 / §6.6 owned-diagnostic-acquisition correction + the 2026-05-11 preservation pass (this handoff).

---

## Why this handoff exists

The 5-hour Phase 4H doctrine arc that ran across 2026-05-10 → 2026-05-11 was not a planned build phase. It started as preflight prep for the c4 (`shipped`) migration and ended with binding architectural commitments that reach far beyond the c1-c9 mechanical migration sequence: Doctrine locks DL-1 through DL-9 in MAIN, Section 1W foundation primitive in MAIN, foundational doc §1 v3 reframe + §1.5 + §2.1 definition table + §5.2 owned diagnostic acquisition + §6.6 specialty register (51 rows) + §11.0 crosswalk + consistency cleanup, plus this preservation pass codifying the decisions in the supporting docs.

Every c1-c9 commit had its own checkpoint handoff. The doctrine arc did not. This handoff closes that gap so future-you (or future contributor) can reconstruct what happened, why, and what comes next without spelunking through the agent transcript.

---

## What landed (binding doctrine — MAIN + foundational doc)

### MAIN system map (`.cursor/plans/system_map_three_layers_60706286.plan.md`, 9617 → 9881 lines)

- **Platform operational model** binding doctrine paragraph (top of map). Patient-rooted operational healthcare system with first-class sibling operational domains over a shared substrate.
- **Doctrine locks DL-1 through DL-9** (between Repo anchors and Section 1D). Nine binding architectural commitments.
- **Section 1W: Tracked clinical objects + procedure / intervention lifecycle** (foundation primitive; 11 sub-sections from 1W.0 through 1W.11). Foundation infrastructure referenced by every operational sibling, NOT a sibling itself.
- **Repo anchors table** updated with two new rows (Section 1W + Foundational Architecture v2 cross-link).
- **Layer 1 overview** in the Platform operational model paragraph extended with "Foundation modules underneath the siblings" enumeration naming Section 1W as first-class.

### Foundational doc (`.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md`, 0 → 1073 lines)

- **§1 Premise (v3 reframe).** Day 0 elite-class depth for activated domains; integration is the moat; "consumer-grade" / "lighter-than" framings rejected.
- **§1.5 Wedge scope boundary** with named depth bars: Mindbody-class scheduling, Shopify-class commerce, Hims-class intake, ActiveCampaign-class lifecycle marketing, Klara/RingCentral-class communications, Athena-lab-module-class diagnostics, outpatient-EMR-depth charting. Epic-grade hospital EMR explicitly NOT the bar.
- **§1.6 Primitive extraction doctrine** + **§1.7 Universal flow grammar** (13-step decomposition) + **§1.8 Primitive admission criteria** (post-cleanup: rationale paragraph + canonical 4-condition operational test).
- **§2 Three architectural tiers** (substrate / sibling / overlay) + **§2.1 Definition table** (17 binding terms normalized).
- **§3 Dimensional matrix** (the cells substrate must accommodate).
- **§4 Substrate primitives** (canonical 21-primitive enumeration in build-sequence order; this is the reference everything else cites).
- **§5 Operational sibling domains** (18 siblings) + **§5.1 procedure_episode_kind variants** + **§5.2 Owned diagnostic acquisition + structured result authoring** (binding sub-doctrine, ~110 lines).
- **§6 Specialty overlays** + **§6.5 Primitive extraction test grid** (12-row primitive validation) + **§6.6 Specialty-coverage non-foreclosure register** (51 rows across 12 specialty clusters).
- **§7 Four-layer epistemic model** + **§7.5 Clinical identity reconciliation** + **§7.6 Encounter → intervention → checkout continuity chain** + **§7.7 Structured-first authoring + note-as-rendered-output**.
- **§8 Encounter → intervention → checkout chain (worked examples)**.
- **§9 Ontology traps (20 named explicitly)**.
- **§10 What's already built (validation)**.
- **§11 What this amendment reserves (concrete scope)** + **§11.0 Foundational doc → MAIN crosswalk** (53 rows mapping every doctrine concept to its MAIN binding location with status).
- **§12 Reservation status (A/B split)** — A: reserved-deferred (substrate primitives + sibling reservations in place); B: truly deferred (not even reserved).
- **§13 Execution plan (HISTORICAL / SUPERSEDED banner)** — original 6-phase doctrine-amendment proposal preserved as historical record.

---

## What landed (preservation, this pass)

### ADR (`docs/architecture/phase_4h_target_first_decision_record.md`, 587 → ~770 lines)

- **§7.9 Doctrine locks DL-1 through DL-9 binding model + Section 1W as foundation primitive.** The structural decision: doctrine locks live in MAIN; foundational doc is rationale; Section 1W is foundation primitive not sibling.
- **§7.10 Day 0 elite-class depth (DL-5) + substrate non-foreclosure across all dimensions (DL-6).** Named depth bars table; rejected "consumer-grade" / "lighter-than" framings; activation incrementality.
- **§7.11 Owned diagnostic acquisition + structured result authoring (DL-9).** Three producer × entry-mode lanes; `diagnostic_acquisition_session` operational object; output-source taxonomy enum; standards admissibility; explicit anti-pattern rejections.
- **§7.12 Specialty-coverage non-foreclosure register pattern (§6.6 method).** When to extend the register; rejection of specialty-specific primitive tables; non-foreclosure proof, NOT roadmap.

### Radar (`docs/architecture/v1_pressure_test_radar.md`, 183 → ~245 lines)

- **2026-05-11 addendum** (post-doctrine-reconciliation) with five new zones:
  - **Zone 29** Specialty-acquisition-table proliferation drift (tier 1) — `urology_void_flow_table` etc. anti-pattern
  - **Zone 30** §6.6 specialty register staleness (tier 2)
  - **Zone 31** Day 0 elite-class depth-bar drift (tier 1) — "we'll do real Mindbody-class scheduling later"
  - **Zone 32** Owned-vs-external diagnostic conflation (tier 1) — DL-9 anti-pattern
  - **Zone 33** Primitive numbering drift recurrence (tier 2) — non-§4 ordering recurrence

### Evolution narrative (`docs/architecture/evolution_narrative.md`, 194 → ~280 lines)

- **Act X: The doctrine-reconciliation arc (May 10 – May 11).** Narrative entry covering: shipped seam → Platform operational model elevation → in-app inbox substrate landing (mode shift to continuity-proving) → c5-c9 sibling expansions → Foundational Architecture v2 mega-pressure-test → Day 0 reframe (Phase 1.5 v3) replacing "consumer-grade" framing → reconciliation (DL-1..DL-8 + Section 1W into MAIN) → DL-9 / §5.2 / §6.6 owned diagnostic acquisition correction → consistency cleanup (7 contradictions, 6 fixed, 1 verified clean).

### Closing handoff (this file, NEW)

- Captures what landed, what was rejected, mode-shift status, open watch zones, next-build candidates.

---

## What was rejected (decisions captured for future-self)

The following framings were considered and explicitly rejected during the arc. Each is preserved here so future contributors who encounter the same temptation see the rejection rationale.

- **"Consumer-grade" framing for activated domains.** Rejected: erodes the integration-as-moat thesis. Activated domains carry Day 0 elite-class depth per DL-5; reserved domains stay reserved at substrate-primitive / sibling-folder level.
- **"Lighter than each best-of-breed tool" framing** (lighter than Mindbody, lighter than Shopify, lighter than Hims, etc.). Rejected: competing on the wrong axis. Best-of-breed tools already exist; the substrate replaces the integration tax, not the depth.
- **"PDF wrapper" framing for diagnostic lifecycle.** Rejected by DL-9. Owned tests are authored, not merely ingested. Substrate primitive #16 (external-system ingest) is for outside systems only.
- **Specialty-specific acquisition tables** (`urology_void_flow_table`, `cardiac_holter_table`, `pulm_dlco_table`, `gyn_colposcopy_table`, `ophtho_oct_table`, `ent_audiogram_table`, `pain_rfa_table`, etc.). Rejected by DL-8 admission criteria + ADR §7.11. The §6.6 row + DL-9 acquisition session is the model; specialty tables are the regression.
- **Narrative-first authoring** (provider types prose; structure extracted later by AI / re-entry). Rejected by DL-7 + ADR §7.10. Structured-first authoring + note-as-rendered-output is the binding discipline.
- **Collapsing the four epistemic layers** (Tracked finding + assertion + diagnosis + billing) into one concept. Rejected: the substrate condition for outpatient-EMR-class + Athena-lab-module-class + Shopify-class commerce simultaneously requires the four layers stay distinct.
- **Routing diagnostic acquisition through `clinical_record/`.** Rejected by DL-9. `labs_lifecycle/` + `procedure_lifecycle/` own their own structured-result templates; `clinical_record/` is a consumer of rendered output, not the canonical authoring sibling.
- **Treating the foundational doc as binding by itself.** Rejected at the reconciliation. The foundational doc is rationale source; MAIN is operating source of truth. Doctrine commitments compile INTO MAIN as binding locks.
- **§13 execution plan as future-work plan after reconciliation already landed.** Rejected by the consistency cleanup. §13 now carries a HISTORICAL / SUPERSEDED banner; the phase table preserved as historical record only.
- **Incremental activation framing for activated domains.** Rejected by the consistency cleanup of §2.1 definition table. Activation order across domains is sequenced operationally; once a domain activates for the wedge, depth is not incremental.

---

## Mode-shift status

The platform's mode has shifted three times during the c1-c9 + post-c9 arc:

1. **Substrate-completion mode** (c1-c8 + early c9). Build commits focused on substrate correctness, governance discipline, anti-pattern enforcement.
2. **Continuity-proving mode** (c1 in-app inbox + c8 pharmacy_lifecycle + c9 case_denied). Build commits started enabling experiential continuity, not just substrate correctness. Recognized in the c1 in-app inbox checkpoint handoff.
3. **Doctrine-reconciliation mode** (post-c9 → 2026-05-11). The 5-hour arc that compiled Doctrine locks DL-1..DL-9 + Section 1W into MAIN. **Now CLOSED with this preservation pass.**

**Phase 4H overall status:**
- 4H-pre: COMPLETE.
- 4H-disclosure-policy: COMPLETE (c1 + c2 landed).
- 4H-templates-discipline: COMPLETE (c1-c9 landed; closes the legacy v0 notification migration arc; `notificationRules.ts` + `SendTemplateTestForm.tsx` deleted; `patientMessages.ts` + `onPatientWorkflowEvent.ts` shrunk to non-legacy roles).
- 4H-in-app-inbox: substrate landed (c1); UI deferred.
- 4H overall: substrate-complete; sibling activations open.

The next phase opens against a substrate that has been pressure-tested, named, and bound — not the substrate of the c1-c9 commits. The substrate of Act X.

---

## Open watch zones (radar)

The v1 pressure-test radar carries 33 zones total. Active zones to watch as the next build phase opens:

- **Zone 7** (legacy v0 notification survival) — closed structurally with c9.
- **Zone 27** (sibling-discriminant leak / case-as-parent-ontology drift) — actively forming; reinforced by the c9 anti-overload binding.
- **Zone 28** (care-task substrate fragmentation / metadata jsonb leakage) — actively forming; surfaces with the first patient-task-shaped rule that wants to use `patient_inbox_messages.metadata`.
- **Zone 29** (specialty-acquisition-table proliferation drift) — surfaces at the first specialty activation beyond the wedge.
- **Zone 30** (§6.6 staleness) — surfaces at the first sibling activation that touches a specialty not in §6.6's 12 categories.
- **Zone 31** (Day 0 depth-bar drift) — surfaces at the next sibling activation; "Day 0 not yet" is the red flag.
- **Zone 32** (owned-vs-external diagnostic conflation) — surfaces at the first diagnostic / procedural workflow activation post-DL-9.
- **Zone 33** (primitive numbering drift recurrence) — surfaces at any future doctrine-tier amendment that cites primitives by number.

---

## §11.0 crosswalk current PARTIAL / RESERVED rows (next-build candidates)

The §11.0 crosswalk in the foundational doc maps every doctrine concept to its MAIN binding location with status. Current PARTIAL / RESERVED rows are the candidate set for the next build phase. Listed here so future-you can pick from a clear menu rather than re-deriving:

**Substrate primitives — PARTIAL:**
- Substrate primitive #16 (external-system ingest) — pattern exists for documents + labs; not yet generalized as a single named primitive in MAIN.
- Substrate primitive #18 (plan / protocol) — Section 1Q rules engine produces plans + `care_program` table; protocol versioning reserved.
- Substrate primitive #20 (vendor / partner interaction) — Section 1L partner-adapter contract; cross-vendor generalization reserved.
- Substrate primitive #21 (consent / authorization) — currently bundled into disclosure-policy substrate primitive #3; consent-split per foundational doc §4 not yet split out.

**Substrate primitives — RESERVED (no concrete binding yet):**
- Substrate primitive #14 (specimen / artifact chain-of-custody) — reserved; not yet a Section in MAIN.
- Substrate primitive #17 (encounter) — reserved; `clinical_record/` sibling activation pending.

**Siblings — RESERVED:**
- `scheduling_lifecycle/` — Section 1F hybrid-care primitives; reserved folder.
- `provider_tasking/` — Section 1G.11.2 action-item primitives; reserved folder.
- `clinical_finding/` — distinct from tracked-clinical-object primitive (Section 1W); will activate when finding-shaped workflows beyond Section 1W coverage emerge.
- `procedure_lifecycle/` — distinct from individual sibling activations.
- `authorization_lifecycle/` — prior-auth + payer-auth substrate; activates when `revenue_cycle/` future RCM activates.
- `referral_lifecycle/` — referral-shape workflows; activates when first cross-org referral surface emerges.
- `inventory_lifecycle/` — inventory + supplies + specimen logistics substrate; activates when first procedural sibling requires inventory consumption.
- `retail_lifecycle/` — Section 1E retail catalog; reserved folder.
- `revenue_cycle/` — Section 1I financial state; Day 0 charge-lineage scope only; full RCM deferred per §12.A.

**Siblings — PARTIAL (substrate exists; folder not yet activated):**
- `communications_lifecycle/` — Section 1G messaging substrate + Phase 4H-in-app-inbox c1 substrate landing.
- `clinical_record/` — chart fields in Section 1J + Section 1G.8 provider workspace.
- `marketing_lifecycle/` — Section 1H.4 + Section 1H.4.1 marketing surface.

---

## Recommended next-build candidates (3-5 narrowed from above)

Picked for "what unlocks visible continuity" vs "what is more substrate completion." Rationale per candidate:

1. **In-app inbox UI (c2 of Phase 4H-in-app-inbox).** Substrate landed in c1; UI deferred. Why now: most direct continuity-proving win — patients see system-generated notifications in a persistent inbox. Low architectural risk; substrate is bound. Estimated scope: ~1-2 commits (UI surface + read/unread state + light archival).

2. **`scheduling_lifecycle/` activation (first migration).** Substrate non-foreclosed via Section 1F + `appointment_kind` discriminant + DL-3 sibling-local discriminant. Why now: Mindbody-class scheduling is a §1.5 named Day 0 depth bar. Activation forces real depth; no "Day 0 not yet" excuses (radar zone 31 watches for this). Estimated scope: ~3-5 commits across multi-resource bookings + provider availability + room/equipment + prep dependencies.

3. **`communications_lifecycle/` folder activation (first migration).** Substrate exists via Section 1G messaging + in-app inbox c1; folder not yet activated. Why now: closes the gap between substrate (built) and sibling enumeration (un-activated). Low risk — substrate bound. Estimated scope: ~1-2 commits to materialize the folder + first concrete rule + template.

4. **Consent split from disclosure-policy (substrate primitive #21).** Currently bundled into substrate primitive #3 (disclosure-policy); foundational doc §4 reserves the split but MAIN has not yet split. Why now: distinct semantic domains (disclosure-policy gates outbound communication; consent gates clinical operation performance). Substrate primitive separation now is cheaper than retrofit later. Estimated scope: ~1-2 commits — section addition + (optional) migration to split metadata.

5. **`revenue_cycle/` Day 0 charge-lineage activation.** Day 0 scope per DL-5: charge capture from clinical events + intervention-derived charge lineage + cash-pay receipts + subscription billing + package billing + checkout payload assembly. Future RCM (claims / payer / ERA / EOB / AR) deferred per §12.A. Why now: charge lineage is the link between intervention authoring (DL-7) and patient checkout (per Section 1W §1W.6 step 6). Estimated scope: ~3-5 commits.

If decision-paralysis sets in, **#1 (in-app inbox UI)** is the smallest, lowest-risk, highest-continuity-proving win. **#2 (scheduling_lifecycle/ activation)** is the most architecturally significant — first activation since c8 pharmacy_lifecycle/.

---

## Where to look first when picking up

The doctrine is now spread across six docs. To rebuild context cold, read in this order:

1. **MAIN Doctrine locks DL-1..DL-9** ([`/.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md), section between Repo anchors and Section 1D). The binding architecture in 9 short paragraphs.
2. **MAIN Section 1W** (same file, after Section 1V). The foundation primitive that DL-7 + DL-8 + DL-9 reference; 11 sub-sections from 1W.0 through 1W.11.
3. **ADR §7.7 + §7.8 + §7.9 + §7.10 + §7.11 + §7.12** ([`/docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md)). The decision rationale; reads as Decision / Context / Rationale / Consequences / Cross-links per section.
4. **Radar zones 27-33** ([`/docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md)). What to watch as the next phase opens.
5. **Foundational doc §11.0 crosswalk** ([`/.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md`](FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md), §11.0). Status table mapping every doctrine concept to its MAIN binding location. Tells you what's LANDED / PARTIAL / RESERVED.
6. **Evolution narrative Act IX + Act X** ([`/docs/architecture/evolution_narrative.md`](../../docs/architecture/evolution_narrative.md)). The story; reads as continuous narrative from c1-c9 through the doctrine reconciliation arc.

For the long form, read the foundational doc end-to-end. ~1067 lines. Heavier but comprehensive.

---

## Files NOT touched in this preservation pass

- MAIN system map ([`/.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md)) — current as of the consistency cleanup; no edits.
- Foundational doc ([`/.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md`](FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md)) — current as of the consistency cleanup; no edits.
- [`/docs/architecture/operational_objects_under_patient.md`](../../docs/architecture/operational_objects_under_patient.md) — already current per prior reconciliation (companion visualization to the Platform operational model).
- All preflights, c1-c9 checkpoint handoffs, and historical scratch files — preserved as-is.

---

## Unresolved questions / deliberate open items

These were surfaced during the arc but left open intentionally. Each is fine to remain open until concrete pressure surfaces. Listed here so future-you knows they are NOT bugs in the doctrine.

- **CI lint for primitive numbering (zone 33).** Out of current scope. Could be a `scripts/lint-primitive-references.ts` that scans for "primitive #N" references against §4 canonical ordering. Adds when first violation surfaces.
- **CI lint for `output_source` taxonomy (zone 32).** Out of current scope. Could enforce that diagnostic / procedural rows carry one of the six taxonomy values. Adds when first activation lands.
- **Section 1W concrete schema (5 reserved tables: `tracked_clinical_objects`, `clinical_object_aliases`, `clinical_object_interventions`, `clinical_object_evidence`, `intervention_to_billing_link`).** Reserved at doctrine level; concrete migration deferred until first sibling activation that consumes them.
- **Substrate primitive #21 split from #3.** Reserved per §4 + foundational doc §11.0; MAIN has not yet split. Open for the consent-split migration when scheduled.
- **§6.6 register CI sentinel.** Out of current scope. Could enforce that `repo/rules/<sibling>/` migrations cross-link to a §6.6 row when applicable. Adds at first activation pressure.

---

## Recommended next session entry point

When you (or future contributor) returns to this work:

1. Read this handoff first.
2. Pick from the recommended next-build candidates section above (or override with a different priority).
3. If picking a candidate that activates a new sibling, verify §6.6 covers the specialty shapes the sibling will touch; if not, extend §6.6 first per ADR §7.12 method.
4. If the candidate stresses a §1.5 named Day 0 depth bar, verify the activation PR addresses depth-bar adequacy explicitly per radar zone 31.
5. Write a preflight using the established pattern from c1-c9 (single A4-ish page; scope, attributes, watch zones, parity proof, radar zone activations).
6. Write a checkpoint handoff after the commit lands.

The doctrine is bound. The next commit composes against it, not against an implicit substrate.

---

*End of handoff. This closes the Phase 4H doctrine reconciliation arc. The platform substrate is now structurally bound across MAIN + foundational doc + ADR + radar + evolution narrative + this handoff. Future amendments add to MAIN doctrine locks first; foundational doc updates with rationale second; ADR captures decision; radar tracks risk; narrative tells the story; handoff closes the session. Six-doc preservation cycle.*
