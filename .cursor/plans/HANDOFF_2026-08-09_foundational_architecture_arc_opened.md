# HANDOFF 2026-08-09 — Insurance frozen · foundational architecture arc chartered

Document type: `handoff_or_readiness_gate` — **continuity artifact, NOT a checkpoint repoint**
Authority: `derived_nonbinding`
Status: `active · arc_chartered_pending_acceptance · insurance_frozen · checkpoint_repoint_OWED_and_BLOCKED`
Domain(s): `architecture_governance` · `portfolio_sequencing` · `insurance_payer_oop`
Lifecycle role: carries the 2026-08-09 session across a context boundary.
Source-of-truth relationship: **owns nothing.** Arc state → the Gate-0 charter. Insurance state → the Gate-2 brief and the frozen result. Program state → the current checkpoint, which this file does **not** repoint.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier3` **PROPOSED** — not landed.
Review gate: `user_knox_required`

> **This handoff does NOT repoint `AGENTS.md`, read-graph Tier-0 #15, or the current checkpoint.** `PRESPINE-PHASEA-INTEGRATOR` is **VACANT**, and the checkpoint forbids landing a shared control-plane surface while it is. **That repoint is owed and blocked — see §4. It is the single obligation that must clear before this arc can legitimately become the program's next action.**

---

## §1 — What happened

Insurance Gate 2 was constructed (`R0`), reviewed and rejected four times, and produced a real result and a real failure. **The result:** Axis 1 survived a 23-row residual drive; Axis 2 remains viable at 6/10 anti-shadow criteria demonstrated, 4 conditional, 0 failed. **The failure:** roughly half of what the gate reported as new findings already existed in the estate, better decomposed, and the gate could not see them.

Traced to two mechanical defects, both verified: **route `9p`** (the Gate-2 read floor) routes the Insurance chain and nothing else, so Care §5b never entered the packet; **route `#9g`** (Reactor) is `consult_if_routed` and nothing routes to it, so a closed, adversarially-tested constitutional candidate was invisible to three later arcs.

**The operator's call: this is a crossroads, and the foundational question comes before the spine, the thesis and the contracts.** Knox concurred and rejected both alternatives (return to Insurance; pointer-only transaction).

---

## §2 — State

| Item | State |
|---|---|
| **Insurance Gate 2** | **FROZEN.** PR #14 open, draft, **unmerged**, head `4959218`. Verdict `SURVIVES_WITH_NAMED_RECONCILIATIONS`, **provisional, discharge incomplete, artifact NOT accepted** |
| `C3.9` | **not started** — unchanged `shell_pending_population` |
| `E2` | **not started** |
| **`OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL`** | **chartered at R3, not started**, on its own branch `cursor/fai-foundational-architecture-30f4` from `main @ 9a6e7de`. Existence is DECIDED, not tested. Gate 0 completes on Nick + Knox acceptance |
| Integrator | **VACANT** |
| Program checkpoint | **unchanged** — 2026-08-09 checkpoint still current |

---

## §3 — The findings that must not evaporate

