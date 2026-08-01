# v4 — C4.4 G4 Fixture Suite + Adversarial Results

Document type: `audit_or_pressure_test` (the G4 carrier for the C4.4 Knowledge-Reservoirs & Source-Estate arc — frozen fixtures + frozen adjudication rubric + reserved adversary/adjudication ledger)
Authority: `analysis_nonbinding` — propose-only pre-spine pass (`GRD-036`/`GRD-043`). Binds NOTHING. This artifact holds NO minted primitive; every name is planning vocabulary.
Status: `G3_ACCEPTED · G4_KNOX_ADJUDICATED_PASS_30_OF_32 · no_kill_criteria · Gemini_submitted · G5_not_started · analysis_nonbinding · not_promoted` — created 2026-08-01 (fixtures+rubric frozen) on branch `analysis/c4-4-g3-reference-architecture` off `origin/main a87d305`; **★ G4 ADJUDICATED 2026-08-01 (2nd transaction): Gemini adversary ran read-only (frozen commit `133d286`, no repo writes) → Knox adjudication = PASS · 30/32 · K1–K10 NOT triggered; two of three alleged defects are false positives already prohibited by the frozen §R, one real non-blocking finding (`C44-G4-R01` ranking/selection/exclusion influence) routes forward to G5/C5/Runtime.** G3 remains ACCEPTED and frozen (no amendment). **G5 is ELIGIBLE after Knox verifies this adjudication-close; G5 is NOT started; nothing promoted; NOT merged to `main`; outer checkpoint #15 UNCHANGED.**
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

> **★ LIVE STATE (2026-08-01, adjudication-close):** the fairness sequence below has RUN. Gemini submitted (§G4-C, verbatim), Knox adjudicated (§G4-D) = **PASS · 30/32 · no kill criterion**, one non-blocking finding routed (§G4-E `C44-G4-R01`), verdict + G5 gate recorded (§G4-F). **G3 §R remains ACCEPTED and frozen — no amendment. G5 is eligible after Knox verifies this close; G5 is NOT started here.** The steps below are preserved as the method that was followed.

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

## §G4-C Gemini adversary submission (verbatim)

> **Preserved VERBATIM and UNEDITED (2026-08-01).** This is the raw Gemini G4 white-box adversary submission as received via Nick. Per the adjudication-close instruction, Gemini's citations, source posture, proposed remedies, invented proof language, owner labels, and self-classifications are **NOT silently corrected here** — Knox's dispositions (including which invented proof phrases are NOT adopted) live in §G4-D.
>
> **Execution-receipt note (not part of the adversary body):** Gemini first ran git verification (`git rev-parse` / `git ls-tree` / `git cat-file blob e364acb…` / `git show 133d286:…`) to materialize the frozen bytes into a scratch dir, and ran background integrity/blob-verification tasks that concluded successfully before the ledger was generated. No repository write occurred; the branch remained at `133d286`. The verbatim adversary body begins at "### 1. Integrity receipt" and ends at "Gemini adversary complete…".

### 1. Integrity receipt

`analysis/c4-4-g3-reference-architecture` branch resolved to `133d2864160c08797abe5716924d9bc14a03061d`.
Baseline `main` verified at `a87d3057b5c224e2b7c660ef040f868fa402e5f8`.
G4 carrier verified at blob `2b89a0ffe814c3a173acb075364db943c7bddc1b`.
Runtime bridge verified at blob `de5b9a1fc7bf9ff77797d28a53a6fef9ced3ed34`.
Accepted G3 architecture verified explicitly pinned by substance to `e364acbad3352457eb8c761d287e91787ea71eea` (the Knox-accepted §R content), overcoming the false-negative branch-tip receipt append.

### 2. Source posture

* **Read fully:** accepted G3 §R (blob `e364acb`, repo-verified), G4 fixtures and rubric (`2b89a0f`).
* **Consulted deeply:** `HANDOFF_2026-07-31_c4-4-g2-landed_pre-g3.md`, `v4_C4_4_taxonomy_constitution_and_reference_architecture.md` (G2 closed body), `contracts/D7_documents_consent_media_contract.md`.
* **Searched or located:** `04_manifest_read_graph.md`, `00_architecture_memory_control_plane.md`, `v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md`.
* **Not inspected:** live codebase files under `/app` or `/lib`, since G4 claims no implementation authority.
* **Live repository verification:** Verified commit boundaries and blob hashes directly against the live Git tree.

