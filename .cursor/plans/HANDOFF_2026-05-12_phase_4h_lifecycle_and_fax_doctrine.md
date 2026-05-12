# HANDOFF 2026-05-12 — Phase 4H: lifecycle + fax + template/AI + search/visibility + notification + Teams-coexistence + AI-Response-Assist doctrine (DL-12) — LANDED

**Closes:** the DL-12 doctrine arc (May 11/12) — thread + participant lifecycle as cross-substrate discipline + fax canonical placement + 28 foundational clarifications across 7 pressure-test rounds.

**Successor work:** none required to unblock c3 / c4 / external-line preflight. DL-12 is doctrine-only — no migration, no schema, no rules, no code. The substrate migrations triggered by DL-12 will fire when first concrete activation arrives (internal_collaboration sibling, care-team/coverage substrate, fax pipeline, attachment lifecycle, etc.).

---

## What landed

**DL-12 binding lock + 28 foundational clarifications + 25 radar zones + 42 ADR REJECTED alternatives.** All distributed to canonical homes; zero orphan subsections.

### Files touched (7)

1. **MAIN system map** [`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md) — added DL-12 binding lock (40 numbered clauses + lock footer) between DL-11 and `---` separator. Added nine MAIN section amendments:
   - **§1D.3** (DL-12 binding) — staff deactivation lifecycle, admin/CMO/IT intervention semantics, staff notification preferences subordinate to capability/on-call/escalation
   - **§1G.1** (DL-12 binding subsection) — owner cardinality, thread ownership extension, waiting semantics for clinical/billing/safety/adverse-event/patient-facing threads, queue-routed work + thread-to-task transition
   - **§1G.3** (DL-12 binding subsection) — patient-facing thread closure-discipline gating + urgent/safety/emergency escalation boundary + thread-kind parameterization NOT specialty-group-hardcoded + derived-membership from care-team/coverage layer + three modes of patient-visible coverage disclosure + rich-media parity per §5.3(b.v)
   - **§1G.6.2** (DL-12 binding subsection) — queue-routing state machine (delivered_to_queue / unread_by_queue / seen_by_queue_member / claimed_by_staff / completed/escalated_or_overdue) distinct from ordinary participant read state
   - **§1J.12** (DL-12 binding) — thread search/discoverability/visibility governance with five visibility classes (public/internal channels, private group threads, 1:1 DMs, patient/object-linked, restricted/sensitive), anti-panopticon discipline, three-level control hierarchy (org policy + thread-level + user-level), patient/object-linked-thread-projection, internal-membership-vs-patient-visible-roster distinction, staff-self-join discipline
   - **§1V.10** (DL-12 binding subsection) — messaging-thread retention parameterized by thread class, message edit/correction/retraction history preservation cross-substrate, legal hold/eDiscovery/compliance export distinct from ordinary search, not-a-consequence-free-backchannel culture clause
   - **§1P.14** (DL-12 binding subsection) — fax as inbound channel + configurable queue ownership + composed-from-primitives-not-sibling
   - **§1Q.14.1** (DL-12 binding subsection) — patient-facing send governance scope (automated/system/AI-generated only), human-vs-automated send distinction (human-authored chat is FREE-TEXT under capability/audit), internal staff snippets distinct from patient-facing templates, patient notification preferences with criticality override, notification preview/snippet privacy
   - **§1N.8** (DL-12 binding) — AI participation bounds on threads with may/may-not list, authorship attribution rule (human-accepted AI drafts = `staff_with_ai_assist` not `ai_assisted`), anti-noise discipline (dedupe + cooldown + severity + ownership), in-app AI Response Assist drafting surface replacing screenshot-into-external-AI workflow

2. **Foundational doc** [`.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md`](FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md):
   - **§4.A** primitive description updates (NEW section after primitive table) — primitives #1 (actor_type taxonomy with `staff_with_ai_assist`), #2 (capability + thread search/visibility + notification subordination), #10 (fax dual-nature), #11 (AI participation bounds + authorship attribution + anti-noise + in-app Response Assist), #13 (template engine scope for automated/system/AI-generated patient sends), #16 (fax inbound consumer)
   - **§5.3** sibling-boundary discipline extensions (NEW) — two guards: (a) fax-as-composed-not-sibling, (b) attachments-as-first-class-artifact-not-thread-metadata-blob with FIVE sub-guards (b.i three-state lifecycle, b.ii iOS-flattened-vs-OMNI-native markup, b.iii PDFs stricter, b.iv filing disposition state taxonomy, b.v patient-facing media parity)
   - **§8.1** participant + thread lifecycle cross-cutting row (NEW) — 28 sub-clauses + additional cross-cutting sub-disciplines
   - **§7.13.12** DL-12 cross-references (NEW subsection in §7.13) — geography/licensure context + care-team/coverage layer + patient-visible roster scoping + patient-proxy actor type future preflight
   - **§7.14.4** substrate sketch extended with DL-12 fields (`created_by_actor_type`, `trigger_source`, `reason_code`, `ai_confidence`, owner cardinality columns, `human_review_required`, `dedupe_key`, `cooldown_until`, `severity_threshold`, edit-history columns, queue-state machine table, patient-visible-roster-label table, `staff_with_ai_assist` actor type on messages)
   - **§7.14.9** extended with fax distinction + general-enterprise-collaboration-platform coexistence positioning (genericized — "e.g., Microsoft Teams, Slack, Microsoft 365, Google Workspace, future enterprise chat / Copilot-class tools that may emerge"; doctrine binds the pattern, not the brand)
   - **§7.14.10** extended with TWO boundary extensions — (a) threads-coordinate-never-canonical-state, (b) patient-linked-thread-projection
   - **§7.14.18** extended with FIVE DL-12 anti-patterns + DL-12 attachment/markup/chart-filing/thread-substrate-hardcoding/search-visibility-notification/lifecycle-edit-queue-escalation/enterprise-platform/AI-workflow anti-patterns
   - **§11.0** crosswalk DL-12 row + 28-clarifications row added

3. **ADR** [`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md) — new **§7.15** with Decision / Context / Rationale / 42 explicit REJECTED alternatives / Consequences / Cross-links / Status table. The most thorough RAR alternatives section in the project to date.

