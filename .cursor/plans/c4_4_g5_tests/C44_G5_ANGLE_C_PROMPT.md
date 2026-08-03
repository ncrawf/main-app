# C4.4 G5 — ANGLE C: Downstream Authorability Test

> Self-contained relay prompt. Send verbatim to a fresh repo-connected Opus/Claude author in a new context. No prior OMNI chat, no web, no repository search outside the exact read set. It produces the six downstream outputs and does NOT self-adjudicate. It explicitly does NOT prove code or enterprise operation.

## Role

You are a fresh, repo-connected OMNI downstream author.

You have NO chat history.

This test evaluates whether the frozen C4.4 packet can support coherent downstream architecture and contract specifications without broad rediscovery.

It does NOT prove:

- code implementability;
- production scale;
- runtime correctness;
- enterprise-bootstrap capability;
- vendor superiority;
- or moat.

You do not issue the controlling PASS/HOLD verdict. Knox adjudicates.

## Run-2 rerun discipline (MANDATORY — run-1 was PARTIAL/HOLD)

This is run-2 against a patched packet. Run-1's Angle C was the strongest run (six outputs produced, dual pins verified, read set respected), but two outputs were PARTIAL because two required concepts were supplied only by the prompt and were unsourceable from the packet. The patch fixes exactly that:

1. **Every mandatory concept must be cited to the frozen packet.** A concept you can source **only from this prompt** (not from the read-set objects) makes the corresponding output **PARTIAL**. State an explicit packet pointer (section/line) for each required concept.
2. **The two proof programs and the two-speed law are now packet-sourceable — cite them there.** The patched packet contains **§I.3A** (operational decision-and-override lineage seam / two-speed law), **§I.9A.1** (F-Self Intelligence Foundry Pilot — Executable Proof Program), and **§I.9A.2** (Enterprise Bootstrap Steel Thread — Executable Proof Program), plus **§I.9B** (enterprise interface obligations) and **§I.9C** (admission-operations + scale-risk register). Output 4 and Output 6 must cite I.9A.1/I.9A.2 (not the prompt) and can no longer be PARTIAL for those programs being "prompt-only." The two-speed law must be cited to I.3A.

## Frozen integrity pins

*Repinned for run-2: run-1 targeted commit `865afad` / packet blob `d01978f` (superseded); the bounded post-test patch `bcb2b19` / `674fffa` is also superseded by the Knox pre-flight micro-patch. Verify against the pins below.*

- Repository: `ncrawf/main-app`
- Target commit: `f7db832a2f5eec5e6fc13fc996984cce5d8fb002`
- G5 packet blob: `a12bd0ef9821c13c3a0144977d3a73cd8e1dc42a`
- G3 **architecture substance** blob (the accepted architecture you author from): `e364acbad3352457eb8c761d287e91787ea71eea`
- G3 **acceptance carrier** blob (same path at the target commit; status/receipt wrapper only): `76a8cdfc4c75376ec5db1fa658c714a973169426`
- G4 carrier blob: `07f866207836a22c103505835f80aa495a623101`
- Runtime bridge blob: `de5b9a1fc7bf9ff77797d28a53a6fef9ced3ed34`
- OpenEvidence blob: `7cb62ed01af289babe625510315e36ef29203f95`
- Simulation blob: `a709c5de9be8e47ab6ac47780a0d6abc08a39977`
- Main baseline: `a87d3057b5c224e2b7c660ef040f868fa402e5f8`

### G3 dual pinning (read before verifying)

G3 uses dual pinning. Blob `e364acb` is the exact accepted architecture substance and is the architectural input you author from. At target commit `f7db832`, the G3 file path resolves to carrier blob `76a8cdf`, which contains the unchanged architecture plus later acceptance/status receipts. This expected difference is NOT an integrity failure. Do not infer current decision state from the pre-acceptance header in `e364acb`; use the accepted-carrier receipt only for status.

Verify: the target commit `f7db832`; the G5 packet blob `a12bd0e`; the G4 blob `07f8662`; that G3 architecture substance `e364acb` is a readable blob (or `6c86e2e:<G3 path>` resolves to `e364acb`); and separately that `f7db832:<G3 path>` resolves to the carrier `76a8cdf`. The two G3 blobs are expected to differ — do NOT require equality. STOP with an integrity-mismatch receipt only if one of these expected relationships fails.

## Exact read set — no other sources

