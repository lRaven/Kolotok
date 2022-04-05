<template>
	<swiper
		class="specials-slider"
		:slidesPerView="3"
		:space-between="28"
		:navigation="true"
		:modules="modules"
		:style="{
			'--swiper-navigation-color': '#7a7a7a',
		}"
		:speed="600"
		:loop="true"
	>
		<swiper-slide v-for="slide in slides" :key="slide.id">
			<news-card
				:id="slide.id"
				:img="slide.img"
				:date="slide.date"
				:title="slide.title"
				:text="slide.text"
				:route="slide.route"
			></news-card>
		</swiper-slide>
	</swiper>
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation } from "swiper";

	import "swiper/css";
	import "swiper/css/navigation";

	import NewsCard from "./NewsCard";

	export default {
		name: "NewsSlider",
		props: {
			slides: Array,
		},
		components: {
			Swiper,
			SwiperSlide,

			NewsCard,
		},
		setup() {
			return {
				modules: [Navigation],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.swiper {
		&-slide {
			&-content {
				height: 100%;
			}
		}
	}
</style>
