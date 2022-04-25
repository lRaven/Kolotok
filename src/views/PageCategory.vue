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
				<div class="category__products">
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
					<r-card
						:id="id"
						:discount_percent="discount_percent"
						:img="img"
						:price="price"
						:price_old="price_old"
						:name="name"
					></r-card>
				</div>
			</section>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from "vuex";

	import TheHeader from "@/components/TheHeader";

	import rBreadcrumbs from "@/components/r-breadcrumbs";
	import SubcategoryCard from "@/components/Catalog/Category/SubcategoryCard";
	import rCard from "@/components/Catalog/r-card";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "PageCategory",
		components: {
			TheHeader,

			rBreadcrumbs,
			SubcategoryCard,
			rCard,

			TheFooter,
		},

		computed: {
			...mapGetters({
				categories: "CATEGORIES",
				sub_categories: "SUB_CATEGORIES",
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
		},
		data: () => ({
			id: 1,
			img: "img/catalog/catalog-item1.png",
			price: "22 000",
			price_old: null,
			name: "Садовые конструкции",
			discount_percent: null,
		}),
		methods: {
			...mapMutations(["SET_CATEGORY"]),
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
		&__products {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			justify-content: space-between;
			grid-gap: 4rem 2.4rem;
			.r-card {
				margin: auto;
			}
		}
	}
</style>