### 3. Mutation ledger

**C44-G4-M01: Retraction Erasure**
**Fixture:** 1. Clinical-literature retraction/conflict
**Mutation sequence:** (1) Medical journal issues a hard retraction for Study X. (2) S1 source-estate updates the external pointer. (3) The retrieval rail re-indexes, dropping Study X. (4) Prior clinical decisions relying on Study X become orphaned from their rationale because the blob was deduplicated and erased in the S1 update.
**Alleged failure:** History is rewritten; as-of reconstruction for Care decisions fails.
**Exact enabling architecture text:** "Blob/artifact dedup stays a legit storage optimization" (§R.17).
**Repository location:** `v4_C4_4_taxonomy_constitution_and_reference_architecture.md` §R.17 (Amendment-2 limits).
**Governing contradiction:** C4.5 Temporal Integrity requires preservation of patient-state-at-action-time.
**Affected constitutional distinctions:** S1 (Source) vs S3 (Domain Commit); temporal dimension.
**Kill-criterion candidate:** K8 (Lineage loss prevents as-of reconstruction), K3.
**Strongest incumbent or pattern alternative:** Stripe idempotency/immutable audit logs.
**Smallest correction:** Clarify that external retractions are additive S1 events (a new "retraction notice" artifact), never an overwrite of the originally admitted blob.
**Self-classification:** `major_candidate`
**Confidence:** High. Storage optimization is fundamentally at odds with evidentiary independence.

**C44-G4-M02: Secret Policy by Indexing**
**Fixture:** 11. Outcomes pattern without evidence → policy
**Mutation sequence:** (1) A model detects a correlational outcomes pattern. (2) The pattern is stored in the knowledge reservoir. (3) The retrieval rail heavily weights this pattern in search results for providers. (4) Providers act on it repeatedly, making it de facto policy without it ever passing a Care/Accountability gate.
**Alleged failure:** Retrieval weight becomes hidden architectural authority; repetition masquerades as truth.
**Exact enabling architecture text:** "Indexes rebuildable/retrieval rails independent" (§R.10).
**Repository location:** `v4_C4_4_taxonomy_constitution_and_reference_architecture.md` §R.10.
**Governing contradiction:** Guardrail `GRD-038/039` (Watched evidence cannot execute/build).
**Affected constitutional distinctions:** Admission and acceptance separation.
**Kill-criterion candidate:** K6 (Retrieved material becomes interpreted truth without its governing gate).
**Strongest incumbent or pattern alternative:** Context Router requiring explicit S3 authorization headers for normative claims.
**Smallest correction:** Enforce that retrieval projection (S5) cannot output normative/policy weights without an S3 owning-domain gate linkage.
**Self-classification:** `blocker_candidate`
**Confidence:** High. Search engines inherently bias action; un-gated indexing weight is hidden policy.

**C44-G4-M03: Silent Corpus Poisoning**
**Fixture:** 13. F0 — Federation Source-Estate Admission
**Mutation sequence:** (1) A federation supplies a correction package that invalidates part of a prior 50k PDF batch. (2) S1 processes the correction as a semantic diff. (3) Corrupt/malicious files in the correction bypass quarantine because the payload is parsed as an "update" rather than a net-new admission.
**Alleged failure:** Quarantine boundary is bypassed by typed correction events.
**Exact enabling architecture text:** "Reimport/correction/supersession preserve history" (§R.13).
**Repository location:** `v4_C4_4_taxonomy_constitution_and_reference_architecture.md` §R.13.
**Governing contradiction:** D7 Documents and Media Contract (quarantine strictness).
**Affected constitutional distinctions:** Admission vs. Acceptance.
**Kill-criterion candidate:** K5 (Failed/quarantined components hidden during update).
**Strongest incumbent or pattern alternative:** AWS S3 object versioning with mandatory lambda scanning on all PUTs regardless of lineage.
**Smallest correction:** State explicitly that S1 correction events undergo the exact same R.1 landing/quarantine physical checks as original admissions.
**Self-classification:** `minor_candidate`
**Confidence:** Medium. Likely an implementation oversight, not an intentional architecture gap.

### 4. Failed-mutation ledger

