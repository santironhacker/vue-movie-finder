<template>
  <div class="container">
    <h2>Matching movies</h2>
    <div v-if="!isLoading && Object.keys(movies).length > 0">
      <movies-slider :movies="movies[page]" />
      <base-card class="actionsCard">
        <h3>Looking for more results?</h3>
        <p>{{ totalResults }} results found for the provided search title "{{ searchTitle }}". You are currently in page {{ page }}.</p>
        <base-button
          mode="outline"
          :disabled="page === 1"
          @click="onPreviousPage"
        >
          Previous page
        </base-button>
        <base-button
          mode="outline"
          :disabled="isNoMorePages"
          @click="onNextPage"
        >
          Next page
        </base-button>
        <div v-show="isNoMorePages">
          <base-button
            link
            mode="outline"
          >
            Try another title
          </base-button>
        </div>
      </base-card>
    </div>
    <base-card v-else>
      <article v-show="isLoading">
        <base-spinner />
      </article>
      <article 
        v-show="!isLoading"
        class="not-found"
      >
        <img
          :src="require('@/assets/search-loupe.jpg')"
          alt="Image of a loupe over a computer"
        >
        <movies-feedback
          v-if="searchTitle === ''"
          title-message="How to use the Movie Finder"
          feedback-text="Please enter a movie title of your choice to display some matching results."
          button-text="Enter a title"
        />
        <movies-feedback
          v-else-if="isError"
          title-message="An error occurred"
          feedback-text="Please try again later or check your internet connection."
          button-text="Thanks, I will try later"
        />
        <movies-feedback
          v-else
          title-message="No results found"
          :feedback-text="`No matching results for the provided title &quot;${searchTitle}&quot;. Please try with a new search.`"
          button-text="Try another title"
        />
      </article>
    </base-card>
  </div>
</template>

<script>
import { getMoviesByTitle } from '../api/movies.api';
import MoviesSlider from '../components/movies/MoviesSlider.vue';
import MoviesFeedback from '../components/movies/MoviesFeedback.vue';

export default {
  name: 'MoviesView',
  components: {
    MoviesSlider,
        MoviesFeedback
  },
  data () {
    return {
      movies: {},
      page: 1,
      totalResults: 0,
      searchTitle: '',
      apiResultsPerPage: 10,
      isLoading: true,
      isError: false
    };
  },
  computed: {
    isNoMorePages() {
      let maxPages = Math.floor(this.totalResults / this.apiResultsPerPage);
      if ((this.totalResults % this.apiResultsPerPage) > 0.99) maxPages++;
      return this.page >= maxPages;
    }
  },
  mounted () {
    this.loadMovies();
  },
  methods: {
    loadMovies () {
      this.isLoading = true;
      this.isError = false;
      const queryTitle = this.$route.query.title;
      if (queryTitle && (this.searchTitle !== queryTitle)) {
        this.searchTitle = queryTitle;
        this.movies = {};
      }
      if (!Object.prototype.hasOwnProperty.call(this.movies, this.page)) {
        getMoviesByTitle(this.searchTitle, this.page)
          .then(res => {
            const onePageResults = [];
            if (res.data && (res.data.Response === 'True')) {
              res.data.Search.forEach(movie => {
                onePageResults.push(movie);
              });
              this.movies[this.page] = onePageResults;
              this.totalResults = res.data.totalResults;
            }
          })
          .catch(error => {
            this.isError = true;
          })
          .then(() => {
            this.isLoading = false;
          });
      }
    },
    onPreviousPage () {
      this.page--;
      this.loadMovies();
    },
    onNextPage () {
      this.page++;
      this.loadMovies();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: auto;
  padding-bottom: 5rem;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15)), url("../assets/movie-room-original.jpg") no-repeat center center fixed;
}

h2 {
  @include page-title($secondary-color);
}

h3 {
  color: $accent-color;
}

.actionsCard {
  button {
    margin: 1rem;
  }
}

.not-found {
  display: flex;

  img {
    width: auto;
    height: 200px;
    border: solid 1px $accent-color;
    border-radius: 10px;
  }
}
</style>
