# OMNI Work Method Repertoire — optional method catalog

Document type: `manifest_or_catalog`
Lifecycle role: `optional lookup catalog of investigation / adversarial / hardening methods`
Authority: `derived_nonbinding`
Status: `active_candidate` (v0, 2026-08-05)
Domain(s): `architecture_governance`, `build_operations`
Source-of-truth relationship: `describes how to investigate, never what is true. Execution behavior = agent_work_protocol.md §2.1. What actually happens in an arc = that arc's accepted work package.`
Supersedes: `none` · Superseded by: `none`
Manifest action: `add_tier2 · consult_if_routed`
Review gate: `user_knox_required` · Decision: `D0CKPT-DEC-006`

---

**This is an optional catalog, not a workflow.** Open it when seeing the available approaches would improve a decision; otherwise ignore it. It prescribes no order, requires no method, has no minimum count, and does not limit invention — a cleaner method you devise is better than a worse one from this list. **`METHOD-000` (just read the controlling sources and answer) is valid and often correct.** Routine bounded work need not consult this at all. It originates no architecture and no execution authority.

**Why OMNI is plural** — we borrow different mechanisms for different shapes of work, and none of these is a template:

- **Karpathy** — narrow the action surface, use a decisive evaluator, keep-or-reset on evidence.
- **Anthropic** — explicit worker boundaries for substantially *independent* breadth; evals and tests as the judge; avoid elaborate harnesses before they're earned.
- **Palantir** — enforce controls around consequential shared state rather than trusting recall.
- **Amazon** — no single correct method; practices stay contextual and living.
- **OMNI** — borrow mechanisms selectively, always inside OMNI's own authority, source-custody, evidence, candidate-≠-commit and consequence laws.

When choosing, it's usually enough to weigh **coupling · evaluator quality · consequence · independence needed · operator cost**. Prompts for judgment, not a scoring model.

---

## Start here: what are you unsure about?

| Your uncertainty | Options |
|---|---|
| What already exists, and what controls it? | `M-101` `M-102` `M-103` `M-105` |
| Is my inventory complete enough to reason on? | `M-104` `M-108` |
| Is this genuinely new, or already ours under another name? | `M-106` `M-107` |
| Does this survive a serious incumbent? | `M-201` `M-202` `M-203` `M-204` |
| What's actually true outside right now? | `M-205` `M-206` `M-207` |
| Who holds which authority here? | `M-208` `M-209` |
| Is this one thing or several? Where are the seams? | `M-301` `M-303` `M-305` |
| Is this accepted, or just written down convincingly? | `M-302` `M-304` `M-306` |
| How does it behave in a real operating situation? | `M-401` `M-402` `M-403` `M-405` |
| Does it hold under time, override, or federation? | `M-404` `M-406` `M-407` |
| Do I trust my own answer? | `M-501` `M-502` `M-503` |
| Would our rules actually catch a subtle violation? | `M-504` `M-505` `M-506` `M-508` |
| Is our decomposition the best available? | `M-507` `M-509` |
| Does it survive a real operator or market shape? | `M-601` `M-602` `M-603` `M-605` |
| Could an incumbent absorb this, or trap us? | `M-604` `M-606` `M-607` |
| Is this actually authorable? | `M-701` `M-702` `M-704` |
| What may the next stage rely on? | `M-703` `M-705` `M-706` |
| How do I land this without corrupting shared state? | `M-707` `M-708` `M-709` `M-710` |
| Is this outside material trustworthy enough to use? | `M-801` `M-802` `M-803` `M-804` `M-805` |
| Do I need a special method at all? | **`METHOD-000`** |

---

## The methods

Pointers appear only where reading a specific example genuinely helps.

**`METHOD-000` — Direct reconciliation.** Read the controlling sources and answer. **Default.** Use a specialized method only when a named uncertainty demands one.

### Estate & lineage

| ID | Method | Helps answer | Useful when / caution |
|---|---|---|---|
| `M-101` | Source-base declaration | What is the complete accepted source set? | Broad synthesis; overkill for a single-file fix. See `v4_C2_source_base_declaration.md` |
| `M-102` | Controlling-terminus recovery | Which artifact controls, and where does its lineage end? | Whenever "latest" and "authoritative" may differ. Usually cheap |
| `M-103` | Authority / supersession / maturity matrix | Binding, candidate, or superseded — and how mature? | Several artifacts speak to one topic; skip if one contract clearly owns it |
| `M-104` | Zero-unknown coverage manifest | Have I accounted for everything, even unread? | Exhaustive accounting, selective depth. See `v4_C3_C4_estate_coverage_preflight.md` |
| `M-105` | Branch-only / quarantined-state recovery | Is controlling material off `main`? | Cite immutable commit/blob; never resume a stale branch in place |
| `M-106` | Novelty / `EXISTS-AS` dedup sweep | Is this new, or already canon renamed? | Before minting vocabulary or a domain. Strong anti-bloat move |
| `M-107` | Forensic inheritance audit (declared cutoff) | What did this inherit, and what silently changed? | Long, possibly-corrupted history. Expensive — not casual |
| `M-108` | Coverage matrix + missing-evidence scan | What is *missing*, not merely unread? | Pairs with `M-104`; weak standalone |

