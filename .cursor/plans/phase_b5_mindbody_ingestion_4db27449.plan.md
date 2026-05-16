---
name: phase b5 mindbody ingestion
overview: "Mirror the Hims intake precedent for Mindbody. Four-step workflow: cleanup raw inputs (move duplicates, rename misplaced files), build a manifest as the master index, raw verbatim ingestion organized by feature area (frozen, do-not-edit, preserve everything), then architecture understanding synthesis (Layer 2 sections A-M). Build is out of scope for this phase. Outputs feed refined doctrine sharpening (DL-15 amendments + new commerce/RBAC/settings DL drafts) + substrate slice scope. Per-batch commits so disaster recovery works."
preserve_everything_principle: "Full screenshot/chat granularity must remain available later, not just the polished Layer 2 summary. Raw capture files are the durable archive that Layer 2 references. Never delete, never summarize away — move duplicates into _duplicates/ subfolder rather than deleting; rename misplaced inputs into properly-named raw files; preserve all chat text verbatim across multiple raw files when needed."
todos:
  - id: user_drops_screenshots
    content: "USER: drop screenshots into .cursor/plans/ingestion/mindbody/screenshots/"
    status: completed
  - id: user_paste_knox_chat
    content: "USER: paste full user <-> chat/knox back-and-forth into mindbody_knox_chat_raw.md"
    status: completed
  - id: user_write_15_percent_gaps
    content: "USER: write 15% gap list into mindbody_user_feedback_raw.md (rough bullets, include WHY each is a gap)"
    status: completed
  - id: agent_cleanup_pass
    content: "AGENT: cleanup pass (preserve everything). Move 49 ' 2.PNG' duplicate screenshots to .cursor/plans/ingestion/mindbody/screenshots/_duplicates/ (do not delete). Move Pasted text (4).txt + Pasted text (6).txt out of screenshots/ and rename to mindbody_settings_room_requirements_raw.md + mindbody_settings_class_course_options_raw.md with frozen-ingest headers. Commit + push cleanup."
    status: completed
  - id: agent_build_manifest
    content: "AGENT: build .cursor/plans/ingestion/mindbody/mindbody_ingestion_manifest.md (master index). Columns: screenshot filename, screen title (inferred from content), feature area, raw capture file it lands in, chat sections referencing it, mobile/desktop indicator, batch number, ingestion status. This is the durable index Layer 2 and future contributors traverse to find granularity. Commit + push manifest scaffold."
    status: completed
  - id: agent_chat_navigation_map
    content: "AGENT: read chat transcript in offset/limit passes to build a navigation map at .cursor/plans/ingestion/mindbody/mindbody_chat_navigation_map.md (line ranges per topic / per Knox-takeaway-batch / per screenshot batch user dropped). Preserves chat granularity without summarizing — just indexes it. Commit + push."
    status: completed
  - id: agent_raw_capture_batches
    content: "AGENT: ingest screenshots in feature-area batches (~5-10 per pass). 163 of 163 (100%) COMPLETED across 17 raw capture files (mindbody_04 through mindbody_21) over 3 threads (Batch 4 thread 1; Batches 5-10 thread 2; Batches 11-21 thread 3). 185+ cumulative findings encoded."
    status: completed
  - id: agent_layer2_synthesis
    content: "AGENT: Layer 2 synthesis COMPLETED at .cursor/plans/designs/2026-05-16_mindbody_architecture_understanding.md (commit 780e523). 13 sections A-M; 185+ findings cited back to raw layer + manifest + chat nav map. Open questions Q1-Q5 SHELVED for Phase B.5+ doctrine sharpening."
    status: completed
  - id: agent_plan_integration
    content: "AGENT: plan integration COMPLETED (commit dc6c170). 7 canonical plans updated with Phase B.5 cross-references: omni_brain_hardening / FOUNDATIONAL_ARCHITECTURE / system_map / FUTURE_ARC_federation / evolution_narrative / v1_pressure_test_radar / communications_topology."
    status: completed
  - id: review_layer2
    content: USER + Knox review Layer 2 + manifest + raw captures; iterate or proceed to doctrine sharpening + substrate slice phase
    status: pending
isProject: false
---

# Phase B.5 — Mindbody Reality Ingestion + Architecture Understanding

This phase inserts between Phase B (DL-15 + DL-16 canonized) and any further doctrine sharpening / substrate build / brain audit. It mirrors the Hims intake precedent: raw verbatim ingest first, my own architecture-understanding synthesis second, build third (out of scope here).

## Knox direction note (2026-05-15 evening, locked):

> "Preserve everything. Move duplicates out of the way, don't delete them. Create a manifest, raw ingestion files by feature area, then synthesize into Layer 2. We need full screenshot/chat granularity available later, not just a polished summary. Proceed with the expanded scope and commit after each ingestion batch. This keeps the build disciplined without slowing it down."

The Knox directive is BINDING for this phase. The discipline applies retroactively to all future ingestion phases (Phase C Mindbody-additional / Phase D Rx-labs-notes / future intake / future commerce reference systems): preserve verbatim raw, build a manifest, ingest by feature area, synthesize on top, never lose granularity.

## Scope reality (post-pre-read 2026-05-15 late evening)

