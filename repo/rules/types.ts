/**
 * Phase 4H-pre commit 3 — Rule object shape (TypeScript discriminated union).
 *
 * Verbatim transcription of system map Section 1Q.4 (binding source of
 * truth). Supporting types are stubbed where they are not yet defined
 * elsewhere in the codebase; the stubs are marked `@stub-for-4H-runtime`
 * so the engineer wiring the runtime can replace them with full
 * definitions without touching the Rule interface itself.
 *
 * Why verbatim: the Rule shape is the binding contract between the
 * rules engine, the audit layer, the outbound dispatcher, and the
 * recall propagation runtime. Drift between this file and Section
 * 1Q.4 = drift between code and the system map. The CI lint at
 * scripts/lint-rules-templates-scaffold.ts asserts the shape stays
 * locked.
 *
 * For the architectural reasoning, see:
 *   - System map Section 1Q.4 (the canonical Rule shape).
 *   - System map Section 1Q.0 (the 12 invariants).
 *   - System map Section 1Q.12 (the implicit engine v0 inventory).
 *   - docs/architecture/phase_4h_target_first_decision_record.md.
 */

import type { MessageIntent, PathwaySensitivity } from '../../lib/outbound/types'
import type { AuditAction } from '../../lib/events/audit-actions'

// =====================================================================
// Re-exports of types defined elsewhere
// =====================================================================

export type { MessageIntent, PathwaySensitivity }
/**
 * AuditEventType: the typed audit action vocabulary. Every rule firing
 * emits one audit_events row whose `action` is drawn from this typed
 * catalog. Per Section 1Q.7 + Phase 4F LANDED.
 */
export type AuditEventType = AuditAction

// =====================================================================
// Stub types for 4H-rules-runtime
// =====================================================================
// Each stub is `string` today and will become a typed enum / union /
// object in Phase 4H-rules-runtime. The Rule interface references them
// by name so the runtime swap-in is a single-file change.

/** @stub-for-4H-runtime — 13-value enum per Section 1Q.1. */
export type RuleDomain = string

/** @stub-for-4H-runtime — discriminated union over event_type per Section 1Q.4 trigger. */
export type RuleTrigger =
  | { kind: 'event'; event_type: string }
  | { kind: 'schedule'; cron: string }
  | { kind: 'mutation_attempt'; resource_type: string; mutation_kind: string }

/** @stub-for-4H-runtime — typed predicate over structured data; never free text. */
export type Predicate = {
  kind: string
  field?: string
  op?: string
  value?: unknown
  /** Free-text predicates are forbidden per Section 1Q.0 invariant 2. */
}

/** @stub-for-4H-runtime — typed pointer to a data source (assertion / observation / action_item / lab / payment). */
export type InputRef = {
  source: string
  field?: string
  /** When the source is queryable, the predicate filters it. */
  filter?: Predicate
}

/** @stub-for-4H-runtime — provider | ops | billing | support | compliance | system. */
export type AuthorityFloor =
  | 'provider'
  | 'ops'
  | 'billing'
  | 'support'
  | 'compliance'
  | 'system'

/** @stub-for-4H-runtime — capability code per Section 1D.1. */
export type CapabilityCode = string

/** @stub-for-4H-runtime — pathway code per Section 1K.2 (e.g., glp1, trt, female_hrt, peptides). */
export type PathwayCode = string

/** @stub-for-4H-runtime — jurisdiction code (state / country) per Section 1J.4 + 1G.4.1. */
export type JurisdictionCode = string

/** @stub-for-4H-runtime — escalation owner role per Section 1G.5. */
export type EscalationOwnerRole = string

/** @stub-for-4H-runtime — typed evidence reference spec (e.g., must cite intake_response_id when explaining a denial). */
export type EvidenceRefSpec = {
  source_kind: string
  required: boolean
}

/** @stub-for-4H-runtime — typed test fixture reference (sandbox test cases per Section 1Q.4). */
export type TestFixtureRef = {
  fixture_id: string
}

/** @stub-for-4H-runtime — channel set per Section 1Q.5 Template; reused on RuleAction.notify. */
export type Channel =
  | 'sms'
  | 'email'
  | 'in_app'
  | 'push'
  | 'print'
  | 'phone_script'

/** @stub-for-4H-runtime — typed action option for decision_support_payload (no free-text labels). */
export type TypedActionOption = {
  option_kind: string
  option_rationale: string // REQUIRED min 50 chars per Section 1Q.4 lint
  option_evidence_refs?: string[]
  option_default?: boolean
}

/** @stub-for-4H-runtime — decision support payload for kind='route' actions. */
export type DecisionSupportPayload = {
  suggested_options: TypedActionOption[]
  rationale_summary: string // REQUIRED min 80 chars
  evidence_summary: string // REQUIRED min 80 chars + cites >= 1 evidence_refs[] entry
}

/** @stub-for-4H-runtime — typed key for a Template per repo/templates/types.ts. */
export type TemplateKey = string

/** @stub-for-4H-runtime — send-policy class consumed by 1G.3 dispatch gate. */
export type SendPolicyClass = string

/** @stub-for-4H-runtime — recall severity per Section 1Q.10. */
export type RecallSeverity =
  | 'safety_critical'
  | 'clinical_significant'
  | 'operational'
  | 'cosmetic'

// =====================================================================
// RuleAction discriminated union (Section 1Q.4 binding)
// =====================================================================

