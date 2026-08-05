# OMNI Work Method Repertoire — investigation, adversarial, and hardening method catalog

Document type: `reference_registry`
Authority: `evidence_with_pointers` — a **catalog of available methods**. It originates NO doctrine and asserts NO architectural truth.
Status: `active_candidate` (v0, 2026-08-05) — append-only with explicit demotion/deprecation **and retained reasons**
Domain(s): `architecture_governance`, `build_operations`
Lifecycle role: `consult-routed method catalog — an option space an agent selects from when facing an uncertainty. NOT an arc plan, NOT a gate sequence, NOT universal boot, NOT Build OS completion.`
Source-of-truth relationship: `describes HOW to investigate, never WHAT is true. Execution behavior stays in agent_work_protocol.md (esp. §2.1). Method SELECTION for a given arc stays in that arc's own Gate-0 packet. Architectural truth stays in the thesis + contracts. Comparator provenance stays in comparator_analogy_registry.md. Future tooling target stays in 10_omni_build_os_rollout_sequence.md Step 5 + D0THES-REV-158.`
Supersedes: `none`
Superseded by: `none`
Manifest action: `add_tier2 · consult_if_routed` (routed from read-graph Major-Arc Intake and Estate-Reconnaissance Routing)
Review gate: `user_knox_required`
Decision: `D0CKPT-DEC-006`

---

## §0 — Operating contract (read before using this file)

**This lists options, not limits.** It is not a record of OMNI's achievements and makes no claim that a listed method was well executed here. Better methods are expected — add them, and delete what proves useless.

- **Palette, not pipeline.** There is no required order, no required method, and **no minimum count**. `METHOD-000` (no specialized method) is a fully valid selection.
- **Selecting more methods does not make work more rigorous.** It usually makes it slower and no more decisive. An agent earns nothing by picking many.
- **Methods come from anywhere** — external engineering practice, science, adversarial testing tradition, comparator organizations, or prior OMNI work. **A method that OMNI has never used is still a legitimate entry**, clearly labelled as such.
- **Provenance is a field, not the premise.** Every entry declares honestly whether OMNI has used it, and whether the outcome was ever actually evaluated. Most OMNI-used entries answer "not evaluated."
- **How-to-investigate only.** If an entry starts asserting what is true about OMNI's architecture, it is misfiled — that content belongs in the thesis/contracts. Entries use operational verbs ("run an X audit"), never claims ("X owns Y").
- **This does not bind execution.** `agent_work_protocol.md` §2.1 governs branches, lanes, writers, integrators and bases. This file governs nothing; it informs choice.
- **It may shrink.** Remove entries and fields that demonstrably do not change decisions (standing simplification obligation, `10_omni_build_os_rollout_sequence.md` Step 5).

**Provenance vocabulary (used in §5):**

| Label | Meaning |
|---|---|
| `omni_used` | Actually run in OMNI at least once; the arc is named |
| `omni_partial` | Attempted or partially run; incomplete or superseded |
| `external_known` | Real, established technique elsewhere; **never run in OMNI** |
| `candidate` | Plausible and namable; not established here or clearly sourced |

**Evaluated?** `yes` = we recorded whether it changed a decision. `no` = we did not measure. **`no` is the honest default for most OMNI history.**

---

## §1 — Why this file exists (honest genesis)

OMNI has run many arcs — hospital/EHR gravity, oncology and trial access, enterprise-AI-OS convergence, Care inheritance and correction-continuity, Accountability/GRR, Platform, Pharmacy, Knowledge Reservoirs, Task-D, demand/engagement, evidence waves, runtime, and Build-OS/relay governance.

**Method selection in those arcs was mostly left to whichever agent showed up.** A fresh agent was handed a topic and asked to devise an approach. Sometimes it produced something strong; sometimes it produced duplicated or low-value work; **in most cases nobody measured which**. Where a good structure did emerge, it stayed buried inside that arc's plan, terminus, or a relay message, and the next agent started over.

This file does **not** claim those improvisations were good. It claims something narrower and checkable: **an agent choosing a method should be able to see the option space first.** That is the entire purpose. `v4_C3_5A_existing_pressure_test_inventory.md` shows OMNI already did this once, for one arc, and then lost the habit.

Two consequences worth stating plainly:
- Where the record supports a judgement, this file says so.
- Where it does not, this file says "not evaluated" rather than inventing effectiveness.

