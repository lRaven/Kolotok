<template>
	<div class="page-basket theme-container">
		<the-header />
		<main class="main">
			<section class="basket center">
				<r-breadcrumbs :links="links"></r-breadcrumbs>
				<div class="basket__col basket__list">
					<basket-card
						v-for="product in products"
						:key="product.id"
						:product="product"
					></basket-card>
				</div>
				<div class="basket__col basket__buy">
					<basket-calculation></basket-calculation>
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

	import { mapGetters } from "vuex";

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
					route: "/",
					current: true,
				},
			],

			products: [
				{
					id: 1,
					img: "img/catalog/catalog-item1.png",
					name: "Люстра декоративная Ambra",
					price: "",
					article: "FR5167PL-06BS",
				},
				{
					id: 2,
					img: "img/catalog/catalog-item2.png",
					name: "Кресло Гомер Симпсон",
					price: "",
					article: "FR5167PL-06BS",
				},
				{
					id: 3,
					img: "img/catalog/catalog-item3.png",
					name: "Кран водопроводный сенсорный",
					price: "",
					article: "FR5167PL-06BS",
				},
			],
		}),
		computed: {
			...mapGetters({ shopping_list: "SHOPPING_LIST" }),
		},
	};
</script>

<style lang="scss" scoped>
	.page-basket {
	}
	.basket {
		display: grid;
		grid-template-columns: 1fr 34rem;
		.r-breadcrumbs {
			grid-column: 1/3;
		}
	}
</style>
