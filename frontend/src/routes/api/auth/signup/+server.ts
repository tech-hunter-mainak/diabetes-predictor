// src/routes/api/auth/signup/+server.ts
import { json } from '@sveltejs/kit';
import { supabaseAdmin } from '$lib/supabase';

export async function POST({ request }) {
	const { email, password } = await request.json();

	if (!email || !password) return json({ error: 'Email and Password required' }, { status: 400 });

	// Create Auth user
	const { data: signupData, error: signupError } = await supabaseAdmin.auth.admin.createUser({
		email,
		password,
		email_confirm: true // disables magic link flow
	});

	if (signupError) return json({ error: signupError.message }, { status: 400 });

	const user = signupData.user;

	// Insert profile row
	const { error: profileError } = await supabaseAdmin.from('profiles').insert({
		id: user.id,
		email: email,
		role: 'patient'
	});

	if (profileError) return json({ error: profileError.message }, { status: 500 });

	return json({ success: true });
}
