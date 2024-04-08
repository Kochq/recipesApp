import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.EXPO_PUBLIC_SB_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SB_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey)
