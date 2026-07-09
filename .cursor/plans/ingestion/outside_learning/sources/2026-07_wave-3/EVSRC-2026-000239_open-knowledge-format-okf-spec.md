# EVSRC-2026-000239 — Open Knowledge Format (OKF) v0.1 — spec + reference-agent README

https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/README.md



Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000239_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
> ✅ **URL RESOLVED by operator (2026-07-08).** Nick added the repo URL at top of file: `https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/README.md`. This **confirms org = Google Cloud Platform (official GitHub org)**, repo = `knowledge-catalog`, artifact = `okf/README.md` + `SPEC.md` — so the earlier "inferred Google-ecosystem" is now **confirmed official Google**. `identity_confidence: high_from_operator_url`. Still open (minor): named authors + explicit publish date not stated in the repo text; **no Knox Review 001** (§3 = agent-derived from §1 verbatim, not a formalized strategic read). §1 is a GitHub `README.md`+`SPEC.md` paste, NOT a video transcript.
- evsrc_id: `EVSRC-2026-000239`  ·  filename: `EVSRC-2026-000239_open-knowledge-format-okf-spec.md` *(renamed 2026-07-08)*
- source_platform: `GitHub repo (README.md + SPEC.md)` *(NOT YouTube)*  ·  source_url: `https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/README.md`  ·  source_title: `Open Knowledge Format (OKF) — v0.1 Draft` (repo: `GoogleCloudPlatform/knowledge-catalog`)
- channel_or_org: `Google Cloud Platform` (official `GoogleCloudPlatform` GitHub org — **confirmed via operator URL**; stack: Gemini/Vertex AI, BigQuery, Dataplex, Google ADK, GA4 sample)  ·  speaker: `TK — repo authors, unnamed in text`  ·  published_at: `TK` (spec self-labels "Version 0.1 — Draft"; in-doc example timestamps 2026-05)
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste (repo README + SPEC); no screenshot, no Knox read`
- content_type: `open-source technical specification + reference-implementation README (knowledge-representation format)`  ·  source_reliability_context: `practitioner / vendor-OSS (inferred Google-ecosystem)`  ·  topic_tags_light: `[knowledge-representation, markdown+frontmatter, metadata-as-code, agent-readable-knowledge, vendor-neutral-format, progressive-disclosure, knowledge-graph, enrichment-agent, catalog]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `TK — unnamed repo authors` · role_in_source: `author (spec + reference implementation)` · affiliation_at_publication: `Google Cloud Platform (confirmed via operator URL)` · speaker_type: `vendor (official Google OSS spec author)` · authority_context: `format-spec author; self-describing OSS proof-of-concept (spec is the claimed contribution, agent+visualizer are demos)` · identity_confidence: `high_from_operator_url` (org confirmed; individual authors still TK)
  - *(add a bullet per additional speaker)*
- publisher / channel: `GoogleCloudPlatform / knowledge-catalog (GitHub)`  ·  interviewer / moderator / host: `n/a (written spec, not an interview/talk)`
- event_context: `open-source release of the "Open Knowledge Format (OKF) v0.1 Draft" — a vendor-neutral markdown+YAML-frontmatter knowledge-representation format, shipped with a Gemini/BigQuery reference "enrichment agent" and an interactive OKF-bundle visualizer`  ·  perspective / conflict notes: `vendor-adjacent OSS (Google-stack tooling); the spec explicitly positions the FORMAT as the contribution and the agent/visualizer as disposable demos — low product-capture risk, high pattern-convergence with OMNI's own doctrine plane`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [ ] screenshot in chat *(none provided)* · [ ] **Knox strategic read → §3 Review 001** *(⚑ NOT provided — empty)* · [ ] (optional) gut note → §3 Review 002 *(none)*
**Agent (Opus) does:** [x] id+filename *(renamed 2026-07-08)* · [x] §0 metadata *(✅ url resolved by operator → org = Google Cloud Platform confirmed; authors/date still TK; no Knox read)* · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** *(no Review 001 to formalize → derived from §1 verbatim; reread-flagged)* · [ ] update EVRUN concept registry (cross-source) *(deferred to Opus-main fold per hard contract — do NOT edit registry)* · [ ] update coverage matrix *(deferred to Opus-main)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️




# Open Knowledge Format (OKF)

### 📖 [Read the Open Knowledge Format v0.1 specification → SPEC.md](SPEC.md)

