<template>
	<div class="the-news center-swiper">
		<h2 class="the-news__title">Новости</h2>
		<r-carousel :slides="slides" type="news" :itemsToShow="3"></r-carousel>
	</div>
</template>

<script>
	import rCarousel from "./r-carousel.vue";

	export default {
		name: "TheNews",
		data() {
			return {
				slides: [
					{
						id: 1,
						img: "img/news/news-item1.png",
						date: "01.03.2022",
						title: "Удобная оплата",
						text: "Вы можете оплатить заказ оналайн банковской картой",
						route: "/",
					},
					{
						id: 2,
						img: "img/news/news-item2.png",
						date: "01.03.2022",
						title: "Удобная оплата",
						text: "Вы можете оплатить заказ оналайн банковской картой",
						route: "/",
					},
					{
						id: 3,
						img: "img/news/news-item3.png",
						date: "01.03.2022",
						title: "Удобная оплата",
						text: "Вы можете оплатить заказ оналайн банковской картой",
						route: "/",
					},
					{
						id: 4,
						img: "img/news/news-item1.png",
						date: "01.03.2022",
						title: "Удобная оплата",
						text: "Вы можете оплатить заказ оналайн банковской картой",
						route: "/",
					},
					{
						id: 5,
						img: "img/news/news-item2.png",
						date: "01.03.2022",
						title: "Удобная оплата",
						text: "Вы можете оплатить заказ оналайн банковской картой",
						route: "/",
					},
					{
						id: 6,
						img: "img/news/news-item3.png",
						date: "01.03.2022",
						title: "Удобная оплата",
						text: "Вы можете оплатить заказ оналайн банковской картой",
						route: "/",
					},
				],
			};
		},
		components: {
			rCarousel,
		},
	};
</script>

<style lang="scss" scoped>
	.the-news {
		padding: 2rem 1.5rem;
		&__title {
			color: var(--dark-blue);
			padding: 0 2.5rem;
		}
		&__swiper {
		}
	}
</style>