- **178 unique screenshots** (49 mobile IMG_ + 127 desktop Screen Shot + 2 misnamed Pasted text files inside screenshots folder). 64MB total. 49 of the IMG_ files have ` 2.PNG` Mac/iCloud sync duplicates.
- **Chat transcript: 30,627 lines / ~1MB**. Already pre-structured by Knox into numbered architectural takeaways per batch. Knox quality is HIGH; agent verifies against primary screenshots rather than redoing the work.
- **User feedback: 62 lines / 9 enumerated gaps** with WHAT/WHY/WANT detail + explicit framing (HYBRID Hims + medspa + procedural outpatient + future sleep-labs/cardio/endocrine/plastics + industry analogy invitation).
- **Two Pasted text settings files** (`Pasted text (4).txt` = Room Requirements 132-service matrix, `Pasted text (6).txt` = Class/Course Options ~89 settings) are gold; renamed to proper raw files during cleanup pass.

Mindbody surface area informs at least 8 OMNI domains, NOT just scheduling. Layer 2 must split insights across scheduling DL-15 / commerce future Phase C / RBAC / settings infrastructure / CRM / Rx-labs future Phase D / marketing engine / mobile-and-desktop UX. The original 9-section Layer 2 is too narrow; 12-13 sections (A-M) lock the broader scope.

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

## Concrete sequencing within Phase B.5 (8-step execution, multi-turn)

User-side prep (COMPLETED 2026-05-15 evening):
1. ~~Screenshots dropped into screenshots/ folder~~ (178 unique files; 49 mobile + 127 desktop + 2 Pasted text inside screenshots folder)
2. ~~Knox chat pasted into mindbody_knox_chat_raw.md~~ (30,627 lines / ~1MB)
3. ~~15% gap list pasted into mindbody_user_feedback_raw.md~~ (62 lines / 9 enumerated gaps)

Agent-side execution (8 batches, commit + push per batch):

**Step 1 — Cleanup pass.** Move 49 ` 2.PNG` duplicates to `screenshots/_duplicates/` (preserve, don't delete). Rename `Pasted text (4).txt` → `mindbody_settings_room_requirements_raw.md` and `Pasted text (6).txt` → `mindbody_settings_class_course_options_raw.md` at parent level with frozen-ingest headers. Commit + push.

**Step 2 — Manifest scaffold.** Create `mindbody_ingestion_manifest.md` at parent level. Columns: filename / inferred screen title / feature area / raw capture file destination / chat navigation line ranges / mobile-or-desktop / batch number / status. Pre-populate filename column from `screenshots/` listing. Commit + push.

**Step 3 — Chat navigation map.** Read chat transcript in offset/limit passes; produce `mindbody_chat_navigation_map.md` with line-range index per Knox-takeaway-batch / per topic / per user-screenshot-drop-batch. Preserves chat granularity without summarizing — just indexes it. Commit + push.

**Step 4-N — Feature-area raw capture batches.** For each feature area (~15-20 areas total), in a single pass:
- read 5-10 relevant screenshots
- read relevant chat sections via navigation map
- produce `mindbody_NN_<area>_raw.md` with per-screen [Step NN] entries: filename + visible text + UI elements + settings exposed + visual markers + chat cross-references + Knox-takeaway cross-references
- update manifest rows (feature area + raw capture file + status COMPLETED)
- commit + push

Likely feature areas (final list determined during ingestion): dashboard / appointments-grid / appointments-detail / rooms-resources / check-in / clients-directory / clients-profile / pos-checkout / pricing-packages-memberships / contracts-gift-cards / promo-codes / insights-reports / marketing-auto-emails / services-products-catalog / service-categories / staff-list / staff-permissions-rbac / provider-profile / provider-availability / settings-general / settings-words-phrases / settings-class-course / waitlist / notifications-alerts / privacy-merge-unmask / inventory / mobile-app / consumer-mode-vs-business-mode.

**Step N+1 — Layer 2 synthesis.** Produce `.cursor/plans/designs/2026-05-15_mindbody_architecture_understanding.md` with sections A-M (entity model / event vocabulary / configuration surface / operational depth / user gap root causes / coverage matrix / refined doctrine sharpening scope / refined substrate slice scope / OMNI competitive moats / cross-domain implications / industry analogy insights / multi-modality+scaling vision / mobile-vs-desktop UX). Cite specific raw capture file + manifest row + chat navigation map line range for every claim. Commit + push.

**Step N+2 — Plan integration.** Update existing canonical plans (omni_brain_hardening / system_map / FOUNDATIONAL / evolution_narrative / radar / topology) with Phase B.5 cross-references pointing at Layer 2 + manifest. Commit + push.

**Final — Review checkpoint.** USER + Knox review Layer 2 + manifest + raw captures. Iterate or proceed to doctrine sharpening + substrate slice phase.

## Honest constraints

- 178 screenshots + 30k chat lines ≈ 15-25 ingestion passes for raw capture (more than the original 60-screenshot estimate). Total runtime is multi-session (likely 8-12 agent turns).
- Image-read passes cost ~1k-3k context tokens each; batching ~5-10 images per pass before context degrades.
- Chat reads need offset/limit pagination (cannot read 30k lines in one pass; 100k-character limit per Read).
- Pasted-text settings files (Room Requirements 132-service matrix, Class/Course Options 89-knob page) are gold and reduce screenshot-reading burden for those areas.
- DL-15 (currently 28 invariants) will likely grow significantly after Layer 2 — anticipate 15-30 additional invariants from real-world depth (NOT a problem; that's the point).
- Brain hardening plan's Phase 0 stress scenarios (currently 38) will also grow after Layer 2.
- Layer 2 outputs surface NEEDS for new doctrine locks (commerce DL, RBAC DL, settings-infrastructure DL). Those are out-of-scope to AUTHOR within B.5 — they get logged in section J (cross-domain implications) for future arc execution (Phase C onward).
- Per-batch commit + push is BINDING per Knox direction — disaster-recovery cadence keeps the work durable even if context dies mid-session.

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
