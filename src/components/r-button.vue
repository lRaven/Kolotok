<template>
	<button class="r-button shadow" :type="type">
		{{ text }}
		<img
			src="img/icon/arrow.svg"
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
		},
	};
</script>

<style lang="scss" scoped>
	.r-button {
		display: flex;
		align-items: center;
		gap: 2rem;
		border-radius: 3rem;
		background-color: var(--yellow);
		padding: 1.1rem 3rem;
		font-weight: 500;
		font-size: 1.4rem;
		width: max-content;
		transition: all 0.2s ease;
		&:hover {
			transform: translateY(-0.3rem);
		}
		&:active {
			transform: translateY(-0.1rem);
		}
	}
</style>
