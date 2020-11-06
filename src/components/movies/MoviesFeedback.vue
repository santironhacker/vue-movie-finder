<template>
  <div class="feedback">
    <h3>{{ titleMessage }}</h3>
    <p>
      {{ feedbackText }}
    </p>
    <base-button
      link
      mode="outline"
    >
      {{ buttonText }}
    </base-button>
  </div>
</template>

<script>
export default {
  props: {
    titleMessage: {
      type: String,
      required: true
    },
    feedbackText: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.feedback {
  margin: 1rem;
}
</style>
