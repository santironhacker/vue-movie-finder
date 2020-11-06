<template>
  <footer>
    <ul>
      <h3>About the project</h3>
      <li>
        Website designed by <base-button
          hyperlink
          mode="flat"
          href="https://santiagoramos.es/"
        >
          Santiago Ramos
        </base-button>
      </li>
      <li>
        Developed using <base-button
          hyperlink
          mode="flat"
          href="https://vuejs.org/"
        >
          VueJS
        </base-button>framework
      </li>
      <li>
        Images provided by <base-button
          hyperlink
          mode="flat"
          href="https://unsplash.com/"
        >
          Unsplash.com
        </base-button>
      </li>
      <li>
        Logo provided by <base-button
          hyperlink
          mode="flat"
          href="https://www.freepik.com/"
        >
          Freepik.com
        </base-button>
      </li>
      <li>
        Movies API provided by <base-button
          hyperlink
          mode="flat"
          href="https://www.omdbapi.com/"
        >
          OMDB
        </base-button>
      </li>
    </ul>
    <ul>
      <h3>Contact us</h3>
      <li>I want to contribute to this project.</li>
      <div>
        <img
          class="logo"
          src="../../assets/movie-roll-icon.png"
          alt="Website logo"
        >
        <h1>Movie Finder</h1>
      </div>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  text-align: left;
  background-color: $background-primary;
}

ul {
  padding: 2rem 4rem;
  list-style: none;

  div {
    display: flex;
  }
}

h3 {
  margin-top: 0;
}

.logo {
  width: 50px;
  height: 50px;
  padding: 1rem 1rem 1rem 0;
}
</style>
