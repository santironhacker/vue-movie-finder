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
  display: inline-block;
  margin-right: 0.5rem;
  font: inherit;
  color: $secondary-color;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
}

.flat {
  font-weight: 500;
  color: $accent-color;
  background-color: transparent;
  border: none;
}

.outline {
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  background-color: $primary-color;
  border: 1px solid $accent-color;
  border-radius: 10px;
}

.outline:hover {
  background-color: $background-tertiary;
}

.flat:hover,
.flat:active {
  color: $secondary-color;
}

button:disabled,
button:disabled:hover {
  cursor: not-allowed;
  background-color: $background-disabled;
}
</style>
