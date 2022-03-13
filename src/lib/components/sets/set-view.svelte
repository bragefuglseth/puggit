<script>
  import Card from '$lib/components/card.svelte';

  export let set = {};
</script>

<Card>
  <div class="container">
    {#each set.elements as element}
      <div class="element-wrapper">
        <Card>
          <div class="element">
            <div class="phrase">
              <p>{element.terms[0][0]}</p>
            </div>
            <div class="phrase">
              <p>{element.terms[1][0]}</p>
            </div>
          </div>
        </Card>
      </div>
    {/each}
  </div>
</Card>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    max-height: 25rem;
  }

  .element {
    display: flex;
    gap: 1rem;
  }

  .element > * {
    flex: 1 0 50%;
  }

  .element > :first-child {
    border-right: 1px solid var(--clr-background-alt);
  }

  .phrase {
    padding: 1rem;
    text-align: center;
  }

  p {
    margin: 0;
  }
</style>
