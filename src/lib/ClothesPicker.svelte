<script lang='ts'>
  import { blue, red, green, clothing } from './stores';

	let clothesSelected: {name: string, store: boolean}[] = [];

	function saveSelection() {
		for (let i = 0; i < clothesSelected.length; i++) {
			$clothing[i].selected = !$clothing[i].selected;
		}
	}

</script>

<div class='clothesSelection'>
	{#each $clothing as clothing}
		<label>
			<input type=checkbox bind:group={clothesSelected} value={clothing.name}>
			{clothing.name}
		</label>
	{/each}
</div>

<div>
	<button on:click={() => saveSelection()}>Gem</button>
</div>

<div>
  {#if $clothing[0].selected}
    <p>{$clothing[0].name} is selected</p>
  {/if}

  {#if $clothing[1].selected}
    <p>{$clothing[1].name} is selected</p>
  {/if}

  {#if $clothing[2].selected}
    <p>{$clothing[2].name} is selected</p>
  {/if}
</div>

<style>

</style>