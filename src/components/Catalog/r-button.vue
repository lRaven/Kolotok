<template>
	<button class="r-button">{{ text }}</button>
</template>

<script>
	export default {
		name: "rButton",
		props: {
			text: String,
		},
	};
</script>

<style lang="scss" scoped>
	.r-button {
		// cursor: pointer;
		background: linear-gradient(
			270.95deg,
			#000888 0%,
			#004cb8 46.35%,
			#005fd3 67.71%,
			#4fa5ff 100%
		);
		border-radius: 3rem;
		padding: 1.3rem 2.5rem;
		transition: all 0.2s ease;
		color: #fff;
		&:hover {
			transform: translateY(-0.3rem);
		}
		&:active {
			transform: translateY(-0.1rem);
		}
	}
</style>
