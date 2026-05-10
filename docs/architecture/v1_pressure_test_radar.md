# v1 pressure-test radar

This document is a radar, not a roadmap. It captures architectural and operational pressure-test zones we expect to revisit before v1 ship or before major runtime layers land. It exists so future contributors do not accidentally drift into complexity without recognizing the pattern early.

Most of these are not problems yet. They become dangerous when multiple independently-reasonable implementations accumulate without a shared operational model. That accumulation is what this radar exists to interrupt.

This is not the system map. It is not an ADR. It does not introduce new architecture. When a zone here actually surfaces in production work, write a focused ADR or amend the system map; do not expand this file.

---

## How to read this

Three tiers, ranked by how soon a zone will surface from real platform work:

- **Tier 1** — already touching shipped code or arrives in the next 1-2 phases. Read this section before provider dashboard / task runtime / lifecycle automation work.
- **Tier 2** — surfaces within roughly 3-6 phases. Read when scoping the relevant phase.
- **Tier 3** — scale-era; cheap to anticipate now, expensive if discovered late.

Each zone: what it is, the danger, what to watch for, and where it surfaces first. 3-5 lines.

Triggers for re-reading the radar are at the end.

---

## Tier 1 — actively forming on the radar

### 1. Patient state explosion

Many systems independently inferring "what is this patient's status right now" — active care, paused, refill-blocked, awaiting labs, overdue followup, disengaged. Each surface invents its own derivation; answers diverge; no canonical owner. Watch for: two queues showing different "active" counts for the same patient population, or a dashboard tile saying "approved" while the provider page says "awaiting review." Surfaces first in: provider dashboard + staff queue UIs.

### 2. Task / ownership drift

For any piece of operational work, who is the canonical next actor — provider, MA, support, automation, ops? When the answer is unclear, work falls between roles or gets touched twice. The `responsible_party` discipline at Section 1G is the architectural home. Watch for: a queue that shows the same row to multiple roles, or a "stuck" item that nobody owns. Surfaces first in: staff queue work + escalation routing.

### 3. Communication saturation

Multiple Rules fire on the same patient in the same window. Same patient gets four messages about overlapping things — payment + visit update + refill reminder + provider message — within an hour. Cadence rules per Section 1Q.21 + the send-policy gate at 1G.3 are the answer; the failure mode is when individual Rules don't consult the shared cadence ledger. Watch for: complaints about message frequency, or a Rule shipping with `transactional_critical: true` to bypass cadence rules unnecessarily.

### 4. Rules becoming a second orchestrator

Already forbidden by ADR Section 7.6 + system map invariant 13. The danger is the rules engine quietly mutating domain state via raw writes or hidden orchestration paths. The structural enforcement is the dispatcher import allowlist. Watch for: a new RuleAction kind that wants to write to a domain table; the answer is to build the proper orchestrator boundary first per the §7.6 extension procedure, not to inline it in rule runtime.

### 5. Send-policy fragmentation

Channel rules, privacy rules, cadence rules, jurisdiction rules. If each Rule encodes its own send policy ad-hoc, the policies diverge. Section 1G.3's 5-step gate is the canonical home; the current `runSendPolicyGate` stub is where it ships. Watch for: a Rule action implementing per-channel logic before the gate runtime is wired. Surfaces first in: 4H-send-policy phase work.

### 6. Template governance erosion

Inline prose bypassing the typed Template registry at `repo/templates/`. The failure mode: a new feature ships a "quick" inline string that becomes load-bearing and gets copy-pasted. CODEOWNERS gate at `/repo/templates/` + the anti-extension lint at `scripts/lint-rules-templates-scaffold.ts` are the structural answers. Watch for: a new outbound_jobs row payload carrying free-form `subject` / `body` strings instead of `rendered_email` / `rendered_sms` from a typed Template.

### 7. Legacy v0 notification survival

Temporary migration code becomes permanent. The DELETE-AFTER-PARITY directive at system map 1Q.12 is the answer; the lint snapshot reports each migration. Watch for: a v0 case described as "almost migrated, just needs one more thing" — that's the language that turns 90 days into 18 months. Force the deletion in the same PR that ships the typed replacement.

