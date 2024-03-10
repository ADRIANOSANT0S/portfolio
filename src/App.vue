<template>
  <HeaderProject />
  <Home />
  <RouterView />
</template>

<script>
import HeaderProject from './components/Header.vue'
import Home from './views/Home/Home.vue';

export default {
  components: {
    HeaderProject,
    Home
  }
}
</script>
<style scoped>

</style>
