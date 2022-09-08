<template>
	<section class="the-banner">
		<div class="the-banner__container center">
			<banner-slider
				class="the-banner__carousel"
				:slides="slides"
			></banner-slider>
			<div
				data-aos="fade-up"
				class="the-banner__card the-banner__deal shadow"
			>
				<div class="the-banner__deal-content">
					<h3 class="the-banner__deal-title">ВЫГОДНАЯ ПОКУПКА</h3>
					<p class="the-banner__deal-text">
						{{
							document_width > 540
								? "Специальные предложения на товары месяца"
								: "Специальные\nпредложения\nна товары месяца"
						}}
					</p>
					<r-link :way="{ name: 'Home' }" text="Подробнее"></r-link>
				</div>
				<!-- <img
					src="img/catalog/catalog-item.png"
					alt=""
					class="the-banner__deal-img"
				/> -->
				<div class="the-banner__deal-discount">-50%</div>
			</div>
			<div
				data-aos="fade-up"
				class="the-banner__card the-banner__tariffs shadow"
			>
				<div class="the-banner__tariffs-content">
					<h3 class="the-banner__tariffs-title">ТАРИФЫ</h3>
					<p class="the-banner__tariffs-text">
						{{
							document_width > 540
								? "Тарифы на ремонт под ключ"
								: "Тарифы на ремонт\nпод ключ"
						}}
					</p>
					<r-link :way="{ name: 'Home' }" text="Подробнее"></r-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import BannerSlider from "@/components/General/BannerSlider";

	import { mapState } from "vuex";

	export default {
		name: "TheBanner",
		components: { BannerSlider },
		computed: {
			...mapState(["document_width"]),
		},
		data: () => ({
			slides: [
				{
					id: 1,
					img: "img/banner-img.png",
					title: "Всё для ремонта",
					subtitle: "Удобный интернет-магазин от застройщика",
					tags: [
						{ id: 1, text: "Дизайн интерьера" },
						{ id: 2, text: "Черновые работы" },
						{ id: 3, text: "Материалы для ремонта" },
						{ id: 4, text: "Ремонт под ключ" },
					],
				},
				{
					id: 2,
					img: "img/banner-img.png",
					title: "Всё для ремонта",
					subtitle: "Удобный интернет-магазин от застройщика",
					tags: [
						{ id: 1, text: "Дизайн интерьера" },
						{ id: 2, text: "Черновые работы" },
						{ id: 3, text: "Материалы для ремонта" },
						{ id: 4, text: "Ремонт под ключ" },
					],
				},
				{
					id: 3,
					img: "img/banner-img.png",
					title: "Всё для ремонта",
					subtitle: "Удобный интернет-магазин от застройщика",
					tags: [
						{ id: 1, text: "Дизайн интерьера" },
						{ id: 2, text: "Черновые работы" },
						{ id: 3, text: "Материалы для ремонта" },
						{ id: 4, text: "Ремонт под ключ" },
					],
				},
			],
		}),
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.the-banner {
		overflow: hidden;
		padding-top: 4rem;
		@media (max-width: 1023px) {
			padding-top: 3.5rem;
		}
		@media (max-width: 540px) {
			padding-top: 3rem;
		}
		&__container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 3rem 2.4rem;
			@media (max-width: 767px) {
				display: flex;
				flex-direction: column;
			}
		}
		&__carousel {
			grid-column: 1/3;
			@media (max-width: 767px) {
				grid-column: 1/1;
			}
		}
		&__card {
			padding: 3rem 4rem;
			color: $dark-blue;
			overflow: hidden;
			border-radius: 3rem;
			@media (max-width: 1023px) {
				border-radius: 2rem;
				padding: 2rem 1.5rem 1rem 2rem;
			}
		}
		&__deal {
			position: relative;
			background: $light-blue url(/public/img/catalog/catalog-item.png)
				90% 90% / auto 60% no-repeat;
			display: flex;
			@media (max-width: 1023px) {
				background-position: 20rem 5rem;
				background-size: auto 100%;
			}

			&-content {
				display: flex;
				flex-direction: column;
				height: 100%;
				.r-link {
					margin-top: auto;
				}
			}
			&-title {
				margin-bottom: 1.3rem;
				width: max-content;
			}
			&-text {
				max-width: 24rem;
				margin-bottom: 5rem;
				white-space: pre-wrap;
			}

			&-discount {
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: $yellow;
				width: 5rem;
				height: 5rem;
				border-radius: 50%;
				position: absolute;
				right: 1.3rem;
				top: 1.3rem;
				font-size: 1.6rem;
				font-weight: 600;
				@media (max-width: 540px) {
					height: 4rem;
					width: 4rem;
					font-size: 1.4rem;
				}
			}
		}
		&__tariffs {
			background: url(/public/img/banner-tariffs.png) center / cover
				no-repeat;
			&-content {
				display: flex;
				flex-direction: column;
				height: 100%;
				.r-link {
					margin-top: auto;
				}
			}
			&-title {
				margin-bottom: 1.3rem;
			}
			&-text {
				max-width: 24rem;
				margin-bottom: 5rem;
				white-space: pre-wrap;
			}
		}
	}
</style>
