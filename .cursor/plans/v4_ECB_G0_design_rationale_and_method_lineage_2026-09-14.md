# v4 — ECB Gate-0: design rationale and method lineage

Document type: `narrative_or_postmortem` — **arc design record.** Not a plan, not a charter, not a second operating account.
Authority: `rationale_nonbinding` (`D0THES-GRD-036`). **Originates no execution instruction, no acceptance, no architecture, no current state.**
Status: `closeout record` — historical evidence cutoff is the ECB R29 closure snapshot below. **Not updated to track later execution.**
Domain(s): `architecture_governance` · `cross_domain`
Lifecycle role: records what the ECB arc's design chose, why, from which sources, where each choice now lives, and what should **not** be assumed next time.
Source-of-truth relationship: **owns nothing.** Current ECB instructions and state live in `.cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md` `§1`.
Supersedes / Superseded by: none.
Manifest action: `add_tier2` — **PROPOSED, registration OWED.** Deliberately matching the ECB carrier's own posture: **no catalog row and no read-graph route are written by this document**, because ECB's own registration has been owed and unauthorized for twenty-nine revisions and this seat holds no intake authorization. See `§6`.
Review gate: `user_knox_required`

---

## §0 — What this is for, in one paragraph

**The operator's ask, verbatim in substance:** *"can someone please write down something simple, somewhere, that says — this arc was designed with these ideas, these sources, traced here."* The reason is not sentiment. **Several of the choices below had already been worked out in earlier arcs, were not carried forward, and had to be fought for a second time inside ECB's own design.** That is expensive and it is avoidable. **This file exists so the next designer can find the reasoning instead of re-deriving it, and so the next executor is not handed a rule with no visible origin.**

**It is not a standard.** Nothing here says future arcs must use ECB's gates, revision count, document count, case budget, staffing or field structure. A later arc may read this, inspect the sources, and adopt, adapt or reject any of it.

---

## §1 — Where this sits, and why it is not in `docs/architecture/`

**Recorded because the placement was actually contested, and the reasoning matters more than the outcome.** The review seat proposed landing this in `docs/architecture/` as a new volume in the evolution-narrative series. **That series is real** — nine volumes plus the base narrative sit there alongside the CNS taxonomy reconciliation, the communications topology, the phase-4h decision record and the pressure-test radar.

**It was rejected, and the operator was right on the substance.** `docs/architecture/` holds **fifteen** curated, long-lived records of OMNI's architecture and its evolution. `.cursor/plans/` holds **194** files and is where every arc lives — C2, C3.x, C4.x, FAI, and ECB itself. **This document is an arc artifact about how one arc was designed. It is not a chapter in OMNI's architectural evolution.** Filing it beside the evolution narratives would put arc-local process reasoning into a directory reserved for estate-level architecture records — and the fact that a directory is tidy is not a reason to put things in it.

**So it lives beside the carrier it explains, under the `v4_` arc convention that FAI and every prior arc already use.** The naming precedent is `v4_FAI_*`; this is `v4_ECB_*`.

---

## §2 — The design choices, with their reasons and their homes

**These are ECB's choices. They are not obligations owed by a later arc.** Read the *reason* column before borrowing anything from the *choice* column.

