<template>
	<form class="cart-calculation">
		<h3 class="cart-calculation__title">Ваш заказ</h3>
		<div class="cart-calculation__row">
			<p class="cart-calculation__row-title">Выбрано товаров</p>
			<p class="cart-calculation__row-value">{{ products.length }} шт.</p>
		</div>
		<div class="cart-calculation__row">
			<p class="cart-calculation__row-title">Скидка</p>
			<p class="cart-calculation__row-value">{{ discount_sum }} руб.</p>
		</div>
		<div class="cart-calculation__row">
			<p class="cart-calculation__row-title">Итого:</p>
			<p class="cart-calculation__row-value">{{ final_price }} руб.</p>
		</div>
		<!-- <div class="cart-calculation__promo">
			<input
				type="text"
				name="promo"
				id=""
				placeholder="Есть промокод?"
				class="cart-calculation__promo-input"
			/>
			<button type="button" class="cart-calculation__promo-button">
				<img
					src="img/icon/basket/arrow.svg"
					alt=""
					class="cart-calculation__promo-button-icon"
				/>
			</button>
		</div> -->

		<r-button color="yellow" type="button" text="Оформить заказ">
		</r-button>
	</form>
</template>

<script>
	import rButton from "@/components/r-button";

	export default {
		name: "CartCalculation",
		props: {
			products: Array,
			discount: Number,
		},
		components: {
			rButton,
		},
		computed: {
			full_price() {
				let sum = 0;

				this.products.forEach((product) => {
					sum += product.price * product.quantity;
				});

				return sum;
			},
			discount_sum() {
				return this.full_price * `${0}.${this.discount}`;
			},
			final_price() {
				return this.full_price - this.discount_sum;
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.cart-calculation {
		position: sticky;
		left: 0;
		top: 22rem;
		padding: 2rem;
		border-radius: 1.6rem;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

		&__title {
			margin-bottom: 4rem;
			font-weight: 700;
		}

		&__row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			&:nth-child(4) {
				margin-bottom: 4rem;
				.cart-calculation__row {
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

			+ .cart-calculation__row {
				margin-top: 2rem;
			}
		}

		&__promo {
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
</style>
