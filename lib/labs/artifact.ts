export const LAB_ORDER_ARTIFACTS_BUCKET = 'lab_order_artifacts' as const

export type LabOrderPdfArtifactMetadata = {
  bucket: typeof LAB_ORDER_ARTIFACTS_BUCKET
  object_path: string
  generated_at: string
  layout_version: string
  content_sha256?: string
}

export function buildLabOrderPdfArtifactPointer(args: {
  patientId: string
  labOrderId: string
  layoutVersion: string
  fileName?: string
}): LabOrderPdfArtifactMetadata {
  const file = args.fileName ?? `lab-order-${args.layoutVersion}.pdf`
  return {
    bucket: LAB_ORDER_ARTIFACTS_BUCKET,
    object_path: `${args.patientId}/${args.labOrderId}/${file}`,
    generated_at: new Date().toISOString(),
    layout_version: args.layoutVersion,
  }
}
