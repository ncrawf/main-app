create table if not exists public.site_search_entries (
  id text primary key,
  title text not null,
  href text not null,
  description text not null,
  terms jsonb not null default '[]'::jsonb,
  action_label text not null default 'Learn more',
  top_search_label text,
  top_search_query text,
  top_search_rank int,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists site_search_entries_active_idx
  on public.site_search_entries (is_active, top_search_rank nulls last, title);

create or replace function public.set_site_search_entries_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_site_search_entries_updated_at on public.site_search_entries;
create trigger trg_site_search_entries_updated_at
before update on public.site_search_entries
for each row
execute function public.set_site_search_entries_updated_at();

alter table public.site_search_entries enable row level security;

drop policy if exists "site_search_entries_public_select" on public.site_search_entries;
create policy "site_search_entries_public_select"
  on public.site_search_entries
  for select
  to anon, authenticated
  using (is_active = true);

drop policy if exists "site_search_entries_staff_insert" on public.site_search_entries;
create policy "site_search_entries_staff_insert"
  on public.site_search_entries
  for insert
  to authenticated
  with check (public.is_staff_user(auth.uid()));

drop policy if exists "site_search_entries_staff_update" on public.site_search_entries;
create policy "site_search_entries_staff_update"
  on public.site_search_entries
  for update
  to authenticated
  using (public.is_staff_user(auth.uid()))
  with check (public.is_staff_user(auth.uid()));

drop policy if exists "site_search_entries_staff_delete" on public.site_search_entries;
create policy "site_search_entries_staff_delete"
  on public.site_search_entries
  for delete
  to authenticated
  using (public.is_staff_user(auth.uid()));

insert into public.site_search_entries (
  id,
  title,
  href,
  description,
  terms,
  action_label,
  top_search_label,
  top_search_query,
  top_search_rank,
  is_active
) values
  (
    'sermorelin',
    'Sermorelin',
    '/care/sermorelin',
    'Peptide-based support program with clinician review and ongoing follow-up.',
    '["sermorelin","peptide","peptides","growth hormone peptide"]'::jsonb,
    'Learn more',
    'Sermorelin',
    'sermorelin',
    1,
    true
  ),
  (
    'female-health',
    'Female Health',
    '/care/female-health',
    'Hormone-focused care pathways, symptom review, and targeted lab planning.',
    '["female health","women health","hormone balance","pcos","menopause","female hormones"]'::jsonb,
    'View landing page',
    'Female health',
    'female health',
    2,
    true
  ),
  (
    'coq10',
    'CoQ10 (Ubiquinol)',
    '/shop/coq10',
    'Shop CoQ10 supplement support for energy and cardiometabolic wellness goals.',
    '["coq10","co q10","ubiquinol","coenzyme q10","supplement"]'::jsonb,
    'Buy supplement',
    'CoQ10',
    'coq10',
    3,
    true
  ),
  (
    'weight-loss',
    'Medical Weight Loss',
    '/forms/glp1-intake?pathway=weight_loss',
    'GLP-1 and metabolic care with intake, physician review, and refill monitoring.',
    '["weight loss","glp1","semaglutide","tirzepatide","wegovy","zepbound"]'::jsonb,
    'Start intake',
    'Weight loss',
    'weight loss',
    4,
    true
  ),
  (
    'ed',
    'ED Care',
    '/forms/glp1-intake?pathway=ed',
    'Evidence-based erectile dysfunction treatment with ongoing dose and efficacy check-ins.',
    '["ed","erectile dysfunction","sildenafil","tadalafil","cialis","viagra"]'::jsonb,
    'Start intake',
    null,
    null,
    null,
    true
  ),
  (
    'intake',
    'Start Intake',
    '/forms/glp1-intake',
    'Begin a care intake and tell the team your goals, history, and concerns.',
    '["intake","start","get started","new patient","form"]'::jsonb,
    'Start intake',
    null,
    null,
    null,
    true
  )
on conflict (id) do update set
  title = excluded.title,
  href = excluded.href,
  description = excluded.description,
  terms = excluded.terms,
  action_label = excluded.action_label,
  top_search_label = excluded.top_search_label,
  top_search_query = excluded.top_search_query,
  top_search_rank = excluded.top_search_rank,
  is_active = excluded.is_active,
  updated_at = now();