### Reality & comparators

| ID | Method | Helps answer | Useful when / caution |
|---|---|---|---|
| `M-201` | Incumbent steelman | What's the strongest version of their position? | Before any "we beat X" claim. A weak steelman invalidates the result |
| `M-202` | Incumbent composite test | Could several incumbents combined replace us? | Fragmented markets. Harder and more honest than single-incumbent |
| `M-203` | Build / buy / wrap / partner / host | What must we own vs consume? | Capability boundaries; not before seams are identified |
| `M-204` | Seam-tax accounting | What integration cost remains after composing? | Comparing "own it" vs "compose it" |
| `M-205` | Field reality map | What's actually true operationally here? | Unfamiliar care/market setting; cite public refs |
| `M-206` | Official-source verification | Is our view of an external system current? | Before designing against it. A synthesis is not a source |
| `M-207` | Mechanism-first comparator translation | What mechanism do we borrow, minus their assumptions? | Any outside pattern. Take the mechanism, not its ownership/economics |
| `M-208` | Actor / role / principal authority map | Who may decide, act, and commit? | Before modelling permissions or agent authority |
| `M-209` | Ownership & responsibility ladder | Where does responsibility escalate and end? | Accountability and access-funnel questions |

### Synthesis

| ID | Method | Helps answer | Useful when / caution |
|---|---|---|---|
| `M-301` | Object / lifecycle / projection / capability / seam decomposition | Domain, lifecycle, projection, capability — or just a useful word? | Before naming anything new (payload-noun ≠ domain, `D0THES-GRD-026`) |
| `M-302` | Candidate-vs-commit audit | Accepted, or merely written down well? | Cheap; whenever status is asserted |
| `M-303` | Ownership / authority / custody / visibility / execution split audit | Are we conflating distinct powers? | Suspected god-object or hidden central authority |
| `M-304` | Decision-state reconciliation | What was decided, and does the estate agree? | Ledgers, plans and prose disagree |
| `M-305` | Domain & seam collision map | Do two domains claim the same truth? | Before minting a domain or contract |
| `M-306` | Maturity-layer separation | Architecture-mature, contract-mature, built, or proven? | Stops "designed" being read as "built" |

### Scenarios & traces

| ID | Method | Helps answer | Useful when / caution |
|---|---|---|---|
| `M-401` | Scenario library | What real situations must this survive? | **After** estate recovery, or you invent scenarios for the wrong model |
| `M-402` | Representative fixture selection | Which few cases actually discriminate? | Prefer over exhaustive expansion. Cheaper and sharper |
| `M-403` | Deep trace matrix | Does it hold end-to-end through a real case? | Small selected set only; expensive per trace |
| `M-404` | Operational-override trace | What happens when a human overrides it? | Authority and safety questions |
| `M-405` | Failure / retry / degraded-mode replay | How does it behave broken or degraded? | Before claiming operational readiness |
| `M-406` | Temporal / as-of reconstruction | Can we reconstruct what was true at a past moment? | History, audit, replay. See `v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md` |
| `M-407` | Cross-operator / federation trace | Does it hold across operators and partitions? | Multi-tenant and topology questions |

### Adversarial & independence

| ID | Method | Helps answer | Useful when / caution |
|---|---|---|---|
| `M-501` | Fresh-context re-derivation | Would a clean agent reach the same conclusion? | The prompt must not contain the answer, or it measures nothing |
| `M-502` | Blind-then-unblinded analysis | What does an independent analyst see before ours anchors them? | Must be blind **before** exposure |
| `M-503` | Builder / adversary / judge separation | Is whoever judges this also whoever built it? | High-consequence acceptance |
| `M-504` | Doctrine-breaker enumeration | What claims would break this, and do they? | Convergence passes; score held / bent / broke / open |
| `M-505` | Mutation suite | Would our rules catch a deliberately introduced violation? | Needs stated invariants first. See `v4_C4_3_care_response_seam_correction_continuity_test.md` |
| `M-506` | Counterexample search | Does one case falsify the claim? | Cheap; try before elaborate machinery |
| `M-507` | Competing decomposition comparison | Is there a better carve-up than ours? | Decomposition feels arbitrary. Expensive but decisive |
| `M-508` | Negative-control / null-detection calibration | Does the test report a finding when none exists? | Guards against tests that always pass or always alarm |
| `M-509` | Contradiction & invariant sweep | Do our own invariants conflict? | Cheap; before adding new laws |

