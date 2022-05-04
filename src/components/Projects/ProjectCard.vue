<template>
	<div class="project-card">
		<img :src="img" alt="project main photo" class="project-card__image" />
		<div class="project-card__bottom">
			<r-link path="/projects" :text="description"></r-link>
			<span class="project-card__count">({{ count }} фото)</span>
		</div>
	</div>
</template>

<script>
	import rLink from "@/components/r-link";

	export default {
		name: "ProjectCard",
		props: {
			img: String,
			description: String,
			count: Number,
		},
		components: {
			rLink,
		},
	};
</script>

<style lang="scss" scoped>
	.project-card {
		&__image {
			border-radius: 3rem;
			margin-bottom: 2rem;
		}
		&__bottom {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			gap: 1rem;
			padding: 0 3rem;
		}
		&__count {
			font-size: 2rem;
			color: #787878;
			min-width: max-content;
		}
	}
</style>

<style lang="scss">
	.project-card {
		max-width: 45rem;
		.r-link__text {
			font-size: 2rem;
		}
	}
</style>
