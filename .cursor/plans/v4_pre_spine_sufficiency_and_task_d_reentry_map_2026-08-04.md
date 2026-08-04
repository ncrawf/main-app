# Pre-Spine Sufficiency & Task-D Re-Entry Map — 2026-08-04

Document type: `handoff_or_readiness_gate`
Authority: `analysis_nonbinding`
Status: `candidate_pushed_pending_nick_knox_review · not_landed · no_checkpoint_repoint · no_new_read_graph_route_while_candidate`
Domain(s): `architecture_governance, operator_governance, portfolio_sequencing`
Lifecycle role: `bounded Task-D readiness / pre-spine sufficiency gate — a dependency graph + concern→disposition classification + minimum sequence + parallel-launch envelope; the executable answer to "what is next before Task-D population and the spine." Explicitly NOT the current checkpoint and NOT the Task-D scoring method.`
Source-of-truth relationship: `nonbinding readiness gate only; it ROUTES concerns to their existing homes (FWREG rows, D6/REV-159/160, C4.4/Angle-B, Demand Gate-0) and names the gaps; it invents NO architecture, mints NO domain, and overrides NO contract, checkpoint, or gate. The current checkpoint HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md remains authoritative for program state; the Task-D method (v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md) remains frozen and unchanged.`
Supersedes: `none`
Superseded by: `none`
Manifest action: `add_tier2 · no_new_route_needed` (while candidate: no route; on acceptance, Tier-0 reaches this map through the amended Aug-3 checkpoint — see §9)
Review gate: `user_knox_required`

> **What this is / is not.** A bounded, mostly-read-only Task-D **readiness/sufficiency gate**: inventory every spine-shaping concern → give each a disposition → name the minimum sequence and the parallel-launch envelope. It is **not** a new controlling document, **not** a checkpoint, **not** the Task-D scoring method, and **not** a new architecture arc. It repoints nothing while a candidate. It holds the prior "go straight into Task-D re-entry" relay.

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
| Time / temporal (C4.5) | `FWREG-015` + `v4_C4_5_…pass_plan.md` | REQUIRED-BEFORE-TASK-D (six-source anchor micro-pass) | — | Micro-pass verifies the provisional lens before Task-D temporal scoring; **full C4.5 after Task-D.** |
| "Run ON Palantir/Epic w/o surrendering authority" (H1) | `FWREG-016` | CONSUMED-INSIDE-TASK-D | — | Test inside Task-D first; separate realization arc only if Task-D leaves it open. |
| Robotics / devices | ownership table §5 | FUTURE-VERTICAL-FALSIFIER | — | No separate robotics arc now. |
| Dentistry | insurance/OOP fixture | FUTURE-VERTICAL-FALSIFIER | — | No dentistry arc; use as an insurance/OOP falsifier. |
| Plastics/medspa multi-site (C3.9) | `v4_C3_9_plastics_medspa_care_setting_pressure_test.md` (shell, pending) | REQUIRED-BEFORE-TASK-D (Knox recommendation, pending Nick) | FUTURE-VERTICAL-FALSIFIER | Stronger if it carries the insurance/OOP-coexistence question. |
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
  4. **Operator Economics Track B + Counterparty Residual Gate-0** (from Demand Gate-0 owed split). *(REQUIRED — Knox + Opus)*
  5. **C4.5 six-source anchor Phase-2 verification** (admits the provisional temporal lens). *(SETTLED — C4.5 charter locks micro-pass before Task-D temporal scoring)*
