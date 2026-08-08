# Lane: Build Evidence (External)

Status: **active** (first packet captured 2026-08-08) · Parent: `../00_evidence_router.md`

**Captured sources:** `sources/EVSRC-2026-000316_typed-dependency-edges-evals-and-durable-checkpoints.md` — Palantir Foundry typed link/action types · Anthropic predeclared task-specific evals · LangGraph durable checkpoints and the `thread_id` pointer. Consumed by `D0CKPT-DEC-009` and guardrails `D0CKPT-GRD-004` / `D0CKPT-GRD-007`. **Each mechanism carries an explicit non-transfer** — that field is the point of the lane, not decoration.

**What belongs:** **externally-sourced** build/implementation technique evidence — e.g., "how Stripe does idempotency keys," "how X structures durable workflows," patterns observed in other systems that could inform how OMNI is built.

**What does NOT belong — IMPORTANT:** this is **NOT a shadow Build OS ledger.** Internal build findings, agent build logs, codebase discoveries, test/eval results go to their existing homes: **Build OS**, `doctrine/07_evidence_ingestion_ledger.md`, and the **Future Work Registry** — not here.

**Lane-specific extraction fields** (extend shared spine):
`technique` · `source_system` · `applicability_to_omni` · `build_os_target` · `caveat`

**Promotion bar:** normal. Routes to `Build OS` (often `REV-158` agentic revamp) / `contract`. Capture broad; promotion gated (`GRD-036`).
