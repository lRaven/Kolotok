<template>
	<swiper
		class="banner-slider"
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
			<banner-card
				:title="slide.title"
				:img="slide.img"
				:subtitle="slide.subtitle"
				:tags="slide.tags"
			></banner-card>
		</swiper-slide>
	</swiper>
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation } from "swiper";

	import "swiper/css";
	import "swiper/css/navigation";

	import BannerCard from "@/components/BannerCard";

	export default {
		props: {
			slides: Array,
		},
		components: {
			Swiper,
			SwiperSlide,

			BannerCard,
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
