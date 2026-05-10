# Preflight — Phase 4H-in-app-inbox c1 (`send_in_app` substrate channel)

**Status:** PROPOSED. Not yet implemented. Awaiting your approval before execution.

**Phase position:** First commit of a new sub-phase, **Phase 4H-in-app-inbox**, that runs alongside the in-progress **Phase 4H-templates-discipline** legacy migration sequence. This commit ships the `send_in_app` substrate channel — the missing in_app outlet that the disclosure-policy gate, the `## Platform operational model` doctrine, and several future tier_3-capable rules all depend on.

**Doctrinal context:** Communications/inbox is named as a first-class operational sibling under Patient in the system-map `## Platform operational model` section. This commit ships the **substrate piece** of that sibling (the channel + the storage table), NOT the sibling-domain rule folder (`repo/rules/communications_lifecycle/`), which activates only when the first rule whose trigger is itself a communications event lands (future commit).

---

## 1. Architectural commitment (substrate channel addition)

`send_in_app` is a **substrate channel primitive**, parallel to `send_email` / `send_sms`. The substrate already half-acknowledges it:

- `'send_in_app'` is registered in [`lib/outbound/types.ts`](../../lib/outbound/types.ts) line 20 (`JOB_KINDS` enum)
- `'in_app'` is registered in [`lib/outbound/types.ts`](../../lib/outbound/types.ts) line 99 (`JOB_CHANNELS` enum)
- `isExternalRailJobKind('send_in_app')` already returns `false` (line 307) — in_app is internal, not an external rail
- The `Channel` type in [`repo/rules/types.ts`](../../repo/rules/types.ts) already includes `'in_app'` (line 123)

What's missing:

- **Storage:** no `patient_inbox_messages` table exists; nowhere for in_app messages to land
- **Dispatcher branch:** [`lib/outbound/dispatch.ts`](../../lib/outbound/dispatch.ts) has `dispatchPreRenderedEmail` (line 272) and `dispatchPreRenderedSms` (line 317) but no `dispatchPreRenderedInApp`
- **Orchestrator:** no SECURITY DEFINER for the insert; existing `enqueue_outbound_job` is the parallel pattern
- **TS wrapper:** no `lib/inbox/` subsystem

This commit closes those gaps. After it lands, the channel is **available**; whether any rule USES it is a separate decision per-rule (no rules opt in this commit).

### Why a NEW table (not the existing `messages` table)

[`messages`](../../supabase/migrations/20260430120000_system_map_v1_messaging_labs_jurisdiction.sql) (line 183) models **two-way patient↔staff conversations per care_program**. It has `from_patient`, `author_staff_id`, threading via `message_thread_id`, no rule lineage, no privacy primitives, predates the multi-tenant primitives discipline (no `org_id` / `data_environment`).

`patient_inbox_messages` will model **one-way system→patient governance-tracked notifications**. It has full rule + template lineage, privacy primitives, the multi-tenant primitives, no threading, no two-way authorship.

Forcing both interaction patterns into one table either pollutes the chat transcript with rule-fired notifications OR strips governance lineage from notifications. Two tables, both inside the "communications/inbox" sibling, mirrors the same separation we already have on the outbound side (`outbound_jobs` substrate vs typed rules registry).

---

## 2. Doctrinal alignment (system-map `## Platform operational model`)

| Doctrine clause | This commit |
|---|---|
| Communications/inbox is a first-class operational sibling under Patient | `patient_inbox_messages` is the substrate piece of that sibling |
| Substrate primitives are infrastructure every sibling depends on; substrate is **never** modeled as a sibling alongside operational domains | `send_in_app` channel + `record_inbox_message` orchestrator land in `lib/inbox/`, NOT in `repo/rules/` or `repo/templates/` |
| Each sibling owns its own discriminant; discriminants do not leak across sibling seams | N/A this commit — no new typed rule, no new payload discriminant. Future communications_lifecycle rules will get their own (`message_kind` for example) |
| Producer-site locality is per-sibling | N/A this commit — no producer changes |
| Platform-grade foundations bar (in-app messaging) | Substrate now admits the in_app channel; tier_3-capable communications surface unblocked for any future rule that opts in |

