<script>
  export let name = '';
  export let label = '';
  export let value = '';

  // Custom change function to dispatch data
  function change() {
    dispatch('change', value);
  }
</script>

<label for={name}>{label}</label>
<input
  type="text"
  on:change|preventDefault={change}
  id={name}
  bind:value
  on:keydown
/>
