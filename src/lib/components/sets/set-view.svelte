<script>
  import Card from '$lib/components/card.svelte';

  export let set = {};
</script>

<Card>
  <div class="parent">
    {#each set.elements as element}
      <div class="child">
        <Card>
          <p>{element[0][0]}</p>
        </Card>
        <Card><p>{element[1][0]}</p></Card>
      </div>
    {/each}
  </div>
</Card>

<style>
  .parent {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .child {
    display: flex;
    gap: 1rem;
  }

  .child > * {
    flex-grow: 1;
  }

  p {
    margin: 0;
  }
</style>
