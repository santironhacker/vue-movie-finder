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
      width="300"
      height="444"
      @error="setAltImg"
    >
  </article>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: () => 'Unknow title'
    },
    director: {
      type: String,
      default: () => 'Unknown director'
    },
    year: {
      type: String,
      default: () => 'Unknown year'
    },
    posterUrl: {
      type: String,
      default: () => setAltImg
    }
  },
  computed: {
    imgDescription () {
      return `Poster from the movie ${this.title}`;
    }
  },
  methods: {
    setAltImg (event) {
      event.target.src = require('@/assets/img-not-available.png');
    }
  }
};
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
