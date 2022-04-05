<template>
	<button
		class="animate__animated animate__fadeInUp wow r-button shadow"
		:class="color"
		:type="type"
	>
		{{ text }}
		<img
			src="img/icon/arrow-long.svg"
			alt=""
			class="r-button__arrow"
			v-if="arrow === true"
		/>
	</button>
</template>

<script>
	export default {
		name: "rButton",
		props: {
			text: String,
			type: String,
			arrow: Boolean,
			color: String,
		},
	};
</script>

<style lang="scss" scoped>
	.r-button {
		display: flex;
		align-items: center;
		gap: 2rem;
		border-radius: 3rem;
		padding: 1.2rem 3rem;
		font-size: 1.6rem;
		width: max-content;
		transition: all 0.2s ease;
		&.yellow {
			background-color: var(--yellow);
			color: var(--dark-blue);
			font-weight: 500;
		}
		&.blue {
			background: linear-gradient(
				270.95deg,
				#000888 0%,
				#004cb8 46.35%,
				#005fd3 67.71%,
				#4fa5ff 100%
			);
			color: #fff;
			font-weight: 700;
		}
		&:hover {
			transform: translateY(-0.3rem);
		}
		&:active {
			transform: translateY(-0.1rem);
		}
	}
</style>