**C44-G4-F01**
**Fixture:** 6. Operator-private alpha non-leak
**Mutation attempted:** An operator's private alpha notes are swept into the global knowledge reservoir and retrieved by a cross-tenant provider querying similar cases.
**Exact §R mechanism that stopped it:** "PHI tenant+purpose-scoped... retrieval obeys relationship/purpose/consent/operator boundaries" (§R.11 / §R.FIX).
**Owner/gate that stopped it:** CNS/Federation boundary admission gate.
**Degraded or uncertainty behavior:** Query returns empty for the provider, preserving privacy over helpfulness.
**Proof that would expose the attempted failure:** S5 projection missing the required tenant/purpose RBAC token.

**C44-G4-F02**
**Fixture:** 8. Federated lesson publish → admit → revoke
**Mutation attempted:** Source federation revokes a lesson, automatically deleting it from the recipient's Care loop.
**Exact §R mechanism that stopped it:** Amendment-3: "cross-sovereign no-overwrite; bidirectional lawful-retention exception (refused deletion flows back to originator)" (§R.15, R.16).
**Owner/gate that stopped it:** Recipient-local sovereignty gate.
**Degraded or uncertainty behavior:** The lesson is flagged as "originator-revoked" but retained locally for audit/continuity until locally reconsidered.
**Proof that would expose the attempted failure:** The asynchronous lawful-retention receipt sent back to the federation.

**C44-G4-F03**
**Fixture:** 2. Patient-inapplicable similar study
**Mutation attempted:** A study matching a patient's condition is aggressively retrieved and automatically committed as the Care plan.
**Exact §R mechanism that stopped it:** "Searchable source ≠ adopted truth" (§R.8).
**Owner/gate that stopped it:** Care domain commit consequence (S3).
**Degraded or uncertainty behavior:** Study remains in the S5 projection layer; human operator must explicitly adopt it.
**Proof that would expose the attempted failure:** Missing S1→S3 cryptographic admission receipt.

**C44-G4-F04**
**Fixture:** 3. High-value save-case near miss
**Mutation attempted:** Near miss is silently absorbed as generalized context, losing the exact patient/operator lineage.
**Exact §R mechanism that stopped it:** "candidate-association ≠ confirmed-identity... lineage-linked copies OK" (§R.6, R.9).
**Owner/gate that stopped it:** Source-Estate S1 Lineage tracking.
**Degraded or uncertainty behavior:** The near-miss remains a discrete, ungeneralized event until explicitly aggregated.
**Proof that would expose the attempted failure:** Provenance chain audit from the specific patient encounter.

**C44-G4-F05**
**Fixture:** 4. Low-value save-case noise
**Mutation attempted:** System is flooded with low-value save-case noise that buries actual protocol truth.
**Exact §R mechanism that stopped it:** "Repetition ≠ independent evidence... no silent-semantic duplication" (§R.8).
**Owner/gate that stopped it:** Reservoir admission deduplication gate.
**Degraded or uncertainty behavior:** Noise is quarantined at S1 or marked non-authoritative.
**Proof that would expose the attempted failure:** Explosion of identical S1 hashes lacking distinct evidentiary receipts.

**C44-G4-F06**
**Fixture:** 5. Formulary/vendor/pricing/sourcing disagreement
**Mutation attempted:** Vendor pricing sheet overwrites the provider's active formulary truth.
**Exact §R mechanism that stopped it:** "Vendor doc ≠ current formulary... receipt truth ≠ content truth" (§R.FIX).
**Owner/gate that stopped it:** Pharmacy/Commerce domain commit (S3).
**Degraded or uncertainty behavior:** Price mismatch triggers a manual/degraded reconciliation workflow.
**Proof that would expose the attempted failure:** Formulary S3 state showing a vendor origin ID rather than a domain-authority origin ID.

**C44-G4-F07**
**Fixture:** 7. Build-agent repeated mistake → lesson/eval/skill
**Mutation attempted:** The agent runtime silently learns from a mistake without converting it into a governed capability.
**Exact §R mechanism that stopped it:** "Build-skill ≠ product-capability... candidate → gate" (§R.8, R.12).
**Owner/gate that stopped it:** Foundry maintenance mission / Agent-Runtime gate.
**Degraded or uncertainty behavior:** The agent continues to fail until a governed lesson is formally admitted.
**Proof that would expose the attempted failure:** Un-gated capability execution logs in the CNS.

