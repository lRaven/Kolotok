<template>
	<section class="the-novelties">
		<div class="the-novelties__container center">
			<h2 data-aos="fade-right" class="the-novelties__title">Новинки</h2>

			<products-slider
				id="novelties"
				:slides="slides"
				:category="category"
				v-show="slides.length > 0"
			></products-slider>
		</div>
	</section>
</template>

<script>
	import ProductsSlider from "@/components/ProductsSlider";

	import { getProducts } from "@/api/catalog";
	import { mapState } from "vuex";

	export default {
		name: "TheNovelties",
		components: {
			ProductsSlider,
		},
		watch: {
			subcategory: {
				handler() {
					if (this.subcategory) {
						this.getProductsNovelties();
					}
				},
				deep: true,
			},
		},
		data: () => ({ slides: [] }),
		computed: {
			...mapState({
				categories: (state) => state.Catalog.categories,
				subcategories: (state) => state.Catalog.subcategories,
			}),

			subcategory() {
				if (this.subcategories) {
					return this.subcategories[0];
				} else return {};
			},
			category() {
				return this.subcategory.category;
			},
		},
		methods: {
			async getProductsNovelties() {
				try {
					const response = await getProducts({
						sub_category: this.subcategory.id,
						page_size: 6,
						page: 1,
					});

					if (response.status === 200) {
						this.slides = response.data.results;
					}
				} catch (err) {
					throw new Error(err);
				}
			},
		},
		mounted() {
			if (this.subcategory.id) {
				this.getProductsNovelties();
			}
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.the-novelties {
		padding: 2.5rem 0 0 0;
		display: flex;
		justify-content: center;
		&__container {
			max-width: 145rem;
			padding: 0 2.5rem;
			overflow: hidden;
			@media (max-width: 1023px) {
				padding: 0 2rem;
			}
			@media (max-width: 540px) {
				padding: 0 1.5rem;
			}
		}
		&__title {
			color: $dark-blue;
			margin-bottom: 3.5rem;
			padding: 0 1rem;
			@media (max-width: 540px) {
				margin-bottom: 3rem;
			}
		}
	}
</style>
