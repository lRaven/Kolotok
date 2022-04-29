<template>
	<div class="page-discount theme-container">
		<the-header />
		<main class="main">
			<section class="discount center">
				<r-breadcrumbs :links="links"></r-breadcrumbs>
				<h2 class="discount__title">Акции</h2>
				<div class="discount__subcategories">
					<!-- <subcategory-card
						v-for="subcategory in current_subcategories"
						:key="subcategory.id"
						:text="subcategory.name"
					></subcategory-card> -->
				</div>
				<r-dropdown :values="sortVariations"></r-dropdown>
				<div class="discount__products">
					<!-- <r-card
						v-for="product in current_products"
						:key="product.id"
						:id="product.id"
						:discount_percent="product.discount_percent"
						:img="product.img"
						:price="product.price"
						:price_old="product.price_old"
						:name="product.name"
						:category="current_category.id"
					></r-card> -->
				</div>
				<div class="discount__bottom">
					<r-button
						class="yellow"
						text="Показать ещё"
						:arrow="true"
					></r-button>
					<r-pagination
						:pages="paginationPages"
						:currentPage="page_number"
						@selectPage="selectPage"
					></r-pagination>
				</div>
			</section>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	import TheHeader from "@/components/TheHeader";

	import rBreadcrumbs from "@/components/r-breadcrumbs";
	// import SubcategoryCard from "@/components/Catalog/Category/SubcategoryCard";
	import rDropdown from "@/components/Catalog/Category/r-dropdown";
	// import rCard from "@/components/Catalog/r-card";
	import rButton from "@/components/r-button";
	import rPagination from "@/components/r-pagination";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "PageDiscount",
		components: {
			TheHeader,

			rBreadcrumbs,
			rDropdown,
			// SubcategoryCard,
			// rCard,
			rButton,
			rPagination,

			TheFooter,
		},
		data: () => ({
			sortVariations: [
				{ id: 1, value: 1, text: "По цене (возрастание)" },
				{ id: 2, value: 2, text: "По цене (убывание" },
			],

			//*TODO: интегрировать пагинацию с бекендом и отредактировать этот массив
			paginationPages: [
				{ id: 1, page: 1, class: "current" },
				{ id: 2, page: 2, class: null },
				{ id: 3, page: 3, class: null },
				{ id: 4, page: 4, class: null },
				{ id: 5, page: 5, class: null },
				{ id: 6, page: 6, class: null },
				{ id: 7, page: 7, class: null },
				{ id: 8, page: 8, class: null },
				{ id: 9, page: 9, class: null },
				{ id: 10, page: 10, class: null },
			],
		}),

		computed: {
			...mapGetters({
				categories: "CATEGORIES",
				sub_categories: "SUB_CATEGORIES",
				products: "PRODUCTS",
			}),

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
						description: "Акции",
						route: "/",
						current: true,
					},
				];
				return links;
			},

			page_number() {
				return Number(this.$route.query.page);
			},

			current_path() {
				return this.$router.currentRoute._value.path;
			},
		},
		methods: {
			selectPage(page) {
				this.$router.push({
					path: this.current_path,
					query: { page },
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	.discount {
		&__title {
			color: var(--dark-blue);
			margin-bottom: 4rem;
		}
		&__subcategories {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-gap: 2rem 2.6rem;
			margin-bottom: 6rem;
		}
		.r-dropdown {
			margin-bottom: 4rem;
		}
		&__products {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			justify-content: space-between;
			grid-gap: 4rem 2.4rem;
			padding-bottom: 5rem;
			.r-card {
				margin: auto;
			}
		}

		&__bottom {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			padding-bottom: 8rem;
			.r-button {
				grid-area: 1/2/1/3;
				margin: auto;
			}
			.r-pagination {
				grid-area: 1/3/1/4;
				margin-left: auto;
			}
		}
	}
</style>
