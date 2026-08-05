# Pre-Spine Sufficiency & Task-D Re-Entry Map — 2026-08-04

Document type: `handoff_or_readiness_gate`
Authority: `analysis_nonbinding`
Status: `sequence_accepted_nick_knox · landed_on_main · active_prespine_sequence_home · not_checkpoint · no_new_read_graph_node · launch_envelope_ACCEPTED_Nick+Knox · phase_A_READY_FOR_ASSIGNED_THREAD_LAUNCH`
Domain(s): `architecture_governance, operator_governance, portfolio_sequencing`
Lifecycle role: `bounded Task-D readiness / pre-spine sufficiency gate — a dependency graph + concern→disposition classification + minimum sequence + parallel-launch envelope; the executable answer to "what is next before Task-D population and the spine." Explicitly NOT the current checkpoint and NOT the Task-D scoring method.`
Source-of-truth relationship: `nonbinding readiness gate only; it ROUTES concerns to their existing homes (FWREG rows, D6/REV-159/160, C4.4/Angle-B, Demand Gate-0) and names the gaps; it invents NO architecture, mints NO domain, and overrides NO contract, checkpoint, or gate. The current checkpoint HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md remains authoritative for program state; the Task-D method (v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md) remains frozen and unchanged.`
Supersedes: `none`
Superseded by: `none`
Manifest action: `add_tier2 · no_new_route_needed` (accepted+landed: Tier-0 reaches this map through the amended Aug-3 checkpoint — see §9; no new read-graph node)
Review gate: `SATISFIED. Map body + sequence accepted (Nick operator + Knox final byte, 2026-08-04). Launch envelope §7/§7.1 fidelity-hardened and ACCEPTED at final content byte pass (Nick + Knox, 2026-08-04). Phase-A lane containers are prepared and pinned; lane EXECUTION begins only when each lane receives and accepts its exact thread/relay lock (per the checkpoint launch receipt). No successor phase auto-starts.`

> **What this is / is not.** A bounded, mostly-read-only Task-D **readiness/sufficiency gate**: inventory every spine-shaping concern → give each a disposition → name the minimum sequence and the parallel-launch envelope. It is **not** a new controlling document, **not** a checkpoint, **not** the Task-D scoring method, and **not** a new architecture arc. **Sequence accepted + landed on `main`:** the current Aug-3 checkpoint points to this map; final Task-D population is **held** pending Phase A (five lanes) + C3.9. The fidelity-hardened §7/§7.1 envelope is **ACCEPTED** (Nick + Knox, 2026-08-04) and the five Phase-A lane branches are **pinned to the accepted content base** per the checkpoint's post-acceptance launch receipt (Agent Work Protocol §2.1 Base-binding law). The lanes are **`not_started` and empty**; execution begins per-lane only when its exact thread/relay lock is accepted. The map **does not bind architecture and does not promote its 2030/2035 ownership hypothesis** (§5 stays a posture-to-test). It holds the prior "go straight into Task-D re-entry" relay.

---

## §0 — Source posture (what was actually inspected this correction pass)
- **Read fully (this pass):** this map; `08_open_review_queue.md` rows `D0THES-REV-159` / `D0THES-REV-160` / `D0THES-REV-164`; `contracts/business_ops_workforce_contract.md` passport + §1.5 + §§1–5 + ownership boundary; `contracts/D6_commerce_contract.md` §12 insurance-deferral rows; `00_document_governance_and_taxonomy_2026-05-19.md` category list; the Demand Gate-0/Gate-1 catalog + read-graph `9l` rows on branch `analysis/external-engagement-gate1-operating-reality`; the full remote branch ahead/behind census + local worktree census.
- **Existing backend ownership already represented (do NOT re-mint):** **D6** owns patient-facing commerce — orders/lines, entitlements, payment state, refunds/credits/adjustments, money-rail reconciliation, commercial meaning around external settlement. **BIZOPS** (`business_ops_workforce_contract.md`, build-facing canonical **draft pending trifecta ratification**, `REV-164` proposed-resolved) owns the workforce/labor truth — employment relationship, provider operational-state, shifts/time-clock, worked hours, pay rules/periods, **payroll computation**, **commission payout**, labor cost, workforce-intelligence state. **External PSP/payroll/HRIS rails execute** native settlement + statutory mechanics (withholding/filing/direct-deposit/W-2/1099) — they are **not** the source of OMNI's commerce or labor truth. The genuinely open gap that Track B addresses is therefore the **non-labor** operator-economics residual (below), not the whole business backend.
- **Consulted at pointer / row / catalog level (NOT full-body this pass):** Task-D method `v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md` + interim `v4_C4_2A_task_d_interim_closeout_and_pause.md` / `v4_C4_2B_task_d_opus_builder_p0_verbatim.md` / `v4_C4_2C_task_d_gemini_b_partial_adversary_verbatim.md`; Care capture `v4_C4_care_operating_model_capture.md`; GRR capture `v4_C4_governed_reporting_resolution_capture.md`; C4.5 charter `v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md`; C3.9 shell `v4_C3_9_plastics_medspa_care_setting_pressure_test.md`; pharmacy/cross-facet `HANDOFF_2026-07-27_c4-6-pharmacy-and-cross-facet.md`; C4.4 G5 packet `v4_C4_4_disposition_ledger_and_v4_handoff.md` + raw `c4_4_g5_tests/results/re_adjudication/ANGLE_B_FRESH_KNOX_RAW.md`; current checkpoint `HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md`.
- **Immutable branch refs cited:** Demand Gate-0 `b191d75423b256b52a1693913d19b88f953fd533`; Demand Gate-1 `22bcf30e66e24b7462084c9a56e40b1f408e4699`.
- **Not inspected full-body:** the Task-D / Care / GRR / C4.5 / EVRUN-000012 capture bodies (consulted at row/pointer level only); local-only branches or worktree dirty-state beyond the census in §11; anything not exposed through GitHub.
- **Correction note:** the first draft of this map over-claimed — it declared Insurance un-homed (calling it a genuine gap with no existing destination) and asserted "~80% already homed" without disclosing read depth. Both are corrected below; this posture block is the disclosure Knox required.

---

## §1 — Plain English: what Task-D is, and why we are NOT populating it yet

**Task-D is the enterprise reality-check exam OMNI's architecture must pass before the thesis spine.** It asks: *if Palantir, Epic, Microsoft/Nuance, ServiceNow, Salesforce, enterprise data platforms, and the big AI runtimes are all excellent and may be combined — what must OMNI actually **own**, what can it **buy/wrap/host-on/partner** for, how much configuration and "seam tax" is left, and is OMNI's healthcare-specific operating physics real enough to justify the spine?* Task-D is an **integrator and admission test**, not the home where missing architecture is invented; it steelmans Palantir rather than treating it as a generic database. **Your fear — "Palantir beats us on the backend" — is Task-D's core question.**

