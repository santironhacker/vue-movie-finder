<template>
  <article>
    <ul>
      <li>
        <strong>Title: </strong>
        <span>{{ title }}</span>
      </li>
      <li>
        <strong>Directed by: </strong>
        <span>{{ director }}</span>
      </li>
      <li>
        <strong>Year: </strong>
        <span>{{ year }}</span>
      </li>
    </ul>
    <img
      :src="posterUrl"
      :alt="imgDescription"
      @error="setAltImg"
      width="300"
      height="444"
    >
  </article>
</template>

<script>
export default {
  props: [
    'id',
    'title',
    'director',
    'year',
    'posterUrl'
  ],
  methods: {
    setAltImg (event) {
      event.target.src = require('@/assets/img-not-available.png')
    }
  },
  computed: {
    imgDescription () {
      return `Poster from the movie ${this.title}`
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
  max-width: 300px;
  color: $secondary-color;

  strong {
    color: $background-primary;
  }
}

img[alt~="Poster"] {
  padding: 1rem;
  max-width: 300px;
}
</style>
