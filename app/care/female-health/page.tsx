import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function FemaleHealthLandingPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-neutral-900">Female health</h1>
      <p className="mt-3 text-sm text-neutral-700">
        Comprehensive female hormone and wellness support with personalized intake and clinician review.
      </p>
      <div className="mt-5 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-neutral-700">
          Share symptoms, cycle/hormone goals, and prior labs so the care team can recommend the next best step.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/forms/glp1-intake?pathway=female_health"
            className="rounded-md border border-neutral-900 bg-neutral-900 px-3 py-2 text-xs font-semibold text-white"
          >
            Start intake
          </Link>
          <Link
            href="/search?q=female+health"
            className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs font-semibold text-neutral-700"
          >
            Back to search
          </Link>
        </div>
      </div>
    </main>
  )
}
