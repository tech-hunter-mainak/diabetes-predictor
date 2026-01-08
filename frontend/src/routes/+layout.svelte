<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div>
	{#if $page.url.pathname.startsWith('/dashboard')}
		<!-- Custom layout for /dashboard -->
		<div class="dashboard-layout">
			<main>{@render children()}</main>
		</div>
	{:else}
		<!-- Default layout -->
		<Navbar />
		<main>{@render children()}</main>
		<Footer />
	{/if}
</div>
