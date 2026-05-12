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

## 2026-05-11 addendum (post-doctrine-reconciliation)

The 2026-05-11 doctrine reconciliation pass landed Doctrine locks DL-1 through DL-9 + Section 1W (foundation primitive) in MAIN, plus §5.2 owned diagnostic acquisition + §6.6 specialty register + §11.0 crosswalk in the foundational doc, plus the consistency cleanup. That pass surfaced five new pressure-test zones tracked here (29-33).

### 29. Specialty-acquisition-table proliferation drift (tier 1)

A future contributor proposes a specialty-specific acquisition table — `urology_void_flow_table`, `cardiac_holter_table`, `pulm_dlco_table`, `gyn_colposcopy_table`, `ophtho_oct_table`, `ent_audiogram_table`, `pain_rfa_table`, etc. — to model what the substrate already admits via the `diagnostic_acquisition_session` operational object + DL-9 producer lanes + the §4 substrate primitive set. Each specialty-specific table is the first move toward specialty-poisoned substrate (DL-8 admission-criteria violation).

Watch for: a PR that adds a `<specialty>_<test>_table` migration without first adding a row to §6.6 + running §1.8 admission criteria. If §6.6 already has an analog row showing the shape composes from existing primitives, the new table is rejected by default. If §6.6 does not yet cover the shape, extend §6.6 first; the row-then-table sequence is the discipline.

Surfaces first in: the first specialty activation beyond the wedge clinic — possibly urology, cardiology, pulm, GYN, endocrine, neuro, ophtho, ENT, allergy, rheum, wound, pain, or a specialty not yet in §6.6. The radar zone exists so the first contributor faces the §6.6 + §1.8 sequence explicitly.

Binding parent invariant this watch zone protects: MAIN Doctrine locks DL-7 (tracked clinical objects + structured-first authoring) + DL-8 (universal flow grammar + primitive admission criteria) + DL-9 (owned diagnostic acquisition) + ADR §7.11 (DL-9 codification) + §7.12 (specialty register pattern).

### 30. §6.6 specialty register staleness (tier 2)

A new specialty domain activates for the wedge but the §6.6 specialty-coverage non-foreclosure register doesn't gain rows for its representative shapes. The substrate non-foreclosure proof rots: future contributors arriving at §6.6 see a register that no longer represents the activated specialty universe, and the demonstration loses force.

Watch for: any new sibling activation PR that does not touch §6.6 (or explicitly notes "no new specialty admittance needed because every shape is already covered by an analog row"). §6.6 extension is part of activation pre-flight, not optional. Also watch for PRs that add specialty workflows in code without the §6.6 row landing first — that sequence violates the §7.12 method.

Surfaces first in: the first sibling activation that involves a specialty not currently in §6.6's 12 categories. Threshold: if a new activation touches ≥3 specialty test/procedure shapes not enumerated in §6.6, the register MUST extend.

Binding parent invariant this watch zone protects: ADR §7.12 (specialty register pattern) + MAIN Doctrine locks DL-6 (substrate non-foreclosure across all dimensions) + foundational doc §6.6.

### 31. Day 0 elite-class depth-bar drift (tier 1)

Shallow versions of activated domains creep into the substrate as activations scale ("we'll do real Mindbody-class scheduling later"; "Hims-class intake structure is a v2 thing"; "outpatient-EMR-depth charting can ship in pieces"). DL-5 explicitly forbids this regression. Once one activated domain ships sub-Day-0 depth, the moat erodes — the wedge clinic lose-no-depth-on-switching commitment is broken.

Watch for: any sibling activation PR that does not declare the depth bar it ships at + cite the §1.5 named-bar (Mindbody-class scheduling, Shopify-class commerce, Hims-class intake, ActiveCampaign-class lifecycle marketing, Klara/RingCentral-class communications, Athena-lab-module-class diagnostics, outpatient-EMR-depth charting). "Day 0 not yet" / "MVP depth" / "lighter version" framings are red flags. Activation PRs must explicitly address depth-bar adequacy or be paused.

Surfaces first in: the next activated sibling beyond the c1-c9 wedge (`scheduling_lifecycle/` activation? `clinical_record/` activation? `communications_lifecycle/` UI surface activation? `revenue_cycle/` Day 0 charge-lineage activation?). Each of these stresses a different §1.5 named depth bar.

Binding parent invariant this watch zone protects: MAIN Doctrine locks DL-5 (Day 0 elite-class depth) + ADR §7.10 + foundational doc §1, §1.5.

### 32. Owned-vs-external diagnostic conflation (tier 1)

A future contributor treats owned in-office tests as substrate primitive #16 (external-system ingest) cases — uses `external_partner_result` as the `output_source` for clinic-owned acquisition, or routes owned acquisition through document-routing pipelines instead of `labs_lifecycle/` + `procedure_lifecycle/` native authoring. DL-9 explicitly forbids this: substrate primitive #16 is for **outside** systems only; owned tests are authored, not ingested.

Watch for: any new diagnostic / procedural PR whose `output_source` field is `external_partner_result` for a clinic-owned acquisition; any PR that proposes routing an in-office PFT / ECG / urodynamics / colposcopy / EEG / OCT / audiogram via substrate primitive #16; any PR that conflates the four DL-9 lanes (omni_native_authoring, in_office_device_file, in_office_device_feed, vendor_cloud_import, external_partner_result, manual_transcription). The four-lane model + output-source taxonomy is the binding discipline.

Surfaces first in: the first diagnostic / procedural workflow activation post-DL-9 — possibly the `labs_lifecycle/` sibling activation, an in-office PFT or ECG capture path, or an in-office procedure-result template. The first concrete activation is when the conflation risk is highest; subsequent activations inherit the discipline.

Source pressure-test: ChatGPT diagnosis during the post-c9 owned-diagnostic-acquisition pressure test — captured in foundational doc §5.2 + ADR §7.11.

Binding parent invariant this watch zone protects: MAIN Doctrine locks DL-9 (owned diagnostic acquisition) + ADR §7.11 + foundational doc §5.2 (binding sub-doctrine) + §5.2.6 anti-pattern list.

### 33. Primitive numbering drift recurrence (tier 2)

The post-DL-9 consistency cleanup resolved a primitive-numbering mismatch between the foundational doc §4 (canonical 21-primitive enumeration in build-sequence order) and the §11.0 crosswalk (which had drifted to a different drafted-from-memory ordering). The fix was to renumber §11.0 to match §4 exactly. The risk: future contributors writing new doctrine-tier docs / commits / PRs re-introduce a non-§4 ordering, recreating the mismatch.

Watch for: any reference to "substrate primitive #N" outside §4's canonical numbering — e.g., a PR that says "primitive #1 = org/brand/location" (which is §4 #4 multi-tenant; §4 #1 is Audit + lineage) or "primitive #6 = consent" (which is §4 #21; §4 #6 is Longitudinal operational memory). §4 is canonical; every other reference must match. CI lint candidate later (out of current scope); for now, human-discipline + cross-link to §4 in any doc that cites primitives by number.

Surfaces first in: any future doctrine-tier amendment that cites primitives by number (a new ADR sub-section, a new radar zone, a new evolution narrative entry, a new handoff). Each must cross-check §4 before publishing.

Source: post-DL-9 consistency cleanup pressure test — captured in the consistency cleanup plan + foundational doc §11.0 crosswalk reconciliation.

