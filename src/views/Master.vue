<template>
  <Home />
  <about />
  <Skills />
  <Projects />
  <Services />
  <Testimonials />
</template>

<script>
import Home from './pages/Home/Home.vue'
import About from './pages/About/About.vue'
import Skills from './pages/Skills/Skills.vue'
import Projects from './pages/Projects/Projects.vue'
import Services from './pages/Services/Services.vue'
import Testimonials from './pages/Testimonials/Testimonials.vue'

export default {
  name: 'Master',
  components: { Home, About, Skills, Projects, Services, Testimonials }
}
</script>
