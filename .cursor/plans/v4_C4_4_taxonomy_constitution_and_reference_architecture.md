# v4 — C4.4 Knowledge Reservoirs & Source-Estate — TAXONOMY + CONSTITUTION (G2) · reference architecture (G3 RESERVED)

Document type: `architecture_reconciliation` (G2 deliverable of the C4.4 arc — the constitutional taxonomy + constitutional class/role boundaries; the reference-architecture sections are RESERVED for G3 and intentionally unpopulated)
Authority: `analysis_nonbinding` — propose-only pre-spine architecture pass (`GRD-036`/`GRD-043`). Binds NOTHING. Every name herein is PLANNING VOCABULARY, not a minted primitive (`GRD-035` noun discipline; charter §12/§15 naming-ossification guard).
Status: `g2_CLOSED_2026-07-22 · nick_operator_accepted · knox_verified · G1_CLOSED · G3_not_started · analysis_nonbinding · not_promoted` — authored in a FRESH Opus agent booted from `v4_C4_4_G2_kickoff_handoff.md`; Knox G2 gate patches + final consistency + micro-close applied (§19 disposition ledger); consumes the closed G1 map + frontier depth; does NOT re-derive. **G3 does NOT auto-start.**
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

> **★ POST-MERGE CURRENT-STATE NORMALIZATION (2026-08-01).** This G2 artifact was **landed and fast-forward-merged onto `main` @ `fa98a343565e35c4c6aba2aff7f8504e56e028af`** via the C4.4 curated artifact-landing (Knox PASS + Nick authorization). **The authoring-time branch/base/checkpoint/no-merge statements in this §0 — "off clean `origin/main 5275707`", "read-graph #15 on this branch → the `2026-07-12` checkpoint", and "NO merge/PR of this branch / NEVER commit onto the closed `EVRUN-000012` branch" — are HISTORICAL and SUPERSEDED by that landing. Do NOT obey them as live instructions.** Live truth: this artifact is on current `main` (post-`c40630b`); the live boot checkpoint is read-graph #15 (UNCHANGED by this pass — the curated landing did not repoint it); the branch merge already happened cleanly. G2 remains CLOSED · `analysis_nonbinding` · not promoted; §R stays RESERVED for G3; **G3 is NOT started and requires explicit Nick + Knox authorization.**

- **This is G2 only.** G2 = taxonomy + constitutional boundaries + Evidence-lane reconciliation + fixture classification. It is `analysis_nonbinding`; it binds no thesis/contract/schema/security/surface.
- **Hard stops honored (charter §13 + handoff §6):** NO schema · NO runtime/service · NO folder tree · NO vendor selection · NO medical-literature build · NO spine/thesis prose · NO minting of runtime agents (`ScoutAgent`/`CapperAgent` — that is Agent-Runtime/`FWREG-010` per the §3.1 seam) · NO new architecture plane · NO reuse of the reserved domain word "Intake" for ingress/migration/estate ops · NO authoring from memory or anchor ledgers · NO G3 auto-start · NO merge/PR of this branch · NO checkpoint repoint · NEVER commit onto the closed `EVRUN-000012` branch. *(★ HISTORICAL/SUPERSEDED 2026-08-01: the branch-specific stops in this bullet — "NO merge/PR of this branch" and "NEVER commit onto the `EVRUN-000012` branch" — were authoring-time-only; they are superseded by the C4.4 curated landing + fast-forward merge to `main` @ `fa98a34`. The G3-auto-start and checkpoint-repoint prohibitions remain LIVE. See the §0 post-merge banner above.)*
- **Names are planning vocabulary.** The frontier doc's own instruction (`do not canonize the family name or member names`) is honored: working labels only until G5/spine ratification.
- **Reference architecture (G3) is RESERVED** in §R below — intentionally unpopulated. This is a shared G2/G3 deliverable (charter §11 doc #3); creating it at G2 entry with G2 content populated is correct; the G3 sections are a reserved outline within a live, populated doc, not an empty future file.
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

## §R Reference architecture — **RESERVED for G3 (intentionally unpopulated)**

> G3 does NOT auto-start (charter §13; handoff §6). On G3 entry, populate this section with the technology-neutral reference architecture + plug-point model over the G2 species, per charter §8 G3 row. Outline reserved (headings only, no content authored):
> R.1 landing + quarantine · R.2 storage/custody rails (plug) · R.3 package/manifest + completeness/closure (both §7 profiles) · R.4 catalog + classification · R.5 entity-resolution · R.6 extraction/normalization (`extraction_run` lineage) · R.7 domain-admission interfaces (the S1→S3 boundary) · R.8 reservoir admission/promotion + authority-profile/`review_gate` · R.9 lineage + retrieval-unit provenance (§11.3) · R.10 indexing/retrieval rails (plug) · R.11 Context Router assembly (S6) · R.12 Foundry maintenance-mission machinery (§10) · R.13 reprocessing · R.14 correction + reconsideration (F-Inv) · R.15 retention/deletion/revocation propagation · R.16 federation exchange (publish/admit/revoke) · R.17 build/buy/wrap per mechanism (from G1 §4.2 matrix). Integrates Agent-Runtime (`FWREG-010`) as the actor consumer of §10 missions.

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
