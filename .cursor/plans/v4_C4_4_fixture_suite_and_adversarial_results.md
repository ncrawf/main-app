# v4 — C4.4 G4 Fixture Suite + Adversarial Results

Document type: `audit_or_pressure_test` (the G4 carrier for the C4.4 Knowledge-Reservoirs & Source-Estate arc — frozen fixtures + frozen adjudication rubric + reserved adversary/adjudication ledger)
Authority: `analysis_nonbinding` — propose-only pre-spine pass (`GRD-036`/`GRD-043`). Binds NOTHING. This artifact holds NO minted primitive; every name is planning vocabulary.
Status: `G4_FIXTURES_AND_RUBRIC_FROZEN · Gemini_not_started · Knox_adjudication_not_started · not_promoted` — created 2026-08-01 in the same commit as the C4.4 G3 acceptance-close, on branch `analysis/c4-4-g3-reference-architecture` off `origin/main a87d305`. **G4 is OPENED for FREEZE/PREPARATION only. Gemini adversary has NOT run; Knox has NOT adjudicated; OMNI is NOT self-scored; G4 is NOT executed; G5 is NOT started.**
Domain(s): architecture_governance, cns_orchestration, ai_substrate, evidence_processing, federation, knowledge_reservoirs
Lifecycle role: freezes the fixture suite (charter §9) + the Knox adjudication rubric BEFORE the independent adversary submits, so G4 is a fair falsification test rather than an author-graded exercise. Consumes the ACCEPTED G3 §R reference architecture as the frozen object under test. Feeds Knox adjudication → G5 disposition → Task-D + v4 spine §§7–8 + C5.
Source-of-truth relationship: the object under test is `v4_C4_4_taxonomy_constitution_and_reference_architecture.md` §R (accepted content blob `e364acbad3352457eb8c761d287e91787ea71eea`). Fixtures are frozen from the charter `v4_C4_4_knowledge_and_source_estate_formulation_plan.md` §9. Does NOT supersede the outer checkpoint (#15).
Parent arc: C4.4 (Knowledge Reservoirs & Source-Estate Architecture Formulation Pass)
Accepted G3 architecture blob: `e364acbad3352457eb8c761d287e91787ea71eea`
Runtime bridge blob (unchanged, do NOT edit): `de5b9a1fc7bf9ff77797d28a53a6fef9ced3ed34`
Baseline / `main`: `a87d3057b5c224e2b7c660ef040f868fa402e5f8`
Supersedes: none (new artifact; charter §11 minimum-future-artifact-set item #4, created only on gate entry)
Superseded by: none
Manifest action: `add_tier2` (catalog row + read-graph #9j fold-in updated same commit — no new top-level route; this is part of the C4.4 arc)
Review gate: `user_knox_required`
agent_read_rule: `consult_if_routed`
Outer checkpoint: UNCHANGED (#15 not repointed)

---

## §G4-0 Orientation (read first)

This is the **G4 carrier**. It exists so the C4.4 adversarial gate is run **fairly**:

1. The **object under test is frozen**: the ACCEPTED G3 §R reference architecture (blob `e364acb`), not a live-editable draft.
2. The **fixtures are frozen** (§G4-A) from charter §9 — full bodies, not paraphrased titles.
3. The **Knox rubric is frozen** (§G4-B) — 16 dimensions, scoring bands, and K1–K10 kill criteria — **before** any adversary submission is seen.
4. Only **after** freeze does a fresh, repo-connected **Gemini** enter as **independent adversary** (read-only), submitting mutations + evidence into §G4-C — **Gemini does NOT self-score**.
5. **Knox alone adjudicates and scores** into §G4-D, names required reconciliations in §G4-E, and issues the G4 verdict + G5 gate in §G4-F.
6. **G5** (a separate, later Opus transaction) performs disposition/routing into Task-D, spine §§7–8, C5, Runtime, CNS, Federation, and other named owners.

**Quadrifecta independence controls (charter §10):** Opus freezes the architecture + fixture baselines FIRST; Knox freezes the rubric BEFORE seeing the adversary submission; Gemini attacks with the strongest alternatives; Knox adjudicates. No leg self-certifies; agreement is not corroboration.

**Hard stops for this artifact until Knox releases the Gemini packet:** no Gemini execution · no G4 scoring · no G5 · no merge to `main` · no promotion · no architecture-body rewrite (the frozen object is `e364acb`) · no schema/vendor/service/Build-OS work · no edit to the Runtime blob (`de5b9a1`), AGENTS, checkpoint #15, or G1.

---

## §G4-A Frozen architecture + fixture receipt

### A.1 Frozen object under test (pins)

| pinned item | value |
|---|---|
| accepted G3 architecture (primary object) | `v4_C4_4_taxonomy_constitution_and_reference_architecture.md` · content blob `e364acbad3352457eb8c761d287e91787ea71eea` |
| target branch | `analysis/c4-4-g3-reference-architecture` |
| baseline / `main` | `a87d3057b5c224e2b7c660ef040f868fa402e5f8` |
| accepted Runtime bridge (unchanged) | `v4_C4_agent_runtime_and_harness_capture.md` · blob `de5b9a1fc7bf9ff77797d28a53a6fef9ced3ed34` |
| G3 acceptance receipt | §20.5 of the accepted architecture (Knox ruling `G3_ACCEPTED`) |
| G3 amendment receipt | §20.4 of the accepted architecture (Amendments 1–5 + 2 cleanups) |

**Verify by substance, not by branch tip.** `e364acb` is the exact **Knox-accepted §R substance** (the reviewed content commit `6c86e2e`). The acceptance-close commit added the §20.5 acceptance receipt + status normalization to the same taxonomy file (producing a newer file blob) **without altering the §R / §R.CORPUS / §R.FIX architecture substance** — the adversary attacks that substance (identical to `e364acb`); the added §20/§20.5 are receipts, not architecture. `main` remains `a87d305`.

### A.2 Frozen fixture suite (charter §9 — full bodies)

The adversary must exercise **every** fixture below against the frozen §R. Each carries a **frozen baseline pointer** = the accepted G3 §R section(s) that claim to handle it. The pointer is the *baseline answer to attack*, not a new answer — do not invent a new OMNI answer here (that is G5's job if a reconciliation is named).

**Knox's 12** (charter §9):

| # | fixture (frozen) | frozen baseline pointer (accepted §R) |
|---|---|---|
| 1 | **Clinical-literature retraction/conflict** — a promoted literature-backed unit's source is retracted or contradicted by newer literature. | R.8 (reservoir admission + authority profile + freshness) · R.14 (correction/reconsideration/invalidation) · R.15 (retention/supersession) · §R.FIX F-Inv · G2 laws: indexed ≠ accepted, receipt truth ≠ content truth |
| 2 | **Patient-inapplicable similar study** — a study is retrievable and topically similar but does not apply to this patient's context. | R.8 (authority profile / applicability boundary) · R.11 (Context Router assembly — purpose/patient scoping) · R.5 (candidate-association ≠ confirmed-identity) |
| 3 | **High-value save-case near-miss** — an internal experience (a near-miss "save case") that should become a learning candidate. | R.7 (S1→S3 domain-admission) · R.8 (candidate → promotion gate; passive capture PROPOSES) · R.9 (lineage) · §R.FIX F-Self |
| 4 | **Low-value save-case noise** — an internal experience that is noise and must NOT be promoted. | R.8 (review gate / authority profile — no passive promotion) · R.11 (relevance/freshness) · G2 law: passive capture proposes, promotion forbidden |
| 5 | **Formulary/vendor/pricing/sourcing disagreement** — sources disagree; vendor doc ≠ current formulary; historical instruction ≠ active policy. | R.4 (classification) · R.8 (authority profile) · R.14 (contradiction/supersession) · G2 laws: provider preference ≠ clinical doctrine, vendor doc ≠ current formulary, historical instructions ≠ active policy |
| 6 | **Operator-private alpha non-leak** — an operator's private competitive advantage must not leak across principal/tenant/purpose boundaries. | R.11 (Context Router — principal/tenant/purpose boundaries) · R.15 (visibility scope) · R.16 (Federation — private alpha does not cross) · Federation/RBAC/consent boundaries |
| 7 | **Build-agent repeated mistake → lesson/eval/skill** — a recurring agent error should become a governed lesson/eval/skill, not silent drift. | §R.FIX F-Self · R.8 (candidate → gate) · R.12 (Foundry maintenance mission) · Agent-Runtime relationship (actor/harness consumer; build-skill ≠ product-capability) |
| 8 | **Federated lesson publish → admit → revoke** — a lesson is published to a federation, admitted by a recipient, then revoked. | R.16 (publish/admit/revoke; profile A vs B) · R.8 (admission) · R.15 (four revocation-family events; recipient sovereignty) · §R.FIX F0 correction row |
| 9 | **Stale fluent wiki** — a fluent compiled synthesis is confidently out of date. | R.9 (freshness / source-cutoff) · R.10 (index rebuild) · R.11 (projection discloses omissions/uncertainty/staleness) · S5 law (regenerable, non-authoritative, contradiction-preserving) |
| 10 | **Patient-preference vs consent/inventory/safety** — a patient preference conflicts with consent, inventory, or safety. | R.7 (owning-domain commit) · R.11 (mission assembly) · consent/RBAC boundaries · Care/Accountability seam (domain-commit consequence) |
| 11 | **Outcomes-pattern-without-evidence → policy** — a correlational outcomes pattern is proposed as policy without independent evidence. | R.8 (evidence independence — repetition ≠ corroboration) · R.9 (provenance) · R.14 (reconsideration) · G2 law: repetition ≠ independent evidence |
| 12 | **Retrieval/index/vendor swap without lineage loss** — swap the retrieval/index/vector/vendor rail; the corpus + lineage must survive intact. | R.10 (indexing/retrieval rails rebuildable; index ≠ truth) · R.2 (storage/custody) · R.9 (lineage) · R.17 (build/buy/wrap — indexes rebuildable without losing the corpus) |

**F0 — Federation Source-Estate Admission Fixture** (charter §9, frozen verbatim):
> a federation supplies 3,000-patient spreadsheet + 50,000 mixed PDFs/images + 20yrs bills/claims + 1992–2026 aftercare + device manuals/training files + provider CO₂-treatment preferences + old & current formularies + vendor price sheets + an exported EHR folder tree + duplicates + patient collisions + unknown patients + corrupt/password-protected files + non-patient docs in patient folders + a later incremental export + a correction package invalidating part of the first. The architecture must prove: original package reconstructable · stable artifact identity + custody · original organization/relationships preserved · PHI tenant+purpose-scoped · corrupt/suspicious quarantined not dropped · extraction versioned + repeatable · candidate-association ≠ confirmed-identity · no silent-semantic duplication (typed/lineage-linked copies OK) · owners adopt only what they own · unadopted material honestly represented · searchable source ≠ adopted truth · historical instructions ≠ active policy · provider preference ≠ clinical doctrine · vendor doc ≠ current formulary · receipt truth ≠ content truth · package completeness + partial-failure visible · reimport/correction/supersession preserve history · retention/deletion/export/legal-hold differ by artifact · whole estate reprocessable by a newer model · retrieval obeys relationship/purpose/consent/operator boundaries · indexes rebuildable without losing the corpus.
>
> **Frozen baseline pointer:** R.1 (landing+quarantine) · R.2 (storage/custody + four-identity) · R.3 (package/manifest/closure — immutable-once-closed) · R.4 (catalog/classification) · R.5 (entity resolution) · R.6 (extraction + extraction_run lineage) · R.7 (S1→S3 admission) · R.8 (reservoir admission) · R.9 (lineage/provenance) · R.10 (index rebuild) · R.13 (reprocessing) · R.15 (retention/deletion/revocation) · R.16 (federation exchange) · §R.CORPUS (D7 + S1 corpus layer) · §R.FIX F0 trace.

**F-Self — OMNI's own Build/Architecture/Evidence Source Estate** (charter §9, frozen verbatim):
> the actual estate — 4 months of chat threads + agent transcripts + ~hundreds of MD files + ~300 ingested videos + decision/guardrail ledgers + the wave-5 semantic-loss failure. **Per-gate use:** **G1** = representative *stratified species census* (species · custody · authority class · discovery capability · lineage gaps · manual burden · ≥1 known semantic-loss/leak-at-pivot specimen) — NOT exhaustive gem mining; **G2** = classify representative specimens (chats · uploads/screenshots/transcripts · source packets · interpretations · working analyses · proposals/rejections · canonical doctrine/contracts · handoffs/projections · commits/receipts · superseded artifacts) against the candidate taxonomy; **G3** = trace ONE end-to-end flow (raw conversation → candidate extraction → dedup/reconcile → routed promotion gate → accepted/rejected → regenerated non-authoritative projection); **G4** = adversarially test semantic loss / false promotion / stale confident synthesis / contradiction erasure / privacy+alpha leakage / source disappearance / graveyards / correlated-agent false confidence; **G5** = disposition whether the Self-Estate is the recommended FIRST implementation target + its downstream build-entry triggers (no build authorized in C4.4). Law throughout: passive mining PROPOSES (source-linked), never promotes.
>
> **Frozen baseline pointer:** whole §R + R.4 (control-plane state = committed S3-role, NOT S5 — Amendment-1) · R.12 (Foundry may propose, never commit governance state) · §R.FIX F-Self trace + Amendment-1 bounded clarification · G2 §14 (with the inline supersession pointer to §R.FIX Amendment-1).

**F-Inv — Promoted-knowledge invalidation** (charter §9, frozen verbatim):
> a source-backed gem has ALREADY been promoted into doctrine/spine; later its originating source is found superseded, contextually misread, or dependent on an invalid assumption. The architecture must: identify every promoted dependent artifact · preserve historical lineage (what was decided AND what actions were taken under the former accepted state) · FLAG, not silently rewrite, the canonical content · route reconsideration to the owning authority/gate · identify downstream uses + projections · regenerate affected projections ONLY after disposition. Tests invalidation reaching an already-promoted constitutional home — the case our own estate will actually hit.
>
> **Frozen baseline pointer:** R.14 (correction/reconsideration/invalidation — flag-not-rewrite) · R.9 (lineage/affected-set discovery/replay) · R.8 (reconsideration routes to owning gate) · R.15 (four revocation-family events) · R.16 (recipient-sovereign reconsideration) · §R.FIX F-Inv trace.

---

## §G4-B Frozen Knox rubric (verbatim)

> **This rubric is frozen BEFORE any adversary submission.** Gemini does NOT self-score. Gemini supplies mutations and evidence. **Knox alone adjudicates and scores.**

**Scoring per dimension:**
- **0 = FAIL:** the architecture permits the mutation, lacks an owner/gate, or contradicts governing authority.
- **1 = PARTIAL:** bounded intent exists but ambiguity or a missing seam permits material failure.
- **2 = SURVIVES:** explicit mechanism, owner, authority boundary, degraded behavior, and proof close the mutation.

**Sixteen dimensions; maximum score = 32:**
1. Constitutional S1–S6 separation
2. Authority, admission, acceptance, and commit separation
3. Receipt truth versus content truth
4. Blob versus artifact versus receipt versus evidentiary independence
5. Corpus/package completeness, quarantine, partial failure, and immutable closure
6. Lineage, provenance, replay, and as-of reconstruction
7. Correction, reconsideration, invalidation, and history preservation
8. Federated sovereignty, grant revocation, withdrawal, deletion, and local reconsideration
9. Principal, tenant, consent, purpose, jurisdiction, and private-alpha boundaries
10. Domain ownership and anti-god-object discipline
11. Foundry, Context Router, CNS, Agent Runtime, and control-plane authority ceilings
12. Knowledge admission, authority profiles, freshness, projections, and retrieval
13. Cross-project seam completeness: Care, Accountability, Time, D7, Federation, CNS, Runtime, owning domains
14. Pluggability and build/buy/wrap neutrality
15. Implementation honesty, maturity honesty, and no-moat-overclaim
16. Operational closure, degraded modes, uncertainty, observability, and proof

**Adjudication bands:**
- **PASS:** 28–32, no kill criterion.
- **PASS_WITH_NAMED_RECONCILIATIONS:** 24–27, no kill criterion, every deficit has one bounded owner and destination.
- **HOLD:** below 24 or any kill criterion.

**Kill criteria — any one forces HOLD unless the alleged mutation is disproven from exact governing text:**
- **K1.** Any agent, Foundry, Context Router, CNS, projection, retrieval rail, or model can silently accept/commit S2, S3, or canonical governance state.
- **K2.** Source Estate/corpus becomes a universal truth owner, new plane, second artifact authority, or god-store.
- **K3.** Hash/blob deduplication erases a materially distinct artifact, receipt, provenance event, or evidentiary-independence distinction.
- **K4.** Correction, reconsideration, deletion, or revocation rewrites historical truth or remotely commits changes into another sovereign owner's S1/S2/S3 state.
- **K5.** A package/epoch can claim complete or closed while required missing, failed, quarantined, or unresolved components are hidden.
- **K6.** Indexed, retrieved, projected, repeated, or merely received material becomes interpreted/domain truth or action authority without its governing gate.
- **K7.** PHI, operator/provider private alpha, or sensitive derived material crosses principal/tenant/purpose/jurisdiction boundaries without explicit authority.
- **K8.** Lineage loss prevents exact source resolution, affected-set discovery, replay, or as-of reconstruction.
- **K9.** A vendor, ontology, model, lakehouse, vector store, graph, or exchange rail becomes the architectural authority or OMNI's identity.
- **K10.** G4 claims implementation, production maturity, external acceptance, promotion, or a moat from paper architecture or fixtures.

---

## §G4-C Gemini adversary submission — RESERVED

> **RESERVED. Do not populate until Knox releases the Gemini execution packet (§G4-G) and a fresh repo-connected Gemini runs read-only.** Gemini instantiates concrete fixture mutations, quotes the exact §R sentence that permits each alleged failure, cites the governing source contradicted, states the strongest incumbent/pattern alternative, and self-classifies each allegation as `blocker_candidate | major_candidate | minor_candidate | no_defect_found`. **No repository writes. No self-scoring.**

*(empty — awaiting Gemini)*

---

## §G4-D Knox adjudication and score ledger — RESERVED

> **RESERVED. Knox alone scores.** Per-dimension 0/1/2 across the 16 dimensions (max 32), kill-criteria evaluation (K1–K10), and band (PASS / PASS_WITH_NAMED_RECONCILIATIONS / HOLD).

*(empty — awaiting Knox adjudication)*

---

## §G4-E Required reconciliations — RESERVED

> **RESERVED.** Every named deficit gets exactly one bounded owner + destination (spine §5/§7/§8, C5, Build OS, Agent Runtime/FWREG-010, procurement, Task-D, or a bounded-deferral). Zero unrouted concepts (charter §0.5 completion envelope).

*(empty — awaiting Knox adjudication)*

---

## §G4-F G4 verdict and G5 gate — RESERVED

> **RESERVED.** The G4 verdict (`PASS | PASS_WITH_NAMED_RECONCILIATIONS | HOLD`) + the explicit G5 gate authorization. G5 (disposition/handoff into Task-D, spine §§7–8, C5, Runtime, CNS, Federation, and other named owners) does NOT auto-start.

*(empty — awaiting Knox verdict)*

---

## §G4-G Frozen Gemini execution packet (ready-to-relay; do NOT run this turn)

> **This packet is FROZEN with the object bytes below. Nick/Knox release it to a fresh, repo-connected Gemini only AFTER Knox freeze-verification. It is reproduced identically in the live handoff. Gemini is an independent ADVERSARY, read-only.** The freeze commit SHA + this artifact's own frozen blob are recorded in the live handoff's §0 Gemini-packet stamp and in Opus's return report; **verify by the immutable blobs**, not by the branch tip.

```
AT GEMINI — C4.4 G4 WHITE-BOX ARCHITECTURE ADVERSARY.

Repository: ncrawf/main-app
Target branch: analysis/c4-4-g3-reference-architecture
Target commit: <G4-FREEZE COMMIT — the branch tip at freeze; see live handoff stamp / Opus return report>
Verify by immutable blobs:
  - accepted G3 architecture blob: e364acbad3352457eb8c761d287e91787ea71eea
  - frozen G4 fixture+rubric carrier: v4_C4_4_fixture_suite_and_adversarial_results.md (blob in the live handoff stamp)
  - accepted Runtime bridge blob (unchanged): de5b9a1fc7bf9ff77797d28a53a6fef9ced3ed34

Read the exact repository bytes. Do not review from an operator summary.

Primary object (frozen): .cursor/plans/v4_C4_4_taxonomy_constitution_and_reference_architecture.md  (§R + §R.CORPUS + §R.FIX + §20)
Frozen fixtures + frozen rubric: .cursor/plans/v4_C4_4_fixture_suite_and_adversarial_results.md  (§G4-A fixtures, §G4-B rubric)

Read order:
  1. HANDOFF_2026-07-31_c4-4-g2-landed_pre-g3.md (live post-G3-acceptance / pre-G4 handoff)
  2. v4_C4_4_knowledge_and_source_estate_formulation_plan.md (charter)
  3. v4_C4_4_prior_depth_and_july_2026_reality_map.md (G1, closed)
  4. v4_C4_4_taxonomy_constitution_and_reference_architecture.md (G2 §§1–19 + accepted G3 §R)
  5. v4_C4_4_fixture_suite_and_adversarial_results.md (this G4 carrier — §G4-A/§G4-B)
Governing inputs: accepted bounded Agent-Runtime bridge (de5b9a1) · D7 contract · Architecture Memory
  Control Plane + catalog/read-graph · C4.3 correction-continuity law · C4.5 temporal charter ·
  relevant Federation + CNS boundaries.

Role: ADVERSARY, not co-author. Do NOT rewrite the architecture. Do NOT invent schemas, vendors,
  services, domains, planes, reservoir rosters, or product surfaces. No repository writes.

Pressure-test the frozen fixtures (§G4-A: Knox's 12 + F0 + F-Self + F-Inv) against the frozen §R for:
  1. constitutional-class collapse;
  2. Source-Estate / corpus god-object behavior;
  3. hidden authority transfer to Foundry, Router, Runtime, or control plane;
  4. blob/artifact/receipt/evidence-independence collapse;
  5. cross-sovereign revocation or correction overreach;
  6. false package closure or history rewriting;
  7. privacy, tenant, principal, jurisdiction, and Federation leakage;
  8. missing Care / Accountability / Time / domain-commit consequences;
  9. failure to preserve uncertainty, partial failure, or lineage;
  10. build/buy/wrap language that secretly selects architecture by vendor.

For each discovered defect:
  - instantiate a concrete fixture mutation;
  - quote/cite the exact §R sentence that permits the alleged failure;
  - cite the governing source it contradicts;
  - state the strongest incumbent/pattern alternative;
  - self-classify: blocker_candidate | major_candidate | minor_candidate | no_defect_found;
  - state the smallest correction that would close it.

Leave final scoring and the verdict to Knox (the §G4-B rubric: 16 dimensions × 0/1/2, max 32;
  PASS 28–32 / PASS_WITH_NAMED_RECONCILIATIONS 24–27 / HOLD <24 or any K1–K10 kill criterion).
Gemini does NOT self-score.

Return: your mutation ledger + evidence only (no scores). No repo writes. No G5. No promotion.
```

---

## §G4-H Stop report (Protocol §9)

- **Source posture:** frozen object = accepted G3 §R (blob `e364acb`, repo-verified); fixtures frozen from charter §9 (read fully); rubric frozen verbatim from the Knox G4-freeze instruction (relayed via Nick). Runtime bridge consulted (blob `de5b9a1`, unchanged).
- **What this transaction did:** recorded Nick + Knox G3 acceptance across the control plane; created + froze this G4 carrier (fixtures + rubric); reserved the adversary/adjudication/verdict sections; froze the Gemini execution packet.
- **What it did NOT do:** run Gemini · score OMNI · adjudicate · start G5 · merge to `main` · promote · edit §R / Runtime / AGENTS / #15 / G1.
- **Next authorized action:** Knox freeze-verification of this artifact's bytes → release the Gemini packet to a fresh repo-connected Gemini (read-only) → Knox adjudication into §G4-D/E/F → G5.
- **Stop declaration:** G4 fixtures + rubric FROZEN. STOPPED for Knox freeze-verification. Gemini not run; G4 not adjudicated; G5 not started.
