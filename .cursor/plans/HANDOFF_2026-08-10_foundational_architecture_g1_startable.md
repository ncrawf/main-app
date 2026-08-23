# HANDOFF 2026-08-10 — FAI Gate-0 ACCEPTED · G1 STARTABLE

Document type: `handoff_or_readiness_gate` — **the current Tier-0 gate-setting checkpoint**
Authority: `derived_nonbinding`. **This checkpoint routes and records state. It hosts no schema and originates no doctrine.**
Status: **`HISTORICAL · superseded_as_tier0_pointer_2026-08-23 · g0_accepted · g1_startable · insurance_frozen`**
> **★ NO LONGER THE CURRENT CHECKPOINT (2026-08-23).** Superseded **as the Tier-0 pointer only** by `HANDOFF_2026-08-23_fai_g1_paused_by_operator.md`. Its G0-acceptance and G1-startability content remains valid history — G1 has since run and is now **paused by operator**, so "startable" is no longer current state. Do not boot from this file.
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: the checkpoint the next agent boots to. **Supersedes `HANDOFF_2026-08-09_foundational_architecture_arc_opened.md` as current state** — that file is retained as historical arc-opening detail.
Supersedes: `HANDOFF_2026-08-09_work_horizon_closed_insurance_gate2_startable.md` **as the Tier-0 pointer only** (its Insurance content remains valid and frozen).
Manifest action: `add_tier0` — **LANDED** in this transaction.
Review gate: `user_knox_required`

---

## §1 — Current state *(this section owns it; nothing else does)*

| Item | State |
|---|---|
| **Gate** | **FAI Gate-0 ACCEPTED 2026-08-10.** **G1 is OPEN and INCOMPLETE — 3 of 8 outputs accepted as proposals; `§G1-AUTH` partially converged.** |
| **Arc** | `OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL` — charter **R9** · execution plan **R8** · PRE-0 ledger **R5** |
| **Next action** | **G1 Output 4 — change lifecycle: bounded consolidation.** **Output 4 is PROPOSED and NOT ACCEPTED** — a substantial proposal exists at carrier `§E15`, and what is owed is bounded consolidation against the architecture package and transition contract selected at R8 `§0.6`, **not** reset and not rearchitecture. *(This cell previously read "Output 4 is NOT started," which the branch contradicted; the authoring state had drifted, no gate state had.)* **R8 `§0.6` records a selected G1 structural and G2/G3 planting decision — the architecture package, its ownership boundaries, the canonicality law and the transition method. It is a proposal selected for future planting, installs nothing, creates no `/architecture/` directory, migrates nothing and accepts no output.** Outputs 1, 2 and 3 are **accepted as G1 proposals** — **3 of 8 complete** (Output 2 accepted 2026-08-14 at head `a37a3184`, receipt carrier `§7.6`; **Output 3 accepted 2026-08-15 at head `fedcb9d8`, receipt carrier `§7.7`, strictly within the boundary at `§E14.9.5`**). Acceptance as a *proposal* promotes no dossier to doctrine, installs no schema, validator or graph technology, and closes no gate. **The mandatory `§G1-AUTH` work package remains OPEN and partially converged** — Output-4 being next does not make it optional — and the live holder receipt below stays effective until it delivers. **`B-15` is narrowed to Outputs 4–7.** **Read route `9v` first**, then carrier `§G1-CONTRACT` → `§7.5` (Output 1) → `§7.6` (Output 2) → **`§7.7` (Output 3) → `§E14`, whose current model is `§E14.0`–`§E14.8` and whose accepted boundary is `§E14.9.5`**. **Bounded `integration` appointment for the Output-3 acceptance landing, 2026-08-15 — ministerial only, EXPIRED on verification of that commit. No standing integration authority exists.** **Discharged 2026-08-15, no longer owed:** the `ledger:287` derived-state inconsistency was normalized in its own bounded transaction. The PRE-0 ledger's `§5` summary no longer restates the open count — the **`open` row is the canonical source** and still enumerates exactly **AB-19, AB-20, AB-22, AB-23, AB-29, AB-31**. No disposition changed. |
| **PRE-0** | **COMPLETE and CERTIFIED.** Blind counter-design (A, B) + independent grounded plan audit (C) → reconciliation → one bounded amendment cycle → five byte-verification rounds. Independent verdict: **`FAI_PRE0_AND_PLAN_CLOSURE = ACCEPTED_FOR_G0`** |
| **Blockers** | **12 of 14 fully closed.** `C-01` **partial by design** — foundational authority is a G1 reconciliation (`§G1-AUTH`), not a G0 invention. `C-10` **EXECUTED in this transaction** |
| **Insurance** | **FROZEN.** PR #14 open, draft, unmerged. `C3.9` NOT started · `E2` NOT started. **Does not unfreeze without an explicit operator decision.** |
| **Ledger** | **BINDING on closure:** `v4_FAI_PRE0_reconciliation_ledger_2026-08-09.md` — 81 rows, **6 open**. **G1 and G3 cannot close with an undisposed row.** |

---

## §2 — G0 holder receipt *(operational record — the ONLY place holder names belong)*

**The architecture names roles. This receipt names holders.** Adding engineers, departments or a compliance function is an edit to *this* record and touches no architecture document.

