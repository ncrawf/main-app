import { createAdminClient } from '@/lib/supabase/admin'
import { logAuditEvent } from '@/lib/audit/logAuditEvent'
import type { StaffProfile } from '@/lib/staff/getStaffProfile'

/**
 * Capability layer (Phase 0k / Layer 1D, Model C).
 *
 * Authoritative gate for sensitive server actions. Replaces ad-hoc role
 * string comparisons. Every call writes to `audit_events`; patient-scoped
 * calls additionally write to `patient_timeline_events` (D4).
 *
 * Usage:
 *   const check = await requireCapability(user, staff, 'can_prescribe', {
 *     objectType: 'treatment_order',
 *     objectId: orderNumber,
 *     patientId,
 *     workspace: 'provider',
 *   })
 *   if (!check.ok) return NextResponse.json({ error: check.error }, { status: check.status })
 *
 * Decision anchors:
 *   D2 - app-layer first; RLS stays coarse (is_staff_user / is_staff_admin)
 *   D4 - every call writes audit_events
 *   D6 - role -> capability mapping consolidates existing helpers
 *   D7 - reasonCode enum is ready for Phase 0m enforcement
 */

// ---------- Types ----------

/**
 * Canonical capability set (Layer 1D starter). Additive; extend here only.
 */
export type Capability =
  // Clinical
  | 'can_prescribe'
  | 'can_sign_clinical_visit'
  | 'can_publish_lab_result'
  | 'can_view_clinical_history'
  | 'can_use_chart_ai_review'
  /** Any non–pharmacy-ops role: case/timeline/assignment/refill actions (replaces negative pharmacy-only check). */
  | 'can_collaborate_patient_case'
  /** Prescriber or admin override: signed treatment rows, visits, lab orders, Rx PDFs (replaces canProviderSign). */
  | 'can_clinical_treatment_authoring'
  // Operational
  | 'can_edit_tracking'
  | 'can_advance_fulfillment'
  | 'can_refund'
  | 'can_resolve_support_request'
  | 'can_send_nonclinical_message'
  // Governance / admin
  | 'can_manage_staff'
  | 'can_manage_catalog'
  | 'can_view_audit_log'
  | 'can_impersonate_patient'
  | 'can_manage_system_settings'

/**
 * Staff role enum matching the `staff_profiles.role` check constraint
 * (20260419210000_staff_audit_rls.sql).
 */
export type StaffRole =
  | 'clinical_reviewer'
  | 'prescriber'
  | 'pharmacy_ops'
  | 'customer_support'
  | 'billing'
  | 'compliance_auditor'
  | 'ops_admin'
  | 'super_admin'

/**
 * Workspace that issued the call. Used for audit segmentation; does not
 * change enforcement (capabilities do).
 */
export type Workspace = 'provider' | 'staff' | 'admin' | 'system'

/**
 * Reason-code enum (Phase 0m). For Phase 0k the field is accepted but not
 * yet required on any code path. Phase 0m will enforce presence on
 * sensitive reads / overrides / impersonation.
 */
export type SensitiveAccessReason =
  | 'routine_clinical_review'
  | 'break_glass_emergency'
  | 'patient_requested'
  | 'compliance_audit'
  | 'cross_state_coverage'
  | 'training'

export type RequireCapabilityOptions = {
  /** Target object type (e.g., 'treatment_order', 'clinical_visit'). */
  objectType?: string
  /** Target object id — any external identifier (uuid or order_number). */
  objectId?: string | null
  /** Patient id — when set, a patient_timeline_events row is also written. */
  patientId?: string | null
  /** Reason code (optional today; required for 0m-gated surfaces). */
  reasonCode?: SensitiveAccessReason
  /** Arbitrary metadata merged into audit_events.metadata. */
  extraMetadata?: Record<string, unknown>
  /** Workspace segmenting the audit record. */
  workspace?: Workspace
}

export type RequireCapabilityResult =
  | { ok: true }
  | { ok: false; status: 401 | 403; error: string }

// ---------- Role -> capability mapping (Section 1D defaults) ----------

const ROLE_CAPABILITIES: Record<StaffRole, ReadonlySet<Capability>> = {
  prescriber: new Set<Capability>([
    'can_prescribe',
    'can_sign_clinical_visit',
    'can_publish_lab_result',
    'can_view_clinical_history',
    'can_use_chart_ai_review',
    'can_collaborate_patient_case',
    'can_clinical_treatment_authoring',
    'can_send_nonclinical_message',
  ]),
  clinical_reviewer: new Set<Capability>([
    'can_sign_clinical_visit',
    'can_publish_lab_result',
    'can_view_clinical_history',
    'can_use_chart_ai_review',
    'can_collaborate_patient_case',
    'can_send_nonclinical_message',
  ]),
  pharmacy_ops: new Set<Capability>([
    'can_edit_tracking',
    'can_advance_fulfillment',
    'can_view_clinical_history',
  ]),
  customer_support: new Set<Capability>([
    'can_resolve_support_request',
    'can_send_nonclinical_message',
    'can_view_clinical_history',
    'can_collaborate_patient_case',
  ]),
  billing: new Set<Capability>([
    'can_refund',
    'can_view_clinical_history',
    'can_collaborate_patient_case',
  ]),
  compliance_auditor: new Set<Capability>([
    'can_view_audit_log',
    'can_view_clinical_history',
    'can_collaborate_patient_case',
  ]),
  ops_admin: new Set<Capability>([
    'can_edit_tracking',
    'can_advance_fulfillment',
    'can_refund',
    'can_resolve_support_request',
    'can_send_nonclinical_message',
    'can_view_clinical_history',
    'can_collaborate_patient_case',
    'can_clinical_treatment_authoring',
    'can_manage_staff',
    'can_manage_catalog',
    'can_view_audit_log',
    'can_impersonate_patient',
    'can_manage_system_settings',
  ]),
  super_admin: new Set<Capability>([
    'can_prescribe',
    'can_sign_clinical_visit',
    'can_publish_lab_result',
    'can_view_clinical_history',
    'can_use_chart_ai_review',
    'can_collaborate_patient_case',
    'can_clinical_treatment_authoring',
    'can_edit_tracking',
    'can_advance_fulfillment',
    'can_refund',
    'can_resolve_support_request',
    'can_send_nonclinical_message',
    'can_manage_staff',
    'can_manage_catalog',
    'can_view_audit_log',
    'can_impersonate_patient',
    'can_manage_system_settings',
  ]),
}