---

## §2 — Why OMNI is deliberately plural (four poles + OMNI's own envelope)

These are **not four vendors competing to become the OMNI framework.** They are four useful poles in a design space, and OMNI intentionally borrows **varying degrees of each** depending on the structure and risk of the work. Full comparator provenance: `comparator_analogy_registry.md` §B. Mechanism-first tooling target: `10_omni_build_os_rollout_sequence.md` Step 5.

| Pole | Strongest lesson | Best fit |
|---|---|---|
| **Karpathy / autoresearch** | Constrain the action surface; define a decisive evaluator; commit, evaluate, keep-or-reset | Narrow, reversible work with an objective metric |
| **Anthropic multi-agent** | Explicit orchestrator/worker decomposition, isolated workers, durable progress artifacts, evals + observability as the judge; warns against premature elaborate harnesses | Broad work that decomposes into substantially **independent** investigations |
| **Palantir operating pattern** | Protected shared state, branches/proposals, policy-enforced permissions, required checks, audit, evaluation runs | High-consequence work touching shared governed resources |
| **Amazon / Builders' Library posture** | There is no single correct method; practices are contextual, empirical and living | Long-lived organizations spanning many problem classes |

**OMNI's own constraint envelope** (non-negotiable, and it overrides any borrowed posture): source and authority discipline · **candidate ≠ commit** · domain-owned truth · multiple principals and authority planes · evidence and provenance · exact repository state · clinical and business consequence · explicit acceptance and integration gates.

**Selection heuristic:** independent breadth → more Anthropic. Narrow surface with a mechanical evaluator → more Karpathy. High consequence on shared state → more Palantir. Unsettled context over a long horizon → more Amazon. High authority/evidence sensitivity → **OMNI's own controls dominate regardless of comparator.**

**No comparator is the template, the destination, or a source of OMNI authority.**

---

## §3 — Question → options index (primary retrieval axis)

You arrive holding an **uncertainty**, not a method name. Start here. Options are candidates to consider, not a required set.

| The uncertainty you actually have | Options worth considering |
|---|---|
| "What already exists, and what controls it?" | `M-101` source-base declaration · `M-102` controlling-terminus recovery · `M-103` authority/supersession/maturity matrix · `M-105` branch-only & quarantined-state recovery |
| "Is my inventory complete enough to reason on?" | `M-104` zero-unknown coverage manifest · `M-108` coverage matrix + missing-evidence scan |
| "Is this concept genuinely new, or do we already have it?" | `M-106` novelty / `EXISTS-AS` dedup sweep · `M-107` forensic inheritance audit with evidence cutoff |
| "Does this survive a serious enterprise incumbent?" | `M-201` incumbent steelman · `M-202` incumbent composite / best-of-breed test · `M-203` build–buy–wrap–partner–host assessment · `M-204` seam-tax accounting |
| "What is actually true in the outside world right now?" | `M-205` field reality map · `M-206` official-source current-reality verification · `M-207` mechanism-first comparator translation |
| "Who holds which authority in this setting?" | `M-208` actor/role/principal authority map · `M-209` ownership & responsibility ladder |
| "Is this one thing or several? Where are the seams?" | `M-301` object/lifecycle/projection/capability/seam decomposition · `M-303` ownership/authority/custody/visibility/execution decomposition audit · `M-305` domain & seam collision map |
| "Is this accepted, or just written down?" | `M-302` candidate-vs-commit audit · `M-304` decision-state reconciliation · `M-306` maturity-layer separation |
| "How does this behave in a real operating situation?" | `M-401` scenario library · `M-402` representative fixture selection · `M-403` deep trace matrix · `M-405` failure/retry/degraded-mode replay |
| "Does it hold under time, override, or federation?" | `M-406` temporal / as-of reconstruction · `M-404` operational-override trace · `M-407` cross-operator / federation trace |
| "Do I trust my own answer?" | `M-501` fresh-context re-derivation · `M-502` blind-then-unblinded independent analysis · `M-503` independent builder/adversary/judge separation |
| "Would our rules actually catch a subtle violation?" | `M-504` doctrine-breaker enumeration · `M-505` mutation suite · `M-506` counterexample search · `M-508` negative-control / honest-null test |
| "Is our decomposition the best one available?" | `M-507` competing decomposition comparison · `M-509` contradiction & invariant sweep |
| "Does it survive a real operator/market shape?" | `M-601` vertical-wedge falsifier · `M-602` mixed-operator topology test · `M-603` mixed-financing test · `M-605` fleet / multi-instance test |
| "Could an incumbent just absorb this, or trap us?" | `M-604` institutional-gravity test · `M-606` incumbent absorption test · `M-607` portability / exit / switching test |
| "Is this authorable, or are we pretending?" | `M-704` multi-angle authorability test · `M-701` Gate-0 charter · `M-702` desk check |
| "What may the next stage rely on?" | `M-703` input-state receipt · `M-705` disposition ledger · `M-706` explicit verdict vocabulary |
| "How do I land this without corrupting shared state?" | `M-707` bounded fidelity patch · `M-708` byte review · `M-709` state-only landing normalization · `M-710` checkpoint / boot-path synchronization |
| "Is this outside material trustworthy enough to use?" | `M-801` source packet · `M-802` concept registry / routing map · `M-803` anchor ledger · `M-804` external-evidence promotion gate · `M-805` official-source freshness classification |
| "Do I need any special method at all?" | **`METHOD-000` — direct reconciliation.** Often the right answer. |

