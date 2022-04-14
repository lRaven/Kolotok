<template>
	<section class="the-services center">
		<services-slider :slides="slides"></services-slider>
	</section>
</template>

<script>
	import ServicesSlider from "@/components/ServicesSlider";

	export default {
		name: "TheServices",
		components: {
			ServicesSlider,
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
					{
						id: 2,
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
