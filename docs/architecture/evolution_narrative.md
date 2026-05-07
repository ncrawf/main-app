# Evolution narrative — Volume 1: Phase 1 through Phase 4H-pre

> **Snapshot version**: written 2026-05-07. Covers project inception through Phase 4H-pre commit 1.
>
> **What this document is**: a high-altitude historical orientation. A narrative play-by-play of how the architecture got here, intended for someone who wants to understand the project's intellectual arc without reading the binding documents.
>
> **What this document is not**:
> - It is not the system map. The system map at [`.cursor/plans/system_map_three_layers_60706286.plan.md`](../../.cursor/plans/system_map_three_layers_60706286.plan.md) is the binding source of truth.
> - It is not an Architecture Decision Record. ADRs preserve a single decision moment; the first ADR lives at [`docs/architecture/phase_4h_target_first_decision_record.md`](phase_4h_target_first_decision_record.md).
> - It is not a session handoff. HANDOFFs (e.g. [`HANDOFF_2026-05-06.md`](../../.cursor/plans/HANDOFF_2026-05-06.md)) capture mid-flight state for the next agent.
> - It is not a phase plan. Plans live at `.cursor/plans/`.
> - It does not introduce new architectural commitments. It only describes what already happened.
>
> **Convention**: this is a snapshot, not a living document. If a future inflection point demands a new narrative (Phase 5 onward, say), write a Volume 2. Do not edit this one.

---

## How to use this document

Read this when you want to understand the *why-this-codebase-looks-like-it-does* across time. Use it as a map of the rest of the documentation, not a substitute for it. Where this narrative names a section, an audit, or a phase, you can find the binding artifact under `.cursor/plans/` or `docs/architecture/`.

A reader who needs to reopen a single decision should read the relevant ADR. A reader who needs to know what's currently true should read the system map. A reader who needs to know what's settled and what's not should read the most recent HANDOFF. A reader who wants to understand the journey reads this.

---

## The arc in one paragraph

The project began as a healthcare DTC web app — homepage, intake page, intake capture, basic care/treatment/refill flows, an outbound jobs queue, a workflow event bus, a notifications module. It became a system around April 24, 2026, when the first three-layer system map was checkpointed. From there the project did not build features for almost three weeks. It pressure-tested. Each pressure test surfaced a foundational gap that became a binding architectural section: clinical assertion versus reconciled clinical state (1K.5.A); structured retrievability over free-text storage; narrative atomization across channels (Section 1P); the rules + templates engine (Section 1Q); privacy + communication governance (Section 1Q.17); marketing lifecycle as a hard carve-out from clinical (Section 1Q.21); hybrid in-person + remote care (Section 1Q.23). When the architecture finally felt structurally honest, the project shipped its first working code: the GLP-1 intake spec (Stage 2 Phases 1–2.3), then Phase 3's database foundation (19 canonical tables), then the Phase 4 hardening sequence — orchestrator, primitives, runtime resolver, artifact pipeline, outbound jobs reconciliation, typed event catalog, search adapter — landing on Phase 4H-pre, where a final pressure test discovered that the original feature-era code (`lib/workflows/`, `lib/notifications/patientMessages.ts`) was an undisciplined "implicit rules engine v0" that had to be classified DELETE-AFTER-PARITY rather than carried forward into the new governed architecture.

---

## Act I: First strokes (April 18 – April 22)

The earliest commits are the artifacts of "we're shipping a thing": initial commit, homepage v1, intake page, intake capture. Then the operational scaffolding came in fast — care programs and treatment items, refill requests, status transition triggers, ops support checkins, an outbound jobs queue, a cron route, a workflow enqueue mechanism. A continuation flow, a provider loop, a dashboard. The notification side was procedural: on every workflow status change, a hook fires, a static lookup picks a template key, a prose template renders, a send happens.

