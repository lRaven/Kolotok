<template>
	<section class="the-specials center">
		<h2
			class="the-specials__title animate__animated animate__fadeInLeft wow"
		>
			Специальные предложения
		</h2>
		<products-slider :slides="slides"></products-slider>
	</section>
</template>

<script>
	import ProductsSlider from "@/components/ProductsSlider";

	export default {
		name: "TheSpecials",
		components: {
			ProductsSlider,
		},
		data: () => ({
			slides: [
				{
					id: 1,
					img: "img/catalog/catalog-item7.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 2,
					img: "img/catalog/catalog-item.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 3,
					img: "img/catalog/catalog-item8.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 4,
					img: "img/catalog/catalog-item4.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 5,
					img: "img/catalog/catalog-item5.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 6,
					img: "img/catalog/catalog-item6.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 7,
					img: "img/catalog/catalog-item1.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
			],
		}),
	};
</script>

<style lang="scss" scoped>
	.the-specials {
		padding-bottom: 0;
		&__title {
			color: var(--dark-blue);
			margin-bottom: 3.5rem;
			padding: 0 1rem;
		}
	}
</style>
