---
name: phase b5 mindbody ingestion
overview: "Mirror the Hims intake precedent for Mindbody. Three-layer workflow: raw verbatim ingestion (frozen, do-not-edit), then architecture understanding (my synthesis), then build (out of scope for this phase). Outputs feed refined doctrine sharpening + substrate slice scope."
todos:
  - id: user_drops_screenshots
    content: "USER: create .cursor/plans/ingestion/mindbody/screenshots/ and drop all 60 Mindbody PNG/JPG files there"
    status: pending
  - id: user_paste_knox_chat
    content: "USER: paste the full user ↔ chat/knox back-and-forth (with embedded ~300-feature inventory + in-line app-text-copy + iterative discovery framing) into .cursor/plans/ingestion/mindbody/mindbody_knox_chat_raw.md with frozen-ingest header"
    status: pending
  - id: user_write_15_percent_gaps
    content: "USER: write 15% gap list into .cursor/plans/ingestion/mindbody/mindbody_user_feedback_raw.md (rough bullets, include WHY each is a gap)"
    status: pending
  - id: agent_raw_capture_batches
    content: "AGENT: read mindbody_knox_chat_raw.md first (discovery lens); then read screenshots in batches of ~3-5 per pass; produce verbatim raw capture files organized by feature area in .cursor/plans/ingestion/mindbody/ mirroring Hims [Step NN] convention; cross-reference each screen back to where it was discussed in the chat transcript"
    status: pending
  - id: agent_layer2_synthesis
    content: "AGENT: produce .cursor/plans/designs/2026-05-14_mindbody_architecture_understanding.md with Sections A-I (entity model + event vocabulary + config surface + operational depth + gap root causes + coverage matrix + doctrine sharpening scope + substrate slice scope + competitive moats)"
    status: pending
  - id: review_layer2
    content: USER + Knox review Layer 2; iterate or proceed to doctrine sharpening + substrate slice phase
    status: pending
isProject: false
---

# Phase B.5 — Mindbody Reality Ingestion + Architecture Understanding

This phase inserts between Phase B (DL-15 + DL-16 canonized) and any further doctrine sharpening / substrate build / brain audit. It mirrors the Hims intake precedent: raw verbatim ingest first, my own architecture-understanding synthesis second, build third (out of scope here).

## Why this happens before Phase 0 / doctrine sharpening / substrate build

DL-15's 28 invariants capture the *shape* of scheduling but not the *operational depth*. Mindbody's 20-year settings surface, ~300-feature inventory, and your 15% gap list are first-hand evidence we have been reasoning without. Without Phase B.5, doctrine sharpening (encounter primitive, commerce taxonomy, charge_lines) is armchair speculation and the substrate slice is built blind.

## Layer 1 — Raw ingestion (frozen, verbatim, do-not-edit, do-not-analyze)

Lives in `.cursor/plans/ingestion/mindbody/` (mirroring [.cursor/plans/ingestion/hims/](.cursor/plans/ingestion/hims/) structure).

Files to be created in this phase:

- `.cursor/plans/ingestion/mindbody/screenshots/` — directory; you drop the 60 PNG/JPG files here. Any filename convention is fine.
- `.cursor/plans/ingestion/mindbody/mindbody_knox_chat_raw.md` — **the full back-and-forth between you and Knox** pasted verbatim. This is richer than the 300-feature distilled output because it captures your observations during each screen review, Knox's analytical framing per round, iterative refinement, AND the text copy you pasted from the Mindbody app during the conversation. Header: `Source: user ↔ chat/knox back-and-forth (verbatim). Status: raw ingest — do not edit, do not analyze.` Same convention as [.cursor/plans/ingestion/hims/hims_trt.md](.cursor/plans/ingestion/hims/hims_trt.md). The distilled 300-feature inventory will be embedded within this chat transcript naturally — no separate inventory file needed.
- `.cursor/plans/ingestion/mindbody/mindbody_user_feedback_raw.md` — your verbatim narration of pain points, 15% gaps, and "things we want to make better than Mindbody." Rough bullets are fine. Distinct from the chat-back-and-forth file because this is your direct gap articulation rather than the discovery dialogue. Header: `Source: user (verbatim). Status: raw ingest — do not edit, do not analyze.`
- `.cursor/plans/ingestion/mindbody/mindbody_screens_raw_01_to_NN.md` (one or more files, organized by feature area) — produced by me. Per-screenshot capture: filename + visible text content + UI elements + settings exposed + visual markers, exactly as the Hims pattern captures verbatim screen content per step. Cross-references back to the relevant rounds in `mindbody_knox_chat_raw.md` where each screen was discussed.

## Layer 2 — Architecture understanding (my synthesis)

Single document at `.cursor/plans/designs/2026-05-14_mindbody_architecture_understanding.md`. NOT yet OMNI-flavored — it documents Mindbody's architecture as I infer it from the raw layer.

Sections:

