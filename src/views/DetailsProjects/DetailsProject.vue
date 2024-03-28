<template>
  <section>
    <div class="container">
      <div class="projects">
        <h2 class="middle-title">Destaques</h2>
        <ul class="projects__list">
          <li
            class="projects__list__item"
            v-for="project in highline"
            :key="project.id"
          >
            <img
              class="projects__list__item__img"
              :src="project.image"
              :alt="project.title"
            />
            <div class="description">
              <h3 class="title">{{ project.title }}</h3>
              <p class="text">{{ project.description }}</p>
              <h4 class="small-title">Veja o Projeto</h4>
              <div class="routerProject">
                <a :href="project.linkGithub" class="buttonIV" target="_blank">
                  <fa class="btn-icon" :icon="['fab', 'github']"></fa>
                  <span class="btn-text">Github</span>
                </a>
                <a
                  :href="project.linkProduction"
                  class="buttonIV"
                  target="_blank"
                >
                  <fa class="btn-icon" :icon="['fas', 'pager']"></fa>
                  <span class="btn-text">Produção</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="projects">
        <h2 class="middle-title">Projetos Front-end</h2>
        <ul class="projects__list">
          <li
            class="projects__list__item"
            v-for="project in front"
            :key="project.id"
          >
            <img
              class="projects__list__item__img"
              :src="project.image"
              :alt="project.title"
            />
            <div class="description">
              <h3 class="title">{{ project.title }}</h3>
              <p class="text">{{ project.description }}</p>
              <h4 class="small-title">Veja o Projeto</h4>
              <div class="routerProject">
                <a :href="project.linkGithub" class="buttonIV" target="_blank">
                  <fa class="btn-icon" :icon="['fab', 'github']"></fa>
                  <span class="btn-text">Github</span>
                </a>
                <a
                  :href="project.linkProduction"
                  class="buttonIV"
                  target="_blank"
                >
                  <fa class="btn-icon" :icon="['fas', 'pager']"></fa>
                  <span class="btn-text">Produção</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="projects">
        <h2 class="middle-title">Projetos Backend</h2>
        <ul class="projects__list">
          <li
            class="projects__list__item"
            v-for="project in backend"
            :key="project.id"
          >
            <img
              class="projects__list__item__img"
              :src="project.image"
              :alt="project.title"
            />
            <div class="description">
              <h3 class="title">{{ project.title }}</h3>
              <p class="text">{{ project.description }}</p>
              <h4 class="small-title">Veja o Projeto</h4>
              <div class="routerProject">
                <a :href="project.linkGithub" class="buttonIV" target="_blank">
                  <fa class="btn-icon" :icon="['fab', 'github']"></fa>
                  <span class="btn-text">Github</span>
                </a>
                <a
                  :href="project.linkProduction"
                  class="buttonIV"
                  target="_blank"
                >
                  <fa class="btn-icon" :icon="['fas', 'pager']"></fa>
                  <span class="btn-text">Produção</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Highline from '@/views/Collections/ProjectsData/Highline'
import FrontEnd from '@/views/Collections/ProjectsData/FrontEnd'
import BackEnd from '@/views/Collections/ProjectsData/BackEnd'

export default {
  data() {
    return {
      highline: Highline,
      front: FrontEnd,
      backend: BackEnd
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
