<template>
  <section class="section-1">
    <h2>Movie Finder</h2>
    <base-card>
      <p>
        It's happen to all of us before. After an exciting conversation with your pals, you come back home thinking:
      </p>
      <q>I must see this movie!</q>
      <p>
        However, next morning when you wake up you forgot what was all about.
        <strong>Movie Finder</strong> watches after your memory to keep track of your friend's best picks.
      </p>
      <movies-searchbar @search-action="submitSearch" />
    </base-card>
  </section>
</template>

<script>
import MoviesSearchbar from '../components/movies/MoviesSearchbar.vue';

export default {
  name: 'HomeView',
  components: {
    MoviesSearchbar
  },
  methods: {
    submitSearch (data) {
      this.$router.push({ path: 'movies', props: { movieTitle: data }, query: { title: data } });
    }
  }
};
</script>

<style lang="scss" scoped>
.section-1 {
  /* Set background style */
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url("../assets/movie-rolls-original.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  /* Set rules to fill background */
  min-height: 90vh;
  min-width: 100%;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
}

h2 {
  @include page-title();
}

p {
  text-align: justify;
}

q {
  font-style: italic;
  font-size: 18px;
}
</style>
