import type { RefillCheckInProfile } from '@/lib/refill/refillCheckInProfile'
import type { GenericEnergy } from '@/lib/refill/genericRefillQuestionnaire'

export const GLP1_REFILL_QUESTIONNAIRE_VERSION = 2 as const

export type Glp1Severity = 'none' | 'mild' | 'moderate' | 'severe'

export type Glp1WeightChange = 'lost' | 'gained' | 'stable' | 'prefer_not'

export type Glp1YesNo = 'yes' | 'no'

export type Glp1RefillQuestionnaireV2 = {
  version: typeof GLP1_REFILL_QUESTIONNAIRE_VERSION
  nausea: Glp1Severity
  nausea_notes: string
  gi_symptoms: Glp1Severity
  gi_notes: string
  /** GLP-1–relevant upper GI / epigastric discomfort */
  abdominal_pain: Glp1Severity
  abdominal_notes: string
  energy: GenericEnergy
  weight_change: Glp1WeightChange
  /** e.g. approximate pounds/kg since last fill */
  weight_change_detail: string
  target_weight_or_goal: string
  other_concerns: string
  taking_medication_as_prescribed: Glp1YesNo
  adherence_notes: string
  new_medications_or_dose_changes: Glp1YesNo
  new_medications_detail: string
  medical_history_changes: Glp1YesNo
  medical_history_detail: string
}

export function emptyGlp1RefillQuestionnaire(): Glp1RefillQuestionnaireV2 {
  return {
    version: GLP1_REFILL_QUESTIONNAIRE_VERSION,
    nausea: 'none',
    nausea_notes: '',
    gi_symptoms: 'none',
    gi_notes: '',
    abdominal_pain: 'none',
    abdominal_notes: '',
    energy: 'ok',
    weight_change: 'stable',
    weight_change_detail: '',
    target_weight_or_goal: '',
    other_concerns: '',
    taking_medication_as_prescribed: 'yes',
    adherence_notes: '',
    new_medications_or_dose_changes: 'no',
    new_medications_detail: '',
    medical_history_changes: 'no',
    medical_history_detail: '',
  }
}

const SEVERITIES: Glp1Severity[] = ['none', 'mild', 'moderate', 'severe']
const WEIGHT: Glp1WeightChange[] = ['lost', 'gained', 'stable', 'prefer_not']
const YESNO: Glp1YesNo[] = ['yes', 'no']
const ENERGY: GenericEnergy[] = ['very_low', 'low', 'ok', 'good', 'great']

function isSeverity(v: unknown): v is Glp1Severity {
  return typeof v === 'string' && (SEVERITIES as string[]).includes(v)
}

function isWeight(v: unknown): v is Glp1WeightChange {
  return typeof v === 'string' && (WEIGHT as string[]).includes(v)
}

function isYesNo(v: unknown): v is Glp1YesNo {
  return typeof v === 'string' && (YESNO as string[]).includes(v)
}

function isEnergy(v: unknown): v is GenericEnergy {
  return typeof v === 'string' && (ENERGY as string[]).includes(v)
}

function trimStr(v: unknown, max: number): string {
  if (typeof v !== 'string') return ''
  return v.trim().slice(0, max)
}

export function validateGlp1RefillQuestionnaire(
  raw: unknown
): { ok: true; value: Glp1RefillQuestionnaireV2 } | { ok: false; error: string } {
  if (!raw || typeof raw !== 'object') {
    return { ok: false, error: 'Complete the GLP-1 reorder check-in before submitting.' }
  }
  const o = raw as Record<string, unknown>

  if (o.version !== 2 && o.version !== '2') {
    return { ok: false, error: 'Please refresh the page and complete the latest check-in form.' }
  }

  if (!isSeverity(o.nausea)) return { ok: false, error: 'Select how nausea has been lately.' }
  if (!isSeverity(o.gi_symptoms)) return { ok: false, error: 'Select how stomach / GI symptoms have been lately.' }
  if (!isSeverity(o.abdominal_pain)) return { ok: false, error: 'Select any abdominal pain or discomfort level.' }
  if (!isEnergy(o.energy)) return { ok: false, error: 'Select how your energy level has been.' }
  if (!isWeight(o.weight_change)) return { ok: false, error: 'Select how your weight has changed since your last fill.' }

  const adherent = o.taking_medication_as_prescribed
  if (!isYesNo(adherent)) return { ok: false, error: 'Answer whether you are taking this medication as prescribed.' }
  const adherenceNotes = trimStr(o.adherence_notes, 1200)
  if (adherent === 'no' && adherenceNotes.length < 5) {
    return { ok: false, error: 'Tell us briefly why doses may have been missed or changed on your side.' }
  }

  const newMeds = o.new_medications_or_dose_changes
  if (!isYesNo(newMeds)) return { ok: false, error: 'Answer whether any medications or doses have changed.' }
  const medDetail = trimStr(o.new_medications_detail, 2000)
  if (newMeds === 'yes' && medDetail.length < 3) {
    return { ok: false, error: 'Briefly describe medication or dose changes (at least a few characters).' }
  }

  const hist = o.medical_history_changes
  if (!isYesNo(hist)) return { ok: false, error: 'Answer whether your medical history has changed.' }
  const histDetail = trimStr(o.medical_history_detail, 2000)
  if (hist === 'yes' && histDetail.length < 3) {
    return { ok: false, error: 'Briefly describe what changed in your medical history.' }
  }

  const value: Glp1RefillQuestionnaireV2 = {
    version: GLP1_REFILL_QUESTIONNAIRE_VERSION,
    nausea: o.nausea,
    gi_symptoms: o.gi_symptoms,
    abdominal_pain: o.abdominal_pain,
    weight_change: o.weight_change,
    energy: o.energy,
    nausea_notes: trimStr(o.nausea_notes, 1200),
    gi_notes: trimStr(o.gi_notes, 1200),
    abdominal_notes: trimStr(o.abdominal_notes, 1200),
    weight_change_detail: trimStr(o.weight_change_detail, 500),
    target_weight_or_goal: trimStr(o.target_weight_or_goal, 500),
    other_concerns: trimStr(o.other_concerns, 2000),
    taking_medication_as_prescribed: adherent,
    adherence_notes: adherenceNotes,
    new_medications_or_dose_changes: newMeds,
    new_medications_detail: medDetail,
    medical_history_changes: hist,
    medical_history_detail: histDetail,
  }

  return { ok: true, value }
}

