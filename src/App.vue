<template>
  <HeaderProject />
  <RouterView />
  <Contact />
  <FooterProject />
</template>

<script>
import HeaderProject from '@/components/Header/Header.vue'
import FooterProject from '@/components/Footer/Footer.vue'
import Contact from '@/components/Contact/ContactData.vue'

export default {
  components: {
    HeaderProject,
    FooterProject,
    Contact
  }
}
</script>

<style lang="scss">
@import '@/assets/SCSS/main.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Inter';
  scrollbar-width: thin;
  scrollbar-color: $blueII $black;
  overflow-x: hidden;
}

html,
body {
  background-color: $mainColor;
  color: $textColor;
}

html {
  scroll-behavior: smooth;
}
</style>
