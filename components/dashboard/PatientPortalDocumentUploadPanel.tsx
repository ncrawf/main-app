'use client'

import { useRouter } from 'next/navigation'
import { useRef, useState, useTransition } from 'react'
import { toast } from 'sonner'

type TreatmentOpt = { id: string; display_name: string }

export function PatientPortalDocumentUploadPanel({
  patientId,
  treatmentOptions,
}: {
  patientId: string
  /** Optional: link upload to a treatment row (e.g. GLP-1 refill context). */
  treatmentOptions?: TreatmentOpt[]
}) {
  const router = useRouter()
  const fileRef = useRef<HTMLInputElement>(null)
  const [diagnosticKind, setDiagnosticKind] = useState('lab')
  const [title, setTitle] = useState('')
  const [treatmentItemId, setTreatmentItemId] = useState('')
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  const hasTreatmentLink = (treatmentOptions?.length ?? 0) > 0

  return (
    <section id="lab-document-upload" className="scroll-mt-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-neutral-900">Upload labs or diagnostics</h3>
      <p className="mt-1 text-sm text-neutral-600">
        PDF or clear photos of outside lab results, imaging reports, or other documents. Your care team will review
        what you attach.
      </p>
      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor="portal-doc-kind" className="block text-xs font-medium text-neutral-700">
            Document type
          </label>
          <select
            id="portal-doc-kind"
            value={diagnosticKind}
            onChange={(e) => setDiagnosticKind(e.target.value)}
            disabled={pending}
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
          >
            <option value="lab">Lab results</option>
            <option value="imaging">Imaging report (X-ray, CT, MRI, DEXA, etc.)</option>
            <option value="pathology">Pathology</option>
            <option value="infectious">Infectious disease testing</option>
            <option value="other">Other diagnostic</option>
          </select>
        </div>
        <div>
          <label htmlFor="portal-doc-title" className="block text-xs font-medium text-neutral-700">
            Short label (optional)
          </label>
          <input
            id="portal-doc-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={pending}
            placeholder="e.g. Quest CMP 4/1/26"
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
          />
        </div>
        {hasTreatmentLink ? (
          <div>
            <label htmlFor="portal-doc-treatment" className="block text-xs font-medium text-neutral-700">
              Related treatment (optional)
            </label>
            <select
              id="portal-doc-treatment"
              value={treatmentItemId}
              onChange={(e) => setTreatmentItemId(e.target.value)}
              disabled={pending}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
            >
              <option value="">— Not specific to one medication —</option>
              {treatmentOptions!.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.display_name}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <div>
          <label htmlFor="portal-doc-file" className="block text-xs font-medium text-neutral-700">
            File (PDF, JPG, PNG, or WEBP — max 10MB)
          </label>
          <input
            ref={fileRef}
            id="portal-doc-file"
            type="file"
            accept=".pdf,application/pdf,image/jpeg,image/png,image/webp"
            disabled={pending}
            className="mt-1 block w-full text-sm text-neutral-700 file:mr-3 file:rounded-md file:border-0 file:bg-neutral-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-neutral-900 hover:file:bg-neutral-200"
          />
        </div>
        <button
          type="button"
          disabled={pending}
          onClick={() =>
            start(async () => {
              setMsg('')
              const input = fileRef.current
              const file = input?.files?.[0]
              if (!file) {
                const err = 'Choose a file to upload.'
                setMsg(err)
                toast.error(err)
                return
              }
              const fd = new FormData()
              fd.set('patientId', patientId)
              fd.set('diagnosticKind', diagnosticKind)
              fd.set('file', file)
              if (title.trim()) fd.set('title', title.trim())
              if (treatmentItemId) fd.set('treatmentItemId', treatmentItemId)

              const res = await fetch('/api/patient-portal/patient-document-upload', {
                method: 'POST',
                body: fd,
              })
              const json: { error?: string; ok?: boolean } = await res.json().catch(() => ({}))
              if (!res.ok) {
                const err = json.error || 'Upload failed'
                setMsg(err)
                toast.error(err)
                return
              }
              setMsg('Upload received. Your care team can review it in your chart.')
              setTitle('')
              setTreatmentItemId('')
              if (input) input.value = ''
              toast.success('Document uploaded')
              router.refresh()
            })
          }
          className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? 'Uploading…' : 'Upload document'}
        </button>
        {msg ? <p className="text-sm text-neutral-700">{msg}</p> : null}
      </div>
    </section>
  )
}
