<template>
  <section id="services" class="services">
    <div class="container" data-aos="fade-up" data-aos-duration="2000">
      <div class="container-center">
        <h2 class="middle-title">Serviços</h2>
        <p class="middle-text container__p">
          Minha abordagem vai além do simples desenvolvimento de aplicações. Eu
          me dedico a criar soluções tecnológicas personalizadas, elaboradas
          para impulsionar o crescimento do seu negócio de forma eficaz e
          inovadora.
        </p>
      </div>
      <ul class="services__list">
        <li
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          v-for="(detail, id) in details"
          :key="id"
          class="services__list__item"
          :style="{ backgroundImage: 'url(' + detail.image + ')' }"
        >
          <h3 class="small-title">{{ detail.title }}</h3>
          <p class="text__p">{{ detail.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ServiceData from '@/views/Collections/ServiceData/service'

export default {
  name: 'Services',

  data() {
    return {
      details: ServiceData
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