**Why not now — and the correct requirement (corrected).** Task-D does **not** require every input to be "finished" or "closed." It is explicitly designed to distinguish architecture from contract from implementation from evaluation from production, and `OMNI_actual` from `OMNI_target`; it can legitimately examine an **open or candidate** input and return `SPINE_READY`, `SPINE_READY_WITH_NAMED_RECONCILIATIONS`, or `NOT_READY`. **Task-D is allowed to fail OMNI.** So the real requirement is not fake closure but **version-pinned Input-State Receipts**: each input must be pinned (carrier + blob), maturity-declared, and stable enough to test. Care and GRR get **Input-State Receipts**, *not* premature "closure receipts" — the Care capture itself is a REVIEW-DRAFT and must not be forced into fake architectural closure just to make a dependency chart look green.

---

## §2 — Disposition model (corrected)

Concerns are **not** single-bucket. **Each concern receives one PRIMARY disposition and zero or more explicit SECONDARY dispositions.** Dispositions:
1. **REQUIRED-BEFORE-TASK-D** — must be version-pinned (Input-State Receipt or Gate-0 output) before final Task-D population.
2. **CONSUMED-INSIDE-TASK-D** — Task-D tests/answers it directly from pinned inputs.
3. **SPINE-POSTURE-NOW / CONTRACT-LATER** — constitutional stance settled before the spine; exact contract is C5.
4. **FUTURE-VERTICAL-FALSIFIER** — used as a fixture; not its own arc.
5. **IMPLEMENTATION-PROOF-AFTER-SPINE** — real proof (Enterprise Bootstrap Steel Thread, F-Self) after the spine.

---

## §3 — Concern → disposition (primary + secondary)

| Concern | Existing home | Primary | Secondary | Note |
|---|---|---|---|---|
| Palantir/Epic/MS/ServiceNow backend threat; build/buy/wrap/host/partner | Task-D core + C4.4 Angle-B | CONSUMED-INSIDE-TASK-D | — | The exam itself. |
| Connectors (banks/email/spreadsheets/payroll/ERP/data-platforms/model-runtimes/CDC/lineage) | C4.4 Angle-B connector ruling | CONSUMED-INSIDE-TASK-D | SPINE-POSTURE-NOW | Needs Task-D construction briefs + switching proofs, not a per-connector arc. |
| **Insurance / payer / coverage / OOP / mixed financing** | **D6 (declared future home) + `D0THES-REV-159` (canonical unresolved row) + `D0THES-REV-160` (adjacent financing) + `FWREG-017` (activation/sequencing pointer)** | REQUIRED-BEFORE-TASK-D | SPINE-POSTURE-NOW | **NOT un-homed.** No accepted active carrier / completed architecture, but D6 is the rightful future home and REV-159 the open row. Care-authority vs financing-authority must stay distinct-but-linked. See §4.1. |
| **Non-Labor Operator Economics Track B + Counterparty Residual** (AP/supplier settlement · procurement · non-labor COGS · media spend · operating budgets · general operating subledger) | Demand **Gate-0** owner-gap cluster → candidate **Track B, Gate-0 OWED** (`b191d75…`), **composed against existing D6 + BIZOPS ownership** | REQUIRED-BEFORE-TASK-D | SPINE-POSTURE-NOW | **Second real gap — the NON-LABOR residual only.** D6 already owns patient commerce/money-lifecycle; BIZOPS already owns workforce/labor truth + payroll computation + commission payout + labor cost. Track B owns the *residual non-labor* boundary; it must **consume**, not re-mint, D6/BIZOPS. See §4.2. |
| Vendor / counterparty residual | EVRUN-000012 decomposition (no Vendor god-object) + Pharmacy (one solved subtype) | REQUIRED-BEFORE-TASK-D | CONSUMED-INSIDE-TASK-D | Bundled with Operator Economics as the **counterparty residual** receipt; no Vendor domain. |
| Care Operating Model | `FWREG-011` + `v4_C4_care_operating_model_capture.md` (REVIEW-DRAFT) | REQUIRED-BEFORE-TASK-D | — | Task-D **Input-State Receipt**, not closure. |
| GRR | `FWREG-009` + `v4_C4_governed_reporting_resolution_capture.md` | REQUIRED-BEFORE-TASK-D | — | Input-State Receipt, not closure. |
| Fleet deployment 50/100/1,000; sales/impl economics | Task-D config-burden machinery; Enterprise Bootstrap (post-spine); `FWREG-001` | CONSUMED-INSIDE-TASK-D | IMPLEMENTATION-PROOF-AFTER-SPINE | Task-D needs an instance-factory construction brief; the 1,000-deploy proof is post-spine. |
| Personal account / insurance info / "deploy to all federations?" | `FWREG-001` + Identity/RBAC/Consent/Federation C5 | SPINE-POSTURE-NOW | REQUIRED-BEFORE-TASK-D | Account anchors continuity; insurance facts source-attributed/temporal/correctable; authorized package/projection, not universal access; **federation ≠ global replication.** |
| Business-AI tools (OpenAI/Anthropic/agent runtimes) | `FWREG-010` + Task-D AI-rails | CONSUMED-INSIDE-TASK-D | SPINE-POSTURE-NOW | OMNI owns context selection/permissions/action-gates/eval/lineage/return-path; models own execution. |
| Demand / engagement / marketing | Demand Gate-0/0B **accepted** (`b191d75…`), Track-A Gate-1 in-progress (`22bcf30…`); `FWREG-014` | CONSUMED-INSIDE-TASK-D | FUTURE-VERTICAL-FALSIFIER | Accepted Gate-0 posture = minimum Task-D input; Gate-1 may run in parallel (not critical-path unless Nick makes it blocking). |
| Time / temporal (C4.5) | `FWREG-015` + `.cursor/plans/v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md` | REQUIRED-BEFORE-TASK-D (six-source anchor micro-pass) | — | Micro-pass verifies the provisional lens before Task-D temporal scoring; **full C4.5 after Task-D.** |
| "Run ON Palantir/Epic w/o surrendering authority" (H1) | `FWREG-016` | CONSUMED-INSIDE-TASK-D | — | Test inside Task-D first; separate realization arc only if Task-D leaves it open. |
| Robotics / devices | ownership table §5 | FUTURE-VERTICAL-FALSIFIER | — | No separate robotics arc now. |
| Dentistry | insurance/OOP fixture | FUTURE-VERTICAL-FALSIFIER | — | No dentistry arc; use as an insurance/OOP falsifier. |
| Plastics/medspa multi-site (C3.9) | `v4_C3_9_plastics_medspa_care_setting_pressure_test.md` (shell, pending) | REQUIRED-BEFORE-TASK-D (**ACCEPTED** — Nick operator + Knox, 2026-08-04) | FUTURE-VERTICAL-FALSIFIER | Stronger if it carries the insurance/OOP-coexistence question. |
| Agent Runtime / Build OS | `FWREG-010` (bounded C4.4-G2 bridge on main, blob `de5b9a1`) / Build OS `09`/`10`/`11` | SPINE-POSTURE-NOW / CONTRACT-LATER | — | Runtime BUILD deferred; map-depth only pre-spine. |
| C4.4 / relay-governance | CLOSED (C4.4 arc closed; relay rules landed 2026-08-04) | done | — | Not reopened. |

