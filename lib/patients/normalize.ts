export function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== 'string') return null
  const s = raw.trim().toLowerCase()
  return s || null
}

export function trimString(raw: unknown): string {
  if (raw === null || raw === undefined) return ''
  return String(raw).trim()
}

export function toDateOnly(value: unknown): string | null {
  if (typeof value !== 'string' || !value.trim()) return null
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return null
  return d.toISOString().slice(0, 10)
}

/**
 * US DOB from intake: 8 digits (MMDDYYYY) or MM/DD/YYYY or MM-DD-YYYY → Postgres DATE as YYYY-MM-DD.
 * Use for `patients.dob` (column stays type `date`; never store ambiguous strings as the source of truth).
 */
export function parseUsDobToPostgresDate(raw: unknown): string | null {
  const s = trimString(raw)
  let month: number
  let day: number
  let year: number

  const digits = s.replace(/\D/g, '')
  if (digits.length === 8) {
    month = parseInt(digits.slice(0, 2), 10)
    day = parseInt(digits.slice(2, 4), 10)
    year = parseInt(digits.slice(4, 8), 10)
  } else {
    const m = s.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/)
    if (!m) return null
    month = parseInt(m[1], 10)
    day = parseInt(m[2], 10)
    year = parseInt(m[3], 10)
  }

  if (year < 1900 || year > 2100) return null
  if (month < 1 || month > 12 || day < 1 || day > 31) return null

  const d = new Date(year, month - 1, day)
  if (d.getFullYear() !== year || d.getMonth() !== month - 1 || d.getDate() !== day) {
    return null
  }

  const today = new Date()
  today.setHours(23, 59, 59, 999)
  if (d > today) return null

  return d.toISOString().slice(0, 10)
}

/** US state: two-letter code, uppercase (e.g. CA). */
export function formatUsState(raw: unknown): string | null {
  const s = trimString(raw).toUpperCase()
  if (s.length !== 2 || !/^[A-Z]{2}$/.test(s)) return null
  return s
}

/** US ZIP: 12345 or 12345-6789 */
export function normalizePostalCode(raw: unknown): string | null {
  const compact = trimString(raw).replace(/\s/g, '')
  if (!compact) return null
  if (/^\d{5}$/.test(compact)) return compact
  if (/^\d{5}-\d{4}$/.test(compact)) return compact
  return null
}

/**
 * US phone → E.164 for storage (+1 + 10 digits). Accepts only digits in UI; optional leading 1 stripped.
 */
export function normalizeUsPhoneToE164(raw: unknown): string | null {
  const digits = trimString(raw).replace(/\D/g, '')
  if (!digits) return null
  let n = digits
  if (digits.length === 11 && digits.startsWith('1')) {
    n = digits.slice(1)
  }
  if (n.length !== 10) return null
  return `+1${n}`
}
