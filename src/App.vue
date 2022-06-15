<script setup>
import FooterVue from './components/Footer.vue';
import CustomButtonVue from './components/CustomButton.vue';
import CustomDividerVue from './components/CustomDivider.vue';
</script>

<template>
	<main>
		<h1>Advice #117</h1>

		<p class="advice">"It is easy to sit up and take notice, what's difficult is getting up and taking action"</p>

		<CustomDividerVue />

		<CustomButtonVue />
	</main>

	<FooterVue />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400&@800&display=swap');
@import './styles/base.css';
@import './styles/variables.css';

#app {
	min-height: 100%;
	width: 100%;
	margin: 0 auto;
	padding: 5%;
	background-color: var(--Dark-Blue);

	font-family: 'Manrope', sans-serif;
	font-weight: 800;

	display: flex;
	align-items: center;
	justify-content: center;
}

main {
	position: relative;
	width: 100%;
	min-width: 100%;
	background-color: var(--Dark-Grayish-Blue);
	border-radius: 16px;
}

main h1 {
	color: var(--Neon-Green);
	font-size: 0.5em;
	letter-spacing: 6px;
	text-transform: uppercase;
	margin: 40px 0 32px 0;
	text-align: center;
}

main p.advice {
	margin: 0 40px;
	margin-bottom: 104px;
	text-align: center;
	color: var(--Light-Cyan);
	font-size: 1.25em;
	line-height: 1.8rem;
	letter-spacing: 2.5px;
}

@media (min-width: 640px) {
	#app {
		padding: 10%;
	}
}

@media (min-width: 768px) {
	#app {
		padding: 15%;
	}

	main h1 {
		font-size: 0.75em;
	}

	main p.advice {
		font-size: 1.5em;
		line-height: 2.5rem;
		margin-bottom: 142px;
	}
}

@media (min-width: 960px) {
	#app {
		padding: 20%;
	}
}

@media (min-width: 1240px) {
	#app {
		padding: 30%;
	}
}
</style>
