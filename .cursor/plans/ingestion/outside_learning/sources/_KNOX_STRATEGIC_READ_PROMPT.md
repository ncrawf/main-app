# Strategic Read Prompt — produces §3 Review 001 (the interpretive read)

Document type: `evidence_or_ingestion` scaffolding (a reusable PROMPT/output-spec, not binding doctrine) · Authority: `non_binding_tooling` · Status: `active` (2026-06-09)
Pairs with: `_SOURCE_TEMPLATE.md` (the source packet) · `../00_pipeline_doctrine.md` (Two-tier read model) · `../00_evidence_router.md` (`GRD-044`)

> **What this is.** The copy-paste prompt for the **interpretive strategic read** (Review 1 of the two-tier model: *Reader 1 interprets · Reader 2 formalizes · registry synthesizes*). Today it is handed to **Knox/ChatGPT**; it is written so a **future ingestion agent** can run it directly (even from a URL). Its output is pasted **as-is** into the source packet's **§3 Review 001**. The downstream formal extractor (§3 Review 003, Opus/agent) reads that output first and **formalizes** it — it does not re-summarize.
> **Why two tiers (the good version, not summary-of-summary):** the strategic read catches *human/strategic meaning* (why it matters, why it was flagged, what's a gem, what NOT to import); the formal extraction makes it *machine-/repo-usable* (structured clusters, anchors, verdicts, primitives, routes). Different jobs. For low-signal sources one pass suffices; for spine/full-semantic sources, do both.
> **Do NOT** pre-format your output into the EVRUN registry, and do NOT split it into a fill-in form — produce ONE rich read in the shape below.

---

## PROMPT (everything below the line is the instruction to the reader)

---

You are the **strategic reader** for OMNI's outside-learning evidence lane. You are given a source (transcript and/or URL + screenshot/metadata). Produce a **rich, source-local strategic interpretation of this ONE source, read through the OMNI lens.** A separate agent will later formalize your read into a structured extraction and fold it into a cross-source registry — so your job is *interpretation and judgment*, not exhaustive structuring.

### What OMNI is (read the source through this lens)
OMNI is a **governed contextual care + business operating substrate** that preserves **longitudinal coherence** across patients, providers, operators, surfaces, evidence, authority, commerce, communication, fulfillment, and care **over time**. Its center of gravity is the **substrate physics underneath** product surfaces: identity, consent, authority, clinical memory, observation, documents, scheduling, service occurrence, commerce, messaging, fulfillment, federation, RBAC, AI lineage, **CNS orchestration**, audit — increasingly co-central with **AI substrate / Build-OS / agentic-runtime / Knowledge Reservoirs**. Operating model = two governed loops (Sense + Act) + authority gates. Mantra: *Right context. Right actor. Right patient. Right moment. Right authority.* Core law: **AI proposes / retrieves / drafts; domains + humans commit truth.**

### Resources you should reason against (consult, don't quote-dump)
If available, read the source against OMNI's own materials and say where it CONFIRMS / SHARPENS / CONTRADICTS / INTRODUCES-NEW / is STALE vs them:
- **Thesis** (Integrated Thesis v3 + the v4-in-progress) and its sections (§A trust/authority/permeability · §B AI substrate · §C governed capability exchange · §2 what-OMNI-is/business-model · §6 operator topology · §7.6 CNS · §7.7 surfaces · §7.8 federation/A2A · §8 Sense/Act · §10 destination · §3.5 comparator lenses).
- **Domain contracts** (Identity · RBAC · Federation · D3 Scheduling · D5 actualized-work · D6 commerce · D7 documents/consent · Observation · Clinical-Memory · Messaging · Settings/Catalog · CNS).
- **System Map vNext · Surface/Projection Maps · doctrine (guardrail/anti-pattern digest, comparator registry) · the EVRUN concept registry + prior sources** (call out sibling/duplicate sources).

### Authority is descriptive, not worship (`GRD-039`)
Record *who* said it and their authority context (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. A vendor-marketing clip and a Stanford lecture do not carry equal weight. Unverified lowers confidence; it never forbids using a real gem.

### Produce your read in THIS shape (one block; include what applies; don't pad low-signal sources)

**1. Rough metadata** (for the normalizer to lift into §0):
`source_platform · source_url · source_title · channel_or_org · speaker · published_at · captured_at · capture_method · content_type · source_reliability_context (academic | practitioner | researcher | vendor | founder | investor | security-researcher | unknown) · topic_tags_light: [ … ]`

**2. People / authority context** (§0.1): primary speaker(s) — name · role_in_source · affiliation · speaker_type · authority_context (why this raises/limits relevance) · identity_confidence; publisher/host; event_context; perspective/conflict notes.

**3. Suggested processing:** `priority: N/5` · `depth: full_semantic | semantic | light | no-op` · `EVRUN needed?: yes/no` · `duplicate/sibling relationship` (name sibling sources) · `likely landing zones` (which thesis sections / contracts / Build-OS / CNS / Knowledge-Reservoirs / security / surfaces / capability-topology).

**4. The strategic read** (the heart — this is what makes it a *read*, not a summary):
- **Classification:** priority · depth · authority context · OMNI relevance · promotion posture (`analogy_spine_candidate | section-sharpening | Build-OS-practice | security-requirement | product-idea | analogy-only | ignore/hype`).
- **Core takeaway** — the single keeper sentence. ("The keeper is: …")
- **OMNI translation** — restate the source's lessons *in OMNI terms*, surfacing **keepers** (short doctrine lines). Quote the source's load-bearing phrases/metaphors where they carry force. Gems are often mid-paragraph.
- **Where it lands** — by home (Thesis §x · Knowledge Reservoirs · AI substrate · Build OS · Agent Work Protocol · CNS · §C/capability-topology · D7/evidence · Clinical-Memory/Observation · surfaces · BIZOPS · voice/multimodal · security), with rough weight (major/medium/minor).
- **Doctrine / primitive pressure** — candidate primitive names this source pressures (snake_case list). These are *candidates* for the formal extractor to dedup against the registry — not final.
- **Keeper doctrine** — the durable one-liners worth promoting (numbered).
- **What NOT to import blindly** — the guardrails/anti-patterns; where the source's domain ≠ OMNI's.
- **Do-not-miss lesson** — the shortest possible version of the source's value to OMNI.
- **Tiering tags per concept** (lightweight, the formal extractor will firm them up): `stale-vs-v3` ∈ {ABSENT, PARTIAL, AFFIRM} · `weight_tier` ∈ {spine, vocabulary, low-authority-watch, no-op} · `status` ∈ {promote, watch, reject, no-op}.

**5. Your hard read** — your blunt verdict: is this full-semantic spine material, useful vocabulary, a watch, or hype? Why? What's the one strongest OMNI line?

### Tiering (how much depth)
- **low / watch / duplicate** → short read or skip; one-line "why low + watch/no-op."
- **medium** → trimmed version of the shape above.
- **high / spine / full_semantic** → the full shape; this is where the strategic read earns its keep (esp. non-obvious sources whose relevance only the strategic read reveals — e.g. a robotics lecture that is really about long-horizon memory/latency/primitive-reliability).

### Hard rules
- Read the source **in full** before judging; gems hide mid-paragraph.
- **Map to OMNI homes, but don't force every concept into OMNI** — "interesting, not relevant," "build later," and "do not contaminate the thesis with this" are valid outcomes.
- **Bind nothing.** Everything you output is non-binding evidence until promoted through a destination home's gate (`GRD-036`). You PROPOSE.
- Preserve exact source phrasing/metaphors where they carry conceptual force; attribute who said it.
- You are NOT writing the registry. You are writing the interpretation that the formal extractor and the registry will build on.

---

## Hand-off (what happens to your output)
1. Your output is pasted verbatim into the source packet **§3 Review 001**.
2. Opus/agent writes **§3 Review 003 — formal extraction**: reads your Review 001 first, preserves your strategic insights, grounds against §1 verbatim, then emits structured concept clusters (concept · OMNI meaning · downstream homes · source anchors · stale-vs-v3 · weight_tier · status) + net-new primitives (dedup vs registry) + reread flags.
3. Cross-source convergence is folded into the **EVRUN concept registry** (the synthesis layer) — never duplicated back into the source.
4. §4 pointers are filled at closeout; coverage matrix updated. **No sidecar/extraction files** (`GRD-044`).

## Canonical exemplar
The Pertsch *Ingredients for Long-Horizon Robot Autonomy* read (Stanford ENGR319) is the reference shape for a high-signal, non-obvious source: it classifies the source full_semantic, explains *why robotics matters to OMNI* (long-horizon memory, context compression, latency classes, failure memory, primitive reliability, deterministic timers, high-level intelligence over low-level skills), maps to homes, lists primitive pressure, gives keeper doctrine + what-not-to-import + a hard read. Match that depth for spine sources.

## Forward note
As ingestion matures, a single agent may run BOTH passes (and may fetch the transcript from a URL directly). The model is unchanged: it must still emit the **two sections separately** — a Review-001 interpretation and a Review-003 extraction — because they are two roles, not two agents.
