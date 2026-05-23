# Evolution Narrative Volume 4 — Tier-0 Governance Stack and the OMNI Work Operating System

Document type: `narrative_or_postmortem`
Authority: rationale_nonbinding
Status: active
Domain(s): architecture_governance, architecture_evolution
Lifecycle role: historical_record (active arc)
Source-of-truth relationship: rationale/history of the 2026-05-22 → 2026-05-23 arc that established the OMNI Tier-0 governance stack; non-binding. Pointers to canonical binding destinations are explicit below. This narrative does not authorize routing or doctrine; it explains why the binding artifacts exist.
Supersedes: none (extends `evolution_narrative.md` + `evolution_narrative_volume_2_2026-05-17.md` + `evolution_narrative_volume_3_2026-05-22.md`)
Superseded by: none
Manifest action: add_tier2
Review gate: none

agent_read_rule: consult_if_routed

---

## Non-Authority Notice

This is a narrative arc, not doctrine. It captures meaning, pivots, and discoveries. It does not bind. When this narrative is cited, cite the canonical destinations it points to — not this file.

---

## Where the arc started

The work that became the Tier-0 governance stack did not start as governance work. It started as **scheduling and CNS implementation** — a small code slice intended to land scheduling-authority types and CNS action orchestration runtime scaffolding. The slice surfaced ~200 lines of runtime TypeScript across `lib/events`, `lib/intake/runtime`, `lib/messages`, `lib/outbound`, `lib/protocol`, `lib/rules/runtime`, and a new `lib/scheduling/` directory, plus modifications to the scheduling rule matrix, the CNS action orchestration ADR, and DL-22 clinical media.

In the middle of that work, the OMNI workspace state revealed something larger than the slice: **the system did not have a coherent way to remember what it was deciding**. Doctrine accumulated in chat. Decisions buried themselves inside narratives. The Read Graph had become a wave-history journal. Catalog rows pointed to files whose classifications did not match how the Read Graph actually loaded them. Open-review rows sat in "open" forever with no triggers. New artifacts kept needing follow-up operating contracts because they were created without them. Agents lost architecture memory between sessions.

The scheduling/CNS slice was paused. The realization: **OMNI did not need more docs. It needed a work operating system.**

That pivot is the start of this arc.

---

## Why the jump happened

The repeated failure modes were not random. They formed a pattern:

- **Architecture memory was scattered** across plans/doctrine/, docs/architecture/, ad-hoc patch-specs, and HANDOFF artifacts with no coordination.
- **Agents kept losing context** between sessions — chat carried operational understanding that vanished when the chat closed.
- **Doctrine, narrative, evidence, and handoff** were not cleanly separated; narrative was being cited as binding, evidence as doctrine, handoff as authority.
- **Read Graph** was being used simultaneously as routing engine, execution journal, and closure archive.
- **Patch-specs** got created and executed without leaving a clear "this is done" marker; future agents could not tell whether they were proposals, in-progress, or completed.
- **New governance artifacts** (Future Work Registry, Architecture Artifact Routing Protocol) kept needing follow-up "Operating Contract" patches because they were created without lifecycle rules in the same pass.
- **AGENTS.md** had repeatedly been compressed to the point that critical layer references (Build OS, Charter, Protocol) disappeared and had to be restored.

None of these were fatal individually. Together they created a system where every new agent session re-litigated the same questions: *Is this binding? Where does this go? What is the authority chain? What was decided already? What's open?*

The decision was to stop adding more docs and instead build the coordinating machinery underneath.

---

## What was discovered

Over the course of the arc, three meta-discoveries shaped the design:

### Discovery 1: There is no single "governance" layer — there are five distinct concerns

The work that looked like "governance cleanup" was actually five different problems wearing the same coat:

1. **Authority and schema** — what is binding; what schemas exist; where files are classified and routed. **→ Architecture Memory Control Plane.**
2. **Coordination** — how the layers interact; precedence between them; freshness contracts. **→ OMNI Coordination Charter.**
3. **Runtime agent loop** — what an agent must do in a work package from boot to stop. **→ Agent Work Protocol.**
4. **Boot pointer enforcement** — a small surface that lives at the entry path. **→ AGENTS.md.**
5. **Staged execution and admission** — how work enters implementation; gate criteria; lifecycle closure. **→ OMNI Build OS (layer model, rollout sequence, Build Entry Gate v0).**

