# Future blocks — long-term pressure test (snapshot)

**Date:** 2026-05-10 (afternoon, after Phase 4H-in-app-inbox c1 shipped)
**Status:** observation snapshot, NOT a roadmap, NOT binding doctrine, NOT an ADR amendment
**Source:** ChatGPT pressure-test analysis, captured verbatim below + critical evaluation as a sidebar
**Convention:** this document is a snapshot of *what could go wrong at scale that the current architecture may not yet protect against*. It is intentionally not actionable. We re-read it before phase boundaries; we do NOT pre-emptively solve its concerns.

---

## Why this exists

After ADR §7.7 landed and the Phase 4H-in-app-inbox c1 substrate addition shipped, ChatGPT ran an unprompted pressure-test on long-term scale risks. The user's instinct (and ChatGPT's own conclusion) was that this analysis should NOT interrupt the build flow — the architecture has reached maturity sufficient that premature systems sophistication is now a bigger risk than missing concerns.

Both ChatGPT and Opus agreed:
- The architecture is more mature than ChatGPT initially credited.
- The 7 named risks are real but mostly scale-emergent.
- The danger right now is over-extending substrate sophistication before real operational traffic teaches us where actual pressure points are.
- The strategic posture should shift from substrate-completion mode toward continuity-proving mode.

This snapshot preserves the analysis so future contributors (or future-us) can re-derive it later when concrete pressure surfaces. It is **not** a list of things to build. It is a list of things to **re-read** before next-phase planning.

---

## ChatGPT analysis (verbatim)

> The biggest risks now are not "missing CRUD features."
> They're hidden coordination and operational-complexity problems that only appear once:
> - multiple humans
> - multiple programs
> - multiple orgs
> - multiple communication surfaces
> - multiple vendors
> - high patient volume
> start colliding simultaneously.
>
> Your current map is actually unusually strong on:
> - ontology
> - governance
> - event lineage
> - operational continuity
> - role/capability structure
> - communication substrate
> - future orchestration readiness
>
> The gaps that could genuinely burn you later are more subtle.

### 1. Cross-domain transactional consistency under real concurrency

> This is probably the biggest technical risk.
>
> Right now the architecture assumes:
> - event emission
> - outbox
> - orchestration
> - state transitions
> will remain coherent under heavy concurrent mutation.
>
> But at scale you will hit:
> - duplicate webhooks
> - race conditions
> - stale reads
> - partial retries
> - double transitions
> - replay collisions
> - provider actions colliding with automation
> - "late-arriving truth"
>
> Examples:
> - provider approves while refill cancellation is processing
> - shipment delivered after refund issued
> - thread escalation after resolution
> - subscription retry after manual payment
> - followup_due firing after patient already booked
> - multiple dispatch systems updating same object
>
> You already partially recognize this via:
> - idempotency
> - outbox
> - transition graphs
>
> But eventually you may need:
> - explicit workflow/version coordination
> - optimistic concurrency/version columns
> - stronger event causality semantics
> - replay-safe orchestration discipline
>
> Otherwise "operational continuity" becomes: distributed-state chaos.
>
> This is the hidden tax of a patient-rooted operational OS.

### 2. Human operational overload / queue collapse

> This is massive and most architecture diagrams miss it.
>
> Your system assumes:
> - providers
> - support
> - billing
> - fulfillment
> - compliance
> can process escalating operational complexity indefinitely.
>
> But eventually:
> - inboxes explode
> - escalations pile up
> - continuity creates MORE interactions
> - every intelligent flow creates more operational edges
>
> The risk: you accidentally build a "human orchestration burden machine."
> Especially dangerous because: continuity systems surface more nuance instead of hiding it.
>
> Examples:
> - every refill edge case becomes visible
> - every adherence issue generates tasks
> - every thread persists
> - every continuation branch compounds
>
> At scale this can destroy provider leverage instead of improving it.
>
> You are directionally mitigating this with:
> - capabilities
> - queues
> - routing
> - orchestration
> - future AI
>
> But you still lack:
> - explicit operational load-shedding doctrine
> - queue-priority semantics
> - expiration semantics
> - automation-confidence thresholds
> - task decay/escalation strategy
> - "what deserves human attention?"
>
> This becomes existential later.

### 3. Care-task substrate fragmentation

