<script lang="ts">
	import { goto } from '$app/navigation';
	import { onDestroy, onMount } from 'svelte';

	let menuOpen = false;
	let navbar: HTMLElement | null = null;

	onMount(() => {
		const handleScroll = () => {
			if (!navbar) return;

			if (window.scrollY > 80) {
				navbar.classList.add(
					'shadow-md',
					'bg-[#ffffffaa]',
					'sticky',
					'top-4',
					'rounded-full',
					'w-[calc(100%-20px)]',
					'left-[10px]'
				);
			} else {
				navbar.classList.remove(
					'shadow-md',
					'bg-white',
					'sticky',
					'top-4',
					'rounded-full',
					'w-[calc(100%-20px)]',
					'left-[10px]'
				);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // run once on load

		onDestroy(() => {
			window.removeEventListener('scroll', handleScroll);
		});
	});
</script>

<!-- NAVIGATION BAR -->
<nav
	bind:this={navbar}
	class="z-20 flex items-center justify-between bg-[#ffffff73] px-6 py-4 backdrop-blur-xl transition-all duration-500 md:px-12"
>
	<!-- LOGO -->
	<div class="text-3xl font-extrabold tracking-tight select-none">
		DIABE<span class="text-emerald-500">TREATS</span>
	</div>

	<!-- DESKTOP MENU -->
	<ul class="hidden space-x-10 text-[16px] font-medium text-gray-700 md:flex">
		<li><a href="/" class="hover:text-emerald-500">Home</a></li>
		<li><a href="#services" class="hover:text-emerald-500">Services</a></li>
		<li><a href="#pricing" class="hover:text-emerald-500">Pricing</a></li>
		<li><a href="#contact" class="hover:text-emerald-500">Contact</a></li>
	</ul>

	<!-- DESKTOP BUTTONS -->
	<div class="hidden items-center space-x-6 text-[15px] font-medium md:flex">
		<button
			class="hover:text-emerald-500"
			on:click={() => {
				goto('/auth/login');
			}}>Login</button
		>
		<button
			on:click={() => {
				goto('/auth/signup');
			}}
			class="rounded-lg bg-emerald-500 px-6 py-2 text-white transition-all hover:bg-emerald-600"
		>
			JOIN US →
		</button>
	</div>

	<!-- MOBILE MENU BUTTON -->
	<button class="text-3xl focus:outline-none md:hidden" on:click={() => (menuOpen = !menuOpen)}>
		{menuOpen ? '✕' : '☰'}
	</button>
</nav>

<!-- MOBILE MENU DROPDOWN -->
{#if menuOpen}
	<div
		class="fixed z-20 mt-20 w-screen space-y-4 bg-white px-6 py-4 text-lg text-gray-800 shadow-lg md:hidden"
	>
		<a href="#" class="block hover:text-emerald-500">Home</a>
		<a href="#" class="block hover:text-emerald-500">Services</a>
		<a href="#" class="block hover:text-emerald-500">Pricing</a>
		<a href="#" class="block hover:text-emerald-500">Contact</a>

		<button class="block w-full rounded-lg border border-gray-300 py-2">Login</button>
		<button class="block w-full rounded-lg bg-emerald-500 py-2 text-white">JOIN US →</button>
	</div>
{/if}