- **A. Entity model** — what entities does Mindbody have (services, providers, locations, rooms, resources, appointments, encounters, classes, packages, memberships, products, gift cards, sales, clients, staff, etc.), what relationships, what cardinalities.
- **B. Event vocabulary** — what state transitions Mindbody implies across booking, encounter, commerce, membership, and staff workflows.
- **C. Configuration surface** — the ~200+ knobs taxonomized by domain (scheduling / commerce / memberships / staff permissions / client communication / reporting / integrations / etc.).
- **D. Operational depth** — clinical, staff, commerce, inventory, and edge-case scenarios surfaced by the screenshots that DL-15's 28 invariants do not yet cover.
- **E. User's 15% gap list — architectural root causes** — one row per gap from `mindbody_user_feedback_raw.md` mapped to underlying substrate / brain / UX / integration failure mode.
- **F. Coverage matrix** — every concept from Section A-D bucketed: COVERED by DL-15/DL-16/existing OMNI doctrine (cite invariant) / GAP (doctrine extension needed) / GAP (substrate-only work, doctrine already covers) / IMPROVEMENT-OPPORTUNITY (where OMNI architecturally beats Mindbody).
- **G. Refined doctrine sharpening scope** — what DL-15 amendments, new DLs, or new sections must land before substrate build. Likely includes: encounter primitive, 6+ commerce-behavior modes, charge_lines lifecycle, entitlement resolution order, intent-vs-truth seam, plus 15-30 additional concepts surfaced by Mindbody depth.
- **H. Refined substrate slice scope** — what tables, events, actions, RPCs the build slice has to cover, informed by reality not by guess.
- **I. OMNI competitive moats** — the 15% gaps reframed as architectural advantages.

## Layer 3 — Build (OUT OF SCOPE for this phase)

Sequenced AFTER Layer 2 lands. Layer 2 outputs Sections G + H drive:
1. Doctrine sharpening commits (DL-15 amendments + possible new DLs)
2. Substrate slice build (migrations + RPCs + executor + CNS seam)
3. Phase 0 brain audit against real substrate

These are intentionally not in this plan.

## Concrete sequencing within Phase B.5

1. You create `.cursor/plans/ingestion/mindbody/` directory and `.cursor/plans/ingestion/mindbody/screenshots/` subdirectory; drop all 60 screenshots there.
2. You paste the full user ↔ chat/knox back-and-forth into `mindbody_knox_chat_raw.md` with the frozen-ingest header. The chat naturally embeds the ~300-feature inventory + your in-line app-text-copy + Knox's analytical framing per round.
3. You write the 15% gap list into `mindbody_user_feedback_raw.md` (rough bullets OK; one bullet per gap; include WHY it's a gap, not just WHAT).
4. You tell me to start. I read the chat transcript first (it gives me the discovery lens), then read screenshots in batches (~3-5 per pass for context fidelity), cross-referencing each screen back to where it was discussed in chat. I produce verbatim raw capture files organized by feature area, mirroring the Hims [Step 01 / Step 02 / ...] convention.
5. After all 60 are captured at the raw layer, I produce Layer 2 synthesis document.
6. Knox + you review Layer 2 before any further work proceeds.

## Honest constraints

- 60 screenshots ≈ 12-20 ingestion passes for raw capture; total runtime is multi-session.
- Pain-point descriptions are most efficient as text — screenshots alone leave me guessing about operational WHY.
- For settings screens where the label is opaque, I'll flag the screen and ask you to clarify what it controls in practice.
- DL-15 (currently 28 invariants) will likely grow significantly after Layer 2 — anticipate 15-30 additional invariants from real-world depth (NOT a problem; that's the point).
- Brain hardening plan's Phase 0 stress scenarios (currently 38) will also grow after Layer 2.

## Updates to existing plans after Phase B.5

These are predicted, not promised — exact list comes from Layer 2:

- `.cursor/plans/omni_brain_hardening_d1ef429b.plan.md` — Phase B.5 inserted between Phase B and Phase 0; Phase 0 stress scenarios expanded; doctrine sharpening sequence added between B.5 and substrate slice.
- `.cursor/plans/system_map_three_layers_60706286.plan.md` — DL-15 amendments + possible new DLs (encounter / commerce / etc.) + §1F.10-§1F.24 extensions + new §1H / §1S commerce sections if needed.
- `.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md` — primitive additions (encounter + charge_lines + entitlement resolution) + §8.1 binding clauses.
- ADR + radar + topology + evolution narrative — extended per doctrine changes.

## What Phase B.5 does NOT do

- Does not write any substrate migrations.
- Does not write any application code.
- Does not amend DL-15 or DL-16 yet (amendments come after Layer 2 verdict).
- Does not run Phase 0 brain audit.
- Does not lock the OMNI version's design — that's Layer 3 (subsequent phase).
- Does not "build same or better" Mindbody yet — that comes AFTER Layer 2 produces the gap-to-moat reframe.

## Stopping condition

Layer 2 lands. Knox + you review. Either:
- Layer 2 is sufficient → proceed to doctrine sharpening + substrate slice as informed by Sections G + H.
- Layer 2 surfaces new pressure-test rounds → iterate Layer 2 before any further work.
