<template>
	<div class="order-product">
		<div class="order-product__col">
			<img
				:src="
					product.product.img ||
					'/img/catalog/catalog__photo-default.svg'
				"
				alt="photo"
				class="order-product__image"
			/>

			<p class="order-product__name">{{ product.product.name }}</p>
			<p class="order-product__article">{{ product.product.article }}</p>
		</div>

		<p class="order-product__counter">
			{{ product.amount }}
			{{ declensionWord(product.amount, ["товар", "товара", "товаров"]) }}
		</p>

		<p class="order-product__price">{{ product.product.price }} руб.</p>
	</div>
</template>

<script>
	import { declensionWord } from "@/js/declensionWord";

	export default {
		name: "OrderProduct",
		props: {
			product: {
				value: Object,
				required: true,
			},
		},
		methods: { declensionWord },
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.order-product {
		display: grid;
		grid-template-columns: 3fr repeat(2, 1fr) 3.5rem;
		grid-gap: 2rem;
		align-items: center;
		+ .order-product {
			margin-top: 1.5rem;
		}

		&__col {
			display: grid;
			grid-template-columns: 7rem 1fr;
			align-items: center;
			grid-gap: 2rem;
		}

		&__image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			grid-row: 1/3;
		}

		&__article {
			font-size: 1.2rem;
			color: $middle-gray;
		}

		&__price {
			font-size: 2rem;
			text-align: center;
		}
	}
</style>
