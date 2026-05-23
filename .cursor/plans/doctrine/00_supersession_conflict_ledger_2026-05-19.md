# Supersession And Conflict Ledger

**Date:** 2026-05-19  
**Purpose:** Track older-vs-newer authority conflicts and stale language cleanup actions for manifest governance.
**Current status:** `v0.1` supersession pass — conflict logging is active, but corpus-wide semantic conflict extraction is incomplete.

---

## Resolution Rule

If older narrative/postmortem/rationale language conflicts with newer locked doctrine/closure artifact:
- newer locked source wins,
- conflict is logged here,
- cleanup action is assigned.

---

## Conflict Entries

| ID | Older source | Newer winning source | Conflict summary | Cleanup action | Owner | Due |
|---|---|---|---|---|---|---|
| C-001 | `docs/architecture/evolution_narrative_volume_2_2026-05-17.md` (historical chronology guidance) | `.cursor/plans/doctrine/00_doctrine_manifest.md` + current `00_index.md` gates | Narrative can be read as context-first, while current governance is guardrail->gate-first. | Keep narrative in Tier 3 rationale; add explicit note that manifest/index govern execution routing. | architecture steward | next round close |
| C-002 | `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md` anti-pattern notes | `00_index.md §2.21/§2.24` + manifest opening/closing contracts | Postmortem patterns are advisory unless connected to gates; gates now formalize them. | Keep postmortem in Tier 3; do not cite as direct authority when gate language exists. | architecture steward | next round close |
| C-003 | `.cursor/plans/doctrine/future_care_obligations_design_2026-05-17.md` (parked extensive future design) | LI doctrine + current D5 closure artifacts + manifest Tier model | Parked doc contains rich ideas that may be mistaken as current binding doctrine. | Mark as parked-only source; require explicit promotion step before routing into Tier 1/2. | doctrine steward | immediate (manifest note) |
| C-004 | Raw vendor captures (`.cursor/plans/ingestion/mindbody/*`, `.cursor/plans/ingestion/hims/*`) | Index/doctrine/ADR synthesized decisions | Raw evidence can be over-interpreted as direct OMNI authority. | Keep as evidence authority only; route through synthesis docs, not direct Tier 0/1 command authority. | architecture steward | immediate |
| C-005 | Implicit cross-chat memory of “preferences” | `.cursor/plans/doctrine/user_knox_preferences_locked_2026-05-17.md` | Preference constraints were operationally binding but not explicitly represented in manifest tiers. | Add explicit manifest representation (Tier 3 constraint-lock reference) and mention in D6 opening checks. | manifest maintainer | immediate |

---

## Open Decisions / Human Review Queue

Entries requiring human review (not auto-routed):

| ID | Source | Reason | Proposed handling |
|---|---|---|---|
| H-001 | Hims raw ingest set | `inspection_depth` mostly skimmed; lessons low confidence | keep as evidence archive until targeted synthesis pass |
| H-002 | Mindbody screenshot corpus | filename-level inventory only for most images | do not promote image-level lessons without referenced synthesis doc |
| H-003 | Transcript corpus (`agent-transcripts/*.jsonl`) | broad archive inventory only; no semantic extraction pass in this cycle | use transcript retrieval only for specific provenance checks |

---

## Ledger Verdict

- No constitutional conflict requiring doctrine rewrite was found.
- Main corrective action is representation and routing clarity, not new guardrail creation.
- This supports a minimal manifest patch and D6 dry-run recheck.

---

## Confidence + Remaining Debt

- **High confidence:** explicit conflicts across current governance docs (manifest/index/LI doctrine/closure artifacts).
- **Medium/low confidence:** historical handoff/preflight/audit conflict surface not fully synthesized yet.

Open debt carries forward:
- transcript-led conflict extraction pending,
- ingestion-evidence conflict extraction pending,
- older audit/preflight conflict extraction pending.