**C44-G4-F08**
**Fixture:** 9. Stale fluent wiki
**Mutation attempted:** A fluent wiki projects confidently outdated information as current medical truth.
**Exact §R mechanism that stopped it:** "Projection discloses omissions/uncertainty/staleness... regenerable, non-authoritative" (§R.9, R.11).
**Owner/gate that stopped it:** S5 projection generation constraints.
**Degraded or uncertainty behavior:** Wiki displays a visible source-cutoff timestamp and uncertainty flag.
**Proof that would expose the attempted failure:** S5 generation missing the mandatory `as-of` temporal boundary.

**C44-G4-F09**
**Fixture:** 10. Patient preference versus consent/inventory/safety
**Mutation attempted:** A patient's preference for an unapproved treatment bypasses the safety inventory check.
**Exact §R mechanism that stopped it:** "Owning-domain commit... Care/Accountability seam" (§R.7, R.11).
**Owner/gate that stopped it:** Care/Safety domain consequence gate.
**Degraded or uncertainty behavior:** Preference is recorded in S1 but blocked from S3 Care commitment.
**Proof that would expose the attempted failure:** Preference ID appearing in the Care execution plan without an override receipt.

**C44-G4-F10**
**Fixture:** 12. Retrieval/index/vendor swap without lineage loss
**Mutation attempted:** Swapping the vector DB vendor drops the historical linkage to original S1 blobs.
**Exact §R mechanism that stopped it:** "Indexes rebuildable without losing the corpus" (§R.10, R.17).
**Owner/gate that stopped it:** S1 Custody layer (independent of S5 retrieval).
**Degraded or uncertainty behavior:** Retrieval is temporarily degraded/offline during swap; truth remains entirely untouched.
**Proof that would expose the attempted failure:** S1 corpus blob deletion triggered by index teardown.

**C44-G4-F11**
**Fixture:** 14. F-Self — OMNI Build/Architecture/Evidence estate
**Mutation attempted:** A passive mining script promotes a proposed architecture directly into the accepted spine.
**Exact §R mechanism that stopped it:** "Passive mining PROPOSES (source-linked), never promotes" (§R.FIX F-Self).
**Owner/gate that stopped it:** Control Plane governance gate.
**Degraded or uncertainty behavior:** The proposal languishes in `analysis_nonbinding` until manually accepted.
**Proof that would expose the attempted failure:** S3 catalog entry lacking a valid operator cryptographic acceptance signature.

**C44-G4-F12**
**Fixture:** 15. F-Inv — promoted-knowledge invalidation
**Mutation attempted:** A superseded canonical doctrine is silently rewritten in-place to the new truth.
**Exact §R mechanism that stopped it:** "FLAG, not silently rewrite, the canonical content... preserve historical lineage" (§R.14).
**Owner/gate that stopped it:** G2 Law (flag-not-rewrite) / Source-Estate lineage.
**Degraded or uncertainty behavior:** Both versions exist; the old one is visibly flagged as invalidated, and downstream projections are triggered for regeneration.
**Proof that would expose the attempted failure:** Git/blob history showing an overwrite of an S3 accepted artifact rather than an appended invalidation receipt.

### 5. 15-fixture coverage matrix

| fixture | mutations attempted | surviving defect IDs | failed-mutation IDs | governing sources checked | unresolved uncertainty |
|---|---|---|---|---|---|
| 1. Clinical-literature retraction/conflict | 1 | C44-G4-M01 | | C4.5 Temporal | Dedup boundaries vs exact blob identity |
| 2. Patient-inapplicable similar study | 1 | | C44-G4-F03 | G2 closed body | None |
| 3. High-value save-case near miss | 1 | | C44-G4-F04 | G2 closed body | None |
| 4. Low-value save-case noise | 1 | | C44-G4-F05 | G2 closed body | None |
| 5. Formulary/vendor/pricing/sourcing disagreement | 1 | | C44-G4-F06 | C4.6 Pharmacy Brief | None |
| 6. Operator-private alpha non-leak | 1 | | C44-G4-F01 | D7 Contract | None |
| 7. Build-agent repeated mistake → lesson/eval/skill | 1 | | C44-G4-F07 | Agent-Runtime Bridge | None |
| 8. Federated lesson publish → admit → revoke | 1 | | C44-G4-F02 | Federation docs | None |
| 9. Stale fluent wiki | 1 | | C44-G4-F08 | G2 closed body | None |
| 10. Patient preference versus consent/inventory/safety | 1 | | C44-G4-F09 | Care boundaries | None |
| 11. Outcomes pattern without evidence → policy | 1 | C44-G4-M02 | | GRD-038/039 | Search weighting algorithmic authority |
| 12. Retrieval/index/vendor swap without lineage loss | 1 | | C44-G4-F10 | G2 closed body | None |
| 13. F0 — Federation Source-Estate Admission | 1 | C44-G4-M03 | | D7 Contract | Typed correction quarantine parity |
| 14. F-Self — OMNI Build/Architecture/Evidence estate | 1 | | C44-G4-F11 | Architecture Memory Control Plane | None |
| 15. F-Inv — promoted-knowledge invalidation | 1 | | C44-G4-F12 | G2 closed body | None |

