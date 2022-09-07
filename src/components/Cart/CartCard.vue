<template>
	<div class="cart-card">
		<r-checkbox v-model="checked" :checked="product.selected"></r-checkbox>

		<img
			:src="product.img"
			alt=""
			v-if="product"
			class="cart-card__image"
		/>
		<img
			src="img/catalog/catalog__photo-default.svg"
			alt=""
			class="cart-card__image"
			v-else
		/>

		<div class="cart-card__info cart-card__col">
			<p class="cart-card__name">{{ product.name }}</p>
			<div class="cart-card__article">
				<p class="cart-card__article-name">Артикул:</p>
				<p class="cart-card__article-value">{{ product.article }}</p>
			</div>
		</div>

		<div class="cart-card__prices cart-card__col">
			<p class="cart-card__price-old">{{ product.price_old }}р.</p>
			<p class="cart-card__price">{{ product.price }} руб.</p>
		</div>

		<r-counter
			:getValue="1"
			:getMin="1"
			:getMax="5"
			v-model="counter"
			class="cart-card__col"
		></r-counter>

		<div class="cart-card__col cart-card__full-prices">
			<p class="cart-card__full-price-old">{{ full_price_old }}р.</p>
			<p class="cart-card__full-price">{{ full_price }} руб.</p>
		</div>

		<div class="cart-card__remove">
			<img
				src="img/icon/basket/delete.svg"
				alt=""
				class="cart-card__remove-icon"
			/>
		</div>
	</div>
</template>

<script>
	import rCheckbox from "@/components/r-checkbox";
	import rCounter from "@/components/Catalog/r-counter";

	import { mapMutations, mapActions } from "vuex";

	export default {
		name: "CartCard",
		props: { product: Object },
		components: { rCounter, rCheckbox },
		data: () => ({ counter: 1, checked: false }),
		watch: {
			counter() {
				// this.setShoppingList({
				// 	id: this.product.id,
				// 	quantity: this.counter,
				// });
			},
			checked() {
				if (this.checked) {
					this.SELECT_CART_ITEM(this.product.id);
				} else {
					this.UNSELECT_CART_ITEM(this.product.id);
				}
			},
			checkedUpdate() {
				this.checked = this.checkedUpdate;
			},
		},
		computed: {
			full_price_old() {
				return this.product.price_old * this.counter;
			},
			full_price() {
				return this.product.price * this.counter;
			},
			checkedUpdate() {
				return this.product.selected;
			},
		},
		methods: {
			...mapMutations(["SELECT_CART_ITEM", "UNSELECT_CART_ITEM"]),
			...mapActions(["setShoppingList"]),
		},
		mounted() {
			// this.setShoppingList({
			// 	id: this.product.id,
			// 	quantity: this.counter,
			// });
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.cart-card {
		display: grid;
		grid-template-columns: 2rem 10rem 1fr repeat(3, 14rem) 2rem;
		align-items: center;
		grid-gap: 2.5rem;
		border: 0.1rem solid #e5e5e5;
		border-radius: 0.4rem;
		padding: 2rem;
		color: $dark;

		+ .cart-card {
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
			max-width: 10rem;
			height: 100%;
			max-height: 10rem;
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
		&__article {
			display: flex;
			gap: 1rem;

			&-name {
				font-size: 1.2rem;
				color: $middle-gray;
			}
			&-value {
				font-size: 1.2rem;
				color: $cool-gray;
			}
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
				color: #9d9d9d;
			}
		}

		&__full {
			&-prices {
				width: max-content;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 0.5rem;
			}
			&-price {
				font-size: 2.4rem;
				font-weight: 700;
				&-old {
					text-decoration: line-through;
					font-size: 1.4rem;
					color: #9d9d9d;
				}
			}
		}

		&__remove {
			cursor: pointer;
		}
	}
</style>
