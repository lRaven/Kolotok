<template>
	<section class="the-benefits center">
		<h2
			class="animate__animated animate__fadeInRight wow the-benefits__title"
		>
			Преимущества нашего магазина
		</h2>
		<div class="the-benefits__list">
			<div
				class="animate__animated animate__fadeInUp wow the-benefits__benefit shadow"
			>
				<img
					src="img/icon/shipping.svg"
					class="the-benefits__benefit-icon"
					alt=""
				/>
				<h3 class="the-benefits__benefit-title">Быстрая доставка</h3>
				<p class="the-benefits__benefit-description">
					Вы можете оплатить заказ оналайн банковской картой
				</p>
			</div>
			<div
				class="animate__animated animate__fadeInUp wow the-benefits__benefit shadow"
			>
				<img
					src="img/icon/pay.svg"
					class="the-benefits__benefit-icon"
					alt=""
				/>
				<h3 class="the-benefits__benefit-title">Удобная оплата</h3>
				<p class="the-benefits__benefit-description">
					Вы можете оплатить заказ оналайн банковской картой
				</p>
			</div>
			<div
				class="animate__animated animate__fadeInUp wow the-benefits__benefit shadow"
			>
				<img
					src="img/icon/shipping.svg"
					class="the-benefits__benefit-icon"
					alt=""
				/>
				<h3 class="the-benefits__benefit-title">Удобная оплата</h3>
				<p class="the-benefits__benefit-description">
					Вы можете оплатить заказ оналайн банковской картой
				</p>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheBenefits",
	};
</script>

<style lang="scss" scoped>
	.the-benefits {
		&__title {
			margin-bottom: 3.5rem;
			color: var(--dark-blue);
		}
		&__list {
			display: flex;
			gap: 2.4rem;
		}
		&__benefit {
			padding: 6rem;
			border-radius: 3rem;
			color: var(--dark-blue);
			&-icon {
				margin-bottom: 4rem;
			}
			&-title {
				margin-bottom: 1.3rem;
			}
			&-description {
			}
		}
	}
</style>
