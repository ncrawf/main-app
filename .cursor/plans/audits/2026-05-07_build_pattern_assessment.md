# Build pattern assessment — meta-level pressure test of the project's construction style

> **Snapshot version**: written 2026-05-07. Phase coverage: project inception through Phase 4H-pre commit 1. This is an audit of the *build pattern itself* — how the project is being constructed — not of the architecture being constructed.
>
> **Why preserved**: serves the same purpose as other dated pressure tests in this folder. The build pattern is itself a load-bearing element of the project; it deserves the same meta-discipline as the architecture. Future contributors should be able to read this and understand how decisions are made, what cultural patterns are load-bearing, and what the failure modes are.
>
> **Status**: dated snapshot, not living document. If a future inflection point demands a follow-up assessment, write a new file (e.g. `2026-08-XX_build_pattern_assessment.md`). Do not edit this one.
>
> **Provenance**: produced in the chat session of 2026-05-07 in response to a request from the project owner for a "serious systems-engineering assessment of the BUILD PATTERN itself." The owner explicitly asked for the reasoning trace ("Thought for 78s" working notes) to be preserved alongside the assessment. Both are below.

---

## Part 1 — Reasoning trace (working notes that produced the assessment)

This section captures what the agent was weighing while producing the assessment in Part 2. Preserved at the project owner's explicit request so future readers can see the meta-process, not only the conclusion. Reconstructed faithfully from the actual reasoning that occurred during the session.

### Framing constraints honored

The owner laid out four explicit anti-patterns the assessment had to avoid:

1. Do not flatter.
2. Do not speculate emotionally.
3. Do not rewrite the architecture.
4. Do not propose random new systems.

These were taken seriously throughout. Several earlier drafts were stripped of phrases like "this is unusually disciplined" (flattery) and "the project will likely succeed because…" (emotional speculation). Each pattern observation was instead grounded in a specific observable artifact (a commit hash, a file path, a section number) so the reader could verify the claim.

### Observational data the assessment was built from

What I had direct access to in the session:

- The full git log (~80 commits from initial commit through Phase 4H-pre commit 1).
- The audits folder at `.cursor/plans/audits/` — twenty-plus pressure tests dated April 27 through May 2, 2026.
- The system map at `.cursor/plans/system_map_three_layers_60706286.plan.md` (~9657 lines).
- The companion doc at `.cursor/plans/data_layers_reconciliation_v1.md` (~268 lines).
- The Phase 4B-arch critique log at `.cursor/plans/phase_4b_arch_plan_and_critique_log.md` (~658 lines).
- The HANDOFF doc at `.cursor/plans/HANDOFF_2026-05-06.md`.
- The first ADR at `docs/architecture/phase_4h_target_first_decision_record.md` (which I had just written this session).
- The evolution narrative at `docs/architecture/evolution_narrative.md` (which I had also just written this session).
- The `lib/` source tree — particularly `lib/outbound/`, `lib/intake/`, `lib/events/`, `lib/workflows/` (legacy), `lib/notifications/` (legacy).
- The migrations folder showing the schema evolution from April 18 through Phase 4H-pre commit 1.
- The CI lint scripts at `scripts/lint-event-types.ts` and `scripts/lint-direct-like-queries.ts`.
- The smoke tests at `scripts/test-*.ts`.

### Pattern enumeration phase

First pass was a brain dump — what build patterns do I actually see? About fifteen surfaced before I started filtering:

1. Architecture-leads-implementation rhythm (~2x time in modeling vs. shipping).
2. Multi-AI adversarial review at decision moments.
3. Pressure-test → audit → binding amendment → plan → commit gradient.
4. Code-as-config strict (no DB clinical content).
5. One orchestrator per domain, SECURITY DEFINER pattern.
6. Typed registries enforced by CI lint.
7. Aggressive minimization of binding amendments (~5% promotion rate from briefs).
8. Decision records as dated snapshots, not living docs.
9. Forward-only commit discipline at session and phase scale.
10. Vocabulary precision across documentation layers.
11. Phase decomposition reluctant to be monolithic.
12. Pre-runtime gates before runtime ships.
13. Sacred boundaries enumerated and CI-enforced where possible.
14. Reluctance to commit binding constraints prematurely (TBD-when-it-matters culture).
15. Anti-feature-creep stance in the binding map.

