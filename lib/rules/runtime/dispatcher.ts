/**
 * Phase 4H-pre commit 5 — thin one-rule dispatcher.
 *
 * Per ADR Section 7.6 (Rule execution scope; binding):
 *
 *   Rules may not mutate domain state directly.
 *   Rules may only produce governed actions through approved
 *   orchestrator / writer boundaries.
 *
 *   Currently-approved action set (Phase 4H-pre commit 5):
 *     1. Enqueue outbound_jobs rows via enqueue_outbound_job
 *        SECURITY DEFINER orchestrator (wrapped by lib/outbound/enqueue.ts).
 *     2. Emit rule.fired.* audit events via insertAuditEvent.
 *
 * STRUCTURAL ENFORCEMENT — IMPORT ALLOWLIST (commit 5 set; extended in
 * Phase 4H-disclosure-policy commit 2 with the pathway sensitivity
 * registry — pure read-only constant lookup, no I/O, no side effects):
 *
 *   ALLOWED:
 *     @/lib/outbound/enqueue              — enqueueOutboundJob (action #1)
 *     @/lib/events/index                  — insertAuditEvent (action #2)
 *     @/lib/supabase/admin                — read-only SELECTs (patients, brands)
 *     @/lib/templates/render/*            — render typed Template output
 *     @/repo/rules                        — Rule registry + lookup
 *     @/repo/templates                    — Template registry + lookup
 *     @/lib/events/rule-trigger-event-types — typed trigger vocabulary
 *     @/lib/pathways/sensitivity-registry — typed pathway_code -> sensitivity lookup
 *
 *   FORBIDDEN (any import here is a structural violation):
 *     @/lib/care/*                    — domain mutation surface
 *     @/lib/internal/patient-case/*   — domain mutation surface
 *     @/lib/refill/*                  — domain mutation surface
 *     @/lib/payments/*                — domain mutation surface
 *     @/lib/intake/runtime/*          — domain mutation surface
 *     @/lib/workflows/*               — legacy workflow hook
 *     @/lib/jobs/*                    — dispatch worker (different concern)
 *     @/lib/safety/*                  — domain mutation surface
 *     @/lib/labs/*                    — domain mutation surface
 *     @/lib/audit/*                   — already deleted in Phase 4F follow-up
 *
 * The dispatcher's RETURN TYPE is also constrained:
 *   `{ enqueued_outbound_job_ids: string[]; audit_event_id: string }`
 * — no domain return values, no mutation handles. Callers receive
 * audit + outbound_jobs identifiers only.
 *
 * Future RuleAction types extend the approved set per ADR Section 7.6
 * extension procedure: ADR amendment + new orchestrator + dispatcher
 * import allowlist extension. Until then, this dispatcher refuses to
 * fire rules whose action.kind is anything other than 'notify'.
 *
 * For the wider architectural reasoning, see:
 *   - docs/architecture/phase_4h_target_first_decision_record.md §7.6
 *   - .cursor/plans/system_map_three_layers_60706286.plan.md §1Q.0 inv 13
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import { createAdminClient } from '@/lib/supabase/admin'
import { enqueueOutboundJob } from '@/lib/outbound/enqueue'
import { insertAuditEvent } from '@/lib/events'
import {
  findRulesByTriggerEventType,
} from '@/repo/rules'
import { findTemplateByKey } from '@/repo/templates'
import {
  type RuleTriggerEventType,
  isKnownRuleTriggerEventType,
} from '@/lib/events/rule-trigger-event-types'
import {
  renderPaymentReceivedEmail,
  renderPaymentReceivedSms,
  type PaymentReceivedRenderInputs,
} from '@/lib/templates/render/payment-received'
import {
  renderIntakeSubmittedEmail,
  renderIntakeSubmittedSms,
  type IntakeSubmittedRenderInputs,
} from '@/lib/templates/render/intake-submitted'
import {
  renderCaseApprovedEmail,
  renderCaseApprovedSms,
  type CaseApprovedRenderInputs,
} from '@/lib/templates/render/case-approved'
import {
  renderAwaitingClinicalReviewEmail,
  renderAwaitingClinicalReviewSms,
  type AwaitingClinicalReviewRenderInputs,
} from '@/lib/templates/render/awaiting-clinical-review'
import {
  renderActiveCareEmail,
  renderActiveCareSms,
  type ActiveCareRenderInputs,
} from '@/lib/templates/render/active-care'
import {
  renderFollowupDueEmail,
  renderFollowupDueSms,
  type FollowupDueRenderInputs,
} from '@/lib/templates/render/followup-due'
import {
  renderOrderShippedEmail,
  renderOrderShippedSms,
  type OrderShippedRenderInputs,
} from '@/lib/templates/render/order-shipped'
import { getAppBaseUrl } from '@/lib/stripe/server'
import type { Rule } from '@/repo/rules'
import {
  resolvePathwaySensitivity,
  isKnownPathwayCode,
  type PathwayCode,
} from '@/lib/pathways/sensitivity-registry'
import type { PathwaySensitivity } from '@/lib/outbound/types'

// =====================================================================
// Public types
// =====================================================================

/**
 * The trigger event payload the dispatcher accepts. Discriminated by
 * `event_type`. New triggers added to RULE_TRIGGER_EVENT_TYPES extend
 * this union per Section 1Q.4 + ADR Section 8 deferral.
 */
export type RuleTriggerEvent =
  | {
      event_type: 'commerce.checkout.session_completed'
      payload: CommerceCheckoutSessionCompletedPayload
    }
  | {
      event_type: 'patient.intake_submitted'
      payload: PatientIntakeSubmittedPayload
    }
  | {
      event_type: 'patient.case_approved'
      payload: PatientCaseApprovedPayload
    }
  | {
      event_type: 'patient.case_under_review'
      payload: PatientCaseUnderReviewPayload
    }
  | {
      event_type: 'patient.case_active'
      payload: PatientCaseActivePayload
    }
  | {
      event_type: 'patient.case_followup_due'
      payload: PatientCaseFollowupDuePayload
    }
  | {
      event_type: 'patient.order_shipped'
      payload: PatientOrderShippedPayload
    }

export interface CommerceCheckoutSessionCompletedPayload {
  /** UUID; the patient record this checkout pertains to. */
  patient_id: string
  /** Stripe checkout session id (used for idempotency_key + audit metadata). */
  stripe_checkout_session_id: string
  /** Charged amount in smallest currency unit (cents). */
  payment_amount_cents: number
  /** ISO 4217 3-letter currency code from session.currency. */
  payment_currency: string
}

export interface PatientIntakeSubmittedPayload {
  /** UUID; the patient record this intake submission pertains to. */
  patient_id: string
  /**
   * UUID of the form_submissions row created in
   * app/api/forms/[formKey]/route.ts. Used as the per-submission
   * idempotency anchor (replaces legacy patient-keyed dedupe).
   */
  form_submission_id: string
  /**
   * Form key from the route (e.g. 'glp1-intake'). Carried for audit
   * metadata; the Template itself is pathway-agnostic.
   */
  form_key: string
}

export interface PatientCaseApprovedPayload {
  /** UUID; the patient record this case-approval pertains to. */
  patient_id: string
  /**
   * Identifies the underlying mutation surface. Today's producer sites
   * approve either a `treatment_items` row (gated to `treatment_key =
   * 'glp1_primary'`) or a `care_programs` row (gated to `program_type
   * = 'weight_loss'`). The Rule layer does not double-filter; the
   * Template wording is identical regardless of surface. The kind is
   * carried for audit metadata.
   *
   * IMPORTANT (long-horizon watch zone preserved from the c3
   * preflight §12): `case_kind` is a payload-level convenience label
   * over TWO distinct domain primitives — there is NO `cases` table
   * and "case" is bounded to the clinical-decision lifecycle. Future
   * migrations of non-clinical-decision flows (scheduling, eRx,
   * refills, retail orders, provider tasking) should NOT inherit
   * this payload shape; each should model its own domain primitive
   * to prevent the system map's ontology from drifting toward
   * "everything is a case."
   */
  case_kind: 'treatment_item' | 'care_program'
  /**
   * UUID of the treatment_items.id or care_programs.id row that was
   * approved. Combined with case_kind in the audit metadata for full
   * lineage.
   */
  case_id: string
  /**
   * UUID of the audit_events row emitted by the producer site for the
   * underlying status-transition mutation (action =
   * 'treatment_item.status_changed' or 'care_program.status_changed').
   * Used as the PER-TRANSITION idempotency anchor — a case bouncing
   * approved -> denied -> approved produces a distinct audit_event_id
   * for each genuine re-approval, so each fires a fresh notification.
   */
  approval_audit_event_id: string
}

