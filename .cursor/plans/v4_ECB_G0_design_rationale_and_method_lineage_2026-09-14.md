# v4 — ECB Gate-0: design rationale and method lineage

Document type: `narrative_or_postmortem` — **arc design record.** Not a plan, not a charter, not a second operating account.
Authority: `rationale_nonbinding` (`D0THES-GRD-036`). **Originates no execution instruction, no acceptance, no architecture, no current state.**
Status: `closeout record` — historical evidence cutoff is the ECB R29 closure snapshot below. **Not updated to track later execution.**
Domain(s): `architecture_governance` · `cross_domain`
Lifecycle role: records what the ECB arc's design chose, why, from which sources, where each choice now lives, and what should **not** be assumed next time.
Source-of-truth relationship: **owns nothing.** Current ECB instructions live in the carrier, `.cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md`; its `§1` owns current **state**, not every instruction.
Supersedes / Superseded by: none.
Manifest action: `add_tier2` — **PROPOSED, registration OWED.** Deliberately matching the ECB carrier's own posture: **no catalog row and no read-graph route are written by this document**, because ECB's own registration has been owed and unauthorized for twenty-nine revisions and this seat holds no intake authorization. See `§6`.
Review gate: `user_knox_required`

---

## §0 — What this is for, in one paragraph

**The operator's ask, verbatim in substance:** *"can someone please write down something simple, somewhere, that says — this arc was designed with these ideas, these sources, traced here."* The reason is not sentiment. **Several of the choices below had already been worked out in earlier arcs, were not carried forward, and had to be fought for a second time inside ECB's own design.** That is expensive and it is avoidable. **This file exists so the next designer can find the reasoning instead of re-deriving it, and so the next executor is not handed a rule with no visible origin.**

**It is not a standard.** Nothing here says future arcs must use ECB's gates, revision count, document count, case budget, staffing or field structure. A later arc may read this, inspect the sources, and adopt, adapt or reject any of it.

---

## §1 — Where this sits

**This arc-local design and method record lives beside the ECB carrier in `.cursor/plans/`, at the operator's direction.** It explains the design without becoming a second operating plan, and it establishes no repository-wide rule about what may or may not belong anywhere else.

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
| **Review responsibilities separated from headcount** | Author recovers and synthesizes; reviewer independently judges adequacy. **Access overlaps; primary responsibilities differ — and each seat substantiates its own claims.** Neither *"one seat reads and the other adjudicates a summary"* nor *"both reread everything every pass"* | ECB `§12.9.7` |
| **Cumulative source recovery, and interruption that survives** | **A list of reads is not recovery.** The live record carries source and section, **reader and depth**, what the source confirmed or changed, **uninspected scope**, and the next required read — maintained *during* work, not reconstructed after. Interacting findings trigger a **synthesis checkpoint**. **A replacement resumes the recorded partial account; it neither restarts the survey nor inherits a completion claim, and running out of context is a legitimate stop and an illegitimate relevance judgment** | ECB `§13.2`, `§12.9.6`, `§15.4`; inherited from FAI's Output-4 recovery method |
| **One writer, explicit transfer, exact review inputs** | **One active writer for the maintained carrier; reviewers inspect an identified snapshot and return findings the author dispositions; replacement is explicit rather than assumed.** **A moved branch head does not by itself establish changed reviewed content** — head and content blob are different facts, and this is distinct from tracking a changed *method* | ECB `§12.9.7a`; AWP `§2.1`; collaboration model `§2.6` |
| **Consolidation into something a downstream author can use** | **Outputs A–D are the point, and Output D is the safeguard against a beautiful document followed by an owner queue.** Surviving findings acquire an **obligation, realization target, responsible decision or enforcement path, applicability, failure condition and honest proof posture** — assigned *during* consolidation. **A named owner does not answer an unresolved operating question**, and the authorability test makes usability observable rather than asserted | ECB Outputs A–D, `§12.3`, `§13.0`, `§13.4` |
| **Competitive and participation pressure kept inside the operating question** | Whole arrangements compared over the same span, including refusal, disclosure limits and total burden. **Existing competitive estate is inherited and challenged at its scope, not rebuilt from brand stereotypes**, and no market-sizing exercise was made compulsory | ECB `§§11.6`, `12.7` `D6`/`D8`, `12.8`, `13.2` |

**On an integrator seat, because the question was asked and the answer is not obvious.** **FAI defined one and it stayed `VACANT`** — its charter declared the integrator vacant, and FAI then used its own vacancy as a live trace: *"a seat with no holder — demonstrated live by the vacant integrator,"* with the point being that **the vacancy had to survive its own repair.** **ECB has no integrator seat and does not need one at this scope.** An integrator exists to serialize writes when multiple lanes contend for a shared surface; ECB is **one carrier, one writer, reviewers on named snapshots**, which `§12.9.7a` already states, and the governing rule is explicit that a standalone lane owes **no** launch envelope, integrator or parent integration transaction. **The condition that would change it:** if the operator activates concurrent lanes writing the same carrier, the single-writer rule stops being sufficient and a serialization owner becomes a real requirement — **decided then, on the actual collision, not pre-created now.**

