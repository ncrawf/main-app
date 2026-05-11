# HANDOFF — Phase 4H-communications c2 (rich chat rendering at Klara-class depth)

**Date:** 2026-05-11
**Status:** SHIPPED. Migration applied to production; 30/30 integration test scenarios green; typecheck + lint clean.
**Provenance:** Implements [`PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md`](PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md) (revised after the substrate-reality audit that surfaced the `patient_action_items` gap).

---

## What landed

### Migration

[`supabase/migrations/20260516120000_phase_4h_communications_c2_chat_rendering.sql`](../../supabase/migrations/20260516120000_phase_4h_communications_c2_chat_rendering.sql) (515 lines). Applied via Supabase Management API.

Schema changes:

- `message_thread_participants`: added `last_read_message_id uuid` + `last_read_at timestamptz` (per-recipient Slack-style read pointer)
- `messages`: added `classification text` (CHECK-constrained to `prescribing_decision | lab_review | general | safety_alert | billing`; deliberately **excludes** `clinical_required` per the single-SoT discipline) + `client_message_id text` + `client_request_fingerprint text`
- `messages_thread_created_idx` replaced with `messages_thread_created_id_idx (message_thread_id, created_at desc, id desc)` — adds the `id` tie-breaker for `(created_at, id)` tuple comparisons used by unread-count queries
- Partial UNIQUE index on `(message_thread_id, client_message_id) WHERE client_message_id IS NOT NULL` — SQL-layer idempotency enforcement

SECURITY DEFINER orchestrators:

- `public.mark_thread_read(p_thread_id, p_participant_id, p_message_id)` — monotonic per-participant pointer advance with `(created_at, id)` tuple comparison
- `public.post_patient_message(p_thread_id, p_patient_id, p_body, p_client_message_id, p_client_request_fingerprint, p_metadata)` — transactional patient compose: validates ownership, enforces idempotency (existing row + fingerprint match → idempotent replay; fingerprint mismatch → raises `unique_violation` with `idempotency_key_reuse_mismatch` detail), inserts the row, advances the patient's own read pointer. Carries a TODO comment naming the c4 action-item-resolution dependency.

Trigger:

- `public.ensure_message_thread_for_care_program()` AFTER INSERT trigger on `care_programs` — auto-creates `message_threads` + patient `message_thread_participants` for every new care_program (idempotent; preserves the 1:1 program↔thread invariant)

Backfills:

- One `message_threads` row per existing `care_programs` row (1:1)
- One patient `message_thread_participants` row per thread

### Application code (NEW)

- [`lib/messages/computeMessageRequestFingerprint.ts`](../../lib/messages/computeMessageRequestFingerprint.ts) — centralized SHA-256 hash helper for idempotency fingerprint
- [`lib/messages/listMessagesForThread.ts`](../../lib/messages/listMessagesForThread.ts) — server-side message list + read state + unread-count derivation via `(created_at, id)` tuple
- [`lib/messages/postPatientMessage.ts`](../../lib/messages/postPatientMessage.ts) — patient compose entry; calls `post_patient_message` RPC + emits `patient_chat_message_sent` timeline event on fresh insert; translates `unique_violation` with idempotency-key-reuse marker into typed `IdempotencyMismatchError`
- [`lib/messages/markThreadRead.ts`](../../lib/messages/markThreadRead.ts) — thin TS wrapper around `mark_thread_read` RPC
- [`lib/messages/listMessageThreadsForPatient.ts`](../../lib/messages/listMessageThreadsForPatient.ts) — drives `/messages` list from `message_threads` SoT (not `careOverview.programs`)
- [`app/api/messages/[threadId]/messages/route.ts`](../../app/api/messages/[threadId]/messages/route.ts) — patient-facing GET + POST (`patientId` from query/body, verified via `assertPatientPortalSessionOnly`)
- [`app/api/messages/[threadId]/read/route.ts`](../../app/api/messages/[threadId]/read/route.ts) — patient-facing PATCH for mark-read
- [`components/dashboard/MessagesThreadView.tsx`](../../components/dashboard/MessagesThreadView.tsx) — client component rendering ordered bubbles, classification chips, "Response needed" chip from `metadata.clinical_required`, integrated compose with optimistic UI; hydrates from server-fetched `initialView` to avoid setState-in-effect cascades
- [`scripts/test-chat-rendering-c2.ts`](../../scripts/test-chat-rendering-c2.ts) — 9-scenario live-DB integration test