> **Status update (2026-05-10):** **Closed structurally** by Phase 4H-templates-discipline c9 (commit `aa8fa4f`). All eleven baseline `NotificationTemplateKey` cases migrated to typed Rules + Templates over the c1–c9 arc. `lib/workflows/notificationRules.ts` deleted; `lib/notifications/patientMessages.ts` legacy switch dispatchers removed; `lib/workflows/onPatientWorkflowEvent.ts` shrunk to chart.ai_review-only. The survival risk this zone tracked is structurally eliminated — the legacy module no longer exists to drift from. The zone stays in the radar as a historical entry; future "legacy survival" risks (e.g., a NEW v0 surface accumulating temporary code) would warrant a new zone, not a re-opening of zone 7.

### 8. Search becoming accidental source of truth

Humans treat search results as canonical state. "I searched for X and didn't find it, so it doesn't exist." Search is an index, not a store; domain tables remain the source of truth. The Section 1R search adapter at `lib/search-entities/` is read-only by design. Watch for: a feature making operational decisions from a search query result, or a search result UI that omits the "as of" timestamp. Surfaces first in: provider dashboard + read-model surfaces.

### 9. Permission / capability topology drift

Who can see / mutate / override what across provider, support, ops, orgs, and future tenants. Not generic RBAC — specifically capability scoping per `1D.1` `requireCapability` discipline. Phase 4J ships the formal multi-tenant readiness work but assumptions get hardcoded earlier. Watch for: a new dashboard query selecting across patients without scoping to `current_org_id()`, or a check that says `if role === 'staff'` instead of `requireCapability('can_X')`. Surfaces first in: provider dashboard + staff tooling.

### 10. Timeline vs audit vs trigger-event conflation

Three distinct catalogs serving three distinct concerns: `patient_timeline_events.event_type` (patient memory), `audit_events.action` (compliance trace), `RuleTrigger.event_type` (internal domain trigger). Already separated via Phase 4F + commit 5 layering. Watch for: a feature emitting "the same event" to multiple catalogs without a clear reason for the parallel write — that's the smell that catalogs are starting to merge.

---

## Tier 2 — surfacing within next 3-6 phases

### 11. Provider labor leakage

Automation that LOOKS automated but secretly requires manual review per case. The system ships an "auto-approve" feature, then operations adds a "just glance at it first" step that grows into a full review. Surfaces when per-case provider-minute counts go up after automation supposedly shipped. Watch for: a Rule action of `kind: 'route'` with `decision_support_payload` that becomes load-bearing for every approval rather than the exception cases.

### 12. Derived state / world-model drift

`patient_clinical_assertions` (claim ledger) vs `patient_clinical_assertion_current` (reconciled view) vs longitudinal rollups. Each layer has its own freshness window. Section 1K.5.A is the architecture. Watch for: feature code reading the claim ledger directly when it should read the reconciled view, or vice versa.

### 13. Intake truth ambiguity

Patient-reported vs provider-confirmed vs system-inferred. The clinical assertion `authored_by` field is the answer; downstream rules MUST consult it. Watch for: a Rule precondition that reads a clinical assertion without filtering by `authored_by`, or a denial rule firing on patient self-report alone.

### 14. Reconciliation logic hiding in application code

"Temporary" business logic that bypasses the orchestrator pattern. Becomes permanent. The data architecture discipline at the top of the system map is the answer: domain truth in domain tables, narrative pointers on `patient_timeline_events`, accountability on `audit_events`. Watch for: a feature that reads `patient_timeline_events.payload` for operational state instead of querying the domain table.

### 15. Audit signal decay

Too many low-value audit events dilute the signal. Too few = no defensibility. The typed catalog at `lib/events/audit-actions.ts` is the answer; watch for 5+ near-duplicate event types serving one concept, or a new event type without a "this is the question I will be able to answer" rationale.

### 16. Terminal-state operational rot

Queued / suppressed / failed jobs accumulating without ownership. Synthetic-environment rows in `'suppressed_data_environment'` are fine; production-environment rows in `'dead'` for 30 days are not. Watch for: dashboard queries that ignore terminal states, or a backlog of `'failed'` jobs with no triage process. The fix lives in the observability phase.

### 17. Provider dashboard junk-drawer effect

