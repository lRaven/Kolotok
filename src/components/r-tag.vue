<template>
	<div class="animate__animated animate__fadeInUp r-tag shadow" v-once>
		{{ text }}
	</div>
</template>

<script>
	export default {
		name: "rTag",
		props: { text: String },
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.r-tag {
		user-select: none;
		display: inline-block;
		border-radius: 3rem;
		background-color: $white;
		color: $dark-blue;
		font-size: 1.6rem;
		font-weight: 600;
		padding: 1.2rem 2.5rem;
	}
</style>
