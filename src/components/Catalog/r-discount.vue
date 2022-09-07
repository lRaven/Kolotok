<template>
	<div class="r-discount">-{{ discount }}%</div>
</template>

<script>
	export default {
		name: "rDiscount",
		props: {
			discount: Number,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.r-discount {
		user-select: none;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		background-color: $yellow;
		font-size: 1.6rem;
		font-weight: 600;
		color: $dark-blue;
	}
</style>
