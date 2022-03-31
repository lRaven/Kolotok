<template>
	<section class="the-specials center-carousel">
		<h2
			class="the-specials__title animate__animated animate__fadeInLeft wow"
		>
			Специальные предложения
		</h2>
		<r-carousel
			:pagination="false"
			:slides="slides"
			type="card"
			:itemsToShow="6"
		>
		</r-carousel>
	</section>
</template>

<script>
	import rCarousel from "./r-carousel.vue";

	export default {
		name: "TheSpecials",
		components: {
			rCarousel,
		},
		data: () => ({
			slides: [
				{
					id: 1,
					img: "img/catalog/catalog-item7.png",
					price: "22 000",
					price_old: "22 000",
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 2,
					img: "img/catalog/catalog-item.png",
					price: "22 000",
					price_old: "22 000",
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 3,
					img: "img/catalog/catalog-item8.png",
					price: "22 000",
					price_old: "22 000",
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 4,
					img: "img/catalog/catalog-item4.png",
					price: "22 000",
					price_old: "22 000",
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 5,
					img: "img/catalog/catalog-item5.png",
					price: "22 000",
					price_old: "22 000",
					name: "Садовые конструкции",
					discount_percent: 50,
				},
				{
					id: 6,
					img: "img/catalog/catalog-item6.png",
					price: "22 000",
					price_old: "22 000",
					name: "Садовые конструкции",
					discount_percent: 50,
				},
			],
		}),
	};
</script>

<style lang="scss" scoped>
	.the-specials {
		padding: 2rem 1.5rem;
		&__title {
			color: var(--dark-blue);
			margin-bottom: 3.5rem;
			padding: 0 1.5rem;
		}
	}
</style>
