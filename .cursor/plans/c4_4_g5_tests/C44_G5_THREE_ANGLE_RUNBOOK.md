# C4.4 G5 — Three-Angle Test Runbook

> Operator/relay runbook for executing the three frozen G5 tests. The three prompt files in this folder are self-contained; this runbook governs who receives which, independence rules, output handling, and the durable-preservation requirement.

## Frozen pins (RUN-2 — repinned to the post-patch commit)

*Run-1 ran against target `865afad` / packet blob `d01978f`; Knox adjudicated `HOLD` and one bounded G5 integration patch was applied (commit `bcb2b19`). Run-2 pins below target that patched commit. G3/G4 blobs are unchanged.*

- Repository: `ncrawf/main-app`
- Target commit: `bcb2b199ea3f66f0e4da9be0fb224f59c01809be` *(run-1 was `865afadc7fe0e908acc1f5125006d1d00326c69b`)*
- G5 packet blob: `674fffa5944c2911a4bd830cc27f1356029fc4bd` *(run-1 was `d01978fc39939d09f33fbb95b87866a6f823d1e0`)*
- G3 **architecture substance** blob (input under test): `e364acbad3352457eb8c761d287e91787ea71eea` *(unchanged)*
- G3 **acceptance carrier** blob (same path at target commit; status/receipt only): `76a8cdfc4c75376ec5db1fa658c714a973169426` *(unchanged; `bcb2b19:<G3 path>` still = `76a8cdf`)*
- G4 carrier blob: `07f866207836a22c103505835f80aa495a623101` *(unchanged; `bcb2b19:<G4 path>` still = `07f8662`)*
- Runtime bridge blob: `de5b9a1fc7bf9ff77797d28a53a6fef9ced3ed34`
- OpenEvidence blob: `7cb62ed01af289babe625510315e36ef29203f95`
- Simulation blob: `a709c5de9be8e47ab6ac47780a0d6abc08a39977`
- Main baseline: `a87d3057b5c224e2b7c660ef040f868fa402e5f8`

### Run-1 result (2026-08-02 — Knox adjudication)

`HOLD` — **G3 remains ACCEPTED · G4 remains PASS 30/32 · no seventh constitutional class.** Angle A = NONCONFORMANT TEST (used the packet's §G5-10 change-receipts as blocking architecture; no complete 12-example/P01–P19 tables; override untraced). Angle B = NONCONFORMANT AS COMPARATOR EVIDENCE (checked the wrong G4 path; continued past an integrity mismatch; no web access yet produced current-vendor conclusions from memory; S2 golden-state/policy category errors — its gap hypotheses retained only after Knox reclassification). Angle C = PARTIAL/HOLD (six outputs produced; O4/O6 PARTIAL because the two proof programs + the two-speed law were prompt-supplied, not packet-sourceable). The bounded patch (`bcb2b19`) adds packet section **I.3A** (two-speed seam + full override trace), **I.9A** (both proof programs named + sourceable), **I.9B** (10 enterprise interfaces), **I.9C** (admission-operations + scale-risk register). Raw run-1 outputs preserved unedited under `results/`.

### G3 dual pinning

`e364acb` is the exact accepted architecture substance (the input under test). At target commit `bcb2b19` the G3 file path resolves to carrier blob `76a8cdf` = the same architecture plus later acceptance/status receipts. Each test agent verifies `e364acb` as a readable blob (or via `6c86e2edc3935f5f7bad9c628b4e450837712767:<G3 path>`) AND separately confirms `bcb2b19:<G3 path>` = `76a8cdf`. The two blobs are expected to differ — that is not an integrity failure. Architecture claims are evaluated against `e364acb`; the carrier is status-only.

## Which prompt goes to whom

**Angle A** — fresh independent constitutional/type adversary. Preferred: a fresh Gemini context with repository access. No prior OMNI chat, no project-history injection, no web. Send `C44_G5_ANGLE_A_PROMPT.md`.

**Angle B v2** — separate fresh enterprise-platform adversary with repository and web access. Preferred: a second fresh Gemini context, isolated from Angle A and this conversation. Official primary vendor documentation only. Send `C44_G5_ANGLE_B_V2_PROMPT.md`.

**Angle C** — fresh repo-connected Opus/Claude author in a new context. No prior OMNI chat and no web. Send `C44_G5_ANGLE_C_PROMPT.md`.

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
