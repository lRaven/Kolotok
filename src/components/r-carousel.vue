<template>
	<carousel :itemsToShow="itemsToShow">
		<slide v-for="slide in slides" :key="slide.id">
			<div class="carousel__item">
				<!-- //*banner slide -->
				<banner-card
					v-if="type === 'banner'"
					:id="slide.id"
					:img="slide.img"
					:title="slide.title"
					:subtitle="slide.subtitle"
					:tags="slide.tags"
				></banner-card>

				<!-- //*service slide -->
				<r-service
					v-if="type === 'service'"
					:id="slide.id"
					:img="slide.img"
					:title="slide.title"
					:description="slide.description"
					button_text="Заказать"
				></r-service>

				<!-- //*card slide -->
				<r-card
					v-if="type === 'card'"
					:id="slide.id"
					:img="slide.img"
					:price="slide.price"
					:price_old="slide.price_old"
					:name="slide.name"
					:discount_percent="slide.discount_percent"
				></r-card>

				<!-- //*news slide -->
				<news-card
					:id="slide.id"
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
	import BannerCard from "./BannerCard";
	//*service slide
	import rService from "./r-service";
	//*card slide
	import rCard from "./Catalog/r-card";
	//*news slide
	import NewsCard from "./NewsCard";

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
