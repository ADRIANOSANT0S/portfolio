<template>
    <div class="social">
        <a class="buttonII" href="#contact" target="_blank">
            <span class="social__button">
                <span>Contata me</span>
                <fa :icon="['fas', 'arrow-right']"></fa>
            </span>
        </a>
        <ul v-for="(redes, index) in links" :key="index">
            <a :href="redes.link" class="buttonIII" target="_blank">
                <fa :icon="redes.icon"></fa>
            </a>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ButtonsSocial',
        data() {
            return {
                links: [
                    { link: 'https://github.com/ADRIANOSANT0S', icon: ['fab', 'github'] },
                    { link: 'https://www.linkedin.com/in/adrianos-santos', icon: ['fab', 'linkedin-in'] },
                    { link: "mailto: 'adrlanosantos@gmail.com'", icon: ['far', 'envelope'] }
                ]
            }
        }
    }
</script>

<style src="./style.scss" lang="scss" />
