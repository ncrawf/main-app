import type { PatientUpcomingEvent } from '@/lib/dashboard/buildPatientUpcomingEvents'

export function dominantActionLabel(kind: string, title: string): string {
  if (kind === 'checkin') return 'Complete check-in'
  if (kind === 'lab') return 'Upload lab results'
  if (kind === 'reorder') return 'Continue plan'
  if (kind === 'refill_progress') return 'View review status'
  if (kind === 'visit') return 'Review treatment plan'
  const lower = title.toLowerCase()
  if (lower.includes('checkout') || lower.includes('payment')) return 'Submit payment'
  if (lower.includes('upload') || lower.includes('lab')) return 'Upload lab results'
  if (lower.includes('check-in') || lower.includes('checkin')) return 'Complete check-in'
  if (lower.includes('review')) return 'Review treatment plan'
  return 'Continue plan'
}

/** Short CTA for the thin shell banner (dominant action only). */
export function thinBannerCtaLabel(kind: string, title: string): string {
  const lower = title.toLowerCase()
  if (lower.includes('payment') || lower.includes('billing')) return 'Submit payment'
  if (kind === 'refill_progress' || kind === 'window') return 'View details'
  if (kind === 'visit') return 'View details'
  return 'Continue'
}

export function dominantToneClass(tone: 'default' | 'success' | 'warning' | 'info'): string {
  if (tone === 'success') return 'border-emerald-200 bg-emerald-50/70'
  if (tone === 'warning') return 'border-amber-200 bg-amber-50/70'
  if (tone === 'info') return 'border-sky-200 bg-sky-50/60'
  return 'border-neutral-200 bg-white'
}

export function nextSignal(events: PatientUpcomingEvent[]): string | null {
  if (events.length === 0) return null
  const soon = events.find((ev) => ev.urgency === 'soon') ?? events[0]
  if (!soon) return null
  return soon.subtitle ? `${soon.title}: ${soon.subtitle}` : soon.title
}
