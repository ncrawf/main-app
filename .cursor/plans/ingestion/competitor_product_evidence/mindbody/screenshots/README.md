# Mindbody screenshots — raw ingest

Drop the 60 Mindbody screenshots into this folder via Finder.

Any filename convention is fine — descriptive (e.g. `01_dashboard_home.png` /
`02_appointment_grid.png`) is helpful but not required. If filenames are opaque
(`IMG_4823.PNG`), I'll title each capture in the raw layer based on screen content.

## Recommended (optional) feature-area subfolders

If you want to pre-organize, create subfolders inside `screenshots/` matching the
likely Mindbody feature taxonomy:

```
screenshots/
  scheduling/
  commerce/
  memberships_packages/
  clients/
  staff/
  reports/
  settings/
  mobile/
  integrations/
  other/
```

This is optional. Flat drop into `screenshots/` is fine too — I'll group by feature
area at the synthesis pass.

## Why this folder is in git

Default plan is to commit the screenshots so they survive disaster recovery and any
future contributor has access. If 60 images is too much for the repo (~50-200MB),
we can swap to `.gitignore` later; the raw text captures + Layer 2 synthesis will
remain in git either way.

Source: Mindbody product (third-party; for analysis only).
Status: raw ingest — do not edit individual screenshots once dropped.
