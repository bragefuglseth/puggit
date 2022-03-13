<script>
  import { sets } from '$lib/stores/sets.js';
  import { goto } from '$app/navigation';
  import { fade } from 'svelte/transition';
  import { v4 as uuidV4 } from 'uuid';
  import Input from '$lib/components/input.svelte';
  import Button from '$lib/components/button.svelte';
  import Card from '$lib/components/card.svelte';

  export let set = {
    name: '',
    id: undefined,
    elements: [newBlankElement()],
  };

  let removeMode = false;

  let formError = '';

  function newBlankElement() {
    return {
      id: uuidV4(),
      terms: [[''], ['']],
    };
  }

  function addElement() {
    const currentElements = set.elements;
    set.elements = [...currentElements, newBlankElement()];
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
    // If a database system is added in the future, this needs to be reworked
    if (!set.id) {
      set.id = uuidV4();
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
      if (!element.terms[0][0].trim() || !element.terms[1][0].trim())
        return (formError = "Fields can't be empty");
    }

    sets.update((currentSets) => {
      return [set, ...currentSets];
    });

    goto(`/set/${set.id}`);
  }

  function removeElement(id) {
    set.elements = set.elements.filter((element) => element.id !== id);
  }

  function toggleRemoveMode() {
    removeMode = removeMode === false ? true : false;
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
    {#each set.elements as element (element.id)}
      <div in:fade|local={{ duration: 200 }} class="term-definition-container">
        <Card>
          <div class="term-definition">
            <div>
              <Input
                name={`input-a-${set.elements.indexOf(element)}`}
                bind:value={element.terms[0][0]}
                label="Term"
              />
            </div>

            <div>
              <Input
                name={`input-b-${set.elements.indexOf(element)}`}
                bind:value={element.terms[1][0]}
                label="Definition"
              />
            </div>
          </div>
        </Card>
      </div>
      {#if removeMode}
        <Button
          on:click={() => {
            removeElement(element.id);
          }}>Remove element</Button
        >
      {/if}
    {/each}
    <div class="form-actions" in:fade={{ duration: 200 }}>
      <Button on:click={handleAdd}>Add element</Button>
      <Button on:click={toggleRemoveMode}>Remove elements</Button>
      <Button type="primary" on:click={handleSubmit}>Save</Button>
    </div>
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

  .form-actions {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
  }
</style>
