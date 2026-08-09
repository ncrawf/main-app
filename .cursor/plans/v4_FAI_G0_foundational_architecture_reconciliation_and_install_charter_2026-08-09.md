# v4 — FAI — Foundational Architecture Reconciliation & Installation — GATE-0 CHARTER

Document type: `work_package_brief` / `gate_charter` (arc-opening packet; **not** the architecture, **not** a contract, **not** spine prose)
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). Binds nothing. Promotes nothing. Mints nothing. **Charters an arc and proposes its gates.**
Status: **`gate_0_charter_authored · pending_nick_knox_acceptance · nothing_started`**. Current state lives in the single table at §1 and nowhere else (`D0CKPT-GRD-004`, `D0CKPT-GRD-003`).
Domain(s): `architecture_governance` · `cross_cutting` — **and deliberately no domain owns this arc's output.**
Lifecycle role: opens `OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL` — the arc that determines whether OMNI's cross-loop architecture system is a real thing, what it is, where it lives, and installs it.
Source-of-truth relationship: consumes the estate read-only. Where this charter and a source carrier differ, **the carrier controls**.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` **PROPOSED** — catalog row + read-graph route drafted at §11, **NOT landed** (`PRESPINE-PHASEA-INTEGRATOR` is VACANT).
Review gate: `user_knox_required`

**Lane key:** `OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL` — **deliberately boring and temporary. It is not the name of the thing.** Naming is a gated deliverable (§7), not a branding exercise and not an output tacked on at the end.

---

## §1 — ONE CURRENT-STATE SURFACE

| Fact | Value |
|---|---|
| Arc state | **`chartered · not_started`** — Gate 0 has not run |
| What is authorized by this file | **nothing.** This is a proposal for Nick + Knox acceptance |
| Insurance | **FROZEN.** PR #14 unmerged, `C3.9` not started, `E2` not started, Gate-2 not accepted |
| Blocking obligation | **`PRESPINE-PHASEA-INTEGRATOR` is VACANT.** Opening this arc changes the program's next action, which is checkpoint-level. **No shared control-plane surface may be landed until a holder exists** |
| Writable objects in Gate 0 | this charter · the two verbatim relay preservations · one handoff. **Nothing else** |

---

## §2 — The question this arc answers, stated so it can be answered NO

> **Is there a single, maintained, build-facing system that tells a new operating area — Insurance, Pharmacy, Labs, Gmail, payroll, a bank rail — exactly which OMNI-wide laws it must obey, which reusable patterns it is instantiating, what it may specialize, what it may never inherit, who keeps truth and commit authority, and what tests prove it complied?**

**Today the answer is no**, and the evidence is that Care, Pharmacy, GCE, Reactor and Insurance each rediscovered parts of one another. **A NO verdict at Gate 1 is a permitted, real outcome** — it would mean the recurrence is coincidental, the loops are genuinely heterogeneous, and the correct answer is per-domain contracts plus the existing control plane. **The arc must be able to return that**, or it is theatre.

---

## §3 — Where this charter DISAGREES with the Knox decision

Nick's instruction was to decide, not to defer. Three disagreements, each load-bearing.

### §3.1 Reject the big-bang gate shape. Drive one law end-to-end FIRST.
Knox proposes: read all controlling termini → synthesize the whole architecture → pressure it against six profiles → install. **That is the fifth full re-derivation, and it is the specific failure Nick named in advance.** It also front-loads a 1M-token read before anything is testable.

**Counter-proposal — the outpost, which is Nick's own instinct made concrete.** Before reconciling the estate, drive **ONE law** through **the entire machinery** at full fidelity and see whether the machinery is real:

> **Probe law: `payment state ≠ care state` — a funder may constrain feasibility and may never author clinical indication.**

It is the right probe for five reasons, each verifiable:
- it is **contracted** on one side (`D6 §8.1`), so it has a ratified anchor rather than a candidate one;
- it already appears in at least six carriers at five maturities — D6 §8.1 · Care L171/L191/L192 · C4.6 §4 · Gate-1b §9 Law 1 · C3.5-F2 primitive `P17` with nine SUP rows · Reactor's `admissibility-before-consequence`;
- it has a **known asymmetry** — the Care-side symmetric statement is owed (`A-Q6`) — so the machinery must express *"inherited on one side, owed on the other,"* which is the hard case, not the easy one;
- it already has **runnable conformance seeds**: C4.6 `C6` (margin counterfactual) and `C12`;
- it discriminates cleanly across **four unlike profiles**: Insurance (payer determination), Pharmacy (formulary), Gmail/Slack (a message is not a commitment), payroll/bank (money movement is not care state).

**If one law cannot be carried from constitutional statement → pattern → four profile declarations → conformance test → build-entry obligation → read route, the system is not real and we learned it in one slice.** If it can, the remainder is population, and population is cheap and parallelizable.

### §3.2 Naming is a GATE, not an output
Knox defers naming to the end. **That is how things stay unreferenced.** The file path *is* the name; you cannot install to an unnamed path. **Naming is a Gate-2 exit condition** with an explicit constraint: it joins the family Nick already built — **Polaris · Reactor · Reservoirs** — and it is chosen by Nick. **No agent names it. "Kernel", "archetype registry" and "homology obligation" are all rejected already.**

### §3.3 Concession — my own "index transaction" proposal was wrong
I proposed a small pointer-only transaction. **Nick's objection is correct and I withdraw it.** An index of ten artifacts at ten maturities that contradict one another makes the mess *discoverable* without making it *coherent*, and his line is the exact refutation: **the index with the rules IS the thing we are trying to build.** I over-corrected against re-derivation and proposed bookkeeping instead of architecture.

---

## §4 — Where this charter agrees with Knox against the Reactor closeout, and states the principle

`EVRUN-000008 §10` forbids reopening "to understand Reactor better" and directs the next proof into the world. **That is legitimate for its own scope and illegitimate as a bar on installation.**

> **Candidate principle (PROPOSED, not minted — the integrator is vacant): installation maturity and evidence maturity are ORTHOGONAL axes.**
> An architecture module may be *installed* as `candidate · source-reconciled · build-facing · not production-proven · not externally accepted`. The estate does this constantly — every `draft_for_ratification` contract is installed and unproven.
> **Reactor was held to a production-evidence bar for the right to have an address.** That is what left a closed, adversarially-tested, 31/31-green result invisible to the three arcs that then re-derived it. **Requiring world-proof before an address is a category error, and it is the single most expensive mistake visible in this estate.**

**This is the arc's founding diagnosis** and it must survive Gate 1 or be explicitly refuted there.

---

## §5 — Where it lives: the estate already answers this, twice

Nick's question — *"where is the folder"* — has a precedent-based answer rather than a guess.

The Surface Map header declares the plane taxonomy: **P0 Doctrine/Thesis · P1 Truth · P2 Seam · P3 Capability · P4 Projection · P5 Surface · P6 Build · Evidence.** And the estate has already created **canonical hub/index artifacts per plane group, at `.cursor/plans/` root**:

| Existing hub | Plane group | Path |
|---|---|---|
| `OMNI_System_Map_vNext.md` | **P1 Truth** (+ domain contracts) | `.cursor/plans/` root |
| `OMNI_Surface_Map_vNext.md` | **P4 Projection + P5 Surface** | `.cursor/plans/` root |
| **missing** | **the cross-plane inheritance system — what every loop must obey and how it declares compliance** | **— this arc's output —** |

**Candidate home, to be confirmed or refuted at Gate 3: a peer of the two existing maps, at `.cursor/plans/` root, following their naming convention.** Not `doctrine/` (ledgers and process). Not `contracts/` (per-domain truth). **Its correctness test is simple: a builder opening Insurance, Pharmacy or Gmail must reach it without knowing it exists.**

**Nick's day-1 concern is legitimate and bounded by this:** `.cursor/plans/` was an accident of the first agent, but the *convention inside it* is now real and used twice. **The arc must confirm the convention or move all three together — never move one and orphan the pattern.**

---

## §6 — What the controlling document must BE (the normative/informative split)

Nick: *"the ACTUAL document must just BE THE ACTUAL DOCUMENT... not littered with 1000 lines of prose."* **This is a solved problem outside OMNI and the mechanism has a name.**

| Discipline | Normative artifact | Informative artifact |
|---|---|---|
| IETF | RFC normative text with **MUST / SHOULD / MAY** (RFC 2119) | discussion, rationale, appendices |
| FHIR | **StructureDefinition** — machine-readable, computable conformance | Implementation Guide narrative |
| AWS | Well-Architected framework questions + lenses | whitepapers |
| SEI product lines | core asset base + explicit **variation points** | rationale and adoption guidance |

**Required output shape, therefore:**
1. **One normative artifact** — terse, numbered, testable obligations. No history. No rationale. No arc lineage. **A builder reads only this.**
2. **A machine-checkable half wherever possible.** The estate already has two working seeds: `scripts/check-checkpoint-pointer.mjs` and `scripts/test-consequential-transition-conformance.ts` (31/31 green). **A law that cannot be expressed as a check is a law that will be re-derived.**
3. **Separate informative carriers** for rationale, lineage and supersession — which is where 05-17, Reactor, Care, C4.6, C3.8 and Insurance land as *sources*, not as reading obligations.

**The controlling document must never require a builder to know that 05-17, Reactor or Gate-1b exist.** That is the acceptance test for §6.

---

## §7 — Gates

**Gate 0 — bounded reconnaissance + the outpost design.** *(this charter + its acceptance)*
Deliverable: the accepted source set (§8), the architecture questions (§9), the probe-law design (§3.1), the gate sequence, stop conditions, writable objects, explicit non-actions. **No synthesis. No architecture. No shared surfaces.**

**Gate 1 — the outpost.** Drive the probe law end-to-end through: constitutional statement → reusable pattern → **four** profile declarations (Insurance · Pharmacy · one evidence/fulfillment case · one business connector) → conformance test → build-entry obligation → read route. **Exit condition is a verdict on the machinery, not on the estate:** `SYSTEM_IS_REAL` · `SYSTEM_IS_REAL_WITH_NAMED_CHANGES` · `NOT_A_SYSTEM — use per-domain contracts`. **A NO here closes the arc and returns to Insurance.**

**Gate 2 — reconciliation, only if Gate 1 says yes.** Now read the controlling termini (§8) and determine: what is universal · what is a reusable pattern · what is domain-specific · what is duplicated, narrowed, superseded or simply wrong · and where Polaris, Reactor, Reservoirs, GCE, Care, Platform, Accountability, contracts, projections and Build OS sit relative to one another. **Exit conditions include the NAME and the HOME.**

**Gate 3 — installation.** The normative artifact + its machine-checkable half + profile declarations for at least Pharmacy and Insurance + Build-Entry enforcement + read-graph routing + explicit supersession-or-narrowing of the stale 05-17 pattern + correction of the stale `WI16` state + spine/thesis/contract pointers. **The arc does not close until a builder can be routed to it and blocked by it.** Prior arcs skipped exactly this.

**Gate 4 — Insurance returns** as the first full profile proof after Pharmacy, then resumes its own acceptance sequence (`C3.9` → traces → `E2`).

---

## §8 — Bounded source set — controlling termini only, NOT a corpus sweep

**Full reads (Gate 2, not Gate 1):** `coherent_omni_architecture_pattern_2026-05-17.md` (**Tier-0 #14, mandatory, and demonstrably unread by this agent at boot — §10**) · `OMNI_System_Map_vNext.md` · `OMNI_Surface_Map_vNext.md` · `doctrine/omni_enterprise_posture_2026-06-03.md` (**GCE — the only ratified member of this family**) · `v4_C4_care_operating_model_capture.md` §1b/§5b/§5b.1/§18/§19 · the Platform capture · the Accountability/GRR capture · `EVRUN-2026-000007` `_05 §I.13–§I.15` + `_06` · `EVRUN-2026-000008` `_03` + `_04` · `v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md` §0.5 + §12 · `C3.8 G4` disposition ledger · `09`/`10`/`11` Build OS + Build Entry (**self-declared stale against Foundation vNext**) · `v4_INS_G1B_…` + the frozen Gate-2 result.

**Consulted:** control plane · catalog · read graph · `03`/`05`/`06`/`08` · FWREG · comparator registry.

**Explicitly NOT in scope:** a whole-estate sweep · a 300-transcript rescan (**cross-source concept registries first; reopen a raw only where a load-bearing claim depends on it**) · reopening Reactor's eight invariants · any implementation lane.

---

## §9 — The architecture questions Gate 2 must answer
1. What is genuinely **universal** across every loop, and what only looked universal because two loops shared a vocabulary?
2. What is a **reusable pattern** versus a **domain contract** versus a **profile** versus a **projection** versus a **capability** versus a **seam** versus merely **language**?
3. Where do **Polaris · Reactor · Reservoirs · GCE · Care · Platform · Accountability · contracts · Build OS** sit relative to one another? *(Reactor is a candidate consequential-transition module. It is not established as the whole system, and this arc must not let it become one.)*
4. Which existing claims are **duplicated, narrowed, superseded, or wrong**?
5. Is the 05-17 three-layer pattern (planned commitment · actual delivery · linked evidence) still universal, a special case, or superseded?
6. Does a profile **instantiate several patterns at once** — and if so, what breaks in a one-column-per-loop model?
7. What must a profile declare, exactly, for Build Entry to be able to **block** it?
8. **Does this system need a name at all, or is it a section of the spine?**

---

## §10 — Failure modes this arc must not repeat, with the receipt for each
| Failure | Receipt from this estate |
|---|---|
| Stale-state read instead of terminus | I asserted `EVRUN-000008` was blocked; it closed 2026-07-18. Its own header warned: *"read THIS terminus first, not infer closure from an index row."* |
| Mandatory route unread at boot | **Tier-0 #14 (05-17) is on the Universal Path and says *"future pillars start from this shape, not from scratch."* This agent did not load it.** Not a routing gap — non-compliance |
| Durable home carrying stale content | `WI16` says *"this is the durable home so they are not trapped in `_06`"* and is three weeks stale about its own successor run |
| Arc-local routing | Route `9p` routes Insurance only; route `#9g` (Reactor) is `consult_if_routed` and nothing routes to it |
| Concept frozen without an address | Reactor: closed, adversarially tested, 31/31 green — and invisible to three later arcs |
| Re-derivation mistaken for discovery | O-2/O-3 in the Insurance result; Knox's SEI/FHIR/IHE proposal ≈ Reactor ratification gate (2) |
| Comparator consumed as content, not method | `comparator_analogy_registry.md` carries FHIR as a payload standard and never as a profiling method |
| Patch accretion | R0→R3 + a retraction left revision history the reviewer had to untangle |

