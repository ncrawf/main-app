# EVSRC-2026-000207 — The Data Science Periodic Table (analytics-method taxonomy)

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000207_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000207`  ·  filename: `EVSRC-2026-000207_TK.md` → **proposed rename: `EVSRC-2026-000207_data-science-periodic-table.md`** (slug `data-science-periodic-table`; Opus-main renames at fold — this agent does NOT rename)
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=12lB1Cz7gUw`  ·  source_title: `Data Science Periodic Table Explained: ML, ETL, Analytics & Workflow`
- channel_or_org: `IBM Technology`  ·  speaker: `Aaron Baughman`  ·  published_at: `Jun 25, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `screenshot + pasted transcript`
- content_type: `data science taxonomy / ETL / data ingest / encoding / cleansing / metrics / cross-validation / explainability / drift / simulation / synthetic data / governance`  ·  source_reliability_context: `IBM educational taxonomy. Useful as analytics vocabulary and method registry input; not authoritative OMNI architecture, do not promote as domain doctrine.`  ·  topic_tags_light: `[data-science, analytics-methods, taxonomy, ETL, drift, explainability, evaluation, quantum-addendum]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Aaron Baughman` · role_in_source: `presenter / educator` · affiliation_at_publication: `IBM Technology` · speaker_type: `educator (vendor-adjacent)` · authority_context: `teaching/taxonomy authority only — presents a personal organizing schema ("no official data science periodic table… this is my take"), NOT empirical or standards authority` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `n/a (monologue explainer)`
- event_context: `standalone educational video building a "data science periodic table" analytics-method taxonomy; explicit companion to the earlier AI periodic table (EVSRC-2026-000082)`  ·  perspective / conflict notes: `vendor/educator framing; useful as vocabulary scaffold, not doctrine. GRD-039: authority is descriptive — this is teaching content, so relevance is capped at method-vocabulary tier and every claim still routes through gated promotion.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [ ] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename (slug proposed in §0; rename deferred to Opus-main) · [x] §0 metadata from screenshot (inferred + `TK (unconfirmed)` where screenshot absent) · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source — Opus-main folds) · [ ] update coverage matrix (Opus-main folds) · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
Data science is a deep field of applied study, but is it really that deep and confusing?
0:05
Terms such as these, cross validation, drift, clustering, statistics, principal component analysis,
0:11
well, they're all parts of the anatomy that makes up the modern day data science.
0:16
But how do all these data science pieces really fit together?
0:20
Well, what if we could organize these data scientists elements into a data
0:24
science periodic table, like how Martin organized an AI periodic table?
0:29
So just like chemistry, this could all help us relate these terms together.
0:34
So welcome to the data science periodic table.
0:37
Now this periodic table, it's organized into rows and groups.
0:42
Now, since data science is all about the data, the rows show the maturity of data
0:47
through the progression of raw data all the way down into insights.
0:51
Now the groups over here, or the columns, They represent the type of
0:55
analytical activity from acquiring the data all the way to evaluation side.
1:00
Now together, each cell, it shows a specific data science element applied at a particular stage of the analytics lifecycle.
1:08
Now, a quick disclaimer.
1:10
So there really is no official data science periodic table like there is in chemistry.
1:16
Now this is my take on what the structure could look like.
1:19
But once you understand it, you can decode any data science project.
1:23
Any product demo or any vendor pitch.
1:26
You'll see which elements they're using, how they connect, and maybe even what might be missing.
1:31
You can even use this to build your own data science system.
1:35
First, you do know that data science is about the data, right?
1:39
So that gets us to our first element or Et here.
1:43
This is for extract, transform, and load.
1:46
Now this element, what it does is it moves raw data from sources into a centralized system.
1:51
Now this could be.
1:52
A database or a table within that database, or even an unstructured pile of data.
1:57
Now, as we look at this row called raw data, all of the elements, they are related to the raw or unrefined data.
2:04
Now, this is the closest that we're actually going to get to the original data.
2:08
Now, at the group level here, we'll see that the next element is called Di.
2:15
Now, This represents data ingest.
2:17
This element is atomic streaming or batch operators for processing the data.
2:23
Now, this is the second step of the row two, which we then call the prepared data.
2:29
Now, what can we do with this prepared data along the groups?
2:32
Well, the next one that's gonna be over here is for data encoding, which we'll label En.
2:39
Now this element, it converts the categories, the text, or even the dates into numerical representations.
2:46
But before we go on this group, let's finish the top row here.
2:49
So from this group we're going to go to the next one which is called data cleansing, which I'm going to label that as Cd, right?
2:58
This type of finishing is further refined by the next element, which is then called Re.
3:05
And we call this one regression.
3:07
So this estimates the relationships between variables using these regression techniques.
3:13
So now we can also generate additional data after we understand those kinds of
3:18
relationships with the next element, which is called Sy.
3:22
And this stands for synthetic data.
3:26
Now, finally, we're getting to group five, evaluation.
3:30
And if we look at that element, we're gonna call this one.
3:35
And this stands for really metrics and evaluation here.
3:38
And this is the start of the refined data rows.
3:43
So let's continue down group five evaluation.
3:46
So the next element is called Va.
3:50
And the Va stands for cross validation.
3:53
Now this is a method for cross validating models or robustness checks by rotating training and testing slices of data.
4:01
But even if we apply elements of Me and Va, we still need to progress to the next element, which is then called Ex.
4:11
And Ex, it represents explainability, which then in turn explains that model behavior or feature importance and predictions.
4:19
Now, as these can change over time, the element Dr, which means drift, right?
4:27
This helps us to understand how shifts in the data or model performance, how it differs over time.
4:33
Now, some of these models are represented by the element Ba here.
4:39
And this is a Bayesian model, right?
4:42
And uncertainty can be modeled by distributions and incorporates prior
4:46
knowledge for the creation of these kinds of predictions.
4:50
But now to finish up this row, we then have what's called Bo, bootstrapping.
4:57
Now, this element, it creates resampled data sets to estimate variability.
5:02
Or confidence intervals along your data.
5:04
So let's go to the beginning of row three, model data.
5:08
So the very first element here is called St.
5:13
And this structured data, it organized data into tables, schemas, or graphs for easier use.
5:20
Now the last row over in this group here is called validated insights.
5:26
And looking at it, the element is Go.
5:29
For data governance.
5:30
Now, it's very important to define rules to ensure that the data quality, security, and compliance all match up.
5:37
And this level of organization really helps us to get into the validated insights.
5:42
Now, as we continue across the groups, here we now have PC.
5:49
And PC stands for principal component analysis.
5:51
It helps us really to reduce the dimensionality of the data while maintaining the highest variance.
5:57
This helps us to compress and simplify data while really keeping and understanding what really matters.
6:03
And to produce the high quality insights, the element Es, which means ensemble
6:10
it has these systems to put different types of models together that could vote
6:15
on a particular outcome. We can even use these types of models within
6:18
the next element, which is called Si.
6:22
And Si means simulation, to create hypothetical scenarios to explore all the different possible outcomes.
6:30
Now looking at the next one, so we'll take and add in what's called Ag.
6:36
This is called aggregation, where we can apply summarization,
6:39
which really is this type of aggregation methods to find counts, means, or other statistical analysis techniques.
6:47
Now these types of statistics lead us to clustering or Cl.
6:52
This is an unsupervised method to find natural groupings or patterns within that data.
6:57
In fact, we can use density-based estimates or other generation techniques such as Dg.
7:06
All right, and we call this distribution generation.
7:09
There's still a section that's just outside of this table.
7:12
It's outside the realm of classical computing.
7:14
It's a quantum addendum.
7:16
So here we can start with Qa.
7:19
It's quantum accessible memory.
7:22
So this element ensures that we can move the quantum or classical data into or out of quantum accessible circuits.
7:28
Then we can progress to Qe.
7:32
And QE is all about quantum encoding.
7:34
This encodes the classical data into qubits using three elements.
7:38
So first we have amplitude, basis, or angle encoding.
7:43
Next, we can look at Qo.
7:46
And QO is all about quantum modeling here.
7:49
So it uses a combination of qubits and classical techniques for the implementation of quantum machine learning.
7:56
Now, the following one is called Qs .
8:00
And we wanna do this and use quantum to create synthetic quantum states that
8:05
can help us test or even run different simulations.
8:08
But we still need to be able to evaluate these quantum systems.
8:11
And that's where the next element comes in.
8:14
So we call this one Qn.
8:16
And this helps us to measure the quantum prediction, the accuracy, fidelity, or even loss.
8:21
And there we have it.
8:22
With this data science periodic table, data science stops being a jumble of terms
8:27
and becomes now a structured landscape that you can navigate.
8:31
Each element now has a context and a purpose, giving you a clear lens to
8:35
explore, connect, and apply these techniques with confidence.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

