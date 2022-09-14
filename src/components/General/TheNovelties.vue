<template>
	<section class="the-novelties">
		<div class="the-novelties__container center">
			<h2 data-aos="fade-right" class="the-novelties__title">Новинки</h2>

			<products-slider id="novelties" :slides="slides"></products-slider>
		</div>
	</section>
</template>

<script>
	import ProductsSlider from "@/components/ProductsSlider";

	export default {
		name: "TheNovelties",
		components: {
			ProductsSlider,
		},
		data: () => ({
			slides: [
				{
					id: 1,
					img: "/img/catalog/catalog-item1.png",
					price: 22000,
					name: "Садовые конструкции",
				},
				{
					id: 2,
					img: "/img/catalog/catalog-item2.png",
					price: 22000,
					name: "Садовые конструкции",
				},
				{
					id: 3,
					img: "/img/catalog/catalog-item3.png",
					price: 22000,
					name: "Садовые конструкции",
				},
				{
					id: 4,
					img: "/img/catalog/catalog-item4.png",
					price: 22000,
					name: "Садовые конструкции",
				},
				{
					id: 5,
					img: "/img/catalog/catalog-item5.png",
					price: 22000,
					name: "Садовые конструкции",
				},
				{
					id: 6,
					img: "/img/catalog/catalog-item6.png",
					price: 22000,
					name: "Садовые конструкции",
				},
			],
		}),
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.the-novelties {
		padding: 2.5rem 0 0 0;
		display: flex;
		justify-content: center;
		&__container {
			max-width: 145rem;
			padding: 0 2.5rem;
			overflow: hidden;
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
