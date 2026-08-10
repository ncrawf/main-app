# v4 — FAI — OMNI Architecture: Reconciliation & Installation — GATE-0 CHARTER (R9)

Document type: `handoff_or_readiness_gate` (arc-opening packet — an **existing** governance category, used deliberately; §4)
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). Binds nothing. Promotes nothing. **Mints no name, category or artifact class.**
Status: **`gate_0_charter_R9 · pending_operator_and_independent_review_acceptance · nothing_started`**. Current state lives in §1 and nowhere else.
Domain(s): `architecture_governance` · `cross_cutting` — **no domain owns this arc's output.**
Lifecycle role: opens the arc that reconciles and installs **OMNI Architecture**.
Source-of-truth relationship: consumes the estate read-only. Where this charter and a carrier differ, **the carrier controls.**
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` **PROPOSED** — not landed (`PRESPINE-PHASEA-INTEGRATOR` VACANT).
Review gate: `user_knox_required`

> **Correction receipt R0 → R1 → R2.**
> **R0** (`8c0e8b1`, on the Insurance branch — a package-boundary violation, since corrected): treated the arc as an open existential question with a `NOT_A_SYSTEM` exit; proposed a single-law probe as Gate 1; named `.cursor/plans/` as the candidate home. **All deleted at R1.** The operator's "outpost" meant *the first permanent structure at the real site*, not a test cabin to decide whether the site exists. I misread it.
> **R1** claimed *"the taxonomy has no `contract` class, therefore OMNI never classified contracts."* **Half wrong — corrected at R2 (§4).** `doctrine/00_architecture_artifact_index.md` exists, is ratified, and already defines System Map, Domain Contract and Seam/Event Contract. Knox caught this. **The real defect is narrower and worse: two taxonomies exist, they are inconsistent with each other, and neither carries the roles this arc needs.**
> **R2–R5**: names the thing **OMNI Architecture**; classifies Reactor; separates standards from patterns; adds the four things neither reviewer had (§6); answers the operator's sequencing question (§2).

---

## §1 — ONE CURRENT-STATE SURFACE

| Fact | Value |
|---|---|
| Existence question | **CLOSED. The thing exists.** Not reopened, not gated, not tested |
| Name of the whole | **OMNI Architecture** — see §3 |
| Arc state | `chartered_R9 · not_started · PRE-0_complete · amendment_cycle_applied · G0_NOT_ACCEPTED` · **execution plan R8** — `v4_FAI_omni_architecture_arc_execution_plan_2026-08-09.md`. **Authority reconciliation is a REQUIRED G1 work package; no authority model is settled by this charter** |
| What this file authorizes | **nothing** — a proposal for Nick + Knox acceptance |
| **PRE-0 preflight** | **runs BEFORE G0 and is NOT a gate.** Two blind alternative designs (A, B) + one independent grounded plan audit (C). Protocol: `v4_FAI_PRE0_preflight_brief_and_protocol_2026-08-09.md`. **G0 cannot be accepted until PRE-0 has run and its ledger is reconciled** |
| Insurance | **FROZEN.** PR #14, separate branch, unmerged. `C3.9` and `E2` not started |
| Blocking obligation | **`PRESPINE-PHASEA-INTEGRATOR` VACANT.** No shared control-plane surface may land |

---

## §2 — The operator's sequencing question, answered: **the taxonomy IS the stake**

*"Do we plant the stake so we can build spine → thesis → taxonomy, or do we run a taxonomy arc?"*

**They are the same act, and the evidence is this session.** The moment the question became *"what artifact classes exist"*, it produced more build-relevant clarity in one pass than five arcs produced in months. That is not luck — **taxonomy is the container question, and containers constrain everything placed in them.** Insurance, Pharmacy and Care each spent an arc discovering they had no place to put what they found.

**So the artifact-role model is the first normative content of OMNI Architecture, not a follow-on.** You cannot install what you cannot classify, and you cannot classify without somewhere to put it.

**And the original plan inverts, for a reason that is now visible.** Spine → thesis → taxonomy failed *five times* because a spine is a **statement of an architecture**, and we kept trying to state an architecture that had never been organized. **Corrected order: organize (this arc) → state (spine) → explain (thesis).** Contracts already exist and get reconciled in, not rebuilt.

---

## §3 — Naming: settled, un-branded, and deliberately boring

**The whole thing is `OMNI Architecture`.** It is the actual architecture of the system and the company. It needs no coined name because it is not a new invention — it is the thing we have been building unlabelled for six months.

| Rejected | Why |
|---|---|
| **OMNI Constitution** | collides with the thesis, implies foundational-most — **and the estate already uses "constitutional invariants" for Doctrine** (Artifact Index), so the word is taken |
| **OMNI Kernel** | programmer boilerplate; says nothing about care |
| **OMNI Reference Architecture** *(as the master name)* | a *reference architecture* is a reusable baseline for a **family of implementations**. That is a real and useful thing for OMNI's 1000-deployment future (§6.1) — **it is a part, not the whole** |
| **OMNI Base Spec** | FHIR's term; imports FHIR's identity (§3.2) |
| **OMNI Architecture Description** | ISO's technical term for the artifact collection. Correct as *metadata*, wrong as a product name |

**Named mechanisms keep their names inside it:** Polaris · Reactor · Reservoirs · GCE. **The container does not need to be memorable. The mechanisms already are.**

### §3.1 ISO/IEC/IEEE 42010 — a lens, not an identity
Use it during this arc as a **completeness check**: what is the entity of interest · who are the stakeholders · what concerns must be addressed · which viewpoints exist · which views answer them · **what correspondences connect the views** · where are the contradictions. **Do not claim conformance, do not adopt its vocabulary wholesale, and do not name the package after it.** The standard explicitly does not prescribe the architecture, the process, the notation, the tooling or the file format — so it cannot answer any question we actually have. **`architecture description` may appear in metadata as the technical class of the collection. Nowhere else.**

### §3.2 FHIR — borrow the mechanics, reject the identity
**Borrow:** canonical identifier · explicit versioning · a base definition that a specialization constrains · differential vs snapshot · status and publisher · machine-readable validation against a declared profile · and the rule that a specialization **may constrain but may never loosen** what it inherits.
**Reject:** framing OMNI as building a FHIR equivalent. OMNI profiles govern authority, ownership, consent, commitment, custody, correction, workflow, projection, experience and conformance — a FHIR profile constrains a data structure.
**Therefore the artifact is an `Operating Profile`, never a "profile"** unqualified, so no future agent mistakes it for a FHIR StructureDefinition.

---

## §4 — The taxonomy defect, corrected: **two taxonomies, inconsistent, both incomplete**

R1 said the estate had no contract class. **Wrong.** There are **two** classification systems. **★ AMENDMENT 2 (C-12) — the R6 characterisation of their relationship was ALSO wrong, and the independent plan audit caught it.** They are **not** "mutually invisible": `00_architecture_artifact_index.md` **explicitly points to the document taxonomy and states it remains the binding authority**. The real defect is narrower and more accurate: **they are linked one-way, are not modelled as independent passport axes, and the role index is incomplete for the roles this arc needs.**

| | `00_document_governance_and_taxonomy_2026-05-19.md` §2 | `00_architecture_artifact_index.md` |
|---|---|---|
| Answers | **how is this handled and routed?** | **what architectural job does it do?** |
| Contents | 10 governance categories: `manifest_or_catalog · canon_digest · doctrine · adr · domain_rule_slice · audit_or_pressure_test · evidence_or_ingestion · narrative_or_postmortem · handoff_or_readiness_gate · future_or_parked_watch` | **13** artifact roles *(★ Am-2: R6 said 12; the displayed table has 13 rows)* with ONE-job / FORBIDDEN / home per role: **System Map · Domain Contract · Seam/Event Contract · Doctrine · ADR · Open Decisions · Supersession · Guardrails · Field cases · Evidence/Workbench · Future arcs · Build OS · Catalog/Read-graph/Boot** |
| Says of itself | *"Do not invent a new category unless explicitly approved"* | *"OMNI did not lack an artifact OS; it had one, but its System Map and doctrine layers had drifted out of conformance"* |
| Missing | `contract`, though **15 top-level contract files exist** *(★ Am-2: R6 said 16; the count did not reproduce — 15 top-level plus 5 seam contracts)* | `standard` · `pattern` · **`operating profile`** · `conformance` · `controlled vocabulary` · `view` beyond the System Map |

**Verified: none of `profile`, `pattern`, `standard`, `conformance`, `vocabulary` or `view` appears as a role in the Artifact Index.**

**Accurate diagnosis (★ Am-2, corrected):** the governance-category axis and the architecture-role axis are **linked one-way — the role index defers to the governance taxonomy — but are not modelled as independent passport axes**, and the role index (**13 rows, not 12**) does not carry the roles this arc needs. **An arc founded on "OMNI mis-states its own state" mis-stated the estate in its own charter; that is recorded rather than quietly fixed.** **This is not "OMNI never understood contracts." It is a schema mismatch plus a stale role set.**

**The repair is multi-axis, not one flat enum.** A passport should carry, independently: `governance_category` · `architecture_role` · `authority_maturity` · `scope` · `plane_or_view` · `build_evidence_maturity`. Reactor's honest current position is expressible only this way — `doctrine` / `cross_cutting_architecture_standard` / `candidate` / `cross_cutting` / `[seam, capability, projection]` / `fixture_tested_partial` — and **no single enum can say that**, which is precisely why it has been unclassifiable and therefore unfindable.

---

## §5 — Reactor: the straight answer the operator has asked for three times

> **Reactor is a candidate cross-cutting ARCHITECTURE STANDARD governing consequential transitions and cross-authority continuity. It is not dead. It is not the whole of OMNI Architecture. It is not "unsettled."**

**Why this is a classification and not a demotion.** Its eight invariants — admissibility before consequence · domain-owned commitment · accepted custody · no silent orphaning · selective reopening · compensation/remedy/reconsideration/outcome separation · honest projection · bounded proof — are profound rules about **intent becoming real-world effect**. They do not define the domain/truth map, evidence-to-adoption, projection construction, connector architecture, profile inheritance, or the artifact taxonomy. **Classifying it as a standard is what makes it usable rather than mystical, and it is what gives it an address.**

**R1's objection is withdrawn, and here is the honest reason.** R1 refused Knox's classification because the terminus describes *chartered scope*, not *concept scope*, and Reactor's own framing was "candidate constitutional center." **That refusal was right about the logic and wrong about the consequence.** Leaving the role floating "until reconciliation" is what kept it unfindable for three weeks and three arcs. **The correct move is to classify at evidenced scope now, and let the execution plan's foundation-reconciliation gate broaden it by explicit decision with evidence.** A revisable classification beats an honest vacancy.

**What the execution plan's foundation-reconciliation gate tests — and it is one table, not a gate.** *(Pointer only: the execution plan owns the gate sequence — §9. A hard-coded gate number here would be a second sequence copy.)* Lay the eight invariants beside Care's constitutional laws, GCE's crossing spine and the 05-17 three-layer pattern. **The questions are narrow:** does any invariant duplicate a law owned elsewhere · does any need narrowing · does any belong in a different standard · are there consequential-transition clauses scattered outside Reactor that should merge into it. **Not "what is Reactor." That is answered above.**

---

## §6 — Four things neither reviewer's model contains, and all four are the operator's

Knox proposes ten artifact roles; R1 proposed six parts. **Both omit the same four, and every one of them is load-bearing for a 1000-instance SaaS.** *(Do not pre-lock any count — **the execution plan's foundation-reconciliation gate** decides the final set.)*

### §6.1 There are TWO profile axes, and conflating them would be fatal
*"This isn't ONE version of Hims, this is 1000 versions of Hims."*

| Axis | Answers | Examples |
|---|---|---|
| **Operating-area profile** | how does OMNI do *this kind of work*? | Insurance · Pharmacy · Labs · Gmail · payroll · banking |
| **Deployment profile** | how does *this instance* of OMNI run? | a single clinic · a federation · Henry Ford's enterprise · the composed-enterprise posture where Epic and the ERP keep native ledgers |

**Both are specializations of the same shared architecture, and they are orthogonal.** Henry Ford's instance runs the Insurance operating profile *and* an enterprise deployment profile. **A one-axis profile system collapses them, and then every customer deviation looks like an architecture change.** The estate already has the deployment vocabulary and no home for it: the pre-spine map §5 names **OMNI-primary · OMNI-composed enterprise · OMNI federated network node**, and Federation owns the 6-tier tenancy, `legal_entity` and brand structure.

### §6.2 Variation points — the actual answer to "Henry Ford says conform it to us"
This is the SEI product-line mechanism and it is the difference between scaling to 1000 instances and dying at 20: **the architecture declares, in advance, where deviation is permitted and how.** Anything inside a declared variation point is **configuration**. Anything outside it is a **change to the architecture**, which goes through the architecture's own change process — not a customer's ticket.

**Without declared variation points, every enterprise customer negotiates against the whole architecture, and the architecture loses.** SEI names the failure modes exactly: duplicate mechanisms, incompatible variation choices, unnecessary variation, and missed required variations. **All four are already observable in this estate.**

### §6.3 Views must include instance and fleet, not only builder
*"How does an agent look at 1 federation, at all the federations, at OMNI at 100k feet?"* That is a **viewpoint** question: different stakeholders, different concerns, different views over one architecture. The two existing maps are builder-facing views of P1 and P4/P5. **An instance view and a fleet view do not exist**, and the reader is not only a builder — it is an agent operating one deployment, and an agent operating the whole estate.

### §6.4 Architecture change control — currently nowhere
*"How do changes get made to the architecture, but really to the repo as a whole?"* The estate has fragments — Build Entry, AWP §5, the supersession ledger, the catalog — and **nothing states how a proposed architecture change is raised, evaluated, accepted, rejected or superseded**, nor who may. **A maintained architecture without a change process becomes the 05-17 pattern: universally routed and quietly stale.** This is a required Gate-1 deliverable, not a Gate-4 nicety.

---

## §7 — Standards are not patterns
R1 blurred these; Knox is right to split them, and the distinction is operational.

**Standard** — normative cross-cutting requirement, `MUST`/`MUST NOT`, conformance-testable. *Reactor · GCE · source-authority · projection-authority.*
**Pattern** — a reusable solution to a recurring problem, with context, forces and tradeoffs. *Saga/compensation · anti-corruption layer · evidence-to-adoption composition.*
**A standard tells you what you may not violate. A pattern tells you a good way to solve something.** **`/patterns` must not become the junk drawer for every recurring phrase** — that is the seven-labels failure with folders.

---

## §8 — Physical shape (direction, not locked paths)
Tool-independent, root-discoverable, **not `.cursor/plans/`** — that stays the working estate (charters, packets, gate results, preservation, evidence). `docs/architecture/` keeps ADRs, narratives and rationale — the informative half.

Direction: an `/architecture` root holding **standards · views · contracts (domain/seam/capability/projection/surface) · operating profiles (area + deployment) · patterns · decisions · vocabulary · conformance**, with the existing System and Surface Maps **migrated in or superseded there as one governed transaction — never duplicated.**

**Two hard constraints:** **no `constitution.md`** (§3) · **no hand-maintained `manifest.yaml`** — the catalog and read graph already are the manifest, and a second hand-maintained copy recreates the duplicate-state failure this estate has now suffered four times. **A machine-readable manifest is acceptable only if generated from canonical metadata or if it becomes the single source.**

**God-layer test, wired from the first commit:** the package **owns no truth and holds no commit authority.** C4.6 `C10` is the existing runnable guard and applies to this package itself.

---

## §9 — Gates

**The gate sequence lives in the execution plan and NOWHERE ELSE.** A second copy here drifted within one revision — it still described an external-first order and routing-as-the-acceptance-test after both had been superseded. **Deleted at R5** rather than refreshed, per `D0CKPT-GRD-004`: *refreshing a stale duplicate preserves the mechanism.*

→ **`v4_FAI_omni_architecture_arc_execution_plan_2026-08-09.md`**


## §10 — Bounded source set — controlling termini, not a sweep
**`doctrine/00_architecture_artifact_index.md` (added at R2 — the ratified baseline)** · `doctrine/00_document_governance_and_taxonomy_2026-05-19.md` · `coherent_omni_architecture_pattern_2026-05-17.md` (**Tier-0 #14, mandatory, unread at boot by this agent**) · `OMNI_System_Map_vNext.md` · `OMNI_Surface_Map_vNext.md` · `doctrine/omni_enterprise_posture_2026-06-03.md` (**GCE — the only ratified member**) · Polaris · Care capture §1b/§5b/§5b.1/§18/§19 · Platform capture · Accountability capture · `EVRUN-000007 _05 §I.13–§I.15` + `_06` · `EVRUN-000008 _03` + `_04` · `v4_C4_6_…` §0.5 + §12 · C3.8 G4 · **the current domain-contract set** *(resolved from the governing catalog — **not a maintained count here**)* · `federation_contract.md` (tenancy for §6.1) · **pre-spine map §5 (deployment postures)** · Build OS `09`/`10`/`11` (**self-declared stale**) · the frozen Insurance Gate-2 result.

**Out of scope:** whole-estate sweep · 300-transcript rescan (concept registries first) · reopening Reactor's invariants for their own sake · any implementation lane.

---

## §11 — Explicit non-actions
No architecture before G0 acceptance · no shared control-plane surface written · **no `constitution.md`** · **no duplicate `manifest.yaml`** · no new taxonomy category minted before G1 · no new domain, plane, object or god-layer · no `reactor-service` · no promotion by passing reference · **no touching PR #14** · no `C3.9` · no `E2` · no implementation.

---

## §12 — Failure modes, each with its receipt
Stale-state read instead of terminus (`EVRUN-000008`) · **mandatory Tier-0 route unread at boot (05-17)** · durable home carrying stale content (`WI16`) · arc-local routing (`9p` / `#9g`) · concept frozen without an address (Reactor) · re-derivation mistaken for discovery (O-2/O-3) · comparator consumed as content not method (FHIR) · **two governing taxonomies not modelled as independent axes (§4)** *(★ Am-2: R6 said "mutually invisible" — **FALSE and SUPERSEDED**; they are linked one-way)* · **R1 asserting absence without checking the sibling taxonomy** · patch accretion · **package-boundary violation (R0)**.

