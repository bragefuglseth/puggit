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

<span class="card-wrapper">
  <Card>
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
</span>

<style>
  .card-content {
    position: relative;
    height: 10rem;
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
