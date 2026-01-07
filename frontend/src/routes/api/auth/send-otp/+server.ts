// src/routes/api/auth/send-otp/+server.ts
import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';
import { sendOtpEmail } from '$lib/services/mail.service';

export async function POST({ request }) {
	const { email } = await request.json();

	if (!email) return json({ error: 'Email required' }, { status: 400 });

	// Generate 6-digit OTP
	const otp = Math.floor(100000 + Math.random() * 900000).toString();
	const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();

	// Save OTP to DB
	const { error } = await supabase.from('otp_codes').upsert({
		email,
		otp,
		expires_at: expiresAt
	});

	if (error) return json({ error: error.message }, { status: 500 });

	// Send OTP Email
	try {
		await sendOtpEmail(email, otp);
	} catch (err) {
		console.error('Email sending error:', err);
		return json({ error: 'Failed to send email' }, { status: 500 });
	}

	return json({ success: true });
}
