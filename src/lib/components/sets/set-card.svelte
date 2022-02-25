<script>
  import Card from '$lib/components/card.svelte';
  import Button from '$lib/components/button.svelte';
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  export let set;

  let isHovered = false;

  function deleteSet() {
    dispatch('delete', {
      id: set.id,
    });
  }
</script>

<a
  href={`/set/${set.id}`}
  on:mouseenter={() => {
    isHovered = true;
  }}
  on:mouseleave={() => {
    isHovered = false;
  }}
>
  <span class="card-wrapper">
    <Card hover>
      <div class="card-content">
        <h2>{`${set.name.slice(0, 20)}${set.name.length > 20 ? '…' : ''}`}</h2>
        <p>
          {set.elements.length}
          {set.elements.length === 1 ? 'element' : 'elements'}
        </p>
        {#if isHovered}
          <div class="card-options" transition:fade|local={{ duration: 200 }}>
            <Button on:click={deleteSet}>Delete</Button>
          </div>
        {/if}
      </div>
    </Card>
  </span>
</a>

<style>
  .card-wrapper p {
    color: var(--clr-text-alt);
    transition: color 200ms;
  }

  .card-wrapper:hover p {
    color: var(--clr-text);
  }

  .card-content {
    position: relative;
    height: 10rem;
  }

  .card-options {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  a {
    text-decoration: none;
    color: var(--clr-text);
  }
</style>
