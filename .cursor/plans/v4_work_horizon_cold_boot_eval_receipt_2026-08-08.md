# v4 — Work-Horizon Reconciliation: cold-boot eval receipt (2026-08-08)

Document type: `proof_or_verification_receipt` (bounded verification artifact for one control-plane transaction)
Authority: `evidence_nonbinding` — a **receipt**, not doctrine. It proves one thing was tested at one head; it originates no law.
Status: `closed · 2 runs · run 2 = PASS 6/6 at the final head`
Domain(s): `architecture_governance` · `operator_governance` · `build_operations`
Lifecycle role: durable, independently reviewable evidence for the `D0CKPT-DEC-009` acceptance test. Exists because a builder's self-reported score is not reviewable proof.
Source-of-truth relationship: consumes the repository as it stood at the evaluated head. **The decision row (`D0CKPT-DEC-009`) points here; it does not restate the raw output.**
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` (catalog row in the same pass) · Review gate: `user_knox_required`

**Method** (from `EVSRC-2026-000317` / `EVRUN-2026-000124` concept `C3` — Anthropic: predeclare specific, measurable, task-specific criteria before evaluating). **Evaluator blinding is OMNI's own adaptation, not a vendor claim.**

---

## §1 — Predeclared rubric (written BEFORE either run; withheld from both evaluators)

A run **PASSES** only if the evaluator independently recovers all six, from the repository alone, with no rescue packet and no hint that a repair had occurred:

| # | Required fact |
|---|---|
| `R1` | Current operator-selected focus is Insurance Gate 2 (`INS-G2-OPERATING-SUFFICIENCY`) |
| `R2` | Gate-2 construction/pressure **may begin now**; pre-execution blocker **NONE** |
| `R3` | C3.9 blocks **final acceptance**, not start — populate + consume + reconcile affected traces |
| `R4` | `E2` remains mandatory and last, unweakened |
| `R5` | OPECON is **not** a Gate-2 `blocks_start` dependency **and** is **not** definitively irrelevant to closing (indirect `blocks_close` through C3.9 pending admission review) |
| `R6` | Nothing auto-starts — Task-D, C4.5 and spine authoring do not auto-start |

**Failure conditions:** any missed or contradicted fact; or needing a pasted rescue handoff.

## §1.5 — Run 3: genuinely open-ended, single message (the operative proof)

Knox's objection to run 2 was correct: Part A and Part B arrived in **one prompt**, so the evaluator could see the structured questions while composing the open-ended answer. That is a structured test with an instruction not to look, not an open-ended test.

**Run 3 sent one message containing no structure at all**, at head `fd284a7826cde8f5339b56ca8e6eace1e26e7744`:

> *"You are booting fresh into the OMNI repository at /workspace. Thoroughness: medium. Do not ask me anything; resolve everything from the repository. Boot normally per the repository's own instructions — start wherever the repo tells you to start, and follow where it routes you. Then brief me, in your own words, on where this project currently stands and what I should do next. Cover whatever you judge relevant, and cite the exact file and line/section for anything load-bearing. If something cannot be determined from the repository, say so rather than guessing."*

**No rubric, no six questions, no mention of Insurance, Gate 2, C3.9, OPECON or that any repair had occurred.** Evaluator context id `bc-96c64580-4d44-5cca-aaf5-7e2d4f486413`.

**Scored against the same §1 rubric — 6/6, unprompted:**

| # | Recovered? | Evidence from the evaluator's own brief |
|---|---|---|
| `R1` | **yes** | "Operator focus: `INS-G2-OPERATING-SUFFICIENCY`", cited to successor §1 line 22 |
| `R2` | **yes** | "Insurance Gate 2 … construction **may begin now**", "no pre-execution blocker", cited to successor §3 and the brief's state table |
| `R3` | **yes** | "Gate 2 may NOT close until: C3.9 populated → consumed → affected traces reconciled" |
| `R4` | **yes** | "**`E2`** adversarial acceptance runs", cited to brief §5 lines 186–187 |
| `R5` | **yes, both halves** | "OPECON is NOT a Gate-2 start blocker … Possible **indirect close relevance through C3.9** remains open as `candidate_dependency_pending_C3.9_admission_review` — **do not say 'OPECON is not a prerequisite' broadly**" |
| `R6` | **yes** | "**Nothing auto-starts.**" and "Spine is **not destiny** — it requires a future sufficiency decision" |

**Beyond the rubric, unprompted:** it reconstructed the boot path and confirmed the freshness check; ran `npm run check:boot-surfaces` itself; separated architecture maturity from build maturity ("C4.4 explicitly marks enterprise implementation UNPROVEN"); recovered `D0THES-DEC-039` (Task-D is not blocked on Gate 2); flagged the vacant integrator as blocking lane shared-surface landings; surfaced `INS-HAZ-COVSURF` as an unlanded one-way door; and correctly declined to assess application runtime behaviour it had not inspected.

**★ The most valuable thing it found, which this receipt did not ask for and the author had underweighted:** *"Boot drift on `main` until PR #11 lands — the exact failure mode the reconciliation was written to fix."* A cold boot from **`main`** still reads the Aug-03 checkpoint's "it is NOT Gate 2" wording and the Gate-2 brief's old blocking-predecessor row. **The repair is only real once landed** — which is an argument for landing it, not for further revision.

## §2 — Run log

| Run | Head | Prompt shape | Result | Note |
|---|---|---|---|---|
| 1 | `76d8c16` | six structured questions only | 6/6 | Structured-only, so vulnerable to being an answer-shaped retrieval test — Knox's fair objection. Superseded by run 2. |
| 2 | `ffd229e962b598c2252ed59a74dc0a377dccf1cb` | Part A open-ended + Part B structured, **in one message** | 6/6 | Evaluator context id `bc-7c00283b-6cfd-5aa5-b7a4-82ad8ea71640`. **Superseded by run 3:** Part B was visible while Part A was written, so this was not truly open-ended-first (Knox's objection, accepted). |
| **3** | **`fd284a7826cde8f5339b56ca8e6eace1e26e7744`** (post-successor-checkpoint) | **single message, NO structure — one open-ended "brief me on where this stands and what I should do next"** | **6/6 PASS · OPERATIVE RESULT** | See §1.5. Evaluator context id `bc-96c64580-4d44-5cca-aaf5-7e2d4f486413` |

**Run-2 prompt, verbatim in shape:** *"You are booting fresh into the OMNI repository at /workspace… Do not ask me anything; resolve everything from the repository. **PART A — OPEN-ENDED (answer this first, before reading Part B).** Boot normally per the repository's own instructions… Then report, in your own words: what work is currently active, what the allowed next action is, what blocks that work from STARTING, what blocks it from CLOSING or being finally accepted, what adjacent work exists that is NOT starting. Do not consult Part B until you have written Part A. **PART B — STRUCTURED CHECKS.** …(1) current operator-selected focus/active arc (2) may any gate begin now, and what blocks it from starting (3) what blocks that gate from closing — list every item (4) is an independent or adversarial reconciliation step required, name it (5) does OPECON have to run before that gate can BEGIN, and separately is OPECON definitively irrelevant to that gate's CLOSING — answer both parts precisely (6) does anything auto-start after the current focus completes, specifically Task-D, C4.5, or spine authoring. For each, cite the exact file and line/section. If the repository does not let you determine an answer, write CANNOT DETERMINE rather than guessing."*

**The rubric above was NOT shown to the evaluator.** No expected answers, no statement that a repair had happened, no prior-thread context.

## §3 — Scoring against the rubric (run 2)

| # | Verdict | What the evaluator returned, and where it said it came from |
|---|---|---|
| `R1` | **PASS** | `INS-G2-OPERATING-SUFFICIENCY`, cited to checkpoint status line 3 (`operator_focus=…`) and §4.1 |
| `R2` | **PASS** | "construction and pressure **may begin now**"; "Pre-execution blocker = **NONE**", cited to the Gate-2 brief state table and §6 Barrier 1 |
| `R3` | **PASS** | listed population, consumption **and** reconciliation of affected traces as distinct barriers, cited to the state table and §6 Barrier 2 |
| `R4` | **PASS** | named `E2`, described the two-stage fresh-adversary contract and its three fixed verdicts, cited to brief §5 |
| `R5` | **PASS (both parts)** | start: "**No** — not a `blocks_start` dependency," citing the outbound F3 routing and §13.3's rejection. Close: "**OPECON is NOT definitively irrelevant**… `candidate_dependency_pending_C3.9_admission_review`… the repository explicitly forbids stating 'OPECON is not a prerequisite' as too broad" |
| `R6` | **PASS** | "Nothing auto-starts," citing `no_successor_auto_start`, checkpoint §4/§4.2, map §6, and the brief's activation row |

**Score: 6/6.** Beyond the rubric, the open-ended Part A independently reconstructed the boot path, confirmed the Boot Freshness Check, separated Gate-2's absent start blocker from the Phase-A lanes' thread-lock requirement, reported the integrator role as `VACANT` and correctly scoped that vacancy as blocking **lane shared-surface landings, not Gate-2 construction**, and volunteered that phase boundaries are grouping rather than automatic dependency edges, citing `D0CKPT-GRD-004`.

## §4 — Limits of this receipt (do not overclaim it)

- **n=1 per run, qualitative, pass/fail.** Not a statistical eval; the metrics in `EVSRC-2026-000317` (F1, exact match) do not apply, and "prioritise volume over quality" **does not transfer** to a governance change.
- **It proves derivability at one head, not correctness of the architecture.** A cold agent recovering the intended state says nothing about whether that state is architecturally right — that judgement stays with Nick + Knox.
- **It is not a regression suite.** The mechanical invariant is `npm run check:boot-surfaces`; this eval is the semantic complement and must be **re-run by hand at any future head that changes a boot surface, the checkpoint's focus/next-action rows, or the Gate-2 state table.**
- **Both evaluators were the same model family as the author.** An independent-model evaluator would be stronger evidence; that is a known limitation, not a discharged one.
- Runs 1 and 2 are retained for lineage; **run 3 at `fd284a7` is the operative result**, because it is the only one where the evaluator saw no structure at all.
- **Head delta disclosure.** The branch head advances past `fd284a7` when this receipt is committed. That commit adds only §1.5, the run-log row and this note — **it changes no boot surface, no checkpoint, and no Gate-2 state table**, so it does not trip the re-run condition below.
- **Re-run condition:** any later commit that touches a boot-surface pointer block, the current checkpoint's focus/next-action/lane/integrator rows, or the Gate-2 state table. The mechanical invariant (`npm run check:boot-surfaces`) runs automatically; **this semantic eval does not — a human must re-run it.**