| choice | why — and what it does NOT imply | where it lives now |
|---|---|---|
| **One named subject and one maintained carrier, early** | The collaborators needed a single reviewable object rather than four parallel conversational designs. **Naming the subject decided no database object and no ontology.** One current operating account does **not** forbid a separate historical record — this file is the proof | ECB `§§1`–`2`, `§12.9.6`, `§13.5` |
| **Meaningful gates and bounded work units** | G0 defines the investigation, G1 runs it, G2 adjudicates the result. **RECONCILE/TRACE/EXTRACT are phases of work, not three agent messages, and not permission to finish a gate unsupervised.** Iteration stays free inside authorized scope | ECB `§§12.1`, `12.4`, `12.9.2`–`12.9.4` |
| **Techniques chosen from the repertoire, never performed because listed** | Method selection answers a named uncertainty. **The repertoire confers no execution authority** — FAI got this wrong in both directions, once routing execution rules into an invented "Arc Repertoire" and once making the optional catalog mandatory at every gate | `omni_work_method_repertoire.md`; ECB `§§0`, `13.1` |
| **Decisions and outputs defined before execution** | `D1`–`D8` bound what must be decided; Outputs A–D fix what must be produced. **Reuse, extension, simplification, a different decomposition, justified refusal and insufficient evidence must all remain truthful results** — the recomposition verdict was added because the menu could not express a legitimate subtractive answer | ECB `§§12`–`12.8` |
| **Evaluation specified before scoring** | A trace binds its candidate version, assumptions, expected predicates and limits **before** results are seen. A wrong candidate can fail, justified non-action can pass, and *underspecified* stays a real outcome rather than a forced pass/fail | ECB `§§11`, `12.9.4`–`12.9.5` |
| **Coverage as an argument, not a case quota** | One case can discharge several obligations; inapplicability must be justified rather than padded. **Present-day success cannot substitute for materially different frontier conditions** | ECB `§§9`–`11`, `12.4`–`12.5` |
| **Review responsibilities separated from headcount** | Author recovers and synthesizes; reviewer independently judges adequacy. **Access overlaps; responsibility does not.** Neither *"one seat reads and the other adjudicates a summary"* nor *"both reread everything every pass"* | ECB `§12.9.7` |
| **Competitive and participation pressure kept inside the operating question** | Whole arrangements compared over the same span, including refusal, disclosure limits and total burden. **Existing competitive estate is inherited and challenged at its scope, not rebuilt from brand stereotypes**, and no market-sizing exercise was made compulsory | ECB `§§11.6`, `12.7` `D6`/`D8`, `12.8`, `13.2` |

---

## §3 — Lessons that had to be recovered a second time

**This is the part worth reading before designing another arc.** Each of these was already articulated somewhere in the estate, was not carried forward, and cost real effort to recover inside ECB.

| lesson | what ECB now does about it | traced to |
|---|---|---|
| **A followed route and a working search can still produce the wrong source field** | Source selection follows **what the claim's scope requires**, not the catalog, the inherited route, or the vocabulary already in the draft. **Verification of what you wrote and discovery of what you omitted are different tasks.** A finite file inventory is not a knowledge denominator | FAI `§E4c` — a population *"derived from a route that never named it"* where *"the exclusion manufactured a false completeness claim"* · ECB `§13.2` |
| **Authority, merit and realization can disagree** | Three questions answered separately: what governs · what is best supported · what is implemented. **A strong unratified source may change a candidate immediately and may not self-promote; classification governs what may BIND, never what may IMPROVE** | FAI `§4.18.1`–`§4.18.2` — *"declared posture is a claim, not force"* · R8 `§4.2` — *"no candidate requires an estate ancestor"* · ECB `§13.0` ⑥ |
| **A hard-won authority resolution should be reusable** | Record claim, intended use, references, limits and revalidation trigger. A successor **checks currency and reuses with attribution** rather than re-deriving. *Otherwise the failure just moves from "nobody checked" to "everybody rechecked"* | ECB `§13.0` ⑥, `§13.2` |
| **A list of reads is not recovery; a finding is not a control** | Acquisition · materiality · independent adequacy stay **separately answerable** at the output boundary. Tested unavailability answers only the first | FAI `§G1-CONTRACT.b` — *"A finding is not a control. This row is the control."* · ECB `§§12.4`, `13.2` |
| **Fresh agents need the plan, not a handoff about it** | Entry is to the carrier: read it in full once, recover your **actual** assignment, state checked entry evidence. **A handoff cannot fix handoff drift, because the drifted handoff is the failure** | AWP `§2.1` · ECB `§§0`, `12.9.1`–`12.9.3` |
| **Continuity is not the same as method inheritance** | An object can have flawless handoff hygiene while being judged under a method that changed beneath its author. **Proposed, accepted, landed and consumed-by-the-object are four states** | FAI R8 `§4.4`, carrier `§4.18.5` · ECB `§12.9.7a` |
| **Information moves by semantic responsibility, not by copying documents** | Scope placement and architecture-subject specialization are **independent movements**. **Four citations for four ingredients establish nothing about the relationship among them** | FAI R8 `§0.6`, carrier `§4.18.3` · ECB `§13.0` ⑦⑧ |
| **A repair must reach the operative text, not sit beneath it** | Replacing an assertion means **removing** the contradictory wording, not appending an opposing paragraph. **And checking quotations does not verify the causal claims written between them** | ECB `§§12.9.6`–`12.9.7`, and the R22–R28 correction record |