function labelSeverity(s: Glp1Severity): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function labelWeight(w: Glp1WeightChange): string {
  switch (w) {
    case 'lost':
      return 'Lost weight'
    case 'gained':
      return 'Gained weight'
    case 'stable':
      return 'About the same'
    case 'prefer_not':
      return 'Prefer not to say'
    default:
      return w
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

/** Staff-readable block merged with optional free-text note elsewhere. */
export function formatGlp1RefillQuestionnaireAsNote(v: Glp1RefillQuestionnaireV2): string {
  const lines: string[] = [
    '── GLP-1 reorder check-in ──',
    `Energy: ${labelEnergy(v.energy)}`,
    `Nausea: ${labelSeverity(v.nausea)}${v.nausea_notes ? ` — ${v.nausea_notes}` : ''}`,
    `GI symptoms: ${labelSeverity(v.gi_symptoms)}${v.gi_notes ? ` — ${v.gi_notes}` : ''}`,
    `Abdominal pain / discomfort: ${labelSeverity(v.abdominal_pain)}${v.abdominal_notes ? ` — ${v.abdominal_notes}` : ''}`,
    `Weight since last fill: ${labelWeight(v.weight_change)}${v.weight_change_detail ? ` (${v.weight_change_detail})` : ''}`,
  ]
  if (v.target_weight_or_goal.trim()) {
    lines.push(`Goal / target weight: ${v.target_weight_or_goal.trim()}`)
  }
  if (v.other_concerns.trim()) {
    lines.push(`Other issues to know about: ${v.other_concerns.trim()}`)
  }
  lines.push(
    `Taking medication as prescribed: ${v.taking_medication_as_prescribed === 'yes' ? 'Yes' : 'No'}${
      v.adherence_notes ? ` — ${v.adherence_notes}` : ''
    }`
  )
  lines.push(
    `New medications or dose changes: ${v.new_medications_or_dose_changes === 'yes' ? 'Yes' : 'No'}${
      v.new_medications_detail ? ` — ${v.new_medications_detail}` : ''
    }`
  )
  lines.push(
    `Medical history changes: ${v.medical_history_changes === 'yes' ? 'Yes' : 'No'}${
      v.medical_history_detail ? ` — ${v.medical_history_detail}` : ''
    }`
  )
  return lines.join('\n')
}

export type Glp1RefillQuestionnairePayload = {
  profile: 'glp1_weight_loss'
  version: typeof GLP1_REFILL_QUESTIONNAIRE_VERSION
  answers: Glp1RefillQuestionnaireV2
}

export function parseGlp1RefillQuestionnairePayload(
  profile: RefillCheckInProfile,
  raw: unknown
): { ok: true; payload: Glp1RefillQuestionnairePayload; noteBlock: string } | { ok: false; error: string } {
  if (profile !== 'glp1_weight_loss') {
    return { ok: false, error: 'Invalid check-in profile.' }
  }
  const v = validateGlp1RefillQuestionnaire(raw)
  if (!v.ok) return v
  return {
    ok: true,
    payload: { profile: 'glp1_weight_loss', version: GLP1_REFILL_QUESTIONNAIRE_VERSION, answers: v.value },
    noteBlock: formatGlp1RefillQuestionnaireAsNote(v.value),
  }
}
