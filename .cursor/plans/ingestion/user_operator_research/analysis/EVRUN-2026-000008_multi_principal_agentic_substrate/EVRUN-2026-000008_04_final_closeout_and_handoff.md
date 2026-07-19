# EVRUN-2026-000008 — §04 · Final Closeout & Handoff

Document type: `evidence_or_ingestion` (Evidence Plane · `user_operator_research` lane · run terminus/handoff) · Authority: `analysis_nonbinding` (`GRD-036`).
**Run posture: `analysis_closed` · `adjudicated_nonbinding` · R3 · NOT promoted.** Closed 2026-07-18. Care freeze preserved · outer 07-12 gate untouched · `OMNI Reactor` unchanged/unpromoted · naming gate OPEN.
Read for depth (do NOT relitigate): `_03` (Knox ruling + `§K.AMEND` score amendment + `§R` repo reconciliation) → `_02_omni_builder_trace_and_conformance_results.md` (Builder, 14 sections) + fixture `scripts/test-consequential-transition-conformance.ts` → `_02_incumbent_native_adversary_submission.md` (fresh Gemini, verbatim) → `_00` (charter + frozen rubric `§6A`). The next agent should read THIS terminus first, not infer closure from an index row.

---

## 1. Run purpose + scope
`EVRUN-000007` froze `OMNI Reactor` and named the only thing that could move it: **evidence, not eloquence** — three contrasting runtime traces + an independent standards-native adversary + a pre-registered rubric + separate adjudication. This run was that evidence gate. Quadrifecta roles (`_00 §1`): **Builder** = Opus (strongest OMNI realization + executable fixture) · **Adversary** = fresh Gemini (incumbent-native, blind) · **Adjudicator** = Knox (pre-registered rubric, authored + frozen before either submission) · **operator** = Nick. Scope was bounded to the fixed 3-trace suite; **not** another Reactor essay, no 9th invariant, no promotion, no central `reactor-service`.

## 2. Commit chain (ancestry is the ordering proof)
`f38bf29 → 322d018 → a296b94` (run opening) → **`60315ee`** (Knox rubric lock; Opus persisted unchanged) → **`6b5a8f8`** (Builder submission `_02` + fixture) → **`e905c0c`** (fresh Adversary `_02` + Knox adjudication `_03` integration) → **this closeout commit** (`_04` + registration + Volume 7). `60315ee ⊂ 6b5a8f8 ⊂ e905c0c` — ancestry, not editable timestamps, proves the rubric preceded the Builder and both preceded adjudication. Fixture blob = `869911493ed9a550cf5376828b68ec07a6a6d3eb`.

## 3. Source + submission preservation
- Charter + **frozen Knox rubric `§6A`**: `_00` (no semantic amendment ever made to the rubric).
- Prior Gemini reports (Round-1 `scope_nonconformant`, Round-2 `candidate_exposed`): `_01`.
- **Builder submission (verbatim, immutable):** `_02_omni_builder_trace_and_conformance_results.md`.
- **Fresh Adversary submission (verbatim, immutable):** `_02_incumbent_native_adversary_submission.md` — external-claim corrections live in `_03 §2`, NOT by editing the submission.
- **Adjudication:** `_03` (+ `§K.AMEND` + `§R`).
- Role purity held: no evidence the Builder saw the fresh Adversary before freezing; Gemini stayed incumbent-native (never used Reactor/OMNI terms); Builder did not score itself.

## 4. Tests + fixture provenance
`npx tsx scripts/test-consequential-transition-conformance.ts` → **31/31 GREEN, exit 0** (re-verified from clean state at integration + closeout). `npx tsc --noEmit` → 0 errors. `npx eslint …` → 0 errors, 0 warnings. Provenance ledger of checks: IMPLEMENTED 8 · IMPLEMENTED_PARTIAL 2 · CONTRACT_UNWIRED 5 · FIXTURE_ONLY 16. Fixture imports the live `treatment_order` machine; no `reactor` identifier; deterministic clock; idempotent capture/refund; nonparticipating-counterparty → honest unknown.

## 5. Validity + score (Knox; amended)
- Validity gates: **Gemini fails V3, V4, V6, V8** → no overall superiority verdict under the frozen rules. Builder passes V1–V7 at design level; **V8 partial→pass** for repository-backed claims (`_03 §K.AMEND`).
- Scores (secondary to gates; no dimension earns 5): **Builder 63.2 / 100** (amended from 61.2 — dimension 9 runtime-enforceability 3→4 on the committed executable fixture) · **Gemini 47.0 / 100.**
- **No other Builder dimension raised to 4** — custody, patient-consequence continuity, selective reopening, honest projection, bounded proof remain fixture-only or contract-unwired (testable ≠ wired runtime enforcement).

