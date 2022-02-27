<script>
  export let type = 'default';
  export let hover = false;
</script>

<div class:hover class={type}>
  <slot />
</div>

<style>
  div {
    border: 1px solid;
    border-radius: 10px;
    padding: 1rem;
    transition: all 200ms;
    overflow: hidden;
  }

  div.hover:hover {
    transform: scale(0.98);
  }

  .default {
    border-color: var(--clr-background-alt);
    color: var(--clr-text);
  }
  .default.hover:hover {
    border-color: var(--clr-primary);
  }

  .primary {
    border-color: var(--clr-primary);
    background-color: var(--clr-primary);
    color: var(--clr-background);
  }
  .primary.hover:hover {
    border-color: var(--clr-primary-alt);
    background-color: var(--clr-primary-alt);
  }
</style>
