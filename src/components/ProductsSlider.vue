<template>
	<div class="products-slider">
		<button
			class="products-slider__btn swiper-button-prev"
			:class="`products-slider__prev-${id}`"
		>
			<svg
				width="26"
				height="16"
				viewBox="0 0 26 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="products-slider__btn-arrow"
				v-show="document_width <= 767"
			>
				<path
					d="M25 9C25.5523 9 26 8.55228 26 8C26 7.44772 25.5523 7 25 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM25 7L1 7V9L25 9V7Z"
					fill="#D7D9DF"
				/>
			</svg>
		</button>

		<swiper
			class="products-slider__swiper"
			slidesPerView="auto"
			:spaceBetween="20"
			:lazy="true"
			:loop="true"
			:navigation="{
				prevEl: `.products-slider__prev-${id}`,
				nextEl: `.products-slider__next-${id}`,
			}"
			:pagination="paginationConfig"
			:breakpoints="{
				'540': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'768': {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				'1024': {
					slidesPerView: 4,
					spaceBetween: 35,
				},
				'1160': {
					slidesPerView: 5,
					spaceBetween: 35,
				},
				'1400': {
					slidesPerView: 6,
					spaceBetween: 35,
				},
			}"
			:modules="modules"
			:speed="600"
		>
			<swiper-slide v-for="slide in slides" :key="slide.id">
				<r-card :id="slide.id" :card="slide"></r-card>
			</swiper-slide>
		</swiper>

		<div
			class="products-slider__pagination swiper-pagination"
			:class="`products-slider__pagination-${id}`"
		></div>

		<button
			class="products-slider__btn swiper-button-next"
			:class="`products-slider__next-${id}`"
		>
			<svg
				width="26"
				height="16"
				viewBox="0 0 26 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="products-slider__btn-arrow"
				v-show="document_width <= 767"
			>
				<path
					d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM1 9H25V7H1V9Z"
					fill="#D7D9DF"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation, Pagination } from "swiper";

	import "swiper/scss";
	import "swiper/scss/navigation";
	import "swiper/scss/pagination";

	import rCard from "@/components/Catalog/r-card";

	import { mapState } from "vuex";

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
		computed: {
			...mapState(["document_width"]),

			paginationConfig() {
				if (this.document_width <= 767) {
					return {
						el: `.products-slider__pagination-${this.id}`,
						type: "bullets",
					};
				} else return false;
			},
		},
		setup: () => ({ modules: [Navigation, Pagination] }),
	};
</script>

<style lang="scss" scoped>
	.products-slider {
		position: relative;
		padding-bottom: 7.5rem;
		@media (max-width: 767px) {
			display: grid;
			grid-template-columns: max-content 1fr max-content;
			grid-gap: 2rem;
		}

		&__swiper {
			overflow: visible;
			@media (max-width: 767px) {
				grid-column: 1/4;
			}
		}

		&__btn {
			top: 36%;
			@media (max-width: 767px) {
				position: static;
				transform: none;
				background-color: transparent;
				&::after {
					display: none;
				}
			}
		}

		&__pagination {
			@media (max-width: 767px) {
				position: static;
				order: 2;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.swiper {
			&-button {
				&-prev {
					order: 1;
				}
				&-next {
					order: 3;
				}
			}
		}
	}
</style>

<style lang="scss">
	@import "@/assets/scss/variables";

	.products-slider {
		.swiper {
			&-slide {
				@media (max-width: 540px) {
					width: max-content;
				}
			}
			&-pagination {
				&-bullet {
					background-color: $light-gray !important;
					width: 1rem !important;
					height: 1rem !important;
					&-active {
						background-color: $yellow !important;
					}
				}
			}
		}
	}
</style>
