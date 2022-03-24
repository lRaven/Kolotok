<template>
	<section class="the-services center">
		<r-swiper-services></r-swiper-services>
	</section>
</template>

<script>
	import rSwiperServices from "../components/r-swiper-services.vue";

	export default {
		name: "TheServices",
		components: {
			rSwiperServices,
		},
	};
</script>

<style lang="scss" scoped></style>