---

## §4 — Selection dimensions (judgement aids, not a scoring formula)

- **Task coupling** — independent breadth ↔ tightly interdependent. *(Tightly coupled work is a poor fit for parallel workers.)*
- **Evaluator quality** — mechanical/objective ↔ expert judgement. *(A weak evaluator makes elaborate testing theatre.)*
- **Consequence / reversibility** — cheap to undo ↔ hard to unwind.
- **Independence requirement** — same-context ↔ fresh-context ↔ blind/adversarial.
- **Estate uncertainty** — controlling carrier known ↔ fragmented or stale.
- **External-reality dependence** — internal reconciliation only ↔ needs current official sources.
- **Cost** — operator attention first, then model time, tokens, and branch complexity. **Operator attention is the scarcest input.**

---

## §5 — Method index

Entries are as long as the evidence supports — most are two to four lines. **No entry is required to be complete.** `Evaluated?` is honest, not aspirational.

### A — Estate & lineage reconnaissance

| ID | Method | Question it answers | Use / avoid | Provenance | Evaluated? |
|---|---|---|---|---|---|
| `M-101` | Canonical source-base declaration | What is the complete accepted source set for this work? | Use before synthesis on a broad topic; avoid for a narrow single-file fix | `omni_used` — `v4_C2_source_base_declaration.md` | no |
| `M-102` | Controlling-terminus recovery | Which artifact currently controls, and where does its lineage end? | Use whenever "latest" and "authoritative" may differ; nearly always cheap | `omni_used` — repeatedly (Care, C4.4, pre-spine) | no |
| `M-103` | Authority / supersession / maturity matrix | Is this binding, candidate, or superseded — and how mature? | Use when several artifacts speak to one topic; avoid when one accepted contract clearly owns it | `omni_used` — Care forensic; C4.4 | no |
| `M-104` | Zero-unknown coverage manifest | Have I accounted for everything relevant, even unread? | **Exhaustive accounting; selective depth.** Use on broad arcs; pair with declared read depth | `omni_used` — `v4_C3_C4_estate_coverage_preflight.md` | no |
| `M-105` | Branch-only & quarantined-state recovery | Is controlling material sitting off `main` or in a quarantined branch? | Use when history suggests unlanded work; cite immutable commit/blob, never resume stale branches in place | `omni_used` — cross-facet worksheet; Demand Gate-0 packet | no |
| `M-106` | Novelty / `EXISTS-AS` dedup sweep | Is this genuinely new, or already canon under another name? | Use before minting vocabulary or a domain; strongest anti-bloat method available | `omni_used` — wave-4 `EVRUN-2026-000005` ("0 genuine net-new") | partial |
| `M-107` | Forensic inheritance audit with declared evidence cutoff | What did this area inherit, and what silently changed? | Use when an area's history is long and possibly corrupted; expensive — do not use casually | `omni_used` — Care forensic Lanes 1–6 | no |
| `M-108` | Coverage matrix + missing-evidence scan | What is missing rather than merely unread? | Use with `M-104`; avoid as a standalone deliverable | `omni_used` — EVRUN coverage matrices | no |

### B — Reality & comparator methods

