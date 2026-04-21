import type { RefillCheckInProfile } from '@/lib/refill/refillCheckInProfile'

export const GENERIC_REFILL_QUESTIONNAIRE_VERSION = 1 as const

export type GenericEnergy = 'very_low' | 'low' | 'ok' | 'good' | 'great'

export type GenericPain = 'none' | 'mild' | 'moderate' | 'severe'

export type GenericYesNo = 'yes' | 'no'

export type GenericRefillQuestionnaireV1 = {
  version: typeof GENERIC_REFILL_QUESTIONNAIRE_VERSION
  energy: GenericEnergy
  abdominal_pain: GenericPain
  /** Short narrative: overall symptoms, issues, or “feeling well” */
  how_you_are_feeling: string
  new_symptoms_or_concerns: GenericYesNo
  new_symptoms_detail: string
  medication_changes: GenericYesNo
  medication_changes_detail: string
}

const ENERGY: GenericEnergy[] = ['very_low', 'low', 'ok', 'good', 'great']
const PAIN: GenericPain[] = ['none', 'mild', 'moderate', 'severe']
const YESNO: GenericYesNo[] = ['yes', 'no']

function isEnergy(v: unknown): v is GenericEnergy {
  return typeof v === 'string' && (ENERGY as string[]).includes(v)
}
function isPain(v: unknown): v is GenericPain {
  return typeof v === 'string' && (PAIN as string[]).includes(v)
}
function isYesNo(v: unknown): v is GenericYesNo {
  return typeof v === 'string' && (YESNO as string[]).includes(v)
}
function trimStr(v: unknown, max: number): string {
  if (typeof v !== 'string') return ''
  return v.trim().slice(0, max)
}

export function emptyGenericRefillQuestionnaire(): GenericRefillQuestionnaireV1 {
  return {
    version: GENERIC_REFILL_QUESTIONNAIRE_VERSION,
    energy: 'ok',
    abdominal_pain: 'none',
    how_you_are_feeling: '',
    new_symptoms_or_concerns: 'no',
    new_symptoms_detail: '',
    medication_changes: 'no',
    medication_changes_detail: '',
  }
}

export function validateGenericRefillQuestionnaire(
  raw: unknown
): { ok: true; value: GenericRefillQuestionnaireV1 } | { ok: false; error: string } {
  if (!raw || typeof raw !== 'object') {
    return { ok: false, error: 'Complete the quick check-in before submitting your refill.' }
  }
  const o = raw as Record<string, unknown>
  if (!isEnergy(o.energy)) return { ok: false, error: 'Select how your energy level has been.' }
  if (!isPain(o.abdominal_pain)) return { ok: false, error: 'Select any abdominal discomfort level.' }

  const feeling = trimStr(o.how_you_are_feeling, 2000)
  if (feeling.length < 15) {
    return { ok: false, error: 'In a sentence or two, tell us how you’ve been feeling lately (at least 15 characters).' }
  }

  const sym = o.new_symptoms_or_concerns
  if (!isYesNo(sym)) return { ok: false, error: 'Answer whether you have new symptoms or concerns.' }
  const symDet = trimStr(o.new_symptoms_detail, 2000)
  if (sym === 'yes' && symDet.length < 3) {
    return { ok: false, error: 'Briefly describe the new symptoms or concerns.' }
  }

  const med = o.medication_changes
  if (!isYesNo(med)) return { ok: false, error: 'Answer whether any medications or doses changed.' }
  const medDet = trimStr(o.medication_changes_detail, 2000)
  if (med === 'yes' && medDet.length < 3) {
    return { ok: false, error: 'Briefly describe medication or dose changes.' }
  }

  return {
    ok: true,
    value: {
      version: GENERIC_REFILL_QUESTIONNAIRE_VERSION,
      energy: o.energy,
      abdominal_pain: o.abdominal_pain,
      how_you_are_feeling: feeling,
      new_symptoms_or_concerns: sym,
      new_symptoms_detail: symDet,
      medication_changes: med,
      medication_changes_detail: medDet,
    },
  }
}

function labelEnergy(e: GenericEnergy): string {
  const m: Record<GenericEnergy, string> = {
    very_low: 'Very low',
    low: 'Low',
    ok: 'OK',
    good: 'Good',
    great: 'Great',
  }
  return m[e]
}

function labelPain(p: GenericPain): string {
  return p.charAt(0).toUpperCase() + p.slice(1)
}

export function formatGenericRefillQuestionnaireAsNote(v: GenericRefillQuestionnaireV1): string {
  return [
    '── Rx refill check-in ──',
    `Energy: ${labelEnergy(v.energy)}`,
    `Abdominal pain / discomfort: ${labelPain(v.abdominal_pain)}`,
    `How you’ve been feeling: ${v.how_you_are_feeling}`,
    `New symptoms or concerns: ${v.new_symptoms_or_concerns === 'yes' ? 'Yes' : 'No'}${
      v.new_symptoms_detail ? ` — ${v.new_symptoms_detail}` : ''
    }`,
    `Medication or dose changes: ${v.medication_changes === 'yes' ? 'Yes' : 'No'}${
      v.medication_changes_detail ? ` — ${v.medication_changes_detail}` : ''
    }`,
  ].join('\n')
}

export type GenericRefillQuestionnairePayload = {
  profile: 'generic_rx'
  version: typeof GENERIC_REFILL_QUESTIONNAIRE_VERSION
  answers: GenericRefillQuestionnaireV1
}

export function parseGenericRefillPayload(
  profile: RefillCheckInProfile,
  raw: unknown
): { ok: true; payload: GenericRefillQuestionnairePayload; noteBlock: string } | { ok: false; error: string } {
  if (profile !== 'generic_rx') return { ok: false, error: 'Invalid check-in profile.' }
  const v = validateGenericRefillQuestionnaire(raw)
  if (!v.ok) return v
  return {
    ok: true,
    payload: { profile: 'generic_rx', version: GENERIC_REFILL_QUESTIONNAIRE_VERSION, answers: v.value },
    noteBlock: formatGenericRefillQuestionnaireAsNote(v.value),
  }
}
