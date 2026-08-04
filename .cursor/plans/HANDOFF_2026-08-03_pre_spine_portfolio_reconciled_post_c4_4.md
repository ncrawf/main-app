# HANDOFF — 2026-08-03 · Pre-Spine Portfolio & Control-Plane Reconciliation (post-C4.4)

Status: `pre_spine_portfolio_control_plane_reconciled · C4.4_ARCHITECTURE_AUTHORABILITY_ARC_CLOSED · C4.4_implementation_UNPROVEN · accepted_C4.4_estate_curated_landed_on_main_for_discoverability · analysis_nonbinding · not_promoted · sequencing_OPERATOR_CONTROLLED · no_arc_auto_start · main_landed_via_fast_forward_Nick+Knox_authorized · AMENDED_2026-08-04_prespine_sufficiency_map_accepted+landed (§4.1) · phase_A_five_lanes_NEXT_AUTHORIZED · final_TaskD_HELD_pending_phaseA+C3.9 · parallel_work_contract=AWP_§2.1/D0CKPT-DEC-005`

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

1. **Phase A — five parallel input lanes = the next authorized parallel work:** Care Input-State Receipt · GRR/Accountability Input-State Receipt · Insurance/Payer/OOP Gate-0 · Non-Labor Operator Economics + Counterparty Residual Gate-0 · C4.5 Phase-2 six-source anchor verification. Governed by **Agent Work Protocol §2.1** (Parallel Work-Package Launch and Re-Entry Contract; first concrete envelope = map §7/§7.1). One writer per branch; shared control-plane surfaces read-only to lanes; the current Opus thread is the sole **control-plane integrator**; lanes return `review_ready_pending_integrator` carriers.
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
| C4.5 Time | Gate-0 accepted; full pass not started | Provisional lens in Task-D; full pass after Task-D, before spine |
| Care | Forensic Lanes 1–6 accepted; capture FROZEN; not closed | Nick/Knox bounded closure |
| Platform | Core decomposition provisionally stable; not closed | Integrated review / Task-D pressure |
| Accountability/GRR | Review-ready, provisionally stable, nonbinding; not closed | Integrated review / C5 later |
| Pharmacy/Rx | Gate-0/G2A + L2 accepted, landed `44feb15`; G2B deferred | Task-D/C5 consumption or G2B trigger |
| Demand/Engagement | Gate-0A/0B accepted; Track-A Gate-1 kicked off (branch); not next | Operator-controlled opening |
| Runtime | C4.4-G2 consumption bridge accepted (`de5b9a1`); full formulation OPEN; `FWREG-010` OPEN | Runtime formulation + Task-D integration |
| Build OS | Five-layer model active (permanent) | Continue through Build Entry |
| Build Entry | Active gate, frozen against pre-vNext read path | Repoint + revalidate before admitting F-Self/Steel-Thread |
| Task-D | Interim; NO §7 verdict; required pre-spine | Consume C4.4/fresh-B + required arcs → final §7 |
| C3.9 plastics/medspa | Population shell only | Operator-controlled population; Task-D fixture |
| Cross-facet process | Process agreed + durable (pharmacy handoff §5); worksheet branch `a526b88` **remote-visible, quarantined, unregistered — NOT local-only** (verified 2026-08-04: `origin/analysis/cross-facet-operating-model-reconciliation` exists; corrects the earlier "local-only/unpushed" wording here and in `D0CKPT-DEC-004`) | Extract process (this checkpoint + `D0CKPT-DEC-004`); do NOT promote worksheet answers |
| Insurance/payer | No accepted active carrier this pass | Future arc when Nick opens it |
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
