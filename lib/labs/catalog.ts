export type LabTestCatalogItem = {
  code: string
  label: string
  category: 'metabolic' | 'cardiometabolic' | 'hormonal' | 'inflammation' | 'safety' | 'other'
}

export type LabPanelTemplate = {
  id: string
  label: string
  description: string
  testCodes: string[]
  defaultDiagnosisCodes: string[]
  defaultDiagnosisHint?: string
}

export const LAB_TEST_CATALOG: LabTestCatalogItem[] = [
  { code: 'cbc', label: 'CBC', category: 'safety' },
  { code: 'cmp', label: 'CMP', category: 'safety' },
  { code: 'a1c', label: 'Hemoglobin A1c', category: 'metabolic' },
  { code: 'lipid_panel', label: 'Lipid panel', category: 'cardiometabolic' },
  { code: 'tsh', label: 'TSH', category: 'hormonal' },
  { code: 'free_t4', label: 'Free T4', category: 'hormonal' },
  { code: 'fasting_glucose', label: 'Fasting glucose', category: 'metabolic' },
  { code: 'insulin_fasting', label: 'Fasting insulin', category: 'metabolic' },
  { code: 'microalbumin_creatinine_ratio', label: 'Urine microalbumin/creatinine ratio', category: 'metabolic' },
  { code: 'total_testosterone', label: 'Total testosterone', category: 'hormonal' },
  { code: 'free_testosterone', label: 'Free testosterone', category: 'hormonal' },
  { code: 'estradiol', label: 'Estradiol', category: 'hormonal' },
  { code: 'lh', label: 'LH', category: 'hormonal' },
  { code: 'fsh', label: 'FSH', category: 'hormonal' },
  { code: 'prolactin', label: 'Prolactin', category: 'hormonal' },
  { code: 'psa', label: 'PSA', category: 'hormonal' },
  { code: 'vitamin_d_25oh', label: 'Vitamin D (25-OH)', category: 'other' },
  { code: 'vitamin_b12', label: 'Vitamin B12', category: 'other' },
  { code: 'ferritin', label: 'Ferritin', category: 'other' },
  { code: 'iron_tibc', label: 'Iron + TIBC', category: 'other' },
  { code: 'cortisol_am', label: 'Cortisol (AM)', category: 'hormonal' },
  { code: 'dhea_s', label: 'DHEA-S', category: 'hormonal' },
  { code: 'progesterone', label: 'Progesterone', category: 'hormonal' },
  { code: 'shbg', label: 'SHBG', category: 'hormonal' },
  { code: 'crp_hs', label: 'hs-CRP', category: 'inflammation' },
  { code: 'esr', label: 'ESR', category: 'inflammation' },
  { code: 'homocysteine', label: 'Homocysteine', category: 'other' },
  { code: 'apob', label: 'Apolipoprotein B (ApoB)', category: 'cardiometabolic' },
]

export const LAB_PANEL_TEMPLATES: LabPanelTemplate[] = [
  {
    id: 'glp1_baseline',
    label: 'GLP-1 baseline panel',
    description: 'Baseline safety and metabolic panel commonly used for weight-loss protocols.',
    testCodes: ['cbc', 'cmp', 'a1c', 'lipid_panel', 'tsh', 'fasting_glucose'],
    defaultDiagnosisCodes: ['E66.9', 'R73.03', 'E78.5'],
    defaultDiagnosisHint: 'Obesity / metabolic syndrome / prediabetes',
  },
  {
    id: 'glp1_followup',
    label: 'GLP-1 follow-up panel',
    description: 'Follow-up lab set for active GLP-1 care.',
    testCodes: ['cmp', 'a1c', 'lipid_panel'],
    defaultDiagnosisCodes: ['E66.9', 'Z79.85'],
    defaultDiagnosisHint: 'Weight-management follow-up on GLP-1 therapy',
  },
  {
    id: 'ed_baseline',
    label: 'ED baseline panel',
    description: 'Common endocrine and cardiometabolic screening for ED evaluations.',
    testCodes: ['cbc', 'cmp', 'a1c', 'lipid_panel', 'total_testosterone', 'free_testosterone', 'psa', 'tsh'],
    defaultDiagnosisCodes: ['N52.9', 'E29.1', 'Z12.5'],
    defaultDiagnosisHint: 'Erectile dysfunction and testosterone evaluation',
  },
  {
    id: 'hair_loss_panel',
    label: 'Hair restoration panel',
    description: 'Frequent baseline checks for hair-loss evaluations.',
    testCodes: ['cbc', 'cmp', 'tsh', 'free_t4', 'ferritin', 'iron_tibc', 'vitamin_d_25oh', 'vitamin_b12'],
    defaultDiagnosisCodes: ['L65.9', 'E61.1', 'E55.9'],
    defaultDiagnosisHint: 'Hair loss workup with micronutrient and thyroid screening',
  },
  {
    id: 'hormone_peptide_panel',
    label: 'Hormone / peptide baseline panel',
    description: 'Typical endocrine panel before protocol initiation.',
    testCodes: [
      'cbc',
      'cmp',
      'lipid_panel',
      'tsh',
      'free_t4',
      'total_testosterone',
      'free_testosterone',
      'estradiol',
      'lh',
      'fsh',
      'prolactin',
      'cortisol_am',
      'dhea_s',
      'shbg',
    ],
    defaultDiagnosisCodes: ['E34.9', 'R53.83', 'Z79.899'],
    defaultDiagnosisHint: 'Hormone / peptide baseline screening',
  },
  {
    id: 'female_hormone_panel',
    label: 'Female hormone panel',
    description: 'Focused female hormone and endocrine baseline.',
    testCodes: ['cbc', 'cmp', 'tsh', 'free_t4', 'estradiol', 'progesterone', 'lh', 'fsh', 'prolactin', 'cortisol_am'],
    defaultDiagnosisCodes: ['N95.9', 'R53.83', 'E34.9'],
    defaultDiagnosisHint: 'Female hormone evaluation',
  },
  {
    id: 'advanced_performance_panel',
    label: 'Advanced inflammation / performance panel',
    description: 'Extended IM-style markers for inflammation and cardiometabolic risk.',
    testCodes: ['cmp', 'cbc', 'crp_hs', 'esr', 'homocysteine', 'apob', 'vitamin_d_25oh', 'cortisol_am'],
    defaultDiagnosisCodes: ['R53.83', 'R79.82', 'E78.5'],
    defaultDiagnosisHint: 'Fatigue/inflammation/cardiometabolic optimization workup',
  },
]

export function listLabTestsByCodes(codes: string[]): LabTestCatalogItem[] {
  const codeSet = new Set(codes)
  return LAB_TEST_CATALOG.filter((test) => codeSet.has(test.code))
}

export function labelLabTest(code: string): string {
  const found = LAB_TEST_CATALOG.find((test) => test.code === code)
  return found?.label ?? code
}
