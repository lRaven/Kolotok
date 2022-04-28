<template>
	<div class="animate__animated animate__fadeInUp wow news-card shadow">
		<div
			class="news-card__top"
			:style="`background: url(${img}) center / cover no-repeat`"
		>
			<div
				class="animate__animated animate__fadeInDown wow news-card__date"
			>
				{{ date }}
			</div>
		</div>
		<div class="news-card__bottom">
			<h3
				class="animate__animated animate__fadeInUp wow news-card__title"
			>
				{{ title }}
			</h3>
			<p class="news-card__text animate__animated animate__fadeInUp wow">
				{{ text }}
			</p>
			<r-link path="/" text="Читать далее"></r-link>
		</div>
	</div>
</template>

<script>
	import rLink from "@/components/r-link";

	export default {
		name: "NewsCard",
		props: {
			img: String,
			date: String,
			title: String,
			text: String,
			route: String,
		},
		components: {
			rLink,
		},
	};
</script>

<style lang="scss" scoped>
	.news-card {
		display: grid;
		grid-template-rows: 1.35fr 1fr;
		color: var(--dark-blue);
		border-radius: 3rem;
		overflow: hidden;

		&__top {
			display: flex;
			justify-content: flex-end;
		}
		&__date {
			background: rgba(255, 255, 255, 0.4);
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
				background: rgba(255, 255, 255, 0.85);
			}
		}

		&__bottom {
			padding: 3.7rem 2.8rem 4.5rem 3.6rem;
			display: flex;
			flex-direction: column;
		}
		&__title {
			margin-bottom: 1.5rem;
			animation-delay: 0.2s;
		}
		&__text {
			line-height: 1.3;
			margin-bottom: 10rem;
			animation-delay: 0.4s;
		}
		.r-link {
			margin-left: auto;
			animation-delay: 0.5s;
		}
	}
</style>
