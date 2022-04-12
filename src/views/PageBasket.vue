<template>
	<div class="page-basket theme-container">
		<the-header />
		<main class="main">
			<section class="basket center">
				<r-breadcrumbs :links="links"></r-breadcrumbs>

				<div class="basket__col">
					<h2 class="basket__title">Корзина</h2>
					<div class="basket__control">
						<r-checkbox description="Выбрать всё"></r-checkbox>
						<div class="basket__delete">
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="basket__delete-icon"
							>
								<path
									d="M11 5L5 11"
									stroke="var(--yellow)"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M11 11L5 5"
									stroke="var(--yellow)"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.2798 1H4.71946C2.4333 1 1 2.6187 1 4.90941V11.0906C1 13.3813 2.42649 15 4.71946 15H11.279C13.5728 15 15 13.3813 15 11.0906V4.90941C15 2.6187 13.5728 1 11.2798 1Z"
									stroke="var(--yellow)"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

							<p class="basket__delete-description">
								Удалить выбранное
							</p>
						</div>
						<div class="basket__clear">
							<svg
								width="17"
								height="19"
								viewBox="0 0 17 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="basket__clear-icon"
							>
								<path
									d="M15.2147 6.80322C15.2147 6.80322 14.7102 13.061 14.4175 15.6969C14.2781 16.9559 13.5004 17.6937 12.2266 17.7169C9.80247 17.7606 7.37556 17.7633 4.95237 17.7122C3.72683 17.6872 2.96215 16.9401 2.82557 15.7034C2.53103 13.0442 2.0293 6.80322 2.0293 6.80322"
									stroke="var(--blue)"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M16.5005 3.80319H0.744141"
									stroke="var(--blue)"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M13.4647 3.80329C12.7353 3.80329 12.1072 3.28762 11.9641 2.57311L11.7383 1.44328C11.599 0.922029 11.127 0.561523 10.589 0.561523H6.65596C6.11799 0.561523 5.64598 0.922029 5.50661 1.44328L5.28083 2.57311C5.13774 3.28762 4.50965 3.80329 3.78027 3.80329"
									stroke="var(--blue)"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

							<p class="basket__clear-description">
								Очистить корзину
							</p>
						</div>
					</div>
					<div class="basket__list">
						<div class="basket__captions">
							<p class="basket__caption">Наименование</p>
							<p class="basket__caption">Цена за шт.</p>
							<p class="basket__caption">Кол-во</p>
							<p class="basket__caption">Стоимость</p>
						</div>
						<basket-card
							v-for="product in shopping_list"
							:key="product.id"
							:product="product"
						></basket-card>
					</div>
				</div>

				<div class="basket__col basket__buy">
					<basket-calculation
						:products="shopping_list"
						:discount="10"
					></basket-calculation>
				</div>
			</section>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";

	import rBreadcrumbs from "@/components/r-breadcrumbs";
	import rCheckbox from "@/components/r-checkbox";
	import BasketCard from "@/components/Basket/BasketCard";
	import BasketCalculation from "@/components/Basket/BasketCalculation";

	import TheFooter from "@/components/TheFooter";

	import { mapState } from "vuex";

	export default {
		name: "PageBasket",
		components: {
			TheHeader,

			rBreadcrumbs,
			rCheckbox,
			BasketCard,
			BasketCalculation,

			TheFooter,
		},
		data: () => ({
			links: [
				{
					id: 1,
					description: "Главная",
					route: "/",
					current: false,
				},
				{
					id: 2,
					description: "Корзина",
					current: true,
				},
			],
		}),
		computed: {
			...mapState({
				shopping_list: (state) => state.Basket.shopping_list,
			}),
		},
	};
</script>

<style lang="scss" scoped>
	.basket {
		display: grid;
		grid-template-columns: 1fr 39rem;
		grid-gap: 3rem 5rem;
		.r-breadcrumbs {
			grid-column: 1/3;
		}

		&__col {
		}

		&__title {
			color: var(--dark-blue);
			margin-bottom: 3rem;
		}

		&__control {
			display: grid;
			grid-template-columns: max-content 1fr max-content;
			grid-gap: 4rem;
			align-items: center;
			margin-bottom: 4rem;
			padding: 0 2rem;
			&-icon {
			}
			&-description {
				font-size: 1.4rem;
			}
		}
		&__delete {
			user-select: none;
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 1.7rem;
			width: max-content;
			&-icon {
			}
			&-description {
				font-size: 1.4rem;
				color: var(--yellow);
			}
		}

		&__clear {
			cursor: pointer;
			user-select: none;
			display: flex;
			align-items: center;
			gap: 1.7rem;
			&-description {
				font-size: 1.4rem;
				color: var(--blue);
			}
		}

		&__captions {
			display: grid;
			grid-template-columns: 2rem 10rem 1fr repeat(3, 14rem) 2rem;
			margin-bottom: 2rem;
			padding: 0 2rem;
			grid-gap: 2.5rem;

			.basket__caption {
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
			font-size: 1.8rem;
			color: var(--middle-gray);
			font-weight: 500;
		}

		&__list {
			display: flex;
			flex-direction: column;
		}

		&__buy {
		}
	}
</style>
