<template>
	<div class="page-category theme-container">
		<the-header />
		<main class="main">
			<section class="category center">
				<r-breadcrumbs :links="links"></r-breadcrumbs>
				<h2 class="category__title">{{ title }}</h2>
			</section>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	import TheHeader from "@/components/TheHeader";

	import rBreadcrumbs from "@/components/r-breadcrumbs";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "PageCategory",
		components: {
			TheHeader,

			rBreadcrumbs,

			TheFooter,
		},

		computed: {
			...mapGetters({ categories: "CATEGORIES" }),

			title() {
				let category = "";

				if (this.categories !== null) {
					this.categories.forEach((v_category) => {
						if (v_category.id == this.$route.params.category) {
							category = v_category.name;
						}
					});
				}

				return category;
			},

			links() {
				let links = [
					{
						id: 1,
						description: "Главная",
						route: "/",
						current: false,
					},
					{
						id: 2,
						description: "Каталог",
						route: "/catalog",
						current: false,
					},
					{
						id: 3,
						description: this.title,
						route: "/",
						current: true,
					},
				];
				return links;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.category {
		&__title {
			color: var(--dark-blue);
		}
	}
</style>