| ID | Method | Question it answers | Use / avoid | Provenance | Evaluated? |
|---|---|---|---|---|---|
| `M-201` | Incumbent steelman | What is the strongest version of the competitor's position? | Use before any "we beat X" claim; **avoid strawmanning** — a weak steelman invalidates the result | `omni_used` — Task-D (Palantir/Epic/ServiceNow/Microsoft); C3.8 | no |
| `M-202` | Incumbent composite / best-of-breed test | Could several excellent incumbents combined replace us? | Harder and more honest than a single-incumbent test; use when the market is fragmented | `omni_used` — C3.8; Task-D framing | no |
| `M-203` | Build–buy–wrap–partner–host assessment | What must we own vs consume? | Use on any capability boundary decision; avoid before ownership seams are identified | `omni_used` — Task-D; Step-5 posture | no |
| `M-204` | Seam-tax accounting | What integration/config cost remains after composing? | Use when comparing "own it" vs "compose it" | `omni_partial` — named in Task-D framing | no |
| `M-205` | Field reality map | What is actually true operationally in this setting? | Use when entering an unfamiliar care/market setting; cite public refs | `omni_used` — `v4_C3_5B`, `v4_C3_6B`, `v4_C3_8_G1b` (6-axis) | no |
| `M-206` | Official-source current-reality verification | Is our understanding of an external system current and sourced? | Required before designing against an external platform; a synthesis is not a source | `external_known` + `omni_partial` — Evidence Plane exists; not run for the 2026-08 comparator set | no |
| `M-207` | Mechanism-first comparator translation | What mechanism do we borrow, minus the vendor's assumptions? | Use whenever importing an outside pattern; **take the mechanism, not its ownership/economic assumptions** | `omni_used` — comparator registry; Step 5 | no |
| `M-208` | Actor / role / principal authority map | Who may decide, act, and commit here? | Use before modelling permissions or agent authority | `omni_used` — `v4_C3_5C`, `v4_C3_6C`; multi-principal work | no |
| `M-209` | Ownership & responsibility ladder | Where does responsibility escalate and terminate? | Use for accountability and access-funnel questions | `omni_used` — `v4_C3_7C` | no |

### C — Architecture synthesis methods

| ID | Method | Question it answers | Use / avoid | Provenance | Evaluated? |
|---|---|---|---|---|---|
| `M-301` | Object / lifecycle / projection / capability / seam decomposition | Is this a domain, a lifecycle, a projection, a capability, or just a useful word? | Use before naming anything new (**payload-noun ≠ domain**, `D0THES-GRD-026`) | `omni_used` — repeatedly | no |
| `M-302` | Candidate-vs-commit audit | Is this accepted, or merely written down convincingly? | Cheap and high-value; use whenever status is asserted | `omni_used` — C4.4; pre-spine | no |
| `M-303` | Ownership / authority / custody / visibility / execution decomposition audit | Are we conflating distinct powers into one object? | Use when a god-object or hidden central authority is suspected | `omni_used` — C3.8; enterprise work | no |
| `M-304` | Decision-state reconciliation | What was actually decided, and does the estate agree? | Use when ledgers, plans and prose disagree | `omni_used` — `v4_REV184_decision_state_reconciliation.md` | no |
| `M-305` | Domain & seam collision map | Do two domains claim the same truth? | Use before minting a domain or contract | `omni_used` — EVRUN-000012 (Vendor decomposition) | no |
| `M-306` | Maturity-layer separation | Is this architecture-mature, contract-mature, build-mature, or proven? | Use to prevent "designed" being read as "built" | `omni_used` — C4.4 (architecture closed / implementation unproven) | no |

### D — Scenario & trace methods

