<template>
	<div class="page-subcategory theme-container">
		<the-header />

		<main class="main page-subcategory__main">
			<section class="page-subcategory__section">
				<div class="page-subcategory__container center">
					<r-breadcrumbs :links="links"></r-breadcrumbs>
					<h2 class="page-subcategory__title">
						{{ subcategory.name }}
					</h2>
					<r-dropdown :values="sortVariations"></r-dropdown>

					<div class="page-subcategory__products">
						<r-loader v-if="!isProductsLoaded"></r-loader>
						<template v-else>
							<r-card
								v-for="product in pagination.cards_list"
								:key="product.id"
								:card="product"
								:category="category"
							></r-card>
						</template>
					</div>

					<div class="page-subcategory__bottom">
						<r-button
							class="yellow"
							text="Показать ещё"
							:arrow="true"
							@click="page_changed(page + 1, true)"
						></r-button>
						<r-pagination
							:start_page="page"
							:count="count"
							:items_on_page="pagination.cards_in_page"
							:prev_page="pagination_data.previous"
							:next_page="pagination_data.next"
							@page_changed="page_changed"
						></r-pagination>
					</div>
				</div>
			</section>
		</main>

		<the-footer />
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import { paginationMixin } from "@/mixins/paginationMixins";
	import { getProducts } from "@/api/catalog";

	import TheHeader from "@/components/TheHeader";

	import rDropdown from "@/components/Catalog/Category/r-dropdown";
	import rCard from "@/components/Catalog/r-card";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "PageSubcategory",
		mixins: [paginationMixin],
		components: {
			TheHeader,

			rDropdown,
			rCard,

			TheFooter,
		},
		watch: {
			"$route.path"() {
				if (this.$route.name === this.pagination.path_name) {
					this.getCards();
				}
			},
		},
		data: () => ({
			sortVariations: [
				{ id: 1, value: 1, text: "По цене (возрастание)" },
				{ id: 2, value: 2, text: "По цене (убывание" },
			],

			pagination_data: {},
			isProductsLoaded: false,
		}),
		computed: {
			...mapState({
				categories: (state) => state.Catalog.categories,
				subcategories: (state) => state.Catalog.subcategories,
			}),

			category() {
				let current_category = {};

				if (this.categories) {
					this.categories.forEach((category) => {
						if (category.slug === this.$route.params.category) {
							current_category = category;
						}
					});
				}

				return current_category;
			},

			subcategory() {
				const current_subcategory = this.subcategories.find(
					(subcategory) =>
						subcategory.slug === this.$route.params.subcategory
				);

				if (current_subcategory) {
					document.title = current_subcategory.name;
				}

				return current_subcategory;
			},

			links() {
				return [
					{
						id: 1,
						description: "Главная",
						route: { name: "Home" },
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
						description: this.category.name,
						route: {
							path: `/catalog/${this.category.slug}`,
							query: { page: 1 },
						},
						current: false,
					},
					{
						id: 4,
						description: this.subcategory.name,
						current: true,
					},
				];
			},
		},
		methods: {
			async getCards(addCards = false) {
				try {
					const response = await getProducts({
						sub_category: this.subcategory.id,
						page_size: this.pagination.cards_in_page,
						page: this.page,
					});

					if (response.status === 200) {
						this.isProductsLoaded = true;

						for (const key in response.data) {
							if (
								Object.hasOwnProperty.call(response.data, key)
							) {
								if (key !== "results") {
									this.pagination_data[key] =
										response.data[key];
								} else {
									if (addCards) {
										this.pagination.cards_list.push(
											...response.data[key]
										);
									} else {
										this.pagination.cards_list =
											response.data[key];
									}
								}
							}
						}
					}
				} catch (err) {
					this.isProductsLoaded = true;
					this.$router.push({ name: "Catalog" });
					throw new Error(err);
				}
			},

			page_changed(page_number, type) {
				if (type) {
					this.pagination.load_next_cards = true;
				} else {
					this.pagination.load_next_cards = false;
				}

				this.$router.push({
					path: `/catalog/${this.category.id}/${this.subcategory.id}`,
					query: { page: page_number },
				});
			},
		},
		mounted() {
			this.getCards();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-subcategory {
		&__section {
			min-height: calc(100vh - 21rem);
			display: grid;
			grid-template-rows: 1fr;
		}
		&__container {
			display: flex;
			flex-direction: column;
		}
		&__title {
			color: $dark-blue;
			margin-bottom: 4rem;
			@media (max-width: 540px) {
				margin-bottom: 3rem;
			}
		}
		.r-dropdown {
			margin-bottom: 4rem;
		}
		&__products {
			position: relative;
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			justify-content: space-between;
			grid-gap: 4rem 2.4rem;
			padding-bottom: 5rem;
			@media (max-width: 1440px) {
				grid-template-columns: repeat(5, 1fr);
			}
			@media (max-width: 1200px) {
				grid-template-columns: repeat(4, 1fr);
			}
			@media (max-width: 1023px) {
				grid-template-columns: repeat(3, 1fr);
			}
			@media (max-width: 767px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media (max-width: 375px) {
				grid-template-columns: 1fr;
			}
			.r-card-wrapper {
				margin: auto;
				max-width: inherit;
			}
		}

		&__bottom {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 2rem;
			margin-top: auto;
			@media (max-width: 1023px) {
				grid-template-columns: repeat(2, max-content);
				justify-content: space-between;
			}
			@media (max-width: 767px) {
				display: flex;
				flex-direction: column-reverse;
			}

			.r-button {
				grid-area: 1/2/1/3;
				margin: auto;
				@media (max-width: 1023px) {
					grid-area: inherit;
				}
			}
			.r-pagination {
				grid-area: 1/3/1/4;
				margin-left: auto;
				@media (max-width: 1023px) {
					grid-area: inherit;
					margin: auto;
				}
			}
		}
	}
</style>
