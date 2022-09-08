<template>
	<div data-aos="fade-up" class="banner-slider__wrapper">
		<button
			class="banner-slider__btn banner-slider__btn-prev swiper-button-prev"
		></button>

		<swiper
			class="banner-slider"
			:slidesPerView="1"
			:space-between="20"
			:navigation="{
				prevEl: '.banner-slider__btn-prev',
				nextEl: '.banner-slider__btn-next',
			}"
			:pagination="true"
			:modules="modules"
			:speed="600"
			:loop="true"
		>
			<swiper-slide v-for="slide in slides" :key="slide.id">
				<banner-card
					:title="slide.title"
					:img="slide.img"
					:subtitle="slide.subtitle"
					:tags="slide.tags"
				></banner-card>
			</swiper-slide>
		</swiper>

		<button
			class="banner-slider__btn banner-slider__btn-next swiper-button-next"
		></button>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation, Pagination } from "swiper";

	import "swiper/css";
	import "swiper/css/navigation";
	import "swiper/css/pagination";

	import BannerCard from "@/components/General/BannerCard";

	export default {
		props: { slides: Array },
		components: {
			Swiper,
			SwiperSlide,

			BannerCard,
		},
		setup: () => ({ modules: [Navigation, Pagination] }),
	};
</script>

<style lang="scss" scoped>
	.banner-slider {
		&__wrapper {
			position: relative;
		}
	}
</style>
