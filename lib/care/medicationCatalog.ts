/**
 * Internal formulary catalog for EMR-style prescribing into `treatment_items.dosage` / `metadata`.
 * Clinical truth is your license + pharmacy; this list is software scaffolding (dropdowns).
 */

export type StrengthUnit = 'mg' | 'mcg' | '%'

export type CatalogStrength = {
  amount: number
  unit: StrengthUnit
  /** Extra label in dropdown (e.g. combo strength) */
  label?: string
}

export type MedicationCategory =
  | 'weight_incretin'
  | 'weight_adjunct'
  | 'weight_support'
  | 'ed'
  | 'libido'
  | 'hair'
  | 'joint_health'
  | 'regenerative_health'
  | 'male_health'
  | 'female_health'
  | 'hormone'
  | 'thyroid'
  | 'derm'
  | 'sleep_anxiety'
  | 'peptide'

export type MedicationCatalogEntry = {
  id: string
  displayName: string
  category: MedicationCategory
  treatmentCategory: 'rx' | 'supplement' | 'device'
  routes: readonly string[]
  frequencies: readonly string[]
  strengths: readonly CatalogStrength[]
  /** When strengths is empty or prescriber needs off-menu dose (mg/mcg/% per unit) */
  allowCustomStrength?: boolean
  defaultCustomUnit?: StrengthUnit
  defaultSig?: string
  /** e.g. "120 capsules (60-day supply)" */
  defaultDispenseQuantity?: string
}

const semaBrandedMg: CatalogStrength[] = [0.25, 0.5, 1, 1.7, 2.4].map((amount) => ({ amount, unit: 'mg' as const }))
const semaOzempicMg: CatalogStrength[] = [0.25, 0.5, 1, 2].map((amount) => ({ amount, unit: 'mg' as const }))
const semaCompoundedMg: CatalogStrength[] = [
  0.25, 0.375, 0.5, 0.75, 1, 1.25, 1.5, 1.7, 1.75, 2, 2.4,
].map((amount) => ({ amount, unit: 'mg' as const }))
const semaOralMg: CatalogStrength[] = [3, 7, 14].map((amount) => ({ amount, unit: 'mg' as const }))

const tirzBrandedMg: CatalogStrength[] = [2.5, 5, 7.5, 10, 12.5, 15].map((amount) => ({ amount, unit: 'mg' as const }))
const tirzCompoundedMg: CatalogStrength[] = [
  2.5, 3.75, 5, 6.25, 7.5, 10, 12.5, 15,
].map((amount) => ({ amount, unit: 'mg' as const }))

const levothyroxineMcg: CatalogStrength[] = [
  25, 37.5, 40, 44, 50, 75, 80, 88, 100, 112, 125, 137, 150, 175, 200, 300,
].map((amount) => ({ amount, unit: 'mcg' as const, label: `${amount} mcg daily (typical Synthroid / levothyroxine)` }))

function supp(args: {
  id: string
  displayName: string
  category: MedicationCategory
  strengths: CatalogStrength[]
  frequencies?: string[]
  routes?: string[]
  defaultSig: string
  defaultDispenseQuantity: string
  allowCustomStrength?: boolean
  defaultCustomUnit?: StrengthUnit
}): MedicationCatalogEntry {
  return {
    id: args.id,
    displayName: args.displayName,
    category: args.category,
    treatmentCategory: 'supplement',
    routes: args.routes ?? ['PO'],
    frequencies: args.frequencies ?? ['Once daily'],
    strengths: args.strengths,
    defaultSig: args.defaultSig,
    defaultDispenseQuantity: args.defaultDispenseQuantity,
    allowCustomStrength: args.allowCustomStrength,
    defaultCustomUnit: args.defaultCustomUnit,
  }
}