### Application code (MODIFIED)

- [`app/dashboard/[patientId]/messages/[threadId]/page.tsx`](../../app/dashboard/[patientId]/messages/[threadId]/page.tsx) — hollow welcome card REMOVED; server fetches `listMessagesForThread`, passes `initialView` to `MessagesThreadView`
- [`app/dashboard/[patientId]/messages/page.tsx`](../../app/dashboard/[patientId]/messages/page.tsx) — list now driven by `listMessageThreadsForPatient` (message_threads SoT) instead of `careOverview.programs`; per-thread unread count badge added
- [`lib/events/timeline-event-types.ts`](../../lib/events/timeline-event-types.ts) — registered new `patient_chat_message_sent` timeline event type
- [`scripts/lint-event-types.ts`](../../scripts/lint-event-types.ts) — added `test-chat-rendering-c2.ts` to EXEMPT_PATHS

### Doc updates

- [`docs/architecture/communications_topology.md`](../../docs/architecture/communications_topology.md) — §2 action-items row now records substrate-reality (NO table; UI reads derived dashboard model); §4 inbound rails corrected to RESERVED-not-built for `inbound_emails` + `inbound_call_transcripts`; new §11 names the external-line / pre-account architectural gap with the binding "dual-substrate four-layer model" preference; §7 commit ladder updated to reflect c4's re-scoping
- [`.cursor/plans/PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md`](PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md) — substrate-reality audit section added; all action-item dependencies removed from scope and deferred to c4

---

## Substrate-reality audit (the late-stage finding)

c2 was approved with a hidden dependency on `patient_action_items` (the §1G.11 satisfy-on-write-path discipline). A pre-execution grep audit on 2026-05-11 surfaced that the table **does not exist** — explicitly confirmed by the comment at [`lib/intake/documents/route-patient-document.ts:38`](../../lib/intake/documents/route-patient-document.ts) ("Patient action item closure (patient_action_items table not yet built)").

The audit also revealed:

- `message_threads` and `message_thread_participants` were created by the 2026-04-30 migration but had **zero rows** — no application code had ever inserted to them. c2's switch of the `/messages` list page from `careOverview.programs` to `message_threads` SoT would have rendered an empty list without the backfill that c2 added in response.
- `messages` table is also empty pre-c2; c2 is the first writer.
- `inbound_emails` and `inbound_call_transcripts` (cited in MAIN §1P line 6810-6811) are reserved-not-built; no migrations create them.

Impact on c2 scope:

- **Removed:** action-item creation, action-item resolution, drift-recon between `messages.metadata.clinical_required` and `patient_action_items`, the §4.7 cascade-resolve-guard scenario
- **Added:** migration backfill for `message_threads` + `message_thread_participants`; the AFTER INSERT trigger on `care_programs` to auto-create threads going forward
- **Re-scoped:** c4 is now "build the `patient_action_items` substrate + lifecycle + APIs + emitter wiring + UI rewire" (was: "audit depth")

**This is the meta-lesson the c2 arc preserves:** doctrine documents (MAIN, foundational doc, ADR) describe the binding architecture, but grep-against-the-substrate is the final check before execution. Three rounds of careful review (ChatGPT + Opus) didn't catch the gap because reviews were against the preflight, not against the migration set. The pre-execution grep caught it cheaply.

---

## Verification status

**Green:**
- `npm run typecheck` — clean
- `npm run lint` — clean (1 pre-existing warning on `useMemo` unused import fixed by switching to server-component initial fetch)
- `npx tsx scripts/lint-event-types.ts` — clean; includes new `patient_chat_message_sent` registration
- `npx tsx scripts/test-chat-rendering-c2.ts` — **30/30 scenarios PASS** (9 scenarios with multiple assertions each)

**Pre-existing failures (not introduced by c2):**
- `npx tsx scripts/lint-rules-templates-scaffold.ts` — fails on `repo/rules/clinical_decision/case_denied_v1.ts` referencing the wrong sibling's discriminant. From c9 commit `aa8fa4f`. Reproduces on `main` with c2 stashed.
- `npx tsx scripts/test-rules-templates-scaffold.ts` — 137/138 pass; the 1 failure is the CI-lint-smoke that depends on the failing scaffold lint above (cascading).
- `npx tsx scripts/test-events-registry.ts` — 28/29 pass; the 1 failure is `RULE_AND_NOTIFICATION_AUDIT_ACTIONS` alphabetical-ordering. Reproduces on `main` with c2 stashed.

