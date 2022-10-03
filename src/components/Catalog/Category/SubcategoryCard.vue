<template>
	<div
		class="subcategory-card shadow"
		@click="
			this.$router.push({
				path: `/catalog/${subcategory.category.slug}/${subcategory.slug}`,
				query: { page: 1 },
			})
		"
	>
		<img
			:src="subcategory.img || `/img/catalog/catalog__photo-default.svg`"
			alt="icon"
			class="subcategory-card__img"
		/>
		<p class="subcategory-card__text">{{ subcategory.name }}</p>
	</div>
</template>

<script>
	export default {
		name: "SubcategoryCard",
		props: {
			subcategory: {
				value: Object,
				required: true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.subcategory-card {
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 1.2rem;
		padding: 1rem;
		border-radius: 1rem;
		width: 100%;
		&__img {
			height: 5rem;
			width: 5rem;
			object-fit: contain;
		}
		&__text {
			color: $dark-blue;
			font-size: 1.4rem;
			line-height: 1.3;
		}
	}
</style>
