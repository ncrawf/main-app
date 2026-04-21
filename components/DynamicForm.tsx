'use client'

import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import type { FormDefinition } from '@/lib/forms/types'
import { isFieldVisible } from '@/lib/forms/visibility'
import { formatUsDobInputDisplay } from '@/lib/format/usDobDisplay'
import { formatUsPhoneInputDisplay } from '@/lib/format/usPhoneDisplay'

type Props = {
  definition: FormDefinition
  initialValues?: Record<string, FormValue | undefined>
}
type FormValue = string | string[]
type FileMap = Record<string, File[]>
const MAX_FILES_PER_FIELD = 10
const MAX_TOTAL_BYTES_PER_FIELD = 50 * 1024 * 1024

function buildInitialValues(
  definition: FormDefinition,
  incoming?: Record<string, FormValue | undefined>
): Record<string, FormValue> {
  if (!incoming) return {}
  const out: Record<string, FormValue> = {}
  for (const step of definition.steps) {
    for (const field of step.fields) {
      const raw = incoming[field.name]
      if (raw == null) continue
      if (field.type === 'chips') {
        if (Array.isArray(raw)) {
          out[field.name] = raw.filter((v): v is string => typeof v === 'string')
        } else if (typeof raw === 'string' && raw.trim()) {
          out[field.name] = [raw.trim()]
        }
        continue
      }
      if (typeof raw === 'string') {
        out[field.name] = raw
      }
    }
  }
  return out
}

function titleCaseWords(value: string): string {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const lower = word.toLowerCase()
      return lower[0] ? lower[0].toUpperCase() + lower.slice(1) : lower
    })
    .join(' ')
}

function sentenceCase(value: string): string {
  const trimmed = value.trim()
  if (!trimmed) return ''
  return trimmed[0].toUpperCase() + trimmed.slice(1)
}

function applyAutoCapitalize(value: string, mode?: 'words' | 'sentences'): string {
  if (!mode) return value
  return mode === 'words' ? titleCaseWords(value) : sentenceCase(value)
}

function asString(value: FormValue | undefined): string {
  if (typeof value === 'string') return value
  return ''
}

function asArray(value: FormValue | undefined): string[] {
  if (Array.isArray(value)) return value
  return []
}

function fileIdentity(file: File): string {
  return `${file.name}:${file.size}:${file.lastModified}`
}

function mergeFiles(existing: File[], incoming: File[], multiple?: boolean): File[] {
  if (!multiple) return incoming.slice(0, 1)
  const next = [...existing]
  const seen = new Set(existing.map(fileIdentity))
  for (const file of incoming) {
    const id = fileIdentity(file)
    if (seen.has(id)) continue
    seen.add(id)
    next.push(file)
  }
  return next
}

function bytesToMb(bytes: number): string {
  return (bytes / (1024 * 1024)).toFixed(1)
}

async function uploadAttachmentWithProgress(params: {
  formKey: string
  patientId: string
  submissionId: string
  fieldName: string
  file: File
  onProgress: (pct: number) => void
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const fd = new FormData()
  fd.append('patientId', params.patientId)
  fd.append('submissionId', params.submissionId)
  fd.append('fieldName', params.fieldName)
  fd.append('file', params.file)

  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', `/api/forms/${params.formKey}/attachments`)
    xhr.upload.onprogress = (event) => {
      if (!event.lengthComputable) return
      const pct = Math.max(0, Math.min(100, Math.round((event.loaded / event.total) * 100)))
      params.onProgress(pct)
    }
    xhr.onerror = () => resolve({ ok: false, error: 'Upload failed due to network error.' })
    xhr.onload = () => {
      let body: { error?: string } = {}
      try {
        body = JSON.parse(xhr.responseText || '{}') as { error?: string }
      } catch {
        // noop
      }
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve({ ok: true })
        return
      }
      resolve({ ok: false, error: body.error || 'Upload failed.' })
    }
    xhr.send(fd)
  })
}

