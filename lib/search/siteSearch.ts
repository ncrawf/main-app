export type SiteSearchEntry = {
  id: string
  title: string
  href: string
  description: string
  terms: string[]
  actionLabel: string
  topSearch?: {
    label: string
    query: string
    rank: number
  }
}

export type SiteTopSearchChip = {
  label: string
  query: string
}

export const DEFAULT_SITE_SEARCH_ENTRIES: SiteSearchEntry[] = [
  {
    id: 'sermorelin',
    title: 'Sermorelin',
    href: '/care/sermorelin',
    description: 'Peptide-based support program with clinician review and ongoing follow-up.',
    terms: ['sermorelin', 'peptide', 'peptides', 'growth hormone peptide'],
    actionLabel: 'Learn more',
    topSearch: { label: 'Sermorelin', query: 'sermorelin', rank: 1 },
  },
  {
    id: 'coq10',
    title: 'CoQ10 (Ubiquinol)',
    href: '/shop/coq10',
    description: 'Shop CoQ10 supplement support for energy and cardiometabolic wellness goals.',
    terms: ['coq10', 'co q10', 'ubiquinol', 'coenzyme q10', 'supplement'],
    actionLabel: 'Buy supplement',
    topSearch: { label: 'CoQ10', query: 'coq10', rank: 3 },
  },
  {
    id: 'female-health',
    title: 'Female Health',
    href: '/care/female-health',
    description: 'Hormone-focused care pathways, symptom review, and targeted lab planning.',
    terms: ['female health', 'women health', 'hormone balance', 'pcos', 'menopause', 'female hormones'],
    actionLabel: 'View landing page',
    topSearch: { label: 'Female health', query: 'female health', rank: 2 },
  },
  {
    id: 'weight-loss',
    title: 'Medical Weight Loss',
    href: '/forms/glp1-intake?pathway=weight_loss',
    description: 'GLP-1 and metabolic care with intake, physician review, and refill monitoring.',
    terms: ['weight loss', 'glp1', 'semaglutide', 'tirzepatide', 'wegovy', 'zepbound'],
    actionLabel: 'Start intake',
    topSearch: { label: 'Weight loss', query: 'weight loss', rank: 4 },
  },
  {
    id: 'ed',
    title: 'ED Care',
    href: '/forms/glp1-intake?pathway=ed',
    description: 'Evidence-based erectile dysfunction treatment with ongoing dose and efficacy check-ins.',
    terms: ['ed', 'erectile dysfunction', 'sildenafil', 'tadalafil', 'cialis', 'viagra'],
    actionLabel: 'Start intake',
  },
  {
    id: 'intake',
    title: 'Start Intake',
    href: '/forms/glp1-intake',
    description: 'Begin a care intake and tell the team your goals, history, and concerns.',
    terms: ['intake', 'start', 'get started', 'new patient', 'form'],
    actionLabel: 'Start intake',
  },
]

function normalize(value: string): string {
  return value.trim().toLowerCase()
}

export function findSiteSearchResults(
  query: string,
  entries: SiteSearchEntry[] = DEFAULT_SITE_SEARCH_ENTRIES
): SiteSearchEntry[] {
  const q = normalize(query)
  if (!q) return []

  const scored = entries.map((entry) => {
    const haystack = [entry.title, ...entry.terms].map(normalize)
    const exact = haystack.some((term) => term === q)
    const prefix = haystack.some((term) => term.startsWith(q))
    const contains = haystack.some((term) => term.includes(q))
    const score = exact ? 3 : prefix ? 2 : contains ? 1 : 0
    return { entry, score }
  })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))

  return scored.map((row) => row.entry)
}

export function getTopSiteSearches(
  entries: SiteSearchEntry[] = DEFAULT_SITE_SEARCH_ENTRIES
): SiteTopSearchChip[] {
  return entries
    .filter((entry) => entry.topSearch)
    .sort((a, b) => (a.topSearch?.rank ?? 999) - (b.topSearch?.rank ?? 999))
    .map((entry) => ({
      label: entry.topSearch!.label,
      query: entry.topSearch!.query,
    }))
}