const KNOWN_ROLES: ReadonlySet<string> = new Set(Object.keys(ROLE_CAPABILITIES))

// ---------- Predicates ----------

export function isKnownStaffRole(role: string): role is StaffRole {
  return KNOWN_ROLES.has(role)
}

/**
 * Full capability set for a role. Unknown roles receive an empty set
 * (deny-by-default).
 */
export function capabilitiesForRole(role: string): ReadonlySet<Capability> {
  if (isKnownStaffRole(role)) return ROLE_CAPABILITIES[role]
  return new Set<Capability>()
}

/**
 * Synchronous predicate — safe for conditional rendering and early returns.
 * Does NOT write audit. Use `requireCapability` for mutations.
 */
export function hasCapability(
  profile: Pick<StaffProfile, 'role'> | null | undefined,
  capability: Capability
): boolean {
  if (!profile) return false
  return capabilitiesForRole(profile.role).has(capability)
}

// ---------- requireCapability ----------

type MinimalUser = { id: string }
type MinimalProfile = Pick<StaffProfile, 'id' | 'role'>

/**
 * Authoritative capability gate for mutations. Writes audit_events on every
 * invocation (grants and denials). When patientId is set, additionally
 * writes a `staff_capability_exercised` row to patient_timeline_events so
 * the audit trail is visible on the patient timeline.
 *
 * NOTE: the audit write path uses the service-role admin client so the
 * write is trusted; callers must verify the session before calling this.
 */
export async function requireCapability(
  user: MinimalUser | null | undefined,
  profile: MinimalProfile | null | undefined,
  capability: Capability,
  options: RequireCapabilityOptions = {}
): Promise<RequireCapabilityResult> {
  if (!user) {
    return { ok: false, status: 401, error: 'Not signed in.' }
  }

  if (!profile) {
    await emitCapabilityAudit({
      user,
      capability,
      decision: 'denied',
      denialReason: 'no_staff_profile',
      role: null,
      options,
    })
    return { ok: false, status: 403, error: 'Staff access required.' }
  }

  if (!hasCapability(profile, capability)) {
    await emitCapabilityAudit({
      user,
      capability,
      decision: 'denied',
      denialReason: 'missing_capability',
      role: profile.role,
      options,
    })
    return {
      ok: false,
      status: 403,
      error: `Missing capability: ${capability}.`,
    }
  }

  await emitCapabilityAudit({
    user,
    capability,
    decision: 'exercised',
    denialReason: null,
    role: profile.role,
    options,
  })

  return { ok: true }
}

// ---------- Audit emission (internal) ----------

type CapabilityAuditArgs = {
  user: MinimalUser
  capability: Capability
  decision: 'exercised' | 'denied'
  denialReason: 'no_staff_profile' | 'missing_capability' | null
  role: string | null
  options: RequireCapabilityOptions
}

async function emitCapabilityAudit(args: CapabilityAuditArgs): Promise<void> {
  const { user, capability, decision, denialReason, role, options } = args
  const workspace: Workspace = options.workspace ?? 'staff'

  const metadata: Record<string, unknown> = {
    capability,
    role,
    workspace,
    reason_code: options.reasonCode ?? null,
    ...(denialReason ? { denial_reason: denialReason } : {}),
    ...options.extraMetadata,
  }

  const action = decision === 'exercised' ? 'capability.exercised' : 'capability.denied'

  await logAuditEvent({
    actorUserId: user.id,
    action,
    resourceType: options.objectType ?? 'capability',
    resourceId: options.objectId ?? null,
    patientId: options.patientId ?? null,
    metadata,
  })

  // Patient-scoped exercises also land on the patient timeline so care
  // history reviews see the full audit trail without needing audit_events
  // access. Denials are NOT written to the timeline to avoid leaking
  // privileged-action attempts into patient-visible surfaces.
  //
  // TODO(phase-0a): promote these two writes into a single transaction via
  // a SECURITY DEFINER stored procedure once the D5 write-path convention
  // lands. Today they're sequential best-effort and non-blocking.
  if (decision === 'exercised' && options.patientId) {
    try {
      const supabase = createAdminClient()
      const { error } = await supabase.from('patient_timeline_events').insert({
        patient_id: options.patientId,
        event_type: 'staff_capability_exercised',
        body: `Staff exercised capability ${capability}${options.objectType ? ` on ${options.objectType}` : ''}.`,
        actor_user_id: user.id,
        payload: {
          capability,
          role,
          workspace,
          object_type: options.objectType ?? null,
          object_id: options.objectId ?? null,
          reason_code: options.reasonCode ?? null,
          ...options.extraMetadata,
        },
      })
      if (error) {
        console.error('capability timeline insert failed', error)
      }
    } catch (err) {
      console.error('capability timeline insert threw', err)
    }
  }
}
