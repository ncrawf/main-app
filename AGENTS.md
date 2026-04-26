<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Architecture + auth (MAIN)

- **System map (three layers, modules 1A–1N, locked decisions, appendices):** `.cursor/plans/system_map_three_layers_60706286.plan.md` — source of truth for foundation vs deferred modules (e.g. disputes, HSA/FSA, FHIR export, care tasks, D19–D24). **Deferred lab implementation spec:** *Lab workflow* appendix **§11–17** in that file.
- **Mutations from staff/cron:** Prefer `requireCapability` from `lib/auth/capabilities.ts` (audited). Keep RLS as coarse `is_staff_user` / `is_staff_admin` unless a migration explicitly adds capability-aware RLS.
- **Scripts:** `npm run typecheck` runs `tsc --noEmit` alongside `npm run lint` before merge when touching TS.
