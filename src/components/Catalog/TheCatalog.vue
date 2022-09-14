<template>
	<section class="the-catalog">
		<div class="the-catalog__container center">
			<slot name="breadcrumbs"></slot>
			<h2 data-aos="fade-right" class="the-catalog__title">
				{{ title }}
			</h2>
			<div class="the-catalog__categories">
				<catalog-category
					v-for="category in categories"
					:key="category.id"
					:category="category"
					:way="{
						path: `/catalog/${category.id}/`,
						query: { page: 1 },
					}"
				></catalog-category>
			</div>
			<r-button
				type="button"
				text="Смотреть всё"
				color="yellow"
				:arrow="true"
				v-show="!isCatalogPage"
				@click="this.$router.push({ name: 'Catalog' })"
			></r-button>
		</div>
	</section>
</template>

<script>
	import CatalogCategory from "@/components/Catalog/CatalogCategory";

	import { mapState } from "vuex";

	export default {
		name: "TheCatalog",
		components: { CatalogCategory },
		props: {
			title: String,
			isCatalogPage: Boolean,
		},
		computed: {
			...mapState({ categories: (state) => state.Catalog.categories }),
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.the-catalog {
		&__title {
			margin-bottom: 5rem;
			color: $dark-blue;
			@media (max-width: 1023px) {
				margin-bottom: 4rem;
			}
			@media (max-width: 540px) {
				margin-bottom: 3rem;
			}
		}
		&__categories {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 2.4rem;
			margin-bottom: 4rem;
			@media (max-width: 1023px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media (max-width: 767px) {
				grid-template-columns: 1fr;
			}
			@media (max-width: 540px) {
				grid-gap: 2rem;
			}
		}
		.r-button {
			margin: auto;
		}
	}
</style>