---

## §4 — The honest gap set (NOT "one gap")

### §4.1 Insurance / Payer / Coverage / OOP — **has a home; needs activation** (`FWREG-017` = pointer)
There is **no accepted active insurance carrier or completed architecture**, but Insurance is **not un-homed**: **D6 is the declared future commerce-side home** (D6 §12 explicitly defers insurance/Medicare/HSA-FSA mechanics), **`D0THES-REV-159`** is the canonical unresolved-review row, and **`D0THES-REV-160`** is adjacent financing-shape work. `FWREG-017` is an **activation + sequencing pointer**, not a newly invented substantive home, and it points at D6 + REV-159/160. Spine-shaping because the **care episode** and the **coverage/financing/settlement** lifecycles must stay **distinct but linked**. Invariants: denial ≠ "care not indicated"; prior-auth ≠ "payment guaranteed"; cash ≠ "clinically entitled"; insurance approval ≠ the clinical decision. Mixed financing (OOP · commercial · Medicare/Medicaid · employer · HSA/FSA · membership · financing · mixed · covered-reconstructive-beside-cash-cosmetic · sponsor-funded). **`D0THES-REV-159` is updated in this same transaction** to link this map + expand its trigger to Insurance/Payer/OOP Gate-0.

### §4.2 Non-Labor Operator Economics Track B + Counterparty residual — **the second gap** (Gate-0 OWED)
**Existing ownership first (do NOT reopen or re-mint):**
- **D6** owns patient-facing commerce — orders/lines, entitlements, payment meaning, refunds/credits/adjustments, money-rail reconciliation.
- **BIZOPS** owns the workforce/employment relationship, provider operational-state, shifts/time-clock, **payroll computation**, **commission payout**, and labor cost (build-facing canonical **draft pending ratification**, `REV-164`).
- **External PSP/payroll/HRIS/ERP rails execute** native settlement + statutory mechanics (withholding, filing, direct deposit, W-2/1099, GL/tax books) — executors, **not** the source of OMNI's commerce or labor truth.

**The actual open gap** is the **non-labor** residual that Demand Gate-0 found had *no canonical owner located in the inspected set*: **AP / supplier settlement · procurement · non-labor COGS · media spend · operating budgets · vendor invoices · general operating subledger · OMNI operational books vs external statutory GL/tax books · residual counterparty quality / warranty / recall / remedy.** This is dead-center of the "enterprise destroys us on the business backend" fear, but it is a **bounded residual**, not "the whole backend is unowned." Lane = **Non-Labor Operator Economics Track B + Counterparty Residual**, **composed against** existing D6 + BIZOPS ownership. **No new Operator-Economics or Vendor domain by fiat; do not reopen BIZOPS or D6.**

### §4.3 Version-pinned Care / GRR Input-State Receipts, and the fleet-deployment brief
Care + GRR are **moving inputs** (Care = REVIEW-DRAFT; GRR = review-ready). They need **Input-State Receipts** (carrier+blob · accepted/candidate/open · maturity across architecture/contract/build/eval/production · what Task-D may rely on · what remains unresolved · what Task-D may falsify · prohibited assumptions) — **not** fake closure. The fleet-deployment construction brief lives **inside** Task-D (plausibility), with executable proof post-spine.

---

## §5 — The 2030 / 2035 ownership posture to **test** (NOT canon)
**OMNI owns the *governed middle*, not every backend endpoint** — the middle is where care, business, authority, time, multiple principals, and consequences cross. **Hypothesis Task-D must falsify**, deliberately not promoted. Winning posture = **selectively native, composition-sovereign**: OMNI-native where healthcare continuity/authority/relationship/liability/cross-domain-consequence is strategic; buy/wrap/host/partner for commodity/mature machinery; keep switching + exit proofs. Losing extremes: build every backend (incumbents win on generic machinery) or outsource the middle (OMNI becomes a thin wrapper Palantir/an AI platform absorbs).

| External system | It may own | OMNI must own around it |
|---|---|---|
| Bank / PSP | settlement ledger, banking rail | payment intent, authority, episode linkage, reconciliation, evidence, dispute/remedy continuity |
| Accounting / ERP | statutory **GL / tax / AP books** (composed deployments) | **D6** owns patient commerce/order/entitlement/payment meaning; **BIZOPS** owns labor truth; **Track B** decides the *non-labor* operational/subledger ownership boundary. Do NOT collapse statutory books, OMNI operational truth, and care-commerce meaning into one owner. |
| Payroll / HRIS | native payroll **execution + statutory records** (withholding/filing/W-2/1099) — in a composed posture | **NOT universally conceded.** OMNI-primary target: **BIZOPS owns workforce/labor truth, payroll computation, commission payout, labor cost** (external rail executes only). Composed-enterprise: an external HRIS/payroll may retain native execution/statutory records while OMNI consumes governed projections + preserves care-relevant workforce context. **Task-D decides the viable posture by segment and proves switching/exit.** |
| Email / calendar | mailbox + transport | purpose, consent, relationship context, obligation, response, continuity |
| Spreadsheet / doc system | original artifact | custody, source identity, completeness, lineage, extraction candidates, governed adoption |
| Insurer / clearinghouse | payer adjudication, native records | source-attributed coverage state, care/financing separation, prior-auth/appeal obligations, patient responsibility, continuity |
| Palantir / Databricks | data integration, ontology, runtime, deployment, analysis | OMNI's healthcare constitution, authority, adoption, domain commit, care-business semantics, switching proof |
| OpenAI / Anthropic / models | model execution, generic agent capability | context selection, permissions, policy, action gates, evaluation, lineage, return path |
| Robotics / devices | device-native control + telemetry | clinical authorization, task intent, operational envelope, evidence, responsibility |

Deployment postures to test (not canon): **OMNI-primary** (small operators) · **OMNI-composed enterprise** (Epic/Palantir/ERP/HRIS keep native ledgers) · **OMNI federated network node** (operator-sovereign instances exchange authorized context without surrendering local authority).

---

## §6 — Minimum pre-spine sequence (with settled / recommendation / Nick-decision labels)

