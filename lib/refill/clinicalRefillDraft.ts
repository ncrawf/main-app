type RefillCheckInProfile = 'none' | 'glp1_weight_loss' | 'generic_rx'

type ClinicianRefillDraftSeedInput = {
  refillRequestId: string
  treatmentLabel: string
  createdAt: string
  patientNote: string | null
  metadata: unknown
}

export type ClinicianRefillDraftSeed = {
  sourceRefillRequestId: string
  treatmentLabel: string
  refillCheckInProfile: RefillCheckInProfile
  submittedAt: string
  chiefConcern: string
  assessment: string
  plan: string
  counseling: string
  followUpPlan: string
  questionnaireSummary: string
}

function toProfile(metadata: unknown): RefillCheckInProfile {
  if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) return 'none'
  const value = (metadata as Record<string, unknown>).refill_check_in_profile
  if (value === 'glp1_weight_loss' || value === 'generic_rx' || value === 'none') return value
  return 'none'
}

function questionnaireSummaryFromNote(patientNote: string | null): string {
  const note = (patientNote ?? '').trim()
  if (!note) return ''
  const limit = 2500
  if (note.length <= limit) return note
  return `${note.slice(0, limit)}…`
}

function assessmentLead(profile: RefillCheckInProfile): string {
  if (profile === 'glp1_weight_loss') {
    return 'GLP-1 refill questionnaire reviewed for adverse effects, adherence, and interim treatment response.'
  }
  if (profile === 'generic_rx') {
    return 'Refill check-in questionnaire reviewed for symptom trend, tolerability, and interim medication changes.'
  }
  return 'Refill request reviewed with available patient update.'
}

export function buildClinicianRefillDraftSeed(input: ClinicianRefillDraftSeedInput): ClinicianRefillDraftSeed | null {
  const summary = questionnaireSummaryFromNote(input.patientNote)
  if (!summary) return null
  const profile = toProfile(input.metadata)
  const treatment = input.treatmentLabel.trim() || 'current treatment'
  const submittedAt = new Date(input.createdAt)
  const submittedLabel = Number.isNaN(submittedAt.valueOf())
    ? 'recently'
    : new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(submittedAt)

  return {
    sourceRefillRequestId: input.refillRequestId,
    treatmentLabel: treatment,
    refillCheckInProfile: profile,
    submittedAt: input.createdAt,
    chiefConcern: `Refill follow-up for ${treatment} (${submittedLabel} patient check-in).`,
    assessment: `${assessmentLead(profile)}\n\nPatient-reported refill check-in:\n${summary}`,
    plan:
      'Assess questionnaire findings and refill appropriateness today. If clinically appropriate, continue refill pathway and adjust dose/monitoring based on symptoms and response.',
    counseling:
      'Reviewed refill check-in responses, medication adherence, and adverse-effect red flags; reinforced callback precautions for worsening symptoms.',
    followUpPlan: 'Follow up after refill decision and recheck symptom/response trend at next interval.',
    questionnaireSummary: summary,
  }
}
