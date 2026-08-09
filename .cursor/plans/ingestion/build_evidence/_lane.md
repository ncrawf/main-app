# Lane: Build Evidence (External)

Status: **live** (first sources captured 2026-08-08; was `latent` placeholder) · Parent: `../00_evidence_router.md`

**Lane index (query this first): `00_index.md`.** Sources `EVSRC-2026-000316` (Palantir Foundry) · `EVSRC-2026-000317` (Anthropic) · `EVSRC-2026-000318` (LangGraph); run `EVRUN-2026-000124` carries the cross-source synthesis in its **concept registry**. Consumed by `D0CKPT-DEC-009` and guardrails `D0CKPT-GRD-004` / `D0CKPT-GRD-007`; provenance in `../../doctrine/07_evidence_ingestion_ledger.md` (`D0BLD-EVD-001`–`003`). **Every mechanism carries an explicit non-transfer** — that field is the point of the lane, not decoration. **Cardinality reminder:** one packet per source; cross-source convergence belongs to the run's concept registry, never to a packet.

**What belongs:** **externally-sourced** build/implementation technique evidence — e.g., "how Stripe does idempotency keys," "how X structures durable workflows," patterns observed in other systems that could inform how OMNI is built.

**What does NOT belong — IMPORTANT:** this is **NOT a shadow Build OS ledger.** Internal build findings, agent build logs, codebase discoveries, test/eval results go to their existing homes: **Build OS**, `doctrine/07_evidence_ingestion_ledger.md`, and the **Future Work Registry** — not here.

**Lane-specific extraction fields** (extend shared spine):
`technique` · `source_system` · `applicability_to_omni` · `build_os_target` · `caveat`

**Promotion bar:** normal. Routes to `Build OS` (often `REV-158` agentic revamp) / `contract`. Capture broad; promotion gated (`GRD-036`).