### Market & vertical falsifiers

| ID | Method | Helps answer | Useful when / caution |
|---|---|---|---|
| `M-601` | Vertical-wedge falsifier | Does this hold in the vertical we intend to sell? | Grounds abstract architecture; pick the real wedge |
| `M-602` | Mixed-operator topology test | Standalone / co-located / partitioned? | Federation and partition questions |
| `M-603` | Mixed-financing test | Cash, insurance, membership, sponsored, mixed? | Commerce and coverage questions |
| `M-604` | Institutional-gravity test | Does physical / employment / referral lock-in defeat us? | Hospital and enterprise entry |
| `M-605` | Fleet / multi-instance test | Does it hold at N operators, not one? | Before scale claims |
| `M-606` | Incumbent absorption test | Could an incumbent just add this? | Moat claims |
| `M-607` | Portability / exit / switching test | Can a customer leave? | Ownership and non-captivity posture |

### Gates & hardening

| ID | Method | Helps answer | Useful when / caution |
|---|---|---|---|
| `M-701` | Gate-0 charter | What will this arc do, not do, and produce? | Uncertain home or estate, or scope needs an opening gate. Routine work may proceed under an existing accepted package |
| `M-702` | Desk check | Does it survive a careful manual pass against contracts? | Cheap final check before acceptance |
| `M-703` | Input-state receipt | What may the next stage rely on, falsify, and not assume? | Handing an open area forward **without** forcing false closure |
| `M-704` | Multi-angle authorability test | Can this actually be authored, from more than one angle? | Before committing to a large synthesis |
| `M-705` | Disposition ledger | Where did every finding go? | Closing a pass with many findings; prevents evaporation |
| `M-706` | Explicit verdict vocabulary | What outcomes are allowed, **including failure**? | Define before running or it cannot fail. e.g. `SPINE_READY` / `…WITH_NAMED_RECONCILIATIONS` / `NOT_READY` |
| `M-707` | Bounded fidelity patch | How do I fix a defect without reopening the design? | Review findings; state exact file scope |
| `M-708` | Byte review | Do committed bytes match what was accepted? | Before landing anything consequential |
| `M-709` | State-only landing normalization | How do I record acceptance without changing content? | Separate content commits from state commits (AWP §2.1) |
| `M-710` | Checkpoint / boot-path sync | Will the next agent boot to the right state? | Required at any Tier-2+ close (`D0CKPT-GRD-001`) |

### Evidence

| ID | Method | Helps answer | Useful when / caution |
|---|---|---|---|
| `M-801` | Source packet | What exactly did we read, at what version? | Outside material informs a decision |
| `M-802` | Concept registry / routing map | Where does each extracted concept belong? | Closing an evidence run |
| `M-803` | Anchor ledger | Which source supports which claim? | Claims must be traceable |
| `M-804` | External-evidence promotion gate | Has outside material earned authority? | Capture broad, promote gated (`D0THES-GRD-036`) |
| `M-805` | Official-source freshness | Current, or stale folklore? | Fast-moving external platforms |

**Also available, not written up:** chaos/fault injection · property-based testing · formal invariant specification · red-team/blue-team · premortem · decision-record diffing · adversarial dataset construction · A/B method comparison · cost-per-decision measurement · inter-rater reliability · time-boxed spike with mandatory discard · one-way vs two-way door classification · dependency criticality analysis · shadow/parallel-run comparison · canary evaluation.

---

## Structural cautions

Conditions, not prohibitions — each fails for a reason you can check, and none of these is a claim that OMNI tried and rejected something:

- Blind analysis only counts **before** exposure to our conclusion.
- Mutation testing needs **stated invariants** first, or passing means nothing.
- Parallel lanes need **meaningful decomposability** plus integration and collision controls; tightly coupled work usually gets collisions instead of speed.
- Comparator research **informs, never binds**.
- Set the **evaluator and allowed verdicts before** seeing results, or the test cannot fail.
- **Recover the estate before** broad scenario expansion.
- If you can't say what result would change a decision, the test is theatre.

## If you want to record a choice

```
Uncertainty:
Method(s), if any:
Why:
Material alternative rejected:
Evaluator / stop:
```

One line is plenty for `METHOD-000`. Not required for routine bounded work.

<!--
type: manifest_or_catalog · authority: derived_nonbinding · agent_read_rule: consult_if_routed
optional lookup; no required order/method/count; METHOD-000 valid; originates no architecture or execution authority
deliberately carries NO usage counts, effectiveness ratings, maturity tiers, lifecycle policy, or deprecation machinery
edit or remove entries through ordinary review; durable cautions belong in 06_guardrail_antipattern_digest.md
decision: D0CKPT-DEC-006 (review_required at v0)
-->