This code worked. It also baked in assumptions that would later require careful unwinding: a single-tenant brand prefix on SMS (`MAIN:`), an in-process post-mutation hook that coupled mutation to notification, a `status → template_key` lookup carrying no rule lineage, no privacy tier, no message intent. It is the code that became the implicit rules engine v0 in Section 1Q.12 of the system map. At the time, no one was trying to build a rules engine. The code was simply doing what its problem demanded.

## Act II: From features to a system (April 24 – April 25)

On April 24, 2026, the commit [`af2c5d4`](https://github.com/) lands: *"checkpoint: system map three layers (snapshot 2026-04-24)"*. This is the moment the project changes character. Before this, it was a codebase. After this, it was a system being modeled.

The next day's checkpoint adds [`6cc1bcd`](https://github.com/) — *"1M patient state observations + 1K longitudinal-state refactor"*. The project is now distinguishing between things that happen to a patient (timeline events) and the patient's longitudinal state (observations). Two days later, another checkpoint: *"1K.0–1K.18 intake engine hardening + out-of-scope guardrails"* — eighteen sub-sections of intake architecture, on a system that did not yet have a working intake. The Hims/Hers pressure-test follows immediately: a deliberate study of the gold-standard competitor's funnel, performed before writing the corresponding intake.

The order of these events is the lesson. The code came first. The model came second. Then the model started running ahead of the code, because the project realized it was not building a feature but a platform.

## Act III: The pressure-test era (April 27 – April 30)

The audits in [`.cursor/plans/audits/`](../../.cursor/plans/audits/) tell the story by their filenames and dates. In nine days, the project ran twenty-plus pressure tests: intake coherence, mode J spot audit, static clinical fact source-of-truth, intake construction, the clinical assertion layer (twice), clinical assertion analytics, the GLP-1 starter concept registry, concept naming, acute states promotion thresholds, authority versus longitudinal confidence, lab-derived emitter authoring, retrievability discipline, free-text intake, narrative atomization, and finally the system pressure test that named four foundational gaps and closed them before the v1 freeze.

Each audit produced an artifact. Each artifact named what was missing. Each missing thing became a binding section. The most consequential discovery in this period was the clinical assertion layer (1K.5.A): the recognition that *clinical claims a patient makes during intake* and *the reconciled clinical state on the patient chart* are two different things — one is a ledger entry, the other is the running balance — and that the architecture must keep them separate or the entire safety story breaks. This single distinction restructured how every other clinical concept gets stored: medication assertions, allergy assertions, condition assertions, observation assertions all flow through the claim ledger; the reconciled chart fields read through it.

A close second is retrievability discipline. Free-text intake fields are easy to store and impossible to query at scale. Once a clinical safety rule needs to know "has this patient ever taken a GLP-1," a free-text intake field is structurally unable to answer the question. The audit demanded that every clinical fact emit a structured atom *as well as* its narrative form, and that downstream rules read from the atom, not from the prose. This is the foundation that Phase 4A's `record_intake_emissions_batch` orchestrator implements.

## Act IV: The governance discovery (April 30)

By April 30, the architecture had a model for clinical state, for intake construction, for narrative atomization, for retrievability, for module taxonomy. What it did not have was a model for *how decisions get made and how communication happens*. Notifications were going out via the implicit engine v0; clinical decisions were going through `clinical_visits` rows; eligibility blockers were going through ad-hoc fields. None of it was governed.

The system pressure test on April 30 — *"4 foundational patches close moat-thesis gaps before v1 freeze"* ([`35e11aa`](https://github.com/)) — is the bridge. It surfaced that the project's competitive moat depended on *consistent, governed decision-making* across rules and templates. The next commit ([`a395aa8`](https://github.com/)) lands the rules + templates engine in Section 1Q: a foundational framework for deterministic decisions and constrained communications.

This is the architectural checkpoint that the rest of the project orbits around. Section 1Q is what makes "automated send to a patient" a governed action with a typed Rule, a typed Template, a privacy exposure level, a message intent, an evidence reference, a decision outcome reason, an audit trail, and a recall pathway. Everything that comes after — the privacy governance gate (1Q.17), the marketing carve-out (1Q.21), the cadence rules, the action-template alignment check — is an extension of the discipline 1Q named.

The reason rules and notifications became *the* major architectural checkpoint, rather than just one of many, is that in healthcare DTC the rules and notifications surface is where HIPAA risk lives, where competitive edge lives, and where the platform's voice is defined. A wrong notification is a HIPAA incident. A right one at the wrong time is a churn event. A consistent one across channels is a brand. There is no level of investment in rules + templates that is over-investment.

## Act V: Stress-testing the engine (April 30 – May 2)

With Section 1Q in place, the project stress-tested it against high-sensitivity pathways before writing a single line of intake code. The TRT first slice exercised 28 rules and 28 templates against the controlled-substance edge cases. The Female HRT first slice surfaced the pattern where adverse events during treatment trigger downstream screening workflows rather than immediate Rx blocks (Section 1Q.18). The hybrid care delivery stress test added Section 1Q.23, ensuring in-person care is a first-class citizen alongside remote. The marketing lifecycle suite (Section 1Q.21) added thirteen marketing primitives, twenty-five invariants, twenty audit event types, and a state-machine campaign engine — and then a marketing system pressure test surfaced three more gaps that were closed in-place. The dynamic behavior verification on May 1 declared a runtime green-light for Section 1Q.20.

The pattern in this Act: the engine ships before the features. The features then test the engine. Failures reveal architectural gaps. The gaps get patched in the architecture, not in the features.

## Act VI: From design to code (May 4 – May 5)

Only after the rules engine had been stress-tested against four pathways did the project write the actual GLP-1 intake spec — Stage 2 Phases 1, 2.1, 2.2.1, 2.2.2, 2.3 — twenty-six modules and several dozen questions. A demographic over-collection fix and a pathway-override architectural rule landed mid-stream. Section 1K.0.5 introduced the data routing + claim-ledger-vs-reconciled-entity discipline.

Then, on May 5, eight Phase 3 commits in a row built the database foundation: types and Zod schemas, the clinical-concepts registry (claim ledger scope), reconciled clinical entities, administrative entities, consents and commerce registries, the question bank and module catalog, the GLP-1 pathway composition with pricing profile, derived views, and the migration that established roughly nineteen canonical tables. The architecture ran ahead of the code for two weeks; the code now caught up to the architecture in a single day.

## Act VII: Phase 4 hardening (May 5 – May 7)

Phase 4 is the "actually build the platform" sequence. Each sub-phase has a single binding job:

- **4A** — the `record_intake_emissions_batch` SECURITY DEFINER orchestrator: every intake response now writes through one transactional fan-out covering twenty-one target branches. Eight commits, ending at `5423f56`.
- **4B-arch** — five new system map sections (1R search, 1S streaming, 1T embeddings, 1U tenancy, 1V governance) plus the system primitives addendum.
- **4C-pre** — `orgs` + `brands` tables, primitives + tenancy columns on nineteen canonical tables, cross-org rejection enforced at the orchestrator boundary.
- **4C-runtime** — `resolveEmissions()`, the pure-function write-path resolver. 21/21 tests green.
- **4D** — the Section 1O artifact pipeline: canonical document routing, the `route_patient_document` RPC, the canonical `patient_documents` storage bucket. 91/91 tests green.
- **4E** — `outbound_jobs` reconciliation: `kind` rename, expanded status enum, twenty-five new columns, the `outbound_job_dispatches` sub-table, the SECURITY DEFINER `enqueue_outbound_job` orchestrator. 78/78 tests green.
- **4F** — typed event catalog (sixty-two audit actions, forty timeline event types) plus a CI lint that bans inline string literals at write sites. The follow-up commit deleted [`lib/audit/logAuditEvent.ts`](../../lib/audit/) and migrated all ~58 audit/timeline write sites to typed helpers.
- **4G-pre** — wiring the 4C-runtime resolver into a real intake API route.
- **4G** — the Section 1R search adapter (`searchEntities`, `pg_trgm` + GIN indexes; v1 covers patients only).

Each sub-phase shipped its own smoke tests, its own commit message documenting decisions, its own gating against architectural drift. By Phase 4G, the platform foundation was structurally complete from the data layer through the search layer. What remained was the rules engine itself.

## Act VIII: The 4H pressure-test (May 6 – May 7)

Phase 4H was originally framed as a single phase: the rules + templates engine runtime plus governance/RTBF runtime. The pressure test before commit 1 surfaced two things at once:

The phase was too big as one unit. Section 1Q has twenty-four sub-sections; Section 1V adds retention and right-to-be-forgotten runtime; combining them into one phase produced a multi-week change with no natural commit boundaries.

The implicit rules engine v0 was real and dangerous to extend. The Act I notification scaffolding — `lib/workflows/onPatientWorkflowEvent.ts`, `lib/workflows/notificationRules.ts`, `lib/workflows/types.ts`, `lib/notifications/patientMessages.ts` — was firing patient-facing communications today, on every workflow status change, with no rule lineage, no privacy tier, no template discipline, and a hardcoded `MAIN:` SMS prefix that re-introduced the multi-tenant assumption Phase 4C-pre had already broken.

The decision was target-first: the new architecture comes from Section 1Q, not from `lib/workflows/`. The legacy code is parity test data, not a migration target. Each of the eleven `NotificationTemplateKey` cases migrates one-per-PR to a typed Rule plus typed Template; the legacy case deletes in the same PR. Phase 4H was decomposed into 4H-pre (foundation), 4H-rules-runtime (the engine), 4H-templates-discipline (the bulk migration), and 4H-send-policy (the privacy + cadence gate). Phase 4H-pre's first commit landed the schema columns the rest of the sequence needs: `intended_privacy_exposure_level`, `decision_outcome_reason`, and the `suppressed_data_environment` terminal status.

The full reasoning lives in [`phase_4h_target_first_decision_record.md`](phase_4h_target_first_decision_record.md), which is the project's first ADR.

---

## Turning-point realizations (the seven that mattered)

1. **The system map is real.** April 24's checkpoint was the moment the project became a system being modeled, not just a codebase being shipped.
2. **Claims and reconciled state are not the same thing** (1K.5.A). The clinical assertion layer is the foundation that the entire safety story rests on.
3. **Free text is not retrievable.** Every clinical fact must emit a structured atom; rules read from atoms, not prose. This is what makes Phase 4A's orchestrator necessary.
4. **Notifications are governance, not a feature** (Section 1Q). A wrong notification is a HIPAA incident. The rules + templates engine had to be built as foundational infrastructure.
5. **Privacy tiers belong in the template object, not in the channel logic** (Section 1Q.17). Outside-secure channels carry existence, full detail lives behind authenticated view. "High-signal outside, full detail inside."
6. **Marketing must be a hard carve-out from clinical** (Section 1Q.21). Same engine; separate domain; separate prohibited-claims floor; opt-in required; clinical chart references gated by explicit HIPAA marketing authorization.
7. **The implicit engine v0 is parity data, not a migration target.** This is what made Phase 4H-pre target-first instead of bottom-up.

---

## What we almost did wrong (and caught)

- Almost let the implicit rules engine v0 become the v1 architecture by extending it case-by-case. Caught at the 4H pressure test; classified DELETE-AFTER-PARITY in Section 1Q.12.
- Almost defined "parity proof" as byte-for-byte template wording match, which would have imported PHI leakage and the hardcoded `MAIN:` brand string into the new system. Caught when the parity rule was strengthened in the ADR's Section 7.5 (parity = behavioral equivalence; governed behavior wins).
- Almost shipped Phase 4H as one giant phase. Decomposed into 4H-pre / 4H-rules-runtime / 4H-templates-discipline / 4H-send-policy.
- Almost promoted the entire pressure-test brief to the binding system map. Caught — only three minimal amendments landed (~40 lines).
- Almost stored intake clinical content in DB config tables (`intake_questions`, `intake_branches`, etc.). Caught early; the architecture is now strict that clinical content lives in the repo as code-as-config, governed by PR review, never in DB tables.
- Almost let the chart timeline become the source of truth for billing/orders/notifications/clinical decisions. Caught at the data architecture discipline section: `patient_timeline_events` is a narrative pointer layer ONLY; domain truth lives in domain tables.

---

## Boundaries that became sacred

These are the invariants that subsequent architecture choices must not violate. They are not aspirations; they are gates.

- **Tenancy** — `org_id` never crosses; cross-org writes are rejected at the orchestrator boundary; multi-tenant strings source from the `brands` table.
- **`data_environment`** — synthetic / staging / internal_qa rows never reach external rails; the dispatch gate makes the structural lock explicit.
- **Audit shape** — every meaningful mutation produces one `audit_events` row plus, where applicable, one `patient_timeline_events` row, both via typed helpers. Inline string literals at write sites are CI-banned.
- **Privacy tier** — the 6-tier `privacy_exposure_level` taxonomy is enforced before every external send; templates declare it, actions cap it, the gate verifies.
- **Consolidation discipline** — one orchestrator per domain; no fragmented write paths; no two engines doing the same job. The implicit rules engine v0 stays classified DELETE-AFTER-PARITY and never extends.
- **Template registry** — no automated patient-facing send bypasses an approved template per Section 1Q.0 invariant 9. AI may draft within a template's `ai_refinement_constraints` but never replaces a human-approved template structure.
- **AI authority** — AI never has clinical authority. Auto-send under any human's capability is forbidden. AI is recommendation/draft only; human review + audited mutation are non-negotiable for clinical action.

---

## How this differs from the other docs

| Document | Question it answers | When you read it |
|---|---|---|
| System map | What is currently true? | When you need to know whether a thing is allowed. |
| ADRs (this folder) | Why was decision X made? | When you're tempted to reopen a settled decision. |
| HANDOFF docs | What's in flight right now? | When picking up mid-session. |
| Plan files (`.cursor/plans/`) | What's the next plan? | When executing a phase. |
| Audits | What gaps did pressure-testing find? | When investigating why a section exists. |
| Spec files | How does pathway X compose? | When implementing a pathway. |
| **This narrative** | **How did the project get here?** | **When you want to understand the journey.** |

---

## For future contributors

If you are joining this project, you do not need to read 9657 lines of system map cold. Read this narrative first. It will tell you which sections of the system map matter for what you're doing and which ADRs you need to internalize. Then read the ADR for the area you're touching. Then drop into the system map for the binding details.

If you are an AI agent picking up work mid-stream: read [`AGENTS.md`](../../AGENTS.md), the latest HANDOFF, and the ADRs in this folder. This narrative is optional context. The system map is binding.

If you are the project owner returning to this in three months: this is for you. The architecture you're paying for has a story. Here it is, written down before any of us forgot.

---

## A closing note

This project has been built mostly through dialogue: a non-coder articulating intent, two AI collaborators (Cursor + ChatGPT) cross-checking each other's work, and a series of pressure tests that surfaced gaps the architecture would otherwise have missed. The discipline that produced the binding documents was not magic; it was a willingness to keep pressure-testing rather than shipping, and a willingness to say "we almost did this wrong" out loud and write it down.

The project is not done. Phase 4H-pre commit 1 is one step in a sequence that runs through the rules + templates engine, the privacy + send-policy gate, the governance + retention runtime, the multi-tenant readiness work, the observability foundation, and onward. By the time anyone reads this, the architecture will have moved past it. That is the point of dating the snapshot: it is not where the project ends. It is where this volume ends.

If you are reading this and wondering whether the patterns held — whether the sacred boundaries stayed sacred, whether the implicit engine v0 actually deleted, whether the parity proof shipped honest — the answer is in the git log and the system map at the time you're reading. This document only tells you what we promised on May 7, 2026. The work tells you whether we kept the promise.

— *End of Volume 1*