## 6. Ruling + dispositions
- **Verdict: R3 — Cross-authority continuity residual.** A real, material residual beyond ordinary EHR + payment + messaging + pharmacy-rail + workflow composition: a local rail can terminate while the patient consequence stays unresolved; transport ACK ≠ accepted consequence custody; jurisdiction/stockout/therapy-change propagate differently; compensation ≠ erasure of payment history; remedy/reconsideration/investigation/recovery/outcome stay distinct; the patient projection cannot keep saying "processing" after known failure; proof stays bounded + process-specific; authoritative state stays distributed. It survived a standards-native adversary **without** winning by vocabulary or brand-name omission.
- **R4 unavailable** — no external party has accepted/acted on the semantics or receipt; no measured economic/safety/liability/adoption result exists. This is a **design-and-conformance residual, not a production or network advantage.**
- **Reactor:** frozen · candidate · non-ontological · **UNPROMOTED.** No definition change, no 9th invariant. Strengthened + narrowed around cross-authority continuity of consequential transitions.
- **Naming gate:** OPEN. Builder used no `reactor` runtime identifier + no central object (positive but provisional); Gemini (blind) gave no naming evidence; prior objectification pressure remains valid.
- **Strategic interpretation (H1+H3):** portable healthcare authority/continuity kernel + operated runtime + earned proof/adoption/network; deploy independently for smaller operators or embedded/headless over enterprise infrastructure — better than the false choice between "replace Epic/Palantir" and "thin standards profile."

## 7. Established vs design-only vs externally-unproven
- **Established (repository-verifiable):** live 10-state `treatment_order` machine + DB-enforced legal transitions; cumulative captured payment (compensation ≠ rollback); status-based patient projection; idempotent outbound; and the executable conformance fixture that expresses the invariants as distributed, domain-native behavior with **no** Reactor object/service/table/queue.
- **Design-only (fixture-only / contract-unwired → C5):** accepted-custody carrier; patient-consequence continuity; honest-projection internal-evidence state; typed selective-reopening router; bounded portable receipt; accountability `response_case`. Contracts (CNS/OFC/Accountability) point to the owners; the live product has not compiled the full composition.
- **Externally unproven (world facts a trace cannot settle):** pharmacy acceptance of custody/receipt semantics; provider route-around; harm/cost reduction; insurer pricing; regulator/court recognition; repeatable deployment economics; grid formation.

## 8. Routing
- **Task-D consult (non-binding):** this R3 result is a **required consult input** for Task D (`v4_C4_2_…`, `required_pre_spine_input`) — carried like a G4 finding, NOT binding architecture, NOT a Task-D replacement. Registered via read-graph `9g-adj` + lane index.
- **`assignment_source_fidelity`:** remains `FWREG-013` (no standalone eval registry minted).
- **Guardrail sharpenings (this closeout):** `D0W3B-GRD-002` extended (ACK / message-receipt / task-assignment / local-queue-acceptance ≠ accepted cross-authority custody or patient-consequence completion) · `D0W3C-GRD-002` extended (a green conformance fixture proves internal consistency + testability, NOT production enforcement, counterparty acceptance, or institutional value).
- **Narrative:** major-arc preserved in `docs/architecture/evolution_narrative_volume_7_2026-07-18.md` (EVRUN-007→008 arc; no new architecture).

## 9. Later ratification trigger (NOT authorized now)
Minimum next real-world evidence (Knox `_03 §11`): **ONE external pharmacy seam** — OMNI/Bloom clinical + commerce → one external compounding pharmacy → payment processor → patient communication — with the full failure-injection set (jurisdiction incompatibility · pharmacy silence · stockout · equivalent reroute · clinically-meaningful alternative · duplicate webhook · refund retry · stale projection · patient withdrawal · outage) and measured metrics (inadmissible-execution rate · false-closure rate · unresolved-consequence orphan rate · time-to-accepted-custody · custody reject/expiry/unknown rates · exception→authorized-disposition time · correct-domain reopening precision · avoidable-capture rate · refund/remedy time · patient-state accuracy · proof completeness · external receipt acknowledgment · **`governed_action_share`** / route-around). **Belongs AFTER the applicable v4 + C5 gates; this run authorizes no schema work today.**

## 10. Non-reopen conditions (stop condition)
`EVRUN-000007` + `EVRUN-000008` are **CLOSED.** Do **NOT** reopen this conceptual arc to "understand Reactor better." Reopen ONLY if: (a) a concrete external event breaks a Reactor invariant; (b) the one-pharmacy-seam pilot runs and produces measured results; (c) an independent implementer objectifies Reactor into a central object despite the guard (naming-gate evidence); or (d) Nick + Knox explicitly direct it. Absent one of those, the next move is not more Reactor analysis — it is the outer v4 sequence.

## 11. Outer checkpoint unchanged
This nested nonbinding run does **not** repoint `AGENTS.md` or read-graph #15. Outer next-action remains: Agent Runtime & Harness capture depth and/or C3.9 plastics/medspa → Task D → v4 Spine Draft 0.

## 12. Closeout declaration
`EVRUN-2026-000008` is **CLOSED for analysis** at **R3 (nonbinding)**; Builder 63.2 / Gemini 47.0. `OMNI Reactor` remains a named, non-ontological, **unpromoted** candidate spine doctrine — strengthened and narrowed, not promoted. Nothing here is canon. **Reactor earned a stronger reason to exist, not permission to become a thing. The next proof must happen in the world.**
