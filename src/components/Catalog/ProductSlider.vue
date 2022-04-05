<template>
	<div class="product-slider">
		<div class="product-slider__body">
			<swiper
				:slidesPerView="1"
				:navigation="true"
				:modules="modules"
				:style="{
					'--swiper-navigation-color': '#7a7a7a',
				}"
				:speed="350"
				:loop="true"
			>
				<swiper-slide v-for="slide in slides" :key="slide.id">
					<img :src="slide.img" alt="" class="product-slider__img" />
				</swiper-slide>
			</swiper>
		</div>

		<div class="product-slider__bg" @click="closeModal"></div>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation } from "swiper";

	import "swiper/css";
	import "swiper/css/navigation";

	export default {
		name: "ProductSlider",
		components: {
			Swiper,
			SwiperSlide,
		},
		props: {
			slides: Array,
		},
		setup() {
			return {
				modules: [Navigation],
			};
		},
		methods: {
			closeModal() {
				this.$emit("closeModal");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.product-slider {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 4;
		padding: 2rem;
		&__body {
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 2rem;
			max-height: 80vh;
			height: 100%;
			max-width: 80vh;
			width: 100%;
		}
		&__img {
			height: 100%;
			width: calc(100% - 12rem);
			object-fit: contain;
		}
		&__bg {
			cursor: pointer;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background: rgba(50, 50, 50, 0.6);
			z-index: -1;
		}
	}
</style>
