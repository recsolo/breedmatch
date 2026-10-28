-- Phase 1: pre-launch waitlist for founding breeders and puppy buyers.
-- Inserts happen server-side with the service role key, so RLS is enabled
-- with no policies: the public anon key can neither read nor write this table.

create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  role text not null check (role in ('breeder', 'buyer')),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  zip text not null check (zip ~ '^\d{5}$'),
  breeds text not null check (char_length(breeds) between 1 and 300),
  kennel_name text check (char_length(kennel_name) <= 120),
  website text check (char_length(website) <= 300),
  years_breeding int check (years_breeding between 0 and 80),
  timeline text check (timeline in ('asap', '3-6 months', '6-12 months', 'just researching')),
  network_interests text[] not null default '{}',
  notes text check (char_length(notes) <= 1000)
);

create unique index waitlist_email_role_key on public.waitlist (lower(email), role);
create index waitlist_zip_idx on public.waitlist (zip);

alter table public.waitlist enable row level security;
