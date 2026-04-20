export const CLINICAL_NOTE_ARTIFACTS_BUCKET = 'clinical_note_artifacts' as const

export type ClinicalVisitPdfArtifact = {
  bucket: typeof CLINICAL_NOTE_ARTIFACTS_BUCKET
  object_path: string
  generated_at: string
  layout_version: string
  content_sha256?: string
}

export function buildClinicalVisitPdfArtifactPointer(args: {
  patientId: string
  clinicalVisitId: string
  layoutVersion: string
  fileName?: string
}): ClinicalVisitPdfArtifact {
  return {
    bucket: CLINICAL_NOTE_ARTIFACTS_BUCKET,
    object_path: `${args.patientId}/${args.clinicalVisitId}/${args.fileName ?? `clinical-note-${args.layoutVersion}.pdf`}`,
    generated_at: new Date().toISOString(),
    layout_version: args.layoutVersion,
  }
}
