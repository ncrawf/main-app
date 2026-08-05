# OMNI Work Method Repertoire — investigation, adversarial, and hardening method catalog

Document type: `manifest_or_catalog`
Lifecycle role: `method catalog / reference registry — a consult-routed list of AVAILABLE methods an agent may select from when facing an uncertainty. NOT an arc plan, NOT a gate sequence, NOT universal boot, NOT Build OS completion.`
Authority: `derived_nonbinding` — a working reference list. It originates NO doctrine and asserts NO architectural truth.
Status: `active_candidate` (v0, 2026-08-05)
Domain(s): `architecture_governance`, `build_operations`
Source-of-truth relationship: `describes HOW to investigate, never WHAT is true. Execution behavior stays in agent_work_protocol.md (esp. §2.1). Method SELECTION for a given arc stays in that arc's own Gate-0 packet. Architectural truth stays in the thesis + contracts. Comparator provenance stays in comparator_analogy_registry.md. Future tooling target stays in 10_omni_build_os_rollout_sequence.md Step 5 + D0THES-REV-158.`
Supersedes: `none`
Superseded by: `none`
Manifest action: `add_tier2 · consult_if_routed` (routed from read-graph Major-Arc Intake and Estate-Reconnaissance Routing)
Review gate: `user_knox_required`
Decision: `D0CKPT-DEC-006`

---

## §0 — Operating contract (read before using this file)

**This repertoire expands awareness, not authority.** It records available methods and known cautions. It neither limits method invention nor validates past execution. Prefer a cleaner method when it better resolves the stated uncertainty, and record why.

- **Palette, not pipeline.** No required order, no required method, **no minimum count**. `METHOD-000` (no specialized method) is a fully valid and frequently correct selection.
- **Selecting more methods does not make work more rigorous.** It usually makes it slower and no more decisive. An agent earns nothing by picking many.
- **Methods come from anywhere** — ordinary engineering and scientific practice, adversarial-testing tradition, comparator organizations, or prior OMNI work. **A method OMNI has never used is a legitimate entry.** Widely-known practice (mutation testing, negative controls, property-based testing) needs no citation here, exactly as "use version control" would not.
- **This file makes NO usage or effectiveness claims.** There is deliberately **no usage ledger, no "times used" count, and no effectiveness rating.** An earlier draft tried, and got roughly seven rows wrong — the accounting invited fabrication and would have told future agents something false. The **"Where to look"** column is *optional reading suggestions*, not a record of what OMNI has achieved or measured.
- **How-to-investigate only.** If an entry starts asserting what is true about OMNI's architecture, it is misfiled — that belongs in the thesis/contracts. Entries use operational verbs ("run an X audit"), never claims ("X owns Y").
- **This binds nothing.** `agent_work_protocol.md` §2.1 governs branches, lanes, writers, integrators and bases. This file informs choice.
- **It may be corrected and it may shrink.** Entries may be reworded, merged, split, or removed. If a method is ever found actively harmful, say so on its row so it is not rediscovered. Nothing here has been retired to date, so there is no graveyard section — do not build one before there is something to put in it.

---

## §1 — Why this file exists

OMNI has run many arcs — hospital/EHR gravity, oncology and trial access, enterprise-AI-OS convergence, Care inheritance and correction-continuity, Accountability/GRR, Platform, Pharmacy, Knowledge Reservoirs, Task-D, demand/engagement, evidence waves, runtime, and Build-OS/relay governance.

**Method selection in those arcs was mostly left to whichever agent showed up.** A fresh agent was handed a topic and asked to devise an approach, with no visibility of what approaches existed. Where a good structure did emerge it stayed buried inside that arc's plan or a relay message, and the next agent started over. `v4_C3_5A_existing_pressure_test_inventory.md` shows OMNI already did this once, for one arc, then lost the habit.

This file does **not** claim those improvisations were good or bad — that was never measured. It claims something narrower: **an agent choosing an approach should be able to see the option space first.** That is the entire purpose.

---

## §2 — Why OMNI is deliberately plural (four poles + OMNI's own envelope)

