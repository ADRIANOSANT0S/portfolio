<template>
  <nav class="nav">
    <ul class="nav__list" :class="{ 'hamburger-wrapper--is-open': isMenuOpen }">
      <li class="nav__list__item">
        <a
          class="link-text"
          href="#home"
          @click="goToSection('home'), toggleMenu()"
          >Home</a
        >
      </li>
      <li class="nav__list__item">
        <a
          class="link-text"
          href="#about"
          @click="goToSection('about'), toggleMenu()"
          >Sobre</a
        >
      </li>
      <li class="nav__list__item">
        <a
          class="link-text"
          href="#skills"
          @click="goToSection('skills'), toggleMenu()"
          >Skills</a
        >
      </li>
      <li
        class="nav__list__item"
        :class="{ 'nav__list__item--is-open': isDropdownOpen }"
      >
        <span class="link-text" @click="toggleDropdown()">
          Projetos
          <span class="arrow-down open">&#9660;</span>
        </span>
        <ul class="dropdown dropdown--is-hover">
          <li class="dropdown__item">
            <a
              class="link-text"
              href="#projects"
              @click="goToSection('projects'), toggleMenu()"
              >Projetos</a
            >
          </li>
          <li>
            <router-link
              to="/detailsProjects"
              class="link-text dropdown__item"
              @click="toggleMenu()"
              >Detalhes projetos</router-link
            >
          </li>
        </ul>
      </li>
      <li class="nav__list__item">
        <a
          class="link-text"
          href="#services"
          @click="goToSection('services'), toggleMenu()"
          >Serviços</a
        >
      </li>
      <li class="nav__list__item">
        <a
          class="link-text"
          href="#costumer"
          @click="goToSection('costumer'), toggleMenu()"
        >
          Depoimentos
        </a>
      </li>
    </ul>
    <a class="buttonI" href="#contact" @click="goToSection('contact')"
      >Contato</a
    >
    <div
      class="hamburger-wrapper"
      @click="toggleMenu()"
      :class="{ 'hamburger-wrapper--is-open': isMenuOpen }"
    >
      <div class="menu">
        <span class="menu__icon"></span>
        <span class="menu__icon"></span>
        <span class="menu__icon"></span>
      </div>
    </div>
  </nav>
</template>

<script>
import navigateToSection from '../../utils/navigation.js'

export default {
  name: 'NavProject',
  data() {
    return {
      isMenuOpen: false,
      isDropdownOpen: false
    }
  },

  methods: {
    goToSection(sectionId) {
      navigateToSection.call(this, sectionId)
    },
    //Menu dropdown
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    //Menu hamburger
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
