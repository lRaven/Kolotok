<template>
	<div class="r-blur"></div>
</template>

<script>
	export default {
		name: "rBlur",
	};
</script>

<style lang="scss" scoped>
	.r-blur {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(50, 50, 50, 0.6);
		z-index: -1;
		opacity: 0;
		transition: all 0.2s ease;
		&.open {
			z-index: 2;
			opacity: 1;
		}
	}
</style>