- **Step 0 — Sufficiency map (THIS gate).** Classification + dependency graph. Invents no architecture. *(SETTLED — this artifact.)*
- **Parallel Phase A — input preparation (5 lanes, §7):**
  1. Care Task-D **Input-State Receipt**. *(Knox recommendation → Nick)*
  2. GRR Task-D **Input-State Receipt**. *(Knox recommendation → Nick)*
  3. **Insurance / Payer / OOP Gate-0** (consumes D6 + REV-159/160). *(REQUIRED — Knox + Opus)*
  4. **Non-Labor Operator Economics Track B + Counterparty Residual Gate-0** (from Demand Gate-0 owed split). *(REQUIRED — Knox + Opus)*
  5. **C4.5 six-source anchor Phase-2 verification** (admits the provisional temporal lens). *(SETTLED — C4.5 charter locks micro-pass before Task-D temporal scoring)*
- **Phase B — C3.9 population** (plastics + medspa multi-site, carrying insurance/OOP coexistence), consuming Insurance + Operator-Economics findings. *(C3.9-before-Task-D = **ACCEPTED** — Nick operator + Knox final byte, 2026-08-04.)*
- **Phase C — Final Task-D population** with the verified provisional temporal lens → **§7 verdict** (`SPINE_READY` / `…WITH_NAMED_RECONCILIATIONS` / `NOT_READY`). *(SETTLED that Task-D precedes the spine.)*
- **Phase D — Full C4.5 temporal pass.** *(SETTLED — C4.5 charter: after Task-D, before spine.)*
- **Phase E — Final pre-spine sufficiency receipt** (yes/no; not an arc). *(Knox recommendation)*
- **Then — write the spine.**

**Accepted sequencing decisions (Nick operator + Knox final byte, 2026-08-04):** (1) **C3.9 runs before final Task-D** as the mixed-financing/multi-site/multi-operator falsifier, after Insurance + Operator-Economics Gate-0. (2) **Demand Track-A Gate-1 runs in parallel and is non-blocking**; accepted **Gate-0** posture is the minimum Task-D input unless later Gate-1 work exposes a genuinely spine-blocking contradiction; Gate-1 may **not** silently mutate the critical-path sequence. (3) **H1 is tested inside Task-D first**; a separate physical-realization arc opens only if Task-D leaves a material question unresolved.

---

## §7 — Prepared lane envelope (optional activation: one, some, all, or none)

**What this is, by name.** This is an instance of the **lane model + work-package contract + handoff contract** reserved under `09_omni_build_os_layer_model.md` **Layer 2 — Execution Layer**, implemented by Agent Work Protocol §2.1 (`D0CKPT-DEC-005`). It is a known pattern, not a novel invention: the **integration-manager workflow** (one writer per branch, a single integrator recombining) plus a **work-breakdown structure with a separate integration authority**. The enforcement half — protected trunk, proposals, required checks, merge queue, lane registry — is **Layer 3 and is NOT built**; it is routed to `D0THES-REV-158`. Do not re-derive or rename this; cite it.

**Activation is optional. This envelope PREPARES lanes; it does not require launching them.**
- It proves concurrent execution is *available*, not that it is obligatory.
- The operator may activate **one lane, any subset, all five, or none yet**.
- **Activating Insurance alone is a valid Phase-A start.**
- Dormant lanes stay pinned to the content base at `not_started` indefinitely. Nothing expires and nothing auto-starts.
- **Current selected priority: `INS-G0-MIXEDFIN` (Insurance / Payer / OOP Gate-0).** The other four are prepared and idle until separately activated.

**The lane set is amendable — it is not a fixed five-lane ontology.** Findings may justify **adding, splitting, merging, pausing, retiring or reclassifying** a lane. No new lane launches silently: the integrator amends this accepted envelope with the lane's branch, base, input floor, output object, collision surfaces and stop condition **before** it starts.

**Lanes are work partitions, NOT architecture boundaries.** This is the anti-silo rule and it is load-bearing:
- A lane output is a **provisional carrier**, never complete truth in isolation.
- The integrator and Task-D **must** reconcile lane outputs against each other **and against the wider estate** — testing overlaps, contradictions, missing seams, duplicated ownership and cross-domain consequences.
- They **may reject, split, merge or reroute** any lane's proposed decomposition.
- **A boundary that exists only because work was partitioned that way is not an architectural finding.** Partitioning for throughput must never harden into ontology or justify a bolt-on.

When activated, lanes run **from the SAME immutable `lane_content_base_sha`** — the accepted **content** commit, pinned by the current checkpoint's **post-acceptance launch receipt** (Agent Work Protocol §2.1 **Base-binding law**). The lane base sits some number of commits behind current `main`; that distance varies and is expected, not drift. **Branch refs + the launch receipt control** — this document does not self-stamp a SHA, and no agent should need a chat transcript to recover the base. **One writer per branch.**

| Visible title | Relay key | Branch | Output |
|---|---|---|---|
| Care · Task-D input state | `CARE-TASKD-INPUT` | `analysis/care-taskd-input-state` | Version-pinned Care Input-State Receipt |
| Accountability · Task-D input state | `GRR-TASKD-INPUT` | `analysis/accountability-taskd-input-state` | Version-pinned GRR Input-State Receipt |
| Insurance · Gate 0 | `INS-G0-MIXEDFIN` | `analysis/insurance-payer-oop-g0` | Insurance/Payer/OOP Gate-0 carrier consuming D6 + REV-159/160 |
| Operator economics · non-labor Gate 0 | `OPECON-G0-COUNTERPARTY` | `analysis/nonlabor-operator-economics-counterparty-g0` | Non-Labor Operator Economics Track B + Counterparty Residual Gate-0 carrier |
| Time · anchor verification | `C45-P2-ANCHORS` | `analysis/c4-5-phase2-anchor-verification` | Six-source verification + temporal-lens admission result |

**Shared-surface law.** The five substantive lane agents may **not** edit `AGENTS.md`, the current checkpoint, the read graph, the master catalog, the decision ledger, the open-review queue, FWREG, or the controlling-plan banner. They return **proposed** rows/routing. **One separate control-plane integrator role** — role key **`PRESPINE-PHASEA-INTEGRATOR`** — lands all shared-surface changes after the five candidate outputs are reviewed; this prevents the prior collision problem. The role is **transferable, not a permanent chat thread** (Agent Work Protocol §2.1 **Integrator-transfer law**).

**Reopen law.** A stale/diverged branch is **never resumed in place**. Create a fresh branch from current `main`, cite the old branch/commit as an **immutable source packet**, and curate substantive files forward.

> **Conformance to Agent Work Protocol §2.1 (this is the first concrete instance).** This launch envelope **conforms to Agent Work Protocol §2.1 (Parallel Work-Package Launch and Re-Entry Contract)** and is the **first concrete §2.1 / Build-OS-Layer-2 launch envelope** in the estate. The reusable contract now lives in the Protocol; this map is the first envelope that populates it. Consequences: future parallel phases declare **their own envelope** in the current checkpoint/handoff (or a bounded accepted work-package map referenced by it) rather than re-inventing one; **no future agent needs this conversation**; an **active lane survives agent-thread replacement** through the branch + relay key + pinned packet + explicit ownership transfer + freshness check; **historical/stale/diverged lanes re-enter from the current approved `main`** and cite the old branch/commit as an immutable source packet. **The chat/model session is replaceable compute; the durable lane state is branch + worktree + relay key + pinned packet + handoff.**