export interface PatientCaseUnderReviewPayload {
  /** UUID; the patient record this status transition pertains to. */
  patient_id: string
  /**
   * Same case_kind discriminant as PatientCaseApprovedPayload — bounded
   * to the clinical-decision lifecycle. See watch-zone note on the
   * sibling payload above; do NOT extend the case_kind union to
   * non-clinical-decision domain objects.
   */
  case_kind: 'treatment_item' | 'care_program'
  /**
   * UUID of the treatment_items.id or care_programs.id row that
   * transitioned. Combined with case_kind in the audit metadata.
   */
  case_id: string
  /**
   * Which status the case transitioned INTO. Both 'under_review' and
   * 'pending_approval' route to the same Rule, preserving legacy
   * PATIENT_NOTIFY_BY_STATUS behavior where both map entries pointed
   * at `awaiting_clinical_review`. Carried for audit lineage.
   */
  next_status: 'under_review' | 'pending_approval'
  /**
   * UUID of the audit_events row emitted by the producer site for the
   * underlying status-transition mutation. Used as the PER-TRANSITION
   * idempotency anchor — a case bouncing pending -> under_review ->
   * pending_approval -> under_review produces a distinct
   * audit_event_id for each genuine transition, so each fires a fresh
   * notification (preserves legacy from->to dedupe behavior).
   */
  transition_audit_event_id: string
}

export interface PatientCaseActivePayload {
  /** UUID; the patient record this status transition pertains to. */
  patient_id: string
  /**
   * Same case_kind discriminant as PatientCaseApprovedPayload +
   * PatientCaseUnderReviewPayload — bounded to the clinical-decision
   * lifecycle. See watch-zone note on the sibling payloads above; do
   * NOT extend the case_kind union to non-clinical-decision domain
   * objects.
   */
  case_kind: 'treatment_item' | 'care_program'
  /**
   * UUID of the treatment_items.id or care_programs.id row that
   * transitioned to active. Combined with case_kind in the audit
   * metadata for full lineage.
   */
  case_id: string
  /**
   * UUID of the audit_events row emitted by the producer site for the
   * underlying status-transition mutation. Used as the PER-TRANSITION
   * idempotency anchor — a treatment_item bouncing approved -> active
   * -> stopped -> active produces a distinct audit_event_id for each
   * genuine transition into active, so each fires a fresh
   * notification.
   */
  activation_audit_event_id: string
}

export interface PatientCaseFollowupDuePayload {
  /** UUID; the patient record this status transition pertains to. */
  patient_id: string
  /**
   * SINGLE-VALUE discriminant: only `'treatment_item'` for c6
   * because `refill_due` is not a valid `care_programs.status`.
   * Kept as a union for shape consistency with the prior
   * clinical_decision payloads (and to allow future expansion if
   * a care_programs-level `refill_due` analog ever lands).
   * See watch-zone note on the sibling payloads above; do NOT
   * extend the case_kind union to non-clinical-decision domain
   * objects.
   */
  case_kind: 'treatment_item' | 'care_program'
  /**
   * UUID of the treatment_items.id row that transitioned to
   * `'refill_due'`. Combined with case_kind in audit metadata.
   */
  case_id: string
  /**
   * UUID of the audit_events row emitted by the producer site for
   * the underlying status-transition mutation. Used as the
   * PER-TRANSITION idempotency anchor — a treatment_item bouncing
   * active -> refill_due -> active -> refill_due produces a
   * distinct audit_event_id for each genuine transition into
   * refill_due, so each fires a fresh notification.
   */
  transition_audit_event_id: string
}

export interface PatientOrderShippedPayload {
  /** UUID; the patient record this shipment pertains to. */
  patient_id: string
  /**
   * Sibling-domain discriminant per system-map `## Platform operational
   * model` doctrine (binding 2026-05-10): orders / fulfillment /
   * inventory is a first-class sibling under Patient. The
   * `order_kind` discriminant is the FULFILLMENT sibling's identifier;
   * it is INTENTIONALLY DIFFERENT from `case_kind` (the clinical-
   * decision sibling's identifier) so future authors of fulfillment-
   * shaped events (delivered, supplement_order_shipped, lab_kit_shipped,
   * pharmacy_filled, retail_order_placed) inherit the correct
   * sibling-domain home and do NOT extend `case_kind` across the
   * sibling seam.
   *
   * Initial wiring covers `'treatment_order'` only. The other two
   * values (`'supplement_order'`, `'lab_kit_order'`) are RESERVED in
   * the discriminant but not yet active; their producer sites + parity
   * tests land in future migrations. Adding a 4th value (e.g.,
   * `'pharmacy_event'`) is forbidden — pharmacy events are a separate
   * sibling and must get their own discriminant + folder per the
   * doctrine.
   */
  order_kind: 'treatment_order' | 'supplement_order' | 'lab_kit_order'
  /**
   * Logical identifier for the shipped order. Today the producer
   * surface is `lib/internal/patient-case/impl.ts` operating on
   * `treatment_items.id` (transitional locality per the doctrine's
   * producer-site rule + audit §6 #3 + radar zone 27). Future
   * producer migration to `lib/orders/updateFulfillment.ts` will
   * switch the bound id to `treatment_orders.id` WITHOUT changing
   * the payload semantic — the field remains "the shipped order's
   * stable identifier."
   */
  order_id: string
  /**
   * UUID of the audit_events row emitted by the producer site for the
   * underlying status-transition mutation (action =
   * 'treatment_item.status_changed' today). Used as the PER-TRANSITION
   * idempotency anchor — a treatment_item bouncing approved ->
   * rx_sent -> shipped -> rx_sent -> shipped produces a distinct
   * audit_event_id for each genuine re-shipment.
   */
  shipping_audit_event_id: string
}

/**
 * Side-effect-bounded return shape per ADR Section 7.6. The dispatcher
 * surfaces ONLY: identifiers of enqueued outbound_jobs rows + the
 * rule.fired audit event id. No domain return values, no mutation
 * handles.
 */
export interface RuleDispatchResult {
  rule_id: string
  rule_version: string
  enqueued_outbound_job_ids: string[]
  audit_event_id: string
  /**
   * True when the dispatcher resolved a rule that matched the trigger.
   * False when no rule matched (e.g., trigger event registered but no
   * active Rule listens to it). The dispatcher returns a no-op result
   * with empty arrays in the no-match case — caller logs and continues.
   */
  matched: boolean
}

export type RuleDispatchSkipped = {
  matched: false
  rule_id: null
  rule_version: null
  enqueued_outbound_job_ids: []
  audit_event_id: null
  skip_reason: 'no_active_rule' | 'unknown_trigger_event_type'
}

// =====================================================================
// Pathway sensitivity propagation (Phase 4H-disclosure-policy commit 2)
// =====================================================================

interface ResolvedPathway {
  pathway_code: PathwayCode | undefined
  pathway_sensitivity: PathwaySensitivity | undefined
}

/**
 * Resolve a Rule's pathway scope to the (pathway_code, pathway_sensitivity)
 * pair the disclosure-policy gate consumes at dispatch time.
 *
 * Behavior matrix per Phase 4H-disclosure-policy commit 2 preflight:
 *
 *   Rule.pathway_scope                  | Result
 *   -----------------------------------|------------------------------------
 *   undefined or empty array            | both fields undefined (no behavior change vs Phase 4H-pre)
 *   single element, registered code     | both fields populated from registry
 *   single element, UNREGISTERED code   | throws — caught by caller; the rule firing aborts loudly so the misconfiguration is fixed at PR time, not silently fail-closed at runtime
 *   multi-element                       | both fields undefined (the multi-scope reducer ships in a later commit; the elevated-tier-must-scope-tightly lint at scripts/lint-rules-templates-scaffold.ts blocks the dangerous combinations from authoring time)
 *
 * Rationale: only the "registered single-pathway" branch carries enough
 * information to populate sensitivity unambiguously. Multi-scope tier_3+
 * outside-secure rules are blocked by the lint per ChatGPT pushback;
 * multi-scope tier_2 or below rules pass with null sensitivity (they
 * don't read it).
 */
function resolvePathwayForRule(rule: Rule): ResolvedPathway {
  const scope = rule.pathway_scope
  if (!scope || scope.length === 0) {
    return { pathway_code: undefined, pathway_sensitivity: undefined }
  }
  if (scope.length > 1) {
    return { pathway_code: undefined, pathway_sensitivity: undefined }
  }
  const code = scope[0]
  if (!isKnownPathwayCode(code)) {
    throw new Error(
      `resolvePathwayForRule: rule ${rule.rule_id} has pathway_scope=['${code}'] ` +
        `which is not in PATHWAY_CODES at lib/pathways/sensitivity-registry.ts. ` +
        `Add the code to the registry or fix the typo before firing the rule.`,
    )
  }
  return {
    pathway_code: code,
    pathway_sensitivity: resolvePathwaySensitivity(code),
  }
}

// =====================================================================
// Public dispatch entry point
// =====================================================================

/**
 * Dispatch a typed trigger event to the matching Rule (if any) and
 * fire the approved orchestrator-mediated actions.
 *
 * Per ADR Section 7.6: the dispatcher only fires rules whose action.kind
 * is in the currently-approved set ({ 'notify' } for commit 5). Rules
 * with other action kinds are skipped with a clear log; they will be
 * re-enabled when the appropriate orchestrator boundary is approved
 * via ADR amendment.
 */
