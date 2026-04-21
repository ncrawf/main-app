import { PathwayDecisionCardView } from '@/components/dashboard/PathwayDecisionCardView'
import type { PathwayDecisionCard } from '@/lib/pathways/decisionContract'
import { ChartAiReviewActionsForm } from './ChartAiReviewActionsForm'

type ChartAiReviewListItemProps = {
  patientId: string
  review: {
    id: string
    trigger_event_type: string
    status: string
    output_summary: string
    recommendation_draft: string | null
    reviewed_at: string | null
    review_note: string | null
    created_at: string
  }
  findings: string[]
  riskFlags: string[]
  pathwayCards: PathwayDecisionCard[]
}

function humanizeToken(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

export function ChartAiReviewListItem({ patientId, review, findings, riskFlags, pathwayCards }: ChartAiReviewListItemProps) {
  return (
    <li className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs text-neutral-500">
        <span className="font-medium text-neutral-800">
          {humanizeToken(review.status)} · {humanizeToken(review.trigger_event_type)}
        </span>
        <time dateTime={review.created_at}>
          {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
            new Date(review.created_at)
          )}
        </time>
      </div>
      <p className="mt-2 text-sm text-neutral-900">{review.output_summary}</p>
      {findings.length > 0 ? (
        <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-neutral-700">
          {findings.slice(0, 4).map((finding, idx) => (
            <li key={`${review.id}-finding-${idx}`}>{finding}</li>
          ))}
        </ul>
      ) : null}
      {riskFlags.length > 0 ? <p className="mt-2 text-xs text-amber-700">Risk flags: {riskFlags.join(' | ')}</p> : null}
      {review.recommendation_draft ? (
        <p className="mt-2 whitespace-pre-wrap text-xs text-neutral-700">{review.recommendation_draft}</p>
      ) : null}
      {pathwayCards.length > 0 ? (
        <div className="mt-3 space-y-2">
          {pathwayCards.map((card) => (
            <PathwayDecisionCardView
              key={`${review.id}-${card.pathway_id}`}
              decision={card}
              showWhatChanged={false}
              showWhy={false}
              actionLimit={3}
            />
          ))}
        </div>
      ) : null}
      {review.status === 'draft' ? (
        <ChartAiReviewActionsForm patientId={patientId} reviewId={review.id} />
      ) : review.reviewed_at ? (
        <p className="mt-2 text-xs text-neutral-500">
          Reviewed{' '}
          {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
            new Date(review.reviewed_at)
          )}
          {review.review_note ? ` · ${review.review_note}` : ''}
        </p>
      ) : null}
    </li>
  )
}
