-- Create the documents table
create table if not exists documents (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  content text not null,
  type text not null,
  status text not null,
  business_details jsonb not null
);

-- Create an index on the type column for faster queries
create index if not exists documents_type_idx on documents(type);

-- Create an index on the status column for faster queries
create index if not exists documents_status_idx on documents(status);

-- Enable Row Level Security (RLS)
alter table documents enable row level security;

-- Create a policy that allows all operations for now (you can restrict this later)
create policy "Enable all operations for all users" on documents
  for all
  using (true)
  with check (true); 