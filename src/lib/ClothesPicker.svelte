<script lang='ts'>
  import { blue, red, green } from './stores';

	// let clothesSelected: string[] = [];

	// let clothesPool: string[] = [
	// 	'Red',
	// 	'Green',
	// 	'Blue'
	// ];

	let clothesSelected: {name: string, store: any}[] = [];

	let clothesPool: {name: string, store: any}[] = [
		{'name': 'Red', 'store': $red},
		{'name': 'Green', 'store': $green},
		{'name': 'Blue', 'store': $blue},
	];

	function saveSelection() {
		alert('selected clothes: ' + clothesSelected);
		// for (let i = 0; i < clothesSelected.length; i++) {
		// 	clothesSelected[i].store = !clothesSelected[i].store;
		// }
	}

</script>

<div class='clothesSelection'>
	{#each clothesPool as clothing}
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
  {#if $blue}
    <p>blue is selected</p>
  {/if}

  {#if $red}
    <p>red is selected</p>
  {/if}

  {#if $green}
    <p>green is selected</p>
  {/if}
</div>

<style>
	/* #blue {
		background-color: blue;
	}

	#red {
		background-color: red;
	}

	#green {
		background-color: green;
	} */
</style>