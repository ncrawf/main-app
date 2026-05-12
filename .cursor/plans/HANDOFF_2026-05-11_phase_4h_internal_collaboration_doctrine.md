# HANDOFF — Phase 4H internal team collaboration messaging doctrine (DL-11)

**Date:** 2026-05-11 late evening
**Status:** CLOSED. DL-11 arc complete. Doc-only; no migration; no application code. The seven binding doctrine docs preserve the full nuance of the staff-to-staff messaging architecture — the third messaging surface, distinct from c2 patient-facing chat and the future external-line preflight. Internal team collaboration is now a first-class sibling (sibling #19 `internal_collaboration/`) instead of a `staff_internal` flag on `messages`.

**Provenance:** triggered by a follow-on conversation after DL-10 + the c2 chat-rendering arc shipped earlier on 2026-05-11. The user (with ChatGPT cross-checking) named elite-level Teams / Epic Secure Chat / iMessage quality for internal staff collaboration — threaded discussion, mentions, multi-object attachment (patient + lab + order + appointment + document), group chats, 1:1 DMs, patient-less institutional-memory threads, rich-media support. Existing §1G.8.8 had named the surface but mis-bound it to "reuse `messages` with a `staff_internal` thread type — no new product." DL-11 overturns that framing.

---

## Why this handoff exists

§1G.8.8 in MAIN had named "Ops/staff messaging channel (provider ↔ ops; not patient-facing)" as a feature surface but had mis-bound it as a flag on `messages` instead of as its own substrate. The user's vision required substantially more — group chats (billing / front desk / on-call), 1:1 DMs, patient-less institutional memory, first-class object attachment that admits a thread linking patient + lab + order + clinical_visit + document, rich-media (screenshots, markups), mentions with notification routing, sensitivity tagging. Reusing the c2 `messages` substrate for staff-to-staff collaboration would either pollute c2 with staff-only audit / access / lifecycle fields OR strip internal collaboration of features it needs.

The doctrine arc landed DL-11 to fix it: three architecturally distinct messaging surfaces, internal collaboration as its own sibling (sibling #19), parallel substrate (`internal_threads` + family), first-class multi-object attachment, mention semantics that don't pollute patient timeline, relationship-scoping per DL-10, composition with `provider_tasking/` and external-line substrate without conflation, and a non-foreclosure clause for the future staff directory / on-call / personal-contact doctrine arc.

The user was explicit (paraphrasing the DL-10 framing): "If this is foundational, let's adjust the system map or doctrine. We're not stashing all these foundational ideas in random documents." DL-11 lands the binding answer.

---

## What landed (binding doctrine — seven-doc cycle)

### MAIN system map ([`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md))

- **New Doctrine lock DL-11** (between DL-10 and Section 1D). Binding paragraphs covering: three architecturally distinct messaging surfaces (patient-facing chat + external-line + internal team collaboration); three internal-thread shapes (ad_hoc / persistent_group / direct_message) with patient-less threads first-class; object attachment first-class and multi-object via typed child table; mention notification semantics (emit outbound_jobs.send_in_app + audit_events ONLY, never patient_timeline_events unless explicit patient-record state change); relationship-scoping per DL-10; composition with `provider_tasking/` and external-line substrate without conflation; staff-directory / presence / on-call coverage as non-foreclosure clause; two extremes rejected (cram-into-patient-chat / Extreme 1; overload-provider_tasking / Extreme 2).
- **§1G.8.8 amendment.** SUPERSEDED-AND-REPLACED-BY-DL-11 banner inserted at top of the section. Historical "reuses message_thread + message_thread_participant with staff_internal thread type — no new product" text preserved for archaeology with explicit "SUPERSEDED" annotations on the substrate framings. New binding doctrine lives in DL-11 + foundational doc §7.14 + sibling #19.

### Foundational doc ([`.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md`](FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md))

- **New sibling #19 `internal_collaboration/`** added to §5 in a new "Reserved by DL-11" subsection. Sibling count moves from 18 to 19 (5 active, 14 reserved). Description covers thread shapes, multi-object attachment, persistent-group derivation, mention semantics, relationship-scoping, sensitivity tagging. Distinct-from-other-siblings statement covers c2 messages / provider_tasking / external-line / communications_lifecycle boundaries.
- **§5 sibling-boundary statements** extended with `internal_collaboration/` boundary statement (what it does NOT own: patient-facing chat, external-line, task/queue/SLA, staff directory/presence/on-call, patient timeline).
- **New §7.14 — Internal team collaboration messaging (binding sub-doctrine)** (~470 lines). Subsections:
  - §7.14.0 Binding sentence (verbatim mirror of DL-11 lead) + patient-less threads clarification
  - §7.14.1 The three messaging surfaces and why they're distinct (table contrasting axes: substrate today / participants / patient-visible / object attachment / patient binding required / access model / audit shape / lifecycle / sensitivity)
  - §7.14.2 The three internal-thread shapes — `ad_hoc`, `persistent_group`, `direct_message` — with decision criteria
  - §7.14.3 Object-attachment polymorphism — 13 object types admitted today + admission discipline + the multi-object case + anti-patterns
  - §7.14.4 Substrate sketch (NOT a migration — `internal_threads`, `internal_thread_object_links`, `internal_thread_messages`, `internal_thread_participants`)
  - §7.14.5 Persistent-group membership derivation — how billing / front_desk / on_call groups auto-include via role + capability + historical accountability via write-time materialization
  - §7.14.6 Mention notification semantics (binding) — `outbound_jobs.send_in_app` + `audit_events` only; `patient_timeline_events` ONLY on explicit patient-record state change
  - §7.14.7 Relationship-scoping per DL-10
  - §7.14.8 Composition with `provider_tasking/`
  - §7.14.9 Composition with external-line substrate (DL-10/DL-11 boundary)
  - §7.14.10 Quality bar: Slack-with-patient-context + Epic Secure Chat + iMessage/Teams
  - §7.14.11 Worked example: lab result review thread (ad_hoc, multi-object)
  - §7.14.12 Worked example: post-procedure photo discussion (rich media + sensitivity + relationship-scope)
  - §7.14.13 Worked example: persistent-group billing channel (patient-less; durable institutional memory)
  - §7.14.14 Worked example: 1:1 direct message (no patient binding)
  - §7.14.15 Worked example: billing exception escalation (multi-object + produces task)
  - §7.14.16 Worked example: external-line triage discussion (preserves DL-10/DL-11 boundary)
  - §7.14.17 Staff directory + presence + on-call coverage dependency (NOT in DL-11 scope; non-foreclosure clause)
  - §7.14.18 Anti-patterns explicitly forbidden by DL-11
  - §7.14.19 What §7.14 does NOT specify (deferred)
  - §7.14.20 Cross-references
- **§3 dimensional matrix** Communication endpoints axis updated with binding response per DL-11 + §7.14.
- **§11.0 crosswalk** added DL-11 row + DL-12-candidate (staff directory / presence / on-call) RESERVED row + sibling #19 status row.

### ADR ([`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md))

- **§7.14 — Internal team collaboration messaging (DL-11)**. Decision / Context / Rationale / Alternatives considered + rejected (reuse-messages framing, provider_tasking-overload, per-object-type tables, defer-doctrine, force-patient-binding, include-staff-directory-in-DL-11 — each with rejection rationale) / Consequences (c2 unchanged; §1G.8.8 superseded; c3 unaffected; c4 inherits boundary; external-line preflight inherits; provider mirror parallel track; future migration; future DL-12 candidate) / What DL-11 explicitly does NOT decide / Cross-links to all binding docs.

### Radar ([`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md))

- **2026-05-11 late evening addendum** with five new zones:
  - **Zone 38** Cram-internal-into-patient-chat drift (tier 1) — the exact §1G.8.8 anti-pattern DL-11 supersedes
  - **Zone 39** Object-attachment-via-jsonb / single-context-only drift (tier 1) — multi-object attachment must be first-class typed child table, not metadata jsonb or single-context-on-thread-row
  - **Zone 40** Cross-relationship internal-thread leakage (tier 2) — DL-10 follow-on
  - **Zone 41** Patient-timeline pollution from internal mentions / activity (tier 1) — mentions emit outbound_jobs + audit_events only
  - **Zone 42** Staff-directory / on-call / personal-contact drift (tier 2) — features built on assumed substrate that doesn't exist; personal-cell visibility without capability gates

### Topology doc ([`docs/architecture/communications_topology.md`](../../docs/architecture/communications_topology.md))

- **New §12 — Internal team collaboration (third messaging surface — binding per DL-11)** (~50 lines). Surface scope; substrate today (LANDED doctrine; migration future); boundary with c2 patient-facing chat; boundary with external-line / pre-account; boundary with `provider_tasking/`; mention semantics; relationship-scoping; staff-directory dependency; c2/c3/c4/external-line inheritance; anti-patterns + radar zones 38-42; build status.
- **Closing paragraph** updated to name both §11 (external-line gap) AND §12 (internal team collaboration substrate) as the two largest named architectural concerns in the doc.

### Evolution narrative ([`docs/architecture/evolution_narrative.md`](../../docs/architecture/evolution_narrative.md))

- **New Act XII: Internal team collaboration — the third messaging surface (May 11, late evening)** (~5 paragraphs). Captures: trigger (Teams/Epic-Secure-Chat-quality user framing surfaced the §1G.8.8 wrong-substrate-decision), DL-11 binding (three distinct surfaces + new sibling + parallel substrate + mention semantics + relationship-scoping), boundary discipline (composition with provider_tasking + external-line), staff-directory non-foreclosure clause, mode-shift status (three doctrine arcs in two days, six-doc-cycle convention now run 11 times).

### Closing handoff (this file)

- Captures what landed, what was rejected, mode-shift status, open watch zones, cross-doctrine implications, recommended next session entry point.

---

## What was rejected (decisions captured for future-self)

The following alternatives were considered and explicitly rejected during the arc:

- **Reuse `messages` with `staff_internal` thread type (the prior §1G.8.8 framing).** Rejected: internal collaboration has different access model, different audit shape, different lifecycle, different participant semantics, different object attachment (multi-object first-class), different sensitivity model. Parallel substrate is cheaper than reuse-with-flags long-term. Radar zone 38 watches.
- **Build internal collaboration as a feature of `provider_tasking/`.** Rejected: conflates queue/task semantics with thread/conversation semantics. Both lose. They compose via `internal_thread_object_links.link_role='produced_task'`; neither replaces the other.
- **Per-object-type internal-thread tables** (one for labs, one for orders, one for billing). Rejected: same shape as the specialty-acquisition-table proliferation pattern DL-8 + radar zone 29 reject.
- **Defer the doctrine entirely; build c4 and external-line first.** Rejected: c4 (`patient_action_items` substrate build) would canonize on the wrong assumption — that action items hold staff-to-staff conversation context — and require retrofit. External-line preflight would collapse Layer 3 (ops triage queue) into internal collaboration substrate.
- **Force patient binding on every internal thread.** Rejected: patient-less group chats and 1:1 DMs are first-class operational surfaces. The user explicitly named billing team / front desk / on-call rotation chats. Forcing patient binding either refuses to admit them or fakes a synthetic patient_id; both are wrong.
- **Include staff directory + presence + on-call coverage in DL-11.** Rejected as out-of-scope: staff-directory / on-call / personal-cell-visibility has its own substrate concerns (visibility policy, rotation primitives, schedule integration). DL-11 names the dependency via non-foreclosure clause and reserves the future arc for DL-12 candidate.
- **Naming the primitive `staff_internal_messages` or `ops_messaging`.** Implicitly rejected. The sibling is `internal_collaboration/` (broader than ops; covers provider/MA/billing/ops/compliance/admin).

---

## Open watch zones (radar)

The v1 pressure-test radar now carries 42 zones total. New zones active to watch:

- **Zone 38** (cram-internal-into-patient-chat drift, tier 1) — anyone proposing `staff_internal` flags on `messages` or "thread type" columns to merge surfaces
- **Zone 39** (object-attachment-via-jsonb / single-context-only drift, tier 1) — multi-object attachment must be typed child table
- **Zone 40** (cross-relationship internal-thread leakage, tier 2) — DL-10 follow-on
- **Zone 41** (patient-timeline pollution from internal mentions / activity, tier 1) — mentions emit outbound_jobs + audit_events only
- **Zone 42** (staff-directory / on-call / personal-contact drift, tier 2) — features built on assumed substrate that doesn't yet exist; personal-cell visibility without capability gates

Previously-active zones (still monitorable): zones 27-37 plus the original 26.

---

## Cross-doctrine implications

What DL-11 changes for in-flight and future work:

### c2 chat rendering (already shipped as `8f02bc0`)

No change. c2's `messages` substrate stays patient-facing. The parallel internal_collaboration substrate is its own sibling; the two coexist without overlap.

### c3 inbox UI (next likely commit)

No change. `patient_inbox_messages` is patient-facing one-way notifications. Doesn't touch internal team substrate.

### c4 (`patient_action_items` substrate build, re-scoped per DL-10)

**Substantive change.** The c4 preflight must distinguish "patient action item" (substrate for tasks-the-patient-must-complete; what c4 builds) from "internal team thread about a patient" (substrate for staff-to-staff discussion; what future `internal_collaboration/` migration builds). The two can compose — a `patient_action_items` row may have an associated internal_collaboration thread linked via `internal_thread_object_links.object_type = 'patient_action_item'` — but they're not the same primitive. Watch radar zones 38, 39, 41.

### External-line preflight (future)

**Substantive change.** External-line ops triage stays in external-line substrate (Layer 3 in topology §11). Internal collaboration threads can be **spawned from / linked to** external-line events but the external conversation itself is NOT an internal thread. The unmatched-event substrate (contact identity + ops triage queue) is one source of internal threads, not the same substrate. Watch zones 38, 40.

### Provider mirror parallel track

**Substantive change.** Queue / messaging surfaces in the provider workspace (My Queue, clinical inbox, lab review drawer per §1G.8) must consume both substrates correctly: patient chat via c2 `messages`; internal team threads via the future `internal_collaboration/` substrate. Compose surfaces appropriately; never merge.

### Future `internal_collaboration/` migration

**Substantive change.** Lands when first sibling activation drives. Migration includes the four substrate tables (`internal_threads`, `internal_thread_messages`, `internal_thread_participants`, `internal_thread_object_links`), persistent-group derivation primitive (`lib/groups/` or `lib/auth/` extension), RLS predicates, audit instrumentation, rich-media handling architecture. Likely activation triggers: external-line preflight (need cross-referencing internal collaboration); c4 follow-on (need internal threads for clinical_required turn discussion); first multi-clinic deployment (need cross-team coordination at scale).

### Future DL-12 candidate (staff directory / presence / on-call coverage)

**Reserved.** Lands as a separate doctrine arc when first concrete pressure surfaces. Likely surfaces: `scheduling_lifecycle/` activation (on-call rotation overlaps); first multi-clinic / multi-deployment activation (cross-clinic on-call coverage); first capability-gated personal-cell-visibility incident. The doctrine work will likely produce primitives for `on_call_coverage` + `staff_directory_visibility_policy` + extensions to `staff_profiles` (work-vs-personal contact).

---

## Substrate migration sketch (NOT in this commit; named for the future)

When the `internal_collaboration/` substrate migration lands, the four tables + RLS + audit + orchestrators include:

1. `internal_threads` — `id`, `org_id`, `thread_kind`, `group_name`, `group_kind`, `primary_context_type`, `primary_context_id`, `patient_id` (denorm), `patient_relationship_id` (per DL-10), `title`, `status`, `priority`, `sensitivity`, `created_by`, `created_at`, `updated_at`, `metadata`
2. `internal_thread_object_links` — `id`, `internal_thread_id`, `object_type`, `object_id`, `link_role`, `linked_by`, `linked_at`. Typed multi-object child table.
3. `internal_thread_messages` — `id`, `internal_thread_id`, `author_staff_id`, `body`, `mention_staff_ids` UUID array, `created_at`, `edited_at`, `metadata`. Parallel `internal_thread_message_attachments` for rich media.
4. `internal_thread_participants` — `id`, `internal_thread_id`, `staff_profile_id`, `role`, `membership_source`, `last_read_message_id`, `last_read_at`, `notifications_muted`, `joined_at`, `left_at`.
5. Persistent-group derivation primitive (extends `lib/auth/capabilities.ts` or new `lib/groups/`) materializes group memberships at write-time per the group definition (billing / front_desk / on_call / safety_committee / compliance / after_hours_coverage).
6. SECURITY DEFINER orchestrators: `create_internal_thread`, `post_internal_thread_message`, `add_internal_thread_participant`, `link_internal_thread_object`, `mark_internal_thread_resolved`, `mention_emit_in_app_notification`. Each emits the appropriate `audit_events` row; NONE emit `patient_timeline_events` unless explicit patient-record state change.
7. RLS: capability-gated reads per sensitivity; cross-relationship visibility checks per DL-10.

That migration is **future work**, NOT this commit. This commit binds doctrine; substrate lands when activation drives.

---

## Recommended next session entry point

Three candidates, ordered by what closes the largest gap relative to now-bound DL-10 + DL-11:

1. **c3 — `/inbox` UI for `patient_inbox_messages`.** Smallest scope; closes the c1 substrate's UI gap. Doesn't engage DL-11 substantively. Good warm-up after a doctrine-heavy day.

2. **c4 (re-scoped per DL-10) — `patient_action_items` substrate build with DL-11 boundary discipline.** Larger scope; engages BOTH DL-10 (per-action-item-type identity-vs-relationship scoping) AND DL-11 (distinguish patient_action_items from internal team threads about a patient). The TODO comment in `lib/messages/postPatientMessage.ts` becomes a real action-item resolution call. Watch radar zones 34 + 38 + 41.

3. **External-line preflight.** The deepest engagement with both DL-10 (identity-namespace + relationship-scoping) and DL-11 (composition with internal_collaboration without conflation). Layer 3 ops triage stays in external-line substrate; internal threads spawn from / link to external-line events. Watch radar zones 35, 37, 38, 40.

4. **Eventual `internal_collaboration/` first activation.** When some sibling needs to materialize internal team threads concretely. Likely surfaces during c4 or external-line preflight work. Future preflight at `.cursor/plans/PREFLIGHT_<future>_internal_collaboration_first_activation.md`.

If decision-paralysis sets in: **c3** is the smallest, lowest-risk continuation. **External-line preflight** is the most architecturally significant — the right place to spend doctrine-arc capital next, because it's where DL-10's identity-namespace and DL-11's internal-collaboration-boundary discipline both land concretely.

---

## Where to look first when picking up

The doctrine on internal team collaboration is now spread across the seven binding docs + this handoff. To rebuild context cold, read in this order:

1. **MAIN Doctrine lock DL-11** ([`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md), section between DL-10 and Section 1D). The binding architecture in seven binding paragraphs.
2. **MAIN §1G.8.8** (same file) — SUPERSEDED-AND-REPLACED-BY-DL-11 banner + historical context. Shows what the doctrine used to say.
3. **Foundational doc §7.14** ([`.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md`](FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md)). The long-form rationale + three-surface contrast + four thread shapes + worked examples + anti-patterns.
4. **Foundational doc §5 sibling #19** (same file). The formalized `internal_collaboration/` sibling.
5. **ADR §7.14** ([`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md)). The decision rationale + alternatives considered + consequences.
6. **Radar zones 38-42** ([`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md)). What to watch as the next phase opens.
7. **Topology doc §12** ([`docs/architecture/communications_topology.md`](../../docs/architecture/communications_topology.md)). The internal team collaboration surface alignment.
8. **Evolution narrative Act XII** ([`docs/architecture/evolution_narrative.md`](../../docs/architecture/evolution_narrative.md)). The story; reads as continuous narrative from Act XI (chat rendering + DL-10) into Act XII (DL-11).

---

## Files NOT touched in this commit

- Application code (`lib/`, `app/`, `components/`, `repo/`, `supabase/migrations/`) — all unchanged.
- `docs/architecture/operational_objects_under_patient.md` — already aligns with DL-11's identity / relationship / context layering; no edits needed.
- The c1, c2 preflights + c2 handoff + DL-10 handoff — all historical records; no edits.

---

## Unresolved questions / deliberate open items

- **Exact `internal_collaboration/` substrate schema.** Sketched in §7.14.4 + this handoff "substrate migration sketch"; concrete migration when first activation drives.
- **Rich-media handling architecture.** Attachments / screenshots / markups / voice / video messages. Future preflight.
- **Presence / typing indicators / read receipts beyond `last_read_message_id`.** Deferred.
- **Mention notification fan-out details.** Batching / digests / @here vs @channel. Deferred.
- **Mobile-app surface design.** Future product work.
- **Group-membership derivation primitive implementation.** `lib/auth/` or `lib/groups/` module. Future commit.
- **Reactions / emoji semantics.** Deferred.
- **Staff directory UI design + on-call rotation primitive + personal-cell visibility policy.** Separate future doctrine arc (DL-12 candidate or sibling activation; naming TBD).
- **CI lint candidates** (radar zones 38-42 enforcement): could later add lint scripts forbidding `staff_internal` flag additions on `messages` (zone 38 enforcement), or forbidding metadata `object_refs[]` patterns (zone 39 enforcement), or forbidding `patient_timeline_events` writes inside `internal_collaboration/` code paths (zone 41 enforcement). Out of current scope.

---

## Recommended next session entry point — summary

When you (or future contributor) returns:

1. Read this handoff first.
2. Pick from the recommended next-build candidates (c3 / c4-rescoped / external-line preflight / internal_collaboration first activation) or override with a different priority.
3. If picking c4 or external-line: read DL-10 + DL-11 + foundational docs §7.13 + §7.14 first (the binding doctrine; ~60 minutes).
4. Write a preflight using the established c1/c2 pattern.
5. Write a checkpoint handoff after the commit lands.

The doctrine is bound. The next commit composes against DL-1..DL-11 + Section 1W + sibling #19 — not against an implicit substrate that someone might paint into a wrong corner.

Three doctrine arcs in two days. The six-doc-cycle convention has now run eleven times. Future architecture changes of similar weight will follow the same cycle.

---

*End of handoff. This closes the Phase 4H internal team collaboration messaging doctrine arc. The platform substrate now structurally answers "how does staff-to-staff Teams/Epic-Secure-Chat-quality collaboration work?" across MAIN + foundational doc + ADR + radar + topology + evolution narrative + this handoff. Seven-doc preservation cycle for the DL-11 arc.*