Binding parent invariant this watch zone protects: foundational doc §4 (canonical 21-primitive enumeration) + MAIN Doctrine locks DL-8 (admission criteria implicitly bind §4 ordering via the "21 substrate primitives" count).

---

## 2026-05-11 evening addendum (post-DL-10, consumer identity vs operational patient-relationship scoping)

The DL-10 doctrine arc (landed 2026-05-11 evening, after c2 chat rendering shipped) bound the Mindbody-style "shared identity substrate, separate operational relationships" answer. It formalizes the previously-reserved Continuity Relationship primitive #19 as `patient_relationship`, amends Section 1J intro for identity-namespace scope, and amends Section 1U.3 for `brand_id` graduation. Four new zones watch for drift around these commitments.

### 34. Identity-collapse drift (tier 1)

The risk: a feature treats `patient_id` as the global cross-relationship identity in contexts that should be relationship-scoped. The substrate has shipped with `patient_id` as the spine across every operational table (timeline, messages, audit, orders, treatments, refills, commerce, intake, lab, document routing) — that is the right shape per primitive #5. But DL-10 binds: certain operational state is relationship-scoped, not identity-scoped. A query like "all messages for this patient" without filtering by `patient_relationship` is the smoking gun.

Watch for: queries / API surfaces / UI views that return operational data keyed only on `patient_id` when the operational concept is relationship-scoped (consents, memberships, care programs, messages thread context, clinical chart context, care team assignments). The fix is not to delete `patient_id`-keyed reads — it's to add the relationship filter. Identity-claim queries (name, DOB, verification status, duplicate detection) legitimately stay `patient_id`-keyed; the line is operational state.

Surfaces first in: c4 (`patient_action_items` substrate build) — the c4 preflight must explicitly decide per action-item type whether it's identity-scoped or relationship-scoped. The provider mirror parallel track is the second likely surface (queue reads, assignment surfaces).

Source: DL-10 doctrine arc; the Mindbody analogy pressure test against the existing `patient_id`-only spine.

Binding parent invariant this watch zone protects: MAIN Doctrine lock DL-10 + foundational doc §7.13 + primitive #19 formalization.

### 35. Cross-relationship auto-share drift / Extreme 1 (tier 1)

The risk: operational state silently propagates across relationships on identity-claim match. The "I matched the phone number, therefore the refill rule fires on every brand this patient has a relationship with" failure mode. Or: a marketing send goes to all of the patient's relationships because they're "the same person." This is the Epic-enterprise interpretation DL-10 explicitly rejects ("Extreme 1").

Watch for: rules / orchestrators / dispatchers that fan out across all of a patient's relationships without per-relationship gating. Consent / memberships / care-team / clinical-chart access bleeding from one relationship into another. AI assistance that reads the patient's "global" chart across relationships without per-relationship permission. Outbound dispatches that aggregate across relationships.

Surfaces first in: any future rule activation that triggers on identity-level events (e.g., "patient identity verification status changed") — the rule fires once per patient, but its operational effects must be scoped per relationship if the effect is operational state.

Source: DL-10 doctrine arc; the Epic-vs-Mindbody contrast.

Binding parent invariant this watch zone protects: MAIN Doctrine lock DL-10 (cross-relationship linking is explicit, permissioned, consent-aware, audited; never auto-shared on identity match) + foundational doc §7.13.3 (the reusable-vs-scoped split) + §7.13.9 anti-patterns.

### 36. Brand-hardcoded relationship primitive (tier 2)

The risk: building features that assume `brand` is the only relationship boundary, foreclosing clinic / practice_entity / location / specialty-line / external-partner / endpoint scoping. The smoking gun is a column named `patient_brand_relationship_id`, a UI label "Brand relationship," or a switch that hardcodes brand-as-relationship-key.