These are **not four vendors competing to become the OMNI framework.** They are four useful poles in a design space, and OMNI intentionally borrows **varying degrees of each** depending on the structure and risk of the work. Comparator provenance: `comparator_analogy_registry.md` §B. Mechanism-first tooling target: `10_omni_build_os_rollout_sequence.md` Step 5.

| Pole | Strongest lesson | Best fit |
|---|---|---|
| **Karpathy / autoresearch** | Constrain the action surface; define a decisive evaluator; commit, evaluate, keep-or-reset | Narrow, reversible work with an objective metric |
| **Anthropic multi-agent** | Explicit orchestrator/worker decomposition, isolated workers, durable progress artifacts, evals + observability as the judge; warns against premature elaborate harnesses | Broad work that decomposes into substantially **independent** investigations |
| **Palantir operating pattern** | Protected shared state, branches/proposals, policy-enforced permissions, required checks, audit, evaluation runs | High-consequence work touching shared governed resources |
| **Amazon / Builders' Library posture** | There is no single correct method; practices are contextual, empirical and living | Long-lived organizations spanning many problem classes |

**OMNI's own constraint envelope** (non-negotiable; overrides any borrowed posture): source and authority discipline · **candidate ≠ commit** · domain-owned truth · multiple principals and authority planes · evidence and provenance · exact repository state · clinical and business consequence · explicit acceptance and integration gates.

**Selection heuristic:** independent breadth → more Anthropic. Narrow surface with a mechanical evaluator → more Karpathy. High consequence on shared state → more Palantir. Unsettled context over a long horizon → more Amazon. High authority/evidence sensitivity → **OMNI's own controls dominate regardless of comparator.**

**No comparator is the template, the destination, or a source of OMNI authority.**

---

## §3 — Question → options index (primary retrieval axis)

You arrive holding an **uncertainty**, not a method name. Start here. These are candidates to consider, never a required set.

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
| "Would our rules actually catch a subtle violation?" | `M-504` doctrine-breaker enumeration · `M-505` mutation suite · `M-506` counterexample search · `M-508` negative-control / null-detection calibration |
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

- **Task coupling** — independent breadth ↔ tightly interdependent.
- **Evaluator quality** — mechanical/objective ↔ expert judgement. *(A weak evaluator makes elaborate testing theatre.)*
- **Consequence / reversibility** — cheap to undo ↔ hard to unwind.
- **Independence requirement** — same-context ↔ fresh-context ↔ blind/adversarial.
- **Estate uncertainty** — controlling carrier known ↔ fragmented or stale.
- **External-reality dependence** — internal reconciliation only ↔ needs current official sources.
- **Cost** — operator attention first, then model time, tokens, branch complexity. **Operator attention is the scarcest input.**

---

## §5 — Method index

**"Where to look" = optional reading suggestions.** It is not a usage ledger, not a count, and not an effectiveness claim. Blank means "no particular OMNI example worth pointing at" — which says nothing about the method's value. Widely-known practice is listed without citation on purpose.

### A — Estate & lineage reconnaissance

| ID | Method | Question it answers | Use / avoid | Where to look (optional) |
|---|---|---|---|---|
| `M-101` | Canonical source-base declaration | What is the complete accepted source set for this work? | Use before synthesis on a broad topic; skip for a narrow single-file fix | `v4_C2_source_base_declaration.md` |
| `M-102` | Controlling-terminus recovery | Which artifact currently controls, and where does its lineage end? | Use whenever "latest" and "authoritative" may differ; usually cheap | Care forensic; C4.4; pre-spine work |
| `M-103` | Authority / supersession / maturity matrix | Is this binding, candidate, or superseded — and how mature? | Use when several artifacts speak to one topic; skip when one accepted contract clearly owns it | Care forensic; C4.4 |
| `M-104` | Zero-unknown coverage manifest | Have I accounted for everything relevant, even unread? | **Exhaustive accounting; selective depth.** Pair with a declared read depth | `v4_C3_C4_estate_coverage_preflight.md` |
| `M-105` | Branch-only & quarantined-state recovery | Is controlling material sitting off `main` or quarantined? | Cite immutable commit/blob; never resume a stale branch in place | cross-facet worksheet; Demand Gate-0 packet |
| `M-106` | Novelty / `EXISTS-AS` dedup sweep | Is this genuinely new, or already canon under another name? | Use before minting vocabulary or a domain; strong anti-bloat move | wave-4 `EVRUN-2026-000005` |
| `M-107` | Forensic inheritance audit with declared evidence cutoff | What did this area inherit, and what silently changed? | For long, possibly-corrupted histories; expensive — not casual | Care forensic Lanes 1–6 |
| `M-108` | Coverage matrix + missing-evidence scan | What is missing, rather than merely unread? | Pair with `M-104`; weak as a standalone deliverable | EVRUN coverage matrices |

