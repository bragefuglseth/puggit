<script>
  import { sets } from '$lib/stores/sets.js';

  // For inserting mock data
  // sets.set([
  //   {
  //     name: 'Spanish',
  //     id: 1,
  //     elements: [
  //       [['Hola'], ['Hello']],
  //       [['Amigos'], ['Friends']],
  //       [['Chao'], ['Bye']],
  //     ],
  //   },
  //   {
  //     name: 'German',
  //     id: 2,
  //     elements: [
  //       [['Hola'], ['Hello']],
  //       [['Amigos'], ['Friends']],
  //       [['Chao'], ['Bye']],
  //     ],
  //   },
  //   {
  //     name: 'German',
  //     id: 3,
  //     elements: [
  //       [['Hola'], ['Hello']],
  //       [['Amigos'], ['Friends']],
  //       [['Chao'], ['Bye']],
  //     ],
  //   },
  //   {
  //     name: 'Latin',
  //     id: 4,
  //     elements: [
  //       [['Hola'], ['Hello']],
  //       [['Amigos'], ['Friends']],
  //       [['Chao'], ['Bye']],
  //     ],
  //   },
  //   {
  //     name: 'Greek',
  //     id: 5,
  //     elements: [
  //       [['Hola'], ['Hello']],
  //       [['Amigos'], ['Friends']],
  //       [['Chao'], ['Bye']],
  //     ],
  //   },
  //   {
  //     name: 'Albanian',
  //     id: 6,
  //     elements: [
  //       [['Hola'], ['Hello']],
  //       [['Amigos'], ['Friends']],
  //       [['Chao'], ['Bye']],
  //     ],
  //   },
  //   {
  //     name: 'Italian',
  //     id: 7,
  //     elements: [
  //       [['Hola'], ['Hello']],
  //       [['Amigos'], ['Friends']],
  //       [['Chao'], ['Bye']],
  //     ],
  //   },
  //   {
  //     name: 'Spanish',
  //     id: 8,
  //     elements: [
  //       [['Hola'], ['Hello']],
  //       [['Amigos'], ['Friends']],
  //       [['Chao'], ['Bye']],
  //     ],
  //   },
  //   {
  //     name: 'Georgian',
  //     id: 9,
  //     elements: [
  //       [['Hola'], ['Hello']],
  //       [['Amigos'], ['Friends']],
  //       [['Chao'], ['Bye']],
  //     ],
  //   },
  //   {
  //     name: 'English',
  //     id: 10,
  //     elements: [
  //       [['Hola'], ['Hello']],
  //       [['Amigos'], ['Friends']],
  //       [['Chao'], ['Bye']],
  //     ],
  //   },
  //   {
  //     name: 'English',
  //     id: 11,
  //     elements: [
  //       [['Hola'], ['Hello']],
  //       [['Amigos'], ['Friends']],
  //       [['Chao'], ['Bye']],
  //     ],
  //   },
  // ]);
</script>

<h2>My sets</h2>
<ul class="all-sets">
  {#each $sets as set}
    <li class="set-card">
      <a href={`/set/${set.id}`}>
        <h3>{set.name}</h3>
        <p>{set.elements.length} elements</p></a
      >
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
    border-radius: 15px;
    padding: 1rem;
  }
</style>
