# Parking Branch `d753a64` — Disposition Manifest (REV-148)

Document type: `evidence` (one-time branch disposition record — closed artifact, not a growable stream)
Authority: `derived_nonbinding` classification record; closes the "unclassified parked branch" gap for the CNS pass
Status: `active` (created 2026-05-30; classification done; recovery actions recommended, pending Nick approval)
Domain(s): `architecture_governance`, `cns_orchestration`, `longitudinal_intelligence`
Lifecycle role: per-item fate of the material parked on `wip/scheduling-cns-pre-thesis-snapshot-2026-05-23` (`d753a64`) so the CNS pass starts from known sources, not mystery branch residue.
Source-of-truth relationship: evidence-class per `00_architecture_artifact_index.md`. Closes the manifest portion of `D0THES-REV-148`; relates to `CNF-010` (LI doctrine) + `CNF-011` (lib/scheduling).
Manifest action: `add_tier2` (catalog row added) · Review gate: `architecture_steward_required + Nick`

---

## Why the branch exists (recap)

Snapshot taken 2026-05-23 when the build pivoted from scheduling/CNS → thesis/Build-OS/doctrine. The branch is an **old snapshot**; main has since progressed (Tier-0 activation + thesis v2 + Foundation vNext). So branch material is one of: **recover** (still-needed, not on main), **superseded** (main moved past it), **evidence** (historical), **investigate** (build-state, direction unknown), or already-**classified**.

## A. CNS / LI-relevant — RECOVER (needed for the CNS pass; not on main)

| Parked file (parked-only `A`) | Fate | Why |
|---|---|---|
| `doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` | **RECOVER → primary CNS/LI evidence** | The canonical LI doctrine (`CNF-010`); draft-ratified for limited Tier-1 use per `D0W3C-REV-001`. The CNS pass cannot run faithfully without it. |
| `doctrine/longitudinal_intelligence_pressure_test_bank_2026-05-19.md` | **RECOVER → LI pressure-test evidence** | LI scenario/pressure-test suite (per the audits-corpus discipline); feeds CNS pass + `REV-142` longitudinal loop. |
| `doctrine/longitudinal_intelligence_pressure_test_corpus_2026-05-19.md` | **RECOVER → evidence** | (same suite) |
| `doctrine/longitudinal_intelligence_pressure_test_execution_protocol_2026-05-19.md` | **RECOVER → evidence** | (same suite) |
| `doctrine/longitudinal_intelligence_pressure_test_result_2026-05-19.md` | **RECOVER → evidence** | (same suite) |
| `doctrine/07_evidence_ingestion_ledger.md` | **RECOVER → canonical evidence ledger** | The evidence ingestion ledger has been off-main this whole time (`omni_field_cases.md` was created to complement it); needed broadly, not just CNS. |

**Recovery method (recommended, pending Nick ok):** `git checkout d753a64 -- <file>` for these 6 → land on main as evidence (NOT as binding doctrine; re-verify LI doctrine's `ratified_limited_use` status against current Tier-0 stack before treating as authority). Catalog + read-graph rows added on recovery.

## B. CNS-adjacent runtime CODE — INVESTIGATE per-file at CNS-pass start (build reconciliation; direction unknown)

These `lib/*` files are **modified (`M`) on the branch vs main** — they may be parked mid-build CNS/intake/messaging/outbound/rules code (branch ahead) OR main has since progressed (branch behind). **Do NOT recover blindly.** Each needs a `git diff main d753a64 -- <file>` review at CNS-pass start to decide port / supersede / dead (G.5-style build reconciliation).

- `lib/events/index.ts`
- `lib/intake/runtime/resolve-emissions.ts`
- `lib/messages/postPatientMessage.ts`
- `lib/outbound/dispatch.ts` · `lib/outbound/enqueue.ts`
- `lib/protocol/derive.ts`
- `lib/rules/runtime/dispatcher.ts`

Also `docs/architecture/cns_action_orchestration_adr_2026-05-17.md` (`M`) — **main's version is canonical** (Tier-1 CNS source); review branch delta only if the CNS pass finds a gap.

## C. Already classified

- `lib/scheduling/{authority,trace,types}.ts` + `scripts/test-scheduling-authority-types.ts` — classified in D3 contract §9 (port authority/trace SHAPE; supersede stale `SchedulingState` enum; no merge).

## D. Superseded / evidence (NOT CNS-blocking)

Pre-Tier-0-activation working docs + patch-specs the branch carries that main has moved past (Tier-0 activation + Foundation vNext supersede the approach): `00_core_operating_physics_extraction_v0_2`, `00_deep_memory_extraction_v0_2`, `00_corpus_catalog_2026-05-19`, `00_manifest_coverage_audit_2026-05-19`, `00_supersession_conflict_ledger_2026-05-19`, the 2026-05-22 AWP patch-specs (`compatibility_matrix` / `preservation_matrix` / `wiring_patch_spec` / `governed_composition_integrity` / `major_architecture_inflection`), `evolution_narrative_volume_3_2026-05-22`. → **superseded-by-main / historical evidence**; recover individually only if a later pass needs one.

## Net

- **CNS pass unblocker = recover §A (6 files).** Then CNS starts from known sources.
- **§B runtime code = per-file investigation at CNS-pass start** (not now).
- Branch is no longer a mystery: every item has a fate. The branch may be deleted once §A is recovered and §B is reconciled (post-CNS).
