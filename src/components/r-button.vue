<template>
	<button class="r-button" type="button">{{ text }}</button>
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
		border-radius: 3rem;
		background-color: var(--yellow);
		padding: 1rem 3rem;
	}
</style>
