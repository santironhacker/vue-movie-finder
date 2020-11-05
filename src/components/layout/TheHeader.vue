<template>
  <header>
    <nav>
      <img
        class="logo"
        src="../../assets/movie-roll-icon.png"
        alt="Website logo"
      >
      <div>
        <h1>
          <router-link to="/">
            Movie Finder
          </router-link>
        </h1>
        <h5>Keep track of your favorite movies in just a click</h5>
      </div>
      <ul>
        <li>
          <router-link to="/home">
            Homepage
          </router-link>
        </li>
        <li>
          <router-link to="/movies">
            Movies
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: $background-primary;
  display: flex;
}

header a {
  text-decoration: none;
  color: $background-secondary;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  font-weight: 700;
}

h1,
h5 {
  text-align: left;
  margin: 0;
}

h1 a {
  color: $primary-color;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  color: $secondary-color;
}

h5 {
  padding: 0 1.5rem;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}

li {
  margin: 0 0.5rem;
}

li a:active,
li a:hover,
li a.router-link-active {
  border: 1px solid $background-primary;
  border-radius: 10px;
  background-color: $secondary-color;
  color: $background-primary;
  border-color: $primary-color;
}

.logo {
  width: 50px;
  height: 50px;
}
</style>
