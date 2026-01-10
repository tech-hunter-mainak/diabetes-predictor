<script lang="ts">
	import Infobox from '$lib/components/Dashboard/Infobox.svelte';

	let patient = {
		name: 'Mainak Das',
		age: 27,
		gender: 'Male',
		lastCheckup: '02 Jan 2026',
		riskLevel: 'Moderate'
	};

	let metrics = [
		{ label: 'Blood Sugar Level', value: '128 mg/dL' },
		{ label: 'HbA1c', value: '6.1%' },
		{ label: 'BMI', value: '24.8 kg/m²' },
		{ label: 'Blood Pressure', value: '122/78 mmHg' }
	];
</script>

<div class="space-y-6">
	<header>
		<h1 class="text-2xl font-bold text-gray-800">Welcome, {patient.name}</h1>
		<p class="text-gray-600">Your latest health overview at a glance</p>
	</header>

	<!-- METRICS GRID -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
		{#each metrics as m}
			<Infobox label={m.label} value={m.value} />
		{/each}
	</div>

	<!-- RISK SECTION -->
	<section class="rounded-xl bg-white p-6 shadow-sm">
		<h2 class="mb-3 text-xl font-semibold text-gray-800">Diabetes Risk Summary</h2>

		<div class="text-sm text-gray-700">
			Current Risk Level:
			<span class="ml-2 font-bold text-orange-600">{patient.riskLevel}</span>
		</div>

		<p class="mt-4 text-gray-600">
			Your risk level is determined based on previous predictions, symptom analysis, and recent
			medical history.
		</p>

		<a
			href="/dashboard/predictions"
			class="mt-4 inline-block rounded-lg bg-green-600 px-4 py-2 text-white"
		>
			View Detailed Report
		</a>
	</section>
</div>