> **This repository is primarily about the [Open Knowledge Format
> (OKF)](SPEC.md).**
>
> OKF is a **universal, vendor-neutral format** for representing knowledge
> as plain markdown files with YAML frontmatter. It is **not tied to any
> particular agent, framework, model provider, or serving system**. The
> goal is simple:
>
> - **Anyone can produce** OKF — humans authoring by hand, agents built on
>   any framework (Google ADK, LangChain, custom), export pipelines from
>   existing catalogs (Dataplex, Unity Catalog, Collibra, …), or scripts
>   walking a database.
> - **Anyone can serve and consume** OKF — a static file server, a
>   knowledge-management UI (Obsidian, Notion, MkDocs), an LLM loading
>   files into context, a search index, or a graph viewer like the one
>   bundled in this repo.
>
> The agent below is a **proof of concept** demonstrating *one* way to
> produce OKF bundles automatically. The format itself is the
> contribution; this agent and the visualizer exist to make the format
> tangible at both ends — production and consumption.
>
> **See OKF in practice** — three ready-to-browse bundles produced by this
> agent, checked into [`bundles/`](bundles/):
>
> - [`bundles/ga4/`](bundles/ga4/) — GA4 e-commerce dataset
>   ([viz.html](bundles/ga4/viz.html))
> - [`bundles/stackoverflow/`](bundles/stackoverflow/) — Stack Overflow
>   public dataset ([viz.html](bundles/stackoverflow/viz.html))
> - [`bundles/crypto_bitcoin/`](bundles/crypto_bitcoin/) — Bitcoin
>   blocks/transactions ([viz.html](bundles/crypto_bitcoin/viz.html))

## Why OKF?

OKF represents catalog knowledge as plain markdown files with YAML
frontmatter, organized in a directory hierarchy. That choice unlocks a few
properties that are hard to get from a service-owned metadata store:

- **Human- and agent-readable.** No SDK or query language stands between a
  reader and the content. An engineer can `cat` a concept; an LLM can ingest
  it verbatim into context.
- **Version-controllable out of the box.** Bundles live in git. Pull
  requests, line-by-line diffs, blame, and review workflows just work —
  knowledge curation becomes a normal software-engineering activity.
- **Portable and lock-in free.** A bundle is a directory. Ship it as a
  tarball, host it in any repo, mount it from any filesystem, or sync it to
  any system that speaks files. No proprietary API stands between you and
  your metadata.
- **Mixes structured and unstructured data deliberately.** Use frontmatter
  for the few fields you want to query, filter, or index on (`type`,
  `resource`, `tags`, `timestamp`); use the markdown body for the prose,
  schemas, and example queries that LLMs and humans actually read.
- **Minimally opinionated, freely extensible.** A small set of required
  keys ensures interoperability, but bundles can carry arbitrary extra
  frontmatter keys and arbitrary body sections without breaking
  consumers.
- **Composes with existing tooling.** Many knowledge tools — Notion,
  Obsidian, MkDocs, Hugo, Jekyll — already speak markdown plus YAML
  frontmatter, so bundles can be browsed, edited, or rendered without
  custom UI.
- **Progressive disclosure built in.** Auto-generated `index.md` files
  let an agent or human navigate the hierarchy one level at a time
  instead of loading the entire bundle into context.
- **Graph-shaped, not just tree-shaped.** Concepts link to each other via
  normal markdown links, expressing relationships richer than the
  parent/child implied by the directory layout.

The net effect is that reference agents, consumption agents, and humans
collaborate on the same artifacts in the same way they already collaborate
on source code.

## Install

```
python3.13 -m venv .venv
.venv/bin/pip install --index-url https://pypi.org/simple/ -e .[dev]
```

## Credentials

- BigQuery: `gcloud auth application-default login` plus a project for billing
  (`gcloud config set project <id>`). Public datasets are readable, but the
  caller's project is billed for query bytes.
- Gemini: set `GEMINI_API_KEY` (AI Studio) **or** use Vertex AI by setting
  `GOOGLE_GENAI_USE_VERTEXAI=true`, `GOOGLE_CLOUD_PROJECT=<id>`, and
  `GOOGLE_CLOUD_LOCATION=<region>`.

## How the reference agent works

The reference agent runs in two passes. The **BQ pass** writes one OKF
doc per concept the source advertises, using BigQuery metadata alone.
The **web pass** then runs the LLM as its own crawler: it receives a
list of seed URLs (provided via `--web-seed` or `--web-seed-file`),
fetches the seeds via the `fetch_url` tool, and decides which outbound
links are worth following based on whether they look like authoritative
documentation for the existing concepts. For each page it fetches, the
agent chooses to (a) enrich one or more existing concept docs, (b) mint
a standalone `references/<slug>` doc, or (c) skip. A hard
`--web-max-pages` cap and a same-domain allowed-hosts filter
(configurable via `--web-allowed-host`) are enforced inside the tool,
so the agent cannot overrun. Use `--no-web` to skip the web pass.

## Run

Minimum invocation — point at a BigQuery dataset and a bundle output
directory. Seeds for the web pass are explicit; omit them (or pass
`--no-web`) to run BQ-only:

```
.venv/bin/python -m reference_agent enrich \
    --source bq \
    --dataset <project>.<dataset> \
    --web-seed-file <path/to/seeds.txt> \
    --out ./bundles/<name>
```

Iterate on a single concept by adding `--concept <type>/<name>` (e.g.
`--concept tables/events_`); repeatable.

## Samples

Each sample pairs a **recipe** (`samples/<name>/`, with the seed URLs and
exact `enrich` command) with the **produced bundle** (`bundles/<name>/`)
that the recipe generated. Open the recipe to reproduce; open the bundle
to browse the result directly.