---

## §4 — What went wrong during this arc's own design

**Recorded plainly, because a rationale document that only lists good decisions is worthless.** ECB's design took twenty-nine revisions and six agent contexts. The recurring failures, all preserved in the carrier's `§16`:

**Under-inheritance** — reaching for a new mechanism when the estate already held one, repeatedly. **Repair-by-appending** — writing a correction beneath the claim it superseded and leaving both standing; five recorded instances, one inside the acceptance record itself. **Overclaimed discovery** — asserting that sources were unrouted when the read graph already named them. **A fabricated causal history** — turning a verified quotation's neighbour into an invented explanation, committed in the same revision that installed the rule against it. **Search-miss-as-absence** — using *"zero occurrences"* as evidence of conceptual absence to justify two hypotheses.

**The pattern underneath all five:** confident reporting outrunning verified work. **The controls in ECB `§§12.9.6`–`12.9.7`, `§13.0` and `§13.2` exist because of these specific failures, not as generic rigor.**

---

## §5 — What should not be copied forward

Do not inherit the discarded six-gate proposal, the P35-only definition of success, the claim that routine success supplies frontier proof, a universal intervention object or lifecycle, a mandatory case quota, compulsory reviewer headcounts, or the presumption that integrated competitors cannot do this work. Do not inherit absence claims derived from failed searches, or a requirement that an entrant produce criticism as proof of reading.

**Equally, do not read ECB's clean review pass as proof of anything it did not test.** It does not establish that future agents will comply, that the estate was fully recovered, or that any care arrangement is clinically safe, implemented, adopted or commercially viable. **Design discipline is specified here, not demonstrated.**

---

## §6 — Source map, and the registration this document does not perform

**Refs are historical coordinates, not a live-state mirror.** For current execution read the carrier; for a substantive claim open the native body rather than citing this file.

- **ECB closure snapshot** — head `95d56f96a4c7dc3373e30db2e8950db3c09c5bcf`, carrier blob `f2c98e6642193d6c635a9a81c69cddd4ebfb1566`. **Design accepted R24** (`00e2e97c` / `44ae518f`); **execution method accepted R28** (`aeaec5f0` / `6dbb44e1`). **Two separate facts: R24's bytes do not contain the R25–R28 amendments.**
- **FAI reference** — `65f310e0b40901cb4f34bb607d92b37ecf9be043`. Carrier `v4_FAI_G1_operating_model_carrier_2026-08-10.md` (blob `9835715e…`, hash-verified before citation); `v4_FAI_omni_architecture_arc_execution_plan_2026-08-09.md`; `v4_FAI_PRE0_preflight_brief_and_protocol_2026-08-09.md`; `HANDOFF_2026-08-23_fai_g1_paused_by_operator.md`. **FAI's candidate and object-local method was adopted as ECB behaviour where stated; none of it is promoted to universal doctrine by this file.**
- **Shared routing and continuity** — `doctrine/04_manifest_read_graph.md` Major-Arc Intake · `doctrine/omni_work_method_repertoire.md` · `doctrine/agent_work_protocol.md` `§2.1` · `doctrine/operator_context_and_collaboration_model.md` `§§2.5`–`2.7`.
- **Accounting exemplars** — `v4_C2_source_base_declaration.md`, `v4_C3_C4_estate_coverage_preflight.md`. **Already routed by Major-Arc Intake before ECB linked them locally.**

> **Two review instructions were NOT followed, and the reasons are recorded rather than buried.** The review seat directed (a) landing this in `docs/architecture/` — **rejected**, see `§1` — and (b) writing a corpus-catalog row and a Major-Arc Intake precedent pointer. **(b) is declined as an overreach at this moment, not on the merits:** those are protected shared surfaces, **ECB's own catalog row and route `#9w` have stood OWED and explicitly unauthorized across twenty-nine revisions**, and this seat holds no intake authorization that would cover a new document while the parent's remains withheld. **Registering both together, under one authorization, is the coherent act.** The `add_tier2` proposal in the passport stands; the write does not happen here. **This file is therefore reachable by path and by the carrier's `§16` link, and is NOT yet discoverable through the catalog or the read graph — stated plainly so nobody records it as fully landed.**
