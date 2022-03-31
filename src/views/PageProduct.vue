<template>
	<div class="page-product theme-container">
		<the-header />
		<main class="main">
			<section class="product center" v-if="hasProduct === true">
				<r-breadcrumb :links="links"></r-breadcrumb>

				<div class="product__main shadow">
					<div class="product__images">
						<r-discount
							:discount="50"
							class="product__discount"
						></r-discount>
						<img
							:src="image"
							alt=""
							class="product__image product__image-main"
						/>
						<img
							src="img/catalog/catalog__photo.png"
							alt=""
							class="product__image"
							@click="selectPhoto"
						/>
						<img
							src="img/catalog/catalog__photo-default.svg"
							alt=""
							class="product__image"
							@click="selectPhoto"
						/>
						<img
							src="img/catalog/catalog__photo-default.svg"
							alt=""
							class="product__image"
							@click="selectPhoto"
						/>
					</div>

					<div class="product__info">
						<div class="product__top">
							<r-favorite class="product__favorite"></r-favorite>
							<h3 class="product__name">{{ product.name }}</h3>
							<p class="product__article">
								Артикул:
								<span
									class="product__article-number"
									v-if="product.article"
								>
									{{ product.article }}
								</span>
								<span class="product__article-number" v-else>
									не указан
								</span>
							</p>
						</div>
						<form class="product__middle">
							<h4 class="product__price">
								{{ product.price }} руб.
							</h4>
							<r-counter v-model="quantity"></r-counter>
							<r-button
								type="button"
								text="Добавить в корзину"
							></r-button>
						</form>
						<div class="product__features">
							<h6 class="product__features-title">
								Характеристики товара
							</h6>

							<div class="product__features-col">
								<div class="product__feature">
									<p class="product__feature-title">
										Поставщик
									</p>
									<p class="product__feature-value">
										{{ product.supplier }}
									</p>
								</div>

								<div class="product__feature">
									<p class="product__feature-title">Бренд</p>
									<p class="product__feature-value">
										{{ product.brand }}
									</p>
								</div>

								<div class="product__feature">
									<p class="product__feature-title">Размер</p>
									<p class="product__feature-value">
										{{ product.size }}
									</p>
								</div>
							</div>

							<div class="product__features-col">
								<div class="product__feature">
									<p class="product__feature-title">Класс</p>
									<p class="product__feature-value">
										{{ product.product_class }}
									</p>
								</div>
								<div class="product__feature">
									<p class="product__feature-title">
										Пожарный класс
									</p>
									<p class="product__feature-value">
										{{ product.fire_class }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="product__details shadow">
					<div class="product__details-title shadow">Описание</div>
					<h6 class="product__details-name">{{ product.name }}</h6>
					<p class="product__description">
						{{ product.descriptions }}
					</p>
					<div class="product__details-footer">
						<img
							src="img/catalog/logo-default.svg"
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
			</section>

			<section class="compatible center-carousel">
				<h2 class="compatible-title">
					С этим товаром также сочетаются
				</h2>
				<compatible-list
					:slides="slides"
					:pagination="false"
					:itemsToShow="6"
				></compatible-list>
			</section>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	import TheHeader from "../components/TheHeader";

	import rBreadcrumb from "../components/r-breadcrumb";
	import rDiscount from "../components/Catalog/r-discount";
	import rFavorite from "../components/Catalog/r-favorite";
	import rCounter from "../components/Catalog/r-counter";
	import rButton from "../components/Catalog/r-button";
	import CompatibleList from "../components/CompatibleList";

	import TheFooter from "../components/TheFooter";

	export default {
		components: {
			TheHeader,

			rBreadcrumb,
			rDiscount,
			rFavorite,
			rCounter,
			rButton,
			CompatibleList,

			TheFooter,
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
					this.$router.push("/404");
				} else result = true;
				return result;
			},
			//*получение названия товара
			productName() {
				return this.product.name;
			},

			productSubCategory() {
				let result = "";

				this.sub_categories.forEach((sub_category) => {
					if (sub_category.id === this.product.sub_category[0])
						result = sub_category;
				});
				return result;
			},

			productCategory() {
				let result = "";
				this.categories.forEach((category) => {
					if (category.id === this.productSubCategory.category)
						result = category;
				});
				return result;
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
		data() {
			return {
				slides: [
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
					{ id: 1, img: "img/catalog/" },
					{ id: 2, img: "img/catalog/" },
					{ id: 3, img: "img/catalog/" },
				],
			};
		},
		methods: {
			selectPhoto(e) {
				this.image = e.target.getAttribute("src");
			},
		},
		mounted() {
			document.title = this.productName || "product";
		},
	};
</script>

<style lang="scss" scoped>
	.product {
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
	.compatible {
		&-title {
			color: var(--dark-blue);
			margin-bottom: 3.5rem;
			padding: 0 1.5rem;
		}
	}
</style>