- **GA4 Google Merchandise Store** — public e-commerce dataset, seeded
  with canonical GA4 BigQuery Export documentation URLs.
  · [recipe](samples/ga4_merch_store/README.md)
  · [bundle](bundles/ga4/)
  · [viz.html](bundles/ga4/viz.html)
- **Stack Overflow** — public dataset (mirror of the Stack Exchange Data
  Dump), seeded with the community's canonical schema references.
  Exercises multi-concept enrichment from cross-cutting docs pages.
  · [recipe](samples/stackoverflow/README.md)
  · [bundle](bundles/stackoverflow/)
  · [viz.html](bundles/stackoverflow/viz.html)
- **Bitcoin (crypto)** — public dataset (blocks, transactions, inputs,
  outputs) from the `bitcoin-etl` pipeline. Exercises cross-table
  foreign-key relationships in prose.
  · [recipe](samples/crypto_bitcoin/README.md)
  · [bundle](bundles/crypto_bitcoin/)
  · [viz.html](bundles/crypto_bitcoin/viz.html)

## Visualize

The `visualize` subcommand renders any OKF bundle as a **self-contained
interactive HTML file** — one file, no backend, no install on the
viewing side. Open it in any modern browser, share it as an artifact,
host it on a static file server, or commit it next to the bundle (as
this repo does).

The viewer is itself a proof-of-concept *consumer* of OKF, mirroring
the way the reference agent is a proof-of-concept *producer*. OKF
bundles can be consumed by anything that reads markdown; this is just
one shape.

### What it shows

- A **force-directed graph** of every concept in the bundle, with
  colored nodes by type (datasets, tables, references, …) and directed
  edges drawn from each cross-link in the markdown bodies.
- A **detail panel** for the selected concept showing its frontmatter
  (description, resource link, tags) and its rendered markdown body —
  with internal `[…](/path/to/concept.md)` links rewired to navigate
  within the viewer instead of following the path.
- A **"Cited by" backlinks** list under each concept (computed from the
  reverse of the link graph).
- A **search box** (matches title, concept id, and tags), a **type
  filter**, and switchable graph layouts (cose / concentric /
  breadth-first / circle / grid).

### Generate

```
.venv/bin/python -m reference_agent visualize --bundle ./bundles/<name>
```

That writes `bundles/<name>/viz.html`. Flags:

| Flag           | Default                | Description                                 |
|----------------|------------------------|---------------------------------------------|
| `--bundle`     | *(required)*           | Bundle root directory.                      |
| `--out`        | `<bundle>/viz.html`    | Output HTML path.                           |
| `--name`       | bundle directory name  | Display name shown in the viewer header.    |

Example, writing the output somewhere else and overriding the header:

```
.venv/bin/python -m reference_agent visualize \
    --bundle ./bundles/crypto_bitcoin \
    --out /tmp/btc.html \
    --name "Bitcoin OKF"
```

### How it's built

