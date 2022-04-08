<template>
	<div class="page-product theme-container">
		<the-header />
		<main class="main">
			<section class="page-product center" v-if="hasProduct === true">
				<r-breadcrumbs :links="links"></r-breadcrumbs>

				<div class="page-product__main shadow">
					<div class="page-product__images">
						<r-discount
							:discount="50"
							class="page-product__discount"
						></r-discount>
						<img
							:src="image"
							alt=""
							class="page-product__image page-product__image-main animate__animated animate__fadeInUp"
							@click="openModal"
						/>
						<img
							:src="images[0].img"
							alt=""
							class="page-product__image animate__animated animate__fadeIn"
							@click="selectPhoto"
						/>
						<img
							:src="images[1].img"
							alt=""
							class="page-product__image animate__animated animate__fadeIn"
							@click="selectPhoto"
						/>
						<img
							:src="images[2].img"
							alt=""
							class="page-product__image animate__animated animate__fadeIn"
							@click="selectPhoto"
						/>
					</div>

					<div class="page-product__info">
						<div
							class="page-product__top animate__animated animate__fadeInUp"
						>
							<r-favorite
								class="page-product__favorite"
							></r-favorite>
							<h3 class="page-product__name">
								{{ product.name }}
							</h3>
							<p class="page-product__article">
								Артикул:
								<span
									class="page-product__article-number"
									v-if="
										product.article !== 'None' &&
										product.article !== null
									"
								>
									{{ product.article }}
								</span>
								<span
									class="page-product__article-number"
									v-else
								>
									не указан
								</span>
							</p>
						</div>

						<form
							class="page-product__middle animate__animated animate__fadeInUp"
						>
							<h4 class="page-product__price">
								{{ product.price }} руб.
							</h4>
							<r-counter v-model="quantity"></r-counter>
							<r-button
								type="button"
								text="Добавить в корзину"
								color="blue"
							></r-button>
						</form>

						<div
							class="page-product__features animate__animated animate__fadeInUp"
						>
							<h6 class="page-product__features-title">
								Характеристики товара
							</h6>

							<div
								class="page-product__feature"
								v-for="(value, key) in productTags"
								:key="key"
							>
								<p class="page-product__feature-title">
									{{ key }}
								</p>

								<p class="page-product__feature-value">
									{{ value }}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="page-product__details shadow">
					<div class="page-product__details-title shadow">
						Описание
					</div>
					<h6
						class="page-product__details-name animate__animated animate__fadeInUp wow"
					>
						{{ product.name }}
					</h6>
					<p
						class="page-product__description animate__animated animate__fadeInUp wow"
					>
						{{ product.descriptions }}
					</p>
					<div class="page-product__details-footer">
						<img
							src="img/catalog/logo-default.svg"
							alt=""
							class="page-product__logo"
							v-if="!product.logo"
						/>
						<div class="page-product__details-link-wrapper">
							<p class="page-product__details-link-description">
								Подробности<br />
								на сайте производителя
							</p>
							<a
								href="#"
								target="_blank"
								class="page-product__details-link"
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

			<section class="recommendations center-carousel">
				<h2
					class="recommendations-title animate__animated animate__fadeInUp"
				>
					С этим товаром также сочетаются
				</h2>
				<products-slider :slides="recommendations"></products-slider>
			</section>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	import TheHeader from "@/components/TheHeader";

	import rBreadcrumbs from "@/components/r-breadcrumbs";
	import rDiscount from "@/components/Catalog/r-discount";
	import rFavorite from "@/components/Catalog/r-favorite";
	import rCounter from "@/components/Catalog/r-counter";
	import rButton from "@/components/r-button";
	import ProductSlider from "@/components/Catalog/ProductSlider";
	import ProductsSlider from "@/components/ProductsSlider";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "PageProduct",

		components: {
			TheHeader,

			rBreadcrumbs,
			rDiscount,
			rFavorite,
			rCounter,
			rButton,
			ProductSlider,
			ProductsSlider,

			TheFooter,
		},
		data() {
			return {
				recommendations: [
					{
						id: 1,
						price: "1 653",
						price_old: "3 300",
						name: "Ламинат Woodstyle Breeze Дуб Солано Теплый",
						discount_percent: 50,
					},
					{
						id: 2,
						price: "1 653",
						price_old: "3 300",
						name: "Ламинат Woodstyle Breeze Дуб Солано Теплый",
						discount_percent: 50,
					},
					{
						id: 3,
						price: "1 653",
						price_old: "3 300",
						name: "Ламинат Woodstyle Breeze Дуб Солано Теплый",
						discount_percent: 50,
					},
					{
						id: 4,
						price: "1 653",
						price_old: "3 300",
						name: "Ламинат Woodstyle Breeze Дуб Солано Теплый",
						discount_percent: 50,
					},
					{
						id: 5,
						price: "1 653",
						price_old: "3 300",
						name: "Ламинат Woodstyle Breeze Дуб Солано Теплый",
						discount_percent: 50,
					},
					{
						id: 6,
						price: "1 653",
						price_old: "3 300",
						name: "Ламинат Woodstyle Breeze Дуб Солано Теплый",
						discount_percent: 50,
					},
				],
				quantity: null,
				image: "img/catalog/catalog__photo.png",
				images: [
					{ id: 1, img: "img/catalog/catalog__photo.png" },
					{ id: 2, img: "img/catalog/catalog__photo-default.svg" },
					{ id: 3, img: "img/catalog/catalog__photo-default.svg" },
				],
				isModalOpened: false,
			};
		},
		computed: {
			...mapGetters({
				categories: "CATEGORIES",
				sub_categories: "SUB_CATEGORIES",
				products: "PRODUCTS",
			}),

			//*получение товара
			product() {
				let result = {};
				this.products.forEach((product) => {
					if (product.id == this.$route.query.product) {
						result = product;
					}
				});
				return result;
			},

			//*проверка что товар существует
			hasProduct() {
				let result = false;
				if (Object.keys(this.product).length === 0) {
					result = false;
					this.goTo404Page();
				} else result = true;
				return result;
			},

			//*получение названия товара
			productName() {
				return this.product.name;
			},

			//*получение подкатегории товара
			productSubCategory() {
				let result = "";

				this.sub_categories.forEach((sub_category) => {
					if (sub_category.id === this.product.sub_category[0])
						result = sub_category;
				});
				return result;
			},

			//*получение категории товара
			productCategory() {
				let result = "";
				this.categories.forEach((category) => {
					if (category.id === this.productSubCategory.category)
						result = category;
				});
				return result;
			},

			productTags() {
				let tags = {};
				for (const key in this.product) {
					if (Object.hasOwnProperty.call(this.product, key)) {
						if (
							key !== "id" &&
							key !== "name" &&
							key !== "price" &&
							key !== "sub_category" &&
							key !== "descriptions"
						) {
							if (
								(this.product[key] !== 0) &
								(this.product[key] !== "None")
							) {
								tags[key] = this.product[key];
							}
						}
					}
				}
				return tags;
			},

			//*links list for breadcrumb component
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
						route: "/",
						current: false,
					},
					{
						id: 3,
						description: this.productCategory.name,
						route: "/",
						current: false,
					},
					{
						id: 4,
						description: this.productSubCategory.name,
						route: "/",
						current: false,
					},
					{ id: 5, description: this.productName, current: true },
				];
				return links;
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
			goTo404Page() {
				this.$router.push("/404");
			},
		},
		mounted() {
			document.title = this.productName || "product";
		},
	};
