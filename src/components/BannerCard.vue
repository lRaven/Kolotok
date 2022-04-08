<template>
	<div class="banner-card shadow">
		<img :src="img" alt="" class="banner-card__bg" />
		<h1 class="banner-card__title animate__animated animate__fadeInUp wow">
			{{ title }}
		</h1>
		<h4
			class="banner-card__subtitle animate__animated animate__fadeInUp wow"
		>
			{{ subtitle }}
		</h4>
		<div class="banner-card__tags">
			<r-tag v-for="tag in tags" :key="tag.id" :text="tag.text"></r-tag>
		</div>
		<r-link
			route="/"
			text="Перейти в каталог"
			class="animate__animated animate__fadeInLeft wow banner-card__link"
		></r-link>
	</div>
</template>

<script>
	import rTag from "@/components/r-tag";
	import rLink from "@/components/r-link";

	export default {
		name: "BannerCard",
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
	.banner-card {
		position: relative;
		padding: 6rem 5rem 16rem 5rem;
		border-radius: 3rem;
		overflow: hidden;
		width: 100%;
		height: 100%;
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
			color: var(--dark-blue);
			margin-bottom: 1.7rem;
		}
		&__subtitle {
			text-align: left;
			color: var(--dark-blue);
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
			.r-tag {
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