IBM — Data Science Periodic Table

source_platform: YouTube
source_url: https://www.youtube.com/watch?v=12lB1Cz7gUw
source_title: Data Science Periodic Table Explained: ML, ETL, Analytics & Workflow
channel_or_org: IBM Technology
speaker: Aaron Baughman
published_at: Jun 25, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: screenshot + pasted transcript
content_type: data science taxonomy / ETL / data ingest / encoding / cleansing / metrics / cross-validation / explainability / drift / simulation / synthetic data / governance
source_reliability_context: IBM educational taxonomy. Useful as analytics vocabulary and method registry input. Not authoritative OMNI architecture; do not promote as domain doctrine.
priority: 2.75/5
depth: medium_semantic
recommended_status: route to operating_metrics, analytics method registry, Observation normalization vocabulary, Build-OS eval vocabulary, data governance education layer.

Topic tags:
[data_science_taxonomy, ETL, data_ingest, data_encoding, data_cleansing, metrics, cross_validation, explainability, drift, simulation, synthetic_data, aggregation, clustering, operating_metrics, analytics_method_registry]


Priority: 2.75/5
Depth: medium semantic
Recommended status: route to Operating Intelligence / operating_metrics / data-method vocabulary / analytics education layer / Build-OS eval vocabulary. Do not promote as OMNI doctrine. This is a taxonomy/teaching source, not a spine source.