- **Phase B — C3.9 population** (plastics + medspa multi-site, carrying insurance/OOP coexistence), consuming Insurance + Operator-Economics findings. *(C3.9-before-Task-D = **OPERATOR-ACCEPTED** by Nick's relay of the 2026-08-04 fidelity-patch instruction; pending Knox final-byte + landing.)*
- **Phase C — Final Task-D population** with the verified provisional temporal lens → **§7 verdict** (`SPINE_READY` / `…WITH_NAMED_RECONCILIATIONS` / `NOT_READY`). *(SETTLED that Task-D precedes the spine.)*
- **Phase D — Full C4.5 temporal pass.** *(SETTLED — C4.5 charter: after Task-D, before spine.)*
- **Phase E — Final pre-spine sufficiency receipt** (yes/no; not an arc). *(Knox recommendation)*
- **Then — write the spine.**

**Operator-accepted sequencing decisions (Nick's 2026-08-04 relay; pending Knox final-byte + landing):** (1) **C3.9 runs before final Task-D** as the mixed-financing/multi-site/multi-operator falsifier, after Insurance + Operator-Economics Gate-0. (2) **Demand Track-A Gate-1 runs in parallel and is non-blocking**; accepted **Gate-0** posture is the minimum Task-D input unless later Gate-1 work exposes a genuinely spine-blocking contradiction; Gate-1 may **not** silently mutate the critical-path sequence. (3) **H1 is tested inside Task-D first**; a separate physical-realization arc opens only if Task-D leaves a material question unresolved.

---

## §7 — Parallel launch envelope (the 4–5-thread operating answer)
Launch these five lanes **from the SAME final post-map-landing `main` SHA** (not from current `main`). **One writer per branch.**

| Visible title | Relay key | Branch | Output |
|---|---|---|---|
| Care · Task-D input state | `CARE-TASKD-INPUT` | `analysis/care-taskd-input-state` | Version-pinned Care Input-State Receipt |
| Accountability · Task-D input state | `GRR-TASKD-INPUT` | `analysis/accountability-taskd-input-state` | Version-pinned GRR Input-State Receipt |
| Insurance · Gate 0 | `INS-G0-MIXEDFIN` | `analysis/insurance-payer-oop-g0` | Insurance/Payer/OOP Gate-0 carrier consuming D6 + REV-159/160 |
| Operator economics · Gate 0 | `OPECON-G0-COUNTERPARTY` | `analysis/operator-economics-counterparty-g0` | Operator Economics Track-B + counterparty residual boundary |
| Time · anchor verification | `C45-P2-ANCHORS` | `analysis/c4-5-phase2-anchor-verification` | Six-source verification + temporal-lens admission result |

**Shared-surface law.** The five substantive lane agents may **not** edit `AGENTS.md`, the current checkpoint, the read graph, the master catalog, the decision ledger, the open-review queue, FWREG, or the controlling-plan banner. They return **proposed** rows/routing. **One separate control-plane integrator (Opus)** lands all shared-surface changes after the five candidate outputs are reviewed — this prevents the prior collision problem.

**Reopen law.** A stale/diverged branch is **never resumed in place**. Create a fresh branch from current `main`, cite the old branch/commit as an **immutable source packet**, and curate substantive files forward.

> **Scope + reusability note (honest).** This launch envelope is **phase-scoped** to the five pre-spine input lanes; it is not yet a general, boot-time convention. The *relay/review half* of the mechanism is already durable landed doctrine (`D0OPER-DEC-005/006` + collaboration-model §§2.6–2.7: thread locks, relay keys, reviewable-snapshot review). The *parallel-launch half* (branch-per-lane from one frozen SHA · one-writer-per-branch · shared control-plane files read-only · single control-plane integrator · reopen-from-stale law) currently lives only here. **Follow-up (NOT done in this transaction, out of authorized scope): promote a reusable "parallel-lane launch" pattern into the Agent Work Protocol** so future multi-thread work declares + branches by convention rather than by a hand-authored envelope each time — pending Knox authorization and a Protocol-scoped commit.

---

## §8 — Hard "do not do" guardrails
Do **not**: populate final Task-D yet · create ten new arcs · run a separate robotics or dentistry architecture arc (dentistry = insurance/OOP falsifier) · build every connector before the spine · select Palantir/Databricks/OpenAI/Anthropic/payroll/ERP now · create a Vendor Loop or Operator-Economics domain by fiat · finish all C5 contracts before the spine · treat insurance as "just Commerce" · treat an insurer's answer as clinical authority · let external AI tools turn OMNI into a thin wrapper · force Care/GRR into fake closure · let the Sufficiency Gate become a six-week archaeology dig (it is a classification/dependency map).

---

## §9 — What this changes / does not change + acceptance transaction owed
- **Changes:** holds the prior "go straight into Task-D re-entry" relay; activates the Insurance pointer (`FWREG-017` → D6/REV-159/160) and updates `D0THES-REV-159`; names the Operator-Economics Track-B gap; records the sequencing decision `D0THES-DEC-039`.
- **Does NOT change (while candidate):** no checkpoint repoint; no read-graph route; no controlling-plan change; no C4.4/relay-governance reopen; no new domain; no C5 contract; no architecture decided; Task-D method frozen. Binds nothing (`GRD-036`).
- **Acceptance transaction owed (state-only, when accepted):** normalize candidate rows → active; **amend the EXISTING Aug-3 checkpoint** to point to this map and hold final Task-D pending the named input-preparation phase; update the HOME controlling-plan banner; **`AGENTS.md` and read-graph #15 remain pointed at the same Aug-3 checkpoint** (no new checkpoint) — this is what makes `no_new_route_needed` truthful. Also correct the stale wording: branch `analysis/cross-facet-operating-model-reconciliation` @ `a526b88` is **remote-visible, quarantined and unregistered — not "local-only."**

---

## §10 — Gate / stop
- **Tested:** whether the pre-spine input set + dependency order are sufficient to resume Task-D.
- **Candidate verdict:** inputs are **NOT yet sufficient**; two Gate-0s (Insurance; Operator Economics/Counterparty) + two Input-State Receipts (Care; GRR) + the C4.5 anchor micro-pass are REQUIRED before final Task-D population.
- **Sequencing decisions — OPERATOR-ACCEPTED (Nick 2026-08-04, pending Knox final-byte + landing):** (a) C3.9-before-Task-D; (b) Demand Gate-1 parallel/non-blocking (Gate-0 = minimum Task-D input unless later work exposes a blocking contradiction); (c) H1-inside-Task-D-first. See §6.
- **Next gate:** Nick + Knox byte review → state-only landing (§9) → launch the five Phase-A lanes from the landed SHA.
- **STOP.** No checkpoint repoint, main landing, or arc launch performed in this transaction.

---

## §11 — Registrations executed in this pass
- **`FWREG-017`** — Insurance/Payer/Coverage/OOP **activation + sequencing pointer** (points to D6 + `D0THES-REV-159/160`; no new Insurance domain authorized).
- **`D0THES-REV-159`** (open-review queue) — linked to this map; trigger expanded to Insurance/Payer/OOP Gate-0; D6 ownership + care-vs-financing-authority distinction preserved; nothing promoted.
- **`D0THES-DEC-039`** — pre-spine sequencing decision (Sufficiency-Gate-first; version-pinned Input-State Receipts not closure; Insurance lineage; Operator Economics Track B; parallel Phase A; proposal-vs-settled labels; posture-to-test); `review_required`.
- **Catalog row** — category `handoff_or_readiness_gate`; candidate; `no_new_route_needed`.