Each had been silently mixed into the others. Separating them was the first major piece of the arc.

### Discovery 2: Governed-stream artifacts need Operating Contracts at creation, not retroactively

Three consecutive artifacts in this arc surfaced the same pattern:

- **Future Work Registry** — created; then needed a retrieval/seeding contract; added later.
- **Architecture Artifact Routing Protocol** — created; then needed the New Artifact Completion Rule; added later.
- **Read-Graph History Archive** — was about to be created as a "graveyard doc" with no maintenance rules; caught mid-flight and required a full Archive Operating Contract.

That third instance was the trigger: this is a recurring failure mode, not a one-off oversight. **Any artifact that is a "stream" — that will receive append/update/closure activity over time — needs its Operating Contract in the same pass it is created.** Otherwise the next agent sees an empty destination with no rules and either invents rules ad-hoc or fills the destination with the wrong material.

This was promoted from open-review row (`AWP-REV-NACR-EXTENSION-001`) to a first-class Control Plane Enforcement Rule (Rule 7 — Governed Stream Artifact Operating Contract Rule). The loop closed at the source.

### Discovery 3: "Tracked" is not "fixed"

Late in the arc, a queue-staleness sweep revealed that several open-review rows from prior audits had been sitting in "open" status for days/weeks with no triggers, no closure conditions, and no owner gates. Calling them "tracked" while they accumulated was the same pattern as treating "create a destination" as "solve the problem."

The fix was hardening: every keep-open row got `current_disposition`, `promotion_trigger`, `closure_condition`, `next_trigger`, `next_check_condition`, `related_canonical_artifacts`, and `blocks_current_work` semantics. The open-review queue is no longer a graveyard. It is now a lifecycle surface.

---

## What got built

The Tier-0 stack, in the form it ended this arc:

| layer | artifact | role |
|---|---|---|
| Boot pointer | `AGENTS.md` | Non-Negotiables, Agent Boot loop, Stop Proof, OMNI Operating References — concise enforcement surface, no schema |
| Coordination | `.cursor/plans/doctrine/00_omni_coordination_charter.md` | Layer Model (5 layers), Precedence Contract, Interface Contracts, Lifecycle Freshness Contract, Catalog and Read-Graph Clarity Rule — no schema ownership |
| Authority + schema | `.cursor/plans/doctrine/00_architecture_memory_control_plane.md` | Authority/routing truth, Schema Lock v0, Enforcement Rules (including Rule 7), Lifecycle Closure, Anti-Shrouding Guardrail Family |
| Runtime SOP | `.cursor/plans/doctrine/agent_work_protocol.md` | 11-section runtime loop: Boot → Identify Gate → Classify → Load Context → Intake/Route → Build-Entry Checks → Execute → Lifecycle Maintenance → Stop/Proof + Non-Loss + Coverage |
| Routing | `.cursor/plans/doctrine/04_manifest_read_graph.md` | Tier 0 Universal Path (14 docs), Tier 0.5 Boot-Visible Surface, Workstream Coverage Overlays, Implementation-Lane Anchors, Read-Graph Operating Contract |
| History | `.cursor/plans/doctrine/04_manifest_read_graph_history_archive_2026-05-22.md` | Wave-history extracted from the Read Graph + substantive Archive Operating Contract (Scope + Entry Format + 5 Lifecycle Rules + Volume Spawn Rule + Non-Authority) |
| Future scope | `.cursor/plans/doctrine/future_work_registry.md` | Parked/deferred work index with retrieval/seeding contract |
| Open Review | `.cursor/plans/doctrine/08_open_review_queue.md` | Hardened lifecycle queue: every keep-open row has explicit triggers + closure conditions |
| Build OS | `.cursor/plans/doctrine/09_omni_build_os_layer_model.md`, `10_omni_build_os_rollout_sequence.md`, `11_build_entry_gate_v0.md` | Layer model + rollout sequence + D1 readiness gate — implementation lane admission |
| Tag taxonomy | `.cursor/plans/doctrine/agent_work_protocol_tag_taxonomy.md` | Canonical vocabulary for `domain_tags`, `lane_tags`, `affected_surfaces`, `build_entry_trigger`, `item_type` |