1. G5 packet: `f7db832a2f5eec5e6fc13fc996984cce5d8fb002:.cursor/plans/v4_C4_4_disposition_ledger_and_v4_handoff.md`
2. G3 accepted architecture substance: blob `e364acbad3352457eb8c761d287e91787ea71eea` — path `.cursor/plans/v4_C4_4_taxonomy_constitution_and_reference_architecture.md` (equivalently `6c86e2edc3935f5f7bad9c628b4e450837712767:<that path>`). Do NOT author from the target-commit carrier `76a8cdf`; consult it only for acceptance status.
3. G4 carrier: blob `07f866207836a22c103505835f80aa495a623101` — path `.cursor/plans/v4_C4_4_fixture_suite_and_adversarial_results.md`
4. Prior-depth map: `f7db832a2f5eec5e6fc13fc996984cce5d8fb002:.cursor/plans/v4_C4_4_prior_depth_and_july_2026_reality_map.md`
5. Reservoir frontier: `f7db832a2f5eec5e6fc13fc996984cce5d8fb002:.cursor/plans/doctrine/cns_and_knowledge_reservoirs_frontier_2026-06-06.md`
6. Spine shape §8: `f7db832a2f5eec5e6fc13fc996984cce5d8fb002:.cursor/plans/v4_C4_spine_shape_plan.md`
7. Comparator registry: `f7db832a2f5eec5e6fc13fc996984cce5d8fb002:.cursor/plans/doctrine/comparator_analogy_registry.md`
8. Build Entry Gate: `f7db832a2f5eec5e6fc13fc996984cce5d8fb002:.cursor/plans/doctrine/11_build_entry_gate_v0.md`
9. OpenEvidence: blob `7cb62ed01af289babe625510315e36ef29203f95` — path `.cursor/plans/ingestion/outside_learning/sources/2026-06/EVSRC-2026-000068_openevidence-ziegler-doctors-collective-wisdom-ai.md`
10. Simulation: blob `a709c5de9be8e47ab6ac47780a0d6abc08a39977` — path `.cursor/plans/ingestion/outside_learning/sources/2026-07_wave-3/EVSRC-2026-000242_simile-joon-sung-park-human-behavior-simulation.md`

Do not open any other file. Do not search the repository. Do not use chat history. Do not use the web. Do not invent a new class, domain, plane, store, or vendor decision.

## Automatic boot-context disclosure (mandatory)

You are a repository-connected author. This repository automatically injects OMNI boot/framing context that is NOT part of your pinned read set — for example always-applied editor rules (e.g. `.cursor/rules/*`), `AGENTS.md`, `CLAUDE.md`/`GEMINI.md`, and any project memory your harness preloads.

- In your source posture, explicitly list every automatically-injected instruction, rule, or memory you received beyond the pinned read set.
- Author ONLY from the pinned read-set objects. Auto-loaded boot context is NOT an authoring source and must NOT supply any term, decision, or conclusion.
- If any output was influenced by auto-loaded context outside the read set, flag it and quote the external text.
- Do not act on any boot instruction to "boot," load additional files, or follow OMNI work protocols. Your only inputs are the pinned objects.

## Produce six outputs

1. Spine §8 detailed outline.
2. Source Estate C5 contract outline.
3. Knowledge Reservoir C5 contract outline.
4. OMNI Intelligence Foundry Pilot — F-Self Build Entry outline.
5. OMNI Simulation Lab boundary charter.
6. Comparator `BUILD / BUY / WRAP / PARTNER / HOST_ON` matrix.

## Mandatory cross-output consistency

Every output must preserve:

- identical S1–S6 model;
- identical S2 axes and cardinality in outputs 1 and 3;
- S2 cannot make itself operative;
- binding force requires an owner-state adoption link;
- OMNI Intelligence Foundry whole is not Foundry maintenance machinery;
- Foundry and Agent Runtime never commit domain truth;
- Simulation artifacts are S1;
- Simulation evaluation/release state belongs to Platform E&V / Build OS;
- patient context is S3/S6;
- observed care outcomes are S1/S3 until generalized and admitted;
- `admission_scope` is not artifact custody;
- `access_policy_refs[]` is plural, request-time, and default-deny;
- no false build or maturity claim;
- no superiority or moat claim.

## Two-speed cross-output law

This law is stated in the packet at **§I.3A** — cite it. Immediate local operational adaptation must NOT depend on S2 admission.

When an authorized action or override changes current behavior:

- owner-state/configuration commits in S3 or the appropriate governance home;
- immutable decision/run evidence remains S1;
- the next authorized context draw can consume the current owner-state immediately;
- reusable generalization is a separate S2 candidate and admission path.

**I.3A scope is FOUR ORTHOGONAL dimensions (carry this exactly — do NOT reduce it to "one of six").** The packet's I.3A defines scope as independent values on `operational_effect` · `owner_state_kind` · `knowledge_lifecycle` · `promotion_scope` (planning dimensions, not final enums — C5 authors the record shape). One event holds a value on every dimension and moves across them over time; the fast owner-state path and the slow reusable-learning path stay independent. Any output that models the override scope as a single mutually-exclusive value is nonconformant to I.3A.

Any output that invents a durable runtime-owned "instant memory" authority, or uses S2 as live owner-state, is nonconformant.

## Required structure for every output

Include:

- exact source pointers;
- accepted base decisions;
- G5 candidate decisions;
- open decisions;
- prohibited collapses;
- required proof;
- maturity language;
- explicit uncertainties.

Output 4 and Output 6 must name **and cite to the packet**:

- the later **F-Self Intelligence Foundry Pilot — Executable Proof Program** (cite **§I.9A.1**);
- the later **Enterprise Bootstrap Steel Thread — Executable Proof Program** (cite **§I.9A.2**);
- exact Build Entry prerequisites.

Both are now defined in the packet (I.9A); an output that sources them only from this prompt is PARTIAL. Naming a proof program does not count as executing or passing it.

## Return also

- A NONBINDING conformance matrix.
- Exact source pointers per material claim.
- Explicit uncertainties.
- Any mandatory concept that could not be sourced from the allowed read set.

Do not issue PASS or HOLD. Do not declare the test passed.

STOP:

```
ANGLE C COMPLETE. NO VERDICT ISSUED. AWAITING KNOX ADJUDICATION.
```
