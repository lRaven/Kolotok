<template>
	<carousel :itemsToShow="itemsToShow">
		<slide v-for="slide in slides" :key="slide.id">
			<div class="carousel__item">
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
					:date="slide.date"
					:img="slide.img"
					:route="slide.route"
					:text="slide.text"
					:title="slide.title"
					v-if="type === 'news'"
				></news-card>
			</div>
		</slide>

		<template #addons>
			<navigation />
			<pagination v-if="pagination" />
		</template>
	</carousel>
</template>

<script>
	import "vue3-carousel/dist/carousel.css";
	import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

	//*banner slide
	import BannerCard from "./BannerCard.vue";
	//*service slide
	import rService from "./r-service.vue";
	//*card slide
	import rCard from "./r-card.vue";
	//*news slide
	import NewsCard from "./NewsCard.vue";

	export default {
		name: "rCarousel",
		components: {
			Carousel,
			Slide,
			Navigation,
			Pagination,

			BannerCard,
			rService,
			rCard,
			NewsCard,
		},
		props: {
			type: String,
			pagination: Boolean,
			itemsToShow: Number,
			slides: Array,
		},
		data() {
			return {};
		},
	};
</script>

<style lang="scss">
	.carousel {
		padding: 0;
		text-align: left;
		&__item {
			min-height: 20rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&__slide {
			padding: 1rem;
		}
		&__track {
		}
		&__prev,
		&__next {
			box-sizing: content-box;
			width: 5rem;
			height: 5rem;
			border-radius: 50%;
			background-color: var(--light-gray);
			box-shadow: 0 0 0.5rem 0rem var(--gray);
			font-size: 3.5rem;
			color: #7a7a7a;
		}
		&__prev {
			transform: translate(-1.5rem, -50%);
		}
		&__next {
			transform: translate(1.5rem, -50%);
		}
	}
</style>
