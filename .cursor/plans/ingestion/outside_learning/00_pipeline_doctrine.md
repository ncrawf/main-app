# OMNI Outside-Learning Ingestion Pipeline — Standing Doctrine

Document type: `evidence_or_ingestion` (process doctrine for a recurring evidence lane; governs how outside technical teaching enters OMNI)
Authority: `governance_binding` for the **process** (how outside material is ingested, scored, mapped, routed, and gated). Binds NO content: every concept it routes is non-binding evidence until promoted into its destination home through that home's own review gate.
Status: `active` (created 2026-06-05; restructured 2026-06-06 to Source/Index/Analysis + global IDs).
Domain(s): architecture_governance, evidence_processing, ai_substrate, build_os
Lifecycle role: the **recurring outside-learning lane** — the durable home + workflow for external technical teaching (Stanford / IBM / Sequoia / Anthropic / OpenAI / security / build-system / research / YouTube) entering OMNI as governed evidence, 1-2% at a time, without architectural thrash.
Source-of-truth relationship: process doctrine for this lane. Implements the plane-wide **Source / Index / Analysis** standard (`../00_evidence_router.md` §4). Raw sources live under `sources/<YYYY-MM>/` with global `EVSRC` ids; the lane registry is `00_index.md`; derived work lives in `analysis/EVRUN-…/` runs. Provenance rows in `doctrine/07_evidence_ingestion_ledger.md`; thesis-touching concepts route through the Constitutional Reconciliation Ledger in `omni_thesis_v3_integrated_spine.md`.
Supersedes: the prior per-batch `vNN`/`videos/` layout (now legacy; see `sources/2026-spring_ai_substrate/_MIGRATION_STATUS.md`).
Superseded by: none.
Manifest action: `add_tier1` (process doctrine; catalog row + read-graph evaluation per AGENTS New Artifact Completion Rule).
Review gate: `user_knox_required`.

---

## Why this lane exists

External technical teaching is no longer a one-off. Stanford lectures, IBM/Anthropic/OpenAI/Sequoia talks, security and build-system material, and research keep arriving. Some of it confirms OMNI, some sharpens a section, some pressure-tests doctrine, a few re-steer, most is useful-but-not-doctrine, and some is hype to ignore. **OMNI treats outside technical learning as a recurring, governed evidence stream — not ad-hoc inspiration and not a reason to constantly rewrite the thesis.** This doc is the operating system for that: it protects raw richness, extracts durable concepts, scores relevance, and routes each to the correct OMNI home through that home's review gate.

This doctrine line lives HERE (and in a Build-OS pointer), **never in the thesis body** — the thesis is a constitution, not a reaction log.

---

## Structure: Source / Index / Analysis (implements router §4 + `GRD-040`)

The four object types stay separate — identity ≠ storage ≠ registry ≠ analysis:

```
outside_learning/
  00_pipeline_doctrine.md        <- this doctrine
  00_index.md                    <- registry (every source + run, by id)            [INDEX]
  sources/<YYYY-MM>/             <- raw, immutable, global EVSRC ids                 [SOURCE]
    EVSRC-YYYY-NNNNNN_<slug>.md
  analysis/EVRUN-YYYY-NNNNNN_<slug>/   <- derived, multi-author, cites source ids   [ANALYSIS]
    00_run.md  inventory.md  routing_addendum.md
  sources/2026-spring_ai_substrate/      <- legacy corpus (vNN layout); see _MIGRATION_STATUS.md
```

