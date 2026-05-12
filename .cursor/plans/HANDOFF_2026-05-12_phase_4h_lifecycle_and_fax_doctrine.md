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