Core takeaway

This video creates a “data science periodic table” to organize analytics methods by two axes:

Data maturity: raw data → prepared data → modeled/refined data → validated insights.
Analytical activity: acquire/process/transform/model/generate/evaluate.

OMNI translation:

Useful as a vocabulary map for analytics methods, but not a domain model. It helps classify techniques used inside projections, operating metrics, Observation, Build-OS, and eval workflows.

The strongest keeper is not the specific table. It is the framing:

Data science methods should be understood by where they sit in the lifecycle from raw data to validated insight.

Key concepts to preserve
1. Data maturity ladder

The video organizes data science around a progression:

raw data → prepared data → modeled/refined data → validated insights.

OMNI keeper: this is a decent educational lens for OMNI’s analytics stack.

It maps loosely to:

D7 / source artifacts
↓
Observation / structured values
↓
Clinical Memory / assertions
↓
operating_metrics / projections
↓
validated insight / action candidate

But do not collapse OMNI’s authority model into this. OMNI’s clinical chain is stricter than a generic data-science pipeline.

2. ETL and data ingest

The video separates ETL from data ingest:

ETL moves raw data from sources into a centralized system.
Data ingest handles streaming or batch operators for processing data.

OMNI keeper: helpful vocabulary for Knowledge Reservoirs, D7 ingestion, Observation feeds, lab/device streams, and Build-OS corpus processing.

