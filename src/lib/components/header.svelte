<header>
  <a href="/">
    <img class="logo" src="/img/puggit-wordmark.svg" alt="Puggit" />
  </a>

  <nav>
    <ul>
      <li class="nav-element">
        <a href="/">Home</a>
      </li>
      <li class="nav-element">
        <a href="/about">About</a>
      </li>
      <li class="nav-element">
        <a href="/settings">Settings</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  .logo {
    cursor: pointer;
    width: auto;
    height: 2.5rem;
    position: relative;
    top: 0.2rem;
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
    border-bottom: 1px solid var(--clr-background-alt);
  }

  ul {
    display: flex;
    gap: 2rem;
    list-style-type: none;
    padding: 0;
  }

  .nav-element a {
    font-family: 'Montserrat', sans-serif;
    transition: color 200ms;
  }

  .nav-element:hover a {
    color: var(--clr-primary);
  }
</style>
