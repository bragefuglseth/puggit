<script>
  export let type = 'default';
  export let filled = false;
</script>

<button on:click|preventDefault class:filled class={type}>
  <slot />
</button>

<style>
  button {
    outline: none;
    background: none;
    border: none;
    padding: 0.8em;
    border-radius: 5px;
    font-family: 'Montserrat';
    cursor: pointer;
    transition: border-color 200ms, color 200ms;
  }

  button.default {
    border: 1px solid var(--clr-text);
    color: var(--clr-text);
  }

  button.default:hover {
    border-color: var(--clr-text-alt);
    color: var(--clr-text-alt);
  }
</style>
