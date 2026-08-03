# C4.4 G5 — Three-Angle Test Runbook

> Operator/relay runbook for executing the three frozen G5 tests. The three prompt files in this folder are self-contained; this runbook governs who receives which, independence rules, output handling, and the durable-preservation requirement.

## Frozen pins (RUN-2 A/B RERUN — repinned to the R2 metadata/state-patched commit)

*Run-1 ran against target `865afad` / packet blob `d01978f`; Knox adjudicated `HOLD`; one bounded G5 integration patch was applied (commit `bcb2b19`, packet blob `674fffa`); then a Knox pre-flight type+state micro-patch was applied on top (commit `f7db832`, packet blob `a12bd0e`). **Run-2 (three-angle) then executed against `f7db832`/`a12bd0e` and Knox adjudicated `HOLD`:** Angle A = NONCONFORMANT TEST (rerun required), Angle B = NONCONFORMANT / NOT EVALUATED (web-capable rerun required), Angle C = PASS 6/6 (carried forward — NOT rerun). A bounded **R2 metadata/state patch** (footer artifact-identity + App-E E.1 external-freeze correction only) was applied on top (commit `13f0d98`, packet blob `7c83e7e`); the Angle-C source/authoring sections are proven byte-unchanged. **The pins below target the R2-patched commit `13f0d98` and are used for the Angle A + Angle B reruns ONLY.** G3/G4 blobs are unchanged.*

- Repository: `ncrawf/main-app`
- Target commit: `13f0d98027da7087428f47bc07363645a5f4e4ab` *(run-2 was `f7db832a2f5eec5e6fc13fc996984cce5d8fb002`; run-1 was `865afadc7fe0e908acc1f5125006d1d00326c69b`)*
- G5 packet blob: `7c83e7ef0e7bbc29f14a5341edd1fbfed6bf07c8` *(run-2 was `a12bd0ef9821c13c3a0144977d3a73cd8e1dc42a`; run-1 was `d01978fc39939d09f33fbb95b87866a6f823d1e0`)*
- G3 **architecture substance** blob (input under test): `e364acbad3352457eb8c761d287e91787ea71eea` *(unchanged)*
- G3 **acceptance carrier** blob (same path at target commit; status/receipt only): `76a8cdfc4c75376ec5db1fa658c714a973169426` *(unchanged; `13f0d98:<G3 path>` still = `76a8cdf`)*
- G4 carrier blob: `07f866207836a22c103505835f80aa495a623101` *(unchanged; `13f0d98:<G4 path>` still = `07f8662`)*
- Runtime bridge blob: `de5b9a1fc7bf9ff77797d28a53a6fef9ced3ed34`
- OpenEvidence blob: `7cb62ed01af289babe625510315e36ef29203f95`
- Simulation blob: `a709c5de9be8e47ab6ac47780a0d6abc08a39977`
- Main baseline: `a87d3057b5c224e2b7c660ef040f868fa402e5f8`

### Run-1 result (2026-08-02 — Knox adjudication)

