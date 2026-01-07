<script lang="ts">
	export let status: number = 404;
	export let error: string = 'Page not found';
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-green-50 px-4">
	<div
		class="relative max-w-md rounded-xl border border-green-200 bg-white p-10 text-center shadow-xl"
	>
		<!-- Decorative circle icon -->
		<div class="absolute -top-12 left-1/2 -translate-x-1/2">
			<div
				class="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-4xl font-bold text-green-700 shadow-md"
			>
				!
			</div>
		</div>

		<div class="mt-16">
			<h1 class="text-6xl font-extrabold text-green-700">{status}</h1>
			<h2 class="mt-4 text-2xl font-semibold text-gray-700">{error}</h2>
			<p class="mt-2 text-gray-500">
				Oops! Something went wrong. The page you are looking for might not exist.
			</p>

			<a
				href="/"
				class="mt-6 inline-block rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-8 py-3 font-medium text-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
			>
				Go Back Home
			</a>
		</div>
	</div>
</div>
