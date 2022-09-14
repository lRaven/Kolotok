<template>
	<section class="the-services">
		<div class="the-services__container center">
			<services-slider :slides="slides"></services-slider>
		</div>
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
						img: "/img/services/services-img.png",
						title: "Услуги",
						description:
							"Проектирование, ремонт и обустройство квартиры",
						button_text: "Заказать",
					},
					{
						id: 2,
						img: "/img/services/services-img.png",
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
		&__container {
		}
	}
</style>
