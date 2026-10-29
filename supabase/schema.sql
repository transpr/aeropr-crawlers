-- AeroPR / RailPR — central press release schema.

create extension if not exists pgcrypto;

create table if not exists press_releases (
  id uuid primary key default gen_random_uuid(),
  sector text not null check (sector in ('air', 'rail')),
  source_slug text not null,
  source_type text not null,
  org_group text,
  alliance text,
  org_name text not null,
  title text not null,
  published_at timestamptz not null,
  source_url text not null unique,
  language text not null,
  summary text default '',
  body text not null,
  body_en text,
  categories text[] default '{}',
  created_at timestamptz default now()
);

create index if not exists idx_pr_sector_published on press_releases (sector, published_at desc);
create index if not exists idx_pr_source on press_releases (source_slug);
create index if not exists idx_pr_group on press_releases (org_group);
create index if not exists idx_pr_categories on press_releases using gin (categories);

create table if not exists feeds (
  token text primary key,
  user_id uuid,
  sector text not null default 'air',
  label text,
  filters jsonb not null default '{}',
  plan text not null default 'basic',
  delay_hours int not null default 12,
  created_at timestamptz default now()
);

create table if not exists sources_status (
  source_slug text primary key,
  last_success_at timestamptz,
  last_error text,
  last_release_at timestamptz
);
