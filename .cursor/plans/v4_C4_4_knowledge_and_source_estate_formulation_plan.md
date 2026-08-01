# v4 — C4.4 Knowledge Reservoirs & Source-Estate Architecture Formulation Pass — July 2026 Reality — GATE-0 CHARTER

Document type: `plan_or_roadmap` (arc charter — Gate-0 deliverable; list + purpose, not prose essays)
Authority: `analysis_nonbinding` — propose-only pre-spine architecture pass (`GRD-036`/`GRD-043`). Binds NOTHING. Names herein are PLANNING VOCABULARY, not minted primitives.
Status: `G1_closed · G2_closed · G3_authored_pending_Nick_Knox_review · analysis_nonbinding · not_promoted` — G1 + G2 normalized on the 2026-07-31 C4.4 curated artifact-landing onto `main`; **G3 §R reference architecture AUTHORED 2026-08-01** (Nick + Knox authorized G3) on branch `analysis/c4-4-g3-reference-architecture` off `origin/main a87d305`, **pending Nick + Knox G3 review** — NOT self-accepted, G4 NOT authorized/started, nothing promoted, outer checkpoint #15 UNCHANGED. **Authoring-time banner (historical):** `gate_0_ACCEPTED (Nick 2026-07-19 + Knox) · opus_patches_applied · G1_in_progress · G2_not_started` — Nick issued explicit operator acceptance of the patched charter 2026-07-19 ("yes"); Knox (reviewer) accepted + authorized G1; G1 external pass was gated on Gemini-blind-packet relay (independence order).
Domain(s): architecture_governance, cns_orchestration, ai_substrate, evidence_processing, federation, cross_cutting
Lifecycle role: charter + gate map for the C4.4 pass **chartered to resolve or disposition the deferred `FWREG-007` questions** (CNS framework + Knowledge Reservoirs family) AND first-class the previously-unmodeled **governed Source Estate / Artifact Corpus** surfaced by the federation-onboarding pressure (Nick 2026-07-19 + Knox correction + Knox Gate-0 ruling).
Source-of-truth relationship: consumes `doctrine/cns_and_knowledge_reservoirs_frontier_2026-06-06.md` (the prior dense depth — do NOT re-derive), `FWREG-006`/`FWREG-007`, spine-shape §§7–8; feeds Task D (`v4_C4_2`) + v4 spine §§7–8 + C5. Does NOT supersede the outer checkpoint.
Supersedes: none (activates `FWREG-007`; widens it with the Source-Estate finding)
Superseded by: none
Manifest action: `add_tier2` (catalog row + read-graph consult route added same pass)
Review gate: `user_knox_required`
agent_read_rule: `consult_if_routed`

---

## §0 CURRENT STATE + HARD STOPS (read first)

> **★ LIVE STATE (2026-08-01, Amendment-5 normalization): G1 CLOSED · G2 CLOSED · G3 §R AUTHORED + Knox-amended, PENDING Nick + Knox review · G4 NOT started · `analysis_nonbinding` · NOT promoted · outer checkpoint #15 UNCHANGED.** G3 was Nick + Knox authorized; §R (reference architecture) is authored on branch `analysis/c4-4-g3-reference-architecture` and has had the Knox G3-review amendment pass applied; it is pending Nick + Knox review. The live prohibition is now **G4 does NOT auto-start**. The "G3 NOT STARTED / reserved §R / requires authorization" language in the 2026-07-31 banner below is HISTORICAL.
>
> **★ CURRENT-STATE NORMALIZATION (2026-07-31 curated landing — now partly historical; see the 2026-08-01 banner above).** This charter landed on `main` via the C4.4 curated artifact-landing transaction. **State at landing: G1 CLOSED · G2 CLOSED · G3 NOT STARTED · `analysis_nonbinding` · NOT promoted.** G1 (prior-depth & July-2026 reality map) and G2 (taxonomy constitution + reference architecture) closed within the nonbinding pre-spine arc. The accepted Agent-Runtime capture was accepted **only as the bounded C4.4-G2 consumption bridge** — the wider Agent Runtime formulation + `FWREG-010` remain OPEN. *(G3 was NOT started as of this 07-31 banner; it has since been authorized + authored — see the 08-01 banner above.)* Outer checkpoint #15 UNCHANGED. The Gate-0 authoring-time bullets that follow are preserved as history: where they say "This authored Gate 0 only / No G1 / G2 not started," read them as the state at charter authoring, superseded by these banners.

