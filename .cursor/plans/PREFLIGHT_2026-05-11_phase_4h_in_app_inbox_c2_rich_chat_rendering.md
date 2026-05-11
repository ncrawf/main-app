# Preflight — Phase 4H-communications c2 (rich chat rendering at Klara-class depth)

**Status:** PROPOSED (revised 2026-05-11 after substrate-reality audit). Not yet implemented. Awaiting approval before execution.

**Substrate-reality audit (binding revision):** A pre-execution grep audit on 2026-05-11 surfaced three substrate gaps the prior review rounds missed:

1. **`patient_action_items` table is NOT BUILT.** Zero migrations create it; an explicit comment at [`lib/intake/documents/route-patient-document.ts:38`](../../lib/intake/documents/route-patient-document.ts) confirms: "Patient action item closure (patient_action_items table not yet built)." The §1G.11 surface is fully reserved in doctrine but not yet substrate.
2. **`message_threads` and `message_thread_participants` rows do NOT exist.** Tables were created by the 2026-04-30 migration but no application code inserts rows. Switching the `/messages` page from `careOverview.programs` to `message_threads` SoT without a backfill produces an empty list.
3. **`messages` table is also empty.** The existing composer posts to `/api/patient-portal/support-request` which writes to `patient_timeline_events` + `patient_support_requests`, NOT to `messages`. c2 IS the first writer to `messages`.

**Impact on this preflight:** the prior version (drafted before this audit) assumed `patient_action_items` existed and the §1G.11 satisfy-on-write-path discipline could resolve action items transactionally on patient compose. That dependency is removed. Action-item resolution moves to **c4 (rescoped from "audit action items depth" to "build the `patient_action_items` substrate + lifecycle + APIs + emitter wiring + UI depth")**. The §4.1 migration now also backfills threads + patient participants for existing care_programs so the list page has data.

**Phase position:** c2 of the Phase 4H communications surface arc. c1 landed `send_in_app` + `patient_inbox_messages` substrate (one-way governance-tracked notifications). c2 lands real bidirectional chat rendering on the existing `messages` + `message_threads` + `message_thread_participants` substrate (landed 2026-04-30), replacing the hollow shell at `app/dashboard/[patientId]/messages/[threadId]/page.tsx`.

**Naming note:** the file is prefixed `in_app_inbox_c2_*` per the handoff's filename convention, but the surface c2 builds is the **two-way chat** surface (`messages`), not the **one-way inbox** surface (`patient_inbox_messages`). Both surfaces live inside the communications sibling per [`docs/architecture/communications_topology.md`](../../docs/architecture/communications_topology.md) §2. c3 ships the `/inbox` route for the inbox surface; c2 is chat.

**Doctrinal context:** DL-5 binds Klara/RingCentral-class depth on Day 0 for the activated communications domain. The hollow thread page is the most visible "Day 0 not yet" risk in the platform — radar zone 31's exact anti-pattern. c2 closes the gap.

---

## 1. Architectural commitment

c2 ships the **chat-rendering surface** at the depth bar DL-5 admits, scoped to substrate-reality:

- Real `messages` rendering inside `/dashboard/[patientId]/messages/[threadId]` (no more static "Care Assistant welcome" card). **c2 is the first writer to `messages`** — the table has existed since 2026-04-30 but is empty today.
- **Migration backfill**: one `message_threads` row per existing `care_programs` row + one patient `message_thread_participants` row per thread. Idempotent; safe to re-run. Without this, the list page is empty post-switch.
- **Per-recipient read state** modeled as a substrate column on `message_thread_participants` (not as jsonb metadata; radar zone 28 enforcement)
- **Per-thread unread count** derived via an indexed-cheap range scan from the read pointer + thread index already in place (see §3 for tie-break discipline)
- **Classification chips** visible to the patient on staff turns (`prescribing_decision`, `lab_review`, `general`, `safety_alert`, `billing` — `'clinical_required'` is deliberately NOT in the classification enum; see §4.1)
- **Turn-model "Response needed" chip** rendered from `messages.metadata.clinical_required` (the flag substrate is the metadata bool; binding to a `patient_action_items` row is c4 work, since the table does not exist yet)
- **Patient compose flow** writes a real `messages` row with `from_patient: true`, classification null, idempotency via `client_message_id`, `interaction_context` populated per §1Q.23

**What c2 deliberately does NOT do (moved to c4 per substrate-reality audit):**

- Create or resolve `patient_action_items` rows. The table doesn't exist substrate-side. The §1G.11 satisfy-on-write-path discipline waits for c4 to land the table + APIs + emitter wiring. c2's `postPatientMessage` carries a TODO comment naming the c4 dependency.
- Drift recon between `messages.metadata.clinical_required` and `patient_action_items`. Nothing to drift between yet.