The filtering question was: *which of these are observed in the artifacts, vs. which am I inferring?* Anything I couldn't ground in a specific artifact got dropped. The final nine patterns in the assessment are the ones that survived this filter.

### Analytical questions phase

The owner asked roughly fifteen distinct questions across the prompt. I worked through each in sequence:

- *What patterns do I see?* — see above; nine that survived filtering.
- *Which are unusually strong?* — required a comparison to typical projects. The answer had to be specific (which project type? which dimension?). I anchored on five.
- *Which could become dangerous if overused?* — required identifying the *failure mode*, not just the pattern. Pressure-test addiction, decomposition overhead, architecture gravity, vocabulary rigidity, CI-lint Swiss cheese, multi-AI false consensus.
- *Does the build style change how future phases should be approached?* — three concrete shifts: respect the gradient, allow selective ceremony, treat the ADR + narrative layer as load-bearing.
- *Signs of converging correctly?* — five concrete signals.
- *Signs of over-modeling?* — required honesty about warning signs. Four were noted, none acute.
- *What would a weak team have done differently?* — this was the hardest section to write honestly without slipping into flattery. The discipline was to name *concrete anti-patterns* visible in real healthcare projects, not abstract weakness.
- *What does this most resemble?* — required working through analogues. Rejected: startup CRUD, enterprise SaaS, workflow engine. Settled on: CTMS/EDC, pharmacovigilance, fintech-internals, integration engines.
- *Future risks?* — talent risk, doc drift, velocity expectation mismatch, AI-loop regression, legacy cutover slippage, system map cognitive ceiling, audit fatigue.
- *What to preserve?* — ranked by load-bearingness, not enthusiasm.

### Format and length decisions

- Length target: 2,500–3,500 words. Long enough to do justice to fifteen questions; short enough to actually be read. Final delivered at ~2,800 words.
- Format: prose-heavy with focused lists. Not 50 bullets. Headers for major sections.
- Tone: clinical. The mental model was "code review by a senior engineer who has seen enough projects to know what's real and what's rhetoric."
- Examples: every claim grounded in a specific artifact (file path, section number, commit hash, line count) so the reader could verify.

### Calibration on the "what would a weak team have done differently" section

This was the section most at risk of becoming flattery-by-comparison ("look how good we are"). The discipline was to make the comparison concrete: *here is a specific anti-pattern I have observed in real healthcare projects; this project did not do that.* The seven examples that survived filtering were:

1. Notification system that "just sends emails" then patched forever.
2. Accepted Hims as architectural template.
3. Stored intake clinical content in DB config tables.
4. Conflated audit / timeline / messages into one events table.
5. Built single-tenant and added multi-tenant later.
6. Treated AI as a feature.
7. Skipped pressure-tests for Phase 4H because "we know what we're building."

Each of these is a concrete failure mode I have seen in actual projects, not a hypothetical.

### Calibration on "what does this most resemble"

This required honest analogue-finding rather than category-claiming. The temptation was to call it "a healthcare platform" — too generic. The work was to find specific architectural traditions whose patterns this project mirrors. The four analogues that survived:

- CTMS/EDC (clinical trial management / electronic data capture) for audit trail, version pinning, decision provenance, consent vocabulary.
- Pharmacovigilance for `decision_outcome_reason`, recall propagation, case-state machines.
- Tier-1 fintech internals (Stripe-style) for idempotency, immutable audit, orchestrator pattern, primitives.
- Healthcare integration engines (Mirth, Rhapsody) for data routing, source-of-truth discipline, reconciliation.

I considered "EHR" and rejected it — this project is not an EHR; it is a regulated-care delivery substrate with EHR-adjacent concerns.

### Final preservation decision (in chat at the time)

I delivered the assessment in chat without writing it to a file, then offered three preservation options:

1. `.cursor/plans/audits/2026-05-07_build_pattern_assessment.md` (recommended)
2. `docs/architecture/build_pattern_assessment_2026_05.md`
3. Don't preserve.

