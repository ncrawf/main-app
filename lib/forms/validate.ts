import type { FormDefinition } from '@/lib/forms/types'
import { isFieldVisible } from '@/lib/forms/visibility'
import { normalizeUsPhoneToE164, parseUsDobToPostgresDate } from '@/lib/patients/normalize'

function trimString(value: unknown): string {
  if (value === null || value === undefined) return ''
  return String(value).trim()
}

function titleCaseWords(value: string): string {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const lower = word.toLowerCase()
      return lower[0] ? lower[0].toUpperCase() + lower.slice(1) : lower
    })
    .join(' ')
}

function sentenceCase(value: string): string {
  const trimmed = value.trim()
  if (!trimmed) return ''
  return trimmed[0].toUpperCase() + trimmed.slice(1)
}

function normalizeStringByField(value: string, mode?: 'words' | 'sentences'): string {
  if (!mode) return value.trim()
  return mode === 'words' ? titleCaseWords(value) : sentenceCase(value)
}

function normalizeFieldValue(fieldName: string, value: string): string {
  if (fieldName === 'state') return value.trim().toUpperCase()
  return value.trim()
}

export function sanitizeAnswers(def: FormDefinition, answers: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const step of def.steps) {
    for (const field of step.fields) {
      const raw = answers[field.name]
      if (Array.isArray(raw)) {
        out[field.name] = raw.map((v) => trimString(v)).filter(Boolean)
        continue
      }
      const str = trimString(raw)
      out[field.name] = normalizeFieldValue(field.name, normalizeStringByField(str, field.autoCapitalize))
    }
  }
  return out
}

/**
 * Validates `answers` against required fields in the form definition.
 * Returns an error message or null when valid.
 */
export function validateAnswers(def: FormDefinition, answers: Record<string, unknown>): string | null {
  for (const step of def.steps) {
    for (const field of step.fields) {
      if (!isFieldVisible(field, answers)) continue
      if (!field.required) continue
      const raw = answers[field.name]
      const v = trimString(raw)
      if (Array.isArray(raw)) {
        if (raw.length === 0) {
          return `Missing required field: ${field.label}`
        }
      } else if (!v) {
        return `Missing required field: ${field.label}`
      }
      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
        return 'Enter a valid email address'
      }
      if (field.type === 'number' && v) {
        const n = Number(v)
        if (!Number.isFinite(n)) return `Enter a valid number for ${field.label}`
        if (typeof field.min === 'number' && n < field.min) return `${field.label} must be at least ${field.min}`
        if (typeof field.max === 'number' && n > field.max) return `${field.label} must be at most ${field.max}`
      }
      if (field.name === 'state' && !/^[A-Za-z]{2}$/.test(v.trim())) {
        return 'Use a 2-letter state code (e.g. CA)'
      }
      if (field.name === 'postal_code') {
        const z = v.replace(/\s/g, '')
        if (!/^\d{5}(-\d{4})?$/.test(z)) {
          return 'Enter a valid ZIP code'
        }
      }
      if (field.name === 'phone' && !normalizeUsPhoneToE164(answers[field.name])) {
        return 'Enter a valid 10-digit US phone number'
      }
      if (field.name === 'dob' && !parseUsDobToPostgresDate(answers[field.name])) {
        return 'Enter a valid date of birth (mm/dd/yyyy)'
      }
    }
  }
  return null
}
