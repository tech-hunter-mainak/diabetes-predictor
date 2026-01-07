// src/hooks.server.ts
import { createSupabaseAuthClient } from '$lib/supabase';

export const handle = async ({ event, resolve }) => {
	const access = event.cookies.get('sb-access');
	const refresh = event.cookies.get('sb-refresh');

	const supabase = createSupabaseAuthClient();
	let user = null;

	if (access && refresh) {
		const { data } = await supabase.auth.getUser(access);
		user = data?.user || null;
	}

	event.locals.user =
		user && user.email
			? {
					...user,
					email: user.email || '',
					role: ['patient', 'doctor', 'admin'].includes(user.role || '')
						? (user.role as 'patient' | 'doctor' | 'admin')
						: 'patient'
				}
			: null;

	return await resolve(event);
};
