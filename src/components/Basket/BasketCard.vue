<template>
	<div class="basket-card">
		<r-checkbox v-model="checked"></r-checkbox>

		<img
			:src="product.img"
			alt=""
			v-if="product"
			class="basket-card__image"
		/>
		<img
			src="img/catalog/catalog__photo-default.svg"
			alt=""
			class="basket-card__image"
			v-else
		/>

		<div class="basket-card__info basket-card__col">
			<p class="basket-card__name">{{ product.name }}</p>
			<div class="basket-card__article">
				<p class="basket-card__article-name">Артикул:</p>
				<p class="basket-card__article-value">{{ product.article }}</p>
			</div>
		</div>

		<div class="basket-card__prices basket-card__col">
			<p class="basket-card__price-old">{{ product.price_old }} руб.</p>
			<p class="basket-card__price">{{ product.price }} руб.</p>
		</div>

		<r-counter
			:getValue="1"
			:getMin="1"
			:getMax="5"
			v-model="counter"
			class="basket-card__col"
		></r-counter>

		<div class="basket-card__full-price basket-card__col">
			{{ full_price }} руб.
		</div>

		<div class="basket-card__remove">
			<img
				src="img/icon/Basket/close.svg"
				alt=""
				class="basket-card__remove-icon"
			/>
		</div>
	</div>
</template>

<script>
	import rCheckbox from "@/components/r-checkbox";
	import rCounter from "@/components/Catalog/r-counter";

	import { mapActions } from "vuex";

	export default {
		name: "BasketCard",
		props: { product: Object },
		components: { rCounter, rCheckbox },
		data: () => ({ counter: 1, checked: false }),
		watch: {
			counter() {
				this.setShoppingList({
					id: this.product.id,
					quantity: this.counter,
				});
			},
		},
		computed: {
			full_price() {
				return this.product.price * this.counter;
			},
		},
		methods: { ...mapActions(["setShoppingList"]) },
		mounted() {
			this.setShoppingList({
				id: this.product.id,
				quantity: this.counter,
			});
		},
	};
</script>

<style lang="scss" scoped>
	.basket-card {
		display: grid;
		grid-template-columns: 2rem 10rem 1fr repeat(3, 14rem) 2rem;
		align-items: center;
		grid-gap: 2.5rem;
		border: 0.1rem solid #e5e5e5;
		border-radius: 0.4rem;
		padding: 2rem;
		color: var(--dark);

		+ .basket-card {
			margin-top: 3rem;
		}

		&__col {
			margin: auto;
			&:nth-child(3) {
				margin: 0;
			}
		}

		&__image {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}

		&__info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 1rem;
		}

		&__name {
			font-size: 1.8rem;
			font-weight: 700;
			line-height: 1.3;
		}

		&__prices {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}

		&__price {
			font-size: 1.8rem;
			font-weight: 600;
			&-old {
				text-decoration: line-through;
				font-size: 1.4rem;
				color: #8f8f8f;
			}
		}

		&__full-price {
			font-size: 2.4rem;
			font-weight: 700;
		}

		&__article {
			display: flex;
			gap: 1rem;

			&-name {
				font-size: 1.2rem;
				color: var(--middle-gray);
			}
			&-value {
				font-size: 1.2rem;
				color: var(--cool-gray);
			}
		}
	}
</style>
