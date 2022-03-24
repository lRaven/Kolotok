<template>
	<swiper
		:navigation="true"
		:pagination="true"
		:modules="modules"
		:loop="true"
		:slides-per-view="1"
		:space-between="0"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
		class="r-swiper"
	>
		<swiper-slide class="r-swiper-slide">
			<div class="r-swiper-slide-content">
				<slot></slot>
			</div>
		</swiper-slide>
		<swiper-slide class="r-swiper-slide">
			<div class="r-swiper-slide-content">
				<slot></slot>
			</div>
		</swiper-slide>
		<swiper-slide class="r-swiper-slide">
			<div class="r-swiper-slide-content">
				<slot></slot>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script>
	import rBannerCardWide from "./r-banner-card-wide.vue";

	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from "swiper/vue";

	// Import Swiper styles
	import "swiper/css";
	import "swiper/css/navigation";
	import "swiper/css/pagination";

	import { Navigation, Pagination } from "swiper";

	export default {
		components: {
			rBannerCardWide,
			Swiper,
			SwiperSlide,
		},
		setup() {
			const onSwiper = (swiper) => {
				console.log(swiper);
			};
			const onSlideChange = () => {
				console.log("slide change");
			};
			return {
				onSwiper,
				onSlideChange,
				modules: [Navigation, Pagination],
			};
		},
	};
</script>

<style lang="scss">
	.r-swiper {
		width: calc(100% + 5rem);
		transform: translateX(-2.5rem);
		&-slide {
			display: flex;
			justify-content: center;
			align-items: center;
			&-content {
				width: calc(100% - 2.5rem);
				border-radius: 3rem;
				overflow: hidden;
			}
		}
		.swiper {
			&-button {
				&-next,
				&-prev {
					background-color: var(--light-gray);
					width: 5rem;
					height: 5rem;
					border-radius: 50%;
					box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.2);

					&::after {
						font-size: 2rem;
						color: #7a7a7a;
					}
				}
				&-prev {
					left: 0;
				}
				&-next {
					right: 0;
				}
			}
			&-pagination {
				bottom: 5rem;
				&-bullet {
					width: 2rem;
					height: 2rem;
					background-color: #ddd;
					margin: 0 1rem !important;
					opacity: 1;
					&-active {
						background-color: var(--white);
					}
				}
			}
		}
	}
</style>
