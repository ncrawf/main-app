# HANDOFF — Phase 4H-in-app-inbox c1 (`send_in_app` substrate channel) checkpoint

**Date:** 2026-05-10
**Status:** SHIPPED. All verification green. Pushed to origin/main as commit `928613c`.
**Phase position:** First commit of a new sub-phase, **Phase 4H-in-app-inbox**, that runs alongside the in-progress Phase 4H-templates-discipline legacy migration sequence.

---

## What this commit shipped

**Architectural commitment:** substrate channel addition — NOT sibling-domain activation. The `send_in_app` channel was already half-acknowledged in the codebase (`'send_in_app'` in `JOB_KINDS`, `'in_app'` in `JOB_CHANNELS`, `isExternalRailJobKind('send_in_app')` already false). What was missing: storage table, SECURITY DEFINER orchestrator, dispatcher handler, TS wrapper. This commit closes those gaps.

The `repo/rules/communications_lifecycle/` sibling-domain folder does NOT activate this commit. No new typed rules. No upgrades to existing rules' `channels` arrays. The 5 typed rules (`payment_received`, `intake_submitted`, `case_approved`, `awaiting_clinical_review`, `order_shipped`) continue firing email + SMS unchanged. After this commit, ANY rule can opt in to in_app by adding `'in_app'` to its `channels` array — no further substrate work required.

**Doctrinal context:** ships the substrate piece of the communications/inbox sibling per system-map `## Platform operational model` doctrine. Distinct from the existing `messages` table (per-care_program two-way patient↔staff conversation transcript). Both inside the communications/inbox sibling, modeling fundamentally different interaction patterns.

---

## Files changed (7 total)

### NEW (4)

- [`supabase/migrations/20260515120000_phase_4h_in_app_inbox_c1.sql`](../../supabase/migrations/20260515120000_phase_4h_in_app_inbox_c1.sql) — `patient_inbox_messages` table + `record_inbox_message` SECURITY DEFINER + RLS + indexes + comments. Applied to Supabase via the management API.
- [`lib/inbox/recordInboxMessage.ts`](../../lib/inbox/recordInboxMessage.ts) — typed TS wrapper. Zod schema enforces 10-value `MESSAGE_INTENTS` enum (dual-layer with SQL CHECK).
- [`scripts/test-in-app-inbox-c1.ts`](../../scripts/test-in-app-inbox-c1.ts) — live-DB parity smoke test. 4 scenarios; 36 assertions.
- [`.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_in_app_inbox_c1.md`](PREFLIGHT_2026-05-10_phase_4h_in_app_inbox_c1.md) — preflight document captured + approved before execution.

### MODIFIED (3)

- [`lib/outbound/dispatch.ts`](../../lib/outbound/dispatch.ts) — third pre-rendered branch alongside `send_email` and `send_sms`. New `RenderedInAppPayload` interface, `extractRenderedInApp` helper, `dispatchPreRenderedInApp` async function. Defensive validation for required fields (patient_id, message_intent, intended_privacy_exposure_level). Records dispatch outcome via `markOutboundJobDispatch` with `channel='in_app'`, `provider='in_app_inbox'`, `provider_message_id=<inbox_message_id>`.
- [`scripts/lint-event-types.ts`](../../scripts/lint-event-types.ts) — `scripts/test-in-app-inbox-c1.ts` added to `EXEMPT_PATHS`.
- [`scripts/lint-rules-templates-scaffold.ts`](../../scripts/lint-rules-templates-scaffold.ts) — tightened **check 5 (sibling-discriminant alignment)** regex from bare-identifier match to TS property-syntax match. The bare match was creating false positives when rule files mention `case_kind` / `order_kind` in header comments (e.g., `order_shipped_v1.ts` legitimately explains why it uses `order_kind` not `case_kind`). Tightening to `\b<discriminant>\??:` preserves the lint's intent (catch a developer copy-paste where a payload-shape declaration drops into a rule file in the wrong sibling-domain folder).

---

## Verification (all green)

