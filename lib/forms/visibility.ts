import type { FormField } from '@/lib/forms/types'

function asStringArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((v) => String(v))
  if (typeof value === 'string') return [value]
  return []
}

function isEmptyValue(value: unknown): boolean {
  if (value === null || value === undefined) return true
  if (Array.isArray(value)) return value.length === 0
  return String(value).trim().length === 0
}

function matchCondition(
  condition: NonNullable<FormField['visibleWhen']>['conditions'][number],
  answers: Record<string, unknown>
): boolean {
  const value = answers[condition.field]
  switch (condition.operator) {
    case 'equals':
      return String(value ?? '') === String(condition.value ?? '')
    case 'not_equals':
      return String(value ?? '') !== String(condition.value ?? '')
    case 'includes':
      return asStringArray(value).includes(String(condition.value ?? ''))
    case 'not_includes':
      return !asStringArray(value).includes(String(condition.value ?? ''))
    case 'empty':
      return isEmptyValue(value)
    case 'not_empty':
      return !isEmptyValue(value)
    default:
      return true
  }
}

export function isFieldVisible(field: FormField, answers: Record<string, unknown>): boolean {
  const rule = field.visibleWhen
  if (!rule || rule.conditions.length === 0) return true
  const checks = rule.conditions.map((condition) => matchCondition(condition, answers))
  if (rule.match === 'any') return checks.some(Boolean)
  return checks.every(Boolean)
}

