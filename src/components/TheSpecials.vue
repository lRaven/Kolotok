<template>
	<section class="the-specials center-swiper">
		<h2 class="the-specials__title">Специальные предложения</h2>
		<r-swiper
			:navigation="true"
			:pagination="false"
			:slides_per_view="6"
			:slides="slides"
			:space_between="80"
			type="card"
			multi="multi"
		></r-swiper>
	</section>
</template>

<script>
	import rSwiper from "../components/r-swiper.vue";

	export default {
		name: "TheSpecials",
		components: {
			rSwiper,
		},
		data() {
			return {
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
			};
		},
	};
</script>

<style lang="scss" scoped>
	.the-specials {
		padding: 2rem 0;
		&__title {
			color: var(--dark-blue);
			margin-bottom: 3.5rem;
			padding: 0 2.5rem;
		}
	}
</style>