But in OMNI:

ingest ≠ adoption
loaded ≠ trusted
transformed ≠ authoritative

3. Data encoding / cleansing / structured data

Encoding converts categories/text/dates into numerical representations. Cleansing refines data. Structured data organizes data into tables, schemas, or graphs.

OMNI keeper: useful for Observation normalization, operating_metrics, and analytics pipelines.

Likely homes:

Observation normalization
D7 extraction-to-Observation
Identity matching features
operating_metrics rollups
Build-OS corpus indexing
Knowledge Reservoir preprocessing
4. Metrics and evaluation

The video introduces metrics/evaluation as a core element.

OMNI keeper: directly relevant to the eval family.

This should sharpen:

model evals
AI workflow evals
operating_metrics definitions
provider/workforce productivity metrics
D7 extraction accuracy
classifier performance
Build-OS agent performance

But metric definitions must live in the projection/eval layer, not as free-floating dashboard numbers.

5. Cross-validation

Cross-validation tests model robustness by rotating train/test slices.

OMNI keeper: useful vocabulary for AI model eval and Build-OS, especially when evaluating classifiers, extraction models, routing models, or prediction layers.

Not directly a care-domain primitive.

6. Explainability

Explainability explains model behavior, feature importance, or predictions.

OMNI keeper: relevant to Polaris/proof surfaces, operating metrics, and AI governance.

But OMNI’s “explainability” must be stricter than generic ML explanation. It needs:

source lineage
authority labels
model version
data freshness
domain owner
action threshold
human adoption state
7. Drift

Drift tracks shifts in data or model performance over time.

OMNI keeper: important. This is probably the most practical concept in the video.

Drift applies to:

AI model performance
intake response patterns
D7 extraction quality
patient population changes
marketing conversion
provider productivity
scheduling/no-show behavior
lab/value distributions
revenue/utilization baselines
agent output quality

Likely home:

operating_metrics
AI eval/monitoring
Build-OS
Observation quality monitoring
clinical/business drift dashboards

Doctrine candidate:

Any metric or model used operationally needs drift monitoring.

8. Bayesian models / bootstrapping / uncertainty

The video introduces Bayesian models and bootstrapping as uncertainty tools.

OMNI keeper: useful vocabulary for confidence, variability, and uncertainty—but be careful.

OMNI should not let statistical confidence become clinical authority.

Use for:

trend confidence
operating metric confidence intervals
forecast uncertainty
A/B testing
demand planning
marketing conversion intervals
staffing/utilization forecasts

Do not use to auto-adopt clinical truth.

9. PCA / dimensionality reduction

PCA reduces dimensionality while preserving variance.

OMNI keeper: low-level analytics vocabulary. Relevant to analytics/modeling, not doctrine.

Potential uses:

segmentation analysis
feature compression
provider/staff performance clustering
patient behavior analytics
anomaly detection

But this stays in analytics/eval method registry, not the thesis.

10. Ensemble / simulation / clustering / aggregation / synthetic data

These are all generic analytics tools.

OMNI keeper: useful as method names for the AI/data-science toolbox.

Potential OMNI use:

Ensemble: multiple model/classifier voting; maybe extraction confidence.
Simulation: scheduling capacity, staffing, revenue, fulfillment, patient flow.
Clustering: patient segments, campaign cohorts, operational patterns.
Aggregation: operating_metrics, owner dashboard, cohort analytics.
Synthetic data: testing, demo, simulation, privacy-preserving eval—never fake clinical truth.
11. Data governance

The video places governance at the validated-insight stage: rules ensuring quality, security, compliance.

OMNI keeper: affirming, but OMNI already goes much deeper.

For OMNI:

governance is not the final row only. Governance wraps every stage.

It applies at:

ingestion
storage
extraction
transformation
evaluation
projection
model use
action
retention
federation
audit

So preserve the vocabulary but do not import the table’s implied late-stage governance placement.

