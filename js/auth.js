import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "./supabase-config.js";

export function getSupabase() {
  if (!SUPABASE_URL.startsWith("https://") || SUPABASE_URL.includes("ΒΑΛΕ_ΕΔΩ") || SUPABASE_PUBLISHABLE_KEY.includes("ΒΑΛΕ_ΕΔΩ")) {
    throw new Error("Δεν έχουν ρυθμιστεί τα στοιχεία Supabase.");
  }
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
}

export async function requireAdmin(client) {
  const { data: { user }, error: authError } = await client.auth.getUser();
  if (authError || !user) {
    window.location.replace(new URL("login.html", window.location.href).href);
    return null;
  }
  const { data, error } = await client.from("admin_users").select("user_id").eq("user_id", user.id).maybeSingle();
  if (error || !data) {
    await client.auth.signOut();
    window.location.replace(new URL("login.html?error=not-admin", window.location.href).href);
    return null;
  }
  return user;
}
