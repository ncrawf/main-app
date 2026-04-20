import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyAdminSession } from '@/lib/admin/auth'
import { formatE164UsDisplay } from '@/lib/admin/format'
import { listPatientsForAdmin, type AdminPatientRow } from '@/lib/admin/listPatients'
import { buildPatientPortalExchangeUrl } from '@/lib/patient-portal/exchangeUrl'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Admin · MAIN',
  robots: { index: false, follow: false },
}

function formatDob(iso: string | null): string {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  if (!y || !m || !d) return iso
  return `${m}/${d}/${y}`
}

export default async function AdminPatientsPage() {
  const secret = process.env.ADMIN_SECRET
  if (!secret) {
    return (
      <main className="min-h-screen bg-neutral-50 p-8 text-neutral-900">
        <p>
          Add <code className="rounded bg-neutral-200 px-1.5 py-0.5 text-sm">ADMIN_SECRET</code> to your environment and
          redeploy.
        </p>
      </main>
    )
  }

  const cookie = (await cookies()).get('main_admin')?.value
  if (!verifyAdminSession(cookie, secret)) {
    redirect('/admin/login')
  }

  const rows = await listPatientsForAdmin()

  type AdminRowWithPortal = AdminPatientRow & { patientDashboardUrl: string }

  const rowsWithPortal: AdminRowWithPortal[] = await Promise.all(
    rows.map(async (r): Promise<AdminRowWithPortal> => {
      try {
        const patientDashboardUrl = await buildPatientPortalExchangeUrl(r.id, `/dashboard/${r.id}`)
        return { ...r, patientDashboardUrl }
      } catch {
        return { ...r, patientDashboardUrl: `/dashboard/${r.id}` }
      }
    })
  )

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">MAIN</p>
            <h1 className="text-lg font-semibold tracking-tight">Patients</h1>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="text-neutral-600 hover:text-neutral-900 hover:underline">
              Home
            </Link>
            <a href="/api/admin/logout" className="font-medium text-neutral-600 hover:text-neutral-900 hover:underline">
              Log out
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-8">
        <table className="w-full min-w-[1000px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-200 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              <th className="py-3 pr-4">Name</th>
              <th className="py-3 pr-4">Email</th>
              <th className="py-3 pr-4">Phone</th>
              <th className="py-3 pr-4">DOB</th>
              <th className="py-3 pr-4">Workflow status</th>
              <th className="py-3 pr-4">Assignee</th>
              <th className="py-3 pr-4">Created</th>
              <th className="py-3">View</th>
            </tr>
          </thead>
          <tbody>
            {rowsWithPortal.map((r) => (
              <tr key={r.id} className="border-b border-neutral-100 bg-white hover:bg-neutral-100/50">
                <td className="py-3 pr-4 font-medium text-neutral-900">
                  {[r.first_name, r.last_name].filter(Boolean).join(' ') || '—'}
                </td>
                <td className="py-3 pr-4 text-neutral-800">{r.email}</td>
                <td className="py-3 pr-4 font-mono text-xs text-neutral-800">{formatE164UsDisplay(r.phone)}</td>
                <td className="py-3 pr-4 text-neutral-700">{formatDob(r.dob)}</td>
                <td className="py-3 pr-4">
                  <span className="inline-block rounded-full bg-neutral-200/90 px-2.5 py-0.5 text-xs font-medium text-neutral-800">
                    {r.workflow_status ?? '—'}
                  </span>
                </td>
                <td className="py-3 pr-4 text-neutral-700">
                  {r.assignee_display_name ?? (r.assigned_to ? `${r.assigned_to.slice(0, 8)}…` : '—')}
                </td>
                <td className="py-3 pr-4 text-neutral-600">
                  {new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short' }).format(
                    new Date(r.created_at)
                  )}
                </td>
                <td className="py-3">
                  <Link
                    href={r.patientDashboardUrl}
                    className="font-medium text-neutral-900 underline-offset-2 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Patient dashboard
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {rowsWithPortal.length === 0 ? <p className="mt-10 text-center text-neutral-500">No patients yet.</p> : null}
      </div>
    </main>
  )
}
