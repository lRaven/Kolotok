<template>
	<section class="the-novelties center-carousel">
		<h2
			class="animate__animated animate__fadeInRight wow the-novelties__title"
		>
			Новинки
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
		name: "TheNovelties",
		components: {
			rCarousel,
		},
		data() {
			return {
				slides: [
					{
						id: 1,
						img: "img/catalog/catalog-item1.png",
						price: "22 000",
						name: "Садовые конструкции",
					},
					{
						id: 2,
						img: "img/catalog/catalog-item2.png",
						price: "22 000",
						name: "Садовые конструкции",
					},
					{
						id: 3,
						img: "img/catalog/catalog-item3.png",
						price: "22 000",
						name: "Садовые конструкции",
					},
					{
						id: 4,
						img: "img/catalog/catalog-item4.png",
						price: "22 000",
						name: "Садовые конструкции",
					},
					{
						id: 5,
						img: "img/catalog/catalog-item5.png",
						price: "22 000",
						name: "Садовые конструкции",
					},
					{
						id: 6,
						img: "img/catalog/catalog-item6.png",
						price: "22 000",
						name: "Садовые конструкции",
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.the-novelties {
		padding: 2rem 1.5rem;
		&__title {
			color: var(--dark-blue);
			margin-bottom: 3.5rem;
			padding: 0 1.5rem;
		}
	}
</style>
