<script>
  import Header from '$lib/header.svelte';
  import '../styles/global.css';
</script>

<Header />

<div class="container">
  <main>
    <slot />
  </main>
</div>

<style>
  .container {
    max-width: 960px;
    margin: 5rem auto 0;
  }
</style>
