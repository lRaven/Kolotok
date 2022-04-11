<template>
	<div class="basket-card shadow">
		<div class="basket-card__row">
			<div class="basket-card__remove">
				<img
					src="img/icon/Basket/close.svg"
					alt=""
					class="basket-card__remove-icon"
				/>
			</div>
		</div>
		<div class="basket-card__row">
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
			<div class="basket-card__col">
				<p class="basket-card__name">{{ product.name }}</p>
			</div>
			<div class="basket-card__col">
				<p class="basket-card__price">{{ product.price }} руб.</p>
			</div>
			<div class="basket-card__col">
				<r-counter
					:getValue="1"
					:getMin="1"
					:getMax="5"
					v-model="counter"
				></r-counter>
			</div>
			<div class="basket-card__col basket-card__full-price">
				{{ full_price }} руб.
			</div>
		</div>
		<div class="basket-card__row">
			<div class="basket-card__article">
				<p class="basket-card__article-name">Артикул:</p>
				<p class="basket-card__article-value">{{ product.article }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import rCounter from "@/components/Catalog/r-counter";
	import { mapActions } from "vuex";

	export default {
		name: "BasketCard",
		props: {
			product: Object,
		},
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
		data: () => ({
			counter: 1,
		}),
		components: {
			rCounter,
		},
		methods: {
			...mapActions(["setShoppingList"]),
		},
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
		border-radius: 3rem;
		padding: 2rem 2rem 1rem 1rem;
		color: var(--dark);

		+ .basket-card {
			margin-top: 3rem;
		}
		&__row {
			display: grid;
			grid-template-columns: 25rem repeat(4, 1fr) 2rem;
			align-items: center;
			gap: 2rem;
			&:nth-child(2) {
				grid-template-rows: 25rem;
			}
			&:last-child {
			}
		}

		&__col {
			display: flex;
			justify-content: center;
			&:nth-child(-n + 3) {
				justify-content: flex-start;
			}
		}

		&__remove {
			cursor: pointer;
			grid-column: 6/7;
		}

		&__image {
			object-fit: contain;
			display: block;
			height: 100%;
			width: 100%;
		}

		&__name {
			font-size: 1.8rem;
			font-weight: 700;
			line-height: 1.3;
		}

		&__price {
			font-size: 1.8rem;
			font-weight: 600;
		}

		&__full-price {
			font-size: 2.4rem;
			font-weight: 700;
		}

		&__article {
			display: flex;
			grid-column: 2/3;
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
