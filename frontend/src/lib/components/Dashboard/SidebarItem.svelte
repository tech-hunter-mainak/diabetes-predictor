<script lang="ts">
	export let label: string;
	export let active: boolean = false;
</script>

<div
	class="hover:bg-kucoinGreenLight hover:text-kucoinGreen cursor-pointer rounded-lg
    px-3
    py-2
    text-sm transition-all
    {active ? 'bg-kucoinGreenLight text-kucoinGreen font-semibold' : 'text-gray-700'}"
>
	{label}
</div>
