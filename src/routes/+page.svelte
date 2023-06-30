<script lang="ts">
	let savedColors: string = 'Nothing yet';
</script>

<h1>Hit "Save" to update the stored colors</h1>

<div>
	<label>
		<input type="checkbox" />
		Red
	</label>
	<label>
		<input type="checkbox" />
		Green
	</label>
	<label>
		<input type="checkbox" />
		Blue
	</label>
</div>

<button>Save</button>

<p>Here's what has been saved:</p>

<p style="font-weight: bold;">{savedColors}</p>
