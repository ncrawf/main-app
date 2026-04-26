import type { PatientUpcomingEvent } from '@/lib/dashboard/buildPatientUpcomingEvents'
import type { PatientCareProgramCard } from '@/lib/dashboard/getPatientCareOverview'

export type DashboardJourneyStepState = 'complete' | 'current' | 'upcoming'

export type DashboardJourneyStep = {
  id: string
  label: string
  state: DashboardJourneyStepState
}

export type DashboardJourneyCandidate = {
  journey_id: string
  journey_type: 'program' | 'diagnostic'
  label: string
  has_blocking_required_action: boolean
  is_clinically_meaningful_override: boolean
  journey_display_priority: number
  state_rank: 2 | 1
  required_due_at: string | null
  last_activity_at: string | null
  journey_updated_at: string
  steps: DashboardJourneyStep[]
}

export type SelectedJourney = {
  primary: DashboardJourneyCandidate | null
  additionalActiveLabels: string[]
}

function programDisplayPriority(programType: string): number {
  if (programType === 'weight_loss') return 90
  if (programType === 'ed') return 80
  if (programType === 'hormone_peptide') return 70
  return 60
}

function buildProgramSteps(program: PatientCareProgramCard): DashboardJourneyStep[] {
  const lower = program.next_action_summary.toLowerCase()
  const currentStep =
    program.status === 'under_review' || lower.includes('review')
      ? 2
      : program.needs_attention_now
        ? 1
        : 3
  return [
    { id: `${program.id}:intake`, label: 'Intake completed', state: currentStep > 1 ? 'complete' : 'current' },
    {
      id: `${program.id}:action`,
      label: program.needs_attention_now ? 'Required action' : 'Plan in progress',
      state: currentStep === 1 ? 'current' : currentStep > 1 ? 'complete' : 'upcoming',
    },
    {
      id: `${program.id}:review`,
      label: 'Clinical review',
      state: currentStep === 2 ? 'current' : currentStep > 2 ? 'complete' : 'upcoming',
    },
    {
      id: `${program.id}:routine`,
      label: 'On routine',
      state: currentStep >= 3 ? 'current' : 'upcoming',
    },
  ]
}

function buildDiagnosticSteps(event: PatientUpcomingEvent): DashboardJourneyStep[] {
  const actionNow = event.urgency === 'action'
  const currentStep = actionNow ? 2 : 3
  return [
    { id: `${event.id}:ordered`, label: 'Test ordered', state: 'complete' },
    {
      id: `${event.id}:collection`,
      label: 'Collection pending',
      state: currentStep === 2 ? 'current' : 'complete',
    },
    {
      id: `${event.id}:review`,
      label: 'Clinical review',
      state: currentStep === 3 ? 'current' : 'upcoming',
    },
    { id: `${event.id}:resolved`, label: 'Resolved', state: 'upcoming' },
  ]
}

function isProgramBlocking(program: PatientCareProgramCard): boolean {
  const lower = program.next_action_summary.toLowerCase()
  if (!program.needs_attention_now) return false
  if (lower.includes('review')) return false
  return true
}

function stateRank(program: PatientCareProgramCard): 2 | 1 {
  if (program.status === 'under_review' || program.needs_attention_now) return 2
  return 1
}

function parseTs(value: string | null): number {
  if (!value) return Number.NEGATIVE_INFINITY
  const ts = new Date(value).getTime()
  return Number.isNaN(ts) ? Number.NEGATIVE_INFINITY : ts
}

function compareCandidates(a: DashboardJourneyCandidate, b: DashboardJourneyCandidate): number {
  if (a.has_blocking_required_action !== b.has_blocking_required_action) {
    return a.has_blocking_required_action ? -1 : 1
  }
  if (a.is_clinically_meaningful_override !== b.is_clinically_meaningful_override) {
    return a.is_clinically_meaningful_override ? -1 : 1
  }
  if (a.journey_display_priority !== b.journey_display_priority) {
    return b.journey_display_priority - a.journey_display_priority
  }
  if (a.state_rank !== b.state_rank) {
    return b.state_rank - a.state_rank
  }
  if (a.has_blocking_required_action && b.has_blocking_required_action) {
    const aDue = parseTs(a.required_due_at)
    const bDue = parseTs(b.required_due_at)
    if (aDue !== bDue) return aDue - bDue
  } else {
    const aAct = parseTs(a.last_activity_at)
    const bAct = parseTs(b.last_activity_at)
    if (aAct !== bAct) return bAct - aAct
  }
  const aUpd = parseTs(a.journey_updated_at)
  const bUpd = parseTs(b.journey_updated_at)
  if (aUpd !== bUpd) return bUpd - aUpd
  return a.journey_id.localeCompare(b.journey_id)
}

export function selectPrimaryJourney(input: {
  programs: PatientCareProgramCard[]
  upcomingEvents: PatientUpcomingEvent[]
}): SelectedJourney {
  const candidates: DashboardJourneyCandidate[] = input.programs.map((program) => ({
    journey_id: `program:${program.id}`,
    journey_type: 'program',
    label: program.title?.trim() || program.program_type.replace(/_/g, ' '),
    has_blocking_required_action: isProgramBlocking(program),
    is_clinically_meaningful_override: false,
    journey_display_priority: programDisplayPriority(program.program_type),
    state_rank: stateRank(program),
    required_due_at: null,
    last_activity_at: program.updated_at,
    journey_updated_at: program.updated_at,
    steps: buildProgramSteps(program),
  }))

  const diagnosticEvent = input.upcomingEvents.find((event) => event.kind === 'lab_order' || event.kind === 'portal_lab_upload')
  if (diagnosticEvent) {
    candidates.push({
      journey_id: `diagnostic:${diagnosticEvent.id}`,
      journey_type: 'diagnostic',
      label: 'Diagnostics flow',
      has_blocking_required_action: diagnosticEvent.urgency === 'action',
      is_clinically_meaningful_override: true,
      journey_display_priority: 95,
      state_rank: diagnosticEvent.urgency === 'info' ? 1 : 2,
      required_due_at: diagnosticEvent.due_at,
      last_activity_at: diagnosticEvent.due_at,
      journey_updated_at: diagnosticEvent.due_at ?? new Date().toISOString(),
      steps: buildDiagnosticSteps(diagnosticEvent),
    })
  }

  if (candidates.length === 0) {
    return { primary: null, additionalActiveLabels: [] }
  }

  candidates.sort(compareCandidates)
  return {
    primary: candidates[0] ?? null,
    additionalActiveLabels: candidates.slice(1).map((c) => c.label),
  }
}
