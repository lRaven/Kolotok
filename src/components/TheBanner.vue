<template>
	<section class="the-banner center-carousel">
		<r-carousel
			:pagination="false"
			:slides="slides"
			type="banner"
			:itemsToShow="1"
			class="the-banner__carousel"
		>
		</r-carousel>
		<div
			class="animate__animated animate__fadeInUp wow the-banner__card the-banner__deal shadow"
		>
			<div class="the-banner__deal-content">
				<h3 class="the-banner__deal-title">ВЫГОДНАЯ ПОКУПКА</h3>
				<p class="the-banner__deal-text">
					Специальные предложения на товары месяца
				</p>
				<r-link route="/" text="Подробнее"></r-link>
			</div>
			<img
				src="img/catalog/catalog-item.png"
				alt=""
				class="the-banner__deal-img"
			/>
			<div class="the-banner__deal-discount">-50%</div>
		</div>
		<div
			class="animate__animated animate__fadeInUp wow the-banner__card the-banner__tariffs shadow"
			style="
				background: url(img/banner-tariffs.png) center/ cover no-repeat;
			"
		>
			<div class="the-banner__tariffs-content">
				<h3 class="the-banner__tariffs-title">ТАРИФЫ</h3>
				<p class="the-banner__tariffs-text">
					Тарифы на ремонт под ключ
				</p>
				<!-- //TODO заменить отступ -->
				<r-link
					route="/"
					text="Подробнее"
					style="transform: translateY(1.5rem)"
				></r-link>
			</div>
		</div>
	</section>
</template>

<script>
	import rCarousel from "./r-carousel";
	import rLink from "./r-link.vue";

	export default {
		name: "TheBanner",
		data() {
			return {
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
			};
		},
		components: {
			rCarousel,
			rLink,
		},
	};
</script>

<style lang="scss" scoped>
	.the-banner {
		padding: 4rem 1.5rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 3rem 2.4rem;
		&__carousel {
			grid-column: 1/3;
		}
		&__card {
			padding: 3rem 4rem;
			color: var(--dark-blue);
			overflow: hidden;
			border-radius: 3rem;
			&:nth-child(2) {
				margin-left: 1rem;
			}
			&:last-child {
				margin-right: 1rem;
			}
		}
		&__deal {
			position: relative;
			background-color: var(--light-blue);
			display: flex;
			gap: rem;
			&-content {
			}
			&-title {
				margin-bottom: 1.3rem;
				width: max-content;
			}
			&-text {
				max-width: 24rem;
				margin-bottom: 5rem;
			}

			&-img {
				transform: translateY(3rem);
			}

			&-discount {
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: var(--yellow);
				width: 5rem;
				height: 5rem;
				border-radius: 50%;
				position: absolute;
				right: 1.3rem;
				top: 1.3rem;
				font-size: 1.6rem;
				font-weight: 600;
			}
		}
		&__tariffs {
			&-content {
			}
			&-title {
				margin-bottom: 1.3rem;
			}
			&-text {
				max-width: 24rem;
				margin-bottom: 5rem;
			}
		}
	}
</style>