export async function dispatchRuleTriggerEvent(
  event: RuleTriggerEvent,
  supabase?: SupabaseClient,
): Promise<RuleDispatchResult | RuleDispatchSkipped> {
  if (!isKnownRuleTriggerEventType(event.event_type)) {
    return {
      matched: false,
      rule_id: null,
      rule_version: null,
      enqueued_outbound_job_ids: [],
      audit_event_id: null,
      skip_reason: 'unknown_trigger_event_type',
    }
  }

  const rules = findRulesByTriggerEventType(event.event_type)
  if (rules.length === 0) {
    return {
      matched: false,
      rule_id: null,
      rule_version: null,
      enqueued_outbound_job_ids: [],
      audit_event_id: null,
      skip_reason: 'no_active_rule',
    }
  }

  // For commit 5: exactly one Rule is registered for the only registered
  // trigger event. When multiple rules become possible, this loop will
  // process them in registry order. Each Rule produces its own
  // independent set of actions; one rule's failure does not roll back
  // another rule's writes (per Section 1Q.6 step-by-step semantics).
  // For commit 5, single-rule path is sufficient.
  if (rules.length > 1) {
    throw new Error(
      `dispatchRuleTriggerEvent: Phase 4H-pre commit 5 dispatcher does not support multi-rule fan-out. ` +
        `Got ${rules.length} rules for event_type=${event.event_type}. ` +
        `Multi-rule support arrives in Phase 4H-rules-runtime.`,
    )
  }

  const rule = rules[0]
  const sb = supabase ?? createAdminClient()

  if (event.event_type === 'commerce.checkout.session_completed') {
    return executePaymentReceivedRule(sb, rule, event.payload)
  }
  if (event.event_type === 'patient.intake_submitted') {
    return executeIntakeSubmittedRule(sb, rule, event.payload)
  }
  if (event.event_type === 'patient.case_approved') {
    return executeCaseApprovedRule(sb, rule, event.payload)
  }
  if (event.event_type === 'patient.case_under_review') {
    return executeAwaitingClinicalReviewRule(sb, rule, event.payload)
  }
  if (event.event_type === 'patient.case_active') {
    return executeActiveCareRule(sb, rule, event.payload)
  }
  if (event.event_type === 'patient.case_followup_due') {
    return executeFollowupDueRule(sb, rule, event.payload)
  }
  if (event.event_type === 'patient.order_shipped') {
    return executeOrderShippedRule(sb, rule, event.payload)
  }

  // Should be unreachable given the typed event union; defensive.
  throw new Error(
    `dispatchRuleTriggerEvent: no executor for event_type=${(event as RuleTriggerEvent).event_type}`,
  )
}

// =====================================================================
// Per-rule executor: payment_received
// =====================================================================

async function executePaymentReceivedRule(
  supabase: SupabaseClient,
  rule: Rule,
  payload: CommerceCheckoutSessionCompletedPayload,
): Promise<RuleDispatchResult> {
  // Enforce action shape at runtime (commit 5 dispatcher only accepts
  // notify-kind actions; future kinds extend per ADR Section 7.6).
  if (rule.action.kind !== 'notify') {
    throw new Error(
      `executePaymentReceivedRule: rule ${rule.rule_id} has action.kind=${rule.action.kind}; ` +
        `commit 5 dispatcher only fires 'notify' actions. Other kinds require approved ` +
        `orchestrator boundary per ADR Section 7.6 extension procedure.`,
    )
  }

  const template = findTemplateByKey(rule.template_key ?? '')
  if (!template) {
    throw new Error(
      `executePaymentReceivedRule: rule ${rule.rule_id} references template_key=${rule.template_key} ` +
        `which is not in TEMPLATE_REGISTRY. Author the Template at repo/templates/ before firing the Rule.`,
    )
  }

  // ---------------------------------------------------------------
  // READ-only patient + brand resolution per ADR Section 7.6 allowed-MAY:
  // "READ patient/brand/domain state, scoped to the inputs declared in
  // Rule.required_inputs."
  // ---------------------------------------------------------------

  const { data: patientRow, error: patientError } = await supabase
    .from('patients')
    .select('id, org_id, first_name, email, phone')
    .eq('id', payload.patient_id)
    .single()
  if (patientError || !patientRow) {
    throw new Error(
      `executePaymentReceivedRule: patient lookup failed for ${payload.patient_id}: ${patientError?.message ?? 'not found'}`,
    )
  }
  const patient = patientRow as {
    id: string
    org_id: string
    first_name: string | null
    email: string | null
    phone: string | null
  }

  const { data: brandRow, error: brandError } = await supabase
    .from('brands')
    .select('id, org_id, slug, display_name, status')
    .eq('org_id', patient.org_id)
    .eq('status', 'active')
    .limit(1)
    .maybeSingle()
  if (brandError) {
    throw new Error(
      `executePaymentReceivedRule: brand lookup failed for org_id=${patient.org_id}: ${brandError.message}`,
    )
  }
  const brand = brandRow as { id: string; slug: string; display_name: string } | null

  // Brand resolution is required — without it we cannot multi-tenant
  // the rendered output. If the brand row is missing, abort the rule
  // firing (do not silently fall back to a hardcoded default — that
  // would re-introduce the legacy "MAIN:" behavior the cutover deletes).
  if (!brand) {
    throw new Error(
      `executePaymentReceivedRule: no active brand for org_id=${patient.org_id}. ` +
        `Multi-tenant brand sourcing is required per ADR Section 7.5.`,
    )
  }

  // ---------------------------------------------------------------
  // Render the typed Template into channel-specific output.
  // ---------------------------------------------------------------

  const dashboardUrl = `${getAppBaseUrl().replace(/\/$/, '')}/dashboard/${patient.id}`
  const renderInputs: PaymentReceivedRenderInputs = {
    payment_amount_cents: payload.payment_amount_cents,
    payment_currency: payload.payment_currency,
    brand_short_label: brand.slug.toUpperCase(),
    dashboard_url: dashboardUrl,
    patient_first_name: patient.first_name,
  }
  const rendered = {
    email: renderPaymentReceivedEmail(renderInputs),
    sms: renderPaymentReceivedSms(renderInputs),
  }

  // Resolve pathway sensitivity once per firing (Phase 4H-disclosure-policy
  // commit 2). For unscoped rules like payment_received, both fields are
  // undefined and the disclosure-policy gate treats the row as null-pathway
  // (which is fine for tier_1 outside-secure; would fail-closed for tier_3+).
  const resolvedPathway = resolvePathwayForRule(rule)

  // ---------------------------------------------------------------
  // Approved action #1 — enqueue outbound_jobs rows.
  // The full rule + template + privacy lineage persists on each row
  // per Section 1Q.7 + Phase 4H-pre commit 1 schema.
  // ---------------------------------------------------------------

  const enqueuedIds: string[] = []

  if (patient.email && rule.action.channels.includes('email')) {
    const emailResult = await enqueueOutboundJob({
      kind: 'send_email',
      channel: 'email',
      patient_id: patient.id,
      idempotency_key: `rule.payment_received:${payload.stripe_checkout_session_id}:email`,
      external_system_name: 'stripe',
      external_system_id: payload.stripe_checkout_session_id,
      // Note: external_inbound_event_id intentionally omitted. The
      // outbound_jobs_inbound_event_uniq index allows ONE outbound
      // effect per inbound event; payment_received produces TWO
      // (email + SMS) from a single Stripe checkout.session.completed
      // event. The per-row idempotency_key carries the dedupe.
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        // Pre-rendered email body — the dispatch worker recognizes
        // payload.rendered_email and sends it directly without
        // touching the legacy buildPatientEmail switch.
        template_key: template.template_key,
        template_version: template.template_version,
        to: patient.email,
        rendered_email: rendered.email,
      },
      metadata: {
        gate_call_site: 'rule_engine',
      },
    })
    enqueuedIds.push(emailResult.outbound_job_id)
  }

  if (patient.phone && rule.action.channels.includes('sms')) {
    const smsResult = await enqueueOutboundJob({
      kind: 'send_sms',
      channel: 'sms',
      patient_id: patient.id,
      idempotency_key: `rule.payment_received:${payload.stripe_checkout_session_id}:sms`,
      external_system_name: 'stripe',
      external_system_id: payload.stripe_checkout_session_id,
      // Note: external_inbound_event_id intentionally omitted. See
      // matching note on the email enqueue above.
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to_phone: patient.phone,
        rendered_sms: rendered.sms,
      },
      metadata: {
        gate_call_site: 'rule_engine',
      },
    })
    enqueuedIds.push(smsResult.outbound_job_id)
  }

  // ---------------------------------------------------------------
  // Approved action #2 — emit rule.fired.* audit event.
  // ---------------------------------------------------------------

  const auditResult = await insertAuditEvent(
    {
      action: rule.audit_event_type,
      resourceType: 'rule',
      resourceId: rule.rule_id,
      patientId: patient.id,
      actorKind: 'system',
      orgId: patient.org_id,
      metadata: {
        rule_version: rule.rule_version,
        template_key: template.template_key,
        template_version: template.template_version,
        intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
        message_intent: rule.action.message_intent,
        decision_outcome_reason: 'rule_matched',
        trigger_event_type: 'commerce.checkout.session_completed' satisfies RuleTriggerEventType,
        stripe_checkout_session_id: payload.stripe_checkout_session_id,
        enqueued_outbound_job_ids: enqueuedIds,
      },
    },
    supabase,
  )

  if (!auditResult.ok) {
    throw new Error(
      `executePaymentReceivedRule: insertAuditEvent failed for ${rule.audit_event_type}: ${auditResult.error}`,
    )
  }

  return {
    matched: true,
    rule_id: rule.rule_id,
    rule_version: rule.rule_version,
    enqueued_outbound_job_ids: enqueuedIds,
    audit_event_id: auditResult.audit_event_id ?? '',
  }
}

