<template>
	<div class="catalog-category shadow">
		<div class="catalog-category__top">
			<img :src="img" alt="" />
		</div>
		<div class="catalog-category__bottom">
			<r-link route="/" :text="text"></r-link>
		</div>
	</div>
</template>

<script>
	import rLink from "./r-link.vue";

	export default {
		name: "catalogCategory",
		props: {
			img: String,
			text: String,
		},
		components: {
			rLink,
		},
	};
</script>

<style lang="scss" scoped>
	.catalog-category {
		border-radius: 3rem;
		overflow: hidden;
		&__top {
			height: 30rem;
			padding: 1rem;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
		&__bottom {
			border-top: 1px solid #c4c4c4;
			display: flex;
			align-items: center;
			padding: 3rem;
		}
	}
</style>
<style lang="scss">
	.catalog-category {
		.r-link {
			&__text {
				font-size: 2rem;
			}
		}
	}
</style>