Plus the supporting ledgers (`01_master_corpus_catalog.md`, `02_authority_routing_map.md`, `03_decision_extraction_ledger.md`, `05_supersession_conflict_ledger.md`, `06_guardrail_antipattern_digest.md`, `07_evidence_ingestion_ledger.md`, `08_open_review_queue.md`, document governance + taxonomy spec, doctrine manifest, coherent OMNI architecture pattern).

---

## What mistakes were corrected

Not in chronological order; in pattern order:

- **Narrative treated as authority.** Volume 2 and Volume 3 had been cited as binding in some places. Charter Non-Loss Rule + Read-Graph Operating Contract "do not store narrative bodies here" rule + Protocol "do not use narrative as binding authority unless explicitly promoted/routed" all close this.
- **Read Graph as wave journal.** The Read Graph had grown to 726 lines, ~87% of which was historical wave content interleaved with current routing. A fresh agent had to scroll through hundreds of lines of historical addenda to find active routes. Extracted ~640 lines verbatim to the History Archive Volume 1; main Read Graph rewritten to ~333 lines of current routing only.
- **Graveyard doc risk.** The History Archive was almost created as an unmanaged dump of wave content. Caught: gave it a substantive Archive Operating Contract (Scope + Entry Format + Lifecycle Rules + Volume Spawn Rule + Non-Authority) before extracting. The archive is now a governed stream artifact with append rules, not a graveyard.
- **Open-review rows vague.** Several rows from prior audits sat in "open" with no triggers. Fixed: every keep-open row now has `current_disposition`, `promotion_trigger`, `closure_condition`, `next_trigger`, `next_check_condition`, `related_canonical_artifacts`, `blocks_current_work`.
- **Governed-stream artifacts without operating contracts.** Three instances (Future Work Registry, Artifact Routing Protocol, History Archive) needed retroactive maintenance contracts. Caught and promoted to Control Plane Enforcement Rule 7 to prevent future instances.
- **Over-compressing AGENTS until Build OS disappeared.** Earlier in the arc, AGENTS.md was tightened so aggressively that Build OS references were dropped. Restored as part of the Non-Negotiables block (system map, charter, control plane, build OS, protocol, read graph, build entry gate, AGENTS role boundaries).
- **"Tracked" treated as "fixed".** The third loop of "create destination, declare problem tracked, fail to add maintenance rules." Caught and structurally prevented by Rule 7.
- **Schema-host risk in cross-references.** Protocol §9 originally inlined the 9 Minimum Contract Elements of Rule 7 as a checklist — borderline "second schema host" territory. Thinned to pure pointer; Rule 7 stays the single source of truth.
- **Charter as second open-review queue.** The Charter's `Current Open Debt` section was approved but flagged the risk of becoming a status board. Added explicit "this section is a post-activation snapshot; queue wins if divergent" sentence.
- **Audit recommendations treated as final.** The Tier-0 audit (2026-05-22) recommended §3/§5 dedup in Protocol; the activation readiness sweep determined the recommendation was overcorrected. Rejected the dedup with explicit rationale.

---

## What became binding (canonical destinations)

This narrative does not introduce binding doctrine. Binding lives in the destinations below; cite them, not this file:

- **Layer coordination** → `.cursor/plans/doctrine/00_omni_coordination_charter.md`
- **Authority + schema spine** → `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`
  - **Schema Lock v0** → `## Schema Lock v0` section (including the new `### Supplemental Passport Fields for Governed-Stream Artifacts` subsection)
  - **Governed Stream Artifact Operating Contract Rule** → Enforcement Rule 7 + dedicated `## Governed Stream Artifact Operating Contract Rule` section
  - **Lifecycle Closure obligation** → `## Lifecycle Closure` section
  - **Anti-Shrouding Guardrail Family** → consolidated section
- **Runtime SOP** → `.cursor/plans/doctrine/agent_work_protocol.md`
  - **New Artifact Completion Rule** → §5
  - **Governed Stream Artifact Operating Contract Pointer** → §5 sub-section
  - **Build-Entry Checks** + **Composition Discipline Pointer** + **Future Work Registry Contract** → §6
  - **Lifecycle Maintenance** + **Open Review Gap Routing Rule** → §8
  - **Stop Report contract** (with explicit Rule 7 proof requirement for governed-stream artifacts) → §9