---

## 3. File-by-file change set

### NEW files (3)

#### 3.1. `supabase/migrations/<ts>_phase_4h_in_app_inbox_c1.sql`

Single migration containing:

- **`patient_inbox_messages` table** with primitives + lineage + rendered output + read state + flexible metadata:

  ```
  id                                   uuid PK default gen_random_uuid()
  org_id                               uuid NOT NULL DEFAULT current_org_id() FK orgs
  brand_id                             uuid NULL FK brands
  data_environment                     text NOT NULL DEFAULT current_data_env()
                                       CHECK in ('production','staging','internal_qa','synthetic')
  patient_id                           uuid NOT NULL FK patients ON DELETE CASCADE
  outbound_job_id                      uuid NOT NULL UNIQUE FK outbound_jobs ON DELETE RESTRICT
  rule_id                              text NULL
  rule_version                         text NULL
  template_key                         text NULL
  template_version                     text NULL
  intended_privacy_exposure_level      smallint NOT NULL CHECK between 0 and 5
  message_intent                       text NOT NULL CHECK in ('account','operational',
                                       'clinical','safety','billing','support','marketing',
                                       'education','vendor','internal')
  subject                              text NOT NULL
  body_html                            text NOT NULL
  body_text                            text NOT NULL
  metadata                             jsonb NOT NULL DEFAULT '{}'::jsonb
  read_at                              timestamptz NULL
  archived_at                          timestamptz NULL
  effective_at                         timestamptz NOT NULL DEFAULT now()
  created_at                           timestamptz NOT NULL DEFAULT now()
  updated_at                           timestamptz NOT NULL DEFAULT now()
  ```

  Rationale per field:
  - **Primitives** (`org_id` / `brand_id` / `data_environment`) — system primitives addendum non-negotiable for new tables. `data_environment` defaults from session context so synthetic patient inbox writes are correctly tagged.
  - **`outbound_job_id` UNIQUE** — idempotency anchor. Replaying a dispatch never creates duplicate inbox rows. FK with `ON DELETE RESTRICT` because deleting the outbound_job that produced an inbox row should require deleting the inbox row first (governance lineage preserved).
  - **Lineage fields** (`rule_id` / `rule_version` / `template_key` / `template_version`) — captured at write time so even if the registry evolves later, this row records what fired it. Nullable because some operational kinds (e.g., system-cron-emitted alerts) may not have a typed rule.
  - **Privacy fields** (`intended_privacy_exposure_level` / `message_intent`) — captured for downstream audit + governance queries ("show me every tier_3+ message delivered to patient X"). NOT NULL because every governed delivery must declare them. **`message_intent` CHECK constrained** to the same 10 values as [`outbound_jobs.message_intent`](../../supabase/migrations/20260509120000_phase_4e_outbound_jobs_reconciliation.sql) lines 106-109 (TS-side `MESSAGE_INTENTS` from [`lib/outbound/types.ts`](../../lib/outbound/types.ts) line 112). Prevents the field from drifting into freeform-text entropy long-term — same reasoning as the typed audit-action catalog.
  - **`subject` / `body_html` / `body_text`** — rendered output, mirrors `outbound_jobs.payload.rendered_email` shape so the future patient portal can display either email-shaped or in_app-shaped messages with the same render pipeline.
  - **`metadata` jsonb** — flexible forward-compat context for things inbox messages will accumulate that emails / SMS don't: CTA / action-item references, deep links, structured attachments, semantic tags, expiration semantics, deep links to lab results / care actions / timeline anchors, future AI summaries, structured inbox-card variants. Empty-object default keeps c1 simple; future commits can promote individual fields to typed columns once patterns crystallize. Standard codebase convention (`message_threads.metadata`, `messages.metadata`, `audit_events.metadata`, `outbound_jobs.metadata` all follow this same pattern).
  - **`read_at` nullable** — null = unread. Unread-count queries key off `WHERE read_at IS NULL`.
  - **`archived_at` nullable** — null = active in inbox; non-null = soft-archived. Cheap forward-compat seam: inbox tables grow large fast, and `read_at` alone becomes insufficient (a read message is not the same as an archived message). Adding the field at table creation costs ~zero now; retrofitting after the table grows is a much more expensive migration. Future archival jobs / patient cleanup / retention runtime / AI context exclusion / provider-side filtering all use this field. No archival logic ships in c1; field is reserved.
  - **`effective_at` vs `created_at`** — primitives discipline: `effective_at` is the time the event happened (= `outbound_jobs.effective_at`); `created_at` is when this row was inserted. Differ on backfill.

