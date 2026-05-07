/**
 * Phase 4G CI lint — Section 1R.7 enforcement.
 *
 * "Direct LIKE / ILIKE queries from app code" are explicitly rejected by
 * §1R.7. All staff search routes through `searchEntities()` from
 * `lib/search-entities/index.ts`; the adapter is the only place
 * `.ilike()` / `.like()` may legitimately appear against a Section 1R.3
 * indexed entity.
 *
 * This lint scans `lib/`, `app/`, and `scripts/` for `.like(` and
 * `.ilike(` calls and fails CI if any appear in code that isn't:
 *   - the search-entities adapter itself (`lib/search-entities/`), or
 *   - explicitly allowlisted (e.g. site_search_entries — different concern
 *     per Phase 4G reconciliation: it's a CMS nav table, not a Section 1R
 *     domain entity).
 *
 * Lookback strategy mirrors `scripts/lint-event-types.ts` Phase 4F: we
 * walk back from the `.like(` / `.ilike(` site to identify which table is
 * being queried (via the most recent `.from('TABLE')` or
 * `.from("TABLE")` in the chain). If TABLE is in the allowlist we skip;
 * otherwise the call site is a violation.
 *
 * Exit code: 0 = clean, 1 = violations found.
 */

import { readFileSync, statSync, readdirSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const repoRoot = process.cwd()

const SCAN_ROOTS = ['lib', 'app', 'scripts']

const EXEMPT_PATHS = [
  // The search-entities adapter is the only place pg_trgm-backed
  // ILIKE may legitimately call against Section 1R.3 entities.
  join('lib', 'search-entities'),
  // The lint script itself names the patterns in regex strings.
  join('scripts', 'lint-direct-like-queries.ts'),
]

/**
 * Tables for which a direct LIKE / ILIKE call is acceptable because they
 * are NOT Section 1R domain entities. Add new tables here only with a
 * comment explaining why direct pattern matching is canonical.
 */
const ALLOWLISTED_TABLES: ReadonlySet<string> = new Set<string>([
  // CMS nav-search registry (separate concern from §1R; powers /search
  // public landing page + /internal/search admin UI for editing entries).
  'site_search_entries',
])

type Violation = {
  path: string
  line: number
  column: number
  table: string | '<unknown>'
  pattern: '.like(' | '.ilike('
  context: string
}

function shouldScan(path: string): boolean {
  if (!path.endsWith('.ts') && !path.endsWith('.tsx')) return false
  for (const exempt of EXEMPT_PATHS) {
    if (path === exempt || path.startsWith(exempt + sep)) return false
  }
  return true
}

function* walk(dir: string): Generator<string> {
  let entries: string[]
  try {
    entries = readdirSync(dir)
  } catch {
    return
  }
  for (const entry of entries) {
    if (entry === 'node_modules' || entry === '.next' || entry.startsWith('.')) continue
    const full = join(dir, entry)
    let stat
    try {
      stat = statSync(full)
    } catch {
      continue
    }
    if (stat.isDirectory()) {
      yield* walk(full)
    } else if (stat.isFile()) {
      yield full
    }
  }
}

/**
 * Walk backwards from `index` looking for the nearest `.from('TABLE')`
 * or `.from("TABLE")` call so we can decide if the table is allowlisted.
 * Returns the table name or undefined if no `.from(...)` is found within
 * `maxLookback` chars.
 *
 * String-state aware so identifiers inside other string literals don't
 * fool us. Walks in chunks; cheap because the regex match is bounded.
 */
function precedingFromTable(
  src: string,
  index: number,
  maxLookback = 4096,
): string | undefined {
  const start = Math.max(0, index - maxLookback)
  const slice = src.substring(start, index)
  // Find the LAST `.from('table')` or `.from("table")` before our index.
  // Iterate over all matches in the slice and keep the last.
  const fromRe = /\.from\(\s*['"]([a-zA-Z_][a-zA-Z0-9_.]*)['"]/g
  let last: string | undefined
  let m: RegExpExecArray | null
  while ((m = fromRe.exec(slice)) !== null) last = m[1]
  return last
}

function collectViolations(src: string, path: string): Violation[] {
  const lines = src.split(/\r?\n/)
  const violations: Violation[] = []

  // Compute line-start offsets so we can convert (line, column) → absolute.
  const lineStarts: number[] = [0]
  for (let i = 0; i < src.length; i++) {
    if (src[i] === '\n') lineStarts.push(i + 1)
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()
    if (trimmed.startsWith('//') || trimmed.startsWith('*')) continue

    for (const pattern of ['.ilike(', '.like('] as const) {
      let from = 0
      while (true) {
        const at = line.indexOf(pattern, from)
        if (at < 0) break
        const absoluteIndex = lineStarts[i] + at
        const table = precedingFromTable(src, absoluteIndex) ?? '<unknown>'
        if (ALLOWLISTED_TABLES.has(table)) {
          from = at + pattern.length
          continue
        }
        violations.push({
          path,
          line: i + 1,
          column: at + 1,
          table,
          pattern,
          context: line.trim(),
        })
        from = at + pattern.length
      }
    }
  }

  return violations
}

function main(): number {
  const violations: Violation[] = []
  for (const root of SCAN_ROOTS) {
    for (const file of walk(join(repoRoot, root))) {
      const rel = relative(repoRoot, file)
      if (!shouldScan(rel)) continue
      const src = readFileSync(file, 'utf8')
      violations.push(...collectViolations(src, rel))
    }
  }

  console.log(`[lint-direct-like-queries] scanned: ${SCAN_ROOTS.join(', ')}`)
  console.log(
    `  exempt paths: ${EXEMPT_PATHS.length}; allowlisted tables: ${ALLOWLISTED_TABLES.size}`,
  )

  if (violations.length === 0) {
    console.log('[lint-direct-like-queries] OK — 0 direct LIKE/ILIKE calls outside lib/search-entities/.')
    return 0
  }

  console.error(
    `\n[lint-direct-like-queries] FAIL — ${violations.length} direct ${'.like('}/${'.ilike('} call(s) outside the search adapter.\n` +
      `  Per Section 1R.7: route all staff search through searchEntities() in lib/search-entities/index.ts.\n` +
      `  If a table is legitimately exempt (e.g. CMS nav search), add it to ALLOWLISTED_TABLES with a comment.\n`,
  )

  const byFile = new Map<string, Violation[]>()
  for (const v of violations) {
    if (!byFile.has(v.path)) byFile.set(v.path, [])
    byFile.get(v.path)!.push(v)
  }
  for (const [file, vs] of byFile) {
    console.error(`  ${file}`)
    for (const v of vs) {
      console.error(
        `    ${v.line}:${v.column}  ${v.pattern} on table=${v.table}\n      | ${v.context}`,
      )
    }
  }
  return 1
}

const code = main()
process.exit(code)
