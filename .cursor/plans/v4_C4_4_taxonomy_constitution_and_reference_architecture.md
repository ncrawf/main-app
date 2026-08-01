# v4 — C4.4 Knowledge Reservoirs & Source-Estate — TAXONOMY + CONSTITUTION (G2) · REFERENCE ARCHITECTURE (G3 — AUTHORED, pending Nick+Knox review)

Document type: `architecture_reconciliation` (G2 constitutional deliverable + G3 reference-architecture deliverable of the C4.4 arc — the constitutional taxonomy + class/role boundaries [G2, CLOSED], and the technology-neutral reference architecture + plug-point model over those classes [§R, authored at G3, pending Nick+Knox review])
Authority: `analysis_nonbinding` — propose-only pre-spine architecture pass (`GRD-036`/`GRD-043`). Binds NOTHING. Every name herein is PLANNING VOCABULARY, not a minted primitive (`GRD-035` noun discipline; charter §12/§15 naming-ossification guard).
Status: `g2_CLOSED_2026-07-22 · nick_operator_accepted · knox_verified · G1_CLOSED · G3_reference_architecture_authored_knox_amended_pending_review · analysis_nonbinding · not_promoted` — **★ G3 §R had the Knox G3-review bounded amendment pass applied 2026-08-01 (Amendments 1–5; see §20.4); Knox verdict was PASS-WITH-REQUIRED-AMENDMENTS; pending Knox patch-verification + Nick + Knox acceptance; G4 still closed.** G2 body authored in a FRESH Opus agent booted from `v4_C4_4_G2_kickoff_handoff.md` (Knox G2 gate patches + final consistency + micro-close applied, §19 ledger); §R **populated at G3** by a fresh Opus agent booted from `HANDOFF_2026-07-31_c4-4-g2-landed_pre-g3.md` on branch `analysis/c4-4-g3-reference-architecture` off `origin/main a87d305` (Nick + Knox authorized G3), consuming the closed G1 map + the accepted Agent-Runtime consumption bridge + frontier depth; does NOT re-derive and does NOT reopen G2. **G3 does NOT self-accept — this §R is AUTHORED PENDING Nick + Knox review; G4 is NOT authorized and NOT started; nothing promoted; outer checkpoint #15 UNCHANGED.**
Domain(s): architecture_governance, cns_orchestration, ai_substrate, evidence_processing, federation, knowledge_reservoirs
Lifecycle role: G2 core deliverable — (a) separates the six constitutional classes/roles (source estate · knowledge reservoir · domain-owned state · evidence workbench · compiled projection · mission context); (b) adjudicates the A/B/C parent; (c) resolves the frontier's 6 open Qs + the `FWREG-007` open questions to `resolved` / `bounded-deferred` / `rejected`; (d) classifies the F0/F-Self/F-Inv fixtures against the taxonomy. Feeds Agent-Runtime (`FWREG-010`, which CONSUMES the accepted boundaries) → C4.4 G3 reference architecture → Task-D + v4 spine §§7–8 + C5.
Source-of-truth relationship: consumes charter `v4_C4_4_knowledge_and_source_estate_formulation_plan.md` (Gate-0), G1 map `v4_C4_4_prior_depth_and_july_2026_reality_map.md` (closed), `doctrine/cns_and_knowledge_reservoirs_frontier_2026-06-06.md` (the prior dense depth — RESOLVED here, not re-derived), `FWREG-006`/`007`/`010`/`015`, `contracts/D7_documents_consent_media_contract.md`, `OMNI_System_Map_vNext.md`, spine-shape §§7–8. Does NOT supersede the outer checkpoint.
Supersedes: none
Superseded by: none
Manifest action: `add_tier2` (catalog row + read-graph `9j` read-order update in the same pass)
Review gate: `user_knox_required`
agent_read_rule: `consult_if_routed`

---

## §0 Current state + hard stops (read first)

> **★ POST-MERGE CURRENT-STATE NORMALIZATION (2026-08-01).** This G2 artifact was **landed and fast-forward-merged onto `main` @ `fa98a343565e35c4c6aba2aff7f8504e56e028af`** via the C4.4 curated artifact-landing (Knox PASS + Nick authorization). **The authoring-time branch/base/checkpoint/no-merge statements in this §0 — "off clean `origin/main 5275707`", "read-graph #15 on this branch → the `2026-07-12` checkpoint", and "NO merge/PR of this branch / NEVER commit onto the closed `EVRUN-000012` branch" — are HISTORICAL and SUPERSEDED by that landing. Do NOT obey them as live instructions.** Live truth: this artifact is on current `main` (post-`c40630b`); the live boot checkpoint is read-graph #15 (UNCHANGED by this pass — the curated landing did not repoint it); the branch merge already happened cleanly. G2 remains CLOSED · `analysis_nonbinding` · not promoted. **★ SUPERSEDED 2026-08-01 (Amendment-5): the "§R stays RESERVED for G3 / G3 is NOT started" clause is HISTORICAL — G3 has since been authorized (Nick + Knox) and §R is AUTHORED + Knox-amended, PENDING Nick + Knox review, on branch `analysis/c4-4-g3-reference-architecture` (see lines 5/24 + §20). Live prohibition is now: G4 does NOT auto-start.**

