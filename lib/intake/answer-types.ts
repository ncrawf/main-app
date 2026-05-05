/**
 * Answer-type Zod schemas per system map Section 1K.3 + 1K.4.
 *
 * Each answer_type defines the SHAPE of the patient's raw answer payload + the
 * choices/constraints applicable to questions of that type. The intake runtime
 * (Phase 4) validates `intake_responses.raw_value` against the schema for the
 * question's declared `answer_type` before persistence.
 *
 * Conversion-funnel custom types (`plan_selection`, `payment_commit_with_consent`)
 * are declared here for the type system but their runtime semantics are owned by
 * Module 26 in `conversion_funnel_modules_v1.md`.
 */

import { z } from 'zod';

export const ANSWER_TYPES = [
  'single_select',
  'multi_select',
  'numeric',
  'banded_numeric',
  'date',
  'text',
  'acknowledgment',
  'photo_upload',
  'lab_document_upload',
  'educational_screen',
  'plan_selection',
  'payment_commit_with_consent',
] as const;

export type AnswerType = (typeof ANSWER_TYPES)[number];

const ChoiceOption = z.object({
  value: z.string(),
  label: z.string(),
  excludes_others: z.boolean().optional(),
});

export const SingleSelectAnswer = z.object({
  type: z.literal('single_select'),
  choices: z.array(ChoiceOption).min(2),
  selected: z.string(),
});

export const MultiSelectAnswer = z.object({
  type: z.literal('multi_select'),
  choices: z.array(ChoiceOption).min(1),
  selected: z.array(z.string()),
  none_logic: z.enum(['exclusive_with_other_choices']).optional(),
});

export const NumericAnswer = z.object({
  type: z.literal('numeric'),
  value: z.number(),
  units: z.string().optional(),
});

export const BandedNumericAnswer = z.object({
  type: z.literal('banded_numeric'),
  band_id: z.string(),
  band_label: z.string(),
});

export const DateAnswer = z.object({
  type: z.literal('date'),
  value: z.string().date(),
});

export const TextAnswer = z.object({
  type: z.literal('text'),
  value: z.string(),
});

export const AcknowledgmentAnswer = z.object({
  type: z.literal('acknowledgment'),
  acknowledged: z.boolean(),
  consent_version: z.string().optional(),
});

export const PhotoUploadAnswer = z.object({
  type: z.literal('photo_upload'),
  storage_id: z.string(),
  uploaded_at: z.string().datetime(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const LabDocumentUploadAnswer = z.object({
  type: z.literal('lab_document_upload'),
  storage_id: z.string(),
  uploaded_at: z.string().datetime(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const EducationalScreenAnswer = z.object({
  type: z.literal('educational_screen'),
  continued: z.boolean(),
  time_on_screen_ms: z.number().int().nonnegative().optional(),
});

export const PlanSelectionAnswer = z.object({
  type: z.literal('plan_selection'),
  pricing_profile_id: z.string(),
  pricing_profile_version: z.string(),
  selected_plan_id: z.string(),
});

export const PaymentCommitWithConsentAnswer = z.object({
  type: z.literal('payment_commit_with_consent'),
  psp_payment_method_id: z.string(),
  consent_acknowledged: z.boolean(),
  ip_address_hash: z.string(),
  user_agent_hash: z.string(),
});

export const AnswerSchema = z.discriminatedUnion('type', [
  SingleSelectAnswer,
  MultiSelectAnswer,
  NumericAnswer,
  BandedNumericAnswer,
  DateAnswer,
  TextAnswer,
  AcknowledgmentAnswer,
  PhotoUploadAnswer,
  LabDocumentUploadAnswer,
  EducationalScreenAnswer,
  PlanSelectionAnswer,
  PaymentCommitWithConsentAnswer,
]);

export type Answer = z.infer<typeof AnswerSchema>;
