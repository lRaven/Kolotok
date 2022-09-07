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
						Специальные предложения на товары месяца
					</p>
					<r-link path="/" text="Подробнее"></r-link>
				</div>
				<img
					src="img/catalog/catalog-item.png"
					alt=""
					class="the-banner__deal-img"
				/>
				<div class="the-banner__deal-discount">-50%</div>
			</div>
			<div
				data-aos="fade-up"
				class="the-banner__card the-banner__tariffs shadow"
			>
				<div class="the-banner__tariffs-content">
					<h3 class="the-banner__tariffs-title">ТАРИФЫ</h3>
					<p class="the-banner__tariffs-text">
						Тарифы на ремонт под ключ
					</p>
					<r-link path="/" text="Подробнее"></r-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import BannerSlider from "@/components/BannerSlider";
	import rLink from "@/components/r-link";

	export default {
		name: "TheBanner",
		components: { BannerSlider, rLink },
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
		padding: 2.5rem;
		&__container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 3rem 2.4rem;
		}
		&__carousel {
			grid-column: 1/3;
		}
		&__card {
			padding: 3rem 4rem;
			color: $dark-blue;
			overflow: hidden;
			border-radius: 3rem;
		}
		&__deal {
			position: relative;
			background-color: $light-blue;
			display: flex;
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
			}

			&-img {
				transform: translateY(3rem);
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
			}
		}
	}
</style>