```yaml
transaction: OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL / G0-acceptance + C-10 landing
effective_from: 2026-08-10
effective_to:   expires when §G1-AUTH delivers the reconciled authority model

accountable_operator_principal:    Nick (operator / project owner)
cross_cutting_acceptance_holder:   Nick — accepted FAI Gate-0 on 2026-08-10
domain_owner_approval_holders:     Nick (all domains; sole holder at this date)
architecture_steward_holder:       Nick
independent_review_holder:         Knox (ChatGPT review instance) — certified
                                   FAI_PRE0_AND_PLAN_CLOSURE = ACCEPTED_FOR_G0
proposal_authoring_actors:         Opus (Anthropic, repository-native, Cursor);
                                   PRE-0 agents A/B/C — frozen, no standing role
integration_holder:                Opus — appointed by the operator 2026-08-10,
                                   BOUNDED to this arc-opening transaction only
repository_administration_holder:  Nick — NOT exercised in this transaction

vacancies:      none blocking at this date
fail_closed_gates: none currently blocked

freshness_and_collision_check: PASS 2026-08-10 — AGENTS.md checkpoint-pointer and
  read-graph Tier-0 #15 both named HANDOFF_2026-08-09_work_horizon_closed_insurance_gate2_startable.md;
  origin/main unmoved at 2629099; branch 8 ahead / 0 behind; clean fast-forward
checkpoint_repoint: HANDOFF_2026-08-09_work_horizon_closed_insurance_gate2_startable.md
                 -> HANDOFF_2026-08-10_foundational_architecture_g1_startable.md
catalog_and_read_graph_changes: 11 catalog rows added; read-graph route 9v added;
                 both checkpoint pointers repointed; FWREG-021 added
first_authorised_G1_write: the G1 operating-model carrier (new file, G1-authored)
```

**Bound by `INV-30`:** a majority may not vote away an independently liable principal's refusal, a patient right, or a professional duty. **The `integration` holder lands an already-accepted change set and resolves no substantive disagreement by merging.**

---

## §3 — What G1 must NOT re-derive *(the founding lesson of this arc)*

**Three separate re-derivations occurred in one session** — `C4.4 §R` twice, then the entire authority architecture — the last committed by the agent that had just documented the first two, inside the artifact written to stop re-derivation. **Under current routing, re-derivation is the default behaviour, not a lapse.** Recorded as ledger `§0.1 L-1`…`L-6`.

**Before authoring anything cross-cutting, open the carrier that already owns it:**

| If G1 is about to author… | It already exists in |
|---|---|
| a shared-mechanism disclosure form | **`C4.4 §R`** — a 13-question template across `R.1`–`R.17`, richer than either blind design |
| publication ≠ adoption / local admission | **`C4.4 §R.16`** — *"federated publication ≠ universal trust (locally admitted)"*, `publish → admit → use-under-grant → revoke` |
| **authority, agency, capability or commit** | **`contracts/rbac_authority_contract.md`** (canonical, `draft_for_ratification`, **DL-18 LOCKED**) · **`v4_C4_agent_runtime_and_harness_capture.md`** (*the authority ceiling **never originates or overrides** authority; effective permission is an **intersection***) · thesis GCE `delegated_authority_envelope` vs `capability_envelope` · **`EVRUN-2026-000007`** · Care **§§5b · 5b.1 · 9a** |
| execution admissibility | Care **§5b**; Reactor (`WI16`, `EVRUN-2026-000008` — `analysis_closed`, **read the terminus, not the index row**) |
| an economic/incentive firewall | **`v4_C4_6…` gate `C6`** — neutrality/incentive firewall, a **prevention** test |

**`§G1-AUTH` is a RECONCILIATION, not an authoring exercise.** The ledger `§3.5` role table is a **`candidate_operational_profile` scoped to the G0 transaction** and **expires when `§G1-AUTH` delivers.** It is not OMNI's authority model.

---

## §4 — Standing obligations into G1

| Obligation | Where |
|---|---|
| **6 open ledger rows must be disposed before G1 closes** — AB-19, AB-20, AB-22, AB-23, AB-29, AB-31 | ledger §1, each carrying owner · trigger · target gate · blocking status |
| **`§G1-AUTH`** — Authority, Agency and Commit Grammar Reconciliation, with 11 pressure scenarios | plan `#### §G1-AUTH` |
| **Closeout automation** — `FWREG-021 CLOSEOUT-AS-GRAPH`; the R1→R5 commit sequence is the fixture material | `doctrine/future_work_registry.md` |
| **No manual repetition of derived state** — counts, gate sequences, packet inventories resolve by pointer or generated projection | the rule that closed `C-11`/`C-12` after three false claims |
| **`C-10` receipt discipline** — no gate may claim a hosted protection is active because a file exists | plan `### G2` |

---

## §5 — Boot pointers

- **Route `9v`** — FAI read order, in `04_manifest_read_graph.md`. **Load before any cross-cutting architecture question.**
- **Gate sequence lives ONLY in** `v4_FAI_omni_architecture_arc_execution_plan_2026-08-09.md` §5.
- **Historical arc-opening detail:** `HANDOFF_2026-08-09_foundational_architecture_arc_opened.md` — **not current state.**
- **Insurance state:** `HANDOFF_2026-08-09_work_horizon_closed_insurance_gate2_startable.md` — still valid for Insurance, **no longer the Tier-0 pointer.**

**STOP: `g0_accepted · c10_landed · g1_startable · ledger_6_rows_open · insurance_frozen`**
