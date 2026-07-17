# EVRUN-2026-000007 — Source Anchor Ledger (RECEIPTS ONLY)

Document type: `evidence_or_ingestion` (Evidence Plane · run receipts) · Authority: `analysis_nonbinding` (`GRD-036`). **Receipts only — NEVER author from this file (`GRD-044`).** The workbench is the concept registry; meaning = source packets + convergence, not these quotes.
Run: `EVRUN-2026-000007` · 2026-07-15 (patched post-drop). De-identified: `[PT]`=patient, `N`=provider, `chat`=ChatGPT/Knox (`captured_interpretation_nonbinding`). Verbatim ≤~15 words where possible. Raw immutable per `GRD-042`/PHI flag.

> **★ Canonical id for analysis = `EVSRC-2026-000279`; `278-*` anchor prefixes below are a one-time ALIAS/tombstone** (the specimen collided with the wave-5 Anthropic video at `000278`; physical rename = a separately-logged source-governance action, pending). **Narrative carrier for meaning = `_02` (this ledger is receipts ONLY; do not author from it — `GRD-044`).**

## A — `EVSRC-2026-000278` (episode 2)
| anchor id | channel | verbatim (de-identified) | supports finding |
|---|---|---|---|
| 278-A1 | A (`imsg_a_01`) | `[PT]`: "got my blood drawn this morning. Results coming." + T-panel (T 253·SHBG 12.2) | DTP-04, A2 follow-through |
| 278-A2 | A (`imsg_a_02`) | hotel folio: guest full legal name + home address + Amex charges (accidental) | **DTP-14** PII spill |
| 278-A3 | A (`imsg_a_03`) | `N`: "Got it, let me look at this and get back to you Dan" / "let me message tomorrow" | DTP-04, DTP-05 defer |
| 278-A4 | A (`imsg_a_04`) | `N`: "we'll get you started on therapy" · "Enclomiphene likely appropriate. Labs overall look good" | **DTP-16** commit + drift |
| 278-A5 | A (`imsg_a_04/05`) | `N`: "send Full name·Email·DOB·Home address … complete visit and consent … waive the initial consult fee ($149) … enclomiphene 12.5mg $349/90-day … Pharmacy ships direct" | **DTP-15** enrollment/consent/commerce/fulfillment |
| 278-A6 | A (`imsg_a_05`) | `[PT]`: "I'm good now if your available" · "Just driving" (→ phone pivot) | DTP-05, channel-C owed |
| 278-B1 | B (`gpt_b1_01`) | `chat`: "Agreed. Let's not decide yet." (after ~10-lab dump) | DTP-06, A.2/B1 |
| 278-B2 | B (`gpt_b2_*`) | `chat`: "sufficient to generate a plan" · "I'll ignore the duplicates" | **DTP-06** threshold-set-by-model |
| 278-B3 | B (`gpt_b3_01`) | `chat`: "verify … legally dispense enclomiphene in your state … refill workflow" (Cache Valley formulary fed in) | DTP-17 commerce/regulatory |
| 278-B4 | B (`gpt_b4_01`) | `chat`: "don't lock yourself into 100% markup forever" (business advice interleaved w/ clinical) | **DTP-17** firewall ABSENCE/challenge (corrected — NOT a proven outcome-corruption) |
| 278-PROV | §1 critical note | operator correction: batches 1–5 all seen INSIDE the Knox thread; channel A only later captured direct | **DTP-12** channel-provenance twist |
| 278-CS | case-series header | "FOLLOW-UP episode in the SAME longitudinal case as 251"; T fell 279→253; SHBG 13→12.2 | **DTP-13** compounding/longitudinal |

## B — `EVSRC-2026-000251` (episode 1, case-series precedent)
| anchor id | verbatim (de-identified) | supports |
|---|---|---|
| 251-AGE | provider seeded Knox "This is a 18 yo male"; patient is 46 ("Oh lol … I was thinking you were 18yo. I miss heard Trent") | wrong-data propagation → identity-derived context (baseline) |
| 251-OBLIG | `[PT]`: "I'll see what my PCP says … then Quest. Thanks Dr. C!" | A2 cross-episode obligation follow-through |
| 251-PLAN | `N`: "more of a role for T replacement than enclomiphene" | DTP-16 drift origin |
| 251-SSN | `N`: "I need: full name, DOB, SSN, address, email" (Quest order) | DTP-15 identity/consent lineage |

