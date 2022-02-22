<header>
  <a href="/">
    <h1 class="logo">Puggit</h1>
  </a>

  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/settings">Settings</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  .logo {
    cursor: pointer;
  }

  header a {
    text-decoration: none;
    color: var(--clr-text);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--clr-secondary);
  }

  ul {
    display: flex;
    gap: 2rem;
    list-style-type: none;
    padding: 0;
  }
</style>