- **Outer gate not driven by C4.4.** As of 2026-07-22 `EVRUN-2026-000012` is now CLOSED (`6a74485`) and a sibling `C4.5` (Temporal Integrity / `FWREG-015`) Gate-0 has landed; the boot checkpoint is maintained by the checkpoint agent (was `HANDOFF_2026-07-19_taskd_interim_checkpointed_evrun12_active.md`). This pass is an **operator-activated (Nick 2026-07-19) parallel pre-spine input** under the operator-controlled queue — it does **NOT** repoint the outer checkpoint and does NOT jump the gate.
- **This authored Gate 0 only.** No G1. No taxonomy, no reference architecture, no schema, no folders, no contracts, no registry, no vendor pick, no runtime, no `KnowledgeReservoir`/`SourceEstate` service, no empty future files, **no new architecture plane.**
- **Propose-only** (`GRD-036`); nothing here binds thesis/contracts/security/surfaces.
- **G1 was authorized through Nick + Knox acceptance (Nick operator "yes" 2026-07-19).** No gate beyond G1 auto-starts; **G2 requires separate G1 closure + acceptance.**
- **Reactor untouched/frozen.** C3.8 is an INPUT, not reopened.

## §0.5 Completion envelope — definition of DONE + explicit non-goals (Knox-accepted 2026-07-19)

**C4.4 is DONE when it has:** (1) distinguished the constitutional species + authority boundaries (source estate · reservoir · domain memory · workbench · projection · mission context); (2) defined a technology-neutral reference architecture + plug-point model; (3) produced fixed-fixture adversarial results; (4) routed EVERY conclusion into v4 spine / C5 / Agent-Runtime / Build-OS / domain contracts / procurement / bounded-deferral / rejection (zero unrouted).

**C4.4 explicitly does NOT:** exhaustively mine the OMNI corpus · fully solve every memory/context/learning use case · mint runtime agents · select vendors · build Source-Estate or Reservoir infrastructure · author implementation schemas. (Anti-`GRD-043`/anti-premature-librarianship bound — this arc is a formulation, not a mini-thesis or a build.)

## §1 Why this is authorized now (not a detour)

1. **`FWREG-007`'s revisit trigger has FIRED** — it deferred formulation until "the neural-network/agentic outside-learning batch is ingested + analyzed OR context-architecture work begins." Waves 4–6 (`EVRUN-000005/000006/000011`) did the first; the Agent-Runtime capture did the second. (Trigger fired ≠ questions resolved — this pass is chartered to resolve/disposition them.)
2. **The accepted v4 spine-shape §8 explicitly requires this** — "MUST consume the frontier doc and RESOLVE its 6 open Qs — do NOT re-derive; the depth exists." §7 (runtime/context/knowledge routing) and the §2 covered-thin guard (provider/staff/inventory/business learning → §8, first-class, NOT under Patient-CNS) also route here.
3. **"Foundry" already exists in-estate** as *Intelligence Foundry* (spine §8 title) — the reservoir(passive body) vs Foundry/compiler/maintainer(active machinery) split is a RECONCILIATION of two existing OMNI concepts, not an invention.

## §2 The corrected frame — the category error this pass exists to prevent

**Failure mode identified 2026-07-19 (Nick), ruled by Knox, owned by Opus:** an early framing answered only "where do extracted facts commit" (D7/Identity/Observation/Clinical-Memory/Federation) and treated a federation's inbound estate (a 3,000-patient spreadsheet, 10 PDFs, 50,000 files) as *exhaust on the way to domain records*. **That is wrong.** Routing extracted facts does not exhaust the source artifact. The inbound corpus is a **first-class governed estate in its own right** with its own lifecycle (preserve · challenge · re-read · re-extract · search · relate · partition · share · revoke · prove), whether or not it is ultimately called a "reservoir."

**Two independent realities must remain independently representable — for the duration of their lawful custody, retention, audit, and use obligations:**
- **What OMNI received** (the source estate) — cannot evaporate when
- **what OMNI concluded/extracted/adopted/rejected/routed** from it is produced.

Authorized **deletion, pseudonymization, legal hold, archival, or destruction must be explicit, additive, and lineage-preserving** — OMNI does not promise to retain all bytes forever, but the two realities must not silently collapse into one.

**Receipt truth ≠ content truth (candidate law):** a manifest may authoritatively prove *what OMNI received, from whom, and when* — it does NOT make every claim inside the package accurate or adopted.