| Check | Status | Notes |
|---|---|---|
| `npm run typecheck` | GREEN | `tsc --noEmit` clean |
| `npm run lint` | GREEN | eslint clean |
| `npx tsx scripts/lint-rules-templates-scaffold.ts` | GREEN | 5 checks pass; tightened sibling-discriminant guard verified |
| `npx tsx scripts/lint-event-types.ts` | GREEN | 67 audit actions; 0 unknown literals |
| `npx tsx scripts/test-rules-templates-scaffold.ts` | GREEN | 61/61 (no rule/template changes; unchanged from c4) |
| `npx tsx scripts/test-in-app-inbox-c1.ts` | GREEN | 36/36 across 4 live-DB scenarios |

The 5 prior rule parity tests (`test-payment-received-parity.ts`, `test-intake-submitted-parity.ts`, `test-case-approved-parity.ts`, `test-awaiting-clinical-review-parity.ts`, `test-shipped-parity.ts`) remain passing — none of those rules upgraded to in_app in this commit.

---

## Architectural firsts

- **First substrate channel addition since `send_email` + `send_sms`** were canonized in Phase 4E. Establishes the parallel pattern: pre-rendered payload extraction + dispatch handler + provider-message-id propagation back through `outbound_job_dispatches`.
- **First write surface for the communications/inbox sibling** per the doctrine. The substrate piece ships now; the sibling-domain rule folder activates later when the first communications-event-triggered rule lands.
- **First table to ship with the post-doctrine + post-ChatGPT-review schema discipline:** `metadata` jsonb (forward-compat for CTA / deep links / structured attachments), `archived_at` (soft archival seam), `message_intent` CHECK constrained to the typed enum. The discipline is captured in the preflight + this handoff so future tables follow the same pattern.

---

## ChatGPT review feedback applied (during preflight)

