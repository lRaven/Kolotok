<template>
	<router-link
		data-aos="fade-right"
		data-aos-anchor-placement="top-bottom"
		:to="way"
		class="r-link"
	>
		<svg
			width="38"
			height="13"
			viewBox="0 0 38 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="r-link__arrow"
			v-show="documentWidth > 1023"
		>
			<path
				d="M0 6.15625H37M37 6.15625L29.7734 12M37 6.15625L29.7734 1"
				stroke="#000888"
			/>
		</svg>

		<svg
			width="22"
			height="16"
			viewBox="0 0 22 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="r-link__arrow"
			v-show="documentWidth <= 1023"
		>
			<path
				d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z"
				fill="#000888"
			/>
		</svg>

		<p class="r-link__text">{{ text }}</p>
	</router-link>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		name: "rLink",
		props: {
			way: Object,
			text: String,
		},
		computed: {
			...mapState(["documentWidth"]),
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
			@media (max-width: 1023px) {
				min-width: inherit;
			}
		}
		&__text {
			color: $dark-blue;
			font-size: 1.4rem;
		}
	}
</style>
