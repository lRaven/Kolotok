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

	import TheBanner from "@/components/General/TheBanner";
	import TheCatalog from "@/components/Catalog/TheCatalog";
	import TheServices from "@/components/General/TheServices";
	import TheNovelties from "@/components/General/TheNovelties";
	import TheSpecials from "@/components/General/TheSpecials";
	import TheBenefits from "@/components/General/TheBenefits";
	import TheProjects from "@/components/General/TheProjects";
	import TheNews from "@/components/General/TheNews";

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
