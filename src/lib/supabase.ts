import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const isConfigured = !!(supabaseUrl && supabaseAnonKey && supabaseUrl !== 'https://placeholder.supabase.co');

if (!isConfigured) {
  console.warn(
    '⚠️ Supabase NO configurado. ' +
    'Agrega VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en Netlify (con prefijo VITE_). ' +
    'Forum/Chat funcionarán en modo local (sin persistencia).'
  );
}

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const isSupabaseConfigured = isConfigured;

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