**Bounded claim.** After c2, the **patient-side authenticated portal chat rendering gap is closed** AND **`messages` becomes a live consumer-bound substrate for the first time**. The communications domain as a whole is **not yet Klara/RingCentral-class** until the following land: c3 (inbox UI), **c4 (`patient_action_items` substrate + lifecycle + APIs + UI depth — NOTE: this is now substrate-build work, not just an audit)**, c5 (voice + click-to-call), c6 (inbound SMS / email routing into existing patient threads), c7+ (video + cross-channel transcript), the provider mirror parallel track, **and the separately-scoped external-line / pre-account communications architecture** (named gap; see "Non-foreclosure" below).

**Critical distinction (Hims-class vs Klara/RingCentral-class).** c2 ships **authenticated portal chat** — Hims-class for the in-app surface. OMNI's real first-touch communications are mostly **external** (main-line phone calls, main-line SMS to an unknown texter, walk-ins, post-procedure concerns, "running 10 minutes late" texts) and arrive **before patient identity is resolved**. That is a fundamentally different substrate shape than what c2 builds. Today's `messages.patient_id NOT NULL` + `message_threads.patient_id NOT NULL` (verified in the 2026-04-30 migration lines 124, 187) structurally forbid pre-account communications on this substrate. c2 does not address that gap; the next architecture phase will.

**Non-foreclosure (binding for c2).** c2 must not paint the external-line architecture into a corner. Specifically: (a) the new columns added to `messages` and `message_thread_participants` are additive; they do not constrain a parallel `contact_identities` / `communication_events` substrate; (b) the new lib functions (`postPatientMessage`, `listMessagesForThread`, `markThreadRead`) are patient-portal-scoped and do not preclude a parallel staff / ops / triage API consuming a different substrate for unmatched events; (c) the §4.9 switch of the thread list to `message_threads` SoT is forward-compatible with future non-patient-bound thread shapes (when the constraint relaxation lands). The full external-line architecture lands as a separately-scoped preflight: `PREFLIGHT_<future>_phase_4h_communications_external_line_inbox.md` (Twilio webhook ingest, contact-identity primitive, ops triage workspace, link-to-patient workflow with provenance, lead-to-patient conversion). See [`communications_topology.md`](../../docs/architecture/communications_topology.md) §11 for the four-layer model (rail event → contact identity → conversation queue → patient projection) and the named gap.

Anyone updating [`communications_topology.md`](../../docs/architecture/communications_topology.md) §9 after c2 must record "rich chat → substrate YES, UI YES, **partial Klara depth (portal authenticated chat only; action-item binding pending c4)**" — not "depth gap NONE."

---

## 2. Doctrinal alignment

| Doctrine clause | This commit |
|---|---|
| **DL-5** Day 0 elite-class depth for activated communications | Closes the most visible "shell, not depth" gap |
| **DL-3** Sibling-local discriminants | No new discriminant introduced; `messages` already lives in the messaging substrate |
| **DL-7** Structured-first authoring | Classification is a typed column, not a freeform string; turn model is structured |
| **§1G.3** clinical_required turn semantics | Turn flag rides `messages.metadata.clinical_required` (the only fact c2 can write today); patient surface renders a "Response needed" chip from this flag; **action-item binding is c4 work** because `patient_action_items` table doesn't exist substrate-side |
| **§1G.11** action items satisfy-on-write-path | **DEFERRED to c4.** c2's `postPatientMessage` carries a TODO comment naming the c4 dependency; no action-item creation or resolution in this commit |
| **§1Q.23** interaction_context propagation | Every new `messages` row carries `metadata.interaction_context` per §1Q.23 |

---

## 3. The critical design pressure test: per-recipient read state

The existing `messages` table has **no read state at all** (verified — no `read_at` column; only `created_at` on `messages` row). c2 must add it. Four options were pressure-tested:

| Option | Shape | Pros | Cons | Verdict |
|---|---|---|---|---|
| **A. `messages.read_at` single column** | One timestamp per message | Cheap | Collapses recipients (`message_thread_participants` is N≥2; one timestamp cannot model "patient read, staff didn't") | **Reject** — inadequate per §1 (per-recipient read state) |
| **B. `messages.metadata.read_by[]`** | jsonb array of `{participant_id, read_at}` | Zero schema change | **Radar zone 28** — exactly the care-task-state-in-jsonb-leakage anti-pattern the doctrine forbids | **Reject** — substrate fragmentation |
| **C. `message_thread_participants.last_read_message_id`** | Per-participant "last read" pointer + timestamp | O(1) write per mark-read; **indexed-cheap** unread count (range scan on the existing `messages_thread_created_idx`, not O(1)); substrate-shaped column; Slack/Linear/Teams pattern | Doesn't model "read 3 but not 5" partial-read state | **Recommended** — partial-read is not a chat requirement; the use case is "open thread → everything is now read" |
| **D. New `message_read_receipts` join table** | `(message_id, participant_id, read_at)` PK | Maximum flexibility; per-message granularity; future-proof for delivery receipts | O(N) rows per N messages × M participants; O(N) writes per "mark thread read"; over-engineered for the use case | **Defer** — admissible if reactions / per-message receipts become a real requirement; not a c2 scope item |

**Selected:** Option C. Add `last_read_message_id uuid REFERENCES messages(id)` and `last_read_at timestamptz` to `message_thread_participants`.

