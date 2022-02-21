<script>
  let sets = [
    { name: 'Spanish', elements: 24 },
    { name: 'German', elements: 30 },
    { name: 'German', elements: 30 },
    { name: 'Latin', elements: 83 },
    { name: 'Greek', elements: 20 },
    { name: 'Albanian', elements: 34 },
    { name: 'Italian', elements: 35 },
    { name: 'Spanish', elements: 23 },
    { name: 'Georgian', elements: 45 },
    { name: 'English', elements: 26 },
    { name: 'English', elements: 26 },
  ];
</script>

<div class="sets-container">
  <h2>My sets</h2>
  <ul class="all-sets">
    {#each sets as set}
      <li class="set-card">
        <h3>{set.name}</h3>
        <p>{set.elements} elements</p>
      </li>
    {/each}
  </ul>
</div>

<style>
  .sets-container {
    max-width: 960px;
    margin: 5rem auto 0;
  }
  .all-sets {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 0.5rem;
    list-style-type: none;
    padding: 0;
  }
  .set-card {
    border: 1px solid var(--clr-secondary);
    border-radius: 15px;
    padding: 1rem;
  }
</style>
