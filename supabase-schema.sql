-- Supabase SQL Schema for FloraQuest Forum & Chat
-- Ejecuta esto en Supabase Dashboard > SQL Editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Forum Topics table
create table if not exists forum_topics (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  content text not null,
  author_name text not null,
  author_role text not null default 'Comunidad',
  created_at timestamptz default now(),
  replies_count int default 0,
  views_count int default 0,
  tags text[] default '{}'
);

-- Forum Replies table
create table if not exists forum_replies (
  id uuid primary key default uuid_generate_v4(),
  topic_id uuid not null references forum_topics(id) on delete cascade,
  content text not null,
  author_name text not null,
  author_role text not null default 'Comunidad',
  created_at timestamptz default now()
);

-- Chat Messages table
create table if not exists chat_messages (
  id uuid primary key default uuid_generate_v4(),
  content text not null,
  author_name text not null,
  is_bot boolean default false,
  created_at timestamptz default now()
);

-- Enable Row Level Security (RLS)
alter table forum_topics enable row level security;
alter table forum_replies enable row level security;
alter table chat_messages enable row level security;

-- Public read access for forum topics
create policy "Public read topics" on forum_topics
  for select using (true);

-- Public read access for forum replies
create policy "Public read replies" on forum_replies
  for select using (true);

-- Public insert for forum topics (anyone can create)
create policy "Public insert topics" on forum_topics
  for insert with check (true);

-- Public insert for forum replies (anyone can reply)
create policy "Public insert replies" on forum_replies
  for insert with check (true);

-- Public read access for chat messages
create policy "Public read chat" on chat_messages
  for select using (true);

-- Public insert for chat messages
create policy "Public insert chat" on chat_messages
  for insert with check (true);

-- Indexes for performance
create index if not exists idx_forum_topics_created_at on forum_topics(created_at desc);
create index if not exists idx_forum_replies_topic_id on forum_replies(topic_id);
create index if not exists idx_forum_replies_created_at on forum_replies(created_at asc);
create index if not exists idx_chat_messages_created_at on chat_messages(created_at asc);

-- Function to increment views count
create or replace function increment_views(topic_id uuid)
returns void language plpgsql as $$
begin
  update forum_topics
  set views_count = views_count + 1
  where id = topic_id;
end $$;

-- Function to increment replies count
create or replace function increment_replies()
returns trigger language plpgsql as $$
begin
  update forum_topics
  set replies_count = replies_count + 1
  where id = NEW.topic_id;
  return NEW;
end $$;

-- Trigger to auto-increment replies count
create or replace trigger trigger_increment_replies
  after insert on forum_replies
  for each row execute function increment_replies();