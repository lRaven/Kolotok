<template>
	<div class="banner-card">
		<img :src="img" alt="" class="banner-card__bg" v-once />
		<h1 class="banner-card__title" v-once>
			{{ title }}
		</h1>
		<h4 class="banner-card__subtitle" v-show="documentWidth > 540">
			{{ subtitle }}
		</h4>
		<div class="banner-card__tags" v-show="documentWidth > 1023">
			<r-tag v-for="tag in tags" :key="tag.id" :text="tag.text"></r-tag>
		</div>

		<r-link
			v-show="documentWidth > 1023"
			:way="{ name: 'Catalog' }"
			text="Перейти в каталог"
			class="banner-card__link"
		></r-link>

		<r-button
			v-show="documentWidth <= 1023"
			color="white"
			:arrow="true"
			:reverse="true"
			text="Перейти в каталог"
		></r-button>
	</div>
</template>

<script>
	import rTag from "@/components/r-tag";

	import { mapState } from "vuex";

	export default {
		name: "BannerCard",
		components: { rTag },
		props: {
			title: String,
			subtitle: String,
			img: String,
			tags: Array,
		},
		computed: {
			...mapState(["documentWidth"]),
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.banner-card {
		position: relative;
		padding: 6rem 5rem 16rem 5rem;
		border-radius: 3rem;
		overflow: hidden;
		width: 100%;
		height: 100%;
		@media (max-width: 1023px) {
			padding: 5rem 5rem 3rem 5rem;
			border-radius: 2rem;
		}
		@media (max-width: 540px) {
			padding: 3rem 2rem 4rem 2rem;
		}
		&__bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			z-index: -1;
		}

		&__title {
			text-align: left;
			color: $dark-blue;
			margin-bottom: 1.7rem;
		}
		&__subtitle {
			text-align: left;
			color: $dark-blue;
			max-width: 39rem;
			line-height: 1.5;
			margin-bottom: 7rem;
			@media (max-width: 1023px) {
				margin-bottom: 11rem;
				line-height: 1.2;
			}
		}
		&__tags {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			max-width: 43rem;
			margin-bottom: 7rem;
			.r-tag {
				box-shadow: 0 0.4rem 0.4rem rgba($cool-gray, $alpha: 0.4);
				&:first-child {
					animation-delay: 0.2s;
				}
				&:nth-child(2) {
					animation-delay: 0.4s;
				}
				&:nth-child(3) {
					animation-delay: 0.6s;
				}
				&:last-child {
					animation-delay: 0.8s;
				}
			}
		}
		.r-link {
			animation-delay: 0.8s;
		}
	}
</style>
