<template>
  <header>
    <nav>
      <img class="logo" src="../../assets/movie-roll-icon.png" alt="Website logo">
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

}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #56E39F;
  display: flex;
}

header a {
  text-decoration: none;
  color: #F5F0F6;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  font-weight: 700;
}

h1, h5 {
  text-align: left;
  margin: 0;
}

h1 a {
  color: #465775;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  color: white;
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
  border: 1px solid #56E39F;
  border-radius: 10px;
  background-color: white;
  color: #56E39F;
  border-color: #465775;
}

.logo {
  width: 50px;
  height: 50px;
}
</style>