export type RuleAction =
  | {
      kind: 'block'
      reason_code: string
      override_capability_required?: CapabilityCode
    }
  | {
      kind: 'clarify'
      module_ids: string[]
      follow_up_kind: string
      // Action-level enforcement per Section 1Q.4:
      intended_privacy_exposure_level: 0 | 1 | 2 | 3 | 4 | 5
      message_intent: MessageIntent
    }
  | {
      kind: 'route'
      queue_role: string
      priority_hint: 'urgent_clinical' | 'urgent_ops' | 'standard' | 'low'
      decision_support_payload?: DecisionSupportPayload
    }
  | {
      kind: 'notify'
      channels: Channel[]
      send_policy_class: SendPolicyClass
      // Action-level enforcement per Section 1Q.4:
      intended_privacy_exposure_level: 0 | 1 | 2 | 3 | 4 | 5
      message_intent: MessageIntent
    }
  | {
      kind: 'escalate'
      escalation_owner_role: EscalationOwnerRole
      sla_minutes: number
      // Action-level enforcement per Section 1Q.4:
      intended_privacy_exposure_level: 0 | 1 | 2 | 3 | 4 | 5
      message_intent: MessageIntent
    }
  | {
      kind: 'gate'
      allow_when_resolved: boolean
      override_capability_required?: CapabilityCode
    }

// =====================================================================
// Rule interface (Section 1Q.4 verbatim)
// =====================================================================

/**
 * Per system map Section 1Q.4. Every Rule MUST satisfy this shape.
 * No partial Rules. CI lint at PR time enforces.
 */
export interface Rule {
  /** Stable; e.g., 'rule.glp1.refill_approve.pregnancy_status_freshness_v3'. */
  rule_id: string
  /** Pinned at every firing; format TBD when 4H-rules-runtime ships. */
  rule_version: string
  /** 13-value enum per Section 1Q.1. */
  domain: RuleDomain
  /** Event-driven discriminated union over event_type. */
  trigger: RuleTrigger
  /**
   * Structured-data predicates only; NEVER free-text; CI lint enforces
   * typed-field references.
   */
  preconditions: Predicate[]
  /**
   * Typed pointers to data sources (assertions, observations, action
   * items, lab results, payment events).
   */
  required_inputs: InputRef[]
  /**
   * Optional. Who must own the resulting action: provider | ops |
   * billing | support | compliance | system.
   */
  authority_floor?: AuthorityFloor
  /** Discriminated union per `RuleAction` above. */
  action: RuleAction
  priority: 'urgent_clinical' | 'urgent_ops' | 'standard' | 'low'
  /**
   * NEW per Section 1Q.23 Inv 5; default false. When true, rule MAY
   * tune action's UX/timing per `interaction_context.mode` — but
   * decision logic + authority floor + decision_support_payload content
   * MUST remain identical regardless of mode.
   */
  interaction_context_aware?: boolean
  /** True = mutation halts; false = side effect / signal only. */
  blocking: boolean
  /** When action emits a patient-facing or staff-facing message. */
  template_key?: TemplateKey
  escalation_owner_role?: EscalationOwnerRole
  /** Declares what evidence the rule firing must cite. */
  evidence_refs_required: EvidenceRefSpec[]
  /**
   * Typed event_type emitted on firing (e.g.,
   * 'rule.fired.refill_approve.pregnancy_status_freshness'). Must be
   * a value in lib/events/audit-actions.ts AuditAction.
   */
  audit_event_type: AuditEventType
  /** Null = all pathways; explicit list = scoped. */
  pathway_scope?: PathwayCode[]
  /** Null = all jurisdictions. */
  jurisdiction_scope?: JurisdictionCode[]
  status: 'draft' | 'active' | 'deprecated' | 'retired'
  effective_at: string // ISO 8601
  retired_at?: string
  /** Sandbox test cases; clinical_safety = 5+; ops = 2+. */
  test_fixtures: TestFixtureRef[]
  /** Required; clinical/business intent. */
  rationale_note: string
  retiring_supersedes_rule_id?: string
  retiring_replaced_by_rule_id?: string
  /**
   * Section 1Q.10 recall severity classification. Drives recall
   * propagation behavior when this rule is superseded.
   */
  recall_severity?: RecallSeverity
}

// =====================================================================
// Type guard helpers (used by the runtime + CI lint)
// =====================================================================

/**
 * Returns true when the action emits an outbound communication and
 * therefore requires `intended_privacy_exposure_level` + `message_intent`.
 * Per Section 1Q.4 action-level enforcement.
 */
export function actionEmitsCommunication(action: RuleAction): boolean {
  return action.kind === 'notify' || action.kind === 'escalate' || action.kind === 'clarify'
}

/**
 * Extract `intended_privacy_exposure_level` from an action that
 * declares one. Returns undefined for non-communication actions.
 * Used by the action-template alignment check at CI lint + runtime.
 */
export function getActionIntendedPrivacyExposureLevel(
  action: RuleAction,
): 0 | 1 | 2 | 3 | 4 | 5 | undefined {
  if (
    action.kind === 'notify' ||
    action.kind === 'escalate' ||
    action.kind === 'clarify'
  ) {
    return action.intended_privacy_exposure_level
  }
  return undefined
}

/**
 * Extract `message_intent` from an action that declares one.
 * Returns undefined for non-communication actions.
 */
export function getActionMessageIntent(action: RuleAction): MessageIntent | undefined {
  if (
    action.kind === 'notify' ||
    action.kind === 'escalate' ||
    action.kind === 'clarify'
  ) {
    return action.message_intent
  }
  return undefined
}