### B — Reality & comparator methods

| ID | Method | Question it answers | Use / avoid | Where to look (optional) |
|---|---|---|---|---|
| `M-201` | Incumbent steelman | What is the strongest version of the competitor's position? | Use before any "we beat X" claim; **a weak steelman invalidates the result** | Task-D; C3.8 |
| `M-202` | Incumbent composite / best-of-breed test | Could several excellent incumbents combined replace us? | Harder and more honest than single-incumbent; use when the market is fragmented | C3.8; Task-D framing |
| `M-203` | Build–buy–wrap–partner–host assessment | What must we own vs consume? | Use on capability-boundary decisions; not before seams are identified | Task-D; Step-5 posture |
| `M-204` | Seam-tax accounting | What integration/config cost remains after composing? | Use when comparing "own it" vs "compose it" | Task-D framing |
| `M-205` | Field reality map | What is actually true operationally in this setting? | Use when entering an unfamiliar care/market setting; cite public refs | `v4_C3_5B`, `v4_C3_6B`, `v4_C3_8_G1b` |
| `M-206` | Official-source current-reality verification | Is our understanding of an external system current and sourced? | Use before **designing against** an external platform; a synthesis is not a source | Evidence Plane (`EVSRC`) |
| `M-207` | Mechanism-first comparator translation | What mechanism do we borrow, minus the vendor's assumptions? | Use whenever importing an outside pattern — **take the mechanism, not its ownership/economic assumptions** | `comparator_analogy_registry.md`; Step 5 |
| `M-208` | Actor / role / principal authority map | Who may decide, act, and commit here? | Use before modelling permissions or agent authority | `v4_C3_5C`, `v4_C3_6C` |
| `M-209` | Ownership & responsibility ladder | Where does responsibility escalate and terminate? | Use for accountability and access-funnel questions | `v4_C3_7C` |

### C — Architecture synthesis methods

| ID | Method | Question it answers | Use / avoid | Where to look (optional) |
|---|---|---|---|---|
| `M-301` | Object / lifecycle / projection / capability / seam decomposition | Is this a domain, a lifecycle, a projection, a capability, or just a useful word? | Use before naming anything new (**payload-noun ≠ domain**, `D0THES-GRD-026`) | repeated across arcs |
| `M-302` | Candidate-vs-commit audit | Is this accepted, or merely written down convincingly? | Cheap, high-value; use whenever status is asserted | C4.4; pre-spine |
| `M-303` | Ownership / authority / custody / visibility / execution decomposition audit | Are we conflating distinct powers into one object? | Use when a god-object or hidden central authority is suspected | C3.8; enterprise work |
| `M-304` | Decision-state reconciliation | What was actually decided, and does the estate agree? | Use when ledgers, plans and prose disagree | `v4_REV184_decision_state_reconciliation.md` |
| `M-305` | Domain & seam collision map | Do two domains claim the same truth? | Use before minting a domain or contract | EVRUN-000012 (Vendor decomposition) |
| `M-306` | Maturity-layer separation | Is this architecture-mature, contract-mature, build-mature, or proven? | Use to stop "designed" being read as "built" | C4.4 |

### D — Scenario & trace methods

