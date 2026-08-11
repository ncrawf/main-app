# HANDOFF 2026-08-09 — Insurance frozen · foundational architecture arc chartered

Document type: `handoff_or_readiness_gate` — **continuity artifact, NOT a checkpoint repoint**
Authority: `derived_nonbinding`
Status: **`HISTORICAL — SUPERSEDED AS CURRENT STATE 2026-08-10`** · `insurance_frozen`

> **★ THIS IS NOT THE CURRENT CHECKPOINT.** FAI **Gate-0 was ACCEPTED 2026-08-10** and the `C-10` landing transaction executed. **Current state, holder receipt and next action live in `.cursor/plans/HANDOFF_2026-08-10_foundational_architecture_g1_startable.md`** (Tier-0, both boot surfaces point there). This file is retained as **arc-opening detail only** — its state rows describe the pre-acceptance packet and must not be read as current.
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
| **Insurance Gate 2** | **FROZEN.** PR #14 open, draft, **unmerged**, head `55e820d`. Verdict `SURVIVES_WITH_NAMED_RECONCILIATIONS`, **provisional, discharge incomplete, artifact NOT accepted** |
| `C3.9` | **not started** — unchanged `shell_pending_population` |
| `E2` | **not started** |
| **`OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL`** | **charter R9 · execution plan R8 · PRE-0 ledger R5** *(reconciliation completed at R2; R3 = mechanical normalization)* · **not started**, on its own branch `cursor/fai-foundational-architecture-30f4` from `main @ 9a6e7de`. Existence is DECIDED, not tested. Gate 0 completes on Nick + Knox acceptance |
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
| catalog rows for **eleven** artifacts — the **ten** now on the branch (charter · execution plan · 2 thread verbatim · this handoff · PRE-0 protocol · 3 PRE-0 verbatim · PRE-0 ledger) **plus the new G1-startable checkpoint** created by the landing transaction at `.cursor/plans/HANDOFF_2026-08-10_foundational_architecture_g1_startable.md`. **This handoff is NOT the checkpoint and must NOT be mutated into one after the fact** | integration holder |
| read-graph route for the arc — **and the load-bearing fix: an obligation that every loop/profile arc routes to the foundational system** | integrator |
| `08` parent row for the arc's open questions | integrator |
| `WI16` stale-state correction | integrator |
| Insurance landing packet from the frozen Gate-2 result §17 | integrator |

**A holder must run a freshness + collision check and record it before any of the above lands.**

---

## §5 — Next

**★ 2026-08-10 — PRE-0 HAS RUN. All three submissions are populated and FROZEN** (`fac5881`): Agent A = Opus 5 Max / Anthropic, 757 lines · Agent B = ChatGPT Pro / OpenAI, 1,482 lines · Agent C = ChatGPT Pro / OpenAI, 535 lines. **Every isolation condition passed, including the decisive one — C blind to A and B.** Three scoping caveats are recorded in the freeze commit and must be carried into reconciliation: **A and B were not blind to the internet** (both were blind to the OMNI name, so the residual risk is generic-pattern retrieval, not estate contamination) · **B and C share a model family**, so B/C agreement is weaker than A/B agreement and neither is corroboration · **C's audit is NOT repository-verified** ("load-bearing claims verified: no idea"), so C's factual repository claims must be independently checked before any is allowed to block G0.

**★ 2026-08-10 — RECONCILIATION DONE; AMENDMENT CYCLE APPLIED.** `v4_FAI_PRE0_reconciliation_ledger_2026-08-09.md` is at **R5** *(reconciliation completed at R2; R3–R5 = mechanical state-integrity normalization)*: **81 rows classified · 7 open · 0 out-of-scope**. The single bounded amendment cycle has been **applied** to charter (**R9**), execution plan (**R8**), protocol and this handoff. **12 of 14 fully closed** (ledger §8) — `C-01` **partially closed for the G0 transaction only** (foundational authority deferred to `§G1-AUTH`) · `C-10` **specified but not executed** (needs the operator-side appointment + checkpoint transaction). **12 + 1 partial + 1 unexecuted = 14.** **Closure became byte-true only at R5** — `C-03` at R3, `C-11`/`C-12` at R4 (once the duplicate counts were **eliminated** rather than corrected), and the final pointer/holder residues at R5. **The earlier "13 of 14" (R1), "11 of 14" (R2) and "12 of 14" (R3) claims are all withdrawn as not byte-true.**

**IMMEDIATE NEXT ACTION: final independent review of the patch, then G0.** Not another design pass. A fresh agent may serve only as a **bounded blocker-closure verifier** and must not redesign OMNI.

**BLOCKED AND CANNOT BE CLOSED BY AN AGENT — `C-10`:** the G0 authority receipt requires the operator to appoint the **`integration` seat** holder and repoint the checkpoint. The live checkpoint still names the Insurance handoff and `PRESPINE-PHASEA-INTEGRATOR` is **vacant**, so **no shared control-plane landing is authorised.** **For PRE-0 and G0, current agent grants are limited to proposal authoring, research, verification and testing** — an arc-scoped restriction for this transaction, **not** a general OMNI rule about what agents may ever do. That question belongs to `§G1-AUTH`.

