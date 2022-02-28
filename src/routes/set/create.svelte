<script>
  import SetEditor from '$lib/components/sets/set-editor.svelte';
</script>

<SetEditor />

<!-- <script>
  import { sets } from '$lib/stores/sets.js';
  import { goto } from '$app/navigation';
  import { fade } from 'svelte/transition';
  import Input from '$lib/components/input.svelte';
  import Button from '$lib/components/button.svelte';
  import Card from '$lib/components/card.svelte';

  let newSet = {
    name: '',
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
    if (newSet.name.trim().length > 39)
      return (formError = "The name of your set can't exceed 30 characters");
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

<h1>Create set</h1>

<form on:submit|preventDefault>
  <Input
    name="set-name"
    label="Name"
    bind:value={newSet.name}
    placeholder="Enter a name for your set…"
  />
  {#each newSet.elements as element}
    <div in:fade|local={{ duration: 200 }}>
      <Card>
        <div class="term-definition">
          <div>
            <Input
              name={`input-a-${newSet.elements.indexOf(element)}`}
              bind:value={element[0][0]}
              label="Term"
            />
          </div>

          <div>
            <Input
              name={`input-b-${newSet.elements.indexOf(element)}`}
              bind:value={element[1][0]}
              label="Definition"
              on:keydown={(e) => {
                handleKeypress(e);
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  {/each}
  <div>
    <Button on:click={addElement}>Add element</Button>
    <Button type="primary" on:click={handleSubmit}>Save</Button>
  </div>

  {#if formError}
    <p>{formError}</p>
  {/if}
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .term-definition {
    display: flex;
    gap: 1rem;
  }

  .term-definition > * {
    flex-grow: 1;
  }
</style> -->
