<template>
	<section class="the-services center-swiper">
		<r-swiper
			:navigation="true"
			:pagination="false"
			:slides_per_view="1"
			:space_between="40"
			:slides="slides"
			type="service"
		></r-swiper>
	</section>
</template>

<script>
	import rSwiper from "../components/r-swiper.vue";

	export default {
		name: "TheServices",
		components: {
			rSwiper,
		},
		data() {
			return {
				slides: [
					{
						id: 1,
						img: "img/services/services-img.png",
						title: "Услуги",
						description:
							"Проектирование, ремонт и обустройство квартиры",
						button_text: "Заказать",
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.the-services {
		padding: 2rem 0;
	}
</style>
