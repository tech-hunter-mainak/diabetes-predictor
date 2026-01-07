<script lang="ts">
	import { onMount } from 'svelte';

	let email = '';
	let otp = '';
	let password = '';
	let otpSent = false;
	let otpVerified = false;
	let message = '';

	async function sendOtp() {
		message = 'Sending OTP...';

		const res = await fetch('/api/auth/send-otp', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email })
		});

		const data = await res.json();
		if (data.success) {
			otpSent = true;
			message = 'OTP sent to your email.';
		} else {
			message = data.error;
		}
	}

	async function verifyOtp() {
		message = 'Verifying OTP...';

		const res = await fetch('/api/auth/verify-otp', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, otp })
		});

		const data = await res.json();
		if (data.success) {
			otpVerified = true;
			message = 'OTP verified. You may now set your password.';
		} else {
			message = data.error;
		}
	}

	async function completeSignup() {
		const res = await fetch('/api/auth/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		});

		const data = await res.json();

		if (data.success) {
			message = 'Signup successful. You can now login.';
		} else {
			message = data.error;
		}
	}
</script>

<div class="flex min-h-screen items-center justify-center bg-green-50 px-4">
	<div class="w-full max-w-sm space-y-4 rounded-lg border border-green-200 bg-white p-6 shadow-md">
		<h1 class="text-center text-2xl font-semibold text-green-700">Sign Up</h1>

		<!-- EMAIL INPUT -->
		<input
			bind:value={email}
			type="email"
			placeholder="Enter your email"
			class="w-full rounded-md border border-green-300 px-3 py-2 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none"
		/>

		{#if !otpSent}
			<button
				on:click={sendOtp}
				class="w-full rounded-md bg-green-600 py-2 text-white transition-colors hover:bg-green-700"
			>
				Send OTP
			</button>
		{/if}

		<!-- OTP INPUT -->
		{#if otpSent && !otpVerified}
			<input
				bind:value={otp}
				type="text"
				placeholder="Enter OTP"
				class="w-full rounded-md border border-green-300 px-3 py-2 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none"
			/>
			<button
				on:click={verifyOtp}
				class="w-full rounded-md bg-green-600 py-2 text-white transition-colors hover:bg-green-700"
			>
				Verify OTP
			</button>
		{/if}

		<!-- PASSWORD FIELD AFTER OTP VERIFIED -->
		{#if otpVerified}
			<input
				bind:value={password}
				type="password"
				placeholder="Set a password"
				class="w-full rounded-md border border-green-300 px-3 py-2 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none"
			/>
			<button
				on:click={completeSignup}
				class="w-full rounded-md bg-green-600 py-2 text-white transition-colors hover:bg-green-700"
			>
				Complete Signup
			</button>
		{/if}

		{#if message}
			<p class="text-center text-sm text-red-600">{message}</p>
		{/if}
	</div>
</div>
