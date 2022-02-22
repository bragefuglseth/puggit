<script>
  import { sets } from '$lib/stores/sets.js';
</script>

<h2>My sets</h2>
<ul class="all-sets">
  <li>
    <a href="/set/create">
      <div class="set-card">
        <h3>Create set</h3>
      </div>
    </a>
  </li>
  {#each $sets as set}
    <li>
      <a href={`/set/${set.id}`}>
        <div class="set-card">
          <h3>{set.name}</h3>
          <p>
            {set.elements.length}
            {set.elements.length === 1 ? 'element' : 'elements'}
          </p>
        </div>
      </a>
    </li>
  {/each}
</ul>

<style>
  .all-sets {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 0.5rem;
    list-style-type: none;
    padding: 0;
  }
  .set-card {
    border: 1px solid var(--clr-secondary);
    height: 8rem;
    border-radius: 15px;
    padding: 1rem;
    color: var(--clr-text);
  }
  a {
    text-decoration: none;
  }
</style>