// =====================================================================
// Per-rule executor: intake_submitted
// =====================================================================

async function executeIntakeSubmittedRule(
  supabase: SupabaseClient,
  rule: Rule,
  payload: PatientIntakeSubmittedPayload,
): Promise<RuleDispatchResult> {
  if (rule.action.kind !== 'notify') {
    throw new Error(
      `executeIntakeSubmittedRule: rule ${rule.rule_id} has action.kind=${rule.action.kind}; ` +
        `commit-5-pattern dispatcher only fires 'notify' actions. Other kinds require approved ` +
        `orchestrator boundary per ADR Section 7.6 extension procedure.`,
    )
  }

  const template = findTemplateByKey(rule.template_key ?? '')
  if (!template) {
    throw new Error(
      `executeIntakeSubmittedRule: rule ${rule.rule_id} references template_key=${rule.template_key} ` +
        `which is not in TEMPLATE_REGISTRY.`,
    )
  }

  // ---------------------------------------------------------------
  // READ-only patient + brand resolution per ADR Section 7.6 allowed-MAY.
  // ---------------------------------------------------------------

  const { data: patientRow, error: patientError } = await supabase
    .from('patients')
    .select('id, org_id, first_name, email, phone')
    .eq('id', payload.patient_id)
    .single()
  if (patientError || !patientRow) {
    throw new Error(
      `executeIntakeSubmittedRule: patient lookup failed for ${payload.patient_id}: ${patientError?.message ?? 'not found'}`,
    )
  }
  const patient = patientRow as {
    id: string
    org_id: string
    first_name: string | null
    email: string | null
    phone: string | null
  }

  const { data: brandRow, error: brandError } = await supabase
    .from('brands')
    .select('id, org_id, slug, display_name, status')
    .eq('org_id', patient.org_id)
    .eq('status', 'active')
    .limit(1)
    .maybeSingle()
  if (brandError) {
    throw new Error(
      `executeIntakeSubmittedRule: brand lookup failed for org_id=${patient.org_id}: ${brandError.message}`,
    )
  }
  const brand = brandRow as { id: string; slug: string; display_name: string } | null

  if (!brand) {
    throw new Error(
      `executeIntakeSubmittedRule: no active brand for org_id=${patient.org_id}. ` +
        `Multi-tenant brand sourcing is required per ADR Section 7.5.`,
    )
  }

  // ---------------------------------------------------------------
  // Render the typed Template into channel-specific output.
  // ---------------------------------------------------------------

  const dashboardUrl = `${getAppBaseUrl().replace(/\/$/, '')}/dashboard/${patient.id}`
  const renderInputs: IntakeSubmittedRenderInputs = {
    brand_short_label: brand.slug.toUpperCase(),
    dashboard_url: dashboardUrl,
    patient_first_name: patient.first_name,
  }
  const rendered = {
    email: renderIntakeSubmittedEmail(renderInputs),
    sms: renderIntakeSubmittedSms(renderInputs),
  }

  // Resolve pathway sensitivity once per firing (Phase 4H-disclosure-policy
  // commit 2). intake_submitted is unscoped today (it fires for any
  // patient regardless of pathway), so both fields resolve to undefined.
  const resolvedPathway = resolvePathwayForRule(rule)

  // ---------------------------------------------------------------
  // Approved action #1 — enqueue outbound_jobs rows.
  // Per-submission idempotency keyed on form_submission_id (replaces
  // legacy per-patient null->intake_submitted dedupe). Documented in
  // the commit message wording diff log.
  // ---------------------------------------------------------------

  const enqueuedIds: string[] = []

  if (patient.email && rule.action.channels.includes('email')) {
    const emailResult = await enqueueOutboundJob({
      kind: 'send_email',
      channel: 'email',
      patient_id: patient.id,
      idempotency_key: `rule.intake_submitted:${payload.form_submission_id}:email`,
      external_system_name: 'forms',
      external_system_id: payload.form_submission_id,
      // external_inbound_event_id intentionally omitted (one inbound
      // form_submission produces 2 outbound rows; per-row dedupe is
      // via idempotency_key, same as commit 5).
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to: patient.email,
        rendered_email: rendered.email,
      },
      metadata: {
        gate_call_site: 'rule_engine',
        form_key: payload.form_key,
      },
    })
    enqueuedIds.push(emailResult.outbound_job_id)
  }

  if (patient.phone && rule.action.channels.includes('sms')) {
    const smsResult = await enqueueOutboundJob({
      kind: 'send_sms',
      channel: 'sms',
      patient_id: patient.id,
      idempotency_key: `rule.intake_submitted:${payload.form_submission_id}:sms`,
      external_system_name: 'forms',
      external_system_id: payload.form_submission_id,
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to_phone: patient.phone,
        rendered_sms: rendered.sms,
      },
      metadata: {
        gate_call_site: 'rule_engine',
        form_key: payload.form_key,
      },
    })
    enqueuedIds.push(smsResult.outbound_job_id)
  }

  // ---------------------------------------------------------------
  // Approved action #2 — emit rule.fired.* audit event.
  // ---------------------------------------------------------------

  const auditResult = await insertAuditEvent(
    {
      action: rule.audit_event_type,
      resourceType: 'rule',
      resourceId: rule.rule_id,
      patientId: patient.id,
      actorKind: 'system',
      orgId: patient.org_id,
      metadata: {
        rule_version: rule.rule_version,
        template_key: template.template_key,
        template_version: template.template_version,
        intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
        message_intent: rule.action.message_intent,
        decision_outcome_reason: 'rule_matched',
        trigger_event_type: 'patient.intake_submitted' satisfies RuleTriggerEventType,
        form_submission_id: payload.form_submission_id,
        form_key: payload.form_key,
        enqueued_outbound_job_ids: enqueuedIds,
      },
    },
    supabase,
  )

  if (!auditResult.ok) {
    throw new Error(
      `executeIntakeSubmittedRule: insertAuditEvent failed for ${rule.audit_event_type}: ${auditResult.error}`,
    )
  }

  return {
    matched: true,
    rule_id: rule.rule_id,
    rule_version: rule.rule_version,
    enqueued_outbound_job_ids: enqueuedIds,
    audit_event_id: auditResult.audit_event_id ?? '',
  }
}

// =====================================================================
// Per-rule executor: case_approved
//
// Phase 4H-templates-discipline commit 2 — third hardcoded executor
// branch. Per ChatGPT pre-execution constraint #1 (binding): NO
// dispatcher generalization. The branch sits alongside the existing
// two; the runtime stays as side-effect-bounded as it is today.
//
// FIRST executor that fires a clinical + provider-authority Rule.
// Distinguishing characteristics vs the existing two:
//   - rule.audit_event_type = 'rule.fired.clinical_decision.*'
//     (vs rule.fired.billing.* / rule.fired.account_lifecycle.*)
//   - rule.action.message_intent = 'clinical' (vs 'billing' / 'account')
//   - rule.authority_floor = 'provider' (vs 'system' — metadata only
//     today; the dispatcher does not enforce authority_floor structurally)
//   - rule.recall_severity = 'clinical_significant' (vs 'operational')
//
// Idempotency: per-transition, keyed on the underlying status-mutation
// audit_event_id (so a case bouncing approved -> denied -> approved
// emits a fresh notification on each genuine re-approval). The
// `case_kind` + `case_id` are carried in audit metadata for full
// lineage but are NOT part of the dedupe handle.
// =====================================================================