export const MEDICATION_CATALOG: readonly MedicationCatalogEntry[] = [
  {
    id: 'semaglutide_wegovy',
    displayName: 'Semaglutide (Wegovy)',
    category: 'weight_incretin',
    treatmentCategory: 'rx',
    routes: ['SQ'],
    frequencies: ['Once weekly'],
    strengths: semaBrandedMg,
  },
  {
    id: 'semaglutide_ozempic',
    displayName: 'Semaglutide (Ozempic)',
    category: 'weight_incretin',
    treatmentCategory: 'rx',
    routes: ['SQ'],
    frequencies: ['Once weekly'],
    strengths: semaOzempicMg,
  },
  {
    id: 'semaglutide_compounded',
    displayName: 'Semaglutide (compounded injectable)',
    category: 'weight_incretin',
    treatmentCategory: 'rx',
    routes: ['SQ'],
    frequencies: ['Once weekly'],
    strengths: semaCompoundedMg,
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
  },
  {
    id: 'tirzepatide_zepbound',
    displayName: 'Tirzepatide (Zepbound)',
    category: 'weight_incretin',
    treatmentCategory: 'rx',
    routes: ['SQ'],
    frequencies: ['Once weekly'],
    strengths: tirzBrandedMg,
  },
  {
    id: 'tirzepatide_mounjaro',
    displayName: 'Tirzepatide (Mounjaro)',
    category: 'weight_incretin',
    treatmentCategory: 'rx',
    routes: ['SQ'],
    frequencies: ['Once weekly'],
    strengths: tirzBrandedMg,
  },
  {
    id: 'tirzepatide_compounded',
    displayName: 'Tirzepatide (compounded injectable)',
    category: 'weight_incretin',
    treatmentCategory: 'rx',
    routes: ['SQ'],
    frequencies: ['Once weekly'],
    strengths: tirzCompoundedMg,
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
  },
  {
    id: 'liraglutide_saxenda',
    displayName: 'Liraglutide (Saxenda)',
    category: 'weight_incretin',
    treatmentCategory: 'rx',
    routes: ['SQ'],
    frequencies: ['Once daily'],
    strengths: [{ amount: 6, unit: 'mg', label: '6 mg daily (pen titration per protocol)' }],
  },
  {
    id: 'liraglutide_victoza',
    displayName: 'Liraglutide (Victoza)',
    category: 'weight_incretin',
    treatmentCategory: 'rx',
    routes: ['SQ'],
    frequencies: ['Once daily'],
    strengths: [0.6, 1.2, 1.8].map((amount) => ({ amount, unit: 'mg' as const })),
  },
  {
    id: 'dulaglutide_trulicity',
    displayName: 'Dulaglutide (Trulicity)',
    category: 'weight_incretin',
    treatmentCategory: 'rx',
    routes: ['SQ'],
    frequencies: ['Once weekly'],
    strengths: [0.75, 1.5, 3, 4.5].map((amount) => ({ amount, unit: 'mg' as const })),
  },
  {
    id: 'semaglutide_rybelsus',
    displayName: 'Semaglutide oral (Rybelsus)',
    category: 'weight_incretin',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['Once daily'],
    strengths: semaOralMg,
  },
  {
    id: 'retatrutide',
    displayName: 'Retatrutide (research / compounded — verify formulary)',
    category: 'weight_incretin',
    treatmentCategory: 'rx',
    routes: ['SQ'],
    frequencies: ['Once weekly'],
    strengths: [],
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
    defaultSig: 'Use only if legally on your formulary; titrate per supervising clinician.',
  },
  {
    id: 'phentermine',
    displayName: 'Phentermine',
    category: 'weight_adjunct',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['Once daily', 'Twice daily'],
    strengths: [15, 30, 37.5].map((amount) => ({ amount, unit: 'mg' as const })),
  },
  {
    id: 'topiramate',
    displayName: 'Topiramate',
    category: 'weight_adjunct',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['Once daily', 'Twice daily'],
    strengths: [25, 50, 100, 200].map((amount) => ({ amount, unit: 'mg' as const })),
  },
  {
    id: 'naltrexone_bupropion',
    displayName: 'Naltrexone / bupropion (Contrave-style)',
    category: 'weight_adjunct',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['Twice daily'],
    strengths: [{ amount: 8, unit: 'mg', label: '8 mg bupropion / 90 mg naltrexone per tablet (example — adjust to actual tablet)' }],
  },
  {
    id: 'orlistat',
    displayName: 'Orlistat',
    category: 'weight_adjunct',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['Three times daily with meals'],
    strengths: [60, 120].map((amount) => ({ amount, unit: 'mg' as const })),
  },
  {
    id: 'sildenafil',
    displayName: 'Sildenafil',
    category: 'ed',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['As needed', 'Once daily'],
    strengths: [25, 50, 100].map((amount) => ({ amount, unit: 'mg' as const })),
  },
  {
    id: 'tadalafil',
    displayName: 'Tadalafil',
    category: 'ed',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['As needed', 'Once daily'],
    strengths: [2.5, 5, 10, 20].map((amount) => ({ amount, unit: 'mg' as const })),
  },
  {
    id: 'avanafil',
    displayName: 'Avanafil',
    category: 'ed',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['As needed'],
    strengths: [50, 100, 200].map((amount) => ({ amount, unit: 'mg' as const })),
  },
  {
    id: 'finasteride_hair',
    displayName: 'Finasteride (hair — 1 mg typical)',
    category: 'hair',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['Once daily'],
    strengths: [{ amount: 1, unit: 'mg' }, { amount: 5, unit: 'mg', label: '5 mg (BPH strength — off-label hair)' }],
  },
  {
    id: 'dutasteride',
    displayName: 'Dutasteride',
    category: 'hair',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['Once daily'],
    strengths: [{ amount: 0.5, unit: 'mg' }],
  },
  {
    id: 'minoxidil_topical',
    displayName: 'Minoxidil (topical)',
    category: 'hair',
    treatmentCategory: 'rx',
    routes: ['topical'],
    frequencies: ['Once daily', 'Twice daily'],
    strengths: [
      { amount: 2, unit: '%' },
      { amount: 5, unit: '%' },
    ],
  },
  {
    id: 'minoxidil_oral',
    displayName: 'Minoxidil (oral low dose)',
    category: 'hair',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['Once daily'],
    strengths: [0.625, 1.25, 2.5].map((amount) => ({ amount, unit: 'mg' as const })),
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
  },
  {
    id: 'spironolactone',
    displayName: 'Spironolactone',
    category: 'hair',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['Once daily', 'Twice daily'],
    strengths: [25, 50, 100].map((amount) => ({ amount, unit: 'mg' as const })),
  },
  {
    id: 'testosterone_cypionate',
    displayName: 'Testosterone cypionate (injectable)',
    category: 'hormone',
    treatmentCategory: 'rx',
    routes: ['IM', 'SQ'],
    frequencies: ['Every 1 week', 'Every 2 weeks', 'Every 3 weeks'],
    strengths: [100, 200].map((amount) => ({ amount, unit: 'mg' as const, label: `${amount} mg per mL vial (document volume in sig)` })),
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
  },
  {
    id: 'testosterone_enanthate',
    displayName: 'Testosterone enanthate (injectable)',
    category: 'hormone',
    treatmentCategory: 'rx',
    routes: ['IM', 'SQ'],
    frequencies: ['Every 1 week', 'Every 2 weeks'],
    strengths: [200].map((amount) => ({ amount, unit: 'mg' as const, label: '200 mg/mL typical (document volume in sig)' })),
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
  },
  {
    id: 'estradiol_patch',
    displayName: 'Estradiol (transdermal patch)',
    category: 'hormone',
    treatmentCategory: 'rx',
    routes: ['transdermal'],
    frequencies: ['Twice weekly', 'Once weekly'],
    strengths: [25, 37.5, 50, 75, 100].map((amount) => ({ amount, unit: 'mcg' as const, label: `${amount} mcg/day patch` })),
  },
  {
    id: 'estradiol_gel',
    displayName: 'Estradiol (transdermal gel)',
    category: 'hormone',
    treatmentCategory: 'rx',
    routes: ['transdermal'],
    frequencies: ['Once daily', 'Twice daily'],
    strengths: [0.5, 0.75, 1, 1.25, 1.5].map((amount) => ({ amount, unit: 'mg' as const, label: `${amount} mg/packet (verify pump brand)` })),
  },
  {
    id: 'levothyroxine',
    displayName: 'Levothyroxine (Synthroid / generic T4)',
    category: 'thyroid',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['Once daily fasting'],
    strengths: levothyroxineMcg,
    allowCustomStrength: true,
    defaultCustomUnit: 'mcg',
    defaultSig: 'Take on empty stomach; separate from calcium/iron.',
  },
  {
    id: 'tretinoin_topical',
    displayName: 'Tretinoin (topical)',
    category: 'derm',
    treatmentCategory: 'rx',
    routes: ['topical'],
    frequencies: ['Once nightly', 'Every other night'],
    strengths: [0.025, 0.05, 0.1].map((amount) => ({ amount, unit: '%' as const })),
  },
  {
    id: 'clindamycin_benzoyl_topical',
    displayName: 'Clindamycin + benzoyl peroxide (topical)',
    category: 'derm',
    treatmentCategory: 'rx',
    routes: ['topical'],
    frequencies: ['Once daily', 'Twice daily'],
    strengths: [
      { amount: 1, unit: '%', label: '1%/5% gel (example — pick match to SKU)' },
      { amount: 1.2, unit: '%', label: '1.2%/3.75% (example)' },
    ],
  },
  {
    id: 'hydroxyzine',
    displayName: 'Hydroxyzine',
    category: 'sleep_anxiety',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['Once daily at bedtime', 'As needed'],
    strengths: [10, 25, 50].map((amount) => ({ amount, unit: 'mg' as const })),
  },
  {
    id: 'trazodone',
    displayName: 'Trazodone (sleep / mood)',
    category: 'sleep_anxiety',
    treatmentCategory: 'rx',
    routes: ['PO'],
    frequencies: ['Once daily at bedtime'],
    strengths: [50, 100, 150].map((amount) => ({ amount, unit: 'mg' as const })),
  },
  {
    id: 'bpc157',
    displayName: 'BPC-157',
    category: 'peptide',
    treatmentCategory: 'supplement',
    routes: ['SQ', 'IM'],
    frequencies: ['Once daily', 'Every other day'],
    strengths: [],
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
    defaultSig: 'Verify legality and sourcing per your formulary.',
  },
  {
    id: 'tb500',
    displayName: 'TB-500 (thymosin beta-4)',
    category: 'peptide',
    treatmentCategory: 'supplement',
    routes: ['SQ', 'IM'],
    frequencies: ['Twice weekly', 'Weekly'],
    strengths: [],
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
  },
  {
    id: 'ipamorelin',
    displayName: 'Ipamorelin',
    category: 'peptide',
    treatmentCategory: 'supplement',
    routes: ['SQ'],
    frequencies: ['Once daily at bedtime', 'Five days on / two off'],
    strengths: [],
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
  },
  {
    id: 'cjc1295',
    displayName: 'CJC-1295',
    category: 'peptide',
    treatmentCategory: 'supplement',
    routes: ['SQ'],
    frequencies: ['Once daily at bedtime', 'Five days on / two off'],
    strengths: [],
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
  },
  {
    id: 'sermorelin',
    displayName: 'Sermorelin',
    category: 'peptide',
    treatmentCategory: 'supplement',
    routes: ['SQ'],
    frequencies: ['Once daily at bedtime'],
    strengths: [],
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
  },
  {
    id: 'bremelanotide_pt141',
    displayName: 'Bremelanotide (PT-141)',
    category: 'ed',
    treatmentCategory: 'rx',
    routes: ['SQ'],
    frequencies: ['As needed'],
    strengths: [1.75, 2].map((amount) => ({ amount, unit: 'mg' as const })),
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
  },
  {
    id: 'nad_plus',
    displayName: 'NAD+',
    category: 'peptide',
    treatmentCategory: 'supplement',
    routes: ['SQ', 'IM', 'IV'],
    frequencies: ['Weekly', 'Every other day'],
    strengths: [],
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
  },
  {
    id: 'glutathione',
    displayName: 'Glutathione',
    category: 'peptide',
    treatmentCategory: 'supplement',
    routes: ['SQ', 'IM', 'IV'],
    frequencies: ['Weekly', 'Every other day'],
    strengths: [],
    allowCustomStrength: true,
    defaultCustomUnit: 'mg',
  },
  // Weight support supplements
  supp({
    id: 'berberine_hcl',
    displayName: 'Berberine HCl',
    category: 'weight_support',
    strengths: [{ amount: 500, unit: 'mg' }],
    frequencies: ['Twice daily', 'Three times daily with meals'],
    defaultSig: 'Take 500 mg by mouth twice daily with meals.',
    defaultDispenseQuantity: '120 capsules',
  }),
  supp({
    id: 'green_tea_extract',
    displayName: 'Green tea extract (EGCG)',
    category: 'weight_support',
    strengths: [{ amount: 500, unit: 'mg' }],
    frequencies: ['Once daily', 'Twice daily'],
    defaultSig: 'Take 500 mg by mouth once daily in the morning.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'l_carnitine',
    displayName: 'L-Carnitine',
    category: 'weight_support',
    strengths: [{ amount: 1000, unit: 'mg' }],
    frequencies: ['Once daily', 'Twice daily'],
    defaultSig: 'Take 1,000 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'chromium_picolinate',
    displayName: 'Chromium picolinate',
    category: 'weight_support',
    strengths: [{ amount: 200, unit: 'mcg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 200 mcg by mouth once daily with food.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'alpha_lipoic_acid',
    displayName: 'Alpha-lipoic acid',
    category: 'weight_support',
    strengths: [{ amount: 300, unit: 'mg' }],
    frequencies: ['Once daily', 'Twice daily'],
    defaultSig: 'Take 300 mg by mouth twice daily.',
    defaultDispenseQuantity: '120 capsules',
  }),
  supp({
    id: 'glucomannan',
    displayName: 'Glucomannan fiber',
    category: 'weight_support',
    strengths: [{ amount: 1000, unit: 'mg' }],
    frequencies: ['Three times daily with meals'],
    defaultSig: 'Take 1,000 mg by mouth before meals with water.',
    defaultDispenseQuantity: '180 capsules',
  }),
  supp({
    id: 'inulin_fiber',
    displayName: 'Inulin prebiotic fiber',
    category: 'weight_support',
    strengths: [{ amount: 2000, unit: 'mg' }],
    frequencies: ['Once daily', 'Twice daily'],
    defaultSig: 'Take 2,000 mg by mouth once daily.',
    defaultDispenseQuantity: '90 capsules',
  }),
  supp({
    id: 'apple_cider_vinegar',
    displayName: 'Apple cider vinegar capsules',
    category: 'weight_support',
    strengths: [{ amount: 500, unit: 'mg' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take 500 mg by mouth twice daily with meals.',
    defaultDispenseQuantity: '120 capsules',
  }),

  // Libido / sexual wellness supplements
  supp({
    id: 'maca_root',
    displayName: 'Maca root',
    category: 'libido',
    strengths: [{ amount: 500, unit: 'mg' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take 500 mg by mouth twice daily.',
    defaultDispenseQuantity: '120 capsules',
  }),
  supp({
    id: 'tongkat_ali',
    displayName: 'Tongkat ali',
    category: 'libido',
    strengths: [{ amount: 200, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 200 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'tribulus_terrestris',
    displayName: 'Tribulus terrestris',
    category: 'libido',
    strengths: [{ amount: 500, unit: 'mg' }],
    frequencies: ['Once daily', 'Twice daily'],
    defaultSig: 'Take 500 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'horny_goat_weed',
    displayName: 'Horny goat weed',
    category: 'libido',
    strengths: [{ amount: 500, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 500 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'l_arginine',
    displayName: 'L-Arginine',
    category: 'libido',
    strengths: [{ amount: 1000, unit: 'mg' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take 1,000 mg by mouth twice daily.',
    defaultDispenseQuantity: '120 capsules',
  }),
  supp({
    id: 'l_citrulline',
    displayName: 'L-Citrulline',
    category: 'libido',
    strengths: [{ amount: 750, unit: 'mg' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take 750 mg by mouth twice daily.',
    defaultDispenseQuantity: '120 capsules',
  }),
  supp({
    id: 'saffron_extract',
    displayName: 'Saffron extract',
    category: 'libido',
    strengths: [{ amount: 30, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 30 mg by mouth once daily.',
    defaultDispenseQuantity: '30 capsules',
  }),

  // Hair / skin support supplements
  supp({
    id: 'biotin',
    displayName: 'Biotin',
    category: 'hair',
    strengths: [{ amount: 5000, unit: 'mcg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 5,000 mcg by mouth once daily.',
    defaultDispenseQuantity: '90 capsules',
  }),
  supp({
    id: 'saw_palmetto',
    displayName: 'Saw palmetto',
    category: 'hair',
    strengths: [{ amount: 320, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 320 mg by mouth once daily.',
    defaultDispenseQuantity: '60 softgels',
  }),
  supp({
    id: 'pumpkin_seed_oil',
    displayName: 'Pumpkin seed oil',
    category: 'hair',
    strengths: [{ amount: 1000, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 1,000 mg by mouth once daily.',
    defaultDispenseQuantity: '60 softgels',
  }),
  supp({
    id: 'marine_collagen',
    displayName: 'Marine collagen peptides',
    category: 'hair',
    strengths: [{ amount: 2500, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 2,500 mg by mouth once daily.',
    defaultDispenseQuantity: '30 packets',
  }),
  supp({
    id: 'silica',
    displayName: 'Silica (bamboo extract)',
    category: 'hair',
    strengths: [{ amount: 10, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 10 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'zinc_copper_hair',
    displayName: 'Zinc + copper complex',
    category: 'hair',
    strengths: [{ amount: 15, unit: 'mg', label: '15 mg zinc + copper cofactors per capsule' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 1 capsule by mouth once daily with food.',
    defaultDispenseQuantity: '60 capsules',
  }),

  // Joint health supplements
  supp({
    id: 'glucosamine_chondroitin',
    displayName: 'Glucosamine + chondroitin',
    category: 'joint_health',
    strengths: [{ amount: 1500, unit: 'mg', label: '1,500 mg glucosamine + chondroitin blend per serving' }],
    frequencies: ['Once daily', 'Twice daily'],
    defaultSig: 'Take 1 serving by mouth once daily with food.',
    defaultDispenseQuantity: '120 capsules',
  }),
  supp({
    id: 'msm',
    displayName: 'MSM (methylsulfonylmethane)',
    category: 'joint_health',
    strengths: [{ amount: 1000, unit: 'mg' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take 1,000 mg by mouth twice daily.',
    defaultDispenseQuantity: '120 capsules',
  }),
  supp({
    id: 'curcumin',
    displayName: 'Turmeric curcumin',
    category: 'joint_health',
    strengths: [{ amount: 500, unit: 'mg' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take 500 mg by mouth twice daily with food.',
    defaultDispenseQuantity: '120 capsules',
  }),
  supp({
    id: 'boswellia',
    displayName: 'Boswellia serrata',
    category: 'joint_health',
    strengths: [{ amount: 300, unit: 'mg' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take 300 mg by mouth twice daily.',
    defaultDispenseQuantity: '120 capsules',
  }),
  supp({
    id: 'ucii_collagen',
    displayName: 'Undenatured type II collagen (UC-II)',
    category: 'joint_health',
    strengths: [{ amount: 40, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 40 mg by mouth once daily at bedtime.',
    defaultDispenseQuantity: '30 capsules',
  }),
  supp({
    id: 'hyaluronic_oral',
    displayName: 'Hyaluronic acid (oral)',
    category: 'joint_health',
    strengths: [{ amount: 120, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 120 mg by mouth once daily.',
    defaultDispenseQuantity: '30 capsules',
  }),
  supp({
    id: 'omega3_fish_oil',
    displayName: 'Omega-3 fish oil',
    category: 'joint_health',
    strengths: [{ amount: 500, unit: 'mg', label: 'EPA/DHA combined per softgel' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take 500 mg by mouth twice daily with meals.',
    defaultDispenseQuantity: '120 softgels',
  }),

  // Regenerative / longevity supplements
  supp({
    id: 'nmn',
    displayName: 'NMN (nicotinamide mononucleotide)',
    category: 'regenerative_health',
    strengths: [{ amount: 500, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 500 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'nr',
    displayName: 'Nicotinamide riboside (NR)',
    category: 'regenerative_health',
    strengths: [{ amount: 300, unit: 'mg' }],
    frequencies: ['Once daily', 'Twice daily'],
    defaultSig: 'Take 300 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'resveratrol',
    displayName: 'Resveratrol',
    category: 'regenerative_health',
    strengths: [{ amount: 250, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 250 mg by mouth once daily with food.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'spermidine',
    displayName: 'Spermidine',
    category: 'regenerative_health',
    strengths: [{ amount: 10, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 10 mg by mouth once daily.',
    defaultDispenseQuantity: '30 capsules',
  }),
  supp({
    id: 'quercetin',
    displayName: 'Quercetin',
    category: 'regenerative_health',
    strengths: [{ amount: 500, unit: 'mg' }],
    frequencies: ['Once daily', 'Twice daily'],
    defaultSig: 'Take 500 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'fisetin',
    displayName: 'Fisetin',
    category: 'regenerative_health',
    strengths: [{ amount: 100, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 100 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'pterostilbene',
    displayName: 'Pterostilbene',
    category: 'regenerative_health',
    strengths: [{ amount: 100, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 100 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'astaxanthin',
    displayName: 'Astaxanthin',
    category: 'regenerative_health',
    strengths: [{ amount: 12, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 12 mg by mouth once daily with food.',
    defaultDispenseQuantity: '60 softgels',
  }),
  supp({
    id: 'coq10_ubiquinol',
    displayName: 'CoQ10 (ubiquinol)',
    category: 'regenerative_health',
    strengths: [{ amount: 100, unit: 'mg' }],
    frequencies: ['Once daily', 'Twice daily'],
    defaultSig: 'Take 100 mg by mouth once daily with food.',
    defaultDispenseQuantity: '60 softgels',
  }),
  supp({
    id: 'b12_methylcobalamin',
    displayName: 'Vitamin B12 (methylcobalamin)',
    category: 'regenerative_health',
    strengths: [{ amount: 1000, unit: 'mcg' }],
    frequencies: ['Once daily', 'Once weekly'],
    defaultSig: 'Take 1,000 mcg by mouth once daily.',
    defaultDispenseQuantity: '60 lozenges',
  }),

  // Male health supplements
  supp({
    id: 'ashwagandha',
    displayName: 'Ashwagandha',
    category: 'male_health',
    strengths: [{ amount: 600, unit: 'mg' }],
    frequencies: ['Once daily', 'Twice daily'],
    defaultSig: 'Take 600 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'boron',
    displayName: 'Boron',
    category: 'male_health',
    strengths: [{ amount: 6, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 6 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'lycopene',
    displayName: 'Lycopene',
    category: 'male_health',
    strengths: [{ amount: 20, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 20 mg by mouth once daily.',
    defaultDispenseQuantity: '60 softgels',
  }),
  supp({
    id: 'beta_sitosterol',
    displayName: 'Beta-sitosterol',
    category: 'male_health',
    strengths: [{ amount: 300, unit: 'mg' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take 300 mg by mouth twice daily.',
    defaultDispenseQuantity: '120 softgels',
  }),
  supp({
    id: 'vitamin_d3_k2',
    displayName: 'Vitamin D3 + K2',
    category: 'male_health',
    strengths: [{ amount: 5000, unit: 'mcg', label: 'D3 potency label may vary; verify IU equivalence' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take one softgel by mouth once daily with food.',
    defaultDispenseQuantity: '60 softgels',
  }),
  supp({
    id: 'magnesium_glycinate',
    displayName: 'Magnesium glycinate',
    category: 'male_health',
    strengths: [{ amount: 200, unit: 'mg' }],
    frequencies: ['Once daily', 'Twice daily'],
    defaultSig: 'Take 200 mg by mouth once daily in the evening.',
    defaultDispenseQuantity: '120 capsules',
  }),

  // Female health supplements
  supp({
    id: 'myo_inositol',
    displayName: 'Myo-inositol',
    category: 'female_health',
    strengths: [{ amount: 2000, unit: 'mg' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take 2,000 mg by mouth twice daily.',
    defaultDispenseQuantity: '120 scoops',
  }),
  supp({
    id: 'd_chiro_inositol',
    displayName: 'D-chiro-inositol',
    category: 'female_health',
    strengths: [{ amount: 50, unit: 'mg' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take 50 mg by mouth twice daily.',
    defaultDispenseQuantity: '120 capsules',
  }),
  supp({
    id: 'dim',
    displayName: 'DIM (diindolylmethane)',
    category: 'female_health',
    strengths: [{ amount: 200, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 200 mg by mouth once daily with food.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'black_cohosh',
    displayName: 'Black cohosh',
    category: 'female_health',
    strengths: [{ amount: 40, unit: 'mg' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take 40 mg by mouth twice daily.',
    defaultDispenseQuantity: '120 capsules',
  }),
  supp({
    id: 'evening_primrose_oil',
    displayName: 'Evening primrose oil',
    category: 'female_health',
    strengths: [{ amount: 1000, unit: 'mg' }],
    frequencies: ['Once daily', 'Twice daily'],
    defaultSig: 'Take 1,000 mg by mouth once daily with food.',
    defaultDispenseQuantity: '90 softgels',
  }),
  supp({
    id: 'iron_bisglycinate',
    displayName: 'Iron bisglycinate',
    category: 'female_health',
    strengths: [{ amount: 25, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 25 mg by mouth once daily.',
    defaultDispenseQuantity: '60 capsules',
  }),
  supp({
    id: 'prenatal_multivitamin',
    displayName: 'Prenatal multivitamin',
    category: 'female_health',
    strengths: [{ amount: 1, unit: 'mg', label: '1 serving (multi-ingredient formula)' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take one serving by mouth once daily with food.',
    defaultDispenseQuantity: '30 servings',
  }),
  supp({
    id: 'prenatal_omega3',
    displayName: 'Prenatal omega-3 DHA',
    category: 'female_health',
    strengths: [{ amount: 300, unit: 'mg' }],
    frequencies: ['Once daily'],
    defaultSig: 'Take 300 mg DHA by mouth once daily.',
    defaultDispenseQuantity: '30 softgels',
  }),
  supp({
    id: 'calcium_magnesium',
    displayName: 'Calcium + magnesium',
    category: 'female_health',
    strengths: [{ amount: 500, unit: 'mg', label: 'Calcium amount per serving; includes magnesium blend' }],
    frequencies: ['Twice daily'],
    defaultSig: 'Take one serving by mouth twice daily.',
    defaultDispenseQuantity: '120 tablets',
  }),
]

const byId = new Map(MEDICATION_CATALOG.map((e) => [e.id, e]))

export function getMedicationCatalogEntry(id: string): MedicationCatalogEntry | undefined {
  return byId.get(id)
}

export function formatCatalogStrengthOption(s: CatalogStrength): string {
  const base = `${s.amount} ${s.unit}`
  return s.label ? `${base} — ${s.label}` : base
}

/** One-line summary for internal patient list */
export function formatDosageSummary(
  dosage: Record<string, unknown> | null | undefined,
  metadata?: Record<string, unknown> | null
): string {
  const parts: string[] = []
  if (dosage && typeof dosage === 'object') {
    const drug = typeof dosage.drug_display === 'string' ? dosage.drug_display : null
    const st = dosage.strength as { amount?: unknown; unit?: unknown } | undefined
    const amt = st?.amount
    const unit = st?.unit
    const route = typeof dosage.route === 'string' ? dosage.route : null
    const freq = typeof dosage.frequency === 'string' ? dosage.frequency : null
    const qty = typeof dosage.dispense_quantity === 'string' ? dosage.dispense_quantity : null
    if (drug) parts.push(drug)
    if (typeof amt === 'number' && typeof unit === 'string') parts.push(`${amt} ${unit}`)
    if (route) parts.push(route)
    if (freq) parts.push(freq)
    if (qty) parts.push(`Qty ${qty}`)
  }

  const m = metadata ?? {}
  const rx = m.rx_supply as { duration_days?: unknown; refills_authorized?: unknown } | undefined
  if (rx && typeof rx.duration_days === 'number') {
    parts.push(`${rx.duration_days}-day fill`)
  }
  if (rx && typeof rx.refills_authorized === 'number') {
    parts.push(`${rx.refills_authorized} refill(s)`)
  }
  const ch = typeof m.fulfillment_channel === 'string' ? m.fulfillment_channel : null
  if (ch === '503a_partner') parts.push('503A')
  if (ch === 'retail_erx_planned') parts.push('retail eRx (planned)')
  const pr = m.prescriber as { display_name?: unknown; npi?: unknown } | undefined
  if (pr && typeof pr.display_name === 'string' && pr.display_name.trim()) {
    const npi = typeof pr.npi === 'string' ? pr.npi : ''
    parts.push(npi ? `Rx ${pr.display_name.trim()} NPI ${npi}` : `Rx ${pr.display_name.trim()}`)
  }

  return parts.length > 0 ? parts.join(' · ') : '—'
}

export type BuiltCatalogDosage = {
  drug_display: string
  strength: { amount: number; unit: StrengthUnit }
  route: string
  frequency: string
  dispense_quantity?: string
  sig?: string
  cycling?: string
  hold_if?: string
  catalog_medication_id: string
  emr_source: 'medication_catalog_v1'
}

export function buildDosagePayload(args: {
  entry: MedicationCatalogEntry
  strengthAmount: number
  strengthUnit: StrengthUnit
  route: string
  frequency: string
  dispenseQuantity?: string
  sig?: string
  cycling?: string
  hold_if?: string
}): BuiltCatalogDosage {
  const sig = (args.sig ?? '').trim() || args.entry.defaultSig
  const dispenseQuantity = (args.dispenseQuantity ?? '').trim() || args.entry.defaultDispenseQuantity
  return {
    drug_display: args.entry.displayName,
    strength: { amount: args.strengthAmount, unit: args.strengthUnit },
    route: args.route,
    frequency: args.frequency,
    ...(dispenseQuantity ? { dispense_quantity: dispenseQuantity } : {}),
    ...(sig ? { sig } : {}),
    ...(args.cycling?.trim() ? { cycling: args.cycling.trim() } : {}),
    ...(args.hold_if?.trim() ? { hold_if: args.hold_if.trim() } : {}),
    catalog_medication_id: args.entry.id,
    emr_source: 'medication_catalog_v1',
  }
}

export function isStrengthAllowed(
  entry: MedicationCatalogEntry,
  amount: number,
  unit: StrengthUnit
): boolean {
  if (entry.strengths.some((s) => s.amount === amount && s.unit === unit)) return true
  if (entry.allowCustomStrength) return Number.isFinite(amount) && amount > 0
  return false
}

export function isRouteAllowed(entry: MedicationCatalogEntry, route: string): boolean {
  return entry.routes.includes(route)
}

export function isFrequencyAllowed(entry: MedicationCatalogEntry, frequency: string): boolean {
  return entry.frequencies.includes(frequency)
}
