<template>
	<div class="services-slider">
		<button
			class="services-slider__btn services-slider__prev swiper-button-prev"
		></button>

		<swiper
			class="services-slider"
			:slidesPerView="1"
			:space-between="20"
			:navigation="{
				prevEl: '.services-slider__prev',
				nextEl: '.services-slider__next',
			}"
			:modules="modules"
			:speed="600"
			:loop="true"
		>
			<swiper-slide v-for="slide in slides" :key="slide.id">
				<r-service
					:title="slide.title"
					:img="slide.img"
					:description="slide.description"
					:button_text="slide.button_text"
				></r-service>
			</swiper-slide>
		</swiper>

		<button
			class="services-slider__btn services-slider__next swiper-button-next"
		></button>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation } from "swiper";

	import "swiper/css";
	import "swiper/css/navigation";

	import rService from "@/components/r-service";

	export default {
		props: {
			slides: Array,
		},
		components: {
			Swiper,
			SwiperSlide,

			rService,
		},
		setup() {
			return {
				modules: [Navigation],
			};
		},
		methods: {},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.services-slider {
		position: relative;
		&__swiper {
		}

		&__btn {
			@media (max-width: 540px) {
				color: rgba($white, $alpha: 0.5);
			}
		}
	}
</style>