async function executeCaseApprovedRule(
  supabase: SupabaseClient,
  rule: Rule,
  payload: PatientCaseApprovedPayload,
): Promise<RuleDispatchResult> {
  if (rule.action.kind !== 'notify') {
    throw new Error(
      `executeCaseApprovedRule: rule ${rule.rule_id} has action.kind=${rule.action.kind}; ` +
        `commit-5-pattern dispatcher only fires 'notify' actions. Other kinds require approved ` +
        `orchestrator boundary per ADR Section 7.6 extension procedure.`,
    )
  }

  const template = findTemplateByKey(rule.template_key ?? '')
  if (!template) {
    throw new Error(
      `executeCaseApprovedRule: rule ${rule.rule_id} references template_key=${rule.template_key} ` +
        `which is not in TEMPLATE_REGISTRY.`,
    )
  }

  // ---------------------------------------------------------------
  // READ-only patient + brand resolution per ADR Section 7.6 allowed-MAY.
  // ---------------------------------------------------------------

  const { data: patientRow, error: patientError } = await supabase
    .from('patients')
    .select('id, org_id, first_name, email, phone')
    .eq('id', payload.patient_id)
    .single()
  if (patientError || !patientRow) {
    throw new Error(
      `executeCaseApprovedRule: patient lookup failed for ${payload.patient_id}: ${patientError?.message ?? 'not found'}`,
    )
  }
  const patient = patientRow as {
    id: string
    org_id: string
    first_name: string | null
    email: string | null
    phone: string | null
  }

  const { data: brandRow, error: brandError } = await supabase
    .from('brands')
    .select('id, org_id, slug, display_name, status')
    .eq('org_id', patient.org_id)
    .eq('status', 'active')
    .limit(1)
    .maybeSingle()
  if (brandError) {
    throw new Error(
      `executeCaseApprovedRule: brand lookup failed for org_id=${patient.org_id}: ${brandError.message}`,
    )
  }
  const brand = brandRow as { id: string; slug: string; display_name: string } | null

  if (!brand) {
    throw new Error(
      `executeCaseApprovedRule: no active brand for org_id=${patient.org_id}. ` +
        `Multi-tenant brand sourcing is required per ADR Section 7.5.`,
    )
  }

  // ---------------------------------------------------------------
  // Render the typed Template into channel-specific output.
  // ---------------------------------------------------------------

  const dashboardUrl = `${getAppBaseUrl().replace(/\/$/, '')}/dashboard/${patient.id}`
  const renderInputs: CaseApprovedRenderInputs = {
    brand_short_label: brand.slug.toUpperCase(),
    dashboard_url: dashboardUrl,
    patient_first_name: patient.first_name,
  }
  const rendered = {
    email: renderCaseApprovedEmail(renderInputs),
    sms: renderCaseApprovedSms(renderInputs),
  }

  // Resolve pathway sensitivity once per firing. case_approved is
  // unscoped today (the producer-site filters at lib/internal/
  // patient-case/impl.ts gate to glp1_primary / weight_loss; the Rule
  // layer does not double-filter), so both fields resolve to undefined.
  // pathway_sensitivity null is correct for tier_2 — the disclosure-policy
  // clamp does not read it.
  const resolvedPathway = resolvePathwayForRule(rule)

  // ---------------------------------------------------------------
  // Approved action #1 — enqueue outbound_jobs rows.
  // Per-transition idempotency keyed on approval_audit_event_id.
  // ---------------------------------------------------------------

  const enqueuedIds: string[] = []

  if (patient.email && rule.action.channels.includes('email')) {
    const emailResult = await enqueueOutboundJob({
      kind: 'send_email',
      channel: 'email',
      patient_id: patient.id,
      idempotency_key: `rule.case_approved:${payload.approval_audit_event_id}:email`,
      external_system_name: payload.case_kind,
      external_system_id: payload.case_id,
      // external_inbound_event_id intentionally omitted (one inbound
      // case-approval transition produces 2 outbound rows; per-row
      // dedupe is via idempotency_key, same pattern as commit 5 +
      // intake_submitted commit 1).
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to: patient.email,
        rendered_email: rendered.email,
      },
      metadata: {
        gate_call_site: 'rule_engine',
        case_kind: payload.case_kind,
        case_id: payload.case_id,
      },
    })
    enqueuedIds.push(emailResult.outbound_job_id)
  }

  if (patient.phone && rule.action.channels.includes('sms')) {
    const smsResult = await enqueueOutboundJob({
      kind: 'send_sms',
      channel: 'sms',
      patient_id: patient.id,
      idempotency_key: `rule.case_approved:${payload.approval_audit_event_id}:sms`,
      external_system_name: payload.case_kind,
      external_system_id: payload.case_id,
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to_phone: patient.phone,
        rendered_sms: rendered.sms,
      },
      metadata: {
        gate_call_site: 'rule_engine',
        case_kind: payload.case_kind,
        case_id: payload.case_id,
      },
    })
    enqueuedIds.push(smsResult.outbound_job_id)
  }

  // ---------------------------------------------------------------
  // Approved action #2 — emit rule.fired.* audit event.
  // ---------------------------------------------------------------

  const auditResult = await insertAuditEvent(
    {
      action: rule.audit_event_type,
      resourceType: 'rule',
      resourceId: rule.rule_id,
      patientId: patient.id,
      actorKind: 'system',
      orgId: patient.org_id,
      metadata: {
        rule_version: rule.rule_version,
        template_key: template.template_key,
        template_version: template.template_version,
        intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
        message_intent: rule.action.message_intent,
        decision_outcome_reason: 'rule_matched',
        trigger_event_type: 'patient.case_approved' satisfies RuleTriggerEventType,
        case_kind: payload.case_kind,
        case_id: payload.case_id,
        approval_audit_event_id: payload.approval_audit_event_id,
        enqueued_outbound_job_ids: enqueuedIds,
      },
    },
    supabase,
  )

  if (!auditResult.ok) {
    throw new Error(
      `executeCaseApprovedRule: insertAuditEvent failed for ${rule.audit_event_type}: ${auditResult.error}`,
    )
  }

  return {
    matched: true,
    rule_id: rule.rule_id,
    rule_version: rule.rule_version,
    enqueued_outbound_job_ids: enqueuedIds,
    audit_event_id: auditResult.audit_event_id ?? '',
  }
}

// =====================================================================
// Per-rule executor: awaiting_clinical_review
//
// Phase 4H-templates-discipline commit 3 — fourth hardcoded executor
// branch. Per ChatGPT pre-execution constraint #1 (binding): NO
// dispatcher generalization. The branch sits alongside the existing
// three; the runtime stays as side-effect-bounded as it is today.
//
// FIRST executor that fires on a 2-status OR producer gate. The
// producer-side at lib/internal/patient-case/impl.ts dispatches THIS
// trigger event for transitions to EITHER `under_review` OR
// `pending_approval` — preserving legacy behavior where both
// PATIENT_NOTIFY_BY_STATUS map entries (`under_review:` +
// `pending_approval:`) routed to the same `awaiting_clinical_review`
// notification template. The Rule layer does not branch on
// next_status; the Template wording is identical regardless of which
// status was entered. next_status is carried in audit metadata for
// lineage.
//
// Distinguishing characteristics vs the other clinical_decision
// executor (executeCaseApprovedRule):
//   - rule.audit_event_type = 'rule.fired.clinical_decision.awaiting_clinical_review_v1'
//   - rule.action.message_intent = 'operational' (vs case_approved 'clinical')
//   - rule.authority_floor = 'system' (vs case_approved 'provider')
//   - rule.recall_severity = 'operational' (vs case_approved 'clinical_significant')
//   - tier_1 (vs case_approved tier_2)
//
// Idempotency: per-transition, keyed on transition_audit_event_id
// (mirrors approval_audit_event_id pattern from case_approved).
// =====================================================================

