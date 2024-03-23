<template>
    <section id="projects" class="projects">
        <div class="container">
            <h2 class="middle-title">Projetos</h2>
            <nav class="projects__nav">
                <button class="link-text projects__nav__button" type="button" v-for="(button, index) in buttons" :key="index" @click="toggleTab(index)">{{ button }}</button>
            </nav>
            <ul class="projects__list" v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index" data-tab-id="index">
                <li class="projects__list__item" v-for="project in tab" :key="project.id">
                    <img class="projects__list__item__img" :src="project.image" :alt="project.title">
                    <div class="projects__list__item__detail">
                        <h4 class="small-title">{{ project.title }}</h4>
                        <p class="small-tex">{{ project.technology }}</p>
                        <button class="buttonII">
                            <router-link target="_blank" :id="project.id" :to="project.id" class="link-text">
                                Detalhe projetos 
                                <fa :icon="['fas', 'arrow-right']"></fa>
                            </router-link>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import Highline from '@/views/Collections/ProjectsData/Highline'
    import FrontEnd from '@/views/Collections/ProjectsData/FrontEnd'
    import BackEnd from '@/views/Collections/ProjectsData/BackEnd'

    export default {
        name: 'Projects',

        data() {
            return {
                buttons: ['Destaque', 'Front-end', 'Back-end'],
                tabs: [Highline, FrontEnd, BackEnd],
                activeTab: 0
            }
        },

        methods: {
            toggleTab(index) {
                this.activeTab = index;
            }
        }    
    }
</script>

<style src="./style.scss" lang="scss" scoped />