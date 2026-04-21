'use client'

import type { GenericRefillQuestionnaireV1 } from '@/lib/refill/genericRefillQuestionnaire'
import type { Glp1RefillQuestionnaireV2 } from '@/lib/refill/glp1RefillQuestionnaire'

function FieldLabel({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="block text-xs font-medium text-neutral-700">
      {children}
    </label>
  )
}

export function Glp1RefillCheckInFields({
  value,
  onChange,
  disabled,
}: {
  value: Glp1RefillQuestionnaireV2
  onChange: (next: Glp1RefillQuestionnaireV2) => void
  disabled?: boolean
}) {
  const set = (patch: Partial<Glp1RefillQuestionnaireV2>) => onChange({ ...value, ...patch })

  const sevOpts = ['none', 'mild', 'moderate', 'severe'] as const
  const energyOpts = ['very_low', 'low', 'ok', 'good', 'great'] as const
  const weightOpts = ['lost', 'gained', 'stable', 'prefer_not'] as const

  return (
    <div className="space-y-4 rounded-lg border border-emerald-200 bg-emerald-50/40 px-3 py-4">
      <p className="text-xs font-semibold text-emerald-950">GLP-1 reorder check-in</p>
      <p className="text-[11px] text-emerald-900/90">
        A quick safety screen before we process your refill—similar to what you&apos;d see on other telehealth
        platforms.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="glp1-energy">Energy level lately</FieldLabel>
          <select
            id="glp1-energy"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.energy}
            onChange={(e) => set({ energy: e.target.value as Glp1RefillQuestionnaireV2['energy'] })}
            disabled={disabled}
          >
            {energyOpts.map((o) => (
              <option key={o} value={o}>
                {o === 'very_low'
                  ? 'Very low'
                  : o === 'low'
                    ? 'Low'
                    : o === 'ok'
                      ? 'OK'
                      : o === 'good'
                        ? 'Good'
                        : 'Great'}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2 grid gap-2 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="glp1-nausea">Nausea</FieldLabel>
            <select
              id="glp1-nausea"
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={value.nausea}
              onChange={(e) => set({ nausea: e.target.value as Glp1RefillQuestionnaireV2['nausea'] })}
              disabled={disabled}
            >
              {sevOpts.map((o) => (
                <option key={o} value={o}>
                  {o.charAt(0).toUpperCase() + o.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <FieldLabel htmlFor="glp1-nausea-notes">Nausea notes (optional)</FieldLabel>
            <textarea
              id="glp1-nausea-notes"
              rows={2}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={value.nausea_notes}
              onChange={(e) => set({ nausea_notes: e.target.value })}
              disabled={disabled}
            />
          </div>
        </div>
        <div className="sm:col-span-2 grid gap-2 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="glp1-gi">Other GI symptoms (bloating, diarrhea, constipation)</FieldLabel>
            <select
              id="glp1-gi"
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={value.gi_symptoms}
              onChange={(e) => set({ gi_symptoms: e.target.value as Glp1RefillQuestionnaireV2['gi_symptoms'] })}
              disabled={disabled}
            >
              {sevOpts.map((o) => (
                <option key={o} value={o}>
                  {o.charAt(0).toUpperCase() + o.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <FieldLabel htmlFor="glp1-gi-notes">GI notes (optional)</FieldLabel>
            <textarea
              id="glp1-gi-notes"
              rows={2}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={value.gi_notes}
              onChange={(e) => set({ gi_notes: e.target.value })}
              disabled={disabled}
            />
          </div>
        </div>
        <div>
          <FieldLabel htmlFor="glp1-abd">Abdominal pain / discomfort</FieldLabel>
          <select
            id="glp1-abd"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.abdominal_pain}
            onChange={(e) => set({ abdominal_pain: e.target.value as Glp1RefillQuestionnaireV2['abdominal_pain'] })}
            disabled={disabled}
          >
            {sevOpts.map((o) => (
              <option key={o} value={o}>
                {o.charAt(0).toUpperCase() + o.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="glp1-abd-notes">Notes on abdominal pain (optional)</FieldLabel>
          <textarea
            id="glp1-abd-notes"
            rows={2}
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.abdominal_notes}
            onChange={(e) => set({ abdominal_notes: e.target.value })}
            disabled={disabled}
            placeholder="Location, timing, what makes it better or worse…"
          />
        </div>
        <div>
          <FieldLabel htmlFor="glp1-weight">Weight change since last fill</FieldLabel>
          <select
            id="glp1-weight"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.weight_change}
            onChange={(e) => set({ weight_change: e.target.value as Glp1RefillQuestionnaireV2['weight_change'] })}
            disabled={disabled}
          >
            {weightOpts.map((o) => (
              <option key={o} value={o}>
                {o === 'lost'
                  ? 'Lost weight'
                  : o === 'gained'
                    ? 'Gained weight'
                    : o === 'stable'
                      ? 'About the same'
                      : 'Prefer not to say'}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="glp1-weight-detail">Approx. change (optional)</FieldLabel>
          <input
            id="glp1-weight-detail"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.weight_change_detail}
            onChange={(e) => set({ weight_change_detail: e.target.value })}
            disabled={disabled}
            placeholder="e.g. ~6 lbs down"
          />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="glp1-target">Goal or target weight (optional)</FieldLabel>
          <input
            id="glp1-target"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.target_weight_or_goal}
            onChange={(e) => set({ target_weight_or_goal: e.target.value })}
            disabled={disabled}
          />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="glp1-adherent">Taking this medication as prescribed?</FieldLabel>
          <select
            id="glp1-adherent"
            className="mt-1 w-full max-w-xs rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.taking_medication_as_prescribed}
            onChange={(e) =>
              set({ taking_medication_as_prescribed: e.target.value as Glp1RefillQuestionnaireV2['taking_medication_as_prescribed'] })
            }
            disabled={disabled}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {value.taking_medication_as_prescribed === 'no' ? (
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="glp1-adh-notes">Explain missed or changed doses</FieldLabel>
            <textarea
              id="glp1-adh-notes"
              rows={2}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={value.adherence_notes}
              onChange={(e) => set({ adherence_notes: e.target.value })}
              disabled={disabled}
            />
          </div>
        ) : null}
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="glp1-other">Anything else we should know?</FieldLabel>
          <textarea
            id="glp1-other"
            rows={2}
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.other_concerns}
            onChange={(e) => set({ other_concerns: e.target.value })}
            disabled={disabled}
            placeholder="Optional — new symptoms, travel, pregnancy, etc."
          />
        </div>
        <div>
          <FieldLabel htmlFor="glp1-newmed">New medications or dose changes?</FieldLabel>
          <select
            id="glp1-newmed"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.new_medications_or_dose_changes}
            onChange={(e) =>
              set({ new_medications_or_dose_changes: e.target.value as Glp1RefillQuestionnaireV2['new_medications_or_dose_changes'] })
            }
            disabled={disabled}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="glp1-hist">Medical history changes?</FieldLabel>
          <select
            id="glp1-hist"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.medical_history_changes}
            onChange={(e) =>
              set({ medical_history_changes: e.target.value as Glp1RefillQuestionnaireV2['medical_history_changes'] })
            }
            disabled={disabled}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        {value.new_medications_or_dose_changes === 'yes' ? (
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="glp1-newmed-det">Describe medication changes</FieldLabel>
            <textarea
              id="glp1-newmed-det"
              rows={2}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={value.new_medications_detail}
              onChange={(e) => set({ new_medications_detail: e.target.value })}
              disabled={disabled}
            />
          </div>
        ) : null}
        {value.medical_history_changes === 'yes' ? (
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="glp1-hist-det">Describe history changes</FieldLabel>
            <textarea
              id="glp1-hist-det"
              rows={2}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={value.medical_history_detail}
              onChange={(e) => set({ medical_history_detail: e.target.value })}
              disabled={disabled}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export function GenericRxRefillCheckInFields({
  value,
  onChange,
  disabled,
}: {
  value: GenericRefillQuestionnaireV1
  onChange: (next: GenericRefillQuestionnaireV1) => void
  disabled?: boolean
}) {
  const set = (patch: Partial<GenericRefillQuestionnaireV1>) => onChange({ ...value, ...patch })
  const energyOpts = ['very_low', 'low', 'ok', 'good', 'great'] as const
  const painOpts = ['none', 'mild', 'moderate', 'severe'] as const

  return (
    <div className="space-y-4 rounded-lg border border-sky-200 bg-sky-50/50 px-3 py-4">
      <p className="text-xs font-semibold text-sky-950">Quick check-in before refill</p>
      <p className="text-[11px] text-sky-900/90">Help your clinician renew safely with a few questions.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="gen-energy">Energy level</FieldLabel>
          <select
            id="gen-energy"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.energy}
            onChange={(e) => set({ energy: e.target.value as GenericRefillQuestionnaireV1['energy'] })}
            disabled={disabled}
          >
            {energyOpts.map((o) => (
              <option key={o} value={o}>
                {o === 'very_low' ? 'Very low' : o === 'low' ? 'Low' : o === 'ok' ? 'OK' : o === 'good' ? 'Good' : 'Great'}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="gen-abd">Abdominal pain / discomfort</FieldLabel>
          <select
            id="gen-abd"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.abdominal_pain}
            onChange={(e) => set({ abdominal_pain: e.target.value as GenericRefillQuestionnaireV1['abdominal_pain'] })}
            disabled={disabled}
          >
            {painOpts.map((o) => (
              <option key={o} value={o}>
                {o.charAt(0).toUpperCase() + o.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="gen-feel">How have you been feeling on this medication?</FieldLabel>
          <textarea
            id="gen-feel"
            rows={3}
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.how_you_are_feeling}
            onChange={(e) => set({ how_you_are_feeling: e.target.value })}
            disabled={disabled}
            placeholder="Side effects, benefits, or “doing well” — at least a short sentence."
          />
        </div>
        <div>
          <FieldLabel htmlFor="gen-sym">New symptoms or concerns?</FieldLabel>
          <select
            id="gen-sym"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.new_symptoms_or_concerns}
            onChange={(e) =>
              set({ new_symptoms_or_concerns: e.target.value as GenericRefillQuestionnaireV1['new_symptoms_or_concerns'] })
            }
            disabled={disabled}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="gen-med">Medication or dose changes?</FieldLabel>
          <select
            id="gen-med"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
            value={value.medication_changes}
            onChange={(e) =>
              set({ medication_changes: e.target.value as GenericRefillQuestionnaireV1['medication_changes'] })
            }
            disabled={disabled}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        {value.new_symptoms_or_concerns === 'yes' ? (
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="gen-sym-det">Describe symptoms or concerns</FieldLabel>
            <textarea
              id="gen-sym-det"
              rows={2}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={value.new_symptoms_detail}
              onChange={(e) => set({ new_symptoms_detail: e.target.value })}
              disabled={disabled}
            />
          </div>
        ) : null}
        {value.medication_changes === 'yes' ? (
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="gen-med-det">Describe changes</FieldLabel>
            <textarea
              id="gen-med-det"
              rows={2}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={value.medication_changes_detail}
              onChange={(e) => set({ medication_changes_detail: e.target.value })}
              disabled={disabled}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}
