-- Stud & dam (bitch) matching intent for breeders.
-- Safe to run whether or not 0001 already included this column.

alter table public.waitlist
  add column if not exists breeding_interests text[] not null default '{}';