This is OMNI's own layered-accountability physics (`D7 artifact → Observation → Clinical-Memory assertion → adoption → action`; each references, never duplicates) extended **upstream** to the corpus, plus **corpus-level parents** OMNI does not yet model. It is also the Evidence Plane's own object discipline (`GRD-040`: immutable global-ID source · index · re-runnable analysis runs; one source ↔ many runs; reprocessing expected) generalized from the R&D workbench to the **operational/federation ingress path (source-admission layer — NOT a new plane).** The manual wave-ingestion grind is the *first pilot* of this, not the final design.

**Fan-out, not three disjoint pipes.** The same PDF may simultaneously remain a canonical source artifact, support 3 Observations, back a provisional Clinical-Memory assertion, prove a historical bill, stay searchable, expose a contradiction, later yield an operator-learning candidate, join a legal export, and be re-extracted in 2 years by a better model.

**Cardinality (candidate — pressure, don't adopt):**
```
one ingress_package     → N source_artifacts
one source_artifact     → M extraction outputs
one extraction output   → 0..N candidate domain records
one candidate record    → 0..1 authorized domain adoption
one source_artifact     → many indexes / projections / lesson candidates
every derived object     → lineage back to exact source bytes + processing version
```
**Duplication law (qualified — Knox patch 8):** *No silent semantic duplication and no accidental second authority.* Every replica, derivative, export, cache, materialized view, or jurisdictional placement stays **typed, purpose-scoped, lineage-linked, and subordinate to the canonical artifact identity** — non-authoritative unless its owning domain separately commits it. The workbook must not become 3,000 uncontrolled "originals"; technical copies (DR, legal export, cached processing, replication) are NOT inherently architectural corruption. Successful extraction ≠ complete migration; adoption never deletes the source relation.

## §3 Scope

**IN scope (the pass must model / adjudicate all of these):**
- **Source Estate / Artifact Corpus** (co-first-class with Reservoirs): `ingress_package`/`source_collection`, package manifest + declared vs received completeness, `source_artifact` (immutable while retained), source-system identity + as-of snapshot, custody/access/PHI-sensitivity/legal-basis/retention, original hierarchy + relationships, quarantine + partial failure, `ingestion_run`/`extraction_run` versions, unadopted-material honest representation, reprocessing, incremental/corrective re-imports, package closure with visible exceptions.
- **Knowledge Reservoirs** family (the deferred `FWREG-007`) — families, authority classes, passport, principal/tenant partitions, admission/promotion, maintenance missions.
- **Foundry / compiler / maintainer** (active machinery) vs reservoir (passive body).
- **Context Router** (purpose- + authority-scoped draw) and its relationship to CNS / Agent Runtime.
- **Domain-adoption boundaries** (what leaves the estate and becomes owning-domain truth, and how).
- **Evidence Workbench** reconciliation (the current `ingestion/` lanes — see §7.1).
- **Enterprise data-plane comparison** (the widened competitive gate — §5/§8 G1).
- **Continuous/passive ingress operating model** (replacing the human-heavy wave grind) — the "passive agents mine sources → propose gems → gate" posture.
- **Save-case → learning-candidate** internal-experience path (Knox's fixture).
- **★ The OMNI Build/Architecture/Evidence corpus (THIS estate) as the reference fixture + recommended FIRST dogfood** (see §9 F-Self + §16): 4 months of chat threads, agent transcripts, ~hundreds of MD files, ~300 ingested videos, decision/guardrail ledgers, semantic-loss failures — OMNI already hand-runs a primitive gem-extraction+promotion pipeline over it (catalog · decision ledger · guardrail digest · read-graph · handoffs · agent-transcripts). Best proof case because its failure modes (leak-at-pivots, re-derivation, graveyards) are exactly ours. **Recommendation only — no build committed at G0.**

**OUT of scope (hard stops — §0):** minting names/schemas/folders/contracts/registries/runtime/vendor picks; the medical-literature build (`FWREG-006` stays reserved; this pass places the boundary, doesn't build it); reopening C3.8; authoring spine/thesis prose; minting a new plane; reusing the reserved domain word "Intake" for ingress/migration/estate operations (use ingress · source admission · estate acquisition · migration · synchronization · capture).

## §3.1 C4.4 ↔ Agent-Runtime seam (binding — Knox-accepted 2026-07-19)

**C4.4 owns the knowledge-maintenance MISSION classes** — permitted inputs/operations, output artifacts, the proposal-vs-commit authority ceiling, and proof/lineage/rollback/review + promotion/invalidation boundaries — named as *missions*: `contradiction-scanning · source-verification · candidate-reconciliation · routing · maintenance`. **Agent-Runtime / `FWREG-010` owns** the named actor/role taxonomy, `agent_definition`/`agent_runtime_profile`, harness behavior, memory/context execution policy, delegation, credentials/tools, and runtime lifecycle/authority enforcement. **C4.4 must NOT mint a `ScoutAgent`/`CapperAgent`/knowledge-agent hierarchy** — it describes the missions; Agent-Runtime (consuming G2) instantiates the actors that perform them. This keeps the seam the §4 sequencing exists to protect.

## §4 Sequencing (staged — Knox Gate-0 decision)

```
C4.4 G1 (prior-depth + external mechanism recovery)
  → C4.4 G2 (taxonomy + constitutional boundaries)
     → Agent-Runtime depth (FWREG-010) CONSUMES the accepted G2 boundary
        → C4.4 G3 (reference architecture INTEGRATES Agent Runtime as consumer)
           → C4.4 G4 (adversary) → C4.4 G5 (disposition + handoff)
              → Task-D final admission/closure
```
Task D may continue on **unrelated** enterprise-pressure lanes, but it **must not close** its knowledge / memory / source-estate / context-routing / Foundry / artifact-plane conclusions before consuming **C4.4 G5**. This prevents (a) Agent Runtime inventing its own memory/context architecture before C4.4 separates the species, and (b) C4.4 designing a Context Router + maintainer model without the actual Agent-Runtime consumer.

## §5 Source posture (this Gate-0 pass) + fixed source sets

**Read fully this pass:** `cns_and_knowledge_reservoirs_frontier_2026-06-06.md`; `FWREG-006`/`007` rows; spine-shape §§1/2/7/8; `D7_documents_consent_media_contract.md` §1.5–§12; guardrail digest; comparator registry; System Map vNext; operator/collaboration model; current checkpoint handoff; catalog + read-graph anchors for the wiring.
**Consulted (subagent-recovered this session):** evidence router + outside-learning pipeline doctrine; the C4 loop/harness/Polaris captures; waves/EVRUN history; scenario libraries; TRT/Dan/Reactor; BIZOPS contract + surfaces.
**Verified by grep:** NO first-class corpus-level object (`ingress_package`/`source_collection`/`migration_manifest`/`source_artifact` parent) exists in any build-facing contract — real gap, not merely "not found."
**NOT inspected this pass (→ G1 recovery):** the 9 reservoir/memory source packets (`EVSRC-2026-000227` LangSmith · `000238`/`000239` Karpathy/OKF · `000243` Engram · `000262` LLM-wikis · `000266` production agent memory · `000287` OpenWiki · `000313` Karpathy-wiki-vs-OpenBrain · `000314` CQ/lesson-commons); legacy 3-layer System Map; off-repo controlling plan.

**Fixed internal source set (G1 recovery):** the frontier doc + the 9 packets above (navigate via the `EVRUN-000003/000005/000006/000011` concept registries; reopen load-bearing packets; NEVER author from anchor ledgers) + D7/Observation/Clinical-Memory/CNS/Identity/RBAC/Federation/Settings/D6/BIZOPS/OFC boundaries + Agent-Runtime/Platform/Care/Accountability captures + field/case work + **the OMNI estate itself** (as the F-Self fixture material).

**Fixed external source set (G1 reality — MECHANISM-COMPLETE bounded set; controlling unit = mechanism coverage, NOT vendor/doc count; expected ~24–36 primary current documents; expandable ONLY via a recorded coverage-gap exception). Three stacks:**
- **A. Data / artifact plane:** Palantir Foundry (datasets/media-sets) · Microsoft Fabric/OneLake/Purview/Azure AI Search · Databricks/Unity Catalog volumes · AWS S3/Glue/Lake Formation/Bedrock KB · Google BigQuery/Dataplex/Vertex AI Search · IBM watsonx.data (+ intelligence) · Snowflake · Elastic.
- **B. Knowledge / context plane:** LangChain/LangGraph · LlamaIndex · Letta · Chroma · Glean · OpenAI (File Search + data-agent) · Anthropic (CLAUDE.md hierarchy + Skills + MCP) · Google · xAI · Pinecone/Weaviate · OKF/OpenWiki/CQ.
- **C. Semantic / action plane:** Palantir Ontology/AIP · ServiceNow · Salesforce · Microsoft · IBM.
- **C-health (FROZEN healthcare comparator set — confirm before G1; no open-ended "relevant incumbents"):** Epic (Cosmos / Care Everywhere) · Oracle Health (Cerner) · Abridge · Microsoft/Nuance DAX · Innovaccer · Commure · Datavant · Health Gorilla · Particle Health · Health Catalyst.

## §6 Candidate planning vocabulary + the six layers (NOT minted)

Layers the architecture must separate: **(1) ingress/collection** · **(2) artifact custody** · **(3) interpretation/normalization** · **(4) domain adoption** · **(5) reusable knowledge/experience** · **(6) indexes/projections/mission-context**. Cross-cutting mechanisms: storage · catalog · lineage · access · indexing · versioning · quality · reprocessing · retention · revocation · search · compilation · promotion.

Candidate handles (planning only): `ingress_package`, `source_collection`, `source_artifact`, `ingestion_run`, `extraction_run`, `knowledge_reservoir`, `reservoir_passport`, `context_router`, `compiled_projection`, `retrieval_index`, `mission_context`, `maintainer/compiler`, `promotion_gate`.

## §7 Three taxonomy options to ADJUDICATE at G2 (do NOT settle in G0)

- **A.** Raw corpus = a `Source Reservoir` subtype (one reservoir class among many). **[currently least favored]** — calling immutable received evidence a reservoir risks collapsing source custody and curated reusable knowledge.
- **B.** Raw corpus = an adjacent **Source Estate** that *feeds* Knowledge Reservoirs (`Source Estate → interpretation/extraction → Reservoirs and/or domain-adoption candidates → projections + mission context`). **[strongest working hypothesis — preliminary bias, Opus + Knox]**
- **C.** A wider parent (**"Governed Context Estate"**) containing source corpora + reservoirs + compiled projections + mission context, domain memory separately owned. **[may survive ONLY as a navigational umbrella — NOT automatically an ontological parent / new owning layer unless the work proves non-duplicative constitutional value; else it becomes an "everything-context" god-category].**

**G2 must adjudicate using more than "source is fixed; reservoir is curated."** Test each candidate against: authority relationship · custody · mutation law · retention/deletion · source correction · ownership · admissibility · aging/freshness · reprocessing · and whether the object is **evidence vs accepted knowledge vs domain state vs a view**. Immutability is retention-qualified: *a captured source version is immutable while retained; corrections and later exports are additive; its bytes/custody/visibility/retention remain policy-governed.*

**D7 honesty finding (grounded this pass):** D7 owns the per-artifact durable physics well (custody, integrity gate, one-canonical-many-grants, fingerprint dedup, upload_event, open `document_kind`, 5-disposition, federation-ready per-artifact lineage). **Gaps the pass must resolve:** (a) `patient_document` is patient-subject-shaped — a 3,000-patient workbook / multi-subject / non-patient artifacts (bills, device manuals, formularies, training files) strain it → test a general `source_artifact`/`artifact` parent with subject-via-relationship; (b) NO corpus-level object (package/collection/manifest → completeness/exceptions/quarantine/incremental+corrective import/closure); (c) NO corpus-scale reprocessing/`extraction_run` lineage; (d) NO honest "received-but-never-adopted" model. Do NOT declare D7 sufficient because it can store a PDF.

## §7.1 The FIVE orthogonal taxonomies the "8 ingestion types" question forces (G2/G3)

The current 10 `ingestion/` lanes are **Evidence-Plane provenance lanes for the R&D external-evidence workbench** (lane = who produced it + why, `GRD-037`). They are NOT OMNI's universal ingestion constitution — they do not classify federation/domain migration, patient-document import, continuous EHR feeds, device telemetry, operational logs, provider-private knowledge, agent-trace lessons, clinical-literature corpora, model/skill/prompt supply-chain artifacts, or federated knowledge exchange. The pass must separate FIVE orthogonal axes (Knox patch 4 — form ≠ delivery mode):
1. **Provenance / source family** (patient/provider/operator/partner/vendor/regulator/educator/system-export/device/agent/runtime/public).
2. **Admission purpose** (tenant migration · ongoing sync · care evidence · operational execution · legal retention · reference learning · clinical knowledge · experience learning · federated exchange · model/build supply chain).
3. **Destination / authority state** (source-only · provisional normalized · adoption candidate · domain truth · reservoir candidate · compiled projection · lesson candidate · policy/skill candidate · rejected/quarantined).
4. **Information form** (package · file · document · table · row · image · audio · video · model artifact · external reference).
5. **Delivery / temporal lifecycle** (one-time snapshot · incremental package · correction package · continuous feed · event stream · remote/federated pointer · generated derivative).

One thing can be many axes at once (a spreadsheet + a snapshot; a PDF + part of an incremental correction package; an external pointer + a continuously synchronized source). File type never determines architecture.

## §8 Gates (provisional — confirm labels vs namespace at G0 acceptance)

| Gate | Purpose | Output | Acceptance / stop condition |
|---|---|---|---|
| **G0** (this) | Charter, fixed source sets, roles, hard stops, corrected frame | this doc | Nick + Knox accept (patched) before any research |
| **G1** | Internal prior-depth recovery + July-2026 reality map across all THREE (+health) stacks | reality map + **multi-axis mechanism-coverage matrix** | HARD GATE: every material mechanism carries THREE axes — **semantic relation** (`already_owned·sharpens·genuine_gap·conflicts·reject`) × **current realization** (`built·partial·stub·absent·unverified`) × **implementation posture** (`OMNI_native·named_plug_point·buy_or_wrap·interchangeable_rail·implementation_only·not_applicable`) — plus primary source · capability owner · authority gap · affected OMNI home · exceeds-OMNI-build? · exceeds-OMNI-architecture? · replacement/switching boundary. "Already modeled" NEVER means "already built." Per-mechanism, not per-vendor. No undispositioned mechanism; no vendor checkbox; no generic summary. |
| **G2** | Taxonomy + constitution + Evidence-lane reconciliation | candidate model | adjudicate A/B/C (§7 criteria); the six layers; the five taxonomies (§7.1); D7-parent question. **Each `FWREG-007` open Q closed as `resolved` \| `bounded-deferred` (owner + precise unresolved issue + destination + trigger + what may safely proceed) \| `rejected` — "explicitly open" alone is NOT a disposition.** |
| **G3** | Reference architecture + pluggability | tech-neutral architecture | landing/quarantine · storage · package/manifest · catalog · classification · entity-resolution · extraction/normalization · domain-admission interfaces · lineage · indexing · retrieval · reprocessing · correction · retention · revocation · federation · **build/buy/wrap per mechanism**; no god-store; **scope-fence honored** (own the governance semantics; plug in lakehouse/vector/graph rails — `GRD-041`/`GRD-033`/`GRD-034`/`GRD-028`) |
| **G4** | Frozen fixtures + independent adversary | scored fixture suite | Gemini adversary (fixtures + rubric frozen first) + Knox adjudication across care/build/business/federation/privacy/staleness/execution |
| **G5** | Disposition + v4/Task-D/C5 handoff | final ledger | zero unrouted concepts; every finding → spine-line \| C5 \| contract-implication \| Build-OS \| product \| open-review \| parked \| rejected \| procurement-only |

## §9 Fixture suite (freeze before G4 grading)

Knox's 12 (clinical-literature retraction/conflict · patient-inapplicable similar study · high-value save-case near-miss · low-value save-case noise · formulary/vendor/pricing/sourcing disagreement · operator-private alpha non-leak · build-agent repeated mistake → lesson/eval/skill · federated lesson publish→admit→revoke · stale fluent wiki · patient-preference-vs-consent/inventory/safety · outcomes-pattern-without-evidence → policy · retrieval/index/vendor swap without lineage loss) **PLUS**:

**F0 — Federation Source-Estate Admission Fixture (G2 taxonomy breaker + G4 adversary):** a federation supplies 3,000-patient spreadsheet + 50,000 mixed PDFs/images + 20yrs bills/claims + 1992–2026 aftercare + device manuals/training files + provider CO₂-treatment preferences + old & current formularies + vendor price sheets + an exported EHR folder tree + duplicates + patient collisions + unknown patients + corrupt/password-protected files + non-patient docs in patient folders + a later incremental export + a correction package invalidating part of the first. The architecture must prove: original package reconstructable · stable artifact identity + custody · original organization/relationships preserved · PHI tenant+purpose-scoped · corrupt/suspicious quarantined not dropped · extraction versioned + repeatable · candidate-association ≠ confirmed-identity · no silent-semantic duplication (typed/lineage-linked copies OK) · owners adopt only what they own · unadopted material honestly represented · searchable source ≠ adopted truth · historical instructions ≠ active policy · provider preference ≠ clinical doctrine · vendor doc ≠ current formulary · receipt truth ≠ content truth · package completeness + partial-failure visible · reimport/correction/supersession preserve history · retention/deletion/export/legal-hold differ by artifact · whole estate reprocessable by a newer model · retrieval obeys relationship/purpose/consent/operator boundaries · indexes rebuildable without losing the corpus.

**F-Self — OMNI's own Build/Architecture/Evidence Source Estate (continuous proof thread G1–G5, NOT a G4-only fixture):** the actual estate — 4 months of chat threads + agent transcripts + ~hundreds of MD files + ~300 ingested videos + decision/guardrail ledgers + the wave-5 semantic-loss failure. **Per-gate use:** **G1** = representative *stratified species census* (species · custody · authority class · discovery capability · lineage gaps · manual burden · ≥1 known semantic-loss/leak-at-pivot specimen) — NOT exhaustive gem mining; **G2** = classify representative specimens (chats · uploads/screenshots/transcripts · source packets · interpretations · working analyses · proposals/rejections · canonical doctrine/contracts · handoffs/projections · commits/receipts · superseded artifacts) against the candidate taxonomy; **G3** = trace ONE end-to-end flow (raw conversation → candidate extraction → dedup/reconcile → routed promotion gate → accepted/rejected → regenerated non-authoritative projection); **G4** = adversarially test semantic loss / false promotion / stale confident synthesis / contradiction erasure / privacy+alpha leakage / source disappearance / graveyards / correlated-agent false confidence; **G5** = disposition whether the Self-Estate is the recommended FIRST implementation target + its downstream build-entry triggers (no build authorized in C4.4). Law throughout: passive mining PROPOSES (source-linked), never promotes.

**F-Inv — Promoted-knowledge invalidation (G4; DISTINCT from stale-wiki + federated-revoke):** a source-backed gem has ALREADY been promoted into doctrine/spine; later its originating source is found superseded, contextually misread, or dependent on an invalid assumption. The architecture must: identify every promoted dependent artifact · preserve historical lineage (what was decided AND what actions were taken under the former accepted state) · FLAG, not silently rewrite, the canonical content · route reconsideration to the owning authority/gate · identify downstream uses + projections · regenerate affected projections ONLY after disposition. Tests invalidation reaching an already-promoted constitutional home — the case our own estate will actually hit.

## §10 Quadrifecta roles + independence controls (Knox patch 9)

- **Opus:** repo-native recovery + dedup + architecture author + current-state/implementation verifier + governance execution.
- **Nick:** operator/provider/business reality (medspa/formulary/vendor/federation-onboarding), adoption/burden judgment, acceptance gates.
- **Knox:** independent architecture challenger, source-authority reconciler, rubric author, adjudicator, anti-god-object/anti-flatten pressure.
- **Gemini (optional 4th leg — TWICE only, independence-controlled):**
  - **Separate FRESH contexts for G1 and G4** (no carryover).
  - **G1:** receives the FROZEN external questions + source classes, **NOT** OMNI's candidate design → reports what current systems actually do + where they fail.
  - **G4:** Opus freezes the candidate architecture + fixture answers FIRST; Knox freezes the rubric BEFORE seeing the adversary submission; Gemini attacks with the strongest alternatives (Foundry ontology/action · Glean enterprise search · Google/OpenAI memory · file-wikis · federated commons).
  - **Gemini does not self-grade.** Any external factual correction is made in adjudication, never by rewriting the adversary submission.
  - No four-agent ceremony on small gates.

## §11 Minimum future artifact set (NAME only; create only on gate entry — do NOT create empty files)

1. `v4_C4_4_knowledge_and_source_estate_formulation_plan.md` — **this charter (created).**
2. `v4_C4_4_prior_depth_and_july_2026_reality_map.md` — G1.
3. `v4_C4_4_taxonomy_constitution_and_reference_architecture.md` — G2/G3 (core deliverable).
4. `v4_C4_4_fixture_suite_and_adversarial_results.md` — G4.
5. `v4_C4_4_disposition_ledger_and_v4_handoff.md` — G5.

No sixth "miscellaneous" doc. No registry, no per-reservoir docs, no schema, no folder tree.

## §12 Candidate laws to PRESSURE (affirm / revise / reject — never auto-adopt)

Reservoirs supply · maintainers tend · routers assemble · CNS coordinates · owning domains decide+commit. Storage ≠ authority. Retrieval ≠ admissibility. Repetition ≠ independent evidence. **Receipt truth ≠ content truth.** Source ≠ normalized ≠ adopted ≠ decision ≠ projection ≠ mission-context (never collapse). A captured source version is immutable while retained; deletion/pseudonymization/legal-hold/archival is explicit, additive, lineage-preserving. No silent semantic duplication / no accidental second authority (every replica typed·purpose-scoped·lineage-linked·subordinate). Source evidence stays recoverable beneath every synthesis. Contradictions survive until an authorized process resolves/scopes them. A fluent synthesis must disclose omissions/uncertainty/source-cutoff/compiler-version/stale-deps. Higher consequence → closer to current authoritative source. Every durable write has principal/purpose/owner/scope/authority-state. Conversation → memory candidates, not automatic memory. Case → lesson candidate, not policy. Lesson ≠ policy ≠ clinical truth. Advice becomes supply-chain material once an agent can execute it. Revocation propagates ≥ as aggressively as publication. Human contestability + agent legibility are co-requirements. Federated publication ≠ universal trust (locally admitted). Provider/operator private alpha never becomes platform-common by silent extraction. Passive capture allowed · passive promotion forbidden. Waves = audit/capping windows, not the unit of learning. RAG/vector/graph/wiki/long-context/SQL/FTS/agentic = replaceable realization, not the constitution. **The system must get cheaper, more faithful, and less human-intensive per source over time** (scored acceptance criterion).

## §13 Hard stops (restate)

No spine/thesis prose · no C5/schema/contract edits · no runtime build · no permanent folder tree/registry · no vendor selection · no service · no medical-PDF ingestion build · no empty future files · no new broad video wave · no new architecture plane · no reuse of the domain word "Intake" for ingress/migration/estate ops · no authoring from memory or anchor ledgers · no treating chronology/polish/vendor-vocab as authority · no silent checkpoint repoint · no auto-start of G2 (G1 authorized 2026-07-19; G2 needs separate G1 closure + acceptance) · no producing/sharing Opus external-mechanism findings until the Gemini blind packet is confirmed relayed.

## §14 Governance receipt (this pass — durable; the chat summary is NOT a substitute)

- **Charter path (created):** `.cursor/plans/v4_C4_4_knowledge_and_source_estate_formulation_plan.md` (passport above; Knox-patched 2026-07-19).
- **Catalog row added:** `01_master_corpus_catalog.md` (`analysis_nonbinding`, `add_tier2`, `consult_if_routed`, `user_knox_required`).
- **Read-graph route added:** `04_manifest_read_graph.md` route **`9j`** (`consult_if_routed`).
- **`FWREG-007` change:** status `watch → candidate`; annotated ACTIVATED as the C4.4 arc (trigger fired) + WIDENED to first-class the Source Estate. `FWREG-006` unchanged (`watch`; boundary placed here, not built).
- **Outer checkpoint:** UNCHANGED — `EVRUN-2026-000012` remains active; read-graph #15 + AGENTS NOT repointed.
- **Repository state (updated 2026-07-22):** working tree IS on `evidence/evrun-000012-care-commerce-hardening`. The C4.4 doc files + catalog rows remain **LOCAL/UNCOMMITTED** and must NOT be committed onto that branch (Knox); the read-graph `9j` + `FWREG-007` edits were already **swept into that branch by concurrent checkpoint/C4.5 commits** (a fait accompli, not a C4.4-initiated commit). No C4.4-initiated commit/push/branch-change. Knox reviews the submitted content, not verified committed bytes.
- **Source-coverage receipt:** §5 (read-fully / consulted / grep-verified / not-inspected). No file claimed read merely because search returned it. No corpus-level object exists (grep-verified absence).
- **Artifacts created this pass:** exactly ONE (this charter). Docs #2–#5 named, NOT created. No schema/folder/registry/runtime.
- **G1 status:** NOT started. No gate auto-starts.
- **Next authorized action:** await Nick + Knox final acceptance of the patched charter → then G1 (with Gemini's independent blind mechanism map).
- **Stop declaration:** Gate 0 complete + patched per Knox ruling. STOPPED.

## §15 Risks

- **Under-scope:** repeating the original category error — designing the intelligence drawn FROM reservoirs without the governed estate information first LANDS in. (This charter's whole §2 correction.)
- **Over-scope / scope-fence (critical):** over-rotating into "OMNI is a data platform / must match Databricks/Snowflake." OMNI owns the **governance semantics** (taxonomy, authority, partition, lineage, admission/promotion, purpose-of-use, contradiction, freshness, revocation, context-admissibility, evaluation); lakehouse storage/compute + vector/graph engines are **plug-in rails** (`GRD-033`/`GRD-034`; the `GRD-041` "Evidence Plane ≠ universal data store" fence, generalized). Beating LangChain/Palantir = out-governing them, NOT out-building their infra (`GRD-028`).
- **Temporal seam:** as-of/effective/recorded/known time + incremental feeds + corrections + supersession intersect `FWREG-015` (Time in OMNI) — CONSUME/point to it, do not re-derive.
- **Naming ossification:** keep all names planning-vocabulary until G5 (frontier doc's own instruction). Do not mint a plane.

## §16 Gate-0 completion

Charter authored + patched per Knox Gate-0 ruling (11 patches + staged sequencing + A/B/C bias); governance wiring done (§14); Protocol §9 stop report delivered in the relay. **STOP for Nick + Knox final acceptance. Do not begin G1.**
