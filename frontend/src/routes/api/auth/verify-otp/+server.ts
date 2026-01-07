// src/routes/api/auth/verify-otp/+server.ts
import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export async function POST({ request }) {
	const { email, otp } = await request.json();

	if (!email || !otp) return json({ error: 'Missing email or OTP' }, { status: 400 });

	const { data, error } = await supabase.from('otp_codes').select('*').eq('email', email).single();

	if (error || !data) return json({ error: 'OTP not found' }, { status: 400 });

	if (data.otp !== otp) return json({ error: 'Invalid OTP' }, { status: 400 });

	if (new Date(data.expires_at) < new Date())
		return json({ error: 'OTP expired' }, { status: 400 });

	return json({ success: true });
}
