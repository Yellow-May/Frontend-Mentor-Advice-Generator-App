<template>
	<div class="divider">
		<picture>
			<source media="(min-width: 480px)" srcset="../images/pattern-divider-desktop.svg" />
			<img src="../images/pattern-divider-mobile.svg" alt="divider" />
		</picture>
	</div>
</template>

<style scoped>
div.divider {
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 32px;
	position: absolute;
	bottom: 40px;
}

@media (min-width: 768px) {
	div.divider {
		bottom: 64px;
	}
}
</style>