| Feedback | Status |
|---|---|
| Add `metadata jsonb NULL` for forward-compat | APPLIED (added as `metadata jsonb NOT NULL DEFAULT '{}'::jsonb`) |
| Constrain `message_intent` (don't leave freeform text) | APPLIED (CHECK constraint mirrors the 10-value `MESSAGE_INTENTS` enum) |
| Add `archived_at timestamptz NULL` soft-archival seam | APPLIED |
| Reconsider naming (`patient_inbox_messages` vs alternatives) | DEFERRED (kept name; flagged conceptual drift in SQL comment for future-us) |
| Add explicit SQL comments on table + key fields | APPLIED |
| `body_html` permanence concern | NOTED in risk table (no schema change for c1; mitigation: sanitized HTML at write time; future hardening: `render_module_version` column if needed) |

---

## Issues encountered + resolved during execution

| Issue | Resolution |
|---|---|
| Initial sibling-discriminant lint check failed with false positive on `order_shipped_v1.ts` (matching `case_kind` in header comments) | Tightened regex from bare-identifier to TS property-syntax (`\b<discriminant>\??:`); test now passes |
| Zod `z.string().uuid()` rejected the seeded canonical org_id `00000000-0000-0000-0000-000000000001` (not v4-compliant) | Relaxed `org_id` schema to `z.string().min(1)` with explicit comment; FK constraint is the actual referential validator |
| Disclosure-policy gate suppressed the test outbound_job (template_key='tmpl.test.in_app_inbox_c1' not in registry → fail-closed `unknown_template`) | Test updated to use `tmpl.fulfillment_lifecycle.order_shipped_v1` (real registry entry; tier_2 + operational matches what scenario exercises) |

---

## Convergence-via-wiring trial status (per ADR §7.7)

The convergence-via-wiring trial is COMPLETE per ADR §7.7 Decision C. This commit does NOT count as a fourth reinforcement because:

- It is not a typed Rule + Template migration — it is a substrate channel addition.
- It does not exercise the rule + template + render module + parity test pattern.
- It exercises a different pattern: substrate channel + storage table + orchestrator + dispatcher branch.

This is exactly the kind of work ADR §7.7 anticipated: "if a future migration encounters a NEW architectural seam not anticipated by this ADR + the doctrine, that migration's handoff names it explicitly..."

In_app inbox is NOT a NEW pattern — it parallels `send_email` / `send_sms` exactly at the substrate layer. **No new ADR amendment required.** The pattern is documented in this handoff; future commits that build on it (rule upgrades, dual-fan-out, UI) get their own preflights without ADR revisions.

---

## What's deferred (explicit non-scope)

- **Disclosure-policy gate dual-fan-out** (tier_3 in_app + tier_1 vague-companion email) — future enhancement when the first tier_3 rule needs the pattern.
- **Upgrading any existing rule to add `'in_app'`** to its `channels` array — each rule's upgrade is its own per-rule commit.
- **Patient portal UI** for displaying inbox messages — separate commit; UI work.
- **Inbox archival / expiry logic** — `archived_at` field is in place so future archival job has the data it needs.
- **Threading inbox messages by topic / care_program / pathway** — v1 is per-message; future commit could add `inbox_thread_id` if grouping becomes valuable.
- **`inbox_message.read_by_patient` audit action** — lands when the UI ships and the read-toggle path needs auditing.
- **Activating `repo/rules/communications_lifecycle/` sibling-domain folder** — that folder activates when the FIRST rule whose trigger is itself a communications event lands.

---

## Anchor strings (for future grep)

- `patient_inbox_messages` (table)
- `record_inbox_message` (SECURITY DEFINER orchestrator)
- `recordInboxMessage` (TS wrapper)
- `dispatchPreRenderedInApp` (dispatcher branch)
- `RenderedInAppPayload` (interface)
- `'send_in_app'` (JobKind / outbound_jobs.kind)
- `'in_app'` (JobChannel / outbound_jobs.channel)
- `'in_app_inbox'` (provider value on outbound_job_dispatches)

---

## What's next (sequencing options after c1)

c1 unblocks tier_3 communications. The natural next moves:

1. **First rule opt-in (per-rule)** — pick an existing tier_2/3 rule (e.g., `case_approved` upgraded to `channels: ['email', 'sms', 'in_app']`) and add a `renderXInApp` function returning `{ subject, body_html, body_text }`. The per-rule commit demonstrates the substrate works with a real rule.
2. **Disclosure-policy dual-fan-out** — if the first opt-in surfaces the need for "tier_3 inside + tier_1 outside" routing, build that into the gate.
3. **Patient portal UI for inbox display** — UI work; can run in parallel with the above.
4. **Net-new tier_3 rule** (e.g., `provider_message_sent`, `lab_results_ready`) — uses the new substrate without touching legacy migrations.
5. **Continue Phase 4H-templates-discipline** legacy migrations — `case_denied`, `rx_sent`, `active_care`, `followup_due`, `followup_needed`, `refill_pending` (6 remaining of the 11 baseline).

The trial is COMPLETE; future migrations follow the established pattern.

---

## Mode-shift note (added 2026-05-10 afternoon)

After c1 shipped, ChatGPT pressure-tested long-term scale risks (preserved at [`.cursor/plans/audits/2026-05-10_future_blocks_long_term_pressure_test.md`](audits/2026-05-10_future_blocks_long_term_pressure_test.md)) and named a strategic transition the project is now at:

```
Substrate-completion mode  ->  Continuity-proving mode
"Does the foundation hold?"     "Does the patient experience this?"
```

The architecture has reached the threshold where **more substrate without proving continuity is the new failure mode**. The c1 commit ships in_app infrastructure that no rule currently uses — appropriate because in_app was a prerequisite for tier_3 communications, but it means the next high-leverage move is to **USE** the substrate, not extend it further.

Practical implications for commit planning going forward:

- Default question shifts from "does this make the substrate more theoretically complete?" to "does this unlock visible continuity (something a patient or provider experiences)?"
- The first rule in_app opt-in (sequencing option #1 above) is now the most direct response to this mode shift — it's the cheapest demonstration that the substrate works in production.
- Continued legacy migrations (option #5) are also valid — they're mechanical pattern-replay that closes out the v0 cutover, which IS visible continuity (less divergence between legacy + typed paths).
- Building MORE substrate (more channels, more orchestration, more disclosure-policy sophistication) without rules-using-it should be questioned at preflight time.

This mode-shift recognition does NOT add architectural commitments. It is a strategic posture for commit-planning conversations. ADR §7.7 + system-map doctrine + radar continue to be the binding artifacts.

The one concrete near-term watch zone surfaced by the pressure-test (radar zone 28: care-task substrate vs metadata jsonb leakage) is captured in the radar so future contributors face it explicitly when the first inbox-with-CTA rule lands.
