import { createSupabaseServerClient } from '@/lib/supabase/server'
import { getStaffProfile } from '@/lib/staff/getStaffProfile'
import { CreateStaffAccountForm } from './CreateStaffAccountForm'

export const dynamic = 'force-dynamic'

function canManageStaff(role: string): boolean {
  return role === 'ops_admin' || role === 'super_admin'
}

type StaffRow = {
  id: string
  role: string
  display_name: string | null
  work_email: string | null
  phone_number: string | null
  credentials: string | null
  specialty: string | null
  npi: string | null
  created_at: string
}

export default async function InternalAccessPage() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return null
  }
  const profile = await getStaffProfile(supabase, user.id)
  if (!profile || !canManageStaff(profile.role)) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="text-lg font-semibold text-neutral-900">Access management</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Only ops admin or super admin can create provider/staff accounts.
        </p>
      </div>
    )
  }

  const { data } = await supabase
    .from('staff_profiles')
    .select('id, role, display_name, work_email, phone_number, credentials, specialty, npi, created_at')
    .order('created_at', { ascending: false })

  const rows = (data ?? []) as StaffRow[]

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <h1 className="text-lg font-semibold text-neutral-900">Access management</h1>
      <p className="mt-1 text-sm text-neutral-600">
        Create provider/staff accounts and maintain admin control over internal access.
      </p>

      <div className="mt-6">
        <CreateStaffAccountForm />
      </div>

      <section className="mt-6 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-neutral-900">Current staff directory</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[980px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-200 text-neutral-500">
                <th className="py-2 pr-3">Display</th>
                <th className="py-2 pr-3">Role</th>
                <th className="py-2 pr-3">Email</th>
                <th className="py-2 pr-3">Phone</th>
                <th className="py-2 pr-3">Credentials</th>
                <th className="py-2 pr-3">Specialty</th>
                <th className="py-2 pr-3">NPI</th>
                <th className="py-2 pr-3">Created</th>
                <th className="py-2">ID</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-neutral-100">
                  <td className="py-2 pr-3 font-medium text-neutral-900">{row.display_name ?? '—'}</td>
                  <td className="py-2 pr-3">{row.role}</td>
                  <td className="py-2 pr-3">{row.work_email ?? '—'}</td>
                  <td className="py-2 pr-3">{row.phone_number ?? '—'}</td>
                  <td className="py-2 pr-3">{row.credentials ?? '—'}</td>
                  <td className="py-2 pr-3">{row.specialty ?? '—'}</td>
                  <td className="py-2 pr-3 font-mono">{row.npi ?? '—'}</td>
                  <td className="py-2 pr-3">
                    {new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short' }).format(
                      new Date(row.created_at)
                    )}
                  </td>
                  <td className="py-2 font-mono text-[11px] text-neutral-600">{row.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
