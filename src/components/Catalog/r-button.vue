<template>
	<button class="r-button" :type="type">{{ text }}</button>
</template>

<script>
	export default {
		name: "rButton",
		props: {
			type: String,
			text: String,
		},
	};
</script>

<style lang="scss" scoped>
	.r-button {
		background: linear-gradient(
			270.95deg,
			#000888 0%,
			#004cb8 46.35%,
			#005fd3 67.71%,
			#4fa5ff 100%
		);
		border-radius: 3rem;
		padding: 1.3rem 3.5rem;
		transition: all 0.2s ease;
		font-size: 1.6rem;
		font-weight: 700;
		color: #fff;
		&:hover {
			transform: translateY(-0.3rem);
		}
		&:active {
			transform: translateY(-0.1rem);
		}
	}
</style>
