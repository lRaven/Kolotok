<template>
	<div class="r-swiper__container">
		<swiper
			:navigation="navigation"
			:pagination="pagination"
			:modules="modules"
			:loop="true"
			:slides-per-view="slides_per_view"
			:space-between="space_between"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
			class="r-swiper"
			:class="multi"
		>
			<swiper-slide
				class="r-swiper__slide"
				v-for="slide in slides"
				:key="slide.id"
			>
				<div class="r-swiper__slide-content shadow">
					<!-- //*banner slide -->
					<banner-card
						v-if="type === 'banner'"
						:img="slide.img"
						:title="slide.title"
						:subtitle="slide.subtitle"
						:tags="slide.tags"
					></banner-card>

					<!-- //*service slide -->
					<r-service
						v-if="type === 'service'"
						:img="slide.img"
						:title="slide.title"
						:description="slide.description"
						button_text="Заказать"
					></r-service>
				</div>
				<!-- //*card slide -->
				<r-card
					v-if="type === 'card'"
					:img="slide.img"
					:price="slide.price"
					:price_old="slide.price_old"
					:name="slide.name"
					:discount_percent="slide.discount_percent"
				></r-card>

				<!-- //*news slide -->
				<news-card
					:img="slide.img"
					:date="slide.date"
					:title="slide.title"
					:text="slide.text"
					:route="slide.route"
					v-if="type === 'news'"
				></news-card>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	//*banner slide
	import BannerCard from "./BannerCard.vue";

	//*service slide
	import rService from "./r-service.vue";

	//*card slide
	import rCard from "./r-card.vue";

	import NewsCard from "./NewsCard";

	//* import Swiper Vue.js components
	import { Swiper, SwiperSlide } from "swiper/vue";

	//* import Swiper styles
	import "swiper/css";
	import "swiper/css/navigation";
	import "swiper/css/pagination";

	import { Navigation, Pagination } from "swiper";

	export default {
		name: "r-swiper",
		props: {
			navigation: Boolean,
			pagination: Boolean,
			slides_per_view: Number,
			space_between: Number,

			type: String,
			slides: Array,
			multi: String,
		},
		data() {
			return {};
		},
		components: {
			BannerCard,
			rService,
			rCard,
			NewsCard,

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
		width: 100%;
		overflow: visible;
		&.multi {
			padding: 0 2.5rem;
			.swiper-slide-prev {
				opacity: 0;
				transition: all 0.2s ease;
			}
		}
		&__container {
			position: relative;
			overflow: hidden;
			padding: 0 2.5rem;
		}

		&__slide {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1.5rem 0;
			&-content {
				width: 100%;
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
					left: -2.5rem;
				}
				&-next {
					right: -2.5rem;
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
