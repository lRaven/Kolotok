<template>
	<div class="products-slider">
		<button
			class="products-slider__btn swiper-button-prev"
			:class="`products-slider__prev-${id}`"
		></button>

		<swiper
			class="products-slider__swiper"
			:slidesPerView="6"
			:space-between="35"
			:navigation="{
				prevEl: `.products-slider__prev-${id}`,
				nextEl: `.products-slider__next-${id}`,
			}"
			:modules="modules"
			:speed="600"
			:loop="true"
		>
			<swiper-slide v-for="slide in slides" :key="slide.id">
				<r-card :id="slide.id" :card="slide"></r-card>
			</swiper-slide>
		</swiper>

		<button
			class="products-slider__btn swiper-button-next"
			:class="`products-slider__next-${id}`"
		></button>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation } from "swiper";

	import "swiper/css";
	import "swiper/css/navigation";

	import rCard from "@/components/Catalog/r-card";

	export default {
		name: "ProductsSlider",
		components: {
			Swiper,
			SwiperSlide,

			rCard,
		},
		props: {
			slides: Array,
			id: [Number, String],
		},
		setup: () => ({ modules: [Navigation] }),
	};
</script>

<style lang="scss" scoped>
	.products-slider {
		padding-bottom: 6rem;
		position: relative;
		&__swiper {
			overflow: visible;
		}

		&__btn {
			top: 36%;
		}
	}
</style>
