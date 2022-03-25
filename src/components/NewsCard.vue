<template>
	<div class="news-card">
		<div
			class="news-card__top"
			:style="`background: url(${img}) center / cover no-repeat`"
		>
			<div class="news-card__date">
				{{ date }}
			</div>
		</div>
		<div class="news-card__bottom">
			<h3 class="news-card__title">
				{{ title }}
			</h3>
			<p class="news-card__text">
				{{ text }}
			</p>
			<r-link :route="route" text="Читать далее"></r-link>
		</div>
	</div>
</template>

<script>
	import rLink from "./r-link.vue";

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
		grid-template-rows: repeat(2, 1fr);
		min-width: 100%;
	}
</style>
