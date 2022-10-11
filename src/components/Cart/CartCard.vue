<template>
	<div class="cart-card">
		<r-checkbox v-model="checked" :checked="product.selected"></r-checkbox>

		<img
			:src="
				product.product.img || '/img/catalog/catalog__photo-default.svg'
			"
			alt="photo"
			class="cart-card__image"
			v-once
		/>

		<div class="cart-card__info cart-card__col" v-once>
			<p class="cart-card__name">{{ product.product.name }}</p>
			<div class="cart-card__article">
				<p class="cart-card__article-name">Артикул:</p>
				<p class="cart-card__article-value">
					{{ product.product.article }}
				</p>
			</div>
		</div>

		<div class="cart-card__prices cart-card__col" v-once>
			<p class="cart-card__price-old" v-if="product.product.price_old">
				{{ product.product.price_old }}р.
			</p>
			<p class="cart-card__price">{{ product.product.price }} руб.</p>
		</div>

		<r-counter
			:get-value="product.amount"
			:get-min="1"
			:get-max="5"
			v-model="counter"
			class="cart-card__col"
		></r-counter>

		<div class="cart-card__col cart-card__full-prices">
			<p class="cart-card__full-price-old" v-if="full_price_old">
				{{ full_price_old }}р.
			</p>
			<p class="cart-card__full-price">{{ full_price }} руб.</p>
		</div>

		<button
			class="cart-card__remove"
			@click="removeCard(product.product.name)"
		>
			<img
				src="/img/icons/basket/delete.svg"
				alt=""
				class="cart-card__remove-icon"
			/>
		</button>
	</div>
</template>

<script>
	import rCounter from "@/components/Catalog/r-counter";

	import { mapMutations } from "vuex";

	export default {
		name: "CartCard",
		props: { product: Object },
		components: { rCounter },
		data() {
			return {
				counter: this.product.amount,
				checked: false,
			};
		},
		watch: {
			counter() {
				this.setCartItemCount({
					name: this.product.product.name,
					count: this.counter,
				});
			},
			checked() {
				if (this.checked) {
					this.selectCartItem(this.product.product.name);
				} else {
					this.unselectCartItem(this.product.product.name);
				}
			},
			checkedUpdate() {
				this.checked = this.checkedUpdate;
			},
		},
		computed: {
			full_price_old() {
				return this.product.product.price_old * this.counter;
			},
			full_price() {
				return this.product.product.price * this.counter;
			},
			checkedUpdate() {
				return this.product.selected;
			},
		},
		methods: {
			...mapMutations([
				"selectCartItem",
				"unselectCartItem",
				"setCartItemCount",
				"removeCard",
			]),
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
		grid-template-columns: 2rem 6rem 1fr repeat(3, 14rem) 2rem;
		align-items: center;
		grid-gap: 2.5rem;
		border: 0.1rem solid #e5e5e5;
		border-radius: 0.4rem;
		padding: 2rem;
		color: $dark;
		@media (max-width: 1023px) {
			grid-template-columns: 3rem 14rem repeat(2, 1fr);
		}
		@media (max-width: 767px) {
			grid-template-columns: 3rem 1fr;
			align-items: flex-start;
		}

		+ .cart-card {
			margin-top: 3rem;
		}

		&__col {
			margin: auto;
			@media (max-width: 1023px) {
				margin: 0;
			}
			@media (max-width: 767px) {
				grid-column: 2/3;
			}

			&:nth-child(3) {
				margin: 0;
			}
		}

		&__image {
			width: 100%;
			max-width: 6rem;
			height: 100%;
			max-height: 6rem;
			object-fit: contain;
			@media (max-width: 1023px) {
				max-width: 100%;
				max-height: 100%;
			}
			@media (max-width: 767px) {
				max-width: 100%;
				width: inherit;
				height: 30rem;
				max-height: inherit;
			}
		}

		&__info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 1rem;
		}

		&__name {
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
			@media (max-width: 1023px) {
				grid-area: 2/3;
				align-items: flex-start;
			}
			@media (max-width: 767px) {
				grid-area: 2/2;
			}
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
				@media (max-width: 1023px) {
					grid-area: 2/4;
					align-items: flex-start;
				}
				@media (max-width: 767px) {
					grid-area: 3/2;
				}
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
			background-color: transparent;
			@media (max-width: 767px) {
				grid-area: 1/3;
			}
		}
	}
</style>
