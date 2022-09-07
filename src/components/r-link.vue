<template>
	<router-link
		data-aos="fade-right"
		:to="{ path: path, query }"
		class="r-link"
	>
		<svg
			width="38"
			height="13"
			viewBox="0 0 38 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="r-link__arrow"
		>
			<path
				d="M0 6.15625H37M37 6.15625L29.7734 12M37 6.15625L29.7734 1"
				stroke="#000888"
			/>
		</svg>
		<p class="r-link__text">{{ text }}</p>
	</router-link>
</template>

<script>
	export default {
		name: "rLink",
		props: {
			path: String,
			query: Object,
			text: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.r-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		&__arrow {
			min-width: 4.5rem;
		}
		&__text {
			color: $dark-blue;
			font-size: 1.4rem;
		}
	}
</style>