- **Read-Graph Operating Contract** → `.cursor/plans/doctrine/04_manifest_read_graph.md` `## Read-Graph Operating Contract` section (Update Rule + Route Entry Contract + Read-Graph Update Disposition)
- **History Archive Operating Contract** → `.cursor/plans/doctrine/04_manifest_read_graph_history_archive_2026-05-22.md` `## Archive Operating Contract` section
- **Build Entry Gate v0** → `.cursor/plans/doctrine/11_build_entry_gate_v0.md`
- **Open Review Queue lifecycle discipline** → `.cursor/plans/doctrine/08_open_review_queue.md` Queue Governance Lock + per-row lifecycle fields

If the canonical destination says one thing and this narrative says another, the canonical destination wins.

---

## What remains unresolved

The arc closed the Tier-0 governance work. It did not close everything:

- **`AWP-REV-TESTINV-001`** — Test/Invariants Registry decision. Trigger fires "before first runtime implementation lane enters Build Entry Gate v0." Build Entry Gate v0 already handles D1 readiness invariants; broader registry decision pending first runtime lane.
- **P4 Build Entry Gate v0 restructure** — deferred per the Tier-0 audit's own recommendation pending WP-EXEC execution journal closure. Build Entry Gate v0 is 1022 lines; current binding text is at the top, but the WP-EXEC journal occupies most of the bottom and may distract future agents until WP-EXEC closes.
- **`AWP-REV-CMDS-001`, `AWP-REV-GLOSSARY-001`, `AWP-REV-RUNBOOK-001`** — canonical-home decisions deferred; each has explicit triggers in `08_open_review_queue.md`.
- **`AWP-REV-WORKSTREAM-OVERLAY-001..005`** — RBAC, Settings, Care Coordination, Federation/Topology, AI Governance currently routed as cross-cutting overlays in the Read Graph; promotion to full DRT workstream is triggered when a matching domain becomes a primary build lane.
- **First implementation lane not selected.** Build Entry Gate v0 lists candidates in its `## Draft Pre-Build Work Packages (Non-Executable)` section. Selection is a user/architecture-steward decision.
- **Scheduling/CNS/runtime WIP parked.** All in-progress scheduling-authority runtime code, CNS ADR modifications, scheduling rule matrix updates, DL-22 clinical media tweaks, narrative addenda, and ingestion manifest changes were preserved on `wip/scheduling-cns-pre-thesis-snapshot-2026-05-23` at `d753a64`. **Names, taxonomy, and primitives in that snapshot may be obsoleted by the upcoming OMNI core-thesis refinement.** That branch is raw material / quarry, not law.
- **OMNI core-thesis refinement next.** The next phase will revisit fundamental concepts — atomicity, intake, scheduling, CNS framing — at the deepest level. It may rename or restructure primitives that the parking branch uses. Reconciliation between the new thesis and the parking branch is deferred until after the thesis lands on `main`.

---

## Why this narrative exists

This arc was 24+ hours of compressed architectural work. The substantive decisions are in the canonical destinations above. The commit message at `347ce0c` is a useful audit log. The parking branch commit at `d753a64` preserves raw WIP.

But none of those answer the questions a future agent will ask:

- *Why is there a Build OS layer?*
- *Why is the Read Graph split into a main file and a History Archive?*
- *Why does Schema Lock v0 have Volume passport fields?*
- *What is the "third loop" that Rule 7 closed?*
- *Why is `AWP-REV-TESTINV-001` waiting for the first implementation lane?*
- *Why did scheduling/CNS work get parked instead of finished?*

This narrative exists so future agents have one place to read the arc. It is non-binding. It cites canonical destinations. It is meant to be consulted, not obeyed.

If the next major arc — the OMNI core-thesis refinement — substantially reshapes any of these answers, that arc gets its own volume, and this volume becomes historical chronology. That is how narrative works.

---

## Pointer for next agent

Begin the next work package by loading the Tier 0 Universal Path per `.cursor/plans/doctrine/04_manifest_read_graph.md`. The Coordination Charter's `## Current Open Debt (Post-Activation Snapshot)` is the authoritative entry summary, with `08_open_review_queue.md` as source of truth if divergent. The operational handoff for this transition lives at `.cursor/plans/HANDOFF_2026-05-23_post_tier0_activation_pre_omni_thesis_refinement.md`.
