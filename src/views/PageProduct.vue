<template>
	<div class="theme-container">
		<the-header />
		<main class="main">
			<div class="page-product" v-if="Object.keys(product).length > 0">
				<section class="product center">
					<r-breadcrumbs :links="links"></r-breadcrumbs>

					<div class="product__main shadow">
						<div class="product__images">
							<r-discount
								:discount="50"
								class="product__discount"
							></r-discount>
							<img
								:src="image"
								alt=""
								class="product__image product__image-main product__image-main animate__animated animate__fadeInUp"
								@click="openModal"
							/>
							<img
								:src="images[0].img"
								alt=""
								class="product__image animate__animated animate__fadeIn"
								@click="selectPhoto"
							/>
							<img
								:src="images[1].img"
								alt=""
								class="product__image animate__animated animate__fadeIn"
								@click="selectPhoto"
							/>
							<img
								:src="images[2].img"
								alt=""
								class="product__image animate__animated animate__fadeIn"
								@click="selectPhoto"
							/>
						</div>

						<div class="product__info">
							<div
								class="product__top animate__animated animate__fadeInUp"
							>
								<r-favorite
									class="product__favorite"
								></r-favorite>
								<h3 class="product__name">
									{{ product.name }}
								</h3>
								<p class="product__article">
									Артикул:
									<span
										class="product__article-number"
										v-if="
											product.article !== 'None' &&
											product.article !== null
										"
									>
										{{ product.article }}
									</span>
									<span
										class="product__article-number"
										v-else
									>
										не указан
									</span>
								</p>
							</div>

							<form
								class="product__middle animate__animated animate__fadeInUp"
							>
								<h4 class="product__price">
									{{ product.price }} руб.
								</h4>
								<r-counter
									v-model="quantity"
									:getMin="1"
									:getMax="100"
									:getValue="1"
								></r-counter>
								<r-button
									type="button"
									text="Добавить в корзину"
									color="blue"
								></r-button>
							</form>

							<div
								class="product__features animate__animated animate__fadeInUp"
							>
								<h6 class="product__features-title">
									Характеристики товара
								</h6>

								<div
									class="product__feature"
									v-for="(value, key) in productTags"
									:key="key"
								>
									<p class="product__feature-title">
										{{ key }}
									</p>

									<p class="product__feature-value">
										{{ value }}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="product__details">
						<h6 data-aos="fade-up" class="product__details-name">
							{{ product.name }}
						</h6>
						<p data-aos="fade-up" class="product__description">
							{{ product.descriptions }}
						</p>
						<div class="product__details-footer">
							<img
								src="/img/catalog/logo-default.svg"
								alt=""
								class="product__logo"
								v-if="!product.logo"
							/>
							<div class="product__details-link-wrapper">
								<p class="product__details-link-description">
									Подробности<br />
									на сайте производителя
								</p>
								<a
									href="#"
									target="_blank"
									class="product__details-link"
									v-if="!product.link"
								>
									https://naimenovanie.com/
								</a>
							</div>
						</div>
					</div>

					<transition>
						<product-slider
							:slides="images"
							@closeModal="closeModal"
							v-if="isModalOpened"
						></product-slider>
					</transition>
				</section>

				<section class="recommendations">
					<div class="recommendations__container center">
						<h2
							class="recommendations-title animate__animated animate__fadeInUp"
						>
							С этим товаром также сочетаются
						</h2>
						<products-slider
							id="recommendations"
							:category="category"
							v-show="slides.length > 0"
							:slides="slides"
						></products-slider>
					</div>
				</section>
			</div>
			<div class="page-product" v-else>
				<div class="page-product__404">
					<p>Товар не найден</p>
				</div>
			</div>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import { getProduct, getProducts } from "@/api/catalog";

	import TheHeader from "@/components/TheHeader";

	import rDiscount from "@/components/Catalog/r-discount";
	import rFavorite from "@/components/Catalog/r-favorite";
	import rCounter from "@/components/Catalog/r-counter";
	import ProductSlider from "@/components/Catalog/ProductSlider";
	import ProductsSlider from "@/components/ProductsSlider";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "PageProduct",

		components: {
			TheHeader,

			rDiscount,
			rFavorite,
			rCounter,
			ProductSlider,
			ProductsSlider,

			TheFooter,
		},
		watch: {
			product: {
				handler() {
					this.getProductsRecommendations();
				},
				deep: true,
			},
		},
		data: () => ({
			product: {},
			image: "/img/catalog/catalog__photo.png",
			images: [
				{ id: 1, img: "/img/catalog/catalog__photo.png" },
				{ id: 2, img: "/img/catalog/catalog__photo-default.svg" },
				{ id: 3, img: "/img/catalog/catalog__photo-default.svg" },
			],
			quantity: null,

			slides: [],

			isModalOpened: false,
		}),
		computed: {
			...mapState({
				categories: (state) => state.Catalog.categories,
				subcategories: (state) => state.Catalog.subcategories,
				products: (state) => state.Catalog.products,
			}),

			productId() {
				return this.$route.params.product;
			},

			productName() {
				const product = this.product.name;

				document.title = product;

				return product;
			},

			subcategory() {
				if (this.subcategories) {
					return this.subcategories.find(
						(subcategory) =>
							subcategory.id === this.product.sub_category.id
					);
				} else return {};
			},

			category() {
				if (this.subcategory) {
					return this.subcategory.category;
				} else return {};
			},

			productTags() {
				const tags = {};

				for (const key in this.product) {
					if (Object.hasOwnProperty.call(this.product, key)) {
						if (
							key !== "name" &&
							key !== "price" &&
							key !== "sub_category" &&
							key !== "descriptions" &&
							key !== "images" &&
							this.product[key]
						) {
							if (typeof this.product[key] === "object") {
								tags[key] = this.product[key].name;
							} else {
								tags[key] = this.product[key];
							}
						}
					}
				}
				return tags;
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
						route: {
							path: `/catalog/${this.category.slug}/${this.subcategory.slug}`,
							query: { page: 1 },
						},
						current: false,
					},
					{ id: 5, description: this.productName, current: true },
				];
			},
		},
		methods: {
			selectPhoto(e) {
				this.image = e.target.getAttribute("src");
			},
			closeModal() {
				document.querySelector("body").classList.remove("locked");
				this.isModalOpened = false;
			},
			openModal() {
				document.querySelector("body").classList.add("locked");
				this.isModalOpened = true;
			},

			async getCurrentProduct(id) {
				try {
					const response = await getProduct(id);

					this.product = response.data;
				} catch (err) {
					throw new Error(err);
				}
			},

			async getProductsRecommendations() {
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
			this.getCurrentProduct(this.productId);
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.product {
		color: $dark;
		&__main {
			display: grid;
			grid-template-columns: minmax(50rem, 50rem) minmax(66rem, 66rem);
			justify-content: space-between;
			border-radius: 3rem;
			padding: 3rem 4rem;
			margin-bottom: 4rem;
			@media (max-width: 1300px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media (max-width: 1023px) {
				display: flex;
				flex-direction: column;
			}
		}

		&__discount {
			position: absolute;
			left: 0;
			top: 0;
			z-index: 2;
			transform: scale(2);
		}

		&__images {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(4, 1fr);
			grid-gap: 3rem;
			position: relative;
			justify-content: center;
		}
		&__image {
			cursor: pointer;
			pointer-events: all;
			height: 14rem;
			object-fit: contain;
			@media (max-width: 540px) {
				height: 8rem;
			}
			&:nth-child(n + 3) {
				margin: auto;
			}
			&-main {
				grid-column: 1/4;
				grid-row: 1/4;
				height: 100%;
				max-height: 50rem;
				width: 100%;
			}
		}

		&__info {
			padding: 1.5rem;
		}

		&__top {
			margin-bottom: 3rem;
			display: flex;
			flex-direction: column;
		}
		&__favorite {
			margin-left: auto;
			margin-bottom: 1rem;
		}
		&__name {
			max-width: 50rem;
			line-height: 1.2;
			margin-bottom: 1rem;
		}
		&__article {
			font-size: 1.2rem;
			color: $middle-gray;
			&-number {
				color: $cool-gray;
			}
		}

		&__middle {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: 1.5rem;
			border-top: 0.1rem solid $middle-gray;
			border-bottom: 0.1rem solid $middle-gray;
			padding: 3.5rem 0;
			margin-bottom: 4rem;
			animation-delay: 0.4s;
			@media (max-width: 767px) {
			}
		}
		&__price {
			font-size: 2.4rem;
			font-weight: 700;
			color: $dark;
		}

		&__features {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: 10rem;
			animation-delay: 0.6s;
			&-title {
				grid-column: 1/3;
				margin-bottom: 2.3rem;
			}
			&-col {
			}
		}
		&__feature {
			margin-bottom: 2rem;
			@media (max-width: 540px) {
				grid-column: 1/3;
			}
			&-title {
				color: $middle-gray;
				font-size: 1.4em;
				font-weight: 500;
				margin-bottom: 1rem;
			}
			&-value {
				color: $cool-gray;
				font-size: 1.4em;
				font-weight: 500;
				line-height: 1.3;
			}
		}

		&__details {
			border-radius: 3rem;

			&-name {
				margin-bottom: 4rem;
			}
			&-footer {
				display: flex;
				align-items: center;
				gap: 2rem;
				@media (max-width: 767px) {
					flex-wrap: wrap;
				}
			}
			&-link {
				color: $blue;

				&-wrapper {
					font-size: 1.3rem;
				}
				&-description {
					font-size: 1.3rem;
					font-weight: 300;
					margin-bottom: 0.5rem;
				}
			}
		}
		&__description {
			line-height: 1.7;
			margin-bottom: 3rem;
		}
	}

	.recommendations {
		padding-left: 0;
		padding-right: 0;
		&__container {
			overflow: hidden;
			max-width: 145rem;
			padding: 0 2.5rem;
		}
		&-title {
			color: $dark-blue;
			margin-bottom: 3.5rem;
			padding: 0 1.5rem;
		}
	}

	.page-product__404 {
		display: flex;
		justify-content: center;
		align-items: center;
		height: calc(100vh - 21rem);
		p {
			font-size: 2.4rem;
			font-weight: 500;
		}
	}
</style>
