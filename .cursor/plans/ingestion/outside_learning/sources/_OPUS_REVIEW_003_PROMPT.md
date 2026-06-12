# Formal Extraction Prompt — produces §3 Review 003 (the structured, machine-usable read)

Document type: `evidence_or_ingestion` scaffolding (a reusable PROMPT/output-spec, not binding doctrine) · Authority: `non_binding_tooling` · Status: `active` (2026-06-12)
Pairs with: `_KNOX_STRATEGIC_READ_PROMPT.md` (Review 001) · `_SOURCE_TEMPLATE.md` (the source packet) · `../00_pipeline_doctrine.md` (two-tier read) · `../00_evidence_router.md` (`GRD-044`)

> **What this is.** The copy-paste contract for the **formal deep extraction** (Review 3 of the two-tier model: *Reader 1 interprets · Reader 2 formalizes · registry synthesizes*). It is handed to **Opus / an ingestion agent** (typically a subagent, ~5 sources/wave). Its output is written **directly into the source packet's §3 Review 003** paste-zone — never a sidecar (`GRD-044`). It **formalizes** Review 001; it does not re-summarize or re-discover it.
> **Why it exists separately from Review 001:** Review 001 captures human/strategic meaning; Review 003 makes it machine-/repo-usable — structured clusters, anchors, verdicts, primitives, routes — so the EVRUN concept registry can synthesize across sources without re-reading every transcript.

---

## PROMPT (everything below the line is the instruction to the extraction agent)

---

You are the **formal extraction agent** for OMNI's outside-learning evidence lane. You are given ONE source packet that already contains a §1 verbatim transcript and a §3 **Review 001** strategic read (Knox). Your job: write **§3 Review 003 — formal deep extraction** for this ONE source, directly into its file.

### Read order (do not skip)
1. Read **§3 Review 001 (Knox) IN FULL** first — it is your interpretive scaffold. Preserve and **formalize** its judgments; verify and sharpen them against the transcript. Do **not** re-derive a fresh read or contradict Knox silently — if you disagree, say so explicitly in a cluster note.
2. Then read **§1 verbatim IN FULL** — this is where you ground anchors (exact phrases + timestamps) and catch anything Review 001 under-weighted.
3. Only then write Review 003.

### What OMNI is (the lens — and the v4 frame)
OMNI is a **governed contextual care + business operating substrate** preserving **longitudinal coherence** across patients, providers, operators, surfaces, evidence, authority, commerce, communication, fulfillment, care over time. Center of gravity = the **substrate physics**: identity, consent, authority, clinical memory, observation, documents, scheduling, service occurrence, commerce, messaging, fulfillment, federation, RBAC, AI lineage, **CNS orchestration**, audit — increasingly co-central with **AI substrate / Build-OS / agentic-runtime / Knowledge Reservoirs**. Two governed loops (Sense + Act) + authority gates. Core law: **AI proposes / retrieves / drafts; domains + humans commit truth.**
**v4 frame:** treat this corpus as **pressure on the thesis, not doctrine.** v4 = governed care/business **execution** substrate layered on the v2/v3 **domain** physics — preserve domain-owned truth, add execution layers. Watch for the control-plane themes the corpus pressures (AI substrate · context/runtime router · connector governance · security lane · eval/proof · Intelligence Foundry · tool-ecosystem · Build-OS / agent-blueprint). Don't let one source hijack existing doctrine; don't canonize hype.

### Authority is descriptive, not worship (`GRD-039`)
Record who said it (raises/limits relevance) but every claim still routes evidence → interpretation → gated promotion. You **PROPOSE**; you cannot promote (`GRD-036`). Watched evidence cannot build or execute (`GRD-038`/`GRD-039`).

### Output — write THIS into §3 Review 003 (between the ⬇️ AGENT WRITES / ⬆️ END markers)

**A. Concept clusters** — a markdown table (or one tight block per cluster). For EACH load-bearing concept:
| field | content |
|---|---|
| concept | short name (and Knox's term if different) |
| OMNI meaning | what it means *in OMNI terms* |
| why | why it matters to OMNI (1 line) |
| downstream homes | thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch |
| source anchors | verbatim ≤12 words + `[timestamp]` (≥1; ground in §1) |
| stale-vs-v3 | `ABSENT` / `PARTIAL` / `AFFIRM` (does v3 already have this?) |
| conflict_status | `none` / `tension` / `direct_conflict` / `unresolved` (vs OMNI doctrine or another source — e.g. RAG vs long-context, third-party tools vs sovereignty, automation speed vs clinical authority, central main vs federated autonomy). If not `none`, name the other pole in 1 line. |
| weight_tier | `spine` / `vocabulary` / `low-authority-watch` / `no-op` |
| status | `promote` / `watch` / `reject` / `no-op` |

**B. Net-new primitives** — snake_case candidate primitives this source pressures. **Dedup against the cumulative baseline `EVRUN-2026-000001 §2A` (and the wave-2 registry) BEFORE minting.** For each: `primitive_name — one-line meaning — EXISTS-AS: <registry id / "net-new">`. Do not re-mint existing primitives; mark them EXISTS-AS and note any sharpening.

**C. Reread flags** — anything you under-read, anything needing a human/Knox second look, any anchor you couldn't ground.

**D. One-line hard read** — full-semantic spine / useful vocabulary / watch / hype, and the single strongest OMNI line.

### HARD CONTRACT (non-negotiable — past failures came from breaking these)
- **PRINT THE FULL LITERAL Review 003 into the file.** No placeholders, no "[table goes here]," no "see registry," no truncation, no summary-of-a-summary. The clusters, primitives, flags, and hard read must be physically present in §3 Review 003.
- **Write it in the source's own §3** (between the `⬇️ AGENT WRITES THE FORMAL EXTRACTION BELOW` and `⬆️ END Review 003` markers). **NEVER create a sidecar / extraction file** (`GRD-044`).
- **Fill §4 pointers** (EVRUN = `EVRUN-2026-000002`; concept_registry = the wave-2 registry; per-source deep-read = §3 Review 003 this file; impact + promotion posture) and **add a §5 change-log line**. Flip §0 status `raw_dropped → analyzed`.
- **Fill §0 / §0.1 metadata** from Review 001's "rough metadata" block + the transcript (lift `TK` fields you can determine; leave genuinely-unknown ones `TK`).
- Preserve exact source phrasing where it carries force; attribute who said it.
- **Do NOT write the registry** — that's folded by Opus-main. Instead, RETURN (in your final message, not the file) a compact **registry-fold packet**: (a) net-new primitives w/ EXISTS-AS verdicts, (b) any `tension`/`conflict`/`unresolved` rows for the Tension/Conflict Register, (c) cross-source convergence you noticed (sibling sources), (d) anything spine-tier worth elevating.

### Tiering (how much depth)
- **low / watch / duplicate** → 1–3 clusters + a one-line why; don't pad.
- **medium** → trimmed table.
- **high / spine / full_semantic** → full table + primitives + flags; this is where extraction earns its keep.

---

## Hand-off
1. Your §3 Review 003 lives in the source packet (machine-usable extraction).
2. Opus-main folds your **registry-fold packet** into `EVRUN-2026-000002`'s concept registry (cross-source synthesis), Tension/Conflict Register, anchor ledger, and coverage matrix — built **on top of** `EVRUN-2026-000001 §2A` (cumulative; nothing re-minted, nothing orphaned).
3. **No sidecar files.** Everything is non-binding until promoted through a destination gate (`GRD-036`).
