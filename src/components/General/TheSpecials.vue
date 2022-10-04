<template>
	<section class="the-specials">
		<div class="the-specials__container center">
			<h2 data-aos="fade-right" class="the-specials__title">
				Специальные предложения
			</h2>
			<products-slider
				id="specials"
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
		name: "TheSpecials",
		components: {
			ProductsSlider,
		},
		watch: {
			subcategory: {
				handler() {
					if (this.subcategory) {
						this.getProductsSpecials();
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
				if (this.categories) {
					return this.categories.find(
						(el) => el.id === this.subcategory.category.id
					);
				} else return {};
			},
		},
		methods: {
			async getProductsSpecials() {
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
			if (this.subcategory) {
				this.getProductsSpecials();
			}
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.the-specials {
		padding: 2.5rem 0 0 0;
		display: flex;
		justify-content: center;
		&__container {
			overflow: hidden;
			max-width: 145rem;
			padding: 0 2.5rem;
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
