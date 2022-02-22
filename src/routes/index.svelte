<script>
  import { sets } from '$lib/stores/sets.js';
  import { onDestroy } from 'svelte';
  import { flip } from 'svelte/animate';
  import SetCard from '$lib/components/set-card.svelte';
  import Card from '$lib/components/card.svelte';

  function deleteSet(id) {
    console.log($sets);
    const newSets = $sets.filter((set) => {
      return set.id !== id;
    });
    sets.set(newSets);
  }
</script>

<h2>My sets</h2>
<ul class="all-sets">
  <li>
    <a href="/set/create">
      <Card>
        <div class="create-card-content">
          <span class="create-card-icon">+</span>
          <h3 class="create-card-text">Create set</h3>
        </div>
      </Card>
    </a>
  </li>
  {#each $sets as set (set.id)}
    <li animate:flip={{ duration: 200 }}>
      <a href={`/set/${set.id}`}>
        <SetCard
          {set}
          on:delete={(e) => {
            deleteSet(e.detail.id);
          }}
        />
      </a>
    </li>
  {/each}
</ul>

<style>
  .create-card-content {
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }

  .create-card-text {
    margin: 0;
  }

  .all-sets {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 0.5rem;
    list-style-type: none;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
</style>
