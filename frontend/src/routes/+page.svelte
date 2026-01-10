<script lang="ts">
	import ChooseUs from '$lib/components/Home/ChooseUs.svelte';
	import WhoWeAre from '$lib/components/Home/WhoWeAre.svelte';
	import chatInterface from '$lib/assets/images/chat.svg';

	let menuOpen = false;
</script>

<div
	class="flex h-screen w-full flex-col items-center justify-center bg-linear-180 from-stone-50 to-emerald-200 font-sans text-gray-800"
>
	<!-- HERO SECTION -->
	<section
		class="absolute top-0 mt-20 flex w-[calc(100%-100px)] flex-col items-center justify-between gap-16 rounded-2xl bg-white px-6 py-20 md:flex-row md:px-12"
	>
		<!-- LEFT BLOCK -->
		<div class="animate-fadeIn max-w-xl">
			<p class="text-lg font-semibold text-emerald-500">Join Us</p>

			<h1 class="mb-6 text-4xl leading-tight font-extrabold text-gray-900 md:text-6xl">
				We Back You With <br />
				a Smile for Ever
			</h1>

			<p class="mb-10 max-w-md text-lg text-gray-600 md:text-xl">
				Medical Recover is most focused in helping you discover your most beautiful smile.
			</p>

			<div class="mb-10 grid grid-cols-2 grid-rows-2 gap-2 gap-y-6">
				<div class="flex items-center gap-2">
					<span
						class="flex h-10 w-10 items-center justify-center rounded-full bg-green-400 text-white"
					>
						<i class="fi fi-sr-messages text-xl"></i>
					</span>
					<span class="flex flex-col">
						<div class="">Get Free Consultation</div>
						<div class="text-gray-400">100% free for now</div>
					</span>
				</div>
				<div class="flex items-center gap-2">
					<span
						class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-white"
					>
						<i class="fi fi-sr-comments-question text-xl"></i>
					</span>
					<span class="flex flex-col">
						<div class="">Ask your questions</div>
						<div class="text-gray-400">100% free for now</div>
					</span>
				</div>
				<div class="flex items-center gap-2">
					<span
						class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-white"
					>
						<i class="fi fi-sr-patient-file text-xl"></i>
					</span>
					<span class="flex flex-col">
						<div class="">Early diagonisis</div>
						<div class="text-gray-400">100% free for now</div>
					</span>
				</div>
				<div class="flex items-center gap-2">
					<span
						class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-white"
					>
						<i class="fi fi-sr-treatment text-xl"></i>
					</span>
					<span class="flex flex-col">
						<div class="">Get Personalised Report</div>
						<div class="text-gray-400">100% free for now</div>
					</span>
				</div>
			</div>

			<div class="flex flex-row space-x-4">
				<button
					class="rounded-lg bg-emerald-500 px-6 py-3 text-lg text-white transition-all hover:bg-emerald-600"
				>
					Try Now
				</button>
				<button
					class="rounded-lg border border-gray-300 px-6 py-3 text-lg text-gray-700 transition-all hover:bg-gray-100"
				>
					Learn More
				</button>
			</div>
		</div>

		<!-- RIGHT BLOCK IMAGE -->
		<div class="relative flex w-full justify-center lg:w-[50%]">
			<!-- Gradient BG -->
			<div
				class="absolute top-0 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-emerald-400 to-purple-500 opacity-70 blur-[80px] md:h-[420px] md:w-[420px]"
			></div>

			<!-- Doctor Image -->
			<img
				src={chatInterface}
				alt="chatbot"
				class="relative z-10 w-[280px] rounded-2xl select-none md:w-[380px] lg:w-[420px]"
			/>
		</div>
	</section>
</div>
<!-- SERVICES SECTION -->
<section class="grid w-full grid-cols-1 gap-6 px-6 py-14 md:grid-cols-4 md:px-12">
	<div class="service-card bg-white">
		<i class="fi fi-sr-circle-1 absolute -mt-7.5 text-5xl"></i>
		<h3 class="mb-2 text-xl font-semibold">24 Hours Service</h3>
		<p class="text-sm text-gray-600">
			Providing unwavering support around the clock, our 24-hour service ensures.
		</p>
	</div>

	<div class="service-card bg-emerald-100">
		<!-- <img src="/icons/service2.png" class="mx-auto mb-4 w-12" /> -->
		<h3 class="mb-2 text-xl font-semibold">Qualified Doctor</h3>
		<p class="text-sm text-gray-700">
			A qualified doctor possesses a comprehensive understanding of medical sciences.
		</p>
	</div>

	<div class="service-card bg-white">
		<!-- <img src="/icons/service3.png" class="mx-auto mb-4 w-12" /> -->
		<h3 class="mb-2 text-xl font-semibold">Emergency Care</h3>
		<p class="text-sm text-gray-600">
			Its timely intervention plays a crucial role in stabilizing patients and saving lives.
		</p>
	</div>

	<div class="service-card bg-white">
		<!-- <img src="/icons/service4.png" class="mx-auto mb-4 w-12" /> -->
		<h3 class="mb-2 text-xl font-semibold">Operation Theater</h3>
		<p class="text-sm text-gray-600">
			It is equipped with specialized tools and technology to ensure the safety.
		</p>
	</div>
</section>

<WhoWeAre />
<ChooseUs />

<style>
	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateY(15px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fadeIn {
		animation: fadeIn 0.6s ease-out;
	}
</style>