Every unresolved issue dumped into one UI. The dashboard becomes unusable. Need actionability-first surfaces (queues with SLA, not catch-all lists). Watch for: a single dashboard tile titled "things to look at" that grows past 50 items.

### 18. Staff queue ambiguity

No SLA / escalation ownership / priority model on operational queues. Section 1G.5 is the architectural home. Watch for: a queue without an "if not handled in N hours, escalate to" rule, or a tribal "ask Bob" pattern.

### 19. Lifecycle automation drift

Many small automations conflicting over time. Rule A fires Rule B fires Rule C. Cascades become unreasonable. The audit lineage on `outbound_jobs` is the trace; the discipline is to keep cascades shallow. Watch for: a Rule whose `trigger.event_type` is itself a `rule.fired.*` audit action.

### 20. Human override invisibility

Staff or provider manual interventions not modeled explicitly. The system says "automated" while a human is doing it via direct DB edits or Slack handoffs. The orchestrator pattern + `actor_kind` taxonomy is the answer. Watch for: a row whose state suggests automation completed it but the audit trail is missing or vague.

### 21. Retry / escalation ambiguity

Unclear retry ownership for failed flows. Phase 4E's `outbound_jobs.status` state machine is the model; extend the same shape to other domains. Watch for: a domain that fails an operational step but has no defined retry path or terminal state.

### 22. Subscription / treatment state divergence

Financial subscription state can drift from clinical treatment state. Patient cancels subscription → treatment_item stays active. Patient stops treatment → subscription keeps charging. Today the legacy `syncLegacyGlp1ToCareModel` bridges them. Watch for: this drift on new pathways, or a bug report that "the patient was charged but their care is paused."

---

## Tier 3 — scale-era

### 23. Multi-tenant assumption leakage

MAIN-specific assumptions creep back into templates / logic / inferences. The brand-sourcing rule from ADR §7.5 is one structural answer; jurisdiction-aware policy layering is another. Surfaces when the second tenant signs and the first integration test fails because something hardcoded "MAIN" or "us-east-1" or "USD."

### 24. Synthetic / test data escaping containment

Non-production rows reach external systems. The data_environment dispatch gate (Phase 4H-pre commit 2) is the structural lock. Watch for: a new dispatch path that bypasses `pickNextOutboundJob` or a new external integration that reads from `outbound_jobs` without honoring the env filter.

### 25. AI role creep

AI refinement slowly becomes AI decision-making. Section 1Q.0 invariant 4 is the binding rule. Watch for: `ai_refinement_allowed: true` on a clinical-domain Template, or an AI-generated `decision_support_payload` whose `option_default` field decides for the provider rather than informing.

### 26. Operational telemetry blindness

No visibility into per-provider touches, escalations, or automation escape rates. Without this, the system scales operational pain invisibly. Surfaces when ops asks "why is the queue growing" and the answer requires a one-off SQL query. The fix is a focused observability phase: structured logging + per-mutation timing + outbound_jobs SLA timer + OpenTelemetry-shaped exports.

---

## 2026-05-10 addendum (post-snapshot)

The 2026-05-10 system-map alignment audit ([`.cursor/plans/audits/2026-05-10_system_map_alignment_pressure_test.md`](../../.cursor/plans/audits/2026-05-10_system_map_alignment_pressure_test.md)) produced the `## Platform operational model` binding doctrine now at the top of the system map. That doctrine surfaced one new pressure-test zone that does not match any existing entry. It is added here as an addendum rather than renumbered into the original snapshot, per the "snapshot is more valuable than perfect-current-list" guidance.

### 27. Sibling-discriminant leak / case-as-parent-ontology drift (tier 1)

A payload discriminant defined for one operational sibling silently extends across sibling seams. Canonical example: `case_kind` (defined for clinical-decision events on `treatment_items` / `care_programs`) extended to cover orders, appointments, prescriptions, lab kits, retail purchases, or marketing journeys. Each sibling owns its own discriminant per the `## Platform operational model` doctrine; reusing one across siblings is the canonization-of-wrong-ontology error the doctrine binds against.

