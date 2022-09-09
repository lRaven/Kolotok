<template>
	<div class="the-news">
		<div class="the-news__container center">
			<h2 data-aos="fade-right" class="the-news__title">Новости</h2>
			<news-slider :slides="slides"></news-slider>
		</div>
	</div>
</template>

<script>
	import NewsSlider from "@/components/NewsSlider";

	export default {
		name: "TheNews",
		components: { NewsSlider },
		data: () => ({
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
		}),
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.the-news {
		padding: 2.5rem 0;
		display: flex;
		justify-content: center;
		&__container {
			max-width: 145rem;
			padding: 0 2.5rem;
			overflow: hidden;
		}
		&__title {
			color: $dark-blue;
			padding: 0 1rem;
			margin-bottom: 3.5rem;
			@media (max-width: 540px) {
				margin-bottom: 3rem;
			}
		}
	}
</style>