1. **`EVRUN-2026-000008` is CLOSED**, not blocked — `analysis_closed · adjudicated_nonbinding`, 2026-07-18, Builder 63.2 / Adversary 47.0, 31/31 conformance green. Reactor **strengthened and narrowed, not promoted**. *Opus asserted "blocked" from a stale `WI16` index row; Knox corrected it.*
2. **`WI16` — which calls itself the durable home — is three weeks stale about its own successor run.** `D0CKPT-GRD-004` failure class at the watch-list layer.
3. **Tier-0 #14, `coherent_omni_architecture_pattern_2026-05-17.md`, is on the mandatory Universal Path**, says *"future pillars start from this shape, not from scratch,"* and **was not loaded at boot by this agent.** Non-compliance, not a routing gap. It is also materially stale relative to everything built since.
4. **Care §5b already carries execution admissibility** as four projections with an anti-collapse `[INV]`; **§5b.1 `approval_requirement` already carries `dual_control`.** Both were re-derived as new.
5. **C4.6 `C6`** (margin-only counterfactual) is an existing runnable proof shape for §9 Law 2. Both reviewers proposed inventing it.
6. **GCE is the ratified answer to the connector tsunami** — Slack, Gmail, payroll, banks, suppliers, agents — *"emits to and ingests from any actor/system, internal and external; two faces, one spine,"* measured by `GRD-034`. **No arc instantiates it as a blueprint; each re-derives a profile shaped like it.**
7. **Founding diagnosis of the new arc: installation maturity and evidence maturity are orthogonal axes.** Reactor was held to a production-evidence bar for the right to have an address. That is why it was invisible.
8. **The comparator registry carries FHIR as a payload standard and never as a profiling method** — which is why six months of "we've mentioned FHIR" produced no variability discipline.

---

## §4 — What is OWED and BLOCKED

| Owed | Blocked on |
|---|---|
| checkpoint repoint (this arc becomes the program's next action) | **integrator VACANT** |
| catalog rows for the four new artifacts | integrator |
| read-graph route for the arc — **and the load-bearing fix: an obligation that every loop/profile arc routes to the foundational system** | integrator |
| `08` parent row for the arc's open questions | integrator |
| `WI16` stale-state correction | integrator |
| Insurance landing packet from the frozen Gate-2 result §17 | integrator |

**A holder must run a freshness + collision check and record it before any of the above lands.**

---

## §5 — Next

**Nick + Knox accept, amend, or reject the Gate-0 charter.** Nothing auto-starts. Gate 1 does not begin until the charter and the execution plan are accepted. **The single-law probe was deleted at R1 — Gate 1 is the installation of the real package, not a test.**

**R1 rewrite (2026-08-09, post-Knox):** the existential test and the single-law probe are DELETED — the operator's "outpost" meant the first permanent structure at the real site, not a test cabin. `.cursor/plans/` is rejected as the final home. The FAI files were split onto their own branch; Insurance and FAI do not share closure. **R2 (post-Knox):** the whole is named **OMNI Architecture** — un-branded, no coinage, no `constitution`. **Reactor is classified: a candidate cross-cutting architecture STANDARD for consequential transitions — not dead, not the whole, not unsettled.** **Taxonomy diagnosis corrected: TWO taxonomies exist and are mutually invisible** — the governance-category enum (10 categories, no `contract`, while 16 contracts exist) and the ratified `00_architecture_artifact_index.md` (12 architecture roles, no `standard`/`pattern`/`profile`/`conformance`/`vocabulary`/`view`). Not an absence — a schema mismatch plus a stale role set. **Four additions, all operator-raised: two profile axes (operating-area vs deployment), variation points as the answer to enterprise customisation, instance and fleet views, and architecture change control.** Sequencing answered: **the taxonomy IS the stake; organize → state (spine) → explain (thesis).**

**If the charter or plan is rejected: revise them.** The foundational arc itself is DECIDED and does not return to `WI16`, and Insurance does not unfreeze. *(This clause previously said rejection unfreezes Insurance — stale against the operator's decision, corrected at R3.)*

**Artifacts from this session:** `v4_FAI_G0_foundational_architecture_reconciliation_and_install_charter_2026-08-09.md` (R3) · **`v4_FAI_omni_architecture_arc_execution_plan_2026-08-09.md` (the plan the next agent runs)** · `v4_FAI_G0_opus_thread_verbatim_2026-08-09.md` (operator-populated) · `v4_FAI_G0_knox_thread_verbatim_2026-08-09.md` (operator-populated) · this handoff · the frozen Insurance result on PR #14.

**STOP: `insurance_frozen · foundational_arc_chartered_pending_acceptance · checkpoint_repoint_owed_integrator_vacant`**
