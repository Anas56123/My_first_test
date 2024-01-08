import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xnylfzidtqdavjtgwbzo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhueWxmemlkdHFkYXZqdGd3YnpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5MzIzNzMsImV4cCI6MjAxOTUwODM3M30.MK4rjQ-LcNvPNyoM8sI5K2FzQGrQPhBr9WdZVomYucc"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase
