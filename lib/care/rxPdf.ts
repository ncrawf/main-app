function sanitizeText(input: string): string {
  return input
    .replace(/[^\x20-\x7E]/g, '?')
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
}

/**
 * Tiny single-page PDF generator for Rx artifacts.
 * Keeps dependencies light for v1 fax/chart workflows.
 */
export function buildSimpleRxPdf(lines: string[]): Uint8Array {
  const safe = lines.map((l) => sanitizeText(l).slice(0, 180))
  const lineOps = safe.map((l, i) => (i === 0 ? `(${l}) Tj` : `T* (${l}) Tj`)).join('\n')
  const stream = `BT
/F1 11 Tf
50 760 Td
14 TL
${lineOps}
ET`

  const objects: string[] = []
  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n')
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n')
  objects.push(
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>\nendobj\n'
  )
  objects.push(`4 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}\nendstream\nendobj\n`)
  objects.push('5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n')

  let pdf = '%PDF-1.4\n'
  const offsets: number[] = [0]
  for (const obj of objects) {
    offsets.push(pdf.length)
    pdf += obj
  }
  const xrefStart = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n`
  pdf += '0000000000 65535 f \n'
  for (let i = 1; i <= objects.length; i += 1) {
    const off = String(offsets[i]).padStart(10, '0')
    pdf += `${off} 00000 n \n`
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`

  return new TextEncoder().encode(pdf)
}

