<template>
	<section class="page-cart-cabinet">
		<div class="page-cart-cabinet__header">
			<h2 class="page-cart-cabinet__title" v-once>Корзина</h2>

			<div class="page-cart-cabinet__header-col">
				<div class="page-cart-cabinet__bonuses shadow">
					<h4 class="page-cart-cabinet__bonuses-title" v-once>
						Бонусная программа
					</h4>
					<p class="page-cart-cabinet__bonuses-description" v-once>
						Введите промокод
					</p>
					<r-input v-model="promoCode"></r-input>

					<r-button
						color="blue"
						text="Активировать промокод"
					></r-button>
				</div>

				<form class="page-cart-cabinet__sum shadow" @submit.prevent="">
					<h4 class="page-cart-cabinet__sum-title" v-once>
						Итого по заказу
					</h4>

					<div class="page-cart-cabinet__sum-row">
						<p class="page-cart-cabinet__sum-row-key" v-once>
							Сумма заказа
						</p>
						<p class="page-cart-cabinet__sum-row-value">
							{{ 0 }} руб.
						</p>
					</div>

					<div class="page-cart-cabinet__sum-row">
						<p class="page-cart-cabinet__sum-row-key" v-once>
							Скидка
						</p>
						<p class="page-cart-cabinet__sum-row-value">
							{{ 0 }} руб.
						</p>
					</div>

					<div class="page-cart-cabinet__sum-row">
						<p class="page-cart-cabinet__sum-row-key" v-once>
							Сумма к оплате
						</p>
						<p class="page-cart-cabinet__sum-row-value">
							{{ fullPrice }} руб.
						</p>
					</div>

					<r-button
						color="blue"
						type="submit"
						text="Оплатить"
					></r-button>
				</form>
			</div>
		</div>

		<div class="page-card-cabinet__list">
			<div class="page-cart-cabinet__list-header" v-once>
				<p class="page-cart-cabinet__list-col-description">Товар</p>
				<p class="page-cart-cabinet__list-col-description">Цена</p>
				<p class="page-cart-cabinet__list-col-description">
					Количество
				</p>
				<p class="page-cart-cabinet__list-col-description">Стоимость</p>
			</div>

			<cart-card
				v-for="product in cart.products"
				:key="product.id"
				:product="product.product"
				:amount="product.amount"
			></cart-card>
		</div>
	</section>
</template>

<script>
	import { mapState, mapActions } from "vuex";

	import CartCard from "@/components/Cabinet/Cart/CartCard.vue";

	export default {
		name: "PageCartCabinet",
		components: {
			CartCard,
		},
		data: () => ({
			promoCode: null,
		}),
		computed: {
			...mapState({ cart: (state) => state.Cart.cart }),

			fullPrice() {
				let sum = 0;

				this.cart.products.forEach((el) => {
					const productSum = el.product.price * el.amount;
					sum += productSum;
				});

				return sum;
			},
		},
		methods: {
			...mapActions(["getCartList"]),

			activatePromocode() {
				console.log("activate");
			},
		},
		created() {
			this.$emit("changeTab", "cart");
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-cart-cabinet {
		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 3rem;
			margin-bottom: 3rem;
			&-col {
				display: flex;
				gap: 3rem;
			}
		}

		&__title {
			font-size: 4.5rem;
			color: $dark-blue;
			width: 100%;
			text-align: center;
		}

		&__bonuses {
			min-width: 34rem;
			padding: 3rem 2rem 2rem 2rem;
			border-radius: 3rem;
			&-title {
				font-weight: 700;
				color: $dark;
				margin-bottom: 4rem;
			}
			&-description {
				margin-bottom: 2.5rem;
				font-size: 1.8rem;
				font-weight: 500;
			}

			.r-input {
				margin-bottom: 3rem;
				width: 100%;
			}

			.r-button {
				width: 100%;
				justify-content: center;
				padding: 1.5rem 3rem;
			}
		}

		&__sum {
			padding: 3rem 2rem 2rem 2rem;
			border-radius: 3rem;
			min-width: 34rem;
			&-title {
				font-weight: 700;
				color: $dark;
				margin-bottom: 4rem;
			}

			&-row {
				display: flex;
				align-items: center;
				gap: 2rem;
				justify-content: space-between;
				+ .page-cart-cabinet__sum-row {
					margin-top: 1.8rem;
				}

				&:nth-child(4) {
					font-weight: 500;
				}
				&-key {
					font-size: 1.8rem;
				}
				&-value {
					font-size: 1.8rem;
				}
			}

			.r-button {
				width: 100%;
				justify-content: center;
				padding: 1.5rem 3rem;
				margin-top: 4rem;
			}
		}

		&__list {
			&-header {
				display: grid;
				grid-template-columns: repeat(5, 1fr);
				grid-gap: 2.5rem;
				padding: 0 1rem;
				margin-bottom: 2rem;
				@for $i from 1 through 4 {
					p:nth-child(#{$i}) {
						grid-column: #{$i + 1}/#{$i + 2};
					}
				}
			}
			&-col-description {
				font-size: 1.8rem;
				color: $middle-gray;
				font-weight: 500;
			}
		}

		.cart-card {
			+ .cart-card {
				margin-top: 3rem;
			}
		}
	}
</style>

<style lang="scss">
	.page-cart-cabinet {
		&__bonuses {
			.r-input {
				&__input {
					border-radius: 0;
					padding: 1.6rem 3rem;
					font-weight: 500;
				}
			}
		}
	}
</style>
