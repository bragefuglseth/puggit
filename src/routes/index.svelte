<script>
  import { sets } from '$lib/stores/sets.js';
  import SetList from '$lib/components/sets/set-list.svelte';
</script>

<h1>My sets</h1>
<SetList {sets} />
