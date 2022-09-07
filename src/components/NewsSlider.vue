<template>
	<div class="news-slider">
		<button
			class="news-slider__btn news-slider__prev swiper-button-prev"
		></button>

		<swiper
			class="news-slider__swiper"
			:slidesPerView="3"
			:space-between="36"
			:navigation="{
				prevEl: '.news-slider__prev',
				nextEl: '.news-slider__next',
			}"
			:modules="modules"
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

		<button
			class="news-slider__btn news-slider__next swiper-button-next"
		></button>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation } from "swiper";

	import "swiper/css";
	import "swiper/css/navigation";

	import NewsCard from "@/components/NewsCard";

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
	.news-slider {
		position: relative;
		&__swiper {
			overflow: visible;
			.swiper-slide {
				padding: 1rem 0;
			}
		}
	}
</style>