The HTML embeds the bundle as a JSON blob and uses
[Cytoscape.js](https://js.cytoscape.org/) for the graph and
[marked](https://marked.js.org/) for in-browser markdown rendering,
both loaded from a CDN. No data leaves the page; the bundle is parsed
once at generation time and serialized into the file.

## Tests

```
.venv/bin/pytest
```















# Open Knowledge Format (OKF)

**Version 0.1 — Draft**

OKF is an open, human- and agent-friendly format for representing
*knowledge* — the metadata, context, and curated insight that surrounds
data and systems. It is designed to be authored by people, generated by
agents, exchanged across organizations, and consumed by both.

The format is intentionally minimal: a directory of markdown files with
YAML frontmatter. There is no schema registry, no central authority, and
no required tooling. If you can `cat` a file, you can read OKF; if you
can `git clone` a repo, you can ship it.

---

## 1. Motivation

The space of knowledge representation for AI agents is evolving quickly,
and many incompatible conventions are emerging. OKF takes the position
that knowledge is best represented in commonly accessible, established
formats that are:

- **Readable** by humans without tooling.
- **Parseable** by agents without bespoke SDKs.
- **Diffable** in version control.
- **Portable** across tools, organizations, and time.

The format is minimally opinionated. It standardizes only the small set
of structural conventions needed to make a knowledge corpus
*self-describing* — anything beyond that is left to the producer.

### Goals

1. Define a universal format that **enrichment agents** can write into.
2. Inform how **consumption agents** should read and traverse it.
3. Facilitate **exchange** of knowledge across systems and organizations.
4. Standardize the small number of **required** fields that must be
   present for content to be meaningfully consumed.

### Non-goals

- Defining a fixed taxonomy of concept types.
- Prescribing storage, serving, or query infrastructure.
- Replacing domain-specific schemas (Avro, Protobuf, OpenAPI, etc.) —
  OKF *references* them; it does not subsume them.

---

## 2. Terminology

- **Knowledge Bundle** — A self-contained, hierarchical collection of
  knowledge documents. The unit of distribution.
- **Concept** — A single unit of knowledge within a bundle. Represented
  as one markdown document. May describe a tangible asset (a table, an
  API), an abstract idea (a metric, a business process), or anything in
  between.
- **Concept ID** — The path of the concept's file within the bundle,
  with the `.md` suffix removed. For example, `tables/users.md` has
  concept ID `tables/users`.
- **Frontmatter** — YAML metadata block delimited by `---` at the top of
  a markdown file.
- **Body** — Everything in the file after the frontmatter.
- **Link** — A standard markdown link from one concept to another, used
  to express relationships beyond the implicit parent/child hierarchy.
- **Citation** — A link from a concept to an external source that
  supports a claim in the body.

---

## 3. Bundle Structure

A bundle is a directory tree of markdown files. The directory structure
is independent of the domain — producers organize concepts however makes
sense for the knowledge being captured.

```
path/to/bundle/
├── index.md                      # Optional. Directory listing for progressive disclosure.
├── log.md                        # Optional. Chronological history of updates.
├── <concept>.md                  # A concept at the bundle root.
└── <subdirectory>/               # Subdirectories organize concepts into groups.
    ├── index.md
    ├── <concept>.md
    └── <subdirectory>/
        └── …
```

A bundle MAY be distributed as:

- A git repository (recommended — provides history, attribution, diffs).
- A tarball or zip archive of the directory.
- A subdirectory within a larger repository.

### 3.1 Reserved filenames

The following filenames have defined meaning at any level of the
hierarchy and MUST NOT be used for concept documents:

| Filename     | Purpose                                                |
|--------------|--------------------------------------------------------|
| `index.md`   | Directory listing. See §6.                             |
| `log.md`     | Update history. See §7.                                |

All other `.md` files are concept documents.

Tags themselves remain a first-class concept — see the `tags`
frontmatter field in §4.1. OKF does not specify a separate file format
for aggregating documents by tag; producers that want a tag-browsing
view can synthesize one at consumption time by scanning frontmatter.

---

## 4. Concept Documents

Every concept is a UTF-8 markdown file. It has two parts:

1. A **YAML frontmatter block**, delimited by `---` on its own line at
   the start of the file and a closing `---` on its own line.
2. A **markdown body**, containing free-form content.

### 4.1 Frontmatter

```yaml
---
type: <Type name>                  # REQUIRED
title: <Optional display name>
description: <Optional one-line summary>
resource: <Optional canonical URI for the underlying asset>
tags: [<tag>, <tag>, …]            # Optional
timestamp: <ISO 8601 datetime>     # Optional last-modified time
# … other producer-defined key/value pairs
---
```

**Required:**

- `type` — A short string identifying the kind of concept. Consumers
  use this for routing, filtering, and presentation. Example values:
  `BigQuery Table`, `BigQuery Dataset`, `API Endpoint`, `Metric`,
  `Playbook`, `Reference`.

  Type values are **not** registered centrally. Producers SHOULD pick
  values that are descriptive and self-explanatory; consumers MUST
  tolerate unknown types gracefully (typically by treating them as
  generic concepts).

**Recommended (in priority order):**

- `title` — Human-readable display name. If omitted, consumers MAY
  derive a title from the filename.
- `description` — A single sentence summarizing the concept. Used by
  `index.md` generators, search snippets, and previews.
- `resource` — A URI that uniquely identifies the underlying asset the
  concept describes. Absent for concepts that describe abstract ideas
  rather than physical resources.
- `tags` — A YAML list of short strings for cross-cutting categorization.
- `timestamp` — ISO 8601 datetime of last meaningful change.

**Extensions:** Producers MAY include any additional keys. Consumers
SHOULD preserve unknown keys when round-tripping and SHOULD NOT reject
documents with unrecognized fields.

### 4.2 Body

The body is standard markdown. Producers SHOULD favor structural
markdown — headings, lists, tables, fenced code blocks — over freeform
prose, since structure aids both human reading and agent retrieval.

There are no required body sections. The following section headings have
**conventional** meaning and SHOULD be used when applicable:

| Heading        | Purpose                                                |
|----------------|--------------------------------------------------------|
| `# Schema`     | Structured description of an asset's columns/fields.   |
| `# Examples`   | Concrete usage examples, often as fenced code blocks.  |
| `# Citations`  | External sources backing claims in the body. See §8.   |

### 4.3 Example: a concept bound to a resource

```markdown
---
type: BigQuery Table
title: Customer Orders
description: One row per completed customer order across all channels.
resource: https://console.cloud.google.com/bigquery?p=acme&d=sales&t=orders
tags: [sales, orders, revenue]
timestamp: 2026-05-28T14:30:00Z
---

# Schema

| Column        | Type      | Description                              |
|---------------|-----------|------------------------------------------|
| `order_id`    | STRING    | Globally unique order identifier.        |
| `customer_id` | STRING    | Foreign key into [customers](/tables/customers.md). |
| `total_usd`   | NUMERIC   | Order total in US dollars.               |
| `placed_at`   | TIMESTAMP | When the customer submitted the order.   |

# Joins

Joined with [customers](/tables/customers.md) on `customer_id`.

# Citations

[1] [BigQuery table schema](https://console.cloud.google.com/bigquery?p=acme&d=sales&t=orders)
```

### 4.4 Example: a concept not bound to a resource

```markdown
---
type: Playbook
title: Incident response — data freshness alert
description: Steps to triage a freshness alert on the orders pipeline.
tags: [oncall, incident]
timestamp: 2026-04-12T09:00:00Z
---

# Trigger

A freshness alert fires when `orders` lags more than 30 minutes behind
its expected SLA. See the [orders table](/tables/orders.md).

# Steps

1. Check the [ingestion job dashboard](https://example.com/dash).
2. …
```

---

## 5. Cross-linking

Concepts MAY link to other concepts using standard markdown links. Two
forms are supported:

### 5.1 Absolute (bundle-relative) links

Begin with `/`, interpreted relative to the bundle root.

```markdown
See the [customers table](/tables/customers.md) for the join key.
```

This is the **recommended** form because it is stable when documents are
moved within their subdirectory.

### 5.2 Relative links

Standard markdown relative paths.

```markdown
See the [neighboring concept](./other.md).
```

### 5.3 Link semantics

A link from concept A to concept B asserts a *relationship*. The
specific kind of relationship (parent/child, references, joins-with,
depends-on, etc.) is conveyed by the surrounding prose, not by the link
itself. Consumers that build a graph view typically treat all links as
directed edges of an untyped relationship.

Consumers MUST tolerate broken links — a link whose target does not
exist in the bundle is not malformed; it may simply represent
not-yet-written knowledge.

---

## 6. Index Files

An `index.md` file MAY appear in any directory, including the bundle
root. It enumerates the directory's contents to support **progressive
disclosure** — letting a human or agent see what is available before
opening individual documents.

Index files contain no frontmatter. The body uses one or more sections,
each grouping concepts under a heading:

```markdown
# Section / Group Heading

* [Title 1](relative-url-1) - short description of item 1
* [Title 2](relative-url-2) - short description of item 2

# Another Section

* [Subdirectory](subdir/) - short description of the subdirectory
```

Entries SHOULD include the description from the linked concept's
frontmatter. Producers MAY generate `index.md` automatically; consumers
MAY synthesize one on the fly when none is present.

---

## 7. Log Files (optional)

A `log.md` file MAY appear at any level of the hierarchy to record the
history of changes to that scope. The format is a flat list of
date-grouped entries, newest first:

```markdown
# Directory Update Log

## 2026-05-22
* **Update**: Added new BigQuery table reference for [Customer Metrics](/tables/customer-metrics.md).
* **Creation**: Established the [Dataplex Playbook](/playbooks/dataplex.md).

## 2026-05-15
* **Initialization**: Created foundational directory structure.
* **Update**: Added progressive-disclosure guidelines to the root [index](/index.md).
```

Date headings MUST use ISO 8601 `YYYY-MM-DD` form. Log entries are
prose; the leading bold word (`**Update**`, `**Creation**`,
`**Deprecation**`, etc.) is a convention, not a requirement.

---

## 8. Citations

When a concept's body makes claims sourced from external material,
those sources SHOULD be listed under a `# Citations` heading at the
bottom of the document, numbered:

```markdown
# Citations

[1] [BigQuery public dataset announcement](https://cloud.google.com/blog/products/data-analytics/...)
[2] [Internal data quality runbook](https://wiki.acme.internal/data/quality)
```

Citation links MAY be absolute URLs, bundle-relative paths, or paths
into a `references/` subdirectory that mirrors external material as
first-class OKF concepts.

---

## 9. Conformance

A bundle is **conformant** with OKF v0.1 if:

1. Every non-reserved `.md` file in the tree contains a parseable YAML
   frontmatter block.
2. Every frontmatter block contains a non-empty `type` field.
3. Every reserved filename (`index.md`, `log.md`) follows the structure
   described in §6 and §7 respectively when present.

Consumers SHOULD treat all other constraints as soft guidance. In
particular, consumers MUST NOT reject a bundle because of:

- Missing optional frontmatter fields.
- Unknown `type` values.
- Unknown additional frontmatter keys.
- Broken cross-links.
- Missing `index.md` files.

This permissive consumption model is intentional: OKF is meant to
remain useful as bundles grow, get refactored, and are partially
generated by agents.

---

## 10. Relationship to other formats

OKF is intentionally close to several established patterns:

- **LLM "wiki" repositories** that use markdown + frontmatter as
  agent-readable knowledge bases.
- **Personal knowledge tools** like Obsidian and Notion, which use
  hierarchical markdown with cross-links.
- **"Metadata as code"** approaches that store catalog metadata
  alongside source code rather than in a separate registry.

OKF differs primarily in being **specified** — pinning down the small
set of rules needed for interoperability without dictating tooling.

---

## 11. Versioning

This document specifies OKF version **0.1**. Future revisions will be
versioned in the form `<major>.<minor>`:

- A **minor** version bump introduces backward-compatible additions
  (new optional fields, new conventional section headings).
- A **major** version bump may make breaking changes (renaming required
  fields, changing reserved filenames).

Bundles MAY declare the OKF version they target by including
`okf_version: "0.1"` in a bundle-root `index.md` frontmatter block (the
only place frontmatter is permitted in an `index.md`). Consumers that
do not understand the declared version SHOULD attempt best-effort
consumption rather than refusing the bundle.

---

## Appendix A — Minimal example bundle

```
my_bundle/
├── index.md
├── datasets/
│   ├── index.md
│   └── sales.md
└── tables/
    ├── index.md
    ├── orders.md
    └── customers.md
```

`datasets/sales.md`:

```markdown
---
type: BigQuery Dataset
title: Sales
description: All sales-related tables for the retail business.
resource: https://console.cloud.google.com/bigquery?p=acme&d=sales
tags: [sales]
timestamp: 2026-05-28T00:00:00Z
---

The sales dataset contains transactional tables, including
[orders](/tables/orders.md) and [customers](/tables/customers.md).
```

`tables/orders.md`:

```markdown
---
type: BigQuery Table
title: Orders
description: One row per completed customer order.
resource: https://console.cloud.google.com/bigquery?p=acme&d=sales&t=orders
tags: [sales, orders]
timestamp: 2026-05-28T00:00:00Z
---

# Schema

| Column        | Type      | Description                  |
|---------------|-----------|------------------------------|
| `order_id`    | STRING    | Unique order identifier.     |
| `customer_id` | STRING    | FK to [customers](/tables/customers.md). |
| `total_usd`   | NUMERIC   | Order total in USD.          |

Part of the [sales dataset](/datasets/sales.md).
```

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

- reviewer: `Opus` · at: `2026-07-08` · purpose: formal per-source extraction · binds nothing (`GRD-036`/`GRD-044`)
- ⚑ **No Review 001 (Knox) to formalize** — this extraction is derived directly from §1 verbatim (the OKF README + SPEC), reread-flagged (§3-C). ⚑ **No timestamps** exist (written spec, not a/v) — source anchors cite spec/README section markers instead of `[mm:ss]`.

### HEADLINE VERDICT
**OKF is an external, vendor-neutral *formal specification* of the exact pattern OMNI's own doctrine + evidence plane already runs.** "Knowledge = a git-versioned directory of plain markdown files with YAML frontmatter, navigable by progressive-disclosure `index.md`, cross-linked into a graph, backed by citations, produced by agents and consumed by humans+agents, with a minimal required key-set and permissive forward-compatible consumption" **is literally `.cursor/plans/`**: passports (`= frontmatter`), `00_architecture_artifact_index.md` + the Manifest-Read-Graph (`= index.md` progressive disclosure), the comparator/anchor registries + evolution narrative (`= cross-links + log.md`), and this very Evidence-Plane's source-anchor/citation discipline. Verdict: **AFFIRM-heavy, build = present-as-doctrine-artifact (ABSENT as app code), ~0–1 net-new *mechanisms*** (one defensible net-new NAME on the cross-org *interchange/exchange* angle), and **exactly ONE genuine tension** — OKF's foundational "**no schema registry, no central authority, type values not registered**" posture vs OMNI's non-negotiable "document identity is first-class; classification + catalog row + passport authority are mandatory before anything binds." **Weight: vocabulary / low-authority-watch** (no Knox depth, written spec, high convergence, near-zero net-new frame). **Strongest yield: the cross-org knowledge-*interchange-format* leg** (Federation-relevant) — the one thing OMNI's internal doctrine repo is NOT designed as. Converges tightly with 219 (OpenWiki agent-readable repo docs), 236 (static/dynamic-context = read-graph), 232 (`agent_ready_unstructured_data_substrate`), 227 (memory model). **⚑ metadata missing / transcript-derived (url/date TK).**

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [marker]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Knowledge = plain markdown + YAML frontmatter files | This IS OMNI's doctrine plane: passport-headed markdown; no SDK/service between reader and truth | Knowledge-Reservoirs · document-governance · Manifest-Read-Graph | *"plain markdown files with YAML frontmatter"* [SPEC intro] | AFFIRM | present-as-doctrine-artifact / absent-app | none | vocabulary | watch |
| 2 | Progressive disclosure via `index.md` hierarchy | Verbatim the Manifest-Read-Graph: navigate one tier at a time, don't load the whole corpus (Tier-0 boot-visible vs consult-triggered) | Manifest-Read-Graph (spine-AFFIRM) · `00_architecture_artifact_index.md` · CNS context-sizing | *"navigate the hierarchy one level at a time"* [README Why] | AFFIRM | present-as-doctrine-artifact | none | vocabulary→spine-affirm | watch |
| 3 | Version-controllable knowledge / metadata-as-code | Knowledge curation = software engineering (PRs, diffs, blame, review); = this EVRUN pipeline + REV-199 + 219 git-history→context | Build-OS · REV-199 · Agent-Work-Protocol · document-governance | *"knowledge curation becomes a normal software-engineering activity"* [README Why] | AFFIRM | present-as-doctrine-artifact | none | vocabulary | watch |
| 4 | Vendor-neutral / portable / lock-in-free format | Model-pluggability doctrine extended to the KNOWLEDGE-representation layer; ship-as-a-directory portability | §B substrate model-pluggability · Federation portability · Knowledge-Reservoirs | *"not tied to any particular agent, framework, model provider"* [README] | AFFIRM | partial | none | vocabulary | watch |
| 5 | Structured+unstructured mixed by design (frontmatter query-keys + prose body) | Passport = the few governed/queryable fields; body = the prose humans+LLMs read. OMNI's passport/body split exactly | document-governance passport · Knowledge-Reservoirs · 232 data-substrate | *"frontmatter for the few fields you want to query"* [README] | AFFIRM | present-as-doctrine-artifact | none | vocabulary | watch |
| 6 | Graph-shaped knowledge (cross-links + "cited-by" backlinks; untyped edges) | Concepts relate via links richer than tree; relationship type carried by prose. = comparator/anchor registries + evolution-narrative cross-refs | Knowledge-Reservoirs · comparator_analogy_registry · Intelligence-Foundry | *"Concepts link to each other via normal markdown links"* [README] | PARTIAL | partial | none | vocabulary | watch |
| 7 | Producer/consumer agent split — the FORMAT is the contract, agents are disposable | Agent PRODUCES knowledge *candidates*; it does not own truth (candidate≠commit). Producer (enrichment) ≠ consumer (viewer) decoupled by the shared format | Build-OS · candidate≠commit · Knowledge-Reservoirs · 219 producer pattern | *"the format itself is the contribution; this agent… make it tangible"* [README] | PARTIAL | partial | none | vocabulary | watch |
| 8 | Bounded LLM-crawler (hard page-cap + allowed-hosts, enforced INSIDE the tool) | Bounded-responsibility + `capability_envelope`/containment + tool-gateway: the cap is enforced by the tool, not trusted to the model | §C `capability_envelope`/containment · 211 tool-gateway · 214 bounded-responsibility | *"the agent cannot overrun… same-domain allowed-hosts filter"* [README How] | AFFIRM | partial | none | vocabulary | watch |
| 9 | Permissive consumption / conformance (tolerate unknown types, missing fields, broken links) | Forward-compat + capture-broad (`GRD-036`): a broken link = not-yet-written knowledge, not malformed; consumers MUST NOT reject | document-governance forward-compat · Evidence-Plane intake · Reservoirs | *"Consumers MUST tolerate unknown types gracefully"* [SPEC §4.1/§9] | PARTIAL | partial | tension (minor) | vocabulary | watch |
| 10 | **No schema registry · no central authority · `type` not registered** | **Direct pole-conflict:** OMNI makes document identity first-class — mandatory classification (`needs_classification`), catalog row, passport authority BEFORE binding. OKF's decentralization is fine for INTAKE, not for TRUTH | document-governance (`00_document_governance_and_taxonomy`) · Control-Plane · `GRD-036` | *"no schema registry, no central authority, and no required tooling"* [SPEC intro] | ABSENT (as posture) | absent | direct_conflict (pole) | vocabulary | watch / reject-as-default |
| 11 | Citations + `references/` mirroring external material as first-class concepts | = this Evidence-Plane's source-anchor/receipts discipline + `GRD-039` authority-descriptive-not-worship; external source mirrored as a governed concept | Evidence-Plane anchor-ledger · Knowledge-Reservoirs · document-governance | *"sources SHOULD be listed under a # Citations heading"* [SPEC §8] | AFFIRM | present-as-doctrine-artifact | none | vocabulary | watch |
| 12 | Log files (`log.md`) — chronological update history, newest-first, ISO dates | = §5 changelog + evolution-narrative + checkpoint-handoff discipline; scoped change history at every level | document-governance changelog · evolution_narrative · checkpoint-handoffs | *"log.md… history of changes… newest first"* [SPEC §7] | AFFIRM | present-as-doctrine-artifact | none | vocabulary | watch |

**Reality-check roll-up (two-axis):** the dominant pattern is **`doctrine=AFFIRM · build=present-as-doctrine-artifact`** — OMNI's *governance/knowledge* plane already IS OKF (grep: `.cursor/plans/doctrine/00_architecture_artifact_index.md`, passports/frontmatter across `.cursor/plans/*`, `index.md` hierarchy, read-graph) — but NONE of it is app code (`rg -i "frontmatter|knowledge.bundle|progressive.disclosure|okf" app lib components scripts supabase middleware.ts` → 0 hits; the `catalog` hits are domain catalogs: labs/consents/events, unrelated). This is the same shape as 236's Manifest-Read-Graph "build=present-as-doctrine-artifact." No `ABSENT·build=present`. The lone `direct_conflict` (cluster 10) resolves to already-registered law (see §D disposition).

### B. Net-new primitives — `name — meaning — EXISTS-AS`  *(dedup vs registry §2 mints 201–236 + standard OMNI primitives; "dedup-pending, Opus-main verifies")*

- `knowledge_interchange_format` — a governed, portable, vendor-neutral **export/exchange** representation of a Knowledge-Reservoir (minimal-required-keys + arbitrary extension) for cross-org / cross-operator knowledge sharing — **EXISTS-AS: candidate net-new NAME (the cross-org EXCHANGE angle); composes 232 `agent_ready_unstructured_data_substrate` + Federation portability + Knowledge-Reservoirs + document-governance passport. Distinct axis from OMNI's INTERNAL doctrine repo (never designed as an interchange/exchange format). dedup-pending, Opus-main verifies.**
- `progressive_disclosure_index` — auto-generated per-directory listing that lets an agent see what's available before loading it — **EXISTS-AS: already-exists-as Manifest-Read-Graph + `00_architecture_artifact_index.md`; NAME only, do NOT re-mint (sibling of 236 `static_dynamic_context_split`).**
- `permissive_consumption_contract` — consumers tolerate unknown types / missing fields / broken links (forward-compat, non-rejecting) — **EXISTS-AS: `GRD-036` capture-broad + document-governance forward-compat; NAME only.**
- `knowledge_producer_consumer_split` — enrichment agent (producer) decoupled from consumption agent/human (reader) by a shared file format; the format is the contract — **EXISTS-AS: candidate≠commit + 219 agent-readable-repo pattern + Build-OS; NAME only.**
- `bounded_crawler_tool` — LLM-as-crawler whose page-cap + allowed-hosts are enforced *inside the tool*, not trusted to the model — **EXISTS-AS: 211 `tool_invocation_gateway` + `capability_envelope`/containment + 214 bounded-responsibility; NAME/reinforcement only, not net-new mechanism.**

**Net-new tally for 239: ~0–1 genuine (only `knowledge_interchange_format` is a defensible new NAME; the rest are pre-existing).** Consistent with the wave's "Cole-Medin / doc-substrate" convergence cluster (234/235/236 ≈ 0 mech) — 239 is the *format-spec formalization* of the 219/236/232/227 pattern, not a new frame.

### C. Reread flags
- ⚑ **METADATA MISSING** — no Knox Review 001, no §0 metadata block; the task prompt's claim that metadata was "PRESENT at top of §3 Review 001" is **false for this file**. §0 was transcript-derived (`source_url`/`published_at` = `TK`; `channel_or_org`/`speaker` inferred, low confidence). **Reread + repoint §0/§0.1 + re-run Review 003's authority framing if Nick pastes the real metadata/Knox read.**
- ⚑ **Wrong platform default** — template says `source_platform: YouTube`; this source is a **GitHub repo (README.md + SPEC.md)**, not a video. No timestamps exist → anchors cite spec sections.
- ⚑ **Org inference only** — Google-ecosystem authorship is *inferred* from the tooling stack (Gemini/Vertex AI, BigQuery, Dataplex, Google ADK, GA4 sample), never stated. Confirm before any attribution.
- ⚑ **File not renamed** — proposed slug `open-knowledge-format-okf-spec`; rename deferred (hard contract).

### D. One-line hard read + strongest OMNI line
- **Hard read:** OKF proves the *pattern* OMNI already lives is a nameable, standardizable format — but its "no central authority / no schema registry" default is exactly the property OMNI **must reject for binding truth** (governance/classification is the whole point); adopt OKF's shape at the Evidence-Plane INTAKE tier + as a cross-org *export* format, never as a way to let un-classified knowledge bind.
- **Strongest OMNI line:** *"knowledge curation becomes a normal software-engineering activity"* [README Why] — OMNI already does this (git-versioned, PR-reviewed, passport-headed doctrine); OKF's contribution to OMNI is the **cross-org interchange envelope** (`knowledge_interchange_format`), i.e. how a governed Knowledge-Reservoir could be *exported/exchanged* across operators under Federation without surrendering the classification + promotion gate that OKF itself deliberately omits.

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: **document-governance + Manifest-Read-Graph + Knowledge-Reservoirs (MAJOR, AFFIRM/present-as-doctrine-artifact)** · §B substrate model-pluggability-of-knowledge-layer (medium) · Federation knowledge-interchange/export (medium — the one net-new leg) · Build-OS/REV-199 + Evidence-Plane citation-discipline (medium) · §C `capability_envelope`/tool-gateway (minor — bounded crawler). **Convergence: 219 · 236 · 232 · 227.** · promotion: **watch** (vocabulary / low-authority; ~0–1 net-new NAME; ⚑ metadata-missing/transcript-derived — do not promote on this capture)
- **Opus-main fold TODO (NOT done here per hard contract):** fold this packet UP into the registry (§1A anchor line + `knowledge_interchange_format` dedup verdict into §2 + tension row cluster-10 into §3 + convergence note vs 219/236/232/227 + coverage-matrix tick for 239). Registry/coverage/anchor-ledger were **not edited** by this subagent.

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-08` — Opus formal extraction: §0/§0.1 transcript-derived (⚑ metadata MISSING — no Knox read, no metadata block; slug proposed, file not renamed); §3 Review 003 written (12 concept clusters, ~0–1 net-new: `knowledge_interchange_format` dedup-pending; 1 direct_conflict pole = OKF no-central-authority vs OMNI mandatory-classification; reread-flagged); §4 pointers filled; status flipped `raw_dropped → analyzed`. Registry/coverage/anchor NOT edited (deferred to Opus-main fold).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.
