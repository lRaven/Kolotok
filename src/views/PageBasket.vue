<template>
	<div class="page-basket theme-container">
		<the-header />
		<main class="main">
			<section class="basket center">
				<r-breadcrumb :links="links"></r-breadcrumb>
				<div class="basket__col basket__list"></div>
				<div class="basket__col basket__buy"></div>
			</section>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import TheHeader from "../components/TheHeader";

	import rBreadcrumb from "../components/r-breadcrumb";

	import TheFooter from "../components/TheFooter";

	import { mapGetters } from "vuex";

	export default {
		name: "PageBasket",
		components: {
			TheHeader,

			rBreadcrumb,

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
</style>
