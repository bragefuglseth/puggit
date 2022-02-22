<script>
  import { sets } from '$lib/stores/sets.js';
  import { goto } from '$app/navigation';

  let newSet = {
    name: 'Untitled set',
    id: null,
    elements: [[[''], ['']]],
  };
  let formError = '';

  function addElement() {
    const currentElements = newSet.elements;
    newSet.elements = [...currentElements, [[''], ['']]];
  }

  // If tab is pressed in the last input, add a new element
  function handleKeypress(e) {
    if (e.keyCode === 9 && !e.target.parentElement.nextElementSibling) {
      addElement();
    }
  }

  function handleSubmit() {
    formError = '';
    // This way of assigning IDs is unbreakable unless the user intentionally messes with it.
    // If a database system is added in the future, it needs to be reworked
    newSet.id = Date.now().toString();
    // Basic validation
    if (!newSet.name.trim()) return (formError = 'Your set needs a name');
    for (const element of newSet.elements) {
      if (!element[0][0].trim() || !element[1][0].trim())
        return (formError = "Fields can't be empty");
    }
    console.log(newSet);

    sets.update((currentSets) => {
      return [newSet, ...currentSets];
    });

    goto(`/set/${newSet.id}`);
  }
</script>

<h2>Create set</h2>

<form on:submit|preventDefault>
  <label for="set-name">Name</label>
  <input type="text" id="set-name" bind:value={newSet.name} />
  <div>
    {#each newSet.elements as element}
      <div>
        <!-- The IDs and for-attributes here are dynamically generated -->
        <label for={`input-a-${newSet.elements.indexOf(element)}`}>Term</label>
        <input
          type="text"
          id={`input-a-${newSet.elements.indexOf(element)}`}
          bind:value={element[0][0]}
        />
        <label for={`input-b-${newSet.elements.indexOf(element)}`}
          >Definition</label
        >
        <input
          id={`input-b-${newSet.elements.indexOf(element)}`}
          on:keydown={(e) => {
            handleKeypress(e);
          }}
          type="text"
          bind:value={element[1][0]}
        />
      </div>
    {/each}
  </div>

  <button type="button" on:click|preventDefault={addElement}>Add element</button
  >
  <button type="button" on:click={handleSubmit}>Save</button>
  {#if formError}
    <p>{formError}</p>
  {/if}
</form>