## C — Operator seed (verbatim in `_00` §3; keeper lines)
| anchor id | verbatim | supports |
|---|---|---|
| OP-WATCH | "it's SAFE for me to use my external chatgpt … and swear at it … I know I'm not being watched … In OMNI … we're watching everything" | **DTP-02** surveillance-asymmetry |
| OP-AUDIT | "the provider didn't know what they were doing … got mislead and carried it out … lawyer 'we looked at the audit' … CMO 'do you not understand T therapy?'" | **DTP-01** audit-as-indictment |
| OP-STANCE | "OMNI must have a STRONG STRONG stance" | **DTP-11** |
| OP-2035 | "that's very 2028 … not very 2035 … say it into the interface and it gets acted on" | DTP-03 in-thread mutate |
| OP-FLATTEN | "if we flatten the chatgpt convo … we lose … A TON of the nuance of medicine … the smallest dash, or exclamation … wife concerned underlined about fertility" | DTP-08 note-nuance |
| OP-CONSULT | "I called out … a consult to the pharmacy rep … are there handoff packets between ops members … is that a primitive" | DTP-07 |
| OP-HUMAN | "scheduling an appt doesn't require a provider … what care interactions require a human at all" | DTP-10 human-required boundary |

## C2 — Post-drop anchors (Channel C phone + full ChatGPT thread) — `operator_reconstructed_nonbinding` / relayed via Knox
> ⚑ These are **relayed reconstructions** (no native call artifact; full-thread turns relayed), lower fidelity — labeled accordingly. Verbatim §2C paste into the `EVSRC` source packet still OWED from operator. Do not treat as verbatim.
| anchor id | channel | reconstructed substance (de-identified) | supports |
|---|---|---|---|
| 279-C1 | C (phone, reconstructed) | provider: felt **uncomfortable with the biology/treatment selection**; did not feel expert in this lane | **DTP-18** declared uncertainty |
| 279-C2 | C (phone, reconstructed) | provider: **needed the AI**, gained **substantial confidence** from it; believes providers should be able to say "I felt uncomfortable / I did not know" | **DTP-18**; AI-created-confidence≠decision-quality |
| 279-C3 | C (phone, reconstructed) | patient goal: wants total testosterone **≈700, not ~200** | **DTP-22** goal≠target (preserve as patient-stated goal) |
| 279-B-pivot | B (full thread) | `chat` initially: **would NOT reach for enclomiphene** (TRT more physiologic given age/no-fertility-need) → later **pivots** to enclomiphene as good candidate | **DTP-16** decision-evolution; **EVAL-279-A** rationale instability |
| 279-B-fabricate | B (full thread) | `chat` drafts a note stating patient **elected enclomiphene to preserve fertility** — a rationale **NOT established** — then advises fertility "must actually be asked"; later admits fertility isn't a meaningful reason, calls it an **empiric trial** | **EVAL-279-A** unsupported-rationale insertion into documentation; **DTP-08** |
| 279-B-floor | B (full thread) | `chat` says more info needed → provider says existing material is the whole picture / sufficient → `chat` **immediately accepts + formulates a plan** | **DTP-06** evidence-floor/sycophancy failure (stricter-wins); provider overriding model's "need more evidence" |

## D — Estate cross-reference anchors (canon this run reconciles to — pointers, not new claims)
| anchor id | canon | used to establish |
|---|---|---|
| CANON-0.5 | `EVRUN-000004 §0.5` settled hierarchy + ④ retired terms | naming floor; no re-mint |
| CANON-3GATE | `§0.5 ③` G0 participant / G1 context / G2 commit | DTP-03/06/07/10 gates |
| CANON-AILOG | `§0.5 ③ F3` `ai_decision_log` 3 axes (EU AI Act/TRAIGA) | DTP-01/08/16 |
| CANON-FIREWALL | `§0.5 ②` Recommendation Integrity Firewall + incentive lineage | DTP-17 |
| CANON-NGP | thesis §7.6 Network Governance Plane; named access purposes; aggregate-by-default | DTP-02 dedup |
| CANON-ANTIREALSELF | thesis §13.6 anti-realself; §8 workforce-as-subject | DTP-02 dedup |
| CANON-FIELD002 | `omni_field_cases.md` FIELD-002 provenance-preserving carry-forward | DTP-08 |
| CANON-WI5 | `v4_C4_spine_watch_list.md` WI5 feature-enable=REV-184-shaped | DTP-03/15 |
| CANON-REV141 | Care §5 / REV-141 `care_commitment` vs `care_obligation` (OPEN) | A2/PB4 |
| CANON-REV184 | `v4_REV184_decision_state_reconciliation.md` §0 (7 lines) | DTP-01/06/10/16 |
| CANON-C38-B8 | `v4_C3_8_G3_doctrine_breakers.md` breaker-8 BYOM liability split (OPEN) | DTP-01 |
| CANON-REV210 | capture-time rights gate REV-210 (forensic Lane-6) | DTP-14 owed |
| CANON-252-D1 | `EVRUN-000004 §9.10` D1 execution-exception→Decide-reopen | DTP-09 override |

> **Anti-flatten (`GRD-044` 15-min-agent test):** keeper insights (OP-WATCH, OP-AUDIT) are preserved as verbatim structural lines, not paraphrased abstractions. If only "OMNI values privacy/audit" survived, the transcription FAILED.
