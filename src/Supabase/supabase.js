import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://forultlhsbeufentimfu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvcnVsdGxoc2JldWZlbnRpbWZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNjYyNTMsImV4cCI6MjAxODc0MjI1M30.2p2C7kYO2BlSQL3yRB0wUdSIuEPJfF-WR2XWt6_cynA"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase