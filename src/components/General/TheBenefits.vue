<template>
	<section class="the-benefits" v-once>
		<div class="the-benefits__container center">
			<h2 data-aos="fade-right" class="the-benefits__title">
				Преимущества нашего магазина
			</h2>
			<div class="the-benefits__list">
				<div
					data-aos="fade-up"
					data-aos-anchor-placement="top-bottom"
					class="the-benefits__benefit shadow"
				>
					<img
						src="/img/icons/shipping.svg"
						class="the-benefits__benefit-icon"
						alt=""
					/>
					<div class="the-benefits__benefit-row">
						<h3 class="the-benefits__benefit-title">
							Быстрая доставка
						</h3>
						<p class="the-benefits__benefit-description">
							Вы можете оплатить заказ оналайн банковской картой
						</p>
					</div>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="250"
					data-aos-anchor-placement="top-bottom"
					class="the-benefits__benefit shadow"
				>
					<img
						src="/img/icons/pay.svg"
						class="the-benefits__benefit-icon"
						alt=""
					/>
					<div class="the-benefits__benefit-row">
						<h3 class="the-benefits__benefit-title">
							Удобная оплата
						</h3>
						<p class="the-benefits__benefit-description">
							Вы можете оплатить заказ оналайн банковской картой
						</p>
					</div>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="500"
					data-aos-anchor-placement="top-bottom"
					class="the-benefits__benefit shadow"
				>
					<img
						src="/img/icons/shipping.svg"
						class="the-benefits__benefit-icon"
						alt=""
					/>
					<div class="the-benefits__benefit-row">
						<h3 class="the-benefits__benefit-title">
							Удобная оплата
						</h3>
						<p class="the-benefits__benefit-description">
							Вы можете оплатить заказ оналайн банковской картой
						</p>
					</div>
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
			@media (max-width: 540px) {
				margin-bottom: 3rem;
			}
		}
		&__list {
			display: flex;
			gap: 2.4rem;
			@media (max-width: 767px) {
				flex-direction: column;
			}
		}
		&__benefit {
			padding: 6rem;
			border-radius: 3rem;
			color: $dark-blue;
			@media (max-width: 1200px) {
				padding: 2rem;
			}
			@media (max-width: 767px) {
				padding: 2rem 1rem;
				display: flex;
				gap: 1.2rem;
				align-items: center;
				border-radius: 1rem;
			}
			&-icon {
				margin-bottom: 4rem;
				@media (max-width: 767px) {
					margin-bottom: 0;
				}
				@media (max-width: 540px) {
					height: 4rem;
				}
			}
			&-title {
				margin-bottom: 1.3rem;
			}
			&-description {
			}
		}
	}
</style>
