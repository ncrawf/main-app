# EVSRC-2026-000287 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=faithful`** (2nd-reader signed 2026-07-19)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000287_langchain-openwiki-okf-adoption.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000287`  ·  filename: `EVSRC-2026-000287_langchain-openwiki-okf-adoption.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=NxJjMvDN6aE`  ·  source_title: `OpenWiki 0.2 is adopting the OKF spec`
- channel_or_org: `LangChain`  ·  speaker: `Brace (from LangChain; likely Brace Sproul, Head of Applied AI at LangChain — inferred from sibling OpenWiki source)`  ·  published_at: `2026-07-16`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `short open-source product announcement / knowledge-format adoption update / deterministic-retrieval demonstration`  ·  source_reliability_context: `vendor / founder (first-party authority for OpenWiki's OKF adoption + intended implementation; secondary advocacy for OKF benefits; NOT independent retrieval-performance evidence)`  ·  topic_tags_light: `[OpenWiki, OKF, Open_Knowledge_Format, knowledge_bundle, YAML_frontmatter, deterministic_retrieval, progressive_disclosure, index_md, log_md, knowledge_graph, metadata_as_code, interoperability, Knowledge_Reservoirs, Manifest_Read_Graph, Context_Governance]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Brace (likely Brace Sproul)` · role_in_source: `presenter` (announcing OpenWiki 0.2's OKF adoption) · affiliation_at_publication: `LangChain (self-identified "from LangChain"; sibling OpenWiki source identifies presenter as Brace Sproul, Head of Applied AI at LangChain)` · speaker_type: `vendor / founder-adjacent (applied-AI lead)` · authority_context: `HIGH for OpenWiki's declared format adoption, the implementation fields being added, intended retrieval changes, and OpenWiki roadmap; LOWER for whether metadata filtering is accurate across all corpora, OKF ecosystem durability, standard sufficiency for high-consequence knowledge, or whether the graph/search tools preserve source authority/privacy/freshness/supersession` · identity_confidence: `inferred` (no screenshot supplied; name + affiliation inferred from Knox's metadata block + sibling OpenWiki source)
  - *(add a bullet per additional speaker)*
- publisher / channel: `LangChain (YouTube)`  ·  interviewer / moderator / host: `n/a (solo product announcement)`
- event_context: `OpenWiki 0.2 release announcement (open-source agent-readable knowledge tool)`  ·  perspective / conflict notes: `LangChain benefits from broader OpenWiki adoption + an ecosystem of agent-readable knowledge tools; this is a release announcement, not a neutral evaluation. Framework/format praise ≠ format doctrine.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
What's up everyone? It's Brace from
0:01
Lamech Chain and today I'm excited to
0:02
announce that Open Wiki is officially
0:04
adopting the open knowledge format spec
0:06
from Google. What this means is every
0:08
open wiki generated or updated going
0:10
forward will conform to the OKF spec. So
0:14
what does this actually mean in
0:15
practice? Well, at a high level, the OKF
0:17
spec is fairly simple. It's basically
0:20
just adding YAML front matter to your
0:22
wiki docs, an index.mmd file that
0:25
contains an index of all the MD files in
0:27
that directory and a log.mmd which you
0:30
can think of as a change log. Let's take
0:32
a look at what this YAML front matter
0:34
actually looks like in some real docs.
0:36
So as you can see I have the open suite
0:39
project up here with the openwiki docs
0:41
and there's this new YAML front matter
0:43
at the top of the docs. This is the main
0:45
difference between the old open wiki
0:47
without OKF and the new open wiki with
0:49
OKF. OKF requires us to have this YAML
0:52
formatter uh which contains a type,
0:55
title, description, resource and tags.
0:58
What this will mean for us is we can
1:00
implement better and more accurate
1:01
search and retrieval tools for open
1:03
wiki. So before the way your agent would
1:06
discover docs in open wiki was through
1:08
pure agentic search, right? using the
1:10
file system iterating through the files
1:12
in the wiki directory and trying to find
1:14
the one which best matched the question
1:16
it had. With these YAML front matter we
1:19
can implement better more deterministic
1:21
search tools like say you know filtering
1:23
on different tags or finding all the
1:26
docs with a specific type. For example,
1:28
let's say the type is BigQuery tables
1:31
and your agent says I want to get all
1:33
the docs on BigQuery tables. Well, it
1:35
could say find all the open wiki docs
1:38
with a type of bigquery tables. Then
1:40
instead of having to search through
1:41
every single doc, read the actual
1:44
contents of them and try to decide which
1:45
docs document bigquery tables and which
1:47
don't, it can just perform a
1:49
deterministic filter based on the type
1:51
and get back every doc for in this case
1:54
bigquery tables. Same applies to tags,
1:56
resources which can link out to either
1:58
external URLs or in often the case in
2:01
openwiki codebase wiks, internal files.
2:04
It can do full text search on
2:06
descriptions or titles uh and more. So
2:09
with this spec because it's so simple,
2:10
it's so easy to add to open wiki, right?
2:12
It's just adding this initial YAML front
2:14
matter to your docs and it will allow us
2:16
to add many more deterministic, faster,
2:19
and more efficient search tools to open
2:22
wiki to allow your agents to more
2:23
efficiently query data. The second main
2:25
reason is the open source ecosystem
2:27
that's being built around OKF. Although
2:29
OKF is a very new spec, there's already
2:32
a robust ecosystem being developed
2:33
around it. As we can see here, this is
2:36
an open source visualizer from Google
2:38
that you can plug into your wikis to
2:40
visualize all the docs within their
2:42
wiki, how they connect to each other,
2:44
and click into these actual docs and see
2:46
the description, resource tags, and the
2:49
actual doc contents. The OKF spec is
2:51
still very new, so there's still lots
2:53
going on, but we decided that it would
2:54
make sense to adopt it in OpenWiki
2:56
because it'll give us better search and
2:58
we can utilize the open source community
3:00
built being built around OKF. So, in
3:03
OpenWiki 0.2, it has official support
3:05
for OKF with lots of new features coming
3:07
soon like better search retrieval tools,
3:10
UI for visualizing your OpenWiki docs,
3:12
and more. So, if you like this, please
3:15
go try OpenWiki. It's open source. It's
3:17
free to use. You can loging in with Chat
3:18
GBT or set an API key. Try it out. If
3:21
you have feature requests, feedback, or
3:23
bug reports, open an issue. And of
3:25
course, if you want to add new features,
3:26
we love it getting contributor PR. So,
3:28
please put up a PR and I'll see you all
3:30
in GitHub.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

## Review 001 — Knox / ChatGPT strategic read

**Layer:** `captured_interpretation_nonbinding`
**Purpose:** strategic source-local interpretation

### 1. Rough metadata

`source_platform: YouTube`
`source_url: https://www.youtube.com/watch?v=NxJjMvDN6aE`
`source_title: OpenWiki 0.2 is adopting the OKF spec`
`channel_or_org: LangChain`
`speaker: Brace from LangChain; likely Brace Sproul based on the existing OpenWiki sibling source`
`published_at: 2026-07-16`
`captured_at: 2026-07-18`
`capture_method: YouTube screenshot + full pasted transcript`
`content_type: short open-source product announcement / knowledge-format adoption update / retrieval demonstration`
`source_reliability_context: first-party authority for OpenWiki’s announced adoption and intended implementation; secondary advocacy for OKF’s general benefits; not independent retrieval-performance evidence`
`topic_tags_light: [OpenWiki, OpenWiki_0_2, OKF, Open_Knowledge_Format, knowledge_bundle, YAML_frontmatter, deterministic_retrieval, progressive_disclosure, index_md, log_md, knowledge_graph, agent_readable_documents, metadata_as_code, search_routing, interoperability, Knowledge_Reservoirs, Context_Governance, Build_OS, Manifest_Read_Graph]`

---

### 2. People / authority context

**Brace** — identifies himself as being from LangChain and announces that OpenWiki 0.2 will generate and update OKF-compliant wikis. The existing LangChain wiki-panel source identifies OpenWiki’s presenter as Brace Sproul, Head of Applied AI at LangChain.

His authority is high for:

* OpenWiki’s declared format adoption;
* the implementation fields being added;
* the intended retrieval changes;
* the expected OpenWiki roadmap;
* and LangChain’s reason for adopting OKF.

His authority is lower for:

* whether metadata filtering will be more accurate across all corpora;
* whether the emerging OKF ecosystem will become durable;
* whether the standard is sufficient for high-consequence knowledge;
* or whether the visual graph and search tools preserve source authority, privacy, freshness, and supersession.

**Publisher / incentive posture:** LangChain benefits from broader adoption of OpenWiki and from an ecosystem of agent-readable knowledge tools. The video is a release announcement, not a neutral evaluation.

---

### 3. Suggested processing

`priority: 3.75/5`
`depth: focused_semantic with strong sibling deduplication`
`EVRUN needed?: yes — fold into the active wave; no standalone run required`

**Promotion posture:**
`implementation-convergence | ecosystem-adoption evidence | knowledge-interchange sharpening | deterministic-retrieval practice | no major new primitive`

### Sibling and duplicate relationship

This source is heavily duplicative of:

* **EVSRC-2026-000238** — OKF, Karpathy-style LLM wikis, portable markdown knowledge bundles, progressive disclosure, and predictable metadata.
* **EVSRC-2026-000239** — the primary Google Cloud OKF v0.1 specification.
* **EVSRC-2026-000262** — OpenWiki, derived organizational knowledge, compilation and maintenance, freshness, eviction, retrieval modes, and the distinction between evidence, projection, memory, and truth.
* **OMNI Manifest Read Graph and architecture-memory control plane** — routing, authority, lifecycle, supersession, and context loading.
* **Agent Runtime & Harness** — selective context projection and retrieval based on actor, purpose, domain, risk, and authority.

### What is distinct here

The source contributes three modest but useful deltas:

1. **Real implementation adoption:** OpenWiki is no longer merely discussing OKF; it is adopting it as its default generated and updated document format.

2. **Deterministic retrieval emphasis:** the speaker clearly explains the practical benefit of filtering on typed metadata rather than requiring an agent to open and interpret every document.

3. **The `log.md` pressure:** the announcement explicitly surfaces a local bundle change log as part of the usable knowledge package, creating a useful—but incomplete—bridge between static knowledge packaging and lifecycle history.

The strongest strategic update is therefore not a new knowledge ontology.

It is external convergence toward a thin, tool-independent interchange layer.

---

## 4. Strategic read

### Classification

This is **implementation confirmation of an already identified architecture direction**.

The video’s surface claim is:

> OpenWiki now uses YAML frontmatter, an index, and a change log so agents can search more efficiently and participate in the emerging OKF ecosystem.

The OMNI-grade interpretation is:

> **A thin, portable knowledge-package format can make retrieval more predictable and tooling more interoperable, but the format must remain below OMNI’s richer authority, provenance, lifecycle, privacy, and supersession architecture.**

This source slightly changes the strategic posture established by the earlier OKF review.

The earlier conclusion leaned toward creating an independent “OMNI OKF-like” bundle standard.

Now that:

* the primary specification has been captured;
* OpenWiki has adopted it;
* and an open-source tool ecosystem is beginning to form,

OMNI should resist prematurely inventing an incompatible parallel format.

A stronger posture is:

> **Evaluate OKF as a lowest-common-denominator interchange substrate, then define an OMNI governance profile or adapter above it.**

---

### Core takeaway

**The keeper is: standardize how agents discover and exchange knowledge packages, but preserve OMNI’s stronger model for why a source is trusted, current, authorized, and admissible for a particular decision.**

A second keeper:

**Deterministic retrieval reduces search ambiguity; it does not remove metadata uncertainty.**

---

## A. The source demonstrates ecosystem convergence, not architectural completeness

The strongest fact in the announcement is adoption.

OpenWiki is changing the documents it generates and updates so they conform to a shared external specification. That means the value of the standard is no longer limited to one Google reference implementation or one independent commentator.

A standard gains practical leverage when:

* multiple producers generate it;
* multiple consumers can read it;
* visualizers and search tools operate over it;
* users can move bundles among systems;
* and extensions can evolve without requiring one proprietary service.

This matters strategically for OMNI.

OMNI should not build custom infrastructure where an open, adequate, replaceable rail can carry the requirement.

But adoption by a second project does not prove:

* long-term standard governance;
* semantic stability;
* security maturity;
* healthcare fitness;
* or widespread ecosystem success.

**Keeper line:**
**External adoption is evidence that a rail may be useful; it is not evidence that the rail should own the architecture above it.**

---

## B. Deterministic filtering is a real retrieval improvement

Before OKF adoption, the described OpenWiki agent discovered documents through file traversal and agentic interpretation:

* list files;
* open documents;
* read content;
* infer which documents are relevant;
* then continue searching.

That can work, but it is expensive and variable.

Typed metadata enables operations such as:

* retrieve all documents with `type: BigQuery Table`;
* filter by a tag;
* search titles and descriptions;
* resolve a resource identifier;
* then load only the selected documents.

This creates several advantages:

* lower token consumption;
* fewer file reads;
* more repeatable retrieval;
* better explainability of why a document was selected;
* easier testing;
* and simpler tooling.

This strongly supports OMNI’s progressive-disclosure and context-routing architecture.

A useful retrieval sequence might be:

`actor + task + purpose`
`→ admissible bundle set`
`→ deterministic metadata filter`
`→ full-text / semantic / graph expansion where needed`
`→ selected source or projection`
`→ evidence receipt`

The important word is **admissible**.

OMNI should not run a deterministic query over every available document and assume the result is safe to expose.

**Keeper line:**
**Deterministic discovery should occur inside an already authorized knowledge boundary.**

---

## C. Deterministic retrieval is only as good as the metadata

The source speaks as though adding a `type` field turns an uncertain search problem into a deterministic one.

Technically, the filter is deterministic.

Semantically, the metadata may still be:

* wrong;
* incomplete;
* stale;
* inconsistent;
* generated by an LLM;
* assigned under an outdated taxonomy;
* or intentionally misleading.

A document about a BigQuery table can be mislabeled as a playbook.

A superseded policy can retain the same tag as the active policy.

A generated description can omit the one fact that would make the document relevant.

Therefore:

> **A deterministic filter over uncertain metadata is deterministically incomplete.**

OMNI needs metadata-quality states such as:

* author-declared;
* agent-generated;
* schema-validated;
* owner-reviewed;
* source-derived;
* stale;
* disputed;
* or superseded.

The system should know not only that a document has `type: policy`, but:

* who assigned that type;
* which taxonomy version was used;
* whether the owning authority reviewed it;
* and whether it remains valid.

**Keeper line:**
**Structured metadata makes uncertainty governable; it does not make the metadata true.**

---

## D. Metadata should assist routing, not become the ontology of truth

OKF v0.1 deliberately requires very little.

Its common fields include:

* `type`;
* `title`;
* `description`;
* `resource`;
* `tags`;
* `timestamp`.

That minimalism is useful for interoperability.

It is not sufficient for OMNI’s internal knowledge architecture.

OMNI frequently needs to know:

* artifact identity;
* artifact class;
* owner;
* represented principal;
* source authority;
* evidence class;
* origin;
* custody;
* operator and tenant scope;
* patient or subject scope;
* purpose restrictions;
* confidentiality;
* consent or legal basis;
* captured time;
* effective time;
* valid time;
* supersession;
* review state;
* promotion state;
* canonical versus derived status;
* freshness;
* and actionable versus readable status.

Trying to force all of those into universal OKF requirements would destroy the thin-standard advantage.

OMNI should instead consider:

### Base interchange profile

The portable OKF-compatible minimum.

### OMNI governance extension

Namespaced fields or a linked document passport carrying the richer semantics.

### Domain-specific overlays

Additional requirements for:

* clinical evidence;
* policy;
* architecture;
* operational procedures;
* commercial material;
* or regulated communication.

**Keeper line:**
**Keep the interchange core thin; layer governance depth by authority and consequence.**

---

## E. `index.md` is a derived navigation projection

The source presents the index as a list of documents in a directory that enables an agent to know what exists without reading everything.

That is useful.

But an index is not the corpus itself.

It can become:

* stale;
* incomplete;
* incorrectly generated;
* overcompressed;
* inconsistent with the actual files;
* or biased toward the concepts the generator considered important.

OMNI should treat an index as a **recomputable navigation projection**.

A governed index should expose or support:

* generation time;
* source scope;
* generator or actor;
* completeness check;
* broken-link state;
* omitted-item count;
* validation result;
* and whether manual edits will survive regeneration.

For consequential use, the agent may need to verify the selected document directly rather than trusting only the index description.

**Keeper line:**
**The index tells an agent where to look; the indexed artifact tells it what the source actually says.**

---

## F. OKF’s index is not OMNI’s Manifest Read Graph

The resemblance is superficial.

Both can tell an agent what files exist and where to look.

But OMNI’s Manifest Read Graph additionally carries:

* the trigger that makes a source required;
* the authority or read rule;
* workstream and domain tags;
* lifecycle state;
* supersession;
* historical disposition;
* and routing precedence.

An OKF index might say:

> Here are five documents about consent.

The OMNI read graph must answer:

* Which consent artifact is binding?
* Which is historical?
* Which is evidence rather than doctrine?
* Which must be loaded for this workstream?
* Which was superseded?
* Which conflict remains unresolved?
* Which document controls when sources disagree?

Therefore, OKF could help package and discover read-graph artifacts.

It cannot replace the read graph.

**Keeper line:**
**A content index answers what is present; a governance read graph answers what must be read, under which authority, and why.**

---

## G. `log.md` is useful—but it is not an audit ledger

The source describes a bundle-level change log.

The primary specification defines it as an optional, date-grouped prose list containing entries such as:

* creation;
* update;
* deprecation;
* or initialization.

That is useful human-readable history.

It can support:

* orientation;
* recent-change review;
* handoff;
* progressive loading;
* and basic maintenance.

But the format does not require:

* actor identity;
* immutable event ID;
* exact diff;
* source of the change;
* reason;
* review or approval;
* signature;
* content hash;
* superseded object;
* failed attempt;
* rollback;
* or evidence that the described change actually occurred.

OMNI should distinguish:

**Human-readable change summary**

A `log.md`-style artifact.

**Repository history**

Commits, diffs, blame, and pull-request review.

**Governed lifecycle events**

Typed state transitions with actor, authority, reason, and proof.

**Decision and supersession records**

Why the current state replaced the previous state.

The same change may project into all four.

**Keeper line:**
**A changelog narrates change; an audit ledger proves the governed event.**

---

## H. Git versioning helps, but repository presence does not create authority

The primary OKF rationale correctly values markdown bundles because they can live in Git and receive:

* diffs;
* review;
* blame;
* branching;
* and ordinary software-engineering workflows.

That is highly compatible with OMNI’s architecture-memory estate.

But Git proves certain things and not others.

Git can establish:

* which bytes changed;
* when a commit was created;
* which identity authored or committed it;
* and what repository history exists.

Git does not automatically establish:

* whether the author had the correct domain authority;
* whether the source claim was true;
* whether patient consent allowed the use;
* whether a document remains effective;
* whether a generated synthesis faithfully represents its evidence;
* or whether a change was clinically approved.

**Keeper line:**
**Version control preserves artifact history; governance establishes the meaning and authority of that history.**

---

## I. The graph visualizer shows connectivity, not relationship semantics

The source highlights an open-source visualizer that shows documents and how they connect.

Visualizing a knowledge bundle can be valuable for:

* browsing;
* detecting isolated documents;
* finding clusters;
* discovering links;
* and understanding rough coverage.

But the primary OKF specification treats markdown links as untyped relationships. The relationship’s meaning is left to surrounding prose.

For OMNI, that is insufficient for important architectural and evidentiary relationships.

OMNI needs distinctions such as:

* `supports`;
* `contradicts`;
* `derived_from`;
* `supersedes`;
* `implements`;
* `governs`;
* `routes_to`;
* `depends_on`;
* `observed_from`;
* `adopted_by`;
* `rejected_by`;
* `applies_to`;
* and `historical_version_of`.

A graph where every edge merely means “links to” can create a visually impressive but semantically weak picture.

**Keeper line:**
**Connectivity is not relationship meaning, and relationship meaning is not authority.**

An OMNI-compatible OKF profile could preserve ordinary markdown links for portability while adding typed relation metadata where needed.

---

## J. Broken-link tolerance is right for interchange and wrong for some execution paths

OKF intentionally tolerates broken links and missing indexes.

That choice helps partially generated or evolving bundles remain consumable.

For a low-risk personal wiki, this is sensible.

For OMNI, admissibility must vary by use.

A bundle can be:

* parseable;
* partially navigable;
* useful for exploration;
* and still unfit for consequential execution.

Possible states:

* `conformant`;
* `degraded`;
* `incomplete`;
* `stale`;
* `exploration_only`;
* `action_inadmissible`;
* or `revalidation_required`.

A clinical or authority-bearing workflow should not silently continue because the format says consumers must tolerate a missing source link.

**Keeper line:**
**Permissive consumption improves interoperability; consequence-sensitive admission decides whether the result may influence action.**

---

## K. Conformance and quality must remain separate

An OKF-conformant bundle can contain:

* perfectly valid YAML;
* a nonempty `type`;
* well-formed indexes;
* and completely false or useless content.

Likewise, a high-quality knowledge artifact may fail the mechanical format rules.

OMNI should maintain separate evidence:

### Format conformance

Does it parse and satisfy the declared specification?

### Referential integrity

Do links and resources resolve?

### Metadata quality

Are fields complete, current, and assigned under the correct taxonomy?

### Source fidelity

Do derived claims remain connected to source evidence?

### Authority fitness

Was the material reviewed or adopted by the correct owner?

### Use-case admissibility

May it be used for this actor, purpose, and consequence?

### Retrieval utility

Does it actually improve discovery and task performance?

**Keeper line:**
**Schema compliance is not semantic quality, and semantic quality is not authority.**

---

## L. `resource` is a pointer, not source custody

OKF’s `resource` field can identify an external URL, internal file, table, or other asset.

That is useful.

But a pointer can:

* disappear;
* change contents;
* become inaccessible;
* cross a tenant boundary;
* require credentials;
* point to a mutable latest version;
* or expose information the consumer is not permitted to access.

For OMNI, a resource reference may need:

* source identity;
* captured version;
* content hash;
* access and custody rules;
* owner;
* authentication requirements;
* retrieval timestamp;
* effective version;
* and local preservation where legally or operationally required.

**Keeper line:**
**A resource URI says where something may be found; it does not prove what was retrieved, preserved, or authorized.**

---

## M. `timestamp` is too ambiguous for longitudinal truth

The OKF field is described as the time of the last meaningful change.

That is useful for display and basic freshness checks.

It is not enough for OMNI.

OMNI may need to distinguish:

* when the source event occurred;
* when it was observed;
* when it was captured;
* when the source document changed;
* when the projection was generated;
* when it was reviewed;
* when it became effective;
* when it was superseded;
* and the time through which it remains admissible.

A single timestamp can create temporal confusion.

**Keeper line:**
**“Last updated” is not a complete temporal model.**

The interchange format can retain one simple timestamp while OMNI’s extension preserves the full temporal semantics.

---

## N. Automatic updates are the harder architecture problem

The announcement says every OpenWiki document generated or updated going forward will conform to OKF.

Format conformance during generation is easy compared with deciding whether the update is epistemically correct.

An automatic wiki updater must decide:

* whether new information modifies an existing concept or creates another;
* whether a prior claim is superseded or merely contradicted;
* whether two sources are independent;
* whether a source has authority;
* whether an old statement should remain as history;
* whether a link has changed meaning;
* and whether a human or domain owner must review the result.

This confirms the earlier Knowledge Reservoir conclusion:

> **Knowledge generation is easy; governed maintenance is the actual system.**

For OMNI, automated updates should generally create:

* a candidate change;
* source-to-change lineage;
* a diff;
* confidence;
* affected consumers;
* and a required review or promotion path based on consequence.

**Keeper line:**
**Formatting can be automatic; semantic promotion must remain governed.**

---

## O. Better search should mean less agentic search—not no agentic search

The source contrasts pure file-walking with deterministic metadata filters.

The best architecture is hybrid.

Different questions require different retrieval modes:

* exact type lookup;
* tag filtering;
* full-text search;
* semantic similarity;
* graph traversal;
* temporal retrieval;
* source-authority filtering;
* direct domain query;
* or broader agentic exploration.

Metadata filters are excellent when the user asks:

> Show every active document of this known type.

They are insufficient when the user asks:

> Which sources disagree about why this system failed?

The retrieval router should select the cheapest mode that can still satisfy the evidentiary requirement.

**Keeper line:**
**Use deterministic retrieval where the question is structured; use broader search where the meaning is not known in advance.**

---

## P. OMNI should consider an OKF compatibility profile, not immediate format capture

The combination of:

* an official open specification;
* a primary reference implementation;
* independent commentary;
* and OpenWiki adoption

is enough to justify evaluating compatibility.

A possible posture:

### Internally

OMNI retains its richer document passports, read graph, source lineage, authority states, lifecycle, and supersession machinery.

### At import

An OKF bundle is:

* parsed;
* scanned;
* classified;
* assigned custody;
* validated;
* mapped into OMNI source and authority semantics;
* and admitted only to authorized reservoirs.

### At export

OMNI may produce a redacted or scope-limited OKF-compatible bundle containing only material permitted for that recipient and purpose.

### At runtime

Agents can consume the thin format through standard tools while OMNI’s context router and authority system determine what is visible and actionable.

This is preferable to:

* forcing every OMNI internal artifact into the minimal OKF schema;
* or inventing a wholly incompatible OMNI-only bundle format.

**Keeper line:**
**Interoperate at the boundary; preserve constitutional depth inside.**

---

## Q. Portable knowledge bundles create a new exfiltration surface

Portability is one of OKF’s main advantages.

A bundle can be:

* copied;
* archived;
* checked into Git;
* mounted;
* or consumed by many agents and tools.

For OMNI, this creates security and privacy implications.

A portable bundle may contain:

* PHI;
* business secrets;
* internal policy;
* security procedures;
* operator-specific configuration;
* patient context;
* or licensed external material.

OMNI therefore needs controls around:

* bundle classification;
* recipient;
* purpose;
* encryption;
* redaction;
* expiration;
* revocation where possible;
* export approval;
* licensing;
* operator and patient boundaries;
* and whether references remain resolvable outside the originating environment.

**Keeper line:**
**Portability is an interoperability feature and an exfiltration capability.**

---

## R. The lowest common denominator must not become the highest available meaning

Thin standards succeed because they require little.

That creates a predictable pressure:

* tools optimize around the fields everybody has;
* richer semantics become optional;
* and the ecosystem begins treating the minimum as the complete model.

OMNI must guard against that.

The universal fields may support:

* discovery;
* preview;
* transport;
* and basic graphing.

They must not become the only fields driving:

* clinical use;
* authority;
* supersession;
* retention;
* consent;
* or action.

**Keeper line:**
**A successful interchange minimum should broaden compatibility, not flatten the richer systems connected through it.**

---

## Where it lands

### Major

**Knowledge Reservoirs**

* bundle format;
* derived knowledge projections;
* source-to-projection lineage;
* index generation;
* change maintenance;
* progressive disclosure;
* freshness and admissibility.

**Context Governance / Agent Runtime**

* deterministic metadata filtering;
* hybrid retrieval routing;
* actor- and purpose-scoped bundle selection;
* context-budget reduction;
* evidence receipts.

**Architecture Memory / Manifest Read Graph**

* possible packaging and visualization rail;
* not a replacement for authority routing, lifecycle, and supersession.

### Medium-major

**Build-OS**

* bundle conformance checks;
* index regeneration;
* metadata linting;
* link validation;
* source-lineage testing;
* compatibility adapters;
* knowledge-change review.

**Evidence Plane / D7**

* source references;
* resource custody;
* citation preservation;
* raw versus derived artifact distinction;
* portable evidence packages.

**Federation / security / privacy**

* bundle import and export;
* operator scope;
* classification;
* redaction;
* purpose;
* licensing;
* and cross-boundary portability.

### Medium

**Capability exchange / ecosystem strategy**

* open interchange format;
* external knowledge tools;
* vendor-neutral consumption;
* avoidance of proprietary knowledge-store capture.

---

## Doctrine / primitive pressure

These are candidates for deduplication, not automatic new primitives:

`knowledge_bundle_interchange_profile`
`okf_compatibility_profile`
`bundle_conformance_receipt`
`bundle_import_admission`
`bundle_export_projection`
`metadata_quality_state`
`index_generation_receipt`
`index_freshness_state`
`knowledge_change_summary`
`knowledge_change_event`
`typed_relation_extension`
`resource_custody_reference`
`bundle_admissibility_state`
`portable_bundle_classification`
`retrieval_strategy_selection`

Most should resolve into existing:

* document passports;
* Knowledge Reservoir lifecycle;
* source custody;
* read graph;
* evidence ingestion;
* context router;
* agent runtime profile;
* Polaris projections;
* Build-OS validation;
* and Federation policy.

Do not create a new “OKF domain.”

---

## Keeper doctrine

1. **Standardize how agents discover and exchange knowledge without standardizing away why that knowledge is trusted.**

2. **Deterministic discovery should operate inside an authorized knowledge boundary.**

3. **Structured metadata makes uncertainty governable; it does not make metadata true.**

4. **A deterministic filter over bad metadata is deterministically wrong or incomplete.**

5. **Keep the interchange core thin; layer governance depth by authority and consequence.**

6. **An index is a navigation projection, not the underlying source corpus.**

7. **A content index answers what is present; a read graph answers what must be read and under which authority.**

8. **A changelog narrates change; an audit ledger proves the governed event.**

9. **Version control preserves artifact history; governance establishes its meaning and authority.**

10. **Connectivity is not relationship meaning, and relationship meaning is not authority.**

11. **Permissive format consumption must not imply permissive action admissibility.**

12. **Schema conformance, content quality, source authority, and use-case admissibility are separate evaluations.**

13. **A resource pointer is not source custody.**

14. **One timestamp cannot represent observation, capture, validity, effectiveness, and supersession.**

15. **Formatting may be automatic; semantic promotion remains governed.**

16. **Use deterministic retrieval for structured questions and broader search for unresolved meaning.**

17. **Interoperate at the boundary; preserve constitutional depth inside.**

18. **Portable knowledge is both a collaboration feature and an exfiltration surface.**

19. **The lowest common denominator must never become the highest available semantic model.**

20. **Agent-readable remains categorically different from authoritative.**

---

## What not to import blindly

### Do not create another OMNI-specific format before evaluating compatibility

The ecosystem has moved beyond a speculative proposal. A profile or adapter may be better than an incompatible fork.

### Do not replace OMNI’s document passports with five YAML fields

OKF’s minimum is intentionally too small to carry OMNI’s authority and lifecycle requirements.

### Do not treat `type` as a universal ontology

Types can be local, ambiguous, generated, versioned, or conflicting.

### Do not assume tags are controlled vocabulary

Uncontrolled tags quickly become synonyms, typos, vendor language, and accidental category drift.

### Do not trust an automatically generated index without validation

Indexes can omit, misdescribe, or lag the actual bundle.

### Do not treat `log.md` as immutable audit evidence

It is optional prose and can be rewritten like any other file.

### Do not treat an untyped graph as an authority or evidence graph

A markdown link does not say whether one document supports, contradicts, supersedes, or merely mentions another.

### Do not adopt OKF’s permissive broken-link posture for action-critical knowledge

A bundle may remain readable while becoming inadmissible for consequential decisions.

### Do not equate conformance with correctness

Well-formed falsehood remains false.

### Do not equate deterministic filtering with correct retrieval

Filtering is repeatable, but the labels and descriptions may be wrong.

### Do not let automatic OpenWiki updates silently supersede owned doctrine or domain truth

Generated changes remain candidates until the appropriate owner adopts them.

### Do not use a portable bundle as a shortcut around RBAC, consent, tenant isolation, or source licensing

The fact that a directory can be copied does not mean it may be copied.

### Do not make the wiki the canonical state of OMNI

It is a knowledge projection over domain-owned and source-owned state.

### Do not assume ecosystem momentum guarantees standard longevity

OKF is still an early draft and should remain replaceable behind OMNI’s compatibility boundary.

---

## Do-not-miss lesson

**OpenWiki’s adoption of OKF is useful external convergence toward a portable, agent-readable knowledge rail. OMNI should exploit that rail for discovery and exchange while keeping authority, provenance, lifecycle, supersession, privacy, and action admissibility in OMNI’s own governed substrate.**

---

## Lightweight tiering

| Concept                                             | stale-vs-current OMNI                  |                     weight tier | status                   |
| --------------------------------------------------- | -------------------------------------- | ------------------------------: | ------------------------ |
| Portable markdown knowledge bundles                 | `AFFIRM`                               |             platform vocabulary | promote                  |
| OKF ecosystem adoption                              | `new implementation evidence`          | future-watch / interoperability | watch                    |
| Deterministic metadata filtering                    | `AFFIRM / sharpened`                   |                runtime practice | promote                  |
| Hybrid deterministic + semantic + agentic retrieval | `AFFIRM`                               |                         runtime | promote                  |
| Progressive disclosure through indexes              | `AFFIRM`                               |            context architecture | promote                  |
| Index as derived navigation projection              | `PARTIAL`                              |                       guardrail | promote                  |
| `log.md` as human-readable change history           | `PARTIAL`                              |                        practice | watch                    |
| `log.md` as audit ledger                            | `direct conflict`                      |                       guardrail | reject                   |
| Minimal OKF fields as OMNI internal passport        | `direct conflict`                      |                           no-op | reject                   |
| OKF-compatible OMNI exchange profile                | `PARTIAL / potentially new sharpening` |                interoperability | investigate              |
| Untyped graph links                                 | `insufficient`                         |                  low-level rail | allow only as base layer |
| Typed OMNI relation overlay                         | `AFFIRM / sharpened`                   |                    architecture | promote                  |
| Format conformance receipt                          | `PARTIAL`                              |                        Build-OS | promote                  |
| Conformance as semantic quality                     | `direct conflict`                      |                       guardrail | reject                   |
| Portable bundles across trust boundaries            | `PARTIAL`                              |             Federation/security | promote with controls    |
| Automatic wiki updates                              | `AFFIRM as candidate generation`       |             Knowledge Reservoir | constrain                |
| Automatic update as authoritative promotion         | `direct conflict`                      |                       guardrail | reject                   |
| OKF replacing Manifest Read Graph                   | `direct conflict`                      |                           no-op | reject                   |
| OKF as interchange rail beneath the read graph      | `PARTIAL`                              |                    architecture | investigate              |

---

## 5. Hard read

**Verdict:** `focused_semantic`, 3.75/5.

This source does not introduce a major new idea.

The core architecture was already captured more deeply in:

* the earlier OKF explainer;
* the primary OKF specification;
* the OpenWiki and agent-memory panel;
* and OMNI’s existing Knowledge Reservoir and read-graph machinery.

Its value is practical convergence.

A real external knowledge tool has adopted the format and is using its metadata to replace some free-form agentic search with deterministic filtering. That strengthens the case that a thin, open knowledge-package rail may become useful enough for OMNI to support.

The announcement also reveals the exact boundary OMNI must hold.

OKF can standardize:

* document packaging;
* basic metadata;
* indexes;
* links;
* and a readable change summary.

It does not standardize:

* authority;
* custody;
* permissions;
* temporal truth;
* supersession;
* evidence quality;
* review;
* promotion;
* or whether a retrieved claim may influence action.

OMNI should therefore avoid both errors:

1. dismissing OKF because it is too simple;
2. treating OKF’s simplicity as sufficient for OMNI.

The right strategy is likely:

> **OKF-compatible on exchange, OMNI-governed on admission and use.**

**Strongest OMNI line:**

> **Standardize the path to knowledge; govern the path from knowledge to reality.**


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

**at:** `2026-07-19` · **reviewer:** Opus (Cursor, repo-native) · **binds nothing** (`GRD-036` capture-broad/promotion-gated · `GRD-044` deep-read lives here, no sidecar)

### Method note
This formalizes Knox's Review 001 (sections A–R + lightweight tiering), verified against the §1 verbatim transcript; it does not re-derive. **Source reality:** a ~3.5-minute LangChain product announcement (Brace) that OpenWiki 0.2 now generates/updates docs conforming to Google's Open Knowledge Format (OKF) — YAML front matter (`type/title/description/resource/tags`), an `index.md`, and a `log.md` change log — to enable deterministic metadata-filtered retrieval and to ride an emerging OKF tool ecosystem (visualizer, search). **build_status grounding:** OMNI has partial doc-passport/routing machinery (Manifest Read Graph, `00_master_corpus_catalog`, intake doc routing, artifact-pipeline migration) but **no** Knowledge-Reservoir bundle format, no OKF import/export adapter, no metadata-quality state machine, no typed-relation graph. So every concept here lands as **doctrine AFFIRM/PARTIAL × build absent/partial** — this is convergence + interchange-boundary sharpening, **not** a new capability. **PROPOSE-ONLY:** extract/dedup/route/prove-fidelity only; promote nothing, mint no domain object, edit no contract.

**Verdict headline:** external convergence toward a thin, tool-independent knowledge-interchange rail. The keeper is *"standardize how agents discover and exchange knowledge packages, but preserve OMNI's stronger model for why a source is trusted, current, authorized, and admissible for a decision."* OMNI's line: **standardize the path *to* knowledge; govern the path *from* knowledge to reality.** Interoperate at the boundary; preserve constitutional depth inside. **0 net-new domain objects** (as expected; waves 4/5 + batch 282–286 pattern).

### Cluster table
| # | concept | OMNI meaning | downstream homes | anchor (verbatim ≤12w + ts) | doctrine_status × build_status | weight_tier | status |
|---|---|---|---|---|---|---|---|
| 1 | Thin portable knowledge-bundle interchange format (OKF) | A lowest-common-denominator, tool-independent package (YAML front matter + index + log) OMNI can consume/emit at the boundary — below its richer passport/authority layer | Knowledge-Reservoirs · Evidence Plane/D7 · Build-OS (conformance) | "adopting the open knowledge format spec from Google" (0:04) | AFFIRM × absent | vocabulary | watch |
| 2 | Ecosystem adoption ≠ architectural completeness | A second producer + visualizer/search tools adopting OKF proves the *rail may be useful*, not that it should *own the architecture above it* | thesis §B · future-watch · GRD-033 (replaceable rail) | "robust ecosystem being developed around it" (2:32) | AFFIRM (GRD-033) × n/a | vocabulary | watch |
| 3 | Deterministic metadata filtering (inside an authorized boundary) | Typed-metadata filter replaces some free-form agentic file-walking → cheaper, repeatable, explainable retrieval — but must run *inside* an already-authorized knowledge boundary, not over every doc | Context-Governance/Agent-Runtime · Knowledge-Reservoirs | "deterministic filter based on the type" (1:49) | AFFIRM/sharpened × absent | vocabulary | promote |
| 4 | Deterministic filter over uncertain metadata = deterministically incomplete | The filter is deterministic; the metadata may be wrong/stale/LLM-generated/superseded/mislabeled → OMNI needs metadata-quality *states* (author-declared/agent-generated/schema-validated/owner-reviewed/stale/disputed/superseded) | Knowledge-Reservoirs · Build-OS (metadata lint) · projection≠authority | "finding all the docs with a specific type" (1:23) | PARTIAL × absent | spine (guardrail) | promote |
| 5 | Metadata assists routing; it is not the ontology of truth | Keep the OKF interchange core thin; layer OMNI governance depth (owner/custody/consent/temporal/supersession/promotion) by authority + consequence, via extension fields or a linked passport + domain overlays | Knowledge-Reservoirs · doc-passport governance · Federation | "which contains a type, title, description, resource and tags" (0:52) | PARTIAL × partial (passports exist) | spine | promote |
| 6 | `index.md` = derived, recomputable navigation projection | The index tells an agent *where* to look; it is not the corpus and can be stale/incomplete/biased. Governed index exposes generation-time/scope/generator/completeness/broken-link/validation | Manifest-Read-Graph · Knowledge-Reservoirs · projection≠authority | "index of all the MD files in that directory" (0:25) | PARTIAL × partial | vocabulary (guardrail) | promote |
| 7 | OKF index ≠ OMNI Manifest Read Graph | A content index answers *what is present*; the read graph answers *what must be read, under which authority, why*, plus trigger/lifecycle/supersession/precedence/conflict. OKF can package/discover read-graph artifacts; it cannot replace the read graph | Manifest-Read-Graph · Architecture-Memory | "an index of all the MD files" (0:25) | AFFIRM (read-graph superiority) × n/a | spine (guardrail) | promote/reject-substitution |
| 8 | `log.md` ≠ audit ledger | A changelog *narrates* change (optional prose); an audit ledger *proves* the governed event (actor/immutable-id/diff/reason/review/signature/hash/superseded-object). Distinguish human summary · repo history · governed lifecycle events · decision/supersession records | Accountability Loop · Build-OS · Evidence Plane | "a log.mmd which you can think of as a change log" (0:30) | PARTIAL (summary) / direct-conflict (as ledger) × absent | spine (guardrail) | promote (summary) / reject (as ledger) |
| 9 | Git versioning ≠ authority | Version control preserves *which bytes changed, when, by whom*; it does not establish domain authority, truth of the claim, consent, effectiveness, or clinical approval | Build-OS · Accountability · Care | *(Knox-derived from OKF primary rationale; no direct §1 line — flagged inferred)* | AFFIRM × partial | vocabulary (guardrail) | promote |
| 10 | Graph visualizer = connectivity, not relationship semantics | Untyped markdown links show *links-to*, not `supports/contradicts/derived_from/supersedes/implements/governs/routes_to/observed_from/adopted_by/rejected_by`. An OMNI-compatible OKF profile keeps plain links for portability + adds typed relation metadata where needed | Architecture-Memory · Knowledge-Reservoirs · Manifest-Read-Graph | "visualize all the docs...how they connect to each other" (2:44) | AFFIRM/sharpened × absent | vocabulary | promote (typed overlay) / allow-base-only (untyped) |
| 11 | Broken-link tolerance: right for interchange, wrong for some execution | Permissive consumption aids interoperability; consequence-sensitive *admission* decides whether the bundle may influence action (states: conformant/degraded/incomplete/stale/exploration_only/action_inadmissible/revalidation_required) | Knowledge-Reservoirs · Care (admissibility) · REV-184 (blast-radius) | *(OKF spec property; Knox §J — inferred, no §1 line)* | PARTIAL × absent | spine (guardrail) | promote-as-state |
| 12 | Conformance ≠ quality ≠ authority | Separate evaluations: format conformance · referential integrity · metadata quality · source fidelity · authority fitness · use-case admissibility · retrieval utility. Well-formed falsehood is still false | Build-OS/E&V · Knowledge-Reservoirs | "so easy to add...just adding this initial YAML front matter" (2:12) | PARTIAL / direct-conflict (conformance-as-quality) × absent | spine (guardrail) | promote / reject-conflation |
| 13 | `resource` = pointer, not source custody | A URI says *where* something may be found; it does not prove *what* was retrieved/preserved/authorized. OMNI needs source identity/captured-version/hash/custody/owner/auth/timestamp/local-preservation | Evidence Plane/D7 · source-custody · Federation | "resources which can link out to either external URLs or...internal files" (2:01) | PARTIAL × partial | vocabulary (guardrail) | promote |
| 14 | Single `timestamp` too ambiguous for longitudinal truth | "Last updated" cannot represent event/observation/capture/effective/valid/superseded/admissible-through time. Interchange keeps one simple timestamp; OMNI extension preserves full temporal semantics | Clinical-Memory · Observation · temporal-truth | *(OKF field; Knox §M — inferred)* | PARTIAL / conflict-if-sole × partial | vocabulary (guardrail) | promote |
| 15 | Automatic updates: formatting is easy, governed maintenance is the system | An auto-updater must decide supersession/independence/authority/history/review — "knowledge generation is easy; governed maintenance is the actual system." Generated changes = **candidates** until the owner adopts them | Knowledge-Reservoirs · candidate≠commit · Platform Loop | "every open wiki generated or updated going forward will conform" (0:08) | AFFIRM (candidate≠commit) × absent | spine | promote-as-candidate / reject-auto-authority |
| 16 | Hybrid retrieval routing (less agentic search, not none) | Router picks the cheapest mode that satisfies the evidentiary requirement: type/tag/full-text/semantic/graph/temporal/authority/direct/agentic. Deterministic where the question is structured; broader search where meaning is unknown | Context-Governance/Agent-Runtime | "instead of...pure agentic search" (1:08) | AFFIRM × absent | vocabulary | promote |
| 17 | OKF *compatibility profile*, not immediate format capture | Interoperate at the boundary (import: parse→classify→custody→validate→map→admit; export: redacted/scope-limited bundle); preserve OMNI passports/read-graph/lineage/authority/supersession internally. Do NOT fork an incompatible OMNI-only format, do NOT collapse into 5 YAML fields | Knowledge-Reservoirs · Federation · §C (boundary) | "you can plug into your wikis" (2:38) | PARTIAL / potential-sharpening × absent | vocabulary (investigate) | investigate (route, not mint) |
| 18 | Portable bundles = a new exfiltration surface | Portability is both a collaboration feature *and* an exfiltration capability. A bundle may carry PHI/secrets/policy/patient-context/licensed material → needs classification/recipient/purpose/encryption/redaction/expiration/export-approval/operator+patient boundaries | Federation/security/privacy · §C · RBAC | "It's just adding this...YAML front matter to your docs" (2:12) | PARTIAL × absent | spine (guardrail) | promote-with-controls |
| 19 | Lowest-common-denominator must not become highest available meaning | Thin standards win by requiring little; the danger is tools optimizing only for universal fields until the minimum is treated as the complete model. Universal fields may drive discovery/preview/transport — never clinical use/authority/supersession/consent/action | thesis §B · Knowledge-Reservoirs · Care | "because it's so simple, it's so easy to add" (2:09) | PARTIAL × n/a | spine (guardrail) | promote-as-guardrail |

*(Anchor caveat: this OKF-adoption source is a short announcement; several of Knox's deepest points — Git-authority, broken-link admissibility, timestamp temporality, resource custody — are Knox extrapolations from the OKF *primary spec* [`EVSRC-2026-000239`] rather than lines in this transcript. Those rows are marked "inferred/no §1 line" and their anchors properly belong to the sibling spec source; kept here as formalized Knox interpretation, not as verbatim receipts of THIS video.)*

### Net-new primitive dispositions (every Knox candidate gets a verdict)
Knox flagged all 15 as "candidates for deduplication, not automatic new primitives." Confirmed — **net-new DOMAIN objects = 0.**
1. `knowledge_bundle_interchange_profile` → **dedup-as-EXISTS** (Knowledge-Reservoir bundle/lineage doctrine, `FWREG-007`; = the "base interchange profile" facet, not a new object).
2. `okf_compatibility_profile` → **investigate (route, not mint)** — the one genuinely-new *architecture-candidate* here (import/export adapter above OKF). Route: Knowledge-Reservoirs + Federation boundary + §C-pressure. Propose-only; §C stays PAUSED.
3. `bundle_conformance_receipt` → **dedup-as-EXISTS** (Build-OS validation receipt / proof-obligation; a conformance check output, not a domain).
4. `bundle_import_admission` → **dedup-as-EXISTS** (Evidence-Plane ingestion admission + `GRD-036` promotion gate + reservoir admission).
5. `bundle_export_projection` → **dedup-as-EXISTS** (Polaris/projection + Federation redaction/scope; projection≠authority). §C-pressure.
6. `metadata_quality_state` → **investigate (route, not mint)** — sharpening worth carrying: an explicit quality-state enum on doc-passport metadata. Route: Knowledge-Reservoirs + doc-passport governance watch.
7. `index_generation_receipt` → **dedup-as-EXISTS** (Build-OS validation receipt over a recomputable projection).
8. `index_freshness_state` → **dedup-as-EXISTS** (freshness/staleness already in reservoir lifecycle + temporal-truth).
9. `knowledge_change_summary` → **dedup-as-EXISTS** (human-readable changelog facet; the "summary" pole of the log.md-vs-audit distinction).
10. `knowledge_change_event` → **dedup-as-EXISTS** (governed lifecycle event / audit-action; already exists — the "audit" pole).
11. `typed_relation_extension` → **dedup-as-EXISTS** (Architecture-Memory typed relations / read-graph edges; = the typed-relation overlay, an extension not a domain).
12. `resource_custody_reference` → **dedup-as-EXISTS** (source-custody + Evidence-Plane D7 captured-version/hash).
13. `bundle_admissibility_state` → **dedup-as-EXISTS** (Care/REV-184 blast-radius-keyed admissibility + use-case admission; the conformant→action_inadmissible ladder is a state enum, not a new object).
14. `portable_bundle_classification` → **dedup-as-EXISTS** (Federation/security classification + tenant-ownership doctrine).
15. `retrieval_strategy_selection` → **dedup-as-EXISTS** (Agent-Runtime context-router mode selection).

**Net-new domain-object count: 0.** Two **investigate-lane** carries (route, not mint): `okf_compatibility_profile`, `metadata_quality_state`.

### Counterweights / what-NOT-to-import (ALL preserved — the brakes)
Every Knox "what not to import" + reject-tier item, preserved verbatim-in-spirit (no caution inverted):
- **Do NOT invent an incompatible OMNI-specific bundle format before evaluating compatibility** — the ecosystem moved past a speculative proposal; a profile/adapter may beat a fork.
- **Do NOT replace OMNI's document passports with five YAML fields** — OKF's minimum is intentionally too small for OMNI's authority/lifecycle.
- **Do NOT treat `type` as a universal ontology** — types can be local, ambiguous, generated, versioned, conflicting.
- **Do NOT assume tags are controlled vocabulary** — uncontrolled tags drift into synonyms/typos/vendor language.
- **Do NOT trust an auto-generated index without validation** — indexes omit/misdescribe/lag the bundle.
- **Do NOT treat `log.md` as immutable audit evidence** — it is optional prose, rewritable like any file.
- **Do NOT treat an untyped graph as an authority/evidence graph** — a link does not say supports/contradicts/supersedes.
- **Do NOT adopt OKF's permissive broken-link posture for action-critical knowledge** — a bundle may stay readable while becoming inadmissible for consequential decisions.
- **Do NOT equate conformance with correctness** — well-formed falsehood remains false.
- **Do NOT equate deterministic filtering with correct retrieval** — filtering is repeatable; labels/descriptions may be wrong.
- **Do NOT let automatic OpenWiki updates silently supersede owned doctrine/domain truth** — generated changes stay candidates until the owner adopts them (candidate≠commit).
- **Do NOT use a portable bundle as a shortcut around RBAC, consent, tenant isolation, or source licensing** — copyable ≠ may-be-copied.
- **Do NOT make the wiki the canonical state of OMNI** — it is a knowledge *projection* over domain-owned + source-owned state (projection≠authority).
- **Do NOT assume ecosystem momentum guarantees standard longevity** — OKF is an early draft; keep it replaceable behind OMNI's compatibility boundary (GRD-033).
- **REJECT-as-truth:** OKF's minimal field set as OMNI's internal passport (direct conflict → no-op); `log.md` as audit ledger (direct conflict → reject); conformance-as-semantic-quality (direct conflict → reject); auto-update-as-authoritative-promotion (direct conflict → reject); OKF replacing the Manifest Read Graph (direct conflict → no-op).

### Care / healthcare implications (0-net-new does NOT sweep these away)
- **Clinical knowledge bundles are the highest-consequence case of every caution above.** A superseded clinical protocol retaining the active protocol's `type`/tag, or an LLM-generated `description` omitting the one contraindication, is a deterministic-filter-over-bad-metadata *patient-safety* failure, not a tooling nuisance.
- **Broken-link/degraded admissibility is a care gate:** a clinical-decision-support bundle that is "parseable but stale/incomplete" must be `action_inadmissible` — the OKF "consumers must tolerate missing links" posture must NOT silently carry a clinical workflow forward.
- **Portable bundles as PHI exfiltration surface** is a first-order privacy/consent risk: a copyable directory of ambient encounter knowledge crosses tenant/patient boundaries unless classification/redaction/export-approval gate it. (Directly couples to `EVSRC-2026-000288`'s learning-boundary + deidentification cautions.)
- **Freshness/temporal ambiguity is clinical:** "last updated" cannot answer *effective-through / superseded-when* for a guideline — the single-timestamp gap is a longitudinal-record hazard.
- **candidate≠commit at the knowledge layer:** an auto-updated clinical wiki entry is a candidate; only the owning clinical/domain authority commits it as admissible-for-care.

### Candidate guardrails → route to `08` open-review → `06` digest (gated; nothing promoted)
1. A deterministic filter over uncertain metadata is deterministically incomplete; structured metadata makes uncertainty *governable*, not *true* (dedup vs projection≠authority + wave-6 convergence 2).
2. A content index answers *what is present*; a governance read graph answers *what must be read, under which authority, why* — an index must never substitute for the read graph.
3. A changelog narrates change; an audit ledger proves the governed event (dedup vs `log.md`≠audit; reinforces Accountability Loop).
4. Version control preserves artifact history; governance establishes the meaning + authority of that history.
5. Format conformance, referential integrity, metadata quality, source fidelity, authority fitness, and use-case admissibility are *separate* evaluations — conformance is not correctness (dedup vs Build-OS/E&V).
6. Permissive format consumption must not imply permissive action admissibility; consequence-sensitive admission is a separate gate (couples REV-184 blast-radius).
7. A portable knowledge bundle is both an interoperability feature and an exfiltration surface; portability requires classification/purpose/redaction/export-approval + operator+patient boundaries (dedup vs tenant-ownership doctrine + `EVSRC-288` learning-boundary).
8. The lowest-common-denominator interchange minimum must broaden compatibility, not flatten OMNI's richer authority/lifecycle/consent model; agent-readable remains categorically different from authoritative.

### Reread flags
- **Sibling reconciliation (MANDATORY at registry-fold):** `EVSRC-2026-000238` (OKF/Karpathy LLM-wikis/progressive-disclosure), `EVSRC-2026-000239` (Google OKF v0.1 primary spec — the correct home for the Git/broken-link/timestamp/resource anchors), `EVSRC-2026-000262` (OpenWiki / derived org knowledge / evidence-vs-projection-vs-memory-vs-truth). This source is heavily duplicative; its distinct delta = *real adoption + deterministic-retrieval emphasis + the `log.md` bridge*.
- **Manifest Read Graph + Architecture-Memory Control Plane:** verify the "OKF-as-packaging-rail-beneath-the-read-graph" framing against the live read-graph contract before any profile authoring.
- **§C coupling:** import/export bundle exchange is §C-flavored — §C stays PAUSED; carry as pressure only.

### One-line hard read
`focused_semantic`, 3.75/5 — no new idea; the value is external convergence toward a thin interchange rail: **OKF-compatible on exchange, OMNI-governed on admission and use — standardize the path *to* knowledge; govern the path *from* knowledge to reality.**

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Knowledge-Reservoirs · Context-Governance/Agent-Runtime · Manifest-Read-Graph/Architecture-Memory · Build-OS/E&V · Evidence-Plane(D7) · Federation/security/privacy · §C(boundary, PAUSED)` · promotion: `watch` (0 net-new domain objects; 2 investigate-lane carries: `okf_compatibility_profile`, `metadata_quality_state`; 8 guardrail candidates → `08`)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold; `EVRUN-2026-000011`).
- `2026-07-19` — Opus §3 Review 003 formal extraction (formalized Knox Review 001): §0/§0.1 metadata filled (identity_confidence=inferred); status → analyzed; 19 concept clusters; 0 net-new domain objects (15 primitive candidates deduped-as-EXISTS, 2 routed investigate-lane); 14 counterweights + 5 reject-as-truth preserved; 8 guardrail candidates routed to `08`. Registry/anchor-ledger fold + slug-firming deferred to parent agent (`GRD-044`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.
