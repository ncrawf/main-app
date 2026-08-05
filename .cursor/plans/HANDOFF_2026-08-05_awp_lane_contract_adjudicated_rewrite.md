# HANDOFF — 2026-08-05 · AWP §2.1 adjudicated rewrite (durable-work contract made proportional)

Document type: `handoff_or_readiness_gate`
Authority: `derived_nonbinding` — continuity record only. **It originates nothing and inherits no authority from the doctrine it describes.** The binding candidates are AWP §2.1 and Build OS `09`/`10`; their proposed disposition is recorded in `D0CKPT-DEC-007`.
Status: `pushed_branch_candidate_pending_review · mechanics_ADJUDICATED · rewrite_PROPOSED_at_PR#3 · NOT_merged_NOT_accepted · lane_launch_STILL_HELD · D0THES-REV-212_OPEN`
Domain(s): `architecture_governance`, `build_operations`
Lifecycle role: `continuity record for the D0THES-REV-212 adjudication transaction. Records what two independent reviews found, what was ruled, what is PROPOSED on the pushed branch, and what remains gated. Does NOT change the program gate — the Aug-3 checkpoint remains the current checkpoint — and does NOT itself bind anything.`
Source-of-truth relationship: `binding candidates are agent_work_protocol.md §2.1 and 09_omni_build_os_layer_model.md Layer 2; their proposed disposition is recorded in D0CKPT-DEC-007, supersession D0CKPT-SUP-001, guardrail D0CKPT-GRD-003. This handoff routes to them and originates nothing. A continuity record does not inherit the authority of the doctrine it describes.`
Supersedes: `none` (the review packet HANDOFF_2026-08-05_agent_work_blueprint_mechanics_independent_review.md is CONSUMED — its stop condition is met)
Superseded by: `none`
Manifest action: `add_tier2 · no_new_route_needed` (reached through the current Aug-3 checkpoint §4.1a)
Review gate: `user_knox_required`

---

## §1 — What happened

The Phase-A lane mechanics were built and repeatedly corrected inside one long working session. On 2026-08-05 the bytes were **frozen** and handed to two **independent** reviewers — a fresh Knox and a fresh Opus — who worked read-only and submitted **without coordinating**.

**Both returned `MATERIAL_REWRITE`.** They converged on all four defects and on the answers to the residual open questions. Nick then delegated adjudication to Opus and authorized the write. This handoff records that transaction.

## §2 — What the two reviews agreed on (independently)

| Defect | Finding |
|---|---|
| **Trigger overreach** | §2.1 made any durable partition — own branch/worktree, own output object, or a named owner — invoke `parallel_work_package` classification **and an accepted launch envelope**. Nearly every ordinary branch became a formal package. |
| **Core/overlay misclassification** | Integrator role, parent integration transaction, integrator-transfer law and provisional-until-integrated status were marked **universal core**, though a standalone lane needs **none** of them. |
| **Label inversion** | `parallel_work_package` was retained while explicitly disclaiming concurrency, independence and plurality — a name meaning the opposite of itself, and the root of the boot/routing contradiction. |
| **Envelope-shape overreach** | A "Parallel Launch Envelope" header and full envelope schema survived on what had become a general contract. |

Both also concluded: **no standalone Agent Work Blueprint document is owed** (the capability is `09` concepts + AWP mechanics + instance carriers); **`parallel_work_package` should be retired, not reinterpreted**; **base-binding and two-reference boot are conditional**, and the six-plus pre-launch base rotations indict *prose duplication*, not the mechanism.

## §3 — Where they differed, and how it was adjudicated

