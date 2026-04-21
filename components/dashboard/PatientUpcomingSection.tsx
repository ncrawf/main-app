import type { PatientUpcomingEvent } from '@/lib/dashboard/buildPatientUpcomingEvents'
import { PatientUpcomingBanner } from '@/components/dashboard/PatientUpcomingBanner'
import { PatientUpcomingTimeline } from '@/components/dashboard/PatientUpcomingTimeline'

export function PatientUpcomingSection({
  events,
  reorderStripAbove = false,
}: {
  events: PatientUpcomingEvent[]
  reorderStripAbove?: boolean
}) {
  if (events.length === 0) return null
  return (
    <section id="patient-upcoming-actions" className="scroll-mt-6 space-y-4">
      <PatientUpcomingBanner events={events} reorderStripAbove={reorderStripAbove} />
      <PatientUpcomingTimeline events={events} reorderStripAbove={reorderStripAbove} />
    </section>
  )
}
