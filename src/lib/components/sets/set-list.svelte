<script>
  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';
  import SetCard from '$lib/components/sets/set-card.svelte';
  import Card from '$lib/components/card.svelte';

  export let sets = [];

  function deleteSet(id) {
    const newSets = $sets.filter((set) => {
      return set.id !== id;
    });
    sets.set(newSets);
  }
</script>

<ul class="set-list">
  <li>
    <a href="/set/create">
      <Card type="primary" hover>
        <div class="create-card-content">
          <span class="create-card-icon">+</span>
          <h3 class="create-card-text">Create set</h3>
        </div>
      </Card>
    </a>
  </li>
  {#each $sets as set (set.id)}
    <li out:fade|local={{ duration: 200 }} animate:flip={{ duration: 200 }}>
      <SetCard
        {set}
        on:delete={(e) => {
          deleteSet(e.detail.id);
        }}
      />
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
    font-weight: normal;
  }

  .set-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    list-style-type: none;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  @media only screen and (min-width: 620px) {
    .set-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (min-width: 960px) {
    .set-list {
      grid-template-columns: repeat(3, calc(100% / 3));
    }
  }
</style>
