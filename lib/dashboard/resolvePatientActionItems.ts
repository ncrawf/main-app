import type { PatientAccountActionItemRow } from '@/lib/dashboard/buildPatientAccountActionItemsQueue'
import { dominantActionLabel } from '@/lib/dashboard/patientAccountDominantPresentation'

/**
 * Patient-facing derived action — same source as `buildPatientAccountActionItemsQueue` rows,
 * normalized for shell banner + drawer + Action Items tab.
 */
export type PatientActionItem = {
  id: string
  kind: string
  title: string
  description?: string
  ctaLabel: string
  href: string
  priority: number
  contextLabel?: string
  tone: 'default' | 'success' | 'warning' | 'info'
}

export function mapActionItemRow(row: PatientAccountActionItemRow): PatientActionItem {
  return {
    id: row.key,
    kind: row.kind,
    title: row.title,
    description: row.body.trim() ? row.body : undefined,
    ctaLabel: dominantActionLabel(row.kind, row.title),
    href: row.href,
    priority: row.priority,
    contextLabel: row.programContext ?? undefined,
    tone: row.tone,
  }
}

/**
 * Single resolver for global banner + Action Items queue: same ordered list, `top` === banner target.
 * Input is `actionItemsQueue` from the cached dashboard model (already prioritized).
 */
export function resolvePatientActionSurfaces(queue: PatientAccountActionItemRow[]): {
  items: PatientActionItem[]
  top: PatientActionItem | null
} {
  const items = queue.map(mapActionItemRow)
  return { items, top: items[0] ?? null }
}
