<template>
	<div class="basket-card">
		<img :src="product.img" alt="" v-if="product" />
		<img src="img/catalog/catalog__photo-default.svg" alt="" v-else />
		<div class="basket-card__info">
			<p class="basket-card__name">{{ product.name }}</p>
			<p class="basket-card__article">{{ product.article }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "BasketCard",
		props: {
			product: Object,
		},
	};
</script>

<style lang="scss" scoped>
	.basket-card {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}
</style>