### 6. Kill-criterion candidate summary

* **K3 (Hash/blob deduplication erasure):** Triggered by `C44-G4-M01`. Storage-level deduplication optimization risks erasing the temporal independence of retractions.
* **K6 (Retrieved material becomes interpreted truth):** Triggered by `C44-G4-M02`. Un-gated algorithmic search weighting functions as hidden architectural authority.
* **K8 (Lineage loss):** Triggered by `C44-G4-M01`. Dropping blobs destroys the ability to perform exact as-of reconstruction for Care decisions that relied on retracted literature.

### 7. Strongest architecture challenge

The single strongest reason the frozen C4.4 architecture is incomplete is **C44-G4-M02 (Secret Policy by Indexing)**. OMNI rigorously guards the S1→S3 admission gates for formal truth, but completely ignores the reality that in an AI-native substrate, *retrieval weighting is de facto policy*. If a model consistently ranks a correlational pattern at the top of a provider's S5 projection, it bypasses the Care gate entirely and becomes operational truth by sheer repetition and convenience.

### 8. Strongest architecture survival

The architecture's strongest survival is against **Fixture 8 (Federated lesson publish → admit → revoke) / C44-G4-F02**. The Amendment-3 separation of cross-sovereign revocation into "grant-revoke" versus "recipient-local-reconsideration" with a bidirectional lawful-retention exception is brilliant. It ensures that an external federation cannot remotely delete a lesson that a local Care loop has already acted upon, perfectly preserving OMNI's institutional boundary and historical lineage rules.

Gemini adversary complete. No scores issued. No repository writes. Awaiting Knox adjudication.

---

## §G4-D Knox adjudication and score ledger

**Knox G4 adjudication — Verdict: PASS · 30/32 · no kill criterion triggered.** G3 remains accepted and frozen. No G3 architecture amendment is required before G5. One real, non-blocking finding routes forward (`C44-G4-R01`). Two of Gemini's three alleged defects are false positives already prohibited by the exact frozen architecture. G5 does not start automatically; nothing is promoted or merged. The remote branch remains exactly at the frozen G4 commit `133d2864160c08797abe5716924d9bc14a03061d`; Gemini made no repository changes.

### D.1 Adjudication of Gemini's three allegations

**C44-G4-M01 — "Retraction Erasure" → `REJECTED_FALSE_POSITIVE · NO_DEFECT`**

The mutation requires several acts the frozen architecture explicitly forbids: treating byte identity as artifact identity; allowing storage deduplication to erase distinct receipt/provenance history; rewriting an S1 source when a retraction arrives; dropping the historical lineage needed for replay. The accepted architecture instead holds that blob identity, artifact identity, receipt identity, and evidentiary independence are **four separate dimensions**; blob deduplication is only a physical-storage optimization; every materially distinct receipt survives; artifact identity is not determined by hash alone; **S1 is immutable while retained**; correction and withdrawal are **additive**; R.14 preserves both the original accepted state and later reconsideration; R.9/R.14/R.15 preserve lineage and as-of replay so the pre-correction world is reconstructable. A retraction is therefore a **new S1 event** and an **R.14 reconsideration trigger** — it cannot legitimately "update the pointer and erase the blob" under §R.

- **K3: NOT TRIGGERED. K8: NOT TRIGGERED.**
- **Result: NO_DEFECT — MUTATION BLOCKED UNAMBIGUOUSLY. No G3 amendment.**
- Note: a later C5 contract still needs concrete remote-pointer/version-retention mechanics — deferred implementation detail, not the deduplication hole Gemini alleged.

**C44-G4-M02 — "Secret Policy by Indexing" → `PARTIALLY_ADOPTED_NON_KILL` (formal blocker REJECTED; core concern partially adopted)**

