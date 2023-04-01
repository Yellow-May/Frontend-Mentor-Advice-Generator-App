<script>
import FooterVue from './components/Footer.vue';
import CustomButtonVue from './components/CustomButton.vue';
import CustomDividerVue from './components/CustomDivider.vue';
import getAdvice from './utils/getAdvice';

export default {
	data() {
		return {
			slip_id: null,
			slip_advice: null,
			loading: true,
		};
	},
	mounted() {
		this.requestAdvice();
	},
	components: {
		FooterVue,
		CustomButtonVue,
		CustomDividerVue,
	},
	methods: {
		async requestAdvice() {
			this.loading = true;
			const slip = await getAdvice();
			this.slip_id = slip.id;
			this.slip_advice = slip.advice;
			this.loading = false;
		},
	},
};
</script>

<template>
	<main>
		<h1>Advice #{{ slip_id }}</h1>

		<div v-bind:hidden="!loading" class="loading">Loading...</div>
		<p v-bind:hidden="loading" class="advice">"{{ slip_advice }}"</p>

		<CustomDividerVue />

		<CustomButtonVue :requestAdvice="requestAdvice" />
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
	padding: 0 5%;
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

main div.loading {
	margin: 0 40px;
	margin-bottom: 124px;
	text-align: center;
	color: var(--Light-Cyan);
	font-size: 1.25em;
	line-height: 1.8rem;
	letter-spacing: 2.5px;
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
		padding: 0 10%;
	}
}

@media (min-width: 768px) {
	#app {
		padding: 0 15%;
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
		padding: 0 20%;
	}
}

@media (min-width: 1240px) {
	#app {
		padding: 0 30%;
	}
}
</style>
