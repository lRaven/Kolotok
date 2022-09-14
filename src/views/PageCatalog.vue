<template>
	<div class="page-catalog theme-container">
		<the-header />
		<main class="main">
			<the-catalog title="Каталог" :isCatalogPage="true">
				<template v-slot:breadcrumbs>
					<r-breadcrumbs :links="links"></r-breadcrumbs>
				</template>
			</the-catalog>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";

	import TheCatalog from "@/components/Catalog/TheCatalog";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "PageCatalog",
		components: {
			TheHeader,

			TheCatalog,

			TheFooter,
		},
		data: () => ({
			//*links list for breadcrumb component
			links: [
				{
					id: 1,
					description: "Главная",
					route: { name: "Home" },
					current: false,
				},
				{
					id: 2,
					description: "Каталог",
					current: true,
				},
			],
		}),
	};
</script>