export function DynamicForm({ definition, initialValues }: Props) {
  const router = useRouter()
  const emptyValues = useMemo(() => {
    const o: Record<string, FormValue> = {}
    for (const s of definition.steps) {
      for (const f of s.fields) {
        o[f.name] = f.type === 'chips' ? [] : ''
      }
    }
    return o
  }, [definition])

  const [values, setValues] = useState<Record<string, FormValue>>(() => ({
    ...emptyValues,
    ...buildInitialValues(definition, initialValues),
  }))
  const [fileValues, setFileValues] = useState<FileMap>({})
  const [step, setStep] = useState(0)
  const [message, setMessage] = useState('')
  const [pending, setPending] = useState(false)
  const [dragActiveField, setDragActiveField] = useState<string | null>(null)
  const [uploadProgress, setUploadProgress] = useState<number | null>(null)
  const [uploadStatus, setUploadStatus] = useState('')

  const steps = definition.steps
  const total = steps.length
  const isLast = step === total - 1
  const current = steps[step]
  const visibleFields = current.fields.filter((field) => isFieldVisible(field, values as Record<string, unknown>))

  function update(name: string, value: FormValue) {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function updateFiles(name: string, files: File[]) {
    setFileValues((prev) => ({ ...prev, [name]: files }))
  }

  function validateAndMergeFiles(params: {
    existing: File[]
    incoming: File[]
    multiple?: boolean
  }): File[] | null {
    const merged = mergeFiles(params.existing, params.incoming, params.multiple)
    if (merged.length > MAX_FILES_PER_FIELD) {
      setMessage(`You can upload up to ${MAX_FILES_PER_FIELD} files in this section.`)
      return null
    }
    const totalBytes = merged.reduce((sum, f) => sum + f.size, 0)
    if (totalBytes > MAX_TOTAL_BYTES_PER_FIELD) {
      setMessage(
        `Total upload size is too large (${bytesToMb(totalBytes)} MB). Limit is ${bytesToMb(
          MAX_TOTAL_BYTES_PER_FIELD
        )} MB.`
      )
      return null
    }
    return merged
  }

  function fileFields() {
    const out: Array<{ name: string; files: File[] }> = []
    for (const stepDef of definition.steps) {
      for (const field of stepDef.fields) {
        if (field.type !== 'file') continue
        const files = fileValues[field.name] ?? []
        if (files.length > 0) out.push({ name: field.name, files })
      }
    }
    return out
  }

  async function finalize() {
    setPending(true)
    setMessage('')
    try {
      const answersPayload: Record<string, unknown> = { ...values }
      if (typeof answersPayload.dob === 'string' && answersPayload.dob) {
        answersPayload.dob = formatUsDobInputDisplay(answersPayload.dob)
      }

      const res = await fetch(`/api/forms/${definition.key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: answersPayload }),
      })
      const json: { error?: string; submissionId?: string; patientId?: string; portalToken?: string | null } =
        await res.json()
      if (!res.ok) {
        setMessage(json.error || 'Request failed')
        return
      }
      if (json.patientId && json.submissionId) {
        const uploads = fileFields()
        if (uploads.length > 0) {
          const totalFiles = uploads.reduce((sum, entry) => sum + entry.files.length, 0)
          let completed = 0
          let uploadError: string | null = null
          setUploadProgress(0)
          for (const entry of uploads) {
            for (const file of entry.files) {
              setUploadStatus(`Uploading ${completed + 1}/${totalFiles}: ${file.name}`)
              const upRes = await uploadAttachmentWithProgress({
                formKey: definition.key,
                patientId: json.patientId,
                submissionId: json.submissionId,
                fieldName: entry.name,
                file,
                onProgress: (pct) => {
                  const overall = Math.round(((completed + pct / 100) / totalFiles) * 100)
                  setUploadProgress(overall)
                },
              })
              if (!upRes.ok) {
                uploadError = upRes.error || 'Intake saved, but one or more files failed to upload.'
                break
              }
              completed += 1
              setUploadProgress(Math.round((completed / totalFiles) * 100))
            }
            if (uploadError) {
              break
            }
          }
          if (uploadError) {
            setMessage(uploadError)
            setUploadStatus('')
            setUploadProgress(null)
            return
          }
          setUploadStatus('')
          setUploadProgress(null)
        }
      }
      if (json.patientId) {
        if (json.portalToken) {
          const next = encodeURIComponent(`/dashboard/${json.patientId}?welcome=1&intake=1`)
          router.push(`/api/patient-portal/session?token=${encodeURIComponent(json.portalToken)}&next=${next}`)
          return
        }
        router.push(`/dashboard/${json.patientId}?welcome=1&intake=1`)
        return
      }
      setMessage('Saved.')
      setValues({ ...emptyValues })
      setStep(0)
    } finally {
      setPending(false)
    }
  }

  function onStepSubmit(e: React.FormEvent) {
    e.preventDefault()
    for (const f of visibleFields) {
      if (!f.required) continue
      if (f.name === 'phone') {
        const digits = asString(values.phone).replace(/\D/g, '')
        if (digits.length !== 10) {
          setMessage('Enter a complete 10-digit US phone number.')
          return
        }
        continue
      }
      if (f.name === 'dob') {
        const digits = asString(values.dob).replace(/\D/g, '')
        if (digits.length !== 8) {
          setMessage('Enter your full date of birth (mm/dd/yyyy).')
          return
        }
        continue
      }
      if (f.type === 'chips') {
        if (asArray(values[f.name]).length === 0) {
          setMessage(`Please select ${f.label}.`)
          return
        }
        continue
      }
      if (f.type === 'file') {
        if ((fileValues[f.name] ?? []).length === 0) {
          setMessage(`Please upload ${f.label}.`)
          return
        }
        continue
      }
      const currentValue = asString(values[f.name]).trim()
      if (!currentValue) {
        setMessage(`Please enter ${f.label}.`)
        return
      }
      if (f.type === 'email') {
        const v = currentValue
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
          setMessage('Enter a valid email address.')
          return
        }
      }
    }
    setMessage('')
    if (isLast) void finalize()
    else setStep((s) => s + 1)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4 text-sm text-neutral-500">
        <span>
          Step {step + 1} of {total}
        </span>
        <span className="truncate font-medium text-neutral-900">{current.title}</span>
      </div>

      <form onSubmit={onStepSubmit} className="space-y-4">
        <div
          className={
            current.layout === 'two-column'
              ? 'grid grid-cols-1 gap-4 md:grid-cols-2'
              : 'flex flex-col gap-4'
          }
        >
          {visibleFields.map((field) => {
            const spanFull = current.layout === 'two-column' && field.colSpan === 'full'
            return (
              <label
                key={field.name}
                className={`block space-y-1.5 ${spanFull ? 'md:col-span-2' : ''}`}
              >
                <span className="text-sm font-medium text-neutral-800">
                  {field.label}
                  {field.required ? <span className="text-red-600"> *</span> : null}
                </span>
                {field.description ? <p className="text-xs text-neutral-500">{field.description}</p> : null}
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={asString(values[field.name])}
                    onChange={(e) => update(field.name, e.target.value)}
                    onBlur={(e) => {
                      const next = applyAutoCapitalize(e.target.value, field.autoCapitalize)
                      if (next !== e.target.value) update(field.name, next)
                    }}
                    placeholder={field.placeholder}
                    rows={field.rows ?? 4}
                    autoComplete={field.autoComplete}
                    className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 text-neutral-900 outline-none ring-neutral-900/10 focus:border-neutral-900 focus:ring-2"
                  />
                ) : field.type === 'file' ? (
                  <div className="space-y-2">
                    <div
                      onDragOver={(e) => {
                        e.preventDefault()
                        setDragActiveField(field.name)
                      }}
                      onDragLeave={(e) => {
                        e.preventDefault()
                        setDragActiveField((prev) => (prev === field.name ? null : prev))
                      }}
                      onDrop={(e) => {
                        e.preventDefault()
                        setDragActiveField(null)
                        const dropped = Array.from(e.dataTransfer.files ?? [])
                        if (dropped.length === 0) return
                        const merged = validateAndMergeFiles({
                          existing: fileValues[field.name] ?? [],
                          incoming: dropped,
                          multiple: field.multiple,
                        })
                        if (!merged) return
                        setMessage('')
                        updateFiles(field.name, merged)
                      }}
                      className={
                        dragActiveField === field.name
                          ? 'rounded-md border-2 border-dashed border-neutral-900 bg-neutral-50 px-3 py-4 text-xs text-neutral-700'
                          : 'rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 px-3 py-4 text-xs text-neutral-600'
                      }
                    >
                      Drag and drop files here
                    </div>
                    <input
                      name={field.name}
                      type="file"
                      multiple={field.multiple}
                      accept={field.accept}
                      onChange={(e) => {
                        const files = Array.from(e.target.files ?? [])
                        const merged = validateAndMergeFiles({
                          existing: fileValues[field.name] ?? [],
                          incoming: files,
                          multiple: field.multiple,
                        })
                        if (merged) {
                          setMessage('')
                          updateFiles(field.name, merged)
                        }
                        e.currentTarget.value = ''
                      }}
                      className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
                    />
                    {fileValues[field.name]?.length ? (
                      <ul className="space-y-1 text-xs text-neutral-600">
                        {fileValues[field.name].map((file) => (
                          <li key={`${file.name}-${file.size}-${file.lastModified}`} className="flex items-center gap-2">
                            <span className="flex-1 truncate">{file.name}</span>
                            <button
                              type="button"
                              onClick={() =>
                                updateFiles(
                                  field.name,
                                  (fileValues[field.name] ?? []).filter((f) => fileIdentity(f) !== fileIdentity(file))
                                )
                              }
                              className="rounded border border-neutral-300 bg-white px-1.5 py-0.5 text-[11px] text-neutral-700 hover:bg-neutral-50"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {fileValues[field.name]?.length ? (
                      <p className="text-[11px] text-neutral-500">
                        {fileValues[field.name].length}/{MAX_FILES_PER_FIELD} files ·{' '}
                        {bytesToMb((fileValues[field.name] ?? []).reduce((sum, f) => sum + f.size, 0))} MB /{' '}
                        {bytesToMb(MAX_TOTAL_BYTES_PER_FIELD)} MB
                      </p>
                    ) : null}
                    {fileValues[field.name]?.length ? (
                      <button
                        type="button"
                        onClick={() => updateFiles(field.name, [])}
                        className="rounded border border-neutral-300 bg-white px-2 py-1 text-[11px] text-neutral-700 hover:bg-neutral-50"
                      >
                        Clear all
                      </button>
                    ) : null}
                  </div>
                ) : field.type === 'chips' ? (
                  <div className="flex flex-wrap gap-2">
                    {(field.options ?? []).map((opt) => {
                      const selected = asArray(values[field.name]).includes(opt.value)
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            const existing = asArray(values[field.name])
                            const next = selected
                              ? existing.filter((v) => v !== opt.value)
                              : [...existing, opt.value]
                            update(field.name, next)
                          }}
                          className={
                            selected
                              ? 'rounded-full border border-neutral-900 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white'
                              : 'rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 hover:border-neutral-500'
                          }
                        >
                          {opt.label}
                        </button>
                      )
                    })}
                  </div>
                ) : field.type === 'radio' ? (
                  <div className="space-y-2">
                    {(field.options ?? []).map((opt) => (
                      <label key={opt.value} className="flex items-center gap-2 text-sm text-neutral-800">
                        <input
                          type="radio"
                          name={field.name}
                          value={opt.value}
                          checked={asString(values[field.name]) === opt.value}
                          onChange={() => update(field.name, opt.value)}
                          className="h-4 w-4 border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                ) : field.type === 'select' ? (
                  <select
                    name={field.name}
                    value={asString(values[field.name])}
                    onChange={(e) => update(field.name, e.target.value)}
                    className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 text-neutral-900 outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
                  >
                    <option value="">{field.placeholder || `Select ${field.label.toLowerCase()}`}</option>
                    {(field.options ?? []).map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    name={field.name}
                    type={field.type === 'number' ? 'number' : field.type}
                    value={
                      field.name === 'phone'
                        ? formatUsPhoneInputDisplay(asString(values.phone))
                        : field.name === 'dob'
                          ? formatUsDobInputDisplay(asString(values.dob))
                          : asString(values[field.name])
                    }
                    onChange={(e) => {
                      let v = e.target.value
                      if (field.name === 'state') {
                        v = v.toUpperCase().slice(0, field.maxLength ?? 2)
                      } else if (field.name === 'phone') {
                        v = e.target.value.replace(/\D/g, '').slice(0, 10)
                      } else if (field.name === 'dob') {
                        v = e.target.value.replace(/\D/g, '').slice(0, 8)
                      }
                      update(field.name, v)
                    }}
                    onBlur={(e) => {
                      const next = applyAutoCapitalize(e.target.value, field.autoCapitalize)
                      if (next !== e.target.value) update(field.name, next)
                    }}
                    placeholder={field.placeholder}
                    maxLength={field.name === 'phone' ? 14 : field.name === 'dob' ? 10 : field.maxLength}
                    autoComplete={field.autoComplete}
                    inputMode={field.inputMode}
                    min={field.type === 'number' ? field.min : undefined}
                    max={field.type === 'number' ? field.max : undefined}
                    className={
                      field.name === 'phone' || field.name === 'dob'
                        ? 'w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 font-mono text-[15px] tabular-nums tracking-wide text-neutral-900 outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10'
                        : 'w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 text-neutral-900 outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10'
                    }
                  />
                )}
              </label>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => {
                setMessage('')
                setStep((s) => Math.max(0, s - 1))
              }}
              className="rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Back
            </button>
          ) : (
            <span />
          )}
          <button
            type="submit"
            disabled={pending}
            className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-60"
          >
            {pending ? 'Submitting…' : isLast ? 'Submit' : 'Continue'}
          </button>
        </div>
      </form>

      {message ? (
        <p className={`text-sm ${message.startsWith('Submitted') ? 'text-emerald-700' : 'text-red-700'}`}>
          {message}
        </p>
      ) : null}
      {pending && uploadProgress !== null ? (
        <div className="space-y-1">
          <p className="text-xs text-neutral-600">{uploadStatus || 'Uploading attachments...'}</p>
          <div className="h-2 w-full overflow-hidden rounded bg-neutral-200">
            <div className="h-full bg-neutral-900 transition-all" style={{ width: `${uploadProgress}%` }} />
          </div>
          <p className="text-[11px] text-neutral-500">{uploadProgress}%</p>
        </div>
      ) : null}
    </div>
  )
}
