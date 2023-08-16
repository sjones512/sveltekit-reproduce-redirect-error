<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from '../signin/$types';

	export let data: PageData;
</script>

<a href="/">Protected</a>

<form
	method="post"
	use:enhance={() => {
		console.log('Submitting form');
	}}
>
	<input type="submit" value="Sign In" />
</form>
