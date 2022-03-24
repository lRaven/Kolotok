<template>
	<router-link :to="route" class="r-link-btn">
		<p class="r-link-btn__text">{{ text }}</p>
		<svg
			width="38"
			height="13"
			viewBox="0 0 38 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="r-link-btn__arrow"
		>
			<path
				d="M0 6.15625H37M37 6.15625L29.7734 12M37 6.15625L29.7734 1"
				stroke="var(--dark-blue)"
			/>
		</svg>
	</router-link>
</template>

<script>
	export default {
		name: "rLinkBtn",
		props: {
			route: String,
			text: String,
		},
	};
</script>

<style lang="scss" scoped>
	.r-link-btn {
		background-color: var(--yellow);
		border-radius: 3rem;
		padding: 1.2rem 3rem;
		display: flex;
		align-items: center;
		width: fit-content;

		gap: 2rem;
		&__text {
			color: var(--dark-blue);
			font-size: 1.6rem;
			font-weight: 500;
		}
		&__arrow {
		}
	}
</style>
