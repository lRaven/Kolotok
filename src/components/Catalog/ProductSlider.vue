<template>
	<div class="product-slider">
		<div class="product-slider__body">
			<button
				class="product-slider__btn product-slider__prev swiper-button-prev"
			></button>
			<swiper
				:slidesPerView="1"
				:navigation="{
					prevEl: '.product-slider__prev',
					nextEl: '.product-slider__next',
				}"
				:modules="modules"
				:speed="350"
				:loop="true"
			>
				<swiper-slide v-for="slide in slides" :key="slide.id">
					<img :src="slide.img" alt="" class="product-slider__img" />
				</swiper-slide>
			</swiper>
			<button
				class="product-slider__btn product-slider__next swiper-button-next"
			></button>
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
	@import "@/assets/scss/variables";

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
			position: relative;
			background-color: $white;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 2rem;
			max-height: 80vh;
			height: 100%;
			max-width: 80vh;
			width: 100%;
		}
		&__prev {
			left: 1.5rem !important;
		}
		&__next {
			right: 1.5rem !important;
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