</script>

<style lang="scss" scoped>
	.page-product {
		color: var(--dark);
		&__main {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			border-radius: 3rem;
			padding: 1.5rem;
			margin-bottom: 4rem;
		}

		&__discount {
			position: absolute;
			left: 0;
			top: 0;
		}

		&__images {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(4, 1fr);
			grid-gap: 3rem;
			position: relative;
			padding: 4rem 8rem;
		}
		&__image {
			cursor: pointer;
			pointer-events: all;
			width: 100%;
			max-height: 14rem;
			object-fit: contain;
			&-main {
				grid-column: 1/4;
				grid-row: 1/4;
				max-height: 50rem;
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
			color: var(--middle-gray);
			&-number {
				color: var(--cool-gray);
			}
		}

		&__middle {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: 1.5rem;
			border-top: 0.1rem solid var(--middle-gray);
			border-bottom: 0.1rem solid var(--middle-gray);
			padding: 3.5rem 0;
			margin-bottom: 4rem;
			animation-delay: 0.4s;
		}
		&__price {
			font-size: 2.4rem;
			font-weight: 700;
			color: var(--dark);
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
			&-title {
				color: var(--middle-gray);
				font-size: 1.4em;
				font-weight: 500;
				margin-bottom: 1rem;
			}
			&-value {
				color: var(--cool-gray);
				font-size: 1.4em;
				font-weight: 500;
				line-height: 1.3;
			}
		}

		&__details {
			border-radius: 3rem;
			padding: 3.2rem 4.5rem 3.8rem 3.2rem;
			&-title {
				width: fit-content;
				background-color: var(--middle-gray);
				padding: 1.2rem 6rem;
				border-radius: 4.2rem;
				font-size: 1.6rem;
				font-weight: 700;
				color: var(--white);
				margin-bottom: 4rem;
			}
			&-name {
				margin-bottom: 4rem;
			}
			&-footer {
				display: flex;
				align-items: center;
				gap: 2rem;
			}
			&-link {
				color: var(--blue);

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
		&-title {
			color: var(--dark-blue);
			margin-bottom: 3.5rem;
			padding: 0 1.5rem;
		}
	}
</style>
