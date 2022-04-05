<template>
	<div class="the-news center-carousel">
		<h2 class="animate__animated animate__fadeInRight wow the-news__title">
			Новости
		</h2>
		<news-slider :slides="slides"></news-slider>
	</div>
</template>

<script>
	import NewsSlider from "./NewsSlider";

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
			NewsSlider,
		},
	};
</script>

<style lang="scss" scoped>
	.the-news {
		padding: 2rem 1.5rem;
		&__title {
			color: var(--dark-blue);
			padding: 0 1rem;
		}
	}
</style>
