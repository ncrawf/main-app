import type { PatientRow } from '@/lib/dashboard/getPatientDashboard'

export function formatDobUs(iso: string | null): string {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  if (!y || !m || !d) return iso
  return `${m}/${d}/${y}`
}

export function formatAddressBlock(p: PatientRow): string {
  const lines: string[] = []
  if (p.address_line1) {
    lines.push([p.address_line1, p.address_line2].filter(Boolean).join(', '))
  }
  const cityLine = [p.city, p.state, p.postal_code].filter(Boolean).join(', ')
  if (cityLine) lines.push(cityLine)
  return lines.length ? lines.join('\n') : '—'
}

export function patientDisplayName(p: PatientRow): string {
  const parts = [p.first_name, p.last_name].filter(Boolean)
  return parts.length ? parts.join(' ') : 'Patient'
}
