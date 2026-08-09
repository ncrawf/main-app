# HANDOFF 2026-08-09 — Insurance Gate 2 startable

Document type: `handoff_or_readiness_gate` — **CURRENT PROGRAM CHECKPOINT**
Authority: `derived_nonbinding` (a checkpoint carries current state; it originates no doctrine)
Status: `active · operator_focus=INS-G2-OPERATING-SUFFICIENCY · gate2_construction_authorized · no_other_work_authorized`
Domain(s): `architecture_governance`, `portfolio_sequencing`, `insurance_payer_oop`
Lifecycle role: operational state transfer — the current Tier-0 #15 checkpoint
Source-of-truth relationship: **owns operator focus, the current authorization, remaining `PRESPINE-PHASEA` lane posture and integrator state — nothing else.** Gate execution and acceptance state belong to the Gate-2 brief; dependency relationships to the pre-spine map; every SHA to its single owning row (AWP §2.1).
Supersedes: `.cursor/plans/HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md` **as the current checkpoint only** — that file's accepted content, gates, Phase-A launch receipt (§4.2) and lineage all stand.
Superseded by: none
Manifest action: `add_tier0`
Review gate: `user_knox_required`

> **Keep this short.** The predecessor accumulated eight arcs of amendment and became the object every cold agent had to parse. When the next arc closes, **emit a successor rather than growing this file.**

---

## §1 — Current state (this section is the owner)

| Fact | Value |
|---|---|
| **Operator-selected focus** | **`INS-G2-OPERATING-SUFFICIENCY`** — Insurance / Mixed Financing, Gate 2 operating composition and sufficiency |
| **What this checkpoint authorizes** | **Gate-2 construction and pressure, and nothing else.** Every other work item — including C3.9 population, OPECON, any sibling `PRESPINE-PHASEA` lane, Task-D, C4.5 and spine authoring — **requires its own explicit activation.** This is a scoped authorization, not a standing prohibition on those items. |
| **Remaining `PRESPINE-PHASEA` lanes** | `CARE-TASKD-INPUT` · `GRR-TASKD-INPUT` · `OPECON-G0-COUNTERPARTY` · `C45-P2-ANCHORS` — prepared, `not_started`, **dormant**, and **none is a declared predecessor of Gate-2 start** |
| **`PRESPINE-PHASEA-INTEGRATOR`** | **`VACANT`.** While vacant, no lane may land a shared control-plane surface; a replacement holder must run a freshness + collision check and record it. Transfer history: predecessor checkpoint §4.2 |
| **PR #9** | separate parked Tier-4 delegation-governance proposal; open, not landed, not part of Insurance. It owns `D0CKPT-DEC-008` — do not reuse that ID |

## §2 — The Insurance path

**Gate 2 may START now — there is no pre-execution blocker.** It may **not** be finally accepted until, in order: **C3.9 populated → consumed → affected assumptions and traces rerun or explicitly reconciled → `E2` last, unweakened.**

**OPECON is not a Gate-2 `blocks_start` dependency.** A possible **indirect `blocks_close` relevance through C3.9 remains unresolved** — recorded as `candidate_dependency_pending_C3.9_admission_review`. It does not auto-launch OPECON, and it is not dismissed. The C3.9 admission review decides whether C3.9 needs the full OPECON Gate-0 result, existing operator-economics material, or a smaller bounded input. **Do not restate this as "OPECON is not a prerequisite"** — that is too broad (`D0CKPT-DEC-009`).

## §3 — Where everything else lives

| Question | Owner |
|---|---|
| Gate-2 execution + acceptance state | Gate-2 brief state table — `v4_INS_G2_operating_composition_and_sufficiency_brief_2026-08-08.md` |
| Gate-2 substantive contract (14 required outputs) | Gate-1b §13.3 — `v4_INS_G1B_financing_ownership_and_existing_estate_reconciliation_2026-08-07.md` |
| Current dependency relationships | pre-spine map §6.1 — `v4_pre_spine_sufficiency_and_task_d_reentry_map_2026-08-04.md` |
| The wider unfinished portfolio | `future_work_registry.md` + `08_open_review_queue.md` — **pre-spine relevance is unadjudicated unless an owning decision says otherwise** |
| Insurance Gate-0 → 1a → 1b lineage and the two-axis result | read-graph route 9p |
| Phase-A launch receipt, content base, integrator history | predecessor checkpoint §4.2 |

## §4 — What closed here

The work-horizon reconciliation. A cold agent had inherited an unadjudicated `Gate 2 → C3.9 → OPECON` chain, and both universal boot surfaces carried a ~13 KB mutable status blob including the directive *"it is NOT Gate 2."* Repaired by `D0CKPT-DEC-009`, guardrails `D0CKPT-GRD-004` (boot surfaces route, they do not report) and `D0CKPT-GRD-005` (inspect a provider's upstream closure before adding a blocking edge), supersession `D0CKPT-SUP-002`, and one-line boot pointers enforced by `scripts/check-checkpoint-pointer.mjs`.

**This was incident response — not a Build OS or comparator programme.** The broader comparative work still owed is recorded at `FWREG-010`; it does not block Insurance. The external mechanism capture that informed the two guardrails is parked separately on `cursor/evidence-build-mechanisms-parked-5807` and is nonblocking.
