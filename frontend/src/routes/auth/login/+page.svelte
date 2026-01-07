<script lang="ts">
	let email = '';
	let password = '';
	let keepSignedIn = false;
	let errorMsg = '';
	let loading = false;

	async function handleLogin() {
		errorMsg = '';
		loading = true;

		const res = await fetch('/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password, keepSignedIn })
		});

		const data = await res.json();
		loading = false;

		if (!res.ok) {
			errorMsg = data.error;
			return;
		}

		window.location.href = '/dashboard/chat';
	}
</script>

<div class="flex min-h-screen items-center justify-center bg-green-50 px-4">
	<div class="w-full max-w-sm rounded-lg border border-green-200 bg-white p-6 shadow-md">
		<h2 class="mb-6 text-center text-2xl font-semibold text-green-700">Login</h2>

		{#if errorMsg}
			<p class="mb-4 text-center text-sm text-red-600">{errorMsg}</p>
		{/if}

		<div class="mb-4">
			<label class="mb-1 block text-sm font-medium text-gray-700">Email</label>
			<input
				type="email"
				bind:value={email}
				class="w-full rounded-md border border-green-300 px-3 py-2 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none"
				placeholder="you@example.com"
			/>
		</div>

		<div class="mb-4">
			<label class="mb-1 block text-sm font-medium text-gray-700">Password</label>
			<input
				type="password"
				bind:value={password}
				class="w-full rounded-md border border-green-300 px-3 py-2 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none"
				placeholder="Enter your password"
			/>
		</div>

		<div class="mb-4 flex items-center">
			<input
				type="checkbox"
				bind:checked={keepSignedIn}
				class="h-4 w-4 rounded border-green-400 text-green-600 focus:ring-green-500"
			/>
			<label class="ml-2 text-sm text-gray-700">Keep me signed in</label>
		</div>

		<button
			class="w-full rounded-md bg-green-600 py-2 text-white transition-colors hover:bg-green-700 disabled:bg-green-400"
			on:click={handleLogin}
			disabled={loading}
		>
			{loading ? 'Logging in…' : 'Login'}
		</button>
	</div>
</div>
