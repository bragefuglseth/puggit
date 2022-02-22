<script>
  import Card from './card.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let set;

  function deleteSet() {
    dispatch('delete', {
      id: set.id,
    });
  }
</script>

<div class="card-wrapper">
  <Card height="8rem">
    <div class="card-content">
      <h3>{set.name}</h3>
      <p>
        {set.elements.length}
        {set.elements.length === 1 ? 'element' : 'elements'}
      </p>
      <div class="card-options">
        <button on:click|preventDefault={deleteSet}>Delete</button>
      </div>
    </div>
  </Card>
</div>

<style>
  .card-content {
    height: 100%;
    position: relative;
    height: 8rem;
  }

  .card-options {
    position: absolute;
    bottom: 0;
    right: 0;
    display: none;
  }

  .card-wrapper:hover .card-options {
    display: block;
  }
</style>
