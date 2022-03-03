<script>
  import { sets } from '$lib/stores/sets.js';
  import { goto } from '$app/navigation';
  import { fade } from 'svelte/transition';
  import Input from '$lib/components/input.svelte';
  import Button from '$lib/components/button.svelte';
  import Card from '$lib/components/card.svelte';

  export let set = {
    name: '',
    id: undefined,
    elements: [[[''], ['']]],
  };

  let formError = '';

  function addElement() {
    const currentElements = set.elements;
    set.elements = [...currentElements, [[''], ['']]];
  }

  function handleAdd() {
    addElement();
    // SetTimeout fixes a bug where the input couldn't be found
    setTimeout(() => {
      const lastInput = document.querySelector(
        `#input-a-${set.elements.length - 1}`
      );
      lastInput.focus();
    });
  }

  function handleSubmit() {
    formError = '';
    // This way of assigning IDs is unbreakable unless the user intentionally messes with it.
    // If a database system is added in the future, it needs to be reworked
    if (!set.id) {
      set.id = Date.now().toString(16);
    }
    sets.update((sets) => {
      return sets.filter((validationSet) => {
        return validationSet.id !== set.id;
      });
    });
    // Basic validation
    if (!set.name.trim()) return (formError = 'Your set needs a name');
    if (set.name.trim().length > 39)
      return (formError = "The name of your set can't exceed 30 characters");
    for (const element of set.elements) {
      if (!element[0][0].trim() || !element[1][0].trim())
        return (formError = "Fields can't be empty");
    }

    sets.update((currentSets) => {
      return [set, ...currentSets];
    });

    goto(`/set/${set.id}`);
  }
</script>

<h1>Create set</h1>

<form on:submit|preventDefault>
  <Input
    name="set-name"
    label="Name"
    bind:value={set.name}
    placeholder="Enter a name for your set…"
  />
  <div class="form-elements">
    {#each set.elements as element}
      <div in:fade|local={{ duration: 200 }}>
        <Card>
          <div class="term-definition">
            <div>
              <Input
                name={`input-a-${set.elements.indexOf(element)}`}
                bind:value={element[0][0]}
                label="Term"
              />
            </div>

            <div>
              <Input
                name={`input-b-${set.elements.indexOf(element)}`}
                bind:value={element[1][0]}
                label="Definition"
              />
            </div>
          </div>
        </Card>
      </div>
    {/each}
    <Button on:click={handleAdd}>Add element</Button>
  </div>
  <div>
    <Button type="primary" on:click={handleSubmit}>Save</Button>
  </div>

  {#if formError}
    <p>{formError}</p>
  {/if}
</form>

<style>
  form,
  .form-elements {
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
</style>
