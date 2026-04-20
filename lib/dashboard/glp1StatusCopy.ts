/**
 * Patient-safe copy for GLP-1 protocol states.
 * Aligns with MAIN roadmap; internal ops may use different tooling.
 */

export type Glp1Phase =
  | 'intake'
  | 'payment'
  | 'review'
  | 'fulfillment'
  | 'care'

export type PipelineStep = {
  phase: Glp1Phase
  title: string
  short: string
}

export const GLP1_PIPELINE: PipelineStep[] = [
  { phase: 'intake', title: 'Intake', short: 'Questionnaire submitted' },
  { phase: 'payment', title: 'Payment', short: 'Visit paid for' },
  { phase: 'review', title: 'Clinical review', short: 'Provider decision' },
  { phase: 'fulfillment', title: 'Rx & delivery', short: 'Pharmacy fulfillment' },
  { phase: 'care', title: 'Care', short: 'Active treatment & follow-ups' },
]

export type StatusDashboard = {
  headline: string
  subline: string
  nextSteps: string[]
  tone: 'neutral' | 'success' | 'warning' | 'danger'
  /** 0–4 = which pipeline step is the current focus (0 = first). */
  activePipelineIndex: number
}

const DEFAULT: StatusDashboard = {
  headline: 'We’re setting up your chart',
  subline: 'Your information is being processed. Check back soon or contact support if you need help.',
  nextSteps: ['If you just submitted intake, refresh in a minute.', 'Save this page URL — it’s your private status link.'],
  tone: 'neutral',
  activePipelineIndex: 0,
}

export function getGlp1DashboardCopy(status: string | null | undefined): StatusDashboard {
  const s = status ?? ''

  switch (s) {
    case 'intake_submitted':
      return {
        headline: 'Intake received',
        subline:
          'Our clinical team will review your information. Complete payment when you’re ready so we can move your case forward.',
        nextSteps: [
          'Complete payment for your visit (link will be available here once billing is enabled).',
          'Watch for email updates at the address you provided.',
        ],
        tone: 'neutral',
        activePipelineIndex: 0,
      }
    case 'payment_completed':
      return {
        headline: 'Payment received',
        subline: 'Your visit is paid. A clinician will review your intake next.',
        nextSteps: [
          'No further action needed right now.',
          'You’ll be notified when your review status changes.',
        ],
        tone: 'success',
        activePipelineIndex: 2,
      }
    case 'awaiting_review':
    case 'under_review':
    case 'pending_approval':
      return {
        headline: 'In clinical review',
        subline: 'A licensed provider is reviewing your information.',
        nextSteps: ['Typical review time varies by case.', 'We’ll update this page when there’s a decision.'],
        tone: 'neutral',
        activePipelineIndex: 2,
      }
    case 'approved':
      return {
        headline: 'Approved',
        subline: 'Your case has been approved. Prescription and fulfillment come next.',
        nextSteps: ['Watch for fulfillment and shipping updates.', 'Follow any instructions sent by your care team.'],
        tone: 'success',
        activePipelineIndex: 3,
      }
    case 'denied':
      return {
        headline: 'Not a match at this time',
        subline: 'A clinician has reviewed your intake. You may receive more detail by email.',
        nextSteps: ['Check your email for next steps or appeals.', 'Contact support if you have questions.'],
        tone: 'danger',
        activePipelineIndex: 2,
      }
    case 'rejected_followup':
    case 'paused':
    case 'completed':
    case 'cancelled':
    case 'stopped':
      return {
        headline: 'More information needed',
        subline: 'We could not complete your request as submitted. Our team may reach out with next steps.',
        nextSteps: ['Watch for a message from care or support.', 'Respond promptly so we can continue your case.'],
        tone: 'warning',
        activePipelineIndex: 2,
      }
    case 'rx_sent':
      return {
        headline: 'Prescription sent',
        subline: 'Your prescription has been sent to the pharmacy.',
        nextSteps: ['Track shipment if provided.', 'Follow medication instructions from your pharmacy and provider.'],
        tone: 'success',
        activePipelineIndex: 3,
      }
    case 'shipped':
      return {
        headline: 'Shipped',
        subline: 'Your order is on the way.',
        nextSteps: ['Use tracking from your carrier email when available.', 'Report issues to support.'],
        tone: 'success',
        activePipelineIndex: 3,
      }
    case 'active':
      return {
        headline: 'Active care',
        subline: 'You’re in an active treatment period.',
        nextSteps: ['Complete any scheduled check-ins.', 'Message support for clinical questions.'],
        tone: 'success',
        activePipelineIndex: 4,
      }
    case 'followup_due':
    case 'refill_due':
      return {
        headline: 'Check-in due',
        subline: 'It’s time for a follow-up.',
        nextSteps: ['Complete your check-in form when prompted.', 'Don’t adjust medication without provider guidance.'],
        tone: 'warning',
        activePipelineIndex: 4,
      }
    case 'refill_pending':
      return {
        headline: 'Refill in progress',
        subline: 'We’re processing your refill request.',
        nextSteps: ['Watch for approval or questions from the clinical team.', 'Plan ahead so you don’t run out of medication.'],
        tone: 'neutral',
        activePipelineIndex: 4,
      }
    case 'lead':
    case 'intake_started':
      return {
        headline: 'Continue your intake',
        subline: 'You started but haven’t finished your questionnaire.',
        nextSteps: ['Return to the intake form and submit to move forward.'],
        tone: 'warning',
        activePipelineIndex: 0,
      }
    default:
      return DEFAULT
  }
}
