<template>
  <div class="container">
    <h2>Matching movies</h2>
    <div v-if="Object.keys(movies).length > 0">
      <base-card class="actionsCard">
        <h3>Looking for more results?</h3>
        <p>{{ totalResults }} results found for the provided search title "{{ searchTitle }}". You are currently in page {{ page }}.</p>
        <base-button 
          mode="outline"
          @click="onPreviousPage"
          :disabled="page === 1"
        >
          Previous page
        </base-button>
        <base-button 
          mode="outline" 
          @click="onNextPage"
        >
          Next page
        </base-button>
      </base-card>
    </div>
  </div>
</template> 

<script>
import { getMoviesByTitle } from '../api/movies.api';

export default {
  name: 'MoviesView',
  data() {
    return {
      movies: {},
      page: 1,
      totalResults: 30,
      searchTitle: '',
      apiResultsPerPage: 10
    }
  },
  methods: {
    loadMovies() {
      // Check if the input changed
      if(this.searchTitle !== this.$route.query['title']) {
        this.searchTitle = this.$route.query['title'];
        this.movies = new Object({});
      }
      if(!Object.prototype.hasOwnProperty.call(this.movies, this.page)) {
        getMoviesByTitle(this.searchTitle, this.page)
        .then(res => {
          const onePageResults = [];
          res.data.Search.forEach(movie => {
            onePageResults.push(movie);
          });
          this.movies[this.page] = onePageResults;
          this.totalResults = res.data.totalResults;
        })
        .catch(error => {
          console.log(error);
        })
        .then(() => {
          console.log('always executed');
        });
      }
    },
    onPreviousPage() {
      this.page--;
      this.loadMovies();
    },
    onNextPage() {
      this.page++;
      this.loadMovies();
    }
  },
  mounted() {
    this.loadMovies();
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15)), url("../assets/movie-room-original.jpg") no-repeat center center fixed;
  width: 100%;
  height: auto;
  padding-bottom: 5rem;
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
    height: 200px;
    width: auto;
    border-radius: 10px;
    border: solid 1px $accent-color;
  }
}
</style>