- **SQL comments** (binding for the migration; future-us will need them when this table becomes philosophically important):
  - **Table-level:** clarifies distinction from `messages` ("`patient_inbox_messages` is the durable artifact of one-way system→patient governance-tracked notifications. Distinct from `messages` (per-care_program two-way patient↔staff conversation transcript). Both inside the communications/inbox sibling per system-map `## Platform operational model` doctrine.") + flags the conceptual drift vector named by the c1 review ("`messages` may eventually feel like a misnomer as inbox content evolves toward AI care nudges, action cards, lab review requests, escalations — non-message-shaped artifacts. Renaming to `inbox_artifacts` or similar is a future concern; v1 keeps `messages` per industry-standard inbox vocabulary.").
  - **Column-level:** comments on `outbound_job_id` (idempotency anchor + governance lineage; UNIQUE makes replay safe), `metadata` (forward-compat for CTA / deep links / structured attachments / etc.; promote to typed columns once patterns crystallize), `archived_at` (soft archival seam; no archival logic ships in c1), `intended_privacy_exposure_level` + `message_intent` (privacy lineage captured at delivery time for downstream governance queries), `read_at` (null = unread; flips when patient acknowledges via future UI).

- **Indexes:**
  - `(patient_id, read_at)` — unread count queries (`WHERE read_at IS NULL`)
  - `(patient_id, created_at DESC)` — inbox listing
  - `(org_id, data_environment)` — primitives partition discipline
  - `(outbound_job_id)` already implied by UNIQUE

- **RLS** mirrors the existing `messages` pattern (see [`messaging migration`](../../supabase/migrations/20260430120000_system_map_v1_messaging_labs_jurisdiction.sql) lines 249-265):
  - `staff_select_patient_inbox_messages` — staff can read all (gated by `public.is_staff_user(auth.uid())`)
  - **No INSERT or UPDATE policy** — writes only via the SECURITY DEFINER orchestrator (which bypasses RLS by design)
  - **No patient-side RLS in this commit** — patient portal reads will go through service-role API like the existing `messages` pattern; RLS hardening for portal is a separate concern when the UI lands

