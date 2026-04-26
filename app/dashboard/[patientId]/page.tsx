import { notFound, redirect } from 'next/navigation'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const dynamic = 'force-dynamic'

export default async function PatientDashboardRootRedirectPage({
  params,
  searchParams,
}: {
  params: Promise<{ patientId: string }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const { patientId } = await params
  if (!UUID_RE.test(patientId)) notFound()
  const sp = await searchParams
  const q = new URLSearchParams()
  for (const [key, value] of Object.entries(sp)) {
    if (value === undefined) continue
    if (Array.isArray(value)) value.forEach((v) => q.append(key, v))
    else q.set(key, value)
  }
  const suffix = q.toString() ? `?${q.toString()}` : ''
  redirect(`/dashboard/${patientId}/programs${suffix}`)
}
