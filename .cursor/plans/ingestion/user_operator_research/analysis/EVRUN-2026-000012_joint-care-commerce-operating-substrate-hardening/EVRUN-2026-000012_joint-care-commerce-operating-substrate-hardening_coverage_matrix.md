# EVRUN-2026-000012 — Coverage Matrix

Document type: `evidence_or_ingestion` (Evidence Plane · run coverage) · Authority: `analysis_nonbinding` (`GRD-036`).
Run: `EVRUN-2026-000012` (**CLOSED 2026-07-19; Gates 0–7 complete**). Tracks which sources/channels are covered in the Gate-1 trace (carrier §2). De-identified tokens only. **Coverage/receipt state only — not architecture truth; closeout/routing = `_07`.** Owed captures (281 Ch1 Knox; two phone reconstructions) remain owed and do not block closure.

| specimen · channel | captured | covered in Gate-1 trace | notes |
|---|---|---|---|
| `EVSRC-000279` (whole) | via `EVRUN-000007` (closed) | ✅ consume-only (T-279-01…04) | not re-opened; connects at T-279-04 |
| `EVSRC-000280` Ch A (patient) | ✅ 3 shots | ✅ T-280-A | complete-as-provided |
| `EVSRC-000280` Ch B (Knox) | ✅ 15 shots | ✅ T-280-B | `captured_interpretation` only |
| `EVSRC-000280` Ch C (co-owner) | ✅ 2 shots | ✅ T-280-C | "call Dan" ambiguity registered |
| `EVSRC-000280` Ch D (vendor-A) | ✅ 7 shots | ✅ **analysis anchor** T-281-C3 | ≡ 281 Ch3 (analyzed once; 281 Ch3 retains own provenance) |
| `EVSRC-000280` D-call (phone) | ⛔ empty | ⛔ owed | `REC` if provided |
| `EVSRC-000281` Ch1 (Knox) | ⛔ empty | ⛔ owed | do NOT borrow 280-B |
| `EVSRC-000281` Ch2 (co-owner) | ✅ 9 shots | ✅ T-281-C2 | catalog/pricing/consent build |
| `EVSRC-000281` Ch3 (vendor-A) | ✅ 7 shots | ✅ (cross-ref canonical 280-D) | duplicate — counted once |
| `EVSRC-000281` Ch4 (vendor-B) | ✅ 3 shots | ✅ T-281-C4 | multi-vendor sourcing |
| `EVSRC-000281` Ch3-call (phone) | ⛔ empty | ⛔ owed | `REC` if provided |
| reference_artifacts (both) | in-channel only | partial | standalone drops owed |

**Coverage verdict (Gate 1):** *All provided de-identified channel representations have been traced. Gate-1 replayability remains bounded by absent raw phone material, absent 281 Ch1 AI threads, in-channel-only references, and use of prior-run-derived 279 interpretation.* Absent evidence is marked absent, never inferred.
