<template>
  <section id="skills" class="skills">
    <div class="container" data-aos="fade-up" data-aos-duration="2000">
      <div class="container-center">
        <h2 class="middle-title">Minhas Skills</h2>
        <blockquote class="middle-text">
          <em>
            "Os homes obtém êxito não por aquilo que sabem, mas pelo que se
            lembram e põem de fato em uso." -
          </em>
          Myles Gaythwaite
        </blockquote>
      </div>

      <ul class="skills__list">
        <li
          data-aos="fade-up"
          data-aos-duration="2000"
          class="skills__list__item"
          v-for="(skill, id) in mySkills"
          :key="id"
        >
          <img
            class="skills__list__item__img"
            :src="skill.image"
            :alt="'Logo HTML' + skill.title"
          />
          <h3 class="title">{{ skill.title }}</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import SkillsData from '@/views/Collections/SkillsData/Skills'

export default {
  name: 'Skills',

  data() {
    return {
      mySkills: SkillsData
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
