# EVRUN-2026-000009 — Coverage Matrix (SKELETON)

Document type: `evidence_or_ingestion` (Evidence Plane · run coverage) · Authority: `analysis_nonbinding` (`GRD-036`). Propose-only. **STATUS `capture_complete_awaiting_analyst`.**

## §1 — Coverage by finding (verdict/status + residual)
| id | cluster | status | residual owed |
|---|---|---|---|
| _(pending analysis — fresh agent; reuse Dan-run `DTP-*`)_ | | | |

## §2 — Channel coverage (which channels captured / weak / missing)
| channel | status | note |
|---|---|---|
| (A) patient ↔ provider (Mike; peptide/GLP-1) | ✅ CAPTURED | 3 shots; de-identified in `EVSRC-000280` §2A |
| (B) provider ↔ Knox/ChatGPT (tirzepatide pricing/formulary) | ✅ CAPTURED | 15 shots (ONE thread); `captured_interpretation_nonbinding` |
| (C) provider ↔ Olivia (co-owner) | ✅ CAPTURED | 2 shots; consent/charge/ops |
| (D) provider ↔ Caleb pharmacy (text) | ✅ CAPTURED | 7 shots; enclomiphene pricing + FDA-503A + AutoPilot |
| (D-call) Caleb phone call | ⛔ OWED | reconstruction only (`operator_reconstructed_nonbinding`) |
| (REF) price list / formulary / AutoPilot | ⚠️ IN-CHANNEL | captured inside B/D (`DTP-12`); standalone drop owed |

## §3 — Gaps / owed
- Phone-call reconstruction (§2 D-call); standalone `reference_artifacts/` drops.
- **PII/PHI quarantine** (Mike's PII; Trent's Rx UUIDs) — open governance action, awaiting operator confirm.
- Evidence-ledger row `D0UOR-EVD-004` = ADDED 2026-07-16; catalog/read-graph = owed if promoted-significant.
- Analysis itself = OWED (fresh agent).

> Nothing promoted. Care capture untouched. Run `capture_complete_awaiting_analyst`.
