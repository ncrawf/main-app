import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function Coq10ShopPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-neutral-900">CoQ10 (Ubiquinol)</h1>
      <p className="mt-3 text-sm text-neutral-700">
        CoQ10 supplement support for mitochondrial energy and cardiometabolic wellness routines.
      </p>
      <div className="mt-5 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-neutral-700">
          Ready to add this to your plan? Start intake so the team can align supplement choices with your care goals.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/forms/glp1-intake?pathway=supplements"
            className="rounded-md border border-neutral-900 bg-neutral-900 px-3 py-2 text-xs font-semibold text-white"
          >
            Buy supplement
          </Link>
          <Link
            href="/search?q=coq10"
            className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs font-semibold text-neutral-700"
          >
            Back to search
          </Link>
        </div>
      </div>
    </main>
  )
}
