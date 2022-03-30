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
	.r-discount {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		background-color: var(--yellow);
		font-size: 1.6rem;
		font-weight: 600;
		color: var(--dark-blue);
	}
</style>