**Tie-breaker discipline (mandatory).** `created_at` collisions are rare but real (clock skew, batch inserts in the same transaction). All comparisons against the pointer use lexicographic `(created_at, id)` tuples, not bare `created_at >`:

```sql
-- correct (collision-safe):
WHERE (m.created_at, m.id) > (
  SELECT created_at, id FROM public.messages WHERE id = p.last_read_message_id
)
-- wrong (silent miscount on timestamp collision):
WHERE m.created_at > (SELECT created_at FROM public.messages WHERE id = p.last_read_message_id)
```

The existing `messages_thread_created_idx (message_thread_id, created_at desc)` covers the common case. Extend it to `(message_thread_id, created_at desc, id desc)` so the tie-breaker rides the same index without a sort step.

**Forward-compat:** if c5+ adds reactions or per-message receipts, the join-table model (Option D) lands then as an additive primitive. c2's pointer model is not blocking that path; it's just not pre-emptively shipping it.

---

## 4. File-by-file change set

### NEW files

#### 4.1 `supabase/migrations/<ts>_phase_4h_communications_c2_chat_read_state.sql`

Single migration:

- Add columns to `public.message_thread_participants`:
  - `last_read_message_id uuid NULL REFERENCES public.messages(id) ON DELETE SET NULL`
  - `last_read_at timestamptz NULL`
- Add columns to `public.messages`:
  - `classification text NULL CHECK (classification IS NULL OR classification IN ('prescribing_decision', 'lab_review', 'general', 'safety_alert', 'billing'))` — **visual-chip taxonomy only**; deliberately does **NOT** include `'clinical_required'` (see "Single source of truth for clinical_required" below). Nullable so existing rows remain valid; new staff turns set explicitly; patient turns may leave null or carry `general`.
  - `client_message_id text NULL` — **idempotency anchor for patient compose**. Clients generate a UUID-shaped id per send attempt; retries reuse the same id. Replaces any prior "idempotencyKey parameter without a constraint" hand-wave.
- Replace `messages_thread_created_idx` with `messages_thread_created_id_idx (message_thread_id, created_at desc, id desc)` — same primary purpose, with the id tie-break that §3 mandates.
- Add UNIQUE constraint `messages_client_id_per_thread (message_thread_id, client_message_id) WHERE client_message_id IS NOT NULL` — enforces idempotency at the SQL layer; duplicate-tap retries become no-ops.
- Add `public.mark_thread_read(p_thread_id uuid, p_participant_id uuid, p_message_id uuid)` SECURITY DEFINER:
  - Validates participant belongs to thread; validates message belongs to thread.
  - Updates `last_read_message_id` + `last_read_at` only if the new message is strictly later than the current pointer per `(created_at, id)` tuple comparison (idempotent + monotonic; never regresses).
  - Returns updated participant row.
- Index: `(message_thread_id, last_read_message_id)` on participants for unread-count joins.
- SQL comments on every new column documenting the design rationale and pointing back at this preflight.

**Single source of truth for clinical_required.** The turn flag `clinical_required` lives ONLY on `messages.metadata.clinical_required` per §1G.3. It is **never** also a value in `messages.classification`. The patient-facing "Response needed" chip renders by reading the metadata flag, not by reading the classification column. This is the §1G.3-aligned shape: clinical_required is a behavioral / lifecycle attribute, while `classification` is a presentation-only visual tag.

**Drift recon between metadata flag and action item: DEFERRED to c4.** Originally the c2 preflight specified a recon query verifying every `metadata->>'clinical_required' = 'true'` row has a matching `patient_action_items` row. The substrate-reality audit revealed `patient_action_items` does not exist substrate-side. The recon path moves to c4 where the action-item table + lifecycle land together. c2's clinical_required flag is set by staff turns (future provider-side compose path; not in c2 either) and read by the patient UI to render the "Response needed" chip; that's the full c2 lifecycle for now.

**Migration backfill (NEW per substrate-reality audit).** The 2026-04-30 messaging migration created `message_threads` + `message_thread_participants` but no application code has ever inserted rows. Switching the `/messages` page from `careOverview.programs` to `message_threads` SoT (per §4.9) without a backfill produces an empty list. The c2 migration adds:

```sql
-- Backfill 1: one message_threads row per existing care_program (idempotent).
-- care_programs.patient_id is NOT NULL (verified 2026-04-22 migration line 59);
-- message_threads.care_program_id is UNIQUE NOT NULL; the NOT EXISTS guard
-- makes this safe to re-run.
insert into public.message_threads (care_program_id, patient_id)
select cp.id, cp.patient_id
from public.care_programs cp
where not exists (
  select 1 from public.message_threads mt where mt.care_program_id = cp.id
);

-- Backfill 2: one patient participant per thread (idempotent).
-- The CHECK constraint on message_thread_participants requires
-- patient rows have patient_id set + staff_profile_id null.
insert into public.message_thread_participants (message_thread_id, kind, patient_id)
select mt.id, 'patient', mt.patient_id
from public.message_threads mt
where not exists (
  select 1 from public.message_thread_participants mtp
  where mtp.message_thread_id = mt.id and mtp.kind = 'patient'
);
```

