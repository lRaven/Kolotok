<template>
	<div class="r-gallery-wrapper">
		<div class="r-gallery">
			<carousel :itemsToShow="1" class="r-gallery__carousel">
				<slide
					v-for="slide in slides"
					:key="slide.id"
					class="r-gallery__slide"
					:style="`background: url(${slide.img}) center / contain no-repeat`"
				>
				</slide>

				<template #addons>
					<navigation />
				</template>
			</carousel>
		</div>

		<div class="r-gallery__blur" @click="closeModal"></div>
	</div>
</template>

<script>
	import "vue3-carousel/dist/carousel.css";
	import { Carousel, Slide, Navigation } from "vue3-carousel";

	export default {
		name: "rGallery",
		components: {
			Carousel,
			Slide,
			Navigation,
		},
		props: {
			slides: Array,
		},
		methods: {
			closeModal() {
				this.$emit("closeModal");
			},
		},
	};
</script>

<style lang="scss">
	.r-gallery {
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 9rem 8rem;
		max-height: 80vh;
		height: 100%;
		max-width: 60vw;
		width: 100%;
		&-wrapper {
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 4;
		}
		&__blur {
			cursor: pointer;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background: rgba(50, 50, 50, 0.6);
			z-index: -1;
		}

		&__carousel {
			width: 100%;
			height: 100%;
			.carousel {
				&__viewport,
				&__track {
					height: 100%;
				}
				&__slide {
					padding: 0;
				}
				&__prev {
					left: -5rem;
					background-color: #ebebeb !important;
					box-shadow: 0 0 0.5rem 0rem var(--middle-gray) !important;
				}
				&__next {
					right: -5rem;
					background-color: #ebebeb !important;
					box-shadow: 0 0 0.5rem 0rem var(--middle-gray) !important;
				}
			}
		}
	}
</style>
