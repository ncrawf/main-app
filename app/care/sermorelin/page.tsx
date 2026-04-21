import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function SermorelinLandingPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-neutral-900">Sermorelin care</h1>
      <p className="mt-3 text-sm text-neutral-700">
        Explore sermorelin with a clinician-guided intake, medication review, and ongoing follow-up.
      </p>
      <div className="mt-5 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-neutral-700">
          Start with intake so the team can review your goals, history, and treatment fit.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/forms/glp1-intake?pathway=peptides"
            className="rounded-md border border-neutral-900 bg-neutral-900 px-3 py-2 text-xs font-semibold text-white"
          >
            Start intake
          </Link>
          <Link href="/" className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs font-semibold text-neutral-700">
            Home
          </Link>
          <Link
            href="/search?q=sermorelin"
            className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs font-semibold text-neutral-700"
          >
            Search
          </Link>
        </div>
      </div>
    </main>
  )
}