Staff participants are NOT backfilled — they join when a staff member first replies in a thread (future provider-side compose path; not c2 scope). At c2 ship time, every existing patient with an existing `care_programs` row will have exactly one thread + one patient participant row ready to render. No messages yet; rendering shows the empty thread state.

#### 4.2 `lib/messages/listMessagesForThread.ts`

Server-side data fetcher:

- Input: `{ patientId, threadId }`
- Authorizes via `assertPatientDashboardAccess(patientId)` + verifies the thread belongs to the patient
- Returns: ordered list of `messages` rows for the thread, joined with the patient's `message_thread_participants` row (to derive `last_read_message_id`), plus per-thread metadata (participants, classifications counts)
- Single-query pattern (no N+1)

#### 4.3 `lib/messages/postPatientMessage.ts`

Patient compose orchestrator (SECURITY DEFINER underneath; transactional):

- Input: `{ threadId, body, client_message_id }` — **`patientId` is NOT a function argument on the patient-facing path**; the orchestrator derives patient identity from session via `assertPatientDashboardAccess` per §4.5's security invariant. **`client_message_id` is REQUIRED on the patient POST API** (400 with `client_message_id_required` if missing); optional only at the SQL layer for backfill / legacy paths. (A separate `lib/messages/postStaffMessage.ts` exists for staff-on-behalf compose paths; that one takes explicit `patientId` + `staff_user_id` + `interaction_context.assisted: true`. The two functions deliberately do not share a signature.)
- Validates thread exists; validates patient is a participant of the thread; validates body length.
- **Idempotency with payload-fingerprint validation:** if a row with the same `(message_thread_id, client_message_id)` already exists, compute a stable fingerprint over the normalized request payload (`threadId`, `body`, attachment refs, patient-derived author identity) and compare to the same fingerprint stored on the existing row's `metadata.request_fingerprint`:
  - **Fingerprint matches** → return the existing row (idempotent replay; the safe case where a double-tap / mobile-retry replays the same compose).
  - **Fingerprint mismatches** → return **HTTP 409 `idempotency_key_reuse_mismatch`** with the existing row's id in the error payload for client recovery. This protects against the silent-reuse-with-different-body bug ChatGPT named: if a frontend bug reuses `client_message_id = X` for "Yes, I confirm" and later "Actually I have swelling," the second call must NOT return the first row. The fingerprint is computed at write time on the original insert and stored alongside the row; the constraint enforces uniqueness, the wrapper enforces semantic equivalence.

  **Centralized helper discipline.** The fingerprint function lives in **one** module — `lib/messages/computeMessageRequestFingerprint.ts` — that takes the normalized request payload (`threadId`, `body` after whitespace normalization, attachment refs sorted by id, derived author identity) and returns a stable SHA-256 hex digest. Both the insert path (`postPatientMessage`) and the duplicate-check path use this same helper; no other call site re-implements the normalization rules. Unit tests cover: (a) same logical payload produces the same fingerprint (deterministic + normalization-stable); (b) different body produces different fingerprint; (c) different attachment refs produce different fingerprint; (d) whitespace-only diffs in body are normalized away (whether they should be normalized is a product decision — c2 defaults to "yes, trim + collapse internal whitespace" with the test pinning the choice). Keeping the helper centralized prevents three call sites from each implementing slightly-different normalization and producing the impossible "same logical message, different stored fingerprint, drift" bug. If future idempotent write paths emerge (e.g., `recordInboxMessage` from c1, or staff-on-behalf compose), they may share or extend this helper — but they do not silently reinvent it.