### §7.1 — Launch cards (one per lane; exact inputs, output, scope, gate)

**Base binding — BOUND (2026-08-04).** Common base for all five lanes:

- **`lane_content_base_sha` — do not read a SHA out of this document.** The live lane content base is pinned by the current checkpoint's **§4.2 Phase-A launch receipt**, which controls. (Historical: an earlier generation pinned `84f2d58`; it has been superseded more than once. A content commit cannot self-stamp its own SHA, so any SHA written here is at best historical.)
- **All five lane branches are pinned to the same content base**, whichever the checkpoint §4.2 receipt currently names. `main` sits some number of later commits ahead (state receipts and separately accepted control-plane work). **That distance is not fixed and is not evidence of drift** — do not stop for reconciliation over it. The §4.2 lane-base pin and the branch refs control; this document self-stamps nothing.
- **Source-resolution rule — TWO REFERENCES (binding interpretation; Agent Work Protocol §2.1 Two-Reference Boot Law):**
  - **Current control-plane surfaces resolve from the CURRENT accepted `main`/checkpoint state** — `AGENTS.md` · read graph · the current checkpoint · lane/integrator state. Never read these from an older lane content base: a content base is a frozen input, not a status report, and an older base will still describe launch as held.
  - **Substantive card inputs resolve at the immutable `lane_content_base_sha`** (content base) unless separately pinned.
  - **Separately pinned cross-branch objects retain their explicit refs** — named exception: the Demand Gate-0 packet at its own branch/commit/blob (Card 4).
- **Lane states remain `not_started`** until each lane's thread/relay lock is accepted.

**Control-plane boot floor — identical for ALL five lanes (resolve from CURRENT `main`, NOT from the content base):**
1. `AGENTS.md`
2. `.cursor/plans/doctrine/04_manifest_read_graph.md`
3. `.cursor/plans/HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md` — the **current checkpoint**, whose launch receipt (§4.2) carries the live base pin, lane states, and integrator holder.

If the current checkpoint's launch receipt does **not** name the lane branch/base you are opening, **STOP for reconciliation** rather than inferring from an older base.

**Lifecycle wording (timeless).** This map carries **content and envelope**; the **current launch acceptance/state is controlled by the current checkpoint**. No acceptance/pending state written inside a content-base copy of this map becomes authoritative or "stale" merely because a later state receipt lands — the checkpoint launch receipt is the live state surface.

**Integrator.** Integrator role key = **`PRESPINE-PHASEA-INTEGRATOR`**. Current holder = **Opus control-plane integration context**. The role is **transferable** per §2.1 **Integrator-transfer law** (explicit transfer + freshness/collision check + shared-surface ownership receipt + parent blockers); it is **not** a permanent chat thread, and a retired holder must not strand the lanes.

**Worktree posture.** Local absolute worktree paths are **environment-local and non-canonical** (§2.1 **Environment-local worktree law**) — recorded in the launch receipt when actually assigned, recreatable from branch + base on any machine, cloud VM, or fresh clone.

**Stop state** for every lane = `review_ready_pending_integrator`.

#### Lane state table

| Relay key | Branch | State | Owner | Branch head | Worktree posture | Output object |
|---|---|---|---|---|---|---|
| `CARE-TASKD-INPUT` | `analysis/care-taskd-input-state` | `not_started` | `unassigned_pending_thread_lock` | `bound_at_launch_receipt` | `environment_local_recreatable` | `.cursor/plans/v4_taskd_input_state_receipt_care_2026-08-04.md` |
| `GRR-TASKD-INPUT` | `analysis/accountability-taskd-input-state` | `not_started` | `unassigned_pending_thread_lock` | `bound_at_launch_receipt` | `environment_local_recreatable` | `.cursor/plans/v4_taskd_input_state_receipt_grr_2026-08-04.md` |
| `INS-G0-MIXEDFIN` | `analysis/insurance-payer-oop-g0` | `not_started` | `unassigned_pending_thread_lock` | `bound_at_launch_receipt` | `environment_local_recreatable` | `.cursor/plans/v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` |
| `OPECON-G0-COUNTERPARTY` | `analysis/nonlabor-operator-economics-counterparty-g0` | `not_started` | `unassigned_pending_thread_lock` | `bound_at_launch_receipt` | `environment_local_recreatable` | `.cursor/plans/v4_nonlabor_operator_economics_counterparty_gate0_carrier_2026-08-04.md` |
| `C45-P2-ANCHORS` | `analysis/c4-5-phase2-anchor-verification` | `not_started` | `unassigned_pending_thread_lock` | `bound_at_launch_receipt` | `environment_local_recreatable` | `.cursor/plans/v4_C4_5_phase2_six_source_anchor_verification_2026-08-04.md` |

Integrator role key for every row: **`PRESPINE-PHASEA-INTEGRATOR`**.

#### Common lane output contract (applies to ALL five outputs)

Every lane output MUST contain, or it is not `review_ready`:
1. **Complete ten-field passport** — Document type · Authority · Status · Domain(s) · Lifecycle role · Source-of-truth relationship · Supersedes · Superseded by · Manifest action · Review gate.
2. **Source Posture** — read-fully vs consulted vs not-inspected, stated honestly.
3. **Exact source pins** — every cited input as full path **plus** commit and/or blob SHA. No globs, brace expansions, ellipses, or "any accepted carrier" phrasing.
4. **Maturity / input-state declaration** — accepted | candidate | open, and maturity across architecture / contract / build / eval / production.
5. **What Task-D MAY RELY ON.**
6. **Unresolved items.**
7. **What Task-D MAY FALSIFY.**
8. **Prohibited assumptions.**
9. **Proposed routing bundle** — proposed catalog · read-graph · decision-ledger · FWREG · open-review dispositions, as **proposals only** (the lane does not land them).
10. **New Artifact Completion evaluation** per Agent Work Protocol §5 — noting completion occurs at the integrator's parent transaction (§2.1 clause 6), not in the lane.
11. **Exact stop declaration** — the lane ends `review_ready_pending_integrator`, plus the §2.1 clause-7 receipts (Review Object Posture · Bounded Diff Receipt · Source Posture).

**Shared-surface prohibition (identical for all five lanes):** `AGENTS.md` · the Aug-3 checkpoint · `04_manifest_read_graph.md` · `01_master_corpus_catalog.md` · `03_decision_extraction_ledger.md` · `06_guardrail_antipattern_digest.md` · `08_open_review_queue.md` · `future_work_registry.md` · `agent_work_protocol.md` · `09_omni_build_os_layer_model.md` · `10_omni_build_os_rollout_sequence.md` · the off-repo controlling-plan banner · any sibling lane's branch or output · `main`. Lane agents write **only** their own output object.