Verified pre-existence by stashing c2 changes and re-running. None of the three failures are caused by c2 changes.

---

## What c2 lets future commits do

After c2 lands, the chat surface is real:

- Patients see actual conversation threads with per-recipient read state, classification chips, "Response needed" indicators, and an integrated compose box
- Every existing `care_programs` row has a backfilled thread + patient participant row
- New `care_programs` automatically receive a thread + patient participant via the AFTER INSERT trigger
- The patient compose path writes to `messages` for the first time in the platform's history
- Idempotency is enforceable end-to-end via `client_message_id` + fingerprint

Future commits ride this substrate:

- **c3** ships the `/inbox` route for `patient_inbox_messages` (the c1 substrate; UI deferred)
- **c4 (re-scoped)** builds the `patient_action_items` table + lifecycle + APIs + emitter wiring + UI rewire. When c4 lands, the TODO comment in `lib/messages/postPatientMessage.ts` is replaced with the actual action-item resolution call inside the `post_patient_message` SECURITY DEFINER orchestrator
- **c5** adds voice-call-from-thread (writes `voice_call` rows linked to `message_thread_id`)
- **c6** adds inbound SMS / email routing via §1P pipeline
- **c7+** adds video integration + cross-channel transcript composition
- **Parallel track:** provider-mirror UI (My Queue, clinical inbox, lab review drawer) consuming the per-staff `last_read_message_id` pointer + `messages` rows + future `patient_action_items`

External-line / Twilio main-line / pre-account communications is a **separately-scoped sub-phase** named in [`docs/architecture/communications_topology.md`](../../docs/architecture/communications_topology.md) §11. Future preflight: `PREFLIGHT_<future>_phase_4h_communications_external_line_inbox.md`. The §11 architectural preference (dual-substrate four-layer model vs nullable `patient_id` on `messages`) is binding guidance for that future preflight.

---

## What c2 explicitly does NOT do (named here so future contributors don't expect them)

- Does NOT create `patient_action_items` (c4)
- Does NOT resolve action items on patient compose (c4)
- Does NOT ship inbound SMS / email / call routing (c5-c6+)
- Does NOT ship voice click-to-call (c5)
- Does NOT ship video click-to-join (c7+)
- Does NOT ship the provider-mirror UI (parallel track)
- Does NOT ship staff-on-behalf-of-patient (assisted) compose (provider-mirror parallel track)
- Does NOT ship reactions / per-message receipts / typing indicators
- Does NOT ship realtime push (Supabase Realtime, etc.)
- Does NOT ship attachments inline in chat (renders later by joining `patient_document_routing`)
- Does NOT ship cross-channel transcript composition (voice_call cards inside thread)
- Does NOT ship disclosure-policy gate dual-fan-out (tier_3 in_app + tier_1 vague companion)
- Does NOT activate `repo/rules/communications_lifecycle/` sibling folder
- Does NOT relax `message_threads.care_program_id NOT NULL UNIQUE` (future commit when non-program-shaped threads first land)
- Does NOT introduce non-program-shaped threads (ops/support, post-procedure, billing)
- Does NOT relax `messages.patient_id NOT NULL` (external-line preflight territory)
- Does NOT touch the legacy `/api/patient-portal/support-request` route — that path still writes `patient_timeline_events` + `patient_support_requests`; future migration of support-request to use c2's chat substrate is out of scope

---

## Watch zones for the next session

- **Radar zone 28** (care-task substrate fragmentation / metadata jsonb leakage) — c2 partially pressure-tested it (typed `classification` column over jsonb bag; single SoT for `clinical_required`). c4's action-item-binding drift recon closes the loop.
- **Radar zone 31** (Day 0 Klara-class depth-bar drift) — c2 closed the most visible gap (hollow thread page) but did NOT close the full Klara/RingCentral bar. The §1 bounded claim in the c2 preflight names the remaining pieces. Anyone updating the topology doc §9 must record "rich chat → substrate YES, UI YES, **partial Klara depth (portal authenticated chat only)**" — NOT "depth gap NONE".
- **§1G.3 turn model** — c2 writes `metadata.clinical_required` on staff turns (when a staff sends one with that flag). c4 binds the flag to a `patient_action_items` row.
- **External-line non-foreclosure** — Future preflights MUST NOT introduce constraints that foreclose the dual-substrate four-layer model named in topology doc §11. Specifically: don't introduce ad-hoc INSERT paths into `messages` from non-portal contexts; don't paint patient-id-only assumptions into new code paths; don't bind Twilio webhooks directly to `messages.INSERT`.

