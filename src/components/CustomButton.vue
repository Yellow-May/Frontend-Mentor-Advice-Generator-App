<script>
export default {
	props: {
		requestAdvice: Function,
	},
};
</script>

<template>
	<button id="'new_advice'" title="get new advice" @click="requestAdvice()">
		<img src="../images/icon-dice.svg" alt="dice" />
	</button>
</template>

<style scoped>
button {
	height: 48px;
	width: 48px;
	border: none;
	border-radius: 50%;
	background-color: var(--Neon-Green);
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	cursor: pointer;
	padding: 16px;
	position: absolute;
	bottom: -24px;
	left: 50%;
	transform: translateX(-50%);
}

button img {
	width: 100%;
	height: 100%;
}

button:hover::before {
	content: '';
	position: absolute;
	width: 110%;
	height: 110%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background: var(--Neon-Green);
	border-radius: 50%;
	filter: blur(8px);
}

@media (min-width: 768px) {
	button {
		width: 64px;
		height: 64px;
		bottom: -32px;
		padding: 20px;
	}
}
</style>
