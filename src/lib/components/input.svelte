<script>
  export let name = '';
  export let label = '';
  export let placeholder = '';
  export let value = '';

  // Custom change function to dispatch data
  function change() {
    dispatch('change', value);
  }
</script>

<div>
  <label for={name}>{label}</label>
  <div class="container">
    <input
      type="text"
      id={name}
      bind:value
      on:keydown
      autocomplete="off"
      {placeholder}
    />
    <div class="focus-indicator" />
  </div>
</div>

<style>
  input {
    display: block;
    width: 100%;
    font-size: inherit;
    background: none;
    border: none;
    outline: none;
    font-family: 'Noto Serif', serif;
    color: var(--clr-text);
    padding: 0.8rem;
  }

  input::placeholder {
    opacity: 1;
    color: var(--clr-text-alt);
  }

  label {
    font-size: 0.8rem;
    font-family: 'Montserrat', sans-serif;
    color: var(--clr-text-alt);
    display: block;
    margin: 0 0.8rem 0.3rem;
  }

  .container {
    position: relative;
    font-size: 1.2rem;
    border: 1px solid var(--clr-background-alt);
    border-radius: 10px;
    transition: border-color 200ms;
    overflow: hidden;
  }

  .container:is(:focus-within, :hover) {
    border-color: var(--clr-primary);
  }

  .focus-indicator {
    width: 100%;
    height: 2px;
    background: var(--clr-primary);
    position: absolute;
    bottom: 0;
    opacity: 0;
    transition: opacity 200ms;
  }

  .container:focus-within .focus-indicator {
    display: block;
    opacity: 1;
  }
</style>
