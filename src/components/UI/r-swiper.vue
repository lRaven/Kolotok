<template>
	<div class="r-swiper">
		<swiper
			class="r-swiper__swiper"
			:slidesPerView="1"
			:spaceBetween="20"
			:navigation="true"
			:pagination="{
				el: `.r-swiper__pagination-${this.id}`,
				type: 'bullets',
			}"
			:modules="modules"
			:speed="600"
			:loop="true"
		>
			<swiper-slide
				v-for="slide in slides"
				:key="slide.id"
				class="r-swiper__slide"
			>
				<img :src="slide.img" alt="img" class="r-swiper__slide-img" />
			</swiper-slide>
		</swiper>

		<div
			class="r-swiper__pagination swiper-pagination"
			:class="`r-swiper__pagination-${id}`"
		></div>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation, Pagination } from "swiper";

	import "swiper/scss";
	import "swiper/scss/navigation";
	import "swiper/scss/pagination";

	export default {
		name: "rSwiper",
		components: { Swiper, SwiperSlide },
		props: {
			id: {
				value: [String, Number],
				required: true,
			},
			slides: {
				value: Array,
				required: true,
			},
		},
		setup: () => ({ modules: [Navigation, Pagination] }),
	};
</script>

<style lang="scss" scoped>
	.r-swiper {
		&__swiper {
		}
		&__slide {
			&-img {
				border-radius: 3rem;
				width: 100%;
				height: 16rem;
				object-fit: cover;
			}
		}
		&__pagination {
			padding: 1rem 0;
			position: static;
		}
	}
</style>

<style lang="scss">
	@import "@/assets/scss/variables";

	.r-swiper {
		&__pagination {
			.swiper-pagination {
				&-bullet {
					background-color: $light-gray !important;
					&-active {
						background-color: $yellow !important;
					}
				}
			}
		}
		.swiper {
			&-button {
				&-prev,
				&-next {
					color: $white;
				}
			}
		}
	}
</style>
