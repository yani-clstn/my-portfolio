import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!supabaseConfigured) {
  console.error(
    "Missing Supabase env vars. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set (locally in .env.local, and on Vercel under Settings > Environment Variables)."
  );
}

// Falls back to harmless placeholder values so createClient() doesn't throw
// and take down the whole app — supabaseConfigured tells consumers (like
// LiveChat) whether it's safe to actually use.
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-key"
);

export interface ChatMessage {
  id: string;
  author: string;
  content: string;
  created_at: string;
}
