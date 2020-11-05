<template>
  <a
    v-if="hyperlink"
    :class="mode"
    :href="href"
  >
    <slot />
  </a>
  <router-link
    v-else-if="link"
    :class="mode"
    :to="to"
  >
    <slot />
  </router-link>
  <button
    v-else
    :class="mode"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    hyperlink: {
      type: Boolean,
      required: false,
      default: false
    },
    href: {
      type: String,
      required: false,
      default: '/'
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
};
</script>

<style lang="scss" scoped>
button,
a {
  text-decoration: none;
  font: inherit;
  color: $secondary-color;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 0.5rem;
  display: inline-block;
}

.flat {
  background-color: transparent;
  color: $accent-color;
  border: none;
  font-weight: 500;
}

.outline {
  background-color: $primary-color;
  border: 1px solid $accent-color;
  border-radius: 10px;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
}

.outline:hover {
  background-color: $background-tertiary;
}

.flat:hover,
.flat:active {
  color: $secondary-color;
}
</style>
