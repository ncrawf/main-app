'use server'

import type { NotificationTemplateKey } from '@/lib/workflows/notificationRules'
import * as patientCase from '@/lib/internal/patient-case/impl'

export type {
  AddStaffNoteResult,
  AddCatalogTreatmentResult,
  ApplyCaseResult,
  CreateClinicalVisitAddendumResult,
  CreateClinicalVisitNoteResult,
  CreateLabOrderResult,
  GenerateRxPdfResult,
  MarkLabOrderDispatchedResult,
  PreparePharmacyDispatchResult,
  PublishClinicalVisitPdfResult,
  RequestRefillForTreatmentItemResult,
  RequestRefillsBulkResult,
  SendTemplateTestResult,
  UpdateCareProgramStatusResult,
  UpdatePatientSupportRequestStatusResult,
  UpdateRefillRequestStatusResult,
  UpdateSupplementFulfillmentStatusResult,
  UpdateTreatmentItemStatusResult,
} from '@/lib/internal/patient-case/impl'

export async function addStaffNote(patientId: string, rawText: string) {
  return patientCase.addStaffNote(patientId, rawText)
}

export async function applyCaseUpdates(patientId: string, nextAssignedTo: string | null) {
  return patientCase.applyCaseUpdates(patientId, nextAssignedTo)
}

export async function sendTemplateTestEmail(patientId: string, templateKey: NotificationTemplateKey) {
  return patientCase.sendTemplateTestEmail(patientId, templateKey)
}

export async function updateTreatmentItemStatus(patientId: string, treatmentItemId: string, nextStatus: string) {
  return patientCase.updateTreatmentItemStatus(patientId, treatmentItemId, nextStatus)
}

export async function updateCareProgramStatus(patientId: string, careProgramId: string, nextStatus: string) {
  return patientCase.updateCareProgramStatus(patientId, careProgramId, nextStatus)
}

export async function requestRefillForTreatmentItem(patientId: string, treatmentItemId: string, rawNote?: string) {
  return patientCase.requestRefillForTreatmentItem(patientId, treatmentItemId, rawNote)
}

export async function requestRefillsForTreatmentItemsBulk(
  patientId: string,
  treatmentItemIds: string[],
  rawSharedNote?: string
) {
  return patientCase.requestRefillsForTreatmentItemsBulk(patientId, treatmentItemIds, rawSharedNote)
}

export async function updateRefillRequestStatus(
  patientId: string,
  refillRequestId: string,
  nextStatus: string,
  rawStaffNote?: string
) {
  return patientCase.updateRefillRequestStatus(patientId, refillRequestId, nextStatus, rawStaffNote)
}

export async function addCatalogTreatmentItem(patientId: string, formData: FormData) {
  return patientCase.addCatalogTreatmentItem(patientId, formData)
}

export async function createAndPublishLabOrder(
  patientId: string,
  input: Parameters<typeof patientCase.createAndPublishLabOrder>[1]
) {
  return patientCase.createAndPublishLabOrder(patientId, input)
}

export async function createClinicalVisitNote(
  patientId: string,
  input: Parameters<typeof patientCase.createClinicalVisitNote>[1]
) {
  return patientCase.createClinicalVisitNote(patientId, input)
}

export async function publishClinicalVisitPdf(
  patientId: string,
  clinicalVisitId: string,
  notifyPatientByEmail = true
) {
  return patientCase.publishClinicalVisitPdf(patientId, clinicalVisitId, notifyPatientByEmail)
}

export async function createClinicalVisitAddendum(
  patientId: string,
  clinicalVisitId: string,
  rawAddendumText: string
) {
  return patientCase.createClinicalVisitAddendum(patientId, clinicalVisitId, rawAddendumText)
}

export async function markLabOrderDispatched(
  patientId: string,
  labOrderId: string,
  dispatchModeRaw: string,
  destinationRaw?: string,
  noteRaw?: string
) {
  return patientCase.markLabOrderDispatched(patientId, labOrderId, dispatchModeRaw, destinationRaw, noteRaw)
}

export async function generateRxPdfForTreatment(patientId: string, treatmentItemId: string) {
  return patientCase.generateRxPdfForTreatment(patientId, treatmentItemId)
}

export async function prepareTreatmentForPharmacyDispatch(
  patientId: string,
  treatmentItemId: string,
  rawPartnerNote?: string
) {
  return patientCase.prepareTreatmentForPharmacyDispatch(patientId, treatmentItemId, rawPartnerNote)
}

export async function updateSupplementFulfillmentStatus(
  patientId: string,
  fulfillmentOrderId: string,
  nextStatusRaw: string,
  trackingNumberRaw?: string,
  trackingUrlRaw?: string,
  staffNoteRaw?: string
) {
  return patientCase.updateSupplementFulfillmentStatus(
    patientId,
    fulfillmentOrderId,
    nextStatusRaw,
    trackingNumberRaw,
    trackingUrlRaw,
    staffNoteRaw
  )
}

export async function updatePatientSupportRequestStatus(
  patientId: string,
  timelineEventId: string,
  actionRaw: string,
  staffNoteRaw?: string
) {
  return patientCase.updatePatientSupportRequestStatus(patientId, timelineEventId, actionRaw, staffNoteRaw)
}
