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

## How to use this radar

- **Re-read before**: provider dashboard work, task runtime, lifecycle automation expansion, broad send-policy rollout, the moment 10-20 typed Rules / Templates have shipped.
- **Do NOT** use this document to block narrow mechanical commits. A typo fix or a single-rule migration does not require a radar review.
- **When a zone activates** (a real symptom appears), write a focused ADR or amend the relevant system map section. Do not expand this radar with the new specifics. The radar names risks; ADRs and the map name resolutions.
- **Add a new zone only** when something becomes a probable failure mode that does not already match an existing entry. Drift here matters too — the radar is most useful when it stays tight.

---

*End of radar. Dated 2026-05-08. If a future re-pass produces a meaningfully different list, write a v2 alongside this file rather than editing it; the snapshot is more valuable than the perfect-current-list.*
