<template>
	<swiper
		class="services-slider"
		:slidesPerView="1"
		:space-between="20"
		:navigation="true"
		:modules="modules"
		:style="{
			'--swiper-navigation-color': '#7a7a7a',
		}"
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
	.swiper {
		&-slide {
			&-content {
				height: 100%;
			}
		}
	}
</style>
