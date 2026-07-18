# EVRUN-2026-000010 — Coverage Matrix (SKELETON)

Document type: `evidence_or_ingestion` (Evidence Plane · run coverage) · Authority: `analysis_nonbinding` (`GRD-036`). Propose-only. **STATUS `partially_captured_awaiting_analyst`.**

## §1 — Coverage by finding (verdict/status + residual)
| id | cluster | status | residual owed |
|---|---|---|---|
| _(pending analysis — fresh agent; reuse Dan-run `DTP-*`)_ | | | |

## §2 — Channel coverage — **NO PATIENT participant** (but incidental patient PHI: `[PT-DAN]`, `[PT-TRENT]`)
| channel | status | note |
|---|---|---|
| (Ch1-a) Knox/ChatGPT — thread 1 (clomiphene) | ⛔ OWED | drop into `provider_to_knox_screenshots/thread_1_clomiphene/` (`captured_interpretation_nonbinding`) |
| (Ch1-b) Knox/ChatGPT — thread 2 (TK topic) | ⛔ OWED | drop into `provider_to_knox_screenshots/thread_2/` (`captured_interpretation_nonbinding`) |
| (Ch2) provider ↔ Olivia (co-owner) — BLVD catalog/pricing/consent | ✅ CAPTURED | 9 shots (`IMG_0793…0801`); de-identified §2-Ch2; ⚑ `[PT-DAN]` labs nested |
| (Ch3) provider ↔ Caleb (Cache Valley) | ✅ CAPTURED | 7 shots (`IMG_0802…0808`); **= same thread as `000280` Ch-D (duplicate)** |
| (Ch3-call) Caleb phone call | ⛔ OWED | reconstruction only (`operator_reconstructed_nonbinding`) |
| (Ch4) provider ↔ Mills Pharmacy (René Caruso) — vendor 2 | ✅ CAPTURED | 3 shots (`IMG_0809…0811`); topical/CoQ10; multi-vendor sourcing |
| (REF) price list / formulary / Autopilot / BLVD catalog | ⚠️ IN-CHANNEL | captured inside Ch2/Ch3 (`DTP-12`); standalone drop owed |

## §3 — Gaps / owed
- Ch1 (Knox, 2 threads: clomiphene + TK) + Ch3 phone-call + standalone reference artifacts.
- **PII/PHI quarantine** (`[PT-DAN]` Dan Harris name+labs; `[PT-TRENT]` Rx UUIDs) — open governance action, incidental in a no-patient-participant case.
- **Cache Valley (Ch3) duplicated with `EVSRC-000280` Ch-D** — analyst: pick canonical + cross-ref; do not double-count.
- **Cross-link:** commerce tail of Dan/TRT `EVSRC-000279` (`[PT-DAN]`=Dan Harris).
- Evidence-ledger row `D0UOR-EVD-005` = ADDED 2026-07-17; catalog/read-graph = owed if promoted-significant.
- Re-lane decision (vendor_integration_evidence?) if Autopilot/Mills/Cache-Valley teardown dominates.

> Nothing promoted. Care capture untouched. Run `skeleton_awaiting_capture`.
