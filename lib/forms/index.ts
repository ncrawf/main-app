import { glp1IntakeForm } from '@/lib/forms/glp1-intake'
import type { FormDefinition } from '@/lib/forms/types'

export const formRegistry: Record<string, FormDefinition> = {
  [glp1IntakeForm.key]: glp1IntakeForm,
}

export function getFormDefinition(formKey: string): FormDefinition | undefined {
  return formRegistry[formKey]
}

export type { FormDefinition, FormField, FormStep } from '@/lib/forms/types'
