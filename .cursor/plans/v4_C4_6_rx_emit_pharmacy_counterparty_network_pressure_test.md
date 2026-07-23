# v4 — C4.6 · RX Emit / Pharmacy Counterparty Network Pressure Test — Gate-0 Charter + Source/State Receipt

Document type: `architecture_pressure_test` (bounded, propose-only evidence + architecture pressure test — a **charter + Gate-0 receipt**, not a spine, not a contract, not a synthesis substitute).
Authority: `analysis_nonbinding` (`GRD-036` — capture broad, promotion gated). **Binds nothing. Promotes nothing. Pre-spine / pre-v4.**
Status: `gate_0_accepted_with_amendments · knox_ruling_integrated_2026-07-22 · not_promoted` (Knox Gate-0 ruling ACCEPT-WITH-AMENDMENTS; all 9 patches integrated — see §10).
Owner: Opus (repository-native) · Reviewers: Nick (operator) + Knox (independent) · optional Gemini legs by exception.
Branch: authored on `evidence/evrun-000012-care-commerce-hardening`; committed with its full §5 ceremony (charter + catalog row + read-graph #9m) and fast-forward-merged to `main` per the Gate-0 sequence ruling. **Durability (precise):** a governed working packet becomes durable committed repository state only when the three artifacts land together — done this pass.
Manifest action: `add_tier2` · Review gate: `user_knox_required` · Read-graph evaluation: **new route #9m added same-pass** (Protocol §5).
Supersedes: none · Superseded by: none.

> **Anti-substitution rule (read first):** this charter *frames and routes* the work; it is not the work. It does not restate EVRUN-000007/000008/000012, the domain contracts, or the 2026 external landscape — it points to them and defines the gates that must consume them at depth. A future agent that reads only this file has not done the pressure test.

> **Relationship to the checkpoint (does NOT change the gate):** the current boot checkpoint (read-graph Tier-0 #15, `HANDOFF_2026-07-19`) is unchanged. Gate-state remains C3.8 COMPLETE · C4 runway accepted · Task-D interim (no §7) · C4.5 accepted · EVRUN-000012 analysis-closed. The pre-spine queue is **operator-controlled**; the operator (Nick, 2026-07-22) has explicitly selected this RX/Pharmacy arc as an active pre-spine input. It is **subordinate** to #15 and runs *alongside* — not ahead of — marketing/Time-in-OMNI/H1/C3.9/Task-D-final. It does not auto-advance to spine or C5.

---

## §0 — The question (why this arc exists, in one paragraph)

Prior runs proved the *constitution* underneath a prescription and then explicitly declared two frontiers out of reach. EVRUN-000007 decomposed the RX episode (transmission ≠ acceptance ≠ dispense ≠ delivery ≠ payment ≠ monitoring; false-closure; conditional reopening; compensation ≠ rollback). EVRUN-000008 stress-tested that against a standards-native adversary, preserved the **R3 cross-authority-continuity residual**, and ruled **R4 unavailable** — *no external party has accepted OMNI's custody/receipt semantics; the decisive behavior is fixture-only or contract-unwired.* EVRUN-000012 routed the commercial objects (counterparty-offer, sourcing lifecycle, equivalence, agent-delegation envelope) to **C5 as OPEN conflicts/candidates**, and routed the network economy to **market validation**. This arc does **not** reopen that constitution. It attacks the exact two frontiers the prior runs said were unproven:

**Can OMNI preserve authorized, effortless, economically viable, longitudinally coherent care when a prescription crosses into independently-licensed, independently-automated pharmacies — supporting 4–5 pharmacies at once, across portals / NCPDP / fax / API rails and shifting regulatory jurisdictions — without commerce authoring care, and without any rail's silence or failure orphaning the patient?**

The two frontiers, named precisely:
- **F-A · External counterparty acceptance & conformance** (the R4 gap): a pharmacy is not a vendor/shipper — it is an *independent licensed decision-and-execution authority* running its own review, refusal, substitution, and increasingly its own **autopilot AI order-taker**. OMNI must interoperate with that authority (and its agent) without either side's automation manufacturing acceptance, custody, or clinical authority.
- **F-B · Multi-pharmacy market/routing mechanics under the firewall** (the market gap): price/speed/purity/reliability may compete — but only *inside* an already-cleared clinical + regulatory envelope. Admissibility precedes optimization; margin may never author the clinical recommendation.

---

## §1 — Gate-0 SOURCE / STATE RECEIPT (repository-verified)

**Boot Freshness Check: PASS.** `AGENTS.md ## OMNI Operating References` and `04_manifest_read_graph.md` Tier-0 #15 both name `HANDOFF_2026-07-19_taskd_interim_checkpointed_evrun12_active.md`. No disagreement → cleared for substantive work.

**Knox's EVRUN-000012 discrepancy — RESOLVED.** Knox (verifying against `ncrawf/main-app` `main`, tip `5275707`) reported the EVRUN-000012 folder "not retrievable from committed main" and treated its Gate state as working-packet context. **Verified:** the folder *is present and committed* on branch `evidence/evrun-000012-care-commerce-hardening` (HEAD `4eb4b6a`), which is 7 commits ahead of the `main` tip Knox saw. The EVRUN-000012 closeout (`6a74485`) + Task-D interim checkpoint (`c178baa`) + C4.5 acceptance (`90efcf0`) all landed on this branch and were **never merged to `main`**. So the "committed-state gap" is a **branch/merge-lag artifact, not a missing packet.** Open governance item: this branch's checkpoint repoint + EVRUN-000012 estate is unmerged to `main`; a fresh agent booting on `main` will not see it. (Consistent with the 07-19 handoff §4 note.)

**Source posture (this Gate-0 pass):**
- *Read fully / this pass:* `HANDOFF_2026-07-19`; read-graph #15 + routes; EVRUN-000012 `_07` terminus (role manifest, decision-lineage L1–L18, disposition ledger, §7.10 C5 candidates, §7.13 strategic verdict); git log/branch/status.
- *Verified via repository-native sub-inspection (verbatim + file:line anchors, re-openable):* EVRUN-000007 `_05` RX episode graph + keeper laws; EVRUN-000008 `_03`/`_04` R3 residual + R4-unavailable ruling; EVRUN-000009/000010 + `HANDOFF_2026-07-17` peptide/DTC/pricing; **EVSRC-000279/280/281** field specimens (Dan TRT, Mike demand, Olivia/Cache-Valley supply); legacy system-map pharmacy sibling + peptide appendix + lab §11–31; doctrine ledgers (`03`/`06`/`08`/`future_work_registry`/gap-register Row F); the 10 domain contracts (D6, Settings, Federation, OFC, CNS, D7, Clinical Memory, D5, RBAC + seams); the live pharmacy/RX code + migrations.
- *NOT inspected / owed:* raw screenshot pixels; every state pharmacy statute; the full 2026 NCPDP/Surescripts/Epic-Willow primary sources (deferred to the external-reality gate); a measured operator/pharmacy pilot (all runtime debt); EVRUN-000012 `_02 §15`/`_05`/`_06` in full (consulted via terminus + registry — must be read in full by the architecture gate per §7.6 required-consumption matrix).
- *Live-repo verification:* read-only against branch `evidence/evrun-000012-care-commerce-hardening`, HEAD `4eb4b6a`. No repository truth mutated by this pass.

**EVSRC 279/280/281 dedup (verified):** 279 = Dan TRT episode-2 (first Cache-Valley formulary appearance). 280 = Mike demand-side peptide/GLP-1 + Knox/Olivia/Caleb. 281 = Olivia/Cache-Valley/Mills supply-side catalog+pricing build. **280 Channel-D ≡ 281 Channel-3 is the same Caleb/Cache-Valley thread — count once** (canonical anchor `EVSRC-280` Ch-D). This charter honors the dedup.

---

## §2 — MATURITY: repository-verified bands (sharpening Knox; two axes kept separate)

Knox's five-band read is directionally correct. I sharpen it on repository evidence and **split architecture-maturity from build-maturity** (AGENTS: these are separate axes; conflating them is how "70% hardened" becomes indefensible). "Hardened" claims below are provisional judgment, not formal metrics.

| Layer | Architecture maturity | Build maturity (verified) | Hard verdict |
|---|---|---|---|
| Universal authority / custody / continuity / reopening / proof | **75–85%** — strong, coherent internal model (EVRUN-007 8 invariants; EVRUN-008 R3) | **~20% & fixture-only** — EVRUN-008 ruled it fixture-only/contract-unwired; conformance script GREEN ≠ production (`D0W3C-GRD-002`) | Architecture strong; **enforcement unbuilt** |
| Pharmacy-specific lifecycle semantics | **50–60%** — OFC generalizes RX from the lab machine; **no RX-specific states** (transmitted/accepted/dispensed/partial-fill absent) | **~25%** — 2 notify-only events (`rx_sent_to_pharmacy`, `refill_initiated`), **glp1_primary only**; fill/dispense/provider-refill-decision events **deferred (comments only)**; no `lib/pharmacy/`, no `prescriptions` table (treatment_items/orders are the surrogate) | Substantial *frame*; thin *build* |
| Vendor offers / formularies / sourcing / pricing / margin routing | **35–45%** — routed to C5 as OPEN (`Counterparty offer = CONFLICT_REQUIRES_DECISION`; sourcing/equivalence = CANDIDATE_NET_NEW) | **~10%** — in-code formulary *dropdowns* (`medicationCatalog.ts`), `org_rx_presets`, patient-preferred-pharmacy row; **no `vendor_offer`, no formulary table, no pharmacy counterparty, no routing engine, no pharmacy pricing** | Pieces *identified*, not reconciled or built |
| External pharmacy interoperability & acceptance (**F-A / R4**) | **20–30%** — handoff mechanics + custody theory only | **~5%** — hardcoded fax `248-934-1307`; `pharmacy_send_rx` outbound kind = **schema only, no adapter**; retail eRx = `retail_erx_planned` ("not wired"); **no NCPDP/Surescripts anything** | Mostly design; **R4 externally unproven** |
| Effortless closed-loop production experience | **15–25%** | **~10%** — immediate-capture charge (not auth-hold), refund *status* but **no Stripe refund implementation**; legacy dispatch path bypasses the order/payment graph | Clearly not there yet |

**Correct one-line answer to Nick's "~70% hardened" instinct:** *only the constitutional physics under a prescription is ~75–85% (architecture) — and even that is fixture-only in build. The pharmacy operating network, counterparty acceptance, and market mechanics are 5–30% and mostly unbuilt.* A single blended "70%" is not defensible.

---

## §3 — The operative hypothesis under test (and the correction that sharpens it)

**H (under test):** *RX is not a generic "emit," and Pharmacy is not automatically a new truth-owning domain. The pharmacy operating capability is a **pharmacy-specific counterparty execution profile** compiled across existing owners — not a `Pharmacy` god-domain and not an `omni_rx_episode` god-object.*

**Contract evidence FOR H (verified, verbatim-anchored):**
- **OFC** already owns RX as `fulfillment_order_kind = rx` (lifecycle spine; `payload-noun ≠ domain`, `GRD-026`), delegating money→D6, vendor→Federation, artifact→D7, value→Observation, meaning→Clinical Memory, comms→Messaging, orchestration→CNS.
- **D6** owns the `treatment_orders` clinical rail with the *absolute* invariants "no charge for Rx until eligibility satisfied," "payment state ≠ care state," "commerce ≠ care_commitment," and rail-agnostic `authorized/captured/voided/refund_*` money vocabulary with **authority-split** (external rail authoritative for fund movement; OMNI for clinical/order meaning).
- **Federation** enforces `jurisdiction_admission_rule` — *read at every booking/Rx/lab RPC; REJECT if unsatisfied* — plus per-state `provider_license`/DEA.
- **RBAC** already gates prescribe at **T4 provider signature** (`dea_signature`) + `substance_class_authorized_*` capabilities.
- **CNS** already models the prescribe **candidate→resolver→owning-domain-commit** flow, a **Partner Operator CNS (pharmacy)** peer type, the 7-dimension custody envelope on events, and the "AI participates at candidate; humans + owning domains commit" law.
- **Clinical Memory** holds medication as *assertion views* (no parallel medication table), with `dose_context` in the identity namespace and the provider-adoption gate.
- **D5** `care_state_view` already computes *who must act next* + `primary_blocker` (incl. `payment_or_fulfillment`, `continuation_due`).

**⚠ CORRECTION TO THE RELAY (no-flattening).** Knox called *"Vendor Offer ≠ Practice Catalog Item; Clinician authorization ≠ vendor binding"* **"the crucial sentence from the recent care-commerce work,"** implying near-settled law. **Repository-verified status: it is NOT ratified and NOT in any contract.** It appears only as an EVRUN-000012 Gate-3 *analysis candidate* labeled "GEMINI SHARPENS OMNI," and the EVRUN-000012 **disposition ledger routes "Counterparty offer" as `CONFLICT_REQUIRES_DECISION`** (unresolved: Settings vs Federation vs D6/OFC composition) and "conditional equivalence" as `CANDIDATE_NET_NEW` (needs C5 dedup + runtime proof). So it is a **strong candidate hypothesis to be resolved by this arc + C5 — not a keeper law to build on.** This matters because *where the vendor offer lives* is the load-bearing unknown of the entire "compile a profile" hypothesis. (Chronology proves lineage, not authority; evidence informs, does not auto-bind — `GRD-036`.)

**The real gap (verified):** it is **not** a missing universal domain. It is a missing, explicitly-specified **pharmacy counterparty execution profile + seam bundle** across OFC + Federation + Settings + CNS + D6 + D7 + RBAC — plus objects that are *named but unhomed*: `vendor_offer`, practice-formulary-vs-vendor-catalog, multi-pharmacy routing/selection, NCPDP/portal/fax adapter + conformance, regulatory-admissibility temporal config, and the pharmacy-side agent (A2A) interface. No `Rx domain` contract exists (referenced as decision-owner, never drafted). Gap register **Row F** already tracks this as `candidate → C5 Rx contract`.

### §3.1 — What a "pharmacy counterparty execution profile" IS (conformance-profile FAMILY, not an owner) — Knox Patch 3

The phrase is right but dangerous if left vague — a vague "profile" becomes a shadow domain. It is defined here as a **family of conformance/composition profiles**: *semantic responsibilities placed across existing owners*, **not** a record, service, table, domain, or new truth-owner, and **not necessarily N new objects.** The family (candidate scope, to be resolved at G5/C5):

1. **Counterparty identity & authority profile** — who the pharmacy legally/institutionally is (→ Federation).
2. **Capability declaration profile** — what it is generally capable of making/dispensing (→ Federation capability + Settings definition).
3. **Participation / commercial-agreement profile** — what relationship + contracted terms exist with the practice/network (→ Federation grant + D6 terms).
4. **Dynamic availability / offer-assertion profile** — current commercial terms + can-it-fulfill-now for a defined product, with effective period (→ **OPEN home**, see §4).
5. **RX transaction-message profile** — the typed exchange over the rail (→ OFC lifecycle + adapter; maps to NCPDP SCRIPT, §5).
6. **Custody / exception / escalation profile** — accepted custody, next-actor, deadline, honest projection (→ CNS + OFC + D5).
7. **Quality / lot / recall / assurance-evidence profile** — COA, potency/sterility, BUD, lot, recall linkage (→ D7 custody + Accountability/GRR).
8. **Agent-delegation / machine-participation profile** — the A2A envelope (→ RBAC + CNS + owning domains; EVRUN-012 L13).

**Keeper (Knox):** *The profile defines how distributed owners compose; it does not become another owner.*

---

## §4 — Required object separation (candidates to resolve — NOT yet law)

Keep these distinct through the arc; each row's *home* is a C5 decision this arc informs, not settles. (Dedup before minting — `EVRUN-000004 §0.5`.)

| # | Object / concept | Candidate home (to be resolved) | Verified status |
|---|---|---|---|
| 1 | Medication **definition** (ingredient/form/route/strength/monitoring) | Settings `catalog_item_kind=medication` + governed clinical knowledge | EXISTS (definition only) |
| 2 | Practice **formulary item** (what a practice is authorized to offer, under policy) | Settings (definition) consumed by Care/RBAC/Federation | ABSENT as object (dropdown scaffolding only) |
| 3 | Active **vendor/pharmacy offer** — ⚠ **DO NOT collapse into one `vendor_offer`** (Knox Patch 4); split at §4.1 | **OPEN CONFLICT** — Federation vs Settings vs D6 vs OFC | ABSENT; `CONFLICT_REQUIRES_DECISION` |
| 4 | Practice **commercial price/discount policy** | D6 `pricing_option` | EXISTS |
| 5 | Patient-specific **prescription** (clinician's authorized commitment) | Care / Clinical authority (NOT D6, NOT the selection engine) | assertion-view surrogate only; no `prescriptions` table |
| 6 | Pharmacy **route/selection decision** (which admissible pharmacy, why) | Policy-driven; orchestrated via CNS/Agent-Runtime referencing Federation/D6 | ABSENT (hardcoded fax) |
| 7 | Pharmacy **acceptance & accepted custody** | OFC lifecycle state + Federation counterparty + CNS custody envelope | theory only (fixture) |
| 8 | **Dispense** event | OFC (RX-specific state — currently absent) | DEFERRED |
| 9 | **Shipment / pickup / delivery** | OFC + Federation partner adapter | partial (`order_shipped` notify) |
| 10 | **Monitoring / refill / continuation** obligation | OFC `care_obligation` (rx_refill_due) + Care | partial (refill_requests) |
| 11 | **Compensation / remedy / clinical-reconsideration / investigation / outcome** (distinct records) | D6 (money) + Care (clinical) + Accountability/GRR + CNS | theory only |

### §4.1 — Splitting the overloaded "vendor offer" (Knox Patch 4) — G5 must test these as SEPARATE concepts

A pharmacy may be *capable but not currently available*; may *quote without accepting the prescription*; may *accept and later discover an exception*. Those distinctions are load-bearing — one `vendor_offer` object destroys them. (These are the concrete faces of §3.1 profiles 1–4 + 7; unified here so the artifact carries **one** decomposition, not two overlapping lists.)

| Concept | Meaning | Candidate home |
|---|---|---|
| Counterparty **authority** | who the pharmacy is legally/institutionally | Federation |
| Capability **declaration** | what it is generally capable of fulfilling | Federation + Settings def |
| Participation **agreement** | what relationship/contract exists with practice/network | Federation grant + D6 terms |
| Dynamic **offer/quote** | current commercial terms for a defined product, effective period | OPEN (§3.1#4) |
| Availability/**capacity** assertion | whether/when fulfillment is possible now | OPEN (Federation vs OFC) |
| Quality-**evidence** package | COA/lot/process evidence supporting the formulation | D7 + Accountability |
| **Patient-specific acceptance** | whether the pharmacy accepts THIS actual prescription | OFC state + Federation + CNS custody |

### §4.2 — Disambiguating "formulary" (Knox Patch 5) — five different things, never one object

"Formulary" is dangerously polysemous. G1/G5 must preserve at least these five, and never let one word silently combine medicine + availability + price + coverage:

| Sense | What it is | Home | Wedge relevance |
|---|---|---|---|
| Clinical protocol / eligibility policy | what care is clinically *admissible* | Settings `service_policy` (def) → Care/D3 (eval) | Day-1 |
| Practice-adopted treatment catalog | what the practice is *prepared to offer* | Settings `catalog_item` | Day-1 |
| Payer formulary & benefit state | coverage, restrictions, patient cost | (NCPDP F&B v60 / RTPB v13 rails) | **mostly N/A in the cash-pay/503A wedge; Year-3+ / retail lane only — do NOT over-build insurance the wedge doesn't use** |
| Pharmacy capability catalog | what the pharmacy *says it can make/dispense* | Federation capability (§3.1#2) | Day-1 |
| Dynamic pharmacy offer | what is *presently available under stated terms* | OPEN (§4.1) | Day-1 |

---

## §5 — Bigger frame (1BN → 10BN): what OMNI is actually building here

Nick's ask: think 1BN/10BN, Anthropic/OpenAI/Palantir. The sharpest strategic statements this arc must defend or kill:

1. **The defensible position is neither Hims nor Surescripts.** Vertical control (Hims: own EMR + 503A + 503B + peptide plant) is *one* way to make it effortless — but it is owned, capital-heavy, and single-principal. The transport rail (NCPDP/Surescripts: 1B+ real-time benefit responses in 2025) is *owned* and should be **consumed, not rebuilt.** OMNI's candidate edge is the **governed clearing layer**: make an *authorized clinical commitment portable across N independently-licensed pharmacies*, preserve the patient-consequence obligation when any rail fails, and keep commerce from authoring care — *without* requiring every party to become one institution. That is precisely the EVRUN-008 R3 residual, now aimed at the R4 frontier it could not reach.

2. **Invert Nick's "stock market for pharmacies" — AND kill the scalar "best pharmacy" (Knox Patch 6).** The instinct (price-shop, margins, fluctuating supply, best fulfiller) is right about *energy*, wrong about *shape*. An open auction lets margin author care — a **kill criterion**. The object is an **admissibility-gated clearing house**: `Admissible = legally-admissible ∩ clinically-capable ∩ contracted ∩ patient-state-eligible ∩ formulation-capable ∩ shipping-capable ∩ currently-active`. **There is no universal route owner.** Route authority is *composed* across: prescriber's clinical commitment · patient pharmacy choice/preference · payer/network constraints · jurisdiction/licensure · operator participation policy · pharmacy capability · pharmacy acceptance · commercial authorization · permitted substitution envelope. The clearing function must **return the admissible set + failed/unknown constraints + stale assertions + declared objective & incentive lineage + material alternatives + the actor/policy authorized to select** — it must **not** silently emit "best pharmacy," and must **not** collapse cost/quality/affordability/speed/continuity/margin into one opaque score. Use hard constraints → policy precedence → a *visible Pareto set* before any declared ranking. (*Day-1 reconciliation:* a configured deterministic default policy that returns a usually-single-element admissible set + operator override is a **composed policy, not a universal owner** — the composition law still holds.) **Routing keeper (Knox):** *OMNI does not discover the universally best pharmacy; it resolves the best admissible route for this commitment, patient, moment, policy, and declared objective — while preserving alternatives, authority, and incentive lineage.*

3. **Palantir, steelmanned accurately (Knox Patch 9 — my earlier framing was too easy).** Palantir Foundry/AIP genuinely combines data + logic + action + security, supports *cross-org shared ontologies*, granular object permissions, action types, simulations, and governed write-back. So the distinction is **not** "Palantir centralizes; OMNI federates" (strawman). The real residual: *Palantir gives one organization a powerful semantic-and-kinetic operating layer; OMNI must preserve professional authority, patient rights, domain-native authoritative state, and **reciprocal counterparty acceptance** across organizations that have **not** delegated command to the platform.* The adversary question for the whole arc: **what still fails when the pharmacy is independently licensed, can refuse, owns its own execution truth, and has not delegated command to OMNI?** Borrow Palantir's strongest mechanisms (operational ontology, objects/links, action types, dynamic security, simulation, human/agent workflows, decision intelligence, supply-chain state, governed write-back) — then answer that question.

4. **The 2030 frame Nick surfaced — A2A as TYPED, principal-bound exchange (Knox Patch 8), not free-form negotiation.** The pharmacies are standing up their *own* "autopilot" AI order-takers and portals — so this is agent-to-agent, not "OMNI calls an API." But "OMNI's agent negotiates with the pharmacy's agent" is unsafe unless narrowed: the interaction is **principal-bound · capability-scoped · purpose-bound · time-bounded · policy-versioned · tool-namespaced · idempotent · replayable · blast-radius-limited · escalatable** to a human/accountable domain. Agents exchange **typed work** — capability query · offer request · offer assertion · Rx submission · clarification · proposed change · accept/reject · custody offer + acceptance · status · exception · cancellation · proof receipt. **Reconciliation (consume, don't reinvent):** this typed set is largely **NCPDP SCRIPT's existing message taxonomy** (NewRx · RxChangeRequest/Response · RxRenewalRequest/Response · CancelRx/Response · RxFill · Status · Error/Verify) **plus** OMNI's custody / consequence / proof-receipt types — the A2A layer profiles the standard, it does not mint a new grammar. Anthropic's current agent engineering reinforces exactly these mechanisms (tool boundaries + namespacing, comprehensive evals, durable cross-session artifacts, containment that limits blast radius as agents gain authority). **A2A keeper (Knox):** *Agents may accelerate the protocol; they do not replace the protocol, its principals, or its acceptance evidence* (`D0W3B-GRD-002`: ACK ≠ custody). This is the hardest concrete test of the agent-delegation-envelope (EVRUN-012 L13, CANDIDATE_NET_NEW).

### §5.1 — External-acceptance LADDER (Knox Patch 7) — replaces binary R4

"External acceptance" is not one state. The pilot (G10) **must declare which rung it attempts** — otherwise "a pharmacy accepted OMNI" becomes another inflated claim.

| Rung | Meaning | Provider |
|---|---|---|
| 1 | Message transported | incumbent rails (fax/NCPDP/Surescripts) |
| 2 | Message schema validated | incumbent rails |
| 3 | Transaction acknowledged (ACK) | incumbent rails |
| 4 | Prescription accepted for review | incumbent rails / pharmacy |
| 5 | Counterparty accepts **execution custody** (as OMNI models it) | **← OMNI's novel frontier begins here** |
| 6 | Counterparty accepts OMNI's **consequence/exception** semantics | OMNI residual (EVRUN-008 R3) |
| 7 | Counterparty **contractually relies** on OMNI proof | moat |
| 8 | Counterparty **changes action** based on that proof | moat |
| 9 | **Repeated** economic/operational adoption | moat / flywheel |
| 10 | Wider institutional / insurer / regulatory recognition | endgame |

**Verified read:** incumbent rails already deliver rungs 1–4 — OMNI must **not** claim credit for solved levels. EVRUN-008's unproven frontier (R4) begins at **rung 5**; the durable moat is **rungs 8–9**. Transport ACK reaching rung 2–3 is *not* acceptance (kill criterion).

### §5.2 — The 1BN vs 10BN company (Knox-refined; my strategic sharpening added)

- **Credible 1BN (product depth + distribution):** an excellent operating product for specialty/cash-pay operators that keeps the provider in OMNI, supports N-pharmacy *structurally* from Day-1, integrates 1–2 pharmacies deeply + governed staff/portal/fax bridges for the rest, closes the patient/payment/fulfillment/monitoring/exception loops, improves practice economics *without contaminating clinical choice*, and proves **one real external custody seam** (rung ≥5).
- **Credible 10BN — NOT "the protocol" (Knox correction):** *an **operated** cross-authority conformance, routing, and continuity network for consequential healthcare commitments.* Durable assets = the **acceptance graph** of counterparties + participation relationships + conformance certification + adapter/protocol coverage + authority/jurisdiction profiles + verified reliability history + quality/exception evidence + obligation-continuity history + dispute/remedy machinery + trusted proof formats + first-party apps generating volume + external agents on the same governed seams. Flywheel: *more operators → more consequential transactions → more counterparties → better route coverage + evidence → lower failure/orphaning burden → more external acceptance → more operators.* **Strategic keeper (Knox):** *Open grammar. Operated runtime. Earned acceptance network.* (A protocol alone gets copied; a first-party app alone gets boxed in; a marketplace alone corrupts incentives; a central ontology alone triggers institutional resistance. **The operated network is the company.**)
- **⚠ My sharpening Knox under-weighted — the firewall and the flywheel are in structural tension.** The acceptance-graph flywheel is *exactly* where the care-commerce firewall is most likely to be quietly breached, because the network's economic value (route coverage, margin optimization, participation fees) creates continuous pressure to let commercial signal leak into clinical ranking. So the firewall is not merely a Day-1 product rule — it is the thing **most under attack precisely when the 10BN flywheel works**, and therefore it *is* the defensibility: if holding it were easy, incumbents' owned-pharmacy DTC models would already hold it (they structurally cannot — they *are* the owned pharmacy). Holding operator-neutrality while scaling the network is the actual hard problem and the actual moat.
- **The Anthropic–Palantir–NCPDP–OMNI factorization:** Anthropic-class = capable callers/tools/harnesses/agents · Palantir-class = operational ontology + action machinery + decision intelligence · NCPDP/Surescripts-class = established pharmacy transaction + decision-support rails (G2 must **steelman, not dismiss as transport**) · **OMNI = the governed institutional layer** through which independently-authorized actors/domains/agents move consequential care across those systems **without authority collapse or silent orphaning.** Large enough — but earned only by proving the external seam. *The concept is not the moat; accepted operation is the moat.*

5. **Regulatory admissibility is a temporal object, not catalog metadata** — and it is **not net-new**: it is the pharmacy-specific instantiation of the accepted **C4.5 Temporal Integrity discipline** + Federation's OPEN `jurisdiction_admission_rule` temporality (Q-DL21-3, patient-state-at-action-time). `BPC-157 = available` cannot be timeless metadata when the FDA 503A bulks list can move under a practice in a single advisory-committee cycle. Versioned `(substance, salt/form, route, intended-use, 503A/503B, patient-specific-vs-office-use, jurisdiction, prescriber+pharmacy authority, effective/expiry, source+version, disposition, allowed-transitions{new-order/refill/ship/monitor-only})`. Reconcile against C4.5 + Federation — do **not** mint a parallel temporal engine.

---

## §6 — Program gates (defined here; populated only under operator control)

Gate-0 (this charter) is authored. Downstream gates are **defined, not executed** — each requires operator go and consumes sources at depth. No gate auto-starts.

> **Sequence ruling (Knox Gate-0):** patch + commit the 3-artifact ceremony → merge `evidence/evrun-000012-care-commerce-hardening` to `main` → verify committed `main` bytes → **run G1 FIRST** (bounded lineage/open-question closure, not a new synthesis) → **freeze the G2 question set** → run **G2 with a FRESH Opus agent + a separate blind-Gemini leg** → stop at the G2 review gate. No gate auto-starts.

- **G0 · Charter + source/state receipt** — THIS FILE. *State: ACCEPTED WITH AMENDMENTS (Knox Gate-0 ruling, 2026-07-22); amendments integrated §3.1/§4.1/§4.2/§5/§5.1/§5.2/§10.*
- **G1 · Corpus lineage + open-question closure (RUN FIRST)** — consolidate the verified lineage (007/008/009/010/012, system-map appendix, gap-register Row F, ledgers) and **close open questions**; **bounded, NOT a new synthesis.** Two hygiene obligations: (a) **fix the contradictory EVRUN-000012 catalog row** ("Gates 0–7 CLOSED" vs "Gates 2–7 pending" — carrier says all closed); (b) verify the post-merge `main` boot path. **Output = a FROZEN matrix** `Claim × Current-status × Governing/deepest-source × What-G2-must-test` (seed rows: pharmacy-is-not-a-domain=strong-hypothesis→incumbent-counterexample · counterparty-offer-missing=unresolved-candidate→external-mechanism+canonical-split · A2A-envelope=candidate→agent/protocol-reality · external-acceptance=unproven→partner+standards-behavior · multi-pharmacy-economic-network=strategic-hypothesis→market/legal/incentive-feasibility). Freeze it — it becomes the falsifiable question set handed to the blind architect.
- **G2 · 2026 external reality map (cited; FRESH AGENT; versioned)** — 503A/503B, FDA bulks/peptide activity, EPCS/PDMP, NCPDP SCRIPT 2017071→2023011 (CMS transition to 2027-12-31; exclusive 2028-01-01), F&B v60 + RTPB v13 (2027-01-01), Surescripts capabilities, FHIR MedicationRequest/Task/RequestOrchestration/Provenance, Epic Willow (retail/inventory/price/PO/DSCSA), Hims/Ro DTC, compounding-portal API posture, Palantir donor, Boulevard/Mindbody comparators. **No incumbent strawmen — state what each already solves before claiming residual.** Run by a **fresh Opus agent** (different cognitive job: primary-source external reality, not repo-native synthesis) off the frozen G1 matrix + a **separate blind-Gemini leg**. **Version around the FDA meeting:** **G2A** = `as_of 2026-07-22` pre-meeting state + briefing materials (BPC-157, KPV, TB-500, MOTS-C, emideltide/DSIP, Semax, Epitalon); **G2B** = post-meeting outcome + official-record addendum. **FDA PCAC recommendations are advisory/non-binding — preserve as `as_of` truth; a committee vote never becomes timeless OMNI catalog metadata** (ties to C4.5 + §5 point 5).
- **G3 · Actor / authority / custody / liability / economic map.**
- **G4 · RX lifecycle + failure-scenario library** (≥24 scenarios; every failure names which layer reopens: sourcing / commercial / operational / clinical / accountability / multiple).
- **G5 · Formulary vs vendor-offer vs patient-RX decomposition** (resolve object #3 home candidate; dedup receipt required).
- **G6 · Multi-pharmacy admissibility → routing architecture** (the clearing-house sequence + firewall).
- **G7 · Adapter + conformance model** (NCPDP / Surescripts / portal-automation / staff-bridge / fax / attested-manual — degradation ladder + A2A envelope).
- **G8 · Day-1 / Year-3 / Year-5 operating strategy.**
- **G9 · Contract / seam / build impact matrix** (candidates for C5 — **no C5 edits here**).
- **G10 · One-pharmacy real-world pilot charter** with EVRUN-008-style measured success criteria (attacks R4).
- **G11 · Quadrifecta adjudication + disposition** (see §7).
- **G12 · Relay-ready v4 handoff** (spine-grade conclusions only) + routing to `03`/`06`/`08`/`future_work_registry`/catalog/read-graph/evidence-base.

---

## §7 — Method: quadrifecta (roles kept independent)

- **Gemini-A · blind architect/adversary** — designs the strongest 2026–2035 multi-pharmacy execution substrate *without seeing OMNI's solution*. (No Gemini connector in Cursor; leg assigned to Nick/Gemini-Antigravity by exception — **not** simulated by Opus.)
- **Opus · builder** — strongest repository-faithful OMNI design + implementation-state map.
- **Knox · adjudicator** — **frozen rubric written before reading either final submission** (§7.1).
- **Gemini-C · mutator** — attacks the adjudicated design with state/regulatory/commercial/portal/quality/cross-principal mutations.
- **Nick · operator** — judgment + gate decisions.
Submissions preserved verbatim; reconciliation in a separate adjudication artifact.

### §7.1 — Frozen rubric dimensions (score + gate)
Clinical-authority fidelity · pharmacy-independent-authority fidelity · jurisdiction/regulatory temporality · care-commerce firewall · multi-pharmacy portability · admissibility-before-optimization · custody-transfer honesty · partial-failure & selective reopening · patient-projection accuracy · standards-leverage-vs-reinvention · portal/API degradation handling · quality/lot/recall traceability · economic & accounts-payable integrity · anti-self-preference / operator-neutrality · provider ergonomics (no routine portal escape) · external-acceptance & deployment realism · cede-able agent interface / non-cede-able invariant · no new god-object or shadow domain.

### §7.2 — Kill criteria (design FAILS if it)
requires clinicians to leave OMNI for routine pharmacy work · treats transport ACK as pharmacy acceptance · lets margin author clinical recommendation · stores regulatory status as timeless metadata · hard-codes one pharmacy into the ontology · treats a pharmacy as a dumb shipper · claims a refund erases the original capture · shows false closure after known failure · lets portal automation create authority/acceptance · invents a universal RX/Reactor object · ignores NCPDP/Surescripts/Epic capabilities · claims network advantage without a real external counterparty.

---

## §8 — HARD STOPS (this arc)
- No v4 spine prose. No thesis synthesis.
- No C5 contract or schema edits. No migrations.
- No central `Pharmacy`/`Reactor` service, table, or god-object; no new domain or primitive before a dedup receipt + falsifier + admission.
- No binding regulatory conclusions without appropriate professional validation.
- No reopening/rewriting OMNI Reactor (EVRUN-007/008 = inherited, closed).
- No claim of production maturity from fixture tests; no claim an external pharmacy accepted OMNI semantics without real-world evidence (R4).
- Does not displace marketing / Time-in-OMNI / H1 / C3.9 / Task-D-final — runs alongside, subordinate to checkpoint #15.

---

## §9 — Protocol §9 STOP REPORT (Gate 0)
- **Work package:** C4.6 RX Emit / Pharmacy Counterparty Network Pressure Test — Gate 0 (charter + source/state receipt).
- **Authority posture:** `analysis_nonbinding` · propose-only · pre-spine. Nothing promoted; nothing bound.
- **Source posture:** §1 (verified vs asserted vs owed declared).
- **Decisions made:** none binding. One relay correction recorded (§3: "Vendor Offer ≠ Practice Catalog Item" is candidate, not ratified). Maturity bands sharpened + split into two axes (§2). EVRUN-000012 discrepancy resolved as branch-merge-lag (§1).
- **Files changed this pass:** created this charter (+ §10 amendments); appended one catalog row + one read-graph route (#9m); fixed the contradictory EVRUN-000012 catalog row. No contract/schema/spine/Care/AGENTS/#15 change.
- **Durability posture (Knox Patch 1 — precise):** *this is a governed current **working packet** with its full §5 ceremony staged; it becomes **durable committed repository state** only when the charter + catalog row + read-graph route land together in a commit.* (OMNI's architecture-memory law makes committed preservation materially different from a correct local working tree.) As of this pass: committed on `evidence/evrun-000012-care-commerce-hardening` and merged to `main` per the Gate-0 sequence.
- **Open conflicts surfaced:** vendor-offer home (`CONFLICT_REQUIRES_DECISION`, now split §4.1); pharmacy-route authority is composed, no universal owner (§5).
- **Next allowed action (operator-controlled):** **G1 first** (bounded lineage/open-question closure → frozen matrix), then freeze the G2 question set, then G2 by a fresh Opus agent + separate blind-Gemini leg (G2A/G2B versioned around the FDA meeting). Stop at the G2 review gate. No jump to C5/spine.

---

## §10 — Knox Gate-0 ruling: ACCEPTED AMENDMENTS (integrated 2026-07-22)

Knox verdict: **ACCEPT WITH REQUIRED AMENDMENTS.** All 9 patches accepted; 5 sharpened by Opus; 1 strategic addition. Integration map:

| Patch | Ruling | Where integrated | Opus sharpening (no-flatten) |
|---|---|---|---|
| 1 · durability language | accept | §9 durability posture | — |
| 2 · merge branch before deeper work + fix stale catalog row | accept | §6 sequence, §9, catalog fix executed | verified clean fast-forward (main strict ancestor) before merging |
| 3 · profile = conformance FAMILY not owner | accept | §3.1 (+ keeper) | unified §3.1 with §4.1 so the artifact carries ONE decomposition, not two overlapping lists |
| 4 · split overloaded `vendor_offer` | accept | §4.1 (7-way split) | folded into §3.1 profiles to avoid redundancy |
| 5 · disambiguate "formulary" (5 senses) | accept | §4.2 | flagged payer-formulary as **mostly N/A in the cash-pay wedge** — don't over-build insurance |
| 6 · no universal route owner; admissible-set+Pareto not scalar | accept | §5 point 2 (+ routing keeper) | reconciled with Day-1 default: a deterministic default policy is a composed policy, not a universal owner |
| 7 · external-acceptance ladder | accept | §5.1 (10 rungs) | annotated **rungs 1–4 = incumbent-provided**; OMNI frontier starts rung 5, moat rungs 8–9 |
| 8 · A2A = typed principal-bound exchange | accept | §5 point 4 (+ A2A keeper) | mapped the typed set onto the **NCPDP SCRIPT message taxonomy** + custody/proof types (consume, don't reinvent) |
| 9 · steelman Palantir accurately | accept | §5 point 3 | — |
| — · 10BN = operated runtime + earned acceptance network | accept | §5.2 | added the **firewall-vs-flywheel structural tension** as the actual moat (Knox under-weighted it) |

**Keepers adopted (verbatim, candidate — not promoted):**
- *The profile defines how distributed owners compose; it does not become another owner.*
- *OMNI does not discover the universally best pharmacy; it resolves the best admissible route for this commitment, patient, moment, policy, and declared objective — while preserving alternatives, authority, and incentive lineage.*
- *Agents may accelerate the protocol; they do not replace the protocol, its principals, or its acceptance evidence.*
- *Open grammar. Operated runtime. Earned acceptance network.*

**Note (Opus):** Knox's own posture records he did **not** inspect the uncommitted catalog/read-graph bytes or the full EVRUN-000012 parent files — so these patches are **frame-level** (correctly so for a Gate-0 frame ruling). Several (Patch 6 admissibility, Patch 3 no-owner) were already partially present in the charter body; the amendments sharpen and make them load-bearing rather than reversing the frame. Nothing in the ruling required reopening the frame.

---

<!--
Document identity (passport):
 type: architecture_pressure_test (charter + Gate-0 receipt)
 authority: analysis_nonbinding · agent_read_rule: consult_if_routed · review_gate: user_knox_required
 status: gate_0_charter_authored · pending_nick_knox_review · not_promoted (2026-07-22)
 catalog row: .cursor/plans/doctrine/01_master_corpus_catalog.md (appended same-pass)
 read-graph: route #9m (04_manifest_read_graph.md, appended same-pass)
 supersedes: none · superseded_by: none
 inherited-closed inputs: EVRUN-2026-000007, EVRUN-2026-000008 (Reactor — frozen, not reopened)
 feeds: C5 Rx contract candidate (gap-register Row F), v4 spine (RX/pharmacy execution), Task-D (external acceptance)
 hard-stops: no spine prose · no C5/schema · no god-object · no fixture-as-production · no external-acceptance claim without R4 evidence
-->
