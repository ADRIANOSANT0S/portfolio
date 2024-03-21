<template>
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="middle-title">Transforme sua Visão em Realidade</h2>
            <p class="middle-text">
                Entre em contato, seu projeto merece sair do papel e estou aqui para torná-lo realidade. Não espere mais, contate-me agora mesmo e vamos trabalhar juntos para alcançar seus objetivos!
            </p>
            <div class="contact__form">
                <FormProject />
                <div class="contact__form__address">
                <div class="contact__form__address__item">
                    <fa class="icon" :icon="['far', 'map']"></fa>
                    <div class="contact__data">
                        <h3 class="small-title">Endereço</h3>
                        <span class="middle-text">Embu das Artes - São Paulo</span>
                    </div>
                </div>
                <div class="contact__form__address__item">
                    <fa class="icon" :icon="['far', 'envelope']"></fa>
                    <div class="contact__data">
                        <h3 class="small-title">Email</h3>
                        <span class="middle-text">adrlanosantos@hotmail.com</span>
                    </div>
                </div>
                <div class="contact__form__address__item">
                    <fa class="icon" :icon="['far', 'user']"></fa>
                    <div class="contact__data">
                        <h3 class="small-title">Telefone</h3>
                        <span class="middle-text"> 11 9 4076-3490</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import FormProject from '@/components/Form/Form.vue'

    export default {
        name: 'Contact',
        components: { FormProject }
    }
</script>

<style src="./style.scss" lang="scss" scoped />