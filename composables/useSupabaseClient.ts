import { createClient } from '@supabase/supabase-js'

export const useSupabaseClientSecure = async () => {
  const { supabaseUrl, supabaseKey } = await $fetch('/api/supabase/client')
  
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase configuration missing')
  }
  
  return createClient(supabaseUrl, supabaseKey)
}
