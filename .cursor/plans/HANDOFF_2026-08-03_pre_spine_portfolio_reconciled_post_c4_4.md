# HANDOFF — 2026-08-03 · Pre-Spine Portfolio & Control-Plane Reconciliation (post-C4.4)

Status: **★ HISTORICAL AS CURRENT (2026-08-09).** Superseded as the current checkpoint by `.cursor/plans/HANDOFF_2026-08-09_work_horizon_closed_insurance_gate2_startable.md`. **Do NOT boot current focus, next action, lane posture or integrator state from this file** — read them from the successor. This file remains the owning record for the **Phase-A launch receipt (§4.2)**, the C4.4 closeout and the full gate lineage, and its accepted content stands. Status tokens below describe state as of 2026-08-08 and are lineage, not live values. `[as-of 2026-08-08] pre_spine_portfolio_control_plane_reconciled · C4.4_ARCHITECTURE_AUTHORABILITY_ARC_CLOSED · C4.4_implementation_UNPROVEN · accepted_C4.4_estate_curated_landed_on_main_for_discoverability · analysis_nonbinding · not_promoted · sequencing_OPERATOR_CONTROLLED · no_arc_auto_start · main_landed_via_fast_forward_Nick+Knox_authorized · AMENDED_2026-08-04_prespine_sufficiency_map_accepted+landed (§4.1) · phase_A_envelope_ACCEPTED_Nick+Knox_2026-08-04 · phase_A_base_pinned_in_checkpoint_§4.2_single_owning_row · two_reference_boot=control_plane_from_main/content_from_pinned_base · INS_lane_COMPLETE_at_gate1b_ownership_maturity_2026-08-08 · four_remaining_lanes_not_started · phase_A_INSURANCE_INPUT_COMPLETE_2026-08-08 · insurance_arc_OPEN_at_gate2 · operator_focus=INS-G2-OPERATING-SUFFICIENCY_2026-08-08 · gate2_state_OWNED_BY_GATE2_BRIEF · OPECON_not_gate2_blocks_start (indirect blocks_close via C3.9 PENDING admission) · work_horizon_semantics=D0CKPT-DEC-009 (GRD-004/005/006/007) · no_successor_auto_start · final_TaskD_HELD_pending_phaseA+C3.9 · durable_work_contract=AWP_§2.1_proportional (D0CKPT-DEC-005 narrowed by D0CKPT-DEC-007; SUP-001; GRD-003) · parallel_work_package=RETIRED_as_active_classification · integrator_role=PRESPINE-PHASEA-INTEGRATOR (transferable; coordination-overlay only; **holder/vacancy resolves from §4.2 — the single owning row, deliberately not restated here**) · REV-212=CLOSED_knox_APPROVED_landed_main_7da3b2a · lane_hold_LIFTED_2026-08-05 · INS-G0-MIXEDFIN_COMPLETE_2026-08-08 · no_remaining_PRESPINE-PHASEA_lane_authorized_operator_selects`

