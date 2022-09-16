<template>
	<div class="page-cart-cabinet"></div>
</template>

<script>
	export default {
		name: "PageCartCabinet",
		created() {
			this.$emit("changeTab", "cart");
		},
	};
</script>

<style lang="scss" scoped>
	.page-cart-cabinet {
	}
</style>
