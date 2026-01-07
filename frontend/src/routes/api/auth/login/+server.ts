// src/routes/api/auth/login/+server.ts
import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export async function POST({ request, cookies }) {
	const { email, password, remember } = await request.json();

	const duration = remember ? 365 : 1; // days

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});

	if (error) return json({ error: error.message }, { status: 400 });

	cookies.set('sb-access-token', data.session.access_token, {
		httpOnly: true,
		maxAge: 60 * 60 * 24 * duration,
		path: '/'
	});

	cookies.set('sb-refresh-token', data.session.refresh_token, {
		httpOnly: true,
		maxAge: 60 * 60 * 24 * duration,
		path: '/'
	});

	return json({ success: true, redirect: '/dashboard/chat' });
}
