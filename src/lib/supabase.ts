import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase credentials not configured. ' +
    'Create .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY ' +
    '(see .env.example). Forum/Chat will work in local-only mode.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

export type ForumTopic = {
  id: string;
  title: string;
  content: string;
  author_name: string;
  author_role: string;
  created_at: string;
  replies_count: number;
  views_count: number;
  tags: string[];
};

export type ForumReply = {
  id: string;
  topic_id: string;
  content: string;
  author_name: string;
  author_role: string;
  created_at: string;
};

export type ChatMessage = {
  id: string;
  content: string;
  author_name: string;
  is_bot: boolean;
  created_at: string;
};