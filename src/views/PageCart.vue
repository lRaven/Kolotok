<template>
	<div class="page-cart theme-container">
		<the-header />
		<main class="main">
			<section class="page-cart__cart center">
				<r-breadcrumbs :links="links"></r-breadcrumbs>

				<div class="page-cart__col">
					<h2 class="page-cart__title" v-once>Корзина</h2>
					<div class="page-cart__control">
						<r-checkbox
							description="Выбрать всё"
							v-model="isAllSelected"
							@click="
								isAllSelected
									? unselectAllCartItems()
									: selectAllCartItems()
							"
						></r-checkbox>

						<button
							class="page-cart__delete"
							@click="removeSelectedCards"
							v-once
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="page-cart__delete-icon"
							>
								<path
									d="M11 5L5 11"
									stroke="#efba1c"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M11 11L5 5"
									stroke="#efba1c"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.2798 1H4.71946C2.4333 1 1 2.6187 1 4.90941V11.0906C1 13.3813 2.42649 15 4.71946 15H11.279C13.5728 15 15 13.3813 15 11.0906V4.90941C15 2.6187 13.5728 1 11.2798 1Z"
									stroke="#efba1c"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

							<p class="page-cart__delete-description">
								Удалить выбранное
							</p>
						</button>

						<button
							class="page-cart__clear"
							@click="clearCart"
							v-once
						>
							<svg
								width="17"
								height="19"
								viewBox="0 0 17 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="page-cart__clear-icon"
							>
								<path
									d="M15.2147 6.80322C15.2147 6.80322 14.7102 13.061 14.4175 15.6969C14.2781 16.9559 13.5004 17.6937 12.2266 17.7169C9.80247 17.7606 7.37556 17.7633 4.95237 17.7122C3.72683 17.6872 2.96215 16.9401 2.82557 15.7034C2.53103 13.0442 2.0293 6.80322 2.0293 6.80322"
									stroke="#007bfc"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M16.5005 3.80319H0.744141"
									stroke="#007bfc"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M13.4647 3.80329C12.7353 3.80329 12.1072 3.28762 11.9641 2.57311L11.7383 1.44328C11.599 0.922029 11.127 0.561523 10.589 0.561523H6.65596C6.11799 0.561523 5.64598 0.922029 5.50661 1.44328L5.28083 2.57311C5.13774 3.28762 4.50965 3.80329 3.78027 3.80329"
									stroke="#007bfc"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

							<p class="page-cart__clear-description">
								Очистить корзину
							</p>
						</button>
					</div>

					<div class="page-cart__list">
						<div class="page-cart__captions" v-once>
							<p class="page-cart__caption">Наименование</p>
							<p class="page-cart__caption">Цена за шт.</p>
							<p class="page-cart__caption">Кол-во</p>
							<p class="page-cart__caption">Стоимость</p>
						</div>

						<cart-card
							v-for="product in cart.products"
							:key="product.product.name"
							:product="product"
							:amount="product.amount"
						></cart-card>
					</div>
				</div>

				<form
					class="page-cart__processing"
					@submit.prevent="isFormSubmit = true"
				>
					<h3 class="page-cart__processing-title" v-once>
						Ваш заказ
					</h3>
					<div class="page-cart__processing-row">
						<p class="page-cart__processing-row-title" v-once>
							Выбрано товаров
						</p>
						<p class="page-cart__processing-row-value">
							{{ productsAmount }}
							шт.
						</p>
					</div>
					<div class="page-cart__processing-row">
						<p class="page-cart__processing-row-title" v-once>
							Скидка
						</p>
						<p class="page-cart__processing-row-value">
							{{ productsDiscount }}
							руб.
						</p>
					</div>
					<div class="page-cart__processing-row">
						<p class="page-cart__processing-row-title" v-once>
							Итого:
						</p>
						<p class="page-cart__processing-row-value">
							{{ cartCost }} руб.
						</p>
					</div>
					<!-- <div class="page-cart__processing-promo">
						<input
							type="text"
							name="promo"
							placeholder="Есть промокод?"
							class="page-cart__processing-promo-input"
						/>
						<button
							type="button"
							class="page-cart__processing-promo-button"
						>
							<img
								src="/img/icons/basket/arrow.svg"
								alt=""
								class="page-cart__processing-promo-button-icon"
							/>
						</button>
					</div> -->

					<r-button
						color="yellow"
						type="submit"
						text="Оформить заказ"
						:disabled="v$.$invalid"
					>
					</r-button>
				</form>
			</section>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";
	import CartCard from "@/components/Cart/CartCard";
	import TheFooter from "@/components/TheFooter";

	import { mapState, mapMutations } from "vuex";
	import { useVuelidate } from "@vuelidate/core";
	import { minValue } from "@vuelidate/validators";

	export default {
		name: "PageCart",
		components: {
			TheHeader,

			CartCard,

			TheFooter,
		},
		watch: {
			isFormSubmit() {
				if (this.isFormSubmit) {
					this.placeOrder();
					setTimeout(() => {
						this.isFormSubmit = false;
					}, 2000);
				}
			},
			"cart.products": {
				handler() {
					if (this.cart.products.length === 0) {
						this.isAllSelected = false;
					}
				},
				deep: true,
			},
		},
		data: () => ({
			links: [
				{
					id: 1,
					description: "Главная",
					route: { name: "Home" },
					current: false,
				},
				{
					id: 2,
					description: "Корзина",
					current: true,
				},
			],

			isAllSelected: false,
			isFormSubmit: false,
		}),
		validations: () => ({
			productsAmount: {
				minValue: minValue(1),
			},
		}),
		computed: {
			...mapState({ cart: (state) => state.Cart.cart }),

			productsAmount() {
				return this.cart.products.reduce((acc, cur) => {
					if (cur.selected) {
						acc += cur.amount;
					}
					return acc;
				}, 0);
			},
			productsDiscount() {
				return 0;
			},
			cartCost() {
				return this.cart.products.reduce((acc, cur) => {
					if (cur.selected) {
						acc += cur.product.price;
					}

					return acc;
				}, 0);
			},
		},
		methods: {
			...mapMutations([
				"setCart",
				"selectAllCartItems",
				"unselectAllCartItems",
				"removeSelectedCards",
			]),

			// removeSelectedProducts() {},

			clearCart() {
				this.setCart({ products: [] });
			},

			placeOrder() {
				console.log("submit");
			},
		},
		setup() {
			return { v$: useVuelidate() };
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-cart {
		&__cart {
			display: grid;
			grid-template-columns: 1fr 39rem;
			grid-gap: 3rem 5rem;
			@media (max-width: 1400px) {
				grid-template-columns: 1fr;
			}
		}

		.r-breadcrumbs {
			grid-column: 1/3;
			@media (max-width: 1400px) {
				grid-column: inherit;
			}
		}

		&__col {
		}

		&__title {
			color: $dark-blue;
			margin-bottom: 3rem;
		}

		&__control {
			display: grid;
			grid-template-columns: max-content 1fr max-content;
			grid-gap: 4rem;
			align-items: center;
			margin-bottom: 4rem;
			padding: 0 2rem;
			@media (max-width: 767px) {
				display: flex;
				flex-wrap: wrap;
				gap: 2rem;
			}

			&-icon {
			}
			&-description {
				font-size: 1.4rem;
			}
		}
		&__delete {
			user-select: none;
			background-color: transparent;
			display: flex;
			align-items: center;
			gap: 1.7rem;
			width: max-content;
			&-icon {
			}
			&-description {
				font-size: 1.4rem;
				color: $yellow;
			}
		}

		&__clear {
			user-select: none;
			background-color: transparent;
			display: flex;
			align-items: center;
			gap: 1.7rem;
			&-description {
				font-size: 1.4rem;
				font-weight: 500;
				color: $blue;
			}
		}

		&__captions {
			display: grid;
			grid-template-columns: 2rem 10rem 1fr repeat(3, 14rem) 2rem;
			margin-bottom: 2rem;
			padding: 0 2rem;
			grid-gap: 2.5rem;
			@media (max-width: 1023px) {
				display: none;
			}

			.page-cart__caption {
				text-align: center;
				&:first-child {
					grid-column: 1/3;
				}
				&:nth-child(2) {
					grid-column: 4/5;
				}
			}
		}
		&__caption {
			color: $middle-gray;
			font-weight: 600;
		}

		&__list {
			display: flex;
			flex-direction: column;
		}

		&__processing {
			position: sticky;
			left: 0;
			top: 22rem;
			padding: 2rem;
			border-radius: 1.6rem;
			box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
			height: max-content;
			@media (max-width: 1400px) {
				position: static;
			}

			&-title {
				margin-bottom: 4rem;
				font-weight: 700;
			}

			&-row {
				display: flex;
				align-items: center;
				justify-content: space-between;
				&:nth-child(4) {
					margin-bottom: 4rem;
					.page-cart__processing-row {
						&-title,
						&-value {
							font-weight: 700;
						}
						&-title {
							font-size: 2rem;
						}
						&-value {
							font-size: 2.4rem;
						}
					}
				}
				&-title {
					font-weight: 500;
				}
				&-value {
					font-weight: 700;
				}

				+ .page-cart__processing-row {
					margin-top: 2rem;
				}
			}

			&-promo {
				position: relative;
				margin-bottom: 3rem;
				&-input {
					border: 0.1rem solid #e5e5e5;
					width: 100%;
					padding: 1rem 4.5rem 1rem 1rem;
					font-size: 1.6rem;
					border-radius: 0.6rem;
					transition: all 0.2s ease;
					&:hover {
						border-color: $middle-gray;
					}
					&:focus {
						border-color: $cool-gray;
					}
				}
				&-button {
					position: absolute;
					right: 0;
					top: 0;
					bottom: 0;
					background-color: $yellow;
					width: 4rem;
					border-radius: 0.6rem;
					&-icon {
						width: 55%;
						height: 55%;
						object-fit: contain;
					}
				}
			}

			.r-button {
				padding-top: 1.8rem;
				padding-bottom: 1.8rem;
				width: 100%;
				justify-content: center;
			}
		}
	}
</style>
