<script>
  import Header from '$lib/components/header.svelte';
  import '../styles/global.css';
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';

  $: refresh = $page.url;
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

{#key refresh}
  <main in:fade={{ duration: 100 }}>
    <slot />
  </main>
{/key}

<style>
  main {
    max-width: 960px;
    margin: 5rem auto 0;
  }
</style>
