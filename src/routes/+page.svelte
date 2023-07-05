<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let savedColors: string = 'Nothing yet';
</script>

<h1>Hit "Save" to update the stored colors</h1>

<form method="POST">
	<label>
		<input bind:checked={data.red} name="red" type="checkbox" />
		Red
	</label>
	<label>
		<input bind:checked={data.green} name="green" type="checkbox" />
		Green
	</label>
	<label>
		<input bind:checked={data.blue} name="blue" type="checkbox" />
		Blue
	</label>

	<button>Save</button>
</form>

<div />

<p>Here's what has been saved:</p>

<p style="font-weight: bold;">{savedColors}</p>