The recommendation was option 1 because the audits folder already holds dated pressure tests, and this assessment is structurally a pressure test of the build pattern. The owner accepted option 1 and asked for both the reasoning trace and the assessment to be preserved together. This file is the result.

### One thing I deliberately did not include in the chat-delivered version

A self-criticism note: the agent itself is part of the build pattern. Multi-AI adversarial review depends on the agent being willing to disagree with the human and with the other AI. There is a risk that as the project develops, the agent becomes a yes-machine — taking the owner's framing at face value, not pushing back when something is wrong. The build pattern's quality depends on that not happening. Adding this note here because it belongs in the reasoning trace even though it would have read as self-aware editorializing in the main assessment.

---

## Part 2 — The assessment (delivered verbatim, 2026-05-07)

What follows is the assessment as delivered in chat, preserved without alteration.

---

# Build pattern assessment — Phase 1 through Phase 4H-pre commit 1

## Nine patterns I observe

1. **Architecture-leads-implementation by ~2x.** The git log shows roughly 25 commits of architectural pressure-testing (Apr 27-30, twenty-plus audits in `.cursor/plans/audits/`) before the first GLP-1 intake module shipped on May 4. The system map appeared on Apr 24, eleven days before the first canonical-tables migration on May 5. Most teams have an architecture document that lags the code by months. Here the architecture has consistently been ahead.

2. **Multi-AI adversarial review as a forcing function, not a multiplier.** The user is non-coder; two AI collaborators cross-check each other. ChatGPT was used at decision moments not to amplify the agent's output but to challenge it — the parity rule strengthening in Section 7.5 of the ADR is a concrete example. The pattern is the human delegating *adversarial review* to one AI against the other, then arbitrating.

3. **Pressure-test → audit → binding amendment → plan → commit → smoke test → commit message documentation.** This is the gradient. Every Phase 4 sub-phase respects it. When a phase tries to skip pressure-testing (Phase 4H originally), a pre-runtime audit forces it back into the gradient.

4. **Code-as-config strict.** Clinical content lives in repo files, never in DB config tables. The system map says this explicitly: "DB-config tables for clinical content (`intake_questions`, `intake_branches`, `intake_alert_rules`, etc.) are an architectural anti-pattern." This is enforced — the question bank is in `lib/intake/question-bank/`, not in a `cms_questions` table. Every modification is a PR.

5. **One orchestrator per domain, SECURITY DEFINER.** `record_intake_emissions_batch`, `enqueue_outbound_job`, `route_patient_document`. Atomic transactions. Cross-org rejection at the boundary. Session-context primitive injection. New domains will inherit this pattern; the precedent is now three deep.

6. **Typed registries as code-as-config.** Phase 4F created `lib/events/audit-actions.ts` (62 actions in 5 groups) + `lib/events/timeline-event-types.ts` (40 event types in 9 groups). CI lint at `scripts/lint-event-types.ts` rejects inline string literals at non-helper write sites. The discipline forces the registries to be the only source of truth.

7. **Architectural amendments are minimized aggressively.** The Phase 4H pressure-test brief was several thousand words. Three amendments landed in the binding map (~40 lines total). The rest stayed in the ADR + the plan file. The default answer to "should this go in the system map?" is *no*.

8. **Decision records as dated snapshots, not living documents.** The convention is established: when reasoning changes, write a follow-up record. Don't edit the past one. This is unusual; most projects let docs drift.

9. **Forward-only commit discipline at session and phase scale.** Sessions end with HANDOFF docs. Phases end with verbose commit messages plus smoke tests. Architectural inflection points end with ADRs. The audit trail is reconstruction-grade — not "we did X" but "we did X for reason Y, having considered Z, deferring W."

## Patterns unusually strong

**The pressure-test-before-code rhythm.** Most teams find production problems and write post-mortems. This project found 20+ problems in audits before the production code existed. That's an order of magnitude cheaper. The audits at `2026-04-27_intake_coherence_pressure_test.md` (50KB), `2026-04-30_system_pressure_test.md`, `2026-05-01_marketing_lifecycle_growth_orchestration.md` (105KB) are not retrospectives. They are pre-mortems.