| ID | Method | Question it answers | Use / avoid | Provenance | Evaluated? |
|---|---|---|---|---|---|
| `M-401` | Scenario library | What real situations must this survive? | Use for operating-model work; **avoid before the estate is known** (you will invent scenarios for the wrong model) | `omni_used` — `v4_C3_5D`, `v4_C3_6D`, `v4_C3_7D` | no |
| `M-402` | Representative fixture selection | Which few cases actually discriminate? | Prefer over exhaustive scenario expansion; cheaper and sharper | `omni_used` — Task-D fixtures; C3.9 | no |
| `M-403` | Deep trace matrix | Does the model hold end-to-end through a real case? | Use on a **small** selected set; expensive per trace | `omni_used` — `v4_C3_5E`, `v4_C3_6E`, `v4_C3_7E` | no |
| `M-404` | Operational-override trace | What happens when a human overrides the system? | Use for authority and safety questions | `omni_used` — hospital/oncology arcs | no |
| `M-405` | Failure / retry / degraded-mode replay | How does this behave broken, retried, or degraded? | Use before claiming operational readiness | `omni_partial` — named in runtime/Build-OS work | no |
| `M-406` | Temporal / as-of reconstruction | Can we reconstruct what was true at a past moment? | Use when history, audit, or replay matters | `omni_used` — C4.5 charter (full pass not yet run) | no |
| `M-407` | Cross-operator / federation trace | Does it hold across operators and partitions? | Use for multi-tenant/topology questions | `omni_used` — C3.9 shell; C3.5 topology closure | no |

### E — Adversarial & independence methods

| ID | Method | Question it answers | Use / avoid | Provenance | Evaluated? |
|---|---|---|---|---|---|
| `M-501` | Fresh-context re-derivation | Would a clean agent reach the same conclusion? | Strong anti-groupthink check; **the prompt must not contain the answer** | `omni_used` — C4.4 fresh-B | partial |
| `M-502` | Blind-then-unblinded independent analysis | What does an independent analyst see before ours anchors them? | Powerful; **must be blind before exposure or it is worthless** | `omni_used` — EVRUN-000012 (blind Gemini-A → unblinded adjudication → Knox final) | partial |
| `M-503` | Independent builder / adversary / judge separation | Is the person judging also the person who built it? | Use on high-consequence acceptance; the trifecta is an instance | `omni_used` — standing Nick/Opus/Knox model | no |
| `M-504` | Doctrine-breaker enumeration | What specific claims would break this, and do they? | Use for convergence/pressure passes; score held/bent/broke/open | `omni_used` — C3.8 G3 (48 breakers: 15/20/5/8) | partial |
| `M-505` | Mutation suite | Would our rules catch a deliberately introduced subtle violation? | Strongest discrimination test available; **requires invariants to exist first** | `external_known` (software engineering) + `candidate` for OMNI — **not yet run here** | n/a |
| `M-506` | Counterexample search | Does a single case falsify the claim? | Cheap; try before elaborate machinery | `external_known` + `omni_partial` | no |
| `M-507` | Competing decomposition comparison | Is there a better carve-up than ours? | Use when a decomposition feels arbitrary; expensive but decisive | `candidate` — **not run as a named method here** | n/a |
| `M-508` | Negative-control / honest-null test | Would our method "detect" something even in a case with nothing to find? | Guards against tests that always pass or always alarm | `external_known` (science) — **not yet run here** | n/a |
| `M-509` | Contradiction & invariant sweep | Do our own stated invariants conflict? | Cheap; run before adding new laws | `omni_partial` — done informally | no |

### F — Vertical & market falsifiers

| ID | Method | Question it answers | Use / avoid | Provenance | Evaluated? |
|---|---|---|---|---|---|
| `M-601` | Vertical-wedge falsifier | Does this hold in the specific vertical we intend to sell? | Use to ground abstract architecture; pick the real wedge | `omni_used` — C3.9 plastics/medspa (shell) | no |
| `M-602` | Mixed-operator topology test | Does it hold across standalone / co-located / partitioned shapes? | Use for federation and partition questions | `omni_used` — C3.9 design | no |
| `M-603` | Mixed-financing test | Does it hold across cash, insurance, membership, sponsored, mixed? | Use for commerce/coverage questions | `omni_partial` — Insurance Gate-0 (pending) | no |
| `M-604` | Institutional-gravity test | Does an institution's physical/employment/referral lock-in defeat us? | Use for hospital/enterprise entry | `omni_used` — C3.5 | no |
| `M-605` | Fleet / multi-instance test | Does it hold at N operators rather than one? | Use before scale claims | `omni_partial` — named in Task-D | no |
| `M-606` | Incumbent absorption test | Could an incumbent simply add this feature? | Use for moat claims | `omni_partial` — C3.8 | no |
| `M-607` | Portability / exit / switching test | Can a customer leave, and does that prove non-captivity? | Use for ownership/moat posture | `omni_used` — portability review rows | no |

### G — Gate & hardening methods