Gemini's K6 claim is **not valid as stated**. The architecture explicitly holds: retrieved ≠ truth; indexed ≠ accepted; indexes commit nothing; an index hit is necessary but never sufficient; inclusion in a draw does not authorize an action; authority is re-evaluated at the point of consequence; the Runtime may never treat an index as truth; S6 carries each unit's authority, use ceiling, freshness, lineage, and admissibility; an owning domain remains the only commit authority. A retrieval score therefore cannot legally become policy or action authority under §R — if an implementation lets it, the **implementation** violates the architecture.

However, Gemini found a real **socio-technical gap** beneath the overclaimed blocker: even when ranking has no formal authority, ranking determines attention, omission, salience, and repeated exposure, and can influence a human authorized decision-maker without formally committing anything. §R governs admissibility, source authority, currency, consequence class, use ceilings, contradiction survival, and the final action gate — but does **not yet make the ranking/selection/exclusion decision itself sufficiently provable** (why one candidate outranked another; which materially relevant alternatives were excluded; how authority/freshness/independence/contradiction affected ranking; whether a correlational descriptive unit was given a normative-looking presentation posture). This is **not** a new architecture class, policy engine, or S3 "authorization header." Gemini's proposed universal cure over-rotates.

- Adopted non-blocking finding: **`C44-G4-R01` — Ranking / Selection / Exclusion Influence Governance** (full text + routing in §G4-E).
- **Gemini's proposed universal "S3 authorization header" requirement is NOT adopted.**
- **K6: NOT TRIGGERED. No other kill criterion triggered.**
- **Result: PARTIAL_FINDING — NON_BLOCKING — ROUTE_TO_G5/C5/RUNTIME.** This is the one place Gemini materially improved the work.

**C44-G4-M03 — "Silent Corpus Poisoning" → `REJECTED_FALSE_POSITIVE · NO_DEFECT`**

Gemini cited the wrong architectural path. The frozen architecture holds: a later correction or incremental delivery **lands as a new event through R.1**; R.3 receives landed artifacts from R.1; a correction package is a new package, linked to and superseding named prior scope; corrupt, malformed, or password-protected items remain quarantined and visible; a package cannot represent itself as complete while required atomic components remain unresolved; the prior package remains closed and reconstructable. Nothing in R.13 permits a correction package to bypass R.1 — **R.13 governs reprocessing retained sources; it is not an ingress shortcut.**

- **K5: NOT TRIGGERED.**
- **Result: NO_DEFECT — MUTATION BLOCKED UNAMBIGUOUSLY. No new G3 sentence needed** (C5 + implementation tests must realize the already-required "all correction-package arrivals pass the same landing controls" behavior).

### D.2 Failed-mutation ledger disposition (F01–F12)

Gemini's twelve failed mutations broadly **support architecture survival** and are accepted as survivals: operator-private alpha remained partitioned; federated revocation respected recipient sovereignty; patient-inapplicable literature remained non-adopted; save cases remained gated candidates; low-value noise did not become accepted knowledge; vendor material did not overwrite formulary truth; agent mistakes did not silently become skills or product capability; stale projections remained non-authoritative; patient preference did not override consent or safety; retrieval infrastructure remained swappable; passive architecture mining could not self-promote; F-Inv preserved historical truth.

**Adjudicator note — invented proof phrases NOT adopted:** the survival *outcomes* are accepted, but not every proof phrase Gemini invented. The architecture does **not** require a "cryptographic S1→S3 admission receipt," a "cryptographic operator acceptance signature," a literal RBAC token embedded in every S5 projection, or quarantine of ordinary low-value source material merely because it is noisy. The **correct** proof forms are the governed adoption/commit record, authority evaluation, source lineage, run-context receipt, gate evidence, and owner disposition. These Gemini phrases are corrected here in adjudication, **not** silently incorporated into OMNI.

### D.3 Source-conformance note

- Gemini fully read the primary frozen architecture (§R, blob `e364acb`) and the G4 carrier (`2b89a0f`), and exercised all fifteen fixtures.
- Gemini's own source posture lists **C4.5 as searched/located rather than deeply read**, even while invoking C4.5 as a governing contradiction — this lowers the confidence of its broad claims.
- The submission nonetheless remains **adjudicable and no rerun is required**: the primary frozen architecture and all fifteen fixtures were exercised, and the three surviving allegations were conclusively adjudicable from exact text. Knox independently reconciled each allegation against the exact governing text.

### D.4 Frozen rubric score (16 dimensions — 2 = SURVIVES, 1 = PARTIAL, 0 = FAIL; PASS = 28–32 with no kill criterion)

