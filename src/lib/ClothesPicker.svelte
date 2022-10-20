<script lang='ts'>
  import { blue, red, green } from './stores';
</script>

<div class='clothesSelection'>
	<button id='blue' on:click={() => $blue = !$blue}></button>
	<button id='red' on:click={() => $red = !$red}></button>
	<button id='green' on:click={() => $green = !$green}></button>
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
	#blue {
		background-color: blue;
	}

	#red {
		background-color: red;
	}

	#green {
		background-color: green;
	}
</style>