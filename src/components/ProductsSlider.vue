<template>
	<swiper
		class="products-slider"
		:slidesPerView="6"
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
			<r-card
				:id="slide.id"
				:discount_percent="slide.discount_percent"
				:img="slide.img"
				:price="slide.price"
				:price_old="slide.price_old"
				:name="slide.name"
			></r-card>
		</swiper-slide>
	</swiper>
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation } from "swiper";

	import "swiper/css";
	import "swiper/css/navigation";

	import rCard from "@/components/Catalog/r-card";

	export default {
		name: "ProductsSlider",
		props: {
			slides: Array,
		},
		components: {
			Swiper,
			SwiperSlide,

			rCard,
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
