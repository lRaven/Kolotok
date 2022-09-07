<template>
	<section class="the-benefits">
		<div class="the-benefits__container center">
			<h2 data-aos="fade-right" class="the-benefits__title">
				Преимущества нашего магазина
			</h2>
			<div class="the-benefits__list">
				<div data-aos="fade-up" class="the-benefits__benefit shadow">
					<img
						src="img/icon/shipping.svg"
						class="the-benefits__benefit-icon"
						alt=""
					/>
					<h3 class="the-benefits__benefit-title">
						Быстрая доставка
					</h3>
					<p class="the-benefits__benefit-description">
						Вы можете оплатить заказ оналайн банковской картой
					</p>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="250"
					class="the-benefits__benefit shadow"
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
					data-aos="fade-up"
					data-aos-delay="500"
					class="the-benefits__benefit shadow"
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
		</div>
	</section>
</template>

<script>
	export default { name: "TheBenefits" };
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.the-benefits {
		&__title {
			margin-bottom: 3.5rem;
			color: $dark-blue;
		}
		&__list {
			display: flex;
			gap: 2.4rem;
		}
		&__benefit {
			padding: 6rem;
			border-radius: 3rem;
			color: $dark-blue;
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
