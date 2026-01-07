// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_ANON_KEY } from '$env/static/private';

/**
 * Admin client (secure)
 * Uses service role key
 * - Create users after OTP verification
 * - Set passwords
 * - Update user role
 */
export const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
	auth: {
		persistSession: false,
		autoRefreshToken: false
	}
});

/**
 * Auth client (public)
 * Uses ANON key
 * - Login
 * - Fetch user session
 */
export function createSupabaseAuthClient() {
	return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		}
	});
}

export const supabase = createSupabaseAuthClient();
