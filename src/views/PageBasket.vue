<template>
	<div class="page-basket theme-container">
		<the-header />
		<main class="main">
			<section class="basket center">
				<r-breadcrumbs :links="links"></r-breadcrumbs>
				<h2 class="basket__title">Корзина</h2>

				<div class="basket__col basket__list">
					<div class="basket__col basket__captions">
						<p class="basket__caption">Товар</p>
						<p class="basket__caption">Цена</p>
						<p class="basket__caption">Количество</p>
						<p class="basket__caption">Стоимость</p>
					</div>
					<basket-card
						v-for="product in shopping_list"
						:key="product.id"
						:product="product"
					></basket-card>
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
	import BasketCard from "@/components/Basket/BasketCard";
	import BasketCalculation from "@/components/Basket/BasketCalculation";

	import TheFooter from "@/components/TheFooter";

	import { mapState } from "vuex";

	export default {
		name: "PageBasket",
		components: {
			TheHeader,

			rBreadcrumbs,
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
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 2.4rem;

		.r-breadcrumbs {
			grid-column: 1/3;
		}

		&__title {
			grid-column: 1/3;
			color: var(--dark-blue);
			margin-bottom: 1rem;
		}

		&__captions {
			padding: 0 2rem 0 1rem;
			display: grid;
			grid-template-columns: 25rem repeat(4, 1fr) 2rem;
			grid-template-areas: "empty a b c d emptytoo";
			margin-bottom: 1.6rem;
			grid-gap: 2rem;

			.basket__caption {
				&:first-child {
					grid-area: a;
				}
				&:nth-child(2) {
					grid-area: b;
				}
				&:nth-child(3) {
					grid-area: c;
				}
				&:nth-child(4) {
					grid-area: d;
				}
			}
		}
		&__caption {
			&:nth-child(-n + 2) {
				text-align: left;
			}
			text-align: center;
			font-size: 1.8rem;
			color: var(--middle-gray);
			font-weight: 500;
		}

		&__list {
			display: flex;
			flex-direction: column;
			grid-column: 1/4;
		}
		&-calculation {
			transform: translateY(3.4rem);
		}
	}
</style>