| ID | Method | Question it answers | Use / avoid | Where to look (optional) |
|---|---|---|---|---|
| `M-401` | Scenario library | What real situations must this survive? | **Avoid before the estate is known** — you will invent scenarios for the wrong model | `v4_C3_5D`, `v4_C3_6D`, `v4_C3_7D` |
| `M-402` | Representative fixture selection | Which few cases actually discriminate? | Prefer over exhaustive scenario expansion; cheaper and sharper | Task-D fixtures; C3.9 |
| `M-403` | Deep trace matrix | Does the model hold end-to-end through a real case? | Use on a **small** selected set; expensive per trace | `v4_C3_5E`, `v4_C3_6E`, `v4_C3_7E` |
| `M-404` | Operational-override trace | What happens when a human overrides the system? | Use for authority and safety questions | hospital/oncology arcs |
| `M-405` | Failure / retry / degraded-mode replay | How does this behave broken, retried, or degraded? | Use before claiming operational readiness | runtime / Build-OS work |
| `M-406` | Temporal / as-of reconstruction | Can we reconstruct what was true at a past moment? | Use when history, audit, or replay matters | `v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md` (charter; full pass not run) |
| `M-407` | Cross-operator / federation trace | Does it hold across operators and partitions? | Use for multi-tenant/topology questions | C3.5 topology closure; C3.9 design |

### E — Adversarial & independence methods

| ID | Method | Question it answers | Use / avoid | Where to look (optional) |
|---|---|---|---|---|
| `M-501` | Fresh-context re-derivation | Would a clean agent reach the same conclusion? | Strong anti-groupthink check; **the prompt must not contain the answer** | C4.4 fresh-B |
| `M-502` | Blind-then-unblinded independent analysis | What does an independent analyst see before ours anchors them? | Powerful; **must be blind before exposure or it is worthless** | EVRUN-000012 (blind submission → unblinded adjudication → final judge) |
| `M-503` | Independent builder / adversary / judge separation | Is whoever judges this also whoever built it? | Use on high-consequence acceptance; the trifecta is an instance | standing Nick/Opus/Knox model |
| `M-504` | Doctrine-breaker enumeration | What specific claims would break this, and do they? | Use for convergence/pressure passes; score held/bent/broke/open | C3.8 G3 |
| `M-505` | Mutation suite | Would our rules catch a deliberately introduced subtle violation? | Strong discrimination test; **requires invariants to exist first** | `v4_C4_3_care_response_seam_correction_continuity_test.md`; `v4_C4_4_fixture_suite_and_adversarial_results.md` |
| `M-506` | Counterexample search | Does a single case falsify the claim? | Cheap; try before elaborate machinery | — |
| `M-507` | Competing decomposition comparison | Is there a better carve-up than ours? | Use when a decomposition feels arbitrary; expensive but decisive | EVRUN-000012 Gate-3 full-spectrum synthesis |
| `M-508` | Negative-control / null-detection calibration | Does this test report a finding when no finding is present? | Guards against tests that always pass or always alarm. *(Distinct from the architectural question of whether the system can return "no valid recommendation" — that lives in the Care/trial-access homes, not here.)* | — |
| `M-509` | Contradiction & invariant sweep | Do our own stated invariants conflict? | Cheap; run before adding new laws | — |

### F — Vertical & market falsifiers

| ID | Method | Question it answers | Use / avoid | Where to look (optional) |
|---|---|---|---|---|
| `M-601` | Vertical-wedge falsifier | Does this hold in the specific vertical we intend to sell? | Use to ground abstract architecture; pick the real wedge | `v4_C3_9_plastics_medspa_care_setting_pressure_test.md` (shell; pending population) |
| `M-602` | Mixed-operator topology test | Does it hold across standalone / co-located / partitioned shapes? | Use for federation and partition questions | C3.9 design (not yet executed) |
| `M-603` | Mixed-financing test | Does it hold across cash, insurance, membership, sponsored, mixed? | Use for commerce/coverage questions | Insurance Gate-0 (pending) |
| `M-604` | Institutional-gravity test | Does an institution's physical/employment/referral lock-in defeat us? | Use for hospital/enterprise entry | C3.5 |
| `M-605` | Fleet / multi-instance test | Does it hold at N operators rather than one? | Use before scale claims | Task-D framing |
| `M-606` | Incumbent absorption test | Could an incumbent simply add this feature? | Use for moat claims | C3.8 |
| `M-607` | Portability / exit / switching test | Can a customer leave, and does that prove non-captivity? | Use for ownership/moat posture | portability review rows |

### G — Gate & hardening methods