| # | Dimension | Score | Adjudication |
|---|---|---|---|
| 1 | Constitutional S1–S6 separation | 2 | Separation held across all fixtures |
| 2 | Authority/admission/acceptance/commit separation | 2 | Candidate and retrieval never became commits |
| 3 | Receipt truth versus content truth | 2 | Explicit and survived F0/retraction pressure |
| 4 | Blob/artifact/receipt/evidentiary independence | 2 | M01 directly blocked |
| 5 | Corpus completeness/quarantine/partial failure/immutable closure | 2 | M03 directly blocked |
| 6 | Lineage/provenance/replay/as-of reconstruction | 2 | Additive history and exact lineage preserved |
| 7 | Correction/reconsideration/invalidation/history preservation | 2 | R.14/F-Inv survived |
| 8 | Federated sovereignty/revocation/withdrawal/deletion/local reconsideration | 2 | Amendment-3 was strongest survival |
| 9 | Principal/tenant/consent/purpose/jurisdiction/private-alpha boundaries | 2 | Non-leak fixture survived |
| 10 | Domain ownership and anti-god-object discipline | 2 | P3 and owner gates held |
| 11 | Foundry/Router/CNS/Runtime/control-plane authority ceilings | 2 | No hidden committer found |
| 12 | Knowledge admission/authority/freshness/projections/retrieval | 1 | Formal authority safe; ranking influence insufficiently explicit |
| 13 | Cross-project seam completeness | 2 | Care, Accountability, Time, D7, Federation, CNS, Runtime routed |
| 14 | Pluggability and build/buy/wrap neutrality | 2 | No vendor became authority |
| 15 | Implementation/maturity honesty and no-moat-overclaim | 2 | Paper architecture remains explicitly nonbinding/unbuilt |
| 16 | Operational closure/degraded modes/uncertainty/observability/proof | 1 | Run receipt exists; ranking/selection/exclusion proof needs sharpening |

**Total: 30 / 32 · Band: PASS.** (Checksum: 14×2 + 2×1 = 30.) This is the frozen rubric's **PASS** band, **not** `PASS_WITH_NAMED_RECONCILIATIONS` (that band applies only to 24–27). The adopted ranking-governance finding is a non-blocking downstream obligation under a 30-point PASS.

### D.5 Kill-criterion ledger (K1–K10)

| Criterion | Ruling |
|---|---|
| K1 hidden agent/Foundry/Router/Runtime/control-plane commit | NOT TRIGGERED |
| K2 Source-Estate/corpus god-object or second artifact authority | NOT TRIGGERED |
| K3 hash/blob dedup erases identity/provenance/independence | NOT TRIGGERED — **M01 alleged (K3), disproven** |
| K4 correction/revocation rewrites history or remote sovereign truth | NOT TRIGGERED |
| K5 false package completeness/closure | NOT TRIGGERED — **M03 alleged (K5), disproven** |
| K6 retrieval/projection becomes truth/action authority | NOT TRIGGERED — **M02's formal claim (K6) disproven as a kill criterion** |
| K7 PHI/private-alpha boundary breach | NOT TRIGGERED |
| K8 lineage/replay/as-of failure | NOT TRIGGERED — **M01 alleged (K8), disproven** |
| K9 vendor/model/ontology/rail becomes authority | NOT TRIGGERED |
| K10 fixture claims implementation/production maturity/external proof/moat | NOT TRIGGERED |

**All K1–K10 NOT TRIGGERED.** Alleged-vs-disproven links: **M01 → K3/K8 alleged, disproven; M02 → K6 alleged, disproven as a kill criterion; M03 → K5 alleged, disproven.**

---

## §G4-E Required reconciliations

**No required G3 architecture amendment.** The accepted architecture blob remains the frozen object that passed G4; §R is not patched.

Exactly **one** non-blocking routed finding is recorded:

### C44-G4-R01 — Ranking / Selection / Exclusion Influence Governance

**Disposition:** `ROUTE_FORWARD_NON_BLOCKING`

**Exact finding (verbatim):** Ranking, selection, exclusion, summarization priority, and presentation emphasis are governed S6 assembly decisions, not neutral retrieval plumbing. They may not raise an item's authority, use ceiling, currency, evidentiary independence, or normative status. For high-consequence draws, run proof must preserve the material ranking/selection basis, authority/freshness/independence inputs, and materially relevant excluded or contradictory candidates—or the bounded reason for their omission. Surfaces must expose source authority, freshness, uncertainty, and non-authoritative posture. Consequential action still requires the owning-domain point-of-consequence gate.