- **This is G2 only.** G2 = taxonomy + constitutional boundaries + Evidence-lane reconciliation + fixture classification. It is `analysis_nonbinding`; it binds no thesis/contract/schema/security/surface.
- **Hard stops honored (charter §13 + handoff §6):** NO schema · NO runtime/service · NO folder tree · NO vendor selection · NO medical-literature build · NO spine/thesis prose · NO minting of runtime agents (`ScoutAgent`/`CapperAgent` — that is Agent-Runtime/`FWREG-010` per the §3.1 seam) · NO new architecture plane · NO reuse of the reserved domain word "Intake" for ingress/migration/estate ops · NO authoring from memory or anchor ledgers · NO G3 auto-start · NO merge/PR of this branch · NO checkpoint repoint · NEVER commit onto the closed `EVRUN-000012` branch. *(★ HISTORICAL/SUPERSEDED 2026-08-01: the branch-specific stops in this bullet — "NO merge/PR of this branch" and "NEVER commit onto the `EVRUN-000012` branch" — were authoring-time-only; they are superseded by the C4.4 curated landing + fast-forward merge to `main` @ `fa98a34`. **Amendment-5 update:** "NO G3 auto-start" is now moot (G3 was Nick+Knox-authorized and authored); the LIVE prohibitions are **NO G4 auto-start** + **NO checkpoint repoint**. See the §0 post-merge banner above + lines 5/24.)*
- **Names are planning vocabulary.** The frontier doc's own instruction (`do not canonize the family name or member names`) is honored: working labels only until G5/spine ratification.
- **Reference architecture (G3) — ★ AUTHORED (2026-08-01), pending Nick + Knox review.** §R below is now POPULATED (R.0 orientation + R.1–R.17 + the load-bearing D7/corpus-parent verdict §R.CORPUS + the F0/F-Self/F-Inv design traces §R.FIX + the G3 completion ledger §20). This is a shared G2/G3 deliverable (charter §11 doc #3): the G2 body (§§1–19) is CLOSED and preserved verbatim; §R is the G3 layer authored ON TOP of it WITHOUT reopening G2. **§R is technology-neutral: no schema/field/table, no vendor selection, no invented service names, no god-store, no new plane, no Reservoir roster, no CNS framework, no Build-OS design.** It does NOT auto-advance to G4; the frozen adversary + rubric remain G4.
- **Boot Freshness note (★ HISTORICAL / SUPERSEDED 2026-08-01 by the curated landing — see the §0 post-merge banner; do NOT obey as a live branch instruction):** *[authoring-time, on the C4.4 analysis branch]* this branch is off clean `origin/main 5275707`, intentionally WITHOUT the parallel `EVRUN-000012`-branch governance (C4.5, Task-D interim rows, EVRUN closure). Read-graph #15 on this branch points to the `2026-07-12` checkpoint — a documented, intentional divergence (charter §14, handoff §2 NOTE), not a contradiction. **Post-landing live truth:** this artifact now lives on current `main` (fast-forward-merged @ `fa98a34`, post-`c40630b`); the live boot checkpoint is whatever read-graph #15 on `main` names (UNCHANGED by this pass — the landing did not repoint it). The outer checkpoint is UNCHANGED by this pass.

## §1 Method + source posture

- **Booted fresh** from `v4_C4_4_G2_kickoff_handoff.md`; executed the handoff §4 governing read order + Tier-0 boot. Did NOT rely on any prior chat memory (the handoff's central instruction).
- **Read FULLY this pass:** the G2 kickoff handoff; the Gate-0 charter (all sections); the closed G1 reality map (all sections §0–§10); the CNS/Knowledge-Reservoirs frontier doc (§0–§6, all 6 open Qs); `FWREG-006`/`007`/`010`/`013`/`015` rows; the D7 contract (§1.5–§12); the guardrail digest rows `GRD-026`/`028`/`033`/`034`/`035`/`036`/`037`/`038`/`039`/`040`/`041`/`042`/`043`/`044`; spine-shape §§0–§2 + the §1 section-map rows 7/8; System Map vNext header + plane taxonomy + full domain index.
- **Consulted (not full-read):** read-graph routes #6/#9a/#9g/#9h/#9j/#15; the operator/collaboration model (via AGENTS always-applied summary + who-is-who).
- **Not re-derived:** the G1 external mechanism survey (closed; consumed as input) and the frontier depth (consumed + resolved, per spine §8 "do NOT re-derive; the depth exists").
- **Adjudication discipline:** every carried question is closed as `resolved` / `bounded-deferred (owner + trigger)` / `rejected`. "Explicitly open" is NOT a disposition (charter §8 G2 acceptance condition). Where G2's scope-fence forbids a full answer (CNS framework, contract schemas, vendor picks, GTM strategy), the question is `bounded-deferred` with a named owner + trigger — not left open.

## §2 The six constitutional classes/roles (the core G2 taxonomy)

G2's central act is to **separate six constitutional classes/roles that must never collapse** (frontier open Q6; charter §7/§12; the §2 category error). *("Species" below is shorthand for "constitutional class/role"; the six are NOT one ontological kind. They sub-group **for explanation only** — minting NO super-category: **durable governed bodies/state** = S1 Source Estate · S2 Knowledge Reservoir · S3 Domain-Owned State; **distinct processing/view/runtime roles** = S4 Evidence Workbench · S5 Compiled Projection · S6 Mission Context.)* A "species" is distinguished not by payload, file-type, or storage engine, but by its **constitution**: authority relationship · custody + mutation law · retention/deletion law · correction/reconsideration model · ownership · admissibility · freshness/aging · reprocessing posture · and *what kind of thing it fundamentally is* (evidence vs accepted knowledge vs domain state vs a view vs an assembled draw). These are the §7 adjudication criteria applied.

**The six classes/roles (planning-vocabulary names):**

| # | Class/role (working name) | What kind of thing | One-line constitution |
|---|---|---|---|
| S1 | **Source Estate** (governed source custody) | **evidence** (unjudged) | What OMNI *preserves under governed source custody before/independently of downstream interpretation* — **received · captured · observed · imported · system/device-emitted · internally-generated durable source artifacts**; immutable while retained; receipt-truth ≠ content-truth; non-adopted by default; may carry **scoped evidentiary authority** (provenance · signature · authorship · transmission · device-emission · exact received payload · legal/operational occurrence) but never becomes interpreted/domain truth through custody alone; preserved beneath every synthesis. |
| S2 | **Knowledge Reservoir** (curated reusable governed body) | **accepted knowledge** (reusable, non-domain) | What OMNI has *admitted as reusable knowledge/experience* — curated, versioned, governed by a multidimensional authority profile, freshness-bound; `indexed ≠ accepted`. |
| S3 | **Domain-Owned State** (a.k.a. Authoritative Domain State; **Clinical Memory is ONE domain implementation**) | **domain state / truth** | What an owning domain has *committed* (Clinical Memory, Identity, D6, inventory, workforce, …) — P1 truth; **authoritative within its owned subject-matter + authority basis (scoped — never a global 'highest')**; consulted by the family but owned by its domain, never a reservoir. |
| S4 | **Evidence Workbench** (the external-evidence processing plane) | **a pipeline / boundary** | Where outside material is *captured, deduped, scored, routed, promotion-gated* (today's `ingestion/`) — a learning boundary, member-LIKE, not a durable authoritative body. |
| S5 | **Compiled Projection** (wiki · briefing · topic-map · semantic read-model · other lossy regenerable synthesis — **NOT a retrieval index**) | **a view** | A *regenerable, cited, lossy, freshness-bound, contradictions-surviving, compiler-lineage-bearing* view — never authoritative (`DEC-033` P4, `GRD-041`). Lexical/vector/graph **retrieval indexes are replaceable materialization/retrieval RAILS** (§R.10; 15-M), not this class; but their **chunks/embeddings/derived metadata are governed derived artifacts** inheriting source lineage + sensitivity + deletion/freshness/rebuild/eval obligations (§11.1). |
| S6 | **Mission Context** (the purpose-/authority-scoped assembled draw) | **an assembled composition** | The *smallest sufficient admissible context* the Context Router assembles for one run/mission — lineage-bearing, as-of-reconstructable; not a durable body, not truth. |

### §2.1 The constitutional-class matrix (the constitutional distinctions — the anti-collapse spine)

| dimension | S1 Source Estate | S2 Knowledge Reservoir | S3 Domain-Owned State | S4 Evidence Workbench | S5 Compiled Projection | S6 Mission Context |
|---|---|---|---|---|---|---|
| **authority relationship** | **scoped evidentiary authority** for provenance/signature/authorship/transmission/device-emission/exact-received-payload/legal-occurrence (receipt-truth); NOT for any interpreted/domain claim inside | authoritative as *reusable reference/experience* at its authority-profile and use ceiling; never domain-commit authority | authoritative *within its owned subject-matter + authority basis* (scoped — NOT a global 'highest') | non-binding *outside reference* | **non-authoritative** by construction | non-authoritative; inherits admissibility from what it draws |
| **custody + mutation law** | immutable while retained; new facts arrive as new artifacts/versions, never edits | curated; changes only via governed admission/promotion; versioned + attributed | append-only assertions; committed via owning-domain gate | raw source immutable · interpretations versioned + attributed (`GRD-042`) | fully regenerable; recomputed, never hand-edited as truth | assembled per-mission; logged for replay, not mutated |
| **retention / deletion** | explicit · additive · lineage-preserving; deletion/pseudonymization/legal-hold is a governed event, never silent | eviction ≠ deleting evidence; retire/supersede, keep lineage | domain-governed retention + GDPR pseudonymize-not-delete | lane-scoped; sources retained for reinterpretation | disposable (recomputable from sources) | ephemeral or replay-retained under privacy/retention law |
| **correction model** | correction package = additive supersession; original package stays reconstructable | re-review → new version; old marked superseded, not erased | owning domain commits its own correction (C4.3 Law 10.1) | new `EVRUN`/review snapshot, never overwrite | regenerate after upstream disposition | re-assemble; prior draw preserved for as-of replay |
| **ownership** | distinct roles — originator · data-subject · legal-controller · processor · custodian · admitting-principal · tenant/operator-scope · visibility/use-authority (never collapsed into one 'owner'; D7 §6 custody≠visibility≠identity discipline) | reservoir owner + `review_gate` | owning domain | Evidence-Plane / control-plane | Foundry/compiler (machinery) | Context Router assembly discipline |
| **admissibility** | searchable ≠ adopted; presence ≠ authority | `indexed ≠ accepted`; expired/stale = readable but non-actionable for high-consequence use | adoption gate (clinician/authority) | proposes only; never executes (`GRD-036`/`038`) | risk-sensitive horizon: stale projection non-actionable for care-critical | smallest-sufficient; purpose/consent/authority-bounded draw |
| **freshness / aging** | separate **source integrity** (historical — does NOT stale; it is what it was) from **current applicability** (absolutely CAN become stale/superseded); + currency + supersession + retention/access-validity as distinct | first-class staleness; freshness-bound; must disclose source-cutoff | current-state truth + temporal validity | n/a (evidence) | freshness-bound + compiler-version stamped | as-of the moment of the draw (C4.5 seam) |
| **reprocessing** | expected — one source ↔ many `extraction_run`s over years (`GRD-040`) | re-derivable from sources; re-admittable by better models | re-adoption via gate | reinterpretation expected (`GRD-042`) | rebuild without losing the corpus | re-assemble on demand |
| **what it is NOT** | not a reservoir, not truth, not a view | not source, not domain truth, not a view | not a reservoir, not evidence | not a reservoir, not a data store (`GRD-041`), not truth | not truth, not a source of record | not a memory species, not a durable body |

### §2.2 The directional law between classes/roles (adopts + extends the frontier binding law)

```
Source Estate (S1)
  → interpretation / extraction_run (layer 3; produces candidates, adopts nothing by itself)
     → owning-domain adoption candidates → Domain-Owned State (S3)      [owning domain commits]
     → reservoir-admission candidates    → Knowledge Reservoir (S2) [reservoir review_gate accepts]
S2 + S3 + S1
  → Compiled Projection (S5)   [Foundry/compiler machinery regenerates views]
  → Mission Context (S6)       [Context Router assembles a purpose/authority-scoped draw]
Evidence Workbench (S4) **PROPOSES + ROUTES** candidates to many governed homes — Reservoirs (S2) · owning domains (S3) · doctrine/policy/contracts · Build-OS · evals/fixtures · watch/reject; it **never accepts/adopts/commits** and is not itself on the domain-commit path.
```

**Binding law (frontier §2, affirmed + widened):** **Source Estate preserves · CNS orchestrates · Reservoirs supply · Foundry compiles/tends · Context Router assembles · Owning domains commit.** Storage ≠ authority. Retrieval ≠ admissibility. Receipt-truth ≠ content-truth. Repetition ≠ independent evidence. Source ≠ normalized ≠ adopted ≠ decision ≠ projection ≠ mission-context — **never collapse** (charter §12).

### §2.3 Why not fewer classes/roles (the collapse each separation prevents)

- **S1 vs S2 (source vs reservoir) — the load-bearing separation.** They have *opposite* mutation laws (immutable-while-retained vs curated-evolving) and *opposite* authority postures (received-not-vouched vs admitted-as-reusable). Collapsing them is exactly the §2 category error and the reason **parent A is rejected** (§3).
- **S2 vs S3 (reservoir vs domain-owned state) — frontier Q2/Q6.** Clinical Memory is patient-specific *committed truth* (P1). A reservoir is *reusable reference/experience*, never domain-commit authority. Medical Literature (general knowledge, `FWREG-006`) ≠ Clinical Memory (patient truth) ≠ Care-Outcomes-Learning (system learning). Three species, never one.
- **S2 vs S4 (reservoir vs workbench) — frontier §3.** The Evidence Workbench is a *processing boundary* (`GRD-043`: learning boundary, not a content library), not a durable authoritative body. It **proposes + routes candidates to many governed homes** (Reservoirs · owning domains · doctrine/contracts · Build-OS · evals · watch/reject); it never accepts/commits and is not itself the governed body OMNI reasons from.
- **S2/S3 vs S5 (body vs view) — `DEC-033`/`GRD-041`, EVSRC-262/313.** A compiled projection (wiki/briefing/read-model) is a *cache over evidence*, not truth (a retrieval index is a separate materialization rail, not a projection). Treating a projection as canonical state (or eventual-consistency for action-critical care) is rejected.
- **S5 vs S6 (view vs draw) — EVSRC-266.** A compiled projection is a durable-ish regenerable view; a mission context is a *per-mission, purpose-bound assembly* (smallest sufficient admissible context), not a stored artifact. They differ in lifetime, ownership (compiler vs router), and scoping.

## §3 A/B/C parent adjudication (charter §7) — **B adopted · A rejected · C rejected-as-parent**

Tested against the §7 criteria (authority · custody · mutation · retention/deletion · source-correction · ownership · admissibility · aging · reprocessing · evidence-vs-knowledge-vs-state-vs-view).

- **Parent A — raw corpus = a `Source Reservoir` subtype of Reservoir. → REJECTED.** A subtype relationship forces ONE contract to carry two opposite constitutions (S1 immutable-received vs S2 curated-accepted; §2.3). It reintroduces the exact category error §2 exists to prevent — collapsing source custody into curated knowledge. Immutability-while-retained, receipt-truth, and non-adoption are not "a kind of curation." Least favored in the charter; formally rejected here.
- **Parent B — Source Estate is an adjacent species that FEEDS Knowledge Reservoirs. → ADOPTED as the working constitution.** `Source Estate → interpretation/extraction → (domain-adoption candidates ∧/∨ reservoir-admission candidates) → projections + mission context` (§2.2). B is strongest because it keeps *custody* (S1) distinct from *curation* (S2) distinct from *commitment* (S3) distinct from *view* (S5) distinct from *draw* (S6). Preliminary Opus+Knox bias confirmed under the §7 criteria.
- **Parent C — a wider parent "Governed Context Estate" containing corpora + reservoirs + projections + mission context. → REJECTED as an ontological parent / owning layer; NOT minted even as a navigational umbrella.** Test: does C own any authority, mutation law, or truth its members do not? **No.** Minted as an owning layer it becomes an "everything-context" god-category (violates `GRD-035` no-single-domain-owns-a-cross-cutting-concern + `GRD-026` payload-noun-not-domain + the frontier "do not create a new plane"). The *navigational* need C gestures at (a way to route/traverse the family) is already satisfied by (i) the S1–S6 species taxonomy, (ii) the Context Router (S6 assembly), and (iii) the read-graph/catalog. Therefore **no owning umbrella object is created.** A **non-owning navigation/classification label is bounded-deferred to G5** — permitted ONLY if it proves routing value (cross-species discovery · policy evaluation · observability · Context-Router admission) **without acquiring authority or ownership** (the frontier §1 "classification/tag, NOT a prefix" anticipated exactly this). G2 rejects C as an ontological parent/owner/domain/plane/authority-source/truth-container; it does NOT foreclose a non-owning label.

**Disposition:** A `rejected` · B `resolved (adopted, planning-vocabulary)` · C `rejected as parent/owner/domain/plane/truth-container` · a non-owning navigation label `bounded-deferred → G5` (owner: G5 naming; trigger: G5; only if it adds routing value without authority/ownership).

## §4 The six layers (charter §6) mapped to the classes/roles

The architecture separates six layers; each species occupies specific layers. This confirms the layers are real seams, not synonyms.

| layer (charter §6) | what happens | primary class/role | ownership note |
|---|---|---|---|
| 1 · ingress / collection | packages arrive; declared-vs-received; quarantine; closure | S1 (corpus/package level) | Source-Estate admission (C4.4 places the boundary; G3 designs it) |
| 2 · artifact custody | durable per-artifact custody, integrity, visibility, dedup | S1 (artifact level) **reusing D7 physics** | D7 owns per-artifact durable physics; corpus parent = §6 |
| 3 · interpretation / normalization | `extraction_run`/`ingestion_run`; versioned interpretations | S1→(candidates); machinery = Foundry | interpretations are versioned + attributed (`GRD-042`); adopt nothing by themselves |
| 4 · domain adoption | candidates become owning-domain truth | S3 (owning domains) | **NOT C4.4's to own** — C4.4 places the leaves-the-estate boundary; owning domains commit |
| 5 · reusable knowledge / experience | admitted curated bodies | S2 (reservoir family) | reservoir `review_gate` + authority-profile |
| 6 · materialization / projections / mission-context | retrieval indexes (rails) · compiled views · per-mission draws | index=rail · S5 · S6 | indexes = materialization RAILS (NOT S5); Foundry compiles projections (S5); Context Router assembles (S6) |

Cross-cutting mechanisms (charter §6) — storage · catalog · lineage · access · indexing · versioning · quality · reprocessing · retention · revocation · search · compilation · promotion — are **rails/capabilities composed across layers**, NOT species (scope-fence `GRD-041`/`GRD-033`; §17). **Disposition: `resolved`.**

## §5 The five orthogonal ingress taxonomies (charter §7.1) — **affirmed; replaces "the 8 ingestion types = one taxonomy" error**

The current 10 `ingestion/` lanes are ONE value-set of **axis-1 (provenance)** scoped to the Evidence-Workbench (S4) only — they are NOT OMNI's universal ingestion constitution (`GRD-037`: lane = who-produced-it-and-why). The universal ingress constitution is FIVE orthogonal axes; one thing carries a value on each simultaneously; **file-type never determines architecture.**

1. **Provenance / source family** — patient · provider · operator · partner · vendor · regulator · educator · system-export · device · agent · runtime · public.
2. **Admission purpose** — tenant migration · ongoing sync · care evidence · operational execution · legal retention · reference learning · clinical knowledge · experience learning · federated exchange · model/build supply chain.
3. **Intended governed destination / constitutional role** — Source Estate · Knowledge Reservoir · Domain-Owned State · Compiled Projection · Mission Context · external governed home · no-admission/reject route. *(Admission-status · activation · currency · quarantine · materialization are SEPARATE state dimensions — §8.2 — never folded into this axis; 15-P.)*
4. **Information form** — package · file · document · table · row · image · audio · video · model artifact · external reference.
5. **Delivery / temporal lifecycle** — one-time snapshot · incremental package · correction package · continuous feed · event stream · remote/federated pointer · generated derivative.

**Mapping to classes/roles:** axis-3 (governed destination/constitutional role) is precisely the S1→S2/S3/S5/S6 fan-out; axis-2 (admission purpose) drives which `review_gate` applies; axis-5 (delivery lifecycle) drives the bounded-vs-open-ended profile split (§7). **Disposition: `resolved` — the five axes are the ingress-classification constitution; the 10 lanes are a scoped provenance value-set, not a competing taxonomy.**

## §6 D7 boundary + the general artifact / corpus parent (charter §7 D7-honesty finding) — **`resolved` (boundary) + `bounded-deferred` (placement → G3/C5)**

**Finding (grep-verified in G1):** D7 owns per-artifact durable physics *well* — custody, artifact-integrity gate, one-canonical-many-grants, fingerprint dedup, `upload_event`, open `document_kind`, 5-disposition, federation-ready per-artifact lineage. But it is **patient-subject-shaped** (`patient_document`) and has **no corpus-level object** (package/collection/manifest → completeness/quarantine/incremental+corrective import/closure), **no corpus-scale reprocessing/`extraction_run` lineage**, and **no honest "received-but-never-adopted" model**.

**Adjudication (two questions, distinct):**
- **(a) Subject-agnostic artifact primitive.** The Source Estate needs an `artifact` that can be multi-subject / non-patient / corpus-level (a 3,000-patient workbook, a device manual, a formulary, a training file). D7's `patient_document` is subject-shaped. **Precedent already exists in-estate:** D7 §10 `SC-D7-BIZOPS-001` already reuses the open `document_kind` + `signature_envelope` + one-canonical-many-grants shape for a `workforce_member` subject ("subject-agnostic artifact discipline is the contract; same-table-vs-sibling is build detail"). So **subject-agnostic artifact identity + subject-by-relationship** (reusing D7's custody/integrity/visibility/dedup physics; structural inheritance/table/type placement DEFERRED to G3/C5) is a **directionally-admitted extension of D7's proven discipline, not a new invention.** **Disposition: `resolved` — the boundary exists; reuse D7's per-artifact physics, do NOT rebuild them; do NOT declare D7 sufficient because it can store a PDF.**
- **(b) Corpus-level parent (package / collection / manifest).** This is genuinely absent (S1 corpus layer). **Disposition: `resolved` that it is REQUIRED; `bounded-deferred` on PLACEMENT** — whether the corpus parent lives *inside* a widened D7 or as a **Source-Estate-owned corpus layer above D7 artifacts** is a reference-architecture question. **Owner:** D7 contract + C4.4 G3. **Trigger:** G3 reference architecture (then C5 contract minting). No schema minted at G2.

**Guard:** the corpus layer is NOT a new plane and NOT a god-store (`GRD-041`); it owns *governance semantics* (identity · completeness · quarantine · closure · reprocessing lineage · received-but-unadopted honesty), plugging into object-storage/lakehouse rails it does not own.

## §7 Bounded admission package vs open-ended evolving corpus — **`resolved`: two lifecycle profiles under shared identity/lineage mechanics**

The G1 F-Self finding (§7 "two manifest profiles — do NOT collapse") is adjudicated: there are **two lifecycle-contract profiles**, sharing identity/lineage/coverage/extraction/reprocessing mechanics but governed by **different closure laws**:

| profile | example fixture | completeness law | closure | correction |
|---|---|---|---|---|
| **(A) bounded admission package** | F0 (federation export: declared contents, expected counts) | declared-vs-received is *knowable + closable*; missing/quarantined enumerated against a manifest | package *closes* with visible exceptions | correction packages supersede named subsets |
| **(B) open-ended evolving corpus** | F-Self (chats + files + commits + decisions accumulating longitudinally) | completeness is *inherently partial/rolling* | **remains open-ended, BUT bounded coverage epochs / ingestion windows / reconciliation checkpoints CLOSE with explicit watermarks + exceptions** (coverage provable at a point in time) | additive supersession; no single final state |

**Disposition: `resolved`** — one shared identity/lineage/extraction/reprocessing substrate; **two distinct lifecycle contracts** (bounded-closure vs open-ended-with-closable-watermarked-epochs). F-Self does NOT prove one universal `ingress_package` should model everything (anti-`GRD-026` universal-case). G3 designs both profiles over the shared mechanics.

## §8 Authority PROFILE + orthogonal state-families (frontier open Q5) — **`resolved` (candidate taxonomy → spine §8 ratifies)**

A multidimensional authority **profile** (§8.1) and several **orthogonal state-families** (§8.2) — NOT ladders. Conflating them is a known failure (EVSRC-227/262: "indexed ≠ accepted").

**(8.1) Authority is a MULTIDIMENSIONAL PROFILE — NOT a single ordered ladder** (Knox G2 correction; the earlier R0–R3 total-ordering is **REJECTED** — Threat Intel, clinical literature, and operational lessons differ by KIND and USE, not by one ascending scalar; and Evidence-Workbench material is NOT a reservoir class). Every reservoir body/partition carries an **authority profile** over these orthogonal axes (conceptual — enumerations ratified at spine §8/C5, **NOT a G2 schema**):

| axis | what it captures |
|---|---|
| `knowledge_kind` | reference-literature · operational/experience-lesson · threat/risk · brand/creative · build/architecture · care-outcomes · public-reference … (a KIND, not a rank) |
| `authority_basis` | why it may be relied on (source authority · review provenance · derivation lineage) |
| `review_authority` | who/what admitted it + at what rigor |
| `scope` | subject-matter + applicability envelope |
| `principal / tenant` | whose body (patient · provider · operator · federation · OMNI-network · public) + partition |
| `use_ceiling` | descriptive-only · advisory · executable-candidate · prohibited-for-action |
| `consequence_class` | blast radius if wrong (care-critical … cosmetic) |
| `freshness_requirement` | how current it must be for a given use |

**Admission state is a SEPARATE orthogonal family (§8.2), NOT an authority-profile axis. No total order is asserted.** Named profiles (e.g., "clinical reference," "operator alpha," "threat intel") may emerge, but a profile is a *point in this space*, never a rung. **Boundary (unchanged):** Evidence Workbench (S4) = proposes-only, NOT a reservoir authority class; Domain-Owned State (S3) = committed domain truth, NOT a reservoir; Clinical Memory (patient truth) ≠ Medical Literature (general reference) ≠ Care-Outcomes-Learning (system learning) — never collapse.

**(8.2) Lifecycle is FOUR orthogonal state-families — NOT one ladder** (Knox G2 correction; the earlier single `candidate→…→evicted` sequence collapsed four axes). A unit carries one value in EACH, independently:
- **admission:** `candidate · in_review · accepted · rejected` — the `indexed ≠ accepted` line: retrievable ≠ accepted-as-reusable; auto-ingest is not a commit.
- **activation:** `inactive · active · suspended`.
- **currency:** `current · stale · superseded · withdrawn`.
- **materialization — TWO sub-dimensions, NOT one ladder (forms may coexist):** *form* = `index · compiled-projection · cache · other`; *status* (per form) = `absent · current · invalidated · evicted · rebuild-pending`. An accepted unit may be simultaneously index(current) AND compiled-projection(stale); **eviction is a materialization status of a cache/index/projection — NOT a state of the accepted knowledge unit**; a `stale`/`superseded` (currency) but `accepted` (admission) lesson stays accepted yet is **non-admissible for a high-consequence mission** (risk-sensitive admissibility, EVSRC-262).



**Laws:** (i) `indexed ≠ accepted` — retrievability is not acceptance; auto-ingest is not a commit. (ii) admissibility is **risk-sensitive** — a `stale` unit is readable but **non-actionable for high-consequence/care-critical** use (EVSRC-262). (iii) `passive capture PROPOSES · passive promotion FORBIDDEN` (charter §12). **Disposition: `resolved`** as a candidate taxonomy; spine §8 + the (future) reservoir contract pattern ratifies exact enumerations. **Owner:** spine §8 / reservoir-contract pass. **Trigger:** spine §8 authoring.

## §9 Lifecycle constitution: admission · acceptance · correction · reconsideration · retention · deletion · revocation + dependency-aware invalidation (handoff §3 pt 6; F-Inv) — **`resolved`**

Distinct governed events (never collapsed):

- **admission** — a unit *enters* a body. Source Estate: received + quarantine-gated (partial-failure-visible). Reservoir: **entry into a candidate/review boundary (NOT indexing — `indexed ≠ accepted`)**. **Admission ≠ acceptance.**
- **acceptance** — a unit is *admitted as reusable / adopted* (reservoir accept-gate; domain adoption gate for S3). The `indexed → accepted` transition (§8.2).
- **correction** — **additive supersession**; NEVER a backward rewrite of committed history. The original package/version stays reconstructable.
- **reconsideration (F-Inv)** — when a source is later found superseded, contextually misread, or built on an invalid assumption: **FLAG, do not silently rewrite** the canonical content; identify every promoted dependent artifact; **preserve both what-was-decided AND what-actions-were-taken** under the former accepted state; route reconsideration to the owning authority/gate; regenerate affected projections **only after** disposition.
- **retention / deletion** — explicit · additive · lineage-preserving; **eviction ≠ deleting evidence**; deletion/pseudonymization/legal-hold/archival are governed events, never silent collapse of S1↔derived.
- **revocation** — **propagates ≥ as aggressively as publication** (EVSRC-314; motivated by CL-03 Bedrock delete-resurrection, CL-09 Copilot/Glean permission-lag, CL-08 MINJA). Revocation reaches caches, **retrieval indexes/materializations (rails — NOT S5)**, S5 projections, and federated recipients.
- **dependency-aware invalidation** — explicitly **NOT** a backward cascade into committed truth. It is a **governed, versioned assessment over distributed lineage with explicit uncertainty** — aligning C4.3 Law 10.1 (correction-impact is an *assessment*, not an authority; there is no universal ledger, no central "taint engine"; owning domains commit their own corrections; Accountability owns admitted obligations only). This is the constituted form of the G1 compound candidate gap `dependency-aware invalidation + governed reconsideration (F-Inv)`.

**Disposition: `resolved`** as candidate lifecycle law. **Owner (implementation):** owning domains + Federation/RBAC (revocation propagation) + C4.5/`FWREG-015` (temporal/as-of) + Accountability (admitted obligations). **Trigger:** G3 + C5 contracts.

## §10 Context Router / Foundry / CNS / Agent-Runtime seam + knowledge-maintenance MISSION classes (charter §3.1 binding seam) — **`resolved`**

The active machinery is separated from the passive bodies, and the mission/actor seam is held (this is the boundary Agent-Runtime `FWREG-010` will CONSUME per the §4 staged sequencing):

- **Knowledge Reservoir (S2)** = *passive body* (what is supplied).
- **Foundry / compiler / maintainer** = *active machinery* that COMPILES projections (S5) and TENDS reservoirs (S2) by running governed **maintenance missions**. (Reconciles two existing OMNI concepts — reservoir(body) vs Intelligence Foundry (machinery), charter §1.3; spine §8 title.) **Foundry owns compiler execution · maintenance missions · rebuild/materialization state · compiler lineage — NOT the semantic meaning of any projection; every compiled projection (S5) has an accountable steward / owning contract.**
- **Context Router** = *purpose- + authority-scoped assembly* of Mission Context (S6), drawing across S1/S2/S3/S5. Distinct from CNS: the Router *assembles a draw*; it does not orchestrate or commit — it owns **assembly discipline, NOT the authority or meaning of assembled content**.
- **CNS** = orchestration/control plane — coordinates missions, routes candidates to resolvers, escalates; **never commits domain truth** (`GRD-029` CNS-not-sovereign-brain). The full CNS framework is **out of G2 scope** (see §12 Q3).
- **Agent Runtime (`FWREG-010`)** = the named **actor/harness** taxonomy that INSTANTIATES the agents which PERFORM the missions.

**C4.4 owns the knowledge-maintenance MISSION classes** (permitted inputs/operations · output artifacts · proposal-vs-commit authority ceiling · proof/lineage/rollback/review + promotion/invalidation boundaries):
`contradiction-scanning · source-verification · candidate-reconciliation · routing · maintenance`.

**C4.4 does NOT mint actors.** No `ScoutAgent`/`CapperAgent`/knowledge-agent hierarchy — that is Agent-Runtime's to instantiate (charter §3.1). **Law:** passive mining PROPOSES (source-linked); it never promotes (charter §12). **Disposition: `resolved`** (missions defined; actor taxonomy explicitly deferred to `FWREG-010` as the downstream consumer).

## §11 The six Gemini-reframed candidate laws (G1 §6.3) — dispositions (`resolved` as candidate laws; owners routed)

None is auto-adopted; each is stated as a **candidate law** routed to a composing owner (NOT owned by C4.4 — `GRD-035`), for spine/C5/G4.

1. **PHI-in-embeddings inherit sensitivity.** *Embeddings are sensitive derived artifacts that inherit the strongest applicable source classification; they are NOT anonymous merely because raw text is absent.* Controls: pre-embedding minimization · purpose-specific embedding stores · tenant/principal isolation · metadata enforcement · encryption · access logging · deletion verification · avoid embeddings for certain consequence classes. **Rejects** Gemini's as-submitted "mask-the-vector solves privacy." → Federation/RBAC/consent + reservoir retrieval-index contract; C5.
2. **Evidence clustering + independence weighting** (NOT "dedup facts before context"). *Collapse duplicate transmission; preserve independent corroboration, recurrence, chronology, source authority, and dissent.* Ten copies may be one duplicated CDA · ten independent confirmations · one copied-forward error · a contradiction — never averaged into false coherence. → **Context Router (S6)** responsibility.
3. **Retrieval-unit lineage w/ optional ontology.** *Every retrieval unit resolves to its exact source artifact + derivation lineage; it MAY additionally reference an accepted semantic/domain object where one exists, without becoming authoritative through the link.* Ontology linkage is **optional** (raw sources may lack a mapping) — **rejects** Gemini's "every chunk must point to an ontology node." → S5/S6 + retrieval-index contract.
4. **As-of reconstructability — explicitly NOT a new memory species.** A composed capability across Time (C4.5/`FWREG-015`) + Agent-Runtime + Context-Router + source-lineage + Accountability: *reconstruct what sources, accepted state, policy/capability versions, projections, tools, runtime profile, and assembled context were available to a run when it proposed/acted.* **Rejects** minting a "bi-temporal agent memory" species. Explicit **C4.4 ↔ C4.5 dependency.**
5. **Evidentiary break-glass replay — NOT exact model weights.** Capture: model/endpoint version · runtime profile · prompt/template versions · retrieved source/chunk IDs · context assembly · policy/capability versions · tool calls+results · actor/authority state · timestamps · output · human override + rationale · randomness controls where available. → replayable-proof / REV-184 / Accountability + Agent-Runtime.
6. **Ambient / replayable evidence.** *Require sufficient replayable evidence under privacy/retention law* — do NOT require indefinite raw-audio/media retention. → D7 retention + Accountability + C4.5.

**Disposition: all six `resolved` as candidate laws with named composing owners.** They are NOT C4.4-owned primitives; C4.4 places them and routes them.

## §12 Frontier doc 6 open-Q disposition (spine §8 requires RESOLVE, do-not-re-derive)

| Q | frontier question | G2 disposition | detail / owner + trigger |
|---|---|---|---|
| Q1 | Care Outcomes Learning system — shape; one body or several (care/marketing/ops)? | **resolved (class/role) + bounded-deferred (roster/partition)** | It is a **Knowledge Reservoir member** (authority-profile `knowledge_kind` = operational/experience; §8.1) — system-level learning from OMNI's own actions; fed by S3 domain state + S4 evidence; admission-gated; passive-capture-proposes-never-promotes. Whether ONE body or several is a **principal/tenant + domain partition** question → **owner:** reservoir-roster/spine §8; **trigger:** spine §8. Intersects the save-case→learning-candidate path (Knox fixture) + CQ operational-lesson-unit (EVSRC-314). |
| Q2 | Clinical Memory's class — member, or substrate/domain? | **resolved** | **Domain-Owned State (S3), NOT a reservoir.** Patient-specific committed truth; *consulted* by the family, *owned* by its domain. Boundary set: Clinical Memory (patient truth) ≠ Medical Literature (general reference `knowledge_kind`) ≠ Care-Outcomes-Learning (system-learning `knowledge_kind`) — never collapse. |
| Q3 | The CNS framework itself (context assembly, regions, learning loops) | **bounded-deferred** | G2 contributes only the **knowledge/context seam** (Context Router draw + reservoir-supply law + mission classes, §10). The full CNS framework (hemispheres/regions, learning-loop placement) is **owner:** spine §5/§7 + `CNS_orchestration_contract`; **trigger:** spine §5/§7 authoring. (Scope-fence: `GRD-029`; C4.4 must not become the CNS designer.) |
| Q4 | Final family name | **bounded-deferred (naming) + resolved (principle)** | **Principle resolved:** the family is a **non-prefixing classification tag** (members keep crisp names; no `OMNI X Reservoir` per member — frontier §1). **Name deferred** per the frontier's explicit "do not canonize" + charter §15 naming-ossification guard. **Owner:** G5/spine; **trigger:** G5 disposition. Working label: "Knowledge Reservoir family." |
| Q5 | Authority-class taxonomy enumeration | **resolved (candidate)** | §8.1 multidimensional authority profile + §8.2 orthogonal state-families; ratified at spine §8. |
| Q6 | reservoir vs domain-memory vs projection vs workbench | **resolved** | The §2 six-class matrix — the anchor resolution. S2 vs S3 vs S5 vs S4 (plus S1 source estate + S6 mission context), never collapse. |

## §13 `FWREG-007` open-question closure ledger — **the formal G2 gate artifact** (each `resolved` / `bounded-deferred` / `rejected`; "explicitly open" is NOT a disposition)

| # | carried question (handoff §3 + charter §5/§7 + §5-unresolved) | disposition | owner + trigger (if deferred) | where resolved |
|---|---|---|---|---|
| K1 | Source Estate vs Reservoir vs domain-owned state vs Evidence Workbench vs compiled projection vs mission context | **resolved** | — | §2 six-class matrix |
| K2 | A/B/C parent | **resolved (B) · rejected (A, C-as-parent)** | — | §3 |
| K3 | bounded admission packages vs open-ended evolving corpora | **resolved** | — | §7 (two lifecycle profiles, shared mechanics) |
| K4 | D7 artifact boundary + general artifact/corpus parent above `patient_document` | **resolved (boundary) · bounded-deferred (placement)** | D7 contract + C4.4 G3; trigger G3 → C5 | §6 |
| K5 | authority classes · ownership · principal + tenant partitions | **resolved** | composed via Federation/RBAC/consent (not C4.4-owned) | §8.1 + §8 partitions; membrane law (charter §12) |
| K6 | admission · acceptance · correction · reconsideration · retention · deletion · revocation + dependency-aware invalidation | **resolved (candidate law)** | owning domains + Federation/RBAC + C4.5 + Accountability; trigger G3/C5 | §9 |
| K7 | Context Router / Foundry / CNS / Agent-Runtime boundaries + mission classes | **resolved** | actor taxonomy → `FWREG-010` (downstream consumer) | §10 |
| K8 | Evidence-Plane provenance lanes vs the wider ingress/admission taxonomy | **resolved** | — | §5 (five orthogonal axes; lanes = axis-1 value-set for S4) |
| K9 | the six layers (charter §6) | **resolved** | — | §4 |
| K10 | knowledge admission-state (indexed ≠ accepted) | **resolved** | — | §8.2 |
| K11 | corpus-admission envelope semantics (completeness/quarantine/closure/partial-failure) | **resolved (constituted as S1 corpus layer)** | design → G3 | §7 (A profile) + §6(b) |
| K12 | non-universal ingestion law (purpose-safe partial admission) | **resolved (candidate law)** | G3 designs enforcement | §15-L (a corrupt PDF must not block 49,999 valid records) |
| K13 | the six §6.3 Gemini-reframed candidates | **resolved (6 candidate laws, owners routed)** | Federation/RBAC/consent · Context Router · C4.5 · Accountability; trigger C5/G4 | §11 |
| K14 | frontier open Q1–Q6 | **resolved / bounded-deferred (Q3, Q4-name)** | Q3 → spine §5/§7; Q4-name → G5 | §12 |
| K15 | healthcare-native governed COMPOSITION as differentiation + "can an incumbent (esp. Palantir) compose faster than OMNI implements?" | **bounded-deferred (strategic — not a constitutional species)** | Nick/strategy + spine author + Task-D; trigger Task-D | §16 |

**Gate check:** zero questions left as bare "open." Every row is `resolved` or `bounded-deferred (named owner + trigger)` or `rejected`.

## §14 Fixture classification pass (F0 · F-Self · F-Inv) — G2-level (the taxonomy holds); **G4 does the adversarial scoring** (fixtures frozen at G4)

Per charter §9: at **G2** the fixtures are *classified against the candidate taxonomy* to show it holds (or find where it breaks); the adversarial/rubric scoring is **G4** (fixtures + rubric frozen first).

**F0 — Federation Source-Estate Admission** (3,000-patient spreadsheet + 50k mixed PDFs/images + 20yr bills + aftercare + device manuals + provider CO₂ preferences + old/current formularies + vendor price sheets + exported EHR tree + duplicates + collisions + unknowns + corrupt/password-protected + non-patient-docs-in-patient-folders + incremental export + correction package):

| F0 item | class/role | notes |
|---|---|---|
| the export as a whole | S1 corpus, **profile A (bounded)** (§7) | declared-vs-received; closes with visible exceptions |
| each PDF/image/spreadsheet | S1 artifact (reuse D7 physics, §6a) | immutable-while-retained; fingerprint dedup → `upload_event`, not duplicate originals |
| corrupt/password-protected files | S1 quarantined (axis-3 = quarantined, §5) | preserved, not dropped; purpose-safe partial admission (§15-L) |
| extracted patient facts | S1→candidate→S3 (owning domain adopts) | candidate-association ≠ confirmed-identity; unknown/collision held as candidate |
| provider CO₂-treatment preferences | Reservoir candidate (Operator Knowledge; `knowledge_kind`=operational) | provider preference ≠ clinical doctrine |
| old formulary vs current | S1 (both retained); "current" = Domain-Owned State per owner | historical instructions ≠ active policy; vendor doc ≠ current formulary |
| vendor price sheets | S1 → D6 domain candidate | receipt-truth ≠ content-truth |
| a searchable index over it all | retrieval index = **materialization rail (NOT S5)** | searchable source ≠ adopted truth; rebuildable without losing the corpus |
| correction package invalidating part of export 1 | §9 correction (additive supersession) + F-Inv if already promoted | original package stays reconstructable |

**F-Self — OMNI's own build/architecture/evidence estate** (the 10 species census, G1 §7): the G1 10-species census maps cleanly onto the taxonomy — transcripts/uploads/EVSRC = **S1 Source Estate** (profile **B, open-ended**); interpretations/analyses = layer-3 interpretations (versioned); doctrine/contracts = **S3 Domain-Owned State / P0 doctrine** (committed); handoffs/read-graph/catalog = **S5 Compiled Projection** (regenerable, non-authoritative — `DEC-033`); the promoted-guardrail/decision bodies = **S2-like curated knowledge**; the "missing corpus-scale manifest linking thread→uploads→EVSRC→decisions→guardrails→catalog→commit" = the concrete **S1 open-ended-corpus admission-envelope gap** (§6b/§7B). **The taxonomy classifies all 10 species without a leftover** — G2-level pass holds.

**F-Inv — promoted-knowledge invalidation** (a source-backed gem already promoted into doctrine/spine, later found superseded): classified as the **§9 reconsideration event reaching an already-promoted S3/doctrine home** — FLAG-not-rewrite; identify promoted dependents; preserve what-was-decided AND what-actions-were-taken; regenerate S5 projections only after disposition. **This is the case OMNI's own estate will actually hit** (G1 §10 live specimen: the G1 pass itself drifted "not-found → does-not-exist → moat," was caught at the Knox gate, and re-routed as candidate — the *signal → admission-gate → corrected-accepted-state → history-preserved* loop working in real time).

**G2 verdict on fixtures:** the six-class taxonomy + the §9 lifecycle constitution classify every F0 item, all 10 F-Self species, and the F-Inv case **without collapse and without a leftover bucket.** No taxonomy break found at classification depth. Adversarial stress (semantic loss · false promotion · stale confident synthesis · contradiction erasure · privacy/alpha leakage · source disappearance · graveyards · correlated-agent false confidence) is **G4**, with the rubric frozen before the adversary submission.

## §15 Candidate laws — affirmed / revised / rejected (charter §12 pressure)

Charter §12 required pressure, not auto-adoption. G2 dispositions (affirm `A` / revise `R` / reject `X`):

- **15-A** `A` — Source ≠ normalized ≠ adopted ≠ decision ≠ projection ≠ mission-context (never collapse). *The §2 spine.*
- **15-B** `A` — Receipt-truth ≠ content-truth; storage ≠ authority; retrieval ≠ admissibility; repetition ≠ independent evidence.
- **15-C** `A` — A captured source version is immutable while retained; deletion/pseudonymization/legal-hold/archival is explicit, additive, lineage-preserving.
- **15-D** `A` — No silent semantic duplication / no accidental second authority (every replica typed · purpose-scoped · lineage-linked · subordinate to canonical identity). Technical copies (DR, legal export, cached processing, replication) are NOT inherently corruption.
- **15-E** `A` — Contradictions survive until an authorized process resolves/scopes them (no false-coherence averaging — EVSRC-313).
- **15-F** `A` — A fluent synthesis must disclose omissions/uncertainty/source-cutoff/compiler-version/stale-deps.
- **15-G** `A` — Higher consequence → closer to the current authoritative source.
- **15-H** `A` — Conversation → memory *candidates*, not automatic memory; case → *lesson candidate*, not policy; lesson ≠ policy ≠ clinical truth (EVSRC-266/314).
- **15-I** `A` — Advice becomes supply-chain material once an agent can execute it; revocation propagates ≥ as aggressively as publication.
- **15-J** `A` — Federated publication ≠ universal trust (locally admitted); provider/operator private alpha never becomes platform-common by silent extraction (membrane law).
- **15-K** `A` — Passive capture allowed · passive promotion forbidden. Waves = audit/capping windows, not the unit of learning.
- **15-L** `A` (constituted) — **Non-universal ingestion law:** nothing may be represented as complete while required components remain missing/failed/unresolved; partial processing is allowed only when the incompleteness is explicit and purpose-safe (a corrupt training PDF must not block 49,999 valid patient records). Package-level state + artifact-level gates + declared atomic sub-bundles + quarantined subsets + closure criteria.
- **15-M** `A` — RAG/vector/graph/long-context/SQL/FTS/agentic-retrieval = replaceable *retrieval/materialization rails* (`GRD-033`/`GRD-041`); **wiki/briefing/read-model = S5 compiled-projection FORMS, not rails.** OMNI owns governance semantics; storage/compute/vector/graph engines are plug-in rails.
- **15-N** `A` (scored acceptance criterion, deferred to eval) — The system must get *cheaper, more faithful, and less human-intensive per source over time*; F-Self is the fixture that proves whether it does. (G1 §7 sampled ~8–12 hand-maintained governance artifacts per Tier-2+ arc — directional, not a measured law; measurement deferred to Build-OS eval.)
- **15-O** `A` (new, from the G1 live specimen §10) — **A survey establishes "not found," never "does not exist"; composition-not-found ≠ we-invented-it; posture ≠ operational lead.** Candidate G2 guardrail (route to `06` digest at promotion).
- **15-P** `A` (new, reflexive) — **A taxonomy must obey its own anti-collapse constitution:** `kind ≠ authority ≠ admission ≠ activation ≠ currency ≠ materialization ≠ custody ≠ ownership ≠ use-authority`; no total order or god-owner inferred from convenience vocabulary. **AND renaming/reconceiving a constitutional class OBLIGES propagating the invalidation to EVERY dependent reference AND every governance pointer (catalog/read-graph/FWREG) — else a stale confident projection is created (the exact failure this arc governs, applied to itself).** (Applied to §8.1/§8.2/§2.1 + the full consistency sweep + the three governing pointers; route to `06`.)

## §16 Strategic finding — healthcare-native governed composition + the incumbent-composition risk — **`bounded-deferred` (not a constitutional species)**

G1 concluded (§4.3/§6.5, Knox-corrected) that the candidate differentiation is the **governed cross-layer COMPOSITION** (corpus-admission envelope · received≠concluded-as-one-versioned-corpus · dependency-aware-invalidation/F-Inv · knowledge admission-state · stale-projection self-marking · technically-enforced permitted-purpose) — **NOT** the invention of any single primitive, and **NOT a demonstrated moat** (OMNI's realization is partial/manual/contract-only). The composition gap is **narrowest against Palantir** (Foundry already integrates ontology + Action-gated commit + markings/CBAC + column lineage + bitemporal data).

**G2 disposition:** this is a **strategic question, not a constitutional species** — G2 cannot resolve it (it needs GTM + build reality). Carry the honest open risk — *"can an incumbent (esp. Palantir) compose this faster than OMNI implements it?"* — with the defensible framing that OMNI's differentiation is the **healthcare-native governed-care layer an enterprise-data incumbent has no reason to build** (consent · clinical-adoption gates · care-responsibility · purpose-scoped PHI · non-action). **Owner:** Nick/strategy + v4 spine author (§1/§9) + Task-D. **Trigger:** Task-D. **Guard (15-O):** do not restate as a moat; posture ≠ operational lead until built + evaluated at estate scale.

## §17 What G2 does NOT decide (scope fence) + routing to G3

- **Reference architecture (G3):** landing/quarantine · storage · package/manifest · catalog · classification · entity-resolution · extraction/normalization · domain-admission interfaces · lineage · indexing · retrieval · reprocessing · correction · retention · revocation · federation · **build/buy/wrap per mechanism** — RESERVED in §R. No god-store; scope-fence honored (`GRD-041`/`GRD-033`/`GRD-034`/`GRD-028`).
- **NOT decided at G2:** any schema/field/table · any folder tree · any vendor selection · the full CNS framework · the reservoir-family final roster/names · the medical-literature build (`FWREG-006` boundary placed, not built) · Agent-Runtime actor taxonomy (`FWREG-010` consumes G2) · GTM/wedge · spine/thesis prose.
- **Sequencing (charter §4):** **G2 (this) → Agent-Runtime (`FWREG-010`) consumes the accepted boundaries → C4.4 G3 (reference architecture integrates Agent-Runtime as consumer) → G4 (frozen fixtures + Gemini adversary + Knox rubric) → G5 (disposition + v4/Task-D/C5 handoff).** Task-D must not close its knowledge/memory/source-estate/context-routing/Foundry/artifact conclusions before consuming C4.4 G5.

## §R Reference architecture (G3) — technology-neutral reference architecture + plug-point model over the G2 constitution

> **★ G3 status:** AUTHORED 2026-08-01 on `analysis/c4-4-g3-reference-architecture` (off `origin/main a87d305`), Nick + Knox authorized; **Knox G3-review bounded amendment pass (Amendments 1–5) applied 2026-08-01 — see §20.4** (Knox verdict PASS-WITH-REQUIRED-AMENDMENTS; pending Knox patch-verification + Nick + Knox acceptance). `analysis_nonbinding` · not promoted · G4 NOT started · outer checkpoint #15 UNCHANGED. §R is built **on top of** the accepted G2 constitution (§§1–19) and does **not** reopen it. Reading order into §R: **§R.0 orientation → R.1…R.17 → §R.CORPUS (the load-bearing D7/corpus-parent verdict) → §R.FIX (F0/F-Self/F-Inv design traces) → §20 (G3 completion ledger + Protocol §9 stop report).**
>
> **What §R is NOT (charter §13 + G2 §0 + handoff §4 hard stops, re-affirmed for G3):** no schema/field/table/migration/API/service · no vendor selection · no invented service names for diagram neatness · no god-store/god-owner/god-agent · no new architecture plane · no Reservoir-family roster or member names · no final family name · no full CNS framework · no complete Agent Runtime architecture · no Build-OS design · no product surfaces · no clinical-literature build · no GTM/moat conclusion · no spine/thesis prose · no promotion. Storage topology is NEVER collapsed into constitutional ownership; not every responsibility becomes a microservice.

### §R.0 Architecture orientation (one compact orientation before the sections)

**Major semantic responsibilities (who is semantically responsible for what — NOT a deployment diagram):**
- **Custody (S1 Source Estate):** preserve exactly what OMNI received/captured/observed/imported/emitted/generated, immutable-while-retained, with receipt-truth and lineage — *before and independently of* interpretation. Owns *governance semantics* over storage rails it does not own.
- **Curation (S2 Knowledge Reservoir):** hold reusable governed knowledge/experience under a multidimensional authority profile + `review_gate`; `indexed ≠ accepted`.
- **Commitment (S3 Domain-Owned State):** owning domains commit their own truth (Clinical Memory, Identity, D6, inventory, workforce, …); Runtime-Operations separately commits only its bounded *operational* S3.
- **Processing (S4 Evidence Workbench):** capture/dedupe/score/route/promotion-gate; **proposes + routes candidates to many governed homes; never accepts/commits.**
- **Compilation (S5 Compiled Projection) + Foundry:** regenerate lossy, cited, freshness-bound, non-authoritative views; Foundry owns compiler execution + maintenance missions, never the meaning of a projection.
- **Assembly (S6 Mission Context) + Context Router:** assemble the smallest-sufficient, purpose-/authority-scoped draw per run; as-of reconstructable; not a durable body.

**Directional flow (the §2.2 law, now with rails + gates made explicit):**

```
                        [pluggable transports/portals]         [pluggable object/blob + lakehouse rails]
                                    │                                        │
   external / internal sources ──► R.1 LANDING+QUARANTINE ──► R.2 CUSTODY RAILS ──► S1 SOURCE ESTATE (immutable-while-retained)
                                    │  (admission gate)          (OMNI owns custody semantics)   │
                                    ▼                                                             │
                        R.3 PACKAGE/MANIFEST + COMPLETENESS/CLOSURE ◄────────────────────────────┤ (corpus identity; two lifecycle profiles §7)
                                    │                                                             │
        R.4 CATALOG+CLASSIFICATION ─┴─ R.5 ENTITY RESOLUTION ─┬─ R.6 EXTRACTION/NORMALIZATION (extraction_run lineage)
                                                              │                    │  produces CANDIDATES (adopts nothing)
                                          ┌───────────────────┘                    ├────────────► R.7 DOMAIN-ADMISSION GATE ──► S3 DOMAIN-OWNED STATE  [owning domain commits]
                                          │                                        └────────────► R.8 RESERVOIR ADMISSION/review_gate ──► S2 KNOWLEDGE RESERVOIR [reservoir owner accepts]
   S4 EVIDENCE WORKBENCH ──PROPOSES+ROUTES──► (candidates to S2 / S3 / doctrine / Build-OS / evals / watch / reject)
        S1 + S2 + S3 ──► R.9 LINEAGE ──► R.10 INDEX/RETRIEVAL RAILS (plug) ──► R.11 CONTEXT ROUTER ──► S6 MISSION CONTEXT DRAW
        S1 + S2 + S3 ──► R.12 FOUNDRY compiles ──► S5 COMPILED PROJECTION (non-authoritative, freshness-stamped)
   R.13 REPROCESSING (one source ↔ many runs over time) · R.14 CORRECTION+RECONSIDERATION (F-Inv) · R.15 RETENTION/DELETION/REVOCATION
   R.16 FEDERATION EXCHANGE (publish / admit / revoke)      · R.17 build/buy/wrap per mechanism
   ── AGENT RUNTIME actor/harness READS·PROPOSES·EXECUTES across S1–S6, OWNS NONE (Runtime-Ops owns only bounded operational S3) ──
```

- **Where pluggable/external rails sit:** transports/portals (R.1); object/blob + lakehouse/compute (R.2); parsers/OCR/embedding models (R.6); matching engines (R.5); lexical/vector/graph retrieval + rerankers (R.10); de-id/linkage engines (R.15/R.16). **OMNI owns the governance semantics over each; the engine is replaceable** (`GRD-041`/`GRD-033`/`GRD-028`).
- **Where authoritative gates sit:** landing/quarantine admission (R.1); package closure (R.3); domain-adoption gate (R.7 → S3); reservoir `review_gate` (R.8 → S2); correction/reconsideration gate (R.14); federation admit/revoke (R.16). **Gates are the only places state changes constitutional class.**
- **Which owner commits which state:** owning domains commit S3 truth; reservoir owners accept S2; Source-Estate custody admits S1; Foundry (machinery) regenerates S5 with an accountable steward per projection; Context Router assembles S6; Evidence Workbench commits nothing; Runtime-Operations commits only its bounded operational S3.
- **Where lineage + proof cross every step:** every derived object resolves to exact source artifact + processing/model version (R.6/R.9); every retrieval unit carries source + derivation lineage (R.9/R.10); every domain commit carries candidate→source lineage (R.7); every projection carries compiler lineage + freshness (R.12); every mission draw is captured as an immutable S1 run-context receipt for as-of replay (R.11); every correction/revocation is additive and lineage-preserving (R.14/R.15). **Proof is not a stage — it is a property every stage must preserve** (15-A/15-B/15-P).

**Section template (each R.x below answers the same 13 architecture questions):** (1) purpose + constitutional boundary · (2) G2 classes/roles involved · (3) what OMNI must own semantically · (4) what may be supplied by pluggable infra/counterparties · (5) inputs·outputs·lineage·evidence·proof · (6) authority/admission/commit boundary · (7) lifecycle states + closure · (8) partial-failure/degraded/unknown/quarantine/retry · (9) temporal/as-of/correction/supersession/deletion/revocation · (10) privacy/principal/tenant/jurisdiction/Federation · (11) Agent-Runtime relationship (actor/harness consumer only) · (12) build/buy/wrap disposition · (13) deferred to C5/impl/procurement/spine.

---

### §R.1 Landing + quarantine

1. **Purpose + boundary.** The ingress boundary where material *arrives* and is provisionally received into governed custody **before** it is trusted, interpreted, or adopted. Landing turns an inbound stream/drop/feed/pointer into *received-and-accounted-for* source material or into an explicit quarantine/reject outcome. It never interprets content and never adopts anything.
2. **Classes/roles.** Primarily **S1** (creates provisional source artifacts + the corpus-package frame, R.3). Feeds **S4** for the outside-evidence lane. Emits nothing to S2/S3 directly.
3. **OMNI owns (semantics).** Declared-vs-received accounting; the admission decision (accept-to-custody · quarantine · reject-with-reason); provenance capture (who/whence/when/authority-to-send); the *receipt-truth* record (`receipt-truth ≠ content-truth`, 15-B); purpose-safe partial admission law (15-L — a corrupt item must not block valid siblings); the five orthogonal ingress axes (§5) applied at landing.
4. **Pluggable/counterparty.** The physical transport/portal (federated pull, secure upload, EHR feed, event stream, remote pointer, message ingress, device emission); malware/format scanners; transfer integrity (checksums, transfer manifests). OMNI wraps these behind identity/permission/audit (`GRD-033`).
5. **In/out/lineage/proof.** *In:* raw bytes/streams/pointers + a (possibly declared) manifest + sender identity + purpose. *Out:* provisional S1 artifacts (immutable-while-retained) OR quarantined/rejected items, each with a landing receipt. *Lineage:* landing event → source + transport + sender + as-of receipt time. *Proof:* the landing receipt proves *what was received, from whom, when, under what asserted authority* — nothing about content validity.
6. **Authority/admission/commit.** Landing is an **admission-to-custody** gate, not an acceptance/commit gate. Authority-to-send is verified (principal/tenant/consent/jurisdiction) but authority-to-send ≠ authority-of-content. Nothing here becomes S2/S3.
7. **Lifecycle + closure.** Per item: `arriving → received | quarantined | rejected`. Closure is a **package/epoch** concern (R.3), not per-item.
8. **Partial-failure/degraded/unknown/quarantine/retry.** First-class. Corrupt/password-protected/oversized/malformed items are **quarantined, not dropped** (preserved with reason); unknown-subject/unknown-sender items land as *received-but-unassociated*; transport interruption is resumable/idempotent (an idempotent **retry of the same transfer** resolves to the existing receipt/artifact at R.2, not a second original — but a genuinely **distinct arrival** with materially different provenance is its own receipt even if byte-identical, R.2 four-identity rule); degraded mode still admits valid siblings (15-L).
9. **Temporal/correction/revocation.** Landing stamps `received_at` (recorded time) distinct from any content effective/authored time (C4.5 seam). A later correction/incremental delivery lands as a **new** event referencing the prior (additive), never an edit. A sender-revocation of a just-landed item is a governed event routed to R.15.
10. **Privacy/principal/tenant/jurisdiction/Federation.** Tenant/principal scope and jurisdiction are bound at landing (they determine where custody may physically sit and who may ever see it). Federated inbound uses the R.16 admit path; locally-admitted ≠ universally-trusted (15-J).
11. **Agent-Runtime.** A runtime actor **may** be instantiated to *drive* a landing/migration mission (classify, reconcile a manifest, triage quarantine) — it **proposes + routes**; it never self-authorizes admission of high-consequence content and never adopts. The deterministic Runtime-Ops control plane may record landing-run operational status (bounded S3).
12. **Build/buy/wrap.** Transport/scanners = **buy/wrap** (interchangeable rails). Declared-vs-received accounting + purpose-safe partial-admission + receipt-truth semantics = **OMNI-native BUILD** (the compound gap, G1 §4.2/§4.3).
13. **Deferred.** Exact quarantine-state enumeration, transport adapter set, and scanner selection → C5/impl/procurement. Continuous-feed backpressure/rate specifics → Agent-Runtime/Build-OS.

### §R.2 Storage / custody rails

1. **Purpose + boundary.** Durable, tamper-evident retention of S1 artifacts (and the durable byte-substrate under S2/S5 materializations) — **the byte layer**, cleanly separated from *what the bytes mean or who may see them*.
2. **Classes/roles.** **S1** artifact custody (reuses D7 per-artifact physics, §6a). Provides the storage substrate that S2/S4/S5 materializations also sit on, without conferring authority.
3. **OMNI owns (semantics).** **★ Amendment-2 — four orthogonal identities, never collapsed to a hash** (D7's real rule is fingerprint **+ source metadata**, preserving every upload/receipt event — not hash-only collapse): **(i) blob/byte identity** — content-addressing MAY single-instance physical storage (an infra optimization, R.17); **(ii) artifact identity** — determined by provenance · source-system identity · subject/association · authority · document identifiers · policy — **not by hash alone** (byte-identical objects from materially different provenance may remain distinct artifacts or at minimum distinct source assertions sharing one blob); **(iii) receipt/upload/transmission identity** — **every materially-distinct receipt survives** even when it resolves to an existing artifact (an idempotent retry of the *same* transfer resolves to the existing receipt; a genuinely separate arrival is its own receipt — receipt-truth ≠ content-truth, 15-B); **(iv) evidence independence** — evaluated separately (R.9/R.11): repeated copies do **not** become corroboration merely by arriving multiple times (15-B). "One canonical artifact, many typed grants" (D7 §6; 15-D no-silent-second-authority) is the artifact-identity layer, NOT permission to erase receipts or fabricate independence. Custody roles kept distinct (originator · data-subject · controller · processor · custodian · admitting-principal · tenant-scope · visibility/use-authority — §2.1); WORM/immutability-while-retained policy; retention/legal-hold classification (enforced at R.15); the rule that **storage topology ≠ constitutional ownership** (a copy in a DR region / legal export / cache is typed + subordinate, never a second original).
4. **Pluggable/counterparty.** Object/blob stores, WORM/object-lock, lakehouse volumes, CDN/signed-URL delivery, encryption/KMS, replication. All **buy** — OMNI must not become a lakehouse (charter §15 scope-fence).
5. **In/out/lineage/proof.** *In:* accepted artifacts + custody metadata. *Out:* addressable, integrity-checked artifacts + custody record. *Lineage:* artifact identity → storage locations (all typed copies) → custody roles. *Proof:* checksum/artifact-integrity (D7 §4 gate-1) proves faithful storage — not extraction fidelity, not adoption.
6. **Authority/admission/commit.** Custody is not authority (15-B). Holding a durable copy grants no visibility and no content authority; visibility is a separate grant (R.16/RBAC).
7. **Lifecycle + closure.** Artifact: `stored → retained → (legal-hold) → pseudonymized/expired/archived/destroyed` — every transition a governed additive event (R.15). No silent deletion.
8. **Partial-failure/degraded.** Replication lag, partial writes, region loss → integrity re-verify + heal; an artifact whose bytes fail integrity is flagged (not silently served); missing-blob-behind-a-catalog-row is a first-class *degraded* state, never a phantom truth.
9. **Temporal/correction/revocation.** Immutable-while-retained: new facts = new artifacts/versions, never edits (§2.1). Deletion/pseudonymization/legal-hold are explicit additive events preserving audit (D7 inv 24; 15-C). Revocation of custody propagates to every typed copy (R.15).
10. **Privacy/principal/tenant/jurisdiction/Federation.** Data-residency/jurisdiction may force physical placement; tenant/principal isolation is a storage-partition + access concern; PHI sensitivity class rides the artifact (and its derivations, §11.1). Cross-org custody = Federation (R.16).
11. **Agent-Runtime.** Reads only admissible artifacts *with lineage*; **may emit** internally-generated source/run artifacts into S1 custody (§G2C.6); never owns/curates the estate.
12. **Build/buy/wrap.** Object storage/WORM/lakehouse = **buy** (mature commodity, G1). Canonical-identity + dedup + typed-copy + custody-role semantics = **OMNI-native** (wraps the rail).
13. **Deferred.** Concrete storage engines, encryption/KMS design, residency topology → procurement/impl/C5. The subject-agnostic artifact primitive vs D7 `patient_document` placement → **§R.CORPUS**.

### §R.3 Package / manifest + completeness / closure

1. **Purpose + boundary.** The **corpus-level** parent above individual artifacts: package/collection identity, declared-vs-received completeness, atomic sub-bundles, closure with visible exceptions, and incremental/corrective import. This is the genuinely-absent S1 corpus layer (§6b) — the load-bearing net-new (G1).
2. **Classes/roles.** **S1** at corpus granularity. Two lifecycle profiles (§7): **(A) bounded admission package** (closable) and **(B) open-ended evolving corpus** (closable epochs/watermarks).
3. **OMNI owns (semantics).** Package identity + membership; declared expected contents vs received accounting; completeness law (15-L: nothing represented as complete while required components are missing/failed); closure semantics with enumerated exceptions; correction-package supersession of named subsets; coverage watermarks for profile-B epochs; the record of *what a package claimed vs delivered*.
4. **Pluggable/counterparty.** Sender-supplied manifests (e.g. bulk-export output/error/deleted manifest formats, load-job transaction receipts) are **consumed as inputs** — OMNI reconciles them, does not delegate closure to them. Manifest *transport* is a rail.
5. **In/out/lineage/proof.** *In:* declared manifest (if any) + landed artifacts (R.1) + sub-bundle boundaries. *Out:* a package record with received/missing/quarantined/duplicate accounting + a closure statement (or an open epoch watermark). *Lineage:* package → its artifacts → their extraction_runs (R.6) → downstream candidates/adoptions/reservoir units (coverage of what the package ultimately produced). *Proof:* the package proves *what was declared, what arrived, what is missing/quarantined, and when it closed* — receipt-truth at corpus scale.
6. **Authority/admission/commit.** Closure is an **accounting** act, not an adoption act — a closed package can be fully received yet mostly unadopted. Package-level state (admission/closure) is orthogonal to per-artifact adoption (§8.2; 15-P).
7. **Lifecycle + closure.** *(A)* `open → receiving → reconciling → closed-with-exceptions | closed-complete`. **★ Amendment-4 — a closed package stays closed as a historical receipt/accounting fact.** A correction package does NOT reopen or mutate the original package's receipt closure; it is a *new* package that **links to + supersedes a named scope** of the prior one, creates new reconciliation/extraction/admission/reconsideration obligations, and may reopen *downstream processing* for that scope — while the original closure remains reconstructable (§9). *(B)* never globally closes, but **epochs/ingestion-windows/reconciliation-checkpoints close with explicit watermarks + exceptions** (coverage provable at a point in time).
8. **Partial-failure/degraded/unknown.** Missing/quarantined/corrupt items are enumerated against the manifest, not hidden; a package with exceptions still closes (visibly); unknown-subject items are held as received-but-unassociated within the package; a package may not be represented as complete while atomic sub-bundles are unresolved. **Duplicate accounting is receipt-preserving (Amendment-2):** duplicates are *counted and recorded as distinct receipts* against the manifest (blob-dedup may share storage), never silently collapsed away — the package's received-count reflects receipts, not deduped blobs.
9. **Temporal/correction/revocation.** Incremental exports append; correction packages supersede named subsets additively (original package stays reconstructable, §9); as-of reconstruction can show the corpus *as it stood* at any prior closure/watermark (C4.5). Revocation of a whole package propagates to derivations (R.15).
10. **Privacy/principal/tenant/jurisdiction/Federation.** A package carries the tenant/principal/jurisdiction envelope of its sender; federated packages arrive via R.16 admit; a package may mix subjects/consent bases, resolved per-artifact downstream (not flattened to the package level).
11. **Agent-Runtime.** A runtime actor may run the *reconciliation mission* (declared-vs-received, exception triage, coverage reporting) — proposes/reports; the closure record is committed by the Source-Estate custody owner (deterministic control), not by model judgment.
12. **Build/buy/wrap.** The **combined corpus-admission envelope** (identity + completeness + quarantine + closure + correction + coverage) = **OMNI-native BUILD** — partial peers exist (bulk-data/dataset-transaction manifests) but the composed envelope was not shown in one object (G1 §4.1). Manifest formats/transports = **buy/wrap** at the boundary.
13. **Deferred.** Exact corpus-parent object placement (inside a widened D7 vs a Source-Estate corpus layer above D7 artifacts) → **§R.CORPUS** (verdict) then C5 (contract/schema). Profile-A/B contract split detail → C5.

### §R.4 Catalog + classification

1. **Purpose + boundary.** The governed *index of what exists* across the estate and the classification that lets material be found, routed, and policy-evaluated — **without becoming a truth store or a god-catalog** (`GRD-041`).
2. **Classes/roles.** Cross-cutting rail serving S1/S2/S3/S4/S5; classification assigns the five ingress axes (§5) + constitutional-role/destination + sensitivity + tenant/principal. **★ Amendment-1 distinction (two different "catalogs" — do not conflate):** *(a)* an **estate-content catalog/index** — an index over source material — is a **materialization rail + (optionally) an S5 view, never authority** (this is what R.4 governs); *(b)* OMNI's **Architecture Memory Control Plane** (the master corpus catalog `01`, manifest read-graph `04` incl. the binding current-state pointer #15, decision `03`, guardrail `06`, supersession/open-review ledgers) is **NOT this rail and NOT S5** — it is **committed governance state, authoritative within its control-plane scope** (S3-role where the owning domain *is* the control plane), and is **never regenerable-as-disposable**. A search/nav view *over* the control plane may be S5; the control plane itself is committed owner-state.
3. **OMNI owns (semantics).** The classification taxonomy (the five orthogonal axes, §5; `axis-3` destination/role drives fan-out; `axis-2` purpose drives which gate applies); metadata-quality states (a deterministic filter over bad metadata is deterministically incomplete — OpenWiki lesson, G1); the rule that **catalog presence ≠ authority** and **classification ≠ adoption**; navigation/discovery without conferring ownership (the §3 rejection of C-as-owner — a non-owning classification label only).
4. **Pluggable/counterparty.** Data-catalog/technical-catalog infrastructure, taxonomy/tagging engines, classification model assists (OCR/NLP classifiers as *proposers*). All **buy/wrap**.
5. **In/out/lineage/proof.** *In:* artifacts/packages/units + extracted signals. *Out:* catalog entries + classifications + discovery/routing surface. *Lineage:* every classification records classifier identity/version + confidence + basis (so a mis-class is reconsiderable). *Proof:* classification provenance; metadata-quality state (verified vs inferred vs missing).
6. **Authority/admission/commit.** Classification is a *proposal that enables routing/policy*, not an adoption. Auto-classification proposes; high-consequence reclassification is gated (D7 §1O.9 staff reclassification discipline).
7. **Lifecycle + closure.** Classifications are versioned; reclassification is additive (old class retained for lineage). Catalog coverage tracks completeness (which artifacts are unclassified/low-quality-metadata).
8. **Partial-failure/degraded/unknown.** Unknown/low-confidence classification is a first-class state (not a silent default bucket); missing metadata → `metadata_quality = incomplete`, which *bounds* deterministic retrieval (retrieval over bad metadata is knowingly partial).
9. **Temporal/correction/revocation.** Reclassification and correction are additive + as-of reconstructable; revocation/withdrawal of a source updates its catalog state (→ R.15) without erasing history.
10. **Privacy/principal/tenant/jurisdiction/Federation.** The catalog is tenant/principal-partitioned and permission-aware — *catalog visibility itself* obeys access boundaries (you cannot discover what you may not know exists). Federation exchange (R.16) shares catalog entries only under admission.
11. **Agent-Runtime.** Reads the catalog for discovery within its admissible scope; may run classification/curation missions that **propose** classifications; never self-commits a high-consequence reclass.
12. **Build/buy/wrap.** Catalog/tagging infra = **buy/wrap**; the five-axis classification constitution + metadata-quality-state + presence≠authority discipline = **OMNI-native**.
13. **Deferred.** The non-owning cross-species navigation label (frontier §1 "tag not prefix") → **G5** (§3 disposition). Concrete catalog engine → procurement.

### §R.5 Entity resolution

1. **Purpose + boundary.** Associating artifacts/records/candidates to the right *subject(s)* (patient, provider, operator, device, product, workforce member, tenant) — **as a candidate association with confidence, never a silent identity commit.**
2. **Classes/roles.** Bridges **S1** (multi-subject / unknown-subject / mixed artifacts) toward **S3** (Identity/MPI as the owning domain that commits identity truth). Resolution *proposes*; Identity *commits*.
3. **OMNI owns (semantics).** `candidate-association ≠ confirmed-identity`; confidence + basis + evidence for every proposed link; collision handling (two subjects, same artifact) and unknown-subject holding; the rule that Identity/MPI (S3) owns committed identity — resolution never writes identity truth by itself; multi-subject and non-patient subject support (subject-by-relationship, §6a).
4. **Pluggable/counterparty.** MPI/record-matching engines, probabilistic matching, de-id/linkage token services (Datavant-class), identity-proofing. **Buy/wrap** the engine; OMNI owns the consent + confidence + commit semantics.
5. **In/out/lineage/proof.** *In:* artifact/record + candidate identifiers + context. *Out:* candidate association(s) with confidence + basis, OR held-unknown/held-collision. *Lineage:* association → evidence used + matcher version. *Proof:* match evidence + confidence; every auto-merge/auto-link is reconsiderable.
6. **Authority/admission/commit.** Resolution is **propose-only** into Identity's adoption gate (R.7). Low-confidence/collision never auto-commits; identity merge is a governed Identity-domain event.
7. **Lifecycle + closure.** `unresolved → candidate(confidence) → confirmed | held-collision | held-unknown | rejected`. Confirmation is Identity's commit, not resolution's.
8. **Partial-failure/degraded/unknown.** Unknown/ambiguous subjects are **held as candidates** (never force-filed — cf. D7 inv 10 no-auto-file-to-chart); collisions preserved for human/authority resolution; a wrong match is reversible with lineage.
9. **Temporal/correction/revocation.** Re-resolution expected as better matchers/evidence arrive (R.13); a corrected association is additive supersession; an identity split/merge correction propagates via owning-domain correction (C4.3 Law 10.1) + R.14.
10. **Privacy/principal/tenant/jurisdiction/Federation.** Cross-org matching requires consent/linkage authority (de-id tokens + bilateral approval) — not silent cross-tenant linkage (membrane law, 15-J); re-identification risk is governed; jurisdiction bounds linkage.
11. **Agent-Runtime.** May run resolution/reconciliation missions that **propose** associations; commit stays with Identity. Never silently merges identities.
12. **Build/buy/wrap.** Matching/MPI/linkage engines = **buy/wrap** + OMNI-native consent/confidence/commit semantics (G1: MPI = plug+own; de-id = buy+own).
13. **Deferred.** MPI engine selection, token-vendor selection → procurement; identity merge/split contract → Identity domain + C5.

### §R.6 Extraction / normalization + extraction_run lineage

1. **Purpose + boundary.** Turning raw source artifacts into structured/normalized interpretations and candidates — as **versioned, attributed interpretations that adopt nothing by themselves** (`GRD-042`; layer 3, §4). One source ↔ many runs over time (`GRD-040`).
2. **Classes/roles.** Consumes **S1**; produces **candidates** for S3 (R.7) and S2 (R.8); the *machinery* is Foundry-adjacent (R.12); interpretations are not truth.
3. **OMNI owns (semantics).** `extraction_run` as a first-class re-runnable unit (immutable source · versioned+attributed interpretation · model/parser version pinned · reprocessing expected); interpretation ≠ adoption; receipt-truth preserved beneath every extraction; the honest "interpreted-but-never-adopted" representation.
4. **Pluggable/counterparty.** OCR, parsers, extraction/normalization models, entity/NER models, transcription — all **interchangeable rails** (commodity, G1). OMNI owns the run-lineage + candidate + versioning semantics, not the model.
5. **In/out/lineage/proof.** *In:* S1 artifact(s) + extraction spec + model/parser version. *Out:* structured interpretation + candidates, each linked to exact source bytes + run. *Lineage:* candidate → extraction_run → source artifact + model/parser version. *Proof:* the run is replayable (lineage/version-based, not necessarily bit-identical, §11 law 5); extraction-fidelity is a distinct gate from artifact-integrity (D7 §4 gate-2).
6. **Authority/admission/commit.** Extraction **produces candidates only**; nothing here commits S3 or accepts S2. Auto-extraction is not adoption (§9).
7. **Lifecycle + closure.** `run: queued → running → produced(candidates) | failed | partial`. A source's extraction history is open-ended (new runs by better models); no single run is "final."
8. **Partial-failure/degraded/unknown.** Partial extraction (some fields/pages unreadable) is explicit + purpose-safe (15-L); a failed run leaves the source intact and re-runnable; low-confidence extractions are candidates flagged low-confidence, never silent truth.
9. **Temporal/correction/revocation.** Re-extraction (R.13) is the norm; a later run supersedes an earlier interpretation additively (both retained, as-of reconstructable); if a source is revoked, its interpretations' *future admissibility* is invalidated without erasing the historical run (R.14/R.15).
10. **Privacy/principal/tenant/jurisdiction/Federation.** Extraction inherits source sensitivity; derived structured data (and any embeddings, §11.1) inherit the strongest applicable source classification; PHI minimization at extraction where feasible; jurisdiction may constrain where extraction compute runs.
11. **Agent-Runtime.** The runtime actor is a common *executor* of extraction/normalization missions (contradiction-scan, source-verification feed) — it **proposes candidates**; it never adopts. Model/version is captured in run evidence for replay (§G2C.4).
12. **Build/buy/wrap.** OCR/parsers/extraction models = **buy (interchangeable rail)**; the `extraction_run` lineage + candidate + versioned-interpretation constitution = **OMNI-native**.
13. **Deferred.** Extraction pipeline/orchestration engine, model routing → Agent-Runtime/Build-OS/impl; run schema → C5.

### §R.7 Domain-admission interfaces (the S1→S3 boundary)

1. **Purpose + boundary.** The governed boundary where a candidate *leaves the estate and becomes owning-domain truth* — the S1(→interpretation)→S3 commit. C4.4 **places** this boundary; **owning domains commit** (charter §2; NOT C4.4's to own).
2. **Classes/roles.** From **S1** candidates (R.6) / resolved associations (R.5) into **S3** Domain-Owned State (Clinical Memory, Identity, D6, inventory, workforce, …), each via its own adoption gate. Runtime-Ops owns only its bounded operational S3 (never domain truth).
3. **OMNI owns (semantics).** The *interface contract*: candidate carries source lineage + confidence + purpose + authority context; the owning domain's adoption gate is the only commit path; `candidate ≠ commit`; adoption never deletes the source relation (charter §2); layered accountability preserved (`D7 artifact → Observation(+verification) → Clinical-Memory assertion(+adoption) → action`, CNS §9.1).
4. **Pluggable/counterparty.** None at the *semantics* layer — commit is inherently OMNI-domain-owned. (Downstream execution rails, e.g. an EHR write-back, are counterparty concerns handled per owning domain/Federation.)
5. **In/out/lineage/proof.** *In:* candidate + lineage + authority context. *Out:* either a committed S3 assertion (by the owning domain) or a held/rejected candidate. *Lineage:* committed state → candidate → extraction_run → source; the commit records adopter + authority + as-of. *Proof:* the adoption record (who adopted, under what authority, when) — the clinical-adoption gate (D7 §4 gate-3) is distinct from extraction-fidelity + artifact-integrity.
6. **Authority/admission/commit.** This is *the* commit gate for domain truth. Authority is the **intersection/meet** of actor grant ∩ owning-domain policy ∩ capability/action envelope ∩ consent/purpose ∩ tenant/jurisdiction ∩ current validity (no scalar minimum; denial dominates — §G2C.2). AI/agents/CNS/subagents/missions **never** commit here — no silent path (§G2C.0).
7. **Lifecycle + closure.** Candidate: `proposed → in-review → adopted | rejected | held`. Adopted state then lives under the owning domain's own lifecycle (correction via that domain, C4.3 Law 10.1).
8. **Partial-failure/degraded/unknown.** Unresolved-identity or low-confidence candidates are held, not force-committed; a domain may adopt part of a candidate set; conflicting candidates surface as contradictions (survive until authorized resolution, 15-E).
9. **Temporal/correction/revocation.** Correction is the owning domain's additive supersession (never a backward rewrite, §9); if the underlying source is later invalidated, reconsideration routes back to the owning gate (R.14) — the historical commit + what-was-done-under-it are preserved.
10. **Privacy/principal/tenant/jurisdiction/Federation.** Commit obeys tenant/consent/purpose; cross-org adoption is Federation-mediated (R.16); "current" (active policy/formulary) is a domain-owned distinction from historical source (F0: old vs current formulary).
11. **Agent-Runtime.** Retrieves/proposes/executes-bounded **only**; **may submit** domain candidates through owning-domain interfaces; never directly commits care/business S3 (§G2C.6).
12. **Build/buy/wrap.** **OMNI-native** governance (the candidate→adoption interface + no-silent-commit); commit execution belongs to each owning domain's contract.
13. **Deferred.** Each owning domain's adoption-gate contract → that domain + C5; the enduring owner of Runtime-Ops operational S3 (Runtime-Ops vs Build-OS) → spine §8 (§G2C.8).

### §R.8 Reservoir admission / promotion + authority profile + review_gate

1. **Purpose + boundary.** The boundary where interpreted/curated material becomes **accepted reusable knowledge (S2)** under a multidimensional authority profile — `indexed ≠ accepted`; admission is entry to review, acceptance is adoption-as-reusable (§9).
2. **Classes/roles.** From **S1** candidates / **S4** proposals into **S2** Knowledge Reservoir (working-label family). Distinct from S3 (domain truth) and S5 (views).
3. **OMNI owns (semantics).** The `review_gate` + the multidimensional **authority profile** (`knowledge_kind · authority_basis · review_authority · scope · principal/tenant · use_ceiling · consequence_class · freshness_requirement`, §8.1 — a point in space, never a rung); the four orthogonal state-families (admission/activation/currency/materialization, §8.2); `passive capture PROPOSES · passive promotion FORBIDDEN` (15-K); risk-sensitive admissibility (stale-but-accepted = non-actionable for high-consequence, §8.2).
4. **Pluggable/counterparty.** Nothing owns S2 acceptance externally. Federated *inbound* knowledge is admitted locally (R.16; 15-J federated-publication ≠ universal-trust). Model-assisted review = proposer only.
5. **In/out/lineage/proof.** *In:* knowledge candidate + source lineage + proposed authority profile. *Out:* accepted reservoir unit (with authority profile + state) OR held/rejected. *Lineage:* reservoir unit → source(s) + derivation + admitting authority; re-derivable from sources (§2.1 reprocessing). *Proof:* admission record + authority profile + review authority; `indexed ≠ accepted` provable.
6. **Authority/admission/commit.** Admission ≠ acceptance ≠ activation. The reservoir owner + `review_gate` accepts; auto-ingest/indexing is **not** acceptance. Use is bounded by the authority profile's `use_ceiling` + `consequence_class` + currency.
7. **Lifecycle + closure.** admission: `candidate → in_review → accepted | rejected`; activation: `inactive/active/suspended`; currency: `current/stale/superseded/withdrawn`; materialization (form×status) tracked separately (§8.2). A `stale`/`superseded`-but-`accepted` unit stays accepted yet non-admissible for high-consequence use.
8. **Partial-failure/degraded/unknown.** Contradictory candidates preserved (no false-coherence averaging, 15-E); low-authority material can be admitted at a low `use_ceiling` (descriptive-only) rather than rejected; independence-weighting distinguishes N copies from N corroborations (§11.2).
9. **Temporal/correction/revocation.** Re-review by better models re-admits (R.13); correction = new version, old marked superseded (not erased, §9); revocation propagates ≥ as aggressively as publication to OMNI's own caches/indexes/projections (15-I; R.15); to **federated recipients** it propagates as the governed withdrawal/reconsideration event (R.15 Amendment-3) that the recipient dispositions locally — not a remote overwrite of the recipient's admitted S2.
10. **Privacy/principal/tenant/jurisdiction/Federation.** `principal/tenant` axis partitions bodies (patient/provider/operator/federation/OMNI-network/public); provider/operator private alpha never becomes platform-common by silent extraction (membrane law, 15-J); PHI-bearing reservoir units + their embeddings inherit sensitivity (§11.1).
11. **Agent-Runtime.** Reads per authority profile + admission/currency; **may submit** knowledge candidates to the review boundary; **never** directly accepts/promotes/mutates accepted state (no shadow reservoir; §G2C.6).
12. **Build/buy/wrap.** **OMNI-native** (knowledge admission-state + authority-profile + passive-capture-not-promotion = the compound gap, G1 §4.3). Storage/index rails under it = buy.
13. **Deferred.** Reservoir-family **roster/partition** + final family name → spine §8 / G5 (NOT G3, per handoff §3); the reservoir-contract pattern (exact enumerations) → spine §8 / C5.

### §R.9 Lineage + retrieval-unit provenance

1. **Purpose + boundary.** The connective tissue guaranteeing every derived object resolves to its exact source + derivation — so nothing becomes authoritative by being retrieved, repeated, or summarized (§11.3).
2. **Classes/roles.** Cross-cutting over S1→S6; especially binds S5/S6 retrieval units back to S1 sources + S2/S3 accepted state.
3. **OMNI owns (semantics).** Every retrieval unit → exact source artifact + derivation lineage; optional (not mandatory) linkage to an accepted semantic/domain object *without becoming authoritative through the link* (rejects "every chunk must point to an ontology node", §11.3); repetition ≠ independent evidence (15-B — this is the fourth of R.2's four identities: byte/artifact/receipt/**evidence-independence**); lineage survives index rebuilds/rail swaps.
4. **Pluggable/counterparty.** Lineage/provenance tracking infra, column/data lineage tools — **buy/wrap** as rails; OMNI owns the *cross-layer* lineage constitution (the market keeps raw+derived as two stores linked by convention; OMNI binds them as one governed corpus — G1 §4.1).
5. **In/out/lineage/proof.** *In:* every produced/derived object. *Out:* a resolvable provenance chain. *Proof:* given any answer/retrieval hit, reconstruct source + derivation + versions — the substrate for as-of replay (R.11) and reconsideration (R.14).
6. **Authority/admission/commit.** Lineage confers no authority; it *enables* authority evaluation (admissibility, freshness, revocation reach).
7. **Lifecycle + closure.** Lineage is append-only + immutable; it is never rewritten (even on correction — corrections add lineage).
8. **Partial-failure/degraded/unknown.** A unit whose lineage is broken (e.g. rename severed a link — Databricks-class fragility, G1) is a **degraded/untrusted** state, not silently trusted; missing lineage bounds use.
9. **Temporal/correction/revocation.** Lineage carries version/as-of stamps; it is what lets revocation find every dependent (R.15) and reconsideration find every promoted dependent (R.14) without a central taint-engine.
10. **Privacy/principal/tenant/jurisdiction/Federation.** Lineage records may themselves be sensitive (they reference sources) — access-governed; federated lineage is exchanged under admission (R.16).
11. **Agent-Runtime.** Every draw the runtime consumes is lineage-bearing; run evidence records source + retrieval-unit lineage + versions (§G2C.4). The runtime never strips lineage.
12. **Build/buy/wrap.** Lineage infra = **buy/wrap**; cross-layer received≠concluded + retrieval-unit-provenance + optional-ontology-link = **OMNI-native**.
13. **Deferred.** Lineage schema/graph model → C5; ontology-linkage mechanism → S5/S6 retrieval-index contract + C5.

### §R.10 Indexing / retrieval rails

1. **Purpose + boundary.** Making the estate searchable/retrievable — as **replaceable materialization/retrieval rails, NOT truth and NOT S5 projections** (15-M; §2 S5 note).
2. **Classes/roles.** Rails serving S6 assembly (R.11) and S5 compilation (R.12), drawing on S1/S2/S3. Their **chunks/embeddings/derived metadata are governed derived artifacts** inheriting source lineage + sensitivity + deletion/rebuild/eval obligations (§11.1) — but the index is not a class.
3. **OMNI owns (semantics).** `retrieved ≠ truth`, `indexed ≠ accepted`; the rule that indexes are rebuildable without losing the corpus; embeddings inherit source classification (rejects "mask-the-vector solves privacy", §11.1); permission-aware retrieval (retrieval obeys relationship/purpose/consent/tenant boundaries); revocation reaches indexes/materializations (R.15).
4. **Pluggable/counterparty.** Lexical/vector/graph/hybrid engines + rerankers + embedding stores — **fully interchangeable rails** (commodity, G1 §4.3). OMNI owns governance; the engine is swappable without lineage loss (fixture item, F0).
5. **In/out/lineage/proof.** *In:* accepted/admissible material + access context. *Out:* retrieval hits, each lineage-bearing + freshness/materialization-status stamped. *Proof:* every hit resolves to source (R.9); index staleness/invalidation state is visible.
6. **Authority/admission/commit.** An index hit is **necessary, never sufficient** — presence in an index/draw does not authorize action (point-of-consequence re-auth, §G2C.4-PoC). Indexes commit nothing.
7. **Lifecycle + closure.** materialization status per form: `absent · current · invalidated · evicted · rebuild-pending` (§8.2); eviction is an index/cache status, never deletion of evidence.
8. **Partial-failure/degraded/unknown.** A stale/invalidated index is marked (not silently served as current); permission-lag (revoked-but-still-retrievable — Copilot/Glean-class failure, G1) is the explicit failure this rail must prevent; degraded retrieval falls back safely.
9. **Temporal/correction/revocation.** On upstream change, indexes/embeddings → `invalidated`/`rebuild-pending`; revocation propagates to them ≥ as aggressively as publication (15-I; the Bedrock delete-resurrection failure, G1, is the anti-pattern).
10. **Privacy/principal/tenant/jurisdiction/Federation.** Permission-aware, tenant-partitioned retrieval; PHI-in-embeddings controls (pre-embedding minimization · purpose-specific stores · isolation · encryption · access logging · deletion verification · avoid embeddings for some consequence classes, §11.1); jurisdiction may bound embedding storage.
11. **Agent-Runtime.** Consumes retrieval hits as non-authoritative, freshness-stamped, lineage-bearing; re-evaluates authority at point-of-consequence; never treats an index as truth (§G2C.8 rejected pattern).
12. **Build/buy/wrap.** Retrieval/vector/graph/rerank/embedding engines = **buy (interchangeable rail)**; permission-aware + revocation-reaching + embeddings-inherit-sensitivity semantics = **OMNI-native**.
13. **Deferred.** Engine selection + hybrid strategy → procurement/impl; retrieval-index contract (chunk/embedding governance) → C5.

### §R.11 Context Router assembly (S6)

1. **Purpose + boundary.** Assembling the **smallest-sufficient, purpose-/authority-scoped Mission Context (S6)** for one run/mission — a transient draw, as-of reconstructable, not a durable body or truth (§10).
2. **Classes/roles.** **S6** assembly, drawing across S1/S2/S3/S5 via retrieval rails (R.10). Distinct from CNS (orchestrates) and Foundry (compiles) and the runtime (consumes).
3. **OMNI owns (semantics).** Assembly discipline (smallest-sufficient; trust > tokens); evidence clustering + independence weighting (collapse duplicate transmission; preserve corroboration/recurrence/chronology/authority/dissent — §11.2; NOT naive dedup); the draw carries admissibility + use-ceiling + freshness of each unit; the Router owns *assembly*, never the *meaning or authority* of assembled content (§10).
4. **Pluggable/counterparty.** Retrieval rails (R.10) it draws through; context-assembly libraries as mechanism (wrapped, never governance — `GRD-033`).
5. **In/out/lineage/proof.** *In:* mission purpose + actor/authority context + admissibility constraints. *Out:* an assembled S6 draw. *Lineage:* the draw is captured as an **immutable S1 run-context receipt** (permitted payload and/or references · hashes · versions · lineage · policy · authority-evaluation, §G2C.4). *Proof:* as-of reconstruction of what was available/assembled when the run acted.
6. **Authority/admission/commit.** The Router assembles admissible material; inclusion **does not preauthorize action** (§G2C.4-PoC). The draw commits nothing; it enforces the intersection/meet of constraints per unit (not a scalar minimum).
7. **Lifecycle + closure.** A draw is per-mission/ephemeral; its immutable *evidence* (the S1 receipt) persists for replay; the draw itself is not converted into a durable truth body by the replay requirement (§G2C.4 patch C).
8. **Partial-failure/degraded/unknown.** If required admissible context is unavailable, the run proceeds degraded/narrowed or escalates — it never fabricates coverage; contradictions are surfaced, not averaged.
9. **Temporal/correction/revocation.** As-of by construction (C4.5 seam); on mid-run revocation the run may pause/terminate/narrow/re-assemble and the transition is recorded, while the S1 receipt of what it already saw remains immutable (R.15; §10 scenario 7).
10. **Privacy/principal/tenant/jurisdiction/Federation.** Purpose/consent/tenant/jurisdiction bound the draw (smallest-sufficient minimizes PHI exposure); federated content is drawn only if admitted (R.16).
11. **Agent-Runtime.** **Consumes** the assembled draw; does not author or re-authorize it (§G2C.6). This is the primary S6↔runtime seam.
12. **Build/buy/wrap.** **OMNI-native** assembly + independence-weighting + admissibility-enforcing semantics; retrieval mechanism under it = buy.
13. **Deferred.** Router selection/exclusion mechanics + contradiction-handling detail → Agent-Runtime formulation (`FWREG-010`) + spine §5/§7 CNS; the Router contract → C5.

### §R.12 Foundry maintenance-mission machinery (§10)

1. **Purpose + boundary.** The **active machinery** that compiles projections (S5) and tends reservoirs (S2) by running governed **maintenance missions** — separated from the passive bodies it tends (§10). Foundry owns compiler execution + rebuild/materialization state + compiler lineage, **never the semantic meaning** of a projection (each S5 has an accountable steward).
2. **Classes/roles.** Machinery producing **S5** and tending **S2**; runs the five C4.4 mission classes: `contradiction-scanning · source-verification · candidate-reconciliation · routing · maintenance`.
3. **OMNI owns (semantics).** The mission-class boundaries (permitted inputs/operations · **PROPOSE-only** ceiling · proof/lineage/rollback/review · promotion/invalidation boundaries); compiler lineage + freshness stamping; regeneration without losing the corpus; steward-per-projection accountability.
4. **Pluggable/counterparty.** Compute/orchestration for compilation jobs; model-assisted maintenance (as proposer). **Buy/wrap** the compute; OMNI owns the mission constitution.
5. **In/out/lineage/proof.** *In:* S1/S2/S3 + a maintenance-mission spec. *Out:* regenerated S5 projections + reservoir-tending proposals (candidates). *Lineage:* projection → compiler version + source set + freshness; mission → its proposals + evidence. *Proof:* compiler lineage; mission proposals are source-linked candidates, never commits.
6. **Authority/admission/commit.** Missions **PROPOSE + ROUTE**; they never accept/adopt/commit (§10). C4.4 *defines the accepted candidate* mission-class boundary for this arc; the enduring owner/steward is assigned at C5/spine (§G2C.5). **★ Amendment-1 fence:** Foundry may compile *views over* the Architecture Memory Control Plane and may **propose** catalog/read-graph/decision/guardrail/ledger changes — it may **never regenerate, overwrite, or commit** that canonical governance state (it is committed owner-state, R.4/§2.1, not a disposable S5 projection). **Symmetric rule (why row-first/passport/gate discipline exists):** the Agent Runtime is likewise a *proposer* into the control-plane's own governed-commit gate — no actor (Foundry, agent, subagent, mission) silently commits governance state; the same `candidate ≠ commit` law that protects S3 domain truth protects S3 governance truth.
7. **Lifecycle + closure.** Projection: `absent → building → current → stale → invalidated → rebuild-pending`; missions are ephemeral runs with proof/rollback.
8. **Partial-failure/degraded/unknown.** A failed compile leaves the prior projection marked stale (not a silent blank); partial maintenance is explicit; contradictions found are preserved + routed, not auto-resolved.
9. **Temporal/correction/revocation.** Rebuild after upstream disposition (R.14); on revocation, affected projections → invalidated/rebuild-pending (R.15); as-of reconstruction can show a projection's prior compiled state + version.
10. **Privacy/principal/tenant/jurisdiction/Federation.** Projections inherit source sensitivity + tenant scope; maintenance missions obey the same admissibility as any reader; federated maintenance is admission-bounded.
11. **Agent-Runtime.** The runtime is a common *actor instantiated to perform* maintenance missions (ephemeral, bounded by the mission class) — it consumes the versioned boundary + owns only actor/harness instantiation; **no permanent `ScoutAgent`/`CapperAgent` roster** (§G2C.5).
12. **Build/buy/wrap.** **OMNI-native** mission constitution + stale-projection self-marking (compound gap, G1); compilation compute = buy.
13. **Deferred.** Full Foundry framework + CNS orchestration of missions → spine §5/§7/§8 + `CNS_orchestration_contract`; enduring mission-steward assignment → C5/spine.

### §R.13 Reprocessing

1. **Purpose + boundary.** Re-running interpretation/extraction/admission/compilation over retained sources as models, rules, ontologies, or policies improve — **one source ↔ many runs over years** (`GRD-040`); the whole estate is reprocessable by a newer model (F0).
2. **Classes/roles.** Operates over **S1** (re-extraction → new candidates), **S2** (re-admission by better review), **S5** (rebuild); never mutates the immutable source.
3. **OMNI owns (semantics).** Reprocessing as expected + governed (not a one-shot pipeline); every reprocessing run is a new versioned run (additive), old interpretations retained; corpus-scale reprocessing lineage (the S1 gap, §6b — "no corpus-scale reprocessing/extraction_run lineage" today).
4. **Pluggable/counterparty.** Batch/stream compute, model versions — **buy**; OMNI owns the run-versioning + coverage semantics.
5. **In/out/lineage/proof.** *In:* retained sources + new model/rule/ontology version + scope. *Out:* new runs/candidates/projections. *Lineage:* new run → source + new version, superseding-not-erasing prior. *Proof:* coverage of what was reprocessed + version delta; as-of reconstruction of pre- and post-reprocessing state.
6. **Authority/admission/commit.** Reprocessing produces **candidates**; re-adoption/re-acceptance still goes through R.7/R.8 gates. Re-running never auto-commits.
7. **Lifecycle + closure.** A reprocessing campaign is itself a bounded package/epoch (R.3) — closable with coverage + exceptions.
8. **Partial-failure/degraded/unknown.** Partial reprocessing (subset of corpus) is explicit; sources that fail re-extraction stay at their last-good interpretation, flagged.
9. **Temporal/correction/revocation.** The core temporal engine of the estate: supports as-of ("what did the estate conclude *then* vs *now*"); reprocessing does not rewrite history — it adds a new as-of layer (C4.5).
10. **Privacy/principal/tenant/jurisdiction/Federation.** Reprocessing must honor current consent/retention (a source withdrawn/pseudonymized is not resurrected for reprocessing); tenant/jurisdiction scope preserved.
11. **Agent-Runtime.** Frequently the executor of reprocessing missions (R.12); proposes new candidates; commit stays at the gates.
12. **Build/buy/wrap.** **OMNI-native** corpus-scale reprocessing lineage; compute = buy.
13. **Deferred.** Reprocessing scheduler/orchestration → Agent-Runtime/Build-OS/impl; reprocessing-run schema → C5.

### §R.14 Correction + reconsideration (F-Inv)

1. **Purpose + boundary.** Handling the case where already-accepted/promoted knowledge (S2) or committed truth (S3) or a doctrine dependent is later found superseded, misread, or built on an invalid assumption — **FLAG, do not silently rewrite**; preserve what-was-decided AND what-was-done (§9; the F-Inv fixture).
2. **Classes/roles.** Spans **S1** (source found superseded), **S2** (accepted unit re-reviewed), **S3** (owning-domain correction), **S5** (regenerate after disposition), doctrine (already-promoted dependent).
3. **OMNI owns (semantics).** Reconsideration as a **governed, versioned assessment over distributed lineage with explicit uncertainty** — aligned to C4.3 Law 10.1 (**no universal ledger, no central taint-engine**; owning domains commit their own corrections; Accountability owns admitted obligations only); additive supersession; preserve historical truth + actions taken under the former accepted state; regenerate projections **only after** disposition.
4. **Pluggable/counterparty.** None at the semantics layer (reconsideration is inherently governed); lineage infra (R.9) is the substrate.
5. **In/out/lineage/proof.** *In:* an invalidation signal (source withdrawn/superseded/misread) + lineage of dependents (R.9). *Out:* flagged dependents + routed reconsideration + (post-disposition) regenerated projections. *Lineage:* the reconsideration event → affected units → owning gates. *Proof:* both the original accepted state AND the reconsideration are reconstructable; nothing erased.
6. **Authority/admission/commit.** Reconsideration is an **assessment**, not an authority — it *identifies + routes*; only owning gates re-decide (re-adopt/retire/supersede). No central engine commits corrections.
7. **Lifecycle + closure.** signal → dependent-identification → routed reconsideration → per-owner disposition → projection regeneration. Closure is per-owning-home, tracked with coverage (which dependents dispositioned).
8. **Partial-failure/degraded/unknown.** Uncertainty is explicit (a dependent may be "possibly affected"); a dependent whose owner has not yet dispositioned is flagged (future use bounded) without blocking unaffected work.
9. **Temporal/correction/revocation.** The correction/reconsideration heart: additive-only; as-of replay shows the pre-correction world; ties to R.15 revocation for cache/index/projection invalidation.
10. **Privacy/principal/tenant/jurisdiction/Federation.** Reconsideration crossing tenants/federation propagates as a governed exchange (R.16) that the recipient **dispositions locally** (R.15 Amendment-3 — no cross-sovereign taint-commit); privacy constrains what evidence of the former state is retained (sufficient, not raw-forever).
11. **Agent-Runtime.** May run contradiction-scan/source-verification missions that **surface + propose** reconsideration; never rewrites history; a live run receiving an invalidation may pause/narrow while its S1 receipt stays immutable (§G2C.4).
12. **Build/buy/wrap.** **OMNI-native BUILD** (dependency-aware invalidation + governed reconsideration = the compound gap; no surveyed platform composed it, G1 §4.1/§4.2).
13. **Deferred.** The reconsideration contract + Accountability's admitted-obligation seam → C5 + Accountability domain + C4.5 (temporal); dependency-graph mechanics → impl.

### §R.15 Retention / deletion / revocation propagation

1. **Purpose + boundary.** Governed end-of-life + access-withdrawal across the estate: retention, deletion/pseudonymization, legal-hold, archival, and **revocation that propagates ≥ as aggressively as publication** (15-I; EVSRC-314) — **explicit, additive, lineage-preserving** (charter §2; 15-C).
2. **Classes/roles.** Spans **S1** (source retention/deletion), **S2** (retire/supersede — eviction ≠ deleting evidence), **S3** (domain retention + GDPR pseudonymize-not-delete), **S5**/indexes (invalidate/evict/rebuild).
3. **OMNI owns (semantics).** Retention/deletion/legal-hold as governed events (never silent); `eviction ≠ deletion`; deletion/pseudonymization preserves audit (GDPR-erasure-preserves-audit, D7 inv 24); source-integrity (historical) vs current-applicability separated (§2.1). **★ Amendment-3 — four distinct revocation-family events, never conflated into "revocation rewrites everyone":** **(1) grant/access revocation** — stops future access/use under the originating grant (within OMNI's own scope, propagates to its own caches + retrieval indexes/embeddings + S5 projections); **(2) source/knowledge withdrawal or supersession** — marks published material withdrawn and *triggers recipient-side admissibility-blocking + reconsideration*; **(3) deletion/destruction request or obligation** — executes only where law, contract, local retention duty, and legal holds permit, else records an explicit exception; **(4) recipient local reconsideration** — the recipient's own reservoir/domain/governance owners decide correction/retirement/supersession/continued-lawful-retention. **Within OMNI's own custody**, revocation reach = its caches + indexes/embeddings + projections. **Across a sovereign boundary** (another operator that has lawfully received + locally admitted material), "revocation reaches recipients" means the **governed event + affected-set evidence + acknowledgement obligation + future-use constraint** reach them — it does **NOT** grant the originator authority to rewrite/erase the recipient's independently-lawful S1 custody, locally-admitted S2, or locally-committed S3 (15-J membrane; D7 custody≠visibility; no cross-sovereign taint-engine, R.14).
4. **Pluggable/counterparty.** WORM/legal-hold/lifecycle features of storage; de-id engines; deletion-verification tooling — **buy/wrap**; OMNI owns the propagation + audit-preservation semantics.
5. **In/out/lineage/proof.** *In:* a retention/deletion/revocation event + affected-set lineage (R.9). *Out:* propagated invalidation/deletion + preserved audit. *Proof:* deletion-verification (the Bedrock delete-resurrection failure is the anti-pattern, G1); revocation-coverage proof (everything reachable was reached).
6. **Authority/admission/commit.** These are governed events requiring authority (legal basis, consent withdrawal, policy); not model-initiated. Revocation authorization dominates (denial-dominates).
7. **Lifecycle + closure.** retention window → (legal-hold overrides) → pseudonymize/expire/archive/destroy; revocation: `requested → propagating → verified-complete | partial-with-exceptions`.
8. **Partial-failure/degraded/unknown.** Propagation to a stale index/cache that lags is a first-class *not-yet-complete* state (permission-lag prevented, not tolerated); items under legal-hold are exempted explicitly; failure to reach a federated recipient is surfaced. **★ Amendment-3 — lawful-retention exception is bidirectional:** where a recipient *lawfully refuses or partially executes* a deletion demand (its own legal-hold/retention duty overrides), that produces a **governed, acknowledged exception that flows BACK to the originator** — so revocation "completeness" honestly includes `reached-but-lawfully-retained-with-exception`, never silent non-compliance and never a false "verified-complete."
9. **Temporal/correction/revocation.** The revocation half of the temporal/correction story; preserves as-of reconstruction (historical truth stays) while withdrawing future admissibility (C4.5).
10. **Privacy/principal/tenant/jurisdiction/Federation.** GDPR/42-CFR-Part-2/jurisdictional erasure + consent-withdrawal are the primary drivers; cross-org revocation propagates via R.16 (revocation reaches federated recipients — the market-weak spot, G1).
11. **Agent-Runtime.** A revocation-propagation target + proposer; invalidates its caches/materializations + future admissibility; **never rewrites the S1 receipt** of what a past run saw (§G2C.4); running work may pause/narrow.
12. **Build/buy/wrap.** **OMNI-native** revocation-propagation + audit-preserving-deletion semantics; storage lifecycle + de-id = buy/wrap.
13. **Deferred.** Retention/deletion/revocation contracts → owning domains + Federation/RBAC + C5; propagation mechanics → impl; temporal-validity detail → C4.5.

### §R.16 Federation exchange (publish / admit / revoke)

1. **Purpose + boundary.** Governed cross-operator/cross-org exchange of source artifacts, packages, and (admitted) knowledge — publish, admit, revoke — **without a flattened shared chart or universal-trust** (D7 §8; 15-J).
2. **Classes/roles.** Bridges **S1** (federated source admission — the F0 fixture), **S2** (federated knowledge admit — CQ-style publish→admit→revoke), and cross-org **S3** visibility (scoped grants); Federation owns the cross-operator grant substrate.
3. **OMNI owns (semantics).** `federated publication ≠ universal trust` (locally admitted, 15-J); membrane law (private alpha never silently platform-common); admit is a **local admission gate** (R.1/R.8 apply to inbound); the **four revocation-family events (R.15 Amendment-3)** propagate as governed event + affected-set + acknowledgement + future-use-constraint — the publisher revokes *its grant* / withdraws *its source* / may demand deletion *where lawful*, but **does not remotely rewrite the recipient's locally-admitted S2 or locally-committed S3** (recipient dispositions locally; symmetric to `admit is local`, 15-J); scoped visibility grants (per recipient/purpose/duration, D7 §6) — custody ≠ visibility.
4. **Pluggable/counterparty.** Exchange standards/rails (bulk-data/FHIR-class exchange, interchange formats like OKF at the boundary), QHIN/network transports, de-id/linkage — **buy/wrap at the boundary; OMNI-governed on admission/use** (OpenWiki lesson: OKF-compatible on exchange, OMNI-governed on admission).
5. **In/out/lineage/proof.** *In:* published/received packages + counterparty identity + purpose + grant. *Out:* admitted source/knowledge (locally gated) or published artifacts under scoped grants. *Lineage:* federated origin + admitting authority + grant scope. *Proof:* admission receipt + grant provenance + revocation reach across the boundary.
6. **Authority/admission/commit.** Inbound is admitted locally (never auto-trusted); outbound is scoped by grant + consent + purpose; commit of admitted material still flows through R.7/R.8.
7. **Lifecycle + closure.** publish → (recipient) admit → use-under-grant → revoke. **★ Amendment-3 — match the exchange shape to the right R.3 profile:** a **discrete delivery package** is a bounded corpus (profile A, closable); an **ongoing federation synchronization relationship or event feed** is profile B (never globally closes — bounded epochs/ingestion-windows/watermarks with exceptions). Do not force a continuous feed into a single closable package.
8. **Partial-failure/degraded/unknown.** Timeouts/partial exports (Particle-class TIMEOUT-partial + deltas) are first-class; unreachable recipients on revoke are surfaced; unknown counterparties are quarantined.
9. **Temporal/correction/revocation.** Corrections/incremental federated deliveries are additive; revocation must reach federated recipients ≥ as aggressively as publication (the hardest market gap, G1); as-of reconstruction of what was shared/when.
10. **Privacy/principal/tenant/jurisdiction/Federation.** The center of gravity here: consent-specificity, permitted-purpose (technically-enforced, not contractual-only — the Carequality/Particle lesson, G1), jurisdiction, cross-org linkage authority; provider/operator private-alpha membrane.
11. **Agent-Runtime.** May drive federated admission/reconciliation missions (propose/route); never auto-admits high-consequence federated content; commit stays gated.
12. **Build/buy/wrap.** Exchange standards/transports/de-id = **buy/wrap (OKF-compatible-on-exchange)**; local-admission + membrane + permitted-purpose-enforcement + revocation-reach = **OMNI-native**.
13. **Deferred.** The Federation domain contract (cross-operator grant substrate is Federation-owned, not yet drafted — D7 §6/`REV-157`) → Federation pass + C5; exchange-standard selection → procurement.

### §R.17 Build / buy / wrap per mechanism (from the G1 §4.2 matrix — accepted input, not re-derived)

**Method (per mechanism family; using the G1 semantic × realization × posture axes):** classify each as one of — **OMNI-owned governance semantics** · **native domain responsibility** · **reusable open standard** · **infrastructure plug point** · **buy/wrap candidate** · **implementation-only concern** · **reject**. Discipline (charter §15 + G1 §4.3 + 15-O): OMNI **out-governs**, does not out-build; "not found in a bounded survey" ≠ "does not exist"; comparators (Palantir/Databricks/Microsoft/AWS/Google/Snowflake/Elastic/LangChain/LlamaIndex/Glean/OpenAI/Anthropic/…) are **evidence, never architectural authorities**; **no vendor is selected here.**

| mechanism family | §R sections | build/buy/wrap disposition | what OMNI owns semantically |
|---|---|---|---|
| Object storage / raw custody | R.2 | **buy/wrap** (infra plug point) | four-identity discipline (blob-dedup = storage-only; artifact/receipt identity = provenance+source, not hash; evidence-independence separate) · typed-copy · custody roles · WORM policy |
| Lakehouse / compute | R.2/R.6/R.13 | **buy** (plug point; OMNI is NOT a lakehouse) | none of the storage engine; only what runs on it is governed |
| Parsers / OCR / extraction + embedding models | R.6/R.10 | **buy (interchangeable rail)** | extraction_run lineage · versioned interpretation · candidate discipline |
| Lexical/vector/graph/hybrid retrieval + rerank | R.10 | **buy (interchangeable rail)** | permission-aware retrieval · revocation-reach · rebuild-without-corpus-loss |
| MPI / record matching | R.5 | **buy/wrap + OMNI-native** | candidate≠confirmed · confidence/basis · commit-stays-with-Identity |
| De-id / cross-org linkage tokens | R.5/R.16 | **buy/wrap + OMNI consent semantics** | consent · linkage authority · re-identification governance |
| Data catalog / lineage / classification infra | R.4/R.9 | **buy/wrap** (plug point) | five-axis classification · metadata-quality-state · presence≠authority · cross-layer lineage |
| Exchange standards / interchange (bulk-data, FHIR-class, OKF) | R.16/R.1 | **reusable open standard (wrap on exchange)** | local-admission · membrane · permitted-purpose-enforcement |
| **Package/manifest completeness + quarantine + closure** | R.1/R.3 | **OMNI-native BUILD** | the whole corpus-admission envelope (compound gap) |
| **Received ≠ concluded as ONE versioned governed corpus** | R.2/R.3/R.6/R.9 | **OMNI-native BUILD** (+ buy storage) | binding raw + all typed derivations + invalidation as one lifecycle |
| **Knowledge admission-state (indexed≠accepted) + passive-capture-not-promotion** | R.8 | **OMNI-native BUILD** | authority profile · review_gate · state-families |
| **Dependency-aware invalidation + governed reconsideration (F-Inv)** | R.14/R.15/R.16 | **OMNI-native BUILD** | assessment-not-taint-engine · additive · history-preserving · four revocation-family events · recipient-sovereign (no cross-operator overwrite) |
| **Stale-projection self-marking + contradictions-survive** | R.10/R.12 | **OMNI-native BUILD** | freshness/compiler-lineage · non-authoritative · dissent preserved |
| **Technically-enforced permitted-purpose** | R.7/R.10/R.16 | **OMNI-native** (Federation/RBAC/consent compose) | purpose/consent/authority enforced, not contractual-only |
| No-*interpreted/domain*-truth-without-governed-commit / retrieved≠truth | R.7/R.8/R.10 | **OMNI-native architectural differentiation** | candidate≠commit · the gates. **★ Amendment-5:** the rule bars *interpreted/domain truth or accepted reusable knowledge* without governed acceptance/commit; **S1 receipt-truth (provenance/signature/authorship/transmission/exact-received-payload/legal-occurrence) remains authoritative within its scoped evidentiary meaning** (§2 S1), which is not a "commit" of content |
| Ontology / knowledge→governed-action | R.4/R.9 | **OMNI-native semantics** (reject vendor-ontology-as-identity) | optional-link-without-authority · own-your-semantic-constitution |
| Runtime/agent orchestration under all of the above | R.11/R.12 (+ `FWREG-010`) | **OMNI-native governance; buy the compute** | actor consumes; owns none of S1–S6 |

**Guardrail (15-O, applied):** this matrix records dispositions, **not a moat claim**. The OMNI-native BUILD items are *candidate* differentiation whose defensibility depends on implemented behavior + measured fidelity (not established pre-build); the strategic "can an incumbent compose faster?" question is bounded-deferred to Task-D (§16), not decided here.

---

### §R.CORPUS — Load-bearing G3 decision: D7 / artifact / corpus-parent placement (the verdict G2 deferred to G3)

G2 (§6) resolved the *boundary* (a subject-agnostic artifact primitive is needed; reuse D7's per-artifact physics) and **deferred PLACEMENT to G3**. G3 must adjudicate, at architecture level, the relationship among: (i) D7 per-artifact custody physics; (ii) Source-Estate corpus/package identity + lifecycle; (iii) multi-subject / unknown-subject / non-patient / mixed-source artifacts; (iv) package/collection completeness + closure; (v) artifact identity vs corpus membership; (vi) operational/federation source admission. **No schema. Do not call everything a `patient_document`. Do not create a new domain to avoid deciding.**

**Placements evaluated:**
- **P1 — Widen D7 in place** (make `patient_document` subject-agnostic + graft a corpus/package parent inside D7). *Rejected as the whole answer.* It correctly reuses D7's proven physics but overloads a patient-subject-shaped, materialization-layer domain with a cross-cutting corpus-admission lifecycle (completeness/quarantine/closure/corpus-scale reprocessing/received-but-unadopted) that is not D7's constitutional job (D7 = the durable-artifact/materialization layer, §1). It risks a god-domain and buries the S1 corpus semantics inside a domain whose center of gravity is the per-patient chart artifact.
- **P2 — A brand-new domain owning artifacts + corpus.** *Rejected.* It would duplicate D7's per-artifact custody physics (custody/integrity/one-canonical-many-grants/fingerprint-dedup/upload_event/open-document_kind/5-disposition/federation-ready lineage) — a second artifact authority (violates 15-D no-second-authority; `GRD-035`). Creating a domain to avoid a placement decision is the anti-pattern the prompt names.
- **P3 — Reuse D7 per-artifact physics for the `artifact` primitive; add a Source-Estate-owned corpus/package layer ABOVE D7 artifacts.** **★ ADOPTED (G3 verdict).**

**The G3 verdict (P3), stated at architecture level:**
1. **Artifact identity + custody = D7's proven physics, generalized to subject-agnostic.** The `artifact` primitive is **subject-agnostic with subject-by-relationship** — reusing D7's custody/integrity/one-canonical-many-grants/visibility physics under the **four-identity discipline (Amendment-2):** blob-dedup shares storage; **artifact identity is fingerprint + source metadata (not hash alone); every receipt/upload event is preserved; evidence-independence is separate.** Precedent already exists in-estate: D7 §10 `SC-D7-BIZOPS-001` already reuses the open `document_kind` + `signature_envelope` + one-canonical-many-grants shape for a `workforce_member` subject ("subject-agnostic artifact discipline is the contract; same-table-vs-sibling is a build detail"). So this is a **directionally-admitted extension of D7's discipline, not a new invention.** Whether the subject-agnostic artifact lives in a widened D7 table or a sibling is a **C5/build detail, not an architecture decision** — the *contract* is subject-agnostic artifact identity + subject-by-relationship reusing D7 physics.
2. **The corpus/package parent is a Source-Estate-owned S1 layer ABOVE D7 artifacts — NOT inside D7, NOT a new plane, NOT a god-store.** It owns *governance semantics only* — package identity · declared-vs-received completeness · quarantine · closure (both §7 profiles A/B) · corpus-scale reprocessing/extraction_run lineage · received-but-unadopted honesty — and **references** D7 artifacts (M:N membership, references not copies, consistent with D7's `patient_document_linkage` discipline). It plugs into object-storage/lakehouse rails it does not own (R.2). D7 continues to own per-artifact durable physics; the corpus layer owns corpus-level lifecycle. **Custody (D7, per-artifact) and corpus membership/lifecycle (Source-Estate, corpus-level) are distinct and must not collapse** (§6 guard).
3. **Multi-subject / unknown-subject / non-patient / mixed-source artifacts** are handled by (a) subject-agnostic artifact identity + subject-**by-relationship** with confidence (R.5: `candidate-association ≠ confirmed-identity`; unknown/collision held as candidate) and (b) corpus membership being independent of subject resolution (an artifact belongs to a package regardless of whether its subject is resolved). A non-patient artifact in a patient folder is a *classification/association* concern (R.4/R.5), not a reason to force a `patient_document` type.
4. **Artifact identity vs corpus membership are orthogonal:** one artifact may belong to multiple packages/collections (an export + a correction package + a legal export) via typed membership, without duplicating the canonical artifact (15-D). Corpus membership is a relationship, not a copy.
5. **Operational/federation source admission** rides R.1 (landing/quarantine) + R.3 (package/closure) + R.16 (federation admit) — the corpus layer is where a federation's declared export becomes a governed, closable package; D7 is where each file becomes a custodied artifact.

**Boundary summary (the verdict in one line):** *D7 owns the artifact (custody/integrity/visibility, generalized subject-agnostic, under the four-identity discipline); the Source-Estate S1 corpus layer owns the package/collection above D7 artifacts (identity/completeness/quarantine/closure/reprocessing/received-but-unadopted); membership references, never copies; closure is immutable-once-closed (corrections are new superseding packages — Amendment-4); same-table-vs-sibling and all schema are C5/build detail.*

**★ Amendment-5 precision — who commits corpus admission/closure (name the role, not a new domain).** Package admission and closure are **committed by the admitting operator/federation's authorized S1 custody-governance function** (a deterministic control-plane commit, not model judgment — the role R.3 point 11 refers to as "the Source-Estate custody owner") **under the future Source-Estate contract**. This names the *committing authority role + its source*; it does **not** mint a new domain, and the enduring institutional home for that role remains a **spine §8 / C5** decision.

**Deferred (correctly, per hard stops):** the exact schema/table/type placement (widened D7 vs sibling) → C5 + D7 contract; the corpus-layer contract minting → C5; the enduring owner label for the Source-Estate corpus layer within the S1 family → spine §8 (no roster/name at G3).

---

### §R.FIX — Fixture design traces (F0 · F-Self · F-Inv) — DESIGN TRACES, not G4 scoring

Per charter §9 + G2 §14: **G3 traces the completed §R through the three accepted fixtures to show the architecture flows cleanly** (what enters · which home owns each stage · what proceeds despite partial failure · what is quarantined/unknown · what becomes candidate/accepted-knowledge/domain-truth/projection/assembled-context · how correction/revocation propagates · what proves the result). **G3 does NOT score the fixtures — G4 owns the frozen adversary + rubric.**

**F0 — Federation Source-Estate Admission** (3,000-patient spreadsheet + 50,000 mixed files + corrupt/password-protected + duplicates/collisions + unknown/multi-subject + old/current formularies + vendor sheets + incremental export + correction package):

| stage | §R section | home / class | what happens |
|---|---|---|---|
| the export arrives | R.1 → R.3 | S1 landing → corpus package (profile A) | received-and-accounted; declared-vs-received reconciled; **package closes with visible exceptions** |
| each file | R.2 | S1 artifact (D7 physics, §R.CORPUS) | artifact identity = fingerprint **+ source metadata** (not hash alone); blob-dedup shares storage; **every receipt preserved as an `upload_event`** (not 3,000 uncontrolled originals *and* not silently collapsed receipts, 15-D + Amendment-2) |
| corrupt / password-protected | R.1 | S1 quarantined | preserved, not dropped; 49,999 valid siblings proceed (15-L purpose-safe partial admission) |
| duplicates / collisions | R.2 / R.5 / R.9 | S1 four-identity / entity resolution / evidence-independence | blob-dedup shares storage but **preserves each distinct receipt**; byte-identical ≠ same artifact when provenance differs; **repetition ≠ corroboration** (independence evaluated at R.9/R.11); subject collisions **held as candidates** (candidate≠confirmed) |
| unknown / multi-subject | R.5 | held-unknown / subject-by-relationship | corpus membership independent of subject resolution (§R.CORPUS #3–4) |
| extracted patient facts | R.6 → R.7 | S1 candidate → S3 (owning domain adopts) | interpretation adopts nothing; owning domain commits via adoption gate |
| provider CO₂ preferences | R.6 → R.8 | reservoir candidate (operational `knowledge_kind`) | provider preference ≠ clinical doctrine; admission-gated (indexed≠accepted) |
| old vs current formulary | R.2 / R.7 | both retained (S1); "current" = S3 per owner | historical instruction ≠ active policy; vendor doc ≠ current formulary |
| vendor price sheets | R.6 → R.7 | S1 → D6 domain candidate | receipt-truth ≠ content-truth |
| searchable index over it all | R.10 | retrieval rail (NOT S5, NOT truth) | rebuildable without losing the corpus; permission-aware; swap engine without lineage loss |
| assemble context for a care mission | R.11 | S6 draw (Context Router) | smallest-sufficient, purpose-scoped; immutable S1 run-context receipt for replay |
| correction package invalidates part of export 1 | R.3 → R.14 → R.15/R.16 | correction (additive) + F-Inv if promoted | **export 1 stays closed (historical receipt fact, Amendment-4)**; the correction package additively supersedes a *named scope* + opens new reconciliation/reconsideration + may reopen *downstream processing* for that scope — never the original receipt closure; revocation reaches OMNI's own indexes/projections, and reaches federated recipients as a governed event they disposition locally (Amendment-3) |

*Trace holds: every F0 item routes to a home; partial failure stays visible; nothing is forced; the whole estate is reprocessable (R.13); no leftover bucket.*

**F-Self — OMNI's own architecture/build/evidence estate** (transcripts/uploads/EVSRC · analyses/interpretations · doctrine/contracts · decisions/guardrails · catalog/read-graph/handoffs · continuous open-ended corpus · leak-at-pivots + re-derivation risk):

| stage | §R section | home / class | what happens |
|---|---|---|---|
| transcripts / uploads / EVSRC | R.1/R.2 | S1 Source Estate (profile **B**, open-ended) | closable coverage epochs/watermarks, never globally closed (§7B) |
| analyses / interpretations | R.6 | layer-3 versioned interpretations (candidates) | attributed + versioned; adopt nothing by themselves |
| doctrine / contracts | R.7 | S3 Domain-Owned State / P0 doctrine | committed; correction via owning gate |
| promoted decisions / guardrails (ratified `DEC`/`GRD` rows) | R.7-analogue | **committed governance state (S3-role, governance domain)** — NOT S2 | authoritative within the doctrine/control-plane scope; corrected via the owning governance gate, not demoted to reusable reference; passive-capture-proposes-never-promotes |
| **canonical control plane** — master corpus catalog `01` · manifest read-graph `04` (incl. binding pointer #15) · decision `03` · guardrail `06` · supersession / open-review ledgers | R.4(b)/R.12 fence | **committed governance state (S3-role, governance domain)** — NOT S5, NOT regenerable-as-disposable | authoritative in control-plane scope; Foundry/agents **propose**, never regenerate/commit; **triple-pointer drift is a governance-commit-discipline failure, not a projection-staleness event** |
| handoffs / boot packets | R.1/R.2 | **S1 nonbinding continuity + source evidence** (`derived_nonbinding`) | preserved as durable continuity artifacts; NOT canonical governance state and NOT automatically S5 |
| generated nav / search / boot-summary / dashboard views over the control plane | R.12 | **S5 Compiled Projection** | regenerable, cited, non-authoritative (`DEC-033`) — the *only* control-plane-adjacent thing that is S5 |
| **the missing thread→uploads→EVSRC→decisions→guardrails→catalog→commit manifest** | R.3 | **S1 open-ended-corpus admission envelope** | the concrete self-estate instance of the corpus-admission gap (§6b/§7B) — the manifest R.3 defines |
| leak-at-pivots / re-derivation | R.11/R.14 | S6 checkpoint discipline + reconsideration | controlled checkpoint/rehydration (runtime §3); conversation = execution context, not canonical memory |

*Trace holds: the G1 10-species census maps without a leftover; the open-ended profile-B corpus + the missing-manifest gap are exactly what R.3 addresses.*

> **★ Amendment-1 bounded G3 clarification (fixture-routing only; does NOT reopen the six-class constitution).** This corrected F-Self routing **supersedes the earlier G2 §14 F-Self classification** that placed OMNI's catalog/read-graph as S5 and promoted decisions/guardrails as S2. The correction is scoped to *how the F-Self fixture routes* — the six classes themselves are unchanged. **Constitutional resolution used here:** OMNI's Architecture Memory Control Plane is **S3 (Domain-Owned State) where the owning domain is the control plane itself** — committed, authoritative-within-scope governance truth. This is deliberately **NOT** a new seventh class and **NOT** a "P0 class" inside the six (P0 is a *plane*, not one of the six constitutional classes; minting one would be the back-door god-class G3 must avoid). **Bounded-deferred (owner + trigger):** whether the constitution should carry an *explicit* governance-control-plane role or continue to treat it as S3-of-the-governance-domain → **spine §8** (constitution ratification), NOT G3.

**F-Inv — promoted knowledge later invalidated** (a source-backed gem promoted into doctrine/spine, later found superseded/misread/invalid-assumption):

| stage | §R section | home / class | what happens |
|---|---|---|---|
| invalidation signal | R.14 | reconsideration (assessment, not taint-engine) | FLAG, do not silently rewrite |
| identify promoted dependents | R.9 → R.14 | lineage → dependent set | dependency-aware invalidation over distributed lineage w/ explicit uncertainty (C4.3 Law 10.1) |
| preserve what-was-decided AND what-was-done | R.9/R.15 | S1 receipts + S3 history | historical truth + actions under the former accepted state preserved (never erased) |
| stop future inadmissible use | R.8/R.10/R.15/R.16 | currency→superseded/withdrawn; index invalidate | accepted-but-superseded = non-actionable for high-consequence; revocation reaches OMNI's own materializations; federated recipients receive the withdrawal event + disposition locally (Amendment-3, no cross-sovereign overwrite) |
| route reconsideration to owners | R.14 → R.7/R.8 | owning gates re-decide | no central taint engine; owning domains commit their own corrections |
| regenerate affected projections | R.12 | S5 rebuild **after** disposition | not before; compiler lineage + freshness updated |
| a live run mid-reconsideration | R.11/R.15 | S6 draw + S1 receipt | run may pause/narrow/reassemble; S1 receipt of what it saw stays immutable |

*Trace holds: the case OMNI's own estate will actually hit (G1 §10 live specimen — the "not-found→moat" drift caught at the Knox gate) flows through R.14 without rewriting history and without a central taint engine.*

---

## §18 Governance receipt + Protocol §9 stop report

**Artifacts this pass:** exactly ONE created — this doc (`v4_C4_4_taxonomy_constitution_and_reference_architecture.md`, charter §11 doc #3, G2 populated / G3 reserved). No schema, no folder tree, no registry, no runtime, no empty future files.

**Source posture:** read-fully / consulted / not-inspected declared in §1. Frontier depth consumed + resolved (not re-derived). No file claimed read merely because a search returned it.

**Governance wiring (this pass):** (1) catalog row added to `01_master_corpus_catalog.md` (`analysis_nonbinding`, `add_tier2`, `consult_if_routed`, `user_knox_required`); (2) read-graph `9j` read-order updated to insert this doc as the G2 deliverable + mark G2 authored-pending-acceptance; (3) `FWREG-007` annotated `candidate` → G2 authored (open Qs closure ledger §13; NOT promoted, status stays `candidate`). Outer checkpoint UNCHANGED; read-graph #15 + AGENTS NOT repointed.

**Repository posture:** authored on `analysis/c4-4-knowledge-source-estate` (worktree `c4_4-wt`), base `origin/main 5275707`, atop `71621f5`. Committed + pushed on THIS analysis branch as governance preservation (G2 deliverable `0fbc8a0`; Knox correction `222f189`; this final consistency pass on top) — repository-durable, binds nothing (`analysis_nonbinding`, not merged). NOT committed onto the closed `EVRUN-000012` branch. No merge/PR.

**Protocol §9 stop report:**
- **Source posture:** declared §1 (booted fresh from the G2 kickoff handoff; governing read order + Tier-0 completed; no prior-chat reliance).
- **Decision framing:** G2 separated six constitutional classes/roles (§2); adopted parent B / rejected A + C-as-parent (§3); mapped the six layers (§4) + five ingress axes (§5); resolved the D7 general-artifact boundary + deferred placement (§6); split bounded-vs-open-ended lifecycle profiles (§7); enumerated the multidimensional authority profile + orthogonal state-families (§8); constituted the admission→revocation + dependency-aware-invalidation lifecycle (§9); held the Context-Router/Foundry/CNS/Agent-Runtime seam + mission classes (§10); disposed the six reframed candidate laws (§11); closed the frontier 6 Qs (§12) + the full `FWREG-007` question set (§13); classified F0/F-Self/F-Inv without a leftover (§14); pressured the candidate laws (§15); bounded-deferred the strategic composition/Palantir question (§16).
- **Affected files/contracts/domains/seams:** this doc + catalog + read-graph `9j` + `FWREG-007` annotation (all `analysis_nonbinding`). Downstream contract-implications ROUTED (not edited): D7 (general artifact/corpus parent, §6) · Federation/RBAC/consent (partitions, PHI-in-embeddings, revocation, §8/§9/§11) · C4.5/`FWREG-015` (as-of/temporal, §9/§11) · Accountability/REV-184 (break-glass replay, §11) · Agent-Runtime/`FWREG-010` (actor taxonomy consuming §10) · spine §5/§7 (CNS framework, §12-Q3) · spine §8 (authority-profile + roster ratification) · Task-D (strategic risk, §16).
- **Risks:** naming ossification (mitigated: planning-vocabulary only, §0); scope-creep into CNS/schema/vendor (mitigated: §17 fence); the strategic composition claim over-reaching into "moat" (mitigated: 15-O + §16 guard).
- **Proofs:** §13 gate check (zero bare-open questions); §14 fixture classification (no taxonomy break at classification depth).
- **Governance side-effects:** catalog row + read-graph `9j` update + `FWREG-007` annotation (this pass). No promotion; no checkpoint repoint.
- **Unresolved (all bounded-deferred with owner + trigger):** D7/corpus placement (→G3) · CNS framework (→spine §5/§7) · family name (→G5) · reservoir roster/partition (→spine §8) · strategic composition risk (→Task-D).
- **Next authorized action:** **STOP for Nick + Knox acceptance of the G2 gate.** G3 does NOT auto-start; Agent-Runtime (`FWREG-010`) consumes the accepted G2 boundaries first (charter §4 sequencing). No further gate begins without a separate Nick + Knox opening.
- **Stop declaration:** G2 authored to its gate. STOPPED.


## §19 Knox G2 correction-pass disposition ledger (2026-07-22)
Applied in this fresh G2 agent; all at constitutional-dimension level (NO C5 schema); §§9–20 preserved + reconciled, not rewritten.
| # | Knox disposition | applied as | where |
|---|---|---|---|
| 1 | Compiled Projection excludes retrieval indexes; indexes = replaceable rails; chunks/embeddings = governed derived artifacts | `patched` | §2 S5 · §11.1 link |
| 2 | Rename Domain Memory → Domain-Owned State; authority scoped, not 'highest' | `patched` | §2 S3 · §2.1 · global |
| 3 | Widen Source Estate (received/captured/observed/imported/emitted/generated) + scoped evidentiary authority | `patched` | §2 S1 · §2.1 |
| 4 | Evidence Workbench proposes+routes to many homes; never adopts/commits | `reconciled_to_existing_section` | §2.2 |
| 5 | Replace R0–R3 total ladder with multidimensional authority profile | `patched` | §8.1 |
| 6 | Split lifecycle → admission/activation/currency/materialization; eviction ∈ materialization | `patched` | §8.2 (§9 events already orthogonal) |
| 7 | 'Six species' → 'six constitutional classes/roles'; grouping explanatory only | `patched` | §2 header/intro |
| 8 | C rejected as parent/owner; non-owning nav label bounded-deferred → G5 | `patched` | §3 |
| 9 | D7 subject-agnostic artifact + subject-by-relationship; defer placement to G3/C5 | `already_satisfied_verified` (+ wording) | §6 |
| 10 | Open-ended corpora: bounded epochs/windows/checkpoints close with watermarks+exceptions | `patched` | §7 (B) |
| 11 | Separate Source-Estate governance roles (originator/subject/controller/processor/custodian/admitting/tenant/use) | `patched` | §2.1 ownership |
| 12 | Foundry owns execution not meaning + steward per projection; Router owns assembly not content-authority | `patched` | §10 |
| + | revocation = additive supersession, not backward rewrite | `already_satisfied_verified` | §9 |
| + | reflexive anti-collapse self-guardrail (15-P) | `patched` (new law) | §15 |

## §20 G3 completion ledger + Protocol §9 stop report (2026-08-01)

**Authored by** a fresh Opus agent booted from `HANDOFF_2026-07-31_c4-4-g2-landed_pre-g3.md`, on `analysis/c4-4-g3-reference-architecture` off `origin/main a87d305` (Nick + Knox authorized G3). `analysis_nonbinding`; §R built on the accepted G2 body without reopening it.

### §20.1 G3 completion self-check ledger (the required pre-stop verification)

| # | check | result | where |
|---|---|---|---|
| 1 | R.1–R.17 populated at architecture depth (13-point template each) | ✅ | §R.1–§R.17 |
| 2 | §R.0 orientation present (responsibilities · S1–S6 flow · rails · gates · owners · lineage/proof) | ✅ | §R.0 |
| 3 | all six G2 classes/roles preserved (S1·S2·S3·S4·S5·S6), none collapsed | ✅ (Knox-amended) | every §R section maps to §2 classes; **Amendment-1** corrected the F-Self mis-routing that had demoted governance control-plane state to S5 — now S3-role of the governance domain (no seventh class minted) |
| 4 | no leftover unclassified stage (every stage routes to a home) | ✅ | §R.0 flow + §R.FIX traces (no leftover bucket) |
| 5 | no god-store / god-owner / god-agent | ✅ | R.2/R.3 (corpus layer owns semantics only, plugs rails) · R.4 (no god-catalog) · R.12 (no permanent agent roster) · §R.CORPUS (P2 rejected) |
| 6 | no authority collapse (custody≠authority·retrieved≠truth·indexed≠accepted·candidate≠commit·receipt≠content·blob≠artifact≠receipt≠independence·grant-revoke≠cross-sovereign-rewrite) | ✅ (Knox-amended) | R.2/R.7/R.8/R.10 + intersection/meet; **Amendment-2** (four-identity), **Amendment-3** (four revocation events + recipient sovereignty), **Amendment-5** (S1 receipt-truth stands) added |
| 7 | all derived outputs retain lineage | ✅ | R.6/R.9/R.10/R.11 (S1 run-context receipt) |
| 8 | partial failure stays visible (quarantine/unknown/degraded first-class) | ✅ | R.1/R.3/R.5/R.10 + 15-L |
| 9 | F0 / F-Self / F-Inv trace cleanly (no leftover) | ✅ (Knox-amended) | §R.FIX (three traces); F-Self governance-state routing corrected (Amendment-1); F0 dedup/closure corrected (Amendment-2/4); F0/F-Inv federated revocation corrected (Amendment-3) |
| 10 | D7 / corpus-parent placement adjudicated (verdict issued, no schema) | ✅ | §R.CORPUS (P3 adopted; P1/P2 rejected) |
| 11 | build/buy/wrap complete at mechanism level | ✅ | §R.17 matrix (17 mechanism families) |
| 12 | no vendor / schema / build overreach | ✅ | §R banner + R.17 guardrail (no vendor selected; no schema/field/table) |
| 13 | every unresolved conclusion has a destination + trigger | ✅ | §20.2 |
| 14 | G4 has not started (frozen adversary + rubric untouched) | ✅ | §R banner; charter §8 G4 row unchanged |

### §20.2 Unresolved / destination ledger (G3 defers with owner + trigger — nothing left bare-open)

| item | disposition | owner | trigger |
|---|---|---|---|
| exact corpus-parent schema/table (widened D7 vs sibling) | bounded-deferred | D7 contract + C5 | C5 contract minting |
| Source-Estate corpus-layer contract | bounded-deferred | C5 | C5 |
| reservoir-family roster / partition / final name | bounded-deferred | spine §8 / G5 | spine §8 / G5 (NOT G3) |
| full CNS framework (hemispheres/regions/learning-loops) | bounded-deferred | spine §5/§7 + `CNS_orchestration_contract` | spine §5/§7 |
| complete Agent Runtime architecture + `FWREG-010` | OPEN (consumed as bounded bridge only) | Agent-Runtime formulation | `FWREG-010` |
| enduring owner of Runtime-Ops operational S3 (Runtime-Ops vs Build-OS) | bounded-deferred | spine §8 | runtime checkpoint-persistence design |
| retrieval-index / chunk-embedding governance contract | bounded-deferred | C5 | C5 |
| Federation cross-operator grant substrate | bounded-deferred | Federation domain pass | Federation pass + C5 |
| strategic "can an incumbent compose faster?" (§16) | bounded-deferred (not a species) | Nick/strategy + spine + Task-D | Task-D |
| vendor/engine selections (storage, retrieval, MPI, de-id, exchange) | deferred | procurement/impl | build entry |
| adversarial scoring of F0/F-Self/F-Inv | deferred | G4 | G4 (frozen fixtures + rubric) |

### §20.3 Protocol §9 stop report

- **Source posture:** read FULLY this pass — the live handoff; the Gate-0 charter; the closed G1 reality map (incl. §4 external matrix + §4.2 build/buy/wrap + §9 claim ledger); the closed G2 constitution (this doc §§0–19); the accepted Agent-Runtime consumption bridge (§0 + §§G2C.0–G2C.11); the CNS/Knowledge-Reservoirs frontier; the D7 contract; the CNS orchestration contract; FWREG-006/007/010/015 rows; read-graph #9j/#9d + catalog rows for the C4.4 artifacts. **Consulted:** read-graph #15; guardrail discipline as summarized in the artifacts (`GRD-026/033/035/036/040/041/042/043`). **Not re-derived:** the G1 external mechanism survey + build/buy/wrap matrix (consumed as accepted input, per charter). No file claimed read merely because a search returned it.
- **Decision framing:** authored the technology-neutral §R reference architecture + plug-point model over the six G2 classes (R.0 orientation + R.1–R.17); issued the load-bearing D7/corpus-parent placement verdict (§R.CORPUS: reuse D7 per-artifact physics subject-agnostic + a Source-Estate-owned S1 corpus layer above D7 artifacts, membership-references-not-copies; schema deferred); traced F0/F-Self/F-Inv cleanly (§R.FIX); completed build/buy/wrap at mechanism level (§R.17).
- **Affected files/contracts/domains/seams (this pass):** this doc (§R + passport + §0 + §20) · charter status · live handoff · catalog row · read-graph #9j · FWREG-007 — all `analysis_nonbinding`. Downstream contract-implications ROUTED, not edited: D7 (corpus parent → C5) · Federation/RBAC/consent (permitted-purpose, revocation, PHI-in-embeddings) · C4.5/`FWREG-015` (as-of/temporal) · Accountability (admitted obligations, reconsideration) · Agent-Runtime/`FWREG-010` (actor consumer) · spine §5/§7 (CNS) · spine §8 (roster/authority ratification) · Task-D (strategic risk).
- **Risks:** naming ossification (mitigated: planning-vocabulary only; no roster/name minted) · scope-creep into schema/CNS/vendor (mitigated: §R banner + R.17 guardrail + §20.1 checks 5/6/10/12) · reopening G2 (mitigated: §R built on top; G2 §§1–19 untouched) · over-claiming a moat (mitigated: 15-O + R.17 guardrail + §16 deferral).
- **Proofs:** §20.1 self-check (14 checks pass) · §R.FIX (three fixture traces, no leftover) · §R.CORPUS (verdict with rejected alternatives).
- **Governance side-effects:** charter → `G3_authored_pending_Nick_Knox_review`; this artifact → `G3_reference_architecture_authored_pending_review`; handoff → G3 authored (branch/commit/blob) pending review, G4 not started; catalog row → pending G3 review; #9j → G3 authored pending review (same read order); FWREG-007 → G3 authored pending review (G5/spine residuals NOT closed). Outer checkpoint #15 + AGENTS NOT touched; G1 + the Runtime bridge NOT touched.
- **Unresolved:** all bounded-deferred with owner + trigger (§20.2).
- **Next authorized action:** **STOP for Nick + Knox G3 review.** G4 does NOT auto-start; no promotion; no schema/build.
- **Stop declaration:** G3 §R authored to its gate. STOPPED.

### §20.4 Knox G3-review bounded amendment receipt (2026-08-01)

**Verdict received:** Knox independent G3 review = **PASS WITH REQUIRED AMENDMENTS** (architecture direction + P3 corpus verdict accepted; five bounded amendment groups required before G4; no G3 redesign, no new research, no G4). Opus adjudicated on the merits against the live bytes (not on Knox's paraphrase): all five confirmed real (four fix internal contradictions against laws §R itself asserts; one fixes stale-state drift). One divergence recorded (Amendment-1 framing). No G4 authorization issued.

**Amendment-to-section matrix (what changed, where):**

| # | amendment | blocks-G4 (Knox) | sections patched | Opus disposition |
|---|---|---|---|---|
| 1 | Governance control-plane state ≠ compiled projection (restore authority boundary) | YES | R.4(2) · R.12(6) · F-Self table (2 rows split into 4) + bounded-clarification note · §20.1 #3 | **applied — with divergence:** implemented as **S3-role of the governance domain, NOT a "P0 class"** (P0 is a plane, not one of the six; minting a class would be the back-door god-class G3 must avoid). "Explicit control-plane role vs S3-of-governance-domain?" → bounded-deferred to spine §8. Added the agent-runtime-symmetry (why row-first/gate discipline exists). |
| 2 | Separate blob / artifact / receipt / evidence-independence identity | YES | R.1(8) · R.2(3) · R.3(8) · R.9(3) · R.17 storage row · R.CORPUS(1) · F0 rows | **applied** — four-identity discipline; guarded against over-rotation (blob-dedup stays a legit storage optimization; it just may not drive artifact/receipt identity). |
| 3 | Split federated revocation → grant-revoke / withdrawal / lawful-deletion / recipient-local-reconsideration; profile A vs B | YES | R.8(9) · R.14(10) · R.15(3,8) · R.16(3,7) · R.17 invalidation row · F0 + F-Inv rows | **applied** — cross-sovereign no-overwrite; **added** bidirectional lawful-retention exception (refused deletion flows back to originator, no false "verified-complete"). |
| 4 | Closed package stays closed (correction is additive superseding package) | YES (small) | R.3(7) · R.CORPUS boundary summary · F0 correction row | **applied.** |
| 5 | Live-state normalization + R.17 truth qualifier + name S1 custody-governance commit role | YES (procedural) | artifact §0 (2 banners) · R.17 truth row · R.CORPUS (S1 custody role) · charter §0 (live banner) · handoff §4 · read-graph #9d | **applied.** Runtime artifact body NOT touched (blob stays `de5b9a1`); #9d notes its embedded `G3_not_started` is historical. |

**Preserved through the amendment pass:** the six-class constitution (§§1–19 not reopened — Amendment-1 supersedes only the G2 §14 F-Self *fixture routing*); the P3 corpus verdict; the accepted runtime blob `de5b9a1`; G1; AGENTS; checkpoint #15; `main @ a87d305`. **Still closed:** G4 (frozen adversary + rubric) — Knox issued no G4 authorization; this pass issues none. **Next:** Knox verifies the amended branch bytes → then G3 is eligible for Nick + Knox acceptance + G4 preparation.

- **Amendment stop declaration:** Knox-required G3 amendments applied to their gate. STOPPED for Knox patch-verification + Nick + Knox G3 acceptance.
