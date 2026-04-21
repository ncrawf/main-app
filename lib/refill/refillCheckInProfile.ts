/**
 * Which structured refill check-in to show before submitting a portal refill.
 * Extend with more profiles (e.g. peptides, female health) as needed.
 */
export type RefillCheckInProfile = 'none' | 'glp1_weight_loss' | 'generic_rx'

const GLP1_KEY_FRAGMENTS = [
  'glp1',
  'semaglutide',
  'tirzepatide',
  'wegovy',
  'ozempic',
  'zepbound',
  'mounjaro',
  'rybelsus',
  'incretin',
]

function haystack(treatmentKey: string, displayName: string, category: string | null): string {
  return `${treatmentKey}\n${displayName}\n${category ?? ''}`.toLowerCase()
}

export function resolveRefillCheckInProfile(
  treatmentKey: string,
  displayName: string,
  category: string | null
): RefillCheckInProfile {
  const h = haystack(treatmentKey, displayName, category)
  for (const frag of GLP1_KEY_FRAGMENTS) {
    if (h.includes(frag)) return 'glp1_weight_loss'
  }
  const cat = (category ?? '').toLowerCase()
  if (cat === 'rx') return 'generic_rx'
  return 'none'
}
