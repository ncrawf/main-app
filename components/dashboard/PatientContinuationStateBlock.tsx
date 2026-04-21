type ContinuationDisplay = {
  current: string
  happeningNow: string
  timing: string
  next: string
}

function statusPriority(status: string | null): number {
  switch (status) {
    case 'under_review':
      return 0
    case 'requested':
      return 1
    case 'approved':
      return 2
    default:
      return 99
  }
}

export function pickVisibleContinuationStatus(statuses: Array<string | null | undefined>): string | null {
  const normalized = statuses
    .map((v) => (typeof v === 'string' ? v : null))
    .filter((v): v is string => !!v)
    .filter((v) => v === 'requested' || v === 'under_review' || v === 'approved')
  if (normalized.length === 0) return null
  return [...normalized].sort((a, b) => statusPriority(a) - statusPriority(b))[0] ?? null
}

export function continuationStatusCopy(status: string): ContinuationDisplay {
  switch (status) {
    case 'requested':
      return {
        current: 'Your plan is in progress',
        happeningNow: 'Your update is being prepared for review.',
        timing: 'Review usually begins shortly after checkout.',
        next: 'Next, your care team begins review.',
      }
    case 'under_review':
      return {
        current: 'Your plan is in review',
        happeningNow: 'Your care team is reviewing your latest update.',
        timing: 'Most reviews are completed within about 24 hours.',
        next: 'We will notify you when your next step is ready.',
      }
    case 'approved':
      return {
        current: 'Your plan is moving forward',
        happeningNow: 'Clinical review is complete.',
        timing: 'Next-step updates usually appear shortly after review completion.',
        next: 'We will share your next care step here.',
      }
    default:
      return {
        current: 'Your plan is moving forward',
        happeningNow: 'Your care team is processing your update.',
        timing: 'Updates usually appear within about a day.',
        next: 'We will share your next step as soon as it is ready.',
      }
  }
}

export function PatientContinuationStateBlock({
  status,
  insights = [],
  className = '',
}: {
  status: string | null
  insights?: string[]
  className?: string
}) {
  if (!status) return null
  const copy = continuationStatusCopy(status)
  const visibleInsights = insights.map((line) => line.trim()).filter(Boolean).slice(0, 2)
  return (
    <section className={`rounded-xl border border-sky-200 bg-sky-50/70 p-4 shadow-sm ${className}`.trim()}>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-800">What is happening now</p>
      <p className="mt-1 text-sm font-semibold text-sky-950">{copy.current}</p>
      <p className="mt-1 text-sm text-sky-900">{copy.happeningNow}</p>
      {visibleInsights.map((line) => (
        <p key={line} className="mt-1 text-xs text-sky-900">
          {line}
        </p>
      ))}
      <p className="mt-1 text-xs text-sky-800">{copy.timing}</p>
      <p className="mt-1 text-xs text-sky-800">{copy.next}</p>
    </section>
  )
}
