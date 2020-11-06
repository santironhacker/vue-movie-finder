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
  width: 60%;
  padding: 2rem;
  margin: 0 auto;
  background-color: $background-primary;
  border: solid 1px $primary-color;
  border-radius: 20px;
  opacity: 0.9;
}
</style>
