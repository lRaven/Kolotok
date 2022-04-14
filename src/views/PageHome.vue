<template>
	<div class="page-home theme-container">
		<the-header />
		<main class="main">
			<the-banner />
			<the-catalog title="Категории товаров" :isCatalogPage="false" />
			<the-services />
			<the-novelties />
			<the-specials />
			<the-benefits />
			<the-projects />
			<the-news />
		</main>
		<the-footer />
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";

	import TheBanner from "@/components/TheBanner";
	import TheCatalog from "@/components/TheCatalog";
	import TheServices from "@/components/TheServices";
	import TheNovelties from "@/components/TheNovelties";
	import TheSpecials from "@/components/TheSpecials";
	import TheBenefits from "@/components/TheBenefits";
	import TheProjects from "@/components/TheProjects";
	import TheNews from "@/components/TheNews";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "PageHome",
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

			TheFooter,
		},
	};
</script>

<style lang="scss" scoped></style>
