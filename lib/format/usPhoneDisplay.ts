/**
 * US phone: up to 10 digits → (248) 231-5689 style for input display only.
 * State should still hold digits only; submit/API normalization unchanged.
 */
export function formatUsPhoneInputDisplay(digits: string): string {
  const d = digits.replace(/\D/g, '').slice(0, 10)
  if (d.length === 0) return ''
  if (d.length <= 3) {
    if (d.length === 3) return `(${d})`
    return `(${d}`
  }
  if (d.length <= 6) {
    return `(${d.slice(0, 3)}) ${d.slice(3)}`
  }
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
}
