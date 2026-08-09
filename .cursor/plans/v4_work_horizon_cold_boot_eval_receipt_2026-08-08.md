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

## §2 — Run log

| Run | Head | Prompt shape | Result | Note |
|---|---|---|---|---|
| 1 | `76d8c16` | six structured questions only | 6/6 | Structured-only, so vulnerable to being an answer-shaped retrieval test — Knox's fair objection. Superseded by run 2. |
| 2 | **`ffd229e962b598c2252ed59a74dc0a377dccf1cb`** (final corrected head) | **open-ended Part A first, then the six structured checks** | **6/6 PASS** | Evaluator context id `bc-7c00283b-6cfd-5aa5-b7a4-82ad8ea71640` |

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
- Run 1 is retained for lineage only; **run 2 at `ffd229e` is the operative result.**
- **Head delta disclosure.** The branch head advanced past `ffd229e` when this receipt was itself committed. That commit adds only this receipt, its catalog row, and a pointer from `D0CKPT-DEC-009` to here — **it changes no boot surface, no checkpoint focus or next-action row, and no Gate-2 state table**, so it does not trip this receipt's own re-run condition. Any later commit that touches those surfaces **does**, and the eval must be re-run.
