<template>
  <div class="feedback">
    <h3>{{ titleMessage }}</h3>
    <p>
      {{ feedbackText }}
    </p>
    <base-button
      link
      mode="outline"
      class="feedback-button"
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

<style lang="scss" scoped>
.feedback {
  margin: 1rem;

  .feedback-button {
    margin: 1rem;
  }
}
</style>
