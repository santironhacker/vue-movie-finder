<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import "../../styles/global.scss";

.card {
  margin: 0 auto;
  padding: 2rem;
  width: 60%;
  background-color: $background-primary;
  opacity: 0.9;
  border: solid 1px $primary-color;
  border-radius: 20px;
}
</style>
