<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const nav = [
		{ name: 'Overview', icon: 'mdi:view-dashboard-outline', href: '/dashboard' },
		{ name: 'Chat', icon: 'mdi:chat-outline', href: '/dashboard/chat' },
		{ name: 'Profile', icon: 'mdi:account-outline', href: '/dashboard/profile' },
		{ name: 'Settings', icon: 'mdi:cog-outline', href: '/dashboard/settings' }
	];
</script>

<!-- PAGE WRAPPER -->
<div class="flex h-screen flex-col bg-gray-50">
	<!-- NAVBAR -->
	<header class="flex h-14 w-full items-center justify-between border-b bg-white px-6">
		<div class="flex items-center gap-3">
			<img src="/logo.svg" alt="logo" class="h-6" />
			<h1 class="text-lg font-semibold text-gray-800">Diabetes Predictor</h1>
		</div>

		<div class="flex items-center gap-4">
			<button class="text-gray-600 hover:text-green-600">
				<iconify-icon icon="mdi:bell-outline" width="24"></iconify-icon>
			</button>
			<button
				on:click={() => goto('/logout')}
				class="rounded-md bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700"
			>
				Logout
			</button>
		</div>
	</header>

	<div class="flex flex-1">
		<!-- SIDEBAR (DESKTOP) -->
		<aside class="hidden w-56 flex-col border-r bg-white px-4 py-6 lg:flex">
			<nav class="flex flex-col gap-1 text-gray-700">
				{#each nav as item}
					<a
						href={item.href}
						class="flex items-center gap-3 rounded-md px-3 py-2
						hover:bg-green-50 hover:text-green-700
						{$page.url.pathname === item.href ? 'bg-green-100 font-medium text-green-700' : ''}"
					>
						<iconify-icon icon={item.icon} width="20"></iconify-icon>
						{item.name}
					</a>
				{/each}
			</nav>
		</aside>

		<!-- MAIN CONTENT -->
		<main class="flex-1 overflow-y-auto px-6">
			<slot />
		</main>
	</div>

	<!-- MOBILE NAVIGATION -->
	<nav class="fixed bottom-0 flex w-full justify-around border-t bg-white py-2 lg:hidden">
		{#each nav as item}
			<a href={item.href} class="flex flex-col items-center text-xs text-gray-600">
				<iconify-icon icon={item.icon} width="26"></iconify-icon>
			</a>
		{/each}
	</nav>
</div>