- In a single transaction:
  1. Insert `messages` row with `from_patient: true`, `author_staff_id: null`, `client_message_id` populated, `metadata.interaction_context` populated per §1Q.23 (with `assisted: false` since the path is portal-direct).
  2. Update the patient's `message_thread_participants.last_read_message_id` to the new row (the patient has implicitly read their own send).
  3. **Action-item resolution: DEFERRED to c4.** `postPatientMessage` carries a TODO comment naming the c4 dependency: "When `patient_action_items` lands (c4), resolve the most recent unresolved `provider_message` action item bound to this thread here in the same transaction. Until then, the patient surface renders the 'Response needed' chip from `messages.metadata.clinical_required` but no action-item state is updated." The function does NOT call any action-item APIs (because they don't exist yet) and does NOT have a placeholder INSERT that would have to be migrated later.
  4. Emit `patient_timeline_events` `message.patient_sent` with payload pointers per §1H.1.
- Returns the new row + updated participant state for optimistic UI.

#### 4.4 `lib/messages/markThreadRead.ts`

TS wrapper around `mark_thread_read` SECURITY DEFINER. Mirrors `lib/inbox/recordInboxMessage.ts` pattern.

#### 4.4b `lib/messages/computeMessageRequestFingerprint.ts`

Single shared idempotency-fingerprint helper used by both `postPatientMessage` and the duplicate-check path. Takes the normalized request payload, returns a SHA-256 hex digest. Unit tests pin normalization rules per §4.3 "Centralized helper discipline." No other call site re-implements this function.

#### 4.5 `app/api/messages/[threadId]/messages/route.ts`

Patient-facing API:

- `GET` returns list + read state (calls 4.2)
- `POST` accepts a patient compose body (calls 4.3)
- `PATCH /read` marks the thread read up to a given message (calls 4.4)
- All routes service-role-mediated (RLS on `messages` permits staff-only direct reads; patient access goes through the API per the existing `messages` migration pattern at lines 249-265 of the 2026-04-30 migration)

**Security invariant (binding for all patient-facing message APIs).** Patient identity is derived from session via `assertPatientDashboardAccess`; the API then verifies the requested `threadId` belongs to a `message_thread_participants` row of `kind = 'patient'` for that patient. **Caller-supplied `patientId` (body, query, or header) is never authority.** This is not optional: a body-trusted `patientId` is a cross-patient access backdoor. CI lint can later forbid `patientId` as a request parameter on routes under `/api/messages/`. (Future TODO: add the lint rule alongside the existing `lint-event-types.ts` family.)

#### 4.6 `components/dashboard/MessagesThreadView.tsx`

Real chat rendering component:

- Renders ordered message rows with bubble + avatar + timestamp
- Patient turns right-aligned; staff turns left-aligned with name + role pill
- Classification chip on staff turns (clinical_required → amber "Response needed"; lab_review → blue "Lab result"; etc.)
- Read state indicator (subtle dot or check on patient turns when staff has read past it)
- Auto-marks thread as read on mount via 4.5 PATCH
- Composer is the existing `MessagesThreadComposer` rewired to call 4.5 POST

#### 4.7 `scripts/test-chat-rendering-c2.ts`

Live-DB integration test. Nine scenarios (revised — was ten; the three action-item-dependent scenarios moved to c4; one new backfill-verification scenario added):

1. **Patient compose round-trip:** patient calls `POST /messages` → row exists with `from_patient: true`, `author_staff_id: null`, classification null, `client_message_id` populated, `metadata.interaction_context` populated; participant's `last_read_message_id` advanced via `(created_at, id)` tuple compare; `patient_timeline_events` row exists.
2. **Staff reply visible to patient:** insert a row directly (no staff compose path in c2) with `from_patient: false`, `author_staff_id` set, `classification: 'general'`; patient `GET /messages` returns it; unread count is 1.
3. **Mark-read advances pointer:** patient calls `PATCH /read`; `last_read_message_id` advances; unread count drops to 0.
4. **Mark-read is monotonic + tie-break safe:** calling mark-read with an older message id does NOT regress the pointer; insert two messages in the same transaction (identical `created_at`) and verify the `(created_at, id)` tuple comparison correctly orders them and counts unread without double-counting or skipping.
5. **Clinical_required chip rendering (the c2-scoped piece of the §1G.3 turn model):** insert a row directly with `metadata.clinical_required: true`, `classification: null`. Patient `GET /messages` returns it; the response payload includes a flag the client can render as a "Response needed" chip. **NO action item is created** in c2 (no `patient_action_items` substrate yet); the flag is purely a render hint until c4 lands the substrate. The c4 preflight will add a follow-on test that the same `metadata.clinical_required: true` insert ALSO creates a bound `patient_action_items` row.
6. **Idempotent patient compose — match + mismatch (the §4.1 client_message_id constraint + §4.3 fingerprint validation):**
   - **6a. Same payload, same id (safe replay):** patient sends with `client_message_id = X` + body "Yes I confirm"; row inserted. Patient retries with same `client_message_id = X` + same body; second call returns the SAME row (no duplicate insert); UNIQUE constraint enforced.
   - **6b. Missing client_message_id (API contract):** patient POST without `client_message_id` returns 400 `client_message_id_required`; no row inserted.
   - **6c. Different payload, reused id (dangerous reuse):** patient sends with `client_message_id = X` + body "Yes I confirm" (inserts). Patient sends with same `client_message_id = X` + body "Actually I have swelling"; second call returns **HTTP 409 `idempotency_key_reuse_mismatch`** with the existing row's id in the error payload. The original "Yes I confirm" row is unchanged; the second different-body request is NOT silently absorbed.
7. **Multi-participant unread state:** create a thread with patient + provider + MA participants (manually since c2 has no staff-join path). Patient sends a message. Verify BOTH staff participants' unread count is now 1, independently (per-participant pointer is per-participant, not per-thread). This is the §6 substrate signal — the consumer UI is parallel-track but the substrate signal is real and per-staff-member.
8. **Classification CHECK enforcement:** direct INSERT with `classification = 'bogus'` rejected by the CHECK constraint. Also verify `classification = 'clinical_required'` is REJECTED (deliberately removed from the enum per §4.1's "Single source of truth for clinical_required" invariant); only `metadata.clinical_required` carries that fact.
9. **Migration backfill verification (NEW per substrate-reality audit):** before migration: count `message_threads` rows = 0. After migration: count `message_threads` rows = count of distinct `care_programs` rows; count `message_thread_participants` rows where `kind = 'patient'` = count of `message_threads` rows; every patient with a `care_programs` row has at least one thread + patient participant row. Re-running the backfill (idempotency check): zero new rows inserted on second invocation (NOT EXISTS guards work).

**Deferred to c4 (will be added when `patient_action_items` substrate lands):**
- Multi-turn clinical_required action-item resolution (was scenario 5)
- Drift recon between `metadata.clinical_required` and `patient_action_items` (was scenario 9)
- Cascade-resolve guard for two unresolved action items, one patient reply (was scenario 10)

### MODIFIED files

#### 4.8 `app/dashboard/[patientId]/messages/[threadId]/page.tsx`

Replace the static "Care Assistant welcome" body + composer with the new `MessagesThreadView`. The page becomes a thin shell that:

- Authorizes access (existing)
- Resolves thread title (existing)
- Renders `<MessagesThreadView patientId={} threadId={} />`

The hollow welcome card is **deleted**. No fallback path is left behind.

#### 4.9 `app/dashboard/[patientId]/messages/page.tsx`

**Switch the list data source from programs to threads.** Today the page lists `careOverview.programs.filter(isThreadable)` — programs are the SoT for the list. After c2, the page queries `message_threads` directly (via a new `lib/messages/listMessageThreadsForPatient.ts` helper), joined to `care_programs` for the display label and to the patient's `message_thread_participants` row for the unread count.

**Why this matters:** the current substrate enforces `message_threads.care_program_id NOT NULL UNIQUE`, which makes the two lists 1:1-equivalent today — but the SoT discipline matters going forward. Future commits will introduce thread shapes that are NOT 1:1 with a care_program (ops/support thread, post-procedure thread, billing thread). Driving the list from `message_threads` now means those future threads land in the patient view automatically; driving it from `careOverview.programs` would foreclose them and require a future rewrite. This is exactly the `Section 1G` "messaging substrate is canonical" discipline.

**Constraints relaxation (NOT in c2 scope, named for future):** removing the `care_program_id NOT NULL UNIQUE` constraint to admit non-program-shaped threads is a future commit. c2 does not touch it; c2 just stops over-fitting the UI to it.

The "New update" amber pill stays as today's signal; the unread count is a new badge derived from the participant pointer.

### What's NOT modified

- `repo/rules/` — no rule changes; no new `channels: ['in_app']` opt-ins; substrate-only
- `repo/templates/` — no template changes
- `lib/outbound/dispatch.ts` — chat is not on the outbound rail; this commit doesn't touch dispatch
- `patient_inbox_messages` — separate surface; c3 builds its UI
- Provider-side workspace (My Queue, clinical inbox) — parallel track per §1G.8; c2 is patient-side only
- Voice/video integration — c5+
- Action items UI depth — c4

---

## 5. Behavioral expectations

### What patients see after c2

- Tap `/messages/[threadId]` → real conversation renders with patient + staff turns
- Unread badge on the thread list reflects the per-recipient pointer
- Staff turn with `metadata.clinical_required: true` shows an amber "Response needed" chip rendered directly from that flag (no action-item template lookup in c2 since the substrate doesn't exist yet)
- Sending a reply: the message appears immediately. **The action-item disappear-on-resolve UX described in MAIN §1G.11 lands in c4** once the `patient_action_items` substrate is built; c2's compose path writes the new message + advances read pointer + emits timeline event, nothing else

### What's deferred to c3+

- `/inbox` route for `patient_inbox_messages` (c3)
- **`patient_action_items` substrate build (c4 — re-scoped from audit to substrate build).** Substrate-reality audit confirmed the table doesn't exist; `recordPatientActionItem` / `resolvePatientActionItem` APIs do not exist; c4 builds them all. c2 does NOT depend on them existing.
- Click-to-call from inside thread (c5)
- Inbound SMS / email routing into thread (c6)
- Video click-to-join binding (c7+)
- Provider-side rendering (parallel track)

### What c2 explicitly does NOT do

- **Does not ship the provider mirror UI.** §1G.8 staff-side workspace consuming the per-staff `last_read_message_id` pointer + thread queue is parallel-track. c2's substrate signal (per-staff unread count) is real and verified by scenario 7; the consumer UI lands in the provider mirror track. Until the consumer UI lands, ops/provider awareness of unread patient messages rides whatever staff-side notification path predates c2 (typically Slack / email rule-fired alerts); c2 does NOT regress those, and DOES make the substrate signal queryable.
- **Does not add reactions or per-message read receipts.** Option D in §3 stays deferred until a real requirement surfaces.
- **Does not add typing indicators or presence.** Realtime is out of scope; c2 is request/response with mark-read.
- **Does not add attachments inline.** Document upload rides §1O via `patient_document_routing`; thread rendering can show "Attachment: <name>" cards in a later commit by joining `patient_document_routing` rows by `metadata.message_id`.
- **Does not add cross-channel transcript composition.** §6 of the topology doc names this as a c7+ surface (voice_call rows + inbound atomized rows surfaced as in-thread cards). c2's data model does not foreclose it.
- **Does not cover staff-on-behalf-of-patient (assisted) compose.** c2 ships `postPatientMessage` only — portal-direct, `interaction_context.assisted: false`. The parallel `postStaffMessage` orchestrator (for front desk / MA / provider composing a message tied to a patient encounter, with `interaction_context.assisted: true` per §1Q.23) is a provider-mirror-track commit. The substrate already admits assisted compose via the `metadata.interaction_context` shape; c2 does not foreclose it; c2 just does not ship it.
- **Does not introduce ops/support thread shapes** (non-`care_program`-bound threads). The substrate currently enforces 1:1 `care_program_id NOT NULL UNIQUE`; relaxing that constraint is a future commit per §4.9. c2 only switches the list page to read `message_threads` directly so future shapes land cleanly.

---

## 6. Risk + mitigations

| Risk | Mitigation |
|---|---|
| Read state model chosen wrong; partial-read pressure surfaces in c5+ | Option D (join table) is an additive primitive that does not require migrating off Option C. Pointer model survives the future addition. |
| `messages.metadata.clinical_required` flag and (future) `patient_action_items` rows drift out of sync | Deferred to c4. c2 only writes the metadata flag; no action-item table exists to drift against. When c4 lands, the drift-recon scenario moves with it. |
| Multi-turn action-item resolution edge cases (provider asks two things, patient replies once) | Deferred to c4. Without `patient_action_items` there's nothing to resolve incorrectly. c4's preflight inherits the cascade-resolve guard test. |
| Duplicate patient compose from retry / double-tap | `client_message_id` UNIQUE constraint per §4.1; `postPatientMessage` interprets the constraint as idempotent-replay per §4.3; §4.7 scenario 6 verifies. |
| Cross-patient access via body-trusted `patientId` | §4.5 security invariant: patient identity from session, never from body; thread membership verified server-side. CI lint TODO named for future enforcement. |
| Thread list misses future non-program-shaped threads (ops/support, post-procedure) | §4.9 switches list source to `message_threads` SoT; future thread shapes land without UI rewrite. |
| Multi-participant thread is "write-only" from patient side (staff has no actionable signal) | §4.7 scenario 7 verifies per-staff unread state increments; consumer UI is parallel-track per §5 "Does not ship the provider mirror UI"; staff signal exists substrate-side and is queryable. |
| Classification CHECK rejects a future legitimate classification | Adding new values is a one-line ALTER TYPE / ALTER CHECK migration — same pattern as `outbound_jobs.message_intent` |
| Auto-mark-read fires on every page load; chatty | Debounce + only fire when the visible message id is past the current pointer |
| Patient compose race with concurrent staff turn | n/a in c2; no action-item resolution path exists. When c4 builds it, the idempotency-of-resolve discipline lands with it. |
| Service-role API endpoint becomes a backdoor for cross-patient access | All API routes call `assertPatientDashboardAccess(patientId)` BEFORE any DB call; lint can verify the assertion is present (future) |
| Radar zone 28: classification or read state leaks into `messages.metadata` over time | Migration adds typed columns; lint can later forbid certain keys in `messages.metadata` if drift surfaces |
| `last_read_message_id` regresses on race conditions | `mark_thread_read` is monotonic per scenario 4 in the test |
| `interaction_context` (§1Q.23) propagation forgotten on patient compose | `postPatientMessage` populates it from the request context; integration test verifies presence on the inserted row |

---

## 7. Verification plan

In order:

1. `npm run typecheck` — TS clean
2. `npm run lint` — eslint clean
3. `npx tsx scripts/lint-rules-templates-scaffold.ts` — green (no rules changed)
4. `npx tsx scripts/lint-event-types.ts` — green (new test file in EXEMPT_PATHS; new timeline event types `message.patient_sent` + `message.staff_replied` registered)
5. **Migration apply** via Supabase Management API or `supabase db push`
6. `npx tsx scripts/test-chat-rendering-c2.ts` — NEW; **nine scenarios** per §4.7 (revised down from ten after substrate-reality audit; three action-item-dependent scenarios deferred to c4; one new backfill-verification scenario added).
7. **No standalone recon query in c2.** The historical drift-recon between `metadata.clinical_required` and `patient_action_items` cannot run because the action-item table doesn't exist. Moves to c4's verification plan.
8. Existing c1 inbox test + the five parity tests (`test-payment-received-parity.ts` etc.) must still pass unchanged.

If any step fails, fix in this commit. Do not split.

---

## 8. Watch zones (radar)

c2 stresses three radar zones explicitly:

- **Zone 28** (care-task substrate fragmentation / metadata jsonb leakage) — c2 design rejects Option B (jsonb read state); adds typed `classification` column for visual chips only; keeps clinical_required state as a discrete `metadata.clinical_required` flag (single SoT, not duplicated into the classification enum). **The action-item-binding drift recon that would fully pressure-test this zone lives in c4** (when `patient_action_items` lands). c2 partially pressure-tests the zone by enforcing the typed-column-over-jsonb-bag discipline; c4 closes the loop with the drift recon.
- **Zone 31** (Day 0 Klara-class depth-bar drift) — c2 closes the **most visible** depth-bar gap (the hollow thread page) but is **explicitly not** "Klara/RingCentral-class achieved." The §1 bounded claim names the remaining pieces (inbox UI, **action-item substrate build**, voice/video, inbound routing, cross-channel transcript, provider mirror) that c3-c7+ and the parallel provider track must land before the topology doc may record full Klara-class status.
- **Zone 27** (sibling-discriminant leak) — n/a this commit (no new discriminant; chat is fully within the messaging substrate).

Post-c2 the topology doc build-status table in [`communications_topology.md`](../../docs/architecture/communications_topology.md) §9 must record "Rich chat → substrate YES, UI YES, **partial Klara depth** (provider mirror + cross-channel transcript + assisted compose deferred)." Recording "depth gap NONE" is **forbidden** until the deferred pieces land; doing so would itself be a zone-31 trigger.

---

## 9. What is explicitly NOT in scope

- `/inbox` UI for `patient_inbox_messages` (c3)
- **`patient_action_items` substrate build** — table, lifecycle, `recordPatientActionItem` / `resolvePatientActionItem` SECURITY DEFINER orchestrators, emitter wiring across §1G.11.4's authorized emitter set, UI depth. **Re-scoped c4** (was: "audit depth"; revised: "build the substrate" since the table doesn't exist substrate-side as of 2026-05-11).
- Voice / video / inbound SMS / inbound email (c5–c7+)
- Provider-side workspace mirror (parallel track per §1G.8) — substrate signal exists post-c2 (per-staff `last_read_message_id`); consumer UI is the parallel-track work
- Staff-on-behalf-of-patient (assisted) compose with `interaction_context.assisted: true` (provider-mirror parallel track)
- Non-program-shaped threads (ops/support, post-procedure, billing); requires relaxing `message_threads.care_program_id NOT NULL UNIQUE` (future commit)
- **External-line / pre-account communications** (main-line phone, main-line SMS from unknown numbers, walk-ins, post-procedure-concern texts, lead-to-patient conversion). Requires either relaxing `messages.patient_id NOT NULL` or introducing a parallel substrate (`contact_identities` + `communication_events` + ops triage inbox). See [`communications_topology.md`](../../docs/architecture/communications_topology.md) §11. Future preflight: `PREFLIGHT_<future>_phase_4h_communications_external_line_inbox.md`.
- Reactions / per-message receipts / typing indicators / presence
- Realtime push (Supabase Realtime subscription, etc.); c2 is request/response
- Attachments inline in chat (renders later by joining `patient_document_routing`)
- Cross-channel transcript composition (voice_call cards in thread)
- Disclosure-policy gate dual-fan-out (tier_3 in_app + tier_1 vague companion)
- Activating `repo/rules/communications_lifecycle/` sibling folder
- CI lint forbidding `patientId` as a parameter on `/api/messages/` routes (§4.5 security invariant TODO)

---

## 10. Refs

- [`docs/architecture/communications_topology.md`](../../docs/architecture/communications_topology.md) — companion synthesis (§2 three surfaces, §6 integration points, §9 build status)
- [`supabase/migrations/20260430120000_system_map_v1_messaging_labs_jurisdiction.sql`](../../supabase/migrations/20260430120000_system_map_v1_messaging_labs_jurisdiction.sql) — existing chat substrate (lines 121-208)
- [`.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_in_app_inbox_c1.md`](PREFLIGHT_2026-05-10_phase_4h_in_app_inbox_c1.md) — c1 in-app inbox pattern this preflight mirrors
- MAIN §1G.3 (clinical_required turn model + outbound_jobs policy)
- MAIN §1G.11 (action items + satisfy-on-write-path; §1G.11.5 names `provider_message` as non-optional before first Rx pathway)
- MAIN §1Q.23 (interaction_context propagation)
- MAIN Doctrine lock DL-5 (Day 0 elite-class depth)
- [`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md) zones 28, 31
- [`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md) §7.10
- [`app/dashboard/[patientId]/messages/[threadId]/page.tsx`](../../app/dashboard/[patientId]/messages/[threadId]/page.tsx) — the hollow page this commit replaces
- [`components/dashboard/MessagesThreadComposer.tsx`](../../components/dashboard/MessagesThreadComposer.tsx) — existing composer rewired

---

## 11. Approval gate

Reply with one of:

- **"approve and execute"** — write all NEW files + apply MODIFIED file changes + apply migration + run verification + commit + push + write the c2 checkpoint handoff
- **"approve, no commit yet"** — write all files + apply migration + run verification, stop before commit
- **"edit first: <changes>"** — paste preflight tweaks before execution begins
- **"discuss first"** — pause for further discussion (e.g., revisit the §3 read-state pressure test, or the §4.3 satisfy-on-write-path transactional model)

After approval, the commit message body will:

- Cite DL-5 + ADR §7.10 (Klara-class depth bar)
- Note that this is the first commit to actively pressure-test radar zone 28
- Reference the §3 read-state design pressure test
- Include the verification output snippet
- Reference this preflight by path

---

*End of preflight. Awaiting approval.*