---

## File-by-file summary

| Path | Action | Notes |
|---|---|---|
| [`supabase/migrations/20260516120000_phase_4h_communications_c2_chat_rendering.sql`](../../supabase/migrations/20260516120000_phase_4h_communications_c2_chat_rendering.sql) | NEW | 515 lines; applied via Management API |
| [`lib/messages/computeMessageRequestFingerprint.ts`](../../lib/messages/computeMessageRequestFingerprint.ts) | NEW | SHA-256 helper; single SoT for normalization |
| [`lib/messages/listMessagesForThread.ts`](../../lib/messages/listMessagesForThread.ts) | NEW | Server-side data fetcher |
| [`lib/messages/postPatientMessage.ts`](../../lib/messages/postPatientMessage.ts) | NEW | Patient compose; transactional via SECURITY DEFINER; TODO for c4 action-item resolution |
| [`lib/messages/markThreadRead.ts`](../../lib/messages/markThreadRead.ts) | NEW | TS wrapper around `mark_thread_read` |
| [`lib/messages/listMessageThreadsForPatient.ts`](../../lib/messages/listMessageThreadsForPatient.ts) | NEW | Drives `/messages` page from `message_threads` SoT |
| [`app/api/messages/[threadId]/messages/route.ts`](../../app/api/messages/[threadId]/messages/route.ts) | NEW | GET + POST |
| [`app/api/messages/[threadId]/read/route.ts`](../../app/api/messages/[threadId]/read/route.ts) | NEW | PATCH mark-read |
| [`components/dashboard/MessagesThreadView.tsx`](../../components/dashboard/MessagesThreadView.tsx) | NEW | Real chat rendering React component |
| [`scripts/test-chat-rendering-c2.ts`](../../scripts/test-chat-rendering-c2.ts) | NEW | 9 scenarios, 30 assertions; live-DB integration test |
| [`app/dashboard/[patientId]/messages/[threadId]/page.tsx`](../../app/dashboard/[patientId]/messages/[threadId]/page.tsx) | MODIFIED | Hollow welcome card removed; server-side initial fetch passed to `MessagesThreadView` |
| [`app/dashboard/[patientId]/messages/page.tsx`](../../app/dashboard/[patientId]/messages/page.tsx) | MODIFIED | List driven by `message_threads` SoT |
| [`lib/events/timeline-event-types.ts`](../../lib/events/timeline-event-types.ts) | MODIFIED | Added `patient_chat_message_sent` |
| [`scripts/lint-event-types.ts`](../../scripts/lint-event-types.ts) | MODIFIED | Added c2 test to EXEMPT_PATHS |
| [`docs/architecture/communications_topology.md`](../../docs/architecture/communications_topology.md) | MODIFIED | §2 action-items, §4 inbound rails, §7 commit ladder, new §11 |
| [`.cursor/plans/PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md`](PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md) | MODIFIED | Substrate-reality audit section |

---

## Recommended next session entry point

Either:

1. **c3 — `/inbox` UI for `patient_inbox_messages`.** Substrate landed in c1; UI deferred. Builds the patient-facing inbox surface for system-fired governance-tracked notifications. Small scope (UI shell + list rendering + read/archive toggle + per-intent filtering).

2. **c4 (re-scoped) — `patient_action_items` substrate build.** Larger scope (~3-5 commits worth of work given the 13+ action item types in §1G.11 + lifecycle + emitters across §1G.11.4's authorized set + UI rewire). When c4 lands, c2's `postPatientMessage` TODO comment becomes a real action-item resolution call inside the SECURITY DEFINER orchestrator (move the resolution into PL/pgSQL so it's atomic with the message insert).

3. **External-line preflight.** The bigger Klara-class architectural commitment. See topology doc §11. Start with the four-layer model (rail event → contact identity → conversation queue → patient projection). Treat nullable `patient_id` on `messages` as the rejected default per §11's binding guidance.

**Architectural priority:** c4 is the largest visible gap remaining in the portal-chat arc (the "Response needed" chip patients see has no backing action-item state today; satisfaction-on-write is the discipline that closes that loop). External-line is the largest unaddressed strategic gap.

---

*End of handoff. c2 shipped substrate-honest after the substrate-reality audit. Future commits ride a chat substrate that is now consumer-bound for the first time.*