12. Quantum addendum

The quantum section lists quantum accessible memory, quantum encoding, quantum modeling, quantum synthetic data, and quantum metrics.

OMNI keeper: future watch only.

Do not route into OMNI build strategy. Maybe tag as macro/future analytics vocabulary.

OMNI translation

This video is best treated as a method taxonomy.

It helps answer:

When OMNI says analytics, metrics, evaluation, drift, explainability, or simulation, what family of methods are we talking about?

It should not create a data_science domain.

Instead, it supports:

operating_metrics projection definitions
AI eval vocabulary
Build-OS method registry
analytics surface education
Knowledge Reservoir processing
Observation quality workflows
business simulation/future planning
Likely OMNI landing zones

Operating Intelligence / operating_metrics

aggregation
metrics/evaluation
drift
explainability
confidence intervals
segmentation/clustering
simulation

Observation

encoding
cleansing
structured data
normalization
data-quality state

Knowledge Reservoirs

ETL/ingest
preprocessing
structured extraction
synthetic/eval data boundaries

Build-OS

model evals
cross-validation
drift testing
explainability checks
simulation harnesses
synthetic test corpora

Polaris / proof layer

explainability
lineage
data governance
evaluation surfaces

Future watch

quantum analytics methods
Doctrine candidates
Analytics methods belong in method registries and projections, not new domains.
Data maturity is not authority maturity.
Validated insight requires lineage, governance, and explainability.
Drift monitoring is required for operational metrics and AI systems.
Synthetic data may test systems; it must not become clinical truth.
Governance wraps the whole analytics lifecycle, not only the final insight.
Net-new / sharpen / affirm
Net-new candidates

Probably no spine-level net-new.

Possible low-weight vocabulary entries:

analytics_method_registry
A registry of analytics/data-science techniques used by projections, evals, simulations, and operating metrics.

data_maturity_ladder
Raw → prepared → modeled/refined → validated insight, used only as an education/analytics lens.

drift_monitoring_policy
Operational requirement that models/metrics used in workflows track distribution or performance shift over time.

Sharpen existing

operating_metrics
Adds a method vocabulary: aggregation, metrics, explainability, drift, confidence, simulation.

Observation
Affirms normalization/encoding/structured data as measured-value prep, not clinical meaning.

Build-OS evals
Affirms cross-validation, metrics, drift, and explainability as eval stack vocabulary.

Knowledge Reservoirs
Affirms ingest/cleanse/structure stages before extraction/promotion.

Affirm
analytics needs structure
metrics require context
evaluation is a lifecycle stage
explainability and drift matter
governance is necessary for validated insights
data science methods should be composable tools, not product silos
Reject / do not over-import
Do not create a Data Science domain.
Do not treat this periodic table as canonical taxonomy.
Do not collapse OMNI’s D7 → Observation → Clinical Memory → action chain into generic data science.
Do not treat statistical validation as clinical adoption.
Do not elevate the quantum addendum beyond future-watch vocabulary.
Hard read

Useful as a vocabulary scaffold, not a doctrine source.

Shortest OMNI version:

OMNI needs data-science methods, but they should live inside governed projections, evals, observations, reservoirs, and operating metrics—not become a free-floating analytics junk drawer.

The best keeper:

