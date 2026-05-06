/**
 * Phase 4 question-bank barrel — aggregates the 25 question modules and
 * exposes O(1) `getQuestion(question_id)` lookup for the intake runtime
 * per system map Section 1K.4 (canonical question bank, deterministic
 * versioned).
 *
 * Adding a new question file: import its export below and append to the
 * `MODULES` constant. Duplicate question_ids fail at module load time
 * (`buildQuestionIndex` throws) so drift surfaces immediately, not at
 * runtime against a real patient.
 */
import type { Question } from '../types'

import { allergyHistoryQuestions } from './clinical-core/allergy_history'
import { medicationHistoryQuestions } from './clinical-core/medication_history'
import { surgeryHistoryQuestions } from './clinical-core/surgery_history'
import { cardiometabolicQuestions } from './domain/cardiometabolic'
import { gastrointestinalQuestions } from './domain/gastrointestinal'
import { lifestyleQuestions } from './domain/lifestyle'
import { mental_healthQuestions as mentalHealthQuestions } from './domain/mental_health'
import { reproductiveQuestions } from './domain/reproductive'
import { bariatricSurgeryExtendedQuestions } from './pathway/glp1/bariatric_surgery_extended'
import { cvSafetyExtendedQuestions } from './pathway/glp1/cv_safety_extended'
import { eatingDisorderScreenQuestions } from './pathway/glp1/eating_disorder_screen'
import { giSafetyExtendedQuestions } from './pathway/glp1/gi_safety_extended'
import { motivationAndGoalsQuestions } from './pathway/glp1/motivation_and_goals'
import { priorGlp1UseQuestions } from './pathway/glp1/prior_glp1_use'
import { treatmentPreviewQuestions } from './pathway/glp1/treatment_preview'
import { weightHistoryQuestions } from './pathway/glp1/weight_history'
import { weightLossAttemptsQuestions } from './pathway/glp1/weight_loss_attempts'
import { baseConsentsQuestions } from './universal/base_consents'
import { candidacyResultQuestions } from './universal/candidacy_result'
import { demographicsQuestions } from './universal/demographics'
import { identityVerificationQuestions } from './universal/identity_verification'
import { insurancePaymentReadinessQuestions } from './universal/insurance_payment_readiness'
import { membershipCheckoutQuestions } from './universal/membership_checkout'
import { profileHardCommitQuestions } from './universal/profile_hard_commit'
import { smartLoadingQuestions } from './universal/smart_loading'

/**
 * Source-of-truth list of every Question[] file. Adding a new module:
 * import above + append the constant here.
 */
export const MODULES: ReadonlyArray<{ moduleName: string; questions: Question[] }> = [
  { moduleName: 'clinical-core/allergy_history', questions: allergyHistoryQuestions },
  { moduleName: 'clinical-core/medication_history', questions: medicationHistoryQuestions },
  { moduleName: 'clinical-core/surgery_history', questions: surgeryHistoryQuestions },
  { moduleName: 'domain/cardiometabolic', questions: cardiometabolicQuestions },
  { moduleName: 'domain/gastrointestinal', questions: gastrointestinalQuestions },
  { moduleName: 'domain/lifestyle', questions: lifestyleQuestions },
  { moduleName: 'domain/mental_health', questions: mentalHealthQuestions },
  { moduleName: 'domain/reproductive', questions: reproductiveQuestions },
  { moduleName: 'pathway/glp1/bariatric_surgery_extended', questions: bariatricSurgeryExtendedQuestions },
  { moduleName: 'pathway/glp1/cv_safety_extended', questions: cvSafetyExtendedQuestions },
  { moduleName: 'pathway/glp1/eating_disorder_screen', questions: eatingDisorderScreenQuestions },
  { moduleName: 'pathway/glp1/gi_safety_extended', questions: giSafetyExtendedQuestions },
  { moduleName: 'pathway/glp1/motivation_and_goals', questions: motivationAndGoalsQuestions },
  { moduleName: 'pathway/glp1/prior_glp1_use', questions: priorGlp1UseQuestions },
  { moduleName: 'pathway/glp1/treatment_preview', questions: treatmentPreviewQuestions },
  { moduleName: 'pathway/glp1/weight_history', questions: weightHistoryQuestions },
  { moduleName: 'pathway/glp1/weight_loss_attempts', questions: weightLossAttemptsQuestions },
  { moduleName: 'universal/base_consents', questions: baseConsentsQuestions },
  { moduleName: 'universal/candidacy_result', questions: candidacyResultQuestions },
  { moduleName: 'universal/demographics', questions: demographicsQuestions },
  { moduleName: 'universal/identity_verification', questions: identityVerificationQuestions },
  { moduleName: 'universal/insurance_payment_readiness', questions: insurancePaymentReadinessQuestions },
  { moduleName: 'universal/membership_checkout', questions: membershipCheckoutQuestions },
  { moduleName: 'universal/profile_hard_commit', questions: profileHardCommitQuestions },
  { moduleName: 'universal/smart_loading', questions: smartLoadingQuestions },
]

const QUESTION_INDEX = buildQuestionIndex()

function buildQuestionIndex(): Map<string, Question> {
  const index = new Map<string, Question>()
  for (const { moduleName, questions } of MODULES) {
    for (const q of questions) {
      const existing = index.get(q.question_id)
      if (existing) {
        throw new Error(
          `lib/intake/question-bank: duplicate question_id "${q.question_id}" in module "${moduleName}" (already declared elsewhere). Question_ids MUST be globally unique.`,
        )
      }
      index.set(q.question_id, q)
    }
  }
  return index
}

/** O(1) lookup by question_id. Returns undefined if not found. */
export function getQuestion(question_id: string): Question | undefined {
  return QUESTION_INDEX.get(question_id)
}

/** Number of questions registered across all modules. */
export function getQuestionCount(): number {
  return QUESTION_INDEX.size
}

/** Iterate every registered question (test / audit / lint use cases). */
export function* allQuestions(): Generator<Question> {
  for (const q of QUESTION_INDEX.values()) yield q
}