> **This is the CURRENT checkpoint** (repoints `AGENTS.md` Current Checkpoint Handoff + read-graph Tier-0 #15). It is a normal dated checkpoint produced through the existing checkpoint mechanism — **NOT a universal boot file, NOT a new boot subsystem.** It supersedes `HANDOFF_2026-07-19_taskd_interim_checkpointed_evrun12_active.md` as the current program-state pointer; the 07-19 handoff and its content are retained as historical detail.
>
> **Read order for a fresh agent:** `AGENTS.md` → this checkpoint (current) → read-graph Tier-0 #15 (points here) + #9j (C4.4-closed route) → the C4.4 §0-CLOSEOUT downstream runbook (`HANDOFF_2026-07-31_c4-4-g2-landed_pre-g3.md`) → the exact C4.4/fresh-B immutable objects below.

---

## §0 — Why this checkpoint exists (the defect it closes)

Two program-control defects were diagnosed and confirmed at the git object level (fresh-Opus preflight + Knox ruling, 2026-08-03):

1. **Local, pointer-only:** the C4.4 §0-CLOSEOUT accepted-object table pinned accepted objects "by blob" but did **not** name the final R5 G5 packet commit/blob — it pointed indirectly to an Opus return report / R4 receipt. **Corrected** in this transaction (the G5 row now names the R5 commit + content blob; see §2).
2. **Major, program-control:** `main` still booted a fresh agent through the July-19 checkpoint, and read-graph **#9j on main said "G3 not started,"** while the accepted R5 branch said **G5 accepted / C4.4 closed**. A fresh default-branch agent therefore booted into an obsolete program state. **Corrected** by the curated C4.4 landing (Commit 1) + this checkpoint + the AGENTS/#15 repoint (Commit 2).

Combined verdict carried forward: **local C4.4 arc = CLOSED_WITH_POINTER_ONLY_CORRECTION**; **global program = CLOSED_WITH_PORTFOLIO_CONTROL_DEBT** — this reconciliation RECONCILES the named boot/discoverability debt (AGENTS + read-graph #15 repointed to this checkpoint; the accepted C4.4 estate curated-landed on `main`); normal ongoing portfolio maintenance remains.

---

## §1 — Current program state

- **C4.4 (Knowledge Reservoirs / Source Estate):** architecture/authorability **CLOSED** — G3 §R accepted (2026-08-01), G4 Knox-adjudicated PASS 30/32 (one non-blocking finding `C44-G4-R01` routed forward), G5 accepted (2026-08-03; three-angle authorability test executed — Angle C PASS 6/6, fresh A VALID/five reconciliations, fresh B VALID current-source, preserved raw + routed). **Enterprise implementation UNPROVEN** (F-Self Intelligence-Foundry Pilot + Enterprise Bootstrap Steel Thread proof programs required). `analysis_nonbinding · not_promoted`. **No further C4.4 architecture formulation and no A/B/C rerun.** Accepted final estate curated-landed on `main` for discoverability (NOT promotion); full development/test/correction history remains on the C4.4 analysis branch `analysis/c4-4-g3-reference-architecture` (R5 `50983ce`).
- **Pharmacy / Rx (C4.6):** Gate-0 + G2A accepted; L2 build-doctrine ACCEPTED (Knox final PASS); landed on `main` @ `44feb15`; G2B deferred. **Do not reopen.** Consume as C5 Rx-contract + spine input.
- **C4.5 (Temporal Integrity):** Gate-0 charter accepted (`90efcf0`); full pass **not started**. Provisional temporal lens attaches to Task-D after the Phase-2 six-source anchor micro-pass; full C4.5 runs **after Task-D and before v4 Spine Draft 0**. No promotion.
- **Task-D (enterprise composition):** interim population checkpointed; **NO final §7 verdict**; still required pre-spine. **★ Final Task-D population is HELD pending Phase A (five lanes) + C3.9** per the accepted pre-spine sequence — see **§4.1** and the accepted Pre-Spine Sufficiency & Task-D Re-Entry Map (`v4_pre_spine_sufficiency_and_task_d_reentry_map_2026-08-04.md`).
- **Care · Platform · Accountability · Runtime · Demand · C3.9 · Insurance · Reactor · Polaris:** classified only to the depth their **current carriers** support (see §5 portfolio matrix). None closed beyond what its carrier states; none auto-advances from this checkpoint.

---

## §2 — Exact C4.4 + fresh-B immutable routes (pin by blob, not branch tip)

**Accepted C4.4 objects:**
- **G5 packet** — `.cursor/plans/v4_C4_4_disposition_ledger_and_v4_handoff.md` · **content blob `e215ee0cf1c097fa7fe297ff331dc7826edd6ac0` CONTROLS** · **R5 commit `50983ce864017f411281eef4d71556bcabf8a514`** records acceptance-state provenance. Later metadata/checkpoint edits do not alter the accepted G5 content identity unless that content blob is explicitly superseded. (Commit = provenance; content blob = controlling identity.)
- **G3 architecture** — accepted content blob `e364acbad3352457eb8c761d287e91787ea71eea` (unchanged; no amendment). G3/G2 carrier file `.cursor/plans/v4_C4_4_taxonomy_constitution_and_reference_architecture.md` at R5 = blob `76a8cdfc4c75376ec5db1fa658c714a973169426`.
- **G4 carrier** — `.cursor/plans/v4_C4_4_fixture_suite_and_adversarial_results.md` = blob `07f866207836a22c103505835f80aa495a623101` (PASS 30/32; adjudication-close commit `6388d606…`).
- **Runtime bridge** — blob `de5b9a1fc7bf9ff77797d28a53a6fef9ced3ed34` (unchanged; in `v4_C4_agent_runtime_and_harness_capture.md`).

**Preserved raw fresh Angle-B enterprise-composition/proof analysis (DIRECTLY ROUTED — an FWREG/catalog row is INSUFFICIENT preservation; read the raw object):**
- branch `analysis/c4-4-g5-three-angle-test-orchestration` · evidence commit `fee90d4685e962f75c571fcebfe2a466987d7c62` · path `.cursor/plans/c4_4_g5_tests/results/re_adjudication/ANGLE_B_FRESH_KNOX_RAW.md` · blob `24ed64d14394fd95df5ff349407cec1b36a683ea` · body sha256 `47bc728b2e4a159301d1186d85b1bda732cae00a5e9e642c84e97cafc71b8521` · adjacent `KNOX_RE_ADJUDICATION.md`.

> **Anti-flattening law (recorded):** downstream consumers route to fresh-B and the G5 packet **by exact pointer**; they do not rewrite or summarize the accepted G3 architecture, and they do not collapse fresh-B into a packet summary or a registry row.

---

## §3 — Four distinct states (do not conflate)

1. **Accepted nonbinding analysis** — reviewed + accepted inside the pre-spine architecture program (`GRD-036`).
2. **Default-branch discoverability** — a fresh agent booting from clean `main` can reach the exact bytes/routes without chat.
3. **Main landing** — the accepted final files are present on the default branch `main` (discoverability); this is what the curated landing + the fast-forward accomplished. Landing ≠ promotion.
4. **Promotion** — content becomes spine / C5 contract / doctrine / implementation authority.

**Main landing is state 2/3, NOT state 4.** Landing accepted `analysis_nonbinding` artifacts on `main` enables discoverability; it does **not** promote them. All C4.4 passports remain `analysis_nonbinding · not_promoted`.

---

## §4 — Operator-controlled sequencing

- **No substantive arc auto-starts from this checkpoint.** Nick selects the next bounded arc.
- When Reservoir-adjacent work resumes, its next substantive home is **Task-D Enterprise Composition Integration & Proof Readiness** (consuming G5 Part I + fresh-B §§1/5/6/7 + I.8) — **NOT** C4.4 G6, not another taxonomy/A-B-C pass, not immediate F-Self execution.
- A separate broad "Reservoir Realization Readiness" pass is **unnecessary** unless Task-D exposes a genuinely unowned prerequisite not already covered by G5 I.9A/B/C + fresh-B.
- F-Self / Enterprise Bootstrap: **preparation** may follow Task-D prerequisite mapping; Build-Entry authorization is not automatic (the gate itself needs vNext reconciliation); **execution is not authorized.**

### §4.1 — ★ Accepted pre-spine sequence (2026-08-04, Nick + Knox — amendment to THIS checkpoint, not a new checkpoint)

The **Pre-Spine Sufficiency & Task-D Re-Entry Map** (`.cursor/plans/v4_pre_spine_sufficiency_and_task_d_reentry_map_2026-08-04.md`; accepted + landed on `main`; pre-landing review head `866c49224356c667854bc64bcdea423eb2e76600`, primary blob `f1855661adb6a915a1e654e3b8f107370fccf4cc`) is the **active pre-spine sequence home**. `AGENTS.md` and read-graph #15 continue to point at **this same Aug-3 checkpoint file** (no new checkpoint, no new read-graph node); the map is reached *through* this checkpoint. Order — no auto-jump beyond each gate:

1. **Phase A — a prepared five-lane inventory; one lane (Insurance) COMPLETE, four remaining and `not_started` (2026-08-08).** **No remaining `PRESPINE-PHASEA` lane is currently authorized to launch** (this constrains the Phase-A package only — it says nothing about work outside it, such as Gate 2) — activation is operator-controlled and Nick selects from the four remaining; Phase A does **not** require launching five agents. *(Historical, 2026-08-05: the inventory was HELD pending the independent mechanics review §4.1a · `D0THES-REV-212`; that hold lifted, Insurance was selected, ran, and completed.)* The prepared inventory: Care Input-State Receipt · GRR/Accountability Input-State Receipt · Insurance/Payer/OOP Gate-0 · Non-Labor Operator Economics + Counterparty Residual Gate-0 · C4.5 Phase-2 six-source anchor verification. Governed by **Agent Work Protocol §2.1** (Durable Work — lane continuity contract + coordination overlay; this package qualifies for the overlay on its own facts, and is the first concrete envelope = map §7/§7.1). One writer per branch; shared control-plane surfaces read-only to lanes; lanes return `review_ready_pending_integrator` carriers satisfying the map's **common lane output contract**. The control-plane integrator is a **transferable role**, key **`PRESPINE-PHASEA-INTEGRATOR`** (**holder/vacancy resolves from §4.2 and the current checkpoint — deliberately not restated here.** *★ Corrected 2026-08-09: this parenthetical asserted "current holder = the Opus control-plane integration context," stale after the role was vacated. Knox flagged it twice and the author twice reported it unverified, having grepped case-sensitively for the table's "Current holder" and missed this lowercase prose instance.*) — per §2.1 **Integrator-transfer law**, a retired or replaced holder must not strand the lanes.

   **★ Phase-A envelope ACCEPTED (Nick + Knox, 2026-08-04).** The fidelity-hardened §7/§7.1 envelope passed final content byte review; the lane content base is pinned in **§4.2 — Phase-A launch receipt** below. **As of 2026-08-08 the Insurance container is COMPLETE; the four remaining containers are prepared, pinned and empty, and their lane work has not started.** Execution is authorized **per lane** only when that lane receives and accepts its exact thread/relay lock. Local worktree paths are **environment-local and non-canonical** — recreatable anywhere (new machine, cloud VM, fresh clone) from branch + base.

### §4.1a — ★ MECHANICS ADJUDICATED, ACCEPTED AND LANDED (2026-08-05) — supersedes both the "CLOSED" reading and the freeze below

**★ STATUS — CLOSED.** The independent review ran to completion. Fresh Knox and fresh Opus reviewed the frozen bytes **independently, read-only, without coordinating**, and **both returned `MATERIAL_REWRITE`**. Nick delegated adjudication to Opus and authorized the write. After four review rounds, **Knox returned an APPROVED blessing and Nick accepted.**

**`agent_work_protocol.md` §2.1 as rewritten — the proportional durable-work contract — is LANDED on `main` at `7da3b2a633d133784ec542fb0174b3500a2811c2`** (ordinary fast-forward from `74341a9…`, PR #3, 15 files). It is now the **binding** execution contract. Review rounds: `50cb675` adjudication → `460be41` eleven corrections (Knox `REQUEST_CHANGES`) → `4bd6da9` seven final-byte micro-patches + narrative passport completion → `7da3b2a` admission-schema patch (`manifest_action` + operating contract). Open review `D0THES-REV-212` is **CLOSED**; residual Volume 7/8 catalog enum debt parked as `D0CTLG-REV-001` (nonblocking).

**What the landed rewrite establishes** (decision `D0CKPT-DEC-007`, active; supersession `D0CKPT-SUP-001`, resolved; guardrail `D0CKPT-GRD-003`):
- **Two-question applicability test** — *continuity* (must this survive replacement/pause/transfer/delayed re-entry without a chat transcript?) and *coordination* (do writers, dependencies, shared surfaces or outputs need ordering/reconciliation?) — independent axes, four postures: `ordinary` · `durable_lane` · `coordinated_bounded` · `coordinated_package`. **Ordinary bounded work carries no §2.1 obligation at all.**
- **Trigger = material need, not artifacts.** A branch/worktree/output/named owner is *evidence*, never the creator of a lane.
- **`L1`–`L8` continuity + `C1`–`C6` coordination** replace the former universal "core". **A standalone lane needs NO integrator, NO parent integration transaction, and NO launch envelope** — it completes at its own §5 review/landing gate (`L5`).
- **Base pin · common base · two-reference boot · state-only base binding are CONDITIONAL**, with stated use-when conditions.
- **`parallel_work_package` RETIRED** as an active classification (historical lineage only); §9 stop fields are conditionally emitted by declared `work_posture`.
- **New Single-source law** — a live SHA/base/head/state lives in exactly ONE owning row; discovery surfaces carry pointers, never values.

**What did NOT change.** This checkpoint's **§4.2 Phase-A launch receipt, the accepted map §7/§7.1 envelope, the five source floors, the common base, the protected shared-surface list and the `PRESPINE-PHASEA-INTEGRATOR` role all stand unchanged** — Phase A genuinely has coordination and legitimately uses the overlay. The narrowing applies to the *generalized* semantics that leaked upward from this instance, not to the instance.

- **★ LANE HOLD LIFTED (2026-08-05, after the mechanics landed).** The hold existed only because the mechanics were under review. They are now accepted and landed, so the block is discharged.
- **★ NEXT AUTHORIZED ACTION (rewritten 2026-08-08 PM, `D0CKPT-DEC-009`): NOTHING AUTO-STARTS. The current operator-selected focus is `INS-G2-OPERATING-SUFFICIENCY` — Insurance / Mixed Financing, Gate 2 operating composition and sufficiency.** Gate-2 **construction and pressure may begin now** from the accepted Gate-0/1a/1b estate; **C3.9 is a required FINAL-ACCEPTANCE input, not a pre-execution blocker**, and `E2` remains mandatory before any Gate-2 result is labelled final Insurance composition input. Gate-2 execution and acceptance state resolve through the Gate-2 brief, which owns them. **Operator focus is not global priority** — it blocks no unrelated work, authorizes no successor, and makes no other arc subordinate; it exists so that a generic portfolio line can no longer retarget a cold agent away from the arc in flight (`D0CKPT-GRD-005`). *(Superseded and retained for lineage: the 2026-08-08 AM wording "NONE auto-starts, and it is NOT Insurance … operator-controlled among the four eligible remaining Phase-A lanes." That sentence caused a correct cold boot to abandon the live Insurance arc; it is the recorded origin of `D0CKPT-GRD-005`. Also superseded: "activate `INS-G0-MIXEDFIN` as the single selected Phase-A lane.")*
- **★ OPECON is not a Gate-2 `blocks_start` dependency — and that is a narrower claim than "not a prerequisite" (`D0CKPT-DEC-009` items 5–6, `D0CKPT-SUP-002` item 3).** Gate-1b §13.3 rejected "Starting OPECON here" and routes the F3 operator slice **outbound** to OPECON, making OPECON a downstream *consumer*; construction begins without it. **But a possible INDIRECT `blocks_close` relevance through C3.9 remains OPEN:** the previously-accepted `C3.9 → OPECON` edge is **downgraded to `candidate_dependency_pending_C3.9_admission_review`** — not inherited as binding, and **not silently dropped**. It does not auto-launch OPECON; the C3.9 admission review decides whether C3.9 needs the full OPECON Gate-0 result, existing operator-economics material at current maturity, or a bounded additional input. **State it precisely: "not a Gate-2 start prerequisite; possible indirect close relevance through C3.9 pending."** Root cause of the original error and the rule that prevents it: `D0CKPT-GRD-004` (uninspected dependency closure).
- **No remaining `PRESPINE-PHASEA` lane is currently authorized — `eligible_dormant`, which is not a queue and not a default. Scope note: this is a statement about the Phase-A package, NOT a prohibition on work outside it** (Gate 2 sits outside Phase A and is the current focus). `CARE-TASKD-INPUT`, `GRR-TASKD-INPUT`, `OPECON-G0-COUNTERPARTY` and `C45-P2-ANCHORS` remain prepared, pinned and `not_started`; their presence is **not** authorization to begin them, none starts until Nick selects one, and **none of them is a declared predecessor of the current focus**. *(Historical, 2026-08-05 → 2026-08-08: "Only Insurance is authorized" — discharged when `INS-G0-MIXEDFIN` completed.)*
- **The four remaining prepared lane branches stay at the content base pinned in §4.2 (that row is the single source — this section deliberately does not restate the SHA). Do not re-pin or rotate the base.** *(Historical: while Insurance was the single active lane it wrote only its own branch; that constraint is discharged and its outputs are carried on the parent branch.)*
- **`D0CKPT-DEC-005` remains a stable ID**; its Phase-A concrete continuity protections stand as accepted evidence, **materially narrowed as to the generalized semantics** by `D0CKPT-DEC-007`.
- Continuity: `.cursor/plans/HANDOFF_2026-08-05_awp_lane_contract_adjudicated_rewrite.md`. Arc record: `docs/architecture/evolution_narrative_volume_9_2026-08-05.md`.

**Historical — the 2026-08-05 freeze that produced this adjudication (SUPERSEDED as to status, retained for lineage).** The 2026-08-05 generalization of §2.1 corrected a false solo-vs-parallel binary but introduced **trigger overreach** and a **live contradiction with the boot/routing surfaces** (§2.1 said one lane triggers it, while `AGENTS.md`, the read graph, `D0CKPT-DEC-005` and `D0CKPT-GRD-002` still routed and described it as *parallel* work). Rather than a fourth same-agent rewrite, the bytes were **frozen** and handed to independent fresh Knox + fresh Opus review (packet `.cursor/plans/HANDOFF_2026-08-05_agent_work_blueprint_mechanics_independent_review.md`, row `D0THES-REV-212`), with edits to AWP / `09` / `10` / the map / the repertoire / the guardrail digest prohibited **during** the review. That prohibition ended when both submissions returned and Nick adjudicated.

**What is still genuinely settled** (the review is about §2.1's applicability and proportionality, not about relitigating these): the concrete Phase-A envelope and its five source floors · the source-floor + lane-agency aperture clause · optional operator-controlled activation with Insurance selected · the anti-silo rule that lane partitions are not architecture boundaries · the method repertoire (`D0CKPT-DEC-006`, separate) · that the Build OS is explicitly **partial**, with automation open at `10` Step 5 + `D0THES-REV-158`.

**Historical note — the previous "CLOSED, do not reopen" framing follows and is SUPERSEDED as to the mechanics.** Its list of *deliberately-not-built* items remains valid guidance (do not add usage ledgers, method tiers, deprecation graveyards, composition recipes, mandatory Gate-0 method forms, or lane automation):

- **Agent Work Protocol §2.1** — parallel work-package contract: mandatory `parallel_work_package` classification trigger · accepted launch envelope · two-level base binding (`lane_content_base_sha` vs `control_plane_boot_ref`) · **Two-Reference Boot Law** · one writer per branch · transferable integrator role · environment-local (non-canonical) worktree paths. Decision `D0CKPT-DEC-005`, guardrail `D0CKPT-GRD-002`.
- **Discovery routing** — `AGENTS.md` work-class rows (parallel/multi-agent; major-arc intake) + two durable `04_manifest_read_graph.md` routes deliberately placed **outside** Tier-0 #15 so they survive checkpoint rewrites.
- **`omni_work_method_repertoire.md`** — an **optional** method catalog (61 entries + `METHOD-000`). Palette, not pipeline: no required order, no required method, no minimum count, no usage/effectiveness bookkeeping, no maturity tiers, no lifecycle machinery. Decision `D0CKPT-DEC-006` (`active`). **Consult only when planning or materially replanning; routine execution ignores it.**
- **Deliberately NOT built** (do not "helpfully" add them): usage/effectiveness ledgers · method tiers · method deprecation graveyard · composition recipes · mandatory Gate-0 method forms · automated lane registry, leases, locks, merge queue or collision detection. Automation remains open and evidence-gated at `10_omni_build_os_rollout_sequence.md` Step 5 + `D0THES-REV-158` (**Build OS Layer-2/3 Tooling v0.2**), triggered only at Phase-A parent closeout.
- **The Build OS is explicitly PARTIAL, not finished** — `09` Layer 2, `10` Step 5 and `FWREG-010` all say so.

**Reopen only if** real Phase-A execution evidence shows a control is missing or ceremonial. *(Historical, 2026-08-05 — DISCHARGED: "next action is NOT a lane launch; it is the independent mechanics review" — packet `HANDOFF_2026-08-05_agent_work_blueprint_mechanics_independent_review.md`, row `D0THES-REV-212`, now CLOSED. Insurance was then held as the selected priority; it has since run and completed. Live next action is §4.2.)*

### §4.2 — ★ Phase-A launch receipt (2026-08-04, state-only; binds the accepted content base)

This is the durable, post-acceptance base binding required by Agent Work Protocol §2.1 **Base-binding law**. **A fresh agent — local, cloud, or mobile — can launch any lane from this receipt alone. No conversation, no chat transcript, and no machine-specific path is required.**

| Field | Value |
|---|---|
| Parent key | `PRESPINE-PHASEA` |
| `lane_content_base_sha` (**LIVE content base — THIS ROW IS THE SINGLE SOURCE. Do not restate this SHA in prose; it drifted twice when copied**) | **`f70ff3cbf007b9bd68bedec7c9dfb9365e9e6e05`** — the generation withdrawing the solo-vs-parallel binary (lane = durable partition; properties orthogonal; core contract + coordination overlay), on top of the aperture clause, optional activation, anti-silo rule and Agent Work Blueprint identity. Supersedes all earlier pins (`84f2d58`, `21e6415`, `51ead01`, `326f634`, `84a8879`, `19ec357`, `a40a0ab`) — ancestors/lineage only |
| `control_plane_boot_ref` (**current state**) | the **current `main` tip** — read `AGENTS.md`, the read graph, this checkpoint and lane/integrator state from **here**, never from the content base. **Branch refs control; this checkpoint does not self-stamp its own commit SHA.** |
| Accepted map blob at the content base | `26eccb0c296d0384fa78d2dab29ab586e713a9fe` |
| Accepted Agent Work Protocol blob | `db82de0b8b22cccce0f000b62e8e91b79e5e34b2` (frozen evidence pin at the content base — immutable receipt, not current state) |
| Content branch | `governance/omni-work-method-repertoire-v0` (the aperture clause landed here; earlier generations came via `governance/phase-a-two-ref-cloud-boot`) |
| Commit distance | `main` sits an **unfixed number of commits** ahead of the content base (state receipts plus separately accepted control-plane work such as the method repertoire). **This is not drift. Do not stop for reconciliation over it.** The lane base is pinned by this row, not by counting commits |
| Integrator role key | `PRESPINE-PHASEA-INTEGRATOR` |
| Current holder | **`VACANT` (2026-08-08 PM, Nick-authorized).** Held open deliberately under the AWP §2.1 integrator-transfer law: *"a retired, exhausted or replaced holder MUST NOT strand its lanes."* **Blockers while vacant:** no shared control-plane surface may be landed by a lane; the next holder must run a freshness + collision check on assumption and record it in this row. |
| **★ BOUNDED SHARED-SURFACE TRANSACTION (durable record, per §2.1 integrator-transfer law)** | **1.** `THREAD LOCK: INS-G1B-PARENT-CARRY \| seat=OPUS \| visible="Insurance · Parent carry"` **completed** — its carry landed on `main` at `849f0c1`. Leaving it recorded as live holder pointed the role at a finished thread, which is the defect this row now closes. **2.** `THREAD LOCK: OMNI-WORK-HORIZON-RECONCILIATION \| seat=OPUS \| visible="OMNI · Work horizon reconciliation"` **assumed the bounded shared-surface writer role**, Nick-authorized explicitly 2026-08-08 PM, scope limited to the control-plane reconciliation (no arc execution, no contract/schema/code). **Freshness + collision at assumption:** `main` unmoved at `849f0c1` · no commits since the Insurance landing · decision/supersession/guardrail ID collision scan run across `main` **and every remote ref** (found `D0CKPT-DEC-008` already claimed by open PR #9 → this transaction uses `-009`; `SUP-002`, `GRD-004`–`007` free) · PR #9 head unchanged and not an ancestor of `main`. **3.** Produced **PR #11** on `cursor/work-horizon-reconciliation-5807`, stop `review_ready_pending_Nick_Knox`; `main` landing is a separate operator decision. **4.** Role **VACATED at stop** — this reconciliation thread does **not** retain it, and does not become the Gate-2 builder. **Prior holder before the carry, history only:** `THREAD LOCK PRESPINE-PHASEA-INTEGRATOR \| seat=OPUS \| visible="Pre-spine · Phase-A integration"`. |
| Integrator transfer posture | explicit transfer + freshness/collision check + shared-surface ownership receipt REQUIRED before any replacement holder acts |

**Base + source-resolution law — TWO REFERENCES (Agent Work Protocol §2.1 Two-Reference Boot Law).** All five lane branches are pinned to the **live content base named in the `lane_content_base_sha` row of the table above — that row is the only place this SHA appears, by design.** Do not restate the base SHA in prose anywhere; duplicated SHAs go stale and create false drift signals. `main` sits an unfixed number of commits ahead; that distance is **normal, not drift**, and is not grounds to stop.

- **Current control-plane surfaces resolve from the CURRENT `main` tip:** `AGENTS.md` · `04_manifest_read_graph.md` · **this checkpoint** · lane/integrator state. **Never** read these from the content base — an older base is a frozen input, not a status report, and will still describe launch as held.
- **Substantive lane inputs resolve at the content base named ONLY in the `lane_content_base_sha` table row above**, unless a launch card explicitly supplies a different immutable ref.
- **Named exception:** the **Demand Gate-0 packet** resolves at branch `analysis/demand-engagement-gate0-recovery`, commit `b191d75423b256b52a1693913d19b88f953fd533`, blob `fd5b7fc7a10b02f3d83fadf2a82f667db163a8fa`.
- If this launch receipt does **not** name the lane branch/base you are opening, **STOP for reconciliation.**

**Shared surfaces owned EXCLUSIVELY by the integrator role** (read-only to all five lanes): `AGENTS.md` · this checkpoint · `04_manifest_read_graph.md` · `01_master_corpus_catalog.md` · `03_decision_extraction_ledger.md` · `06_guardrail_antipattern_digest.md` · `08_open_review_queue.md` · `future_work_registry.md` · the off-repo controlling-plan banner.

| Lane / relay key | Branch (head = **the `lane_content_base_sha` above**) | State | Owner | Output object |
|---|---|---|---|---|
| `CARE-TASKD-INPUT` | `analysis/care-taskd-input-state` | `not_started` | `unassigned_pending_thread_lock` | `.cursor/plans/v4_taskd_input_state_receipt_care_2026-08-04.md` |
| `GRR-TASKD-INPUT` | `analysis/accountability-taskd-input-state` | `not_started` | `unassigned_pending_thread_lock` | `.cursor/plans/v4_taskd_input_state_receipt_grr_2026-08-04.md` |
| `INS-G0-MIXEDFIN` | `analysis/insurance-payer-oop-g0` (+ successor gate branches per the §4.2 base exception) | **`landed · phase_a_input_complete_at_gate1b_ownership_maturity` (2026-08-08)** — delivered lineage **Gate 0 → Gate 1a → Gate 1b**; Gate 2 is a successor pointer OUTSIDE Phase A — its execution and acceptance state resolve from the Gate-2 brief's state table, not from this row | `THREAD LOCK: INS-G1B-PARENT-CARRY` (carry complete) | `.cursor/plans/v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` |
| `OPECON-G0-COUNTERPARTY` | `analysis/nonlabor-operator-economics-counterparty-g0` | `not_started` | `unassigned_pending_thread_lock` | `.cursor/plans/v4_nonlabor_operator_economics_counterparty_gate0_carrier_2026-08-04.md` |
| `C45-P2-ANCHORS` | `analysis/c4-5-phase2-anchor-verification` | `not_started` | `unassigned_pending_thread_lock` | `.cursor/plans/v4_C4_5_phase2_six_source_anchor_verification_2026-08-04.md` |

Every lane: **worktree = environment-local / recreatable (non-canonical)**; **stop = `review_ready_pending_integrator`**; mandatory input floor + output contract = map §7.1 (Cards 1–5 + the common lane output contract).

**State:** Phase-A envelope **accepted**; lane containers **prepared and pinned**; agent execution is authorized **only after each lane receives and accepts its exact thread/relay lock**; **no successor phase auto-starts** (C3.9, final Task-D, full C4.5, spine, C5 and all proof programs remain gated).

**★ ACTIVATION IS OPTIONAL AND OPERATOR-CONTROLLED (2026-08-05).** The five lanes are a **prepared, independently activatable inventory** — *not* a batch that must launch together. **Phase A does NOT require five simultaneous agents.** The operator may activate **one lane, any subset, all remaining, or none yet**; dormant lanes stay pinned at `not_started` indefinitely, and nothing auto-starts or expires. The point of the envelope is to prove concurrency is *available*, not to compel it.

- **★ 2026-08-05 — LANE HOLD LIFTED; `INS-G0-MIXEDFIN` AUTHORIZED TO START — HISTORICAL, DISCHARGED 2026-08-08.** The mechanics review closed (`D0THES-REV-212`), §2.1 as rewritten landed on `main` at `7da3b2a…` (§4.1a), and that state closeout discharged the hold. **Insurance / Payer / OOP Gate-0 was then authorized as the single active Phase-A lane; it has since COMPLETED, so no lane is currently authorized** — the operator selects from the four remaining. The base is **not** rotated; the other four lanes stay `not_started`. **The activation receipt that follows is a HISTORICAL launch record, not a live instruction.**

**★ `INS-G0-MIXEDFIN` activation receipt (2026-08-05) — HISTORICAL / DISCHARGED. This lane ran and completed; the block below is retained as the launch record and as the reusable shape of a lane receipt. It is NOT an instruction to start Insurance. Do not boot a lane from it.**

| Field | Value |
|---|---|
| Relay / lane key | `INS-G0-MIXEDFIN` |
| Branch | `analysis/insurance-payer-oop-g0` — **already prepared; do not create a new branch and do not re-pin** |
| Content base | the base pinned in the `lane_content_base_sha` row of the §4.2 table above — **that row is the single owning source** (§2.1 Single-source law); do not restate it elsewhere |
| Posture (§2.1) | **`durable_lane` inside the coordinated package `PRESPINE-PHASEA`** — continuity contract `L1`–`L8` **plus** the coordination overlay, because this package has protected shared surfaces and an eventual reintegration |
| Two-reference boot | **genuinely in effect** — read `AGENTS.md`, the read graph, this checkpoint and lane/integrator state from **current `main`**; resolve substantive inputs at the content base unless the card pins otherwise |
| Input floor + output contract | map §7.1 **Card 3** + the common lane output contract (eleven elements) |
| Output object | `.cursor/plans/v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` |
| Writable scope | **its own output object only.** All shared control-plane surfaces are read-only (`C1`) — return proposed rows and routing, never land them |
| Integrator | `PRESPINE-PHASEA-INTEGRATOR` (transferable role) lands shared-surface changes at the parent integration transaction (`C5`) |
| Stop condition | ~~`review_ready_pending_integrator`~~ → **REACHED AND DISCHARGED 2026-08-08 by the Insurance parent carry.** |
| **★ DELIVERED PHASE-A LINEAGE (2026-08-08)** | **Gate 0 → Gate 1a → Gate 1b.** Gate 0 was the commissioned output; **Gate 1a and Gate 1b are depth beyond what was commissioned**, delivered as a stronger-than-required input |
| **★ PHASE-A STATE** | **`landed · phase_a_input_complete_at_gate1b_ownership_maturity`** — the Phase-A INPUT obligation is **satisfied and exceeded**. This does **not** close the wider Insurance arc |
| **★ SUCCESSOR POINTER** | **Gate 2 · OUTSIDE Phase A · `not_started` · construction MAY BEGIN · C3.9 binds at FINAL ACCEPTANCE (`D0CKPT-DEC-009`).** Gate 2 is a **successor pointer, never a lineage element**, and must never be written into the Phase-A lineage chain. Brief: `v4_INS_G2_operating_composition_and_sufficiency_brief_2026-08-08.md`. **Not blocking Task-D** — per `D0THES-DEC-039` Task-D consumes the Gate-1b CANDIDATE input; Gate 2 *upgrades* that maturity and its criticality is an **output of Task-D's verdict** |
| **★ ACCEPTED RESULT** | **Axis 1 `NO_SHARED_FINANCING_TRUTH_SUBSTRATE` · Axis 2 `FIRST_CLASS_MIXED_FINANCING_OPERATING_PROFILE REQUIRED`**; maturity `READY_AS_GATE1B_OWNERSHIP_INPUT` / `NOT_READY_AS_FINAL_INSURANCE_COMPOSITION_INPUT`. All `analysis_nonbinding`, nothing promoted |
| **★ BRANCH / BASE EXCEPTION — recorded RETROACTIVELY** | Gate 0 sits on the pinned content base as directed. **Gate 1a and Gate 1b were opened on NEW branches from the then-current `main` (`d592e40`), which the lane card did not authorize.** Both bases were **disclosed contemporaneously** in the Gate-1a handoff, but **no explicit AWP §2.1 common-base exception was recorded at the time.** Disposition: **`accepted_nonconformance_with_bounded_corrective_disposition`** — later sequential gates legitimately required the approved successor estate (two-reference boot), and both branches were additive-only touching zero shared surfaces. **This exception is recorded RETROACTIVELY; it was not contemporaneously compliant, and nothing here should be read as saying otherwise.** Going forward, further Insurance gates branch from the then-current approved successor state and this gate-lineage block is the authority for which branch carries which gate |
| **★ INTEGRATOR TRANSFER (durable record, per §2.1 integrator-transfer law)** | `PRESPINE-PHASEA-INTEGRATOR` transferred **2026-08-08** from `THREAD LOCK PRESPINE-PHASEA-INTEGRATOR \| seat=OPUS \| visible="Pre-spine · Phase-A integration"` **to** `THREAD LOCK: INS-G1B-PARENT-CARRY \| seat=OPUS \| visible="Insurance · Parent carry"`. **Operator authorization: Nick, explicit, 2026-08-08.** Freshness at assumption: `main` unmoved at `d592e40` · all five child heads unchanged · checkpoint and integrator row unchanged · collision scan across all ten repository shared surfaces clean · five-head merge proof re-run and passing · 13 blob-equality checks passing · six canonical region-content digests passing. Scope granted: **branch-only assembly on `integration/ins-g1b-parent-carry-gate2-prep`. `main` landing NOT authorized** — that is a separate operator decision |
| **★ OWED FOLLOW-UP (do not lose)** | **PR #9** — a separate parked **Tier-4** governance proposal (delegation posture, authorization and capture) on branch `governance/agent-delegation-supervision-capture`. **Deliberately excluded from this carry** per §2.1 package-membership law. It owns its **own** decision row (`D0CKPT-DEC-008`), `FWREG-010` update, proposal-to-pointer normalization and Tier-3/4 closeout. **Resolve its head from the branch, never from this row.** |
| Explicitly NOT authorized | base rotation or re-pin · a new envelope · sibling lane launch · writing any other lane's branch or output · merging/fast-forwarding `main` · repointing the checkpoint · jumping to Task-D, C3.9, full C4.5, the spine or C5 · promoting anything |

**Lane agency (map §7.1 aperture clause — read before starting).** The source floor is a **minimum, not a boundary**: omitting a floor source is a defect, and stopping at the floor is also a defect. Returning *"this framing is misrouted / the floor is incomplete / this needs no separate object / Task-D cannot yet rely on this input, and here is exactly why"* — **with evidence** — is a valid and successful lane outcome. Do not manufacture closure and do not mint a payer domain.

**This is the first real execution of the rewritten §2.1.** Per `D0CKPT-GRD-003` and `10` Step 5, Phase-A execution evidence is the basis for keeping or de-scaffolding these controls — if a control proves ceremonial in practice, that is a finding worth reporting, not a rule to obey silently.
- **Care, GRR, Non-Labor Operator Economics and Time remain prepared and idle** until separately activated. Do not read their presence here as authorization to begin them.
- **The lane set is amendable** — findings may justify adding, splitting, merging, pausing, retiring or reclassifying a lane. No lane launches silently; the integrator amends the accepted envelope (branch · base · floor · output · collision surfaces · stop) before it starts.
- **Lanes are work partitions, not architecture boundaries.** Outputs are provisional carriers; the integrator and Task-D must recombine them against each other and the wider estate, and may reject, split, merge or reroute any lane's proposed decomposition. Partitioning for throughput must never harden into ontology or justify a bolt-on. See map §7.
- **Task-D remains held** pending the input set actually required at its own later gate — but **lane activation order and concurrency are operator-controlled**, not dictated by Task-D.

**What this is:** `PRESPINE-PHASEA` is **one work-package instance** of the **Agent Work Blueprint** inside Build OS **Layer 2 — Execution Layer**. It uses `agent_work_protocol.md` §2.1's **core lane contract plus the coordination overlay** (it has sibling lanes, a common base, protected shared surfaces, one integrator, and eventual cross-lane/Task-D reintegration). A single-lane package would use the **core contract alone** — still pinned, still one writer, still durably handed off. **A lane is a durable partition with an owner and a boundary; solo / parallel / coupled / dependent / sequenced are orthogonal properties, not lane types. Lanes here may be dependent, sequential or concurrent, and activation follows operator choice plus declared dependencies.** Conceptual identity, operating principle (*partitions are provisional; reintegration is mandatory*) and vocabulary → `09_omni_build_os_layer_model.md` Layer 2. External comparators → `comparator_analogy_registry.md`. **Other packages will exist with their own envelopes; this receipt covers only this one.**
2. **C3.9** plastics/medspa population — after Phase A.
3. **Final Task-D** (§7 verdict) — after C3.9; consumes the Phase-A carriers + C3.9 fixture.
4. **Full C4.5** temporal pass — after Task-D.
5. **Final sufficiency receipt → v4 Spine Draft 0.**

**Task-D final population is HELD** pending Phase A + C3.9. This **supersedes any earlier "Task-D is the immediate next home" reading** in §4 / §5 / this file: Task-D remains required pre-spine, but the accepted immediate next work is Phase A. Demand Gate-1 is parallel/non-blocking; H1 is tested inside Task-D first; C3.9 precedes final Task-D. Reusable contract: `D0CKPT-DEC-005` / `D0CKPT-GRD-002`.

---

## §5 — Portfolio matrix (carrier-supported depth only)

| Area | State | Next valid trigger |
|---|---|---|
| C4.4 Reservoirs | Architecture/authorability CLOSED; nonbinding; impl unproven | Portfolio landing → Task-D/C5/Runtime consumption |
| C4.5 Time | Gate-0 accepted; full pass not started | **Phase-A lane `C45-P2-ANCHORS`: six-source anchor verification micro-pass — prepared and `not_started`, operator-controlled** (§4.1/§4.2; still owed). Then provisional lens in Task-D; full C4.5 pass after Task-D, before spine |
| Care | Forensic Lanes 1–6 accepted; capture FROZEN; not closed | **Phase-A lane `CARE-TASKD-INPUT`: version-pinned Task-D Input-State Receipt** (§4.1; no Care redesign, no forced closure) — prepared and `not_started`; **no authorization until the operator selects it** |
| Platform | Core decomposition provisionally stable; not closed | Integrated review / Task-D pressure |
| Accountability/GRR | Review-ready, provisionally stable, nonbinding; not closed | **Phase-A lane `GRR-TASKD-INPUT`: version-pinned Task-D Input-State Receipt** (§4.1; no GRR redesign, no forced closure) — prepared and `not_started`; **no authorization until the operator selects it** |
| Pharmacy/Rx | Gate-0/G2A + L2 accepted, landed `44feb15`; G2B deferred | Task-D/C5 consumption or G2B trigger |
| Demand/Engagement | Gate-0A/0B accepted; Track-A Gate-1 kicked off (branch); not next | Operator-controlled opening |
| Runtime | C4.4-G2 consumption bridge accepted (`de5b9a1`); full formulation OPEN; `FWREG-010` OPEN | Runtime formulation + Task-D integration |
| Build OS | Five-layer model active (permanent). **Layer 2 partially operationalized 2026-08-04**: Agent Work Protocol §2.1 supplies the human-supervised parallel-lane/work-package/handoff contract (`D0CKPT-DEC-005`); automated lane registry, ownership leases, locks, merge queue, semantic collision detection, CI/proof automation and the Layer-3 command layer remain **OPEN** (`D0THES-REV-158`) | Continue through Build Entry; lane tooling + Build-Entry vNext re-point remain unresolved |
| Build Entry | Active gate, frozen against pre-vNext read path | Repoint + revalidate before admitting F-Self/Steel-Thread |
| Task-D | Interim; NO §7 verdict; required pre-spine; final population **HELD** | **After Phase A + C3.9** (§4.1) → consume the five Phase-A carriers + C3.9 fixture → final §7 verdict |
| C3.9 plastics/medspa | Population shell only | **After Phase A** (§4.1) — carries insurance/OOP coexistence; then Task-D fixture |
| Cross-facet process | Process agreed + durable (pharmacy handoff §5); worksheet branch `a526b88` **remote-visible, quarantined, unregistered — NOT local-only** (verified 2026-08-04: `origin/analysis/cross-facet-operating-model-reconciliation` exists; corrects the earlier "local-only/unpushed" wording here and in `D0CKPT-DEC-004`) | Extract process (this checkpoint + `D0CKPT-DEC-004`); do NOT promote worksheet answers |
| Insurance/payer | Gate-1b ownership input **exists and is carried/accepted at `analysis_nonbinding` maturity**; **no payer domain minted**; wider Insurance arc remains OPEN at Gate 2. Substantive home = D6 §12 + `D0THES-REV-159/160`; `FWREG-017` = activation pointer | **COMPLETE (2026-08-08): Phase-A lane `INS-G0-MIXEDFIN` — Insurance/Payer/OOP Gate-0** delivered Gate 0 → Gate 1a → Gate 1b (§4.1/§4.2; no payer domain minted). Wider arc OPEN at Gate 2, outside Phase A; Gate-2 state is owned by the Gate-2 brief |
| Reactor | Frozen, unpromoted candidate (EVRUN-008 = R3 residual) | Only via named gates |
| Polaris | Active nonbinding alignment/naming lock; owns no truth | Spine consumption; later contract realization |
| Connectors/bootstrap/scale | Obligations + proof debt named; no e2e impl proof | Task-D composition + Enterprise Bootstrap Steel Thread |
| Represented-principal access | Architecture-covered (computed access); proxy/guardian mechanics deferred | Identity/RBAC/Consent/Federation C5 |
| Patient portability | Continuity-without-captivity accepted in principle; cross-namespace mechanics unresolved | Identity/Federation/C5; moat open-review |
| Provider portability | Layer-specific: personal library/credentials portable; employer/private-alpha/patient-data/competency not automatically | C5 access/partition/credential contracts |

---

## §6 — Parallelism controls (portfolio-control surface)

Parallel arc work is safe only when ALL hold (the missing surface that produced the portfolio-control debt):

- one current portfolio checkpoint (this file);
- one Nick-controlled sequencing surface;
- **one branch owner per arc; one control-plane integrator** (only one editor of AGENTS / catalog / read-graph / checkpoint / controlling-plan banner per transaction);
- no concurrent uncontrolled edits to AGENTS / catalog / read-graph / checkpoint;
- current working packet + terminus per arc;
- explicit dependency + collision set per arc;
- mandatory decision / maturity / classification receipt per arc;
- raw adversarial outputs preserved directly (never flattened);
- periodic portfolio-state reconciliation;
- explicit branch-to-main landing policy (landing ≠ promotion);
- completed stop report before an arc releases context.

---

## §7 — Hard stops (this checkpoint does NOT authorize)

- No spine / thesis / C5 prose.
- No proof-program execution (F-Self / Enterprise Bootstrap).
- No automatic Task-D launch (Nick selects it explicitly).
- No further C4.4 architecture / test / A-B-C work; no C4.4 reopening (S1–S6, S2 taxonomy, Intelligence Foundry composition, Simulation boundary, two-speed seam, enterprise interfaces, admission operations, downstream authoring contracts).
- No new plane / domain / store / seventh S-class; no schema / API / service / vendor decision.
- No promotion of any C4.4 analysis.
- No FWREG-only preservation claim; no flattening of fresh Angle-B.
- No registration / merge / push of the quarantined cross-facet worksheet branch; its provisional A–H answers stay non-controlling.
- No universal boot file.

---

## §8 — Transaction record (this checkpoint's own landing)

- Branch: `integration/pre-spine-portfolio-reconciliation-post-c4-4` (from `main` `a87d305`).
- Commit 1: curated C4.4 final-state landing — R5-byte-exact content for the 8 C4.4 files (discoverability, not promotion).
- Commit 2: this checkpoint + the C4.4 §0-CLOSEOUT G5 pin + AGENTS/#15 repoint + catalog registration + decision-ledger `D0CKPT-DEC-004` (the repeatable arc-completion / process law).
- Off-repo controlling-plan banner (`~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md`) reconciled in the same working session (reported separately; outside the repo commit).
- **Landing authorization satisfied by Nick + Knox; the normalized integration tip was landed on `main` via a normal fast-forward (no force, no merge commit).** Landing = discoverability, NOT promotion; the analysis/development history remains on the C4.4 analysis branches.

### §8.1 — Amendment transaction (2026-08-04): pre-spine sequence + parallel-work contract

- Branch: `planning/prespine-sufficiency-map` (built on the relay-integrity landing; strict fast-forward from `main`).
- **Commit 1** — reusable parallel work-package contract: Agent Work Protocol §2.1 (Build OS Layer-2 operationalization + build-vs-product firewall) · sufficiency-map §7 conformance + five launch cards · `D0CKPT-DEC-005` (ledger) · `D0CKPT-GRD-002` (guardrail) · Volume 8 addendum. Exactly 5 files.
- **Commit 2** — accept + land + synchronize: map → accepted+landed · **this checkpoint amended (§4.1 accepted pre-spine sequence + cross-facet wording correction)** · AGENTS + read-graph #15 embedded summaries synced (same checkpoint file) · `D0THES-DEC-039` + `D0CKPT-DEC-005` activated · catalog + FWREG-017/018 + REV-159/164 + `FWREG-010`/`D0THES-REV-158` partial-progress notes. Exactly 8 files.
- **This is an amendment, not a new checkpoint:** `AGENTS.md` Current Checkpoint Handoff and read-graph Tier-0 #15 still name THIS file; no new read-graph node. Landed on `main` via fast-forward (no force, no merge). Off-repo controlling-plan banner reconciled in the same working session (reported separately).
