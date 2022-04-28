<template>
	<router-link
		:to="{ path: path, query }"
		class="animate__animated animate__fadeInLeft wow r-link"
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
				stroke="var(--dark-blue)"
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
	.r-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		&__arrow {
		}
		&__text {
			color: var(--dark-blue);
			font-size: 1.4rem;
		}
	}
</style>
