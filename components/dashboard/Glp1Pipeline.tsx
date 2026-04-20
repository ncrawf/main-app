import { GLP1_PIPELINE } from '@/lib/dashboard/glp1StatusCopy'

type Props = {
  /** Current focus step index (0–4). */
  activeIndex: number
}

export function Glp1Pipeline({ activeIndex }: Props) {
  return (
    <div className="overflow-x-auto pb-2">
      <ol className="flex min-w-[640px] gap-2 sm:min-w-0 sm:flex-wrap sm:justify-between">
        {GLP1_PIPELINE.map((step, i) => {
          const done = i < activeIndex
          const current = i === activeIndex
          return (
            <li
              key={step.phase}
              className="flex flex-1 flex-col gap-1 rounded-lg border border-neutral-200 bg-neutral-50/80 px-3 py-3 sm:min-w-[110px]"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    done
                      ? 'bg-emerald-600 text-white'
                      : current
                        ? 'bg-neutral-900 text-white'
                        : 'bg-white text-neutral-500 ring-1 ring-neutral-200'
                  }`}
                  aria-hidden
                >
                  {done ? '✓' : i + 1}
                </span>
                <span className="text-sm font-semibold text-neutral-900">{step.title}</span>
              </div>
              <p className="text-xs leading-snug text-neutral-600">{step.short}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
