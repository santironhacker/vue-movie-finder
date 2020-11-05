<template>
  <TheHeader/>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #465775;
  background-color: #F5F0F6;
  height: 100%;
  color: black !important;
}
</style>