4. **Radar** [`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md) — 2026-05-12 addendum with 25 zones (43-67):
   - Zones 43-48 (lifecycle / retention / fax-as-sibling / thread proliferation / internal-thread-as-canonical-state)
   - Zones 49-52 (AI silent patient-send / system-AI-thread without provenance / AI thread spam / AI authorship rewriting)
   - Zones 53-58 (anti-panopticon search / notification critical-suppression / message-edit silent rewrite / attachment-as-blob / PHI in preview / queue-handled-by-read-receipt — the 9pm-front-desk-failure)
   - Zones 59-63 (attachment auto-files to chart / OMNI markup overwrites original / patient-media without scan/audit/PHI / specialty-group hardcoded substrate / 1:1 orphans-when-staff-off-duty)
   - Zones 64-66 (staff-self-join curious browse / internal-participants silently exposed to patient / thread-membership hardcoded not derived)
   - Zone 67 (screenshot-into-external-AI anti-pattern — PHI exfiltration if in-app AI worse than copy-paste-into-ChatGPT)

5. **Topology doc** [`docs/architecture/communications_topology.md`](../../docs/architecture/communications_topology.md):
   - **§12** extended with DL-12 cross-references (all 28 clarifications + canonical homes)
   - **§13** NEW — fax as cross-cutting rail + ingress (binding per DL-12; composed-from-primitives; NOT internal_collaboration; NOT a new sibling)

6. **Evolution narrative** [`docs/architecture/evolution_narrative.md`](../../docs/architecture/evolution_narrative.md) — Act XIII added (Lifecycle + fax + template/AI + search/visibility + notification + edit/attachment/preview + safety/task/merge/queue-routed-work + Teams-coexistence + AI-Response-Assist governance; the seven-round pressure-test cycle through scenario-matrix confirmation to execution).

7. **Closing handoff** — this file.

---

## What's NOT in this arc (named future preflights, ordered by likely priority)

Each is named here so a future agent picking up the work knows what's deferred (NOT lost, NOT blocking DL-12 doctrine landing).

1. **External-line first-touch preflight** (per c2 + DL-11 + DL-12; future external-line architecture). Bound: patient_id NOT nullable on `messages` (c2 design discipline); contact-identity layer for unknown numbers; Twilio inbound webhook handling; ops triage queue. NOT BLOCKED by DL-12.

2. **Care-team/coverage assignment substrate** (per DL-12 invariant 37). The full staffing algorithm. Bound: `patient_relationship` + care_program + specialty + geography/licensure (Hims-style) + location + on-call/coverage + active status + capability inputs; entry/exit paths; provider-quits-coverage-rule; three modes of patient-visible disclosure. Consumption contract is bound by DL-12; substrate migration future. **HIGH PRIORITY** because c4/c5+ patient-facing thread shapes depend on it.

3. **Internal_collaboration sibling activation** (per DL-11 sibling #19 + DL-12 invariants). Substrate sketch in foundational §7.14.4 (extended with DL-12 fields). When activated: `internal_threads`, `internal_thread_messages`, `internal_thread_participants`, `internal_thread_object_links`, `internal_thread_queue_state`, `patient_visible_thread_roster_label` + internal-snippet typed/versioned registry inside the sibling. Triggers when first concrete patient-context-internal-collab feature pressure surfaces.

4. **c4 `patient_action_items` substrate build** (per c2 PREFLIGHT re-scope + DL-12 invariant 28 thread-to-task transition). Bound: action-item resolution from message threads; queue-routed work claim/complete/escalate state per §1G.6.2. Inherits DL-12 cross-substrate obligations.

5. **Fax pipeline activation** (per DL-12 fax canonical placement + §5.3(a) + §1P.14 + topology §13). Bound: composed-from-primitives (primitive #10 + primitive #16 + §1P + §1G.6.2 + future provider_tasking + future c4 patient_action_items); NOT a new sibling. Full preflight when first concrete fax need arrives.

6. **Patient-proxy / caregiver / parent-on-behalf-of-minor actor type extension** (per primitive #1 taxonomy + DL-10 relationship layer). Bound: taxonomy admits `patient_proxy` / `caregiver` / `parent_on_behalf_of_minor` extension when DL-10 relationship layer formalizes proxy relationships. HIPAA-specific rules for minors, emancipated minors, proxy authorization, custody/consent. NOT BLOCKED by DL-12.

7. **Patient-to-patient peer support surface** (NEW surface, separate from DL-11 staff-to-patient scope). Out of DL-12 scope. Bound: new doctrine arc when group programs / peer support pressure surfaces (e.g., GLP-1 group sessions, peer recovery).

8. **Operational guardrails named but deferred**:
   - **Voice notes / audio messages** — §5.3(b.v) admits "voice notes where policy allows"; future media pipeline (transcoding + scan + retention + secure-portal-link discipline).
   - **AI translation / multi-language drafts** — future capability under primitive #11.
   - **Scheduled / time-delayed send** — UI/scheduling feature; not foundational.
   - **Records export (HIPAA Right of Access)** — separate substrate (patient_data_export); not chat-specific.
   - **Group video call from inside patient thread** — telehealth video session; separate substrate; chat may launch but not own.
   - **Emergency provider-to-provider direct line bypass** — voice infrastructure; out of DL-12 scope.
   - **Markup/annotation editor** — future product deliverable that will respect §5.3(b.ii) iOS-vs-OMNI-native distinction.
   - **Patient-facing video pipeline** — transcoding + scan + size limits + secure-portal-link for SMS rails per §5.3(b.v); future activation.
   - **Governed enterprise-platform connector layer** — when compliance/access controls permit (per §7.14.9). Notifications + deep-link integration with Teams/Slack/M365/Workspace/future-tool; never source-of-truth swap.
   - **In-app AI Response Assist (build, not bind)** — DL-12 invariant 39 names the binding doctrine + design rule "compliant workflow must be easier than the workaround"; the actual UI/UX + LLM integration + audit trail implementation lands when first concrete pressure activates (the longer staff use external screenshot-into-ChatGPT, the more compliance posture is performative).

---

## Cross-cutting status

| Surface | Status |
|---|---|
| Substrate | Doctrine LANDED; no migration / schema / rules / code |
| MAIN sections amended | 9 (§1D.3 + §1G.1 DL-12-binding + §1G.3 DL-12-binding + §1G.6.2 DL-12-binding + §1J.12 + §1V.10 + §1P.14 + §1Q.14.1 + §1N.8) |
| Foundational primitive updates | 6 (#1 + #2 + #10 + #11 + #13 + #16) |
| Foundational §5 sibling-boundary guards | 2 main + 5 sub-guards under (b) attachments-as-first-class-artifact |
| Foundational §7.14 extensions | §7.13.12 + §7.14.4 (substrate sketch w/ DL-12 fields) + §7.14.9 + §7.14.10 + §7.14.18 + §8.1 (28 sub-clauses) + §11.0 crosswalk |
| ADR §7.15 REJECTED alternatives | 42 |
| Radar zones | 25 (43-67) |
| Topology updates | §12 cross-references + §13 (fax) NEW |
| Evolution narrative | Act XIII (May 11/12) |
| Closing handoff | this file |
| **Total estimated scope** | ~3000+ lines of new doctrine |
| DL-12 lock binding clauses | ~40 |
| Foundational clarifications | 28 (a-bb across 7 pressure-test rounds) |
| Future preflights named | 8 |
| Specific vendor names in clauses | **Illustrative only** (Microsoft Teams, Slack, Microsoft 365, Google Workspace, future tools); **doctrine binds the pattern, not the brand** — when the chosen platform changes, doctrine still holds |

---

## Watch zones (post-DL-12)

Per radar 2026-05-12 addendum. Twenty-five zones (43-67). Each names a specific failure mode + smoking gun + forbidden-per cross-link.

The five most operationally critical to monitor in c3 / c4 / external-line preflight / internal_collaboration sibling activation:

- **Zone 49** AI silent patient-send (without §1Q template/disclosure gate)
- **Zone 58** Queue-routed message "handled" by read receipt (the 9pm-front-desk-failure)
- **Zone 59** Attachment auto-files to chart without disposition
- **Zone 64** Staff self-joins patient thread without authorization
- **Zone 67** Screenshot-into-external-AI anti-pattern (PHI exfiltration if in-app AI worse than copy-paste-into-ChatGPT)

---

## Cross-doctrine implications

DL-12 supersedes nothing. It refines / strengthens DL-7 (canonical-state-in-substrate cross-link), DL-8 (sibling admission discipline applied to fax + thread storage), DL-10 (relationship scope inherited by thread membership + patient-visible roster), DL-11 (three messaging surfaces with cross-substrate lifecycle).

If a future doctrine arc surfaces that needs DL-12 amendment, write a follow-up subsection in the radar + a new ADR section + amend the relevant MAIN sections in place + update the foundational §11.0 crosswalk; do not edit DL-12 lock text directly — capture the change as an evolution.

---

## Recommended next session entry point

If picking up DL-12 follow-on doctrine work: read this handoff + scan §7.15 REJECTED alternatives in the ADR + scan zones 43-67 in the radar. Then decide which named future preflight has surfaced pressure.

If picking up c3 / c4 / external-line preflight execution: read AGENTS.md + the latest preflight checkpoint + the DL-12 lock in MAIN (clauses are short and pointer-style — fast read). c2 is shipped at commit `8f02bc0` and unaffected by DL-12.

If picking up internal_collaboration sibling activation: read foundational §7.14 + §7.14.4 substrate sketch (extended with DL-12 fields) + §5.3 sibling-boundary attachment guards + §1G.6.2 queue-routing state machine + §1J.12 visibility classes. The substrate sketch is concrete enough to migrate from.

If picking up care-team/coverage substrate activation: read DL-12 invariants 35, 36, 37 + §1G.3 DL-12-binding subsection + foundational §7.13.12 + scenario examples in DL-12 lock. The consumption contract is bound; the staffing algorithm itself is the new design.

---

## Round-by-round synthesis log (how we got here)

Each round had a trigger (the user's pressure-test question), a key discovery (the architectural insight that surfaced), and at least one stale idea discarded (named explicitly so future contributors don't re-litigate). Captured here in granular form to complement the higher-level Act XIII narrative.

### Round 1 — Template / AI interaction (clarifications a-e)

**Trigger.** "Do we have to define how templates for messaging to clients, or messaging to 1:1 staff should interact in the threads? Is that now or later? Do we have to define how AI layer interacts on these threads? Can the system generate a new thread? Based off of an AI trigger?"

**Key discovery (1 of 8 that mattered).** The patient-facing-template engine and the thread substrate are different things. Templates govern automated/system/rule-fired/campaign/notification/AI-generated patient-facing sends; threads are the delivery/conversation surface. Conflating them either (a) over-rigidifies ordinary provider portal messaging (force-everything-through-template) or (b) bypasses disclosure-policy governance (let-AI-silently-send-anything). The clean line: **human-authored patient chat is free-text under capability/audit; automated/AI-generated patient-facing sends are template-governed**.

**Stale ideas discarded.**
- Defer template/AI guardrails to a later phase — REJECTED per user "treat these as foundational. NOW is the time to get this right."
- Add a new DL-13 for AI participation — REJECTED; AI participation bounds are a primitive #11 description update + §1N extension, not new substrate.
- Internal staff snippets in `repo/templates/` alongside patient-facing — REJECTED; conflates patient-facing-send governance with internal collaboration tooling.

### Round 2 — Search / visibility / notification governance (clarifications f-j)

**Trigger.** "Can everyone at the company search for a message?? That seems good and bad at the same time. What would Teams do? Like, I should or shouldn't be able to see a separate 1:1 discussion between two other people?"

**Key discovery (2 of 8).** Search/discovery is a future projection over substrates, NOT a new source of truth. Storage stays per-substrate (c2 messages, c1 patient_inbox_messages, future internal_collaboration sibling, future external-line, future patient_action_items, fax queue). Visibility is capability-gated + scope-aware + thread-class-aware across **five visibility classes** (public/internal channels, private group threads, 1:1 DMs, patient/object-linked, restricted/sensitive). **Anti-panopticon discipline**: 1:1 DMs and private group threads are NOT globally searchable by ordinary staff — if they were, conversations would flee to text/iMessage/Slack and OMNI would lose the operational system of record.

**Stale ideas discarded.**
- Mega-table for all threads (cross-surface storage merge) — REJECTED.
- Single global "everyone-can-search-everything" toggle — REJECTED.
- 1:1 DMs and private group threads globally searchable by ordinary staff — REJECTED.
- Search as a new source of truth replacing per-substrate storage — REJECTED.
- Patient notification preferences allow silent-suppress of clinical/safety/critical messages — REJECTED.
- Staff DND/mute bypassing on-call/safety/CMO/assigned-owner escalations — REJECTED.

### Round 3 — Edit / attachment / preview / legal / safety / task / merge / queue-routed-work (clarifications k-r)

**Trigger.** "A provider should see a lab come back at 9pm, act on it, and message front desk 'please order repeat lab' without having to look up who is on call for front desk. Whoever picks up front desk duty next morning will have to own it, and like, check it off as done or something. 'Delivered' and 'read' views — standard for any messaging app, right?"

**Key discovery (3 of 8).** **Read receipt ≠ accountability.** This is the killer use case that exposed why queue-routed work needs a state machine distinct from ordinary participant read state. Provider routes to queue → next AM staff reads → UI shows "read" → provider assumes "handled" → patient never gets booked. The fix: claim/complete/escalate task substrate state, separately tracked. **Five queue-routing states tracked SEPARATELY from messaging read state**: delivered_to_queue, unread_by_queue, seen_by_queue_member, claimed_by_staff, completed/escalated_or_overdue.

**Key discovery (4 of 8) — surfaced same round.** Message edits never rewrite history. Attachments are first-class artifacts. Notification previews are a separate disclosure surface from message body. Legal hold is an administrative break-glass capability, never ordinary search.

**Stale ideas discarded.**
- Message edit silently rewrites history (no audit trail) — REJECTED.
- Attachments stored as raw bytes in `messages.body` blob — REJECTED.
- Full PHI in notification preview / lock-screen / SMS companion / search snippet — REJECTED.
- Legal hold / eDiscovery / compliance export treated as ordinary search — REJECTED.
- Async chat surface marketed as emergency channel — REJECTED.
- Thread "done" message treated as task completion — REJECTED.
- Queue-routed message treated as "handled" by read receipt — REJECTED.

### Round 4 — Three-state attachment + iOS-vs-OMNI-native markup + culture clause (clarifications s-v)

**Trigger.** "Please tell me a screenshot can enter the group chat, or a photo. What happens to a new PDF added in through a group chat? That doesn't seem like a good way to enter info for a patient? Does our operational work on a patient get attached to their chart??? Is that safe??? What if we say 'patient super angry, don't treat them, or staff laughs at them' and then an audit turns it up."

**Key discovery (5 of 8).** **A file in chat is NOT in the chart.** This is the cleanest safety boundary in the whole arc. The three states: chat-attachment → reviewed/classified → filed-to-chart (only the last is canonical clinical truth, and only via capability-gated disposition).

**Key discovery (6 of 8) — surfaced same round, when user asked about drawing/markup.** **iOS-flattened-upload vs OMNI-native-markup is the right pragmatic distinction.** Doctrine shouldn't pretend it can reconstruct a camera-roll original it never received (the iMessage reality). If the user pre-marked a screenshot before uploading, the flattened image IS the source artifact for that thread. But if markup happens INSIDE OMNI against an existing artifact, original must be preserved + annotation becomes derived. This gives iOS ergonomics where OMNI never owned the source + healthcare-grade audit where OMNI does own the source.

**Stale ideas discarded.**
- Attachment auto-files to chart on upload without explicit disposition — REJECTED.
- OMNI-native markup overwrites original source artifact — REJECTED.
- PDFs treated identical to flattened image uploads without original preservation — REJECTED.
- Internal collaboration as consequence-free backchannel — REJECTED.
- Markup stored as raw bytes in message metadata blob — REJECTED.

### Round 5 — Patient-facing rich-media parity + thread-kind parameterization (clarifications w-x)

**Trigger.** "Will our patient messaging retain the same level of ability? Like, an ops team should be able to send a photo or a screenshot, annotate it, even send video. A provider should be able to screenshot an aftercare plan and annotate on it, and send it to patient. THAT is how real care is playing out right now on RingCentral currently for us in every day use at our separate medspa." + "Will our current architecture allow us to pivot from entrenched 'specialty group message' format, and become 1:1 with provider if needed, or 1:1 with front desk, or 1:1 with your esti?"

**Key discovery (7 of 8).** **Thread-kind parameterization prevents the worst architectural mistake the platform could make.** If `message_threads.thread_kind` is hardcoded or absent, every future medspa / aesthetics / multi-relationship deployment hits a wall. Patient-facing thread substrate admits care_team / provider_1:1 / front_desk / esthetician / injector / billing / support / post_procedure / location_team / role_queue / on_call. Specialty-group is ONE routing shape, NOT the substrate. The "1:1 UX preserves backend coverage" insight is gold — patients feel direct connection to their injector / esthetician / provider while the substrate quietly admits MA coverage, on-call rotation, role-queue fallback.

**Stale ideas discarded.**
- Patient-facing media treated as casual iMessage attachment without scan/audit/PHI/capability-gate — REJECTED.
- Patient-facing thread substrate hardcoded to specialty/care-team — REJECTED (medspa-blind failure mode).
- 1:1 patient thread without backend coverage / escalation / role-queue fallback — REJECTED (1:1-orphans-when-staff-off-duty failure mode).

### Round 6 — Internal-membership-vs-patient-visible-roster + care-team/coverage-layer (clarifications y-z)

**Trigger.** "Will operators add a new group member to the user group chat? Like, the system may automatically populate a specialty group for peptides — how does someone get added? Add themselves? How does that show up or not show up, on the user side? What if there are 5 providers lurking on a chat? Does the patient see all of them always, or just who we choose to reveal?" + "What will actually control the default provider, default MA, default NP in a group chat? Like, what if a provider quits the company, who defaults? The next on-call provider or something? Geographically constrained, of course, like Hims model."

**Key discovery (8 of 8).** **Internal access membership ≠ patient-visible roster.** Without this distinction, the platform either (a) exposes every backend lurker to the patient (creepy, confusing) or (b) lets curious staff self-join any patient thread (PHI breach). The fix is two distinct concepts: backend internal participants (who can ACCESS and ACT) vs patient-visible roster (governed by display policy — named staff / role-title / team alias / "Care Team" label). And **patient-facing thread membership is DERIVED from a care-team/coverage assignment layer; the thread CONSUMES that layer, never hardcodes membership** — provider quits → coverage rule selects replacement (next on-call / state-licensed pool / coverage group / CMO queue / unassigned-queue); thread stays active; three modes of patient-visible disclosure (silent backend / message-authored / explicit transition notice).

**Stale ideas discarded.**
- Internal access membership identical to patient-visible roster (every backend observer exposed) — REJECTED.
- Staff self-join into patient thread allowed without authorization (curious browse) — REJECTED.
- Thread membership hardcoded in thread instead of derived from care-team/coverage assignment layer — REJECTED.
- Patient-visible disclosure required for every backend coverage change — REJECTED (only primary-provider/high-touch needs explicit transition notice).
- Care-team/coverage rules hardcoded in chat substrate — REJECTED (lives in future care-team/coverage substrate; chat consumes).

### Round 7 — General-enterprise-platform coexistence + AI Response Assist (clarifications aa-bb)

**Trigger.** "Teams has Copilot right alongside it. Because our system is building its own Teams, will we lose out on things by not just incorporating Teams???" + "One of the KEY things we have been using ChatGPT for for SMS messaging from the main office line is: screenshot the thread messages, prepare your partial answer, all sloppy and all; ChatGPT looks at the thread and the raw text draft, then gives us polished output. It's not a huge deal to continue doing this, HIPAA concerns at 500M scale tho, also, its (slightly) inefficient to be screenshotting back into chat. We need this ability in app to use full level AI to suggest responses, not just basic RingCentral template shit."

**Key discovery.** **OMNI is NOT a Teams/Slack/M365/Workspace clone. The external enterprise platform is NOT the source of truth for OMNI patient-context.** Integration via notifications + deep links + governed connectors, never source-of-truth swap. Specific vendor names are illustrative; doctrine binds the pattern, not the brand. AND: **the screenshot-into-external-ChatGPT workflow is a named compliance anti-pattern**. Design rule binding: "the compliant workflow must be easier than the workaround" — if OMNI's in-app AI is worse than copy-paste-into-ChatGPT, staff route around the platform and HIPAA posture becomes performative.

**Stale ideas discarded.**
- Build OMNI internal_collaboration as a generic enterprise-chat clone (Teams/Slack/M365/Workspace/future-tool clone) — REJECTED.
- Use external enterprise platform as the source of truth for OMNI patient-context — REJECTED.
- Accept screenshot-into-external-ChatGPT as the patient-context AI drafting workflow — REJECTED (PHI exfiltration at scale).
- Defer in-app AI response-assist as nice-to-have — REJECTED (foundational because absent it staff WILL use external AI).

### Round 8 — Scenario matrix discipline switch (the procedural correction)

**Trigger.** "How many more seams do you guys want me to spot????? Like, you guys are idiots. These are just off the top of my head."

**Key procedural discovery.** **After 7 rounds of user-finds-seam-AI-patches, the right move was to switch from reactive seam-discovery to a scenario matrix.** The matrix ran 66 operational scenarios across 7 buckets (patient-facing messaging, internal collaboration, staffing/coverage, artifacts/media, AI/templates, search/notifications, cross-cutting/external) and classified each as ✅ covered / 🟡 small guardrail needed / 🔮 future preflight / ⚫ not relevant. **Result: 57 covered, 1 small guardrail (Teams brand-genericization), 8 future preflights, 0 unhandled.** The matrix confirmed the doctrine was solid; only the Teams wording patch needed before execution.

**Stale ideas discarded.**
- Reactive seam-by-seam discovery as the path to doctrine completeness — REJECTED. By round 4, run the scenario matrix.

### Round 9 — Teams brand-genericization patch (the final wording fix)

**Trigger.** "Side note: why are we saying it will be Copilot and 365? Like, idk if it will be another app or what. Teams seems fine okay. Idk if ChatGPT will have a messaging Teams version in the future? Why are we committing to specific brands. Should we be agnostic."

**Key discovery.** **Doctrine binds the pattern, not the brand.** "Teams/M365" became "general enterprise collaboration platforms (e.g., Microsoft Teams, Slack, Microsoft 365, Google Workspace, and future enterprise chat / Copilot-class tools that may emerge)." When the chosen platform changes, the doctrine still holds. Apply this discipline to any future arc that touches a third-party tool.

**Stale ideas discarded.**
- Hardcoding specific vendor names in doctrine clauses — REJECTED for any future doctrine touching third-party platforms.

---

## Impact on Phase 4H arc work (cross-arc map)

DL-12 is doctrine-only (no migration / schema / rules / code). The arc-work impact is **what inherits cross-substrate obligations**, **what is unaffected**, and **what gains new substrate hooks**.

### Already shipped — unaffected

| Arc | Status | Why unaffected |
|---|---|---|
| **c1 in-app inbox** (shipped) | `patient_inbox_messages` substrate; one-way patient-facing notifications | DL-12 binds lifecycle for `patient_inbox_messages` cross-substrate (per §1V.10, primitive #1 actor_type, queue-routing state machine for queue-claimed items), but no migration required today; c1 substrate is already conformant. |
| **c2 rich chat rendering** (shipped at `8f02bc0`) | `messages` substrate; patient-facing two-way chat | DL-12 binds c2 patient chat as patient-facing-thread substrate; the `messages` substrate is already conformant with thread_kind parameterization admissibility (substrate sketch in §7.14.4 extended is for future internal_collaboration sibling, not c2). c2 stays as shipped. |
| **DL-7 / DL-8 / DL-9 / DL-10 / DL-11** (all shipped) | Foundational locks | DL-12 supersedes none; refines/strengthens DL-7 (canonical-state-in-substrate cross-link), DL-8 (sibling admission discipline applied to fax + thread storage), DL-10 (relationship scope inherited by thread membership + patient-visible roster), DL-11 (three messaging surfaces with cross-substrate lifecycle). |

### Future arc work — INHERITS DL-12 cross-substrate obligations

| Arc | Status | What DL-12 obligates |
|---|---|---|
| **c3 `/inbox` UI** | Next likely commit; UI for `patient_inbox_messages` | UI must respect §1J.12 preview/snippet privacy + §1V.10 retention parameterization + §1Q.14.1(d) patient notification preference criticality overrides. No substrate change needed. |
| **c4 `patient_action_items` substrate build** | Re-scoped per DL-10 + DL-12 | Must distinguish "patient action item" (substrate for tasks the patient must complete) from "internal team thread about a patient" (DL-11 internal_collaboration). DL-12 invariant 28 (thread-to-task transitions are explicit structured operations) binds: thread completion lives in task substrate, NOT in thread message text. DL-12 invariant 30 (queue-routed work state machine) binds: read receipt ≠ accountability. **HIGH PRIORITY** because action items + queue-routed work are the substrate for the 9pm-front-desk-queue elite-ops scenario. |
| **External-line first-touch preflight** | Future | Contact-identity layer for unknown numbers; Twilio inbound webhooks; ops triage queue. DL-12 invariants 17 (per-substrate storage), 19 (thread search/visibility), 36 (patient-visible roster), 37 (care-team/coverage derived membership) all apply. NOT BLOCKED. |
| **Internal_collaboration sibling activation** (DL-11 sibling #19) | Future; substrate sketch in §7.14.4 extended with DL-12 fields | When activated: `internal_threads`, `internal_thread_messages`, `internal_thread_participants`, `internal_thread_object_links`, `internal_thread_queue_state`, `patient_visible_thread_roster_label` + internal-snippet typed/versioned registry inside the sibling. The substrate sketch is concrete enough to migrate from. DL-12 invariants 14 (AI participation bounds), 16 (system/AI-thread provenance + anti-noise), 20 (patient-linked-thread-projection), 23 (edit-history), 30 (queue-routing state machine), 33 (not-a-consequence-free-backchannel) bind cross-substrate. |
| **Care-team/coverage assignment substrate** | Future; **HIGH PRIORITY** because c4/c5+ patient-facing thread shapes depend on it | Full staffing algorithm. Inputs: `patient_relationship` + `care_program` + `specialty` + `geography/licensure` (Hims-style) + `location` + `on-call/coverage` schedule + `staff_active_status` + `capability/credential`. Entry/exit paths bound by §1G.3(d); provider-quits-coverage-rule by §1G.3(e); three modes of patient-visible disclosure by §1G.3(f). Consumption contract is bound by DL-12; substrate migration future. |
| **Fax pipeline activation** | Future | Composed from primitive #10 + primitive #16 + §1P + §1G.6.2 + future provider_tasking + future c4 patient_action_items. NOT a new sibling per §5.3(a). Full preflight when first concrete fax need arrives. |
| **Future patient-proxy / caregiver / parent-on-behalf-of-minor actor type extension** | Future | Primitive #1 taxonomy admits extension via `patient_proxy` / `caregiver` / `parent_on_behalf_of_minor` when DL-10 relationship layer formalizes proxy relationships. NOT BLOCKED. |
| **Future patient-to-patient peer support surface** | Future; out of DL-11/DL-12 scope | New surface (e.g., GLP-1 group sessions, peer recovery). New doctrine arc when group programs / peer support pressure surfaces. |
| **Future enterprise-platform connector layer** | Future | Governed connector to Microsoft Teams / Slack / Microsoft 365 / Google Workspace / future enterprise chat / Copilot-class tools. Notifications + deep-link integration; never source-of-truth swap per DL-12 invariant 38 + §7.14.9. |
| **In-app AI Response Assist build** (UI + LLM integration) | Future | DL-12 invariant 39 names the binding doctrine + design rule "compliant workflow must be easier than the workaround". Actual UI/UX + LLM integration + audit trail implementation lands when first concrete pressure activates. The longer staff use external screenshot-into-ChatGPT, the more compliance posture is performative (zone 67). |
| **Markup / annotation editor build** | Future | Will respect §5.3(b.ii) iOS-vs-OMNI-native distinction + §5.3(b.iii) PDF stricter discipline. |
| **Patient-facing video pipeline** | Future | Transcoding + scan + size limits + secure-portal-link discipline for SMS rails per §5.3(b.v). |
| **Voice notes / audio messages** | Future | §5.3(b.v) admits "voice notes where policy allows". Future media pipeline. |
| **AI translation / multi-language drafts** | Future | Under primitive #11 description. |
| **Scheduled / time-delayed send** | Future | UI/scheduling feature; not foundational. |
| **Records export (HIPAA Right of Access)** | Future | Separate substrate (patient_data_export); not chat-specific. |
| **Group video call from inside patient thread** | Future | Telehealth video session; separate substrate; chat may launch but not own. |
| **Emergency provider-to-provider direct line bypass** | Future | Voice infrastructure; out of DL-12 scope. |

### Phase 4H-pre / 4H-rules-runtime work — unchanged

The original Phase 4H-pre commits 1-5 trajectory (`outbound_jobs` lineage columns → `data_environment` dispatch gate → scaffold → parity proof) is unaffected by DL-12. DL-12 is doctrine, not Phase 4H-pre implementation.

---

## Pressure-test cycle history (for the seven-doc cycle convention)

| # | Date | Doctrine | Cycle docs |
|---|---|---|---|
| 1 | (earlier) | DL-1 through DL-9 (substrate vs operational, primitives, siblings) | MAIN + foundational + ADR + topology + radar + evolution |
| 2 | (earlier) | c2 communications topology + DL-10 reconciliation | Same |
| 3 | 2026-05-11 evening | DL-10 (identity / relationship) | Same |
| 4 | 2026-05-11 late evening | DL-11 (three messaging surfaces) | Same |
| 5 | **2026-05-12 early morning** | **DL-12 (cross-substrate lifecycle + 28 clarifications)** | **Same — this arc** |

The cycle has now run twelve times. Future doctrine of similar weight will run the same cycle.

---

## Lessons from this arc (for next time)

1. **Scenario matrix is the right discipline.** After seven rounds of user-finds-seam-AI-patches, switching to a 66-scenario pressure-test against the doctrine confirmed what was covered vs what was a real gap. Reactive seam-discovery is fine for the first 2-3 rounds; by round 4, run the matrix.

2. **Genericize brand names in doctrine.** "Teams/M365" became "general enterprise collaboration platforms (e.g., Microsoft Teams, Slack, Microsoft 365, Google Workspace, future enterprise chat / Copilot-class tools)". Doctrine binds patterns; brands are illustrative. When the chosen platform changes, doctrine still holds. Apply this discipline to any future arc that touches a third-party tool.

3. **Name anti-patterns as forcing-function failures.** Zone 67 (screenshot-into-external-AI) names the real-world workaround AS the compliance failure. Without that framing, the doctrine becomes aspirational. Design rule "the compliant workflow must be easier than the workaround" is now binding.

4. **"If you want it private, don't attach it to a patient."** The patient/object-linked-thread-projection rule (DL-12 invariant 20 + §1J.12(d)) is the cleanest substrate boundary in this arc. Once attached to patient context, thread inherits patient-context governance. Memorize the rule.

5. **"Read receipt ≠ accountability."** The 9pm-front-desk-queue scenario (zone 58 + §1G.6.2) is the killer use case that exposed why queue-routed work needs a state machine distinct from ordinary participant read state. Provider routes to queue → next AM staff reads → UI shows "read" → provider assumes "handled" → patient never gets booked. Fix: claim/complete/escalate task substrate state, separately tracked.

6. **"If it is in OMNI, write it like compliance may review it one day."** The not-a-consequence-free-backchannel culture clause (zone 33 + §1V.10(e)) is the cultural rule that makes the substrate retention discipline operationally credible.

7. **Doctrine binds the pattern, not the brand.** Repeated for emphasis.

---

*End of handoff. DL-12 LANDED. The substrate is unchanged; the doctrine binds.*