async function executeAwaitingClinicalReviewRule(
  supabase: SupabaseClient,
  rule: Rule,
  payload: PatientCaseUnderReviewPayload,
): Promise<RuleDispatchResult> {
  if (rule.action.kind !== 'notify') {
    throw new Error(
      `executeAwaitingClinicalReviewRule: rule ${rule.rule_id} has action.kind=${rule.action.kind}; ` +
        `commit-5-pattern dispatcher only fires 'notify' actions. Other kinds require approved ` +
        `orchestrator boundary per ADR Section 7.6 extension procedure.`,
    )
  }

  const template = findTemplateByKey(rule.template_key ?? '')
  if (!template) {
    throw new Error(
      `executeAwaitingClinicalReviewRule: rule ${rule.rule_id} references template_key=${rule.template_key} ` +
        `which is not in TEMPLATE_REGISTRY.`,
    )
  }

  // ---------------------------------------------------------------
  // READ-only patient + brand resolution per ADR Section 7.6 allowed-MAY.
  // ---------------------------------------------------------------

  const { data: patientRow, error: patientError } = await supabase
    .from('patients')
    .select('id, org_id, first_name, email, phone')
    .eq('id', payload.patient_id)
    .single()
  if (patientError || !patientRow) {
    throw new Error(
      `executeAwaitingClinicalReviewRule: patient lookup failed for ${payload.patient_id}: ${patientError?.message ?? 'not found'}`,
    )
  }
  const patient = patientRow as {
    id: string
    org_id: string
    first_name: string | null
    email: string | null
    phone: string | null
  }

  const { data: brandRow, error: brandError } = await supabase
    .from('brands')
    .select('id, org_id, slug, display_name, status')
    .eq('org_id', patient.org_id)
    .eq('status', 'active')
    .limit(1)
    .maybeSingle()
  if (brandError) {
    throw new Error(
      `executeAwaitingClinicalReviewRule: brand lookup failed for org_id=${patient.org_id}: ${brandError.message}`,
    )
  }
  const brand = brandRow as { id: string; slug: string; display_name: string } | null

  if (!brand) {
    throw new Error(
      `executeAwaitingClinicalReviewRule: no active brand for org_id=${patient.org_id}. ` +
        `Multi-tenant brand sourcing is required per ADR Section 7.5.`,
    )
  }

  // ---------------------------------------------------------------
  // Render the typed Template into channel-specific output.
  // ---------------------------------------------------------------

  const dashboardUrl = `${getAppBaseUrl().replace(/\/$/, '')}/dashboard/${patient.id}`
  const renderInputs: AwaitingClinicalReviewRenderInputs = {
    brand_short_label: brand.slug.toUpperCase(),
    dashboard_url: dashboardUrl,
    patient_first_name: patient.first_name,
  }
  const rendered = {
    email: renderAwaitingClinicalReviewEmail(renderInputs),
    sms: renderAwaitingClinicalReviewSms(renderInputs),
  }

  // Resolve pathway sensitivity once per firing. awaiting_clinical_review
  // is unscoped today (the producer-site filters at lib/internal/
  // patient-case/impl.ts gate to glp1_primary / weight_loss; the Rule
  // layer does not double-filter), so both fields resolve to undefined.
  // pathway_sensitivity null is correct for tier_1 — the disclosure-policy
  // clamp does not read it.
  const resolvedPathway = resolvePathwayForRule(rule)

  // ---------------------------------------------------------------
  // Approved action #1 — enqueue outbound_jobs rows.
  // Per-transition idempotency keyed on transition_audit_event_id
  // (preserves legacy from->to dedupe behavior; a case bouncing
  // pending -> under_review -> pending_approval -> under_review fires
  // one notification per genuine transition).
  // ---------------------------------------------------------------

  const enqueuedIds: string[] = []

  if (patient.email && rule.action.channels.includes('email')) {
    const emailResult = await enqueueOutboundJob({
      kind: 'send_email',
      channel: 'email',
      patient_id: patient.id,
      idempotency_key: `rule.awaiting_clinical_review:${payload.transition_audit_event_id}:email`,
      external_system_name: payload.case_kind,
      external_system_id: payload.case_id,
      // external_inbound_event_id intentionally omitted (one inbound
      // status transition produces 2 outbound rows; per-row dedupe is
      // via idempotency_key, same pattern as commits 5 + intake_submitted
      // + case_approved).
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to: patient.email,
        rendered_email: rendered.email,
      },
      metadata: {
        gate_call_site: 'rule_engine',
        case_kind: payload.case_kind,
        case_id: payload.case_id,
        next_status: payload.next_status,
      },
    })
    enqueuedIds.push(emailResult.outbound_job_id)
  }

  if (patient.phone && rule.action.channels.includes('sms')) {
    const smsResult = await enqueueOutboundJob({
      kind: 'send_sms',
      channel: 'sms',
      patient_id: patient.id,
      idempotency_key: `rule.awaiting_clinical_review:${payload.transition_audit_event_id}:sms`,
      external_system_name: payload.case_kind,
      external_system_id: payload.case_id,
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to_phone: patient.phone,
        rendered_sms: rendered.sms,
      },
      metadata: {
        gate_call_site: 'rule_engine',
        case_kind: payload.case_kind,
        case_id: payload.case_id,
        next_status: payload.next_status,
      },
    })
    enqueuedIds.push(smsResult.outbound_job_id)
  }

  // ---------------------------------------------------------------
  // Approved action #2 — emit rule.fired.* audit event.
  // ---------------------------------------------------------------

  const auditResult = await insertAuditEvent(
    {
      action: rule.audit_event_type,
      resourceType: 'rule',
      resourceId: rule.rule_id,
      patientId: patient.id,
      actorKind: 'system',
      orgId: patient.org_id,
      metadata: {
        rule_version: rule.rule_version,
        template_key: template.template_key,
        template_version: template.template_version,
        intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
        message_intent: rule.action.message_intent,
        decision_outcome_reason: 'rule_matched',
        trigger_event_type: 'patient.case_under_review' satisfies RuleTriggerEventType,
        case_kind: payload.case_kind,
        case_id: payload.case_id,
        next_status: payload.next_status,
        transition_audit_event_id: payload.transition_audit_event_id,
        enqueued_outbound_job_ids: enqueuedIds,
      },
    },
    supabase,
  )

  if (!auditResult.ok) {
    throw new Error(
      `executeAwaitingClinicalReviewRule: insertAuditEvent failed for ${rule.audit_event_type}: ${auditResult.error}`,
    )
  }

  return {
    matched: true,
    rule_id: rule.rule_id,
    rule_version: rule.rule_version,
    enqueued_outbound_job_ids: enqueuedIds,
    audit_event_id: auditResult.audit_event_id ?? '',
  }
}

// =====================================================================
// Per-rule executor: order_shipped
//
// Phase 4H-templates-discipline commit 4 — fifth hardcoded executor
// branch. Per ChatGPT pre-execution constraint #1 (binding): NO
// dispatcher generalization. The branch sits alongside the existing
// four; the runtime stays as side-effect-bounded as it is today.
//
// FIRST executor in the fulfillment_lifecycle sibling-domain
// namespace per the system-map `## Platform operational model`
// doctrine (binding 2026-05-10). Distinguishing characteristics vs
// the existing four executors:
//   - rule.audit_event_type = 'rule.fired.fulfillment_lifecycle.*'
//     (vs rule.fired.billing.* / rule.fired.account_lifecycle.* /
//     rule.fired.clinical_decision.*) — FIRST sibling-domain
//     expansion.
//   - payload uses `order_kind` discriminant (NOT `case_kind`) per
//     the doctrine: each operational sibling owns its own
//     discriminant and discriminants do not leak across sibling
//     seams.
//   - rule.action.send_policy_class = 'transactional_operational'
//     (matches awaiting_clinical_review's class but distinguishes
//     from billing / account / clinical).
//
// PRODUCER-SITE TRANSITIONAL LOCALITY: the producer at
// lib/internal/patient-case/impl.ts is the case-shaped surface
// where the legacy notification fired; this executor consumes that
// transitional wiring. The TYPE SYSTEM nonetheless encodes the
// architecturally-correct sibling-domain home (folder, discriminant,
// audit namespace). Tracked as v1 pressure-test radar zone 27.
//
// Idempotency: per-transition, keyed on shipping_audit_event_id
// (mirrors approval_audit_event_id / transition_audit_event_id
// patterns from the prior clinical_decision executors).
// =====================================================================

