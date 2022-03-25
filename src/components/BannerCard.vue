<template>
	<div class="r-banner-card-wide">
		<img :src="img" alt="" class="r-banner-card-wide__bg" />
		<h1 class="r-banner-card-wide__title">
			{{ title }}
		</h1>
		<h4 class="r-banner-card-wide__subtitle">
			{{ subtitle }}
		</h4>
		<div class="r-banner-card-wide__tags">
			<r-tag v-for="tag in tags" :key="tag.id" :text="tag.text"></r-tag>
		</div>
		<r-link
			route="/"
			text="Перейти в каталог"
			class="r-banner-card-wide__link"
		></r-link>
	</div>
</template>

<script>
	import rTag from "./r-tag.vue";
	import rLink from "./r-link.vue";

	export default {
		name: "rBannerCardWide",
		props: {
			title: String,
			subtitle: String,
			img: String,
			tags: Array,
		},
		components: {
			rTag,
			rLink,
		},
	};
</script>

<style lang="scss" scoped>
	.r-banner-card-wide {
		position: relative;
		padding: 6rem 5rem 16rem 5rem;
		border-radius: 3rem;
		overflow: hidden;
		&__bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			object-fit: contain;
			z-index: -1;
		}

		&__title {
			color: var(--dark-blue);
			margin-bottom: 1.7rem;
		}
		&__subtitle {
			max-width: 39rem;
			line-height: 1.5;
			margin-bottom: 7rem;
		}
		&__tags {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			max-width: 43rem;
			margin-bottom: 7rem;
		}
	}
</style>
