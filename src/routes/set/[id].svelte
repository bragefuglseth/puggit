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
  import { sets } from '$lib/stores/sets.js';
  import { onDestroy } from 'svelte';

  export let id;

  let setList = [];

  const unsub = sets.subscribe((value) => {
    setList = value;
  });

  onDestroy(() => {
    unsub();
  });
  const currentSet = setList.find((set) => set.id === id);
</script>

<h2>{currentSet.name}</h2>
{#each currentSet.elements as element}
  <p>{element[0][0]} - {element[1][0]}</p>
{/each}
