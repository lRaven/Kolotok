<template>
	<div class="page-product theme-container">
		<the-header />
		<main class="main">
			<section class="product center" v-if="hasProduct === true">
				<r-breadcrumb :links="links"></r-breadcrumb>
				<div class="product__main">
					<r-discount :discount="50"></r-discount>
					<div class="product__main-images">
						<img
							src="img/catalog/catalog-item-default.svg"
							alt=""
							class="product__main-image"
						/>
						<img
							src="img/catalog/catalog-item-default.svg"
							alt=""
							class="product__main-image"
						/>
						<img
							src="img/catalog/catalog-item-default.svg"
							alt=""
							class="product__main-image"
						/>
						<img
							src="img/catalog/catalog-item-default.svg"
							alt=""
							class="product__main-image"
						/>
					</div>
					<div class="product__main-info">
						<div class="product__header">
							<h3 class="product__name">{{ name }}</h3>
						</div>
						<form class="product__middle">
							<h4 class="product__price">{{ price }}</h4>
							<r-counter v-model="quantity"></r-counter>
						</form>
					</div>
					<r-favorite></r-favorite>
				</div>
				<div class="product__details"></div>
				<div class="product__compatible">
					<h2 class="product__compatible-title">
						С этим товаром также сочетаются
					</h2>
					<compatible-list
						:slides="slides"
						:pagination="false"
						:itemsToShow="6"
					></compatible-list>
				</div>
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
	import CompatibleList from "../components/CompatibleList";

	import TheFooter from "../components/TheFooter";

	export default {
		components: {
			TheHeader,

			rBreadcrumb,
			rDiscount,
			rFavorite,
			rCounter,
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
				name: "1",
				price: "1",
			};
		},
		mounted() {
			document.title = this.productName || "product";
		},
	};
</script>

<style lang="scss" scoped>
	.product {
		&__main {
			&-discount {
				height: 5rem;
				width: 5rem;
				border-radius: 50%;
				background-color: var(--yellow);
			}
			&-images {
			}
			&-image {
			}
		}

		&__details {
		}

		&__compatible {
			&-title {
				color: var(--dark-blue);
				margin-bottom: 3.5rem;
			}
		}
	}
</style>
