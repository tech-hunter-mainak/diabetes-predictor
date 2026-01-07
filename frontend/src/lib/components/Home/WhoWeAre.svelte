<script lang="ts">
	// No logic required for this static section
</script>

<section
	class="flex w-full flex-col items-center gap-16 bg-[#F3FEFE] px-6 py-20 md:flex-row md:justify-between md:px-12"
>
	<!-- LEFT CONTENT -->
	<div class="max-w-xl">
		<p class="mb-3 text-lg font-semibold tracking-wide text-emerald-500">~ WHO ARE WE</p>

		<h2 class="mb-6 text-4xl leading-tight font-extrabold text-gray-900 md:text-5xl">
			We Help To Get <br /> Solutions
		</h2>

		<p class="mb-10 text-lg leading-relaxed text-gray-600">
			We specialize in providing tailored solutions to address your unique challenges. Let us be
			your partner in navigating complex issues and finding effective resolutions.
		</p>

		<button
			class="rounded-lg bg-emerald-500 px-6 py-3 text-lg font-medium text-white shadow transition-all hover:bg-emerald-600"
		>
			Learn About
		</button>
	</div>

	<!-- RIGHT IMAGE + FLOATING CARD -->
	<div class="relative flex w-full justify-center md:w-auto">
		<!-- Main Image -->
		<img
			src="/doctor-talking.png"
			alt="Doctor consultation"
			class="w-[350px] rounded-2xl shadow-md select-none md:w-[420px]"
		/>

		<!-- Floating Relief Card -->
		<div
			class="absolute bottom-[-40px] left-1/2 w-[260px] -translate-x-1/2 transform rounded-xl bg-white p-6 text-center shadow-xl md:w-[300px]"
		>
			<h3 class="mb-2 text-xl font-semibold text-emerald-500">Looking for Relief ?</h3>
			<p class="text-sm leading-relaxed text-gray-600">
				Seeking a sanctuary where the burdens of the day dissipate, the heart finds reprieve, and
				the spirit rejuvenates.
			</p>
		</div>
	</div>
</section>