Watch for: PRs / preflights / migrations that introduce relationship-scoping logic via `brand_id` alone, when the primitive (per primitive #19 + DL-10) admits 11 possible scoping dimensions. The relationship-boundary admission guardrail (foundational doc §7.13.4) is the binding test: a dimension becomes a relationship boundary only when it owns distinct operational state — but the *primitive* is `patient_relationship`, not `patient_brand_relationship`.

Surfaces first in: the future `patient_relationship` substrate migration. The migration MUST NOT bake "brand" into the primitive name, FK shape, or RLS predicate. Future preflights citing this primitive must use `patient_relationship` vocabulary.

Source: DL-10 doctrine arc; ChatGPT's mid-arc warning that `patient_brand_relationship` would be too narrow.

Binding parent invariant this watch zone protects: MAIN Doctrine lock DL-10 + foundational doc §4 primitive #19 + §7.13.4 admission guardrail.

### 37. Hard-silo / no-shared-identity drift / Extreme 2 (tier 1)

The risk: a brand expansion or new-clinic rollout mints a separate `patients` row for an existing OMNI consumer instead of creating a new `patient_relationship` against the existing identity. The "every brand gets its own patients table" failure mode. Or: a federation roadmap that assumes cross-deployment merger means "everyone gets new patient rows in the merged namespace." This is the per-brand-silo interpretation DL-10 explicitly rejects ("Extreme 2").

Watch for: code paths / preflights / migrations that create new `patients` rows when identity claims (phone / email / DOB / verified-ID) match an existing row in the same namespace. Brand activation work that proposes "the easy thing" is to mint a separate `patients` row. Federation designs that auto-collapse identities across namespaces without explicit consent + audit.

The risk is also subtler: an intake flow that doesn't check for existing `patients` rows in the namespace before creating one. Or an external-line preflight that creates a new `patients` row for every Twilio inbound text without identity-claim-matching against the namespace first.

Surfaces first in: any future brand activation (e.g., a second brand launches on the same OMNI deployment) — the activation MUST reuse existing `patients` rows for identity-claim-matched humans and create a new `patient_relationship` row, not mint parallel patient rows. Also at the first cross-deployment merger.

Source: DL-10 doctrine arc; the per-brand-silo pressure-test against the Mindbody identity-reuse strategy.

Binding parent invariant this watch zone protects: MAIN Doctrine lock DL-10 + Section 1J amendment (single canonical `patients` row per namespace) + foundational doc §7.13 (identity reuse within namespace).

---

## 2026-05-11 late evening addendum (post-DL-11, internal team collaboration messaging)

The DL-11 doctrine arc (landed 2026-05-11 late evening, hours after DL-10) bound the third messaging surface (staff-to-staff internal team collaboration with first-class object attachment, distinct from c2 patient-facing chat and the future external-line preflight). It formalizes the new sibling `internal_collaboration/` (sibling #19) and supersedes the prior §1G.8.8 "reuse messages — no new product" framing. Five new zones watch for drift around these commitments.

### 38. Cram-internal-into-patient-chat drift (tier 1)

The risk: anyone proposing a `from_patient: false, staff_internal: true` flag on `messages`, or a "thread type" column intended to merge internal team conversations into the c2 substrate. The exact anti-pattern the prior §1G.8.8 framing canonized ("reuses `message_thread` + `message_thread_participant` model with a `staff_internal` thread type — no new product"); DL-11 explicitly supersedes and rejects.

Watch for: PRs / preflights / migrations that propose extending the c2 `messages` substrate to carry staff-to-staff communication. The smoking gun is a CHECK constraint adding `staff_internal` as a valid `from_patient` adjacent flag, or a UI design doc proposing "internal notes" inside the patient thread view. Internal collaboration is a parallel substrate (`internal_threads` + family); the c2 substrate stays patient-facing only.

Surfaces first in: any future commit touching `messages` schema or `lib/messages/`. Provider mirror parallel-track design is the second likely surface.

Source: DL-11 doctrine arc; the user's Teams/Epic-Secure-Chat-quality framing made the prior §1G.8.8 reuse-messages framing structurally untenable.

Binding parent invariant this watch zone protects: MAIN Doctrine lock DL-11 + §1G.8.8 SUPERSEDED-AND-REPLACED-BY-DL-11 banner + foundational doc §7.14 + sibling #19 `internal_collaboration/`.

### 39. Object-attachment-via-jsonb / single-context-only drift (tier 1)

The risk: using `messages.metadata` or `internal_thread_messages.metadata` to encode polymorphic object attachment instead of the typed `internal_thread_object_links` child table; OR limiting threads to a single `(context_type, context_id)` pair on the thread row only (no child link table) when multi-object attachment is doctrinally required. A single thread frequently spans multiple objects (patient + lab_order + treatment_order + clinical_visit + patient_document); a jsonb `object_refs[]` or single-context-only model forecloses this.

Watch for: substrate migrations introducing `internal_threads` with only `primary_context_type` + `primary_context_id` and no child link table; or preflights proposing `internal_thread_messages.metadata.object_refs[]` jsonb arrays. Same primitive-fragmentation shape as radar zone 28 (metadata jsonb leakage of typed state).

Surfaces first in: the future `internal_collaboration/` substrate migration. The migration MUST include `internal_thread_object_links` as a first-class table from the start.

Source: DL-11 doctrine arc; ChatGPT's mid-arc warning that multi-object attachment must be first-class.

Binding parent invariant this watch zone protects: MAIN Doctrine lock DL-11 + foundational doc §7.14.3 (object-attachment polymorphism is first-class and multi-object).

### 40. Cross-relationship internal-thread leakage (tier 2)

The risk: internal threads about a patient surfacing in care teams from other relationships (Brand B staff seeing Brand A internal discussion about a shared patient) without explicit cross-relationship permission. DL-10 follow-on; internal_collaboration threads attaching a patient inherit DL-10's relationship-scoping.

Watch for: queries / RLS predicates / UI surfaces that return internal threads keyed only on `patient_id` without filtering by `patient_relationship_id`. Cross-relationship visibility is admissible but must be explicit, permissioned, consent-aware, audited per DL-10's binding clause.

Surfaces first in: future `internal_collaboration/` substrate migration RLS predicates; provider workspace queue surfaces that aggregate "all threads about my patients."

Source: DL-11 doctrine arc; DL-10 relationship-scoping carries forward to internal_collaboration.

Binding parent invariant this watch zone protects: MAIN Doctrine lock DL-10 + DL-11 + foundational doc §7.14.7.

### 41. Patient-timeline pollution from internal mentions / activity (tier 1)

The risk: `patient_timeline_events` rows written for internal team activity — staff @-mentions, thread participant adds, internal-only sensitivity changes, thread creation events linked to a patient — when no patient-record state change occurred. Patient timeline is patient-facing memory (per §1H + primitive #6); it should reflect what happened TO or BY the patient, not what staff did internally.

Watch for: orchestrators that emit `patient_timeline_events` rows on mention / participant / sensitivity / thread-create events. Mentions emit `outbound_jobs.send_in_app` + `audit_events` only; patient timeline writes ONLY when the thread produces an explicit patient-record state change (patient-visible message via c2; chart update; clinical assertion; `patient_action_items` row creation via c4 future).

Surfaces first in: the future `internal_collaboration/` substrate migration's orchestrator design. Mention-fan-out implementation is the specific risk point.

Source: DL-11 doctrine arc; ChatGPT's correction that mentions must not pollute the patient timeline.

Binding parent invariant this watch zone protects: MAIN Doctrine lock DL-11 + foundational doc §7.14.6 + substrate primitive #6 (longitudinal operational memory; patient_timeline_events is patient-facing memory).

### 42. Staff-directory / on-call / personal-contact drift (tier 2)

The risk: features built on assumed staff-directory + on-call substrate that doesn't yet exist (e.g., "@mention triggers on-call escalation routing" before the on-call rotation primitive lands); or personal cell phone visibility leaking via UI surfaces without capability/policy gates (everyone sees everyone's personal cell forever). DL-11 names the staff-directory / presence / on-call dependency as a non-foreclosure clause; the future doctrine arc (DL-12 candidate, naming TBD) lands when first concrete pressure surfaces.

Watch for: PRs / preflights / UI designs that:
- Assume on-call rotation substrate exists (it doesn't beyond §1G.7's operational-state enum)
- Display personal cell phone numbers in a staff directory UI without explicit capability gates per-access
- Use staff.phone_number column without distinguishing work vs personal contact
- Build @mention escalation routing logic that requires on-call coverage knowledge

Until the future doctrine arc lands, internal_collaboration features that *depend* on directory / on-call / presence beyond what §1G.7 already gives (operational-state enum on `staff_profiles`) must defer or stub explicitly. Personal contact visibility is capability/policy-gated, not assumed global.

Surfaces first in: the future internal_collaboration UI surface design when staff-directory / on-call features are tempted.

Source: DL-11 doctrine arc; ChatGPT's correction + user's "Teams-shit" framing about company directory + presence + cell phone visibility.

Binding parent invariant this watch zone protects: MAIN Doctrine lock DL-11 §7.14.17 non-foreclosure clause + Section 1D capability discipline + future DL-12 candidate doctrine arc.

---

## 2026-05-12 addendum — DL-12 watch zones (25 zones: 43-67)

*Dated 2026-05-12 early morning, post-DL-12 doctrine landing. Watch zones for DL-12 (thread + participant lifecycle as cross-substrate discipline + fax canonical placement + 28 foundational clarifications across 7 pressure-test rounds). Each zone has a tier classification, a smoking-gun signal, a forbidden-per cross-link, and the binding parent invariant. The 28 foundational clarifications are bound; these 25 zones are the watch list for drift.*

### Zone 43 — Staff deactivation orphans open threads/tasks (tier 1)

Staff deactivated without reassignment of open assigned work; thread / task ownership tuple has dead `case_owner`; OR owner cardinality assumed individual-only without team/queue/role/coverage-group fallback. Smoking gun: a deactivation flow that revokes access without firing the §1G.1 reassignment check; or `message_threads.case_owner = deactivated_staff_id` with no fallback per §1G.1(b) owner cardinality.

Forbidden per: DL-12 invariant 1 staff deactivation lifecycle + §1D.3(a) + §1G.1(b).

### Zone 44 — True-delete of thread / message / participant (tier 1)

Forbidden in healthcare retention. Status transitions to `archived` or `entered_in_error` (admin/compliance only via §1J.9 break-glass); IT/compliance recovery never rewrites authorship and never impersonates the original author. Smoking gun: a DELETE statement on `messages` / `message_thread_participants` / `internal_threads` / `internal_thread_messages` in application code.

Forbidden per: DL-12 invariant 8 + §1V.10(a) + primitive #1.

### Zone 45 — Thread title source ambiguity (tier 2)

System-derived title gets edited to user-set without audit/provenance; or persistent-group thread title gets user-edited overwriting group-derived name. Title source must be explicit + tracked.

Forbidden per: DL-12 invariant 7 + foundational §8.1 sub-clause 6.

### Zone 46 — Fax treated as new sibling OR stuffed into internal_collaboration (tier 2)

Proliferation prevention (parallel to zone 29 specialty-table proliferation) + cross-surface contamination (parallel to zone 38 cram-internal-into-patient-chat). Fax is composed-from-primitives per §5.3(a) sibling-boundary guard.

Forbidden per: DL-12 fax canonical placement + foundational §5.3(a) + primitive #10 + primitive #16.

### Zone 47 — Thread proliferation / wrong-granularity drift (tier 2)

Multiple internal threads opened for the same lab / order / patient concern without object linkage, merge / split / link policy, or canonical context. Elite-ops messaging dies from thread sprawl. Doesn't need to solve merge/split now; names the risk so future internal_collaboration UI design accounts for thread-discoverability + thread-deduplication + canonical-context guidance.

Forbidden per: DL-12 invariant 29 future merge/split/link forward-pointer + DL-11 + DL-8.

### Zone 48 — Internal-thread-as-canonical-state drift (tier 1)

A thread is treated as the source of truth for an order / Rx / lab approval / billing exception / clinical decision / adverse event when the canonical state belongs in the order / Rx / lab / action_item / clinical_visit substrate per DL-7 structured-first authoring + DL-11 boundary discipline. Smoking gun: a code path that reads "Dr X approved this" from `internal_thread_messages.body` text instead of from the order's `approved_at` / `approved_by_staff_id` columns. Threads coordinate around state; they do not own state.

Forbidden per: DL-12 invariant 11 threads-coordinate-never-canonical-state + DL-7 + §7.14.10(a).

### Zone 49 — AI silently sends patient-facing message without template / disclosure-policy gate (tier 1)

AI participation in a thread proposes or drafts a patient-facing message and the system sends it WITHOUT routing through `repo/templates/` + `outbound_jobs` + Section 1Q template governance + primitive #3 disclosure-policy gate. AI proposes, humans (or rules + capability checks) authorize the send; patient-facing send path stays owned by §1Q + primitive #13. Smoking gun: an internal_thread orchestrator that calls `postPatientMessage` directly on an AI-drafted body without a template-render gate, capability check, or human approval step.

Forbidden per: DL-12 invariant 14 AI participation bounds + primitive #11 + §1Q.14.1.

### Zone 50 — System / automation / AI-created thread without provenance fields (tier 1)

An automation or rule or AI proposal creates a thread without populating `created_by_actor_type` (per primitive #1 actor taxonomy) or `trigger_source` or `evidence_refs` (via `internal_thread_object_links`) or `reason_code` or `owner_or_team` or `audit_events` row. Unowned automation-created threads are forbidden — every system-created thread has an owner queue or team at creation. AI-created clinical/safety/Rx threads also carry an explicit `human_review_required` flag per thread class.

Forbidden per: DL-12 invariant 16 + primitive #1 + primitive #11 + §7.14.4.

### Zone 51 — AI thread spam from missing anti-noise controls (tier 1)

Automation/AI-created threads without `dedupe_key` + `cooldown_window` + `severity_threshold` + `ownership_controls`. Smoking gun: same lab result triggers ten parallel "Lab review" threads in five minutes; or AI safety detector fires three threads on the same patient note; or non-deterministic AI trigger auto-creates a high-sensitivity clinical/Rx/safety thread without entering human triage/proposal state first. **High-sensitivity clinical / Rx / safety threads may be auto-created ONLY under approved deterministic trigger policy** OR MUST enter a human triage/proposal state before becoming an active thread.

Forbidden per: DL-12 invariant 16 anti-noise clause + primitive #11 anti-noise discipline + §1N.8(c).

### Zone 52 — AI authorship rewriting (tier 1)

A message authored/sent after a human accepted/edited an AI draft is attributed to AI (`actor_type='ai_assisted'`) instead of to the human (`actor_type='staff_with_ai_assist'` with AI-assist provenance attached via `ai_proposal_id` / `ai_confidence` / `ai_model`). Smoking gun: a portal chat send pipeline records `author_staff_id=null` + `actor_type='ai_assisted'` when a provider clicked "send" on an AI-drafted reply. **Matters legally and clinically** — the provider is the responsible author of any message they accepted/sent; AI is provenance attachment, never authorship rewrite. AI impersonation of staff is a substrate-level boundary violation.

Forbidden per: DL-12 invariant 14 authorship attribution + primitive #1 actor taxonomy + primitive #11 authorship rule.

### Zone 53 — Thread search "everyone-can-search-everything" or 1:1 DMs broadly browsable by ordinary staff (tier 1)

A search/index implementation that lets any staff member browse other staff members' 1:1 DMs or private group threads they are not part of; OR a UI that treats search as a single global toggle ("enable search across all threads") rather than as capability-gated + scope-aware + thread-class-aware filtering. Smoking gun: a search endpoint that returns thread bodies the requesting user has no participant/relationship/object/role authority to read; or a "company-wide thread search" admin toggle with no per-thread-class or per-relationship scoping. Admin/CMO/IT/compliance discovery is a distinct audited break-glass capability — never ordinary search. **Cultural failure mode**: if ordinary staff can browse other people's DMs, conversations flee to text/iMessage/Slack and OMNI loses the operational system of record.

Forbidden per: DL-12 invariant 19 thread search/visibility governance + §1J.12(c) anti-panopticon discipline + primitive #2.

### Zone 54 — Notification preferences silently suppress safety/clinical/critical messages (tier 1)

Patient notification-preference application that treats safety / clinical_required / Rx-critical / billing-critical / appointment-critical / legal-compliance notifications the same as marketing or non-critical, allowing patient mute / quiet-hours / channel-disable to silently drop them. OR staff notification-preference application that lets ordinary mute bypass on-call escalation / safety/adverse-event / CMO escalation / assigned-owner / compliance/admin recovery / unresolved-clinical-blocker overrides. Smoking gun: an outbound dispatcher that checks `patient.notification_prefs.muted=true` and drops a Rx-recall message; or a staff notification router that obeys `staff.dnd=on` for a critical on-call escalation. Preferences ride atop intent + capability + escalation; preferences NEVER silently override critical-message delivery.

Forbidden per: DL-12 invariants 21 + 22 + §1Q.14.1(d) + §1D.3(c).

### Zone 55 — Message edit silently rewrites history (tier 1)

A message edit / correction / retraction implementation that overwrites `messages.body` (or equivalent across substrates) without preserving `original_body` + `editor_staff_id` + `edited_at` + `reason_code` + `audit_events` row. Patient messaging, internal threads, AI drafts, fax notes, and staff DMs all carry potential liability; silent edits destroy defensibility in court / QA / compliance review. Smoking gun: an UPDATE statement on `messages.body` with no insertion into a message_edit_history substrate or audit_events. Patient-facing message correction also must consider §1Q template/disclosure-policy-aware handling — silent rewrite of a sent patient message can mislead about what was actually delivered.

Forbidden per: DL-12 invariant 23 edit-history preservation + §1V.10(c) + primitive #1.

### Zone 56 — Attachment treated as thread metadata blob instead of first-class artifact (tier 1)

A thread implementation that stores photos / PDFs / fax pages / screenshots / lab docs / post-procedure images / OCR'd consent / dictation audio as raw bytes in `messages.body` JSON or in an opaque `messages.attachments` array WITHOUT scan status + file type + uploader staff_id + object link + sensitivity classification + retention class + audit. Smoking gun: a UI upload pipeline that base64-encodes a photo into `messages.body` instead of writing to artifact substrate + referencing via FK. Threads attach/render/preview via reference; raw file safety / OCR / document classification / chart filing lives in canonical artifact substrate.

Forbidden per: DL-12 invariant 24 attachments-as-first-class-artifact + foundational §5.3(b).

### Zone 57 — PHI leak via notification preview / lock-screen / SMS companion / search snippet (tier 1)

A notification dispatch pipeline that puts full PHI in lock-screen text / push notification body / email/SMS companion preview / search-result snippet, treating preview content as identical to message body. Smoking gun: a push payload `{title: "Care Team", body: "Your testosterone lab is 1248 ng/dL, abnormal — call ASAP"}`. Preview surface is a separate disclosure surface from message body content; receiving an alert NEVER implies full PHI in the preview. "New message from your care team" may be okay; full content is not.

Forbidden per: DL-12 invariant 25 preview privacy + §1Q.14.1(e) + §1J.12.

### Zone 58 — Queue-routed message treated as "handled" by read receipt (tier 1)

An ops UI / queue implementation that considers a queue-routed message "complete" or "handled" because a queue member's read receipt fired, without producing or linking to a task / `provider_tasking` item AND without recording claim/completion/escalation in the task substrate. **Binds the 9pm-provider-to-front-desk-queue scenario**: provider routes "please order repeat lab" to Front Desk queue → next morning queue member reads it → UI shows "read" → provider assumes it's handled → patient never gets booked. Read receipts (delivered + seen) are messaging state; claimed + completed + escalated are task/work state. A queue message is NOT handled because someone read it. Smoking gun: a queue UI with no claim/complete/escalate buttons, or a back-end that auto-closes queue items on read.

Forbidden per: DL-12 invariant 30 queue-routed work semantics + §1G.6.2 + DL-7 + §1G.1(d).

### Zone 59 — Attachment auto-files to chart without explicit capability-gated disposition (tier 1)

An upload pipeline / classification automation / AI pipeline that takes a screenshot / photo / PDF / fax uploaded to an internal thread and automatically inserts it into the chart / `parsed_intake_documents` filed state / clinical-visit attachments / order/lab/Rx record / adverse-event record WITHOUT an explicit capability-gated disposition action with audit. **Clinical truth pollution risk**: a screenshot in chat is NOT chart truth; auto-filing turns staff coordination context into formal record without deliberate review. Smoking gun: a server-side handler that on upload writes a `chart_documents` row OR a classification AI that auto-promotes thread attachments to chart status without a `dispose(file_to_chart, reason, capability_check)` audited transition. Filing is a deliberate operator action, not an upload side-effect.

Forbidden per: DL-12 invariant 31 three-state attachment lifecycle + §5.3(b.i) + DL-7.

### Zone 60 — OMNI-native markup overwrites original source artifact (tier 1)

An OMNI-internal markup/annotation tool that destructively writes annotations BACK onto the original artifact bytes / replaces the source file / updates `parsed_intake_documents.file_url` in place rather than creating a derived annotation artifact / annotation layer with author + timestamp + linked source + audit. **Distinguishes from externally flattened iOS upload**: an already-flattened marked-up image received from iOS IS the source artifact (OMNI never had the pre-markup original — doctrine does not require reconstructing it). But OMNI-native markup, where OMNI DOES own the source, must preserve original + create derived annotation. **PDFs always stricter** — original PDF always preserved regardless of markup mode. Smoking gun: an in-app PDF editor that calls PUT on the original PDF URL instead of creating an annotation layer / derived PDF. Annotation never overwrites original; matters for legal/audit/clinical defensibility.

Forbidden per: DL-12 invariant 32 iOS-vs-OMNI-native markup + §5.3(b.ii) + §5.3(b.iii).

### Zone 61 — Patient-facing media sent without scan / audit / PHI-classification / capability-gate (tier 1)

A patient-chat upload pipeline that treats photos / screenshots / annotated images / PDFs / video as casual iMessage-style attachments WITHOUT scan status + sender attribution + PHI/privacy classification + relationship-scope check + retention class + capability check on the sender role. Smoking gun: a patient chat upload handler that writes file bytes to storage and references in `messages.body` without writing to artifact substrate AND without virus scan AND without PHI classification AND without sender capability check. Patient-facing media is patient-visible communication record — defensibility, malware safety, and disclosure-policy compliance require stricter handling than internal staff DMs. **Automated / AI-generated patient-facing media must additionally route through §1Q template/disclosure governance** (overlaps with zone 49 AI silent patient-send; this zone covers the broader category of un-governed media sends).

Forbidden per: DL-12 invariant 34 patient-facing-media-parity-with-stricter-discipline + §5.3(b.v).

### Zone 62 — Patient-facing thread substrate hardcoded to specialty-group (tier 1)

A schema / UI implementation that assumes every patient-facing thread is a `care_team` / specialty-group thread, with no `thread_kind` parameterization to admit `provider_1:1` / `front_desk` / `esthetician` / `injector` / `billing` / `support` / `post_procedure` / `location_team` / `role_queue` / `on_call`. **Medspa-blind failure mode**: a medspa platform that can only offer "Care Team Chat" but cannot offer "Message your injector directly" / "Message Front Desk" / "Message your esthetician" loses the natural daily-care UX patients and staff expect. Smoking gun: a `message_threads` schema with no `thread_kind` column or with a hardcoded enum that only admits `care_team`; or a thread-creation API that ignores requested thread_kind. Specialty-group is ONE routing shape, NOT the substrate.

Forbidden per: DL-12 invariant 35 thread-kind parameterization + §1G.3(c) + DL-11.

### Zone 63 — 1:1 patient thread orphans when staff off-duty / on-vacation / on-leave (tier 1)

A 1:1 thread implementation (`provider_1:1` / `esthetician` / `injector`) that does NOT admit backend coverage + escalation + role-queue + audit when the named staff member is temporarily unavailable. **Distinct from zone 43** (staff deactivation orphans — permanent) — this zone covers TEMPORARY unavailability (vacation / sick day / off-shift / weekend / after-hours / coverage rotation). **Failure mode**: patient messages "my esthetician" who is on vacation; UI suggests 1:1; backend has no coverage rule; message sits unread for two weeks; patient feels ghosted; safety/clinical issue could fall through. Smoking gun: a `message_threads` row with `case_owner=specific_staff_id` and no fallback `coverage_owner_team_id` / `coverage_owner_queue_id` / `coverage_owner_role`; or a notification router that fires only to the named staff member without a coverage cascade. 1:1 UX must preserve coverage + escalation + role-queue fallback.

Forbidden per: DL-12 invariant 35 backend coverage under 1:1 UX + §1G.6.2 + §1G.1(b).

### Zone 64 — Staff joins patient thread without authorization (tier 1)

A curious staff member self-joins a patient-facing thread without queue/team membership / coverage role / assignment / escalation / explicit capability / admin-CMO-reviewer authority / break-glass. **Failure mode**: any staff member with portal access can self-add to "Sarah's HRT thread" out of curiosity, expanding PHI access beyond the legitimate care team. Smoking gun: a `message_thread_participants` insert endpoint with no authorization check (no capability check, no queue/team membership check, no coverage check); or a UI "join thread" button visible to all staff regardless of relationship to that patient/care-team. Staff entry must flow through one of the legitimate paths (derived assignment / manual operator add capability-gated / claim from queue / escalation / coverage substitution / break-glass). Pairs with anti-panopticon (zone 53 covers SEARCH; this zone covers JOIN/MEMBERSHIP).

Forbidden per: DL-12 invariant 36 internal-membership-vs-patient-visible-roster + §1J.12(f) staff-self-join discipline.

### Zone 65 — Internal-only participants silently exposed in patient-visible roster (tier 1)

A patient-facing thread UI / API that exposes every backend internal participant (assigned provider + covering provider + MA + front desk + ops + CMO reviewer + admin + on-call role + specialty queue + lurking observers) to the patient WITHOUT applying display policy. **Failure mode**: patient opens HRT thread and sees a list of 12 staff members including admins, CMO observers, and lurking coverage groups — feels surveilled and confused, asks why so many people are reading their messages. Smoking gun: a patient-facing roster API that returns the raw `message_thread_participants` list without policy filtering, OR a patient UI that lists every author's full name regardless of policy (when policy says "Care Team" alias should be used). Display policy admits four modes: named staff / role-title / team alias / "Care Team" / "Front Desk" / "Peptides Care Team" label — per thread class + relationship + clinic preference. Pair this with zone 64: zone 64 prevents unauthorized JOIN; zone 65 prevents unauthorized DISPLAY of authorized participants.

Forbidden per: DL-12 invariant 36 + §1J.12(e) patient-visible-roster display policy.

### Zone 66 — Thread membership hardcoded in thread instead of derived from care-team/coverage layer (tier 1)

A `message_threads` schema or thread-creation flow that bakes default provider / NP / MA / front desk participation directly into the thread row at creation time, without consuming a care-team / coverage assignment layer. **Failure mode**: provider quits; thread row still references the departed provider as primary owner; coverage rule never re-derives because the thread was the source of truth instead of the consumer; patient messages go to a dead inbox. OR: patient moves states and triggers Hims-style geography/licensure constraint, but thread still references the wrong-state provider because the geography rule was never consulted. Smoking gun: a `create_patient_thread` function that takes `(patient_id, provider_id)` and inserts directly without consulting `care_team_assignment` / `coverage_schedule` / `licensure_constraint` / `on_call_rotation` / `staff_active_status`. Thread membership must be DERIVED from the care-team/coverage layer; thread is consumer; care-team layer is source of truth. Full staffing-assignment substrate is a future deliverable, but the consumption contract is binding now.

Forbidden per: DL-12 invariant 37 care-team/coverage-layer-drives-derived-membership + §1G.3(d).

### Zone 67 — Staff use external screenshot/copy-paste to unmanaged AI for patient-context drafting (tier 1)

Staff continue the RingCentral/SMS/patient-portal screenshot-into-external-ChatGPT workflow for polishing reply drafts because OMNI's in-app AI drafting surface is missing, slower, or worse than the workaround. **PHI exfiltration at scale** — patient identifiers, clinical context, and message content flow into unmanaged AI tools without BAA, audit, retention controls, or capability gates. **Smoking gun**: usage data showing staff copy/paste of OMNI thread content into web AI tools; OR staff Slack/Teams channels named "ChatGPT-help-with-replies"; OR audit logs of patient PHI appearing in non-OMNI AI services; OR product feedback "the AI suggestions in OMNI aren't as good as ChatGPT so I just paste in." **Design rule binding: "compliant workflow must be easier than the workaround"** — OMNI must provide in-app PHI-safe context-aware AI drafting that uses authorized thread context directly, with capabilities at least matching what external AI provides (summarize / polish / propose patient-safe reply / suggest next action / clinically cautious / warmer-shorter-safer). Final send remains human-approved per actor-attribution rules; accepted drafts authored as `staff_with_ai_assist` per primitive #1. If OMNI fails this rule, staff route around the platform and the entire HIPAA/compliance posture is performative.

Forbidden per: DL-12 invariant 39 AI Response Assist replaces screenshot-into-external-AI + §1N.8(e) + primitive #11.

### Zone 68 — Single phone-number rail shared by marketing + clinical/operational SMS (tier 1, preflight-inherit)

A clinic concentrates marketing campaigns and clinical/operational SMS (Rx, lab follow-up, appointment, billing, safety, scheduling) onto a single rail-level number / sender ID / `org_communication_endpoints` row. **Carrier-deliverability failure mode**: marketing opt-outs and spam-report rates degrade carrier reputation for the whole number; clinical / Rx-critical / billing-critical / safety messages on the same rail then ride the marketing-damaged reputation and start landing in spam or getting carrier-filtered — patient safety routed through a deliverability tier whose decay was caused by promo traffic. **TCPA + A2P 10DLC posture inflated**: every send on the rail must clear the higher marketing-consent bar even when transactional. **Patient-UX collapse**: patient saves a single contact for "$50 off Botox" and "your biopsy came back abnormal" — promo mute on the contact silently muffles clinical context. **Smoking gun**: an `org_communication_endpoints` (or Twilio messaging-service) row with no per-endpoint `intent_class` field; OR a single number wired into both the marketing campaign sender and the clinical send dispatcher; OR `patient_consents.marketing_sms=false` honored only at the template layer while the rail itself sends both classes; OR an inbound-routing rule that routes both marketing-reply and clinical-reply to the same triage queue. **Default recommendation (medspa-scale)**: two-number minimum (one clinical/operational + one marketing); admit N-number at scale (per-brand / per-location / per-campaign-tier / per-specialty) without rebinding. **Preflight inheritance**: external-line preflight must bind an `org_communication_endpoints` (or equivalent) substrate carrying per-endpoint intent class + default ops queue + consent requirements + deliverability tier + inbound-routing rules; marketing-inbound routes to marketing ops triage with "Reply STOP to opt out" UX framing; clinical-inbound routes to care-team triage with patient-link workflow; per-endpoint inbound UX framing differs by intent class. **Doctrine neutrality**: number count itself (1 vs 2 vs N) is commercial/deliverability/compliance policy, NOT a substrate decision — doctrine stays neutral — but per-endpoint intent-class typing + operational-state isolation IS substrate, and the single-shared-rail design is forbidden by this zone even at smallest scale because it concentrates deliverability risk onto safety-critical messages.

Forbidden per: external-line preflight (forthcoming) inheriting DL-12 invariant 21 (patient notification preferences + criticality override) + §1H.4 (marketing carve-out) + §1Q.14.1(d) (intent-class governance) + §1K.11 (per-intent consents and opt-outs) + DL-10 §7.13.4 (endpoint admission guardrail — endpoint becomes a `patient_relationship` boundary when it owns distinct operational state) + foundational §7.14 substrate-typing discipline. Number count is policy; intent-class typing + per-endpoint operational-state isolation is substrate.

### Zone 69 — External-line rail-bypass drift (tier 1; DL-13 binding — added 2026-05-12)

External-communications substrate becomes Twilio-shaped (or any single vendor's shape): vendor IDs as substrate primary keys, vendor enum values as substrate status columns, vendor-specific columns leaking onto canonical tables, vendor SDK imports inside core substrate code outside the adapter boundary. **Smoking gun**: an `external_conversation_messages` table with a `twilio_message_sid` (vendor-named) column instead of generic `provider_message_sid`; OR Twilio's exact status enum (`queued`/`accepted`/`scheduled`/`sending`/`sent`/`receiving`/`received`/`delivered`/`undelivered`/`failed`/`read`) copied verbatim as the substrate-canonical enum without translation through the adapter; OR Twilio SDK import in `lib/communications/` or `lib/external-communications/` (anywhere outside `lib/external-rails/twilio/`); OR business logic (8-gate, consent check, identity resolution) running INSIDE the adapter instead of in the substrate orchestration layer above it. **Future migration off Twilio becomes rewrite, not migration. Multi-vendor (per-region rails, per-channel rails, fallback rails) becomes impossible.** Substrate must carry generic `provider_*` columns (`provider_message_sid`, `provider_status`, `provider_endpoint_id`, `provider_voice_call_sid`, `provider_fax_sid`); vendor specifics live in `provider_metadata jsonb` only; vendor code confined to `lib/external-rails/<provider>/` adapter boundary; adapter responsibility is translation only (vendor wire ↔ substrate rows); the broader DL-13 vendor-confined-adapter pattern applies to other domains (labs / payments / EHR-export / pharmacy) via their own adapter boundaries inside their respective sibling directories — NOT all under `lib/external-rails/`.

Forbidden per: DL-13 invariant 1 + foundational §4.B primitive #10 + §5 sibling #20 + §5.3(c) + §7.13.13.1 + ADR §7.16 REJECTED alternative 1.

### Zone 70 — Vendor-as-contact-source drift (tier 1; DL-13 binding — added 2026-05-12)

OMNI reads from a vendor address book / contact store / participant store (Twilio Conversation participants, RingCentral contact records, etc.) to resolve OMNI patient identity. **Smoking gun**: a webhook handler that looks up the inbound sender's "Twilio Contact ID" against an OMNI `twilio_contact_id` foreign key on `patients` or `contact_identities`; OR an identity-resolution function that fetches vendor contact metadata as the canonical name source for an inbound message; OR a manual-patient-creation flow in scheduling that pushes the patient phone number INTO Twilio (or Stripe, or any vendor) AND THEN reads back the vendor-generated contact ID as the OMNI identity primary key. Vendor stores reflect only vendor-side activity and cannot represent OMNI's DL-10 multi-relationship-per-person model; vendor contact records cannot carry consent state, intent-class scoping, or relationship boundaries. **OMNI is canonical for identity / contact data; vendor stores are local convenience for vendor-internal use only — NEVER authoritative.** Manual patient/account creation publishes contact handles into OMNI; vendor adopts; OMNI never reads from vendor stores to resolve identity. Pattern generalizes to payment processors / lab vendors / pharmacy vendors / EHR-export vendors.

Forbidden per: DL-13 invariant 2 + foundational §4.B primitive #5 + §7.13.13.2 + MAIN §1J.13 + ADR §7.16 REJECTED alternative 2.

### Zone 71 — `chat_status` / `lead_stage` / `display_state` independent-field drift (tier 1; DL-13 binding — added 2026-05-12)

A migration adds an independent mutable column like `chat_status` / `lead_stage` / `display_state` / `inbox_row_label` / `conversation_state_chip` to `external_conversations` / `contact_identities` / `messages` / `message_threads`. **Smoking gun**: `ALTER TABLE external_conversations ADD COLUMN chat_status text` (or any of `lead_stage`, `display_state`, `current_label`, `inbox_status_text`); OR a UI codepath that writes to such a column when an appointment is booked or a care_program is activated; OR a query that reads `chat_status` instead of computing the chip from substrate state (contact_identities + patient_relationships + appointment state + care_programs + intake state + patient_consents + open action items + billing state + clinical/safety flags). Display state drifts from substrate truth as backend changes; operators see "Established Patient" on a conversation whose relationship was disengaged last week; status chips lie; trust erodes. Display identity + status chips are **computed projections at query time**. Projection-cache tables admissible per DL-8 IF justified by performance, but cache has clear invalidation contract and is derived state, NEVER source of truth. Pattern generalizes to dashboards, reports, queue badge counts — anywhere derived UI state is tempted to materialize as independent columns.

Forbidden per: DL-13 invariant 5 + MAIN §1V.11 + foundational §7.13.13.5 + ADR §7.16 REJECTED alternative 4.

### Zone 72 — Multi-brand cross-leakage drift (tier 1; DL-13 binding — added 2026-05-12)

Brand A operator sees Brand B's external conversations (or vice versa) without explicit endpoint access scope + relationship scope authorization. **Smoking gun**: an inbox query without `org_communication_endpoint` access-scope filter; OR a "all conversations" admin surface that ignores brand_id / practice_entity_id / endpoint access scope; OR a shared backend + separated-ops configuration where the separation is enforced only at UI layer, not at substrate query layer; OR a STOP / opt-out / consent state silently shared across brands when patient_consents are intended brand-scoped per intent_class + endpoint. Multi-brand operating modes are first-class per DL-13: 4 brand modes × 3 backend modes = 12 admissible combinations. Substrate must admit all 12 (shared backend + shared ops AND shared backend + separated ops AND separate entities) without hardcoding either pattern. The Cultured / Evo scenario (sibling brands, side-by-side front desk, possibly separate ops, possibly shared) is operationally normal — cross-leakage is the failure mode, not the configuration itself.

Forbidden per: DL-13 invariant 3 (settings precedence layer 3 endpoint policy) + MAIN §1D.4(c) + §1J.13(e) + DL-10 §"$500M-state non-foreclosure clause".

### Zone 73 — STOP-cascading-across-intents drift (tier 1; DL-13 binding — added 2026-05-12)

A "STOP" reply from a patient to a marketing send silently opts out clinical communication (or vice versa); a billing STOP silently opts out appointment confirmations; a clinical STOP silently opts out safety escalation messages. **Smoking gun**: a STOP handler that updates `patient_consents.all_sms = false` instead of `(recipient, intent_class, endpoint)` tuple-scoped consent; OR a downstream send filter that checks "any STOP on this number" instead of "STOP for this intent class on this endpoint"; OR a missing audit row distinguishing intent-class scope of the opt-out. STOP is **intent-class-scoped + channel-scoped + endpoint-scoped by default**; cross-channel / cross-intent STOP requires explicit reciprocal logic ("STOP ALL" keyword detection per carrier policy, or operator confirmation + audit). A patient may legitimately want to opt out of marketing while keeping clinical communications; the substrate must support this. The 8-gate (gate 3 STOP/HELP suppression) checks the tuple-scoped state; failure to respect intent-class scoping is a TCPA / patient-trust failure mode.

Forbidden per: DL-13 invariant 4 (8-gate gate 3) + MAIN §1Q.14.2(c)+(d)+(e) + DL-13 settings precedence layer 1 + ADR §7.16 REJECTED alternative 7.

### Zone 74 — Display projection drift from substrate (tier 2; DL-13 binding — added 2026-05-12)

A projection-cache (admissible per DL-8 for performance) silently becomes the source of truth instead of the substrate. **Smoking gun**: a `conversation_display_cache` table whose writes happen at UI mutation time rather than from substrate event triggers; OR a stale invalidation contract (cache rows persist after substrate state changes; no event-driven invalidation; nightly refresh assumed but not implemented); OR queries reading from cache when substrate is the canonical state for the question being asked; OR a cache that grew to carry additional state fields not derivable from substrate. Projection-cache is admissible IF justified by performance, but cache invalidation must be explicit, event-driven, and tested. Display state must remain ultimately derivable from substrate; the substrate is the source of truth. Pattern variant of zone 71 (zone 71 = independent column on conversation/contact/message; zone 74 = cache table that drifted into independence).

Forbidden per: DL-13 invariant 5 + foundational §7.13.13.5 + DL-8 admission criteria.

### Zone 75 — Settings-precedence inversion drift (tier 1; DL-13 binding — added 2026-05-12)

A lower-precedence settings layer suppresses a higher-precedence layer: user mute silently suppresses safety escalation; device preference suppresses on-call escalation; endpoint policy overrides compliance consent; queue policy overrides legal hold. **Smoking gun**: a notification routing function that checks user mute BEFORE checking safety / on-call / escalation overrides; OR a marketing send dispatcher that consults endpoint policy "marketing allowed" without checking patient consent STOP state first; OR a quiet-hours policy that suppresses safety/critical messages without an override branch; OR a code path where `user_preferences.muted = true` causes the function to return without consulting capability + on-call + escalation state. Six-level precedence is binding: **(1) Law / compliance / consent** > **(2) Safety / clinical criticality** > **(3) Endpoint policy** > **(4) Queue policy** > **(5) User preferences** > **(6) Device / client preferences**. Lower layers may NEVER override higher layers. Override list (per MAIN §1D.3(c)): on-call escalation, safety / adverse-event, CMO escalation, assigned-owner-active-state, compliance/admin recovery, unresolved-clinical-blocker.

Forbidden per: DL-13 invariant 3 + MAIN §1D.4 + §1D.3(c) + foundational §7.13.13.3 + ADR §7.16 REJECTED alternative 10.

### Zone 76 — Endpoint-policy-via-jsonb drift (tier 2; DL-13 binding — added 2026-05-12)

Endpoint routing / business hours / voicemail policy / forwarding rules / blocked-trusted lists / intent class are stuffed into an `org_communication_endpoints.metadata jsonb` column instead of structured substrate columns. **Smoking gun**: a `metadata` blob carrying nested keys like `{business_hours: {...}, voicemail_greeting_url: ..., forwarding_after_hours: ..., blocked_numbers: [...], intent_class: "..."}` instead of dedicated columns + child tables; OR query patterns like `WHERE metadata->>'intent_class' = 'marketing'` instead of `WHERE intent_class = 'marketing'` (indexed); OR validation logic at write time absent because jsonb is unstructured. Endpoint policy is first-class substrate; structured columns enable indexing, querying, audit, validation, schema evolution. JSONB is for genuinely vendor-specific extension fields (`provider_metadata`) only. Pattern variant of historical `messages.metadata` anti-pattern (zone 28).

Forbidden per: DL-13 invariant 1 (rail-agnostic substrate as STRUCTURED substrate) + MAIN §1G.12 + ADR §7.16 REJECTED alternative 11 + zone 28 cross-link.

### Zone 77 — External-line voicemail / MMS / annotated-image artifact auto-filing-to-chart drift (tier 1; DL-13 + DL-12 binding — added 2026-05-12)

Externally-received artifacts (voicemail audio / transcript, MMS photos / videos, annotated images, PDFs) auto-file to the patient chart upon contact-identity link to a patient_relationship. **Smoking gun**: a projection codepath that, on `contact_identities` → `patient_relationship` link, automatically creates `patient_documents` rows OR `clinical_attachments` rows from prior external_conversation_artifacts WITHOUT capability gate + audit + reason code + explicit operator action; OR an "auto-attach all to chart" feature flag enabled by default; OR voicemail transcripts treated as chart-fileable notes without provider review. The 5-disposition pattern (per DL-12 invariant 31 extension) is binding: **link / attach / chart_file / safety_task / reject_spam**. Chart filing requires explicit capability-gated step (state-2 → state-3 transition per foundational §5.3(b.i)); projection links the contact identity to the patient, but chart filing is a separate operator action. Auto-filing externally-received artifacts is clinical truth pollution (sibling of zone 59 — attachment auto-files to chart without explicit disposition).

Forbidden per: DL-13 + DL-12 invariant 31 5-disposition extension + MAIN §1P.15 + foundational §5.3(b.i) + zone 59 cross-link.

### Zone 78 — AI-as-participant drift on external conversations (tier 1; DL-13 binding — added 2026-05-12)

AI directly sends external-line messages without human approval or deterministic-policy gate; AI impersonates staff identity or patient identity on external rails; AI authorship rewrites a sent message's `author_staff_id` after send; AI bypasses the 8-gate by claiming "AI judged it safe to send." **Smoking gun**: an outbound dispatcher that sends an AI-drafted SMS without staff click-to-send AND without rule/template + 8-gate; OR an `external_conversation_messages.author_staff_id` set to an "AI assistant" pseudo-staff row; OR an AI-orchestration flow that calls the rail adapter directly bypassing the 8-gate orchestration layer; OR a UI that presents AI-drafted messages as "from Dr. X" without `staff_with_ai_assist` attribution + AI provenance fields; OR a feature flag enabling AI autosend on external rails with "AI confirmation" replacing one of the 8 deterministic gates. AI is NEVER a thread participant or first-class authoring identity on external_conversations. External sends use three actor types: `staff` (manual), `staff_with_ai_assist` (human approved + sent AI draft), `system` / `automation` (deterministic rule/template per 8-gate). **`ai_assisted` alone is NOT admitted for external-line send.** AI Response Assist drafts must transition to human-approved or deterministic-policy-approved before send. AI judgment is not a substitute for any of the 8 deterministic gates.

Forbidden per: DL-13 invariant 4 + DL-13 "rejected anti-pattern: AI-as-participant on external conversations" + MAIN §1N.9 + §1Q.14.2 + foundational §4.B primitive #11 + zone 51 cross-link + zone 67 cross-link + ADR §7.16 REJECTED alternatives 5, 8.

---

## How to use this radar

- **Re-read before**: provider dashboard work, task runtime, lifecycle automation expansion, broad send-policy rollout, the moment 10-20 typed Rules / Templates have shipped.
- **Do NOT** use this document to block narrow mechanical commits. A typo fix or a single-rule migration does not require a radar review.
- **When a zone activates** (a real symptom appears), write a focused ADR or amend the relevant system map section. Do not expand this radar with the new specifics. The radar names risks; ADRs and the map name resolutions.
- **Add a new zone only** when something becomes a probable failure mode that does not already match an existing entry. Drift here matters too — the radar is most useful when it stays tight.

---

*End of radar. Dated 2026-05-08. If a future re-pass produces a meaningfully different list, write a v2 alongside this file rather than editing it; the snapshot is more valuable than the perfect-current-list.*