| ID | Method | Question it answers | Use / avoid | Where to look (optional) |
|---|---|---|---|---|
| `M-701` | Gate-0 charter | What exactly will this arc do, not do, and produce? | Consider when the **Major-Arc Intake trigger** fires, when the architectural home or source estate is uncertain, or when scope/acceptance needs an explicit opening gate. **Routine bounded work may proceed under an existing accepted work package.** This is where method selection lives | C4.4, C4.5, Demand Gate-0 |
| `M-702` | Desk check | Does the conclusion survive a careful manual pass against contracts? | Cheap final check before acceptance | `v4_C3_5G4_1_contract_deskcheck_addendum.md` |
| `M-703` | Input-state receipt | What may the next stage rely on, falsify, and not assume? | Use when handing an open area to a later gate **without forcing false closure** | Phase-A card design (not yet executed) |
| `M-704` | Multi-angle authorability test | Can this actually be authored, from more than one angle? | Use before committing to author a large synthesis | C4.4 G5 (three angles) |
| `M-705` | Disposition ledger | Where did every finding go? | Use to close a pass with many findings; prevents evaporation | C3.8 G4; `v4_C3_5F` |
| `M-706` | Explicit verdict vocabulary | What are the allowed outcomes, **including failure**? | Define **before** running, or the test cannot fail. Real examples: `SPINE_READY` / `SPINE_READY_WITH_NAMED_RECONCILIATIONS` / `NOT_READY`; `TEMPORAL_AXIS_ADMITTED` / `TEMPORAL_LAWS_DISTRIBUTED_NO_STANDALONE_AXIS`; `allowed_with_blockers` | Task-D; C4.5; Build Entry |
| `M-707` | Bounded fidelity patch | How do I correct a defect without reopening the design? | Use for review findings; state exact file scope | repeated, incl. this arc |
| `M-708` | Byte review | Do the committed bytes match what was accepted? | Use before landing anything consequential | standing Knox practice |
| `M-709` | State-only landing normalization | How do I record acceptance without changing content? | Separate content commits from state commits (AWP §2.1 base-binding) | relay-integrity + Phase-A landings |
| `M-710` | Checkpoint / boot-path synchronization | Will the next agent boot to the right state? | Required at any Tier-2+ close (`D0CKPT-GRD-001`) | repeated |

### H — Evidence & learning methods

| ID | Method | Question it answers | Use / avoid | Where to look (optional) |
|---|---|---|---|---|
| `M-801` | Source packet | What exactly did we read, and at what version? | Use whenever outside material informs a decision | Evidence Plane `EVSRC` |
| `M-802` | Concept registry / routing map | Where does each extracted concept belong? | Use to close an evidence run | EVRUN registries |
| `M-803` | Anchor ledger | Which source supports which claim? | Use when claims must be traceable | EVRUN anchor ledgers |
| `M-804` | External-evidence promotion gate | Has this outside material earned authority? | **Capture broad, promote gated** (`D0THES-GRD-036`) | `ingestion/00_evidence_router.md` |
| `M-805` | Official-source freshness classification | Is this source current, or stale folklore? | Use for fast-moving external platforms | Evidence Plane |

### METHOD-000 — Direct reconciliation (no specialized method)

| ID | Method | Question it answers | Use / avoid | Where to look (optional) |
|---|---|---|---|---|
| `METHOD-000` | **Direct reconciliation** | Can I just read the controlling sources and answer? | **Use by default.** Choose a specialized method only when a named uncertainty demands it. Selecting nothing from this catalog is legitimate and frequently correct | most ordinary work |

---

## §6 — Compositions observed (patterns, NOT recipes)

Combinations that have actually appeared. **No composition is owed to any arc.**

- **A→G arc pattern** (C3.5 / C3.6 / C3.7 each ran a variant): asset inventory → reality map → authority map → scenario library → deep traces → disposition/gap matrix → handoff + verdict. Real and repeated — and **not** mandatory.
- **Estate entry:** `M-104` coverage manifest → selective deep reads → `M-701` Gate-0.
- **Enterprise pressure:** `M-201` steelman → `M-202` composite → `M-203` build/buy/wrap → `M-204` seam tax.
- **Independence chain:** `M-502` blind analysis → unblinded comparison → `M-503` independent judge.
- **Discrimination chain:** `M-509` invariants → `M-505` mutation suite → `M-707` bounded correction.
- **Landing chain:** `M-708` byte review → `M-709` state-only normalization → `M-710` boot-path sync.