**Frozen Task-D method — mandatory floor for ALL five lanes:** `.cursor/plans/v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md` (the frozen method; do not edit), read together with the interim population A→B→C: `.cursor/plans/v4_C4_2A_task_d_interim_closeout_and_pause.md` → `.cursor/plans/v4_C4_2B_task_d_opus_builder_p0_verbatim.md` → `.cursor/plans/v4_C4_2C_task_d_gemini_b_partial_adversary_verbatim.md`.

Each card's floor below is the **mandatory minimum**; a lane MAY expand through the read graph, but may not shrink the floor.

#### Source floor and lane agency (applies to ALL five cards — read before starting)

**The source floor is the minimum known input set. It is NOT a claim of completeness and NOT the boundary of your inquiry.** After reading the floor, use the read graph, master catalog, supersession state, repository search and controlling-terminus recovery to find anything else capable of changing your result. Omitting a floor source is a defect; stopping at the floor is also a defect.

**The card gives you a starting question and a continuity boundary — not a required conclusion.** These cards were built primarily for continuity, collision avoidance and reproducibility, by an author whose own source posture (§0) records that several bodies — Task-D, Care, GRR, C4.5, EVRUN-000012 — were consulted only at pointer or row level. Treat the framing accordingly.

As you work, separate:
- **inherited governing constraints** (accepted contracts, decisions, guardrails, gate state) — binding;
- **current routing or decomposition hypotheses** (e.g. "this belongs to D6", "the residual is non-labor") — challengeable;
- **provisional scope conveniences** — adjustable;
- **genuinely open questions** — yours to characterize, not to resolve unilaterally.

**If controlling evidence contradicts this card's framing, floor, proposed home, or expected output, do NOT force the requested conclusion.** Return a bounded card-correction or reclassification finding with exact evidence. The following are all **valid, successful** lane outputs:
- the framing is incomplete or misrouted;
- the source floor is incomplete (name what is missing);
- the proposed home is contradicted, or is only one of several participating owners;
- the concern must be split across domains/seams, or needs no separate object at all;
- Task-D cannot yet rely on this input, and here is exactly why.

**What "do not redesign / do not mint" means:** do not unilaterally canonize a new domain, contract or architecture inside this lane, and do not manufacture closure. It does **not** mean endorse the current decomposition, suppress evidence that it is wrong, or pretend the listed sources are complete. Disagreeing with this card, with evidence, is in scope.

**What each lane is (do not exceed or under-run it):**
- **Card 1 Care · Card 2 GRR** — *input-state / coherence receipts.* Report the current estate, what controls, what is contradictory or immature, what Task-D may rely on or must challenge. Not domain redesign; equally, not endorsement.
- **Card 3 Insurance · Card 4 Non-Labor Operator Economics** — *genuine Gate-0 framing.* Frame the problem and **test** the proposed decomposition; Gate 0 exists to examine the routing hypothesis, not to decorate it.
- **Card 5 Time** — *a deliberately small evidence micro-pass.* Verify the six charter-named anchors and judge whether the provisional temporal lens is grounded enough to enter Task-D. It is **not** the Time-in-OMNI arc, not the complete temporal source base, not the full C4.5 pass, and not a decision that a temporal axis exists.

**The output object is the durable lane carrier.** It may honestly conclude that the current framing is incomplete, misrouted, over-bundled, insufficiently evidenced, or not yet usable.

**Card 1 — `CARE-TASKD-INPUT`**
- **Inputs — exact mandatory floor:**
  1. *(control-plane boot floor — the current checkpoint, `AGENTS.md` and the read graph are read from **CURRENT `main`**, not from this content base; see the control-plane boot floor above. They are NOT content-base inputs.)*
  2. `.cursor/plans/v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md` (frozen Task-D method)
  3. `.cursor/plans/v4_C4_2A_task_d_interim_closeout_and_pause.md`
  4. `.cursor/plans/v4_C4_2B_task_d_opus_builder_p0_verbatim.md`
  5. `.cursor/plans/v4_C4_2C_task_d_gemini_b_partial_adversary_verbatim.md` (read A→B→C)
  6. `.cursor/plans/v4_C4_care_operating_model_capture.md` (Care capture)
  7. `.cursor/plans/HANDOFF_2026-07-13_care_forensic_inheritance_audit.md`
  8. `.cursor/plans/v4_C4_care_inheritance_evidence_ledger.md`
  9. `.cursor/plans/v4_C4_3_care_response_seam_correction_continuity_test.md` (correction-continuity terminus; landed `5275707`)
- **Output (exact):** `.cursor/plans/v4_taskd_input_state_receipt_care_2026-08-04.md` — one **version-pinned Care Input-State Receipt**.
- **Allowed write scope:** the output file only.
- **Prohibited shared surfaces:** the canonical shared-surface prohibition list above (identical for all five lanes).
- **Dependencies / collision:** none blocking; shares no writable file with siblings.
- **Proof:** version pins (path + commit/blob) for every cited input; explicit "no Care redesign, no false closure" attestation.
- **Reviewer / landing gate:** Nick + Knox review → the `PRESPINE-PHASEA-INTEGRATOR` role holder lands the routing (never the lane itself).

**Card 2 — `GRR-TASKD-INPUT`**
- **Inputs — exact mandatory floor:**
  1. *(control-plane boot floor — the current checkpoint, `AGENTS.md` and the read graph are read from **CURRENT `main`**, not from this content base; see the control-plane boot floor above. They are NOT content-base inputs.)*
  2. `.cursor/plans/v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md` (frozen Task-D method)
  3. `.cursor/plans/v4_C4_2A_task_d_interim_closeout_and_pause.md`
  4. `.cursor/plans/v4_C4_2B_task_d_opus_builder_p0_verbatim.md`
  5. `.cursor/plans/v4_C4_2C_task_d_gemini_b_partial_adversary_verbatim.md` (read A→B→C)
  6. `.cursor/plans/v4_C4_governed_reporting_resolution_capture.md` (GRR capture)
  7. `.cursor/plans/v4_C4_platform_loop_capture.md` — **sibling-boundary reconciliation ONLY** (do not import Platform-Loop scope into GRR)
  8. `.cursor/plans/HANDOFF_2026-07-12_wave4_closed_grr_pre_plastics_and_task_d.md`
  9. `.cursor/plans/v4_REV184_decision_state_reconciliation.md`
- **Output (exact):** `.cursor/plans/v4_taskd_input_state_receipt_grr_2026-08-04.md` — one **version-pinned GRR Input-State Receipt**.
- **Allowed write scope:** the output file only.
- **Prohibited shared surfaces:** the canonical shared-surface prohibition list above (identical for all five lanes).
- **Dependencies / collision:** none blocking.
- **Proof:** version pins for every cited input; "no GRR redesign, no false closure" attestation.
- **Reviewer / landing gate:** Nick + Knox review → the `PRESPINE-PHASEA-INTEGRATOR` role holder lands the routing (never the lane itself).