- **`record_inbox_message` SECURITY DEFINER function:**
  - Signature: `(p_outbound_job_id uuid, p_patient_id uuid, p_org_id uuid, p_data_environment text, p_brand_id uuid, p_rule_id text, p_rule_version text, p_template_key text, p_template_version text, p_intended_privacy_exposure_level smallint, p_message_intent text, p_subject text, p_body_html text, p_body_text text, p_effective_at timestamptz, p_metadata jsonb default '{}'::jsonb)`
  - `p_metadata` defaults to empty object so c1 callers (which don't pass any) can omit it; future callers (CTA-bearing rules, UI-triggered inbox writes, etc.) can pass structured metadata without changing the signature.
  - Returns the inserted `patient_inbox_messages.id`
  - Idempotent on `outbound_job_id` (uses `ON CONFLICT (outbound_job_id) DO NOTHING RETURNING id`; if conflict, SELECT existing id and return)
  - Rejects writes with missing primitives (defensive — defaults handle most cases but explicit validation guards against caller errors)
  - Refuses freeform `p_message_intent` values via the underlying CHECK constraint (TS-side `MessageIntent` enum + SQL CHECK both enforce the same 10-value set)

#### 3.2. `lib/inbox/recordInboxMessage.ts`

TypeScript wrapper around the SECURITY DEFINER. Mirrors the [`lib/outbound/enqueue.ts`](../../lib/outbound/enqueue.ts) pattern:

- Accepts a typed `RecordInboxMessageArgs` object
- Validates with a Zod schema (parallel to `EnqueueOutboundJobArgs`)
- Calls `supabase.rpc('record_inbox_message', { ... })`
- Returns `{ inbox_message_id: string }` (or throws on error)

The wrapper is the ONLY way the dispatcher writes inbox rows. Direct `INSERT` from app code is forbidden by the no-INSERT-policy on the table.

#### 3.3. `scripts/test-in-app-inbox-c1.ts`

Live-DB integration test. Four scenarios:

1. **Production patient + send_in_app dispatch:** insert outbound_job with `kind='send_in_app'`, run `runDispatcherTick()`, verify (a) `outbound_jobs.status = 'sent'`, (b) `outbound_job_dispatches` row exists with `channel='in_app'` and `provider='in_app_inbox'`, (c) `patient_inbox_messages` row exists with full lineage matching the outbound_job (rule_id, rule_version, template_key, template_version, intended_privacy_exposure_level, message_intent, subject, body_html, body_text, org_id, data_environment).
2. **Idempotent replay:** same outbound_job_id processed twice (simulating retry) → `patient_inbox_messages` still has exactly one row; second call returns the same `id`.
3. **Synthetic patient + send_in_app:** verify the c1 data_environment gate is bypassed (in_app is internal, not external — `isExternalRailJobKind` already false), inbox row IS written even for synthetic patients.
4. **Schema invariants** (default values + CHECK constraints):
   - On a fresh `patient_inbox_messages` row, `metadata = '{}'::jsonb` by default
   - On a fresh row, `archived_at IS NULL` (active state)
   - On a fresh row, `read_at IS NULL` (unread state)
   - Direct INSERT with `message_intent = 'bogus_value'` is rejected by the CHECK constraint (verifies the 10-value enum is enforced at the SQL layer, not just the TS layer)
   - Direct INSERT with `intended_privacy_exposure_level = 99` is rejected by the `between 0 and 5` CHECK
   - Direct INSERT with two rows sharing the same `outbound_job_id` is rejected by the UNIQUE constraint (idempotency anchor verified)

This test is the parity proof for the substrate addition. Subsequent commits that wire rules to use in_app will add their own parity tests.

### MODIFIED files (3)

#### 3.4. `lib/outbound/dispatch.ts`

Add a third pre-rendered branch alongside the existing `send_email` (line 207) and `send_sms` (line 211) branches:

```typescript
const renderedInApp = extractRenderedInApp(job);
if (job.kind === 'send_in_app' && renderedInApp) {
  return dispatchPreRenderedInApp(job, renderedInApp);
}
```

Add the `RenderedInAppPayload` interface, `extractRenderedInApp` helper (parallels `extractRenderedEmail` at line 243), and `dispatchPreRenderedInApp` async function (parallels `dispatchPreRenderedEmail` at line 272). The new function:

- Calls `recordInboxMessage(...)` with the rendered payload + lineage from the outbound_jobs row
- On success: `markOutboundJobDispatch({ status: 'succeeded', channel: 'in_app', provider: 'in_app_inbox', provider_message_id: <inbox_message_id> })`
- On failure: `markOutboundJobDispatch({ status: 'failed_retryable', channel: 'in_app', provider: 'in_app_inbox', error_message: ... })`

The `RenderedInAppPayload` shape:
```typescript
interface RenderedInAppPayload {
  subject: string;
  body_html: string;
  body_text: string;
}
```

The `payload` shape that producers (rules engine + future direct callers) write into `outbound_jobs.payload`:
```typescript
{
  rendered_in_app: { subject, body_html, body_text }
}
```

This mirrors the `rendered_email` and `rendered_sms` payload pattern.

#### 3.5. `scripts/lint-event-types.ts`

Add `scripts/test-in-app-inbox-c1.ts` to `EXEMPT_PATHS` (defensive — the test file may reference RuleTrigger event types, audit actions, etc. as test inputs that the lint would otherwise flag as inline literals).

#### 3.6. `lib/outbound/types.ts`

NO modification expected. The `JOB_KINDS` and `JOB_CHANNELS` arrays already contain the in_app values; `isExternalRailJobKind` already handles the case correctly. Re-verify during execution; if any in_app-specific schema field surfaces (e.g., extending `EnqueueOutboundJobArgs` Zod for an `inbox_target_thread_id`), defer to a future commit since v1 inbox is per-message not per-thread.

### What's NOT modified

- No new typed rules in `repo/rules/`
- No new typed templates in `repo/templates/`
- No changes to `lib/internal/patient-case/impl.ts` producer
- No changes to `lib/disclosure-policy/` (gate stays as-is; tier_3 dual-fan-out is a future enhancement)
- No changes to existing 5 rules' `channels` arrays
- No new audit actions in `lib/events/audit-actions.ts` (the dispatch outcome is already recorded via `outbound_job_dispatches`; the inbox row IS the durable artifact; future `inbox_message.read_by_patient` lands when a UI surface lands)
- No patient portal UI for displaying inbox messages
- No scaffold lint changes (no new rules → no new sibling-discriminant pairs)
- No scaffold test changes (5 rules + 5 templates unchanged)

---

## 4. Behavioral expectations

### What this commit lets future commits do

After this commit lands, ANY of the existing 5 typed rules can be upgraded to add `'in_app'` to its `channels` array. The dispatcher will pick up `kind='send_in_app'` outbound_jobs rows and route them to `patient_inbox_messages`. The lineage propagates correctly. **No further substrate work is required for a rule to opt in.**

The rule's executor branch (e.g., `executeCaseApprovedRule` in [`lib/rules/runtime/dispatcher.ts`](../../lib/rules/runtime/dispatcher.ts)) currently emits 2 outbound_jobs rows (email + sms). After in_app opt-in, it would emit 3 (email + sms + in_app). The rule's render module would need a `renderXInApp` function returning `{ subject, body_html, body_text }`. That's the per-rule upgrade work — out of scope for c1.

### Disclosure-policy gate interaction (DEFERRED)

The "tier_3 inside + tier_1 outside" dual-fan-out pattern is the canonical use case for in_app:

- A future tier_3 rule (e.g., `provider_message_sent` or `lab_results_ready`) declares `intended_privacy_exposure_level: 3`
- The disclosure-policy gate applies its channel-defaults clamp: outside-secure channels (email + sms + push) get clamped down to a tier_1 vague-companion template; inside-secure channel (in_app) keeps the full tier_3 detail
- Net behavior: patient gets a tier_1 SMS "you have a new message in your portal" + a tier_3 in_app message with the actual content

C1 does NOT implement this dual-fan-out. C1 ships the channel; the gate's dual-fan-out logic is a future enhancement. Until then, a rule that wants in_app behavior writes its own logic to enqueue both an email-with-vague-body and an in_app-with-full-detail.

This deferral is intentional. Building the dual-fan-out before any rule actually uses in_app would canonize a pattern without a real consumer to validate it. C1 ships the substrate; the next rule that needs the pattern drives the dual-fan-out shape.

### Patient portal display (DEFERRED)

The patient portal UI for displaying `patient_inbox_messages` is a separate concern (UI work, separate commit). C1 only ships the storage + write path. Until the UI lands, inbox rows accumulate but are not patient-visible — which is acceptable because no rule writes to in_app yet (no consumer).

---

## 5. Risk + mitigations

| Risk | Mitigation |
|---|---|
| Future rule authors confuse `messages` (two-way conversations) vs `patient_inbox_messages` (one-way notifications) | Both table comments explicitly distinguish; companion doc updated; future rule preflights pick the right surface explicitly |
| In_app messages accumulate without read state ever flipping (no UI yet) | Acceptable for c1 because no rule writes to in_app. Future UI commit ships the read-toggle path. |
| Patient portal has no UI to display these | Out of scope for c1; preflight names UI as separate future commit. Until UI lands, no production patients receive in_app messages because no rule opts in. |
| Disclosure-policy gate doesn't yet fan out tier_3 to in_app + tier_1 vague companion | Out of scope for c1; preflight names this as the next-commit enhancement. Until then, rules that want the pattern implement it directly. |
| Idempotency edge case: same outbound_job_id triggers handler twice (retry) | UNIQUE constraint on `outbound_job_id` + `record_inbox_message` orchestrator's `ON CONFLICT DO NOTHING RETURNING id` makes this idempotent at the SQL layer |
| Rendered payload extraction mismatch (typo in field name) silently produces null | Mirrors the existing `extractRenderedEmail` / `extractRenderedSms` pattern; same defensive style; integration test covers the happy path. Future hardening: typed Zod parse on payload shape. |
| New table missing from RLS partition discipline | Migration adds `(org_id, data_environment)` index + `staff_select_patient_inbox_messages` RLS policy at table-creation time; lint discipline catches if a future migration drops them |
| `outbound_job_dispatches` provider field gets a new value (`in_app_inbox`) — does any downstream query enumerate provider values? | Re-verify during execution. If any code path enumerates providers (e.g., reconciliation queries), extend its allow-list. Most likely: none, because provider is text and queried by equality not enumeration. |
| `body_html` is stored as rendered output (not as a structured AST). Rendering bugs, unsafe markup, or template mistakes become **durable in historical rows** — future redesigns of the render pipeline don't retroactively fix what's already in the table. | Acknowledged trade-off; matches how email rendering already works (sent emails live forever in inboxes / on Resend). Mitigations to apply now: ensure the render module produces sanitized canonical HTML at write time (no unbounded user input flowing into the body). Future hardening if it becomes a real problem: add a `render_module_version` column + structured-blocks payload alongside the rendered HTML so historical rows can be re-rendered. Not pre-emptively shipped — matches the "patterns crystallize first, then promote to typed columns" discipline. |
| `message_intent` could drift into freeform-text entropy if any caller bypasses the CHECK | Mitigated structurally: SQL CHECK rejects unknown values at write time; TS-side `MessageIntent` enum is the same 10-value set; orchestrator wrapper uses the typed value, not raw string. The dual-layer enforcement (TS enum + SQL CHECK) is the same pattern that locked in `audit_events.action` and `JOB_KINDS`. |

---

## 6. Verification plan

In order:

1. `npm run typecheck` — TS clean
2. `npm run lint` — eslint clean
3. `npx tsx scripts/lint-rules-templates-scaffold.ts` — green (no rules changed; lint passes unchanged)
4. `npx tsx scripts/lint-event-types.ts` — green (new test file in EXEMPT_PATHS; no new audit actions added)
5. `npx tsx scripts/test-rules-templates-scaffold.ts` — green (5 rules + 5 templates unchanged; passes unchanged)
6. **Migration apply via Supabase Management API or `supabase db push`** — schema lands cleanly
7. `npx tsx scripts/test-in-app-inbox-c1.ts` — NEW; verifies the four scenarios (production dispatch, idempotent replay, synthetic data_environment passthrough, schema invariants — defaults + CHECK constraints + UNIQUE)

The five existing parity tests (`test-payment-received-parity.ts`, `test-intake-submitted-parity.ts`, `test-case-approved-parity.ts`, `test-awaiting-clinical-review-parity.ts`, `test-shipped-parity.ts`) must still pass unchanged — none of those rules upgraded to in_app in this commit.

If any verification step fails, fix in this commit before moving on. Do not split into a follow-up commit.

---

## 7. What is explicitly NOT in scope (deferred)

- **Disclosure-policy gate dual-fan-out** (tier_3 in_app + tier_1 vague-companion email). Future enhancement.
- **Upgrading any existing rule to add `'in_app'`** to its `channels` array. Each rule's upgrade is its own per-rule commit.
- **Patient portal UI** for displaying inbox messages. Separate commit; UI work.
- **Inbox archival / expiry logic.** `read_at` field is in place so future archival job has the data it needs. Not implemented this commit.
- **Threading inbox messages by topic / care_program / pathway.** v1 is per-message; future commit could add `inbox_thread_id` if grouping becomes valuable.
- **AI-drafted in_app messages.** AI refinement constraints already live on the Template; if/when an in_app-using template allows AI refinement, it inherits those constraints. No new mechanism here.
- **Push notification adapter.** `send_push` is a separate JOB_KIND with its own substrate (Web Push or APNs); not addressed here.
- **`inbox_message.read_by_patient` audit action.** Lands when the UI ships and the read-toggle path needs auditing.
- **`record_inbox_message` lineage to a specific care_program / treatment_item.** Substrate is rule-lineage-only at v1; care-context backreference can be added via metadata field later if needed.
- **Activating `repo/rules/communications_lifecycle/` sibling-domain folder.** That folder activates when the FIRST rule whose trigger is itself a communications event lands. C1 ships only the channel infrastructure.

---

## 8. Convergence-via-wiring trial status

Per ADR §7.7 Decision C, the convergence-via-wiring trial is COMPLETE. This commit does NOT count as a fourth reinforcement because:

- It is not a typed Rule + Template migration — it is a substrate channel addition
- It does not exercise the rule + template + render module + parity test pattern
- It exercises a different pattern: substrate channel + storage table + orchestrator + dispatcher branch

This is exactly the kind of work ADR §7.7 anticipated when it said "if a future migration encounters a NEW architectural seam not anticipated by this ADR + the doctrine, that migration's handoff names it explicitly, and a §7.8+ amendment to this ADR records the new pattern."

In_app inbox is not a NEW pattern — it parallels `send_email` / `send_sms` exactly. **No new ADR amendment required.** The c1 handoff documents the substrate addition; future commits that build on it (rule upgrades, dual-fan-out, UI) get their own preflights without needing ADR revisions.

---

## 9. Approval gate

Reply with one of:

- **"approve and execute"** — write all 6 files (3 NEW + 3 MODIFIED) + apply the migration + run verification + commit + push to origin/main + write the c1 checkpoint handoff.
- **"approve, no commit yet"** — write all 6 files + apply migration + run verification, but stop before commit so I can inspect the diff.
- **"edit first: <changes>"** — paste any preflight tweaks before execution begins.
- **"discuss first"** — pause for further discussion of any item above.

After approval, the commit message body will:
- Cite the doctrine + the substrate-channel framing
- Note that no rules opt in this commit (substrate-only)
- Capture the deferred items list
- Include the verification output snippet
- Reference this preflight by path

---

## 10. Refs

- System map `## Platform operational model` doctrine (top of system map; binding)
- Phase 4H ADR §7.7 "Sibling-domain operational object layering" — explains why substrate vs sibling-domain layering matters
- ADR §7.5 cutover discipline — wording-preservation rule (N/A this commit; no rule wording involved)
- ADR §7.6 rule execution scope — the dispatcher's import allowlist; this commit adds `lib/inbox/recordInboxMessage` as a new approved orchestrator-mediated action surface (substrate-shaped, parallel to `enqueue_outbound_job`)
- [`lib/outbound/dispatch.ts`](../../lib/outbound/dispatch.ts) — the dispatcher this commit extends
- [`lib/outbound/enqueue.ts`](../../lib/outbound/enqueue.ts) — the parallel orchestrator pattern
- [`lib/outbound/types.ts`](../../lib/outbound/types.ts) — JOB_KINDS + JOB_CHANNELS already include in_app values
- [`supabase/migrations/20260430120000_system_map_v1_messaging_labs_jurisdiction.sql`](../../supabase/migrations/20260430120000_system_map_v1_messaging_labs_jurisdiction.sql) — `messages` table (the two-way conversation surface this is distinct from)
- [`supabase/migrations/20260506120000_phase_4c_pre_primitives_tenancy.sql`](../../supabase/migrations/20260506120000_phase_4c_pre_primitives_tenancy.sql) — primitives + tenancy pattern this migration follows
- The user's old "casual map forward" document (Path B = in_app surface) — the strategic motivation

---

*End of preflight. Awaiting approval.*