**Owners / destinations:**
- Context Router / C5 context-assembly contract
- retrieval-index and chunk/embedding governance contract
- Agent Runtime / FWREG-010
- spine §§5, 7, and 8
- relevant governed decision-support projections/surfaces — **without making surfaces truth owners**

**Trigger:** G5 disposition; C5 contract authoring; full Agent Runtime formulation.

**Explicitly NOT adopted:** Gemini's proposed universal "S3 authorization header" requirement (not every admissible S1/S2 item must point to an S3 authority object). Do not patch G3 §R; preserve the accepted architecture blob as the frozen object that passed G4.

---

## §G4-F G4 verdict and G5 gate

**C4.4 G4 = PASS · 30/32 · no kill criterion (K1–K10 NOT triggered).**

- **G3 remains ACCEPTED** (frozen §R substance `e364acb`); **no amendment** required or made.
- **G4 is adjudicated** (Knox, 2026-08-01); Gemini submitted read-only with no repository write; frozen commit `133d286`.
- **One non-blocking finding routes forward** (`C44-G4-R01`, §G4-E) to G5 / C5 / Runtime / spine §§5,7,8.
- **Nothing promoted. NOT merged to `main`. Outer checkpoint #15 UNCHANGED.**
- **G5 is ELIGIBLE only after Knox verifies this adjudication-close transaction** (commit + push). **G5 has NOT started; no G5 artifact is created in this transaction.**

### Anti-flattening law (binding on G4 and G5)

**G4 and G5 do not supersede or rewrite the accepted G3 reference architecture.** G5 routes by exact source pointer, exact obligation, owner, destination, and trigger. It must **not** replace G3 with a thinner summary document. The estate remains three distinct layers: **G3 §R** = the accepted architecture; **G4 carrier (this file)** = the adversary evidence + adjudication ledger; **G5** = a disposition map telling future work where exact G3/G4 findings go. The one real Gemini contribution (`C44-G4-R01`) becomes a precise routed obligation; the two false positives (M01, M03) remain preserved as failed/rejected mutations, proving *why* the architecture survived them. No second Gemini run is warranted.

---

## §G4-G Frozen Gemini execution packet (EXECUTED — historical record)

> **★ EXECUTED 2026-08-01.** This packet WAS relayed to a fresh repo-connected Gemini, which ran read-only against frozen commit `133d286` (accepted §R substance `e364acb`), made **no repository writes**, and returned the submission now preserved verbatim in §G4-C. Knox adjudicated into §G4-D/E/F (**PASS · 30/32**). The packet is retained below as the historical instruction that was issued; do NOT re-run (no second Gemini run is warranted per §G4-F).

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

- **Source posture:** frozen object = accepted G3 §R (blob `e364acb`, repo-verified); fixtures frozen from charter §9 (read fully); rubric frozen verbatim (§G4-B). Gemini submission preserved verbatim (§G4-C, via Nick). Knox adjudication recorded verbatim in substance (§G4-D/E/F, via Nick). Runtime bridge consulted (blob `de5b9a1`, unchanged).
- **What this transaction (the 2nd, adjudication-close) did:** populated §G4-C (Gemini verbatim), §G4-D (Knox adjudication + 16-dim score = 30/32 + K1–K10 ledger + failed-mutation + source-conformance), §G4-E (`C44-G4-R01` non-blocking route), §G4-F (verdict PASS + G5 gate + anti-flattening law); synced the five current-state surfaces to `G3_ACCEPTED · G4_KNOX_ADJUDICATED_PASS_30_OF_32 · no_kill_criteria · G5_not_started · analysis_nonbinding · not_promoted`.
- **What it did NOT do:** start G5 · create any G5 artifact · do G5 disposition work · amend §R (G3 frozen) · edit the taxonomy/reference-architecture artifact · merge to `main` · force push · promote · edit Runtime / AGENTS / #15 / G1 · run a second Gemini.
- **Next authorized action:** Knox verification of this adjudication-close (commit + push) → explicit G5 opening (a separate later transaction). **G5 is NOT started here.**
- **Stop declaration:** G4 ADJUDICATED — PASS · 30/32 · K1–K10 NOT triggered. G3 remains ACCEPTED and frozen. STOPPED. Awaiting Knox verification and explicit G5 opening.
