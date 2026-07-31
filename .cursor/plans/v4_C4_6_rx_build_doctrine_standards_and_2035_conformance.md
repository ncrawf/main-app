# v4 — C4.6 · Rx / External-Pharmacy BUILD-TIME ENGINEERING DOCTRINE — Governed Counterparty Exchange · Standards Posture · Normalized Adapter Contract · 2030/2035 Conformance Test (L2)

Document type: `architecture_pressure_test` (build-time engineering **doctrine capture** — the standing engineering commitments a build agent inherits so it does NOT re-litigate standards/APIs/tools/ontology; NOT a build spec, NOT a C5 contract, NOT code, NOT a spine, NOT a synthesis).
Authority: `analysis_nonbinding` (`GRD-036` — capture broad, promotion gated). **Binds nothing. Promotes nothing. Pre-spine / pre-v4.** It is a *resolved-decision register + conformance instrument*, not a schema and not an authority host.
Status: `L2_build_doctrine_v3_fidelity_patched · knox_substantive_architecture_PASS_2026-07-31 · seven_group_bounded_fidelity_corrections_applied · pending_narrow_mechanical_re_check_by_current_knox · operator_controlled · not_promoted` (Nick direction 2026-07-26 → author the doctrine; fresh-Knox PASS-WITH-AMENDMENTS #1–#13 + A14–A20 + C12–C16 integrated coherently; Knox repository re-verification 2026-07-31 = **substantive architecture PASS**, HOLD for seven bounded fidelity groups — now applied; the branch-local handoff §9 carries the amendment→section receipt + residuals).
Owner (custody of the record): Opus (branch author/integrator) · Reviewers: Nick (operator, final gate) + the current independent Knox thread (adjudicator; re-reads the committed repository file, not a summary) · Direction author: Nick (relayed).
Parent: `v4_C4_6_rx_emit_pharmacy_counterparty_network_pressure_test.md` (Gate-0 charter).
Siblings: `v4_C4_6_G2A_external_reality_map_2026-07-22.md` (external reality this doctrine consumes; read-graph #9m-a) · `v4_C4_6_day1_external_pharmacy_seam_pass_brief.md` (Gate-0 product direction; #9m-b).
Manifest action: `add_tier2` (already routed #9m-c; no read-graph edit this pass) · Review gate: `user_knox_required`.
Source posture: G2A read fully (standards facts anchored to its Appendix-A ledger + §2.1–§2.6, `as_of 2026-07-22`); ratified anchors verified in-repo this pass — Governed Capability Exchange (`doctrine/omni_enterprise_posture_2026-06-03.md`, `D0THES-DEC-036`, `GRD-033/034`), `ordered_fulfillment_contract.md` (status: header + §1.5 `draft_for_ratification`; fulfillment subtyping §4; payload-noun≠domain guard §7 invariant 3; `GRD-026`), EVRUN-2026-000012 `_02 §15` (operative lifecycle classification — Care≠Sourcing≠Fulfillment; D6-native settlement) + `_07 §7.3` L7/L8 (downstream disposition — Vendor-Loop rejected; offer/sourcing `REQUIRES_C5_DEDUP`), and the build-delta anchor `lib/internal/patient-case/impl.ts` §prepareTreatmentForPharmacyDispatch (lines ~2803–2973), `lib/orders/treatmentOrderTransitions.ts`, `PreparePharmacyDispatchForm.tsx`. No new external research this pass (doctrine/decision layer over already-anchored evidence).

---

> **★ WHY THIS FILE EXISTS — the operator question it answers (read first).** The C4.6 arc built the thesis (residual moat / operated-network hypothesis), mapped external reality (G2A), and captured the Day-1 *direction* (the brief). It then left the gap the operator named: *"What plans do the build agents have in place so we don't re-litigate FHIR, portability standards, current APIs, current tools — how do we implement those, respect the 2030/2035 arc, and KNOW we're respecting it — laid out for future us?"* This file is that layer. It is **L2**: the standing **build-time engineering commitments** — the shared governed-exchange constitution, standards posture, the partner-agnostic adapter interface, and a conformance test — that sit **above** UI surfaces/projections (L4) and **above** wiring any one named pharmacy (L5). It is the "don't lose the weed-work" preservation at the correct altitude.

> **★ WHAT THIS IS / IS NOT.** IS: a *resolved-decision register* (which external standards OMNI consumes / profiles / defers / firewalls), a *normalized typed command/evidence adapter contract* (the invariant every counterparty connection must satisfy, partner-agnostic), and a *2030/2035 conformance test* (a pass/FAIL instrument that makes "we respect the long arc" checkable). IS NOT: a named pharmacy, a legal-transmission-rail choice for a specific partner, provider/patient UI surfaces, a C5 domain contract, a schema migration, code, or a solution for internal/inpatient pharmacy or loyalty/rewards mechanics (both explicitly out of scope — §15). No agent may implement from this file; it tells a builder *which decisions are already made and which tests any build must pass.*

---

## §0.5 — The shared-vs-specialized counterparty boundary (foundational — read before anything downstream)

This is the anti-silo constitution for the whole file. It resolves the operator question *"is pharmacy just another version of fulfillment? is it distinct? a cousin of ordinary vendor supply?"* — the answer is **cousin: shared substrate, specialized profile — neither a silo nor a twin.** **One inherited ratified guardrail and one proposed L2 keeper** frame this analysis:

- **Payload-noun ≠ domain** (`GRD-026` — *inherited ratified guardrail*): `lab`/`rx`/`commerce_fulfillment`/`imaging`/`kit`/`device`/`procedure` are `fulfillment_order_kind` SUBTYPES over ONE fulfillment substrate (`ordered_fulfillment_contract.md` §4; the guard is §7 invariant 3) — never independent noun-domains. (OFC itself is `draft_for_ratification` per its header + §1.5; the subtyping direction + `GRD-026` are the settled part; exact OFC boundaries remain ratification/L3-sensitive.)
- **Counterparty-noun ≠ lifecycle** (*proposed L2 keeper* — a strong new frame authored inside this analysis-nonbinding artifact, not inherited ratified law): a legal entity's *identity* (pharmacy, Allergan, a product vendor) does NOT determine the lane. The **capacity in which it acts in a given interaction** does. One entity may simultaneously be a prescription-review authority, compounder, supplier, fulfiller, shipper, quality-evidence issuer, continuation participant, promoter, and loyalty/brand principal. Classification output is a **tuple** across axes, not one bucket.

**The correct stack (build on it, not beside it):**
1. **Governed Capability Exchange (GCE)** — the ratified shared external-interaction constitution (`D0THES-DEC-036`; `GRD-033/034`). ONE spine for every external counterparty: `actor/represented-principal → capability contract → Identity → Federation boundary → RBAC capability → delegated authority → context packet → consent/grant → CNS orchestration → owning-domain commit → audit/proof → returned artifact/status classified (evidence | observation | proposed-meaning | externally_committed_truth — committed in the SOURCE system, not OMNI-committed) BEFORE it counts.* **External systems never own OMNI-owned canonical truth. They MAY be authoritative for facts committed within their own sovereign systems** (a pharmacy PMS for its dispense event, a carrier for its tracking scan). OMNI preserves that source authority as `externally_committed_truth` or evidence, then resolves any resulting OMNI consequence through the appropriate owning domain via the §4 resolver — no external source independently authors OMNI Care/OFC/D6/Accountability state. This cross-sovereign distinction — not OFC — is the shared anti-silo anchor.
2. **Counterparty participation & capability profiles** — who the counterparty is; which capacities it holds; under what agreement, jurisdiction, time and evidence posture.
3. **Distinct native lifecycles** — Care Resolution · Sourcing Selection · OFC Fulfillment · D6 Financial Settlement · procurement/inventory (where applicable) · Accountability Response. EVRUN-000012 `_02 §15.3` (operative lifecycle classification) holds these are **distinct** (**Care ≠ Sourcing ≠ Fulfillment**; settlement = **D6-native**), and `_07 §7.3` L7 records the **unified Vendor Loop rejection**, composing inside one episode without becoming a mega-lifecycle. **OFC owns only the ordered-fulfillment (and genuine care/fulfillment-obligation) lifecycle-state slice** — not sourcing, not settlement, not procurement/inventory, not prescription resolution, not accountability.
4. **Adapter family + connection instance** — see §3.
5. **Projection / surface** — the coherent episode humans see; owns no canonical truth.

**Pharmacy vs generic vendor.** `rx` and `commerce_fulfillment` are **sibling fulfillment subtypes** sharing the GCE constitution and — where the physics truly match — the routing/admissibility, typed resolution, adapter families, evidence envelope and return-path components. What makes pharmacy **distinct** is a **composable clinical/regulatory/professional-authority PROFILE**, not a new lifecycle or domain: prescriber authority; prescription-artifact lineage (§5); independent pharmacist review/refusal; permitted-substitution envelope; clinical-recommit boundary (routes to Care); licensure/jurisdiction (Federation); controlled-substance regime (EPCS/PDMP); compounding/quality (503A/503B, USP; §8); patient-specific legal acceptance. A generic vendor omits those profile components unless its own regulated capacity requires analogous controls. **Pharmacy is NOT a new OMNI-owned unified lifecycle or truth-owning domain** — the external pharmacy retains its own sovereign execution lifecycle; OMNI composes a profile over the shared exchange and does not absorb it. **No Pharmacy, Vendor, or Counterparty god-domain is created.**

**Two orthogonal dimensions that destination-only or noun-only models collapse (and must not):**
- **Demand binding:** patient-specific · patient-intended-not-yet-bound · clinic replenishment · office-use stock · consignment · general inventory.
- **Fulfillment / custody topology:** on-hand internal issue · external-to-clinic · direct-to-patient · clinic-intermediate custody · pickup/will-call · carrier delivery · partial/backorder · return/recall.
An external shipping leg may reuse OFC, but **stock procurement, inventory receipt, lot custody, COGS/accounts-payable and later patient allocation are NOT presumed OFC-owned or already solved** (EVRUN-000012 `_07 §7.3` L8: offer/sourcing objects `REQUIRES_C5_DEDUP`). A replenishment order must never manufacture a patient obligation; an on-hand product must never manufacture an external acceptance event.

**Care-origin context, medication artifact, dispensing topology, and externality are ALSO orthogonal:**
- **Care-origin context** — medspa visit · asynchronous visit · ordinary ambulatory encounter · emergency visit · inpatient stay · discharge/transition. External Rx emission is an **output of the Care Resolution lifecycle** across ALL of these; the external-pharmacy seam must accept authorized prescription artifacts from any of them **without encoding a cash-pay-medspa or single-encounter assumption.**
- **Medication artifact ≠ executable prescription:** a medication list / reconciliation record (continued · stopped · newly-prescribed · inpatient-administered · office-stock · externally-dispensed) is **not itself** an executable prescription; any new discharge/visit Rx remains a distinct authorized artifact with its own lineage (§5).
- **Execution topology:** external community / specialty / 503A-compounding pharmacy · hospital-owned outpatient pharmacy · internal inpatient pharmacy · clinic office stock — distinct topologies.
- **Externality is determined by the executing principal, authority and participation topology — NOT by an inpatient/outpatient label.** Care setting does not determine pharmacy externality, and pharmacy externality does not determine care setting.

**Scope line (hard):** this L2 governs **only the external-counterparty pharmacy seam.** Internal / on-site / inpatient medication-use and pharmacy operations are a **named future pass** with a materially different authority/custody posture (pharmacist order verification, formulary/P&T governance, unit-dose/floor-stock custody, controlled-substance inventory, dispensing, eMAR/administration, medication reconciliation, transitions-of-care) — **not** reducible to "D5 administration," and **not authority-free** merely because it sits inside the same health system. It may reuse order/evidence/lineage/conformance primitives but must be separately tested. See §15.

---

## §1 — The altitude ladder (where this file rests)

| Layer | What it is | State |
|---|---|---|
| **L0** Thesis / strategy | residual-moat, operated-network hypothesis | merged on `main` (`v4_C4_residual_moat_and_network_formation_doctrine.md`, read-graph #9n) — do not relocate/reopen |
| **L1** External reality (G2A) | what incumbents actually provide, `as_of 2026-07-22` | done (`v4_C4_6_G2A_external_reality_map_2026-07-22.md`, #9m-a) |
| **L2** ← **THIS FILE** | build-time engineering doctrine: GCE anchor + standards posture + normalized adapter contract + conformance test | **this pass** |
| **L3** Domain / C5 contracts | how GCE + Federation + Sourcing + OFC + D6 + Care + CNS + Accountability compose the pharmacy PROFILE; exact objects/homes | later (needs L2 first) |
| **L4** Surfaces / projections | provider / operator / patient / admin read-models + UI | later |
| **L5** Named-partner wiring | a specific pharmacy + rail + credentials in the registry | last mile; thin config once L2/L3 exist |

L2 makes L4/L5 cheap and provably arc-respecting; it is customer-agnostic on purpose. **L3 is a composition across several owners — not a Pharmacy domain.**

---

## §2 — Standards & rails posture (versioned, trigger-reopenable — NOT "resolved once")

**The law is: do NOT re-derive without a trigger; DO re-open when an enumerated trigger occurs.** Standards, regulation, partner APIs and certification are dated truths, not timeless ones. Every posture entry carries: `as_of` · `decision_status` · `evidence_basis` · `reviewed_at` · `supersedes` · `reopen_trigger`.

**Minimum reopen triggers (any one re-opens the specific entry):** new mandated standard version or certification rule · changed statutory/regulatory applicability · a new partner rail exposing materially different semantics · a failed conformance fixture · an L3 ownership collision · a real pharmacy pilot contradicting the posture · a security/safety advisory · explicit operator/Knox direction.

**Common metadata inherited by every row below (stated once to avoid per-cell repetition):** `as_of = 2026-07-22` (G2A survey) · `decision_status = provisional_standing_posture` · `evidence_basis = G2A Appendix A + the named primary source` · `reviewed_at = 2026-07-31` · `supersedes = L2-v1 posture` · `reopen_trigger = any global trigger above + any row-specific trigger noted in the row`. Row-specific triggers/dates are called out only where they add something.

Verdict vocabulary: **CONSUME/PROFILE** (adopt the external grammar; never reinvent) · **CONSUME-DON'T-BECOME** (ride the rail; don't build our own at Day-1) · **RESPECT-SCOPE** (honor it for what it is; don't conflate with acceptance/custody) · **DEFER-OR-CERTIFIED-PATH** (out of Day-1 scope, or only via a certified third party) · **FIREWALL** (constrained by legal/economic risk). Facts anchored to G2A (§2.1–§2.6, Appendix A) `as_of 2026-07-22`.

The table is split into **five posture classes** because transport grammars, record formats, regulatory-admission regimes, quality standards, and economic/benefit signals must NOT be compared or implemented at the same level.

### §2.A — Prescription transaction & transport
| Standard / rail | Posture | Standing decision + arc note |
|---|---|---|
| **NCPDP SCRIPT** (NewRx, RxChange, CancelRx, RxRenewal, RxFill, Status/Verify) | **CONSUME/PROFILE** | Mandated Part D prescribing grammar; the §4 typed actions PROFILE its taxonomy, never invent duplicate transport. **Dated (CMS-4205-F2):** `2017071` was the exclusive Part D standard *before* the transition; the transition **began 2024-07-17**, during which **either `2017071` or `2023011` may be used**; `2023011` becomes **exclusive 2028-01-01**. The adapter — not the core — absorbs the version transition (C9). `reopen_trigger`: the 2028 cutover; any NCPDP IG revision. |
| **Surescripts** (the switch) | **CONSUME-DON'T-BECOME** | Day-1 legal transmission can ride existing e-Rx rails; OMNI-as-switch is a network (G11) question, NOT Day-1. **FIREWALL:** FTC v. Surescripts (2019) punishes volume/exclusivity economics + owned counterparty — informs neutrality economics (C6, L0). |
| **Vendor structured order APIs** (Empower REST, LifeFile B2B) | **CONSUME-AS-ONE-ADAPTER — do NOT treat as the fabric** | The strongest publicly-documented cross-org order APIs **within G2A's bounded survey** — not proof no other private/bilateral interfaces exist. Both single-vendor, credential-gated, one-pharmacy-at-a-time; their webhook "accepts"/`Received` = system validation (rung 3–4/prov-4.5), NOT contractual custody. Each = one adapter behind the seam; the bilateral contract defines the signal's meaning (§6). |
| **HL7 v2** (RDS/ADT; McKesson EnterpriseRx Intake Toolkit) | **CONSUME (adapter-plane, implementation-gated)** | Where a partner exposes it, wrap in the normalized adapter. Per-partner; behind the seam, never in core. |
| **Portal / structured fax / phone / attested manual bridge** | **CONSUME as first-class adapters** | Real Day-1 rails (e.g., Pharmetika-class portals; see §3). Each emits the SAME canonical evidence shape (§7); the manual/attested bridge is first-class, not a temporary hack. |

### §2.B — Record, task & provenance interoperability
| Standard | Posture | Standing decision |
|---|---|---|
| **FHIR** (`MedicationRequest` / `MedicationDispense` / `Task` / `Provenance`) | **CONSUME (records/tasks/provenance) — NOT the primary US prescription-transport rail** | **Steelmanned:** FHIR *can* represent medication orders, dispensing events, workflow tasks (owners + states: received/accepted/rejected/in-progress/failed/cancelled/completed) and provenance (source/actor/time/transformation/authenticity). These resources are all **Trial Use (none Normative)**. It is **not** that FHIR "carries no workflow/acceptance/ownership/provenance semantics" — the precise residual is: **no base FHIR resource, by itself, establishes bilateral contractual execution responsibility, cross-sovereign custody acceptance, or patient-consequence continuity.** OMNI may profile FHIR for records/tasks/provenance while using SCRIPT or partner-specific rails for prescription transactions. |
| **TEFCA / QHIN** | **CONSUME (record retrieval) — NOT the execution rail** | Useful for record/query; not prescription acceptance. |

### §2.C — Authority, jurisdiction & regulatory admissibility
| Regime | Posture | Standing decision |
|---|---|---|
| **State Boards of Pharmacy** (licensure/registration, non-resident shipping authority) | **RESPECT-SCOPE (versioned profile)** | Per-state licensure + shipping/dispensing authority is a first-class admissibility input, temporally and jurisdictionally bounded — **not a timeless boolean** (C11). |
| **503A vs 503B status** | **RESPECT-SCOPE (versioned profile)** | FDA distinguishes 503A (state-licensed pharmacy/physician, patient-specific compounding) from 503B (outsourcing facility under CGMP + FDA inspection/reporting). Distinct statutory status; patient-specific vs office-use differs. |
| **Prescriber licensure + DEA authority** | **RESPECT-SCOPE** | Prescriber authority is an admissibility precondition, not a pharmacy field. |
| **EPCS** (controlled-substance electronic prescribing) | **DEFER-OR-CERTIFIED-PATH** | Federally-regulated electronic signing/identity-proofing regime. Day-1 rail must EITHER exclude controlled substances OR route through a certified EPCS path. OMNI builds no EPCS. |
| **PDMP** (controlled-substance databases) | **RESPECT-SCOPE (separate from EPCS)** | State-level prescription databases with state-specific access/query obligations. **EPCS and PDMP are related in a controlled-substance pathway but are NOT one standard, one adapter, or one authority** — model separately. |

### §2.D — Quality, assurance & traceability evidence (a distinct, non-scalar class)
| Standard / evidence | Posture | Standing decision |
|---|---|---|
| **USP `<795>` / `<797>` / `<800>`** (compounding: non-sterile / sterile / hazardous) | **RESPECT-SCOPE (versioned quality profile)** | First-class for the compounding-heavy wedge (peptides, mixed formulations). Not a timeless flag; a versioned counterparty quality profile. |
| **503B CGMP status** | **RESPECT-SCOPE** | 503B facilities are subject to CGMP + FDA inspection/reporting. |
| **FDA registration / inspection / Form 483 / warning-letter / recall / action status** | **RESPECT-SCOPE** | **FDA registration is NOT proof of compliance.** Inspection/483/warning/recall status is distinct evidence. |
| **NABP accreditation / verification** | **RESPECT-SCOPE** | An assurance signal aligned to USP + 503A requirements — **not a substitute for licensure, statutory status, or current FDA compliance.** |
| **DSCSA** | **RESPECT-SCOPE** | Product *tracing*, not an order/dispense workflow API; do NOT conflate with acceptance. Upstream serialized tracing live; dispenser-side not universal; the **small-dispenser exemption** = a company with **25 or fewer full-time employees licensed as pharmacists or qualified as pharmacy technicians, measured as of 2024-11-27, running through 2026-11-27** (not a flat "≤25 FTE"); the "portals permitted" reading was NOT located in primary text (G2A Appendix A DISP-03) — **carry as flagged, not settled.** |
| **COA / lot / potency / sterility / endotoxin / BUD / recall & distribution evidence** | **RESPECT-SCOPE (multidimensional, as-of)** | A separate non-scalar evidence class; never collapses into a scalar "best pharmacy" (C4). |

### §2.E — Benefit, administrative & horizontal interfaces (classified, NOT started as arcs)
| Interface | Posture | Standing decision |
|---|---|---|
| **RTPB** (Real-Time Prescription Benefit; **v13 required 2027-01-01**) | **CONSUME (informational)** | Cost/benefit signal may inform routing; may NOT author the clinical decision (C6 firewall). |
| **NCPDP Formulary & Benefit (F&B; v60 exclusive 2027-01-01)** | **CONSUME (informational)** | Classified here so future builders do not mistake it for pharmacy-acceptance or clinical-authority machinery. |
| **SCRIPT ePA** (electronic prior authorization) | **RESPECT-SCOPE** | Prior-auth exchange; not clinical authority, not acceptance. |
| **Insurance / payer adjudication** | **DEFER — named future arc** | Coverage/adjudication is its own authority; classified here, NOT started. |
| **MCP / agent transport** (Linux-Foundation / AAIF governed) | **CONSUME — do NOT build proprietary agent transport** | Typed tools + scoped delegation + human gates. Full interchangeability is a strong strategic inference, not a completed fact — consume it, don't bet the core on it. |

**Net standing decision:** OMNI **profiles existing grammar (SCRIPT + vendor webhooks) and rides existing rails (Surescripts/portals/fax)**; it invents **no new external transport standard**. What OMNI must *originate* is narrow and internal — see §6.

---

## §3 — Build-plane separation + adapter family vs connection + capability matrix

Day-1 build discipline is the discipline of keeping two planes apart, over the shared GCE substrate (§0.5):

- **CORE (normalized / partner-agnostic):** the typed command/evidence interface (§4), the canonical evidence shape (§7), the distinguishable lifecycle states, the counterparty *profile* model, composed admissibility/selection (§9), and the recognized-execution/obligation *representation* (§6). **No partner name, no rail specific, no vendor field belongs here.** **CORE is the normalized exchange/seam layer over GCE, consumed by distinct owning lifecycles; OFC participates only when the interaction advances fulfillment** (CORE is not an OFC-global genus). It MUST be expressible for a generic external vendor, not just a pharmacy.
- **ADAPTER PLANE (partner-specific / rail-specific):** it translates a partner's reality into the *same* core typed actions + evidence shape.

**Four things the adapter plane keeps orthogonal (do NOT collapse into one enum):**
- **Adapter-family implementation** = reusable protocol/platform code: NCPDP/Surescripts · Pharmetika-class portal · Salesforce-class vendor portal · vendor API (Empower/LifeFile) · portal-automation · structured-fax · phone · staff-attested bridge. One family serves **many** connections.
- **Connection instance** = a specific counterparty's tenant/account/endpoint/credentials/participation-agreement/configuration on that family (e.g., Mills Pharmacy on Pharmetika). One counterparty may hold **many** connections (portal + fax + SCRIPT + phone + human bridge); shared software (Pharmetika) NEVER implies shared authority or uniform capability — each pharmacy remains a **distinct principal** with its own legal identity, licenses/jurisdictions, agreement, formulation capability, offers, pricing, quality profile, acceptance behavior, service levels and refusal authority.
- **Support mode** (per connection, per action): `native_supported` | `partner_extension` | `automated_bridge` | `staff_attested_bridge` | `unsupported` | `unknown_unverified`.
- **Direction** (per action): `send` | `receive` | `bidirectional`.
- (plus) **Capture/transport channel** — inherited from the adapter family or the action mapping (api/portal/fax/phone/edi); and **verification posture** — declared separately (see §7). Channel and support-mode and direction and verification are **not** the same axis.

**Per-connection, per-action capability declaration (honesty over pretense).** Each connection publishes a versioned matrix across the axes above. **The conformance rule: `unsupported` is valid; fabricated support is a failure.** An adapter that cannot obtain dispense status must say so; a manual bridge may create an attested status assertion but may not impersonate an RxFill event; a fax adapter may prove transmission but may not synthesize pharmacy acceptance. Capability is declared per connection **and** per action — never assumed.

If a partner-specific detail leaks into CORE, the second pharmacy forces a core redesign (C1/C3 catch this). The manual/attested bridge is a **first-class adapter** and MUST emit the same canonical evidence shape as an API adapter (C2).

---

## §4 — The three-plane typed interface (commands ≠ evidence ≠ authoritative commits)

The single most important structural rule: an outbound command, an inbound assertion/evidence, and an authoritative owning-domain commit are **not interchangeable.** The governing law:

> **Adapter emits a command or records evidence → a resolver evaluates that evidence under a versioned profile → the owning domain commits authoritative state.** CNS coordinates; it commits no external pharmacy or clinical truth. No adapter and no evidence record ever directly sets an authoritative state (e.g., `accepted_custody = true`).

### Plane 1 — Outbound commands (an authorized request; proves nothing about execution)
`submit_prescription` (SCRIPT `NewRx`; **submission ≠ acceptance**) · `send_clarification_response` · `propose_change` · `request_cancellation` (SCRIPT `CancelRx`; **cancellation must be confirmed before any reroute** — no duplicate active Rx) · `send_renewal_response`.

### Plane 2 — Inbound evidence & assertions (what an external source asserted or a human attested; authors no domain truth)
`record_transport_ack` (rail/switch ACK, fax receipt; rung 1–2 — **ACK ≠ acceptance**, hard guard) · `record_review_status` (Empower `Received`/`Processing`; rung 3–4/prov-4.5 — **system validation, NOT contractual custody**) · `ingest_counterparty_acceptance_assertion` (the assertion that a pharmacy accepted an executable instruction — **rung 5 evidence; meaning defined by the bilateral contract, never by a webhook or staff note alone; MUST NOT itself set accepted state**) · `record_decline` (explicit) · `record_clarification_request` / `record_clarification_response` (SCRIPT `RxChange`) · `record_cancellation_response` / `record_cancellation_confirmation` (the inbound confirmation a `request_cancellation` requires before any reroute) · `record_renewal_request` (inbound pharmacy/patient renewal request; the inbound counterpart to Plane-1 `send_renewal_response`) · `record_dispense` (SCRIPT `RxFill`; degrade gracefully if RxFill absent) · `record_shipment` / `record_pickup` · `record_exception_assertion` (**records the exception and MAY carry a *proposed* next actor/deadline; it does NOT create the obligation — the applicable owning domain creates or modifies the obligation through Plane 3**) · `attach_quality_evidence` (DSCSA/COA/lot/USP — separate non-scalar class; never a score). All SCRIPT-message mappings stay `partial`/`unknown_unverified` until confirmed against the licensed NCPDP implementation guide.

### Plane 3 — Resolver & owning-domain commits (authority-bounded; the only place state changes)
`evaluate_acceptance_against_profile` (does the acceptance evidence satisfy the applicable participation/obligation profile?) · `commit_ofc_fulfillment_transition` (the recognized patient-specific fulfillment state — **OFC-owned**) · `open/close_ofc_obligation` · `trigger_cns_escalation` · `commit_d6_settlement/refund` (**D6-owned**) · `reopen_care` (**only when clinical meaning changes; Care-owned**) · `open_accountability` (**only when the event qualifies; Accountability-owned**) · `reconcile_observed_state` (**a resolver/projection concern — observed vs asserted; NOT an adapter action**).

**Per-action invariants (every action, every adapter/resolver must carry):** (1) **authorized caller** (capability-checked, principal-bound — an agent gains no new authority); (2) **idempotency key**; (3) **evidence source** (who asserted · which channel · what artifact); (4) **observed-vs-asserted** flag; (5) **timestamp / as-of** (no silent overwrite of history); (6) **retry rule**; (7) **timeout behavior** — **timeout is NOT a decision** (never auto-decline, never auto-reroute); (8) **human fallback**; (9) **escalation** (named owner + deadline on stall); (10) **projection effect** (declared, not implicit).

### The multi-principal resolution protocol (typed, authority-bounded — NOT one negotiation object)
Prescription resolution is **typed multi-principal work**, not free-form chat and not a universal `rx_negotiation` god-object. Provider, pharmacy, patient, caregiver and payer may participate, but each asserts or commits **only within its own authority**: a pharmacy may request clarification or propose a change but may **not silently rewrite clinical meaning**; a payer may commit coverage/adjudication state but may **not author the care decision**; a patient/caregiver may supply identity/delivery/preference/consent/payment context but does **not inherit prescribing authority**. Not all activity is negotiation — some is validation, interpretation, clerical normalization, an independent pharmacist decision, permitted substitution, a required prescriber recommit, payer adjudication, patient preference/consent, pure fulfillment status, or safety/recall evidence. **The "episode" is a projection over distributed artifacts and commits — not an owning object.** Exact owning-domain transitions remain L3.

### Mapping discipline (profiles external grammar; is a net-new INTERNAL seam)
OMNI invents no new external transport standard. It **does** define a normalized internal command/evidence interface that profiles SCRIPT, FHIR, vendor APIs, portals, fax and attested manual operations **while preserving their native semantics and limitations** — that internal seam is genuinely net-new (it is not "merely NCPDP SCRIPT under other names"). Every mapping row MUST carry: `external_standard/message` · `standard_version` · `mapping_type` {`exact` | `partial` | `partner_specific` | `no_equivalent`} · `direction` (inbound/outbound) · `evidence_confidence` · `semantic_loss/transformation` · `authoritative_source`. Do **not** assert exact equivalence (e.g., `record_decline` → SCRIPT `Status`/Verify) until verified against the licensed NCPDP implementation guide; until then mark `partial`/`unknown_unverified`.

---

## §5 — Prescription-artifact lineage (four distinct things; none overwrites the prior)

The most important clinical-profile distinction: **clinical medication intent ≠ the prescriber-authored signed prescription artifact ≠ the pharmacy's accepted executable dispense instruction ≠ the actual dispense record.** The prescriber-authored prescription is a **first-class, immutable, provenance-bearing artifact**, distinct from both the underlying clinical intent and the pharmacy's executable instruction. Receipt, normalization, clarification, proposed change, permitted substitution, prescriber recommit, acceptance and dispense are **linked events/artifacts; none silently overwrites the original prescription.** Every material transformation records **what changed, who proposed it, who had authority to approve it, its authority basis, and effective time.** The pharmacy's interpretation must not overwrite what the prescriber wrote; the final dispense record must not pretend it was identical to the original when it was not; the pharmacy-executable instruction must remain traceable back to the prescriber artifact and every intervening decision.

---

## §6 — The one thing OMNI originates: the recognition rule + proof shape (NOT the obligation)

G2A's core finding: incumbents robustly supply rungs 1–3 (+ variable rung 4); public API docs reach rung 3–4/prov-4.5 (validation/workflow), **not** contractual rung-5 execution custody, and **no** portable multi-counterparty rung-5/rung-6 fabric was found **within G2A's bounded survey `as_of 2026-07-22`** (a build-warrant hypothesis, not proof of universal non-existence). **The bilateral execution-obligation itself is created by the parties under contract and applicable law — OMNI does NOT originate it.** What OMNI originates is narrow: the **normalized representation** of that obligation, the **recognition rule** (does the evidence satisfy the applicable profile?), and the **portable, canonical proof shape** (§7). *A webhook carries evidence; the contract defines what the evidence means.* **"Rung 5" is OMNI analytical terminology, not a statutory or universally-recognized legal category.** Build effort is warranted at this recognition/proof seam; its differentiation, external acceptance, institutional reliance and economic value remain **unproved** (deferred to the L0 arc + Task D).

---

## §7 — The canonical evidence shape (SAME contract, UNEQUAL assurance)

Every counterparty consequence — API webhook, portal scrape, fax confirmation, phone log, or staff attestation — is captured in **one canonical evidence envelope**. The envelope is uniform; the **assurance it carries is not.** The prior "manual attestation is architecturally equal to an API event" framing is **retired**: they share a contract and a schema; they do **not** carry equal evidentiary weight, and the envelope must make the difference legible and queryable.

Conceptual field set (a shape, not a schema — enough to reconstruct manual, portal and machine evidence safely):
- **Identity / linkage:** `evidence_id` · `related_prescription_ref` · `related_obligation_ref?` (link only; evidence never *creates* an obligation) · `related_owning_domain_state_ref?` · `connection_id` · `adapter_family` · `counterparty_principal_id` · `correlation_id` · `idempotency_id` · `external_transaction_id?`
- **Actors (distinct roles):** `asserting_principal` (who/what made the assertion) · `recording_actor` (who/what captured it into OMNI — **distinct** from the asserting principal, especially for manual/attested capture)
- **Channel + source:** `channel` (api/portal/fax/phone/edi/manual — explicit) · `source_system` · `source_message_type/version` · `raw_artifact_ref` + `integrity_hash` (the underlying message/scan/screenshot/log, hashed)
- **Time (four distinct stamps):** `occurred_at` · `effective_at` · `received_at` · `recorded_at` (no silent overwrite of history)
- **Posture (do NOT default machine evidence to "verified"):** `evidence_posture` {`observed` | `asserted` | `attested` | `derived`} · `assurance_level` {**`authenticated_machine_assertion`** | **`human_attestation`** | **`derived_or_inferred`** | **`unverified`**} — *authentication of origin is NOT verification of substantive truth* · `verification_or_attestation_state` · `authority_basis` · `contract_participation_profile_version`
- **Provenance class:** `rung/provenance_class` (transport-ack · system-validation · counterparty-acceptance-assertion · dispense · shipment · exception · quality)
- **Validity / lineage:** `validity/expiry` · `supersedes_ref?` (append-only; no silent overwrite) · `contradiction_or_refutation_ref?` (**distinct from supersession** — a refutation is not a version bump)
- **Consequence hooks:** `authoritative_for` (what, if anything, this evidence is authoritative for — **often nothing on its own**) · `proposed_followup_candidate?` (a *candidate* only — the evidence does NOT author the follow-up; the owning domain does)

**Hard guards:** an ACK/receipt populates transport-ack ONLY; a portal/webhook `Received` populates system-validation ONLY; a counterparty-acceptance assertion requires the contract/profile-defined signal and STILL goes through the §4 resolver before any accepted state is committed; a machine assertion is `authenticated_machine_assertion`, never auto-`verified`; `next_obligation` as an authoritative field is **removed** (replaced by the link/candidate fields above) — evidence proposes, an owning domain disposes. A pharmacy PMS may be source-authoritative for its own dispense event and a carrier for its own tracking scan; neither authors OMNI Care/OFC/D6/Accountability state — the §4 resolver determines the recognized OMNI consequence.

---

## §8 — Counterparty formulation & offer assertions (pharmacy-sovereign · versioned · provenance-bearing PROJECTION)

This is the operator's "formulations change over time" reality (tirzepatide 4.4 vs 5 mg; +B12 vs +carnitine; added/removed items; price changes; availability shifts; pharmacy-specific quality evidence) — and it is where pharmacy **shares the mechanics of ordinary vendor/skincare supply back-and-forth.** OMNI must preserve, WITHOUT collapsing, these distinct things:
1. medication/formulation definition · 2. the pharmacy's general capability declaration · 3. its currently-offered formulation · 4. current availability/capacity · 5. commercial terms/price · 6. quality-evidence package · 7. patient-specific acceptance · (and, distinctly, payer formulary state — "formulary" means ≥5 different things and must not be one object).

**Same active ingredient does NOT imply clinical or operational equivalence.** Ingredient combination, strength/concentration, dose, dosage form, route, quantity, additives/excipients, BUD/storage and other material dimensions remain distinct. **A change requiring clinical reinterpretation routes back to Care (§4 `reopen_care`); an operationally-equivalent reroute does NOT automatically reopen the clinical decision.**

**Truth ownership:** the pharmacy remains authoritative for what it presently offers. OMNI maintains a **versioned, provenance-bearing projection/cache** of counterparty assertions with `as_of` · `effective`/`expiry` · `last_verified` · `stale`/`unknown` semantics — **NOT a "mirror" that becomes truth.** OMNI's responsibility is to never silently treat a stale assertion as current truth. This mechanics-of-supply exchange is the same GCE + adapter/evidence substrate a generic vendor uses; the pharmacy *profile* adds the clinical/quality/authority dimensions above. Exact objects/homes remain L3.

---

## §9 — Composed admissibility & selection (NOT a deterministic route owner, NOT a scalar "best")

Routing is **not** a single deterministic owner and pharmacy quality/availability/cost/reliability is **never** reduced to one authoritative scalar. The route/selection function output is a **composed, dimensioned result**: an **admissible set** (per applicable licensure/jurisdiction/503A-503B/controlled-substance/quality profile, each `as_of`), plus `failed`/`unknown`/`stale` candidates, alternatives, the applicable **preference** (patient/provider/clinic), **policy precedence**, the **objective** used, and **incentive lineage** (so any operator-margin influence is inspectable — C6). The **authorized selector** and the authority basis are explicit. Sourcing selection is a **distinct lifecycle** (EVRUN-000012 `_02 §15.3`) that composes with — but is not owned by — OFC fulfillment.

---

## §10 — Consequence return-path + longitudinal continuation (delivery ≠ closure)

Every consequential external-pharmacy transition MUST have a **governed return path** into OMNI: receipt/review status · clarification · accepted/declined/unknown · dispense/partial-fill · shipment/pickup · carrier tracking · delivery exception · cancellation · refund/remedy trigger · refill/renewal request · safety/quality signal · recall. The patient-facing state is a **composed projection over separately authoritative sources** — pharmacy/PMS asserts dispense; pharmacist identity or dispensing location is shown **only when actually evidenced**; Federation/credential evidence supports licensure; payer/claim rail supplies coverage/adjudication; carrier supplies tracking; OMNI composes and **exposes uncertainty honestly.** This is where "filled at X, by Y, coverage Z, tracking Q → relay to patient" lives — as a composed projection, never one magical pharmacy-completion record.

**Missing rail capability remains explicitly `unknown` or human-attested — NEVER silently complete.** The patient projection must update from evidence and must not claim closure after a known unresolved consequence. **Delivery may close one fulfillment episode while refill, monitoring, adverse-event, recall and continuation obligations remain open** — the longitudinal medication relationship is not the same object as a single fulfillment.

---

## §11 — Ownership matrix + shadow-domain ruling + purpose-bound counterparty communications

**Ruling: Pharmacy is NOT a new domain.** It is a composed profile across existing owners. Any single object that claims to own clinical + commercial + fulfillment + quality + communication + remedy truth is a **shadow "Pharmacy" god-domain and is rejected.**

| Concern | Owner (composed via GCE; L3 exact) |
|---|---|
| Clinical authorization + clinical meaning / intent / reinterpretation | **Care Resolution** |
| Prescription-artifact custody + materialization | **D7** (Care originates the meaning; D7 holds the artifact) |
| Prescription-resolution lineage (§5) | **spans all three** — Care meaning · D7 artifact custody · the external counterparty's source records (L3) |
| The counterparty's own source-system records (its dispense event, its tracking scan, its offers) | **the external counterparty** (source-authoritative within its own sovereign system; OMNI preserves as evidence/`externally_committed_truth`) |
| External counterparty identity / licensure / jurisdiction / participation terms | **Federation + Identity** |
| Which pharmacies a clinic uses / preference / policy | **Settings / operator config** |
| Sourcing selection (admissible set, objective, incentive lineage) | **Sourcing (distinct lifecycle)** |
| Recognized patient-specific fulfillment state + obligation | **OFC (fulfillment slice only)** |
| Procurement / inventory receipt / lot custody / COGS-AP / patient allocation | **NOT presumed solved — L3/open (EVRUN-000012 L8 `REQUIRES_C5_DEDUP`)** |
| Money / settlement / refund | **D6 (native)** |
| Consent / data-use / RBAC | **D7 + RBAC + Identity** |
| Orchestration / escalation (commits nothing) | **CNS** |
| Remedy / incident / accountability | **Accountability (only when the event qualifies)** |
| Typed command/evidence exchange + normalized proof | **This L2 seam (adapter plane + core), over GCE** — defines the exchange/proof *contract*; **owns no runtime truth and no stored proof** (the owning domains do) |

**Purpose-bound, authority-separated counterparty communications.** A counterparty (pharmacy or vendor) may communicate in several capacities; these MUST remain distinguishable and MUST NOT inherit each other's authority: patient-specific clinical / prescription-resolution · fulfillment/status · safety/quality/recall · account/operational · formulation/availability/price assertion · promotional/marketing · aggregate analytics/product-development outreach. **Promotional or aggregate commercial outreach may never masquerade as patient-specific care evidence, fulfillment state, or clinical recommendation.** Patient/cohort data use requires its own authority and provenance. Exact Demand/Engagement and data-use handling is deferred to its owning arc.

**Loyalty / rewards / brand-permeability guard (cross-counterparty; minimal L2 touch only).** A counterparty acting as a **loyalty/rewards-program operator or brand-relationship principal** (e.g., Allē/Allergan, ASPIRE/Galderma) is acting in a **separate capacity** from supplier, pharmacy, fulfiller or quality-evidence issuer. **No patient, clinical, identity, fulfillment or commercial data may be reused for enrollment, rewards, promotion or brand outreach without an explicit program identity, purpose, authority basis, patient consent where required, data-minimization rule, and revocation path.** Reward status or promotional activity may **never** author clinical meaning, pharmacy acceptance, fulfillment state, or patient eligibility. **No loyalty connector, rewards ledger, or enrollment mechanism is designed in this L2** — only the guard. The full loyalty/brand-permeability problem is a bounded future item routed in the handoff receipt.

---

## §12 — The 2030 / 2035 conformance test (proof-bearing pass/FAIL — the instrument that makes "we respect the arc" checkable)

Each gate names a concrete proof/fixture; a claim without a runnable proof does not pass. A future build asserting C4.6 alignment runs this and shows evidence.

| # | Gate | Proof / fixture | FAILS if |
|---|---|---|---|
| **C1** | Partner-agnostic core | static dependency/schema scan + adapter registry | a partner/rail name appears in a domain-owned schema or state machine rather than the adapter/config/evidence namespace |
| **C2** | Uniform evidence, honest assurance | contract tests over API + fax + manual fixtures | shapes diverge across capture methods, or normalization deletes capture-method/assurance/source distinctions |
| **C3** | Second-pharmacy without core surgery | synthetic second-pharmacy integration | it requires partner-specific domain migration or rewrites an existing domain lifecycle; any universal extension not versioned + partner-independent |
| **C4** | No scalar-quality collapse | evidence-schema audit + route-decision receipt | quality/availability/cost/reliability is reduced to an authoritative scalar without dimensions/as-of/source/objective |
| **C5** | Authority-bound action | negative authority tests | an agent acts with an expired/wrong principal, exceeds scope, or commits clinical/contractual state without proper authority |
| **C6** | Neutrality / incentive firewall | margin-only counterfactual test | changing operator margin changes clinical authorization, or hides incentive lineage in selection |
| **C7** | Command ≠ evidence ≠ commit | state-machine fixture suite | an ACK commits acceptance; a timeout commits decline; a *prepared payload becomes "sent"*; **payment ≠ fulfillment is violated** (payment closes fulfillment); or a known failure stays patient-visible as complete |
| **C8** | Rung-5 acceptance is contractual, resolver-gated | contract/profile-version + resolver fixture | a webhook or staff note **alone** commits accepted execution custody (bypasses the §4 resolver / bilateral-contract meaning) |
| **C9** | Versioned standards absorbed in adapter | versioned `2017071`/`2023011` + vendor-version adapter fixtures | an external version change forces domain/core semantic redesign rather than an adapter/profile change |
| **C10** | No shadow Pharmacy god-domain | ownership matrix + schema review | any omnibus Pharmacy object owns clinical + commercial + fulfillment + quality + communication + remedy truth |
| **C11** | Regulatory admissibility is temporal/jurisdictional | as-of / jurisdiction / regime reconstruction fixture | regulatory admissibility is stored as a timeless boolean, stale evidence is silently accepted, or the system cannot explain the governing rule/profile at action time |
| **C12** | Prescription lineage integrity | fixture where the original Rx is incomplete or materially changed | the original artifact is overwritten; normalization and clinical change are indistinguishable; a proposed change becomes effective without the authorized commit; a permitted substitution lacks its authority basis; or the pharmacy-executable instruction cannot be traced back to the prescriber artifact + intervening decisions |
| **C13** | Longitudinal return-path + purpose separation | fixture spanning acceptance → dispense → shipment → patient projection → refill request, plus a simultaneous pharmacy promotional message | external status has no return path; tracking/exception fails to update the patient projection; a refill *request* silently becomes a refill *authorization*; a safety signal is treated as ordinary marketing; a promotional message mutates patient-specific care/routing state; or an unsupported field is displayed as known |
| **C14** | Shared-counterparty reuse WITHOUT lifecycle collapse | fixtures: (1) ZO-class skincare drop-shipped direct-to-patient; (2) gel/filler office-use replenished to clinic inventory, no patient binding; (3) patient-specific compounded Rx requiring pharmacist review + clarification + shipment; (4) pharmacy pickup/will-call, no carrier | a generic vendor must pretend to be a pharmacy to use the seam; pharmacy review/clinical-recommit authority is placed inside OFC; sourcing is collapsed into fulfillment; clinic replenishment becomes a patient obligation; `rx` and `commerce_fulfillment` require parallel duplicate exchange/evidence/adapter stacks; or one shared parent erases materially different authority/lifecycle/correction/custody semantics |
| **C15** | Demand-binding & custody-topology integrity | run one catalog item through on-hand office stock · patient-bound vendor-to-office · unbound replenishment · direct drop-ship · pickup/will-call | destination is used to infer patient binding; inventory receipt is treated as patient receipt; an in-office handoff is shown as pharmacy shipment; a replenishment order creates a refill/care obligation; lot/custody continuity disappears at the clinic boundary; or a patient-visible projection claims delivery/availability the custodian has not evidenced |
| **C16** | Origin-context portability & externality-boundary integrity | fixtures: async medspa Rx → external 503A; ambulatory Rx → community pharmacy; hospital-discharge Rx → external pharmacy; hospital-discharge Rx → hospital-owned outpatient pharmacy; inpatient med order → internal pharmacy + unit administration; office-stock med administered in clinic | the external seam assumes medspa/cash-pay/one care setting; a medication list or reconciliation record is treated as an executable prescription; inpatient/outpatient setting is used to infer internal/external pharmacy status; an internal pharmacy bypasses pharmacist authority/evidence/custody; a discharge transition loses prescription lineage or continuation responsibility; office-stock administration is represented as external patient-specific pharmacy acceptance; or this external-pharmacy L2 claims to solve the inpatient medication-use system |

---

## §13 — Build-delta anchor + KNOWN NONCONFORMANCE + existing-scaffolding classification

The current medspa build has a working single-path pharmacy-dispatch **preparation** workflow; it does **not yet have a verified dispatch pipeline** (the code proves the distinction — see the known nonconformance below). This L2 is the doctrine that keeps its growth arc-respecting. Per-object disposition:

- **RETAIN + generalize:** treatment-order lifecycle (`treatmentOrderTransitions.ts`), audit-event capture, payload-snapshot pattern → generalize to the §4/§7 typed-action + canonical-evidence contract.
- **EXTEND:** `rx_sent` must be decomposed into distinguishable transport-ack vs system-validation vs contractual-acceptance-assertion states (§4 planes); the single fax destination becomes one **connection instance** of a **structured-fax adapter family** (§3).
- **REPLACE:** hardcoded fax number in the surface (`PreparePharmacyDispatchForm.tsx`) → connection-resolved routing behind the seam; direct status-flip on payload preparation → resolver-gated commit.
- **NEW (L3 obligations over the shared substrate — NOT new core primitives):** the counterparty *profile* model, composed admissibility/selection (§9), the resolver + owning-domain commit boundary (§4 Plane 3), the versioned offer/quality projection (§8). *(Per the shadow-domain ruling, the earlier "rung-5 obligation record + deterministic route policy" is NOT minted as new core; it decomposes into OFC fulfillment-state + Sourcing selection + the resolver — see §9/§11.)*

**★ KNOWN NONCONFORMANCE (present-day, verified this arc — C7 violation).** `lib/internal/patient-case/impl.ts` (`prepareTreatmentForPharmacyDispatch`, ~lines 2963–2969): after preparing a `treatment_order` payload snapshot + emitting a `treatment_order.payload_prepared` audit event, if the treatment is `approved` it calls `updateTreatmentItemStatus(..., 'rx_sent')`. This flips clinical/fulfillment status to "Rx sent to pharmacy" on **mere payload preparation** — **no verified fax transmission, no pharmacy receipt, no acceptance evidence.** `payload_prepared` is masquerading as external rail state. This is a real C7 failure in current code and is recorded here as the canonical build-delta example the doctrine exists to prevent. Remediation is an L3/build task (decompose `rx_sent`; gate the commit on §4 evidence + resolver), not performed by this doctrine file.

**Existing-scaffolding classification (for the future build agent):** `org_rx_presets` / preferred-pharmacy intake / treatment-order records / outbound dispatch jobs = **retain-and-reconcile** to the §3 connection model + §7 evidence envelope; the single hardcoded fax path = **legacy/supersede** (becomes one fax connection instance); any status set without evidence = **supersede** (must pass the resolver). Exact reconciliation is L3.

---

## §14 — Engineering comparators (framing only — NOT imperatives, NOT authority)

Palantir-style **ontology/lineage discipline** (a governed model with provenance, versioning and access control over messy external systems) and Anthropic-style **build-OS engineering discipline** (typed tools, scoped delegation, human gates, evals-as-conformance) are useful *mechanism* analogies for this seam. **Take the mechanism, not the hidden ownership/authority/economic assumptions** (`GRD` import discipline). They are comparators that motivate §4/§7/§12; they confer no authority and mandate no vendor.

---

## §15 — Non-goals / hard stops (this file, and any build claiming to implement it)

- **No named pharmacy, no partner rail choice, no credentials** (that is L5).
- **No provider/patient/admin UI or projection design** (that is L4).
- **No C5 contract, schema, migration, or code** (this is a decision register + conformance instrument).
- **No internal / on-site / inpatient pharmacy, no medication-use/eMAR/administration system** — explicitly **out of scope**, named as a **distinct future pass** with a different authority/custody posture (§0.5, §12/C16). This L2 governs only the **external-counterparty** pharmacy seam and must not silently claim the internal system.
- **No loyalty / rewards / brand-permeability mechanism, connector, or ledger** — only the §11 guard; the full problem is a bounded future item (handoff receipt) routed to GCE / Demand-Engagement / Federation / D7 / Identity-RBAC / Settings / D6.
- **No insurance/payer adjudication build, no EPCS build, no OMNI e-Rx switch** (classified/deferred — §2).
- **No standards re-derivation without an enumerated §2 reopen trigger.**
- **No promotion / no catalog / read-graph / checkpoint edit / merge / rebase / registration from this file.**

---

## §16 — Relationship to the surrounding layers + the L3 classification-receipt obligation

- **Consumes:** L0 thesis (moat/network hypothesis), L1/G2A external reality, and the ratified GCE constitution + OFC subtyping (§4) + EVRUN-000012 `_02 §15.3` lifecycle separation.
- **Feeds:** L3 domain composition (Care · Sourcing · OFC · D6 · D7/RBAC/Identity · Federation · CNS · Accountability), which then feeds L4 surfaces and L5 named-partner wiring.
- **The future Pharmacy L3 classification receipt MUST keep these distinguishable and must not collapse them:** GCE (shared exchange) · Sourcing (selection) · OFC (fulfillment-state slice) · D6 (settlement) · procurement/inventory (open) · pharmacy professional/clinical/regulatory profile (§5/§8) · Care emission contexts (§0.5) · the internal-pharmacy future pass (out of scope here).
- **This file is the standing answer to "what plans do the build agents have so we don't re-litigate FHIR / portability / current APIs / current tools, and how do we KNOW we're respecting the 2030/2035 arc" — the conformance test (§12) is the "how we know."**

---

## §17 — What the adjudicating Knox re-verifies this against (re-read the committed file, not a summary)

1. **Standards posture (§2):** Are the five classes kept distinct; are the reopen-triggers real; are the dated truths (SCRIPT 2028 cutover, F&B v60 / RTPB v13 2027) correct; is the vendor-API "only two" claim properly bounded to G2A's survey?
2. **GCE-anchored anti-silo (§0.5/§11):** Is the shared substrate GCE (not OFC); is OFC held to the fulfillment slice; are Care/Sourcing/Settlement/procurement kept distinct; is the pharmacy a profile (no god-domain)?
3. **Command ≠ evidence ≠ commit (§4/§7):** Is the resolver boundary intact; is manual==API retired while the envelope stays uniform; is `ingest_counterparty_acceptance_assertion` prevented from setting accepted state?
4. **Lineage + return-path (§5/§10):** Four distinct artifacts, none overwriting; delivery ≠ closure; missing capability = explicit unknown.
5. **Conformance (§12):** Are C1–C16 proof-bearing; do C7/C8/C12/C14/C15/C16 catch the real failure modes (incl. the §13 known nonconformance)?
6. **Scope integrity (§15):** Internal/inpatient pharmacy and loyalty mechanics genuinely out; only guards present.

Standing hard stops for any consumer of this file: promote nothing, mint no shadow domain, keep partner specifics in the adapter plane, treat regulation/quality as versioned as-of profiles, and never let a payload-preparation, transport ACK, timeout, portal `Received`, or promotional message masquerade as clinical meaning, contractual acceptance, custody, or fulfillment closure.

<!--
Document identity (passport):
type: architecture_pressure_test (build-time engineering doctrine capture — resolved-decision register + conformance instrument; NOT a build spec, C5 contract, schema, code, spine, or synthesis)
authority: analysis_nonbinding (GRD-036 — capture broad, promotion gated) · agent_read_rule: do_not_treat_as_binding · review_gate: user_knox_required
status: L2_build_doctrine_v3_fidelity_patched · knox_substantive_architecture_PASS · seven_group_bounded_fidelity_corrections_applied · pending_narrow_mechanical_re_check_by_current_knox · operator_controlled · not_promoted (2026-07-31)
parent: v4_C4_6_rx_emit_pharmacy_counterparty_network_pressure_test.md (Gate-0 charter)
siblings: v4_C4_6_G2A_external_reality_map_2026-07-22.md · v4_C4_6_day1_external_pharmacy_seam_pass_brief.md
ratified anchors: doctrine/omni_enterprise_posture_2026-06-03.md (GCE · D0THES-DEC-036 · GRD-033/034) · contracts/ordered_fulfillment_contract.md header+§1.5 (draft_for_ratification) / §4 (subtyping) / §7 inv.3 (payload-noun guard · GRD-026) · EVRUN-2026-000012 _02 §15.3 (operative) + _07 §7.3 L7/L8 (downstream)
manifest: add_tier2 (routed #9m-c; no read-graph edit this pass) · catalog: pending (registration only after operator authorizes post-L2 rebase + collision-check)
amendment receipt: HANDOFF_2026-07-27_c4-6-pharmacy-and-cross-facet.md §9 (amendment→section map + unresolved residuals)
hard-stops: no promotion · no partner/rail specifics in core · no internal-pharmacy · no loyalty mechanism · no standards re-derivation without a §2 trigger
-->
