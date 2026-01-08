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
<div class="flex flex-col h-screen bg-gray-50">

	<!-- NAVBAR -->
	<header class="flex items-center justify-between w-full h-14 px-6 bg-white border-b">
		<div class="flex items-center gap-3">
			<img src="/logo.svg" alt="logo" class="h-6" />
			<h1 class="font-semibold text-gray-800 text-lg">Diabetes Predictor</h1>
		</div>

		<div class="flex items-center gap-4">
			<button class="text-gray-600 hover:text-green-600">
				<iconify-icon icon="mdi:bell-outline" width="24"></iconify-icon>
			</button>
				<button on:click={() => goto('/logout')} class="bg-green-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-green-700">
					Logout
				</button>
		</div>
	</header>

	<div class="flex flex-1">

		<!-- SIDEBAR (DESKTOP) -->
		<aside class="hidden lg:flex flex-col w-56 bg-white border-r px-4 py-6">
			<nav class="flex flex-col gap-1 text-gray-700">
				{#each nav as item}
					<a
						href={item.href}
						class="flex items-center gap-3 px-3 py-2 rounded-md
						hover:bg-green-50 hover:text-green-700
						{ $page.url.pathname === item.href ? 'bg-green-100 text-green-700 font-medium' : '' }"
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
	<nav class="lg:hidden fixed bottom-0 w-full bg-white border-t flex justify-around py-2">
		{#each nav as item}
			<a href={item.href} class="flex flex-col items-center text-gray-600 text-xs">
				<iconify-icon icon={item.icon} width="26"></iconify-icon>
			</a>
		{/each}
	</nav>
</div>