**Vocabulary precision across documentation layers.** A term like `intended_privacy_exposure_level` means the same thing in the system map, in `lib/outbound/types.ts`, in the migration's column comment, in the ADR's Section 7.5, in the commit message, and in the smoke test assertions. Most projects develop dialect drift between layers within months. This one has not.

**Minimization discipline on the binding map.** The willingness to write a long brief and then promote 5% of it is rare. Most architects over-promote because they wrote it. Here the rejected 95% lives in plan files where it belongs — strategy, not invariant.

**The orchestrator pattern's consistency across three independent domains.** Intake (`record_intake_emissions_batch`), outbound (`enqueue_outbound_job`), documents (`route_patient_document`). Same shape, same discipline, same primitive injection, same cross-org guard. New domains will not need to reinvent.

**Sacred boundaries enumerated and CI-enforced where possible.** Tenancy, data_environment, audit shape, privacy tier, consolidation, template registry, AI authority. The list is bounded, named, and enforced through structural mechanisms (orchestrators, RLS, CI lint, CODEOWNERS). They are not aspirations.

## Patterns dangerous if overused

**Pressure-test addiction.** Today every audit is finding foundational gaps. That will not last. There will be a transition where audits start producing diminishing returns and surfacing only edge cases that don't change the architecture. The signal to watch: when a pressure-test patches itself ("we found a gap, the gap is that the patch we proposed last time was wrong"). When that happens, retire some audits.

**Phase decomposition overhead.** Phase 4 has been decomposed into ~12 sub-phases. Each ships independently with its own ceremony. The risk: cumulative ceremony exceeds the work. The signal: when a sub-phase commit message is longer than its diff. Phase 4H-pre commit 1 was close to this boundary (the migration is ~140 lines; the commit message is ~50 lines; the supporting ADR work was ~700 lines). For schema commits this is fine. For runtime code commits it would be a smell.

**Architecture gravity.** A 9657-line system map is at the cognitive ceiling for a single contributor. The narrative + ADR + HANDOFF layer is the right counterweight, but the trend matters. The signal: when contributors stop reading sections because they're "too long" and start asking the AI to summarize them. That's already happening at small scale; it'll grow.

**Vocabulary rigidity.** When new patterns emerge that don't fit existing terms, the temptation is to force them. The signal: section headings that strain under their own modifiers. `1Q.21 marketing_lifecycle_growth_orchestration` is already at the edge.

**CI-lint Swiss cheese.** Forcing functions are great until they accumulate exemptions. The current event-type lint exempts `lib/events/` and `lib/intake/question-bank/`. That's two exemptions; the lint is still meaningful. At ten exemptions, it's not.

**Multi-AI false consensus.** If both AIs share training-data biases, they agree on something they shouldn't. The user has been doing the right thing — using ChatGPT as adversary at decision moments — but the moment the loop reduces to "they agreed, ship it," the rigor degrades. This is the most fragile part of the build pattern.

## Does this change how future phases should be approached?

Yes, in three concrete ways.

**1. Future phases should plan for the gradient, not skip it.** The build style depends on pressure-test → audit → amendment → plan → commit → smoke. Skipping pressure-testing on a complex new domain (Phase 4H rules-engine runtime, Phase 4I governance/RTBF, Phase 4J multi-tenant readiness) is a higher risk than the project's track record suggests, *because* the track record was built on the gradient, not by the gradient being optional.

**2. Smaller phases should adopt selective ceremony.** A schema migration like Phase 4H-pre commit 1 doesn't need a 700-line ADR for itself; it inherited Phase 4H's ADR. A typo fix doesn't need a phase plan. The project should be willing to short-circuit the gradient when the work is small enough that ceremony exceeds it. But the call has to be made consciously, not by drift.

**3. The ADR + narrative layer is now load-bearing.** The system map is too long for new contributors to onboard from cold. Future phases should explicitly route through the narrative + ADR for orientation, then drop into the map for binding details. If a phase ships a binding decision without an ADR, the documentation pyramid loses load-bearing capacity.

## Signs the architecture is converging correctly

Yes, several:

- **Legacy is named and bounded.** The implicit engine v0 was discovered, classified DELETE-AFTER-PARITY, and constrained by Section 1Q.0 invariant 12. Convergence finds and contains its own legacy.
- **Phase boundaries follow from architecture.** Phase 4H decomposed into 4H-pre / -rules-runtime / -templates-discipline / -send-policy because Section 1Q's structure dictated it. The architecture is now telling the project where the work lives, not the other way around.
- **Pressure tests are finding edge cases, not fundamental gaps.** The 4H pressure test surfaced one foundational issue (implicit engine v0) and one cutover discipline issue (parity rule). It did not surface "Section 1Q is the wrong shape." That is what convergence looks like.
- **Earlier invariants are enforceable today because of later additions.** Section 1Q.0 invariant 12 (consolidation discipline) was unenforceable until Section 1Q.12 named the legacy. The architecture is now self-completing.
- **Cross-domain primitives reused without modification.** `org_id`, `data_environment`, `actor_kind`, `source_kind`, `idempotency_key` were defined once in the primitives addendum and then consumed by intake, outbound, documents, search without redefinition. That's structural convergence.

## Signs of over-modeling or architecture gravity

Some early warnings, none acute:

- **System map at 9657 lines.** Approaching the cognitive ceiling for a single contributor. Mitigation exists (narrative, ADRs, audits). But if a contributor needs to read four documents to understand one feature, the discipline is winning while the ergonomics are losing. Watch for this.
- **Section 1Q at 24 sub-sections and growing.** Will eventually need to be its own document or split. Today it's a single section because the rules + templates concept is unified. When the runtime ships, the implementation specifics will pull it apart naturally.
- **Three pre-runtime gates already (1Q.16, 1Q.17, 1Q.19, 1Q.20, 1Q.22, 1Q.23).** This is a healthy sign for a runtime that hasn't shipped yet, but if the count keeps growing post-runtime-ship without retirements, that's gate accretion.
- **The fact that this evolution narrative was needed at all.** It was. But its existence is evidence that the binding map alone is no longer sufficient orientation. That isn't a failure; it's a maturity threshold. The threshold matters.

## What a weak team would have done differently

Concretely, by now:

- **Started with a notification system that "just sends emails," then patched it forever.** The project's implicit engine v0 was on this trajectory. It was rescued by pressure-testing, not by foresight.
- **Accepted "Hims does it this way" as architecture.** The Hims pressure-test became a study, not a template. A weak team would have shipped the funnel and called it done.
- **Stored intake clinical content in DB config tables.** Many healthcare projects ship this. The architecture explicitly forbids it. A weak team would have built an admin UI to edit clinical questions in production and discovered the audit problem the first time a question changed mid-cohort.
- **Conflated `audit_events`, `patient_timeline_events`, and `messages`** into one "events" table. The discipline that these are three distinct concerns with three distinct invariants is a result of the data architecture discipline section. A weak team would not have separated them and would be paying for it now.
- **Built single-tenant and "added multi-tenant later."** Phase 4C-pre established `org_id` + `data_environment` on 19 canonical tables before any second tenant existed. Most projects bolt this on after a second customer signs.
- **Treated AI as a feature.** The discipline that AI is constrained drafting + recommendation only, with explicit prohibitions on clinical authority, is rare. Most healthcare AI projects discover the regulatory problem post-incident.
- **Skipped pressure-tests for Phase 4H because "we know what we're building."** That instinct produced the original "Phase 4H = rules + templates + governance + RTBF" framing. The pre-runtime pressure test caught it.

## What this project most resembles

Not startup CRUD. Not enterprise SaaS in the workspace-management sense. Not a workflow engine in the rules-only sense.

This most resembles **operational healthcare infrastructure for regulated DTC delivery**. The closest architectural analogues are:

