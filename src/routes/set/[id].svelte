<script context="module">
  export async function load({ params }) {
    return {
      props: {
        id: params.id,
      },
    };
  }
</script>

<script>
  import { browser } from '$app/env';
  import { sets } from '$lib/stores/sets.js';
  import SetView from '$lib/components/sets/set-view.svelte';

  export let id;

  const set = $sets.find((set) => set.id === id);
</script>

<!-- Do not render on server, will cause error -->
{#if browser}
  <h1>{set.name}</h1>
  <SetView {set} />
{/if}
