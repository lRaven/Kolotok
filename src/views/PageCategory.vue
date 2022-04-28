<template>
	<div class="page-category theme-container">
		<the-header />
		<main class="main">
			<section class="category center">
				<r-breadcrumbs :links="links"></r-breadcrumbs>
				<h2 class="category__title">{{ current_category.name }}</h2>
				<div class="category__subcategories">
					<subcategory-card
						v-for="subcategory in current_subcategories"
						:key="subcategory.id"
						:text="subcategory.name"
					></subcategory-card>
				</div>
				<r-dropdown :values="sortVariations"></r-dropdown>
				<div class="category__products">
					<r-card
						v-for="product in current_products"
						:key="product.id"
						:id="product.id"
						:discount_percent="product.discount_percent"
						:img="product.img"
						:price="product.price"
						:price_old="product.price_old"
						:name="product.name"
					></r-card>
				</div>
				<div class="category__bottom">
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
	import SubcategoryCard from "@/components/Catalog/Category/SubcategoryCard";
	import rDropdown from "@/components/Catalog/Category/r-dropdown";
	import rCard from "@/components/Catalog/r-card";
	import rButton from "@/components/r-button";
	import rPagination from "@/components/r-pagination";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "PageCategory",
		components: {
			TheHeader,

			rBreadcrumbs,
			rDropdown,
			SubcategoryCard,
			rCard,
			rButton,
			rPagination,

			TheFooter,
		},
		data: () => ({
			sortVariations: [
				{ id: 1, value: 1, text: "По цене (возрастание)" },
				{ id: 2, value: 2, text: "По цене (убывание" },
			],

			paginationPages: [
				{ id: 1, page: 1 },
				{ id: 2, page: 2 },
				{ id: 3, page: 3 },
				{ id: 4, page: 4 },
				{ id: 5, page: 5 },
				{ id: 6, page: 6 },
				{ id: 7, page: 7 },
				{ id: 8, page: 8 },
				{ id: 9, page: 9 },
				{ id: 10, page: 10 },
			],
		}),

		computed: {
			...mapGetters({
				categories: "CATEGORIES",
				sub_categories: "SUB_CATEGORIES",
				products: "PRODUCTS",
			}),

			current_category() {
				let category = "";

				if (this.categories !== null) {
					this.categories.forEach((v_category) => {
						if (v_category.id == this.$route.params.category) {
							category = v_category;
						}
					});
				}

				document.title = category.name;

				return category;
			},

			current_subcategories() {
				let current_subcategories = [];

				if (this.sub_categories !== null) {
					this.sub_categories.forEach((subcategory) => {
						if (this.current_category.id === subcategory.category) {
							current_subcategories.push(subcategory);
						}
					});
				}

				return current_subcategories;
			},

			current_products() {
				let products = [];

				if (this.products !== null) {
					this.products.forEach((product) => {
						product.sub_category.forEach((subcategory) => {
							this.current_subcategories.forEach(
								(current_subcategory) => {
									if (
										subcategory === current_subcategory.id
									) {
										products.push(product);
									}
								}
							);
						});
					});
				}

				return products;
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
						description: this.current_category.name,
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
	.category {
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