| Question | Knox | Opus | Ruling |
|---|---|---|---|
| Shape of the model | continuity × coordination **2×2** (four postures incl. *coordination without durability*) | linear **three-rung ladder** | **Knox.** The 2×2 captures `coordinated_bounded`, a real cell the ladder collapsed. |
| `09` "mandatory reintegration" | too broad — reconciliation is owed only where reconciliation is required | had retained it | **Knox.** `09` narrowed accordingly. |
| Clause-level disposition | table of retain/modify/move/delete | same, plus explicit **split** of old clauses 6 and 8 and a prior-numbering→`L*`/`C*` reference map | **Opus.** Splits + reference map adopted (§10 Non-Loss). |
| Stale base pointer | **caught it** — `AGENTS.md` + read-graph still carried `51ead01…` | missed it | **Knox.** Verified live; fixed by deleting the duplicate and adding the Single-source law. |
| Primary framing | "trigger overreach" | "**obligation** overreach — keep the broad trigger, shrink the single-lane duty" | **Both, merged.** Trigger reworded to material-need *and* obligations made proportional. |

## §4 — What is PROPOSED on the pushed branch (files + sections) — PR #3, not merged

| File | Change |
|---|---|
| `.cursor/plans/doctrine/agent_work_protocol.md` **§2.1** | Full rewrite → *Durable Work — lane continuity contract + coordination overlay*. Two-question test + 4-posture table · trigger = material need not artifacts · eight durable facts (in an existing carrier, **no new document**) · `L1`–`L8` continuity law · `C1`–`C6` coordination law · integrator-transfer scoped to "only where the role exists" · conditional mechanics block (base pin · common base · base-binding · **new Single-source law** · two-reference boot) · "what this section does not require" · prior-clause reference map. |
| same **§7** | Execution-constraints pointer re-routed off "parallel work packages" onto proportional posture. |
| same **§9** | `parallel_*` field block replaced by `work_posture` declaration + **conditionally emitted** field groups. Ends the `not_applicable` enumeration burden. |
| `.cursor/plans/doctrine/09_omni_build_os_layer_model.md` Layer 2 | "mandatory reintegration" → "reconciliation where it is owed"; Agent Work Blueprint marked **realized, not owed** (no doc required); standalone lane may be the whole package and complete directly; structure re-cut to continuity/coordination; current-state note rewritten. |
| `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md` Step 5 | De-"parallel"ed; future manifest fields made **conditional**, with an explicit rule that a manifest must never require a field the contract does not require. |
| `AGENTS.md` | Parallel/multi-lane work-class row → **two** rows (durable-lane · coordinated multi-lane/shared-surface); trigger sentence rewritten; **stale `51ead01…` base pin deleted** and replaced with a pointer to checkpoint §4.2; 2026-08-05 status updated to adjudicated. |
| `.cursor/plans/doctrine/04_manifest_read_graph.md` | "Parallel Work-Package Routing" → **Durable-Work Routing** with two-need trigger + expanded forbidden assumptions; #15 stale base pin deleted (pointer to §4.2); #15 status updated. |
| `03_decision_extraction_ledger.md` | **`D0CKPT-DEC-007`** added (narrows `D0CKPT-DEC-005`, which keeps its ID). |
| `05_supersession_conflict_ledger.md` | **`D0CKPT-SUP-001`** added — accepted interpretation materially narrowed. |
| `06_guardrail_antipattern_digest.md` | **`D0CKPT-GRD-003`** added (ceremony overreach + duplicated state, four named sub-patterns); `D0CKPT-GRD-002` rescoped off "parallel-lane". |
| `08_open_review_queue.md` | `D0THES-REV-212` updated — both submissions returned, adjudicated, rewrite proposed on PR #3, **row stays OPEN** for Knox confirmation. |
| `HANDOFF_2026-08-03_…post_c4_4.md` | §4.1a rewritten to adjudicated / rewrite-proposed status (freeze retained as lineage); §4.2 hold note updated; status banner updated; **checkpoint's own duplicated base tokens removed from the `Status:` string per Single-source law — completed only in the correction pass (see §5), after Knox found the first pass had missed the abbreviated form.** |
| `v4_pre_spine_sufficiency_and_task_d_reentry_map_2026-08-04.md` §7/§7.1 | Conformance language updated; instance mechanics **unchanged**; explicit statement that this package's richness is not the general model. |
| `docs/architecture/evolution_narrative_volume_9_2026-08-05.md` | New Tier-3 arc record. |

## §5 — Verification / proof

