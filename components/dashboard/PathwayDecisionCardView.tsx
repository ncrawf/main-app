import type { PathwayDecisionCard } from '@/lib/pathways/decisionContract'

type Props = {
  decision: PathwayDecisionCard
  showPathwayLabel?: boolean
  showWhatChanged?: boolean
  showWhy?: boolean
  showActions?: boolean
  actionLimit?: number
  className?: string
}

function asTokenLabel(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

function prettyDecisionState(state: PathwayDecisionCard['state']): string {
  if (state === 'on_track') return 'On Track'
  if (state === 'needs_review') return 'Needs Review'
  return 'Action Needed'
}

export function PathwayDecisionCardView({
  decision,
  showPathwayLabel = true,
  showWhatChanged = true,
  showWhy = true,
  showActions = true,
  actionLimit,
  className,
}: Props) {
  const actions = typeof actionLimit === 'number' ? decision.recommended_actions.slice(0, actionLimit) : decision.recommended_actions

  return (
    <article className={`rounded-lg border border-neutral-200 bg-neutral-50 p-4 ${className ?? ''}`.trim()}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-sm font-semibold text-neutral-900">
          {showPathwayLabel ? asTokenLabel(decision.pathway_id) : 'Pathway recommendation'}
        </h4>
        <span className="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-neutral-700">
          {prettyDecisionState(decision.state)}
        </span>
      </div>

      <p className="mt-2 text-sm text-neutral-800">{decision.summary_readout}</p>

      {showWhatChanged ? (
        <p className="mt-1 text-xs text-neutral-600">
          <span className="font-medium text-neutral-700">What changed:</span> {decision.what_changed}
        </p>
      ) : null}

      {showWhy ? (
        <p className="mt-1 text-xs text-neutral-600">
          <span className="font-medium text-neutral-700">Why this step:</span> {decision.why_this_step}
        </p>
      ) : null}

      {showActions && actions.length > 0 ? (
        <div className="mt-3 space-y-2">
          {actions.map((action) => (
            <div key={action.id} className="rounded-md border border-neutral-200 bg-white px-3 py-2">
              <p className="text-sm font-medium text-neutral-900">{action.title}</p>
              <p className="mt-1 text-xs text-neutral-600">
                Owner: {action.owner === 'care_team' ? 'Care team' : 'You'}
                {action.due_label ? ` · Due: ${action.due_label}` : ''}
              </p>
              <p className="mt-1 text-xs text-neutral-600">
                <span className="font-medium text-neutral-700">Reason:</span> {action.reason}
              </p>
              <p className="mt-1 text-xs text-neutral-600">
                <span className="font-medium text-neutral-700">Success:</span> {action.success_criteria}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  )
}
