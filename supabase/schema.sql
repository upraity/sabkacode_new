create extension if not exists pgcrypto;
create table if not exists projects(id uuid primary key default gen_random_uuid(),slug text unique not null,title text not null,price numeric(10,2) not null check(price>=0),download_url text not null,active boolean not null default true,created_at timestamptz not null default now());
create table if not exists orders(id uuid primary key default gen_random_uuid(),order_number text unique not null,project_id uuid not null references projects(id),customer_name text not null,customer_email text not null,customer_phone text,expected_amount numeric(10,2) not null,paid_amount numeric(10,2),currency text not null default 'INR',transaction_id text,proof_path text,status text not null default 'AWAITING_PROOF' check(status in('AWAITING_PROOF','PENDING_REVIEW','PAID','CANCELLED')),created_at timestamptz not null default now(),paid_at timestamptz,cancelled_at timestamptz,admin_note text);
alter table projects enable row level security;alter table orders enable row level security;
-- Create private Storage buckets in Supabase: payment-proofs and project-files.
-- Put ZIPs in project-files and store their private path in projects.download_url.