`HOLD` — **G3 remains ACCEPTED · G4 remains PASS 30/32 · no seventh constitutional class.** Angle A = NONCONFORMANT TEST (used the packet's §G5-10 change-receipts as blocking architecture; no complete 12-example/P01–P19 tables; override untraced). Angle B = NONCONFORMANT AS COMPARATOR EVIDENCE (checked the wrong G4 path; continued past an integrity mismatch; no web access yet produced current-vendor conclusions from memory; S2 golden-state/policy category errors — its gap hypotheses retained only after Knox reclassification). Angle C = PARTIAL/HOLD (six outputs produced; O4/O6 PARTIAL because the two proof programs + the two-speed law were prompt-supplied, not packet-sourceable). The bounded post-test patch (`bcb2b19`) added packet section **I.3A** (two-speed seam + full override trace), **I.9A** (both proof programs named + sourceable), **I.9B** (10 enterprise interfaces), **I.9C** (admission-operations + scale-risk register). The subsequent Knox pre-flight micro-patch (`f7db832`, packet blob `a12bd0e`) then corrected I.3A's ill-typed "six scope kinds" into **four orthogonal dimensions**, removed the arbitrary recurrence threshold, normalized the live state + hard stops, fixed I.9B #4 observer-ownership, and repaired the Q3/Q7/Q13 receipt + `admission_scope` shorthand. Raw run-1 outputs preserved unedited under `results/`.

### Run-2 result (2026-08-03 — Knox adjudication) → A/B rerun only

`HOLD — bounded correction and A/B rerun` (this is NOT an architecture collapse). **G3 remains ACCEPTED · G4 remains PASS 30/32 · no new class/plane/domain.** Run-2 executed against `f7db832`/`a12bd0e` (prompts+runbook frozen @ `fa31fd6`):

- **Angle A = NONCONFORMANT TEST** — omitted the complete P01–P19 table ("implicitly conform" is forbidden and auto-invalidates), audited only Q3/Q7/Q13 not Q1–Q13, attempted only 11 numbered mutations (no independent appendix-vs-Part-I contradiction mutation), mislabeled `analysis_nonbinding` as the controlling lifecycle state, and omitted the explicit stop. No controlling architecture verdict; its "no defects" claim has no weight. **RERUN REQUIRED — new independent agent; require the literal 12-row table, 19-row P01–P19 table, 13-row Q1–Q13 audit, full state audit, and an explicit stop declaration; no "implicitly conforms".**
- **Angle B = NONCONFORMANT / NOT EVALUATED** — violated the mandatory web gate ("simulated current knowledge", no exact live official-source citations, yet a full incumbent matrix + vendor rankings + latency/scale claims), reintroduced S2 policy/config category errors, used free-form I.3A dimension values, violated the F-Self OMNI-internal corpus boundary, and invented arbitrary targets. Incumbent matrix + vendor rankings + arbitrary targets REJECTED; only reclassified repository gap-hypotheses retained (already routed to I.9B/I.9C/Task-D/C4.5/Steel-Thread). **FULL WEB-CAPABLE RERUN REQUIRED — verify live official-source access before launch; no web ⇒ `ANGLE B INCOMPLETE — EXTERNAL EVIDENCE UNAVAILABLE`.**
- **Angle C = PASS 6/6** — zero PARTIAL, zero FAIL, zero App-E kill criteria; six downstream outputs authored from the pinned packet (six classes preserved, S2 non-operative, adoption-time normativity, Foundry whole≠machinery, simulation artifacts in S1, both proof programs + two-speed seam cited from I.3A/I.9A). Authorability DEMONSTRATED (implementation NOT proven). **CARRIED FORWARD — DO NOT RERUN** (valid under the R2 byte-unchanged carry-forward proof: I.2–I.9C, I.10 authoring contracts/output schemas, and App-E E.3/E.4/E.6/E.7 are byte-identical between `f7db832` and `13f0d98`).

The bounded **R2 metadata/state patch** (`13f0d98`, packet blob `7c83e7e`) fixed only the two Knox live-byte defects — R2-01 footer artifact-identity (`plan_or_roadmap`→`architecture_reconciliation`, "routing map, NOT new architecture" removed) and R2-02 App-E E.1 (packet does not self-stamp its freeze; authoritative freeze receipt lives in this runbook) — plus recorded the run-2 adjudication and moved controlling status/hard-stops to the A/B-only rerun posture. No architecture/taxonomy/matrix/comparator/proof-program/authoring-contract change. Raw run-2 outputs + the Knox run-2 adjudication are preserved unedited under `results/run2/`.

### G3 dual pinning

`e364acb` is the exact accepted architecture substance (the input under test). At target commit `13f0d98` the G3 file path resolves to carrier blob `76a8cdf` = the same architecture plus later acceptance/status receipts. Each test agent verifies `e364acb` as a readable blob (or via `6c86e2edc3935f5f7bad9c628b4e450837712767:<G3 path>`) AND separately confirms `13f0d98:<G3 path>` = `76a8cdf`. The two blobs are expected to differ — that is not an integrity failure. Architecture claims are evaluated against `e364acb`; the carrier is status-only.

## Which prompt goes to whom

**Angle A** — fresh independent constitutional/type adversary. Preferred: a fresh Gemini context with repository access. No prior OMNI chat, no project-history injection, no web. Send `C44_G5_ANGLE_A_PROMPT.md`.

**Angle B v2** — separate fresh enterprise-platform adversary with repository and web access. Preferred: a second fresh Gemini context, isolated from Angle A and this conversation. Official primary vendor documentation only. Send `C44_G5_ANGLE_B_V2_PROMPT.md`. **Angle B must run ONLY in a confirmed current-web-capable context** — if the assigned agent cannot reach current official-source web, it must return `ANGLE B INCOMPLETE — EXTERNAL EVIDENCE UNAVAILABLE` (incumbent columns `NOT_EVALUATED`, repository-only Tests 2–4, not eligible for full adjudication) per the prompt's Web-availability gate. Do not accept a B result whose incumbent claims come from model memory; re-run it in a web-capable context.

**Angle C** — **HISTORICAL-EXECUTED · PASS 6/6 · CARRIED FORWARD — DO NOT RERUN.** Angle C already passed run-2 (Knox: PASS 6/6, zero PARTIAL/FAIL/kill-criteria), and its source/authoring sections are proven byte-unchanged under the R2 patch (I.2–I.9C, I.10 authoring contracts/schemas, App-E E.3/E.4/E.6/E.7 identical between `f7db832` and `13f0d98`), so it is carried forward without a rerun. `C44_G5_ANGLE_C_PROMPT.md` is retained as the historical record of the passed run — do NOT re-dispatch it for the run-2 A/B reruns. (Only Angles A and B are repinned to `13f0d98`; Angle C's prompt intentionally keeps its historical `f7db832`/`a12bd0e` pins.)

## Independence rules

- The side Gemini that already saw the conversation is NOT one of the three test agents.
- Do not show Angle A output to Angle B or C.
- Do not show Angle B output to A or C.
- Do not show Angle C output to A or B.
- None writes to the repository.
- None edits its output after submission.
- None self-adjudicates.
- Each test agent is repository-connected and will auto-load OMNI boot context (`.cursor/rules/*`, `AGENTS.md`, `CLAUDE.md`/`GEMINI.md`, project memory). Each prompt carries a mandatory automatic-boot-context disclosure rule requiring the agent to (a) disclose that auto-loaded context in its source posture and (b) treat only the pinned read set as authority. Confirm each output includes that disclosure; an output that shows no boot-context disclosure is suspect and re-run-eligible.

## After the runs

Preserve all three raw outputs exactly. Do not send them to Opus for fixes.

Bring the three raw outputs to Knox. Knox classifies every finding as:

- constitutional blocker;
- G5 integration defect;
- required downstream contract/interface;
- executable-proof debt;
- implementation/procurement debt;
- no defect.

No architecture edit occurs until that classification.

## Preservation rule (Knox closeout acceptance condition)

A Future Work Registry row alone does not count as durable preservation.

At C4.4 close, accepted findings must land in actual authoring homes:

- architecture law → accepted G5 packet + spine/C5 obligations;
- enterprise composition strategy → Task-D required section/read path;
- override-lineage mechanics → owning-domain/CNS/Runtime contracts;
- F-Self and Enterprise Bootstrap proofs → Build Entry / Build OS;
- routing metadata → catalog/read graph/FWREG, as pointers to those substantive homes.

The uncommitted charter is the temporary execution lock only.

## What the tests mean (record in the closeout receipt)

- A successful **Angle A** means the packet is constitutionally coherent and type-consistent.
- A successful **Angle B** means the architecture exposes the right enterprise-composition boundaries, distinguishes OMNI-native semantics from commodity infrastructure, and defines credible proof obligations. It does NOT mean OMNI can currently operate a hospital like Palantir.
- A successful **Angle C** means fresh downstream authors can produce coherent spine, C5, Foundry, Simulation, and composition specifications without rediscovering the arc. It does NOT mean those specifications are implemented.

Actual proof remains: F-Self Intelligence Foundry Pilot; Enterprise Bootstrap Steel Thread; Build Entry admission; runtime proof; failure injection; measurable outcomes; and switching tests.