async function executeOrderShippedRule(
  supabase: SupabaseClient,
  rule: Rule,
  payload: PatientOrderShippedPayload,
): Promise<RuleDispatchResult> {
  if (rule.action.kind !== 'notify') {
    throw new Error(
      `executeOrderShippedRule: rule ${rule.rule_id} has action.kind=${rule.action.kind}; ` +
        `commit-5-pattern dispatcher only fires 'notify' actions. Other kinds require approved ` +
        `orchestrator boundary per ADR Section 7.6 extension procedure.`,
    )
  }

  const template = findTemplateByKey(rule.template_key ?? '')
  if (!template) {
    throw new Error(
      `executeOrderShippedRule: rule ${rule.rule_id} references template_key=${rule.template_key} ` +
        `which is not in TEMPLATE_REGISTRY.`,
    )
  }

  // ---------------------------------------------------------------
  // READ-only patient + brand resolution per ADR Section 7.6 allowed-MAY.
  // ---------------------------------------------------------------

  const { data: patientRow, error: patientError } = await supabase
    .from('patients')
    .select('id, org_id, first_name, email, phone')
    .eq('id', payload.patient_id)
    .single()
  if (patientError || !patientRow) {
    throw new Error(
      `executeOrderShippedRule: patient lookup failed for ${payload.patient_id}: ${patientError?.message ?? 'not found'}`,
    )
  }
  const patient = patientRow as {
    id: string
    org_id: string
    first_name: string | null
    email: string | null
    phone: string | null
  }

  const { data: brandRow, error: brandError } = await supabase
    .from('brands')
    .select('id, org_id, slug, display_name, status')
    .eq('org_id', patient.org_id)
    .eq('status', 'active')
    .limit(1)
    .maybeSingle()
  if (brandError) {
    throw new Error(
      `executeOrderShippedRule: brand lookup failed for org_id=${patient.org_id}: ${brandError.message}`,
    )
  }
  const brand = brandRow as { id: string; slug: string; display_name: string } | null

  if (!brand) {
    throw new Error(
      `executeOrderShippedRule: no active brand for org_id=${patient.org_id}. ` +
        `Multi-tenant brand sourcing is required per ADR Section 7.5.`,
    )
  }

  // ---------------------------------------------------------------
  // Render the typed Template into channel-specific output.
  // ---------------------------------------------------------------

  const dashboardUrl = `${getAppBaseUrl().replace(/\/$/, '')}/dashboard/${patient.id}`
  const renderInputs: OrderShippedRenderInputs = {
    brand_short_label: brand.slug.toUpperCase(),
    dashboard_url: dashboardUrl,
    patient_first_name: patient.first_name,
  }
  const rendered = {
    email: renderOrderShippedEmail(renderInputs),
    sms: renderOrderShippedSms(renderInputs),
  }

  // Resolve pathway sensitivity once per firing. order_shipped is
  // unscoped today (the producer-site filter at lib/internal/
  // patient-case/impl.ts gates to glp1_primary; the Rule layer does
  // not double-filter), so both fields resolve to undefined.
  // pathway_sensitivity null is correct for tier_2 — the disclosure-
  // policy clamp does not read it for tier_2.
  const resolvedPathway = resolvePathwayForRule(rule)

  // ---------------------------------------------------------------
  // Approved action #1 — enqueue outbound_jobs rows.
  // Per-transition idempotency keyed on shipping_audit_event_id
  // (a treatment_item bouncing approved -> rx_sent -> shipped ->
  // rx_sent -> shipped fires one notification per genuine re-shipment).
  // ---------------------------------------------------------------

  const enqueuedIds: string[] = []

  if (patient.email && rule.action.channels.includes('email')) {
    const emailResult = await enqueueOutboundJob({
      kind: 'send_email',
      channel: 'email',
      patient_id: patient.id,
      idempotency_key: `rule.order_shipped:${payload.shipping_audit_event_id}:email`,
      external_system_name: payload.order_kind,
      external_system_id: payload.order_id,
      // external_inbound_event_id intentionally omitted (one inbound
      // shipping transition produces 2 outbound rows; per-row dedupe
      // is via idempotency_key, same pattern as prior c1-c3 migrations).
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to: patient.email,
        rendered_email: rendered.email,
      },
      metadata: {
        gate_call_site: 'rule_engine',
        order_kind: payload.order_kind,
        order_id: payload.order_id,
      },
    })
    enqueuedIds.push(emailResult.outbound_job_id)
  }

  if (patient.phone && rule.action.channels.includes('sms')) {
    const smsResult = await enqueueOutboundJob({
      kind: 'send_sms',
      channel: 'sms',
      patient_id: patient.id,
      idempotency_key: `rule.order_shipped:${payload.shipping_audit_event_id}:sms`,
      external_system_name: payload.order_kind,
      external_system_id: payload.order_id,
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to_phone: patient.phone,
        rendered_sms: rendered.sms,
      },
      metadata: {
        gate_call_site: 'rule_engine',
        order_kind: payload.order_kind,
        order_id: payload.order_id,
      },
    })
    enqueuedIds.push(smsResult.outbound_job_id)
  }

  // ---------------------------------------------------------------
  // Approved action #2 — emit rule.fired.* audit event.
  // ---------------------------------------------------------------

  const auditResult = await insertAuditEvent(
    {
      action: rule.audit_event_type,
      resourceType: 'rule',
      resourceId: rule.rule_id,
      patientId: patient.id,
      actorKind: 'system',
      orgId: patient.org_id,
      metadata: {
        rule_version: rule.rule_version,
        template_key: template.template_key,
        template_version: template.template_version,
        intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
        message_intent: rule.action.message_intent,
        decision_outcome_reason: 'rule_matched',
        trigger_event_type: 'patient.order_shipped' satisfies RuleTriggerEventType,
        order_kind: payload.order_kind,
        order_id: payload.order_id,
        shipping_audit_event_id: payload.shipping_audit_event_id,
        enqueued_outbound_job_ids: enqueuedIds,
      },
    },
    supabase,
  )

  if (!auditResult.ok) {
    throw new Error(
      `executeOrderShippedRule: insertAuditEvent failed for ${rule.audit_event_type}: ${auditResult.error}`,
    )
  }

  return {
    matched: true,
    rule_id: rule.rule_id,
    rule_version: rule.rule_version,
    enqueued_outbound_job_ids: enqueuedIds,
    audit_event_id: auditResult.audit_event_id ?? '',
  }
}

// =====================================================================
// Per-rule executor: active_care
//
// Phase 4H-templates-discipline commit 5 — sixth hardcoded executor
// branch. Per ChatGPT pre-execution constraint #1 (binding): NO
// dispatcher generalization. The branch sits alongside the existing
// five; the runtime stays as side-effect-bounded as it is today.
//
// Third clinical_decision domain executor (siblings:
// executeCaseApprovedRule, executeAwaitingClinicalReviewRule). Same
// shape as executeAwaitingClinicalReviewRule:
//   - rule.audit_event_type = 'rule.fired.clinical_decision.active_care_v1'
//   - rule.action.message_intent = 'operational'
//   - rule.authority_floor = 'system' (status ack, NOT provider authority)
//   - rule.recall_severity = 'operational'
//   - tier_1 existence_only
//
// Idempotency: per-transition, keyed on activation_audit_event_id
// (mirrors approval/transition pattern from prior c2/c3/c4 migrations).
// =====================================================================

async function executeActiveCareRule(
  supabase: SupabaseClient,
  rule: Rule,
  payload: PatientCaseActivePayload,
): Promise<RuleDispatchResult> {
  if (rule.action.kind !== 'notify') {
    throw new Error(
      `executeActiveCareRule: rule ${rule.rule_id} has action.kind=${rule.action.kind}; ` +
        `commit-5-pattern dispatcher only fires 'notify' actions. Other kinds require approved ` +
        `orchestrator boundary per ADR Section 7.6 extension procedure.`,
    )
  }

  const template = findTemplateByKey(rule.template_key ?? '')
  if (!template) {
    throw new Error(
      `executeActiveCareRule: rule ${rule.rule_id} references template_key=${rule.template_key} ` +
        `which is not in TEMPLATE_REGISTRY.`,
    )
  }

  // ---------------------------------------------------------------
  // READ-only patient + brand resolution per ADR Section 7.6 allowed-MAY.
  // ---------------------------------------------------------------

  const { data: patientRow, error: patientError } = await supabase
    .from('patients')
    .select('id, org_id, first_name, email, phone')
    .eq('id', payload.patient_id)
    .single()
  if (patientError || !patientRow) {
    throw new Error(
      `executeActiveCareRule: patient lookup failed for ${payload.patient_id}: ${patientError?.message ?? 'not found'}`,
    )
  }
  const patient = patientRow as {
    id: string
    org_id: string
    first_name: string | null
    email: string | null
    phone: string | null
  }

  const { data: brandRow, error: brandError } = await supabase
    .from('brands')
    .select('id, org_id, slug, display_name, status')
    .eq('org_id', patient.org_id)
    .eq('status', 'active')
    .limit(1)
    .maybeSingle()
  if (brandError) {
    throw new Error(
      `executeActiveCareRule: brand lookup failed for org_id=${patient.org_id}: ${brandError.message}`,
    )
  }
  const brand = brandRow as { id: string; slug: string; display_name: string } | null

  if (!brand) {
    throw new Error(
      `executeActiveCareRule: no active brand for org_id=${patient.org_id}. ` +
        `Multi-tenant brand sourcing is required per ADR Section 7.5.`,
    )
  }

  // ---------------------------------------------------------------
  // Render the typed Template into channel-specific output.
  // ---------------------------------------------------------------

  const dashboardUrl = `${getAppBaseUrl().replace(/\/$/, '')}/dashboard/${patient.id}`
  const renderInputs: ActiveCareRenderInputs = {
    brand_short_label: brand.slug.toUpperCase(),
    dashboard_url: dashboardUrl,
    patient_first_name: patient.first_name,
  }
  const rendered = {
    email: renderActiveCareEmail(renderInputs),
    sms: renderActiveCareSms(renderInputs),
  }

  // Resolve pathway sensitivity once per firing. active_care is
  // unscoped today (the producer-site filters at lib/internal/
  // patient-case/impl.ts gate to glp1_primary / weight_loss; the Rule
  // layer does not double-filter), so both fields resolve to undefined.
  // pathway_sensitivity null is correct for tier_1 — the disclosure-
  // policy clamp does not read it.
  const resolvedPathway = resolvePathwayForRule(rule)

  // ---------------------------------------------------------------
  // Approved action #1 — enqueue outbound_jobs rows.
  // Per-transition idempotency keyed on activation_audit_event_id.
  // ---------------------------------------------------------------

  const enqueuedIds: string[] = []

  if (patient.email && rule.action.channels.includes('email')) {
    const emailResult = await enqueueOutboundJob({
      kind: 'send_email',
      channel: 'email',
      patient_id: patient.id,
      idempotency_key: `rule.active_care:${payload.activation_audit_event_id}:email`,
      external_system_name: payload.case_kind,
      external_system_id: payload.case_id,
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to: patient.email,
        rendered_email: rendered.email,
      },
      metadata: {
        gate_call_site: 'rule_engine',
        case_kind: payload.case_kind,
        case_id: payload.case_id,
      },
    })
    enqueuedIds.push(emailResult.outbound_job_id)
  }

  if (patient.phone && rule.action.channels.includes('sms')) {
    const smsResult = await enqueueOutboundJob({
      kind: 'send_sms',
      channel: 'sms',
      patient_id: patient.id,
      idempotency_key: `rule.active_care:${payload.activation_audit_event_id}:sms`,
      external_system_name: payload.case_kind,
      external_system_id: payload.case_id,
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to_phone: patient.phone,
        rendered_sms: rendered.sms,
      },
      metadata: {
        gate_call_site: 'rule_engine',
        case_kind: payload.case_kind,
        case_id: payload.case_id,
      },
    })
    enqueuedIds.push(smsResult.outbound_job_id)
  }

  // ---------------------------------------------------------------
  // Approved action #2 — emit rule.fired.* audit event.
  // ---------------------------------------------------------------

  const auditResult = await insertAuditEvent(
    {
      action: rule.audit_event_type,
      resourceType: 'rule',
      resourceId: rule.rule_id,
      patientId: patient.id,
      actorKind: 'system',
      orgId: patient.org_id,
      metadata: {
        rule_version: rule.rule_version,
        template_key: template.template_key,
        template_version: template.template_version,
        intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
        message_intent: rule.action.message_intent,
        decision_outcome_reason: 'rule_matched',
        trigger_event_type: 'patient.case_active' satisfies RuleTriggerEventType,
        case_kind: payload.case_kind,
        case_id: payload.case_id,
        activation_audit_event_id: payload.activation_audit_event_id,
        enqueued_outbound_job_ids: enqueuedIds,
      },
    },
    supabase,
  )

  if (!auditResult.ok) {
    throw new Error(
      `executeActiveCareRule: insertAuditEvent failed for ${rule.audit_event_type}: ${auditResult.error}`,
    )
  }

  return {
    matched: true,
    rule_id: rule.rule_id,
    rule_version: rule.rule_version,
    enqueued_outbound_job_ids: enqueuedIds,
    audit_event_id: auditResult.audit_event_id ?? '',
  }
}

