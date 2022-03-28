<template>
	<section class="the-catalog center">
		<h2
			class="the-catalog__title animate__animated animate__fadeInLeft wow"
		>
			Категории товаров
		</h2>
		<div class="the-catalog__categories">
			<catalog-category
				v-for="category in categories"
				:key="category.id"
				:img="category.img"
				:text="category.text"
				class="animate__animated animate__fadeInUp wow"
			></catalog-category>
		</div>
		<r-button type="button" text="Смотреть всё" :arrow="true"></r-button>
	</section>
</template>

<script>
	import CatalogCategory from "./CatalogCategory";
	import rButton from "./r-button.vue";

	export default {
		name: "TheCatalog",
		components: {
			CatalogCategory,
			rButton,
		},
		data() {
			return {
				categories: [
					{
						id: 1,
						img: "img/catalog/catalog-group1.svg",
						text: "Плитка",
					},
					{
						id: 2,
						img: "img/catalog/catalog-group2.svg",
						text: "Сантехника",
					},
					{
						id: 3,
						img: "img/catalog/catalog-group3.svg",
						text: "Натяжные потолки",
					},

					{
						id: 4,
						img: "img/catalog/catalog-group4.svg",
						text: "Напольные покрытия",
					},
					{
						id: 5,
						img: "img/catalog/catalog-group5.svg",
						text: "Система «Умный дом»",
					},
					{
						id: 6,
						img: "img/catalog/catalog-group6.svg",
						text: "Охранная система",
					},
					{
						id: 7,
						img: "img/catalog/catalog-group7.svg",
						text: "Лестницы",
					},
					{
						id: 8,
						img: "img/catalog/catalog-group8.svg",
						text: "Мебель",
					},
					{
						id: 9,
						img: "img/catalog/catalog-group9.svg",
						text: "Камины",
					},
					{
						id: 10,
						img: "img/catalog/catalog-group10.svg",
						text: "Окна",
					},
					{
						id: 11,
						img: "img/catalog/catalog-group11.svg",
						text: "Декор стен",
					},
					{
						id: 12,
						img: "img/catalog/catalog-group12.svg",
						text: "Обои",
					},
					{
						id: 13,
						img: "img/catalog/catalog-group13.svg",
						text: "Садовые конструкции",
					},
					{
						id: 14,
						img: "img/catalog/catalog-group14.svg",
						text: "Освещение",
					},
					{
						id: 15,
						img: "img/catalog/catalog-group15.svg",
						text: "Двери",
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