> You already partially identified this in D24.
> This is a real future risk.
>
> Right now:
> - notifications
> - threads
> - continuation
> - refill cadence
> - appointments
> - escalation
> - adverse events
> all imply actionable work.
>
> But you do not yet have: unified care task ontology.
>
> Meaning: tasks may leak into:
> - threads
> - notifications
> - statuses
> - continuation states
> - support tickets
> - inboxes
>
> That becomes catastrophic later because: the system loses deterministic operational state.
>
> You probably eventually need:
> - canonical task/action substrate distinct from:
>   - communication
>   - notification
>   - workflow state
>
> Otherwise "follow-up needed" becomes ambiguous everywhere.

### 4. Multi-organization isolation complexity

> You are planning for multi-entity.
> But true cross-org healthcare operations are viciously hard.
>
> Eventually you'll hit:
> - provider works across orgs
> - shared vendors
> - shared patients
> - delegated operations
> - external referrals
> - white-labeling
> - split audit authority
> - PHI partition complexity
> - entity-specific policies
> - state-specific operational differences
>
> The risk: tenant leakage through orchestration logic.
> Especially via:
> - notifications
> - queues
> - shared vendors
> - analytics
> - AI context
> - messaging
>
> Your doctrine is good here. But this becomes much harder once:
> - AI orchestration
> - shared memory
> - cross-domain querying
> expand.

### 5. Search / retrieval / operational discoverability

> This is a huge underappreciated scaling problem.
>
> Eventually people need to answer:
> - "what happened?"
> - "why?"
> - "who touched this?"
> - "what's waiting?"
> - "what's blocked?"
> - "what changed?"
> - "what requires action?"
>
> across:
> - events
> - threads
> - orders
> - visits
> - tasks
> - labs
> - prescriptions
> - subscriptions
> - referrals
> - notifications
>
> You have strong audit lineage.
> But audit lineage is not the same thing as: operational discoverability.
>
> Eventually you may need:
> - operational graph/query layer
> - timeline synthesis
> - causality reconstruction
> - cross-domain indexing
> - "explain state" tooling
>
> Otherwise the system becomes: technically coherent but operationally opaque.

### 6. AI context explosion

> This is probably the biggest future architectural risk.
>
> You are clearly heading toward:
> - AI triage
> - orchestration
> - summarization
> - recommendations
> - continuity memory
> - escalation assistance
>
> The problem: once every domain exists, context becomes unbounded.
>
> Without disciplined AI context architecture:
> - prompts explode
> - costs explode
> - hallucination risk rises
> - authority boundaries blur
> - stale memory contaminates decisions
>
> You already have:
> - provenance
> - evidence refs
> - authority metadata
> which is excellent.
>
> But eventually you likely need:
> - scoped context windows
> - deterministic retrieval policy
> - context eligibility rules
> - "AI may see X but not Y"
> - temporal validity semantics
> - decision-grade vs convenience-grade context
>
> Otherwise AI becomes: dangerously over-contextualized.

### 7. Runtime complexity / orchestration sprawl

> This is where many "platforms" die.
>
> Eventually:
> - notifications
> - subscriptions
> - appointments
> - threads
> - fulfillment
> - continuation
> - escalation
> - safety suppression
> - consent uplift
> - provider routing
> all become interdependent.
>
> Without strict orchestration discipline: you get:
> - invisible coupling
> - cascading retries
> - hidden side effects
> - rule recursion
> - debugging nightmares
>
> You are already trying to defend against this via:
> - side-effect-bounded execution
> - deterministic evaluators
> - runtime isolation
> - idempotency
>
> That is the correct instinct.
> But this problem grows nonlinearly.

### ChatGPT's overall framing (binding insight)

> The most important thing you are NOT missing
>
> You are NOT missing: another feature category.
> You already have enough system categories.
>
> The real scale risks are:
> - coordination
> - operational burden
> - concurrency
> - task semantics
> - orchestration complexity
> - AI context governance
>
> That's where healthcare operating systems become either:
> - magical or
> - operationally unmaintainable.
>
> The danger now is not ignorance.
> It's: overextending substrate sophistication before enough real operational traffic teaches you where the true pressure points actually are.

### ChatGPT's timing recommendations

**Problems to address NOW (foundation-stage seams):**
1. Idempotency + event discipline — already underway
2. Capability + authority model — already done
3. Ontology boundaries — JUST corrected via the sibling-domain doctrine
4. Notification governance substrate — JUST shipped via disclosure-policy + in_app inbox

**Problems to PARTIALLY prepare for (hooks now, not full systems):**
5. Care task substrate — acknowledge + avoid pollution; do NOT build full task orchestration
6. Operational overload — preserve routing + escalation + automation-insertion seams; no load-shedding logic yet
7. AI governance — current provenance/evidence-refs/authority is enough; no giant AI orchestration yet