Data science stops being a jumble when each technique has a lifecycle position and a purpose. For OMNI, every analytics technique must also have an owner, lineage, authority boundary, and action threshold.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-07` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**HEADLINE VERDICT — `weight_tier = vocabulary (medium)` · `status = watch` · 0 spine-level net-new · 3 low-weight net-new NAMES (dedup-pending, Opus-main verifies).**
This is a **method-taxonomy / teaching source, not a spine source** (Knox 2.75/5, medium-semantic — formalized, not re-derived). It presents one educator's "data science periodic table" organized on two axes: **data maturity** (raw → prepared → modeled/refined → validated insight) × **analytical activity** (acquire → process → transform → model → generate → evaluate). For OMNI it is a **vocabulary map for the eval / operating-metrics / Observation-normalization / Knowledge-Reservoir-preprocessing families** — NOT a domain model. The single load-bearing keeper is the framing, sharpened for OMNI: *every analytics technique must sit at a lifecycle position AND carry an owner, lineage, authority boundary, and action threshold* — i.e. methods are **governed composable tools inside projections/evals/observations/reservoirs/operating-metrics, never a free-floating `data_science` domain or dashboard junk-drawer.** The one genuinely doctrine-relevant operational concept is **drift monitoring** (any model/metric used operationally must track distribution/performance shift). Everything routes through the OMNI reality-check: **data maturity ≠ authority maturity; ingest ≠ adoption; loaded ≠ trusted; transformed ≠ authoritative; statistical validation ≠ clinical adoption.** Do NOT promote as doctrine; do NOT create a data-science domain; do NOT elevate the quantum addendum beyond future-watch.

**A. Concept clusters** *(reality-check two-axis: `doctrine` vs thesis v3 + contracts + post-v3 · `build` = grepped repo: v2/v3 care build exists — lib/intake, lib/ai, rules, auth/capabilities.ts, RLS/audit; **no** model-registry / eval-harness / analytics-method-registry / drift-monitor in code)*

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 0 | Analytics-method-as-governed-tool (framing / strongest keeper) | Every technique = composable tool with a lifecycle position **+ owner + lineage + authority boundary + action threshold**; no `data_science` god-domain | thesis §A/§B · operating_metrics · Build-OS method registry · projection≠truth · Polaris | "which elements they're using, how they connect… what might be missing" [1:31] | AFFIRM | partial | none | vocabulary (spine-adjacent framing) | watch |
| 1 | Data maturity ladder | raw → prepared → modeled/refined → validated insight; **education/analytics lens only**, maps loosely to D7→Observation→Clinical-Memory→operating_metrics→action-candidate but is NOT the authority chain | operating_metrics · Observation · Sense-loop · Knowledge Reservoirs | "raw data all the way down into insights" [0:47] | PARTIAL | partial | tension (data-maturity vs OMNI authority-maturity chain) | vocabulary | watch |
| 2 | ETL / data ingest | Move raw source data into a centralized system; streaming/batch operators — vocabulary for Reservoir/D7/Observation feeds; **ingest ≠ adoption** | Knowledge Reservoirs · D7 ingestion · Observation feeds · Build-OS corpus | "moves raw data from sources into a centralized system" [1:46] | AFFIRM | partial | tension (loaded/transformed vs trusted/authoritative — promotion gate) | vocabulary | watch |
| 3 | Encoding / cleansing / structured data | Normalize categories/text/dates to numeric; organize into tables/schemas/graphs — **measured-value prep, not clinical meaning** | Observation normalization · D7 extraction-to-Observation · Identity matching features · operating_metrics rollups | "converts the categories, the text… into numerical representations" [2:39] | AFFIRM | partial | none | vocabulary | watch |
| 4 | Metrics & evaluation | Eval-family vocabulary; **metric definitions must live in the projection/eval layer, never as free-floating dashboard numbers** | Build-OS evals · operating_metrics · projection≠truth · provider/workforce productivity | "metrics and evaluation… the start of the refined data" [3:38] | PARTIAL | absent | tension (governed-metric-in-projection vs free-floating dashboard) | vocabulary | watch |
| 5 | Cross-validation | Robustness check by rotating train/test slices — AI-model / classifier / extractor / router eval vocabulary; **not a care primitive** | Build-OS evals · §B AI substrate | "cross validating models… rotating training and testing slices" [3:53] | PARTIAL | absent | none | vocabulary | watch |
| 6 | Explainability | Explain model behavior / feature importance / predictions — OMNI's must be **stricter**: source lineage + authority label + model version + freshness + owner + threshold + adoption state | Polaris / proof surfaces · §B AI governance · model_lineage · operating_metrics | "explains that model behavior or feature importance and predictions" [4:11] | PARTIAL | absent | tension (generic ML explanation vs governed explainability + lineage/authority) | vocabulary | watch |
| 7 | Drift | Track distribution / model-performance shift over time — the **most operationally practical concept**; any model/metric used operationally needs drift monitoring | operating_metrics · AI eval/monitoring · Build-OS · Observation quality · clinical/business drift | "shifts in the data or model performance… over time" [4:27] | PARTIAL | absent | none | vocabulary (doctrine-candidate) | watch |
| 8 | Bayesian / bootstrapping / uncertainty | Confidence/variability tools for **business** forecasts (trend, A/B, demand, staffing) — statistical confidence must **not** become clinical authority | operating_metrics · BIZOPS forecasting · §B | "uncertainty can be modeled by distributions… incorporates prior knowledge" [4:42] | AFFIRM | absent | tension (statistical-confidence vs clinical-authority — domains commit truth) | vocabulary | watch |
| 9 | PCA / dimensionality reduction | Compress data while preserving variance — low-level analytics method; segmentation / anomaly detection; stays in method registry, **not thesis** | operating_metrics analytics · method registry | "reduce the dimensionality… maintaining the highest variance" [5:51] | ABSENT | absent | none | low-authority-watch | watch |
| 10 | Ensemble / simulation / clustering / aggregation / synthetic data | Generic analytics toolbox method-names; simulation → scheduling/staffing/revenue/flow; **synthetic data may test/demo but must never become clinical truth** | operating_metrics · BIZOPS simulation · Build-OS synthetic test corpora · cohort analytics | "simulation, to create hypothetical scenarios to explore… outcomes" [6:22] | AFFIRM | absent | tension (synthetic-data vs clinical-truth) | vocabulary | watch |
| 11 | Data governance | Video places governance at the **final** (validated-insight) row only; OMNI AFFIRMS the vocabulary but **governance wraps EVERY stage** (ingest→storage→extract→transform→eval→projection→model-use→action→retention→federation→audit) | thesis authority gates · all domain contracts · Polaris · audit · auth/capabilities.ts | "define rules to ensure… quality, security, and compliance" [5:30] | AFFIRM (stronger) | partial | tension (late-stage governance vs governance-wraps-lifecycle) | vocabulary (spine-adjacent affirm) | watch |
| 12 | Quantum addendum (QAM · encoding · modeling · synthetic · metrics) | Quantum-analytics method vocabulary outside classical computing — **future-watch only; do NOT route into build strategy** | future-watch (macro/analytics) | "outside the realm of classical computing… a quantum addendum" [7:12] | ABSENT | absent | none | no-op (future-watch) | watch |

**B. Net-new primitives** — `name — meaning — EXISTS-AS`. *(Dedup vs EVRUN-000001 §2A + EVRUN-000002 registry + wave-3 minted set. **dedup-pending, Opus-main verifies.**)*
- `analytics_method_registry` — a governed registry of analytics/data-science techniques (aggregation, PCA, ensemble, clustering, cross-validation, simulation…) usable by projections, evals, simulations, and operating-metrics — **EXISTS-AS: net-new NAME only, low-weight; mechanism ≈ Build-OS "method registry" concept + operating_metrics + projection≠truth. Mint as a catalog LABEL, NOT a mechanism/domain (`GRD-026`/`GRD-035`).**
- `data_maturity_ladder` — raw → prepared → modeled/refined → validated-insight, used strictly as an education/analytics lens — **EXISTS-AS: net-new NAME (low-weight); MUST NOT collapse OMNI's authority chain (D7→Observation→Clinical-Memory→action). Bounded by the existing distinction `data_maturity ≠ authority_maturity` (composes `source_authority` + `clinical_adoption` + `projection≠truth`). Watch-only.**
- `drift_monitoring_policy` — operational requirement that any model/metric used in a workflow tracks distribution or performance shift over time — **EXISTS-AS: net-new (composes operating_metrics + AI eval/monitoring; no exact prior). HIGHEST-VALUE of the three (operationally load-bearing); converges with 204 runtime-telemetry / cost-latency benchmarking. Watch → possible doctrine-candidate elevation on cross-wave.**
- (do NOT mint — sharpen only, EXISTS-AS prior) `data_maturity_not_authority_maturity` ≈ `source_authority`+`clinical_adoption`+`projection≠truth` · `governance_wraps_lifecycle` ≈ existing authority-gates doctrine · `synthetic_not_clinical_truth` ≈ AI-proposes/domains-commit law · `metric_lives_in_projection` ≈ `projection≠truth`. Method names (ETL, ingest, encoding, cleansing, ensemble, clustering, aggregation, PCA, cross-validation, explainability, Bayesian, bootstrapping, simulation) = **vocabulary entries under `analytics_method_registry`, not primitives.**

**C. Reread flags.**
1. **Speaker/channel unconfirmed** — no screenshot; presenter identity + channel inferred as IBM-Technology/Martin-Keen-adjacent from the explicit "how Martin organized an AI periodic table" callback (companion to EVSRC-2026-000082). Confirm from screenshot before firming §0/§0.1.
2. **`drift_monitoring_policy` elevation** — reread against 204 (runtime telemetry / cost-latency drift) + 201 (evals-as-strategic-assets) to decide if this crosses from vocabulary → operating-metrics doctrine-candidate.
3. **`governance_wraps_lifecycle`** — confirm exact wording against thesis authority-gate doctrine so the AFFIRM-stronger claim (cluster 11) is not re-deriving settled doctrine.
4. **No-data-science-domain guardrail** — ensure Opus-main routes methods into `operating_metrics` / method-registry / eval, never a new domain (`GRD-026` payload-noun≠domain).

**D. One-line hard read + strongest OMNI line.**
- **Hard read:** Useful as a *vocabulary scaffold*, not a doctrine source — a taxonomy of analytics methods that OMNI files under governed projections/evals/observations/reservoirs/operating-metrics, never a free-floating analytics junk-drawer or a `data_science` domain.
- **Strongest OMNI line:** *"Data science stops being a jumble when each technique has a lifecycle position and a purpose"* [8:22-8:31] — for OMNI, **every analytics technique must ALSO carry an owner, lineage, authority boundary, and action threshold**; data maturity is not authority maturity, and validated insight ≠ committed truth.

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `§B AI substrate (eval/analytics-method vocabulary) · operating_metrics/BIZOPS (drift, aggregation, confidence, simulation) · Observation (normalization/encoding/structured-data) · Knowledge Reservoirs (ETL/ingest/preprocessing) · Build-OS (cross-validation/metrics/drift/explainability eval stack, synthetic test corpora) · Polaris/proof (explainability + lineage + governance) · future-watch (quantum addendum)` · promotion: `watch` (vocabulary tier; 0 spine net-new; 3 low-weight net-new NAMES dedup-pending — Opus-main folds into registry §2; PROPOSES only, `GRD-036`)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — Opus Review 003 formal deep extraction written (formalizing Knox Review 001): §0/§0.1 metadata inferred (speaker/channel `TK (unconfirmed)`, slug `data-science-periodic-table` proposed), status flipped `raw_dropped`→`analyzed`, §0.5 ticked, §4 pointers filled. 13 concept clusters (framing + 12 method families); 0 spine net-new; 3 low-weight net-new NAMES proposed (`analytics_method_registry`, `data_maturity_ladder`, `drift_monitoring_policy` — dedup-pending). Verdict: vocabulary tier, `watch`; no data-science domain; quantum = future-watch. Binds nothing (`GRD-036`/`GRD-044`); registry/coverage/anchor folds deferred to Opus-main.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.
