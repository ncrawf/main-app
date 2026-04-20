const TREATMENT_PRIORITY: Record<string, number> = {
  refill_pending: 100,
  refill_due: 90,
  active: 80,
  shipped: 70,
  rx_sent: 60,
  approved: 50,
  denied: 40,
  pending_approval: 30,
  paused: 20,
  stopped: 10,
}

export function deriveWorkflowStatusFromCare(params: {
  primaryProgramStatus: string | null
  treatmentStatuses: string[]
}): string | null {
  let best: { status: string; score: number } | null = null
  for (const status of params.treatmentStatuses) {
    const score = TREATMENT_PRIORITY[status] ?? 0
    if (!best || score > best.score) {
      best = { status, score }
    }
  }
  if (best) return best.status
  return params.primaryProgramStatus
}