| ID | Method | Question it answers | Use / avoid | Provenance | Evaluated? |
|---|---|---|---|---|---|
| `M-701` | Gate-0 charter | What exactly will this arc do, not do, and produce? | Use to open any non-trivial arc; **this is where method selection lives** | `omni_used` — C4.4, C4.5, Demand Gate-0 | no |
| `M-702` | Desk check | Does the conclusion survive a careful manual pass against contracts? | Cheap final check before acceptance | `omni_used` — `v4_C3_5G4_1_contract_deskcheck_addendum.md` | no |
| `M-703` | Input-state receipt | What may the next stage rely on, falsify, and not assume? | Use when handing an open area to a later gate **without forcing false closure** | `omni_used` — Phase-A design (pending execution) | no |
| `M-704` | Multi-angle authorability test | Can this actually be authored, from more than one angle? | Use before committing to author a large synthesis | `omni_used` — C4.4 G5 (three angles) | partial |
| `M-705` | Disposition ledger | Where did every finding go? | Use to close any pass with many findings; prevents evaporation | `omni_used` — C3.8 G4; C3.5 F | partial |
| `M-706` | Explicit verdict vocabulary | What are the allowed outcomes, including failure? | Define **before** running the test so it can fail honestly. Real examples: `SPINE_READY` / `SPINE_READY_WITH_NAMED_RECONCILIATIONS` / `NOT_READY`; `TEMPORAL_AXIS_ADMITTED` / `TEMPORAL_LAWS_DISTRIBUTED_NO_STANDALONE_AXIS`; `allowed_with_blockers` | `omni_used` — Task-D, C4.5, Build Entry | no |
| `M-707` | Bounded fidelity patch | How do I correct a defect without reopening the design? | Use for review findings; state exact file scope | `omni_used` — repeatedly (this arc included) | partial |
| `M-708` | Byte review | Do the committed bytes match what was accepted? | Use before landing anything consequential | `omni_used` — standing Knox practice | partial |
| `M-709` | State-only landing normalization | How do I record acceptance without changing content? | Separate content commits from state commits (see AWP §2.1 base-binding) | `omni_used` — relay-integrity + Phase-A landings | partial |
| `M-710` | Checkpoint / boot-path synchronization | Will the next agent boot to the right state? | Required at any Tier-2+ close (`D0CKPT-GRD-001`) | `omni_used` — repeatedly | yes |

### H — Evidence & learning methods

| ID | Method | Question it answers | Use / avoid | Provenance | Evaluated? |
|---|---|---|---|---|---|
| `M-801` | Source packet | What exactly did we read, and at what version? | Use whenever outside material informs a decision | `omni_used` — Evidence Plane `EVSRC` | no |
| `M-802` | Concept registry / routing map | Where does each extracted concept belong? | Use to close an evidence run | `omni_used` — EVRUN registries | partial |
| `M-803` | Anchor ledger | Which source supports which claim? | Use when claims must be traceable | `omni_used` — EVRUN anchor ledgers | no |
| `M-804` | External-evidence promotion gate | Has this outside material earned authority? | **Capture broad, promote gated** (`D0THES-GRD-036`) | `omni_used` — Evidence Router | yes |
| `M-805` | Official-source freshness classification | Is this source current, or stale folklore? | Use for fast-moving external platforms | `omni_partial` — owed for the 2026-08 comparator set | no |

### METHOD-000 — Direct reconciliation (no specialized method)

| ID | Method | Question it answers | Use / avoid | Provenance | Evaluated? |
|---|---|---|---|---|---|
| `METHOD-000` | **Direct reconciliation** | Can I just read the controlling sources and answer? | **Use by default.** Choose a specialized method only when a named uncertainty demands it. Selecting nothing from this catalog is a legitimate, frequently correct outcome. | `omni_used` — most ordinary work | n/a |

---

## §6 — Compositions observed (patterns, NOT recipes)

These are combinations that have actually appeared. **No composition is owed to any arc.**

- **A→G arc pattern** (C3.5 / C3.6 / C3.7 each ran a variant): asset inventory → reality map → authority map → scenario library → deep traces → disposition/gap matrix → handoff + verdict. Real and repeated — and **not** mandatory.
- **Estate entry:** `M-104` coverage manifest → selective deep reads → `M-701` Gate-0.
- **Enterprise pressure:** `M-201` steelman → `M-202` composite → `M-203` build/buy/wrap → `M-204` seam tax.
- **Independence chain:** `M-502` blind analysis → unblinded comparison → `M-503` independent judge.
- **Discrimination chain:** `M-509` invariants → `M-505` mutation suite → `M-707` bounded correction.
- **Landing chain:** `M-708` byte review → `M-709` state-only normalization → `M-710` boot-path sync.

