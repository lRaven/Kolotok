<template>
	<div class="basket-calculation shadow">
		<h4 class="basket-calculation__title">Итого по заказу</h4>
		<div class="basket-calculation__row">
			<h6 class="basket-calculation__row-title">Сумма заказа:</h6>
			<p class="basket-calculation__row-value">{{ full_price }} руб.</p>
		</div>
		<div class="basket-calculation__row">
			<h6 class="basket-calculation__row-title">Скидка:</h6>
			<p class="basket-calculation__row-value">{{ discount }} руб.</p>
		</div>
		<div class="basket-calculation__row">
			<h6 class="basket-calculation__row-title">Сумма к оплате:</h6>
			<p class="basket-calculation__row-value">{{ final_price }} руб.</p>
		</div>

		<r-button class="blue" type="button" text="Оплатить"></r-button>
	</div>
</template>

<script>
	import rButton from "@/components/r-button";

	export default {
		name: "BasketCalculation",
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
		},
	};
</script>

<style lang="scss" scoped>
	.basket-calculation {
		position: sticky;
		left: 0;
		top: 21rem;
		padding: 2rem;
		border-radius: 3rem;

		&__title {
			margin-bottom: 1.5rem;
		}

		&__row {
			display: flex;
			align-items: center;
			justify-content: space-between;

			+ .basket-calculation__row {
				margin-top: 1.5rem;
			}
		}
		.r-button {
			margin-top: 2rem;
			width: 100%;
			justify-content: center;
		}
	}
</style>
