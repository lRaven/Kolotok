<template>
	<carousel :itemsToShow="itemsToShow" class="compatible-list">
		<slide v-for="slide in slides" :key="slide.id">
			<div class="compatible-list__item">
				<r-card
					:id="slide.id"
					:img="slide.img"
					:price="slide.price"
					:price_old="slide.price_old"
					:name="slide.name"
					:discount_percent="slide.discount_percent"
				></r-card>
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

	import rCard from "./Catalog/r-card";

	export default {
		name: "CompatibleList",
		components: {
			Carousel,
			Slide,
			Navigation,
			Pagination,

			rCard,
		},
		props: {
			pagination: Boolean,
			itemsToShow: Number,
			slides: Array,
		},
		data: () => ({}),
	};
</script>
