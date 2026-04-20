/** 8 digits max → 03/14/1985 as user types (state holds digits only). */
export function formatUsDobInputDisplay(digits: string): string {
  const d = digits.replace(/\D/g, '').slice(0, 8)
  if (d.length === 0) return ''
  if (d.length <= 2) return d
  if (d.length <= 4) return `${d.slice(0, 2)}/${d.slice(2)}`
  return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`
}
