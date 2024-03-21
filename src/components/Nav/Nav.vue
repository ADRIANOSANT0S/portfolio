<template>
    <nav >
        <ul class="nav">
            <li class="nav__item">
                <a class="link-text" href="#home" @click="navigateToSection('home')">Home</a>
            </li>
            <li class="nav__item">
                <a class="link-text" href="#about" @click="navigateToSection('about')">Sobre</a>
            </li>
            <li class="nav__item">
                <a class="link-text" href="#skills" @click="navigateToSection('skills')">Skills</a>
            </li>
            <li class="nav__item">
                <a class="link-text" href="#projects" @click="navigateToSection('projects')">
                    Projetos
                    <span class="arrow-down open">&#9660;</span>
                </a>
                <ul class="dropdown dropdown--is-hover">
                    <li class="dropdown__item">
                        <a class="link-text" href="#projects" @click="navigateToSection('projects')">Projetos</a>
                    </li>
                    <li>
                        <router-link to="/detailsProjects" class="link-text dropdown__item">Detalhes projetos</router-link>
                    </li>
                </ul>
            </li>
            <li class="nav__item">
                <a class="link-text" href="#services" @click="navigateToSection('services')">Serviços</a>
            </li>
            <li>
                <a class="buttonI" href="#contact" @click="navigateToSection('contact')">Contato</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'NavProject',
        methods: {
            navigateToSection(sectionId) {
                const currentRoute = this.$route.path
                if (currentRoute === '/detailsProjects') {
                    this.$router.push({ path: '/', hash: '#' + sectionId })
                } else {
                    const element = document.getElementById(sectionId)
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                    }
                }
            }
        }
    }
    
</script>

<style src="./style.scss" lang="scss" scoped />
