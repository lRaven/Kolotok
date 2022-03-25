<template>
	<div class="home theme-container">
		<the-header />
		<main class="main">
			<the-banner />
			<the-catalog />
			<the-services />
			<the-novelties />
			<the-specials />
			<the-benefits />
			<the-projects />
			<the-news />
		</main>
	</div>
</template>

<script>
	import TheHeader from "../components/TheHeader.vue";

	import TheBanner from "../components/TheBanner.vue";
	import TheCatalog from "../components/TheCatalog.vue";
	import TheServices from "../components/TheServices.vue";
	import TheNovelties from "../components/TheNovelties.vue";
	import TheSpecials from "../components/TheSpecials.vue";
	import TheBenefits from "../components/TheBenefits.vue";
	import TheProjects from "../components/TheProjects.vue";
	import TheNews from "../components/TheNews.vue";

	export default {
		name: "Home",
		components: {
			TheHeader,
			TheBanner,
			TheCatalog,
			TheServices,
			TheNovelties,
			TheSpecials,
			TheBenefits,
			TheProjects,
			TheNews,
		},
	};
</script>

<style lang="scss" scoped></style>
