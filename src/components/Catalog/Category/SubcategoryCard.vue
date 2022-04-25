<template>
	<div class="subcategory-card shadow">
		<img src="" alt="" v-if="img" class="subcategory-card__img" />
		<img
			src="img/catalog/catalog__photo-default.svg"
			alt=""
			class="subcategory-card__img"
			v-else
		/>
		<p class="subcategory-card__text">{{ text }}</p>
	</div>
</template>

<script>
	export default {
		name: "SubcategoryCard",
		props: {
			img: String,
			text: String,
		},
	};
</script>

<style lang="scss" scoped>
	.subcategory-card {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		padding: 1rem;
		border-radius: 1rem;
		&__img {
			height: 5rem;
			width: 5rem;
			object-fit: contain;
		}
		&__text {
			color: var(--dark-blue);
			font-size: 1.4rem;
			line-height: 1.3;
		}
	}
</style>
