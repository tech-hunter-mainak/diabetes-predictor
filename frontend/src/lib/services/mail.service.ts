// src/lib/services/mail.service.ts
import nodemailer from 'nodemailer';
import { SMTP_EMAIL, SMTP_PASSWORD } from '$env/static/private';

export async function sendOtpEmail(to: string, otp: string) {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: SMTP_EMAIL,
			pass: SMTP_PASSWORD
		}
	});

	const mailOptions = {
		from: `"Diabetes Predictor" <${SMTP_EMAIL}>`,
		to,
		subject: 'Your OTP Code',
		html: `
			<h2>Your OTP Code</h2>
			<p>Your verification code is:</p>
			<h1 style="font-size: 32px; letter-spacing: 4px;">${otp}</h1>
			<p>This code expires in 5 minutes.</p>
		`
	};

	await transporter.sendMail(mailOptions);
}
