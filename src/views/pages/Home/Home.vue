<template>
	<section id="home" class="home">
		<div class="container">
			<div class="home__info">
				<h2 class="title">
					Olá, Sou Adriano Santos
				</h2>
				<h1 class="large-title">
					Engenheiro Full Stack
				</h1>
				<p class="large-text">
					Apaixonado por inovação tecnológica. Desenvolvo soluções completas, desde a interface do usuário até a infraestrutura de back-end. Estou sempre me dedicando para entregar as soluções mais eficazes.
				</p>
				<ButtonsSocial />
			</div>
			<div class="home__author">
				<img class="home__author__img" src="@/assets/images/I.png" alt="Imagem do Adriano">
			</div>
		</div>
	</section>
</template>

<script>
	import ButtonsSocial from '@/components/Social_links/Buttons.vue'

	export default {
		name: 'Home',
		components: {
			ButtonsSocial,
		}
		
	}
</script>

<style src="./style.scss" lang="scss" scoped />