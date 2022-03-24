<template>
	<div class="r-tag shadow">{{ text }}</div>
</template>

<script>
	export default {
		name: "rTag",
		props: {
			text: String,
		},
	};
</script>

<style lang="scss" scoped>
	.r-tag {
		user-select: none;
		display: inline-block;
		border-radius: 3rem;
		background-color: var(--white);
		color: var(--dark-blue);
		font-size: 1.6rem;
		font-weight: 600;
		padding: 1.2rem 2.5rem;
	}
</style>
