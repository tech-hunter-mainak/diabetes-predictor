import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { createServerClient } from '@supabase/ssr';

export const load: PageServerLoad = async (event) => {
	// Initialize Supabase server client
	const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
		cookies: {
			get: (name) => event.cookies.get(name),
			set: (name, value, options) => {
				event.cookies.set(name, value, {
					...options,
					path: '/'
				});
			},
			remove: (name, options) => {
				event.cookies.delete(name, {
					...options,
					path: '/'
				});
			}
		}
	});

	// Sign out user from Supabase if session exists
	await supabase.auth.signOut();

	// Explicitly delete Supabase auth cookies
	event.cookies.delete('sb-access-token', { path: '/' });
	event.cookies.delete('sb-refresh-token', { path: '/' });
	event.cookies.delete('sb-auth-token', { path: '/' });

	// Redirect to login page
	throw redirect(303, '/auth/login');
};
