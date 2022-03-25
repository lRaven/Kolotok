<template>
	<div class="the-news center-swiper">
		<h2 class="the-news__title">Новости</h2>
		<r-swiper
			:navigation="true"
			:pagination="false"
			:slides_per_view="3"
			:space_between="25"
			:type="'news'"
			:slides="slides"
		></r-swiper>
	</div>
</template>

<script>
	import rSwiper from "./r-swiper.vue";

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
				],
			};
		},
		components: {
			rSwiper,
		},
	};
</script>

<style lang="scss" scoped>
	.the-news {
		padding: 2rem 0;
		&__title {
			color: var(--dark-blue);
			padding: 0 2.5rem;
		}
	}
</style>
