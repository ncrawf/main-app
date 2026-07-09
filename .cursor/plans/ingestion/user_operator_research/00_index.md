# User / Operator Research — Lane Index (registry)

Parent router: `../00_evidence_router.md` · Lane doctrine: `_lane.md` · Provenance audit: `../../doctrine/07_evidence_ingestion_ledger.md`

This is the lane **catalog** (sources + runs by global id) — NOT the concept registry (`GRD-037`/`GRD-040`). Topics are tags/columns here, never folders.

Lane status: **live** (first source captured 2026-07-05). Was `latent` placeholder.

## Sources

| EVSRC id | captured | source | type | respondent_role | status | topic_tags | routing_target | promotion |
|---|---|---|---|---|---|---|---|---|
| `EVSRC-2026-000200` | 2026-07-05 | Informal pre-clinical consult thread — hand injury (suspected hook-of-hamate fx); peer + PubMed + annotated imaging → specialist referral | screenshot collection (10) | patient + operator-advisor | `captured` | `patient_companion`, `pre_clinical`, `ai_native_care`, `candidate_not_commit`, `imaging`, `evidence_ingestion`, `referral`, `identity`, `provenance`, `cursor_paradigm`, `moat`, `strategy` | thesis §C / WI1 / WI7 · feature_backlog · domain_map (Intake/Clinical-Memory/Evidence/Referral/CNS) — proposed | `not_promoted` |
| `EVSRC-2026-000251` | 2026-07-09 | **THE CANONICAL EXCHANGE** — TRT prospective-patient consult (iOS Messages; labs back-and-forth) **+ operator's parallel ChatGPT-screenshot-then-confirm loop** (the displaced Lens-A workaround, live) | collection (iOS thread + ChatGPT thread + labs) | prospective patient + operator/provider + off-platform generalist AI | `raw_dropped` (SCAFFOLD — awaiting paste of both threads) ⚑PHI | `canonical_test_case`, `ai_native_care`, `chatgpt_workaround_displaced`, `candidate_not_commit`, `authority_gate`, `identity`, `intake`, `messaging`, `clinical_memory`, `observation_labs`, `consent`, `cns`, `commerce`, `substrate_physics` | thesis §1/§8 (loops+gates) / §B (AI substrate) · domain_map (Identity/Intake/Messaging/Clinical-Memory/Observation/Consent/CNS/Commerce) · feature_backlog · Build OS — proposed | `not_promoted` |

## Analysis runs

*(none yet — 200 + 251 captured as single field specimens. ⚑ `EVSRC-2026-000251` (canonical TRT exchange) may warrant a dedicated `EVRUN-2026-000004` "substrate-physics decomposition" once both threads are pasted + the trifecta physics pass runs — its analysis is heavier than a §3 note. Open per `GRD-040`/`GRD-044` if it grows.)*

## Notes
- Next global ids: highest `EVSRC` = `000251` (this lane) / `000250` was the wave-3 outside_learning top → **`000251` is the current global max; allocate next = `000252`**. Highest `EVRUN` = `EVRUN-2026-000003` (next = `000004`). Allocate by scanning the whole Evidence Plane (+1).
- Privacy: **both `EVSRC-2026-000200` and `EVSRC-2026-000251` contain identifiable third-party health info (251 = PHI: real prospective patient + TRT + labs)** — de-identify before any promotion (see each `_source.md` privacy flag).
