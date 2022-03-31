<template>
	<section class="the-services center-carousel">
		<r-carousel
			:pagination="false"
			:slides="slides"
			type="service"
			:itemsToShow="1"
		>
		</r-carousel>
	</section>
</template>

<script>
	import rCarousel from "./r-carousel.vue";

	export default {
		name: "TheServices",
		components: {
			rCarousel,
		},
		data() {
			return {
				slides: [
					{
						id: 1,
						img: "img/services/services-img.png",
						title: "Услуги",
						description:
							"Проектирование, ремонт и обустройство квартиры",
						button_text: "Заказать",
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.the-services {
		padding: 2rem 1.5rem;
	}
</style>
