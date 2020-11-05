<template>
  <aside>
    <input
      ref="movieTitle"
      v-model.trim="searchInput"
      type="text"
      :placeholder="placeholderInput"
      @keyup.enter="submitInput"
    >
    <base-button
      mode="outline"
      @click="submitInput"
    >
      Search
    </base-button>
  </aside>
</template>

<script>
export default {
  emits: ['search-action'],
  data () {
    return {
      displayValue: '',
      searchInput: '',
      placeholderInput: 'Enter a movie title...'
    };
  },
  mounted () {
    this.$refs.movieTitle.focus();
  },
  methods: {
    submitInput () {
      if (this.searchInput !== '') {
        this.$emit('search-action', this.searchInput);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
aside {
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
}

input {
  width: 70%;
  padding: 0.5rem;
  font-family: inherit;
  font-weight: 500;
}
</style>
