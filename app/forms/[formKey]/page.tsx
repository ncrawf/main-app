import { notFound } from 'next/navigation'
import { DynamicForm } from '@/components/DynamicForm'
import { getFormDefinition } from '@/lib/forms'

type Props = {
  params: Promise<{ formKey: string }>
  searchParams: Promise<{ pathway?: string }>
}

const PATHWAY_OPTIONS = new Set(['weight_loss', 'ed', 'hair', 'hormone_peptide', 'general_wellness'])

export default async function FormByKeyPage({ params, searchParams }: Props) {
  const { formKey } = await params
  const sp = await searchParams
  const def = getFormDefinition(formKey)
  if (!def) notFound()

  const pathway = typeof sp.pathway === 'string' ? sp.pathway : ''
  const initialValues = PATHWAY_OPTIONS.has(pathway) ? { primary_pathway: pathway } : undefined

  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">MAIN</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">{def.title}</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Complete the steps below. Your answers are stored securely for clinical review.
      </p>
      <div className="mt-10">
        <DynamicForm definition={def} initialValues={initialValues} />
      </div>
    </main>
  )
}
