<script>
  export let type = 'default';
  export let filled = false;
</script>

<button on:click|preventDefault class:filled class={type}>
  <slot />
</button>

<style>
  button {
    background: none;
    border: none;
    padding: 0.8em;
    border-radius: 5px;
    font-family: 'Montserrat';
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 200ms, border-color 200ms, color 200ms;
    outline: none;
  }

  button.default {
    color: var(--clr-text);
  }

  button.default:is(:hover, :focus) {
    color: var(--clr-text-alt);
  }

  button.primary {
    border: 1px solid var(--clr-primary);
    background-color: var(--clr-primary);
    color: var(--clr-background);
    margin: 0;
  }

  button.primary:is(:hover, :focus) {
    border-color: var(--clr-primary-alt);
    background-color: var(--clr-primary-alt);
  }
</style>