---

## §7 — Combinations that do not work, and why

**These are logical cautions, not verdicts from failed experiments.** OMNI has not run and rejected these; each fails for a structural reason you can check yourself. Stated because they are easy to walk into.

- **Blind analysis after full exposure** — once an analyst has seen our conclusion, `M-502` yields confirmation, not independence. Broken by definition, not by experience.
- **Fresh-context re-derivation with the answer in the prompt** — `M-501` measures nothing; the context is not fresh.
- **Mutation testing before invariants exist** — `M-505` has nothing to discriminate against, so "passing" is uninformative.
- **Scenario expansion before estate recovery** — `M-401` invents scenarios for a model you have not yet established.
- **Parallel lanes on tightly coupled work** — usually a poor default, because AWP §2.1 parallelism assumes substantial independence; coupled work produces collision and duplication instead of speed. **Not forbidden** — legitimate where the work package defines a real decomposition, integration contract and collision controls.
- **Replication with identical context and prompt** — usually low incremental signal. **Not forbidden** — legitimate when deliberately measuring stochastic reliability, variance, or reviewer agreement, with that as the stated purpose.
- **Comparator evidence treated as architecture authority** — `M-206`/`M-207` inform; they never bind (`D0THES-GRD-036`).
- **Pressure tests with no named uncertainty** — if you cannot state what result would change a decision, the test is theatre.
- **Verdict vocabulary invented after results arrive** — define `M-706` first, or the test cannot fail.
- **Declaring closure to satisfy a downstream gate** — prefer `M-703` input-state receipt over forced false closure.

---

## §8 — Method Selection Receipt (short and proportional)

Record inside the arc's Gate-0 packet. **Proportional: for routine bounded work, `METHOD-000` plus a one-line reason is a complete receipt.** Only substantial arcs need the full shape.

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

**No minimum count. No credit for length.**

---

## §9 — Lifecycle

- Entries may be **reused, reworded, merged, split, or removed.** Prefer fewer, clearer entries over more.
- **If a method is ever found actively harmful, record that on its row** so it is not rediscovered. Nothing has been retired to date — there is deliberately no graveyard section yet.
- **Do not add usage counts, effectiveness ratings, or measurement claims.** An earlier draft attempted this and got roughly seven rows wrong. If someone later wants to measure a method's value, that is a real study with a stated evaluator — not a column in this file.
- **Remove ceremonial fields.** If a column stops changing decisions, delete the column.
- Automation candidacy is decided later, by evidence, under `D0THES-REV-158` (Build OS Layer-2/3 Tooling v0.2) — not by this file.

---

## Appendix — further methods named but not written up

Named so they are not lost. No claims of any kind. Promote to §5 only if someone actually uses one.

Chaos/fault injection · property-based testing · formal invariant specification · red-team/blue-team exercise · premortem · decision-record diffing · adversarial dataset construction · A/B method comparison on one problem · cost-per-decision measurement · inter-rater reliability between independent reviewers · time-boxed spike with mandatory discard · reversible-decision classification (one-way vs two-way doors) · dependency-graph criticality analysis · shadow/parallel-run comparison · canary/staged rollout evaluation.

<!--
Document identity:
 type: manifest_or_catalog · lifecycle role: method catalog / reference registry (consult-routed)
 authority: derived_nonbinding · originates no doctrine · asserts no architectural truth
 agent_read_rule: consult_if_routed (read-graph Major-Arc Intake and Estate-Reconnaissance Routing)
 review_gate: user_knox_required · decision: D0CKPT-DEC-006 (review_required at v0)
 anti-pipeline: no required order · no required method · no minimum count · METHOD-000 valid
 NO usage ledger, NO effectiveness ratings, NO measurement claims — deliberately removed after a draft got ~7 rows wrong
 firewall: how-to-investigate only; architectural truth lives in thesis + contracts; execution in agent_work_protocol.md §2.1
 status: active_candidate (v0, 2026-08-05)
-->
