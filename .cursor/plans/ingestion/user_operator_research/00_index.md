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

| EVRUN id | opened | scope | primary specimen | status | promotion |
|---|---|---|---|---|---|
| `EVRUN-2026-000004` | 2026-07-09 | **Canonical Async-Care Substrate: Cross-Arc Crystallization** — reconciles the `EVSRC-251` physics decomposition (M1–M6 mechanics) against the full accepted estate (thesis v3-integrated · contracts/maps · C3.5/6/7 arcs · C3.8 enterprise/Palantir · C4 bet/watch/Polaris · Phase-4H messaging); per-mechanic coverage map + import list + Relationship/Subject verdict + broad-awareness 3-radius decision + routing-to-CNS-framework | `EVSRC-2026-000251` (+ siblings `EVSRC-2026-000200` Kyle, `FIELD-001` Alec) | `analyzed_draft` → **trifecta next** | `not_promoted` (`GRD-036`) |

Artifact: `analysis/EVRUN-2026-000004_async-care-substrate-crystallization/EVRUN-2026-000004_00_run_and_crystallization_map.md`. Owed evidence-ledger/catalog/read-graph rows flagged post-Knox (see run §10).

## Notes
- Next global ids: highest `EVSRC` across the whole Evidence Plane = **`000256`** (wave-4 video scaffolds `000253…000256` created 2026-07-11 in `outside_learning/sources/2026-07_wave-4/`). **`EVSRC-2026-000252` is RESERVED for the pending Task-A care-physics specimen in THIS lane** (deliberate gap; see `HANDOFF_2026-07-11…` Task A) — use `252` for it, do NOT reallocate. Any *other* new source scans the whole Evidence Plane +1 (= `000257`). Highest `EVRUN` = `EVRUN-2026-000004` (next = `000005`).
- Privacy: **both `EVSRC-2026-000200` and `EVSRC-2026-000251` contain identifiable third-party health info (251 = PHI: real prospective patient + TRT + labs)** — de-identify before any promotion (see each `_source.md` privacy flag).
