<script>
  import Header from '$lib/components/header.svelte';
  import '../styles/global.css';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Noto+Serif&display=swap"
    rel="stylesheet"
  />
  <title>Puggit</title>
</svelte:head>

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
