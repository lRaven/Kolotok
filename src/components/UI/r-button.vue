<template>
	<button class="r-button shadow" :class="[color, reverse ? 'reverse' : '']">
		{{ text }}
		<img
			:src="
				documentWidth > 540
					? '/img/icon/arrow-long.svg'
					: '/img/icon/basket/arrow.svg'
			"
			alt="arrow"
			class="r-button__arrow"
			v-show="arrow"
		/>
	</button>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		name: "rButton",
		props: {
			text: String,
			arrow: {
				value: Boolean,
				default: false,
			},
			reverse: {
				value: Boolean,
				default: false,
			},
			color: String,
		},
		computed: {
			...mapState(["documentWidth"]),
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.r-button {
		display: flex;
		align-items: center;
		gap: 2rem;
		border-radius: 3rem;
		padding: 1.2rem 3rem;
		font-size: 1.6rem;
		width: max-content;
		transition: all 0.2s ease;
		@media (max-width: 540px) {
			padding: 1rem 1.2rem;
			font-size: 1.4rem;
		}

		&:disabled {
			cursor: default;
		}
		&:not(:disabled) {
			&:hover {
				transform: translateY(-0.3rem);
			}
			&:active {
				transform: translateY(-0.1rem);
			}
		}

		&.reverse {
			flex-direction: row-reverse;
		}

		&.yellow {
			background-color: $yellow;
			color: $dark-blue;
			font-weight: 500;
			&:disabled {
				background-color: rgba($light-gray, 0.7);
				color: $white;
			}
		}
		&.blue {
			background: linear-gradient(
				270.95deg,
				#000888 0%,
				#004cb8 46.35%,
				#005fd3 67.71%,
				#4fa5ff 100%
			);
			color: $white;
			font-weight: 700;
		}
		&.white {
			background-color: $white;
			color: $dark-blue;
			font-weight: 500;
		}

		&__arrow {
			height: 1.8rem;
			@media (max-width: 540px) {
				height: 1rem;
			}
		}
	}
</style>
