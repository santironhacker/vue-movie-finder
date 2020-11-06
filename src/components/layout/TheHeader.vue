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
  display: flex;
  width: 100%;
  height: 5rem;
  background-color: $background-primary;
}

header a {
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  color: $background-secondary;
  text-decoration: none;
  border: 1px solid transparent;
}

h1,
h5 {
  margin: 0;
  text-align: left;
}

h1 a {
  margin: 0;
  color: $primary-color;
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
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
}

header ul {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-left: auto;
  list-style: none;
}

li {
  margin: 0 0.5rem;
}

li a:active,
li a:hover,
li a.router-link-active {
  color: $background-primary;
  background-color: $secondary-color;
  border: 1px solid $background-primary;
  border-color: $primary-color;
  border-radius: 10px;
}

.logo {
  width: 50px;
  height: 50px;
}
</style>