- Current-state verified at `main` `74341a9a888d939cd0d3a8c5a6fb4ce8d91259ad` before any edit: all six frozen review-object blobs matched the packet; five lane branches all at the content base pinned in checkpoint §4.2, byte-identical, empty; all five declared lane output objects absent.
- **Stale base pointer independently reproduced** before fixing: `AGENTS.md` and `04_manifest_read_graph.md` both contained `51ead016adabea9fd8389a08d149aeda33f0a8f7`; every branch ref carried the current base.
- **★ CORRECTION (2026-08-05, Knox review of PR #3 head `50cb675`).** The first pass claimed the checkpoint's own duplicated base SHA had been removed. **That claim was false.** The verification grep matched only the 8-character form `51ead016` and therefore missed the abbreviated tokens in the checkpoint's top-level `Status:` string — `lane_content_base=51ead01_C1b_PINNED`, `content_from_C1b`, `five_lane_branches_pinned_to_C1b`. Knox caught it. **The corrective transaction had reproduced its own named failure**, which is precisely why `D0CKPT-GRD-003` exists. Those tokens are now removed; the `Status:` string carries only `phase_A_base_pinned_in_checkpoint_§4.2_single_owning_row`. Re-verified against both the full and abbreviated forms.
- **No lane branch was created, moved, re-pinned, or written.** No Insurance/Care/GRR/operator-economics/C4.5/Task-D/C3.9/spine/C5 work performed. No proof program executed. No new boot file. No new framework artifact, ontology, or control plane.

## §6 — Settled; do not re-litigate

- Continuity and coordination are **independent** axes; four postures, not a binary.
- A branch is **not** a lane; durability is earned by a real re-entry need.
- A standalone lane completes at **its own** §5 gate — no integrator, no parent transaction.
- Concurrency **never** establishes package membership; unrelated concurrent efforts stay separate packages.
- A coordinated package may have **zero** concurrency (coupled lanes are normally sequenced).
- `parallel_work_package` is retired as an active classification; `D0CKPT-DEC-005` keeps its ID.
- Live state is pinned in exactly **one** owning row; discovery surfaces carry pointers, never values.
- Phase-A's accepted envelope, source floors, common base, protected surfaces and integrator role are **unchanged**.

## §7 — Unresolved / open

1. **`D0THES-REV-212` remains OPEN** — Knox must review the proposed rewrite at PR #3 (pushed branch; NOT merged); Nick accepts. That is the sole closure condition.
2. **The rewrite is unproven in execution.** No lane has run under it. `D0CKPT-GRD-003`'s own law applies to this very change: keep only what demonstrably prevents an observed failure, and de-scaffold what proves ceremonial once Phase A actually executes.
3. **Layer-3 tooling remains future and evidence-gated** (`D0THES-REV-158`, `10` Step 5). Nothing here authorizes building it.
4. Whether `coordinated_bounded` (coordination without durability) needs any mechanics beyond `C1`–`C2` is untested — it was derived analytically, not from a real instance.

## §8 — Next gate / stop condition

**Next authorized action: Knox reviews this proposed rewrite at PR #3 (pushed branch; NOT merged) (`D0THES-REV-212`), then Nick accepts or returns corrections.**

Still HELD until then: no lane launch · no base rotation · no writes to any lane branch · Insurance remains the substantive priority but is not authorized to start. Successor phases (C3.9, final Task-D, full C4.5, spine, C5, all proof programs) remain gated exactly as before.

**Stop condition for this handoff:** Knox's review returned and Nick's acceptance recorded — at which point the lane hold may be lifted and Insurance activated as a `durable_lane` inside the coordinated `PRESPINE-PHASEA` package.

<!--
type: handoff_or_readiness_gate · authority: derived_nonbinding (continuity only; inherits no authority from the doctrine it describes)
status: pushed_branch_candidate_pending_review · rewrite_proposed_at_PR#3 · not_merged · lane_launch_still_held · D0THES-REV-212_open_pending_knox
decision: D0CKPT-DEC-007 · supersession: D0CKPT-SUP-001 · guardrail: D0CKPT-GRD-003 · narrows: D0CKPT-DEC-005
reached via the current Aug-3 checkpoint §4.1a (no new read-graph node)
-->
