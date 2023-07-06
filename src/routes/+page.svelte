<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
</script>

<h1>Hit "Save" to update the stored colors</h1>

<form method="POST" use:enhance>
	<label>
		<input name="red" type="checkbox" />
		Red
	</label>
	<label>
		<input name="green" type="checkbox" />
		Green
	</label>
	<label>
		<input name="blue" type="checkbox" />
		Blue
	</label>

	<button>Save to db</button>
</form>

<div />

<p>Here's what has been saved:</p>

{#if data.red}
	<p style="font-weight: bold;">Red</p>
{/if}

{#if data.green}
	<p style="font-weight: bold;">Green</p>
{/if}

{#if data.blue}
	<p style="font-weight: bold;">Blue</p>
{/if}
