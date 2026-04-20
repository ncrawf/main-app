type BuildProgressNoteInput = {
  visitType: string
  visitAtIso: string
  providerDisplayName: string
  providerRole: string
  patientName: string
  patientDob: string | null
  chiefConcern: string
  diagnosisCodes: string[]
  assessment: string
  plan: string
  counseling: string
  followUpPlan: string
  allergies: string | null
  currentMedications: string | null
  currentSupplements: string | null
  selectedRxSafetyLines: string[]
}

function line(value: string | null | undefined, fallback = '-'): string {
  const trimmed = value?.trim()
  return trimmed && trimmed.length > 0 ? trimmed : fallback
}

function humanizeVisitType(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

export function buildClinicalProgressNote(input: BuildProgressNoteInput): string {
  const diagnosis = input.diagnosisCodes.length > 0 ? input.diagnosisCodes.join(', ') : '-'
  const rxSafety =
    input.selectedRxSafetyLines.length > 0
      ? input.selectedRxSafetyLines.map((lineItem) => `- ${lineItem}`).join('\n')
      : '- No medication-specific addenda attached.'

  return [
    'MAIN CLINICAL PROGRESS NOTE',
    `Visit type: ${humanizeVisitType(input.visitType)}`,
    `Visit date: ${line(input.visitAtIso)}`,
    `Documented by: ${line(input.providerDisplayName)} (${line(input.providerRole)})`,
    '',
    `Patient: ${line(input.patientName)}`,
    `DOB: ${line(input.patientDob)}`,
    '',
    'Chief concern / reason for visit',
    line(input.chiefConcern),
    '',
    `Diagnosis codes: ${diagnosis}`,
    '',
    'History reviewed',
    `Allergies: ${line(input.allergies)}`,
    `Current medications: ${line(input.currentMedications)}`,
    `Current supplements: ${line(input.currentSupplements)}`,
    '',
    'Assessment',
    line(input.assessment),
    '',
    'Safety / contraindication review',
    line(input.counseling),
    '',
    'Rx-specific safety addenda',
    rxSafety,
    '',
    'Plan',
    line(input.plan),
    '',
    'Follow-up',
    line(input.followUpPlan),
    '',
    'Attestation',
    'I attest this visit documentation reflects my clinical evaluation, safety assessment, and treatment plan.',
    `E-signature: ${line(input.providerDisplayName)} · ${line(input.visitAtIso)}`,
  ].join('\n')
}
