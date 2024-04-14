<template>
  <section id="costumer" class="costumer">
    <div class="container"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div class="container-center">
        <h2 class="title">Feedback dos Clientes</h2>
        <p class="middle-text container__p">
          Na busca constante pela qualidade, priorizamos a experiência do cliente em cada interação, garantindo um serviço que vai além das expectativas.
        </p>
      </div>
      <VueAIcarousel :Property="{ID: 'Unique_id'}">
        <div class="costumer__container__items cards">
          <img src="../../../../public/images/costumers/maemis.png" alt="Logo da loja da Maria" class="costumer__avatar">
          <h3 class="small-title">Maria</h3>
          <p class="text">
            O trabalho ocorreu de forma muito clara, ágil e objetiva. Mesmo sendo um serviço pontual, foi atualizando dos avanços até a finalização e textes. Entregou a solução antes do prazo, recomendo.
          </p>
        </div>
        <div class="costumer__container__items">
          <img src="../../../../public/images/costumers/ong.jpeg" alt="Logo da ONG Recanto Esperança" class="costumer__avatar">
          <h3 class="small-title">ONG Recanto Esperança</h3>
          <p class="text">
            Ficamos muito satisfeitos com o serviço prestado. Comunicação clara, trabalho ágil e objetivo, superando nossas expectativas. Agradecemos pela dedicação e profissionalismo, recomendamos sem hesitação
          </p>
        </div>
        <div class="costumer__container__items">
          <img src="../../../../public/images/costumers/willian.png" alt="Willisson Rafael" class="costumer__avatar">
          <h3 class="small-title">Willisson Rafael</h3>
          <p class="text">
            Atendimento eficaz e atencioso, com profissionalismo e índole impecáveis. Recomendo essa prestação de serviço de qualidade excepcional, garantindo satisfação total.
          </p>
        </div>
        <div class="costumer__container__items">
          <img src="../../../../public/images/costumers/fla.jpg" alt="Logo da loja Flávia Pimenta" class="costumer__avatar">
          <h3 class="small-title">Flávia Pimenta</h3>
          <p class="text">
            Excelente serviço! Profissionalismo e atenção destacam-se, garantindo uma experiência positiva. Recomendo sem hesitar!
          </p>
        </div>
      </VueAIcarousel>
    </div>
  </section>
</template>

<script>
  import VueAIcarousel from "vue-ai-carousel"

  export default {
    name: 'Testimonials',
    components: {
      VueAIcarousel
    }
  }
</script>

<style src="./styles.scss" lang="scss" scoped />
