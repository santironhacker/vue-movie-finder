<template>
  <aside>
    <input 
      type="text" 
      v-model.trim="searchInput" 
      :placeholder="placeholderInput" 
      @keyup.enter="submitInput" 
      ref="movieTitle"
    >
    <base-button @click="submitInput" mode="outline">Search</base-button>
  </aside>
</template>

<script>
export default {
  emits: ['search-action'],
  data() {
    return {
      displayValue: '',
      searchInput: '',
      placeholderInput: 'Enter a movie title...'
    }
  },
  methods: {
    submitInput() {
      this.$emit('search-action', this.searchInput);
    }
  },
  mounted() {
    this.$refs.movieTitle.focus();
  }
}
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