Watch for: a new typed Rule whose payload schema reuses an existing sibling's discriminant for a different sibling shape; a new `event_type` placing `case_kind` over a non-clinical-decision concept; substrate primitives being modeled as siblings ("domain folder for audit lineage", "domain folder for disclosure-policy" — both category errors); operational siblings nested under each other (orders as a sub-shape of clinical-decision-cases). Also watch for legacy cross-sibling producer wiring becoming permanent: a fulfillment-shaped event emitted from `lib/internal/patient-case/impl.ts` is acceptable as transitional with an explicit comment, but if it never migrates out, the producer-site has retroactively justified nesting siblings under each other.

Surfaces first in: the shipped migration (4H-templates-discipline c4), where fulfillment events crossing a case-centric producer site forced the doctrinal question. The audit's §6 adjustments (new `fulfillment_lifecycle/` folder, `order_kind` discriminant, producer-locality comment) operationalize the doctrine. Future siblings (scheduling, pharmacy, labs, retail, marketing) follow the same pattern when their first concrete migration arrives.

Binding parent invariant this watch zone protects: system-map `## Platform operational model` section.

### 28. Care-task substrate fragmentation / metadata jsonb leakage (tier 1)

Patient-facing actionable work ("click here to confirm your address", "review your prescription", "complete consent uplift", "answer this question before your visit") may eventually leak into multiple existing surfaces — `patient_inbox_messages.metadata`, `messages.body`, `treatment_items.status`, support-ticket-shaped fields, free-text notes — without ever being modeled as a first-class object. Once that leakage exists across multiple surfaces, "follow-up needed" becomes ambiguous everywhere and the system loses deterministic operational state.

The acute near-term risk: the c1 in_app inbox commit shipped a `patient_inbox_messages.metadata jsonb` field as forward-compat for CTA / deep links / structured attachments. The first rule that wants to model "patient owes us an action" will be tempted to use that metadata field for task state. That sets a precedent that conflates inbox semantics (a delivered notification) with task semantics (an open patient action item).

Watch for: a Rule (or future contributor) using `patient_inbox_messages.metadata.cta` / `.task_id` / `.action_required` / `.due_date` / `.completion_status` to model patient task state. If the inbox metadata contains anything that smells like state-of-the-action (vs lineage / display hint), the line has been crossed. The architecturally-correct answer when the first concrete need surfaces is a separate `patient_action_items` table (or equivalent) — distinct from the inbox notification, distinct from the conversation thread, distinct from `treatment_items.status`. The inbox row may *reference* the task (e.g., `metadata.action_item_ref: '<patient_action_items.id>'` is acceptable as a reference), but it cannot *be* the task.

Surfaces first in: the first rule that needs to ship an inbox message with a tracked action state (likely a tier_2/3 patient-facing rule like "consent_uplift_required" or "address_confirmation_required"). Defer the actual `patient_action_items` table until that concrete need arrives — the radar zone exists so the first contributor faces the question explicitly rather than picking the path-of-least-resistance metadata-leakage answer.

Source pressure-test: [`.cursor/plans/audits/2026-05-10_future_blocks_long_term_pressure_test.md`](../../.cursor/plans/audits/2026-05-10_future_blocks_long_term_pressure_test.md) §3.

Binding parent invariant this watch zone protects: system-map `## Platform operational model` section (communications/inbox is a sibling; provider tasks/escalation is a sibling; they are not the same thing — and patient-facing tasks may eventually need their own sibling or a substrate primitive distinct from both).

---

## How to use this radar

- **Re-read before**: provider dashboard work, task runtime, lifecycle automation expansion, broad send-policy rollout, the moment 10-20 typed Rules / Templates have shipped.
- **Do NOT** use this document to block narrow mechanical commits. A typo fix or a single-rule migration does not require a radar review.
- **When a zone activates** (a real symptom appears), write a focused ADR or amend the relevant system map section. Do not expand this radar with the new specifics. The radar names risks; ADRs and the map name resolutions.
- **Add a new zone only** when something becomes a probable failure mode that does not already match an existing entry. Drift here matters too — the radar is most useful when it stays tight.

---

*End of radar. Dated 2026-05-08. If a future re-pass produces a meaningfully different list, write a v2 alongside this file rather than editing it; the snapshot is more valuable than the perfect-current-list.*
