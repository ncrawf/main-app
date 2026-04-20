/** Mirrors check constraint in public.staff_profiles.role */
export const STAFF_ROLES = [
  'clinical_reviewer',
  'prescriber',
  'pharmacy_ops',
  'customer_support',
  'billing',
  'compliance_auditor',
  'ops_admin',
  'super_admin',
] as const

export type StaffRole = (typeof STAFF_ROLES)[number]
