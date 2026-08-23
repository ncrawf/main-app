# Evolution Narrative — Volume 11 (2026-08-23)

## The rule that was broken by the pass installing it

Document type: `narrative_or_postmortem`
Authority: `rationale_nonbinding` — chronicle only. Binding destinations are cited, never replaced.
Status: `active_open · rationale_nonbinding · not_promoted` — chronicles a method arc that is **accepted at review and NOT landed**; nothing here is active doctrine.
Domain(s): `architecture_governance`, `build_operations`, `governance_lifecycle`
Lifecycle role: Tier-3 rationale chronicle for the FAI G1 **method side lane** — Selection Accountability's interruption, the premature integration that followed, and the acceptance-boundary law that came out of it.
Source-of-truth relationship: nonbinding rationale only. Proposed mechanics live in `agent_work_protocol.md` §2.2/§2.3; concepts in `09_omni_build_os_layer_model.md` Layer 2/3; the anti-pattern in `06` `D0CKPT-GRD-006`; state in `03` `D0CKPT-DEC-010/011/012` and `HANDOFF_2026-08-23_method_acceptance_boundary_reviewed_pending_landing.md`.
Supersedes: `none` — does not supersede Volumes 2/4/5/6/7/8/9/10.
Superseded by: `none`
Manifest action: `add_tier2 · no_new_route_needed` — routed by the existing `docs/architecture/evolution_narrative*.md` wildcard.
Review gate: `user_knox_required`
Narrative arc action: **`new_volume`** (not `same_arc_addendum`) — Volumes 9 and 10 chronicle earlier, distinct arcs; this is a separate arc with a different trigger, a different object and a different discovery.

---

## Prior arcs consulted

**Volume 9 (2026-08-05)** — the AWP §2.1 proportionality rewrite. Directly adjacent: this arc adds §2.2 and §2.3 as *siblings* of §2.1 precisely because §2.1's applicability table exempts ordinary bounded work, which Volume 9's arc established. Volume 9 remains valid.

**Volume 8 (2026-08-03)** — pre-spine portfolio reconciliation and the relay-transport observation now parked at `FWREG-019`. Relevant because this arc re-tested the relay question and found the constraint is Knox↔repository, not Opus↔Opus.

**Volume 10 (2026-08-08)** was reviewed for overlap and is a distinct arc; it is not superseded. Volumes 2/4/5/6/7 were not load-bearing here and remain valid historical rationale.

## Where the arc started

Not as method work. The Authority object (`§G1-AUTH`) was recovering OMNI's authority architecture when it found **Selection Accountability** — that a system can include every option and still control the decision through ordering, ranking, defaulting, suppression, friction and delay. That falsified the sufficiency of a formal authority model, changed the G1 completion condition, and could not be parked in future work.

The interruption was legitimate. **What followed was not.**

## Why the pivot happened

Each sharpening of the finding was integrated into the main carrier before the candidate was semantically stable. Discover → integrate → cold review finds a collapse *inside the previous correction* → patch → new collapse. Every round was individually justified; needing that many of them was the defect.

That produced the first durable question: **when a discovery arrives inside active work, what actually happens to the work you were doing?** The estate had no answer. `§2.1` governed how to operate a partition once one existed; nothing governed the transition into one.

## What was discovered

The method lane then reproduced the same failure at a larger radius — normalizing a candidate, writing it into four Tier-0 doctrine surfaces, self-checking it, committing it as `active` law, and only then sending it for review. **The anti-hot-loop rule was installed by a hot loop.**

That failure is what produced the arc's most valuable output, and it was not the interrupt mechanism. The method candidate had been pushed onto the branch carrying the Authority object on the reasoning that *different files means no collision*. That test is wrong. **File collision and writer collision are not the only collisions** — acceptance, review-scope, merge-timing, lifecycle and branch-purpose collision are all real, and none of them produces a conflict marker.

Independent review then recovered, in order: that a branch, change set, review object, acceptance unit, landing group and acceptance transaction are six different things; that the unit of disposition is **claim-and-scope**, not document or object; that a unit must be **version-bound**, or independent acceptance inside one changing carrier is only theoretical; that **a review is immutable historical evidence and what a later change ends is carry-forward, not validity**; that **co-location is not shared support**; and that independence of review is **functional and conjunctive**, never established by a separate branch, thread or model instance.

The temporal correction is the one with reach beyond build method. `historically valid ≠ currently applicable ≠ carried forward ≠ superseded ≠ erased` is the same physics that governs consent revisions, professional-authority changes, delegated-authority envelopes, clinical recommendations and counterparty commitments — which is the Authority object's own subject, arrived at from the opposite direction.

## What got built

Nothing is active. Proposed at PR #19, accepted at review, unlanded:

- **`agent_work_protocol.md` §2.2** — Acceptance-boundary integrity, sited outside §2.1 so ordinary bounded work is not exempt.
- **`agent_work_protocol.md` §2.3** — Mid-work discovery, with minimum-scope holds and consequence-proportionate independent review.
- **`09` Layer 2 / Layer 3** — concepts, and the semantic (not path-based) enforcement obligation for future merge tooling.
- **`06` `D0CKPT-GRD-006`** — hot-loop integration as a boot-visible anti-pattern.

**No new artifact, registry, lane, agent type, control plane or gate was created.** The proof machinery is the collaboration model's existing §2.6 snapshot receipts.

## Mistakes corrected

Declaring active law before review. Reporting `already_landed = yes` beside `needs_human_review = yes` on an unmerged draft. Claiming a candidate was nonbinding *because of how it was authored* rather than because nobody accepted it. Giving method a hidden meta-authority over every object's gate. Closed enums for things that vary independently. Pushing global doctrine onto an object branch and calling it collision-free. Reintroducing editorial markers immediately after reporting the class clean — **twice**, because verification checked deltas rather than invariants. Importing the Authority object's unaccepted vocabulary into a PR that claimed separate acceptance. Leaving a superseded independence definition standing beside its replacement.

The pattern under all of them: **writing a rule and complying with it are different acts, and the author is the worst-placed party to notice the gap.** That is the argument for `§2.3` `I4`, earned rather than asserted.

## Canonical binding destinations

Proposed mechanics: `agent_work_protocol.md` §2.2, §2.3. Concepts and tooling obligation: `09_omni_build_os_layer_model.md` Layer 2, Layer 3. Anti-pattern: `06_guardrail_antipattern_digest.md` `D0CKPT-GRD-006`. Decisions, unit scopes, dependencies and verdicts: `03_decision_extraction_ledger.md` `D0CKPT-DEC-010/011/012`. Proof machinery: `operator_context_and_collaboration_model.md` §2.6. State and next gate: `HANDOFF_2026-08-23_method_acceptance_boundary_reviewed_pending_landing.md`. Still open and **not narrowed by this arc**: `FWREG-022`.

**This narrative binds nothing.** Where it and a canonical destination differ, the destination governs.