**Gate-0 acceptance requires a boot receipt proving Tier-0 #14 was loaded. Every subsequent gate re-proves it.**

---

## §11 — Proposed routing (NOT landed — integrator VACANT)

| Target | Proposed | Part |
|---|---|---|
| `01` catalog | one row for this charter, one each for the two verbatim preservations and the handoff | A |
| `04` read graph | **new route** for the arc; **and the load-bearing fix — a Tier-0 or near-Tier-0 obligation that every loop/profile arc routes here**, which is the defect that caused this | C |
| `08` open review | one parent row for the arc's open questions | B |
| checkpoint | **repoint required** — this arc changes the program's next action. **Checkpoint-level, integrator-owned, and the single blocking obligation** | B |
| `06` guardrails | **candidate only** — installation maturity ≠ evidence maturity (§4). **Requires dedup against `GRD-036`/`GRD-043` before minting** | — |
| `WI16` | correct the stale `EVRUN-000008` state | B |

---

## §12 — Explicit non-actions
No architecture authored in Gate 0 · no shared control-plane surface written · no name chosen · no new domain, plane, object, registry or god-layer · no `reactor-service` · no Reactor reopening for its own sake · no promotion of Care, C4.6, Reactor or Insurance material by passing reference · **no touching PR #14** · no `C3.9` · no `E2` · no implementation.

---

## §13 — STOP RECEIPT

| Field | Value |
|---|---|
| Work package | `OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL` — Gate-0 charter authored |
| Files added | this charter · 2 verbatim relay preservations (**empty, operator-populated**) · 1 handoff |
| Shared control-plane surfaces | **0 touched** |
| Contracts / schemas / migrations / code | **0 touched** |
| Minted | **nothing** — no name, no law, no pattern, no object |
| Insurance | frozen; PR #14 untouched this pass |
| Checkpoint tier | **3** — major-arc opening; narrative owed at arc close, not at charter |
| Blocking obligation | **integrator VACANT**; checkpoint repoint cannot land |
| Next | **Nick + Knox accept, amend, or reject this charter.** Gate 0 is not complete until accepted; Gate 1 does not auto-start |

**STOP: `gate_0_charter_authored_pending_operator_and_knox_acceptance`**
