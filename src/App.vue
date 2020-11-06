<template>
  <TheHeader />
  <main>
    <router-view />
  </main>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #465775;
  text-align: center;
  background-color: $background-secondary;
}
</style>
