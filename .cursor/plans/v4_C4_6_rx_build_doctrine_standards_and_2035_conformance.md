# v4 — C4.6 · Rx / External-Pharmacy BUILD-TIME ENGINEERING DOCTRINE — Standards Posture + Normalized Adapter Contract + 2030/2035 Conformance Test (L2)

Document type: `architecture_pressure_test` (build-time engineering **doctrine capture** — the standing engineering commitments a build agent inherits so it does NOT re-litigate standards/APIs/tools; NOT a build spec, NOT a C5 contract, NOT code, NOT a spine, NOT a synthesis).
Authority: `analysis_nonbinding` (`GRD-036` — capture broad, promotion gated). **Binds nothing. Promotes nothing. Pre-spine / pre-v4.** It is a *resolved-decision register + conformance instrument*, not a schema and not an authority host.
Status: `L2_build_doctrine_captured · standards_posture_resolved_provisional · adapter_contract_drafted · conformance_test_drafted · pending_fresh_knox_review · operator_controlled · not_promoted` (Nick direction 2026-07-26: author the build-time engineering-doctrine layer, resolve the standards, and give a 2030/2035 conformance test; then take it to a fresh Knox.)
Owner (custody of the record): Opus · Reviewers: Nick (operator) + **fresh Knox** (independent; the prior Knox thread is context-saturated per operator) · Direction author: Nick (relayed).
Parent: `v4_C4_6_rx_emit_pharmacy_counterparty_network_pressure_test.md` (Gate-0 charter).
Siblings: `v4_C4_6_G2A_external_reality_map_2026-07-22.md` (external reality — the evidence this doctrine consumes, read-graph #9m-a) · `v4_C4_6_day1_external_pharmacy_seam_pass_brief.md` (Gate-0 product direction, read-graph #9m-b).
Manifest action: `add_tier2` · Review gate: `user_knox_required` · Read-graph: sub-route #9m-c (added same-pass).
Source posture: G2A read fully (standards facts anchored to its Appendix-A ledger + §2.1–§2.6); live repo verified for the build-delta anchor (`lib/outbound/types.ts`, `PreparePharmacyDispatchForm.tsx`, `supabase/migrations/*outbound_jobs*`); no new external research performed (this is a doctrine/decision layer over already-anchored evidence).

---

> **★ WHY THIS FILE EXISTS — the operator question it answers (read first).** The C4.6 arc built the thesis (residual moat / 10BN network), mapped external reality (G2A), and captured the Day-1 *direction* (the brief). It then left a gap the operator named precisely: *"What plans do the build agents have in place so we don't have to re-litigate FHIR, or portability standards, or current APIs, or current tools — how do we implement those things, respect the 2030/2035 arc, and KNOW we're respecting it — laid out for future us?"* This file is that layer. It is **L2 in the altitude ladder (§1)**: the standing **build-time engineering commitments** — standards posture, the partner-agnostic adapter interface, and a conformance test — that sit **above** UI surfaces/projections and **above** wiring any one named pharmacy. It is the "don't lose the weed-work" preservation at the correct altitude.

> **★ WHAT THIS IS / IS NOT.** IS: a *resolved-decision register* (which external standards we consume / never reinvent / defer / firewall), a *normalized typed-action adapter contract* (the invariant every pharmacy connection must satisfy, partner-agnostic), and a *2030/2035 conformance test* (a pass/fail instrument that makes "we're respecting the long arc" checkable, not a slogan). IS NOT: a named pharmacy, a legal-transmission-rail choice for a specific partner, provider/patient UI surfaces, a C5 domain contract, a schema migration, or code. Those are downstream (§10 non-goals). No agent may implement from this file; it tells a builder *which decisions are already made and which tests any build must pass* — not what screens to draw.

---

## §1 — The altitude ladder (where this file rests, and why)

The pharmacy/Rx work can be preserved for future-us at several altitudes. Naming them prevents the recurring failure of preserving at the wrong level:

| Layer | What it is | State |
|---|---|---|
| **L0** Thesis / strategy | residual-moat, 10BN operated-network hypothesis | parked on `strategy/` branch (pre-strategic-bet addendum) |
| **L1** External reality (G2A) | what incumbents actually provide, `as_of 2026-07-22` | done (`v4_C4_6_G2A_external_reality_map_2026-07-22.md`) |
| **L2** ← **THIS FILE** | build-time engineering doctrine: standards posture + normalized adapter contract + conformance test | **this pass** |
| **L3** Domain / C5 contracts | how OFC / Federation / D6 / CNS / D7 / Care / Accountability compose the pharmacy seam | later (needs L2 first) |
| **L4** Surfaces / projections | provider / operator / patient / admin read-models + UI | later (Knox 2026-07-23 prescribed jumping here — premature) |
| **L5** Named-partner wiring | a specific pharmacy + rail + credentials in the registry | last mile; thin config once L2/L3 exist |

**L2 is the layer that makes L4/L5 cheap and makes them provably respect 2030/2035.** Building L4/L5 before L2 is exactly how a project hardwires one fax line and then rebuilds for the second pharmacy. L2 is customer-agnostic on purpose.

---

## §2 — Standards & rails posture (RESOLVED once, so no future agent re-litigates)

Verdict vocabulary: **CONSUME/PROFILE** (adopt the external grammar; never reinvent it) · **CONSUME-DON'T-BECOME** (ride the rail; do not build our own version at Day-1) · **RESPECT-SCOPE** (honor it for what it is; do not conflate with acceptance/custody) · **DEFER-OR-CERTIFIED-PATH** (out of Day-1 scope, or only via a certified third party; never home-roll) · **FIREWALL** (a decision constrained by legal/economic risk). All facts anchored to G2A (§2.1–§2.6, Appendix A) `as_of 2026-07-22`.

| Standard / rail | Posture | Standing decision + why | 2028+ / arc note |
|---|---|---|---|
| **NCPDP SCRIPT** (NewRx, RxChange, CancelRx, RxRenewal, RxFill, Status/Verify) | **CONSUME/PROFILE** | The mandated Part D prescribing grammar. OMNI's typed action set (§4) **maps onto SCRIPT taxonomy** — do NOT invent duplicate transport grammar (G2A frozen-matrix claim 3: "profile the standard, don't reinvent"). | SCRIPT `2017071` exclusive since 2020-01-01; **CMS-4205-F2** sets `2023011` mandatory/exclusive **2028-01-01** (`2017071` sunsets 2027-12-31). The adapter, not the core, must absorb this version transition (conformance C9). |
| **Surescripts** (the switch) | **CONSUME-DON'T-BECOME** | Day-1 legal transmission can ride existing e-Rx rails (2.6B e-Rx/yr; ~1.34M active e-prescribers). OMNI-as-switch is a **G11 network** question, NOT Day-1. | **FIREWALL:** FTC v. Surescripts (2019) = antitrust for loyalty/exclusivity pricing. The failure mode the market punishes is volume-linked/exclusivity economics + owned counterparty — informs neutrality economics (§7 C6, L0 thesis). |
| **FHIR** (`MedicationRequest`/`MedicationDispense`/`Task`/`Provenance`) | **CONSUME (records/read/query) — NOT the execution rail** | Use FHIR where it fits: record exchange, EHR-internal workflow, TEFCA read. US Rx *routing/acceptance* runs on SCRIPT, not FHIR. | These resources are **all Trial Use (none Normative)**. Never route contractual acceptance/custody through FHIR; it carries no custody/consequence semantics (G2A §2.2). |
| **RxFill** | **CONSUME-WHERE-AVAILABLE — do NOT depend** | The only standardized dispense-status channel; **under-adopted** (cap T2). | The dispense-status adapter MUST degrade gracefully when RxFill is absent — manual/portal bridge emits the **same canonical evidence shape** (§6, C2). |
| **RTPB** (Real-Time Prescription Benefit) | **CONSUME (informational)** | Cost/benefit signal (~889,907 prescribers 2024) may **inform routing**, may NOT author the clinical decision. | Hard firewall: price ≠ clinical recommendation (C6). |
| **DSCSA** | **RESPECT-SCOPE** | Product *tracing*, not an order/dispense workflow API. Do NOT conflate with acceptance. Treat quality/traceability as a **separate, non-scalar evidence class**. | Upstream serialized tracing live (T3–T4); dispenser-side not universal; **small dispensers (≤25 FTE) exempt until 2026-11-27**; portal-based interoperability read as permitted (the exact "permits portals" language was NOT located in primary text — G2A Appendix A DISP-03; carry as flagged, not settled). |
| **EPCS + PDMP** (controlled substances) | **DEFER-OR-CERTIFIED-PATH** | Day-1 rail decision must EITHER exclude controlled substances OR route through a **certified EPCS / identity-proofing / PDMP path**. OMNI does **not** build its own EPCS. | This is a rail-decision *guard* the L4/L5 pass must clear before touching controlled substances — governed by DEA EPCS + telemedicine rules. |
| **HL7 v2** (RDS/ADT; McKesson EnterpriseRx Intake Toolkit) | **CONSUME (adapter-plane, implementation-gated)** | Where a partner exposes it, wrap it in the normalized adapter. Not an open API; per-partner. | Belongs behind the seam (§4), never in core. |
| **TEFCA / QHIN** | **CONSUME (record retrieval) — NOT the execution rail** | Useful for record/query; not prescription acceptance. | — |
| **Vendor structured order APIs** (Empower REST, LifeFile B2B) | **CONSUME-AS-ONE-ADAPTER — do NOT treat as the fabric** | The only two near-real cross-org order APIs G2A found — both **single-vendor, credential-gated, one-pharmacy-at-a-time**. Their webhook "accepts"/`Received` = system validation (rung 3–4/prov-4.5), **NOT** contractual custody (rung 5, [C2]). | Each is one partner adapter behind the normalized seam; their validation signal is *evidence*, and the **bilateral contract defines its meaning** (§5, C8). |
| **MCP / agent transport** (now Linux-Foundation / AAIF governed) | **CONSUME — do NOT build proprietary agent transport** | Typed tools + scoped delegation + human gates. | Full interchangeability is a strong strategic inference, not a completed fact ([C7]); consume it, don't bet the core on it. |

**Net standing decision:** OMNI **profiles existing grammar (SCRIPT + vendor webhooks) and rides existing rails (Surescripts/portals/fax)**; it invents **no new transport standard** at L2. The only thing OMNI must *originate* is the **rung-5 execution-obligation meaning** and the **portable, canonical evidence shape** — because G2A established no inspected public primary source supplies portable multi-counterparty rung-5 custody or rung-6 consequence-continuity `as_of 2026-07-22`. That residual is exactly where build effort is warranted; everything else is consumed.

---

## §3 — The build-plane separation (the single most load-bearing rule)

Two planes, and Day-1 build discipline is the discipline of keeping them apart:

- **CORE (normalized / partner-agnostic):** the typed action set (§4), the canonical evidence shape (§6), the distinguishable lifecycle states, the counterparty *profile* model, the deterministic route policy, and the accountability/obligation record. **No partner name, no rail specific, no vendor field belongs here.**
- **ADAPTER PLANE (partner-specific / rail-specific):** one implementation per connection (Empower REST · LifeFile B2B · Surescripts/NCPDP · portal automation · structured fax · **staff-mediated attested bridge**). Each translates a partner's reality into the *same* core typed actions + evidence shape.

If a partner-specific detail leaks into CORE, the second pharmacy forces a core redesign — the failure conformance test C3 is designed to catch. **The manual/attested bridge is a first-class adapter**, not a temporary hack: it must emit the same canonical evidence shape as an API adapter (C2).

---

## §4 — The normalized typed-action adapter contract (partner-agnostic interface)

Every adapter — API, portal, fax, or attested manual bridge — MUST implement this same typed action interface. The set **profiles NCPDP SCRIPT taxonomy + Empower-style webhooks** (G2A claim 3); it is not net-new grammar. Rung-5 meaning is contract-defined, not inferred from any message.

| Typed action | Profiles (standard) | Rung / note |
|---|---|---|
| `submit_prescription` | SCRIPT `NewRx` | transport of a legally-signed Rx; **submission ≠ acceptance** |
| `confirm_transport` | rail/switch ACK, fax receipt | rung 1–2; **ACK ≠ acceptance** (hard guard) |
| `request_clarification` / `record_clarification_response` | SCRIPT `RxChangeRequest/Response` | negotiation loop |
| `record_review_status` | Empower `Received`/`Processing` webhook | rung 3–4 / prov-4.5; **system validation, NOT contractual custody** |
| `record_acceptance_evidence` | *(no SCRIPT equivalent)* | **rung 5 — meaning defined by the bilateral contract, never by a webhook alone** |
| `record_decline` | SCRIPT `Status`/Verify, portal state | pharmacy may decline after review; must be explicit |
| `request_cancellation` / `confirm_cancellation` | SCRIPT `CancelRx` / `CancelRxResponse` | **cancellation must be *confirmed* before any reroute** (no duplicate-active-Rx) |
| `record_dispense` | SCRIPT `RxFill` (dispense) | degrade gracefully if RxFill absent |
| `record_shipment` / `record_pickup` | RxFill + carrier / portal | fulfillment evidence |
| `record_exception` | out-of-band | creates a **named next actor + deadline** |
| `attach_quality_evidence` | DSCSA/COA/lot (separate evidence class) | non-scalar; never collapses into a score |
| `reconcile_observed_state` | OMNI projection concern | **observed vs asserted** reconciliation |

**Per-action invariants (every action, every adapter must carry):** (1) **authorized caller** (capability-checked; principal-bound — an agent calling it gains no new authority); (2) **idempotency key** (retries never double-submit/double-dispense); (3) **evidence source** (who asserted it · through which channel · what artifact backs it); (4) **observed-vs-asserted** flag (did OMNI observe the state, or was it asserted?); (5) **timestamp / as-of** (temporal truth preserved; no silent overwrite of history); (6) **retry rule**; (7) **timeout behavior** (**timeout is NOT a decision** — never auto-decline, never auto-reroute); (8) **human fallback**; (9) **escalation** (named owner + deadline on stall); (10) **projection effect** (which read-model this changes — declared, not implicit).

---

## §5 — The one thing OMNI must originate: rung-5 meaning + canonical evidence (§6)

G2A's core finding: incumbents robustly supply rungs 1–3 (+ variable rung 4); public API docs reach rung 3–4/prov-4.5 (validation/workflow), **not** contractual rung-5 execution custody, and **no** portable multi-counterparty rung-5/rung-6 fabric was found `as_of 2026-07-22`. Therefore the **only** grammar OMNI originates is the **bilateral execution-obligation definition** (the §6 questions of the Day-1 brief — acceptance-for-review vs order-acceptance, decline rights, exception reporting windows, cancellation effectiveness, partial fills, non-orphaning responsibility, obligation termination). *A webhook carries the evidence; the contract defines what the evidence means* (C8). Build effort is warranted here and only here at the standards layer.

---

## §6 — The canonical evidence shape (manual == API)

A single evidence envelope every adapter emits, regardless of rail:
`{ counterparty_ref, action, observed_or_asserted, asserting_actor, channel, artifact_ref, occurred_at (as-of), recorded_at, authority_basis, next_obligation? }`.

- An **API webhook** fills this automatically.
- An **attested manual bridge** fills the *same* envelope from a staff member reading a portal / taking a call / inspecting a fax receipt: *what the pharmacy said · who · when · which channel · what evidence.*
- **The shapes must be identical** (C2). This is what lets the second pharmacy, and later an autonomous agent, participate without core redesign — and what keeps operational evidence multidimensional + temporal instead of a collapsed scalar (C4).

---

## §7 — The 2030/2035 CONFORMANCE TEST (the "KNOW we're respecting it" instrument)

**Every** build decision downstream (a schema, a service, a typed action, an adapter, a UI projection, a route policy) must be checkable against these gates with an explicit *yes + why*. A "no" is a design defect, not a judgment call. This is the mechanism the operator asked for: the long-arc respect is *tested*, not asserted.

- **C1 — Partner behind the seam.** Does partner/rail/vendor-specific behavior sit entirely in the adapter plane, with **no partner name or rail specific in CORE**? (§3)
- **C2 — Same evidence shape.** Do manual/portal/fax adapters emit the **identical canonical evidence shape** as an API adapter? (§6)
- **C3 — Cheap second pharmacy.** Can a second pharmacy be added **primarily by config + a new adapter**, with **no core redesign**? (the reusable-seam proof)
- **C4 — Multidimensional + temporal evidence.** Is operational/quality evidence kept as distinct classes with as-of time — **never collapsed into a scalar "best pharmacy"**? (§2 DSCSA, RxFill, RTPB)
- **C5 — Principal-bound agents.** Can an agent call the typed actions **without manufacturing new authority** (capability-checked, scoped, human gate for clinical/contractual mutations)? (§4 invariant 1)
- **C6 — Commercial firewall.** Does commercial signal (price/margin/RTPB) **inform routing but never author the clinical decision**? (§2 Surescripts/RTPB, L0 thesis)
- **C7 — No fake state.** Are the hard guards enforced: **ACK ≠ acceptance · timeout ≠ decision · no silent reroute · no payment = fulfillment · no silent closure over a known open consequence**? (§4 invariants 2/7; Day-1 brief §1)
- **C8 — Rung-5 is contract-defined.** Is contractual acceptance/custody derived from the **bilateral obligation definition**, never inferred from a transport/validation webhook alone? (§5)
- **C9 — Standards consumed, version-absorbable.** Is external grammar **profiled not reinvented**, and can the **SCRIPT 2023011 (2028) transition** (and vendor API changes) be absorbed **at the adapter, not the core**? (§2)
- **C10 — No god-domain.** Does truth stay with the sovereign counterparty (its PMS) while OMNI **compiles a counterparty profile + composes existing domains** (OFC/Federation/D6/Settings/CNS/D7/Care/Accountability) rather than minting a Pharmacy empire? (§8; G2A claim 1)

---

## §8 — Build-delta anchor (DOCTRINE level — decisions, NOT wiring)

Verified live-repo state (2026-07-26): `pharmacy_send_rx` / `pharmacy_cancel_rx` exist only as **outbound job kinds** (`lib/outbound/types.ts`); the dispatch form snapshots a `treatment_order` payload to a **hardcoded fax destination `248-934-1307`** (`PreparePharmacyDispatchForm.tsx`); the only related migration is the phase-4e outbound-jobs reconciliation. **No pharmacy counterparty model, no route policy, no normalized adapter, no canonical evidence envelope, thin notification events.** This confirms the standing framing: *architecture ahead of build; build gap, not architectural prohibition.*

Doctrine-level disposition (NOT a build order — the downstream pass decides code):
- **RETAIN:** the outbound-job substrate + reconciliation (a legitimate transport-plane primitive one adapter can sit on).
- **EXTEND:** outbound jobs → per-action typed calls carrying the §4 invariants + §6 evidence envelope.
- **REPLACE:** the hardcoded fax destination → a fax **adapter** selected by the (future) route policy; fax becomes one adapter among peers, not the wired default.
- **NEW (core):** counterparty profile model · normalized typed-action interface · canonical evidence envelope · deterministic route policy · rung-5 obligation record · observed-vs-asserted reconciliation. **All partner-agnostic.**
- **NEW (adapter plane):** one adapter per rail (fax/portal/Empower/LifeFile/Surescripts/attested-manual).
- **DEFERRED:** controlled substances (EPCS/PDMP certified path), OMNI-as-switch, national network, autonomous cross-org acceptance.

---

## §9 — How Anthropic / Palantir frame this → concrete build requirements (not slogans)

- **Palantir → Ontology + typed Actions + connector SDK.** Build the **counterparty object + typed action model + adapter SDK** (customer-agnostic); a new pharmacy is *thin configuration*, not a rebuild. Requirements it forces: typed actions not arbitrary edits (§4); **provenance per field / evidence source** (§6); **desired vs observed state** (§4 invariant 4); permissioned write-back (§4 invariant 1); exception workbench (`record_exception` → named owner+deadline). *Palantir's "Day-1" is the ontology+SDK, never customer X's fax.*
- **Anthropic → typed tools + interface contracts + eval/replay + containment.** Nail the **typed tool interface + conformance harness (§7) + human gates + replayable durable evidence** before any one integration. Requirements it forces: scoped delegation, human gates for clinical/contractual mutations (C5), circuit breakers/timeouts that are not decisions (C7), replayable evidence (§6). *Anthropic's "Day-1" is the interface + tests, decoupled from any consumer.*
- **NCPDP/Surescripts → consume the transaction semantics** (§2/§4): distinguish change/renewal/cancel/fill/status; do not invent duplicate transport.
- **Vertical DTC (Hims) → UX excellence is not an excuse to own everything** (deferred to L4, but the constraint is noted so L4 doesn't overbuild).

**Both role models converge on L2:** build the normalized seam + conformance instrument once; make partner integration cheap config. That is this file.

---

## §10 — Non-goals / hard stops (this pass)

- **No named pharmacy · no rail choice for a specific partner · no credentials · no registry wiring** (that is L5).
- **No provider/operator/patient/admin UI or projection design** (that is L4).
- **No C5 domain-contract text · no schema migration · no code** (that is L3/build).
- **No spine, thesis synthesis, C5, or Reactor work.**
- **No promotion:** `analysis_nonbinding`, `GRD-036`, subordinate to checkpoint #15. Nothing here binds; a fresh Knox + operator gate it.
- **No new external research:** this is a decision/doctrine layer over G2A's already-anchored evidence.

---

## §11 — Relationship to the other layers (so nothing gets re-litigated)

- **Consumes:** G2A (L1) external reality — this file turns G2A's findings into standing engineering decisions.
- **Serves:** the Day-1 brief (Gate-0 direction) — this file supplies the standards/adapter/conformance layer the brief flagged as "still owed."
- **Feeds:** a future L3 (C5 domain contracts for the pharmacy seam) and L4 (surfaces) — both must pass §7 conformance.
- **Does not touch:** the L0 residual-moat thesis (separate strategy branch) — except that C6 (commercial firewall) and C8 (earned rung-5 reliance) are the build-side expression of that thesis.

---

## §12 — What a fresh Knox should adjudicate this against

1. Is the **standards posture (§2)** correct and complete — anything mis-scoped (e.g., FHIR/DSCSA conflation), anything missing (state boards, NABP, USP 795/797, 503B cGMP evidence as a class)?
2. Is the **normalized adapter contract (§4/§6)** genuinely partner-agnostic, and does it truly profile SCRIPT rather than reinvent it?
3. Is the **conformance test (§7)** a real pass/fail instrument — would a wrong build decision actually fail a gate, or are the gates soft?
4. Is the **build-plane separation (§3)** the right cut, and does the build-delta anchor (§8) stay at doctrine level (no premature wiring)?
5. Is anything here **overclaiming** (the recurring failure) — does it stay a decision/conformance layer and NOT smuggle in a build spec, named pharmacy, or UI?

---

<!--
Document identity (passport):
 type: architecture_pressure_test (L2 build-time engineering DOCTRINE capture — standards posture + normalized adapter contract + 2030/2035 conformance test; NOT a build spec, C5 contract, schema, code, or spine)
 authority: analysis_nonbinding (GRD-036 capture-broad-promotion-gated) · agent_read_rule: consult_if_routed · review_gate: user_knox_required
 status: L2_build_doctrine_captured · standards_posture_resolved_provisional · adapter_contract_drafted · conformance_test_drafted · pending_fresh_knox_review · operator_controlled · not_promoted (Nick direction 2026-07-26)
 parent: v4_C4_6_rx_emit_pharmacy_counterparty_network_pressure_test.md (Gate-0 charter)
 siblings: v4_C4_6_G2A_external_reality_map_2026-07-22.md (read-graph #9m-a) · v4_C4_6_day1_external_pharmacy_seam_pass_brief.md (read-graph #9m-b)
 catalog row: .cursor/plans/doctrine/01_master_corpus_catalog.md (appended same-pass)
 read-graph: sub-route #9m-c (04_manifest_read_graph.md)
 source posture: G2A read fully (standards anchored to Appendix A + §2.1–§2.6, as_of 2026-07-22); live repo verified for build-delta (lib/outbound/types.ts, PreparePharmacyDispatchForm.tsx, phase-4e outbound-jobs migration); no new external research
 hard-stops: no named pharmacy/rail/credentials/registry wiring (L5) · no UI/projection (L4) · no C5 contract/schema/code (L3/build) · no spine/thesis/Reactor · no promotion · subordinate to checkpoint #15
 purpose: give build agents the standing engineering decisions (standards posture + normalized adapter contract) + a 2030/2035 conformance test so they do NOT re-litigate FHIR/NCPDP/Surescripts/APIs/tools and can PROVE a build respects the long arc
-->
