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
				:text="category.text"
				:route="category.route"
				class="animate__animated animate__fadeInUp wow"
			></catalog-category>
		</div>
		<router-link :to="{ name: 'catalog' }">
			<r-button
				type="button"
				text="Смотреть всё"
				color="yellow"
				:arrow="true"
				v-if="!isCatalogPage"
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
						text: "Плитка",
						route: "/catalog/4",
					},
					{
						id: 2,
						img: "img/catalog/category_2.svg",
						text: "Сантехника",
						route: "/catalog/7",
					},
					{
						id: 3,
						img: "img/catalog/category_3.svg",
						text: "Натяжные потолки",
						route: "/catalog/8",
					},

					{
						id: 4,
						img: "img/catalog/category_4.svg",
						text: "Напольные покрытия",
						route: "/catalog/1",
					},
					{
						id: 5,
						img: "img/catalog/category_5.svg",
						text: "Система «Умный дом»",
						route: "/catalog/13",
					},
					{
						id: 6,
						img: "img/catalog/category_6.svg",
						text: "Охранная система",
						route: "/catalog/14",
					},
					{
						id: 7,
						img: "img/catalog/category_7.svg",
						text: "Лестницы",
						route: "/catalog/12",
					},
					{
						id: 8,
						img: "img/catalog/category_8.svg",
						text: "Мебель",
						route: "/catalog/9",
					},
					{
						id: 9,
						img: "img/catalog/category_9.svg",
						text: "Камины",
						route: "/catalog/11",
					},
					{
						id: 10,
						img: "img/catalog/category_10.svg",
						text: "Окна",
						route: "/catalog/3",
					},
					{
						id: 11,
						img: "img/catalog/category_11.svg",
						text: "Декор стен",
						route: "/catalog/10",
					},
					{
						id: 12,
						img: "img/catalog/category_12.png",
						text: "Обои",
						route: "/catalog/6",
					},
					{
						id: 13,
						img: "img/catalog/category_13.svg",
						text: "Садовые конструкции",
						route: "/catalog/15",
					},
					{
						id: 14,
						img: "img/catalog/category_14.svg",
						text: "Освещение",
						route: "/catalog/5",
					},
					{
						id: 15,
						img: "img/catalog/category_15.svg",
						text: "Двери",
						route: "/catalog/2",
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