// =====================================================================
// Per-rule executor: followup_due
//
// Phase 4H-templates-discipline commit 6 — seventh hardcoded executor
// branch. Per ChatGPT pre-execution constraint #1 (binding): NO
// dispatcher generalization. The branch sits alongside the existing
// six; the runtime stays as side-effect-bounded as it is today.
//
// Fourth clinical_decision domain executor (siblings:
// executeCaseApprovedRule, executeAwaitingClinicalReviewRule,
// executeActiveCareRule). Same shape as
// executeAwaitingClinicalReviewRule + executeActiveCareRule:
//   - rule.audit_event_type = 'rule.fired.clinical_decision.followup_due_v1'
//   - rule.action.message_intent = 'operational'
//   - rule.authority_floor = 'system'
//   - rule.recall_severity = 'operational'
//   - tier_1 existence_only
//
// FUTURE NOTE (per ChatGPT review during c6 approval):
// producer-site dispatch accumulation is approaching the point where
// extraction may become beneficial. Around 10-15 rules the producer-
// site pattern at lib/internal/patient-case/impl.ts will likely
// feel visually noisy and harder to reason about. Aligns with v1
// pressure-test radar zone 7 (Runtime complexity / orchestration
// sprawl) + ADR section 7.7 deferred-until-rule-count-grows
// guidance. NOT a c6 blocker; flagged for future-us.
//
// Idempotency: per-transition, keyed on transition_audit_event_id.
// =====================================================================

async function executeFollowupDueRule(
  supabase: SupabaseClient,
  rule: Rule,
  payload: PatientCaseFollowupDuePayload,
): Promise<RuleDispatchResult> {
  if (rule.action.kind !== 'notify') {
    throw new Error(
      `executeFollowupDueRule: rule ${rule.rule_id} has action.kind=${rule.action.kind}; ` +
        `commit-5-pattern dispatcher only fires 'notify' actions. Other kinds require approved ` +
        `orchestrator boundary per ADR Section 7.6 extension procedure.`,
    )
  }

  const template = findTemplateByKey(rule.template_key ?? '')
  if (!template) {
    throw new Error(
      `executeFollowupDueRule: rule ${rule.rule_id} references template_key=${rule.template_key} ` +
        `which is not in TEMPLATE_REGISTRY.`,
    )
  }

  // ---------------------------------------------------------------
  // READ-only patient + brand resolution per ADR Section 7.6 allowed-MAY.
  // ---------------------------------------------------------------

  const { data: patientRow, error: patientError } = await supabase
    .from('patients')
    .select('id, org_id, first_name, email, phone')
    .eq('id', payload.patient_id)
    .single()
  if (patientError || !patientRow) {
    throw new Error(
      `executeFollowupDueRule: patient lookup failed for ${payload.patient_id}: ${patientError?.message ?? 'not found'}`,
    )
  }
  const patient = patientRow as {
    id: string
    org_id: string
    first_name: string | null
    email: string | null
    phone: string | null
  }

  const { data: brandRow, error: brandError } = await supabase
    .from('brands')
    .select('id, org_id, slug, display_name, status')
    .eq('org_id', patient.org_id)
    .eq('status', 'active')
    .limit(1)
    .maybeSingle()
  if (brandError) {
    throw new Error(
      `executeFollowupDueRule: brand lookup failed for org_id=${patient.org_id}: ${brandError.message}`,
    )
  }
  const brand = brandRow as { id: string; slug: string; display_name: string } | null

  if (!brand) {
    throw new Error(
      `executeFollowupDueRule: no active brand for org_id=${patient.org_id}. ` +
        `Multi-tenant brand sourcing is required per ADR Section 7.5.`,
    )
  }

  // ---------------------------------------------------------------
  // Render the typed Template into channel-specific output.
  // ---------------------------------------------------------------

  const dashboardUrl = `${getAppBaseUrl().replace(/\/$/, '')}/dashboard/${patient.id}`
  const renderInputs: FollowupDueRenderInputs = {
    brand_short_label: brand.slug.toUpperCase(),
    dashboard_url: dashboardUrl,
    patient_first_name: patient.first_name,
  }
  const rendered = {
    email: renderFollowupDueEmail(renderInputs),
    sms: renderFollowupDueSms(renderInputs),
  }

  // Resolve pathway sensitivity once per firing. followup_due is
  // unscoped today (the producer-site filter at lib/internal/
  // patient-case/impl.ts gates to glp1_primary; the Rule layer
  // does not double-filter), so both fields resolve to undefined.
  // pathway_sensitivity null is correct for tier_1.
  const resolvedPathway = resolvePathwayForRule(rule)

  // ---------------------------------------------------------------
  // Approved action #1 — enqueue outbound_jobs rows.
  // Per-transition idempotency keyed on transition_audit_event_id.
  // ---------------------------------------------------------------

  const enqueuedIds: string[] = []

  if (patient.email && rule.action.channels.includes('email')) {
    const emailResult = await enqueueOutboundJob({
      kind: 'send_email',
      channel: 'email',
      patient_id: patient.id,
      idempotency_key: `rule.followup_due:${payload.transition_audit_event_id}:email`,
      external_system_name: payload.case_kind,
      external_system_id: payload.case_id,
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to: patient.email,
        rendered_email: rendered.email,
      },
      metadata: {
        gate_call_site: 'rule_engine',
        case_kind: payload.case_kind,
        case_id: payload.case_id,
      },
    })
    enqueuedIds.push(emailResult.outbound_job_id)
  }

  if (patient.phone && rule.action.channels.includes('sms')) {
    const smsResult = await enqueueOutboundJob({
      kind: 'send_sms',
      channel: 'sms',
      patient_id: patient.id,
      idempotency_key: `rule.followup_due:${payload.transition_audit_event_id}:sms`,
      external_system_name: payload.case_kind,
      external_system_id: payload.case_id,
      rule_id: rule.rule_id,
      rule_version: rule.rule_version,
      template_key: template.template_key,
      template_version: template.template_version,
      pathway_code: resolvedPathway.pathway_code,
      pathway_sensitivity: resolvedPathway.pathway_sensitivity,
      message_intent: rule.action.message_intent,
      declared_privacy_exposure_level: template.privacy_exposure_level,
      intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: rule.rule_id,
      queued_by_kind: 'rule_engine',
      payload: {
        template_key: template.template_key,
        template_version: template.template_version,
        to_phone: patient.phone,
        rendered_sms: rendered.sms,
      },
      metadata: {
        gate_call_site: 'rule_engine',
        case_kind: payload.case_kind,
        case_id: payload.case_id,
      },
    })
    enqueuedIds.push(smsResult.outbound_job_id)
  }

  // ---------------------------------------------------------------
  // Approved action #2 — emit rule.fired.* audit event.
  // ---------------------------------------------------------------

  const auditResult = await insertAuditEvent(
    {
      action: rule.audit_event_type,
      resourceType: 'rule',
      resourceId: rule.rule_id,
      patientId: patient.id,
      actorKind: 'system',
      orgId: patient.org_id,
      metadata: {
        rule_version: rule.rule_version,
        template_key: template.template_key,
        template_version: template.template_version,
        intended_privacy_exposure_level: rule.action.intended_privacy_exposure_level,
        message_intent: rule.action.message_intent,
        decision_outcome_reason: 'rule_matched',
        trigger_event_type: 'patient.case_followup_due' satisfies RuleTriggerEventType,
        case_kind: payload.case_kind,
        case_id: payload.case_id,
        transition_audit_event_id: payload.transition_audit_event_id,
        enqueued_outbound_job_ids: enqueuedIds,
      },
    },
    supabase,
  )

  if (!auditResult.ok) {
    throw new Error(
      `executeFollowupDueRule: insertAuditEvent failed for ${rule.audit_event_type}: ${auditResult.error}`,
    )
  }

  return {
    matched: true,
    rule_id: rule.rule_id,
    rule_version: rule.rule_version,
    enqueued_outbound_job_ids: enqueuedIds,
    audit_event_id: auditResult.audit_event_id ?? '',
  }
}
