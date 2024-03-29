<template>
  <header class="header">
    <div class="container">
      <router-link to="/">
        <img
          class="header__brand"
          src="@/assets/images/logo.png"
          alt="Imagem do Adriano"
        />
      </router-link>
      <NavProject />
    </div>
  </header>
</template>

<script>
import NavProject from '../Nav/Nav.vue'

export default {
  name: 'Header',

  components: {
    NavProject
  }
}
</script>

<style src="./style.scss" lang="scss" />