- **Source** = one raw artifact, preserved once, **immutable**, global id `EVSRC-YYYY-NNNNNN`, in a month bucket. The folder is shelving; the id is identity. Templates: `sources/_SOURCE_TEMPLATE.md`. A Source may be a single artifact OR a **collection** — a coherent bulk capture (a campaign / photo-dump) is ONE `EVSRC` *folder* holding many files + a `_source.md` manifest = one index row, many extracted concepts (router §4). The source FILE is the **captured record**: §1 raw transcript + §2 any captured third-party commentary (the ChatGPT/Knox take that arrived *with* the drop) + §3 operator notes — all *captured* evidence, not OMNI-derived. OMNI's **derived** work (extraction / scoring / topic-tagging / **inventory clusters** / routing) lives in the `analysis/EVRUN-…` run, never in the source. (Old-format `vNN` files co-mingled both; the spring collection keeps that legacy shape.)
- **Index** = `00_index.md`, the queryable registry. Topics are tags/columns here — never folder names (`GRD-037`).
- **Analysis** = an `EVRUN-YYYY-NNNNNN` run: "on this date, this analyst processed these EVSRC ids → these outputs." **Multi-author** — Knox/ChatGPT, Opus, future agents, humans each analyze the same source if useful; attribution lives on the run (`analyst:`), never in the source. One source ↔ many runs. Templates: `analysis/_RUN_TEMPLATE/`.
- **"Batch" is retired.** Capture grouping = the `captured_at` field + month bucket; processing grouping = an analysis run. Neither is a topic or an id.
- **IDs are global across the Evidence Plane**; allocate next = highest existing + 1. Legacy `vNN` ids are valid ONLY inside `sources/2026-spring_ai_substrate/`.

---

## Booted Agent Orientation — how to use this lane

**You are working OMNI's recurring outside-learning ingestion lane.** It captures external technical teaching and routes it into OMNI *without letting outside material destabilize the architecture.* **The job is NOT to summarize videos into generic bullets** — it is to **preserve source richness, extract durable concepts, score their relevance, and route them to the correct OMNI home.**

Keep the layers separate (never collapse them):

1. **Source (raw)** — *immutable evidence.* Preserve it; never overwrite it with interpretation. A summary is never a substitute for the raw. Lives in `sources/`.
2. **Analysis (derived, multi-author)** — everything produced by *thinking about* sources, in `analysis/EVRUN-…/`:
   - **distillation** — interpretive synthesis / OMNI-relevance pass (e.g., a Knox/ChatGPT third-party review). Valuable, not canonical by itself; may be absent.
   - **extraction / scoring / mapping** (`inventory.md`) — the concept ledger: gems, scores, classification, OMNI mapping, contradictions, pressure-tests.
   - **routing addendum** (`routing_addendum.md`) — what should affect thesis / §A / §B / §C / Build OS / security / surfaces-projections / features, or be ignored, + the **§C-impact triage**.
3. **Promotion** — doctrine / contract / Build OS / feature / security rule / surface / projection / ignore. **Nothing is binding until it lands in its home and passes that home's review gate** (`GRD-036`).

Attribution: tag every analysis with its `analyst` (Opus | Knox/ChatGPT | agent | human). Authorship lives on the run, not the source.

**Do not artificially cap extraction.** 4 useful concepts → extract 4; 60 → extract 60. **Gems are often mid-paragraph** — a metaphor, a mechanic, a security implication, a build pattern, an OMNI pressure-test buried inside one spoken sentence. Preserve exact phrases/metaphors when they carry conceptual force.

**Map to OMNI homes, but do not force every concept into OMNI.** A concept may map to **one OR MORE** homes (multi-valued, descriptive). "Interesting, not relevant," "build later," and "do not contaminate the thesis with this" are all valid outcomes.