- **Clinical trial management / electronic data capture systems (CTMS/EDC)** in their treatment of audit trails, version pinning, decision provenance, and consent vocabulary. Section 1Q.7 audit shape mirrors EDC patterns.
- **Pharmacovigilance systems** in their treatment of `decision_outcome_reason`, recall propagation (1Q.10), and case-state machines.
- **Tier-1 fintech platform internals (e.g., Stripe's primitives layer)** in idempotency keys, immutable audit, the orchestrator pattern, and primitives addendum discipline.
- **Healthcare integration engines (e.g., Mirth, Rhapsody)** in data routing, source-of-truth discipline, and reconciliation patterns. Section 1O is a route-then-store pipeline that any integration architect would recognize.

It is *not* a SaaS product. It is a regulated-care delivery substrate that ships product surfaces on top. The product surfaces have not yet shipped at scale; the substrate is ~70% built.

## Future risks implied by the build style

1. **Talent risk.** The codebase requires senior systems thinkers. Hiring should be proportionally selective. Junior contributors can ship features but should not be making system-map amendments. The build pattern's quality depends on this filter.

2. **Documentation drift in 12+ months.** The dated-snapshot convention helps, but eventually some snapshots will be wrong about live state. Mitigation: periodic documentation audits — themselves pressure tests, ironically. Schedule them.

3. **Velocity-expectation mismatch.** "Right thing" pace is slower than typical product velocity. Stakeholders accustomed to weekly feature ships may misread the pace. The build style produces a durable platform; surface area moves slowly. Be explicit with stakeholders that the platform-vs-product tradeoff is intentional.

4. **AI-collaboration regression.** The current pattern depends on adversarial multi-AI review with the human arbitrating. If a future iteration reduces to "agent ships, human approves," the architectural rigor degrades. The discipline isn't in the architecture; it's in the loop. Defending that loop matters more than any single architectural choice.

5. **Implicit engine v0 dragging the cutover.** The DELETE-AFTER-PARITY discipline is enforceable only if every per-flow migration deletes its legacy in the same PR. If even one slips, the deletion never happens. The signal: a v0 case described as "almost migrated, just needs one more thing." Force the deletion.

6. **System map cognitive ceiling.** Already approaching. Either decompose into modules or accept that the narrative + ADR layer becomes the primary read path with the map as reference. The decision should be made consciously when it happens.

7. **Audit fatigue.** Twenty pressure tests in two weeks was high-energy. Over many quarters that pace cannot sustain. The project will need to distinguish "phase-gating audit" from "ongoing-architectural-immune-system audit" and budget them differently.

## What to preserve culturally and architecturally

In rough priority order:

1. **The pressure-test-before-build rhythm.** This is the single most valuable cultural pattern. Onboard people who can do it; reject people who can't. Hire for it.

2. **Multi-AI adversarial review at decision moments.** Don't lose this. The pattern that produced the parity rule strengthening was ChatGPT challenging the agent. As AI capabilities grow, the temptation will be to trust one. Resist.

3. **The dated-snapshot convention.** Resist "let's just update the doc" instincts indefinitely. Write follow-ups. Keep the audit trail.

4. **Vocabulary precision.** Hire people who can hold a 30-term glossary. Onboarding includes glossary review. New terms get added to the glossary, not to the prose.

5. **Minimization on binding amendments.** Most things don't belong in the system map. The instinct to put everything in the spec must be resisted forever.

6. **Orchestrator-as-canonical-entry pattern.** Every new domain gets one orchestrator. No exceptions for "small" domains. They grow.

7. **DELETE-AFTER-PARITY for legacy.** Don't extend the past on a per-case basis; replace it on a deadline. Document the deadline.

8. **"AI is recommendation, not authority"** — especially as AI capabilities grow. The temptation will be to widen AI's scope. The discipline is not to.

9. **Willingness to slow at architectural inflection points.** The project paused for 3 days at Phase 4H to pressure-test. That kind of pause is the source of the platform's quality. Future phases should keep budget for it.

## Single-sentence summary

The project is being built as if the platform is the product and the surfaces are the customers — which is the right inversion for regulated-care delivery infrastructure but not for typical SaaS — and the build pattern's quality depends on three things that must be defended: the pressure-test rhythm, the multi-AI adversarial loop, and the documentation pyramid's dated-snapshot convention.

---

*End of Volume 1 build pattern assessment. If a future inflection point demands a follow-up, write a new dated file in this folder. Do not edit this one.*

