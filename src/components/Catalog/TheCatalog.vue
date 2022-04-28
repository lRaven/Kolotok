<template>
	<section class="the-catalog center">
		<slot name="breadcrumbs"></slot>
		<h2
			class="the-catalog__title animate__animated animate__fadeInLeft wow"
		>
			{{ title }}
		</h2>
		<div class="the-catalog__categories">
			<catalog-category
				v-for="category in categories"
				:key="category.id"
				:img="category.img"
				:text="category.router.description"
				:routePath="category.router.path"
				:routeQuery="category.router.query"
				class="animate__animated animate__fadeInUp wow"
			></catalog-category>
		</div>
		<router-link :to="{ name: 'catalog' }" v-if="!isCatalogPage">
			<r-button
				type="button"
				text="Смотреть всё"
				color="yellow"
				:arrow="true"
			></r-button>
		</router-link>
	</section>
</template>

<script>
	import CatalogCategory from "@/components/Catalog/CatalogCategory";
	import rButton from "@/components/r-button";

	export default {
		name: "TheCatalog",
		components: {
			CatalogCategory,
			rButton,
		},
		props: {
			title: String,
			isCatalogPage: Boolean,
		},
		data() {
			return {
				categories: [
					{
						id: 1,
						img: "img/catalog/category_1.png",
						router: {
							description: "Плитка",
							path: "/catalog/4",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 2,
						img: "img/catalog/category_2.svg",
						router: {
							description: "Сантехника",
							path: "/catalog/7",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 3,
						img: "img/catalog/category_3.svg",
						router: {
							description: "Натяжные потолки",
							path: "/catalog/8",
							query: {
								page: 1,
							},
						},
					},

					{
						id: 4,
						img: "img/catalog/category_4.svg",
						router: {
							description: "Напольные покрытия",
							path: "/catalog/1",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 5,
						img: "img/catalog/category_5.svg",
						router: {
							description: "Система «Умный дом»",
							path: "/catalog/13",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 6,
						img: "img/catalog/category_6.svg",
						router: {
							description: "Охранная система",
							path: "/catalog/14",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 7,
						img: "img/catalog/category_7.svg",
						router: {
							description: "Лестницы",
							path: "/catalog/12",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 8,
						img: "img/catalog/category_8.svg",
						router: {
							description: "Мебель",
							path: "/catalog/9",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 9,
						img: "img/catalog/category_9.svg",
						router: {
							description: "Камины",
							path: "/catalog/11",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 10,
						img: "img/catalog/category_10.svg",
						router: {
							description: "Окна",
							path: "/catalog/3",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 11,
						img: "img/catalog/category_11.svg",
						router: {
							description: "Декор стен",
							path: "/catalog/10",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 12,
						img: "img/catalog/category_12.png",
						router: {
							description: "Обои",
							path: "/catalog/6",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 13,
						img: "img/catalog/category_13.svg",
						router: {
							description: "Садовые конструкции",
							path: "/catalog/15",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 14,
						img: "img/catalog/category_14.svg",
						router: {
							description: "Освещение",
							path: "/catalog/5",
							query: {
								page: 1,
							},
						},
					},
					{
						id: 15,
						img: "img/catalog/category_15.svg",
						router: {
							description: "Двери",
							path: "/catalog/2",
							query: {
								page: 1,
							},
						},
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.the-catalog {
		&__title {
			margin-bottom: 5rem;
			color: var(--dark-blue);
		}
		&__categories {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 2.4rem;
			margin-bottom: 4rem;
		}
		.r-button {
			margin: auto;
		}
	}
</style>