**Every gate re-proves a boot receipt for Tier-0 #14 and the Artifact Index.**

---

## §13 — The one operator authorization requested
Opening this arc changes the program's next action — checkpoint-level — and the integrator seat is vacant:

> **REQUESTED: appointment of the `integration` holder** for the bounded foundational-architecture arc-opening transaction — checkpoint repoint, catalog rows, read-graph route. **This charter names the ROLE only. The actual holder is recorded in the operational G0 holder receipt when the operator executes the appointment** (plan `### G0`) — a persistent architecture document must never bind a named person or model. **This does not authorize substantive Gate-1 authorship until the Gate-0 charter is accepted.**

---

## §14 — STOP RECEIPT *(HISTORICAL AUTHORING RECEIPT — not current state)*

> **This receipt records the state at which this charter was authored.** **Current state lives in §1 and the handoff, and nowhere else.** Rows below that named a packet inventory or a next sequence have been converted to pointers rather than re-copied — **a maintained duplicate is a future staleness site, which is how `C-11` and `C-12` each reopened twice.**

| Field | Value |
|---|---|
| Work package | `OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL` — Gate-0 charter **R9** + execution plan **R8** |
| Branch | `cursor/fai-foundational-architecture-30f4`, from `main @ 9a6e7de` |
| Files | **see §1 and the handoff for the current packet — this row is NOT a maintained inventory.** *(As authored: this charter · 2 verbatim preservations · 1 handoff. Both preservations are now `verbatim_preserved`, operator-populated 2026-08-10.)* |
| Shared control-plane surfaces | **0 touched** |
| Minted | **nothing** — `OMNI Architecture` is a description, not a coinage |
| Corrected at R2 | taxonomy diagnosis (two taxonomies, not one absence) · Artifact Index added as baseline · Reactor classified · standards split from patterns · 42010 and FHIR demoted to lens and mechanism · part-count un-locked · **four additions at §6, all operator-raised** · sequencing answered at §2 |
| Checkpoint tier | **3** |
| Blocking | integrator **VACANT** |
| Next | **see §1 / the handoff for current next state.** *(As authored: PRE-0 → one reconciliation → at most one bounded amendment → then G0 acceptance. **All three are now COMPLETE.**)* Nothing auto-starts |

**STOP: `gate_0_charter_R9_and_execution_plan_R8_pending_acceptance`**
