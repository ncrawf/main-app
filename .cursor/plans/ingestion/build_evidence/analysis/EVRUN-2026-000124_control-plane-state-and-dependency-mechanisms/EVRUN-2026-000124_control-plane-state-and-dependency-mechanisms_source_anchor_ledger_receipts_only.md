# EVRUN-2026-000124 — Source anchor ledger (RECEIPTS ONLY)

Document type: `evidence_anchor_ledger` (Evidence Plane · lane `build_evidence`)
Authority: `evidence_nonbinding`. **RECEIPTS ONLY — NEVER an authoring source** (`D0THES-GRD-042`; router: *"NOT the concept ledger, never an authoring source"*).
Status: `active · coverage proof for 3 sources`
Lifecycle role: coverage proof + anchors back to source. To author anything, use the **concept registry**, then reopen the **source packet**.
Manifest action: `add_tier2` · Review gate: `user_knox_required`

| Anchor | Source | Exact locator | Verbatim anchor (short) | Concept |
|---|---|---|---|---|
| `A1` | `EVSRC-2026-000316` | Foundry *Ontology → Core concepts*, "Link type" | "A link type is the schema definition of a relationship between two object types." | C1 |
| `A2` | `EVSRC-2026-000316` | same page, "Action type" | "the schema definition of a set of changes or edits to objects, property values, and links that a user can take at once… includes the side effect behaviors" | C1 |
| `A3` | `EVSRC-2026-000316` | same page, "Roles" | "Roles are the central permissioning model in the Ontology." | C1 |
| `A4` | `EVSRC-2026-000316` | *Link types → Overview*, "Directionality" | "A link type is bidirectional: it always has two sides… Each side of a link type can be traversed independently and has its own display name and API name." | C1 non-transfer |
| `A5` | `EVSRC-2026-000316` | same section, note | "Creating a single link type between two object types does not implicitly create a second, reverse link type." | C2 |
| `A6` | `EVSRC-2026-000316` | same section | "each one represents a separate real-world relationship rather than a reverse direction of an existing one" | C2 |
| `A7` | `EVSRC-2026-000317` | *Define success criteria and build evaluations*, intro | "starts with clearly defining your success criteria and then designing evaluations to measure performance against them" | C3 |
| `A8` | `EVSRC-2026-000317` | same page, criteria list | "**Specific:** … Instead of 'good performance,' specify 'accurate sentiment classification'" | C3 |
| `A9` | `EVSRC-2026-000317` | same page, eval design principles | "Be task-specific: Design evals that mirror your real-world task distribution. Don't forget to factor in edge cases!" | C3 |
| `A10` | `EVSRC-2026-000317` | same page, principle 3 | "Prioritize volume over quality" | C3 non-transfer |
| `A11` | `EVSRC-2026-000318` | *Persistence*, intro | "resume after an interruption, recover from a failure" | C4 |
| `A12` | `EVSRC-2026-000318` | same page, checkpointer/store table | checkpointers "persist a thread's graph state as checkpoints"; access pattern "Pass a `thread_id` in graph config" | C4 |
| `A13` | `EVSRC-2026-000318` | same page, troubleshooting | "`MemorySaver` and `InMemorySaver` store checkpoints in RAM. When the process restarts, all checkpoints are lost." | C5 |
| `A14` | `EVSRC-2026-000318` | same page, troubleshooting | "Over long conversations, checkpoints accumulate… Prune old checkpoints periodically or set a retention policy" | C5 |
| `A15` | `EVSRC-2026-000318` | same page, troubleshooting | "each subgraph manages its own checkpoint namespace" | C6 |

**Coverage:** 15 anchors across 3 sources; every concept `C1`–`C6` in the registry traces to at least one anchor, and no registry concept is anchor-free.
