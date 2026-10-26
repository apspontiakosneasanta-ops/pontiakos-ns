-- Εκτέλεσε το SQL Editor του Supabase.
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;
drop policy if exists "Admins can read own admin record" on public.admin_users;
create policy "Admins can read own admin record" on public.admin_users
for select to authenticated using (user_id = (select auth.uid()));

-- Δεν υπάρχουν πολιτικές INSERT/UPDATE/DELETE για τους χρήστες της εφαρμογής.
-- Δημιούργησε πρώτα τον χρήστη από Authentication > Users.
-- Μετά, βάλε το πραγματικό User ID (UUID) στην παρακάτω εντολή και εκτέλεσέ την:
-- insert into public.admin_users (user_id) values ('00000000-0000-0000-0000-000000000000');
