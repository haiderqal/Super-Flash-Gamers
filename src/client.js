import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rslxpnmvcyxhdtqilpkv.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzbHhwbm12Y3l4aGR0cWlscGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMjg0MTUsImV4cCI6MjA2MDYwNDQxNX0.CW-P7fCXwcyhN7JnBYWRre3hnaLy1CffRAxaMaE55u4';

export const supabase = createClient(supabaseUrl, supabaseKey);
