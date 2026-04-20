export type FieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'date'
  | 'textarea'
  | 'number'
  | 'select'
  | 'radio'
  | 'chips'
  | 'file'

export type FieldOption = {
  value: string
  label: string
}

export type FieldCondition = {
  field: string
  operator: 'equals' | 'not_equals' | 'includes' | 'not_includes' | 'empty' | 'not_empty'
  value?: string
}

export type FormField = {
  name: string
  label: string
  type: FieldType
  required?: boolean
  placeholder?: string
  /** HTML input attributes for faster, more accurate entry (mobile keyboards, autofill). */
  maxLength?: number
  autoComplete?: string
  inputMode?: 'text' | 'numeric' | 'tel' | 'email'
  /** In `two-column` steps, span the full row (e.g. street address). */
  colSpan?: 'full'
  description?: string
  options?: FieldOption[]
  rows?: number
  min?: number
  max?: number
  autoCapitalize?: 'words' | 'sentences'
  multiple?: boolean
  accept?: string
  visibleWhen?: {
    match?: 'all' | 'any'
    conditions: FieldCondition[]
  }
}

export type FormStep = {
  title: string
  fields: FormField[]
  /** `two-column`: responsive pair grid (e.g. first/last name, city/state). */
  layout?: 'single' | 'two-column'
}

export type FormDefinition = {
  key: string
  title: string
  steps: FormStep[]
}
