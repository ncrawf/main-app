/** Operator view: readable US phone from E.164 */
export function formatE164UsDisplay(e164: string | null | undefined): string {
  if (!e164) return '—'
  const d = e164.replace(/\D/g, '')
  const n = d.length === 11 && d.startsWith('1') ? d.slice(1) : d
  if (n.length !== 10) return e164
  return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6)}`
}
