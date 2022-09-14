<template>
	<div data-aos="fade-up" class="news-card shadow">
		<div
			class="news-card__top"
			:style="`background: url(${news.img}) center / cover no-repeat`"
		>
			<div class="news-card__date">
				{{ news.date }}
			</div>
		</div>
		<div class="news-card__bottom">
			<h3 class="news-card__title">
				{{ news.title }}
			</h3>
			<p class="news-card__text">
				{{ news.text }}
			</p>
			<r-link :way="{ name: 'Home' }" text="Читать далее"></r-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "NewsCard",
		props: {
			news: Object,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.news-card {
		display: grid;
		grid-template-rows: 1.35fr 1fr;
		color: $dark-blue;
		border-radius: 3rem;
		overflow: hidden;
		@media (max-width: 1200px) {
			grid-template-rows: 20rem 1fr;
			border-radius: 1rem;
		}
		@media (max-width: 767px) {
			max-width: 22rem;
			grid-template-rows: 10rem 1fr;
		}

		&__top {
			display: flex;
			justify-content: flex-end;
		}
		&__date {
			background: rgba($white, 0.4);
			box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(5rem);
			width: fit-content;
			height: fit-content;
			font-size: 1.4rem;
			font-weight: 500;
			padding: 1rem 4rem;
			border-radius: 0 0 0 3rem;
			animation-delay: 0.2s;
			@-moz-document url-prefix() {
				background: rgba($white, 0.85);
			}
			@media (max-width: 767px) {
				display: none;
			}
		}

		&__bottom {
			padding: 3.7rem 2.8rem 4.5rem 3.6rem;
			display: flex;
			flex-direction: column;
			@media (max-width: 1200px) {
				padding: 2rem;
			}
			@media (max-width: 1023px) {
				padding: 2rem 1rem;
			}
		}
		&__title {
			margin-bottom: 1.5rem;
			animation-delay: 0.2s;
		}
		&__text {
			line-height: 1.3;
			margin-bottom: 10rem;
			animation-delay: 0.4s;
			@media (max-width: 1200px) {
				margin-bottom: 4rem;
			}
			@media (max-width: 1023px) {
				margin-bottom: 2rem;
			}
			@media (max-width: 767px) {
				color: $dark;
			}
		}
		.r-link {
			margin-left: auto;
			animation-delay: 0.5s;
		}
	}
</style>