**Card 3 — `INS-G0-MIXEDFIN`**
- **Inputs — exact mandatory floor** (may expand through the read graph; the floor itself is exact):
  1. *(control-plane boot floor — the current checkpoint, `AGENTS.md` and the read graph are read from **CURRENT `main`**, not from this content base; see the control-plane boot floor above. They are NOT content-base inputs.)*
  2. `.cursor/plans/v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md` (frozen Task-D method)
  3. `.cursor/plans/contracts/D6_commerce_contract.md` — §12 future home + explicit deferral
  4. `.cursor/plans/doctrine/08_open_review_queue.md` — rows `D0THES-REV-159` and `D0THES-REV-160` (read-only)
  5. `.cursor/plans/doctrine/future_work_registry.md` — `FWREG-017` (read-only)
  6. `.cursor/plans/v4_C4_care_operating_model_capture.md`
  7. `.cursor/plans/contracts/identity_contract.md`
  8. `.cursor/plans/contracts/federation_contract.md`
  9. `.cursor/plans/contracts/D7_documents_consent_media_contract.md`
  10. `.cursor/plans/contracts/rbac_authority_contract.md`
  11. `.cursor/plans/HANDOFF_2026-07-27_c4-6-pharmacy-and-cross-facet.md`
  12. `.cursor/plans/v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md`
- **Output (exact):** `.cursor/plans/v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` — an **Insurance/Payer/OOP Gate-0 carrier** consuming D6 + REV-159/160.
- **Allowed write scope:** the output file only.
- **Prohibited shared surfaces:** the canonical shared-surface prohibition list above (identical for all five lanes).
- **Dependencies / collision:** consumes D6 (read-only); must not reopen D6.
- **Proof:** version pins; explicit "no payer domain minted; no connector-as-architecture" attestation.
- **Reviewer / landing gate:** Nick + Knox review → the `PRESPINE-PHASEA-INTEGRATOR` role holder lands the routing (never the lane itself).

**Card 4 — `OPECON-G0-COUNTERPARTY`** (branch `analysis/nonlabor-operator-economics-counterparty-g0`)
- **Inputs — exact mandatory floor:**
  1. *(control-plane boot floor — the current checkpoint, `AGENTS.md` and the read graph are read from **CURRENT `main`**, not from this content base; see the control-plane boot floor above. They are NOT content-base inputs.)*
  2. `.cursor/plans/v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md` (frozen Task-D method)
  3. `.cursor/plans/contracts/business_ops_workforce_contract.md` (BIZOPS — existing labor/payroll/commission-payout/labor-cost owner; canonical draft pending ratification)
  4. `.cursor/plans/contracts/D6_commerce_contract.md` (existing patient-commerce owner)
  5. `.cursor/plans/doctrine/08_open_review_queue.md` — row `D0THES-REV-164` (read-only)
  6. `.cursor/plans/doctrine/future_work_registry.md` — `FWREG-018` (read-only)
  7. **Demand Gate-0 immutable cross-branch source packet** — branch `analysis/demand-engagement-gate0-recovery`, commit `b191d75423b256b52a1693913d19b88f953fd533`, path `.cursor/plans/v4_demand_engagement_continuity_gate0_recovery.md`, blob `fd5b7fc7a10b02f3d83fadf2a82f667db163a8fa` (**not present on `main`** — read at the pinned commit; do not resume that branch in place)
  8. `.cursor/plans/ingestion/user_operator_research/analysis/EVRUN-2026-000012_joint-care-commerce-operating-substrate-hardening/EVRUN-2026-000012_07_final_closeout_depth_preservation_and_downstream_consumption.md`
  9. `.cursor/plans/HANDOFF_2026-07-27_c4-6-pharmacy-and-cross-facet.md`
  10. `.cursor/plans/v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md`
- **Output (exact):** `.cursor/plans/v4_nonlabor_operator_economics_counterparty_gate0_carrier_2026-08-04.md` — a **Non-Labor Operator Economics Track B + Counterparty Residual Gate-0 carrier**.
- **Allowed write scope:** the output file only.
- **Prohibited shared surfaces:** the canonical shared-surface prohibition list above (identical for all five lanes).
- **Dependencies / collision:** must **consume, not duplicate** D6 + BIZOPS; **do not mint a Vendor or Operator-Economics domain**; do not reopen D6/BIZOPS.
- **Proof:** version pins for every input (including the full Demand Gate-0 commit `b191d75423b256b52a1693913d19b88f953fd533` + blob `fd5b7fc7a10b02f3d83fadf2a82f667db163a8fa`); explicit non-duplication attestation vs D6/BIZOPS.
- **Reviewer / landing gate:** Nick + Knox review → the `PRESPINE-PHASEA-INTEGRATOR` role holder lands the routing (never the lane itself).

**Card 5 — `C45-P2-ANCHORS`**
- **Inputs — exact mandatory floor:**
  1. *(control-plane boot floor — the current checkpoint, `AGENTS.md` and the read graph are read from **CURRENT `main`**, not from this content base; see the control-plane boot floor above. They are NOT content-base inputs.)*
  2. `.cursor/plans/v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md` (frozen Task-D method)
  3. `.cursor/plans/v4_C4_2A_task_d_interim_closeout_and_pause.md`
  4. `.cursor/plans/v4_C4_2B_task_d_opus_builder_p0_verbatim.md`
  5. `.cursor/plans/v4_C4_2C_task_d_gemini_b_partial_adversary_verbatim.md` (read A→B→C)
  6. `.cursor/plans/v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md` (C4.5 Gate-0 charter)
  7. `D0THES-DEC-038` in `.cursor/plans/doctrine/03_decision_extraction_ledger.md` (read-only)
  8. The six anchors, **listed individually** (dedup `000184` ↔ `000185` is part of the verification, not an excuse to skip one):
     - `.cursor/plans/ingestion/outside_learning/sources/2026-06_wave-2/EVSRC-2026-000122_TK.md`
     - `.cursor/plans/ingestion/outside_learning/sources/2026-06_wave-2/EVSRC-2026-000124_TK.md`
     - `.cursor/plans/ingestion/outside_learning/sources/2026-06_wave-2/EVSRC-2026-000165_TK.md`
     - `.cursor/plans/ingestion/outside_learning/sources/2026-06_wave-2/EVSRC-2026-000182_TK.md`
     - `.cursor/plans/ingestion/outside_learning/sources/2026-06_wave-2/EVSRC-2026-000184_TK.md`
     - `.cursor/plans/ingestion/outside_learning/sources/2026-06_wave-2/EVSRC-2026-000185_TK.md`
