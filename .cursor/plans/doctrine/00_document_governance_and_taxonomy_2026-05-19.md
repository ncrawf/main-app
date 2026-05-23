# Document Governance and Taxonomy

**Date:** 2026-05-19  
**Status:** Active governance aid (lightweight, non-overbuilt)  
**Purpose:** Keep document sprawl readable and enforce consistent document identity so future agents do not freestyle structure.

---

## 1) Why This Exists

Current failure mode:
- useful docs get created,
- but some are born without explicit identity.

Result:
- unclear authority,
- unclear supersession,
- unclear required reading scope,
- repeated rediscovery and drift.

This is a **now problem**, not a later problem.

---

## 2) Fixed Document Categories

Use this set by default. Do not invent a new category unless explicitly approved.

- `manifest_or_catalog`
- `canon_digest`
- `doctrine`
- `adr`
- `domain_rule_slice`
- `audit_or_pressure_test`
- `evidence_or_ingestion`
- `narrative_or_postmortem`
- `handoff_or_readiness_gate`
- `future_or_parked_watch`

If a file does not fit cleanly, mark it `needs_classification` until resolved.

`canon_digest` authority rule (binding):
- A `canon_digest` is derived compression of accepted doctrine/ADR/closure artifacts.
- A `canon_digest` must cite its accepted source authority for each binding-context lesson.
- A `canon_digest` cannot originate new binding doctrine by itself.
- If a new binding rule is discovered, it must be promoted into a proper authority document (`doctrine`, `adr`, or `domain_rule_slice`) with normal review/approval.

---

## 3) Required Document Passport

All new architecture/process markdown docs should start with:

- `Document type:`
- `Authority:`
- `Status:`
- `Domain(s):`
- `Lifecycle role:`
- `Source-of-truth relationship:`
- `Supersedes:`
- `Superseded by:`
- `Manifest action:`
- `Review gate:`

### Passport template

```markdown
Document type:
Authority:
Status:
Domain(s):
Lifecycle role:
Source-of-truth relationship:
Supersedes:
Superseded by:
Manifest action:
Review gate:
```

---

## 4) Placement Conventions (Simple)

- `.cursor/plans/doctrine/`
  - doctrine, manifest/catalog, canon, memory extraction, guardrail docs, preference locks.
- `.cursor/plans/designs/day_0_scheduling_rule_matrix/`
  - domain rounds, rule slices, opening/closure/readiness artifacts.
- `docs/architecture/`
  - ADRs, topology docs, long-lived architecture narratives.
- `.cursor/plans/ingestion/`
  - evidence ingestion and source synthesis.
- `.cursor/plans/audits/`
  - pressure tests, audits, validation passes.
- `.cursor/plans/`
  - handoffs, phase plans, operational checkpoints, future arcs.

---

## 4.1) Artifact Routing Pointer (Non-Schema)

For artifact classification, intake, routing decision rules, narrative arc/addendum behavior, ADR/handoff minimums, and template/schema source map, see:
- `.cursor/plans/doctrine/agent_work_protocol.md` §3, §5, §8, §9.

Schemas remain canonical in their existing homes:
- decisions, evidence, guardrails, supersession/conflict, open review, catalog, read-graph.

Coordination of layers is defined in `.cursor/plans/doctrine/00_omni_coordination_charter.md`.

---

## 5) Round-Close Hygiene (Minimal)

At each round close, include:
- new/updated files list,
- document type per file,
- authority/status per file,
- supersession note (`none` if no change),
- manifest-impact note (`none` if no routing change proposed).

This is classification-first, not mandatory file moving.

---

## 6) Past-Doc Cleanup Strategy (Do Not Over-Refactor)

1. Classify existing docs in catalog first.
2. Mark authority/status/supersession.
3. Extract lessons and routing implications.
4. Identify duplicates/stale docs.
5. Only then move/rename if value is clear.

Map first, move later.

