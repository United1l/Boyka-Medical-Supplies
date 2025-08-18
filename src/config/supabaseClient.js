import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
// This file initializes the Supabase client with the URL and Anon Key from environment variables.
// Ensure that these environment variables are set in your .env file or hosting environment.
// The client can be used to interact with your Supabase database and authentication services.