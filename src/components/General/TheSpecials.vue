<template>
	<section class="the-specials">
		<div class="the-specials__container center">
			<h2 data-aos="fade-right" class="the-specials__title">
				Специальные предложения
			</h2>
			<products-slider :slides="slides"></products-slider>
		</div>
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
					img: "/img/catalog/catalog-item7.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 2,
					img: "/img/catalog/catalog-item.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 3,
					img: "/img/catalog/catalog-item8.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 4,
					img: "/img/catalog/catalog-item4.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 5,
					img: "/img/catalog/catalog-item5.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 6,
					img: "/img/catalog/catalog-item6.png",
					price: 22000,
					price_old: 22000,
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 7,
					img: "/img/catalog/catalog-item1.png",
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
	@import "@/assets/scss/variables.scss";

	.the-specials {
		padding: 2.5rem 0 0 0;
		display: flex;
		justify-content: center;
		&__container {
			overflow: hidden;
			max-width: 145rem;
			padding: 0 2.5rem;
			@media (max-width: 1023px) {
				padding: 0 2rem;
			}
			@media (max-width: 540px) {
				padding: 0 1.5rem;
			}
		}
		&__title {
			color: $dark-blue;
			margin-bottom: 3.5rem;
			padding: 0 1rem;
			@media (max-width: 540px) {
				margin-bottom: 3rem;
			}
		}
	}
</style>
