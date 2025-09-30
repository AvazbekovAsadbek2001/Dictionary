import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rlzijatjmpiajkktvafu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsemlqYXRqbXBpYWpra3R2YWZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NzQwMjMsImV4cCI6MjA3NDM1MDAyM30.c3nV3-PpUY53zUfBDLTZhhS23GlHZHGYXM1BZqBYVOg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
