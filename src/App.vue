<template>
  <HeaderProject />
  <main>
    <RouterView />
    <Contact />
  </main>
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
}

html,
body {
  background-color: $mainColor;
  color: $textColor;
}

html {
  scroll-behavior: smooth;
}

/* Responsável por alterar o layout do icon do carosel */
.PeVNCommon {
  color: $gold !important;
  background-color: transparent !important;
  text-shadow: none !important;
}

.Slider_Button {
  color: transparent !important;
  background-color: $textColor !important;
  border-radius: 0 !important;
  width: 24px !important;
  height: 4px !important;
}

.Slider_Button_Active {
  background-color: $gold !important;
  border: none !important;
}
</style>