**AUTHORITY IS NOT SETTLED BY THIS ARC'S G0, and must not be treated as if it were.** The R1 patch authored a seven-role table and declared it canonical from a **nonbinding** ledger. **Withdrawn.** OMNI already holds substantial authority architecture at mixed maturity — `contracts/rbac_authority_contract.md` (`canonical`, `draft_for_ratification`, **DL-18 LOCKED** spine) · Agent Runtime & Harness (*authority ceiling never originates authority; effective permission is an intersection*) · thesis GCE `delegated_authority_envelope` vs `capability_envelope` · `EVRUN-2026-000007` · Care §§5b/5b.1/9a.

**What G0 carries:** a **provisional change-governance profile** for this transaction only (`candidate_operational_profile`, expires when `§G1-AUTH` delivers). **What survives it:** one principle — *a stable role belongs in architecture, the current holder belongs in a mutable register.* **Names live only in the G0 holder receipt**, where recording that one person currently holds several functions is honest current-state.

**`§G1-AUTH` — Authority, Agency and Commit Grammar Reconciliation — is a MANDATORY G1 work package.** It **reconciles**, never invents. **Three re-derivations occurred in one session** (`C4.4 §R` twice, then authority) — the material is structurally unreachable under current routing, which is the arc's own strongest evidence.

**SUPERSEDED — retained for lineage:** *run PRE-0* — two blind alternative designs (A, B) and one independent grounded plan audit (C), then **one** reconciliation, then **at most one** bounded amendment. **Only then** do Nick + Knox accept, amend or reject at G0. Nothing auto-starts. Gate 1 does not begin until the charter and the execution plan are accepted. **The single-law probe was deleted at R1. The current sequence is: PRE-0 preflight (operator-authorized, NOT a gate) → G0 accept → G1 converge the operating model → G2 erect the outpost → G3 reconcile the foundation → G4 operate end-to-end and install. The execution plan is the ONLY place that sequence lives.**

**R1 rewrite (2026-08-09, post-Knox):** the existential test and the single-law probe are DELETED — the operator's "outpost" meant the first permanent structure at the real site, not a test cabin. `.cursor/plans/` is rejected as the final home. The FAI files were split onto their own branch; Insurance and FAI do not share closure. **R2 (post-Knox):** the whole is named **OMNI Architecture** — un-branded, no coinage, no `constitution`. **Reactor is classified: a candidate cross-cutting architecture STANDARD for consequential transitions — not dead, not the whole, not unsettled.** **HISTORICAL R2 CLAIM — FALSE AND SUPERSEDED (corrected at charter R7 / ledger C-12):** *"TWO taxonomies exist and are **mutually invisible** — … 16 contracts … 12 architecture roles."* **All three were wrong.** **Current corrected state: the two taxonomies are LINKED ONE-WAY** (the Artifact Index explicitly names the governance taxonomy as still binding) **but are not modelled as independent passport axes · 15 top-level contract files + 5 seam contracts · 13 architecture roles.** The retained original wording follows only as lineage — the governance-category enum (10 categories, no `contract`) and the ratified `00_architecture_artifact_index.md` (no `standard`/`pattern`/`profile`/`conformance`/`vocabulary`/`view`). Not an absence — a schema mismatch plus a stale role set. **Four additions, all operator-raised: two profile axes (operating-area vs deployment), variation points as the answer to enterprise customisation, instance and fleet views, and architecture change control.** Sequencing answered: **the taxonomy IS the stake; organize → state (spine) → explain (thesis).**

**If the charter or plan is rejected: revise them.** The foundational arc itself is DECIDED and does not return to `WI16`, and Insurance does not unfreeze. *(This clause previously said rejection unfreezes Insurance — stale against the operator's decision, corrected at R3.)*

**PRE-0 preflight (operator-authorized, runs BEFORE G0):** `v4_FAI_PRE0_preflight_brief_and_protocol_2026-08-09.md` (protocol + both briefs) · `v4_FAI_PRE0_agent_a_verbatim_…` · `…_agent_b_…` · `…_plan_auditor_verbatim_…` (**all operator-populated**) · `v4_FAI_PRE0_reconciliation_ledger_2026-08-09.md` (**G1 and G3 cannot close with an undisposed row**).

**Artifacts from this session:** `v4_FAI_G0_foundational_architecture_reconciliation_and_install_charter_2026-08-09.md` (**R7**) · **`v4_FAI_omni_architecture_arc_execution_plan_2026-08-09.md` (the plan the next agent runs)** · `v4_FAI_G0_opus_thread_verbatim_2026-08-09.md` (operator-populated) · `v4_FAI_G0_knox_thread_verbatim_2026-08-09.md` (operator-populated) · this handoff · the frozen Insurance result on PR #14.

**STOP: `insurance_frozen · foundational_arc_chartered_pending_acceptance · checkpoint_repoint_owed_integrator_vacant`**