- **Output (exact):** `.cursor/plans/v4_C4_5_phase2_six_source_anchor_verification_2026-08-04.md` — **six-source verification + provisional temporal-lens admission receipt**.
- **Allowed write scope:** the output file only.
- **Prohibited shared surfaces:** the canonical shared-surface prohibition list above (identical for all five lanes).
- **Dependencies / collision:** none blocking; parallel/non-blocking to the other four.
- **Proof:** per-anchor read receipt (path + verification result); explicit "no full C4.5 pass; no temporal-axis promotion" attestation.
- **Reviewer / landing gate:** Nick + Knox review → the `PRESPINE-PHASEA-INTEGRATOR` role holder lands the routing (never the lane itself).

---

## §8 — Hard "do not do" guardrails
Do **not**: populate final Task-D yet · create ten new arcs · run a separate robotics or dentistry architecture arc (dentistry = insurance/OOP falsifier) · build every connector before the spine · select Palantir/Databricks/OpenAI/Anthropic/payroll/ERP now · create a Vendor Loop or Operator-Economics domain by fiat · finish all C5 contracts before the spine · treat insurance as "just Commerce" · treat an insurer's answer as clinical authority · let external AI tools turn OMNI into a thin wrapper · force Care/GRR into fake closure · let the Sufficiency Gate become a six-week archaeology dig (it is a classification/dependency map).

---

## §9 — What this changes / does not change + acceptance transaction owed
- **Changes:** holds the prior "go straight into Task-D re-entry" relay; activates the Insurance pointer (`FWREG-017` → D6/REV-159/160) and updates `D0THES-REV-159`; names the Operator-Economics Track-B gap; records the sequencing decision `D0THES-DEC-039`.
- **Does NOT change (even now, accepted):** no new checkpoint (the Aug-3 checkpoint is amended, not replaced); no new read-graph node; no controlling-plan authority change beyond the current-state banner; no C4.4/relay-governance reopen; no new domain; no C5 contract; no architecture decided; Task-D method frozen. Binds nothing architecturally (`GRD-036`); the parallel-work contract it instances is Build-OS-Execution-Layer doctrine via `D0CKPT-DEC-005`, not an architecture promotion.
- **Acceptance transaction EXECUTED (state-only, 2026-08-04):** candidate rows normalized → active/accepted; the **EXISTING Aug-3 checkpoint amended** to point to this map and hold final Task-D pending Phase A + C3.9; HOME controlling-plan banner updated (reported separately); **`AGENTS.md` and read-graph #15 remain pointed at the same Aug-3 checkpoint** (no new checkpoint) — keeping `no_new_route_needed` truthful. Stale wording corrected: branch `analysis/cross-facet-operating-model-reconciliation` @ `a526b88` is **remote-visible, quarantined and unregistered — not "local-only."**

---

## §10 — Gate / stop
- **Tested:** whether the pre-spine input set + dependency order are sufficient to resume Task-D.
- **Candidate verdict:** inputs are **NOT yet sufficient**; two Gate-0s (Insurance; Operator Economics/Counterparty) + two Input-State Receipts (Care; GRR) + the C4.5 anchor micro-pass are REQUIRED before final Task-D population.
- **Sequencing decisions — ACCEPTED (Nick operator 2026-08-04 + Knox final byte):** (a) C3.9-before-Task-D; (b) Demand Gate-1 parallel/non-blocking (Gate-0 = minimum Task-D input unless later work exposes a blocking contradiction); (c) H1-inside-Task-D-first. See §6.
- **Next gate — activate the operator-selected lane(s); current immediate priority = Insurance/Payer/OOP Gate-0 (`INS-G0-MIXEDFIN`).** The §7/§7.1 envelope was fidelity-hardened and **ACCEPTED** (Nick + Knox, 2026-08-04), then given the **source-floor-and-lane-agency aperture clause** and **optional-activation normalization** (2026-08-05). Care, GRR, Non-Labor Operator Economics and Time remain **prepared and `not_started`**; none starts automatically, and Phase A does **not** require five simultaneous agents. The live content base and lane heads are pinned by the checkpoint **§4.2** receipt. **Next action = assign/open the five lane agents** (local or cloud) using the checkpoint launch receipt; each accepts its thread/relay lock, then returns a `review_ready_pending_integrator` carrier satisfying the **common lane output contract**, which the `PRESPINE-PHASEA-INTEGRATOR` role holder reconciles; then C3.9 → final Task-D → full C4.5 → final sufficiency receipt → spine.
- **DONE previously (2026-08-04):** sequence accepted + landed on `main` (state-only); Aug-3 checkpoint amended (not replaced); five empty lane containers created. No Task-D population, C3.9 execution, spine, C5, or proof program started — and **no lane work started.**

---

## §11 — Registrations executed in this pass
- **`FWREG-017`** — Insurance/Payer/Coverage/OOP **activation + sequencing pointer** (points to D6 + `D0THES-REV-159/160`; no new Insurance domain authorized).
- **`D0THES-REV-159`** (open-review queue) — linked to this map; trigger expanded to Insurance/Payer/OOP Gate-0; D6 ownership + care-vs-financing-authority distinction preserved; nothing promoted.
- **`D0THES-DEC-039`** — pre-spine sequencing decision (Sufficiency-Gate-first; version-pinned Input-State Receipts not closure; Insurance lineage; Non-Labor Operator Economics Track B; parallel Phase A; proposal-vs-settled labels; posture-to-test); **now `active` — already_landed=yes, human review satisfied (Commit 2)**.
- **`D0CKPT-DEC-005` + `D0CKPT-GRD-002`** — the reusable parallel work-package contract (Agent Work Protocol §2.1) this map instances; added Commit 1, activated Commit 2 (DEC-005) / active on landing (GRD-002).
- **`FWREG-018` / `D0THES-REV-164`** — Non-Labor Operator Economics Track B + counterparty residual (composes against existing BIZOPS/D6; no new domain).
- **Catalog row** — category `handoff_or_readiness_gate`; **accepted + landed**; `no_new_route_needed`.
- **Launch-envelope fidelity hardening (2026-08-04, post-landing Knox byte review)** — §7/§7.1 corrected on branch `governance/phase-a-launch-envelope-hardening`: base-binding (two-level `lane_content_base_sha` vs `current_main_state_sha`; no self-referential SHA stamping) · transferable integrator role `PRESPINE-PHASEA-INTEGRATOR` · environment-local/non-canonical worktree paths · lane-state table · **common lane output contract** · five **exact** source floors (frozen Task-D method added to all five; globs, brace expansions, ellipses, truncated SHAs and "any accepted carrier" placeholders eliminated). Sequence and Build-OS contract substance UNCHANGED; `D0CKPT-DEC-005` / `D0CKPT-GRD-002` amended, no new IDs. **ACCEPTED at final content byte pass (Nick + Knox, 2026-08-04); content base A pinned; five lane branches pinned to A; lanes `not_started` pending their thread locks.**