For every meaningful concept capture **FOUR distinct axes** (do not collapse them):
- **(A) classification — *what kind of impact:*** `doctrine-changing | section-sharpening | Build-OS-practice | security-requirement | product/feature-idea | analogy-only | ignore/hype`
- **(B) topic_tags — *what it is about:*** one OR MORE from the **Topic-tag registry** (below) — multi-valued, expandable, `other`/`needs_tag` allowed.
- **(C) promotion_target — *where it should land, if anywhere:*** `thesis | §A | §B | §C | Build OS (REV-158) | security/trust-transfer | contracts | surfaces/projections | product/features | ignore` — plus **`promotion_target_detail`** (e.g., contracts → Identity / RBAC / Federation / D7 / CNS / AI #12 / D6 / BIZOPS / OFC; surfaces/projections → which one).
- **(D) maturity_link — *already landed vs ahead:*** `already_landed | current_thesis | current_contract | future_retrofit | build_os_future | feature_backlog | ignore`.

Plus per concept: **gem · source anchor (`EVSRC-… ¶N`) · importance (1-5) · confidence (1-5) · current-state relationship (`confirms | sharpens | contradicts/pressure-tests | introduces-new | stale`).** Contradiction / pressure-test is HIGH value, not noise.

### Guardrails (binding)
- Outside material is **non-binding evidence until promoted** (`GRD-036`).
- **Source is immutable; analysis is separate and attributed** (`GRD-040`). Never bake interpretation into a source file.
- **File by provenance; index by topic** (`GRD-037`). Never split/relocate a source by its loudest topic; never name a folder after a topic.
- **Do not let a video become a live reaction log inside the thesis.** Do not force every idea into OMNI; do not dilute rich passages into buzzwords.
- When a concept touches **primitives, projections/surfaces, loops/flows, or contract/domain boundaries**, route it through the **Constitutional Reconciliation Ledger (4 lanes)** in the thesis spine.
- **If a concept affects §C, §C stays PAUSED** until the run's routing addendum updates the §C absorption plan.
- "ignore/hype" is a recorded outcome, not a silent drop.

**Goal: a governed learning loop — outside teaching improves OMNI 1-2% at a time without architectural thrash.**

---

## The pipeline (stages)

```
capture source (raw, immutable, EVSRC id) -> register in 00_index.md
  -> open an analysis run (EVRUN; analyst attributed; source_set cited)
    -> [optional] distillation (interpretive; e.g. Knox/ChatGPT)
      -> concept extraction in inventory.md (no cap; mid-paragraph gems count)
        -> importance + confidence scoring (1-5 each)
          -> OMNI mapping (one or more homes) + classification (7-way) + relationship + maturity
            -> routing_addendum.md (what changes thesis / §A / §B / §C / Build OS / security / contracts / surfaces / features / ignore) + §C-impact triage
              -> Constitutional Reconciliation Ledger (when primitives/projection/loop/contract-boundary touched)
                -> promotion to destination home THROUGH that home's review gate (user/Knox)
                  -> periodic adoption + pruning gate (re-review; stale concepts pruned; rarely, one re-steers)
```

## Classification taxonomy (7)
`doctrine-changing` (rare; alters thesis/posture) · `section-sharpening` (refines a specific section) · `Build-OS-practice` (→ `REV-158`; agent lanes, evals, autonomy, harness) · `security-requirement` (trust-transfer, non-human identity, OWASP/agentic risk) · `product/feature-idea` (surface/feature backlog) · `analogy-only` (useful framing, not doctrine) · `ignore/hype` (recorded + dismissed).

## OMNI mapping dimensions (= promotion_target; multi-valued)
`thesis · §A Trust/Authority/Permeability · §B AI substrate · §C Governed Capability Exchange · Build OS (REV-158) · security/trust-transfer · product/features · contracts · surfaces/projections · ignore`. A single concept may carry several. **`promotion_target_detail`** narrows it (contracts → Identity/RBAC/Federation/D7/CNS/AI#12/D6/BIZOPS/OFC; surfaces/projections → the specific one).

## Topic-tag registry (subject area — multi-valued, EXPANDABLE, `other` allowed)
`topic_tags` answer *what the concept is ABOUT* — a **separate axis** from classification (impact) and promotion_target (destination). Seed registry:

`neural_networks · agentic_architecture · context_engineering · RAG_memory_retrieval · MCP_API_A2A_interoperability · security_zero_trust_NHI · trust_authority_consent · projection_plane · surface_plane · domain_modeling_ontology · loops_flow_fulfillment · Build_OS_agentic_SDLC_evals · product_UX_features · business_ops_workforce · healthcare_operations_regulatory · model_gateway_cost_infrastructure · governance_decision_systems · analogy_comparator · market_strategy`

**Expandable + open (Nick's call, ratified 2026-06-05):** when no existing tag fits, **add a new tag — and append it to THIS registry in the same pass** (so the tag set stays discoverable, not a free-for-all). Use **`other`** for a genuinely novel concept not yet worth a registered tag; **`needs_tag`** to flag one awaiting triage. A concept routinely carries several tags. These are the **concept-level** authoritative tags; the light `topic_tags` on a source file are browsing aids only (`GRD-037`).

## Source-file schema (every `sources/<YYYY-MM>/EVSRC-…md`)
`evsrc_id · source_platform · content_type (lecture | interview | panel | demo | keynote | podcast | paper-summary | vendor-marketing | other) · source_reliability_context (OPTIONAL, default unknown: academic | practitioner | vendor | founder | investor | security-researcher | unknown) · source_url · source_title · speaker · source_channel_or_org · published_at · captured_at · capture_method · topic_tags (light, browsing-only) · status (raw_unprocessed | analyzed | promoted_or_parked)` + the raw evidence body (immutable).

**Two dates, two questions:** `published_at` = source age (a brilliant 2023 talk grabbed in 2026 is still *older source material*); `captured_at` = when WE grabbed it (the only honest "batch" fact + freshness weight). Neither sets an ordering identity — the `EVSRC` id does.

**Epistemic-weight calibration:** `content_type` + `source_reliability_context` exist so future-us weights sources honestly — a Stanford lecture and a vendor-marketing clip should NOT carry equal authority. `source_reliability_context` is a *lens, not credential-worship*; optional (default `unknown`), and never the basis for ignoring a real gem — only for calibrating confidence (`GRD-039` Tier 1: unverified lowers confidence, never forbids use).

## Analysis-run schema (every `analysis/EVRUN-…/00_run.md`)
`evrun_id · run_date · analyst (Opus | Knox/ChatGPT | agent | human) · source_set ([EVSRC ids]) · purpose (extraction | distillation | scoring | routing | §C-triage | re-review) · status (open | routed | gated)` + `inventory.md` (concept rows) + `routing_addendum.md` (routing + §C-impact triage). Runs are **multi-author**: many runs may cite the same source. **Reads (inputs) within a run follow `read_NNN_<analyst>_<purpose>.md`** — numbered + attributed + append-only (Knox=001, Opus=002, future angle passes=003+); mirrors the source-file Review-00N convention. Never a singular "the read" — every batch/reservoir gets re-read repeatedly from multiple angles/planes over time.

## Cadence
Recurring. Process **~5-10 sources per analysis run** as material accumulates; a run may span months or a single source. Sources are captured continuously and independently of runs.

## Scope boundary (what belongs here)
**In:** external technical *teaching* — AI/agentic architecture, security, build systems, distributed-intelligence, research, engineering talks. **Out (different lanes):** competitor/product reverse-engineering (`ingestion/competitor_product_evidence/`); vendor integration specs (`vendor_integration_evidence/`); regulations (`regulatory_compliance_evidence/`); security advisories/CVEs (`security_advisory_evidence/`); internal handoffs/decisions/narratives (doctrine ledgers); the thesis itself. (Lane = provenance/source family, not topic — `GRD-037`.)

## Adoption + pruning gate
Promotion to doctrine/contract/Build-OS/feature requires the **destination home's review gate** (user/Knox). Concepts are periodically re-reviewed; stale/duplicated ones are pruned (linked across runs, not blind re-extracted). Most concepts remain evidence forever; a few become guardrails or build patterns; rarely, one re-steers the company — that is healthy, not chaotic.

## Discoverability (how a future agent finds this lane)
**NOT in the System Map** — this is an evidence-ingestion lane, not domain/product truth. Reached via the governance paths: Evidence Plane router (`../00_evidence_router.md`) · master corpus catalog row (`01`) · evidence ingestion ledger row `D0OL-EVD-NNN` (`07`) · read-graph route (`04`) · this doctrine + `00_index.md`. **Lightweight work-protocol trigger (NOT a universal boot load):** *if the work involves external teaching / transcripts / YouTube / AI-security-build-system lectures / outside-learning evidence → read the router FIRST, then this doctrine.*

## Forward hook
Future: a **build resource forum** surfacing adopted learnings into active build work (which concept informed which contract/feature/guardrail). Named here so the lane has a destination beyond the ledger; not built yet.