---

## §7 — Invalid combinations & anti-use (earned negative knowledge)

**This is the most valuable section in the file.** Valid combinations are guessable; these are not.

- **Blind analysis after full exposure** — once an analyst has seen our conclusion, `M-502` produces confirmation, not independence.
- **Fresh-context re-derivation with the answer in the prompt** — `M-501` becomes theatre.
- **Mutation testing before invariants exist** — `M-505` has nothing to discriminate against; you will "pass" meaninglessly.
- **Scenario expansion before estate recovery** — `M-401` invents scenarios for a model you have not yet established.
- **Parallel agents on tightly coupled work** — AWP §2.1 parallelism assumes substantial independence; shared-context work produces collision and duplication instead of speed.
- **Comparator evidence treated as architecture authority** — `M-207`/`M-206` inform; they never bind (`D0THES-GRD-036`).
- **Pressure tests chosen for theatre rather than a named uncertainty** — if you cannot state what result would change a decision, do not run it.
- **Additional agents that add no independence** — a second agent with the same context and prompt is cost without signal.
- **Verdict vocabulary invented after results are in** — define `M-706` before running, or the test cannot fail.
- **Declaring closure to satisfy a downstream gate** — prefer `M-703` input-state receipt over forced false closure.

---

## §8 — Method Selection Receipt (short and proportional)

Record inside the arc's Gate-0 packet. Two or three lines per field is normal.

```
Uncertainties to resolve:
- ...

Methods selected:
- M-xxx — because ...

Methods considered and rejected:
- M-yyy — not appropriate because ...

Independence posture:
- same-context | fresh-context | blind | adversarial | independent judge

Evaluator / verdict vocabulary:
- ... (defined BEFORE running)

Side-test trigger:
- open a side test only if ...

Cost boundary:
- operator attention / model time / branch complexity limit

Stop condition:
- ...
```

`METHOD-000` is a valid entry under "Methods selected." **There is no minimum count**, and no credit for length.

---

## §9 — Lifecycle, effectiveness, deprecation

- Entries may be **reused · refined · renamed · split · combined · demoted · deprecated**.
- **Deprecated entries are never deleted, and always retain the reason.** Preventing rediscovery of a known-wasteful method is a primary purpose of this file.
- **Effectiveness is recorded only from real use** — at an arc's closeout, proportionally: which method changed a decision · which produced duplicate or low-value work · what it cost in operator attention · reuse / revise / deprecate. Update **this file**; do not create a postmortem artifact per method.
- **Do not fabricate effectiveness to fill a schema.** `Evaluated? = no` is the correct answer for most of v0.
- **Remove ceremonial fields.** If a column stops changing decisions, delete the column.
- Automation candidacy is decided later, by evidence, under `D0THES-REV-158` (Build OS Layer-2/3 Tooling v0.2) — not by this file.

---

## Appendix — candidate methods named but not harvested at depth

Named so they are not lost; **no effectiveness claimed**, no cards written. Promote only if a real arc uses one.

Chaos/fault injection · property-based testing · formal invariant specification · red-team/blue-team exercise · premortem · decision-record diffing · adversarial dataset construction · A/B method comparison on one problem · cost-per-decision measurement · inter-rater reliability between independent reviewers · time-boxed spike with mandatory discard · reversible-decision classification (one-way vs two-way doors) · dependency-graph criticality analysis · shadow/parallel-run comparison · canary/staged rollout evaluation.

<!--
Document identity:
 type: reference_registry (method option catalog; consult-routed)
 authority: evidence_with_pointers · originates no doctrine · asserts no architectural truth
 agent_read_rule: consult_if_routed (read-graph Major-Arc Intake and Estate-Reconnaissance Routing)
 review_gate: user_knox_required · decision: D0CKPT-DEC-006 (review_required at v0)
 anti-pipeline: no required order · no required method · no minimum count · METHOD-000 valid
 firewall: how-to-investigate only; architectural truth lives in thesis + contracts; execution in agent_work_protocol.md §2.1
 status: active_candidate (v0, 2026-08-05) · append-only with retained demotion/deprecation reasons
-->
