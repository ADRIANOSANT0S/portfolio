<template>
    <nav >
        <ul class="nav">
            <li class="nav__item">
                <a class="link-text" href="#home" @click="goToSection('home')">Home</a>
            </li>
            <li class="nav__item">
                <a class="link-text" href="#about" @click="goToSection('about')">Sobre</a>
            </li>
            <li class="nav__item">
                <a class="link-text" href="#skills" @click="goToSection('skills')">Skills</a>
            </li>
            <li class="nav__item">
                <a class="link-text" href="#projects" @click="goToSection('projects')">
                    Projetos
                    <span class="arrow-down open">&#9660;</span>
                </a>
                <ul class="dropdown dropdown--is-hover">
                    <li class="dropdown__item">
                        <a class="link-text" href="#projects" @click="goToSection('projects')">Projetos</a>
                    </li>
                    <li>
                        <router-link to="/detailsProjects" class="link-text dropdown__item">Detalhes projetos</router-link>
                    </li>
                </ul>
            </li>
            <li class="nav__item">
                <a class="link-text" href="#services" @click="goToSection('services')">Serviços</a>
            </li>
            <li>
                <a class="buttonI" href="#contact" @click="goToSection('contact')">Contato</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import navigateToSection from '../../utils/navigation.js'

    export default {
        name: 'NavProject',
        methods: {
            goToSection(sectionId) {
                navigateToSection.call(this, sectionId)
            }
        }
    }
    
</script>

<style src="./style.scss" lang="scss" scoped />