**Problems to wait for REAL SCALE before solving:**
8. Multi-org complexity — clean scoping seams only; no enterprise-grade federation
9. Runtime orchestration explosion — wait for rule count + debugging pain
10. Search / explainability graph — wait for actual operator opacity

### ChatGPT's strategic conclusion

> The danger is not: "we're missing critical architecture"
> The danger is: "we keep solving future scale problems before proving the continuity product."
>
> Honestly: I think the architecture is now mature enough that you should increasingly ask:
> "does this unlock visible continuity?"
> instead of:
> "does this make the substrate more theoretically complete?"
>
> That's a major transition point. And I think you're there.

---

## Opus critical evaluation (sidebar)

Where I largely agree with ChatGPT, with three calibration notes:

**Where I'm slightly less worried than ChatGPT:**
- **Cross-domain consistency (#1).** The substrate is more robust than ChatGPT credits: idempotency_key on every outbound, audit_event_id-based dedupe on rule firings, atomic SECURITY DEFINER orchestrators (`enqueue_outbound_job`, `record_inbox_message`, `record_intake_emissions_batch`), the transition allowed-graph at `lib/internal/patient-case/impl.ts`. We DO lack optimistic concurrency on domain tables and explicit "expected from-state" enforcement, but those are scale-emergent. The seams are correct.

**Where I agree with ChatGPT but think ONE narrow watch is worth adding now:**
- **Care-task substrate (#3).** The first rule that ships an inbox message with a CTA ("click here to confirm your address," "review your prescription," "complete consent uplift") will face a decision: model the action in `metadata.cta` jsonb on `patient_inbox_messages`, or wait for a real `patient_action_items` table? If we go with metadata, we set a precedent that pollutes inbox semantics with task semantics. This is the ONE concrete near-term pressure point. Worth a radar zone (zone 28) so the first contributor faces this question explicitly. NOT a now-build.

**Where I'm slightly more worried than ChatGPT:**
- **AI context (#6).** ChatGPT framed this as "you have enough — provenance + evidence refs + authority metadata." That's true for current operations. But AI substrate work is medium-term per the original roadmap, and we DON'T have explicit context-eligibility rules ("AI may see X but not Y"), temporal validity semantics, or decision-grade vs convenience-grade context distinction. When the first AI-substrate commit arrives, this is unmapped. Defer the build, but flag it as the BIGGEST architectural unknown ahead.

---

## Mode shift named (the strategic insight)

```
Substrate-completion mode  ->  Continuity-proving mode
"Does the foundation hold?"     "Does the patient experience this?"
```

The architecture has reached the threshold where:
- More substrate without proving continuity is the new failure mode.
- "Does this unlock visible continuity?" is the better question than "does this make the substrate more theoretically complete?"
- The c1 in_app substrate ships infrastructure that no rule uses yet — appropriate because in_app was a prerequisite, but the next commit should USE substrate, not extend it.

Future commit planning should consult this question explicitly.

---

## What this document does NOT do

- Does NOT introduce binding architectural commitments.
- Does NOT amend the system map.
- Does NOT amend any ADR.
- Does NOT add to the system primitives addendum.
- Does NOT direct any specific commit.
- Does NOT defer any current work.

---

## What this document DOES do

- Preserves ChatGPT's pressure-test analysis verbatim for future re-derivation.
- Names the strategic mode-shift (substrate-completion -> continuity-proving) so future commit planning can consult it.
- Identifies the ONE concrete near-term watch zone (care-task substrate vs metadata jsonb leakage on patient_inbox_messages) — captured in v1 pressure-test radar zone 28.

---

## Cross-references

- [`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md) — zone 28 added 2026-05-10 (post-snapshot)
- [`.cursor/plans/HANDOFF_2026-05-10_phase_4h_in_app_inbox_c1_checkpoint.md`](../HANDOFF_2026-05-10_phase_4h_in_app_inbox_c1_checkpoint.md) — mode-shift paragraph appended
- [`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md) — ADR §7.7 anti-drift discipline still binding; this doc does NOT trigger §7.8+
- [`.cursor/plans/system_map_three_layers_60706286.plan.md`](../system_map_three_layers_60706286.plan.md) — `## Platform operational model` doctrine still binding; this doc does NOT amend

---

*End of snapshot. Re-read this document at the next phase boundary or whenever a concrete pressure point in any of the 7 risk categories surfaces in production work.*
