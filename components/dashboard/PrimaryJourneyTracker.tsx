import type { DashboardJourneyCandidate } from '@/lib/dashboard/selectPrimaryJourney'

type Props = {
  journey: DashboardJourneyCandidate
  /** Nested inside a larger card — no outer chrome. */
  variant?: 'default' | 'embedded'
}

export function PrimaryJourneyTracker({ journey, variant = 'default' }: Props) {
  const embedded = variant === 'embedded'
  const className = embedded
    ? 'rounded-lg border border-neutral-200 bg-neutral-50/80 p-4'
    : 'rounded-xl border border-neutral-200 bg-white p-5 shadow-sm'

  return (
    <section className={className}>
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
        {embedded ? 'Your path' : 'Primary journey'}
      </p>
      <h3 className="mt-1 text-base font-semibold text-neutral-900">{journey.label}</h3>
      <ol className="mt-4 space-y-2">
        {journey.steps.map((step) => (
          <li key={step.id} className="flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                step.state === 'complete'
                  ? 'bg-emerald-500'
                  : step.state === 'current'
                    ? 'bg-neutral-900'
                    : 'bg-neutral-300'
              }`}
              aria-hidden
            />
            <span
              className={`text-sm ${
                step.state === 'current'
                  ? 'font-semibold text-neutral-900'
                  : step.state === 'complete'
                    ? 'text-neutral-700'
                    : 'text-neutral-500'
              }`}
            >
              {step.label}
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
