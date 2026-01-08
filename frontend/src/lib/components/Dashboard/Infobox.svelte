<script lang="ts">
	export let label: string;
	export let value: string;
</script>

<div class="rounded-xl border border-gray-200 bg-white p-4">
	<p class="mb-1 text-xs text-gray-500">{label}</p>
	<p class="font-semibold text-gray-800">{value}</p>
</div>