---

## §3 — Lessons that had to be recovered a second time

**This is the part worth reading before designing another arc.** Each of these was already articulated somewhere in the estate, was not carried forward, and cost real effort to recover inside ECB.

| lesson | what ECB now does about it | traced to |
|---|---|---|
| **A followed route and a working search can still produce the wrong source field** | Source selection follows **what the claim's scope requires**. **The catalog and read graph are used — they are starting indexes, not completeness certificates**, and the carrier requires both using them and challenging their omissions. **Verification of what you wrote and discovery of what you omitted are different tasks.** A finite file inventory is not a knowledge denominator | FAI `§E4c` — a population *"derived from a route that never named it"* where *"the exclusion manufactured a false completeness claim"* · ECB `§13.2` |
| **Authority, merit and realization can disagree** | Three questions answered separately: what governs · what is best supported · what is implemented. **A strong unratified source may change a candidate immediately and may not self-promote; classification governs what may BIND, never what may IMPROVE.** **External evidence and the agent's own reasoning are legitimate candidate inputs on the same terms** — basis stated honestly, claim tested, no estate ancestor required, and no pretence that reasoning establishes an empirical fact | FAI `§4.18.1`–`§4.18.2` — *"declared posture is a claim, not force"* · R8 `§4.2` — *"no candidate requires an estate ancestor"* · ECB `§13.0` ⑥ |
| **A hard-won authority resolution should be reusable** | Record claim, intended use, references, limits and revalidation trigger. A successor **checks currency and reuses with attribution** rather than re-deriving. *Otherwise the failure just moves from "nobody checked" to "everybody rechecked"* | ECB `§13.0` ⑥, `§13.2` |
| **A list of reads is not recovery; a finding is not a control** | Acquisition · materiality · independent adequacy stay **separately answerable** at the output boundary. Tested unavailability answers only the first | FAI `§G1-CONTRACT.b` — *"A finding is not a control. This row is the control."* · ECB `§§12.4`, `13.2` |
| **Fresh agents need the plan, not a handoff about it** | Entry is to the carrier: read it in full once, recover your **actual** assignment, state checked entry evidence. **A handoff cannot fix handoff drift, because the drifted handoff is the failure** | AWP `§2.1` · ECB `§§0`, `12.9.1`–`12.9.3` |
| **Continuity is not the same as method inheritance** | An object can have flawless handoff hygiene while being judged under a method that changed beneath its author. **Proposed, accepted, landed and consumed-by-the-object are four states** | FAI R8 `§4.4`, carrier `§4.18.5` · ECB `§12.9.7a` |
| **Information moves by semantic responsibility, not by copying documents** | Scope placement and architecture-subject specialization are **independent movements**. **Four citations for four ingredients establish nothing about the relationship among them** | FAI R8 `§0.6`, carrier `§4.18.3` · ECB `§13.0` ⑦⑧ |
| **A repair must reach the operative text, not sit beneath it** | Replacing an assertion means **removing** the contradictory wording, not appending an opposing paragraph. **And checking quotations does not verify the causal claims written between them** | ECB `§§12.9.6`–`12.9.7`, and the R22–R28 correction record |

---

## §4 — What went wrong during this arc's own design

**Recorded plainly, because a rationale document that only lists good decisions is worthless.** The recurring failures across ECB's design, all preserved in the carrier's `§16`:

**Under-inheritance** — reaching for a new mechanism when the estate already held one, repeatedly. **Repair-by-appending** — writing a correction beneath the claim it superseded and leaving both standing; recorded repeatedly, including once inside the acceptance record itself. **Overclaimed discovery** — asserting that sources were unrouted when the read graph already named them. **A fabricated causal history** — turning a verified quotation's neighbour into an invented explanation, committed in the same revision that installed the rule against it. **Search-miss-as-absence** — using *"zero occurrences"* as evidence of conceptual absence to justify two hypotheses.

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

> **Registration, performed rather than deferred.** Both ECB documents are registered together in `doctrine/01_master_corpus_catalog.md`, and two reading paths are added to `doctrine/04_manifest_read_graph.md`: **ECB execution work routes to the carrier; later arc-design or method-recovery work routes here, as conditional precedent.** **Registration classifies and routes — it moves nothing, promotes nothing to doctrine, accepts no architectural conclusion and activates no arc.** Registering the companion while the parent stayed unregistered was incoherent, and so was leaving both unregistered; **they land in one change.** **Honest publication status: these changes live on branch `cursor/ecb-g0-reconnaissance-6a09` in PR #20 and are NOT on `main`. A branch-only change is not default-branch discoverability** — the remaining act is the merge decision, which is the operator's.

> **One review instruction was not followed:** the proposal to file this record in `docs/architecture/`. Declined — that directory holds estate-level architecture records; this is an arc artifact and belongs beside the arc it explains. **No general rule about that directory is established or implied.**
